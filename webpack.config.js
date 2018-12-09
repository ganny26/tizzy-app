const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  "mode": "development",
  "entry": {
    "app": [
      "@babel/polyfill",
      "./src/index.js"]
  },
  "output": {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash].bundle.js",
    pathinfo: false
  },
  "devServer": {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  "module": {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: { modules: true },
          },
        ],
      },
    ],
  },
  "plugins": [
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
    }),
  ]
}