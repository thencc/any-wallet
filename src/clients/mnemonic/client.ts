// insecure wallet approach for fast development
import { BaseClient } from '../base';
import type { Wallet, TransactionsArray, Network, DecodedTransaction, DecodedSignedTransaction } from '../../types';
import { ICON, METADATA } from './constants';
import { InitParams, MnemonicSdk, MnemonicWalletClientConstructor } from './types';
import { DEFAULT_NETWORK } from 'src/constants';

import { decodeObj, encodeAddress, mnemonicToSecretKey, Transaction } from 'algosdk';
import { isBrowser } from 'src/utils';

export class MnemonicClient extends BaseClient {
	// sdk: MnemonicSdk;
	sdk: any | undefined | MnemonicSdk = {};
	// network: Network;

	constructor({
		// sdk: clientSdk,
		// network,
	}: MnemonicWalletClientConstructor) {
		console.log('MnemonicClient const.');

		super();
		// this.sdk = clientSdk;
		// this.network = network;
	}

	static metadata = METADATA;

	static async init(initParams?: InitParams) {
		console.log(`${METADATA.id} init started`);

		try {
			// let clientSdk: MnemonicSdk;

			// if (initParams && initParams.sdk) {
			// 	clientSdk = initParams.sdk; // already init-ed sdk
			// } else {
			// 	// load sdk + init it

			// 	let sdkConfig: MnemonicSdk;
			// 	const defaultConfig: SdkConfig = {
			// 		shouldShowSignTxnToast: false
			// 	};
			// 	sdkConfig = initParams?.config || defaultConfig;

			// 	let sdkLib = await import('algosdk');
			// 	let createClientSdk = sdkLib.PeraWalletConnect || sdkLib.default.PeraWalletConnect; // sometimes needs this shim
			// 	// FYI because pera's client is built to cjs, vite's optimize deps helper in the server acts differently than when it builds using rollup. solution: fallback to .default;

			// 	// console.log('createClientSdk', createClientSdk);
			// 	clientSdk = new createClientSdk(sdkConfig);
			// }

			// clientSdk = markRaw(clientSdk); // vue-r fix

			return new MnemonicClient({
				// sdk: clientSdk
			});

			// const algosdk = initParams?.sdk || (await Algod.init(algodOptions)).algosdk;
			// // const algodClient = await getAlgodClient(algosdk, algodOptions);
			// // console.log(network, algodClient);

			// return new MnemonicWalletClient({
			// 	metadata: MnemonicWalletClient.metadata,
			// 	id: PROVIDER_ID.MNEMONIC,
			// 	algosdk: algosdk,
			// 	algodClient: algodClient,
			// 	network,
			// });
		} catch (e) {
			console.error('Error initializing...', e);
			return null;
		}
	}

	async connect(): Promise<Wallet> {
		const mnemonic = await this.requestMnemonic();

		if (!mnemonic) {
			this.sdk = undefined;
			throw new Error('Mnemonic passphrase is required');
		}

		this.sdk = mnemonicToSecretKey(mnemonic);

		return {
			...METADATA,
			accounts: [
				{
					name: `MnemonicWallet 1`,
					address: this.sdk.addr,
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
		console.log('requestMnemonic started');
		if (isBrowser()) {
			// TODO: store it locally?
			const pass = prompt('enter mnemonic passphrase, 25 words');
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
			throw new Error('Client not connected');
		}

		// Decode the transactions to access their properties.
		// const decodedTxns = transactions.map((txn) => {
		// 	return decodeObj(txn);
		// }) as Array<
		// 	_algosdk.EncodedTransaction | _algosdk.EncodedSignedTransaction
		// >;
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