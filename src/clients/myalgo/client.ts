/**
 * Helpful resources:
 * https://github.com/randlabs/myalgo-connect
 */
import { BaseClient } from '../base/client';
import {
	DecodedTransaction,
	DecodedSignedTransaction,
} from '../../types';
import { MyAlgoClientConstructor, InitParams, MyAlgoSdk, SdkConfig } from './types';
import { METADATA } from './constants';

import { markRaw } from '@vue/reactivity';
import { decodeObj, encodeAddress } from 'algosdk';

export class MyAlgoClient extends BaseClient {
	sdk: MyAlgoSdk;

	constructor({
		sdk: clientSdk, // inited
	}: MyAlgoClientConstructor) {
		super();
		this.sdk = clientSdk;
	}

	static metadata = METADATA;

	static async init(initParams?: InitParams) {
		// console.log(`[${METADATA.id}] init started`);

		try {

			let clientSdk: MyAlgoSdk;
			if (initParams && initParams.sdk) {
				clientSdk = initParams.sdk; // already init-ed sdk
			} else {
				// load sdk + init it

				let sdkConfig: SdkConfig;
				const defaultConfig: SdkConfig = {
					disableLedgerNano: false
				};
				sdkConfig = initParams?.config || defaultConfig;

				let bufferLib = await import('buffer');
				if (!(window as any).Buffer) (window as any).Buffer = bufferLib.Buffer || bufferLib.default.Buffer;

				let sdkLib = await import('@randlabs/myalgo-connect');
				let createClientSdk = sdkLib.default;
				clientSdk = new createClientSdk(sdkConfig);
			}

			clientSdk = markRaw(clientSdk); // vue-r fix

			return new MyAlgoClient({
				sdk: clientSdk
			});
		} catch (e) {
			console.error(`[${METADATA.id}] Error initializing...`, e);
			return null;
		}
	}

	async connect() {
		const accounts = await this.sdk.connect();

		if (accounts.length === 0) {
			throw new Error(
				`No accounts found for ${METADATA.id}`
			);
		}

		const mappedAccounts = accounts.map((account) => ({
			...account,
			walletId: METADATA.id,
		}));

		return {
			...METADATA,
			accounts: mappedAccounts,
		};
	}

	async reconnect() {
		return null;
	}

	async disconnect() {
		return;
	}

	async signTransactions(
		connectedAccounts: string[],
		transactions: Uint8Array[]
	) {
		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return decodeObj(txn);
		}) as Array<DecodedTransaction | DecodedSignedTransaction>;

		// Get the unsigned transactions.
		const txnsToSign = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			// If the transaction isn't already signed and is to be sent from a connected account,
			// add it to the arrays of transactions to be signed.

			if (
				!('txn' in txn) &&
				connectedAccounts.includes(encodeAddress(txn['snd']))
			) {
				acc.push(transactions[i]);
			}

			return acc;
		}, []);

		// Sign them with the client.
		const result = await this.sdk.signTransaction(txnsToSign);

		// Join the newly signed transactions with the original group of transactions.
		const signedTxns = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			if (!('txn' in txn)) {
				const signedByUser = result.shift()?.blob;
				signedByUser && acc.push(signedByUser);
			} else {
				acc.push(transactions[i]);
			}

			return acc;
		}, []);

		return signedTxns;
	}

}