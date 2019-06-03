# BPA Polyfills
## A collection of polyfills for IE 11 in SharePoint SPFx environment

[![npm version](https://badge.fury.io/js/%40bpa-solutions%2Fbpa-polyfills.svg)](https://badge.fury.io/js/%40bpa-solutions%2Fbpa-polyfills)
[![Dependency Status](https://david-dm.org/bpa-solutions/bpa-polyfills.svg)](https://david-dm.org/bpa-solutions/bpa-polyfills)
[![Dependency Status](https://david-dm.org/bpa-solutions/bpa-polyfills/dev-status.svg)](https://david-dm.org/bpa-solutions/bpa-polyfills#info=devDependencies)
-----

### Build:

The build has two pipeline :
* A dev process, that will compile the file in "development" mode, and launch a BrowserSync server on localhost:3000
* A prod process, that will only compile files and generate a build output with WebPack

#### Tasks

* __npm run dev__ : build the project in development mode
* __npm run build__ : build the project in production mode
* __gulp --gulpfile tasks html__ : compile all the html files from test into a single bundle.html file. Used in development mode
* __gulp --gulpfile tasks modernizr__ : generate a custom Modernizr file with only the rules used in the sources files

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
import '@bpa-solutions/bpa-polyfills';
```

### Support
This package is intended to be incorporated in [SharePoint SPFx Client-Side WebPart](https://github.com/SharePoint/sp-dev-fx-webparts) with React. It won't cover polyfill already deployed in Microsoft's build tool, like ES6 Promise