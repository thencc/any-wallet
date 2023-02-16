import type { CLIENT_ID } from "../../constants";

export type ClientMetadata = {
	id: CLIENT_ID; // unique
	name: string; // readable
	icon: string; // b64 str (png/svg)
	chain: string; // 'algorand'
};

export type ClientInitParams = {
	config?: any; // sdk config for instance create
	sdk?: any; // pre-inited sdk
}

export type ClientConstructorParams = {
	someField: string;
};

