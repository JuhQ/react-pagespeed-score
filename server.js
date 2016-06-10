'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const openUrl = require('openurl');

let config = require('./webpack.dev.config');


new webpackDevServer(webpack(config), {
  contentBase: './demo',
  hot: true,
  debug: true
}).listen(8080, 'localhost', (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  };

  let url = 'http://localhost:8080';

  console.log('Ready at ' + url);
  
  return openUrl.open(url);
});