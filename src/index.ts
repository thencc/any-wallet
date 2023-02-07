// export { useWallet } from "./hooks";
export { initializeProviders, reconnectProviders, initClients, nccState, watch, signTransactions } from "./utils";
// export { WalletProvider } from "./store";
// export * from "./constants";
export * from "./types";
export * from "./clients";

import { appStateProxy } from './state/index';

export const handyWallet = {
	hello: 'world',
	appStateProxy
};

// test for iife.. dude, if yer using iife web3 isnt for you
(window as any).handyWallet = handyWallet;

// TODO add to initClients a reset which iterates over all existing connectedClients and calls this.disconnect()
