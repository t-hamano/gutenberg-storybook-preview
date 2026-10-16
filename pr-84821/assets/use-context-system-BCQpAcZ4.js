import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { d as isPlainObject, n as paramCase, t as init_dist_es2015 } from "./dist.es2015-BYklxwDS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { g as insertStyles, h as init_emotion_utils_browser_esm, i as __unsafe_useEmotionCache } from "./emotion-element-489459f2.browser.development.esm-B7UxODuR.js";
import { n as init_emotion_react_browser_development_esm } from "./emotion-react.browser.development.esm-C_pXP8PL.js";
import { n as memize } from "./dist-DL-769ey.js";
import { n as warning, t as init_build_module } from "./build-module-B5spW8IS.js";
import { i as require_cjs, n as init_emotion_css_development_esm, r as require_es6, t as cx } from "./emotion-css.development.esm-DHgdGHQy.js";
//#region ../packages/components/src/utils/hooks/use-update-effect.ts
/**
* A `React.useEffect` that will not run on the first render.
* Source:
* https://github.com/ariakit/ariakit/blob/main/packages/ariakit-react-core/src/utils/hooks.ts
*
* @param effect
* @param deps
*/
function useUpdateEffect(effect, deps) {
	const mountedRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (mountedRef.current) return effect();
		mountedRef.current = true;
	}, deps);
	(0, import_react.useEffect)(() => () => {
		mountedRef.current = false;
	}, []);
}
function init_use_update_effect() {
	return (init_use_update_effect = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/components/src/utils/hooks/use-cx.ts
var isSerializedStyles, useCx;
function init_use_cx() {
	return (init_use_cx = __esmMin((() => {
		init_emotion_react_browser_development_esm();
		init_emotion_utils_browser_esm();
		init_emotion_css_development_esm();
		init_react();
		isSerializedStyles = (o) => typeof o !== "undefined" && o !== null && ["name", "styles"].every((p) => typeof o[p] !== "undefined");
		useCx = () => {
			const cache = __unsafe_useEmotionCache();
			return (0, import_react.useCallback)((...classNames) => {
				if (cache === null) throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");
				return cx(...classNames.map((arg) => {
					if (isSerializedStyles(arg)) {
						insertStyles(cache, arg, false);
						return `${cache.key}-${arg.name}`;
					}
					return arg;
				}));
			}, [cache]);
		};
	})))();
}
//#endregion
//#region ../packages/components/src/context/context-system-provider.tsx
/**
* Consolidates incoming ContextSystem values with a (potential) parent ContextSystem value.
*
* Note: This function will warn if it detects an un-memoized `value`
*
* @param {Object}              props
* @param {Record<string, any>} props.value
* @return {Record<string, any>} The consolidated value.
*/
function useContextSystemBridge({ value }) {
	const parentContext = useComponentsContext();
	const valueRef = (0, import_react.useRef)(value);
	useUpdateEffect(() => {
		if ((0, import_es6.default)(valueRef.current, value) && valueRef.current !== value) warning(`Please memoize your context: ${JSON.stringify(value)}`);
	}, [value]);
	return (0, import_react.useMemo)(() => {
		return (0, import_cjs.default)(parentContext ?? {}, value ?? {}, { isMergeableObject: isPlainObject });
	}, [parentContext, value]);
}
var import_cjs, import_es6, import_jsx_dev_runtime, _jsxFileName, ComponentsContext, useComponentsContext, BaseContextSystemProvider, ContextSystemProvider;
function init_context_system_provider() {
	return (init_context_system_provider = __esmMin((() => {
		import_cjs = /* @__PURE__ */ __toESM(require_cjs());
		import_es6 = /* @__PURE__ */ __toESM(require_es6());
		init_react();
		init_build_module();
		init_use_update_effect();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/context/context-system-provider.tsx";
		ComponentsContext = (0, import_react.createContext)({});
		ComponentsContext.displayName = "ComponentsContext";
		useComponentsContext = () => (0, import_react.useContext)(ComponentsContext);
		BaseContextSystemProvider = ({ children, value }) => {
			const contextValue = useContextSystemBridge({ value });
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComponentsContext.Provider, {
				value: contextValue,
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 3
			}, void 0);
		};
		ContextSystemProvider = (0, import_react.memo)(BaseContextSystemProvider);
		try {
			ComponentsContext.__docgenInfo = {
				"description": "",
				"displayName": "ComponentsContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/context/context-system-provider.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/context/constants.ts
var COMPONENT_NAMESPACE, CONNECTED_NAMESPACE, CONNECT_STATIC_NAMESPACE;
function init_constants() {
	return (init_constants = __esmMin((() => {
		COMPONENT_NAMESPACE = "data-wp-component";
		CONNECTED_NAMESPACE = "data-wp-c16t";
		CONNECT_STATIC_NAMESPACE = "__contextSystemKey__";
	})))();
}
//#endregion
//#region ../packages/components/src/context/get-styled-class-name-from-key.ts
/**
* Generates the connected component CSS className based on the namespace.
*
* @param namespace The name of the connected component.
* @return The generated CSS className.
*/
function getStyledClassName(namespace) {
	return `components-${paramCase(namespace)}`;
}
var getStyledClassNameFromKey;
function init_get_styled_class_name_from_key() {
	return (init_get_styled_class_name_from_key = __esmMin((() => {
		init_dist_es2015();
		getStyledClassNameFromKey = memize(getStyledClassName);
	})))();
}
//#endregion
//#region ../packages/components/src/context/context-connect.ts
/**
* Forwards ref (React.ForwardRef) and "Connects" (or registers) a component
* within the Context system under a specified namespace.
*
* @param Component The component to register into the Context system.
* @param namespace The namespace to register the component under.
* @return The connected WordPressComponent
*/
function contextConnect(Component, namespace) {
	return _contextConnect(Component, namespace, { forwardsRef: true });
}
/**
* "Connects" (or registers) a component within the Context system under a specified namespace.
* Does not forward a ref.
*
* @param Component The component to register into the Context system.
* @param namespace The namespace to register the component under.
* @return The connected WordPressComponent
*/
function contextConnectWithoutRef(Component, namespace) {
	return _contextConnect(Component, namespace);
}
function _contextConnect(Component, namespace, options) {
	const WrappedComponent = options?.forwardsRef ? (0, import_react.forwardRef)(Component) : Component;
	if (typeof namespace === "undefined") warning("contextConnect: Please provide a namespace");
	let mergedNamespace = WrappedComponent["__contextSystemKey__"] || [namespace];
	/**
	* Consolidate (merge) namespaces before attaching it to the WrappedComponent.
	*/
	if (Array.isArray(namespace)) mergedNamespace = [...mergedNamespace, ...namespace];
	if (typeof namespace === "string") mergedNamespace = [...mergedNamespace, namespace];
	return Object.assign(WrappedComponent, {
		[CONNECT_STATIC_NAMESPACE]: [...new Set(mergedNamespace)],
		displayName: namespace,
		selector: `.${getStyledClassNameFromKey(namespace)}`
	});
}
/**
* Attempts to retrieve the connected namespace from a component.
*
* @param Component The component to retrieve a namespace from.
* @return The connected namespaces.
*/
function getConnectNamespace(Component) {
	if (!Component) return [];
	let namespaces = [];
	if (Component["__contextSystemKey__"]) namespaces = Component[CONNECT_STATIC_NAMESPACE];
	if (Component.type && Component.type["__contextSystemKey__"]) namespaces = Component.type[CONNECT_STATIC_NAMESPACE];
	return namespaces;
}
/**
* Checks to see if a component is connected within the Context system.
*
* @param Component The component to retrieve a namespace from.
* @param match     The namespace to check.
*/
function hasConnectNamespace(Component, match) {
	if (!Component) return false;
	if (typeof match === "string") return getConnectNamespace(Component).includes(match);
	if (Array.isArray(match)) return match.some((result) => getConnectNamespace(Component).includes(result));
	return false;
}
function init_context_connect() {
	return (init_context_connect = __esmMin((() => {
		init_react();
		init_build_module();
		init_constants();
		init_get_styled_class_name_from_key();
	})))();
}
//#endregion
//#region ../packages/components/src/context/utils.ts
/**
* Creates a dedicated context namespace HTML attribute for components.
* ns is short for "namespace"
*
* @example
* ```jsx
* <div {...ns('Container')} />
* ```
*
* @param componentName The name for the component.
* @return A props object with the namespaced HTML attribute.
*/
function getNamespace(componentName) {
	return { [COMPONENT_NAMESPACE]: componentName };
}
/**
* Creates a dedicated connected context namespace HTML attribute for components.
* ns is short for "namespace"
*
* @example
* ```jsx
* <div {...cns()} />
* ```
*
* @return A props object with the namespaced HTML attribute.
*/
function getConnectedNamespace() {
	return { [CONNECTED_NAMESPACE]: true };
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_constants();
	})))();
}
//#endregion
//#region ../packages/components/src/context/use-context-system.ts
/**
* Custom hook that derives registered props from the Context system.
* These derived props are then consolidated with incoming component props.
*
* @param props     Incoming props from the component.
* @param namespace The namespace to register and to derive context props from.
* @return The connected props.
*/
function useContextSystem(props, namespace) {
	const contextSystemProps = useComponentsContext();
	if (typeof namespace === "undefined") warning("useContextSystem: Please provide a namespace");
	const contextProps = contextSystemProps?.[namespace] || {};
	const finalComponentProps = {
		...getConnectedNamespace(),
		...getNamespace(namespace)
	};
	const { _overrides, ...otherContextProps } = contextProps;
	const overrideProps = _overrides;
	const initialMergedProps = Object.entries(otherContextProps).length ? Object.assign({}, otherContextProps, props) : props;
	const propsWithChildren = initialMergedProps;
	const classes = useCx()(getStyledClassNameFromKey(namespace), props.className);
	const rendered = typeof propsWithChildren.renderChildren === "function" ? propsWithChildren.renderChildren(initialMergedProps) : propsWithChildren.children;
	for (const key in initialMergedProps) finalComponentProps[key] = initialMergedProps[key];
	for (const key in overrideProps) finalComponentProps[key] = overrideProps[key];
	if (rendered !== void 0) finalComponentProps.children = rendered;
	finalComponentProps.className = classes;
	return finalComponentProps;
}
function init_use_context_system() {
	return (init_use_context_system = __esmMin((() => {
		init_build_module();
		init_context_system_provider();
		init_utils();
		init_get_styled_class_name_from_key();
		init_use_cx();
	})))();
}
//#endregion
export { hasConnectNamespace as a, init_context_system_provider as c, contextConnectWithoutRef as i, init_use_update_effect as l, useContextSystem as n, init_context_connect as o, contextConnect as r, ContextSystemProvider as s, init_use_context_system as t, useUpdateEffect as u };
