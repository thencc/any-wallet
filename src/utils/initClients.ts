import { initializeProviders, NodeConfig } from "./initializeProviders";
import { reconnectProviders } from "./reconnectProviders";
import { appStateProxy } from "src/state";

import { PROVIDER_ID, WalletClient, Network, Account, Wallet } from "../types";

export type SupportedProviders = { [x: string]: Promise<WalletClient | null> };
export type InitializedClients = { [x: string]: WalletClient };

import { computed, reactive, readonly, Ref, DeepReadonly } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use (wow... this only works in built vue projs, not w vite dev server...)

import { clientsComputed, clientsReactive, clientsState } from "./stateee/clients";

import BaseClient from "src/clients/base/base";

type WalletThing = {
	client: BaseClient;

	// methods
	connect: () => Promise<Wallet>;
	disconnect: () => Promise<void>;
	reconnect: () => Promise<Wallet | null>;
	setAsActiveWallet: () => void;
	removeAccounts: () => void;

	// look, dont touch
	accounts: DeepReadonly<Ref<Account[]>>;
	isActive: DeepReadonly<Ref<boolean>>;
	isConnected: DeepReadonly<Ref<boolean>>;
}

export const nccState = reactive({
	rps: null as any,
	// isAuthed: false, // per session, just use .activeAcct is not null
	activeAddress: '',
	activeClientId: null as null | PROVIDER_ID,

	// wallets: {} as any,
	wallets: null as null | Record<string, WalletThing>,

	// wallets: null as null | Record<string, WalletThing>,
	// Record<PROVIDER_ID, {
	// 	client: BaseClient,
	// 	accounts: any,
	// 	connect: () => {}
	// }>,

	clients: clientsState,
	clientsR: clientsReactive,
	clientsC: clientsComputed,

	// objs?
	// clients: {
	// 	all: [], //
	// 	enabled: null as any, // defaults to all,
	// 	inited: null as any, // .client is awaited + initialized
	// 	// withState: null as any, // has .isConnected .isActive etc
	// 	withState: computed(() => {
	// 		// return {}
	// 		return nccState.clients;
	// 	})
	// },

	// part to store in localstorage/ls (DONT put Maps or Sets or Functions in here...)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

});

export const addConnectedAccounts = (accounts: Account[]) => {
	console.log('addConnectedAccounts', accounts);

	// fast, but allows dups...
	// nccState.stored.connectedAccounts = [
	// 	...nccState.stored.connectedAccounts,
	// 	...accounts
	// ];

	for (let newAcct of accounts) {

		let exists = false;
		for (let existingAcct of nccState.stored.connectedAccounts) {
			if (newAcct.providerId == existingAcct.providerId &&
				newAcct.address == existingAcct.address) {
				exists = true;
			}
		}

		if (!exists) {
			nccState.stored.connectedAccounts.push(newAcct);
		}
	}
};

export const setAsActiveAccount = (acct: Account) => {
	console.log('setAsActiveAccount', acct);
	nccState.stored.activeAccount = acct;
};

const objectMap = <T extends Record<string, any>, R>(obj: T, fn: (v: T[string], k: string, i: number) => R) =>
// const objectMap = <T extends Record<string, any>, R>(obj: T, fn: (v: T[string], k: string, i: number) => {}): Record<T[string], R> =>
// const objectMap = <T extends Record<string, any>>(obj: T, fn: (v: T[string], k: string, i: number) => {}) =>
// const objectMap = (obj: object, fn: any) =>
	Object.fromEntries(
		Object.entries(obj).map(
			([k, v], i) => [k, fn(v, k, i)]
		)
	) // as Record<string, R>;

// helper
const look = <T>(x: T) => readonly(computed(() => x));

// const look = <T>(x: T) => {
// 	return readonly(computed(() => x));

// 	// if (typeof x == 'function') {
// 	// 	return readonly(computed(() => x()))
// 	// } else {

// 	// }
// };

