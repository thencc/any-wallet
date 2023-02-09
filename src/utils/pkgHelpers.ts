import { PROVIDER_ID } from "../types";

// maps client id to npm pkg
export const CLIENT_PKG_MAP = {
	[PROVIDER_ID.PERA]: '@perawallet/connect',
	[PROVIDER_ID.MYALGO]: '@randlabs/myalgo-connect',
	[PROVIDER_ID.INKEY]: '@thencc/inkey-client-js',
};
export const CLIENT_IDS = Object.keys(CLIENT_PKG_MAP);
export const CLIENT_PKGS = Object.values(CLIENT_PKG_MAP);

export const excludeClients = (idsToDisable: PROVIDER_ID[]) => {
	// console.log('excludeClients', idsToDisable);
	let pkgsToDisable: string[] = [];
	for (let id of idsToDisable) {
		pkgsToDisable.push(CLIENT_PKG_MAP[id]);
	}
	return pkgsToDisable;
}
