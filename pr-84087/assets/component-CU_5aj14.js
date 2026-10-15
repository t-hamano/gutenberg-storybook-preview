import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BrNgZl6E.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
import { n as space, t as init_space } from "./space-CmH0DdCr.js";
//#region ../packages/components/build-module/utils/use-responsive-value.mjs
function useResponsiveValue(values, options = {}) {
	const isResponsive = Array.isArray(values) && values.length > 1;
	const index = useBreakpointIndex({
		...options,
		enabled: isResponsive
	});
	if (!Array.isArray(values) && typeof values !== "function") return values;
	const array = values || [];
	return array[index >= array.length ? array.length - 1 : index];
}
var breakpoints, useBreakpointIndex;
function init_use_responsive_value() {
	return (init_use_responsive_value = __esmMin((() => {
		init_react();
		breakpoints = [
			"40em",
			"52em",
			"64em"
		];
		useBreakpointIndex = (options = {}) => {
			const { defaultIndex = 0, enabled = true } = options;
			if (typeof defaultIndex !== "number") throw new TypeError(`Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`);
			else if (defaultIndex < 0 || defaultIndex > breakpoints.length - 1) throw new RangeError(`Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`);
			const [value, setValue] = (0, import_react.useState)(defaultIndex);
			(0, import_react.useEffect)(() => {
				if (!enabled) return;
				const getIndex = () => breakpoints.filter((bp) => {
					return typeof window !== "undefined" ? window.matchMedia(`screen and (min-width: ${bp})`).matches : false;
				}).length;
				const onResize = () => {
					const newValue = getIndex();
					if (value !== newValue) setValue(newValue);
				};
				onResize();
				if (typeof window !== "undefined") window.addEventListener("resize", onResize);
				return () => {
					if (typeof window !== "undefined") window.removeEventListener("resize", onResize);
				};
			}, [value, enabled]);
			return value;
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/flex/flex/hook.mjs
function getRuntime$1() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$1(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$1(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$1}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$1) === hash) return true;
	return false;
}
function injectStyle$1(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$1();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$1(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$1, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$1(targetDocument) {
	const runtime = getRuntime$1();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$1(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$1(hash, css) {
	const runtime = getRuntime$1();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$1(targetDocument, hash, css);
}
function useDeprecatedProps(props) {
	const { isReversed, ...otherProps } = props;
	if (typeof isReversed !== "undefined") {
		deprecated("Flex isReversed", {
			alternative: "Flex direction=\"row-reverse\" or \"column-reverse\"",
			since: "5.9"
		});
		return {
			...otherProps,
			direction: isReversed ? "row-reverse" : "row"
		};
	}
	return otherProps;
}
function useFlex(props) {
	const { align, className, direction: directionProp = "row", expanded = true, gap = 2, justify = "space-between", style, wrap = false, ...otherProps } = useContextSystem(useDeprecatedProps(props), "Flex");
	const direction = useResponsiveValue(Array.isArray(directionProp) ? directionProp : [directionProp]);
	const isColumn = typeof direction === "string" && !!direction.includes("column");
	const flexStyle = {
		...style,
		"--wp-components-flex-align": align ?? (isColumn ? "normal" : "center"),
		"--wp-components-flex-direction": direction,
		"--wp-components-flex-wrap": wrap ? "wrap" : "nowrap",
		"--wp-components-flex-gap": space(gap),
		"--wp-components-flex-justify": justify
	};
	return {
		...otherProps,
		className: clsx(style_module_default$1.flex, isColumn ? style_module_default$1["items-column"] : style_module_default$1["items-row"], expanded && (isColumn ? style_module_default$1["expanded-column"] : style_module_default$1["expanded-row"]), className),
		style: flexStyle,
		isColumn
	};
}
var STYLE_HASH_ATTRIBUTE$1, style_module_default$1;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_use_context_system();
		init_use_responsive_value();
		init_space();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("1931a27616", ".e518617e7c3a18e7__flex{align-items:var(--wp-components-flex-align);display:flex;flex-direction:var(--wp-components-flex-direction);flex-wrap:var(--wp-components-flex-wrap);gap:var(--wp-components-flex-gap);justify-content:var(--wp-components-flex-justify)}.e4a76957e0b12292__expanded-column{height:100%}.cc39999a5fb580d4__expanded-row{width:100%}.bc09d0edcc10c304__item{display:var(--wp-components-flex-item-display);max-height:100%;max-width:100%;min-height:0;min-width:0}.c184ec8e81027f31__block{flex:1}.f9694ed4faabfc82__items-column>*{min-height:0}._3896336788892095__items-row>*{min-width:0}");
		style_module_default$1 = {
			"flex": "e518617e7c3a18e7__flex",
			"expanded-column": "e4a76957e0b12292__expanded-column",
			"expanded-row": "cc39999a5fb580d4__expanded-row",
			"item": "bc09d0edcc10c304__item",
			"block": "c184ec8e81027f31__block",
			"items-column": "f9694ed4faabfc82__items-column",
			"items-row": "_3896336788892095__items-row"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/flex/context.mjs
var FlexContext, useFlexContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		FlexContext = (0, import_react.createContext)({ flexItemDisplay: void 0 });
		useFlexContext = () => (0, import_react.useContext)(FlexContext);
	})))();
}
//#endregion
//#region ../packages/components/build-module/flex/flex-item/hook.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
function useFlexItem(props) {
	const { className, display: displayProp, isBlock = false, style, ...otherProps } = useContextSystem(props, "FlexItem");
	const contextDisplay = useFlexContext().flexItemDisplay;
	const display = displayProp || contextDisplay;
	const itemStyle = {
		...style,
		"--wp-components-flex-item-display": display || "block"
	};
	return {
		...otherProps,
		className: clsx(style_module_default.item, isBlock && style_module_default.block, className),
		style: itemStyle
	};
}
var STYLE_HASH_ATTRIBUTE, style_module_default;
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_context();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("1931a27616", ".e518617e7c3a18e7__flex{align-items:var(--wp-components-flex-align);display:flex;flex-direction:var(--wp-components-flex-direction);flex-wrap:var(--wp-components-flex-wrap);gap:var(--wp-components-flex-gap);justify-content:var(--wp-components-flex-justify)}.e4a76957e0b12292__expanded-column{height:100%}.cc39999a5fb580d4__expanded-row{width:100%}.bc09d0edcc10c304__item{display:var(--wp-components-flex-item-display);max-height:100%;max-width:100%;min-height:0;min-width:0}.c184ec8e81027f31__block{flex:1}.f9694ed4faabfc82__items-column>*{min-height:0}._3896336788892095__items-row>*{min-width:0}");
		style_module_default = {
			"flex": "e518617e7c3a18e7__flex",
			"expanded-column": "e4a76957e0b12292__expanded-column",
			"expanded-row": "cc39999a5fb580d4__expanded-row",
			"item": "bc09d0edcc10c304__item",
			"block": "c184ec8e81027f31__block",
			"items-column": "f9694ed4faabfc82__items-column",
			"items-row": "_3896336788892095__items-row"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/flex/flex-item/component.mjs
function UnconnectedFlexItem(props, forwardedRef) {
	const flexItemProps = useFlexItem(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...flexItemProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime, FlexItem, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook$1();
		import_jsx_runtime = require_jsx_runtime();
		FlexItem = contextConnect(UnconnectedFlexItem, "FlexItem");
		component_default = FlexItem;
	})))();
}
//#endregion
export { FlexContext as a, useFlex as c, useFlexItem as i, init_use_responsive_value as l, init_component as n, init_context as o, init_hook$1 as r, init_hook as s, component_default as t, useResponsiveValue as u };
