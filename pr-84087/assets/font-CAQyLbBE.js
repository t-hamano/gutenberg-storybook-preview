import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/components/src/utils/font-values.ts
var font_values_default;
function init_font_values() {
	return (init_font_values = __esmMin((() => {
		font_values_default = {
			"default.fontFamily": "-apple-system, system-ui, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
			"default.fontSize": "13px",
			"helpText.fontSize": "12px",
			mobileTextMinFontSize: "16px"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/utils/font.ts
/**
*
* @param value Path of value from `FONT`
* @return Font rule value
*/
function font(value) {
	return font_values_default[value] ?? "";
}
function init_font() {
	return (init_font = __esmMin((() => {
		init_font_values();
	})))();
}
//#endregion
export { init_font as n, font as t };
