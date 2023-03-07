import { watch } from '@vue-reactivity/watch';
import { isBrowser } from 'src/utils';
import { AnyWalletState } from './index';

const stateChangeHandlers = {
	changedState: (s: typeof AnyWalletState) => { },
	changedAccount: (a: typeof AnyWalletState.stored.activeAccount) => { },
};

export const lsKey = 'AnyWallet';

// FYI: should only happen ONCE +
// FYI: watchers MUST be started AFTER the state inits
export const startWatchers = () => {
	// console.log('startWatchers started');

	if (!isBrowser()) {
		console.warn('not in browser...');
		return;
	}

	const initLocalStorage = () => {
		// console.log('initLocalStorage');
		let onLoadLStor = localStorage.getItem(lsKey);
		if (onLoadLStor) {
			try {
				type StoredType = typeof AnyWalletState.stored;
				let onLoadLStorObj: StoredType = JSON.parse(onLoadLStor);
				// console.log('onLoadLStorObj', onLoadLStorObj);
				AnyWalletState.stored = onLoadLStorObj;
			} catch (e) {
				console.warn('bad sLocalStorage parse');
			}
		}
	}
	initLocalStorage(); // recall local storage object (1 time on load!)


	// save '.stored' to localstorage
	watch(
		() => AnyWalletState.stored,
		() => {
			// console.log('save me!', AnyWalletState.stored);
			localStorage.setItem(lsKey, JSON.stringify(AnyWalletState.stored));
		},
		{
			deep: true
		}
	);

	watch(
		AnyWalletState,
		(latestState) => {
			stateChangeHandlers.changedState(latestState);
		},
		{
			deep: true,
			// immediate: true,
		}
	);

	watch(
		() => AnyWalletState.stored.activeAccount,
		(a) => {
			stateChangeHandlers.changedAccount(a);
		},
		{
			deep: true,
			// immediate: true
		}
	);
};

export const setChangedStateHandler = (handler: (s: typeof AnyWalletState) => void, callOnSet = true) => {
	stateChangeHandlers.changedState = handler;
	if (callOnSet) stateChangeHandlers.changedState(AnyWalletState); // call it once on set
};

export const setChangedAccountHandler = (handler: (a: typeof AnyWalletState.stored.activeAccount) => void, callOnSet = true) => {
	stateChangeHandlers.changedAccount = handler;
	if (callOnSet) stateChangeHandlers.changedAccount(AnyWalletState.stored.activeAccount); // call it once on set
};
