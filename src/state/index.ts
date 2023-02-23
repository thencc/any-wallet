import { computed, reactive, readonly } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use // TODO figure out how to export just the state change handler, not this who func

import { ClientType } from 'src/clientsNEW';

// wallet things
// import { WalletType, WalletsObj, ALL_WALLETS } from "src/wallets";
import type { WalletType, WalletsObj } from 'src/wallets/types';
import { ALL_WALLETS } from 'src/wallets/constants'; // needs to come AFTER the wallet types

// import { AnyWalletLS } from './localStored';

import { startWatchers } from './watchers';
import type { Account } from 'src/types';

// export const ALL_WALLETS: WalletsObj = {
// 	[WALLET_ID.PERA]: createWallet<ClientType<WALLET_ID.PERA>>(WALLET_ID.PERA),
// 	[WALLET_ID.INKEY]: createWallet<ClientType<WALLET_ID.INKEY>>(WALLET_ID.INKEY),
// 	[WALLET_ID.MYALGO]: createWallet<ClientType<WALLET_ID.MYALGO>>(WALLET_ID.MYALGO),
// 	[WALLET_ID.ALGOSIGNER]: createWallet<ClientType<WALLET_ID.ALGOSIGNER>>(WALLET_ID.ALGOSIGNER),
// 	// test: '123'; // breaks, as it should
// };


export const AnyWalletState = reactive({
	// activeAddress: '',
	// activeWalletId: null as null | WALLET_ID,
	// activeWallet: null as null | WalletType, // should be a computed but makes this reactive obj tooo large to inger type...

	allWallets: ALL_WALLETS,
	enabledWallets: null as null | WalletsObj, // .wallets (should it be renamed this?)

	// part to store in localstorage/ls (DONT put Maps or Sets or Functions in here...)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

	// computeds

	// empty string means no active addr
	get activeAddress() {
		return readonly(computed(() => {
			return AnyWalletState.stored.activeAccount?.address || '';
		}))
	},
	get activeWalletId() {
		return computed(() => {
			return AnyWalletState.stored.activeAccount?.providerId || null;
		})
	},
	// activeAddress: readonly(computed(() => {
	// 	return AnyWalletLS.activeAccount?.address || '';
	// })),
	// activeWalletId: readonly(computed(() => {
	// 	return AnyWalletLS.activeAccount?.providerId || null;
	// })),

	// get activeWallet() {
	// 	return computed(() => {
	// 		let aW: null | WalletType = null;
	// 		if (AnyWalletState.activeWalletId !== null &&
	// 			AnyWalletState.enabledWallets !== null) {
	// 			aW = AnyWalletState.enabledWallets[AnyWalletState.activeWalletId] || null;
	// 		}
	// 		return aW;
	// 	}); // as unknown as null | WalletType; // this type assertion is needed to help w max inferred type size exceeded
	// },

	get activeWallet() {
		return readonly(computed(() => {
			let aW: null | WalletType = null;
			if (AnyWalletState.activeWalletId !== null &&
				AnyWalletState.enabledWallets !== null) {
				aW = AnyWalletState.enabledWallets[AnyWalletState.activeWalletId] || null;
			}
			return aW;
		})) as unknown as null | WalletType; // this type assertion is needed to help w max inferred type size exceeded
	},


	// example
	// get isConnected() {
	// 	return readonly(computed(() => {
	// 		return AnyWalletState.stored.connectedAccounts.some(
	// 			(accounts) => accounts.providerId === id
	// 			// (accounts) => accounts.providerId === this.id
	// 		);
	// 	}));
	// },

	// activeWallet: readonly(computed(() => {
	// 	let aW: null | WalletType = null;
	// 	if (AnyWalletState.activeWalletId !== null &&
	// 		AnyWalletState.enabledWallets !== null) {
	// 		aW = AnyWalletState.enabledWallets[AnyWalletState.activeWalletId] || null;
	// 	}
	// 	return aW;
	// })) as unknown as null | WalletType,


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


if (typeof window !== 'undefined') {
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
