import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as stringifyLocale } from "./stringifyLocale-Cym2-5oZ.js";
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/formatNumber.mjs
function getFormatter(locale, options) {
	const optionsString = JSON.stringify({
		locale: stringifyLocale(locale),
		options
	});
	const cachedFormatter = cache.get(optionsString);
	if (cachedFormatter) return cachedFormatter;
	const formatter = new Intl.NumberFormat(locale, options);
	cache.set(optionsString, formatter);
	return formatter;
}
function formatNumber(value, locale, options) {
	if (value == null) return "";
	return getFormatter(locale, options).format(value);
}
var cache;
function init_formatNumber() {
	return (init_formatNumber = __esmMin((() => {
		cache = /* @__PURE__ */ new Map();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/valueToPercent.mjs
function valueToPercent(value, min, max) {
	return (value - min) * 100 / (max - min);
}
function init_valueToPercent() {
	return (init_valueToPercent = __esmMin((() => {})))();
}
//#endregion
export { init_formatNumber as i, valueToPercent as n, formatNumber as r, init_valueToPercent as t };
