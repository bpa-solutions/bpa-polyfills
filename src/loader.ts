const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  console.info('Loading @bpa-polyfills');
}

/*
 js-polyfills library
*/
require('js-polyfills/polyfill')

/*
 load polyfills with Modernizr feature detection
*/
require('./featureDetection')

/*
 load polyfills with bundled feature detection
*/

//#region Libraries
require('better-dom/dist/better-dom')
//#endregion Libraries

//#region Polyfills
require('better-dateinput-polyfill/dist/better-dateinput-polyfill')
require('./es6')
require('./cssVars')

//#endregion Polyfills
