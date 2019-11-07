var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
module ={
    test: /\.html$/,
    use: {
      loader: 'html-loader',
      options: {
        attrs: [':data-src']
      }
    }
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist'])
]
};