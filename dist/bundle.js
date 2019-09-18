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
__webpack_require__(18);
//#endregion Libraries
//#region Polyfills
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
/***/ (function(module, exports) {

/**
 * better-dom: Live extension playground
 * @version 4.0.0 Wed, 04 Jul 2018 18:30:49 GMT
 * @link https://github.com/chemerisuk/better-dom
 * @copyright 2018 Maksim Chemerisuk
 * @license MIT
 */
!function(){"use strict";function t(t){return t.ownerDocument.defaultView.getComputedStyle(t)}function e(t){if(t&&t.nodeType===E)return t.ownerDocument.getElementsByTagName("head")[0].appendChild(t)}function n(t,e,n){void 0===n&&(n="$Element");var r="http://chemerisuk.github.io/better-dom/"+n+".html#"+t,i="invalid call `"+n+("DOM"===n?".":"#")+t+"(";i+=O.call(e,String).join(", ")+")`. ",this.message=i+"Check "+r+" to verify the arguments"}function r(t,e){n.call(this,t,e,"DOM")}function i(t,e){n.call(this,t,e,"$Document")}function o(t){t&&(this[0]=t,t.__40000__=this)}function s(t){if(!(this instanceof s))return t?t.__40000__||new s(t):new s;o.call(this,t);var n=t.createElement("style");n.innerHTML=P,e(n),t[N]=n.sheet||n.styleSheet}function a(t){return this instanceof a?void o.call(this,t):t?t.__40000__||new a(t):new a}function c(t){return function(e){var r=this[0];if(!r||"string"!=typeof e)throw new n("create"+t,arguments);var i=t?[]:null,o=!i&&H.exec(e);if(o)return new a(r.createElement(o[1]));U.innerHTML=e.trim();for(var s;s=U.firstElementChild;){if(U.removeChild(s),r!==g&&(s=r.adoptNode(s)),!i){i=new a(s);break}i.push(new a(s))}return i||new a}}function f(t,e){var n=a(e),r=t.constructor;Object.keys(t).forEach(function(e){var i=t[e];i!==r&&(n[e]=i)}),r&&r.call(n)}function u(t,e){return function(r){if(r&&typeof r!==e)throw new n(t,arguments);var i=this[0],o=q(r),s=i?i.children:[];return"number"==typeof r?(r<0&&(r=s.length+r),a(s[r])):o?D.call(s,o).map(a):O.call(s,a)}}function p(t,e,n){return function(){var r=this,i=this[0];if(!i||e&&!i.parentNode)return this;for(var o=t?"":i.ownerDocument.createDocumentFragment(),c=arguments.length,f=new Array(c),u=0;u<c;u++)f[u]=arguments[u];return f.forEach(function(t){"function"==typeof t&&(t=t(r)),"string"==typeof t?"string"==typeof o?o+=t.trim():t=s(i.ownerDocument).createAll(t):t instanceof a&&(t=[t]),k(t)&&("string"==typeof o&&(t=s(i.ownerDocument).createAll(o).concat(t),o=i.ownerDocument.createDocumentFragment()),t.forEach(function(t){o.appendChild(t[0])}))}),"string"==typeof o?i.insertAdjacentHTML(t,o):n(i,o),this}}function l(t,e,r){return function(i){if(i&&"string"!=typeof i)throw new n(t,arguments);var o=this[0],s=r?[]:null;if(o){var c=q(i);!o||c&&"closest"===t||(o=o[e]);for(var f=o;f;f=f[e])if(!c||c(f)){if(!s){s=a(f);break}s.push(a(f))}}return s||new a}}function h(t,e){this.node=t,this.style=t.style,this.eventType=e?rt:nt,this.animationName=e}function y(e,r){return function(i,o){var s=this;if("string"!=typeof i&&(o=i,i=null),o&&"function"!=typeof o)throw new n(e,arguments);var a=this[0];if(!a)return this;var c=t(a);if(a&&c.width){var f=function(){a.style.visibility=r?"hidden":"inherit","function"==typeof o&&o(s)};a.ownerDocument.documentElement.contains(a)&&(i||0!==parseFloat(c["transition-duration"]))?i&&0===parseFloat(c["animation-duration"])?j(f):(a.style.visibility="visible",new it(a,i).start(f,r?"normal":"reverse")):j(f)}return this.set("aria-hidden",String(r))}}function v(t,e){return function(r){if("string"!=typeof r)throw new n(t,arguments);var i=this[0];if(!i)return e?[]:new o;var c,f,u,p,l=ot.exec(r);return l?(c=l[1]?i.getElementsByTagName(r):i.getElementsByClassName(l[2]),c&&!e&&(c=c[0])):(f=!0,p=i,this instanceof s||((f=i.getAttribute("id"))?u=f.replace(st,"\\$&"):(u="___40000__",i.setAttribute("id",u)),u="[id='"+u+"'] ",r=u+r.split(",").join(","+u)),c=p["querySelector"+e](r),f||i.removeAttribute("id")),e?O.call(c,a):a(c)}}function m(t,e,n,r){this.context=t,this.node=e,this.options=n,this.args=r,n.selector&&(this.matcher=q(n.selector,e))}var d=window,g=document,w=g.documentElement,b=0,E=g.ELEMENT_NODE,A=g.DOCUMENT_NODE,C=["Webkit","O","Moz","ms"],T="v__40000__",N="__40000__sheet",x=d.WebKitAnimationEvent?"-webkit-":"",S=Array.prototype,L=S.every,_=S.forEach,D=S.filter,O=S.map,k=(S.slice,Array.isArray),M=Object.keys,j=d.requestAnimationFrame;n.prototype=new TypeError,r.prototype=new TypeError,i.prototype=new TypeError,o.prototype={toString:function(){return""},valueOf:function(){return b}};var P="@"+x+"keyframes "+T+" {from {opacity:.99} to {opacity:1}}",B=new o;s.prototype=B,B.valueOf=function(){var t=this[0];return t?A:b},B.toString=function(){return"#document"};var I=new o;a.prototype=I,I.valueOf=function(){var t=this[0];return t?E:b},I.toString=function(){var t=this[0];return t?"<"+t.tagName.toLowerCase()+">":"#unknown"};var F=new s(d.document),R=d.DOM;F.constructor=function(t){var e=t&&t.nodeType;return e===E?a(t):e===A?s(t):new o},F.noConflict=function(){return d.DOM===F&&(d.DOM=R),F},d.DOM=F;var H=/^<([a-zA-Z-]+)\/?>$/,U=g.createElement("body");s.prototype.create=c(""),s.prototype.createAll=c("All");var $=/^(\w*)(?:#([\w\-]+))?(?:\[([\w\-\=]+)\])?(?:\.([\w\-]+))?$/,z=C.concat(null).map(function(t){return(t?t.toLowerCase()+"M":"m")+"atchesSelector"}).reduceRight(function(t,e){return t||e in w&&e},null),q=function(t,e){if("string"!=typeof t)return null;var n=$.exec(t);return n&&(n[1]&&(n[1]=n[1].toLowerCase()),n[3]&&(n[3]=n[3].split("=")),n[4]&&(n[4]=" "+n[4]+" ")),function(r){var i,o;for(n||z||(o=(e||r.ownerDocument).querySelectorAll(t));r&&1===r.nodeType;r=r.parentNode){if(n)i=(!n[1]||r.nodeName.toLowerCase()===n[1])&&(!n[2]||r.id===n[2])&&(!n[3]||(n[3][1]?r.getAttribute(n[3][0])===n[3][1]:r.hasAttribute(n[3][0])))&&(!n[4]||(" "+r.className+" ").indexOf(n[4])>=0);else if(z)i=r[z](t);else for(var s=0,a=o.length;s<a;++s){var a=o[s];if(a===r)return a}if(i||!e||r===e)break}return i&&r}},W=[],X=x?"webkitAnimationStart":"animationstart",K=[x+"animation-name:"+T+" !important",x+"animation-duration:1ms !important"].join(";");s.prototype.extend=function(t,e){var n=this[0];if(!n)return this;if(1===arguments.length&&"object"==typeof t)return M(t).forEach(function(e){s.prototype[e]=t[e]}),this;if("*"===t)return M(e).forEach(function(t){a.prototype[t]=e[t]}),this;if("function"==typeof e&&(e={constructor:e}),!e||"object"!=typeof e)throw new i("extend",arguments);var r=q(t);W.push([r,e]),n.addEventListener(X,function(t){var n=t.target;t.animationName===T&&r(n)&&(t.stopPropagation(),n.style.setProperty(x+"animation-name","none","important"),f(e,n))},!0),_.call(n.querySelectorAll(t),function(t){t.style.setProperty(x+"animation-name","none","important"),d.setTimeout(function(){f(e,t)},0)}),this.importStyles(t,K)},s.prototype.mock=function(t){if(!t)return new a;var e=this.create(t),n=function r(t){W.forEach(function(e){var n=e[0],r=e[1];n(t)&&f(r,t)}),_.call(t.children,r)};return W.length&&n(e[0]),e},s.prototype.importScripts=function(){for(var t=this,n=arguments,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];var a=function c(){var r=t[0];if(r){var s,a=o.shift(),f=typeof a;if("string"===f)s=r.createElement("script"),s.src=a,s.onload=c,s.async=!0,e(s);else if("function"===f)a();else if(a)throw new i("importScripts",n)}};a()},s.prototype.importStyles=function(t,e){var n=this[0];if(n){if(e||"string"!=typeof t||(e=t,t="@media screen"),"string"!=typeof t||"string"!=typeof e)throw new i("importStyles",arguments);var r=n[N],o=r.cssRules.length;t.split(",").forEach(function(t){try{o=r.insertRule(t+"{"+e+"}",o)}catch(n){}})}},a.prototype.child=u("child","number"),a.prototype.children=u("children","string");var V=/[\n\t\r]/g,Y=function(t){return(" "+t.className+" ").replace(V," ")};a.prototype.hasClass=function(t){if("string"!=typeof t)throw new n("hasClass",arguments);var e=this[0];return!!e&&(e.classList?e.classList.contains(t):Y(e).indexOf(" "+t+" ")>=0)},a.prototype.addClass=function(){for(var t=this,e=arguments,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=this[0];return s&&i.forEach(function(r){if("string"!=typeof r)throw new n("addClass",e);s.classList?s.classList.add(r):t.hasClass(r)||(t[0].className+=" "+r)}),this},a.prototype.removeClass=function(){for(var t=arguments,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=this[0];return o&&r.forEach(function(e){if("string"!=typeof e)throw new n("removeClass",t);o.classList?o.classList.remove(e):o.className=Y(o).replace(" "+e+" "," ").trim()}),this},a.prototype.toggleClass=function(t,e){if("string"!=typeof t)throw new n("toggleClass",arguments);"boolean"!=typeof e&&(e=!this.hasClass(t));var r=this[0];return r&&(e?this.addClass(t):this.removeClass(t)),e};var Z=/\-./g,G={get:{},set:{},find:function(t,e){var n=t.replace(Z,function(t){return t[1].toUpperCase()});return n in e||(n=C.map(function(t){return t+n[0].toUpperCase()+n.slice(1)}).filter(function(t){return t in e})[0]),this.get[t]=this.set[t]=n}},J=["Top","Right","Bottom","Left"],Q={font:["fontStyle","fontSize","/","lineHeight","fontFamily"],padding:J.map(function(t){return"padding"+t}),margin:J.map(function(t){return"margin"+t}),"border-width":J.map(function(t){return"border"+t+"Width"}),"border-style":J.map(function(t){return"border"+t+"Style"})};G.get["float"]=G.set["float"]="cssFloat","fill-opacity font-weight line-height opacity orphans widows z-index zoom".split(" ").forEach(function(t){var e=t.replace(Z,function(t){return t[1].toUpperCase()});G.get[t]=e,G.set[t]=function(t,n){n[e]=t.toString()}}),M(Q).forEach(function(t){var e=Q[t];G.get[t]=function(t){var n=[],r=function(e,r){return n.push("/"===e?e:t[e]),!n[r]};return e.some(r)?"":n.join(" ")},G.set[t]=function(n,r){n&&"cssText"in r?r.cssText+=";"+t+":"+n:e.forEach(function(t){return r[t]="number"==typeof n?n+"px":n.toString()})}});var tt=G;a.prototype.css=function(e,r){var i=this,o=arguments.length,s=this[0];if(s){var a,c=s.style;if(1===o&&("string"==typeof e||k(e))){var f=function(e){var n=tt.get[e]||tt.find(e,c),r="function"==typeof n?n(c):c[n];return r||(a||(a=t(s)),r="function"==typeof n?n(a):a[n]),r};return"string"==typeof e?f(e):e.map(f).reduce(function(t,n,r){return t[e[r]]=n,t},{})}if(2===o&&"string"==typeof e){var u=tt.set[e]||tt.find(e,c);"function"==typeof r&&(r=r(this)),null==r&&(r=""),"function"==typeof u?u(r,c):c[u]="number"==typeof r?r+"px":r.toString()}else{if(1!==o||!e||"object"!=typeof e)throw new n("css",arguments);M(e).forEach(function(t){i.css(t,e[t])})}return this}return 1===o&&k(e)?{}:1!==o||"string"!=typeof e?this:void 0},a.prototype.after=p("afterend",!0,function(t,e){t.parentNode.insertBefore(e,t.nextSibling)}),a.prototype.before=p("beforebegin",!0,function(t,e){t.parentNode.insertBefore(e,t)}),a.prototype.prepend=p("afterbegin",!1,function(t,e){t.insertBefore(e,t.firstChild)}),a.prototype.append=p("beforeend",!1,function(t,e){t.appendChild(e)}),a.prototype.replace=p("",!0,function(t,e){t.parentNode.replaceChild(e,t)}),a.prototype.remove=p("",!0,function(t){t.parentNode.removeChild(t)});var et={":focus":function(t){return t===t.ownerDocument.activeElement}};a.prototype.matches=function(t){if(!t||"string"!=typeof t)throw new n("matches",arguments);var e=et[t]||q(t);return!!e(this[0])},a.prototype.offset=function(){var t=this[0],e={top:0,left:0,right:0,bottom:0,width:0,height:0};if(t){var n=(t.ownerDocument||t).documentElement,r=n.clientTop,i=n.clientLeft,o=d.pageYOffset||n.scrollTop,s=d.pageXOffset||n.scrollLeft,a=t.getBoundingClientRect();e.top=a.top+o-r,e.left=a.left+s-i,e.right=a.right+s-i,e.bottom=a.bottom+o-r,e.width=a.right-a.left,e.height=a.bottom-a.top}return e},a.prototype.next=l("next","nextElementSibling"),a.prototype.prev=l("prev","previousElementSibling"),a.prototype.nextAll=l("nextAll","nextElementSibling",!0),a.prototype.prevAll=l("prevAll","previousElementSibling",!0),a.prototype.closest=l("closest","parentNode"),a.prototype.value=function(t){var e=this[0];if(!e)return t?this:void 0;var n=e.tagName;if(void 0===t)return"SELECT"===n?~e.selectedIndex?e.options[e.selectedIndex].value:"":"OPTION"===n?e.hasAttribute("value")?e.value:e.text:"INPUT"===n||"TEXTAREA"===n?e.value:e.textContent;switch(n){case"INPUT":case"OPTION":case"TEXTAREA":"function"==typeof t&&(t=t(e.value)),e.value=t;break;case"SELECT":"function"==typeof t&&(t=t(e.value)),L.call(e.options,function(e){return!(e.selected=e.value===t)})&&(e.selectedIndex=-1);break;default:"function"==typeof t&&(t=t(e.textContent)),e.textContent=t}return this},a.prototype.empty=function(){return this.value("")};var nt=x?"webkitTransitionEnd":"transitionend",rt=x?"webkitAnimationEnd":"animationend";h.prototype={handleEvent:function(t){this.animationName&&t.animationName!==this.animationName||(this.animationName&&(this.style.animationName="",this.style.animationDirection=""),this.node.removeEventListener(this.eventType,this,!0),"function"==typeof this.callback&&this.callback())},start:function(t,e){this.callback=t,this.animationName&&(this.style.animationName=this.animationName,this.style.animationDirection=e),this.node.addEventListener(this.eventType,this,!0)}};var it=h;a.prototype.show=y("show",!1),a.prototype.hide=y("hide",!0),o.prototype.clone=function(t){if("boolean"!=typeof t)throw new n("clone",arguments);var e=this[0];if(e){var r=e.cloneNode(t);if(this instanceof a)return new a(r);if(this instanceof s)return new s(r)}return new o},o.prototype.contains=function(t){var e=this[0];if(!e)return!1;if(t instanceof a){var r=t[0];return r===e||(e.contains?e.contains(r):16&e.compareDocumentPosition(r))}throw new n("contains",arguments)};var ot=/^(?:(\w+)|\.([\w\-]+))$/,st=/'|\\/g;o.prototype.find=v("find",""),o.prototype.findAll=v("findAll","All");var at={};"onfocusin"in w?(at.focus=function(t){t._type="focusin"},at.blur=function(t){t._type="focusout"}):at.focus=at.blur=function(t){t.options.capture=!0},g.createElement("input").validity&&(at.invalid=function(t){t.options.capture=!0});var ct=at,ft=!1;try{var ut=Object.defineProperty({},"passive",{get:function(){ft=!0}});d.addEventListener("test",null,ut)}catch(pt){}m.prototype={handleEvent:function(t){if(this.event=t,this.currentTarget=this.matcher?this.matcher(t.target):this.node,this.currentTarget){this.options.once===!0&&this.unsubscribe();var e=this.args.map(this.getEventProperty,this);this.callback.apply(this.context,e)===!1&&t.preventDefault()}},getEventProperty:function(t){var e=arguments,n=this.event;if("type"===t)return this.type;if("target"===t||"relatedTarget"===t)return a(n[t]);if("currentTarget"===t)return a(this.currentTarget);var r=n[t];return"function"==typeof r?function(){return r.apply(n,e)}:r},subscribe:function(t,e){var n=ct[t];this.type=t,this.callback=e,n&&n(this),this.node.addEventListener(this._type||this.type,this,this.getLastArgument())},unsubscribe:function(){this.node.removeEventListener(this._type||this.type,this,this.getLastArgument())},getLastArgument:function(){var t=!!this.options.capture;return this.options.passive&&ft&&(t={passive:!0,capture:t}),t}};var lt=m;o.prototype.fire=function(t,e){var r,i,o,s=this[0];if("string"!=typeof t)throw new n("fire",arguments);var a=ct[t],c={options:{}};if(a&&(c=a(c)||c),i=c._type||t,!s)return!0;if(r=(s.ownerDocument||s).createEvent("CustomEvent"),r.initCustomEvent(i,!0,!0,e),o=s.dispatchEvent(r),o&&s[t]){var f=lt.prototype.handleEvent;lt.prototype.handleEvent=function(e){if(this.type!==t)return f.call(this,e)},s[t](),lt.prototype.handleEvent=f}return o};var ht={get:{},set:{}};"tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" ").forEach(function(t){ht.get[t.toLowerCase()]=function(e){return e[t]}}),ht.get.style=function(t){return t.style.cssText},ht.set.style=function(t,e){t.style.cssText=e},ht.get.type=function(t){return t.getAttribute("type")||t.type};var yt=ht;o.prototype.get=function(t,e){var r,i=this,o=this[0],s=yt.get[t];if(!o)return r;if(0===arguments.length)return o.innerHTML;if(s)r=s(o,t);else if("string"==typeof t)r=t in o?o[t]:this instanceof a?o.getAttribute(t):null;else{if(!k(t))throw new n("get",arguments);r=t.reduce(function(t,e){return t[e]=i.get(e),t},{})}return null!=r?r:e},o.prototype.on=function(t,e,r,i){if("string"==typeof t&&("string"==typeof e?e={selector:e}:"function"==typeof e?(i=e,e={},r=[]):"object"==typeof e&&k(e)&&(i=r,r=e,e={}),"function"==typeof r&&(i=r,r=[]),e&&"object"==typeof e&&"function"==typeof i)){var o=this[0];if(!o)return function(){};var s=new lt(this,o,e,r);return s.subscribe(t,i),function(){return s.unsubscribe()}}throw new n("on",arguments)},o.prototype.set=function(t,e){var r=this,i=this[0],o=arguments.length,s=yt.set[t];if(i)if("string"==typeof t)1===o&&(e=t,t="innerHTML"),"function"==typeof e&&(e=e(this.get(t))),s?s(i,e):null==e&&this instanceof a?i.removeAttribute(t):t in i?i[t]=e:this instanceof a&&i.setAttribute(t,e);else if(k(t))1===o?(i.textContent="",this.append.apply(this,t)):t.forEach(function(t){r.set(t,e)});else{if("object"!=typeof t)throw new n("set",arguments);M(t).forEach(function(e){r.set(e,t[e])})}return this}}();

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
!function(){"use strict";function t(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")}function e(t){var e=new Date((t||"?")+"T00:00");return isNaN(e.getTime())?null:e}var i="dateinput-picker{display:inline-block;vertical-align:bottom}dateinput-picker>object{position:absolute;z-index:1000;width:21rem;height:20rem;max-height:20rem;box-shadow:0 8px 24px #888;background:#fff;opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transform-origin:0 0;transform-origin:0 0;transition:.1s ease-out}dateinput-picker[aria-hidden=true]>object{opacity:0;-webkit-transform:skew(-25deg) scaleX(.75);transform:skew(-25deg) scaleX(.75);visibility:hidden;height:0}dateinput-picker[aria-expanded=true]>object{height:13.75rem;max-height:13.75rem}dateinput-picker+input{color:transparent!important;caret-color:transparent!important}dateinput-picker+input::selection{background:none}dateinput-picker+input::-moz-selection{background:none}",n=DOM.find("html"),a=n.get("lang")||void 0,r="orientation"in window?"mobile":"desktop",s=function(){return"_"!==DOM.create("<input type='date'>").value("_").value()}(),o=DOM.findAll("meta[name^='data-format:']").reduce(function(t,e){var i=e.get("name").split(":")[1].trim(),n=JSON.parse(e.get("content"));if(i)try{t[i]=new window.Intl.DateTimeFormat(a,n)}catch(r){}return t},{});DOM.extend("input[type=date]",{constructor:function(){if(this._isPolyfillEnabled())return!1;var t=this.css(["color","font-size","font-family","font-style","line-height","padding-left","border-left-width","text-indent"]);t.dx=["padding-left","border-left-width","text-indent"].map(function(e){return parseFloat(t[e])}).reduce(function(t,e){return t+e}),t.css=["font-family","font-style","line-height","font-size"].map(function(e){return e+":"+t[e]}).join(";").replace(/"/g,""),this._backgroundTemplate=('<svg xmlns="http://www.w3.org/2000/svg"><text x="'+t.dx+'" y="50%" dy=".35em" fill="'+t.color+'"></text></svg>').replace("></",' style="'+t.css+'"></');var e=DOM.create("<dateinput-picker tabindex='-1'>");e._parentInput=this,this.before(e.hide()),this._picker=e;var i=this._syncDisplayedText.bind(this,"defaultValue"),n=this._syncDisplayedText.bind(this,"value"),a=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");Object.defineProperty(this[0],"value",{configurable:!1,enumerable:!0,get:a.get,set:this._setValue.bind(this,a.set,n)}),Object.defineProperty(this[0],"valueAsDate",{configurable:!1,enumerable:!0,get:this._getValueAsDate.bind(this),set:this._setValueAsDate.bind(this)}),this.on("change",n),this.on("focus",this._focusInput.bind(this)),this.on("blur",this._blurInput.bind(this)),this.on("keydown",["which"],this._keydownInput.bind(this)),this.on("click",this._focusInput.bind(this)),this.closest("form").on("reset",i),i()},_isPolyfillEnabled:function(){var t=this.get("data-polyfill");return"none"===t||(!t||t!==r&&"all"!==t?s:(this.set("type","text"),!1))},_setValue:function(i,n,a){var r=e(a);if(r){var s=new Date((this.get("min")||"?")+"T00:00"),o=new Date((this.get("max")||"?")+"T00:00");r<s?a=t(s):r>o&&(a=t(o))}else a="";i.call(this[0],a),n()},_getValueAsDate:function(){return e(this.value())},_setValueAsDate:function(e){e instanceof Date&&!isNaN(e.getTime())&&this.value(t(e))},_syncDisplayedText:function(t){var i=this.get(t),n=e(i);if(n){var r=this.get("data-format"),s=o[r];try{var l=new Date(n.getFullYear(),n.getMonth(),n.getDate(),12);i=s?s.format(l):l.toLocaleDateString(a,r?JSON.parse(r):{})}catch(h){}}this.css("background-image","url('data:image/svg+xml,"+encodeURIComponent(this._backgroundTemplate.replace("></",">"+i+"</"))+"')")},_keydownInput:function(e){if(13===e&&"true"===this._picker.get("aria-hidden"))return!0;if(32===e)this.get("readonly")||(this._picker.toggleState(!1),this._picker.invalidateState(),"true"===this._picker.get("aria-hidden")?this._picker.show():this._picker.hide());else if(27===e||9===e||13===e)this._picker.hide();else if(8===e||46===e)this.empty().fire("change");else if(17===e)this._picker.toggleState(),this._picker.invalidateState();else{var i;if(74===e||40===e?i=7:75===e||38===e?i=-7:76===e||39===e?i=1:72!==e&&37!==e||(i=-1),i){var n=this.get("valueAsDate")||new Date,a="true"===this._picker.get("aria-expanded");!a||40!==e&&38!==e?!a||37!==e&&39!==e?n.setDate(n.getDate()+i):n.setMonth(n.getMonth()+(i>0?1:-1)):n.setMonth(n.getMonth()+(i>0?4:-4)),this.value(t(n)).fire("change")}}return 9===e},_blurInput:function(){this._picker.hide()},_focusInput:function(){if(this.get("readonly"))return!1;var t=this.offset(),e=this._picker.offset(),i=t.height;n.get("clientHeight")<t.bottom+e.height&&(i=-e.height),this._picker.toggleState(!1),this._picker.invalidateState(),this._picker.css("margin-top",i).show()}}),DOM.importStyles(i)}(),function(){"use strict";function t(t,e){return"string"==typeof e?Array(t+1).join(e):Array.apply(null,Array(t)).map(e).join("")}function e(t,e){return"en-US"===o?t:e}function i(t){var i=new Date;if(i.setDate(i.getDate()-i.getDay()+t+e(0,1)),h)try{return i.toLocaleDateString(o,{weekday:"short"})}catch(n){}return i.toUTCString().split(",")[0].slice(0,2)}function n(t){var e=new Date(null,t);if(h)try{return e.toLocaleDateString(o,{month:"short"})}catch(i){}return e.toUTCString().split(" ")[2]}function a(t){var e=new Date(t.getFullYear(),t.getMonth(),12);if(h)try{return e.toLocaleDateString(o,{month:"long",year:"numeric"})}catch(i){}return e.toUTCString().split(" ").slice(2,4).join(" ")}var r="body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:2.5rem;text-align:center;cursor:default;-webkit-user-select:none;-ms-user-select:none;user-select:none;margin:0;overflow:hidden}a{position:absolute;width:3rem;height:2.5rem}a[rel=prev]{left:0}a[rel=next]{right:0}b{display:block;cursor:pointer}table{width:100%;table-layout:fixed;border-spacing:0;border-collapse:collapse;text-align:center;line-height:2.5rem}table+table{line-height:3.75rem;background:#fff;position:absolute;top:2.5rem;left:0;opacity:1;transition:.1s ease-out}table+table[aria-hidden=true]{visibility:hidden!important;opacity:0}td,th{padding:0}thead{background:#ddd;font-size:smaller;font-weight:700}[aria-selected=false],[aria-disabled=true]{color:#888}[aria-selected=true]{box-shadow:inset 0 0 0 1px #888}a:hover,td:hover,[aria-disabled=true],[aria-selected=true]{background-color:#f5f5f5}",s=DOM.find("html"),o=s.get("lang")||void 0,l="orientation"in window?"touchend":"mousedown",h=function(){try{(new Date).toLocaleString("_")}catch(t){return t instanceof RangeError}return!1}(),c='<a rel="prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="100%" viewBox="0 0 16 16"><path d="M11.5 14.06L1 8L11.5 1.94z"/></svg></a><a rel="next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="100%" viewBox="0 0 16 16"><path d="M15 8L4.5 14.06L4.5 1.94z"/></svg></a><b></b><table><thead>'+t(7,function(t,e){return"<th>"+i(e)})+"</thead><tbody>"+t(7,"<tr>"+t(7,"<td>")+"</tr>")+"</tbody></table><table><tbody>"+t(3,function(e,i){return"<tr>"+t(4,function(t,e){return"<td>"+n(4*i+e)})})+"</tbody></table>";DOM.extend("dateinput-picker",{constructor:function(){var t="ScriptEngineMajorVersion"in window,e=DOM.create("<object type='text/html' width='100%' height='100%'>");t||e.set("data","about:blank"),this.on("load",{capture:!0,once:!0},["target"],this._loadContent.bind(this)),this.append(e),t&&e.set("data","about:blank")},_loadContent:function(t){var e=DOM.constructor(t.get("contentDocument")),i=e.find("body");e.importStyles(r),i.set(c),this._calendarDays=i.find("table"),this._calendarMonths=i.find("table+table"),this._calendarCaption=i.find("b"),this._calendarDays.on("picker:invalidate",["detail"],this._invalidateDays.bind(this)),this._calendarMonths.on("picker:invalidate",["detail"],this._invalidateMonths.bind(this)),i.on("picker:invalidate",["detail"],this._invalidateCaption.bind(this)),i.on(l,"a",["currentTarget"],this._clickPickerButton.bind(this)),i.on(l,"td",["target"],this._clickPickerDay.bind(this)),this._calendarCaption.on(l,this._clickCaption.bind(this)),i.on(l,function(){return!1}),this._parentInput.on("change",this.invalidateState.bind(this)),DOM.get("activeElement")===this._parentInput[0]&&this.show()},_invalidateDays:function(t){var i=t.getMonth(),n=t.getDate(),a=t.getFullYear(),r=new Date((this._parentInput.get("min")||"?")+"T00:00"),s=new Date((this._parentInput.get("max")||"?")+"T00:00"),o=new Date(a,i,1);o.setDate(1-o.getDay()-e(1,0===o.getDay()?7:0)),this._calendarDays.findAll("td").forEach(function(t){o.setDate(o.getDate()+1);var e=i-o.getMonth(),l=null,h=null;a!==o.getFullYear()&&(e*=-1),o<r||o>s?h="true":e>0||e<0?l="false":n===o.getDate()&&(l="true"),t._ts=o.getTime(),t.set("aria-selected",l),t.set("aria-disabled",h),t.value(o.getDate())})},_invalidateMonths:function(t){var e=t.getMonth(),i=t.getFullYear(),n=new Date((this._parentInput.get("min")||"?")+"T00:00"),a=new Date((this._parentInput.get("max")||"?")+"T00:00"),r=new Date(i,e,1);this._calendarMonths.findAll("td").forEach(function(t,i){r.setMonth(i);var s=e-r.getMonth(),o=null;r<n||r>a?o="false":s||(o="true"),t._ts=r.getTime(),t.set("aria-selected",o)})},_invalidateCaption:function(t){var e=t.getFullYear();"true"!==this.get("aria-expanded")&&(e=a(t)),this._calendarCaption.value(e)},_clickCaption:function(){this.toggleState(),this.invalidateState()},_clickPickerButton:function(t){var e="next"===t.get("rel")?1:-1,i=this._parentInput.get("valueAsDate")||new Date;"true"===this.get("aria-expanded")?i.setFullYear(i.getFullYear()+e):i.setMonth(i.getMonth()+e),this._parentInput.set("valueAsDate",i).fire("change")},_clickPickerDay:function(t){var e;"true"===this.get("aria-expanded")?(e=isNaN(t._ts)?new Date:new Date(t._ts),this.toggleState(!1)):isNaN(t._ts)||(e=new Date(t._ts),this.hide()),null!=e&&this._parentInput.set("valueAsDate",e).fire("change")},toggleState:function(t){"boolean"!=typeof t&&(t="true"!==this.get("aria-expanded")),this.set("aria-expanded",t)},invalidateState:function(){var t="true"===this.get("aria-expanded"),e=t?this._calendarMonths:this._calendarDays,i=this._parentInput.get("valueAsDate")||new Date;e.fire("picker:invalidate",i),t?this._calendarMonths.show():this._calendarMonths.hide()}})}();

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
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function t(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},n=Array.isArray(e)?e:[e],o=Array.apply(null,Array(n.length)).map(function(e){return null});function s(){return!("<"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().charAt(0))}function a(e,t){r.onError(e,n[t],t)}function c(e,t){var s=r.onSuccess(e,n[t],t);e=!1===s?"":s||e,o[t]=e,-1===o.indexOf(null)&&r.onComplete(o)}var i=document.createElement("a");n.forEach(function(e,t){if(i.setAttribute("href",e),i.href=String(i.href),Boolean(document.all&&!window.atob)&&i.host.split(":")[0]!==location.host.split(":")[0]){if(i.protocol===location.protocol){var n=new XDomainRequest;n.open("GET",e),n.timeout=0,n.onprogress=Function.prototype,n.ontimeout=Function.prototype,n.onload=function(){s(n.responseText)?c(n.responseText,t):a(n,t)},n.onerror=function(e){a(n,t)},setTimeout(function(){n.send()},0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),a(null,t)}else{var o=new XMLHttpRequest;o.open("GET",e),r.mimeType&&o.overrideMimeType&&o.overrideMimeType(r.mimeType),r.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(200===o.status&&s(o.responseText)?c(o.responseText,t):a(o,t))},o.send()}})}function n(e){var t={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},n={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},s=Array.apply(null,n.rootElement.querySelectorAll(n.include)).filter(function(e){return t=e,r=n.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,r);var t,r}),a=Array.apply(null,Array(s.length)).map(function(e){return null});function c(){if(-1===a.indexOf(null)){var e=a.join("");n.onComplete(e,a,s)}}function i(e,t,o,s){var i=n.onSuccess(e,o,s);(function e(t,o,s,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];var l=u(t,s,i);l.rules.length?r(l.absoluteUrls,{onBeforeSend:function(e,t,r){n.onBeforeSend(e,o,t)},onSuccess:function(e,t,r){var s=n.onSuccess(e,o,t),a=u(e=!1===s?"":s||e,t,i);return a.rules.forEach(function(t,r){e=e.replace(t,a.absoluteRules[r])}),e},onError:function(r,n,u){c.push({xhr:r,url:n}),i.push(l.rules[u]),e(t,o,s,a,c,i)},onComplete:function(r){r.forEach(function(e,r){t=t.replace(l.rules[r],e)}),e(t,o,s,a,c,i)}}):a(t,c)})(e=void 0!==i&&!1===Boolean(i)?"":i||e,o,s,function(e,r){null===a[t]&&(r.forEach(function(e){return n.onError(e.xhr,o,e.url)}),!n.filter||n.filter.test(e)?a[t]=e:a[t]="",c())})}function u(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s={};return s.rules=(e.replace(t.cssComments,"").match(t.cssImports)||[]).filter(function(e){return-1===n.indexOf(e)}),s.urls=s.rules.map(function(e){return e.replace(t.cssImports,"$1")}),s.absoluteUrls=s.urls.map(function(e){return o(e,r)}),s.absoluteRules=s.rules.map(function(e,t){var n=s.urls[t],a=o(s.absoluteUrls[t],r);return e.replace(n,a)}),s}s.length?s.forEach(function(e,t){var s=e.getAttribute("href"),u=e.getAttribute("rel"),l="LINK"===e.nodeName&&s&&u&&"stylesheet"===u.toLowerCase(),f="STYLE"===e.nodeName;if(l)r(s,{mimeType:"text/css",onBeforeSend:function(t,r,o){n.onBeforeSend(t,e,r)},onSuccess:function(r,n,a){var c=o(s,location.href);i(r,t,e,c)},onError:function(r,o,s){a[t]="",n.onError(r,e,o),c()}});else if(f){var d=e.textContent;n.useCSSOM&&(d=Array.apply(null,e.sheet.cssRules).map(function(e){return e.cssText}).join("")),i(d,t,e,location.href)}else a[t]="",c()}):n.onComplete("",[])}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}var s=a;function a(e,t,r){e instanceof RegExp&&(e=c(e,r)),t instanceof RegExp&&(t=c(t,r));var n=i(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function c(e,t){var r=t.match(e);return r?r[0]:null}function i(e,t,r){var n,o,s,a,c,i=r.indexOf(e),u=r.indexOf(t,i+1),l=i;if(i>=0&&u>0){for(n=[],s=r.length;l>=0&&!c;)l==i?(n.push(l),i=r.indexOf(e,l+1)):1==n.length?c=[n.pop(),u]:((o=n.pop())<s&&(s=o,a=u),u=r.indexOf(t,l+1)),l=i<u&&i>=0?i:u;n.length&&(c=[s,a])}return c}function u(t){var r=e({},{preserveStatic:!0,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});function n(e){throw new Error("CSS parse error: ".concat(e))}function o(e){var r=e.exec(t);if(r)return t=t.slice(r[0].length),r}function a(){return o(/^{\s*/)}function c(){return o(/^}/)}function i(){o(/^\s*/)}function u(){if(i(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return n("end of comment is missing");var r=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:r}}}function l(){for(var e,t=[];e=u();)t.push(e);return r.removeComments?[]:t}function f(){for(i();"}"===t[0];)n("extra closing bracket");var e=o(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function d(){o(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=o(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!o(/^:\s*/))return n("property missing ':'");var r=o(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),s={type:"declaration",property:t.replace(e,""),value:r?r[0].replace(e,"").trim():""};return o(/^[;\s]*/),s}}function p(){if(!a())return n("missing '{'");for(var e,t=l();e=d();)t.push(e),t=t.concat(l());return c()?t:n("missing '}'")}function m(){i();for(var e,t=[];e=o(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),o(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:p()}}function v(){if(i(),"@"===t[0]){var e=function(){var e=o(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=o(/^([-\w]+)\s*/)))return n("@keyframes missing name");var r,s=e[1];if(!a())return n("@keyframes missing '{'");for(var i=l();r=m();)i.push(r),i=i.concat(l());return c()?{type:"keyframes",name:s,vendor:t,keyframes:i}:n("@keyframes missing '}'")}}()||function(){var e=o(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:y()}}()||function(){if(o(/^@host\s*/))return{type:"host",rules:y()}}()||function(){var e=o(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:y()}}()||function(){var e=o(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(o(/^@page */))return{type:"page",selectors:f()||[],declarations:p()}}()||function(){var e=o(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:y()}}()||function(){if(o(/^@font-face\s*/))return{type:"font-face",declarations:p()}}()||function(){var e=o(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}();if(e&&!r.preserveStatic){var s=!1;if(e.declarations)s=e.declarations.some(function(e){return/var\(/.test(e.value)});else s=(e.keyframes||e.rules||[]).some(function(e){return(e.declarations||[]).some(function(e){return/var\(/.test(e.value)})});return s?e:{}}return e}}function h(){if(!r.preserveStatic){var e=s("{","}",t);if(e){var o=/:(?:root|host)(?![.:#(])/.test(e.pre)&&/--\S*\s*:/.test(e.body),a=/var\(/.test(e.body);if(!o&&!a)return t=t.slice(e.end+1),{}}}var c=f()||[],i=r.preserveStatic?p():p().filter(function(e){var t=c.some(function(e){return/:(?:root|host)(?![.:#(])/.test(e)})&&/^--\S/.test(e.property),r=/var\(/.test(e.value);return t||r});return c.length||n("selector missing"),{type:"rule",selectors:c,declarations:i}}function y(e){if(!e&&!a())return n("missing '{'");for(var r,o=l();t.length&&(e||"}"!==t[0])&&(r=v()||h());)r.type&&o.push(r),o=o.concat(l());return e||c()?o:n("missing '}'")}return{type:"stylesheet",stylesheet:{rules:y(!0),errors:[]}}}function l(t){var r=e({},{parseHost:!1,store:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),n=new RegExp(":".concat(r.parseHost?"host":"root","(?![.:#(])"));return"string"==typeof t&&(t=u(t,r)),t.stylesheet.rules.forEach(function(e){"rule"===e.type&&e.selectors.some(function(e){return n.test(e)})&&e.declarations.forEach(function(e,t){var n=e.property,o=e.value;n&&0===n.indexOf("--")&&(r.store[n]=o)})}),r.store}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",s=0;s<e.length;s++){var a=e[s];r&&r(a);var c=n[a.type](a);c&&(o+=c,c.length&&a.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}a.range=i;var d="--",p="var";function m(t){var r=e({},{preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return"string"==typeof t&&(t=u(t,r)),function e(t,r){t.rules.forEach(function(n){n.rules?e(n,r):n.keyframes?n.keyframes.forEach(function(e){"keyframe"===e.type&&r(e.declarations,n)}):n.declarations&&r(n.declarations,t)})}(t.stylesheet,function(e,t){for(var n=0;n<e.length;n++){var o=e[n],s=o.type,a=o.property,c=o.value;if("declaration"===s)if(r.preserveVars||!a||0!==a.indexOf(d)){if(-1!==c.indexOf(p+"(")){var i=h(c,r);i!==o.value&&(i=v(i),r.preserveVars?(e.splice(n,0,{type:s,property:a,value:i}),n++):o.value=i)}}else e.splice(n,1),n--}}),f(t)}function v(e){return(e.match(/calc\(([^)]+)\)/g)||[]).forEach(function(t){var r="calc".concat(t.split("calc").join(""));e=e.replace(t,r)}),e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var n=s("(",")",e);return n?"var"===n.pre.slice(-3)?0===n.body.trim().length?(t.onWarning("var() must contain a non-whitespace string"),e):n.pre.slice(0,-3)+function(e){var n=e.split(",")[0].replace(/[\s\n\t]/g,""),o=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],s=Object.prototype.hasOwnProperty.call(t.variables,n)?String(t.variables[n]):void 0,a=s||(o?String(o):void 0),c=r||e;return s||t.onWarning('variable "'.concat(n,'" is undefined')),a&&"undefined"!==a&&a.length>0?h(a,t,c):"var(".concat(c,")")}(n.body)+h(n.post,t):n.pre+"(".concat(h(n.body,t),")")+h(n.post,t):(-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e)}var y="undefined"!=typeof window,g=y&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),S={group:0,job:0},b={rootElement:y?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onWarning:function(){},onError:function(){},onSuccess:function(){},onComplete:function(){}},E={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},w={dom:{},job:{},user:{}},C=!1,O=null,A=0,x=null,j=!1;function k(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o="cssVars(): ",s=e({},b,r);function a(e,t,r,n){!s.silent&&window.console&&console.error("".concat(o).concat(e,"\n"),t),s.onError(e,t,r,n)}function c(e){!s.silent&&window.console&&console.warn("".concat(o).concat(e)),s.onWarning(e)}if(y){if(s.watch)return s.watch=b.watch,function(e){function t(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")&&!e.disabled}if(!window.MutationObserver)return;O&&(O.disconnect(),O=null);(O=new MutationObserver(function(r){r.some(function(r){var n,o=!1;return"attributes"===r.type?o=t(r.target):"childList"===r.type&&(n=r.addedNodes,o=Array.apply(null,n).some(function(e){var r=1===e.nodeType&&e.hasAttribute("data-cssvars"),n=function(e){return"STYLE"===e.tagName&&!e.disabled}(e)&&E.cssVars.test(e.textContent);return!r&&(t(e)||n)})||function(t){return Array.apply(null,t).some(function(t){var r=1===t.nodeType,n=r&&"out"===t.getAttribute("data-cssvars"),o=r&&"src"===t.getAttribute("data-cssvars"),s=o;if(o||n){var a=t.getAttribute("data-cssvars-group"),c=e.rootElement.querySelector('[data-cssvars-group="'.concat(a,'"]'));o&&(L(e.rootElement),w.dom={}),c&&c.parentNode.removeChild(c)}return s})}(r.removedNodes)),o})&&k(e)})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0})}(s),void k(s);if(!1===s.watch&&O&&(O.disconnect(),O=null),!s.__benchmark){if(C===s.rootElement)return void function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(x),x=setTimeout(function(){e.__benchmark=null,k(e)},t)}(r);if(s.__benchmark=T(),s.exclude=[O?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',s.exclude].filter(function(e){return e}).join(","),s.variables=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce(function(r,n){return r[t.test(n)?n:"--".concat(n.replace(/^-+/,""))]=e[n],r},{})}(s.variables),!O)if(Array.apply(null,s.rootElement.querySelectorAll('[data-cssvars="out"]')).forEach(function(e){var t=e.getAttribute("data-cssvars-group");(t?s.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]')):null)||e.parentNode.removeChild(e)}),A){var i=s.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');i.length<A&&(A=i.length,w.dom={})}}if("loading"!==document.readyState){var d=Boolean(s.shadowDOM||s.rootElement.shadowRoot||s.rootElement.host);if(g&&s.onlyLegacy){if(s.updateDOM){var p=s.rootElement.host||(s.rootElement===document?document.documentElement:s.rootElement);Object.keys(s.variables).forEach(function(e){p.style.setProperty(e,s.variables[e])})}}else d&&!j?n({rootElement:b.rootElement,include:b.include,exclude:s.exclude,onSuccess:function(e,t,r){return(e=((e=e.replace(E.cssComments,"").replace(E.cssMediaQueries,"")).match(E.cssVarDeclRules)||[]).join(""))||!1},onComplete:function(e,t,r){l(e,{store:w.dom,onWarning:c}),j=!0,k(s)}}):(C=s.rootElement,n({rootElement:s.rootElement,include:s.include,exclude:s.exclude,onBeforeSend:s.onBeforeSend,onError:function(e,t,r){var n=e.responseURL||_(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");a("CSS XHR Error: ".concat(n," ").concat(e.status," ").concat(o),t,e,n)},onSuccess:function(e,t,r){var n=s.onSuccess(e,t,r);return e=void 0!==n&&!1===Boolean(n)?"":n||e,s.updateURLs&&(e=function(e,t){return(e.replace(E.cssComments,"").match(E.cssUrls)||[]).forEach(function(r){var n=r.replace(E.cssUrls,"$1"),o=_(n,t);e=e.replace(r,r.replace(n,o))}),e}(e,r)),e},onComplete:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i={},p=s.updateDOM?w.dom:Object.keys(w.job).length?w.job:w.job=JSON.parse(JSON.stringify(w.dom)),v=!1;if(o.forEach(function(e,t){if(E.cssVars.test(n[t]))try{var r=u(n[t],{preserveStatic:s.preserveStatic,removeComments:!0});l(r,{parseHost:d,store:i,onWarning:c}),e.__cssVars={tree:r}}catch(t){a(t.message,e)}}),s.updateDOM&&e(w.user,s.variables),e(i,s.variables),v=Boolean((document.querySelector("[data-cssvars]")||Object.keys(w.dom).length)&&Object.keys(i).some(function(e){return i[e]!==p[e]})),e(p,w.user,i),v)L(s.rootElement),k(s);else{var h=[],y=[],g=!1;if(w.job={},s.updateDOM&&S.job++,o.forEach(function(t){var r=!t.__cssVars;if(t.__cssVars)try{m(t.__cssVars.tree,e({},s,{variables:p,onWarning:c}));var n=f(t.__cssVars.tree);if(s.updateDOM){if(t.getAttribute("data-cssvars")||t.setAttribute("data-cssvars","src"),n.length){var o=t.getAttribute("data-cssvars-group")||++S.group,i=n.replace(/\s/g,""),u=s.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(o,'"]'))||document.createElement("style");g=g||E.cssKeyframes.test(n),u.hasAttribute("data-cssvars")||u.setAttribute("data-cssvars","out"),i===t.textContent.replace(/\s/g,"")?(r=!0,u&&u.parentNode&&(t.removeAttribute("data-cssvars-group"),u.parentNode.removeChild(u))):i!==u.textContent.replace(/\s/g,"")&&([t,u].forEach(function(e){e.setAttribute("data-cssvars-job",S.job),e.setAttribute("data-cssvars-group",o)}),u.textContent=n,h.push(n),y.push(u),u.parentNode||t.parentNode.insertBefore(u,t.nextSibling))}}else t.textContent.replace(/\s/g,"")!==n&&h.push(n)}catch(e){a(e.message,t)}r&&t.setAttribute("data-cssvars","skip"),t.hasAttribute("data-cssvars-job")||t.setAttribute("data-cssvars-job",S.job)}),A=s.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,s.shadowDOM)for(var b,O=[s.rootElement].concat(t(s.rootElement.querySelectorAll("*"))),x=0;b=O[x];++x)if(b.shadowRoot&&b.shadowRoot.querySelector("style")){var j=e({},s,{rootElement:b.shadowRoot,variables:w.dom});k(j)}s.updateDOM&&g&&M(s.rootElement),C=!1,s.onComplete(h.join(""),y,JSON.parse(JSON.stringify(p)),T()-s.__benchmark)}}}))}else document.addEventListener("DOMContentLoaded",function e(t){k(r),document.removeEventListener("DOMContentLoaded",e)})}}function M(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(t){for(var r=e.getElementsByTagName("*"),n=[],o=0,s=r.length;o<s;o++){var a=r[o];"none"!==getComputedStyle(a)[t]&&(a.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",n.push(a))}document.body.offsetHeight;for(var c=0,i=n.length;c<i;c++){var u=n[c].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}function T(){return y&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function L(e){Array.apply(null,e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach(function(e){return e.setAttribute("data-cssvars","")})}return k.reset=function(){for(var e in C=!1,O&&(O.disconnect(),O=null),A=0,x=null,j=!1,w)w[e]={}},k});
//# sourceMappingURL=css-vars-ponyfill.min.js.map


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {/*! CSS-POLYFILLS - v0.1.0 - 2019-01-07 - https://github.com/FremyCompany/css-polyfills - Copyright (c) 2019 François REMY; MIT-Licensed !*/

!function(){"use strict";var a={exports:{}},b=function(){var b={},c=function(a){return b[a]};return c.define=function(c){b[c]=a.exports,a.exports={}},c}();!function(a,b){a.console||(a.console={backlog:"",log:function(b){this.backlog+=b+"\n",a.debug&&alert(b)},dir:function(b){try{var c=function(a){return a.innerHTML?{tagName:a.tagName,className:a.className,id:a.id,innerHTML:a.innerHTML.substr(0,100)}:{nodeName:a.nodeName,nodeValue:a.nodeValue}},d=function(b){var d=[];return JSON.stringify(b,function(b,e){if("object"==typeof e){if(!d.indexOf(e))return"__cycle__";if(e instanceof a.Node)return c(e);d.push(e)}return e})};this.log(d(b))}catch(a){this.log(b)}},warn:function(a){this.log(a)},error:function(a){this.log("ERROR:"),this.log(a)}},a.onerror||(a.onerror=function(){console.log([].slice.call(arguments,0).join("\n"))})),a.cssConsole={enabled:!!a.debug,warnEnabled:!0,log:function(a){this.enabled&&console.log(a)},dir:function(a){this.enabled&&console.dir(a)},warn:function(a){this.warnEnabled&&console.warn(a)},error:function(a){console.error(a)}}}(window,document),b.define("src/core/polyfill-dom-console.js"),function(){for(var a=["webkit","moz","ms","o"],b=0;b<a.length&&!window.requestAnimationFrame;++b){var c=a[b];window.requestAnimationFrame=window[c+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame||!window.cancelAnimationFrame){var d=0,e=[],f=[],g=function(){var a=+new Date,b=e;e=f;for(var c=0;c<b.length;c++)b[c](a);d+=b.length,b.length=0,f=b,setTimeout(g,16)};g(),window.requestAnimationFrame=function(a){return d+e.push(a)},window.cancelAnimationFrame=function(a){(a-=d)>=0&&a<e.length&&(e[a]=function(){})}}window.setImmediate||(window.setImmediate=function(a){return setTimeout(a,0)},window.cancelImmediate=clearTimeout)}(),b.define("src/core/polyfill-dom-requestAnimationFrame.js"),a.exports=function(a,b){function c(){var a=[];return a.toCSSString=d,a}function d(a){return a?this.map(function(a){return a.toCSSString()}).join(a):this.asCSSString||(this.asCSSString=this.map(function(a){return a.toCSSString()}).join("/**/").replace(/( +\/\*\*\/ *| * | *\/\*\*\/ +)/g," ").replace(/( +\/\*\*\/ *| * | *\/\*\*\/ +)/g," ").replace(/(\!|\:|\;|\@|\.|\,|\*|\=|\&|\\|\/|\<|\>|\[|\{|\(|\]|\}|\)|\|)\/\*\*\//g,"$1").replace(/\/\*\*\/(\!|\:|\;|\@|\.|\,|\*|\=|\&|\\|\/|\<|\>|\[|\{|\(|\]|\}|\)|\|)/g,"$1"))}function e(a,b,c){return a>=b&&a<=c}function f(a){return e(a,48,57)}function g(a){return f(a)||e(a,65,70)||e(a,97,102)}function h(a){return e(a,65,90)}function i(a){return e(a,97,122)}function j(a){return h(a)||i(a)}function k(a){return a>=128}function l(a){return j(a)||k(a)||95==a}function m(a){return l(a)||f(a)||45==a}function n(a){return e(a,0,8)||11==a||e(a,14,31)||127==a}function o(a){return 10==a}function p(a){return o(a)||9==a||32==a}function q(a){this.message=a}function r(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(13==d&&10==a.charCodeAt(c+1)&&(d=10,c++),13!=d&&12!=d||(d=10),0==d&&(d=65533),e(d,55296,56319)&&e(a.charCodeAt(c+1),56320,57343)){var f=d-55296,g=a.charCodeAt(c+1)-56320;d=Math.pow(2,21)+f*Math.pow(2,10)+g}b.push(d)}return b}function s(a){if(a<=65535)return String.fromCharCode(a);a-=Math.pow(2,21);var b=Math.floor(a/Math.pow(2,10))+55296,c=a%Math.pow(2,10);return String.fromCharCode(b)+String.fromCharCode(c)}function t(a){a=r(a);for(var b,d=-1,e=new c,h=0,i=0,j=0,k=function(){h+=1,j=i,i=0},q={line:h,column:i},t=function(b){return b>=a.length?-1:a[b]},u=function(a){if(void 0===a&&(a=1),a>3)throw"Spec Error: no more than three codepoints of lookahead.";return t(d+a)},D=function(a){return void 0===a&&(a=1),d+=a,b=t(d),o(b)?k():i+=a,!0},S=function(){return d-=1,o(b)?(h-=1,i=j):i-=1,q.line=h,q.column=i,!0},aa=function(a){return void 0===a&&(a=b),-1==a},ba=function(){},ca=function(){return console.log("Parse error at index "+d+", processing codepoint 0x"+b.toString(16)+"."),!0},da=function(){if(ea(),D(),p(b)){for(;p(u());)D();return new x}if(34==b)return ha();if(35==b){if(m(u())||ka(u(1),u(2))){var a=new W;return ma(u(1),u(2),u(3))&&(a.type="id"),a.value=qa(),a}return new R(b)}return 36==b?61==u()?(D(),new N):new R(b):39==b?ha():40==b?new I:41==b?new J:42==b?61==u()?(D(),new O):new R(b):43==b?pa()?(S(),fa()):new R(b):44==b?new C:45==b?pa()?(S(),fa()):45==u(1)&&62==u(2)?(D(2),new z):na()?(S(),ga()):new R(b):46==b?pa()?(S(),fa()):new R(b):58==b?new A:59==b?new B:60==b?33==u(1)&&45==u(2)&&45==u(3)?(D(3),new y):new R(b):64==b?ma(u(1),u(2),u(3))?new V(qa()):new R(b):91==b?new G:92==b?la()?(S(),ga()):(ca(),new R(b)):93==b?new H:94==b?61==u()?(D(),new M):new R(b):123==b?new E:124==b?61==u()?(D(),new L):124==u()?(D(),new P):new R(b):125==b?new F:126==b?61==u()?(D(),new K):new R(b):f(b)?(S(),fa()):l(b)?(S(),ga()):aa()?new Q:new R(b)},ea=function(){for(;47==u(1)&&42==u(2);)for(D(2);;){if(D(),42==b&&47==u()){D();break}if(aa())return void ca()}},fa=function(){var a=ra();if(ma(u(1),u(2),u(3))){var b=new _;return b.value=a.value,b.repr=a.repr,b.type=a.type,b.unit=qa(),b}if(37==u()){D();var b=new $;return b.value=a.value,b.repr=a.repr,b}var b=new Z;return b.value=a.value,b.repr=a.repr,b.type=a.type,b},ga=function(){var a=qa();if("url"==a.toLowerCase()&&40==u()){for(D();p(u(1))&&p(u(2));)D();return 34==u()||39==u()?new U(a):!p(u())||34!=u(2)&&39!=u(2)?ia():new U(a)}return 40==u()?(D(),new U(a)):new T(a)},ha=function(a){void 0===a&&(a=b);for(var c="";D();){if(b==a||aa())return new X(c);if(o(b))return ca(),S(),new v;92==b?aa(u())?ba():o(u())?D():c+=s(ja()):c+=s(b)}},ia=function(){for(var a=new Y("");p(u());)D();if(aa(u()))return a;for(;D();){if(41==b||aa())return a;if(p(b)){for(;p(u());)D();return 41==u()||aa(u())?(D(),a):(ta(),new w)}if(34==b||39==b||40==b||n(b))return ca(),ta(),new w;if(92==b){if(!la())return ca(),ta(),new w;a.value+=s(ja())}else a.value+=s(b)}},ja=function(){if(D(),g(b)){for(var a=[b],c=0;c<5&&g(u());c++)D(),a.push(b);p(u())&&D();var d=parseInt(a.map(function(a){return String.fromCharCode(a)}).join(""),16);return d>Ga&&(d=65533),d}return aa()?65533:b},ka=function(a,b){return 92==a&&!o(b)},la=function(){return ka(b,u())},ma=function(a,b,c){return 45==a?l(b)||45==b||ka(b,c):!!l(a)||92==a&&ka(a,b)},na=function(){return ma(b,u(1),u(2))},oa=function(a,b,c){return 43==a||45==a?!!f(b)||!(46!=b||!f(c)):46==a?!!f(b):!!f(a)},pa=function(){return oa(b,u(1),u(2))},qa=function(){for(var a="";D();)if(m(b))a+=s(b);else{if(!la())return S(),a;a+=s(ja())}},ra=function(){var a="",c="integer";for(43!=u()&&45!=u()||(D(),a+=s(b));f(u());)D(),a+=s(b);if(46==u(1)&&f(u(2)))for(D(),a+=s(b),D(),a+=s(b),c="number";f(u());)D(),a+=s(b);var d=u(1),e=u(2),g=u(3);if(69!=d&&101!=d||!f(e)){if((69==d||101==d)&&(43==e||45==e)&&f(g))for(D(),a+=s(b),D(),a+=s(b),D(),a+=s(b),c="number";f(u());)D(),a+=s(b)}else for(D(),a+=s(b),D(),a+=s(b),c="number";f(u());)D(),a+=s(b);return{type:c,value:sa(a),repr:a}},sa=function(a){return+a},ta=function(){for(;D();){if(45==b||aa())return;la()?(ja(),ba()):ba()}},ua=0;!aa(u());)if(e.push(da()),ua++>2*a.length)throw new Error("The CSS Tokenizer is infinite-looping");return e}function u(){return this}function v(){return this}function w(){return this}function x(){return this}function y(){return this}function z(){return this}function A(){return this}function B(){return this}function C(){return this}function D(){return this}function E(){return this.value="{",this.mirror="}",this}function F(){return this.value="}",this.mirror="{",this}function G(){return this.value="[",this.mirror="]",this}function H(){return this.value="]",this.mirror="[",this}function I(){return this.value="(",this.mirror=")",this}function J(){return this.value=")",this.mirror="(",this}function K(){return this}function L(){return this}function M(){return this}function N(){return this}function O(){return this}function P(){return this}function Q(){return this}function R(a){return this.value=s(a),this}function S(){return this}function T(a){this.value=a}function U(a){this.value=a,this.mirror=")"}function V(a){this.value=a}function W(a){this.value=a,this.type="unrestricted"}function X(a){this.value=a}function Y(a){this.value=a}function Z(){this.value=null,this.type="integer",this.repr=""}function $(){this.value=null,this.repr=""}function _(){this.value=null,this.type="integer",this.repr="",this.unit=""}function aa(a){a=""+a;for(var b="",c=a.charCodeAt(0),d=0;d<a.length;d++){var f=a.charCodeAt(d);if(0==f)throw new q("Invalid character: the input contains U+0000.");e(f,1,31)||127==f||0==d&&e(f,48,57)||1==d&&e(f,48,57)&&45==c?b+="\\"+f.toString(16)+" ":f>=128||45==f||95==f||e(f,48,57)||e(f,65,90)||e(f,97,122)?b+=a[d]:b+="\\"+a[d]}return b}function ba(a){a=""+a;for(var b="",c=(a.charCodeAt(0),0);c<a.length;c++){var d=a.charCodeAt(c);if(0==d)throw new q("Invalid character: the input contains U+0000.");d>=128||45==d||95==d||e(d,48,57)||e(d,65,90)||e(d,97,122)?b+=a[c]:b+="\\"+d.toString(16)+" "}return b}function ca(a){a=""+a;for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);if(0==d)throw new q("Invalid character: the input contains U+0000.");e(d,1,31)||127==d?b+="\\"+d.toString(16)+" ":b+=34==d||92==d?"\\"+a[c]:a[c]}return b}function da(a){this.tokens=a,this.i=-1}function ea(a,b){return console.log("Parse error at token "+a.i+": "+a.token+".\n"+b),!0}function fa(){return!0}function ga(a,b){for(var d,e=new c;a.consume();)if(!(a.token instanceof x)){if(a.token instanceof Q)return e;if(a.token instanceof y||a.token instanceof z){if("top-level"==b)continue;a.reconsume(),(d=ia(a))&&e.push(d)}else a.token instanceof V?(a.reconsume(),(d=ha(a))&&e.push(d)):(a.reconsume(),(d=ia(a))&&e.push(d))}}function ha(a){a.consume();for(var b=new za(a.token.value);a.consume();){if(a.token instanceof B||a.token instanceof Q)return b;if(a.token instanceof E)return b.value=ma(a),b;if(a.token instanceof Ca&&"{"==a.token.name)return b.value=a.token,b;a.reconsume(),b.prelude.push(la(a))}}function ia(a){for(var b=new Aa;a.consume();){if(a.token instanceof Q)return void ea(a,"Hit EOF when trying to parse the prelude of a qualified rule.");if(a.token instanceof E)return b.value=ma(a),b;if(a.token instanceof Ca&&"{"==a.token.name)return b.value=a.token,b;a.reconsume(),b.prelude.push(la(a))}}function ja(a){for(var b=new c;a.consume();)if(a.token instanceof x||a.token instanceof B)fa();else{if(a.token instanceof Q)return b;if(a.token instanceof V)a.reconsume(),b.push(ha(a));else if(a.token instanceof T){for(var d=[a.token];!(a.next()instanceof B||a.next()instanceof Q);)d.push(la(a));var e;(e=ka(new da(d)))&&b.push(e)}else for(ea(a),a.reconsume();!(a.next()instanceof B||a.next()instanceof Q);)la(a)}}function ka(a){a.consume();for(var b=new Ba(a.token.value);a.next()instanceof x;)a.consume();if(!(a.next()instanceof A))return void ea(a);for(a.consume();!(a.next()instanceof Q);)b.value.push(la(a));for(var c=!1,d=b.value.length-1;d>=0;d--)if(!(b.value[d]instanceof x)){if(!(b.value[d]instanceof T&&b.value[d].ASCIIMatch("important"))){if(c&&b.value[d]instanceof R&&"!"==b.value[d].value){b.value.splice(d,b.value.length),b.important=!0;break}break}c=!0}return b}function la(a){return a.consume(),a.token instanceof E||a.token instanceof G||a.token instanceof I?ma(a):a.token instanceof U?na(a):a.token}function ma(a){for(var b=a.token.mirror,c=new Ca(a.token.value);a.consume();){if(a.token instanceof Q||a.token instanceof D&&a.token.value==b)return c;a.reconsume(),c.value.push(la(a))}}function na(a){for(var b=new Da(a.token.value);a.consume();){if(a.token instanceof Q||a.token instanceof J)return b;a.reconsume(),b.value.push(la(a))}}function oa(a){if("string"==typeof a)return new da(t(a));if(a instanceof da)return a;if(void 0!==a.length)return new da(a);throw SyntaxError(a)}function pa(a){a=oa(a);var b=new ya;return b.value=ga(a,"top-level"),b}function qa(a){return a=oa(a),ga(a)}function ra(a){for(a=oa(a);a.next()instanceof x;)a.consume();if(a.next()instanceof Q)throw SyntaxError();if(a.next()instanceof V)var b=ha(a);else{var b=ia(a);if(!b)throw SyntaxError()}for(;a.next()instanceof x;)a.consume();if(a.next()instanceof Q)return b;throw SyntaxError()}function sa(a){for(a=oa(a);a.next()instanceof x;)a.consume();if(!(a.next()instanceof T))throw SyntaxError();var b=ka(a);if(!b)throw new SyntaxError;return b}function ta(a){return a=oa(a),ja(a)}function ua(a){for(a=oa(a);a.next()instanceof x;)a.consume();if(a.next()instanceof Q)throw SyntaxError();var b=la(a);if(!b)throw SyntaxError();for(;a.next()instanceof x;)a.consume();if(!(a.next()instanceof Q))throw new SyntaxError;return b}function va(a){a=oa(a);for(var b=new c;;){var d=la(a);if(d instanceof Q)return b;b.push(d)}}function wa(a){a=oa(a);for(var b=new c;;)for(var d=new c;;){var e=la(a);if(e instanceof Q)return b.push(d),b;if(e instanceof C){b.push(d);break}d.push(e)}}function xa(){return this}function ya(){return this.value=new c,this}function za(a){return this.name=a,this.prelude=new c,this.value=null,this}function Aa(){return this.prelude=new c,this.selector=this.prelude,this.value=null,this}function Ba(a){return this.name=a,this.value=new c,this.important=!1,this}function Ca(a){return this.name=a,this.value=new c,this}function Da(a){return this.name=a,this.value=new c,this}function Ea(){return this.value=new c,this}var Fa={tokenize:function(a){},parse:function(a){}};Fa.TokenList=c,Fa.TokenListToCSSString=d;var Ga=1114111;return q.prototype=new Error,q.prototype.name="InvalidCharacterError",u.prototype.toJSON=function(){return{token:this.tokenType}},u.prototype.toString=function(){return this.tokenType},u.prototype.toCSSString=function(){return""+this},v.prototype=new u,v.prototype.tokenType="BADSTRING",v.prototype.toCSSString=function(){return"'"},w.prototype=new u,w.prototype.tokenType="BADURL",w.prototype.toCSSString=function(){return"url("},x.prototype=new u,x.prototype.tokenType="WHITESPACE",x.prototype.toString=function(){return"WS"},x.prototype.toCSSString=function(){return" "},y.prototype=new u,y.prototype.tokenType="CDO",y.prototype.toCSSString=function(){return"\x3c!--"},z.prototype=new u,z.prototype.tokenType="CDC",z.prototype.toCSSString=function(){return"--\x3e"},A.prototype=new u,A.prototype.tokenType=":",B.prototype=new u,B.prototype.tokenType=";",C.prototype=new u,C.prototype.tokenType=",",C.prototype.value=";",D.prototype=new u,E.prototype=new D,E.prototype.tokenType="{",F.prototype=new D,F.prototype.tokenType="}",G.prototype=new D,G.prototype.tokenType="[",H.prototype=new D,H.prototype.tokenType="]",I.prototype=new D,I.prototype.tokenType="(",J.prototype=new D,J.prototype.tokenType=")",K.prototype=new u,K.prototype.tokenType="~=",L.prototype=new u,L.prototype.tokenType="|=",M.prototype=new u,M.prototype.tokenType="^=",N.prototype=new u,N.prototype.tokenType="$=",O.prototype=new u,O.prototype.tokenType="*=",P.prototype=new u,P.prototype.tokenType="||",Q.prototype=new u,Q.prototype.tokenType="EOF",Q.prototype.toCSSString=function(){return""},R.prototype=new u,R.prototype.tokenType="DELIM",R.prototype.toString=function(){return"DELIM("+this.value+")"},R.prototype.toCSSString=function(){return"\\"==this.value?"\\\n":this.value},S.prototype=new u,S.prototype.ASCIIMatch=function(a){return this.value.toLowerCase()==a.toLowerCase()},T.prototype=new S,T.prototype.tokenType="IDENT",T.prototype.toString=function(){return"IDENT("+this.value+")"},T.prototype.toCSSString=function(){return aa(this.value)},U.prototype=new S,U.prototype.tokenType="FUNCTION",U.prototype.toString=function(){return"FUNCTION("+this.value+")"},U.prototype.toCSSString=function(){return aa(this.value)+"("},V.prototype=new S,V.prototype.tokenType="AT-KEYWORD",V.prototype.toString=function(){return"AT("+this.value+")"},V.prototype.toCSSString=function(){return"@"+aa(this.value)},W.prototype=new S,W.prototype.tokenType="HASH",W.prototype.toString=function(){return"HASH("+this.value+")"},W.prototype.toCSSString=function(){return"#"+("id"==this.type?aa:ba)(this.value)},X.prototype=new S,X.prototype.tokenType="STRING",X.prototype.toString=function(){return'"'+ca(this.value)+'"'},Y.prototype=new S,Y.prototype.tokenType="URL",Y.prototype.toString=function(){return"URL("+this.value+")"},Y.prototype.toCSSString=function(){return'url("'+ca(this.value)+'")'},Z.prototype=new u,Z.prototype.tokenType="NUMBER",Z.prototype.toString=function(){return"integer"==this.type?"INT("+this.value+")":"NUMBER("+this.value+")"},Z.prototype.toJSON=function(){var a=this.constructor.prototype.constructor.prototype.toJSON.call(this);return a.value=this.value,a.type=this.type,a.repr=this.repr,a},Z.prototype.toCSSString=function(){return this.repr},$.prototype=new u,$.prototype.tokenType="PERCENTAGE",$.prototype.toString=function(){return"PERCENTAGE("+this.value+")"},$.prototype.toCSSString=function(){return this.repr+"%"},_.prototype=new u,_.prototype.tokenType="DIMENSION",_.prototype.toString=function(){return"DIM("+this.value+","+this.unit+")"},_.prototype.toCSSString=function(){var a=this.repr,b=aa(this.unit);return"e"!=b[0].toLowerCase()||"-"!=b[1]&&!e(b.charCodeAt(1),48,57)||(b="\\65 "+b.slice(1,b.length)),a+b},Fa.tokenize=t,Fa.IdentToken=T,Fa.IdentifierToken=T,Fa.FunctionToken=U,Fa.AtKeywordToken=V,Fa.HashToken=W,Fa.StringToken=X,Fa.BadStringToken=v,Fa.URLToken=Y,Fa.BadURLToken=w,Fa.DelimToken=R,Fa.NumberToken=Z,Fa.PercentageToken=$,Fa.DimensionToken=_,Fa.IncludeMatchToken=K,Fa.DashMatchToken=L,Fa.PrefixMatchToken=M,Fa.SuffixMatchToken=N,Fa.SubstringMatchToken=O,Fa.ColumnToken=P,Fa.WhitespaceToken=x,Fa.CDOToken=y,Fa.CDCToken=z,Fa.ColonToken=A,Fa.SemicolonToken=B,Fa.CommaToken=C,Fa.OpenParenToken=I,Fa.CloseParenToken=J,Fa.OpenSquareToken=G,Fa.CloseSquareToken=H,Fa.OpenCurlyToken=E,Fa.CloseCurlyToken=F,Fa.EOFToken=Q,Fa.CSSParserToken=u,Fa.GroupingToken=D,da.prototype.tokenAt=function(a){return a<this.tokens.length?this.tokens[a]:new Q},da.prototype.consume=function(a){return void 0===a&&(a=1),this.i+=a,this.token=this.tokenAt(this.i),!0},da.prototype.next=function(){return this.tokenAt(this.i+1)},da.prototype.reconsume=function(){this.i--},xa.prototype.toString=function(a){return JSON.stringify(this,null,a)},ya.prototype=new xa,ya.prototype.type="STYLESHEET",ya.prototype.toCSSString=function(){return this.value.toCSSString("\n")},za.prototype=new xa,za.prototype.toCSSString=function(){return this.value?"@"+aa(this.name)+" "+this.prelude.toCSSString()+this.value.toCSSString():"@"+aa(this.name)+" "+this.prelude.toCSSString()+"; "},za.prototype.toStylesheet=function(){return this.asStylesheet||(this.asStylesheet=this.value?pa(this.value.value):new ya)},Aa.prototype=new xa,Aa.prototype.type="STYLE-RULE",Aa.prototype.toCSSString=function(){return this.prelude.toCSSString()+this.value.toCSSString()},Aa.prototype.getSelector=function(){return this.prelude},Aa.prototype.getDeclarations=function(){return this.value instanceof Ca?ta(this.value.value):new c},Ba.prototype=new xa,Ba.prototype.type="DECLARATION",Ba.prototype.toCSSString=function(){return this.name+":"+this.value.toCSSString()+"; "},Ca.prototype=new xa,Ca.prototype.type="BLOCK",Ca.prototype.toCSSString=function(){switch(this.name){case"(":return"("+this.value.toCSSString()+")";case"[":return"["+this.value.toCSSString()+"]";case"{":return"{"+this.value.toCSSString()+"}";default:return this.name+this.value.toCSSString()+this.name}},Da.prototype=new xa,Da.prototype.type="FUNCTION",Da.prototype.toCSSString=function(){return this.name+"("+this.value.toCSSString()+")"},Da.prototype.getArguments=function(){for(var a=new c,b=new c,d=this.value,e=0;e<d.length;e++)","==d[e].tokenType?(a.push(b),b=new c):b.push(d[e]);return(a.length>0||b.length>0)&&a.push(b),a},Ea.prototype=new xa,Ea.prototype.type="FUNCTION-ARG",Ea.prototype.toCSSString=function(){return this.value.toCSSString()+", "},Fa.CSSParserRule=xa,Fa.Stylesheet=ya,Fa.AtRule=za,Fa.StyleRule=Aa,Fa.Declaration=Ba,Fa.SimpleBlock=Ca,Fa.Func=Da,Fa.parseAStylesheet=pa,Fa.parseAListOfRules=qa,Fa.parseARule=ra,Fa.parseADeclaration=sa,Fa.parseAListOfDeclarations=ta,Fa.parseAComponentValue=ua,Fa.parseAListOfComponentValues=va,Fa.parseACommaSeparatedListOfComponentValues=wa,Fa.parse=pa,Fa.parseCSSValue=va,Fa}(),b.define("src/core/css-syntax.js"),a.exports=function(a,c){b("src/core/polyfill-dom-console.js");var d={cloneMouseEvent:function(a){var b=c.createEvent("MouseEvent");return b.initMouseEvent(a.type,a.canBubble||a.bubbles,a.cancelable,a.view,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,a.relatedTarget),b},cloneKeyboardEvent:function(a){return d.cloneCustomEvent(a)},cloneCustomEvent:function(a){var b=c.createEvent("CustomEvent");b.initCustomEvent(a.type,a.canBubble||a.bubbles,a.cancelable,"detail"in a?a.detail:a);for(var d in a)try{if(a[d]!=b[d]&&a[d]!=a.target)try{b[d]=a[d]}catch(c){Object.defineProperty(b,d,{get:function(){return a[d]}})}}catch(a){}return b},cloneEvent:function(a){return a instanceof MouseEvent?d.cloneMouseEvent(a):a instanceof KeyboardEvent?d.cloneKeyboardEvent(a):d.cloneCustomEvent(a)},EventTarget:{implementsIn:function(a,b){b||"function"!=typeof a||(a=a.prototype),a.dispatchEvent=d.EventTarget.prototype.dispatchEvent,a.addEventListener=d.EventTarget.prototype.addEventListener,a.removeEventListener=d.EventTarget.prototype.removeEventListener},prototype:{}}};return d.EventTarget.prototype.addEventListener=function(a,b){this.eventListeners||(this.eventListeners=[]);var c=this.eventListeners[a]||(this.eventListeners[a]=[]);-1==c.indexOf(b)&&c.push(b)},d.EventTarget.prototype.removeEventListener=function(a,b){this.eventListeners||(this.eventListeners=[]);var c,d=this.eventListeners[a]||(this.eventListeners[a]=[]);-1!==(c=d.indexOf(b))&&d.splice(c,1)},d.EventTarget.prototype.dispatchEvent=function(a){function b(a,b,c){Object.defineProperty(b,c,{get:function(){var b=a[c];return"function"==typeof b?b.bind(a):b},set:function(b){a[c]=b}})}function d(a,c){try{Object.defineProperty(a,"target",{get:function(){return c}})}catch(a){}finally{if(a.target!==c){var e=Object.create(Object.getPrototypeOf(a));e=d(e,c);for(key in a)"target"!=key&&b(a,e,key);return e}return a}}if(this.eventListeners||(this.eventListeners=[]),"string"==typeof a){if(!this.eventListeners[a]||0==this.eventListeners[a].length)return}else if(!this.eventListeners[a.type]||0==this.eventListeners[a.type].length)return;var e=a;if("object"==typeof e)try{e=d(e,this)}catch(a){}else{if("string"!=typeof e)throw new Error("dispatchEvent expect an Event object or a string containing the event type");e=c.createEvent("CustomEvent"),e.initCustomEvent(a,!0,!1,this);try{e=d(e,this)}catch(a){}}for(var f=this.eventListeners[e.type]||(this.eventListeners[e.type]=[]),g=f.length;g--;)try{f[g](e)}catch(a){setImmediate(function(){throw a})}return e.isDefaultPrevented},d}(window,document),b.define("src/core/dom-events.js"),a.exports=function(a,b){function c(a,b,c){var d=this;b||(b=function(){}),c||(c=a);var e=!1,f=!1,g=!1,h=null,i=function(){g=!0;try{h&&h(d)}catch(a){setImmediate(function(){throw a})}g&&j()},j=(this.schedule=function(b){if(f)throw new Error("Cannot schedule on a disconnected event stream");if(e&&!g)throw new Error("Cannot schedule on an already-scheduled event stream");h=b,g=!1,e?c(i):(a(i),e=!0)},this.dispose=function(){e&&(b(),d=null,i=null,h=null,e=!1,f=!0,g=!1)})}function d(a){var b=0;c.call(this,function(a){b=requestAnimationFrame(a)},function(){cancelAnimationFrame(b)})}function e(a){var b=0,d="number"==typeof a?+a:"timeout"in a?+a.timeout:333;c.call(this,function(a){b=setTimeout(a,d)},function(){clearTimeout(b)})}function f(){var b="PointerEvent"in a?"pointermove":"MSPointerEvent"in a?"MSPointerMove":"mousemove",d=!1,e=null,f=function(){d||(a.removeEventListener(b,f,!0),d=requestAnimationFrame(e))};c.call(this,function(c){e=c,a.addEventListener(b,f,!0)},function(){a.removeEventListener(b,f,!0),cancelAnimationFrame(d),f=null,e=null,d=!1},function(c){e=c,d=!1,a.addEventListener(b,f,!0)})}function g(){var b="PointerEvent"in a?"pointerup":"MSPointerEvent"in a?"MSPointerUp":"mouseup",d="PointerEvent"in a?"pointerdown":"MSPointerEvent"in a?"MSPointerDown":"mousedown",e=!1,f=null,g=function(){e||(a.removeEventListener(b,g,!0),a.removeEventListener(d,g,!0),e=requestAnimationFrame(f))};c.call(this,function(c){f=c,a.addEventListener(b,g,!0),a.addEventListener(d,g,!0)},function(){a.removeEventListener(b,g,!0),a.removeEventListener(d,g,!0),cancelAnimationFrame(e),g=null,f=null,e=!1},function(c){f=c,e=!1,a.addEventListener(b,g,!0),a.addEventListener(d,g,!0)})}function h(){var a=null,d=null,e=!1,f=0,g=function(){d==b.activeElement&&e==b.hasFocus()?setTimeout(g,333):(d=b.activeElement,e=b.hasFocus(),a())};c.call(this,function(b){a=b,f=setTimeout(g,500)},function(){clearTimeout(f),g=null,a=null,f=0},function(b){a=b,f=setTimeout(g,100)})}function i(a,b){var d=this,e=null,f=!1,g=!1,h=function(c){c==a&&(f=!0),c==b&&(g=!0),f&&g||e(d)};c.call(this,function(c){e=c,a.schedule(h),b.schedule(h)},function(){a.dispose(),b.dispose()},function(c){e=c,f&&a.schedule(h),g&&b.schedule(h),f=g=!1})}var j;return j="MutationObserver"in a?function(a){if(a)var d="target"in a?a.target:b.documentElement,e={subtree:!("subtree"in a)||!!a.subtree,attributes:!("attributes"in a)||!!a.attributes,childList:!("childList"in a)||!!a.childList,characterData:"characterData"in a&&!!a.characterData};else var d=b.documentElement,e={subtree:!0,attributes:!0,childList:!0,characterData:!1};var f=null;c.call(this,function(a){e&&(f=new MutationObserver(a),f.observe(d,e),d=null,e=null)},function(){f&&f.disconnect(),f=null},function(){f.takeRecords()})}:"MutationEvent"in a?function(a){var d=!1;if(a)var e="target"in a?a.target:b.documentElement;else var e=b.documentElement;var f=null,g=function(){!d&&g&&(b.removeEventListener("DOMContentLoaded",g,!1),b.removeEventListener("DOMContentLoaded",g,!1),e.removeEventListener("DOMSubtreeModified",g,!1),d=requestAnimationFrame(f))};c.call(this,function(a){f=a,b.addEventListener("DOMContentLoaded",g,!1),e.addEventListener("DOMSubtreeModified",g,!1)},function(){b.removeEventListener("DOMContentLoaded",g,!1),e.removeEventListener("DOMSubtreeModified",g,!1),cancelAnimationFrame(d),g=null,f=null,d=!1},function(a){f=a,d=!1,e.addEventListener("DOMSubtreeModified",g,!1)})}:d,{EventStream:c,AnimationFrameEventStream:d,TimeoutEventStream:e,MouseEventStream:f,MouseButtonEventStream:g,DOMUpdateEventStream:j,FocusEventStream:h,CompositeEventStream:i}}(window,document),b.define("src/core/dom-experimental-event-streams.js"),a.exports=function(a,c){function d(a,b,d){var e,d=d||c,m=[],n=function e(f){f.schedule(e);for(var g=[],h=m.slice(0),i=d.querySelectorAll(a),j=g.length=i.length;j;)g.push(i[--j]);m=g.slice(0),i=null,h=h.filter(function(a){if(a===c.documentElement||c.documentElement.contains(a))return!0;try{b.onremoved&&b.onremoved(a)}catch(a){setImmediate(function(){throw a})}return!1});for(var k=h.pop(),l=g.pop();k||l;)if(k===l)k=h.pop(),l=g.pop();else if(!l||k&&0!=(43&l.compareDocumentPosition(k))){try{b.onremoved&&b.onremoved(k)}catch(a){setImmediate(function(){throw a})}k=h.pop()}else{try{b.onadded&&b.onadded(l)}catch(a){setImmediate(function(){throw a})}l=g.pop()}},o=a.replace(/:(dir|lang|root|empty|blank|nth-child|nth-last-child|first-child|last-child|only-child|nth-of-type|nth-last-of-child|fist-of-type|last-of-type|only-of-type|not|matches|default)\b/gi,"");if(-1==o.indexOf(":"))e=new f({target:d});else if(e=new f({target:d}),f!=g){var p=/:(focus|active)\b/gi;if(p.test(o)){e=new h(new i,e);var p=/:(focus)\b/gi;o=o.replace(p,"")}var p=/:(active)\b/gi;p.test(o)&&(e=new h(new j,e),o=o.replace(p,""));var p=/:(target|checked|indeterminate|valid|invalid|in-range|out-of-range|user-error)\b/gi;if(p.test(o)){e=new h(new k(250),e),o=o.replace(p,"");var p=/:(any-link|link|visited|local-link|enabled|disabled|read-only|read-write|required|optional)\b/gi;o=o.replace(p,"")}var p=/:(any-link|link|visited|local-link|enabled|disabled|read-only|read-write|required|optional)\b/gi;p.test(o)&&(e=new h(new k(333),e),o=o.replace(p,""));var p=/:(hover)\b/gi;p.test(o)&&(e=new h(new l,e),o=o.replace(p,"")),-1!==o.indexOf(":")&&(e=new g)}n(e)}var e=b("src/core/dom-experimental-event-streams.js"),f=e.DOMUpdateEventStream,g=e.AnimationFrameEventStream,h=e.CompositeEventStream,i=e.FocusEventStream,j=e.MouseButtonEventStream,k=e.TimeoutEventStream,l=e.MouseEventStream;return d}(window,document),b.define("src/core/dom-query-selector-live.js"),a.exports=function(a,c){b("src/core/polyfill-dom-console.js"),b("src/core/polyfill-dom-requestAnimationFrame.js");var d=b("src/core/css-syntax.js"),e=b("src/core/dom-events.js"),f=b("src/core/dom-query-selector-live.js"),g={computeSelectorPriorityOf:function(a){"string"==typeof a&&(a=d.parse(a.trim()+"{}").value[0].selector);for(var b=0,c=0,e=0,f=0;f<a.length;f++)if(a[f]instanceof d.IdentifierToken)e++;else if(a[f]instanceof d.DelimToken)"."==a[f].value&&(c++,f++);else if(a[f]instanceof d.ColonToken)if(a[++f]instanceof d.ColonToken)e++,f++;else if(a[f]instanceof d.Func&&/^(not|matches)$/i.test(a[f].name)){var g=this.computeSelectorPriorityOf(a[f].value);e+=g%256,g/=256,c+=g%256,g/=256,b+=g}else c++;else a[f]instanceof d.SimpleBlock?"["==a[f].name&&c++:a[f]instanceof d.HashToken&&b++;return b>255&&(numberOfIds=255),c>255&&(c=255),e>255&&(e=255),256*(256*b+c)+e},findAllMatchingRules:function(a){return this.findAllMatchingRulesWithPseudo(a)},findAllMatchingRulesWithPseudo:function(a,b){b=b?(""+b).toLowerCase():b;for(var c=[],e=function(f){try{for(var h=f.length;h--;){var i=f[h];if(!i.disabled)if(i instanceof d.StyleRule)for(var j=i.subRules||g.splitRule(i),k=j.length;k--;){var l=j[k].selector.toCSSString().replace(/ *(\/\*\*\/|  ) */g," ").trim();if(b){var m=l.toLowerCase(),n=l.length-b.length-1;if(n<=0)continue;if(m.lastIndexOf("::"+b)==n-1)l=l.substr(0,n-1);else{if(m.lastIndexOf(":"+b)!=n)continue;l=l.substr(0,n)}0==l.trim().length?l="*":" "==l[l.length-1]?l+="*":"+"==l[l.length-1]?l+="*":">"==l[l.length-1]?l+="*":"~"==l[l.length-1]&&(l+="*")}var o=!1;try{if(a.matches)o=a.matches(l);else if(a.matchesSelector)o=a.matchesSelector(l);else if(a.oMatchesSelector)o=a.oMatchesSelector(l);else if(a.msMatchesSelector)o=a.msMatchesSelector(l);else if(a.mozMatchesSelector)o=a.mozMatchesSelector(l);else{if(!a.webkitMatchesSelector)throw new Error("no element.matches?");o=a.webkitMatchesSelector(l)}}catch(a){setImmediate(function(){throw a})}o&&c.push(j[k])}else i instanceof d.AtRule&&"media"==i.name&&e(i.toStylesheet().value)}}catch(a){setImmediate(function(){throw a})}},f=g.stylesheets.length;f--;){var h=g.stylesheets[f];e(h)}return c},allCSSProperties:null,getAllCSSProperties:function(){if(this.allCSSProperties)return this.allCSSProperties;for(var a=getComputedStyle(c.documentElement),b=new Array(a.length),d=a.length;d--;)b[d]=a[d];return-1==b.indexOf("content")&&b.push("content"),-1==b.indexOf("counter-reset")&&(b.push("counter-reset"),b.push("counter-increment"),g.computationUnsafeProperties["counter-reset"]=!0),this.allCSSProperties=b},computationUnsafeProperties:{bottom:!0,direction:!0,display:!0,"font-size":!0,height:!0,left:!0,"line-height":!0,"margin-left":!0,"margin-right":!0,"margin-bottom":!0,"margin-top":!0,"max-height":!0,"max-width":!0,"min-height":!0,"min-width":!0,"padding-left":!0,"padding-right":!0,"padding-bottom":!0,"padding-top":!0,right:!0,"text-align":!0,"text-align-last":!0,top:!0,width:!0,__proto__:null},inheritingProperties:{"border-collapse":!0,"border-spacing":!0,"caption-side":!0,color:!0,cursor:!0,direction:!0,"empty-cells":!0,"font-family":!0,"font-size":!0,"font-style":!0,"font-variant":!0,"font-weight":!0,font:!0,"letter-spacing":!0,"line-height":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,"list-style":!0,orphans:!0,quotes:!0,"text-align":!0,"text-indent":!0,"text-transform":!0,visibility:!0,"white-space":!0,widows:!0,"word-break":!0,"word-spacing":!0,"word-wrap":!0,__proto__:null},defaultStylesForTag:Object.create?Object.create(null):{},getDefaultStyleForTag:function(a){var b=this.defaultStylesForTag[a]
;if(b)return b;var d=c.createElement(a),e=this.defaultStylesForTag[a]=getComputedStyle(d);return e.display?e:(c.head.insertBefore(d,c.head.firstChild),e)},getSpecifiedStyle:function(b,e,f){var h;if((h=b.getAttribute("data-css-regions-fragment-of"))&&(h=c.querySelector('[data-css-regions-fragment-source="'+h+'"]')))return g.getSpecifiedStyle(h,e);if(b.currentStyle&&!a.opera){var i=b.myStyle[e]||b.currentStyle[e];return d.parseAListOfComponentValues(i)}try{if(i=b.style.getPropertyValue(e)||b.myStyle[e])return d.parseAListOfComponentValues(i)}catch(a){}var j=!1,k=0,i=new d.TokenList,l=f||(e in g.monitoredProperties?b.myMatchedRules||[]:g.findAllMatchingRules(b)),m=function(a){for(var b=a.length;b--;)if(!a[b].disabled)if(a[b]instanceof d.StyleRule){for(var c=a[b].getDeclarations(),f=c.length-1;f>=0;f--)if("DECLARATION"==c[f].type&&c[f].name==e){var h=g.computeSelectorPriorityOf(a[b].selector);j?c[f].important&&h>=k&&(k=h,i=c[f].value):c[f].important?(j=!0,k=h,i=c[f].value):h>=k&&(k=h,i=c[f].value)}}else a[b]instanceof d.AtRule&&"media"==a[b].name&&m(a[b].toStylesheet())};return m(l),i||null},stylesheets:[],loadStyleSheet:function(a,b){var c=d.parse(a).value;void 0!==b?g.stylesheets[b]=c:b=g.stylesheets.push(c),g.startMonitoringStylesheet(c)},loadStyleSheetTag:function(a,b){if(!a.hasAttribute("data-css-polyfilled")){if("LINK"==a.tagName)try{g.stylesheets[b]=new d.TokenList;var c=new XMLHttpRequest;c.href=a.href,c.open("GET",a.href,!0),c.ruleIndex=b,c.onreadystatechange=function(){4==this.readyState&&(200==this.status||0==this.status?g.loadStyleSheet(this.responseText,this.ruleIndex):cssConsole.log("css-cascade polyfill failled to load: "+this.href))},c.send()}catch(b){cssConsole.log("css-cascade polyfill failled to load: "+a.href)}else g.loadStyleSheet(a.textContent,b);a.setAttribute("data-css-polyfilled",!0)}},selectorForStylesheets:"style:not([data-no-css-polyfill]):not([data-css-polyfilled]), link[rel=stylesheet]:not([data-no-css-polyfill]):not([data-css-polyfilled])",loadAllStyleSheets:function(){var a=c.head||c.documentElement,b=a.querySelectorAll(g.selectorForStylesheets),d=this.stylesheets.length;this.stylesheets.length+=b.length;for(var e=b.length;e--;){var f=b[e];g.loadStyleSheetTag(f,d+e)}},monitoredProperties:Object.create?Object.create(null):{},monitoredPropertiesHandler:{onupdate:function(a,b){for(var c=g.monitoredProperties,d=b.getDeclarations(),e=d.length-1;e>=0;e--)if("DECLARATION"==d[e].type&&d[e].name in c){for(var f=c[d[e].name],h=f.length;h--;)f[h].onupdate(a,b);break}}},startMonitoringProperties:function(a,b){for(var c=a.length;c--;){var d=a[c];(g.monitoredProperties[d]||(g.monitoredProperties[d]=[])).push(b)}for(var e=0;e<g.stylesheets.length;e++){var f=g.stylesheets[e];g.startMonitoringStylesheet(f)}},startMonitoringStylesheet:function(b){for(var c=0;c<b.length;c++)if(b[c]instanceof d.StyleRule){if(b[c].isMonitored)continue;for(var e=b[c].getDeclarations(),f=e.length-1;f>=0;f--)if("DECLARATION"==e[f].type&&e[f].name in g.monitoredProperties){g.startMonitoringRule(b[c]);break}}else b[c]instanceof d.AtRule&&"media"==b[c].name&&a.matchMedia&&g.startMonitoringMedia(b[c])},startMonitoringMedia:function(b){try{var c=a.matchMedia(b.prelude.toCSSString()),d=b.toStylesheet().value;g.updateMedia(d,!c.matches,!1),c.addListener(function(a){g.updateMedia(d,!a.matches,!0)}),g.startMonitoringStylesheet(d)}catch(a){setImmediate(function(){throw a})}},updateMedia:function(a,b,d){for(var e=a.length;e--;){a[e].disabled=b;var f=a[e].subRules;if(f)for(var h=f.length;h--;)f[h].disabled=b}if(d)for(var e=a.length;e--;)for(var i=c.querySelectorAll(a[e].selector.toCSSString()),h=i.length;h--;)g.monitoredPropertiesHandler.onupdate(i[h],a[e])},splitRule:function(a){var b=[],c=new d.StyleRule;c.disabled=a.disabled;for(var e=0;e<a.selector.length;e++)a.selector[e]instanceof d.DelimToken&&","==a.selector[e].value?(c.value=a.value,b.push(c),c=new d.StyleRule,c.disabled=a.disabled):c.selector.push(a.selector[e]);return c.value=a.value,b.push(c),a.subRules=b},startMonitoringRule:function(a){if(!a.isMonitored){a.isMonitored=!0;for(var b=a.subRules||g.splitRule(a),c=0;c<b.length;c++)a=b[c],f(a.selector.toCSSString(),{onadded:function(b){(b.myMatchedRules=b.myMatchedRules||[]).unshift(a),g.monitoredPropertiesHandler.onupdate(b,a)},onremoved:function(b){b.myMatchedRules&&b.myMatchedRules.splice(b.myMatchedRules.indexOf(a),1),g.monitoredPropertiesHandler.onupdate(b,a)}})}},toCamelCase:function(a){return a.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})},polyfillStyleInterface:function(a){var b={get:function(){try{if(!this.parentElement)throw new Error("Please use the anHTMLElement.myStyle property to get polyfilled properties")}catch(a){return setImmediate(function(){throw a}),""}try{return this.clip=void 0===this.clip?"":this.clip,this.parentElement.getAttribute("data-style-"+a)}catch(c){var b=g.getSpecifiedStyle(this.parentElement,a,void 0,!0);return b&&b.length>0?b.toCSSString():""}},set:function(b){this.clip=void 0===this.clip?"":this.clip;try{if(!this.parentElement)throw new Error("Please use the anHTMLElement.myStyle property to set polyfilled properties")}catch(a){return void setImmediate(function(){throw a})}this.parentElement.getAttribute("data-style-"+a)!=b&&this.parentElement.setAttribute("data-style-"+a,b)}},e=[];try{e.push(Object.getPrototypeOf(c.documentElement.style)||CSSStyleDeclaration)}catch(a){}for(var f=e.length;f--;){var h=e[f];Object.defineProperty(h,a,b),Object.defineProperty(h,g.toCamelCase(a),b)}g.startMonitoringRule(d.parse('[style*="'+a+'"]{'+a+":attr(style)}").value[0]),g.startMonitoringRule(d.parse("[data-style-"+a+"]{"+a+":attr(style)}").value[0]),g.getAllCSSProperties().push(a),g.computationUnsafeProperties[a]=!0}};return e.EventTarget.implementsIn(g),Object.defineProperty(Element.prototype,"myStyle",{get:function(){var a=this.style;return a.parentElement||(a.parentElement=this),a}}),"no_auto_stylesheet_detection"in a||(g.loadAllStyleSheets(),c.addEventListener("DOMContentLoaded",function(){g.loadAllStyleSheets(),f(g.selectorForStylesheets,{onadded:function(a){g.loadStyleSheetTag(a),g.dispatchEvent("stylesheetadded")}})})),g}(window,document),b.define("src/core/css-cascade.js"),a.exports=function(a,b){function c(a){var b=a.usedStyle||getComputedStyle(a);return b.parentElement||(b.parentElement=a),b}function d(a){var b=a.cascadedStyle||a.specifiedStyle||a.currentStyle||getComputedStyle(a);return b.parentElement||(b.parentElement=a),b}function e(a){var b=a.style;return b.parentElement||(b.parentElement=a),b}function f(a){var b=a.style;return b.parentElement||(b.parentElement=a),b}function g(a,b,d){var e=null,g=c(a).getPropertyValue(b);if(d instanceof Array){if(d.indexOf(g)>=0)return null;d=""+d[0]}else d=""+d;if(g!=d){var h=f(a);e={value:h.getPropertyValue(b),priority:h.getPropertyPriority(b),property:b},h.setProperty(b,"",""),h.setProperty(b,""+d,"important")}return e}function h(a,b,c){var c=c||[];for(var d in b)if(b.hasOwnProperty(key)){var e=g(a,d,b[d]);e&&c.push(e)}return c}function i(a,b){if(b){var c=f(a);c.setProperty(b.property,"",""),b.value&&(c.setProperty(b.property,b.value,""),c.setProperty(b.property,b.value,b.priority))}}function j(a,b){if(b&&b.length>0)for(var c=b.length;c--;)i(a,b[c])}return{styleOf:e,usedStyleOf:c,currentStyleOf:d,runtimeStyleOf:f,enforceStyle:g,enforceStyles:h,restoreStyle:i,restoreStyles:j}}(window),b.define("src/core/css-style.js"),a.exports=function(a,b){function c(){var a=this||Object.create(d.prototype),c=b.createElement("style");c.id="virtual-stylesheet-"+e++,c.setAttribute("data-no-css-polyfill","true"),c.appendChild(b.createTextNode("")),b.querySelector(":root > head").appendChild(c);var f=c.sheet;f.cssRules||(f.cssRules=f.rules),f.removeRule=f.removeRule||function(a){return f.deleteRule(a)},f.addRule=f.addRule||function(a,b,c){var d=a+"{"+b+"}",e="number"==typeof c?c:f.cssRules.length;return f.insertRule(d,e)};var g=[];a.stylesheets=Object.create(null),a.createStyleSheet=function(b){return a.stylesheets[b]||(a.stylesheets[b]=new d(this,b))},a.addRule=function(a,b,c,d){a+=" ",b+=" ",g.push({stylesheet:c,selector:a,declarations:b,enabled:d}),d&&f.addRule(a,b)},a.disableAllRules=function(a){for(var b=f.cssRules.length,c=g.length;c--;){var d=g[c];d.enabled&&(b--,d.stylesheet==a&&(f.removeRule(b),d.enabled=!1))}},a.enableAllRules=function(a){for(var b=0,c=0;c<g.length;c++){var d=g[c];d.enabled?b++:d.stylesheet==a&&(f.addRule(d.selector,d.declarations,b),d.enabled=!0,b++)}},a.deleteAllRules=function(a){for(var b=f.cssRules.length,c=g.length;c--;){var d=g[c];d.enabled&&(b--,d.stylesheet==a&&(f.removeRule(b),g.splice(c,1)))}}}function d(a,b){this.factory=a,this.name=b,this.enabled=!0}var e=0;return d.prototype.addRule=function(a,b){this.factory.addRule(a,b,this.name,this.enabled)},d.prototype.set=function(a,b){a.id||(a.id=a.uniqueID);var c="#"+a.id,d="";for(var e in b)b.hasOwnProperty(e)&&(d+=e+": "+b[e]+" !important; ");this.addRule(c,d)},d.prototype.enable=function(){this.factory.enableAllRules(this.name),this.enabled=!0},d.prototype.disable=function(){this.factory.disableAllRules(this.name),this.enabled=!1},d.prototype.clear=function(){this.factory.deleteAllRules(this.name)},d.prototype.revoke=function(){this.clear()},c.VirtualStylesheet=d,c.VirtualStylesheetFactory=c,c}(window,document),b.define("src/core/css-virtual-stylesheet-factory.js"),function(){if(!("uniqueID"in document.documentElement)){var a=0;Object.defineProperty(Element.prototype,"uniqueID",{get:function(){return this.id?this.id:this.id="EL__"+ ++a+"__"}})}}(),b.define("src/core/polyfill-dom-uniqueID.js"),a.exports=function(a,c){var d=b("src/core/css-style.js"),e=(d.usedStyleOf,d.currentStyleOf,d.enforceStyle),f=d.restoreStyle;return{absoluteMinWidthOf:function(a){var b=e(a.parentNode,"position","relative"),c=e(a,"position","absolute"),d=e(a,"width","0px"),g=e(a,"min-width","0px"),h=a.offsetWidth;return f(a,g),f(a,d),f(a,c),f(a.parentNode,b),h},minWidthOf:function(a){var b=e(a.parentNode,"position","relative"),c=e(a.parentNode,"width","0px"),d=e(a.parentNode,"min-width","0px"),g=e(a.parentNode,"max-width","0px"),h=e(a,"position","absolute"),i=e(a,"width","auto"),j=a.offsetWidth;return f(a,i),f(a,h),f(a.parentNode,c),f(a.parentNode,g),f(a.parentNode,d),f(a.parentNode,b),j},maxWidthOf:function(a){var b=e(a.parentNode,"position","relative"),c=e(a,"position","absolute"),d=e(a,"width","auto"),g=a.offsetWidth;return f(a,d),f(a,c),f(a.parentNode,b),g},absoluteMaxWidthOf:function(a){var b=e(a.parentNode,"position","relative"),c=e(a.parentNode,"width","9999px"),d=e(a.parentNode,"min-width","9999px"),g=e(a,"position","absolute"),h=e(a,"width","auto"),i=a.offsetWidth;return f(a,h),f(a,g),f(a.parentNode,c),f(a.parentNode,d),f(a.parentNode,b),i}}}(window,document),b.define("src/core/css-sizing.js"),a.exports=function(a,b){var c=c||{};return c.getBox=function(a,b){var c=a.offsetWidth,d=a.offsetHeight,e=getComputedStyle(a),f=parseFloat(e.borderLeftWidth),g=parseFloat(e.borderRightWidth),h=parseFloat(e.borderTopWidth),i=parseFloat(e.borderBottomWidth),j=parseFloat(e.paddingLeft),k=parseFloat(e.paddingRight),l=parseFloat(e.paddingTop),m=parseFloat(e.paddingBottom),n=parseFloat(e.marginLeft),o=parseFloat(e.marginRight),p=parseFloat(e.marginTop),q=parseFloat(e.marginBottom),r={top:0,left:0,width:0,height:0};switch(b||"border-box"){case"content-box":r.top=h+l,r.left=f+j,r.width=c-f-j-k-g,r.height=d-h-l-m-i;break;case"padding-box":r.top=l,r.left=j,r.width=c-f-g,r.height=d-h-i;break;case"border-box":r.top=0,r.left=0,r.width=c,r.height=d;break;case"margin-box":r.top=0-p,r.left=0-n,r.width=c+n+o,r.height=d+p+q;break;default:throw new TypeError("Invalid parameter, boxType: "+b)}return r},c}(window,document),b.define("src/core/css-box.js"),a.exports=function(a,c){var d=b("src/core/css-box.js").getBox,e={convertToPixels:function a(b,d,e){if("string"==typeof b)var f=b.match(/^\s*(-?\d+(?:\.\d+)?)(\S*)\s*$/),g=f?parseFloat(f[1]):0,h=f?f[2]:"";else var g=b.value,h=b.unit;var i=a.converters[h];if(!i)throw new Error("No suitable conversion from unit '"+h+"' to unit 'px'");var j=i.call(null,g,d||c.documentElement,e);return Math.round(20*j)/20},convertFromPixels:function a(b,d,e,f){var g=a.converters[d];if(!g)throw new Error("No suitable conversion to unit '"+d+"' from unit 'px'");var h=g.call(null,b,e||c.documentElement,f);return Math.round(20*h)/20}};return e.convertToPixels.converters={px:function(a){return a},in:function(a){return 96*a},cm:function(a){return a/.02645833333},mm:function(a){return a/.26458333333},pt:function(a){return a/.75},pc:function(a){return a/.0625},em:function(a,b){return a*parseFloat(b?getComputedStyle(b).fontSize:16)},rem:function(a,b){return a*parseFloat(b?getComputedStyle(b.ownerDocument.documentElement).fontSize:16)},vw:function(b,c){return b/100*a.innerWidth},vh:function(b,c){return b/100*a.innerHeight},"%":function(a,b,c){c=c||{};var e=b?d(b,c.boxType):{top:0,left:0,width:0,height:0};switch(!0){case c.isRadius:var f=Math.sqrt(e.height*e.height+e.width*e.width)/Math.sqrt(2);return Math.round(a/100*f);case c.isHeightRelated:return a/100*e.height;case c.isWidthRelated:default:return a/100*e.width}}},e.convertFromPixels.converters={px:function(a){return a},in:function(a){return a/96},cm:function(a){return.02645833333*a},mm:function(a){return.26458333333*a},pt:function(a){return.75*a},pc:function(a){return.0625*a},em:function(a,b){return a/parseFloat(b?getComputedStyle(b).fontSize:16)},rem:function(a,b){return a/parseFloat(b?getComputedStyle(b.ownerDocument.documentElement).fontSize:16)},vw:function(b,c){return 100*b/a.innerWidth},vh:function(b,c){return 100*b/a.innerHeight},"%":function(a,b,c){c=c||{};var e=b?d(b,c.boxType):{top:0,left:0,width:0,height:0};switch(!0){case c.isRadius:var f=Math.sqrt(e.height*e.height+e.width*e.width)/Math.sqrt(2);return Math.round(100*a/f);case c.isHeightRelated:return 100*a/e.height;case c.isWidthRelated:default:return 100*a/e.width}}},e}(window,document),b.define("src/core/css-units.js"),a.exports=function(a,c){function d(){this.minType=v,this.minValue="auto",this.maxType=v,this.maxValue="auto"}function e(a,b,c){this.type=a|q,this.name=b,this.index=0|c}function f(a,b){this.element=a,this.parentGrid=a.parentGridLayout=b,this.reset(),this.buggy=!0}function g(a){this.element=a,this.element.gridLayout=this,this.items=[],this.reset(),this.isLayoutScheduled=!1}var h=b("src/core/css-syntax.js"),i=b("src/core/css-style.js"),j=i.usedStyleOf,k=i.currentStyleOf,l=(i.enforceStyle,i.restoreStyle,b("src/core/css-virtual-stylesheet-factory.js"));b("src/core/polyfill-dom-uniqueID.js"),b("src/core/polyfill-dom-requestAnimationFrame.js");var m=new l,n=function(a,b){return b&&(a=(b.id||b.uniqueID)+"-"+a),m.createStyleSheet(a)},o=b("src/core/css-sizing.js"),p=b("src/core/css-units.js"),q=0,r=1,s=2,t=1,u=3,v=0,w=1,x=2,y=3,z=4,A=5;return d.prototype={toString:function(){if(this.minType!=this.maxType||this.minValue!=this.maxValue){var a="auto",b="auto";switch(this.minType){case v:a="auto";break;case w:a=this.minValue+"px";break;case x:a=this.minValue+"fr";break;case y:a=this.minValue+"%";break;case z:a="min-content";break;case A:a="max-content"}switch(this.maxType){case v:b="auto";break;case w:b=this.maxValue+"px";break;case x:b=this.maxValue+"fr";break;case y:b=this.maxValue+"%";break;case z:b="min-content";break;case A:b="max-content"}return"minmax("+a+", "+b+")"}switch(this.minType){case v:return"auto";case w:return this.minValue+"px";case x:return this.minValue+"fr";case y:return this.minValue+"%";case z:return"min-content";case A:return"max-content"}},setValue:function(a,b){this.minType=this.maxType=a,this.minValue=this.maxValue=b},setMaxValue:function(a,b){this.maxType=a,this.maxValue=b},setMinValue:function(a,b){this.minType=a,this.minValue=b}},e.prototype={extractXLineIndex:function(a,b){throw"Not implemented"},extractYLineIndex:function(a,b){throw"Not implemented"},toString:function(){}},f.prototype={dispose:function(){this.element.parentGridLayout=void 0},reset:function(){this.order=0,this.minWidth=0,this.maxWidth=0,this.hMargins=0,this.vMargins=0,this.hPaddings=0,this.vPaddings=0,this.hBorders=0,this.vBorders=0,this.xStart=-1,this.xEnd=-1,this.specifiedXStart=this.specifiedXStart||new e,this.specifiedXStart.type=q,this.specifiedXStart.name=void 0,this.specifiedXStart.index=void 0,this.specifiedXEnd=this.specifiedXEnd||new e,this.specifiedXEnd.type=q,this.specifiedXEnd.name=void 0,this.specifiedXEnd.index=void 0,this.yStart=-1,this.yEnd=-1,this.specifiedYStart=this.specifiedYStart||new e,this.specifiedYStart.type=q,this.specifiedYStart.name=void 0,this.specifiedYStart.index=void 0,this.specifiedYEnd=this.specifiedYEnd||new e,this.specifiedYEnd.type=q,this.specifiedYEnd.name=void 0,this.specifiedYEnd.index=void 0,this.marginAlignX=t,this.marginAlignY=t,this.paddingAlignX=u,this.paddingAlignY=u},updateFromElement:function(){var a=this.element,b=j(a),c=k(a),d=function(a){var b=c[a];return void 0===b?"":b};if(this.reset(),this.buggy=!1,this.order=0|parseInt(c.order),this.minWidth=o.minWidthOf(a),this.maxWidth=o.maxWidthOf(a),this.hMargins=parseInt(b.getPropertyValue("margin-left"))+parseInt(b.getPropertyValue("margin-right")),this.vMargins=parseInt(b.getPropertyValue("margin-top"))+parseInt(b.getPropertyValue("margin-bottom")),this.hPaddings=parseInt(b.getPropertyValue("padding-left"))+parseInt(b.getPropertyValue("padding-right")),this.vPaddings=parseInt(b.getPropertyValue("padding-top"))+parseInt(b.getPropertyValue("padding-bottom")),this.hBorders=parseInt(b.getPropertyValue("border-left-width"))+parseInt(b.getPropertyValue("border-right-width")),this.vBorders=parseInt(b.getPropertyValue("border-top-width"))+parseInt(b.getPropertyValue("border-bottom-width")),c["grid-area"]){var e=d("grid-area").split("/"),f=/^\s*([a-z][-_a-z0-9]*)\s*$/i,g=e[0]||"auto",h=e[1]||(f.test(g)?g:"auto"),i=e[2]||(f.test(g)?g:"auto"),l=e[3]||(f.test(h)?h:"auto");this.parseLocationInstructions(this.specifiedXStart,this.specifiedXEnd,h+" / "+l),this.parseLocationInstructions(this.specifiedYStart,this.specifiedYEnd,g+" / "+i)}if(c["grid-column"]||c["grid-column-start"]||c["grid-column-end"]){var e=d("grid-column").split("/"),m=d("grid-column-start")||e[0]||"auto",n=d("grid-column-end")||e[1]||e[0]||m;this.parseLocationInstructions(this.specifiedXStart,this.specifiedXEnd,m+" / "+n)}if(c["grid-row"]||c["grid-row-start"]||c["grid-row-end"]){var e=d("grid-row").split("/"),m=d("grid-row-start")||e[0],n=d("grid-row-end")||e[1]||e[0];this.parseLocationInstructions(this.specifiedYStart,this.specifiedYEnd,m+" / "+n)}},parseLocationInstructions:function(a,b,c){var d=h.parseCSSValue(c),e=d.filter(function(a){return!(a instanceof h.WhitespaceToken)});e.toCSSString=function(){return d.toCSSString()};var f=0,g=function(a){return e[f]instanceof h.IdentifierToken?a.name?(console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (duplicate line name)"),this.buggy=!0,!0):(a.name=e[f++].value,!1):e[f]instanceof h.NumberToken?(a.index=0|e[f].value,e[f].value!=a.index?(console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (non-integer number)"),this.buggy=!0,!0):0==a.index?(console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (line index can't be zero)"),this.buggy=!0,!0):a.index<=0&&a.type==s?(console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (negative spans not allowed)"),this.buggy=!0,!0):(f++,!1)):e[f]instanceof h.DelimToken&&"/"==e[f].value||(console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (invalid token)"),this.buggy=!0,!0)},i=function(a){g.call(this,a),!this.buggy&&e[f]&&g.call(this,a)};if(!e[f])return console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (empty declaration)"),void(this.buggy=!0);for(;;){if(e[f]instanceof h.IdentifierToken){if("span"==e[f].value){if(!e[++f])return console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (span is not a valid line name, more tokens expected)"),void(this.buggy=!0);if(a.type=s,a.name=void 0,a.index=void 0,i.call(this,a),this.buggy)return;break}if("auto"==e[f].value){a.type=q,a.name=void 0,a.index=void 0,f++;break}if(a.type=r,a.name=void 0,a.index=void 0,i.call(this,a),this.buggy)return;break}if(e[f]instanceof h.DelimToken&&"/"==e[f].value)return console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (no token to analyze before the slash token)"),void(this.buggy=!0);if(a.type=r,i.call(this,a),this.buggy)return;break}if(e[f]){if(!(e[f]instanceof h.DelimToken&&"/"==e[f].value))return console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (expected slash / or end of declaration)"),void(this.buggy=!0);if(!e[++f])return console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (expected at least one more token after the slash token)"),void(this.buggy=!0)}else a.type==r&&void 0!=a.name&&void 0==a.index?(b.type=r,b.name=a.name,b.index=void 0):(b.type=q,b.name=void 0,b.index=void 0);for(;e[f];){if(!(e[f]instanceof h.IdentifierToken)){if(e[f]instanceof h.DelimToken&&"/"==e[f].value)return console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (no token to analyze before the slash token)"),void(this.buggy=!0);if(b.type=r,i.call(this,b),this.buggy)return;break}if("span"!=e[f].value){if("auto"==e[f].value){b.type=q,b.name=void 0,b.index=void 0,f++;break}if(b.type=r,b.name=void 0,b.name=void 0,b.index=void 0,i.call(this,b),this.buggy)return;break}if(!e[++f])return console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (span is not a valid line name, more tokens expected)"),void(this.buggy=!0);if(b.type=s,b.name=void 0,b.index=void 0,i.call(this,b),this.buggy)return;break}return e[f]?(console.error("INVALID DECLARATION: grid-column/row: "+e.toCSSString()+" (tokens after end)"),void(this.buggy=!0)):(b.type==s&&a.type==s&&(b.type=q,b.index=void 0,b.name=void 0),[a,b])}},g.prototype={reset:function(){this.hlPadding=0,this.hrPadding=0,this.vtPadding=0,this.vbPadding=0,this.rowGap=0,this.colGap=0,this.xLines=[],this.xSizes=[],this.yLines=[],this.ySizes=[],this.growX=!1,this.growY=!0,this.growDense=!1,this.rcMatrix=[],this.specifiedXLines=[],this.specifiedXSizes=[],this.specifiedYLines=[],this.specifiedYSizes=[],this.defaultXSize=new d,this.defaultYSize=new d},R:function(a,b){return this.growY?b:a},C:function(a,b){return this.growY?a:b},dispose:function(){for(var a=this.items.length;a--;)this.items[a].dispose();this.element.gridLayout=void 0},updateFromElement:function(){for(var a=this.items.length;a--;)this.items[a].dispose();this.items.length=0;for(var b=this.element.firstElementChild;b;){var c=new f(b,this);c.updateFromElement(),this.items.push(c),b=b.nextElementSibling}var d=this.items.map(function(a,b){return{item:a,order:a.order,position:b}});d.sort(function(a,b){return a.order==b.order?a.position-b.position:a.order>b.order?1:-1}),this.items=d.map(function(a){return a.item}),this.reset();var e=j(this.element),g="";if((g=e["grid-template"])&&this.parseGridTemplate(g),(g=e["grid-template-rows"])&&this.parseRowsTemplate(g),(g=e["grid-template-columns"])&&this.parseColumnsTemplate(g),(g=e["grid-template-areas"])&&this.parseAreasTemplate(g),(g=e["grid-auto-rows"])&&this.parseAutoRowsBreadth(g),(g=e["grid-auto-columns"])&&this.parseAutoColumnsBreadth(g),g=e["grid-auto-flow"]){var h=g.trim().toLowerCase().split(/\s+/g);h.indexOf("row")>=0?(this.growX=!1,this.growY=!0):h.indexOf("column")>=0&&(this.growX=!0,this.growY=!1),h.indexOf("dense")>=0?this.growDense=!0:this.growDense=!1}(g=e["grid-row-gap"])&&this.parseGridRowGap(g),(g=e["grid-column-gap"])&&this.parseGridColumnGap(g),(g=e["grid-gap"])&&this.parseGridGap(g);var i=e;this.hlPadding=parseInt(i.getPropertyValue("border-left-width"))+parseInt(i.getPropertyValue("padding-left")),this.hrPadding=parseInt(i.getPropertyValue("border-right-width"))+parseInt(i.getPropertyValue("padding-right")),this.vtPadding=parseInt(i.getPropertyValue("border-top-width"))+parseInt(i.getPropertyValue("padding-top")),this.vbPadding=parseInt(i.getPropertyValue("border-bottom-width"))+parseInt(i.getPropertyValue("padding-bottom"))},resetItems:function(){for(var a=this.items.length;a--;){var b=this.items[a];b.xStart=b.xEnd=b.yStart=b.yEnd=-1}},resetLinesToSpecified:function(){this.xLines=this.specifiedXLines.slice(0),this.xSizes=this.specifiedXSizes.slice(0),this.yLines=this.specifiedYLines.slice(0),this.ySizes=this.specifiedYSizes.slice(0)},parseTrackBreadthToken:function(a){if(a instanceof h.IdentifierToken){if("auto"==a.value)return{type:v,value:"auto"};if("min-content"==a.value)return{type:z,value:"min-content"};if("max-content"==a.value)return{type:A,value:"max-content"}}else{if(a instanceof h.DimensionToken)return"fr"==a.unit?{type:x,value:a.value}:{type:w,value:p.convertToPixels(a.toCSSString(),this.element)};if(a instanceof h.PercentageToken)return{type:y,value:a.value}}return null},parseTrackBreadth:function(a,b){var c=!1,e=new d,f=function(){var d=this.parseTrackBreadthToken(a[b]);if(d)return b++,d;console.error("INVALID DECLARATION: grid-template-rows/columns: "+a.toCSSString()+" (unrecognized track breadth)"),c=!0};if(a[b]instanceof h.Func&&"minmax"==a[b].name){var g=a,i=b,j=g[i].getArguments();if(2!=j.length)return console.error("INVALID DECLARATION: grid-template-rows/columns: "+g.toCSSString()+" (invalid number of arguments to the minmax function)"),void(c=!0);a=j[0].filter(function(a){return!(a instanceof h.WhitespaceToken)}),b=0;var k=f.call(this);e.minType=k.type,e.minValue=k.value,a=j[1].filter(function(a){return!(a instanceof h.WhitespaceToken)}),b=0;var k=f.call(this);e.maxType=k.type,e.maxValue=k.value,a=g,b=i+1}else{var k=f.call(this);e.minType=e.maxType=k.type,e.minValue=e.maxValue=k.value}return{result:e,I:b}},parseAutoRowsBreadth:function(a){var b=h.parseCSSValue(a),c=b.filter(function(a){return!(a instanceof h.WhitespaceToken)});c.toCSSString=function(){return b.toCSSString()};var d=this.parseTrackBreadth(c,0);if(!d.result)throw"TODO: better error message";this.defaultYSize=d.result},parseAutoColumnsBreadth:function(a){var b=h.parseCSSValue(a),c=b.filter(function(a){return!(a instanceof h.WhitespaceToken)});c.toCSSString=function(){return b.toCSSString()};var d=this.parseTrackBreadth(c,0);if(!d.result)throw"TODO: better error message";this.defaultXSize=d.result},parseGridTemplate:function(a){var b=!1,a=a.replace(/\/\*(.*?)\*\//g,""),c=a.split("/");if(2==c.length){if(this.parseColumnsTemplate(c[0]))return b=!0;a=c[1]}else if(c.length>=3)return b=!0;if(/"|'/.test(a)){var d=[];if(a=a.replace(/\s*("(?:.*?)"|'(?:.*?)')\s*([-_a-zA-Z0-9]*)\s*/g,function(a,b,c){return d.push(b)," "+(c||"auto")+" "}),a=a.replace(/\)\s*\(/g," "),this.parseRowsTemplate(a))return b=!0;if(this.parseAreasTemplate(d.join(" ")))return b=!0}else if(this.parseRowsTemplate(a))return b=!0;return b},parseAreasTemplate:function(a){var b=h.parseCSSValue(a),c=b.filter(function(a){return!(a instanceof h.WhitespaceToken)});c.toCSSString=function(){return b.toCSSString()};for(var d=0,e=/^([-_a-zA-Z0-9]+|[.]+)\s*/,f=[],g=Object.create(null);c[d];){for(var i=""+c[d++].value,j=[];""!==i;){var k=e.exec(i);if(!k||2!=k.length)return!0;i=i.substr(k[0].length);var l=k[1];if("."!=l&&"."!=l[0]){if(g[l]||(g[l]={xStart:j.length,xEnd:j.length+1,yStart:d-1,yEnd:d}),g[l].xStart>j.length)return!0;if(g[l].yStart>d-1)return!0;g[l].xEnd=Math.max(g[l].xEnd,j.length+1),g[l].yEnd=Math.max(g[l].yEnd,d)}j.push(k[1])}f.push(j)}for(var m in g)for(var n=g[m],o=n.yStart;o<n.yEnd;o++)for(var p=n.xStart;p<n.xEnd;p++)if(f[o][p]!=m)return!0;for(var m in g){for(var n=g[m];this.specifiedYLines.length<=n.yEnd;)this.specifiedYLines.push([]),this.specifiedYSizes.push(this.defaultYSize);for(this.specifiedYLines[n.yStart].push(m+"-start"),this.specifiedYLines[n.yEnd].push(m+"-end");this.specifiedXLines.length<=n.xEnd;)this.specifiedXLines.push([]),this.specifiedXSizes.push(this.defaultXSize);this.specifiedXLines[n.xStart].push(m+"-start"),this.specifiedXLines[n.xEnd].push(m+"-end")}},parseTrackDefinitions:function(a,b,c){c=c.replace(/\[/g,"(").replace(/\]/g,")").replace(/repeat\(\s*([0-9]+)\s*\,((?:\([^()]*\)|[^()])+)\)/gi,function(a,b,c){for(var d=" ",e=parseInt(b);e--;)d+=c+" ";return d}),c=c.replace(/\)\s*\(/g," ");var d=h.parseCSSValue(c),e=d.filter(function(a){return!(a instanceof h.WhitespaceToken)});e.toCSSString=function(){return d.toCSSString()};var f=0,g=!1,i=function(){var b=[];if(e[f]instanceof h.SimpleBlock&&"("==e[f].name){for(var c=e[f].value,d=c.length;d--;)if(c[d]instanceof h.IdentifierToken)b.push(c[d].value);else if(!(c[d]instanceof h.WhitespaceToken))return console.error("INVALID DECLARATION: grid-template-rows/columns: "+e.toCSSString()+" (unrecognized line name)"),void(g=!0);f++}a.push(b),b=[]},j=function(){var a=this.parseTrackBreadth(e,f);b.push(a.result),f=a.I};for(i();e[f]&&(j.call(this),!g)&&(i(),!g););},parseColumnsTemplate:function(a){return this.parseTrackDefinitions(this.specifiedXLines,this.specifiedXSizes,a)},parseRowsTemplate:function(a){return this.parseTrackDefinitions(this.specifiedYLines,this.specifiedYSizes,a)},parseTracksTemplate:function(a,b,c){b&&this.parseRowsTemplate(b),a&&this.parseColumnsTemplate(a),c&&this.parseAreasTemplate(c)},parseGridRowGap:function(a){this.rowGap=p.convertToPixels(a,this.element,{isHeightRelated:!0})},parseGridColumnGap:function(a){this.colGap=p.convertToPixels(a,this.element,{isWidthRelated:!0})},parseGridGap:function(a){var b=a.trim().split(/\s+/);this.parseGridRowGap(b[0]),this.parseGridColumnGap(b[1]||a)},buildExplicitMatrix:function(){this.resetLinesToSpecified(),this.rcMatrix=[],this.growY?(this.ensureRows(this.ySizes.length),this.ensureColumns(this.xSizes.length)):(this.ensureColumns(this.xSizes.length),this.ensureRows(this.ySizes.length))},buildImplicitMatrix:function(){this.buildExplicitMatrix(),this.positionNonAutoItems(),this.positionAutoInColumnOnlyItems(),this.autoGrow()},ensureRows:function(a){if(this.growY){for(;this.ySizes.length<a;)this.ySizes.push(this.defaultYSize);for(;this.rcMatrix.length<a;)this.rcMatrix.push([])}else{for(;this.ySizes.length<a;)this.ySizes.push(this.defaultYSize);for(var b=this.rcMatrix.length;b--;)this.rcMatrix[b].length<a&&(this.rcMatrix[b].length=a)}},ensureColumns:function(a){if(this.growY){for(;this.xSizes.length<a;)this.xSizes.push(this.defaultXSize);for(var b=this.rcMatrix.length;b--;)this.rcMatrix[b].length<a&&(this.rcMatrix[b].length=a)}else{for(;this.xSizes.length<a;)this.xSizes.push(this.defaultXSize);for(;this.rcMatrix.length<a;)this.rcMatrix.push([])}},markAsOccupied:function(a){var b=a.xStart,c=a.yStart,d=a.xEnd,e=a.yEnd;if(this.growY){this.ensureRows(e);for(var f=c;f<e;f++){this.rcMatrix[f].length<d-1&&(this.rcMatrix[f].length=d-1);for(var g=b;g<d;g++)this.rcMatrix[f][g]=a}}else{this.ensureColumns(d);for(var g=b;g<d;g++){this.rcMatrix[g].length<e-1&&(this.rcMatrix[g].length=e-1);for(var f=c;f<e;f++)this.rcMatrix[g][f]=a}}},positionNonAutoItems:function(){for(var a=0,b=this.items.length;a<b;a++){var c=this.items[a];if(c.specifiedXStart.type==r&&c.specifiedYStart.type==r){var d=this.findXStart(c),e=this.findYStart(c),f=this.findXEnd(c),g=this.findYEnd(c);c.xStart=d,c.yStart=e,c.xEnd=f,c.yEnd=g,this.markAsOccupied(c)}}},positionAutoInColumnOnlyItems:function(){if(this.growY)for(var a=0,b=this.items.length;a<b;a++){var c=this.items[a];if(c.specifiedYStart.type==r&&-1==c.yStart){var d=this.findYStart(c),e=this.findYEnd(c),f=1;c.specifiedXEnd.type==s&&(void 0===c.specifiedXEnd.name?f=c.specifiedXEnd.index:(f=1,console.error("[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+"))),this.ensureRows(e);a:for(var g=0;;g++){for(var h=g+f-1;h>=g;h--)for(var i=d;i<e;i++)if(this.rcMatrix[i][h])continue a;break}var j=g,k=g+f;c.xStart=j,c.yStart=d,c.xEnd=k,c.yEnd=e,this.markAsOccupied(c)}}else for(var a=0,b=this.items.length;a<b;a++){var c=this.items[a];if(c.specifiedXStart.type==r&&-1==c.xStart){var j=this.findXStart(c),k=this.findXEnd(c),l=1
;c.specifiedYEnd.type==s&&(l=void 0===c.specifiedYEnd.name?c.specifiedYEnd.index:1),this.ensureColumns(k);a:for(var m=0;;m++){for(var i=m+l-1;i>=m;i--)for(var h=j;h<k;h++)if(this.rcMatrix[h][i])continue a;break}var d=m,e=m+l;c.xStart=j,c.yStart=d,c.xEnd=k,c.yEnd=e,this.markAsOccupied(c)}}},autoGrow:function(){var a=function(a){for(;a>=this.xLines.length;)this.xLines.push(["*"]),this.xSizes.push(this.defaultXSize)},b=function(a){for(;a>=this.yLines.length;)this.yLines.push(["*"]),this.ySizes.push(this.defaultYSize)};this.resetLinesToSpecified(),a.call(this,1),b.call(this,1);for(var c=this.items.length;c--;){var d=this.items[c];if(d.xEnd>0&&a.call(this,d.xEnd),d.yEnd>0&&b.call(this,d.yEnd),!(d.xEnd>0&&d.yEnd>0)){if(d.specifiedXEnd.type==r||d.specifiedXStart.type==r){var e=(this.findXStart(d),this.findXEnd(d));a.call(this,e)}if(d.specifiedYEnd.type==r||d.specifiedYStart.type==r){var f=this.findYStart(d),g=this.findYEnd(d);g<=f&&(g=f+1),b.call(this,g)}d.specifiedXEnd.type==s&&void 0===d.specifiedXEnd.name&&a.call(this,d.specifiedXEnd.index),d.specifiedYEnd.type==s&&void 0===d.specifiedYEnd.name&&b.call(this,d.specifiedYEnd.index)}}if(this.growY){for(;this.ySizes.length>this.rcMatrix.length;)this.rcMatrix.push([]);for(var h=this.rcMatrix.length;h--;)this.rcMatrix[h].length=this.xSizes.length}else{for(;this.xSizes.length>this.rcMatrix.length;)this.rcMatrix.push([]);for(var h=this.rcMatrix.length;h--;)this.rcMatrix[h].length=this.ySizes.length}},scheduleRelayout:function(){function a(){for(var a=[],c=b.element;c=c.parentNode;)"scrollTop"in c&&a.push({element:c,left:c.scrollLeft,top:c.scrollTop});return a}var b=this;b.isLayoutScheduled||(b.isLayoutScheduled=!0,requestAnimationFrame(function(){try{var c=a();b.revokePolyfilledStyle(),b.updateFromElement(),b.performLayout(),b.generatePolyfilledStyle(),c.forEach(function(a){a.element.scrollTop=a.top,a.element.scrollLeft=a.left})}finally{b.isLayoutScheduled=!1}}))},performLayout:function(){this.buildImplicitMatrix();var a={x:0,y:0};if(this.growY)for(var b=0;b<this.items.length;b++){var c=this.items[b];if(-1==c.xEnd||-1==c.yEnd)if(this.growDense&&(a={x:0,y:0}),c.specifiedXStart.type==r){var d=this.findXStart(c);a.x>d&&a.y++,a.x=d;var e=this.findXEnd(c);d>=e&&(e=d+1),c.xStart=d,c.xEnd=e;var f=1;c.specifiedYEnd.type==s&&(f=void 0===c.specifiedYEnd.name?c.specifiedYEnd.index:1);a:for(;;){this.ensureRows(a.y+f);for(var g=a.y+f-1;g>=a.y;g--)for(var h=d;h<e;h++)if(this.rcMatrix[g][h]){a.y=g+1;continue a}break}c.xStart=d,c.xEnd=e,c.yStart=a.y,c.yEnd=a.y+f,this.markAsOccupied(c)}else{var i=1;c.specifiedXEnd.type==s&&(void 0===c.specifiedXEnd.name?i=c.specifiedXEnd.index:(i=1,console.error("[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+")));var f=1;c.specifiedYEnd.type==s&&(f=void 0===c.specifiedYEnd.name?c.specifiedYEnd.index:1);var j=function(){return a.x++,a.x+i>this.rcMatrix[0].length&&(a.y++,this.ensureRows(a.y+f),a.x=0),!0};a:for(;;){this.ensureRows(a.y+f);for(var g=a.y+f-1;g>=a.y;g--)for(var h=a.x+i-1;h>=a.x;h--)if(this.rcMatrix[g][h]){j.call(this);continue a}break}c.xStart=a.x,c.xEnd=a.x+i,c.yStart=a.y,c.yEnd=a.y+f,this.markAsOccupied(c)}}else for(var b=0;b<this.items.length;b++){var c=this.items[b];if(-1==c.xEnd||-1==c.yEnd)if(this.growDense&&(a={x:0,y:0}),c.specifiedYStart.type==r){var k=this.findYStart(c);a.y>k&&a.x++,a.y=k;var l=this.findYEnd(c);k>=l&&(l=k+1),c.yStart=k,c.yEnd=l;var i=1;c.specifiedXEnd.type==s&&(void 0===c.specifiedXEnd.name?i=c.specifiedXEnd.index:(i=1,console.error("[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+")));a:for(;;){this.ensureColumns(a.x+i);for(var h=a.x+i-1;h>=a.x;h--)for(var g=k;g<l;g++)if(this.rcMatrix[h][g]){a.x=h+1;continue a}break}c.yStart=k,c.yEnd=l,c.xStart=a.x,c.yEnd=a.x+i,this.markAsOccupied(c)}else{var f=1;c.specifiedYEnd.type==s&&(f=void 0===c.specifiedYEnd.name?c.specifiedYEnd.index:1);var i=1;c.specifiedXEnd.type==s&&(void 0===c.specifiedXEnd.name?i=c.specifiedXEnd.index:(i=1,console.error("[CSS-GRID] UNSUPPORTED: grid-row/column: auto / span [0-9]+ [A-Z]+")));var j=function(){return a.y++,a.y+f>this.rcMatrix[0].length&&(a.x++,this.ensureRows(a.x+i),a.y=0),!0};a:for(;;){this.ensureColumns(a.x+i);for(var h=a.x+i-1;h>=a.x;h--)for(var g=a.y+f-1;g>=a.y;g--)if(this.rcMatrix[h][g]){j.call(this);continue a}break}c.xStart=a.x,c.xEnd=a.x+i,c.yStart=a.y,c.yEnd=a.y+f,this.markAsOccupied(c)}}this.computeAbsoluteTrackBreadths()},computeAbsoluteTrackBreadths:function(){var a=n("no-children",this.element);a.set(this.element,{border:"none",padding:"0px","min-height":"0px"});for(var b=this.items.length;b--;)a.set(this.items[b],{display:"none"});var c=1,d=9999999,e=this.growY?this.rcMatrix.length:this.rcMatrix[0].length,f=this.growY?this.rcMatrix[0].length:this.rcMatrix.length,g=this.element.offsetWidth-this.hlPadding-this.hrPadding,h=this.element.offsetHeight-this.vtPadding-this.vbPadding,i=Math.max(0,g-Math.max(0,f-1)*this.colGap),k=Math.max(0,h-Math.max(0,e-1)*this.rowGap);a.revoke();var l=function(a){var b=0,e=d;switch(a.minType){case w:b=a.minValue;break;case y:b=a.minValue*s/100}switch(a.maxType){case w:e=a.minValue;break;case y:e=a.minValue*s/100;break;case x:e=b;break;default:e=d}return{base:b,limit:e,breadth:0,flags:0|(e==d?c:0)}},m=function(a,b,e,f,g){var h=e.length,i=f/h;if("base"==b){if(g)for(var j=e.length;j--;){var k=e[j].x,l=a[k].base+i;g&&a[k].flags&0==c&&l>a[k].limit&&(i-=l-a[k].limit)}for(var j=e.length;j--;){var k=e[j].x;a[k].base+=i}}else if("limit"==b)for(var j=e.length;j--;){var k=e[j].x;a[k].flags&c&&a[k].limit==d?a[k].limit=a[k].base+i:a[k].limit+=i}},o=function(a,b,e,f,g,h){for(var i=0,j=b.length;j--;){var k=!1;if(b[j].minType==z||b[j].minType==v)for(var l=this.items.length;l--;){var n=this.items[l],o=g(n),p=h(n);o>j||p<=j||p-o!=1||(a[j].base=Math.max(a[j].base,e(n)),i++,k=!0)}else if(b[j].minType==A)for(var l=this.items.length;l--;){var n=this.items[l],o=g(n),p=h(n);o>j||p<=j||p-o!=1||(a[j].base=Math.max(a[j].base,f(n)),i++,k=!0)}if(b[j].maxType==z)for(var l=this.items.length;l--;){var n=this.items[l],o=g(n),p=h(n);o>j||p<=j||p-o!=1||(a[j].limit==d?a[j].limit=e(n):a[j].limit=Math.max(a[j].limit,e(n)),k||i++)}else if(b[j].maxType==A||b[j].minType==v)for(var l=this.items.length;l--;){var n=this.items[l],o=g(n),p=h(n);o>j||p<=j||p-o!=1||(a[j].limit==d?a[j].limit=f(n):a[j].limit=Math.max(a[j].limit,f(n)),k||i++)}a[j].limit!=d&&(a[j].flags=a[j].flags&~c)}for(var q=2;i<this.items.length&&q<=b.length;q++)a:for(var l=this.items.length;l--;){var n=this.items[l],o=g(n),p=h(n);if(p-o==q){for(var r=0,s=0,t=o;t<p;t++){if(b[t].maxType==x)continue a;r+=a[t].base,s+=a[t].limit}s>d&&(s=d);var u=function(c,e,f){for(;;){for(var g=c,h=o;h<p;h++)g-=a[h][e];if(g<=1/1024){for(var h=o;h<p;h++)a[h].limit==d&&(a[h].limit=a[h].base);return}for(var i=[],h=o;h<p;h++)i.push({x:h,base:a[h].base,limit:a[h].limit,minIsMinContent:b[h].minType==z||b[h].minType==v,minIsMaxContent:b[h].minType==A,maxIsMinContent:b[h].maxType==z,maxIsMaxContent:b[h].maxType==A||b[h].maxType==v});if(i.sort(function(a,b){return a.limit-b.limit}),i=i.filter(function(a){if("base"==e){if("min-content"==f)return a.minIsMinContent||a.minIsMaxContent;if("max-content"==f)return a.minIsMaxContent}else if("limit"==e){if("min-content"==f)return a.maxIsMinContent||a.maxIsMaxContent;if("max-content"==f)return a.maxIsMaxContent}return!1}),0==i.length)return;if("base"==e){var j=i.filter(function(a){return a.base<a.limit},0),k=j.length;if(k>0)m(a,e,j,g,!0);else if("min-content"==f){var j=i.filter(function(a){return a.maxIsMinContent||a.maxIsMaxContent},0),k=j.length;k>=1?m(a,e,j,g,!1):m(a,e,i,g,!1)}else if("max-content"==f){var j=i.filter(function(a){return a.maxIsMaxContent},0),k=j.length;k>=1?m(a,e,j,g,!1):m(a,e,i,g,!1)}}else"limit"==e&&m(a,e,i,g)}},w=function(){for(var b=a.length;b--;)a[b].limit!=d&&(a[b].flags=a[b].flags&~c)};u(e(n),"base","min-content"),w(),u(f(n),"base","max-content"),w(),u(e(n),"limit","min-content"),u(f(n),"limit","max-content"),w(),i++}}},p=function(a,b,c,d,e,f,g,h){var i=a.map(function(c,d){return{x:d,base:a[d].base,limit:a[d].limit,minIsMinContent:b[d].minType==z||b[d].minType==v,minIsMaxContent:b[d].minType==A,maxIsMinContent:b[d].maxType==z,maxIsMaxContent:b[d].maxType==A||b[d].maxType==v}});for(i.sort(function(a,b){return a.limit-b.limit});;){for(var j=d,k=a.length;k--;)j-=a[k].base;if(j<=1/1024)return;var l=i=i.filter(function(a){return(a.minIsMinContent||a.minIsMaxContent)&&a.base<a.limit},0);if(l.length<=0)return;m(a,"base",l,j,!0)}},q=function(a,b,c,d,e,f,g,h){if(0==c){for(var i=0,j=this.items.length;j--;){for(var k=this.items[j],l=g(k),m=h(k),n=f(k),o=0,p=l;p<m;p++)b[p].maxType==x?o+=b[p].maxValue:n-=a[p].base;n>0&&o>0&&(i=Math.max(i,n/o))}for(var q=a.length;q--;)if(b[q].maxType==x){var r=i*b[q].maxValue;a[q].base<r?a[q].breadth=r:a[q].breadth=a[q].base}else a[q].breadth=a[q].base}else{for(var n=d,s=[],t=0,q=a.length;q--;)b[q].maxType==x?(s.push(q),t+=b[q].maxValue):n-=a[q].breadth=a[q].base;for(;s.length>0;){for(var i=n/t,u=!1,j=s.length;j--;){var q=s[j],r=i*b[q].maxValue;a[q].base<r?a[q].breadth=r:(a[q].breadth=a[q].base,t-=b[q].maxValue,s.splice(j,1),u=!0)}u||(s.length=0)}}},r=function(a,b,c,e,f,g,h,i){o.call(this,a,b,f,g,h,i);for(var j=b.length;j--;)a[j].limit==d&&(a[j].limit=a[j].base);p.call(this,a,b,c,e,f,g,h,i),q.call(this,a,b,c,e,f,g,h,i)},s=g,t=this.xSizes.map(l),u=this.colGap,B=function(a){return a.minWidth+a.hMargins-Math.max(0,a.xEnd-a.xStart-1)*u},C=function(a){return a.maxWidth+a.hMargins-Math.max(0,a.xEnd-a.xStart-1)*u},D=function(a){return a.xStart},E=function(a){return a.xEnd};r.call(this,t,this.xSizes,g,i,B,C,D,E);var F=j(this.element),a=n("temp-position",this.element);"static"==F.getPropertyValue("position")&&a.set(this.element,{position:"relative"}),this.items.forEach(function(b){for(var c=0,d=b.xStart;d<b.xEnd;d++)c+=t[d].breadth;a.set(b.element,{position:"absolute",width:c+"px","box-sizing":"border-box"})});var s=h,G=this.ySizes.map(l),H=this.rowGap,I=function(a){return a.element.offsetHeight+a.vMargins-Math.max(0,a.yEnd-a.yStart-1)*H},J=function(a){return a.element.offsetHeight+a.vMargins-Math.max(0,a.yEnd-a.yStart-1)*H},K=function(a){return a.yStart},L=function(a){return a.yEnd};r.call(this,G,this.ySizes,h,k,I,J,K,L),a.revoke(),this.finalXSizes=t,this.finalYSizes=G},generateMSGridStyle:function(){this.element.style.setProperty("display","-ms-grid"),this.element.style.setProperty("-ms-grid-rows",this.ySizes.join(" ")),this.element.style.setProperty("-ms-grid-columns",this.xSizes.join(" "));for(var a=this.items.length;a--;){var b=this.items[a];b.element.style.setProperty("-ms-grid-row",b.yStart+1),b.element.style.setProperty("-ms-grid-column",b.xStart+1),b.element.style.setProperty("-ms-grid-row-span",b.yEnd-b.yStart),b.element.style.setProperty("-ms-grid-column-span",b.xEnd-b.xStart)}},generatePolyfilledStyle:function(){for(var a=j(this.element),b=n("css-grid",this.element),c=this.finalXSizes,d=this.finalYSizes,e=0,f=0;f<c.length;f++)e+=c[f].breadth;e+=this.colGap*(c.length-1);for(var g=0,h=0;h<d.length;h++)g+=d[h].breadth;g+=this.rowGap*(d.length-1);var i={};-1==["block","inline-block"].indexOf(a.getPropertyValue("display"))&&(i.display="block"),"static"==a.getPropertyValue("position")&&(i.position="relative"),b.set(this.element,i);var k=e,l=g,m=[],o=[];m.length=o.length=this.items.length;for(var p=this.items.length;p--;){for(var q=this.items[p],r=this.hlPadding,f=0;f<q.xStart;f++)r+=c[f].breadth;r+=this.colGap*q.xStart;for(var k=0,f=q.xStart;f<q.xEnd;f++)k+=c[f].breadth;k+=Math.max(0,q.xEnd-q.xStart-1)*this.colGap;for(var s=this.vtPadding,h=0;h<q.yStart;h++)s+=d[h].breadth;s+=this.rowGap*q.yStart;for(var l=0,h=q.yStart;h<q.yEnd;h++)l+=d[h].breadth;l+=Math.max(0,q.yEnd-q.yStart-1)*this.rowGap,b.set(q.element,{position:"absolute","box-sizing":"border-box",top:s+"px",left:r+"px"}),m[p]=k-q.hMargins,o[p]=l-q.vMargins}for(var t=/^(SVG|MATH|IMG|VIDEO|PICTURE|OBJECT|EMBED|IFRAME)$/i,p=this.items.length;p--;){var q=this.items[p],k=m[p];(q.minWidth<=k||t.test(q.element.tagName))&&b.set(q.element,{width:k+"px"})}for(var p=this.items.length;p--;){var q=this.items[p],l=o[p];(q.element.offsetHeight<=l||t.test(q.element.tagName))&&b.set(q.element,{height:l+"px"})}var i={};["auto","0px"].indexOf(a.getPropertyValue("width"))>=0&&(i.width=e+"px"),["auto","0px"].indexOf(a.getPropertyValue("height"))>=0&&(i.height=g+"px"),b.set(this.element,i)},revokePolyfilledStyle:function(){n("css-grid",this.element).revoke()},findXStart:function(a){var b=-1;return a.specifiedXStart.type!==r?0:(a.specifiedXStart.name?(void 0===a.specifiedXStart.index&&(b=this.findXLine(a.specifiedXStart.name+"-start",0,0,!0)),-1==b&&(b=this.findXLine(a.specifiedXStart.name,0,(a.specifiedXStart.index||1)-1))):b=(a.specifiedXStart.index||1)-1,b<0&&(b=0),a.xStart=b)},findYStart:function(a){var b=-1;return a.specifiedYStart.type!==r?0:(a.specifiedYStart.name?(void 0===a.specifiedYStart.index&&(b=this.findYLine(a.specifiedYStart.name+"-start",0,0,!0)),-1==b&&(b=this.findYLine(a.specifiedYStart.name,0,(a.specifiedYStart.index||1)-1))):b=(a.specifiedYStart.index||1)-1,b<0&&(b=0),a.yStart=b)},findXEnd:function(a){var b=-1,c=a.xStart;switch(a.specifiedXEnd.type){case r:a.specifiedXEnd.name?(void 0===a.specifiedXEnd.index&&(b=this.findXLine(a.specifiedXEnd.name+"-end",0,0,!0)),-1==b&&(b=this.findXLine(a.specifiedXEnd.name,0,(a.specifiedXEnd.index||1)-1))):b=(a.specifiedXEnd.index||1)-1;break;case s:b=a.specifiedXEnd.name?this.findXLine(a.specifiedXEnd.name,c+1,(a.specifiedXEnd.index||1)-1):c+(0|a.specifiedXEnd.index||1);break;case q:b=c+1}return b<=c&&(b=c+1),a.xEnd=b},findYEnd:function(a){var b=-1,c=a.yStart;switch(a.specifiedYEnd.type){case r:a.specifiedYEnd.name?(void 0===a.specifiedYEnd.index&&(b=this.findYLine(a.specifiedYEnd.name+"-end",0,0,!0)),-1==b&&(b=this.findYLine(a.specifiedYEnd.name,0,(a.specifiedYEnd.index||1)-1))):b=(a.specifiedYEnd.index||1)-1;break;case s:a.specifiedYEnd.name?-1==(b=this.findYLine(a.specifiedYEnd.name,c+1,(a.specifiedYEnd.index||1)-1))&&(b=0):b=c+(0|a.specifiedYEnd.index||1);break;case q:b=c+1}return b<=c&&(b=c+1),a.yEnd=b},findXLine:function(a,b,c,d){if(b|=0,c|=0,!a)return b+c<this.xLines.length?b+c:this.xLines.length;for(var e=-1,f=b;f<this.xLines.length;f++)if(this.xLines[f].indexOf(a)>=0||!d&&this.xLines[f].indexOf("*")>=0){if(!(c>0))return f;e=f,c--}return d||(console.warn("[CSS-GRID] Missing "+(c+1)+' lines named "'+a+'" after line '+b+"."),e=this.xLines.length+c+1,this.ensureRows(e)),e},findYLine:function(a,b,c,d){if(b|=0,c|=0,!a)return b+c<this.yLines.length?b+c:this.yLines.length;for(var e=-1,f=b;f<this.yLines.length;f++)if(this.yLines[f].indexOf(a)>=0||!d&&this.yLines[f].indexOf("*")>=0){if(!(c>0))return f;e=f,c--}return d||(console.warn("[CSS-GRID] Missing "+(c+1)+' lines named "'+a+'" after line '+b+"."),e=this.yLines.length+c+1,this.ensureColumns(e)),e}},{LOCATE_LINE:r,LOCATE_SPAN:s,LOCATE_AREA:3,LOCATE_AUTO:q,ALIGN_START:0,ALIGN_CENTER:t,ALIGN_END:2,ALIGN_FIT:u,TRACK_BREADTH_AUTO:v,TRACK_BREADTH_LENGTH:w,TRACK_BREADTH_FRACTION:x,TRACK_BREADTH_PERCENTAGE:y,TRACK_BREADTH_MIN_CONTENT:z,TRACK_BREADTH_MAX_CONTENT:A,GridLayout:g,GridItem:f,GridItemPosition:e,GridTrackBreadth:d}}(window,document),b.define("src/css-grid/lib/grid-layout.js"),function(a,c){if("gridRow"in c.body.style)return void console.warn("Polyfill skipped");b("src/core/polyfill-dom-console.js");var d=b("src/core/css-cascade.js"),e=b("src/css-grid/lib/grid-layout.js"),f=!1,g=function(){if(!f){f=!0;for(var b=["grid","grid-template","grid-template-rows","grid-template-columns","grid-template-areas","grid-areas","grid-auto-flow","grid-row-gap","grid-column-gap","grid-gap"],g=["grid-area","grid-row","grid-column","grid-row-start","grid-row-end","grid-column-start","grid-column-end","order"],h=b.length;h--;)d.polyfillStyleInterface(b[h]);for(var h=g.length;h--;)d.polyfillStyleInterface(g[h]);d.startMonitoringProperties(b,{onupdate:function(b,d){if(cssConsole.dir({message:"onupdate",element:b,selector:d.selector.toCSSString(),rule:d}),b.gridLayout)b.gridLayout.scheduleRelayout();else{b.gridLayout=new e.GridLayout(b),b.gridLayout.scheduleRelayout(),"MutationObserver"in a?(function(){var a=new MutationObserver(function(a){b.gridLayout.scheduleRelayout()}),d=c.documentElement,e={subtree:!0,attributes:!1,childList:!0,characterData:!0};a.observe(d,e)}(),function(){new MutationObserver(function(a){b.gridLayout.scheduleRelayout()})}()):"MutationEvent"in a&&b.addEventListener("DOMSubtreeModified",function(){b.gridLayout.isLayoutScheduled||b.gridLayout.scheduleRelayout()},!0);var f=b.offsetWidth,g=b.offsetHeight,h=function(){b.gridLayout&&(f==b.offsetWidth&&g==b.offsetHeight||(f=b.offsetWidth,g=b.offsetHeight,b.gridLayout.scheduleRelayout()),requestAnimationFrame(h))};requestAnimationFrame(h),a.addEventListener("load",function(){b.gridLayout&&b.gridLayout.scheduleRelayout()});for(var i=b.querySelectorAll("img"),j=i.length;j--;)i[j].addEventListener("load",function(){b.gridLayout&&b.gridLayout.scheduleRelayout()})}}}),d.startMonitoringProperties(g,{onupdate:function(a,b){cssConsole.dir({message:"onupdate",element:a,selector:b.selector.toCSSString(),rule:b}),a.parentGridLayout&&a.parentGridLayout.scheduleRelayout()}})}};e.enablePolyfill=g;try{"no_auto_css_grid"in a||g()}catch(a){setImmediate(function(){throw a})}}(window,document),b.define("src/css-grid/polyfill.js"),b("src/css-grid/polyfill.js"),b.define("src/requirements.js"),window.cssPolyfills={require:b}}();
//# sourceMappingURL=css-polyfills.min.js.map
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