export const WALLET_ID = {
    PERA: 'pera',
	INKEY: 'inkey',
	MYALGO: 'myalgo',
	ALGOSIGNER: 'algosigner',
	EXODUS: 'exodus',
	DEFLY: 'defly',
	MNEMONIC: 'mnemonic',
} as const;

type ValueOf<T> = T[keyof T];
// export type WALL_K = keyof typeof WALLET_ID;
export type W_ID = ValueOf<typeof WALLET_ID>;
