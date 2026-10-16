import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { i as init_safeReact, r as SafeReact } from "./useIsoLayoutEffect-DDc8Lhn-.js";
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/useForcedRerendering.mjs
/**
* Returns a function that forces a rerender.
*/
function useForcedRerendering() {
	const [, setState] = import_react$1.useState({});
	return import_react$1.useCallback(() => {
		setState({});
	}, []);
}
var import_react$1;
function init_useForcedRerendering() {
	return (init_useForcedRerendering = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.5.0--7My7Lubseca8je9LSEweA/node_modules/@base-ui/utils/useId.mjs
function useGlobalId(idOverride, prefix = "mui") {
	const defaultId = import_react.useRef(void 0);
	const forceRerender = useForcedRerendering();
	const id = idOverride ?? defaultId.current;
	import_react.useEffect(() => {
		if (defaultId.current == null) {
			globalId += 1;
			defaultId.current = `${prefix}-${globalId}`;
			if (idOverride == null) forceRerender();
		}
	}, [
		idOverride,
		prefix,
		forceRerender
	]);
	return id;
}
/**
*
* @example <div id={useId()} />
* @param {string | undefined} idOverride overrides the generated id when provided
* @param {string | undefined} prefix prefixes the generated id when provided
* @returns {string | undefined}
*/
function useId(idOverride, prefix) {
	if (maybeReactUseId !== void 0) {
		const reactId = maybeReactUseId();
		return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
	}
	return useGlobalId(idOverride, prefix);
}
var import_react, globalId, maybeReactUseId;
function init_useId() {
	return (init_useId = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_safeReact();
		init_useForcedRerendering();
		globalId = 0;
		maybeReactUseId = SafeReact.useId;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useBaseUiId.mjs
/**
* Wraps `useId` and prefixes generated `id`s with `base-ui-`
* @param {string | undefined} idOverride overrides the generated id when provided
* @returns {string | undefined}
*/
function useBaseUiId(idOverride) {
	return useId(idOverride, "base-ui");
}
function init_useBaseUiId() {
	return (init_useBaseUiId = __esmMin((() => {
		init_useId();
	})))();
}
//#endregion
export { init_useForcedRerendering as a, useId as i, useBaseUiId as n, useForcedRerendering as o, init_useId as r, init_useBaseUiId as t };
