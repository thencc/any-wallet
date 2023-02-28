import type _algosdk from 'algosdk';
import { WALLET_ID } from 'src/wallets/constants';
import type {
  Asset,
  Wallet,
  AccountInfo,
  ConfirmedTxn,
  TxnType,
  TransactionsArray,
  TxnInfo,
  Account,
} from '../../types';
import { audio } from '../../media/audio'; // TODO remove + move to client specific code

// TODO can we remove buffer from w3h and just keep it in algjs?
import { Buffer } from 'buffer';

import { AnyWalletState } from 'src/utils';

const getIsIOS = () => {
  if (typeof window !== 'undefined') {
    return (
      /iPad|iPhone|iPod/.test(navigator?.userAgent) &&
      !(window as any)?.MSStream
    );
  } else {
    return false;
  }
};
const isIOS = getIsIOS();

// TODO review to BaseProvider

class PreBaseClient {
  algosdk: typeof _algosdk;
  algodClient: _algosdk.Algodv2;
  keepWCAlive: HTMLAudioElement;

  // static metadata: {
  //   id: WALLET_ID;
  //   chain: string; // 'algorand'
  //   name: string;
  //   icon: string;
  //   isWalletConnect: boolean; // TODO delete
  // };

  public testMethod() {
    console.log('testMethod');
  };

  setAsActiveAccount() {
    console.log('setAsActiveAccount');
    // this provider AND which account of this p?
  };

  // getAccountsByProvider(id: WALLET_ID) {
  //   return connectedAccounts.filter((account) => account.walletId === id);
  // };

  // abstract init(x: any): Promise<any>;
  // abstract connect(onDisconnect: () => void): Promise<Wallet>;
  // abstract disconnect(): Promise<void>;
  // abstract reconnect(onDisconnect: () => void): Promise<Wallet | null>;
  // abstract signTransactions(
  //   connectedAccounts: string[],
  //   transactions: Array<Uint8Array>
  // ): Promise<Uint8Array[]>;

  // TODO remove most of these async called for algo things, keep them in algjs
  constructor(
    algosdk: typeof _algosdk,
    algodClient: _algosdk.Algodv2
  ) {
    this.algosdk = algosdk;
    this.algodClient = algodClient;
    this.keepWCAlive = new Audio();
  }

  // START remove / delete these...
  async healthCheck() {
    return await this.algodClient.healthCheck().do();
  }

  async getAccountInfo(address: string) {
    const accountInfo = await this.algodClient.accountInformation(address).do();

    if (!accountInfo) {
      throw new Error('Unable to get account information');
    }

    return accountInfo as AccountInfo;
  }

  async getAssets(address: string) {
    const accountInfo = await this.algodClient.accountInformation(address).do();

    if (!accountInfo || accountInfo.assets === undefined) {
      throw new Error('Unable to get account assets');
    }

    return accountInfo.assets as Asset[];
  }

  async waitForConfirmation(txId: string, timeout = 4) {
    const confirmation = (await this.algosdk.waitForConfirmation(
      this.algodClient,
      txId,
      timeout
    )) as ConfirmedTxn;

    return { txId, ...confirmation };
  }

  decodeTransaction = (txn: string, isSigned: boolean) => {
    return isSigned
      ? this.algosdk.decodeSignedTransaction(
        new Uint8Array(Buffer.from(txn, 'base64'))
      ).txn
      : this.algosdk.decodeUnsignedTransaction(
        new Uint8Array(Buffer.from(txn, 'base64'))
      );
  };

  logEncodedTransaction(txn: string, isSigned: boolean) {
    const txnObj = this.decodeTransaction(txn, isSigned);

    console.log('TRANSACTION', {
      isSigned,
      from: txnObj.from && this.algosdk.encodeAddress(txnObj.from.publicKey),
      to: txnObj.to && this.algosdk.encodeAddress(txnObj.to.publicKey),
      type: txnObj.type,
      txn: txnObj,
    });
  }

