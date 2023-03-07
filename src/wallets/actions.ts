// libs
import { computed, reactive, readonly } from '@vue/reactivity';

import { WALLET_ID, WalletInitParamsObj, DEFAULT_WALLETS_TO_ENABLE, WalletsObj, WalletType } from '.'; // wallets
import { CLIENT_MAP } from 'src/clients';
import { AnyWalletState } from 'src/state'; // state

// other TODO sort
import { BaseClient } from 'src/clients/base/client';
import { ClientInitParams } from 'src/clients/base/types';
import { Account } from 'src/types/shared';

// FYI ip/initParams arg isnt really used anymore w new code design
// TODO remove WalClient + ip (even smaller build size)
export const createWallet = <WalClient extends BaseClient = BaseClient>(id: WALLET_ID, ip: boolean | ClientInitParams = true) => {
	let w = reactive({
		// === wallet state ===
		id: id,
		metadata: CLIENT_MAP[id].client.metadata,
		client: null as null | BaseClient, // WalClient, // suddenly this doesnt work... but BaseClient does...
		initParams: ip,
		inited: false, // client
		initing: false, // client + sdk
		signing: false,
		connecting: false,

		// === methods ===
		isReady: async (): Promise<true> => {
			if (w.inited) {
				return true;
			} else {
				w.initing = true;

				if (typeof w.initParams == 'object' && (
					w.initParams.config || w.initParams.sdk
				)) {
					w.client = await CLIENT_MAP[id].client.init(w.initParams);
				} else if (ip == true) {
					w.client = await CLIENT_MAP[id].client.init();
				} else {
					// skip it
					// catches here for false or wrong init obj (or should wrong obj init it w defaults?)
					// TODO show err
					console.warn('bad/incomplete init params for wallet:', id);
				}

				w.initing = false;
				w.inited = true; // success, flip it! TODO also FIX inkey to just handle re-inits like all the other wallets. instead of framebus not ready err
				return true;
			}
		},
		connect: async () => {
			w.connecting = true;
			try {
				await w.isReady();

				// arg is onDisconnect
				let { accounts } = await w.client!.connect(() => { });

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
			removeAccountsByWalletId(id);

			await w.isReady();
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
			await w.isReady(); // loads sdk only ondemand

			// kinda clunky since modal / wallet ui might pop up twice, but it works...
			let addrsOfThisWallet = w.accounts.map(a => a.address);
			if (!addrsOfThisWallet.length) {
				// then auth
				let accts = await w.connect(); // adds to w.accounts
				addrsOfThisWallet = accts.map(a => a.address);

				// only real consistenyl way to show auth popup + txn approval pop across wallet types
				await new Promise(resolve => setTimeout(resolve, 1000));
			}

			w.signing = true;
			try {
				let txnsSigned =
					await w.client! // is defined after awaiting isReady
						.signTransactions(
							addrsOfThisWallet,
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
		get isActive() {
			return computed(() => {
				return AnyWalletState.stored.activeAccount?.walletId === id
			})
		},
		get isConnected() {
			return readonly(computed(() => {
				return AnyWalletState.stored.connectedAccounts.some(
					(accounts) => accounts.walletId === id
					// (accounts) => accounts.walletId === this.id
				);
			}));
		},

		// or is this a better design? (it also works) -- this is only better for vue dev tools, both work
		// i believe the below approach is better for vue dev tools inspect
		// isConnected: () => {
		// 	return readonly(computed(() => {
		// 		return AnyWalletState.stored.connectedAccounts.some(
		// 			(accounts) => accounts.walletId === id
		// 			// (accounts) => accounts.walletId === this.id
		// 		);
		// 	}));
		// },

	});
	return w;
};

export const enableWallets = (
	walletsToEnable: WalletInitParamsObj = DEFAULT_WALLETS_TO_ENABLE,
) => {
	// console.log('enableWallets started');
	// TODO add (walletsToEnable = array) ? simply: ['pera', 'inkey'] etc

	if (AnyWalletState.enabledWallets == null) {
		AnyWalletState.enabledWallets = {} as WalletsObj;
	} else {
		console.warn('enableWallets called while some wallets were already initialized (add to them)');
	}

	for (let [wKey, wInitParams] of Object.entries(walletsToEnable)) {
		let wId = wKey as WALLET_ID; // could just be a unique id for double initing but why
		AnyWalletState.allWallets[wId]!.initParams = wInitParams; // ? should allWallets even be in global state?
		AnyWalletState.enabledWallets[wId] = AnyWalletState.allWallets[wId];
	}

	// if dapp changes config and user has a stale localstorage account, remove it
	let previousUserWallId = AnyWalletState.stored.activeAccount?.walletId;
	if (previousUserWallId) {
		let enabledWalletIdSet = new Set<WALLET_ID>(Object.keys(walletsToEnable) as WALLET_ID[]);
		if (!enabledWalletIdSet.has(previousUserWallId)) {
			// disconnect also removes the accts from LS
			AnyWalletState.allWallets[previousUserWallId]?.disconnect(); // dont await it
		}
	}

	return AnyWalletState.enabledWallets;
};

export const getAccountsByWalletId = (id: WALLET_ID) => {
	return AnyWalletState.stored.connectedAccounts.filter((account) => account.walletId === id);
};

export const removeAccountsByWalletId = (id: WALLET_ID) => {
	// console.log('removeAccountsByWalletId', id);

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

export const addConnectedAccounts = (accounts: Account[]) => {
	// console.log('addConnectedAccounts', accounts);
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
	AnyWalletState.stored.activeAccount = acct;
};

export const signTransactions = async (txns: Uint8Array[]) => {
	// console.log('signTransactions', txns);
	if (!AnyWalletState.enabledWallets) {
		throw new Error('No wallets enabled, call enableWallets() first');
	}
	let wKeys = Object.keys(AnyWalletState.enabledWallets);
	let walletId: WALLET_ID | null = AnyWalletState.activeWalletId;
	if (wKeys.length == 1) {
		walletId = wKeys[0] as WALLET_ID;
	}
	if (!walletId) {
		throw new Error('No active wallet id');
	}
	// FYI an active wallet isnt a connected wallet (active means dapp has is enabled, connected means user chose this wallet+acct)
	let activeWallet = AnyWalletState.enabledWallets[walletId];
	if (!activeWallet) {
		// happens when the dapp changes config + the user has an activeWallet in local storage that is no longer enabled
		throw new Error('No active wallet... how\'d you get here.');
	}

	let txnsSigned = await activeWallet.signTransactions(txns);
	return txnsSigned;
};
