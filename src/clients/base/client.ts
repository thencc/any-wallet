import type {
	Wallet, // TODO type this better
} from '../../types';

import type { ClientMetadata, ClientConstructorParams, ClientInitParams } from './types';

export abstract class BaseClient {
	// statics
	static readonly metadata: ClientMetadata;
	// abstract readonly metadata: ClientMetadata; // what we really want is a static + abstract class field
	static init: (cIP?: ClientInitParams) => Promise<BaseClient | null>;
	constructor(params?: ClientConstructorParams) {}

	// 'abstracts' means things this class has to definitely implement
	abstract connect(x: any): Promise<Wallet>;
	abstract disconnect(): Promise<void>;
	abstract reconnect(onDisconnect: () => void): Promise<Wallet | null>;
	abstract signTransactions(
		connectedAccounts: string[],
		transactions: Array<Uint8Array>
	): Promise<Uint8Array[]>;
	// abstract signMessage(accts: any, msg: string);
}