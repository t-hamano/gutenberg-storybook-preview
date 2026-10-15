import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { S as init_ComboboxInput, _ as ComboboxCollection, c as init_ComboboxPopup, d as ComboboxPortal, f as init_ComboboxPortal, g as init_ComboboxList, h as ComboboxList, l as ComboboxPositioner, n as init_ComboboxEmpty, s as ComboboxPopup, t as ComboboxEmpty, u as init_ComboboxPositioner, v as init_ComboboxCollection, x as ComboboxInput } from "./ComboboxEmpty-a6JwtoZy.js";
import { i as init_AutocompleteRoot, n as init_AutocompleteItem, r as AutocompleteRoot, t as AutocompleteItem } from "./AutocompleteItem-lwRe05DO.js";
import { n as init_ComboboxTrigger, t as ComboboxTrigger } from "./ComboboxTrigger-BP1WrHCt.js";
import { n as init_ComboboxValue, t as ComboboxValue } from "./ComboboxValue-5D00nSXL.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
import { n as init_text, t as Text } from "./text-DdbcQl-E.js";
import { n as init_icon, t as Icon } from "./icon-TYj7I5OY.js";
import { t as chevron_down_default } from "./chevron-down-BHqt2Nym.js";
import { a as init_item_content, i as init_constants, o as useItemContent, r as ITEM_POPUP_POSITIONER_PROPS } from "./use-popup-pointer-highlight-C6k1Mzf0.js";
import { i as renderSlotWithChildren, n as init_direction_provider, r as init_render_slot_with_children, t as DirectionProvider } from "./direction-provider-Dwcq5thF.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
import { a as Popup$1, i as init_trigger$1, n as init_root$1, o as init_popup$1, r as Trigger$1, t as Root$1 } from "./root-eBr7kd_E.js";
import { n as init_provider, t as Provider } from "./provider-DL05HTLK.js";
import { l as InputLayout, u as init_input_layout } from "./details-BzSbJHpt.js";
import { n as init_input$1, t as Input$1 } from "./input-C_665Drh.js";
import { C as useKeyboardHighlight, S as init_keyboard_highlight_context, _ as Empty$1, a as ListBody$1, b as init_collection$1, c as init_list$1, d as ForwardedItemLabel$1, f as init_item_label$1, g as init_input$2, h as Input$2, i as init_popup$2, l as Item$1, n as init_root$2, o as init_list_body$1, r as Popup$2, s as List$1, t as Root$2, u as init_item$1, v as init_empty$1, w as useKeyboardHighlightState, x as KeyboardHighlightContext, y as Collection$1 } from "./root-C-i2gKB8.js";
import { a as Root$3, c as init_popup$3, d as ItemLabel, f as init_item_label$2, i as init_trigger$2, l as Item$2, m as init_item_popup, n as init_select_control, o as init_root$3, p as getItemPopupWidthClassName, r as Trigger$2, s as Popup$3, t as SelectControl, u as init_item$2 } from "./select-control-DQuK87zk.js";
import { a as Root$4, c as init_popup$4, i as init_title, n as init_trigger$3, o as init_root$4, r as Title, s as Popup$4, t as Trigger$3 } from "./trigger-CfUMcnXY.js";
import { n as button_default, r as init_button } from "./button-Bj8SgySP.js";
import { n as popover_default, t as init_popover } from "./popover-U8QQZ1i9.js";
import { n as modal_default, t as init_modal } from "./modal-D2f2ti_d.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
import { n as init_with_wp_compat_overlay_slot, t as WithWpCompatOverlaySlot } from "./with-wp-compat-overlay-slot-Dr8mwubV.js";
//#region ../packages/ui/build-module/form/primitives/autocomplete/collection.mjs
function Collection({ children, ...restProps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(ComboboxCollection, {
		...restProps,
		children
	});
}
var import_jsx_runtime$11;
function init_collection() {
	return (init_collection = __esmMin((() => {
		init_ComboboxCollection();
		import_jsx_runtime$11 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/empty.mjs
function getRuntime$8() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$8(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$8(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$8}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$8) === hash) return true;
	return false;
}
function injectStyle$8(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$8();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$8(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$8, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$8(targetDocument) {
	const runtime = getRuntime$8();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$8(targetDocument, hash, css);
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
function registerStyle$8(hash, css) {
	const runtime = getRuntime$8();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$8(targetDocument, hash, css);
}
var import_jsx_runtime$10, STYLE_HASH_ATTRIBUTE$8, item_popup_default$6, Empty;
function init_empty() {
	return (init_empty = __esmMin((() => {
		init_ComboboxEmpty();
		init_clsx();
		init_react();
		import_jsx_runtime$10 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$8 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$8("f981416766", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}._234b520016b4e56f__popup:not([data-pointer-highlight]) ._684ccb7988365b4f__item[data-highlighted]:focus-visible,._684ccb7988365b4f__item[data-highlighted][data-keyboard-highlight]{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
		item_popup_default$6 = {
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
		Empty = (0, import_react.forwardRef)(function UnforwardedEmpty({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(ComboboxEmpty, {
				className: clsx(item_popup_default$6.empty, className),
				ref,
				...restProps
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/input.mjs
var import_jsx_runtime$9, DEFAULT_RENDER, Input;
function init_input() {
	return (init_input = __esmMin((() => {
		init_ComboboxInput();
		init_mergeProps();
		init_react();
		init_input$1();
		init_keyboard_highlight_context();
		import_jsx_runtime$9 = require_jsx_runtime();
		DEFAULT_RENDER = (props) => /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(Input$1, { ...props });
		Input = (0, import_react.forwardRef)(function UnforwardedInput({ render = DEFAULT_RENDER, ...restProps }, ref) {
			const { onInputFocusChange, onPointerHighlight } = useKeyboardHighlight();
			return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(ComboboxInput, {
				ref,
				render,
				...mergeProps({
					onFocusCapture: () => onInputFocusChange(true),
					onBlurCapture: () => onInputFocusChange(false),
					onPointerDownCapture: onPointerHighlight
				}, restProps)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/item-description.mjs
function getRuntime$7() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$7(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$7(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$7}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$7) === hash) return true;
	return false;
}
function injectStyle$7(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$7();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$7(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$7, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$7(targetDocument) {
	const runtime = getRuntime$7();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$7(targetDocument, hash, css);
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
function registerStyle$7(hash, css) {
	const runtime = getRuntime$7();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$7(targetDocument, hash, css);
}
var import_jsx_runtime$8, STYLE_HASH_ATTRIBUTE$7, item_popup_default$5, ITEM_DESCRIPTION_DIRECT_CHILD, ForwardedItemDescription;
function init_item_description() {
	return (init_item_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		import_jsx_runtime$8 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$7 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$7("f981416766", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}._234b520016b4e56f__popup:not([data-pointer-highlight]) ._684ccb7988365b4f__item[data-highlighted]:focus-visible,._684ccb7988365b4f__item[data-highlighted][data-keyboard-highlight]{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
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
		ITEM_DESCRIPTION_DIRECT_CHILD = /* @__PURE__ */ Symbol();
		ForwardedItemDescription = (0, import_react.forwardRef)(function ItemDescription(props, ref) {
			const { className, validationToken, ...restProps } = props;
			if (validationToken !== ITEM_DESCRIPTION_DIRECT_CHILD) throw new Error("Autocomplete.ItemDescription: Missing direct autocomplete item parent. Render <Autocomplete.ItemDescription> as a direct child of <Autocomplete.Item>.");
			return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(Text, {
				ref,
				variant: "body-sm",
				className: clsx(item_popup_default$5["item-description"], className),
				...restProps
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/item-label.mjs
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
var import_jsx_runtime$7, STYLE_HASH_ATTRIBUTE$6, item_popup_default$4, ForwardedItemLabel;
function init_item_label() {
	return (init_item_label = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		import_jsx_runtime$7 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$6 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$6("f981416766", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}._234b520016b4e56f__popup:not([data-pointer-highlight]) ._684ccb7988365b4f__item[data-highlighted]:focus-visible,._684ccb7988365b4f__item[data-highlighted][data-keyboard-highlight]{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
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
		ForwardedItemLabel = (0, import_react.forwardRef)(function ItemLabel({ className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, {
				ref,
				variant: "body-md",
				className: clsx(item_popup_default$4["item-label"], className),
				...restProps
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/item.mjs
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
var import_jsx_runtime$6, STYLE_HASH_ATTRIBUTE$5, global_css_defense_default, item_popup_default$3, resets_default$1, ITEM_CONTENT_COMPONENTS, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_AutocompleteItem();
		init_clsx();
		init_react();
		init_item_content();
		init_item_description();
		init_item_label();
		init_keyboard_highlight_context();
		import_jsx_runtime$6 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$5 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$5("e8e31009f5", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}");
		global_css_defense_default = {
			"button": "_6defc79820e382c6__button",
			"input": "d2cff2e5dea83bd1__input",
			"textarea": "_547d86373d02e108__textarea",
			"div": "_8c15fd0ed9f28ba4__div",
			"p": "_43cec3e1eec1066d__p",
			"heading": "e97669c6d9a38497__heading",
			"a": "_2c0831b0499dbd6e__a",
			"ol": "c59a0ebebd71fa4a__ol",
			"li": "_46b5cb0c8e24e8c9__li"
		};
		if (typeof process === "undefined" || false) registerStyle$5("f981416766", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}._234b520016b4e56f__popup:not([data-pointer-highlight]) ._684ccb7988365b4f__item[data-highlighted]:focus-visible,._684ccb7988365b4f__item[data-highlighted][data-keyboard-highlight]{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
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
		if (typeof process === "undefined" || false) registerStyle$5("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default$1 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		ITEM_CONTENT_COMPONENTS = {
			Label: ForwardedItemLabel,
			Description: ForwardedItemDescription,
			descriptionValidationToken: ITEM_DESCRIPTION_DIRECT_CHILD,
			validationMessage: "Autocomplete.ItemLabel must be the first direct child of every autocomplete item, followed only by Autocomplete.ItemDescription components."
		};
		Item = (0, import_react.forwardRef)(function UnforwardedItem({ className, children, "aria-describedby": ariaDescribedBy, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...restProps }, ref) {
			const { keyboardHighlight } = useKeyboardHighlight();
			const { contentChildren, itemAriaProps } = useItemContent(children, ITEM_CONTENT_COMPONENTS, {
				"aria-describedby": ariaDescribedBy,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(AutocompleteItem, {
				"data-keyboard-highlight": keyboardHighlight ? "" : void 0,
				className: clsx(global_css_defense_default.div, resets_default$1["box-sizing"], item_popup_default$3.item, className),
				ref,
				...itemAriaProps,
				...restProps,
				children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("div", {
					className: item_popup_default$3["item-text"],
					children: contentChildren
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/list.mjs
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
var import_jsx_runtime$5, STYLE_HASH_ATTRIBUTE$4, item_popup_default$2, List;
function init_list() {
	return (init_list = __esmMin((() => {
		init_ComboboxList();
		init_mergeProps();
		init_clsx();
		init_react();
		init_keyboard_highlight_context();
		import_jsx_runtime$5 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$4 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$4("f981416766", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}._234b520016b4e56f__popup:not([data-pointer-highlight]) ._684ccb7988365b4f__item[data-highlighted]:focus-visible,._684ccb7988365b4f__item[data-highlighted][data-keyboard-highlight]{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
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
		List = (0, import_react.forwardRef)(function UnforwardedList({ className, ...restProps }, ref) {
			const { onPointerHighlight } = useKeyboardHighlight();
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ComboboxList, {
				className: clsx(item_popup_default$2.list, className),
				ref,
				...mergeProps({
					onPointerMoveCapture: onPointerHighlight,
					onPointerDownCapture: onPointerHighlight
				}, restProps)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/list-body.mjs
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
var STYLE_HASH_ATTRIBUTE$3, item_popup_default$1, ListBody;
function init_list_body() {
	return (init_list_body = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_react();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("f981416766", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}._234b520016b4e56f__popup:not([data-pointer-highlight]) ._684ccb7988365b4f__item[data-highlighted]:focus-visible,._684ccb7988365b4f__item[data-highlighted][data-keyboard-highlight]{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
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
		ListBody = (0, import_react.forwardRef)(function UnforwardedListBody({ render, ...props }, ref) {
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: item_popup_default$1["list-scrollable-container"] }, props)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/portal.mjs
var import_jsx_runtime$4, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_ComboboxPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_runtime$4 = require_jsx_runtime();
		Portal = (0, import_react.forwardRef)(function AutocompletePortal({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(ComboboxPortal, {
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/positioner.mjs
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
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$2, resets_default, style_default, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_ComboboxPositioner();
		init_react();
		init_constants();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$2("e61eb95308", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._8eb0a29484225eea__positioner{z-index:var(--wp-ui-autocomplete-z-index,initial)}}}");
		style_default = { "positioner": "_8eb0a29484225eea__positioner" };
		Positioner = (0, import_react.forwardRef)(function AutocompletePositioner({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ComboboxPositioner, {
				...ITEM_POPUP_POSITIONER_PROPS,
				...props,
				ref,
				className: clsx(resets_default["box-sizing"], style_default.positioner, className)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/popup.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, item_popup_default, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_ComboboxPopup();
		init_clsx();
		init_react();
		init_render_slot_with_children();
		init_item_popup();
		init_portal();
		init_positioner();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("f981416766", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._234b520016b4e56f__popup{--wp-ui-popup-padding:var(--wpds-dimension-padding-xs,4px);--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);display:grid;grid-template-areas:\"header\" \"status\" \"main\";grid-template-rows:auto auto minmax(0,1fr);max-height:min(var(--available-height),480px,60dvh);max-width:var(--available-width);min-width:var(--anchor-width);&.b9a9946a395ccad8__is-width-anchor{width:var(--anchor-width)}&._7c9f1b268b013f02__is-width-content{width:auto}&._6f31db51d79ec899__is-width-sm{width:min(var(--available-width),var(--wpds-dimension-surface-width-sm,320px))}&.fa45cdb5f45e57fb__is-width-md{width:min(var(--available-width),var(--wpds-dimension-surface-width-md,400px))}&._46a909337f6be21c__is-width-lg{width:min(var(--available-width),var(--wpds-dimension-surface-width-lg,560px))}&._6083938dff06df34__is-width-available{width:var(--available-width)}}._101852fa256bb935__is-align-item-with-trigger ._234b520016b4e56f__popup{max-height:none}._2fff4e9defe85de5__list-chrome{--_wp-ui-popup-selection-offset:0px;color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);grid-area:main;line-height:var(--wpds-typography-line-height-sm,20px);&:has(.a3adcfd0b73ffd40__item-icon){--_wp-ui-popup-selection-offset:calc(var(--wpds-dimension-size-2xs, 16px) + var(--wpds-dimension-gap-xs, 4px) - var(--wpds-dimension-padding-xs, 4px))}}.f43dc7c768d7b622__list{display:grid;grid-template-areas:\"scrollable\" \"footer\";grid-template-rows:minmax(0,1fr) auto}._233cd60cdb84a2ef__list-scrollable-container{grid-area:scrollable;overflow-block:auto;overscroll-behavior:contain;scroll-padding-block:var(--wp-ui-popup-padding);&:not(:empty){padding-block:var(--wp-ui-popup-padding)}}.ec4db6f0122263e7__list-footer{grid-area:footer;padding-block:var(--wp-ui-popup-padding);._233cd60cdb84a2ef__list-scrollable-container:not(:empty)+&{border-block-start:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb)}}.b3c0d7f103fb10a2__group:not(:first-child){margin-block-start:var(--wpds-dimension-gap-sm,8px)}._21b59380477c306c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;min-height:var(--wpds-dimension-size-sm,24px);padding-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));padding-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset))}.be89a1df0fe77bd2__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline-end:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px));margin-inline-start:calc(var(--wp-ui-popup-padding) + var(--wpds-dimension-padding-sm, 8px) + var(--_wp-ui-popup-selection-offset));@media (forced-colors:active){background-color:CanvasText}}._684ccb7988365b4f__item{--wp-ui-popup-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:var(--wpds-dimension-padding-xs,4px);align-items:center;border-radius:var(--wpds-border-radius-sm,2px);display:flex;gap:var(--wpds-dimension-gap-xs,4px);justify-content:flex-start;margin-inline:var(--wp-ui-popup-padding);min-height:var(--wp-ui-popup-item-height);min-width:0;overflow-wrap:anywhere;padding-block:var(--wp-ui-popup-item-padding-block);padding-inline:var(--wp-ui-popup-item-padding-inline);user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&:has(>.a3adcfd0b73ffd40__item-icon){align-content:center;align-items:start;display:grid;grid-template-columns:auto minmax(0,1fr);padding-inline-start:calc(var(--wp-ui-popup-item-padding-inline) - var(--wpds-dimension-padding-xs, 4px))}&._38f7faff93c61958__is-size-small{--wp-ui-popup-item-height:var(--wpds-dimension-size-sm,24px);--wp-ui-popup-item-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-popup-item-padding-block:2px}&:not([data-selected]){._92fbe4765dfad5ee__item-indicator-icon{opacity:0}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}._234b520016b4e56f__popup:not([data-pointer-highlight]) ._684ccb7988365b4f__item[data-highlighted]:focus-visible,._684ccb7988365b4f__item[data-highlighted][data-keyboard-highlight]{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}.a3adcfd0b73ffd40__item-icon{align-items:center;display:flex;height:var(--wpds-typography-line-height-sm,20px);pointer-events:none}._92fbe4765dfad5ee__item-indicator-icon{translate:0 1px}._74465fc7e8ecea1a__item-content{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);min-width:0}._41f0dd875c005a48__item-text{display:flex;flex-direction:column;min-width:0}._12335b76ada0b1f5__item-label{min-width:0}._160635254c702623__item-description{color:var(--wpds-color-foreground-content-neutral-weak,#707070)}._684ccb7988365b4f__item[aria-disabled=true] ._160635254c702623__item-description,._684ccb7988365b4f__item[data-highlighted]:not([aria-disabled=true]) ._160635254c702623__item-description{--_gcd-heading-color:currentColor;color:inherit}._6eb78bc92f8d7795__status{grid-area:status}._06c7ff39d2f685b9__empty:not(:empty){grid-area:main}._06c7ff39d2f685b9__empty:not(:empty),._6eb78bc92f8d7795__status:not(:empty):not(:has([data-visually-hidden])){--wp-ui-popup-empty-min-height:var(--wpds-dimension-size-md,32px);--wp-ui-popup-empty-padding-inline:var(--wpds-dimension-padding-md,12px);align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px);min-height:var(--wp-ui-popup-empty-min-height);padding-inline:var(--wp-ui-popup-empty-padding-inline)}}}");
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
		Popup = (0, import_react.forwardRef)(function UnforwardedPopup({ className, portal, positioner, width, ...restProps }, ref) {
			const popupContent = /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ComboboxPopup, {
				ref,
				className: clsx(item_popup_default.popup, getItemPopupWidthClassName(width), className),
				...restProps
			});
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Positioner, {}), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Portal, {}), positionedPopup);
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/context.mjs
var AutocompleteGridContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		AutocompleteGridContext = (0, import_react.createContext)(false);
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/autocomplete/root.mjs
var import_jsx_runtime$1, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_AutocompleteRoot();
		init_direction_provider();
		init_context();
		init_keyboard_highlight_context();
		import_jsx_runtime$1 = require_jsx_runtime();
		Root = function Root2(props) {
			const { contextValue, onOpenChange, onInputValueChange, onItemHighlighted } = useKeyboardHighlightState({
				onOpenChange: props.onOpenChange,
				onInputValueChange: props.onValueChange,
				onItemHighlighted: props.onItemHighlighted
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(AutocompleteGridContext.Provider, {
				value: Boolean(props.grid),
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(KeyboardHighlightContext.Provider, {
					value: contextValue,
					children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(AutocompleteRoot, {
						...props,
						onOpenChange,
						onValueChange: onInputValueChange,
						onItemHighlighted
					})
				}) })
			});
		};
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/combobox/trigger.mjs
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
		init_ComboboxTrigger(), init_ComboboxValue();
		init_clsx();
		init_react();
		init_build_module();
		init_build_module$1();
		init_icon();
		init_input_layout();
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
		Trigger = (0, import_react.forwardRef)(function UnforwardedTrigger({ className, children, size = "default", placeholder = __("Select"), ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLayout, {
				className: clsx(focus_module_default["outset-ring--focus-within-except-active"], select_trigger_default["trigger-wrapper"], className),
				size,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComboboxTrigger, {
					...restProps,
					className: select_trigger_default.trigger,
					"data-can-disable-input-layout": true,
					ref,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: select_trigger_default["trigger-value"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxValue, {
							placeholder,
							children
						})
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
//#region stories/playground/wp-compat-overlay-slot.story.jsx
function UiPopoverFixture() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		style: { marginTop: "1rem" },
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$4, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$3, { children: "Open `@wordpress/ui` Popover" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$4, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Popover from `@wordpress/ui`" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 6
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The popover and its nested autocomplete should appear above the host overlay." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 6
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				items: autocompleteItems,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					placeholder: "Search nested items",
					"aria-label": "Autocomplete inside @wordpress/ui Popover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 7
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No matching items." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 8
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: item,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 13
					}, this)
				}, item.id, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 12
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 10
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 8
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 6
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 5
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, selectItems, autocompleteItems, inputWrapperStyle, wp_compat_overlay_slot_story_default, InsideComponentsModal, InsideComponentsPopover;
function init_wp_compat_overlay_slot_story() {
	return (init_wp_compat_overlay_slot_story = __esmMin((() => {
		init_modal(), init_popover(), init_button();
		init_react();
		init_root(), init_input(), init_popup(), init_empty(), init_list(), init_list_body(), init_collection(), init_item(), init_item_label(), init_root$2(), init_trigger(), init_popup$2(), init_input$2(), init_empty$1(), init_list$1(), init_list_body$1(), init_collection$1(), init_item$1(), init_item_label$1(), init_root$4(), init_trigger$3(), init_popup$4(), init_title(), init_root$3(), init_trigger$2(), init_popup$3(), init_item$2(), init_item_label$2(), init_select_control(), init_provider(), init_root$1(), init_trigger$1(), init_popup$1();
		init_with_wp_compat_overlay_slot();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/playground/wp-compat-overlay-slot.story.jsx";
		selectItems = [
			{
				value: "option-1",
				label: "Option 1"
			},
			{
				value: "option-2",
				label: "Option 2"
			},
			{
				value: "option-3",
				label: "Option 3"
			}
		];
		autocompleteItems = [
			{
				id: "1",
				value: "Item 1"
			},
			{
				id: "2",
				value: "Item 2"
			},
			{
				id: "3",
				value: "Item 3"
			}
		];
		inputWrapperStyle = { padding: "var(--wpds-dimension-padding-sm, 8px) var(--wpds-dimension-padding-sm, 8px) var(--wpds-dimension-padding-xs, 4px)" };
		wp_compat_overlay_slot_story_default = {
			title: "Playground/Debug fixtures/WP Compat Overlay Slot",
			decorators: [WithWpCompatOverlaySlot]
		};
		InsideComponentsModal = {
			name: "Overlays inside @wordpress/components Modal",
			render: function Render() {
				const [isOpen, setIsOpen] = (0, import_react.useState)(false);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
					variant: "primary",
					onClick: () => setIsOpen(true),
					__next40pxDefaultSize: true,
					children: "Open `@wordpress/components` Modal"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 5
				}, this), isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(modal_default, {
					title: "Modal from @wordpress/components",
					onRequestClose: () => setIsOpen(false),
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The overlays below are from `@wordpress/ui`. Their popups should render above this modal, not behind it." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, {
							delay: 0,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$1, { children: "Hover me" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 9
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, { children: "@wordpress/ui Tooltip — should sit above the Modal" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 9
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UiPopoverFixture, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { marginTop: "1rem" },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$3, {
								items: selectItems,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$2, { "aria-label": "Select primitive" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 9
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$3, { children: selectItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item$2, {
									value: item,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 12
									}, this)
								}, item.value, false, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 11
								}, this)) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 9
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { marginTop: "1rem" },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$2, {
								defaultValue: selectItems[0],
								items: selectItems,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Combobox primitive" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 9
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$2, { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										style: inputWrapperStyle,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input$2, { placeholder: "Search" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 146,
											columnNumber: 11
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 10
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty$1, { children: "No results found." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 10
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection$1, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item$1, {
										value: item,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel$1, { children: item.label }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 159,
											columnNumber: 15
										}, this)
									}, item.value, false, {
										fileName: _jsxFileName,
										lineNumber: 155,
										columnNumber: 14
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 153,
										columnNumber: 12
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 11
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 151,
										columnNumber: 10
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 144,
									columnNumber: 9
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { marginTop: "1rem" },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
								label: "SelectControl",
								items: selectItems
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 172,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 171,
							columnNumber: 7
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: { marginTop: "1rem" },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
								items: autocompleteItems,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									placeholder: "Search items",
									"aria-label": "Autocomplete primitive"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 9
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No matching items." }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 185,
									columnNumber: 10
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
									value: item,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 196,
										columnNumber: 15
									}, this)
								}, item.id, false, {
									fileName: _jsxFileName,
									lineNumber: 192,
									columnNumber: 14
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 190,
									columnNumber: 12
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 11
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 10
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 184,
									columnNumber: 9
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 8
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 7
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 6
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 4
				}, this);
			}
		};
		InsideComponentsPopover = {
			name: "Overlays inside @wordpress/components Popover",
			render: function Render() {
				const [anchor, setAnchor] = (0, import_react.useState)(null);
				const [isOpen, setIsOpen] = (0, import_react.useState)(false);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
					ref: setAnchor,
					variant: "primary",
					onClick: () => setIsOpen((v) => !v),
					__next40pxDefaultSize: true,
					children: "Toggle `@wordpress/components` Popover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 5
				}, this), isOpen && anchor && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(popover_default, {
					anchor,
					onClose: () => setIsOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							padding: "1rem",
							maxWidth: "20rem"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The overlays below are from `@wordpress/ui`. Their popups should render above this popover." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 235,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, {
								delay: 0,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$1, { children: "Hover me" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 241,
									columnNumber: 10
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, { children: "@wordpress/ui Tooltip — should sit above the Popover" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 242,
									columnNumber: 10
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 9
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 239,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UiPopoverFixture, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 249,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: { marginTop: "1rem" },
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$3, {
									items: selectItems,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$2, { "aria-label": "Select primitive" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 253,
										columnNumber: 10
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$3, { children: selectItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item$2, {
										value: item,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: item.label }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 260,
											columnNumber: 13
										}, this)
									}, item.value, false, {
										fileName: _jsxFileName,
										lineNumber: 256,
										columnNumber: 12
									}, this)) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 254,
										columnNumber: 10
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 252,
									columnNumber: 9
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 251,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: { marginTop: "1rem" },
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$2, {
									defaultValue: selectItems[0],
									items: selectItems,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, { "aria-label": "Combobox primitive" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 274,
										columnNumber: 10
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$2, { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											style: inputWrapperStyle,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input$2, { placeholder: "Search" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 277,
												columnNumber: 12
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 276,
											columnNumber: 11
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty$1, { children: "No results found." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 279,
											columnNumber: 11
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody$1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection$1, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item$1, {
											value: item,
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel$1, { children: item.label }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 290,
												columnNumber: 16
											}, this)
										}, item.value, false, {
											fileName: _jsxFileName,
											lineNumber: 286,
											columnNumber: 15
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 284,
											columnNumber: 13
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 283,
											columnNumber: 12
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 282,
											columnNumber: 11
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 275,
										columnNumber: 10
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 270,
									columnNumber: 9
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 269,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: { marginTop: "1rem" },
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
									label: "SelectControl",
									items: selectItems
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 303,
									columnNumber: 9
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 302,
								columnNumber: 8
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								style: { marginTop: "1rem" },
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
									items: autocompleteItems,
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										placeholder: "Search items",
										"aria-label": "Autocomplete primitive"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 311,
										columnNumber: 10
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Empty, { children: "No matching items." }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 316,
										columnNumber: 11
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collection, { children: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
										value: item,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedItemLabel, { children: item.value }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 327,
											columnNumber: 16
										}, this)
									}, item.id, false, {
										fileName: _jsxFileName,
										lineNumber: 323,
										columnNumber: 15
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 321,
										columnNumber: 13
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 320,
										columnNumber: 12
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 319,
										columnNumber: 11
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 315,
										columnNumber: 10
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 310,
									columnNumber: 9
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 309,
								columnNumber: 8
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 234,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 230,
					columnNumber: 6
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 220,
					columnNumber: 4
				}, this);
			}
		};
		InsideComponentsModal.parameters = {
			...InsideComponentsModal.parameters,
			docs: {
				...InsideComponentsModal.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Overlays inside @wordpress/components Modal',\n  render: function Render() {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n                <Button variant=\"primary\" onClick={() => setIsOpen(true)} __next40pxDefaultSize>\n                    Open `@wordpress/components` Modal\n                </Button>\n                {isOpen && <Modal title=\"Modal from @wordpress/components\" onRequestClose={() => setIsOpen(false)}>\n                        <p>\n                            The overlays below are from `@wordpress/ui`. Their\n                            popups should render above this modal, not behind\n                            it.\n                        </p>\n                        <Tooltip.Provider delay={0}>\n                            <Tooltip.Root>\n                                <Tooltip.Trigger>Hover me</Tooltip.Trigger>\n                                <Tooltip.Popup>\n                                    @wordpress/ui Tooltip — should sit above the\n                                    Modal\n                                </Tooltip.Popup>\n                            </Tooltip.Root>\n                        </Tooltip.Provider>\n\n                        <UiPopoverFixture />\n\n                        <div style={{\n          marginTop: '1rem'\n        }}>\n                            <Select.Root items={selectItems}>\n                                <Select.Trigger aria-label=\"Select primitive\" />\n                                <Select.Popup>\n                                    {selectItems.map(item => <Select.Item key={item.value} value={item}>\n                                            <Select.ItemLabel>\n                                                {item.label}\n                                            </Select.ItemLabel>\n                                        </Select.Item>)}\n                                </Select.Popup>\n                            </Select.Root>\n                        </div>\n\n                        <div style={{\n          marginTop: '1rem'\n        }}>\n                            <Combobox.Root defaultValue={selectItems[0]} items={selectItems}>\n                                <Combobox.Trigger aria-label=\"Combobox primitive\" />\n                                <Combobox.Popup>\n                                    <div style={inputWrapperStyle}>\n                                        <Combobox.Input placeholder=\"Search\" />\n                                    </div>\n                                    <Combobox.Empty>\n                                        No results found.\n                                    </Combobox.Empty>\n                                    <Combobox.List>\n                                        <Combobox.ListBody>\n                                            <Combobox.Collection>\n                                                {item => <Combobox.Item key={item.value} value={item}>\n                                                        <Combobox.ItemLabel>\n                                                            {item.label}\n                                                        </Combobox.ItemLabel>\n                                                    </Combobox.Item>}\n                                            </Combobox.Collection>\n                                        </Combobox.ListBody>\n                                    </Combobox.List>\n                                </Combobox.Popup>\n                            </Combobox.Root>\n                        </div>\n\n                        <div style={{\n          marginTop: '1rem'\n        }}>\n                            <SelectControl label=\"SelectControl\" items={selectItems} />\n                        </div>\n\n                        <div style={{\n          marginTop: '1rem'\n        }}>\n                            <Autocomplete.Root items={autocompleteItems}>\n                                <Autocomplete.Input placeholder=\"Search items\" aria-label=\"Autocomplete primitive\" />\n                                <Autocomplete.Popup>\n                                    <Autocomplete.Empty>\n                                        No matching items.\n                                    </Autocomplete.Empty>\n                                    <Autocomplete.List>\n                                        <Autocomplete.ListBody>\n                                            <Autocomplete.Collection>\n                                                {item => <Autocomplete.Item key={item.id} value={item}>\n                                                        <Autocomplete.ItemLabel>\n                                                            {item.value}\n                                                        </Autocomplete.ItemLabel>\n                                                    </Autocomplete.Item>}\n                                            </Autocomplete.Collection>\n                                        </Autocomplete.ListBody>\n                                    </Autocomplete.List>\n                                </Autocomplete.Popup>\n                            </Autocomplete.Root>\n                        </div>\n                    </Modal>}\n            </>;\n  }\n}",
					...InsideComponentsModal.parameters?.docs?.source
				}
			}
		};
		InsideComponentsPopover.parameters = {
			...InsideComponentsPopover.parameters,
			docs: {
				...InsideComponentsPopover.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Overlays inside @wordpress/components Popover',\n  render: function Render() {\n    const [anchor, setAnchor] = useState(null);\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n                <Button ref={setAnchor} variant=\"primary\" onClick={() => setIsOpen(v => !v)} __next40pxDefaultSize>\n                    Toggle `@wordpress/components` Popover\n                </Button>\n                {isOpen && anchor && <WCPopover anchor={anchor} onClose={() => setIsOpen(false)}>\n                        <div style={{\n          padding: '1rem',\n          maxWidth: '20rem'\n        }}>\n                            <p>\n                                The overlays below are from `@wordpress/ui`.\n                                Their popups should render above this popover.\n                            </p>\n                            <Tooltip.Provider delay={0}>\n                                <Tooltip.Root>\n                                    <Tooltip.Trigger>Hover me</Tooltip.Trigger>\n                                    <Tooltip.Popup>\n                                        @wordpress/ui Tooltip — should sit above\n                                        the Popover\n                                    </Tooltip.Popup>\n                                </Tooltip.Root>\n                            </Tooltip.Provider>\n\n                            <UiPopoverFixture />\n\n                            <div style={{\n            marginTop: '1rem'\n          }}>\n                                <Select.Root items={selectItems}>\n                                    <Select.Trigger aria-label=\"Select primitive\" />\n                                    <Select.Popup>\n                                        {selectItems.map(item => <Select.Item key={item.value} value={item}>\n                                                <Select.ItemLabel>\n                                                    {item.label}\n                                                </Select.ItemLabel>\n                                            </Select.Item>)}\n                                    </Select.Popup>\n                                </Select.Root>\n                            </div>\n\n                            <div style={{\n            marginTop: '1rem'\n          }}>\n                                <Combobox.Root defaultValue={selectItems[0]} items={selectItems}>\n                                    <Combobox.Trigger aria-label=\"Combobox primitive\" />\n                                    <Combobox.Popup>\n                                        <div style={inputWrapperStyle}>\n                                            <Combobox.Input placeholder=\"Search\" />\n                                        </div>\n                                        <Combobox.Empty>\n                                            No results found.\n                                        </Combobox.Empty>\n                                        <Combobox.List>\n                                            <Combobox.ListBody>\n                                                <Combobox.Collection>\n                                                    {item => <Combobox.Item key={item.value} value={item}>\n                                                            <Combobox.ItemLabel>\n                                                                {item.label}\n                                                            </Combobox.ItemLabel>\n                                                        </Combobox.Item>}\n                                                </Combobox.Collection>\n                                            </Combobox.ListBody>\n                                        </Combobox.List>\n                                    </Combobox.Popup>\n                                </Combobox.Root>\n                            </div>\n\n                            <div style={{\n            marginTop: '1rem'\n          }}>\n                                <SelectControl label=\"SelectControl\" items={selectItems} />\n                            </div>\n\n                            <div style={{\n            marginTop: '1rem'\n          }}>\n                                <Autocomplete.Root items={autocompleteItems}>\n                                    <Autocomplete.Input placeholder=\"Search items\" aria-label=\"Autocomplete primitive\" />\n                                    <Autocomplete.Popup>\n                                        <Autocomplete.Empty>\n                                            No matching items.\n                                        </Autocomplete.Empty>\n                                        <Autocomplete.List>\n                                            <Autocomplete.ListBody>\n                                                <Autocomplete.Collection>\n                                                    {item => <Autocomplete.Item key={item.id} value={item}>\n                                                            <Autocomplete.ItemLabel>\n                                                                {item.value}\n                                                            </Autocomplete.ItemLabel>\n                                                        </Autocomplete.Item>}\n                                                </Autocomplete.Collection>\n                                            </Autocomplete.ListBody>\n                                        </Autocomplete.List>\n                                    </Autocomplete.Popup>\n                                </Autocomplete.Root>\n                            </div>\n                        </div>\n                    </WCPopover>}\n            </>;\n  }\n}",
					...InsideComponentsPopover.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_wp_compat_overlay_slot_story();
export { InsideComponentsModal, InsideComponentsPopover, wp_compat_overlay_slot_story_default as default };