// const look = <T>(x: T) => {
// 	// let inner = () => x
// 	// let f = (() => x).bind(this);
// 	let f = () => x;
// 	let c = computed(f);
// 	let r = readonly(c);
// 	return r;
// };

import type algosdk from "algosdk";

// TODO support arg for partial/specific providers
// export const initClients = async (providers: SupportedProviders) => {
export const initClients = async (
	providers?: PROVIDER_ID[] | SupportedProviders,
	nodeConfig?: NodeConfig,
	algosdkStatic?: typeof algosdk
) => {
	console.log('initClients', providers, nodeConfig, algosdkStatic);

	let ips: SupportedProviders;


	if (!providers) {
		ips = await initializeProviders(
			undefined, // providers,
			nodeConfig,
			algosdkStatic,
		);
	} else if (Array.isArray(providers)) {
		ips = await initializeProviders(
			providers,
			nodeConfig,
			algosdkStatic,
		);
	} else {
		console.log('handle incoming configed client');
		ips = providers;
	}
	console.log('ips', ips);

	// og
	// let ips = await initializeProviders(
	// 	providers,
	// 	nodeConfig,
	// 	algosdkStatic,
	// );
	// console.log('ips', ips);

	let rps = await reconnectProviders(ips);
	console.log('rps', rps);

	nccState.rps = rps;

	if (rps) {
		nccState.clientsR.inited = rps;

		let clients = rps;

		// .wallets init
		if (nccState.wallets == null) nccState.wallets = {};

		for (let id in clients) {
			let c = clients[id];
			let w: WalletThing = {
				client: c,
				// aProperty: 'skeet', // yes! ts catches err this way

				// methods
				connect: async () => await c.connect(() => { }), // arg is onDisconnect
				disconnect: async () => {
					removeAccountsByClient(c.metadata.id);
					await c.disconnect();
				},
				reconnect: async () => await c.reconnect(() => { }),
				setAsActiveWallet: () => {
					// console.log('setAsActiveWallet');
					let accts = getAccountsByProvider(c.metadata.id);
					if (!accts) {
						throw new Error('No accounts for this provider to set as active');
					} else {
						nccState.stored.activeAccount = accts[0];
					}
				},
				removeAccounts() {
					removeAccountsByClient(c.metadata.id);
				},

				// readonlys
				// accounts: look( getAccountsByProvider(c.metadata.id) ), // DESIRED, how? + why doesnt this wrapper work?
				accounts: readonly(computed(() => getAccountsByProvider(c.metadata.id))), // works all around
				// COULD make the accts arr have methods like disconnect this acct
				isActive: readonly(computed(() => {
					return nccState.stored.activeAccount?.providerId === id
				})),
				isConnected: readonly(computed(() => {
					return nccState.stored.connectedAccounts.some(
						(accounts) => accounts.providerId === id
					);
				})),

			};
			nccState.wallets[id] = w;
		}

		// simpler than computed approach
		// nccState.wallets = objectMap(rps, c => {
		// 	let w: WalletThing = {
		// 		client: c,
		// 		// aProperty: 'skeet', // yes! ts catches err this way
		// 		// accounts: look( getAccountsByProvider(c.metadata.id) ), // works all around
		// 		accounts: readonly(computed(() => getAccountsByProvider(c.metadata.id))), // works all around
		// 		connect: () => c.connect(() => { }),
		// 	};
		// 	return w;
		// });

		// most desired approach
		// nccState.wallets = objectMap(rps, c => {
		// 	let w: WalletThing = {
		// 		client: c,
		// 		// aProperty: 'skeet', // yes! ts catches err this way
		// 		accounts: look(getAccountsByProvider(c.metadata.id)), // works all around
		// 		connect: () => c.connect(() => { }),
		// 	};
		// 	return w
		// });

		// let wallets: Record<string, WalletThing> = objectMap(rps, c => {
		// 	return {
		// 		client: c,
		// 		aProperty: 'skeet',
		// 		// accounts: [],
		// 		// accounts: getAccountsByProvider(c.metadata.id),
		// 		// accounts: computed(() => getAccountsByProvider(c.metadata.id)), // nope
		// 		// accounts: readonly(getAccountsByProvider(c.metadata.id)), // is readonly, but not reactive, requires calling getAc..
		// 		// accounts: readonly(computed(() => getAccountsByProvider(c.metadata.id))), // works all around
		// 		accounts: look(getAccountsByProvider(c.metadata.id)), // works all around
		// 		connect: () => c.connect(() => { }),
		// 	}
		// });
		// nccState.wallets = wallets;

	}

	return rps;
};

