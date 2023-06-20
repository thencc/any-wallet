// import { WALLET_ID } from 'src/wallets/constants';
import { WALL_V } from '../wallets/const2';

export interface Account {
	walletId: WALL_V;
	name: string;
	address: string;
	chain: string;
	active: boolean;
	// timeAdded: number; // datetime as number
	// timeLastUsed: number;
}

export type WalletProvider = {
	id: WALL_V;
	name: string;
	icon: string;
	chain: string;
};

type ExtendValues<Type> = {
	[Property in keyof Type]: Type[Property] | null;
};

// TODO rename this type as its very misleading
// This type extends the values of `WalletProvider` with `null` values and adds the `accounts` property.
export type WalletAccounts = ExtendValues<WalletProvider> & {
	accounts: Account[];
};
