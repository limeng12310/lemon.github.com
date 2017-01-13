var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    home:[
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      'babel-polyfill',
      'whatwg-fetch',
      './src/home/index.js'
    ],
    health:[
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      'babel-polyfill',
      'whatwg-fetch',
      './src/health/index.js'
    ],
    aboutUs:[
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      'babel-polyfill',
      'whatwg-fetch',
      './src/aboutUs/index.js'
    ],
    joinUs:[
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      'babel-polyfill',
      'whatwg-fetch',
      './src/joinUs/index.js'
    ],
    news:[
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      'babel-polyfill',
      'whatwg-fetch',
      './src/news/index.js'
    ],
    details:[
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      'babel-polyfill',
      'whatwg-fetch',
      './src/details/index.js'
    ]
  },
  debug: true,
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].[hash:8].js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '索真基因',
      template: 'src/home/index.ejs',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      title: '关于我们',
      template: 'src/aboutUs/index.ejs',
      filename: 'aboutUs.html',
      chunks: ['aboutUs']
    }),
    new HtmlWebpackPlugin({
      title: '加入我们',
      template: 'src/joinUs/index.ejs',
      filename: 'joinUs.html',
      chunks: ['joinUs']
    }),
    new HtmlWebpackPlugin({
      title: '索真健康',
      template: 'src/health/index.ejs',
      filename: 'health.html',
      chunks: ['health']
    }),
    new HtmlWebpackPlugin({
      title: '新闻',
      template: 'src/news/index.ejs',
      filename: 'news.html',
      chunks: ['news']
    }),
    new HtmlWebpackPlugin({
      title: '新闻详情',
      template: 'src/details/index.ejs',
      filename: 'details.html',
      chunks: ['details']
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.css/,
        loaders: ['style', 'css']
      },
    ]
  }

};