import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/compose/build-module/hooks/use-previous/index.mjs
function usePrevious(value) {
	const ref = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
function init_use_previous() {
	return (init_use_previous = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { usePrevious as n, init_use_previous as t };
