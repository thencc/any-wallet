import { PROVIDER_ID } from "../types";

// maps client id to npm pkg
export const clientPkgs = {
	[PROVIDER_ID.PERA]: '@perawallet/connect',
	[PROVIDER_ID.MYALGO]: '@randlabs/myalgo-connect',
	[PROVIDER_ID.INKEY]: '@thencc/inkey-client-js',
}

export const excludeClients = (idsToDisable: PROVIDER_ID[]) => {
	// console.log('excludeClients', idsToDisable);
	let pkgsToDisable: string[] = [];
	for (let id of idsToDisable) {
		pkgsToDisable.push(clientPkgs[id]);
	}
	return pkgsToDisable;
}
