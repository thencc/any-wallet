import type { Account } from "algosdk";

export type MnemonicSdk = Account;

export type SdkConfig = {
	mnemonic?: string; // for hardcoding 25 word mn passphrase
};

export type MnemonicClientConstructor = {
	sdk?: MnemonicSdk;
};

export type InitParams = {
	config?: SdkConfig;
	sdk?: MnemonicSdk;
};
