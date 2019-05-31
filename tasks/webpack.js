const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const modeConfig = isProd ? require('./webpack.prod') : require('./webpack.dev');

let config = {
    ...modeConfig,
    module: {
      rules: [
        {
          test: /\.ts$/,
          use:'ts-loader',
          exclude: /node_modules/
        },
        /*{
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        },*/
        {
          test: /\.css$/,
          use: [
          'style-loader',
          'css-loader'
        ]},
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: 'file-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist')
    },
    context: path.resolve(__dirname, '../src')
}

function scripts() {

    return new Promise(resolve => webpack(config, (err, stats) => {

        if (err) console.log('Webpack', err)

        console.log(stats.toString({ /* stats options */ }))

        resolve()
    }))
}

module.exports = { config, scripts }