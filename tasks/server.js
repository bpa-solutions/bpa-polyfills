const gulp = require('gulp')
const Browser = require('browser-sync')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const { combineHtml, processHtml } = require('./html')

const { config: webpackConfig } = require('./webpack')

const browser = Browser.create()
const bundler = webpack(webpackConfig)

function server() {
  let config = {
    server: ['dist', 'tests'],
    middleware: [
      webpackDevMiddleware(bundler, {
        /* options */
      }),
      webpackHotMiddleware(bundler),
    ],
  }

  browser.init(config)

  gulp.watch('src/*.*').on('change', () => browser.reload())
  gulp.watch('tests/index.html').on('change', () => browser.reload())
}

exports.server = server
