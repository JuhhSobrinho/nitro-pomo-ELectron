const rules = require('./webpack.rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules, // aqui entra o array exportado do rules.js
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
