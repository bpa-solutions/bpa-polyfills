const cssVars = require('css-vars-ponyfill/dist/css-vars-ponyfill.min')

cssVars({
  // Targets
  rootElement: document,
  shadowDOM: false,

  // Sources
  include: 'link[rel=stylesheet],style',
  exclude: '',
  variables: {},

  // Options
  onlyLegacy: true,
  preserveStatic: true,
  preserveVars: false,
  silent: false,
  updateDOM: true,
  updateURLs: true,
  watch: false,
})
