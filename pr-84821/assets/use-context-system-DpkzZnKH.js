import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { d as isPlainObject, n as paramCase, t as init_dist_es2015 } from "./dist.es2015-BYklxwDS.js";
import { g as insertStyles, h as init_emotion_utils_browser_esm, i as __unsafe_useEmotionCache } from "./emotion-element-489459f2.browser.development.esm-B7UxODuR.js";
import { n as init_emotion_react_browser_development_esm } from "./emotion-react.browser.development.esm-C_pXP8PL.js";
import { n as memize } from "./dist-DL-769ey.js";
import { n as warning, t as init_build_module } from "./build-module-B5spW8IS.js";
import { i as require_cjs, n as init_emotion_css_development_esm, r as require_es6, t as cx } from "./emotion-css.development.esm-DHgdGHQy.js";
//#region ../packages/components/build-module/utils/hooks/use-update-effect.mjs
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
var use_update_effect_default;
function init_use_update_effect() {
	return (init_use_update_effect = __esmMin((() => {
		init_react();
		use_update_effect_default = useUpdateEffect;
	})))();
}
//#endregion
//#region ../packages/components/build-module/utils/hooks/use-cx.mjs
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
//#region ../packages/components/build-module/context/context-system-provider.mjs
function useContextSystemBridge({ value }) {
	const parentContext = useComponentsContext();
	const valueRef = (0, import_react.useRef)(value);
	use_update_effect_default(() => {
		if ((0, import_es6.default)(valueRef.current, value) && valueRef.current !== value) warning(`Please memoize your context: ${JSON.stringify(value)}`);
	}, [value]);
	return (0, import_react.useMemo)(() => {
		return (0, import_cjs.default)(parentContext ?? {}, value ?? {}, { isMergeableObject: isPlainObject });
	}, [parentContext, value]);
}
var import_cjs, import_es6, import_jsx_runtime, ComponentsContext, useComponentsContext, BaseContextSystemProvider, ContextSystemProvider;
function init_context_system_provider() {
	return (init_context_system_provider = __esmMin((() => {
		import_cjs = /* @__PURE__ */ __toESM(require_cjs(), 1);
		import_es6 = /* @__PURE__ */ __toESM(require_es6(), 1);
		init_react();
		init_build_module();
		init_use_update_effect();
		import_jsx_runtime = require_jsx_runtime();
		ComponentsContext = (0, import_react.createContext)({});
		ComponentsContext.displayName = "ComponentsContext";
		useComponentsContext = () => (0, import_react.useContext)(ComponentsContext);
		BaseContextSystemProvider = ({ children, value }) => {
			const contextValue = useContextSystemBridge({ value });
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentsContext.Provider, {
				value: contextValue,
				children
			});
		};
		ContextSystemProvider = (0, import_react.memo)(BaseContextSystemProvider);
	})))();
}
//#endregion
//#region ../packages/components/build-module/context/constants.mjs
var COMPONENT_NAMESPACE, CONNECTED_NAMESPACE, CONNECT_STATIC_NAMESPACE;
function init_constants() {
	return (init_constants = __esmMin((() => {
		COMPONENT_NAMESPACE = "data-wp-component";
		CONNECTED_NAMESPACE = "data-wp-c16t";
		CONNECT_STATIC_NAMESPACE = "__contextSystemKey__";
	})))();
}
//#endregion
//#region ../packages/components/build-module/context/get-styled-class-name-from-key.mjs
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
//#region ../packages/components/build-module/context/context-connect.mjs
function contextConnect(Component, namespace) {
	return _contextConnect(Component, namespace, { forwardsRef: true });
}
function contextConnectWithoutRef(Component, namespace) {
	return _contextConnect(Component, namespace);
}
function _contextConnect(Component, namespace, options) {
	const WrappedComponent = options?.forwardsRef ? (0, import_react.forwardRef)(Component) : Component;
	if (typeof namespace === "undefined") warning("contextConnect: Please provide a namespace");
	let mergedNamespace = WrappedComponent["__contextSystemKey__"] || [namespace];
	if (Array.isArray(namespace)) mergedNamespace = [...mergedNamespace, ...namespace];
	if (typeof namespace === "string") mergedNamespace = [...mergedNamespace, namespace];
	return Object.assign(WrappedComponent, {
		[CONNECT_STATIC_NAMESPACE]: [...new Set(mergedNamespace)],
		displayName: namespace,
		selector: `.${getStyledClassNameFromKey(namespace)}`
	});
}
function getConnectNamespace(Component) {
	if (!Component) return [];
	let namespaces = [];
	if (Component["__contextSystemKey__"]) namespaces = Component[CONNECT_STATIC_NAMESPACE];
	if (Component.type && Component.type["__contextSystemKey__"]) namespaces = Component.type[CONNECT_STATIC_NAMESPACE];
	return namespaces;
}
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
//#region ../packages/components/build-module/context/utils.mjs
function getNamespace(componentName) {
	return { [COMPONENT_NAMESPACE]: componentName };
}
function getConnectedNamespace() {
	return { [CONNECTED_NAMESPACE]: true };
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_constants();
	})))();
}
//#endregion
//#region ../packages/components/build-module/context/use-context-system.mjs
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
export { hasConnectNamespace as a, ContextSystemProvider as c, use_update_effect_default as d, contextConnectWithoutRef as i, init_context_system_provider as l, useContextSystem as n, init_context_connect as o, contextConnect as r, ComponentsContext as s, init_use_context_system as t, init_use_update_effect as u };
