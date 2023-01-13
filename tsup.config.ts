import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm', 'iife'],
	tsconfig: './tsconfig.json',
	dts: true, // requires typescript peer dep
	clean: true, // cleans outDir before build
	outDir: './dist',
	outExtension({ format }) {
		return {
			js: `.${format}.js`,
		}
	},

	platform: 'browser', // turn on to make lib browser compatible (shims require, buffer, process, etc)
	// splitting: true,
	// minify: true,
	// treeshake: true,
	// sourcemap: true,
});
