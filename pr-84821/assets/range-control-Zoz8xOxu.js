import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as use_controlled_state_default, t as init_use_controlled_state } from "./use-controlled-state-BMghEqir.js";
import { i as init_colors_values, r as COLORS } from "./config-values-0x5e6kXt.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CFOx0tK5.js";
import { n as space, t as init_space } from "./space-CmH0DdCr.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as init_icon, t as icon_default } from "./icon-BIO3gLKi.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as number_control_default, r as clamp, t as init_number_control } from "./number-control-DH-M3uwi.js";
//#region ../packages/components/build-module/range-control/utils.mjs
function floatClamp(value, min, max) {
	if (typeof value !== "number") return null;
	return parseFloat(`${clamp(value, min, max)}`);
}
function useControlledRangeValue(settings) {
	const { min, max, value: valueProp, initial } = settings;
	const [state, setInternalState] = use_controlled_state_default(floatClamp(valueProp, min, max), {
		initial: floatClamp(initial ?? null, min, max),
		fallback: null
	});
	return [state, (0, import_react$1.useCallback)((nextValue) => {
		if (nextValue === null) setInternalState(null);
		else setInternalState(floatClamp(nextValue, min, max));
	}, [
		min,
		max,
		setInternalState
	])];
}
function getCSSWideKeyword(value) {
	if (typeof value !== "string") return;
	const keyword = value.replace(/\\([a-f\d]{1,6})[ \t\n\r\f]?|\\([^\n\r\f])|\/\*[\s\S]*?\*\//gi, (_match, hex, character) => {
		if (hex) {
			const codePoint = parseInt(hex, 16);
			return String.fromCodePoint(codePoint > 0 && codePoint <= 1114111 ? codePoint : 65533);
		}
		return character ?? "";
	}).replace(/^[ \t\n\r\f]+|[ \t\n\r\f]+$/g, "").toLowerCase();
	return CSS_WIDE_KEYWORDS.has(keyword) ? keyword : void 0;
}
var CSS_WIDE_KEYWORDS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_react();
		init_use_controlled_state();
		CSS_WIDE_KEYWORDS = /* @__PURE__ */ new Set([
			"inherit",
			"initial",
			"unset",
			"revert",
			"revert-layer"
		]);
	})))();
}
//#endregion
//#region ../packages/components/build-module/range-control/input-range.mjs
function getRuntime$4() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$4(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$4(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$4}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$4) === hash) return true;
	return false;
}
function injectStyle$4(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$4();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$4(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$4, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$4(targetDocument) {
	const runtime = getRuntime$4();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$4(targetDocument, hash, css);
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
function registerStyle$4(hash, css) {
	const runtime = getRuntime$4();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$4(targetDocument, hash, css);
}
function InputRange(props, ref) {
	const { describedBy, label, value, className, ...otherProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(PolymorphicElement, {
		as: "input",
		...otherProps,
		className: clsx(style_module_default$4.input, className),
		"aria-describedby": describedBy,
		"aria-label": label,
		"aria-hidden": false,
		ref,
		tabIndex: 0,
		type: "range",
		value
	});
}
var import_jsx_runtime$4, STYLE_HASH_ATTRIBUTE$4, style_module_default$4, input_range_default;
function init_input_range() {
	return (init_input_range = __esmMin((() => {
		init_react();
		init_clsx();
		init_polymorphic_element();
		import_jsx_runtime$4 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$4 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$4("cd27f1d5e1", "._16cfb35145b71251__root{-webkit-tap-highlight-color:transparent;align-items:center;display:flex;justify-content:flex-start;min-height:40px;padding:0;position:relative;touch-action:none;width:100%}._5d12476463b010db__wrapper{--_wp-components-range-control-color:initial;color:var(--_wp-components-range-control-color);display:block;flex:1;height:30px;min-height:30px;position:relative;width:100%}._424f7371ecb649eb__after-icon,._62da529be5c58304__before-icon{display:flex;margin-top:4px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._62da529be5c58304__before-icon{margin-right:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._62da529be5c58304__before-icon{margin-left:6px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._424f7371ecb649eb__after-icon{margin-left:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._424f7371ecb649eb__after-icon{margin-right:6px}._3122208322b11470__rail{--_wp-components-range-control-rail-color:initial;background:var(--_wp-components-range-control-rail-color);border-radius:9999px;display:block;height:4px;left:0;margin-top:13px;pointer-events:none;position:absolute;right:0;top:0}._3122208322b11470__rail:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._0e8c8f7a67e9bd88__track{--_wp-components-range-control-track-color:initial;background:var(--_wp-components-range-control-track-color);border-radius:9999px;display:block;height:4px;margin-top:13px;pointer-events:none;position:absolute;top:0}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}@media not (prefers-reduced-motion){.is-marked ._0e8c8f7a67e9bd88__track{transition:width .1s ease}}._204b1afdddbdd20e__marks{display:block;margin-top:17px;pointer-events:none;position:relative;user-select:none;width:100%}._195f1a74fb2007f6__mark{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));height:4px;left:0;position:absolute;top:-4px;transform:translateX(-50%);width:2px;z-index:1}._49f9de4c6a04fef3__mark-label{color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb));font-size:11px;position:absolute;top:8px;transform:translateX(-50%);white-space:nowrap}._49f9de4c6a04fef3__mark-label:where(:not(._344a74972bd060a5__is-rtl)){left:0}._49f9de4c6a04fef3__mark-label:where(._344a74972bd060a5__is-rtl){right:0;transform:translateX(50%)}._49f9de4c6a04fef3__mark-label:where(.ab3374cf3c75c69e__is-filled){color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070))}._1ac72a2fdc52c7be__thumb-wrapper{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;display:flex;height:12px;justify-content:center;margin-top:9px;outline:0;pointer-events:none;position:absolute;top:0;user-select:none;width:12px;z-index:3}._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._1ac72a2fdc52c7be__thumb-wrapper{transform:translateX(4.5px)}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._1ac72a2fdc52c7be__thumb-wrapper{margin-left:-10px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._1ac72a2fdc52c7be__thumb-wrapper{margin-right:-10px;transform:translateX(-4.5px)}@media not (prefers-reduced-motion){.is-marked ._1ac72a2fdc52c7be__thumb-wrapper{transition:left .1s ease}}._213b307653c8f106__thumb{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;box-shadow:0 1px 1px rgba(0,0,0,.03),0 1px 2px rgba(0,0,0,.02),0 3px 3px rgba(0,0,0,.02),0 4px 4px rgba(0,0,0,.01);height:100%;outline:0;position:absolute;user-select:none;width:100%}._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;content:\" \";height:20px;left:-4px;opacity:.4;position:absolute;top:-4px;width:20px}._5b866ea36fa1e336__input{box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:block;height:100%;left:0;margin:0 -6px;opacity:0;outline:none;position:absolute;right:0;top:0;width:calc(100% + 12px)}._85546bc3d144fccc__tooltip{background:rgba(0,0,0,.8);border-radius:2px;color:#fff;display:none;font-size:12px;line-height:1.4;min-width:32px;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;text-align:center;transform:translateX(-50%);user-select:none}._85546bc3d144fccc__tooltip:where(._344a74972bd060a5__is-rtl){transform:translateX(50%)}._85546bc3d144fccc__tooltip:where(._8ab4918f70a19ff9__is-visible){display:inline-block;opacity:1}._85546bc3d144fccc__tooltip:where(:not(.cc99a6aea72a775d__is-bottom)){top:-80%}._85546bc3d144fccc__tooltip:where(.cc99a6aea72a775d__is-bottom){bottom:-80%}@media not (prefers-reduced-motion){._85546bc3d144fccc__tooltip{transition:opacity .12s ease,display allow-discrete .12s ease}}@starting-style{._85546bc3d144fccc__tooltip{opacity:0}}._701fe4585e588bce__input-number{display:inline-block;font-size:13px;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._701fe4585e588bce__input-number{margin-left:16px!important}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._701fe4585e588bce__input-number{margin-right:16px!important}input[type=number]._701fe4585e588bce__input-number{height:30px;min-height:30px}._13e733fee5921932__action-right{display:block;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._13e733fee5921932__action-right{margin-left:8px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._13e733fee5921932__action-right{margin-right:8px}._13e733fee5921932__action-right button,._13e733fee5921932__action-right button.is-small{height:30px;margin-left:0;min-height:30px}._14865f09d163baf2__color-inherit{color:inherit}._67df9c1a9d57a7d9__background-inherit{background:inherit}._22f715b9097371e7__color-initial{color:initial}._6f3492bfc3d1a95b__background-initial{background:initial}._6523aaaa887370e6__color-unset{color:unset}._0df0a318c3f26450__background-unset{background:unset}.c1f69e84d53d39a8__color-revert{color:revert}._546325a6063138bb__background-revert{background:revert}._7c7addf5cd8e6bda__color-revert-layer{color:revert-layer}._657c34011bfa2dae__background-revert-layer{background:revert-layer}@media (forced-colors:active){._3122208322b11470__rail{background:GrayText}._0e8c8f7a67e9bd88__track,._1ac72a2fdc52c7be__thumb-wrapper,._213b307653c8f106__thumb{background:CanvasText}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled),._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled),._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:GrayText}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background:GrayText}}");
		style_module_default$4 = {
			"root": "_16cfb35145b71251__root",
			"wrapper": "_5d12476463b010db__wrapper",
			"before-icon": "_62da529be5c58304__before-icon",
			"after-icon": "_424f7371ecb649eb__after-icon",
			"is-rtl": "_344a74972bd060a5__is-rtl",
			"rail": "_3122208322b11470__rail",
			"is-disabled": "_07bc326172daa60c__is-disabled",
			"track": "_0e8c8f7a67e9bd88__track",
			"marks": "_204b1afdddbdd20e__marks",
			"mark": "_195f1a74fb2007f6__mark",
			"mark-label": "_49f9de4c6a04fef3__mark-label",
			"is-filled": "ab3374cf3c75c69e__is-filled",
			"thumb-wrapper": "_1ac72a2fdc52c7be__thumb-wrapper",
			"thumb": "_213b307653c8f106__thumb",
			"is-focused": "_0fc515ecfe6a4958__is-focused",
			"input": "_5b866ea36fa1e336__input",
			"tooltip": "_85546bc3d144fccc__tooltip",
			"is-visible": "_8ab4918f70a19ff9__is-visible",
			"is-bottom": "cc99a6aea72a775d__is-bottom",
			"input-number": "_701fe4585e588bce__input-number",
			"action-right": "_13e733fee5921932__action-right",
			"color-inherit": "_14865f09d163baf2__color-inherit",
			"background-inherit": "_67df9c1a9d57a7d9__background-inherit",
			"color-initial": "_22f715b9097371e7__color-initial",
			"background-initial": "_6f3492bfc3d1a95b__background-initial",
			"color-unset": "_6523aaaa887370e6__color-unset",
			"background-unset": "_0df0a318c3f26450__background-unset",
			"color-revert": "c1f69e84d53d39a8__color-revert",
			"background-revert": "_546325a6063138bb__background-revert",
			"color-revert-layer": "_7c7addf5cd8e6bda__color-revert-layer",
			"background-revert-layer": "_657c34011bfa2dae__background-revert-layer"
		};
		input_range_default = (0, import_react$1.forwardRef)(InputRange);
	})))();
}
//#endregion
//#region ../packages/components/build-module/range-control/mark.mjs
function getRuntime$3() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$3(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$3(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$3}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$3) === hash) return true;
	return false;
}
function injectStyle$3(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$3();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$3(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$3, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$3(targetDocument) {
	const runtime = getRuntime$3();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$3(targetDocument, hash, css);
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
function registerStyle$3(hash, css) {
	const runtime = getRuntime$3();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$3(targetDocument, hash, css);
}
function RangeMark(props) {
	const { className, isFilled = false, label, style = {}, ...otherProps } = props;
	const classes = clsx("components-range-control__mark", style_module_default$3.mark, isFilled && "is-filled", className);
	const labelClasses = clsx("components-range-control__mark-label", style_module_default$3["mark-label"], {
		[style_module_default$3["is-filled"]]: isFilled,
		[style_module_default$3["is-rtl"]]: isRTL()
	}, isFilled && "is-filled");
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)(import_jsx_runtime$3.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(PolymorphicElement, {
		as: "span",
		...otherProps,
		"aria-hidden": "true",
		className: classes,
		style
	}), label && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("span", {
		"aria-hidden": "true",
		className: labelClasses,
		style,
		children: label
	})] });
}
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$3, style_module_default$3;
function init_mark() {
	return (init_mark = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_polymorphic_element();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("cd27f1d5e1", "._16cfb35145b71251__root{-webkit-tap-highlight-color:transparent;align-items:center;display:flex;justify-content:flex-start;min-height:40px;padding:0;position:relative;touch-action:none;width:100%}._5d12476463b010db__wrapper{--_wp-components-range-control-color:initial;color:var(--_wp-components-range-control-color);display:block;flex:1;height:30px;min-height:30px;position:relative;width:100%}._424f7371ecb649eb__after-icon,._62da529be5c58304__before-icon{display:flex;margin-top:4px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._62da529be5c58304__before-icon{margin-right:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._62da529be5c58304__before-icon{margin-left:6px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._424f7371ecb649eb__after-icon{margin-left:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._424f7371ecb649eb__after-icon{margin-right:6px}._3122208322b11470__rail{--_wp-components-range-control-rail-color:initial;background:var(--_wp-components-range-control-rail-color);border-radius:9999px;display:block;height:4px;left:0;margin-top:13px;pointer-events:none;position:absolute;right:0;top:0}._3122208322b11470__rail:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._0e8c8f7a67e9bd88__track{--_wp-components-range-control-track-color:initial;background:var(--_wp-components-range-control-track-color);border-radius:9999px;display:block;height:4px;margin-top:13px;pointer-events:none;position:absolute;top:0}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}@media not (prefers-reduced-motion){.is-marked ._0e8c8f7a67e9bd88__track{transition:width .1s ease}}._204b1afdddbdd20e__marks{display:block;margin-top:17px;pointer-events:none;position:relative;user-select:none;width:100%}._195f1a74fb2007f6__mark{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));height:4px;left:0;position:absolute;top:-4px;transform:translateX(-50%);width:2px;z-index:1}._49f9de4c6a04fef3__mark-label{color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb));font-size:11px;position:absolute;top:8px;transform:translateX(-50%);white-space:nowrap}._49f9de4c6a04fef3__mark-label:where(:not(._344a74972bd060a5__is-rtl)){left:0}._49f9de4c6a04fef3__mark-label:where(._344a74972bd060a5__is-rtl){right:0;transform:translateX(50%)}._49f9de4c6a04fef3__mark-label:where(.ab3374cf3c75c69e__is-filled){color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070))}._1ac72a2fdc52c7be__thumb-wrapper{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;display:flex;height:12px;justify-content:center;margin-top:9px;outline:0;pointer-events:none;position:absolute;top:0;user-select:none;width:12px;z-index:3}._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._1ac72a2fdc52c7be__thumb-wrapper{transform:translateX(4.5px)}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._1ac72a2fdc52c7be__thumb-wrapper{margin-left:-10px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._1ac72a2fdc52c7be__thumb-wrapper{margin-right:-10px;transform:translateX(-4.5px)}@media not (prefers-reduced-motion){.is-marked ._1ac72a2fdc52c7be__thumb-wrapper{transition:left .1s ease}}._213b307653c8f106__thumb{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;box-shadow:0 1px 1px rgba(0,0,0,.03),0 1px 2px rgba(0,0,0,.02),0 3px 3px rgba(0,0,0,.02),0 4px 4px rgba(0,0,0,.01);height:100%;outline:0;position:absolute;user-select:none;width:100%}._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;content:\" \";height:20px;left:-4px;opacity:.4;position:absolute;top:-4px;width:20px}._5b866ea36fa1e336__input{box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:block;height:100%;left:0;margin:0 -6px;opacity:0;outline:none;position:absolute;right:0;top:0;width:calc(100% + 12px)}._85546bc3d144fccc__tooltip{background:rgba(0,0,0,.8);border-radius:2px;color:#fff;display:none;font-size:12px;line-height:1.4;min-width:32px;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;text-align:center;transform:translateX(-50%);user-select:none}._85546bc3d144fccc__tooltip:where(._344a74972bd060a5__is-rtl){transform:translateX(50%)}._85546bc3d144fccc__tooltip:where(._8ab4918f70a19ff9__is-visible){display:inline-block;opacity:1}._85546bc3d144fccc__tooltip:where(:not(.cc99a6aea72a775d__is-bottom)){top:-80%}._85546bc3d144fccc__tooltip:where(.cc99a6aea72a775d__is-bottom){bottom:-80%}@media not (prefers-reduced-motion){._85546bc3d144fccc__tooltip{transition:opacity .12s ease,display allow-discrete .12s ease}}@starting-style{._85546bc3d144fccc__tooltip{opacity:0}}._701fe4585e588bce__input-number{display:inline-block;font-size:13px;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._701fe4585e588bce__input-number{margin-left:16px!important}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._701fe4585e588bce__input-number{margin-right:16px!important}input[type=number]._701fe4585e588bce__input-number{height:30px;min-height:30px}._13e733fee5921932__action-right{display:block;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._13e733fee5921932__action-right{margin-left:8px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._13e733fee5921932__action-right{margin-right:8px}._13e733fee5921932__action-right button,._13e733fee5921932__action-right button.is-small{height:30px;margin-left:0;min-height:30px}._14865f09d163baf2__color-inherit{color:inherit}._67df9c1a9d57a7d9__background-inherit{background:inherit}._22f715b9097371e7__color-initial{color:initial}._6f3492bfc3d1a95b__background-initial{background:initial}._6523aaaa887370e6__color-unset{color:unset}._0df0a318c3f26450__background-unset{background:unset}.c1f69e84d53d39a8__color-revert{color:revert}._546325a6063138bb__background-revert{background:revert}._7c7addf5cd8e6bda__color-revert-layer{color:revert-layer}._657c34011bfa2dae__background-revert-layer{background:revert-layer}@media (forced-colors:active){._3122208322b11470__rail{background:GrayText}._0e8c8f7a67e9bd88__track,._1ac72a2fdc52c7be__thumb-wrapper,._213b307653c8f106__thumb{background:CanvasText}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled),._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled),._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:GrayText}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background:GrayText}}");
		style_module_default$3 = {
			"root": "_16cfb35145b71251__root",
			"wrapper": "_5d12476463b010db__wrapper",
			"before-icon": "_62da529be5c58304__before-icon",
			"after-icon": "_424f7371ecb649eb__after-icon",
			"is-rtl": "_344a74972bd060a5__is-rtl",
			"rail": "_3122208322b11470__rail",
			"is-disabled": "_07bc326172daa60c__is-disabled",
			"track": "_0e8c8f7a67e9bd88__track",
			"marks": "_204b1afdddbdd20e__marks",
			"mark": "_195f1a74fb2007f6__mark",
			"mark-label": "_49f9de4c6a04fef3__mark-label",
			"is-filled": "ab3374cf3c75c69e__is-filled",
			"thumb-wrapper": "_1ac72a2fdc52c7be__thumb-wrapper",
			"thumb": "_213b307653c8f106__thumb",
			"is-focused": "_0fc515ecfe6a4958__is-focused",
			"input": "_5b866ea36fa1e336__input",
			"tooltip": "_85546bc3d144fccc__tooltip",
			"is-visible": "_8ab4918f70a19ff9__is-visible",
			"is-bottom": "cc99a6aea72a775d__is-bottom",
			"input-number": "_701fe4585e588bce__input-number",
			"action-right": "_13e733fee5921932__action-right",
			"color-inherit": "_14865f09d163baf2__color-inherit",
			"background-inherit": "_67df9c1a9d57a7d9__background-inherit",
			"color-initial": "_22f715b9097371e7__color-initial",
			"background-initial": "_6f3492bfc3d1a95b__background-initial",
			"color-unset": "_6523aaaa887370e6__color-unset",
			"background-unset": "_0df0a318c3f26450__background-unset",
			"color-revert": "c1f69e84d53d39a8__color-revert",
			"background-revert": "_546325a6063138bb__background-revert",
			"color-revert-layer": "_7c7addf5cd8e6bda__color-revert-layer",
			"background-revert-layer": "_657c34011bfa2dae__background-revert-layer"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/range-control/rail.mjs
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
function RangeRail(props) {
	const { disabled = false, marks = false, min = 0, max = 100, step = 1, value = 0, railColor, className, style, ...restProps } = props;
	const railColorKeyword = getCSSWideKeyword(railColor);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(import_jsx_runtime$2.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(PolymorphicElement, {
		as: "span",
		...restProps,
		disabled,
		className: clsx(style_module_default$2.rail, className, { [style_module_default$2["is-disabled"]]: disabled }, !disabled && railColorKeyword && style_module_default$2[`background-${railColorKeyword}`]),
		style: {
			"--_wp-components-range-control-rail-color": railColor || COLORS.theme.gray[300],
			...style
		}
	}), marks && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Marks, {
		disabled,
		marks,
		min,
		max,
		step,
		value
	})] });
}
function Marks(props) {
	const { disabled = false, marks = false, min = 0, max = 100, step: stepProp = 1, value = 0 } = props;
	const marksData = useMarks({
		marks,
		min,
		max,
		step: stepProp === "any" ? 1 : stepProp,
		value
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
		"aria-hidden": "true",
		className: clsx("components-range-control__marks", style_module_default$2.marks),
		children: marksData.map((mark) => /* @__PURE__ */ (0, import_react.createElement)(RangeMark, {
			...mark,
			key: mark.key,
			"aria-hidden": "true",
			disabled
		}))
	});
}
function useMarks({ marks, min = 0, max = 100, step = 1, value = 0 }) {
	if (!marks) return [];
	const range = max - min;
	if (!Array.isArray(marks)) {
		marks = [];
		const count = 1 + Math.round(range / step);
		while (count > marks.push({ value: step * marks.length + min }));
	}
	const placedMarks = [];
	marks.forEach((mark, index) => {
		if (mark.value < min || mark.value > max) return;
		const key = `mark-${index}`;
		const isFilled = mark.value <= value;
		const offset = `${(mark.value - min) / range * 100}%`;
		const offsetStyle = { [isRTL() ? "right" : "left"]: offset };
		placedMarks.push({
			...mark,
			isFilled,
			key,
			style: offsetStyle
		});
	});
	return placedMarks;
}
var import_jsx_runtime$2, import_react, STYLE_HASH_ATTRIBUTE$2, style_module_default$2;
function init_rail() {
	return (init_rail = __esmMin((() => {
		init_build_module();
		init_clsx();
		init_colors_values();
		init_utils();
		init_mark();
		init_polymorphic_element();
		import_jsx_runtime$2 = require_jsx_runtime();
		import_react = require_react();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("cd27f1d5e1", "._16cfb35145b71251__root{-webkit-tap-highlight-color:transparent;align-items:center;display:flex;justify-content:flex-start;min-height:40px;padding:0;position:relative;touch-action:none;width:100%}._5d12476463b010db__wrapper{--_wp-components-range-control-color:initial;color:var(--_wp-components-range-control-color);display:block;flex:1;height:30px;min-height:30px;position:relative;width:100%}._424f7371ecb649eb__after-icon,._62da529be5c58304__before-icon{display:flex;margin-top:4px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._62da529be5c58304__before-icon{margin-right:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._62da529be5c58304__before-icon{margin-left:6px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._424f7371ecb649eb__after-icon{margin-left:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._424f7371ecb649eb__after-icon{margin-right:6px}._3122208322b11470__rail{--_wp-components-range-control-rail-color:initial;background:var(--_wp-components-range-control-rail-color);border-radius:9999px;display:block;height:4px;left:0;margin-top:13px;pointer-events:none;position:absolute;right:0;top:0}._3122208322b11470__rail:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._0e8c8f7a67e9bd88__track{--_wp-components-range-control-track-color:initial;background:var(--_wp-components-range-control-track-color);border-radius:9999px;display:block;height:4px;margin-top:13px;pointer-events:none;position:absolute;top:0}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}@media not (prefers-reduced-motion){.is-marked ._0e8c8f7a67e9bd88__track{transition:width .1s ease}}._204b1afdddbdd20e__marks{display:block;margin-top:17px;pointer-events:none;position:relative;user-select:none;width:100%}._195f1a74fb2007f6__mark{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));height:4px;left:0;position:absolute;top:-4px;transform:translateX(-50%);width:2px;z-index:1}._49f9de4c6a04fef3__mark-label{color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb));font-size:11px;position:absolute;top:8px;transform:translateX(-50%);white-space:nowrap}._49f9de4c6a04fef3__mark-label:where(:not(._344a74972bd060a5__is-rtl)){left:0}._49f9de4c6a04fef3__mark-label:where(._344a74972bd060a5__is-rtl){right:0;transform:translateX(50%)}._49f9de4c6a04fef3__mark-label:where(.ab3374cf3c75c69e__is-filled){color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070))}._1ac72a2fdc52c7be__thumb-wrapper{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;display:flex;height:12px;justify-content:center;margin-top:9px;outline:0;pointer-events:none;position:absolute;top:0;user-select:none;width:12px;z-index:3}._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._1ac72a2fdc52c7be__thumb-wrapper{transform:translateX(4.5px)}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._1ac72a2fdc52c7be__thumb-wrapper{margin-left:-10px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._1ac72a2fdc52c7be__thumb-wrapper{margin-right:-10px;transform:translateX(-4.5px)}@media not (prefers-reduced-motion){.is-marked ._1ac72a2fdc52c7be__thumb-wrapper{transition:left .1s ease}}._213b307653c8f106__thumb{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;box-shadow:0 1px 1px rgba(0,0,0,.03),0 1px 2px rgba(0,0,0,.02),0 3px 3px rgba(0,0,0,.02),0 4px 4px rgba(0,0,0,.01);height:100%;outline:0;position:absolute;user-select:none;width:100%}._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;content:\" \";height:20px;left:-4px;opacity:.4;position:absolute;top:-4px;width:20px}._5b866ea36fa1e336__input{box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:block;height:100%;left:0;margin:0 -6px;opacity:0;outline:none;position:absolute;right:0;top:0;width:calc(100% + 12px)}._85546bc3d144fccc__tooltip{background:rgba(0,0,0,.8);border-radius:2px;color:#fff;display:none;font-size:12px;line-height:1.4;min-width:32px;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;text-align:center;transform:translateX(-50%);user-select:none}._85546bc3d144fccc__tooltip:where(._344a74972bd060a5__is-rtl){transform:translateX(50%)}._85546bc3d144fccc__tooltip:where(._8ab4918f70a19ff9__is-visible){display:inline-block;opacity:1}._85546bc3d144fccc__tooltip:where(:not(.cc99a6aea72a775d__is-bottom)){top:-80%}._85546bc3d144fccc__tooltip:where(.cc99a6aea72a775d__is-bottom){bottom:-80%}@media not (prefers-reduced-motion){._85546bc3d144fccc__tooltip{transition:opacity .12s ease,display allow-discrete .12s ease}}@starting-style{._85546bc3d144fccc__tooltip{opacity:0}}._701fe4585e588bce__input-number{display:inline-block;font-size:13px;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._701fe4585e588bce__input-number{margin-left:16px!important}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._701fe4585e588bce__input-number{margin-right:16px!important}input[type=number]._701fe4585e588bce__input-number{height:30px;min-height:30px}._13e733fee5921932__action-right{display:block;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._13e733fee5921932__action-right{margin-left:8px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._13e733fee5921932__action-right{margin-right:8px}._13e733fee5921932__action-right button,._13e733fee5921932__action-right button.is-small{height:30px;margin-left:0;min-height:30px}._14865f09d163baf2__color-inherit{color:inherit}._67df9c1a9d57a7d9__background-inherit{background:inherit}._22f715b9097371e7__color-initial{color:initial}._6f3492bfc3d1a95b__background-initial{background:initial}._6523aaaa887370e6__color-unset{color:unset}._0df0a318c3f26450__background-unset{background:unset}.c1f69e84d53d39a8__color-revert{color:revert}._546325a6063138bb__background-revert{background:revert}._7c7addf5cd8e6bda__color-revert-layer{color:revert-layer}._657c34011bfa2dae__background-revert-layer{background:revert-layer}@media (forced-colors:active){._3122208322b11470__rail{background:GrayText}._0e8c8f7a67e9bd88__track,._1ac72a2fdc52c7be__thumb-wrapper,._213b307653c8f106__thumb{background:CanvasText}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled),._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled),._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:GrayText}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background:GrayText}}");
		style_module_default$2 = {
			"root": "_16cfb35145b71251__root",
			"wrapper": "_5d12476463b010db__wrapper",
			"before-icon": "_62da529be5c58304__before-icon",
			"after-icon": "_424f7371ecb649eb__after-icon",
			"is-rtl": "_344a74972bd060a5__is-rtl",
			"rail": "_3122208322b11470__rail",
			"is-disabled": "_07bc326172daa60c__is-disabled",
			"track": "_0e8c8f7a67e9bd88__track",
			"marks": "_204b1afdddbdd20e__marks",
			"mark": "_195f1a74fb2007f6__mark",
			"mark-label": "_49f9de4c6a04fef3__mark-label",
			"is-filled": "ab3374cf3c75c69e__is-filled",
			"thumb-wrapper": "_1ac72a2fdc52c7be__thumb-wrapper",
			"thumb": "_213b307653c8f106__thumb",
			"is-focused": "_0fc515ecfe6a4958__is-focused",
			"input": "_5b866ea36fa1e336__input",
			"tooltip": "_85546bc3d144fccc__tooltip",
			"is-visible": "_8ab4918f70a19ff9__is-visible",
			"is-bottom": "cc99a6aea72a775d__is-bottom",
			"input-number": "_701fe4585e588bce__input-number",
			"action-right": "_13e733fee5921932__action-right",
			"color-inherit": "_14865f09d163baf2__color-inherit",
			"background-inherit": "_67df9c1a9d57a7d9__background-inherit",
			"color-initial": "_22f715b9097371e7__color-initial",
			"background-initial": "_6f3492bfc3d1a95b__background-initial",
			"color-unset": "_6523aaaa887370e6__color-unset",
			"background-unset": "_0df0a318c3f26450__background-unset",
			"color-revert": "c1f69e84d53d39a8__color-revert",
			"background-revert": "_546325a6063138bb__background-revert",
			"color-revert-layer": "_7c7addf5cd8e6bda__color-revert-layer",
			"background-revert-layer": "_657c34011bfa2dae__background-revert-layer"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/range-control/tooltip.mjs
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
function SimpleTooltip(props) {
	const { className, inputRef, tooltipPlacement, show = false, style = {}, value = 0, renderTooltipContent = (v) => v, zIndex = 100, ...restProps } = props;
	const placement = useTooltipPlacement({
		inputRef,
		tooltipPlacement
	});
	const classes = clsx("components-simple-tooltip", style_module_default$1.tooltip, className, {
		[style_module_default$1["is-visible"]]: show,
		[style_module_default$1["is-rtl"]]: isRTL(),
		[style_module_default$1["is-bottom"]]: placement === "bottom"
	});
	const styles = {
		...style,
		zIndex
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PolymorphicElement, {
		as: "span",
		...restProps,
		"aria-hidden": "false",
		className: classes,
		role: "tooltip",
		style: styles,
		children: renderTooltipContent(value)
	});
}
function useTooltipPlacement({ inputRef, tooltipPlacement }) {
	const [placement, setPlacement] = (0, import_react$1.useState)();
	const setTooltipPlacement = (0, import_react$1.useCallback)(() => {
		if (inputRef && inputRef.current) setPlacement(tooltipPlacement);
	}, [tooltipPlacement, inputRef]);
	(0, import_react$1.useEffect)(() => {
		setTooltipPlacement();
	}, [setTooltipPlacement]);
	(0, import_react$1.useEffect)(() => {
		window.addEventListener("resize", setTooltipPlacement);
		return () => {
			window.removeEventListener("resize", setTooltipPlacement);
		};
	});
	return placement;
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE$1, style_module_default$1;
function init_tooltip() {
	return (init_tooltip = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_polymorphic_element();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("cd27f1d5e1", "._16cfb35145b71251__root{-webkit-tap-highlight-color:transparent;align-items:center;display:flex;justify-content:flex-start;min-height:40px;padding:0;position:relative;touch-action:none;width:100%}._5d12476463b010db__wrapper{--_wp-components-range-control-color:initial;color:var(--_wp-components-range-control-color);display:block;flex:1;height:30px;min-height:30px;position:relative;width:100%}._424f7371ecb649eb__after-icon,._62da529be5c58304__before-icon{display:flex;margin-top:4px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._62da529be5c58304__before-icon{margin-right:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._62da529be5c58304__before-icon{margin-left:6px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._424f7371ecb649eb__after-icon{margin-left:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._424f7371ecb649eb__after-icon{margin-right:6px}._3122208322b11470__rail{--_wp-components-range-control-rail-color:initial;background:var(--_wp-components-range-control-rail-color);border-radius:9999px;display:block;height:4px;left:0;margin-top:13px;pointer-events:none;position:absolute;right:0;top:0}._3122208322b11470__rail:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._0e8c8f7a67e9bd88__track{--_wp-components-range-control-track-color:initial;background:var(--_wp-components-range-control-track-color);border-radius:9999px;display:block;height:4px;margin-top:13px;pointer-events:none;position:absolute;top:0}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}@media not (prefers-reduced-motion){.is-marked ._0e8c8f7a67e9bd88__track{transition:width .1s ease}}._204b1afdddbdd20e__marks{display:block;margin-top:17px;pointer-events:none;position:relative;user-select:none;width:100%}._195f1a74fb2007f6__mark{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));height:4px;left:0;position:absolute;top:-4px;transform:translateX(-50%);width:2px;z-index:1}._49f9de4c6a04fef3__mark-label{color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb));font-size:11px;position:absolute;top:8px;transform:translateX(-50%);white-space:nowrap}._49f9de4c6a04fef3__mark-label:where(:not(._344a74972bd060a5__is-rtl)){left:0}._49f9de4c6a04fef3__mark-label:where(._344a74972bd060a5__is-rtl){right:0;transform:translateX(50%)}._49f9de4c6a04fef3__mark-label:where(.ab3374cf3c75c69e__is-filled){color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070))}._1ac72a2fdc52c7be__thumb-wrapper{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;display:flex;height:12px;justify-content:center;margin-top:9px;outline:0;pointer-events:none;position:absolute;top:0;user-select:none;width:12px;z-index:3}._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._1ac72a2fdc52c7be__thumb-wrapper{transform:translateX(4.5px)}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._1ac72a2fdc52c7be__thumb-wrapper{margin-left:-10px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._1ac72a2fdc52c7be__thumb-wrapper{margin-right:-10px;transform:translateX(-4.5px)}@media not (prefers-reduced-motion){.is-marked ._1ac72a2fdc52c7be__thumb-wrapper{transition:left .1s ease}}._213b307653c8f106__thumb{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;box-shadow:0 1px 1px rgba(0,0,0,.03),0 1px 2px rgba(0,0,0,.02),0 3px 3px rgba(0,0,0,.02),0 4px 4px rgba(0,0,0,.01);height:100%;outline:0;position:absolute;user-select:none;width:100%}._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;content:\" \";height:20px;left:-4px;opacity:.4;position:absolute;top:-4px;width:20px}._5b866ea36fa1e336__input{box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:block;height:100%;left:0;margin:0 -6px;opacity:0;outline:none;position:absolute;right:0;top:0;width:calc(100% + 12px)}._85546bc3d144fccc__tooltip{background:rgba(0,0,0,.8);border-radius:2px;color:#fff;display:none;font-size:12px;line-height:1.4;min-width:32px;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;text-align:center;transform:translateX(-50%);user-select:none}._85546bc3d144fccc__tooltip:where(._344a74972bd060a5__is-rtl){transform:translateX(50%)}._85546bc3d144fccc__tooltip:where(._8ab4918f70a19ff9__is-visible){display:inline-block;opacity:1}._85546bc3d144fccc__tooltip:where(:not(.cc99a6aea72a775d__is-bottom)){top:-80%}._85546bc3d144fccc__tooltip:where(.cc99a6aea72a775d__is-bottom){bottom:-80%}@media not (prefers-reduced-motion){._85546bc3d144fccc__tooltip{transition:opacity .12s ease,display allow-discrete .12s ease}}@starting-style{._85546bc3d144fccc__tooltip{opacity:0}}._701fe4585e588bce__input-number{display:inline-block;font-size:13px;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._701fe4585e588bce__input-number{margin-left:16px!important}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._701fe4585e588bce__input-number{margin-right:16px!important}input[type=number]._701fe4585e588bce__input-number{height:30px;min-height:30px}._13e733fee5921932__action-right{display:block;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._13e733fee5921932__action-right{margin-left:8px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._13e733fee5921932__action-right{margin-right:8px}._13e733fee5921932__action-right button,._13e733fee5921932__action-right button.is-small{height:30px;margin-left:0;min-height:30px}._14865f09d163baf2__color-inherit{color:inherit}._67df9c1a9d57a7d9__background-inherit{background:inherit}._22f715b9097371e7__color-initial{color:initial}._6f3492bfc3d1a95b__background-initial{background:initial}._6523aaaa887370e6__color-unset{color:unset}._0df0a318c3f26450__background-unset{background:unset}.c1f69e84d53d39a8__color-revert{color:revert}._546325a6063138bb__background-revert{background:revert}._7c7addf5cd8e6bda__color-revert-layer{color:revert-layer}._657c34011bfa2dae__background-revert-layer{background:revert-layer}@media (forced-colors:active){._3122208322b11470__rail{background:GrayText}._0e8c8f7a67e9bd88__track,._1ac72a2fdc52c7be__thumb-wrapper,._213b307653c8f106__thumb{background:CanvasText}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled),._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled),._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:GrayText}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background:GrayText}}");
		style_module_default$1 = {
			"root": "_16cfb35145b71251__root",
			"wrapper": "_5d12476463b010db__wrapper",
			"before-icon": "_62da529be5c58304__before-icon",
			"after-icon": "_424f7371ecb649eb__after-icon",
			"is-rtl": "_344a74972bd060a5__is-rtl",
			"rail": "_3122208322b11470__rail",
			"is-disabled": "_07bc326172daa60c__is-disabled",
			"track": "_0e8c8f7a67e9bd88__track",
			"marks": "_204b1afdddbdd20e__marks",
			"mark": "_195f1a74fb2007f6__mark",
			"mark-label": "_49f9de4c6a04fef3__mark-label",
			"is-filled": "ab3374cf3c75c69e__is-filled",
			"thumb-wrapper": "_1ac72a2fdc52c7be__thumb-wrapper",
			"thumb": "_213b307653c8f106__thumb",
			"is-focused": "_0fc515ecfe6a4958__is-focused",
			"input": "_5b866ea36fa1e336__input",
			"tooltip": "_85546bc3d144fccc__tooltip",
			"is-visible": "_8ab4918f70a19ff9__is-visible",
			"is-bottom": "cc99a6aea72a775d__is-bottom",
			"input-number": "_701fe4585e588bce__input-number",
			"action-right": "_13e733fee5921932__action-right",
			"color-inherit": "_14865f09d163baf2__color-inherit",
			"background-inherit": "_67df9c1a9d57a7d9__background-inherit",
			"color-initial": "_22f715b9097371e7__color-initial",
			"background-initial": "_6f3492bfc3d1a95b__background-initial",
			"color-unset": "_6523aaaa887370e6__color-unset",
			"background-unset": "_0df0a318c3f26450__background-unset",
			"color-revert": "c1f69e84d53d39a8__color-revert",
			"background-revert": "_546325a6063138bb__background-revert",
			"color-revert-layer": "_7c7addf5cd8e6bda__color-revert-layer",
			"background-revert-layer": "_657c34011bfa2dae__background-revert-layer"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/range-control/index.mjs
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
function computeResetValue({ resetFallbackValue, initialPosition }) {
	if (resetFallbackValue !== void 0) return !Number.isNaN(resetFallbackValue) ? resetFallbackValue : null;
	if (initialPosition !== void 0) return !Number.isNaN(initialPosition) ? initialPosition : null;
	return null;
}
function UnforwardedRangeControl(props, forwardedRef) {
	const { __nextHasNoMarginBottom: _, __next40pxDefaultSize: _next40pxDefaultSize, afterIcon, allowReset = false, beforeIcon, className, color: colorProp = COLORS.theme.accent, currentInput, disabled = false, help, hideLabelFromVision = false, initialPosition, isShiftStepEnabled = true, label, marks = false, max = 100, min = 0, onBlur = noop, onChange = noop, onFocus = noop, onMouseLeave = noop, onMouseMove = noop, railColor, renderTooltipContent = (v) => v, resetFallbackValue, shiftStep = 10, showTooltip: showTooltipProp, step = 1, trackColor, value: valueProp, withInputField = true, ...otherProps } = props;
	const [value, setValue] = useControlledRangeValue({
		min,
		max,
		value: valueProp ?? null,
		initial: initialPosition
	});
	const isResetPendent = (0, import_react$1.useRef)(false);
	let hasTooltip = showTooltipProp;
	let hasInputField = withInputField;
	if (step === "any") {
		hasTooltip = false;
		hasInputField = false;
	}
	const [showTooltip, setShowTooltip] = (0, import_react$1.useState)(hasTooltip);
	const [isFocused, setIsFocused] = (0, import_react$1.useState)(false);
	const inputRef = (0, import_react$1.useRef)(null);
	const isCurrentlyFocused = inputRef.current?.matches(":focus");
	const isThumbFocused = !disabled && isFocused;
	const isValueReset = value === null;
	const inputSliderValue = isValueReset ? "" : value !== void 0 ? value : currentInput;
	const rangeFillValue = isValueReset ? (max - min) / 2 + min : value;
	const fillValue = isValueReset ? 50 : (value - min) / (max - min) * 100;
	const fillValueOffset = `${clamp(fillValue, 0, 100)}%`;
	const classes = clsx("components-range-control", className);
	const colorKeyword = getCSSWideKeyword(colorProp);
	const trackColorKeyword = getCSSWideKeyword(trackColor);
	const wrapperClasses = clsx("components-range-control__wrapper", style_module_default.wrapper, colorKeyword && style_module_default[`color-${colorKeyword}`], !!marks && "is-marked");
	const id = use_instance_id_default(UnforwardedRangeControl, "inspector-range-control");
	const describedBy = !!help ? `${id}__help` : void 0;
	const enableTooltip = hasTooltip !== false && Number.isFinite(value);
	const handleOnRangeChange = (event) => {
		const nextValue = parseFloat(event.target.value);
		setValue(nextValue);
		onChange(nextValue);
	};
	const handleOnChange = (next) => {
		let nextValue = parseFloat(next);
		setValue(nextValue);
		if (!isNaN(nextValue)) {
			if (nextValue < min || nextValue > max) nextValue = floatClamp(nextValue, min, max);
			onChange(nextValue);
			isResetPendent.current = false;
		} else if (allowReset) isResetPendent.current = true;
	};
	const handleOnInputNumberBlur = () => {
		if (isResetPendent.current) {
			handleOnReset();
			isResetPendent.current = false;
		}
	};
	const handleOnReset = () => {
		const resetValue = Number.isNaN(resetFallbackValue) ? null : resetFallbackValue ?? null;
		setValue(resetValue);
		onChange(resetValue ?? void 0);
	};
	const handleShowTooltip = () => setShowTooltip(true);
	const handleHideTooltip = () => setShowTooltip(false);
	const handleOnBlur = (event) => {
		onBlur(event);
		setIsFocused(false);
		handleHideTooltip();
	};
	const handleOnFocus = (event) => {
		onFocus(event);
		setIsFocused(true);
		handleShowTooltip();
	};
	const offsetStyle = { [isRTL() ? "right" : "left"]: fillValueOffset };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(base_control_default, {
		className: classes,
		label,
		hideLabelFromVision,
		id: `${id}`,
		help,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: clsx("components-range-control__root", style_module_default.root, { [style_module_default["is-rtl"]]: isRTL() }),
			children: [
				beforeIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: style_module_default["before-icon"],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, { icon: beforeIcon })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: wrapperClasses,
					style: { "--_wp-components-range-control-color": colorProp },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_range_default, {
							...otherProps,
							className: "components-range-control__slider",
							describedBy,
							disabled,
							id: `${id}`,
							label,
							max,
							min,
							onBlur: handleOnBlur,
							onChange: handleOnRangeChange,
							onFocus: handleOnFocus,
							onMouseMove,
							onMouseLeave,
							ref: useMergeRefs([inputRef, forwardedRef]),
							step,
							value: inputSliderValue ?? void 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeRail, {
							"aria-hidden": true,
							disabled,
							marks,
							max,
							min,
							railColor,
							step,
							value: rangeFillValue
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: clsx("components-range-control__track", style_module_default.track, { [style_module_default["is-disabled"]]: disabled }, !disabled && trackColorKeyword && style_module_default[`background-${trackColorKeyword}`]),
							disabled,
							style: {
								width: fillValueOffset,
								"--_wp-components-range-control-track-color": trackColor || "currentColor"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: clsx("components-range-control__thumb-wrapper", style_module_default["thumb-wrapper"], { [style_module_default["is-disabled"]]: disabled }),
							style: offsetStyle,
							disabled,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: clsx(style_module_default.thumb, {
									[style_module_default["is-disabled"]]: disabled,
									[style_module_default["is-focused"]]: isThumbFocused
								}),
								disabled
							})
						}),
						enableTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleTooltip, {
							className: "components-range-control__tooltip",
							inputRef,
							tooltipPlacement: "bottom",
							renderTooltipContent,
							show: isCurrentlyFocused || showTooltip,
							style: offsetStyle,
							value
						})
					]
				}),
				afterIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: style_module_default["after-icon"],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, { icon: afterIcon })
				}),
				hasInputField && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(number_control_default, {
					"aria-label": label,
					className: clsx("components-range-control__number", style_module_default["input-number"]),
					disabled,
					inputMode: "decimal",
					isShiftStepEnabled,
					max,
					min,
					onBlur: handleOnInputNumberBlur,
					onChange: handleOnChange,
					shiftStep,
					__unstableInputWidth: space(20),
					step,
					value: inputSliderValue
				}),
				allowReset && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: style_module_default["action-right"],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
						className: "components-range-control__reset",
						accessibleWhenDisabled: !disabled,
						disabled: disabled || value === computeResetValue({
							resetFallbackValue,
							initialPosition
						}),
						variant: "secondary",
						size: "small",
						onClick: handleOnReset,
						children: __("Reset")
					})
				})
			]
		})
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, noop, RangeControl, range_control_default;
function init_range_control() {
	return (init_range_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_use_instance_id(), init_use_merge_refs();
		init_base_control();
		init_button();
		init_icon();
		init_colors_values();
		init_utils();
		init_input_range();
		init_rail();
		init_tooltip();
		init_number_control();
		init_space();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("cd27f1d5e1", "._16cfb35145b71251__root{-webkit-tap-highlight-color:transparent;align-items:center;display:flex;justify-content:flex-start;min-height:40px;padding:0;position:relative;touch-action:none;width:100%}._5d12476463b010db__wrapper{--_wp-components-range-control-color:initial;color:var(--_wp-components-range-control-color);display:block;flex:1;height:30px;min-height:30px;position:relative;width:100%}._424f7371ecb649eb__after-icon,._62da529be5c58304__before-icon{display:flex;margin-top:4px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._62da529be5c58304__before-icon{margin-right:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._62da529be5c58304__before-icon{margin-left:6px}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._424f7371ecb649eb__after-icon{margin-left:6px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._424f7371ecb649eb__after-icon{margin-right:6px}._3122208322b11470__rail{--_wp-components-range-control-rail-color:initial;background:var(--_wp-components-range-control-rail-color);border-radius:9999px;display:block;height:4px;left:0;margin-top:13px;pointer-events:none;position:absolute;right:0;top:0}._3122208322b11470__rail:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-100,var(--wpds-color-background-surface-neutral,#fcfcfc))}._0e8c8f7a67e9bd88__track{--_wp-components-range-control-track-color:initial;background:var(--_wp-components-range-control-track-color);border-radius:9999px;display:block;height:4px;margin-top:13px;pointer-events:none;position:absolute;top:0}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}@media not (prefers-reduced-motion){.is-marked ._0e8c8f7a67e9bd88__track{transition:width .1s ease}}._204b1afdddbdd20e__marks{display:block;margin-top:17px;pointer-events:none;position:relative;user-select:none;width:100%}._195f1a74fb2007f6__mark{background-color:var(--wp-components-color-background,var(--wpds-color-background-surface-neutral-strong,#fff));height:4px;left:0;position:absolute;top:-4px;transform:translateX(-50%);width:2px;z-index:1}._49f9de4c6a04fef3__mark-label{color:var(--wp-components-color-gray-300,var(--wpds-color-stroke-surface-neutral,#dbdbdb));font-size:11px;position:absolute;top:8px;transform:translateX(-50%);white-space:nowrap}._49f9de4c6a04fef3__mark-label:where(:not(._344a74972bd060a5__is-rtl)){left:0}._49f9de4c6a04fef3__mark-label:where(._344a74972bd060a5__is-rtl){right:0;transform:translateX(50%)}._49f9de4c6a04fef3__mark-label:where(.ab3374cf3c75c69e__is-filled){color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070))}._1ac72a2fdc52c7be__thumb-wrapper{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;display:flex;height:12px;justify-content:center;margin-top:9px;outline:0;pointer-events:none;position:absolute;top:0;user-select:none;width:12px;z-index:3}._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._1ac72a2fdc52c7be__thumb-wrapper{transform:translateX(4.5px)}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._1ac72a2fdc52c7be__thumb-wrapper{margin-left:-10px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._1ac72a2fdc52c7be__thumb-wrapper{margin-right:-10px;transform:translateX(-4.5px)}@media not (prefers-reduced-motion){.is-marked ._1ac72a2fdc52c7be__thumb-wrapper{transition:left .1s ease}}._213b307653c8f106__thumb{align-items:center;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;box-shadow:0 1px 1px rgba(0,0,0,.03),0 1px 2px rgba(0,0,0,.02),0 3px 3px rgba(0,0,0,.02),0 4px 4px rgba(0,0,0,.01);height:100%;outline:0;position:absolute;user-select:none;width:100%}._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:var(--wp-components-color-gray-400,var(--wpds-color-stroke-interactive-neutral,#8d8d8d))}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background-color:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));border-radius:50%;content:\" \";height:20px;left:-4px;opacity:.4;position:absolute;top:-4px;width:20px}._5b866ea36fa1e336__input{box-sizing:border-box;cursor:var(--wpds-cursor-control,pointer);display:block;height:100%;left:0;margin:0 -6px;opacity:0;outline:none;position:absolute;right:0;top:0;width:calc(100% + 12px)}._85546bc3d144fccc__tooltip{background:rgba(0,0,0,.8);border-radius:2px;color:#fff;display:none;font-size:12px;line-height:1.4;min-width:32px;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;text-align:center;transform:translateX(-50%);user-select:none}._85546bc3d144fccc__tooltip:where(._344a74972bd060a5__is-rtl){transform:translateX(50%)}._85546bc3d144fccc__tooltip:where(._8ab4918f70a19ff9__is-visible){display:inline-block;opacity:1}._85546bc3d144fccc__tooltip:where(:not(.cc99a6aea72a775d__is-bottom)){top:-80%}._85546bc3d144fccc__tooltip:where(.cc99a6aea72a775d__is-bottom){bottom:-80%}@media not (prefers-reduced-motion){._85546bc3d144fccc__tooltip{transition:opacity .12s ease,display allow-discrete .12s ease}}@starting-style{._85546bc3d144fccc__tooltip{opacity:0}}._701fe4585e588bce__input-number{display:inline-block;font-size:13px;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._701fe4585e588bce__input-number{margin-left:16px!important}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._701fe4585e588bce__input-number{margin-right:16px!important}input[type=number]._701fe4585e588bce__input-number{height:30px;min-height:30px}._13e733fee5921932__action-right{display:block;margin-top:0}:where(._16cfb35145b71251__root:not(._344a74972bd060a5__is-rtl)) ._13e733fee5921932__action-right{margin-left:8px}:where(._16cfb35145b71251__root._344a74972bd060a5__is-rtl) ._13e733fee5921932__action-right{margin-right:8px}._13e733fee5921932__action-right button,._13e733fee5921932__action-right button.is-small{height:30px;margin-left:0;min-height:30px}._14865f09d163baf2__color-inherit{color:inherit}._67df9c1a9d57a7d9__background-inherit{background:inherit}._22f715b9097371e7__color-initial{color:initial}._6f3492bfc3d1a95b__background-initial{background:initial}._6523aaaa887370e6__color-unset{color:unset}._0df0a318c3f26450__background-unset{background:unset}.c1f69e84d53d39a8__color-revert{color:revert}._546325a6063138bb__background-revert{background:revert}._7c7addf5cd8e6bda__color-revert-layer{color:revert-layer}._657c34011bfa2dae__background-revert-layer{background:revert-layer}@media (forced-colors:active){._3122208322b11470__rail{background:GrayText}._0e8c8f7a67e9bd88__track,._1ac72a2fdc52c7be__thumb-wrapper,._213b307653c8f106__thumb{background:CanvasText}._0e8c8f7a67e9bd88__track:where(._07bc326172daa60c__is-disabled),._1ac72a2fdc52c7be__thumb-wrapper:where(._07bc326172daa60c__is-disabled),._213b307653c8f106__thumb:where(._07bc326172daa60c__is-disabled){background:GrayText}._213b307653c8f106__thumb:where(._0fc515ecfe6a4958__is-focused):before{background:GrayText}}");
		style_module_default = {
			"root": "_16cfb35145b71251__root",
			"wrapper": "_5d12476463b010db__wrapper",
			"before-icon": "_62da529be5c58304__before-icon",
			"after-icon": "_424f7371ecb649eb__after-icon",
			"is-rtl": "_344a74972bd060a5__is-rtl",
			"rail": "_3122208322b11470__rail",
			"is-disabled": "_07bc326172daa60c__is-disabled",
			"track": "_0e8c8f7a67e9bd88__track",
			"marks": "_204b1afdddbdd20e__marks",
			"mark": "_195f1a74fb2007f6__mark",
			"mark-label": "_49f9de4c6a04fef3__mark-label",
			"is-filled": "ab3374cf3c75c69e__is-filled",
			"thumb-wrapper": "_1ac72a2fdc52c7be__thumb-wrapper",
			"thumb": "_213b307653c8f106__thumb",
			"is-focused": "_0fc515ecfe6a4958__is-focused",
			"input": "_5b866ea36fa1e336__input",
			"tooltip": "_85546bc3d144fccc__tooltip",
			"is-visible": "_8ab4918f70a19ff9__is-visible",
			"is-bottom": "cc99a6aea72a775d__is-bottom",
			"input-number": "_701fe4585e588bce__input-number",
			"action-right": "_13e733fee5921932__action-right",
			"color-inherit": "_14865f09d163baf2__color-inherit",
			"background-inherit": "_67df9c1a9d57a7d9__background-inherit",
			"color-initial": "_22f715b9097371e7__color-initial",
			"background-initial": "_6f3492bfc3d1a95b__background-initial",
			"color-unset": "_6523aaaa887370e6__color-unset",
			"background-unset": "_0df0a318c3f26450__background-unset",
			"color-revert": "c1f69e84d53d39a8__color-revert",
			"background-revert": "_546325a6063138bb__background-revert",
			"color-revert-layer": "_7c7addf5cd8e6bda__color-revert-layer",
			"background-revert-layer": "_657c34011bfa2dae__background-revert-layer"
		};
		noop = () => {};
		RangeControl = (0, import_react$1.forwardRef)(UnforwardedRangeControl);
		RangeControl.displayName = "RangeControl";
		range_control_default = RangeControl;
	})))();
}
//#endregion
export { range_control_default as n, init_range_control as t };
