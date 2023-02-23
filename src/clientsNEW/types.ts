import { WALLET_ID } from 'src/wallets';
import { CLIENT_MAP } from './constants';

export type ClientType<T extends WALLET_ID> = InstanceType<typeof CLIENT_MAP[T]['client']>;
