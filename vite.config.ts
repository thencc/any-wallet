import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, './src'),
  //     '@thencc/any-wallet': resolve(__dirname),
  //   },
  // },

  test: {
    name: 'aw-test',
    include: ['**\/*.{test,spec}.?(c|m)[jt]s?(x)'], // default
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'], // default
    watchExclude: ['node_modules', 'dist'],
    globals: false, // true for east jest compt
    environment: 'node',
    testTimeout: 5000, // default. ms
    isolate: true, // default
    // ui: false,
    env: {},
    alias: {
        '@thencc/any-wallet': resolve(__dirname), // 'src/index.ts') 
        // 'src/*': resolve(__dirname),
    }
  },
});