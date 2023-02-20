import type {
	Wallet, // TODO remove this... / type it better
} from "../../types";

import type { ClientMetadata, ClientConstructorParams, ClientInitParams } from "./types";

export abstract class BaseClient {
	// abstract, meaning things this class will definitely have...

	// ------------
	// abstract metadata: ClientMetadata;
	// static metadata: ClientMetadata;
	static readonly metadata: ClientMetadata;
	// abstract readonly metadata: ClientMetadata; // does force following class to implement this but cant access via static

	// TODO get rid of this... + modularize algorand encoding section of sdk
	// algosdk = await getAlgosdk();

	// ------------
	// abstract init(x: any): Promise<any>;
	// static init(p?: any): Promise<BaseClient | null>
	// static init: (cIP?: ClientInitParams) => Promise<BaseClient | null>;
	static init: (cIP?: ClientInitParams) => Promise<BaseClient | null>;
	// abstract init: (p?: any) => Promise<BaseClient | null>;
	// static init(p?: any): Promise<BaseClient | null>;

	abstract connect(onDisconnect: () => void): Promise<Wallet>;
	abstract disconnect(): Promise<void>;
	abstract reconnect(onDisconnect: () => void): Promise<Wallet | null>;
	abstract signTransactions(
		connectedAccounts: string[],
		transactions: Array<Uint8Array>
	): Promise<Uint8Array[]>;

	// private constructor(params?: ClientConstructorParams) {
	constructor(params?: ClientConstructorParams) {
		console.log('params', params);
	}

	// ------------
	// TODO add globals / accessible to all clients. helpers. useful for setters
	setAsActiveAccount() {
		console.log('setAsActiveAccount - TODO');
		// use ncc state
	}

}

export default BaseClient;