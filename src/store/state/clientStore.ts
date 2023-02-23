import { createContext } from 'react';
import { WALLET_ID } from 'src/wallets/constants';
import BaseWallet from '../../clients/base';

type Context = Partial<{ [key in WALLET_ID]: Promise<BaseWallet | null> }>;

const ClientContext = createContext<Context | null>(null);

export { ClientContext };

export default ClientContext.Provider;
