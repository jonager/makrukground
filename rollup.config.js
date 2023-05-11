import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/makrukground.js',
      format: 'iife',
      name: 'Makrukground',
    },
    {
      file: 'dist/makrukground.min.js',
      format: 'iife',
      name: 'Makrukground',
      plugins: [
        terser(),
      ],
    },
  ],
  plugins: [
    typescript(),
  ],
};
