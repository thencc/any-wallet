import { computed, reactive, readonly, Ref, DeepReadonly, toRaw, ShallowReactive, toRefs } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use


import { CLIENT_MAP, CLIENT_MAP_TYPES } from "./pkgHelpers";
import { BaseClient } from 'src/clients/base';
import { CLIENT_ID, Account } from "../types";

export type WalletType<T extends CLIENT_ID> = ReturnType<typeof quickCreateW<CLIENT_MAP_TYPES[T]['client'], T>>;
export type ClientType<T extends CLIENT_ID> = CLIENT_MAP_TYPES[T]['client'];

export type WalletsObj = {
	[CLIENT_ID.PERA]: WalletType<CLIENT_ID.PERA>;
	[CLIENT_ID.INKEY]: WalletType<CLIENT_ID.INKEY>;
	[CLIENT_ID.MYALGO]: WalletType<CLIENT_ID.MYALGO>;
}

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

// init params
import { InitParams as InkeyInitParams } from "src/clients/inkey/types";
import { InitParams as PeraInitParams } from "src/clients/pera/types";
import { InitParams as MyAlgoInitParams } from "src/clients/myalgo/types";

// TODO make WALLET_PARAMS_DEFAULTS map ? w actual values, like src etc etc or let client class code handle this?
const DEFAULT_WALLETS_TO_ENABLE: WalletInitParamsMap = {
	[CLIENT_ID.PERA]: true,
	[CLIENT_ID.INKEY]: true,
	[CLIENT_ID.MYALGO]: true,
};

const quickCreateW = <WalClient extends BaseClient, WALLET_ID extends CLIENT_ID = CLIENT_ID,>(id: CLIENT_ID, ip: boolean | { config?: any, sdk?: any } = true) => {
	let w = reactive({
		// === wallet state ===
		id: id, // as WALLET_ID,
		client: null as null | WalClient,
		initParams: ip,
		inited: false, // client
		initing: false, // client + sdk
		signing: false,


		// === methods ===
		isReady: async (): Promise<true> => {
			console.log('isReady');

			if (w.inited) {
				return true;
			} else {
				console.log('do client.init');
				w.initing = true;

				if (typeof ip == 'object' && (
					ip.config || ip.sdk
				)) {

					w.client = await CLIENT_MAP[id].client.init(ip) as any;
				} else if (ip == true) {
					w.client = await CLIENT_MAP[id].client.init() as any;
				} else {
					// catches for false or wrong init obj (or should wrong obj init it w defaults?)
					// skip it
					// TODO show err
					console.warn('bad/incomplete init params for wallet:', id);
				}

				w.initing = false;
				w.inited = true; // success, flip it! TODO also FIX inkey to just handle re-inits like all the other wallets. instead of framebus not ready err
				return true;
			}
		},
		connect: async () => {
			console.log(`[${id}] connect (in r obj)`);
			await w.isReady();

			// arg is onDisconnect
			await w.client!.connect(() => { });
		},
		disconnect: async () => {
			await w.isReady();

			removeAccountsByClient(id);

			try {
				await w.client!.disconnect();
			} catch (e) {
				console.warn(e);
			}
		},
		reconnect: async () => {
			await w.isReady();
			await w.client!.reconnect(() => { });
		},
		setAsActiveWallet: () => {
			let accts = getAccountsByProvider(id);
			if (!accts) {
				throw new Error('No accounts for this provider to set as active');
			} else {
				AnyWalletState.stored.activeAccount = accts[0];
			}
		},
		removeAccounts: () => {
			removeAccountsByClient(id);
		},


		// === computeds ===
		get accounts() {
			return readonly(computed(() => getAccountsByProvider(id)))
		},
		get isActive() {
			// TODO fully test omitting this readonly wrapper
			// return readonly(computed(() => {
			// 	return AnyWalletState.stored.activeAccount?.providerId === id
			// }))
			return computed(() => {
				return AnyWalletState.stored.activeAccount?.providerId === id
			})
		},
		get isConnected() {
			return readonly(computed(() => {
				return AnyWalletState.stored.connectedAccounts.some(
					(accounts) => accounts.providerId === id
					// (accounts) => accounts.providerId === this.id
				);
			}));
		},

		// or is this a better design? (it also works)
		// isConnected: () => {
		// 	return readonly(computed(() => {
		// 		return AnyWalletState.stored.connectedAccounts.some(
		// 			(accounts) => accounts.providerId === id
		// 			// (accounts) => accounts.providerId === this.id
		// 		);
		// 	}));
		// },

	});
	return w;
}

