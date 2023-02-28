// import type { ClientType } from 'src/clientsNEW';
import type { ClientType } from 'src/clients';

import type { WalletInitParamsObj, WalletsObj } from './types';
import { createWallet } from './actions'; // needs to be AFTER the types import

export enum WALLET_ID {
	// KMD = 'kmd', // nope
	PERA = 'pera',
	MYALGO = 'myalgo',
	INKEY = 'inkey',
	ALGOSIGNER = 'algosigner',
	EXODUS = 'exodus',
	DEFLY = 'defly',
	// WALLETCONNECT = 'walletconnect',
	// MNEMONIC = 'mnemonic' // TODO -- copy from use-wallet repo
};

export const DEFAULT_WALLETS_TO_ENABLE: WalletInitParamsObj = {
	[WALLET_ID.PERA]: true,
	[WALLET_ID.INKEY]: true,
	[WALLET_ID.MYALGO]: true,
	[WALLET_ID.ALGOSIGNER]: true,
	[WALLET_ID.EXODUS]: true,
	[WALLET_ID.DEFLY]: true,
};

export const ALL_WALLETS: WalletsObj = {
	[WALLET_ID.PERA]: createWallet<ClientType<WALLET_ID.PERA>>(WALLET_ID.PERA),
	[WALLET_ID.INKEY]: createWallet<ClientType<WALLET_ID.INKEY>>(WALLET_ID.INKEY),
	[WALLET_ID.MYALGO]: createWallet<ClientType<WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
	[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
	[WALLET_ID.EXODUS]: createWallet<ClientType<WALLET_ID.EXODUS>>(WALLET_ID.EXODUS),
	[WALLET_ID.DEFLY]: createWallet<ClientType<WALLET_ID.DEFLY>>(WALLET_ID.DEFLY),
	// test: '123'; // breaks, as it should
} as const; // helps w security
