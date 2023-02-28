import { WALLET_ID } from 'src/wallets/constants';
import type _algosdk from 'algosdk';
import type { AlgodClientOptions, Network } from '../../types';

export type ExodusSdk = {
  isConnected: boolean;
  address: string | null;
  connect: ({ onlyIfTrusted }: { onlyIfTrusted: boolean }) => Promise<{
    address: string;
  }>;
  disconnect: () => void;
  signAndSendTransaction(transactions: Bytes[]): Promise<{
    txId: string;
  }>;
  signTransaction(transactions: Bytes[]): Promise<Bytes[]>;
};

export type SdkConfig = {
  onlyIfTrusted: boolean;
};

export type WindowExtended = { exodus: { algorand: ExodusSdk } } & Window &
  typeof globalThis;

export type Bytes = Readonly<Uint8Array>;

export type ExodusClientConstructor = {
  sdk: ExodusSdk;
  onlyIfTrusted: boolean;
};

export type InitParams = {
  config?: SdkConfig;
  sdk?: ExodusSdk;
};
