import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_remove_accents } from "./remove-accents-FMNXhR5L.js";
//#region ../packages/components/build-module/utils/strings.mjs
function escapeRegExp(string) {
	return string.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
}
var import_remove_accents, ALL_UNICODE_DASH_CHARACTERS, normalizeTextString;
function init_strings() {
	return (init_strings = __esmMin((() => {
		import_remove_accents = /* @__PURE__ */ __toESM(require_remove_accents(), 1);
		ALL_UNICODE_DASH_CHARACTERS = /* @__PURE__ */ new RegExp(/[\u007e\u00ad\u2053\u207b\u208b\u2212\p{Pd}]/gu);
		normalizeTextString = (value) => {
			return (0, import_remove_accents.default)(value).normalize("NFKC").toLocaleLowerCase().replace(ALL_UNICODE_DASH_CHARACTERS, "-");
		};
	})))();
}
//#endregion
export { init_strings as n, normalizeTextString as r, escapeRegExp as t };
