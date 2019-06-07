const processhtml = require('gulp-processhtml')
const concat = require('gulp-concat')
const { src, dest, watch, series } = require('gulp')

function combineHtml() {
  return src(['tests/*.html', '!tests/index.html'])
    .pipe(concat('bundle.html'))
    .pipe(dest('temp'))
}

function processHtml() {
  return src('src/*.html')
    .pipe(
      processhtml({
        includeBase: 'temp',
      })
    )
    .pipe(concat('index.html'))
    .pipe(dest('tests'))
}

function watchHtml() {
  watch(['tests/*.html', '!tests/index.html'], {}, series(combineHtml, processHtml))
}

module.exports = { combineHtml, processHtml, watchHtml }
