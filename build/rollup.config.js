import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const base = {
  input: 'src/index.js',
  sourcemap: true,
  output: {
    file: 'dist/scrolledintoview.min.js',
    format: 'iife',
    name: 'scrolledIntoView'
  },
  plugins: [babel(), uglify()]
}

const cjs = {
  input: 'src/index.js',
  output: {
    file: 'dist/scrolledintoview.js',
    format: 'cjs',
    name: 'scrolledIntoView'
  },
  plugins: [babel(), uglify()]
}

export default [base, cjs]
