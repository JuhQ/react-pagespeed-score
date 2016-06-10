'use strict';

const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/demo/dist'
  }
};