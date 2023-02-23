import { computed, reactive, readonly } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';
export { watch } from '@vue-reactivity/watch'; // re-export for frontend use // TODO figure out how to export just the state change handler, not this who func

import { Account } from '../types';

// wallet things
import { ALL_WALLETS, WALLET_ID, WalletType, WalletsObj } from "src/wallets";

export const AnyWalletState = reactive({
	activeAddress: '',
	activeWalletId: null as null | WALLET_ID,
	activeWallet: null as null | WalletType, // should be a computed...

	allWallets: ALL_WALLETS,
	enabledWallets: null as null | WalletsObj, // .wallets (should it be renamed this?)

	// part to store in localstorage/ls (DONT put Maps or Sets or Functions in here...)
	stored: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},

	// computeds
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



// ls TODO move to another file...
const lsKey = 'w3h';
const initLocalStorage = () => {
	console.log('initLocalStorage');
	// recall local storage object (1 time on load!)
	let onLoadLStor = localStorage.getItem(lsKey);
	if (onLoadLStor) {
		try {
			let onLoadLStorObj = JSON.parse(onLoadLStor);
			// console.log('onLoadLStorObj', onLoadLStorObj);
			AnyWalletState.stored = onLoadLStorObj;
		} catch (e) {
			console.warn('bad sLocalStorage parse');
		}
	}
}
if (typeof window !== 'undefined') {
	initLocalStorage(); // 1 time on page load
}


// save '.stored' to localstorage
watch(
	() => AnyWalletState.stored,
	() => {
		// console.log('save me!', AnyWalletState.stored);
		localStorage.setItem(lsKey, JSON.stringify(AnyWalletState.stored) );


		// update helpful top level prop
		let activeAddress = '';
		if (AnyWalletState.stored.activeAccount) {
			activeAddress = AnyWalletState.stored.activeAccount.address;
		}
		AnyWalletState.activeAddress = activeAddress;
	},
	{
		deep: true
	}
);

watch(
	() => AnyWalletState.stored.activeAccount,
	(acct) => {
		// console.log('lib activeAccount changed:', acct);

		// update helpful top level prop
		let activeAddress = '';
		let activeWalletId: null | WALLET_ID = null;
		let activeWallet: null | WalletType = null;
		if (acct) {
			activeAddress = acct.address;
			activeWalletId = acct.providerId;
			activeWallet = AnyWalletState.enabledWallets ? AnyWalletState.enabledWallets[acct.providerId] || null : null;
		}
		AnyWalletState.activeAddress = activeAddress;
		AnyWalletState.activeWalletId = activeWalletId;
		AnyWalletState.activeWallet = activeWallet;
	},
	{
		deep: true,
		immediate: true
	}
);

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
