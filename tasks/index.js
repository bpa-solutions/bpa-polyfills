const gulp = require('gulp')

const isDev = process.env.NODE_ENV !== 'production'

const { scripts } = require('./webpack')
const { modernizr } = require('./modernizr')


if (isDev) {
  const { server } = require('./server')
  const { combineHtml, processHtml, watchHtml } = require('./html')

  const html = gulp.series(combineHtml, processHtml)
  const watch = gulp.parallel(watchHtml, server)
  const dev = gulp.series(modernizr, html, watch)
  exports.dev = dev
  exports.html = html
  exports.default = dev
}

const build = gulp.series(modernizr, scripts)

exports.build = build
exports.modernizr = modernizr

