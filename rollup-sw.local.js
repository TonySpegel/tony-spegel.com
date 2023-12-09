/**
 * Copyright © 2023 Tony Spegel
 */

import { generateSW } from 'rollup-plugin-workbox';
import path from 'path';
const packageJson = require('./package.json');
const { version } = packageJson;

const outputSettings = {
  dir: `_dev/`,
  format: 'es',
  sourcemap: true,
};

export default [
  {
    input: `./src/js/index.js`,
    output: outputSettings,
    preserveEntrySignatures: 'strict',
    plugins: [
      generateSW({
        globIgnores: ['_includes/css/**/*.css'],
        // where to output the generated sw
        swDest: path.join('_dev/', 'sw.js'),
        // directory to match patterns against to be precached
        globDirectory: path.join('_dev/'),
        skipWaiting: true,
        clientsClaim: true,
        // cache any html js and css by default
        globPatterns: ['**/*.{html,js,css,png,jpg,svg,woff2}'],
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
