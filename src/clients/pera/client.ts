/**
 * Helpful resources:
 * https://github.com/perawallet/connect
 */
import type _algosdk from "algosdk";
import Algod, { getAlgodClient } from "../../algod";
import type { PeraWalletConnect } from "@perawallet/connect";
import type {
  Wallet,
  TransactionsArray,
  DecodedTransaction,
  DecodedSignedTransaction,
  Network,
} from "../../types";
import { PROVIDER_ID, DEFAULT_NETWORK } from "../../constants";
import BaseWallet from "../base";
import { ICON } from "./constants";
import {
  PeraTransaction,
  PeraWalletClientConstructor,
  InitParams,
} from "./types";

import { markRaw } from "@vue/reactivity";
import { nccState, addConnectedAccounts, setAsActiveAccount } from "../../utils/index";

class PeraWalletClient extends BaseWallet {
  client: PeraWalletConnect;
  network: Network;

  constructor({
    client,
    algosdk,
    algodClient,
    network,
  }: PeraWalletClientConstructor) {
    super(algosdk, algodClient);
    this.client = client;
    this.network = network;
  }

  // static metadata = {
  metadata = {
    id: PROVIDER_ID.PERA,
    chain: 'algorand',
    name: "Pera",
    icon: ICON,
    isWalletConnect: true,
  };

  static async init({
    clientOptions,
    algodOptions,
    clientStatic,
    algosdkStatic,
    network = DEFAULT_NETWORK,
  }: InitParams) {
    try {
      (window as any).global = window; // necessary shim for pera

      const PeraWalletConnect =
        clientStatic || (await import("@perawallet/connect")).PeraWalletConnect;
      // console.log('PeraWalletConnect', PeraWalletConnect);

      const algosdk = algosdkStatic || (await Algod.init(algodOptions)).algosdk;
      const algodClient = await getAlgodClient(algosdk, algodOptions);

      const peraWallet = markRaw(new PeraWalletConnect({
        ...(clientOptions ? clientOptions : { shouldShowSignTxnToast: false }),
      }));

      return new PeraWalletClient({
        client: peraWallet,
        algosdk,
        algodClient,
        network,
      });
    } catch (e) {
      console.error("Error initializing...", e);
      return null;
    }
  }

  async connect(onDisconnect: () => void): Promise<Wallet> {
    const accounts = await this.client.connect();

    this.client.connector?.on("disconnect", onDisconnect);

    if (accounts.length === 0) {
      throw new Error(`No accounts found for ${this.metadata.id}`);
    }

    const mappedAccounts = accounts.map((address: string, index: number) => ({
      name: `Pera Wallet ${index + 1}`,
      address,
      providerId: this.metadata.id,
    }));

    // save to state
    addConnectedAccounts(mappedAccounts);
    setAsActiveAccount(mappedAccounts[0]);

    return {
      ...this.metadata,
      accounts: mappedAccounts,
    };
  }

  async reconnect(onDisconnect: () => void) {
    const accounts = await this.client.reconnectSession().catch(console.info);
    this.client.connector?.on("disconnect", onDisconnect);

    if (!accounts) {
      return null;
    }

    return {
      ...this.metadata,
      accounts: accounts.map((address: string, index: number) => ({
        name: `Pera Wallet ${index + 1}`,
        address,
        providerId: this.metadata.id,
      })),
    };
  }

  async disconnect() {
    await this.client.disconnect();
  }

  async signTransactions(
    connectedAccounts: string[],
    transactions: Uint8Array[]
  ) {
    // Decode the transactions to access their properties.
    const decodedTxns = transactions.map((txn) => {
      return this.algosdk.decodeObj(txn);
    }) as Array<DecodedTransaction | DecodedSignedTransaction>;

    // Marshal the transactions,
    // and add the signers property if they shouldn't be signed.
    const txnsToSign = decodedTxns.reduce<PeraTransaction[]>((acc, txn, i) => {
      if (
        !("txn" in txn) &&
        connectedAccounts.includes(this.algosdk.encodeAddress(txn["snd"]))
      ) {
        acc.push({
          txn: this.algosdk.decodeUnsignedTransaction(transactions[i]),
        });
      } else {
        acc.push({
          txn: this.algosdk.decodeSignedTransaction(transactions[i]).txn,
          signers: [],
        });
      }

      return acc;
    }, []);

    // Sign them with the client.
    const result = await this.client.signTransaction([txnsToSign]);

    // Join the newly signed transactions with the original group of transactions.
    const signedTxns = decodedTxns.reduce<Uint8Array[]>((acc, txn, i) => {
      if (!("txn" in txn)) {
        const signedByUser = result.shift();
        signedByUser && acc.push(signedByUser);
      } else {
        acc.push(transactions[i]);
      }

      return acc;
    }, []);

    return signedTxns;
  }

}

export default PeraWalletClient;
