import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
//#region ../packages/components/build-module/tools-panel/context.mjs
var noop$1, ToolsPanelContext, useToolsPanelContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		noop$1 = () => void 0;
		ToolsPanelContext = (0, import_react.createContext)({
			menuItems: {
				default: {},
				optional: {}
			},
			hasMenuItems: false,
			isResetting: false,
			shouldRenderPlaceholderItems: false,
			registerPanelItem: noop$1,
			deregisterPanelItem: noop$1,
			flagItemCustomization: noop$1,
			registerResetAllFilter: noop$1,
			deregisterResetAllFilter: noop$1,
			areAllOptionalControlsHidden: true
		});
		ToolsPanelContext.displayName = "ToolsPanelContext";
		useToolsPanelContext = () => (0, import_react.useContext)(ToolsPanelContext);
	})))();
}
//#endregion
//#region ../packages/components/build-module/tools-panel/tools-panel-item/hook.mjs
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
function useToolsPanelItem(props) {
	const { className, defaultShown, hasValue, isShownByDefault = false, label, panelId, resetAllFilter = noop, onDeselect, onSelect, onShownChange, ...otherProps } = useContextSystem(props, "ToolsPanelItem");
	const { panelId: currentPanelId, menuItems, registerPanelItem, deregisterPanelItem, flagItemCustomization, isResetting, shouldRenderPlaceholderItems: shouldRenderPlaceholder, firstDisplayedItem, lastDisplayedItem, __experimentalFirstVisibleItemClass, __experimentalLastVisibleItemClass } = useToolsPanelContext();
	const hasValueCallback = (0, import_react.useCallback)(hasValue, [panelId]);
	const resetAllFilterCallback = useEvent(resetAllFilter);
	const defaultShownRef = (0, import_react.useRef)(defaultShown);
	(0, import_react.useLayoutEffect)(() => {
		defaultShownRef.current = defaultShown;
	});
	const onShownChangeCallback = useEvent(onShownChange);
	const hasMatchingPanel = currentPanelId === panelId || currentPanelId === null;
	(0, import_react.useLayoutEffect)(() => {
		if (!hasMatchingPanel) return;
		const item = {
			defaultShown: defaultShownRef.current,
			hasValue: hasValueCallback,
			isShownByDefault,
			label,
			onShownChange: onShownChangeCallback,
			panelId,
			resetAllFilter: resetAllFilterCallback
		};
		registerPanelItem(item);
		return () => {
			deregisterPanelItem(label, item);
		};
	}, [
		deregisterPanelItem,
		hasMatchingPanel,
		hasValueCallback,
		isShownByDefault,
		label,
		onShownChangeCallback,
		panelId,
		registerPanelItem,
		resetAllFilterCallback
	]);
	const isMenuItemChecked = menuItems?.[isShownByDefault ? "default" : "optional"]?.[label];
	const isRegistered = isMenuItemChecked !== void 0;
	const wasMenuItemCheckedRef = (0, import_react.useRef)(void 0);
	const isValueSet = hasValue();
	(0, import_react.useLayoutEffect)(() => {
		if (!hasMatchingPanel || !isShownByDefault && !isValueSet) return;
		flagItemCustomization(isValueSet, label);
	}, [
		hasMatchingPanel,
		isValueSet,
		label,
		flagItemCustomization,
		isShownByDefault
	]);
	(0, import_react.useEffect)(() => {
		const wasMenuItemChecked = wasMenuItemCheckedRef.current;
		wasMenuItemCheckedRef.current = isMenuItemChecked;
		if (!isRegistered || !(wasMenuItemChecked !== void 0) || isResetting || !hasMatchingPanel) return;
		if (isMenuItemChecked && !isValueSet && !wasMenuItemChecked) onSelect?.();
		if (!isMenuItemChecked && isValueSet && wasMenuItemChecked) onDeselect?.();
	}, [
		hasMatchingPanel,
		isMenuItemChecked,
		isRegistered,
		isResetting,
		isValueSet,
		onSelect,
		onDeselect
	]);
	const isShown = isShownByDefault ? isRegistered : isMenuItemChecked;
	const shouldApplyPlaceholderStyles = shouldRenderPlaceholder && !isShown;
	const classes = clsx(style_module_default["tools-panel-item"], shouldApplyPlaceholderStyles && style_module_default["tools-panel-item-placeholder"], !shouldApplyPlaceholderStyles && className, firstDisplayedItem === label && __experimentalFirstVisibleItemClass, lastDisplayedItem === label && __experimentalLastVisibleItemClass);
	return {
		...otherProps,
		isShown,
		shouldRenderPlaceholder,
		className: classes
	};
}
var STYLE_HASH_ATTRIBUTE, style_module_default, noop;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_event();
		init_react();
		init_context();
		init_use_context_system();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("29b739f451", "._62d714739f4dc308__tools-panel{border-top:1px solid #ddd;margin-top:-1px;padding:16px}._40db7f4f897b683d__tools-panel-with-inner-wrapper>div:not(:first-of-type){column-gap:16px;display:grid;grid-column:1/-1;grid-template-columns:repeat(2,minmax(0,1fr));row-gap:16px}._95a15674966f30a3__tools-panel-hidden-inner-wrapper>div:not(:first-of-type){display:none}._322a049b9b7d8674__tools-panel-header{gap:8px;grid-column:1/-1}._322a049b9b7d8674__tools-panel-header .components-dropdown-menu{line-height:0;margin:-4px 0}._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header .components-dropdown-menu__toggle{min-width:24px;padding:0}.b92a382d3b30104d__tools-panel-heading.b92a382d3b30104d__tools-panel-heading{font-size:inherit;line-height:normal;margin:0}._8005d68fffa9db91__tools-panel-item{grid-column:1/-1}._8005d68fffa9db91__tools-panel-item>div,._8005d68fffa9db91__tools-panel-item>fieldset{margin-bottom:0;max-width:100%;padding-bottom:0}._8005d68fffa9db91__tools-panel-item .components-base-control__help,._8005d68fffa9db91__tools-panel-item._8005d68fffa9db91__tools-panel-item .components-base-control,._8005d68fffa9db91__tools-panel-item._8005d68fffa9db91__tools-panel-item .components-base-control .components-base-control__field:last-child{margin-bottom:0}._4f55e1a6e373746e__tools-panel-item-placeholder{display:none}.d40032517bff9e12__dropdown-menu{min-width:200px}.f135b96aa96ca6bb__reset-label{color:var(--wp-components-color-accent-darker-10,var(--wp-admin-theme-color-darker-10,#2145e6));font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;margin-inline-start:12px;text-transform:uppercase}._69b138dfa5570d9c__default-controls-item{color:#1e1e1e}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true]{color:#757575;opacity:1}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true]:hover{color:#757575}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true] .f135b96aa96ca6bb__reset-label{opacity:.3}");
		style_module_default = {
			"tools-panel": "_62d714739f4dc308__tools-panel",
			"tools-panel-with-inner-wrapper": "_40db7f4f897b683d__tools-panel-with-inner-wrapper",
			"tools-panel-hidden-inner-wrapper": "_95a15674966f30a3__tools-panel-hidden-inner-wrapper",
			"tools-panel-header": "_322a049b9b7d8674__tools-panel-header",
			"tools-panel-heading": "b92a382d3b30104d__tools-panel-heading",
			"tools-panel-item": "_8005d68fffa9db91__tools-panel-item",
			"tools-panel-item-placeholder": "_4f55e1a6e373746e__tools-panel-item-placeholder",
			"dropdown-menu": "d40032517bff9e12__dropdown-menu",
			"reset-label": "f135b96aa96ca6bb__reset-label",
			"default-controls-item": "_69b138dfa5570d9c__default-controls-item"
		};
		noop = () => {};
	})))();
}
//#endregion
//#region ../packages/components/build-module/tools-panel/tools-panel-item/component.mjs
var import_jsx_runtime, UnconnectedToolsPanelItem, ToolsPanelItem, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_hook();
		init_component$1();
		init_context_connect();
		import_jsx_runtime = require_jsx_runtime();
		UnconnectedToolsPanelItem = (props, forwardedRef) => {
			const { children, isShown, shouldRenderPlaceholder, ...toolsPanelItemProps } = useToolsPanelItem(props);
			if (!isShown) return shouldRenderPlaceholder ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
				...toolsPanelItemProps,
				ref: forwardedRef
			}) : null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
				...toolsPanelItemProps,
				ref: forwardedRef,
				children
			});
		};
		ToolsPanelItem = contextConnect(UnconnectedToolsPanelItem, "ToolsPanelItem");
		component_default = ToolsPanelItem;
	})))();
}
//#endregion
export { useToolsPanelContext as a, init_context as i, init_component as n, ToolsPanelContext as r, component_default as t };
