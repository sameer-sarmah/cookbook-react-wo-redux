const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractCSS= require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
      main: "./src/index.js"
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.css$/,
          //use: ['style-loader','css-loader'],
          use :ExtractCSS.extract({	
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }}),
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: ['file-loader'],
          include: path.join(__dirname, 'src')
        }
      ]
    },
    resolve: {
      extensions: [ ".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        inject: 'body',
        chunks: ['common','main'],
        filename: 'index.html'
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ["common"]
      }),
      new ExtractCSS({
        filename: "[name].css"
      })
      //,new Uglify()
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8088,
      hot: true,
      historyApiFallback: true,
      publicPath: '/'
    }
  };
  