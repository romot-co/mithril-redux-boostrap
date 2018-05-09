const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const base = require('./webpack.config.base')

module.exports = merge(base, {
  // プロダクション用設定
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader?minimize'],
      },
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint:{
          configFile: __dirname + '/eslint.production.js',
          useEslintrc: false,
          failOnWarning: true,
          failOnError: true,
        },
      },
    }),
  ],
})
