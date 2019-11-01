/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var BPA_POLYFILL_FLAG = 'BPA_POLYFILL_FLAG';
if (window[BPA_POLYFILL_FLAG] === undefined) {
    __webpack_require__(2);
    window[BPA_POLYFILL_FLAG] = true;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isDev = "production" === 'development';
if (isDev) {
    console.info('Loading @bpa-polyfills');
}
/*
 js-polyfills library
*/
__webpack_require__(3);
/*
 load polyfills with Modernizr feature detection
*/
__webpack_require__(29);
/*
 load polyfills with bundled feature detection
*/
//#region Libraries
__webpack_require__(22);
//#endregion Libraries
//#region Polyfills
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(27);
//#endregion Polyfills


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Composited file - DO NOT EDIT
//----------------------------------------------------------------------
//
// ECMAScript 5 Polyfills
//
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// ES5 15.2 Object Objects
//----------------------------------------------------------------------

//
// ES5 15.2.3 Properties of the Object Constructor
//

// ES5 15.2.3.2 Object.getPrototypeOf ( O )
// From http://ejohn.org/blog/objectgetprototypeof/
// NOTE: won't work for typical function T() {}; T.prototype = {}; new T; case
// since the constructor property is destroyed.
if (!Object.getPrototypeOf) {
  Object.getPrototypeOf = function (o) {
    if (o !== Object(o)) { throw TypeError("Object.getPrototypeOf called on non-object"); }
    return o.__proto__ || o.constructor.prototype || Object.prototype;
  };
}

//    // ES5 15.2.3.3 Object.getOwnPropertyDescriptor ( O, P )
//    if (typeof Object.getOwnPropertyDescriptor !== "function") {
//        Object.getOwnPropertyDescriptor = function (o, name) {
//            if (o !== Object(o)) { throw TypeError(); }
//            if (o.hasOwnProperty(name)) {
//                return {
//                    value: o[name],
//                    enumerable: true,
//                    writable: true,
//                    configurable: true
//                };
//            }
//        };
//    }

// ES5 15.2.3.4 Object.getOwnPropertyNames ( O )
if (typeof Object.getOwnPropertyNames !== "function") {
  Object.getOwnPropertyNames = function (o) {
    if (o !== Object(o)) { throw TypeError("Object.getOwnPropertyNames called on non-object"); }
    var props = [], p;
    for (p in o) {
      if (Object.prototype.hasOwnProperty.call(o, p)) {
        props.push(p);
      }
    }
    return props;
  };
}

// ES5 15.2.3.5 Object.create ( O [, Properties] )
if (typeof Object.create !== "function") {
  Object.create = function (prototype, properties) {
    if (typeof prototype !== "object") { throw TypeError(); }
    function Ctor() {}
    Ctor.prototype = prototype;
    var o = new Ctor();
    if (prototype) { o.constructor = Ctor; }
    if (properties !== undefined) {
      if (properties !== Object(properties)) { throw TypeError(); }
      Object.defineProperties(o, properties);
    }
    return o;
  };
}

// ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
// Partial support for most common case - getters, setters, and values
(function() {
  if (!Object.defineProperty ||
      !(function () { try { Object.defineProperty({}, 'x', {}); return true; } catch (e) { return false; } } ())) {
    var orig = Object.defineProperty;
    Object.defineProperty = function (o, prop, desc) {
      // In IE8 try built-in implementation for defining properties on DOM prototypes.
      if (orig) { try { return orig(o, prop, desc); } catch (e) {} }

      if (o !== Object(o)) { throw TypeError("Object.defineProperty called on non-object"); }
      if (Object.prototype.__defineGetter__ && ('get' in desc)) {
        Object.prototype.__defineGetter__.call(o, prop, desc.get);
      }
      if (Object.prototype.__defineSetter__ && ('set' in desc)) {
        Object.prototype.__defineSetter__.call(o, prop, desc.set);
      }
      if ('value' in desc) {
        o[prop] = desc.value;
      }
      return o;
    };
  }
}());

// ES 15.2.3.7 Object.defineProperties ( O, Properties )
if (typeof Object.defineProperties !== "function") {
  Object.defineProperties = function (o, properties) {
    if (o !== Object(o)) { throw TypeError("Object.defineProperties called on non-object"); }
    var name;
    for (name in properties) {
      if (Object.prototype.hasOwnProperty.call(properties, name)) {
        Object.defineProperty(o, name, properties[name]);
      }
    }
    return o;
  };
}


// ES5 15.2.3.14 Object.keys ( O )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = function (o) {
    if (o !== Object(o)) { throw TypeError('Object.keys called on non-object'); }
    var ret = [], p;
    for (p in o) {
      if (Object.prototype.hasOwnProperty.call(o, p)) {
        ret.push(p);
      }
    }
    return ret;
  };
}

//----------------------------------------------------------------------
// ES5 15.3 Function Objects
//----------------------------------------------------------------------

//
// ES5 15.3.4 Properties of the Function Prototype Object
//

// ES5 15.3.4.5 Function.prototype.bind ( thisArg [, arg1 [, arg2, ... ]] )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function (o) {
    if (typeof this !== 'function') { throw TypeError("Bind must be called on a function"); }

    var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        nop = function() {},
        bound = function () {
          return self.apply(this instanceof nop ? this : o,
                            args.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype)
      nop.prototype = this.prototype;
    bound.prototype = new nop();
    return bound;
  };
}


//----------------------------------------------------------------------
// ES5 15.4 Array Objects
//----------------------------------------------------------------------

//
// ES5 15.4.3 Properties of the Array Constructor
//


// ES5 15.4.3.2 Array.isArray ( arg )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
Array.isArray = Array.isArray || function (o) { return Boolean(o && Object.prototype.toString.call(Object(o)) === '[object Array]'); };


//
// ES5 15.4.4 Properties of the Array Prototype Object
//

// ES5 15.4.4.14 Array.prototype.indexOf ( searchElement [ , fromIndex ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (len === 0) { return -1; }

    var n = 0;
    if (arguments.length > 0) {
      n = Number(arguments[1]);
      if (isNaN(n)) {
        n = 0;
      } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    if (n >= len) { return -1; }

    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

    for (; k < len; k++) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}

// ES5 15.4.4.15 Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (len === 0) { return -1; }

    var n = len;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n !== n) {
        n = 0;
      } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);

    for (; k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}

// ES5 15.4.4.16 Array.prototype.every ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every) {
  Array.prototype.every = function (fun /*, thisp */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw TypeError(); }

    var thisp = arguments[1], i;
    for (i = 0; i < len; i++) {
      if (i in t && !fun.call(thisp, t[i], i, t)) {
        return false;
      }
    }

    return true;
  };
}

// ES5 15.4.4.17 Array.prototype.some ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
  Array.prototype.some = function (fun /*, thisp */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw TypeError(); }

    var thisp = arguments[1], i;
    for (i = 0; i < len; i++) {
      if (i in t && fun.call(thisp, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}

// ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fun /*, thisp */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw TypeError(); }

    var thisp = arguments[1], i;
    for (i = 0; i < len; i++) {
      if (i in t) {
        fun.call(thisp, t[i], i, t);
      }
    }
  };
}


// ES5 15.4.4.19 Array.prototype.map ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Map
if (!Array.prototype.map) {
  Array.prototype.map = function (fun /*, thisp */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw TypeError(); }

    var res = []; res.length = len;
    var thisp = arguments[1], i;
    for (i = 0; i < len; i++) {
      if (i in t) {
        res[i] = fun.call(thisp, t[i], i, t);
      }
    }

    return res;
  };
}

// ES5 15.4.4.20 Array.prototype.filter ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Filter
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fun /*, thisp */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw TypeError(); }

    var res = [];
    var thisp = arguments[1], i;
    for (i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}


// ES5 15.4.4.21 Array.prototype.reduce ( callbackfn [ , initialValue ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Reduce
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (fun /*, initialValue */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw TypeError(); }

    // no value to return if no initial value and an empty array
    if (len === 0 && arguments.length === 1) { throw TypeError(); }

    var k = 0;
    var accumulator;
    if (arguments.length >= 2) {
      accumulator = arguments[1];
    } else {
      do {
        if (k in t) {
          accumulator = t[k++];
          break;
        }

        // if array contains no values, no initial value to return
        if (++k >= len) { throw TypeError(); }
      }
      while (true);
    }

    while (k < len) {
      if (k in t) {
        accumulator = fun.call(undefined, accumulator, t[k], k, t);
      }
      k++;
    }

    return accumulator;
  };
}


// ES5 15.4.4.22 Array.prototype.reduceRight ( callbackfn [, initialValue ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/ReduceRight
if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (callbackfn /*, initialValue */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof callbackfn !== "function") { throw TypeError(); }

    // no value to return if no initial value, empty array
    if (len === 0 && arguments.length === 1) { throw TypeError(); }

    var k = len - 1;
    var accumulator;
    if (arguments.length >= 2) {
      accumulator = arguments[1];
    } else {
      do {
        if (k in this) {
          accumulator = this[k--];
          break;
        }

        // if array contains no values, no initial value to return
        if (--k < 0) { throw TypeError(); }
      }
      while (true);
    }

    while (k >= 0) {
      if (k in t) {
        accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
      }
      k--;
    }

    return accumulator;
  };
}


//----------------------------------------------------------------------
// ES5 15.5 String Objects
//----------------------------------------------------------------------

//
// ES5 15.5.4 Properties of the String Prototype Object
//


// ES5 15.5.4.20 String.prototype.trim()
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return String(this).replace(/^\s+/, '').replace(/\s+$/, '');
  };
}



//----------------------------------------------------------------------
// ES5 15.9 Date Objects
//----------------------------------------------------------------------


//
// ES 15.9.4 Properties of the Date Constructor
//

// ES5 15.9.4.4 Date.now ( )
// From https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/now
if (!Date.now) {
  Date.now = function now() {
    return Number(new Date());
  };
}


//
// ES5 15.9.5 Properties of the Date Prototype Object
//

// ES5 15.9.4.43 Date.prototype.toISOString ( )
// Inspired by http://www.json.org/json2.js
if (!Date.prototype.toISOString) {
  Date.prototype.toISOString = function () {
    function pad2(n) { return ('00' + n).slice(-2); }
    function pad3(n) { return ('000' + n).slice(-3); }

    return this.getUTCFullYear() + '-' +
      pad2(this.getUTCMonth() + 1) + '-' +
      pad2(this.getUTCDate()) + 'T' +
      pad2(this.getUTCHours()) + ':' +
      pad2(this.getUTCMinutes()) + ':' +
      pad2(this.getUTCSeconds()) + '.' +
      pad3(this.getUTCMilliseconds()) + 'Z';
  };
}
//----------------------------------------------------------------------
//
// ECMAScript 2015 Polyfills
//
//----------------------------------------------------------------------

(function (global) {
  "use strict";

  // Set this to always override native implementations, for testing
  // the polyfill in browsers with partial/full ES2015 support.
  var OVERRIDE_NATIVE_FOR_TESTING = false;

  var undefined = (void 0); // Paranoia

  // Helpers

  function strict(o) {
    return o === global ? undefined : o;
  }

  function isSymbol(s) {
    return (typeof s === 'symbol') || ('Symbol' in global && s instanceof global.Symbol);
  }

  function getPropertyDescriptor(target, name) {
    var desc = Object.getOwnPropertyDescriptor(target, name);
    var proto = Object.getPrototypeOf(target);
    while (!desc && proto) {
      desc = Object.getOwnPropertyDescriptor(proto, name);
      proto = Object.getPrototypeOf(proto);
    }
    return desc;
  }

  var enqueue = (function(nativePromise, nativeSetImmediate) {
    if (nativePromise)
      return function(job) { nativePromise.resolve().then(function() { job(); }); };
    if (nativeSetImmediate)
      return function(job) { nativeSetImmediate(job); };
    return function(job) { setTimeout(job, 0); };
  }(global['Promise'], global['setImmediate']));

  function define(o, p, v, override) {
    if (p in o && !override && !OVERRIDE_NATIVE_FOR_TESTING)
      return;

    if (typeof v === 'function') {
      // Sanity check that functions are appropriately named (where possible)
      console.assert(isSymbol(p) || !('name' in v) || v.name === p || v.name === p + '_', 'Expected function name "' + p.toString() + '", was "' + v.name + '"');
      Object.defineProperty(o, p, {
        value: v,
        configurable: true,
        enumerable: false,
        writable: true
      });
    } else {
      Object.defineProperty(o, p, {
        value: v,
        configurable: false,
        enumerable: false,
        writable: false
      });
    }
  }

  function set_internal(o, p, v) {
    Object.defineProperty(o, p, {
      value: v,
      configurable: false,
      enumerable: false,
      writable: true
    });
  }

  // Snapshot intrinsic functions
  var $isNaN = global.isNaN,
      $parseInt = global.parseInt,
      $parseFloat = global.parseFloat;

  var E = Math.E,
      LOG10E = Math.LOG10E,
      LOG2E = Math.LOG2E,
      abs = Math.abs,
      ceil = Math.ceil,
      exp = Math.exp,
      floor = Math.floor,
      log = Math.log,
      max = Math.max,
      min = Math.min,
      pow = Math.pow,
      random = Math.random,
      sqrt = Math.sqrt;

  var orig_match = String.prototype.match,
      orig_replace = String.prototype.replace,
      orig_search = String.prototype.search,
      orig_split = String.prototype.split;

  // These are used for implementing the polyfills, but not exported.

  // Inspired by https://gist.github.com/1638059
  /** @constructor */
  function EphemeronTable() {
    var secretKey = ObjectCreate(null);

    function conceal(o) {
      var oValueOf = o.valueOf, secrets = ObjectCreate(null);
      Object.defineProperty(o, 'valueOf', {
          value: (function(secretKey) {
            return function (k) {
              return (k === secretKey) ? secrets : oValueOf.apply(o, arguments);
            };
          }(secretKey)),
        configurable: true,
        writeable: true,
        enumerable: false
        });
      return secrets;
    }

    function reveal(o) {
      var v = typeof o.valueOf === 'function' && o.valueOf(secretKey);
      return v === o ? null : v;
    }

    return {
      clear: function() {
        secretKey = ObjectCreate(null);
      },
      remove: function(key) {
        var secrets = reveal(key);
        if (secrets && HasOwnProperty(secrets, 'value')) {
          delete secrets.value;
          return true;
        }
        return false;
      },
      get: function(key, defaultValue) {
        var secrets = reveal(key);
        return (secrets && HasOwnProperty(secrets, 'value')) ? secrets.value : defaultValue;
      },
      has: function(key) {
        var secrets = reveal(key);
        return Boolean(secrets && HasOwnProperty(secrets, 'value'));
      },
      set: function(key, value) {
        var secrets = reveal(key) || conceal(key);
        secrets.value = value;
      }
    };
  }

  var empty = Object.create(null);

  //----------------------------------------------------------------------
  //
  // ECMAScript 2015
  // http://www.ecma-international.org/ecma-262/6.0/
  //
  //----------------------------------------------------------------------

  // ---------------------------------------
  // 19.4 Symbol Objects
  // ---------------------------------------

  // NOTE: Symbols are defined here - out of spec order - since we need the
  // properties and prototype to be populated for other polyfills.

  // NOTE: Not secure, nor is obj[$$symbol] hidden from Object.keys()

  var symbolForKey;
  (function() {
    var secret = Object.create(null);
    var symbolMap = {};
    symbolForKey = function(k) {
      return symbolMap[k];
    };

    var GlobalSymbolRegistry = [];

    function unique(bits) {
      return Array(bits + 1).join('x').replace(/x/g, function() {
        return random() < 0.5 ? '\u200C' : '\u200D'; // JWNJ / ZWJ
      });
    }

    // 19.4.1 The Symbol Constructor
    // 19.4.1.1 Symbol ( description=undefined )
    function Symbol(description) {
      if (!(this instanceof Symbol)) return new Symbol(description, secret);
      if (this instanceof Symbol && arguments[1] !== secret) throw TypeError();

      var descString = description === undefined ? undefined : String(description);

      set_internal(this, '[[SymbolData]]', unique(128));
      set_internal(this, '[[Description]]', descString);

      symbolMap[this] = this;
      return this;
    }

    if (!('Symbol' in global) || OVERRIDE_NATIVE_FOR_TESTING)
      global.Symbol = Symbol;

    // 19.4.2 Properties of the Symbol Constructor

    // 19.4.2.1 Symbol.for (key)
    define(Symbol, 'for', function for_(key) {
      var stringKey = String(key);
      for (var i = 0; i < GlobalSymbolRegistry.length; ++i) {
        var e = GlobalSymbolRegistry[i];
        if (SameValue(e['[[key]]'], stringKey)) return e['[[symbol]]'];
      }
      var newSymbol = Symbol(key);
      GlobalSymbolRegistry.push({'[[key]]': stringKey, '[[symbol]]': newSymbol});
      return newSymbol;
    });

    // 19.4.2.2 Symbol.hasInstance
    // 19.4.2.3 Symbol.isConcatSpreadable

    // 19.4.2.4 Symbol.iterator
    define(global.Symbol, 'iterator', global.Symbol('Symbol.iterator'));

    // 19.4.2.5 Symbol.keyFor (sym)
    define(Symbol, 'keyFor', function keyFor(sym) {
      if (!(sym instanceof Symbol)) throw TypeError();
      for (var i = 0; i < GlobalSymbolRegistry.length; ++i) {
        var e = GlobalSymbolRegistry[i];
        if (SameValue(e['[[symbol]]'], sym)) return e['[[key]]'];
      }
      return undefined;
    });

    // 19.4.2.6 Symbol.match
    define(global.Symbol, 'match', global.Symbol('Symbol.match'));

    // 19.4.2.7 Symbol.prototype

    // 19.4.2.8 Symbol.replace
    define(global.Symbol, 'replace', global.Symbol('Symbol.replace'));

    // 19.4.2.9 Symbol.search
    define(global.Symbol, 'search', global.Symbol('Symbol.search'));

    // 19.4.2.10 Symbol.species

    // 19.4.2.11 Symbol.search
    define(global.Symbol, 'split', global.Symbol('Symbol.split'));

    // 19.4.2.12 Symbol.toPrimitive

    // 19.4.2.13 Symbol.toStringTag
    define(global.Symbol, 'toStringTag', global.Symbol('Symbol.toStringTag'));

    // 19.4.2.14 Symbol.unscopables

    // 19.4.3 Properties of the Symbol Prototype Object
    // 19.4.3.1 Symbol.prototype.constructor

    // 19.4.3.2 Symbol.prototype.toString ( )
    Object.defineProperty(Symbol.prototype, 'toString', {
      value: function toString() {
        var s = strict(this);
        var desc = s['[[Description]]'];
        return 'Symbol(' + (desc === undefined ? '' : desc) + s['[[SymbolData]]'] + ')';
      },
      configurable: true, writeable: true, enumerable: false });

    // 19.4.3.3 Symbol.prototype.valueOf ( )
    Object.defineProperty(Symbol.prototype, 'valueOf', {
      value: function valueOf() {
        // To prevent automatic string conversion:
        throw TypeError();

        // Spec has approximately the following:
        //var s = strict(this);
        //if (Type(s) === 'symbol') return s;
        //if (Type(s) !== 'object') throw TypeError();
        //if (!('[[SymbolData]]' in s)) throw TypeError();
        //return s['[[SymbolData]]'];
      },
      configurable: true, writeable: true, enumerable: false });

    // 19.4.3.4 Symbol.prototype [ @@toStringTag ]
    // (Done later to polyfill partial implementations)

    // 19.4.4 Properties of Symbol Instances
  }());

  console.assert(typeof global.Symbol() === 'symbol' || symbolForKey(String(global.Symbol('x'))) !== undefined);

  // Defined here so that other prototypes can reference it
  // 25.1.2 The %IteratorPrototype% Object
  var $IteratorPrototype$ = {};

  //----------------------------------------
  // 6 ECMAScript Data Types and Values
  //----------------------------------------

  // 6.1 ECMAScript Language Types

  // "Type(x)" is used as shorthand for "the type of x"...
  function Type(v) {
    switch (typeof v) {
    case 'undefined': return 'undefined';
    case 'boolean': return 'boolean';
    case 'number': return 'number';
    case 'string': return 'string';
    case 'symbol': return 'symbol';
    default:
      if (v === null) return 'null';
      if (v instanceof global.Symbol) return 'symbol';
      return 'object';
    }
  }

  // 6.1.5.1 Well-Known Symbols
  var $$iterator = global.Symbol.iterator,
      $$match = global.Symbol.match,
      $$replace = global.Symbol.replace,
      $$search = global.Symbol.search,
      $$split = global.Symbol.split,
      $$toStringTag = global.Symbol.toStringTag;

  //----------------------------------------
  // 7 Abstract Operations
  //----------------------------------------

  //----------------------------------------
  // 7.1 Type Conversion
  //----------------------------------------

  // 7.1.1 ToPrimitive ( input [, PreferredType] )
  // just use valueOf()

  // 7.1.2 ToBoolean ( argument )
  // just use Boolean()

  // 7.1.3 ToNumber ( argument )
  // just use Number()

  // 7.1.4 ToInteger ( argument )
  function ToInteger(n) {
    n = Number(n);
    if ($isNaN(n)) return 0;
    if (n === 0 || n === Infinity || n === -Infinity) return n;
    return ((n < 0) ? -1 : 1) * floor(abs(n));
  }

  // 7.1.5 ToInt32 ( argument )
  function ToInt32(v) { return v >> 0; }

  // 7.1.6 ToUint32 ( argument )
  function ToUint32(v) { return v >>> 0; }

  // 7.1.7 ToInt16 ( argument )
  function ToInt16(v) { return (v << 16) >> 16; }

  // 7.1.8 ToUint16 ( argument )
  function ToUint16(v) { return v & 0xFFFF; }

  // 7.1.9 ToInt8 ( argument )
  function ToInt8(v) { return (v << 24) >> 24; }

  // 7.1.10 ToUint8 ( argument )
  function ToUint8(v) { return v & 0xFF; }

  // 7.1.11 ToUint8Clamp ( argument )
  function ToUint8Clamp(argument) {
    var number = Number(argument);
    if ($isNaN(number)) return 0;
    if (number <= 0) return 0;
    if (number >= 255) return 255;
    var f = floor(number);
    if ((f + 0.5) < number) return f + 1;
    if (number < (f + 0.5)) return f;
    if (f % 2) return f + 1;
    return f;
  }

  // 7.1.12 ToString ( argument )
  // just use String()

  // 7.1.13 ToObject ( argument )
  function ToObject(v) {
    if (v === null || v === undefined) throw TypeError();
    return Object(v);
  }

  // 7.1.14 ToPropertyKey ( argument )
  function ToPropertyKey(v) {
    return String(v);
  }

  // 7.1.15 ToLength ( argument )
  function ToLength(v) {
    var len = ToInteger(v);
    if (len <= 0) return 0;
    if (len === Infinity) return 0x20000000000000 - 1; // 2^53-1
    return min(len, 0x20000000000000 - 1); // 2^53-1
  }

  // 7.1.16 CanonicalNumericIndexString ( argument )

  //----------------------------------------
  // 7.2 Testing and Comparison Operations
  //----------------------------------------

  // 7.2.1 RequireObjectCoercible ( argument )
  // 7.2.2 IsArray ( argument )

  // 7.2.3 IsCallable ( argument )
  function IsCallable(o) { return typeof o === 'function'; }

  // 7.2.4 IsConstructor ( argument )
  function IsConstructor(o) {
    // Hacks for Safari 7 TypedArray XXXConstructor objects
    if (/Constructor/.test(Object.prototype.toString.call(o))) return true;
    if (/Function/.test(Object.prototype.toString.call(o))) return true;
    // TODO: Can this be improved on?
    return typeof o === 'function';
  }

  // 7.2.5 IsExtensible (O)
  // 7.2.6 IsInteger ( argument )

  // 7.2.7 IsPropertyKey ( argument )
  function IsPropertyKey(argument) {
    if (Type(argument) === 'string') return true;
    if (Type(argument) === 'symbol') return true;
    return false;
  }

  // 7.2.8 IsRegExp ( argument )

  // 7.2.9 SameValue(x, y)
  function SameValue(x, y) {
    if (typeof x !== typeof y) return false;
    switch (typeof x) {
    case 'undefined':
      return true;
    case 'number':
      if (x !== x && y !== y) return true;
      if (x === 0 && y === 0) return 1/x === 1/y;
      return x === y;
    case 'boolean':
    case 'string':
    case 'object':
    default:
      return x === y;
    }
  }

  // 7.2.10 SameValueZero(x, y)
  function SameValueZero(x, y) {
    if (typeof x !== typeof y) return false;
    switch (typeof x) {
    case 'undefined':
      return true;
    case 'number':
      if (x !== x && y !== y) return true;
      return x === y;
    case 'boolean':
    case 'string':
    case 'object':
    default:
      return x === y;
    }
  }

  //----------------------------------------
  // 7.3 Operations on Objects
  //----------------------------------------

  // 7.3.1 Get (O, P)
  // - just use o.p or o[p]

  // 7.3.2 GetV (V, P)
  function GetV(v, p) {
    var o = ToObject(v);
    return o[p];
  }

  // 7.3.3 Set (O, P, V, Throw)
  // - just use o.p = v or o[p] = v




  // 7.3.9 GetMethod (O, P)
  function GetMethod(o, p) {
    var func = GetV(o, p);
    if (func === undefined || func === null) return undefined;
    if (!IsCallable(func)) throw TypeError();
    return func;
  }

  // 7.3.10 HasProperty (O, P)
  function HasProperty(o, p) {
    while (o) {
      if (Object.prototype.hasOwnProperty.call(o, p)) return true;
      if (Type(o) !== 'object') return false;
      var op = Object.getPrototypeOf(o);
      if (op === o) return false; // IE8 has self-referential prototypes
      o = op;
    }
    return false;
  }

  // 7.3.11 HasOwnProperty (O, P)
  function HasOwnProperty(o, p) {
    return Object.prototype.hasOwnProperty.call(o, p);
  }

  //----------------------------------------
  // 7.4 Operations on Iterator Objects
  //----------------------------------------

  // 7.4.1 GetIterator ( obj, method )
  function GetIterator(obj, method) {
    if (arguments.length < 2)
      method = GetMethod(obj, $$iterator);
    var iterator = method.call(obj);
    if (Type(iterator) !== 'object') throw TypeError();
    return iterator;
  }

  // 7.4.2 IteratorNext ( iterator, value )
  function IteratorNext(iterator, value) {
    if (arguments.length < 2)
      var result = iterator.next();
    else
      result = iterator.next(value);
    if (Type(result) !== 'object') throw TypeError();
    return result;
  }

  // 7.4.3 IteratorComplete ( iterResult )
  function IteratorComplete(iterResult) {
    console.assert(Type(iterResult) === 'object');
    return Boolean(iterResult.done);
  }

  // 7.4.4 IteratorValue ( iterResult )
  function IteratorValue(iterResult) {
    console.assert(Type(iterResult) === 'object');
    return iterResult.value;
  }

  // 7.4.5 IteratorStep ( iterator )
  function IteratorStep( iterator, value ) {
    var result = IteratorNext(iterator, value);
    var done = result['done'];
    if (Boolean(done) === true) return false;
    return result;
  }

  // 7.4.6 IteratorClose( iterator, completion )
  function IteratorClose( iterator, completion ) {
    console.assert(Type(iterator) === 'object');
    var _return = GetMethod(iterator, 'return');
    if (_return === undefined) return completion;
    try {
      var innerResult = _return[iterator]();
    } catch (result) {
      // TODO: If completion.[[type]] is throw, return completion
      return result;
    }
    if (Type(innerResult) !== 'object') throw TypeError();
    return completion;
  }

  // 7.4.7 CreateIterResultObject (value, done)
  function CreateIterResultObject(value, done) {
    console.assert(Type(done) === 'boolean');
    var obj = {};
    obj["value"] = value;
    obj["done"] = done;
    return obj;
  }

  // 7.4.8 CreateListIterator (list)
  // 7.4.8.1 ListIterator next( )

  //----------------------------------------
  // 8 Executable Code and Execution Contexts
  //----------------------------------------

  //----------------------------------------
  // 8.4 Jobs and Job Queues
  //----------------------------------------

  // 8.4.1 EnqueueJob ( queueName, job, arguments)
  function EnqueueJob(queueName, job, args) {
    var fn = function() { job.apply(undefined, args); };
    enqueue(fn);
  }

  // 8.4.2 NextJob result
  function NextJob(result) {
    // no-op
  }

  //----------------------------------------
  // 9 Ordinary and Exotic Objects Behaviors
  //----------------------------------------

  // 9.1.11 [[Enumerate]] ()
  function Enumerate(obj) {
    var e = [];
    if (Object(obj) !== obj) return e;
    var visited = new Set;
    while (obj !== null) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (!visited.has(name)) {
          var desc = Object.getOwnPropertyDescriptor(obj, name);
          if (desc) {
            visited.add(name);
            if (desc.enumerable) e.push(name);
          }
        }
      });
      obj = Object.getPrototypeOf(obj);
    }
    return e[$$iterator]();
  }

  // 9.1.12 [[OwnPropertyKeys]] ( )
  function OwnPropertyKeys(o) {
    return Object.getOwnPropertyNames(o);
  }

  // 9.1.13 ObjectCreate(proto, internalSlotsList)
  function ObjectCreate(proto, internalSlotsList) {
    return Object.create(proto, internalSlotsList);
  }

  // ---------------------------------------
  // 19 Fundamental Objects
  // ---------------------------------------

  // ---------------------------------------
  // 19.1 Object Objects
  // ---------------------------------------

  // 19.1.1 The Object Constructor
  // 19.1.1.1 Object ( [ value ] )
  // 19.1.2 Properties of the Object Constructor
  // 19.1.2.1 Object.assign ( target, ...sources )
  define(
    Object, 'assign',
    function assign(target, /*...*/sources) {
      var to = ToObject(target);
      if (arguments.length < 2) return to;

      var sourcesIndex = 1;
      while (sourcesIndex < arguments.length) {
        var nextSource = arguments[sourcesIndex++];
        if (nextSource === undefined || nextSource === null) {
          var keys = [];
        } else {
          var from = ToObject(nextSource);
          keys = OwnPropertyKeys(from);
        }
        for (var keysIndex = 0; keysIndex < keys.length; ++keysIndex) {
          var nextKey = keys[keysIndex];
          var desc = Object.getOwnPropertyDescriptor(from, nextKey);
          if (desc !== undefined && desc.enumerable) {
            var propValue = from[nextKey];
            to[nextKey] = propValue;
          }
        }
      }
      return to;
    });

  // 19.1.2.2 Object.create ( O [ , Properties ] )
  // 19.1.2.3 Object.defineProperties ( O, Properties )
  // 19.1.2.4 Object.defineProperty ( O, P, Attributes )
  // 19.1.2.5 Object.freeze ( O )
  // 19.1.2.6 Object.getOwnPropertyDescriptor ( O, P )

  (function() {
    var nativeSymbols = (typeof global.Symbol() === 'symbol'),
        $getOwnPropertyNames = Object.getOwnPropertyNames,
        $keys = Object.keys,
        $window_names = (typeof window === 'object' ? $getOwnPropertyNames(window) : []);

    function isStringKey(k) { return !symbolForKey(k); }

    // 19.1.2.7 Object.getOwnPropertyNames ( O )
    define(
      Object, 'getOwnPropertyNames',
      function getOwnPropertyNames(o) {
        if (Object.prototype.toString.call(o) === '[object Window]') {
          // Workaround for cross-realm calling by IE itself.
          // https://github.com/inexorabletash/polyfill/issues/96
          try {
            return $getOwnPropertyNames(o).filter(isStringKey);
          } catch (_) {
            return $window_names.slice();
          }
        }
        return $getOwnPropertyNames(o).filter(isStringKey);
      }, !nativeSymbols);

    // 19.1.2.8 Object.getOwnPropertySymbols ( O )
    define(
      Object, 'getOwnPropertySymbols',
      function getOwnPropertySymbols(o) {
        return $getOwnPropertyNames(o).filter(symbolForKey).map(symbolForKey);
      }, !nativeSymbols);

    // 19.1.2.14 Object.keys ( O )
    define(
      Object, 'keys',
      function keys(o) {
        return $keys(o).filter(isStringKey);
      }, !nativeSymbols);
  }());

  // 19.1.2.9 Object.getPrototypeOf ( O )
  // 19.1.2.10 Object.is ( value1, value2 )
  define(
    Object, 'is',
    function is(value1, value2) {
      return SameValue(value1, value2);
    });

  // 19.1.2.11 Object.isExtensible ( O )
  // 19.1.2.12 Object.isFrozen ( O )
  // 19.1.2.13 Object.isSealed ( O )

  // 19.1.2.14 Object.keys ( O )
  // see above

  // 19.1.2.15 Object.preventExtensions ( O )
  // 19.1.2.16 Object.prototype
  // 19.1.2.17 Object.seal ( O )

  // 19.1.2.18 Object.setPrototypeOf ( O, proto )
  define(
    Object, 'setPrototypeOf',
    function setPrototypeOf(o, proto) {
      if (Type(o) !== 'object') throw TypeError();
      if (Type(proto) !== 'object' && Type(proto) !== 'null') throw TypeError();
      o.__proto__ = proto;
      return o;
    }
  );

  // 19.1.3 Properties of the Object Prototype Object
  // 19.1.3.1 Object.prototype.constructor
  // 19.1.3.2 Object.prototype.hasOwnProperty ( V )
  // 19.1.3.3 Object.prototype.isPrototypeOf ( V )
  // 19.1.3.4 Object.prototype.propertyIsEnumerable ( V )
  // 19.1.3.5 Object.prototype.toLocaleString ( [ reserved1 [ , reserved2 ] ] )
  // 19.1.3.6 Object.prototype.toString ( )
  var o_p_ts = Object.prototype.toString;
  define(Object.prototype, 'toString',
       function() {
         var o = strict(this);
         if (o === Object(o) && $$toStringTag in o) {
           return '[object ' + o[$$toStringTag] + ']';
         }
         return o_p_ts.apply(o, arguments);
       });

  // 19.1.3.7 Object.prototype.valueOf ( )
  // 19.1.4 Properties of Object Instances

  // ---------------------------------------
  // 19.2 Function Objects
  // ---------------------------------------

  // 19.2.1 The Function Constructor
  // 19.2.1.1 Function ( p1, p2, … , pn, body )
  // 19.2.2 Properties of the Function Constructor
  // 19.2.2.1 Function.length
  // 19.2.2.2 Function.prototype
  // 19.2.3 Properties of the Function Prototype Object
  // 19.2.3.1 Function.prototype.apply ( thisArg, argArray )
  // 19.2.3.2 Function.prototype.bind ( thisArg , ...args)
  // 19.2.3.3 Function.prototype.call (thisArg , ...args)
  // 19.2.3.4 Function.prototype.constructor
  // 19.2.3.5 Function.prototype.toString ( )
  // 19.2.3.6 Function.prototype[@@hasInstance] ( V )
  // 19.2.4 Function Instances
  // 19.2.4.1 length
  // 19.2.4.2 name
  // 19.2.4.3 prototype

  // (No polyfillable changes from ES5)

  // ---------------------------------------
  // 19.3 Boolean Objects
  // ---------------------------------------

  // 19.3.1 The Boolean Constructor
  // 19.3.1.1 Boolean ( value )
  // 19.3.2 Properties of the Boolean Constructor
  // 19.3.2.1 Boolean.prototype
  // 19.3.3 Properties of the Boolean Prototype Object
  // 19.3.3.1 Boolean.prototype.constructor
  // 19.3.3.2 Boolean.prototype.toString ( )
  // 19.3.3.3 Boolean.prototype.valueOf ( )
  // 19.3.4 Properties of Boolean Instances

  // (No polyfillable changes from ES5)

  // ---------------------------------------
  // 19.4 Symbol Objects
  // ---------------------------------------

  // Moved earlier in this script, so that other polyfills can depend on them.

  // 19.4.3.4 Symbol.prototype [ @@toStringTag ]
  define(global.Symbol.prototype, global.Symbol.toStringTag, 'Symbol');

  // ---------------------------------------
  // 19.5 Error Objects
  // ---------------------------------------

  // 19.5.1 The Error Constructor
  // 19.5.1.1 Error ( message )
  // 19.5.1.2 new Error( ...argumentsList )
  // 19.5.2 Properties of the Error Constructor
  // 19.5.2.1 Error.prototype
  // 19.5.3 Properties of the Error Prototype Object
  // 19.5.3.1 Error.prototype.constructor
  // 19.5.3.2 Error.prototype.message
  // 19.5.3.3 Error.prototype.name
  // 19.5.3.4 Error.prototype.toString ( )
  // 19.5.4 Properties of Error Instances
  // 19.5.5 Native Error Types Used in This Standard
  // 19.5.5.1 EvalError
  // 19.5.5.2 RangeError
  // 19.5.5.3 ReferenceError
  // 19.5.5.4 SyntaxError
  // 19.5.5.5 TypeError
  // 19.5.5.6 URIError
  // 19.5.6 NativeError Object Structure
  // 19.5.6.1 NativeError Constructors
  // 19.5.6.1.1 NativeError ( message )
  // 19.5.6.1.2 new NativeError ( ...argumentsList )
  // 19.5.6.2 Properties of the NativeError Constructors
  // 19.5.6.2.1 NativeError.prototype
  // 19.5.6.3 Properties of the NativeError Prototype Objects
  // 19.5.6.4 Properties of NativeError Instances

  // (No polyfillable changes from ES5)

  // ---------------------------------------
  // 20 Numbers and Dates
  // ---------------------------------------

  // ---------------------------------------
  // 20.1 Number Objects
  // ---------------------------------------

  // 20.1.1 The Number Constructor
  // 20.1.1.1 Number ( [ value ] )
  // 20.1.1.2 new Number ( ...argumentsList )
  // 20.1.2 Properties of the Number Constructor

  // 20.1.2.1 Number.EPSILON
  define(
    Number, 'EPSILON',
    (function () {
      var next, result;
      for (next = 1; 1 + next !== 1; next = next / 2)
        result = next;
      return result;
    }()));

  // 20.1.2.2 Number.isFinite ( number )
  define(
    Number, 'isFinite',
    function isFinite(number) {
      if (Type(number) !== 'number') return false;
      if (number !== number || number === +Infinity || number === -Infinity) return false;
      return true;
    });

  // 20.1.2.3 Number.isInteger ( number )
  define(
    Number, 'isInteger',
    function isInteger(number) {
      if (Type(number) !== 'number') return false;
      if (number !== number || number === +Infinity || number === -Infinity) return false;
      var integer = ToInteger(number);
      if (integer !== number) return false;
      return true;
    });

  // 20.1.2.4 Number.isNaN ( number )
  define(
    Number, 'isNaN',
    function isNaN(number) {
      if (Type(number) !== 'number') return false;
      if (number !== number) return true;
      return false;
    });

  // 20.1.2.5 Number.isSafeInteger ( number )
  define(
    Number, 'isSafeInteger',
    function isSafeInteger(number) {
      if (Type(number) !== 'number') return false;
      if (number !== number || number === +Infinity || number === -Infinity) return false;
      var integer = ToInteger(number);
      if (integer !== number) return false;
      if (abs(integer) <= (0x20000000000000 - 1)) // 2^53-1
        return true;
      return false;
    });

  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  define(
    Number, 'MAX_SAFE_INTEGER',
    9007199254740991); // 2^53-1

  // 20.1.2.7 Number.MAX_VALUE

  // 20.1.2.8 Number.MIN_SAFE_INTEGER
  define(
    Number, 'MIN_SAFE_INTEGER',
    -9007199254740991); // -2^53+1

  // 20.1.2.9 Number.MIN_VALUE
  // 20.1.2.10 Number.NaN
  // 20.1.2.11 Number.NEGATIVE_INFINITY

  // 20.1.2.12 Number.parseFloat ( string )
  define(Number, 'parseFloat', $parseFloat);

  // 20.1.2.13 Number.parseInt ( string, radix )
  define(Number, 'parseInt', $parseInt);

  // 20.1.2.14 Number.POSITIVE_INFINITY
  // 20.1.2.15 Number.prototype

  // 20.1.3 Properties of the Number Prototype Object
  // 20.1.3.1 Number.prototype.constructor
  // 20.1.3.2 Number.prototype.toExponential ( fractionDigits )
  // 20.1.3.3 Number.prototype.toFixed ( fractionDigits )
  // 20.1.3.4 Number.prototype.toLocaleString( [ reserved1 [ , reserved2 ] ])
  // 20.1.3.5 Number.prototype.toPrecision ( precision )
  // 20.1.3.6 Number.prototype.toString ( [ radix ] )
  // 20.1.3.7 Number.prototype.valueOf ( )
  // 20.1.4 Properties of Number Instances

  // ---------------------------------------
  // 20.2 The Math Object
  // ---------------------------------------

  // 20.2.1 Value Properties of the Math Object
  // 20.2.1.1 Math.E
  // 20.2.1.2 Math.LN10
  // 20.2.1.3 Math.LN2
  // 20.2.1.4 Math.LOG10E
  // 20.2.1.5 Math.LOG2E
  // 20.2.1.6 Math.PI
  // 20.2.1.7 Math.SQRT1_2
  // 20.2.1.8 Math.SQRT2

  // 20.2.1.9 Math [ @@toStringTag ]
  define(Math, $$toStringTag, 'Math');

  // 20.2.2 Function Properties of the Math Object
  // 20.2.2.1 Math.abs ( x )
  // 20.2.2.2 Math.acos ( x )

  // 20.2.2.3 Math.acosh(x)
  define(
    Math, 'acosh',
    function acosh(x) {
      x = Number(x);
      return log(x + sqrt(x * x - 1));
    });

  // 20.2.2.4 Math.asin ( x )

  // 20.2.2.5 Math.asinh( x )
  define(
    Math, 'asinh',
    function asinh(x) {
      x = Number(x);
      if (SameValue(x, -0)) {
        return x;
      }
      var s = sqrt(x * x + 1);
      return (s === -x) ? log(0) : log(x + s);
    });

  // 20.2.2.6 Math.atan ( x )

  // 20.2.2.7 Math.atanh( x )
  define(
    Math, 'atanh',
    function atanh(x) {
      x = Number(x);
      return (x === 0) ? x : log((1 + x) / (1 - x)) / 2;
    });

  // 20.2.2.8 Math.atan2 ( y, x )

  // 20.2.2.9 Math.cbrt ( x )
  define(
    Math, 'cbrt',
    function cbrt(x) {
      x = Number(x);
      if ($isNaN(x/x)) {
        return x;
      }
      var r = pow(abs(x), 1/3);
      var t = x/r/r;
      return r + (r * (t-r) / (2*r + t));
    });

  // 20.2.2.10 Math.ceil ( x )

  // 20.2.2.11 Math.clz32 ( x )
  define(
    Math, 'clz32',
    function clz32(x) {
      function clz8(x) {
        return (x & 0xf0) ? (x & 0x80 ? 0 : x & 0x40 ? 1 : x & 0x20 ? 2 : 3) :
        (x & 0x08 ? 4 : x & 0x04 ? 5 : x & 0x02 ? 6 : x & 0x01 ? 7 : 8);
      }
      x = ToUint32(x);
      return x & 0xff000000 ? clz8(x >> 24) :
        x & 0xff0000 ? clz8(x >> 16) + 8 :
        x & 0xff00 ? clz8(x >> 8) + 16 : clz8(x) + 24;
    });



  // 20.2.2.12 Math.cos ( x )

  // 20.2.2.13 Math.cosh ( x )
  define(
    Math, 'cosh',
    function cosh(x) {
      x = Number(x);
      return (pow(E, x) + pow(E, -x)) / 2;
    });

  // 20.2.2.14 Math.exp ( x )

  // 20.2.2.15 Math.expm1 ( x )
  define(
    Math, 'expm1',
    function expm1(x) {
      x = Number(x);
      // from: http://www.johndcook.com/cpp_log1p.html
      if (SameValue(x, -0)) {
        return -0;
      } else if (abs(x) < 1e-5) {
        return x + 0.5 * x * x; // two terms of Taylor expansion
      } else {
        return exp(x) - 1;
      }
    });

  // 20.2.2.16 Math.floor ( x )

  // 20.2.2.17 Math.fround ( x )
  define(
    Math, 'fround',
    function fround(x) {
      if ($isNaN(x)) {
        return NaN;
      }
      if (1/x === +Infinity || 1/x === -Infinity || x === +Infinity || x === -Infinity) {
        return x;
      }
      return (new Float32Array([x]))[0];
    });

  // 20.2.2.18 Math.hypot ( value1 [, value2 [ ... ] ] )
  define(
    Math, 'hypot',
    function hypot() {
      var values = [];
      var m = 0, sawNaN = false;
      for (var i = 0; i < arguments.length; ++i) {
        var n = abs(Number(arguments[i]));
        if (n === Infinity) return n;
        if (n !== n) sawNaN = true;
        if (n > m) m = n;
        values[i] = n;
      }
      if (sawNaN) return NaN;
      if (m === 0) return +0;
      var sum = +0;
      for (i = 0; i < values.length; ++i) {
        var r = values[i] / m;
        sum = sum + r * r;
      }
      return m * sqrt(sum);
    });

  // 20.2.2.19 Math.imul ( x, y )
  define(
    Math, 'imul',
    function imul(x, y) {
      var a = ToUint32(x);
      var b = ToUint32(y);
      // (slow but accurate)
      var ah  = (a >>> 16) & 0xffff;
      var al = a & 0xffff;
      var bh  = (b >>> 16) & 0xffff;
      var bl = b & 0xffff;
      return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }, ('imul' in Math && Math.imul(1, 0x80000000) === 0) // Safari 7 bug
  );

  // 20.2.2.20 Math.log ( x )

  // 20.2.2.21 Math.log1p ( x )
  define(
    Math, 'log1p',
    function log1p(x) {
      x = Number(x);
      // from: http://www.johndcook.com/cpp_expm1.html
      if (x < -1) {
        return NaN;
      } else if (SameValue(x, -0)) {
        return -0;
      } else if (abs(x) > 1e-4) {
        return log(1 + x);
      } else {
        return (-0.5 * x + 1) * x;
      }
    });

  // 20.2.2.22 Math.log10 ( x )
  define(
    Math, 'log10',
    function log10(x) {
      x = Number(x);
      return log(x) * LOG10E;
    });

  // 20.2.2.23 Math.log2 ( x )
  define(
    Math, 'log2',
    function log2(x) {
      x = Number(x);
      return log(x) * LOG2E;
    });

  // 20.2.2.24 Math.max ( value1, value2 , ...values )
  // 20.2.2.25 Math.min ( value1, value2 , ...values )
  // 20.2.2.26 Math.pow ( x, y )
  // 20.2.2.27 Math.random ( )
  // 20.2.2.28 Math.round ( x )

  // 20.2.2.29 Math.sign(x)
  define(
    Math, 'sign',
    function sign(x) {
      x = Number(x);
      return x < 0 ? -1 : x > 0 ? 1 : x;
    });

  // 20.2.2.30 Math.sin ( x )

  // 20.2.2.31 Math.sinh( x )
  define(
    Math, 'sinh',
    function sinh(x) {
      x = Number(x);
      return SameValue(x, -0) ? x : (pow(E, x) - pow(E, -x)) / 2;
    });

  // 20.2.2.32 Math.sqrt ( x )
  // 20.2.2.33 Math.tan ( x )

  // 20.2.2.34 Math.tanh ( x )
  define(
    Math, 'tanh',
    function tanh(x) {
      x = Number(x);
      var n = pow(E, 2 * x) - 1,
          d = pow(E, 2 * x) + 1;
      if (SameValue(x, -0))
        return x;
      return (n === d) ? 1 : n / d; // Handle Infinity/Infinity
    });

  // 20.2.2.35 Math.trunc ( x )
  define(
    Math, 'trunc',
    function trunc(x) {
      x = Number(x);
      return $isNaN(x) ? NaN :
        x < 0 ? ceil(x) : floor(x);
    });

  // ---------------------------------------
  // 20.3 Date Objects
  // ---------------------------------------

  // 20.3.1 Overview of Date Objects and Definitions of Abstract Operations
  // 20.3.1.1 Time Values and Time Range
  // 20.3.1.2 Day Number and Time within Day
  // 20.3.1.3 Year Number
  // 20.3.1.4 Month Number
  // 20.3.1.5 Date Number
  // 20.3.1.6 Week Day
  // 20.3.1.7 Local Time Zone Adjustment
  // 20.3.1.8 Daylight Saving Time Adjustment
  // 20.3.1.9 Local Time
  // 20.3.1.10 Hours, Minutes, Second, and Milliseconds
  // 20.3.1.11 MakeTime (hour, min, sec, ms)
  // 20.3.1.12 MakeDay (year, month, date)
  // 20.3.1.13 MakeDate (day, time)
  // 20.3.1.14 TimeClip (time)
  // 20.3.1.15 Date Time String Format
  // 20.3.1.15.1 Extended years
  // 20.3.2 The Date Constructor
  // 20.3.2.1 Date ( year, month [, date [ , hours [ , minutes [ , seconds [ , ms ] ] ] ] ] )
  // 20.3.2.2 Date ( value )
  // 20.3.2.3 Date ( )
  // 20.3.3 Properties of the Date Constructor
  // 20.3.3.1 Date.now ( )
  // 20.3.3.2 Date.parse (string)
  // 20.3.3.3 Date.prototype
  // 20.3.3.4 Date.UTC ( year, month [ , date [ , hours [ , minutes [ , seconds [ , ms ] ] ] ] ] )
  // 20.3.4 Properties of the Date Prototype Object
  // 20.3.4.1 Date.prototype.constructor
  // 20.3.4.2 Date.prototype.getDate ( )
  // 20.3.4.3 Date.prototype.getDay ( )
  // 20.3.4.4 Date.prototype.getFullYear ( )
  // 20.3.4.5 Date.prototype.getHours ( )
  // 20.3.4.6 Date.prototype.getMilliseconds ( )
  // 20.3.4.7 Date.prototype.getMinutes ( )
  // 20.3.4.8 Date.prototype.getMonth ( )
  // 20.3.4.9 Date.prototype.getSeconds ( )
  // 20.3.4.10 Date.prototype.getTime ( )
  // 20.3.4.11 Date.prototype.getTimezoneOffset ( )
  // 20.3.4.12 Date.prototype.getUTCDate ( )
  // 20.3.4.13 Date.prototype.getUTCDay ( )
  // 20.3.4.14 Date.prototype.getUTCFullYear ( )
  // 20.3.4.15 Date.prototype.getUTCHours ( )
  // 20.3.4.16 Date.prototype.getUTCMilliseconds ( )
  // 20.3.4.17 Date.prototype.getUTCMinutes ( )
  // 20.3.4.18 Date.prototype.getUTCMonth ( )
  // 20.3.4.19 Date.prototype.getUTCSeconds ( )
  // 20.3.4.20 Date.prototype.setDate ( date )
  // 20.3.4.21 Date.prototype.setFullYear ( year [ , month [ , date ] ] )
  // 20.3.4.22 Date.prototype.setHours ( hour [ , min [ , sec [ , ms ] ] ] )
  // 20.3.4.23 Date.prototype.setMilliseconds ( ms )
  // 20.3.4.24 Date.prototype.setMinutes ( min [ , sec [ , ms ] ] )
  // 20.3.4.25 Date.prototype.setMonth ( month [ , date ] )
  // 20.3.4.26 Date.prototype.setSeconds ( sec [ , ms ] )
  // 20.3.4.27 Date.prototype.setTime ( time )
  // 20.3.4.28 Date.prototype.setUTCDate ( date )
  // 20.3.4.29 Date.prototype.setUTCFullYear ( year [ , month [ , date ] ] )
  // 20.3.4.30 Date.prototype.setUTCHours ( hour [ , min [ , sec [ , ms ] ] ] )
  // 20.3.4.31 Date.prototype.setUTCMilliseconds ( ms )
  // 20.3.4.32 Date.prototype.setUTCMinutes ( min [ , sec [, ms ] ] )
  // 20.3.4.33 Date.prototype.setUTCMonth ( month [ , date ] )
  // 20.3.4.34 Date.prototype.setUTCSeconds ( sec [ , ms ] )
  // 20.3.4.35 Date.prototype.toDateString ( )
  // 20.3.4.36 Date.prototype.toISOString ( )
  // 20.3.4.37 Date.prototype.toJSON ( key )
  // 20.3.4.38 Date.prototype.toLocaleDateString ( [ reserved1 [ , reserved2 ] ] )
  // 20.3.4.39 Date.prototype.toLocaleString ( [ reserved1 [ , reserved2 ] ] )
  // 20.3.4.40 Date.prototype.toLocaleTimeString ( [ reserved1 [ , reserved2 ] ] )
  // 20.3.4.41 Date.prototype.toString ( )
  // 20.3.4.42 Date.prototype.toTimeString ( )
  // 20.3.4.43 Date.prototype.toUTCString ( )
  // 20.3.4.44 Date.prototype.valueOf ( )
  // 20.3.4.45 Date.prototype [ @@toPrimitive ] ( hint )
  // 20.3.5 Properties of Date Instances

  // (No polyfillable changes from ES5)

  // ---------------------------------------
  // 21 Text Processing
  // ---------------------------------------

  var string_regexp_dispatch = (function() {
    var faux = {}, secret = Symbol();
    faux[Symbol.match] = function() { return secret; };
    return ("").match(faux) === secret;
  }());

  // 21.1 String Objects
  // 21.1.1 The String Constructor
  // 21.1.1.1 String ( value )
  // 21.1.2 Properties of the String Constructor
  // 21.1.2.1 String.fromCharCode ( ...codeUnits )

  // 21.1.2.2 String.fromCodePoint ( ...codePoints )
  define(
    String, 'fromCodePoint',
    function fromCodePoint(/*...codePoints*/) {
      var codePoints = arguments,
          length = codePoints.length,
          elements = [],
          nextIndex = 0;
      while (nextIndex < length) {
        var next = codePoints[nextIndex];
        var nextCP = Number(next);
        if (!SameValue(nextCP, ToInteger(nextCP)) ||
            nextCP < 0 || nextCP > 0x10FFFF) {
          throw RangeError('Invalid code point ' + nextCP);
        }
        if (nextCP < 0x10000) {
          elements.push(String.fromCharCode(nextCP));
        } else {
          nextCP -= 0x10000;
          elements.push(String.fromCharCode((nextCP >> 10) + 0xD800));
          elements.push(String.fromCharCode((nextCP % 0x400) + 0xDC00));
        }
        nextIndex += 1;
      }
      return elements.join('');
    });

  // 21.1.2.3 String.prototype

  // 21.1.2.4 String.raw ( template , ...substitutions )
  define(
    String, 'raw',
    function raw(template /*, ...substitutions*/) {
      var substitutions = [].slice.call(arguments, 1);

      var cooked = Object(template);
      var rawValue = cooked['raw'];
      var raw = Object(rawValue);
      var len = raw['length'];
      var literalSegments = ToLength(len);
      if (literalSegments <= 0) return '';
      var stringElements = [];
      var nextIndex = 0;
      while (true) {
        var next = raw[nextIndex];
        var nextSeg = String(next);
        stringElements.push(nextSeg);
        if (nextIndex + 1 === literalSegments)
          return stringElements.join('');
        next = substitutions[nextIndex];
        var nextSub = String(next);
        stringElements.push(nextSub);
        nextIndex = nextIndex + 1;
      }
    });

  // See https://githib.com/inexorabletash/uate for a more useful version.

  // 21.1.3 Properties of the String Prototype Object
  // 21.1.3.1 String.prototype.charAt ( pos )
  // 21.1.3.2 String.prototype.charCodeAt ( pos )

  // 21.1.3.3 String.prototype.codePointAt ( pos )
  define(
    String.prototype, 'codePointAt',
    function codePointAt(pos) {
      var o = strict(this);
      var s = String(o);
      var position = ToInteger(pos);
      var size = s.length;
      if (position < 0 || position >= size) return undefined;
      var first = s.charCodeAt(position);
      if (first < 0xD800 || first > 0xDBFF || position + 1 === size) return first;
      var second = s.charCodeAt(position + 1);
      if (second < 0xDC00 || second > 0xDFFF) return first;
      return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
    });

  // 21.1.3.4 String.prototype.concat ( ...args )
  // 21.1.3.5 String.prototype.constructor

  // 21.1.3.6 String.prototype.endsWith ( searchString [ , endPosition] )
  define(
    String.prototype, 'endsWith',
    function endsWith(searchString) {
      var endPosition = arguments[1];

      var o = strict(this);
      var s = String(o);
      var searchStr = String(searchString);
      var len = s.length;
      var pos = (endPosition === undefined) ? len : ToInteger(endPosition);
      var end = min(max(pos, 0), len);
      var searchLength = searchStr.length;
      var start = end - searchLength;
      if (start < 0) return false;
      if (s.substring(start, start + searchLength) === searchStr) return true;
      return false;
    });

  // 21.1.3.7 String.prototype.includes ( searchString [ , position ] )
  define(
    String.prototype, 'includes',
    function includes(searchString) {
      var position = arguments[1];

      var o = strict(this);
      var s = String(o);
      var searchStr = String(searchString);
      var pos = ToInteger(position);
      var len = s.length;
      var start = min(max(pos, 0), len);
      return s.indexOf(searchStr, start) !== -1;
    });

  // 21.1.3.8 String.prototype.indexOf ( searchString [ , position ] )
  // 21.1.3.9 String.prototype.lastIndexOf ( searchString [ , position ] )
  // 21.1.3.10 String.prototype.localeCompare ( that [, reserved1 [ , reserved2 ] ] )
  // 21.1.3.11 String.prototype.match ( regexp )
  define(
    String.prototype, 'match',
    function match(regexp) {
      var o = strict(this);
      var s = String(o);
      if (HasProperty(regexp, $$match)) var rx = regexp;
      else rx = new RegExp(regexp);
      return rx[$$match](s);
    }, !string_regexp_dispatch);

  // 21.1.3.12 String.prototype.normalize ( [ form ] )

  // Not practical due to table sizes; if needed, pull in:
  // https://github.com/walling/unorm/

  // 21.1.3.13 String.prototype.repeat ( count )
  define(
    String.prototype, 'repeat',
    function repeat(count) {
      var o = strict(this);
      var s = String(o);
      var n = ToInteger(count);
      if (n < 0) throw RangeError();
      if (n === Infinity) throw RangeError();
      var t = new Array(n + 1).join(s);
      return t;
    });

  // 21.1.3.14 String.prototype.replace (searchValue, replaceValue )
  define(
    String.prototype, 'replace',
    function replace(searchValue, replaceValue) {
      var o = strict(this);
      if (HasProperty(searchValue, $$replace))
        return searchValue[$$replace](o, replaceValue);
      return orig_replace.call(o, searchValue, replaceValue);
    }, !string_regexp_dispatch);

  // 21.1.3.15 String.prototype.search ( regexp )
  define(
    String.prototype, 'search',
    function search(regexp) {
      var o = strict(this);
      var string = String(o);
      if (HasProperty(regexp, $$search)) var rx = regexp;
      else rx = new RegExp(regexp);
      return rx[$$search](string);
    }, !string_regexp_dispatch);

  // 21.1.3.16 String.prototype.slice ( start, end )
  // 21.1.3.17 String.prototype.split ( separator, limit )
  define(
    String.prototype, 'split',
    function split(separator, limit) {
      var o = strict(this);
      if (HasProperty(separator, $$split))
        return separator[$$split](o, limit);
      return orig_split.call(o, separator, limit);
    }, !string_regexp_dispatch);

  // 21.1.3.18 String.prototype.startsWith ( searchString [, position ] )
  define(
    String.prototype, 'startsWith',
    function startsWith(searchString) {
      var position = arguments[1];

      var o = strict(this);
      var s = String(o);
      var searchStr = String(searchString);
      var pos = ToInteger(position);
      var len = s.length;
      var start = min(max(pos, 0), len);
      var searchLength = searchStr.length;
      if (searchLength + start > len) return false;
      if (s.substring(start, start + searchLength) === searchStr) return true;
      return false;
    });

  // 21.1.3.19 String.prototype.substring ( start, end )
  // 21.1.3.20 String.prototype.toLocaleLowerCase ( [ reserved1 [ , reserved2 ] ] )
  // 21.1.3.21 String.prototype.toLocaleUpperCase ([ reserved1 [ , reserved2 ] ] )
  // 21.1.3.22 String.prototype.toLowerCase ( )
  // 21.1.3.23 String.prototype.toString ( )
  // 21.1.3.24 String.prototype.toUpperCase ( )
  // 21.1.3.25 String.prototype.trim ( )
  // 21.1.3.26 String.prototype.valueOf ( )

  // 21.1.3.27 String.prototype [ @@iterator ]( )
  define(
    String.prototype, $$iterator,
    function entries() {
      return CreateStringIterator(this, 'value');
    });

  // 21.1.4 Properties of String Instances
  // 21.1.4.1 length

  // 21.1.5 String Iterator Objects
  /** @constructor */
  function StringIterator() {}

  // 21.1.5.1 CreateStringIterator Abstract Operation
  function CreateStringIterator(string, kind) {
    var s = String(string);
    var iterator = new StringIterator;
    set_internal(iterator, '[[IteratedString]]', s);
    set_internal(iterator, '[[StringIteratorNextIndex]]', 0);
    set_internal(iterator, '[[StringIterationKind]]', kind);
    return iterator;
  }

  // 21.1.5.2 The %StringIteratorPrototype% Object
  var $StringIteratorPrototype$ = Object.create($IteratorPrototype$);
  StringIterator.prototype = $StringIteratorPrototype$;

  // 21.1.5.2.1 %StringIteratorPrototype%.next ( )
  define(
    $StringIteratorPrototype$, 'next',
    function next() {
      var o = ToObject(this);
      var s = String(o['[[IteratedString]]']),
          index = o['[[StringIteratorNextIndex]]'],
          len = s.length;
      if (index >= len) {
        set_internal(o, '[[StringIteratorNextIndex]]', Infinity);
        return CreateIterResultObject(undefined, true);
      }
      var cp = s.codePointAt(index);
      set_internal(o, '[[StringIteratorNextIndex]]', index + (cp > 0xFFFF ? 2 : 1));
      return CreateIterResultObject(String.fromCodePoint(cp), false);
    });

  // 21.1.5.2.2 %StringIteratorPrototype% [ @@toStringTag ]
  define($StringIteratorPrototype$, $$toStringTag, 'String Iterator');

  // 21.1.5.3 Properties of String Iterator Instances

  // ---------------------------------------
  // 21.2 RegExp (Regular Expression) Objects
  // ---------------------------------------

  // 21.2.1 Patterns
  // 21.2.2 Pattern Semantics
  // 21.2.2.1 Notation
  // 21.2.2.2 Pattern
  // 21.2.2.3 Disjunction
  // 21.2.2.4 Alternative
  // 21.2.2.5 Term
  // 21.2.2.6 Assertion
  // 21.2.2.7 Quantifier
  // 21.2.2.8 Atom
  // 21.2.2.9 AtomEscape
  // 21.2.2.10 CharacterEscape
  // 21.2.2.11 DecimalEscape
  // 21.2.2.12 CharacterClassEscape
  // 21.2.2.13 CharacterClass
  // 21.2.2.14 ClassRanges
  // 21.2.2.15 NonemptyClassRanges
  // 21.2.2.16 NonemptyClassRangesNoDash
  // 21.2.2.17 ClassAtom
  // 21.2.2.18 ClassAtomNoDash
  // 21.2.2.19 ClassEscape
  // 21.2.3 The RegExp Constructor
  // 21.2.3.1 RegExp ( pattern, flags )
  // 21.2.3.2 new RegExp( ...argumentsList )
  // 21.2.3.3 Abstract Operations for the RegExp Constructor
  // 21.2.4 Properties of the RegExp Constructor
  // 21.2.4.1 RegExp.prototype
  // 21.2.5 Properties of the RegExp Prototype Object
  // 21.2.5.1 RegExp.prototype.constructor
  // 21.2.5.2 RegExp.prototype.exec ( string )

  // 21.2.5.3 get RegExp.prototype.flags
  if (!('flags' in RegExp.prototype)) {
    Object.defineProperty(
      RegExp.prototype, 'flags', {
        get: function() {
          var s = String(this);
          return s.substring(s.lastIndexOf('/') + 1);
        }
      });
  }

  // 21.2.5.4 get RegExp.prototype.global
  // 21.2.5.5 get RegExp.prototype.ignoreCase

  // 21.2.5.6 RegExp.prototype [ @@match ] ( string )
  define(RegExp.prototype, $$match, function(string) {
    var o = strict(this);
    return orig_match.call(string, o);
  });

  // 21.2.5.7 get RegExp.prototype.multiline

  // 21.2.5.8 RegExp.prototype [ @@replace ] ( string, replaceValue )
  define(RegExp.prototype, $$replace, function(string, replaceValue) {
    var o = strict(this);
    return orig_replace.call(string, o, replaceValue);
  });

  // 21.2.5.9 RegExp.prototype [ @@search ] ( string )
  define(RegExp.prototype, $$search, function(string) {
    var o = strict(this);
    return orig_search.call(string, o);
  });

  // 21.2.5.10 get RegExp.prototype.source

  // 21.2.5.11 RegExp.prototype [ @@split ] ( string, limit )
  define(RegExp.prototype, $$split, function(string, limit) {
    var o = strict(this);
    return orig_split.call(string, o, limit);
  });

  // 21.2.5.12 get RegExp.prototype.sticky
  // 21.2.5.13 RegExp.prototype.test( S )
  // 21.2.5.14 RegExp.prototype.toString ( )
  // 21.2.5.15 get RegExp.prototype.unicode

  // 21.2.6 Properties of RegExp Instances
  // 21.2.6.1 lastIndex

  // (No polyfillable changes from ES5)

  // ---------------------------------------
  // 22 Indexed Collections
  // ---------------------------------------

  // ---------------------------------------
  // 22.1 Array Objects
  // ---------------------------------------

  // 22.1.1 The Array Constructor
  // 22.1.1.1 Array ( )
  // 22.1.1.2 Array (len)
  // 22.1.1.3 Array (...items )

  // 22.1.2 Properties of the Array Constructor

  // 22.1.2.1 Array.from ( items [ , mapfn [ , thisArg ] ] )
  define(
    Array, 'from',
    function from(items) {
      var mapfn = arguments[1];
      var thisArg = arguments[2];

      var c = strict(this);
      if (mapfn === undefined) {
        var mapping = false;
      } else {
        if (!IsCallable(mapfn)) throw TypeError();
        var t = thisArg;
        mapping = true;
      }
      var usingIterator = GetMethod(items, $$iterator);
      if (usingIterator !== undefined) {
         if (IsConstructor(c)) {
          var a = new c();
        } else {
          a = new Array(0);
        }
        var iterator = GetIterator(items, usingIterator);
        var k = 0;
        while (true) {
          var next = IteratorStep(iterator);
          if (next === false) {
            a.length = k;
            return a;
          }
          var nextValue = IteratorValue(next);
          if (mapping)
            var mappedValue = mapfn.call(t, nextValue);
          else
            mappedValue = nextValue;
          a[k] = mappedValue;
          k += 1;
        }
      }
      var arrayLike = ToObject(items);
      var lenValue = arrayLike.length;
      var len = ToLength(lenValue);
      if (IsConstructor(c)) {
        a = new c(len);
      } else {
        a = new Array(len);
      }
      k = 0;
      while (k < len) {
        var kValue = arrayLike[k];
        if (mapping)
          mappedValue = mapfn.call(t, kValue, k);
        else
          mappedValue = kValue;
        a[k] = mappedValue;
        k += 1;
      }
      a.length = len;
      return a;
    });

  // 22.1.2.2 Array.isArray ( arg )

  // 22.1.2.3 Array.of ( ...items )
  define(
    Array, 'of',
    function of() {
      var items = arguments;

      var lenValue = items.length;
      var len = ToUint32(lenValue);
      var c = strict(this), a;
      if (IsConstructor(c)) {
        a = new c(len);
        a = ToObject(a);
      } else {
        a = new Array(len);
      }
      var k = 0;
      while (k < len) {
        a[k] = items[k];
        k += 1;
      }
      a.length = len;
      return a;
    });

  // 22.1.2.4 Array.prototype
  // 22.1.2.5 get Array [ @@species ]
  // 22.1.3 Properties of the Array Prototype Object
  // 22.1.3.1 Array.prototype.concat ( ...arguments )
  // 22.1.3.1.1 Runtime Semantics: IsConcatSpreadable ( O )
  // 22.1.3.2 Array.prototype.constructor
  // 22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )
  define(
    Array.prototype, 'copyWithin',
    function copyWithin(target, start/*, end*/) {
      var end = arguments[2];

      var o = ToObject(this);
      var lenVal = o.length;
      var len = ToLength(lenVal);
      len = max(len, 0);
      var relativeTarget = ToInteger(target);
      var to;
      if (relativeTarget < 0)
        to = max(len + relativeTarget, 0);
      else
        to = min(relativeTarget, len);
      var relativeStart = ToInteger(start);
      var from;
      if (relativeStart < 0)
        from = max(len + relativeStart, 0);
      else
        from = min(relativeStart, len);
      var relativeEnd;
      if (end === undefined)
        relativeEnd = len;
      else
        relativeEnd = ToInteger(end);
      var final;
      if (relativeEnd < 0)
        final = max(len + relativeEnd, 0);
      else
        final = min(relativeEnd, len);
      var count = min(final - from, len - to);
      var direction;
      if (from < to && to < from + count) {
        direction = -1;
        from = from + count - 1;
        to = to + count - 1;
      } else {
        direction = 1;
      }
      while (count > 0) {
        var fromKey = String(from);
        var toKey = String(to);
        var fromPresent = HasProperty(o, fromKey);
        if (fromPresent) {
          var fromVal = o[fromKey];
          o[toKey] = fromVal;
        } else {
          delete o[toKey];
        }
        from = from + direction;
        to = to + direction;
        count = count - 1;
      }
      return o;
    });

  // 22.1.3.4 Array.prototype.entries ( )
  var nativeArrayIteratorMethods =
        ('entries' in Array.prototype && 'next' in [].entries());

  define(
    Array.prototype, 'entries',
    function entries() {
      return CreateArrayIterator(this, 'key+value');
    }, !nativeArrayIteratorMethods);

  // 22.1.3.5 Array.prototype.every ( callbackfn [ , thisArg] )

  // 22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )
  define(
    Array.prototype, 'fill',
    function fill(value/*, start, end*/) {
      var start = arguments[1],
          end = arguments[2];

      var o = ToObject(this);
      var lenVal = o.length;
      var len = ToLength(lenVal);
      len = max(len, 0);
      var relativeStart = ToInteger(start);
      var k;
      if (relativeStart < 0)
        k = max((len + relativeStart), 0);
      else
        k = min(relativeStart, len);
      var relativeEnd;
      if (end === undefined)
        relativeEnd = len;
      else
        relativeEnd = ToInteger(end);
      var final;
      if (relativeEnd < 0)
        final = max((len + relativeEnd), 0);
      else
        final = min(relativeEnd, len);
      while (k < final) {
        var pk = String(k);
        o[pk] = value;
        k += 1;
      }
      return o;
    });

  // 22.1.3.7 Array.prototype.filter ( callbackfn [ , thisArg ] )

  // 22.1.3.8 Array.prototype.find ( predicate [ , thisArg ] )
  define(
    Array.prototype, 'find',
    function find(predicate) {
      var o = ToObject(this);
      var lenValue = o.length;
      var len = ToInteger(lenValue);
      if (!IsCallable(predicate)) throw TypeError();
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var k = 0;
      while (k < len) {
        var pk = String(k);
        var kPresent = HasProperty(o, pk);
        if (kPresent) {
          var kValue = o[pk];
          var testResult = predicate.call(t, kValue, k, o);
          if (Boolean(testResult)) {
            return kValue;
          }
        }
        ++k;
      }
      return undefined;
    });

  // 22.1.3.9 Array.prototype.findIndex ( predicate [ , thisArg ] )
  define(
    Array.prototype, 'findIndex',
    function findIndex(predicate) {
      var o = ToObject(this);
      var lenValue = o.length;
      var len = ToLength(lenValue);
      if (!IsCallable(predicate)) throw TypeError();
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var k = 0;
      while (k < len) {
        var pk = String(k);
        var kPresent = HasProperty(o, pk);
        if (kPresent) {
          var kValue = o[pk];
          var testResult = predicate.call(t, kValue, k, o);
          if (Boolean(testResult)) {
            return k;
          }
        }
        ++k;
      }
      return -1;
    });

  // 22.1.3.10 Array.prototype.forEach ( callbackfn [ , thisArg ] )
  // 22.1.3.11 Array.prototype.indexOf ( searchElement [ , fromIndex ] )
  // 22.1.3.12 Array.prototype.join (separator)

  // 22.1.3.13 Array.prototype.keys ( )
  define(
    Array.prototype, 'keys',
    function keys() {
      return CreateArrayIterator(this, 'key');
    }, !nativeArrayIteratorMethods);

  // 22.1.3.14 Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
  // 22.1.3.15 Array.prototype.map ( callbackfn [ , thisArg ] )
  // 22.1.3.16 Array.prototype.pop ( )
  // 22.1.3.17 Array.prototype.push ( ...items )
  // 22.1.3.18 Array.prototype.reduce ( callbackfn [ , initialValue ] )
  // 22.1.3.19 Array.prototype.reduceRight ( callbackfn [ , initialValue ] )
  // 22.1.3.20 Array.prototype.reverse ( )
  // 22.1.3.21 Array.prototype.shift ( )
  // 22.1.3.22 Array.prototype.slice (start, end)
  // 22.1.3.23 Array.prototype.some ( callbackfn [ , thisArg ] )
  // 22.1.3.24 Array.prototype.sort (comparefn)
  // 22.1.3.25 Array.prototype.splice (start, deleteCount , ...items )
  // 22.1.3.26 Array.prototype.toLocaleString ( [ reserved1 [ , reserved2 ] ] )
  // 22.1.3.27 Array.prototype.toString ( )
  // 22.1.3.28 Array.prototype.unshift ( ...items )

  // 22.1.3.29 Array.prototype.values ( )
  define(
    Array.prototype, 'values',
    function values() {
      return CreateArrayIterator(this, 'value');
    }, !nativeArrayIteratorMethods);

  // 22.1.3.30 Array.prototype [ @@iterator ] ( )
  define(
    Array.prototype, $$iterator,
    Array.prototype.values
    );

  // 22.1.3.31 Array.prototype [ @@unscopables ]
  // 22.1.4 Properties of Array Instances
  // 22.1.4.1 length

  // 22.1.5 Array Iterator Objects
  function ArrayIterator() {}

  // 22.1.5.1 CreateArrayIterator Abstract Operation
  function CreateArrayIterator(array, kind) {
    var o = ToObject(array);
    var iterator = new ArrayIterator;
    set_internal(iterator, '[[IteratedObject]]', o);
    set_internal(iterator, '[[ArrayIteratorNextIndex]]', 0);
    set_internal(iterator, '[[ArrayIterationKind]]', kind);
    return iterator;
  }

  // 22.1.5.2 The %ArrayIteratorPrototype% Object
  var $ArrayIteratorPrototype$ = Object.create($IteratorPrototype$);
  ArrayIterator.prototype = $ArrayIteratorPrototype$;

  // 22.1.5.2.1 %ArrayIteratorPrototype%. next( )
  define(
    $ArrayIteratorPrototype$, 'next',
    function next() {
      var o = strict(this);
      if (Type(o) !== 'object') throw TypeError();
      var a = o['[[IteratedObject]]'],
          index = o['[[ArrayIteratorNextIndex]]'],
          itemKind = o['[[ArrayIterationKind]]'],
          lenValue = a.length,
          len = ToUint32(lenValue),
          elementKey,
          elementValue;
      if (itemKind.indexOf('sparse') !== -1) {
        var found = false;
        while (!found && index < len) {
          elementKey = String(index);
          found = HasProperty(a, elementKey);
          if (!found) {
            index += 1;
          }
        }
      }
      if (index >= len) {
        set_internal(o, '[[ArrayIteratorNextIndex]]', Infinity);
        return CreateIterResultObject(undefined, true);
      }
      elementKey = index;
      set_internal(o, '[[ArrayIteratorNextIndex]]', index + 1);
      if (itemKind.indexOf('value') !== -1)
        elementValue = a[elementKey];
      if (itemKind.indexOf('key+value') !== -1)
        return CreateIterResultObject([elementKey, elementValue], false);
      if (itemKind.indexOf('key') !== -1)
        return CreateIterResultObject(elementKey, false);
      if (itemKind === 'value')
        return CreateIterResultObject(elementValue, false);
      throw Error('Internal error');
    });

  // 22.1.5.2.2 %ArrayIteratorPrototype% [ @@toStringTag ]
  define($ArrayIteratorPrototype$, $$toStringTag, 'Array Iterator');

  // 22.1.5.3 Properties of Array Iterator Instances


  // ---------------------------------------
  // 22.2 TypedArray Objects
  // ---------------------------------------

  // See typedarray.js for TypedArray polyfill

  ['Int8Array', 'Uint8Array', 'Uint8ClampedArray',
   'Int16Array', 'Uint16Array',
   'Int32Array', 'Uint32Array',
   'Float32Array', 'Float64Array'].forEach(function ($TypedArrayName$) {
     if (!($TypedArrayName$ in global))
       return;
     var $TypedArray$ = global[$TypedArrayName$];

     // 22.2.1 The %TypedArray% Intrinsic Object
     // 22.2.1.1 %TypedArray% ( length )
     // 22.2.1.2 %TypedArray% ( typedArray )
     // 22.2.1.3 %TypedArray% ( object )
     // 22.2.1.4 %TypedArray% ( buffer [ , byteOffset [ , length ] ] )
     // 22.2.1.5 %TypedArray% ( all other argument combinations )
     // 22.2.2 Properties of the %TypedArray% Intrinsic Object

     // 22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )
     define(
       $TypedArray$, 'from',
       function from(source) {
         var mapfn = arguments[1];
         var thisArg = arguments[2];

         var c = strict(this);
         if (!IsConstructor(c)) throw TypeError();
         if (mapfn === undefined) {
           var mapping = false;
         } else {
           if (IsCallable(mapfn)) throw TypeError();
           var t = thisArg;
           mapping = true;
         }
         var usingIterator = GetMethod(source, $$iterator);
         if (usingIterator !== undefined) {
           var iterator = GetIterator(source, usingIterator);
           var values = [];
           var next = true;
           while (next !== false) {
             next = IteratorStep(iterator);
             if (next !== false) {
               var nextValue = IteratorValue(next);
               values.push(nextValue);
             }
           }
           var len = values.length;
           var newObj = new c(len);
           var k = 0;
           while (k < len) {
             var kValue = values.shift();
             if (mapping) {
               var mappedValue = mapfn.call(t, kValue);
             } else {
               mappedValue = kValue;
             }
             newObj[k] = mappedValue;
             ++k;
           }
           console.assert(values.length === 0);
           return newObj;
         }
         var arrayLike = ToObject(source);
         var lenValue = arrayLike.length;
         len = ToLength(lenValue);
         newObj = new c(len);
         k = 0;
         while (k < len) {
           kValue = arrayLike[k];
           if (mapping) {
             mappedValue = mapfn.call(t, kValue, k);
           } else {
             mappedValue = kValue;
           }
           newObj[k] = mappedValue;
           ++k;
         }
         return newObj;
       });

     // 22.2.2.2 %TypedArray%.of ( ...items )
     define(
       $TypedArray$, 'of',
       function of() {
         var items = arguments;

         var len = items.length;
         var c = strict(this);
         var newObj = new c(len);
         var k = 0;
         while (k < len) {
           newObj[k] = items[k];
           ++k;
         }
         return newObj;
       });

     // 22.2.2.3 %TypedArray%.prototype
     // 22.2.2.4 get %TypedArray% [ @@species ]
     // 22.2.3 Properties of the %TypedArrayPrototype% Object
     // 22.2.3.1 get %TypedArray%.prototype.buffer
     // 22.2.3.2 get %TypedArray%.prototype.byteLength
     // 22.2.3.3 get %TypedArray%.prototype.byteOffset
     // 22.2.3.4 %TypedArray%.prototype.constructor

     // 22.2.3.5 %TypedArray%.prototype.copyWithin (target, start [, end ] )
     define($TypedArray$.prototype, 'copyWithin', Array.prototype.copyWithin);

     // 22.2.3.6 %TypedArray%.prototype.entries ( )
     define($TypedArray$.prototype, 'entries', Array.prototype.entries);

     // 22.2.3.7 %TypedArray%.prototype.every ( callbackfn [ , thisArg ] )
     define($TypedArray$.prototype, 'every', Array.prototype.every);

     // 22.2.3.8 %TypedArray%.prototype.fill (value [ , start [ , end ] ] )
     define(
       $TypedArray$.prototype, 'fill',
       //Array.prototype.fill // Doesn't work in Safari 7
       function fill(value/*, start, end*/) {
         var start = arguments[1],
             end = arguments[2];

         var o = ToObject(this);
         var lenVal = o.length;
         var len = ToLength(lenVal);
         len = max(len, 0);
         var relativeStart = ToInteger(start);
         var k;
         if (relativeStart < 0) k = max((len + relativeStart), 0);
         else k = min(relativeStart, len);
         var relativeEnd;
         if (end === undefined) relativeEnd = len;
         else relativeEnd = ToInteger(end);
         var final;
         if (relativeEnd < 0) final = max((len + relativeEnd), 0);
         else final = min(relativeEnd, len);
         while (k < final) {
           var pk = String(k);
           o[pk] = value;
           k += 1;
         }
         return o;
       });

     // 22.2.3.9 %TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )
     define(
       $TypedArray$.prototype, 'filter',
       function filter(callbackfn) {
         var thisArg = arguments[1];

         var o = ToObject(this);
         var lenVal = o.length;
         var len = ToLength(lenVal);
         if (!IsCallable(callbackfn)) throw TypeError();
         var t = thisArg;
         var c = o.constructor;
         var kept = [];
         var k = 0;
         var captured = 0;
         while (k < len) {
           var kValue = o[k];
           var selected = callbackfn.call(t, kValue, k, o);
           if (selected) {
             kept.push(kValue);
             ++captured;
           }
           ++k;
         }
         var a = new c(captured);
         var n = 0;
         for (var i = 0; i < kept.length; ++i) {
           var e = kept[i];
           a[n] = e;
           ++n;
         }
         return a;
       });

     // 22.2.3.10 %TypedArray%.prototype.find (predicate [ , thisArg ] )
     define($TypedArray$.prototype, 'find', Array.prototype.find);

     // 22.2.3.11 %TypedArray%.prototype.findIndex ( predicate [ , thisArg ] )
     define($TypedArray$.prototype, 'findIndex', Array.prototype.findIndex);

     // 22.2.3.12 %TypedArray%.prototype.forEach ( callbackfn [ , thisArg ] )
     define($TypedArray$.prototype, 'forEach', Array.prototype.forEach);

     // 22.2.3.13 %TypedArray%.prototype.indexOf (searchElement [ , fromIndex ] )
     define($TypedArray$.prototype, 'indexOf', Array.prototype.indexOf);

     // 22.2.3.14 %TypedArray%.prototype.join ( separator )
     define($TypedArray$.prototype, 'join', Array.prototype.join);

     // 22.2.3.15 %TypedArray%.prototype.keys ( )
     define($TypedArray$.prototype, 'keys', Array.prototype.keys);

     // 22.2.3.16 %TypedArray%.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
     define($TypedArray$.prototype, 'lastIndexOf', Array.prototype.lastIndexOf);

     // 22.2.3.17 get %TypedArray%.prototype.length

     // 22.2.3.18 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )
     define(
       $TypedArray$.prototype, 'map',
       function map(callbackfn) {
         var thisArg = arguments[1];

         var o = ToObject(this);
         var lenValue = o.length;
         var len = ToLength(lenValue);
         if (!IsCallable(callbackfn)) throw TypeError();
         var t = thisArg;
         var a = undefined;
         var c = o.constructor;
         if (IsConstructor(c))
           a = new c(len);
         if (a === undefined)
           a = new Array(len);
         var k = 0;
         while (k < len) {
           var kPresent = HasProperty(o, k);
           if (kPresent) {
             var kValue = o[k];
             var mappedValue = callbackfn.call(t, kValue, k, o);
             a[k] = mappedValue;
           }
           ++k;
         }
         return a;
       });

     // 22.2.3.19 %TypedArray%.prototype.reduce ( callbackfn [, initialValue] )
     define($TypedArray$.prototype, 'reduce', Array.prototype.reduce);

     // 22.2.3.20 %TypedArray%.prototype.reduceRight ( callbackfn [, initialValue] )
     define($TypedArray$.prototype, 'reduceRight', Array.prototype.reduceRight);

     // 22.2.3.21 %TypedArray%.prototype.reverse ( )
     define($TypedArray$.prototype, 'reverse', Array.prototype.reverse);

     // 22.2.3.22 %TypedArray%.prototype.set ( overloaded [ , offset ])
     // 22.2.3.22.1 %TypedArray%.prototype.set (array [ , offset ] )
     // 22.2.3.22.2 %TypedArray%.prototype.set(typedArray [, offset ] )

     // 22.2.3.23 %TypedArray%.prototype.slice ( start, end )
     define(
       $TypedArray$.prototype, 'slice',
       function slice(start, end) {
         var o = ToObject(this);
         var lenVal = o.length;
         var len = ToLength(lenVal);
         var relativeStart = ToInteger(start);
         var k = (relativeStart < 0) ? max(len + relativeStart, 0) : min(relativeStart, len);
         var relativeEnd = (end === undefined) ? len : ToInteger(end);
         var final = (relativeEnd < 0) ? max(len + relativeEnd, 0) : min(relativeEnd, len);
         var count = final - k;
         var c = o.constructor;
         if (IsConstructor(c)) {
           var a = new c(count);
         } else {
           throw TypeError();
         }
         var n = 0;
         while (k < final) {
           var kValue = o[k];
           a[n] = kValue;
           ++k;
           ++n;
         }
         return a;
       });

     // 22.2.3.24 %TypedArray%.prototype.some ( callbackfn [ , thisArg ] )
     define($TypedArray$.prototype, 'some', Array.prototype.some);

     // 22.2.3.25 %TypedArray%.prototype.sort ( comparefn )
     define(
       $TypedArray$.prototype, 'sort',
       function sort() {
         var comparefn = arguments[0];

         function sortCompare(x, y) {
           console.assert(Type(x) === 'number' && Type(y) === 'number');
           if (x !== x && y !== y) return +0;
           if (x !== x) return 1;
           if (y !== y) return -1;
           if (comparefn !== undefined) {
             return comparefn(x, y);
           }
           if (x < y) return -1;
           if (x > y) return 1;
           return +0;
         }
         return Array.prototype.sort.call(this, sortCompare);
       });

     // 22.2.3.26 %TypedArray%.prototype.subarray( [ begin [ , end ] ] )
     // 22.2.3.27 %TypedArray%.prototype.toLocaleString ([ reserved1 [ , reserved2 ] ])
     // 22.2.3.28 %TypedArray%.prototype.toString ( )

     // 22.2.3.29 %TypedArray%.prototype.values ( )
     define($TypedArray$.prototype, 'values', Array.prototype.values);

     // 22.2.3.30 %TypedArray%.prototype [ @@iterator ] ( )
     define(
       $TypedArray$.prototype, $$iterator,
       $TypedArray$.prototype.values
     );

     // 22.2.3.31 get %TypedArray%.prototype [ @@toStringTag ]
     define($TypedArray$.prototype, $$toStringTag, $TypedArrayName$);

     // 22.2.4 The TypedArray Constructors
     // 22.2.4.1TypedArray( ... argumentsList)
     // 22.2.5 Properties of the TypedArray Constructors
     // 22.2.5.1 TypedArray.BYTES_PER_ELEMENT
     // 22.2.5.2 TypedArray.prototype
     // 22.2.6 Properties of TypedArray Prototype Objects
     // 22.2.6.1 TypedArray.prototype.BYTES_PER_ELEMENT
     // 22.2.6.2 TypedArray.prototype.constructor
     // 22.2.7 Properties of TypedArray Instances
   });

  // ---------------------------------------
  // 23 Keyed Collection
  // ---------------------------------------

  // ---------------------------------------
  // 23.1 Map Objects
  // ---------------------------------------

  (function() {
    // 23.1.1 The Map Constructor

    // 23.1.1.1 Map ( [ iterable ] )
    /** @constructor */
    function Map(/*iterable*/) {
      var map = strict(this);
      var iterable = arguments[0];

      if (Type(map) !== 'object') throw TypeError();
      if ('[[MapData]]' in map) throw TypeError();

      if (iterable !== undefined) {
        var adder = map['set'];
        if (!IsCallable(adder)) throw TypeError();
        var iter = GetIterator(ToObject(iterable));
      }
      set_internal(map, '[[MapData]]', { keys: [], values: [] });
      if (iter === undefined) return map;
      while (true) {
        var next = IteratorStep(iter);
        if (next === false)
          return map;
        var nextItem = IteratorValue(next);
        if (Type(nextItem) !== 'object') throw TypeError();
        var k = nextItem[0];
        var v = nextItem[1];
        adder.call(map, k, v);
      }

      return map;
    }

    if (!('Map' in global) || OVERRIDE_NATIVE_FOR_TESTING ||
        (function() { try { new global.Map([]); return false; } catch (_) { return true; } }()) ||
        (function() { try { return !new global.Map().entries().next; } catch (_) { return true; } }()) ||
        (new global.Map([['a', 1]]).size !== 1))
      global.Map = Map;


    function MapDataIndexOf(mapData, key) {
      var i;
      if (key === key) return mapData.keys.indexOf(key);
      // Slow case for NaN
      for (i = 0; i < mapData.keys.length; i += 1)
        if (SameValueZero(mapData.keys[i], key)) return i;
      return -1;
    }

    // 23.1.1.2 new Map ( ... argumentsList )
    // 23.1.2 Properties of the Map Constructor
    // 23.1.2.1 Map.prototype
    var $MapPrototype$ = {};
    Map.prototype = $MapPrototype$;

    // 23.1.2.2 get Map [ @@species ]

    // 23.1.3 Properties of the Map Prototype Object
    // 23.1.3.1 Map.prototype.clear ()
    define(
      Map.prototype, 'clear',
      function clear() {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        if (!('[[MapData]]' in m)) throw TypeError();
        if (m['[[MapData]]'] === undefined) throw TypeError();
        var entries = m['[[MapData]]'];
        entries.keys.length = 0;
        entries.values.length = 0;
        return undefined;
      });

    // 23.1.3.2 Map.prototype.constructor

    // 23.1.3.3 Map.prototype.delete ( key )
    define(
      Map.prototype, 'delete',
      function delete_(key) {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        if (!('[[MapData]]' in m)) throw TypeError();
        if (m['[[MapData]]'] === undefined) throw TypeError();
        var entries = m['[[MapData]]'];
        var i = MapDataIndexOf(entries, key);
        if (i < 0) return false;
        entries.keys[i] = empty;
        entries.values[i] = empty;
        return true;
      });

    // 23.1.3.4 Map.prototype.entries ( )
    define(
      Map.prototype, 'entries',
      function entries() {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        return CreateMapIterator(m, 'key+value');
      });

    // 23.1.3.5 Map.prototype.forEach ( callbackfn [ , thisArg ] )
    define(
      Map.prototype, 'forEach',
      function forEach(callbackfn /*, thisArg*/) {
        var thisArg = arguments[1];

        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        if (!('[[MapData]]' in m)) throw TypeError();
        if (m['[[MapData]]'] === undefined) throw TypeError();
        var entries = m['[[MapData]]'];

        if (!IsCallable(callbackfn)) {
          throw TypeError('First argument to forEach is not callable.');
        }
        for (var i = 0; i < entries.keys.length; ++i) {
          if (entries.keys[i] !== empty) {
            callbackfn.call(thisArg, entries.values[i], entries.keys[i], m);
          }
        }
        return undefined;
      });

    // 23.1.3.6 Map.prototype.get ( key )
    define(
      Map.prototype, 'get',
      function get(key) {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        if (!('[[MapData]]' in m)) throw TypeError();
        if (m['[[MapData]]'] === undefined) throw TypeError();
        var entries = m['[[MapData]]'];
        var i = MapDataIndexOf(entries, key);
        if (i >= 0) return entries.values[i];
        return undefined;
      });

    // 23.1.3.7 Map.prototype.has ( key )
    define(
      Map.prototype, 'has',
      function has(key) {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        if (!('[[MapData]]' in m)) throw TypeError();
        if (m['[[MapData]]'] === undefined) throw TypeError();
        var entries = m['[[MapData]]'];
        if (MapDataIndexOf(entries, key) >= 0) return true;
        return false;
      });

    // 23.1.3.8 Map.prototype.keys ( )
    define(
      Map.prototype, 'keys',
      function keys() {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        return CreateMapIterator(m, 'key');
      });

    // 23.1.3.9 Map.prototype.set ( key , value )
    define(
      Map.prototype, 'set',
      function set(key, value) {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        if (!('[[MapData]]' in m)) throw TypeError();
        if (m['[[MapData]]'] === undefined) throw TypeError();
        var entries = m['[[MapData]]'];
        var i = MapDataIndexOf(entries, key);
        if (i < 0) i = entries.keys.length;
        if (SameValue(key, -0)) key = 0;
        entries.keys[i] = key;
        entries.values[i] = value;
        return m;
      });

    // 23.1.3.10 get Map.prototype.size
    Object.defineProperty(
      Map.prototype, 'size', {
        get: function() {
          var m = strict(this);
          if (Type(m) !== 'object') throw TypeError();
          if (!('[[MapData]]' in m)) throw TypeError();
          if (m['[[MapData]]'] === undefined) throw TypeError();
          var entries = m['[[MapData]]'];
          var count = 0;
          for (var i = 0; i < entries.keys.length; ++i) {
            if (entries.keys[i] !== empty)
              count = count + 1;
          }
          return count;
        }
      });

    // 23.1.3.11 Map.prototype.values ( )
    define(
      Map.prototype, 'values',
      function values() {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        return CreateMapIterator(m, 'value');
      });

    // 23.1.3.12 Map.prototype [ @@iterator ]( )
    define(
      Map.prototype, $$iterator,
      function() {
        var m = strict(this);
        if (Type(m) !== 'object') throw TypeError();
        return CreateMapIterator(m, 'key+value');
      });

    // 23.1.3.13 Map.prototype [ @@toStringTag ]
    define(global.Map.prototype, $$toStringTag, 'Map');

    // 23.1.4 Properties of Map Instances
    // 23.1.5 Map Iterator Objects

    /** @constructor */
    function MapIterator() {}

    // 23.1.5.1 CreateMapIterator Abstract Operation
    function CreateMapIterator(map, kind) {
      if (Type(map) !== 'object') throw TypeError();
      if (!('[[MapData]]' in map)) throw TypeError();
      if (map['[[MapData]]'] === undefined) throw TypeError();
      var iterator = new MapIterator;
      set_internal(iterator, '[[Map]]', map);
      set_internal(iterator, '[[MapNextIndex]]', 0);
      set_internal(iterator, '[[MapIterationKind]]', kind);
      return iterator;
    }

    // 23.1.5.2 The %MapIteratorPrototype% Object
    var $MapIteratorPrototype$ = Object.create($IteratorPrototype$);
    MapIterator.prototype = $MapIteratorPrototype$;

    // 23.1.5.2.1 %MapIteratorPrototype%.next ( )
    define(
      $MapIteratorPrototype$, 'next',
      function next() {
        var o = strict(this);
        if (Type(o) !== 'object') throw TypeError();
        var m = o['[[Map]]'],
            index = o['[[MapNextIndex]]'],
            itemKind = o['[[MapIterationKind]]'],
            entries = m['[[MapData]]'];
        while (index < entries.keys.length) {
          var e = {key: entries.keys[index], value: entries.values[index]};
          index = index += 1;
          set_internal(o, '[[MapNextIndex]]', index);
          if (e.key !== empty) {
            if (itemKind === 'key') {
              return CreateIterResultObject(e.key, false);
            } else if (itemKind === 'value') {
              return CreateIterResultObject(e.value, false);
            } else {
              return CreateIterResultObject([e.key, e.value], false);
            }
          }
        }
        return CreateIterResultObject(undefined, true);
      });

    // 23.1.5.2.2 %MapIteratorPrototype% [ @@toStringTag ]
    define($MapIteratorPrototype$, $$toStringTag, 'Map Iterator');

    // 23.1.5.3 Properties of Map Iterator Instances
  }());

  // ---------------------------------------
  // 23.2 Set Objects
  // ---------------------------------------

  (function() {
    // 23.2.1 The Set Constructor
    // 23.2.1.1 Set ( [ iterable ] )

    /** @constructor */
    function Set(/*iterable*/) {
      var set = strict(this);
      var iterable = arguments[0];

      if (Type(set) !== 'object') throw TypeError();
      if ('[[SetData]]' in set) throw TypeError();

      if (iterable !== undefined) {
        var adder = set['add'];
        if (!IsCallable(adder)) throw TypeError();
        var iter = GetIterator(ToObject(iterable));
      }
      set_internal(set, '[[SetData]]', []);
      if (iter === undefined) return set;
      while (true) {
        var next = IteratorStep(iter);
        if (next === false)
          return set;
        var nextValue = IteratorValue(next);
        adder.call(set, nextValue);
      }

      return set;
    }

    if (!('Set' in global) || OVERRIDE_NATIVE_FOR_TESTING ||
        (function() { try { return !new global.Set().entries().next; } catch (_) { return true; } }()) ||
        (new global.Set([1]).size !== 1))
      global.Set = Set;

    function SetDataIndexOf(setData, key) {
      var i;
      if (key === key)
        return setData.indexOf(key);
      // Slow case for NaN
      for (i = 0; i < setData.length; i += 1)
        if (SameValueZero(setData[i], key)) return i;
      return -1;
    }

    // 23.2.1.2 new Set ( ...argumentsList )
    // 23.2.2 Properties of the Set Constructor

    // 23.2.2.1 Set.prototype
    var $SetPrototype$ =  {};
    Set.prototype = $SetPrototype$;

    // 23.2.2.2 get Set [ @@species ]
    // 23.2.3 Properties of the Set Prototype Object

    // 23.2.3.1 Set.prototype.add (value )
    define(
      Set.prototype, 'add',
      function add(value) {
        var s = strict(this);
        if (Type(s) !== 'object') throw TypeError();
        if (!('[[SetData]]' in s)) throw TypeError();
        if (s['[[SetData]]'] === undefined) throw TypeError();
        if (SameValue(value, -0)) value = 0;
        var entries = s['[[SetData]]'];
        var i = SetDataIndexOf(entries, value);
        if (i < 0) i = s['[[SetData]]'].length;
        s['[[SetData]]'][i] = value;

        return s;
      });

    // 23.2.3.2 Set.prototype.clear ()
    define(
      Set.prototype, 'clear',
      function clear() {
        var s = strict(this);
        if (Type(s) !== 'object') throw TypeError();
        if (!('[[SetData]]' in s)) throw TypeError();
        if (s['[[SetData]]'] === undefined) throw TypeError();
        var entries = s['[[SetData]]'];
        entries.length = 0;
        return undefined;
      });

    // 23.2.3.3 Set.prototype.constructor
    // 23.2.3.4 Set.prototype.delete ( value )
    define(
      Set.prototype, 'delete',
      function delete_(value) {
        var s = strict(this);
        if (Type(s) !== 'object') throw TypeError();
        if (!('[[SetData]]' in s)) throw TypeError();
        if (s['[[SetData]]'] === undefined) throw TypeError();
        var entries = s['[[SetData]]'];
        var i = SetDataIndexOf(entries, value);
        if (i < 0) return false;
        entries[i] = empty;
        return true;
      });

    // 23.2.3.5 Set.prototype.entries ( )
    define(
      Set.prototype, 'entries',
      function entries() {
        var s = strict(this);
        if (Type(s) !== 'object') throw TypeError();
        return CreateSetIterator(s, 'key+value');
      });

    // 23.2.3.6 Set.prototype.forEach ( callbackfn [ , thisArg ] )
    define(
      Set.prototype, 'forEach',
      function forEach(callbackfn/*, thisArg*/) {
        var thisArg = arguments[1];

        var s = strict(this);
        if (Type(s) !== 'object') throw TypeError();
        if (!('[[SetData]]' in s)) throw TypeError();
        if (s['[[SetData]]'] === undefined) throw TypeError();
        var entries = s['[[SetData]]'];

        if (!IsCallable(callbackfn)) {
          throw TypeError('First argument to forEach is not callable.');
        }
        for (var i = 0; i < entries.length; ++i) {
          if (entries[i] !== empty) {
            callbackfn.call(thisArg, entries[i], entries[i], s);
          }
        }
      });

    // 23.2.3.7 Set.prototype.has ( value )
    define(
      Set.prototype, 'has',
      function has(key) {
        var s = strict(this);
        if (Type(s) !== 'object') throw TypeError();
        if (!('[[SetData]]' in s)) throw TypeError();
        if (s['[[SetData]]'] === undefined) throw TypeError();
        var entries = s['[[SetData]]'];
        return SetDataIndexOf(entries, key) !== -1;
      });

    // 23.2.3.8 Set.prototype.keys ( )
    // See Set.prototype.values

    // 23.2.3.9 get Set.prototype.size
    Object.defineProperty(
      Set.prototype, 'size', {
        get: function() {
          var s = strict(this);
          if (Type(s) !== 'object') throw TypeError();
          if (!('[[SetData]]' in s)) throw TypeError();
          if (s['[[SetData]]'] === undefined) throw TypeError();
          var entries = s['[[SetData]]'];
          var count = 0;
          for (var i = 0; i < entries.length; ++i) {
            if (entries[i] !== empty)
              count = count + 1;
          }
          return count;
        }
      });

    // 23.2.3.10 Set.prototype.values ( )
    define(
      Set.prototype, 'values',
      function values() {
        var s = strict(this);
        if (Type(s) !== 'object') throw TypeError();
        return CreateSetIterator(s, 'value');
      });
    // NOTE: function name is still 'values':
    Set.prototype.keys = Set.prototype.values;

    // 23.2.3.11 Set.prototype [@@iterator ] ( )
    define(
      Set.prototype, $$iterator,
      function() {
        var s = strict(this);
        if (Type(s) !== 'object') throw TypeError();
        return CreateSetIterator(s);
      });

    // 23.2.3.12 Set.prototype [ @@toStringTag ]
    define(global.Set.prototype, $$toStringTag, 'Set');

    // 23.2.4 Properties of Set Instances
    // 23.2.5 Set Iterator Objects
    /** @constructor */
    function SetIterator() {}

    // 23.2.5.1 CreateSetIterator Abstract Operation
    function CreateSetIterator(set, kind) {
      if (Type(set) !== 'object') throw TypeError();
      if (!('[[SetData]]' in set)) throw TypeError();
      if (set['[[SetData]]'] === undefined) throw TypeError();
      var iterator = new SetIterator;
      set_internal(iterator, '[[IteratedSet]]', set);
      set_internal(iterator, '[[SetNextIndex]]', 0);
      set_internal(iterator, '[[SetIterationKind]]', kind);
      return iterator;
    }

    // 23.2.5.2 The %SetIteratorPrototype% Object
    var $SetIteratorPrototype$ = Object.create($IteratorPrototype$);
    SetIterator.prototype = $SetIteratorPrototype$;

    // 23.2.5.2.1 %SetIteratorPrototype%.next( )
    define(
      $SetIteratorPrototype$, 'next',
      function next() {
        var o = strict(this);
        if (Type(o) !== 'object') throw TypeError();
        var s = o['[[IteratedSet]]'],
            index = o['[[SetNextIndex]]'],
            itemKind = o['[[SetIterationKind]]'],
            entries = s['[[SetData]]'];
        while (index < entries.length) {
          var e = entries[index];
          index = index += 1;
          set_internal(o, '[[SetNextIndex]]', index);
          if (e !== empty) {
            if (itemKind === 'key+value')
              return CreateIterResultObject([e, e], false);
            return CreateIterResultObject(e, false);
          }
        }
        return CreateIterResultObject(undefined, true);
      });

    // 23.2.5.2.2 %SetIteratorPrototype% [ @@toStringTag ]
    define($SetIteratorPrototype$, $$toStringTag, 'Set Iterator');

    // 23.2.5.3 Properties of Set Iterator Instances

  }());

  // ---------------------------------------
  // 23.3 WeakMap Objects
  // ---------------------------------------

  (function() {
    // 23.3.1 The WeakMap Constructor
    // 23.3.1.1 WeakMap ( [ iterable ] )
    /** @constructor */
    function WeakMap(/*iterable*/) {
      var map = strict(this);
      var iterable = arguments[0];

      if (Type(map) !== 'object') throw TypeError();
      if ('[[WeakMapData]]' in map) throw TypeError();

      if (iterable !== undefined) {
        var adder = map['set'];
        if (!IsCallable(adder)) throw TypeError();
        var iter = GetIterator(ToObject(iterable));
      }
      set_internal(map, '[[WeakMapData]]', new EphemeronTable);
      if (iter === undefined) return map;
      while (true) {
        var next = IteratorStep(iter);
        if (next === false)
          return map;
        var nextValue = IteratorValue(next);
        if (Type(nextValue) !== 'object') throw TypeError();
        var k = nextValue[0];
        var v = nextValue[1];
        adder.call(map, k, v);
      }

      return map;
    }

    if (!('WeakMap' in global) || OVERRIDE_NATIVE_FOR_TESTING)
      global.WeakMap = WeakMap;

    // 23.3.2 Properties of the WeakMap Constructor
    // 23.3.2.1 WeakMap.prototype
    var $WeakMapPrototype$ = {};
    WeakMap.prototype = $WeakMapPrototype$;



   // 23.3.2.2 WeakMap[ @@create ] ( )
    // 23.3.3 Properties of the WeakMap Prototype Object

    // 23.3.3.1 WeakMap.prototype.constructor

    // 23.3.3.2 WeakMap.prototype.delete ( key )
    define(
      WeakMap.prototype, 'delete',
      function delete_(key) {
        var M = strict(this);
        if (Type(M) !== 'object') throw TypeError();
        if (M['[[WeakMapData]]'] === undefined) throw TypeError();
        if (Type(key) !== 'object') throw TypeError('Expected object');
        return M['[[WeakMapData]]'].remove(key);
      });

    // 23.3.3.3 WeakMap.prototype.get ( key )
    define(
      WeakMap.prototype, 'get',
      function get(key, defaultValue) {
        var M = strict(this);
        if (Type(M) !== 'object') throw TypeError();
        if (M['[[WeakMapData]]'] === undefined) throw TypeError();
        if (Type(key) !== 'object') throw TypeError('Expected object');
        return M['[[WeakMapData]]'].get(key, defaultValue);
      });

    // 23.3.3.4 WeakMap.prototype.has ( key )
    define(
      WeakMap.prototype, 'has',
      function has(key) {
        var M = strict(this);
        if (Type(M) !== 'object') throw TypeError();
        if (M['[[WeakMapData]]'] === undefined) throw TypeError();
        if (Type(key) !== 'object') throw TypeError('Expected object');
        return M['[[WeakMapData]]'].has(key);
      });

    // 23.3.3.5 WeakMap.prototype.set ( key , value )
    define(
      WeakMap.prototype, 'set',
      function set(key, value) {
        var M = strict(this);
        if (Type(M) !== 'object') throw TypeError();
        if (M['[[WeakMapData]]'] === undefined) throw TypeError();
        if (Type(key) !== 'object') throw TypeError('Expected object');
        M['[[WeakMapData]]'].set(key, value);
        return M;
      });

    // 23.3.3.6 WeakMap.prototype [ @@toStringTag ]
    define(global.WeakMap.prototype, $$toStringTag, 'WeakMap');

    // 23.3.4 Properties of WeakMap Instances

    // Polyfills for incomplete native implementations:
    (function() {
      var wm = new global.WeakMap();
      var orig = global.WeakMap.prototype.set;
      define(global.WeakMap.prototype, 'set', function set() {
        orig.apply(this, arguments);
        return this;
      }, wm.set({}, 0) !== wm);
    }());
  }());

  // ---------------------------------------
  // 23.4 WeakSet Objects
  // ---------------------------------------

  (function() {
    // 23.4.1 The WeakSet Constructor
    // 23.4.1.1 WeakSet ( [ iterable ] )
    /** @constructor */
    function WeakSet(/*iterable*/) {
      var set = strict(this);
      var iterable = arguments[0];

      if (Type(set) !== 'object') throw TypeError();
      if ('[[WeakSetData]]' in set) throw TypeError();

      if (iterable !== undefined) {
        var adder = set['add'];
        if (!IsCallable(adder)) throw TypeError();
        var iter = GetIterator(ToObject(iterable));
      }
      set_internal(set, '[[WeakSetData]]', new EphemeronTable);
      if (iter === undefined) return set;
      while (true) {
        var next = IteratorStep(iter);
        if (next === false)
          return set;
        var nextValue = IteratorValue(next);
        adder.call(set, nextValue);
      }

      return set;
    }

    if (!('WeakSet' in global) || OVERRIDE_NATIVE_FOR_TESTING)
      global.WeakSet = WeakSet;

    // 23.4.2 Properties of the WeakSet Constructor
    // 23.4.2.1 WeakSet.prototype
    var $WeakSetPrototype$ = {};
    WeakSet.prototype = $WeakSetPrototype$;

    // 23.4.3 Properties of the WeakSet Prototype Object
    // 23.4.3.1 WeakSet.prototype.add (value )
    define(
      WeakSet.prototype, 'add',
      function add(value) {
        var S = strict(this);
        if (Type(S) !== 'object') throw TypeError();
        if (S['[[WeakSetData]]'] === undefined) throw TypeError();
        if (Type(value) !== 'object') throw TypeError('Expected object');
        S['[[WeakSetData]]'].set(value, true);
        return S;
      });

    // 23.4.3.2 WeakSet.prototype.constructor
    // 23.4.3.3 WeakSet.prototype.delete ( value )
    define(
      WeakSet.prototype, 'delete',
      function delete_(value) {
        var S = strict(this);
        if (Type(S) !== 'object') throw TypeError();
        if (S['[[WeakSetData]]'] === undefined) throw TypeError();
        if (Type(value) !== 'object') throw TypeError('Expected object');
        return S['[[WeakSetData]]'].remove(value);
      });

    // 23.4.3.4 WeakSet.prototype.has ( value )
    define(
      WeakSet.prototype, 'has',
      function has(key) {
        var S = strict(this);
        if (Type(S) !== 'object') throw TypeError();
        if (S['[[WeakSetData]]'] === undefined) throw TypeError();
        if (Type(key) !== 'object') throw TypeError('Expected object');
        return S['[[WeakSetData]]'].has(key);
      });

    // 23.4.3.5 WeakSet.prototype [ @@toStringTag ]
    define(global.WeakSet.prototype, $$toStringTag, 'WeakSet');

    // 23.4.4 Properties of WeakSet Instances

    // Polyfills for incomplete native implementations:
    (function() {
      var ws = new global.WeakSet();
      var orig = global.WeakSet.prototype.add;
      define(global.WeakSet.prototype, 'add', function add() {
        orig.apply(this, arguments);
        return this;
      }, ws.add({}) !== ws);
    }());
  }());

  // ---------------------------------------
  // 24 Structured Data
  // ---------------------------------------

  // ---------------------------------------
  // 24.1 ArrayBuffer Objects
  // ---------------------------------------

  // See typedarray.js for TypedArray polyfill

  (function() {
    if (!('ArrayBuffer' in global))
      return;

    // 24.1.1 Abstract Operations For ArrayBuffer Objects
    // 24.1.1.1 AllocateArrayBuffer( constructor, byteLength )
    // 24.1.1.2 IsDetachedBuffer( arrayBuffer )
    // 24.1.1.3 DetachArrayBuffer( arrayBuffer )
    // 24.1.1.4 CloneArrayBuffer( srcBuffer, srcByteOffset [, cloneConstructor] )
    // 24.1.1.5 GetValueFromBuffer ( arrayBuffer, byteIndex, type, isLittleEndian )
    // 24.1.1.6 SetValueInBuffer ( arrayBuffer, byteIndex, type, value, isLittleEndian )
    // 24.1.2 The ArrayBuffer Constructor
    // 24.1.2.1 ArrayBuffer( length )
    // 24.1.3 Properties of the ArrayBuffer Constructor

    // 24.1.3.1 ArrayBuffer.isView ( arg )
    define(
      ArrayBuffer, 'isView',
      function isView(arg) {
        if (Type(arg) !== 'object') return false;
        if ('buffer' in arg && arg.buffer instanceof ArrayBuffer) return true;
        return false;
      });

    // 24.1.3.2 ArrayBuffer.prototype
    // 24.1.3.3 get ArrayBuffer [ @@species ]
    // 24.1.4 Properties of the ArrayBuffer Prototype Object
    // 24.1.4.1 get ArrayBuffer.prototype.byteLength
    // 24.1.4.2 ArrayBuffer.prototype.constructor
    // 24.1.4.3 ArrayBuffer.prototype.slice ( start , end)

    // 24.1.4.4 ArrayBuffer.prototype [ @@toStringTag ]
    define(ArrayBuffer.prototype, $$toStringTag, 'ArrayBuffer');

    // 24.1.5 Properties of the ArrayBuffer Instances
  }());

  // ---------------------------------------
  // 24.2 DataView Objects
  // ---------------------------------------

  // See typedarray.js for TypedArray polyfill

  (function() {
    if (!('DataView' in global))
      return;

    // 24.2.1 Abstract Operations For DataView Objects
    // 24.2.1.1 GetViewValue(view, requestIndex, isLittleEndian, type)
    // 24.2.1.2 SetViewValue(view, requestIndex, isLittleEndian, type, value)
    // 24.2.2 The DataView Constructor
    // 24.2.2.1 DataView (buffer [ , byteOffset [ , byteLength ] ] )
    // 24.2.3 Properties of the DataView Constructor
    // 24.2.3.1 DataView.prototype
    // 24.2.4 Properties of the DataView Prototype Object
    // 24.2.4.1 get DataView.prototype.buffer
    // 24.2.4.2 get DataView.prototype.byteLength
    // 24.2.4.3 get DataView.prototype.byteOffset
    // 24.2.4.4 DataView.prototype.constructor
    // 24.2.4.5 DataView.prototype.getFloat32 ( byteOffset [ , littleEndian ] )
    // 24.2.4.6 DataView.prototype.getFloat64 ( byteOffset [ , littleEndian ] )
    // 24.2.4.7 DataView.prototype.getInt8 ( byteOffset )
    // 24.2.4.8 DataView.prototype.getInt16 ( byteOffset [ , littleEndian ] )
    // 24.2.4.9 DataView.prototype.getInt32 ( byteOffset [ , littleEndian ] )
    // 24.2.4.10 DataView.prototype.getUint8 ( byteOffset )
    // 24.2.4.11 DataView.prototype.getUint16 ( byteOffset [ , littleEndian ] )
    // 24.2.4.12 DataView.prototype.getUint32 ( byteOffset [ , littleEndian ] )
    // 24.2.4.13 DataView.prototype.setFloat32 ( byteOffset, value [ , littleEndian ] )
    // 24.2.4.14 DataView.prototype.setFloat64 ( byteOffset, value [ , littleEndian ] )
    // 24.2.4.15 DataView.prototype.setInt8 ( byteOffset, value )
    // 24.2.4.16 DataView.prototype.setInt16 ( byteOffset, value [ , littleEndian ] )
    // 24.2.4.17 DataView.prototype.setInt32 ( byteOffset, value [ , littleEndian ] )
    // 24.2.4.18 DataView.prototype.setUint8 ( byteOffset, value )
    // 24.2.4.19 DataView.prototype.setUint16 ( byteOffset, value [ , littleEndian ] )
    // 24.2.4.20 DataView.prototype.setUint32 ( byteOffset, value [ , littleEndian ] )

    // 24.2.4.21 DataView.prototype[ @@toStringTag ]
    define(DataView.prototype, $$toStringTag, 'DataView');

    // 24.2.5 Properties of DataView Instances
  }());

  // ---------------------------------------
  // 24.3 The JSON Object
  // ---------------------------------------

  // 24.3.1 JSON.parse ( text [ , reviver ] )
  // 24.3.2 JSON.stringify ( value [ , replacer [ , space ] ] )
  // 24.3.3 JSON [ @@toStringTag ]
  define(JSON, $$toStringTag, 'JSON');

  // ---------------------------------------
  // 25.1 Iteration
  // ---------------------------------------

  // 25.1.1 Common Iteration Interfaces
  // 25.1.1.1 The Iterable Interface
  // 25.1.1.2 The Iterator Interface
  // 25.1.1.3 The IteratorResult Interface

  // 25.1.2 The %IteratorPrototype% Object
  // Defined earlier, so other prototypes can reference it.
  // 25.1.2.1 %IteratorPrototype% [ @@iterator ] ( )
  define($IteratorPrototype$, $$iterator, function() {
    return this;
  });


  // ---------------------------------------
  // 25.4 Promise Objects
  // ---------------------------------------

  (function() {
    // 25.4 Promise Objects

    // 25.4.1 Promise Abstract Operations

    // 25.4.1.1 PromiseCapability Records
    // 25.4.1.1.1 IfAbruptRejectPromise ( value, capability )

    function IfAbruptRejectPromise(value, capability) {
      var rejectResult = capability['[[Reject]]'].call(undefined, value);
      return capability['[[Promise]]'];
    }

    // 25.4.1.2 PromiseReaction Records

    // 25.4.1.3 CreateResolvingFunctions ( promise )

    function CreateResolvingFunctions(promise) {
      var alreadyResolved = {'[[value]]': false};
      var resolve = PromiseResolveFunction();
      set_internal(resolve, '[[Promise]]',  promise);
      set_internal(resolve, '[[AlreadyResolved]]', alreadyResolved);
      var reject = PromiseRejectFunction();
      set_internal(reject, '[[Promise]]', promise);
      set_internal(reject, '[[AlreadyResolved]]', alreadyResolved);
      return { '[[Resolve]]': resolve, '[[Reject]]': reject};
    }

    // 25.4.1.3.1 Promise Reject Functions

    function PromiseRejectFunction() {
      var F = function(reason) {
        console.assert(Type(F['[[Promise]]']) === 'object');
        var promise = F['[[Promise]]'];
        var alreadyResolved = F['[[AlreadyResolved]]'];
        if (alreadyResolved['[[value]]']) return undefined;
        set_internal(alreadyResolved, '[[value]]', true);
        return RejectPromise(promise, reason);
      };
      return F;
    }

    // 25.4.1.3.2 Promise Resolve Functions

    function PromiseResolveFunction() {
      var F = function(resolution) {
        console.assert(Type(F['[[Promise]]']) === 'object');
        var promise = F['[[Promise]]'];
        var alreadyResolved = F['[[AlreadyResolved]]'];
        if (alreadyResolved['[[value]]']) return undefined;
        set_internal(alreadyResolved, '[[value]]', true);

        if (SameValue(resolution, promise))  {
          var selfResolutionError = TypeError();
          return RejectPromise(promise, selfResolutionError);
        }
        if (Type(resolution) !== 'object')
          return FulfillPromise(promise, resolution);
        try {
          var then = resolution['then'];
        } catch(then) {
          return RejectPromise(promise, then);
        }
        if (!IsCallable(then))
          return FulfillPromise(promise, resolution);
        EnqueueJob('PromiseJobs', PromiseResolveThenableJob, [promise, resolution, then]);
        return undefined;
      };
      return F;
    }

    // 25.4.1.4 FulfillPromise ( promise, value )

    function FulfillPromise(promise, value) {
      console.assert(promise['[[PromiseState]]'] === 'pending');
      var reactions = promise['[[PromiseFulfillReactions]]'];
      set_internal(promise, '[[PromiseResult]]', value);
      set_internal(promise, '[[PromiseFulfillReactions]]', undefined);
      set_internal(promise, '[[PromiseRejectReactions]]', undefined);
      set_internal(promise, '[[PromiseState]]', 'fulfilled');
      return TriggerPromiseReactions(reactions, value);
    }

    // 25.4.1.5 NewPromiseCapability ( C )

    function NewPromiseCapability(c) {
      // To keep Promise hermetic, this doesn't look much like the spec.
      return CreatePromiseCapabilityRecord(undefined, c);
    }

    // 25.4.1.5.1 CreatePromiseCapabilityRecord ( promise, constructor )

    function CreatePromiseCapabilityRecord(promise, constructor) {
      // To keep Promise hermetic, this doesn't look much like the spec.
      console.assert(IsConstructor(constructor));
      var promiseCapability = {};
      set_internal(promiseCapability, '[[Promise]]', promise);
      set_internal(promiseCapability, '[[Resolve]]', undefined);
      set_internal(promiseCapability, '[[Reject]]', undefined);
      var executor = GetCapabilitiesExecutor();
      set_internal(executor, '[[Capability]]', promiseCapability);

      // NOTE: Differs from spec; object is constructed here
      var constructorResult = promise = new constructor(executor);
      set_internal(promiseCapability, '[[Promise]]', promise);

      if (!IsCallable(promiseCapability['[[Resolve]]'])) throw TypeError();
      if (!IsCallable(promiseCapability['[[Reject]]'])) throw TypeError();
      if (Type(constructorResult) === 'object' && !SameValue(promise, constructorResult)) throw TypeError();
      return promiseCapability;
    }

    // 25.4.1.5.2 GetCapabilitiesExecutor Functions

    function GetCapabilitiesExecutor() {
      var F = function(resolve, reject) {
        console.assert(F['[[Capability]]']);
        var promiseCapability = F['[[Capability]]'];
        if (promiseCapability['[[Resolve]]'] !== undefined) throw TypeError();
        if (promiseCapability['[[Reject]]'] !== undefined) throw TypeError();
        set_internal(promiseCapability, '[[Resolve]]', resolve);
        set_internal(promiseCapability, '[[Reject]]', reject);
        return undefined;
      };
      return F;
    }

    // 25.4.1.6 IsPromise ( x )

    function IsPromise(x) {
      if (Type(x) !== 'object') return false;
      if (!('[[PromiseState]]' in x)) return false;
      if (x['[[PromiseState]]'] === undefined) return false;
      return true;
    }

    // 25.4.1.7 RejectPromise ( promise, reason )

    function RejectPromise(promise, reason) {
      console.assert(promise['[[PromiseState]]'] === 'pending');
      var reactions = promise['[[PromiseRejectReactions]]'];
      set_internal(promise, '[[PromiseResult]]', reason);
      set_internal(promise, '[[PromiseFulfillReactions]]', undefined);
      set_internal(promise, '[[PromiseRejectReactions]]', undefined);
      set_internal(promise, '[[PromiseState]]', 'rejected');
      return TriggerPromiseReactions(reactions, reason);
    }

    // 25.4.1.8 TriggerPromiseReactions ( reactions, argument )

    function TriggerPromiseReactions(reactions, argument) {
      for (var i = 0, len = reactions.length; i < len; ++i)
        EnqueueJob('PromiseJobs', PromiseReactionJob, [reactions[i], argument]);
      return undefined;
    }

    // 25.4.2 Promise Jobs

    // 25.4.2.1 PromiseReactionJob ( reaction, argument )

    function PromiseReactionJob(reaction, argument) {
      var promiseCapability = reaction['[[Capabilities]]'];
      var handler = reaction['[[Handler]]'];
      var handlerResult, status;
      try {
        if (handler === 'Identity') handlerResult = argument;
        else if (handler === 'Thrower') throw argument;
        else handlerResult = handler.call(undefined, argument);
      } catch (handlerResult) {
        status = promiseCapability['[[Reject]]'].call(undefined, handlerResult);
        NextJob(status); return;
      }
      status = promiseCapability['[[Resolve]]'].call(undefined, handlerResult);
      NextJob(status);
    }

    // 25.4.2.2 PromiseResolveThenableJob ( promiseToResolve, thenable, then)

    function PromiseResolveThenableJob(promiseToResolve, thenable, then) {
      // SPEC BUG: promise vs. promiseToResolve
      var resolvingFunctions = CreateResolvingFunctions(promiseToResolve);
      try {
        var thenCallResult = then.call(thenable, resolvingFunctions['[[Resolve]]'],
                                       resolvingFunctions['[[Reject]]']);
      } catch (thenCallResult) {
        var status = resolvingFunctions['[[Reject]]'].call(undefined, thenCallResult);
        NextJob(status); return;
      }
      NextJob(thenCallResult);
    }

    // 25.4.3 The Promise Constructor

    // 25.4.3.1 Promise ( executor )

    function Promise(executor) {
      var config = { configurable: false, enumerable: false, writable: true, value: undefined };
      Object.defineProperty(this, '[[PromiseState]]', config);
      Object.defineProperty(this, '[[PromiseConstructor]]', config);
      Object.defineProperty(this, '[[PromiseResult]]', config);
      Object.defineProperty(this, '[[PromiseFulfillReactions]]', config);
      Object.defineProperty(this, '[[PromiseRejectReactions]]', config);

      var promise = this;
      if (Type(promise) !== 'object') throw new TypeError();
      if (!('[[PromiseState]]' in promise)) throw TypeError();
      if (promise['[[PromiseState]]'] !== undefined) throw TypeError();
      if (!IsCallable(executor)) throw TypeError();

      set_internal(promise, '[[PromiseConstructor]]', Promise);

      return InitializePromise(promise, executor);
    }

    // 25.4.3.1.1 InitializePromise ( promise, executor )

    function InitializePromise(promise, executor) {
      console.assert('[[PromiseState]]' in promise);
      console.assert(IsCallable(executor));
      set_internal(promise, '[[PromiseState]]', 'pending');
      set_internal(promise, '[[PromiseFulfillReactions]]', []);
      set_internal(promise, '[[PromiseRejectReactions]]', []);
      var resolvingFunctions = CreateResolvingFunctions(promise);
      try {
        var completion = executor.call(undefined, resolvingFunctions['[[Resolve]]'],
                                       resolvingFunctions['[[Reject]]']);
      } catch (completion) {
        var status = resolvingFunctions['[[Reject]]'].call(undefined, completion);
      }
      return promise;
    }

    // 25.4.4 Properties of the Promise Constructor
    // 25.4.4.1 Promise.all ( iterable )

    define(Promise, 'all', function all(iterable) {
      var c = strict(this);
      var promiseCapability = NewPromiseCapability(c);
      try {
        var iterator = GetIterator(iterable);
      } catch (value) {
        promiseCapability['[[Reject]]'].call(undefined, value);
        return promiseCapability['[[Promise]]'];
      }
      var values = [];
      var remainingElementsCount = { value: 1 };
      var index = 0;
      while (true) {
        try {
          var next = IteratorStep(iterator);
        } catch (value) {
          promiseCapability['[[Reject]]'].call(undefined, value);
          return promiseCapability['[[Promise]]'];
        }
        if (!next) {
          remainingElementsCount.value -= 1;
          if (remainingElementsCount.value === 0) {
            var resolveResult = promiseCapability['[[Resolve]]'].apply(undefined, values);


          }
          return promiseCapability['[[Promise]]'];
        }
        try {
          var nextValue = IteratorValue(next);
        } catch (value) {
          promiseCapability['[[Reject]]'].call(undefined, value);
          return promiseCapability['[[Promise]]'];
        }
        try {
          var nextPromise = c.resolve(nextValue);
        } catch (value) {
          promiseCapability['[[Reject]]'].call(undefined, value);
          return promiseCapability['[[Promise]]'];
        }
        var resolveElement = PromiseAllResolveElementFunction();
        set_internal(resolveElement, '[[AlreadyCalled]]', { value: false });
        set_internal(resolveElement, '[[Index]]', index);
        set_internal(resolveElement, '[[Values]]', values);
        set_internal(resolveElement, '[[Capabilities]]', promiseCapability);
        set_internal(resolveElement, '[[RemainingElements]]', remainingElementsCount);
        remainingElementsCount.value += 1;
        try {
          var result = nextPromise.then(resolveElement, promiseCapability['[[Reject]]']);
        } catch (value) {
          promiseCapability['[[Reject]]'].call(undefined, value);
          return promiseCapability['[[Promise]]'];
        }
        index += 1;
      }
    });

    // 25.4.4.1.1 Promise.all Resolve Element Functions

    function PromiseAllResolveElementFunction() {
      var F = function(x) {
        var alreadyCalled = F['[[AlreadyCalled]]'];
        if (alreadyCalled.value) return undefined;
        alreadyCalled.value = true;
        var index = F['[[Index]]'];
        var values = F['[[Values]]'];
        var promiseCapability = F['[[Capabilities]]'];
        var remainingElementsCount = F['[[RemainingElements]]'];
        try {
          values[index] = x;
        } catch (result) {
          promiseCapability['[[Reject]]'].call(undefined, result);
          return promiseCapability['[[Promise]]'];
        }
        remainingElementsCount.value -= 1;
        if (remainingElementsCount.value === 0)
          return promiseCapability['[[Resolve]]'].call(undefined, values);
        return undefined;
      };
      return F;
    }

    // 25.4.4.2 Promise.prototype

    Promise.prototype = {};

    // 25.4.4.3 Promise.race ( iterable )

    define(Promise, 'race', function race(iterable) {
      var c = strict(this);
      var promiseCapability = NewPromiseCapability(c);
      try {
        var iterator = GetIterator(iterable);
      } catch (value) {
        promiseCapability['[[Reject]]'].call(undefined, value);
        return promiseCapability['[[Promise]]'];
      }
      while (true) {
        try {
          var next = IteratorStep(iterator);
        } catch (value) {
          promiseCapability['[[Reject]]'].call(undefined, value);
          return promiseCapability['[[Promise]]'];
        }
        if (!next) return promiseCapability['[[Promise]]'];
        try {
          var nextValue = IteratorValue(next);
        } catch (value) {
          promiseCapability['[[Reject]]'].call(undefined, value);
          return promiseCapability['[[Promise]]'];
        }
        try {
          var nextPromise = c.resolve(nextValue);
        } catch (value) {
          promiseCapability['[[Reject]]'].call(undefined, value);
          return promiseCapability['[[Promise]]'];
        }
        try {
          nextPromise.then(promiseCapability['[[Resolve]]'], promiseCapability['[[Reject]]']);
        } catch (value) {
          promiseCapability['[[Reject]]'].call(undefined, value);
          return promiseCapability['[[Promise]]'];
        }
      }
    });

    // 25.4.4.4 Promise.reject ( r )

    define(Promise, 'reject', function reject(r) {
      var c = strict(this);
      var promiseCapability = NewPromiseCapability(c);
      var rejectResult = promiseCapability['[[Reject]]'].call(undefined, r);
      return promiseCapability['[[Promise]]'];
    });

    // 25.4.4.5 Promise.resolve ( x )

    define(Promise, 'resolve', function resolve(x) {
      var c = strict(this);
      if (IsPromise(x)) {
        var constructor = x['[[PromiseConstructor]]'];
        if (SameValue(constructor, c)) return x;
      }
      var promiseCapability = NewPromiseCapability(c);
      var resolveResult = promiseCapability['[[Resolve]]'].call(undefined, x);
      return promiseCapability['[[Promise]]'];
    });

    // 25.4.4.6 Promise [ @@create ] ( )
    // 25.4.4.6.1 AllocatePromise ( constructor )
    // 25.4.5 Properties of the Promise Prototype Object
    // 25.4.5.1 Promise.prototype.catch ( onRejected )

    define(Promise.prototype, 'catch', function catch_(onRejected) {
      var promise = this;
      return promise.then(undefined, onRejected);
    });

    // 25.4.5.2 Promise.prototype.constructor

    Promise.prototype.constructor = Promise;

    // 25.4.5.3 Promise.prototype.then ( onFulfilled , onRejected )

    define(Promise.prototype, 'then', function then(onFulfilled, onRejected) {
      var promise = this;
      if (!IsPromise(promise)) throw TypeError();
      if (!IsCallable(onFulfilled)) onFulfilled = 'Identity';
      if (!IsCallable(onRejected)) onRejected = 'Thrower';
      var c = promise.constructor;
      var promiseCapability = NewPromiseCapability(c);
      var fulfillReaction = { '[[Capabilities]]': promiseCapability,
                              '[[Handler]]': onFulfilled };
      var rejectReaction = { '[[Capabilities]]': promiseCapability,
                             '[[Handler]]': onRejected };
      if (promise['[[PromiseState]]'] === 'pending') {
        promise['[[PromiseFulfillReactions]]'].push(fulfillReaction);
        promise['[[PromiseRejectReactions]]'].push(rejectReaction);
      } else if (promise['[[PromiseState]]'] === 'fulfilled') {
        var value = promise['[[PromiseResult]]'];
        EnqueueJob('PromiseJobs', PromiseReactionJob, [fulfillReaction, value]);
      } else if (promise['[[PromiseState]]'] === 'rejected') {
        var reason = promise['[[PromiseResult]]'];
        EnqueueJob('PromiseJobs', PromiseReactionJob, [rejectReaction, reason]);
      }
      return promiseCapability['[[Promise]]'];
    });

    // 25.4.6 Properties of Promise Instances

    if (!('Promise' in global) || OVERRIDE_NATIVE_FOR_TESTING)
      global.Promise = Promise;

    // Patch early Promise.cast vs. Promise.resolve implementations
    if ('cast' in global.Promise) global.Promise.resolve = global.Promise.cast;
  }());

  // 25.4.5.1 Promise.prototype [ @@toStringTag ]
  define(Promise.prototype, $$toStringTag, 'Promise');

  // ---------------------------------------
  // 26 Reflection
  // ---------------------------------------

  (function() {
    // 26.1 The Reflect Object
    if (!('Reflect' in global) || OVERRIDE_NATIVE_FOR_TESTING)
      global.Reflect = {};

    // 26.1.1 Reflect.apply ( target, thisArgument, argumentsList )
    define(
      Reflect, 'apply',
      function apply(target, thisArgument, argumentsList) {
        if (!IsCallable(target)) throw TypeError();
        return Function.prototype.apply.call(target, thisArgument, argumentsList);
      });

    // 26.1.2 Reflect.construct ( target, argumentsList [, newTarget] )
    define(
      Reflect, 'construct',
      function construct(target, argumentsList) {
        return __cons(target, argumentsList);
      });

    // 26.1.3 Reflect.defineProperty ( target, propertyKey, attributes )
    define(
      Reflect, 'defineProperty',
      function defineProperty(target, propertyKey, attributes) {
        try {
          Object.defineProperty(target, propertyKey, attributes);
          return true;
        } catch (_) {
          return false;
        }
      });

    // 26.1.4 Reflect.deleteProperty ( target, propertyKey )
    define(
      Reflect, 'deleteProperty',
      function deleteProperty(target,name) {
        try {
          delete target[name];
          return !HasOwnProperty(target, name);
        } catch (_) {
          return false;
        }
      });

    // 26.1.5 Reflect.enumerate ( target )
    define(
      Reflect, 'enumerate',
      function enumerate(target) {
        target = ToObject(target);
        var iterator = Enumerate(target);
        return iterator;
      });

    // 26.1.6 Reflect.get ( target, propertyKey [ , receiver ])
    define(
      Reflect, 'get',
      function get(target, name, receiver) {
        target = ToObject(target);
        name = String(name);
        receiver = (receiver === undefined) ? target : ToObject(receiver);
        var desc = getPropertyDescriptor(target, name);
        if (desc && 'get' in desc)
          return Function.prototype.call.call(desc['get'], receiver);
        return target[name];
      });

    // 26.1.7 Reflect.getOwnPropertyDescriptor ( target, propertyKey )
    define(
      Reflect, 'getOwnPropertyDescriptor',
      Object.getOwnPropertyDescriptor);

    // 26.1.8 Reflect.getPrototypeOf ( target )
    define(
      Reflect, 'getPrototypeOf',
      Object.getPrototypeOf);

    // 26.1.9 Reflect.has ( target, propertyKey )
    define(
      Reflect, 'has',
      function has(target,name) {
        return String(name) in ToObject(target);
      });

    // 26.1.10 Reflect.isExtensible (target)
    define(
      Reflect, 'isExtensible',
      Object.isExtensible);

    // 26.1.11 Reflect.ownKeys ( target )
    define(
      Reflect, 'ownKeys',
      function ownKeys(target) {
        var obj = ToObject(target);
        return Object.getOwnPropertyNames(obj);
      });

    // 26.1.12 Reflect.preventExtensions ( target )
    define(
      Reflect, 'preventExtensions',
      function preventExtensions(target) {
        try { Object.preventExtensions(target); return true; } catch (_) { return false; }
      });

    // 26.1.13 Reflect.set ( target, propertyKey, V [ , receiver ] )
    define(
      Reflect, 'set',
      function set(target, name, value, receiver) {
        target = ToObject(target);
        name = String(name);
        receiver = (receiver === undefined) ? target : ToObject(receiver);
        var desc = getPropertyDescriptor(target, name);
        try {
          if (desc && 'set' in desc)
            Function.prototype.call.call(desc['set'], receiver, value);
          else
            target[name] = value;
          return true;
        } catch (_) {
          return false;
        }
      });

    // 26.1.14 Reflect.setPrototypeOf ( target, proto )
    define(
      Reflect, 'setPrototypeOf',
      function setPrototypeOf(target, proto) {
        try {
          target.__proto__ = proto;
          return Reflect.getPrototypeOf(target) === proto;
        } catch(_) {
          return false;
        }
      });

  }());

  // ---------------------------------------
  // 26.2 Proxy Objects
  // ---------------------------------------

  // Not polyfillable.

}(self));

// This helper is defined outside the main scope so that the use of
// 'eval' does not taint the scope for minifiers.
function __cons(t, a) {
  return eval('new t(' + a.map(function(_, i) { return 'a[' + i + ']'; }).join(',') + ')');
}
//----------------------------------------------------------------------
//
// ECMAScript 2016 Polyfills
//
//----------------------------------------------------------------------

(function (global) {
  "use strict";
  var undefined = (void 0); // Paranoia

  // Helpers

  function isSymbol(s) {
    return (typeof s === 'symbol') || ('Symbol' in global && s instanceof global.Symbol);
  }

  function define(o, p, v, override) {
    if (p in o && !override)
      return;

    if (typeof v === 'function') {
      // Sanity check that functions are appropriately named (where possible)
      console.assert(isSymbol(p) || !('name' in v) || v.name === p || v.name === p + '_', 'Expected function name "' + p.toString() + '", was "' + v.name + '"');
      Object.defineProperty(o, p, {
        value: v,
        configurable: true,
        enumerable: false,
        writable: true
      });
    } else {
      Object.defineProperty(o, p, {
        value: v,
        configurable: false,
        enumerable: false,
        writable: false
      });
    }
  }


  // Snapshot intrinsic functions
  var $isNaN = global.isNaN;

  var abs = Math.abs,
      floor = Math.floor,
      max = Math.max,
      min = Math.min;

  //----------------------------------------
  // 7 Abstract Operations
  //----------------------------------------

  // 7.1.4
  function ToInteger(n) {
    n = Number(n);
    if ($isNaN(n)) return 0;
    if (n === 0 || n === Infinity || n === -Infinity) return n;
    return ((n < 0) ? -1 : 1) * floor(abs(n));
  }

  // 7.1.13 ToObject
  function ToObject(v) {
    if (v === null || v === undefined) throw TypeError();
    return Object(v);
  }

  // 7.1.15 ToLength ( argument )
  function ToLength(v) {
    var len = ToInteger(v);
    if (len <= 0) {
      return 0;
    }
    return min(len, 0x20000000000000 - 1); // 2^53-1
  }

  //----------------------------------------
  // 7.2 Testing and Comparison Operations
  //----------------------------------------

  // 7.2.10 SameValueZero(x, y)
  function SameValueZero(x, y) {
    if (typeof x !== typeof y) return false;
    switch (typeof x) {
    case 'undefined':
      return true;
    case 'number':
      if (x !== x && y !== y) return true;
      return x === y;
    case 'boolean':
    case 'string':
    case 'object':
    default:
      return x === y;
    }
  }

  //----------------------------------------------------------------------
  //
  // ECMAScript 2016
  //
  //----------------------------------------------------------------------

  // https://github.com/tc39/Array.prototype.includes/
  define(
    Array.prototype, 'includes',
    function includes(target) {
      var fromIndex = arguments[1];

      var o = ToObject(this);
      var len = ToLength(o["length"]);
      if (len === 0) return false;
      var n = ToInteger(fromIndex);
      if (n >= 0) {
        var k = n;
      } else {
        k = len + n;
        if (k < 0) k = 0;
      }
      while (k < len) {
        var elementK = o[k];
        if (SameValueZero(o[k], target))
          return true;
        k += 1;
      }
      return false;
    });

}(this));
//----------------------------------------------------------------------
//
// ECMAScript 2017 Polyfills
//
//----------------------------------------------------------------------

(function (global) {
  'use strict';
  var undefined = (void 0); // Paranoia

  // Helpers

  function isSymbol(s) {
    return (typeof s === 'symbol') || ('Symbol' in global && s instanceof global.Symbol);
  }

  function define(o, p, v, override) {
    if (p in o && !override)
      return;

    if (typeof v === 'function') {
      // Sanity check that functions are appropriately named (where possible)
      console.assert(isSymbol(p) || !('name' in v) || v.name === p || v.name === p + '_', 'Expected function name "' + p.toString() + '", was "' + v.name + '"');
      Object.defineProperty(o, p, {
        value: v,
        configurable: true,
        enumerable: false,
        writable: true
      });
    } else {
      Object.defineProperty(o, p, {
        value: v,
        configurable: false,
        enumerable: false,
        writable: false
      });
    }
  }

  // Snapshot intrinsic functions
  var $isNaN = global.isNaN;

  var abs = Math.abs,
      floor = Math.floor,
      min = Math.min;

  //----------------------------------------
  // 7 Abstract Operations
  //----------------------------------------

  // 7.1.4
  function ToInteger(n) {
    n = Number(n);
    if ($isNaN(n)) return 0;
    if (n === 0 || n === Infinity || n === -Infinity) return n;
    return ((n < 0) ? -1 : 1) * floor(abs(n));
  }

  // 7.1.13 ToObject
  function ToObject(v) {
    if (v === null || v === undefined) throw TypeError();
    return Object(v);
  }

  // 7.1.15 ToLength ( argument )
  function ToLength(v) {
    var len = ToInteger(v);
    if (len <= 0) {
      return 0;
    }
    return min(len, 0x20000000000000 - 1); // 2^53-1
  }

  //----------------------------------------
  // 7.3 Operations on Objects
  //----------------------------------------

  // 7.3.4
  function CreateDataProperty(O, P, V) {
    Object.defineProperty(O, P, {
      value: V,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }

  // 7.3.21
  function EnumerableOwnProperties(o, kind) {
    var ownKeys = Object.keys(o);
    var properties = [];
    ownKeys.forEach(function(key) {
      var desc = Object.getOwnPropertyDescriptor(o, key);
      if (desc && desc.enumerable) {
        if (kind === 'key') properties.push(key);
        else {
          var value = o[key];
          if (kind === 'value') properties.push(value);
          else properties.push([key, value]);
        }
      }
    });
    return properties;
  }


  //----------------------------------------------------------------------
  // 19 Fundamental Objects
  //----------------------------------------------------------------------

  // 19.1 Object Objects
  // 19.1.2 Properties of the Object Constructor

  // 19.1.2.5 Object.entries
  define(
    Object, 'entries',
    function entries(o) {
      var obj = ToObject(o);
      return EnumerableOwnProperties(obj, 'key+value');
    });

  // 19.1.2.8 Object.getOwnPropertyDescriptors ( O )
  define(
    Object, 'getOwnPropertyDescriptors',
    function getOwnPropertyDescriptors(o) {
      var obj = ToObject(o);
      // ReturnIfAbrupt(obj)
      var keys = Object.getOwnPropertyNames(obj);
      // ReturnIfAbrupt(keys)
      var descriptors = {};
      for (var i = 0; i < keys.length; ++i) {
        var nextKey = keys[i];
        var descriptor = Object.getOwnPropertyDescriptor(obj, nextKey);
        // ReturnIfAbrupt(desc)
        // ReturnIfAbrupt(descriptor)
        CreateDataProperty(descriptors, nextKey, descriptor);
      }
      return descriptors;
    });

  // 19.1.2.21 Object.values
  define(
    Object, 'values',
    function values(o) {
      var obj = ToObject(o);
      return EnumerableOwnProperties(obj, 'value');
    });



  //----------------------------------------------------------------------
  // 21 Text Processing
  //----------------------------------------------------------------------

  // 21.1 String Objects
  // 21.1.3 Properties of the String Prototype Object

  // 21.1.3.13 String.prototype.padEnd( maxLength [ , fillString ] )
  define(
    String.prototype, 'padEnd',
    function padEnd(maxLength) {
      var fillString = arguments[1];

      var o = this;
      // ReturnIfAbrupt(o)
      var s = String(this);
      // ReturnIfAbrupt(s)
      var stringLength = s.length;
      if (fillString === undefined) var fillStr = '';
      else fillStr = String(fillString);
      // ReturnIfAbrupt(fillStr)
      if (fillStr === '') fillStr = ' ';
      var intMaxLength = ToLength(maxLength);
      // ReturnIfAbrupt(intMaxLength)
      if (intMaxLength <= stringLength) return s;
      var fillLen = intMaxLength - stringLength;
      var stringFiller = '';
      while (stringFiller.length < fillLen)
        stringFiller = stringFiller + fillStr;
      return s + stringFiller.substring(0, fillLen);
    });

  // 21.1.3.14 String.prototype.padStart( maxLength [ , fillString ] )
  define(
    String.prototype, 'padStart',
    function padStart(maxLength) {
      var fillString = arguments[1];

      var o = this;
      // ReturnIfAbrupt(o)
      var s = String(this);
      // ReturnIfAbrupt(s)
      var stringLength = s.length;
      if (fillString === undefined) var fillStr = '';
      else fillStr = String(fillString);
      // ReturnIfAbrupt(fillStr)
      if (fillStr === '') fillStr = ' ';
      var intMaxLength = ToLength(maxLength);
      // ReturnIfAbrupt(intMaxLength)
      if (intMaxLength <= stringLength) return s;
      var fillLen = intMaxLength - stringLength;
      var stringFiller = '';
      while (stringFiller.length < fillLen)
        stringFiller = stringFiller + fillStr;
      return stringFiller.substring(0, fillLen) + s;
    });

}(this));
(function(global) {
  'use strict';

  if (!('window' in global && 'document' in global))
    return;

  //----------------------------------------------------------------------
  //
  // HTML
  // https://html.spec.whatwg.org
  //
  //----------------------------------------------------------------------

  // document.head attribute
  // Needed for: IE8-
  if (!('head' in document))
    document.head = document.getElementsByTagName('head')[0];

  // Ensure correct parsing of newish elements ("shiv")
  // Needed for: IE8-
  [
    'abbr', 'article', 'aside', 'audio', 'bdi', 'canvas', 'data', 'datalist',
    'details', 'dialog', 'figcaption', 'figure', 'footer', 'header', 'hgroup',
    'main', 'mark', 'meter', 'nav', 'output', 'picture', 'progress', 'section',
    'summary', 'template', 'time', 'video'].forEach(function(tag) {
     document.createElement(tag);
   });

  // HTMLElement.dataset
  // Needed for: IE10-
  if (!('dataset' in document.createElement('span')) &&
      'Element' in global && Element.prototype && Object.defineProperty) {
    Object.defineProperty(Element.prototype, 'dataset', { get: function() {
      var result = Object.create(null);
      for (var i = 0; i < this.attributes.length; ++i) {
        var attr = this.attributes[i];
        if (attr.specified && attr.name.substring(0, 5) === 'data-') {
          (function(element, name) {
            var prop = name.replace(/-([a-z])/g, function(m, p) {
              return p.toUpperCase();
            });
            result[prop] = element.getAttribute('data-' + name); // Read-only, for IE8-
            Object.defineProperty(result, prop, {
              get: function() {
                return element.getAttribute('data-' + name);
              },
              set: function(value) {
                element.setAttribute('data-' + name, value);
              }});
          }(this, attr.name.substring(5)));
        }
      }
      return result;
    }});
  }

  // Base64 utility methods
  // Needed for: IE9-
  (function() {
    if ('atob' in global && 'btoa' in global)
      return;

    var B64_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function atob(input) {
      input = String(input);
      var position = 0,
          output = [],
          buffer = 0, bits = 0, n;

      input = input.replace(/\s/g, '');
      if ((input.length % 4) === 0) { input = input.replace(/=+$/, ''); }
      if ((input.length % 4) === 1) { throw Error("InvalidCharacterError"); }
      if (/[^+/0-9A-Za-z]/.test(input)) { throw Error("InvalidCharacterError"); }

      while (position < input.length) {
        n = B64_ALPHABET.indexOf(input.charAt(position));
        buffer = (buffer << 6) | n;
        bits += 6;

        if (bits === 24) {
          output.push(String.fromCharCode((buffer >> 16) & 0xFF));
          output.push(String.fromCharCode((buffer >>  8) & 0xFF));
          output.push(String.fromCharCode(buffer & 0xFF));
          bits = 0;
          buffer = 0;
        }
        position += 1;
      }

      if (bits === 12) {
        buffer = buffer >> 4;
        output.push(String.fromCharCode(buffer & 0xFF));
      } else if (bits === 18) {
        buffer = buffer >> 2;
        output.push(String.fromCharCode((buffer >> 8) & 0xFF));
        output.push(String.fromCharCode(buffer & 0xFF));
      }

      return output.join('');
    };

    function btoa(input) {
      input = String(input);
      var position = 0,
          out = [],
          o1, o2, o3,
          e1, e2, e3, e4;

      if (/[^\x00-\xFF]/.test(input)) { throw Error("InvalidCharacterError"); }

      while (position < input.length) {
        o1 = input.charCodeAt(position++);
        o2 = input.charCodeAt(position++);
        o3 = input.charCodeAt(position++);

        // 111111 112222 222233 333333
        e1 = o1 >> 2;
        e2 = ((o1 & 0x3) << 4) | (o2 >> 4);
        e3 = ((o2 & 0xf) << 2) | (o3 >> 6);
        e4 = o3 & 0x3f;

        if (position === input.length + 2) {
          e3 = 64;
          e4 = 64;
        }
        else if (position === input.length + 1) {
          e4 = 64;
        }

        out.push(B64_ALPHABET.charAt(e1),
                 B64_ALPHABET.charAt(e2),
                 B64_ALPHABET.charAt(e3),
                 B64_ALPHABET.charAt(e4));
      }

      return out.join('');
    };

    global.atob = atob;
    global.btoa = btoa;
  }());

  // requestAnimationFrame - needed for IE9-
  (function() {
    if ('requestAnimationFrame' in global)
      return;

    var TARGET_FPS = 60,
        requests = Object.create(null),
        raf_handle = 0,
        timeout_handle = -1;

    function isVisible(element) {
      return element.offsetWidth > 0 && element.offsetHeight > 0;
    }

    function onFrameTimer() {
      var cur_requests = requests;
      requests = Object.create(null);
      timeout_handle = -1;
      Object.keys(cur_requests).forEach(function(id) {
        var request = cur_requests[id];
        if (!request.element || isVisible(request.element))
          request.callback(Date.now());
      });
    }

    function requestAnimationFrame(callback, element) {
      var cb_handle = ++raf_handle;
      requests[cb_handle] = {callback: callback, element: element};
      if (timeout_handle === -1)
        timeout_handle = global.setTimeout(onFrameTimer, 1000 / TARGET_FPS);
      return cb_handle;
    }

    function cancelAnimationFrame(handle) {
      delete requests[handle];
      if (Object.keys(requests).length === 0) {
        global.clearTimeout(timeout_handle);
        timeout_handle = -1;
      }
    }

    global.requestAnimationFrame = requestAnimationFrame;
    global.cancelAnimationFrame = cancelAnimationFrame;
  }());

}(self));
(function(global) {
  'use strict';
  if (!('window' in global && 'document' in global))
    return;

  //----------------------------------------------------------------------
  //
  // DOM
  // https://dom.spec.whatwg.org/
  //
  //----------------------------------------------------------------------

  // Document.querySelectorAll method
  // http://ajaxian.com/archives/creating-a-queryselector-for-ie-that-runs-at-native-speed
  // Needed for: IE7-
  if (!document.querySelectorAll) {
    document.querySelectorAll = function(selectors) {
      var style = document.createElement('style'), elements = [], element;
      document.documentElement.firstChild.appendChild(style);
      document._qsa = [];

      style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
      window.scrollBy(0, 0);
      style.parentNode.removeChild(style);

      while (document._qsa.length) {
        element = document._qsa.shift();
        element.style.removeAttribute('x-qsa');
        elements.push(element);
      }
      document._qsa = null;
      return elements;
    };
  }

  // Document.querySelector method
  // Needed for: IE7-
  if (!document.querySelector) {
    document.querySelector = function(selectors) {
      var elements = document.querySelectorAll(selectors);
      return (elements.length) ? elements[0] : null;
    };
  }

  // Document.getElementsByClassName method
  // Needed for: IE8-
  if (!document.getElementsByClassName) {
    document.getElementsByClassName = function(classNames) {
      classNames = String(classNames).replace(/^|\s+/g, '.');
      return document.querySelectorAll(classNames);
    };
  }

  // Node interface constants
  // Needed for: IE8-
  global.Node = global.Node || function() { throw TypeError("Illegal constructor"); };
  [
    ['ELEMENT_NODE', 1],
    ['ATTRIBUTE_NODE', 2],
    ['TEXT_NODE', 3],
    ['CDATA_SECTION_NODE', 4],
    ['ENTITY_REFERENCE_NODE', 5],
    ['ENTITY_NODE', 6],
    ['PROCESSING_INSTRUCTION_NODE', 7],
    ['COMMENT_NODE', 8],
    ['DOCUMENT_NODE', 9],
    ['DOCUMENT_TYPE_NODE', 10],
    ['DOCUMENT_FRAGMENT_NODE', 11],
    ['NOTATION_NODE', 12]
  ].forEach(function(p) { if (!(p[0] in global.Node)) global.Node[p[0]] = p[1]; });

  // DOMException constants
  // Needed for: IE8-
  global.DOMException = global.DOMException || function() { throw TypeError("Illegal constructor"); };
  [
    ['INDEX_SIZE_ERR', 1],
    ['DOMSTRING_SIZE_ERR', 2],
    ['HIERARCHY_REQUEST_ERR', 3],
    ['WRONG_DOCUMENT_ERR', 4],
    ['INVALID_CHARACTER_ERR', 5],
    ['NO_DATA_ALLOWED_ERR', 6],
    ['NO_MODIFICATION_ALLOWED_ERR', 7],
    ['NOT_FOUND_ERR', 8],
    ['NOT_SUPPORTED_ERR', 9],
    ['INUSE_ATTRIBUTE_ERR', 10],
    ['INVALID_STATE_ERR', 11],
    ['SYNTAX_ERR', 12],
    ['INVALID_MODIFICATION_ERR', 13],
    ['NAMESPACE_ERR', 14],
    ['INVALID_ACCESS_ERR', 15]
  ].forEach(function(p) { if (!(p[0] in global.DOMException)) global.DOMException[p[0]] = p[1]; });

  // Event and EventTargets interfaces
  // Needed for: IE8
  (function(){
    if (!('Element' in global) || Element.prototype.addEventListener || !Object.defineProperty)
      return;

    // interface Event

    // PhaseType (const unsigned short)
    Event.CAPTURING_PHASE = 1;
    Event.AT_TARGET       = 2;
    Event.BUBBLING_PHASE  = 3;

    Object.defineProperties(Event.prototype, {
      CAPTURING_PHASE: { get: function() { return 1; } },
      AT_TARGET:       { get: function() { return 2; } },
      BUBBLING_PHASE:   { get: function() { return 3; } },
      target: {
        get: function() {
          return this.srcElement;
        }},
      currentTarget: {
        get: function() {
          return this._currentTarget;
        }},
      eventPhase: {
        get: function() {
          return (this.srcElement === this.currentTarget) ? Event.AT_TARGET : Event.BUBBLING_PHASE;
        }},
      bubbles: {
        get: function() {
          switch (this.type) {
            // Mouse
          case 'click':
          case 'dblclick':
          case 'mousedown':
          case 'mouseup':
          case 'mouseover':
          case 'mousemove':
          case 'mouseout':
          case 'mousewheel':
            // Keyboard
          case 'keydown':
          case 'keypress':
          case 'keyup':
            // Frame/Object
          case 'resize':
          case 'scroll':
            // Form
          case 'select':
          case 'change':
          case 'submit':
          case 'reset':
            return true;
          }
          return false;
        }},
      cancelable: {
        get: function() {
          switch (this.type) {
            // Mouse
          case 'click':
          case 'dblclick':
          case 'mousedown':
          case 'mouseup':
          case 'mouseover':
          case 'mouseout':
          case 'mousewheel':
            // Keyboard
          case 'keydown':
          case 'keypress':
          case 'keyup':
            // Form
          case 'submit':
            return true;
          }
          return false;
        }},
      timeStamp: {
        get: function() {
          return this._timeStamp;
        }},
      stopPropagation: {
        value: function() {
          this.cancelBubble = true;
        }},
      preventDefault: {
        value: function() {
          this.returnValue = false;
        }},
      defaultPrevented: {
        get: function() {
          return this.returnValue === false;
        }}
    });

    // interface EventTarget

    function addEventListener(type, listener, useCapture) {
      if (typeof listener !== 'function') return;
      if (type === 'DOMContentLoaded') type = 'load';
      var target = this;
      var f = function(e) {
        e._timeStamp = Date.now();
        e._currentTarget = target;
        listener.call(this, e);
        e._currentTarget = null;
      };
      this['_' + type + listener] = f;
      this.attachEvent('on' + type, f);
    }

    function removeEventListener(type, listener, useCapture) {
      if (typeof listener !== 'function') return;
      if (type === 'DOMContentLoaded') type = 'load';
      var f = this['_' + type + listener];
      if (f) {
        this.detachEvent('on' + type, f);
        this['_' + type + listener] = null;
      }
    }

    [Window, HTMLDocument, Element].forEach(function(o) {
      o.prototype.addEventListener = addEventListener;
      o.prototype.removeEventListener = removeEventListener;
    });
  }());

  // CustomEvent
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
  // Needed for: IE
  (function () {
    if ('CustomEvent' in global && typeof global.CustomEvent === "function")
      return;
    function CustomEvent ( event, params ) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
    }
    CustomEvent.prototype = global.Event.prototype;
    global.CustomEvent = CustomEvent;
  })();

  // Shim for DOM Events for IE7-
  // http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
  // Use addEvent(object, event, handler) instead of object.addEventListener(event, handler)
  window.addEvent = function(obj, type, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
      obj["e" + type + fn] = fn;
      obj[type + fn] = function() {
        var e = window.event;
        e.currentTarget = obj;
        e.preventDefault = function() { e.returnValue = false; };
        e.stopPropagation = function() { e.cancelBubble = true; };
        e.target = e.srcElement;
        e.timeStamp = Date.now();
        obj["e" + type + fn].call(this, e);
      };
      obj.attachEvent("on" + type, obj[type + fn]);
    }
  };

  window.removeEvent = function(obj, type, fn) {
    if (obj.removeEventListener) {
      obj.removeEventListener(type, fn, false);
    } else if (obj.detachEvent) {
      obj.detachEvent("on" + type, obj[type + fn]);
      obj[type + fn] = null;
      obj["e" + type + fn] = null;
    }
  };

  // DOMTokenList interface and Element.classList / Element.relList
  // Needed for: IE9-
  // Use getClassList(elem) instead of elem.classList() if IE7- support is needed
  // Use getRelList(elem) instead of elem.relList() if IE7- support is needed
  (function() {
    function DOMTokenListShim(o, p) {
      function split(s) { return s.length ? s.split(/\s+/g) : []; }

      // NOTE: This does not exactly match the spec.
      function removeTokenFromString(token, string) {
        var tokens = split(string),
            index = tokens.indexOf(token);
        if (index !== -1) {
          tokens.splice(index, 1);
        }
        return tokens.join(' ');
      }

      Object.defineProperties(
        this,
        {
          length: {
            get: function() { return split(o[p]).length; }
          },

          item: {
            value: function(idx) {
              var tokens = split(o[p]);
              return 0 <= idx && idx < tokens.length ? tokens[idx] : null;
            }
          },

          contains: {
            value: function(token) {
              token = String(token);
              if (token.length === 0) { throw SyntaxError(); }
              if (/\s/.test(token)) { throw Error("InvalidCharacterError"); }
              var tokens = split(o[p]);

              return tokens.indexOf(token) !== -1;
            }
          },

          add: {
            value: function(/*tokens...*/) {
              var tokens = Array.prototype.slice.call(arguments).map(String);
              if (tokens.some(function(token) { return token.length === 0; })) {
                throw SyntaxError();
              }
              if (tokens.some(function(token) { return (/\s/).test(token); })) {
                throw Error("InvalidCharacterError");
              }

              try {
                var underlying_string = o[p];
                var token_list = split(underlying_string);
                tokens = tokens.filter(function(token) { return token_list.indexOf(token) === -1; });
                if (tokens.length === 0) {
                  return;
                }
                if (underlying_string.length !== 0 && !(/\s$/).test(underlying_string)) {
                  underlying_string += ' ';
                }
                underlying_string += tokens.join(' ');
                o[p] = underlying_string;
              } finally {
                var length = split(o[p]).length;
                if (this.length !== length) { this.length = length; }
              }
            }
          },

          remove: {
            value: function(/*tokens...*/) {
              var tokens = Array.prototype.slice.call(arguments).map(String);
              if (tokens.some(function(token) { return token.length === 0; })) {
                throw SyntaxError();
              }
              if (tokens.some(function(token) { return (/\s/).test(token); })) {
                throw Error("InvalidCharacterError");
              }

              try {
                var underlying_string = o[p];
                tokens.forEach(function(token) {
                  underlying_string = removeTokenFromString(token, underlying_string);
                });
                o[p] = underlying_string;
              } finally {
                var length = split(o[p]).length;
                if (this.length !== length) { this.length = length; }
              }
            }
          },

          toggle: {
            value: function(token/*, force*/) {
              var force = arguments[1];
              try {
                token = String(token);
                if (token.length === 0) { throw SyntaxError(); }
                if (/\s/.test(token)) { throw Error("InvalidCharacterError"); }
                var tokens = split(o[p]),
                    index = tokens.indexOf(token);

                if (index !== -1 && (!force || force === (void 0))) {
                  o[p] = removeTokenFromString(token, o[p]);
                  return false;
                }
                if (index !== -1 && force) {
                  return true;
                }
                var underlying_string = o[p];
                if (underlying_string.length !== 0 && !/\s$/.test(underlying_string)) {
                  underlying_string += ' ';
                }
                underlying_string += token;
                o[p] = underlying_string;
                return true;
              } finally {
                var length = split(o[p]).length;
                if (this.length !== length) { this.length = length; }
              }
            }
          },

          toString: {
            value: function() {
              return o[p];
            }
          }
        });
      if (!('length' in this)) {
        // In case getters are not supported
        this.length = split(o[p]).length;
      } else {
        // If they are, shim in index getters (up to 100)
        for (var i = 0; i < 100; ++i) {
          Object.defineProperty(this, String(i), {
            get: (function(n) { return function() { return this.item(n); }; }(i))
          });
        }
      }
    }

    function addToElementPrototype(p, f) {
      if ('Element' in global && Element.prototype && Object.defineProperty) {
        Object.defineProperty(Element.prototype, p, { get: f });
      }
    }

    // HTML - https://html.spec.whatwg.org
    // Element.classList
    if ('classList' in document.createElement('span')) {
      window.getClassList = function(elem) { return elem.classList; };
    } else {
      window.getClassList = function(elem) { return new DOMTokenListShim(elem, 'className'); };
      addToElementPrototype('classList', function() { return new DOMTokenListShim(this, 'className'); } );
    }

    // HTML - https://html.spec.whatwg.org
    // HTMLAnchorElement.relList
    // HTMLLinkElement.relList
    if ('relList' in document.createElement('link')) {
      window.getRelList = function(elem) { return elem.relList; };
    } else {
      window.getRelList = function(elem) { return new DOMTokenListShim(elem, 'rel'); };
      addToElementPrototype('relList', function() { return new DOMTokenListShim(this, 'rel'); } );
    }

    // Add second argument to native DOMTokenList.toggle() if necessary
    (function() {
      if (!('DOMTokenList' in global)) return;
      var e = document.createElement('span');
      if (!('classList' in e)) return;
      e.classList.toggle('x', false);
      if (!e.classList.contains('x')) return;
      global.DOMTokenList.prototype.toggle = function toggle(token/*, force*/) {
        var force = arguments[1];
        if (force === undefined) {
          var add = !this.contains(token);
          this[add ? 'add' : 'remove'](token);
          return add;
        }
        force = !!force;
        this[force ? 'add' : 'remove'](token);
        return force;
      };
    }());


    // DOM - Interface NonDocumentTypeChildNode
    // Interface NonDocumentTypeChildNode
    // previousElementSibling / nextElementSibling - for IE8

    if (!('previousElementSibling' in document.documentElement)) {
      addToElementPrototype('previousElementSibling', function() {
        var n = this.previousSibling;
        while (n && n.nodeType !== Node.ELEMENT_NODE)
          n = n.previousSibling;
        return n;
      });
    }

    if (!('nextElementSibling' in document.documentElement)) {
      addToElementPrototype('nextElementSibling', function() {
        var n = this.nextSibling;
        while (n && n.nodeType !== Node.ELEMENT_NODE)
          n = n.nextSibling;
        return n;
      });
    }
  }());

  // Element.matches
  // https://developer.mozilla.org/en/docs/Web/API/Element/matches
  // Needed for: IE, Firefox 3.6, early Webkit and Opera 15.0
  // Use msMatchesSelector(selector) for IE
  // Use oMatchesSelector(selector) for Opera 15.0
  // Use mozMatchesSelector(selector) for Firefox 3.6
  // Use webkitMatchesSelector(selector) for early Webkit
  // Use polyfill if no matches() support, but querySelectorAll() support
  if ('Element' in global && !Element.prototype.matches) {
    if (Element.prototype.msMatchesSelector) {
      Element.prototype.matches = Element.prototype.msMatchesSelector;
    } else if (Element.prototype.oMatchesSelector) {
      Element.prototype.matches = Element.prototype.oMatchesSelector;
    } else if (Element.prototype.mozMatchesSelector) {
      Element.prototype.matches = Element.prototype.mozMatchesSelector;
    } else if (Element.prototype.webkitMatchesSelector) {
      Element.prototype.matches = Element.prototype.webkitMatchesSelector;
    } else if (document.querySelectorAll) {
      Element.prototype.matches = function matches(selector) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(selector),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
    }
  }

  // Element.closest
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i,
          el = this;
      do {
        i = matches.length;
        while (--i >= 0 && matches.item(i) !== el) {};
      } while ((i < 0) && (el = el.parentElement)); 
      return el;
    };
  }

  function mixin(o, ps) {
    if (!o) return;
    Object.keys(ps).forEach(function(p) {
      if ((p in o) || (p in o.prototype)) return;
      try {
        Object.defineProperty(
          o.prototype,
          p,
          Object.getOwnPropertyDescriptor(ps, p)
        );
      } catch (ex) {
        // Throws in IE8; just copy it
        o[p] = ps[p];
      }
    });
  }

  // Mixin ParentNode
  // https://dom.spec.whatwg.org/#interface-parentnode

  function convertNodesIntoANode(nodes) {
    var node = null;
    nodes = nodes.map(function(node) {
      return !(node instanceof Node) ? document.createTextNode(node) : node;
    });
    if (nodes.length === 1) {
      node = nodes[0];
    } else {
      node = document.createDocumentFragment();
      nodes.forEach(function(n) { node.appendChild(n); });
    }
    return node;
  }

  var ParentNode = {
    prepend: function(/*...nodes*/) {
      var nodes = [].slice.call(arguments);
      nodes = convertNodesIntoANode(nodes);
      this.insertBefore(nodes, this.firstChild);
    },
    append: function(/*...nodes*/) {
      var nodes = [].slice.call(arguments);
      nodes = convertNodesIntoANode(nodes);
      this.appendChild(nodes);
    }
  };

  mixin(global.Document || global.HTMLDocument, ParentNode); // HTMLDocument for IE8
  mixin(global.DocumentFragment, ParentNode);
  mixin(global.Element, ParentNode);

  // Mixin ChildNode
  // https://dom.spec.whatwg.org/#interface-childnode

  var ChildNode = {
    before: function(/*...nodes*/) {
      var nodes = [].slice.call(arguments);
      var parent = this.parentNode;
      if (!parent) return;
      var viablePreviousSibling = this.previousSibling;
      while (nodes.indexOf(viablePreviousSibling) !== -1)
        viablePreviousSibling = viablePreviousSibling.previousSibling;
      var node = convertNodesIntoANode(nodes);
      parent.insertBefore(node, viablePreviousSibling ?
                          viablePreviousSibling.nextSibling : parent.firstChild);
    },
    after: function(/*...nodes*/) {
      var nodes = [].slice.call(arguments);
      var parent = this.parentNode;
      if (!parent) return;
      var viableNextSibling = this.nextSibling;
      while (nodes.indexOf(viableNextSibling) !== -1)
        viableNextSibling = viableNextSibling.nextSibling;
      var node = convertNodesIntoANode(nodes);
      parent.insertBefore(node, viableNextSibling);
    },
    replaceWith: function(/*...nodes*/) {
      var nodes = [].slice.call(arguments);
      var parent = this.parentNode;
      if (!parent) return;
      var viableNextSibling = this.nextSibling;
      while (nodes.indexOf(viableNextSibling) !== -1)
        viableNextSibling = viableNextSibling.nextSibling;
      var node = convertNodesIntoANode(nodes);

      if (this.parentNode === parent)
        parent.replaceChild(node, this);
      else
        parent.insertBefore(node, viableNextSibling);
    },
    remove: function() {
      if (!this.parentNode) return;
      this.parentNode.removeChild(this);
    }
  };

  mixin(global.DocumentType, ChildNode);
  mixin(global.Element, ChildNode);
  mixin(global.CharacterData, ChildNode);

}(self));
(function(global) {
  'use strict';

  if (!('window' in global && 'document' in global))
    return;

  //----------------------------------------------------------------------
  //
  // XMLHttpRequest
  // https://xhr.spec.whatwg.org
  //
  //----------------------------------------------------------------------

  // XMLHttpRequest interface
  // Needed for: IE7-
  global.XMLHttpRequest = global.XMLHttpRequest || function() {
    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (_) { }
    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (_) { }
    try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (_) { }
    throw Error("This browser does not support XMLHttpRequest.");
  };

  // XMLHttpRequest interface constants
  // Needed for IE8-
  [
    ['UNSENT', 0],
    ['OPENED', 1],
    ['HEADERS_RECEIVED', 2],
    ['LOADING', 3],
    ['DONE', 4],
  ].forEach(function(p) { if (!(p[0] in global.XMLHttpRequest)) global.XMLHttpRequest[p[0]] = p[1]; });

  // FormData interface
  // Needed for: IE9-
  (function() {
    if ('FormData' in global)
      return;

    function FormData(form) {
      this._data = [];
      if (!form) return;
      for (var i = 0; i < form.elements.length; ++i) {
        var element = form.elements[i];
        if (element.name !== '')
          this.append(element.name, element.value);
      }
    }

    FormData.prototype = {
      append: function(name, value /*, filename */) {
        if ('Blob' in global && value instanceof global.Blob)
          throw TypeError("Blob not supported");
        name = String(name);
        this._data.push([name, value]);
      },

      toString: function() {
        return this._data.map(function(pair) {
          return encodeURIComponent(pair[0]) + '=' + encodeURIComponent(pair[1]);
        }).join('&');
      }
    };

    global.FormData = FormData;
    var send = global.XMLHttpRequest.prototype.send;
    global.XMLHttpRequest.prototype.send = function(body) {
      if (body instanceof FormData) {
        this.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        arguments[0] = body.toString();
      }
      return send.apply(this, arguments);
    };
  }());

}(self));
(function(global) {
  'use strict';

  if (!('window' in global && 'document' in global))
    return;

  //----------------------------------------------------------------------
  //
  // CSSOM View Module
  // https://dev.w3.org/csswg/cssom-view/
  //
  //----------------------------------------------------------------------

  // Fix for IE8-'s Element.getBoundingClientRect()
  if ('TextRectangle' in global && !('width' in global.TextRectangle.prototype)) {
    Object.defineProperties(global.TextRectangle.prototype, {
      width: { get: function() { return this.right - this.left; } },
      height: { get: function() { return this.bottom - this.top; } }
    });
  }
}(self));
// URL Polyfill
// Draft specification: https://url.spec.whatwg.org

// Notes:
// - Primarily useful for parsing URLs and modifying query parameters
// - Should work in IE8+ and everything more modern, with es5.js polyfills

(function (global) {
  'use strict';

  function isSequence(o) {
    if (!o) return false;
    if ('Symbol' in global && 'iterator' in global.Symbol &&
        typeof o[Symbol.iterator] === 'function') return true;
    if (Array.isArray(o)) return true;
    return false;
  }

  function toArray(iter) {
    return ('from' in Array) ? Array.from(iter) : Array.prototype.slice.call(iter);
  }

  (function() {

    // Browsers may have:
    // * No global URL object
    // * URL with static methods only - may have a dummy constructor
    // * URL with members except searchParams
    // * Full URL API support
    var origURL = global.URL;
    var nativeURL;
    try {
      if (origURL) {
        nativeURL = new global.URL('http://example.com');
        if ('searchParams' in nativeURL)
          return;
        if (!('href' in nativeURL))
          nativeURL = undefined;
      }
    } catch (_) {}

    // NOTE: Doesn't do the encoding/decoding dance
    function urlencoded_serialize(pairs) {
      var output = '', first = true;
      pairs.forEach(function (pair) {
        var name = encodeURIComponent(pair.name);
        var value = encodeURIComponent(pair.value);
        if (!first) output += '&';
        output += name + '=' + value;
        first = false;
      });
      return output.replace(/%20/g, '+');
    }

    // NOTE: Doesn't do the encoding/decoding dance
    function urlencoded_parse(input, isindex) {
      var sequences = input.split('&');
      if (isindex && sequences[0].indexOf('=') === -1)
        sequences[0] = '=' + sequences[0];
      var pairs = [];
      sequences.forEach(function (bytes) {
        if (bytes.length === 0) return;
        var index = bytes.indexOf('=');
        if (index !== -1) {
          var name = bytes.substring(0, index);
          var value = bytes.substring(index + 1);
        } else {
          name = bytes;
          value = '';
        }
        name = name.replace(/\+/g, ' ');
        value = value.replace(/\+/g, ' ');
        pairs.push({ name: name, value: value });
      });
      var output = [];
      pairs.forEach(function (pair) {
        output.push({
          name: decodeURIComponent(pair.name),
          value: decodeURIComponent(pair.value)
        });
      });
      return output;
    }

    function URLUtils(url) {
      if (nativeURL)
        return new origURL(url);
      var anchor = document.createElement('a');
      anchor.href = url;
      return anchor;
    }

    function URLSearchParams(init) {
      var $this = this;
      this._list = [];

      if (init === undefined || init === null) {
        // no-op
      } else if (init instanceof URLSearchParams) {
        // In ES6 init would be a sequence, but special case for ES5.
        this._list = urlencoded_parse(String(init));
      } else if (typeof init === 'object' && isSequence(init)) {
        toArray(init).forEach(function(e) {
          if (!isSequence(e)) throw TypeError();
          var nv = toArray(e);
          if (nv.length !== 2) throw TypeError();
          $this._list.push({name: String(nv[0]), value: String(nv[1])});
        });
      } else if (typeof init === 'object' && init) {
        Object.keys(init).forEach(function(key) {
          $this._list.push({name: String(key), value: String(init[key])});
        });
      } else {
        init = String(init);
        if (init.substring(0, 1) === '?')
          init = init.substring(1);
        this._list = urlencoded_parse(init);
      }

      this._url_object = null;
      this._setList = function (list) { if (!updating) $this._list = list; };

      var updating = false;
      this._update_steps = function() {
        if (updating) return;
        updating = true;

        if (!$this._url_object) return;

        // Partial workaround for IE issue with 'about:'
        if ($this._url_object.protocol === 'about:' &&
            $this._url_object.pathname.indexOf('?') !== -1) {
          $this._url_object.pathname = $this._url_object.pathname.split('?')[0];
        }

        $this._url_object.search = urlencoded_serialize($this._list);

        updating = false;
      };
    }


    Object.defineProperties(URLSearchParams.prototype, {
      append: {
        value: function (name, value) {
          this._list.push({ name: name, value: value });
          this._update_steps();
        }, writable: true, enumerable: true, configurable: true
      },

      'delete': {
        value: function (name) {
          for (var i = 0; i < this._list.length;) {
            if (this._list[i].name === name)
              this._list.splice(i, 1);
            else
              ++i;
          }
          this._update_steps();
        }, writable: true, enumerable: true, configurable: true
      },

      get: {
        value: function (name) {
          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name)
              return this._list[i].value;
          }
          return null;
        }, writable: true, enumerable: true, configurable: true
      },

      getAll: {
        value: function (name) {
          var result = [];
          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name)
              result.push(this._list[i].value);
          }
          return result;
        }, writable: true, enumerable: true, configurable: true
      },

      has: {
        value: function (name) {
          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name)
              return true;
          }
          return false;
        }, writable: true, enumerable: true, configurable: true
      },

      set: {
        value: function (name, value) {
          var found = false;
          for (var i = 0; i < this._list.length;) {
            if (this._list[i].name === name) {
              if (!found) {
                this._list[i].value = value;
                found = true;
                ++i;
              } else {
                this._list.splice(i, 1);
              }
            } else {
              ++i;
            }
          }

          if (!found)
            this._list.push({ name: name, value: value });

          this._update_steps();
        }, writable: true, enumerable: true, configurable: true
      },

      entries: {
        value: function() { return new Iterator(this._list, 'key+value'); },
        writable: true, enumerable: true, configurable: true
      },

      keys: {
        value: function() { return new Iterator(this._list, 'key'); },
        writable: true, enumerable: true, configurable: true
      },

      values: {
        value: function() { return new Iterator(this._list, 'value'); },
        writable: true, enumerable: true, configurable: true
      },

      forEach: {
        value: function(callback) {
          var thisArg = (arguments.length > 1) ? arguments[1] : undefined;
          this._list.forEach(function(pair, index) {
            callback.call(thisArg, pair.value, pair.name);
          });

        }, writable: true, enumerable: true, configurable: true
      },

      toString: {
        value: function () {
          return urlencoded_serialize(this._list);
        }, writable: true, enumerable: false, configurable: true
      }
    });

    function Iterator(source, kind) {
      var index = 0;
      this['next'] = function() {
        if (index >= source.length)
          return {done: true, value: undefined};
        var pair = source[index++];
        return {done: false, value:
                kind === 'key' ? pair.name :
                kind === 'value' ? pair.value :
                [pair.name, pair.value]};
      };
    }

    if ('Symbol' in global && 'iterator' in global.Symbol) {
      Object.defineProperty(URLSearchParams.prototype, global.Symbol.iterator, {
        value: URLSearchParams.prototype.entries,
        writable: true, enumerable: true, configurable: true});
      Object.defineProperty(Iterator.prototype, global.Symbol.iterator, {
        value: function() { return this; },
        writable: true, enumerable: true, configurable: true});
    }

    function URL(url, base) {
      if (!(this instanceof global.URL))
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");

      if (base) {
        url = (function () {
          if (nativeURL) return new origURL(url, base).href;
          var iframe;
          try {
            var doc;
            // Use another document/base tag/anchor for relative URL resolution, if possible
            if (Object.prototype.toString.call(window.operamini) === "[object OperaMini]") {
              iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              document.documentElement.appendChild(iframe);
              doc = iframe.contentWindow.document;
            } else if (document.implementation && document.implementation.createHTMLDocument) {
              doc = document.implementation.createHTMLDocument('');
            } else if (document.implementation && document.implementation.createDocument) {
              doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
              doc.documentElement.appendChild(doc.createElement('head'));
              doc.documentElement.appendChild(doc.createElement('body'));
            } else if (window.ActiveXObject) {
              doc = new window.ActiveXObject('htmlfile');
              doc.write('<head><\/head><body><\/body>');
              doc.close();
            }

            if (!doc) throw Error('base not supported');

            var baseTag = doc.createElement('base');
            baseTag.href = base;
            doc.getElementsByTagName('head')[0].appendChild(baseTag);
            var anchor = doc.createElement('a');
            anchor.href = url;
            return anchor.href;
          } finally {
            if (iframe)
              iframe.parentNode.removeChild(iframe);
          }
        }());
      }

      // An inner object implementing URLUtils (either a native URL
      // object or an HTMLAnchorElement instance) is used to perform the
      // URL algorithms. With full ES5 getter/setter support, return a
      // regular object For IE8's limited getter/setter support, a
      // different HTMLAnchorElement is returned with properties
      // overridden

      var instance = URLUtils(url || '');

      // Detect for ES5 getter/setter support
      // (an Object.defineProperties polyfill that doesn't support getters/setters may throw)
      var ES5_GET_SET = (function() {
        if (!('defineProperties' in Object)) return false;
        try {
          var obj = {};
          Object.defineProperties(obj, { prop: { 'get': function () { return true; } } });
          return obj.prop;
        } catch (_) {
          return false;
        }
      })();

      var self = ES5_GET_SET ? this : document.createElement('a');



      var query_object = new URLSearchParams(
        instance.search ? instance.search.substring(1) : null);
      query_object._url_object = self;

      Object.defineProperties(self, {
        href: {
          get: function () { return instance.href; },
          set: function (v) { instance.href = v; tidy_instance(); update_steps(); },
          enumerable: true, configurable: true
        },
        origin: {
          get: function () {
            if ('origin' in instance) return instance.origin;
            return this.protocol + '//' + this.host;
          },
          enumerable: true, configurable: true
        },
        protocol: {
          get: function () { return instance.protocol; },
          set: function (v) { instance.protocol = v; },
          enumerable: true, configurable: true
        },
        username: {
          get: function () { return instance.username; },
          set: function (v) { instance.username = v; },
          enumerable: true, configurable: true
        },
        password: {
          get: function () { return instance.password; },
          set: function (v) { instance.password = v; },
          enumerable: true, configurable: true
        },
        host: {
          get: function () {
            // IE returns default port in |host|
            var re = {'http:': /:80$/, 'https:': /:443$/, 'ftp:': /:21$/}[instance.protocol];
            return re ? instance.host.replace(re, '') : instance.host;
          },
          set: function (v) { instance.host = v; },
          enumerable: true, configurable: true
        },
        hostname: {
          get: function () { return instance.hostname; },
          set: function (v) { instance.hostname = v; },
          enumerable: true, configurable: true
        },
        port: {
          get: function () { return instance.port; },
          set: function (v) { instance.port = v; },
          enumerable: true, configurable: true
        },
        pathname: {
          get: function () {
            // IE does not include leading '/' in |pathname|
            if (instance.pathname.charAt(0) !== '/') return '/' + instance.pathname;
            return instance.pathname;
          },
          set: function (v) { instance.pathname = v; },
          enumerable: true, configurable: true
        },
        search: {
          get: function () { return instance.search; },
          set: function (v) {
            if (instance.search === v) return;
            instance.search = v; tidy_instance(); update_steps();
          },
          enumerable: true, configurable: true
        },
        searchParams: {
          get: function () { return query_object; },
          enumerable: true, configurable: true
        },
        hash: {
          get: function () { return instance.hash; },
          set: function (v) { instance.hash = v; tidy_instance(); },
          enumerable: true, configurable: true
        },
        toString: {
          value: function() { return instance.toString(); },
          enumerable: false, configurable: true
        },
        valueOf: {
          value: function() { return instance.valueOf(); },
          enumerable: false, configurable: true
        }
      });

      function tidy_instance() {
        var href = instance.href.replace(/#$|\?$|\?(?=#)/g, '');
        if (instance.href !== href)
          instance.href = href;
      }

      function update_steps() {
        query_object._setList(instance.search ? urlencoded_parse(instance.search.substring(1)) : []);
        query_object._update_steps();
      };

      return self;
    }

    if (origURL) {
      for (var i in origURL) {
        if (origURL.hasOwnProperty(i) && typeof origURL[i] === 'function')
          URL[i] = origURL[i];
      }
    }

    global.URL = URL;
    global.URLSearchParams = URLSearchParams;
  }());

  // Patch native URLSearchParams constructor to handle sequences/records
  // if necessary.
  (function() {
    if (new global.URLSearchParams([['a', 1]]).get('a') === '1' &&
        new global.URLSearchParams({a: 1}).get('a') === '1')
      return;
    var orig = global.URLSearchParams;
    global.URLSearchParams = function(init) {
      if (init && typeof init === 'object' && isSequence(init)) {
        var o = new orig();
        toArray(init).forEach(function(e) {
          if (!isSequence(e)) throw TypeError();
          var nv = toArray(e);
          if (nv.length !== 2) throw TypeError();
          o.append(nv[0], nv[1]);
        });
        return o;
      } else if (init && typeof init === 'object') {
        o = new orig();
        Object.keys(init).forEach(function(key) {
          o.set(key, init[key]);
        });
        return o;
      } else {
        return new orig(init);
      }
    };
  }());

}(self));
// Work-In-Progress 'prollyfill' for Fetch API
// Standard: https://fetch.spec.whatwg.org/#fetch-api
//
// As usual, the intent is to produce a forward-compatible
// subset so that code can be written using future standard
// functionality; not every case is considered or supported.

// Requires ES2015: Promise, Symbol.iterator (or polyfill)
// Requires: URL (or polyfill)

// Example:
//   fetch('README.md')
//     .then(function(response) { return response.text(); })
//     .then(function(text) { alert(text); });

(function(global) {
  'use strict';

  // Web IDL concepts

  // https://heycam.github.io/webidl/#idl-ByteString
  function ByteString(value) {
    value = String(value);
    if (value.match(/[^\x00-\xFF]/)) throw TypeError('Not a valid ByteString');
    return value;
  }

  // https://heycam.github.io/webidl/#idl-USVString
  function USVString(value) {
    value = String(value);
    return value.replace(
        /([\u0000-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF])/g,
      function (c) {
        if (/^[\uD800-\uDFFF]$/.test(c)) return '\uFFFD';
        return c;
      });
  }

  function ushort(x) { return x & 0xFFFF; }

  // 2 Terminology

  function byteLowerCase(s) {
    return String(s).replace(/[A-Z]/g, function(c) { return c.toLowerCase(); });
  }

  function byteUpperCase(s) {
    return String(s).replace(/[a-z]/g, function(c) { return c.toUpperCase(); });
  }

  function byteCaseInsensitiveMatch(a, b) {
    return byteLowerCase(a) === byteLowerCase(b);
  }

  // 2.1 HTTP

  // 2.1.1 Methods

  function isForbiddenMethod(m) {
    m = byteUpperCase(m);
    return m === 'CONNECT' || m === 'TRACE' || m === 'TRACK';
  }

  function normalizeMethod(m) {
    var u = byteUpperCase(m);
    if (u === 'DELETE' || u === 'GET' || u === 'HEAD' || u === 'OPTIONS' ||
        u === 'POST' || u === 'PUT') return u;
    return m;
  }

  function isName(s) {
    return /^[!#$%&'*+\-.09A-Z^_`a-z|~]+$/.test(s);
  }
  function isValue(s) {
    // TODO: Implement me
    return true;
  }
  function isForbiddenHeaderName(n) {
    n = String(n).toLowerCase();
    var forbidden = {
      'accept-charset': true,
      'accept-encoding': true,
      'access-control-request-headers': true,
      'access-control-request-method': true,
      'connection': true,
      'content-length': true,
      'cookie': true,
      'cookie2': true,
      'date': true,
      'dnt': true,
      'expect': true,
      'host': true,
      'keep-alive': true,
      'origin': true,
      'referer': true,
      'te': true,
      'trailer': true,
      'transfer-encoding': true,
      'upgrade': true,
      'user-agent': true,
      'via': true
    };
    return forbidden[n] || n.substring(0, 6) === 'proxy-' || n.substring(0, 4) === 'sec-';
  }

  function isForbiddenResponseHeaderName(n) {
    n = String(n).toLowerCase();
    var forbidden = {
      'set-cookie': true,
      'set-cookie2': true
    };
    return forbidden[n];
  }

  function isSimpleHeader(name, value) {
    name = String(name).toLowerCase();
    return name === 'accept' || name === 'accept-language' || name === 'content-language' ||
      (name === 'content-type' &&
       ['application/x-www-form-encoded', 'multipart/form-data', 'text/plain'].indexOf(value) !== -1);
  }

  //
  // 5.1 Headers class
  //

  // typedef (Headers or sequence<sequence<ByteString>> or OpenEndedDictionary<ByteString>) HeadersInit;

  // Constructor(optional HeadersInit init)
  function Headers(init) {
    this._guard = 'none';
    this._headerList = [];
    if (init) fill(this, init);
  }

  function fill(headers, init) {
    if (init instanceof Headers) {
      init._headerList.forEach(function(header) {
        headers.append(header[0], header[1]);
      });
    } else if (Array.isArray(init)) {
      init.forEach(function(header) {
        if (!Array.isArray(header) || header.length !== 2) throw TypeError();
        headers.append(header[0], header[1]);
      });
    } else {
      init = Object(init);
      Object.keys(init).forEach(function(key) {
        headers.append(key, init[key]);
      });
    }
  }

  // interface Headers
  Headers.prototype = {
    // void append(ByteString name, ByteString value);
    append: function append(name, value) {
      name = ByteString(name);
      if (!isName(name) || !isValue(value)) throw TypeError();
      if (this._guard === 'immutable') throw TypeError();
      else if (this._guard === 'request' && isForbiddenHeaderName(name)) return;
      else if (this._guard === 'request-no-CORS' && !isSimpleHeader(name, value)) return;
      else if (this._guard === 'response' && isForbiddenResponseHeaderName(name)) return;

      name = name.toLowerCase();
      this._headerList.push([name, value]);
    },

    // void delete(ByteString name);
    'delete': function delete_(name) {
      name = ByteString(name);
      if (!isName(name)) throw TypeError();
      if (this._guard === 'immutable') throw TypeError();
      else if (this._guard === 'request' && isForbiddenHeaderName(name)) return;
      else if (this._guard === 'request-no-CORS' && !isSimpleHeader(name, 'invalid')) return;
      else if (this._guard === 'response' && isForbiddenResponseHeaderName(name)) return;

      name = name.toLowerCase();
      var index = 0;
      while (index < this._headerList.length) {
        if (this._headerList[index][0] === name)
          this._headerList.splice(index, 1);
        else
          ++index;
      }
    },

    // ByteString? get(ByteString name);
    get: function get(name) {
      name = ByteString(name);
      if (!isName(name)) throw TypeError();
      name = name.toLowerCase();
      for (var index = 0; index < this._headerList.length; ++index) {
        if (this._headerList[index][0] === name)
          return this._headerList[index][1];
      }
      return null;
    },

    // sequence<ByteString> getAll(ByteString name);
    getAll: function getAll(name) {
      name = ByteString(name);
      if (!isName(name)) throw TypeError();
      name = name.toLowerCase();
      var sequence = [];
      for (var index = 0; index < this._headerList.length; ++index) {
        if (this._headerList[index][0] === name)
          sequence.push(this._headerList[index][1]);
      }
      return sequence;
    },

    // boolean has(ByteString name);
    has: function has(name) {
      name = ByteString(name);
      if (!isName(name)) throw TypeError();
      name = name.toLowerCase();
      for (var index = 0; index < this._headerList.length; ++index) {
        if (this._headerList[index][0] === name)
          return true;
      }
      return false;
    },

    // void set(ByteString name, ByteString value);
    set: function set(name, value) {
      name = ByteString(name);
      if (!isName(name) || !isValue(value)) throw TypeError();
      if (this._guard === 'immutable') throw TypeError();
      else if (this._guard === 'request' && isForbiddenHeaderName(name)) return;
      else if (this._guard === 'request-no-CORS' && !isSimpleHeader(name, value)) return;
      else if (this._guard === 'response' && isForbiddenResponseHeaderName(name)) return;

      name = name.toLowerCase();
      for (var index = 0; index < this._headerList.length; ++index) {
        if (this._headerList[index][0] === name) {
          this._headerList[index++][1] = value;
          while (index < this._headerList.length) {
            if (this._headerList[index][0] === name)
              this._headerList.splice(index, 1);
            else
              ++index;
          }
          return;
        }
      }
      this._headerList.push([name, value]);
    }
  };
  Headers.prototype[Symbol.iterator] = function() {
    return new HeadersIterator(this);
  };

  function HeadersIterator(headers) {
    this._headers = headers;
    this._index = 0;
  }
  HeadersIterator.prototype = {};
  HeadersIterator.prototype.next = function() {
    if (this._index >= this._headers._headerList.length)
      return { value: undefined, done: true };
    return { value: this._headers._headerList[this._index++], done: false };
  };
  HeadersIterator.prototype[Symbol.iterator] = function() { return this; };


  //
  // 5.2 Body mixin
  //

  function Body(_stream) {
    // TODO: Handle initialization from other types
    this._stream = _stream;
    this.bodyUsed = false;
  }

  // interface FetchBodyStream
  Body.prototype = {
    // Promise<ArrayBuffer> arrayBuffer();
    arrayBuffer: function() {
      if (this.bodyUsed) return Promise.reject(TypeError());
      this.bodyUsed = true;
      if (this._stream instanceof ArrayBuffer) return Promise.resolve(this._stream);
      var value = this._stream;
      return new Promise(function(resolve, reject) {
        var octets = unescape(encodeURIComponent(value)).split('').map(function(c) {
          return c.charCodeAt(0);
        });
        resolve(new Uint8Array(octets).buffer);
      });
    },
    // Promise<Blob> blob();
    blob: function() {
      if (this.bodyUsed) return Promise.reject(TypeError());
      this.bodyUsed = true;
      if (this._stream instanceof Blob) return Promise.resolve(this._stream);
      return Promise.resolve(new Blob([this._stream]));
    },
    // Promise<FormData> formData();
    formData: function() {
      if (this.bodyUsed) return Promise.reject(TypeError());
      this.bodyUsed = true;
      if (this._stream instanceof FormData) return Promise.resolve(this._stream);
      return Promise.reject(Error('Not yet implemented'));
    },
    // Promise<JSON> json();
    json: function() {
      if (this.bodyUsed) return Promise.reject(TypeError());
      this.bodyUsed = true;
      var that = this;
      return new Promise(function(resolve, reject) {
        resolve(JSON.parse(that._stream));
      });
    },
    // Promise<USVString> text();
    text: function() {
      if (this.bodyUsed) return Promise.reject(TypeError());
      this.bodyUsed = true;
      return Promise.resolve(String(this._stream));
    }
  };

  //
  // 5.3 Request class
  //

  // typedef (Request or USVString) RequestInfo;

  // Constructor(RequestInfo input, optional RequestInit init)
  function Request(input, init) {
    if (arguments.length < 1) throw TypeError('Not enough arguments');

    Body.call(this, null);

    // readonly attribute ByteString method;
    this.method = 'GET';

    // readonly attribute USVString url;
    this.url = '';

    // readonly attribute Headers headers;
    this.headers = new Headers();
    this.headers._guard = 'request';

    // readonly attribute DOMString referrer;
    this.referrer = null; // TODO: Implement.

    // readonly attribute RequestMode mode;
    this.mode = null; // TODO: Implement.

    // readonly attribute RequestCredentials credentials;
    this.credentials = 'omit';

    if (input instanceof Request) {
      if (input.bodyUsed) throw TypeError();
      input.bodyUsed = true;
      this.method = input.method;
      this.url = input.url;
      this.headers = new Headers(input.headers);
      this.headers._guard = input.headers._guard;
      this.credentials = input.credentials;
      this._stream = input._stream;
    } else {
      input = USVString(input);
      this.url = String(new URL(input, self.location));
    }

    init = Object(init);

    if ('method' in init) {
      var method = ByteString(init.method);
      if (isForbiddenMethod(method)) throw TypeError();
      this.method = normalizeMethod(method);
    }

    if ('headers' in init) {
      this.headers = new Headers();
      fill(this.headers, init.headers);
    }

    if ('body' in init)
      this._stream = init.body;

    if ('credentials' in init &&
        (['omit', 'same-origin', 'include'].indexOf(init.credentials) !== -1))
      this.credentials = init.credentials;
  }

  // interface Request
  Request.prototype = Body.prototype;

  //
  // 5.4 Response class
  //

  // Constructor(optional FetchBodyInit body, optional ResponseInit init)
  function Response(body, init) {
    if (arguments.length < 1)
      body = '';

    this.headers = new Headers();
    this.headers._guard = 'response';

    // Internal
    if (body instanceof XMLHttpRequest && '_url' in body) {
      var xhr = body;
      this.type = 'basic'; // TODO: ResponseType
      this.url = USVString(xhr._url);
      this.status = xhr.status;
      this.ok = 200 <= this.status && this.status <= 299;
      this.statusText = xhr.statusText;
      xhr.getAllResponseHeaders()
        .split(/\r?\n/)
        .filter(function(header) { return header.length; })
        .forEach(function(header) {
          var i = header.indexOf(':');
          this.headers.append(header.substring(0, i), header.substring(i + 2));
        }, this);
      Body.call(this, xhr.responseText);
      return;
    }

    Body.call(this, body);

    init = Object(init) || {};

    // readonly attribute USVString url;
    this.url = '';

    // readonly attribute unsigned short status;
    var status = 'status' in init ? ushort(init.status) : 200;
    if (status < 200 || status > 599) throw RangeError();
    this.status = status;

    // readonly attribute boolean ok;
    this.ok = 200 <= this.status && this.status <= 299;

    // readonly attribute ByteString statusText;
    var statusText = 'statusText' in init ? String(init.statusText) : 'OK';
    if (/[^\x00-\xFF]/.test(statusText)) throw TypeError();
    this.statusText = statusText;

    // readonly attribute Headers headers;
    if ('headers' in init) fill(this.headers, init);

    // TODO: Implement these
    // readonly attribute ResponseType type;
    this.type = 'basic'; // TODO: ResponseType
  }

  // interface Response
  Response.prototype = Body.prototype;

  Response.redirect = function() {
    // TODO: Implement?
    throw Error('Not supported');
  };

  //
  // 5.5 Structured cloning of Headers, FetchBodyStream, Request, Response
  //

  //
  // 5.6 Fetch method
  //

  // Promise<Response> fetch(RequestInfo input, optional RequestInit init);
  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var r = new Request(input, init);

      var xhr = new XMLHttpRequest(), async = true;
      xhr._url = r.url;

      try { xhr.open(r.method, r.url, async); } catch (e) { throw TypeError(e.message); }

      for (var iter = r.headers[Symbol.iterator](), step = iter.next();
           !step.done; step = iter.next())
        xhr.setRequestHeader(step.value[0], step.value[1]);

      if (r.credentials === 'include')
        xhr.withCredentials = true;

      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 0)
          reject(new TypeError('Network error'));
        else
          resolve(new Response(xhr));
      };

      xhr.send(r._stream);
    });
  }

  // Exported
  if (!('fetch' in global)) {
    global.Headers = Headers;
    global.Request = Request;
    global.Response = Response;
    global.fetch = fetch;
  }

}(self));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * modernizr v3.8.0
 * Build https://modernizr.com/download?-cssgrid_cssgridlegacy-details-inputtypes-picture-srcset-addtest-printshiv-setclasses-testprop-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera
 *  Veeck

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){

  var tests = [];
  

  /**
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */
  var ModernizrProto = {
    // The current version, dummy
    _version: '3.8.0',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };

  

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  

  var classes = [];
  

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean} true if the typeof the first parameter is exactly the specified type, false otherwise
   */
  function is(obj, type) {
    return typeof obj === type;
  }

  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   * @returns {void}
   */
  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;

        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already or if it doesnt exist yet (like inputtypes)
            if (!Modernizr[featureNameSplit[0]] || Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */
  var docElement = document.documentElement;
  

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */
  var isSVG = docElement.nodeName.toLowerCase() === 'svg';

  

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */
  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      if (classes.length > 0) {
        className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      }
      if (isSVG) {
        docElement.className.baseVal = className;
      } else {
        docElement.className = className;
      }
    }
  }

  ;

  /**
   * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
   *
   * @author kangax
   * @access private
   * @function hasOwnProp
   * @param {object} object - The object to check for a property
   * @param {string} property - The property to check for
   * @returns {boolean}
   */

  // hasOwnProperty shim by kangax needed for Safari 2.0 support
  var hasOwnProp;

  (function() {
    var _hasOwnProperty = ({}).hasOwnProperty;
    /* istanbul ignore else */
    /* we have no way of testing IE 5.5 or safari 2,
     * so just assume the else gets hit */
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function(object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function(object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }
  })();

  


  // _l tracks listeners for async tests, as well as tests that execute after the initial run
  ModernizrProto._l = {};

  /**
   * Modernizr.on is a way to listen for the completion of async tests. Being
   * asynchronous, they may not finish before your scripts run. As a result you
   * will get a possibly false negative `undefined` value.
   *
   * @memberOf Modernizr
   * @name Modernizr.on
   * @access public
   * @function on
   * @param {string} feature - String name of the feature detect
   * @param {Function} cb - Callback function returning a Boolean - true if feature is supported, false if not
   * @returns {void}
   * @example
   *
   * ```js
   * Modernizr.on('flash', function( result ) {
   *   if (result) {
   *    // the browser has flash
   *   } else {
   *     // the browser does not have flash
   *   }
   * });
   * ```
   */
  ModernizrProto.on = function(feature, cb) {
    // Create the list of listeners if it doesn't exist
    if (!this._l[feature]) {
      this._l[feature] = [];
    }

    // Push this test on to the listener list
    this._l[feature].push(cb);

    // If it's already been resolved, trigger it on next tick
    if (Modernizr.hasOwnProperty(feature)) {
      // Next Tick
      setTimeout(function() {
        Modernizr._trigger(feature, Modernizr[feature]);
      }, 0);
    }
  };

  /**
   * _trigger is the private function used to signal test completion and run any
   * callbacks registered through [Modernizr.on](#modernizr-on)
   *
   * @memberOf Modernizr
   * @name Modernizr._trigger
   * @access private
   * @function _trigger
   * @param {string} feature - string name of the feature detect
   * @param {Function|boolean} [res] - A feature detection function, or the boolean =
   * result of a feature detection function
   * @returns {void}
   */
  ModernizrProto._trigger = function(feature, res) {
    if (!this._l[feature]) {
      return;
    }

    var cbs = this._l[feature];

    // Force async
    setTimeout(function() {
      var i, cb;
      for (i = 0; i < cbs.length; i++) {
        cb = cbs[i];
        cb(res);
      }
    }, 0);

    // Don't trigger these again
    delete this._l[feature];
  };

  /**
   * addTest allows you to define your own feature detects that are not currently
   * included in Modernizr (under the covers it's the exact same code Modernizr
   * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)).
   * Just like the official detects, the result
   * will be added onto the Modernizr object, as well as an appropriate className set on
   * the html element when configured to do so
   *
   * @memberOf Modernizr
   * @name Modernizr.addTest
   * @optionName Modernizr.addTest()
   * @optionProp addTest
   * @access public
   * @function addTest
   * @param {string|Object} feature - The string name of the feature detect, or an
   * object of feature detect names and test
   * @param {Function|boolean} test - Function returning true if feature is supported,
   * false if not. Otherwise a boolean representing the results of a feature detection
   * @returns {Object} the Modernizr object to allow chaining
   * @example
   *
   * The most common way of creating your own feature detects is by calling
   * `Modernizr.addTest` with a string (preferably just lowercase, without any
   * punctuation), and a function you want executed that will return a boolean result
   *
   * ```js
   * Modernizr.addTest('itsTuesday', function() {
   *  var d = new Date();
   *  return d.getDay() === 2;
   * });
   * ```
   *
   * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
   * and to `false` every other day of the week. One thing to notice is that the names of
   * feature detect functions are always lowercased when added to the Modernizr object. That
   * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
   *
   *
   *  Since we only look at the returned value from any feature detection function,
   *  you do not need to actually use a function. For simple detections, just passing
   *  in a statement that will return a boolean value works just fine.
   *
   * ```js
   * Modernizr.addTest('hasjquery', 'jQuery' in window);
   * ```
   *
   * Just like before, when the above runs `Modernizr.hasjquery` will be true if
   * jQuery has been included on the page. Not using a function saves a small amount
   * of overhead for the browser, as well as making your code much more readable.
   *
   * Finally, you also have the ability to pass in an object of feature names and
   * their tests. This is handy if you want to add multiple detections in one go.
   * The keys should always be a string, and the value can be either a boolean or
   * function that returns a boolean.
   *
   * ```js
   * var detects = {
   *  'hasjquery': 'jQuery' in window,
   *  'itstuesday': function() {
   *    var d = new Date();
   *    return d.getDay() === 2;
   *  }
   * }
   *
   * Modernizr.addTest(detects);
   * ```
   *
   * There is really no difference between the first methods and this one, it is
   * just a convenience to let you write more readable code.
   */
  function addTest(feature, test) {

    if (typeof feature === 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          addTest(key, feature[ key ]);
        }
      }
    } else {

      feature = feature.toLowerCase();
      var featureNameSplit = feature.split('.');
      var last = Modernizr[featureNameSplit[0]];

      // Again, we don't check for parent test existence. Get that right, though.
      if (featureNameSplit.length === 2) {
        last = last[featureNameSplit[1]];
      }

      if (typeof last !== 'undefined') {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test === 'function' ? test() : test;

      // Set the value (this is the magic, right here).
      if (featureNameSplit.length === 1) {
        Modernizr[featureNameSplit[0]] = test;
      } else {
        // cast to a Boolean, if not one already
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
        }

        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
      }

      // Set a single class (either `feature` or `no-feature`)
      setClasses([(!!test && test !== false ? '' : 'no-') + featureNameSplit.join('-')]);

      // Trigger the event
      Modernizr._trigger(feature, test);
    }

    return Modernizr; // allow chaining.
  }

  // After all the tests are run, add self to the Modernizr prototype
  Modernizr._q.push(function() {
    ModernizrProto.addTest = addTest;
  });

  


  /**
   * @optionName html5printshiv
   * @optionProp html5printshiv
   */

  // Take the html5 variable out of the html5shiv scope so we can return it.
  var html5;
  if (!isSVG) {
    /**
     * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
      /*jshint evil:true */
      /** version */
      var version = '3.7.3';

      /** Preset options */
      var options = window.html5 || {};

      /** Used to skip problem elements */
      var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

      /** Not all elements can be cloned in IE **/
      var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

      /** Detect whether the browser supports default html5 styles */
      var supportsHtml5Styles;

      /** Name of the expando, to work with multiple documents or to re-shiv one document */
      var expando = '_html5shiv';

      /** The id for the the documents expando */
      var expanID = 0;

      /** Cached data for each document */
      var expandoData = {};

      /** Detect whether the browser supports unknown elements */
      var supportsUnknownElements;

      (function() {
        try {
          var a = document.createElement('a');
          a.innerHTML = '<xyz></xyz>';
          //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
          supportsHtml5Styles = ('hidden' in a);

          supportsUnknownElements = a.childNodes.length == 1 || (function() {
            // assign a false positive if unable to shiv
            (document.createElement)('a');
            var frag = document.createDocumentFragment();
            return (
              typeof frag.cloneNode == 'undefined' ||
              typeof frag.createDocumentFragment == 'undefined' ||
              typeof frag.createElement == 'undefined'
            );
          }());
        } catch(e) {
          // assign a false positive if detection fails => unable to shiv
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());

      /*--------------------------------------------------------------------------*/

      /**
       * Creates a style sheet with the given CSS text and adds it to the document.
       * @private
       * @param {Document} ownerDocument The document.
       * @param {String} cssText The CSS text.
       * @returns {StyleSheet} The style element.
       */
      function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

      /**
       * Returns the value of `html5.elements` as an array.
       * @private
       * @returns {Array} An array of shived element node names.
       */
      function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

      /**
       * Extends the built-in list of html5 elements
       * @memberOf html5
       * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
       * @param {Document} ownerDocument The context document.
       */
      function addElements(newElements, ownerDocument) {
        var elements = html5.elements;
        if(typeof elements != 'string'){
          elements = elements.join(' ');
        }
        if(typeof newElements != 'string'){
          newElements = newElements.join(' ');
        }
        html5.elements = elements +' '+ newElements;
        shivDocument(ownerDocument);
      }

      /**
       * Returns the data associated to the given document
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Object} An object of data.
       */
      function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
          data = {};
          expanID++;
          ownerDocument[expando] = expanID;
          expandoData[expanID] = data;
        }
        return data;
      }

      /**
       * returns a shived element for the given nodeName and document
       * @memberOf html5
       * @param {String} nodeName name of the element
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived element.
       */
      function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
          ownerDocument = document;
        }
        if(supportsUnknownElements){
          return ownerDocument.createElement(nodeName);
        }
        if (!data) {
          data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
          node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
          node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
          node = data.createElem(nodeName);
        }

        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
      }

      /**
       * returns a shived DocumentFragment for the given document
       * @memberOf html5
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived DocumentFragment.
       */
      function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
          ownerDocument = document;
        }
        if(supportsUnknownElements){
          return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
        for(;i<l;i++){
          clone.createElement(elems[i]);
        }
        return clone;
      }

      /**
       * Shivs the `createElement` and `createDocumentFragment` methods of the document.
       * @private
       * @param {Document|DocumentFragment} ownerDocument The document.
       * @param {Object} data of the document.
       */
      function shivMethods(ownerDocument, data) {
        if (!data.cache) {
          data.cache = {};
          data.createElem = ownerDocument.createElement;
          data.createFrag = ownerDocument.createDocumentFragment;
          data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
          //abort shiv
          if (!html5.shivMethods) {
            return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
          // unroll the `createElement` calls
          getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
          ');return n}'
        )(html5, data.frag);
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivDocument(ownerDocument) {
        if (!ownerDocument) {
          ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
            // corrects block display not defined in IE6/7/8/9
            'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
            // adds styling not present in IE6/7/8/9
            'mark{background:#FF0;color:#000}' +
            // hides non-rendered elements
            'template{display:none}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      /**
       * The `html5` object is exposed so that more elements can be shived and
       * existing shiving can be detected on iframes.
       * @type Object
       * @example
       *
       * // options can be changed before the script is included
       * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
       */
      var html5 = {

        /**
         * An array or space separated string of node names of the elements to shiv.
         * @memberOf html5
         * @type Array|String
         */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

        /**
         * current version of html5shiv
         */
        'version': version,

        /**
         * A flag to indicate that the HTML5 style sheet should be inserted.
         * @memberOf html5
         * @type Boolean
         */
        'shivCSS': (options.shivCSS !== false),

        /**
         * Is equal to true if a browser supports creating unknown/HTML5 elements
         * @memberOf html5
         * @type boolean
         */
        'supportsUnknownElements': supportsUnknownElements,

        /**
         * A flag to indicate that the document's `createElement` and `createDocumentFragment`
         * methods should be overwritten.
         * @memberOf html5
         * @type Boolean
         */
        'shivMethods': (options.shivMethods !== false),

        /**
         * A string to describe the type of `html5` object ("default" or "default print").
         * @memberOf html5
         * @type String
         */
        'type': 'default',

        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,

        //creates a shived element
        createElement: createElement,

        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment,

        //extends list of elements
        addElements: addElements
      };

      /*--------------------------------------------------------------------------*/

      // expose html5
      window.html5 = html5;

      // shiv the document
      shivDocument(document);

      /*------------------------------- Print Shiv -------------------------------*/

      /** Used to filter media types */
      var reMedia = /^$|\b(?:all|print)\b/;

      /** Used to namespace printable elements */
      var shivNamespace = 'html5shiv';

      /** Detect whether the browser supports shivable style sheets */
      var supportsShivableSheets = !supportsUnknownElements && (function() {
        // assign a false negative if unable to shiv
        var docEl = document.documentElement;
        return !(
          typeof document.namespaces == 'undefined' ||
          typeof document.parentWindow == 'undefined' ||
          typeof docEl.applyElement == 'undefined' ||
          typeof docEl.removeNode == 'undefined' ||
          typeof window.attachEvent == 'undefined'
        );
      }());

      /*--------------------------------------------------------------------------*/

      /**
       * Wraps all HTML5 elements in the given document with printable elements.
       * (eg. the "header" element is wrapped with the "html5shiv:header" element)
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Array} An array wrappers added.
       */
      function addWrappers(ownerDocument) {
        var node,
          nodes = ownerDocument.getElementsByTagName('*'),
          index = nodes.length,
          reElements = RegExp('^(?:' + getElements().join('|') + ')$', 'i'),
          result = [];

        while (index--) {
          node = nodes[index];
          if (reElements.test(node.nodeName)) {
            result.push(node.applyElement(createWrapper(node)));
          }
        }
        return result;
      }

      /**
       * Creates a printable wrapper for the given element.
       * @private
       * @param {Element} element The element.
       * @returns {Element} The wrapper.
       */
      function createWrapper(element) {
        var node,
          nodes = element.attributes,
          index = nodes.length,
          wrapper = element.ownerDocument.createElement(shivNamespace + ':' + element.nodeName);

        // copy element attributes to the wrapper
        while (index--) {
          node = nodes[index];
          node.specified && wrapper.setAttribute(node.nodeName, node.nodeValue);
        }
        // copy element styles to the wrapper
        wrapper.style.cssText = element.style.cssText;
        return wrapper;
      }

      /**
       * Shivs the given CSS text.
       * (eg. header{} becomes html5shiv\:header{})
       * @private
       * @param {String} cssText The CSS text to shiv.
       * @returns {String} The shived CSS text.
       */
      function shivCssText(cssText) {
        var pair,
          parts = cssText.split('{'),
          index = parts.length,
          reElements = RegExp('(^|[\\s,>+~])(' + getElements().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
          replacement = '$1' + shivNamespace + '\\:$2';

        while (index--) {
          pair = parts[index] = parts[index].split('}');
          pair[pair.length - 1] = pair[pair.length - 1].replace(reElements, replacement);
          parts[index] = pair.join('}');
        }
        return parts.join('{');
      }

      /**
       * Removes the given wrappers, leaving the original elements.
       * @private
       * @params {Array} wrappers An array of printable wrappers.
       */
      function removeWrappers(wrappers) {
        var index = wrappers.length;
        while (index--) {
          wrappers[index].removeNode();
        }
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document for print.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivPrint(ownerDocument) {
        var shivedSheet,
          wrappers,
          data = getExpandoData(ownerDocument),
          namespaces = ownerDocument.namespaces,
          ownerWindow = ownerDocument.parentWindow;

        if (!supportsShivableSheets || ownerDocument.printShived) {
          return ownerDocument;
        }
        if (typeof namespaces[shivNamespace] == 'undefined') {
          namespaces.add(shivNamespace);
        }

        function removeSheet() {
          clearTimeout(data._removeSheetTimer);
          if (shivedSheet) {
            shivedSheet.removeNode(true);
          }
          shivedSheet= null;
        }

        ownerWindow.attachEvent('onbeforeprint', function() {

          removeSheet();

          var imports,
            length,
            sheet,
            collection = ownerDocument.styleSheets,
            cssText = [],
            index = collection.length,
            sheets = Array(index);

          // convert styleSheets collection to an array
          while (index--) {
            sheets[index] = collection[index];
          }
          // concat all style sheet CSS text
          while ((sheet = sheets.pop())) {
            // IE does not enforce a same origin policy for external style sheets...
            // but has trouble with some dynamically created stylesheets
            if (!sheet.disabled && reMedia.test(sheet.media)) {

              try {
                imports = sheet.imports;
                length = imports.length;
              } catch(er){
                length = 0;
              }

              for (index = 0; index < length; index++) {
                sheets.push(imports[index]);
              }

              try {
                cssText.push(sheet.cssText);
              } catch(er){}
            }
          }

          // wrap all HTML5 elements with printable elements and add the shived style sheet
          cssText = shivCssText(cssText.reverse().join(''));
          wrappers = addWrappers(ownerDocument);
          shivedSheet = addStyleSheet(ownerDocument, cssText);

        });

        ownerWindow.attachEvent('onafterprint', function() {
          // remove wrappers, leaving the original elements, and remove the shived style sheet
          removeWrappers(wrappers);
          clearTimeout(data._removeSheetTimer);
          data._removeSheetTimer = setTimeout(removeSheet, 500);
        });

        ownerDocument.printShived = true;
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      // expose API
      html5.type += ' print';
      html5.shivPrint = shivPrint;

      // shiv for print
      shivPrint(document);

      if( true && module.exports){
        module.exports = html5;
      }

    }(typeof window !== "undefined" ? window : this, document));
  }

  ;

  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean} true if and only if the first string 'str' contains the second string 'substr'
   */
  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */
  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */
  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });

  

  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });

  

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */
  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {Function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean} the result of the specified callback test
   */
  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;
  }

  ;

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */
  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }

  ;


  /**
   * wrapper around getComputedStyle, to fix issues with Firefox returning null when
   * called inside of a hidden iframe
   *
   * @access private
   * @function computedStyle
   * @param {HTMLElement|SVGElement} elem - The element we want to find the computed styles of
   * @param {string|null} [pseudo] - An optional pseudo element selector (e.g. :before), of null if none
   * @param {string} prop - A CSS property
   * @returns {CSSStyleDeclaration} the value of the specified CSS property
   */
  function computedStyle(elem, pseudo, prop) {
    var result;

    if ('getComputedStyle' in window) {
      result = getComputedStyle.call(window, elem, pseudo);
      var console = window.console;

      if (result !== null) {
        if (prop) {
          result = result.getPropertyValue(prop);
        }
      } else {
        if (console) {
          var method = console.error ? 'error' : 'log';
          console[method].call(console, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
        }
      }
    } else {
      result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
    }

    return result;
  }

  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */
  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: https://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return computedStyle(node, null, 'position') === 'absolute';
      });
    }
    return undefined;
  }
  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */
  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }

  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use.

    // Inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // For strict XHTML browsers the hardly used samp element is used.
    var elems = ['modernizr', 'tspan', 'samp'];
    while (!mStyle.style && elems.length) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] !== before) {
            cleanElems();
            return prefixed === 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed === 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * testProp() investigates whether a given style property is recognized
   * Property names can be provided in either camelCase or kebab-case.
   *
   * @memberOf Modernizr
   * @name Modernizr.testProp
   * @access public
   * @optionName Modernizr.testProp()
   * @optionProp testProp
   * @function testProp
   * @param {string} prop - Name of the CSS property to check
   * @param {string} [value] - Name of the CSS value to check
   * @param {boolean} [useValue] - Whether or not to check the value if @supports isn't supported
   * @returns {boolean} an empty string if the property is supported, undefined if its unsupported
   * @example
   *
   * Just like [testAllProps](#modernizr-testallprops), only it does not check any vendor prefixed
   * version of the string.
   *
   * Note that the property name must be provided in camelCase (e.g. boxSizing not box-sizing)
   *
   * ```js
   * Modernizr.testProp('pointerEvents')  // true
   * ```
   *
   * You can also provide a value as an optional second argument to check if a
   * specific value is supported
   *
   * ```js
   * Modernizr.testProp('pointerEvents', 'none') // true
   * Modernizr.testProp('pointerEvents', 'penguin') // false
   * ```
   */
  var testProp = ModernizrProto.testProp = function(prop, value, useValue) {
    return testProps([prop], undefined, value, useValue);
  };

  

  /**
   * since we have a fairly large number of input tests that don't mutate the input
   * we create a single element that can be shared with all of those tests for a
   * minor perf boost
   *
   * @access private
   * @returns {HTMLInputElement}
   */
  var inputElem = createElement('input');
  
/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
/* DOC
Detects support for HTML5 form input types and exposes Boolean subproperties with the results:

```javascript
Modernizr.inputtypes.color
Modernizr.inputtypes.date
Modernizr.inputtypes.datetime
Modernizr.inputtypes['datetime-local']
Modernizr.inputtypes.email
Modernizr.inputtypes.month
Modernizr.inputtypes.number
Modernizr.inputtypes.range
Modernizr.inputtypes.search
Modernizr.inputtypes.tel
Modernizr.inputtypes.time
Modernizr.inputtypes.url
Modernizr.inputtypes.week
```
*/

  // Run through HTML5's new input types to see if the UA understands any.
  //   This is put behind the tests runloop because it doesn't return a
  //   true/false like all the other tests; instead, it returns an object
  //   containing each input type with its corresponding true/false value

  // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
  (function() {
    var props = ['search', 'tel', 'url', 'email', 'datetime', 'date', 'month', 'week','time', 'datetime-local', 'number', 'range', 'color'];
    var smile = '1)';
    var inputElemType;
    var defaultView;
    var bool;

    for (var i = 0; i < props.length; i++) {
      inputElem.setAttribute('type', inputElemType = props[i]);
      bool = inputElem.type !== 'text' && 'style' in inputElem;

      // We first check to see if the type we give it sticks..
      // If the type does, we feed it a textual value, which shouldn't be valid.
      // If the value doesn't stick, we know there's input sanitization which infers a custom UI
      if (bool) {

        inputElem.value = smile;
        inputElem.style.cssText = 'position:absolute;visibility:hidden;';

        if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {

          docElement.appendChild(inputElem);
          defaultView = document.defaultView;

          // Safari 2-4 allows the smiley as a value, despite making a slider
          bool = defaultView.getComputedStyle &&
            defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
            // Mobile android web browser has false positive, so must
            // check the height to see if the widget is actually there.
            (inputElem.offsetHeight !== 0);

          docElement.removeChild(inputElem);

        } else if (/^(search|tel)$/.test(inputElemType)) {
          // Spec doesn't define any special parsing or detectable UI
          //   behaviors so we pass these through as true

          // Interestingly, opera fails the earlier test, so it doesn't
          //  even make it here.

        } else if (/^(url|email)$/.test(inputElemType)) {
          // Real url and email support comes with prebaked validation.
          bool = inputElem.checkValidity && inputElem.checkValidity() === false;

        } else {
          // If the upgraded input component rejects the :) text, we got a winner
          bool = inputElem.value !== smile;
        }
      }

      Modernizr.addTest('inputtypes.' + inputElemType, !!bool);
    }
  })();


  /**
   * If the browsers follow the spec, then they would expose vendor-specific styles as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following (which is technically incorrect):
   *   elem.style.webkitBorderRadius

   * WebKit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */
  var omPrefixes = 'Moz O ms Webkit';
  

  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;
  

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberOf Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */
  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;
  

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {Function} fn - a function you want to change `this` reference to
   * @param {Object} that - the `this` you want to call the function with
   * @returns {Function} The wrapped version of the supplied function
   */
  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {Array<string>} props - An array of properties to test for
   * @param {Object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|Object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   * @returns {false|*} returns false if the prop is unsupported, otherwise the value that is supported
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {

        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overridden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|Object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   * @returns {false|string} returns the string version of the property, or false if it is unsupported
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  

  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberOf Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @returns {false|string} returns the string version of the property, or false if it is unsupported
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */
  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }

  ModernizrProto.testAllProps = testAllProps;

  
/*!
{
  "name": "CSS Grid (old & new)",
  "property": ["cssgrid", "cssgridlegacy"],
  "authors": ["Faruk Ates"],
  "tags": ["css"],
  "notes": [{
    "name": "The new, standardized CSS Grid",
    "href": "https://www.w3.org/TR/css3-grid-layout/"
  }, {
    "name": "The _old_ CSS Grid (legacy)",
    "href": "https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/"
  }]
}
!*/

  // `grid-columns` is only in the old syntax, `grid-column` exists in both and so `grid-template-rows` is used for the new syntax.
  Modernizr.addTest('cssgridlegacy', testAllProps('grid-columns', '10px', true));
  Modernizr.addTest('cssgrid', testAllProps('grid-template-rows', 'none', true));


  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberOf Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   */
  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  
/*!
{
  "name": "details Element",
  "caniuse": "details",
  "property": "details",
  "tags": ["elem"],
  "builderAliases": ["elem_details"],
  "authors": ["@mathias"],
  "notes": [{
    "name": "Mathias' Original",
    "href": "https://mathiasbynens.be/notes/html5-details-jquery#comment-35"
  }]
}
!*/

  Modernizr.addTest('details', function() {
    var el = createElement('details');
    var diff;

    // return early if possible; thanks @aFarkas!
    if (!('open' in el)) {
      return false;
    }

    testStyles('#modernizr details{display:block}', function(node) {
      node.appendChild(el);
      el.innerHTML = '<summary>a</summary>b';
      diff = el.offsetHeight;
      el.open = true;
      diff = diff !== el.offsetHeight;
    });

    return diff;
  });

/*!
{
  "name": "picture Element",
  "property": "picture",
  "tags": ["elem"],
  "authors": ["Scott Jehl", "Mat Marquis"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#embedded-content"
  },{
    "name": "Relevant spec issue",
    "href": "https://github.com/ResponsiveImagesCG/picture-element/issues/87"
  }]
}
!*/

  Modernizr.addTest('picture', 'HTMLPictureElement' in window);

/*!
{
  "name": "srcset attribute",
  "property": "srcset",
  "caniuse": "srcset",
  "tags": ["image"],
  "notes": [{
    "name": "Smashing Magazine Article",
    "href": "https://www.smashingmagazine.com/2013/08/webkit-implements-srcset-and-why-its-a-good-thing/"
  },{
    "name": "Generate multi-resolution images for srcset with Grunt",
    "href": "https://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/"
  }]
}
!*/
/* DOC
Test for the srcset attribute of images
*/

  Modernizr.addTest('srcset', 'srcset' in createElement('img'));


  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * jscolor, JavaScript Color Picker
 *
 * @version 1.3.1
 * @license GNU Lesser General Public License, http://www.gnu.org/copyleft/lesser.html
 * @author  Jan Odvarko, http://odvarko.cz
 * @created 2008-06-15
 * @updated 2010-01-23
 * @link    http://jscolor.com
 */
// tslint:disable: no-bitwise no-conditional-assignment
__webpack_require__(6);
var jscolor = {
    picker: undefined,
    dir: './',
    binding: true,
    preloading: true,
    install: function () {
        jscolor.addEvent(window, 'load', jscolor.init);
    },
    init: function () {
        if (jscolor.binding) {
            jscolor.bind();
        }
        if (jscolor.preloading) {
            jscolor.preload();
        }
    },
    getDir: function () {
        if (!jscolor.dir) {
            var detected = jscolor.detectDir();
            jscolor.dir = detected !== false ? detected : 'jscolor/';
        }
        return jscolor.dir;
    },
    detectDir: function () {
        var base = location.href;
        var elemBase = document.getElementsByTagName('base');
        for (var i = 0; i < elemBase.length; i += 1) {
            if (elemBase[i].href) {
                base = elemBase[i].href;
            }
        }
        var elemScript = document.getElementsByTagName('script');
        for (var i = 0; i < elemScript.length; i += 1) {
            if (elemScript[i].src && /(^|\/)jscolor(\.min)?\.js([?#].*)?$/i.test(elemScript[i].src)) {
                var src = new jscolor.URI(elemScript[i].src);
                var srcAbs = src.toAbsolute(base);
                srcAbs.path = srcAbs.path.replace(/[^\/]+$/, ''); // remove filename
                srcAbs.query = null;
                srcAbs.fragment = null;
                return srcAbs.toString();
            }
        }
        return false;
    },
    bind: function () {
        var e = document.getElementsByTagName('input');
        for (var i = 0; i < e.length; i += 1) {
            if (!e[i].color && e[i].hasAttribute('type') && e[i].getAttribute('type') === 'color') {
                e[i].color = new jscolor.color(e[i], {});
            }
        }
    },
    preload: function () {
        for (var fn in jscolor.imgRequire) {
            if (jscolor.imgRequire.hasOwnProperty(fn)) {
                jscolor.loadImage(fn);
            }
        }
    },
    images: {
        pad: [181, 101],
        sld: [16, 101],
        cross: [15, 15],
        arrow: [7, 11],
    },
    imgRequire: {},
    imgLoaded: {},
    requireImage: function (filename) {
        jscolor.imgRequire[filename] = true;
    },
    loadImage: function (filename) {
        if (!jscolor.imgLoaded[filename]) {
            jscolor.imgLoaded[filename] = new Image();
            jscolor.imgLoaded[filename].src = jscolor.getDir() + filename;
        }
    },
    fetchElement: function (mixed) {
        return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;
    },
    addEvent: function (el, evnt, func) {
        if (el.addEventListener) {
            el.addEventListener(evnt, func, false);
        }
        else if (el.attachEvent) {
            el.attachEvent('on' + evnt, func);
        }
    },
    fireEvent: function (el, evnt) {
        if (!el) {
            return;
        }
        if (document.createEventObject) {
            var ev = document.createEventObject();
            el.fireEvent('on' + evnt, ev);
        }
        else if (document.createEvent) {
            var ev = document.createEvent('HTMLEvents');
            ev.initEvent(evnt, true, true);
            el.dispatchEvent(ev);
        }
        else if (el['on' + evnt]) {
            // alternatively use the traditional event model (IE5)
            el['on' + evnt]();
        }
    },
    getElementPos: function (e) {
        var e1 = e;
        var e2 = e;
        var x = 0;
        var y = 0;
        if (e1.offsetParent) {
            do {
                x += e1.offsetLeft;
                y += e1.offsetTop;
            } while ((e1 = e1.offsetParent));
        }
        while ((e2 = e2.parentNode) && e2.nodeName.toUpperCase() !== 'BODY') {
            x -= e2.scrollLeft;
            y -= e2.scrollTop;
        }
        return [x, y];
    },
    getElementSize: function (e) {
        return [e.offsetWidth, e.offsetHeight];
    },
    getMousePos: function (e) {
        if (!e) {
            e = window.event;
        }
        if (typeof e.pageX === 'number') {
            return [e.pageX, e.pageY];
        }
        else if (typeof e.clientX === 'number') {
            return [
                e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                e.clientY + document.body.scrollTop + document.documentElement.scrollTop,
            ];
        }
    },
    getViewPos: function () {
        if (typeof window.pageYOffset === 'number') {
            return [window.pageXOffset, window.pageYOffset];
        }
        else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            return [document.body.scrollLeft, document.body.scrollTop];
        }
        else if (document.documentElement &&
            (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
        }
        else {
            return [0, 0];
        }
    },
    getViewSize: function () {
        if (typeof window.innerWidth === 'number') {
            return [window.innerWidth, window.innerHeight];
        }
        else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            return [document.body.clientWidth, document.body.clientHeight];
        }
        else if (document.documentElement &&
            (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            return [document.documentElement.clientWidth, document.documentElement.clientHeight];
        }
        else {
            return [0, 0];
        }
    },
    URI: function (uri) {
        // See RFC3986
        this.scheme = null;
        this.authority = null;
        this.path = '';
        this.query = null;
        this.fragment = null;
        this.parse = function (parseUri) {
            var m = parseUri.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);
            this.scheme = m[3] ? m[2] : null;
            this.authority = m[5] ? m[6] : null;
            this.path = m[7];
            this.query = m[9] ? m[10] : null;
            this.fragment = m[12] ? m[13] : null;
            return this;
        };
        this.toString = function () {
            var result = '';
            if (this.scheme !== null) {
                result = result + this.scheme + ':';
            }
            if (this.authority !== null) {
                result = result + '//' + this.authority;
            }
            if (this.path !== null) {
                result = result + this.path;
            }
            if (this.query !== null) {
                result = result + '?' + this.query;
            }
            if (this.fragment !== null) {
                result = result + '#' + this.fragment;
            }
            return result;
        };
        this.toAbsolute = function (base) {
            var baseUri = new jscolor.URI(base);
            var r = this;
            var t = new jscolor.URI(undefined);
            if (baseUri.scheme === null) {
                return false;
            }
            if (r.scheme !== null && r.scheme.toLowerCase() === baseUri.scheme.toLowerCase()) {
                r.scheme = null;
            }
            if (r.scheme !== null) {
                t.scheme = r.scheme;
                t.authority = r.authority;
                t.path = removeDotSegments(r.path);
                t.query = r.query;
            }
            else {
                if (r.authority !== null) {
                    t.authority = r.authority;
                    t.path = removeDotSegments(r.path);
                    t.query = r.query;
                }
                else {
                    if (r.path === '') {
                        // TODO: == or === ?
                        t.path = baseUri.path;
                        if (r.query !== null) {
                            t.query = r.query;
                        }
                        else {
                            t.query = baseUri.query;
                        }
                    }
                    else {
                        if (r.path.substr(0, 1) === '/') {
                            t.path = removeDotSegments(r.path);
                        }
                        else {
                            if (baseUri.authority !== null && baseUri.path === '') {
                                // TODO: == or === ?
                                t.path = '/' + r.path;
                            }
                            else {
                                t.path = baseUri.path.replace(/[^\/]+$/, '') + r.path;
                            }
                            t.path = removeDotSegments(t.path);
                        }
                        t.query = r.query;
                    }
                    t.authority = baseUri.authority;
                }
                t.scheme = baseUri.scheme;
            }
            t.fragment = r.fragment;
            return t;
        };
        function removeDotSegments(path) {
            var out = '';
            while (path) {
                if (path.substr(0, 3) === '../' || path.substr(0, 2) === './') {
                    path = path.replace(/^\.+/, '').substr(1);
                }
                else if (path.substr(0, 3) === '/./' || path === '/.') {
                    path = '/' + path.substr(3);
                }
                else if (path.substr(0, 4) === '/../' || path === '/..') {
                    path = '/' + path.substr(4);
                    out = out.replace(/\/?[^\/]*$/, '');
                }
                else if (path === '.' || path === '..') {
                    path = '';
                }
                else {
                    var rm = path.match(/^\/?[^\/]*/)[0];
                    path = path.substr(rm.length);
                    out = out + rm;
                }
            }
            return out;
        }
        if (uri) {
            this.parse(uri);
        }
    },
    /*
     * Usage example:
     * var myColor = new jscolor.color(myInputElement)
     */
    color: function (target, prop) {
        this.required = true; // refuse empty values?
        this.adjust = true; // adjust value to uniform notation?
        this.hash = false; // prefix color with # symbol?
        this.caps = true; // uppercase?
        this.valueElement = target; // value holder
        this.styleElement = target; // where to reflect current color
        this.hsv = [0, 0, 1]; // read-only  0-6, 0-1, 0-1
        this.rgb = [1, 1, 1]; // read-only  0-1, 0-1, 0-1
        this.pickerOnfocus = true; // display picker on focus?
        this.pickerMode = 'HSV'; // HSV | HVS
        this.pickerPosition = 'bottom'; // left | right | top | bottom
        this.pickerFace = 10; // px
        this.pickerFaceColor = 'ThreeDFace'; // CSS color
        this.pickerBorder = 1; // px
        this.pickerBorderColor = 'ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight'; // CSS color
        this.pickerInset = 1; // px
        this.pickerInsetColor = 'ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow'; // CSS color
        this.pickerZIndex = 10000;
        for (var p in prop) {
            if (prop.hasOwnProperty(p)) {
                this[p] = prop[p];
            }
        }
        this.hidePicker = function () {
            if (isPickerOwner()) {
                removePicker();
            }
        };
        this.showPicker = function () {
            if (!isPickerOwner()) {
                var tp = jscolor.getElementPos(target); // target pos
                var ts = jscolor.getElementSize(target); // target size
                var vp = jscolor.getViewPos(); // view pos
                var vs = jscolor.getViewSize(); // view size
                var ps = [
                    // picker size
                    2 * this.pickerBorder +
                        4 * this.pickerInset +
                        2 * this.pickerFace +
                        jscolor.images.pad[0] +
                        2 * jscolor.images.arrow[0] +
                        jscolor.images.sld[0],
                    2 * this.pickerBorder + 2 * this.pickerInset + 2 * this.pickerFace + jscolor.images.pad[1],
                ];
                var a = void 0;
                var b = void 0;
                var c = void 0;
                switch (this.pickerPosition.toLowerCase()) {
                    case 'left':
                        a = 1;
                        b = 0;
                        c = -1;
                        break;
                    case 'right':
                        a = 1;
                        b = 0;
                        c = 1;
                        break;
                    case 'top':
                        a = 0;
                        b = 1;
                        c = -1;
                        break;
                    default:
                        a = 0;
                        b = 1;
                        c = 1;
                        break;
                }
                var l = (ts[b] + ps[b]) / 2;
                var pp = [
                    // picker pos
                    -vp[a] + tp[a] + ps[a] > vs[a]
                        ? -vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0
                            ? tp[a] + ts[a] - ps[a]
                            : tp[a]
                        : tp[a],
                    -vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b]
                        ? -vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0
                            ? tp[b] + ts[b] - l - l * c
                            : tp[b] + ts[b] - l + l * c
                        : tp[b] + ts[b] - l + l * c >= 0
                            ? tp[b] + ts[b] - l + l * c
                            : tp[b] + ts[b] - l - l * c,
                ];
                drawPicker(pp[a], pp[b]);
            }
        };
        this.importColor = function () {
            if (!valueElement) {
                this.exportColor();
            }
            else {
                if (!this.adjust) {
                    if (!this.fromString(valueElement.value, leaveValue)) {
                        styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                        styleElement.style.color = styleElement.jscStyle.color;
                        this.exportColor(leaveValue | leaveStyle);
                    }
                }
                else if (!this.required && /^\s*$/.test(valueElement.value)) {
                    valueElement.value = '';
                    styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                    styleElement.style.color = styleElement.jscStyle.color;
                    this.exportColor(leaveValue | leaveStyle);
                }
                else if (this.fromString(valueElement.value)) {
                    // OK
                }
                else {
                    this.exportColor();
                }
            }
        };
        this.exportColor = function (flags) {
            if (!(flags & leaveValue) && valueElement) {
                var value = this.toString();
                if (this.caps) {
                    value = value.toUpperCase();
                }
                if (this.hash) {
                    value = '#' + value;
                }
                valueElement.value = value;
            }
            if (!(flags & leaveStyle) && styleElement) {
                styleElement.style.backgroundColor = '#' + this.toString();
                styleElement.style.color =
                    0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] < 0.5 ? '#FFF' : '#000';
            }
            if (!(flags & leavePad) && isPickerOwner()) {
                redrawPad();
            }
            if (!(flags & leaveSld) && isPickerOwner()) {
                redrawSld();
            }
        };
        this.fromHSV = function (h, s, v, flags) {
            // null = don't change
            /*; (h < 0 && (h = 0)) || (h > 6 && (h = 6))
            ; (s < 0 && (s = 0)) || (s > 1 && (s = 1))
            ; (v < 0 && (v = 0)) || (v > 1 && (v = 1))*/
            this.rgb = HSV_RGB(h === null ? this.hsv[0] : (this.hsv[0] = h), s === null ? this.hsv[1] : (this.hsv[1] = s), v === null ? this.hsv[2] : (this.hsv[2] = v));
            this.exportColor(flags);
        };
        this.fromRGB = function (r, g, b, flags) {
            // null = don't change
            /*; (r < 0 && (r = 0)) || (r > 1 && (r = 1))
            ; (g < 0 && (g = 0)) || (g > 1 && (g = 1))
            ; (b < 0 && (b = 0)) || (b > 1 && (b = 1))*/
            var hsv = RGB_HSV(r === null ? this.rgb[0] : (this.rgb[0] = r), g === null ? this.rgb[1] : (this.rgb[1] = g), b === null ? this.rgb[2] : (this.rgb[2] = b));
            if (hsv[0] !== null) {
                this.hsv[0] = hsv[0];
            }
            if (hsv[2] !== 0) {
                this.hsv[1] = hsv[1];
            }
            this.hsv[2] = hsv[2];
            this.exportColor(flags);
        };
        this.fromString = function (hex, flags) {
            var m = hex.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);
            if (!m) {
                return false;
            }
            else {
                if (m[1].length === 6) {
                    // 6-char notation
                    this.fromRGB(parseInt(m[1].substr(0, 2), 16) / 255, parseInt(m[1].substr(2, 2), 16) / 255, parseInt(m[1].substr(4, 2), 16) / 255, flags);
                }
                else {
                    // 3-char notation
                    this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16) / 255, parseInt(m[1].charAt(1) + m[1].charAt(1), 16) / 255, parseInt(m[1].charAt(2) + m[1].charAt(2), 16) / 255, flags);
                }
                return true;
            }
        };
        this.toString = function () {
            return ((0x100 | Math.round(255 * this.rgb[0])).toString(16).substr(1) +
                (0x100 | Math.round(255 * this.rgb[1])).toString(16).substr(1) +
                (0x100 | Math.round(255 * this.rgb[2])).toString(16).substr(1));
        };
        function RGB_HSV(r, g, b) {
            var n = Math.min(Math.min(r, g), b);
            var v = Math.max(Math.max(r, g), b);
            var m = v - n;
            if (m === 0) {
                return [null, 0, v];
            }
            var h = r === n ? 3 + (b - g) / m : g === n ? 5 + (r - b) / m : 1 + (g - r) / m;
            return [h === 6 ? 0 : h, m / v, v];
        }
        function HSV_RGB(h, s, v) {
            var c = [h, s, v];
            var C;
            var m;
            var Xm;
            var Cm;
            C = c[2] * c[1]; // chroma
            m = c[2] - C;
            if (c[0] === null) {
                return [m, m, m];
            }
            Cm = m + C;
            Xm = m + C * (1 - Math.abs((c[0] % 2) - 1)); // TODO: c[0] nelze modulo - není INT
            switch (Math.floor(c[0])) {
                case 0:
                    return [Cm, Xm, m];
                case 1:
                    return [Xm, Cm, m];
                case 2:
                    return [m, Cm, Xm];
                case 3:
                    return [m, Xm, Cm];
                case 4:
                    return [Xm, m, Cm];
                case 5:
                    return [Cm, m, Xm];
            }
        }
        function removePicker() {
            delete jscolor.picker.owner;
            document.getElementsByTagName('body')[0].removeChild(jscolor.picker.boxB);
        }
        function drawPicker(x, y) {
            if (!jscolor.picker) {
                jscolor.picker = {
                    box: document.createElement('div'),
                    boxB: document.createElement('div'),
                    pad: document.createElement('div'),
                    padB: document.createElement('div'),
                    padM: document.createElement('div'),
                    sld: document.createElement('div'),
                    sldB: document.createElement('div'),
                    sldM: document.createElement('div'),
                };
                for (var i = 0, segSize = 4; i < jscolor.images.sld[1]; i += segSize) {
                    var seg = document.createElement('div');
                    seg.style.height = segSize + 'px';
                    seg.style.fontSize = '1px';
                    seg.style.lineHeight = '0';
                    jscolor.picker.sld.appendChild(seg);
                }
                jscolor.picker.sldB.appendChild(jscolor.picker.sld);
                jscolor.picker.box.appendChild(jscolor.picker.sldB);
                jscolor.picker.box.appendChild(jscolor.picker.sldM);
                jscolor.picker.padB.appendChild(jscolor.picker.pad);
                jscolor.picker.box.appendChild(jscolor.picker.padB);
                jscolor.picker.box.appendChild(jscolor.picker.padM);
                jscolor.picker.boxB.appendChild(jscolor.picker.box);
            }
            var p = jscolor.picker;
            // recompute controls positions
            posPad = [
                x + THIS.pickerBorder + THIS.pickerFace + THIS.pickerInset,
                y + THIS.pickerBorder + THIS.pickerFace + THIS.pickerInset,
            ];
            posSld = [null, y + THIS.pickerBorder + THIS.pickerFace + THIS.pickerInset];
            // controls interaction
            p.box.onmouseup = p.box.onmouseout = function () {
                target.focus();
            };
            p.box.onmousedown = function () {
                abortBlur = true;
            };
            p.box.onmousemove = function (e) {
                holdPad && setPad(e);
                holdSld && setSld(e);
            };
            p.padM.onmouseup = p.padM.onmouseout = function () {
                if (holdPad) {
                    holdPad = false;
                    jscolor.fireEvent(valueElement, 'change');
                }
            };
            p.padM.onmousedown = function (e) {
                holdPad = true;
                setPad(e);
            };
            p.sldM.onmouseup = p.sldM.onmouseout = function () {
                if (holdSld) {
                    holdSld = false;
                    jscolor.fireEvent(valueElement, 'change');
                }
            };
            p.sldM.onmousedown = function (e) {
                holdSld = true;
                setSld(e);
            };
            // picker
            p.box.style.width =
                4 * THIS.pickerInset +
                    2 * THIS.pickerFace +
                    jscolor.images.pad[0] +
                    2 * jscolor.images.arrow[0] +
                    jscolor.images.sld[0] +
                    'px';
            p.box.style.height = 2 * THIS.pickerInset + 2 * THIS.pickerFace + jscolor.images.pad[1] + 'px';
            // picker border
            p.boxB.style.position = 'absolute';
            p.boxB.style.clear = 'both';
            p.boxB.style.left = x + 'px';
            p.boxB.style.top = y + 'px';
            p.boxB.style.zIndex = THIS.pickerZIndex;
            p.boxB.style.border = THIS.pickerBorder + 'px solid';
            p.boxB.style.borderColor = THIS.pickerBorderColor;
            p.boxB.style.background = THIS.pickerFaceColor;
            // pad image
            p.pad.style.width = jscolor.images.pad[0] + 'px';
            p.pad.style.height = jscolor.images.pad[1] + 'px';
            // pad border
            p.padB.style.position = 'absolute';
            p.padB.style.left = THIS.pickerFace + 'px';
            p.padB.style.top = THIS.pickerFace + 'px';
            p.padB.style.border = THIS.pickerInset + 'px solid';
            p.padB.style.borderColor = THIS.pickerInsetColor;
            // pad mouse area
            p.padM.style.position = 'absolute';
            p.padM.style.left = '0';
            p.padM.style.top = '0';
            p.padM.style.width =
                THIS.pickerFace + 2 * THIS.pickerInset + jscolor.images.pad[0] + jscolor.images.arrow[0] + 'px';
            p.padM.style.height = p.box.style.height;
            p.padM.style.cursor = 'crosshair';
            // slider image
            p.sld.style.overflow = 'hidden';
            p.sld.style.width = jscolor.images.sld[0] + 'px';
            p.sld.style.height = jscolor.images.sld[1] + 'px';
            // slider border
            p.sldB.style.position = 'absolute';
            p.sldB.style.right = THIS.pickerFace + 'px';
            p.sldB.style.top = THIS.pickerFace + 'px';
            p.sldB.style.border = THIS.pickerInset + 'px solid';
            p.sldB.style.borderColor = THIS.pickerInsetColor;
            // slider mouse area
            p.sldM.style.position = 'absolute';
            p.sldM.style.right = '0';
            p.sldM.style.top = '0';
            p.sldM.style.width =
                jscolor.images.sld[0] + jscolor.images.arrow[0] + THIS.pickerFace + 2 * THIS.pickerInset + 'px';
            p.sldM.style.height = p.box.style.height;
            try {
                p.sldM.style.cursor = 'pointer';
            }
            catch (eOldIE) {
                p.sldM.style.cursor = 'hand';
            }
            // load images in optimal order
            switch (modeID) {
                case 0:
                    p.pad.classList.add('jscolor-hs');
                    break;
                case 1:
                    p.pad.classList.add('jscolor-hv');
                    break;
            }
            p.padM.classList.add('jscolor-cross');
            p.sldM.classList.add('jscolor-arrow');
            p.pad.classList.add('jscolor-hs');
            // place pointers
            redrawPad();
            redrawSld();
            jscolor.picker.owner = THIS;
            document.getElementsByTagName('body')[0].appendChild(p.boxB);
        }
        function redrawPad() {
            // redraw the pad pointer
            var yComponent;
            switch (modeID) {
                case 0:
                    yComponent = 1;
                    break;
                case 1:
                    yComponent = 2;
                    break;
            }
            var x = Math.round((THIS.hsv[0] / 6) * (jscolor.images.pad[0] - 1));
            var y = Math.round((1 - THIS.hsv[yComponent]) * (jscolor.images.pad[1] - 1));
            jscolor.picker.padM.style.backgroundPosition =
                THIS.pickerFace +
                    THIS.pickerInset +
                    x -
                    Math.floor(jscolor.images.cross[0] / 2) +
                    'px ' +
                    (THIS.pickerFace + THIS.pickerInset + y - Math.floor(jscolor.images.cross[1] / 2)) +
                    'px';
            // redraw the slider image
            var seg = jscolor.picker.sld.childNodes;
            var rgb;
            switch (modeID) {
                case 0:
                    rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 1);
                    for (var j = 0; j < seg.length; j += 1) {
                        seg[j].style.backgroundColor =
                            'rgb(' +
                                rgb[0] * (1 - j / seg.length) * 100 +
                                '%,' +
                                rgb[1] * (1 - j / seg.length) * 100 +
                                '%,' +
                                rgb[2] * (1 - j / seg.length) * 100 +
                                '%)';
                    }
                    break;
                case 1:
                    var s = void 0;
                    var c = [THIS.hsv[2], 0, 0];
                    var i = Math.floor(THIS.hsv[0]);
                    var f = i % 2 ? THIS.hsv[0] - i : 1 - (THIS.hsv[0] - i);
                    switch (i) {
                        case 6:
                        case 0:
                            rgb = [0, 1, 2];
                            break;
                        case 1:
                            rgb = [1, 0, 2];
                            break;
                        case 2:
                            rgb = [2, 0, 1];
                            break;
                        case 3:
                            rgb = [2, 1, 0];
                            break;
                        case 4:
                            rgb = [1, 2, 0];
                            break;
                        case 5:
                            rgb = [0, 2, 1];
                            break;
                    }
                    for (var j = 0; j < seg.length; j += 1) {
                        s = 1 - (1 / (seg.length - 1)) * j;
                        c[1] = c[0] * (1 - s * f);
                        c[2] = c[0] * (1 - s);
                        seg[j].style.backgroundColor =
                            'rgb(' + c[rgb[0]] * 100 + '%,' + c[rgb[1]] * 100 + '%,' + c[rgb[2]] * 100 + '%)';
                    }
                    break;
            }
        }
        function redrawSld() {
            // redraw the slider pointer
            var yComponent;
            switch (modeID) {
                case 0:
                    yComponent = 2;
                    break;
                case 1:
                    yComponent = 1;
                    break;
            }
            var y = Math.round((1 - THIS.hsv[yComponent]) * (jscolor.images.sld[1] - 1));
            jscolor.picker.sldM.style.backgroundPosition =
                '0 ' + (THIS.pickerFace + THIS.pickerInset + y - Math.floor(jscolor.images.arrow[1] / 2)) + 'px';
        }
        function isPickerOwner() {
            return jscolor.picker && jscolor.picker.owner === THIS;
        }
        function blurTarget() {
            if (valueElement === target) {
                THIS.importColor();
            }
            if (THIS.pickerOnfocus) {
                THIS.hidePicker();
            }
        }
        function blurValue() {
            if (valueElement !== target) {
                THIS.importColor();
            }
        }
        function setPad(e) {
            var posM = jscolor.getMousePos(e);
            var x = posM[0] - posPad[0];
            var y = posM[1] - posPad[1];
            switch (modeID) {
                case 0:
                    THIS.fromHSV(x * (6 / (jscolor.images.pad[0] - 1)), 1 - y / (jscolor.images.pad[1] - 1), null, leaveSld);
                    break;
                case 1:
                    THIS.fromHSV(x * (6 / (jscolor.images.pad[0] - 1)), null, 1 - y / (jscolor.images.pad[1] - 1), leaveSld);
                    break;
            }
        }
        function setSld(e) {
            var posM = jscolor.getMousePos(e);
            var y = posM[1] - posPad[1];
            switch (modeID) {
                case 0:
                    THIS.fromHSV(null, null, 1 - y / (jscolor.images.sld[1] - 1), leavePad);
                    break;
                case 1:
                    THIS.fromHSV(null, 1 - y / (jscolor.images.sld[1] - 1), null, leavePad);
                    break;
            }
        }
        var THIS = this;
        var modeID = this.pickerMode.toLowerCase() === 'hvs' ? 1 : 0;
        var abortBlur = false;
        var valueElement = jscolor.fetchElement(this.valueElement);
        var styleElement = jscolor.fetchElement(this.styleElement);
        var holdPad = false;
        var holdSld = false;
        var posPad;
        var posSld;
        var leaveValue = 1 << 0;
        var leaveStyle = 1 << 1;
        var leavePad = 1 << 2;
        var leaveSld = 1 << 3;
        // target
        jscolor.addEvent(target, 'focus', function () {
            if (THIS.pickerOnfocus) {
                THIS.showPicker();
            }
        });
        jscolor.addEvent(target, 'blur', function () {
            if (!abortBlur) {
                window.setTimeout(function () {
                    abortBlur || blurTarget();
                    abortBlur = false;
                }, 0);
            }
            else {
                abortBlur = false;
            }
        });
        // valueElement
        if (valueElement) {
            var updateField = function () {
                THIS.fromString(valueElement.value, leaveValue);
            };
            jscolor.addEvent(valueElement, 'keyup', updateField);
            jscolor.addEvent(valueElement, 'input', updateField);
            jscolor.addEvent(valueElement, 'blur', blurValue);
            valueElement.setAttribute('autocomplete', 'off');
        }
        // styleElement
        if (styleElement) {
            styleElement.jscStyle = {
                backgroundColor: styleElement.style.backgroundColor,
                color: styleElement.style.color,
            };
        }
        // require images
        switch (modeID) {
            case 0:
                jscolor.requireImage('hs.png');
                break;
            case 1:
                jscolor.requireImage('hv.png');
                break;
        }
        jscolor.requireImage('cross.gif');
        jscolor.requireImage('arrow.gif');
        this.importColor();
    },
};
jscolor.install();
/* harmony default export */ __webpack_exports__["default"] = (jscolor);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(7);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Imports
var getUrl = __webpack_require__(9);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(11));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(12));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(13));
// Module
exports.push([module.i, ".jscolor-arrow {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n}\n\n.jscolor-cross {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n}\n\n.jscolor-hs {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") 0 0 no-repeat;\n}\n\n.jscolor-hv {\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ") 0 0 no-repeat;\n}\n", ""]);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5034704a76cd55c1cbcbc58ea6bf523f.gif";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba9a274b9323753cd95bc3b1eb2f4e5f.gif";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fefa1a03d92ebad25c88dca94a0b63db.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "990d71cada17da100653636cf8490884.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
Details Element Polyfill 2.4.0
Copyright © 2019 Javan Makhmali
 */
(function() {
  "use strict";
  var element = document.createElement("details");
  var elementIsNative = typeof HTMLDetailsElement != "undefined" && element instanceof HTMLDetailsElement;
  var support = {
    open: "open" in element || elementIsNative,
    toggle: "ontoggle" in element
  };
  var styles = '\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "►";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "▼";\n}\n';
  var _ref = [], forEach = _ref.forEach, slice = _ref.slice;
  if (!support.open) {
    polyfillStyles();
    polyfillProperties();
    polyfillToggle();
    polyfillAccessibility();
  }
  if (support.open && !support.toggle) {
    polyfillToggleEvent();
  }
  function polyfillStyles() {
    document.head.insertAdjacentHTML("afterbegin", "<style>" + styles + "</style>");
  }
  function polyfillProperties() {
    var prototype = document.createElement("details").constructor.prototype;
    var setAttribute = prototype.setAttribute, removeAttribute = prototype.removeAttribute;
    var open = Object.getOwnPropertyDescriptor(prototype, "open");
    Object.defineProperties(prototype, {
      open: {
        get: function get() {
          if (this.tagName == "DETAILS") {
            return this.hasAttribute("open");
          } else {
            if (open && open.get) {
              return open.get.call(this);
            }
          }
        },
        set: function set(value) {
          if (this.tagName == "DETAILS") {
            return value ? this.setAttribute("open", "") : this.removeAttribute("open");
          } else {
            if (open && open.set) {
              return open.set.call(this, value);
            }
          }
        }
      },
      setAttribute: {
        value: function value(name, _value) {
          var _this = this;
          var call = function call() {
            return setAttribute.call(_this, name, _value);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (!wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", true);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      },
      removeAttribute: {
        value: function value(name) {
          var _this2 = this;
          var call = function call() {
            return removeAttribute.call(_this2, name);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", false);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      }
    });
  }
  function polyfillToggle() {
    onTogglingTrigger(function(element) {
      element.hasAttribute("open") ? element.removeAttribute("open") : element.setAttribute("open", "");
    });
  }
  function polyfillToggleEvent() {
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, function(mutation) {
          var target = mutation.target, attributeName = mutation.attributeName;
          if (target.tagName == "DETAILS" && attributeName == "open") {
            triggerToggle(target);
          }
        });
      }).observe(document.documentElement, {
        attributes: true,
        subtree: true
      });
    } else {
      onTogglingTrigger(function(element) {
        var wasOpen = element.getAttribute("open");
        setTimeout(function() {
          var isOpen = element.getAttribute("open");
          if (wasOpen != isOpen) {
            triggerToggle(element);
          }
        }, 1);
      });
    }
  }
  function polyfillAccessibility() {
    setAccessibilityAttributes(document);
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, function(mutation) {
          forEach.call(mutation.addedNodes, setAccessibilityAttributes);
        });
      }).observe(document.documentElement, {
        subtree: true,
        childList: true
      });
    } else {
      document.addEventListener("DOMNodeInserted", function(event) {
        setAccessibilityAttributes(event.target);
      });
    }
  }
  function setAccessibilityAttributes(root) {
    findElementsWithTagName(root, "SUMMARY").forEach(function(summary) {
      var details = findClosestElementWithTagName(summary, "DETAILS");
      summary.setAttribute("aria-expanded", details.hasAttribute("open"));
      if (!summary.hasAttribute("tabindex")) summary.setAttribute("tabindex", "0");
      if (!summary.hasAttribute("role")) summary.setAttribute("role", "button");
    });
  }
  function eventIsSignificant(event) {
    return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable);
  }
  function onTogglingTrigger(callback) {
    addEventListener("click", function(event) {
      if (eventIsSignificant(event)) {
        if (event.which <= 1) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
          }
        }
      }
    }, false);
    addEventListener("keydown", function(event) {
      if (eventIsSignificant(event)) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
            event.preventDefault();
          }
        }
      }
    }, false);
  }
  function triggerToggle(element) {
    var event = document.createEvent("Event");
    event.initEvent("toggle", false, false);
    element.dispatchEvent(event);
  }
  function findElementsWithTagName(root, tagName) {
    return (root.tagName == tagName ? [ root ] : []).concat(typeof root.getElementsByTagName == "function" ? slice.call(root.getElementsByTagName(tagName)) : []);
  }
  function findClosestElementWithTagName(element, tagName) {
    if (typeof element.closest == "function") {
      return element.closest(tagName);
    } else {
      while (element) {
        if (element.tagName == tagName) {
          return element;
        } else {
          element = element.parentNode;
        }
      }
    }
  }
})();


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/*! respimage - v1.4.2 - 2015-08-22
 Licensed MIT */
!function(a,b,c){"use strict";function d(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function e(){var b;R=!1,U=a.devicePixelRatio,S={},T={},b=(U||1)*D.xQuant,D.uT||(D.maxX=Math.max(1.3,D.maxX),b=Math.min(b,D.maxX),v.DPR=b),V.width=Math.max(a.innerWidth||0,B.clientWidth),V.height=Math.max(a.innerHeight||0,B.clientHeight),V.vw=V.width/100,V.vh=V.height/100,V.em=v.getEmValue(),V.rem=V.em,o=D.lazyFactor/2,o=o*b+o,q=.4+.1*b,l=.5+.2*b,m=.5+.25*b,p=b+1.3,(n=V.width>V.height)||(o*=.9),I&&(o*=.9),u=[V.width,V.height,b].join("-")}function f(a,b,c){var d=b*Math.pow(a-.4,1.9);return n||(d/=1.3),a+=d,a>c}function g(a){var b,c=v.getSet(a),d=!1;"pending"!=c&&(d=u,c&&(b=v.setRes(c),d=v.applySetCandidate(b,a))),a[v.ns].evaled=d}function h(a,b){return a.res-b.res}function i(a,b,c){var d;return!c&&b&&(c=a[v.ns].sets,c=c&&c[c.length-1]),d=j(b,c),d&&(b=v.makeUrl(b),a[v.ns].curSrc=b,a[v.ns].curCan=d,d.res||_(d,d.set.sizes)),d}function j(a,b){var c,d,e;if(a&&b)for(e=v.parseSet(b),a=v.makeUrl(a),c=0;c<e.length;c++)if(a==v.makeUrl(e[c].url)){d=e[c];break}return d}function k(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[v.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}var l,m,n,o,p,q,r,s,t,u,v={},w=function(){},x=b.createElement("img"),y=x.getAttribute,z=x.setAttribute,A=x.removeAttribute,B=b.documentElement,C={},D={xQuant:1,lazyFactor:.4,maxX:2},E="data-pfsrc",F=E+"set",G="webkitBackfaceVisibility"in B.style,H=navigator.userAgent,I=/rident/.test(H)||/ecko/.test(H)&&H.match(/rv\:(\d+)/)&&RegExp.$1>35,J="currentSrc",K=/\s+\+?\d+(e\d+)?w/,L=/((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,M=/^([\+eE\d\.]+)(w|x)$/,N=/\s*\d+h\s*/,O=a.respimgCFG,P=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),Q="font-size:100%!important;",R=!0,S={},T={},U=a.devicePixelRatio,V={px:1,"in":96},W=b.createElement("a"),X=!1,Y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},Z=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},$=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=Z(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")});return function(b,d){var e;if(!(b in S))if(S[b]=!1,d&&(e=b.match(a)))S[b]=e[1]*V[e[2]];else try{S[b]=new Function("e",c(b))(V)}catch(f){}return S[b]}}(),_=function(a,b){return a.w?(a.cWidth=v.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.x,a},ab=function(c){var d,e,f,g=c||{};if(g.elements&&1==g.elements.nodeType&&("IMG"==g.elements.nodeName.toUpperCase()?g.elements=[g.elements]:(g.context=g.elements,g.elements=null)),g.reparse&&(g.reevaluate=!0,a.console&&console.warn&&console.warn("reparse was renamed to reevaluate!")),d=g.elements||v.qsa(g.context||b,g.reevaluate||g.reselect?v.sel:v.selShort),f=d.length){for(v.setupRun(g),X=!0,e=0;f>e;e++)v.fillImg(d[e],g);v.teardownRun(g)}},bb=Z(function(a){var b=[1,"x"],c=d(a||"");return c&&(c=c.replace(N,""),b=c.match(M)?[1*RegExp.$1,RegExp.$2]:!1),b});if(J in x||(J="src"),C["image/jpeg"]=!0,C["image/gif"]=!0,C["image/png"]=!0,C["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),v.ns=("ri"+(new Date).getTime()).substr(0,9),v.supSrcset="srcset"in x,v.supSizes="sizes"in x,v.supPicture=!!a.HTMLPictureElement,v.supSrcset&&v.supPicture&&!v.supSizes&&!function(a){x.srcset="data:,a",a.src="data:,a",v.supSrcset=x.complete===a.complete,v.supPicture=v.supSrcset&&v.supPicture}(b.createElement("img")),v.selShort="picture>img,img[srcset]",v.sel=v.selShort,v.cfg=D,v.supSrcset&&(v.sel+=",img["+F+"]"),v.DPR=U||1,v.u=V,v.types=C,s=v.supSrcset&&!v.supSizes,v.setSize=w,v.makeUrl=Z(function(a){return W.href=a,W.href}),v.qsa=function(a,b){return a.querySelectorAll(b)},v.matchesMedia=function(){return v.matchesMedia=a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(a){return!a||matchMedia(a).matches}:v.mMQ,v.matchesMedia.apply(this,arguments)},v.mMQ=function(a){return a?$(a):!0},v.calcLength=function(a){var b=$(a,!0)||!1;return 0>b&&(b=!1),b},v.supportsType=function(a){return a?C[a]:!0},v.parseSize=Z(function(a){var b=(a||"").match(L);return{media:b&&b[1],length:b&&b[2]}}),v.parseSet=function(a){if(!a.cands){var b,c,d,e,f,g,h=a.srcset;for(a.cands=[];h;)h=h.replace(/^\s+/g,""),b=h.search(/\s/g),d=null,-1!=b?(c=h.slice(0,b),e=c.charAt(c.length-1),","!=e&&c||(c=c.replace(/,+$/,""),d=""),h=h.slice(b+1),null==d&&(f=h.indexOf(","),-1!=f?(d=h.slice(0,f),h=h.slice(f+1)):(d=h,h=""))):(c=h,h=""),c&&(d=bb(d))&&(g={url:c.replace(/^,+/,""),set:a},g[d[1]]=d[0],"x"==d[1]&&1==d[0]&&(a.has1x=!0),a.cands.push(g))}return a.cands},v.getEmValue=function(){var a;if(!r&&(a=b.body)){var c=b.createElement("div"),d=B.style.cssText,e=a.style.cssText;c.style.cssText=P,B.style.cssText=Q,a.style.cssText=Q,a.appendChild(c),r=c.offsetWidth,a.removeChild(c),r=parseFloat(r,10),B.style.cssText=d,a.style.cssText=e}return r||16},v.calcListLength=function(a){if(!(a in T)||D.uT){var b,c,e,f,g,h,i=d(a).split(/\s*,\s*/),j=!1;for(g=0,h=i.length;h>g&&(b=i[g],c=v.parseSize(b),e=c.length,f=c.media,!e||!v.matchesMedia(f)||(j=v.calcLength(e))===!1);g++);T[a]=j?j:V.width}return T[a]},v.setRes=function(a){var b;if(a){b=v.parseSet(a);for(var c=0,d=b.length;d>c;c++)_(b[c],a.sizes)}return b},v.setRes.res=_,v.applySetCandidate=function(a,b){if(a.length){var c,d,e,g,j,k,n,r,s,t,w,x,y,z=b[v.ns],A=u,B=o,C=q;if(r=z.curSrc||b[J],s=z.curCan||i(b,r,a[0].set),d=v.DPR,y=s&&s.res,!n&&r&&(x=I&&!b.complete&&s&&y-.2>d,x||s&&!(p>y)||(s&&d>y&&y>l&&(m>y&&(B*=.8,C+=.04*d),s.res+=B*Math.pow(y-C,2)),t=!z.pic||s&&s.set==a[0].set,s&&t&&s.res>=d&&(n=s))),!n)for(y&&(s.res=s.res-(s.res-y)/2),a.sort(h),k=a.length,n=a[k-1],e=0;k>e;e++)if(c=a[e],c.res>=d){g=e-1,n=a[g]&&(j=c.res-d)&&(x||r!=v.makeUrl(c.url))&&f(a[g].res,j,d)?a[g]:c;break}return y&&(s.res=y),n&&(w=v.makeUrl(n.url),z.curSrc=w,z.curCan=n,w!=r&&v.setSrc(b,n),v.setSize(b)),A}},v.setSrc=function(a,b){var c;a.src=b.url,G&&(c=a.style.zoom,a.style.zoom="0.999",a.style.zoom=c)},v.getSet=function(a){var b,c,d,e=!1,f=a[v.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&v.matchesMedia(c.media)&&(d=v.supportsType(c.type))){"pending"==d&&(c=d),e=c;break}return e},v.parseSets=function(a,b,d){var e,f,g,h,i="PICTURE"==b.nodeName.toUpperCase(),l=a[v.ns];(l.src===c||d.src)&&(l.src=y.call(a,"src"),l.src?z.call(a,E,l.src):A.call(a,E)),(l.srcset===c||!v.supSrcset||a.srcset||d.srcset)&&(e=y.call(a,"srcset"),l.srcset=e,h=!0),l.sets=[],i&&(l.pic=!0,k(b,l.sets)),l.srcset?(f={srcset:l.srcset,sizes:y.call(a,"sizes")},l.sets.push(f),g=(s||l.src)&&K.test(l.srcset||""),g||!l.src||j(l.src,f)||f.has1x||(f.srcset+=", "+l.src,f.cands.push({url:l.src,x:1,set:f}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(i||f&&!v.supSrcset||g),h&&v.supSrcset&&!l.supported&&(e?(z.call(a,F,e),a.srcset=""):A.call(a,F)),l.supported&&!l.srcset&&(!l.src&&a.src||a.src!=v.makeUrl(l.src))&&(null==l.src?a.removeAttribute("src"):a.src=l.src),l.parsed=!0},v.fillImg=function(a,b){var c,d,e=b.reselect||b.reevaluate;if(a[v.ns]||(a[v.ns]={}),d=a[v.ns],e||d.evaled!=u){if(!d.parsed||b.reevaluate){if(c=a.parentNode,!c)return;v.parseSets(a,c,b)}d.supported?d.evaled=u:g(a)}},v.setupRun=function(b){(!X||R||U!=a.devicePixelRatio)&&(e(),b.elements||b.context||clearTimeout(t))},v.supPicture?(ab=w,v.fillImg=w):(b.createElement("picture"),function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";h=setTimeout(e,"loading"==a?200:999),b.body&&(c=c||d.test(a),v.fillImgs(),c&&clearTimeout(h))},f=function(){v.fillImgs()},g=function(){clearTimeout(t),R=!0,t=setTimeout(f,99)},h=setTimeout(e,b.body?0:20);Y(a,"resize",g),Y(b,"readystatechange",e)}()),v.respimage=ab,v.fillImgs=ab,v.teardownRun=w,ab._=v,a.respimage=a.picturefill||ab,!a.picturefill)for(a.respimgCFG={ri:v,push:function(a){var b=a.shift();"function"==typeof v[b]?v[b].apply(v,a):(D[b]=a[0],X&&v.fillImgs({reselect:!0}))}};O&&O.length;)a.respimgCFG.push(O.shift());a.picturefill||(a.picturefill=a.respimage,a.picturefillCFG||(a.picturefillCFG=a.respimgCFG))}(window,document);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {/*! CSS-POLYFILLS - v0.1.0 - 2019-01-07 - https://github.com/FremyCompany/css-polyfills - Copyright (c) 2019 François REMY; MIT-Licensed !*/

!(function() { 'use strict';
    var module = { exports:{} };
    var require = (function() { var modules = {}; var require = function(m) { return modules[m]; }; require.define = function(m) { modules[m]=module.exports; module.exports={}; }; return require; })();

////////////////////////////////////////

!(function(window, document) { "use strict";

	//
	// some code for console polyfilling
	//
	if(!window.console) {
			
		window.console = {
			backlog: '',
			
			log: function(x) { this.backlog+=x+'\n'; if(window.debug) alert(x); },
			
			dir: function(x) { try { 
				
				var elm = function(e) {
					if(e.innerHTML) {
						return {
							tagName: e.tagName,
							className: e.className,
							id: e.id,
							innerHTML: e.innerHTML.substr(0,100)
						}
					} else {
						return {
							nodeName: e.nodeName,
							nodeValue: e.nodeValue
						}
					}
				};
				
				var jsonify = function(o) {
					var seen=[];
					var jso=JSON.stringify(o, function(k,v){
						if (typeof v =='object') {
							if ( !seen.indexOf(v) ) { return '__cycle__'; }
							if ( v instanceof window.Node) { return elm(v); }
							seen.push(v);
						} return v;
					});
					return jso;
				};
				
				this.log(jsonify(x)); 
				
			} catch(ex) { this.log(x) } },
			
			warn: function(x) { this.log(x) },
			
			error: function(x) { this.log("ERROR:"); this.log(x); }
			
		};
		
		if(!window.onerror) {
			window.onerror = function() {
				console.log([].slice.call(arguments,0).join("\n"))
			};
		}
		
	}

	//
	// this special console is used as a proxy emulating the CSS console of browsers
	//
	window.cssConsole = {
		enabled: (!!window.debug), warnEnabled: (true),
		log: function(x) { if(this.enabled) console.log(x) },
		dir: function(x) { if(this.enabled) console.dir(x) },
		warn: function(x) { if(this.warnEnabled) console.warn(x) },
		error: function(x) { console.error(x); }
	}

})(window, document);
require.define('src/core/polyfill-dom-console.js');

////////////////////////////////////////

void function() {
	
	// request animation frame
    var vendors = ['webkit', 'moz', 'ms', 'o'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame'] || window[vp+'CancelRequestAnimationFrame']);
    }
    if (!window.requestAnimationFrame || !window.cancelAnimationFrame) {
		
		// tick every 16ms
        var listener_index = 0; var listeners = []; var tmp = []; var tick = function() {
			var now = +(new Date()); var callbacks = listeners; listeners = tmp;
			for(var i = 0; i<callbacks.length; i++) { callbacks[i](now); }
			listener_index += callbacks.length; callbacks.length = 0; tmp = callbacks;
			setTimeout(tick, 16);
		}; tick();
		
		// add a listener
        window.requestAnimationFrame = function(callback) {
            return listener_index + listeners.push(callback);
        };
		
		// remove a listener
        window.cancelAnimationFrame = function(index) {
			index -= listener_index; if(index >= 0 && index < listeners.length) {
				listeners[index] = function() {};
			}
		};
		
    }
	
	// setImmediate
	if(!window.setImmediate) {
		window.setImmediate = function(f) { return setTimeout(f, 0) };
		window.cancelImmediate = clearTimeout;
	}
	
}();

require.define('src/core/polyfill-dom-requestAnimationFrame.js');

////////////////////////////////////////

//
// note: this file is based on Tab Atkins's CSS Parser
// please include him (@tabatkins) if you open any issue for this file
// 
module.exports = (function(window, document) { "use strict";

// 
// exports
//
var cssSyntax = { 
	tokenize: function(string) {/*filled later*/}, 
	parse: function(tokens) {/*filled later*/}
};

//
// css tokenizer
//

// Add support for token lists (superclass of array)
function TokenList() {
	var array = []; 
	array.toCSSString=TokenListToCSSString;
	return array;
}
function TokenListToCSSString(sep) {
	if(sep) {
		return this.map(function(o) { return o.toCSSString(); }).join(sep);
	} else {
		return this.asCSSString || (this.asCSSString = (
			this.map(function(o) { return o.toCSSString(); }).join("/**/")
				.replace(/( +\/\*\*\/ *| * | *\/\*\*\/ +)/g," ")
				.replace(/( +\/\*\*\/ *| * | *\/\*\*\/ +)/g," ")
				.replace(/(\!|\:|\;|\@|\.|\,|\*|\=|\&|\\|\/|\<|\>|\[|\{|\(|\]|\}|\)|\|)\/\*\*\//g,"$1")
				.replace(/\/\*\*\/(\!|\:|\;|\@|\.|\,|\*|\=|\&|\\|\/|\<|\>|\[|\{|\(|\]|\}|\)|\|)/g,"$1")
		));
	}
}
cssSyntax.TokenList = TokenList;
cssSyntax.TokenListToCSSString = TokenListToCSSString;

function between(num, first, last) { return num >= first && num <= last; }
function digit(code) { return between(code, 0x30,0x39); }
function hexdigit(code) { return digit(code) || between(code, 0x41,0x46) || between(code, 0x61,0x66); }
function uppercaseletter(code) { return between(code, 0x41,0x5a); }
function lowercaseletter(code) { return between(code, 0x61,0x7a); }
function letter(code) { return uppercaseletter(code) || lowercaseletter(code); }
function nonascii(code) { return code >= 0x80; }
function namestartchar(code) { return letter(code) || nonascii(code) || code == 0x5f; }
function namechar(code) { return namestartchar(code) || digit(code) || code == 0x2d; }
function nonprintable(code) { return between(code, 0,8) || code == 0xb || between(code, 0xe,0x1f) || code == 0x7f; }
function newline(code) { return code == 0xa; }
function whitespace(code) { return newline(code) || code == 9 || code == 0x20; }
function badescape(code) { return newline(code) || isNaN(code); }

var maximumallowedcodepoint = 0x10ffff;

function InvalidCharacterError(message) {
	this.message = message;
};
InvalidCharacterError.prototype = new Error;
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function preprocess(str) {
	// Turn a string into an array of code points,
	// following the preprocessing cleanup rules.
	var codepoints = [];
	for(var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		if(code == 0xd && str.charCodeAt(i+1) == 0xa) {
			code = 0xa; i++;
		}
		if(code == 0xd || code == 0xc) code = 0xa;
		if(code == 0x0) code = 0xfffd;
		if(between(code, 0xd800, 0xdbff) && between(str.charCodeAt(i+1), 0xdc00, 0xdfff)) {
			// Decode a surrogate pair into an astral codepoint.
			var lead = code - 0xd800;
			var trail = str.charCodeAt(i+1) - 0xdc00;
			code = Math.pow(2, 21) + lead * Math.pow(2, 10) + trail;
		}
		codepoints.push(code);
	}
	return codepoints;
}

function stringFromCode(code) {
	if(code <= 0xffff) return String.fromCharCode(code);
	// Otherwise, encode astral char as surrogate pair.
	code -= Math.pow(2, 21);
	var lead = Math.floor(code/Math.pow(2, 10)) + 0xd800;
	var trail = code % Math.pow(2, 10); + 0xdc00;
	return String.fromCharCode(lead) + String.fromCharCode(trail);
}

function tokenize(str) {
	str = preprocess(str);
	var i = -1;
	var tokens = new TokenList();
	var code;

	// Line number information.
	var line = 0;
	var column = 0;
	// The only use of lastLineLength is in reconsume().
	var lastLineLength = 0;
	var incrLineno = function() {
		line += 1;
		lastLineLength = column;
		column = 0;
	};
	var locStart = {line:line, column:column};

	var codepoint = function(i) {
		if(i >= str.length) {
			return -1;
		}
		return str[i];
	}
	var next = function(num) {
		if(num === undefined) { num = 1; }
		if(num > 3) { throw "Spec Error: no more than three codepoints of lookahead."; }
		return codepoint(i+num);
	};
	var consume = function(num) {
		if(num === undefined)
			num = 1;
		i += num;
		code = codepoint(i);
		if(newline(code)) incrLineno();
		else column += num;
		//console.log('Consume '+i+' '+String.fromCharCode(code) + ' 0x' + code.toString(16));
		return true;
	};
	var reconsume = function() {
		i -= 1;
		if (newline(code)) {
			line -= 1;
			column = lastLineLength;
		} else {
			column -= 1;
		}
		locStart.line = line;
		locStart.column = column;
		return true;
	};
	var eof = function(codepoint) {
		if(codepoint === undefined) codepoint = code;
		return codepoint == -1;
	};
	var donothing = function() {};
	var tokenizeerror = function() { console.log("Parse error at index " + i + ", processing codepoint 0x" + code.toString(16) + ".");return true; };

	var consumeAToken = function() {
		consumeComments();
		consume();
		if(whitespace(code)) {
			while(whitespace(next())) consume();
			return new WhitespaceToken;
		}
		else if(code == 0x22) return consumeAStringToken();
		else if(code == 0x23) {
			if(namechar(next()) || areAValidEscape(next(1), next(2))) {
				var token = new HashToken();
				if(wouldStartAnIdentifier(next(1), next(2), next(3))) token.type = "id";
				token.value = consumeAName();
				return token;
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x24) {
			if(next() == 0x3d) {
				consume();
				return new SuffixMatchToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x27) return consumeAStringToken();
		else if(code == 0x28) return new OpenParenToken();
		else if(code == 0x29) return new CloseParenToken();
		else if(code == 0x2a) {
			if(next() == 0x3d) {
				consume();
				return new SubstringMatchToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x2b) {
			if(startsWithANumber()) {
				reconsume();
				return consumeANumericToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x2c) return new CommaToken();
		else if(code == 0x2d) {
			if(startsWithANumber()) {
				reconsume();
				return consumeANumericToken();
			} else if(next(1) == 0x2d && next(2) == 0x3e) {
				consume(2);
				return new CDCToken();
			} else if(startsWithAnIdentifier()) {
				reconsume();
				return consumeAnIdentlikeToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x2e) {
			if(startsWithANumber()) {
				reconsume();
				return consumeANumericToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x3a) return new ColonToken;
		else if(code == 0x3b) return new SemicolonToken;
		else if(code == 0x3c) {
			if(next(1) == 0x21 && next(2) == 0x2d && next(3) == 0x2d) {
				consume(3);
				return new CDOToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x40) {
			if(wouldStartAnIdentifier(next(1), next(2), next(3))) {
				return new AtKeywordToken(consumeAName());
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x5b) return new OpenSquareToken();
		else if(code == 0x5c) {
			if(startsWithAValidEscape()) {
				reconsume();
				return consumeAnIdentlikeToken();
			} else {
				tokenizeerror();
				return new DelimToken(code);
			}
		}
		else if(code == 0x5d) return new CloseSquareToken();
		else if(code == 0x5e) {
			if(next() == 0x3d) {
				consume();
				return new PrefixMatchToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x7b) return new OpenCurlyToken();
		else if(code == 0x7c) {
			if(next() == 0x3d) {
				consume();
				return new DashMatchToken();
			} else if(next() == 0x7c) {
				consume();
				return new ColumnToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(code == 0x7d) return new CloseCurlyToken();
		else if(code == 0x7e) {
			if(next() == 0x3d) {
				consume();
				return new IncludeMatchToken();
			} else {
				return new DelimToken(code);
			}
		}
		else if(digit(code)) {
			reconsume();
			return consumeANumericToken();
		}
		else if(namestartchar(code)) {
			reconsume();
			return consumeAnIdentlikeToken();
		}
		else if(eof()) return new EOFToken();
		else return new DelimToken(code);
	};

	var consumeComments = function() {
		while(next(1) == 0x2f && next(2) == 0x2a) {
			consume(2);
			while(true) {
				consume();
				if(code == 0x2a && next() == 0x2f) {
					consume();
					break;
				} else if(eof()) {
					tokenizeerror();
					return;
				}
			}
		}
	};

	var consumeANumericToken = function() {
		var num = consumeANumber();
		if(wouldStartAnIdentifier(next(1), next(2), next(3))) {
			var token = new DimensionToken();
			token.value = num.value;
			token.repr = num.repr;
			token.type = num.type;
			token.unit = consumeAName();
			return token;
		} else if(next() == 0x25) {
			consume();
			var token = new PercentageToken();
			token.value = num.value;
			token.repr = num.repr;
			return token;
		} else {
			var token = new NumberToken();
			token.value = num.value;
			token.repr = num.repr;
			token.type = num.type;
			return token;
		}
	};

	var consumeAnIdentlikeToken = function() {
		var str = consumeAName();
		if(str.toLowerCase() == "url" && next() == 0x28) {
			consume();
			while(whitespace(next(1)) && whitespace(next(2))) consume();
			if(next() == 0x22 || next() == 0x27) {
				return new FunctionToken(str);
			} else if(whitespace(next()) && (next(2) == 0x22 || next(2) == 0x27)) {
				return new FunctionToken(str);
			} else {
				return consumeAURLToken();
			}
		} else if(next() == 0x28) {
			consume();
			return new FunctionToken(str);
		} else {
			return new IdentifierToken(str);
		}
	};

	var consumeAStringToken = function(endingCodePoint) {
		if(endingCodePoint === undefined) endingCodePoint = code;
		var string = "";
		while(consume()) {
			if(code == endingCodePoint || eof()) {
				return new StringToken(string);
			} else if(newline(code)) {
				tokenizeerror();
				reconsume();
				return new BadStringToken();
			} else if(code == 0x5c) {
				if(eof(next())) {
					donothing();
				} else if(newline(next())) {
					consume();
				} else {
					string += stringFromCode(consumeEscape())
				}
			} else {
				string += stringFromCode(code);
			}
		}
	};

	var consumeAURLToken = function() {
		var token = new URLToken("");
		while(whitespace(next())) consume();
		if(eof(next())) return token;
		while(consume()) {
			if(code == 0x29 || eof()) {
				return token;
			} else if(whitespace(code)) {
				while(whitespace(next())) consume();
				if(next() == 0x29 || eof(next())) {
					consume();
					return token;
				} else {
					consumeTheRemnantsOfABadURL();
					return new BadURLToken();
				}
			} else if(code == 0x22 || code == 0x27 || code == 0x28 || nonprintable(code)) {
				tokenizeerror();
				consumeTheRemnantsOfABadURL();
				return new BadURLToken();
			} else if(code == 0x5c) {
				if(startsWithAValidEscape()) {
					token.value += stringFromCode(consumeEscape());
				} else {
					tokenizeerror();
					consumeTheRemnantsOfABadURL();
					return new BadURLToken();
				}
			} else {
				token.value += stringFromCode(code);
			}
		}
	};

	var consumeEscape = function() {
		// Assume the the current character is the \
		// and the next code point is not a newline.
		consume();
		if(hexdigit(code)) {
			// Consume 1-6 hex digits
			var digits = [code];
			for(var total = 0; total < 5; total++) {
				if(hexdigit(next())) {
					consume();
					digits.push(code);
				} else {
					break;
				}
			}
			if(whitespace(next())) consume();
			var value = parseInt(digits.map(function(x){return String.fromCharCode(x);}).join(''), 16);
			if( value > maximumallowedcodepoint ) value = 0xfffd;
			return value;
		} else if(eof()) {
			return 0xfffd;
		} else {
			return code;
		}
	};

	var areAValidEscape = function(c1, c2) {
		if(c1 != 0x5c) return false;
		if(newline(c2)) return false;
		return true;
	};
	var startsWithAValidEscape = function() {
		return areAValidEscape(code, next());
	};

	var wouldStartAnIdentifier = function(c1, c2, c3) {
		if(c1 == 0x2d) {
			return namestartchar(c2) || c2 == 0x2d || areAValidEscape(c2, c3);
		} else if(namestartchar(c1)) {
			return true;
		} else if(c1 == 0x5c) {
			return areAValidEscape(c1, c2);
		} else {
			return false;
		}
	};
	var startsWithAnIdentifier = function() {
		return wouldStartAnIdentifier(code, next(1), next(2));
	};

	var wouldStartANumber = function(c1, c2, c3) {
		if(c1 == 0x2b || c1 == 0x2d) {
			if(digit(c2)) return true;
			if(c2 == 0x2e && digit(c3)) return true;
			return false;
		} else if(c1 == 0x2e) {
			if(digit(c2)) return true;
			return false;
		} else if(digit(c1)) {
			return true;
		} else {
			return false;
		}
	};
	var startsWithANumber = function() {
		return wouldStartANumber(code, next(1), next(2));
	};

	var consumeAName = function() {
		var result = "";
		while(consume()) {
			if(namechar(code)) {
				result += stringFromCode(code);
			} else if(startsWithAValidEscape()) {
				result += stringFromCode(consumeEscape());
			} else {
				reconsume();
				return result;
			}
		}
	};

	var consumeANumber = function() {
		var repr = '';
		var type = "integer";
		if(next() == 0x2b || next() == 0x2d) {
			consume();
			repr += stringFromCode(code);
		}
		while(digit(next())) {
			consume();
			repr += stringFromCode(code);
		}
		if(next(1) == 0x2e && digit(next(2))) {
			consume();
			repr += stringFromCode(code);
			consume();
			repr += stringFromCode(code);
			type = "number";
			while(digit(next())) {
				consume();
				repr += stringFromCode(code);
			}
		}
		var c1 = next(1), c2 = next(2), c3 = next(3);
		if((c1 == 0x45 || c1 == 0x65) && digit(c2)) {
			consume();
			repr += stringFromCode(code);
			consume();
			repr += stringFromCode(code);
			type = "number";
			while(digit(next())) {
				consume();
				repr += stringFromCode(code);
			}
		} else if((c1 == 0x45 || c1 == 0x65) && (c2 == 0x2b || c2 == 0x2d) && digit(c3)) {
			consume();
			repr += stringFromCode(code);
			consume();
			repr += stringFromCode(code);
			consume();
			repr += stringFromCode(code);
			type = "number";
			while(digit(next())) {
				consume();
				repr += stringFromCode(code);
			}
		}
		var value = convertAStringToANumber(repr);
		return {type:type, value:value, repr:repr};
	};

	var convertAStringToANumber = function(string) {
		// CSS's number rules are identical to JS, afaik.
		return +string;
	};

	var consumeTheRemnantsOfABadURL = function() {
		while(consume()) {
			if(code == 0x2d || eof()) {
				return;
			} else if(startsWithAValidEscape()) {
				consumeEscape();
				donothing();
			} else {
				donothing();
			}
		}
	};



	var iterationCount = 0;
	while(!eof(next())) {
		tokens.push(consumeAToken());
		if(iterationCount++ > str.length*2) throw new Error("The CSS Tokenizer is infinite-looping");
	}
	return tokens;
}

function CSSParserToken() { return this; }
CSSParserToken.prototype.toJSON = function() {
	return {token: this.tokenType};
}
CSSParserToken.prototype.toString = function() { return this.tokenType; }
CSSParserToken.prototype.toCSSString = function() { return ''+this; }

function BadStringToken() { return this; }
BadStringToken.prototype = new CSSParserToken;
BadStringToken.prototype.tokenType = "BADSTRING";
BadStringToken.prototype.toCSSString = function() { return "'"; }

function BadURLToken() { return this; }
BadURLToken.prototype = new CSSParserToken;
BadURLToken.prototype.tokenType = "BADURL";
BadURLToken.prototype.toCSSString = function() { return "url("; }

function WhitespaceToken() { return this; }
WhitespaceToken.prototype = new CSSParserToken;
WhitespaceToken.prototype.tokenType = "WHITESPACE";
WhitespaceToken.prototype.toString = function() { return "WS"; }
WhitespaceToken.prototype.toCSSString = function() { return " "; }

function CDOToken() { return this; }
CDOToken.prototype = new CSSParserToken;
CDOToken.prototype.tokenType = "CDO";
CDOToken.prototype.toCSSString = function() { return "<!--"; }

function CDCToken() { return this; }
CDCToken.prototype = new CSSParserToken;
CDCToken.prototype.tokenType = "CDC";
CDCToken.prototype.toCSSString = function() { return "-->"; }

function ColonToken() { return this; }
ColonToken.prototype = new CSSParserToken;
ColonToken.prototype.tokenType = ":";

function SemicolonToken() { return this; }
SemicolonToken.prototype = new CSSParserToken;
SemicolonToken.prototype.tokenType = ";";

function CommaToken() { return this; }
CommaToken.prototype = new CSSParserToken;
CommaToken.prototype.tokenType = ",";
CommaToken.prototype.value = ";"; // backwards-compat with DELIM token

function GroupingToken() { return this; }
GroupingToken.prototype = new CSSParserToken;

function OpenCurlyToken() { this.value = "{"; this.mirror = "}"; return this; }
OpenCurlyToken.prototype = new GroupingToken;
OpenCurlyToken.prototype.tokenType = "{";

function CloseCurlyToken() { this.value = "}"; this.mirror = "{"; return this; }
CloseCurlyToken.prototype = new GroupingToken;
CloseCurlyToken.prototype.tokenType = "}";

function OpenSquareToken() { this.value = "["; this.mirror = "]"; return this; }
OpenSquareToken.prototype = new GroupingToken;
OpenSquareToken.prototype.tokenType = "[";

function CloseSquareToken() { this.value = "]"; this.mirror = "["; return this; }
CloseSquareToken.prototype = new GroupingToken;
CloseSquareToken.prototype.tokenType = "]";

function OpenParenToken() { this.value = "("; this.mirror = ")"; return this; }
OpenParenToken.prototype = new GroupingToken;
OpenParenToken.prototype.tokenType = "(";

function CloseParenToken() { this.value = ")"; this.mirror = "("; return this; }
CloseParenToken.prototype = new GroupingToken;
CloseParenToken.prototype.tokenType = ")";

function IncludeMatchToken() { return this; }
IncludeMatchToken.prototype = new CSSParserToken;
IncludeMatchToken.prototype.tokenType = "~=";

function DashMatchToken() { return this; }
DashMatchToken.prototype = new CSSParserToken;
DashMatchToken.prototype.tokenType = "|=";

function PrefixMatchToken() { return this; }
PrefixMatchToken.prototype = new CSSParserToken;
PrefixMatchToken.prototype.tokenType = "^=";

function SuffixMatchToken() { return this; }
SuffixMatchToken.prototype = new CSSParserToken;
SuffixMatchToken.prototype.tokenType = "$=";

function SubstringMatchToken() { return this; }
SubstringMatchToken.prototype = new CSSParserToken;
SubstringMatchToken.prototype.tokenType = "*=";

function ColumnToken() { return this; }
ColumnToken.prototype = new CSSParserToken;
ColumnToken.prototype.tokenType = "||";

function EOFToken() { return this; }
EOFToken.prototype = new CSSParserToken;
EOFToken.prototype.tokenType = "EOF";
EOFToken.prototype.toCSSString = function() { return ""; }

function DelimToken(code) {
	this.value = stringFromCode(code);
	return this;
}
DelimToken.prototype = new CSSParserToken;
DelimToken.prototype.tokenType = "DELIM";
DelimToken.prototype.toString = function() { return "DELIM("+this.value+")"; }
DelimToken.prototype.toCSSString = function() {
	return (this.value == "\\") ? "\\\n" : this.value;
}

function StringValuedToken() { return this; }
StringValuedToken.prototype = new CSSParserToken;
StringValuedToken.prototype.ASCIIMatch = function(str) {
	return this.value.toLowerCase() == str.toLowerCase();
}

function IdentifierToken(val) {
	this.value = val;
}
IdentifierToken.prototype = new StringValuedToken;
IdentifierToken.prototype.tokenType = "IDENT";
IdentifierToken.prototype.toString = function() { return "IDENT("+this.value+")"; }
IdentifierToken.prototype.toCSSString = function() {
	return escapeIdent(this.value);
}

function FunctionToken(val) {
	this.value = val;
	this.mirror = ")";
}
FunctionToken.prototype = new StringValuedToken;
FunctionToken.prototype.tokenType = "FUNCTION";
FunctionToken.prototype.toString = function() { return "FUNCTION("+this.value+")"; }
FunctionToken.prototype.toCSSString = function() {
	return escapeIdent(this.value) + "(";
}
	
function AtKeywordToken(val) {
	this.value = val;
}
AtKeywordToken.prototype = new StringValuedToken;
AtKeywordToken.prototype.tokenType = "AT-KEYWORD";
AtKeywordToken.prototype.toString = function() { return "AT("+this.value+")"; }
AtKeywordToken.prototype.toCSSString = function() {
	return "@" + escapeIdent(this.value);
}

function HashToken(val) {
	this.value = val;
	this.type = "unrestricted";
}
HashToken.prototype = new StringValuedToken;
HashToken.prototype.tokenType = "HASH";
HashToken.prototype.toString = function() { return "HASH("+this.value+")"; }
HashToken.prototype.toCSSString = function() {
	var escapeValue = (this.type == "id") ? escapeIdent : escapeHash;
	return "#" + escapeValue(this.value);
}

function StringToken(val) {
this.value = val;
}
StringToken.prototype = new StringValuedToken;
StringToken.prototype.tokenType = "STRING";
StringToken.prototype.toString = function() {
	return '"' + escapeString(this.value) + '"';
}

function URLToken(val) {
	this.value = val;
}
URLToken.prototype = new StringValuedToken;
URLToken.prototype.tokenType = "URL";
URLToken.prototype.toString = function() { return "URL("+this.value+")"; }
URLToken.prototype.toCSSString = function() {
	return 'url("' + escapeString(this.value) + '")';
}

function NumberToken() {
	this.value = null;
	this.type = "integer";
	this.repr = "";
}
NumberToken.prototype = new CSSParserToken;
NumberToken.prototype.tokenType = "NUMBER";
NumberToken.prototype.toString = function() {
	if(this.type == "integer")
		return "INT("+this.value+")";
	return "NUMBER("+this.value+")";
}
NumberToken.prototype.toJSON = function() {
	var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
	json.value = this.value;
	json.type = this.type;
	json.repr = this.repr;
	return json;
}
NumberToken.prototype.toCSSString = function() { return this.repr; };

function PercentageToken() {
	this.value = null;
	this.repr = "";
}
PercentageToken.prototype = new CSSParserToken;
PercentageToken.prototype.tokenType = "PERCENTAGE";
PercentageToken.prototype.toString = function() { return "PERCENTAGE("+this.value+")"; }
PercentageToken.prototype.toCSSString = function() { return this.repr + "%"; }

function DimensionToken() {
	this.value = null;
	this.type = "integer";
	this.repr = "";
	this.unit = "";
}
DimensionToken.prototype = new CSSParserToken;
DimensionToken.prototype.tokenType = "DIMENSION";
DimensionToken.prototype.toString = function() { return "DIM("+this.value+","+this.unit+")"; }
DimensionToken.prototype.toCSSString = function() {
	var source = this.repr;
	var unit = escapeIdent(this.unit);
	if(unit[0].toLowerCase() == "e" && (unit[1] == "-" || between(unit.charCodeAt(1), 0x30, 0x39))) {
		// Unit is ambiguous with scinot
		// Remove the leading "e", replace with escape.
		unit = "\\65 " + unit.slice(1, unit.length);
	}
	return source+unit;
}

function escapeIdent(string) {
	string = ''+string;
	var result = '';
	var firstcode = string.charCodeAt(0);
	for(var i = 0; i < string.length; i++) {
		var code = string.charCodeAt(i);
		if(code == 0x0) {
			throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
		}

		if(
			between(code, 0x1, 0x1f) || code == 0x7f ||
			(i == 0 && between(code, 0x30, 0x39)) ||
			(i == 1 && between(code, 0x30, 0x39) && firstcode == 0x2d)
		) {
			result += '\\' + code.toString(16) + ' ';
		} else if(
			code >= 0x80 ||
			code == 0x2d ||
			code == 0x5f ||
			between(code, 0x30, 0x39) ||
			between(code, 0x41, 0x5a) ||
			between(code, 0x61, 0x7a)
		) {
			result += string[i];
		} else {
			result += '\\' + string[i];
		}
	}
	return result;
}

function escapeHash(string) {
	// Escapes the contents of "unrestricted"-type hash tokens.
	// Won't preserve the ID-ness of "id"-type hash tokens;
	// use escapeIdent() for that.
	string = ''+string;
	var result = '';
	var firstcode = string.charCodeAt(0);
	for(var i = 0; i < string.length; i++) {
		var code = string.charCodeAt(i);
		if(code == 0x0) {
			throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
		}

		if(
			code >= 0x80 ||
			code == 0x2d ||
			code == 0x5f ||
			between(code, 0x30, 0x39) ||
			between(code, 0x41, 0x5a) ||
			between(code, 0x61, 0x7a)
		) {
			result += string[i];
		} else {
			result += '\\' + code.toString(16) + ' ';
		}
	}
	return result;
}

function escapeString(string) {
	string = ''+string;
	var result = '';
	for(var i = 0; i < string.length; i++) {
		var code = string.charCodeAt(i);

		if(code == 0x0) {
			throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
		}

		if(between(code, 0x1, 0x1f) || code == 0x7f) {
			result += '\\' + code.toString(16) + ' ';
		} else if(code == 0x22 || code == 0x5c) {
			result += '\\' + string[i];
		} else {
			result += string[i];
		}
	}
	return result;
}

// Exportation.
cssSyntax.tokenize = tokenize;
cssSyntax.IdentToken = IdentifierToken;
cssSyntax.IdentifierToken = IdentifierToken;
cssSyntax.FunctionToken = FunctionToken;
cssSyntax.AtKeywordToken = AtKeywordToken;
cssSyntax.HashToken = HashToken;
cssSyntax.StringToken = StringToken;
cssSyntax.BadStringToken = BadStringToken;
cssSyntax.URLToken = URLToken;
cssSyntax.BadURLToken = BadURLToken;
cssSyntax.DelimToken = DelimToken;
cssSyntax.NumberToken = NumberToken;
cssSyntax.PercentageToken = PercentageToken;
cssSyntax.DimensionToken = DimensionToken;
cssSyntax.IncludeMatchToken = IncludeMatchToken;
cssSyntax.DashMatchToken = DashMatchToken;
cssSyntax.PrefixMatchToken = PrefixMatchToken;
cssSyntax.SuffixMatchToken = SuffixMatchToken;
cssSyntax.SubstringMatchToken = SubstringMatchToken;
cssSyntax.ColumnToken = ColumnToken;
cssSyntax.WhitespaceToken = WhitespaceToken;
cssSyntax.CDOToken = CDOToken;
cssSyntax.CDCToken = CDCToken;
cssSyntax.ColonToken = ColonToken;
cssSyntax.SemicolonToken = SemicolonToken;
cssSyntax.CommaToken = CommaToken;
cssSyntax.OpenParenToken = OpenParenToken;
cssSyntax.CloseParenToken = CloseParenToken;
cssSyntax.OpenSquareToken = OpenSquareToken;
cssSyntax.CloseSquareToken = CloseSquareToken;
cssSyntax.OpenCurlyToken = OpenCurlyToken;
cssSyntax.CloseCurlyToken = CloseCurlyToken;
cssSyntax.EOFToken = EOFToken;
cssSyntax.CSSParserToken = CSSParserToken;
cssSyntax.GroupingToken = GroupingToken;

//
// css parser
//

function TokenStream(tokens) {
	// Assume that tokens is an array.
	this.tokens = tokens;
	this.i = -1;
}
TokenStream.prototype.tokenAt = function(i) {
	if(i < this.tokens.length)
		return this.tokens[i];
	return new EOFToken();
}
TokenStream.prototype.consume = function(num) {
	if(num === undefined) num = 1;
	this.i += num;
	this.token = this.tokenAt(this.i);
	//console.log(this.i, this.token);
	return true;
}
TokenStream.prototype.next = function() {
	return this.tokenAt(this.i+1);
}
TokenStream.prototype.reconsume = function() {
	this.i--;
}

function parseerror(s, msg) {
	console.log("Parse error at token " + s.i + ": " + s.token + ".\n" + msg);
	return true;
}
function donothing(){ return true; };

function consumeAListOfRules(s, topLevel) {
	var rules = new TokenList();
	var rule;
	while(s.consume()) {
		if(s.token instanceof WhitespaceToken) {
			continue;
		} else if(s.token instanceof EOFToken) {
			return rules;
		} else if(s.token instanceof CDOToken || s.token instanceof CDCToken) {
			if(topLevel == "top-level") continue;
			s.reconsume();
			if(rule = consumeAStyleRule(s)) rules.push(rule);
		} else if(s.token instanceof AtKeywordToken) {
			s.reconsume();
			if(rule = consumeAnAtRule(s)) rules.push(rule);
		} else {
			s.reconsume();
			if(rule = consumeAStyleRule(s)) rules.push(rule);
		}
	}
}

function consumeAnAtRule(s) {
	s.consume();
	var rule = new AtRule(s.token.value);
	while(s.consume()) {
		if(s.token instanceof SemicolonToken || s.token instanceof EOFToken) {
			return rule;
		} else if(s.token instanceof OpenCurlyToken) {
			rule.value = consumeASimpleBlock(s);
			return rule;
		} else if(s.token instanceof SimpleBlock && s.token.name == "{") {
			rule.value = s.token;
			return rule;
		} else {
			s.reconsume();
			rule.prelude.push(consumeAComponentValue(s));
		}
	}
}

function consumeAStyleRule(s) {
	var rule = new StyleRule();
	while(s.consume()) {
		if(s.token instanceof EOFToken) {
			parseerror(s, "Hit EOF when trying to parse the prelude of a qualified rule.");
			return;
		} else if(s.token instanceof OpenCurlyToken) {
			rule.value = consumeASimpleBlock(s);
			return rule;
		} else if(s.token instanceof SimpleBlock && s.token.name == "{") {
			rule.value = s.token;
			return rule;
		} else {
			s.reconsume();
			rule.prelude.push(consumeAComponentValue(s));
		}
	}
}

function consumeAListOfDeclarations(s) {
	var decls = new TokenList();
	while(s.consume()) {
		if(s.token instanceof WhitespaceToken || s.token instanceof SemicolonToken) {
			donothing();
		} else if(s.token instanceof EOFToken) {
			return decls;
		} else if(s.token instanceof AtKeywordToken) {
			s.reconsume();
			decls.push(consumeAnAtRule(s));
		} else if(s.token instanceof IdentifierToken) {
			var temp = [s.token];
			while(!(s.next() instanceof SemicolonToken || s.next() instanceof EOFToken))
				temp.push(consumeAComponentValue(s));
			var decl;
			if(decl = consumeADeclaration(new TokenStream(temp))) decls.push(decl);
		} else {
			parseerror(s);
			s.reconsume();
			while(!(s.next() instanceof SemicolonToken || s.next() instanceof EOFToken))
				consumeAComponentValue(s);
		}
	}
}

function consumeADeclaration(s) {
	// Assumes that the next input token will be an ident token.
	s.consume();
	var decl = new Declaration(s.token.value);
	while(s.next() instanceof WhitespaceToken) s.consume();
	if(!(s.next() instanceof ColonToken)) {
		parseerror(s);
		return;
	} else {
		s.consume();
	}
	while(!(s.next() instanceof EOFToken)) {
		decl.value.push(consumeAComponentValue(s));
	}
	var foundImportant = false;
	for(var i = decl.value.length - 1; i >= 0; i--) {
		if(decl.value[i] instanceof WhitespaceToken) {
			continue;
		} else if(decl.value[i] instanceof IdentifierToken && decl.value[i].ASCIIMatch("important")) {
			foundImportant = true;
		} else if(foundImportant && decl.value[i] instanceof DelimToken && decl.value[i].value == "!") {
			decl.value.splice(i, decl.value.length);
			decl.important = true;
			break;
		} else {
			break;
		}
	}
	return decl;
}

function consumeAComponentValue(s) {
	s.consume();
	if(s.token instanceof OpenCurlyToken || s.token instanceof OpenSquareToken || s.token instanceof OpenParenToken)
		return consumeASimpleBlock(s);
	if(s.token instanceof FunctionToken)
		return consumeAFunction(s);
	return s.token;
}

function consumeASimpleBlock(s) {
	var mirror = s.token.mirror;
	var block = new SimpleBlock(s.token.value);
	while(s.consume()) {
		if(s.token instanceof EOFToken || (s.token instanceof GroupingToken && s.token.value == mirror))
			return block;
		else {
			s.reconsume();
			block.value.push(consumeAComponentValue(s));
		}
	}
}

function consumeAFunction(s) {
	var func = new Func(s.token.value);
	while(s.consume()) {
		if(s.token instanceof EOFToken || s.token instanceof CloseParenToken)
			return func;
		else {
			s.reconsume();
			func.value.push(consumeAComponentValue(s));
		}
	}
}

function normalizeInput(input) {
	if(typeof input == "string")
		return new TokenStream(tokenize(input));
	if(input instanceof TokenStream)
		return input;
	if(input.length !== undefined)
		return new TokenStream(input);
	else throw SyntaxError(input);
}

function parseAStylesheet(s) {
	s = normalizeInput(s);
	var sheet = new Stylesheet();
	sheet.value = consumeAListOfRules(s, "top-level");
	return sheet;
}

function parseAListOfRules(s) {
	s = normalizeInput(s);
	return consumeAListOfRules(s);
}

function parseARule(s) {
	s = normalizeInput(s);
	while(s.next() instanceof WhitespaceToken) s.consume();
	if(s.next() instanceof EOFToken) throw SyntaxError();
	if(s.next() instanceof AtKeywordToken) {
		var rule = consumeAnAtRule(s);
	} else {
		var rule = consumeAStyleRule(s);
		if(!rule) throw SyntaxError();
	}
	while(s.next() instanceof WhitespaceToken) s.consume();
	if(s.next() instanceof EOFToken)
		return rule;
	throw SyntaxError();
}

function parseADeclaration(s) {
	s = normalizeInput(s);
	while(s.next() instanceof WhitespaceToken) s.consume();
	if(!(s.next() instanceof IdentifierToken)) throw SyntaxError();
	var decl = consumeADeclaration(s);
	if(!decl) { throw new SyntaxError() }
	return decl;
}

function parseAListOfDeclarations(s) {
	s = normalizeInput(s);
	return consumeAListOfDeclarations(s);
}

function parseAComponentValue(s) {
	s = normalizeInput(s);
	while(s.next() instanceof WhitespaceToken) s.consume();
	if(s.next() instanceof EOFToken) throw SyntaxError();
	var val = consumeAComponentValue(s);
	if(!val) throw SyntaxError();
	while(s.next() instanceof WhitespaceToken) s.consume();
	if(!(s.next() instanceof EOFToken)) throw new SyntaxError();
	return val;
}

function parseAListOfComponentValues(s) {
	s = normalizeInput(s);
	var vals = new TokenList();
	while(true) {
		var val = consumeAComponentValue(s);
		if(val instanceof EOFToken)
			return vals
		else
			vals.push(val);
	}
}

function parseACommaSeparatedListOfComponentValues(s) {
	s = normalizeInput(s);
	var listOfCVLs = new TokenList();
	while(true) {
		var vals = new TokenList();
		while(true) {
			var val = consumeAComponentValue(s);
			if(val instanceof EOFToken) {
				listOfCVLs.push(vals);
				return listOfCVLs;
			} else if(val instanceof CommaToken) {
				listOfCVLs.push(vals);
				break;
			} else {
				vals.push(val);
			}
		}
	}
}

function CSSParserRule() { return this; }
CSSParserRule.prototype.toString = function(indent) {
	return JSON.stringify(this,null,indent);
}

function Stylesheet() {
	this.value = new TokenList();
	return this;
}
Stylesheet.prototype = new CSSParserRule;
Stylesheet.prototype.type = "STYLESHEET";
Stylesheet.prototype.toCSSString = function() { return this.value.toCSSString("\n"); }

function AtRule(name) {
	this.name = name;
	this.prelude = new TokenList();
	this.value = null;
	return this;
}
AtRule.prototype = new CSSParserRule;
AtRule.prototype.toCSSString = function() { 
	if(this.value) {
		return "@" + escapeIdent(this.name) + " " + this.prelude.toCSSString() + this.value.toCSSString(); 
	} else {
		return "@" + escapeIdent(this.name) + " " + this.prelude.toCSSString() + '; '; 
	}
}
AtRule.prototype.toStylesheet = function() {
	return this.asStylesheet || (this.asStylesheet = this.value ? parseAStylesheet(this.value.value) : new Stylesheet());
}

function StyleRule() {
	this.prelude = new TokenList(); this.selector = this.prelude;
	this.value = null;
	return this;
}
StyleRule.prototype = new CSSParserRule;
StyleRule.prototype.type = "STYLE-RULE";
StyleRule.prototype.toCSSString = function() {
	return this.prelude.toCSSString() + this.value.toCSSString();
}
StyleRule.prototype.getSelector = function() {
	return this.prelude;
}
StyleRule.prototype.getDeclarations = function() {
	if(!(this.value instanceof SimpleBlock)) { return new TokenList(); }
	var value = this.value.value; return parseAListOfDeclarations(value);
}


function Declaration(name) {
	this.name = name;
	this.value = new TokenList();
	this.important = false;
	return this;
}
Declaration.prototype = new CSSParserRule;
Declaration.prototype.type = "DECLARATION";
Declaration.prototype.toCSSString = function() {
	return this.name + ':' + this.value.toCSSString() + '; ';
}

function SimpleBlock(type) {
	this.name = type;
	this.value = new TokenList();
	return this;
}
SimpleBlock.prototype = new CSSParserRule;
SimpleBlock.prototype.type = "BLOCK";
SimpleBlock.prototype.toCSSString = function() {
	switch(this.name) {
		case "(":
			return "(" + this.value.toCSSString() + ")";
			
		case "[":
			return "[" + this.value.toCSSString() + "]";
			
		case "{":
			return "{" + this.value.toCSSString() + "}";
		
		default: //best guess
			return this.name + this.value.toCSSString() + this.name;
	}
}

function Func(name) {
	this.name = name;
	this.value = new TokenList();
	return this;
}
Func.prototype = new CSSParserRule;
Func.prototype.type = "FUNCTION";
Func.prototype.toCSSString = function() {
	return this.name+'('+this.value.toCSSString()+')';
}
Func.prototype.getArguments = function() {
	var args = new TokenList(); var arg = new TokenList(); var value = this.value;
	for(var i = 0; i<value.length; i++) {
		if(value[i].tokenType == ',') {
			args.push(arg); arg = new TokenList();
		} else {
			arg.push(value[i])
		}
	}
	if(args.length > 0 || arg.length > 0) { args.push(arg); }
	return args;
}

function FuncArg() {
	this.value = new TokenList();
	return this;
}
FuncArg.prototype = new CSSParserRule;
FuncArg.prototype.type = "FUNCTION-ARG";
FuncArg.prototype.toCSSString = function() {
	return this.value.toCSSString()+', ';
}

// Exportation.
cssSyntax.CSSParserRule = CSSParserRule;
cssSyntax.Stylesheet = Stylesheet;
cssSyntax.AtRule = AtRule;
cssSyntax.StyleRule = StyleRule;
cssSyntax.Declaration = Declaration;
cssSyntax.SimpleBlock = SimpleBlock;
cssSyntax.Func = Func;
cssSyntax.parseAStylesheet = parseAStylesheet;
cssSyntax.parseAListOfRules = parseAListOfRules;
cssSyntax.parseARule = parseARule;
cssSyntax.parseADeclaration = parseADeclaration;
cssSyntax.parseAListOfDeclarations = parseAListOfDeclarations;
cssSyntax.parseAComponentValue = parseAComponentValue;
cssSyntax.parseAListOfComponentValues = parseAListOfComponentValues;
cssSyntax.parseACommaSeparatedListOfComponentValues = parseACommaSeparatedListOfComponentValues;
cssSyntax.parse = parseAStylesheet;
cssSyntax.parseCSSValue = parseAListOfComponentValues;

return cssSyntax;

}());

require.define('src/core/css-syntax.js');

////////////////////////////////////////

module.exports = (function(window, document) { "use strict";

	require('src/core/polyfill-dom-console.js');

	//
	// some other basic om code
	//
	var domEvents = {
		
		//
		// the following functions are about event cloning
		//
		cloneMouseEvent: function cloneMouseEvent(e) {
			var evt = document.createEvent("MouseEvent");
			evt.initMouseEvent( 
				e.type, 
				e.canBubble||e.bubbles, 
				e.cancelable, 
				e.view, 
				e.detail, 
				e.screenX, 
				e.screenY, 
				e.clientX, 
				e.clientY, 
				e.ctrlKey, 
				e.altKey, 
				e.shiftKey, 
				e.metaKey, 
				e.button, 
				e.relatedTarget
			);
			return evt;
		},
		
		cloneKeyboardEvent: function cloneKeyboardEvent(e) {
			// TODO: this doesn't work cross-browser...
			// see https://gist.github.com/termi/4654819/ for the huge code
			return domEvents.cloneCustomEvent(e);
		},
		
		cloneCustomEvent: function cloneCustomEvent(e) {
			var ne = document.createEvent("CustomEvent");
			ne.initCustomEvent(e.type, e.canBubble||e.bubbles, e.cancelable, "detail" in e ? e.detail : e);
			for(var prop in e) {
				try {
					if(e[prop] != ne[prop] && e[prop] != e.target) {
						try { ne[prop] = e[prop]; }
						catch (ex) { Object.defineProperty(ne,prop,{get:function() { return e[prop]} }) }
					}
				} catch(ex) {}
			}
			return ne;
		},
		
		cloneEvent: function cloneEvent(e) {
			
			if(e instanceof MouseEvent) {
				return domEvents.cloneMouseEvent(e);
			} else if(e instanceof KeyboardEvent) {
				return domEvents.cloneKeyboardEvent(e);
			} else {
				return domEvents.cloneCustomEvent(e);
			}
			
		},
		
		//
		// allows you to drop event support to any class easily
		//
		EventTarget: {
			implementsIn: function(eventClass, static_class) {
				
				if(!static_class && typeof(eventClass)=="function") eventClass=eventClass.prototype;
				
				eventClass.dispatchEvent = domEvents.EventTarget.prototype.dispatchEvent;
				eventClass.addEventListener = domEvents.EventTarget.prototype.addEventListener;
				eventClass.removeEventListener = domEvents.EventTarget.prototype.removeEventListener;
				
			},
			prototype: {}
		}
		
	};

	domEvents.EventTarget.prototype.addEventListener = function(eventType,f) {
		if(!this.eventListeners) this.eventListeners=[];
		
		var ls = (this.eventListeners[eventType] || (this.eventListeners[eventType]=[]));
		if(ls.indexOf(f)==-1) {
			ls.push(f);
		}
		
	}

	domEvents.EventTarget.prototype.removeEventListener = function(eventType,f) {
		if(!this.eventListeners) this.eventListeners=[];

		var ls = (this.eventListeners[eventType] || (this.eventListeners[eventType]=[])), i;
		if((i=ls.indexOf(f))!==-1) {
			ls.splice(i,1);
		}
		
	}

	domEvents.EventTarget.prototype.dispatchEvent = function(event_or_type) {
		if(!this.eventListeners) this.eventListeners=[];
		
		// abort quickly when no listener has been set up
		if(typeof(event_or_type) == "string") {
			if(!this.eventListeners[event_or_type] || this.eventListeners[event_or_type].length==0) {
				return;
			}
		} else {
			if(!this.eventListeners[event_or_type.type] || this.eventListeners[event_or_type.type].length==0) {
				return;
			}
		}
		
		// convert the event
		var event = event_or_type;
		function setUpPropertyForwarding(e,ee,key) {
			Object.defineProperty(ee,key,{
				get:function() {
					var v = e[key]; 
					if(typeof(v)=="function") {
						return v.bind(e);
					} else {
						return v;
					}
				},
				set:function(v) {
					e[key] = v;
				}
			});
		}
		function setUpTarget(e,v) {
			try { Object.defineProperty(e,"target",{get:function() {return v}}); }
			catch(ex) {}
			finally {
				
				if(e.target !== v) {
					
					var ee = Object.create(Object.getPrototypeOf(e));
					ee = setUpTarget(ee,v);
					for(key in e) {
						if(key != "target") setUpPropertyForwarding(e,ee,key);
					}
					return ee;
					
				} else {
					
					return e;
					
				}
				
			}
		}
		
		// try to set the target
		if(typeof(event)=="object") {
			try { event=setUpTarget(event,this); } catch(ex) {}
			
		} else if(typeof(event)=="string") {
			event = document.createEvent("CustomEvent");
			event.initCustomEvent(event_or_type, /*canBubble:*/ true, /*cancelable:*/ false, /*detail:*/this);
			try { event=setUpTarget(event,this); } catch(ex) {}
			
		} else {
			throw new Error("dispatchEvent expect an Event object or a string containing the event type");
		}
		
		// call all listeners
		var ls = (this.eventListeners[event.type] || (this.eventListeners[event.type]=[]));
		for(var i=ls.length; i--;) {
			try { 
				ls[i](event);
			} catch(ex) {
				setImmediate(function() { throw ex; });
			}
		}
		
		return event.isDefaultPrevented;
	}
	
	return domEvents;
	
})(window, document);
require.define('src/core/dom-events.js');

////////////////////////////////////////

/////////////////////////////////////////////////////////////////
////                                                         ////
////                 prerequirements of qSL                  ////
////                                                         ////
/////////////////////////////////////////////////////////////////
////                                                         ////
////   Please note that I require querySelectorAll to work   ////
////                                                         ////
////   See http://github.com/termi/CSS_selector_engine/      ////
////   for a polyfill for older browsers                     ////
////                                                         ////
/////////////////////////////////////////////////////////////////

// TODO: improve event streams
// - look for a few optimizations ideas in gecko/webkit
// - use arrays in CompositeEventStream to avoid nested debouncings
module.exports = (function(window, document) { "use strict";

	///
	/// event stream implementation
	/// please note this is required to 'live update' the qSA requests
	///
	function EventStream(connect, disconnect, reconnect) {
		var self=this;
		
		// validate arguments
		if(!disconnect) disconnect=function(){};
		if(!reconnect) reconnect=connect;
		
		// high-level states
		var isConnected=false;
		var isDisconnected=false;
		var shouldDisconnect=false;
		
		// global variables
		var callback=null;
		var yieldEvent = function() {
			
			// call the callback function, and pend disposal
			shouldDisconnect=true;
			try { callback && callback(self); } catch(ex) { setImmediate(function() { throw ex; }); }
			
			// if no action was taken, dispose
			if(shouldDisconnect) { dispose(); }
			
		}
		
		// export the interface
		var schedule = this.schedule = function(newCallback) {
		
			// do not allow to schedule on disconnected event streams
			if(isDisconnected) { throw new Error("Cannot schedule on a disconnected event stream"); }
			
			// do not allow to schedule on already scheduled event streams
			if(isConnected && !shouldDisconnect) { throw new Error("Cannot schedule on an already-scheduled event stream"); }
			
			// schedule the new callback
			callback=newCallback; shouldDisconnect=false;
			
			// reconnect to the stream
			if(isConnected) {
				reconnect(yieldEvent);
			} else {
				connect(yieldEvent);
				isConnected=true;
			}
		}
		
		var dispose = this.dispose = function() {
		
			// do not allow to dispose non-connected streams
			if(isConnected) {
			
				// disconnect & save resources
				disconnect(); 
				self=null; yieldEvent=null; callback=null; 
				isConnected=false; isDisconnected=true; shouldDisconnect=false;
				
			}
		}
	}

	///
	/// call a function every frame
	///
	function AnimationFrameEventStream(options) {
		
		// flag that says whether the observer is still needed or not
		var rid = 0;
			
		// start the event stream
		EventStream.call(
			this, 
			function connect(yieldEvent) { rid = requestAnimationFrame(yieldEvent); },
			function disconnect() { cancelAnimationFrame(rid); }
		);
		
	}

	///
	/// call a function every timeout
	///
	function TimeoutEventStream(options) {
		
		// flag that says whether the observer is still needed or not
		var rid = 0; var timeout=(typeof(options)=="number") ? (+options) : ("timeout" in options ? +options.timeout : 333);
			
		// start the event stream
		EventStream.call(
			this, 
			function connect(yieldEvent) { rid = setTimeout(yieldEvent, timeout); },
			function disconnect() { clearTimeout(rid); }
		);
		
	}

	///
	/// call a function every time the mouse moves
	///
	function MouseEventStream() {
		var self=this; var pointermove = (("PointerEvent" in window) ? "pointermove" : (("MSPointerEvent" in window) ? "MSPointerMove" : "mousemove"));

		// flag that says whether the event is still observed or not
		var scheduled = false; var interval=0;
		
		// handle the synchronous nature of mutation events
		var yieldEvent=null;
		var yieldEventDelayed = function() {
			if(scheduled) return;
			window.removeEventListener(pointermove, yieldEventDelayed, true);
			scheduled = requestAnimationFrame(yieldEvent);
		}
		
		// start the event stream
		EventStream.call(
			this, 
			function connect(newYieldEvent) {
				yieldEvent=newYieldEvent;
				window.addEventListener(pointermove, yieldEventDelayed, true);
			},
			function disconnect() { 
				window.removeEventListener(pointermove, yieldEventDelayed, true);
				cancelAnimationFrame(scheduled); yieldEventDelayed=null; yieldEvent=null; scheduled=false;
			},
			function reconnect(newYieldEvent) { 
				yieldEvent=newYieldEvent; scheduled=false;
				window.addEventListener(pointermove, yieldEventDelayed, true);
			}
		);
		
	}

	///
	/// call a function every time the mouse is clicked/unclicked
	///
	function MouseButtonEventStream() {
		var self=this; 
		var pointerup = (("PointerEvent" in window) ? "pointerup" : (("MSPointerEvent" in window) ? "MSPointerUp" : "mouseup"));
		var pointerdown = (("PointerEvent" in window) ? "pointerdown" : (("MSPointerEvent" in window) ? "MSPointerDown" : "mousedown"));

		// flag that says whether the event is still observed or not
		var scheduled = false; var interval=0;
		
		// handle the synchronous nature of mutation events
		var yieldEvent=null;
		var yieldEventDelayed = function() {
			if(scheduled) return;
			window.removeEventListener(pointerup, yieldEventDelayed, true);
			window.removeEventListener(pointerdown, yieldEventDelayed, true);
			scheduled = requestAnimationFrame(yieldEvent);
		}
		
		// start the event stream
		EventStream.call(
			this, 
			function connect(newYieldEvent) {
				yieldEvent=newYieldEvent;
				window.addEventListener(pointerup, yieldEventDelayed, true);
				window.addEventListener(pointerdown, yieldEventDelayed, true);
			},
			function disconnect() { 
				window.removeEventListener(pointerup, yieldEventDelayed, true);
				window.removeEventListener(pointerdown, yieldEventDelayed, true);
				cancelAnimationFrame(scheduled); yieldEventDelayed=null; yieldEvent=null; scheduled=false;
			},
			function reconnect(newYieldEvent) { 
				yieldEvent=newYieldEvent; scheduled=false;
				window.addEventListener(pointerup, yieldEventDelayed, true);
				window.addEventListener(pointerdown, yieldEventDelayed, true);
			}
		);
		
	}

	///
	/// call a function whenever the DOM is modified
	///
	var DOMUpdateEventStream;
	if("MutationObserver" in window) {
		DOMUpdateEventStream = function DOMUpdateEventStream(options) {
			 
			// configuration of the observer
			if(options) {
				var target = "target" in options ? options.target : document.documentElement;
				var config = { 
					subtree: "subtree" in options ? !!options.subtree : true, 
					attributes: "attributes" in options ? !!options.attributes : true, 
					childList: "childList" in options ? !!options.childList : true, 
					characterData: "characterData" in options ? !!options.characterData : false
				};
			} else {
				var target = document.documentElement;
				var config = { 
					subtree: true, 
					attributes: true, 
					childList: true, 
					characterData: false
				};
			}
								
			// start the event stream
			var observer = null;
			EventStream.call(
				this, 
				function connect(yieldEvent) { if(config) { observer=new MutationObserver(yieldEvent); observer.observe(target,config); target=null; config=null; } },
				function disconnect() { observer && observer.disconnect(); observer=null; },
				function reconnect() { observer.takeRecords(); }
			);

		}
	} else if("MutationEvent" in window) {
		DOMUpdateEventStream = function DOMUpdateEventStream(options) {
			var self=this;

			// flag that says whether the event is still observed or not
			var scheduled = false;
			
			// configuration of the observer
			if(options) {
				var target = "target" in options ? options.target : document.documentElement;
			} else {
				var target = document.documentElement;
			}
			
			// handle the synchronous nature of mutation events
			var yieldEvent=null;
			var yieldEventDelayed = function() {
				if(scheduled || !yieldEventDelayed) return;
				document.removeEventListener("DOMContentLoaded", yieldEventDelayed, false);
				document.removeEventListener("DOMContentLoaded", yieldEventDelayed, false);
				target.removeEventListener("DOMSubtreeModified", yieldEventDelayed, false);
				scheduled = requestAnimationFrame(yieldEvent);
			}
			
			// start the event stream
			EventStream.call(
				this, 
				function connect(newYieldEvent) {
					yieldEvent=newYieldEvent;
					document.addEventListener("DOMContentLoaded", yieldEventDelayed, false);
					target.addEventListener("DOMSubtreeModified", yieldEventDelayed, false);
				},
				function disconnect() { 
					document.removeEventListener("DOMContentLoaded", yieldEventDelayed, false);
					target.removeEventListener("DOMSubtreeModified", yieldEventDelayed, false);
					cancelAnimationFrame(scheduled); yieldEventDelayed=null; yieldEvent=null; scheduled=false;
				},
				function reconnect(newYieldEvent) { 
					yieldEvent=newYieldEvent; scheduled=false;
					target.addEventListener("DOMSubtreeModified", yieldEventDelayed, false);
				}
			);
			
		}
	} else {
		DOMUpdateEventStream = AnimationFrameEventStream;
	}

	///
	/// call a function every time the focus shifts
	///
	function FocusEventStream() {
		var self=this;
		
		// handle the filtering nature of focus events
		var yieldEvent=null; var previousActiveElement=null; var previousHasFocus=false; var rid=0;
		var yieldEventDelayed = function() {
			
			// if the focus didn't change
			if(previousActiveElement==document.activeElement && previousHasFocus==document.hasFocus()) {
				
				// then do not generate an event
				setTimeout(yieldEventDelayed, 333); // focus that didn't move is expected to stay
				
			} else {
				
				// else, generate one & save config
				previousActiveElement=document.activeElement;
				previousHasFocus=document.hasFocus();
				yieldEvent();
				
			}
		}
		
		// start the event stream
		EventStream.call(
			this, 
			function connect(newYieldEvent) {
				yieldEvent=newYieldEvent;
				rid=setTimeout(yieldEventDelayed, 500); // let the document load
			},
			function disconnect() { 
				clearTimeout(rid); yieldEventDelayed=null; yieldEvent=null; rid=0;
			},
			function reconnect(newYieldEvent) { 
				yieldEvent=newYieldEvent;
				rid=setTimeout(yieldEventDelayed, 100); // focus by tab navigation moves fast
			}
		);
		
	}

	///
	/// composite event stream
	/// because sometimes you need more than one event source
	///
	function CompositeEventStream(stream1, stream2) {
		var self=this;
		
		// fields
		var yieldEvent=null; var s1=false, s2=false;
		var yieldEventWrapper=function(s) { 
			if(s==stream1) s1=true;
			if(s==stream2) s2=true;
			if(s1&&s2) return;
			yieldEvent(self);
		}
		
		// start the event stream
		EventStream.call(
			this, 
			function connect(newYieldEvent) {
				yieldEvent=newYieldEvent;
				stream1.schedule(yieldEventWrapper);
				stream2.schedule(yieldEventWrapper);
			},
			function disconnect() { 
				stream1.dispose();
				stream2.dispose();
			},
			function reconnect(newYieldEvent) { 
				yieldEvent=newYieldEvent;
				s1 && stream1.schedule(yieldEventWrapper);
				s2 && stream2.schedule(yieldEventWrapper);
				s1 = s2 = false;
			}
		);
	}
	
	return {
		EventStream:                EventStream,
		AnimationFrameEventStream:  AnimationFrameEventStream,
		TimeoutEventStream:         TimeoutEventStream,
		MouseEventStream:           MouseEventStream,
		MouseButtonEventStream:     MouseButtonEventStream,
		DOMUpdateEventStream:       DOMUpdateEventStream,
		FocusEventStream:           FocusEventStream,
		CompositeEventStream:       CompositeEventStream
	};

})(window, document);
require.define('src/core/dom-experimental-event-streams.js');

////////////////////////////////////////

/////////////////////////////////////////////////////////////////
////                                                         ////
////                  Implementation of qSL                  ////
////                                                         ////
/////////////////////////////////////////////////////////////////
////                                                         ////
////   Please note that I require querySelectorAll to work   ////
////                                                         ////
////   See http://github.com/termi/CSS_selector_engine/      ////
////   for a polyfill for older browsers                     ////
////                                                         ////
/////////////////////////////////////////////////////////////////

module.exports = (function(window, document) { "use strict";

	// import dependencies
	var eventStreams = require('src/core/dom-experimental-event-streams.js'),
	    DOMUpdateEventStream = eventStreams.DOMUpdateEventStream,
		AnimationFrameEventStream = eventStreams.AnimationFrameEventStream,
		CompositeEventStream = eventStreams.CompositeEventStream,
		FocusEventStream = eventStreams.FocusEventStream,
		MouseButtonEventStream = eventStreams.MouseButtonEventStream,
		TimeoutEventStream = eventStreams.TimeoutEventStream,
		MouseEventStream = eventStreams.MouseEventStream;

	///
	/// the live querySelectorAll implementation
	///
	function querySelectorLive(selector, handler, root) {
		
		// restrict the selector coverage to some part of the DOM only
		var root = root || document;
		
		// TODO: make use of "mutatedAncestorElement" to update only elements inside the mutated zone
		
		var currentElms = [];
		var loop = function loop(eventStream) {
			
			// schedule next run
			eventStream.schedule(loop);
			
			// update elements matching the selector
			var newElms = [];
			var oldElms = currentElms.slice(0);
			var temps = root.querySelectorAll(selector);
			for(var i=newElms.length=temps.length; i;) { newElms.push(temps[--i]); }
			currentElms = newElms.slice(0); temps=null;
			
			// first let's clear all elements that have been removed from the document
			oldElms = oldElms.filter(function(e) {
				
				// check whether the current element is still there
				var isStillInDocument = (
					e===document.documentElement 
					|| document.documentElement.contains(e)
				);
				
				if(isStillInDocument) {
					
					// NEED_COMPARE: we will compare this element to the new list
					return true;
					
				} else {
					
					// DELETE: raise onremoved, pop old elements
					try { handler.onremoved && handler.onremoved(e); } catch(ex) { setImmediate(function() {throw ex})}
					return false;
					
				}
				
			});
			
			// now pop and match until both lists are exhausted
			// (we use the fact the returned elements are in document order)
			var el1 = oldElms.pop();
			var el2 = newElms.pop();
			while(el1 || el2) {
				if(el1===el2) {
				
					// MATCH: pop both elements
					el1 = oldElms.pop();
					el2 = newElms.pop();
					
				} else if (el2 && /*el1 is after el2*/(!el1||(el2.compareDocumentPosition(el1) & (1|2|8|32))===0)) {
					
					// INSERT: raise onadded, pop new elements
					try { handler.onadded && handler.onadded(el2); } catch(ex) { setImmediate(function() {throw ex})}
					el2 = newElms.pop();
					
				} else {
				
					// DELETE: raise onremoved, pop old elements
					try { handler.onremoved && handler.onremoved(el1); } catch(ex) { setImmediate(function() {throw ex})}
					el1 = oldElms.pop();
					
				}
			}
			
		};
		
		// use the event stream that best matches our needs
		var simpleSelector = selector.replace(/:(dir|lang|root|empty|blank|nth-child|nth-last-child|first-child|last-child|only-child|nth-of-type|nth-last-of-child|fist-of-type|last-of-type|only-of-type|not|matches|default)\b/gi,'')
		var eventStream; if(simpleSelector.indexOf(':') == -1) {
			
			// static stuff only
			eventStream = new DOMUpdateEventStream({target:root}); 
			
		} else {
			
			// dynamic stuff too
			eventStream = new DOMUpdateEventStream({target:root}); 
			if(DOMUpdateEventStream != AnimationFrameEventStream) {
			
				// detect the presence of focus-related pseudo-classes
				var reg = /:(focus|active)\b/gi;
				if(reg.test(simpleSelector)) {
					
					// mouse events should be listened
					eventStream = new CompositeEventStream(
						new FocusEventStream(),
						eventStream
					);
					
					// simplify simpleSelector
					var reg = /:(focus)\b/gi;
					simpleSelector = simpleSelector.replace(reg, ''); // :active has other hooks
					
				}
				
				// detect the presence of mouse-button-related pseudo-classes
				var reg = /:(active)\b/gi;
				if(reg.test(simpleSelector)) {
					
					// mouse events should be listened
					eventStream = new CompositeEventStream(
						new MouseButtonEventStream(),
						eventStream
					);
					
					// simplify simpleSelector
					simpleSelector = simpleSelector.replace(reg, '');
					
				}

				// detect the presence of user input pseudo-classes
				var reg = /:(target|checked|indeterminate|valid|invalid|in-range|out-of-range|user-error)\b/gi;
				if(reg.test(simpleSelector)) {
					
					// slowly dynamic stuff do happen
					eventStream = new CompositeEventStream(
						new TimeoutEventStream(250),
						eventStream
					);
					
					// simplify simpleSelector
					simpleSelector = simpleSelector.replace(reg, '');

					var reg = /:(any-link|link|visited|local-link|enabled|disabled|read-only|read-write|required|optional)\b/gi;
					// simplify simpleSelector
					simpleSelector = simpleSelector.replace(reg, '');
					
				}
				
				// detect the presence of nearly-static pseudo-classes
				var reg = /:(any-link|link|visited|local-link|enabled|disabled|read-only|read-write|required|optional)\b/gi;
				if(reg.test(simpleSelector)) {
					
					// nearly static stuff do happen
					eventStream = new CompositeEventStream(
						new TimeoutEventStream(333),
						eventStream
					);
					
					// simplify simpleSelector
					simpleSelector = simpleSelector.replace(reg, '');
					
				}
				
				// detect the presence of mouse-related pseudo-classes
				var reg = /:(hover)\b/gi;
				if(reg.test(simpleSelector)) {
					
					// mouse events should be listened
					eventStream = new CompositeEventStream(
						new MouseEventStream(),
						eventStream
					);
					
					// simplify simpleSelector
					simpleSelector = simpleSelector.replace(reg, '');
					
				}
				
				// detect the presence of unknown pseudo-classes
				if(simpleSelector.indexOf(':') !== -1) {
					
					// other stuff do happen, too (let's give up on events)
					eventStream = new AnimationFrameEventStream(); 
					
				}
				
			}
			
		}
		
		// start handling changes
		loop(eventStream);
		
	}
	
	return querySelectorLive;
	
})(window, document);
require.define('src/core/dom-query-selector-live.js');

////////////////////////////////////////

// TODO: comment about the 'no_auto_stylesheet_detection' flag?

module.exports = (function(window, document) { "use strict";
	
	// import dependencies
	require('src/core/polyfill-dom-console.js');
	require('src/core/polyfill-dom-requestAnimationFrame.js');
	var cssSyntax = require('src/core/css-syntax.js');
	var domEvents = require('src/core/dom-events.js');
	var querySelectorLive = require('src/core/dom-query-selector-live.js');
	
	// define the module
	var cssCascade = {
		
		//
		// returns the priority of a unique selector (NO COMMA!)
		// { the return value is an integer, with the same formula as webkit }
		//
		computeSelectorPriorityOf: function computeSelectorPriorityOf(selector) {
			if(typeof selector == "string") selector = cssSyntax.parse(selector.trim()+"{}").value[0].selector;
			
			var numberOfIDs = 0;
			var numberOfClasses = 0;
			var numberOfTags = 0;
			
			// TODO: improve this parser, or find one on the web
			for(var i = 0; i < selector.length; i++) {
				
				if(selector[i] instanceof cssSyntax.IdentifierToken) {
					numberOfTags++;
					
				} else if(selector[i] instanceof cssSyntax.DelimToken) {
					if(selector[i].value==".") {
						numberOfClasses++; i++;
					}
					
				} else if(selector[i] instanceof cssSyntax.ColonToken) {
					if(selector[++i] instanceof cssSyntax.ColonToken) {
						numberOfTags++; i++;
						
					} else if((selector[i] instanceof cssSyntax.Func) && (/^(not|matches)$/i).test(selector[i].name)) {
						var nestedPriority = this.computeSelectorPriorityOf(selector[i].value);
						numberOfTags += nestedPriority % 256; nestedPriority /= 256;
						numberOfClasses += nestedPriority % 256; nestedPriority /= 256;
						numberOfIDs += nestedPriority;
						
					} else {
						numberOfClasses++;
						
					}
					
				} else if(selector[i] instanceof cssSyntax.SimpleBlock) {
					if(selector[i].name=="[") {
						numberOfClasses++;
					}
					
				} else if(selector[i] instanceof cssSyntax.HashToken) {
					numberOfIDs++;
					
				} else {
					// TODO: stop ignoring unknown symbols?
					
				}
				
			}
			
			if(numberOfIDs>255) numberOfIds=255;
			if(numberOfClasses>255) numberOfClasses=255;
			if(numberOfTags>255) numberOfTags=255;
			
			return ((numberOfIDs*256)+numberOfClasses)*256+numberOfTags;
			
		},
		
		//
		// returns an array of the css rules matching an element
		//
		findAllMatchingRules: function findAllMatchingRules(element) {
			return this.findAllMatchingRulesWithPseudo(element);
		},
		
		//
		// returns an array of the css rules matching a pseudo-element
		//
		findAllMatchingRulesWithPseudo: function findAllMatchingRules(element,pseudo) {
			pseudo = pseudo ? (''+pseudo).toLowerCase() : pseudo;
			
			// let's look for new results if needed...
			var results = [];
			
			// walk the whole stylesheet...
			var visit = function(rules) {
				try {
					for(var r = rules.length; r--; ) {
						var rule = rules[r]; 
						
						// media queries hook
						if(rule.disabled) continue;
						
						if(rule instanceof cssSyntax.StyleRule) {
							
							// consider each selector independently
							var subrules = rule.subRules || cssCascade.splitRule(rule);
							for(var sr = subrules.length; sr--; ) {
								
								var selector = subrules[sr].selector.toCSSString().replace(/ *(\/\*\*\/|  ) */g,' ').trim();
								if(pseudo) {
									// WE ONLY ACCEPT SELECTORS ENDING WITH THE PSEUDO
									var selectorLow = selector.toLowerCase();
									var newLength = selector.length-pseudo.length-1;
									if(newLength<=0) continue;
									
									if(selectorLow.lastIndexOf('::'+pseudo)==newLength-1) {
										selector = selector.substr(0,newLength-1);
									} else if(selectorLow.lastIndexOf(':'+pseudo)==newLength) {
										selector = selector.substr(0,newLength);
									} else {
										continue;
									}
									
									// fix selectors like "#element > :first-child ~ ::before"
									if(selector.trim().length == 0) { selector = '*' }
									else if(selector[selector.length-1] == ' ') { selector += '*' }
									else if(selector[selector.length-1] == '+') { selector += '*' }
									else if(selector[selector.length-1] == '>') { selector += '*' }
									else if(selector[selector.length-1] == '~') { selector += '*' }
									
								}
								
								// look if the selector matches
								var isMatching = false;
								try {
									if(element.matches) isMatching=element.matches(selector)
									else if(element.matchesSelector) isMatching=element.matchesSelector(selector)
									else if(element.oMatchesSelector) isMatching=element.oMatchesSelector(selector)
									else if(element.msMatchesSelector) isMatching=element.msMatchesSelector(selector)
									else if(element.mozMatchesSelector) isMatching=element.mozMatchesSelector(selector)
									else if(element.webkitMatchesSelector) isMatching=element.webkitMatchesSelector(selector)
									else { throw new Error("no element.matches?") }
								} catch(ex) { debugger; setImmediate(function() { throw ex; }) }
								
								// if yes, add it to the list of matched selectors
								if(isMatching) { results.push(subrules[sr]); }
								
							}
							
						} else if(rule instanceof cssSyntax.AtRule && rule.name=="media") {
							
							// visit them
							visit(rule.toStylesheet().value);
							
						}
						
					}
				} catch (ex) {
					setImmediate(function() { throw ex; });
				}
			}
			
			for(var s=cssCascade.stylesheets.length; s--; ) {
				var rules = cssCascade.stylesheets[s];
				visit(rules);
			}
			
			return results;
		},
		
		//
		// a list of all properties supported by the current browser
		//
		allCSSProperties: null,
		getAllCSSProperties: function getAllCSSProperties() {
			
			if(this.allCSSProperties) return this.allCSSProperties;
			
			// get all claimed properties
			var s = getComputedStyle(document.documentElement); var ps = new Array(s.length);
			for(var i=s.length; i--; ) {
				ps[i] = s[i];
			}
			
			// FIX A BUG WHERE WEBKIT DOESN'T REPORT ALL PROPERTIES
			if(ps.indexOf('content')==-1) {ps.push('content');}
			if(ps.indexOf('counter-reset')==-1) {
				
				ps.push('counter-reset');
				ps.push('counter-increment');
				
				// FIX A BUG WHERE WEBKIT RETURNS SHIT FOR THE COMPUTED VALUE OF COUNTER-RESET
				cssCascade.computationUnsafeProperties['counter-reset']=true;
				
			}
			
			// save in a cache for faster access the next times
			return this.allCSSProperties = ps;
			
		},
		
		// 
		// those properties are not safe for computation->specified round-tripping
		// 
		computationUnsafeProperties: {
			"bottom"          : true,
			"direction"       : true,
			"display"         : true,
			"font-size"       : true,
			"height"          : true,
			"left"            : true,
			"line-height"     : true,
			"margin-left"     : true,
			"margin-right"    : true,
			"margin-bottom"   : true,
			"margin-top"      : true,
			"max-height"      : true,
			"max-width"       : true,
			"min-height"      : true,
			"min-width"       : true,
			"padding-left"    : true,
			"padding-right"   : true,
			"padding-bottom"  : true,
			"padding-top"     : true,
			"right"           : true,
			"text-align"      : true,
			"text-align-last" : true,
			"top"             : true,
			"width"           : true,
			__proto__         : null,
		},
		
		//
		// a list of property we should inherit...
		//
		inheritingProperties: {
			"border-collapse"       : true,
			"border-spacing"        : true,
			"caption-side"          : true,
			"color"                 : true,
			"cursor"                : true,
			"direction"             : true,
			"empty-cells"           : true,
			"font-family"           : true,
			"font-size"             : true,
			"font-style"            : true,
			"font-variant"          : true,
			"font-weight"           : true,
			"font"                  : true,
			"letter-spacing"        : true,
			"line-height"           : true,
			"list-style-image"      : true,
			"list-style-position"   : true,
			"list-style-type"       : true,
			"list-style"            : true,
			"orphans"               : true,
			"quotes"                : true,
			"text-align"            : true,
			"text-indent"           : true,
			"text-transform"        : true,
			"visibility"            : true,
			"white-space"           : true,
			"widows"                : true,
			"word-break"            : true,
			"word-spacing"          : true,
			"word-wrap"             : true,
			__proto__               : null,
		},
		
		//
		// returns the default style for a tag
		//
		defaultStylesForTag: Object.create ? Object.create(null) : {},
		getDefaultStyleForTag: function getDefaultStyleForTag(tagName) {
			
			// get result from cache
			var result = this.defaultStylesForTag[tagName];
			if(result) return result;
			
			// create dummy virtual element
			var element = document.createElement(tagName);
			var style = this.defaultStylesForTag[tagName] = getComputedStyle(element);
			if(style.display) return style;
			
			// webkit fix: insert the dummy element anywhere (head -> display:none)
			document.head.insertBefore(element, document.head.firstChild);
			return style;
		},
		
		// 
		// returns the specified style of an element. 
		// REMARK: may or may not unwrap "inherit" and "initial" depending on implementation
		// REMARK: giving "matchedRules" as a parameter allow you to mutualize the "findAllMatching" rules calls
		// 
		getSpecifiedStyle: function getSpecifiedStyle(element, cssPropertyName, matchedRules) {
			
			// hook for css regions
			var fragmentSource;
			if(fragmentSource=element.getAttribute('data-css-regions-fragment-of')) {
				fragmentSource = document.querySelector('[data-css-regions-fragment-source="'+fragmentSource+'"]');
				if(fragmentSource) return cssCascade.getSpecifiedStyle(fragmentSource, cssPropertyName);
			}
			
			// give IE a thumbs up for this!
			if(element.currentStyle && !window.opera) {
				
				// ask IE to manage the style himself...
				var bestValue = element.myStyle[cssPropertyName] || element.currentStyle[cssPropertyName];
				
				// return a parsed representation of the value
				return cssSyntax.parseAListOfComponentValues(bestValue);
				
			} else {
				
				// TODO: support the "initial" and "inherit" things?
				
				// first, let's try inline style as it's fast and generally accurate
				// TODO: what if important rules override that?
				try {
					if(bestValue = element.style.getPropertyValue(cssPropertyName) || element.myStyle[cssPropertyName]) {
						return cssSyntax.parseAListOfComponentValues(bestValue);
					}
				} catch(ex) {}
				
				// find all relevant style rules
				var isBestImportant=false; var bestPriority = 0; var bestValue = new cssSyntax.TokenList();
				var rules = matchedRules || (
					cssPropertyName in cssCascade.monitoredProperties
					? element.myMatchedRules || []
					: cssCascade.findAllMatchingRules(element)
				);
				
				var visit = function(rules) {
					
					for(var i=rules.length; i--; ) {
						
						// media queries hook
						if(rules[i].disabled) continue;
						
						// find a relevant declaration
						if(rules[i] instanceof cssSyntax.StyleRule) {
							var decls = rules[i].getDeclarations();
							for(var j=decls.length-1; j>=0; j--) {
								if(decls[j].type=="DECLARATION") {
									if(decls[j].name==cssPropertyName) {
										// only works if selectors containing a "," are deduplicated
										var currentPriority = cssCascade.computeSelectorPriorityOf(rules[i].selector);
										
										if(isBestImportant) {
											// only an important declaration can beat another important declaration
											if(decls[j].important) {
												if(currentPriority >= bestPriority) {
													bestPriority = currentPriority;
													bestValue = decls[j].value;
												}
											}
										} else {
											// an important declaration beats any non-important declaration
											if(decls[j].important) {
												isBestImportant = true;
												bestPriority = currentPriority;
												bestValue = decls[j].value;
											} else {
												// the selector priority has to be higher otherwise
												if(currentPriority >= bestPriority) {
													bestPriority = currentPriority;
													bestValue = decls[j].value;
												}
											}
										}
									}
								}
							}
						} else if((rules[i] instanceof cssSyntax.AtRule) && (rules[i].name=="media")) {
							
							// visit them
							visit(rules[i].toStylesheet())
							
						}
						
					}
					
				}
				visit(rules);
				
				// return our best guess...
				return bestValue||null;
				
			}
			
		},
		
		
		//
		// start monitoring a new stylesheet
		// (should usually not be used because stylesheets load automatically)
		//
		stylesheets: [],
		loadStyleSheet: function loadStyleSheet(cssText,i) {
			
			// load in order
			
			// parse the stylesheet content
			var rules = cssSyntax.parse(cssText).value;
			
			// add the stylesheet into the object model
			if(typeof(i)!=="undefined") { cssCascade.stylesheets[i]=rules; } 
			else { i=cssCascade.stylesheets.push(rules);}
			
			// make sure to monitor the required rules
			cssCascade.startMonitoringStylesheet(rules)
			
		},
		
		//
		// start monitoring a new stylesheet
		// (should usually not be used because stylesheets load automatically)
		//
		loadStyleSheetTag: function loadStyleSheetTag(stylesheet,i) {
			
			if(stylesheet.hasAttribute('data-css-polyfilled')) {
				return;
			}
			
			if(stylesheet.tagName=='LINK') {
				
				// oh, no, we have to download it...
				try {
					
					// dummy value in-between
					cssCascade.stylesheets[i] = new cssSyntax.TokenList();
					
					//
					var xhr = new XMLHttpRequest(); xhr.href = stylesheet.href;
					xhr.open('GET',stylesheet.href,true); xhr.ruleIndex = i; 
					xhr.onreadystatechange = function() {
						if(this.readyState==4) { 
							
							// status 0 is a webkit bug for local files
							if(this.status==200||this.status==0) {
								cssCascade.loadStyleSheet(this.responseText,this.ruleIndex)
							} else {
								cssConsole.log("css-cascade polyfill failled to load: " + this.href);
							}
						}
					};
					xhr.send();
					
				} catch(ex) {
					cssConsole.log("css-cascade polyfill failled to load: " + stylesheet.href);
				}
				
			} else {
				
				// oh, cool, we just have to parse the content!
				cssCascade.loadStyleSheet(stylesheet.textContent,i);
				
			}
			
			// mark the stylesheet as ok
			stylesheet.setAttribute('data-css-polyfilled',true);
			
		},
		
		//
		// calling this function will load all currently existing stylesheets in the document
		// (should usually not be used because stylesheets load automatically)
		//
		selectorForStylesheets: "style:not([data-no-css-polyfill]):not([data-css-polyfilled]), link[rel=stylesheet]:not([data-no-css-polyfill]):not([data-css-polyfilled])",
		loadAllStyleSheets: function loadAllStyleSheets() {
			
			// for all stylesheets in the <head> tag...
			var head = document.head || document.documentElement;
			var stylesheets = head.querySelectorAll(cssCascade.selectorForStylesheets);
			
			var intialLength = this.stylesheets.length;
			this.stylesheets.length += stylesheets.length
			
			// for all of them...
			for(var i = stylesheets.length; i--;) {
				
				// 
				// load the stylesheet
				// 
				var stylesheet = stylesheets[i]; 
				cssCascade.loadStyleSheetTag(stylesheet,intialLength+i)
				
			}
		},
		
		//
		// this is where we store event handlers for monitored properties
		//
		monitoredProperties: Object.create ? Object.create(null) : {},
		monitoredPropertiesHandler: {
			onupdate: function(element, rule) {
				
				// we need to find all regexps that matches
				var mps = cssCascade.monitoredProperties;
				var decls = rule.getDeclarations();
				for(var j=decls.length-1; j>=0; j--) {
					if(decls[j].type=="DECLARATION") {
						if(decls[j].name in mps) {
							
							// call all handlers waiting for this
							var hs = mps[decls[j].name];
							for(var hi=hs.length; hi--;) {
								hs[hi].onupdate(element,rule);
							};
							
							// don't call twice
							break;
							
						}
					}
				}
				
			}
		},
		
		//
		// add an handler to some properties (aka fire when their value *MAY* be affected)
		// REMARK: because this event does not promise the value changed, you may want to figure it out before relayouting
		//
		startMonitoringProperties: function startMonitoringProperties(properties, handler) {
			
			for(var i=properties.length; i--; ) {
				var property = properties[i];
				var handlers = (
					cssCascade.monitoredProperties[property]
					|| (cssCascade.monitoredProperties[property] = [])
				);
				handlers.push(handler)
			}
			
			for(var s=0; s<cssCascade.stylesheets.length; s++) {
				var currentStylesheet = cssCascade.stylesheets[s];
				cssCascade.startMonitoringStylesheet(currentStylesheet);
			}
			
		},
		
		//
		// calling this function will detect monitored rules in the stylesheet
		// (should usually not be used because stylesheets load automatically)
		//
		startMonitoringStylesheet: function startMonitoringStylesheet(rules) {
			for(var i=0; i<rules.length; i++) {
				
				// only consider style rules
				if(rules[i] instanceof cssSyntax.StyleRule) {
					
					// try to see if the current rule is worth monitoring
					if(rules[i].isMonitored) continue;
					
					// for that, let's see if we can find a declaration we should watch
					var decls = rules[i].getDeclarations();
					for(var j=decls.length-1; j>=0; j--) {
						if(decls[j].type=="DECLARATION") {
							if(decls[j].name in cssCascade.monitoredProperties) {
								
								// if we found some, start monitoring
								cssCascade.startMonitoringRule(rules[i]);
								break;
								
							}
						}
					}
					
				} else if(rules[i] instanceof cssSyntax.AtRule) {
					
					// handle @media
					if(rules[i].name == "media" && window.matchMedia) {
						
						cssCascade.startMonitoringMedia(rules[i]);
						
					}
					
				}
				
			}
		},
		
		//
		// calling this function will detect media query updates and fire events accordingly
		// (should usually not be used because stylesheets load automatically)
		//
		startMonitoringMedia: function startMonitoringMedia(atrule) {
			try {
				
				var media = window.matchMedia(atrule.prelude.toCSSString());
				
				// update all the rules when needed
				var rules = atrule.toStylesheet().value;
				cssCascade.updateMedia(rules, !media.matches, false);
				media.addListener(
					function(newMedia) { cssCascade.updateMedia(rules, !newMedia.matches, true); }
				);
				
				// it seems I like taking risks...
				cssCascade.startMonitoringStylesheet(rules);
				
			} catch(ex) {
				setImmediate(function() { throw ex; })
			}
		},
		
		//
		// define what happens when a media query status changes
		//
		updateMedia: function(rules,disabled,update) {
			for(var i=rules.length; i--; ) {
				rules[i].disabled = disabled;
				// TODO: should probably get handled by a setter on the rule...
				var sr = rules[i].subRules;
				if(sr) {
					for(var j=sr.length; j--; ) {
						sr[j].disabled = disabled;
					}
				}
			}
			
			// in case of update, all elements matching the selector went potentially updated...
			if(update) {
				for(var i=rules.length; i--; ) {
					var els = document.querySelectorAll(rules[i].selector.toCSSString());
					for(var j=els.length; j--; ) {
						cssCascade.monitoredPropertiesHandler.onupdate(els[j],rules[i]);
					}
				}
			}
		},
		
		// 
		// splits a rule if it has multiple selectors
		// 
		splitRule: function splitRule(rule) {
			
			// create an array for all the subrules
			var rules = [];
			
			// fill the array
			var currentRule = new cssSyntax.StyleRule(); currentRule.disabled=rule.disabled;
			for(var i=0; i<rule.selector.length; i++) {
				if(rule.selector[i] instanceof cssSyntax.DelimToken && rule.selector[i].value==",") {
					currentRule.value = rule.value; rules.push(currentRule);
					currentRule = new cssSyntax.StyleRule(); currentRule.disabled=rule.disabled;
				} else {
					currentRule.selector.push(rule.selector[i])
				}
			}
			currentRule.value = rule.value; rules.push(currentRule);
			
			// save the result of the split as subrules
			return rule.subRules = rules;
			
		},
		
		// 
		// ask the css-selector implementation to notify changes for the rules
		// 
		startMonitoringRule: function startMonitoringRule(rule) {
			
			// avoid monitoring rules twice
			if(!rule.isMonitored) { rule.isMonitored=true } else { return; }
			
			// split the rule if it has multiple selectors
			var rules = rule.subRules || cssCascade.splitRule(rule);
			
			// monitor the rules
			for(var i=0; i<rules.length; i++) {
				rule = rules[i];
				querySelectorLive(rule.selector.toCSSString(), {
					onadded: function(e) {
						
						// add the rule to the matching list of this element
						(e.myMatchedRules = e.myMatchedRules || []).unshift(rule); // TODO: does not respect priority order
						
						// generate an update event
						cssCascade.monitoredPropertiesHandler.onupdate(e, rule);
						
					},
					onremoved: function(e) {
						
						// remove the rule from the matching list of this element
						if(e.myMatchedRules) e.myMatchedRules.splice(e.myMatchedRules.indexOf(rule), 1);
						
						// generate an update event
						cssCascade.monitoredPropertiesHandler.onupdate(e, rule);
						
					}
				});
			}
			
		},
		
		//
		// converts a css property name to a javascript name
		//
		toCamelCase: function toCamelCase(variable) { 
			return variable.replace(
				/-([a-z])/g, 
				function(str,letter) { 
					return letter.toUpperCase();
				}
			);
		},
		
		//
		// add some magic code to support properties on the style interface
		//
		polyfillStyleInterface: function(cssPropertyName) {
			
			var prop = {
				
				get: function() {
					
					// check we know which element we work on
					try { if(!this.parentElement) throw new Error("Please use the anHTMLElement.myStyle property to get polyfilled properties") }
					catch(ex) { setImmediate(function() { throw ex; }); return ''; }
					
					try { 
						// non-computed style: return the local style of the element
						this.clip = (this.clip===undefined?'':this.clip);
						return this.parentElement.getAttribute('data-style-'+cssPropertyName);
					} catch (ex) {
						// computed style: return the specified style of the element
						var value = cssCascade.getSpecifiedStyle(this.parentElement, cssPropertyName, undefined, true);
						return value && value.length>0 ? value.toCSSString() : '';
					}
					
				},
				
				set: function(v) {
					
					// check that the style is writable
					this.clip = (this.clip===undefined?'':this.clip);

					// check we know which element we work on
					try { if(!this.parentElement) throw new Error("Please use the anHTMLElement.myStyle property to set polyfilled properties") }
					catch(ex) { setImmediate(function() { throw ex; }); return; }
					
					// modify the local style of the element
					if(this.parentElement.getAttribute('data-style-'+cssPropertyName) != v) {
						this.parentElement.setAttribute('data-style-'+cssPropertyName,v);
					}
					
				}
				
			};
			
			var styleProtos = [];
			try { styleProtos.push(Object.getPrototypeOf(document.documentElement.style) || CSSStyleDeclaration); } catch (ex) {}
			//try { styleProtos.push(Object.getPrototypeOf(getComputedStyle(document.documentElement))); } catch (ex) {}
			//try { styleProtos.push(Object.getPrototypeOf(document.documentElement.currentStyle)); } catch (ex) {}
			//try { styleProtos.push(Object.getPrototypeOf(document.documentElement.runtimeStyle)); } catch (ex) {}
			//try { styleProtos.push(Object.getPrototypeOf(document.documentElement.specifiedStyle)); } catch (ex) {}
			//try { styleProtos.push(Object.getPrototypeOf(document.documentElement.cascadedStyle)); } catch (ex) {}
			//try { styleProtos.push(Object.getPrototypeOf(document.documentElement.usedStyle)); } catch (ex) {}
			
			for(var i = styleProtos.length; i--;) {
				var styleProto = styleProtos[i];
				Object.defineProperty(styleProto,cssPropertyName,prop);
				Object.defineProperty(styleProto,cssCascade.toCamelCase(cssPropertyName),prop);
			}
			cssCascade.startMonitoringRule(cssSyntax.parse('[style*="'+cssPropertyName+'"]{'+cssPropertyName+':attr(style)}').value[0]);
			cssCascade.startMonitoringRule(cssSyntax.parse('[data-style-'+cssPropertyName+']{'+cssPropertyName+':attr(style)}').value[0]);
			
			// add to the list of polyfilled properties...
			cssCascade.getAllCSSProperties().push(cssPropertyName);
			cssCascade.computationUnsafeProperties[cssPropertyName] = true;
			
		}
		
	};

	//
	// polyfill for browsers not support CSSStyleDeclaration.parentElement (all of them right now)
	//
	domEvents.EventTarget.implementsIn(cssCascade);
	Object.defineProperty(Element.prototype,'myStyle',{
		get: function() {
			var style = this.style; 
			if(!style.parentElement) style.parentElement = this;
			return style;
		}
	});

	//
	// load all stylesheets at the time the script is loaded
	// then do it again when all stylesheets are downloaded
	// and again if some style tag is added to the DOM
	//
	if(!("no_auto_stylesheet_detection" in window)) {
		
		cssCascade.loadAllStyleSheets();
		document.addEventListener("DOMContentLoaded", function() {
			cssCascade.loadAllStyleSheets();
			querySelectorLive(
				cssCascade.selectorForStylesheets,
				{
					onadded: function(e) {
						// TODO: respect DOM order?
						cssCascade.loadStyleSheetTag(e);
						cssCascade.dispatchEvent('stylesheetadded');
					}
				}
			)
		})
	}
	
	return cssCascade;

})(window, document);
require.define('src/core/css-cascade.js');

////////////////////////////////////////

//
// The CSS Style module attempts to provide helpers to deal with Style Declarations and elements
// [0] http://lists.w3.org/Archives/Public/www-style/2013Sep/0283.html
//
module.exports = (function(window, document) { "use strict";

	function usedStyleOf(element) {
		var style = element.usedStyle || getComputedStyle(element);
		if(!style.parentElement) { style.parentElement = element; }
		return style;
	}
	
	function currentStyleOf(element) {
		var style = element.cascadedStyle || element.specifiedStyle || element.currentStyle || getComputedStyle(element); // TODO: check CSSOM spec for real name
		if(!style.parentElement) { style.parentElement = element; }
		return style;
	}
	
	function styleOf(element) {
		var style = element.style;
		if(!style.parentElement) { style.parentElement = element; }
		return style;
	}
	
	function runtimeStyleOf(element) {
		var style = /*element.runtimeStyle || */element.style;
		if(!style.parentElement) { style.parentElement = element; }
		return style;
	}
	
	function enforceStyle(element, property, value) {
		
		var propertyBackup = null;
		var usedValue = usedStyleOf(element).getPropertyValue(property);
		if(value instanceof Array) {
			if(value.indexOf(usedValue) >= 0) return null;
			value = ''+value[0];
		} else {
			value = ''+value;
		}
		
		if(usedValue != value) {
			var style = runtimeStyleOf(element);
			propertyBackup = { 
				value:     style.getPropertyValue(property),
				priority:  style.getPropertyPriority(property),
				property:  property
			};
			style.setProperty(property, "", ""); // reset [0]
			style.setProperty(property, "" + value, "important");
		}
		
		return propertyBackup;
		
	}
	
	function enforceStyles(element, propertyValues, backups) {
		var backups = backups || [];
		for(var property in propertyValues) { if(propertyValues.hasOwnProperty(key)) {
			var currentBackup = enforceStyle(element, property, propertyValues[property]);
			if(currentBackup) { backups.push(currentBackup) }
		}}
		return backups;
	}

	function restoreStyle(element, backup) {

		if(backup) {
		
			// get the element runtime style
			var style = runtimeStyleOf(element);
			
			// reset [0]
			style.setProperty(backup.property, "", "");
			
			// restore
			if(backup.value) {
				style.setProperty(backup.property, backup.value, "");
				style.setProperty(backup.property, backup.value, backup.priority);
			}
			
		}

	}
	
	function restoreStyles(element, backups) {
		if(!backups || !(backups.length > 0)) { return; }
		for(var i=backups.length; i--;) {
			restoreStyle(element, backups[i]);
		}
	}
	
	var cssStyle = {
		styleOf: styleOf,
		usedStyleOf: usedStyleOf,
		currentStyleOf: currentStyleOf,
		runtimeStyleOf: runtimeStyleOf,
		enforceStyle: enforceStyle,
		enforceStyles: enforceStyles,
		restoreStyle: restoreStyle,
		restoreStyles: restoreStyles,
	};
	
	return cssStyle;

})(window);
require.define('src/core/css-style.js');

////////////////////////////////////////

module.exports = (function(window, document) { "use strict";
	
	var VSS_COUNT = 0;
	function VirtualStylesheetFactory() {
		var This = this || Object.create(VirtualStylesheet.prototype);
		
		// create the style sheet
		var styleElement = document.createElement('style');
		styleElement.id = "virtual-stylesheet-" + (VSS_COUNT++);
		styleElement.setAttribute('data-no-css-polyfill', 'true');
		styleElement.appendChild(document.createTextNode(''));
		document.querySelector(':root > head').appendChild(styleElement);
		
		// grab its stylesheet object
		var ss = styleElement.sheet;
		if(!ss.cssRules) ss.cssRules = ss.rules;
		ss.removeRule = ss.removeRule || function(i) {
			return ss.deleteRule(i);
		}
		ss.addRule = ss.addRule || function(s,d,i) {
			var rule = s+'{'+d+'}'
			var index = typeof(i)=='number' ? i : ss.cssRules.length;
			return ss.insertRule(rule, index);
		}
		
		// create the mapping table
		var rules = [];
		
		// add the factory
		
		This.stylesheets = Object.create(null);
		This.createStyleSheet = function(name) {
			return This.stylesheets[name] || (This.stylesheets[name] = new VirtualStylesheet(this, name));
		}
		
		// add the methods
		
		This.addRule = function(selector, declarations, stylesheet, enabled) {
			
			// convert selector & declarations to a non-empty string
			selector = '' + selector + ' ';
			declarations = '' + declarations + ' ';
			
			// add the rule to the known rules
			rules.push({ stylesheet: stylesheet, selector: selector, declarations: declarations, enabled: enabled });
			
			// add the rule to the enabled stylesheet, if needed
			if(enabled) {
				ss.addRule(selector, declarations);
			}
			
		}
		
		This.disableAllRules = function(stylesheet) {
			var ssIndex = ss.cssRules.length;
			for(var i = rules.length; i--;) { var rule = rules[i];
				if(rule.enabled) {
					ssIndex--;
					if(rule.stylesheet == stylesheet) {
						ss.removeRule(ssIndex);
						rule.enabled = false;
					}
				}
			}
		}
		
		This.enableAllRules = function(stylesheet) {
			var ssIndex = 0;
			for(var i = 0; i<rules.length; i++) { var rule = rules[i];
				if(rule.enabled) {
					ssIndex++;
				} else {
					if(rule.stylesheet == stylesheet) {
						ss.addRule(rule.selector, rule.declarations, ssIndex);
						rule.enabled = true;
						ssIndex++;
					}
				}
			}
		}
		
		This.deleteAllRules = function(stylesheet) {
			var ssIndex = ss.cssRules.length;
			for(var i = rules.length; i--;) { var rule = rules[i];
				if(rule.enabled) {
					ssIndex--;
					if(rule.stylesheet == stylesheet) {
						ss.removeRule(ssIndex);
						rules.splice(i, 1);
					}
				}
			}
		}
		
	}
	
	function VirtualStylesheet(factory, name) {
		this.factory = factory;
		this.name = name;
		this.enabled = true;
	}
	
	VirtualStylesheet.prototype.addRule = function(selector, declarations) {
		this.factory.addRule(selector, declarations, this.name, this.enabled);
	}
	
	VirtualStylesheet.prototype.set = function(element, properties) {
		
		// give an id to the element
		if(!element.id) { element.id = element.uniqueID; }
	
		// compute the css rule to add
		var selector = "#"+element.id;
		var rule = ""; for(var property in properties) {
			if(properties.hasOwnProperty(property)) {
				rule += property + ": " + properties[property] + " !important; ";
			}
		}
		
		// and then add it
		this.addRule(selector, rule);
		
	}
	
	VirtualStylesheet.prototype.enable = function() {
		this.factory.enableAllRules(this.name); this.enabled=true;
	}
	
	VirtualStylesheet.prototype.disable = function() {
		this.factory.disableAllRules(this.name); this.enabled=false;
	}
	
	VirtualStylesheet.prototype.clear = function() {
		this.factory.deleteAllRules(this.name);
	}
	
	VirtualStylesheet.prototype.revoke = function() {
		this.clear();
	}
	
	VirtualStylesheetFactory.VirtualStylesheet = VirtualStylesheet;
	VirtualStylesheetFactory.VirtualStylesheetFactory = VirtualStylesheetFactory;
	return VirtualStylesheetFactory;
	
})(window, document)
require.define('src/core/css-virtual-stylesheet-factory.js');

////////////////////////////////////////

void function() {
	if(!('uniqueID' in document.documentElement)) {
		var uniqueID_counter = 0;
		Object.defineProperty(Element.prototype, 'uniqueID', {get: function() {
			if(this.id) {
				return(this.id);
			} else {
				return(this.id = ("EL__"+(++uniqueID_counter)+"__"));
			}
		}});
	}
}();
require.define('src/core/polyfill-dom-uniqueID.js');

////////////////////////////////////////

module.exports = (function(window, document) {
	
	// import dependencies
	var cssStyle  = require('src/core/css-style.js'),
	    usedStyleOf     = cssStyle.usedStyleOf,
	    currentStyleOf  = cssStyle.currentStyleOf,
	    enforceStyle    = cssStyle.enforceStyle,
	    restoreStyle    = cssStyle.restoreStyle;
	
	// define the module
	var cssSizing = {
		
		absoluteMinWidthOf: function(element) {

			//
			// make the parent a relative container (if necessary)
			//
			var parentPositionBackup = enforceStyle(element.parentNode, "position", "relative");
			
			//
			// remove the element from the flow (if necessary)
			//
			var positionBackup = enforceStyle(element, "position", "absolute");
			
			//
			// put impossible sizing constraints to the element
			//
			var widthBackup = enforceStyle(element, "width", "0px");
			var minWidthBackup = enforceStyle(element, "min-width", "0px");
			
			//
			// see what size is finally being used
			//
			var result = element.offsetWidth;
			
			//
			// restore styling where needed
			//
			restoreStyle(element, minWidthBackup);
			restoreStyle(element, widthBackup);
			restoreStyle(element, positionBackup);
			restoreStyle(element.parentNode, parentPositionBackup);
			
			//
			// return the result
			//
			return result;
				
		},
		
		minWidthOf: function(element) {
		
			//
			// make the parent an infinite relative container (if necessary)
			//
			var parentPositionBackup = enforceStyle(element.parentNode, "position", "relative");
			var parentWidthBackup = enforceStyle(element.parentNode, "width", "0px");
			var parentMinWidthBackup = enforceStyle(element.parentNode, "min-width", "0px");
			var parentMaxWidthBackup = enforceStyle(element.parentNode, "max-width", "0px");
			
			//
			// remove the element from the flow (if necessary)
			//
			var positionBackup = enforceStyle(element, "position", "absolute");
			
			//
			// put impossible sizing constraints to the element
			//
			var widthBackup = enforceStyle(element, "width", "auto");
			
			//
			// see what size is finally being used
			//
			var result = element.offsetWidth;
			
			//
			// restore styling where needed
			//
			restoreStyle(element, widthBackup);
			restoreStyle(element, positionBackup);
			restoreStyle(element.parentNode, parentWidthBackup);
			restoreStyle(element.parentNode, parentMaxWidthBackup);
			restoreStyle(element.parentNode, parentMinWidthBackup);
			restoreStyle(element.parentNode, parentPositionBackup);
			
			//
			// return the result
			//
			return result;
		},
		
		maxWidthOf: function(element) {
		
			//
			// make the parent a relative container (if necessary)
			//
			var parentPositionBackup = enforceStyle(element.parentNode, "position", "relative");
			
			//
			// remove the element from the flow (if necessary)
			//
			var positionBackup = enforceStyle(element, "position", "absolute");
			
			//
			// put impossible sizing constraints to the element
			//
			var widthBackup = enforceStyle(element, "width", "auto");
			
			//
			// see what size is finally being used
			//
			var result = element.offsetWidth;
					
			//
			// restore styling where needed
			//
			restoreStyle(element, widthBackup);
			restoreStyle(element, positionBackup);
			restoreStyle(element.parentNode, parentPositionBackup);
			
			//
			// return the result
			//
			return result;
		},
		
		absoluteMaxWidthOf: function(element) {
		
			//
			// make the parent an infinite relative container (if necessary)
			//
			var parentPositionBackup = enforceStyle(element.parentNode, "position", "relative");
			var parentWidthBackup = enforceStyle(element.parentNode, "width", "9999px");
			var parentMinWidthBackup = enforceStyle(element.parentNode, "min-width", "9999px");
			
			//
			// remove the element from the flow (if necessary)
			//
			var positionBackup = enforceStyle(element, "position", "absolute");
			
			//
			// put impossible sizing constraints to the element
			//
			var widthBackup = enforceStyle(element, "width", "auto");
			
			//
			// see what size is finally being used
			//
			var result = element.offsetWidth;
			
			//
			// restore styling where needed
			//
			restoreStyle(element, widthBackup);
			restoreStyle(element, positionBackup);
			restoreStyle(element.parentNode, parentWidthBackup);
			restoreStyle(element.parentNode, parentMinWidthBackup);
			restoreStyle(element.parentNode, parentPositionBackup);
			
			//
			// return the result
			//
			return result;
		},
		
	};
	
	return cssSizing;
	
})(window, document)
require.define('src/core/css-sizing.js');

////////////////////////////////////////

//
// The Box module defines algorithms for dealing with css boxes
//
module.exports = (function(window, document) {
	
	// Original code licensed by Adobe Systems Incorporated under the Apache License 2.0. 
	// https://github.com/adobe-webplatform/brackets-css-shapes-editor/blob/master/thirdparty/CSSShapesEditor.js#L442

	var cssBox = cssBox || {};
	cssBox.getBox = 
		
		// returns {top/left/bottom/right} for 'content/padding/border/margin-box' relative to the border box top-left corner.
		function getBox(element, boxType){
			var width = element.offsetWidth,
				height = element.offsetHeight,

				style = getComputedStyle(element),

				leftBorder = parseFloat(style.borderLeftWidth),
				rightBorder = parseFloat(style.borderRightWidth),
				topBorder = parseFloat(style.borderTopWidth),
				bottomBorder = parseFloat(style.borderBottomWidth),

				leftPadding = parseFloat(style.paddingLeft),
				rightPadding = parseFloat(style.paddingRight),
				topPadding = parseFloat(style.paddingTop),
				bottomPadding = parseFloat(style.paddingBottom),

				leftMargin = parseFloat(style.marginLeft),
				rightMargin = parseFloat(style.marginRight),
				topMargin = parseFloat(style.marginTop),
				bottomMargin = parseFloat(style.marginBottom);

			var box = {
				top: 0,
				left: 0,
				width: 0,
				height: 0
			};

			switch (boxType||'border-box'){
			case 'content-box':
				box.top = topBorder + topPadding;
				box.left = leftBorder + leftPadding;
				box.width = width - leftBorder - leftPadding - rightPadding - rightBorder;
				box.height = height - topBorder - topPadding - bottomPadding - bottomBorder;
				break;

			case 'padding-box':
				box.top = topPadding;
				box.left = leftPadding;
				box.width = width - leftBorder - rightBorder;
				box.height = height - topBorder - bottomBorder;
				break;

			case 'border-box':
				box.top = 0;
				box.left = 0;
				box.width = width;
				box.height = height;
				break;

			case 'margin-box':
				box.top = 0 - topMargin;
				box.left = 0 - leftMargin;
				box.width = width + leftMargin + rightMargin;
				box.height = height + topMargin + bottomMargin;
				break;

			default:
				throw new TypeError('Invalid parameter, boxType: ' + boxType);
			}

			return box;
		};
	
	return cssBox;
	
})(window, document);
require.define('src/core/css-box.js');

////////////////////////////////////////

//
// The CSS Units module is handling conversions between units
//
module.exports = (function(window, document) {
	
	// import dependencies
	var getBox = require('src/core/css-box.js').getBox;
	
	// define the module
	var cssUnits = {
		
		// converts "cssLength" from its inherent unit to pixels, and returns the result as a float
		convertToPixels: function convertToPixels(cssLength, element, opts) {
			
			if(typeof cssLength == "string") {
			
				var match = cssLength.match(/^\s*(-?\d+(?:\.\d+)?)(\S*)\s*$/);
				var currentLength = match ? parseFloat(match[1]) : 0.0;
				var currentUnit = match ? match[2] : '';
					
			} else {
				
				var currentLength = cssLength.value;
				var currentUnit = cssLength.unit;
				
			}

			var converter = convertToPixels.converters[currentUnit];
			if (!converter) throw new Error("No suitable conversion from unit '"+currentUnit+"' to unit 'px'");
			
			var convertedLength = converter.call(null, currentLength, element||document.documentElement, opts)
			return Math.round(20*convertedLength)/20;
			
		},

		// converts "pixelLength" from pixels to "destinUnit", and returns the result as a float
		convertFromPixels: function convertFromPixels(pixelLength, destinUnit, element, opts) {

			var converter = convertFromPixels.converters[destinUnit];
			if (!converter) throw new Error("No suitable conversion to unit '"+destinUnit+"' from unit 'px'");

			var convertedLength = converter.call(null, pixelLength, element||document.documentElement, opts)
			return Math.round(20*convertedLength)/20;
			
		},
		
	}
	
	cssUnits.convertToPixels.converters = {
		'px' : function(x) { return x; },
		'in' : function(x) { return x * 96; },
		'cm' : function(x) { return x / 0.02645833333; },
		'mm' : function(x) { return x / 0.26458333333; },
		'pt' : function(x) { return x / 0.75; },
		'pc' : function(x) { return x / 0.0625; },
		'em' : function(x, e) { return x*parseFloat(e?getComputedStyle(e).fontSize:16); },
		'rem': function(x, e) { return x*parseFloat(e?getComputedStyle(e.ownerDocument.documentElement).fontSize:16); },
		'vw' : function(x, e) { return x/100*window.innerWidth; },
		'vh' : function(x, e) { return x/100*window.innerHeight; },
		'%'  : function(x, e, opts) {
			opts = opts || {};

			// get the box from which to compute the percentages
			var box = e ? getBox(e, opts.boxType) : {
				top: 0,
				left: 0,
				width: 0,
				height: 0
			};

			// now apply the conversion algorithm
			switch(true) {
				case opts.isRadius:
					var radius = Math.sqrt( box.height*box.height + box.width*box.width ) / Math.sqrt(2);
					return Math.round(x/100*radius);
					
				case opts.isHeightRelated:
					return x/100*box.height;
					
				case opts.isWidthRelated: default:
					return x/100*box.width;
					
			}

		}
	}

	cssUnits.convertFromPixels.converters = {
		'px' : function(x) { return x; },
		'in' : function(x) { return x / 96; },
		'cm' : function(x) { return x * 0.02645833333; },
		'mm' : function(x) { return x * 0.26458333333; },
		'pt' : function(x) { return x * 0.75; },
		'pc' : function(x) { return x * 0.0625; },
		'em' : function(x, e) { return x/parseFloat(e?getComputedStyle(e).fontSize:16); },
		'rem': function(x, e) { return x/parseFloat(e?getComputedStyle(e.ownerDocument.documentElement).fontSize:16); },
		'vw' : function(x, e) { return x*100/window.innerWidth; },
		'vh' : function(x, e) { return x*100/window.innerHeight; },
		'%'  : function(x, e, opts) {
			opts = opts || {};

			// get the box from which to compute the percentages
			var box = e ? getBox(e, opts.boxType) : {
				top: 0,
				left: 0,
				width: 0,
				height: 0
			};

			// now apply the conversion algorithm
			switch(true) {
				case opts.isRadius:
					var radius = Math.sqrt( box.height*box.height + box.width*box.width ) / Math.sqrt(2);
					return Math.round(x*100/radius);
					
				case opts.isHeightRelated:
					return x*100/box.height;
					
				case opts.isWidthRelated: default:
					return x*100/box.width;
					
			}


		}
	};
	
	return cssUnits;

})(window, document);
require.define('src/core/css-units.js');

////////////////////////////////////////

module.exports = (function(window, document) { "use strict";
	
	// import dependencies
	var cssSyntax = require('src/core/css-syntax.js');
	
	var cssStyle  = require('src/core/css-style.js'),
	    usedStyleOf     = cssStyle.usedStyleOf,
	    currentStyleOf  = cssStyle.currentStyleOf,
	    enforceStyle    = cssStyle.enforceStyle,
	    restoreStyle    = cssStyle.restoreStyle;
		
	var VirtualStylesheetFactory = require('src/core/css-virtual-stylesheet-factory.js');
	
	require('src/core/polyfill-dom-uniqueID.js');
	require('src/core/polyfill-dom-requestAnimationFrame.js');
	
	var virtualStylesheetFactory = new VirtualStylesheetFactory();
	
	var createRuntimeStyle = function(reason, element) {
		
		// expand the reason
		if(element) {
			reason = (element.id || element.uniqueID) + '-' + reason;
		}
		
		// return a virtual stylesheet
		return virtualStylesheetFactory.createStyleSheet(reason);
		
	}
	
	var cssSizing = require('src/core/css-sizing.js');
	
	var cssUnits = require('src/core/css-units.js');
	
	// define the module
	var LOCATE_AUTO = 0;
	var LOCATE_LINE = 1;
	var LOCATE_SPAN = 2;
	var LOCATE_AREA = 3;
	
	var ALIGN_START  = 0;
	var ALIGN_CENTER = 1;
	var ALIGN_END    = 2;
	var ALIGN_FIT    = 3;
	
	var TRACK_BREADTH_AUTO        = 0;
	var TRACK_BREADTH_LENGTH      = 1;
	var TRACK_BREADTH_FRACTION    = 2;
	var TRACK_BREADTH_PERCENTAGE  = 3;
	var TRACK_BREADTH_MIN_CONTENT = 4;
	var TRACK_BREADTH_MAX_CONTENT = 5;
	
	function GridTrackBreadth() {
		this.minType = TRACK_BREADTH_AUTO;
		this.minValue = "auto";
		this.maxType = TRACK_BREADTH_AUTO;
		this.maxValue = "auto";
	}
	
	GridTrackBreadth.prototype = {
		toString: function() {
			if(this.minType==this.maxType && this.minValue==this.maxValue) {
				switch(this.minType) {
					case TRACK_BREADTH_AUTO: return "auto";
					case TRACK_BREADTH_LENGTH: return this.minValue+"px";
					case TRACK_BREADTH_FRACTION: return this.minValue+"fr";
					case TRACK_BREADTH_PERCENTAGE: return this.minValue+"%";
					case TRACK_BREADTH_MIN_CONTENT: return "min-content";
					case TRACK_BREADTH_MAX_CONTENT: return "max-content";
				}
			} else {
				var min = "auto";
				var max = "auto";
				switch(this.minType) {
					case TRACK_BREADTH_AUTO: min = "auto"; break;
					case TRACK_BREADTH_LENGTH: min = this.minValue+"px"; break;
					case TRACK_BREADTH_FRACTION: min = this.minValue+"fr"; break;
					case TRACK_BREADTH_PERCENTAGE: min = this.minValue+"%"; break;
					case TRACK_BREADTH_MIN_CONTENT: min = "min-content"; break;
					case TRACK_BREADTH_MAX_CONTENT: min = "max-content"; break;
				}
				switch(this.maxType) {
					case TRACK_BREADTH_AUTO: max = "auto"; break;
					case TRACK_BREADTH_LENGTH: max = this.maxValue+"px"; break;
					case TRACK_BREADTH_FRACTION: max = this.maxValue+"fr"; break;
					case TRACK_BREADTH_PERCENTAGE: max = this.maxValue+"%"; break;
					case TRACK_BREADTH_MIN_CONTENT: max = "min-content"; break;
					case TRACK_BREADTH_MAX_CONTENT: max = "max-content"; break;
				}
				return "minmax(" + min + ", " + max + ")";
			}
		},
		setValue: function(type, val) {
			this.minType  = this.maxType  = type;
			this.minValue = this.maxValue = val;
		},
		setMaxValue: function(type, val) {
			this.maxType  = type;
			this.maxValue = val;
		},
		setMinValue: function(type, val) {
			this.minType  = type;
			this.minValue = val;
		}
	}
	
	function GridItemPosition(type, name, index) {
		this.type = type|LOCATE_AUTO;
		this.name = name;
		this.index = index|0;
	}
	
	GridItemPosition.prototype = {
		extractXLineIndex: function(grid, TODO_args) {
			throw "Not implemented";
		},
		extractYLineIndex: function(grid, TODO_args) {
			throw "Not implemented";
		},
		toString: function() {
			
		}
	}
	
	function GridItem(element, parentGrid) {
		
		this.element = element;
		this.parentGrid = element.parentGridLayout = parentGrid;
		
		this.reset();
		this.buggy = true;
		
	}
	
	GridItem.prototype = {
		
		dispose: function() {
			this.element.parentGridLayout = undefined;
		},
		
		reset: function() {
			
			this.order = 0;
			
			this.minWidth = 0;
			this.maxWidth = 0;
			
			this.hMargins = 0;
			this.vMargins = 0;
			this.hPaddings = 0;
			this.vPaddings = 0;
			this.hBorders = 0;
			this.vBorders = 0;
			
			
			this.xStart = -1;
			this.xEnd = -1;
			
			this.specifiedXStart = this.specifiedXStart || new GridItemPosition();
			this.specifiedXStart.type = LOCATE_AUTO;
			this.specifiedXStart.name = undefined;
			this.specifiedXStart.index = undefined;
			
			this.specifiedXEnd = this.specifiedXEnd || new GridItemPosition();
			this.specifiedXEnd.type = LOCATE_AUTO;
			this.specifiedXEnd.name = undefined;
			this.specifiedXEnd.index = undefined;

			
			this.yStart = -1;
			this.yEnd = -1;
			
			this.specifiedYStart = this.specifiedYStart || new GridItemPosition();
			this.specifiedYStart.type = LOCATE_AUTO;
			this.specifiedYStart.name = undefined;
			this.specifiedYStart.index = undefined;
			
			this.specifiedYEnd = this.specifiedYEnd || new GridItemPosition();
			this.specifiedYEnd.type = LOCATE_AUTO;
			this.specifiedYEnd.name = undefined;
			this.specifiedYEnd.index = undefined;
			
			this.marginAlignX = ALIGN_CENTER;
			this.marginAlignY = ALIGN_CENTER;
			
			this.paddingAlignX = ALIGN_FIT;
			this.paddingAlignY = ALIGN_FIT;
			
			
		},
	
		updateFromElement: function() {
			
			var element = this.element;
			var usedStyle = usedStyleOf(element);
			var style = currentStyleOf(element);
			var getStyle = function(prop) {
				var value = style[prop];
				if(typeof(value)=="undefined") { return ""; }
				return value;
			}
			
			this.reset(); 
			this.buggy = false;
			
			// compute order property
			this.order = parseInt(style['order'])|0;
			
			// compute size
			this.minWidth = cssSizing.minWidthOf(element);
			this.maxWidth = cssSizing.maxWidthOf(element);
			
			this.hMargins = parseInt(usedStyle.getPropertyValue('margin-left')) + parseInt(usedStyle.getPropertyValue('margin-right'));
			this.vMargins = parseInt(usedStyle.getPropertyValue('margin-top')) + parseInt(usedStyle.getPropertyValue('margin-bottom'));
			this.hPaddings = parseInt(usedStyle.getPropertyValue('padding-left')) + parseInt(usedStyle.getPropertyValue('padding-right'));
			this.vPaddings = parseInt(usedStyle.getPropertyValue('padding-top')) + parseInt(usedStyle.getPropertyValue('padding-bottom'));
			this.hBorders = parseInt(usedStyle.getPropertyValue('border-left-width')) + parseInt(usedStyle.getPropertyValue('border-right-width'));
			this.vBorders = parseInt(usedStyle.getPropertyValue('border-top-width')) + parseInt(usedStyle.getPropertyValue('border-bottom-width'));
			
			// locate x and y lines together
			if(style["grid-area"]) {
				var parts = getStyle("grid-area").split('/');
				var is_ident = /^\s*([a-z][-_a-z0-9]*)\s*$/i;
				var row_start = parts[0] || 'auto';
				var col_start = parts[1] || (is_ident.test(row_start) ? row_start : 'auto');
				var row_end = parts[2] || (is_ident.test(row_start) ? row_start : 'auto');
				var col_end = parts[3] || (is_ident.test(col_start) ? col_start : 'auto');
				this.parseLocationInstructions(this.specifiedXStart, this.specifiedXEnd, col_start + " / " + col_end);
				this.parseLocationInstructions(this.specifiedYStart, this.specifiedYEnd, row_start + " / " + row_end);
			}
			
			// locate x lines
			if(style["grid-column"] || style["grid-column-start"] || style["grid-column-end"]) {
				var parts = getStyle("grid-column").split('/');
				var start = getStyle("grid-column-start") || parts[0] || 'auto';
				var end   = getStyle("grid-column-end") || parts[1] || parts[0] || start;
				this.parseLocationInstructions(this.specifiedXStart, this.specifiedXEnd, start + " / " + end);
			}
			
			// locate y lines
			if(style["grid-row"] || style["grid-row-start"] || style["grid-row-end"]) {
				var parts = getStyle("grid-row").split('/');
				var start = getStyle("grid-row-start") || parts[0];
				var end   = getStyle("grid-row-end") || parts[1] || parts[0];
				this.parseLocationInstructions(this.specifiedYStart, this.specifiedYEnd, start + " / " + end);
			}
			
			// FIXME: is it possible to understand cascading here, and not use a fixed order?
			// TODO: other positioning methods
			
		},
		
		parseLocationInstructions: function(specifiedStart, specifiedEnd, cssText) {
			
			var unfiltred_value = cssSyntax.parseCSSValue(cssText);
			var value = unfiltred_value.filter(function(o) { return !(o instanceof cssSyntax.WhitespaceToken); });
			value.toCSSString = function() { return unfiltred_value.toCSSString(); }
			var I = 0;
			
			var updateNameOrIndex = function(data) {
				if(value[I] instanceof cssSyntax.IdentifierToken) {
					
					// grid-column: C;
					if(data.name) { 
						// duplicate line-name value
						console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (duplicate line name)");
						this.buggy = true;
						return true;
					}
					data.name = value[I++].value;
					return false;
					
				} else if(value[I] instanceof cssSyntax.NumberToken) {
					
					// grid-column: 3
					data.index = value[I].value|0;
					
					// only accept integer values
					if(value[I].value != data.index) {
						console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (non-integer number)");
						this.buggy = true;
						return true;
					}
					
					// do not accept zero
					if(data.index == 0) {
						console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (line index can't be zero)");
						this.buggy = true;
						return true;
					}
					
					// do not accept negative spans
					if(data.index <= 0 && data.type == LOCATE_SPAN) {
						console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (negative spans not allowed)");
						this.buggy = true;
						return true;
					}
					
					I++;
					
					return false;
					
				} else if(value[I] instanceof cssSyntax.DelimToken && value[I].value == "/") {
					
					// break grid-column-start detection
					return true;
					
				} else {
					
					// this is wrong
					console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (invalid token)");
					this.buggy = true;
					return true;
					
				}
			};
			
			var gatherNameIndexPair = function(data) {

				// first token to be analyzed (may be either kind)
				updateNameOrIndex.call(this, data);
				
				// abort if no second token or buggy
				if(this.buggy || !value[I]) { return; }
			
				// second token to be analyzed (will have to be the other kind)
				updateNameOrIndex.call(this, data);
				
			}
			
			if(!value[I]) { console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (empty declaration)"); this.buggy = true; return; }
			

			// first part
			gridColumnStart: while(true) {
				if(value[I] instanceof cssSyntax.IdentifierToken) {
					
					if(value[I].value == "span") {
						
						if(!value[++I]) {console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (span is not a valid line name, more tokens expected)"); this.buggy = true; return; }
						
						specifiedStart.type = LOCATE_SPAN;
						specifiedStart.name = undefined;
						specifiedStart.index = undefined;
						gatherNameIndexPair.call(this, specifiedStart);
						if(this.buggy) { return; }
						break;
					
					} else if(value[I].value == "auto") {
						
						specifiedStart.type = LOCATE_AUTO;
						specifiedStart.name = undefined;
						specifiedStart.index = undefined;
						I++; break;
						
					} else {
					
						// grid-column: start-line...
						specifiedStart.type = LOCATE_LINE;
						specifiedStart.name = undefined;
						specifiedStart.index = undefined;
						gatherNameIndexPair.call(this, specifiedStart);
						if(this.buggy) { return; }

						break;
					
					}
					
				} else if(value[I] instanceof cssSyntax.DelimToken && value[I].value == "/") {
					
					// this is wrong
					console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (no token to analyze before the slash token)");
					this.buggy = true;
					return;
					
				} else {
					
					specifiedStart.type = LOCATE_LINE;
					gatherNameIndexPair.call(this, specifiedStart);
					if(this.buggy) { return; }
					
					break;
					
				}
				
				break;
			}
			
			// test whether there is a second part
			if(value[I]) {
				
				if(value[I] instanceof cssSyntax.DelimToken && value[I].value == "/") {
					
					// second part will start now
					if(!value[++I]) {
						// unexpected lack token at the start of the second part
						console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (expected at least one more token after the slash token)");
						this.buggy = true; 
						return;
					}
					
				} else {
				
					// unexpected token at the end of the first part
					console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (expected slash / or end of declaration)");
					this.buggy = true; 
					return;
					
				}
				
			} else {
				
				// end of declaration
				if(specifiedStart.type == LOCATE_LINE && specifiedStart.name != undefined && specifiedStart.index == undefined) {
					// a value consisting of a custom ident is duplicated to the other side
					specifiedEnd.type = LOCATE_LINE;
					specifiedEnd.name = specifiedStart.name;
					specifiedEnd.index = undefined;
				} else {
					// the default value (auto) is a 1-line span in all other cases
					specifiedEnd.type = LOCATE_AUTO;
					specifiedEnd.name = undefined;
					specifiedEnd.index = undefined;
				}
				
			}
			
			// second part (after the "/" token)
			gridColumnEnd: while(value[I]) {
				
				if(value[I] instanceof cssSyntax.IdentifierToken) {
					
					if(value[I].value == "span") {
						
						if(!value[++I]) {console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (span is not a valid line name, more tokens expected)"); this.buggy = true; return; }
						
						specifiedEnd.type = LOCATE_SPAN;
						specifiedEnd.name = undefined;
						specifiedEnd.index = undefined;
						gatherNameIndexPair.call(this, specifiedEnd);
						if(this.buggy) { return; }
					
					} else if(value[I].value == "auto") {
						
						specifiedEnd.type = LOCATE_AUTO;
						specifiedEnd.name = undefined;
						specifiedEnd.index = undefined;
						I++; break;
						
					} else {
					
						// grid-column: start-line...
						specifiedEnd.type = LOCATE_LINE;
						specifiedEnd.name = undefined;
						specifiedEnd.name = undefined;
						specifiedEnd.index = undefined;
						gatherNameIndexPair.call(this, specifiedEnd);
						if(this.buggy) { return; }

						break;
					
					}
					
				} else if(value[I] instanceof cssSyntax.DelimToken && value[I].value == "/") {
					
					// this is wrong
					console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (no token to analyze before the slash token)");
					this.buggy = true;
					return;
					
				} else {
					
					specifiedEnd.type = LOCATE_LINE;
					gatherNameIndexPair.call(this, specifiedEnd);
					if(this.buggy) { return; }
					
					break;
					
				}
				
				break;					
			}
			
			if(value[I]) {
				console.error("INVALID DECLARATION: grid-column/row: "+value.toCSSString()+" (tokens after end)");
				this.buggy = true; 
				return;
			}
			
			// If the <integer> is omitted, it defaults to 1.
			//if(specifiedStart.name && specifiedStart.index == undefined) { specifiedStart.index = 1; }
			//if(specifiedEnd.name && specifiedEnd.index == undefined) { specifiedEnd.index = 1; }
			
			// If both grid-row/column-start and grid-row/column-end specify a span, the end span is ignored. 
			if(specifiedEnd.type == LOCATE_SPAN && specifiedStart.type == LOCATE_SPAN) { specifiedEnd.type = LOCATE_AUTO; specifiedEnd.index = undefined; specifiedEnd.name = undefined; }
			
			return [specifiedStart, specifiedEnd];
			
		},
		
	
	};	

	function GridLayout(element) {
	
		// items
		this.element = element; this.element.gridLayout = this;
		this.items = []; // array of GridItem

		// reset
		this.reset();
		
		// other fields
		this.isLayoutScheduled = false;
		
	}
	
	GridLayout.prototype = {
	
		reset: function() {
			
			// layout exclusion style
			this.hlPadding = 0;
			this.hrPadding = 0;
			this.vtPadding = 0;
			this.vbPadding = 0;
			this.rowGap = 0;
			this.colGap = 0;
			
			// computed
			this.xLines = []; // array of array of names
			this.xSizes = []; // array of numbers (in pixels)
			
			this.yLines = [];
			this.ySizes = [];

			this.growX = false;
			this.growY = true;
			this.growDense = false;
			
			this.rcMatrix = []; // array of array of (whatever is not undefined, probably "true")
			
			// specified
			this.specifiedXLines = [];
			this.specifiedXSizes = [];
			
			this.specifiedYLines = [];
			this.specifiedYSizes = [];
			
			this.defaultXSize = new GridTrackBreadth();
			this.defaultYSize = new GridTrackBreadth();

		},
	
		R: function R(x,y) { 
			if(this.growY) {
				// we grow by adding rows (normal behavior)
				return y;
			} else {
				// we grow by adding columns (inversed behavior)
				return x;
			}
		},
		
		C: function C(x,y) { 
			if(this.growY) {
				// we grow by adding rows (normal behavior)
				return x;
			} else {
				// we grow by adding columns (inversed behavior)
				return y;
			}
		},
		
		dispose: function() {
			for(var i = this.items.length; i--;) { var item = this.items[i];
				item.dispose();
			}
			this.element.gridLayout = undefined;
		},
		
		updateFromElement: function() {
			
			// delete old items
			for(var i = this.items.length; i--;) { var item = this.items[i];
				item.dispose();
			}
			
			// add new items
			this.items.length = 0;
			var currentItem = this.element.firstElementChild;
			while(currentItem) {
				
				// add a new grid item for the element
				var newGridItem = new GridItem(currentItem, this);
				newGridItem.updateFromElement();
				this.items.push(newGridItem);
				
				// move to the next element
				currentItem = currentItem.nextElementSibling;
			}
			
			// sort them by css order (desc) then by dom order (asc)
			var sortableItems = this.items.map(function(item, i) { return { item: item, order: item.order, position: i } });
			sortableItems.sort(function(a,b) { if(a.order==b.order) { return a.position-b.position } else if(a.order>b.order) { return +1 } else { return -1; } });
			this.items = sortableItems.map(function(data) { return data.item; });
			
			// reset the style
			this.reset();
			
			// update its own style
			var style = usedStyleOf(this.element); var cssText = '';
			if(cssText=style["grid-template"])         { this.parseGridTemplate(cssText);    }
			if(cssText=style["grid-template-rows"])    { this.parseRowsTemplate(cssText);    }
			if(cssText=style["grid-template-columns"]) { this.parseColumnsTemplate(cssText); }
			if(cssText=style["grid-template-areas"])   { this.parseAreasTemplate(cssText);   }
			if(cssText=style["grid-auto-rows"]) { this.parseAutoRowsBreadth(cssText); }
			if(cssText=style["grid-auto-columns"]) { this.parseAutoColumnsBreadth(cssText); }
			if(cssText=style["grid-auto-flow"]) { // FIXME: should be in a function
				
				// FIXME: not a real parse...
				var tokens = cssText.trim().toLowerCase().split(/\s+/g);
				
				// direction
				if(tokens.indexOf('row')>=0) {
					this.growX = false;
					this.growY = true;
				} else if(tokens.indexOf('column')>=0) {
					this.growX = true;
					this.growY = false;
				}
				
				// algorithm
				// FIXME: should also support 'stack' (wtf)
				if(tokens.indexOf('dense')>=0) {
					this.growDense = true;
				} else {
					this.growDense = false;
				}
				
			}
			if(cssText=style["grid-row-gap"]) { this.parseGridRowGap(cssText); }
			if(cssText=style["grid-column-gap"]) { this.parseGridColumnGap(cssText); }
			if(cssText=style["grid-gap"]) { this.parseGridGap(cssText); }
			
			var usedStyle = style;
			this.hlPadding = parseInt(usedStyle.getPropertyValue('border-left-width')) + parseInt(usedStyle.getPropertyValue('padding-left'));
			this.hrPadding = parseInt(usedStyle.getPropertyValue('border-right-width')) + parseInt(usedStyle.getPropertyValue('padding-right'));
			this.vtPadding = parseInt(usedStyle.getPropertyValue('border-top-width')) + parseInt(usedStyle.getPropertyValue('padding-top'));
			this.vbPadding = parseInt(usedStyle.getPropertyValue('border-bottom-width')) + parseInt(usedStyle.getPropertyValue('padding-bottom'));
			
		},
		
		resetItems: function() {
			for(var i = this.items.length; i--;) {
				var item = this.items[i]; 
				item.xStart = item.xEnd = item.yStart = item.yEnd = -1;
			}
		},
		
		resetLinesToSpecified: function() {
			this.xLines = this.specifiedXLines.slice(0);
			this.xSizes = this.specifiedXSizes.slice(0);
			this.yLines = this.specifiedYLines.slice(0);
			this.ySizes = this.specifiedYSizes.slice(0);
		},
		
		parseTrackBreadthToken: function(cssToken) {
			
			// try to match a pattern
			if(cssToken instanceof cssSyntax.IdentifierToken) {
				
				if(cssToken.value == "auto") {
					return { type: TRACK_BREADTH_AUTO, value:"auto" };
				} else if(cssToken.value == "min-content") {
					return { type: TRACK_BREADTH_MIN_CONTENT, value:"min-content" };
				} else if(cssToken.value == "max-content") {
					return { type: TRACK_BREADTH_MAX_CONTENT, value:"max-content" };
				}
				
			} else if(cssToken instanceof cssSyntax.DimensionToken) {
				
				if(cssToken.unit == "fr") {
					return { type: TRACK_BREADTH_FRACTION, value:cssToken.value };
				} else {
					return { type: TRACK_BREADTH_LENGTH, value:cssUnits.convertToPixels(cssToken.toCSSString(), this.element) };
				}
				
			} else if(cssToken instanceof cssSyntax.PercentageToken) {
				
				return { type: TRACK_BREADTH_PERCENTAGE, value:cssToken.value };
				
			} else {
				
				// TODO: recognize "calc()", too
				
			}
			
			return null;
		},
		
		parseTrackBreadth: function(value, I) {
		
			// TODO: try catch on null parsed token
			var buggy = false;
			
			var currentTrackBreadth = new GridTrackBreadth();
			var parseTrackBreadthToken = function() {
				
				// try to match a pattern
				var result = this.parseTrackBreadthToken(value[I]);
				if(result) { I++; return result; }
				
				// no pattern matched, so the declaration is invalid:
				console.error("INVALID DECLARATION: grid-template-rows/columns: "+value.toCSSString()+" (unrecognized track breadth)");
				buggy = true;
				return;
				
			}
			
			if(value[I] instanceof cssSyntax.Func && value[I].name=="minmax") {
				
				// we need to parse two subvalues
				var value_backup = value;
				var I_backup = I;
				
				// check we have exactly two arguments
				var args = value_backup[I_backup].getArguments();
				if(args.length != 2) { 
					console.error("INVALID DECLARATION: grid-template-rows/columns: "+value_backup.toCSSString()+" (invalid number of arguments to the minmax function)");
					buggy = true;
					return;
				}
				
				// here's the first one:
				value = args[0].filter(function(t) { return !(t instanceof cssSyntax.WhitespaceToken) }); I = 0;				
				var data = parseTrackBreadthToken.call(this);
				currentTrackBreadth.minType = data.type;
				currentTrackBreadth.minValue = data.value;
				
				// here's the second one:
				value = args[1].filter(function(t) { return !(t instanceof cssSyntax.WhitespaceToken) }); I = 0;				
				var data = parseTrackBreadthToken.call(this);
				currentTrackBreadth.maxType  = data.type;
				currentTrackBreadth.maxValue = data.value;
				
				// restore context
				value = value_backup;
				I = I_backup+1;
				
			} else {
			
				// we need to parse only one value
				var data = parseTrackBreadthToken.call(this);
				currentTrackBreadth.minType  = currentTrackBreadth.maxType  = data.type;
				currentTrackBreadth.minValue = currentTrackBreadth.maxValue = data.value;

			}
				
			return { result: currentTrackBreadth, I:I };
			
		},
		
		parseAutoRowsBreadth: function(cssText) {
		
			// TODO: check that no tokens are left when the parsing is done (+columns)
			
			// parse value into tokens:
			var unfiltred_value = cssSyntax.parseCSSValue(cssText);
			var value = unfiltred_value.filter(function(o) { return !(o instanceof cssSyntax.WhitespaceToken); });
			value.toCSSString = function() { return unfiltred_value.toCSSString(); }
			
			// parse tokens into data:
			var data = this.parseTrackBreadth(value, 0);
			if(data.result) { this.defaultYSize = data.result; } else { throw "TODO: better error message"; }
			return;
			
		},
		
		parseAutoColumnsBreadth: function(cssText) {
			
			// parse value into tokens:
			var unfiltred_value = cssSyntax.parseCSSValue(cssText);
			var value = unfiltred_value.filter(function(o) { return !(o instanceof cssSyntax.WhitespaceToken); });
			value.toCSSString = function() { return unfiltred_value.toCSSString(); }
			
			// parse tokens into data:
			var data = this.parseTrackBreadth(value, 0);
			if(data.result) { this.defaultXSize = data.result; } else { throw "TODO: better error message"; }
			return;
			
		},
		
		parseGridTemplate: function(cssText) { // TODO: I used some lazy heuristics here
			var buggy = false; 
		
			// step 1: columns are defined before the slash, if any
			var cssText = cssText.replace(/\/\*(.*?)\*\//g,"");
			var cssTextSections = cssText.split("/");
			if(cssTextSections.length == 2) {
				if(this.parseColumnsTemplate(cssTextSections[0])) { return buggy=true; }
				cssText = cssTextSections[1];
			}
			
			// check that the syntax makes sense
			else if(cssTextSections.length >= 3) { 
				return buggy=true;
			}
			
			// check if we can find any string
			if(/"|'/.test(cssText)) {
			
				// extract strings from the value
				var strings = [];
				cssText = cssText.replace(/\s*("(?:.*?)"|'(?:.*?)')\s*([-_a-zA-Z0-9]*)\s*/g,function(data,str,size) { strings.push(str); return ' '+(size||"auto")+' '; });
				
				// remove duplicate line name blocks
				cssText = cssText.replace(/\)\s*\(/g," ");
				
				// parse rows now
				if(this.parseRowsTemplate(cssText)) { return buggy=true; }
				
				// parse areas now
				if(this.parseAreasTemplate(strings.join(' '))) { return buggy=true; }
			
			} else {
				
				// parse rows now
				if(this.parseRowsTemplate(cssText)) { return buggy=true; }
				
			}
			
			return buggy;
			
		},
		
		parseAreasTemplate: function(cssText) {
			
			// parse value into tokens:
			var unfiltred_value = cssSyntax.parseCSSValue(cssText);
			var value = unfiltred_value.filter(function(o) { return !(o instanceof cssSyntax.WhitespaceToken); });
			value.toCSSString = function() { return unfiltred_value.toCSSString(); }
			
			// parse tokens into data:
			var I = 0;
			var buggy = false;
			var regexp = /^([-_a-zA-Z0-9]+|[.]+)\s*/;
			var grid = [], areas = Object.create(null);
			while(value[I]) {
				
				var str = ''+value[I++].value;
				
				var columns = [];
				while(str!=='') {
					
					// extract next token
					var data = regexp.exec(str); if(!data || data.length != 2) { return buggy=true; }
					str = str.substr(data[0].length); var cell = data[1];
					
					// update cell max pos (ignore empty cells)
					if(cell!='.' && cell[0]!='.') {
						if(!areas[cell]) { areas[cell] = { xStart:columns.length, xEnd:columns.length+1, yStart: I-1, yEnd: I }; }
						if(areas[cell].xStart > columns.length) { return buggy=true; } 
						if(areas[cell].yStart > I-1) { return buggy=true; }
						areas[cell].xEnd = Math.max(areas[cell].xEnd, columns.length+1);
						areas[cell].yEnd = Math.max(areas[cell].yEnd, I);
					}
					// add the cell to this row
					columns.push(data[1]);
					
				}
				
				grid.push(columns);
				
			}
			
			// validate areas
			for(var a in areas) {
				var area = areas[a];
				for(var y = area.yStart; y<area.yEnd; y++) {
					for(var x = area.xStart; x<area.xEnd; x++) {
						if(grid[y][x] != a) { return buggy=true; }
					}
				}
			}
			
			// add autogenerated line names
			for(var a in areas) {
				var area = areas[a];
				
				// make sure we have enough y lines for the areas to fit:
				while(this.specifiedYLines.length<=area.yEnd) {
					this.specifiedYLines.push([]);
					this.specifiedYSizes.push(this.defaultYSize);
				}
				
				// add the y line name
				this.specifiedYLines[area.yStart].push(a+"-start");
				this.specifiedYLines[area.yEnd].push(a+"-end");
				
				// make sure we have enough x lines for the areas to fit:
				while(this.specifiedXLines.length<=area.xEnd) {
					this.specifiedXLines.push([]);
					this.specifiedXSizes.push(this.defaultXSize);
				}
				
				// add the x line name
				this.specifiedXLines[area.xStart].push(a+"-start");
				this.specifiedXLines[area.xEnd].push(a+"-end");
				
			}

		},
		
		parseTrackDefinitions: function(lineNames, trackBreadths, cssText) {
			
			// replace the repeat() function by its full representation
			cssText = cssText.replace(/\[/g,'(').replace(/\]/g,')').replace(/repeat\(\s*([0-9]+)\s*\,((?:\([^()]*\)|[^()])+)\)/gi, function(s, n, v) {
				var result = ' ';
				for(var i = parseInt(n); i--;) { 
					result += v + ' ';
				}
				return result;
			});
			'TODO: improve the repeat support';
			
			// merge duplicate name-definitions
			cssText = cssText.replace(/\)\s*\(/g, ' ');
			'TODO: improve the duplicate name-definitions support';
			
			// parse value into tokens:
			var unfiltred_value = cssSyntax.parseCSSValue(cssText);
			var value = unfiltred_value.filter(function(o) { return !(o instanceof cssSyntax.WhitespaceToken); });
			value.toCSSString = function() { return unfiltred_value.toCSSString(); }
			
			// parse tokens into data:
			var I = 0;
			var buggy = false;
			
			var parseLineNames = function() {
				
				var currentLineNames = []; // array of string
				
				if(value[I] instanceof cssSyntax.SimpleBlock && value[I].name == "(") {
					var tokens = value[I].value;
					for(var J=tokens.length; J--;) {
						
						if (tokens[J] instanceof cssSyntax.IdentifierToken) {
							currentLineNames.push(tokens[J].value);
						} else if (tokens[J] instanceof cssSyntax.WhitespaceToken) {
							// ignore
						} else {
							// unrecognized token, so the declaration is invalid:
							console.error("INVALID DECLARATION: grid-template-rows/columns: "+value.toCSSString()+" (unrecognized line name)");
							buggy = true;
							return;
						}
						
					}
					
					I++;
				}
				
				lineNames.push(currentLineNames); 
				currentLineNames = [];
				
			};
			
			var parseTrackBreadth = function() {
				
				var data = this.parseTrackBreadth(value, I);
				trackBreadths.push(data.result);
				I = data.I;
				
			};
			
			parseLineNames(); 
			while(value[I]) {
				parseTrackBreadth.call(this); if(buggy) { break; }
				parseLineNames(); if(buggy) { break; }
			}
			
		},
		
		parseColumnsTemplate: function(cssText) {
			return this.parseTrackDefinitions(this.specifiedXLines, this.specifiedXSizes, cssText);
		},
		
		parseRowsTemplate: function(cssText) {
			return this.parseTrackDefinitions(this.specifiedYLines, this.specifiedYSizes, cssText);
		},
		
		parseTracksTemplate: function(columnsTemplate, rowsTemplate, areasTemplate) {
			if(rowsTemplate   ) this.parseRowsTemplate(rowsTemplate);
			if(columnsTemplate) this.parseColumnsTemplate(columnsTemplate);
			if(areasTemplate  ) this.parseAreasTemplate(areasTemplate);
		},

		parseGridRowGap: function(cssText) {
			this.rowGap = cssUnits.convertToPixels(cssText, this.element, { isHeightRelated: true });
		},

		parseGridColumnGap: function(cssText) {
			this.colGap = cssUnits.convertToPixels(cssText, this.element, { isWidthRelated: true });
		},

		parseGridGap: function(cssText) {
			var values = cssText.trim().split(/\s+/);
			this.parseGridRowGap(values[0]);
			this.parseGridColumnGap(values[1] || cssText);
		},
		
		buildExplicitMatrix: function() {
			
			// reset
			this.resetLinesToSpecified();
			this.rcMatrix = [];
			
			// simple autogrow
			if(this.growY) {
				this.ensureRows(this.ySizes.length);
				this.ensureColumns(this.xSizes.length);
			} else {
				this.ensureColumns(this.xSizes.length);
				this.ensureRows(this.ySizes.length);
			}
			
		}, 
		
		buildImplicitMatrix: function() { /* see http://dev.w3.org/csswg/css-grid/#auto-placement-algo */
		
			// start by building the explicit matrix
			this.buildExplicitMatrix();
			
			// [1] position non-auto items
			this.positionNonAutoItems();
			
			// [2] position auto-in-column-only items
			this.positionAutoInColumnOnlyItems();
			
			// [3] make room for implicit tracks
			this.autoGrow();
			
		},
		
		ensureRows: function(yEnd) {
			
			if(this.growY) {
				
				// add rows as necessary
				while(this.ySizes.length<yEnd) {
					this.ySizes.push(this.defaultYSize);
				}
				while(this.rcMatrix.length<yEnd) {
					this.rcMatrix.push([]);
				}
				
			} else {
				
				// add rows as necessary
				while(this.ySizes.length<yEnd) {
					this.ySizes.push(this.defaultYSize);
				}
				
				// walk through columns
				for(var x = this.rcMatrix.length; x--;) {
				
					// add rows as necessary
					if(this.rcMatrix[x].length < yEnd) {
						this.rcMatrix[x].length = yEnd;
					}
					
				}
				
			}
			
		},
		
		ensureColumns: function(xEnd) {
			
			if(this.growY) {
			
				// add columns as necessary
				while(this.xSizes.length<xEnd) {
					this.xSizes.push(this.defaultXSize);
				}
				
				// walk through rows
				for(var y = this.rcMatrix.length; y--;) {
				
					// add columns as necessary
					if(this.rcMatrix[y].length < xEnd) {
						this.rcMatrix[y].length = xEnd;
					}
					
				}
			
			} else {
				
				// add columns as necessary
				while(this.xSizes.length<xEnd) {
					this.xSizes.push(this.defaultXSize);
				}
				while(this.rcMatrix.length<xEnd) {
					this.rcMatrix.push([]);
				}
			
			}
		},
		
		markAsOccupied: function(item) {
			
			var xStart = item.xStart;
			var yStart = item.yStart;
			var xEnd = item.xEnd;
			var yEnd = item.yEnd;
		
			// let's check the rcMatrix mode we're in:
			if(this.growY) {
				
				// add rows as necessary
				this.ensureRows(yEnd);
				
				// walk through rows
				for(var y = yStart; y<yEnd; y++) {
				
					// add columns as necessary
					if(this.rcMatrix[y].length < xEnd-1) {
						this.rcMatrix[y].length = xEnd-1;
					}
					
					// walk through columns
					for(var x = xStart; x<xEnd; x++) {
						
						// the cell is occupied
						this.rcMatrix[y][x] = item;
						
					}
				}
				
			} else {
				
				// add columns as necessary
				this.ensureColumns(xEnd);
				
				// walk through rows
				for(var x = xStart; x<xEnd; x++) {
				
					// add rows as necessary
					if(this.rcMatrix[x].length < yEnd-1) {
						this.rcMatrix[x].length = yEnd-1;
					}
					
					// walk through rows
					for(var y = yStart; y<yEnd; y++) {
						
						// the cell is occupied
						this.rcMatrix[x][y] = item;
						
					}
				}
				
			}

		},
		
		positionNonAutoItems: function() {
			
			for(var i=0, l=this.items.length; i<l; i++) {
				var item = this.items[i];
				
				// if the element has a specific column associated to it
				if(item.specifiedXStart.type == LOCATE_LINE) {
					
					// if the element has a specified row associated to it
					if(item.specifiedYStart.type == LOCATE_LINE) {
						
						// find the start position (x axis)
						var xStart = this.findXStart(item);
						
						// find the start position (y axis)
						var yStart = this.findYStart(item);
						
						// find the end position (x axis)
						var xEnd = this.findXEnd(item);
						
						// find the end position (y axis)
						var yEnd = this.findYEnd(item);
						
						// we're done! this is so cool dude!
						item.xStart = xStart;
						item.yStart = yStart;
						item.xEnd = xEnd;
						item.yEnd = yEnd;
						
						// we should fill the explicit matrix now!
						this.markAsOccupied(item);
						
					}
					
				}
				
			}
			
		},
		
		positionAutoInColumnOnlyItems: function() {
			
			if(this.growY) {
				
				for(var i=0, l=this.items.length; i<l; i++) {
					var item = this.items[i];
					
					// if the element has a specified row associated to it, but is not positioned yet
					if(item.specifiedYStart.type == LOCATE_LINE && (item.yStart==-1)) {
						
						// find the start position (y axis)
						var yStart = this.findYStart(item);
						
						// find the end position (y axis)
						var yEnd = this.findYEnd(item);
						
						// assumption: X is either AUTO + SPAN or AUTO + AUTO
						var spanX = 1;
						if(item.specifiedXEnd.type == LOCATE_SPAN) {
							if(item.specifiedXEnd.name === undefined) {
								// The span is defined as this value
								spanX = item.specifiedXEnd.index;
							} else {
								// If the grid item has an automatic position and a grid span for a named line in a given dimension, instead treat the grid span as one.
								spanX = 1; console.error('[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+');
							}
						}
						
						// add rows as necessary
						this.ensureRows(yEnd);
						
						// walk through columns to find a suitable position
						IncrementalColumnAttempts: for(var sx = 0;;sx++) {
							
							for(var x = sx+spanX-1; x>=sx; x--) {
								for(var y = yStart; y<yEnd; y++) {
								
									// if the cell is occupied
									if(this.rcMatrix[y][x]) {
										continue IncrementalColumnAttempts;
									}
								
								}
							}
							
							break;
							
						}
						
						var xStart = sx;
						var xEnd = sx+spanX;
						
						// we're done! this is so cool dude!
						item.xStart = xStart;
						item.yStart = yStart;
						item.xEnd = xEnd;
						item.yEnd = yEnd;
						
						// we should fill the explicit matrix now!
						this.markAsOccupied(item);
						
					}
					
				}
				
			} else {
				
				for(var i=0, l=this.items.length; i<l; i++) {
					var item = this.items[i];
					
					// if the element has a specified column associated to it, but is not positioned yet
					if(item.specifiedXStart.type == LOCATE_LINE && (item.xStart==-1)) {
						
						// find the start position (x axis)
						var xStart = this.findXStart(item);
						
						// find the end position (x axis)
						var xEnd = this.findXEnd(item);
						
						// assumption: Y is either AUTO + SPAN or AUTO + AUTO
						var spanY = 1;
						if(item.specifiedYEnd.type == LOCATE_SPAN) {
							if(item.specifiedYEnd.name === undefined) {
								// The span is defined as this value
								spanY = item.specifiedYEnd.index;
							} else {
								// If the grid item has an automatic position and a grid span for a named line in a given dimension, instead treat the grid span as one.
								spanY = 1;
							}
						}
						
						// add rows as necessary
						this.ensureColumns(xEnd);
						
						// walk through columns to find a suitable position
						IncrementalRowAttempts: for(var sy = 0;;sy++) {
							
							for(var y = sy+spanY-1; y>=sy; y--) {
								for(var x = xStart; x<xEnd; x++) {
								
									// if the cell is occupied
									if(this.rcMatrix[x][y]) {
										continue IncrementalRowAttempts;
									}
								
								}
							}
							
							break;
							
						}
						
						var yStart = sy;
						var yEnd = sy+spanY;
						
						// we're done! this is so cool dude!
						item.xStart = xStart;
						item.yStart = yStart;
						item.xEnd = xEnd;
						item.yEnd = yEnd;
						
						// we should fill the explicit matrix now!
						this.markAsOccupied(item);
						
					}
					
				}
				
			}
	
		},
		
		autoGrow: function() {
			
			// helpers
			var growX = function(index) {
				while(index >= this.xLines.length) {
					this.xLines.push(['*']);
					this.xSizes.push(this.defaultXSize);
				}
			}
			
			var growY = function(index) {
				while(index >= this.yLines.length) {
					this.yLines.push(['*']);
					this.ySizes.push(this.defaultYSize);
				}
			}
			
			// reset the lines to the specified ones if necessary
			this.resetLinesToSpecified(); // TODO: why?
			
			// ensure there's at least one cell
			growX.call(this,1); growY.call(this,1);
			
			// check if an item is explicitly positioned outside the explicit grid, and expand it if needed
			for(var i = this.items.length; i--;) {
				
				var item = this.items[i];
				
				// CONSIDER: items already positioned
				if(item.xEnd > 0) { growX.call(this,item.xEnd); }
				if(item.yEnd > 0) { growY.call(this,item.yEnd); }
				if(item.xEnd > 0 && item.yEnd > 0) { continue; }
				
				// CONSIDER: elements with a known location
				
				// (x axis):
				if(item.specifiedXEnd.type == LOCATE_LINE || item.specifiedXStart.type == LOCATE_LINE) {
					
					var xStart = this.findXStart(item);
					var xEnd = this.findXEnd(item);
					growX.call(this,xEnd);
					
				}
				
				// (y axis):
				if(item.specifiedYEnd.type == LOCATE_LINE || item.specifiedYStart.type == LOCATE_LINE) {
					
					var yStart = this.findYStart(item);
					var yEnd = this.findYEnd(item);
					if(yEnd <= yStart) { yEnd = yStart+1; }
					growY.call(this,yEnd);
					
				}
				
				// CONSIDER: known spans
				// // NOTE: I don't support "grid-row/column-start: span X";
				if(item.specifiedXEnd.type == LOCATE_SPAN && item.specifiedXEnd.name===undefined) {
					growX.call(this,item.specifiedXEnd.index);
				}
				if(item.specifiedYEnd.type == LOCATE_SPAN && item.specifiedYEnd.name===undefined) {
					growY.call(this,item.specifiedYEnd.index);
				}
				
			}
			
			// grow the grid matrix:
			if(this.growY) {
				while(this.ySizes.length>this.rcMatrix.length) {
					this.rcMatrix.push([]);
				}
				for(var r=this.rcMatrix.length; r--;) {
					this.rcMatrix[r].length = this.xSizes.length;
				}
			} else {
				while(this.xSizes.length>this.rcMatrix.length) {
					this.rcMatrix.push([]);
				}
				for(var r=this.rcMatrix.length; r--;) {
					this.rcMatrix[r].length = this.ySizes.length;
				}
			}
			
		},
		
		scheduleRelayout: function() {
			var This = this;
			if(!This.isLayoutScheduled) {
				This.isLayoutScheduled = true;
				requestAnimationFrame(function() {
					try {
						var savedScrolls = getScrollStates();
						This.revokePolyfilledStyle();
						This.updateFromElement();
						This.performLayout();
						This.generatePolyfilledStyle();
						savedScrolls.forEach(function(d) {
							d.element.scrollTop = d.top;
							d.element.scrollLeft = d.left;
						});
					} finally {
						This.isLayoutScheduled = false;
					}
				});
			}
			//-----------------------------------------------------------
			function getScrollStates() {
				var states = [];
				var element = This.element;
				while(element = element.parentNode) {
					if("scrollTop" in element) {
						states.push({ element: element, left: element.scrollLeft, top: element.scrollTop });
					}
				}
				return states;
			}
		},
		
		performLayout: function() {
		
			// process non-automatic items
			this.buildImplicitMatrix();

			// position the remaining grid items. 
			var cursor = { x: 0, y: 0 };

			if(this.growY) {
				
				//For each grid item that hasnt been positioned by the previous steps, in order-modified document order:
				for(var i=0; i<this.items.length; i++) {
					var item = this.items[i]; if(item.xEnd!=-1 && item.yEnd!=-1) { continue; }
					
					// reset the cursor if the algorithm is set to 'dense'
					if(this.growDense) { cursor = { x: 0, y: 0 }; }
					
					//If the item has a definite column position: 
					if(item.specifiedXStart.type == LOCATE_LINE) {
					
						// 1. Set the column position of the cursor to be equal to the inline-start index of the grid item. 
						var xStart = this.findXStart(item); if(cursor.x > xStart) { cursor.y++; } cursor.x = xStart;
						var xEnd = this.findXEnd(item); if(xStart>=xEnd) { xEnd=xStart+1}
						item.xStart=xStart; item.xEnd=xEnd;
						
						// assumption: Y is either AUTO + SPAN or AUTO + AUTO
						var spanY = 1;
						if(item.specifiedYEnd.type == LOCATE_SPAN) {
							if(item.specifiedYEnd.name === undefined) {
								// The span is defined as this value
								spanY = item.specifiedYEnd.index;
							} else {
								// If the grid item has an automatic position and a grid span for a named line in a given dimension, instead treat the grid span as one.
								spanY = 1;
							}
						}

						// 2. Increment the auto-placement cursors row position until a value is found where the grid item does not overlap any occupied grid cells (creating new rows in the implicit grid as necessary).
						IncrementalRowAttempts: while(true) {
							
							// make room for the currently attempted position
							this.ensureRows(cursor.y+spanY);
							
							// check the non-overlap condition
							for(var y = cursor.y+spanY-1; y>=cursor.y; y--) {
								for(var x = xStart; x<xEnd; x++) {
									
									// if the cell is occupied
									if(this.rcMatrix[y][x]) {
									
										// move to the next row
										cursor.y=y+1; continue IncrementalRowAttempts;
										
									}
									
								}
							}
							
							break;
							
						}
						
						// settle the position
						item.xStart = xStart;
						item.xEnd = xEnd;
						item.yStart = cursor.y;
						item.yEnd = cursor.y+spanY;
						
						this.markAsOccupied(item);					
						
					} else { // If the item has an automatic grid position in both axes: 
						
						// assumption: X is either AUTO + SPAN or AUTO + AUTO
						var spanX = 1;
						if(item.specifiedXEnd.type == LOCATE_SPAN) {
							if(item.specifiedXEnd.name === undefined) {
								// The span is defined as this value
								spanX = item.specifiedXEnd.index;
							} else {
								// If the grid item has an automatic position and a grid span for a named line in a given dimension, instead treat the grid span as one.
								spanX = 1; console.error('[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+');
							}
						}
						
						// assumption: Y is either AUTO + SPAN or AUTO + AUTO
						var spanY = 1;
						if(item.specifiedYEnd.type == LOCATE_SPAN) {
							if(item.specifiedYEnd.name === undefined) {
								// The span is defined as this value
								spanY = item.specifiedYEnd.index;
							} else {
								// If the grid item has an automatic position and a grid span for a named line in a given dimension, instead treat the grid span as one.
								spanY = 1;
							}
						}
						
						// Increment the auto-placement cursors row/column position (creating new rows in the implicit grid as necessary)
						var nextStep = function() {
							cursor.x++; if(cursor.x+spanX>this.rcMatrix[0].length) { cursor.y++; this.ensureRows(cursor.y + spanY); cursor.x=0; }
							return true;
						}

						// 1. Increment the column position of the auto-placement cursor until this items grid area does not overlap any occupied grid cells
						IncrementalYXPositionAttempts: while(true) {
							
							// make room for the currently attempted position
							this.ensureRows(cursor.y+spanY);
							
							// check the non-overlap condition
							for(var y = cursor.y+spanY-1; y>=cursor.y; y--) {
								for(var x = cursor.x+spanX-1; x>=cursor.x; x--) {
									
									// if the cell is occupied
									if(this.rcMatrix[y][x]) {
									
										// move to the next row/column
										nextStep.call(this); continue IncrementalYXPositionAttempts;
										
									}
									
								}
							}
							
							break;
							
							
						}
						
						// settle the position
						item.xStart = cursor.x;
						item.xEnd = cursor.x+spanX;
						item.yStart = cursor.y;
						item.yEnd = cursor.y+spanY;
						
						this.markAsOccupied(item);
						
					}
					
				}
				
			} else {
				
				//For each grid item that hasnt been positioned by the previous steps, in order-modified document order:
				for(var i=0; i<this.items.length; i++) {
					var item = this.items[i]; if(item.xEnd!=-1 && item.yEnd!=-1) { continue; }
					
					// reset the cursor if the algorithm is set to 'dense'
					if(this.growDense) { cursor = { x: 0, y: 0 }; }
					
					//If the item has a definite row position: 
					if(item.specifiedYStart.type == LOCATE_LINE) {
					
						// 1. Set the column position of the cursor to be equal to the inline-start index of the grid item. 
						var yStart = this.findYStart(item); if(cursor.y > yStart) { cursor.x++; } cursor.y = yStart;
						var yEnd = this.findYEnd(item); if(yStart>=yEnd) { yEnd=yStart+1}
						item.yStart=yStart; item.yEnd=yEnd;
						
						// assumption: X is either AUTO + SPAN or AUTO + AUTO
						var spanX = 1;
						if(item.specifiedXEnd.type == LOCATE_SPAN) {
							if(item.specifiedXEnd.name === undefined) {
								// The span is defined as this value
								spanX = item.specifiedXEnd.index;
							} else {
								// If the grid item has an automatic position and a grid span for a named line in a given dimension, instead treat the grid span as one.
								spanX = 1; console.error('[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+');
							}
						}

						// 2. Increment the auto-placement cursors row position until a value is found where the grid item does not overlap any occupied grid cells (creating new rows in the implicit grid as necessary).
						IncrementalColumnAttempts: while(true) {
							
							// make room for the currently attempted position
							this.ensureColumns(cursor.x+spanX);
							
							// check the non-overlap condition
							for(var x = cursor.x+spanX-1; x>=cursor.x; x--) {
								for(var y = yStart; y<yEnd; y++) {
									
									// if the cell is occupied
									if(this.rcMatrix[x][y]) {
									
										// move to the next row
										cursor.x=x+1; continue IncrementalColumnAttempts;
										
									}
									
								}
							}
							
							break;
							
						}
						
						// settle the position
						item.yStart = yStart;
						item.yEnd = yEnd;
						item.xStart = cursor.x;
						item.yEnd = cursor.x+spanX;
						
						this.markAsOccupied(item);					
						
					} else { // If the item has an automatic grid position in both axes: 
						
						// assumption: Y is either AUTO + SPAN or AUTO + AUTO
						var spanY = 1;
						if(item.specifiedYEnd.type == LOCATE_SPAN) {
							if(item.specifiedYEnd.name === undefined) {
								// The span is defined as this value
								spanY = item.specifiedYEnd.index;
							} else {
								// If the grid item has an automatic position and a grid span for a named line in a given dimension, instead treat the grid span as one.
								spanY = 1;
							}
						}
						
						// assumption: X is either AUTO + SPAN or AUTO + AUTO
						var spanX = 1;
						if(item.specifiedXEnd.type == LOCATE_SPAN) {
							if(item.specifiedXEnd.name === undefined) {
								// The span is defined as this value
								spanX = item.specifiedXEnd.index;
							} else {
								// If the grid item has an automatic position and a grid span for a named line in a given dimension, instead treat the grid span as one.
								spanX = 1; console.error('[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+');
							}
						}
						
						// Increment the auto-placement cursors row/column position (creating new rows in the implicit grid as necessary)
						var nextStep = function() {
							cursor.y++; if(cursor.y+spanY>this.rcMatrix[0].length) { cursor.x++; this.ensureRows(cursor.x + spanX); cursor.y=0; }
							return true;
						}

						// 1. Increment the column position of the auto-placement cursor until this items grid area does not overlap any occupied grid cells
						IncrementalXYPositionAttempts: while(true) {
							
							// make room for the currently attempted position
							this.ensureColumns(cursor.x+spanX);
							
							// check the non-overlap condition
							for(var x = cursor.x+spanX-1; x>=cursor.x; x--) {
								for(var y = cursor.y+spanY-1; y>=cursor.y; y--) {
									
									// if the cell is occupied
									if(this.rcMatrix[x][y]) {
									
										// move to the next row/column
										nextStep.call(this); continue IncrementalXYPositionAttempts;
										
									}
									
								}
							}
							
							break;
							
							
						}
						
						// settle the position
						item.xStart = cursor.x;
						item.xEnd = cursor.x+spanX;
						item.yStart = cursor.y;
						item.yEnd = cursor.y+spanY;
						
						this.markAsOccupied(item);
						
					}
					
				}

			}
			this.computeAbsoluteTrackBreadths();

			
			
		},
		
		computeAbsoluteTrackBreadths: function() {
		
			///////////////////////////////////////////////////////////
			// hide child elements, to get free width/height
			///////////////////////////////////////////////////////////
			var runtimeStyle = createRuntimeStyle('no-children', this.element);
			runtimeStyle.set(this.element, {
				"border"       : "none",
				"padding"      : "0px",
				"min-height"   : "0px",
			});
			for(var i = this.items.length; i--;) {
				runtimeStyle.set(this.items[i],{"display":"none"});
			}
			
			///////////////////////////////////////////////////////////
			// hide child elements, to get free width/height
			///////////////////////////////////////////////////////////
			var LIMIT_IS_INFINITE = 1;		
			var infinity = 9999999.0;
			var rowCount = this.growY ? this.rcMatrix.length : this.rcMatrix[0].length;
			var colCount = this.growY ? this.rcMatrix[0].length : this.rcMatrix.length;
			var fullWidth = this.element.offsetWidth - this.hlPadding - this.hrPadding;
			var fullHeight = this.element.offsetHeight - this.vtPadding - this.vbPadding;
			var fullDistributableWidth = Math.max(0, fullWidth - Math.max(0, colCount - 1) * this.colGap);
			var fullDistributableHeight = Math.max(0, fullHeight - Math.max(0, rowCount - 1) * this.rowGap);
			
			///////////////////////////////////////////////////////////
			// show child elements again
			///////////////////////////////////////////////////////////
			runtimeStyle.revoke();
			
			// 
			// 10.3  Initialize Track Sizes
			// 
			var initializeFromConstraints = function(v) {
				
				var base = 0, limit = infinity;
				switch(v.minType) {
					
					// For fixed track sizes, resolve to an absolute length and use that size. 
					case TRACK_BREADTH_LENGTH:      base = v.minValue; break;
					case TRACK_BREADTH_PERCENTAGE:  base = v.minValue*fullSize/100; break;
					
				}
				
				switch(v.maxType) {
					
					// For fixed track sizes, resolve to an absolute length and use that size. 
					case TRACK_BREADTH_LENGTH:      limit = v.minValue; break;
					case TRACK_BREADTH_PERCENTAGE:  limit = v.minValue*fullSize/100; break;
					
					// For flexible track sizes, use the tracks initial base size as its initial growth limit.  
					case TRACK_BREADTH_FRACTION:    limit = base; break;
					
					// For intrinsic track sizes, use an initial growth limit of infinity. 
					default:                        limit = infinity; break;
					
				}
				
				return { base:base, limit:limit, breadth:0, flags:((limit==infinity)?LIMIT_IS_INFINITE:0)|0 };
				
			}
			
			//
			// Equal distribution algorithm
			//
			var distributeEquallyAmongTracks = function distributeEquallyAmongTracks(xSizes, kind, tracks, spaceToDistribute, enforceLimit) {
				// Distribute space to base sizes
				var trackAmount = tracks.length;
				var spacePerTrack = spaceToDistribute/trackAmount;
				if(kind=='base') {
				
					// if we enforce the limit, grow up to the most limitating track
					if(enforceLimit) {
						for(var t = tracks.length; t--;) { var cx = tracks[t].x;
							
							// find the lowest acceptable increase for all tracks
							var newBase = xSizes[cx].base + spacePerTrack;
							
							// if limits are enfo
							if(enforceLimit && (xSizes[cx].flags & LIMIT_IS_INFINITE == 0) && newBase > xSizes[cx].limit) {
								spacePerTrack -= newBase - xSizes[cx].limit;
							}
						}
					}
					
					for(var t = tracks.length; t--;) { var cx = tracks[t].x;
						xSizes[cx].base += spacePerTrack;
					}
					
				} else if(kind == 'limit') {
				
					// Update the tracks' affected sizes by folding in the calculated increase so that the next round of space distribution will account for the increase.
					for(var t = tracks.length; t--;) { var cx = tracks[t].x;
						// If the growth limit is infinite...
						if(xSizes[cx].flags & LIMIT_IS_INFINITE) {
							// set it to the tracks base size plus the calculated increase
							if(xSizes[cx].limit == infinity) {
								xSizes[cx].limit = xSizes[cx].base + spacePerTrack;
							} else {
								xSizes[cx].limit += spacePerTrack; // TODO: THERE IS A BUG HERE ?
							}
						} else {
							// otherwise just increase the limit
							xSizes[cx].limit += spacePerTrack;
						}
					}
				}
			}

			
			// 
			// 10.4  Resolve Content-Based Track Sizing Functions
			// 
			var computeTrackBreadth = function(xSizes, specifiedSizes, getMinWidthOf, getMaxWidthOf, getXStartOf, getXEndOf) {
				
				// For each track
				var items_done = 0; // items already consumed for this algorithm
				for(var x = specifiedSizes.length; x--;) {
				
					var dontCountMaxItems = false;
					
					// If the track has a min-content min track sizing function
					if(specifiedSizes[x].minType == TRACK_BREADTH_MIN_CONTENT || specifiedSizes[x].minType == TRACK_BREADTH_AUTO) {
						
						// Consider the items in it with a span of 1: 
						for(var i = this.items.length; i--;) { var item = this.items[i]; var item_xStart = getXStartOf(item); var item_xEnd = getXEndOf(item);
							if(item_xStart>x || item_xEnd<=x || item_xEnd-item_xStart != 1) continue;
							
							// Set its base size to the maximum of the items min-content contributions. 
							xSizes[x].base = Math.max(xSizes[x].base, getMinWidthOf(item)); items_done++; dontCountMaxItems=true;
							
						}
						
					}
					
					// If the track has a max-content min track sizing function
					else if(specifiedSizes[x].minType == TRACK_BREADTH_MAX_CONTENT) {
						
						// Consider the items in it with a span of 1: 
						for(var i = this.items.length; i--;) { var item = this.items[i]; var item_xStart = getXStartOf(item); var item_xEnd = getXEndOf(item);
							if(item_xStart>x || item_xEnd<=x || item_xEnd-item_xStart != 1) continue;
							
							// Set its base size to the maximum of the items max-content contributions. 
							xSizes[x].base = Math.max(xSizes[x].base, getMaxWidthOf(item)); items_done++; dontCountMaxItems=true;
							
						}
						
					}
					
					// If the track has a min-content max track sizing function
					if(specifiedSizes[x].maxType == TRACK_BREADTH_MIN_CONTENT) {
						
						// Consider the items in it with a span of 1: 
						for(var i = this.items.length; i--;) { var item = this.items[i]; var item_xStart = getXStartOf(item); var item_xEnd = getXEndOf(item);
							if(item_xStart>x || item_xEnd<=x || item_xEnd-item_xStart != 1) continue;
							
							// Set its growth limit to the maximum of the items min-content contributions. 
							if(xSizes[x].limit == infinity) { xSizes[x].limit = getMinWidthOf(item); }
							else { xSizes[x].limit = Math.max(xSizes[x].limit, getMinWidthOf(item)); }
							
							if(!dontCountMaxItems) { items_done++; }
							
						}
						
					} 
					
					// If the track has a max-content max track sizing function
					else if(specifiedSizes[x].maxType == TRACK_BREADTH_MAX_CONTENT || specifiedSizes[x].minType == TRACK_BREADTH_AUTO) {
						
						// Consider the items in it with a span of 1: 
						for(var i = this.items.length; i--;) { var item = this.items[i]; var item_xStart = getXStartOf(item); var item_xEnd = getXEndOf(item);
							if(item_xStart>x || item_xEnd<=x || item_xEnd-item_xStart != 1) continue;
							
							// Set its growth limit to the maximum of the items max-content contributions. 
							if(xSizes[x].limit == infinity) { xSizes[x].limit = getMaxWidthOf(item); }
							else { xSizes[x].limit = Math.max(xSizes[x].limit, getMaxWidthOf(item)); }
							
							if(!dontCountMaxItems) { items_done++; }
							
						}
						
					}
					
					// update infinity flag
					if(xSizes[x].limit != infinity) {
						xSizes[x].flags = xSizes[x].flags & ~LIMIT_IS_INFINITE;
					}
					
				}
				
				// Next, consider the items with a span of 2 that do not span a track with a flexible sizing function: 
				// Repeat incrementally for items with greater spans until all items have been considered.
				for(var span = 2; items_done < this.items.length && span <= specifiedSizes.length; span++) {
					ItemLoop: for(var i = this.items.length; i--;) { var item = this.items[i]; var item_xStart = getXStartOf(item); var item_xEnd = getXEndOf(item);
						if(item_xEnd-item_xStart != span) continue ItemLoop;
						
						// gather some pieces of data about the tracks
						var full_base = 0; var full_limit = 0;
						for(var cx = item_xStart; cx<item_xEnd; cx++) { 
							
							// 1. we want to make sure none is flexible
							if(specifiedSizes[cx].maxType == TRACK_BREADTH_FRACTION) continue ItemLoop;
							
							// 2. compute aggregated sizes
							full_base += xSizes[cx].base;
							full_limit += xSizes[cx].limit;
							
						}
						if(full_limit > infinity) full_limit=infinity;
						
						var distributeFreeSpace = function(requiredSpace, kind /*'base'|'limit'*/, target /*'min-content'|'max-content'*/) {
							
							while (true) {
							
								// compute the required extra space
								var spaceToDistribute = requiredSpace;
								for(var cx = item_xStart; cx<item_xEnd; cx++) {
									spaceToDistribute -= xSizes[cx][kind];
								}
								
								// if no space to distribute, just lock auto columns:
								if(spaceToDistribute <= 1/1024) { //due to double precision, this may never reach perfect 0
									for(var cx = item_xStart; cx<item_xEnd; cx++) {
										if(xSizes[cx].limit == infinity) {
											xSizes[cx].limit = xSizes[cx].base;
										}
									}
									return;
								}

								// sort rows by growth limit
								var rows_and_limits = [];
								for(var cx = item_xStart; cx<item_xEnd; cx++) {
									rows_and_limits.push({ 
										x:cx, 
										base:xSizes[cx].base,
										limit:xSizes[cx].limit,
										minIsMinContent: specifiedSizes[cx].minType == TRACK_BREADTH_MIN_CONTENT || specifiedSizes[cx].minType == TRACK_BREADTH_AUTO,
										minIsMaxContent: specifiedSizes[cx].minType == TRACK_BREADTH_MAX_CONTENT,
										maxIsMinContent: specifiedSizes[cx].maxType == TRACK_BREADTH_MIN_CONTENT,
										maxIsMaxContent: specifiedSizes[cx].maxType == TRACK_BREADTH_MAX_CONTENT || specifiedSizes[cx].maxType == TRACK_BREADTH_AUTO
									});
								}
								rows_and_limits.sort(function(a,b) { return a.limit-b.limit; });
								
								// remove non-affected tracks
								rows_and_limits = rows_and_limits.filter(function(b) {
									if(kind=='base') {
										if(target=='min-content') {
											return b.minIsMinContent||b.minIsMaxContent;
										} else if(target=='max-content') {
											return b.minIsMaxContent;
										}
									} else if (kind == 'limit') {
										if(target=='min-content') {
											return b.maxIsMinContent||b.maxIsMaxContent;
										} else if(target=='max-content') {
											return b.maxIsMaxContent;
										}
									}
									return false;
								});
								
								// check that there is at least one affected track
								if(rows_and_limits.length == 0) { return; }
								
								// apply the algorithm
								if(kind=='base') {
									
									// Distribute space up to growth limits
									var tracks = rows_and_limits.filter(function(b) { return b.base<b.limit; }, 0);
									var trackAmount = tracks.length;
									if(trackAmount > 0) {
										
										distributeEquallyAmongTracks(xSizes, kind, tracks, spaceToDistribute, /*enforceLimit:*/true);
											
									} else {
										
										// Distribute space beyond growth limits
										// If space remains after all tracks are frozen, unfreeze and continue to distribute space to
 
										
										// - when handling min-content base sizes: 
										if(target=='min-content') {
											
											// any affected track that happens to also have an intrinsic max track sizing function; 
											var tracks = rows_and_limits.filter(function(b) { return b.maxIsMinContent||b.maxIsMaxContent; }, 0);
											var trackAmount = tracks.length;
											if(trackAmount>=1) {
												
												// (such tracks exist:)
												distributeEquallyAmongTracks(xSizes, kind, tracks, spaceToDistribute, /*enforceLimit:*/false);
												
											} else {
												
												// if there are no such tracks, then all affected tracks. 
												distributeEquallyAmongTracks(xSizes, kind, rows_and_limits, spaceToDistribute, /*enforceLimit:*/false);
											}
											
										}
										
										// - when handling max-content base sizes: 
										else if(target=='max-content') {
											
											// any affected track that happens to also have a max-content max track sizing function;
											var tracks = rows_and_limits.filter(function(b) { return b.maxIsMaxContent; }, 0);
											var trackAmount = tracks.length;
											if(trackAmount>=1) {
												
												// (such tracks exist:)
												distributeEquallyAmongTracks(xSizes, kind, tracks, spaceToDistribute, /*enforceLimit:*/false);
												
											} else {
												
												// if there are no such tracks, then all affected tracks. 
												distributeEquallyAmongTracks(xSizes, kind, rows_and_limits, spaceToDistribute, /*enforceLimit:*/false);
											}
											
										}
									}
									
								}
								
								else if (kind == 'limit') {
									
									// distribute among all tracks
									distributeEquallyAmongTracks(xSizes, kind, rows_and_limits, spaceToDistribute);
									
								}
							}
						};
						
						var updateInfiniteLimitFlag = function() {
							for(var x = xSizes.length; x--;) {
								if(xSizes[x].limit != infinity) {
									xSizes[x].flags = xSizes[x].flags & ~LIMIT_IS_INFINITE;
								}
							}
						}
						
						//
						// 1. For intrinsic minimums: First increase the base size of tracks with a min track sizing function of min-content or max-content by distributing extra space as needed to account for these items' min-content contributions. 
						//
						distributeFreeSpace(getMinWidthOf(item), 'base', 'min-content');
						updateInfiniteLimitFlag();
						
						
						//
						// 2. For max-content minimums: Next continue to increase the base size of tracks with a min track sizing function of max-content by distributing extra space as needed to account for these items' max-content contributions. 
						//
						distributeFreeSpace(getMaxWidthOf(item), 'base', 'max-content');
						updateInfiniteLimitFlag();
						
						//
						// 3. For intrinsic maximums: Third increase the growth limit of tracks with a max track sizing function of min-content or max-content by distributing extra space as needed to account for these items' min-content contributions. 
						// Mark any tracks whose growth limit changed from infinite to finite in this step as infinitely growable for the next step. 
						// (aka do not update infinity flag)
						//
						distributeFreeSpace(getMinWidthOf(item), 'limit', 'min-content');
						
						//
						// 4. For max-content maximums: Lastly continue to increase the growth limit of tracks with a max track sizing function of max-content by distributing extra space as needed to account for these items' max-content contributions. 
						//
						distributeFreeSpace(getMaxWidthOf(item), 'limit', 'max-content');
						updateInfiniteLimitFlag();
						
						items_done++;
						
					}
				}

			}
			
			var computeTrackBreadthIncrease = function(xSizes, specifiedSizes, fullSize, fullDistributableSize, getMinWidthOf, getMaxWidthOf, getXStartOf, getXEndOf) {
				
				// sort rows by growth limit
				var rows_and_limits = xSizes.map(function(item, cx) { 
					return { 
						x:cx, 
						base:xSizes[cx].base,
						limit:xSizes[cx].limit,
						minIsMinContent: specifiedSizes[cx].minType == TRACK_BREADTH_MIN_CONTENT || specifiedSizes[cx].minType == TRACK_BREADTH_AUTO,
						minIsMaxContent: specifiedSizes[cx].minType == TRACK_BREADTH_MAX_CONTENT,
						maxIsMinContent: specifiedSizes[cx].maxType == TRACK_BREADTH_MIN_CONTENT,
						maxIsMaxContent: specifiedSizes[cx].maxType == TRACK_BREADTH_MAX_CONTENT || specifiedSizes[cx].maxType == TRACK_BREADTH_AUTO
					};
				});
				rows_and_limits.sort(function(a,b) { return a.limit-b.limit; });
				
				while(true) {
					
					// compute size to distribute
					var spaceToDistribute = fullDistributableSize;
					for(var cx = xSizes.length; cx--;) {
						spaceToDistribute -= xSizes[cx].base;
					}
					
					// check that there is some space to distribute
					if(spaceToDistribute <= 1/1024) { return; } // NOTE: the space may never become 0 due to a rounding issue
					
					// Distribute space up to growth limits
					var tracks = rows_and_limits = rows_and_limits.filter(function(b) { return ((b.minIsMinContent||b.minIsMaxContent) && b.base<b.limit); }, 0);
					var trackAmount = tracks.length; if(trackAmount <= 0) { return; }
					distributeEquallyAmongTracks(xSizes, 'base', tracks, spaceToDistribute, /*enforceLimit:*/true);
					
				}
			}
			
			var computeFlexibleTrackBreadth = function(xSizes, specifiedSizes, fullSize, fullDistributableSize, getMinWidthOf, getMaxWidthOf, getXStartOf, getXEndOf) {
				
				// If the free space is an indefinite length: 
				if(fullSize==0) {
					
					//The used flex fraction is the maximum of: 
					var currentFraction = 0;
					
					//  Each flexible tracks base size divided by its flex factor. 
					'TODO: I believe this is completely useless, but CSSWG will not change it.';
					
					//  The result of finding the size of an fr for each grid item that crosses a flexible track, using all the grid tracks that the item crosses and a space to fill of the items max-content contribution. 
					for(var i = this.items.length; i--;) { var item = this.items[i]; var item_xStart = getXStartOf(item); var item_xEnd = getXEndOf(item);
						
						// gather some pieces of data about the tracks
						var spaceToDistribute = getMaxWidthOf(item); var flexFactorSum = 0;
						for(var cx = item_xStart; cx<item_xEnd; cx++) { 
							
							if(specifiedSizes[cx].maxType == TRACK_BREADTH_FRACTION) {
								// compute how much flexible tracks are required
								flexFactorSum += specifiedSizes[cx].maxValue;
							} else {
								// deduce non-flexible tracks from the space to distribute
								spaceToDistribute -= xSizes[cx].base;
							}
							
						}
						
						// compute the minimum flex fraction for this item
						if(spaceToDistribute > 0 && flexFactorSum > 0) {
							currentFraction = Math.max(currentFraction, spaceToDistribute / flexFactorSum)
						}
						
					}
					
					// for each flexible track
					for(var x = xSizes.length; x--;) {
						if(specifiedSizes[x].maxType == TRACK_BREADTH_FRACTION) {
							
							// Compute the product of the hypothetical flex fraction and the tracks flex factor
							var trackSize = currentFraction * specifiedSizes[x].maxValue;
							
							// If that size is less than the tracks base size:
							if(xSizes[x].base < trackSize) {
								
								// set its base size to that product.
								xSizes[x].breadth = trackSize;
								
							} else {
								
								xSizes[x].breadth = xSizes[x].base;
								
							}
							
						} else {
							
							xSizes[x].breadth = xSizes[x].base;
							
						}
					}
					
				} else {
				
					// compute the leftover space
					var spaceToDistribute = fullDistributableSize;
					var tracks = []; var fractionSum = 0;
					for(var x = xSizes.length; x--;) {
						if(specifiedSizes[x].maxType == TRACK_BREADTH_FRACTION) {
							tracks.push(x); fractionSum += specifiedSizes[x].maxValue;
						} else {
							spaceToDistribute -= (xSizes[x].breadth = xSizes[x].base);
						}
					}

					// while there are flexible tracks to size
					while(tracks.length>0) {
						
						// Let the hypothetical flex fraction be the leftover space divided by the sum of the flex factors of the flexible tracks.
						var currentFraction = spaceToDistribute / fractionSum; var restart = false;
						
						// for each flexible track
						for(var i = tracks.length; i--;) { var x = tracks[i];
							
							// Compute the product of the hypothetical flex fraction and the tracks flex factor
							var trackSize = currentFraction * specifiedSizes[x].maxValue;
							
							// If that size is less than the tracks base size:
							if(xSizes[x].base < trackSize) {
								
								// set its base size to that product.
								xSizes[x].breadth = trackSize;

							} else {
								
								// mark as non-flexible
								xSizes[x].breadth = xSizes[x].base;
								
								// remove from computation
								fractionSum -= specifiedSizes[x].maxValue;
								tracks.splice(i,1);
								
								// restart
								restart=true;
								
							}
							
						}
						
						if(!restart) { tracks.length = 0; }
						
					}
					
				}
			}
			
			var computeFinalTrackBreadth = function(xSizes, this_xSizes, fullWidth, fullDistributableWidth, getMinWidthOf, getMaxWidthOf, getXStartOf, getXEndOf) {
				
				// compute base and limit
				computeTrackBreadth.call(
					this,
					xSizes,
					this_xSizes,
					getMinWidthOf,
					getMaxWidthOf,
					getXStartOf,
					getXEndOf
				);
				
				// ResolveContentBasedTrackSizingFunctions (step 4)
				for(var x = this_xSizes.length; x--;) {
					if(xSizes[x].limit == infinity) { xSizes[x].limit = xSizes[x].base; }
				}
				
				// grow tracks up to their max
				computeTrackBreadthIncrease.call(
					this,
					xSizes,
					this_xSizes,
					fullWidth,
					fullDistributableWidth,
					getMinWidthOf,
					getMaxWidthOf,
					getXStartOf,
					getXEndOf
				);
				
				// handle flexible things
				computeFlexibleTrackBreadth.call(
					this,
					xSizes,
					this_xSizes,
					fullWidth,
					fullDistributableWidth,					
					getMinWidthOf,
					getMaxWidthOf,
					getXStartOf,
					getXEndOf
				);

			}
			
			///////////////////////////////////////////////////////////
			// compute breadth of columns
			///////////////////////////////////////////////////////////
			var mode = 'x';
			var fullSize = fullWidth;
			var fullDistributableSize = fullDistributableWidth;
			var xSizes = this.xSizes.map(initializeFromConstraints);
			var colGap = this.colGap;

			var getMinWidthOf = function(item) { return item.minWidth + item.hMargins - Math.max(0, item.xEnd - item.xStart - 1) * colGap; };
			var getMaxWidthOf = function(item) { return item.maxWidth + item.hMargins - Math.max(0, item.xEnd - item.xStart - 1) * colGap; };
			var getXStartOf = function(item) { return item.xStart; }; 
			var getXEndOf = function(item) { return item.xEnd; };
			
			// compute base and limit
			computeFinalTrackBreadth.call(
				this,
				xSizes,
				this.xSizes,
				fullWidth,
				fullDistributableWidth,				
				getMinWidthOf,
				getMaxWidthOf,
				getXStartOf,
				getXEndOf
			);
			
			///////////////////////////////////////////////////////////
			// position each element absolutely, and set width to compute height
			///////////////////////////////////////////////////////////
			var usedStyle = usedStyleOf(this.element);
			var runtimeStyle = createRuntimeStyle('temp-position', this.element);
			
			if(usedStyle.getPropertyValue('position')=='static') { 
				runtimeStyle.set(this.element, {"position":"relative"});
			}
			
			this.items.forEach(function(item) {
				
				// firstly, compute the total breadth of the spanned tracks
				var totalBreadth = 0;
				for(var cx = item.xStart; cx<item.xEnd; cx++) {
					totalBreadth += xSizes[cx].breadth;
				}
				
				// secondly, adapt to the alignment properties
				"TODO: alignment";
				
				// finally, set the style
				runtimeStyle.set(item.element, {
					"position"   : "absolute",
					"width"      : ""+totalBreadth+"px",
					"box-sizing" : "border-box"
				});
				
			});
			
			///////////////////////////////////////////////////////////
			// compute breadth of rows
			///////////////////////////////////////////////////////////
			var mode = 'y';
			var fullSize = fullHeight;
			var fullDistributableSize = fullDistributableHeight;
			var ySizes = this.ySizes.map(initializeFromConstraints);
			var rowGap = this.rowGap;

			var getMinHeightOf = function(item) { return item.element.offsetHeight + item.vMargins - Math.max(0, item.yEnd - item.yStart - 1) * rowGap; };
			var getMaxHeightOf = function(item) { return item.element.offsetHeight + item.vMargins - Math.max(0, item.yEnd - item.yStart - 1) * rowGap; };
			var getYStartOf = function(item) { return item.yStart; };
			var getYEndOf = function(item) { return item.yEnd; };
			
			computeFinalTrackBreadth.call(
				this,
				ySizes,
				this.ySizes,
				fullHeight,
				fullDistributableHeight,				
				getMinHeightOf,
				getMaxHeightOf,
				getYStartOf,
				getYEndOf
			);
									
			///////////////////////////////////////////////////////////
			// release the override style of elements
			///////////////////////////////////////////////////////////
			runtimeStyle.revoke();
			
			///////////////////////////////////////////////////////////
			// save the results
			////
			this.finalXSizes = xSizes;
			this.finalYSizes = ySizes;
			
			///////////////////////////////////////////////////////////
			// log the results
			///////////////////////////////////////////////////////////
			/*console.log({
				x: xSizes,
				xBreadths: xSizes.map(function(e) { return e.breadth; }),
				y: ySizes,
				yBreadths: ySizes.map(function(e) { return e.breadth; }),
			});*/
		
		},
		
		generateMSGridStyle: function() {
			
			this.element.style.setProperty("display","-ms-grid");
			this.element.style.setProperty("-ms-grid-rows",this.ySizes.join(' '));
			this.element.style.setProperty("-ms-grid-columns",this.xSizes.join(' '));
			
			for(var i=this.items.length; i--;) { var item = this.items[i]; 
				
				item.element.style.setProperty("-ms-grid-row", item.yStart+1);
				item.element.style.setProperty("-ms-grid-column", item.xStart+1);
				item.element.style.setProperty("-ms-grid-row-span", item.yEnd-item.yStart);
				item.element.style.setProperty("-ms-grid-column-span", item.xEnd-item.xStart);
				
			}
			
		},
		
		generatePolyfilledStyle: function() {
		
			var usedStyle = usedStyleOf(this.element);
			var runtimeStyle = createRuntimeStyle("css-grid", this.element);
		
			var xSizes = this.finalXSizes;
			var ySizes = this.finalYSizes;
			
			var grid_width = 0;
			for(var x = 0; x<xSizes.length; x++) {
				grid_width += xSizes[x].breadth;
			}
			grid_width += this.colGap * (xSizes.length - 1);
			
			var grid_height = 0;
			for(var y = 0; y<ySizes.length; y++) {
				grid_height += ySizes[y].breadth;
			}
			grid_height += this.rowGap * (ySizes.length - 1);
			
			var runtimeStyleData = {};
			if(["block","inline-block"].indexOf(usedStyle.getPropertyValue("display")) == -1) {
				runtimeStyleData["display"] = "block";
			}
			if(usedStyle.getPropertyValue('position')=='static') {
				runtimeStyleData["position"] = "relative";
			}
			
			runtimeStyle.set(this.element, runtimeStyleData);
			

			// set the position and sizing of each elements
			var width = grid_width; var height = grid_height;
			var items_widths = []; var items_heights = []; 
			items_widths.length = items_heights.length = this.items.length;
			for(var i=this.items.length; i--;) { var item = this.items[i]; 
				
				var left = this.hlPadding;
				for(var x = 0; x<item.xStart; x++) {
					left += xSizes[x].breadth;
				}
				left += this.colGap * item.xStart;
				
				var width = 0;
				for(var x = item.xStart; x<item.xEnd; x++) {
					width += xSizes[x].breadth;
				}
				width += Math.max(0, item.xEnd - item.xStart - 1) * this.colGap;
				
				var top = this.vtPadding;
				for(var y = 0; y<item.yStart; y++) {
					top += ySizes[y].breadth;
				}
				top += this.rowGap * item.yStart;
				
				var height = 0;
				for(var y = item.yStart; y<item.yEnd; y++) {
					height += ySizes[y].breadth;
				}
				height += Math.max(0, item.yEnd - item.yStart - 1) * this.rowGap;
				
				
				runtimeStyle.set(item.element, {
					"position"    : "absolute",
					"box-sizing"  : "border-box",
					"top"         : ""+top +"px",
					"left"        : ""+left+'px'
				});
				
				items_widths[i] = width-item.hMargins;
				items_heights[i] = height-item.vMargins;
				
			}
			
			var isReplaced = /^(SVG|MATH|IMG|VIDEO|PICTURE|OBJECT|EMBED|IFRAME)$/i;
			
			// if horizontal stretch
			if(true) { // TODO: horizontal stretch
				for(var i=this.items.length; i--;) { var item = this.items[i]; var width = items_widths[i];
					if(item.minWidth <= width || isReplaced.test(item.element.tagName)) { // TODO: fix that... (should only do it for auto elements with stretch enabled)
						runtimeStyle.set(item.element, {"width": width +'px'});
					}
				}
			}
			
			// if vertical stretch
			if(true) { // TODO: vertical stretch
				for(var i=this.items.length; i--;) { var item = this.items[i]; var height = items_heights[i];
					if(item.element.offsetHeight <= height || isReplaced.test(item.element.tagName)) {
						runtimeStyle.set(item.element, {"height": height+'px'});
					}
				}
			}
			
			// make sure the final size is right:
			var runtimeStyleData = {};
			//if(["absolute","fixed"].indexOf(usedStyle.getPropertyValue("position")) >= 0) { runtimeStyleData["width"] = grid_width+'px'; }
			if(["auto","0px"].indexOf(usedStyle.getPropertyValue("width")) >= 0) { runtimeStyleData["width"] = grid_width+'px'; }
			if(["auto","0px"].indexOf(usedStyle.getPropertyValue("height")) >= 0) { runtimeStyleData["height"] = grid_height+'px'; }
			runtimeStyle.set(this.element, runtimeStyleData);

			
		},
		
		revokePolyfilledStyle: function() {
			
			createRuntimeStyle('css-grid', this.element).revoke();
			
		},
		
		findXStart: function(item) {
		
			//////////////////////////////////////////////////////////////////////////////
			// TODO: this doesn't reflect the spec after the changes made at my request //
			//////////////////////////////////////////////////////////////////////////////
			
			var xStart = -1;
			if(item.specifiedXStart.type !== LOCATE_LINE) return 0;
			
			if(item.specifiedXStart.name) {
				
				//
				// <integer>? <custom-ident>
				//
				
				if(item.specifiedXStart.index === undefined) {
					
					// First attempts to match the grid areas edge to a named grid area
					xStart = this.findXLine(item.specifiedXStart.name+"-start", 0, 0, /*dontFallback*/true);
					
				}
				if(xStart==-1) {
				
					// Otherwise, contributes the first named line with the specified name to the grid items placement. 
					xStart = this.findXLine(item.specifiedXStart.name, 0, (item.specifiedXStart.index||1)-1);
					
				}
				
			} else {
				
				//
				// <integer>
				//
				xStart = (item.specifiedXStart.index||1)-1;
				
			}
			
			// correct impossible values
			if(xStart < 0) { xStart=0; }
			
			// return the final result
			return item.xStart = xStart;
			
		},
		
		findYStart: function(item) {
			
			var yStart = -1;
			if(item.specifiedYStart.type !== LOCATE_LINE) return 0;

			if(item.specifiedYStart.name) {
				
				//
				// <interger>? <custom-ident>
				//
				
				if(item.specifiedYStart.index === undefined) {
					
					// First attempts to match the grid areas edge to a named grid area
					yStart = this.findYLine(item.specifiedYStart.name+"-start", 0, 0, /*dontFallback*/true);
					
				}
				if(yStart == -1) {
					
					// Otherwise, contributes the first named line with the specified name to the grid items placement. 
					yStart = this.findYLine(item.specifiedYStart.name, 0,(item.specifiedYStart.index||1)-1);
					
				}
				
			} else {
				
				//
				// <integer>
				//
				yStart = (item.specifiedYStart.index||1)-1;
				
			}
			
			// correct impossible values
			if(yStart < 0) { yStart=0; }
			
			// return the final result
			return item.yStart = yStart;
			
		},
		
		findXEnd: function(item) {
			
			var xEnd = -1;
			var xStart = item.xStart;
			switch(item.specifiedXEnd.type) {
				
				case LOCATE_LINE:
					if(item.specifiedXEnd.name) {
						if(item.specifiedXEnd.index === undefined) {
							
							// First attempts to match the grid areas edge to a named grid area
							xEnd = this.findXLine(item.specifiedXEnd.name+"-end", 0, 0, /*dontFallback*/true);
							
						}
						if(xEnd == -1) {
							
							// Otherwise, contributes the first named line with the specified name to the grid items placement. 
							xEnd = this.findXLine(item.specifiedXEnd.name, 0, (item.specifiedXEnd.index||1)-1);
							
						}
					} else {
						xEnd = (item.specifiedXEnd.index||1)-1;
					}
					break;
					
				case LOCATE_SPAN:
					if(item.specifiedXEnd.name) {
					
						// Set the corresponding edge N lines apart from its opposite edge. 
						xEnd = this.findXLine(item.specifiedXEnd.name, xStart+1, (item.specifiedXEnd.index||1)-1);
						
					} else {
						
						// Set the corresponding edge N lines apart from its opposite edge. 
						xEnd = xStart+((item.specifiedXEnd.index|0)||1);
					}
					break;
					
				case LOCATE_AUTO:
					// I don't support subgrids, so this is always true:
					xEnd = xStart+1;
					break;
			}
			
			if(xEnd <= xStart) { xEnd = xStart+1; }
			return item.xEnd = xEnd;
			
		},
		
		findYEnd: function(item) {
			
			var yEnd = -1;
			var yStart = item.yStart;
			switch(item.specifiedYEnd.type) {
				
				case LOCATE_LINE:
					if(item.specifiedYEnd.name) {
						
						//
						// <integer>? <identifier>
						// 
						if(item.specifiedYEnd.index === undefined) {
							
							// First attempts to match the grid areas edge to a named grid area
							yEnd = this.findYLine(item.specifiedYEnd.name+"-end", 0, 0, /*dontFallback*/true);
							
						}
						if(yEnd == -1) {
							
							// Otherwise, contributes the first named line with the specified name to the grid items placement. 
							yEnd = this.findYLine(item.specifiedYEnd.name, 0, (item.specifiedYEnd.index||1)-1);
							
						}
						
					} else {
						
						//
						// <integer>
						//
						yEnd = (item.specifiedYEnd.index||1)-1;
						
					}
					break;
					
				case LOCATE_SPAN:
					if(item.specifiedYEnd.name) {
					
						// Set the corresponding edge N lines apart from its opposite edge. 
						yEnd = this.findYLine(item.specifiedYEnd.name, yStart+1, (item.specifiedYEnd.index||1)-1);
						
						// TODO: I'm having the wrong behavior here, I sent a mail to csswg to get the spec changed
						// "The spec is more what you'd call 'guidelines' than actual rules"
						if(yEnd==-1) { yEnd = 0; }
						
					} else {
						
						// Set the corresponding edge N lines apart from its opposite edge. 
						yEnd = yStart+((item.specifiedYEnd.index|0)||1);
					}
					break;
					
				case LOCATE_AUTO:
					// I don't support subgrids, so this is always true:
					yEnd = yStart+1;
					break;
					
			}
			
			// correct impossible end values
			if(yEnd <= yStart) { yEnd = yStart+1; }
			
			// return the final result
			return item.yEnd = yEnd;

		},
		
		findXLine: function(name, startIndex, skipCount, dontFallback) {
		
			startIndex=startIndex|0;
			skipCount=skipCount|0;
			
			// special case for cases where the name isn't provided
			if(!name) {
				if(startIndex+skipCount < this.xLines.length) {
					return startIndex+skipCount;
				} else {
					return this.xLines.length;
				}
			}
			
			// find the 1+skipCount'th line to match the right name
			var last = -1;
			for(var i = startIndex; i<this.xLines.length; i++) {
				if(this.xLines[i].indexOf(name) >= 0 || (!dontFallback && this.xLines[i].indexOf('*') >= 0)) { 
					if(skipCount>0) { last=i; skipCount--; }
					else { return i; }
				}
			}

			// if we still have lines to find, we know that lines of the implicit grid match all names
			if(!dontFallback) { console.warn('[CSS-GRID] Missing '+(skipCount+1)+' lines named "'+name+'" after line '+startIndex+'.'); last = this.xLines.length+skipCount+1; this.ensureRows(last); }
			return last;
			
		},
		
		findYLine: function(name, startIndex, skipCount, dontFallback) {

			startIndex=startIndex|0;
			skipCount=skipCount|0;
			
			// special case for cases where the name isn't provided
			if(!name) {
				if(startIndex+skipCount < this.yLines.length) {
					return startIndex+skipCount;
				} else {
					return this.yLines.length;
				}
			}
			
			// find the 1+skipCount'th line to match the right name
			var last = -1;
			for(var i = startIndex; i<this.yLines.length; i++) {
				if(this.yLines[i].indexOf(name) >= 0 || (!dontFallback && this.yLines[i].indexOf('*') >= 0)) { 
					if(skipCount>0) { last=i; skipCount--; }
					else { return i; }
				}
			}
			
			// if we still have lines to find, we know that lines of the implicit grid match all names
			if(!dontFallback) { console.warn('[CSS-GRID] Missing '+(skipCount+1)+' lines named "'+name+'" after line '+startIndex+'.'); last = this.yLines.length+skipCount+1; this.ensureColumns(last); }
			return last;
			
		},
		
	}
	
	var cssGrid = {
		
		LOCATE_LINE   :  LOCATE_LINE,
		LOCATE_SPAN   :  LOCATE_SPAN,
		LOCATE_AREA   :  LOCATE_AREA,
		LOCATE_AUTO   :  LOCATE_AUTO,
		
		ALIGN_START   :  ALIGN_START,
		ALIGN_CENTER  :  ALIGN_CENTER,
		ALIGN_END     :  ALIGN_END,
		ALIGN_FIT     :  ALIGN_FIT,  
		
		TRACK_BREADTH_AUTO        : TRACK_BREADTH_AUTO,
		TRACK_BREADTH_LENGTH      : TRACK_BREADTH_LENGTH,
		TRACK_BREADTH_FRACTION    : TRACK_BREADTH_FRACTION,
		TRACK_BREADTH_PERCENTAGE  : TRACK_BREADTH_PERCENTAGE,
		TRACK_BREADTH_MIN_CONTENT : TRACK_BREADTH_MIN_CONTENT,
		TRACK_BREADTH_MAX_CONTENT : TRACK_BREADTH_MAX_CONTENT,

		GridLayout: GridLayout, 
		GridItem: GridItem, 
		GridItemPosition: GridItemPosition,
		GridTrackBreadth: GridTrackBreadth,
		
	};
	return cssGrid;
	
})(window, document)

require.define('src/css-grid/lib/grid-layout.js');

////////////////////////////////////////

// TODO: document the "no_auto_css_grid" flag?
// TOOD: document the "no_ms_grid_implementation" flag?

!(function(window, document) { "use strict";

	if("gridRow" in document.body.style) { console.warn('Polyfill skipped'); return; }

	require('src/core/polyfill-dom-console.js');
	var cssCascade = require('src/core/css-cascade.js');
	var cssGrid = require('src/css-grid/lib/grid-layout.js');
	
	var enabled = false;
	var enablePolyfill = function() { if(enabled) { return; } else { enabled = true; }

		//
		// [0] define css properties
		// those properties can now be set using Element.myStyle.xyz if they weren't already
		//
		
		var gridProperties = ['grid','grid-template','grid-template-rows','grid-template-columns','grid-template-areas','grid-areas','grid-auto-flow','grid-row-gap','grid-column-gap','grid-gap'];
		var gridItemProperties = ['grid-area','grid-row','grid-column','grid-row-start','grid-row-end','grid-column-start','grid-column-end','order'];
		for(var i=gridProperties.length; i--;)     { cssCascade.polyfillStyleInterface(gridProperties[i]); }
		for(var i=gridItemProperties.length; i--;) { cssCascade.polyfillStyleInterface(gridItemProperties[i]); }
		
		// 
		// [1] when any update happens:
		// construct new content and region flow pairs
		// restart the region layout algorithm for the modified pairs
		// 
		
		cssCascade.startMonitoringProperties(
			gridProperties, 
			{
				onupdate: function onupdate(element, rule) {

					// log some message in the console for debug
					cssConsole.dir({message:"onupdate",element:element,selector:rule.selector.toCSSString(),rule:rule});
					
					// check if the element already has a grid or grid-item layout
					if(element.gridLayout) {
					
						// the layout must be recomputed
						element.gridLayout.scheduleRelayout();
						
					} else {
					
						// setup a new grid model, and schedule a relayout
						element.gridLayout = new cssGrid.GridLayout(element);
						element.gridLayout.scheduleRelayout();
					
						// TODO: watch DOM for updates in the element?
						if("MutationObserver" in window) {
							// non-attribute-related changes
							void function() {
								var observer = new MutationObserver(function(e) {
									element.gridLayout.scheduleRelayout(); return;
									//debugger; console.log(e);
								});
								var target = document.documentElement;
								var config = {
									subtree: true, 
									attributes: false, 
									childList: true, 
									characterData: true
								};
								observer.observe(target, config);
							}();
							// attribute-related changes
							void function() {
								var observer = new MutationObserver(function(e) {
									element.gridLayout.scheduleRelayout(); return;
									//debugger; console.log(e);
									//for(var i = e.length; i--;) {
									//	var attr = e[i].attributeName;
									//	if(attr=='class' || attr=='style') {
									//		element.gridLayout.scheduleRelayout(); return;
									//	}
									//}
								});
								var target = element;
								var config = { 
									subtree: true, 
									attributes: true, 
									attributeFilter: ['class', 'style', 'width', 'height', 'src'],
									childList: false, 
									characterData: false
								};
							}();
							
						} else if("MutationEvent" in window) {
							element.addEventListener('DOMSubtreeModified', function() {
								if(!element.gridLayout.isLayoutScheduled) { element.gridLayout.scheduleRelayout(); }
							}, true);
						}
						// TODO: watch resize events for relayout?
						var lastWidth = element.offsetWidth;
						var lastHeight = element.offsetHeight;
						var updateOnResize = function() {
							if(!element.gridLayout) { return; }
							if(lastWidth != element.offsetWidth || lastHeight != element.offsetHeight) {
								// update last known size
								lastWidth = element.offsetWidth;
								lastHeight = element.offsetHeight;
								// relayout (and prevent double-dispatch)
								element.gridLayout.scheduleRelayout();
							}
							requestAnimationFrame(updateOnResize);
						}
						requestAnimationFrame(updateOnResize);
						// TODO: watch the load event for relayout?
						window.addEventListener('load', function(){element.gridLayout&&element.gridLayout.scheduleRelayout()});
						var images = element.querySelectorAll('img');
						for(var i = images.length; i--;) {
							images[i].addEventListener('load', function(){element.gridLayout&&element.gridLayout.scheduleRelayout()});
						}
						
					}
					
				}
			}
		);
		
		cssCascade.startMonitoringProperties(
			gridItemProperties, 
			{
				onupdate: function onupdate(element, rule) {

					// log some message in the console for debug
					cssConsole.dir({message:"onupdate",element:element,selector:rule.selector.toCSSString(),rule:rule});
					
					// check if the element already has a grid or grid-item layout
					if(element.parentGridLayout) {
						
						// the parent layout must be recomputed
						element.parentGridLayout.scheduleRelayout();
						
					}
					
				}
			}
		);
		
	}

	// expose the enabler
	cssGrid.enablePolyfill = enablePolyfill;
	
	// enable the polyfill automatically
	try {
		if(!("no_auto_css_grid" in window)) { enablePolyfill(); }
	} catch (ex) {
		setImmediate(function() { throw ex; });
	}
	
	// return the module
	return cssGrid;
	
})(window, document);
require.define('src/css-grid/polyfill.js');

////////////////////////////////////////

//require('core:dom-matchMedia-polyfill');
//require('core:dom-classList-polyfill');
require('src/css-grid/polyfill.js');
require.define('src/requirements.js');

window.cssPolyfills = { require: require };

})();
//# sourceMappingURL=css-polyfills.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19).setImmediate))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(20);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * better-dom: Live extension playground
 * @version 4.0.0 Wed, 04 Jul 2018 18:30:49 GMT
 * @link https://github.com/chemerisuk/better-dom
 * @copyright 2018 Maksim Chemerisuk
 * @license MIT
 */
(function () {
  "use strict";
  var WINDOW = window;
  var DOCUMENT = document;
  var HTML = DOCUMENT.documentElement;

  var UNKNOWN_NODE = 0;
  var ELEMENT_NODE = DOCUMENT.ELEMENT_NODE;
  var DOCUMENT_NODE = DOCUMENT.DOCUMENT_NODE;
  var VENDOR_PREFIXES = ["Webkit", "O", "Moz", "ms"];
  var FAKE_ANIMATION_NAME = "v__40000__";
  var SHEET_PROP_NAME = "__40000__sheet";

  var WEBKIT_PREFIX = WINDOW.WebKitAnimationEvent ? "-webkit-" : "";

  var util$index$$arrayProto = Array.prototype;

  var util$index$$every = util$index$$arrayProto.every;
  var util$index$$each = util$index$$arrayProto.forEach;
  var util$index$$filter = util$index$$arrayProto.filter;
  var util$index$$map = util$index$$arrayProto.map;
  var util$index$$slice = util$index$$arrayProto.slice;
  var util$index$$isArray = Array.isArray;
  var util$index$$keys = Object.keys;
  var util$index$$raf = WINDOW.requestAnimationFrame;

  function util$index$$computeStyle(node) {
    return node.ownerDocument.defaultView.getComputedStyle(node);
  }

  function util$index$$injectElement(node) {
    if (node && node.nodeType === ELEMENT_NODE) {
      return node.ownerDocument.getElementsByTagName("head")[0].appendChild(node);
    }
  }
  function MethodError(methodName, args, type) {if (type === void 0) {type = "$Element";}
    var url = "http://chemerisuk.github.io/better-dom/" + type + ".html#" + methodName,
    line = "invalid call `" + type + (type === "DOM" ? "." : "#") + methodName + "(";

    line += util$index$$map.call(args, String).join(", ") + ")`. ";

    this.message = line + "Check " + url + " to verify the arguments";
  }

  MethodError.prototype = new TypeError();

  function StaticMethodError(methodName, args) {
    MethodError.call(this, methodName, args, "DOM");
  }

  StaticMethodError.prototype = new TypeError();

  function DocumentTypeError(methodName, args) {
    MethodError.call(this, methodName, args, "$Document");
  }

  DocumentTypeError.prototype = new TypeError();
  function $Node(node) {
    if (node) {
      this[0] = node;
      // use a generated property to store a reference
      // to the wrapper for circular object binding
      node["__40000__"] = this;
    }
  }

  $Node.prototype = {
    toString: function toString() {return "";},
    valueOf: function valueOf() {return UNKNOWN_NODE;} // undefined
  };

  // fake animation for live extensions
  var STYLE_NODE_HTML = "@" + WEBKIT_PREFIX + "keyframes " + FAKE_ANIMATION_NAME + " {from {opacity:.99} to {opacity:1}}";

  function $Document(node) {
    if (this instanceof $Document) {
      // initialize state and all internal properties
      $Node.call(this, node);
      // add style element to append required css
      var styleNode = node.createElement("style");
      styleNode.innerHTML = STYLE_NODE_HTML;
      util$index$$injectElement(styleNode);
      // store sheet object internally to use in importStyles later
      node[SHEET_PROP_NAME] = styleNode.sheet || styleNode.styleSheet;
    } else if (node) {
      // create a new wrapper or return existing object
      return node["__40000__"] || new $Document(node);
    } else {
      return new $Document();
    }
  }

  var DocumentProto = new $Node();

  $Document.prototype = DocumentProto;

  DocumentProto.valueOf = function () {
    var node = this[0];
    return node ? DOCUMENT_NODE : UNKNOWN_NODE;
  };

  DocumentProto.toString = function () {return "#document";};
  function $Element(node) {
    if (this instanceof $Element) {
      $Node.call(this, node);
    } else if (node) {
      // create a new wrapper or return existing object
      return node["__40000__"] || new $Element(node);
    } else {
      return new $Element();
    }
  }

  var ElementProto = new $Node();

  $Element.prototype = ElementProto;

  ElementProto.valueOf = function () {
    var node = this[0];
    return node ? ELEMENT_NODE : UNKNOWN_NODE;
  };

  ElementProto.toString = function () {
    var node = this[0];

    return node ? "<" + node.tagName.toLowerCase() + ">" : "#unknown";
  };

  var index$$DOM = new $Document(WINDOW.document);
  var index$$_DOM = WINDOW.DOM;

  index$$DOM.constructor = function (node) {
    var nodeType = node && node.nodeType;

    if (nodeType === ELEMENT_NODE) {
      return $Element(node);
    } else if (nodeType === DOCUMENT_NODE) {
      return $Document(node);
    } else {
      return new $Node();
    }
  };

  index$$DOM.noConflict = function () {
    if (WINDOW.DOM === index$$DOM) {
      WINDOW.DOM = index$$_DOM;
    }

    return index$$DOM;
  };

  WINDOW.DOM = index$$DOM;

  var document$create$$reQuick = /^<([a-zA-Z-]+)\/?>$/;
  var document$create$$sandbox = DOCUMENT.createElement("body");

  function document$create$$makeMethod(all) {
    return function (value) {
      var node = this[0];

      if (!node || typeof value !== "string") {
        throw new MethodError("create" + all, arguments);
      }

      var result = all ? [] : null;

      var quickMatch = !result && document$create$$reQuick.exec(value);
      if (quickMatch) {
        return new $Element(node.createElement(quickMatch[1]));
      }

      document$create$$sandbox.innerHTML = value.trim(); // parse HTML string

      for (var it; it = document$create$$sandbox.firstElementChild;) {
        document$create$$sandbox.removeChild(it); // detach element from the sandbox

        if (node !== DOCUMENT) {
          // adopt node for external documents
          it = node.adoptNode(it);
        }

        if (result) {
          result.push(new $Element(it));
        } else {
          result = new $Element(it);
          // need only the first element
          break;
        }
      }

      return result || new $Element();
    };
  }


  $Document.prototype.create = document$create$$makeMethod("");

  $Document.prototype.createAll = document$create$$makeMethod("All");

  // Helper for css selectors

  var util$selectormatcher$$rquickIs = /^(\w*)(?:#([\w\-]+))?(?:\[([\w\-\=]+)\])?(?:\.([\w\-]+))?$/,
  util$selectormatcher$$propName = VENDOR_PREFIXES.concat(null).
  map(function (p) {return (p ? p.toLowerCase() + "M" : "m") + "atchesSelector";}).
  reduceRight(function (propName, p) {return propName || p in HTML && p;}, null);

  var util$selectormatcher$$default = function util$selectormatcher$$default(selector, context) {
    if (typeof selector !== "string") return null;

    var quick = util$selectormatcher$$rquickIs.exec(selector);

    if (quick) {
      // Quick matching is inspired by jQuery:
      //   0  1    2   3          4
      // [ _, tag, id, attribute, class ]
      if (quick[1]) quick[1] = quick[1].toLowerCase();
      if (quick[3]) quick[3] = quick[3].split("=");
      if (quick[4]) quick[4] = " " + quick[4] + " ";
    }

    return function (node) {
      var result, found;
      if (!quick && !util$selectormatcher$$propName) {
        found = (context || node.ownerDocument).querySelectorAll(selector);
      }

      for (; node && node.nodeType === 1; node = node.parentNode) {
        if (quick) {
          result =
          (!quick[1] || node.nodeName.toLowerCase() === quick[1]) && (
          !quick[2] || node.id === quick[2]) && (
          !quick[3] || (quick[3][1] ? node.getAttribute(quick[3][0]) === quick[3][1] : node.hasAttribute(quick[3][0]))) && (
          !quick[4] || (" " + node.className + " ").indexOf(quick[4]) >= 0);

        } else {
          if (util$selectormatcher$$propName) {
            result = node[util$selectormatcher$$propName](selector);
          } else {
            for (var i = 0, n = found.length; i < n; ++i) {
              var n = found[i];

              if (n === node) return n;
            }
          }
        }

        if (result || !context || node === context) break;
      }

      return result && node;
    };
  };

  // Inspired by trick discovered by Daniel Buchner:
  // https://github.com/csuwldcat/SelectorListener

  var document$extend$$extensions = [];
  var document$extend$$EVENT_TYPE = WEBKIT_PREFIX ? "webkitAnimationStart" : "animationstart";
  var document$extend$$CSS_IMPORT_TEXT = [
  WEBKIT_PREFIX + "animation-name:" + FAKE_ANIMATION_NAME + " !important",
  WEBKIT_PREFIX + "animation-duration:1ms !important"].
  join(";");

  function document$extend$$applyLiveExtension(definition, node) {
    var el = $Element(node);
    var ctr = definition.constructor;
    // apply all element mixins
    Object.keys(definition).forEach(function (mixinName) {
      var mixinProperty = definition[mixinName];
      if (mixinProperty !== ctr) {
        el[mixinName] = mixinProperty;
      }
    });

    if (ctr) ctr.call(el);
  }

  $Document.prototype.extend = function (selector, definition) {
    var node = this[0];

    if (!node) return this;

    if (arguments.length === 1 && typeof selector === "object") {
      // handle case when $Document protytype is extended
      util$index$$keys(selector).forEach(function (key) {
        $Document.prototype[key] = selector[key];
      });

      return this;
    } else if (selector === "*") {
      // handle case when $Element protytype is extended
      util$index$$keys(definition).forEach(function (key) {
        $Element.prototype[key] = definition[key];
      });

      return this;
    }

    if (typeof definition === "function") {
      definition = { constructor: definition };
    }

    if (!definition || typeof definition !== "object") {
      throw new DocumentTypeError("extend", arguments);
    }

    var matcher = util$selectormatcher$$default(selector);

    document$extend$$extensions.push([matcher, definition]);
    // use capturing to suppress internal animationstart events
    node.addEventListener(document$extend$$EVENT_TYPE, function (e) {
      var node = e.target;

      if (e.animationName === FAKE_ANIMATION_NAME && matcher(node)) {
        e.stopPropagation(); // this is an internal event
        // prevent any future events
        node.style.setProperty(WEBKIT_PREFIX + "animation-name", "none", "important");

        document$extend$$applyLiveExtension(definition, node);
      }
    }, true);

    // initialize extension manually to make sure that all elements
    // have appropriate methods before they are used in other DOM.extend
    // also fix cases when a matched element already has another LE
    util$index$$each.call(node.querySelectorAll(selector), function (node) {
      // prevent any future events
      node.style.setProperty(WEBKIT_PREFIX + "animation-name", "none", "important");
      // use timeout to invoke constructor safe and async
      WINDOW.setTimeout(function () {
        document$extend$$applyLiveExtension(definition, node);
      }, 0);
    });

    // subscribe selector to a fake animation
    this.importStyles(selector, document$extend$$CSS_IMPORT_TEXT);
  };

  $Document.prototype.mock = function (content) {
    if (!content) return new $Element();

    var result = this.create(content),
    applyExtensions = function applyExtensions(node) {
      document$extend$$extensions.forEach(function (args) {
        var matcher = args[0];
        var definition = args[1];

        if (matcher(node)) {
          document$extend$$applyLiveExtension(definition, node);
        }
      });

      util$index$$each.call(node.children, applyExtensions);
    };

    if (document$extend$$extensions.length) {
      applyExtensions(result[0]);
    }

    return result;
  };

  $Document.prototype.importScripts = function () {var _this = this,_arguments = arguments;for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {urls[_key] = arguments[_key];}
    var callback = function callback() {
      var node = _this[0];

      if (!node) return;

      var arg = urls.shift(),
      argType = typeof arg,
      script;

      if (argType === "string") {
        script = node.createElement("script");
        script.src = arg;
        script.onload = callback;
        script.async = true;

        util$index$$injectElement(script);
      } else if (argType === "function") {
        arg();
      } else if (arg) {
        throw new DocumentTypeError("importScripts", _arguments);
      }
    };

    callback();
  };

  $Document.prototype.importStyles = function (selector, cssText) {
    var node = this[0];

    if (!node) return;

    if (!cssText && typeof selector === "string") {
      cssText = selector;
      selector = "@media screen";
    }

    if (typeof selector !== "string" || typeof cssText !== "string") {
      throw new DocumentTypeError("importStyles", arguments);
    }

    var styleSheet = node[SHEET_PROP_NAME];
    var lastIndex = styleSheet.cssRules.length;
    // insert rules one by one:
    // failed selector does not break others
    selector.split(",").forEach(function (selector) {
      try {
        lastIndex = styleSheet.insertRule(selector + "{" + cssText + "}", lastIndex);
      } catch (err) {
        // silently ignore invalid rules
      }
    });
  };

  function element$children$$makeMethod(methodName, validSelectorType) {
    return function (selector) {
      if (selector && typeof selector !== validSelectorType) {
        throw new MethodError(methodName, arguments);
      }

      var node = this[0];
      var matcher = util$selectormatcher$$default(selector);
      var children = node ? node.children : [];

      if (typeof selector === "number") {
        if (selector < 0) {
          selector = children.length + selector;
        }

        return $Element(children[selector]);
      } else {
        if (matcher) {
          return util$index$$filter.call(children, matcher).map($Element);
        } else {
          return util$index$$map.call(children, $Element);
        }
      }
    };
  }

  $Element.prototype.child = element$children$$makeMethod("child", "number");

  $Element.prototype.children = element$children$$makeMethod("children", "string");

  var element$classes$$REGEXP_SPACE = /[\n\t\r]/g;
  var element$classes$$normalizedClass = function element$classes$$normalizedClass(node) {return (" " + node.className + " ").replace(element$classes$$REGEXP_SPACE, " ");};

  $Element.prototype.hasClass = function (className) {
    if (typeof className !== "string") {
      throw new MethodError("hasClass", arguments);
    }

    var node = this[0];
    if (!node) return false;

    if (node.classList) {
      return node.classList.contains(className);
    } else {
      return element$classes$$normalizedClass(node).indexOf(" " + className + " ") >= 0;
    }
  };

  $Element.prototype.addClass = function () {var _this2 = this,_arguments2 = arguments;for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {classNames[_key2] = arguments[_key2];}
    var node = this[0];
    if (node) {
      classNames.forEach(function (className) {
        if (typeof className !== "string") {
          throw new MethodError("addClass", _arguments2);
        }
        if (node.classList) {
          node.classList.add(className);
        } else if (!_this2.hasClass(className)) {
          _this2[0].className += " " + className;
        }
      });
    }

    return this;
  };

  $Element.prototype.removeClass = function () {var _arguments3 = arguments;for (var _len3 = arguments.length, classNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {classNames[_key3] = arguments[_key3];}
    var node = this[0];
    if (node) {
      classNames.forEach(function (className) {
        if (typeof className !== "string") {
          throw new MethodError("removeClass", _arguments3);
        }
        if (node.classList) {
          node.classList.remove(className);
        } else {
          node.className = element$classes$$normalizedClass(node).replace(" " + className + " ", " ").trim();
        }
      });
    }

    return this;
  };

  $Element.prototype.toggleClass = function (className, force) {
    if (typeof className !== "string") {
      throw new MethodError("toggleClass", arguments);
    }

    if (typeof force !== "boolean") {
      force = !this.hasClass(className);
    }

    var node = this[0];
    if (node) {
      if (force) {
        this.addClass(className);
      } else {
        this.removeClass(className);
      }
    }

    return force;
  };

  // Helper for CSS properties access

  var util$stylehooks$$reDash = /\-./g,
  util$stylehooks$$hooks = { get: {}, set: {}, find: function find(name, style) {
      var propName = name.replace(util$stylehooks$$reDash, function (str) {return str[1].toUpperCase();});

      if (!(propName in style)) {
        propName = VENDOR_PREFIXES.
        map(function (prefix) {return prefix + propName[0].toUpperCase() + propName.slice(1);}).
        filter(function (prop) {return prop in style;})[0];
      }

      return this.get[name] = this.set[name] = propName;
    } },
  util$stylehooks$$directions = ["Top", "Right", "Bottom", "Left"],
  util$stylehooks$$shortCuts = {
    font: ["fontStyle", "fontSize", "/", "lineHeight", "fontFamily"],
    padding: util$stylehooks$$directions.map(function (dir) {return "padding" + dir;}),
    margin: util$stylehooks$$directions.map(function (dir) {return "margin" + dir;}),
    "border-width": util$stylehooks$$directions.map(function (dir) {return "border" + dir + "Width";}),
    "border-style": util$stylehooks$$directions.map(function (dir) {return "border" + dir + "Style";}) };


  // normalize float css property
  util$stylehooks$$hooks.get.float = util$stylehooks$$hooks.set.float = "cssFloat";

  // Exclude the following css properties from adding suffix 'px'
  "fill-opacity font-weight line-height opacity orphans widows z-index zoom".split(" ").forEach(function (propName) {
    var stylePropName = propName.replace(util$stylehooks$$reDash, function (str) {return str[1].toUpperCase();});

    util$stylehooks$$hooks.get[propName] = stylePropName;
    util$stylehooks$$hooks.set[propName] = function (value, style) {
      style[stylePropName] = value.toString();
    };
  });

  // normalize property shortcuts
  util$index$$keys(util$stylehooks$$shortCuts).forEach(function (key) {
    var props = util$stylehooks$$shortCuts[key];

    util$stylehooks$$hooks.get[key] = function (style) {
      var result = [],
      hasEmptyStyleValue = function hasEmptyStyleValue(prop, index) {
        result.push(prop === "/" ? prop : style[prop]);

        return !result[index];
      };

      return props.some(hasEmptyStyleValue) ? "" : result.join(" ");
    };

    util$stylehooks$$hooks.set[key] = function (value, style) {
      if (value && "cssText" in style) {
        // normalize setting a complex property across browsers
        style.cssText += ";" + key + ":" + value;
      } else {
        props.forEach(function (name) {return style[name] = typeof value === "number" ? value + "px" : value.toString();});
      }
    };
  });

  var util$stylehooks$$default = util$stylehooks$$hooks;

  $Element.prototype.css = function (name, value) {var _this3 = this;
    var len = arguments.length;
    var node = this[0];

    if (!node) {
      if (len === 1 && util$index$$isArray(name)) {
        return {};
      }

      if (len !== 1 || typeof name !== "string") {
        return this;
      }

      return;
    }

    var style = node.style;
    var computed;

    if (len === 1 && (typeof name === "string" || util$index$$isArray(name))) {
      var strategy = function strategy(name) {
        var getter = util$stylehooks$$default.get[name] || util$stylehooks$$default.find(name, style),
        value = typeof getter === "function" ? getter(style) : style[getter];

        if (!value) {
          if (!computed) computed = util$index$$computeStyle(node);

          value = typeof getter === "function" ? getter(computed) : computed[getter];
        }

        return value;
      };

      if (typeof name === "string") {
        return strategy(name);
      } else {
        return name.map(strategy).reduce(function (memo, value, index) {
          memo[name[index]] = value;

          return memo;
        }, {});
      }
    }

    if (len === 2 && typeof name === "string") {
      var setter = util$stylehooks$$default.set[name] || util$stylehooks$$default.find(name, style);

      if (typeof value === "function") {
        value = value(this);
      }

      if (value == null) value = "";

      if (typeof setter === "function") {
        setter(value, style);
      } else {
        style[setter] = typeof value === "number" ? value + "px" : value.toString();
      }
    } else if (len === 1 && name && typeof name === "object") {
      util$index$$keys(name).forEach(function (key) {_this3.css(key, name[key]);});
    } else {
      throw new MethodError("css", arguments);
    }

    return this;
  };

  function element$manipulation$$makeMethod(fastStrategy, requiresParent, strategy) {
    return function () {var _this4 = this;
      var node = this[0];

      if (!node || requiresParent && !node.parentNode) return this;

      // the idea of the algorithm is to construct HTML string
      // when possible or use document fragment as a fallback to
      // invoke manipulation using a single method call
      var fragment = fastStrategy ? "" : node.ownerDocument.createDocumentFragment();for (var _len4 = arguments.length, contents = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {contents[_key4] = arguments[_key4];}

      contents.forEach(function (content) {
        if (typeof content === "function") {
          content = content(_this4);
        }

        if (typeof content === "string") {
          if (typeof fragment === "string") {
            fragment += content.trim();
          } else {
            content = $Document(node.ownerDocument).createAll(content);
          }
        } else if (content instanceof $Element) {
          content = [content];
        }

        if (util$index$$isArray(content)) {
          if (typeof fragment === "string") {
            // append existing string to fragment
            content = $Document(node.ownerDocument).createAll(fragment).concat(content);
            // fallback to document fragment strategy
            fragment = node.ownerDocument.createDocumentFragment();
          }

          content.forEach(function (el) {
            fragment.appendChild(el[0]);
          });
        }
      });

      if (typeof fragment === "string") {
        node.insertAdjacentHTML(fastStrategy, fragment);
      } else {
        strategy(node, fragment);
      }

      return this;
    };
  }

  $Element.prototype.after = element$manipulation$$makeMethod("afterend", true, function (node, relatedNode) {
    node.parentNode.insertBefore(relatedNode, node.nextSibling);
  });

  $Element.prototype.before = element$manipulation$$makeMethod("beforebegin", true, function (node, relatedNode) {
    node.parentNode.insertBefore(relatedNode, node);
  });

  $Element.prototype.prepend = element$manipulation$$makeMethod("afterbegin", false, function (node, relatedNode) {
    node.insertBefore(relatedNode, node.firstChild);
  });

  $Element.prototype.append = element$manipulation$$makeMethod("beforeend", false, function (node, relatedNode) {
    node.appendChild(relatedNode);
  });

  $Element.prototype.replace = element$manipulation$$makeMethod("", true, function (node, relatedNode) {
    node.parentNode.replaceChild(relatedNode, node);
  });

  $Element.prototype.remove = element$manipulation$$makeMethod("", true, function (node) {
    node.parentNode.removeChild(node);
  });

  var util$selectorhooks$$default = {
    ":focus": function focus(node) {return node === node.ownerDocument.activeElement;}

    // ":visible": (node) => !isHidden(node),

    // ":hidden": isHidden
  };

  $Element.prototype.matches = function (selector) {
    if (!selector || typeof selector !== "string") {
      throw new MethodError("matches", arguments);
    }

    var checker = util$selectorhooks$$default[selector] || util$selectormatcher$$default(selector);

    return !!checker(this[0]);
  };

  $Element.prototype.offset = function () {
    var node = this[0];
    var result = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };

    if (node) {
      var docEl = (node.ownerDocument || node).documentElement;
      var clientTop = docEl.clientTop;
      var clientLeft = docEl.clientLeft;
      var scrollTop = WINDOW.pageYOffset || docEl.scrollTop;
      var scrollLeft = WINDOW.pageXOffset || docEl.scrollLeft;
      var boundingRect = node.getBoundingClientRect();

      result.top = boundingRect.top + scrollTop - clientTop;
      result.left = boundingRect.left + scrollLeft - clientLeft;
      result.right = boundingRect.right + scrollLeft - clientLeft;
      result.bottom = boundingRect.bottom + scrollTop - clientTop;
      result.width = boundingRect.right - boundingRect.left;
      result.height = boundingRect.bottom - boundingRect.top;
    }

    return result;
  };

  function element$traversing$$makeMethod(methodName, propertyName, all) {
    return function (selector) {
      if (selector && typeof selector !== "string") {
        throw new MethodError(methodName, arguments);
      }

      var node = this[0];
      var result = all ? [] : null;

      if (node) {
        var matcher = util$selectormatcher$$default(selector);
        // method closest starts traversing from the element itself
        // except no selector was specified where it returns parent
        if (node && (!matcher || methodName !== "closest")) {
          node = node[propertyName];
        }

        for (var it = node; it; it = it[propertyName]) {
          if (!matcher || matcher(it)) {
            if (result) {
              result.push($Element(it));
            } else {
              result = $Element(it);
              // need only the first element
              break;
            }
          }
        }
      }

      return result || new $Element();
    };
  }

  $Element.prototype.next = element$traversing$$makeMethod("next", "nextElementSibling");

  $Element.prototype.prev = element$traversing$$makeMethod("prev", "previousElementSibling");

  $Element.prototype.nextAll = element$traversing$$makeMethod("nextAll", "nextElementSibling", true);

  $Element.prototype.prevAll = element$traversing$$makeMethod("prevAll", "previousElementSibling", true);

  $Element.prototype.closest = element$traversing$$makeMethod("closest", "parentNode");

  $Element.prototype.value = function (content) {
    var node = this[0];

    if (!node) return content ? this : void 0;

    var tagName = node.tagName;

    if (content === void 0) {
      if (tagName === "SELECT") {
        return ~node.selectedIndex ? node.options[node.selectedIndex].value : "";
      } else if (tagName === "OPTION") {
        return node.hasAttribute("value") ? node.value : node.text;
      } else if (tagName === "INPUT" || tagName === "TEXTAREA") {
        return node.value;
      } else {
        return node.textContent;
      }
    } else {
      switch (tagName) {
        case "INPUT":
        case "OPTION":
        case "TEXTAREA":
          if (typeof content === "function") {
            content = content(node.value);
          }
          node.value = content;
          break;

        case "SELECT":
          if (typeof content === "function") {
            content = content(node.value);
          }
          if (util$index$$every.call(node.options, function (o) {return !(o.selected = o.value === content);})) {
            node.selectedIndex = -1;
          }
          break;

        default:
          if (typeof content === "function") {
            content = content(node.textContent);
          }
          node.textContent = content;}


      return this;
    }
  };


  $Element.prototype.empty = function () {
    return this.value("");
  };

  var util$animationhandler$$TRANSITION_EVENT_TYPE = WEBKIT_PREFIX ? "webkitTransitionEnd" : "transitionend";
  var util$animationhandler$$ANIMATION_EVENT_TYPE = WEBKIT_PREFIX ? "webkitAnimationEnd" : "animationend";

  function util$animationhandler$$AnimationHandler(node, animationName) {
    this.node = node;
    this.style = node.style;
    this.eventType = animationName ? util$animationhandler$$ANIMATION_EVENT_TYPE : util$animationhandler$$TRANSITION_EVENT_TYPE;
    this.animationName = animationName;
  }

  util$animationhandler$$AnimationHandler.prototype = {
    handleEvent: function handleEvent(e) {
      if (!this.animationName || e.animationName === this.animationName) {
        if (this.animationName) {
          this.style.animationName = "";
          this.style.animationDirection = "";
        }

        this.node.removeEventListener(this.eventType, this, true);

        if (typeof this.callback === "function") {
          this.callback();
        }
      }
    },
    start: function start(callback, animationDirection) {
      this.callback = callback;

      if (this.animationName) {
        this.style.animationName = this.animationName;
        this.style.animationDirection = animationDirection;
      }

      this.node.addEventListener(this.eventType, this, true);
    } };


  var util$animationhandler$$default = util$animationhandler$$AnimationHandler;

  function element$visibility$$makeMethod(methodName, condition) {
    return function (animationName, callback) {var _this5 = this;
      if (typeof animationName !== "string") {
        callback = animationName;
        animationName = null;
      }

      if (callback && typeof callback !== "function") {
        throw new MethodError(methodName, arguments);
      }

      var node = this[0];

      if (!node) return this;

      var computed = util$index$$computeStyle(node);
      // Determine of we need animation by checking if an element
      // has non-zero width. Triggers reflow but fixes animation
      // for new elements inserted into the DOM in some browsers

      if (node && computed.width) {
        var complete = function complete() {
          node.style.visibility = condition ? "hidden" : "inherit";

          if (typeof callback === "function") {
            callback(_this5);
          }
        };

        if (!node.ownerDocument.documentElement.contains(node)) {
          util$index$$raf(complete); // skip animating of detached elements
        } else if (!animationName && parseFloat(computed["transition-duration"]) === 0) {
          util$index$$raf(complete); // skip animating with zero transition duration
        } else if (animationName && parseFloat(computed["animation-duration"]) === 0) {
          util$index$$raf(complete); // skip animating with zero animation duration
        } else {
          // always make an element visible before animation start
          node.style.visibility = "visible";

          new util$animationhandler$$default(node, animationName).
          start(complete, condition ? "normal" : "reverse");
        }
      }
      // trigger CSS3 transition if it exists
      return this.set("aria-hidden", String(condition));
    };
  }

  $Element.prototype.show = element$visibility$$makeMethod("show", false);

  $Element.prototype.hide = element$visibility$$makeMethod("hide", true);

  $Node.prototype.clone = function (deepCopy) {
    if (typeof deepCopy !== "boolean") {
      throw new MethodError("clone", arguments);
    }

    var node = this[0];

    if (node) {
      var clonedNode = node.cloneNode(deepCopy);

      if (this instanceof $Element) {
        return new $Element(clonedNode);
      } else if (this instanceof $Document) {
        return new $Document(clonedNode);
      }
    }

    return new $Node();
  };

  $Node.prototype.contains = function (element) {
    var node = this[0];

    if (!node) return false;

    if (element instanceof $Element) {
      var otherNode = element[0];

      if (otherNode === node) return true;
      if (node.contains) {
        return node.contains(otherNode);
      } else {
        return node.compareDocumentPosition(otherNode) & 16;
      }
    }

    throw new MethodError("contains", arguments);
  };

  // big part of code inspired by Sizzle:
  // https://github.com/jquery/sizzle/blob/master/sizzle.js

  var node$find$$REGEXP_QUICK = /^(?:(\w+)|\.([\w\-]+))$/;
  var node$find$$REGEXP_ESCAPE = /'|\\/g;

  function node$find$$makeMethod(methodName, all) {
    return function (selector) {
      if (typeof selector !== "string") {
        throw new MethodError(methodName, arguments);
      }

      var node = this[0];

      if (!node) return all ? [] : new $Node();

      var quickMatch = node$find$$REGEXP_QUICK.exec(selector);
      var result, old, nid, context;

      if (quickMatch) {
        if (quickMatch[1]) {
          // speed-up: "TAG"
          result = node.getElementsByTagName(selector);
        } else {
          // speed-up: ".CLASS"
          result = node.getElementsByClassName(quickMatch[2]);
        }

        if (result && !all) result = result[0];
      } else {
        old = true;
        context = node;

        if (!(this instanceof $Document)) {
          // qSA works strangely on Element-rooted queries
          // We can work around this by specifying an extra ID on the root
          // and working up from there (Thanks to Andrew Dupont for the technique)
          if (old = node.getAttribute("id")) {
            nid = old.replace(node$find$$REGEXP_ESCAPE, "\\$&");
          } else {
            nid = "___40000__";
            node.setAttribute("id", nid);
          }

          nid = "[id='" + nid + "'] ";
          selector = nid + selector.split(",").join("," + nid);
        }

        result = context["querySelector" + all](selector);

        if (!old) node.removeAttribute("id");
      }

      return all ? util$index$$map.call(result, $Element) : $Element(result);
    };
  }

  $Node.prototype.find = node$find$$makeMethod("find", "");

  $Node.prototype.findAll = node$find$$makeMethod("findAll", "All");

  var util$eventhooks$$hooks = {};
  if ("onfocusin" in HTML) {
    util$eventhooks$$hooks.focus = function (handler) {handler._type = "focusin";};
    util$eventhooks$$hooks.blur = function (handler) {handler._type = "focusout";};
  } else {
    // firefox doesn't support focusin/focusout events
    util$eventhooks$$hooks.focus = util$eventhooks$$hooks.blur = function (handler) {
      handler.options.capture = true;
    };
  }
  if (DOCUMENT.createElement("input").validity) {
    util$eventhooks$$hooks.invalid = function (handler) {
      handler.options.capture = true;
    };
  }

  var util$eventhooks$$default = util$eventhooks$$hooks;

  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
  var util$eventhandler$$supportsPassive = false;
  try {
    var util$eventhandler$$opts = Object.defineProperty({}, "passive", {
      get: function get() {
        util$eventhandler$$supportsPassive = true;
      } });

    WINDOW.addEventListener("test", null, util$eventhandler$$opts);
  } catch (e) {}

  function util$eventhandler$$EventHandler(context, node, options, args) {
    this.context = context;
    this.node = node;
    this.options = options;
    this.args = args;

    if (options.selector) {
      this.matcher = util$selectormatcher$$default(options.selector, node);
    }
  }

  util$eventhandler$$EventHandler.prototype = {
    handleEvent: function handleEvent(e) {
      this.event = e;
      // update value of currentTarget if selector exists
      this.currentTarget = this.matcher ? this.matcher(e.target) : this.node;
      // early stop when target doesn't match selector
      if (this.currentTarget) {
        if (this.options.once === true) {
          this.unsubscribe();
        }

        var args = this.args.map(this.getEventProperty, this);
        // prevent default if handler returns false
        if (this.callback.apply(this.context, args) === false) {
          e.preventDefault();
        }
      }
    },
    getEventProperty: function getEventProperty(name) {var _arguments4 = arguments;
      var e = this.event;
      if (name === "type") {
        return this.type;
      } else if (name === "target" || name === "relatedTarget") {
        return $Element(e[name]);
      } else if (name === "currentTarget") {
        return $Element(this.currentTarget);
      }

      var value = e[name];
      if (typeof value === "function") {
        return function () {return value.apply(e, _arguments4);};
      } else {
        return value;
      }
    },
    subscribe: function subscribe(type, callback) {
      var hook = util$eventhooks$$default[type];

      this.type = type;
      this.callback = callback;

      if (hook) hook(this);

      this.node.addEventListener(this._type || this.type, this, this.getLastArgument());
    },
    unsubscribe: function unsubscribe() {
      this.node.removeEventListener(this._type || this.type, this, this.getLastArgument());
    },
    getLastArgument: function getLastArgument() {
      var lastArg = !!this.options.capture;
      if (this.options.passive && util$eventhandler$$supportsPassive) {
        lastArg = { passive: true, capture: lastArg };
      }
      return lastArg;
    } };


  var util$eventhandler$$default = util$eventhandler$$EventHandler;

  $Node.prototype.fire = function (type, detail) {
    var node = this[0];
    var e, eventType, canContinue;

    if (typeof type === "string") {
      var hook = util$eventhooks$$default[type],
      handler = { options: {} };

      if (hook) handler = hook(handler) || handler;

      eventType = handler._type || type;
    } else {
      throw new MethodError("fire", arguments);
    }

    if (!node) return true;

    e = (node.ownerDocument || node).createEvent("CustomEvent");
    e.initCustomEvent(eventType, true, true, detail);
    canContinue = node.dispatchEvent(e);

    // call native function to trigger default behavior
    if (canContinue && node[type]) {
      var _handleEvent = util$eventhandler$$default.prototype.handleEvent;
      // intercept handleEvent to prevent double event callbacks
      util$eventhandler$$default.prototype.handleEvent = function (e) {
        // prevent re-triggering of the current event
        if (this.type !== type) {
          return _handleEvent.call(this, e);
        }
      };

      node[type]();
      // restore original method
      util$eventhandler$$default.prototype.handleEvent = _handleEvent;
    }

    return canContinue;
  };
  var util$accessorhooks$$hooks = { get: {}, set: {} };

  // fix camel cased attributes
  "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" ").forEach(function (key) {
    util$accessorhooks$$hooks.get[key.toLowerCase()] = function (node) {return node[key];};
  });

  // style hook
  util$accessorhooks$$hooks.get.style = function (node) {return node.style.cssText;};
  util$accessorhooks$$hooks.set.style = function (node, value) {node.style.cssText = value;};
  // some browsers don't recognize input[type=email] etc.
  util$accessorhooks$$hooks.get.type = function (node) {return node.getAttribute("type") || node.type;};

  var util$accessorhooks$$default = util$accessorhooks$$hooks;

  $Node.prototype.get = function (name, defaultValue) {var _this6 = this;
    var node = this[0];
    var hook = util$accessorhooks$$default.get[name];
    var value;

    if (!node) return value;

    if (arguments.length === 0) {
      return node.innerHTML;
    }

    if (hook) {
      value = hook(node, name);
    } else if (typeof name === "string") {
      if (name in node) {
        value = node[name];
      } else if (this instanceof $Element) {
        value = node.getAttribute(name);
      } else {
        value = null;
      }
    } else if (util$index$$isArray(name)) {
      value = name.reduce(function (memo, key) {
        return memo[key] = _this6.get(key), memo;
      }, {});
    } else {
      throw new MethodError("get", arguments);
    }

    return value != null ? value : defaultValue;
  };

  $Node.prototype.on = function (type, options, args, callback) {
    if (typeof type === "string") {
      if (typeof options === "string") {
        options = { selector: options };
      } else if (typeof options === "function") {
        callback = options;
        options = {};
        args = [];
      } else if (typeof options === "object") {
        if (util$index$$isArray(options)) {
          callback = args;
          args = options;
          options = {};
        }
      }

      if (typeof args === "function") {
        callback = args;
        args = [];
      }

      if (options && typeof options === "object" && typeof callback === "function") {
        var node = this[0];

        if (!node) return function () {};

        var handler = new util$eventhandler$$default(this, node, options, args);
        handler.subscribe(type, callback);
        return function () {return handler.unsubscribe();};
      }
    }

    throw new MethodError("on", arguments);
  };

  $Node.prototype.set = function (name, value) {var _this7 = this;
    var node = this[0];
    var len = arguments.length;
    var hook = util$accessorhooks$$default.set[name];

    if (node) {
      if (typeof name === "string") {
        if (len === 1) {// innerHTML shortcut
          value = name;
          name = "innerHTML";
        }

        if (typeof value === "function") {
          value = value(this.get(name));
        }

        if (hook) {
          hook(node, value);
        } else if (value == null && this instanceof $Element) {
          node.removeAttribute(name);
        } else if (name in node) {
          node[name] = value;
        } else if (this instanceof $Element) {
          node.setAttribute(name, value);
        }
      } else if (util$index$$isArray(name)) {
        if (len === 1) {
          node.textContent = ""; // clear node children
          this.append.apply(this, name);
        } else {
          name.forEach(function (key) {_this7.set(key, value);});
        }
      } else if (typeof name === "object") {
        util$index$$keys(name).forEach(function (key) {_this7.set(key, name[key]);});
      } else {
        throw new MethodError("set", arguments);
      }
    }

    return this;
  };
})();

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * better-dateinput-polyfill: input[type=date] polyfill for better-dom
 * @version 3.2.7 Fri, 31 May 2019 21:09:24 GMT
 * @link https://github.com/chemerisuk/better-dateinput-polyfill
 * @copyright 2019 Maksim Chemerisuk
 * @license MIT
 */
(function () {
  "use strict";

  /* globals html:false */
  var MAIN_CSS = "dateinput-picker{display:inline-block;vertical-align:bottom}dateinput-picker>object{position:absolute;z-index:1000;width:21rem;height:20rem;max-height:20rem;box-shadow:0 8px 24px #888;background:#fff;opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transform-origin:0 0;transform-origin:0 0;transition:.1s ease-out}dateinput-picker[aria-hidden=true]>object{opacity:0;-webkit-transform:skew(-25deg) scaleX(.75);transform:skew(-25deg) scaleX(.75);visibility:hidden;height:0}dateinput-picker[aria-expanded=true]>object{height:13.75rem;max-height:13.75rem}dateinput-picker+input{color:transparent!important;caret-color:transparent!important}dateinput-picker+input::selection{background:none}dateinput-picker+input::-moz-selection{background:none}";
  var HTML = DOM.find("html");
  var DEFAULT_LANGUAGE = HTML.get("lang") || void 0;
  var DEVICE_TYPE = "orientation" in window ? "mobile" : "desktop";

  var TYPE_SUPPORTED = function () {
    // use a stronger type support detection that handles old WebKit browsers:
    // http://www.quirksmode.org/blog/archives/2015/03/better_modern_i.html
    return DOM.create("<input type='date'>").value("_").value() !== "_";
  }();

  function formatLocalDate(date) {
    return [date.getFullYear(), ("0" + (date.getMonth() + 1)).slice(-2), ("0" + date.getDate()).slice(-2)].join("-");
  }

  function parseLocalDate(value) {
    // datetime value parsed with local timezone
    var dateValue = new Date((value || "?") + "T00:00");
    return isNaN(dateValue.getTime()) ? null : dateValue;
  }

  var globalFormatters = DOM.findAll("meta[name^='data-format:']").reduce(function (globalFormatters, meta) {
    var key = meta.get("name").split(":")[1].trim();
    var formatOptions = JSON.parse(meta.get("content"));

    if (key) {
      try {
        globalFormatters[key] = new window.Intl.DateTimeFormat(DEFAULT_LANGUAGE, formatOptions);
      } catch (err) {}
    }

    return globalFormatters;
  }, {});
  DOM.extend("input[type=date]", {
    constructor: function constructor() {
      if (this._isPolyfillEnabled()) return false;
      var svgTextOptions = this.css(["color", "font-size", "font-family", "font-style", "line-height", "padding-left", "border-left-width", "text-indent"]);
      svgTextOptions.dx = ["padding-left", "border-left-width", "text-indent"].map(function (p) {
        return parseFloat(svgTextOptions[p]);
      }).reduce(function (a, b) {
        return a + b;
      });
      svgTextOptions.css = ["font-family", "font-style", "line-height", "font-size"].map(function (p) {
        return p + ":" + svgTextOptions[p];
      }).join(";").replace(/"/g, ""); // FIXME: fix issue in html helper and drop replace below

      this._backgroundTemplate = ("<svg xmlns=\"http://www.w3.org/2000/svg\"><text x=\"" + svgTextOptions.dx + "\" y=\"50%\" dy=\".35em\" fill=\"" + svgTextOptions.color + "\"></text></svg>").replace("></", " style=\"" + svgTextOptions.css + "\"></");
      var picker = DOM.create("<dateinput-picker tabindex='-1'>"); // store reference to the input

      picker._parentInput = this; // add <dateinput-picker> to the document

      this.before(picker.hide()); // store reference to the picker

      this._picker = picker;

      var resetDisplayedText = this._syncDisplayedText.bind(this, "defaultValue");

      var updateDisplayedText = this._syncDisplayedText.bind(this, "value"); // patch value property for the input element


      var valueDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
      Object.defineProperty(this[0], "value", {
        configurable: false,
        enumerable: true,
        get: valueDescriptor.get,
        set: this._setValue.bind(this, valueDescriptor.set, updateDisplayedText)
      });
      Object.defineProperty(this[0], "valueAsDate", {
        configurable: false,
        enumerable: true,
        get: this._getValueAsDate.bind(this),
        set: this._setValueAsDate.bind(this)
      }); // sync picker visibility on focus/blur

      this.on("change", updateDisplayedText);
      this.on("focus", this._focusInput.bind(this));
      this.on("blur", this._blurInput.bind(this));
      this.on("keydown", ["which"], this._keydownInput.bind(this));
      this.on("click", this._focusInput.bind(this)); // form events do not trigger any state change

      this.closest("form").on("reset", resetDisplayedText);
      resetDisplayedText(); // present initial value
    },
    _isPolyfillEnabled: function _isPolyfillEnabled() {
      var polyfillType = this.get("data-polyfill");
      if (polyfillType === "none") return true;

      if (polyfillType && (polyfillType === DEVICE_TYPE || polyfillType === "all")) {
        // remove native browser implementation
        this.set("type", "text"); // force applying the polyfill

        return false;
      }

      return TYPE_SUPPORTED;
    },
    _setValue: function _setValue(setter, updateDisplayedText, value) {
      var dateValue = parseLocalDate(value);

      if (!dateValue) {
        value = "";
      } else {
        var min = new Date((this.get("min") || "?") + "T00:00");
        var max = new Date((this.get("max") || "?") + "T00:00");

        if (dateValue < min) {
          value = formatLocalDate(min);
        } else if (dateValue > max) {
          value = formatLocalDate(max);
        }
      }

      setter.call(this[0], value);
      updateDisplayedText();
    },
    _getValueAsDate: function _getValueAsDate() {
      return parseLocalDate(this.value());
    },
    _setValueAsDate: function _setValueAsDate(dateValue) {
      if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
        this.value(formatLocalDate(dateValue));
      }
    },
    _syncDisplayedText: function _syncDisplayedText(propName) {
      var displayText = this.get(propName);
      var dateValue = parseLocalDate(displayText);

      if (dateValue) {
        var formatOptions = this.get("data-format");
        var formatter = globalFormatters[formatOptions];

        try {
          // set hours to '12' to fix Safari bug in Date#toLocaleString
          var presentedDate = new Date(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate(), 12);

          if (formatter) {
            displayText = formatter.format(presentedDate);
          } else {
            displayText = presentedDate.toLocaleDateString(DEFAULT_LANGUAGE, formatOptions ? JSON.parse(formatOptions) : {});
          }
        } catch (err) {}
      }

      this.css("background-image", "url('data:image/svg+xml," + encodeURIComponent(this._backgroundTemplate.replace("></", ">" + displayText + "</")) + "')");
    },
    _keydownInput: function _keydownInput(which) {
      if (which === 13 && this._picker.get("aria-hidden") === "true") {
        // ENTER key should submit form if calendar is hidden
        return true;
      }

      if (which === 32) {
        // SPACE key toggles calendar visibility
        if (!this.get("readonly")) {
          this._picker.toggleState(false);

          this._picker.invalidateState();

          if (this._picker.get("aria-hidden") === "true") {
            this._picker.show();
          } else {
            this._picker.hide();
          }
        }
      } else if (which === 27 || which === 9 || which === 13) {
        this._picker.hide(); // ESC, TAB or ENTER keys hide calendar

      } else if (which === 8 || which === 46) {
        this.empty().fire("change"); // BACKSPACE, DELETE clear value
      } else if (which === 17) {
        // CONTROL toggles calendar mode
        this._picker.toggleState();

        this._picker.invalidateState();
      } else {
        var delta;

        if (which === 74 || which === 40) {
          delta = 7;
        } else if (which === 75 || which === 38) {
          delta = -7;
        } else if (which === 76 || which === 39) {
          delta = 1;
        } else if (which === 72 || which === 37) {
          delta = -1;
        }

        if (delta) {
          var currentDate = this.get("valueAsDate") || new Date();
          var expanded = this._picker.get("aria-expanded") === "true";

          if (expanded && (which === 40 || which === 38)) {
            currentDate.setMonth(currentDate.getMonth() + (delta > 0 ? 4 : -4));
          } else if (expanded && (which === 37 || which === 39)) {
            currentDate.setMonth(currentDate.getMonth() + (delta > 0 ? 1 : -1));
          } else {
            currentDate.setDate(currentDate.getDate() + delta);
          }

          this.value(formatLocalDate(currentDate)).fire("change");
        }
      } // prevent default action except if it was TAB so
      // do not allow to change the value manually


      return which === 9;
    },
    _blurInput: function _blurInput() {
      this._picker.hide();
    },
    _focusInput: function _focusInput() {
      if (this.get("readonly")) return false;
      var offset = this.offset();

      var pickerOffset = this._picker.offset();

      var marginTop = offset.height; // #3: move calendar to the top when passing cross browser window bounds

      if (HTML.get("clientHeight") < offset.bottom + pickerOffset.height) {
        marginTop = -pickerOffset.height;
      } // always reset picker mode to the default


      this._picker.toggleState(false);

      this._picker.invalidateState(); // always recalculate picker top position


      this._picker.css("margin-top", marginTop).show();
    }
  });
  DOM.importStyles(MAIN_CSS);
})();
(function () {
  "use strict";

  /* globals html:false */
  var PICKER_CSS = "body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:2.5rem;text-align:center;cursor:default;-webkit-user-select:none;-ms-user-select:none;user-select:none;margin:0;overflow:hidden}a{position:absolute;width:3rem;height:2.5rem}a[rel=prev]{left:0}a[rel=next]{right:0}b{display:block;cursor:pointer}table{width:100%;table-layout:fixed;border-spacing:0;border-collapse:collapse;text-align:center;line-height:2.5rem}table+table{line-height:3.75rem;background:#fff;position:absolute;top:2.5rem;left:0;opacity:1;transition:.1s ease-out}table+table[aria-hidden=true]{visibility:hidden!important;opacity:0}td,th{padding:0}thead{background:#ddd;font-size:smaller;font-weight:700}[aria-selected=false],[aria-disabled=true]{color:#888}[aria-selected=true]{box-shadow:inset 0 0 0 1px #888}a:hover,td:hover,[aria-disabled=true],[aria-selected=true]{background-color:#f5f5f5}";
  var HTML = DOM.find("html");
  var DEFAULT_LANGUAGE = HTML.get("lang") || void 0;
  var CLICK_EVENT_TYPE = "orientation" in window ? "touchend" : "mousedown";

  var INTL_SUPPORTED = function () {
    try {
      new Date().toLocaleString("_");
    } catch (err) {
      return err instanceof RangeError;
    }

    return false;
  }();

  function repeat(times, fn) {
    if (typeof fn === "string") {
      return Array(times + 1).join(fn);
    } else {
      return Array.apply(null, Array(times)).map(fn).join("");
    }
  }

  function ampm(pos, neg) {
    return DEFAULT_LANGUAGE === "en-US" ? pos : neg;
  }

  function localeWeekday(index) {
    var date = new Date();
    date.setDate(date.getDate() - date.getDay() + index + ampm(0, 1));
    /* istanbul ignore else */

    if (INTL_SUPPORTED) {
      try {
        return date.toLocaleDateString(DEFAULT_LANGUAGE, {
          weekday: "short"
        });
      } catch (err) {}
    }

    return date.toUTCString().split(",")[0].slice(0, 2);
  }

  function localeMonth(index) {
    var date = new Date(null, index);
    /* istanbul ignore else */

    if (INTL_SUPPORTED) {
      try {
        return date.toLocaleDateString(DEFAULT_LANGUAGE, {
          month: "short"
        });
      } catch (err) {}
    }

    return date.toUTCString().split(" ")[2];
  }

  function localeMonthYear(dateValue) {
    // set hours to '12' to fix Safari bug in Date#toLocaleString
    var date = new Date(dateValue.getFullYear(), dateValue.getMonth(), 12);
    /* istanbul ignore else */

    if (INTL_SUPPORTED) {
      try {
        return date.toLocaleDateString(DEFAULT_LANGUAGE, {
          month: "long",
          year: "numeric"
        });
      } catch (err) {}
    }

    return date.toUTCString().split(" ").slice(2, 4).join(" ");
  }

  var PICKER_BODY_HTML = "<a rel=\"prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"100%\" viewBox=\"0 0 16 16\"><path d=\"M11.5 14.06L1 8L11.5 1.94z\"/></svg></a><a rel=\"next\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"100%\" viewBox=\"0 0 16 16\"><path d=\"M15 8L4.5 14.06L4.5 1.94z\"/></svg></a><b></b><table><thead>" + repeat(7, function (_, i) {
    return "<th>" + localeWeekday(i);
  }) + "</thead><tbody>" + repeat(7, "<tr>" + repeat(7, "<td>") + "</tr>") + "</tbody></table><table><tbody>" + repeat(3, function (_, i) {
    return "<tr>" + repeat(4, function (_, j) {
      return "<td>" + localeMonth(i * 4 + j);
    });
  }) + "</tbody></table>";
  DOM.extend("dateinput-picker", {
    constructor: function constructor() {
      var IE = "ScriptEngineMajorVersion" in window;
      var object = DOM.create("<object type='text/html' width='100%' height='100%'>"); // non-IE: must be BEFORE the element added to the document

      if (!IE) {
        object.set("data", "about:blank");
      } // load content when <object> is ready


      this.on("load", {
        capture: true,
        once: true
      }, ["target"], this._loadContent.bind(this)); // add object element to the document

      this.append(object); // IE: must be AFTER the element added to the document

      if (IE) {
        object.set("data", "about:blank");
      }
    },
    _loadContent: function _loadContent(object) {
      var pickerRoot = DOM.constructor(object.get("contentDocument"));
      var pickerBody = pickerRoot.find("body"); // initialize picker content

      pickerRoot.importStyles(PICKER_CSS);
      pickerBody.set(PICKER_BODY_HTML); // internal references

      this._calendarDays = pickerBody.find("table");
      this._calendarMonths = pickerBody.find("table+table");
      this._calendarCaption = pickerBody.find("b"); // picker invalidate handlers

      this._calendarDays.on("picker:invalidate", ["detail"], this._invalidateDays.bind(this));

      this._calendarMonths.on("picker:invalidate", ["detail"], this._invalidateMonths.bind(this));

      pickerBody.on("picker:invalidate", ["detail"], this._invalidateCaption.bind(this)); // picker click handlers

      pickerBody.on(CLICK_EVENT_TYPE, "a", ["currentTarget"], this._clickPickerButton.bind(this));
      pickerBody.on(CLICK_EVENT_TYPE, "td", ["target"], this._clickPickerDay.bind(this));

      this._calendarCaption.on(CLICK_EVENT_TYPE, this._clickCaption.bind(this)); // prevent input from loosing the focus outline


      pickerBody.on(CLICK_EVENT_TYPE, function () {
        return false;
      });

      this._parentInput.on("change", this.invalidateState.bind(this)); // display calendar for autofocused elements


      if (DOM.get("activeElement") === this._parentInput[0]) {
        this.show();
      }
    },
    _invalidateDays: function _invalidateDays(dateValue) {
      var month = dateValue.getMonth();
      var date = dateValue.getDate();
      var year = dateValue.getFullYear();
      var min = new Date((this._parentInput.get("min") || "?") + "T00:00");
      var max = new Date((this._parentInput.get("max") || "?") + "T00:00");
      var iterDate = new Date(year, month, 1); // move to beginning of the first week in current month

      iterDate.setDate(1 - iterDate.getDay() - ampm(1, iterDate.getDay() === 0 ? 7 : 0)); // update days picker

      this._calendarDays.findAll("td").forEach(function (day) {
        iterDate.setDate(iterDate.getDate() + 1);
        var mDiff = month - iterDate.getMonth(),
            selectedValue = null,
            disabledValue = null;
        if (year !== iterDate.getFullYear()) mDiff *= -1;

        if (iterDate < min || iterDate > max) {
          disabledValue = "true";
        } else if (mDiff > 0 || mDiff < 0) {
          selectedValue = "false";
        } else if (date === iterDate.getDate()) {
          selectedValue = "true";
        }

        day._ts = iterDate.getTime();
        day.set("aria-selected", selectedValue);
        day.set("aria-disabled", disabledValue);
        day.value(iterDate.getDate());
      });
    },
    _invalidateMonths: function _invalidateMonths(dateValue) {
      var month = dateValue.getMonth();
      var year = dateValue.getFullYear();
      var min = new Date((this._parentInput.get("min") || "?") + "T00:00");
      var max = new Date((this._parentInput.get("max") || "?") + "T00:00");
      var iterDate = new Date(year, month, 1);

      this._calendarMonths.findAll("td").forEach(function (day, index) {
        iterDate.setMonth(index);
        var mDiff = month - iterDate.getMonth(),
            selectedValue = null;

        if (iterDate < min || iterDate > max) {
          selectedValue = "false";
        } else if (!mDiff) {
          selectedValue = "true";
        }

        day._ts = iterDate.getTime();
        day.set("aria-selected", selectedValue);
      });
    },
    _invalidateCaption: function _invalidateCaption(dateValue) {
      var captionText = dateValue.getFullYear();

      if (this.get("aria-expanded") !== "true") {
        captionText = localeMonthYear(dateValue);
      } // update calendar caption


      this._calendarCaption.value(captionText);
    },
    _clickCaption: function _clickCaption() {
      this.toggleState();
      this.invalidateState();
    },
    _clickPickerButton: function _clickPickerButton(btn) {
      var sign = btn.get("rel") === "next" ? 1 : -1;
      var targetDate = this._parentInput.get("valueAsDate") || new Date();

      if (this.get("aria-expanded") === "true") {
        targetDate.setFullYear(targetDate.getFullYear() + sign);
      } else {
        targetDate.setMonth(targetDate.getMonth() + sign);
      }

      this._parentInput.set("valueAsDate", targetDate).fire("change");
    },
    _clickPickerDay: function _clickPickerDay(target) {
      var targetDate;

      if (this.get("aria-expanded") === "true") {
        if (isNaN(target._ts)) {
          targetDate = new Date();
        } else {
          targetDate = new Date(target._ts);
        } // switch to date calendar mode


        this.toggleState(false);
      } else {
        if (!isNaN(target._ts)) {
          targetDate = new Date(target._ts);
          this.hide();
        }
      }

      if (targetDate != null) {
        this._parentInput.set("valueAsDate", targetDate).fire("change");
      }
    },
    toggleState: function toggleState(expanded) {
      if (typeof expanded !== "boolean") {
        expanded = this.get("aria-expanded") !== "true";
      }

      this.set("aria-expanded", expanded);
    },
    invalidateState: function invalidateState() {
      var expanded = this.get("aria-expanded") === "true";
      var target = expanded ? this._calendarMonths : this._calendarDays;
      var dateValue = this._parentInput.get("valueAsDate") || new Date(); // refresh current picker

      target.fire("picker:invalidate", dateValue);

      if (expanded) {
        this._calendarMonths.show();
      } else {
        this._calendarMonths.hide();
      }
    }
  });
})();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Polyfill for Object.assign
__webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26).polyfill();


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var cssVars = __webpack_require__(28);
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
    onWarning: function (message) {
        console.warn(message);
    },
    onError: function (message, elm, xhr, url) {
        console.groupCollapsed(message);
        console.error(elm); // 2
        console.error(xhr.status); // 3
        console.error(xhr.statusText); // 4
        console.error(url); // 5
        console.groupEnd();
    }
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * css-vars-ponyfill
 * v2.1.2
 * https://jhildenbiddle.github.io/css-vars-ponyfill/
 * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
(function(global, factory) {
     true ? module.exports = factory() : undefined;
})(this, function() {
    "use strict";
    function _extends() {
        _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
            return arr2;
        }
    }
    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    /*!
   * get-css-data
   * v1.6.3
   * https://github.com/jhildenbiddle/get-css-data
   * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
   * MIT license
   */    function getUrls(urls) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var settings = {
            mimeType: options.mimeType || null,
            onBeforeSend: options.onBeforeSend || Function.prototype,
            onSuccess: options.onSuccess || Function.prototype,
            onError: options.onError || Function.prototype,
            onComplete: options.onComplete || Function.prototype
        };
        var urlArray = Array.isArray(urls) ? urls : [ urls ];
        var urlQueue = Array.apply(null, Array(urlArray.length)).map(function(x) {
            return null;
        });
        function isValidCss() {
            var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var isHTML = cssText.trim().charAt(0) === "<";
            return !isHTML;
        }
        function onError(xhr, urlIndex) {
            settings.onError(xhr, urlArray[urlIndex], urlIndex);
        }
        function onSuccess(responseText, urlIndex) {
            var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
            responseText = returnVal === false ? "" : returnVal || responseText;
            urlQueue[urlIndex] = responseText;
            if (urlQueue.indexOf(null) === -1) {
                settings.onComplete(urlQueue);
            }
        }
        var parser = document.createElement("a");
        urlArray.forEach(function(url, i) {
            parser.setAttribute("href", url);
            parser.href = String(parser.href);
            var isIElte9 = Boolean(document.all && !window.atob);
            var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];
            if (isIElte9CORS) {
                var isSameProtocol = parser.protocol === location.protocol;
                if (isSameProtocol) {
                    var xdr = new XDomainRequest();
                    xdr.open("GET", url);
                    xdr.timeout = 0;
                    xdr.onprogress = Function.prototype;
                    xdr.ontimeout = Function.prototype;
                    xdr.onload = function() {
                        if (isValidCss(xdr.responseText)) {
                            onSuccess(xdr.responseText, i);
                        } else {
                            onError(xdr, i);
                        }
                    };
                    xdr.onerror = function(err) {
                        onError(xdr, i);
                    };
                    setTimeout(function() {
                        xdr.send();
                    }, 0);
                } else {
                    console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
                    onError(null, i);
                }
            } else {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                if (settings.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(settings.mimeType);
                }
                settings.onBeforeSend(xhr, url, i);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200 && isValidCss(xhr.responseText)) {
                            onSuccess(xhr.responseText, i);
                        } else {
                            onError(xhr, i);
                        }
                    }
                };
                xhr.send();
            }
        });
    }
    /**
   * Gets CSS data from <style> and <link> nodes (including @imports), then
   * returns data in order processed by DOM. Allows specifying nodes to
   * include/exclude and filtering CSS data using RegEx.
   *
   * @preserve
   * @param {object}   [options] The options object
   * @param {object}   [options.rootElement=document] Root element to traverse for
   *                   <link> and <style> nodes.
   * @param {string}   [options.include] CSS selector matching <link> and <style>
   *                   nodes to include
   * @param {string}   [options.exclude] CSS selector matching <link> and <style>
   *                   nodes to exclude
   * @param {object}   [options.filter] Regular expression used to filter node CSS
   *                   data. Each block of CSS data is tested against the filter,
   *                   and only matching data is included.
   * @param {object}   [options.useCSSOM=false] Determines if CSS data will be
   *                   collected from a stylesheet's runtime values instead of its
   *                   text content. This is required to get accurate CSS data
   *                   when a stylesheet has been modified using the deleteRule()
   *                   or insertRule() methods because these modifications will
   *                   not be reflected in the stylesheet's text content.
   * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
   *                   1) the XHR object, 2) source node reference, and 3) the
   *                   source URL as arguments.
   * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
   *                   1) CSS text, 2) source node reference, and 3) the source
   *                   URL as arguments.
   * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
   *                   object for inspection, 2) soure node reference, and 3) the
   *                   source URL that failed (either a <link> href or an @import)
   *                   as arguments
   * @param {function} [options.onComplete] Callback after all nodes have been
   *                   processed. Passes 1) concatenated CSS text, 2) an array of
   *                   CSS text in DOM order, and 3) an array of nodes in DOM
   *                   order as arguments.
   *
   * @example
   *
   *   getCssData({
   *     rootElement: document,
   *     include    : 'style,link[rel="stylesheet"]',
   *     exclude    : '[href="skip.css"]',
   *     filter     : /red/,
   *     useCSSOM   : false,
   *     onBeforeSend(xhr, node, url) {
   *       // ...
   *     }
   *     onSuccess(cssText, node, url) {
   *       // ...
   *     }
   *     onError(xhr, node, url) {
   *       // ...
   *     },
   *     onComplete(cssText, cssArray, nodeArray) {
   *       // ...
   *     }
   *   });
   */    function getCssData(options) {
        var regex = {
            cssComments: /\/\*[\s\S]+?\*\//g,
            cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
        };
        var settings = {
            rootElement: options.rootElement || document,
            include: options.include || 'style,link[rel="stylesheet"]',
            exclude: options.exclude || null,
            filter: options.filter || null,
            useCSSOM: options.useCSSOM || false,
            onBeforeSend: options.onBeforeSend || Function.prototype,
            onSuccess: options.onSuccess || Function.prototype,
            onError: options.onError || Function.prototype,
            onComplete: options.onComplete || Function.prototype
        };
        var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter(function(node) {
            return !matchesSelector(node, settings.exclude);
        });
        var cssArray = Array.apply(null, Array(sourceNodes.length)).map(function(x) {
            return null;
        });
        function handleComplete() {
            var isComplete = cssArray.indexOf(null) === -1;
            if (isComplete) {
                var cssText = cssArray.join("");
                settings.onComplete(cssText, cssArray, sourceNodes);
            }
        }
        function handleSuccess(cssText, cssIndex, node, sourceUrl) {
            var returnVal = settings.onSuccess(cssText, node, sourceUrl);
            cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
            resolveImports(cssText, node, sourceUrl, function(resolvedCssText, errorData) {
                if (cssArray[cssIndex] === null) {
                    errorData.forEach(function(data) {
                        return settings.onError(data.xhr, node, data.url);
                    });
                    if (!settings.filter || settings.filter.test(resolvedCssText)) {
                        cssArray[cssIndex] = resolvedCssText;
                    } else {
                        cssArray[cssIndex] = "";
                    }
                    handleComplete();
                }
            });
        }
        function parseImportData(cssText, baseUrl) {
            var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var importData = {};
            importData.rules = (cssText.replace(regex.cssComments, "").match(regex.cssImports) || []).filter(function(rule) {
                return ignoreRules.indexOf(rule) === -1;
            });
            importData.urls = importData.rules.map(function(rule) {
                return rule.replace(regex.cssImports, "$1");
            });
            importData.absoluteUrls = importData.urls.map(function(url) {
                return getFullUrl(url, baseUrl);
            });
            importData.absoluteRules = importData.rules.map(function(rule, i) {
                var oldUrl = importData.urls[i];
                var newUrl = getFullUrl(importData.absoluteUrls[i], baseUrl);
                return rule.replace(oldUrl, newUrl);
            });
            return importData;
        }
        function resolveImports(cssText, node, baseUrl, callbackFn) {
            var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
            var importData = parseImportData(cssText, baseUrl, __errorRules);
            if (importData.rules.length) {
                getUrls(importData.absoluteUrls, {
                    onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                        settings.onBeforeSend(xhr, node, url);
                    },
                    onSuccess: function onSuccess(cssText, url, urlIndex) {
                        var returnVal = settings.onSuccess(cssText, node, url);
                        cssText = returnVal === false ? "" : returnVal || cssText;
                        var responseImportData = parseImportData(cssText, url, __errorRules);
                        responseImportData.rules.forEach(function(rule, i) {
                            cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);
                        });
                        return cssText;
                    },
                    onError: function onError(xhr, url, urlIndex) {
                        __errorData.push({
                            xhr: xhr,
                            url: url
                        });
                        __errorRules.push(importData.rules[urlIndex]);
                        resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
                    },
                    onComplete: function onComplete(responseArray) {
                        responseArray.forEach(function(importText, i) {
                            cssText = cssText.replace(importData.rules[i], importText);
                        });
                        resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
                    }
                });
            } else {
                callbackFn(cssText, __errorData);
            }
        }
        if (sourceNodes.length) {
            sourceNodes.forEach(function(node, i) {
                var linkHref = node.getAttribute("href");
                var linkRel = node.getAttribute("rel");
                var isLink = node.nodeName === "LINK" && linkHref && linkRel && linkRel.toLowerCase() === "stylesheet";
                var isStyle = node.nodeName === "STYLE";
                if (isLink) {
                    getUrls(linkHref, {
                        mimeType: "text/css",
                        onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
                            settings.onBeforeSend(xhr, node, url);
                        },
                        onSuccess: function onSuccess(cssText, url, urlIndex) {
                            var sourceUrl = getFullUrl(linkHref, location.href);
                            handleSuccess(cssText, i, node, sourceUrl);
                        },
                        onError: function onError(xhr, url, urlIndex) {
                            cssArray[i] = "";
                            settings.onError(xhr, node, url);
                            handleComplete();
                        }
                    });
                } else if (isStyle) {
                    var cssText = node.textContent;
                    if (settings.useCSSOM) {
                        cssText = Array.apply(null, node.sheet.cssRules).map(function(rule) {
                            return rule.cssText;
                        }).join("");
                    }
                    handleSuccess(cssText, i, node, location.href);
                } else {
                    cssArray[i] = "";
                    handleComplete();
                }
            });
        } else {
            settings.onComplete("", []);
        }
    }
    function getFullUrl(url) {
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
        var d = document.implementation.createHTMLDocument("");
        var b = d.createElement("base");
        var a = d.createElement("a");
        d.head.appendChild(b);
        d.body.appendChild(a);
        b.href = base;
        a.href = url;
        return a.href;
    }
    function matchesSelector(elm, selector) {
        var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
        return matches.call(elm, selector);
    }
    var balancedMatch = balanced;
    function balanced(a, b, str) {
        if (a instanceof RegExp) a = maybeMatch(a, str);
        if (b instanceof RegExp) b = maybeMatch(b, str);
        var r = range(a, b, str);
        return r && {
            start: r[0],
            end: r[1],
            pre: str.slice(0, r[0]),
            body: str.slice(r[0] + a.length, r[1]),
            post: str.slice(r[1] + b.length)
        };
    }
    function maybeMatch(reg, str) {
        var m = str.match(reg);
        return m ? m[0] : null;
    }
    balanced.range = range;
    function range(a, b, str) {
        var begs, beg, left, right, result;
        var ai = str.indexOf(a);
        var bi = str.indexOf(b, ai + 1);
        var i = ai;
        if (ai >= 0 && bi > 0) {
            begs = [];
            left = str.length;
            while (i >= 0 && !result) {
                if (i == ai) {
                    begs.push(i);
                    ai = str.indexOf(a, i + 1);
                } else if (begs.length == 1) {
                    result = [ begs.pop(), bi ];
                } else {
                    beg = begs.pop();
                    if (beg < left) {
                        left = beg;
                        right = bi;
                    }
                    bi = str.indexOf(b, i + 1);
                }
                i = ai < bi && ai >= 0 ? ai : bi;
            }
            if (begs.length) {
                result = [ left, right ];
            }
        }
        return result;
    }
    function parseCss(css) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
            preserveStatic: true,
            removeComments: false
        };
        var settings = _extends({}, defaults, options);
        var errors = [];
        function error(msg) {
            throw new Error("CSS parse error: ".concat(msg));
        }
        function match(re) {
            var m = re.exec(css);
            if (m) {
                css = css.slice(m[0].length);
                return m;
            }
        }
        function open() {
            return match(/^{\s*/);
        }
        function close() {
            return match(/^}/);
        }
        function whitespace() {
            match(/^\s*/);
        }
        function comment() {
            whitespace();
            if (css[0] !== "/" || css[1] !== "*") {
                return;
            }
            var i = 2;
            while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
                i++;
            }
            if (!css[i]) {
                return error("end of comment is missing");
            }
            var str = css.slice(2, i);
            css = css.slice(i + 2);
            return {
                type: "comment",
                comment: str
            };
        }
        function comments() {
            var cmnts = [];
            var c;
            while (c = comment()) {
                cmnts.push(c);
            }
            return settings.removeComments ? [] : cmnts;
        }
        function selector() {
            whitespace();
            while (css[0] === "}") {
                error("extra closing bracket");
            }
            var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
            if (m) {
                return m[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(m) {
                    return m.replace(/,/g, "‌");
                }).split(/\s*(?![^(]*\)),\s*/).map(function(s) {
                    return s.replace(/\u200C/g, ",");
                });
            }
        }
        function declaration() {
            match(/^([;\s]*)+/);
            var comment_regexp = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g;
            var prop = match(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
            if (!prop) {
                return;
            }
            prop = prop[0].trim();
            if (!match(/^:\s*/)) {
                return error("property missing ':'");
            }
            var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
            var ret = {
                type: "declaration",
                property: prop.replace(comment_regexp, ""),
                value: val ? val[0].replace(comment_regexp, "").trim() : ""
            };
            match(/^[;\s]*/);
            return ret;
        }
        function declarations() {
            if (!open()) {
                return error("missing '{'");
            }
            var d;
            var decls = comments();
            while (d = declaration()) {
                decls.push(d);
                decls = decls.concat(comments());
            }
            if (!close()) {
                return error("missing '}'");
            }
            return decls;
        }
        function keyframe() {
            whitespace();
            var vals = [];
            var m;
            while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
                vals.push(m[1]);
                match(/^,\s*/);
            }
            if (vals.length) {
                return {
                    type: "keyframe",
                    values: vals,
                    declarations: declarations()
                };
            }
        }
        function at_keyframes() {
            var m = match(/^@([-\w]+)?keyframes\s*/);
            if (!m) {
                return;
            }
            var vendor = m[1];
            m = match(/^([-\w]+)\s*/);
            if (!m) {
                return error("@keyframes missing name");
            }
            var name = m[1];
            if (!open()) {
                return error("@keyframes missing '{'");
            }
            var frame;
            var frames = comments();
            while (frame = keyframe()) {
                frames.push(frame);
                frames = frames.concat(comments());
            }
            if (!close()) {
                return error("@keyframes missing '}'");
            }
            return {
                type: "keyframes",
                name: name,
                vendor: vendor,
                keyframes: frames
            };
        }
        function at_page() {
            var m = match(/^@page */);
            if (m) {
                var sel = selector() || [];
                return {
                    type: "page",
                    selectors: sel,
                    declarations: declarations()
                };
            }
        }
        function at_fontface() {
            var m = match(/^@font-face\s*/);
            if (m) {
                return {
                    type: "font-face",
                    declarations: declarations()
                };
            }
        }
        function at_supports() {
            var m = match(/^@supports *([^{]+)/);
            if (m) {
                return {
                    type: "supports",
                    supports: m[1].trim(),
                    rules: rules()
                };
            }
        }
        function at_host() {
            var m = match(/^@host\s*/);
            if (m) {
                return {
                    type: "host",
                    rules: rules()
                };
            }
        }
        function at_media() {
            var m = match(/^@media([^{]+)*/);
            if (m) {
                return {
                    type: "media",
                    media: (m[1] || "").trim(),
                    rules: rules()
                };
            }
        }
        function at_custom_m() {
            var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
            if (m) {
                return {
                    type: "custom-media",
                    name: m[1].trim(),
                    media: m[2].trim()
                };
            }
        }
        function at_document() {
            var m = match(/^@([-\w]+)?document *([^{]+)/);
            if (m) {
                return {
                    type: "document",
                    document: m[2].trim(),
                    vendor: m[1] ? m[1].trim() : null,
                    rules: rules()
                };
            }
        }
        function at_x() {
            var m = match(/^@(import|charset|namespace)\s*([^;]+);/);
            if (m) {
                return {
                    type: m[1],
                    name: m[2].trim()
                };
            }
        }
        function at_rule() {
            whitespace();
            if (css[0] === "@") {
                var ret = at_keyframes() || at_supports() || at_host() || at_media() || at_custom_m() || at_page() || at_document() || at_fontface() || at_x();
                if (ret && !settings.preserveStatic) {
                    var hasVarFunc = false;
                    if (ret.declarations) {
                        hasVarFunc = ret.declarations.some(function(decl) {
                            return /var\(/.test(decl.value);
                        });
                    } else {
                        var arr = ret.keyframes || ret.rules || [];
                        hasVarFunc = arr.some(function(obj) {
                            return (obj.declarations || []).some(function(decl) {
                                return /var\(/.test(decl.value);
                            });
                        });
                    }
                    return hasVarFunc ? ret : {};
                }
                return ret;
            }
        }
        function rule() {
            if (!settings.preserveStatic) {
                var balancedMatch$1 = balancedMatch("{", "}", css);
                if (balancedMatch$1) {
                    var hasVarDecl = /:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre) && /--\S*\s*:/.test(balancedMatch$1.body);
                    var hasVarFunc = /var\(/.test(balancedMatch$1.body);
                    if (!hasVarDecl && !hasVarFunc) {
                        css = css.slice(balancedMatch$1.end + 1);
                        return {};
                    }
                }
            }
            var sel = selector() || [];
            var decls = settings.preserveStatic ? declarations() : declarations().filter(function(decl) {
                var hasVarDecl = sel.some(function(s) {
                    return /:(?:root|host)(?![.:#(])/.test(s);
                }) && /^--\S/.test(decl.property);
                var hasVarFunc = /var\(/.test(decl.value);
                return hasVarDecl || hasVarFunc;
            });
            if (!sel.length) {
                error("selector missing");
            }
            return {
                type: "rule",
                selectors: sel,
                declarations: decls
            };
        }
        function rules(core) {
            if (!core && !open()) {
                return error("missing '{'");
            }
            var node;
            var rules = comments();
            while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
                if (node.type) {
                    rules.push(node);
                }
                rules = rules.concat(comments());
            }
            if (!core && !close()) {
                return error("missing '}'");
            }
            return rules;
        }
        return {
            type: "stylesheet",
            stylesheet: {
                rules: rules(true),
                errors: errors
            }
        };
    }
    function parseVars(cssData) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
            parseHost: false,
            store: {},
            onWarning: function onWarning() {}
        };
        var settings = _extends({}, defaults, options);
        var reVarDeclSelectors = new RegExp(":".concat(settings.parseHost ? "host" : "root", "(?![.:#(])"));
        if (typeof cssData === "string") {
            cssData = parseCss(cssData, settings);
        }
        cssData.stylesheet.rules.forEach(function(rule) {
            if (rule.type !== "rule" || !rule.selectors.some(function(s) {
                return reVarDeclSelectors.test(s);
            })) {
                return;
            }
            rule.declarations.forEach(function(decl, i) {
                var prop = decl.property;
                var value = decl.value;
                if (prop && prop.indexOf("--") === 0) {
                    settings.store[prop] = value;
                }
            });
        });
        return settings.store;
    }
    function stringifyCss(tree) {
        var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        var renderMethods = {
            charset: function charset(node) {
                return "@charset " + node.name + ";";
            },
            comment: function comment(node) {
                return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
            },
            "custom-media": function customMedia(node) {
                return "@custom-media " + node.name + " " + node.media + ";";
            },
            declaration: function declaration(node) {
                return node.property + ":" + node.value + ";";
            },
            document: function document(node) {
                return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
            },
            "font-face": function fontFace(node) {
                return "@font-face" + "{" + visit(node.declarations) + "}";
            },
            host: function host(node) {
                return "@host" + "{" + visit(node.rules) + "}";
            },
            import: function _import(node) {
                return "@import " + node.name + ";";
            },
            keyframe: function keyframe(node) {
                return node.values.join(",") + "{" + visit(node.declarations) + "}";
            },
            keyframes: function keyframes(node) {
                return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
            },
            media: function media(node) {
                return "@media " + node.media + "{" + visit(node.rules) + "}";
            },
            namespace: function namespace(node) {
                return "@namespace " + node.name + ";";
            },
            page: function page(node) {
                return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
            },
            rule: function rule(node) {
                var decls = node.declarations;
                if (decls.length) {
                    return node.selectors.join(",") + "{" + visit(decls) + "}";
                }
            },
            supports: function supports(node) {
                return "@supports " + node.supports + "{" + visit(node.rules) + "}";
            }
        };
        function visit(nodes) {
            var buf = "";
            for (var i = 0; i < nodes.length; i++) {
                var n = nodes[i];
                if (cb) {
                    cb(n);
                }
                var txt = renderMethods[n.type](n);
                if (txt) {
                    buf += txt;
                    if (txt.length && n.selectors) {
                        buf += delim;
                    }
                }
            }
            return buf;
        }
        return visit(tree.stylesheet.rules);
    }
    function walkCss(node, fn) {
        node.rules.forEach(function(rule) {
            if (rule.rules) {
                walkCss(rule, fn);
                return;
            }
            if (rule.keyframes) {
                rule.keyframes.forEach(function(keyframe) {
                    if (keyframe.type === "keyframe") {
                        fn(keyframe.declarations, rule);
                    }
                });
                return;
            }
            if (!rule.declarations) {
                return;
            }
            fn(rule.declarations, node);
        });
    }
    var VAR_PROP_IDENTIFIER = "--";
    var VAR_FUNC_IDENTIFIER = "var";
    function transformCss(cssData) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var defaults = {
            preserveStatic: true,
            preserveVars: false,
            variables: {},
            onWarning: function onWarning() {}
        };
        var settings = _extends({}, defaults, options);
        if (typeof cssData === "string") {
            cssData = parseCss(cssData, settings);
        }
        walkCss(cssData.stylesheet, function(declarations, node) {
            for (var i = 0; i < declarations.length; i++) {
                var decl = declarations[i];
                var type = decl.type;
                var prop = decl.property;
                var value = decl.value;
                if (type !== "declaration") {
                    continue;
                }
                if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
                    declarations.splice(i, 1);
                    i--;
                    continue;
                }
                if (value.indexOf(VAR_FUNC_IDENTIFIER + "(") !== -1) {
                    var resolvedValue = resolveValue(value, settings);
                    if (resolvedValue !== decl.value) {
                        resolvedValue = fixNestedCalc(resolvedValue);
                        if (!settings.preserveVars) {
                            decl.value = resolvedValue;
                        } else {
                            declarations.splice(i, 0, {
                                type: type,
                                property: prop,
                                value: resolvedValue
                            });
                            i++;
                        }
                    }
                }
            }
        });
        return stringifyCss(cssData);
    }
    function fixNestedCalc(value) {
        var reCalcVal = /calc\(([^)]+)\)/g;
        (value.match(reCalcVal) || []).forEach(function(match) {
            var newVal = "calc".concat(match.split("calc").join(""));
            value = value.replace(match, newVal);
        });
        return value;
    }
    function resolveValue(value) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var __recursiveFallback = arguments.length > 2 ? arguments[2] : undefined;
        if (value.indexOf("var(") === -1) {
            return value;
        }
        var valueData = balancedMatch("(", ")", value);
        function resolveFunc(value) {
            var name = value.split(",")[0].replace(/[\s\n\t]/g, "");
            var fallback = (value.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
            var match = Object.prototype.hasOwnProperty.call(settings.variables, name) ? String(settings.variables[name]) : undefined;
            var replacement = match || (fallback ? String(fallback) : undefined);
            var unresolvedFallback = __recursiveFallback || value;
            if (!match) {
                settings.onWarning('variable "'.concat(name, '" is undefined'));
            }
            if (replacement && replacement !== "undefined" && replacement.length > 0) {
                return resolveValue(replacement, settings, unresolvedFallback);
            } else {
                return "var(".concat(unresolvedFallback, ")");
            }
        }
        if (!valueData) {
            if (value.indexOf("var(") !== -1) {
                settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
            }
            return value;
        } else if (valueData.pre.slice(-3) === "var") {
            var isEmptyVarFunc = valueData.body.trim().length === 0;
            if (isEmptyVarFunc) {
                settings.onWarning("var() must contain a non-whitespace string");
                return value;
            } else {
                return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);
            }
        } else {
            return valueData.pre + "(".concat(resolveValue(valueData.body, settings), ")") + resolveValue(valueData.post, settings);
        }
    }
    var isBrowser = typeof window !== "undefined";
    var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
    var counters = {
        group: 0,
        job: 0
    };
    var defaults = {
        rootElement: isBrowser ? document : null,
        shadowDOM: false,
        include: "style,link[rel=stylesheet]",
        exclude: "",
        variables: {},
        onlyLegacy: true,
        preserveStatic: true,
        preserveVars: false,
        silent: false,
        updateDOM: true,
        updateURLs: true,
        watch: null,
        onBeforeSend: function onBeforeSend() {},
        onWarning: function onWarning() {},
        onError: function onError() {},
        onSuccess: function onSuccess() {},
        onComplete: function onComplete() {}
    };
    var regex = {
        cssComments: /\/\*[\s\S]+?\*\//g,
        cssKeyframes: /@(?:-\w*-)?keyframes/,
        cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
        cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
        cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
        cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
        cssVarFunc: /var\(\s*--[\w-]/,
        cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
    };
    var variableStore = {
        dom: {},
        job: {},
        user: {}
    };
    var cssVarsIsRunning = false;
    var cssVarsObserver = null;
    var cssVarsSrcNodeCount = 0;
    var debounceTimer = null;
    var isShadowDOMReady = false;
    /**
   * Fetches, parses, and transforms CSS custom properties from specified
   * <style> and <link> elements into static values, then appends a new <style>
   * element with static values to the DOM to provide CSS custom property
   * compatibility for legacy browsers. Also provides a single interface for
   * live updates of runtime values in both modern and legacy browsers.
   *
   * @preserve
   * @param {object}   [options] Options object
   * @param {object}   [options.rootElement=document] Root element to traverse for
   *                   <link> and <style> nodes
   * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
   *                   and <style> nodes will be processed.
   * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
   *                   matching <link re="stylesheet"> and <style> nodes to
   *                   process
   * @param {string}   [options.exclude] CSS selector matching <link
   *                   rel="stylehseet"> and <style> nodes to exclude from those
   *                   matches by options.include
   * @param {object}   [options.variables] A map of custom property name/value
   *                   pairs. Property names can omit or include the leading
   *                   double-hyphen (—), and values specified will override
   *                   previous values
   * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
   *                   only generate legacy-compatible CSS in browsers that lack
   *                   native support (i.e., legacy browsers)
   * @param {boolean}  [options.preserveStatic=true] Determines if CSS
   *                   declarations that do not reference a custom property will
   *                   be preserved in the transformed CSS
   * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
   *                   property declarations will be preserved in the transformed
   *                   CSS
   * @param {boolean}  [options.silent=false] Determines if warning and error
   *                   messages will be displayed on the console
   * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
   *                   update the DOM after processing CSS custom properties
   * @param {boolean}  [options.updateURLs=true] Determines if the ponyfill will
   *                   convert relative url() paths to absolute urls
   * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
   *                   be created that will execute the ponyfill when a <link> or
   *                   <style> DOM mutation is observed
   * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
   *                   1) the XHR object, 2) source node reference, and 3) the
   *                   source URL as arguments
   * @param {function} [options.onWarning] Callback after each CSS parsing warning
   *                   has occurred. Passes 1) a warning message as an argument.
   * @param {function} [options.onError] Callback after a CSS parsing error has
   *                   occurred or an XHR request has failed. Passes 1) an error
   *                   message, and 2) source node reference, 3) xhr, and 4 url as
   *                   arguments.
   * @param {function} [options.onSuccess] Callback after CSS data has been
   *                   collected from each node and before CSS custom properties
   *                   have been transformed. Allows modifying the CSS data before
   *                   it is transformed by returning any string value (or false
   *                   to skip). Passes 1) CSS text, 2) source node reference, and
   *                   3) the source URL as arguments.
   * @param {function} [options.onComplete] Callback after all CSS has been
   *                   processed, legacy-compatible CSS has been generated, and
   *                   (optionally) the DOM has been updated. Passes 1) a CSS
   *                   string with CSS variable values resolved, 2) an array of
   *                   output <style> node references that have been appended to
   *                   the DOM, 3) an object containing all custom properies names
   *                   and values, and 4) the ponyfill execution time in
   *                   milliseconds.
   *
   * @example
   *
   *   cssVars({
   *     rootElement   : document,
   *     shadowDOM     : false,
   *     include       : 'style,link[rel="stylesheet"]',
   *     exclude       : '',
   *     variables     : {},
   *     onlyLegacy    : true,
   *     preserveStatic: true,
   *     preserveVars  : false,
   *     silent        : false,
   *     updateDOM     : true,
   *     updateURLs    : true,
   *     watch         : false,
   *     onBeforeSend(xhr, node, url) {},
   *     onWarning(message) {},
   *     onError(message, node, xhr, url) {},
   *     onSuccess(cssText, node, url) {},
   *     onComplete(cssText, styleNode, cssVariables, benchmark) {}
   *   });
   */    function cssVars() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var msgPrefix = "cssVars(): ";
        var settings = _extends({}, defaults, options);
        function handleError(message, sourceNode, xhr, url) {
            if (!settings.silent && window.console) {
                console.error("".concat(msgPrefix).concat(message, "\n"), sourceNode);
            }
            settings.onError(message, sourceNode, xhr, url);
        }
        function handleWarning(message) {
            if (!settings.silent && window.console) {
                console.warn("".concat(msgPrefix).concat(message));
            }
            settings.onWarning(message);
        }
        if (!isBrowser) {
            return;
        }
        if (settings.watch) {
            settings.watch = defaults.watch;
            addMutationObserver(settings);
            cssVars(settings);
            return;
        } else if (settings.watch === false && cssVarsObserver) {
            cssVarsObserver.disconnect();
            cssVarsObserver = null;
        }
        if (!settings.__benchmark) {
            if (cssVarsIsRunning === settings.rootElement) {
                cssVarsDebounced(options);
                return;
            }
            settings.__benchmark = getTimeStamp();
            settings.exclude = [ cssVarsObserver ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', settings.exclude ].filter(function(selector) {
                return selector;
            }).join(",");
            settings.variables = fixVarNames(settings.variables);
            if (!cssVarsObserver) {
                var outNodes = Array.apply(null, settings.rootElement.querySelectorAll('[data-cssvars="out"]'));
                outNodes.forEach(function(outNode) {
                    var dataGroup = outNode.getAttribute("data-cssvars-group");
                    var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup, '"]')) : null;
                    if (!srcNode) {
                        outNode.parentNode.removeChild(outNode);
                    }
                });
                if (cssVarsSrcNodeCount) {
                    var srcNodes = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');
                    if (srcNodes.length < cssVarsSrcNodeCount) {
                        cssVarsSrcNodeCount = srcNodes.length;
                        variableStore.dom = {};
                    }
                }
            }
        }
        if (document.readyState !== "loading") {
            if (isNativeSupport && settings.onlyLegacy) {
                if (settings.updateDOM) {
                    var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
                    Object.keys(settings.variables).forEach(function(key) {
                        targetElm.style.setProperty(key, settings.variables[key]);
                    });
                }
            } else if (!isShadowDOMReady && (settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host)) {
                getCssData({
                    rootElement: defaults.rootElement,
                    include: defaults.include,
                    exclude: settings.exclude,
                    onSuccess: function onSuccess(cssText, node, url) {
                        cssText = cssText.replace(regex.cssComments, "").replace(regex.cssMediaQueries, "");
                        cssText = (cssText.match(regex.cssVarDeclRules) || []).join("");
                        return cssText || false;
                    },
                    onComplete: function onComplete(cssText, cssArray, nodeArray) {
                        parseVars(cssText, {
                            store: variableStore.dom,
                            onWarning: handleWarning
                        });
                        isShadowDOMReady = true;
                        cssVars(settings);
                    }
                });
            } else {
                cssVarsIsRunning = settings.rootElement;
                getCssData({
                    rootElement: settings.rootElement,
                    include: settings.include,
                    exclude: settings.exclude,
                    onBeforeSend: settings.onBeforeSend,
                    onError: function onError(xhr, node, url) {
                        var responseUrl = xhr.responseURL || getFullUrl$1(url, location.href);
                        var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
                        var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
                        handleError(errorMsg, node, xhr, responseUrl);
                    },
                    onSuccess: function onSuccess(cssText, node, url) {
                        var returnVal = settings.onSuccess(cssText, node, url);
                        cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
                        if (settings.updateURLs) {
                            cssText = fixRelativeCssUrls(cssText, url);
                        }
                        return cssText;
                    },
                    onComplete: function onComplete(cssText, cssArray) {
                        var nodeArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                        var jobVars = {};
                        var varStore = settings.updateDOM ? variableStore.dom : Object.keys(variableStore.job).length ? variableStore.job : variableStore.job = JSON.parse(JSON.stringify(variableStore.dom));
                        var hasVarChange = false;
                        nodeArray.forEach(function(node, i) {
                            if (regex.cssVars.test(cssArray[i])) {
                                try {
                                    var cssTree = parseCss(cssArray[i], {
                                        preserveStatic: settings.preserveStatic,
                                        removeComments: true
                                    });
                                    parseVars(cssTree, {
                                        parseHost: Boolean(settings.rootElement.host),
                                        store: jobVars,
                                        onWarning: handleWarning
                                    });
                                    node.__cssVars = {
                                        tree: cssTree
                                    };
                                } catch (err) {
                                    handleError(err.message, node);
                                }
                            }
                        });
                        if (settings.updateDOM) {
                            _extends(variableStore.user, settings.variables);
                        }
                        _extends(jobVars, settings.variables);
                        hasVarChange = Boolean((document.querySelector("[data-cssvars]") || Object.keys(variableStore.dom).length) && Object.keys(jobVars).some(function(name) {
                            return jobVars[name] !== varStore[name];
                        }));
                        _extends(varStore, variableStore.user, jobVars);
                        if (hasVarChange) {
                            resetCssNodes(settings.rootElement);
                            cssVars(settings);
                        } else {
                            var outCssArray = [];
                            var outNodeArray = [];
                            var hasKeyframesWithVars = false;
                            variableStore.job = {};
                            if (settings.updateDOM) {
                                counters.job++;
                            }
                            nodeArray.forEach(function(node) {
                                var isSkip = !node.__cssVars;
                                if (node.__cssVars) {
                                    try {
                                        transformCss(node.__cssVars.tree, _extends({}, settings, {
                                            variables: varStore,
                                            onWarning: handleWarning
                                        }));
                                        var outCss = stringifyCss(node.__cssVars.tree);
                                        if (settings.updateDOM) {
                                            if (!node.getAttribute("data-cssvars")) {
                                                node.setAttribute("data-cssvars", "src");
                                            }
                                            if (outCss.length) {
                                                var dataGroup = node.getAttribute("data-cssvars-group") || ++counters.group;
                                                var outCssNoSpaces = outCss.replace(/\s/g, "");
                                                var outNode = settings.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(dataGroup, '"]')) || document.createElement("style");
                                                hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);
                                                if (!outNode.hasAttribute("data-cssvars")) {
                                                    outNode.setAttribute("data-cssvars", "out");
                                                }
                                                if (outCssNoSpaces === node.textContent.replace(/\s/g, "")) {
                                                    isSkip = true;
                                                    if (outNode && outNode.parentNode) {
                                                        node.removeAttribute("data-cssvars-group");
                                                        outNode.parentNode.removeChild(outNode);
                                                    }
                                                } else if (outCssNoSpaces !== outNode.textContent.replace(/\s/g, "")) {
                                                    [ node, outNode ].forEach(function(n) {
                                                        n.setAttribute("data-cssvars-job", counters.job);
                                                        n.setAttribute("data-cssvars-group", dataGroup);
                                                    });
                                                    outNode.textContent = outCss;
                                                    outCssArray.push(outCss);
                                                    outNodeArray.push(outNode);
                                                    if (!outNode.parentNode) {
                                                        node.parentNode.insertBefore(outNode, node.nextSibling);
                                                    }
                                                }
                                            }
                                        } else {
                                            if (node.textContent.replace(/\s/g, "") !== outCss) {
                                                outCssArray.push(outCss);
                                            }
                                        }
                                    } catch (err) {
                                        handleError(err.message, node);
                                    }
                                }
                                if (isSkip) {
                                    node.setAttribute("data-cssvars", "skip");
                                }
                                if (!node.hasAttribute("data-cssvars-job")) {
                                    node.setAttribute("data-cssvars-job", counters.job);
                                }
                            });
                            cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length;
                            if (settings.shadowDOM) {
                                var elms = [ settings.rootElement ].concat(_toConsumableArray(settings.rootElement.querySelectorAll("*")));
                                for (var i = 0, elm; elm = elms[i]; ++i) {
                                    if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                                        var shadowSettings = _extends({}, settings, {
                                            rootElement: elm.shadowRoot
                                        });
                                        cssVars(shadowSettings);
                                    }
                                }
                            }
                            if (settings.updateDOM && hasKeyframesWithVars) {
                                fixKeyframes(settings.rootElement);
                            }
                            cssVarsIsRunning = false;
                            settings.onComplete(outCssArray.join(""), outNodeArray, JSON.parse(JSON.stringify(varStore)), getTimeStamp() - settings.__benchmark);
                        }
                    }
                });
            }
        } else {
            document.addEventListener("DOMContentLoaded", function init(evt) {
                cssVars(options);
                document.removeEventListener("DOMContentLoaded", init);
            });
        }
    }
    cssVars.reset = function() {
        cssVarsIsRunning = false;
        if (cssVarsObserver) {
            cssVarsObserver.disconnect();
            cssVarsObserver = null;
        }
        cssVarsSrcNodeCount = 0;
        debounceTimer = null;
        isShadowDOMReady = false;
        for (var prop in variableStore) {
            variableStore[prop] = {};
        }
    };
    function addMutationObserver(settings) {
        function isLink(node) {
            var isStylesheet = node.tagName === "LINK" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
            return isStylesheet && !node.disabled;
        }
        function isStyle(node) {
            return node.tagName === "STYLE" && !node.disabled;
        }
        function isValidAddMutation(mutationNodes) {
            return Array.apply(null, mutationNodes).some(function(node) {
                var isElm = node.nodeType === 1;
                var hasAttr = isElm && node.hasAttribute("data-cssvars");
                var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);
                var isValid = !hasAttr && (isLink(node) || isStyleWithVars);
                return isValid;
            });
        }
        function isValidRemoveMutation(mutationNodes) {
            return Array.apply(null, mutationNodes).some(function(node) {
                var isElm = node.nodeType === 1;
                var isOutNode = isElm && node.getAttribute("data-cssvars") === "out";
                var isSrcNode = isElm && node.getAttribute("data-cssvars") === "src";
                var isValid = isSrcNode;
                if (isSrcNode || isOutNode) {
                    var dataGroup = node.getAttribute("data-cssvars-group");
                    var orphanNode = settings.rootElement.querySelector('[data-cssvars-group="'.concat(dataGroup, '"]'));
                    if (isSrcNode) {
                        resetCssNodes(settings.rootElement);
                        variableStore.dom = {};
                    }
                    if (orphanNode) {
                        orphanNode.parentNode.removeChild(orphanNode);
                    }
                }
                return isValid;
            });
        }
        if (!window.MutationObserver) {
            return;
        }
        if (cssVarsObserver) {
            cssVarsObserver.disconnect();
            cssVarsObserver = null;
        }
        cssVarsObserver = new MutationObserver(function(mutations) {
            var hasValidMutation = mutations.some(function(mutation) {
                var isValid = false;
                if (mutation.type === "attributes") {
                    isValid = isLink(mutation.target);
                } else if (mutation.type === "childList") {
                    isValid = isValidAddMutation(mutation.addedNodes) || isValidRemoveMutation(mutation.removedNodes);
                }
                return isValid;
            });
            if (hasValidMutation) {
                cssVars(settings);
            }
        });
        cssVarsObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [ "disabled", "href" ],
            childList: true,
            subtree: true
        });
    }
    function cssVarsDebounced(settings) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
            settings.__benchmark = null;
            cssVars(settings);
        }, delay);
    }
    function fixKeyframes(rootElement) {
        var animationNameProp = [ "animation-name", "-moz-animation-name", "-webkit-animation-name" ].filter(function(prop) {
            return getComputedStyle(document.body)[prop];
        })[0];
        if (animationNameProp) {
            var allNodes = rootElement.getElementsByTagName("*");
            var keyframeNodes = [];
            var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";
            for (var i = 0, len = allNodes.length; i < len; i++) {
                var node = allNodes[i];
                var animationName = getComputedStyle(node)[animationNameProp];
                if (animationName !== "none") {
                    node.style[animationNameProp] += nameMarker;
                    keyframeNodes.push(node);
                }
            }
            void document.body.offsetHeight;
            for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
                var nodeStyle = keyframeNodes[_i].style;
                nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
            }
        }
    }
    function fixRelativeCssUrls(cssText, baseUrl) {
        var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
        cssUrls.forEach(function(cssUrl) {
            var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
            var newUrl = getFullUrl$1(oldUrl, baseUrl);
            cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
        });
        return cssText;
    }
    function fixVarNames() {
        var varObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var reLeadingHyphens = /^-{2}/;
        return Object.keys(varObj).reduce(function(obj, value) {
            var key = reLeadingHyphens.test(value) ? value : "--".concat(value.replace(/^-+/, ""));
            obj[key] = varObj[value];
            return obj;
        }, {});
    }
    function getFullUrl$1(url) {
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
        var d = document.implementation.createHTMLDocument("");
        var b = d.createElement("base");
        var a = d.createElement("a");
        d.head.appendChild(b);
        d.body.appendChild(a);
        b.href = base;
        a.href = url;
        return a.href;
    }
    function getTimeStamp() {
        return isBrowser && (window.performance || {}).now ? window.performance.now() : new Date().getTime();
    }
    function resetCssNodes(rootElement) {
        var resetNodes = Array.apply(null, rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
        resetNodes.forEach(function(node) {
            return node.setAttribute("data-cssvars", "");
        });
    }
    return cssVars;
});
//# sourceMappingURL=css-vars-ponyfill.js.map


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./ready.ts
//#region Ready callback
/**
 * Execute a function when the page is ready (similar to jQuery ready function)
 * @param fn Function. The function to execute
 */
var ready = function (fn) {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};
//#endregion Ready callback

// CONCATENATED MODULE: ./featureDetection.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "support", function() { return support; });

// Load a custom build of Mozernizr. This build is generated by the Gulp task "modernizr"
__webpack_require__(4);
var isDev = "production" === 'development';
/**
 * Execute a function if a feature is not supported by the brower
 * @param featureName String. Feature name, only used in dev mode for console log
 * @param featureDetection Boolean. Indicate if the current feature is supported by the browser or not
 * @param callbackPolyfills Function. Function that is called if the browser doesn't support the feature
 */
var support = function (featureName, featureDetection, callbackPolyfills) {
    if (!featureDetection) {
        if (isDev) {
            console.warn("BPA-Polyfill: " + featureName + " is not supported");
        }
        callbackPolyfills();
    }
    else {
        if (isDev) {
            console.info("BPA-Polyfill: " + featureName + " is supported");
        }
    }
};
// Check for <input type="color" /> support
support('Color input type', Modernizr.inputtypes.color, function () {
    // JSColor has been edited to be fitted in this bundle
    __webpack_require__(5);
});
// Check for <details> and <summary> support
support('Details', Modernizr.details, function () {
    __webpack_require__(15);
});
// Check for <img srcset="..."> and <picture> support
support('Srcset & Pictures', Modernizr.srcset && Modernizr.picture, function () {
    __webpack_require__(16);
});
// Check for Intersection Observer
support('Intersection Observer', typeof IntersectionObserver !== 'undefined', function () {
    __webpack_require__(17);
});
support('CSS Grid', Modernizr.cssgrid, function () {
    ready(function () {
        __webpack_require__(18); // CSS Grid Polyfills
    });
});


/***/ })
/******/ ]);