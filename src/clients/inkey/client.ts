/**
 * Helpful resources:
 * https://github.com/thencc/inkey-client-js
 */
import { BaseClient } from '../base/client';
import {
	Account,
} from '../../types';
import { InitParams, InkeySdk, SdkConfig, InkeyWalletClientConstructor } from './types';
import { METADATA } from './constants';
import { decodeObj, encodeAddress } from 'algosdk';
import type {
	EncodedSignedTransaction, 
	EncodedTransaction,
} from 'algosdk';
import { arrayBufferToBase64 } from 'src/utils';

export class InkeyClient extends BaseClient {
	sdk: InkeySdk;
	static metadata = METADATA;

	constructor({
		sdk: clientSdk,
	}: InkeyWalletClientConstructor) {
		super();
		this.sdk = clientSdk;
	}

	static async init(initParams?: InitParams): Promise<InkeyClient | null> {
		try {
			// TODO fix this: make this inkey client be able to init twice (other clients work ok)

			// a client sdk can be passed in pre-initialized. if so, use that
			let clientSdk: InkeySdk;
			if (initParams && initParams.sdk) {
				clientSdk = initParams.sdk; // the already init-ed sdk
			} else {

				let sdkConfig: SdkConfig;
				const defaultConfig: SdkConfig = {
					src: 'https://inkey.app',
					align: 'center',
				};
				sdkConfig = initParams?.config || defaultConfig;

				let sdkLib = await import('@thencc/inkey-client-js');
				let createClientSdk = sdkLib.createClient || sdkLib.default.createClient;
				clientSdk = await createClientSdk(sdkConfig);
			}

			// delay for css to load in so it doesnt look jumpy
			await new Promise(resolve => setTimeout(resolve, 600));

			return new InkeyClient({
				sdk: clientSdk,
			});
		} catch (e) {
			console.warn(`[${METADATA.id}] Error initializing...`, e);
			return null;
		}
	}

	async connect(p?: { 
		connectedAccounts?: Account[], 
		siteName?: string, 
		onDisconnect?: () => void 
	}) {
		// FYI will pass in connectedAccounts if any were connected previously
		const inkeyAccounts = await this.sdk.connect(p);
		
		// TODO make inkey connect throw / return something to catch when inkey-wallet modal was closed and connect didnt occur

		if (!inkeyAccounts) {
			throw new Error('no inkeyAccounts');
		}

		if (inkeyAccounts.length === 0) {
			throw new Error(
				`No accounts found for ${METADATA.id}`
			);
		}

		if (p?.onDisconnect) {
			this.sdk.frameBus.setOnDisconnect(p.onDisconnect);
		}

		return inkeyAccounts.map((account) => ({
			name: account.name,
			address: account.address,
			walletId: METADATA.id,
			chain: METADATA.chain,
			active: false,
			dateConnected: new Date().getTime(),
		}));
	}

	// what is .reconnect() used for? its in use-wallet lib but why?
	async reconnect(): Promise<Account[] | null> {
		// logger.log('inkey reconnect')
		return null;
	}

	async disconnect() {
		await this.sdk.disconnect();
	}

	async signTransactions(
		connectedAccounts: Account[],
		transactions: Uint8Array[]
	) {
		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return decodeObj(txn);
		}) as Array<EncodedTransaction | EncodedSignedTransaction>;

		// Marshal the transactions, and add the signers property if they shouldn't be signed. Get the unsigned transactions.
		// If the transaction isn't already signed and is to be sent from a connected account, add it to the arrays of transactions to be signed.
		const txnsToSign = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			let connectedAddrs = connectedAccounts.map(a => a.address);
			if (
				!('txn' in txn) &&
				connectedAddrs.includes(encodeAddress(txn['snd']))
			) {
				acc.push(transactions[i]);
			}
			return acc;
		}, []);

		// Sign them with the client.

		// FYI BOTH signing approaches work... (up to dev whether to convert from buff->b64 before or let inkey do it)

		// op 1
		// const result = await this.sdk.signTxnsUint8Array(txnsToSign);
		// logger.log('result', result);

		// op 2
		const txnsAsStrB64 = txnsToSign.map((tBuff) => arrayBufferToBase64(tBuff));
		const result = await this.sdk.signTxns(txnsAsStrB64, connectedAccounts);
		// logger.log('result', result);

		if (!result.success) {
			throw new Error('Error signing transactions');
		}

		const returnedTxns = result.signedTxns as Uint8Array[];

		// Join the newly signed transactions with the original group of transactions.
		const signedTxns = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			if (!('txn' in txn)) {
				const signedByUser = returnedTxns.shift();
				signedByUser && acc.push(signedByUser);
			} else {
				acc.push(transactions[i]);
			}
			return acc;
		}, []);

		return signedTxns;
	}

}