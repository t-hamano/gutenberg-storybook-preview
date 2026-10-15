import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BrNgZl6E.js";
import { n as init_component$2, t as component_default$2 } from "./component-CFOx0tK5.js";
//#region ../packages/compose/build-module/hooks/use-debounced-input/index.mjs
function useDebouncedInput(defaultValue = "") {
	const [input, setInput] = (0, import_react.useState)(defaultValue);
	const [debouncedInput, setDebouncedState] = (0, import_react.useState)(defaultValue);
	const setDebouncedInput = useDebounce(setDebouncedState, 250);
	(0, import_react.useEffect)(() => {
		setDebouncedInput(input);
	}, [input, setDebouncedInput]);
	return [
		input,
		setInput,
		debouncedInput
	];
}
function init_use_debounced_input() {
	return (init_use_debounced_input = __esmMin((() => {
		init_react();
		init_use_debounce();
	})))();
}
//#endregion
//#region ../packages/components/build-module/item-group/context.mjs
var ItemGroupContext, useItemGroupContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		ItemGroupContext = (0, import_react.createContext)({
			isList: false,
			size: "medium"
		});
		ItemGroupContext.displayName = "ItemGroupContext";
		useItemGroupContext = () => (0, import_react.useContext)(ItemGroupContext);
	})))();
}
//#endregion
//#region ../packages/components/build-module/item-group/item/hook.mjs
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
function useItem(props) {
	const { isList, spacedAround, size: contextSize } = useItemGroupContext();
	const { as: asProp, className, onClick, role = isList ? "listitem" : void 0, size: sizeProp, ...otherProps } = useContextSystem(props, "Item");
	const size = sizeProp || contextSize;
	const as = asProp || (typeof onClick !== "undefined" ? "button" : "div");
	return {
		as,
		className: clsx(style_module_default$1.item, as === "button" && style_module_default$1["is-unstyled-button"], as === "a" && style_module_default$1["is-unstyled-link"], sizeClassName[size] || sizeClassName.medium, spacedAround && style_module_default$1["is-spaced-around"], className),
		onClick,
		wrapperClassName: style_module_default$1["item-wrapper"],
		role,
		...otherProps
	};
}
var STYLE_HASH_ATTRIBUTE$1, style_module_default$1, sizeClassName;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_context();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("fd33c719f5", "._68553e70f1f1cb4e__item-group._55756ee749a180e1__is-bordered{border:1px solid rgba(0,0,0,.1)}._68553e70f1f1cb4e__item-group._4e8285db01e0c630__is-separated>:not(marquee)>*{border-block-end:1px solid rgba(0,0,0,.1)}._68553e70f1f1cb4e__item-group._4e8285db01e0c630__is-separated>:last-of-type>*{border-block-end-color:transparent}._68553e70f1f1cb4e__item-group._58738db58e87759e__is-rounded{border-radius:var(--wpds-border-radius-sm,2px)}._68553e70f1f1cb4e__item-group._58738db58e87759e__is-rounded>:first-of-type>*{border-start-end-radius:var(--wpds-border-radius-sm,2px);border-start-start-radius:var(--wpds-border-radius-sm,2px)}._68553e70f1f1cb4e__item-group._58738db58e87759e__is-rounded>:last-of-type>*{border-end-end-radius:var(--wpds-border-radius-sm,2px);border-end-start-radius:var(--wpds-border-radius-sm,2px)}._4f562a88cd53281b__item-wrapper,.fc4c000709063bb0__item{display:block;width:100%}.fc4c000709063bb0__item{box-sizing:border-box;color:inherit;margin:0}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button{appearance:none;background:none;border:1px solid transparent;cursor:var(--wpds-cursor-control,pointer);font-family:inherit;font-size:13px;text-align:start}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link svg,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button svg{fill:currentColor}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link:hover,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button:hover{color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link:focus,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button:focus{box-shadow:none}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link:focus-visible,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button:focus-visible{outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link{text-decoration:none}.fc4c000709063bb0__item._62800b4fe741b26a__is-spaced-around{border-radius:var(--wpds-border-radius-sm,2px)}.fc4c000709063bb0__item.ff341e6676e9138f__is-size-small{padding:4.3px 8px}.fc4c000709063bb0__item._715af0bb13514a58__is-size-medium{padding:7.9px 12px}.fc4c000709063bb0__item.b141618c0c420070__is-size-large{padding:11.5px 16.0008px}");
		style_module_default$1 = {
			"item-group": "_68553e70f1f1cb4e__item-group",
			"is-bordered": "_55756ee749a180e1__is-bordered",
			"is-separated": "_4e8285db01e0c630__is-separated",
			"is-rounded": "_58738db58e87759e__is-rounded",
			"item-wrapper": "_4f562a88cd53281b__item-wrapper",
			"item": "fc4c000709063bb0__item",
			"is-unstyled-button": "d204dc5a680d24cf__is-unstyled-button",
			"is-unstyled-link": "a5802f3508d737a0__is-unstyled-link",
			"is-spaced-around": "_62800b4fe741b26a__is-spaced-around",
			"is-size-small": "ff341e6676e9138f__is-size-small",
			"is-size-medium": "_715af0bb13514a58__is-size-medium",
			"is-size-large": "b141618c0c420070__is-size-large"
		};
		sizeClassName = {
			small: style_module_default$1["is-size-small"],
			medium: style_module_default$1["is-size-medium"],
			large: style_module_default$1["is-size-large"]
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/item-group/item/component.mjs
function UnconnectedItem(props, forwardedRef) {
	const { role, wrapperClassName, ...otherProps } = useItem(props);
	const itemRef = (0, import_react.useRef)(null);
	const { isList } = useItemGroupContext();
	(0, import_react.useEffect)(() => {
		if (isList && role === "listitem" && !itemRef.current?.closest("ol, ul, menu, [role=\"list\"], [role=\"directory\"]")) throw new Error("Item with list semantics must be rendered inside an element with role=\"list\".");
	}, [isList, role]);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
		ref: itemRef,
		role,
		className: wrapperClassName,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$2, {
			...otherProps,
			ref: forwardedRef
		})
	});
}
var import_jsx_runtime$1, Item, component_default$1;
function init_component() {
	return (init_component = __esmMin((() => {
		init_react();
		init_hook();
		init_context_connect();
		init_component$2();
		init_context();
		import_jsx_runtime$1 = require_jsx_runtime();
		Item = contextConnect(UnconnectedItem, "Item");
		component_default$1 = Item;
	})))();
}
//#endregion
//#region ../packages/components/build-module/item-group/item-group/hook.mjs
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
function useItemGroup(props) {
	const { className, isBordered = false, isRounded = true, isSeparated = false, role = "list", ...otherProps } = useContextSystem(props, "ItemGroup");
	return {
		isBordered,
		className: clsx(style_module_default["item-group"], {
			[style_module_default["is-bordered"]]: isBordered,
			[style_module_default["is-separated"]]: isSeparated,
			[style_module_default["is-rounded"]]: isRounded
		}, className),
		role,
		isSeparated,
		...otherProps
	};
}
var STYLE_HASH_ATTRIBUTE, style_module_default;
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("fd33c719f5", "._68553e70f1f1cb4e__item-group._55756ee749a180e1__is-bordered{border:1px solid rgba(0,0,0,.1)}._68553e70f1f1cb4e__item-group._4e8285db01e0c630__is-separated>:not(marquee)>*{border-block-end:1px solid rgba(0,0,0,.1)}._68553e70f1f1cb4e__item-group._4e8285db01e0c630__is-separated>:last-of-type>*{border-block-end-color:transparent}._68553e70f1f1cb4e__item-group._58738db58e87759e__is-rounded{border-radius:var(--wpds-border-radius-sm,2px)}._68553e70f1f1cb4e__item-group._58738db58e87759e__is-rounded>:first-of-type>*{border-start-end-radius:var(--wpds-border-radius-sm,2px);border-start-start-radius:var(--wpds-border-radius-sm,2px)}._68553e70f1f1cb4e__item-group._58738db58e87759e__is-rounded>:last-of-type>*{border-end-end-radius:var(--wpds-border-radius-sm,2px);border-end-start-radius:var(--wpds-border-radius-sm,2px)}._4f562a88cd53281b__item-wrapper,.fc4c000709063bb0__item{display:block;width:100%}.fc4c000709063bb0__item{box-sizing:border-box;color:inherit;margin:0}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button{appearance:none;background:none;border:1px solid transparent;cursor:var(--wpds-cursor-control,pointer);font-family:inherit;font-size:13px;text-align:start}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link svg,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button svg{fill:currentColor}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link:hover,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button:hover{color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link:focus,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button:focus{box-shadow:none}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link:focus-visible,.fc4c000709063bb0__item.d204dc5a680d24cf__is-unstyled-button:focus-visible{outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}.fc4c000709063bb0__item.a5802f3508d737a0__is-unstyled-link{text-decoration:none}.fc4c000709063bb0__item._62800b4fe741b26a__is-spaced-around{border-radius:var(--wpds-border-radius-sm,2px)}.fc4c000709063bb0__item.ff341e6676e9138f__is-size-small{padding:4.3px 8px}.fc4c000709063bb0__item._715af0bb13514a58__is-size-medium{padding:7.9px 12px}.fc4c000709063bb0__item.b141618c0c420070__is-size-large{padding:11.5px 16.0008px}");
		style_module_default = {
			"item-group": "_68553e70f1f1cb4e__item-group",
			"is-bordered": "_55756ee749a180e1__is-bordered",
			"is-separated": "_4e8285db01e0c630__is-separated",
			"is-rounded": "_58738db58e87759e__is-rounded",
			"item-wrapper": "_4f562a88cd53281b__item-wrapper",
			"item": "fc4c000709063bb0__item",
			"is-unstyled-button": "d204dc5a680d24cf__is-unstyled-button",
			"is-unstyled-link": "a5802f3508d737a0__is-unstyled-link",
			"is-spaced-around": "_62800b4fe741b26a__is-spaced-around",
			"is-size-small": "ff341e6676e9138f__is-size-small",
			"is-size-medium": "_715af0bb13514a58__is-size-medium",
			"is-size-large": "b141618c0c420070__is-size-large"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/item-group/item-group/component.mjs
function UnconnectedItemGroup(props, forwardedRef) {
	const { isBordered, isSeparated, size: sizeProp, ...otherProps } = useItemGroup(props);
	const { size: contextSize } = useItemGroupContext();
	const spacedAround = !isBordered && !isSeparated;
	const size = sizeProp || contextSize;
	const contextValue = {
		isList: otherProps.role === "list" || otherProps.role === "directory",
		spacedAround,
		size
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemGroupContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$2, {
			...otherProps,
			ref: forwardedRef
		})
	});
}
var import_jsx_runtime, ItemGroup, component_default;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_context_connect();
		init_hook$1();
		init_context();
		init_component$2();
		import_jsx_runtime = require_jsx_runtime();
		ItemGroup = contextConnect(UnconnectedItemGroup, "ItemGroup");
		component_default = ItemGroup;
	})))();
}
//#endregion
export { init_use_debounced_input as a, init_component as i, init_component$1 as n, useDebouncedInput as o, component_default$1 as r, component_default as t };
