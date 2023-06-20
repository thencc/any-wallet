

export const WALLET_ID = {
    PERA: 'pera',
	INKEY: 'inkey',
	MYALGO: 'myalgo',
	ALGOSIGNER: 'algosigner',
	EXODUS: 'exodus',
	DEFLY: 'defly',
	MNEMONIC: 'mnemonic',
} as const;

// export type LogLevelStrings = keyof typeof WALLET_ID;

type ValueOf<T> = T[keyof T];
export type WALL_K = keyof typeof WALLET_ID;
export type WALL_V = ValueOf<typeof WALLET_ID>;
// export type W_ID = WALLET_ID[keyof WALLET_ID];




// TODO delete these...
import type { Network } from "src/types/node";
// algod configs (not used)
export const DEFAULT_NETWORK: Network = 'testnet'; // 'mainnet';
export const DEFAULT_NODE_TOKEN = '';
export const DEFAULT_NODE_PORT = '';
export const DEFAULT_NODE_BASEURL = 'https://testnet-api.algonode.cloud';
// https://testnet-api.algonode.cloud
// https://mainnet-api.algonode.cloud
