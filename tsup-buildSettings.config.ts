import { build, defineConfig } from 'tsup';

export default defineConfig({
	// entry: ['src/index.ts', "src/utils/buildSettings.ts"],
	// entry: ['src/index.ts'],

	entry: ['src/utils/buildSettings.ts'],
	format: ['cjs', 'esm', 'iife'],
	tsconfig: './tsconfig.json',
	dts: true, // requires typescript peer dep
	clean: false, // cleans outDir before build
	outDir: './dist',

	// globalName: 'w3w3w',
	// legacyOutput: true,
	// TODO use dir folders
	// outExtension({ format }) {
	// 	return {
	// 		js: `.${format}.js`,
	// 	}
	// },

	platform: 'neutral', // turn on to make lib browser compatible (auto shims require, buffer, process, etc)
	splitting: false,
	// minify: true,
	// treeshake: true,
	// sourcemap: true,
});
