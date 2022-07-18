/**
 * Copyright © 2022 Tony Spegel
 */

import summary from 'rollup-plugin-summary';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: '_site/js/post.js',
    output: {
      dir: '_site/js/',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      // Resolve imports from NPM
      nodeResolve(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
        format: {
          quote_style: 1,
        },
      }),
      summary(),
    ],
  },
  {
    input: '_site/js/index.js',
    output: {
      dir: '_site/js/',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      // Resolve imports from NPM
      nodeResolve(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
        format: {
          quote_style: 1,
        },
      }),
      summary(),
    ],
  },
];
