import type {
	Wallet, // TODO remove this... / type it better
} from '../../types';

import type { ClientMetadata, ClientConstructorParams, ClientInitParams } from './types';

export abstract class BaseClient {
	// statics
	static readonly metadata: ClientMetadata;
	static init: (cIP?: ClientInitParams) => Promise<BaseClient | null>;
	constructor(params?: ClientConstructorParams) {
		console.log('params', params);
	}

	// 'abstracts' means things this class has to definitely implement
	abstract connect(onDisconnect: () => void): Promise<Wallet>;
	abstract disconnect(): Promise<void>;
	abstract reconnect(onDisconnect: () => void): Promise<Wallet | null>;
	abstract signTransactions(
		connectedAccounts: string[],
		transactions: Array<Uint8Array>
	): Promise<Uint8Array[]>;

	// globals. accessible to all clients. helpful for setters
	setAsActiveAccount() {
		console.log('setAsActiveAccount - TODO');
	}

}

export default BaseClient;