
// import * as pkg from '../../package.json';
// export const w3hOptionalDeps = Object.keys(pkg.optionalDependencies);

import { PROVIDER_ID } from "../types";

// maps client id to npm pkg
export const clientPkgs = {
	[PROVIDER_ID.PERA]: '@perawallet/connect',
	[PROVIDER_ID.MYALGO]: '@randlabs/myalgo-connect',
	[PROVIDER_ID.INKEY]: '@thencc/inkey-client-js',
}

// export const disableClients = (toDisable: PROVIDER_ID[]) => {
// 	for (let id of toDisable) {
// 		delete clientPkgs[id];
// 	}
// 	return Object.values(clientPkgs);
// }

export const disableClients = (idsToDisable: PROVIDER_ID[]) => {
	console.log('disableClients', idsToDisable);

	let pkgsToDisable: string[] = [];
	for (let id of idsToDisable) {
		pkgsToDisable.push(clientPkgs[id]);
	}

	console.log('pkgsToDisable', pkgsToDisable);
	return pkgsToDisable;
}
