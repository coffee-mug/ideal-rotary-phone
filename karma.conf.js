// Use same webpack config, just dropping the entry as it won't be the same for tests.

var webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['tap'],
    files: ['test/index.js'],
    // pass the entry file to webpack for bundling
    preprocessors: {
      'test/index.js': ['webpack'],
    },
    // use the webpack config
    webpack : webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  });
};
