import { Network } from "../types";

export enum PROVIDER_ID {
  // KMD = "kmd",
  PERA = "pera",
  MYALGO = "myalgo",
  INKEY = "inkey",
  // ALGOSIGNER = "algosigner",
  // DEFLY = "defly",
  // EXODUS = "exodus",
  // WALLETCONNECT = "walletconnect",
}

export const DEFAULT_NETWORK: Network = "testnet"; // "mainnet";

export const DEFAULT_NODE_BASEURL = "https://testnet-api.algonode.cloud";
// https://testnet-api.algonode.cloud
// https://mainnet-api.algonode.cloud

export const DEFAULT_NODE_TOKEN = "";

export const DEFAULT_NODE_PORT = "";
