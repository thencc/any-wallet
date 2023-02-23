import type _algosdk from "algosdk";
import type { Network } from "../../types";

export type WindowExtended = { AlgoSigner: AlgoSignerSdk } & Window &
	typeof globalThis;

export type AlgoSignerSdk = {
	connect: () => Promise<Record<string, never>>;
	accounts: (ledger: {
		ledger: SupportedLedgers;
	}) => Promise<{ address: string }[]>;
	signTxn: (transactions: AlgoSignerTransaction[]) => Promise<
		{
			txID: string;
			blob: string;
		}[]
	>;
	encoding: {
		msgpackToBase64(transaction: Uint8Array): string;
		byteArrayToString(transaction: Uint8Array): string;
	};
};

export type AlgoSignerTransaction = {
	txn: string;
	// array of addresses to sign with (defaults to the sender),
	// setting this to an empty array tells AlgoSigner
	// that this transaction is not meant to be signed
	signers?: [];
	multisig?: string; // address of a multisig wallet to sign with
};

export type SupportedLedgers = "MainNet" | "TestNet" | "BetaNet" | string;

export type AlgoSignerClientConstructor = {
	sdk: AlgoSignerSdk;
	network: SupportedLedgers;
};

export type SdkConfig = {
	network?: Network;
};
export type InitParams = {
	config?: SdkConfig;
	sdk?: AlgoSignerSdk;
};
