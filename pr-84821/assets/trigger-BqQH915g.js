import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_icon, t as Icon } from "./icon-5WS0jz-X.js";
import { _ as SelectRoot, a as SelectList, c as init_SelectPopup, d as SelectPortal, f as init_SelectPortal, g as init_SelectTrigger, h as SelectTrigger, i as init_SelectItem, l as SelectPositioner, m as init_SelectValue, n as init_SelectItemText, o as init_SelectList, p as SelectValue, r as SelectItem, s as SelectPopup, t as SelectItemText, u as init_SelectPositioner, v as init_SelectRoot } from "./SelectItemText-B9ZepdY2.js";
import { n as init_text, t as Text } from "./text-BWRv8yVx.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { t as chevron_down_default } from "./chevron-down-tfDAaIiw.js";
import { i as useItemContent, n as init_constants, r as init_item_content, t as ITEM_POPUP_POSITIONER_PROPS } from "./constants-BCpNYm17.js";
import { i as renderSlotWithChildren, n as init_direction_provider, r as init_render_slot_with_children, t as DirectionProvider } from "./direction-provider-BxH2DiMW.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-DD7wWo-p.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/build-module/utils/css/item-popup.mjs
function getRuntime$6() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$6(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$6(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$6}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$6) === hash) return true;
	return false;
}
function injectStyle$6(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$6();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$6(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$6, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$6(targetDocument) {
	const runtime = getRuntime$6();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$6(targetDocument, hash, css);
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
function registerStyle$6(hash, css) {
	const runtime = getRuntime$6();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$6(targetDocument, hash, css);
}
function getItemPopupWidthClassName(width = "anchor") {
	switch (width) {
		case "available": return item_popup_default$5["is-width-available"];
		case "content": return item_popup_default$5["is-width-content"];
		case "lg": return item_popup_default$5["is-width-lg"];
		case "md": return item_popup_default$5["is-width-md"];
		case "sm": return item_popup_default$5["is-width-sm"];
		case "anchor": return item_popup_default$5["is-width-anchor"];
		default: return false;
	}
}
var STYLE_HASH_ATTRIBUTE$6, item_popup_default$5;
function init_item_popup() {
	return (init_item_popup = __esmMin((() => {
		STYLE_HASH_ATTRIBUTE$6 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$6("e25d67a230", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default$5 = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"is-width-available": "_6083938dff06df34__is-width-available",
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
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/item-description.mjs
function getRuntime$5() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$5(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$5(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$5}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$5) === hash) return true;
	return false;
}
function injectStyle$5(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$5();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$5(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$5, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$5(targetDocument) {
	const runtime = getRuntime$5();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$5(targetDocument, hash, css);
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
function registerStyle$5(hash, css) {
	const runtime = getRuntime$5();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$5(targetDocument, hash, css);
}
var import_jsx_runtime$7, STYLE_HASH_ATTRIBUTE$5, item_popup_default$4, ITEM_DESCRIPTION_DIRECT_CHILD, ItemDescription;
function init_item_description() {
	return (init_item_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		import_jsx_runtime$7 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$5 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$5("e25d67a230", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default$4 = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"is-width-available": "_6083938dff06df34__is-width-available",
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
		ITEM_DESCRIPTION_DIRECT_CHILD = /* @__PURE__ */ Symbol();
		ItemDescription = (0, import_react.forwardRef)(function UnforwardedItemDescription(props, ref) {
			const { className, validationToken, ...restProps } = props;
			if (validationToken !== ITEM_DESCRIPTION_DIRECT_CHILD) throw new Error("Select.ItemDescription: Missing direct select item parent. Render <Select.ItemDescription> as a direct child of <Select.Item>.");
			return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, {
				ref,
				variant: "body-sm",
				className: clsx(item_popup_default$4["item-description"], className),
				...restProps
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/item-label.mjs
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
var import_jsx_runtime$6, STYLE_HASH_ATTRIBUTE$4, item_popup_default$3, ItemLabel;
function init_item_label() {
	return (init_item_label = __esmMin((() => {
		init_SelectItemText();
		init_clsx();
		init_react();
		init_text();
		import_jsx_runtime$6 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$4 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$4("e25d67a230", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default$3 = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"is-width-available": "_6083938dff06df34__is-width-available",
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
		ItemLabel = (0, import_react.forwardRef)(function UnforwardedItemLabel({ children, className, render, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(Text, {
				ref,
				variant: "body-md",
				render: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(SelectItemText, { render }),
				className: clsx(item_popup_default$3["item-label"], className),
				...restProps,
				children
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/item.mjs
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
var import_jsx_runtime$5, STYLE_HASH_ATTRIBUTE$3, global_css_defense_default, item_popup_default$2, resets_default$1, ITEM_CONTENT_COMPONENTS, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_SelectItem();
		init_clsx();
		init_react();
		init_build_module$1();
		init_item_content();
		init_icon();
		init_item_description();
		init_item_label();
		import_jsx_runtime$5 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("abb19c3171", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}[role=treeitem] span._400bf7ee0c6061a9__span[aria-hidden]{display:var(--_gcd-span-display,inline);font-family:var(--_gcd-span-font-family,inherit);font-size:var(--_gcd-span-font-size,inherit);line-height:var(--_gcd-span-line-height,1);pointer-events:var(--_gcd-span-pointer-events,auto);position:var(--_gcd-span-position,static)}");
		global_css_defense_default = {
			"button": "_6defc79820e382c6__button",
			"input": "d2cff2e5dea83bd1__input",
			"textarea": "_547d86373d02e108__textarea",
			"div": "_8c15fd0ed9f28ba4__div",
			"p": "_43cec3e1eec1066d__p",
			"heading": "e97669c6d9a38497__heading",
			"a": "_2c0831b0499dbd6e__a",
			"ol": "c59a0ebebd71fa4a__ol",
			"li": "_46b5cb0c8e24e8c9__li",
			"span": "_400bf7ee0c6061a9__span"
		};
		if (typeof process === "undefined" || false) registerStyle$3("e25d67a230", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default$2 = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"is-width-available": "_6083938dff06df34__is-width-available",
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
		if (typeof process === "undefined" || false) registerStyle$3("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default$1 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		ITEM_CONTENT_COMPONENTS = {
			Label: ItemLabel,
			Description: ItemDescription,
			descriptionValidationToken: ITEM_DESCRIPTION_DIRECT_CHILD,
			validationMessage: "Select.ItemLabel must be the first direct child of every select item, followed only by Select.ItemDescription components."
		};
		Item = (0, import_react.forwardRef)(function UnforwardedItem({ className, value, size = "default", children, "aria-describedby": ariaDescribedBy, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...restProps }, ref) {
			const { contentChildren, itemAriaProps } = useItemContent(children, ITEM_CONTENT_COMPONENTS, {
				"aria-describedby": ariaDescribedBy,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(SelectItem, {
				className: clsx(global_css_defense_default.div, resets_default$1["box-sizing"], item_popup_default$2.item, size === "small" && item_popup_default$2["is-size-small"], className),
				value,
				ref,
				...itemAriaProps,
				...restProps,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
					className: item_popup_default$2["item-icon"],
					children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Icon, {
						icon: check_default,
						className: item_popup_default$2["item-indicator-icon"],
						size: 16
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("div", {
					className: item_popup_default$2["item-text"],
					children: contentChildren
				})]
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/portal.mjs
var import_jsx_runtime$4, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_SelectPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_runtime$4 = require_jsx_runtime();
		Portal = (0, import_react.forwardRef)(function SelectPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(SelectPortal, {
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/positioner.mjs
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
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$2, resets_default, item_popup_default$1, style_default$1, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_SelectPositioner();
		init_react();
		init_constants();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$2("e25d67a230", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default$1 = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"is-width-available": "_6083938dff06df34__is-width-available",
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
		if (typeof process === "undefined" || false) registerStyle$2("aaac8c315e", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._0ab863136fb95530__positioner{z-index:var(--wp-ui-select-z-index,initial)}.a9ab07efb9ef413f__list{display:block;min-block-size:0;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}}}");
		style_default$1 = {
			"positioner": "_0ab863136fb95530__positioner",
			"list": "a9ab07efb9ef413f__list"
		};
		Positioner = (0, import_react.forwardRef)(function SelectPositioner$1({ className, alignItemWithTrigger = true, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(SelectPositioner, {
				...ITEM_POPUP_POSITIONER_PROPS,
				...props,
				alignItemWithTrigger,
				ref,
				className: clsx(resets_default["box-sizing"], style_default$1.positioner, alignItemWithTrigger && item_popup_default$1["is-align-item-with-trigger"], className)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/popup.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, item_popup_default, style_default, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_SelectPopup(), init_SelectList();
		init_clsx();
		init_react();
		init_portal();
		init_positioner();
		init_render_slot_with_children();
		init_item_popup();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("e25d67a230", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger[data-side=none] ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default = {
			"popup": "_234b520016b4e56f__popup _380b81b8f79fb10f__dropdown-motion",
			"is-width-anchor": "b9a9946a395ccad8__is-width-anchor",
			"is-width-content": "_7c9f1b268b013f02__is-width-content",
			"is-width-sm": "_6f31db51d79ec899__is-width-sm",
			"is-width-md": "fa45cdb5f45e57fb__is-width-md",
			"is-width-lg": "_46a909337f6be21c__is-width-lg",
			"is-width-available": "_6083938dff06df34__is-width-available",
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
		if (typeof process === "undefined" || false) registerStyle$1("aaac8c315e", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._0ab863136fb95530__positioner{z-index:var(--wp-ui-select-z-index,initial)}.a9ab07efb9ef413f__list{display:block;min-block-size:0;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}}}");
		style_default = {
			"positioner": "_0ab863136fb95530__positioner",
			"list": "a9ab07efb9ef413f__list"
		};
		Popup = (0, import_react.forwardRef)(function UnforwardedPopup({ className, portal, positioner, width, children, ...restProps }, ref) {
			const popupContent = /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SelectPopup, {
				ref,
				className: clsx(item_popup_default.popup, getItemPopupWidthClassName(width), className),
				...restProps,
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SelectList, {
					className: clsx(item_popup_default["list-chrome"], style_default.list),
					children
				})
			});
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Positioner, {}), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Portal, {}), positionedPopup);
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/root.mjs
function Root(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SelectRoot, { ...props }) });
}
var import_jsx_runtime$1;
function init_root() {
	return (init_root = __esmMin((() => {
		init_SelectRoot();
		init_direction_provider();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/select/trigger.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, focus_module_default, select_trigger_default, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_SelectTrigger(), init_SelectValue();
		init_clsx();
		init_react();
		init_build_module$1();
		init_build_module();
		init_input_layout();
		init_icon();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("7c3267f794", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{.af79fb116edb0dd7__outset-ring--focus:focus,.dfcfdc28396e5d98__outset-ring--focus-visible:focus-visible,.e5cd9ee879f6403a__outset-ring--focus-within:focus-within{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within,.abc777e9713fa711__outset-ring--focus-except-active:focus{outline:none}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.abc777e9713fa711__outset-ring--focus-except-active:focus:not(:active){--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}}");
		focus_module_default = {
			"outset-ring--focus": "af79fb116edb0dd7__outset-ring--focus",
			"outset-ring--focus-visible": "dfcfdc28396e5d98__outset-ring--focus-visible",
			"outset-ring--focus-within": "e5cd9ee879f6403a__outset-ring--focus-within",
			"outset-ring--focus-except-active": "abc777e9713fa711__outset-ring--focus-except-active",
			"outset-ring--focus-within-except-active": "_3c9f5ee9fc9c136d__outset-ring--focus-within-except-active"
		};
		if (typeof process === "undefined" || false) registerStyle("8fc4b25e27", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._6e4e0445ef20426b__trigger-wrapper{&.fa98c865fb77e675__is-minimal{width:fit-content}}._7893295e3f6d1af7__trigger{align-items:center;background-color:transparent;border:none;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);display:flex;font-family:inherit;font-size:inherit;gap:var(--wpds-dimension-gap-xs,4px);justify-content:space-between;line-height:1.4;padding-block:4px;padding-inline-end:calc(var(--wp-ui-input-layout-padding-inline) - 4px);padding-inline-start:var(--wp-ui-input-layout-padding-inline);text-align:start;user-select:none;width:100%;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&.fa98c865fb77e675__is-minimal{width:auto}&:focus{outline:none}&[data-disabled]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}}.e760c9339965ce84__trigger-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;._7893295e3f6d1af7__trigger[data-placeholder]:not([data-disabled]) &{color:var(--wpds-color-foreground-interactive-neutral-weak,#707070)}}._308bc63e43681f99__trigger-caret{flex:0 0 auto}}}");
		select_trigger_default = {
			"trigger-wrapper": "_6e4e0445ef20426b__trigger-wrapper",
			"is-minimal": "fa98c865fb77e675__is-minimal",
			"trigger": "_7893295e3f6d1af7__trigger",
			"trigger-value": "e760c9339965ce84__trigger-value",
			"trigger-caret": "_308bc63e43681f99__trigger-caret"
		};
		Trigger = (0, import_react.forwardRef)(function UnforwardedTrigger({ className, size, variant, children, placeholder = __("Select"), ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLayout, {
				className: clsx(focus_module_default["outset-ring--focus-within-except-active"], select_trigger_default["trigger-wrapper"], variant === "minimal" && select_trigger_default["is-minimal"], className),
				size,
				isBorderless: variant === "minimal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
					...restProps,
					className: clsx(select_trigger_default.trigger, variant === "minimal" && select_trigger_default["is-minimal"]),
					"data-can-disable-input-layout": true,
					ref,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
						placeholder,
						className: select_trigger_default["trigger-value"],
						children
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: select_trigger_default["trigger-caret"],
						icon: chevron_down_default,
						size: 18
					})]
				})
			});
		});
	})))();
}
//#endregion
export { Popup as a, init_item as c, ItemDescription as d, init_item_description as f, init_root as i, ItemLabel as l, init_item_popup as m, init_trigger as n, init_popup as o, getItemPopupWidthClassName as p, Root as r, Item as s, Trigger as t, init_item_label as u };
