var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');
var NODE_MODULES = path.resolve(__dirname, 'node_modules');

var config = {
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".jsx", ".js", ".json", ".css", ".scss"]
  },
  module : {

    rules: [
      {
        test: /\.css?/,
        include : [APP_DIR,NODE_MODULES],
        loaders: [ 'style-loader', 'css-loader' ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.scss?/,
        include : APP_DIR,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  entry: ['whatwg-fetch',APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
