
/*
 js-polyfills library
*/
require('js-polyfills/polyfill');

/*
 load polyfills with Modernizr feature detection
*/
require("./featureDetection");

/*
 load polyfills with bundled feature detection
*/

//#region Libraries
require('better-dom/dist/better-dom');
//#endregion Libraries

//#region Polyfills
require('better-dateinput-polyfill/dist/better-dateinput-polyfill');
require('./es6');
//#endregion Polyfills

//#region Ready callback
/**
 * Execute a function when the page is ready (similar to jQuery ready function)
 * @param fn Function. The function to execute
 */
function ready(fn) {
    if ((<any>document).attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {

});
//#endregion Ready callback