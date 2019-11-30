const merge = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: paths.build,
    filename: '[contenthash].min.js',
  },
});
