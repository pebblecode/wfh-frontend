'use strict';

const path = require('path');
const util = require('util');
const autoprefixer = require('autoprefixer-core');
const pkg = require('../package.json');

const loaders = require('./loaders');
const plugins = require('./plugins');

const DEBUG = process.env.NODE_ENV === 'development';
const TEST = process.env.NODE_ENV === 'test';

const jsBundle = path.join('js', util.format('[name].%s.js', pkg.version));

const entry = {
  app: ['./index.jsx']
};

if (DEBUG) {
  entry.app.push(
    util.format(
      'webpack-dev-server/client?http://%s:%d',
      pkg.config.devHost,
      pkg.config.devPort
    )
  );
  entry.app.push('webpack/hot/dev-server');
}

const config = {
  context: path.join(__dirname, '../app'),
  cache: DEBUG,
  debug: DEBUG,
  target: 'web',
  devtool: DEBUG || TEST ? 'inline-source-map' : false,
  entry: entry,
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: '/',
    filename: jsBundle,
    pathinfo: false
  },
  module: {
    loaders: loaders
  },
  postcss: [
    autoprefixer
  ],
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(pkg.config.buildDir),
    hot: true,
    noInfo: false,
    inline: true,
    stats: { colors: true }
  }
};

module.exports = config;
