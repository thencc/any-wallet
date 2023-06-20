import { computed, reactive, readonly, toRefs } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-exported for frontend use
import { isBrowser, logger } from '../utils';
import { lsKey, startWatchers } from './watchers';
export * from './watchers';

// import { WalletType, ALL_WALLETS } from 'src/wallets'; // wallet bits
import type { WalletType } from 'src/wallets'; // wallet bits
import type { Account } from 'src/types';
import type { WALL_V } from 'src/wallets/const';

import type { ClientType } from 'src/clients';
import type { Network } from 'src/types/node';
// import { createWallet } from './actions'; // needs to be AFTER the types import
import { createWallet } from '../wallets/actions'; // needs to be AFTER the types import

import { WALLET_ID } from '../wallets/const';

// export const ALL_WALLETS = {
// 	[WALLET_ID.PERA]: createWallet<ClientType<typeof WALLET_ID.PERA>>(WALLET_ID.PERA),
// 	[WALLET_ID.INKEY]: createWallet<ClientType<typeof WALLET_ID.INKEY>>(WALLET_ID.INKEY),
// 	[WALLET_ID.MYALGO]: createWallet<ClientType<typeof WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
// 	[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<typeof WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
// 	[WALLET_ID.EXODUS]: createWallet<ClientType<typeof WALLET_ID.EXODUS>>(WALLET_ID.EXODUS),
// 	[WALLET_ID.DEFLY]: createWallet<ClientType<typeof WALLET_ID.DEFLY>>(WALLET_ID.DEFLY),
// 	[WALLET_ID.MNEMONIC]: createWallet<ClientType<typeof WALLET_ID.MNEMONIC>>(WALLET_ID.MNEMONIC),
// } as const; // helps w security

export const AnyWalletState = reactive({
	// allWallets: ALL_WALLETS,
	allWallets: {
		[WALLET_ID.PERA]: createWallet<ClientType<typeof WALLET_ID.PERA>>(WALLET_ID.PERA),
		[WALLET_ID.INKEY]: createWallet<ClientType<typeof WALLET_ID.INKEY>>(WALLET_ID.INKEY),
		[WALLET_ID.MYALGO]: createWallet<ClientType<typeof WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
		[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<typeof WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
		[WALLET_ID.EXODUS]: createWallet<ClientType<typeof WALLET_ID.EXODUS>>(WALLET_ID.EXODUS),
		[WALLET_ID.DEFLY]: createWallet<ClientType<typeof WALLET_ID.DEFLY>>(WALLET_ID.DEFLY),
		[WALLET_ID.MNEMONIC]: createWallet<ClientType<typeof WALLET_ID.MNEMONIC>>(WALLET_ID.MNEMONIC),
	},

	// === localstorage === (FYI: dont put Maps or Sets or Functions in this)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

	// === computeds ===
	activeAddress: readonly(computed(() => {
		let a = '';
		if (AnyWalletState.stored.activeAccount) {
			a = AnyWalletState.stored.activeAccount.address;
		}
		return a; // as string;
	})),
	activeAccount: readonly(computed(() => {
		let acct = null;
		if (AnyWalletState.stored.activeAccount) {
			acct = AnyWalletState.stored.activeAccount as Account; // needs this cast for some reason...
		}
		return acct;
	})),
	connectedAccounts: readonly(computed(() => {
		let cAccts = [] as Account[];
		if (AnyWalletState.stored.connectedAccounts) {
			cAccts = AnyWalletState.stored.connectedAccounts; // needs this cast for some reason...
		}
		return cAccts;
	})),
	activeWalletId: readonly(computed(() => {
		let aWId: null | WALL_V = null;
		if (AnyWalletState.stored.activeAccount) {
			aWId = AnyWalletState.stored.activeAccount.walletId as WALL_V; // sometimes vue-r isnt smart enough to figure out this nested type. or maybe its an enum thing
		}
		return aWId;
	})),
	activeWallet: readonly(computed(() => {
		let aW: undefined | WalletType = undefined;
		if (AnyWalletState.activeWalletId !== null) {
			aW = AnyWalletState.allWallets[AnyWalletState.activeWalletId] as undefined | WalletType;
		}
		return aW;
	})) as unknown as undefined | WalletType, // this type assertion is needed to help w max inferred type size exceeded
	isSigning: readonly(computed(() => {
		let someWalletIsSigning = false;
		for (let [k, w] of Object.entries(AnyWalletState.allWallets)) {
			if (w.signing) {
				someWalletIsSigning = true;
				break;
			}
		}
		return someWalletIsSigning;
	})),
});

export const recallState = () => {
	logger.log('recallState');
	
	// FYI only run LS code in browser, not node or v8
	if (isBrowser()) {
		const initLocalStorage = () => {
			logger.log('initLocalStorage');
			try {
				let onLoadLStor = localStorage.getItem(lsKey);
				if (onLoadLStor) {
					try {
						type StoredType = typeof AnyWalletState.stored;
						let onLoadLStorObj: StoredType = JSON.parse(onLoadLStor);
						// logger.log('onLoadLStorObj', onLoadLStorObj);
						AnyWalletState.stored = onLoadLStorObj;
					} catch (e) {
						console.warn('bad sLocalStorage parse');
					}
				}
			} catch(e) {
				console.warn('could not access localstorage');
			}
		}
		initLocalStorage(); // recall local storage object (1 time on load!)	
	}
};

// once on load, kick off the watchers
startWatchers(); // FYI: should only happen ONCE + watchers MUST be started AFTER the state inits
