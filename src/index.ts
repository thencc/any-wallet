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
