import { WALLET_ID } from 'src/wallets/constants';

export interface Account {
	walletId: WALLET_ID;
	name: string;
	address: string;
	chain: string;
	active: boolean;
	// timeAdded: number; // datetime as number
	// timeLastUsed: number;
}

export type WalletProvider = {
	id: WALLET_ID;
	name: string;
	icon: string;
	chain: string;
};

type ExtendValues<Type> = {
	[Property in keyof Type]: Type[Property] | null;
};

// TODO rename this type as its very misleading
// This type extends the values of `WalletProvider` with `null` values and adds the `accounts` property.
export type Wallet = ExtendValues<WalletProvider> & {
	accounts: Account[];
};
