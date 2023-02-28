import type _algosdk from "algosdk";
import type { Network } from "../../types";

export type MnemonicSdk = _algosdk.Account;

export type SdkConfig = {
	wallet: string;
	password: string;
	host: string;
	token: string;
	port: string;
};

// export interface InitWalletHandle {
// 	wallet_handle_token: string;
// 	message?: string;
// 	error?: boolean;
// }

export type MnemonicWalletClientConstructor = {
	// metadata: Metadata;
	// id: PROVIDER_ID;
	// algosdk: typeof _algosdk;
	// algodClient: _algosdk.Algodv2;
	// sdk: MnemonicSdk;
	// network: Network;
};

// export type InitParams = {
// 	clientOptions?: ClientOptions;
// 	algodOptions?: AlgodClientOptions;
// 	algosdkStatic?: typeof _algosdk;
// 	network?: Network;
// };

export type InitParams = {
	config?: SdkConfig;
	sdk?: MnemonicSdk;
};