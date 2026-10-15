import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/compose/build-module/hooks/use-isomorphic-layout-effect/index.mjs
var use_isomorphic_layout_effect_default;
function init_use_isomorphic_layout_effect() {
	return (init_use_isomorphic_layout_effect = __esmMin((() => {
		init_react();
		use_isomorphic_layout_effect_default = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
	})))();
}
//#endregion
export { use_isomorphic_layout_effect_default as n, init_use_isomorphic_layout_effect as t };
