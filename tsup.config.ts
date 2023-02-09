import { build, defineConfig } from 'tsup';
import * as pkg from './package.json';

export default defineConfig({
	// entry: ['src/index.ts', "src/utils/buildSettings.ts"],
	entry: ['src/index.ts'],
	format: ['cjs', 'esm', 'iife'],
	tsconfig: './tsconfig.json',
	dts: true, // requires typescript peer dep
	clean: true, // cleans outDir before build
	outDir: './dist',

	globalName: 'w3w3w',
	// legacyOutput: true,
	// TODO use dir folders
	outExtension({ format }) {
		return {
			js: `.${format}.js`,
		}
	},

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

// let buildFile = await build({
// 	entry: ['src/utils/buildSettings.ts'],
// 	format: ['iife'],
// 	dts: true,
// 	clean: false,
// });
// console.log('buildFile');
// console.log(buildFile);
