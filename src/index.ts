const BPA_POLYFILL_FLAG = 'BPA_POLYFILL_FLAG';

if (window[BPA_POLYFILL_FLAG] === undefined) {
  require('./loader');
  window[BPA_POLYFILL_FLAG] = true;
}