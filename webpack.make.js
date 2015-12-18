const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => {
  const BUILD = !!options.BUILD;

  const config = {};
  config.entry = './src/index.js';
  config.output = {
    path: __dirname + '/public',
    publicPath: BUILD ? '/' : 'http://localhost:8080/',
    filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
  };
  config.devtool = BUILD ? 'source-map' : 'eval';
  config.module = {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.html$/,
        loader: 'raw'
      }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions')
    }]
  };
  config.plugins = [
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ];
  config.devServer = {
    contentBase: './public',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }

  if (BUILD) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    )
  }

  return config;
};