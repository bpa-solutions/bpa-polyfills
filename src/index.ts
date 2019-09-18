/*
 js-polyfills library
*/
require('js-polyfills/polyfill.min')

/*
 load polyfills with Modernizr feature detection
*/
require('./featureDetection')

/*
 load polyfills with bundled feature detection
*/

//#region Libraries
require('better-dom/dist/better-dom.min')
//#endregion Libraries

//#region Polyfills
require('better-dateinput-polyfill/dist/better-dateinput-polyfill.min')
require('./es6')
require('./cssVars')

//#endregion Polyfills

//#region Ready callback
/**
 * Execute a function when the page is ready (similar to jQuery ready function)
 * @param fn Function. The function to execute
 */
const ready = fn => {
  if ((<any>document).attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(() => {
  require('css-polyfills/bin/css-polyfills.min') // CSS Grid Polyfills
})
//#endregion Ready callback
