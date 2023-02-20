/**
 * Helpful resources:
 * https://github.com/randlabs/myalgo-connect
 */
import type MyAlgoConnect from "@randlabs/myalgo-connect";
// import type _algosdk from "algosdk";
import { AlgodClientOptions, CLIENT_ID, Network } from "../../types";

export type MyAlgoSdk = MyAlgoConnect;
export type MyAlgoSdkCreator = typeof MyAlgoConnect; // for some clients this is a function, for others it is a class

export type MyAlgoClientConstructor = {
	sdk: MyAlgoSdk;
	// client: MyAlgoConnect;
	// algosdk: typeof _algosdk;
	// algodClient: _algosdk.Algodv2;
	// network: Network;
};

export type SdkConfig = {
	timeout?: number;
	bridgeUrl?: string;
	disableLedgerNano?: boolean;
};

export type InitParams = {
	// id: string; // unique
	// id: CLIENT_ID;
	config?: SdkConfig;
	sdk?: MyAlgoSdk;
};
