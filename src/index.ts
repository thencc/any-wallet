// export { useWallet } from './hooks';
// export { initClients, AnyWalletState, watch, signTransactions } from './utils';
export * from './utils';
// export { WalletProvider } from './store';
// export * from './constants';
export * from './types';
export * from './clients';

//
export * from './wallets';
// export * from './clientsNEW';
export * from './state';

// import { appStateProxy } from './state/index';

// export const handyWallet = {
// 	hello: 'world',
// 	appStateProxy
// };

// // test for iife.. dude, if yer using iife web3 isnt for you
// (window as any).handyWallet = handyWallet;

// TODO add to initClients a reset which iterates over all existing connectedClients and calls this.disconnect()
