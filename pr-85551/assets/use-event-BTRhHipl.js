import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/compose/build-module/hooks/use-event/index.mjs
function useEvent(callback) {
	const ref = (0, import_react.useRef)(() => {
		throw new Error("Callbacks created with `useEvent` cannot be called during rendering.");
	});
	(0, import_react.useInsertionEffect)(() => {
		ref.current = callback;
	});
	return (0, import_react.useCallback)((...args) => ref.current?.(...args), []);
}
function init_use_event() {
	return (init_use_event = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { useEvent as n, init_use_event as t };
