import { proxy, subscribe, snapshot } from 'valtio/vanilla';
import { subscribeKey } from 'valtio/utils';

const STORAGE_KEY = 'ncc-handy-wallet';




import clientsUninited from "../clients";
import { PROVIDER_ID, WalletClient } from 'src/types';
import { SupportedProviders } from 'src/utils/initializeProviders';


// const clients = allClients;

const getClient = async (id?: PROVIDER_ID): Promise<WalletClient> => {
	console.log('getClient', id);

	if (!id) throw new Error("Provier ID is missing.");

	// const client = await (clients as any)?.[id];
	// const client = await appState.state.clients?.[id];
	const client = await appState.state.initializedProviders?.[id];

	if (!client) throw new Error("Client not found for ID");

	return client;
};

const connect = async (id: PROVIDER_ID) => {
	try {
		// await disconnectWCSessions(id);

		const walletClient = await getClient(id);
		console.log('got walletClient', walletClient);
		const walletInfo = await walletClient?.connect(() => { });
		console.log('walletInfo', walletInfo);


		if (!walletInfo || !walletInfo.accounts.length) {
			throw new Error("Failed to connect " + id);
		}

		console.log('walletInfo', walletInfo);
		// _setActiveAccount(walletInfo.accounts[0]);
		// addAccounts(walletInfo.accounts);
	} catch (e) {
		console.error(e);
	}
};

export const getProviders = () => {
	console.log('getProviders');

	// const clients = allClients;
	// const clients = cs;
	// console.log('clients', cs);


	// const supportedClients = Object.keys(clients) as PROVIDER_ID[];
	const supportedClients = Object.keys(clientsUninited) as PROVIDER_ID[];
	console.log('supportedClients', supportedClients);

	const provs = supportedClients.map((id) => {
		return {
			// ...allClients[id],
			...clientsUninited[id],

			// accounts: getAccountsByProvider(id),
			// isActive: activeAccount?.providerId === id,
			// isConnected: connectedAccounts.some(
			// 	(accounts) => accounts.providerId === id
			// ),
			connect: () => connect(id),
			// disconnect: () => disconnect(id),
			// reconnect: () => reconnect(id),
			// setActiveProvider: () => setActive(id),
			// setActiveAccount: (account: string) => selectActiveAccount(id, account),
		};
	});
	console.log('provs', provs);

	return provs;
};

const providers = getProviders();


const initializedProviders: SupportedProviders = {};


// default state (+ shape)
const appState = {
	version: 0, // useful in the future for migrations
	state: {
		count: 0, // dev testing reactivity

		clients: [],
		initializedProviders,
		providers,

		// do we want only .stored to be saved to localstorage?
		// stored: {
		// 	accounts: [
		// 		{
		// 			id: '123',
		// 		},
		// 		{
		// 			id: '456'
		// 		}
		// 	],
		// 	activeAccount: '123',
		// },


	}
};

// like vue's reactive()
export const appStateProxy = proxy(
	// recall state from memory or use default
	// JSON.parse(localStorage.getItem(STORAGE_KEY) as string) as undefined | typeof appState ||
	appState
);


// like vue's watch
// subscribe(appStateProxy, () => {
// 	// console.log('state change:', appStateProxy);
// 	localStorage.setItem(STORAGE_KEY, JSON.stringify(appStateProxy))
// });

subscribeKey(appStateProxy.state, 'count', (c) =>
	console.log('appStateProxy.state.count has changed to', c)
);

// subscribe(appStateProxy.state.stored, (s) => {
// 	console.log('appStateProxy.state.stored has changed to', s);
// 	// s[0].
// });