// wallets
import { WALLET_ID } from './constants';
import type { createWallet } from './actions'; // AFTER the constants import

// clients
import type { ClientType } from 'src/clientsNEW';

// init params
import type { InitParams as PeraInitParams } from 'src/clients/pera/types';
import type { InitParams as InkeyInitParams } from 'src/clients/inkey/types';
import type { InitParams as MyAlgoInitParams } from 'src/clients/myalgo/types';
import type { InitParams as AlgoSignerInitParams } from 'src/clients/algosigner/types';
import type { InitParams as ExodusInitParams } from 'src/clients/exodus/types';
import type { InitParams as DeflyInitParams } from 'src/clients/defly/types';

export type WalletInitParamsObj = {
	[WALLET_ID.PERA]?: boolean | {
		id?: WALLET_ID.PERA;
		config?: PeraInitParams['config'];
		sdk?: PeraInitParams['sdk'];
	};
	[WALLET_ID.INKEY]?: boolean | {
		id?: WALLET_ID.INKEY;
		config?: InkeyInitParams['config'];
		sdk?: InkeyInitParams['sdk'];
	};
	[WALLET_ID.MYALGO]?: boolean | {
		id?: WALLET_ID.MYALGO;
		config?: MyAlgoInitParams['config'];
		sdk?: MyAlgoInitParams['sdk'];
	};
	[WALLET_ID.ALGOSIGNER]?: boolean | {
		id?: WALLET_ID.ALGOSIGNER;
		config?: AlgoSignerInitParams['config'];
		sdk?: AlgoSignerInitParams['sdk'];
	};
	[WALLET_ID.EXODUS]?: boolean | {
		id?: WALLET_ID.EXODUS;
		config?: ExodusInitParams['config'];
		sdk?: ExodusInitParams['sdk'];
	};
	[WALLET_ID.DEFLY]?: boolean | {
		id?: WALLET_ID.DEFLY;
		config?: DeflyInitParams['config'];
		sdk?: DeflyInitParams['sdk'];
	};
};

export type WalletType<T extends WALLET_ID = WALLET_ID> = ReturnType<typeof createWallet<ClientType<T>>>;

export type WalletsObj = {
	[WALLET_ID.PERA]?: WalletType<WALLET_ID.PERA>;
	[WALLET_ID.INKEY]?: WalletType<WALLET_ID.INKEY>;
	[WALLET_ID.MYALGO]?: WalletType<WALLET_ID.MYALGO>;
	[WALLET_ID.ALGOSIGNER]?: WalletType<WALLET_ID.ALGOSIGNER>;
	[WALLET_ID.EXODUS]?: WalletType<WALLET_ID.EXODUS>;
	[WALLET_ID.DEFLY]?: WalletType<WALLET_ID.DEFLY>;
};
