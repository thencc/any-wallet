/**
 * Helpful resources:
 * https://docs.exodus.com/api-reference/algorand-provider-api/
 */
import { BaseClient } from '../base';
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
			console.log('exo clientSdk 9', clientSdk);
			console.log({...clientSdk});

			clientSdk = clientSdk.valueOf() as ExodusSdk; // vue-r fix
			console.log('exo clientSdk 1', clientSdk);
			console.log({ ...clientSdk });

			clientSdk = markRaw(clientSdk.valueOf() as ExodusSdk); // vue-r fix
			console.log('exo clientSdk 2', clientSdk);
			console.log({ ...clientSdk });


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
			const { address: addr } = await this.sdk.connect({
				onlyIfTrusted: this.onlyIfTrusted,
			});
			console.log('addr', addr);

			address = addr;
		} catch(e) {
			console.log('catch exo err 1');
			console.log(e);


			const { address: addr2 } = await (window as any).exodus.algorand.connect({
				onlyIfTrusted: this.onlyIfTrusted,
			});
			console.log('addr2', addr2);

			address = addr2;
		}


		if (!address) {
			throw new Error(`No accounts found for ${METADATA.id}`);
		}

		const accounts = [
			{
				name: `Exodus 1`,
				address,
				providerId: METADATA.id,
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
		this.sdk.disconnect();
		return;
	}

	async signTransactions(
		connectedAccounts: string[],
		transactions: Array<Uint8Array>
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
				const signedByUser = result.shift();
				signedByUser && acc.push(signedByUser);
			} else {
				acc.push(transactions[i]);
			}

			return acc;
		}, []);

		return signedTxns;
	}

}

export default ExodusClient;