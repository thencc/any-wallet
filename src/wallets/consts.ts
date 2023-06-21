// essentially an enum but more useful this way (allows for args as enum val or str)
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
