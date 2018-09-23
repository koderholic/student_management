
const base = require("./webpack.base.config")
const merge = require("webpack-merge")
const webpack = require("webpack")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('.././config/prod.config')

// Create multiple instances
const extractCSS = new ExtractTextPlugin('css/app.css');

module.exports = merge(base, {
  // This contains additional production settings
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "vue-style-loader",
          use: [
            'css-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    extractCSS,
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process': {
        env: config
      }
    })
  ]
})
