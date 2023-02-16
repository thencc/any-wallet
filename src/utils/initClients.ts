import { initializeProviders, NodeConfig } from "./initializeProviders";
import { reconnectProviders } from "./reconnectProviders";
// import { appStateProxy } from "src/state";

import { CLIENT_ID, WalletClient, Network, Account, Wallet } from "../types";

// export type SupportedProviders = { [x: string]: Promise<WalletClient | null> };
export type SupportedProviders = { [x: string]: WalletClient | null };
export type InitializedClients = { [x: string]: WalletClient };

// export type ClientParams = {
// 	config?: any; // sdk config for instance create
// 	sdk?: any; // pre-inited sdk
// }

const INPUT_BLUR = "INPUT_BLUR" as const;
const NON_BLUR = "NON_BLUR" as const;

export type ClientsToInit = {
	// [id in CLIENT_ID]?: boolean | ClientInitParams;

	[CLIENT_ID.INKEY]?: boolean | InkeyInitParams;
	[CLIENT_ID.PERA]?: boolean | PeraInitParams;

	// [x]: boolean | PeraInitParams;

	// [cId: string]: boolean | undefined;

	// [CLIENT_ID.PERA]?: boolean;


	// [INPUT_BLUR]: boolean;
};



import { computed, reactive, readonly, Ref, DeepReadonly, toRaw } from '@vue/reactivity';

import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use
// export const watch = watch;

import BaseClient from "src/clients/base/base";

import * as pkg from '../../package.json';
export const w3hOptionalDeps = Object.keys(pkg.optionalDependencies);

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
	count: 0, // temp dev, remove later
	rps: null as any,
	// isAuthed: false, // per session, just use .activeAcct is not null
	activeAddress: '',
	activeClientId: null as null | CLIENT_ID,

	// wallets: {} as any,
	wallets: null as null | Record<string, WalletThing>,

	wallets2: {} as any,

	// wallets: null as null | Record<string, WalletThing>,
	// Record<CLIENT_ID, {
	// 	client: BaseClient,
	// 	accounts: any,
	// 	connect: () => {}
	// }>,

	// clients: clientsState,
	// clientsR: clientsReactive,
	// clientsC: clientsComputed,

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
import { CLIENT_MAP } from "./pkgHelpers";
import CLIENT_SDK_MAP from "src/clients";
import { ClientInitParams } from "src/clients/base/types";
import { InitParams as InkeyInitParams } from "src/clients/inkey/types";
import { InitParams as PeraInitParams } from "src/clients/pera/types";
import InkeyClient from "src/clients/inkey";
import PeraClient from "src/clients/pera/client";


