import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm', 'iife'],
	dts: true, // requires typescript peer dep
	outDir: './dist',
	outExtension({ format }) {
		return {
			js: `.${format}.js`,
		}
	},
	// platform: 'browser',
	// splitting: true,
	clean: true,
	// minify: true,
	// treeshake: true,
	// sourcemap: true,
	tsconfig: './tsconfig.json'
});
