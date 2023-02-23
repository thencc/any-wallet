import { reactive } from "@vue/reactivity";
import { watch } from '@vue-reactivity/watch';

// no, use the await import way
// import { AnyWalletState } from "."; // main lib state


import type { Account } from "src/types";
import { WalletType, WALLET_ID } from "src/wallets";

export const AnyWalletLS = reactive({
	version: 0, // for future schema changes, can translate old structs to new
	connectedAccounts: [] as Account[],
	activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
});
export const lsKey = 'w3h'; // TODO update this



// 1 time on load on load (but await this import since we care about import order)
(async () => {
	const AnyWalletState = (await import('.')).AnyWalletState;

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
			localStorage.setItem(lsKey, JSON.stringify(AnyWalletState.stored));


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

	// this has to come AFTER the main state obj (not in the ls file)
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

})();