export const getAccountsByProvider = (id: PROVIDER_ID) => {
	return nccState.stored.connectedAccounts.filter((account) => account.providerId === id);
};

const removeAccountsByClient = (id: PROVIDER_ID) => {
	console.log('removeAccountsByClient', id);
	// nullify active acct if its being removed (FYI this has to come first)
	let acctsToRemove = nccState.stored.connectedAccounts.filter(
		(account) => account.providerId == id
	);
	for (let acct of acctsToRemove) {
		if (nccState.stored.activeAccount == acct) {
			nccState.stored.activeAccount = null; // how to unset activeAccount
		}
	}

	// remove this client's accts
	let acctsToKeep = nccState.stored.connectedAccounts.filter(
		(account) => account.providerId !== id
	);
	nccState.stored.connectedAccounts = acctsToKeep;
};

export const signTransactions = async (txns: Uint8Array[]) => {
	console.log('signTransactions', txns);

	if (!nccState.wallets) {
		throw new Error('No wallets initialized');
	}
	if (!nccState.activeClientId) {
		throw new Error('No active wallet');
	}
	if (!nccState.activeAddress) {
		throw new Error('No active account');
	}

	let txnsSigned = await nccState
		.wallets[nccState.activeClientId]
		.client.signTransactions(
			[nccState.activeAddress],
			txns
		);
	console.log('txnsSigned', txnsSigned);

	return txnsSigned;
};


const lsKey = 'w3h';
const initLocalStorage = () => {
	console.log('initLocalStorage');
	// recall local storage object (1 time on load!)
	let onLoadLStor = localStorage.getItem(lsKey);
	if (onLoadLStor) {
		try {
			let onLoadLStorObj = JSON.parse(onLoadLStor);
			// console.log('onLoadLStorObj', onLoadLStorObj);
			nccState.stored = onLoadLStorObj;
		} catch (e) {
			console.warn('bad sLocalStorage parse');
		}
	}
}
initLocalStorage(); // 1 time on page load

// save ".stored" to localstorage
watch(
	() => nccState.stored,
	() => {
		// console.log('save me!', nccState.stored);
		localStorage.setItem(lsKey, JSON.stringify(nccState.stored) );


		// update helpful top level prop
		let activeAddress = '';
		if (nccState.stored.activeAccount) {
			activeAddress = nccState.stored.activeAccount.address;
		}
		nccState.activeAddress = activeAddress;
	},
	{
		deep: true
	}
);

watch(
	() => nccState.stored.activeAccount,
	(acct) => {
		// update helpful top level prop
		let activeAddress = '';
		let activeClientId: null | PROVIDER_ID = null;
		if (acct) {
			activeAddress = acct.address;
			activeClientId = acct.providerId;
		}
		nccState.activeAddress = activeAddress;
		nccState.activeClientId = activeClientId;
	},
	{
		deep: true,
		immediate: true
	}
);


// watch(
// 	() => nccState.stored.connectedAccounts,
// 	(ac) => {
// 		console.log('connectedAccounts changed', ac);
// 		console.log('nccState.rps', nccState.rps)

// 		nccState.rps?.forEach((c: any) => {
// 			console.log('cc', c);
// 			c.computeAccounts();
// 		});
// 	},
// 	{
// 		deep: true,
// 		immediate: true,
// 	}
// );
