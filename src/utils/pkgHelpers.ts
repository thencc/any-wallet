import { WALLET_ID } from '../types';

// clients
import { PeraClient } from '../clients/pera/client';
import { InkeyClient } from '../clients/inkey/client';
import { MyAlgoClient } from '../clients/myalgo/client';
import { AlgoSignerClient } from 'src/clients/algosigner/client';

// perhaps there should be the below const map and a client_type_map for ts things
export const CLIENT_MAP = {
	[WALLET_ID.PERA]: {
		id: WALLET_ID.PERA, // TODO remove? just use metadata.id ...?
		pkg: '@perawallet/connect',
		client: PeraClient,
		meta: PeraClient.metadata, // TODO remove? this too
	},
	// TODO consider moving pkg name to each client's metadata + making constants off of those
	[WALLET_ID.INKEY]: {
		id: WALLET_ID.INKEY,
		pkg: '@thencc/inkey-client-js',
		client: InkeyClient,
		meta: InkeyClient.metadata,
	},
	[WALLET_ID.MYALGO]: {
		id: WALLET_ID.MYALGO,
		pkg: '@randlabs/myalgo-connect',
		client: MyAlgoClient,
		meta: MyAlgoClient.metadata,
	},
	[WALLET_ID.ALGOSIGNER]: {
		id: WALLET_ID.ALGOSIGNER,
		pkg: '', // DOESNT EXIST, its a chrome ext
		client: AlgoSignerClient,
		meta: AlgoSignerClient.metadata, // use constant var?
	},
} as const; // "const" is helpful for object security + typing

export type CLIENT_MAP_TYPES = {
	[WALLET_ID.PERA]: {
		id: WALLET_ID.PERA, // TODO remove? just use metadata.id ...?
		pkg: '@perawallet/connect',
		client: PeraClient,
		meta: typeof PeraClient.metadata,
	},
	// TODO consider moving pkg name to each client's metadata + making constants off of those
	[WALLET_ID.INKEY]: {
		id: WALLET_ID.INKEY,
		pkg: '@thencc/inkey-client-js',
		client: InkeyClient,
		meta: typeof InkeyClient.metadata,
	},
	[WALLET_ID.MYALGO]: {
		id: WALLET_ID.MYALGO,
		pkg: '@randlabs/myalgo-connect',
		client: MyAlgoClient,
		meta: typeof MyAlgoClient.metadata,
	},
	[WALLET_ID.ALGOSIGNER]: {
		id: WALLET_ID.ALGOSIGNER,
		pkg: '', // DOESNT EXIST, its a chrome ext
		client: AlgoSignerClient,
		meta: typeof AlgoSignerClient.metadata, // use constant var?
	},
};

export const CLIENT_IDS = Object.values(CLIENT_MAP).map(c => c.client.metadata.id); // as keyof CLIENT_MAP;
export const CLIENT_PKGS = Object.values(CLIENT_MAP).map(c => c.pkg).filter(p => p !== '');

export const excludeClients = (idsToDisable: typeof CLIENT_IDS): typeof CLIENT_PKGS => {
	let pkgsToDisable: typeof CLIENT_PKGS = [];
	for (let id of idsToDisable) {
		pkgsToDisable.push(CLIENT_MAP[id]['pkg']);
	}
	return pkgsToDisable;
}
