const merge = require('webpack-merge');
const paths = require('./paths');
const prod = require('./webpack.prod');

module.exports = merge(prod, {
  output: {
    path: paths.demo,
    publicPath: '/webpack-starter/demo/',
  },
});
