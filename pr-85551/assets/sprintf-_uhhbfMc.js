import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/@tannin/sprintf@1.3.2-Cmr2Bq6cYom5t58CNvMjRw/node_modules/@tannin/sprintf/src/index.js
/**
* Given a format string, returns string with arguments interpolatation.
* Arguments can either be provided directly via function arguments spread, or
* with an array as the second argument.
*
* @see https://en.wikipedia.org/wiki/Printf_format_string
*
* @example
*
* ```js
* import sprintf from '@tannin/sprintf';
*
* sprintf( 'Hello %s!', 'world' );
* // ⇒ 'Hello world!'
* ```
* @template {string} T
* @overload
* @param {T} string - string printf format string
* @param {...import('../types').SprintfArgs<T>} args - arguments to interpolate
*
* @return {string} Formatted string.
*/
/**
* Given a format string, returns string with arguments interpolatation.
* Arguments can either be provided directly via function arguments spread, or
* with an array as the second argument.
*
* @see https://en.wikipedia.org/wiki/Printf_format_string
*
* @example
*
* ```js
* import sprintf from '@tannin/sprintf';
*
* sprintf( 'Hello %s!', 'world' );
* // ⇒ 'Hello world!'
* ```
* @template {string} T
* @overload
* @param {T} string - string printf format string
* @param {import('../types').SprintfArgs<T>} args - arguments to interpolate
*
* @return {string} Formatted string.
*/
/**
* Given a format string, returns string with arguments interpolatation.
* Arguments can either be provided directly via function arguments spread, or
* with an array as the second argument.
*
* @see https://en.wikipedia.org/wiki/Printf_format_string
*
* @example
*
* ```js
* import sprintf from '@tannin/sprintf';
*
* sprintf( 'Hello %s!', 'world' );
* // ⇒ 'Hello world!'
* ```
* @template {string} T
* @param {T} string - string printf format string
* @param {...import('../types').SprintfArgs<T>} args - arguments to interpolate
*
* @return {string} Formatted string.
*/
function sprintf$1(string, ...args) {
	var i = 0;
	if (Array.isArray(args[0])) args = args[0];
	return string.replace(PATTERN, function() {
		var index = arguments[3], name = arguments[5], precision = arguments[7], type = arguments[9], value;
		if (type === "%") return "%";
		if (precision === "*") {
			precision = args[i];
			i++;
		}
		if (name === void 0) {
			if (index === void 0) index = i + 1;
			i++;
			value = args[index - 1];
		} else if (args[0] && typeof args[0] === "object" && args[0].hasOwnProperty(name)) value = args[0][name];
		if (type === "f") value = parseFloat(value) || 0;
		else if (type === "d") value = parseInt(value) || 0;
		if (precision !== void 0) {
			if (type === "f") value = value.toFixed(precision);
			else if (type === "s") value = value.substr(0, precision);
		}
		return value !== void 0 && value !== null ? value : "";
	});
}
var PATTERN;
function init_src() {
	return (init_src = __esmMin((() => {
		PATTERN = /%(((\d+)\$)|(\(([$_a-zA-Z][$_a-zA-Z0-9]*)\)))?[ +0#-]*\d*(\.(\d+|\*))?(ll|[lhqL])?([cduxXefgsp%])/g;
	})))();
}
//#endregion
//#region ../packages/i18n/build-module/sprintf.mjs
function sprintf(format, ...args) {
	return sprintf$1(format, ...args);
}
function init_sprintf() {
	return (init_sprintf = __esmMin((() => {
		init_src();
	})))();
}
//#endregion
export { sprintf as n, init_sprintf as t };
