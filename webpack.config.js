const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        // react: {
        //   test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        //   name: 'react',
        //   chunks: 'all',
        //   priority: 1,
        // },
        // highlighter: {
        //   test: /[\\/]node_modules[\\/](react-syntax-highlighter)[\\/]/,
        //   name: 'highlighter',
        //   chunks: 'all',
        //   priority: 1,
        // },
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
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    host: '0.0.0.0',
    openPage: 'webpack-starter',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
};
