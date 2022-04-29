const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
      path: path.join(CURRENT_WORKING_DIR , '/dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
          use: 'file-loader'
        }
      ]
    }, 
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    // https://stackoverflow.com/questions/48047150/chrome-extension-compiled-by-webpack-throws-unsafe-eval-error
    // A warning related to eval() by react hot loader still exists. But react hot loader seems to be okay.
    devtool: 'cheap-module-source-map'
 }

module.exports = config