import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/safeReact.mjs
var import_react$1, SafeReact;
function init_safeReact() {
	return (init_safeReact = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		SafeReact = { ...import_react$1 };
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var import_react, noop, useIsoLayoutEffect;
function init_useIsoLayoutEffect() {
	return (init_useIsoLayoutEffect = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		noop = () => {};
		useIsoLayoutEffect = typeof document !== "undefined" ? import_react.useLayoutEffect : noop;
	})))();
}
//#endregion
export { init_safeReact as i, useIsoLayoutEffect as n, SafeReact as r, init_useIsoLayoutEffect as t };
