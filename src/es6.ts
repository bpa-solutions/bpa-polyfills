// Polyfill for Object.assign
require('es6-object-assign/auto');

// Type definition for Object.assign
declare interface ObjectConstructor {
    assign(...objects: any[]): any;
}
