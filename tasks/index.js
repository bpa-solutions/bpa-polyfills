const gulp = require('gulp')

const isDev = process.env.NODE_ENV !== 'production'

const { scripts } = require('./webpack')
const { modernizr } = require('./modernizr')
const { combineHtml, processHtml, watchHtml } = require('./html')

if (isDev) {
  const { server } = require('./server')
  const watch = gulp.parallel(watchHtml, server)
  const dev = gulp.series(modernizr, html, watch)
  exports.dev = dev
}


const html = gulp.series(combineHtml, processHtml)
const build = gulp.series(modernizr, scripts)

exports.build = build
exports.modernizr = modernizr
exports.html = html
exports.default = dev
