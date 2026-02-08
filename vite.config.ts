import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import replace from '@rollup/plugin-replace';

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
      external: ['zod', 'yaml'],
      output: {
        format: 'esm',
        preserveModules: true,
        exports: 'named',
      },
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      include: ['src'],
      outDir: 'dist',
    }),
    replace({
      preventAssignment: true,
      values: {
        __VERSION__: JSON.stringify(process.env.npm_package_version),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
});
