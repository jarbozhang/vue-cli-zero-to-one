const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title: '从0搭建vue cli',
      favicon: path.resolve(__dirname, './public/favicon.ico'),
      templateParameters: {BASE_URL: '/'}
    }),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: [{loader: 'babel-loader', options: {presets: [['@babel/env', {'useBuiltIns': 'usage', 'corejs': 3}]]}}, 'eslint-loader']},
      { test: /\.css$/, use: ['style-loader', 'css-loader']},  //从右向左解析
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.(jpe?g|png|gif|ico)$/i, use: [{
        loader: 'url-loader', options: { limit: 10240, esModule: false, fallback: {
          loader: 'file-loader', options: { name: 'img/[name].[hash:8].[ext]' }
        }}
      }]}
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
}
