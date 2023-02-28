import type { Transaction } from 'algosdk';
import type { DeflyWalletConnect } from '@blockshake/defly-connect';

export type DeflySdk = Omit<DeflyWalletConnect, 'connector'> & { connector: any };
export type DeflySdkCreator = typeof DeflyWalletConnect;

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

export type DeflyTransaction = {
	txn: Transaction;
	/**
	 * Optional list of addresses that must sign the transactions.
	 * Wallet skips to sign this txn if signers is empty array.
	 * If undefined, wallet tries to sign it.
	 */
	signers?: string[];
};

export type DeflyWalletClientConstructor = {
	sdk: DeflySdk;
};

export type InitParams = {
	config?: SdkConfig;
	sdk?: DeflySdk;
};
