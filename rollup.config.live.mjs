/**
 * Copyright © 2023 Tony Spegel
 */

import { generateSW } from 'rollup-plugin-workbox';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' assert { type: 'json' };

import template from 'rollup-plugin-html-literals';
import path from 'path';

const prodDir = '_prod';
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
    plugins: [nodeResolve(), template(), terse()],
  },
  {
    input: `${prodDir}/js/theme-switch.js`,
    output: outputSettings,
    plugins: [nodeResolve(), template(), terse()],
  },
  {
    input: `${prodDir}/js/post.js`,
    output: outputSettings,
    plugins: [nodeResolve(), template(), terse()],
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
        globIgnores: [
          'cv/*',
          '_includes/css/**/*.css',
          'img/social-images/**/*',
        ],
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
    ],
  },
];