export const enableWallets = (
	walletsToEnable: ClientsToInit // put default as "=" here.
) => {
	console.log('enableWallets started');

	// TODO add type for new thing...
	// let w: any = {
	// 	id: 'inkey',  // client_id (+ add wallet_id? as same)
	// 	client: null, //
	// 	// aProperty: 'skeet', // yes! ts catches err this way

	// 	// state
	// 	inited: false,
	// 	initing: false,

	// 	// then all the below functions see if inited is true, if not, init the client: await client.init + initing: true, then resolve, then continue on to the thing it wanted to do

	// 	// methods
	// 	connect: async () => await c!.connect(() => { }), // arg is onDisconnect
	// 	disconnect: async () => {
	// 		removeAccountsByClient(id);
	// 		try {
	// 			await c!.disconnect();
	// 		} catch (e) {
	// 			console.warn(e);
	// 		}
	// 	},
	// 	reconnect: async () => await c!.reconnect(() => { }),
	// 	setAsActiveWallet: () => {
	// 		// console.log('setAsActiveWallet');
	// 		let accts = getAccountsByProvider(id);
	// 		if (!accts) {
	// 			throw new Error('No accounts for this provider to set as active');
	// 		} else {
	// 			nccState.stored.activeAccount = accts[0];
	// 		}
	// 	},
	// 	removeAccounts() {
	// 		removeAccountsByClient(id);
	// 	},

	// 	// readonlys
	// 	// accounts: look( getAccountsByProvider(c.metadata.id) ), // DESIRED, how? + why doesnt this wrapper work?
	// 	accounts: readonly(computed(() => getAccountsByProvider(id))), // works all around
	// 	// COULD make the accts arr have methods like disconnect this acct
	// 	isActive: readonly(computed(() => {
	// 		return nccState.stored.activeAccount?.providerId === id
	// 	})),
	// 	isConnected: readonly(computed(() => {
	// 		return nccState.stored.connectedAccounts.some(
	// 			(accounts) => accounts.providerId === id
	// 		);
	// 	})),

	// };


	let walls = [] as any[];

	type CliMapper = {
		[CLIENT_ID.PERA]: PeraClient;
		[CLIENT_ID.INKEY]: InkeyClient;

		// ['inkey']: InkeyClient; // works -ish
	};


	// TODO enable defaults to all
	let clientIds = Object.keys(walletsToEnable);

	for (let cid of clientIds) {
		console.log('cid', cid);
		let id = cid as CLIENT_ID;

		const createWall = <T extends CLIENT_ID>(walId: T) => {
			let ww = reactive({
				id: walId,
				cli: null as null | CliMapper[T],
				moreFields: 'foo',
				someMetadata: readonly({
					id: walId,
					chain: 'algorand',
					etc: '...',
				}),

				thecomputer: readonly(computed(() => 'essentially a readonly FIELD, not an object!')),
			});
			return ww;
		};

		// cant figure out wallet/client type without IFs or switch
		// let outsideW = createWall(id);

		switch (id) {
			case CLIENT_ID.INKEY:
				console.log('is inkey');
				let ccw = createWall(id);
				console.log('ccw', ccw);

				break;
			case CLIENT_ID.PERA:
				console.log('is pera');
				break;
			default:
				console.log('not supported client id');
		}

		// let theW = null;
		// if (id == CLIENT_ID.INKEY) theW = createWall(id);
		// else if (id == CLIENT_ID.PERA) theW = createWall(id);


		if (id == CLIENT_ID.INKEY) {
			let ccc: null | InkeyClient = null;

			// const createWall = <T>() => {
			// 	let ww = reactive({
			// 		cli: ccc as null | T,

			// 	});
			// 	return ww;
			// };

			// const createWall = <T extends 'inkey'>() => {
			// 	let ww = reactive({
			// 		cli: ccc as null | CliMapper[T],

			// 	});
			// 	return ww;
			// };

			const createWall = <T extends CLIENT_ID>() => {
				let ww = reactive({
					cli: ccc as null | CliMapper[T],

				});
				return ww;
			};

			// let inkw = createWall<InkeyClient>();
			// let inkw = createWall<'inkey'>();
			let inkw = createWall<CLIENT_ID.INKEY>();
			let perw = createWall<CLIENT_ID.PERA>();

			let inkw2 = createWall<typeof id>(); // also works

			inkw.cli


		};
		// let c = clients[id] as BaseClient;
		// let c = clients[id];

		// if (c !== null) {
		// let w: WalletThing = {
		let w = reactive({
			// client: c,
			// client: null as null | InkeyClient,
			client: null as null | any, // TODO type this
			// TODO add strict typing
			// aProperty: 'skeet', // yes! ts catches err this way

			// state
			// isReady: false,
			inited: false,
			initing: false,

			isReady: async (): Promise<true> => {
				console.log('isReady');

				if (w.inited) {
					return true;
				} else {
					w.initing = true;
					w.client = await CLIENT_MAP[id].client.init(); // loads client sdk
					w.initing = false;
					return true;
				}
			},

			// methods
			// TODO add back connect arg is onDisconnect
			connect: async () => {
				// check is ready (modularize this!)
				// if (w.inited == false) {
				// 	w.initing = true;
				// 	w.client = await CLIENT_MAP['inkey'].client.init(); // loads client sdk
				// 	w.initing = false;
				// }
				await w.isReady();


				//
				// await w.client!.connect(() => { });
				await w.client!.connect();

			}, // arg is onDisconnect
			// disconnect: async () => {
			// 	removeAccountsByClient(id);
			// 	try {
			// 		await c!.disconnect();
			// 	} catch (e) {
			// 		console.warn(e);
			// 	}
			// },
			// reconnect: async () => await c!.reconnect(() => { }),
			setAsActiveWallet: () => {
				// console.log('setAsActiveWallet');
				let accts = getAccountsByProvider(id);
				if (!accts) {
					throw new Error('No accounts for this provider to set as active');
				} else {
					nccState.stored.activeAccount = accts[0];
				}
			},
			removeAccounts() {
				removeAccountsByClient(id);
			},

			// readonlys
			// accounts: look( getAccountsByProvider(c.metadata.id) ), // DESIRED, how? + why doesnt this wrapper work?
			accounts: readonly(computed(() => getAccountsByProvider(id))), // works all around
			// COULD make the accts arr have methods like disconnect this acct
			isActive: readonly(computed(() => {
				return nccState.stored.activeAccount?.providerId === id
			})),
			isConnected: readonly(computed(() => {
				return nccState.stored.connectedAccounts.some(
					(accounts) => accounts.providerId === id
				);
			})),

		});
		nccState.wallets2[id] = w;
		walls.push(w);
		// }

	}

	// return nccState.wallets2;
	return walls;

};

