var config = require('./webpack.config.js');
var webpack = require('webpack');

config.output.filename = 'app.js'
config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("development")
    }
  })
);

module.exports = config;
