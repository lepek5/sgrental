const path = require('path');
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
  plugins: [new HtmlWebpackPlugin({
    template: "public/index.html",
    hash: true,
    filename: "index.html"
  })],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    port: 4000,
    open: true,
    hot: true
  },
  output: {
    filename: 'sgrental.js',
    path: path.resolve(__dirname, 'dist'),
  },
};