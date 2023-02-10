import type { createClient } from "@thencc/inkey-client-js";
import type _algosdk from "algosdk";
import type { AlgodClientOptions, Network } from "../../types";

export type InkeyClientType = Awaited<ReturnType<typeof createClient>>;
export type InkeyClientStatic = typeof createClient;

export type InkeyWalletClientConstructor = {
	// client: InkeyClientType;
	clientSdk: InkeyClientType;
	algosdk: typeof _algosdk;
	algodClient: _algosdk.Algodv2;
	network: Network;
};

export type InkeyConfig = {
	src?: string; // url
	align?: 'center' | 'left' | 'right';
};
export type ClientOptions = InkeyConfig;

export type InitParams = {
	clientOptions?: ClientOptions;
	algodOptions?: AlgodClientOptions;
	// clientStatic?: InkeyClientType;
	clientSdkStatic?: InkeyClientStatic;
	algosdkStatic?: typeof _algosdk;
	network?: Network;
};

