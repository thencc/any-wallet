// export { useWallet } from "./hooks";
export { initializeProviders, reconnectProviders, initClients, nccState, watch } from "./utils";
// export { WalletProvider } from "./store";
// export * from "./constants";
export * from "./types";
// export * from "./clients";

import { appStateProxy } from './state/index';

export const handyWallet = {
	hello: 'world',
	appStateProxy
};

// test for iife
(window as any).handyWallet = handyWallet;

// TODO add to initClients a reset which iterates over all existing connectedClients and calls this.disconnect()
