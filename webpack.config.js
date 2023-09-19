// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const NodemonPlugin = require('nodemon-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const Dotenv = require('dotenv-webpack');

// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line no-undef
  context: __dirname,
  entry: './src/index.ts',
  resolve: {
    extensions: ['.mjs', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false
  },
  output: {
    libraryTarget: 'commonjs',
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            // eslint-disable-next-line no-undef
            path.resolve(__dirname, 'node_modules'),
            // eslint-disable-next-line no-undef
            path.resolve(__dirname, '.serverless'),
            // eslint-disable-next-line no-undef
            path.resolve(__dirname, 'build'),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
    new CleanWebpackPlugin({
            // eslint-disable-next-line no-undef
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'build/**')],
    }),
    new Dotenv(),
  ],
};