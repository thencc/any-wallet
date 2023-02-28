import type { ClientType } from 'src/clients';

import type { Network } from 'src/types/node';
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
	// WALLETCONNECT = 'walletconnect', // willnotfix
	MNEMONIC = 'mnemonic',
};

export const DEFAULT_WALLETS_TO_ENABLE: WalletInitParamsObj = {
	[WALLET_ID.PERA]: true,
	[WALLET_ID.INKEY]: true,
	[WALLET_ID.MYALGO]: true,
	[WALLET_ID.ALGOSIGNER]: true,
	[WALLET_ID.EXODUS]: true,
	[WALLET_ID.DEFLY]: true,
	// [WALLET_ID.MNEMONIC]: false,
};

export const ALL_WALLETS: WalletsObj = {
	[WALLET_ID.PERA]: createWallet<ClientType<WALLET_ID.PERA>>(WALLET_ID.PERA),
	[WALLET_ID.INKEY]: createWallet<ClientType<WALLET_ID.INKEY>>(WALLET_ID.INKEY),
	[WALLET_ID.MYALGO]: createWallet<ClientType<WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
	[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
	[WALLET_ID.EXODUS]: createWallet<ClientType<WALLET_ID.EXODUS>>(WALLET_ID.EXODUS),
	[WALLET_ID.DEFLY]: createWallet<ClientType<WALLET_ID.DEFLY>>(WALLET_ID.DEFLY),
	[WALLET_ID.MNEMONIC]: createWallet<ClientType<WALLET_ID.MNEMONIC>>(WALLET_ID.MNEMONIC),
	// test: '123'; // breaks, as it should
} as const; // helps w security

// algod configs (not used)
export const DEFAULT_NETWORK: Network = 'testnet'; // 'mainnet';
export const DEFAULT_NODE_TOKEN = '';
export const DEFAULT_NODE_PORT = '';
export const DEFAULT_NODE_BASEURL = 'https://testnet-api.algonode.cloud';
// https://testnet-api.algonode.cloud
// https://mainnet-api.algonode.cloud
