/**
 * Helpful resources:
 * https://github.com/thencc/inkey-client-js
 */
import { BaseClient } from '../base/client';
import {
	DecodedTransaction,
	DecodedSignedTransaction,
	Wallet,
} from '../../types';
import { InitParams, InkeySdk, SdkConfig, InkeyWalletClientConstructor } from './types';
import { METADATA } from './constants';
import { decodeObj, encodeAddress } from 'algosdk';

// helpers TODO remove this / move it to algonaut pkg
export const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
	if (typeof window == undefined) {
		throw new Error('[inkey] cannot access window');
	}
	var binary = '';
	var bytes = new Uint8Array(buffer);
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
};


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
				clientSdk = initParams.sdk; // already init-ed sdk
			} else {

				let sdkConfig: SdkConfig;
				const defaultConfig: SdkConfig = {
					src: 'https://inkey-staging.web.app', //
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

	async connect(p?: { siteName?: string, username?: string, onDisconnect?: () => void }) {
		const inkeyAccounts = await this.sdk.connect(p);
		// TODO make inkey connect throw / return something to catch when inkey modal was closed and connect didnt occur

		if (!inkeyAccounts) {
			throw new Error('no inkeyAccounts');
		}

		const accounts = inkeyAccounts.map(a => {
			return {
				address: a.address,
				name: a.username
			}
		});

		if (accounts.length === 0) {
			throw new Error(
				`No accounts found for ${METADATA.id}`
			);
		}

		const mappedAccounts = accounts.map((account) => ({
			name: account.name,
			address: account.address,
			walletId: METADATA.id,
			chain: METADATA.chain,
		}));

		if (p?.onDisconnect) {
			this.sdk.frameBus.setOnDisconnect(p.onDisconnect);
		}

		return {
			...METADATA,
			accounts: mappedAccounts,
		};
	}

	// TODO implement reconnect
	async reconnect(): Promise<Wallet | null> {
		// console.log('inkey reconnect')
		return null;
	}

	async disconnect() {
		await this.sdk.disconnect();
	}

	async signTransactions(
		connectedAccounts: string[],
		transactions: Uint8Array[]
	) {
		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return decodeObj(txn);
		}) as Array<DecodedTransaction | DecodedSignedTransaction>;

		// Marshal the transactions, and add the signers property if they shouldn't be signed. Get the unsigned transactions.
		// If the transaction isn't already signed and is to be sent from a connected account, add it to the arrays of transactions to be signed.
		const txnsToSign = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			if (
				!('txn' in txn) &&
				connectedAccounts.includes(encodeAddress(txn['snd']))
			) {
				acc.push(transactions[i]);
			}
			return acc;
		}, []);

		// Sign them with the client.

		// FYI BOTH signing approaches work... (up to dev whether to convert from buff->b64 before or let inkey do it)

		// op 1
		// const result = await this.sdk.signTxnsUint8Array(txnsToSign);
		// console.log('result', result);

		// op 2
		const txnsAsStrB64 = txnsToSign.map((tBuff) => arrayBufferToBase64(tBuff));
		const result = await this.sdk.signTxns(txnsAsStrB64);
		// console.log('result', result);

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