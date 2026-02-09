import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: './src/riotplan-catalyst.ts',
      formats: ['es'],
      fileName: () => 'riotplan-catalyst.js',
    },
    rollupOptions: {
      external: ['zod', 'yaml', /^node:/],
      output: {
        format: 'esm',
        preserveModules: true,
        exports: 'named',
      },
    },
    sourcemap: true,
  },
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        __VERSION__: JSON.stringify(process.env.npm_package_version),
      },
    }),
    dts({
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts', 'tests/**/*'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
});
