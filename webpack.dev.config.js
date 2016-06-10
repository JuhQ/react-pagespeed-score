'use strict';

const path = require('path');

module.exports = {
  entry: './demo/index',

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: path.join(__dirname, 'demo')
  },

  module: {
    loaders: [
      { 
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        exclude: /(node_modules|bower_components)/,
      }
    ]
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
};