import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { _ as MenuItem, a as init_MenuRoot, c as MenuPositioner, d as init_MenuPortal, f as MenuPopup, l as init_MenuPositioner, n as init_MenuTrigger, p as init_MenuPopup, r as MenuRoot, t as MenuTrigger, u as MenuPortal, v as init_MenuItem } from "./MenuTrigger-ClsOtY5u.js";
import { n as init_text, t as Text } from "./text-C4929NGP.js";
import { i as useKeyboardShortcutProps, n as KeyboardShortcutDisplay, r as init_keyboard_shortcut, t as KeyboardShortcutDescription } from "./keyboard-shortcut-C_zXjoAg.js";
import { _ as getItemPopupWidthClassName, b as useItemContent$1, g as init_constants, h as ITEM_POPUP_POSITIONER_PROPS, v as init_item_popup, y as init_item_content } from "./trigger-BIPvD-kF.js";
import { i as renderSlotWithChildren, n as init_direction_provider, r as init_render_slot_with_children, t as DirectionProvider } from "./direction-provider-BxH2DiMW.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
import { n as useIframeDismissalBridge, t as init_use_iframe_dismissal_bridge } from "./use-iframe-dismissal-bridge-BX5lYU-S.js";
//#region ../packages/ui/build-module/menu/context.mjs
var MenuContext, useMenuContext, MenuGroupContext, useMenuGroupContext, MenuItemContentContext, useMenuItemContentContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		MenuContext = (0, import_react.createContext)({ isSubmenu: false });
		useMenuContext = () => (0, import_react.useContext)(MenuContext);
		MenuGroupContext = (0, import_react.createContext)(null);
		useMenuGroupContext = () => (0, import_react.useContext)(MenuGroupContext);
		MenuItemContentContext = (0, import_react.createContext)(null);
		useMenuItemContentContext = () => (0, import_react.useContext)(MenuItemContentContext);
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/item-description.mjs
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
var import_jsx_runtime$7, STYLE_HASH_ATTRIBUTE$4, style_default$4, ITEM_DESCRIPTION_DIRECT_CHILD, ItemDescription;
function init_item_description() {
	return (init_item_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		import_jsx_runtime$7 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$4 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$4("9c0873d3be", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.d61e2d85c0ee0699__positioner{z-index:var(--wp-ui-menu-z-index,initial)}._34e81249f419a5a5__popup{--wp-ui-menu-popup-padding:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-min-width:160px;--wp-ui-menu-max-width:var(--_wp-ui-item-popup-max-width,var(--available-width));--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-item-padding-inline-end:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-group-head-padding-base:var(--wpds-dimension-padding-sm,8px);--wp-ui-menu-group-head-padding-inline:var(--_wp-ui-menu-group-head-padding-base);--wp-ui-menu-selection-indicator-track-size:0px;--wp-ui-menu-selection-indicator-size:var(--wpds-dimension-size-2xs,16px);--wp-ui-menu-selection-indicator-gap:0px;--_wp-ui-menu-elevation-md:0px 2px 3px 0px #0000000d,0px 4px 5px 0px #0000000a,0px 12px 12px 0px #00000008,0px 16px 16px 0px #00000005;background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-menu-elevation-md);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--wp-ui-menu-max-width));min-width:min(var(--available-width),var(--wp-ui-menu-min-width));outline:none;overflow-block:auto;overscroll-behavior:none;padding:var(--wp-ui-menu-popup-padding);scroll-padding:var(--wp-ui-menu-popup-padding);&:has(._42313b48c5459be3__item-selection-indicator){--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-selection-indicator-track-size:var(--wpds-dimension-size-2xs,16px)}}._33f07ab17005471d__list{--_wp-ui-menu-item-label-line-height:var(--wpds-typography-line-height-sm,20px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--_wp-ui-menu-item-label-line-height)}._33f07ab17005471d__list,.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{--wp-ui-menu-group-prefix-gap:0px;display:grid;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];min-width:0}.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{grid-column:1/-1}._33f07ab17005471d__list:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.e05914e1005d7c2e__radio-group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.f11085533c0056b0__group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix){--wp-ui-menu-group-prefix-gap:var(--wpds-dimension-gap-xs,4px)}._4a0fd085d76fd23c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);grid-column:prefix-start/content-end;line-height:var(--wpds-typography-line-height-xs,16px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));min-height:var(--wpds-dimension-size-sm,24px);min-width:0;padding-block:var(--wpds-dimension-padding-xs,4px);text-transform:uppercase}.bfc11368eadf3b39__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);grid-column:prefix-start/content-end;height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));@media (forced-colors:active){background-color:CanvasText}}._5c913bce0d8bb0d6__item{--wp-ui-menu-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-menu-item-padding-block:var(--wpds-dimension-padding-xs,4px);--_gcd-a-border-radius:var(--wpds-border-radius-sm,2px);align-content:center;align-items:start;border-radius:var(--wpds-border-radius-sm,2px);display:grid;gap:0;grid-column:1/-1;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];justify-content:stretch;min-height:var(--wp-ui-menu-item-height);min-width:0;padding-block:var(--wp-ui-menu-item-padding-block);scroll-margin:var(--wp-ui-menu-popup-padding);text-decoration:none;user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&[href]{cursor:pointer}@supports (grid-template-columns:subgrid){grid-template-columns:subgrid}&[data-popup-open]:not([data-highlighted],[data-disabled],[aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-xs,1px) solid GrayText}}&[data-highlighted]:not([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);background-color:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);outline:none;@media (forced-colors:active){--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&:is([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){--_gcd-a-color:GrayText;color:GrayText}}}._42313b48c5459be3__item-selection-indicator,._64924ecabf65a5d6__item-prefix,.af879698ede76757__item-content{grid-row:1}._42313b48c5459be3__item-selection-indicator{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;grid-column:selection-start/selection-end;height:var(--_wp-ui-menu-item-label-line-height);justify-content:center;justify-self:center;margin-inline-end:var(--wpds-dimension-gap-xs,4px);pointer-events:none;width:var(--wp-ui-menu-selection-indicator-size);&[data-unchecked]{opacity:0}}._99c5bd141cbf516f__checkbox-selection-icon{translate:0 1px}._59aa9b3b3a651148__radio-selection-icon{fill:currentColor;height:var(--wpds-dimension-size-2xs,16px);width:var(--wpds-dimension-size-2xs,16px)}._64924ecabf65a5d6__item-prefix{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:prefix-start/prefix-end;justify-content:center;min-width:0}.a836378335a4cbf1__prefix-icon{align-self:flex-start;flex-shrink:0;margin-block-start:calc((var(--_wp-ui-menu-item-label-line-height) - var(--_wp-ui-menu-prefix-icon-size))/2)}.af879698ede76757__item-content{align-items:center;align-self:stretch;box-sizing:border-box;display:grid;grid-column:prefix-start/content-end;grid-template-columns:[label-start] minmax(0,1fr) [label-end suffix-start] auto [suffix-end shortcut-start] auto [shortcut-end trailing-start] auto [trailing-end];min-width:0;pointer-events:none;&._5c211f9edfe0ed66__has-prefix{grid-column:content-start/content-end}}._76f3e69cf2228139__item-descriptions{display:flex;flex-direction:column;grid-column:prefix-start/content-end;grid-row:2;min-width:0;padding-block-end:var(--wpds-dimension-padding-xs,4px);pointer-events:none}._5ed41da4abcf8958__item-label{--_gcd-heading-color:currentColor;--_gcd-p-line-height:var(--_wp-ui-menu-item-label-line-height);color:inherit;grid-column:label-start/label-end;line-height:var(--_wp-ui-menu-item-label-line-height);min-width:0;overflow-wrap:anywhere}.fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral-weak,#707070);color:var(--wpds-color-foreground-content-neutral-weak,#707070);overflow-wrap:anywhere}.af879698ede76757__item-content>._091406749ed93e6e__item-suffix{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:suffix-start/suffix-end;margin-inline-start:var(--wpds-dimension-gap-md,12px)}.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{grid-column:shortcut-start/shortcut-end}._06be17a91bf434a0__item-trailing,.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{color:var(--wpds-color-foreground-content-neutral-weak,#707070);margin-inline-start:var(--wpds-dimension-gap-md,12px)}._06be17a91bf434a0__item-trailing{align-items:center;display:flex;grid-column:trailing-start/trailing-end}._5ed41da4abcf8958__item-label+:is(._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){margin-inline-start:var(--wpds-dimension-gap-xl,24px)}._23630f40071a29ff__item-shortcut+._06be17a91bf434a0__item-trailing{margin-inline-start:var(--wpds-dimension-gap-xs,4px)}.b78aec79bf93eba0__submenu-chevron{margin-inline-end:calc(var(--wpds-dimension-gap-sm, 8px)*-1)}.b78aec79bf93eba0__submenu-chevron:dir(rtl){transform:rotate(180deg)}._60da3b6f9718cf76__external-link-indicator{display:inline-block;font-weight:var(--wpds-typography-font-weight-default,400);line-height:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px);text-decoration:none}._60da3b6f9718cf76__external-link-indicator:after{content:\"\\2197\"}._60da3b6f9718cf76__external-link-indicator:dir(rtl):after{content:\"\\2196\"}._5c913bce0d8bb0d6__item:is([data-highlighted],[data-disabled],[aria-disabled=true]) ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item:is([data-highlighted],[data-popup-open],[data-disabled],[aria-disabled=true]) :is(.fa88c9f1a96a4c5a__item-description,._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){--_gcd-heading-color:currentColor;color:inherit}}}");
		style_default$4 = {
			"positioner": "d61e2d85c0ee0699__positioner",
			"popup": "_34e81249f419a5a5__popup",
			"item-selection-indicator": "_42313b48c5459be3__item-selection-indicator",
			"is-root": "_087a537b24fee6a1__is-root _380b81b8f79fb10f__dropdown-motion",
			"is-submenu": "_6d3b567f6289bdc2__is-submenu _7f344b94e270e039__dropdown-motion--fade-only",
			"list": "_33f07ab17005471d__list",
			"group": "f11085533c0056b0__group",
			"radio-group": "e05914e1005d7c2e__radio-group",
			"item": "_5c913bce0d8bb0d6__item",
			"item-prefix": "_64924ecabf65a5d6__item-prefix",
			"group-label": "_4a0fd085d76fd23c__group-label",
			"separator": "bfc11368eadf3b39__separator",
			"item-content": "af879698ede76757__item-content",
			"checkbox-selection-icon": "_99c5bd141cbf516f__checkbox-selection-icon",
			"radio-selection-icon": "_59aa9b3b3a651148__radio-selection-icon",
			"prefix-icon": "a836378335a4cbf1__prefix-icon",
			"has-prefix": "_5c211f9edfe0ed66__has-prefix",
			"item-descriptions": "_76f3e69cf2228139__item-descriptions",
			"item-label": "_5ed41da4abcf8958__item-label",
			"item-description": "fa88c9f1a96a4c5a__item-description",
			"item-suffix": "_091406749ed93e6e__item-suffix",
			"item-shortcut": "_23630f40071a29ff__item-shortcut",
			"item-trailing": "_06be17a91bf434a0__item-trailing",
			"submenu-chevron": "b78aec79bf93eba0__submenu-chevron",
			"external-link-indicator": "_60da3b6f9718cf76__external-link-indicator"
		};
		ITEM_DESCRIPTION_DIRECT_CHILD = /* @__PURE__ */ Symbol();
		ItemDescription = (0, import_react.forwardRef)(function MenuItemDescription(props, ref) {
			const { className, id, validationToken, ...restProps } = props;
			if (validationToken !== ITEM_DESCRIPTION_DIRECT_CHILD) throw new Error("Menu.ItemDescription: Missing direct menu item parent. Render <Menu.ItemDescription> as a direct child of a menu item.");
			return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(Text, {
				ref,
				variant: "body-sm",
				...restProps,
				id,
				className: clsx(style_default$4["item-description"], className)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/item-label.mjs
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
var import_jsx_runtime$6, STYLE_HASH_ATTRIBUTE$3, style_default$3, ItemLabel;
function init_item_label() {
	return (init_item_label = __esmMin((() => {
		init_clsx();
		init_react();
		init_context();
		init_text();
		import_jsx_runtime$6 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("9c0873d3be", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.d61e2d85c0ee0699__positioner{z-index:var(--wp-ui-menu-z-index,initial)}._34e81249f419a5a5__popup{--wp-ui-menu-popup-padding:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-min-width:160px;--wp-ui-menu-max-width:var(--_wp-ui-item-popup-max-width,var(--available-width));--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-item-padding-inline-end:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-group-head-padding-base:var(--wpds-dimension-padding-sm,8px);--wp-ui-menu-group-head-padding-inline:var(--_wp-ui-menu-group-head-padding-base);--wp-ui-menu-selection-indicator-track-size:0px;--wp-ui-menu-selection-indicator-size:var(--wpds-dimension-size-2xs,16px);--wp-ui-menu-selection-indicator-gap:0px;--_wp-ui-menu-elevation-md:0px 2px 3px 0px #0000000d,0px 4px 5px 0px #0000000a,0px 12px 12px 0px #00000008,0px 16px 16px 0px #00000005;background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-menu-elevation-md);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--wp-ui-menu-max-width));min-width:min(var(--available-width),var(--wp-ui-menu-min-width));outline:none;overflow-block:auto;overscroll-behavior:none;padding:var(--wp-ui-menu-popup-padding);scroll-padding:var(--wp-ui-menu-popup-padding);&:has(._42313b48c5459be3__item-selection-indicator){--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-selection-indicator-track-size:var(--wpds-dimension-size-2xs,16px)}}._33f07ab17005471d__list{--_wp-ui-menu-item-label-line-height:var(--wpds-typography-line-height-sm,20px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--_wp-ui-menu-item-label-line-height)}._33f07ab17005471d__list,.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{--wp-ui-menu-group-prefix-gap:0px;display:grid;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];min-width:0}.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{grid-column:1/-1}._33f07ab17005471d__list:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.e05914e1005d7c2e__radio-group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.f11085533c0056b0__group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix){--wp-ui-menu-group-prefix-gap:var(--wpds-dimension-gap-xs,4px)}._4a0fd085d76fd23c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);grid-column:prefix-start/content-end;line-height:var(--wpds-typography-line-height-xs,16px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));min-height:var(--wpds-dimension-size-sm,24px);min-width:0;padding-block:var(--wpds-dimension-padding-xs,4px);text-transform:uppercase}.bfc11368eadf3b39__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);grid-column:prefix-start/content-end;height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));@media (forced-colors:active){background-color:CanvasText}}._5c913bce0d8bb0d6__item{--wp-ui-menu-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-menu-item-padding-block:var(--wpds-dimension-padding-xs,4px);--_gcd-a-border-radius:var(--wpds-border-radius-sm,2px);align-content:center;align-items:start;border-radius:var(--wpds-border-radius-sm,2px);display:grid;gap:0;grid-column:1/-1;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];justify-content:stretch;min-height:var(--wp-ui-menu-item-height);min-width:0;padding-block:var(--wp-ui-menu-item-padding-block);scroll-margin:var(--wp-ui-menu-popup-padding);text-decoration:none;user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&[href]{cursor:pointer}@supports (grid-template-columns:subgrid){grid-template-columns:subgrid}&[data-popup-open]:not([data-highlighted],[data-disabled],[aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-xs,1px) solid GrayText}}&[data-highlighted]:not([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);background-color:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);outline:none;@media (forced-colors:active){--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&:is([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){--_gcd-a-color:GrayText;color:GrayText}}}._42313b48c5459be3__item-selection-indicator,._64924ecabf65a5d6__item-prefix,.af879698ede76757__item-content{grid-row:1}._42313b48c5459be3__item-selection-indicator{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;grid-column:selection-start/selection-end;height:var(--_wp-ui-menu-item-label-line-height);justify-content:center;justify-self:center;margin-inline-end:var(--wpds-dimension-gap-xs,4px);pointer-events:none;width:var(--wp-ui-menu-selection-indicator-size);&[data-unchecked]{opacity:0}}._99c5bd141cbf516f__checkbox-selection-icon{translate:0 1px}._59aa9b3b3a651148__radio-selection-icon{fill:currentColor;height:var(--wpds-dimension-size-2xs,16px);width:var(--wpds-dimension-size-2xs,16px)}._64924ecabf65a5d6__item-prefix{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:prefix-start/prefix-end;justify-content:center;min-width:0}.a836378335a4cbf1__prefix-icon{align-self:flex-start;flex-shrink:0;margin-block-start:calc((var(--_wp-ui-menu-item-label-line-height) - var(--_wp-ui-menu-prefix-icon-size))/2)}.af879698ede76757__item-content{align-items:center;align-self:stretch;box-sizing:border-box;display:grid;grid-column:prefix-start/content-end;grid-template-columns:[label-start] minmax(0,1fr) [label-end suffix-start] auto [suffix-end shortcut-start] auto [shortcut-end trailing-start] auto [trailing-end];min-width:0;pointer-events:none;&._5c211f9edfe0ed66__has-prefix{grid-column:content-start/content-end}}._76f3e69cf2228139__item-descriptions{display:flex;flex-direction:column;grid-column:prefix-start/content-end;grid-row:2;min-width:0;padding-block-end:var(--wpds-dimension-padding-xs,4px);pointer-events:none}._5ed41da4abcf8958__item-label{--_gcd-heading-color:currentColor;--_gcd-p-line-height:var(--_wp-ui-menu-item-label-line-height);color:inherit;grid-column:label-start/label-end;line-height:var(--_wp-ui-menu-item-label-line-height);min-width:0;overflow-wrap:anywhere}.fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral-weak,#707070);color:var(--wpds-color-foreground-content-neutral-weak,#707070);overflow-wrap:anywhere}.af879698ede76757__item-content>._091406749ed93e6e__item-suffix{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:suffix-start/suffix-end;margin-inline-start:var(--wpds-dimension-gap-md,12px)}.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{grid-column:shortcut-start/shortcut-end}._06be17a91bf434a0__item-trailing,.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{color:var(--wpds-color-foreground-content-neutral-weak,#707070);margin-inline-start:var(--wpds-dimension-gap-md,12px)}._06be17a91bf434a0__item-trailing{align-items:center;display:flex;grid-column:trailing-start/trailing-end}._5ed41da4abcf8958__item-label+:is(._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){margin-inline-start:var(--wpds-dimension-gap-xl,24px)}._23630f40071a29ff__item-shortcut+._06be17a91bf434a0__item-trailing{margin-inline-start:var(--wpds-dimension-gap-xs,4px)}.b78aec79bf93eba0__submenu-chevron{margin-inline-end:calc(var(--wpds-dimension-gap-sm, 8px)*-1)}.b78aec79bf93eba0__submenu-chevron:dir(rtl){transform:rotate(180deg)}._60da3b6f9718cf76__external-link-indicator{display:inline-block;font-weight:var(--wpds-typography-font-weight-default,400);line-height:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px);text-decoration:none}._60da3b6f9718cf76__external-link-indicator:after{content:\"\\2197\"}._60da3b6f9718cf76__external-link-indicator:dir(rtl):after{content:\"\\2196\"}._5c913bce0d8bb0d6__item:is([data-highlighted],[data-disabled],[aria-disabled=true]) ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item:is([data-highlighted],[data-popup-open],[data-disabled],[aria-disabled=true]) :is(.fa88c9f1a96a4c5a__item-description,._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){--_gcd-heading-color:currentColor;color:inherit}}}");
		style_default$3 = {
			"positioner": "d61e2d85c0ee0699__positioner",
			"popup": "_34e81249f419a5a5__popup",
			"item-selection-indicator": "_42313b48c5459be3__item-selection-indicator",
			"is-root": "_087a537b24fee6a1__is-root _380b81b8f79fb10f__dropdown-motion",
			"is-submenu": "_6d3b567f6289bdc2__is-submenu _7f344b94e270e039__dropdown-motion--fade-only",
			"list": "_33f07ab17005471d__list",
			"group": "f11085533c0056b0__group",
			"radio-group": "e05914e1005d7c2e__radio-group",
			"item": "_5c913bce0d8bb0d6__item",
			"item-prefix": "_64924ecabf65a5d6__item-prefix",
			"group-label": "_4a0fd085d76fd23c__group-label",
			"separator": "bfc11368eadf3b39__separator",
			"item-content": "af879698ede76757__item-content",
			"checkbox-selection-icon": "_99c5bd141cbf516f__checkbox-selection-icon",
			"radio-selection-icon": "_59aa9b3b3a651148__radio-selection-icon",
			"prefix-icon": "a836378335a4cbf1__prefix-icon",
			"has-prefix": "_5c211f9edfe0ed66__has-prefix",
			"item-descriptions": "_76f3e69cf2228139__item-descriptions",
			"item-label": "_5ed41da4abcf8958__item-label",
			"item-description": "fa88c9f1a96a4c5a__item-description",
			"item-suffix": "_091406749ed93e6e__item-suffix",
			"item-shortcut": "_23630f40071a29ff__item-shortcut",
			"item-trailing": "_06be17a91bf434a0__item-trailing",
			"submenu-chevron": "b78aec79bf93eba0__submenu-chevron",
			"external-link-indicator": "_60da3b6f9718cf76__external-link-indicator"
		};
		ItemLabel = (0, import_react.forwardRef)(function MenuItemLabel({ children, className, id, ...props }, ref) {
			const itemContentContext = useMenuItemContentContext();
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(Text, {
				ref,
				variant: "body-md",
				...props,
				id: id ?? itemContentContext?.labelId,
				className: clsx(style_default$3["item-label"], className),
				children: [children, itemContentContext?.labelTrailing]
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/item.mjs
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
function useItemContent(children, { "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, labelTrailing, shortcut }) {
	const { contentChildren, resolvedLabelId, itemAriaProps } = useItemContent$1(children, ITEM_CONTENT_COMPONENTS, {
		"aria-describedby": ariaDescribedBy,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy
	});
	const { descriptionId: shortcutDescriptionId, targetProps: shortcutAriaProps } = useKeyboardShortcutProps({
		"aria-describedby": itemAriaProps["aria-describedby"],
		"aria-keyshortcuts": ariaKeyShortcuts,
		shortcut
	});
	return {
		contentChildren,
		contentContextValue: {
			labelId: resolvedLabelId,
			labelTrailing
		},
		itemAriaProps: {
			...shortcutAriaProps,
			"aria-label": itemAriaProps["aria-label"],
			"aria-labelledby": itemAriaProps["aria-labelledby"]
		},
		shortcutDescriptionId
	};
}
function ItemContent({ children, prefix, shortcut, shortcutDescriptionId, suffix, trailing }) {
	const hasPrefix = import_react.Children.toArray(prefix).some((child) => child !== "");
	const hasSuffix = import_react.Children.toArray(suffix).some((child) => child !== "");
	const hasTrailing = import_react.Children.toArray(trailing).some((child) => child !== "");
	const [label, ...descriptions] = import_react.Children.toArray(children);
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)(import_jsx_runtime$5.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
			className: clsx(style_default$2["item-content"], hasPrefix && style_default$2["has-prefix"]),
			children: [
				label,
				hasSuffix && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Text, {
					variant: "body-sm",
					className: style_default$2["item-suffix"],
					children: suffix
				}),
				shortcut && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Text, {
					variant: "body-sm",
					className: style_default$2["item-shortcut"],
					children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(KeyboardShortcutDisplay, { shortcut })
				}),
				hasTrailing && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
					className: style_default$2["item-trailing"],
					children: trailing
				})
			]
		}),
		descriptions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
			className: style_default$2["item-descriptions"],
			children: descriptions
		}),
		hasPrefix && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("span", {
			"aria-hidden": "true",
			className: style_default$2["item-prefix"],
			children: prefix
		}),
		shortcut && shortcutDescriptionId && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(KeyboardShortcutDescription, {
			descriptionId: shortcutDescriptionId,
			shortcut
		})
	] });
}
var import_jsx_runtime$5, STYLE_HASH_ATTRIBUTE$2, global_css_defense_default, resets_default$1, style_default$2, ITEM_CONTENT_COMPONENTS, Item;
function init_item() {
	return (init_item = __esmMin((() => {
		init_MenuItem();
		init_clsx();
		init_react();
		init_keyboard_shortcut();
		init_item_content();
		init_context();
		init_item_description();
		init_item_label();
		init_text();
		import_jsx_runtime$5 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("abb19c3171", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}[role=treeitem] span._400bf7ee0c6061a9__span[aria-hidden]{display:var(--_gcd-span-display,inline);font-family:var(--_gcd-span-font-family,inherit);font-size:var(--_gcd-span-font-size,inherit);line-height:var(--_gcd-span-line-height,1);pointer-events:var(--_gcd-span-pointer-events,auto);position:var(--_gcd-span-position,static)}");
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
		if (typeof process === "undefined" || false) registerStyle$2("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default$1 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$2("9c0873d3be", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.d61e2d85c0ee0699__positioner{z-index:var(--wp-ui-menu-z-index,initial)}._34e81249f419a5a5__popup{--wp-ui-menu-popup-padding:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-min-width:160px;--wp-ui-menu-max-width:var(--_wp-ui-item-popup-max-width,var(--available-width));--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-item-padding-inline-end:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-group-head-padding-base:var(--wpds-dimension-padding-sm,8px);--wp-ui-menu-group-head-padding-inline:var(--_wp-ui-menu-group-head-padding-base);--wp-ui-menu-selection-indicator-track-size:0px;--wp-ui-menu-selection-indicator-size:var(--wpds-dimension-size-2xs,16px);--wp-ui-menu-selection-indicator-gap:0px;--_wp-ui-menu-elevation-md:0px 2px 3px 0px #0000000d,0px 4px 5px 0px #0000000a,0px 12px 12px 0px #00000008,0px 16px 16px 0px #00000005;background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-menu-elevation-md);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--wp-ui-menu-max-width));min-width:min(var(--available-width),var(--wp-ui-menu-min-width));outline:none;overflow-block:auto;overscroll-behavior:none;padding:var(--wp-ui-menu-popup-padding);scroll-padding:var(--wp-ui-menu-popup-padding);&:has(._42313b48c5459be3__item-selection-indicator){--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-selection-indicator-track-size:var(--wpds-dimension-size-2xs,16px)}}._33f07ab17005471d__list{--_wp-ui-menu-item-label-line-height:var(--wpds-typography-line-height-sm,20px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--_wp-ui-menu-item-label-line-height)}._33f07ab17005471d__list,.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{--wp-ui-menu-group-prefix-gap:0px;display:grid;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];min-width:0}.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{grid-column:1/-1}._33f07ab17005471d__list:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.e05914e1005d7c2e__radio-group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.f11085533c0056b0__group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix){--wp-ui-menu-group-prefix-gap:var(--wpds-dimension-gap-xs,4px)}._4a0fd085d76fd23c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);grid-column:prefix-start/content-end;line-height:var(--wpds-typography-line-height-xs,16px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));min-height:var(--wpds-dimension-size-sm,24px);min-width:0;padding-block:var(--wpds-dimension-padding-xs,4px);text-transform:uppercase}.bfc11368eadf3b39__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);grid-column:prefix-start/content-end;height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));@media (forced-colors:active){background-color:CanvasText}}._5c913bce0d8bb0d6__item{--wp-ui-menu-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-menu-item-padding-block:var(--wpds-dimension-padding-xs,4px);--_gcd-a-border-radius:var(--wpds-border-radius-sm,2px);align-content:center;align-items:start;border-radius:var(--wpds-border-radius-sm,2px);display:grid;gap:0;grid-column:1/-1;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];justify-content:stretch;min-height:var(--wp-ui-menu-item-height);min-width:0;padding-block:var(--wp-ui-menu-item-padding-block);scroll-margin:var(--wp-ui-menu-popup-padding);text-decoration:none;user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&[href]{cursor:pointer}@supports (grid-template-columns:subgrid){grid-template-columns:subgrid}&[data-popup-open]:not([data-highlighted],[data-disabled],[aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-xs,1px) solid GrayText}}&[data-highlighted]:not([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);background-color:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);outline:none;@media (forced-colors:active){--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&:is([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){--_gcd-a-color:GrayText;color:GrayText}}}._42313b48c5459be3__item-selection-indicator,._64924ecabf65a5d6__item-prefix,.af879698ede76757__item-content{grid-row:1}._42313b48c5459be3__item-selection-indicator{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;grid-column:selection-start/selection-end;height:var(--_wp-ui-menu-item-label-line-height);justify-content:center;justify-self:center;margin-inline-end:var(--wpds-dimension-gap-xs,4px);pointer-events:none;width:var(--wp-ui-menu-selection-indicator-size);&[data-unchecked]{opacity:0}}._99c5bd141cbf516f__checkbox-selection-icon{translate:0 1px}._59aa9b3b3a651148__radio-selection-icon{fill:currentColor;height:var(--wpds-dimension-size-2xs,16px);width:var(--wpds-dimension-size-2xs,16px)}._64924ecabf65a5d6__item-prefix{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:prefix-start/prefix-end;justify-content:center;min-width:0}.a836378335a4cbf1__prefix-icon{align-self:flex-start;flex-shrink:0;margin-block-start:calc((var(--_wp-ui-menu-item-label-line-height) - var(--_wp-ui-menu-prefix-icon-size))/2)}.af879698ede76757__item-content{align-items:center;align-self:stretch;box-sizing:border-box;display:grid;grid-column:prefix-start/content-end;grid-template-columns:[label-start] minmax(0,1fr) [label-end suffix-start] auto [suffix-end shortcut-start] auto [shortcut-end trailing-start] auto [trailing-end];min-width:0;pointer-events:none;&._5c211f9edfe0ed66__has-prefix{grid-column:content-start/content-end}}._76f3e69cf2228139__item-descriptions{display:flex;flex-direction:column;grid-column:prefix-start/content-end;grid-row:2;min-width:0;padding-block-end:var(--wpds-dimension-padding-xs,4px);pointer-events:none}._5ed41da4abcf8958__item-label{--_gcd-heading-color:currentColor;--_gcd-p-line-height:var(--_wp-ui-menu-item-label-line-height);color:inherit;grid-column:label-start/label-end;line-height:var(--_wp-ui-menu-item-label-line-height);min-width:0;overflow-wrap:anywhere}.fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral-weak,#707070);color:var(--wpds-color-foreground-content-neutral-weak,#707070);overflow-wrap:anywhere}.af879698ede76757__item-content>._091406749ed93e6e__item-suffix{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:suffix-start/suffix-end;margin-inline-start:var(--wpds-dimension-gap-md,12px)}.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{grid-column:shortcut-start/shortcut-end}._06be17a91bf434a0__item-trailing,.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{color:var(--wpds-color-foreground-content-neutral-weak,#707070);margin-inline-start:var(--wpds-dimension-gap-md,12px)}._06be17a91bf434a0__item-trailing{align-items:center;display:flex;grid-column:trailing-start/trailing-end}._5ed41da4abcf8958__item-label+:is(._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){margin-inline-start:var(--wpds-dimension-gap-xl,24px)}._23630f40071a29ff__item-shortcut+._06be17a91bf434a0__item-trailing{margin-inline-start:var(--wpds-dimension-gap-xs,4px)}.b78aec79bf93eba0__submenu-chevron{margin-inline-end:calc(var(--wpds-dimension-gap-sm, 8px)*-1)}.b78aec79bf93eba0__submenu-chevron:dir(rtl){transform:rotate(180deg)}._60da3b6f9718cf76__external-link-indicator{display:inline-block;font-weight:var(--wpds-typography-font-weight-default,400);line-height:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px);text-decoration:none}._60da3b6f9718cf76__external-link-indicator:after{content:\"\\2197\"}._60da3b6f9718cf76__external-link-indicator:dir(rtl):after{content:\"\\2196\"}._5c913bce0d8bb0d6__item:is([data-highlighted],[data-disabled],[aria-disabled=true]) ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item:is([data-highlighted],[data-popup-open],[data-disabled],[aria-disabled=true]) :is(.fa88c9f1a96a4c5a__item-description,._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){--_gcd-heading-color:currentColor;color:inherit}}}");
		style_default$2 = {
			"positioner": "d61e2d85c0ee0699__positioner",
			"popup": "_34e81249f419a5a5__popup",
			"item-selection-indicator": "_42313b48c5459be3__item-selection-indicator",
			"is-root": "_087a537b24fee6a1__is-root _380b81b8f79fb10f__dropdown-motion",
			"is-submenu": "_6d3b567f6289bdc2__is-submenu _7f344b94e270e039__dropdown-motion--fade-only",
			"list": "_33f07ab17005471d__list",
			"group": "f11085533c0056b0__group",
			"radio-group": "e05914e1005d7c2e__radio-group",
			"item": "_5c913bce0d8bb0d6__item",
			"item-prefix": "_64924ecabf65a5d6__item-prefix",
			"group-label": "_4a0fd085d76fd23c__group-label",
			"separator": "bfc11368eadf3b39__separator",
			"item-content": "af879698ede76757__item-content",
			"checkbox-selection-icon": "_99c5bd141cbf516f__checkbox-selection-icon",
			"radio-selection-icon": "_59aa9b3b3a651148__radio-selection-icon",
			"prefix-icon": "a836378335a4cbf1__prefix-icon",
			"has-prefix": "_5c211f9edfe0ed66__has-prefix",
			"item-descriptions": "_76f3e69cf2228139__item-descriptions",
			"item-label": "_5ed41da4abcf8958__item-label",
			"item-description": "fa88c9f1a96a4c5a__item-description",
			"item-suffix": "_091406749ed93e6e__item-suffix",
			"item-shortcut": "_23630f40071a29ff__item-shortcut",
			"item-trailing": "_06be17a91bf434a0__item-trailing",
			"submenu-chevron": "b78aec79bf93eba0__submenu-chevron",
			"external-link-indicator": "_60da3b6f9718cf76__external-link-indicator"
		};
		ITEM_CONTENT_COMPONENTS = {
			Label: ItemLabel,
			Description: ItemDescription,
			validationMessage: "Menu.ItemLabel must be the first direct child of every menu item, followed only by Menu.ItemDescription components.",
			descriptionValidationToken: ITEM_DESCRIPTION_DIRECT_CHILD
		};
		Item = (0, import_react.forwardRef)(function MenuItem$1({ children, className, prefix, shortcut, suffix, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...props }, ref) {
			const { contentChildren, contentContextValue, itemAriaProps, shortcutDescriptionId } = useItemContent(children, {
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(MenuItem, {
				ref,
				...itemAriaProps,
				className: clsx(global_css_defense_default.div, resets_default$1["box-sizing"], style_default$2.item, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(MenuItemContentContext.Provider, {
					value: contentContextValue,
					children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(ItemContent, {
						prefix,
						shortcut,
						shortcutDescriptionId,
						suffix,
						children: contentChildren
					})
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/portal.mjs
var import_jsx_runtime$4, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_MenuPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_runtime$4 = require_jsx_runtime();
		Portal = (0, import_react.forwardRef)(function MenuPortal$1({ container, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(MenuPortal, {
				ref,
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/positioner.mjs
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
function getSubmenuLabelOffset(positioner, trigger) {
	const popup = positioner?.querySelector(`.${style_default$1.popup}`);
	if (!positioner || !popup) return 0;
	const parentLabel = trigger?.querySelector(`.${style_default$1["item-label"]}`);
	const firstLabel = popup?.querySelector(`.${style_default$1["item-label"]}`);
	if (!trigger || !parentLabel || !firstLabel) {
		const popupStyles = popup.ownerDocument.defaultView?.getComputedStyle(popup);
		if (!popupStyles) return 0;
		return -(parseFloat(popupStyles.paddingTop) + parseFloat(popupStyles.borderTopWidth));
	}
	return parentLabel.getBoundingClientRect().top - trigger.getBoundingClientRect().top - (firstLabel.getBoundingClientRect().top - positioner.getBoundingClientRect().top);
}
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$1, resets_default, style_default$1, MENU_SUBMENU_POPUP_POSITIONER_PROPS, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_MenuPositioner();
		init_react();
		init_use_isomorphic_layout_effect(), init_use_merge_refs();
		init_constants();
		init_context();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$1("9c0873d3be", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.d61e2d85c0ee0699__positioner{z-index:var(--wp-ui-menu-z-index,initial)}._34e81249f419a5a5__popup{--wp-ui-menu-popup-padding:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-min-width:160px;--wp-ui-menu-max-width:var(--_wp-ui-item-popup-max-width,var(--available-width));--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-item-padding-inline-end:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-group-head-padding-base:var(--wpds-dimension-padding-sm,8px);--wp-ui-menu-group-head-padding-inline:var(--_wp-ui-menu-group-head-padding-base);--wp-ui-menu-selection-indicator-track-size:0px;--wp-ui-menu-selection-indicator-size:var(--wpds-dimension-size-2xs,16px);--wp-ui-menu-selection-indicator-gap:0px;--_wp-ui-menu-elevation-md:0px 2px 3px 0px #0000000d,0px 4px 5px 0px #0000000a,0px 12px 12px 0px #00000008,0px 16px 16px 0px #00000005;background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-menu-elevation-md);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--wp-ui-menu-max-width));min-width:min(var(--available-width),var(--wp-ui-menu-min-width));outline:none;overflow-block:auto;overscroll-behavior:none;padding:var(--wp-ui-menu-popup-padding);scroll-padding:var(--wp-ui-menu-popup-padding);&:has(._42313b48c5459be3__item-selection-indicator){--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-selection-indicator-track-size:var(--wpds-dimension-size-2xs,16px)}}._33f07ab17005471d__list{--_wp-ui-menu-item-label-line-height:var(--wpds-typography-line-height-sm,20px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--_wp-ui-menu-item-label-line-height)}._33f07ab17005471d__list,.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{--wp-ui-menu-group-prefix-gap:0px;display:grid;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];min-width:0}.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{grid-column:1/-1}._33f07ab17005471d__list:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.e05914e1005d7c2e__radio-group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.f11085533c0056b0__group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix){--wp-ui-menu-group-prefix-gap:var(--wpds-dimension-gap-xs,4px)}._4a0fd085d76fd23c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);grid-column:prefix-start/content-end;line-height:var(--wpds-typography-line-height-xs,16px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));min-height:var(--wpds-dimension-size-sm,24px);min-width:0;padding-block:var(--wpds-dimension-padding-xs,4px);text-transform:uppercase}.bfc11368eadf3b39__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);grid-column:prefix-start/content-end;height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));@media (forced-colors:active){background-color:CanvasText}}._5c913bce0d8bb0d6__item{--wp-ui-menu-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-menu-item-padding-block:var(--wpds-dimension-padding-xs,4px);--_gcd-a-border-radius:var(--wpds-border-radius-sm,2px);align-content:center;align-items:start;border-radius:var(--wpds-border-radius-sm,2px);display:grid;gap:0;grid-column:1/-1;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];justify-content:stretch;min-height:var(--wp-ui-menu-item-height);min-width:0;padding-block:var(--wp-ui-menu-item-padding-block);scroll-margin:var(--wp-ui-menu-popup-padding);text-decoration:none;user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&[href]{cursor:pointer}@supports (grid-template-columns:subgrid){grid-template-columns:subgrid}&[data-popup-open]:not([data-highlighted],[data-disabled],[aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-xs,1px) solid GrayText}}&[data-highlighted]:not([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);background-color:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);outline:none;@media (forced-colors:active){--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&:is([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){--_gcd-a-color:GrayText;color:GrayText}}}._42313b48c5459be3__item-selection-indicator,._64924ecabf65a5d6__item-prefix,.af879698ede76757__item-content{grid-row:1}._42313b48c5459be3__item-selection-indicator{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;grid-column:selection-start/selection-end;height:var(--_wp-ui-menu-item-label-line-height);justify-content:center;justify-self:center;margin-inline-end:var(--wpds-dimension-gap-xs,4px);pointer-events:none;width:var(--wp-ui-menu-selection-indicator-size);&[data-unchecked]{opacity:0}}._99c5bd141cbf516f__checkbox-selection-icon{translate:0 1px}._59aa9b3b3a651148__radio-selection-icon{fill:currentColor;height:var(--wpds-dimension-size-2xs,16px);width:var(--wpds-dimension-size-2xs,16px)}._64924ecabf65a5d6__item-prefix{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:prefix-start/prefix-end;justify-content:center;min-width:0}.a836378335a4cbf1__prefix-icon{align-self:flex-start;flex-shrink:0;margin-block-start:calc((var(--_wp-ui-menu-item-label-line-height) - var(--_wp-ui-menu-prefix-icon-size))/2)}.af879698ede76757__item-content{align-items:center;align-self:stretch;box-sizing:border-box;display:grid;grid-column:prefix-start/content-end;grid-template-columns:[label-start] minmax(0,1fr) [label-end suffix-start] auto [suffix-end shortcut-start] auto [shortcut-end trailing-start] auto [trailing-end];min-width:0;pointer-events:none;&._5c211f9edfe0ed66__has-prefix{grid-column:content-start/content-end}}._76f3e69cf2228139__item-descriptions{display:flex;flex-direction:column;grid-column:prefix-start/content-end;grid-row:2;min-width:0;padding-block-end:var(--wpds-dimension-padding-xs,4px);pointer-events:none}._5ed41da4abcf8958__item-label{--_gcd-heading-color:currentColor;--_gcd-p-line-height:var(--_wp-ui-menu-item-label-line-height);color:inherit;grid-column:label-start/label-end;line-height:var(--_wp-ui-menu-item-label-line-height);min-width:0;overflow-wrap:anywhere}.fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral-weak,#707070);color:var(--wpds-color-foreground-content-neutral-weak,#707070);overflow-wrap:anywhere}.af879698ede76757__item-content>._091406749ed93e6e__item-suffix{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:suffix-start/suffix-end;margin-inline-start:var(--wpds-dimension-gap-md,12px)}.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{grid-column:shortcut-start/shortcut-end}._06be17a91bf434a0__item-trailing,.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{color:var(--wpds-color-foreground-content-neutral-weak,#707070);margin-inline-start:var(--wpds-dimension-gap-md,12px)}._06be17a91bf434a0__item-trailing{align-items:center;display:flex;grid-column:trailing-start/trailing-end}._5ed41da4abcf8958__item-label+:is(._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){margin-inline-start:var(--wpds-dimension-gap-xl,24px)}._23630f40071a29ff__item-shortcut+._06be17a91bf434a0__item-trailing{margin-inline-start:var(--wpds-dimension-gap-xs,4px)}.b78aec79bf93eba0__submenu-chevron{margin-inline-end:calc(var(--wpds-dimension-gap-sm, 8px)*-1)}.b78aec79bf93eba0__submenu-chevron:dir(rtl){transform:rotate(180deg)}._60da3b6f9718cf76__external-link-indicator{display:inline-block;font-weight:var(--wpds-typography-font-weight-default,400);line-height:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px);text-decoration:none}._60da3b6f9718cf76__external-link-indicator:after{content:\"\\2197\"}._60da3b6f9718cf76__external-link-indicator:dir(rtl):after{content:\"\\2196\"}._5c913bce0d8bb0d6__item:is([data-highlighted],[data-disabled],[aria-disabled=true]) ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item:is([data-highlighted],[data-popup-open],[data-disabled],[aria-disabled=true]) :is(.fa88c9f1a96a4c5a__item-description,._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){--_gcd-heading-color:currentColor;color:inherit}}}");
		style_default$1 = {
			"positioner": "d61e2d85c0ee0699__positioner",
			"popup": "_34e81249f419a5a5__popup",
			"item-selection-indicator": "_42313b48c5459be3__item-selection-indicator",
			"is-root": "_087a537b24fee6a1__is-root _380b81b8f79fb10f__dropdown-motion",
			"is-submenu": "_6d3b567f6289bdc2__is-submenu _7f344b94e270e039__dropdown-motion--fade-only",
			"list": "_33f07ab17005471d__list",
			"group": "f11085533c0056b0__group",
			"radio-group": "e05914e1005d7c2e__radio-group",
			"item": "_5c913bce0d8bb0d6__item",
			"item-prefix": "_64924ecabf65a5d6__item-prefix",
			"group-label": "_4a0fd085d76fd23c__group-label",
			"separator": "bfc11368eadf3b39__separator",
			"item-content": "af879698ede76757__item-content",
			"checkbox-selection-icon": "_99c5bd141cbf516f__checkbox-selection-icon",
			"radio-selection-icon": "_59aa9b3b3a651148__radio-selection-icon",
			"prefix-icon": "a836378335a4cbf1__prefix-icon",
			"has-prefix": "_5c211f9edfe0ed66__has-prefix",
			"item-descriptions": "_76f3e69cf2228139__item-descriptions",
			"item-label": "_5ed41da4abcf8958__item-label",
			"item-description": "fa88c9f1a96a4c5a__item-description",
			"item-suffix": "_091406749ed93e6e__item-suffix",
			"item-shortcut": "_23630f40071a29ff__item-shortcut",
			"item-trailing": "_06be17a91bf434a0__item-trailing",
			"submenu-chevron": "b78aec79bf93eba0__submenu-chevron",
			"external-link-indicator": "_60da3b6f9718cf76__external-link-indicator"
		};
		MENU_SUBMENU_POPUP_POSITIONER_PROPS = {
			side: "inline-end",
			align: "start",
			sideOffset: -4,
			collisionPadding: 12
		};
		Positioner = (0, import_react.forwardRef)(function MenuPositioner$1({ className, ...props }, ref) {
			const { isSubmenu, submenuTriggerRef } = useMenuContext();
			const positionerRef = (0, import_react.useRef)(null);
			const mergedRef = useMergeRefs([ref, positionerRef]);
			const [measuredAnchor, setMeasuredAnchor] = (0, import_react.useState)();
			const lastOffsetRef = (0, import_react.useRef)(0);
			const defaultProps = isSubmenu ? MENU_SUBMENU_POPUP_POSITIONER_PROPS : ITEM_POPUP_POSITIONER_PROPS;
			const alignOffset = (0, import_react.useCallback)((dimensions) => {
				const { side, align } = dimensions;
				if (side === "top" || side === "bottom" || align !== "start") return 0;
				const positioner = positionerRef.current;
				if (!positioner) return 0;
				if (positioner.hidden || positioner.hasAttribute("data-closed")) return lastOffsetRef.current;
				const offset = getSubmenuLabelOffset(positioner, props.anchor ? void 0 : submenuTriggerRef?.current);
				lastOffsetRef.current = offset;
				return offset;
			}, [props.anchor, submenuTriggerRef]);
			use_isomorphic_layout_effect_default(() => {
				if (!isSubmenu || props.anchor || props.alignOffset !== void 0 || props.disableAnchorTracking) return;
				const positioner = positionerRef.current;
				const trigger = submenuTriggerRef?.current;
				const popup = positioner?.querySelector(`.${style_default$1.popup}`);
				const firstLabel = popup?.querySelector(`.${style_default$1["item-label"]}`);
				const ResizeObserverConstructor = positioner?.ownerDocument.defaultView?.ResizeObserver;
				if (!trigger || !firstLabel || !ResizeObserverConstructor) return;
				const observer = new ResizeObserverConstructor(() => {
					if (!positioner || positioner.hidden || positioner.hasAttribute("data-closed") || positioner.dataset.side === "top" || positioner.dataset.side === "bottom" || positioner.dataset.align !== "start") return;
					const nextOffset = getSubmenuLabelOffset(positioner, trigger);
					const previousOffset = lastOffsetRef.current;
					lastOffsetRef.current = nextOffset;
					if (previousOffset !== void 0 && Math.abs(nextOffset - previousOffset) < .01) return;
					setMeasuredAnchor({
						contextElement: trigger,
						getBoundingClientRect: () => trigger.getBoundingClientRect()
					});
				});
				[
					firstLabel,
					firstLabel.closest(`.${style_default$1.item}`),
					popup?.querySelector(`.${style_default$1.list}`),
					trigger.querySelector(`.${style_default$1["item-label"]}`)
				].forEach((element) => {
					if (element) observer.observe(element);
				});
				return () => observer.disconnect();
			}, [
				isSubmenu,
				props.anchor,
				props.alignOffset,
				props.disableAnchorTracking,
				submenuTriggerRef
			]);
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(MenuPositioner, {
				...defaultProps,
				anchor: isSubmenu ? measuredAnchor : void 0,
				alignOffset: isSubmenu ? alignOffset : void 0,
				...props,
				ref: mergedRef,
				className: clsx(resets_default["box-sizing"], style_default$1.positioner, className)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/popup.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE, style_default, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_MenuPopup();
		init_clsx();
		init_react();
		init_render_slot_with_children();
		init_item_popup();
		init_portal();
		init_positioner();
		init_context();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("9c0873d3be", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.d61e2d85c0ee0699__positioner{z-index:var(--wp-ui-menu-z-index,initial)}._34e81249f419a5a5__popup{--wp-ui-menu-popup-padding:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-min-width:160px;--wp-ui-menu-max-width:var(--_wp-ui-item-popup-max-width,var(--available-width));--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-item-padding-inline-end:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-group-head-padding-base:var(--wpds-dimension-padding-sm,8px);--wp-ui-menu-group-head-padding-inline:var(--_wp-ui-menu-group-head-padding-base);--wp-ui-menu-selection-indicator-track-size:0px;--wp-ui-menu-selection-indicator-size:var(--wpds-dimension-size-2xs,16px);--wp-ui-menu-selection-indicator-gap:0px;--_wp-ui-menu-elevation-md:0px 2px 3px 0px #0000000d,0px 4px 5px 0px #0000000a,0px 12px 12px 0px #00000008,0px 16px 16px 0px #00000005;background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-menu-elevation-md);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--wp-ui-menu-max-width));min-width:min(var(--available-width),var(--wp-ui-menu-min-width));outline:none;overflow-block:auto;overscroll-behavior:none;padding:var(--wp-ui-menu-popup-padding);scroll-padding:var(--wp-ui-menu-popup-padding);&:has(._42313b48c5459be3__item-selection-indicator){--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-selection-indicator-track-size:var(--wpds-dimension-size-2xs,16px)}}._33f07ab17005471d__list{--_wp-ui-menu-item-label-line-height:var(--wpds-typography-line-height-sm,20px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--_wp-ui-menu-item-label-line-height)}._33f07ab17005471d__list,.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{--wp-ui-menu-group-prefix-gap:0px;display:grid;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];min-width:0}.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{grid-column:1/-1}._33f07ab17005471d__list:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.e05914e1005d7c2e__radio-group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.f11085533c0056b0__group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix){--wp-ui-menu-group-prefix-gap:var(--wpds-dimension-gap-xs,4px)}._4a0fd085d76fd23c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);grid-column:prefix-start/content-end;line-height:var(--wpds-typography-line-height-xs,16px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));min-height:var(--wpds-dimension-size-sm,24px);min-width:0;padding-block:var(--wpds-dimension-padding-xs,4px);text-transform:uppercase}.bfc11368eadf3b39__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);grid-column:prefix-start/content-end;height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));@media (forced-colors:active){background-color:CanvasText}}._5c913bce0d8bb0d6__item{--wp-ui-menu-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-menu-item-padding-block:var(--wpds-dimension-padding-xs,4px);--_gcd-a-border-radius:var(--wpds-border-radius-sm,2px);align-content:center;align-items:start;border-radius:var(--wpds-border-radius-sm,2px);display:grid;gap:0;grid-column:1/-1;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];justify-content:stretch;min-height:var(--wp-ui-menu-item-height);min-width:0;padding-block:var(--wp-ui-menu-item-padding-block);scroll-margin:var(--wp-ui-menu-popup-padding);text-decoration:none;user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&[href]{cursor:pointer}@supports (grid-template-columns:subgrid){grid-template-columns:subgrid}&[data-popup-open]:not([data-highlighted],[data-disabled],[aria-disabled=true]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-xs,1px) solid GrayText}}&[data-highlighted]:not([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);background-color:var(--wpds-color-background-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));color:var(--wpds-color-foreground-interactive-brand-strong-active,#fff);outline:none;@media (forced-colors:active){--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&:is([data-disabled],[aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){--_gcd-a-color:GrayText;color:GrayText}}}._42313b48c5459be3__item-selection-indicator,._64924ecabf65a5d6__item-prefix,.af879698ede76757__item-content{grid-row:1}._42313b48c5459be3__item-selection-indicator{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;grid-column:selection-start/selection-end;height:var(--_wp-ui-menu-item-label-line-height);justify-content:center;justify-self:center;margin-inline-end:var(--wpds-dimension-gap-xs,4px);pointer-events:none;width:var(--wp-ui-menu-selection-indicator-size);&[data-unchecked]{opacity:0}}._99c5bd141cbf516f__checkbox-selection-icon{translate:0 1px}._59aa9b3b3a651148__radio-selection-icon{fill:currentColor;height:var(--wpds-dimension-size-2xs,16px);width:var(--wpds-dimension-size-2xs,16px)}._64924ecabf65a5d6__item-prefix{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:prefix-start/prefix-end;justify-content:center;min-width:0}.a836378335a4cbf1__prefix-icon{align-self:flex-start;flex-shrink:0;margin-block-start:calc((var(--_wp-ui-menu-item-label-line-height) - var(--_wp-ui-menu-prefix-icon-size))/2)}.af879698ede76757__item-content{align-items:center;align-self:stretch;box-sizing:border-box;display:grid;grid-column:prefix-start/content-end;grid-template-columns:[label-start] minmax(0,1fr) [label-end suffix-start] auto [suffix-end shortcut-start] auto [shortcut-end trailing-start] auto [trailing-end];min-width:0;pointer-events:none;&._5c211f9edfe0ed66__has-prefix{grid-column:content-start/content-end}}._76f3e69cf2228139__item-descriptions{display:flex;flex-direction:column;grid-column:prefix-start/content-end;grid-row:2;min-width:0;padding-block-end:var(--wpds-dimension-padding-xs,4px);pointer-events:none}._5ed41da4abcf8958__item-label{--_gcd-heading-color:currentColor;--_gcd-p-line-height:var(--_wp-ui-menu-item-label-line-height);color:inherit;grid-column:label-start/label-end;line-height:var(--_wp-ui-menu-item-label-line-height);min-width:0;overflow-wrap:anywhere}.fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral-weak,#707070);color:var(--wpds-color-foreground-content-neutral-weak,#707070);overflow-wrap:anywhere}.af879698ede76757__item-content>._091406749ed93e6e__item-suffix{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:suffix-start/suffix-end;margin-inline-start:var(--wpds-dimension-gap-md,12px)}.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{grid-column:shortcut-start/shortcut-end}._06be17a91bf434a0__item-trailing,.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{color:var(--wpds-color-foreground-content-neutral-weak,#707070);margin-inline-start:var(--wpds-dimension-gap-md,12px)}._06be17a91bf434a0__item-trailing{align-items:center;display:flex;grid-column:trailing-start/trailing-end}._5ed41da4abcf8958__item-label+:is(._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){margin-inline-start:var(--wpds-dimension-gap-xl,24px)}._23630f40071a29ff__item-shortcut+._06be17a91bf434a0__item-trailing{margin-inline-start:var(--wpds-dimension-gap-xs,4px)}.b78aec79bf93eba0__submenu-chevron{margin-inline-end:calc(var(--wpds-dimension-gap-sm, 8px)*-1)}.b78aec79bf93eba0__submenu-chevron:dir(rtl){transform:rotate(180deg)}._60da3b6f9718cf76__external-link-indicator{display:inline-block;font-weight:var(--wpds-typography-font-weight-default,400);line-height:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px);text-decoration:none}._60da3b6f9718cf76__external-link-indicator:after{content:\"\\2197\"}._60da3b6f9718cf76__external-link-indicator:dir(rtl):after{content:\"\\2196\"}._5c913bce0d8bb0d6__item:is([data-highlighted],[data-disabled],[aria-disabled=true]) ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item:is([data-highlighted],[data-popup-open],[data-disabled],[aria-disabled=true]) :is(.fa88c9f1a96a4c5a__item-description,._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){--_gcd-heading-color:currentColor;color:inherit}}}");
		style_default = {
			"positioner": "d61e2d85c0ee0699__positioner",
			"popup": "_34e81249f419a5a5__popup",
			"item-selection-indicator": "_42313b48c5459be3__item-selection-indicator",
			"is-root": "_087a537b24fee6a1__is-root _380b81b8f79fb10f__dropdown-motion",
			"is-submenu": "_6d3b567f6289bdc2__is-submenu _7f344b94e270e039__dropdown-motion--fade-only",
			"list": "_33f07ab17005471d__list",
			"group": "f11085533c0056b0__group",
			"radio-group": "e05914e1005d7c2e__radio-group",
			"item": "_5c913bce0d8bb0d6__item",
			"item-prefix": "_64924ecabf65a5d6__item-prefix",
			"group-label": "_4a0fd085d76fd23c__group-label",
			"separator": "bfc11368eadf3b39__separator",
			"item-content": "af879698ede76757__item-content",
			"checkbox-selection-icon": "_99c5bd141cbf516f__checkbox-selection-icon",
			"radio-selection-icon": "_59aa9b3b3a651148__radio-selection-icon",
			"prefix-icon": "a836378335a4cbf1__prefix-icon",
			"has-prefix": "_5c211f9edfe0ed66__has-prefix",
			"item-descriptions": "_76f3e69cf2228139__item-descriptions",
			"item-label": "_5ed41da4abcf8958__item-label",
			"item-description": "fa88c9f1a96a4c5a__item-description",
			"item-suffix": "_091406749ed93e6e__item-suffix",
			"item-shortcut": "_23630f40071a29ff__item-shortcut",
			"item-trailing": "_06be17a91bf434a0__item-trailing",
			"submenu-chevron": "b78aec79bf93eba0__submenu-chevron",
			"external-link-indicator": "_60da3b6f9718cf76__external-link-indicator"
		};
		Popup = (0, import_react.forwardRef)(function MenuPopup$1({ children, className, portal, positioner, width = "sm", ...props }, ref) {
			const { isSubmenu } = useMenuContext();
			const popupContent = /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(MenuPopup, {
				ref,
				className: clsx(style_default.popup, getItemPopupWidthClassName(width), isSubmenu ? style_default["is-submenu"] : style_default["is-root"], className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
					className: style_default.list,
					children
				})
			});
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Positioner, {}), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Portal, {}), positionedPopup);
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/root.mjs
function Root(props) {
	const { onOpenChange } = props;
	const handleOpenChange = (nextOpen, eventDetails) => {
		const trigger = eventDetails.trigger;
		const TriggerElement = trigger?.ownerDocument.defaultView?.HTMLElement;
		const EventTargetElement = trigger?.ownerDocument.defaultView?.Element;
		const activeElementBeforeOpenChange = trigger?.ownerDocument.activeElement;
		const eventTarget = eventDetails.event.target;
		const menuElement = EventTargetElement && eventTarget instanceof EventTargetElement ? eventTarget.closest("[role=\"menu\"]") : null;
		onOpenChange?.(nextOpen, eventDetails);
		if (!nextOpen && eventDetails.reason === "item-press" && !eventDetails.isCanceled && TriggerElement && trigger instanceof TriggerElement && menuElement?.contains(activeElementBeforeOpenChange ?? null) && trigger.ownerDocument.activeElement === activeElementBeforeOpenChange) trigger.focus();
	};
	const iframeDismissalProps = useIframeDismissalBridge({
		actionsRef: props.actionsRef,
		defaultOpen: props.defaultOpen,
		modal: props.modal,
		onOpenChange: handleOpenChange,
		open: props.open
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MenuContext.Provider, {
		value: { isSubmenu: false },
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MenuGroupContext.Provider, {
			value: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MenuRoot, {
				...props,
				...iframeDismissalProps
			})
		})
	}) });
}
var import_jsx_runtime$1;
function init_root() {
	return (init_root = __esmMin((() => {
		init_MenuRoot();
		init_direction_provider();
		init_context();
		init_use_iframe_dismissal_bridge();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/trigger.mjs
var import_jsx_runtime, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_MenuTrigger();
		init_react();
		import_jsx_runtime = require_jsx_runtime();
		Trigger = (0, import_react.forwardRef)(function MenuTrigger$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTrigger, {
				ref,
				...props
			});
		});
	})))();
}
//#endregion
export { useMenuGroupContext as S, MenuContext as _, Popup as a, init_context as b, init_positioner as c, init_item as d, useItemContent as f, init_item_description as g, ItemDescription as h, init_root as i, Item as l, init_item_label as m, init_trigger as n, init_popup as o, ItemLabel as p, Root as r, Positioner as s, Trigger as t, ItemContent as u, MenuGroupContext as v, useMenuContext as x, MenuItemContentContext as y };
