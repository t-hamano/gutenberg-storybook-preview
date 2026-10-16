import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/compose/build-module/hooks/use-media-query/index.mjs
function getMQLSubscriber(view, query) {
	if (!view || !query || typeof view.matchMedia !== "function") return EMPTY_SUBSCRIBER;
	let queryCache = perWindowCache.get(view);
	if (!queryCache) {
		queryCache = /* @__PURE__ */ new Map();
		perWindowCache.set(view, queryCache);
	}
	const cached = queryCache.get(query);
	if (cached) return cached;
	const mediaQueryList = view.matchMedia(query);
	const listeners = /* @__PURE__ */ new Set();
	const notify = () => {
		for (const listener of listeners) listener();
	};
	const subscriber = {
		subscribe(onStoreChange) {
			if (listeners.size === 0) mediaQueryList.addEventListener?.("change", notify);
			listeners.add(onStoreChange);
			return () => {
				listeners.delete(onStoreChange);
				if (listeners.size === 0) mediaQueryList.removeEventListener?.("change", notify);
			};
		},
		getValue() {
			return mediaQueryList.matches;
		}
	};
	queryCache.set(query, subscriber);
	return subscriber;
}
function useMediaQuery(query, view = typeof window !== "undefined" ? window : void 0) {
	const source = getMQLSubscriber(view, query);
	return (0, import_react.useSyncExternalStore)(source.subscribe, source.getValue, () => false);
}
var perWindowCache, EMPTY_SUBSCRIBER;
function init_use_media_query() {
	return (init_use_media_query = __esmMin((() => {
		init_react();
		perWindowCache = /* @__PURE__ */ new WeakMap();
		EMPTY_SUBSCRIBER = {
			subscribe: () => () => {},
			getValue: () => false
		};
	})))();
}
//#endregion
//#region ../packages/compose/build-module/hooks/use-reduced-motion/index.mjs
var useReducedMotion, use_reduced_motion_default;
function init_use_reduced_motion() {
	return (init_use_reduced_motion = __esmMin((() => {
		init_use_media_query();
		useReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");
		use_reduced_motion_default = useReducedMotion;
	})))();
}
//#endregion
export { useMediaQuery as i, use_reduced_motion_default as n, init_use_media_query as r, init_use_reduced_motion as t };
