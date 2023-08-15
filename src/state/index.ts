// import { computed, reactive, readonly, toRefs } from '@vue/reactivity';
// import { watch } from '@vue-reactivity/watch';
// export { watch } from '@vue-reactivity/watch'; // re-exported for frontend use
import { isBrowser, logger } from '../utils';
import { lsKey } from './watchers';
export * from './watchers';

import type { Account } from 'src/types';
import type { ClientType } from 'src/clients';
import type { WalletInitParamsObj, WalletType } from '../wallets/types'; // wallet bits
import { createWallet, signTransactions } from '../wallets/actions'; // needs to be AFTER the types import
import { WALLET_ID, type W_ID } from '../wallets/consts';

import { 
	ObservableMap, 
	autorun, 
	makeAutoObservable, 
	makeObservable, 
	isComputed,
	isBoxedObservable,
	isObservable,
	isObservableArray,
	observable, 
	observe, 
	reaction, 
	untracked,
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
let doingLocalChange = false;

export type AnyWalletStateConfig = {
	storageKey?: string;
	persist?: boolean;
	storageController?: StorageController;
	// sync?: boolean; // TODO future - support syncing state without persist: true
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
	
	// dev/debug
	arr = observable.array<number[]>([]); // no diff

	// TODO make these constructor params their own exported type
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

		const selfId = `${Math.random()}_${new Date().getTime()}`;

		const pingUpdate = () => {
			logger.log('pingUpdate');
			const evt = new CustomEvent('aw-state-change', {
				detail: {
					from: selfId,
					// stateNew: toJS(this),
					// stateNew: this,
				},
			});
			logger.log('dispatching c evt', evt);
			window.top!.dispatchEvent(evt);	
		}

		if (config) {
			//

			let isB = isBrowser();
			if (!isB && config.persist == true) {
				console.warn('Persisting to storage outside browser. Make sure you have set an appropriate storageController.');
			}


			
			// keep watchers OUTSIDE of the persist true block...

			// acct watcher
			reaction(
				() => this.activeAccount,
				async (a) => {
					logger.log('activeAccount changed', a);
					this.changedAccountHandlers.forEach(h => h(a));

					if (!doingRemoteChange && !doingLocalChange) {
						pingUpdate();
					}
				}
			);


			observe(
				this,
				() => {
					logger.log('observed');

					if (!doingRemoteChange && !doingLocalChange) {
						pingUpdate();
					}
					
				}
			);

			observe(
				this.connectedAccounts,
				(t) => {
					logger.log('connectedAccounts observed', t);
					if (!doingRemoteChange && !doingLocalChange) {
						pingUpdate();
					}
				}
			)

			// TODO make sure doing arr.push works (it DOESNT work w arr.push IF de/serialize isnt set to obvious str save/parse )
			reaction(
				() => this.connectedAccounts.length,
				async (t) => {
					logger.log('connectedAccounts length change')
					if (!doingRemoteChange && !doingLocalChange) {
						pingUpdate();
					}
					
				}
			);


			// dev/debug
			observe(
				this.arr,
				(t) => {
					logger.log('arr observed', t);
					if (!doingRemoteChange && !doingLocalChange) {
						pingUpdate();
					}
				}
			)
			// TODO make sure doing arr.push works (it DOESNT work w arr.push IF de/serialize isnt set to obvious str save/parse )
			reaction(
				() => this.arr.length,
				async (t) => {
					logger.log('arr length change')
					if (!doingRemoteChange && !doingLocalChange) {
						pingUpdate();
					}
					
				}
			);



			if (config.persist == true) {
				//
				const storageKey = config.storageKey || new Date().getTime().toString();

				makePersistable(this, { 
					name: storageKey,
					// properties: propsToStore as any,
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
					storage: config.storageController ? config.storageController : config.persist ? window.localStorage : undefined,
					// debugMode: true,
				}).then((pStore) => {
					logger.log('pStore', pStore);
					logger.log('initing reaction');
					
					// observe(
					// 	this,
					// 	() => {
					// 		logger.log('observed');

					// 		if (!doingRemoteChange && !doingLocalChange) {
					// 			pingUpdate();
					// 		}
							
					// 	}
					// );

					// observe(
					// 	this.arr,
					// 	(t) => {
					// 		logger.log('arr observed', t);
					// 		if (!doingRemoteChange && !doingLocalChange) {
					// 			pingUpdate();
					// 		}
					// 	}
					// )

					// // TODO make sure doing arr.push works (it DOESNT work w arr.push IF de/serialize isnt set to obvious str save/parse )
					// reaction(
					// 	() => this.arr.length,
					// 	async (t) => {
					// 		logger.log('arr length change')
					// 		if (!doingRemoteChange && !doingLocalChange) {
					// 			pingUpdate();
					// 		}
							
					// 	}
					// );


					// // acct watcher
					// reaction(
					// 	() => this.activeAccount,
					// 	async (a) => {
					// 		logger.log('activeAccount changed', a);
					// 		this.changedAccountHandlers.forEach(h => h(a));
					// 	}
					// );




					// logger.log('deepObserve', deepObserve);
					// TODO figure out why this doesnt work...
					// deepObserve(
					// 	this,
					// 	(s) => {
					// 		logger.log('deepObserve change', s);
					// 	}
					// );

					

					// // listen only once per aw inst
					window.top!.addEventListener('aw-state-change', async (e) => {
						logger.log('caught aw-state-change evt', e);
						// logger.log('from', (e as CustomEvent).detail.from);
						// logger.log('selfId', selfId);

						if ((e as CustomEvent).detail.from !== selfId) {
							// logger.log('change other store inst');
							doingRemoteChange = true;

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
								// doingRemoteChange = false;
								setTimeout(() => {
									doingRemoteChange = false;
								}, 10);
								
							}, 10);							
						}
					}, false);

					const resetStore = () => {
						logger.log('resetStore');
				
						// doingLocalChange = true;
						pStore.pausePersisting();

						// reset things:
						this.initVars();

						setTimeout(() => {
							pStore.startPersisting();
							// doingLocalChange = false;
						}, 100);
					}


					// works if another window/tab change ls storage key, but NOT 2 els on same page...
					window.addEventListener('storage', (e) => {
						logger.log('storage evt', e);

						if (e.key == null) {
							// remove everything
							resetStore();
						} else if (e.key == storageKey) {
							if (e.newValue == null) {
								resetStore();
							} else {
								// update vals
								let newVStr = e.newValue;
								let newVObj = JSON.parse(newVStr) as typeof this;
								logger.log('newVObj', newVObj);

								// doingLocalChange = true;
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
									this[k] = v;
								}

								setTimeout(() => {
									// doingLocalChange = false;
									logger.log('startPersist');
									pStore.startPersisting();
								}, 10);
							}
							
						} else {
							// nothing. (something we dont care abt changed)
						}
					}, false);


				});
				// end persist observ
			}

		}
		//		
		

  	}


	// ACTIONS

	initVars() {
		logger.log('initVars');
		this.activeAccount = null;
		this.connectedAccounts = []; // observable.array<Account[]>([]);
		// dev
		this.arr = observable.array<number[]>([]);
	}	
	addConnectedAccounts(accounts: Account[]) {
		// logger.log('addConnectedAccounts', accounts);
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

	// sign txns
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
	

	// COMPUTEDs 
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




// export const AnyWalletState = reactive({
// 	allWallets: {
// 		// [WALLET_ID.PERA]: createWallet<ClientType<typeof WALLET_ID.PERA>>(WALLET_ID.PERA),
// 		// [WALLET_ID.INKEY]: createWallet<ClientType<typeof WALLET_ID.INKEY>>(WALLET_ID.INKEY),
// 		// [WALLET_ID.MYALGO]: createWallet<ClientType<typeof WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
// 		// [WALLET_ID.ALGOSIGNER]: createWallet<ClientType<typeof WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
// 		// [WALLET_ID.EXODUS]: createWallet<ClientType<typeof WALLET_ID.EXODUS>>(WALLET_ID.EXODUS),
// 		// [WALLET_ID.DEFLY]: createWallet<ClientType<typeof WALLET_ID.DEFLY>>(WALLET_ID.DEFLY),
// 		// [WALLET_ID.MNEMONIC]: createWallet<ClientType<typeof WALLET_ID.MNEMONIC>>(WALLET_ID.MNEMONIC),
		
// 		// [WALLET_ID.PERA]: createWallet<ClientType<typeof WALLET_ID.PERA>>(this, WALLET_ID.PERA),
// 		// [WALLET_ID.INKEY]: createWallet<ClientType<typeof WALLET_ID.INKEY>>(this, WALLET_ID.INKEY),
// 		// [WALLET_ID.MYALGO]: createWallet<ClientType<typeof WALLET_ID.MYALGO>>(this, WALLET_ID.MYALGO),
// 		// [WALLET_ID.ALGOSIGNER]: createWallet<ClientType<typeof WALLET_ID.ALGOSIGNER>>(this, WALLET_ID.ALGOSIGNER),
// 		// [WALLET_ID.EXODUS]: createWallet<ClientType<typeof WALLET_ID.EXODUS>>(this, WALLET_ID.EXODUS),
// 		// [WALLET_ID.DEFLY]: createWallet<ClientType<typeof WALLET_ID.DEFLY>>(this, WALLET_ID.DEFLY),
// 		// [WALLET_ID.MNEMONIC]: createWallet<ClientType<typeof WALLET_ID.MNEMONIC>>(this, WALLET_ID.MNEMONIC),
// 	} as any,

// 	// === localstorage === (FYI: dont put Maps or Sets or Functions in this)
// 	stored: {
// 		version: 0, // for future schema changes, can translate old structs to new
// 		connectedAccounts: [] as Account[],
// 		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
// 	},

// 	// === computeds ===
// 	activeAddress: readonly(computed(() => {
// 		let a = '';
// 		if (AnyWalletState.stored.activeAccount) {
// 			a = AnyWalletState.stored.activeAccount.address;
// 		}
// 		return a; // as string;
// 	})),
// 	activeAccount: readonly(computed(() => {
// 		let acct = null;
// 		if (AnyWalletState.stored.activeAccount) {
// 			acct = AnyWalletState.stored.activeAccount as Account; // needs this cast for some reason...
// 		}
// 		return acct;
// 	})),
// 	connectedAccounts: readonly(computed(() => {
// 		let cAccts = [] as Account[];
// 		if (AnyWalletState.stored.connectedAccounts) {
// 			cAccts = AnyWalletState.stored.connectedAccounts; // needs this cast for some reason...
// 		}
// 		return cAccts;
// 	})),
// 	activeWalletId: readonly(computed(() => {
// 		let aWId: null | W_ID = null;
// 		if (AnyWalletState.stored.activeAccount) {
// 			aWId = AnyWalletState.stored.activeAccount.walletId as W_ID; // sometimes vue-r isnt smart enough to figure out this nested type. or maybe its an enum thing
// 		}
// 		return aWId;
// 	})),
// 	activeWallet: readonly(computed(() => {
// 		let aW: undefined | WalletType = undefined;
// 		if (AnyWalletState.activeWalletId !== null) {
// 			aW = AnyWalletState.allWallets[AnyWalletState.activeWalletId] as undefined | WalletType;
// 		}
// 		return aW;
// 	})) as unknown as undefined | WalletType, // this type assertion is needed to help w max inferred type size exceeded
// 	isSigning: readonly(computed(() => {
// 		let someWalletIsSigning = false;
// 		for (let [k, w] of Object.entries(AnyWalletState.allWallets)) {
// 			// if (w.signing) {
// 			if ((w as any).signing) {
// 				someWalletIsSigning = true;
// 				break;
// 			}
// 		}
// 		return someWalletIsSigning;
// 	})),
// 	isIniting: readonly(computed(() => {
// 		let someWalletIsIniting = false;
// 		for (let [k, w] of Object.entries(AnyWalletState.allWallets)) {
// 			// if (w.initing) {
// 			if ((w as any).initing) {
// 				someWalletIsIniting = true;
// 				break;
// 			}
// 		}
// 		return someWalletIsIniting;
// 	})),
// });

// export const recallState = () => {
// 	logger.log('recallState');
	
// 	// FYI only run LS code in browser, not node or v8
// 	if (isBrowser()) {
// 		const initLocalStorage = () => {
// 			logger.log('initLocalStorage');
// 			try {
// 				let onLoadLStor = localStorage.getItem(lsKey);
// 				if (onLoadLStor) {
// 					try {
// 						type StoredType = typeof AnyWalletState.stored;
// 						let onLoadLStorObj: StoredType = JSON.parse(onLoadLStor);
// 						// logger.log('onLoadLStorObj', onLoadLStorObj);
// 						AnyWalletState.stored = onLoadLStorObj;
// 					} catch (e) {
// 						console.warn('bad sLocalStorage parse');
// 					}
// 				}
// 			} catch(e) {
// 				console.warn('could not access localstorage');
// 			}
// 		}
// 		initLocalStorage(); // recall local storage object (1 time on load!)	
// 	}
// };

// once on load, kick off the watchers
// startWatchers(); // FYI: should only happen ONCE + watchers MUST be started AFTER the state inits
