import { initializeProviders } from "./initializeProviders";
import { reconnectProviders } from "./reconnectProviders";
import { appStateProxy } from "src/state";

import { PROVIDER_ID, WalletClient, Network } from "../types";

export type SupportedProviders = { [x: string]: Promise<WalletClient | null> };
export type InitializedClients = { [x: string]: WalletClient };

import { reactive } from '@vue/reactivity';
export const rrr = reactive({
	rps: null as any
});

// export const initClients = async (providers: SupportedProviders) => {
export const initClients = async () => {
	// try {
	// 	const clients = Object.values(providers);

	// }

	let ips = await initializeProviders(); // aka initClients()
	console.log('ips', ips);
	// this.ips = ips;

	let rps = await reconnectProviders(ips);
	console.log('rps', rps);

	rrr.rps = rps;

	// appStateProxy.state.rps = rps;

	// this.rps = rps;
	return rps;
};