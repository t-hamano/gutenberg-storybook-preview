import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/stringifyLocale.mjs
function stringifyLocale(locale) {
	if (Array.isArray(locale)) return locale.map((value) => stringifyLocale(value)).join(",");
	if (locale == null) return "";
	return String(locale);
}
function init_stringifyLocale() {
	return (init_stringifyLocale = __esmMin((() => {})))();
}
//#endregion
export { stringifyLocale as n, init_stringifyLocale as t };
