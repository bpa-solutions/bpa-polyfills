const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

const mode = 'production'

process.stdout.write(`mode: production\n`)

let config = {
  mode,

  entry: {
    bundle: './index.ts',
    'bundle.min': './index.ts',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode),
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
}

module.exports = config
