/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

// 用于复制文件
const copyWebpackPlugin = new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../public'),
    to: path.resolve(__dirname, '../dist'),
    ignore: ['index.html'],
  }
]);

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].bundle.js',
    clean: true, // clean the old files when build everytimes. 
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '~': path.resolve(__dirname, '../node_modules'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    copyWebpackPlugin,
  ],
};