// TODO support arg for partial/specific providers
// export const initClients = async (providers: SupportedProviders) => {
export const initClients = async (
	// providers?: CLIENT_ID[] | SupportedProviders,
	userClientsToInit?: ClientsToInit,
	nodeConfig?: NodeConfig,
	algosdkStatic?: typeof algosdk
) => {
	console.log('initClients', userClientsToInit, nodeConfig, algosdkStatic);

	// let clientsToInit: ClientsToInit = userClientsToInit || CLIENT_MAP;

	// TODO rename to
	let ips: SupportedProviders = {};

	// TODO big deal!!! should NOT await the static inits until the user taps the connect button? thus waiting to load the client's sdk until they actually request for it?
	// perhaps every class method can have await this.isReady() function that calls this.loadClientSdk in case its not, then continued

	if (!userClientsToInit) {
		console.log('default to init them all! + use the default configs');

		for (let [cid, cm] of Object.entries(CLIENT_MAP)) {
			ips[cid] = await cm.client.init() as any;
		}

	} else {
		for (let [cid, uConfig] of Object.entries(userClientsToInit)) {
			let id = cid as CLIENT_ID;

			if (typeof uConfig == 'object' && (
				uConfig.config || uConfig.sdk
			)) {
				// ips[cid] = CLIENT_MAP[id].client.init(uConfig);
				ips[cid] = await CLIENT_MAP[id].client.init(uConfig as any) as any;
			} else if (uConfig == true) {
				// ips[cid] = await CLIENT_MAP[id].client.init() as any;
				ips[cid] = await CLIENT_MAP[id].client.init() as any;
			} else {
				// } else if (uConfig == false) {
				// catches if uConfig == false OR uConfig is passed a bad/empty config obj
				// skip it
			}

		}

		// ips = await initializeProviders(
		// 	providers,
		// 	nodeConfig,
		// 	algosdkStatic,
		// );
	}

	console.log('ips', ips);

	// if (!providers) {
	// 	ips = await initializeProviders(
	// 		undefined, // providers,
	// 		nodeConfig,
	// 		algosdkStatic,
	// 	);
	// } else if (Array.isArray(providers)) {
	// 	ips = await initializeProviders(
	// 		providers,
	// 		nodeConfig,
	// 		algosdkStatic,
	// 	);
	// } else {
	// 	// console.log('handle incoming configed clients');
	// 	ips = providers;
	// }
	// console.log('ips', ips);

	// og
	// let ips = await initializeProviders(
	// 	providers,
	// 	nodeConfig,
	// 	algosdkStatic,
	// );
	// console.log('ips', ips);

	// let rps = await reconnectProviders(ips);
	// console.log('rps', rps);
	let rps = ips;

	nccState.rps = rps;

	if (rps) {
		// nccState.clientsR.inited = rps;

		let clients = rps;

		// .wallets init
		if (nccState.wallets == null) nccState.wallets = {};

		for (let cid in clients) {
			let id = cid as CLIENT_ID;
			let c = clients[id];

			if (c !== null) {
				let w: WalletThing = {
					client: c,
					// aProperty: 'skeet', // yes! ts catches err this way

					// methods
					connect: async () => await c!.connect(() => { }), // arg is onDisconnect
					disconnect: async () => {
						removeAccountsByClient(id);
						try {
							await c!.disconnect();
						} catch (e) {
							console.warn(e);
						}
					},
					reconnect: async () => await c!.reconnect(() => { }),
					setAsActiveWallet: () => {
						// console.log('setAsActiveWallet');
						let accts = getAccountsByProvider(id);
						if (!accts) {
							throw new Error('No accounts for this provider to set as active');
						} else {
							nccState.stored.activeAccount = accts[0];
						}
					},
					removeAccounts() {
						removeAccountsByClient(id);
					},

					// readonlys
					// accounts: look( getAccountsByProvider(c.metadata.id) ), // DESIRED, how? + why doesnt this wrapper work?
					accounts: readonly(computed(() => getAccountsByProvider(id))), // works all around
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

export const getAccountsByProvider = (id: CLIENT_ID) => {
	return nccState.stored.connectedAccounts.filter((account) => account.providerId === id);
};

const removeAccountsByClient = (id: CLIENT_ID) => {
	console.log('removeAccountsByClient', id);

	if (nccState.stored.activeAccount) {
		// nullify active acct if its being removed (FYI this has to come first)
		let acctsToRemove = nccState.stored.connectedAccounts.filter(
			(account) => account.providerId == id
		);
		for (let acct of acctsToRemove) {
			if (acct.address == nccState.stored.activeAccount.address &&
				acct.providerId == nccState.stored.activeAccount.providerId) {
				nccState.stored.activeAccount = null; // unsets activeAccount
				break;
			}
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
if (typeof window !== "undefined") {
	initLocalStorage(); // 1 time on page load
}


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
		// console.log('lib activeAccount changed:', acct);

		// update helpful top level prop
		let activeAddress = '';
		let activeClientId: null | CLIENT_ID = null;
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

// TODO figure out how to let client user define their own onChange handler. use setOnChange( userFun ) ?
/**
 * try...
 *
 * import { onChange } ...
 * // set it
 * onChange = () => {
 * 	console.log('custom');
 * }
 */
export const onChange = (n: typeof nccState) => {
	console.log('onChange');
	console.log('latest', n);
};

watch(
	nccState,
	(latestState) => {
		console.log('[in pkg] something changed');
		onChange(latestState);
	},
	{
		deep: true
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



// testing it works
// const enabledClients: ClientsToInit = {
// 	// [CLIENT_ID.INKEY]: true as true,
// 	[CLIENT_ID.INKEY]: {
// 		config: {
// 			src: '123',
// 			// aligner: 123
// 		},
// 		// sdk:
// 	},


// 	[CLIENT_ID.PERA]: true
// };