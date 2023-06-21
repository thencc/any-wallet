import type { W_ID } from '../wallets/consts';

export interface Account {
	walletId: W_ID;
	name: string; // username (if supported by client)
	address: string;
	chain: string;
	active: boolean;
	dateConnected: number; // datetime as number
	dateLastActive?: number; // helps for sorting accts list
	// dateLastSignedTxn: number; // helpful to have this?
}
