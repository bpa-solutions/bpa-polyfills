const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = 'development'

process.stdout.write(`mode: development\n`)

let config = {
  mode,
  entry: {
    bundle: ['./index.ts', 'webpack/hot/dev-server', 'webpack-hot-middleware/client'],
  },
  devtool: 'source-map',
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode),
      },
    }),
  ],
}

module.exports = config
