import type { createClient } from "@thencc/inkey-client-js";
import type _algosdk from "algosdk";
import type { AlgodClientOptions, Network } from "../../types";

export type InkeyClientType = Awaited<ReturnType<typeof createClient>>;

export type InkeyWalletClientConstructor = {
	client: InkeyClientType;
	algosdk: typeof _algosdk;
	algodClient: _algosdk.Algodv2;
	network: Network;
};

export type ClientOptions = {
	iFrameUrl?: string;
};

export type InitParams = {
	clientOptions?: ClientOptions;
	algodOptions?: AlgodClientOptions;
	clientStatic?: InkeyClientType;
	algosdkStatic?: typeof _algosdk;
	network?: Network;
};
