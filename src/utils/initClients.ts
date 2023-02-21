import { CLIENT_ID, WalletClient, Network, Account, Wallet, TheWalletType, WalletMap } from "../types";

export type ClientsToInit = {
	// [id in CLIENT_ID]?: boolean | ClientInitParams;
	[CLIENT_ID.INKEY]?: boolean | InkeyInitParams;
	[CLIENT_ID.PERA]?: boolean | PeraInitParams;
	[CLIENT_ID.MYALGO]?: boolean | MyAlgoInitParams;
};

export type WalletInitParamsMap = {
	[CLIENT_ID.PERA]?: boolean | {
		id?: CLIENT_ID.PERA;
		config?: PeraInitParams['config'];
		sdk?: PeraInitParams['sdk'];
	};
	[CLIENT_ID.INKEY]?: boolean | {
		id?: CLIENT_ID.INKEY;
		config?: InkeyInitParams['config'];
		sdk?: InkeyInitParams['sdk'];
	};
	[CLIENT_ID.MYALGO]?: boolean | {
		id?: CLIENT_ID.MYALGO;
		config?: MyAlgoInitParams['config'];
		sdk?: MyAlgoInitParams['sdk'];
	};
}


import { computed, reactive, readonly, Ref, DeepReadonly, toRaw, ShallowReactive } from '@vue/reactivity';

import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use

import * as pkg from '../../package.json';
export const w3hOptionalDeps = Object.keys(pkg.optionalDependencies);

import { CLIENT_MAP, CLIENT_MAP_TYPES } from "./pkgHelpers";

// init params
import { InitParams as InkeyInitParams } from "src/clients/inkey/types";
import { InitParams as PeraInitParams } from "src/clients/pera/types";
import { InitParams as MyAlgoInitParams } from "src/clients/myalgo/types";

// TODO make WALLET_PARAMS_DEFAULTS map ?
const DEFAULT_WALLETS_TO_ENABLE: WalletInitParamsMap = {
	[CLIENT_ID.PERA]: true,
	[CLIENT_ID.INKEY]: true,
	[CLIENT_ID.MYALGO]: true,
};

export const nccState = reactive({
	count: 0, // temp dev, remove later
	activeAddress: '',
	activeClientId: null as null | CLIENT_ID,

	wallets2: null as null | WalletMap,

	// part to store in localstorage/ls (DONT put Maps or Sets or Functions in here...)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

	// computeds
	isSigning: readonly(computed(() => {
		let someWalletIsSigning = false;
		if (!nccState.wallets2) {
			// pass
		} else {
			for (let [k, w] of Object.entries(nccState.wallets2)) {
				if (w.signing) {
					someWalletIsSigning = true;
					break;
				}
			}
		}
		return someWalletIsSigning;
	})),

});

