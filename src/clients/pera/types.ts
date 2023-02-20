import type _algosdk from "algosdk";
import type { PeraWalletConnect } from "@perawallet/connect";
import type { Transaction } from "algosdk";
import { CLIENT_ID } from "src/constants";
// import type { AlgodSdkConfig, Network } from "../../types";

export type PeraSdk = PeraWalletConnect;
export type PeraSdkCreator = typeof PeraWalletConnect; // for some clients this is a function, for others it is a class

// name to PeraSdkConfig ?
export type SdkConfig = {
	bridge?: string;
	deep_link?: string;
	app_meta?: {
		logo: string;
		name: string;
		main_color: string;
	};
	shouldShowSignTxnToast?: boolean;
};

export interface PeraTransaction {
	txn: Transaction;
	/**
	 * Optional list of addresses that must sign the transactions.
	 * Wallet skips to sign this txn if signers is empty array.
	 * If undefined, wallet tries to sign it.
	 */
	signers?: string[];
}

export type PeraWalletClientConstructor = {
	// sdk: PeraWalletConnect;
	sdk: PeraSdk;

	// client: PeraWalletConnect;
	// algosdk: typeof _algosdk;
	// algodClient: _algosdk.Algodv2;
	// network: Network;
};

// export type InitParams = {
//   clientOptions?: SdkConfig;
//   algodOptions?: AlgodSdkConfig;
//   clientStatic?: typeof PeraWalletConnect;
//   algosdkStatic?: typeof _algosdk;
//   network?: Network;
// };

// either or
// export type InitParams =
// 	| { config: SdkConfig; sdk?: never }
// 	| { config?: never; sdk: PeraSdk }

export type InitParams = {
	// id: string; // unique
	// id: CLIENT_ID; // is pera, but has to be this for simplicity

	config?: SdkConfig;
	sdk?: PeraSdk;
};