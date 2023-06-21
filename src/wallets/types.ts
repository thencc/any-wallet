// wallets
import { WALLET_ID, type W_ID } from './consts';
import type { createWallet } from './actions'; // AFTER the constants import

// clients
import type { ClientType } from 'src/clients';

// init params
import type { InitParams as PeraInitParams } from 'src/clients/pera/types';
import type { InitParams as InkeyInitParams } from 'src/clients/inkey/types';
import type { InitParams as MyAlgoInitParams } from 'src/clients/myalgo/types';
import type { InitParams as AlgoSignerInitParams } from 'src/clients/algosigner/types';
import type { InitParams as ExodusInitParams } from 'src/clients/exodus/types';
import type { InitParams as DeflyInitParams } from 'src/clients/defly/types';
import type { InitParamsBase as MnemonicInitParams } from 'src/clients/mnemonic/types';

export type WalletInitParamsObj = {
	[WALLET_ID.PERA]?: boolean | {
		id?: typeof WALLET_ID.PERA;
		config?: PeraInitParams['config'];
		sdk?: PeraInitParams['sdk'];
	};
	[WALLET_ID.INKEY]?: boolean | {
		id?: typeof WALLET_ID.INKEY;
		config?: InkeyInitParams['config'];
		sdk?: InkeyInitParams['sdk'];
	};
	[WALLET_ID.MYALGO]?: boolean | {
		id?: typeof WALLET_ID.MYALGO;
		config?: MyAlgoInitParams['config'];
		sdk?: MyAlgoInitParams['sdk'];
	};
	[WALLET_ID.ALGOSIGNER]?: boolean | {
		id?: typeof WALLET_ID.ALGOSIGNER;
		config?: AlgoSignerInitParams['config'];
		sdk?: AlgoSignerInitParams['sdk'];
	};
	[WALLET_ID.EXODUS]?: boolean | {
		id?: typeof WALLET_ID.EXODUS;
		config?: ExodusInitParams['config'];
		sdk?: ExodusInitParams['sdk'];
	};
	[WALLET_ID.DEFLY]?: boolean | {
		id?: typeof WALLET_ID.DEFLY;
		config?: DeflyInitParams['config'];
		sdk?: DeflyInitParams['sdk'];
	};
	[WALLET_ID.MNEMONIC]?: string | {
		id?: typeof WALLET_ID.MNEMONIC;
		config?: MnemonicInitParams['config'];
		sdk?: MnemonicInitParams['sdk'];
	};
};

export type WalletType<T extends W_ID = W_ID> = ReturnType<typeof createWallet<ClientType<T>>>;

export type WalletsObj = {
	[WALLET_ID.PERA]?: WalletType<typeof WALLET_ID.PERA>;
	[WALLET_ID.INKEY]?: WalletType<typeof WALLET_ID.INKEY>;
	[WALLET_ID.MYALGO]?: WalletType<typeof WALLET_ID.MYALGO>;
	[WALLET_ID.ALGOSIGNER]?: WalletType<typeof WALLET_ID.ALGOSIGNER>;
	[WALLET_ID.EXODUS]?: WalletType<typeof WALLET_ID.EXODUS>;
	[WALLET_ID.DEFLY]?: WalletType<typeof WALLET_ID.DEFLY>;
	[WALLET_ID.MNEMONIC]?: WalletType<typeof WALLET_ID.MNEMONIC>;
};
