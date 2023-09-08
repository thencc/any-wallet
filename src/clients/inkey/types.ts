import type { 
	createClient, 
} from '@thencc/inkey-client-js';
import type {
	InkeyConfig
} from '@thencc/inkey-types';

export type InkeySdk = Awaited<ReturnType<typeof createClient>>;
export type InkeySdkCreator = typeof createClient; // for some clients this is a function, for others it is a class

export type InkeyWalletClientConstructor = {
	sdk: InkeySdk; // clientSdk
};

export type SdkConfig = InkeyConfig;

export type ClientConfig = SdkConfig;

export type InitParams = {
	config?: ClientConfig;
	sdk?: InkeySdk;
};
