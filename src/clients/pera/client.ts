/**
 * Helpful resources:
 * https://github.com/perawallet/connect
 */
import { BaseClient } from "../base";
import type _algosdk from "algosdk";
import Algod, { getAlgodClient, getAlgosdk } from "../../algod";
import type { PeraWalletConnect } from "@perawallet/connect";
import type {
	Wallet,
	TransactionsArray,
	DecodedTransaction,
	DecodedSignedTransaction,
	Network,
} from "../../types";
import { CLIENT_ID, DEFAULT_NETWORK } from "../../constants";
import { ICON, METADATA } from "./constants";
import {
	PeraTransaction,
	PeraWalletClientConstructor,
	InitParams,
	PeraSdk,
	SdkConfig,
} from "./types";

import { markRaw } from "@vue/reactivity";
import { nccState, addConnectedAccounts, setAsActiveAccount } from "../../utils/index";

export class PeraClient extends BaseClient {
	sdk: PeraSdk;
	// client: PeraWalletConnect;
	// network: Network;

	constructor({
		sdk: clientSdk, // inited
		// client,
		// algosdk,
		// algodClient,
		// network,
	}: PeraWalletClientConstructor) {
		super();
		this.sdk = clientSdk;

		// super(algosdk, algodClient);
		// this.client = client;
		// this.network = network;
	}

	static metadata = METADATA;

	static async init(initParams?: InitParams): Promise<PeraClient | null> {
		try {
			if (typeof window !== "undefined") {
				(window as any).global = window; // necessary shim for pera
			} else {
				console.warn('Using a browser lib not in a browser...');
			}

			// const PeraWalletConnect =
			//   clientStatic || (await import("@perawallet/connect")).PeraWalletConnect;
			// console.log('PeraWalletConnect', PeraWalletConnect);

			let clientSdk: PeraSdk;
			if (initParams && initParams.sdk) {
				clientSdk = initParams.sdk; // already init-ed sdk
			} else {
				// load sdk + init it

				let sdkConfig: SdkConfig;
				const defaultConfig: SdkConfig = {
					shouldShowSignTxnToast: false
				};
				sdkConfig = initParams?.config || defaultConfig;


				let sdkLib = await import("@perawallet/connect");
				// inkeyLib = inkeyLib.default.createClient; // not all the clients need this shim...
				let createClientSdk = sdkLib.PeraWalletConnect || sdkLib.default.PeraWalletConnect; // sometimes needs this shim
				// FYI because pera's client is built to cjs, vite's optimize deps helper in the server acts differently than when it builds using rollup. solution: fallback to .default;


				console.log('createClientSdk', createClientSdk);
				clientSdk = new createClientSdk(sdkConfig);

			}

			// vue-r fix
			clientSdk = markRaw(clientSdk);

			// let peraClient = clientStatic;
			// if (peraClient == undefined) {
			// 	let peraLib = await import("@perawallet/connect");

			// 	let clientGenerator =

			// 	// use markRaw to not trigger vue-reactivity
			// 	peraClient = markRaw(new clientGenerator({
			// 			...(clientOptions ? clientOptions : { shouldShowSignTxnToast: false }),
			// 		})) as unknown as PeraWalletConnect;
			// }
			// console.log('peraClient', peraClient);

			// const peraWallet = markRaw(new PeraWalletConnect({
			// 	...(clientOptions ? clientOptions : { shouldShowSignTxnToast: false }),
			// }));
			// console.log('peraWallet', peraWallet);


			// console.log('importing pera');
			// const peraLib = (await import("@perawallet/connect"));
			// console.log('peraLib', peraLib);
			// // const peraLibDefault = peraLib.default;
			// // console.log('peraLibDefault', peraLibDefault);


			// const PeraWalletConnect = clientStatic || peraLib.PeraWalletConnect || peraLib.default.PeraWalletConnect;
			// console.log('PeraWalletConnect', PeraWalletConnect);

			// const algosdk = algosdkStatic || (await Algod.init(algodOptions)).algosdk;
			// const algodClient = await getAlgodClient(algosdk, algodOptions);

			return new PeraClient({
				sdk: clientSdk,
				// client: peraWallet,
				// algosdk,
				// algodClient,
				// network,
			});
		} catch (e) {
			// throw new Error(`Error initializing... ${e}`);
			console.error(`[${METADATA.id}] Error initializing...`, e);
			return null;
		}
	}

	async connect(onDisconnect: () => void): Promise<Wallet> {
		const accounts = await this.sdk.connect();

		this.sdk.connector?.on("disconnect", onDisconnect);

		if (accounts.length === 0) {
			throw new Error(`No accounts found for ${METADATA.id}`);
		}

		const mappedAccounts = accounts.map((address: string, index: number) => ({
			name: `Pera Wallet ${index + 1}`,
			address,
			providerId: METADATA.id,
		}));

		// save to state
		addConnectedAccounts(mappedAccounts);
		setAsActiveAccount(mappedAccounts[0]);

		return {
			...METADATA,
			accounts: mappedAccounts,
		};
	}

	async reconnect(onDisconnect: () => void) {
		const accounts = await this.sdk.reconnectSession().catch(console.info);
		this.sdk.connector?.on("disconnect", onDisconnect);

		if (!accounts) {
			return null;
		}

		return {
			...METADATA,
			accounts: accounts.map((address: string, index: number) => ({
				name: `Pera Wallet ${index + 1}`,
				address,
				providerId: METADATA.id,
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

		const algosdk = await getAlgosdk();
		console.log('getting algosdk... TODO optimize this!');

		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return algosdk.decodeObj(txn);
		}) as Array<DecodedTransaction | DecodedSignedTransaction>;

		// Marshal the transactions,
		// and add the signers property if they shouldn't be signed.
		const txnsToSign = decodedTxns.reduce<PeraTransaction[]>((acc, txn, i) => {
			if (
				!("txn" in txn) &&
				connectedAccounts.includes(algosdk.encodeAddress(txn["snd"]))
			) {
				acc.push({
					txn: algosdk.decodeUnsignedTransaction(transactions[i]),
				});
			} else {
				acc.push({
					txn: algosdk.decodeSignedTransaction(transactions[i]).txn,
					signers: [],
				});
			}

			return acc;
		}, []);

		// Sign them with the client.
		const result = await this.sdk.signTransaction([txnsToSign]);

		// Join the newly signed transactions with the original group of transactions.
		const signedTxns = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			if (!("txn" in txn)) {
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

export default PeraClient;