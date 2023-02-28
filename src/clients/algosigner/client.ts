/**
 * Helpful resources:
 * https://github.com/PureStake/algosigner/blob/develop/docs/dApp-integration.md
 */
import { Buffer } from 'buffer'; // TODO remove this
import { BaseClient } from '../base';
import type {
	TransactionsArray,
	DecodedTransaction,
	DecodedSignedTransaction,
	Network,
} from '../../types';
import { METADATA } from './constants';
import type {
	WindowExtended,
	AlgoSignerTransaction,
	SupportedLedgers,
	AlgoSignerClientConstructor,
	InitParams,
	AlgoSignerSdk,
} from './types';
import { decodeObj, decodeSignedTransaction, encodeAddress } from 'algosdk';

// maps mainnet to MainNet etc
const getNetwork = (network: string): SupportedLedgers => {
	if (network === 'betanet') {
		return 'BetaNet';
	}

	if (network === 'testnet') {
		return 'TestNet';
	}

	if (network === 'mainnet') {
		return 'MainNet';
	}

	return network;
};

export class AlgoSignerClient extends BaseClient {
	sdk: AlgoSignerSdk;
	network: Network;

	constructor({
		sdk: clientSdk,
		network,
	}: AlgoSignerClientConstructor) {
		super();
		this.sdk = clientSdk;
		this.network = network;
	}

	static metadata = METADATA;

	static async init(initParams?: InitParams) {
		console.log(`[${METADATA.id}] init started`);

		try {
			if (
				typeof window == 'undefined' ||
				(window as WindowExtended).AlgoSigner === undefined
			) {
				throw new Error('AlgoSigner is not available.');
			}

			const clientSdk: AlgoSignerSdk = (window as WindowExtended).AlgoSigner;

			let network: Network = 'mainnet'; // default
			if (initParams?.config?.network) {
				if (initParams.config.network == 'mainnet' ||
					initParams.config.network == 'testnet' ||
					initParams.config.network == 'betanet') {
					network = initParams.config.network;
				} else {
					// invalid network, keeps w default
					console.warn(`invalid network in ${METADATA.id} config`);
				}
			}

			return new AlgoSignerClient({
				sdk: clientSdk,
				network,
			});
		} catch (e) {
			console.error('Error initializing...', e);
			return null;
		}
	}

	async connect() {
		await this.sdk.connect();

		const accounts = await this.sdk.accounts({
			ledger: getNetwork(this.network),
		});

		if (accounts.length === 0) {
			throw new Error(`No accounts found for ${METADATA.id}`);
		}

		const mappedAccounts = accounts.map(({ address }, index) => ({
			name: `AlgoSigner ${index + 1}`,
			address,
			providerId: METADATA.id,
		}));

		return {
			...METADATA,
			accounts: mappedAccounts,
		};
	}

	async reconnect(onDisconnect: () => void) {
		if (
			window === undefined ||
			(window as WindowExtended).AlgoSigner === undefined
		) {
			onDisconnect();
		}

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

		// Marshal the transactions, and add the signers property if they shouldn't be signed.
		const txnsToSign = decodedTxns.reduce<AlgoSignerTransaction[]>(
			(acc, txn, i) => {
				const txnObj: AlgoSignerTransaction = {
					txn: this.sdk.encoding.msgpackToBase64(transactions[i]),
				};

				if (
					'txn' in txn ||
					!connectedAccounts.includes(encodeAddress(txn['snd']))
				) {
					txnObj.txn = this.sdk.encoding.msgpackToBase64(
						decodeSignedTransaction(transactions[i]).txn.toByte()
					);
					txnObj.signers = [];
				}

				acc.push(txnObj);

				return acc;
			},
			[]
		);

		// Sign them with the client.
		const result = await this.sdk.signTxn(txnsToSign);

		// Join the newly signed transactions with the original group of transactions.
		const signedTxns = result.reduce<Uint8Array[]>((acc, txn, i) => {
			if (txn) {
				acc.push(new Uint8Array(Buffer.from(txn.blob, 'base64')));
			} else {
				acc.push(transactions[i]);
			}

			return acc;
		}, []);

		return signedTxns;
	}
}

export default AlgoSignerClient;