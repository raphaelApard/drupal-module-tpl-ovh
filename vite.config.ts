import path from 'node:path';
import { defineConfig } from 'vite';
import { globSync } from 'glob';
import eslint from '@rollup/plugin-eslint';
import legacy from '@vitejs/plugin-legacy';

const patternTS = '**/!(*.test|*.spec|*.stories|*.d).{js,ts}';
const sources = [`ts/${patternTS}`];

const globs: string[] = [];
[...sources].forEach((source) =>
  globs.push(
    ...globSync(path.resolve(__dirname, source), {
      ignore: ['**/__mocks__/**', '**/__tests__/**'],
    }),
  ),
);

const entries: Record<string, string> = [...globs].reduce((acc, current) => {
  const ext = path.extname(current);
  Object.assign(acc, { [path.basename(current, ext)]: current });
  return acc;
}, {});

/** @type {import('vite').UserConfig} */
const config = ({ mode }) => {
  return defineConfig({
    base: './',
    publicDir: false,
    plugins: [
      legacy(),
      mode === 'development' && {
        ...eslint({
          formatter: require('eslint-formatter-pretty'),
          include: ['**/*.js', '**/*.ts'],
          throwOnWarning: false,
          throwOnError: false,
        }),
        enforce: 'pre',
      },
    ],
    build: {
      manifest: mode !== 'development',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          ...entries,
        },
        output: {
          entryFileNames: 'js/[name].min.js',
          assetFileNames: '[name][extname]',
        },
      },
      minify: mode !== 'development',
    },
    server: {
      host: '0.0.0.0',
      strictPort: true,
      port: process.env.NODE_VITE_PORT
        ? parseFloat(process.env.NODE_VITE_PORT)
        : 3051,
    },
  });
};

export default config;