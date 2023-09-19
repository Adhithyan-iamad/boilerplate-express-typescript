// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { merge } = require('webpack-merge');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const baseConfig = require('./webpack.config.js');

// import { merge } from 'webpack-merge';
// import path from 'path';
// import { webpack } from './webpack.config.js';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// eslint-disable-next-line no-undef
module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  mode: "development",
  devServer: {
    inline: true,
    // eslint-disable-next-line no-undef
    contentBase: path.resolve(__dirname, 'src'),
    port: '5000',
  },
});
