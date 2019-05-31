const processhtml = require('gulp-processhtml');
const concat = require('gulp-concat');
const { src, dest } = require('gulp');

function combineHtml() {
    return src(['tests/*.html', '!tests/bundle.html'])
        .pipe(concat('bundle.html'))
        .pipe(dest('tests'));
}

function processHtml() {
    return src('src/*.html')
        .pipe(processhtml({
            'includeBase': 'tests'
        }))
        .pipe(dest('dist'));
}

module.exports = { combineHtml, processHtml }