import type { createClient } from "@thencc/inkey-client-js";
import { CLIENT_ID } from "src/constants";
// import type _algosdk from "algosdk";
// import type { AlgodClientOptions, Network } from "../../types";

export type InkeySdk = Awaited<ReturnType<typeof createClient>>;
export type InkeySdkCreator = typeof createClient; // for some clients this is a function, for others it is a class

export type InkeyWalletClientConstructor = {
	sdk: InkeySdk; // clientSdk

	// client: InkeySdk;
	// clientSdk: InkeySdk;
	// algosdk: typeof _algosdk;
	// algodClient: _algosdk.Algodv2;
	// network: Network;
};

export type SdkConfig = {
	src?: string; // url
	align?: 'center' | 'left' | 'right';
};
export type ClientConfig = SdkConfig;
// export type ClientConfig = SdkConfig & {
// 	network?: Network
// };




// either or
// export type InitParams =
// 	| { config: ClientConfig; sdk?: never }
// 	| { config?: never; sdk: InkeySdk }


export type InitParams = {
	// id: string; // unique per (even if initing multiple instances of same client)
	// id: CLIENT_ID.INKEY;
	// id: CLIENT_ID;
	// cId?: CLIENT_ID.INKEY;

	config?: ClientConfig;
	sdk?: InkeySdk;
};