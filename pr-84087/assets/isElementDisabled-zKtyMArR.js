import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/isElementDisabled.mjs
function isElementDisabled(element) {
	return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
function init_isElementDisabled() {
	return (init_isElementDisabled = __esmMin((() => {})))();
}
//#endregion
export { isElementDisabled as n, init_isElementDisabled as t };
