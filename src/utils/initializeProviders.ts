import type algosdk from "algosdk";
import { PROVIDER_ID, WalletClient, Network } from "../types";
import allClients from "../clients";
import {
  DEFAULT_NODE_BASEURL,
  DEFAULT_NODE_TOKEN,
  DEFAULT_NODE_PORT,
  DEFAULT_NETWORK,
} from "../constants";
// import { appStateProxy } from "src/state";

// export type SupportedProviders = { [x: string]: Promise<WalletClient | null> };
export type SupportedProviders = { [x: string]: Promise<WalletClient> };
export type InitializedClients = { [x: string]: WalletClient };

export type NodeConfig = {
  network: Network;
  nodeServer: string;
  nodeToken?: string;
  nodePort?: string;
};

export const initializeProviders = async (
  providers?: PROVIDER_ID[],
  nodeConfig?: NodeConfig,
  algosdkStatic?: typeof algosdk
) => {
  // do any necessary checks, then resets first before initing (think case of initing after already inited)

  const initializedProviders: SupportedProviders = {};
  const initedClients: any = {};

  const {
    network = DEFAULT_NETWORK,
    nodeServer = DEFAULT_NODE_BASEURL,
    nodePort = DEFAULT_NODE_PORT,
    nodeToken = DEFAULT_NODE_TOKEN,
  } = nodeConfig || {};

  if (!providers || providers.length === 0)
    for (const [id, client] of Object.entries(allClients)) {
      if (id === "kmd") {
        continue;
      }

      // og
      initializedProviders[id] = client.init({
        network,
        algodOptions: [nodeToken, nodeServer, nodePort],
        algosdkStatic: algosdkStatic,
      });

      // let inst = new client({});
      // console.log('inst', inst);

      // let cli = await inst.init({
      //   network,
      //   algodOptions: [nodeToken, nodeServer, nodePort],
      //   algosdkStatic: algosdkStatic,
      // });
      // console.log('cli', cli);

      // initializedProviders[id] = cli as any;
      // initedClients[id] = cli;

      // const awaitedClient = await initializedProviders[id];
      // initedClients[id] = awaitedClient;

      // doesnt work somehow... ctx for public/private class becomes wrong? client becomes out of sync
      // initializedProviders[id] = await client.init({
      //   network,
      //   algodOptions: [nodeToken, nodeServer, nodePort],
      //   algosdkStatic: algosdkStatic,
      // }) as any;
    }

  if (providers) {
    for (const id of providers) {
      console.log('do init for prov:', id);

      initializedProviders[id] = allClients[id].init({
        network,
        algodOptions: [nodeToken, nodeServer, nodePort],
        algosdkStatic: algosdkStatic,
      });
    }
  }

  // appStateProxy.state.initializedProviders = initializedProviders;
  // console.log('initializedProviders', initializedProviders);

  // console.log('initedClients', initedClients);
  // appStateProxy.state.initedClients = initedClients;


  /**
   * then this works: (only because the ctx from logs is within the pkg?)
   *    temp1 = initializedProviders
   *    temp1.inkey.value.connect()
   *
   */


  return initializedProviders;
};



// for iife
if (typeof window !== "undefined") {
  (window as any).initializeProviders = initializeProviders;
}

