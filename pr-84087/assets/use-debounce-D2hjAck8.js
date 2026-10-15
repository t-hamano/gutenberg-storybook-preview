import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_debounce, t as debounce } from "./debounce-ga5YZOAF.js";
//#region ../packages/compose/build-module/hooks/use-debounce/index.mjs
function useDebounce(fn, wait, options) {
	const debounced = (0, import_react.useMemo)(() => debounce(fn, wait ?? 0, options), [
		fn,
		wait,
		options?.leading,
		options?.trailing,
		options?.maxWait
	]);
	(0, import_react.useEffect)(() => () => debounced.cancel(), [debounced]);
	return debounced;
}
function init_use_debounce() {
	return (init_use_debounce = __esmMin((() => {
		init_react();
		init_debounce();
	})))();
}
//#endregion
export { useDebounce as n, init_use_debounce as t };
