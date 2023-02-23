//
import { watch } from '@vue-reactivity/watch';

import { AnyWalletState } from ".";
// import { lsKey } from "./localStored";
export const lsKey = 'w3h'; // TODO update this

import { WalletType, WALLET_ID } from 'src/wallets';

// const AnyWalletState = (await import('.')).AnyWalletState;

// FYI: should only happen ONCE +
// FYI: watchers MUST be started AFTER the state inits
export const startWatchers = () => {
	console.log('startWatchers started');

	if (typeof window == 'undefined') {
		console.warn('not in browser...');
		return;
	}

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
			/*
			let activeAddress = '';
			if (AnyWalletState.stored.activeAccount) {
				activeAddress = AnyWalletState.stored.activeAccount.address;
			}
			AnyWalletState.activeAddress = activeAddress;
			*/
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
			// let activeAddress = '';
			// let activeWalletId: null | WALLET_ID = null;
			// let activeWallet: null | WalletType = null;
			// if (acct) {
			// 	activeAddress = acct.address;
			// 	activeWalletId = acct.providerId;
			// 	activeWallet = AnyWalletState.enabledWallets ? AnyWalletState.enabledWallets[acct.providerId] || null : null;
			// }
			// AnyWalletState.activeAddress = activeAddress;
			// AnyWalletState.activeWalletId = activeWalletId;
			// AnyWalletState.activeWallet = activeWallet;
		},
		{
			deep: true,
			immediate: true
		}
	);
};

