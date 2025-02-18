(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-luck-draw"] = factory(require("vue"));
	else
		root["vue-luck-draw"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("358c")


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "358c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};function e(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function n(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<i;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n}var r=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.some((function(e){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()===e}))},o=function(t){return[].filter.call(t,(function(t){return"\n"!==t})).join("")},s=function(){function t(t){this.htmlFontSize=16,this.dpr=1,this.subs={},this.rAF=function(){},this.setTimeout=function(){},this.setInterval=function(){},this.clearInterval=function(){},"string"==typeof t?t={el:t}:1===t.nodeType&&(t={el:"",divElement:t}),(t=t).flag||(t.flag="WEB"),t.el&&(t.divElement=document.querySelector(t.el));var e=0,i=0;t.divElement&&(e=t.divElement.offsetWidth,i=t.divElement.offsetHeight,t.canvasElement=document.createElement("canvas"),t.divElement.appendChild(t.canvasElement)),t.width=this.getLength(t.width)||e,t.height=this.getLength(t.height)||i,t.divElement&&(t.divElement.style.width=t.width+"px",t.divElement.style.height=t.height+"px"),t.canvasElement&&(t.ctx=t.canvasElement.getContext("2d")),this.ctx=t.ctx,this.config=t,t.ctx&&t.width&&t.height&&(this.setDpr(),this.setHTMLFontSize(),this.resetArrayProto(),this.initWindowFunction())}return t.prototype.setDpr=function(){window&&(window.dpr=this.dpr=1.3*(window.devicePixelRatio||2))},t.prototype.setHTMLFontSize=function(){window&&(this.htmlFontSize=+window.getComputedStyle(document.documentElement).fontSize.slice(0,-2))},t.prototype.initWindowFunction=function(){if(window)return this.rAF=window.requestAnimationFrame,this.setInterval=window.setInterval,void(this.clearInterval=window.clearInterval);if(this.config.rAF)this.rAF=this.config.rAF;else if(this.config.setTimeout){var t=this.config.setTimeout;this.rAF=function(e){return t(e,16)}}else this.rAF=function(t){return setTimeout(t,16)}},t.prototype.zoomCanvas=function(){var t=this,e=t.config,i=t.ctx,n=t.dpr,r=e.canvasElement,o=function(t){return(t*n-t)/(t*n)*(n/2)*100};r&&(r.width=e.width*n,r.height=e.height*n,r.style.width=r.width+"px",r.style.height=r.height+"px",r.style.transform="scale("+1/n+") translate(\n      "+-o(r.width)+"%, "+-o(r.height)+"%\n    )",i.scale(n,n))},t.prototype.getLength=function(t){return r(t,"number")?t:r(t,"string")?this.changeUnits(t):0},t.prototype.changeUnits=function(t,e){var i=this;return void 0===e&&(e=1),Number(t.replace(/^(\-*[0-9.]*)([a-z%]*)$/,(function(t,n,r){switch(r){case"%":n*=e/100;break;case"px":n*=1;break;case"rem":n*=i.htmlFontSize;break;case"rpx":n=i.rpx2px(n);break;default:n*=1}return n})))},t.prototype.px2rpx=function(t){return"string"==typeof t&&(t=Number(t.replace(/[a-z]*/g,""))),uni?750/uni.getSystemInfoSync().windowWidth*t:wx?750/wx.getSystemInfoSync().windowWidth*t:t},t.prototype.rpx2px=function(t){return"string"==typeof t&&(t=Number(t.replace(/[a-z]*/g,""))),uni?uni.getSystemInfoSync().windowWidth/750*t:wx?wx.getSystemInfoSync().windowWidth/750*t:t},t.prototype.draw=function(){},t.prototype.observer=function(t){var e=this;t&&"object"==typeof t&&Object.keys(t).forEach((function(i){e.defineReactive(t,i,t[i])}))},t.prototype.defineReactive=function(t,e,i){var n=this;this.observer(i),Object.defineProperty(t,e,{get:function(){return i},set:function(t){var r=i;t!==i&&(i=t,n.observer(i),n.subs[e]&&n.subs[e].call(n,i,r),n.draw())}})},t.prototype.$set=function(t,e,i){t&&"object"==typeof t&&this.defineReactive(t,e,i)},t.prototype.$computed=function(t,e,i){var n=this;Object.defineProperty(t,e,{get:function(){return i.call(n)}})},t.prototype.$watch=function(t,e){this.subs[t]=e},t.prototype.resetArrayProto=function(){var t=this,e=Array.prototype,i=Object.create(e);["push","pop","shift","unshift","sort","splice","reverse"].forEach((function(r){i[r]=function(){var i;t.draw(),(i=e[r]).call.apply(i,n([this],Array.from(arguments)))}}))},t}(),a=function(t){return Math.PI/180*t},h=function(t,e){return[+(Math.cos(t)*e).toFixed(8),+(Math.sin(t)*e).toFixed(8)]},c=function(t,e){var i=-t/e;return[i,-i*t+e]},f=function(t,e,i,n,r){var o;if(void 0===r&&(r=!0),Math.abs(n-i).toFixed(8)>=a(180).toFixed(8)){var s=(n+i)/2;return r?(f(t,e,i,s,r),f(t,e,s,n,r)):(f(t,e,s,n,r),f(t,e,i,s,r)),!1}r||(i=(o=[n,i])[0],n=o[1]);var l=h(i,e),u=l[0],g=l[1],d=h(n,e),p=d[0],m=d[1],v=c(u,g),w=v[0],y=v[1],b=c(p,m),z=b[0],I=b[1],S=(I-y)/(w-z),x=(z*y-w*I)/(z-w);isNaN(S)&&(Math.abs(u)===+e.toFixed(8)&&(S=u),Math.abs(p)===+e.toFixed(8)&&(S=p)),w===1/0||w===-1/0?x=z*S+I:z!==1/0&&z!==-1/0||(x=w*S+y),t.lineTo(u,g),t.arcTo(S,x,p,m,e)},l=function(t,e,i,n,r,o,s){var a=Math.min(n,r);o>a/2&&(o=a/2),t.beginPath(),t.fillStyle=s,t.moveTo(e+o,i),t.lineTo(e+o,i),t.lineTo(e+n-o,i),t.arcTo(e+n,i,e+n,i+o,o),t.lineTo(e+n,i+r-o),t.arcTo(e+n,i+r,e+n-o,i+r,o),t.lineTo(e+o,i+r),t.arcTo(e,i+r,e,i+r-o,o),t.lineTo(e,i+o),t.arcTo(e,i,e+o,i,o),t.closePath(),t.fill()},u=function(t,e,i,n){return t>=n&&(t=n),i*(t/=n)*t+e},g=function(t,e,i,n){return t>=n&&(t=n),-i*(t/=n)*(t-2)+e},d=function(t){function s(e,i){void 0===i&&(i={});var n=t.call(this,e)||this;n.blocks=[],n.prizes=[],n.buttons=[],n.defaultConfig={},n._defaultConfig={gutter:"0px",offsetDegree:0,speed:20,accelerationTime:2500,decelerationTime:2500},n.defaultStyle={},n._defaultStyle={fontSize:"18px",fontColor:"#000",fontStyle:"microsoft yahei ui,microsoft yahei,simsun,sans-serif",fontWeight:"400",lineHeight:"",background:"#fff",wordWrap:!0,lengthLimit:"90%"},n.Radius=0,n.prizeRadius=0,n.prizeDeg=0,n.prizeRadian=0,n.rotateDeg=0,n.maxBtnRadius=0,n.startTime=0,n.endTime=0,n.stopDeg=0,n.endDeg=0,n.animationId=0,n.FPS=16.6,n.prizeImgs=[[]],n.btnImgs=[[]],n.initData(i),n.initComputed(),n.initWatch();var r=[[]];return n.prizes&&(r=n.prizes.map((function(t){return t.imgs}))),n.buttons&&r.push.apply(r,n.buttons.map((function(t){return t.imgs}))),n.init(r),n}return e(s,t),s.prototype.initData=function(t){this.$set(this,"blocks",t.blocks||[]),this.$set(this,"prizes",t.prizes||[]),this.$set(this,"buttons",t.buttons||[]),this.$set(this,"defaultConfig",t.defaultConfig||{}),this.$set(this,"defaultStyle",t.defaultStyle||{}),this.$set(this,"startCallback",t.start),this.$set(this,"endCallback",t.end)},s.prototype.initComputed=function(){var t=this;this.$computed(this,"_defaultConfig",(function(){return i({gutter:"0px",offsetDegree:0,speed:20,accelerationTime:2500,decelerationTime:2500},t.defaultConfig)})),this.$computed(this,"_defaultStyle",(function(){return i({fontSize:"18px",fontColor:"#000",fontStyle:"microsoft yahei ui,microsoft yahei,simsun,sans-serif",fontWeight:"400",background:"#fff",wordWrap:!0,lengthLimit:"90%"},t.defaultStyle)}))},s.prototype.initWatch=function(){var t=this;this.$watch("prizes",(function(e,i){var n=[];return i?e&&e.forEach((function(e,r){var o=[],s=i[r];s?e.imgs&&e.imgs.forEach((function(e,i){if(!s.imgs)return o[i]=e;var n=s.imgs[i];n&&t.prizeImgs[r]&&t.prizeImgs[r][i]?e.src!==n.src&&(o[i]=e):o[i]=e})):o=e.imgs||[],n[r]=o})):n=e.map((function(t){return t.imgs})),t.init(n)})),this.$watch("buttons",(function(e,i){var r=[];return i?e&&e.forEach((function(e,n){var o=[],s=i[n];s&&s.imgs?e.imgs&&e.imgs.forEach((function(e,i){if(!s.imgs)return o[i]=e;var r=s.imgs[i];r&&t.btnImgs[n]&&t.btnImgs[n][i]?e.src!==r.src&&(o[i]=e):o[i]=e})):o=e.imgs||[],r[n]=o})):r=e.map((function(t){return t.imgs})),t.init(n(new Array(t.prizes.length).fill(void 0),r))}))},s.prototype.init=function(t){var e=this,i=this.config,n=this.ctx;this.setDpr(),this.setHTMLFontSize(),this.zoomCanvas(),this.Radius=Math.min(i.width,i.height)/2,n.translate(this.Radius,this.Radius);var o=function(){e.draw(),e.draw(),i.canvasElement&&(i.canvasElement.onclick=function(t){var i;n.beginPath(),n.arc(0,0,e.maxBtnRadius,0,2*Math.PI,!1),n.isPointInPath(t.offsetX,t.offsetY)&&(e.startTime||null===(i=e.startCallback)||void 0===i||i.call(e,t))})},s=0,a=0;r(t,"array")&&(this.draw(),t.forEach((function(t,i){if(!t)return!1;t.forEach((function(t,n){a++,e.loadAndCacheImg(i,n,(function(){s++,a===s&&o.call(e)}))}))}))),a||o.call(this)},s.prototype.loadAndCacheImg=function(t,e,i){var n=this,r=t<this.prizes.length,o=r?"prizes":"buttons",s=r?"prizeImgs":"btnImgs";t=r?t:t-this.prizes.length;var a=this[o][t];if(a&&a.imgs){var h=a.imgs[e];if(h)if(this[s][t]||(this[s][t]=[]),"WEB"===this.config.flag){var c=new Image;this[s][t][e]=c,c.src=h.src,c.onload=function(){return i.call(n)}}else 0===this.config.flag.indexOf("UNI-")&&uni.getImageInfo({src:h.src,success:function(r){n[s][t][e]=r,i.call(n)},fail:function(){return console.error("uni.getImageInfo 加载图片失败",h.src)}})}},s.prototype.computedWidthAndHeight=function(t,e,i,n){if(!e.width&&!e.height)return[t.width,t.height];if(e.width&&!e.height){var r=this.getWidth(e.width,i);return[r,t.height*(r/t.width)]}if(!e.width&&e.height){var o=this.getHeight(e.height,n);return[t.width*(o/t.height),o]}return[this.getWidth(e.width,i),this.getHeight(e.height,n)]},s.prototype.draw=function(){var t=this,e=this,i=e.ctx,n=e._defaultConfig,r=e._defaultStyle;0===this.config.flag.indexOf("UNI-")&&i.translate(this.Radius,this.Radius),i.clearRect(-this.Radius,-this.Radius,2*this.Radius,2*this.Radius),this.prizeRadius=this.blocks.reduce((function(e,n){return i.beginPath(),i.fillStyle=n.background,i.arc(0,0,e,0,2*Math.PI,!1),i.fill(),e-t.getLength(n.padding.split(" ")[0])}),this.Radius),this.prizeDeg=360/this.prizes.length,this.prizeRadian=a(this.prizeDeg);var s=a(-90+this.rotateDeg+n.offsetDegree),c=function(e){return t.getOffsetX(i.measureText(e).width)},l=function(e,i,n){var o=e.lineHeight||r.lineHeight||e.fontSize||r.fontSize;return t.getHeight(e.top,i)+(n+1)*t.getLength(o)};i.save(),this.prizes.forEach((function(e,u){var g=s+u*t.prizeRadian,d=t.prizeRadius-t.maxBtnRadius;!function(t,e,i,n,r,o,s){e||(e=o);var c=a(90/Math.PI/i*o),l=a(90/Math.PI/e*o),u=n+c,g=r-c,d=n+l,p=r-l;t.beginPath(),t.fillStyle=s,t.moveTo.apply(t,h(u,i)),f(t,i,u,g,!0),p>d?f(t,e,d,p,!1):t.lineTo.apply(t,h((n+r)/2,o/2/Math.abs(Math.sin((n-r)/2)))),t.closePath(),t.fill()}(i,t.maxBtnRadius,t.prizeRadius,g-t.prizeRadian/2,g+t.prizeRadian/2,t.getLength(n.gutter),e.background||r.background||"rgba(0, 0, 0, 0)");var p=Math.cos(g)*t.prizeRadius,m=Math.sin(g)*t.prizeRadius;i.translate(p,m),i.rotate(g+a(90)),e.imgs&&e.imgs.forEach((function(e,n){if(t.prizeImgs[u]){var r=t.prizeImgs[u][n];if(r){var o,s=t.computedWidthAndHeight(r,e,t.prizeRadian*t.prizeRadius,d),a=s[0],h=s[1],c=[t.getOffsetX(a),t.getHeight(e.top,d)],f=c[0],l=c[1];"WEB"===t.config.flag?o=r:0===t.config.flag.indexOf("UNI-")&&(o=r.path),i.drawImage(o,f,l,a,h)}}})),e.fonts&&e.fonts.forEach((function(e){var s=e.fontColor||r.fontColor,a=e.fontWeight||r.fontWeight,h=t.getLength(e.fontSize||r.fontSize),f=e.fontStyle||r.fontStyle;i.fillStyle=s,i.font=a+" "+h+"px "+f;var u=[],g=String(e.text);if(e.hasOwnProperty("wordWrap")?e.wordWrap:r.wordWrap){g=o(g);for(var p="",m=0;m<g.length;m++){p+=g[m];var v=i.measureText(p).width,w=(t.prizeRadius-l(e,d,u.length))*Math.tan(t.prizeRadian/2)*2-t.getLength(n.gutter);v>t.getWidth(e.lengthLimit||r.lengthLimit,w)&&(u.push(p.slice(0,-1)),p=g[m])}p&&u.push(p),u.length||u.push(g)}else u=g.split("\n");u.filter((function(t){return!!t})).forEach((function(t,n){i.fillText(t,c(t),l(e,d,n))}))})),i.rotate(a(360)-g-a(90)),i.translate(-p,-m)})),i.restore(),this.buttons.forEach((function(e,n){var o=t.getHeight(e.radius);t.maxBtnRadius=Math.max(t.maxBtnRadius,o),i.beginPath(),i.fillStyle=e.background||"rgba(0, 0, 0, 0)",i.arc(0,0,o,0,2*Math.PI,!1),i.fill(),e.pointer&&(i.beginPath(),i.fillStyle=e.background||"rgba(0, 0, 0, 0)",i.moveTo(-o,0),i.lineTo(o,0),i.lineTo(0,2*-o),i.closePath(),i.fill()),e.imgs&&e.imgs.forEach((function(r,s){if(t.btnImgs[n]){var a=t.btnImgs[n][s];if(a){var h,c=t.computedWidthAndHeight(a,r,2*t.getHeight(e.radius),2*t.getHeight(e.radius)),f=c[0],l=c[1],u=[t.getOffsetX(f),t.getHeight(r.top,o)],g=u[0],d=u[1];"WEB"===t.config.flag?h=a:0===t.config.flag.indexOf("UNI-")&&(h=a.path),i.drawImage(h,g,d,f,l)}}})),e.fonts&&e.fonts.forEach((function(e){var n=e.fontColor||r.fontColor,s=e.fontWeight||r.fontWeight,a=t.getLength(e.fontSize||r.fontSize),h=e.fontStyle||r.fontStyle;i.fillStyle=n,i.font=s+" "+a+"px "+h,String(e.text).split("\n").forEach((function(t,n){i.fillText(t,c(t),l(e,o,n))}))}))})),0===this.config.flag.indexOf("UNI-")&&i.draw()},s.prototype.play=function(){this.startTime||(this.startTime=Date.now(),this.prizeFlag=void 0,this.run())},s.prototype.stop=function(t){this.prizeFlag=Number(t)%this.prizes.length},s.prototype.run=function(t){void 0===t&&(t=0);var e=this,i=e.rAF,n=e.prizeFlag,r=e.prizeDeg,o=e.rotateDeg,s=e._defaultConfig,a=Date.now()-this.startTime;if(a>=s.accelerationTime&&void 0!==n){this.FPS=a/t,this.endTime=Date.now(),this.stopDeg=o;for(var h=0;++h;){var c=360*h-n*r-o-s.offsetDegree;if(g(this.FPS,this.stopDeg,c,s.decelerationTime)-this.stopDeg>s.speed){this.endDeg=c;break}}return this.slowDown()}this.rotateDeg=(o+u(a,0,s.speed,s.accelerationTime))%360,this.draw(),i(this.run.bind(this,t+1))},s.prototype.slowDown=function(){var t,e=this,n=e.rAF,r=e.prizes,o=e.prizeFlag,s=e.stopDeg,a=e.endDeg,h=e._defaultConfig,c=Date.now()-this.endTime;if(c>=h.decelerationTime)return this.startTime=0,void(null===(t=this.endCallback)||void 0===t||t.call(this,i({},r.find((function(t,e){return e===o})))));this.rotateDeg=g(c,s,a,h.decelerationTime)%360,this.draw(),n(this.slowDown.bind(this))},s.prototype.getWidth=function(t,e){return void 0===e&&(e=this.prizeRadian*this.prizeRadius),r(t,"number")?t:r(t,"string")?this.changeUnits(t,e):0},s.prototype.getHeight=function(t,e){return void 0===e&&(e=this.prizeRadius),r(t,"number")?t:r(t,"string")?this.changeUnits(t,e):0},s.prototype.getOffsetX=function(t){return-t/2},s}(s),p=function(t){function s(e,i){void 0===i&&(i={});var n=t.call(this,e)||this;n.rows=3,n.cols=3,n.blocks=[],n.prizes=[],n.defaultConfig={},n._defaultConfig={gutter:5,speed:20,accelerationTime:2500,decelerationTime:2500},n.defaultStyle={},n._defaultStyle={borderRadius:20,fontColor:"#000",fontSize:"18px",fontStyle:"microsoft yahei ui,microsoft yahei,simsun,sans-serif",fontWeight:"400",lineHeight:"",background:"#fff",shadow:"",wordWrap:!0,lengthLimit:"90%"},n.activeStyle={},n._activeStyle={background:"#ffce98",shadow:"",fontStyle:"",fontWeight:"",fontSize:"",lineHeight:"",fontColor:""},n.cellWidth=0,n.cellHeight=0,n.startTime=0,n.endTime=0,n.currIndex=0,n.stopIndex=0,n.endIndex=0,n.demo=!1,n.timer=0,n.animationId=0,n.FPS=16.6,n.cells=[],n.cellImgs=[],n.initData(i),n.initComputed(),n.initWatch();var r=[[]];return n.prizes&&(r=n.prizes.map((function(t){return t.imgs}))),n.button&&(r[n.cols*n.rows-1]=n.button.imgs),n.init(r),n}return e(s,t),s.prototype.initData=function(t){this.$set(this,"rows",Number(t.rows)||3),this.$set(this,"cols",Number(t.cols)||3),this.$set(this,"blocks",t.blocks||[]),this.$set(this,"prizes",t.prizes||[]),this.$set(this,"button",t.button),this.$set(this,"defaultConfig",t.defaultConfig||{}),this.$set(this,"defaultStyle",t.defaultStyle||{}),this.$set(this,"activeStyle",t.activeStyle||{}),this.$set(this,"startCallback",t.start),this.$set(this,"endCallback",t.end)},s.prototype.initComputed=function(){var t=this;this.$computed(this,"_defaultConfig",(function(){var e=i({gutter:5,speed:20,accelerationTime:2500,decelerationTime:2500},t.defaultConfig);return e.gutter=t.getLength(e.gutter),e.speed=e.speed/40,e})),this.$computed(this,"_defaultStyle",(function(){return i({borderRadius:20,fontColor:"#000",fontSize:"18px",fontStyle:"microsoft yahei ui,microsoft yahei,simsun,sans-serif",fontWeight:"400",background:"#fff",shadow:"",wordWrap:!0,lengthLimit:"90%"},t.defaultStyle)})),this.$computed(this,"_activeStyle",(function(){return i({background:"#ffce98",shadow:""},t.activeStyle)}))},s.prototype.initWatch=function(){var t=this;this.$watch("prizes",(function(e,i){var n=[];return i?e&&e.forEach((function(e,r){var o=[],s=i[r];s?e.imgs&&e.imgs.forEach((function(e,i){if(!s.imgs)return o[i]=e;var n=s.imgs[i];n&&t.cellImgs[r][i]?e.src!==n.src&&(o[i]=e):o[i]=e})):o=e.imgs||[],n[r]=o})):n=e.map((function(t){return t.imgs})),t.init(n)})),this.$watch("button",(function(e,i){var n=[],r=t.cols*t.rows-1;if(i&&i.imgs){if(e.imgs){var o=[];e.imgs.forEach((function(e,n){if(!i.imgs)return o[n]=e;var s=i.imgs[n];s&&t.cellImgs[r][n]?e.src!==s.src&&(o[n]=e):o[n]=e})),n[r]=o}}else n[r]=e.imgs;return t.init(n)}))},s.prototype.init=function(t){var e=this,i=this,n=i.config,o=i.ctx,s=i.button;this.setDpr(),this.setHTMLFontSize(),this.zoomCanvas();var a=function(){e.draw(),e.demo&&e.walk(),s&&n.canvasElement&&(n.canvasElement.onclick=function(t){var i,n=e.getGeometricProperty([s.x,s.y,s.col||1,s.row||1]),r=n[0],a=n[1],h=n[2],c=n[3];o.beginPath(),o.rect(r,a,h,c),o.isPointInPath(t.offsetX,t.offsetY)&&(e.startTime||null===(i=e.startCallback)||void 0===i||i.call(e,t))})},h=0,c=0;r(t,"array")&&(this.draw(),t.forEach((function(t,i){if(!t)return!1;t.forEach((function(t,n){c++,e.loadAndCacheImg(i,n,(function(){h++,c===h&&a.call(e)}))}))}))),c||a.call(this)},s.prototype.loadAndCacheImg=function(t,e,i){var n=this,r=this.cells[t];if(r&&r.imgs){var o=r.imgs[e];this.cellImgs[t]||(this.cellImgs[t]=[]);var s=0,a=1;if("WEB"===this.config.flag){var h=new Image;this.cellImgs[t][e]={defaultImg:h},h.src=o.src,h.onload=function(){++s===a&&i.call(n)}}else 0===this.config.flag.indexOf("UNI-")&&uni.getImageInfo({src:o.src,success:function(r){n.cellImgs[t][e]={defaultImg:r},++s===a&&i.call(n)},fail:function(){return console.error("uni.getImageInfo 加载图片失败",o.src)}});if(o.hasOwnProperty("activeSrc"))if(a++,"WEB"===this.config.flag){var c=new Image;this.cellImgs[t][e].activeImg=c,c.src=o.activeSrc,c.onload=function(){++s===a&&i.call(n)}}else 0===this.config.flag.indexOf("UNI-")&&uni.getImageInfo({src:o.activeSrc,success:function(r){n.cellImgs[t][e].activeImg=r,++s===a&&i.call(n)},fail:function(){return console.error("uni.getImageInfo 加载图片失败",o.activeSrc)}})}},s.prototype.computedWidthAndHeight=function(t,e,i){if(!e.width&&!e.height)return[t.width,t.height];if(e.width&&!e.height){var n=this.getWidth(e.width,i.col);return[n,t.height*(n/t.width)]}if(!e.width&&e.height){var r=this.getHeight(e.height,i.row);return[t.width*(r/t.height),r]}return[this.getWidth(e.width,i.col),this.getHeight(e.height,i.row)]},s.prototype.draw=function(){var t=this,e=this,i=e.config,s=e.ctx,a=e._defaultConfig,h=e._defaultStyle,c=e._activeStyle;s.clearRect(0,0,i.width,i.height),this.cells=n(this.prizes),this.button&&(this.cells[this.cols*this.rows-1]=this.button),this.cells.forEach((function(t){t.col=t.col||1,t.row=t.row||1})),this.prizeArea=this.blocks.reduce((function(e,i){var n=e.x,o=e.y,a=e.w,h=e.h,c=function(t){var e=t.padding.replace(/px/g,"").split(" ").map((function(t){return~~t}))||[0],i=0,n=0,o=0,s=0;switch(e.length){case 1:i=n=o=s=e[0];break;case 2:i=n=e[0],o=s=e[1];break;case 3:i=e[0],o=s=e[1],n=e[2];break;default:i=e[0],n=e[1],o=e[2],s=e[3]}var a={paddingTop:i,paddingBottom:n,paddingLeft:o,paddingRight:s};for(var h in a)a[h]=t.hasOwnProperty(h)&&r(t[h],"string","number")?~~String(t[h]).replace(/px/g,""):a[h];return[i,n,o,s]}(i).map((function(t){return~~t})),f=c[0],u=c[1],g=c[2],d=c[3],p=i.borderRadius?t.getLength(i.borderRadius):0;return l(s,n,o,a,h,p,t.handleBackground(n,o,a,h,i.background)),{x:n+g,y:o+f,w:a-g-d,h:h-f-u}}),{x:0,y:0,w:i.width,h:i.height}),this.cellWidth=(this.prizeArea.w-a.gutter*(this.cols-1))/this.cols,this.cellHeight=(this.prizeArea.h-a.gutter*(this.rows-1))/this.rows,this.cells.forEach((function(e,i){var n=t.getGeometricProperty([e.x,e.y,e.col,e.row]),r=n[0],a=n[1],f=n[2],u=n[3],g=i===t.currIndex%t.prizes.length>>0,d=(g?c.shadow:e.shadow||h.shadow).replace(/px/g,"").split(",")[0].split(" ").map((function(t,e){return e<3?Number(t):t}));4===d.length&&(s.shadowColor=d[3],s.shadowOffsetX=d[0],s.shadowOffsetY=d[1],s.shadowBlur=d[2],d[0]>0?f-=d[0]:(f+=d[0],r-=d[0]),d[1]>0?u-=d[1]:(u+=d[1],a-=d[1])),l(s,r,a,f,u,t.getLength(e.borderRadius?e.borderRadius:h.borderRadius),t.handleBackground(r,a,f,u,e.background,g)),s.shadowColor="rgba(255, 255, 255, 0)",s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowBlur=0,e.imgs&&e.imgs.forEach((function(n,o){if(!t.cellImgs[i])return!1;var h=t.cellImgs[i][o];if(!h)return!1;var c,f=g&&h.activeImg||h.defaultImg,l=t.computedWidthAndHeight(f,n,e),u=l[0],d=l[1],p=[r+t.getOffsetX(u,e.col),a+t.getHeight(n.top,e.row)],m=p[0],v=p[1];"WEB"===t.config.flag?c=f:0===t.config.flag.indexOf("UNI-")&&(c=f.path),s.drawImage(c,m,v,u,d)})),e.fonts&&e.fonts.forEach((function(i){var n=g&&c.fontStyle?c.fontStyle:i.fontStyle||h.fontStyle,f=g&&c.fontWeight?c.fontWeight:i.fontWeight||h.fontWeight,l=g&&c.fontSize?t.getLength(c.fontSize):t.getLength(i.fontSize||h.fontSize),u=g&&c.lineHeight?c.lineHeight:i.lineHeight||h.lineHeight||i.fontSize||h.fontSize;s.font=f+" "+l+"px "+n,s.fillStyle=g&&c.fontColor?c.fontColor:i.fontColor||h.fontColor;var d=[],p=String(i.text);if(i.hasOwnProperty("wordWrap")?i.wordWrap:h.wordWrap){p=o(p);for(var m="",v=0;v<p.length;v++){m+=p[v],s.measureText(m).width>t.getWidth(i.lengthLimit||h.lengthLimit,e.col)&&(d.push(m.slice(0,-1)),m=p[v])}m&&d.push(m),d.length||d.push(p)}else d=p.split("\n");d.forEach((function(n,o){s.fillText(n,r+t.getOffsetX(s.measureText(n).width,e.col),a+t.getHeight(i.top,e.row)+(o+1)*t.getLength(u))}))}))})),s.draw&&s.draw()},s.prototype.handleBackground=function(t,e,i,n,r,o){void 0===o&&(o=!1);var s=this,a=s.ctx,h=s._defaultStyle,c=s._activeStyle;return(r=o?c.background:r||h.background).includes("linear-gradient")&&(r=function(t,e,i,n,r,o){var s=/linear-gradient\((.+)\)/.exec(o)[1].split(",").map((function(t){return t.trim()})),a=s.shift(),h=[0,0,0,0];if(a.includes("deg")){var c=function(t){return Math.tan(t/180*Math.PI)};(a=a.slice(0,-3)%360)>=0&&a<45?h=[e,i+r,e+n,i+r-n*c(a-0)]:a>=45&&a<90?h=[e,i+r,e+n-r*c(a-45),i]:a>=90&&a<135?h=[e+n,i+r,e+n-r*c(a-90),i]:a>=135&&a<180?h=[e+n,i+r,e,i+n*c(a-135)]:a>=180&&a<225?h=[e+n,i,e,i+n*c(a-180)]:a>=225&&a<270?h=[e+n,i,e+r*c(a-225),i+r]:a>=270&&a<315?h=[e,i,e+r*c(a-270),i+r]:a>=315&&a<360&&(h=[e,i,e+n,i+r-n*c(a-315)])}else a.includes("top")?h=[e,i+r,e,i]:a.includes("bottom")?h=[e,i,e,i+r]:a.includes("left")?h=[e+n,i,e,i]:a.includes("right")&&(h=[e,i,e+n,i]);var f=t.createLinearGradient.apply(t,h.map((function(t){return t>>0})));return s.reduce((function(t,e,i){var n=e.split(" ");return 1===n.length?t.addColorStop(i,n[0]):2===n.length&&t.addColorStop.apply(t,n),t}),f)}(a,t,e,i,n,r)),r},s.prototype.play=function(){var t=this.clearInterval;this.startTime||(t(this.timer),this.startTime=Date.now(),this.prizeFlag=void 0,this.run())},s.prototype.stop=function(t){this.prizeFlag=t%this.prizes.length},s.prototype.run=function(t){void 0===t&&(t=0);var e=this,i=e.rAF,n=e.currIndex,r=e.prizes,o=e.prizeFlag,s=e.startTime,a=e._defaultConfig,h=Date.now()-s;if(h>=a.accelerationTime&&void 0!==o){this.FPS=h/t,this.endTime=Date.now(),this.stopIndex=n;for(var c=0;++c;){var f=r.length*c+o-(n>>0);if(g(this.FPS,this.stopIndex,f,a.decelerationTime)-this.stopIndex>a.speed){this.endIndex=f;break}}return this.slowDown()}this.currIndex=(n+u(h,.1,a.speed,a.accelerationTime))%r.length,this.draw(),i(this.run.bind(this,t+1))},s.prototype.slowDown=function(){var t,e=this,n=e.rAF,r=e.prizes,o=e.prizeFlag,s=e.stopIndex,a=e.endIndex,h=e._defaultConfig,c=Date.now()-this.endTime;if(c>h.decelerationTime)return this.startTime=0,void(null===(t=this.endCallback)||void 0===t||t.call(this,i({},r.find((function(t,e){return e===o})))));this.currIndex=g(c,s,a,h.decelerationTime)%r.length,this.draw(),n(this.slowDown.bind(this))},s.prototype.walk=function(){var t=this,e=this.setInterval;(0,this.clearInterval)(this.timer),this.timer=e((function(){t.currIndex+=1,t.draw()}),1300)},s.prototype.getGeometricProperty=function(t){var e=t[0],i=t[1],n=t[2],r=t[3],o=this.cellWidth,s=this.cellHeight,a=this._defaultConfig.gutter,h=[this.prizeArea.x+(o+a)*e,this.prizeArea.y+(s+a)*i];return n&&r&&h.push(o*n+a*(n-1),s*r+a*(r-1)),h},s.prototype.getWidth=function(t,e){return void 0===e&&(e=1),r(t,"number")?t:r(t,"string")?this.changeUnits(t,this.cellWidth*e+this._defaultConfig.gutter*(e-1)):0},s.prototype.getHeight=function(t,e){return void 0===e&&(e=1),r(t,"number")?t:r(t,"string")?this.changeUnits(t,this.cellHeight*e+this._defaultConfig.gutter*(e-1)):0},s.prototype.getOffsetX=function(t,e){return void 0===e&&(e=1),(this.cellWidth*e+this._defaultConfig.gutter*(e-1)-t)/2},s}(s);exports.LuckyGrid=p,exports.LuckyWheel=d;


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "45fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $some = __webpack_require__("b727").some;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a623":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $every = __webpack_require__("b727").every;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
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

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "LuckyGrid", function() { return /* reexport */ LuckyGrid; });
__webpack_require__.d(__webpack_exports__, "LuckyWheel", function() { return /* reexport */ LuckyWheel; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vue-luck-draw/src/LuckDraw.vue?vue&type=template&id=d73602d8&bindings={}

var _hoisted_1 = {
  style: {
    "background": "#ff4a4c",
    "border-radius": "4px",
    "color": "#eee",
    "text-align": "center",
    "padding": "10px 20px"
  }
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", null, "请使用<luckyWheel /> 或 <luckyGrid />组件", -1);

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", null, "新增图片引入机制", -1);

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", null, "新增自动根据dpr优化清晰度", -1);

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", null, "新增九宫格抽奖", -1);

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
  style: {
    "color": "#eee"
  },
  href: "https://100px.net?luckDraw",
  target: "_blank"
}, "官方文档"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" | "), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
  style: {
    "color": "#eee"
  },
  href: "https://github.com/buuing/vue-luck-draw/issues?luckDraw",
  target: "_blank"
}, "bug 反馈"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" | "), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
  style: {
    "color": "#eee"
  },
  href: "https://github.com/buuing/vue-luck-draw?luckDraw",
  target: "_blank"
}, "github 地址")], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6]);
}
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckDraw.vue?vue&type=template&id=d73602d8&bindings={}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vue-luck-draw/src/LuckDraw.vue?vue&type=script&lang=js
/* harmony default export */ var LuckDrawvue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckDraw.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckDraw.vue