const ALL_WALLETS: WalletsObj = {
	[CLIENT_ID.PERA]: quickCreateW<ClientType<CLIENT_ID.PERA>>(CLIENT_ID.PERA),
	[CLIENT_ID.INKEY]: quickCreateW<ClientType<CLIENT_ID.INKEY>>(CLIENT_ID.INKEY),
	[CLIENT_ID.MYALGO]: quickCreateW<ClientType<CLIENT_ID.MYALGO>>(CLIENT_ID.MYALGO),
	// test: '123'; // break, as it should
};

export const AnyWalletState = reactive({
	activeAddress: '',
	activeWalletId: null as null | CLIENT_ID,
	activeWallet: null as null | WalletType<CLIENT_ID>, // should be a computed...

	allWallets: ALL_WALLETS,
	enabledWallets: null as null | WalletsObj, // .wallets (should it be renamed this?)

	// part to store in localstorage/ls (DONT put Maps or Sets or Functions in here...)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

	// computeds
	// TODO re-enable
	isSigning: readonly(computed(() => {
		let someWalletIsSigning = false;
		if (!AnyWalletState.enabledWallets) {
			// pass
		} else {
			for (let [k, w] of Object.entries(AnyWalletState.enabledWallets)) {
				if (w.signing) {
					someWalletIsSigning = true;
					break;
				}
			}
		}
		return someWalletIsSigning;
	})),

});

export const enableWallets = (
	walletsToEnable: WalletInitParamsMap = DEFAULT_WALLETS_TO_ENABLE,
) => {
	console.log('enableWallets started');

	if (AnyWalletState.enabledWallets !== null) {
		console.warn('enableWallets called while some wallets were already initialized');
	} else {
		AnyWalletState.enabledWallets = {} as WalletsObj;
	}

	for (let [wKey, wInitParams] of Object.entries(walletsToEnable)) {
		let wId = wKey as CLIENT_ID; // could just be a unique id for double initing.but why

		AnyWalletState.allWallets[wId].initParams = wInitParams;
		AnyWalletState.enabledWallets[wId] = AnyWalletState.allWallets[wId] as any;

		/*
		// simplest catch first
		if (typeof wInitParams == 'boolean') {
			if (wInitParams == true) {
				// initparamas = true so uses defaults
				AnyWalletState.allWallets[wId].initParams = wInitParams;
				AnyWalletState.enabledWallets[wId] = AnyWalletState.allWallets[wId] as any; // just assume we know what we are doing... easier than a long if check
			}
		} else if (typeof wInitParams == 'object') {
			AnyWalletState.allWallets[wId].initParams = wInitParams;
			AnyWalletState.enabledWallets[wId] = AnyWalletState.allWallets[wId] as any;
		}
		*/
	}

	return AnyWalletState.enabledWallets;
};

export const getAccountsByProvider = (id: CLIENT_ID) => {
	return AnyWalletState.stored.connectedAccounts.filter((account) => account.providerId === id);
};

