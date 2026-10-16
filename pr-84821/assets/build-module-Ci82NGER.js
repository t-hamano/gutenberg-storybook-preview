import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/escape-html/build-module/escape-greater.mjs
function __unstableEscapeGreaterThan(value) {
	return value.replace(/>/g, "&gt;");
}
//#endregion
//#region ../packages/escape-html/build-module/index.mjs
function escapeAmpersand(value) {
	return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi, "&amp;");
}
function escapeQuotationMark(value) {
	return value.replace(/"/g, "&quot;");
}
function escapeLessThan(value) {
	return value.replace(/</g, "&lt;");
}
function escapeAttribute(value) {
	return __unstableEscapeGreaterThan(escapeLessThan(escapeQuotationMark(escapeAmpersand(value))));
}
function escapeHTML(value) {
	return escapeLessThan(escapeAmpersand(value));
}
function escapeEditableHTML(value) {
	return escapeLessThan(value.replace(/&/g, "&amp;"));
}
function isValidAttributeName(name) {
	return !REGEXP_INVALID_ATTRIBUTE_NAME.test(name);
}
var REGEXP_INVALID_ATTRIBUTE_NAME;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		REGEXP_INVALID_ATTRIBUTE_NAME = /[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;
	})))();
}
//#endregion
export { isValidAttributeName as a, init_build_module as i, escapeEditableHTML as n, escapeHTML as r, escapeAttribute as t };
