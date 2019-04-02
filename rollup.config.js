import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const namespace = process.env.MODULE_NAME || 'bundle'
const filename = `${namespace}${isProduction ? '.min' : ''}.js`

export default (async () => ({
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: namespace,
    file: path.join(__dirname, 'dist', filename),
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    isProduction && (await import('rollup-plugin-terser')).terser()
  ],
  external: []
}))()

