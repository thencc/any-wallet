// libs
import { computed, reactive, readonly } from '@vue/reactivity';

import { WALLET_ID, WalletInitParamsObj, DEFAULT_WALLETS_TO_ENABLE, WalletsObj } from '.'; // wallets
import { CLIENT_MAP } from 'src/clientsNEW'; // clients
import { AnyWalletState } from 'src/state'; // state

// other TODO sort
import { BaseClient } from 'src/clients/base';
import { ClientInitParams } from 'src/clients/base/types';
import { Account } from 'src/types/wallet';

export const createWallet = <WalClient extends BaseClient = BaseClient>(id: WALLET_ID, ip: boolean | ClientInitParams = true) => {
	let w = reactive({
		// === wallet state ===
		id: id, // as W_ID,
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
};

export const enableWallets = (
	walletsToEnable: WalletInitParamsObj = DEFAULT_WALLETS_TO_ENABLE,
) => {
	console.log('enableWallets started');

	if (AnyWalletState.enabledWallets !== null) {
		console.warn('enableWallets called while some wallets were already initialized');
	} else {
		AnyWalletState.enabledWallets = {} as WalletsObj;
	}

	for (let [wKey, wInitParams] of Object.entries(walletsToEnable)) {
		let wId = wKey as WALLET_ID; // could just be a unique id for double initing.but why

		AnyWalletState.allWallets[wId]!.initParams = wInitParams;
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

	// now that the wallets have been enabled, set activeWallet if possible
	// if (AnyWalletState.activeWalletId) {
	// 	let aW = AnyWalletState.enabledWallets[AnyWalletState.activeWalletId];
	// 	if (aW) {
	// 		AnyWalletState.activeWallet = aW;
	// 	}
	// }

	return AnyWalletState.enabledWallets;
};

export const getAccountsByProvider = (id: WALLET_ID) => {
	return AnyWalletState.stored.connectedAccounts.filter((account) => account.providerId === id);
};

export const removeAccountsByClient = (id: WALLET_ID) => {
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
	if (!activeWallet) {
		throw new Error('No active wallet... shouldnt happen.');
	}
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
