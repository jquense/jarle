import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

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
  {
    input: 'vendor/sucrase.d.ts',
    output: [{ file: 'src/transform/parser.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];