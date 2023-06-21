import type { W_ID } from '../wallets/consts';

export interface Account {
	walletId: W_ID;
	name: string;
	address: string;
	chain: string;
	active: boolean;
	// timeAdded: number; // datetime as number
	// timeLastUsed: number;
}
