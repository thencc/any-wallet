// insecure wallet approach for fast development
import { BaseClient } from '../base/client';
import type { 
	WalletAccounts, 
	Account 
} from '../../types';
import { METADATA } from './constants';
import { InitParams, MnemonicSdk, MnemonicClientConstructor } from './types';

import { decodeObj, encodeAddress, mnemonicToSecretKey, Transaction } from 'algosdk';
import type {
	EncodedSignedTransaction, 
	EncodedTransaction,
} from 'algosdk';

export class MnemonicClient extends BaseClient {
	// sdk IS the algo Account in this client
	sdk: undefined | MnemonicSdk = undefined; // aka Account

	constructor({
		sdk: clientSdk,
	}: MnemonicClientConstructor) {
		super();
		this.sdk = clientSdk;
	}

	static metadata = METADATA;

	static async init(initParams?: InitParams) {
		try {
			let clientSdk: undefined | MnemonicSdk = undefined;

			// can intake:
			// 0. mnemonic string (instead of ip)
			// 1. a algosdk.Account via ip.sdk
			// 2. OR a mnemonic from ip.config.mnemonic
			if (initParams) {
				if (typeof initParams == 'string') {
					// do init w passed in mnemonic (try)
					let acct = mnemonicToSecretKey(initParams);
					clientSdk = acct;
				} else if (typeof initParams == 'object') {
					// assume initParams is an object
					if (initParams.sdk) {
						clientSdk = initParams.sdk; // already init-ed sdk/acct
					} else if (initParams.config) {
						if (initParams.config.mnemonic) {
							let mn = initParams.config.mnemonic;
							let acct = mnemonicToSecretKey(mn);
							clientSdk = acct;
						}
					} else {
						// insuffient mnemonic client init params
					}
				} else {
					throw new Error('bad initParams for mnemonic client');
				}
			} else {
				console.error('mnemonic wallet needs to be inited w a mnemonic - none provided.');
			}

			return new MnemonicClient({
				sdk: clientSdk
			});
		} catch (e) {
			console.error('Error initializing...', e);
			return null;
		}
	}

	async connect(): Promise<WalletAccounts> {
		if (this.sdk == undefined) {
			console.warn('mnemonic client wasnt initialized properly... no mnemonic passed in so cannot connect.');
		}

		return {
			...METADATA,
			accounts: [
				{
					name: `Mnemonic Account ${new Date().getTime().toString()}`,
					address: this.sdk?.addr || '',
					walletId: METADATA.id,
					chain: METADATA.chain,
					active: false,
				},
			],
		};
	}

	async disconnect() {
		this.sdk = undefined;
		return;
	}

	async reconnect(): Promise<WalletAccounts | null> {
		return null;
	}

	async signTransactions(
		connectedAccounts: Account[],
		transactions: Uint8Array[],
		indexesToSign?: number[],
		returnGroup = true
	): Promise<Uint8Array[]> {
		if (!this.sdk) {
			await this.connect(); // re-authenticate into the account
		}
		if (!this.sdk) {
			throw new Error('Client could not init');
		}

		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return decodeObj(txn);
		}) as Array<EncodedTransaction | EncodedSignedTransaction>;

		const signedTxns: Uint8Array[] = [];

		// Sign them with the client.
		const signingResults: Uint8Array[] = [];

		for (const idx in decodedTxns) {
			const dtxn = decodedTxns[idx];
			const isSigned = 'txn' in dtxn;
			let connectedAddrs = connectedAccounts.map(a => a.address);

			// push the incoming txn into signed, we'll overwrite it later
			signedTxns.push(transactions[idx]);

			// Its already signed, skip it
			if (isSigned) {
				continue;
				// Not specified in indexes to sign, skip it
			} else if (
				indexesToSign &&
				indexesToSign.length &&
				!indexesToSign.includes(Number(idx))
			) {
				continue;
			}
			// Not to be signed by our signer, skip it
			else if (
				!connectedAddrs.includes(encodeAddress(dtxn.snd))
			) {
				continue;
			}

			// overwrite with an empty blob
			signedTxns[idx] = new Uint8Array();

			const txn = Transaction.from_obj_for_encoding(dtxn);
			const signedTxn = txn.signTxn(this.sdk.sk);
			signingResults.push(signedTxn);
		}

		// Restore the newly signed txns in the correct order
		let signedIdx = 0;
		const formattedTxns = signedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			// If its an empty array, infer that it is one of the
			// ones we wanted to have signed and overwrite the empty buff
			if (txn.length === 0) {
				acc.push(signingResults[signedIdx]);

				signedIdx += 1;
			} else if (returnGroup) {
				acc.push(txn);
			}

			return acc;
		}, []);

		return Promise.resolve(formattedTxns);
	}
}