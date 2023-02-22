import { computed, reactive, readonly, Ref, DeepReadonly, toRaw, ShallowReactive, toRefs } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use


import { CLIENT_MAP, CLIENT_MAP_TYPES } from "./pkgHelpers";
import { BaseClient } from 'src/clients/base';
import { CLIENT_ID, WalletClient, Network, Account, Wallet, TheWalletType, WalletMap, ClientType } from "../types";

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

// test
import { nccStateBaseState } from './state2';

// has to come before the state
export const createWallet = <T extends CLIENT_ID, IP extends WalletInitParamsMap[T]>(id: T, ip?: IP) => {

	let w = reactive({
		id: id,

		// TODO make field for initParams so we know how it was inited later in case thats helpful

		// client: null as null | CliMapper[T],
		// client: null as null | ClientInst,
		// client: null as null | TheWalletType<T>['client'],
		client: null as null | BaseClient,
		// client: null as null | ClientType<T>,

		// TODO rename these to loading + loaded ?
		initParams: true as boolean | IP,
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

				if (typeof ip == 'object' && (
					ip.config || ip.sdk
				)) {

					// if (id == CLIENT_ID.INKEY) {
					// 	w.client = await InkeyClient.init(ip as any);
					// }

					w.client = await CLIENT_MAP[id].client.init(ip as any) as any;
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

		// methods
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


		// get isActive() {
		// 	return readonly(computed(() => {
		// 		return nccState.stored.activeAccount?.providerId === id
		// 	}))
		// },


		// // accounts: look( getAccountsByProvider(c.metadata.id) ), // DESIRED, how? + why doesnt this wrapper work?
		// accounts: readonly(computed(() => getAccountsByProvider(id))), // works all around
		// COULD make the accts arr have methods like disconnect this acct
		// isActive: readonly(computed(() => {
		// 	return nccState.stored.activeAccount?.providerId === id
		// })),
		// as unknown as Readonly<boolean>,
		// isConnected: readonly(computed(() => {
		// 	return nccState.stored.connectedAccounts.some(
		// 		(accounts) => accounts.providerId === id
		// 	);
		// })),
		// isConnected: readonly(computed(() => {
		// 	return nccState.stored.connectedAccounts.some(
		// 		(accounts) => accounts.providerId === id
		// 	);
		// })),

		// get testGet() {
		// 	this.
		// 	return 'it got!';
		// },


		// TODO add initParams to readonly+computed field
		// TODO implement private fields etc
		moreFields: 'foo',
		someMetadata: readonly({
			id: id,
			chain: 'algorand',
			etc: '...',
		}),
		thecomputer: readonly(computed(() => 'essentially a readonly FIELD, not an object!')),
	}); // simple but loose shim
	// }) as unknown as TheWalletType; // simple but loose shim
	return w;
};

const quickCreateW = (id: CLIENT_ID, ip: boolean | { config: any, sdk: any } = true) => {
	let w = reactive({
		id: id,
		client: null as null | BaseClient,
		initParams: true as boolean | any,
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

				if (typeof ip == 'object' && (
					ip.config || ip.sdk
				)) {

					// if (id == CLIENT_ID.INKEY) {
					// 	w.client = await InkeyClient.init(ip as any);
					// }

					w.client = await CLIENT_MAP[id].client.init(ip as any) as any;
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

		// methods
		connect: async () => {
			console.log(`[${id}] connect (in r obj)`);
			await w.isReady();

			// arg is onDisconnect
			await w.client!.connect(() => { });
		},
		disconnect: async () => {
			await w.isReady();

			removeAccountsByClient(id as CLIENT_ID);

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
			// console.log('setAsActiveWallet');
			let accts = getAccountsByProvider(id as CLIENT_ID);
			if (!accts) {
				throw new Error('No accounts for this provider to set as active');
			} else {
				nccState.stored.activeAccount = accts[0];
			}
		},
		removeAccounts: () => {
			removeAccountsByClient(id as CLIENT_ID);
		},



		// computeds
		get accounts() {
			return readonly(computed(() => getAccountsByProvider(id)))
		},
		get isActive() {
			// TODO fully test omitting this readonly wrapper
			// return readonly(computed(() => {
			// 	return nccState.stored.activeAccount?.providerId === id
			// }))
			return computed(() => {
				return nccState.stored.activeAccount?.providerId === id
			})
		},
		get isConnected() {
			return readonly(computed(() => {
				return nccState.stored.connectedAccounts.some(
					(accounts) => accounts.providerId === id
					// (accounts) => accounts.providerId === this.id
				);
			}));
		},

	});
	return w;
}

export const nccState = reactive({
	count: 0, // temp dev, remove later
	activeAddress: '',
	activeWalletId: null as null | CLIENT_ID,
	activeWallet: null as null | TheWalletType, // should be a computed...

	wallets: null as null | WalletMap,

	allWallets2: {
		...nccStateBaseState.allWallets,


		// inkey: {
		// 	...nccStateBaseState.allWallets.inkey,

		// 	get isConnected() {

		// 		return readonly(computed(() => {
		// 			return nccState.stored.connectedAccounts.some(
		// 				// (accounts) => accounts.providerId === id
		// 				(accounts) => accounts.providerId === 'inkey'
		// 			);
		// 		}));
		// 	},
		// }
	},

	wallets3: {
		[CLIENT_ID.PERA]: quickCreateW(CLIENT_ID.PERA),
		[CLIENT_ID.INKEY]: quickCreateW(CLIENT_ID.INKEY),
		[CLIENT_ID.MYALGO]: quickCreateW(CLIENT_ID.MYALGO),


		// [CLIENT_ID.INKEY]: {
		// 	id: 'inkey',
		// 	client: null as null | BaseClient,
		// 	initParams: true as boolean | any,

		// 	get isConnected() {
		// 		return readonly(computed(() => {
		// 			return nccState.stored.connectedAccounts.some(
		// 				// (accounts) => accounts.providerId === id
		// 				(accounts) => accounts.providerId === this.id
		// 			);
		// 		}));
		// 	},
		// 	// get isConnected() {
		// 	// 	return readonly(computed(() => {
		// 	// 		return nccState.stored.connectedAccounts.some(
		// 	// 			// (accounts) => accounts.providerId === id
		// 	// 			(accounts) => accounts.providerId === 'inkey'
		// 	// 		);
		// 	// 	}));
		// 	// },
		// }
	},

	get inkeyIsConnected() {

		return readonly(computed(() => {
			return nccState.stored.connectedAccounts.some(
				// (accounts) => accounts.providerId === id
				(accounts) => accounts.providerId === 'inkey'
			);
		}));

		// this works IF your in the same obj
		// return readonly(computed(() => {
		// 	return this.stored.connectedAccounts.some(
		// 		// (accounts) => accounts.providerId === id
		// 		(accounts) => accounts.providerId === 'inkey'
		// 	);
		// }));
	},

	// TODO idea... delete?
	enabledWallets: null as null | WalletMap,
	// allWallets: {
	// 	...toRefs(nccStateComputed),
	// },

	// part to store in localstorage/ls (DONT put Maps or Sets or Functions in here...)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

	// computeds
	// TODO re-enable
	// isSigning: readonly(computed(() => {
	// 	let someWalletIsSigning = false;
	// 	if (!nccState.wallets) {
	// 		// pass
	// 	} else {
	// 		for (let [k, w] of Object.entries(nccState.wallets)) {
	// 			if (w.signing) {
	// 				someWalletIsSigning = true;
	// 				break;
	// 			}
	// 		}
	// 	}
	// 	return someWalletIsSigning;
	// })),

});

// test - can combine 2 reactive objs here
// ...allWallets always exists then enableWallets just sets the initParams field and the rest is magic.
// export const nccStateBaseState = reactive({
// 	allWallets: {
// 		// inkey: createWallet(CLIENT_ID.INKEY),
// 		// pera: createWallet(CLIENT_ID.PERA),
// 		// myalgo: createWallet(CLIENT_ID.MYALGO),

// 		[CLIENT_ID.INKEY]: createWallet(CLIENT_ID.INKEY),
// 		// [CLIENT_ID.PERA]: createWallet(CLIENT_ID.PERA),
// 		// [CLIENT_ID.MYALGO]: createWallet(CLIENT_ID.MYALGO),
// 	},
// });
export const nccStateCombined = reactive({
	...toRefs(nccState),
	...toRefs(nccStateBaseState)
});

export const enableWallets = (
	walletsToEnable: WalletInitParamsMap = DEFAULT_WALLETS_TO_ENABLE,
) => {
	console.log('enableWallets started');

	if (nccState.enabledWallets !== null) {
		console.warn('enableWallets called while some wallets were already initialized');
	} else {
		nccState.enabledWallets = {} as WalletMap;
	}

	for (let [wKey, wInitParams] of Object.entries(walletsToEnable)) {
		let wId = wKey as CLIENT_ID; // could just be a unique id for double initing.but why

		// simplest catch first
		if (typeof wInitParams == 'boolean') {
			if (wInitParams == true) {
				// initparamas = true so uses defaults
				nccState.wallets3[wId].initParams = wInitParams;
				nccState.enabledWallets[wId] = nccState.wallets3[wId];
			}
		} else if (typeof wInitParams == 'object') {
			// let cId = wId;
			// if (wInitParams.id) {
			// 	cId = wInitParams.id;
			// }

			nccState.wallets3[wId].initParams = wInitParams;
			nccState.enabledWallets[wId] = nccState.wallets3[wId];
		}
	}

	return nccState.enabledWallets;
};



// export const enableWallets = (
// 	walletsToEnable: WalletInitParamsMap = DEFAULT_WALLETS_TO_ENABLE,
// ) => {
// 	console.log('enableWallets started');

// 	if (nccState.wallets !== null) {
// 		console.warn('enableWallets called while some wallets were already initialized');
// 	} else {
// 		nccState.wallets = {} as WalletMap;
// 	}

// 	for (let [wKey, wInitParams] of Object.entries(walletsToEnable)) {
// 		let wId = wKey as CLIENT_ID; // could just be a unique id for double initing.but why

// 		// simplest catch first
// 		if (typeof wInitParams == 'boolean') {
// 			if (wInitParams == true) {
// 				let w = createWallet(wId, wInitParams); // ip is true
// 				nccState.wallets[wId] = w;
// 			}
// 		} else if (typeof wInitParams == 'object') {
// 			let cId = wId;
// 			if (wInitParams.id) {
// 				cId = wInitParams.id;
// 			}

// 			let w = createWallet(cId, wInitParams);
// 			nccState.wallets[wId] = w;

// 			// could... branch on types for even more ts autocomplete but....
// 			// // it's synchronis!
// 			// // branch wallet gen this way so it works w types
// 			// if (wId == CLIENT_ID.INKEY) {
// 			// 	let w = createWallet(wId, wInitParams);
// 			// 	nccState.wallets[wId] = w;
// 			// } else if (id == CLIENT_ID.PERA) {
// 			// 	let w = createWallet(id, wInitParams);
// 			// 	nccState.wallets[id] = w;
// 			// } else if (id == CLIENT_ID.MYALGO) {
// 			// 	let w = createWallet(id);
// 			// 	nccState.wallets[id] = w;
// 			// }
// 		}
// 	}

// 	return nccState.wallets;
// };

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

	if (!nccState.wallets) {
		throw new Error('No wallets initialized');
	}
	if (!nccState.activeWalletId) {
		throw new Error('No active wallet');
	}
	if (!nccState.activeAddress) {
		throw new Error('No active account');
	}

	let activeWallet = nccState.wallets[nccState.activeWalletId];
	if (activeWallet.client == null) {
		await activeWallet.isReady(); // handles .initing state var
	}

	// sign it!
	activeWallet.signing = true;
	let txnsSigned =
		await activeWallet.client! // is defined after awaiting isReady
		.signTransactions(
			[nccState.activeAddress],
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
		let activeWalletId: null | CLIENT_ID = null;
		let activeWallet: null | TheWalletType = null;
		if (acct) {
			activeAddress = acct.address;
			activeWalletId = acct.providerId;
			activeWallet = nccState.wallets ? nccState.wallets[acct.providerId] || null : null;
		}
		nccState.activeAddress = activeAddress;
		nccState.activeWalletId = activeWalletId;
		nccState.activeWallet = activeWallet;
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
