import { ready } from './ready'

declare var Modernizr: ModernizrStatic

// Load a custom build of Mozernizr. This build is generated by the Gulp task "modernizr"
require('./vendor/modernizr/modernizr-custom')

const isDev = process.env.NODE_ENV === 'development'

/**
 * Execute a function if a feature is not supported by the brower
 * @param featureName String. Feature name, only used in dev mode for console log
 * @param featureDetection Boolean. Indicate if the current feature is supported by the browser or not
 * @param callbackPolyfills Function. Function that is called if the browser doesn't support the feature
 */
export const support = (featureName: string, featureDetection: boolean, callbackPolyfills: () => void) => {
  if (!featureDetection) {
    if (isDev) {
      console.warn(`BPA-Polyfill: ${featureName} is not supported`)
    }
    callbackPolyfills()
  } else {
    if (isDev) {
      console.info(`BPA-Polyfill: ${featureName} is supported`)
    }
  }
}

// Check for <input type="color" /> support
support('Color input type', Modernizr.inputtypes.color, () => {
  // JSColor has been edited to be fitted in this bundle
  require('./vendor/jo/JSColor/jscolor')
})

// Check for <details> and <summary> support
support('Details', Modernizr.details, () => {
  require('details-element-polyfill')
})

// Check for <img srcset="..."> and <picture> support
support('Srcset & Pictures', Modernizr.srcset && Modernizr.picture, () => {
  require('respimage')
})

// Check for Intersection Observer
support('Intersection Observer', typeof IntersectionObserver !== 'undefined', () => {
  require('intersection-observer')
})

support('CSS Grid', Modernizr.cssgrid, () => {
  ready(() => {
    require('css-polyfills/bin/css-polyfills') // CSS Grid Polyfills
  })
})
