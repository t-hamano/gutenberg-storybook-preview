import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/compose/build-module/hooks/use-merge-refs/index.mjs
function assignRef(ref, value) {
	if (typeof ref === "function") {
		const returned = ref(value);
		return typeof returned === "function" ? returned : void 0;
	} else if (ref && ref.hasOwnProperty("current")) ref.current = value;
}
function detachRef(ref, index, cleanups) {
	const cleanup = cleanups[index];
	if (cleanup) {
		cleanups[index] = void 0;
		cleanup();
	} else assignRef(ref, null);
}
function useMergeRefs(refs) {
	const elementRef = (0, import_react.useRef)(null);
	const attachedRefsRef = (0, import_react.useRef)([]);
	const currentRefsRef = (0, import_react.useRef)(refs);
	const cleanupsRef = (0, import_react.useRef)([]);
	currentRefsRef.current = refs;
	(0, import_react.useLayoutEffect)(() => {
		const element = elementRef.current;
		if (element === null) return;
		refs.forEach((ref, index) => {
			const attachedRef = attachedRefsRef.current[index];
			if (ref !== attachedRef) {
				detachRef(attachedRef, index, cleanupsRef.current);
				cleanupsRef.current[index] = assignRef(ref, element);
			}
		});
		attachedRefsRef.current = refs;
	}, refs);
	return (0, import_react.useCallback)((value) => {
		elementRef.current = value;
		if (value === null) {
			attachedRefsRef.current.forEach((ref, index) => {
				detachRef(ref, index, cleanupsRef.current);
			});
			attachedRefsRef.current = [];
		} else {
			attachedRefsRef.current = currentRefsRef.current;
			attachedRefsRef.current.forEach((ref, index) => {
				cleanupsRef.current[index] = assignRef(ref, value);
			});
		}
	}, []);
}
function init_use_merge_refs() {
	return (init_use_merge_refs = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { useMergeRefs as n, init_use_merge_refs as t };
