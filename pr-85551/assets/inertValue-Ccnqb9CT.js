import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { _ as init_reactVersion, v as isReactVersionAtLeast } from "./useRenderElement-Dkv6YH0v.js";
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/inertValue.mjs
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
