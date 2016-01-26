var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'www');

module.exports = {
  entry: {
    index: 'index.js'
  },

  output: {
    path: distPath,
    publicPath: '',
    filename: 'app-[hash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html',
      env: 'development'
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ],

  // Enable loading modules relatively to root (without the ../../ prefix).
  resolve: {
    root: [srcPath]
  },

  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        "presets" : ["es2015", "react"]
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(ttf|eot|svg|otf|png|jpg|woff|woff2)$/,
      loader: 'file'
    }]
  },

  devServer: {
    contentBase: './www',
    colors: true,
    noInfo: true,
    inline: true,
    historyApiFallback: true
  },

  devtool: '#inline-source-map'
};