export const createWallet = <T extends CLIENT_ID, IP extends ClientsToInit[T]>(id: T, ip?: IP) => {
// export const createWallet = <T extends CLIENT_ID, IP extends ClientsToInit[T]>(ip: IP) => {

	// type CliTT = InstanceType<typeof CLIENT_MAP[T]['client']>; // works but tooltip is gross
	// type ClientInst = InstanceType<typeof CLIENT_MAP[typeof id]['client']>; // works
	// type ClientInst = InstanceType<typeof CLIENT_MAP[T]['client']>; // works
	type ClientInst = CLIENT_MAP_TYPES[T];
	// TODO make + use a type map?

	let w = reactive({
		id: id,

		// TODO make field for initParams so we know how it was inited later in case thats helpful

		// client: null as null | CliMapper[T],
		client: null as null | ClientInst,

		// TODO rename these to loading + loaded ?
		inited: false, // client
		initing: false, // client + sdk
		signing: false,


		isReady: async (): Promise<true> => {
			console.log('isReady');

			if (w.inited) {
				return true;
			} else {
				console.log('do client.init');

				w.initing = true;
				// TODO!!! add clientConfig params or use default
				// w.client = await CLIENT_MAP[id].client.init(); // loads client sdk
				// w.client = await CLIENT_MAP[id].client.init() as any; // loads client sdk

				if (typeof ip == 'object' && (
					ip.config || ip.sdk
				)) {
					// ips[cid] = CLIENT_MAP[id].client.init(uConfig);
					w.client = await CLIENT_MAP[id].client.init(ip as any) as any;
				} else if (ip == true) {
					// ips[cid] = await CLIENT_MAP[id].client.init() as any;
					w.client = await CLIENT_MAP[id].client.init() as any;
				} else {
					// catches for false or wrong init obj (or should wrong obj init it w defaults?)
					// skip it
					// TODO show err
					console.warn('bad/incomplete init params for wallet:', id);
				}

				w.inited = true; // success, flip it! TODO also FIX inkey to just handle re-inits like all the other wallets. instead of framebus not ready err
				w.initing = false;
				return true;
			}
		},

		// methods
		connect: async () => {
			console.log(`[${id}] connect (in r obj)`);

			// check is ready (modularize this!)
			// if (w.inited == false) {
			// 	w.initing = true;
			// 	w.client = await CLIENT_MAP['inkey'].client.init(); // loads client sdk
			// 	w.initing = false;
			// }
			await w.isReady();
			//
			await (w.client as any)!.connect(() => { }); // TODO fix type
		}, // arg is onDisconnect
		disconnect: async () => {
			await w.isReady();

			removeAccountsByClient(id);
			try {
				// TODO fix as any
				await (w.client as any)!.disconnect();
			} catch (e) {
				console.warn(e);
			}
		},
		reconnect: async () => {
			await w.isReady();
			await (w.client as any)!.reconnect(() => { }); // TODO fix
		},
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
		// as unknown as Readonly<boolean>,
		isConnected: readonly(computed(() => {
			return nccState.stored.connectedAccounts.some(
				(accounts) => accounts.providerId === id
			);
		})),


		// TODO add initParams to readonly+computed field
		// TODO implement private fields etc
		moreFields: 'foo',
		someMetadata: readonly({
			id: id,
			chain: 'algorand',
			etc: '...',
		}),
		thecomputer: readonly(computed(() => 'essentially a readonly FIELD, not an object!')),
	}) as unknown as TheWalletType; // simple but loose shim
	return w;
};

export const enableWallets = (
	walletsToEnable: WalletInitParamsMap = DEFAULT_WALLETS_TO_ENABLE,
) => {
	console.log('enableWallets started');

	if (nccState.wallets2 !== null) {
		console.warn('enableWallets called while some wallets were already initialized');
	} else {
		nccState.wallets2 = {} as WalletMap;
	}

	for (let [wKey, wInitParams] of Object.entries(walletsToEnable)) {
		let wId = wKey as CLIENT_ID; // could just be a unique id for double initing.but why

		// simplest catch first
		if (typeof wInitParams == 'boolean') {
			if (wInitParams == true) {
				let w = createWallet(wId, wInitParams); // ip is true
				nccState.wallets2[wId] = w;
			}
		} else if (typeof wInitParams == 'object') {
			let cId = wId;
			if (wInitParams.id) {
				cId = wInitParams.id;
			}

			let w = createWallet(cId, wInitParams);
			nccState.wallets2[wId] = w;

			// could... branch on types for even more ts autocomplete but....
			// // it's synchronis!
			// // branch wallet gen this way so it works w types
			// if (id == CLIENT_ID.INKEY) {
			// 	let w = createWallet(id, wInitParams);
			// 	nccState.wallets2[id] = w;
			// } else if (id == CLIENT_ID.PERA) {
			// 	let w = createWallet(id, wInitParams);
			// 	nccState.wallets2[id] = w;
			// } else if (id == CLIENT_ID.MYALGO) {
			// 	let w = createWallet(id);
			// 	nccState.wallets2[id] = w;
			// }
		}
	}

	return nccState.wallets2;
};

export const getAccountsByProvider = (id: CLIENT_ID) => {
	return nccState.stored.connectedAccounts.filter((account) => account.providerId === id);
};

export const removeAccountsByClient = (id: CLIENT_ID) => {
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

export const signTransactions = async (txns: Uint8Array[]) => {
	console.log('signTransactions', txns);

	if (!nccState.wallets2) {
		throw new Error('No wallets2 initialized');
	}
	if (!nccState.activeClientId) {
		throw new Error('No active wallet');
	}
	if (!nccState.activeAddress) {
		throw new Error('No active account');
	}

	let activeWallet = nccState.wallets2[nccState.activeClientId];
	activeWallet.signing = true;
	let txnsSigned =
		await activeWallet.client
		.signTransactions(
			[nccState.activeAddress],
			txns
		);
	console.log('txnsSigned', txnsSigned);
	activeWallet.signing = false;

	return txnsSigned;
};


// ls TODO move to another file...
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
