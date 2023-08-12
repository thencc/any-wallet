import { computed, reactive, readonly, toRefs } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-exported for frontend use
import { isBrowser, logger } from '../utils';
import { lsKey, startWatchers } from './watchers';
export * from './watchers';

import type { Account } from 'src/types';
import type { ClientType } from 'src/clients';
import type { WalletType } from '../wallets/types'; // wallet bits
import { createWallet } from '../wallets/actions'; // needs to be AFTER the types import
import { WALLET_ID, type W_ID } from '../wallets/consts';



import { 
	ObservableMap, 
	autorun, 
	makeAutoObservable, 
	makeObservable, 
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
	type PersistStore 
} from 'mobx-persist-store';

import { deepObserve } from 'mobx-utils';
import { createObservableArray } from 'mobx/dist/internal';

export * from './user-store';

// needed to help w sync btwn multiple instances (dux) on 1 page 
let doingRemoteChange = false;
let doingLocalChange = false;

export class SampleStore {
	allWallets = {
		[WALLET_ID.PERA]: createWallet<ClientType<typeof WALLET_ID.PERA>>(WALLET_ID.PERA),
		[WALLET_ID.INKEY]: createWallet<ClientType<typeof WALLET_ID.INKEY>>(WALLET_ID.INKEY),
		[WALLET_ID.MYALGO]: createWallet<ClientType<typeof WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
		[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<typeof WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
		[WALLET_ID.EXODUS]: createWallet<ClientType<typeof WALLET_ID.EXODUS>>(WALLET_ID.EXODUS),
		[WALLET_ID.DEFLY]: createWallet<ClientType<typeof WALLET_ID.DEFLY>>(WALLET_ID.DEFLY),
		[WALLET_ID.MNEMONIC]: createWallet<ClientType<typeof WALLET_ID.MNEMONIC>>(WALLET_ID.MNEMONIC),
	};


	//
	someArr: [] = [];
	hello = 'world';
	count = 0;
	stored = {
		ver: 0,
		accts: []
	};

	// todos = [];
	todos = observable.array<number[]>([]); // no diff

	users = new ObservableMap<string, { name: string; id: number }>();

	// someSet = new Set();

	constructor(
		params?: {
			key?: string,
			persist?: boolean,
		}
	) {
		// TODO init vars using existing store w same id if possible (even not in localstorage)

		/*
		makeObservable(this, {
			// todos: observable,
			todos: observable.deep,
		}, {
			deep: true
		});

		console.log('inited todo reaction...')
		reaction(
			() => this.todos, 
			(t) => {
				console.log('1 todo changed', t);
			}
		);
		reaction(
			() => this.todos.length, 
			(t) => {
				console.log('2 todo changed', t);
			}
		);

		observe(
			this.todos,
			(t) => {
				console.log('todos observed', t);
			}
		)
		*/

		// makeAutoObservable(this);

		// makeAutoObservable(this, {}, { 
		// 	autoBind: true,
		// 	deep: true
		// });

		makeAutoObservable(this, {
			stored: observable.deep,
			count: true, // true aka auto
			todos: observable.deep,
			// todos: observable.array([]),
			// todos: observable,

			//
			allWallets: false, // DONT track
		}, {
			deep: true
		});

		const selfId = `${Math.random()}_${new Date().getTime()}`;

		const pingUpdate = () => {
			console.log('pingUpdate');
			const evt = new CustomEvent('aw-state-change', {
				detail: {
					from: selfId,
				},
			});
			console.log('dispatching c evt', evt);
			window.top!.dispatchEvent(evt);	
		}

		if (params) {
			//
			if (params.persist == true) {
				//
				const storageKey = params.key || new Date().getTime().toString();

				// this.todos.toJSON()

				makePersistable(this, { 
					name: storageKey,
					properties: [
						'someArr' as any, // casting as any here messed up typings in other vals
						// {
						// 	key: 'someArr',
						// 	serialize: (v) => {
						// 		return v;
						// 	},
						// 	deserialize: (v) => {
						// 		return v;
						// 	}
						// },
						

						// 'stored',
						// 'todos', // Hmmm... persisted state doesnt track arr.push, just entire changes

						// works w custom (de)serialize
						{
							key: 'todos',
							serialize: (v) => {
								console.log('serialize', v);
								// return v.join(',');
								// return JSON.stringify([...v]);
								// return toJS(v); // convert to unrelated js obj
								// return JSON.stringify( toJS(v) );
								return toJS(v);
							},
							deserialize: (v) => {
								console.log('deserialize', v);
								// return v.split(',');
								// return new Map(JSON.parse(v));
								// return createObservableArray(JSON.parse(v));
								// return observable.array(JSON.parse(v));
								return observable.array(v);
							},
						},

						// 'someSet',
						// 'hello', 
						// 'count',
						// 'users',
					], 
					storage: params.persist ? window.localStorage : undefined,
					// debugMode: true,
				}).then((pStore) => {
					console.log('pStore', pStore);
					
					//

					console.log('initing reaction');

					// observe(this, 'someArr', (a) => {
					// 	console.log('someArr xxx', a);
					// });
					
					observe(
						this,
						() => {
							console.log('observed');

							if (!doingRemoteChange && !doingLocalChange) {
								pingUpdate();
							}
							
						}
					);


					observe(
						this.todos,
						(t) => {
							console.log('todos observed', t);
							if (!doingRemoteChange && !doingLocalChange) {
								pingUpdate();
							}
						}
					)

					// TODO make sure doing arr.push works (it DOESNT work w arr.push IF de/serialize isnt set to obvious str save/parse )
					reaction(
						() => this.todos.length,
						async (t) => {
							console.log('todos length change')
							
							// breaks mobx-persist
							/*
							await pStore.pausePersisting();
							await pStore.startPersisting();
							*/

							// pingUpdate();
							if (!doingRemoteChange && !doingLocalChange) {
								pingUpdate();
							}
							
						}
					);
					


					// console.log('deepObserve', deepObserve);
					// doesnt work...
					deepObserve(
						this,
						(s) => {
							console.log('deepObserve change', s);
						}
					);
					// deepObserve(
					// 	this.stored,
					// 	(sto) => {
					// 		console.log('sto deepObserve change', sto);
					// 	}
					// );

					/*
					autorun(() => {
						console.log('le autoruuun');
						// console.log(this.stored.ver);
						// console.log(this.stored.accts.length); // works 
						// console.log(JSON.stringify(this.stored.accts)); // work for push + entire set vals
						console.log(JSON.stringify(this)); // works for all (but is kinda heavy...)

						// const evt = new CustomEvent('aw-state-change', {
						// 	detail: {
						// 		from: selfId,
						// 		// uuid: Math.random(),
						// 		// count: c,
						// 	},
						// });
						// console.log('dispatching c evt', evt);
						// window.top!.dispatchEvent(evt);	
					});
					*/

					// works:
					// reaction(
					// 	() => this.stored.ver,
					// 	(sto) => {
					// 		console.log('sto ver changed', sto);
					// 	}
					// );

					/*
					reaction(
						() => this.count,
						(c) => {
							console.log('ccount changed', c);

							const evt = new CustomEvent('aw-state-change', {
								detail: {
									from: selfId,
									// uuid: Math.random(),
									// count: c,
								},
							});
							console.log('dispatching c evt', evt);
							window.top!.dispatchEvent(evt);	
						}
					);
					*/

					// autorun(() => {
					// 	// this;
					// 	console.log('autorun-ed');
					// 	console.log(this.count);
					// 	console.log(this.hello);
					// 	// console.log('auto count', this.count);
					// });

					// reaction(
					// 	() => this.count, 
					// 	(ss) => {
					// 		console.log('ss reaction', ss);
					// 	}
					// );

					// console.log('initing deepObserve');
					// deepObserve(
					// 	this,
					// 	(ss) => {
					// 		console.log('ss reaction', ss);
					// 	}
					// )

					/*
					reaction(
						() => this.count, 
						async (c) => {
							console.log('c changed:', c);
							// await pStore.hydrateStore();
							// await this.hydrateStore();

							// pStore.stopPersisting();
							const evt = new CustomEvent('aw-state-change', {
								detail: {
									from: selfId,
									// uuid: Math.random(),
									// count: c,
								},
							});
							console.log('dispatching c evt', evt);
							window.top!.dispatchEvent(evt);	
							// pStore.startPersisting();
						}
					);
					*/

					// listen only once per aw inst
					window.top!.addEventListener('aw-state-change', async (e) => {
						// console.log('caught aw-state-change evt', e);
						// console.log('from', (e as CustomEvent).detail.from);
						// console.log('selfId', selfId);

						if ((e as CustomEvent).detail.from !== selfId) {
							// console.log('change other store inst');
							doingRemoteChange = true;

							// works! w timeout 
							setTimeout(async () => {
								console.log('timeout hyd store');
								await pStore.hydrateStore();

								// NOTE: dont use this.doingR ("this" loses scope. becomes the event? )
								// doingRemoteChange = false;
								setTimeout(() => {
									doingRemoteChange = false;
								}, 100);
								
							}, 10);							
						}
					}, false);

					const resetStore = () => {
						console.log('resetStore');
				
						// doingLocalChange = true;
						pStore.pausePersisting();

						this.todos = observable.array<number[]>([]);
						this.someArr = [];

						setTimeout(() => {
							pStore.startPersisting();
							// doingLocalChange = false;
						}, 100);	
					}


					// works if another window/tab change ls storage key, but NOT 2 els on same page...
					window.addEventListener('storage', (e) => {
						console.log('storage evt', e);

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
								console.log('newVObj', newVObj);

								// doingLocalChange = true;
								console.log('pausingPersist');
								pStore.pausePersisting();

								// ex obj loop w correct typing:
								for (let k in newVObj) {
									let v = newVObj[k];
									// if (typeof v == 'string') {
									// 	v = JSON.parse(v);
									// }
									console.log(`${k}: ${v}`);
									this[k] = v;
								}

								setTimeout(() => {
									// doingLocalChange = false;
									console.log('startPersist');
									pStore.startPersisting();
								}, 300);
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


	  addUser(schoolId: string, user: { name: string; id: number }) {
		console.log("setuser");
		this.users.set(schoolId, { name: "bob", id: 1 });
	  }
	  changeUserName(schoolId: string, id: string, name: string) {
		console.log("change username");
		const user = this.users.get(schoolId);
		if (user) {
		  user.name = name;
		}
	  }
	  clearUsers() {
		this.users.clear();
	  }

	/*
	async doHydrateStore(pS: any) {
	// async doHydrateStore(pS: PersistStore<this, "someArr" | "count">) {
		console.log('doHydrateStore started');

		// should be as easy as this but it turns off one of the stores persistence sync 
		// await hydrateStore(this);



		// WORKS but too explicit...
		let s = await getPersistedStore(this);
		
		// too specific/explicit (dont want to specify all keys/properties or run de/serialize funcs etc):
		// console.log('s', s);
		// if (s?.count) {
		// 	this.count = s.count;
		// }

		// works, but kinda janky...
		if (pS) {
			for (let k in pS.properties) {
				console.log('k', k, pS.properties[k]);
				let key = pS.properties[k].key;
				(this as any)[key] = (s as any)[key];
			}
		}

		
		console.log('doHydrateStore finished');		
	}
	*/


	// works:
	// async doHydrateStore(pS: any) {
	// 	console.log('doHydrateStore started');

	// 	// should be as easy as this but it turns off one of the stores persistence sync 
	// 	// await hydrateStore(this);



	// 	// WORKS but too explicit...
	// 	let s = await getPersistedStore(this);
		
	// 	// too specific/explicit (dont want to specify all keys/properties or run de/serialize funcs etc):
	// 	// console.log('s', s);
	// 	// if (s?.count) {
	// 	// 	this.count = s.count;
	// 	// }

	// 	// works, but kinda janky...
	// 	if (pS) {
	// 		for (let k in pS.properties) {
	// 			console.log('k', k, pS.properties[k]);
	// 			let key = pS.properties[k].key;
	// 			(this as any)[key] = (s as any)[key];
	// 		}
	// 	}

		
	// 	console.log('doHydrateStore finished');		
	// }
}




export const AnyWalletState = reactive({
	allWallets: {
		[WALLET_ID.PERA]: createWallet<ClientType<typeof WALLET_ID.PERA>>(WALLET_ID.PERA),
		[WALLET_ID.INKEY]: createWallet<ClientType<typeof WALLET_ID.INKEY>>(WALLET_ID.INKEY),
		[WALLET_ID.MYALGO]: createWallet<ClientType<typeof WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
		[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<typeof WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
		[WALLET_ID.EXODUS]: createWallet<ClientType<typeof WALLET_ID.EXODUS>>(WALLET_ID.EXODUS),
		[WALLET_ID.DEFLY]: createWallet<ClientType<typeof WALLET_ID.DEFLY>>(WALLET_ID.DEFLY),
		[WALLET_ID.MNEMONIC]: createWallet<ClientType<typeof WALLET_ID.MNEMONIC>>(WALLET_ID.MNEMONIC),
	},

	// === localstorage === (FYI: dont put Maps or Sets or Functions in this)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

	// === computeds ===
	activeAddress: readonly(computed(() => {
		let a = '';
		if (AnyWalletState.stored.activeAccount) {
			a = AnyWalletState.stored.activeAccount.address;
		}
		return a; // as string;
	})),
	activeAccount: readonly(computed(() => {
		let acct = null;
		if (AnyWalletState.stored.activeAccount) {
			acct = AnyWalletState.stored.activeAccount as Account; // needs this cast for some reason...
		}
		return acct;
	})),
	connectedAccounts: readonly(computed(() => {
		let cAccts = [] as Account[];
		if (AnyWalletState.stored.connectedAccounts) {
			cAccts = AnyWalletState.stored.connectedAccounts; // needs this cast for some reason...
		}
		return cAccts;
	})),
	activeWalletId: readonly(computed(() => {
		let aWId: null | W_ID = null;
		if (AnyWalletState.stored.activeAccount) {
			aWId = AnyWalletState.stored.activeAccount.walletId as W_ID; // sometimes vue-r isnt smart enough to figure out this nested type. or maybe its an enum thing
		}
		return aWId;
	})),
	activeWallet: readonly(computed(() => {
		let aW: undefined | WalletType = undefined;
		if (AnyWalletState.activeWalletId !== null) {
			aW = AnyWalletState.allWallets[AnyWalletState.activeWalletId] as undefined | WalletType;
		}
		return aW;
	})) as unknown as undefined | WalletType, // this type assertion is needed to help w max inferred type size exceeded
	isSigning: readonly(computed(() => {
		let someWalletIsSigning = false;
		for (let [k, w] of Object.entries(AnyWalletState.allWallets)) {
			if (w.signing) {
				someWalletIsSigning = true;
				break;
			}
		}
		return someWalletIsSigning;
	})),
	isIniting: readonly(computed(() => {
		let someWalletIsIniting = false;
		for (let [k, w] of Object.entries(AnyWalletState.allWallets)) {
			if (w.initing) {
				someWalletIsIniting = true;
				break;
			}
		}
		return someWalletIsIniting;
	})),
});

export const recallState = () => {
	logger.log('recallState');
	
	// FYI only run LS code in browser, not node or v8
	if (isBrowser()) {
		const initLocalStorage = () => {
			logger.log('initLocalStorage');
			try {
				let onLoadLStor = localStorage.getItem(lsKey);
				if (onLoadLStor) {
					try {
						type StoredType = typeof AnyWalletState.stored;
						let onLoadLStorObj: StoredType = JSON.parse(onLoadLStor);
						// logger.log('onLoadLStorObj', onLoadLStorObj);
						AnyWalletState.stored = onLoadLStorObj;
					} catch (e) {
						console.warn('bad sLocalStorage parse');
					}
				}
			} catch(e) {
				console.warn('could not access localstorage');
			}
		}
		initLocalStorage(); // recall local storage object (1 time on load!)	
	}
};

// once on load, kick off the watchers
startWatchers(); // FYI: should only happen ONCE + watchers MUST be started AFTER the state inits
