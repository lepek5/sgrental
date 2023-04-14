const path = require('path');
const dotenv = require("dotenv");
const Dotenv = require("dotenv-webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true,
      filename: "index.html"
    }),
    new Dotenv({
      path: ".env"
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: "source-map",
  devServer: {
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  output: {
    filename: 'sgrental.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
};