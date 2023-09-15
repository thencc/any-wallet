
import { defineConfig } from 'tsup';
import * as pkg from './package.json';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm', 'cjs' ],
	tsconfig: './tsconfig.json',
	outDir: './dist',
	clean: true, // cleans outDir before build
	dts: true, // requires typescript peer dep

	// iife / global build
	// if doing this, add tp pkg.json
	// 		"browser": "dist/index.global.js",
	// add "iife" to format field like: ['esm', 'cjs', 'iife']
	// globalName: 'w3w3w', // for iife, but really who will use this...

	// legacyOutput: true,
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

	platform: 'neutral',
	keepNames: false,
	splitting: true,
	minify: true, // makes built file ~31kb
	treeshake: true,
	// sourcemap: true,

	// === DEV CONFIG ===
	// keepNames: true,
	// splitting: false,
	// minify: false,
	// treeshake: false,
});