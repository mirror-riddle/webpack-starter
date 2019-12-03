const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: paths.srcIndex,
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        verdors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'verdors',
          chunks: 'all',
          priority: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: paths.src,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.src,
        use: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        exclude: /\.module\.css$/,
        include: paths.src,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.(css)$/,
        include: paths.src,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.publicIndex,
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
  ],
  devServer: {
    contentBase: paths.public,
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.tsx', '.ts'],
    modules: [paths.src, paths.nodeModules],
  },
};
