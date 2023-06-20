// libs
import { computed, reactive, readonly } from '@vue/reactivity';

// import { WALLET_ID, WALLET_ID, WalletInitParamsObj, WalletType } from '.'; // wallets
import { WalletInitParamsObj, WalletType } from '.'; // wallets
import { WALLET_ID } from './const'; // wallets
// import { WALLET_ID } from './constants';
// import { WALLET_ID } from './const2';
import { CLIENT_MAP } from 'src/clients';
import { AnyWalletState } from 'src/state'; // state
import { isBrowser, logger } from 'src/utils';
import { deepToRaw } from './helpers-reactivity';

// FYI import order matters during build
import { BaseClient } from 'src/clients/base/client';
import { ClientInitParams } from 'src/clients/base/types';
import { Account } from 'src/types/shared';
import type { WALL_V } from './const';

// export const createWallet = <WalClient extends BaseClient = BaseClient>(id: WALLET_ID, ip: boolean | ClientInitParams = true) => {
export const createWallet = <WalClient extends BaseClient = BaseClient>(id: WALL_V, ip: boolean | ClientInitParams = true) => {
	console.debug('createWallet', id);
	let w = reactive({
		// === wallet state ===
		id: id,
		metadata: CLIENT_MAP[id].client.metadata,
		client: null as null | BaseClient, // WalClient, // suddenly this doesnt work... but BaseClient does...
		initParams: ip, // params used for client init
		inited: false, // client
		initing: false, // client + sdk
		signing: false,
		connecting: false,

		// === methods ===
		loadClient: async (): Promise<true> => {
			logger.debug('loadClient:', id);
			
			if (w.inited) {
				logger.debug('aw already inited client');
				return true;
			} else {
				w.initing = true;

				if (typeof w.initParams == 'string') {
					// FYI this check is only for the mnemonic wallet, when directly mn string as initParam config directly
					w.client = await CLIENT_MAP[id].client.init(w.initParams);
				} else if (typeof w.initParams == 'object' && (
					w.initParams.config || w.initParams.sdk
				)) {
					w.client = await CLIENT_MAP[id].client.init(w.initParams);
				} else if (ip == true) {
					w.client = await CLIENT_MAP[id].client.init();
				} else {
					// skip it
					// catches here for false or wrong init obj (or should wrong obj init it w defaults?)
					// TODO ? show error in ui to user?
					console.warn('Bad/incomplete init params for wallet:', id);
				}

				w.initing = false;
				w.inited = true; // success, flip it!
				return true;
			}
		},
		unloadClient: async () => {
			await w.client?.disconnect(); // nullifies w.client.sdk
			w.inited = false;
		},
		connect: async (p?: any) => {
			w.connecting = true;
			try {
				await w.loadClient();

				// if we have cached accts for this client wallet, send em over w the connect (inkey uses this for one)
				if (w.accounts) {
					if (p == undefined) {
						p = {};
					}
					// FYI need the RAW js objects here, not the computed proxies (otherwise is breaks in runtime but not build)
					let cAccts = deepToRaw(w.accounts);
					p.connectedAccounts = [...cAccts];
				}

				let { accounts } = await w.client!.connect(p);

				// if it gets past .connect, it worked, so saved the returned accts + set one as active
				addConnectedAccounts(accounts);
				setAsActiveAccount(accounts[0]);

				return accounts;
			} catch(e) {
				throw e;
			} finally {
				w.connecting = false;
			}
		},
		disconnect: async () => {
			await w.loadClient();
			try {
				await w.unloadClient();
				w.removeAccounts();
			} catch (e) {
				console.warn(e);
			}
		},
		reconnect: async () => {
			await w.loadClient();
			await w.client!.reconnect(() => { });
		},
		setAsActiveWallet: () => {
			let accts = getAccountsByWalletId(id);
			if (!accts) {
				throw new Error('No accounts for this provider to set as active');
			} else {
				AnyWalletState.stored.activeAccount = accts[0];
			}
		},
		removeAccounts: () => {
			removeAccountsByWalletId(id);
		},
		signTransactions: async (transactions: Uint8Array[]): Promise<Uint8Array[]> => {
			await w.loadClient(); // loads sdk only ondemand

			// kinda clunky since modal / wallet ui might pop up twice, but it works...
			let acctsOfThisWallet = deepToRaw(w.accounts) as Account[];
			if (!acctsOfThisWallet.length) {
				// then auth
				let accts = await w.connect(); // adds to w.accounts
				acctsOfThisWallet = accts;

				// only real consistent way to show auth popup + txn approval pop across wallet types
				await new Promise(resolve => setTimeout(resolve, 1000));
			}

			w.signing = true;
			try {
				let txnsSigned =
					await w.client! // is defined after awaiting loadClient
						.signTransactions(
							acctsOfThisWallet,
							transactions,
						);
				return txnsSigned;
			} catch(e) {
				throw e;
			} finally {
				w.signing = false;
			}
		},

		// === computeds ===
		get accounts() {
			return readonly(computed(() => getAccountsByWalletId(id)))
		},
		get isConnected() {
			return readonly(computed(() => {
				return AnyWalletState.stored.connectedAccounts.some(
					(accounts) => accounts.walletId === id
				);
			}));
		},
		get isActive() {
			return computed(() => {
				return AnyWalletState.stored.activeAccount?.walletId === id
			})
		},
		get activeAccount() {
			return readonly(computed(() => {
				let acct = undefined;
				if (this.isConnected && AnyWalletState.stored.activeAccount) {
					acct = AnyWalletState.stored.activeAccount;
				}
				return acct;
			}));
		},
	});
	return w;
};

