// wallets
import { createWallet, WALLET_ID } from '.';

// clients
import { ClientType } from 'src/clientsNEW';

// init params
import { InitParams as PeraInitParams } from 'src/clients/pera/types';
import { InitParams as InkeyInitParams } from 'src/clients/inkey/types';
import { InitParams as MyAlgoInitParams } from 'src/clients/myalgo/types';
import { InitParams as AlgoSignerInitParams } from 'src/clients/algosigner/types';


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
};

export type WalletType<T extends WALLET_ID = WALLET_ID> = ReturnType<typeof createWallet<ClientType<T>>>;

export type WalletsObj = {
	[WALLET_ID.PERA]?: WalletType<WALLET_ID.PERA>;
	[WALLET_ID.INKEY]?: WalletType<WALLET_ID.INKEY>;
	[WALLET_ID.MYALGO]?: WalletType<WALLET_ID.MYALGO>;
	[WALLET_ID.ALGOSIGNER]?: WalletType<WALLET_ID.ALGOSIGNER>;
};

