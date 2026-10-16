import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as throttle, t as init_throttle } from "./throttle-FioEcidh.js";
//#region ../packages/compose/build-module/hooks/use-throttle/index.mjs
function useThrottle(fn, wait, options) {
	const throttled = (0, import_react.useMemo)(() => throttle(fn, wait ?? 0, options), [
		fn,
		wait,
		options
	]);
	(0, import_react.useEffect)(() => () => throttled.cancel(), [throttled]);
	return throttled;
}
function init_use_throttle() {
	return (init_use_throttle = __esmMin((() => {
		init_react();
		init_throttle();
	})))();
}
//#endregion
export { useThrottle as n, init_use_throttle as t };
