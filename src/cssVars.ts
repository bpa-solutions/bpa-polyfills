const cssVars = require('css-vars-ponyfill/dist/css-vars-ponyfill')

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
  preserveVars: true,
  silent: false,
  updateDOM: true,
  updateURLs: true,
  watch: true,
})
