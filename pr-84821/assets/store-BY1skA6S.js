import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_create_interpolate_element, t as create_interpolate_element_default } from "./create-interpolate-element-CUfbmqGd.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { a as createReduxStore } from "./default-registry-CuLW5PfA.js";
import { n as init_build_module$1, r as register, t as combineReducers } from "./build-module-BFlpD7Tf.js";
import { n as init_strings, t as escapeRegExp } from "./strings-ogU8BBr-.js";
//#region ../packages/components/build-module/text-highlight/index.mjs
var import_jsx_runtime, TextHighlight, text_highlight_default;
function init_text_highlight() {
	return (init_text_highlight = __esmMin((() => {
		init_create_interpolate_element();
		init_strings();
		import_jsx_runtime = require_jsx_runtime();
		TextHighlight = (props) => {
			const { text = "", highlight = "" } = props;
			const trimmedHighlightText = highlight.trim();
			if (!trimmedHighlightText) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text });
			const regex = new RegExp(`(${escapeRegExp(trimmedHighlightText)})`, "gi");
			return create_interpolate_element_default(text.replace(regex, "<mark>$&</mark>"), { mark: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {}) });
		};
		TextHighlight.displayName = "TextHighlight";
		text_highlight_default = TextHighlight;
	})))();
}
//#endregion
//#region ../packages/preferences/build-module/store/reducer.mjs
function defaults(state = {}, action) {
	if (action.type === "SET_PREFERENCE_DEFAULTS") {
		const { scope, defaults: values } = action;
		return {
			...state,
			[scope]: {
				...state[scope],
				...values
			}
		};
	}
	return state;
}
function withPersistenceLayer(reducer) {
	let persistenceLayer;
	return (state, action) => {
		if (action.type === "SET_PERSISTENCE_LAYER") {
			const { persistenceLayer: persistence, persistedData } = action;
			persistenceLayer = persistence;
			return persistedData;
		}
		const nextState = reducer(state, action);
		if (action.type === "SET_PREFERENCE_VALUE") persistenceLayer?.set(nextState);
		return nextState;
	};
}
var preferences, reducer_default;
function init_reducer() {
	return (init_reducer = __esmMin((() => {
		init_build_module$1();
		preferences = withPersistenceLayer((state = {}, action) => {
			if (action.type === "SET_PREFERENCE_VALUE") {
				const { scope, name, value } = action;
				return {
					...state,
					[scope]: {
						...state[scope],
						[name]: value
					}
				};
			}
			return state;
		});
		reducer_default = combineReducers({
			defaults,
			preferences
		});
	})))();
}
//#endregion
//#region ../packages/preferences/build-module/store/actions.mjs
var actions_exports = /* @__PURE__ */ __exportAll({
	set: () => set,
	setDefaults: () => setDefaults,
	setPersistenceLayer: () => setPersistenceLayer,
	toggle: () => toggle
});
function toggle(scope, name) {
	return function({ select, dispatch }) {
		const currentValue = select.get(scope, name);
		dispatch.set(scope, name, !currentValue);
	};
}
function set(scope, name, value) {
	return {
		type: "SET_PREFERENCE_VALUE",
		scope,
		name,
		value
	};
}
function setDefaults(scope, defaults) {
	return {
		type: "SET_PREFERENCE_DEFAULTS",
		scope,
		defaults
	};
}
async function setPersistenceLayer(persistenceLayer) {
	return {
		type: "SET_PERSISTENCE_LAYER",
		persistenceLayer,
		persistedData: await persistenceLayer.get()
	};
}
//#endregion
//#region ../packages/preferences/build-module/store/selectors.mjs
var selectors_exports = /* @__PURE__ */ __exportAll({ get: () => get });
var withDeprecatedKeys, get;
function init_selectors() {
	return (init_selectors = __esmMin((() => {
		init_build_module();
		withDeprecatedKeys = (originalGet) => (state, scope, name) => {
			if ([
				"allowRightClickOverrides",
				"distractionFree",
				"editorMode",
				"fixedToolbar",
				"focusMode",
				"hiddenBlockTypes",
				"inactivePanels",
				"keepCaretInsideBlock",
				"mostUsedBlocks",
				"openPanels",
				"showBlockBreadcrumbs",
				"showIconLabels",
				"showListViewByDefault",
				"isPublishSidebarEnabled",
				"isComplementaryAreaVisible",
				"pinnedItems"
			].includes(name) && ["core/edit-post", "core/edit-site"].includes(scope)) {
				deprecated(`wp.data.select( 'core/preferences' ).get( '${scope}', '${name}' )`, {
					since: "6.5",
					alternative: `wp.data.select( 'core/preferences' ).get( 'core', '${name}' )`
				});
				return originalGet(state, "core", name);
			}
			return originalGet(state, scope, name);
		};
		get = withDeprecatedKeys((state, scope, name) => {
			const value = state.preferences[scope]?.[name];
			return value !== void 0 ? value : state.defaults[scope]?.[name];
		});
	})))();
}
//#endregion
//#region ../packages/preferences/build-module/store/constants.mjs
var STORE_NAME;
function init_constants() {
	return (init_constants = __esmMin((() => {
		STORE_NAME = "core/preferences";
	})))();
}
//#endregion
//#region ../packages/preferences/build-module/store/index.mjs
var store;
function init_store() {
	return (init_store = __esmMin((() => {
		init_build_module$1();
		init_reducer();
		init_selectors();
		init_constants();
		store = createReduxStore(STORE_NAME, {
			reducer: reducer_default,
			actions: actions_exports,
			selectors: selectors_exports
		});
		register(store);
	})))();
}
//#endregion
export { text_highlight_default as i, store as n, init_text_highlight as r, init_store as t };
