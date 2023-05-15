/**
 * Helpful resources:
 * https://docs.exodus.com/api-reference/algorand-provider-api/
 */
import { BaseClient } from '../base/client';
import type {
	DecodedTransaction,
	DecodedSignedTransaction,
} from '../../types';
import { METADATA } from './constants';
import {
	InitParams,
	WindowExtended,
	ExodusSdk,
	ExodusClientConstructor,
} from './types';
import { markRaw } from '@vue/reactivity';
import { decodeObj, encodeAddress } from 'algosdk';

export class ExodusClient extends BaseClient {
	sdk: ExodusSdk;
	onlyIfTrusted: boolean;

	constructor({
		sdk: clientSdk,
		onlyIfTrusted
	}: ExodusClientConstructor) {
		super();
		this.sdk = clientSdk;
		this.onlyIfTrusted = onlyIfTrusted;
	}

	static metadata = METADATA;

	static async init(initParams?: InitParams) {
		try {
			if (
				typeof window == 'undefined' ||
				(window as WindowExtended).exodus === undefined
			) {
				throw new Error('Exodus is not available. Do you have the browser extension installed?');
			}

			// .sdk NOTE since exodus uses js proxys also
			/**
			 * do proxy shim.
			 * 1. call window.exodus.algorand.disconnect()
			 * 2. set this.sdk as window.exodus.algorand.valueOf() // with markRaw
			 *
			 * OR
			 *
			 * just use full window.e.a... every time (not proxy)
			 */

			let clientSdk = (window as WindowExtended).exodus.algorand; // as ExodusSdk;
			// console.log('clientSdk', clientSdk);

			let onlyIfTrusted = false;
			if (initParams?.config?.onlyIfTrusted) {
				onlyIfTrusted = initParams?.config?.onlyIfTrusted;
			}

			return new ExodusClient({
				sdk: clientSdk,
				onlyIfTrusted,
			});
		} catch (e) {
			console.error('Error initializing...', e);
			return null;
		}
	}

	async connect() {
		let address = '';

		try {
			const { address: addr } = await (window as any).exodus.algorand.connect({
				onlyIfTrusted: this.onlyIfTrusted,
			});
			// console.log('addr', addr);
			address = addr;
		} catch (e) {
			console.warn('err w exodus connect');
			throw e;
		}

		if (!address) {
			throw new Error(`No accounts found for ${METADATA.id}`);
		}

		const accounts = [
			{
				name: `Exodus Account ${new Date().getTime().toString()}`,
				address,
				walletId: METADATA.id,
				chain: METADATA.chain,
				active: false,
			},
		];

		return {
			...METADATA,
			accounts,
		};
	}

	async reconnect(onDisconnect: () => void) {
		if (
			window === undefined ||
			(window as WindowExtended).exodus === undefined ||
			(window as WindowExtended).exodus.algorand.isConnected !== true
		) {
			onDisconnect();
		}

		return null;
	}

	async disconnect() {
		// this.sdk.disconnect();
		(window as WindowExtended).exodus.algorand.disconnect();
		return;
	}

	async signTransactions(
		connectedAccounts: string[],
		transactions: Array<Uint8Array>,
		indexesToSign?: number[],
		returnGroup = true
	) {
		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return decodeObj(txn);
		}) as Array<DecodedTransaction | DecodedSignedTransaction>;

		const signedIndexes: number[] = [];

		// Get the unsigned transactions.
		const txnsToSign = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			const isSigned = "txn" in txn;

			// If the indexes to be signed is specified
			// add it to the arrays of transactions to be signed.
			if (indexesToSign && indexesToSign.length && indexesToSign.includes(i)) {
				signedIndexes.push(i);
				acc.push(transactions[i]);
				// If the transaction isn't already signed and is to be sent from a connected account,
				// add it to the arrays of transactions to be signed
			} else if (
				!isSigned &&
				connectedAccounts.includes(encodeAddress(txn["snd"]))
			) {
				signedIndexes.push(i);
				acc.push(transactions[i]);
			}

			return acc;
		}, []);

		// Sign them with the client.
		const result = await (window as WindowExtended).exodus.algorand.signTransaction(txnsToSign);

		// Join the newly signed transactions with the original group of transactions.
		const signedTxns = transactions.reduce<Uint8Array[]>((acc, txn, i) => {
			if (signedIndexes.includes(i)) {
				const signedByUser = result.shift();
				signedByUser && acc.push(signedByUser);
			} else if (returnGroup) {
				acc.push(transactions[i]);
			}

			return acc;
		}, []);

		return signedTxns;
	}

}