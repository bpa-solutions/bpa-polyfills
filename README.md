# BPA Polyfills
## A collection of polyfills for IE 11 in SharePoint SPFx environment

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