LuckDrawvue_type_script_lang_js.render = render

/* harmony default export */ var LuckDraw = (LuckDrawvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vue-luck-draw/src/LuckyGrid.vue?vue&type=template&id=61167e48&bindings={"width":"props","height":"props","cols":"props","rows":"props","prizes":"props","button":"props","blocks":"props","defaultStyle":"props","activeStyle":"props","defaultConfig":"props","demo":"props","$lucky":"data","play":"options","stop":"options"}

var LuckyGridvue_type_template_id_61167e48_bindings_width_props_height_props_cols_props_rows_props_prizes_props_button_props_blocks_props_defaultStyle_props_activeStyle_props_defaultConfig_props_demo_props_$lucky_data_play_options_stop_options_hoisted_1 = {
  ref: "luckyGrid"
};
function LuckyGridvue_type_template_id_61167e48_bindings_width_props_height_props_cols_props_rows_props_prizes_props_button_props_blocks_props_defaultStyle_props_activeStyle_props_defaultConfig_props_demo_props_$lucky_data_play_options_stop_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", LuckyGridvue_type_template_id_61167e48_bindings_width_props_height_props_cols_props_rows_props_prizes_props_button_props_blocks_props_defaultStyle_props_activeStyle_props_defaultConfig_props_demo_props_$lucky_data_play_options_stop_options_hoisted_1, null, 512);
}
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckyGrid.vue?vue&type=template&id=61167e48&bindings={"width":"props","height":"props","cols":"props","rows":"props","prizes":"props","button":"props","blocks":"props","defaultStyle":"props","activeStyle":"props","defaultConfig":"props","demo":"props","$lucky":"data","play":"options","stop":"options"}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./src/components/vue-luck-draw/node_modules/lucky-canvas/index.js
var lucky_canvas = __webpack_require__("32fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__("a623");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./src/components/vue-luck-draw/utils/index.js







/**
 * 判断是否是期望的类型
 * @param { any } param 将要判断的变量
 * @param { ...string } types 期望的类型
 * @return { boolean } 返回期望是否正确
 */
var isExpectType = function isExpectType(param) {
  for (var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    types[_key - 1] = arguments[_key];
  }

  return types.some(function (type) {
    return Object.prototype.toString.call(param).slice(8, -1).toLowerCase() === type;
  });
}; // 参数校验器

var paramsValidator = function paramsValidator(data) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (isExpectType(data, 'object')) data = [data];
  return data.every(function (item, index) {
    for (var key in params) {
      if (params[key] === 1 && !item.hasOwnProperty(key)) {
        return !!console.error("\u53C2\u6570 ".concat(msg, "[").concat(index, "] \u7F3A\u5C11 ").concat(key, " \u5C5E\u6027"));
      } else if (isExpectType(params[key], 'object') && item[key]) {
        if (!paramsValidator(item[key], params[key], msg ? "".concat(msg, "[").concat(index, "].").concat(key) : key)) return false;
      }
    }

    return true;
  });
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vue-luck-draw/src/LuckyGrid.vue?vue&type=script&lang=js





/* harmony default export */ var LuckyGridvue_type_script_lang_js = ({
  props: {
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    cols: {
      type: [String, Number],
      default: 3
    },
    rows: {
      type: [String, Number],
      default: 3
    },
    prizes: {
      type: Array,
      validator: function validator(data) {
        return paramsValidator({
          prizes: data
        }, {
          prizes: {
            x: 1,
            y: 1,
            imgs: {
              src: 1
            },
            fonts: {
              text: 1
            }
          }
        });
      },
      default: function _default() {
        return [];
      }
    },
    button: {
      type: Object,
      validator: function validator(data) {
        return paramsValidator({
          button: [data]
        }, {
          button: {
            x: 1,
            y: 1,
            imgs: {
              src: 1
            },
            fonts: {
              text: 1
            }
          }
        });
      }
    },
    blocks: {
      type: Array,
      validator: function validator(data) {
        return paramsValidator({
          blocks: data
        }, {
          blocks: {
            padding: 1,
            background: 1
          }
        });
      },
      default: function _default() {
        return [];
      }
    },
    defaultStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    activeStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    defaultConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    demo: {
      // demo演示开启中奖标识自动游走
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      $lucky: null
    };
  },
  watch: {
    prizes: {
      handler: function handler(newData, oldData) {
        this.$lucky.prizes = newData;
      },
      deep: true
    },
    button: {
      handler: function handler(newData, oldData) {
        this.$lucky.button = newData;
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$lucky = new lucky_canvas["LuckyGrid"]({
      flag: 'WEB',
      width: this.width,
      height: this.height,
      divElement: this.$refs.luckyGrid,
      rAF: window.requestAnimationFrame,
      setTimeout: window.setTimeout,
      setInterval: window.setInterval,
      clearInterval: window.clearInterval
    }, _objectSpread2(_objectSpread2({}, this.$props), {}, {
      start: function start() {
        for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }

        _this.$emit.apply(_this, ['start'].concat(rest));
      },
      end: function end() {
        for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          rest[_key2] = arguments[_key2];
        }

        _this.$emit.apply(_this, ['end'].concat(rest));
      }
    }));
  },
  methods: {
    play: function play() {
      var _this$$lucky;

      (_this$$lucky = this.$lucky).play.apply(_this$$lucky, arguments);
    },
    stop: function stop() {
      var _this$$lucky2;

      (_this$$lucky2 = this.$lucky).stop.apply(_this$$lucky2, arguments);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckyGrid.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckyGrid.vue



LuckyGridvue_type_script_lang_js.render = LuckyGridvue_type_template_id_61167e48_bindings_width_props_height_props_cols_props_rows_props_prizes_props_button_props_blocks_props_defaultStyle_props_activeStyle_props_defaultConfig_props_demo_props_$lucky_data_play_options_stop_options_render

/* harmony default export */ var LuckyGrid = (LuckyGridvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vue-luck-draw/src/LuckyWheel.vue?vue&type=template&id=2d1f8d60&bindings={"width":"props","height":"props","blocks":"props","prizes":"props","buttons":"props","defaultStyle":"props","defaultConfig":"props","$lucky":"data","play":"options","stop":"options"}

var LuckyWheelvue_type_template_id_2d1f8d60_bindings_width_props_height_props_blocks_props_prizes_props_buttons_props_defaultStyle_props_defaultConfig_props_$lucky_data_play_options_stop_options_hoisted_1 = {
  ref: "luckyWheel"
};
function LuckyWheelvue_type_template_id_2d1f8d60_bindings_width_props_height_props_blocks_props_prizes_props_buttons_props_defaultStyle_props_defaultConfig_props_$lucky_data_play_options_stop_options_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", LuckyWheelvue_type_template_id_2d1f8d60_bindings_width_props_height_props_blocks_props_prizes_props_buttons_props_defaultStyle_props_defaultConfig_props_$lucky_data_play_options_stop_options_hoisted_1, null, 512);
}
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckyWheel.vue?vue&type=template&id=2d1f8d60&bindings={"width":"props","height":"props","blocks":"props","prizes":"props","buttons":"props","defaultStyle":"props","defaultConfig":"props","$lucky":"data","play":"options","stop":"options"}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/vue-luck-draw/src/LuckyWheel.vue?vue&type=script&lang=js





/* harmony default export */ var LuckyWheelvue_type_script_lang_js = ({
  props: {
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    blocks: {
      type: Array,
      validator: function validator(data) {
        return paramsValidator({
          blocks: data
        }, {
          blocks: {
            padding: 1,
            background: 1
          }
        });
      },
      default: function _default() {
        return [];
      }
    },
    prizes: {
      type: Array,
      validator: function validator(data) {
        return paramsValidator({
          prizes: data
        }, {
          prizes: {
            fonts: {
              text: 1
            },
            imgs: {
              src: 1
            }
          }
        });
      },
      default: function _default() {
        return [];
      }
    },
    buttons: {
      type: Array,
      validator: function validator(data) {
        return paramsValidator({
          buttons: data
        }, {
          buttons: {
            fonts: {
              text: 1
            },
            imgs: {
              src: 1
            }
          }
        });
      },
      default: function _default() {
        return [];
      }
    },
    defaultStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    defaultConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      $lucky: null
    };
  },
  watch: {
    prizes: {
      handler: function handler(newData, oldData) {
        this.$lucky.prizes = newData;
      },
      deep: true
    },
    buttons: {
      handler: function handler(newData, oldData) {
        this.$lucky.buttons = newData;
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$lucky = new lucky_canvas["LuckyWheel"]({
      flag: 'WEB',
      width: this.width,
      height: this.height,
      divElement: this.$refs.luckyWheel,
      rAF: window.requestAnimationFrame,
      setTimeout: window.setTimeout,
      setInterval: window.setInterval,
      clearInterval: window.clearInterval
    }, _objectSpread2(_objectSpread2({}, this.$props), {}, {
      start: function start() {
        for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }

        _this.$emit.apply(_this, ['start'].concat(rest));
      },
      end: function end() {
        for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          rest[_key2] = arguments[_key2];
        }

        _this.$emit.apply(_this, ['end'].concat(rest));
      }
    }));
  },
  methods: {
    play: function play() {
      var _this$$lucky;

      (_this$$lucky = this.$lucky).play.apply(_this$$lucky, arguments);
    },
    stop: function stop() {
      var _this$$lucky2;

      (_this$$lucky2 = this.$lucky).stop.apply(_this$$lucky2, arguments);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckyWheel.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/LuckyWheel.vue



LuckyWheelvue_type_script_lang_js.render = LuckyWheelvue_type_template_id_2d1f8d60_bindings_width_props_height_props_blocks_props_prizes_props_buttons_props_defaultStyle_props_defaultConfig_props_$lucky_data_play_options_stop_options_render

/* harmony default export */ var LuckyWheel = (LuckyWheelvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/vue-luck-draw/src/index.js




var src_install = function install(Vue, options) {
  Vue.component('LuckDraw', LuckDraw);
  Vue.component('LuckyGrid', LuckyGrid);
  Vue.component('LuckyWheel', LuckyWheel);
};

if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var vue_luck_draw_src = ({
  install: src_install
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_luck_draw_src);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});