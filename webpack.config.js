'use strict';

var webpack = require('webpack');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var publicPath = 'file:///D:/PROJECTS/mithril-project-guide/dist/';
var outputPath = 'dist/';

module.exports = {
  entry: {
    out: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: 'project.min.js',
    chunkFilename: '[chunkhash].project.min.js',
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: [
            'syntax-dynamic-import',
            ['transform-react-jsx', {
              'pragma': 'm'
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }
    ],
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ]
  },
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: 'used-twice',
      minChunks(module, count) {
        return count >= 2;
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: true
    //   },
    //   output: {
    //     comments: false
    //   }
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ]
};
