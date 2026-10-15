import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as createReduxStore, s as createSelector } from "./default-registry-CuLW5PfA.js";
import { a as keyboardShortcut, i as isKeyboardEvent, n as displayShortcut, o as rawShortcut, r as init_build_module$1, s as shortcutAriaLabel } from "./build-module-LJKyBiy6.js";
import { i as useSelect } from "./dispatch-abVPMST3.js";
import { n as useRegistry, t as init_use_registry } from "./use-registry-CfP_kF8b.js";
import { n as init_build_module$2, r as register } from "./build-module-DkpHnLlB.js";
//#region ../packages/data/build-module/components/use-dispatch/use-dispatch.mjs
var useDispatch, use_dispatch_default;
function init_use_dispatch() {
	return (init_use_dispatch = __esmMin((() => {
		init_use_registry();
		useDispatch = (storeNameOrDescriptor) => {
			const { dispatch } = useRegistry();
			return storeNameOrDescriptor === void 0 ? dispatch : dispatch(storeNameOrDescriptor);
		};
		use_dispatch_default = useDispatch;
	})))();
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/store/reducer.mjs
function reducer(state = {}, action) {
	switch (action.type) {
		case "REGISTER_SHORTCUT": return {
			...state,
			[action.name]: {
				category: action.category,
				keyCombination: action.keyCombination,
				aliases: action.aliases,
				description: action.description
			}
		};
		case "UNREGISTER_SHORTCUT":
			const { [action.name]: actionName, ...remainingState } = state;
			return remainingState;
	}
	return state;
}
var reducer_default;
function init_reducer() {
	return (init_reducer = __esmMin((() => {
		reducer_default = reducer;
	})))();
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/store/actions.mjs
var actions_exports = /* @__PURE__ */ __exportAll({
	registerShortcut: () => registerShortcut,
	unregisterShortcut: () => unregisterShortcut
});
function registerShortcut({ name, category, description, keyCombination, aliases }) {
	return {
		type: "REGISTER_SHORTCUT",
		name,
		category,
		keyCombination,
		aliases,
		description
	};
}
function unregisterShortcut(name) {
	return {
		type: "UNREGISTER_SHORTCUT",
		name
	};
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/store/selectors.mjs
var selectors_exports = /* @__PURE__ */ __exportAll({
	getAllShortcutKeyCombinations: () => getAllShortcutKeyCombinations,
	getAllShortcutRawKeyCombinations: () => getAllShortcutRawKeyCombinations,
	getCategoryShortcuts: () => getCategoryShortcuts,
	getKeyboardShortcut: () => getKeyboardShortcut,
	getShortcutAliases: () => getShortcutAliases,
	getShortcutDescription: () => getShortcutDescription,
	getShortcutKeyCombination: () => getShortcutKeyCombination,
	getShortcutRepresentation: () => getShortcutRepresentation
});
function getKeyCombinationRepresentation(shortcut, representation) {
	if (!shortcut) return null;
	return shortcut.modifier ? FORMATTING_METHODS[representation][shortcut.modifier](shortcut.character) : shortcut.character;
}
function getShortcutKeyCombination(state, name) {
	return state[name] ? state[name].keyCombination : null;
}
function getShortcutRepresentation(state, name, representation = "display") {
	return getKeyCombinationRepresentation(getShortcutKeyCombination(state, name), representation);
}
function getShortcutDescription(state, name) {
	return state[name] ? state[name].description : null;
}
function getShortcutAliases(state, name) {
	return state[name] && state[name].aliases ? state[name].aliases : EMPTY_ARRAY;
}
var EMPTY_ARRAY, FORMATTING_METHODS, getKeyboardShortcut, getAllShortcutKeyCombinations, getAllShortcutRawKeyCombinations, getCategoryShortcuts;
function init_selectors() {
	return (init_selectors = __esmMin((() => {
		init_build_module$2();
		init_build_module$1();
		EMPTY_ARRAY = [];
		FORMATTING_METHODS = {
			/**
			* Display formatting.
			*/
			display: displayShortcut,
			/**
			* Raw shortcut formatting.
			*/
			raw: rawShortcut,
			/**
			* ARIA label formatting.
			*/
			ariaLabel: shortcutAriaLabel
		};
		getKeyboardShortcut = createSelector((state, name) => {
			const combination = getShortcutKeyCombination(state, name);
			if (!combination) return null;
			return keyboardShortcut[combination.modifier ?? "undefined"](combination.character);
		}, (state, name) => [state[name]]);
		getAllShortcutKeyCombinations = createSelector((state, name) => {
			return [getShortcutKeyCombination(state, name), ...getShortcutAliases(state, name)].filter((combination) => !!combination);
		}, (state, name) => [state[name]]);
		getAllShortcutRawKeyCombinations = createSelector((state, name) => {
			return getAllShortcutKeyCombinations(state, name).map((combination) => getKeyCombinationRepresentation(combination, "raw"));
		}, (state, name) => [state[name]]);
		getCategoryShortcuts = createSelector((state, categoryName) => {
			return Object.entries(state).filter(([, shortcut]) => shortcut.category === categoryName).map(([name]) => name);
		}, (state) => [state]);
	})))();
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/store/index.mjs
var store;
function init_store() {
	return (init_store = __esmMin((() => {
		init_build_module$2();
		init_reducer();
		init_selectors();
		store = createReduxStore("core/keyboard-shortcuts", {
			reducer: reducer_default,
			actions: actions_exports,
			selectors: selectors_exports
		});
		register(store);
	})))();
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/hooks/use-shortcut-event-match.mjs
function useShortcutEventMatch() {
	const { getAllShortcutKeyCombinations } = useSelect(store);
	return (0, import_react.useCallback)((name, event) => {
		return getAllShortcutKeyCombinations(name).some((combination) => {
			if (!combination) return false;
			return isKeyboardEvent[combination.modifier ?? "undefined"](event, combination.character);
		});
	}, [getAllShortcutKeyCombinations]);
}
function init_use_shortcut_event_match() {
	return (init_use_shortcut_event_match = __esmMin((() => {
		init_build_module$2();
		init_react();
		init_build_module$1();
		init_store();
	})))();
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/context.mjs
var globalShortcuts, globalListener, context;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		globalShortcuts = /* @__PURE__ */ new Set();
		globalListener = (event) => {
			for (const keyboardShortcut of globalShortcuts) keyboardShortcut(event);
		};
		context = (0, import_react.createContext)({
			add: (shortcut) => {
				if (globalShortcuts.size === 0) document.addEventListener("keydown", globalListener);
				globalShortcuts.add(shortcut);
			},
			delete: (shortcut) => {
				globalShortcuts.delete(shortcut);
				if (globalShortcuts.size === 0) document.removeEventListener("keydown", globalListener);
			}
		});
		context.displayName = "KeyboardShortcutsContext";
	})))();
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/hooks/use-shortcut.mjs
function useShortcut(name, callback, { isDisabled = false } = {}) {
	const shortcuts = (0, import_react.useContext)(context);
	const isMatch = useShortcutEventMatch();
	const callbackRef = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		callbackRef.current = callback;
	}, [callback]);
	(0, import_react.useEffect)(() => {
		if (isDisabled) return;
		function _callback(event) {
			if (isMatch(name, event) && callbackRef.current) callbackRef.current(event);
		}
		shortcuts.add(_callback);
		return () => {
			shortcuts.delete(_callback);
		};
	}, [
		name,
		isDisabled,
		shortcuts,
		isMatch
	]);
}
function init_use_shortcut() {
	return (init_use_shortcut = __esmMin((() => {
		init_react();
		init_use_shortcut_event_match();
		init_context();
	})))();
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/components/shortcut-provider.mjs
var Provider;
function init_shortcut_provider() {
	return (init_shortcut_provider = __esmMin((() => {
		init_context();
		require_jsx_runtime();
		({Provider} = context);
	})))();
}
//#endregion
//#region ../packages/keyboard-shortcuts/build-module/index.mjs
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_store();
		init_use_shortcut();
		init_shortcut_provider();
		init_use_shortcut_event_match();
	})))();
}
//#endregion
export { useShortcutEventMatch as a, init_use_dispatch as c, init_use_shortcut_event_match as i, use_dispatch_default as l, init_use_shortcut as n, init_store as o, useShortcut as r, store as s, init_build_module as t };
