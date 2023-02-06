import { initializeProviders } from "./initializeProviders";
import { reconnectProviders } from "./reconnectProviders";
import { appStateProxy } from "src/state";

import { PROVIDER_ID, WalletClient, Network, Account } from "../types";

export type SupportedProviders = { [x: string]: Promise<WalletClient | null> };
export type InitializedClients = { [x: string]: WalletClient };

import { reactive } from '@vue/reactivity';
import { watch } from '@vue-reactivity/watch';

export const nccState = reactive({
	rps: null as any,

	// tests
	activeAccount: null as null | Account,
	activeAddr: '',

	// part to store in localstorage/ls (DONT put Maps or Sets or Functions in here...)
	// ls: reactive({
	ls: {
		version: 0, // for future schema changes, can translate old structs to new
		connectedAccounts: [] as Account[],
		activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse

		// activeAccount: reactive({
		// 	address: '',
		// 	name: '',
		// 	providerId: 'inkey'
		// } as Account) // null works in ls but not undefined. think abt JSON stringify/parse

		// activeAccount: null as null | Account // null works in ls but not undefined. think abt JSON stringify/parse
	},
	// }),

});

export const getNccState = () => {
	return nccState;
};

export const addConnectedAccounts = (accounts: Account[]) => {
	console.log('addConnectedAccounts', accounts);

	// fast, but allows dups...
	// nccState.ls.connectedAccounts = [
	// 	...nccState.ls.connectedAccounts,
	// 	...accounts
	// ];

	for (let newAcct of accounts) {

		let exists = false;
		for (let existingAcct of nccState.ls.connectedAccounts) {
			if (newAcct.providerId == existingAcct.providerId &&
				newAcct.address == existingAcct.address) {
				exists = true;
			}
		}

		if (!exists) {
			nccState.ls.connectedAccounts.push(newAcct);
		}
	}
};

export const setAsActiveAccount = (acct: Account) => {
	console.log('setAsActiveAccount', acct);
	nccState.ls.activeAccount = acct;

	// test
	nccState.activeAccount = acct;

	nccState.activeAddr = acct.address;

	// try
	// nccState.ls.activeAccount.address = acct.address;
	// nccState.ls.activeAccount.name = acct.name;
	// nccState.ls.activeAccount.providerId = acct.providerId;
};

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

	nccState.rps = rps;

	// appStateProxy.state.rps = rps;

	// this.rps = rps;
	return rps;
};


const lsKey = 'w3h';
const initLocalStorage = () => {
	console.log('initLocalStorage');
	// recall local storage object (1 time on load!)
	let onLoadLStor = localStorage.getItem(lsKey);
	if (onLoadLStor) {
		try {
			let onLoadLStorObj = JSON.parse(onLoadLStor);
			// console.log('onLoadLStorObj', onLoadLStorObj);
			nccState.ls = onLoadLStorObj;
		} catch (e) {
			console.warn('bad sLocalStorage parse');
		}
	}
}
// initLocalStorage(); // 1 time on page load

// save ".ls" to localstorage
// watch(
// 	() => nccState.ls,
// 	() => {
// 		// console.log('save me!', nccState.ls);
// 		localStorage.setItem(lsKey, JSON.stringify(nccState.ls) );
// 	},
// 	{
// 		deep: true
// 	}
// );



// test
watch(
	() => nccState.rps,
	(r) => {
		console.log('(in lib) rps changed:', nccState.rps);
		// console.log('(in lib) rps change:', r);
	},
	{
		deep: true,
		immediate: true
	}
);