const gulp = require('gulp');

const { scripts } = require('./webpack');
const { server } = require('./server');
const { modernizr } = require('./modernizr');
const { combineHtml, processHtml } = require('./html');

const html = gulp.series( combineHtml, processHtml )
const dev   = gulp.series( modernizr, html, server )
const build = gulp.series( modernizr, scripts )

exports.dev = dev;
exports.build = build;
exports.modernizr = modernizr;
exports.html = html;
exports.default = dev;