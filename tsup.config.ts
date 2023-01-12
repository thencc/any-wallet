import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm', 'iife'],
	tsconfig: './tsconfig.json',
	dts: true, // requires typescript peer dep
	outDir: './dist',
	outExtension({ format }) {
		return {
			js: `.${format}.js`,
		}
	},

	clean: true,
	// platform: 'browser',
	// splitting: true,
	// minify: true,
	// treeshake: true,
	// sourcemap: true,
});
