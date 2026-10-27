import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/is-plain-object@5.1.0-5G_-lUnpSwJHYfRbkIxLrw/node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
* is-plain-object <https://github.com/jonschlinkert/is-plain-object>
*
* Copyright (c) 2014-2017, Jon Schlinkert.
* Released under the MIT License.
*/
function isObject(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
	var ctor, prot;
	if (isObject(o) === false) return false;
	ctor = o.constructor;
	if (ctor === void 0) return true;
	prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (prot.hasOwnProperty("isPrototypeOf") === false) return false;
	return true;
}
function init_is_plain_object() {
	return (init_is_plain_object = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/tslib@2.8.1-LT-dxu1EkVy7OUDyVf5glQ/node_modules/tslib/tslib.es6.mjs
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
var extendStatics, __assign;
function init_tslib_es6() {
	return (init_tslib_es6 = __esmMin((() => {
		extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		__assign = function() {
			__assign = Object.assign || function __assign(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
			return __assign.apply(this, arguments);
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/lower-case@2.0.2-5YZP5nczP5_f_8Vt5KBPjA/node_modules/lower-case/dist.es2015/index.js
/**
* Lower case as a function.
*/
function lowerCase(str) {
	return str.toLowerCase();
}
function init_dist_es2015() {
	return (init_dist_es2015 = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/no-case@3.0.4-R4Hzt6qn-erEsTak7ojDpg/node_modules/no-case/dist.es2015/index.js
/**
* Normalize the string into something other libraries can manipulate easier.
*/
function noCase(input, options) {
	if (options === void 0) options = {};
	var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
	var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
	var start = 0;
	var end = result.length;
	while (result.charAt(start) === "\0") start++;
	while (result.charAt(end - 1) === "\0") end--;
	return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
* Replace `re` in the input string with the replacement value.
*/
function replace(input, re, value) {
	if (re instanceof RegExp) return input.replace(re, value);
	return re.reduce(function(input, re) {
		return input.replace(re, value);
	}, input);
}
var DEFAULT_SPLIT_REGEXP, DEFAULT_STRIP_REGEXP;
function init_dist_es2015$1() {
	return (init_dist_es2015$1 = __esmMin((() => {
		init_dist_es2015();
		DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
		DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
	})))();
}
//#endregion
//#region ../node_modules/.store/dot-case@3.0.4-hi-rLWlWmiZ169n4dWcbUA/node_modules/dot-case/dist.es2015/index.js
function dotCase(input, options) {
	if (options === void 0) options = {};
	return noCase(input, __assign({ delimiter: "." }, options));
}
function init_dist_es2015$2() {
	return (init_dist_es2015$2 = __esmMin((() => {
		init_tslib_es6();
		init_dist_es2015$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/param-case@3.0.4-rdAht_VwpGpefPRylN2bTA/node_modules/param-case/dist.es2015/index.js
function paramCase(input, options) {
	if (options === void 0) options = {};
	return dotCase(input, __assign({ delimiter: "-" }, options));
}
function init_dist_es2015$3() {
	return (init_dist_es2015$3 = __esmMin((() => {
		init_tslib_es6();
		init_dist_es2015$2();
	})))();
}
//#endregion
export { __assign as a, __spreadArray as c, isPlainObject as d, noCase as i, init_tslib_es6 as l, paramCase as n, __extends as o, init_dist_es2015$1 as r, __rest as s, init_dist_es2015$3 as t, init_is_plain_object as u };
