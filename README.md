# BPA Polyfills

## A collection of polyfills for Edge in SharePoint SPFx environment

[![npm version](https://badge.fury.io/js/%40bpa-solutions%2Fbpa-polyfills.svg)](https://badge.fury.io/js/%40bpa-solutions%2Fbpa-polyfills)
[![Dependency Status](https://david-dm.org/bpa-solutions/bpa-polyfills.svg)](https://david-dm.org/bpa-solutions/bpa-polyfills)
[![Dependency Status](https://david-dm.org/bpa-solutions/bpa-polyfills/dev-status.svg)](https://david-dm.org/bpa-solutions/bpa-polyfills#info=devDependencies)
CI Build: [![CircleCI](https://circleci.com/gh/bpa-solutions/bpa-polyfills.svg?style=svg)](https://circleci.com/gh/bpa-solutions/bpa-polyfills)

---

### Build:

The build has two pipeline :

- A dev process, that will compile the file in "development" mode, and launch a BrowserSync server on localhost:3000
- A prod process, that will only compile files and generate a build output with WebPack

#### Tasks

- **npm run dev** : build the project in development mode
- **npm run build** : build the project in production mode
- **gulp --gulpfile tasks html** : compile all the html files from test into a single bundle.html file. Used in development mode
- **gulp --gulpfile tasks modernizr** : generate a custom Modernizr file with only the rules used in the sources files

### Use in SPFx / React environment

#### Install the package

```bash
npm install @bpa-solutions/bpa-polyfills
```

OR

```bash
yarn add @bpa-solutions/bpa-polyfills
```

#### Add the dependency

In your main WebPart file, add the following line:

```javascript
import '@bpa-solutions/bpa-polyfills'
```

### Support

This package is intended to be incorporated in [SharePoint SPFx Client-Side WebPart](https://github.com/SharePoint/sp-dev-fx-webparts) with React. It won't cover polyfill already deployed in Microsoft's build tool, like ES6 Promise

#### Polyfills list

**[Changelog](CHANGELOG.md)**

**_Covered_**

JS:

- ES5
- ES6
- E2016 Array Includes
- ES2017 Object
- ES2017 String

HTML:

- input type="date"
- details
- summary

CSS:

- CSS Custom Properties

**_Missing / ToDo_**

Priority 1

- input type="time" / input type="datetime"
- css text-orientation
- css image-set
- custom elements
- dialog
- download attribute
- form attribute
- html template
- push api
- shadow dom

Priority 2

- css calc
- css flex
- viewport units vw, vh, vmin and vmax
- html5 form features
- html5 semantic elements
- device orientation & device motion
- dom matches()
- data uri
- constraint validation api
- custom event
- file api
- filereader api
- screen orientation
- autocomplete attribute