// export const connectWallet = async <W extends WALL_V, P extends WalletInitParamsObj[W]>(wId: W, wInitParams?: P) => {
// export const initWallet = (wId: WALL_V, wInitParams: WalletInitParamsObj[typeof wId]) => {
	export const initWallet = <W extends WALL_V, P extends WalletInitParamsObj[W]>(wId: W, wInitParams: P) => {
	const w = AnyWalletState.allWallets[wId];
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

// initWallet('mnemonic', '');
// initWallet('mnemonic', false);
// initWallet('inkey')

export const initWallets = (
	walletInits: WalletInitParamsObj,
) => {
	logger.log('initWallets started', walletInits);
	for (let [wKey, wInitParams] of Object.entries(walletInits)) {
		let wId = wKey as WALL_V; // could just be a unique id for double initing but why
		initWallet(wId, wInitParams);
	}
	return AnyWalletState.allWallets;
}

// export const connectWallet = async <WWID extends WALL_V>(wId: WALL_V, wInitParams?: WalletInitParamsObj[WWID]) => {
// export const connectWallet = async (wId: WALL_V, wInitParams?: WalletInitParamsObj[typeof wId]) => {
export const connectWallet = async <W extends WALL_V, P extends WalletInitParamsObj[W]>(wId: W, wInitParams?: P) => {
	// possibly set init params...
	if (wInitParams !== undefined) {
		initWallet(wId, wInitParams);
	}
	// then, connect
	const w = AnyWalletState.allWallets[wId];
	if (!w) {
		throw new Error(`Unknown wallet: ${wId}`);
	}
	return await w.connect();
};

// connectWallet('inkey'); // works
// connectWallet('inkey', ''); // works
// connectWallet('inkey', ''); // should not work...
// connectWallet('defly')
// connectWallet(WALLET_ID.INKEY, {config: { src: '' }});
// connectWallet(WALLET_ID.MNEMONIC, false);
// connectWallet(WALLET_ID.MNEMONIC, '123 456');
// connectWallet(WALLET_ID.MNEMONIC); // works but shouldnt really


export const getAccountsByWalletId = (id: WALL_V) => {
	return AnyWalletState.stored.connectedAccounts.filter((account) => account.walletId === id);
};

export const removeAccountsByWalletId = (id: WALL_V) => {
	if (AnyWalletState.stored.activeAccount) {
		// nullify active acct if its being removed (FYI this has to come first)
		let acctsToRemove = AnyWalletState.stored.connectedAccounts.filter(
			(account) => account.walletId == id
		);
		for (let acct of acctsToRemove) {
			if (acct.address == AnyWalletState.stored.activeAccount.address &&
				acct.walletId == AnyWalletState.stored.activeAccount.walletId) {
				AnyWalletState.stored.activeAccount = null; // unsets activeAccount
				break;
			}
		}
	}

	// remove this client's accts
	let acctsToKeep = AnyWalletState.stored.connectedAccounts.filter(
		(account) => account.walletId !== id
	);
	AnyWalletState.stored.connectedAccounts = acctsToKeep;
};

export const removeAccount = (acct: Account) => {
	if (AnyWalletState.stored.activeAccount) {
		// nullify active acct if its being removed (FYI this has to come first)
		let acctsToRemove = AnyWalletState.stored.connectedAccounts.filter(
			(a) => {
				return 	(a.walletId == acct.walletId) &&
						(a.name == acct.name) &&
						(a.address == acct.address)
			}
		);

		for (let acct of acctsToRemove) {
			if (acct.address == AnyWalletState.stored.activeAccount.address &&
				acct.walletId == AnyWalletState.stored.activeAccount.walletId) {
				AnyWalletState.stored.activeAccount = null; // unsets activeAccount
				break;
			}
		}
	}

	let acctsToKeep = AnyWalletState.stored.connectedAccounts;
	let rmvIdx = acctsToKeep.findIndex(a => {
		return (a.walletId == acct.walletId) &&
			(a.address == acct.address) &&
			(a.name == acct.name)
	});
	acctsToKeep.splice(rmvIdx, 1);

	AnyWalletState.stored.connectedAccounts = acctsToKeep;
};

// aka disconnectAllAccounts
export const removeAllAccounts = () => {
	AnyWalletState.stored.activeAccount = null;
	AnyWalletState.stored.connectedAccounts = [];
}

export const addConnectedAccounts = (accounts: Account[]) => {
	// logger.log('addConnectedAccounts', accounts);
	for (let newAcct of accounts) {
		let exists = false;
		for (let existingAcct of AnyWalletState.stored.connectedAccounts) {
			if (newAcct.walletId == existingAcct.walletId &&
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
	logger.debug('setAsActiveAccount', acct);
	
	AnyWalletState.stored.activeAccount = acct;

	// change .active bool
	AnyWalletState.stored.connectedAccounts.forEach(ca => {
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
	AnyWalletState.stored.activeAccount.active = true; // changes in connectedAccounts array too
};

export const signTransactions = async (txns: Uint8Array[]) => {
	logger.log('signTransactions', txns);

	// if (!AnyWalletState.enabledWallets) {
	// 	throw new Error('No wallets enabled, call enableWallets() first');
	// }
	// let wKeys = Object.keys(AnyWalletState.enabledWallets);

	// let walletId: WALLET_ID | null = AnyWalletState.activeWalletId;
	// // if (wKeys.length == 1) {
	// // 	walletId = wKeys[0] as WALLET_ID;
	// // }
	// if (!walletId) {
	// 	throw new Error('No active wallet id');
	// }

	/*
	let walletId: WALLET_ID | null = AnyWalletState.activeWalletId;
	if (!walletId) {
		throw new Error('No active wallet id');
	}
	*/


	// FYI an active wallet isnt a connected wallet (active means dapp has is enabled, connected means user chose this wallet+acct)
	// let activeWallet = AnyWalletState.enabledWallets[walletId];
	let activeWallet = AnyWalletState.activeWallet;
	if (!activeWallet) {
		// happens when the dapp changes config + the user has an activeWallet in local storage that is no longer enabled
		throw new Error(`No active wallet... how'd you get here.`);
	}

	let txnsSigned = await activeWallet.signTransactions(txns);
	return txnsSigned;
};

export const setLogsEnabled = (isEnabled: boolean) => {
	logger.enabled = isEnabled;
};
