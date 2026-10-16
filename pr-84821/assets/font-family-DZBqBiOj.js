import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-eN0icMPG.js";
import { a as SelectLabel, c as init_select_item_check, d as Select, f as init_select, i as init_select_popover, l as SelectItem, n as useSelectStore, o as init_select_label, r as SelectPopover, s as SelectItemCheck, t as init_select_store, u as init_select_item } from "./select-store-CWKY3DZ1.js";
import { n as input_base_default, t as init_input_base } from "./input-base-BibkJaYJ.js";
import { n as init_component, t as component_default } from "./component-6Aui1e4Q.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as init_chevron_down, t as chevron_down_default } from "./chevron-down-CvW7qBxj.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DBuseju1.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/build-module/custom-select-control-v2/custom-select.mjs
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
function defaultRenderSelectedValue(value) {
	if (Array.isArray(value) ? value.length === 0 : value === void 0 || value === null) return __("Select an item");
	if (Array.isArray(value)) return value.length === 1 ? value[0] : sprintf(_n("%d item selected", "%d items selected", value.length), value.length);
	return value;
}
function CustomSelect(props) {
	const { children, hideLabelFromVision = false, label, size, store, className, isLegacy = false, ...restProps } = props;
	const onSelectPopoverKeyDown = (0, import_react.useCallback)((e) => {
		if (isLegacy) e.stopPropagation();
	}, [isLegacy]);
	const contextValue = (0, import_react.useMemo)(() => ({
		store,
		size
	}), [store, size]);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SelectLabel, {
			store,
			render: hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default, {}) : /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(base_control_default.VisualLabel, { as: "div" }),
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(input_base_default, {
			size,
			suffix: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(chevron_down_default, {}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(CustomSelectButton, {
				...restProps,
				size,
				store,
				showOnKeyDown: !isLegacy
			}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SelectPopover, {
				className: style_module_default$2.popover,
				gutter: 12,
				store,
				sameWidth: true,
				slide: false,
				onKeyDown: onSelectPopoverKeyDown,
				flip: !isLegacy,
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(CustomSelectContext.Provider, {
					value: contextValue,
					children
				})
			})]
		})]
	});
}
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$2, style_module_default$2, CustomSelectContext, CustomSelectButton, custom_select_default;
function init_custom_select() {
	return (init_custom_select = __esmMin((() => {
		init_dist(), init_select(), init_select_label(), init_select_popover();
		init_clsx();
		init_react();
		init_build_module();
		init_component();
		init_input_base();
		init_chevron_down();
		init_base_control();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("e1ee2db2ce", "._65921064f2199130__select{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:none;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));cursor:var(--wpds-cursor-control,pointer);display:block;font-family:inherit;font-size:16px;text-align:start;user-select:none;width:100%}._65921064f2199130__select[data-focus-visible]{outline:none}._65921064f2199130__select:where(:not(._70396ff85a9ad697__has-custom-render)){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width:600px){._65921064f2199130__select{font-size:13px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small){font-size:11px}}._65921064f2199130__select{padding-inline-end:30px;padding-inline-start:12px}._65921064f2199130__select:where(._70396ff85a9ad697__has-custom-render){min-height:40px}._65921064f2199130__select:where(:not(._70396ff85a9ad697__has-custom-render)){height:40px}._4a13aa3b845e2cdc__item{padding-inline-end:6px;padding-inline-start:12px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact){padding-inline-end:26px;padding-inline-start:8px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact):where(._70396ff85a9ad697__has-custom-render){min-height:32px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact):where(:not(._70396ff85a9ad697__has-custom-render)){height:32px}._4a13aa3b845e2cdc__item:where(.ff3170049ef4d5a0__is-compact){padding-inline-end:2px;padding-inline-start:8px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small){padding-inline-end:26px;padding-inline-start:8px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small):where(._70396ff85a9ad697__has-custom-render){min-height:24px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small):where(:not(._70396ff85a9ad697__has-custom-render)){height:24px}._4a13aa3b845e2cdc__item:where(.f8e7d2f8a9314c12__is-small){padding-inline-end:2px;padding-inline-start:8px}@keyframes bb4771abfe83a378__slide-down{0%{transform:translateY(-4px)}to{transform:translateY(0)}}@keyframes _1f615da2b1b6b019__fade-in{0%{opacity:0}to{opacity:1}}._7a737c7eae0d4df3__popover{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:1px solid var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));border-radius:2px;box-shadow:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);display:flex;flex-direction:column;max-height:min(var(--popover-available-height,400px),400px);min-width:min-content;overflow:auto;overscroll-behavior:contain;z-index:1000000}@media not (prefers-reduced-motion){._7a737c7eae0d4df3__popover[data-open]{animation-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);animation-name:bb4771abfe83a378__slide-down,_1f615da2b1b6b019__fade-in;animation-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}}._7a737c7eae0d4df3__popover[data-focus-visible]{outline:none}._4a13aa3b845e2cdc__item{align-items:center;cursor:default;display:flex;font-size:13px;justify-content:space-between;line-height:28px;padding-block:8px;scroll-margin:4px;user-select:none}._4a13aa3b845e2cdc__item[aria-disabled=true]{cursor:not-allowed}._4a13aa3b845e2cdc__item[data-active-item]{background-color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb))}.b8532ac5ba4b4b5a__selected-hint-wrapper{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.d2fbdd2bbc399667__selected-hint{color:var(--wp-components-color-gray-600,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));margin-inline-start:8px}.c8a951388c39ef87__hint-wrapper{align-items:center;column-gap:16px;display:flex;flex:1;flex-wrap:wrap;justify-content:space-between}.b5762df691483522__item-hint{color:var(--wp-components-color-gray-600,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));line-height:1.4;margin-block:4px;padding-inline-end:4px;text-align:initial}._6cc0b54b5c3511eb__item-check{fill:currentColor;align-items:center;align-self:start;display:flex;font-size:0;margin-block-start:2px;margin-inline-start:8px}._6cc0b54b5c3511eb__item-check:not(:empty),.c8a951388c39ef87__hint-wrapper~._6cc0b54b5c3511eb__item-check{font-size:24px}");
		style_module_default$2 = {
			"select": "_65921064f2199130__select",
			"has-custom-render": "_70396ff85a9ad697__has-custom-render",
			"is-small": "f8e7d2f8a9314c12__is-small",
			"item": "_4a13aa3b845e2cdc__item",
			"is-compact": "ff3170049ef4d5a0__is-compact",
			"popover": "_7a737c7eae0d4df3__popover",
			"slide-down": "bb4771abfe83a378__slide-down",
			"fade-in": "_1f615da2b1b6b019__fade-in",
			"selected-hint-wrapper": "b8532ac5ba4b4b5a__selected-hint-wrapper",
			"selected-hint": "d2fbdd2bbc399667__selected-hint",
			"hint-wrapper": "c8a951388c39ef87__hint-wrapper",
			"item-hint": "b5762df691483522__item-hint",
			"item-check": "_6cc0b54b5c3511eb__item-check"
		};
		CustomSelectContext = (0, import_react.createContext)(void 0);
		CustomSelectContext.displayName = "CustomSelectContext";
		CustomSelectButton = ({ renderSelectedValue, size = "default", store, className, ...restProps }) => {
			const { value: currentValue } = useStoreState(store);
			const computedRenderSelectedValue = (0, import_react.useMemo)(() => renderSelectedValue ?? defaultRenderSelectedValue, [renderSelectedValue]);
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Select, {
				...restProps,
				className: clsx(style_module_default$2.select, className, {
					[style_module_default$2["is-compact"]]: size === "compact",
					[style_module_default$2["is-small"]]: size === "small",
					[style_module_default$2["has-custom-render"]]: !!renderSelectedValue
				}),
				store,
				children: computedRenderSelectedValue(currentValue)
			});
		};
		custom_select_default = CustomSelect;
	})))();
}
//#endregion
//#region ../packages/components/build-module/custom-select-control-v2/item.mjs
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
function CustomSelectItem({ children, className, ...props }) {
	const customSelectContext = (0, import_react.useContext)(CustomSelectContext);
	const size = customSelectContext?.size ?? "default";
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(SelectItem, {
		store: customSelectContext?.store,
		...props,
		className: clsx(style_module_default$1.item, className, {
			[style_module_default$1["is-compact"]]: size === "compact",
			[style_module_default$1["is-small"]]: size === "small"
		}),
		children: [children ?? props.value, /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SelectItemCheck, {
			className: style_module_default$1["item-check"],
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(icon_default, { icon: check_default })
		})]
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, item_default;
function init_item() {
	return (init_item = __esmMin((() => {
		init_select_item(), init_select_item_check();
		init_clsx();
		init_react();
		init_build_module$1();
		init_custom_select();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("e1ee2db2ce", "._65921064f2199130__select{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:none;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));cursor:var(--wpds-cursor-control,pointer);display:block;font-family:inherit;font-size:16px;text-align:start;user-select:none;width:100%}._65921064f2199130__select[data-focus-visible]{outline:none}._65921064f2199130__select:where(:not(._70396ff85a9ad697__has-custom-render)){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width:600px){._65921064f2199130__select{font-size:13px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small){font-size:11px}}._65921064f2199130__select{padding-inline-end:30px;padding-inline-start:12px}._65921064f2199130__select:where(._70396ff85a9ad697__has-custom-render){min-height:40px}._65921064f2199130__select:where(:not(._70396ff85a9ad697__has-custom-render)){height:40px}._4a13aa3b845e2cdc__item{padding-inline-end:6px;padding-inline-start:12px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact){padding-inline-end:26px;padding-inline-start:8px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact):where(._70396ff85a9ad697__has-custom-render){min-height:32px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact):where(:not(._70396ff85a9ad697__has-custom-render)){height:32px}._4a13aa3b845e2cdc__item:where(.ff3170049ef4d5a0__is-compact){padding-inline-end:2px;padding-inline-start:8px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small){padding-inline-end:26px;padding-inline-start:8px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small):where(._70396ff85a9ad697__has-custom-render){min-height:24px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small):where(:not(._70396ff85a9ad697__has-custom-render)){height:24px}._4a13aa3b845e2cdc__item:where(.f8e7d2f8a9314c12__is-small){padding-inline-end:2px;padding-inline-start:8px}@keyframes bb4771abfe83a378__slide-down{0%{transform:translateY(-4px)}to{transform:translateY(0)}}@keyframes _1f615da2b1b6b019__fade-in{0%{opacity:0}to{opacity:1}}._7a737c7eae0d4df3__popover{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:1px solid var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));border-radius:2px;box-shadow:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);display:flex;flex-direction:column;max-height:min(var(--popover-available-height,400px),400px);min-width:min-content;overflow:auto;overscroll-behavior:contain;z-index:1000000}@media not (prefers-reduced-motion){._7a737c7eae0d4df3__popover[data-open]{animation-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);animation-name:bb4771abfe83a378__slide-down,_1f615da2b1b6b019__fade-in;animation-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}}._7a737c7eae0d4df3__popover[data-focus-visible]{outline:none}._4a13aa3b845e2cdc__item{align-items:center;cursor:default;display:flex;font-size:13px;justify-content:space-between;line-height:28px;padding-block:8px;scroll-margin:4px;user-select:none}._4a13aa3b845e2cdc__item[aria-disabled=true]{cursor:not-allowed}._4a13aa3b845e2cdc__item[data-active-item]{background-color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb))}.b8532ac5ba4b4b5a__selected-hint-wrapper{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.d2fbdd2bbc399667__selected-hint{color:var(--wp-components-color-gray-600,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));margin-inline-start:8px}.c8a951388c39ef87__hint-wrapper{align-items:center;column-gap:16px;display:flex;flex:1;flex-wrap:wrap;justify-content:space-between}.b5762df691483522__item-hint{color:var(--wp-components-color-gray-600,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));line-height:1.4;margin-block:4px;padding-inline-end:4px;text-align:initial}._6cc0b54b5c3511eb__item-check{fill:currentColor;align-items:center;align-self:start;display:flex;font-size:0;margin-block-start:2px;margin-inline-start:8px}._6cc0b54b5c3511eb__item-check:not(:empty),.c8a951388c39ef87__hint-wrapper~._6cc0b54b5c3511eb__item-check{font-size:24px}");
		style_module_default$1 = {
			"select": "_65921064f2199130__select",
			"has-custom-render": "_70396ff85a9ad697__has-custom-render",
			"is-small": "f8e7d2f8a9314c12__is-small",
			"item": "_4a13aa3b845e2cdc__item",
			"is-compact": "ff3170049ef4d5a0__is-compact",
			"popover": "_7a737c7eae0d4df3__popover",
			"slide-down": "bb4771abfe83a378__slide-down",
			"fade-in": "_1f615da2b1b6b019__fade-in",
			"selected-hint-wrapper": "b8532ac5ba4b4b5a__selected-hint-wrapper",
			"selected-hint": "d2fbdd2bbc399667__selected-hint",
			"hint-wrapper": "c8a951388c39ef87__hint-wrapper",
			"item-hint": "b5762df691483522__item-hint",
			"item-check": "_6cc0b54b5c3511eb__item-check"
		};
		CustomSelectItem.displayName = "CustomSelectControlV2.Item";
		item_default = CustomSelectItem;
	})))();
}
//#endregion
//#region ../packages/components/build-module/custom-select-control/index.mjs
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
function useDeprecatedProps({ __experimentalShowSelectedHint, ...otherProps }) {
	return {
		showSelectedHint: __experimentalShowSelectedHint,
		...otherProps
	};
}
function applyOptionDeprecations({ __experimentalHint, ...rest }) {
	return {
		hint: __experimentalHint,
		...rest
	};
}
function getDescribedBy(currentName, describedBy) {
	if (describedBy) return describedBy;
	return sprintf(__("Currently selected: %s"), currentName);
}
function CustomSelectControl(props) {
	const { __next40pxDefaultSize: _next40pxDefaultSize, describedBy, options, onChange, size = "default", value, className: classNameProp, showSelectedHint = false, ...restProps } = useDeprecatedProps(props);
	const descriptionId = use_instance_id_default(CustomSelectControl, "custom-select-control__description");
	const store = useSelectStore({
		async setValue(nextValue) {
			const nextOption = options.find((item) => item.key === nextValue);
			if (!onChange || !nextOption) return;
			await Promise.resolve();
			const state = store.getState();
			const changeObject = {
				highlightedIndex: state.renderedItems.findIndex((item) => item.value === nextValue),
				inputValue: "",
				isOpen: state.open,
				selectedItem: nextOption,
				type: ""
			};
			onChange(changeObject);
		},
		value: value?.key,
		defaultValue: options[0]?.key
	});
	const children = options.map(applyOptionDeprecations).map(({ name, key, hint, style, className }) => {
		const withHint = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: style_module_default["hint-wrapper"],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: clsx(style_module_default["item-hint"], "components-custom-select-control__item-hint"),
				children: hint
			})]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item_default, {
			value: key,
			children: hint ? withHint : name,
			style,
			className: clsx(className, "components-custom-select-control__item", { "has-hint": hint })
		}, key);
	});
	const currentValue = useStoreState(store, "value");
	const selectedOption = options?.map(applyOptionDeprecations)?.find(({ key }) => currentValue === key) ?? options[0];
	const renderSelectedValue = () => {
		if (!showSelectedHint || !selectedOption.hint) return selectedOption?.name;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: style_module_default["selected-hint-wrapper"],
			children: [selectedOption?.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: clsx(style_module_default["selected-hint"], "components-custom-select-control__hint"),
				children: selectedOption?.hint
			})]
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(custom_select_default, {
		"aria-describedby": descriptionId,
		renderSelectedValue,
		size,
		store,
		className: clsx("components-custom-select-control", classNameProp),
		isLegacy: true,
		...restProps,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		id: descriptionId,
		children: getDescribedBy(selectedOption?.name, describedBy)
	}) })] });
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, custom_select_control_default;
function init_custom_select_control() {
	return (init_custom_select_control = __esmMin((() => {
		init_select_store(), init_dist();
		init_clsx();
		init_use_instance_id();
		init_build_module();
		init_custom_select();
		init_item();
		init_component();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("e1ee2db2ce", "._65921064f2199130__select{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:none;color:var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));cursor:var(--wpds-cursor-control,pointer);display:block;font-family:inherit;font-size:16px;text-align:start;user-select:none;width:100%}._65921064f2199130__select[data-focus-visible]{outline:none}._65921064f2199130__select:where(:not(._70396ff85a9ad697__has-custom-render)){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width:600px){._65921064f2199130__select{font-size:13px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small){font-size:11px}}._65921064f2199130__select{padding-inline-end:30px;padding-inline-start:12px}._65921064f2199130__select:where(._70396ff85a9ad697__has-custom-render){min-height:40px}._65921064f2199130__select:where(:not(._70396ff85a9ad697__has-custom-render)){height:40px}._4a13aa3b845e2cdc__item{padding-inline-end:6px;padding-inline-start:12px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact){padding-inline-end:26px;padding-inline-start:8px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact):where(._70396ff85a9ad697__has-custom-render){min-height:32px}._65921064f2199130__select:where(.ff3170049ef4d5a0__is-compact):where(:not(._70396ff85a9ad697__has-custom-render)){height:32px}._4a13aa3b845e2cdc__item:where(.ff3170049ef4d5a0__is-compact){padding-inline-end:2px;padding-inline-start:8px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small){padding-inline-end:26px;padding-inline-start:8px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small):where(._70396ff85a9ad697__has-custom-render){min-height:24px}._65921064f2199130__select:where(.f8e7d2f8a9314c12__is-small):where(:not(._70396ff85a9ad697__has-custom-render)){height:24px}._4a13aa3b845e2cdc__item:where(.f8e7d2f8a9314c12__is-small){padding-inline-end:2px;padding-inline-start:8px}@keyframes bb4771abfe83a378__slide-down{0%{transform:translateY(-4px)}to{transform:translateY(0)}}@keyframes _1f615da2b1b6b019__fade-in{0%{opacity:0}to{opacity:1}}._7a737c7eae0d4df3__popover{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));border:1px solid var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e));border-radius:2px;box-shadow:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);display:flex;flex-direction:column;max-height:min(var(--popover-available-height,400px),400px);min-width:min-content;overflow:auto;overscroll-behavior:contain;z-index:1000000}@media not (prefers-reduced-motion){._7a737c7eae0d4df3__popover[data-open]{animation-duration:var(--wpds-motion-duration-md,.2s),var(--wpds-motion-duration-sm,.1s);animation-name:bb4771abfe83a378__slide-down,_1f615da2b1b6b019__fade-in;animation-timing-function:var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),linear;will-change:transform,opacity}}._7a737c7eae0d4df3__popover[data-focus-visible]{outline:none}._4a13aa3b845e2cdc__item{align-items:center;cursor:default;display:flex;font-size:13px;justify-content:space-between;line-height:28px;padding-block:8px;scroll-margin:4px;user-select:none}._4a13aa3b845e2cdc__item[aria-disabled=true]{cursor:not-allowed}._4a13aa3b845e2cdc__item[data-active-item]{background-color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb))}.b8532ac5ba4b4b5a__selected-hint-wrapper{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.d2fbdd2bbc399667__selected-hint{color:var(--wp-components-color-gray-600,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));margin-inline-start:8px}.c8a951388c39ef87__hint-wrapper{align-items:center;column-gap:16px;display:flex;flex:1;flex-wrap:wrap;justify-content:space-between}.b5762df691483522__item-hint{color:var(--wp-components-color-gray-600,var(--wpds-color-stroke-interactive-neutral,#8d8d8d));line-height:1.4;margin-block:4px;padding-inline-end:4px;text-align:initial}._6cc0b54b5c3511eb__item-check{fill:currentColor;align-items:center;align-self:start;display:flex;font-size:0;margin-block-start:2px;margin-inline-start:8px}._6cc0b54b5c3511eb__item-check:not(:empty),.c8a951388c39ef87__hint-wrapper~._6cc0b54b5c3511eb__item-check{font-size:24px}");
		style_module_default = {
			"select": "_65921064f2199130__select",
			"has-custom-render": "_70396ff85a9ad697__has-custom-render",
			"is-small": "f8e7d2f8a9314c12__is-small",
			"item": "_4a13aa3b845e2cdc__item",
			"is-compact": "ff3170049ef4d5a0__is-compact",
			"popover": "_7a737c7eae0d4df3__popover",
			"slide-down": "bb4771abfe83a378__slide-down",
			"fade-in": "_1f615da2b1b6b019__fade-in",
			"selected-hint-wrapper": "b8532ac5ba4b4b5a__selected-hint-wrapper",
			"selected-hint": "d2fbdd2bbc399667__selected-hint",
			"hint-wrapper": "c8a951388c39ef87__hint-wrapper",
			"item-hint": "b5762df691483522__item-hint",
			"item-check": "_6cc0b54b5c3511eb__item-check"
		};
		custom_select_control_default = CustomSelectControl;
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/font-family/index.jsx
function FontFamilyControl({ __next40pxDefaultSize: _next40pxDefaultSize, value = "", onChange, fontFamilies, className, ...props }) {
	const [blockLevelFontFamilies] = useSettings("typography.fontFamilies");
	if (!fontFamilies) fontFamilies = blockLevelFontFamilies;
	if (!fontFamilies || fontFamilies.length === 0) return null;
	const options = [{
		key: "",
		name: __("Default")
	}, ...fontFamilies.map(({ fontFamily, name }) => ({
		key: fontFamily,
		name: name || fontFamily,
		style: { fontFamily }
	}))];
	const selectedValue = options.find((option) => option.key === value) ?? "";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(custom_select_control_default, {
		label: __("Font"),
		value: selectedValue,
		onChange: ({ selectedItem }) => onChange(selectedItem.key),
		options,
		className: clsx("block-editor-font-family-control", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_font_family() {
	return (init_font_family = __esmMin((() => {
		init_clsx();
		init_custom_select_control();
		init_build_module();
		init_use_settings();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/font-family/index.jsx";
		FontFamilyControl.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "FontFamilyControl",
			"props": { "value": {
				"defaultValue": {
					"value": "''",
					"computed": false
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
export { init_custom_select_control as i, init_font_family as n, custom_select_control_default as r, FontFamilyControl as t };
