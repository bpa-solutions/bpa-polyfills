const modernizr = require('gulp-modernizr');
const { src, dest } = require('gulp');

function generateModernizr() {
    return src('src/**/*.ts')
        .pipe(modernizr('modernizr-custom.js'))
        .pipe(dest('src/vendor/modernizr/'));
}

exports.modernizr = generateModernizr;