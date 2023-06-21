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

export type WalletProvider = {
	id: W_ID;
	name: string;
	icon: string;
	chain: string;
};

type ExtendValues<Type> = {
	[Property in keyof Type]: Type[Property] | null;
};

// TODO rename this type as its very misleading
// This type extends the values of `WalletProvider` with `null` values and adds the `accounts` property.
// export type WalletAccounts = ExtendValues<WalletProvider> & {
// 	accounts: Account[];
// };
