import proxyWithPersist, { PersistStrategy } from 'valtio-persist';
import type { ProxyPersistStorageEngine } from 'valtio-persist';

// localStorage approach
const storage: ProxyPersistStorageEngine = {
	getItem: name => window.localStorage.getItem(name),
	setItem: (name, value) => window.localStorage.setItem(name, value),
	removeItem: name => window.localStorage.removeItem(name),
	getAllKeys: () => Object.keys(window.localStorage)
};

export const appStateProxy = proxyWithPersist({
	name: 'appState', // must be unique, files/paths will be created with this prefix
	initialState: {
		counter: 0,
	},

	persistStrategies: PersistStrategy.SingleFile,
	version: 0,
	migrations: {},

	// see "Storage Engine" section below
	getStorage: () => storage,
});
console.log('counter:', appStateProxy.counter);



// dont really need to wait for this...
import { subscribeKey } from 'valtio/utils';
subscribeKey(appStateProxy._persist, 'loaded', (loaded) => {
	if (loaded) {
		console.log('it is now safe to make changes to appStateProxy. the changes will now be persisted.');
	}
});



// test
setInterval(() => {
	++appStateProxy.counter
}, 1000);
