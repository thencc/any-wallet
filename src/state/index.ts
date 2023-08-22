import { isBrowser, logger } from '../utils';
export * from './watchers';

import type { Account } from 'src/types';
import type { ClientType } from 'src/clients';
import type { WalletInitParamsObj, WalletType } from '../wallets/types'; // wallet bits
import { createWallet, signTransactions } from '../wallets/actions'; // needs to be AFTER the types import
import { WALLET_ID, type W_ID } from '../wallets/consts';

import { 
	makeAutoObservable, 
	observable, 
	observe, 
	reaction, 
	toJS,
} from 'mobx';
import { 
	makePersistable, 
	getPersistedStore, 
	hydrateStore, 
	type PersistStore, 
	type PersistenceStorageOptions,
	StorageController
} from 'mobx-persist-store';

// TODO figure out why this doesnt work...
// import { deepObserve } from 'mobx-utils';

// needed to help w sync btwn multiple instances (dux) on 1 page 
let doingRemoteChange = false;

export type AnyWalletStateConfig = {
	storageKey?: string;
	storageController?: StorageController;
	// sync?: boolean; // TODO future - support syncing state without persisting (ie multiple dux on a page)
};

export class AnyWalletState {	
	allWallets = {
		[WALLET_ID.PERA]: createWallet<ClientType<typeof WALLET_ID.PERA>>(this, WALLET_ID.PERA),
		[WALLET_ID.INKEY]: createWallet<ClientType<typeof WALLET_ID.INKEY>>(this, WALLET_ID.INKEY),
		[WALLET_ID.MYALGO]: createWallet<ClientType<typeof WALLET_ID.MYALGO>>(this, WALLET_ID.MYALGO),
		[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<typeof WALLET_ID.ALGOSIGNER>>(this, WALLET_ID.ALGOSIGNER),
		[WALLET_ID.EXODUS]: createWallet<ClientType<typeof WALLET_ID.EXODUS>>(this, WALLET_ID.EXODUS),
		[WALLET_ID.DEFLY]: createWallet<ClientType<typeof WALLET_ID.DEFLY>>(this, WALLET_ID.DEFLY),
		[WALLET_ID.MNEMONIC]: createWallet<ClientType<typeof WALLET_ID.MNEMONIC>>(this, WALLET_ID.MNEMONIC),
	};
	activeAccount!: null | Account;
	connectedAccounts!: Account[];
	changedAccountHandlers = new Set<any>();
	arr = observable.array<number[]>([]); // dev/debug

	constructor(config?: AnyWalletStateConfig) {
		this.initVars();

		makeAutoObservable(this, {
			arr: observable.deep, // dev/debug
			
			// stored
			connectedAccounts: observable.deep,
			activeAccount: observable,
		
			// DONT TRACK
			allWallets: false,
			changedAccountHandlers: false, 
		}, {
			deep: true
		});


		if (config) {
			// FYI keep watchers OUTSIDE storage logic
			initWatchers(this);

			// if storageKey is set, we ARE persisting data to storage
			if (config.storageKey) {
				this.storageKey = config.storageKey;
				if (config.storageController) {
					this.storageController = config.storageController;
				} else {
					if (config.storageKey) {
						if (isBrowser()) {
							this.storageController = window.localStorage;
						} else {
							console.warn('Provide a storageController if you want to persist state outside browser.');	
						}
					}
				}

				makePersistable(this, { 
					name: this.storageKey,
					properties: [
						// works but TYPINGS dont w multiple arr items
						// {
						// 	key: 'activeAccount',
						// 	serialize: (v) => {
						// 		// logger.log('serialize', v);
						// 		// return JSON.stringify( toJS(v) );
						// 		return toJS(v);
						// 	},
						// 	deserialize: (v) => {
						// 		// logger.log('deserialize', v);
						// 		// return observable.array(JSON.parse(v));
						// 		return observable(v);
						// 	},
						// },
						{
							key: 'activeAccount',
							serialize: (v: any) => {
								// logger.log('serialize', v);
								// return JSON.stringify( toJS(v) );
								return toJS(v);
							},
							deserialize: (v: any) => {
								// logger.log('deserialize', v);
								// return observable.array(JSON.parse(v));
								return observable(v);
							},
						} as any,
						{
							key: 'connectedAccounts',
							serialize: (v) => {
								// logger.log('serialize', v);
								// return JSON.stringify( toJS(v) );
								return toJS(v);
							},
							deserialize: (v) => {
								// logger.log('deserialize', v);
								// return observable.array(JSON.parse(v));
								return observable.array(v);
							},
						},


						// 'arr',
						{
							key: 'arr',
							serialize: (v) => {
								return toJS(v);
							},
							deserialize: (v) => {
								// necessary (de)serialize func to make persist watch pickup changes for arr.push
								return observable.array(v);
							},
						},
					], 
					storage: this.storageController,
					// debugMode: true,
				}).then((pStore) => {
					logger.log('pStore inited', pStore);
					
					// logger.log('deepObserve', deepObserve);
					// TODO figure out why this doesnt work...
					// deepObserve(
					// 	this,
					// 	(s) => {
					// 		logger.log('deepObserve change', s);
					// 	}
					// );

					initListeners(this, pStore);
				});
			}
		}
  	}

	
	// === STATE SYNC ===
	selfId = `${Math.random()}_${new Date().getTime()}`;
	storageKey = undefined as undefined | string;
	storageController = undefined as undefined | StorageController;
	// sync state btwn elements on the same page
	emitSyncStates = () => {
		logger.log('emitSyncStates');
		if (isBrowser()) {
			if (!doingRemoteChange) {
				const evt = new CustomEvent('aw-state-change', {
					detail: {
						from: this.selfId,
						// stateNew: toJS(this),
						// stateNew: this,
					},
				});
				logger.log('dispatching c evt', evt);
				window.top!.dispatchEvent(evt);	
			}
		} else {
			console.warn('Not in browser, no access to Window. Will not dispatch custom event');
		}
	}
	

	// === ACTIONS ===
	initVars() {
		logger.log('initVars');
		this.activeAccount = null;
		this.connectedAccounts = []; // observable.array<Account[]>([]);
		// dev
		this.arr = observable.array<number[]>([]);
	}	
	addConnectedAccounts(accounts: Account[]) {
		logger.log('addConnectedAccounts', accounts);
		for (let newAcct of accounts) {
			let exists = false;
			for (let existingAcct of this.connectedAccounts) {
				if (newAcct.walletId == existingAcct.walletId &&
					newAcct.address == existingAcct.address) {
					exists = true;
				}
			}
			if (!exists) {
				this.connectedAccounts.push(newAcct);
			}
		}
	}
	setAsActiveAccount = (acct: Account) => {
		logger.debug('setAsActiveAccount', acct);
	
		acct.active = true; // needed here as well as below
		acct.dateLastActive = new Date().getTime();
		
		this.activeAccount = acct;
	
		// change .active bool
		this.connectedAccounts.forEach(ca => {
			// is it the same?
			if (ca.walletId == acct.walletId && 
				ca.address == acct.address &&
				ca.name == acct.name
				) {
					ca.active = true;
				}
			else {
				ca.active = false;
			}
		});
	}
	removeAccount = (acct: Account) => {
		if (this.activeAccount) {
			// nullify active acct if its being removed (FYI this has to come first)
			let acctsToRemove = this.connectedAccounts.filter(
				(a) => {
					return 	(a.walletId == acct.walletId) &&
							(a.name == acct.name) &&
							(a.address == acct.address)
				}
			);
	
			for (let acct of acctsToRemove) {
				if (acct.address == this.activeAccount.address &&
					acct.walletId == this.activeAccount.walletId) {
					this.activeAccount = null; // unsets activeAccount
					break;
				}
			}
		}
	
		let acctsToKeep = this.connectedAccounts;
		let rmvIdx = acctsToKeep.findIndex(a => {
			return (a.walletId == acct.walletId) &&
				(a.address == acct.address) &&
				(a.name == acct.name)
		});
		acctsToKeep.splice(rmvIdx, 1);
	
		this.connectedAccounts = acctsToKeep;
	}
	removeAllAccounts = () => {
		this.activeAccount = null;
		this.connectedAccounts = [];
	}
	removeAccountsByWalletId = (id: W_ID) => {
		logger.debug('removeAccountsByWalletId', id);
		if (this.activeAccount) {
			// nullify active acct if its being removed (FYI this has to come first)
			let acctsToRemove = this.connectedAccounts.filter(
				(account) => account.walletId == id
			);
			for (let acct of acctsToRemove) {
				if (acct.address == this.activeAccount.address &&
					acct.walletId == this.activeAccount.walletId) {
					this.activeAccount = null; // unsets activeAccount
					break;
				}
			}
		}
	
		// remove this client's accts
		let acctsToKeep = this.connectedAccounts.filter(
			(account) => account.walletId !== id
		);
		this.connectedAccounts = acctsToKeep;
	};
	getAccountsByWalletId = (id: W_ID) => {
		return this.connectedAccounts.filter((account) => account.walletId === id);
	};
	initWallet = <W extends W_ID, P extends WalletInitParamsObj[W]>(wId: W, wInitParams: P) => {
		const w = this.allWallets[wId];
		if (!w) {
			throw new Error(`Unknown wallet: ${wId}`);
		}
		if (wInitParams !== undefined) {
			w.initParams = wInitParams as Exclude<typeof wInitParams, String>; // this weird exclude string shim is needed to make the mnemonic wallet init simpler (providing mnemonic str directly);
		} else {
			logger.log(`didnt update wallet's init params... kept whatever existed before`);
		}
		return w;
	}
	initWallets = (
		walletInits: WalletInitParamsObj,
	) => {
		logger.log('initWallets started', walletInits);
		for (let [wKey, wInitParams] of Object.entries(walletInits)) {
			let wId = wKey as W_ID; // could just be a unique id for double initing but why
			this.initWallet(wId, wInitParams);
		}
		return this.allWallets;
	}
	connectWallet = async <W extends W_ID, P extends WalletInitParamsObj[W]>(wId: W, wInitParams?: P) => {
		// possibly set init params...
		if (wInitParams !== undefined) {
			this.initWallet(wId, wInitParams);
		}
		// then, connect
		const w = this.allWallets[wId];
		if (!w) {
			throw new Error(`Unknown wallet: ${wId}`);
		}
		return await w.connect();
	};
	disconnectWallet = async <W extends W_ID>(wId: W) => {
		const w = this.allWallets[wId];
		if (!w) {
			throw new Error(`Unknown wallet: ${wId}`);
		}
		if (w.isConnected) {
			return await w.disconnect();
		} else {
			logger.debug('disconnectWallet > wallet not connected:', wId, )
		}
	};
	disconnectAllWallets = async () => {
		logger.debug('disconnectAllWallets');
		Object.values(this.allWallets).forEach(async (w) => {
			await this.disconnectWallet(w.id);
		});
	};
	signTransactions = async (txns: Uint8Array[]) => {
		return await signTransactions(this, txns);
	};
	subscribeToAccountChanges = (handler: (a: null | Account) => void, opts: { callOnSet: boolean } = { callOnSet: true }) => {
		this.changedAccountHandlers.add(handler);
		if (opts.callOnSet) handler(this.activeAccount); // call it once on set
		
		// unsubscribe fn
		const unsubscribe = () => {
			this.changedAccountHandlers.delete(handler);
		};
		return unsubscribe;
	};
	

	// === COMPUTEDs ===
	get activeAddress() {
        let a = '';
		if (this.activeAccount) {
			a = this.activeAccount.address;
		}
		return a;
    }
	get activeWalletId() {
        let aWId: null | W_ID = null;
		if (this.activeAccount) {
			aWId = this.activeAccount.walletId as W_ID; // sometimes vue-r isnt smart enough to figure out this nested type. or maybe its an enum thing
		}
		return aWId;
    }
	get activeWallet() {
        let aW: undefined | WalletType = undefined;
		if (this.activeWalletId !== null) {
			aW = this.allWallets[this.activeWalletId] as undefined | WalletType;
		}
		return aW;
    }
	get isSigning() {
        let someWalletIsSigning = false;
		for (let [k, w] of Object.entries(this.allWallets)) {
			if (w.signing) {
				someWalletIsSigning = true;
				break;
			}
		}
		return someWalletIsSigning;
    }
	get isIniting() {
        let someWalletIsIniting = false;
		for (let [k, w] of Object.entries(this.allWallets)) {
			if (w.initing) {
				someWalletIsIniting = true;
				break;
			}
		}
		return someWalletIsIniting;
    }
}

const resetStore = <T extends AnyWalletState>(state: T, pStore: PersistStore<T, any>) => {
	logger.log('resetStore', state.selfId);
	pStore.pausePersisting();
	state.initVars(); // resets vars to initial state
	
	// timeout is only consist way to get desired behavior
	setTimeout(() => {
		pStore.startPersisting();
	}, 100); 
};

const initWatchers = (state: AnyWalletState) => {
	logger.log('initWatchers', state.selfId);

	observe(
		state, // everything
		() => {
			logger.log('observed');
			state.emitSyncStates();					
		}
	);
	reaction(
		() => state.activeAccount,
		async (a) => {
			logger.log('activeAccount changed', a);
			state.changedAccountHandlers.forEach(h => h(a));
			state.emitSyncStates();
		}
	);
	observe(
		state.connectedAccounts,
		(t) => {
			logger.log('connectedAccounts observed', t);
			state.emitSyncStates();
		}
	)
	reaction(
		() => state.connectedAccounts.length,
		async (t) => {
			logger.log('connectedAccounts length change')
			state.emitSyncStates();
		}
	);


	// dev/debug
	observe(
		state.arr,
		(t) => {
			logger.log('arr observed', t);
			state.emitSyncStates();
		}
	)
	// TODO make sure doing arr.push works (it DOESNT work w arr.push IF de/serialize isnt set to obvious str save/parse )
	reaction(
		() => state.arr.length,
		async (t) => {
			logger.log('arr length change')
			state.emitSyncStates();
		}
	);
};

const initListeners = <T extends AnyWalletState>(state: T, pStore: PersistStore<T, any>) => {
	logger.log('initListeners', state.selfId);
		
	if (!(isBrowser())) {
		console.warn('No attaching Window event listeners (aw-state-change, dom storage)');
	} else {
		// listen only once per aw inst
		window.top!.addEventListener('aw-state-change', async (e) => {
			logger.log('caught aw-state-change evt', e);
			// logger.log('from', (e as CustomEvent).detail.from);
			// logger.log('selfId', selfId);

			if ((e as CustomEvent).detail.from !== state.selfId) {
				// logger.log('change other store inst');
				doingRemoteChange = true;

				// test for state change w persist:false
				// const dd = (e as CustomEvent).detail.stateNew;
				// logger.log('dd', dd);
				// for (let k in dd) {
				// 	let v = dd[k];
				// 	if (!v.isMobxAction) {
				// 		//
				// 	}
				// 	logger.log('tpyeof d', v);
				// 	logger.log('k',k,'v', v,' - ', isObservable(v));
				// }

				// works! w timeout 
				setTimeout(async () => {
					logger.log('timeout hyd store');
					await pStore.hydrateStore();

					// NOTE: dont use this.doingR ("this" loses scope. becomes the event? )
					setTimeout(() => {
						doingRemoteChange = false;
					}, 10);
				}, 10);					
			}
		}, false);

		// works if another window/tab change ls storage key, but NOT 2 els on same page...
		window.addEventListener('storage', (e) => {
			logger.log('storage evt', e);

			if (e.key == null) {
				// remove everything
				resetStore(state, pStore);
			} else if (e.key == state.storageKey) {
				if (e.newValue == null) {
					resetStore(state, pStore);
				} else {
					// update vals
					let newVStr = e.newValue;
					let newVObj = JSON.parse(newVStr) as typeof state;
					logger.log('newVObj', newVObj);

					logger.log('pausingPersist');
					pStore.pausePersisting();

					// ex obj loop w correct typing:
					for (let k in newVObj) {
						let v = newVObj[k];
						// for serialize w stringify use:
						// if (typeof v == 'string') {
						// 	v = JSON.parse(v);
						// }
						logger.log(`${k}: ${v}`);
						state[k] = v;
					}

					setTimeout(() => {
						logger.log('startPersist');
						pStore.startPersisting();
					}, 10);
				}
			} else {
				// nothing. (something we dont care abt changed thing)
			}
		}, false);	
	}
};
