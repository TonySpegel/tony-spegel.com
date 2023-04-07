/**
 * Copyright © 2023 Tony Spegel
 */

import { generateSW } from 'rollup-plugin-workbox';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import template from 'rollup-plugin-html-literals';
import summary from 'rollup-plugin-summary';
import path from 'path';

const prodDir = '_prod';

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
    /**
     * template() is missing for image-comparison,
     * because there's a bug for units used in inline-styles.
     * Needs to be fixed in the component itself.
     */
    plugins: [nodeResolve(), terse(), summary()],
  },
  {
    input: `${prodDir}/js/theme-switch.js`,
    output: outputSettings,
    plugins: [nodeResolve(), template(), terse(), summary()],
  },
  {
    input: `${prodDir}/js/post.js`,
    output: outputSettings,
    plugins: [nodeResolve(), template(), terse(), summary()],
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
        globIgnores: ['polyfills/*.js', 'nomodule-*.js'],
        navigateFallback: '/index.html',
        // where to output the generated sw
        swDest: path.join(prodDir, 'sw.js'),
        // directory to match patterns against to be precached
        globDirectory: path.join(prodDir),
        // cache any html js and css by default
        globPatterns: ['**/*.{html,js,mjs,css,png,svg,woff2,webmanifest}'],
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          { urlPattern: 'polyfills/*.js', handler: 'CacheFirst' },
        ],
      }),
      summary(),
    ],
  },
];
