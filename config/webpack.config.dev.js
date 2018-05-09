const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = merge(base, {
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
        use: ['style-loader','css-loader?sourceMap'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: __dirname + '/eslint.dev.js',
          useEslintrc: false,
          failOnWarning: false,
          failOnError: true,
          quiet: false,
        },
      },
    }),
  ],
  devServer: {
    contentBase: process.cwd() + '/app/dist',
    port: 7000,
    hot: true,
    host: '0.0.0.0',
    progress: true,
  },
})
