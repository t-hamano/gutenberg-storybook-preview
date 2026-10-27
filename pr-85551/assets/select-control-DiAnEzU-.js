import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as warning, t as init_build_module } from "./build-module-B5spW8IS.js";
import { a as SelectGroup, i as init_SelectGroupLabel, n as init_SelectSeparator, o as init_SelectGroup, r as SelectGroupLabel, t as SelectSeparator } from "./SelectSeparator-DHaDoCww.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_text, t as Text } from "./text-C4929NGP.js";
import { a as Popup, c as init_item$1, d as ItemDescription, f as init_item_description, i as init_root, l as ItemLabel, n as init_trigger$1, o as init_popup, r as Root, s as Item$1, t as Trigger$1, u as init_item_label } from "./trigger-BIPvD-kF.js";
import { a as Root$1, i as init_label, n as init_description, o as init_root$1, r as Label, t as Description } from "./description-CUmrhcFD.js";
import { n as init_details, t as Details } from "./details-C9NFzqFD.js";
//#region ../packages/ui/build-module/form/primitives/select/group.mjs
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
var import_jsx_runtime$5, STYLE_HASH_ATTRIBUTE$2, item_popup_default$2, Group;
function init_group() {
	return (init_group = __esmMin((() => {
		init_SelectGroup();
		init_clsx();
		init_react();
		import_jsx_runtime$5 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("4a8985fb02", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--_wp-ui-item-popup-max-width,var(--available-width)));min-width:var(--anchor-width)}.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}._6083938dff06df34__is-width-available,._7c9f1b268b013f02__is-width-content,.b9a9946a395ccad8__is-width-anchor{--_wp-ui-item-popup-max-width:var(--available-width)}._7c9f1b268b013f02__is-width-content{width:auto}._6f31db51d79ec899__is-width-sm{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-sm,320px)}.fa45cdb5f45e57fb__is-width-md{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-md,400px)}._46a909337f6be21c__is-width-lg{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-lg,560px)}.eebcbe8f0a3b6d39__fixed-width-presets{&._46a909337f6be21c__is-width-lg,&._6f31db51d79ec899__is-width-sm,&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--_wp-ui-item-popup-max-width))}}._6083938dff06df34__is-width-available{width:var(--available-width)}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([data-disabled]){background-color:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[data-disabled]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{--_gcd-heading-color:currentColor;min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[data-disabled] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([data-disabled]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default$2 = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-available": "_6083938dff06df34__is-width-available",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"fixed-width-presets": "eebcbe8f0a3b6d39__fixed-width-presets",
			"is-align-item-with-trigger": "_101852fa256bb935__is-align-item-with-trigger",
			"list-chrome": "_2fff4e9defe85de5__list-chrome",
			"item-icon": "a3adcfd0b73ffd40__item-icon",
			"list": "f43dc7c768d7b622__list _2fff4e9defe85de5__list-chrome",
			"list-scrollable-container": "_233cd60cdb84a2ef__list-scrollable-container",
			"list-footer": "ec4db6f0122263e7__list-footer",
			"group": "b3c0d7f103fb10a2__group",
			"group-label": "_21b59380477c306c__group-label",
			"separator": "be89a1df0fe77bd2__separator",
			"item": "_684ccb7988365b4f__item",
			"is-size-small": "_38f7faff93c61958__is-size-small",
			"item-indicator-icon": "_92fbe4765dfad5ee__item-indicator-icon",
			"item-content": "_74465fc7e8ecea1a__item-content",
			"item-text": "_41f0dd875c005a48__item-text",
			"item-label": "_12335b76ada0b1f5__item-label",
			"item-description": "_160635254c702623__item-description",
			"status": "_6eb78bc92f8d7795__status",
			"empty": "_06c7ff39d2f685b9__empty"
		};
		Group = (0, import_react.forwardRef)(function UnforwardedGroup({ className, children, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(SelectGroup, {
				className: clsx(item_popup_default$2.group, className),
				ref,
				...restProps,
				children
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/group-label.mjs
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
var import_jsx_runtime$4, STYLE_HASH_ATTRIBUTE$1, item_popup_default$1, GroupLabel;
function init_group_label() {
	return (init_group_label = __esmMin((() => {
		init_SelectGroupLabel();
		init_clsx();
		init_react();
		init_text();
		import_jsx_runtime$4 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("4a8985fb02", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--_wp-ui-item-popup-max-width,var(--available-width)));min-width:var(--anchor-width)}.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}._6083938dff06df34__is-width-available,._7c9f1b268b013f02__is-width-content,.b9a9946a395ccad8__is-width-anchor{--_wp-ui-item-popup-max-width:var(--available-width)}._7c9f1b268b013f02__is-width-content{width:auto}._6f31db51d79ec899__is-width-sm{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-sm,320px)}.fa45cdb5f45e57fb__is-width-md{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-md,400px)}._46a909337f6be21c__is-width-lg{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-lg,560px)}.eebcbe8f0a3b6d39__fixed-width-presets{&._46a909337f6be21c__is-width-lg,&._6f31db51d79ec899__is-width-sm,&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--_wp-ui-item-popup-max-width))}}._6083938dff06df34__is-width-available{width:var(--available-width)}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([data-disabled]){background-color:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[data-disabled]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{--_gcd-heading-color:currentColor;min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[data-disabled] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([data-disabled]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default$1 = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-available": "_6083938dff06df34__is-width-available",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"fixed-width-presets": "eebcbe8f0a3b6d39__fixed-width-presets",
			"is-align-item-with-trigger": "_101852fa256bb935__is-align-item-with-trigger",
			"list-chrome": "_2fff4e9defe85de5__list-chrome",
			"item-icon": "a3adcfd0b73ffd40__item-icon",
			"list": "f43dc7c768d7b622__list _2fff4e9defe85de5__list-chrome",
			"list-scrollable-container": "_233cd60cdb84a2ef__list-scrollable-container",
			"list-footer": "ec4db6f0122263e7__list-footer",
			"group": "b3c0d7f103fb10a2__group",
			"group-label": "_21b59380477c306c__group-label",
			"separator": "be89a1df0fe77bd2__separator",
			"item": "_684ccb7988365b4f__item",
			"is-size-small": "_38f7faff93c61958__is-size-small",
			"item-indicator-icon": "_92fbe4765dfad5ee__item-indicator-icon",
			"item-content": "_74465fc7e8ecea1a__item-content",
			"item-text": "_41f0dd875c005a48__item-text",
			"item-label": "_12335b76ada0b1f5__item-label",
			"item-description": "_160635254c702623__item-description",
			"status": "_6eb78bc92f8d7795__status",
			"empty": "_06c7ff39d2f685b9__empty"
		};
		GroupLabel = (0, import_react.forwardRef)(function UnforwardedGroupLabel({ className, children, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(Text, {
				variant: "heading-sm",
				className: clsx(item_popup_default$1["group-label"], className),
				render: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(SelectGroupLabel, {
					ref,
					...restProps
				}),
				children
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/separator.mjs
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
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE, item_popup_default, Separator;
function init_separator() {
	return (init_separator = __esmMin((() => {
		init_SelectSeparator();
		init_clsx();
		init_react();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("4a8985fb02", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--_wp-ui-item-popup-max-width,var(--available-width)));min-width:var(--anchor-width)}.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}._6083938dff06df34__is-width-available,._7c9f1b268b013f02__is-width-content,.b9a9946a395ccad8__is-width-anchor{--_wp-ui-item-popup-max-width:var(--available-width)}._7c9f1b268b013f02__is-width-content{width:auto}._6f31db51d79ec899__is-width-sm{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-sm,320px)}.fa45cdb5f45e57fb__is-width-md{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-md,400px)}._46a909337f6be21c__is-width-lg{--_wp-ui-item-popup-max-width:var(--wpds-dimension-surface-width-lg,560px)}.eebcbe8f0a3b6d39__fixed-width-presets{&._46a909337f6be21c__is-width-lg,&._6f31db51d79ec899__is-width-sm,&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--_wp-ui-item-popup-max-width))}}._6083938dff06df34__is-width-available{width:var(--available-width)}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([data-disabled]){background-color:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[data-disabled]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{--_gcd-heading-color:currentColor;min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[data-disabled] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([data-disabled]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-available": "_6083938dff06df34__is-width-available",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"fixed-width-presets": "eebcbe8f0a3b6d39__fixed-width-presets",
			"is-align-item-with-trigger": "_101852fa256bb935__is-align-item-with-trigger",
			"list-chrome": "_2fff4e9defe85de5__list-chrome",
			"item-icon": "a3adcfd0b73ffd40__item-icon",
			"list": "f43dc7c768d7b622__list _2fff4e9defe85de5__list-chrome",
			"list-scrollable-container": "_233cd60cdb84a2ef__list-scrollable-container",
			"list-footer": "ec4db6f0122263e7__list-footer",
			"group": "b3c0d7f103fb10a2__group",
			"group-label": "_21b59380477c306c__group-label",
			"separator": "be89a1df0fe77bd2__separator",
			"item": "_684ccb7988365b4f__item",
			"is-size-small": "_38f7faff93c61958__is-size-small",
			"item-indicator-icon": "_92fbe4765dfad5ee__item-indicator-icon",
			"item-content": "_74465fc7e8ecea1a__item-content",
			"item-text": "_41f0dd875c005a48__item-text",
			"item-label": "_12335b76ada0b1f5__item-label",
			"item-description": "_160635254c702623__item-description",
			"status": "_6eb78bc92f8d7795__status",
			"empty": "_06c7ff39d2f685b9__empty"
		};
		Separator = (0, import_react.forwardRef)(function SelectSeparator$1({ className, orientation: _orientation, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(SelectSeparator, {
				ref,
				className: clsx(item_popup_default.separator, className),
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/select-control/dev-warnings.mjs
function warnSelectControlProps(items, itemToStringValue) {
	if (!itemToStringValue && items?.some((item) => item.value === "")) warning("SelectControl: empty string item values are treated as empty selections by default. Use a non-empty item value or return a non-empty string from `itemToStringValue`. Use `null` for an option that clears the selection.");
}
function init_dev_warnings() {
	return (init_dev_warnings = __esmMin((() => {
		init_build_module();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/select-control/item.mjs
var import_jsx_runtime$2, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_react();
		init_item$1();
		import_jsx_runtime$2 = require_jsx_runtime();
		Item = (0, import_react.forwardRef)(function UnforwardedItem(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Item$1, {
				ref,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/select-control/trigger.mjs
var import_jsx_runtime$1, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_react();
		init_trigger$1();
		import_jsx_runtime$1 = require_jsx_runtime();
		Trigger = (0, import_react.forwardRef)(function UnforwardedTrigger(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Trigger$1, {
				ref,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/select-control/select-control.mjs
var import_jsx_runtime, DEFAULT_TRIGGER, SelectControl$1;
function init_select_control() {
	return (init_select_control = __esmMin((() => {
		init_useRender();
		init_react();
		init_root$1(), init_label(), init_description(), init_details(), init_root(), init_popup(), init_item_label(), init_item_description();
		init_dev_warnings();
		init_item();
		init_trigger();
		import_jsx_runtime = require_jsx_runtime();
		DEFAULT_TRIGGER = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {});
		SelectControl$1 = (0, import_react.forwardRef)(function UnforwardedSelectControl({ className, children, items, label, description, details, hideLabelFromVision, placeholder, popupWidth = "content", size = "default", trigger, ...restProps }, ref) {
			warnSelectControlProps(items, restProps.itemToStringValue);
			const triggerElement = useRender({
				render: trigger ?? DEFAULT_TRIGGER,
				ref,
				props: {
					placeholder,
					size
				}
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$1, {
				className,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						hideFromVision: hideLabelFromVision,
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
						items,
						...restProps,
						children: [triggerElement, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popup, {
							width: popupWidth,
							children: children !== void 0 ? children : items?.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
								value: item,
								label: item.label,
								disabled: item.disabled,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemLabel, { children: item.label }), item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemDescription, { children: item.description }) : null]
							}, item.value ?? "null"))
						})]
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { children: description }),
					details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, { children: details })
				]
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/select-control/index.mjs
var SelectControl;
function init_select_control$1() {
	return (init_select_control$1 = __esmMin((() => {
		init_select_control();
		init_group();
		init_group_label();
		init_item_description();
		init_item_label();
		init_separator();
		init_item();
		init_trigger();
		Trigger.displayName = "SelectControl.Trigger";
		Group.displayName = "SelectControl.Group";
		GroupLabel.displayName = "SelectControl.GroupLabel";
		Item.displayName = "SelectControl.Item";
		ItemLabel.displayName = "SelectControl.ItemLabel";
		ItemDescription.displayName = "SelectControl.ItemDescription";
		SelectControl = Object.assign(SelectControl$1, {
			/**
			* The trigger button, passed through the `trigger` prop to customize
			* its props while retaining the control's label and selected content.
			*/
			Trigger,
			/**
			* Groups related items together with an associated label rendered by
			* `SelectControl.GroupLabel`.
			*/
			Group,
			/**
			* Renders a label for a `SelectControl.Group`.
			*/
			GroupLabel,
			/**
			* An item rendered inside a `SelectControl` popup.
			*/
			Item,
			/**
			* The primary label of a select item.
			*/
			ItemLabel,
			/**
			* Supplementary content that describes a select item via
			* `aria-describedby`.
			*/
			ItemDescription,
			/**
			* Renders a visual separator between items or groups.
			*/
			Separator
		});
	})))();
}
//#endregion
export { init_select_control$1 as n, SelectControl as t };
