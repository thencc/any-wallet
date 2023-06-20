import type { ClientType } from 'src/clients';
import type { Network } from 'src/types/node';
import type { WalletInitParamsObj, WalletsObj } from './types';
import { createWallet } from './actions'; // needs to be AFTER the types import

import { WALLET_ID } from './const2';

/*
export enum WALLET_ID {
	PERA = 'pera',
	INKEY = 'inkey',
	MYALGO = 'myalgo',
	ALGOSIGNER = 'algosigner',
	EXODUS = 'exodus',
	DEFLY = 'defly',
	MNEMONIC = 'mnemonic',
	// KMD = 'kmd', // nope
	// WALLETCONNECT = 'walletconnect', // willnotfix
};
// export const WALLET_ID = WALLET_ID;
*/


/*
export const WALLET_ID = {
    PERA: 'pera',
	INKEY: 'inkey',
	MYALGO: 'myalgo',
	ALGOSIGNER: 'algosigner',
	EXODUS: 'exodus',
	DEFLY: 'defly',
	MNEMONIC: 'mnemonic',
} as const;
export type WALLET_ID = WALLET_ID[keyof WALLET_ID];
*/

// TODO get rid of these soon...
// export type WalletsObj = {
// 	[WALLET_ID.PERA]?: WalletType<WALLET_ID.PERA>;
// 	[WALLET_ID.INKEY]?: WalletType<WALLET_ID.INKEY>;
// 	[WALLET_ID.MYALGO]?: WalletType<WALLET_ID.MYALGO>;
// 	[WALLET_ID.ALGOSIGNER]?: WalletType<WALLET_ID.ALGOSIGNER>;
// 	[WALLET_ID.EXODUS]?: WalletType<WALLET_ID.EXODUS>;
// 	[WALLET_ID.DEFLY]?: WalletType<WALLET_ID.DEFLY>;
// 	[WALLET_ID.MNEMONIC]?: WalletType<WALLET_ID.MNEMONIC>;
// };
// export const ALL_WALLETS: WalletsObj = {
	export const ALL_WALLETS = {
	[WALLET_ID.PERA]: createWallet<ClientType<typeof WALLET_ID.PERA>>(WALLET_ID.PERA),
	[WALLET_ID.INKEY]: createWallet<ClientType<typeof WALLET_ID.INKEY>>(WALLET_ID.INKEY),
	[WALLET_ID.MYALGO]: createWallet<ClientType<typeof WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
	[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<typeof WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
	[WALLET_ID.EXODUS]: createWallet<ClientType<typeof WALLET_ID.EXODUS>>(WALLET_ID.EXODUS),
	[WALLET_ID.DEFLY]: createWallet<ClientType<typeof WALLET_ID.DEFLY>>(WALLET_ID.DEFLY),
	[WALLET_ID.MNEMONIC]: createWallet<ClientType<typeof WALLET_ID.MNEMONIC>>(WALLET_ID.MNEMONIC),
} as const; // helps w security

// algod configs (not used)
export const DEFAULT_NETWORK: Network = 'testnet'; // 'mainnet';
export const DEFAULT_NODE_TOKEN = '';
export const DEFAULT_NODE_PORT = '';
export const DEFAULT_NODE_BASEURL = 'https://testnet-api.algonode.cloud';
// https://testnet-api.algonode.cloud
// https://mainnet-api.algonode.cloud
