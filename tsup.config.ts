
import { defineConfig } from 'tsup';
import * as pkg from './package.json';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm', 'cjs', 'iife'],
	dts: true, // requires typescript peer dep
	clean: true, // cleans outDir before build
	tsconfig: './tsconfig.json',
	outDir: './dist',

	globalName: 'w3w3w', // for iife, but really who will use this...
	keepNames: true, // for dev

	// legacyOutput: true,
	// TODO use dir folders
	// outExtension({ format }) {
	// 	return {
	// 		js: `.${format}.js`,
	// 	}
	// },

	// DONT bundle wallet-specific libs
	external: [
		...Object.keys(pkg.optionalDependencies),
		...Object.keys(pkg.devDependencies),
	],

	platform: 'browser', // turn on to make lib browser compatible (auto shims require, buffer, process, etc)
	splitting: false,
	// minify: true,
	// treeshake: true,
	// sourcemap: true,
});