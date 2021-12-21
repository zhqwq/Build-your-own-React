const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.sass$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
          },
          {
            test: /.jsx$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
              },
            },
          },
          {
            test: /.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          }
        ]
    },

    plugins :[new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
    })],

    mode: 'development',

    devServer: {
      port: 8000
    }

}