import { CLIENT_ID } from "../constants";
import type BaseWallet from "../clients/base";
import { CLIENT_MAP_TYPES } from "src/utils";
import { Ref } from "@vue/reactivity";

export interface Account {
	providerId: CLIENT_ID;
	name: string;
	address: string;
}

export type Provider = {
	id: CLIENT_ID;
	name: string;
	icon: string;
	isActive: boolean;
	isConnected: boolean;
	isWalletConnect: boolean;
	connect: () => Promise<void>;
	disconnect: () => Promise<void>;
	reconnect: () => Promise<void>;
	setActive: () => Promise<void>;
};

export type Asset = {
	amount: number;
	"asset-id": number;
	creator: string;
	"is-frozen": boolean;
	"unit-name": string;
	name: string;
};

// We can add more properties as needed...
// See https://algorand.github.io/js-algorand-sdk/classes/modelsv2.Account.html
// but keep in mind the actual properties are kebab case not camel case
export type AccountInfo = {
	address: string;
	amount: number;
	assets: Asset[];
	"min-balance": number;
};

export type WalletProvider = {
	id: CLIENT_ID;
	name: string;
	icon: string;
	// isWalletConnect: boolean; // should be a field of WalletConnectClient, not in the metadata
};

type ExtendValues<Type> = {
	[Property in keyof Type]: Type[Property] | null;
};

// This type extends the values of `WalletProvider` with `null` values
// and adds the `accounts` property.
export type Wallet = ExtendValues<WalletProvider> & {
	accounts: Account[];
};

export type WalletClient = BaseWallet;

export { CLIENT_ID };

// import type { CLIENT_MAP_TYPES } from "src/utils";
// type ClientInst<T> = CLIENT_MAP_TYPES[T];

export type TheWalletType = {
	// vars
	id: CLIENT_ID;
	client: null | any;
	inited: boolean;
	initing: boolean;
	signing: boolean;

	// methods
	isReady: () => Promise<true>;
	connect: () => Promise<void>;
	disconnect: () => Promise<void>;
	recconnect: () => Promise<void>;
	setAsActiveWallet: () => void;
	removeAccounts: () => void;

	// computeds
	accounts: Readonly<Account[]>;
	isActive: Readonly<boolean>;
	isConnected: Readonly<boolean>;
}

export type WalletMap = Record<CLIENT_ID, TheWalletType>;
