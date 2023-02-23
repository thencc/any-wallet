// import { WALLET_ID } from "../types";
// import { CLIENT_IDS } from '../utils/pkgHelpers';

// // type SupportedProviders = { [x: string]: Promise<WalletClient | null> };
// // type SupportedProviders = { [x in WALLET_ID]?: Promise<WalletClient | null> };
// // type InitedClients = { [x: string]: WalletClient };

// // type InitedClients = { [x in WALLET_ID]?: NonNullable<WalletClient>};

// // type InitedClients = { [x in WALLET_ID]?: WalletClient };
// // type InitedClients = Record<typeof CLIENT_IDS[number], WalletClient>;
// // type InitedClients = Record<[WALLET_ID]?, WalletClient>;
// // type InitedClients = {
// //   [WALLET_ID.INKEY]?: WalletClient
// // };
// // type InitedClients = {
// //   pera?: BaseClient;
// //   inkey?: BaseClient;
// // }

// // type SPP = Partial<SupportedProviders>;

// // type InitedClients = {
// //   pera?: WalletClient;
// //   inkey?: WalletClient;
// // }

// export const reconnectProviders = async (providers: SupportedProviders) => {
//   try {
//     // const clients = Object.values(providers);

//     const awaitedClients: InitedClients = {};

//     // TODO make this promise.All instead of stopping on each and awaiting (faster)
//     for (let cId in providers) {
//       let ccid = cId as WALLET_ID; // TODO try and fix casting here
//       let c = await providers[ccid];

//       if (c) {
//         c.reconnect(c.disconnect);
//         awaitedClients[ccid] = c;
//       } else {
//         console.error('no client found for:', cId, '. is the pkg installed?');
//       }
//     }

//     // for (const client of clients) {
//     //   const c = await client;
//     //   c?.reconnect(c?.disconnect);
//     //   // awaitedClients.push(c);
//     // }

//     return awaitedClients;
//   } catch (e) {
//     console.error(e);
//   }
// };
