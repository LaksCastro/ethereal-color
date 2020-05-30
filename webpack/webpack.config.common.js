const path = require('path')

const SRC_PATH = path.resolve(__dirname, '../src')
const LIB_PATH = path.resolve(__dirname, '../lib')

const CONFIG = {
  entry: [path.resolve(SRC_PATH, 'index.ts')],
  output: {
    path: LIB_PATH,
    filename: 'index.js',
    library: 'EtherealColor',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts?$/,
        loaders: [
          { loader: 'babel-loader' },
          { loader: 'awesome-typescript-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  optimization: {
    minimize: false,
  },
  plugins: [],
}

module.exports = {
  CONFIG,
  SRC_PATH,
  LIB_PATH,
}
