// export { initializeProviders } from "./initializeProviders";
// export { reconnectProviders } from "./reconnectProviders";
// export { initClients, AnyWalletState, addConnectedAccounts, setAsActiveAccount, watch, signTransactions } from './initClients';

export * from '../state';
// export * from './pkgHelpers';


export function isBrowser() {
	let pass = false;
	if (typeof window !== undefined && typeof window == 'object') {
		// just checking window isnt enough, deno shims in window but not the DOM!
		if ('document' in window && typeof window.document == 'object') {
			pass = true;
		}
	}
	return pass;
};
