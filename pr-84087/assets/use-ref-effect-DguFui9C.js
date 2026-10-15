import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/compose/build-module/hooks/use-ref-effect/index.mjs
function useRefEffect(callback, dependencies) {
	const cleanupRef = (0, import_react.useRef)(void 0);
	return (0, import_react.useCallback)((node) => {
		if (node) cleanupRef.current = callback(node);
		else if (cleanupRef.current) cleanupRef.current();
	}, dependencies);
}
function init_use_ref_effect() {
	return (init_use_ref_effect = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { useRefEffect as n, init_use_ref_effect as t };
