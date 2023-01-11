// export { useWallet } from "./hooks";
export { initializeProviders, reconnectProviders } from "./utils";
// export { WalletProvider } from "./store";
// export * from "./constants";
// export * from "./types";
// export * from "./clients";

import { appStateProxy } from './state/index';

export const handyWallet = {
	hello: 'world',
	appStateProxy
};





// import allClients from "./clients";
// import { initializeProviders, SupportedProviders } from "./utils/initializeProviders";
// import { Account } from "./types";

// export const getHandy = () => {

// 	const clients = allClients;

// 	const initializedProviders: SupportedProviders = {};

// 	const connectedAccounts = [] as Account[];
// 	const defaultAccount = null as null | Account;

// 	return {
// 		clients, // constructors

// 		// providers: initializedProviders, // instances
// 		// initializeProviders, // populates .providers

// 		// connectedAccounts, // acct user has signed in as previously
// 		// defaultAccount,


// 	}
// };