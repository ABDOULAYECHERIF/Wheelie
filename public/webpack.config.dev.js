const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = merge(common, {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './bak.html', // your HTML template
      inject: 'body',
      templateParameters: {
        BREVO_API_KEY: process.env.BREVO_API_KEY,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.BREVO_API_KEY': JSON.stringify(process.env.BREVO_API_KEY),
    }),
  ],
});
