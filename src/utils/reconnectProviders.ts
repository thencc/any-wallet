import { WalletClient } from "../types";

type SupportedProviders = { [x: string]: Promise<WalletClient | null> };

export const reconnectProviders = async (providers: SupportedProviders) => {
  try {
    const clients = Object.values(providers);

    const awaitedClients = [];

    for (const client of clients) {
      const c = await client;
      c?.reconnect(c?.disconnect);

      awaitedClients.push(c);
    }

    return awaitedClients;
  } catch (e) {
    console.error(e);
  }
};
