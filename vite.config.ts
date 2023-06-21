import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'aw-test',
    include: ['**\/*.{test,spec}.?(c|m)[jt]s?(x)'], // default
    exclude: [
      // default
      'node_modules', 
      'dist', 
      '.idea', 
      '.git', 
      '.cache', 
      // more
      'example-dapp'
    ], 
    watchExclude: ['node_modules', 'dist'],
    globals: false, // true for east jest compt
    environment: 'node',
    testTimeout: 5000, // default. ms
    isolate: true, // default
    // ui: false,
    env: {},
  },
});