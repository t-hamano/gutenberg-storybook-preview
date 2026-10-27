import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/element/build-module/utils.mjs
var isEmptyElement;
function init_utils() {
	return (init_utils = __esmMin((() => {
		isEmptyElement = (element) => {
			if (typeof element === "number") return false;
			if (typeof element?.valueOf() === "string" || Array.isArray(element)) return !element.length;
			return !element;
		};
	})))();
}
//#endregion
//#region ../packages/compose/build-module/utils/observable-map/index.mjs
function observableMap() {
	const map = /* @__PURE__ */ new Map();
	const listeners = /* @__PURE__ */ new Map();
	function callListeners(name) {
		const list = listeners.get(name);
		if (!list) return;
		for (const listener of list) listener();
	}
	return {
		get(name) {
			return map.get(name);
		},
		set(name, value) {
			map.set(name, value);
			callListeners(name);
		},
		delete(name) {
			map.delete(name);
			callListeners(name);
		},
		subscribe(name, listener) {
			let list = listeners.get(name);
			if (!list) {
				list = /* @__PURE__ */ new Set();
				listeners.set(name, list);
			}
			list.add(listener);
			return () => {
				list.delete(listener);
				if (list.size === 0) listeners.delete(name);
			};
		}
	};
}
function init_observable_map() {
	return (init_observable_map = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/compose/build-module/hooks/use-observable-value/index.mjs
function useObservableValue(map, name) {
	const [subscribe, getValue] = (0, import_react.useMemo)(() => [(listener) => map.subscribe(name, listener), () => map.get(name)], [map, name]);
	return (0, import_react.useSyncExternalStore)(subscribe, getValue, getValue);
}
function init_use_observable_value() {
	return (init_use_observable_value = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { init_utils as a, observableMap as i, useObservableValue as n, isEmptyElement as o, init_observable_map as r, init_use_observable_value as t };
