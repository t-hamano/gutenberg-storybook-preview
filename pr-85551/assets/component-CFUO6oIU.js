import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { t as check_default } from "./check-BK5allCs.js";
import { n as more_vertical_default } from "./more-vertical-CuarrvSu.js";
import { n as plus_default } from "./plus-Dg5_68lB.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-4MMWHyS1.js";
import { n as init_component$2, t as component_default$2 } from "./component-CbGAmvwd.js";
import { n as init_component$3, t as component_default$3 } from "./component-DbQ3d6xQ.js";
import { n as init_component$4, t as component_default$4 } from "./component-DUen845y.js";
import { n as init_dropdown_menu, t as dropdown_menu_default } from "./dropdown-menu-ztx4eNXW.js";
import { i as menu_group_default, n as menu_item_default, r as init_menu_group, t as init_menu_item } from "./menu-item-Csg8JdPi.js";
import { a as useToolsPanelContext, i as init_context, r as ToolsPanelContext } from "./component-GkibAnnA.js";
import { r as init_build_module$2 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/build-module/tools-panel/tools-panel-header/hook.mjs
function getRuntime$2() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$2(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$2(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$2}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$2) === hash) return true;
	return false;
}
function injectStyle$2(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$2();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$2(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$2, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$2(targetDocument) {
	const runtime = getRuntime$2();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$2(targetDocument, hash, css);
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
function registerStyle$2(hash, css) {
	const runtime = getRuntime$2();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$2(targetDocument, hash, css);
}
function useToolsPanelHeader(props) {
	const { className, headingLevel = 2, ...otherProps } = useContextSystem(props, "ToolsPanelHeader");
	const { menuItems, hasMenuItems, areAllOptionalControlsHidden } = useToolsPanelContext();
	return {
		...otherProps,
		areAllOptionalControlsHidden,
		defaultControlsItemClassName: style_module_default$2["default-controls-item"],
		dropdownMenuClassName: style_module_default$2["dropdown-menu"],
		hasMenuItems,
		headingClassName: style_module_default$2["tools-panel-heading"],
		headingLevel,
		menuItems,
		className: clsx(style_module_default$2["tools-panel-header"], className)
	};
}
var STYLE_HASH_ATTRIBUTE$2, style_module_default$2;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_context();
		init_use_context_system();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("8908ba1b9d", "._62d714739f4dc308__tools-panel{border-top:1px solid #ddd;margin-top:-1px;padding:16px}._40db7f4f897b683d__tools-panel-with-inner-wrapper>div:not(:first-of-type){column-gap:var(--wpds-dimension-gap-lg,16px);display:grid;grid-column:1/-1;grid-template-columns:repeat(2,minmax(0,1fr));row-gap:var(--wpds-dimension-gap-lg,16px)}._95a15674966f30a3__tools-panel-hidden-inner-wrapper>div:not(:first-of-type){display:none}._322a049b9b7d8674__tools-panel-header{gap:8px;grid-column:1/-1}._322a049b9b7d8674__tools-panel-header .components-dropdown-menu{line-height:0;margin:-4px 0}._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header .components-dropdown-menu__toggle{min-width:24px;padding:0}.b92a382d3b30104d__tools-panel-heading.b92a382d3b30104d__tools-panel-heading{font-size:inherit;line-height:normal;margin:0}._8005d68fffa9db91__tools-panel-item{grid-column:1/-1}._8005d68fffa9db91__tools-panel-item>div,._8005d68fffa9db91__tools-panel-item>fieldset{margin-bottom:0;max-width:100%;padding-bottom:0}._8005d68fffa9db91__tools-panel-item .components-base-control__help,._8005d68fffa9db91__tools-panel-item._8005d68fffa9db91__tools-panel-item .components-base-control,._8005d68fffa9db91__tools-panel-item._8005d68fffa9db91__tools-panel-item .components-base-control .components-base-control__field:last-child{margin-bottom:0}._4f55e1a6e373746e__tools-panel-item-placeholder{display:none}.d40032517bff9e12__dropdown-menu{min-width:200px}.f135b96aa96ca6bb__reset-label{color:var(--wp-components-color-accent-darker-10,var(--wp-admin-theme-color-darker-10,#2145e6));font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;margin-inline-start:12px;text-transform:uppercase}._69b138dfa5570d9c__default-controls-item{color:#1e1e1e}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true]{color:#757575;opacity:1}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true]:hover{color:#757575}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true] .f135b96aa96ca6bb__reset-label{opacity:.3}");
		style_module_default$2 = {
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
	})))();
}
//#endregion
//#region ../packages/components/build-module/tools-panel/tools-panel-header/component.mjs
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
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, DefaultControlsGroup, OptionalControlsGroup, ToolsPanelHeader, component_default$1;
function init_component() {
	return (init_component = __esmMin((() => {
		init_build_module$1();
		init_build_module$2();
		init_build_module();
		init_dropdown_menu();
		init_menu_group();
		init_menu_item();
		init_component$2();
		init_component$3();
		init_hook();
		init_context_connect();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("8908ba1b9d", "._62d714739f4dc308__tools-panel{border-top:1px solid #ddd;margin-top:-1px;padding:16px}._40db7f4f897b683d__tools-panel-with-inner-wrapper>div:not(:first-of-type){column-gap:var(--wpds-dimension-gap-lg,16px);display:grid;grid-column:1/-1;grid-template-columns:repeat(2,minmax(0,1fr));row-gap:var(--wpds-dimension-gap-lg,16px)}._95a15674966f30a3__tools-panel-hidden-inner-wrapper>div:not(:first-of-type){display:none}._322a049b9b7d8674__tools-panel-header{gap:8px;grid-column:1/-1}._322a049b9b7d8674__tools-panel-header .components-dropdown-menu{line-height:0;margin:-4px 0}._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header .components-dropdown-menu__toggle{min-width:24px;padding:0}.b92a382d3b30104d__tools-panel-heading.b92a382d3b30104d__tools-panel-heading{font-size:inherit;line-height:normal;margin:0}._8005d68fffa9db91__tools-panel-item{grid-column:1/-1}._8005d68fffa9db91__tools-panel-item>div,._8005d68fffa9db91__tools-panel-item>fieldset{margin-bottom:0;max-width:100%;padding-bottom:0}._8005d68fffa9db91__tools-panel-item .components-base-control__help,._8005d68fffa9db91__tools-panel-item._8005d68fffa9db91__tools-panel-item .components-base-control,._8005d68fffa9db91__tools-panel-item._8005d68fffa9db91__tools-panel-item .components-base-control .components-base-control__field:last-child{margin-bottom:0}._4f55e1a6e373746e__tools-panel-item-placeholder{display:none}.d40032517bff9e12__dropdown-menu{min-width:200px}.f135b96aa96ca6bb__reset-label{color:var(--wp-components-color-accent-darker-10,var(--wp-admin-theme-color-darker-10,#2145e6));font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;margin-inline-start:12px;text-transform:uppercase}._69b138dfa5570d9c__default-controls-item{color:#1e1e1e}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true]{color:#757575;opacity:1}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true]:hover{color:#757575}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true] .f135b96aa96ca6bb__reset-label{opacity:.3}");
		style_module_default$1 = {
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
		DefaultControlsGroup = ({ itemClassName, items, toggleItem }) => {
			if (!items.length) return null;
			const resetSuffix = /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
				"aria-hidden": true,
				className: style_module_default$1["reset-label"],
				children: __("Reset")
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(import_jsx_runtime$1.Fragment, { children: items.map(([label, hasValue]) => {
				if (hasValue) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(menu_item_default, {
					className: itemClassName,
					role: "menuitem",
					label: sprintf(__("%s, reset to default"), label),
					onClick: () => {
						toggleItem(label);
						speak(sprintf(__("%s reset to default"), label), "assertive");
					},
					suffix: resetSuffix,
					children: label
				}, label);
				return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(menu_item_default, {
					icon: check_default,
					className: itemClassName,
					role: "menuitemcheckbox",
					isSelected: true,
					"aria-disabled": true,
					children: label
				}, label);
			}) });
		};
		OptionalControlsGroup = ({ items, toggleItem }) => {
			if (!items.length) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(import_jsx_runtime$1.Fragment, { children: items.map(([label, isSelected]) => {
				const itemLabel = isSelected ? sprintf(__("%s, hide and reset"), label) : sprintf(_x("%s, show", "input control"), label);
				return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(menu_item_default, {
					icon: isSelected ? check_default : null,
					isSelected,
					label: itemLabel,
					onClick: () => {
						if (isSelected) speak(sprintf(__("%s hidden and reset to default"), label), "assertive");
						else speak(sprintf(__("%s is now visible"), label), "assertive");
						toggleItem(label);
					},
					role: "menuitemcheckbox",
					children: label
				}, label);
			}) });
		};
		ToolsPanelHeader = (props, forwardedRef) => {
			const { areAllOptionalControlsHidden, defaultControlsItemClassName, dropdownMenuClassName, hasMenuItems, headingClassName, headingLevel = 2, label: labelText, menuItems, resetAll, toggleItem, dropdownMenuProps, ...headerProps } = useToolsPanelHeader(props);
			if (!labelText) return null;
			const defaultItems = Object.entries(menuItems?.default || {});
			const optionalItems = Object.entries(menuItems?.optional || {});
			const dropDownMenuIcon = areAllOptionalControlsHidden ? plus_default : more_vertical_default;
			const dropDownMenuLabelText = sprintf(_x("%s options", "Button label to reveal tool panel options"), labelText);
			const dropdownMenuDescriptionText = areAllOptionalControlsHidden ? __("All options are currently hidden") : void 0;
			const canResetAll = [...defaultItems, ...optionalItems].some(([, isSelected]) => isSelected);
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(component_default$2, {
				...headerProps,
				ref: forwardedRef,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$3, {
					level: headingLevel,
					className: headingClassName,
					children: labelText
				}), hasMenuItems && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(dropdown_menu_default, {
					...dropdownMenuProps,
					icon: dropDownMenuIcon,
					label: dropDownMenuLabelText,
					menuProps: { className: dropdownMenuClassName },
					toggleProps: {
						size: "small",
						description: dropdownMenuDescriptionText
					},
					children: () => /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(import_jsx_runtime$1.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(menu_group_default, {
						label: labelText,
						children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DefaultControlsGroup, {
							items: defaultItems,
							toggleItem,
							itemClassName: defaultControlsItemClassName
						}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(OptionalControlsGroup, {
							items: optionalItems,
							toggleItem
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(menu_group_default, { children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(menu_item_default, {
						"aria-disabled": !canResetAll,
						variant: "tertiary",
						onClick: () => {
							if (canResetAll) {
								resetAll();
								speak(__("All options reset"), "assertive");
							}
						},
						children: __("Reset all")
					}) })] })
				})]
			});
		};
		component_default$1 = contextConnect(ToolsPanelHeader, "ToolsPanelHeader");
	})))();
}
//#endregion
//#region ../packages/components/build-module/tools-panel/tools-panel/hook.mjs
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
function emptyState() {
	return {
		panelItems: [],
		menuItemOrder: [],
		menuItemValues: {}
	};
}
function panelItemsReducer(panelItems, action) {
	switch (action.type) {
		case "REGISTER_PANEL": {
			const existingIndex = panelItems.findIndex((item) => item.label === action.item.label);
			const newItems = [...panelItems];
			if (existingIndex !== -1) newItems.splice(existingIndex, 1);
			newItems.push(action.item);
			return newItems;
		}
		case "UNREGISTER_PANEL": {
			const index = panelItems.findIndex((item) => item.label === action.label);
			if (index === -1) return panelItems;
			if (action.item && panelItems[index] !== action.item) return panelItems;
			const newItems = [...panelItems];
			newItems.splice(index, 1);
			return newItems;
		}
		default: return panelItems;
	}
}
function menuItemOrderReducer(menuItemOrder, action) {
	switch (action.type) {
		case "REGISTER_PANEL":
			if (menuItemOrder.includes(action.item.label)) return menuItemOrder;
			return [...menuItemOrder, action.item.label];
		default: return menuItemOrder;
	}
}
function menuItemValuesReducer(state, action) {
	const values = state.menuItemValues;
	switch (action.type) {
		case "REGISTER_PANEL": {
			if (!values.hasOwnProperty(action.item.label)) return values;
			const { [action.item.label]: unusedValue, ...rest } = values;
			return rest;
		}
		case "UPDATE_VALUE":
			if (values[action.label] === action.value) return values;
			return {
				...values,
				[action.label]: action.value
			};
		case "TOGGLE_VALUE": {
			const item = state.panelItems.find(({ label }) => label === action.label);
			if (!item) return values;
			const current = values[action.label] ?? getSeedValue(item);
			return {
				...values,
				[action.label]: !current
			};
		}
		case "RESET_ALL": {
			const hidden = state.panelItems.filter((item) => !item.isShownByDefault && values[item.label] !== false);
			if (!hidden.length) return values;
			const next = { ...values };
			hidden.forEach(({ label }) => {
				next[label] = false;
			});
			return next;
		}
		default: return values;
	}
}
function panelReducer(state, action) {
	const panelItems = panelItemsReducer(state.panelItems, action);
	const menuItemOrder = menuItemOrderReducer(state.menuItemOrder, action);
	const menuItemValues = menuItemValuesReducer({
		...state,
		panelItems
	}, action);
	if (panelItems === state.panelItems && menuItemOrder === state.menuItemOrder && menuItemValues === state.menuItemValues) return state;
	return {
		panelItems,
		menuItemOrder,
		menuItemValues
	};
}
function resetAllFiltersReducer(filters, action) {
	switch (action.type) {
		case "REGISTER": return [...filters, action.filter];
		case "UNREGISTER": return filters.filter((f) => f !== action.filter);
		default: return filters;
	}
}
function useToolsPanel(props) {
	const { className, headingLevel = 2, resetAll, panelId, hasInnerWrapper = false, shouldRenderPlaceholderItems = false, __experimentalFirstVisibleItemClass, __experimentalLastVisibleItemClass, ...otherProps } = useContextSystem(props, "ToolsPanel");
	const [isResetting, setIsResetting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isResetting) setIsResetting(false);
	}, [isResetting]);
	const [{ panelItems, menuItemOrder, menuItemValues }, panelDispatch] = (0, import_react.useReducer)(panelReducer, void 0, emptyState);
	const [externalResetAllFilters, dispatchResetAllFilters] = (0, import_react.useReducer)(resetAllFiltersReducer, []);
	const registerPanelItem = (0, import_react.useCallback)((item) => {
		panelDispatch({
			type: "REGISTER_PANEL",
			item
		});
	}, []);
	const deregisterPanelItem = (0, import_react.useCallback)((label, item) => {
		panelDispatch({
			type: "UNREGISTER_PANEL",
			label,
			item
		});
	}, []);
	const registerResetAllFilter = (0, import_react.useCallback)((filter) => {
		dispatchResetAllFilters({
			type: "REGISTER",
			filter
		});
	}, []);
	const deregisterResetAllFilter = (0, import_react.useCallback)((filter) => {
		dispatchResetAllFilters({
			type: "UNREGISTER",
			filter
		});
	}, []);
	const flagItemCustomization = (0, import_react.useCallback)((value, label) => {
		panelDispatch({
			type: "UPDATE_VALUE",
			label,
			value
		});
	}, []);
	const menuItems = (0, import_react.useMemo)(() => {
		const result = {
			default: {},
			optional: {}
		};
		const byLabel = new Map(panelItems.map((item) => [item.label, item]));
		menuItemOrder.forEach((label) => {
			const item = byLabel.get(label);
			if (!item) return;
			result[getMenuGroup(item)][label] = menuItemValues[label] ?? getSeedValue(item);
		});
		return result;
	}, [
		panelItems,
		menuItemOrder,
		menuItemValues
	]);
	const areAllOptionalControlsHidden = (0, import_react.useMemo)(() => {
		return isMenuItemTypeEmpty(menuItems.default) && !isMenuItemTypeEmpty(menuItems.optional) && Object.values(menuItems.optional).every((isSelected) => !isSelected);
	}, [menuItems]);
	const classes = clsx(style_module_default["tools-panel"], hasInnerWrapper && style_module_default["tools-panel-with-inner-wrapper"], areAllOptionalControlsHidden && style_module_default["tools-panel-hidden-inner-wrapper"], className);
	const toggleItem = (0, import_react.useCallback)((label) => {
		const currentItem = panelItems.find((item) => item.label === label);
		if (!currentItem) return;
		panelDispatch({
			type: "TOGGLE_VALUE",
			label
		});
		if (currentItem.isShownByDefault) return;
		currentItem.onShownChange?.(!menuItems.optional[label]);
	}, [menuItems, panelItems]);
	const resetAllFilters = (0, import_react.useMemo)(() => {
		return [...panelItems.map((item) => item.resetAllFilter).filter((filter) => !!filter), ...externalResetAllFilters];
	}, [panelItems, externalResetAllFilters]);
	const resetAllItems = (0, import_react.useCallback)(() => {
		if (typeof resetAll === "function") {
			setIsResetting(true);
			resetAll(resetAllFilters);
		}
		panelDispatch({ type: "RESET_ALL" });
	}, [resetAllFilters, resetAll]);
	const getFirstVisibleItemLabel = (items) => {
		const optionalItems = menuItems.optional || {};
		return items.find((item) => item.isShownByDefault || optionalItems[item.label])?.label;
	};
	const firstDisplayedItem = getFirstVisibleItemLabel(panelItems);
	const lastDisplayedItem = getFirstVisibleItemLabel([...panelItems].reverse());
	const hasMenuItems = panelItems.length > 0;
	const panelContext = (0, import_react.useMemo)(() => ({
		areAllOptionalControlsHidden,
		deregisterPanelItem,
		deregisterResetAllFilter,
		firstDisplayedItem,
		flagItemCustomization,
		hasMenuItems,
		isResetting,
		lastDisplayedItem,
		menuItems,
		panelId,
		registerPanelItem,
		registerResetAllFilter,
		shouldRenderPlaceholderItems,
		__experimentalFirstVisibleItemClass,
		__experimentalLastVisibleItemClass
	}), [
		areAllOptionalControlsHidden,
		deregisterPanelItem,
		deregisterResetAllFilter,
		firstDisplayedItem,
		flagItemCustomization,
		isResetting,
		lastDisplayedItem,
		menuItems,
		panelId,
		hasMenuItems,
		registerResetAllFilter,
		registerPanelItem,
		shouldRenderPlaceholderItems,
		__experimentalFirstVisibleItemClass,
		__experimentalLastVisibleItemClass
	]);
	return {
		...otherProps,
		headingLevel,
		panelContext,
		resetAllItems,
		toggleItem,
		className: classes
	};
}
var STYLE_HASH_ATTRIBUTE, style_module_default, getSeedValue, getMenuGroup, isMenuItemTypeEmpty;
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_context_system();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("8908ba1b9d", "._62d714739f4dc308__tools-panel{border-top:1px solid #ddd;margin-top:-1px;padding:16px}._40db7f4f897b683d__tools-panel-with-inner-wrapper>div:not(:first-of-type){column-gap:var(--wpds-dimension-gap-lg,16px);display:grid;grid-column:1/-1;grid-template-columns:repeat(2,minmax(0,1fr));row-gap:var(--wpds-dimension-gap-lg,16px)}._95a15674966f30a3__tools-panel-hidden-inner-wrapper>div:not(:first-of-type){display:none}._322a049b9b7d8674__tools-panel-header{gap:8px;grid-column:1/-1}._322a049b9b7d8674__tools-panel-header .components-dropdown-menu{line-height:0;margin:-4px 0}._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header._322a049b9b7d8674__tools-panel-header .components-dropdown-menu__toggle{min-width:24px;padding:0}.b92a382d3b30104d__tools-panel-heading.b92a382d3b30104d__tools-panel-heading{font-size:inherit;line-height:normal;margin:0}._8005d68fffa9db91__tools-panel-item{grid-column:1/-1}._8005d68fffa9db91__tools-panel-item>div,._8005d68fffa9db91__tools-panel-item>fieldset{margin-bottom:0;max-width:100%;padding-bottom:0}._8005d68fffa9db91__tools-panel-item .components-base-control__help,._8005d68fffa9db91__tools-panel-item._8005d68fffa9db91__tools-panel-item .components-base-control,._8005d68fffa9db91__tools-panel-item._8005d68fffa9db91__tools-panel-item .components-base-control .components-base-control__field:last-child{margin-bottom:0}._4f55e1a6e373746e__tools-panel-item-placeholder{display:none}.d40032517bff9e12__dropdown-menu{min-width:200px}.f135b96aa96ca6bb__reset-label{color:var(--wp-components-color-accent-darker-10,var(--wp-admin-theme-color-darker-10,#2145e6));font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);line-height:1.4;margin-inline-start:12px;text-transform:uppercase}._69b138dfa5570d9c__default-controls-item{color:#1e1e1e}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true]{color:#757575;opacity:1}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true]:hover{color:#757575}._69b138dfa5570d9c__default-controls-item._69b138dfa5570d9c__default-controls-item[aria-disabled=true] .f135b96aa96ca6bb__reset-label{opacity:.3}");
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
		getSeedValue = (item) => item.hasValue() || !item.isShownByDefault && !!item.defaultShown;
		getMenuGroup = (item) => item.isShownByDefault ? "default" : "optional";
		isMenuItemTypeEmpty = (obj) => Object.keys(obj).length === 0;
	})))();
}
//#endregion
//#region ../packages/components/build-module/tools-panel/tools-panel/component.mjs
var import_jsx_runtime, UnconnectedToolsPanel, ToolsPanel, component_default;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_component();
		init_context();
		init_hook$1();
		init_component$4();
		init_context_connect();
		import_jsx_runtime = require_jsx_runtime();
		UnconnectedToolsPanel = (props, forwardedRef) => {
			const { children, label, panelContext, resetAllItems, toggleItem, headingLevel, dropdownMenuProps, ...toolsPanelProps } = useToolsPanel(props);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$4, {
				...toolsPanelProps,
				columns: 2,
				gap: 4,
				columnGap: "var(--wpds-dimension-gap-lg, 16px)",
				rowGap: "var(--wpds-dimension-gap-lg, 16px)",
				templateColumns: "repeat( 2, minmax(0, 1fr) )",
				ref: forwardedRef,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolsPanelContext.Provider, {
					value: panelContext,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
						label,
						resetAll: resetAllItems,
						toggleItem,
						headingLevel,
						dropdownMenuProps
					}), children]
				})
			});
		};
		ToolsPanel = contextConnect(UnconnectedToolsPanel, "ToolsPanel");
		component_default = ToolsPanel;
	})))();
}
//#endregion
export { init_component$1 as n, component_default as t };
