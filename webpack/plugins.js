'use strict';
const path = require('path');
const util = require('util');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const pkg = require('../package.json');

const DEBUG = process.env.NODE_ENV === 'development';
const TEST = process.env.NODE_ENV === 'test';

const cssBundle = path.join('css', util.format('[name].%s.css', pkg.version));

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin()
];
if (DEBUG) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      API_URL: JSON.stringify(process.env.API_URL) || JSON.stringify('http://localhost:3000')
    }),
    new webpack.HotModuleReplacementPlugin()
  );
} else if (!TEST) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      API_URL: JSON.stringify(process.env.API_URL) || JSON.stringify('http://localhost:3000')
    }),
    new ExtractTextPlugin(cssBundle, {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = plugins;
