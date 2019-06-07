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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*
 js-polyfills library
*/
__webpack_require__(1);
/*
 load polyfills with Modernizr feature detection
*/
__webpack_require__(2);
/*
 load polyfills with bundled feature detection
*/
//#region Libraries
__webpack_require__(18);
//#endregion Libraries
//#region Polyfills
__webpack_require__(19);
__webpack_require__(20);
//#endregion Polyfills
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
ready(function () { });
//#endregion Ready callback


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function __cons(t,a){return eval("new t("+a.map(function(t,e){return"a["+e+"]"}).join(",")+")")}Object.getPrototypeOf||(Object.getPrototypeOf=function(t){if(t!==Object(t))throw TypeError("Object.getPrototypeOf called on non-object");return t.__proto__||t.constructor.prototype||Object.prototype}),"function"!=typeof Object.getOwnPropertyNames&&(Object.getOwnPropertyNames=function(t){if(t!==Object(t))throw TypeError("Object.getOwnPropertyNames called on non-object");var e,r=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);return r}),"function"!=typeof Object.create&&(Object.create=function(t,e){function r(){}if("object"!=typeof t)throw TypeError();r.prototype=t;var n=new r;if(t&&(n.constructor=r),e!==undefined){if(e!==Object(e))throw TypeError();Object.defineProperties(n,e)}return n}),function(){if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()){var t=Object.defineProperty;Object.defineProperty=function(e,r,n){if(t)try{return t(e,r,n)}catch(o){}if(e!==Object(e))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in n&&Object.prototype.__defineGetter__.call(e,r,n.get),Object.prototype.__defineSetter__&&"set"in n&&Object.prototype.__defineSetter__.call(e,r,n.set),"value"in n&&(e[r]=n.value),e}}}(),"function"!=typeof Object.defineProperties&&(Object.defineProperties=function(t,e){if(t!==Object(t))throw TypeError("Object.defineProperties called on non-object");var r;for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&Object.defineProperty(t,r,e[r]);return t}),Object.keys||(Object.keys=function(t){if(t!==Object(t))throw TypeError("Object.keys called on non-object");var e,r=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);return r}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw TypeError("Bind must be called on a function");var e=Array.prototype.slice.call(arguments,1),r=this,n=function(){},o=function(){return r.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),o.prototype=new n,o}),Array.isArray=Array.isArray||function(t){return Boolean(t&&"[object Array]"===Object.prototype.toString.call(Object(t)))},Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if(0===r)return-1;var n=0;if(arguments.length>0&&(n=Number(arguments[1]),isNaN(n)?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=r)return-1;for(var o=n>=0?n:Math.max(r-Math.abs(n),0);o<r;o++)if(o in e&&e[o]===t)return o;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if(0===r)return-1;var n=r;arguments.length>1&&((n=Number(arguments[1]))!==n?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n))));for(var o=n>=0?Math.min(n,r-1):r-Math.abs(n);o>=0;o--)if(o in e&&e[o]===t)return o;return-1}),Array.prototype.every||(Array.prototype.every=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,o=arguments[1];for(n=0;n<r;n++)if(n in e&&!t.call(o,e[n],n,e))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,o=arguments[1];for(n=0;n<r;n++)if(n in e&&t.call(o,e[n],n,e))return!0;return!1}),Array.prototype.forEach||(Array.prototype.forEach=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,o=arguments[1];for(n=0;n<r;n++)n in e&&t.call(o,e[n],n,e)}),Array.prototype.map||(Array.prototype.map=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n=[];n.length=r;var o,i=arguments[1];for(o=0;o<r;o++)o in e&&(n[o]=t.call(i,e[o],o,e));return n}),Array.prototype.filter||(Array.prototype.filter=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,o=[],i=arguments[1];for(n=0;n<r;n++)if(n in e){var a=e[n];t.call(i,a,n,e)&&o.push(a)}return o}),Array.prototype.reduce||(Array.prototype.reduce=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();if(0===r&&1===arguments.length)throw TypeError();var n,o=0;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in e){n=e[o++];break}if(++o>=r)throw TypeError()}for(;o<r;)o in e&&(n=t.call(undefined,n,e[o],o,e)),o++;return n}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();if(0===r&&1===arguments.length)throw TypeError();var n,o=r-1;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in this){n=this[o--];break}if(--o<0)throw TypeError()}for(;o>=0;)o in e&&(n=t.call(undefined,n,e[o],o,e)),o--;return n}),String.prototype.trim||(String.prototype.trim=function(){return String(this).replace(/^\s+/,"").replace(/\s+$/,"")}),Date.now||(Date.now=function(){return Number(new Date)}),Date.prototype.toISOString||(Date.prototype.toISOString=function(){function t(t){return("00"+t).slice(-2)}return this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1)+"-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":"+t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+"."+function(t){return("000"+t).slice(-3)}(this.getUTCMilliseconds())+"Z"}),function(t){"use strict";function e(e){return e===t?C:e}function r(t,e){for(var r=Object.getOwnPropertyDescriptor(t,e),n=Object.getPrototypeOf(t);!r&&n;)r=Object.getOwnPropertyDescriptor(n,e),n=Object.getPrototypeOf(n);return r}function n(t,e,r,n){e in t&&!n&&!I||("function"==typeof r?Object.defineProperty(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0}):Object.defineProperty(t,e,{value:r,configurable:!1,enumerable:!1,writable:!1}))}function o(t,e,r){Object.defineProperty(t,e,{value:r,configurable:!1,enumerable:!1,writable:!0})}function i(){function t(t){var e=t.valueOf,n=R(null);return Object.defineProperty(t,"valueOf",{value:function(r){return function(o){return o===r?n:e.apply(t,arguments)}}(r),configurable:!0,writeable:!0,enumerable:!1}),n}function e(t){var e="function"==typeof t.valueOf&&t.valueOf(r);return e===t?null:e}var r=R(null);return{clear:function(){r=R(null)},remove:function(t){var r=e(t);return!(!r||!b(r,"value"))&&(delete r.value,!0)},get:function(t,r){var n=e(t);return n&&b(n,"value")?n.value:r},has:function(t){var r=e(t);return Boolean(r&&b(r,"value"))},set:function(r,n){(e(r)||t(r)).value=n}}}function a(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":e instanceof t.Symbol?"symbol":"object"}}function u(t){return t=Number(t),L(t)?0:0===t||t===Infinity||t===-Infinity?t:(t<0?-1:1)*V(H(t))}function c(t){return t>>>0}function s(t){if(null===t||t===C)throw TypeError();return Object(t)}function f(t){var e=u(t);return e<=0?0:e===Infinity?9007199254740991:K(e,9007199254740991)}function l(t){return"function"==typeof t}function p(t){return!!/Constructor/.test(Object.prototype.toString.call(t))||(!!/Function/.test(Object.prototype.toString.call(t))||"function"==typeof t)}function h(t,e){if(typeof t!=typeof e)return!1;switch(typeof t){case"undefined":return!0;case"number":return t!==t&&e!==e||(0===t&&0===e?1/t==1/e:t===e);case"boolean":case"string":case"object":default:return t===e}}function y(t,e){if(typeof t!=typeof e)return!1;switch(typeof t){case"undefined":return!0;case"number":return t!==t&&e!==e||t===e;case"boolean":case"string":case"object":default:return t===e}}function v(t,e){return s(t)[e]}function d(t,e){var r=v(t,e);if(r===C||null===r)return C;if(!l(r))throw TypeError();return r}function m(t,e){for(;t;){if(Object.prototype.hasOwnProperty.call(t,e))return!0;if("object"!==a(t))return!1;var r=Object.getPrototypeOf(t);if(r===t)return!1;t=r}return!1}function b(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function g(t,e){arguments.length<2&&(e=d(t,it));var r=e.call(t);if("object"!==a(r))throw TypeError();return r}function E(t,e){if(arguments.length<2)var r=t.next();else r=t.next(e);if("object"!==a(r))throw TypeError();return r}function w(t){return t.value}function S(t,e){var r=E(t,e),n=r.done;return!0!==Boolean(n)&&r}function O(t,e){var r={};return r.value=t,r.done=e,r}function T(t,e,r){k(function(){e.apply(C,r)})}function j(t){}function _(t){var e=[];if(Object(t)!==t)return e;for(var r=new Set;null!==t;)Object.getOwnPropertyNames(t).forEach(function(n){if(!r.has(n)){var o=Object.getOwnPropertyDescriptor(t,n);o&&(r.add(n),o.enumerable&&e.push(n))}}),t=Object.getPrototypeOf(t);return e[it]()}function P(t){return Object.getOwnPropertyNames(t)}function R(t,e){return Object.create(t,e)}function A(){}function D(t,e){var r=String(t),n=new A;return o(n,"[[IteratedString]]",r),o(n,"[[StringIteratorNextIndex]]",0),o(n,"[[StringIterationKind]]",e),n}function N(){}function M(t,e){var r=s(t),n=new N;return o(n,"[[IteratedObject]]",r),o(n,"[[ArrayIteratorNextIndex]]",0),o(n,"[[ArrayIterationKind]]",e),n}var x,I=!1,C=void 0,k=function(t,e){return t?function(e){t.resolve().then(function(){e()})}:e?function(t){e(t)}:function(t){setTimeout(t,0)}}(t.Promise,t.setImmediate),L=t.isNaN,U=t.parseInt,F=t.parseFloat,W=Math.E,q=Math.LOG10E,B=Math.LOG2E,H=Math.abs,X=Math.ceil,G=Math.exp,V=Math.floor,z=Math.log,$=Math.max,K=Math.min,J=Math.pow,Y=Math.random,Z=Math.sqrt,Q=String.prototype.match,tt=String.prototype.replace,et=String.prototype.search,rt=String.prototype.split,nt=Object.create(null);!function(){function r(t){return Array(t+1).join("x").replace(/x/g,function(){return Y()<.5?"‌":"‍"})}function i(t){if(!(this instanceof i))return new i(t,a);if(this instanceof i&&arguments[1]!==a)throw TypeError();var e=t===C?C:String(t);return o(this,"[[SymbolData]]",r(128)),o(this,"[[Description]]",e),u[this]=this,this}var a=Object.create(null),u={};x=function(t){return u[t]};var c=[];"Symbol"in t&&!I||(t.Symbol=i),n(i,"for",function(t){for(var e=String(t),r=0;r<c.length;++r){var n=c[r];if(h(n["[[key]]"],e))return n["[[symbol]]"]}var o=i(t);return c.push({"[[key]]":e,"[[symbol]]":o}),o}),n(t.Symbol,"iterator",t.Symbol("Symbol.iterator")),n(i,"keyFor",function(t){if(!(t instanceof i))throw TypeError();for(var e=0;e<c.length;++e){var r=c[e];if(h(r["[[symbol]]"],t))return r["[[key]]"]}return C}),n(t.Symbol,"match",t.Symbol("Symbol.match")),n(t.Symbol,"replace",t.Symbol("Symbol.replace")),n(t.Symbol,"search",t.Symbol("Symbol.search")),n(t.Symbol,"split",t.Symbol("Symbol.split")),n(t.Symbol,"toStringTag",t.Symbol("Symbol.toStringTag")),Object.defineProperty(i.prototype,"toString",{value:function(){var t=e(this),r=t["[[Description]]"];return"Symbol("+(r===C?"":r)+t["[[SymbolData]]"]+")"},configurable:!0,writeable:!0,enumerable:!1}),Object.defineProperty(i.prototype,"valueOf",{value:function(){throw TypeError()},configurable:!0,writeable:!0,enumerable:!1})}();var ot={},it=t.Symbol.iterator,at=t.Symbol.match,ut=t.Symbol.replace,ct=t.Symbol.search,st=t.Symbol.split,ft=t.Symbol.toStringTag;n(Object,"assign",function(t,e){var r=s(t);if(arguments.length<2)return r;for(var n=1;n<arguments.length;){var o=arguments[n++];if(o===C||null===o)var i=[];else{var a=s(o);i=P(a)}for(var u=0;u<i.length;++u){var c=i[u],f=Object.getOwnPropertyDescriptor(a,c);if(f!==C&&f.enumerable){var l=a[c];r[c]=l}}}return r}),function(){function e(t){return!x(t)}var r="symbol"==typeof t.Symbol(),o=Object.getOwnPropertyNames,i=Object.keys,a="object"==typeof window?o(window):[];n(Object,"getOwnPropertyNames",function(t){if("[object Window]"===Object.prototype.toString.call(t))try{return o(t).filter(e)}catch(r){return a.slice()}return o(t).filter(e)},!r),n(Object,"getOwnPropertySymbols",function(t){return o(t).filter(x).map(x)},!r),n(Object,"keys",function(t){return i(t).filter(e)},!r)}(),n(Object,"is",function(t,e){return h(t,e)}),n(Object,"setPrototypeOf",function(t,e){if("object"!==a(t))throw TypeError();if("object"!==a(e)&&"null"!==a(e))throw TypeError();return t.__proto__=e,t});var lt=Object.prototype.toString;n(Object.prototype,"toString",function(){var t=e(this);return t===Object(t)&&ft in t?"[object "+t[ft]+"]":lt.apply(t,arguments)}),n(t.Symbol.prototype,t.Symbol.toStringTag,"Symbol"),n(Number,"EPSILON",function(){var t,e;for(t=1;1+t!==1;t/=2)e=t;return e}()),n(Number,"isFinite",function(t){return"number"===a(t)&&(t===t&&t!==+Infinity&&t!==-Infinity)}),n(Number,"isInteger",function(t){return"number"===a(t)&&(t===t&&t!==+Infinity&&t!==-Infinity&&u(t)===t)}),n(Number,"isNaN",function(t){return"number"===a(t)&&t!==t}),n(Number,"isSafeInteger",function(t){if("number"!==a(t))return!1;if(t!==t||t===+Infinity||t===-Infinity)return!1;var e=u(t);return e===t&&H(e)<=9007199254740991}),n(Number,"MAX_SAFE_INTEGER",9007199254740991),n(Number,"MIN_SAFE_INTEGER",-9007199254740991),n(Number,"parseFloat",F),n(Number,"parseInt",U),n(Math,ft,"Math"),n(Math,"acosh",function(t){return t=Number(t),z(t+Z(t*t-1))}),n(Math,"asinh",function(t){if(t=Number(t),h(t,-0))return t;var e=Z(t*t+1);return z(e===-t?0:t+e)}),n(Math,"atanh",function(t){return 0===(t=Number(t))?t:z((1+t)/(1-t))/2}),n(Math,"cbrt",function(t){if(t=Number(t),L(t/t))return t;var e=J(H(t),1/3),r=t/e/e;return e+e*(r-e)/(2*e+r)}),n(Math,"clz32",function(t){function e(t){return 240&t?128&t?0:64&t?1:32&t?2:3:8&t?4:4&t?5:2&t?6:1&t?7:8}return 4278190080&(t=c(t))?e(t>>24):16711680&t?e(t>>16)+8:65280&t?e(t>>8)+16:e(t)+24}),n(Math,"cosh",function(t){return t=Number(t),(J(W,t)+J(W,-t))/2}),n(Math,"expm1",function(t){return t=Number(t),h(t,-0)?-0:H(t)<1e-5?t+.5*t*t:G(t)-1}),n(Math,"fround",function(t){return L(t)?NaN:1/t==+Infinity||1/t==-Infinity||t===+Infinity||t===-Infinity?t:new Float32Array([t])[0]}),n(Math,"hypot",function(){for(var t=[],e=0,r=!1,n=0;n<arguments.length;++n){var o=H(Number(arguments[n]));if(o===Infinity)return o;o!==o&&(r=!0),o>e&&(e=o),t[n]=o}if(r)return NaN;if(0===e)return 0;var i=0;for(n=0;n<t.length;++n){var a=t[n]/e;i+=a*a}return e*Z(i)}),n(Math,"imul",function(t,e){var r=c(t),n=c(e),o=65535&r,i=65535&n;return o*i+((r>>>16&65535)*i+o*(n>>>16&65535)<<16>>>0)|0},"imul"in Math&&0===Math.imul(1,2147483648)),n(Math,"log1p",function(t){return(t=Number(t))<-1?NaN:h(t,-0)?-0:H(t)>1e-4?z(1+t):(-.5*t+1)*t}),n(Math,"log10",function(t){return t=Number(t),z(t)*q}),n(Math,"log2",function(t){return t=Number(t),z(t)*B}),n(Math,"sign",function(t){return(t=Number(t))<0?-1:t>0?1:t}),n(Math,"sinh",function(t){return t=Number(t),h(t,-0)?t:(J(W,t)-J(W,-t))/2}),n(Math,"tanh",function(t){t=Number(t);var e=J(W,2*t)-1,r=J(W,2*t)+1;return h(t,-0)?t:e===r?1:e/r}),n(Math,"trunc",function(t){return t=Number(t),L(t)?NaN:t<0?X(t):V(t)});var pt=function(){var t={},e=Symbol();return t[Symbol.match]=function(){return e},"".match(t)===e}();n(String,"fromCodePoint",function(){for(var t=arguments,e=t.length,r=[],n=0;n<e;){var o=t[n],i=Number(o);if(!h(i,u(i))||i<0||i>1114111)throw RangeError("Invalid code point "+i);i<65536?r.push(String.fromCharCode(i)):(i-=65536,r.push(String.fromCharCode(55296+(i>>10))),r.push(String.fromCharCode(i%1024+56320))),n+=1}return r.join("")}),n(String,"raw",function(t){var e=[].slice.call(arguments,1),r=Object(t).raw,n=Object(r),o=f(n.length);if(o<=0)return"";for(var i=[],a=0;;){var u=n[a],c=String(u);if(i.push(c),a+1===o)return i.join("");u=e[a];var s=String(u);i.push(s),a+=1}}),n(String.prototype,"codePointAt",function(t){var r=e(this),n=String(r),o=u(t),i=n.length;if(o<0||o>=i)return C;var a=n.charCodeAt(o);if(a<55296||a>56319||o+1===i)return a;var c=n.charCodeAt(o+1);return c<56320||c>57343?a:1024*(a-55296)+(c-56320)+65536}),n(String.prototype,"endsWith",function(t){var r=arguments[1],n=e(this),o=String(n),i=String(t),a=o.length,c=r===C?a:u(r),s=K($(c,0),a),f=i.length,l=s-f;return!(l<0)&&o.substring(l,l+f)===i}),n(String.prototype,"includes",function(t){var r=arguments[1],n=e(this),o=String(n),i=String(t),a=u(r),c=o.length,s=K($(a,0),c);return-1!==o.indexOf(i,s)}),n(String.prototype,"match",function(t){var r=e(this),n=String(r);if(m(t,at))var o=t;else o=new RegExp(t);return o[at](n)},!pt),n(String.prototype,"repeat",function(t){var r=e(this),n=String(r),o=u(t);if(o<0)throw RangeError();if(o===Infinity)throw RangeError();return new Array(o+1).join(n)}),n(String.prototype,"replace",function(t,r){var n=e(this);return m(t,ut)?t[ut](n,r):tt.call(n,t,r)},!pt),n(String.prototype,"search",function(t){var r=e(this),n=String(r);if(m(t,ct))var o=t;else o=new RegExp(t);return o[ct](n)},!pt),n(String.prototype,"split",function(t,r){var n=e(this);return m(t,st)?t[st](n,r):rt.call(n,t,r)},!pt),n(String.prototype,"startsWith",function(t){var r=arguments[1],n=e(this),o=String(n),i=String(t),a=u(r),c=o.length,s=K($(a,0),c),f=i.length;return!(f+s>c)&&o.substring(s,s+f)===i}),n(String.prototype,it,function(){return D(this,"value")});var ht=Object.create(ot);A.prototype=ht,n(ht,"next",function(){var t=s(this),e=String(t["[[IteratedString]]"]),r=t["[[StringIteratorNextIndex]]"];if(r>=e.length)return o(t,"[[StringIteratorNextIndex]]",Infinity),O(C,!0);var n=e.codePointAt(r);return o(t,"[[StringIteratorNextIndex]]",r+(n>65535?2:1)),O(String.fromCodePoint(n),!1)}),n(ht,ft,"String Iterator"),"flags"in RegExp.prototype||Object.defineProperty(RegExp.prototype,"flags",{get:function(){var t=String(this);return t.substring(t.lastIndexOf("/")+1)}}),n(RegExp.prototype,at,function(t){var r=e(this);return Q.call(t,r)}),n(RegExp.prototype,ut,function(t,r){var n=e(this);return tt.call(t,n,r)}),n(RegExp.prototype,ct,function(t){var r=e(this);return et.call(t,r)}),n(RegExp.prototype,st,function(t,r){var n=e(this);return rt.call(t,n,r)}),n(Array,"from",function(t){var r=arguments[1],n=arguments[2],o=e(this);if(r===C)var i=!1;else{if(!l(r))throw TypeError();var a=n;i=!0}var u=d(t,it);if(u!==C){if(p(o))var c=new o;else c=new Array(0);for(var h=g(t,u),y=0;;){var v=S(h);if(!1===v)return c.length=y,c;var m=w(v);if(i)var b=r.call(a,m);else b=m;c[y]=b,y+=1}}var E=s(t),O=f(E.length);for(c=p(o)?new o(O):new Array(O),y=0;y<O;){var T=E[y];b=i?r.call(a,T,y):T,c[y]=b,y+=1}return c.length=O,c}),n(Array,"of",function(){var t,r=arguments,n=c(r.length),o=e(this);t=p(o)?s(t=new o(n)):new Array(n);for(var i=0;i<n;)t[i]=r[i],i+=1;return t.length=n,t}),n(Array.prototype,"copyWithin",function(t,e){var r=arguments[2],n=s(this),o=f(n.length);o=$(o,0);var i,a=u(t);i=a<0?$(o+a,0):K(a,o);var c,l=u(e);c=l<0?$(o+l,0):K(l,o);var p,h;h=(p=r===C?o:u(r))<0?$(o+p,0):K(p,o);var y,v=K(h-c,o-i);for(c<i&&i<c+v?(y=-1,c=c+v-1,i=i+v-1):y=1;v>0;){var d=String(c),b=String(i);if(m(n,d)){var g=n[d];n[b]=g}else delete n[b];c+=y,i+=y,v-=1}return n});var yt="entries"in Array.prototype&&"next"in[].entries();n(Array.prototype,"entries",function(){return M(this,"key+value")},!yt),n(Array.prototype,"fill",function(t){var e=arguments[1],r=arguments[2],n=s(this),o=f(n.length);o=$(o,0);var i,a=u(e);i=a<0?$(o+a,0):K(a,o);var c,l;for(l=(c=r===C?o:u(r))<0?$(o+c,0):K(c,o);i<l;)n[String(i)]=t,i+=1;return n}),n(Array.prototype,"find",function(t){var e=s(this),r=u(e.length);if(!l(t))throw TypeError();for(var n=arguments.length>1?arguments[1]:C,o=0;o<r;){var i=String(o);if(m(e,i)){var a=e[i],c=t.call(n,a,o,e);if(Boolean(c))return a}++o}return C}),n(Array.prototype,"findIndex",function(t){var e=s(this),r=f(e.length);if(!l(t))throw TypeError();for(var n=arguments.length>1?arguments[1]:C,o=0;o<r;){var i=String(o);if(m(e,i)){var a=e[i],u=t.call(n,a,o,e);if(Boolean(u))return o}++o}return-1}),n(Array.prototype,"keys",function(){return M(this,"key")},!yt),n(Array.prototype,"values",function(){return M(this,"value")},!yt),n(Array.prototype,it,Array.prototype.values);var vt=Object.create(ot);N.prototype=vt,n(vt,"next",function(){var t=e(this);if("object"!==a(t))throw TypeError();var r,n,i=t["[[IteratedObject]]"],u=t["[[ArrayIteratorNextIndex]]"],s=t["[[ArrayIterationKind]]"],f=c(i.length);if(-1!==s.indexOf("sparse"))for(var l=!1;!l&&u<f;)(l=m(i,r=String(u)))||(u+=1);if(u>=f)return o(t,"[[ArrayIteratorNextIndex]]",Infinity),O(C,!0);if(r=u,o(t,"[[ArrayIteratorNextIndex]]",u+1),-1!==s.indexOf("value")&&(n=i[r]),-1!==s.indexOf("key+value"))return O([r,n],!1);if(-1!==s.indexOf("key"))return O(r,!1);if("value"===s)return O(n,!1);throw Error("Internal error")}),n(vt,ft,"Array Iterator"),["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"].forEach(function(r){if(r in t){var o=t[r];n(o,"from",function(t){var r=arguments[1],n=arguments[2],o=e(this);if(!p(o))throw TypeError();if(r===C)var i=!1;else{if(l(r))throw TypeError();var a=n;i=!0}var u=d(t,it);if(u!==C){for(var c=g(t,u),h=[],y=!0;!1!==y;)if(!1!==(y=S(c))){var v=w(y);h.push(v)}for(var m=h.length,b=new o(m),E=0;E<m;){var O=h.shift();if(i)var T=r.call(a,O);else T=O;b[E]=T,++E}return b}var j=s(t);for(b=new o(m=f(j.length)),E=0;E<m;)O=j[E],T=i?r.call(a,O,E):O,b[E]=T,++E;return b}),n(o,"of",function(){for(var t=arguments,r=t.length,n=new(e(this))(r),o=0;o<r;)n[o]=t[o],++o;return n}),n(o.prototype,"copyWithin",Array.prototype.copyWithin),n(o.prototype,"entries",Array.prototype.entries),n(o.prototype,"every",Array.prototype.every),n(o.prototype,"fill",function(t){var e=arguments[1],r=arguments[2],n=s(this),o=f(n.length);o=$(o,0);var i,a=u(e);i=a<0?$(o+a,0):K(a,o);var c,l;for(l=(c=r===C?o:u(r))<0?$(o+c,0):K(c,o);i<l;)n[String(i)]=t,i+=1;return n}),n(o.prototype,"filter",function(t){var e=arguments[1],r=s(this),n=f(r.length);if(!l(t))throw TypeError();for(var o=e,i=r.constructor,a=[],u=0,c=0;u<n;){var p=r[u];t.call(o,p,u,r)&&(a.push(p),++c),++u}for(var h=new i(c),y=0,v=0;v<a.length;++v){var d=a[v];h[y]=d,++y}return h}),n(o.prototype,"find",Array.prototype.find),n(o.prototype,"findIndex",Array.prototype.findIndex),n(o.prototype,"forEach",Array.prototype.forEach),n(o.prototype,"indexOf",Array.prototype.indexOf),n(o.prototype,"join",Array.prototype.join),n(o.prototype,"keys",Array.prototype.keys),n(o.prototype,"lastIndexOf",Array.prototype.lastIndexOf),n(o.prototype,"map",function(t){var e=arguments[1],r=s(this),n=f(r.length);if(!l(t))throw TypeError();var o=e,i=C,a=r.constructor;p(a)&&(i=new a(n)),i===C&&(i=new Array(n));for(var u=0;u<n;){if(m(r,u)){var c=r[u],h=t.call(o,c,u,r);i[u]=h}++u}return i}),n(o.prototype,"reduce",Array.prototype.reduce),n(o.prototype,"reduceRight",Array.prototype.reduceRight),n(o.prototype,"reverse",Array.prototype.reverse),n(o.prototype,"slice",function(t,e){var r=s(this),n=f(r.length),o=u(t),i=o<0?$(n+o,0):K(o,n),a=e===C?n:u(e),c=a<0?$(n+a,0):K(a,n),l=c-i,h=r.constructor;if(!p(h))throw TypeError();for(var y=new h(l),v=0;i<c;){var d=r[i];y[v]=d,++i,++v}return y}),n(o.prototype,"some",Array.prototype.some),n(o.prototype,"sort",function(){var t=arguments[0];return Array.prototype.sort.call(this,function(e,r){return e!==e&&r!==r?0:e!==e?1:r!==r?-1:t!==C?t(e,r):e<r?-1:e>r?1:0})}),n(o.prototype,"values",Array.prototype.values),n(o.prototype,it,o.prototype.values),n(o.prototype,ft,r)}}),function(){function r(){var t=e(this),r=arguments[0];if("object"!==a(t))throw TypeError();if("[[MapData]]"in t)throw TypeError();if(r!==C){var n=t.set;if(!l(n))throw TypeError();var i=g(s(r))}if(o(t,"[[MapData]]",{keys:[],values:[]}),i===C)return t;for(;;){var u=S(i);if(!1===u)return t;var c=w(u);if("object"!==a(c))throw TypeError();var f=c[0],p=c[1];n.call(t,f,p)}return t}function i(t,e){var r;if(e===e)return t.keys.indexOf(e);for(r=0;r<t.keys.length;r+=1)if(y(t.keys[r],e))return r;return-1}function u(){}function c(t,e){if("object"!==a(t))throw TypeError();if(!("[[MapData]]"in t))throw TypeError();if(t["[[MapData]]"]===C)throw TypeError();var r=new u;return o(r,"[[Map]]",t),o(r,"[[MapNextIndex]]",0),o(r,"[[MapIterationKind]]",e),r}"Map"in t&&!I&&!function(){try{return new t.Map([]),!1}catch(e){return!0}}()&&!function(){try{return!(new t.Map).entries().next}catch(e){return!0}}()&&1===new t.Map([["a",1]]).size||(t.Map=r);var f={};n(r.prototype=f,"clear",function(){var t=e(this);if("object"!==a(t))throw TypeError();if(!("[[MapData]]"in t))throw TypeError();if(t["[[MapData]]"]===C)throw TypeError();var r=t["[[MapData]]"];return r.keys.length=0,r.values.length=0,C}),n(r.prototype,"delete",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[MapData]]"in r))throw TypeError();if(r["[[MapData]]"]===C)throw TypeError();var n=r["[[MapData]]"],o=i(n,t);return!(o<0)&&(n.keys[o]=nt,n.values[o]=nt,!0)}),n(r.prototype,"entries",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"key+value")}),n(r.prototype,"forEach",function(t){var r=arguments[1],n=e(this);if("object"!==a(n))throw TypeError();if(!("[[MapData]]"in n))throw TypeError();if(n["[[MapData]]"]===C)throw TypeError();var o=n["[[MapData]]"];if(!l(t))throw TypeError("First argument to forEach is not callable.");for(var i=0;i<o.keys.length;++i)o.keys[i]!==nt&&t.call(r,o.values[i],o.keys[i],n);return C}),n(r.prototype,"get",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[MapData]]"in r))throw TypeError();if(r["[[MapData]]"]===C)throw TypeError();var n=r["[[MapData]]"],o=i(n,t);return o>=0?n.values[o]:C}),n(r.prototype,"has",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[MapData]]"in r))throw TypeError();if(r["[[MapData]]"]===C)throw TypeError();return i(r["[[MapData]]"],t)>=0}),n(r.prototype,"keys",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"key")}),n(r.prototype,"set",function(t,r){var n=e(this);if("object"!==a(n))throw TypeError();if(!("[[MapData]]"in n))throw TypeError();if(n["[[MapData]]"]===C)throw TypeError();var o=n["[[MapData]]"],u=i(o,t);return u<0&&(u=o.keys.length),h(t,-0)&&(t=0),o.keys[u]=t,o.values[u]=r,n}),Object.defineProperty(r.prototype,"size",{get:function(){var t=e(this);if("object"!==a(t))throw TypeError();if(!("[[MapData]]"in t))throw TypeError();if(t["[[MapData]]"]===C)throw TypeError();for(var r=t["[[MapData]]"],n=0,o=0;o<r.keys.length;++o)r.keys[o]!==nt&&(n+=1);return n}}),n(r.prototype,"values",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"value")}),n(r.prototype,it,function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"key+value")}),n(t.Map.prototype,ft,"Map");var p=Object.create(ot);u.prototype=p,n(p,"next",function(){var t=e(this);if("object"!==a(t))throw TypeError();for(var r=t["[[Map]]"],n=t["[[MapNextIndex]]"],i=t["[[MapIterationKind]]"],u=r["[[MapData]]"];n<u.keys.length;){var c={key:u.keys[n],value:u.values[n]};if(n=n+=1,o(t,"[[MapNextIndex]]",n),c.key!==nt)return"key"===i?O(c.key,!1):"value"===i?O(c.value,!1):O([c.key,c.value],!1)}return O(C,!0)}),n(p,ft,"Map Iterator")}(),function(){function r(){var t=e(this),r=arguments[0];if("object"!==a(t))throw TypeError();if("[[SetData]]"in t)throw TypeError();if(r!==C){var n=t.add;if(!l(n))throw TypeError();var i=g(s(r))}if(o(t,"[[SetData]]",[]),i===C)return t;for(;;){var u=S(i);if(!1===u)return t;var c=w(u);n.call(t,c)}return t}function i(t,e){var r;if(e===e)return t.indexOf(e);for(r=0;r<t.length;r+=1)if(y(t[r],e))return r;return-1}function u(){}function c(t,e){if("object"!==a(t))throw TypeError();if(!("[[SetData]]"in t))throw TypeError();if(t["[[SetData]]"]===C)throw TypeError();var r=new u;return o(r,"[[IteratedSet]]",t),o(r,"[[SetNextIndex]]",0),o(r,"[[SetIterationKind]]",e),r}"Set"in t&&!I&&!function(){try{return!(new t.Set).entries().next}catch(e){return!0}}()&&1===new t.Set([1]).size||(t.Set=r);var f={};n(r.prototype=f,"add",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[SetData]]"in r))throw TypeError();if(r["[[SetData]]"]===C)throw TypeError();h(t,-0)&&(t=0);var n=i(r["[[SetData]]"],t);return n<0&&(n=r["[[SetData]]"].length),r["[[SetData]]"][n]=t,r}),n(r.prototype,"clear",function(){var t=e(this);if("object"!==a(t))throw TypeError();if(!("[[SetData]]"in t))throw TypeError();if(t["[[SetData]]"]===C)throw TypeError();return t["[[SetData]]"].length=0,C}),n(r.prototype,"delete",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[SetData]]"in r))throw TypeError();if(r["[[SetData]]"]===C)throw TypeError();var n=r["[[SetData]]"],o=i(n,t);return!(o<0)&&(n[o]=nt,!0)}),n(r.prototype,"entries",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"key+value")}),n(r.prototype,"forEach",function(t){var r=arguments[1],n=e(this);if("object"!==a(n))throw TypeError();if(!("[[SetData]]"in n))throw TypeError();if(n["[[SetData]]"]===C)throw TypeError();var o=n["[[SetData]]"];if(!l(t))throw TypeError("First argument to forEach is not callable.");for(var i=0;i<o.length;++i)o[i]!==nt&&t.call(r,o[i],o[i],n)}),n(r.prototype,"has",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[SetData]]"in r))throw TypeError();if(r["[[SetData]]"]===C)throw TypeError();return-1!==i(r["[[SetData]]"],t)}),Object.defineProperty(r.prototype,"size",{get:function(){var t=e(this);if("object"!==a(t))throw TypeError();if(!("[[SetData]]"in t))throw TypeError();if(t["[[SetData]]"]===C)throw TypeError();for(var r=t["[[SetData]]"],n=0,o=0;o<r.length;++o)r[o]!==nt&&(n+=1);return n}}),n(r.prototype,"values",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"value")}),r.prototype.keys=r.prototype.values,n(r.prototype,it,function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t)}),n(t.Set.prototype,ft,"Set");var p=Object.create(ot);u.prototype=p,n(p,"next",function(){var t=e(this);if("object"!==a(t))throw TypeError();for(var r=t["[[IteratedSet]]"],n=t["[[SetNextIndex]]"],i=t["[[SetIterationKind]]"],u=r["[[SetData]]"];n<u.length;){var c=u[n];if(n=n+=1,o(t,"[[SetNextIndex]]",n),c!==nt)return"key+value"===i?O([c,c],!1):O(c,!1)}return O(C,!0)}),n(p,ft,"Set Iterator")}(),function(){function r(){var t=e(this),r=arguments[0];if("object"!==a(t))throw TypeError();if("[[WeakMapData]]"in t)throw TypeError();if(r!==C){var n=t.set;if(!l(n))throw TypeError();var u=g(s(r))}if(o(t,"[[WeakMapData]]",new i),u===C)return t;for(;;){var c=S(u);if(!1===c)return t;var f=w(c);if("object"!==a(f))throw TypeError();var p=f[0],h=f[1];n.call(t,p,h)}return t}"WeakMap"in t&&!I||(t.WeakMap=r);var u={};n(r.prototype=u,"delete",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakMapData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakMapData]]"].remove(t)}),n(r.prototype,"get",function(t,r){var n=e(this);if("object"!==a(n))throw TypeError();if(n["[[WeakMapData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return n["[[WeakMapData]]"].get(t,r)}),n(r.prototype,"has",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakMapData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakMapData]]"].has(t)}),n(r.prototype,"set",function(t,r){var n=e(this);if("object"!==a(n))throw TypeError();if(n["[[WeakMapData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return n["[[WeakMapData]]"].set(t,r),n}),n(t.WeakMap.prototype,ft,"WeakMap"),function(){var e=new t.WeakMap,r=t.WeakMap.prototype.set;n(t.WeakMap.prototype,"set",function(){return r.apply(this,arguments),this},e.set({},0)!==e)}()}(),function(){function r(){var t=e(this),r=arguments[0];if("object"!==a(t))throw TypeError();if("[[WeakSetData]]"in t)throw TypeError();if(r!==C){var n=t.add;if(!l(n))throw TypeError();var u=g(s(r))}if(o(t,"[[WeakSetData]]",new i),u===C)return t;for(;;){var c=S(u);if(!1===c)return t;var f=w(c);n.call(t,f)}return t}"WeakSet"in t&&!I||(t.WeakSet=r);var u={};n(r.prototype=u,"add",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakSetData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakSetData]]"].set(t,!0),r}),n(r.prototype,"delete",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakSetData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakSetData]]"].remove(t)}),n(r.prototype,"has",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakSetData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakSetData]]"].has(t)}),n(t.WeakSet.prototype,ft,"WeakSet"),function(){var e=new t.WeakSet,r=t.WeakSet.prototype.add;n(t.WeakSet.prototype,"add",function(){return r.apply(this,arguments),this},e.add({})!==e)}()}(),"ArrayBuffer"in t&&(n(ArrayBuffer,"isView",function(t){return"object"===a(t)&&("buffer"in t&&t.buffer instanceof ArrayBuffer)}),n(ArrayBuffer.prototype,ft,"ArrayBuffer")),"DataView"in t&&n(DataView.prototype,ft,"DataView"),n(JSON,ft,"JSON"),n(ot,it,function(){return this}),function(){function r(t){var e={"[[value]]":!1},r=u();o(r,"[[Promise]]",t),o(r,"[[AlreadyResolved]]",e);var n=i();return o(n,"[[Promise]]",t),o(n,"[[AlreadyResolved]]",e),{"[[Resolve]]":r,"[[Reject]]":n}}function i(){var t=function(e){var r=t["[[Promise]]"],n=t["[[AlreadyResolved]]"];return n["[[value]]"]?C:(o(n,"[[value]]",!0),v(r,e))};return t}function u(){var t=function(e){var r=t["[[Promise]]"],n=t["[[AlreadyResolved]]"];if(n["[[value]]"])return C;if(o(n,"[[value]]",!0),h(e,r)){var i=TypeError();return v(r,i)}if("object"!==a(e))return c(r,e);try{var u=e.then}catch(u){return v(r,u)}return l(u)?(T("PromiseJobs",b,[r,e,u]),C):c(r,e)};return t}function c(t,e){var r=t["[[PromiseFulfillReactions]]"];return o(t,"[[PromiseResult]]",e),o(t,"[[PromiseFulfillReactions]]",C),o(t,"[[PromiseRejectReactions]]",C),o(t,"[[PromiseState]]","fulfilled"),d(r,e)}function s(t){return f(C,t)}function f(t,e){var r={};o(r,"[[Promise]]",t),o(r,"[[Resolve]]",C),o(r,"[[Reject]]",C);var n=p();o(n,"[[Capability]]",r);var i=t=new e(n);if(o(r,"[[Promise]]",t),!l(r["[[Resolve]]"]))throw TypeError();if(!l(r["[[Reject]]"]))throw TypeError();if("object"===a(i)&&!h(t,i))throw TypeError();return r}function p(){var t=function(e,r){var n=t["[[Capability]]"];if(n["[[Resolve]]"]!==C)throw TypeError();if(n["[[Reject]]"]!==C)throw TypeError();return o(n,"[[Resolve]]",e),o(n,"[[Reject]]",r),C};return t}function y(t){return"object"===a(t)&&("[[PromiseState]]"in t&&t["[[PromiseState]]"]!==C)}function v(t,e){var r=t["[[PromiseRejectReactions]]"];return o(t,"[[PromiseResult]]",e),o(t,"[[PromiseFulfillReactions]]",C),o(t,"[[PromiseRejectReactions]]",C),o(t,"[[PromiseState]]","rejected"),d(r,e)}function d(t,e){for(var r=0,n=t.length;r<n;++r)T("PromiseJobs",m,[t[r],e]);return C}function m(t,e){var r,n,o=t["[[Capabilities]]"],i=t["[[Handler]]"];try{if("Identity"===i)r=e;else{if("Thrower"===i)throw e;r=i.call(C,e)}}catch(r){return n=o["[[Reject]]"].call(C,r),void j(n)}j(n=o["[[Resolve]]"].call(C,r))}function b(t,e,n){var o=r(t);try{var i=n.call(e,o["[[Resolve]]"],o["[[Reject]]"])}catch(i){return void j(o["[[Reject]]"].call(C,i))}j(i)}function E(t){var e={configurable:!1,enumerable:!1,writable:!0,value:C};Object.defineProperty(this,"[[PromiseState]]",e),Object.defineProperty(this,"[[PromiseConstructor]]",e),Object.defineProperty(this,"[[PromiseResult]]",e),Object.defineProperty(this,"[[PromiseFulfillReactions]]",e),Object.defineProperty(this,"[[PromiseRejectReactions]]",e);var r=this;if("object"!==a(r))throw new TypeError;if(!("[[PromiseState]]"in r))throw TypeError();if(r["[[PromiseState]]"]!==C)throw TypeError();if(!l(t))throw TypeError();return o(r,"[[PromiseConstructor]]",E),O(r,t)}function O(t,e){o(t,"[[PromiseState]]","pending"),o(t,"[[PromiseFulfillReactions]]",[]),o(t,"[[PromiseRejectReactions]]",[]);var n=r(t);try{var i=e.call(C,n["[[Resolve]]"],n["[[Reject]]"])}catch(i){n["[[Reject]]"].call(C,i)}return t}function _(){var t=function(e){var r=t["[[AlreadyCalled]]"];if(r.value)return C;r.value=!0;var n=t["[[Index]]"],o=t["[[Values]]"],i=t["[[Capabilities]]"],a=t["[[RemainingElements]]"];try{o[n]=e}catch(u){return i["[[Reject]]"].call(C,u),i["[[Promise]]"]}return a.value-=1,0===a.value?i["[[Resolve]]"].call(C,o):C};return t}n(E,"all",function(t){var r=e(this),n=s(r);try{var i=g(t)}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}for(var a=[],u={value:1},c=0;;){try{var f=S(i)}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}if(!f){if(u.value-=1,0===u.value)n["[[Resolve]]"].apply(C,a);return n["[[Promise]]"]}try{var l=w(f)}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}try{var p=r.resolve(l)}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}var h=_();o(h,"[[AlreadyCalled]]",{value:!1}),o(h,"[[Index]]",c),o(h,"[[Values]]",a),o(h,"[[Capabilities]]",n),o(h,"[[RemainingElements]]",u),u.value+=1;try{p.then(h,n["[[Reject]]"])}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}c+=1}}),E.prototype={},n(E,"race",function(t){var r=e(this),n=s(r);try{var o=g(t)}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}for(;;){try{var i=S(o)}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}if(!i)return n["[[Promise]]"];try{var a=w(i)}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}try{var u=r.resolve(a)}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}try{u.then(n["[[Resolve]]"],n["[[Reject]]"])}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}}}),n(E,"reject",function(t){var r=s(e(this));r["[[Reject]]"].call(C,t);return r["[[Promise]]"]}),n(E,"resolve",function(t){var r=e(this);if(y(t)&&h(t["[[PromiseConstructor]]"],r))return t;var n=s(r);n["[[Resolve]]"].call(C,t);return n["[[Promise]]"]}),n(E.prototype,"catch",function(t){return this.then(C,t)}),E.prototype.constructor=E,n(E.prototype,"then",function(t,e){var r=this;if(!y(r))throw TypeError();l(t)||(t="Identity"),l(e)||(e="Thrower");var n=s(r.constructor),o={"[[Capabilities]]":n,"[[Handler]]":t},i={"[[Capabilities]]":n,"[[Handler]]":e};return"pending"===r["[[PromiseState]]"]?(r["[[PromiseFulfillReactions]]"].push(o),r["[[PromiseRejectReactions]]"].push(i)):"fulfilled"===r["[[PromiseState]]"]?T("PromiseJobs",m,[o,r["[[PromiseResult]]"]]):"rejected"===r["[[PromiseState]]"]&&T("PromiseJobs",m,[i,r["[[PromiseResult]]"]]),n["[[Promise]]"]}),"Promise"in t&&!I||(t.Promise=E),"cast"in t.Promise&&(t.Promise.resolve=t.Promise.cast)}(),n(Promise.prototype,ft,"Promise"),"Reflect"in t&&!I||(t.Reflect={}),n(Reflect,"apply",function(t,e,r){if(!l(t))throw TypeError();return Function.prototype.apply.call(t,e,r)}),n(Reflect,"construct",function(t,e){return __cons(t,e)}),n(Reflect,"defineProperty",function(t,e,r){try{return Object.defineProperty(t,e,r),!0}catch(n){return!1}}),n(Reflect,"deleteProperty",function(t,e){try{return delete t[e],!b(t,e)}catch(r){return!1}}),n(Reflect,"enumerate",function(t){return _(t=s(t))}),n(Reflect,"get",function(t,e,n){t=s(t),e=String(e),n=n===C?t:s(n);var o=r(t,e);return o&&"get"in o?Function.prototype.call.call(o.get,n):t[e]}),n(Reflect,"getOwnPropertyDescriptor",Object.getOwnPropertyDescriptor),n(Reflect,"getPrototypeOf",Object.getPrototypeOf),n(Reflect,"has",function(t,e){return String(e)in s(t)}),n(Reflect,"isExtensible",Object.isExtensible),n(Reflect,"ownKeys",function(t){var e=s(t);return Object.getOwnPropertyNames(e)}),n(Reflect,"preventExtensions",function(t){try{return Object.preventExtensions(t),!0}catch(e){return!1}}),n(Reflect,"set",function(t,e,n,o){t=s(t),e=String(e),o=o===C?t:s(o);var i=r(t,e);try{return i&&"set"in i?Function.prototype.call.call(i.set,o,n):t[e]=n,!0}catch(a){return!1}}),n(Reflect,"setPrototypeOf",function(t,e){try{return t.__proto__=e,Reflect.getPrototypeOf(t)===e}catch(r){return!1}})}(self),function(t){"use strict";function e(t){return t=Number(t),a(t)?0:0===t||t===Infinity||t===-Infinity?t:(t<0?-1:1)*c(u(t))}function r(t){if(null===t||t===i)throw TypeError();return Object(t)}function n(t){var r=e(t);return r<=0?0:s(r,9007199254740991)}function o(t,e){if(typeof t!=typeof e)return!1;switch(typeof t){case"undefined":return!0;case"number":return t!==t&&e!==e||t===e;case"boolean":case"string":case"object":default:return t===e}}var i=void 0,a=t.isNaN,u=Math.abs,c=Math.floor,s=(Math.max,Math.min);!function(t,e,r,n){e in t&&!n||("function"==typeof r?Object.defineProperty(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0}):Object.defineProperty(t,e,{value:r,configurable:!1,enumerable:!1,writable:!1}))}(Array.prototype,"includes",function(t){var i=arguments[1],a=r(this),u=n(a.length);if(0===u)return!1;var c=e(i);if(c>=0)var s=c;else(s=u+c)<0&&(s=0);for(;s<u;){a[s];if(o(a[s],t))return!0;s+=1}return!1})}(this),function(t){"use strict";function e(t,e,r,n){e in t&&!n||("function"==typeof r?Object.defineProperty(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0}):Object.defineProperty(t,e,{value:r,configurable:!1,enumerable:!1,writable:!1}))}function r(t){return t=Number(t),c(t)?0:0===t||t===Infinity||t===-Infinity?t:(t<0?-1:1)*f(s(t))}function n(t){if(null===t||t===u)throw TypeError();return Object(t)}function o(t){var e=r(t);return e<=0?0:l(e,9007199254740991)}function i(t,e,r){Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!0,configurable:!0})}function a(t,e){var r=[];return Object.keys(t).forEach(function(n){var o=Object.getOwnPropertyDescriptor(t,n);if(o&&o.enumerable)if("key"===e)r.push(n);else{var i=t[n];"value"===e?r.push(i):r.push([n,i])}}),r}var u=void 0,c=t.isNaN,s=Math.abs,f=Math.floor,l=Math.min;e(Object,"entries",function(t){return a(n(t),"key+value")}),e(Object,"getOwnPropertyDescriptors",function(t){for(var e=n(t),r=Object.getOwnPropertyNames(e),o={},a=0;a<r.length;++a){var u=r[a];i(o,u,Object.getOwnPropertyDescriptor(e,u))}return o}),e(Object,"values",function(t){return a(n(t),"value")}),e(String.prototype,"padEnd",function(t){var e=arguments[1],r=String(this),n=r.length;if(e===u)var i="";else i=String(e);""===i&&(i=" ");var a=o(t);if(a<=n)return r;for(var c=a-n,s="";s.length<c;)s+=i;return r+s.substring(0,c)}),e(String.prototype,"padStart",function(t){var e=arguments[1],r=String(this),n=r.length;if(e===u)var i="";else i=String(e);""===i&&(i=" ");var a=o(t);if(a<=n)return r;for(var c=a-n,s="";s.length<c;)s+=i;return s.substring(0,c)+r})}(this),function(t){"use strict";"window"in t&&"document"in t&&("head"in document||(document.head=document.getElementsByTagName("head")[0]),["abbr","article","aside","audio","bdi","canvas","data","datalist","details","dialog","figcaption","figure","footer","header","hgroup","main","mark","meter","nav","output","picture","progress","section","summary","template","time","video"].forEach(function(t){document.createElement(t)}),!("dataset"in document.createElement("span"))&&"Element"in t&&Element.prototype&&Object.defineProperty&&Object.defineProperty(Element.prototype,"dataset",{get:function(){for(var t=Object.create(null),e=0;e<this.attributes.length;++e){var r=this.attributes[e];r.specified&&"data-"===r.name.substring(0,5)&&function(e,r){var n=r.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()});t[n]=e.getAttribute("data-"+r),Object.defineProperty(t,n,{get:function(){return e.getAttribute("data-"+r)},set:function(t){e.setAttribute("data-"+r,t)}})}(this,r.name.substring(5))}return t}}),function(){if(!("atob"in t&&"btoa"in t)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.atob=function(t){var r=0,n=[],o=0,i=0;if((t=(t=String(t)).replace(/\s/g,"")).length%4==0&&(t=t.replace(/=+$/,"")),t.length%4==1)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(t))throw Error("InvalidCharacterError");for(;r<t.length;)o=o<<6|e.indexOf(t.charAt(r)),24===(i+=6)&&(n.push(String.fromCharCode(o>>16&255)),n.push(String.fromCharCode(o>>8&255)),n.push(String.fromCharCode(255&o)),i=0,o=0),r+=1;return 12===i?(o>>=4,n.push(String.fromCharCode(255&o))):18===i&&(o>>=2,n.push(String.fromCharCode(o>>8&255)),n.push(String.fromCharCode(255&o))),n.join("")},t.btoa=function(t){t=String(t);var r,n,o,i,a,u,c,s=0,f=[];if(/[^\x00-\xFF]/.test(t))throw Error("InvalidCharacterError");for(;s<t.length;)i=(r=t.charCodeAt(s++))>>2,a=(3&r)<<4|(n=t.charCodeAt(s++))>>4,u=(15&n)<<2|(o=t.charCodeAt(s++))>>6,c=63&o,s===t.length+2?(u=64,c=64):s===t.length+1&&(c=64),f.push(e.charAt(i),e.charAt(a),e.charAt(u),e.charAt(c));return f.join("")}}}(),function(){function e(t){return t.offsetWidth>0&&t.offsetHeight>0}function r(){var t=o;o=Object.create(null),a=-1,Object.keys(t).forEach(function(r){var n=t[r];n.element&&!e(n.element)||n.callback(Date.now())})}if(!("requestAnimationFrame"in t)){var n=60,o=Object.create(null),i=0,a=-1;t.requestAnimationFrame=function(e,u){var c=++i;return o[c]={callback:e,element:u},-1===a&&(a=t.setTimeout(r,1e3/n)),c},t.cancelAnimationFrame=function(e){delete o[e],0===Object.keys(o).length&&(t.clearTimeout(a),a=-1)}}}())}(self),function(t){"use strict";function e(t,e){t&&Object.keys(e).forEach(function(r){if(!(r in t||r in t.prototype))try{Object.defineProperty(t.prototype,r,Object.getOwnPropertyDescriptor(e,r))}catch(n){t[r]=e[r]}})}function r(t){var e=null;return 1===(t=t.map(function(t){return t instanceof Node?t:document.createTextNode(t)})).length?e=t[0]:(e=document.createDocumentFragment(),t.forEach(function(t){e.appendChild(t)})),e}if("window"in t&&"document"in t){document.querySelectorAll||(document.querySelectorAll=function(t){var e,r=document.createElement("style"),n=[];for(document.documentElement.firstChild.appendChild(r),document._qsa=[],r.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),r.parentNode.removeChild(r);document._qsa.length;)(e=document._qsa.shift()).style.removeAttribute("x-qsa"),n.push(e);return document._qsa=null,n}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),document.getElementsByClassName||(document.getElementsByClassName=function(t){return t=String(t).replace(/^|\s+/g,"."),document.querySelectorAll(t)}),t.Node=t.Node||function(){throw TypeError("Illegal constructor")},[["ELEMENT_NODE",1],["ATTRIBUTE_NODE",2],["TEXT_NODE",3],["CDATA_SECTION_NODE",4],["ENTITY_REFERENCE_NODE",5],["ENTITY_NODE",6],["PROCESSING_INSTRUCTION_NODE",7],["COMMENT_NODE",8],["DOCUMENT_NODE",9],["DOCUMENT_TYPE_NODE",10],["DOCUMENT_FRAGMENT_NODE",11],["NOTATION_NODE",12]].forEach(function(e){e[0]in t.Node||(t.Node[e[0]]=e[1])}),t.DOMException=t.DOMException||function(){throw TypeError("Illegal constructor")},[["INDEX_SIZE_ERR",1],["DOMSTRING_SIZE_ERR",2],["HIERARCHY_REQUEST_ERR",3],["WRONG_DOCUMENT_ERR",4],["INVALID_CHARACTER_ERR",5],["NO_DATA_ALLOWED_ERR",6],["NO_MODIFICATION_ALLOWED_ERR",7],["NOT_FOUND_ERR",8],["NOT_SUPPORTED_ERR",9],["INUSE_ATTRIBUTE_ERR",10],["INVALID_STATE_ERR",11],["SYNTAX_ERR",12],["INVALID_MODIFICATION_ERR",13],["NAMESPACE_ERR",14],["INVALID_ACCESS_ERR",15]].forEach(function(e){e[0]in t.DOMException||(t.DOMException[e[0]]=e[1])}),function(){function e(t,e,r){if("function"==typeof e){"DOMContentLoaded"===t&&(t="load");var n=this,o=function(t){t._timeStamp=Date.now(),t._currentTarget=n,e.call(this,t),t._currentTarget=null};this["_"+t+e]=o,this.attachEvent("on"+t,o)}}function r(t,e,r){if("function"==typeof e){"DOMContentLoaded"===t&&(t="load");var n=this["_"+t+e];n&&(this.detachEvent("on"+t,n),this["_"+t+e]=null)}}"Element"in t&&!Element.prototype.addEventListener&&Object.defineProperty&&(Event.CAPTURING_PHASE=1,Event.AT_TARGET=2,Event.BUBBLING_PHASE=3,Object.defineProperties(Event.prototype,{CAPTURING_PHASE:{get:function(){return 1}},AT_TARGET:{get:function(){return 2}},BUBBLING_PHASE:{get:function(){return 3}},target:{get:function(){return this.srcElement}},currentTarget:{get:function(){return this._currentTarget}},eventPhase:{get:function(){return this.srcElement===this.currentTarget?Event.AT_TARGET:Event.BUBBLING_PHASE}},bubbles:{get:function(){switch(this.type){case"click":case"dblclick":case"mousedown":case"mouseup":case"mouseover":case"mousemove":case"mouseout":case"mousewheel":case"keydown":case"keypress":case"keyup":case"resize":case"scroll":case"select":case"change":case"submit":case"reset":return!0}return!1}},cancelable:{get:function(){switch(this.type){case"click":case"dblclick":case"mousedown":case"mouseup":case"mouseover":case"mouseout":case"mousewheel":case"keydown":case"keypress":case"keyup":case"submit":return!0}return!1}},timeStamp:{get:function(){return this._timeStamp}},stopPropagation:{value:function(){this.cancelBubble=!0}},preventDefault:{value:function(){this.returnValue=!1}},defaultPrevented:{get:function(){return!1===this.returnValue}}}),[Window,HTMLDocument,Element].forEach(function(t){t.prototype.addEventListener=e,t.prototype.removeEventListener=r}))}(),function(){function e(t,e){e=e||{bubbles:!1,cancelable:!1,detail:undefined};var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),r}"CustomEvent"in t&&"function"==typeof t.CustomEvent||(e.prototype=t.Event.prototype,t.CustomEvent=e)}(),window.addEvent=function(t,e,r){t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent&&(t["e"+e+r]=r,t[e+r]=function(){var n=window.event;n.currentTarget=t,n.preventDefault=function(){n.returnValue=!1},n.stopPropagation=function(){n.cancelBubble=!0},n.target=n.srcElement,n.timeStamp=Date.now(),t["e"+e+r].call(this,n)},t.attachEvent("on"+e,t[e+r]))},window.removeEvent=function(t,e,r){t.removeEventListener?t.removeEventListener(e,r,!1):t.detachEvent&&(t.detachEvent("on"+e,t[e+r]),t[e+r]=null,t["e"+e+r]=null)},function(){function e(t,e){function r(t){return t.length?t.split(/\s+/g):[]}function n(t,e){var n=r(e),o=n.indexOf(t);return-1!==o&&n.splice(o,1),n.join(" ")}if(Object.defineProperties(this,{length:{get:function(){return r(t[e]).length}},item:{value:function(n){var o=r(t[e]);return 0<=n&&n<o.length?o[n]:null}},contains:{value:function(n){if(0===(n=String(n)).length)throw SyntaxError();if(/\s/.test(n))throw Error("InvalidCharacterError");return-1!==r(t[e]).indexOf(n)}},add:{value:function(){var n=Array.prototype.slice.call(arguments).map(String);if(n.some(function(t){return 0===t.length}))throw SyntaxError();if(n.some(function(t){return/\s/.test(t)}))throw Error("InvalidCharacterError");try{var o=t[e],i=r(o);if(0===(n=n.filter(function(t){return-1===i.indexOf(t)})).length)return;0===o.length||/\s$/.test(o)||(o+=" "),o+=n.join(" "),t[e]=o}finally{var a=r(t[e]).length;this.length!==a&&(this.length=a)}}},remove:{value:function(){var o=Array.prototype.slice.call(arguments).map(String);if(o.some(function(t){return 0===t.length}))throw SyntaxError();if(o.some(function(t){return/\s/.test(t)}))throw Error("InvalidCharacterError");try{var i=t[e];o.forEach(function(t){i=n(t,i)}),t[e]=i}finally{var a=r(t[e]).length;this.length!==a&&(this.length=a)}}},toggle:{value:function(o){var i=arguments[1];try{if(0===(o=String(o)).length)throw SyntaxError();if(/\s/.test(o))throw Error("InvalidCharacterError");var a=r(t[e]).indexOf(o);if(-1!==a&&(!i||void 0===i))return t[e]=n(o,t[e]),!1;if(-1!==a&&i)return!0;var u=t[e];return 0===u.length||/\s$/.test(u)||(u+=" "),u+=o,t[e]=u,!0}finally{var c=r(t[e]).length;this.length!==c&&(this.length=c)}}},toString:{value:function(){return t[e]}}}),"length"in this)for(var o=0;o<100;++o)Object.defineProperty(this,String(o),{get:function(t){return function(){return this.item(t)}}(o)});else this.length=r(t[e]).length}function r(e,r){"Element"in t&&Element.prototype&&Object.defineProperty&&Object.defineProperty(Element.prototype,e,{get:r})}"classList"in document.createElement("span")?window.getClassList=function(t){return t.classList}:(window.getClassList=function(t){return new e(t,"className")},r("classList",function(){return new e(this,"className")})),"relList"in document.createElement("link")?window.getRelList=function(t){return t.relList}:(window.getRelList=function(t){return new e(t,"rel")},r("relList",function(){return new e(this,"rel")})),function(){if("DOMTokenList"in t){var e=document.createElement("span");"classList"in e&&(e.classList.toggle("x",!1),e.classList.contains("x")&&(t.DOMTokenList.prototype.toggle=function(t){var e=arguments[1];if(e===undefined){var r=!this.contains(t);return this[r?"add":"remove"](t),r}return e=!!e,this[e?"add":"remove"](t),e}))}}(),"previousElementSibling"in document.documentElement||r("previousElementSibling",function(){for(var t=this.previousSibling;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.previousSibling;return t}),"nextElementSibling"in document.documentElement||r("nextElementSibling",function(){for(var t=this.nextSibling;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.nextSibling;return t})}(),"Element"in t&&!Element.prototype.matches&&(Element.prototype.msMatchesSelector?Element.prototype.matches=Element.prototype.msMatchesSelector:Element.prototype.oMatchesSelector?Element.prototype.matches=Element.prototype.oMatchesSelector:Element.prototype.mozMatchesSelector?Element.prototype.matches=Element.prototype.mozMatchesSelector:Element.prototype.webkitMatchesSelector?Element.prototype.matches=Element.prototype.webkitMatchesSelector:document.querySelectorAll&&(Element.prototype.matches=function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),r=e.length;--r>=0&&e.item(r)!==this;);return r>-1})),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,r=(this.document||this.ownerDocument).querySelectorAll(t),n=this;do{for(e=r.length;--e>=0&&r.item(e)!==n;);}while(e<0&&(n=n.parentElement));return n});var n={prepend:function(){var t=[].slice.call(arguments);t=r(t),this.insertBefore(t,this.firstChild)},append:function(){var t=[].slice.call(arguments);t=r(t),this.appendChild(t)}};e(t.Document||t.HTMLDocument,n),e(t.DocumentFragment,n),e(t.Element,n);var o={before:function(){var t=[].slice.call(arguments),e=this.parentNode;if(e){for(var n=this.previousSibling;-1!==t.indexOf(n);)n=n.previousSibling;var o=r(t);e.insertBefore(o,n?n.nextSibling:e.firstChild)}},after:function(){var t=[].slice.call(arguments),e=this.parentNode;if(e){for(var n=this.nextSibling;-1!==t.indexOf(n);)n=n.nextSibling;var o=r(t);e.insertBefore(o,n)}},replaceWith:function(){var t=[].slice.call(arguments),e=this.parentNode;if(e){for(var n=this.nextSibling;-1!==t.indexOf(n);)n=n.nextSibling;var o=r(t);this.parentNode===e?e.replaceChild(o,this):e.insertBefore(o,n)}},remove:function(){this.parentNode&&this.parentNode.removeChild(this)}};e(t.DocumentType,o),e(t.Element,o),e(t.CharacterData,o)}}(self),function(t){"use strict";"window"in t&&"document"in t&&(t.XMLHttpRequest=t.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("This browser does not support XMLHttpRequest.")},[["UNSENT",0],["OPENED",1],["HEADERS_RECEIVED",2],["LOADING",3],["DONE",4]].forEach(function(e){e[0]in t.XMLHttpRequest||(t.XMLHttpRequest[e[0]]=e[1])}),function(){function e(t){if(this._data=[],t)for(var e=0;e<t.elements.length;++e){var r=t.elements[e];""!==r.name&&this.append(r.name,r.value)}}if(!("FormData"in t)){e.prototype={append:function(e,r){if("Blob"in t&&r instanceof t.Blob)throw TypeError("Blob not supported");e=String(e),this._data.push([e,r])},toString:function(){return this._data.map(function(t){return encodeURIComponent(t[0])+"="+encodeURIComponent(t[1])}).join("&")}},t.FormData=e;var r=t.XMLHttpRequest.prototype.send;t.XMLHttpRequest.prototype.send=function(t){return t instanceof e&&(this.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),arguments[0]=t.toString()),r.apply(this,arguments)}}}())}(self),function(t){"use strict";"window"in t&&"document"in t&&"TextRectangle"in t&&!("width"in t.TextRectangle.prototype)&&Object.defineProperties(t.TextRectangle.prototype,{width:{get:function(){return this.right-this.left}},height:{get:function(){return this.bottom-this.top}}})}(self),function(t){"use strict";function e(e){return!!e&&("Symbol"in t&&"iterator"in t.Symbol&&"function"==typeof e[Symbol.iterator]||!!Array.isArray(e))}function r(t){return"from"in Array?Array.from(t):Array.prototype.slice.call(t)}!function(){function n(t){var e="",r=!0;return t.forEach(function(t){var n=encodeURIComponent(t.name),o=encodeURIComponent(t.value);r||(e+="&"),e+=n+"="+o,r=!1}),e.replace(/%20/g,"+")}function o(t,e){var r=t.split("&");e&&-1===r[0].indexOf("=")&&(r[0]="="+r[0]);var n=[];r.forEach(function(t){if(0!==t.length){var e=t.indexOf("=");if(-1!==e)var r=t.substring(0,e),o=t.substring(e+1);else r=t,o="";r=r.replace(/\+/g," "),o=o.replace(/\+/g," "),n.push({name:r,value:o})}});var o=[];return n.forEach(function(t){o.push({name:decodeURIComponent(t.name),value:decodeURIComponent(t.value)})}),o}function i(t){if(s)return new f(t);var e=document.createElement("a");return e.href=t,e}function a(t){var i=this;this._list=[],t===undefined||null===t||(t instanceof a?this._list=o(String(t)):"object"==typeof t&&e(t)?r(t).forEach(function(t){if(!e(t))throw TypeError();var n=r(t);if(2!==n.length)throw TypeError();i._list.push({name:String(n[0]),value:String(n[1])})}):"object"==typeof t&&t?Object.keys(t).forEach(function(e){i._list.push({name:String(e),value:String(t[e])})}):("?"===(t=String(t)).substring(0,1)&&(t=t.substring(1)),this._list=o(t))),this._url_object=null,this._setList=function(t){u||(i._list=t)};var u=!1;this._update_steps=function(){u||(u=!0,i._url_object&&("about:"===i._url_object.protocol&&-1!==i._url_object.pathname.indexOf("?")&&(i._url_object.pathname=i._url_object.pathname.split("?")[0]),i._url_object.search=n(i._list),u=!1))}}function u(t,e){var r=0;this.next=function(){if(r>=t.length)return{done:!0,value:undefined};var n=t[r++];return{done:!1,value:"key"===e?n.name:"value"===e?n.value:[n.name,n.value]}}}function c(e,r){function n(){var t=c.href.replace(/#$|\?$|\?(?=#)/g,"");c.href!==t&&(c.href=t)}function u(){p._setList(c.search?o(c.search.substring(1)):[]),p._update_steps()}if(!(this instanceof t.URL))throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");r&&(e=function(){if(s)return new f(e,r).href;var t;try{var n;if("[object OperaMini]"===Object.prototype.toString.call(window.operamini)?((t=document.createElement("iframe")).style.display="none",document.documentElement.appendChild(t),n=t.contentWindow.document):document.implementation&&document.implementation.createHTMLDocument?n=document.implementation.createHTMLDocument(""):document.implementation&&document.implementation.createDocument?((n=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null)).documentElement.appendChild(n.createElement("head")),n.documentElement.appendChild(n.createElement("body"))):window.ActiveXObject&&((n=new window.ActiveXObject("htmlfile")).write("<head></head><body></body>"),n.close()),!n)throw Error("base not supported");var o=n.createElement("base");o.href=r,n.getElementsByTagName("head")[0].appendChild(o);var i=n.createElement("a");return i.href=e,i.href}finally{t&&t.parentNode.removeChild(t)}}());var c=i(e||""),l=function(){if(!("defineProperties"in Object))return!1;try{var t={};return Object.defineProperties(t,{prop:{get:function(){return!0}}}),t.prop}catch(e){return!1}}()?this:document.createElement("a"),p=new a(c.search?c.search.substring(1):null);return p._url_object=l,Object.defineProperties(l,{href:{get:function(){return c.href},set:function(t){c.href=t,n(),u()},enumerable:!0,configurable:!0},origin:{get:function(){return"origin"in c?c.origin:this.protocol+"//"+this.host},enumerable:!0,configurable:!0},protocol:{get:function(){return c.protocol},set:function(t){c.protocol=t},enumerable:!0,configurable:!0},username:{get:function(){return c.username},set:function(t){c.username=t},enumerable:!0,configurable:!0},password:{get:function(){return c.password},set:function(t){c.password=t},enumerable:!0,configurable:!0},host:{get:function(){var t={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/}[c.protocol];return t?c.host.replace(t,""):c.host},set:function(t){c.host=t},enumerable:!0,configurable:!0},hostname:{get:function(){return c.hostname},set:function(t){c.hostname=t},enumerable:!0,configurable:!0},port:{get:function(){return c.port},set:function(t){c.port=t},enumerable:!0,configurable:!0},pathname:{get:function(){return"/"!==c.pathname.charAt(0)?"/"+c.pathname:c.pathname},set:function(t){c.pathname=t},enumerable:!0,configurable:!0},search:{get:function(){return c.search},set:function(t){c.search!==t&&(c.search=t,n(),u())},enumerable:!0,configurable:!0},searchParams:{get:function(){return p},enumerable:!0,configurable:!0},hash:{get:function(){return c.hash},set:function(t){c.hash=t,n()},enumerable:!0,configurable:!0},toString:{value:function(){return c.toString()},enumerable:!1,configurable:!0},valueOf:{value:function(){return c.valueOf()},enumerable:!1,configurable:!0}}),l}var s,f=t.URL;try{if(f){if("searchParams"in(s=new t.URL("http://example.com")))return;"href"in s||(s=undefined)}}catch(p){}if(Object.defineProperties(a.prototype,{append:{value:function(t,e){this._list.push({name:t,value:e}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(t){for(var e=0;e<this._list.length;)this._list[e].name===t?this._list.splice(e,1):++e;this._update_steps()},writable:!0,enumerable:!0,configurable:!0},get:{value:function(t){for(var e=0;e<this._list.length;++e)if(this._list[e].name===t)return this._list[e].value;return null},writable:!0,enumerable:!0,configurable:!0},getAll:{value:function(t){for(var e=[],r=0;r<this._list.length;++r)this._list[r].name===t&&e.push(this._list[r].value);return e},writable:!0,enumerable:!0,configurable:!0},has:{value:function(t){for(var e=0;e<this._list.length;++e)if(this._list[e].name===t)return!0;return!1},writable:!0,enumerable:!0,configurable:!0},set:{value:function(t,e){for(var r=!1,n=0;n<this._list.length;)this._list[n].name===t?r?this._list.splice(n,1):(this._list[n].value=e,r=!0,++n):++n;r||this._list.push({name:t,value:e}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},entries:{value:function(){return new u(this._list,"key+value")},writable:!0,enumerable:!0,configurable:!0},keys:{value:function(){return new u(this._list,"key")},writable:!0,enumerable:!0,configurable:!0},values:{value:function(){return new u(this._list,"value")},writable:!0,enumerable:!0,configurable:!0},forEach:{value:function(t){var e=arguments.length>1?arguments[1]:undefined;this._list.forEach(function(r,n){t.call(e,r.value,r.name)})},writable:!0,enumerable:!0,configurable:!0},toString:{value:function(){return n(this._list)},writable:!0,enumerable:!1,configurable:!0}}),"Symbol"in t&&"iterator"in t.Symbol&&(Object.defineProperty(a.prototype,t.Symbol.iterator,{value:a.prototype.entries,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,t.Symbol.iterator,{value:function(){return this},writable:!0,enumerable:!0,configurable:!0})),f)for(var l in f)f.hasOwnProperty(l)&&"function"==typeof f[l]&&(c[l]=f[l]);t.URL=c,t.URLSearchParams=a}(),function(){if("1"!==new t.URLSearchParams([["a",1]]).get("a")||"1"!==new t.URLSearchParams({a:1}).get("a")){var n=t.URLSearchParams;t.URLSearchParams=function(t){if(t&&"object"==typeof t&&e(t)){var o=new n;return r(t).forEach(function(t){if(!e(t))throw TypeError();var n=r(t);if(2!==n.length)throw TypeError();o.append(n[0],n[1])}),o}return t&&"object"==typeof t?(o=new n,Object.keys(t).forEach(function(e){o.set(e,t[e])}),o):new n(t)}}}()}(self),function(t){"use strict";function e(t){if((t=String(t)).match(/[^\x00-\xFF]/))throw TypeError("Not a valid ByteString");return t}function r(t){return(t=String(t)).replace(/([\u0000-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF])/g,function(t){return/^[\uD800-\uDFFF]$/.test(t)?"�":t})}function n(t){return 65535&t}function o(t){return String(t).replace(/[a-z]/g,function(t){return t.toUpperCase()})}function i(t){return"CONNECT"===(t=o(t))||"TRACE"===t||"TRACK"===t}function a(t){var e=o(t);return"DELETE"===e||"GET"===e||"HEAD"===e||"OPTIONS"===e||"POST"===e||"PUT"===e?e:t}function u(t){return/^[!#$%&'*+\-.09A-Z^_`a-z|~]+$/.test(t)}function c(t){return{"accept-charset":!0,"accept-encoding":!0,"access-control-request-headers":!0,"access-control-request-method":!0,connection:!0,"content-length":!0,cookie:!0,cookie2:!0,date:!0,dnt:!0,expect:!0,host:!0,"keep-alive":!0,origin:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,via:!0}[t=String(t).toLowerCase()]||"proxy-"===t.substring(0,6)||"sec-"===t.substring(0,4)}function s(t){return{"set-cookie":!0,"set-cookie2":!0}[t=String(t).toLowerCase()]}function f(t,e){return"accept"===(t=String(t).toLowerCase())||"accept-language"===t||"content-language"===t||"content-type"===t&&-1!==["application/x-www-form-encoded","multipart/form-data","text/plain"].indexOf(e)}function l(t){this._guard="none",this._headerList=[],t&&p(this,t)}function p(t,e){e instanceof l?e._headerList.forEach(function(e){t.append(e[0],e[1])}):Array.isArray(e)?e.forEach(function(e){if(!Array.isArray(e)||2!==e.length)throw TypeError();t.append(e[0],e[1])}):(e=Object(e),Object.keys(e).forEach(function(r){t.append(r,e[r])}))}function h(t){this._headers=t,this._index=0}function y(t){this._stream=t,this.bodyUsed=!1}function v(t,n){if(arguments.length<1)throw TypeError("Not enough arguments");if(y.call(this,null),this.method="GET",this.url="",this.headers=new l,this.headers._guard="request",this.referrer=null,this.mode=null,this.credentials="omit",t instanceof v){if(t.bodyUsed)throw TypeError();t.bodyUsed=!0,this.method=t.method,this.url=t.url,this.headers=new l(t.headers),this.headers._guard=t.headers._guard,this.credentials=t.credentials,this._stream=t._stream}else t=r(t),this.url=String(new URL(t,self.location));if("method"in(n=Object(n))){var o=e(n.method);if(i(o))throw TypeError();this.method=a(o)}"headers"in n&&(this.headers=new l,p(this.headers,n.headers)),"body"in n&&(this._stream=n.body),"credentials"in n&&-1!==["omit","same-origin","include"].indexOf(n.credentials)&&(this.credentials=n.credentials)}function d(t,e){if(arguments.length<1&&(t=""),this.headers=new l,this.headers._guard="response",t instanceof XMLHttpRequest&&"_url"in t){var o=t;return this.type="basic",this.url=r(o._url),this.status=o.status,this.ok=200<=this.status&&this.status<=299,this.statusText=o.statusText,o.getAllResponseHeaders().split(/\r?\n/).filter(function(t){return t.length}).forEach(function(t){var e=t.indexOf(":");this.headers.append(t.substring(0,e),t.substring(e+2))},this),void y.call(this,o.responseText)}y.call(this,t),e=Object(e)||{},this.url="";var i="status"in e?n(e.status):200;if(i<200||i>599)throw RangeError();this.status=i,this.ok=200<=this.status&&this.status<=299;var a="statusText"in e?String(e.statusText):"OK";if(/[^\x00-\xFF]/.test(a))throw TypeError();this.statusText=a,"headers"in e&&p(this.headers,e),this.type="basic"}l.prototype={append:function(t,r){if(t=e(t),!u(t))throw TypeError();if("immutable"===this._guard)throw TypeError();"request"===this._guard&&c(t)||("request-no-CORS"!==this._guard||f(t,r))&&("response"===this._guard&&s(t)||(t=t.toLowerCase(),this._headerList.push([t,r])))},"delete":function(t){if(t=e(t),!u(t))throw TypeError();if("immutable"===this._guard)throw TypeError();if(("request"!==this._guard||!c(t))&&("request-no-CORS"!==this._guard||f(t,"invalid"))&&("response"!==this._guard||!s(t))){t=t.toLowerCase();for(var r=0;r<this._headerList.length;)this._headerList[r][0]===t?this._headerList.splice(r,1):++r}},get:function(t){if(t=e(t),!u(t))throw TypeError();t=t.toLowerCase();for(var r=0;r<this._headerList.length;++r)if(this._headerList[r][0]===t)return this._headerList[r][1];return null},getAll:function(t){if(t=e(t),!u(t))throw TypeError();t=t.toLowerCase();for(var r=[],n=0;n<this._headerList.length;++n)this._headerList[n][0]===t&&r.push(this._headerList[n][1]);return r},has:function(t){if(t=e(t),!u(t))throw TypeError();t=t.toLowerCase();for(var r=0;r<this._headerList.length;++r)if(this._headerList[r][0]===t)return!0;return!1},set:function(t,r){if(t=e(t),!u(t))throw TypeError();if("immutable"===this._guard)throw TypeError();if(("request"!==this._guard||!c(t))&&("request-no-CORS"!==this._guard||f(t,r))&&("response"!==this._guard||!s(t))){t=t.toLowerCase();for(var n=0;n<this._headerList.length;++n)if(this._headerList[n][0]===t){for(this._headerList[n++][1]=r;n<this._headerList.length;)this._headerList[n][0]===t?this._headerList.splice(n,1):++n;return}this._headerList.push([t,r])}}},l.prototype[Symbol.iterator]=function(){return new h(this)},(h.prototype={}).next=function(){return this._index>=this._headers._headerList.length?{value:undefined,done:!0}:{value:this._headers._headerList[this._index++],done:!1}},h.prototype[Symbol.iterator]=function(){return this},y.prototype={arrayBuffer:function(){if(this.bodyUsed)return Promise.reject(TypeError());if(this.bodyUsed=!0,this._stream instanceof ArrayBuffer)return Promise.resolve(this._stream);var t=this._stream;return new Promise(function(e,r){var n=unescape(encodeURIComponent(t)).split("").map(function(t){return t.charCodeAt(0)});e(new Uint8Array(n).buffer)})},blob:function(){return this.bodyUsed?Promise.reject(TypeError()):(this.bodyUsed=!0,this._stream instanceof Blob?Promise.resolve(this._stream):Promise.resolve(new Blob([this._stream])))},formData:function(){return this.bodyUsed?Promise.reject(TypeError()):(this.bodyUsed=!0,this._stream instanceof FormData?Promise.resolve(this._stream):Promise.reject(Error("Not yet implemented")))},json:function(){if(this.bodyUsed)return Promise.reject(TypeError());this.bodyUsed=!0;var t=this;return new Promise(function(e,r){e(JSON.parse(t._stream))})},text:function(){return this.bodyUsed?Promise.reject(TypeError()):(this.bodyUsed=!0,Promise.resolve(String(this._stream)))}},v.prototype=y.prototype,d.prototype=y.prototype,d.redirect=function(){throw Error("Not supported")},"fetch"in t||(t.Headers=l,t.Request=v,t.Response=d,t.fetch=function(t,e){return new Promise(function(r,n){var o=new v(t,e),i=new XMLHttpRequest;i._url=o.url;try{i.open(o.method,o.url,!0)}catch(c){throw TypeError(c.message)}for(var a=o.headers[Symbol.iterator](),u=a.next();!u.done;u=a.next())i.setRequestHeader(u.value[0],u.value[1]);"include"===o.credentials&&(i.withCredentials=!0),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(0===i.status?n(new TypeError("Network error")):r(new d(i)))},i.send(o._stream)})})}(self);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "support", function() { return support; });
// Load a custom build of Mozernizr. This build is generated by the Gulp task "modernizr"
__webpack_require__(3);
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
    __webpack_require__(4);
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * modernizr v3.7.1
 * Build https://modernizr.com/download?-details-inputtypes-picture-srcset-addtest-printshiv-setclasses-testprop-dontmin
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
    _version: '3.7.1',

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
            // cast to a Boolean, if not one already
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
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
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // for strict XHTML browsers the hardly used samp element is used
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
  var inputtypes = 'search tel url email datetime date month week time datetime-local number range color'.split(' ');
  var inputs = {};

  Modernizr.inputtypes = (function(props) {
    var len = props.length;
    var smile = '1)';
    var inputElemType;
    var defaultView;
    var bool;

    for (var i = 0; i < len; i++) {

      inputElem.setAttribute('type', inputElemType = props[i]);
      bool = inputElem.type !== 'text' && 'style' in inputElem;

      // We first check to see if the type we give it sticks..
      // If the type does, we feed it a textual value, which shouldn't be valid.
      // If the value doesn't stick, we know there's input sanitization which infers a custom UI
      if (bool) {

        inputElem.value         = smile;
        inputElem.style.cssText = 'position:absolute;visibility:hidden;';

        if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {

          docElement.appendChild(inputElem);
          defaultView = document.defaultView;

          // Safari 2-4 allows the smiley as a value, despite making a slider
          bool =  defaultView.getComputedStyle &&
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

      inputs[ props[i] ] = !!bool;
    }
    return inputs;
  })(inputtypes);


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
/* 4 */
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
__webpack_require__(5);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(6);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(13)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Imports
var urlEscape = __webpack_require__(8);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(9));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(12));

// Module
exports.push([module.i, ".jscolor-arrow {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n}\n\n.jscolor-cross {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n}\n\n.jscolor-hs {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") 0 0 no-repeat;\n}\n\n.jscolor-hv {\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ") 0 0 no-repeat;\n}\n", ""]);



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5034704a76cd55c1cbcbc58ea6bf523f.gif";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba9a274b9323753cd95bc3b1eb2f4e5f.gif";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fefa1a03d92ebad25c88dca94a0b63db.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "990d71cada17da100653636cf8490884.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
Details Element Polyfill 2.3.1
Copyright © 2019 Javan Makhmali
 */
(function() {
  "use strict";
  var element = document.createElement("details");
  element.innerHTML = "<summary>a</summary>b";
  element.setAttribute("style", "position: absolute; left: -9999px");
  var support = {
    open: "open" in element && elementExpands(),
    toggle: "ontoggle" in element
  };
  function elementExpands() {
    (document.body || document.documentElement).appendChild(element);
    var closedHeight = element.offsetHeight;
    element.open = true;
    var openedHeight = element.offsetHeight;
    element.parentNode.removeChild(element);
    return closedHeight != openedHeight;
  }
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Polyfill for Object.assign
__webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22).polyfill();


/***/ }),
/* 22 */
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


/***/ })
/******/ ]);