  groupTransactionsBySender(transactions: TransactionsArray) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function groupBy(objectArray: Record<string, any>[], property: string) {
      return objectArray.reduce(function (acc, obj) {
        const key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    }

    const decodedGroup = transactions.reduce(
      (acc: TxnInfo[], [type, txn], index) => {
        if (type === 'u') {
          const decodedTxn = this.decodeTransaction(txn, false);
          const from = decodedTxn.from
            ? this.algosdk.encodeAddress(decodedTxn.from.publicKey)
            : '';
          const to = decodedTxn.to
            ? this.algosdk.encodeAddress(decodedTxn.to.publicKey)
            : '';
          const type = (decodedTxn.type as TxnType) || '';
          const amount = Number(decodedTxn.amount) || 0; // convert from bigint to number

          const txnObj = {
            groupIndex: index,
            amount,
            from,
            to,
            type,
            txn,
          };

          acc.push(txnObj);
        }

        return acc;
      },
      []
    );
    return groupBy(decodedGroup, 'from');
  }

  async sendRawTransactions(
    transactions: Uint8Array[],
    waitRoundsToConfirm?: number
  ) {
    const sentTransaction = await this.algodClient
      .sendRawTransaction(transactions)
      .do();

    if (!sentTransaction) {
      throw new Error('Transaction failed.');
    }

    const decodedTxn = this.algosdk.decodeSignedTransaction(transactions[0]);
    const waitRounds =
      waitRoundsToConfirm ||
      decodedTxn.txn.lastRound - decodedTxn.txn.firstRound;

    const confirmedTransaction = await this.waitForConfirmation(
      sentTransaction.txId,
      waitRounds
    );

    return {
      id: sentTransaction.txId,
      ...confirmedTransaction,
    };
  }
  // END remove

  keepWCAliveStart() {
    // Playing an audio file prevents Wallet Connect's
    // web socket connection from being dropped when
    // iOS goes into background mode

    if (!isIOS) {
      return;
    }

    this.keepWCAlive.src = audio;
    this.keepWCAlive.autoplay = true;
    this.keepWCAlive.volume = 0;
    this.keepWCAlive.loop = true;
    this.keepWCAlive.play();
  }

  keepWCAliveStop() {
    if (!isIOS) {
      return;
    }

    this.keepWCAlive.pause();
  }
}

abstract class BaseClient extends PreBaseClient {
  // algosdk: typeof _algosdk;
  // algodClient: _algosdk.Algodv2;
  // keepWCAlive: HTMLAudioElement;

  // static metadata: {
  //   id: WALLET_ID;
  //   chain: string; // 'algorand'
  //   name: string;
  //   icon: string;
  //   isWalletConnect: boolean; // TODO delete
  // };
  abstract metadata: {
    id: WALLET_ID;
    chain: string; // 'algorand'
    name: string;
    icon: string;
    isWalletConnect: boolean; // TODO delete
  };

  // works, but have to call this all the time...
  // accounts = [] as Account[];
  // computeAccounts() {
  //   console.log('computeAccounts');
  //   let accts = AnyWalletState.stored.connectedAccounts.filter((account) => account.walletId === this.metadata.id);
  //   this.accounts = accts;
  // };

  // setAsActiveAccount() {
  //   console.log('setAsActiveAccount');
  //   // this provider AND which account of this p?
  // };

  // abstract init(x: any): Promise<any>;
  abstract connect(onDisconnect: () => void): Promise<Wallet>;
  abstract disconnect(): Promise<void>;
  abstract reconnect(onDisconnect: () => void): Promise<Wallet | null>;
  abstract signTransactions(
    connectedAccounts: string[],
    transactions: Array<Uint8Array>
  ): Promise<Uint8Array[]>;

  // TODO remove most of these async called for algo things, keep them in algjs
  constructor(
    algosdk: typeof _algosdk,
    algodClient: _algosdk.Algodv2
  ) {
    super(algosdk, algodClient);

    // this.computeAccounts();

    // this.algosdk = algosdk;
    // this.algodClient = algodClient;
    // this.keepWCAlive = new Audio();
  }

  inBaseClientFn() {
    console.log('inBaseClientFn');
  }

