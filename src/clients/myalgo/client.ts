/**
 * Helpful resources:
 * https://github.com/randlabs/myalgo-connect
 */
import { BaseClient } from "../base";
import type _MyAlgoConnect from "@randlabs/myalgo-connect";
import type _algosdk from "algosdk";
import Algod, { getAlgodClient, getAlgosdk } from "../../algod"; // TODO remove algosdk
import { CLIENT_ID } from "../../constants";
import {
	TransactionsArray,
	DecodedTransaction,
	DecodedSignedTransaction,
	Network,
} from "../../types";
import { MyAlgoClientConstructor, InitParams, MyAlgoSdk, SdkConfig } from "./types";
import { ICON, METADATA } from "./constants";

import { markRaw } from "@vue/reactivity";
import { addConnectedAccounts, setAsActiveAccount } from "../../utils/index";

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
		console.log(`[${METADATA.id}] init started`);

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


				// TODO programatically get this pkg name to from CLIENT_MAP ?
				let sdkLib = await import("@randlabs/myalgo-connect");
				let createClientSdk = sdkLib.default;

				console.log('createClientSdk', createClientSdk);
				clientSdk = new createClientSdk(sdkConfig);
			}

			clientSdk = markRaw(clientSdk); // vue-r fix

			return new MyAlgoClient({
				sdk: clientSdk
			});
		} catch (e) {
			// throw new Error(`Error initializing... ${e}`);
			console.error(`[${CLIENT_ID.MYALGO}] Error initializing...`, e);
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

		// TODO fix this:
		const algosdk = await getAlgosdk();
		console.log('getting algosdk... TODO optimize this!');

		// Decode the transactions to access their properties.
		const decodedTxns = transactions.map((txn) => {
			return algosdk.decodeObj(txn);
		}) as Array<DecodedTransaction | DecodedSignedTransaction>;

		// Get the unsigned transactions.
		const txnsToSign = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			// If the transaction isn't already signed and is to be sent from a connected account,
			// add it to the arrays of transactions to be signed.

			if (
				!("txn" in txn) &&
				connectedAccounts.includes(algosdk.encodeAddress(txn["snd"]))
			) {
				acc.push(transactions[i]);
			}

			return acc;
		}, []);

		// Sign them with the client.
		const result = await this.sdk.signTransaction(txnsToSign);

		// Join the newly signed transactions with the original group of transactions.
		const signedTxns = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
			if (!("txn" in txn)) {
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

export default MyAlgoClient;