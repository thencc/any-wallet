/**
 * Helpful resources:
 * https://github.com/blockshake-io/defly-connect
 */
import { BaseClient } from '../base/client';
import type {
	DecodedTransaction,
	DecodedSignedTransaction,
} from '../../types';
import { METADATA } from './constants';
import {
	DeflyTransaction,
	InitParams,
	DeflyWalletClientConstructor,
	DeflySdk,
	SdkConfig,
} from './types';
import type { Wallet } from '../../types';
import { decodeObj, decodeSignedTransaction, decodeUnsignedTransaction, encodeAddress } from 'algosdk';

export class DeflyClient extends BaseClient {
	sdk: DeflySdk;

	constructor({
		sdk: clientSdk
	}: DeflyWalletClientConstructor) {
		super();
		this.sdk = clientSdk;
	}

	static metadata = METADATA;

	static async init(initParams?: InitParams) {
		try {
			// necessary shim for lib that use walletconnect under the hood (pera, defly, wc)
			if (typeof window !== 'undefined') {
				(window as any).global = window; // necessary shim for pera. TODO still in new lib version that uses algosdk w buffer shim already done?
			} else {
				console.warn('Using a browser lib not in a browser...');
			}

			let clientSdk: DeflySdk;
			if (initParams && initParams.sdk) {
				clientSdk = initParams.sdk; // already init-ed sdk
			} else {
				// load sdk + init it

				let sdkConfig: SdkConfig;
				const defaultConfig: SdkConfig = {
					shouldShowSignTxnToast: false
				};
				sdkConfig = initParams?.config || defaultConfig;

				// TODO get this pkg name from METADATA
				let sdkLib = await import('@blockshake/defly-connect');
				let createClientSdk = sdkLib.DeflyWalletConnect || sdkLib.default.DeflyWalletConnect; // sometimes needs this shim

				// console.log('createClientSdk', createClientSdk);
				clientSdk = new createClientSdk(sdkConfig);
			}

			return new DeflyClient({
				sdk: clientSdk,
			});
		} catch (e) {
			console.error('Error initializing...', e);
			return null;
		}
	}

	async connect(onDisconnect: () => void): Promise<Wallet> {
		// console.log(`${METADATA.id} connect`);
		const accounts = await this.sdk.connect().catch(console.info);

		// TODO might have to do same pera (any) shim for connector
		this.sdk.connector.on('disconnect', onDisconnect);

		if (!accounts || accounts.length === 0) {
			throw new Error(`No accounts found for ${METADATA.id}`);
		}

		const mappedAccounts = accounts.map((address: string, index: number) => ({
			name: `Defly Wallet ${index + 1}`,
			address,
			walletId: METADATA.id,
			chain: METADATA.chain,
		}));

		return {
			...METADATA,
			accounts: mappedAccounts,
		};
	}

	async reconnect(onDisconnect: () => void) {
		const accounts = await this.sdk.reconnectSession().catch(console.info);
		this.sdk.connector?.on('disconnect', onDisconnect);

		if (!accounts) {
			return null;
		}

		return {
			...METADATA,
			accounts: accounts.map((address: string, index: number) => ({
				name: `Defly Wallet ${index + 1}`,
				address,
				walletId: METADATA.id,
				chain: METADATA.chain,
			})),
		};
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

		// Marshal the transactions,
		// and add the signers property if they shouldn't be signed.
		const txnsToSign = decodedTxns.reduce<DeflyTransaction[]>((acc, txn, i) => {
			if (
				!('txn' in txn) &&
				connectedAccounts.includes(encodeAddress(txn['snd']))
			) {
				acc.push({
					txn: decodeUnsignedTransaction(transactions[i]),
				});
			} else {
				acc.push({
					txn: decodeSignedTransaction(transactions[i]).txn,
					signers: [],
				});
			}

			return acc;
		}, []);

		// Sign them with the client.
		const result = await this.sdk.signTransaction([txnsToSign]);

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