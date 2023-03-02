import { WALLET_ID } from 'src/wallets/constants';

import { PeraClient } from 'src/clients/pera/client';
import { InkeyClient } from 'src/clients/inkey/client';
import { MyAlgoClient } from 'src/clients/myalgo/client';
import { AlgoSignerClient } from 'src/clients/algosigner/client';
import { ExodusClient } from 'src/clients/exodus/client';
import { DeflyClient } from 'src/clients/defly/client';
import { MnemonicClient } from 'src/clients/mnemonic/client';

export const CLIENT_MAP = {
	[WALLET_ID.PERA]: {
		client: PeraClient,
		// metadata: // ? TODO consider this approach
	},
	[WALLET_ID.INKEY]: {
		client: InkeyClient,
	},
	[WALLET_ID.MYALGO]: {
		client: MyAlgoClient,
	},
	[WALLET_ID.ALGOSIGNER]: {
		client: AlgoSignerClient,
	},
	[WALLET_ID.EXODUS]: {
		client: ExodusClient,
	},
	[WALLET_ID.DEFLY]: {
		client: DeflyClient,
	},
	[WALLET_ID.MNEMONIC]: {
		client: MnemonicClient,
	},
} as const; // 'const' is helpful for object security + typing

export const CLIENT_IDS = Object.values(CLIENT_MAP).map(c => c.client.metadata.id) as WALLET_ID[];
export const CLIENT_PKGS = Object.values(CLIENT_MAP).map(c => c.client.metadata.pkg).filter(p => p !== '');

export const excludeClients = (idsToDisable: typeof CLIENT_IDS): typeof CLIENT_PKGS => {
	let pkgsToDisable: typeof CLIENT_PKGS = [];
	for (let id of idsToDisable) {
		pkgsToDisable.push(CLIENT_MAP[id].client.metadata.pkg);
	}
	return pkgsToDisable;
};

export type ClientType<T extends WALLET_ID> = InstanceType<typeof CLIENT_MAP[T]['client']>;
