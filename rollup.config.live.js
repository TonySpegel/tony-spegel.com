/**
 * Copyright © 2023 Tony Spegel
 */

import { generateSW } from 'rollup-plugin-workbox';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import path from 'path';

const prodDir = '_prod';
const packageJson = require('./package.json');
const { version } = packageJson;

const terse = () =>
  terser({
    ecma: 2020,
    module: true,
    warnings: true,
    format: {
      quote_style: 1,
    },
  });

const outputSettings = {
  dir: `${prodDir}/js/`,
  format: 'es',
  sourcemap: true,
};

export default [
  {
    input: `${prodDir}/js/image-comparison.js`,
    output: outputSettings,
    plugins: [nodeResolve(), minifyHTML(), terse(), summary()],
  },
  {
    input: `${prodDir}/js/theme-switch.js`,
    output: outputSettings,
    plugins: [nodeResolve(), minifyHTML(), terse(), summary()],
  },
  {
    input: `${prodDir}/js/post.js`,
    output: outputSettings,
    plugins: [nodeResolve(), minifyHTML(), terse(), summary()],
  },
  {
    input: `${prodDir}/js/index.js`,
    output: outputSettings,
    preserveEntrySignatures: 'strict',
    plugins: [
      nodeResolve(),
      // Minify JS
      terse(),
      generateSW({
        globIgnores: ['cv/*', '_includes/css/**/*.css'],
        navigateFallback: '/index.html',
        // where to output the generated sw
        swDest: path.join(prodDir, 'sw.js'),
        // directory to match patterns against to be precached
        globDirectory: path.join(prodDir),
        // cache any html js and css by default
        globPatterns: ['**/*.{html,js,css,png,jpg,svg,woff2}'],
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            handler: 'CacheFirst',
            urlPattern: /^https?:\/\/.+/,
            options: { cacheName: `tony-spegel.com-v${version}` },
          },
        ],
      }),
      summary(),
    ],
  },
];
