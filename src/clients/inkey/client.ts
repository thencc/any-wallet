/**
 * Helpful resources:
 * https://github.com/thencc/inkey-client-js
 */
import BaseWallet from "../base";
import type _algosdk from "algosdk";
import Algod, { getAlgodClient } from "../../algod";
import { DEFAULT_NETWORK, PROVIDER_ID } from "../../constants";
import {
	TransactionsArray,
	DecodedTransaction,
	DecodedSignedTransaction,
	Network,
	Wallet,
} from "../../types";
import { InitParams, InkeyClientType, InkeyWalletClientConstructor } from "./types";
import { ICON } from "./constants";

import { nccState, addConnectedAccounts, setAsActiveAccount } from "../../utils/index";

// helpers
export const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
	var binary = '';
	var bytes = new Uint8Array(buffer);
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
};

class InkeyWalletClient extends BaseWallet {
	// client can be public because its exposed in clientside code anyway w the await obj value...
	// possible MORE insecure that way. but honestly, this client api field shouldnt hold anything too secret anyway
	client: InkeyClientType; // # means private field/method on a class
	// client: InkeyClientType;
	network: Network;

	constructor({
		client,
		algosdk,
		algodClient,
		network,
	}: InkeyWalletClientConstructor) {
		super(algosdk, algodClient);
		this.client = client;
		// this.client = client;
		this.network = network;
	}

	static metadata = {
		id: PROVIDER_ID.INKEY,
		chain: "algorand",
		name: "Inkey Microwallet",
		icon: ICON,
		isWalletConnect: false, // TODO remove
	};

	static async init({
		clientOptions,
		algodOptions,
		clientStatic,
		algosdkStatic,
		network = DEFAULT_NETWORK,
	}: InitParams) {
		try {

			// TODO fix this
			// make this able to init twice (other clients work ok)

			const inkeyClient = clientStatic || await (await import("@thencc/inkey-client-js")).createClient({
				// src: clientOptions?.iFrameUrl
				src: 'http://127.0.0.1:5200'
			});

			const algosdk = algosdkStatic || (await Algod.init(algodOptions)).algosdk;
			const algodClient = await getAlgodClient(algosdk, algodOptions);

			return new InkeyWalletClient({
				client: inkeyClient,
				algosdk: algosdk,
				algodClient: algodClient,
				network
			});

			// let inc = new InkeyWalletClient({
			//   client: inkeyClient,
			//   algosdk: algosdk,
			//   algodClient: algodClient,
			//   network
			// });

			// // return inkeyClient as any;
			// return inc.client as any;
		} catch (e) {
			throw new Error(`Error initializing... ${e}`);
		}
	}

	async connect() {
		console.log('doConnect');

		const inkeyAccounts = await this.client.connect();
		console.log('inkeyAccounts', inkeyAccounts);

		const accounts = inkeyAccounts.map(a => {
			return {
				address: a.address,
				name: a.username
			}
		});

		if (accounts.length === 0) {
			throw new Error(
				`No accounts found for ${InkeyWalletClient.metadata.id}`
			);
		}

		const mappedAccounts = accounts.map((account) => ({
			...account,
			providerId: InkeyWalletClient.metadata.id,
		}));

		// save accts to state (+ localstorage automatically)
		addConnectedAccounts(mappedAccounts);
		setAsActiveAccount(mappedAccounts[0]);

		return {
			...InkeyWalletClient.metadata,
			accounts: mappedAccounts,
		};
	}

	async reconnect(): Promise<Wallet | null> {
		console.log('inkey reconnect')
		return null;

		// const accounts = this.client.accounts;

		// if (!accounts) {
		//   return null;
		// }

		// return {
		//   ...InkeyWalletClient.metadata,
		//   accounts: accounts.map((address: string, index: number) => ({
		//     name: `Inkey Connect ${index + 1}`,
		//     address,
		//     providerId: InkeyWalletClient.metadata.id,
		//   })),
		// };
	}

	async disconnect() {
		try {
			await this.client.disconnect();
		} catch (e) {
			console.warn((e as Error).message);
		}

		return;
	}

	async signTransactions(
		connectedAccounts: string[],
		transactions: Uint8Array[]
	) {
		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return this.algosdk.decodeObj(txn);
		}) as Array<DecodedTransaction | DecodedSignedTransaction>;
		console.log('decodedTxns', decodedTxns);

		// Get the unsigned transactions.
		const txnsToSign = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			// If the transaction isn't already signed and is to be sent from a connected account,
			// add it to the arrays of transactions to be signed.

			console.log('readout txnsToSign:', {
				acc,
				txn,
				i
			});

			if (
				!("txn" in txn) &&
				connectedAccounts.includes(this.algosdk.encodeAddress(txn["snd"]))
			) {
				// added inkeyClient method to sign Uint8Array,
				// option 2: convert Uint8Array txn to base64 str txn for inkey

				acc.push(transactions[i]);
			}

			return acc;
		}, []);

		// Sign them with the client.

		// FYI BOTH signing approaches work... (up to dev whether to convert from buff->b64 before or let inkey do it)
		// const result = await this.client.signTxnsUint8Array(txnsToSign);
		// console.log('result', result);

		const txnsAsStrB64 = txnsToSign.map((tBuff) => arrayBufferToBase64(tBuff));
		// console.log('txnsAsStrB64', txnsAsStrB64);

		const result = await this.client.signTxns(txnsAsStrB64);
		console.log('result', result);

		if (!result.success) {
			throw new Error('did not sign txns');
		}

		// put in extra array since incoming is a single txn...
		const returnedTxns = [result.signedTxns] as Uint8Array[];
		console.log('returnedTxns', returnedTxns);

		// Join the newly signed transactions with the original group of transactions.
		const signedTxns = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			if (!("txn" in txn)) {
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

export default InkeyWalletClient;
