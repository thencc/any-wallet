import { PROVIDER_ID, WalletClient } from "../types";

type SupportedProviders = { [x: string]: Promise<WalletClient | null> };
// type SupportedProviders = { [x in PROVIDER_ID]: Promise<WalletClient | null> };
type InitedClients = { [x: string]: WalletClient };
// type InitedClients = { [x in PROVIDER_ID]: WalletClient };

export const reconnectProviders = async (providers: SupportedProviders) => {
  try {
    // const clients = Object.values(providers);

    const awaitedClients: InitedClients = {};

    // TODO make this promise.All instead of stopping on each and awaiting (faster)
    for (let cId in providers) {
      let c = await providers[cId];

      if (c) {
        c.reconnect(c.disconnect);
        awaitedClients[cId] = c;
      } else {
        console.error('no client found for:', cId, '. is the pkg installed?');
      }
    }

    // for (const client of clients) {
    //   const c = await client;
    //   c?.reconnect(c?.disconnect);
    //   // awaitedClients.push(c);
    // }

    return awaitedClients;
  } catch (e) {
    console.error(e);
  }
};
