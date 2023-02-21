import { CLIENT_ID } from '../types';

// maps client id to npm pkg (freeze helps w ts typing)
// export const CLIENT_PKG_MAP = Object.freeze({
// 	[CLIENT_ID.PERA]: '@perawallet/connect',
// 	// [CLIENT_ID.MYALGO]: '@randlabs/myalgo-connect',
// 	[CLIENT_ID.INKEY]: '@thencc/inkey-client-js',
// });
// }) as Record<CLIENT_ID, string>;
// export const CLIENT_IDS = Object.keys(CLIENT_PKG_MAP) as CLIENT_ID[];
// export const CLIENT_PKGS = Object.values(CLIENT_PKG_MAP);

// clients
import { InkeyClient } from '../clients/inkey/client';
import { PeraClient } from '../clients/pera/client';
import { MyAlgoClient } from 'src/clients/myalgo/client';


// perhaps there should be the below const map and a client_type_map for ts things
export const CLIENT_MAP = {
	[CLIENT_ID.PERA]: {
		id: CLIENT_ID.PERA, // TODO remove? just use metadata.id ...?
		pkg: '@perawallet/connect',
		client: PeraClient,
		meta: PeraClient.metadata, // TODO remove? this too
	},
	// TODO consider moving pkg name to each client's metadata + making constants off of those
	[CLIENT_ID.INKEY]: {
		id: CLIENT_ID.INKEY,
		pkg: '@thencc/inkey-client-js',
		client: InkeyClient,
		meta: InkeyClient.metadata,
	},
	[CLIENT_ID.MYALGO]: {
		id: CLIENT_ID.MYALGO,
		pkg: '@randlabs/myalgo-connect',
		client: MyAlgoClient,
		meta: MyAlgoClient.metadata,
	},
} as const; // "const" is helpful for object security + typing


export type CLIENT_MAP_TYPES = {
	[CLIENT_ID.PERA]: {
		id: CLIENT_ID.PERA, // TODO remove? just use metadata.id ...?
		pkg: '@perawallet/connect',
		client: PeraClient,
		meta: typeof PeraClient.metadata,
	},
	// TODO consider moving pkg name to each client's metadata + making constants off of those
	[CLIENT_ID.INKEY]: {
		id: CLIENT_ID.INKEY,
		pkg: '@thencc/inkey-client-js',
		client: InkeyClient,
		meta: typeof InkeyClient.metadata,
	},
	[CLIENT_ID.MYALGO]: {
		id: CLIENT_ID.MYALGO,
		pkg: '@randlabs/myalgo-connect',
		client: MyAlgoClient,
		meta: typeof MyAlgoClient.metadata,
	},
};

// export const CLIENT_IDS = Object.values(CLIENT_MAP).map(c => c.id); // as keyof CLIENT_MAP;
// export const CLIENT_IDS = Object.values(CLIENT_MAP).map(c => c.client.metadata.id); // as keyof CLIENT_MAP;
export const CLIENT_IDS = Object.values(CLIENT_MAP).map(c => c.client.metadata.id); // as keyof CLIENT_MAP;
export const CLIENT_PKGS = Object.values(CLIENT_MAP).map(c => c.pkg);

export const excludeClients = (idsToDisable: typeof CLIENT_IDS): typeof CLIENT_PKGS => {
	let pkgsToDisable: typeof CLIENT_PKGS = [];
	for (let id of idsToDisable) {
		pkgsToDisable.push(CLIENT_MAP[id]['pkg']);
	}
	return pkgsToDisable;
}


// tests
type ValueOf<T> = T[keyof T];
type VF = ValueOf<typeof CLIENT_MAP>;
