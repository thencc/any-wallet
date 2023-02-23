import { PeraWalletConnect } from "@perawallet/connect";
import type { Transaction } from "algosdk";

export type PeraSdk = Omit<PeraWalletConnect, 'connector'> & { connector: any };
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
	sdk: PeraSdk;
};

export type InitParams = {
	config?: SdkConfig;
	sdk?: PeraSdk;
};