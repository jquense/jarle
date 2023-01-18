import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'vendor/sucrase.js',
    output: {
      file: 'src/transform/parser.js',
      format: 'es',
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },
];
