const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  console.info('Loading @bpa-polyfills');
}

/*
 js-polyfills library
*/
import 'js-polyfills/polyfill'

/*
 load polyfills with Modernizr feature detection
*/
import './featureDetection'

/*
 load polyfills with bundled feature detection
*/

//#region Libraries
require('better-dom/dist/better-dom')
//#endregion Libraries

//#region Polyfills
require('better-dateinput-polyfill/dist/better-dateinput-polyfill')
import './es6'
import './cssVars'

//#endregion Polyfills
