import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { clientPkgs, excludeClients, PROVIDER_ID } from '@thencc/algonautjs';

console.log('clientPkgs', clientPkgs);
const allClientPkgNames = Object.values(clientPkgs);
// const allClientPkgNames = excludeClients([]);
console.log('allClientPkgNames', allClientPkgNames);


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],

	optimizeDeps: {
		// for vite server to work correctly...
		exclude: [
			...allClientPkgNames,
		],
	},

	build: {
		minify: false,

		rollupOptions: {
			// THIS is how it works, but have to do the OPPOSITE of what you want
			external: [
				...excludeClients([
					// PROVIDER_ID.INKEY,
					PROVIDER_ID.PERA,
					// PROVIDER_ID.MYALGO
				]),

			]
		}
	}
})
