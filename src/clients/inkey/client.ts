/**
 * Helpful resources:
 * https://github.com/thencc/inkey-client-js
 */
import { BaseClient } from "../base";
import type _algosdk from "algosdk";
import Algod, { getAlgodClient, getAlgosdk } from "../../algod";
// import { DEFAULT_NETWORK, CLIENT_ID } from "../../constants";
import {
	TransactionsArray,
	DecodedTransaction,
	DecodedSignedTransaction,
	// Network,
	Wallet,
} from "../../types";
import { InitParams, InkeySdk, SdkConfig, InkeySdkCreator, InkeyWalletClientConstructor } from "./types";
import { ICON, METADATA } from "./constants";

import { addConnectedAccounts, setAsActiveAccount } from "../../utils/index";

// TODO switch all algosdk use to this + other nacl lib (<400kb)
import msgpack from '@randlabs/msgpack-bigint';

// helpers
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
	sdk: InkeySdk; // # means private field/method on a class
	// network: Network;

	// static metadata = METADATA;
	static readonly metadata = METADATA;
	// metadata = METADATA;
	// readonly metadata = METADATA;

	constructor({
		sdk: clientSdk,
		// algosdk,
		// algodClient,
		// network,
	}: InkeyWalletClientConstructor) {
		// super(algosdk, algodClient);
		super();
		// this.client = client; // TODO rename this to .api / .sdk
		this.sdk = clientSdk;
		// this.network = network;
	}

	// static async init(initParams?: InitParams) {
	static async init(initParams?: InitParams) {
		try {
			console.log('[inkey] init started');

			// TODO fix this
			// make this inkey client be able to init twice (other clients work ok)

			// a client sdk can be passed in pre-initialized. if so, use that
			let clientSdk: InkeySdk;
			if (initParams && initParams.sdk) {
				clientSdk = initParams.sdk; // already init-ed sdk
			} else {

				let clientOptions: SdkConfig;
				const defaultInkeyConfig: SdkConfig = {
					src: 'https://inkey-staging.web.app', //
					align: 'center',
				};
				clientOptions = initParams?.config || defaultInkeyConfig;

				// let clientGen = clientSdkStatic;
				// if (clientSdkStatic == undefined) {
				console.log('now load up the sdk');

				let inkeyLib = await import("@thencc/inkey-client-js");
				// inkeyLib = inkeyLib.default.createClient; // not all the clients need this shim...
				let createClientSdk = inkeyLib.createClient;
				// }
				console.log('createClientSdk', createClientSdk);
				clientSdk = await createClientSdk(clientOptions);
			}



			// const algosdk = algosdkStatic || (await Algod.init(algodOptions)).algosdk;
			// console.log('algosdk', algosdk);

			// const algodClient = await getAlgodClient(algosdk, algodOptions);
			// console.log('algodClient', algodClient);

			return new InkeyClient({
				sdk: clientSdk,
				// algosdk: algosdk,
				// algodClient: algodClient,
				// network
			});
		} catch (e) {
			console.warn(`[${METADATA.id}] Error initializing...`, e);
			return null;
		}
	}

	async connect() {
		console.log('doConnect');
		const inkeyAccounts = await this.sdk.connect();
		// console.log('inkeyAccounts', inkeyAccounts);

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
			...account,
			providerId: METADATA.id,
		}));

		// save accts to state (+ localstorage automatically)
		addConnectedAccounts(mappedAccounts);
		setAsActiveAccount(mappedAccounts[0]);

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
		try {
			await this.sdk.disconnect();
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
		// TODO get this logic out of the algosdk dependencies lib. import just that for fraction of size.
		const decodedTxns = transactions.map((txn) => {
			// return this.algosdk.decodeObj(txn);
			return msgpack.decode(txn);
		}) as Array<DecodedTransaction | DecodedSignedTransaction>;
		console.log('decodedTxns', decodedTxns);

		const algosdk = await getAlgosdk();
		console.log('getting algosdk... TODO optimize this!');


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
				// connectedAccounts.includes(this.algosdk.encodeAddress(txn["snd"]))
				connectedAccounts.includes(algosdk.encodeAddress(txn["snd"]))
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

		const result = await this.sdk.signTxns(txnsAsStrB64);
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

export default InkeyClient;