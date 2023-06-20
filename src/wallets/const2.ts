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
