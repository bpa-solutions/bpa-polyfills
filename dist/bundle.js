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

/*
 js-polyfills library
*/
__webpack_require__(2);
/*
 load polyfills with Modernizr feature detection
*/
__webpack_require__(3);
/*
 load polyfills with bundled feature detection
*/
//#region Libraries
__webpack_require__(17);
//#endregion Libraries
//#region Polyfills
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(23);
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
ready(function () {
    __webpack_require__(25); // CSS Grid Polyfills
});
//#endregion Ready callback


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function __cons(t,a){return eval("new t("+a.map(function(t,e){return"a["+e+"]"}).join(",")+")")}Object.getPrototypeOf||(Object.getPrototypeOf=function(t){if(t!==Object(t))throw TypeError("Object.getPrototypeOf called on non-object");return t.__proto__||t.constructor.prototype||Object.prototype}),"function"!=typeof Object.getOwnPropertyNames&&(Object.getOwnPropertyNames=function(t){if(t!==Object(t))throw TypeError("Object.getOwnPropertyNames called on non-object");var e,r=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);return r}),"function"!=typeof Object.create&&(Object.create=function(t,e){function r(){}if("object"!=typeof t)throw TypeError();r.prototype=t;var n=new r;if(t&&(n.constructor=r),e!==undefined){if(e!==Object(e))throw TypeError();Object.defineProperties(n,e)}return n}),function(){if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()){var t=Object.defineProperty;Object.defineProperty=function(e,r,n){if(t)try{return t(e,r,n)}catch(o){}if(e!==Object(e))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in n&&Object.prototype.__defineGetter__.call(e,r,n.get),Object.prototype.__defineSetter__&&"set"in n&&Object.prototype.__defineSetter__.call(e,r,n.set),"value"in n&&(e[r]=n.value),e}}}(),"function"!=typeof Object.defineProperties&&(Object.defineProperties=function(t,e){if(t!==Object(t))throw TypeError("Object.defineProperties called on non-object");var r;for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&Object.defineProperty(t,r,e[r]);return t}),Object.keys||(Object.keys=function(t){if(t!==Object(t))throw TypeError("Object.keys called on non-object");var e,r=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);return r}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw TypeError("Bind must be called on a function");var e=Array.prototype.slice.call(arguments,1),r=this,n=function(){},o=function(){return r.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),o.prototype=new n,o}),Array.isArray=Array.isArray||function(t){return Boolean(t&&"[object Array]"===Object.prototype.toString.call(Object(t)))},Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if(0===r)return-1;var n=0;if(arguments.length>0&&(n=Number(arguments[1]),isNaN(n)?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=r)return-1;for(var o=n>=0?n:Math.max(r-Math.abs(n),0);o<r;o++)if(o in e&&e[o]===t)return o;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if(0===r)return-1;var n=r;arguments.length>1&&((n=Number(arguments[1]))!==n?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n))));for(var o=n>=0?Math.min(n,r-1):r-Math.abs(n);o>=0;o--)if(o in e&&e[o]===t)return o;return-1}),Array.prototype.every||(Array.prototype.every=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,o=arguments[1];for(n=0;n<r;n++)if(n in e&&!t.call(o,e[n],n,e))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,o=arguments[1];for(n=0;n<r;n++)if(n in e&&t.call(o,e[n],n,e))return!0;return!1}),Array.prototype.forEach||(Array.prototype.forEach=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,o=arguments[1];for(n=0;n<r;n++)n in e&&t.call(o,e[n],n,e)}),Array.prototype.map||(Array.prototype.map=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n=[];n.length=r;var o,i=arguments[1];for(o=0;o<r;o++)o in e&&(n[o]=t.call(i,e[o],o,e));return n}),Array.prototype.filter||(Array.prototype.filter=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,o=[],i=arguments[1];for(n=0;n<r;n++)if(n in e){var a=e[n];t.call(i,a,n,e)&&o.push(a)}return o}),Array.prototype.reduce||(Array.prototype.reduce=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();if(0===r&&1===arguments.length)throw TypeError();var n,o=0;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in e){n=e[o++];break}if(++o>=r)throw TypeError()}for(;o<r;)o in e&&(n=t.call(undefined,n,e[o],o,e)),o++;return n}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();if(0===r&&1===arguments.length)throw TypeError();var n,o=r-1;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in this){n=this[o--];break}if(--o<0)throw TypeError()}for(;o>=0;)o in e&&(n=t.call(undefined,n,e[o],o,e)),o--;return n}),String.prototype.trim||(String.prototype.trim=function(){return String(this).replace(/^\s+/,"").replace(/\s+$/,"")}),Date.now||(Date.now=function(){return Number(new Date)}),Date.prototype.toISOString||(Date.prototype.toISOString=function(){function t(t){return("00"+t).slice(-2)}return this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1)+"-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":"+t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+"."+function(t){return("000"+t).slice(-3)}(this.getUTCMilliseconds())+"Z"}),function(t){"use strict";function e(e){return e===t?C:e}function r(t,e){for(var r=Object.getOwnPropertyDescriptor(t,e),n=Object.getPrototypeOf(t);!r&&n;)r=Object.getOwnPropertyDescriptor(n,e),n=Object.getPrototypeOf(n);return r}function n(t,e,r,n){e in t&&!n&&!I||("function"==typeof r?Object.defineProperty(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0}):Object.defineProperty(t,e,{value:r,configurable:!1,enumerable:!1,writable:!1}))}function o(t,e,r){Object.defineProperty(t,e,{value:r,configurable:!1,enumerable:!1,writable:!0})}function i(){function t(t){var e=t.valueOf,n=R(null);return Object.defineProperty(t,"valueOf",{value:function(r){return function(o){return o===r?n:e.apply(t,arguments)}}(r),configurable:!0,writeable:!0,enumerable:!1}),n}function e(t){var e="function"==typeof t.valueOf&&t.valueOf(r);return e===t?null:e}var r=R(null);return{clear:function(){r=R(null)},remove:function(t){var r=e(t);return!(!r||!b(r,"value"))&&(delete r.value,!0)},get:function(t,r){var n=e(t);return n&&b(n,"value")?n.value:r},has:function(t){var r=e(t);return Boolean(r&&b(r,"value"))},set:function(r,n){(e(r)||t(r)).value=n}}}function a(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":e instanceof t.Symbol?"symbol":"object"}}function u(t){return t=Number(t),L(t)?0:0===t||t===Infinity||t===-Infinity?t:(t<0?-1:1)*V(H(t))}function c(t){return t>>>0}function s(t){if(null===t||t===C)throw TypeError();return Object(t)}function f(t){var e=u(t);return e<=0?0:e===Infinity?9007199254740991:K(e,9007199254740991)}function l(t){return"function"==typeof t}function p(t){return!!/Constructor/.test(Object.prototype.toString.call(t))||(!!/Function/.test(Object.prototype.toString.call(t))||"function"==typeof t)}function h(t,e){if(typeof t!=typeof e)return!1;switch(typeof t){case"undefined":return!0;case"number":return t!==t&&e!==e||(0===t&&0===e?1/t==1/e:t===e);case"boolean":case"string":case"object":default:return t===e}}function y(t,e){if(typeof t!=typeof e)return!1;switch(typeof t){case"undefined":return!0;case"number":return t!==t&&e!==e||t===e;case"boolean":case"string":case"object":default:return t===e}}function v(t,e){return s(t)[e]}function d(t,e){var r=v(t,e);if(r===C||null===r)return C;if(!l(r))throw TypeError();return r}function m(t,e){for(;t;){if(Object.prototype.hasOwnProperty.call(t,e))return!0;if("object"!==a(t))return!1;var r=Object.getPrototypeOf(t);if(r===t)return!1;t=r}return!1}function b(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function g(t,e){arguments.length<2&&(e=d(t,it));var r=e.call(t);if("object"!==a(r))throw TypeError();return r}function E(t,e){if(arguments.length<2)var r=t.next();else r=t.next(e);if("object"!==a(r))throw TypeError();return r}function w(t){return t.value}function S(t,e){var r=E(t,e),n=r.done;return!0!==Boolean(n)&&r}function O(t,e){var r={};return r.value=t,r.done=e,r}function T(t,e,r){k(function(){e.apply(C,r)})}function j(t){}function _(t){var e=[];if(Object(t)!==t)return e;for(var r=new Set;null!==t;)Object.getOwnPropertyNames(t).forEach(function(n){if(!r.has(n)){var o=Object.getOwnPropertyDescriptor(t,n);o&&(r.add(n),o.enumerable&&e.push(n))}}),t=Object.getPrototypeOf(t);return e[it]()}function P(t){return Object.getOwnPropertyNames(t)}function R(t,e){return Object.create(t,e)}function A(){}function D(t,e){var r=String(t),n=new A;return o(n,"[[IteratedString]]",r),o(n,"[[StringIteratorNextIndex]]",0),o(n,"[[StringIterationKind]]",e),n}function N(){}function M(t,e){var r=s(t),n=new N;return o(n,"[[IteratedObject]]",r),o(n,"[[ArrayIteratorNextIndex]]",0),o(n,"[[ArrayIterationKind]]",e),n}var x,I=!1,C=void 0,k=function(t,e){return t?function(e){t.resolve().then(function(){e()})}:e?function(t){e(t)}:function(t){setTimeout(t,0)}}(t.Promise,t.setImmediate),L=t.isNaN,U=t.parseInt,F=t.parseFloat,W=Math.E,q=Math.LOG10E,B=Math.LOG2E,H=Math.abs,X=Math.ceil,G=Math.exp,V=Math.floor,z=Math.log,$=Math.max,K=Math.min,J=Math.pow,Y=Math.random,Z=Math.sqrt,Q=String.prototype.match,tt=String.prototype.replace,et=String.prototype.search,rt=String.prototype.split,nt=Object.create(null);!function(){function r(t){return Array(t+1).join("x").replace(/x/g,function(){return Y()<.5?"‌":"‍"})}function i(t){if(!(this instanceof i))return new i(t,a);if(this instanceof i&&arguments[1]!==a)throw TypeError();var e=t===C?C:String(t);return o(this,"[[SymbolData]]",r(128)),o(this,"[[Description]]",e),u[this]=this,this}var a=Object.create(null),u={};x=function(t){return u[t]};var c=[];"Symbol"in t&&!I||(t.Symbol=i),n(i,"for",function(t){for(var e=String(t),r=0;r<c.length;++r){var n=c[r];if(h(n["[[key]]"],e))return n["[[symbol]]"]}var o=i(t);return c.push({"[[key]]":e,"[[symbol]]":o}),o}),n(t.Symbol,"iterator",t.Symbol("Symbol.iterator")),n(i,"keyFor",function(t){if(!(t instanceof i))throw TypeError();for(var e=0;e<c.length;++e){var r=c[e];if(h(r["[[symbol]]"],t))return r["[[key]]"]}return C}),n(t.Symbol,"match",t.Symbol("Symbol.match")),n(t.Symbol,"replace",t.Symbol("Symbol.replace")),n(t.Symbol,"search",t.Symbol("Symbol.search")),n(t.Symbol,"split",t.Symbol("Symbol.split")),n(t.Symbol,"toStringTag",t.Symbol("Symbol.toStringTag")),Object.defineProperty(i.prototype,"toString",{value:function(){var t=e(this),r=t["[[Description]]"];return"Symbol("+(r===C?"":r)+t["[[SymbolData]]"]+")"},configurable:!0,writeable:!0,enumerable:!1}),Object.defineProperty(i.prototype,"valueOf",{value:function(){throw TypeError()},configurable:!0,writeable:!0,enumerable:!1})}();var ot={},it=t.Symbol.iterator,at=t.Symbol.match,ut=t.Symbol.replace,ct=t.Symbol.search,st=t.Symbol.split,ft=t.Symbol.toStringTag;n(Object,"assign",function(t,e){var r=s(t);if(arguments.length<2)return r;for(var n=1;n<arguments.length;){var o=arguments[n++];if(o===C||null===o)var i=[];else{var a=s(o);i=P(a)}for(var u=0;u<i.length;++u){var c=i[u],f=Object.getOwnPropertyDescriptor(a,c);if(f!==C&&f.enumerable){var l=a[c];r[c]=l}}}return r}),function(){function e(t){return!x(t)}var r="symbol"==typeof t.Symbol(),o=Object.getOwnPropertyNames,i=Object.keys,a="object"==typeof window?o(window):[];n(Object,"getOwnPropertyNames",function(t){if("[object Window]"===Object.prototype.toString.call(t))try{return o(t).filter(e)}catch(r){return a.slice()}return o(t).filter(e)},!r),n(Object,"getOwnPropertySymbols",function(t){return o(t).filter(x).map(x)},!r),n(Object,"keys",function(t){return i(t).filter(e)},!r)}(),n(Object,"is",function(t,e){return h(t,e)}),n(Object,"setPrototypeOf",function(t,e){if("object"!==a(t))throw TypeError();if("object"!==a(e)&&"null"!==a(e))throw TypeError();return t.__proto__=e,t});var lt=Object.prototype.toString;n(Object.prototype,"toString",function(){var t=e(this);return t===Object(t)&&ft in t?"[object "+t[ft]+"]":lt.apply(t,arguments)}),n(t.Symbol.prototype,t.Symbol.toStringTag,"Symbol"),n(Number,"EPSILON",function(){var t,e;for(t=1;1+t!==1;t/=2)e=t;return e}()),n(Number,"isFinite",function(t){return"number"===a(t)&&(t===t&&t!==+Infinity&&t!==-Infinity)}),n(Number,"isInteger",function(t){return"number"===a(t)&&(t===t&&t!==+Infinity&&t!==-Infinity&&u(t)===t)}),n(Number,"isNaN",function(t){return"number"===a(t)&&t!==t}),n(Number,"isSafeInteger",function(t){if("number"!==a(t))return!1;if(t!==t||t===+Infinity||t===-Infinity)return!1;var e=u(t);return e===t&&H(e)<=9007199254740991}),n(Number,"MAX_SAFE_INTEGER",9007199254740991),n(Number,"MIN_SAFE_INTEGER",-9007199254740991),n(Number,"parseFloat",F),n(Number,"parseInt",U),n(Math,ft,"Math"),n(Math,"acosh",function(t){return t=Number(t),z(t+Z(t*t-1))}),n(Math,"asinh",function(t){if(t=Number(t),h(t,-0))return t;var e=Z(t*t+1);return z(e===-t?0:t+e)}),n(Math,"atanh",function(t){return 0===(t=Number(t))?t:z((1+t)/(1-t))/2}),n(Math,"cbrt",function(t){if(t=Number(t),L(t/t))return t;var e=J(H(t),1/3),r=t/e/e;return e+e*(r-e)/(2*e+r)}),n(Math,"clz32",function(t){function e(t){return 240&t?128&t?0:64&t?1:32&t?2:3:8&t?4:4&t?5:2&t?6:1&t?7:8}return 4278190080&(t=c(t))?e(t>>24):16711680&t?e(t>>16)+8:65280&t?e(t>>8)+16:e(t)+24}),n(Math,"cosh",function(t){return t=Number(t),(J(W,t)+J(W,-t))/2}),n(Math,"expm1",function(t){return t=Number(t),h(t,-0)?-0:H(t)<1e-5?t+.5*t*t:G(t)-1}),n(Math,"fround",function(t){return L(t)?NaN:1/t==+Infinity||1/t==-Infinity||t===+Infinity||t===-Infinity?t:new Float32Array([t])[0]}),n(Math,"hypot",function(){for(var t=[],e=0,r=!1,n=0;n<arguments.length;++n){var o=H(Number(arguments[n]));if(o===Infinity)return o;o!==o&&(r=!0),o>e&&(e=o),t[n]=o}if(r)return NaN;if(0===e)return 0;var i=0;for(n=0;n<t.length;++n){var a=t[n]/e;i+=a*a}return e*Z(i)}),n(Math,"imul",function(t,e){var r=c(t),n=c(e),o=65535&r,i=65535&n;return o*i+((r>>>16&65535)*i+o*(n>>>16&65535)<<16>>>0)|0},"imul"in Math&&0===Math.imul(1,2147483648)),n(Math,"log1p",function(t){return(t=Number(t))<-1?NaN:h(t,-0)?-0:H(t)>1e-4?z(1+t):(-.5*t+1)*t}),n(Math,"log10",function(t){return t=Number(t),z(t)*q}),n(Math,"log2",function(t){return t=Number(t),z(t)*B}),n(Math,"sign",function(t){return(t=Number(t))<0?-1:t>0?1:t}),n(Math,"sinh",function(t){return t=Number(t),h(t,-0)?t:(J(W,t)-J(W,-t))/2}),n(Math,"tanh",function(t){t=Number(t);var e=J(W,2*t)-1,r=J(W,2*t)+1;return h(t,-0)?t:e===r?1:e/r}),n(Math,"trunc",function(t){return t=Number(t),L(t)?NaN:t<0?X(t):V(t)});var pt=function(){var t={},e=Symbol();return t[Symbol.match]=function(){return e},"".match(t)===e}();n(String,"fromCodePoint",function(){for(var t=arguments,e=t.length,r=[],n=0;n<e;){var o=t[n],i=Number(o);if(!h(i,u(i))||i<0||i>1114111)throw RangeError("Invalid code point "+i);i<65536?r.push(String.fromCharCode(i)):(i-=65536,r.push(String.fromCharCode(55296+(i>>10))),r.push(String.fromCharCode(i%1024+56320))),n+=1}return r.join("")}),n(String,"raw",function(t){var e=[].slice.call(arguments,1),r=Object(t).raw,n=Object(r),o=f(n.length);if(o<=0)return"";for(var i=[],a=0;;){var u=n[a],c=String(u);if(i.push(c),a+1===o)return i.join("");u=e[a];var s=String(u);i.push(s),a+=1}}),n(String.prototype,"codePointAt",function(t){var r=e(this),n=String(r),o=u(t),i=n.length;if(o<0||o>=i)return C;var a=n.charCodeAt(o);if(a<55296||a>56319||o+1===i)return a;var c=n.charCodeAt(o+1);return c<56320||c>57343?a:1024*(a-55296)+(c-56320)+65536}),n(String.prototype,"endsWith",function(t){var r=arguments[1],n=e(this),o=String(n),i=String(t),a=o.length,c=r===C?a:u(r),s=K($(c,0),a),f=i.length,l=s-f;return!(l<0)&&o.substring(l,l+f)===i}),n(String.prototype,"includes",function(t){var r=arguments[1],n=e(this),o=String(n),i=String(t),a=u(r),c=o.length,s=K($(a,0),c);return-1!==o.indexOf(i,s)}),n(String.prototype,"match",function(t){var r=e(this),n=String(r);if(m(t,at))var o=t;else o=new RegExp(t);return o[at](n)},!pt),n(String.prototype,"repeat",function(t){var r=e(this),n=String(r),o=u(t);if(o<0)throw RangeError();if(o===Infinity)throw RangeError();return new Array(o+1).join(n)}),n(String.prototype,"replace",function(t,r){var n=e(this);return m(t,ut)?t[ut](n,r):tt.call(n,t,r)},!pt),n(String.prototype,"search",function(t){var r=e(this),n=String(r);if(m(t,ct))var o=t;else o=new RegExp(t);return o[ct](n)},!pt),n(String.prototype,"split",function(t,r){var n=e(this);return m(t,st)?t[st](n,r):rt.call(n,t,r)},!pt),n(String.prototype,"startsWith",function(t){var r=arguments[1],n=e(this),o=String(n),i=String(t),a=u(r),c=o.length,s=K($(a,0),c),f=i.length;return!(f+s>c)&&o.substring(s,s+f)===i}),n(String.prototype,it,function(){return D(this,"value")});var ht=Object.create(ot);A.prototype=ht,n(ht,"next",function(){var t=s(this),e=String(t["[[IteratedString]]"]),r=t["[[StringIteratorNextIndex]]"];if(r>=e.length)return o(t,"[[StringIteratorNextIndex]]",Infinity),O(C,!0);var n=e.codePointAt(r);return o(t,"[[StringIteratorNextIndex]]",r+(n>65535?2:1)),O(String.fromCodePoint(n),!1)}),n(ht,ft,"String Iterator"),"flags"in RegExp.prototype||Object.defineProperty(RegExp.prototype,"flags",{get:function(){var t=String(this);return t.substring(t.lastIndexOf("/")+1)}}),n(RegExp.prototype,at,function(t){var r=e(this);return Q.call(t,r)}),n(RegExp.prototype,ut,function(t,r){var n=e(this);return tt.call(t,n,r)}),n(RegExp.prototype,ct,function(t){var r=e(this);return et.call(t,r)}),n(RegExp.prototype,st,function(t,r){var n=e(this);return rt.call(t,n,r)}),n(Array,"from",function(t){var r=arguments[1],n=arguments[2],o=e(this);if(r===C)var i=!1;else{if(!l(r))throw TypeError();var a=n;i=!0}var u=d(t,it);if(u!==C){if(p(o))var c=new o;else c=new Array(0);for(var h=g(t,u),y=0;;){var v=S(h);if(!1===v)return c.length=y,c;var m=w(v);if(i)var b=r.call(a,m);else b=m;c[y]=b,y+=1}}var E=s(t),O=f(E.length);for(c=p(o)?new o(O):new Array(O),y=0;y<O;){var T=E[y];b=i?r.call(a,T,y):T,c[y]=b,y+=1}return c.length=O,c}),n(Array,"of",function(){var t,r=arguments,n=c(r.length),o=e(this);t=p(o)?s(t=new o(n)):new Array(n);for(var i=0;i<n;)t[i]=r[i],i+=1;return t.length=n,t}),n(Array.prototype,"copyWithin",function(t,e){var r=arguments[2],n=s(this),o=f(n.length);o=$(o,0);var i,a=u(t);i=a<0?$(o+a,0):K(a,o);var c,l=u(e);c=l<0?$(o+l,0):K(l,o);var p,h;h=(p=r===C?o:u(r))<0?$(o+p,0):K(p,o);var y,v=K(h-c,o-i);for(c<i&&i<c+v?(y=-1,c=c+v-1,i=i+v-1):y=1;v>0;){var d=String(c),b=String(i);if(m(n,d)){var g=n[d];n[b]=g}else delete n[b];c+=y,i+=y,v-=1}return n});var yt="entries"in Array.prototype&&"next"in[].entries();n(Array.prototype,"entries",function(){return M(this,"key+value")},!yt),n(Array.prototype,"fill",function(t){var e=arguments[1],r=arguments[2],n=s(this),o=f(n.length);o=$(o,0);var i,a=u(e);i=a<0?$(o+a,0):K(a,o);var c,l;for(l=(c=r===C?o:u(r))<0?$(o+c,0):K(c,o);i<l;)n[String(i)]=t,i+=1;return n}),n(Array.prototype,"find",function(t){var e=s(this),r=u(e.length);if(!l(t))throw TypeError();for(var n=arguments.length>1?arguments[1]:C,o=0;o<r;){var i=String(o);if(m(e,i)){var a=e[i],c=t.call(n,a,o,e);if(Boolean(c))return a}++o}return C}),n(Array.prototype,"findIndex",function(t){var e=s(this),r=f(e.length);if(!l(t))throw TypeError();for(var n=arguments.length>1?arguments[1]:C,o=0;o<r;){var i=String(o);if(m(e,i)){var a=e[i],u=t.call(n,a,o,e);if(Boolean(u))return o}++o}return-1}),n(Array.prototype,"keys",function(){return M(this,"key")},!yt),n(Array.prototype,"values",function(){return M(this,"value")},!yt),n(Array.prototype,it,Array.prototype.values);var vt=Object.create(ot);N.prototype=vt,n(vt,"next",function(){var t=e(this);if("object"!==a(t))throw TypeError();var r,n,i=t["[[IteratedObject]]"],u=t["[[ArrayIteratorNextIndex]]"],s=t["[[ArrayIterationKind]]"],f=c(i.length);if(-1!==s.indexOf("sparse"))for(var l=!1;!l&&u<f;)(l=m(i,r=String(u)))||(u+=1);if(u>=f)return o(t,"[[ArrayIteratorNextIndex]]",Infinity),O(C,!0);if(r=u,o(t,"[[ArrayIteratorNextIndex]]",u+1),-1!==s.indexOf("value")&&(n=i[r]),-1!==s.indexOf("key+value"))return O([r,n],!1);if(-1!==s.indexOf("key"))return O(r,!1);if("value"===s)return O(n,!1);throw Error("Internal error")}),n(vt,ft,"Array Iterator"),["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"].forEach(function(r){if(r in t){var o=t[r];n(o,"from",function(t){var r=arguments[1],n=arguments[2],o=e(this);if(!p(o))throw TypeError();if(r===C)var i=!1;else{if(l(r))throw TypeError();var a=n;i=!0}var u=d(t,it);if(u!==C){for(var c=g(t,u),h=[],y=!0;!1!==y;)if(!1!==(y=S(c))){var v=w(y);h.push(v)}for(var m=h.length,b=new o(m),E=0;E<m;){var O=h.shift();if(i)var T=r.call(a,O);else T=O;b[E]=T,++E}return b}var j=s(t);for(b=new o(m=f(j.length)),E=0;E<m;)O=j[E],T=i?r.call(a,O,E):O,b[E]=T,++E;return b}),n(o,"of",function(){for(var t=arguments,r=t.length,n=new(e(this))(r),o=0;o<r;)n[o]=t[o],++o;return n}),n(o.prototype,"copyWithin",Array.prototype.copyWithin),n(o.prototype,"entries",Array.prototype.entries),n(o.prototype,"every",Array.prototype.every),n(o.prototype,"fill",function(t){var e=arguments[1],r=arguments[2],n=s(this),o=f(n.length);o=$(o,0);var i,a=u(e);i=a<0?$(o+a,0):K(a,o);var c,l;for(l=(c=r===C?o:u(r))<0?$(o+c,0):K(c,o);i<l;)n[String(i)]=t,i+=1;return n}),n(o.prototype,"filter",function(t){var e=arguments[1],r=s(this),n=f(r.length);if(!l(t))throw TypeError();for(var o=e,i=r.constructor,a=[],u=0,c=0;u<n;){var p=r[u];t.call(o,p,u,r)&&(a.push(p),++c),++u}for(var h=new i(c),y=0,v=0;v<a.length;++v){var d=a[v];h[y]=d,++y}return h}),n(o.prototype,"find",Array.prototype.find),n(o.prototype,"findIndex",Array.prototype.findIndex),n(o.prototype,"forEach",Array.prototype.forEach),n(o.prototype,"indexOf",Array.prototype.indexOf),n(o.prototype,"join",Array.prototype.join),n(o.prototype,"keys",Array.prototype.keys),n(o.prototype,"lastIndexOf",Array.prototype.lastIndexOf),n(o.prototype,"map",function(t){var e=arguments[1],r=s(this),n=f(r.length);if(!l(t))throw TypeError();var o=e,i=C,a=r.constructor;p(a)&&(i=new a(n)),i===C&&(i=new Array(n));for(var u=0;u<n;){if(m(r,u)){var c=r[u],h=t.call(o,c,u,r);i[u]=h}++u}return i}),n(o.prototype,"reduce",Array.prototype.reduce),n(o.prototype,"reduceRight",Array.prototype.reduceRight),n(o.prototype,"reverse",Array.prototype.reverse),n(o.prototype,"slice",function(t,e){var r=s(this),n=f(r.length),o=u(t),i=o<0?$(n+o,0):K(o,n),a=e===C?n:u(e),c=a<0?$(n+a,0):K(a,n),l=c-i,h=r.constructor;if(!p(h))throw TypeError();for(var y=new h(l),v=0;i<c;){var d=r[i];y[v]=d,++i,++v}return y}),n(o.prototype,"some",Array.prototype.some),n(o.prototype,"sort",function(){var t=arguments[0];return Array.prototype.sort.call(this,function(e,r){return e!==e&&r!==r?0:e!==e?1:r!==r?-1:t!==C?t(e,r):e<r?-1:e>r?1:0})}),n(o.prototype,"values",Array.prototype.values),n(o.prototype,it,o.prototype.values),n(o.prototype,ft,r)}}),function(){function r(){var t=e(this),r=arguments[0];if("object"!==a(t))throw TypeError();if("[[MapData]]"in t)throw TypeError();if(r!==C){var n=t.set;if(!l(n))throw TypeError();var i=g(s(r))}if(o(t,"[[MapData]]",{keys:[],values:[]}),i===C)return t;for(;;){var u=S(i);if(!1===u)return t;var c=w(u);if("object"!==a(c))throw TypeError();var f=c[0],p=c[1];n.call(t,f,p)}return t}function i(t,e){var r;if(e===e)return t.keys.indexOf(e);for(r=0;r<t.keys.length;r+=1)if(y(t.keys[r],e))return r;return-1}function u(){}function c(t,e){if("object"!==a(t))throw TypeError();if(!("[[MapData]]"in t))throw TypeError();if(t["[[MapData]]"]===C)throw TypeError();var r=new u;return o(r,"[[Map]]",t),o(r,"[[MapNextIndex]]",0),o(r,"[[MapIterationKind]]",e),r}"Map"in t&&!I&&!function(){try{return new t.Map([]),!1}catch(e){return!0}}()&&!function(){try{return!(new t.Map).entries().next}catch(e){return!0}}()&&1===new t.Map([["a",1]]).size||(t.Map=r);var f={};n(r.prototype=f,"clear",function(){var t=e(this);if("object"!==a(t))throw TypeError();if(!("[[MapData]]"in t))throw TypeError();if(t["[[MapData]]"]===C)throw TypeError();var r=t["[[MapData]]"];return r.keys.length=0,r.values.length=0,C}),n(r.prototype,"delete",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[MapData]]"in r))throw TypeError();if(r["[[MapData]]"]===C)throw TypeError();var n=r["[[MapData]]"],o=i(n,t);return!(o<0)&&(n.keys[o]=nt,n.values[o]=nt,!0)}),n(r.prototype,"entries",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"key+value")}),n(r.prototype,"forEach",function(t){var r=arguments[1],n=e(this);if("object"!==a(n))throw TypeError();if(!("[[MapData]]"in n))throw TypeError();if(n["[[MapData]]"]===C)throw TypeError();var o=n["[[MapData]]"];if(!l(t))throw TypeError("First argument to forEach is not callable.");for(var i=0;i<o.keys.length;++i)o.keys[i]!==nt&&t.call(r,o.values[i],o.keys[i],n);return C}),n(r.prototype,"get",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[MapData]]"in r))throw TypeError();if(r["[[MapData]]"]===C)throw TypeError();var n=r["[[MapData]]"],o=i(n,t);return o>=0?n.values[o]:C}),n(r.prototype,"has",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[MapData]]"in r))throw TypeError();if(r["[[MapData]]"]===C)throw TypeError();return i(r["[[MapData]]"],t)>=0}),n(r.prototype,"keys",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"key")}),n(r.prototype,"set",function(t,r){var n=e(this);if("object"!==a(n))throw TypeError();if(!("[[MapData]]"in n))throw TypeError();if(n["[[MapData]]"]===C)throw TypeError();var o=n["[[MapData]]"],u=i(o,t);return u<0&&(u=o.keys.length),h(t,-0)&&(t=0),o.keys[u]=t,o.values[u]=r,n}),Object.defineProperty(r.prototype,"size",{get:function(){var t=e(this);if("object"!==a(t))throw TypeError();if(!("[[MapData]]"in t))throw TypeError();if(t["[[MapData]]"]===C)throw TypeError();for(var r=t["[[MapData]]"],n=0,o=0;o<r.keys.length;++o)r.keys[o]!==nt&&(n+=1);return n}}),n(r.prototype,"values",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"value")}),n(r.prototype,it,function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"key+value")}),n(t.Map.prototype,ft,"Map");var p=Object.create(ot);u.prototype=p,n(p,"next",function(){var t=e(this);if("object"!==a(t))throw TypeError();for(var r=t["[[Map]]"],n=t["[[MapNextIndex]]"],i=t["[[MapIterationKind]]"],u=r["[[MapData]]"];n<u.keys.length;){var c={key:u.keys[n],value:u.values[n]};if(n=n+=1,o(t,"[[MapNextIndex]]",n),c.key!==nt)return"key"===i?O(c.key,!1):"value"===i?O(c.value,!1):O([c.key,c.value],!1)}return O(C,!0)}),n(p,ft,"Map Iterator")}(),function(){function r(){var t=e(this),r=arguments[0];if("object"!==a(t))throw TypeError();if("[[SetData]]"in t)throw TypeError();if(r!==C){var n=t.add;if(!l(n))throw TypeError();var i=g(s(r))}if(o(t,"[[SetData]]",[]),i===C)return t;for(;;){var u=S(i);if(!1===u)return t;var c=w(u);n.call(t,c)}return t}function i(t,e){var r;if(e===e)return t.indexOf(e);for(r=0;r<t.length;r+=1)if(y(t[r],e))return r;return-1}function u(){}function c(t,e){if("object"!==a(t))throw TypeError();if(!("[[SetData]]"in t))throw TypeError();if(t["[[SetData]]"]===C)throw TypeError();var r=new u;return o(r,"[[IteratedSet]]",t),o(r,"[[SetNextIndex]]",0),o(r,"[[SetIterationKind]]",e),r}"Set"in t&&!I&&!function(){try{return!(new t.Set).entries().next}catch(e){return!0}}()&&1===new t.Set([1]).size||(t.Set=r);var f={};n(r.prototype=f,"add",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[SetData]]"in r))throw TypeError();if(r["[[SetData]]"]===C)throw TypeError();h(t,-0)&&(t=0);var n=i(r["[[SetData]]"],t);return n<0&&(n=r["[[SetData]]"].length),r["[[SetData]]"][n]=t,r}),n(r.prototype,"clear",function(){var t=e(this);if("object"!==a(t))throw TypeError();if(!("[[SetData]]"in t))throw TypeError();if(t["[[SetData]]"]===C)throw TypeError();return t["[[SetData]]"].length=0,C}),n(r.prototype,"delete",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[SetData]]"in r))throw TypeError();if(r["[[SetData]]"]===C)throw TypeError();var n=r["[[SetData]]"],o=i(n,t);return!(o<0)&&(n[o]=nt,!0)}),n(r.prototype,"entries",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"key+value")}),n(r.prototype,"forEach",function(t){var r=arguments[1],n=e(this);if("object"!==a(n))throw TypeError();if(!("[[SetData]]"in n))throw TypeError();if(n["[[SetData]]"]===C)throw TypeError();var o=n["[[SetData]]"];if(!l(t))throw TypeError("First argument to forEach is not callable.");for(var i=0;i<o.length;++i)o[i]!==nt&&t.call(r,o[i],o[i],n)}),n(r.prototype,"has",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(!("[[SetData]]"in r))throw TypeError();if(r["[[SetData]]"]===C)throw TypeError();return-1!==i(r["[[SetData]]"],t)}),Object.defineProperty(r.prototype,"size",{get:function(){var t=e(this);if("object"!==a(t))throw TypeError();if(!("[[SetData]]"in t))throw TypeError();if(t["[[SetData]]"]===C)throw TypeError();for(var r=t["[[SetData]]"],n=0,o=0;o<r.length;++o)r[o]!==nt&&(n+=1);return n}}),n(r.prototype,"values",function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t,"value")}),r.prototype.keys=r.prototype.values,n(r.prototype,it,function(){var t=e(this);if("object"!==a(t))throw TypeError();return c(t)}),n(t.Set.prototype,ft,"Set");var p=Object.create(ot);u.prototype=p,n(p,"next",function(){var t=e(this);if("object"!==a(t))throw TypeError();for(var r=t["[[IteratedSet]]"],n=t["[[SetNextIndex]]"],i=t["[[SetIterationKind]]"],u=r["[[SetData]]"];n<u.length;){var c=u[n];if(n=n+=1,o(t,"[[SetNextIndex]]",n),c!==nt)return"key+value"===i?O([c,c],!1):O(c,!1)}return O(C,!0)}),n(p,ft,"Set Iterator")}(),function(){function r(){var t=e(this),r=arguments[0];if("object"!==a(t))throw TypeError();if("[[WeakMapData]]"in t)throw TypeError();if(r!==C){var n=t.set;if(!l(n))throw TypeError();var u=g(s(r))}if(o(t,"[[WeakMapData]]",new i),u===C)return t;for(;;){var c=S(u);if(!1===c)return t;var f=w(c);if("object"!==a(f))throw TypeError();var p=f[0],h=f[1];n.call(t,p,h)}return t}"WeakMap"in t&&!I||(t.WeakMap=r);var u={};n(r.prototype=u,"delete",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakMapData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakMapData]]"].remove(t)}),n(r.prototype,"get",function(t,r){var n=e(this);if("object"!==a(n))throw TypeError();if(n["[[WeakMapData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return n["[[WeakMapData]]"].get(t,r)}),n(r.prototype,"has",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakMapData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakMapData]]"].has(t)}),n(r.prototype,"set",function(t,r){var n=e(this);if("object"!==a(n))throw TypeError();if(n["[[WeakMapData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return n["[[WeakMapData]]"].set(t,r),n}),n(t.WeakMap.prototype,ft,"WeakMap"),function(){var e=new t.WeakMap,r=t.WeakMap.prototype.set;n(t.WeakMap.prototype,"set",function(){return r.apply(this,arguments),this},e.set({},0)!==e)}()}(),function(){function r(){var t=e(this),r=arguments[0];if("object"!==a(t))throw TypeError();if("[[WeakSetData]]"in t)throw TypeError();if(r!==C){var n=t.add;if(!l(n))throw TypeError();var u=g(s(r))}if(o(t,"[[WeakSetData]]",new i),u===C)return t;for(;;){var c=S(u);if(!1===c)return t;var f=w(c);n.call(t,f)}return t}"WeakSet"in t&&!I||(t.WeakSet=r);var u={};n(r.prototype=u,"add",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakSetData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakSetData]]"].set(t,!0),r}),n(r.prototype,"delete",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakSetData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakSetData]]"].remove(t)}),n(r.prototype,"has",function(t){var r=e(this);if("object"!==a(r))throw TypeError();if(r["[[WeakSetData]]"]===C)throw TypeError();if("object"!==a(t))throw TypeError("Expected object");return r["[[WeakSetData]]"].has(t)}),n(t.WeakSet.prototype,ft,"WeakSet"),function(){var e=new t.WeakSet,r=t.WeakSet.prototype.add;n(t.WeakSet.prototype,"add",function(){return r.apply(this,arguments),this},e.add({})!==e)}()}(),"ArrayBuffer"in t&&(n(ArrayBuffer,"isView",function(t){return"object"===a(t)&&("buffer"in t&&t.buffer instanceof ArrayBuffer)}),n(ArrayBuffer.prototype,ft,"ArrayBuffer")),"DataView"in t&&n(DataView.prototype,ft,"DataView"),n(JSON,ft,"JSON"),n(ot,it,function(){return this}),function(){function r(t){var e={"[[value]]":!1},r=u();o(r,"[[Promise]]",t),o(r,"[[AlreadyResolved]]",e);var n=i();return o(n,"[[Promise]]",t),o(n,"[[AlreadyResolved]]",e),{"[[Resolve]]":r,"[[Reject]]":n}}function i(){var t=function(e){var r=t["[[Promise]]"],n=t["[[AlreadyResolved]]"];return n["[[value]]"]?C:(o(n,"[[value]]",!0),v(r,e))};return t}function u(){var t=function(e){var r=t["[[Promise]]"],n=t["[[AlreadyResolved]]"];if(n["[[value]]"])return C;if(o(n,"[[value]]",!0),h(e,r)){var i=TypeError();return v(r,i)}if("object"!==a(e))return c(r,e);try{var u=e.then}catch(u){return v(r,u)}return l(u)?(T("PromiseJobs",b,[r,e,u]),C):c(r,e)};return t}function c(t,e){var r=t["[[PromiseFulfillReactions]]"];return o(t,"[[PromiseResult]]",e),o(t,"[[PromiseFulfillReactions]]",C),o(t,"[[PromiseRejectReactions]]",C),o(t,"[[PromiseState]]","fulfilled"),d(r,e)}function s(t){return f(C,t)}function f(t,e){var r={};o(r,"[[Promise]]",t),o(r,"[[Resolve]]",C),o(r,"[[Reject]]",C);var n=p();o(n,"[[Capability]]",r);var i=t=new e(n);if(o(r,"[[Promise]]",t),!l(r["[[Resolve]]"]))throw TypeError();if(!l(r["[[Reject]]"]))throw TypeError();if("object"===a(i)&&!h(t,i))throw TypeError();return r}function p(){var t=function(e,r){var n=t["[[Capability]]"];if(n["[[Resolve]]"]!==C)throw TypeError();if(n["[[Reject]]"]!==C)throw TypeError();return o(n,"[[Resolve]]",e),o(n,"[[Reject]]",r),C};return t}function y(t){return"object"===a(t)&&("[[PromiseState]]"in t&&t["[[PromiseState]]"]!==C)}function v(t,e){var r=t["[[PromiseRejectReactions]]"];return o(t,"[[PromiseResult]]",e),o(t,"[[PromiseFulfillReactions]]",C),o(t,"[[PromiseRejectReactions]]",C),o(t,"[[PromiseState]]","rejected"),d(r,e)}function d(t,e){for(var r=0,n=t.length;r<n;++r)T("PromiseJobs",m,[t[r],e]);return C}function m(t,e){var r,n,o=t["[[Capabilities]]"],i=t["[[Handler]]"];try{if("Identity"===i)r=e;else{if("Thrower"===i)throw e;r=i.call(C,e)}}catch(r){return n=o["[[Reject]]"].call(C,r),void j(n)}j(n=o["[[Resolve]]"].call(C,r))}function b(t,e,n){var o=r(t);try{var i=n.call(e,o["[[Resolve]]"],o["[[Reject]]"])}catch(i){return void j(o["[[Reject]]"].call(C,i))}j(i)}function E(t){var e={configurable:!1,enumerable:!1,writable:!0,value:C};Object.defineProperty(this,"[[PromiseState]]",e),Object.defineProperty(this,"[[PromiseConstructor]]",e),Object.defineProperty(this,"[[PromiseResult]]",e),Object.defineProperty(this,"[[PromiseFulfillReactions]]",e),Object.defineProperty(this,"[[PromiseRejectReactions]]",e);var r=this;if("object"!==a(r))throw new TypeError;if(!("[[PromiseState]]"in r))throw TypeError();if(r["[[PromiseState]]"]!==C)throw TypeError();if(!l(t))throw TypeError();return o(r,"[[PromiseConstructor]]",E),O(r,t)}function O(t,e){o(t,"[[PromiseState]]","pending"),o(t,"[[PromiseFulfillReactions]]",[]),o(t,"[[PromiseRejectReactions]]",[]);var n=r(t);try{var i=e.call(C,n["[[Resolve]]"],n["[[Reject]]"])}catch(i){n["[[Reject]]"].call(C,i)}return t}function _(){var t=function(e){var r=t["[[AlreadyCalled]]"];if(r.value)return C;r.value=!0;var n=t["[[Index]]"],o=t["[[Values]]"],i=t["[[Capabilities]]"],a=t["[[RemainingElements]]"];try{o[n]=e}catch(u){return i["[[Reject]]"].call(C,u),i["[[Promise]]"]}return a.value-=1,0===a.value?i["[[Resolve]]"].call(C,o):C};return t}n(E,"all",function(t){var r=e(this),n=s(r);try{var i=g(t)}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}for(var a=[],u={value:1},c=0;;){try{var f=S(i)}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}if(!f){if(u.value-=1,0===u.value)n["[[Resolve]]"].apply(C,a);return n["[[Promise]]"]}try{var l=w(f)}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}try{var p=r.resolve(l)}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}var h=_();o(h,"[[AlreadyCalled]]",{value:!1}),o(h,"[[Index]]",c),o(h,"[[Values]]",a),o(h,"[[Capabilities]]",n),o(h,"[[RemainingElements]]",u),u.value+=1;try{p.then(h,n["[[Reject]]"])}catch(y){return n["[[Reject]]"].call(C,y),n["[[Promise]]"]}c+=1}}),E.prototype={},n(E,"race",function(t){var r=e(this),n=s(r);try{var o=g(t)}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}for(;;){try{var i=S(o)}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}if(!i)return n["[[Promise]]"];try{var a=w(i)}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}try{var u=r.resolve(a)}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}try{u.then(n["[[Resolve]]"],n["[[Reject]]"])}catch(c){return n["[[Reject]]"].call(C,c),n["[[Promise]]"]}}}),n(E,"reject",function(t){var r=s(e(this));r["[[Reject]]"].call(C,t);return r["[[Promise]]"]}),n(E,"resolve",function(t){var r=e(this);if(y(t)&&h(t["[[PromiseConstructor]]"],r))return t;var n=s(r);n["[[Resolve]]"].call(C,t);return n["[[Promise]]"]}),n(E.prototype,"catch",function(t){return this.then(C,t)}),E.prototype.constructor=E,n(E.prototype,"then",function(t,e){var r=this;if(!y(r))throw TypeError();l(t)||(t="Identity"),l(e)||(e="Thrower");var n=s(r.constructor),o={"[[Capabilities]]":n,"[[Handler]]":t},i={"[[Capabilities]]":n,"[[Handler]]":e};return"pending"===r["[[PromiseState]]"]?(r["[[PromiseFulfillReactions]]"].push(o),r["[[PromiseRejectReactions]]"].push(i)):"fulfilled"===r["[[PromiseState]]"]?T("PromiseJobs",m,[o,r["[[PromiseResult]]"]]):"rejected"===r["[[PromiseState]]"]&&T("PromiseJobs",m,[i,r["[[PromiseResult]]"]]),n["[[Promise]]"]}),"Promise"in t&&!I||(t.Promise=E),"cast"in t.Promise&&(t.Promise.resolve=t.Promise.cast)}(),n(Promise.prototype,ft,"Promise"),"Reflect"in t&&!I||(t.Reflect={}),n(Reflect,"apply",function(t,e,r){if(!l(t))throw TypeError();return Function.prototype.apply.call(t,e,r)}),n(Reflect,"construct",function(t,e){return __cons(t,e)}),n(Reflect,"defineProperty",function(t,e,r){try{return Object.defineProperty(t,e,r),!0}catch(n){return!1}}),n(Reflect,"deleteProperty",function(t,e){try{return delete t[e],!b(t,e)}catch(r){return!1}}),n(Reflect,"enumerate",function(t){return _(t=s(t))}),n(Reflect,"get",function(t,e,n){t=s(t),e=String(e),n=n===C?t:s(n);var o=r(t,e);return o&&"get"in o?Function.prototype.call.call(o.get,n):t[e]}),n(Reflect,"getOwnPropertyDescriptor",Object.getOwnPropertyDescriptor),n(Reflect,"getPrototypeOf",Object.getPrototypeOf),n(Reflect,"has",function(t,e){return String(e)in s(t)}),n(Reflect,"isExtensible",Object.isExtensible),n(Reflect,"ownKeys",function(t){var e=s(t);return Object.getOwnPropertyNames(e)}),n(Reflect,"preventExtensions",function(t){try{return Object.preventExtensions(t),!0}catch(e){return!1}}),n(Reflect,"set",function(t,e,n,o){t=s(t),e=String(e),o=o===C?t:s(o);var i=r(t,e);try{return i&&"set"in i?Function.prototype.call.call(i.set,o,n):t[e]=n,!0}catch(a){return!1}}),n(Reflect,"setPrototypeOf",function(t,e){try{return t.__proto__=e,Reflect.getPrototypeOf(t)===e}catch(r){return!1}})}(self),function(t){"use strict";function e(t){return t=Number(t),a(t)?0:0===t||t===Infinity||t===-Infinity?t:(t<0?-1:1)*c(u(t))}function r(t){if(null===t||t===i)throw TypeError();return Object(t)}function n(t){var r=e(t);return r<=0?0:s(r,9007199254740991)}function o(t,e){if(typeof t!=typeof e)return!1;switch(typeof t){case"undefined":return!0;case"number":return t!==t&&e!==e||t===e;case"boolean":case"string":case"object":default:return t===e}}var i=void 0,a=t.isNaN,u=Math.abs,c=Math.floor,s=(Math.max,Math.min);!function(t,e,r,n){e in t&&!n||("function"==typeof r?Object.defineProperty(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0}):Object.defineProperty(t,e,{value:r,configurable:!1,enumerable:!1,writable:!1}))}(Array.prototype,"includes",function(t){var i=arguments[1],a=r(this),u=n(a.length);if(0===u)return!1;var c=e(i);if(c>=0)var s=c;else(s=u+c)<0&&(s=0);for(;s<u;){a[s];if(o(a[s],t))return!0;s+=1}return!1})}(this),function(t){"use strict";function e(t,e,r,n){e in t&&!n||("function"==typeof r?Object.defineProperty(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0}):Object.defineProperty(t,e,{value:r,configurable:!1,enumerable:!1,writable:!1}))}function r(t){return t=Number(t),c(t)?0:0===t||t===Infinity||t===-Infinity?t:(t<0?-1:1)*f(s(t))}function n(t){if(null===t||t===u)throw TypeError();return Object(t)}function o(t){var e=r(t);return e<=0?0:l(e,9007199254740991)}function i(t,e,r){Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!0,configurable:!0})}function a(t,e){var r=[];return Object.keys(t).forEach(function(n){var o=Object.getOwnPropertyDescriptor(t,n);if(o&&o.enumerable)if("key"===e)r.push(n);else{var i=t[n];"value"===e?r.push(i):r.push([n,i])}}),r}var u=void 0,c=t.isNaN,s=Math.abs,f=Math.floor,l=Math.min;e(Object,"entries",function(t){return a(n(t),"key+value")}),e(Object,"getOwnPropertyDescriptors",function(t){for(var e=n(t),r=Object.getOwnPropertyNames(e),o={},a=0;a<r.length;++a){var u=r[a];i(o,u,Object.getOwnPropertyDescriptor(e,u))}return o}),e(Object,"values",function(t){return a(n(t),"value")}),e(String.prototype,"padEnd",function(t){var e=arguments[1],r=String(this),n=r.length;if(e===u)var i="";else i=String(e);""===i&&(i=" ");var a=o(t);if(a<=n)return r;for(var c=a-n,s="";s.length<c;)s+=i;return r+s.substring(0,c)}),e(String.prototype,"padStart",function(t){var e=arguments[1],r=String(this),n=r.length;if(e===u)var i="";else i=String(e);""===i&&(i=" ");var a=o(t);if(a<=n)return r;for(var c=a-n,s="";s.length<c;)s+=i;return s.substring(0,c)+r})}(this),function(t){"use strict";"window"in t&&"document"in t&&("head"in document||(document.head=document.getElementsByTagName("head")[0]),["abbr","article","aside","audio","bdi","canvas","data","datalist","details","dialog","figcaption","figure","footer","header","hgroup","main","mark","meter","nav","output","picture","progress","section","summary","template","time","video"].forEach(function(t){document.createElement(t)}),!("dataset"in document.createElement("span"))&&"Element"in t&&Element.prototype&&Object.defineProperty&&Object.defineProperty(Element.prototype,"dataset",{get:function(){for(var t=Object.create(null),e=0;e<this.attributes.length;++e){var r=this.attributes[e];r.specified&&"data-"===r.name.substring(0,5)&&function(e,r){var n=r.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()});t[n]=e.getAttribute("data-"+r),Object.defineProperty(t,n,{get:function(){return e.getAttribute("data-"+r)},set:function(t){e.setAttribute("data-"+r,t)}})}(this,r.name.substring(5))}return t}}),function(){if(!("atob"in t&&"btoa"in t)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.atob=function(t){var r=0,n=[],o=0,i=0;if((t=(t=String(t)).replace(/\s/g,"")).length%4==0&&(t=t.replace(/=+$/,"")),t.length%4==1)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(t))throw Error("InvalidCharacterError");for(;r<t.length;)o=o<<6|e.indexOf(t.charAt(r)),24===(i+=6)&&(n.push(String.fromCharCode(o>>16&255)),n.push(String.fromCharCode(o>>8&255)),n.push(String.fromCharCode(255&o)),i=0,o=0),r+=1;return 12===i?(o>>=4,n.push(String.fromCharCode(255&o))):18===i&&(o>>=2,n.push(String.fromCharCode(o>>8&255)),n.push(String.fromCharCode(255&o))),n.join("")},t.btoa=function(t){t=String(t);var r,n,o,i,a,u,c,s=0,f=[];if(/[^\x00-\xFF]/.test(t))throw Error("InvalidCharacterError");for(;s<t.length;)i=(r=t.charCodeAt(s++))>>2,a=(3&r)<<4|(n=t.charCodeAt(s++))>>4,u=(15&n)<<2|(o=t.charCodeAt(s++))>>6,c=63&o,s===t.length+2?(u=64,c=64):s===t.length+1&&(c=64),f.push(e.charAt(i),e.charAt(a),e.charAt(u),e.charAt(c));return f.join("")}}}(),function(){function e(t){return t.offsetWidth>0&&t.offsetHeight>0}function r(){var t=o;o=Object.create(null),a=-1,Object.keys(t).forEach(function(r){var n=t[r];n.element&&!e(n.element)||n.callback(Date.now())})}if(!("requestAnimationFrame"in t)){var n=60,o=Object.create(null),i=0,a=-1;t.requestAnimationFrame=function(e,u){var c=++i;return o[c]={callback:e,element:u},-1===a&&(a=t.setTimeout(r,1e3/n)),c},t.cancelAnimationFrame=function(e){delete o[e],0===Object.keys(o).length&&(t.clearTimeout(a),a=-1)}}}())}(self),function(t){"use strict";function e(t,e){t&&Object.keys(e).forEach(function(r){if(!(r in t||r in t.prototype))try{Object.defineProperty(t.prototype,r,Object.getOwnPropertyDescriptor(e,r))}catch(n){t[r]=e[r]}})}function r(t){var e=null;return 1===(t=t.map(function(t){return t instanceof Node?t:document.createTextNode(t)})).length?e=t[0]:(e=document.createDocumentFragment(),t.forEach(function(t){e.appendChild(t)})),e}if("window"in t&&"document"in t){document.querySelectorAll||(document.querySelectorAll=function(t){var e,r=document.createElement("style"),n=[];for(document.documentElement.firstChild.appendChild(r),document._qsa=[],r.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),r.parentNode.removeChild(r);document._qsa.length;)(e=document._qsa.shift()).style.removeAttribute("x-qsa"),n.push(e);return document._qsa=null,n}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),document.getElementsByClassName||(document.getElementsByClassName=function(t){return t=String(t).replace(/^|\s+/g,"."),document.querySelectorAll(t)}),t.Node=t.Node||function(){throw TypeError("Illegal constructor")},[["ELEMENT_NODE",1],["ATTRIBUTE_NODE",2],["TEXT_NODE",3],["CDATA_SECTION_NODE",4],["ENTITY_REFERENCE_NODE",5],["ENTITY_NODE",6],["PROCESSING_INSTRUCTION_NODE",7],["COMMENT_NODE",8],["DOCUMENT_NODE",9],["DOCUMENT_TYPE_NODE",10],["DOCUMENT_FRAGMENT_NODE",11],["NOTATION_NODE",12]].forEach(function(e){e[0]in t.Node||(t.Node[e[0]]=e[1])}),t.DOMException=t.DOMException||function(){throw TypeError("Illegal constructor")},[["INDEX_SIZE_ERR",1],["DOMSTRING_SIZE_ERR",2],["HIERARCHY_REQUEST_ERR",3],["WRONG_DOCUMENT_ERR",4],["INVALID_CHARACTER_ERR",5],["NO_DATA_ALLOWED_ERR",6],["NO_MODIFICATION_ALLOWED_ERR",7],["NOT_FOUND_ERR",8],["NOT_SUPPORTED_ERR",9],["INUSE_ATTRIBUTE_ERR",10],["INVALID_STATE_ERR",11],["SYNTAX_ERR",12],["INVALID_MODIFICATION_ERR",13],["NAMESPACE_ERR",14],["INVALID_ACCESS_ERR",15]].forEach(function(e){e[0]in t.DOMException||(t.DOMException[e[0]]=e[1])}),function(){function e(t,e,r){if("function"==typeof e){"DOMContentLoaded"===t&&(t="load");var n=this,o=function(t){t._timeStamp=Date.now(),t._currentTarget=n,e.call(this,t),t._currentTarget=null};this["_"+t+e]=o,this.attachEvent("on"+t,o)}}function r(t,e,r){if("function"==typeof e){"DOMContentLoaded"===t&&(t="load");var n=this["_"+t+e];n&&(this.detachEvent("on"+t,n),this["_"+t+e]=null)}}"Element"in t&&!Element.prototype.addEventListener&&Object.defineProperty&&(Event.CAPTURING_PHASE=1,Event.AT_TARGET=2,Event.BUBBLING_PHASE=3,Object.defineProperties(Event.prototype,{CAPTURING_PHASE:{get:function(){return 1}},AT_TARGET:{get:function(){return 2}},BUBBLING_PHASE:{get:function(){return 3}},target:{get:function(){return this.srcElement}},currentTarget:{get:function(){return this._currentTarget}},eventPhase:{get:function(){return this.srcElement===this.currentTarget?Event.AT_TARGET:Event.BUBBLING_PHASE}},bubbles:{get:function(){switch(this.type){case"click":case"dblclick":case"mousedown":case"mouseup":case"mouseover":case"mousemove":case"mouseout":case"mousewheel":case"keydown":case"keypress":case"keyup":case"resize":case"scroll":case"select":case"change":case"submit":case"reset":return!0}return!1}},cancelable:{get:function(){switch(this.type){case"click":case"dblclick":case"mousedown":case"mouseup":case"mouseover":case"mouseout":case"mousewheel":case"keydown":case"keypress":case"keyup":case"submit":return!0}return!1}},timeStamp:{get:function(){return this._timeStamp}},stopPropagation:{value:function(){this.cancelBubble=!0}},preventDefault:{value:function(){this.returnValue=!1}},defaultPrevented:{get:function(){return!1===this.returnValue}}}),[Window,HTMLDocument,Element].forEach(function(t){t.prototype.addEventListener=e,t.prototype.removeEventListener=r}))}(),function(){function e(t,e){e=e||{bubbles:!1,cancelable:!1,detail:undefined};var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),r}"CustomEvent"in t&&"function"==typeof t.CustomEvent||(e.prototype=t.Event.prototype,t.CustomEvent=e)}(),window.addEvent=function(t,e,r){t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent&&(t["e"+e+r]=r,t[e+r]=function(){var n=window.event;n.currentTarget=t,n.preventDefault=function(){n.returnValue=!1},n.stopPropagation=function(){n.cancelBubble=!0},n.target=n.srcElement,n.timeStamp=Date.now(),t["e"+e+r].call(this,n)},t.attachEvent("on"+e,t[e+r]))},window.removeEvent=function(t,e,r){t.removeEventListener?t.removeEventListener(e,r,!1):t.detachEvent&&(t.detachEvent("on"+e,t[e+r]),t[e+r]=null,t["e"+e+r]=null)},function(){function e(t,e){function r(t){return t.length?t.split(/\s+/g):[]}function n(t,e){var n=r(e),o=n.indexOf(t);return-1!==o&&n.splice(o,1),n.join(" ")}if(Object.defineProperties(this,{length:{get:function(){return r(t[e]).length}},item:{value:function(n){var o=r(t[e]);return 0<=n&&n<o.length?o[n]:null}},contains:{value:function(n){if(0===(n=String(n)).length)throw SyntaxError();if(/\s/.test(n))throw Error("InvalidCharacterError");return-1!==r(t[e]).indexOf(n)}},add:{value:function(){var n=Array.prototype.slice.call(arguments).map(String);if(n.some(function(t){return 0===t.length}))throw SyntaxError();if(n.some(function(t){return/\s/.test(t)}))throw Error("InvalidCharacterError");try{var o=t[e],i=r(o);if(0===(n=n.filter(function(t){return-1===i.indexOf(t)})).length)return;0===o.length||/\s$/.test(o)||(o+=" "),o+=n.join(" "),t[e]=o}finally{var a=r(t[e]).length;this.length!==a&&(this.length=a)}}},remove:{value:function(){var o=Array.prototype.slice.call(arguments).map(String);if(o.some(function(t){return 0===t.length}))throw SyntaxError();if(o.some(function(t){return/\s/.test(t)}))throw Error("InvalidCharacterError");try{var i=t[e];o.forEach(function(t){i=n(t,i)}),t[e]=i}finally{var a=r(t[e]).length;this.length!==a&&(this.length=a)}}},toggle:{value:function(o){var i=arguments[1];try{if(0===(o=String(o)).length)throw SyntaxError();if(/\s/.test(o))throw Error("InvalidCharacterError");var a=r(t[e]).indexOf(o);if(-1!==a&&(!i||void 0===i))return t[e]=n(o,t[e]),!1;if(-1!==a&&i)return!0;var u=t[e];return 0===u.length||/\s$/.test(u)||(u+=" "),u+=o,t[e]=u,!0}finally{var c=r(t[e]).length;this.length!==c&&(this.length=c)}}},toString:{value:function(){return t[e]}}}),"length"in this)for(var o=0;o<100;++o)Object.defineProperty(this,String(o),{get:function(t){return function(){return this.item(t)}}(o)});else this.length=r(t[e]).length}function r(e,r){"Element"in t&&Element.prototype&&Object.defineProperty&&Object.defineProperty(Element.prototype,e,{get:r})}"classList"in document.createElement("span")?window.getClassList=function(t){return t.classList}:(window.getClassList=function(t){return new e(t,"className")},r("classList",function(){return new e(this,"className")})),"relList"in document.createElement("link")?window.getRelList=function(t){return t.relList}:(window.getRelList=function(t){return new e(t,"rel")},r("relList",function(){return new e(this,"rel")})),function(){if("DOMTokenList"in t){var e=document.createElement("span");"classList"in e&&(e.classList.toggle("x",!1),e.classList.contains("x")&&(t.DOMTokenList.prototype.toggle=function(t){var e=arguments[1];if(e===undefined){var r=!this.contains(t);return this[r?"add":"remove"](t),r}return e=!!e,this[e?"add":"remove"](t),e}))}}(),"previousElementSibling"in document.documentElement||r("previousElementSibling",function(){for(var t=this.previousSibling;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.previousSibling;return t}),"nextElementSibling"in document.documentElement||r("nextElementSibling",function(){for(var t=this.nextSibling;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.nextSibling;return t})}(),"Element"in t&&!Element.prototype.matches&&(Element.prototype.msMatchesSelector?Element.prototype.matches=Element.prototype.msMatchesSelector:Element.prototype.oMatchesSelector?Element.prototype.matches=Element.prototype.oMatchesSelector:Element.prototype.mozMatchesSelector?Element.prototype.matches=Element.prototype.mozMatchesSelector:Element.prototype.webkitMatchesSelector?Element.prototype.matches=Element.prototype.webkitMatchesSelector:document.querySelectorAll&&(Element.prototype.matches=function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),r=e.length;--r>=0&&e.item(r)!==this;);return r>-1})),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,r=(this.document||this.ownerDocument).querySelectorAll(t),n=this;do{for(e=r.length;--e>=0&&r.item(e)!==n;);}while(e<0&&(n=n.parentElement));return n});var n={prepend:function(){var t=[].slice.call(arguments);t=r(t),this.insertBefore(t,this.firstChild)},append:function(){var t=[].slice.call(arguments);t=r(t),this.appendChild(t)}};e(t.Document||t.HTMLDocument,n),e(t.DocumentFragment,n),e(t.Element,n);var o={before:function(){var t=[].slice.call(arguments),e=this.parentNode;if(e){for(var n=this.previousSibling;-1!==t.indexOf(n);)n=n.previousSibling;var o=r(t);e.insertBefore(o,n?n.nextSibling:e.firstChild)}},after:function(){var t=[].slice.call(arguments),e=this.parentNode;if(e){for(var n=this.nextSibling;-1!==t.indexOf(n);)n=n.nextSibling;var o=r(t);e.insertBefore(o,n)}},replaceWith:function(){var t=[].slice.call(arguments),e=this.parentNode;if(e){for(var n=this.nextSibling;-1!==t.indexOf(n);)n=n.nextSibling;var o=r(t);this.parentNode===e?e.replaceChild(o,this):e.insertBefore(o,n)}},remove:function(){this.parentNode&&this.parentNode.removeChild(this)}};e(t.DocumentType,o),e(t.Element,o),e(t.CharacterData,o)}}(self),function(t){"use strict";"window"in t&&"document"in t&&(t.XMLHttpRequest=t.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("This browser does not support XMLHttpRequest.")},[["UNSENT",0],["OPENED",1],["HEADERS_RECEIVED",2],["LOADING",3],["DONE",4]].forEach(function(e){e[0]in t.XMLHttpRequest||(t.XMLHttpRequest[e[0]]=e[1])}),function(){function e(t){if(this._data=[],t)for(var e=0;e<t.elements.length;++e){var r=t.elements[e];""!==r.name&&this.append(r.name,r.value)}}if(!("FormData"in t)){e.prototype={append:function(e,r){if("Blob"in t&&r instanceof t.Blob)throw TypeError("Blob not supported");e=String(e),this._data.push([e,r])},toString:function(){return this._data.map(function(t){return encodeURIComponent(t[0])+"="+encodeURIComponent(t[1])}).join("&")}},t.FormData=e;var r=t.XMLHttpRequest.prototype.send;t.XMLHttpRequest.prototype.send=function(t){return t instanceof e&&(this.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),arguments[0]=t.toString()),r.apply(this,arguments)}}}())}(self),function(t){"use strict";"window"in t&&"document"in t&&"TextRectangle"in t&&!("width"in t.TextRectangle.prototype)&&Object.defineProperties(t.TextRectangle.prototype,{width:{get:function(){return this.right-this.left}},height:{get:function(){return this.bottom-this.top}}})}(self),function(t){"use strict";function e(e){return!!e&&("Symbol"in t&&"iterator"in t.Symbol&&"function"==typeof e[Symbol.iterator]||!!Array.isArray(e))}function r(t){return"from"in Array?Array.from(t):Array.prototype.slice.call(t)}!function(){function n(t){var e="",r=!0;return t.forEach(function(t){var n=encodeURIComponent(t.name),o=encodeURIComponent(t.value);r||(e+="&"),e+=n+"="+o,r=!1}),e.replace(/%20/g,"+")}function o(t,e){var r=t.split("&");e&&-1===r[0].indexOf("=")&&(r[0]="="+r[0]);var n=[];r.forEach(function(t){if(0!==t.length){var e=t.indexOf("=");if(-1!==e)var r=t.substring(0,e),o=t.substring(e+1);else r=t,o="";r=r.replace(/\+/g," "),o=o.replace(/\+/g," "),n.push({name:r,value:o})}});var o=[];return n.forEach(function(t){o.push({name:decodeURIComponent(t.name),value:decodeURIComponent(t.value)})}),o}function i(t){if(s)return new f(t);var e=document.createElement("a");return e.href=t,e}function a(t){var i=this;this._list=[],t===undefined||null===t||(t instanceof a?this._list=o(String(t)):"object"==typeof t&&e(t)?r(t).forEach(function(t){if(!e(t))throw TypeError();var n=r(t);if(2!==n.length)throw TypeError();i._list.push({name:String(n[0]),value:String(n[1])})}):"object"==typeof t&&t?Object.keys(t).forEach(function(e){i._list.push({name:String(e),value:String(t[e])})}):("?"===(t=String(t)).substring(0,1)&&(t=t.substring(1)),this._list=o(t))),this._url_object=null,this._setList=function(t){u||(i._list=t)};var u=!1;this._update_steps=function(){u||(u=!0,i._url_object&&("about:"===i._url_object.protocol&&-1!==i._url_object.pathname.indexOf("?")&&(i._url_object.pathname=i._url_object.pathname.split("?")[0]),i._url_object.search=n(i._list),u=!1))}}function u(t,e){var r=0;this.next=function(){if(r>=t.length)return{done:!0,value:undefined};var n=t[r++];return{done:!1,value:"key"===e?n.name:"value"===e?n.value:[n.name,n.value]}}}function c(e,r){function n(){var t=c.href.replace(/#$|\?$|\?(?=#)/g,"");c.href!==t&&(c.href=t)}function u(){p._setList(c.search?o(c.search.substring(1)):[]),p._update_steps()}if(!(this instanceof t.URL))throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");r&&(e=function(){if(s)return new f(e,r).href;var t;try{var n;if("[object OperaMini]"===Object.prototype.toString.call(window.operamini)?((t=document.createElement("iframe")).style.display="none",document.documentElement.appendChild(t),n=t.contentWindow.document):document.implementation&&document.implementation.createHTMLDocument?n=document.implementation.createHTMLDocument(""):document.implementation&&document.implementation.createDocument?((n=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null)).documentElement.appendChild(n.createElement("head")),n.documentElement.appendChild(n.createElement("body"))):window.ActiveXObject&&((n=new window.ActiveXObject("htmlfile")).write("<head></head><body></body>"),n.close()),!n)throw Error("base not supported");var o=n.createElement("base");o.href=r,n.getElementsByTagName("head")[0].appendChild(o);var i=n.createElement("a");return i.href=e,i.href}finally{t&&t.parentNode.removeChild(t)}}());var c=i(e||""),l=function(){if(!("defineProperties"in Object))return!1;try{var t={};return Object.defineProperties(t,{prop:{get:function(){return!0}}}),t.prop}catch(e){return!1}}()?this:document.createElement("a"),p=new a(c.search?c.search.substring(1):null);return p._url_object=l,Object.defineProperties(l,{href:{get:function(){return c.href},set:function(t){c.href=t,n(),u()},enumerable:!0,configurable:!0},origin:{get:function(){return"origin"in c?c.origin:this.protocol+"//"+this.host},enumerable:!0,configurable:!0},protocol:{get:function(){return c.protocol},set:function(t){c.protocol=t},enumerable:!0,configurable:!0},username:{get:function(){return c.username},set:function(t){c.username=t},enumerable:!0,configurable:!0},password:{get:function(){return c.password},set:function(t){c.password=t},enumerable:!0,configurable:!0},host:{get:function(){var t={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/}[c.protocol];return t?c.host.replace(t,""):c.host},set:function(t){c.host=t},enumerable:!0,configurable:!0},hostname:{get:function(){return c.hostname},set:function(t){c.hostname=t},enumerable:!0,configurable:!0},port:{get:function(){return c.port},set:function(t){c.port=t},enumerable:!0,configurable:!0},pathname:{get:function(){return"/"!==c.pathname.charAt(0)?"/"+c.pathname:c.pathname},set:function(t){c.pathname=t},enumerable:!0,configurable:!0},search:{get:function(){return c.search},set:function(t){c.search!==t&&(c.search=t,n(),u())},enumerable:!0,configurable:!0},searchParams:{get:function(){return p},enumerable:!0,configurable:!0},hash:{get:function(){return c.hash},set:function(t){c.hash=t,n()},enumerable:!0,configurable:!0},toString:{value:function(){return c.toString()},enumerable:!1,configurable:!0},valueOf:{value:function(){return c.valueOf()},enumerable:!1,configurable:!0}}),l}var s,f=t.URL;try{if(f){if("searchParams"in(s=new t.URL("http://example.com")))return;"href"in s||(s=undefined)}}catch(p){}if(Object.defineProperties(a.prototype,{append:{value:function(t,e){this._list.push({name:t,value:e}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(t){for(var e=0;e<this._list.length;)this._list[e].name===t?this._list.splice(e,1):++e;this._update_steps()},writable:!0,enumerable:!0,configurable:!0},get:{value:function(t){for(var e=0;e<this._list.length;++e)if(this._list[e].name===t)return this._list[e].value;return null},writable:!0,enumerable:!0,configurable:!0},getAll:{value:function(t){for(var e=[],r=0;r<this._list.length;++r)this._list[r].name===t&&e.push(this._list[r].value);return e},writable:!0,enumerable:!0,configurable:!0},has:{value:function(t){for(var e=0;e<this._list.length;++e)if(this._list[e].name===t)return!0;return!1},writable:!0,enumerable:!0,configurable:!0},set:{value:function(t,e){for(var r=!1,n=0;n<this._list.length;)this._list[n].name===t?r?this._list.splice(n,1):(this._list[n].value=e,r=!0,++n):++n;r||this._list.push({name:t,value:e}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},entries:{value:function(){return new u(this._list,"key+value")},writable:!0,enumerable:!0,configurable:!0},keys:{value:function(){return new u(this._list,"key")},writable:!0,enumerable:!0,configurable:!0},values:{value:function(){return new u(this._list,"value")},writable:!0,enumerable:!0,configurable:!0},forEach:{value:function(t){var e=arguments.length>1?arguments[1]:undefined;this._list.forEach(function(r,n){t.call(e,r.value,r.name)})},writable:!0,enumerable:!0,configurable:!0},toString:{value:function(){return n(this._list)},writable:!0,enumerable:!1,configurable:!0}}),"Symbol"in t&&"iterator"in t.Symbol&&(Object.defineProperty(a.prototype,t.Symbol.iterator,{value:a.prototype.entries,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,t.Symbol.iterator,{value:function(){return this},writable:!0,enumerable:!0,configurable:!0})),f)for(var l in f)f.hasOwnProperty(l)&&"function"==typeof f[l]&&(c[l]=f[l]);t.URL=c,t.URLSearchParams=a}(),function(){if("1"!==new t.URLSearchParams([["a",1]]).get("a")||"1"!==new t.URLSearchParams({a:1}).get("a")){var n=t.URLSearchParams;t.URLSearchParams=function(t){if(t&&"object"==typeof t&&e(t)){var o=new n;return r(t).forEach(function(t){if(!e(t))throw TypeError();var n=r(t);if(2!==n.length)throw TypeError();o.append(n[0],n[1])}),o}return t&&"object"==typeof t?(o=new n,Object.keys(t).forEach(function(e){o.set(e,t[e])}),o):new n(t)}}}()}(self),function(t){"use strict";function e(t){if((t=String(t)).match(/[^\x00-\xFF]/))throw TypeError("Not a valid ByteString");return t}function r(t){return(t=String(t)).replace(/([\u0000-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF])/g,function(t){return/^[\uD800-\uDFFF]$/.test(t)?"�":t})}function n(t){return 65535&t}function o(t){return String(t).replace(/[a-z]/g,function(t){return t.toUpperCase()})}function i(t){return"CONNECT"===(t=o(t))||"TRACE"===t||"TRACK"===t}function a(t){var e=o(t);return"DELETE"===e||"GET"===e||"HEAD"===e||"OPTIONS"===e||"POST"===e||"PUT"===e?e:t}function u(t){return/^[!#$%&'*+\-.09A-Z^_`a-z|~]+$/.test(t)}function c(t){return{"accept-charset":!0,"accept-encoding":!0,"access-control-request-headers":!0,"access-control-request-method":!0,connection:!0,"content-length":!0,cookie:!0,cookie2:!0,date:!0,dnt:!0,expect:!0,host:!0,"keep-alive":!0,origin:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,via:!0}[t=String(t).toLowerCase()]||"proxy-"===t.substring(0,6)||"sec-"===t.substring(0,4)}function s(t){return{"set-cookie":!0,"set-cookie2":!0}[t=String(t).toLowerCase()]}function f(t,e){return"accept"===(t=String(t).toLowerCase())||"accept-language"===t||"content-language"===t||"content-type"===t&&-1!==["application/x-www-form-encoded","multipart/form-data","text/plain"].indexOf(e)}function l(t){this._guard="none",this._headerList=[],t&&p(this,t)}function p(t,e){e instanceof l?e._headerList.forEach(function(e){t.append(e[0],e[1])}):Array.isArray(e)?e.forEach(function(e){if(!Array.isArray(e)||2!==e.length)throw TypeError();t.append(e[0],e[1])}):(e=Object(e),Object.keys(e).forEach(function(r){t.append(r,e[r])}))}function h(t){this._headers=t,this._index=0}function y(t){this._stream=t,this.bodyUsed=!1}function v(t,n){if(arguments.length<1)throw TypeError("Not enough arguments");if(y.call(this,null),this.method="GET",this.url="",this.headers=new l,this.headers._guard="request",this.referrer=null,this.mode=null,this.credentials="omit",t instanceof v){if(t.bodyUsed)throw TypeError();t.bodyUsed=!0,this.method=t.method,this.url=t.url,this.headers=new l(t.headers),this.headers._guard=t.headers._guard,this.credentials=t.credentials,this._stream=t._stream}else t=r(t),this.url=String(new URL(t,self.location));if("method"in(n=Object(n))){var o=e(n.method);if(i(o))throw TypeError();this.method=a(o)}"headers"in n&&(this.headers=new l,p(this.headers,n.headers)),"body"in n&&(this._stream=n.body),"credentials"in n&&-1!==["omit","same-origin","include"].indexOf(n.credentials)&&(this.credentials=n.credentials)}function d(t,e){if(arguments.length<1&&(t=""),this.headers=new l,this.headers._guard="response",t instanceof XMLHttpRequest&&"_url"in t){var o=t;return this.type="basic",this.url=r(o._url),this.status=o.status,this.ok=200<=this.status&&this.status<=299,this.statusText=o.statusText,o.getAllResponseHeaders().split(/\r?\n/).filter(function(t){return t.length}).forEach(function(t){var e=t.indexOf(":");this.headers.append(t.substring(0,e),t.substring(e+2))},this),void y.call(this,o.responseText)}y.call(this,t),e=Object(e)||{},this.url="";var i="status"in e?n(e.status):200;if(i<200||i>599)throw RangeError();this.status=i,this.ok=200<=this.status&&this.status<=299;var a="statusText"in e?String(e.statusText):"OK";if(/[^\x00-\xFF]/.test(a))throw TypeError();this.statusText=a,"headers"in e&&p(this.headers,e),this.type="basic"}l.prototype={append:function(t,r){if(t=e(t),!u(t))throw TypeError();if("immutable"===this._guard)throw TypeError();"request"===this._guard&&c(t)||("request-no-CORS"!==this._guard||f(t,r))&&("response"===this._guard&&s(t)||(t=t.toLowerCase(),this._headerList.push([t,r])))},"delete":function(t){if(t=e(t),!u(t))throw TypeError();if("immutable"===this._guard)throw TypeError();if(("request"!==this._guard||!c(t))&&("request-no-CORS"!==this._guard||f(t,"invalid"))&&("response"!==this._guard||!s(t))){t=t.toLowerCase();for(var r=0;r<this._headerList.length;)this._headerList[r][0]===t?this._headerList.splice(r,1):++r}},get:function(t){if(t=e(t),!u(t))throw TypeError();t=t.toLowerCase();for(var r=0;r<this._headerList.length;++r)if(this._headerList[r][0]===t)return this._headerList[r][1];return null},getAll:function(t){if(t=e(t),!u(t))throw TypeError();t=t.toLowerCase();for(var r=[],n=0;n<this._headerList.length;++n)this._headerList[n][0]===t&&r.push(this._headerList[n][1]);return r},has:function(t){if(t=e(t),!u(t))throw TypeError();t=t.toLowerCase();for(var r=0;r<this._headerList.length;++r)if(this._headerList[r][0]===t)return!0;return!1},set:function(t,r){if(t=e(t),!u(t))throw TypeError();if("immutable"===this._guard)throw TypeError();if(("request"!==this._guard||!c(t))&&("request-no-CORS"!==this._guard||f(t,r))&&("response"!==this._guard||!s(t))){t=t.toLowerCase();for(var n=0;n<this._headerList.length;++n)if(this._headerList[n][0]===t){for(this._headerList[n++][1]=r;n<this._headerList.length;)this._headerList[n][0]===t?this._headerList.splice(n,1):++n;return}this._headerList.push([t,r])}}},l.prototype[Symbol.iterator]=function(){return new h(this)},(h.prototype={}).next=function(){return this._index>=this._headers._headerList.length?{value:undefined,done:!0}:{value:this._headers._headerList[this._index++],done:!1}},h.prototype[Symbol.iterator]=function(){return this},y.prototype={arrayBuffer:function(){if(this.bodyUsed)return Promise.reject(TypeError());if(this.bodyUsed=!0,this._stream instanceof ArrayBuffer)return Promise.resolve(this._stream);var t=this._stream;return new Promise(function(e,r){var n=unescape(encodeURIComponent(t)).split("").map(function(t){return t.charCodeAt(0)});e(new Uint8Array(n).buffer)})},blob:function(){return this.bodyUsed?Promise.reject(TypeError()):(this.bodyUsed=!0,this._stream instanceof Blob?Promise.resolve(this._stream):Promise.resolve(new Blob([this._stream])))},formData:function(){return this.bodyUsed?Promise.reject(TypeError()):(this.bodyUsed=!0,this._stream instanceof FormData?Promise.resolve(this._stream):Promise.reject(Error("Not yet implemented")))},json:function(){if(this.bodyUsed)return Promise.reject(TypeError());this.bodyUsed=!0;var t=this;return new Promise(function(e,r){e(JSON.parse(t._stream))})},text:function(){return this.bodyUsed?Promise.reject(TypeError()):(this.bodyUsed=!0,Promise.resolve(String(this._stream)))}},v.prototype=y.prototype,d.prototype=y.prototype,d.redirect=function(){throw Error("Not supported")},"fetch"in t||(t.Headers=l,t.Request=v,t.Response=d,t.fetch=function(t,e){return new Promise(function(r,n){var o=new v(t,e),i=new XMLHttpRequest;i._url=o.url;try{i.open(o.method,o.url,!0)}catch(c){throw TypeError(c.message)}for(var a=o.headers[Symbol.iterator](),u=a.next();!u.done;u=a.next())i.setRequestHeader(u.value[0],u.value[1]);"include"===o.credentials&&(i.withCredentials=!0),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(0===i.status?n(new TypeError("Network error")):r(new d(i)))},i.send(o._stream)})})}(self);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    __webpack_require__(14);
});
// Check for <img srcset="..."> and <picture> support
support('Srcset & Pictures', Modernizr.srcset && Modernizr.picture, function () {
    __webpack_require__(15);
});
// Check for Intersection Observer
support('Intersection Observer', typeof IntersectionObserver !== 'undefined', function () {
    __webpack_require__(16);
});


/***/ }),
/* 4 */
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
exports.push([module.i, ".jscolor-arrow {\r\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\r\n}\r\n\r\n.jscolor-cross {\r\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\r\n}\r\n\r\n.jscolor-hs {\r\n  background: url(" + ___CSS_LOADER_URL___2___ + ") 0 0 no-repeat;\r\n}\r\n\r\n.jscolor-hv {\r\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ") 0 0 no-repeat;\r\n}\r\n", ""]);

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
/* istanbul ignore next  */

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
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

/*! respimage - v1.4.2 - 2015-08-22
 Licensed MIT */
!function(a,b,c){"use strict";function d(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function e(){var b;R=!1,U=a.devicePixelRatio,S={},T={},b=(U||1)*D.xQuant,D.uT||(D.maxX=Math.max(1.3,D.maxX),b=Math.min(b,D.maxX),v.DPR=b),V.width=Math.max(a.innerWidth||0,B.clientWidth),V.height=Math.max(a.innerHeight||0,B.clientHeight),V.vw=V.width/100,V.vh=V.height/100,V.em=v.getEmValue(),V.rem=V.em,o=D.lazyFactor/2,o=o*b+o,q=.4+.1*b,l=.5+.2*b,m=.5+.25*b,p=b+1.3,(n=V.width>V.height)||(o*=.9),I&&(o*=.9),u=[V.width,V.height,b].join("-")}function f(a,b,c){var d=b*Math.pow(a-.4,1.9);return n||(d/=1.3),a+=d,a>c}function g(a){var b,c=v.getSet(a),d=!1;"pending"!=c&&(d=u,c&&(b=v.setRes(c),d=v.applySetCandidate(b,a))),a[v.ns].evaled=d}function h(a,b){return a.res-b.res}function i(a,b,c){var d;return!c&&b&&(c=a[v.ns].sets,c=c&&c[c.length-1]),d=j(b,c),d&&(b=v.makeUrl(b),a[v.ns].curSrc=b,a[v.ns].curCan=d,d.res||_(d,d.set.sizes)),d}function j(a,b){var c,d,e;if(a&&b)for(e=v.parseSet(b),a=v.makeUrl(a),c=0;c<e.length;c++)if(a==v.makeUrl(e[c].url)){d=e[c];break}return d}function k(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[v.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}var l,m,n,o,p,q,r,s,t,u,v={},w=function(){},x=b.createElement("img"),y=x.getAttribute,z=x.setAttribute,A=x.removeAttribute,B=b.documentElement,C={},D={xQuant:1,lazyFactor:.4,maxX:2},E="data-pfsrc",F=E+"set",G="webkitBackfaceVisibility"in B.style,H=navigator.userAgent,I=/rident/.test(H)||/ecko/.test(H)&&H.match(/rv\:(\d+)/)&&RegExp.$1>35,J="currentSrc",K=/\s+\+?\d+(e\d+)?w/,L=/((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,M=/^([\+eE\d\.]+)(w|x)$/,N=/\s*\d+h\s*/,O=a.respimgCFG,P=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),Q="font-size:100%!important;",R=!0,S={},T={},U=a.devicePixelRatio,V={px:1,"in":96},W=b.createElement("a"),X=!1,Y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},Z=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},$=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=Z(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")});return function(b,d){var e;if(!(b in S))if(S[b]=!1,d&&(e=b.match(a)))S[b]=e[1]*V[e[2]];else try{S[b]=new Function("e",c(b))(V)}catch(f){}return S[b]}}(),_=function(a,b){return a.w?(a.cWidth=v.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.x,a},ab=function(c){var d,e,f,g=c||{};if(g.elements&&1==g.elements.nodeType&&("IMG"==g.elements.nodeName.toUpperCase()?g.elements=[g.elements]:(g.context=g.elements,g.elements=null)),g.reparse&&(g.reevaluate=!0,a.console&&console.warn&&console.warn("reparse was renamed to reevaluate!")),d=g.elements||v.qsa(g.context||b,g.reevaluate||g.reselect?v.sel:v.selShort),f=d.length){for(v.setupRun(g),X=!0,e=0;f>e;e++)v.fillImg(d[e],g);v.teardownRun(g)}},bb=Z(function(a){var b=[1,"x"],c=d(a||"");return c&&(c=c.replace(N,""),b=c.match(M)?[1*RegExp.$1,RegExp.$2]:!1),b});if(J in x||(J="src"),C["image/jpeg"]=!0,C["image/gif"]=!0,C["image/png"]=!0,C["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),v.ns=("ri"+(new Date).getTime()).substr(0,9),v.supSrcset="srcset"in x,v.supSizes="sizes"in x,v.supPicture=!!a.HTMLPictureElement,v.supSrcset&&v.supPicture&&!v.supSizes&&!function(a){x.srcset="data:,a",a.src="data:,a",v.supSrcset=x.complete===a.complete,v.supPicture=v.supSrcset&&v.supPicture}(b.createElement("img")),v.selShort="picture>img,img[srcset]",v.sel=v.selShort,v.cfg=D,v.supSrcset&&(v.sel+=",img["+F+"]"),v.DPR=U||1,v.u=V,v.types=C,s=v.supSrcset&&!v.supSizes,v.setSize=w,v.makeUrl=Z(function(a){return W.href=a,W.href}),v.qsa=function(a,b){return a.querySelectorAll(b)},v.matchesMedia=function(){return v.matchesMedia=a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(a){return!a||matchMedia(a).matches}:v.mMQ,v.matchesMedia.apply(this,arguments)},v.mMQ=function(a){return a?$(a):!0},v.calcLength=function(a){var b=$(a,!0)||!1;return 0>b&&(b=!1),b},v.supportsType=function(a){return a?C[a]:!0},v.parseSize=Z(function(a){var b=(a||"").match(L);return{media:b&&b[1],length:b&&b[2]}}),v.parseSet=function(a){if(!a.cands){var b,c,d,e,f,g,h=a.srcset;for(a.cands=[];h;)h=h.replace(/^\s+/g,""),b=h.search(/\s/g),d=null,-1!=b?(c=h.slice(0,b),e=c.charAt(c.length-1),","!=e&&c||(c=c.replace(/,+$/,""),d=""),h=h.slice(b+1),null==d&&(f=h.indexOf(","),-1!=f?(d=h.slice(0,f),h=h.slice(f+1)):(d=h,h=""))):(c=h,h=""),c&&(d=bb(d))&&(g={url:c.replace(/^,+/,""),set:a},g[d[1]]=d[0],"x"==d[1]&&1==d[0]&&(a.has1x=!0),a.cands.push(g))}return a.cands},v.getEmValue=function(){var a;if(!r&&(a=b.body)){var c=b.createElement("div"),d=B.style.cssText,e=a.style.cssText;c.style.cssText=P,B.style.cssText=Q,a.style.cssText=Q,a.appendChild(c),r=c.offsetWidth,a.removeChild(c),r=parseFloat(r,10),B.style.cssText=d,a.style.cssText=e}return r||16},v.calcListLength=function(a){if(!(a in T)||D.uT){var b,c,e,f,g,h,i=d(a).split(/\s*,\s*/),j=!1;for(g=0,h=i.length;h>g&&(b=i[g],c=v.parseSize(b),e=c.length,f=c.media,!e||!v.matchesMedia(f)||(j=v.calcLength(e))===!1);g++);T[a]=j?j:V.width}return T[a]},v.setRes=function(a){var b;if(a){b=v.parseSet(a);for(var c=0,d=b.length;d>c;c++)_(b[c],a.sizes)}return b},v.setRes.res=_,v.applySetCandidate=function(a,b){if(a.length){var c,d,e,g,j,k,n,r,s,t,w,x,y,z=b[v.ns],A=u,B=o,C=q;if(r=z.curSrc||b[J],s=z.curCan||i(b,r,a[0].set),d=v.DPR,y=s&&s.res,!n&&r&&(x=I&&!b.complete&&s&&y-.2>d,x||s&&!(p>y)||(s&&d>y&&y>l&&(m>y&&(B*=.8,C+=.04*d),s.res+=B*Math.pow(y-C,2)),t=!z.pic||s&&s.set==a[0].set,s&&t&&s.res>=d&&(n=s))),!n)for(y&&(s.res=s.res-(s.res-y)/2),a.sort(h),k=a.length,n=a[k-1],e=0;k>e;e++)if(c=a[e],c.res>=d){g=e-1,n=a[g]&&(j=c.res-d)&&(x||r!=v.makeUrl(c.url))&&f(a[g].res,j,d)?a[g]:c;break}return y&&(s.res=y),n&&(w=v.makeUrl(n.url),z.curSrc=w,z.curCan=n,w!=r&&v.setSrc(b,n),v.setSize(b)),A}},v.setSrc=function(a,b){var c;a.src=b.url,G&&(c=a.style.zoom,a.style.zoom="0.999",a.style.zoom=c)},v.getSet=function(a){var b,c,d,e=!1,f=a[v.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&v.matchesMedia(c.media)&&(d=v.supportsType(c.type))){"pending"==d&&(c=d),e=c;break}return e},v.parseSets=function(a,b,d){var e,f,g,h,i="PICTURE"==b.nodeName.toUpperCase(),l=a[v.ns];(l.src===c||d.src)&&(l.src=y.call(a,"src"),l.src?z.call(a,E,l.src):A.call(a,E)),(l.srcset===c||!v.supSrcset||a.srcset||d.srcset)&&(e=y.call(a,"srcset"),l.srcset=e,h=!0),l.sets=[],i&&(l.pic=!0,k(b,l.sets)),l.srcset?(f={srcset:l.srcset,sizes:y.call(a,"sizes")},l.sets.push(f),g=(s||l.src)&&K.test(l.srcset||""),g||!l.src||j(l.src,f)||f.has1x||(f.srcset+=", "+l.src,f.cands.push({url:l.src,x:1,set:f}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(i||f&&!v.supSrcset||g),h&&v.supSrcset&&!l.supported&&(e?(z.call(a,F,e),a.srcset=""):A.call(a,F)),l.supported&&!l.srcset&&(!l.src&&a.src||a.src!=v.makeUrl(l.src))&&(null==l.src?a.removeAttribute("src"):a.src=l.src),l.parsed=!0},v.fillImg=function(a,b){var c,d,e=b.reselect||b.reevaluate;if(a[v.ns]||(a[v.ns]={}),d=a[v.ns],e||d.evaled!=u){if(!d.parsed||b.reevaluate){if(c=a.parentNode,!c)return;v.parseSets(a,c,b)}d.supported?d.evaled=u:g(a)}},v.setupRun=function(b){(!X||R||U!=a.devicePixelRatio)&&(e(),b.elements||b.context||clearTimeout(t))},v.supPicture?(ab=w,v.fillImg=w):(b.createElement("picture"),function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";h=setTimeout(e,"loading"==a?200:999),b.body&&(c=c||d.test(a),v.fillImgs(),c&&clearTimeout(h))},f=function(){v.fillImgs()},g=function(){clearTimeout(t),R=!0,t=setTimeout(f,99)},h=setTimeout(e,b.body?0:20);Y(a,"resize",g),Y(b,"readystatechange",e)}()),v.respimage=ab,v.fillImgs=ab,v.teardownRun=w,ab._=v,a.respimage=a.picturefill||ab,!a.picturefill)for(a.respimgCFG={ri:v,push:function(a){var b=a.shift();"function"==typeof v[b]?v[b].apply(v,a):(D[b]=a[0],X&&v.fillImgs({reselect:!0}))}};O&&O.length;)a.respimgCFG.push(O.shift());a.picturefill||(a.picturefill=a.respimage,a.picturefillCFG||(a.picturefillCFG=a.respimgCFG))}(window,document);

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Polyfill for Object.assign
__webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21).polyfill();


/***/ }),
/* 21 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var cssVars = __webpack_require__(24);
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
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * css-vars-ponyfill
 * v2.1.1
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
            var isShadowElm = Boolean(settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host);
            if (isNativeSupport && settings.onlyLegacy) {
                if (settings.updateDOM) {
                    var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
                    Object.keys(settings.variables).forEach(function(key) {
                        targetElm.style.setProperty(key, settings.variables[key]);
                    });
                }
            } else if (isShadowElm && !isShadowDOMReady) {
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
                                        parseHost: isShadowElm,
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
                                            rootElement: elm.shadowRoot,
                                            variables: variableStore.dom
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
/* 25 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26).setImmediate))

/***/ }),
/* 26 */
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
__webpack_require__(27);
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
/* 27 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(28)))

/***/ }),
/* 28 */
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


/***/ })
/******/ ]);