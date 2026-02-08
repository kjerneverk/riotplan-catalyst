import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/**',
        'vitest.config.ts',
        'vite.config.ts',
        'eslint.config.mjs',
        'src/loader/**',  // placeholder files
        'src/merger/**',  // placeholder files
        'src/types.ts',   // type definitions
        'src/riotplan-catalyst.ts', // main entry (re-exports)
      ],
    },
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
});
