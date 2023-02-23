import type _algosdk from 'algosdk';
import type { AlgodClientOptions } from '../types';
import {
  DEFAULT_NODE_BASEURL,
  DEFAULT_NODE_TOKEN,
  DEFAULT_NODE_PORT,
} from '../constants';

export const getAlgosdk = async () => {
  // TODO do we need crypto-js too?

  try {
    if (typeof window !== 'undefined') {
      // (window as any).Buffer = (await import('buffer')).Buffer; // usage is always in the browser so this is needed
      const buff = await import('buffer');
      console.log('buff (dynamic import)', buff);
      (window as any).Buffer = buff.default.Buffer; // usage is always in the browser so this is needed
    }

    return (await import('algosdk')).default;
  } catch(e) {
    // console.warn('err w dynamic algosdk/buffer imports');
    console.warn(e);
    throw new Error('err w dynamic algosdk/buffer imports');
  }

};

export const getAlgodClient = async (
  algosdk: typeof _algosdk,
  algodClientOptions?: AlgodClientOptions
) => {
  const [
    tokenOrBaseClient = DEFAULT_NODE_TOKEN,
    baseServer = DEFAULT_NODE_BASEURL,
    port = DEFAULT_NODE_PORT,
    headers,
  ] = algodClientOptions || [];

  return new algosdk.Algodv2(tokenOrBaseClient, baseServer, port, headers);
};

export default class Algod {
  algosdk: typeof _algosdk;
  algodClient: _algosdk.Algodv2;

  constructor(algosdk: typeof _algosdk, algodClient: _algosdk.Algodv2) {
    this.algosdk = algosdk;
    this.algodClient = algodClient;
  }

  static async init(algodOptions?: AlgodClientOptions) {
    console.log('doing Algod init');

    const algosdk = await getAlgosdk();
    console.log('algosdk', algosdk);

    const algodClient = await getAlgodClient(algosdk, algodOptions);

    return new Algod(algosdk, algodClient);
  }
}
