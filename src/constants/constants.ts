import { Network } from "../types";

// TODO move these to pkgHelps / or a single constants file
export enum WALLET_ID {
  // KMD = "kmd",
  PERA = "pera",
  MYALGO = "myalgo",
  INKEY = "inkey",
  ALGOSIGNER = "algosigner",
  // DEFLY = "defly",
  // EXODUS = "exodus",
  // WALLETCONNECT = "walletconnect",
}
// export const WALLET_ID = WALLET_ID;

export const DEFAULT_NETWORK: Network = "testnet"; // "mainnet";

export const DEFAULT_NODE_BASEURL = "https://testnet-api.algonode.cloud";
// https://testnet-api.algonode.cloud
// https://mainnet-api.algonode.cloud

export const DEFAULT_NODE_TOKEN = "";

export const DEFAULT_NODE_PORT = "";
