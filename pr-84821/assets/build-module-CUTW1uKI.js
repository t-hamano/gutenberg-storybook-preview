import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/html-entities/build-module/index.mjs
function decodeEntities(html) {
	if ("string" !== typeof html || -1 === html.indexOf("&")) return html;
	if (void 0 === _decodeTextArea) {
		if (document.implementation && document.implementation.createHTMLDocument) _decodeTextArea = document.implementation.createHTMLDocument("").createElement("textarea");
		else _decodeTextArea = document.createElement("textarea");
	}
	_decodeTextArea.innerHTML = html;
	const decoded = _decodeTextArea.textContent ?? "";
	_decodeTextArea.innerHTML = "";
	return decoded;
}
var _decodeTextArea;
function init_build_module() {
	return (init_build_module = __esmMin((() => {})))();
}
//#endregion
export { init_build_module as n, decodeEntities as t };
