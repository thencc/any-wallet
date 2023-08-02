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



import { makeAutoObservable, reaction } from 'mobx';
import { makePersistable, getPersistedStore, hydrateStore } from 'mobx-persist-store';


export class SampleStore {
	someProperty: [] = [];
	hello = 'world';
	count = 0;

	constructor(
		params?: {
			key?: string,
			persist?: boolean,
		}
	) {
		makeAutoObservable(this);

		const selfId = `${Math.random()}_${new Date().getTime()}`;

		if (params) {
			//
			if (params.persist == true) {
				//
				makePersistable(this, { 
					// name: 'SampleStore', 
					name: params.key || new Date().getTime().toString(),
					properties: [
						'someProperty',
						// 'hello', 
						'count',
					], 
					// storage: window.localStorage 
					storage: params.persist ? window.localStorage : undefined
				}).then((pStore) => {
					console.log('pStore', pStore);
					
					//

					console.log('initing reaction');

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

					// listen only once per aw inst
					window.top!.addEventListener('aw-state-change', async (e) => {
						console.log('caught aw-state-change evt', e);

						// console.log('from', (e as CustomEvent).detail.from);
						// console.log('selfId', selfId);

						if ((e as CustomEvent).detail.from !== selfId) {
							console.log('change other store inst');
							// await this.doHydrateStore();
							await this.doHydrateStore(pStore);

							// let pii = await pStore.init();
							// console.log('pii', pii);

							// pStore.stopPersisting();
							// await pStore.hydrateStore();
							// pStore.startPersisting();
							
						}

					}, false);


				});
				// end persist observ
			}

		}
		//		
		

  	}

	async doHydrateStore(pS: any) {
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
