import { W_ID } from 'src/wallets';

export type ClientMetadata = {
	id: W_ID; // unique
	name: string; // readable
	icon: string; // b64 str (png/svg)
	chain: string; // 'algorand'
	pkg: string;
};

export type ClientInitParams = {
	config?: any; // sdk config for instance create
	sdk?: any; // pre-inited sdk
}

export type ClientConstructorParams = {
	someField?: string;
};

