!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([
/*!*****************!*\
  !*** ./aCjs.js ***!
  \*****************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,n){e.exports={getDay:function(){return new Date}}},
/*!****************!*\
  !*** ./esH.js ***!
  \****************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */function(e,n,t){"use strict";t.r(n);var r=t(/*! ./aCjs.js */0),o=t.n(r);const u=t(/*! ./esA.js */2);console.log("用 ES.harmony 导入 cjs 的内容",o.a.getDay()),console.log("用 ES.harmony 导入 esh 的内容",u.getOneName())},
/*!****************!*\
  !*** ./esA.js ***!
  \****************/
/*! exports provided: getOneName */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./esH.js (referenced with cjs require) */function(e,n,t){"use strict";function r(e,n){return function(e){return e+1}(e)+n}t.r(n),t.d(n,"getOneName",(function(){return r}))}]);