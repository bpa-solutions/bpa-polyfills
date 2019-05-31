declare var Modernizr: ModernizrStatic;
require('./vendor/modernizr/modernizr-custom');

const isDev = process.env.NODE_ENV === 'development';

export const support = (featureName: string, featureDetection: boolean, callbackPolyfills: () => void) => {
    if (!featureDetection) {
        if (isDev) {
            console.warn(`BPA-Polyfill: ${featureName} is not supported`);
        }
        callbackPolyfills();
    } else {
        if (isDev) {
            console.info(`BPA-Polyfill: ${featureName} is supported`);
        }
    }
};

support('Color input type', Modernizr.inputtypes.color, () => { require('./vendor/jo/JSColor/jscolor'); });

support('Details', Modernizr.details, () => {
    require('details-element-polyfill');
});

support('Srcset & Pictures', Modernizr.srcset && Modernizr.picture, () => {
    require('respimage');
});