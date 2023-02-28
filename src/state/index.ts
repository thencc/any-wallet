import { computed, reactive, readonly } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use // TODO figure out how to export just the state change handler, not this who func
import { isBrowser } from '../utils/index';
import { startWatchers } from './watchers';

import { WalletType, WalletsObj, ALL_WALLETS, WALLET_ID } from 'src/wallets'; // wallet bits
import type { Account } from 'src/types';

export const AnyWalletState = reactive({
	allWallets: ALL_WALLETS,
	enabledWallets: null as null | WalletsObj, // .wallets (should it be renamed this?)

	// store in localstorage (FYI: DONT put Maps or Sets or Functions in this)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

	// computeds
	activeAddress: readonly(computed(() => {
		let a = '';
		if (AnyWalletState.stored.activeAccount) {
			a = AnyWalletState.stored.activeAccount.address;
		}
		return a;
	})),
	activeWalletId: readonly(computed(() => {
		let aWId: null | WALLET_ID = null;
		if (AnyWalletState.stored.activeAccount) {
			aWId = AnyWalletState.stored.activeAccount.walletId as unknown as WALLET_ID; // sometimes vue-r isnt smart enough to figure out this nested type. or maybe its an enum thing
		}
		return aWId;
	})),
	activeWallet: readonly(computed(() => {
		let aW: undefined | WalletType = undefined;
		if (AnyWalletState.activeWalletId !== null &&
			AnyWalletState.enabledWallets !== null) {
			aW = AnyWalletState.enabledWallets[AnyWalletState.activeWalletId] as undefined | WalletType;
		}
		return aW;
	})) as unknown as undefined | WalletType, // this type assertion is needed to help w max inferred type size exceeded
	isSigning: readonly(computed(() => {
		let someWalletIsSigning = false;
		if (!AnyWalletState.enabledWallets) {
			// pass
		} else {
			for (let [k, w] of Object.entries(AnyWalletState.enabledWallets)) {
				if (w.signing) {
					someWalletIsSigning = true;
					break;
				}
			}
		}
		return someWalletIsSigning;
	})),
});

// if browser, do the browser-specific stuff (localstorage, etc). this built file has to be able to run thru bundlers down the line like esbuild/rollup
if (isBrowser()) {
	// FYI: should only happen ONCE +
	// FYI: watchers MUST be started AFTER the state inits
	startWatchers();
}

// TODO figure out how to let client user define their own onChange handler. use setOnChange( userFun ) ?
/**
 * try...
 *
 * import { onChange } ...
 * // set it
 * onChange = () => {
 * 	console.log('custom');
 * }
 */
export const onChange = (n: typeof AnyWalletState) => {
	console.log('onChange');
	console.log('latest', n);
};

watch(
	AnyWalletState,
	(latestState) => {
		console.log('[in pkg] something changed');
		onChange(latestState);
	},
	{
		deep: true
	}
);
