const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'scripts'),
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        include: path.resolve(__dirname, 'src'),
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
      filename: path.resolve(__dirname, 'index.html'),
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
};
