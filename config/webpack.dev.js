const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: paths.dist,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
