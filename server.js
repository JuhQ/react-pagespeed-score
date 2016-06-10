'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const ou = require('openurl');

let config = require('./webpack.dev.config');


new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath
}).listen(8080, 'localhost', (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  };

  let url = 'http://localhost:8080/demo/src/index.html';

  console.log('Ready at ' + url);
  
  return ou.open(url);
});