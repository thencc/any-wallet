import { createWallet, WalletInitParamsObj, WalletsObj } from ".";
import { ClientType } from "src/clientsNEW";

export enum WALLET_ID {
	// KMD = "kmd",
	PERA = "pera",
	MYALGO = "myalgo",
	INKEY = "inkey",
	ALGOSIGNER = "algosigner",
	// DEFLY = "defly",
	// EXODUS = "exodus",
	// WALLETCONNECT = "walletconnect",
	// LOCAL = "local" // TODO
}

export const DEFAULT_WALLETS_TO_ENABLE: WalletInitParamsObj = {
	[WALLET_ID.PERA]: true,
	[WALLET_ID.INKEY]: true,
	[WALLET_ID.MYALGO]: true,
	[WALLET_ID.ALGOSIGNER]: true,
};

export const ALL_WALLETS: WalletsObj = {
	[WALLET_ID.PERA]: createWallet<ClientType<WALLET_ID.PERA>>(WALLET_ID.PERA),
	[WALLET_ID.INKEY]: createWallet<ClientType<WALLET_ID.INKEY>>(WALLET_ID.INKEY),
	[WALLET_ID.MYALGO]: createWallet<ClientType<WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
	[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
	// test: '123'; // breaks, as it should
};
