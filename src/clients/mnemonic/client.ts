// insecure wallet approach for fast development
import { BaseClient } from '../base/client';
import type { Wallet, DecodedTransaction, DecodedSignedTransaction } from '../../types';
import { METADATA } from './constants';
import { InitParams, MnemonicSdk, MnemonicClientConstructor } from './types';

import { decodeObj, encodeAddress, mnemonicToSecretKey, Transaction } from 'algosdk';
import { isBrowser } from 'src/utils';

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
			// 1. a algosdk.Account via ip.sdk
			// 2. OR a mnemonic from ip.config
			// 3. html prompt input (default)
			if (initParams && initParams.sdk) {
				clientSdk = initParams.sdk; // already init-ed sdk/acct
			} else {
				// get mnemonic from config arg or will prompt in ui later
				if (initParams && initParams.config) {
					if (initParams.config.mnemonic) {
						let mn = initParams.config.mnemonic;
						let acct = mnemonicToSecretKey(mn);
						clientSdk = acct;
					}
				}
			}

			return new MnemonicClient({
				sdk: clientSdk
			});
		} catch (e) {
			console.error('Error initializing...', e);
			return null;
		}
	}

	async connect(): Promise<Wallet> {
		if (this.sdk == undefined) {
			const mnemonic = await this.requestMnemonic();

			if (!mnemonic) {
				this.sdk = undefined;
				throw new Error('Mnemonic passphrase is required');
			}

			let acct = mnemonicToSecretKey(mnemonic);
			this.sdk = acct;
		}

		return {
			...METADATA,
			accounts: [
				{
					name: `Mnemonic Wallet 1`,
					address: this.sdk!.addr,
					walletId: METADATA.id,
				},
			],
		};
	}

	async disconnect() {
		this.sdk = undefined;
		return;
	}

	async reconnect(): Promise<Wallet | null> {
		return null;
	}

	async requestMnemonic(): Promise<string> {
		if (isBrowser()) {
			// TODO: store it locally?
			const pass = prompt('Enter mnemonic passphrase (25 words)');
			return pass ? pass : '';
		} else {
			throw new Error('Not used in a browser')
		}
	}

	signTransactions(
		connectedAccounts: string[],
		transactions: Uint8Array[],
		indexesToSign?: number[],
		returnGroup = true
	): Promise<Uint8Array[]> {
		if (!this.sdk) {
			throw new Error('Client has no account');
		}

		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return decodeObj(txn);
		}) as Array<DecodedTransaction | DecodedSignedTransaction>;

		const signedTxns: Uint8Array[] = [];
		// Sign them with the client.
		const signingResults: Uint8Array[] = [];
	 for (const idx in decodedTxns) {
			const dtxn = decodedTxns[idx];
			const isSigned = 'txn' in dtxn;

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
				!connectedAccounts.includes(encodeAddress(dtxn.snd))
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

export default MnemonicClient;