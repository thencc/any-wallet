import type MyAlgoConnect from '@randlabs/myalgo-connect';

export type MyAlgoSdk = MyAlgoConnect;
export type MyAlgoSdkCreator = typeof MyAlgoConnect; // for some clients this is a function, for others it is a class

export type MyAlgoClientConstructor = {
	sdk: MyAlgoSdk;
};

export type SdkConfig = {
	timeout?: number;
	bridgeUrl?: string;
	disableLedgerNano?: boolean;
};

export type InitParams = {
	config?: SdkConfig;
	sdk?: MyAlgoSdk;
};
