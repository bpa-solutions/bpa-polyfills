const gulp = require('gulp')

const { scripts } = require('./webpack')
const { server } = require('./server')
const { modernizr } = require('./modernizr')
const { combineHtml, processHtml, watchHtml } = require('./html')

const watch = gulp.parallel(watchHtml, server)
const html = gulp.series(combineHtml, processHtml)
const dev = gulp.series(modernizr, html, watch)
const build = gulp.series(modernizr, scripts)

exports.dev = dev
exports.build = build
exports.modernizr = modernizr
exports.html = html
exports.default = dev
