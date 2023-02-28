import { watch } from '@vue-reactivity/watch';
import { isBrowser } from 'src/utils';
import { AnyWalletState } from './index';

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
};