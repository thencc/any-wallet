import { watch } from '@vue-reactivity/watch';
import { isBrowser } from 'src/utils';
import { AnyWalletState } from './index';

type ChangedStateHandler = (s: typeof AnyWalletState) => void;
type ChangedAccountHandler = (s: typeof AnyWalletState.stored.activeAccount) => void;

const stateHandlers = {
	changedStateHandlers: [] as ChangedStateHandler[],
	changedAccountHandlers: [] as ChangedAccountHandler[],
};

// export const lsKey = 'AnyWallet';
export const lsKey = 'AW'; // !!! weirdest bug started occuring when this was set the same after multiple days... ls started reseting? running cached code? dont use above key.

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
		try {
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
		} catch(e) {
			console.warn('could not access localstorage');
		}
	}
	initLocalStorage(); // recall local storage object (1 time on load!)


	// save '.stored' to localstorage
	watch(
		() => AnyWalletState.stored,
		() => {
			// console.log('save me!', AnyWalletState.stored);
			try {
				localStorage.setItem(lsKey, JSON.stringify(AnyWalletState.stored));
			} catch(e) {
				console.warn('could not save to localstorage');
			}
		},
		{
			deep: true
		}
	);

	watch(
		AnyWalletState,
		(latestState) => {
			stateHandlers.changedStateHandlers.forEach(h => h(latestState));
		},
		{
			deep: true,
			// immediate: true,
		}
	);

	watch(
		() => AnyWalletState.stored.activeAccount,
		(a) => {
			stateHandlers.changedAccountHandlers.forEach(h => h(a));
		},
		{
			deep: true,
			// immediate: true
		}
	);
};

// return unsubscriber func (call to stop this handler)
export const subscribeToStateChanges = (handler: (s: typeof AnyWalletState) => void, opts: { callOnSet: boolean } = { callOnSet: true }) => {
	stateHandlers.changedStateHandlers.push(handler);
	if (opts.callOnSet) handler(AnyWalletState); // call it once on set

	return () => {
		let idx = stateHandlers.changedStateHandlers.indexOf(handler);
		if (idx !== -1) {
			stateHandlers.changedStateHandlers.splice(idx, 1);
		}
	};
};

// return unsubscriber func
export const subscribeToAccountChanges = (handler: (a: typeof AnyWalletState.stored.activeAccount) => void, opts: { callOnSet: boolean } = { callOnSet: true }) => {
	stateHandlers.changedAccountHandlers.push(handler);
	if (opts.callOnSet) handler(AnyWalletState.stored.activeAccount); // call it once on set

	return () => {
		let idx = stateHandlers.changedAccountHandlers.indexOf(handler);
		if (idx !== -1) {
			stateHandlers.changedAccountHandlers.splice(idx, 1);
		}
	};
};
