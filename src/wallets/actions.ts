// libs
import { CLIENT_MAP } from 'src/clients';
import { AnyWalletState } from 'src/state'; // state
import { isBrowser, logger } from 'src/utils';

// FYI import order matters during build
import { BaseClient } from 'src/clients/base/client';
import { ClientInitParams } from 'src/clients/base/types';
import type { W_ID } from './consts';

import { 
	makeAutoObservable,
	toJS,
} from 'mobx';

export const createWallet = <WalClient extends BaseClient = BaseClient>(state: AnyWalletState, id: W_ID, ip: boolean | ClientInitParams = true) => {
	logger.debug('createWallet', state, id);

	class AWallet {
		// === state ===
		id = id;
		metadata = CLIENT_MAP[id].client.metadata;
		// client = null as null | BaseClient; // WalClient
		client = null as null | WalClient; // sometimes this doesnt work at build time, but BaseClient does. maybe too big of a type to infer.
		initParams = ip; // params used for client init
		inited = false; // client
		initing = false; // client + sdk
		signing = false;
		connecting = false;

		constructor() {
			makeAutoObservable(this);
		}

		// === methods ===
		loadClient = async () => {
			logger.debug('loadClient:', id);
			
			if (w.inited) {
				logger.debug('aw already inited client');
				return true;
			} else {
				w.initing = true;

				if (typeof w.initParams == 'string') {
					// FYI this check is only for the mnemonic wallet, when directly mn string as initParam config directly
					w.client = await CLIENT_MAP[id].client.init(w.initParams) as WalClient;
				} else if (typeof w.initParams == 'object' && (
					w.initParams.config || w.initParams.sdk
				)) {
					w.client = await CLIENT_MAP[id].client.init(w.initParams) as WalClient;
				} else if (ip == true) {
					w.client = await CLIENT_MAP[id].client.init() as WalClient;
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
		}
		unloadClient = async () => {
			await w.client?.disconnect(); // nullifies w.client.sdk
			w.inited = false;
		}
		connect = async (p?: any) => {
			w.connecting = true;
			try {
				await w.loadClient();

				// if we have cached accts for this client wallet, send em over w the connect (inkey uses this for one)
				if (w.accounts) {
					if (p == undefined) {
						p = {};
					}
					// FYI need the RAW js objects here, not the computed proxies (otherwise is breaks in runtime but not build)
					let cAccts = toJS(w.accounts);
					p.connectedAccounts = [...cAccts];
				}

				let accounts = await w.client!.connect(p);

				// if it gets past .connect, it worked, so saved the returned accts + set one as active
				state.addConnectedAccounts(accounts)
				state.setAsActiveAccount(accounts[0]);

				return accounts;
			} catch(e) {
				throw e;
			} finally {
				w.connecting = false;
			}
		}
		disconnect = async () => {
			logger.debug('disconnect', w.id);
			w.removeAccounts();
			await w.loadClient();
			try {
				await w.unloadClient();
			} catch (e) {
				console.warn(e);
			}
		}
		reconnect = async () => {
			await w.loadClient();
			await w.client!.reconnect(() => { });
		}
		setAsActiveWallet = () => {
			let accts = state.getAccountsByWalletId(id);
			if (!accts) {
				throw new Error('No accounts for this provider to set as active');
			} else {
				// defaults to first avail acct
				state.setAsActiveAccount(accts[0]);
			}
		}
		removeAccounts = () => {
			state.removeAccountsByWalletId(id);
		}
		signTransactions = async (transactions: Uint8Array[]): Promise<Uint8Array[]> => {
			await w.loadClient(); // loads sdk only ondemand

			// kinda clunky since modal / wallet ui might pop up twice, but it works...
			let acctsOfThisWallet = toJS(w.accounts);
			
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
		}

		// === computeds ===
		get accounts() {
			return state.getAccountsByWalletId(id);
		}
		get isConnected() {
			return state.connectedAccounts.some(
				(accounts) => accounts.walletId === id
			);
		}
		get isActive() {
			return state.activeAccount?.walletId === id
		}
	}
	let w = new AWallet();
	return w;
};

export const signTransactions = async (state: AnyWalletState, txns: Uint8Array[]) => {
	logger.log('signTransactions', txns);
	if (!state.activeAccount) {
		throw new Error('No active account to sign txns with.');
	}
	let activeWallet = state.activeWallet;
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
