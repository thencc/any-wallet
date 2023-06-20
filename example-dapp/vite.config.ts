import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// import { CLIENT_PKGS, excludeClients } from '@thencc/any-wallet';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: '', // needed for github pages re relative path

	// optimizeDeps: {
	// 	// for vite server to work correctly...
	// 	include: [
	// 		...CLIENT_PKGS
	// 	],
	// },

	build: {
		minify: false,
		rollupOptions: {
			// THIS is how it works, but have to do the OPPOSITE of what you want
			external: [
				// ...excludeClients([
				// 	// CLIENT_ID.INKEY,
				// 	CLIENT_ID.PERA,
				// 	// CLIENT_ID.MYALGO
				// ]),
			]
		}
	}
});