  /*
  // START remove / delete these...
  async healthCheck() {
    return await this.algodClient.healthCheck().do();
  }

  async getAccountInfo(address: string) {
    const accountInfo = await this.algodClient.accountInformation(address).do();

    if (!accountInfo) {
      throw new Error('Unable to get account information');
    }

    return accountInfo as AccountInfo;
  }

  async getAssets(address: string) {
    const accountInfo = await this.algodClient.accountInformation(address).do();

    if (!accountInfo || accountInfo.assets === undefined) {
      throw new Error('Unable to get account assets');
    }

    return accountInfo.assets as Asset[];
  }

  async waitForConfirmation(txId: string, timeout = 4) {
    const confirmation = (await this.algosdk.waitForConfirmation(
      this.algodClient,
      txId,
      timeout
    )) as ConfirmedTxn;

    return { txId, ...confirmation };
  }

  decodeTransaction = (txn: string, isSigned: boolean) => {
    return isSigned
      ? this.algosdk.decodeSignedTransaction(
        new Uint8Array(Buffer.from(txn, 'base64'))
      ).txn
      : this.algosdk.decodeUnsignedTransaction(
        new Uint8Array(Buffer.from(txn, 'base64'))
      );
  };

  logEncodedTransaction(txn: string, isSigned: boolean) {
    const txnObj = this.decodeTransaction(txn, isSigned);

    console.log('TRANSACTION', {
      isSigned,
      from: txnObj.from && this.algosdk.encodeAddress(txnObj.from.publicKey),
      to: txnObj.to && this.algosdk.encodeAddress(txnObj.to.publicKey),
      type: txnObj.type,
      txn: txnObj,
    });
  }

  groupTransactionsBySender(transactions: TransactionsArray) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function groupBy(objectArray: Record<string, any>[], property: string) {
      return objectArray.reduce(function (acc, obj) {
        const key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    }

    const decodedGroup = transactions.reduce(
      (acc: TxnInfo[], [type, txn], index) => {
        if (type === 'u') {
          const decodedTxn = this.decodeTransaction(txn, false);
          const from = decodedTxn.from
            ? this.algosdk.encodeAddress(decodedTxn.from.publicKey)
            : '';
          const to = decodedTxn.to
            ? this.algosdk.encodeAddress(decodedTxn.to.publicKey)
            : '';
          const type = (decodedTxn.type as TxnType) || '';
          const amount = Number(decodedTxn.amount) || 0; // convert from bigint to number

          const txnObj = {
            groupIndex: index,
            amount,
            from,
            to,
            type,
            txn,
          };

          acc.push(txnObj);
        }

        return acc;
      },
      []
    );
    return groupBy(decodedGroup, 'from');
  }

  async sendRawTransactions(
    transactions: Uint8Array[],
    waitRoundsToConfirm?: number
  ) {
    const sentTransaction = await this.algodClient
      .sendRawTransaction(transactions)
      .do();

    if (!sentTransaction) {
      throw new Error('Transaction failed.');
    }

    const decodedTxn = this.algosdk.decodeSignedTransaction(transactions[0]);
    const waitRounds =
      waitRoundsToConfirm ||
      decodedTxn.txn.lastRound - decodedTxn.txn.firstRound;

    const confirmedTransaction = await this.waitForConfirmation(
      sentTransaction.txId,
      waitRounds
    );

    return {
      id: sentTransaction.txId,
      ...confirmedTransaction,
    };
  }
  // END remove

  keepWCAliveStart() {
    // Playing an audio file prevents Wallet Connect's
    // web socket connection from being dropped when
    // iOS goes into background mode

    if (!isIOS) {
      return;
    }

    this.keepWCAlive.src = audio;
    this.keepWCAlive.autoplay = true;
    this.keepWCAlive.volume = 0;
    this.keepWCAlive.loop = true;
    this.keepWCAlive.play();
  }

  keepWCAliveStop() {
    if (!isIOS) {
      return;
    }

    this.keepWCAlive.pause();
  }

  */


}

export default BaseClient;
