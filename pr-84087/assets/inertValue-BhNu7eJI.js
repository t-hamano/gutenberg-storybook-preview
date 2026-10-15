import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { _ as isReactVersionAtLeast, g as init_reactVersion } from "./useRenderElement-QwAlaybP.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/inertValue.mjs
function inertValue(value) {
	if (isReactVersionAtLeast(19)) return value;
	return value ? "true" : void 0;
}
function init_inertValue() {
	return (init_inertValue = __esmMin((() => {
		init_reactVersion();
	})))();
}
//#endregion
export { init_inertValue as n, inertValue as t };
