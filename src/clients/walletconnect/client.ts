/**
 * Helpful resources:
 * https://developer.algorand.org/docs/get-details/walletconnect/
 */
// import type _algosdk from 'algosdk';
// import Algod, { getAlgodClient } from '../../algod';
// // import type WalletConnect from '@walletconnect/client';
// import type { Wallet } from '../../types';
// import { WALLET_ID } from 'src/wallets/constants';
// import { BaseClient } from '../base';
// import { formatJsonRpcRequest } from '@json-rpc-tools/utils';
// import {
// 	TransactionsArray,
// 	DecodedTransaction,
// 	DecodedSignedTransaction,
// 	Network,
// } from '../../types';
// import { ICON } from './constants';
// import {
// 	WalletConnectClientConstructor,
// 	InitParams,
// 	WalletConnectTransaction,
// } from './types';
// import { DEFAULT_NETWORK } from 'src/constants';


// function netToChainId(network: Network) {
// 	let chainId = 416001; // mainnet
// 	if (network === 'betanet') {
// 		chainId = 416003;
// 	} else if (network === 'testnet') {
// 		chainId = 416002;
// 	}
// 	return chainId;
// }


// export class WalletConnectClient extends BaseClient {
// 	sdk: WalletConnect;
// 	network: Network;

// 	constructor({
// 		client,
// 		algosdk,
// 		algodClient,
// 		network,
// 	}: WalletConnectClientConstructor) {
// 		super(algosdk, algodClient);
// 		this.#client = client;
// 		this.network = network;
// 	}

// 	static metadata = {
// 		id: WALLET_ID.WALLETCONNECT,
// 		name: 'WalletConnect',
// 		icon: ICON,
// 		isWalletConnect: true,
// 	};

// 	static async init({
// 		clientOptions,
// 		algodOptions,
// 		clientStatic,
// 		modalStatic,
// 		algosdkStatic,
// 		network = DEFAULT_NETWORK,
// 	}: InitParams) {
// 		try {
// 			const WalletConnect =
// 				clientStatic || (await import('@walletconnect/client')).default;
// 			const QRCodeModal =
// 				modalStatic ||
// 				(await import('algorand-walletconnect-qrcode-modal')).default;

// 			const walletConnect = new WalletConnect({
// 				...(clientOptions
// 					? clientOptions
// 					: {
// 							bridge: 'https://bridge.walletconnect.org',
// 							qrcodeModal: QRCodeModal,
// 						}),
// 			});

// 			const algosdk = algosdkStatic || (await Algod.init(algodOptions)).algosdk;
// 			const algodClient = await getAlgodClient(algosdk, algodOptions);

// 			const initWallet: WalletConnectClientConstructor = {
// 				client: walletConnect,
// 				algosdk: algosdk,
// 				algodClient: algodClient,
// 				network,
// 			};

// 			return new WalletConnectClient(initWallet);
// 		} catch (e) {
// 			console.error('Error initializing...', e);
// 			return null;
// 		}
// 	}

// 	async connect(): Promise<Wallet> {
// 		let chainId = netToChainId(this.network);

// 		if (!this.#client.connected) {
// 			await this.#client.createSession({ chainId });
// 		}

// 		return new Promise((resolve, reject) => {
// 			this.#client.on('connect', (error, payload) => {
// 				if (error) {
// 					reject(error);
// 				}

// 				const { accounts } = payload.params[0];

// 				resolve({
// 					...WalletConnectClient.metadata,
// 					accounts: accounts.map((address: string, index: number) => ({
// 						name: `Wallet Connect ${index + 1}`,
// 						address,
// 						walletId: WalletConnectClient.metadata.id,
// 					})),
// 				});
// 			});

// 			this.#client.on('session_update', (error, payload) => {
// 				if (error) {
// 					reject(error);
// 				}

// 				const { accounts } = payload.params[0];

// 				resolve({
// 					...WalletConnectClient.metadata,
// 					accounts: accounts.map((address: string, index: number) => ({
// 						name: `Wallet Connect ${index + 1}`,
// 						address,
// 						walletId: WalletConnectClient.metadata.id,
// 					})),
// 				});
// 			});
// 		});
// 	}

// 	async reconnect() {
// 		const accounts = this.#client.accounts;

// 		if (!accounts) {
// 			return null;
// 		}

// 		return {
// 			...WalletConnectClient.metadata,
// 			accounts: accounts.map((address: string, index: number) => ({
// 				name: `Wallet Connect ${index + 1}`,
// 				address,
// 				walletId: WalletConnectClient.metadata.id,
// 			})),
// 		};
// 	}

// 	check() {
// 		return this.#client.connected;
// 	}

// 	async disconnect() {
// 		try {
// 			await this.#client.killSession();
// 		} catch (e) {
// 			console.error('Error disconnecting', e);
// 		}
// 	}

// 	async signTransactions(
// 		connectedAccounts: string[],
// 		transactions: Uint8Array[]
// 	) {
// 		// Decode the transactions to access their properties.
// 		const decodedTxns = transactions.map((txn) => {
// 			return this.algosdk.decodeObj(txn);
// 		}) as Array<DecodedTransaction | DecodedSignedTransaction>;

// 		// Marshal the transactions,
// 		// and add the signers property if they shouldn't be signed.
// 		const txnsToSign = decodedTxns.reduce<WalletConnectTransaction[]>(
// 			(acc, txn, i) => {
// 				if (
// 					!('txn' in txn) &&
// 					connectedAccounts.includes(this.algosdk.encodeAddress(txn['snd']))
// 				) {
// 					acc.push({
// 						txn: Buffer.from(transactions[i]).toString('base64'),
// 					});
// 				} else {
// 					acc.push({
// 						txn: Buffer.from(transactions[i]).toString('base64'),
// 						signers: [],
// 					});
// 				}

// 				return acc;
// 			},
// 			[]
// 		);

// 		const requestParams = [txnsToSign];
// 		const request = formatJsonRpcRequest('algo_signTxn', requestParams);

// 		// Play an audio file to keep Wallet Connect's web socket open on iOS
// 		// when the user goes into background mode.
// 		this.keepWCAliveStart();

// 		// Sign them with the client.
// 		const result: Array<string | null> = await this.#client.sendCustomRequest(
// 			request
// 		);

// 		this.keepWCAliveStop();

// 		// Join the newly signed transactions with the original group of transactions.
// 		const signedTxns = result.reduce((signedTxns: Uint8Array[], txn, i) => {
// 			if (txn) {
// 				signedTxns.push(new Uint8Array(Buffer.from(txn, 'base64')));
// 			}

// 			if (txn === null) {
// 				signedTxns.push(transactions[i]);
// 			}

// 			return signedTxns;
// 		}, []);

// 		return signedTxns;
// 	}
// }

// export default WalletConnectClient;
export const WCClient = null; // this is deprecated...