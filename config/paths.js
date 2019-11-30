const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const paths = {
  src: resolveApp('src'),
  srcIndex: resolveApp('src/index.jsx'),
  public: resolveApp('public'),
  publicIndex: resolveApp('public/index.html'),
  nodeModules: resolveApp('node_modules'),
  dist: resolveApp('dist'),
  build: resolveApp('build'),
  demo: resolveApp('demo'),
};

module.exports = paths;
