
const base = require("./webpack.base.config")
const merge = require("webpack-merge")
const webpack = require("webpack")
const config = require('.././config/dev.config')

module.exports = merge(base, {
  // This contains additional production settings
  plugins: [
    new webpack.DefinePlugin({
      "process": {
        env: config
      }
    })
  ],
  devServer: {
    port: 9090,
    overlay: true,
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '../index.html' }
      ]
    }
  }

})