export const removeAccountsByClient = (id: CLIENT_ID) => {
	console.log('removeAccountsByClient', id);

	if (AnyWalletState.stored.activeAccount) {
		// nullify active acct if its being removed (FYI this has to come first)
		let acctsToRemove = AnyWalletState.stored.connectedAccounts.filter(
			(account) => account.providerId == id
		);
		for (let acct of acctsToRemove) {
			if (acct.address == AnyWalletState.stored.activeAccount.address &&
				acct.providerId == AnyWalletState.stored.activeAccount.providerId) {
				AnyWalletState.stored.activeAccount = null; // unsets activeAccount
				break;
			}
		}
	}

	// remove this client's accts
	let acctsToKeep = AnyWalletState.stored.connectedAccounts.filter(
		(account) => account.providerId !== id
	);
	AnyWalletState.stored.connectedAccounts = acctsToKeep;
};

export const addConnectedAccounts = (accounts: Account[]) => {
	console.log('addConnectedAccounts', accounts);

	// fast, but allows dups...
	// AnyWalletState.stored.connectedAccounts = [
	// 	...AnyWalletState.stored.connectedAccounts,
	// 	...accounts
	// ];

	for (let newAcct of accounts) {

		let exists = false;
		for (let existingAcct of AnyWalletState.stored.connectedAccounts) {
			if (newAcct.providerId == existingAcct.providerId &&
				newAcct.address == existingAcct.address) {
				exists = true;
			}
		}

		if (!exists) {
			AnyWalletState.stored.connectedAccounts.push(newAcct);
		}
	}
};

export const setAsActiveAccount = (acct: Account) => {
	console.log('setAsActiveAccount', acct);
	AnyWalletState.stored.activeAccount = acct;
};

export const signTransactions = async (txns: Uint8Array[]) => {
	console.log('signTransactions', txns);

	if (!AnyWalletState.enabledWallets) {
		throw new Error('No wallets enabled');
	}
	if (!AnyWalletState.activeWalletId) {
		throw new Error('No active wallet');
	}
	if (!AnyWalletState.activeAddress) {
		throw new Error('No active account');
	}

	let activeWallet = AnyWalletState.enabledWallets[AnyWalletState.activeWalletId];
	if (activeWallet.inited == false || activeWallet.client == null) {
		await activeWallet.isReady(); // handles .initing state var
	}

	// sign it!
	activeWallet.signing = true;
	let txnsSigned =
		await activeWallet.client! // is defined after awaiting isReady
		.signTransactions(
			[AnyWalletState.activeAddress],
			txns
		);
	activeWallet.signing = false;
	console.log('txnsSigned', txnsSigned);

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
			AnyWalletState.stored = onLoadLStorObj;
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
	() => AnyWalletState.stored,
	() => {
		// console.log('save me!', AnyWalletState.stored);
		localStorage.setItem(lsKey, JSON.stringify(AnyWalletState.stored) );


		// update helpful top level prop
		let activeAddress = '';
		if (AnyWalletState.stored.activeAccount) {
			activeAddress = AnyWalletState.stored.activeAccount.address;
		}
		AnyWalletState.activeAddress = activeAddress;
	},
	{
		deep: true
	}
);

watch(
	() => AnyWalletState.stored.activeAccount,
	(acct) => {
		// console.log('lib activeAccount changed:', acct);

		// update helpful top level prop
		let activeAddress = '';
		let activeWalletId: null | CLIENT_ID = null;
		let activeWallet: null | WalletType<CLIENT_ID> = null;
		if (acct) {
			activeAddress = acct.address;
			activeWalletId = acct.providerId;
			activeWallet = AnyWalletState.enabledWallets ? AnyWalletState.enabledWallets[acct.providerId] || null : null;
		}
		AnyWalletState.activeAddress = activeAddress;
		AnyWalletState.activeWalletId = activeWalletId;
		AnyWalletState.activeWallet = activeWallet;
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
export const onChange = (n: typeof AnyWalletState) => {
	console.log('onChange');
	console.log('latest', n);
};

watch(
	AnyWalletState,
	(latestState) => {
		console.log('[in pkg] something changed');
		onChange(latestState);
	},
	{
		deep: true
	}
);
