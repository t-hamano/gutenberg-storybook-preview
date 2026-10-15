import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react$5 } from "./react-DVttqL3M.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_icon, t as Icon } from "./icon-TYj7I5OY.js";
import { _ as CompositeContextProvider, b as init_composite_context, m as init_composite_store, n as init_composite_item, p as createCompositeStore, r as useCompositeItem, y as CompositeScopedContextProvider } from "./composite-item-BEBg8wzM.js";
import { A as defaultValue, C as useUpdateLayoutEffect, Ct as noop, Dt as queueBeforeEvent, H as getItemRoleByPopupRole, J as getScrollingElement, K as getPopupRole, N as disabledFromProps, O as chain, Pt as toArray, Q as hasFocus, S as useUpdateEffect, Y as getTextboxSelection, Z as getWindow, _t as isSafari, a as init_dist$1, c as useAttribute, ct as isFalsyBooleanCallback, d as useForceUpdate, dt as isFocusable, f as useId, ft as isInputEvent, g as useMergeRefs, ht as isOpeningInNewTab, i as forwardRef$1, it as isApple, jt as setSelectionRange, l as useBooleanEvent, n as createHook, nt as init_dist, o as memo, ot as isDownloading, r as createStoreContext, rt as invariant, t as createElement, u as useEvent, ut as isFocusEventOutside, vt as isSelfTarget, w as useWrapElement, wt as normalizeString, x as useTransactionState, xt as isTouchDevice, y as useSafeLayoutEffect, yt as isTextField } from "./dist-DgYpwR44.js";
import { D as init_C4_D9PgF, E as hasTreeFocus, T as getTreeActiveElement, a as useStore, c as useStoreStateObject, f as init_dist$3, g as setup, h as pick, i as init_dist$2, l as batch, o as useStoreProps, p as mergeStore, s as useStoreState, u as createStore, v as sync, y as throwOnConflictingProps } from "./CDh2UhnG-rjC-Q4Bk.js";
import { i as useCompositeStoreProps, o as init_composite, r as useCompositeStoreOptions, s as useComposite, t as init_composite_store$1 } from "./composite-store-DmnJIW0O.js";
import { C as init_disclosure_content, D as init_dialog_context, E as DialogHeadingContext, i as init_popover_store, n as usePopoverStoreProps, r as createPopoverStore, t as init_popover_store$1, w as isHidden } from "./popover-store-DxNhIkVj.js";
import { a as ComboboxListRoleContext, c as useComboboxContext, i as ComboboxItemValueContext, l as useComboboxProviderContext, n as ComboboxHeadingContext, o as ComboboxScopedContextProvider, r as ComboboxItemCheckedContext, s as init_combobox_context, t as ComboboxContextProvider, u as useComboboxScopedContext } from "./combobox-context-0PABzBJy.js";
import { n as init_composite_hover, r as useCompositeHover } from "./composite-hover-hTPcVl_4.js";
//#region ../packages/ui/build-module/menu/prefix-icon.mjs
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
var import_jsx_runtime$5, STYLE_HASH_ATTRIBUTE, style_default, PrefixIcon;
function init_prefix_icon() {
	return (init_prefix_icon = __esmMin((() => {
		init_clsx();
		init_react();
		init_icon();
		import_jsx_runtime$5 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("d2f16b7c4b", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.d61e2d85c0ee0699__positioner{z-index:var(--wp-ui-menu-z-index,initial)}._34e81249f419a5a5__popup{--wp-ui-menu-popup-padding:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-min-width:160px;--wp-ui-menu-max-width:var(--wpds-dimension-surface-width-sm,320px);--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-item-padding-inline-end:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-group-head-padding-base:var(--wpds-dimension-padding-sm,8px);--wp-ui-menu-group-head-padding-inline:var(--_wp-ui-menu-group-head-padding-base);--wp-ui-menu-selection-indicator-track-size:0px;--wp-ui-menu-selection-indicator-size:var(--wpds-dimension-size-2xs,16px);--wp-ui-menu-selection-indicator-gap:0px;--_wp-ui-menu-elevation-md:0px 2px 3px 0px #0000000d,0px 4px 5px 0px #0000000a,0px 12px 12px 0px #00000008,0px 16px 16px 0px #00000005;background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-menu-elevation-md);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--wp-ui-menu-max-width));min-width:min(var(--available-width),var(--wp-ui-menu-min-width));outline:none;overflow-block:auto;overscroll-behavior:none;padding:var(--wp-ui-menu-popup-padding);scroll-padding:var(--wp-ui-menu-popup-padding);&:has(._42313b48c5459be3__item-selection-indicator){--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-selection-indicator-track-size:var(--wpds-dimension-size-2xs,16px)}}._33f07ab17005471d__list{--_wp-ui-menu-item-label-line-height:var(--wpds-typography-line-height-sm,20px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--_wp-ui-menu-item-label-line-height)}._33f07ab17005471d__list,.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{--wp-ui-menu-group-prefix-gap:0px;display:grid;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];min-width:0}.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{grid-column:1/-1}._33f07ab17005471d__list:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.e05914e1005d7c2e__radio-group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.f11085533c0056b0__group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix){--wp-ui-menu-group-prefix-gap:var(--wpds-dimension-gap-xs,4px)}._4a0fd085d76fd23c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);grid-column:prefix-start/content-end;line-height:var(--wpds-typography-line-height-xs,16px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));min-height:var(--wpds-dimension-size-sm,24px);min-width:0;padding-block:var(--wpds-dimension-padding-xs,4px);text-transform:uppercase}.bfc11368eadf3b39__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);grid-column:prefix-start/content-end;height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));@media (forced-colors:active){background-color:CanvasText}}._5c913bce0d8bb0d6__item{--wp-ui-menu-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-menu-item-padding-block:var(--wpds-dimension-padding-xs,4px);--_gcd-a-border-radius:var(--wpds-border-radius-sm,2px);align-content:center;align-items:start;border-radius:var(--wpds-border-radius-sm,2px);display:grid;gap:0;grid-column:1/-1;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];justify-content:stretch;min-height:var(--wp-ui-menu-item-height);min-width:0;padding-block:var(--wp-ui-menu-item-padding-block);scroll-margin:var(--wp-ui-menu-popup-padding);text-decoration:none;user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&[href]{cursor:pointer}@supports (grid-template-columns:subgrid){grid-template-columns:subgrid}&[data-popup-open]:not([data-disabled]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-xs,1px) solid GrayText;--_gcd-a-outline:var(--wpds-border-width-xs,1px) solid GrayText;--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[data-highlighted]:not([aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){--_gcd-a-color:GrayText;color:GrayText}}}._34e81249f419a5a5__popup:not([data-pointer-highlight]) ._5c913bce0d8bb0d6__item[data-highlighted]:focus-visible{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}._42313b48c5459be3__item-selection-indicator,._64924ecabf65a5d6__item-prefix,.af879698ede76757__item-content{grid-row:1}._42313b48c5459be3__item-selection-indicator{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;grid-column:selection-start/selection-end;height:var(--_wp-ui-menu-item-label-line-height);justify-content:center;justify-self:center;margin-inline-end:var(--wpds-dimension-gap-xs,4px);pointer-events:none;width:var(--wp-ui-menu-selection-indicator-size);&[data-unchecked]{opacity:0}}._99c5bd141cbf516f__checkbox-selection-icon{translate:0 1px}._59aa9b3b3a651148__radio-selection-icon{fill:currentColor;height:var(--wpds-dimension-size-2xs,16px);width:var(--wpds-dimension-size-2xs,16px)}._64924ecabf65a5d6__item-prefix{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:prefix-start/prefix-end;justify-content:center;min-width:0}.a836378335a4cbf1__prefix-icon{align-self:flex-start;flex-shrink:0;margin-block-start:calc((var(--_wp-ui-menu-item-label-line-height) - var(--_wp-ui-menu-prefix-icon-size))/2)}.af879698ede76757__item-content{align-items:center;align-self:stretch;box-sizing:border-box;display:grid;grid-column:prefix-start/content-end;grid-template-columns:[label-start] minmax(0,1fr) [label-end suffix-start] auto [suffix-end shortcut-start] auto [shortcut-end trailing-start] auto [trailing-end];min-width:0;pointer-events:none;&._5c211f9edfe0ed66__has-prefix{grid-column:content-start/content-end}}._76f3e69cf2228139__item-descriptions{display:flex;flex-direction:column;grid-column:prefix-start/content-end;grid-row:2;min-width:0;padding-block-end:var(--wpds-dimension-padding-xs,4px);pointer-events:none}._5ed41da4abcf8958__item-label{--_gcd-heading-color:currentColor;--_gcd-p-line-height:var(--_wp-ui-menu-item-label-line-height);color:inherit;grid-column:label-start/label-end;line-height:var(--_wp-ui-menu-item-label-line-height);min-width:0;overflow-wrap:anywhere}.fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral-weak,#707070);color:var(--wpds-color-foreground-content-neutral-weak,#707070);overflow-wrap:anywhere}.af879698ede76757__item-content>._091406749ed93e6e__item-suffix{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:suffix-start/suffix-end;margin-inline-start:var(--wpds-dimension-gap-md,12px)}.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{grid-column:shortcut-start/shortcut-end}._06be17a91bf434a0__item-trailing,.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{color:var(--wpds-color-foreground-content-neutral-weak,#707070);margin-inline-start:var(--wpds-dimension-gap-md,12px)}._06be17a91bf434a0__item-trailing{align-items:center;display:flex;grid-column:trailing-start/trailing-end}._5ed41da4abcf8958__item-label+:is(._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){margin-inline-start:var(--wpds-dimension-gap-xl,24px)}._23630f40071a29ff__item-shortcut+._06be17a91bf434a0__item-trailing{margin-inline-start:var(--wpds-dimension-gap-xs,4px)}.b78aec79bf93eba0__submenu-chevron{margin-inline-end:calc(var(--wpds-dimension-gap-sm, 8px)*-1)}.b78aec79bf93eba0__submenu-chevron:dir(rtl){transform:rotate(180deg)}._60da3b6f9718cf76__external-link-indicator{display:inline-block;font-weight:var(--wpds-typography-font-weight-default,400);line-height:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px);text-decoration:none}._60da3b6f9718cf76__external-link-indicator:after{content:\"\\2197\"}._60da3b6f9718cf76__external-link-indicator:dir(rtl):after{content:\"\\2196\"}._5c913bce0d8bb0d6__item[aria-disabled=true] ._06be17a91bf434a0__item-trailing,._5c913bce0d8bb0d6__item[aria-disabled=true] ._091406749ed93e6e__item-suffix,._5c913bce0d8bb0d6__item[aria-disabled=true] ._23630f40071a29ff__item-shortcut,._5c913bce0d8bb0d6__item[aria-disabled=true] ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item[aria-disabled=true] .fa88c9f1a96a4c5a__item-description,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._06be17a91bf434a0__item-trailing,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._091406749ed93e6e__item-suffix,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._23630f40071a29ff__item-shortcut,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) .fa88c9f1a96a4c5a__item-description,._5c913bce0d8bb0d6__item[data-popup-open]:not([data-disabled]) ._06be17a91bf434a0__item-trailing,._5c913bce0d8bb0d6__item[data-popup-open]:not([data-disabled]) ._091406749ed93e6e__item-suffix,._5c913bce0d8bb0d6__item[data-popup-open]:not([data-disabled]) ._23630f40071a29ff__item-shortcut,._5c913bce0d8bb0d6__item[data-popup-open]:not([data-disabled]) .fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:currentColor;color:inherit}}}");
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
		PrefixIcon = (0, import_react$5.forwardRef)(function MenuPrefixIcon({ className, size = 16, style, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(Icon, {
				...props,
				ref,
				size,
				className: clsx(style_default["prefix-icon"], className),
				style: {
					...style,
					"--_wp-ui-menu-prefix-icon-size": `${size}px`
				}
			});
		});
		PrefixIcon.displayName = "Menu.PrefixIcon";
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/__chunks/HXejjTMM.js
function scrollIntoViewNearest(element) {
	element.scrollIntoView({
		block: "nearest",
		inline: "nearest"
	});
}
function getSingleVerticalScrollport(element, popup) {
	const view = getWindow(element);
	if (!view.getComputedStyle(popup).writingMode.startsWith("horizontal")) return null;
	let scrollport = null;
	let inlineScrollport = null;
	let current = element.parentElement;
	while (current && popup.contains(current)) {
		const style = view.getComputedStyle(current);
		if (style.overflowY !== "visible" && style.overflowY !== "clip" && current.scrollHeight > current.clientHeight) {
			if (scrollport) return null;
			scrollport = current;
		}
		if (style.overflowX !== "visible" && style.overflowX !== "clip" && current.scrollWidth > current.clientWidth) {
			if (inlineScrollport) return null;
			inlineScrollport = current;
		}
		if (current === popup) break;
		current = current.parentElement;
	}
	if (inlineScrollport && inlineScrollport !== scrollport) return null;
	return scrollport;
}
function centerItemInScrollport(element, scrollport) {
	const elementRect = element.getBoundingClientRect();
	const scrollportRect = scrollport.getBoundingClientRect();
	const scaleX = scrollportRect.width / scrollport.offsetWidth || 1;
	const scrollportLeft = scrollportRect.left + scrollport.clientLeft * scaleX;
	const scrollportRight = scrollportLeft + scrollport.clientWidth * scaleX;
	const scrollportWidth = scrollport.clientWidth * scaleX;
	const elementLeftOutside = elementRect.left < scrollportLeft;
	const elementRightOutside = elementRect.right > scrollportRight;
	const alignLeft = elementLeftOutside && !elementRightOutside && elementRect.width < scrollportWidth || elementRightOutside && !elementLeftOutside && elementRect.width > scrollportWidth;
	const alignRight = elementLeftOutside && !elementRightOutside && elementRect.width > scrollportWidth || elementRightOutside && !elementLeftOutside && elementRect.width < scrollportWidth;
	let left = 0;
	if (alignLeft) left = (elementRect.left - scrollportLeft) / scaleX;
	else if (alignRight) left = (elementRect.right - scrollportRight) / scaleX;
	const scaleY = scrollportRect.height / scrollport.offsetHeight || 1;
	const top = (elementRect.top + elementRect.height / 2 - (scrollportRect.top + (scrollport.clientTop + scrollport.clientHeight / 2) * scaleY)) / scaleY;
	scrollport.scrollBy({
		left,
		top
	});
}
/**
* Returns the store's item-scrolling callback. It reads current store state
* when called, so every item can share one stable callback per store.
*/
function getScrollItemIntoView(store) {
	if (!store) return scrollIntoViewNearest;
	const cached = scrollItemIntoViewByStore.get(store);
	if (cached) return cached;
	const scrollItemIntoView = (element) => {
		const { contentElement, moves, selectElement } = store.getState();
		if (!selectElement) return scrollIntoViewNearest(element);
		if (moves !== openingMovesBySelect.get(selectElement)) return scrollIntoViewNearest(element);
		if (!contentElement?.contains(element)) return scrollIntoViewNearest(element);
		const scrollport = getSingleVerticalScrollport(element, contentElement);
		if (!scrollport) return scrollIntoViewNearest(element);
		centerItemInScrollport(element, scrollport);
	};
	scrollItemIntoViewByStore.set(store, scrollItemIntoView);
	return scrollItemIntoView;
}
var openingMovesBySelect, scrollItemIntoViewByStore;
function init_HXejjTMM() {
	return (init_HXejjTMM = __esmMin((() => {
		init_dist();
		openingMovesBySelect = /* @__PURE__ */ new WeakMap();
		scrollItemIntoViewByStore = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/combobox/combobox.js
function isFirstItemAutoSelected(items, activeValue, autoSelect) {
	if (!autoSelect) return false;
	return items.find((item) => !item.disabled && item.value)?.value === activeValue;
}
function hasCompletionString(value, activeValue) {
	if (!activeValue) return false;
	if (value == null) return false;
	const normalizedValue = normalizeString(value);
	const normalizedActiveValue = normalizeString(activeValue);
	if (normalizedValue.length !== value.length) return false;
	if (normalizedActiveValue.length !== activeValue.length) return false;
	return normalizedActiveValue.length > normalizedValue.length && normalizedActiveValue.toLowerCase().startsWith(normalizedValue.toLowerCase());
}
function isAriaAutoCompleteValue(value) {
	return value === "inline" || value === "list" || value === "both" || value === "none";
}
function getDefaultAutoSelectId(items) {
	return items.find((item) => {
		if (item.disabled) return false;
		return item.element?.getAttribute("role") !== "tab";
	})?.id;
}
var import_react$4, import_jsx_runtime$4, TagName$4, useCombobox, Combobox;
function init_combobox() {
	return (init_combobox = __esmMin((() => {
		init_C4_D9PgF();
		init_combobox_context();
		init_composite();
		init_HXejjTMM();
		init_dist$1();
		init_dist();
		import_react$4 = require_react();
		import_jsx_runtime$4 = require_jsx_runtime();
		init_dist$2();
		init_dist$3();
		TagName$4 = "input";
		useCombobox = createHook(function useCombobox({ store, focusable = true, autoSelect: autoSelectProp = false, getAutoSelectId, setValueOnChange, showMinLength = 0, showOnChange, showOnMouseDown, showOnClick = showOnMouseDown, showOnKeyDown, showOnKeyPress = showOnKeyDown, blurActiveItemOnClick, setValueOnClick = true, moveOnKeyPress = true, autoComplete = "list", name, form, disabled, ...props }) {
			const scopedContext = useComboboxScopedContext(true);
			const context = useComboboxProviderContext();
			store = store || context || scopedContext;
			invariant(store, "Combobox must receive a `store` prop or be wrapped in a ComboboxProvider component.");
			const ref = (0, import_react$4.useRef)(null);
			const [valueUpdated, forceValueUpdate] = useForceUpdate();
			const canAutoSelectRef = (0, import_react$4.useRef)(false);
			const composingRef = (0, import_react$4.useRef)(false);
			const compositionEndFrameRef = (0, import_react$4.useRef)(null);
			const cancelCompositionEndFrame = () => {
				const frame = compositionEndFrameRef.current;
				if (frame == null) return;
				cancelAnimationFrame(frame);
				compositionEndFrameRef.current = null;
			};
			const autoSelect = useStoreState(store, ["virtualFocus"], (state) => state.virtualFocus && autoSelectProp);
			const inline = autoComplete === "inline" || autoComplete === "both";
			const [canInline, setCanInline] = (0, import_react$4.useState)(inline);
			useUpdateLayoutEffect(() => {
				if (!inline) return;
				setCanInline(true);
			}, [inline]);
			const storeInputValue = useStoreState(store, "inputValue");
			const selectedValue = useStoreState(store, ["selectedValue"], (state) => {
				if (!name) return;
				if (!Array.isArray(state.selectedValue)) return;
				return state.selectedValue;
			});
			const multiSelectable = Array.isArray(selectedValue);
			const prevSelectedValueRef = (0, import_react$4.useRef)(void 0);
			(0, import_react$4.useEffect)(() => {
				return sync(store, ["selectedValue", "activeId"], (_, prev) => {
					prevSelectedValueRef.current = prev.selectedValue;
				});
			}, [store]);
			const inlineActiveValue = useStoreState(store, [
				"activeValue",
				"selectedValue",
				"activeId"
			], (state) => {
				if (!inline) return;
				if (!canInline) return;
				if (state.activeValue && Array.isArray(state.selectedValue)) {
					if (state.selectedValue.includes(state.activeValue)) return;
					if (prevSelectedValueRef.current?.includes(state.activeValue)) return;
				}
				return state.activeValue;
			});
			const items = useStoreState(store, "renderedItems");
			const open = useStoreState(store, "open");
			const contentElement = useStoreState(store, "contentElement");
			const placing = useStoreState(store, "unstable_placing");
			const firstItemAutoSelected = isFirstItemAutoSelected(items, inlineActiveValue, autoSelect);
			const inputValue = (0, import_react$4.useMemo)(() => {
				if (!inline) return storeInputValue;
				if (!canInline) return storeInputValue;
				if (firstItemAutoSelected) {
					if (hasCompletionString(storeInputValue, inlineActiveValue)) {
						const slice = inlineActiveValue?.slice(storeInputValue.length) || "";
						return storeInputValue + slice;
					}
					return storeInputValue;
				}
				return inlineActiveValue || storeInputValue;
			}, [
				inline,
				canInline,
				firstItemAutoSelected,
				inlineActiveValue,
				storeInputValue
			]);
			(0, import_react$4.useEffect)(() => {
				const element = ref.current;
				if (!element) return;
				const onCompositeItemMove = () => setCanInline(true);
				element.addEventListener("combobox-item-move", onCompositeItemMove);
				return () => {
					element.removeEventListener("combobox-item-move", onCompositeItemMove);
				};
			}, []);
			(0, import_react$4.useEffect)(() => {
				if (!inline) return;
				if (!canInline) return;
				if (!inlineActiveValue) return;
				if (!firstItemAutoSelected) return;
				if (!hasCompletionString(storeInputValue, inlineActiveValue)) return;
				let cleanup = noop;
				queueMicrotask(() => {
					const element = ref.current;
					if (!element) return;
					const { start: prevStart, end: prevEnd } = getTextboxSelection(element);
					const nextStart = storeInputValue.length;
					const nextEnd = inlineActiveValue.length;
					setSelectionRange(element, nextStart, nextEnd);
					cleanup = () => {
						if (!hasFocus(element)) return;
						const { start, end } = getTextboxSelection(element);
						if (start !== nextStart) return;
						if (end !== nextEnd) return;
						setSelectionRange(element, prevStart, prevEnd);
					};
				});
				return () => cleanup();
			}, [
				valueUpdated,
				inline,
				canInline,
				inlineActiveValue,
				firstItemAutoSelected,
				storeInputValue
			]);
			const getAutoSelectIdProp = useEvent(getAutoSelectId);
			const autoSelectIdRef = (0, import_react$4.useRef)(null);
			const autoSelectMovedRef = (0, import_react$4.useRef)(void 0);
			const userScrolledRef = (0, import_react$4.useRef)(false);
			const isAutoScrollingRef = (0, import_react$4.useRef)(false);
			(0, import_react$4.useEffect)(() => {
				if (!open) return;
				if (!contentElement) return;
				const scrollingElement = getScrollingElement(contentElement);
				if (!scrollingElement) return;
				const onUserScroll = () => {
					canAutoSelectRef.current = false;
					userScrolledRef.current = true;
				};
				const onScroll = () => {
					if (!isAutoScrollingRef.current) userScrolledRef.current = true;
					if (!store) return;
					if (!canAutoSelectRef.current) return;
					const { activeId } = store.getState();
					if (activeId === null) return;
					if (activeId === autoSelectIdRef.current) return;
					canAutoSelectRef.current = false;
				};
				const options = {
					passive: true,
					capture: true
				};
				scrollingElement.addEventListener("wheel", onUserScroll, options);
				scrollingElement.addEventListener("touchmove", onUserScroll, options);
				scrollingElement.addEventListener("scroll", onScroll, options);
				return () => {
					scrollingElement.removeEventListener("wheel", onUserScroll, true);
					scrollingElement.removeEventListener("touchmove", onUserScroll, true);
					scrollingElement.removeEventListener("scroll", onScroll, true);
				};
			}, [
				open,
				contentElement,
				store
			]);
			useSafeLayoutEffect(() => {
				userScrolledRef.current = false;
				if (!storeInputValue) return;
				if (composingRef.current) return;
				canAutoSelectRef.current = true;
			}, [storeInputValue]);
			useSafeLayoutEffect(() => {
				if (autoSelect !== "always" && open) return;
				canAutoSelectRef.current = open;
			}, [autoSelect, open]);
			useSafeLayoutEffect(() => {
				if (open) return;
				autoSelectMovedRef.current = void 0;
			}, [open]);
			const resetValueOnSelect = useStoreState(store, "resetValueOnSelect");
			useUpdateEffect(() => {
				const canAutoSelect = canAutoSelectRef.current;
				if (!store) return;
				if (!open) return;
				if (composingRef.current) return;
				if (!canAutoSelect && (!resetValueOnSelect || userScrolledRef.current)) return;
				const state = store.getState();
				const { compositeElement, activeId, selectElement, selectedValue } = state;
				if (compositeElement && !hasTreeFocus(compositeElement)) return;
				if (state.unstable_placing) return;
				const activeValue = store.item(activeId)?.value;
				const activeValueSelected = activeValue != null && (Array.isArray(selectedValue) ? selectedValue.includes(activeValue) : selectedValue === activeValue);
				if (autoSelect && canAutoSelect && !(!!selectElement && !storeInputValue && activeValueSelected)) {
					const userAutoSelectId = getAutoSelectIdProp(items);
					const autoSelectId = userAutoSelectId !== void 0 ? userAutoSelectId : getDefaultAutoSelectId(items) ?? store.first();
					autoSelectIdRef.current = autoSelectId;
					const nextActiveId = autoSelectId ?? null;
					const nextActiveValue = store.item(nextActiveId)?.value;
					const moved = autoSelectMovedRef.current;
					if (nextActiveId !== activeId || moved?.id !== nextActiveId || moved?.value !== nextActiveValue) {
						autoSelectMovedRef.current = {
							id: nextActiveId,
							value: nextActiveValue
						};
						store.move(nextActiveId);
					} else store.setState("activeValue", nextActiveValue);
				} else {
					const element = store.item(activeId || store.first())?.element;
					if (element && "scrollIntoView" in element) {
						isAutoScrollingRef.current = true;
						element.scrollIntoView({
							block: "nearest",
							inline: "nearest"
						});
						requestAnimationFrame(() => {
							isAutoScrollingRef.current = false;
						});
					}
				}
			}, [
				store,
				open,
				placing,
				valueUpdated,
				storeInputValue,
				autoSelect,
				resetValueOnSelect,
				getAutoSelectIdProp,
				items
			]);
			(0, import_react$4.useEffect)(() => {
				if (!inline) return;
				const combobox = ref.current;
				if (!combobox) return;
				const elements = [combobox, contentElement].filter((value) => !!value);
				const onBlur = (event) => {
					if (elements.every((el) => isFocusEventOutside(event, el))) store?.setInputValue(inputValue);
				};
				for (const element of elements) element.addEventListener("focusout", onBlur);
				return () => {
					for (const element of elements) element.removeEventListener("focusout", onBlur);
				};
			}, [
				inline,
				contentElement,
				store,
				inputValue
			]);
			const canShow = (event) => {
				return event.currentTarget.value.length >= showMinLength;
			};
			const onChangeProp = props.onChange;
			const showOnChangeProp = useBooleanEvent(showOnChange ?? canShow);
			const setValueOnChangeProp = useBooleanEvent(setValueOnChange ?? !store.tag);
			const onChange = useEvent((event) => {
				onChangeProp?.(event);
				if (event.defaultPrevented) return;
				if (!store) return;
				const currentTarget = event.currentTarget;
				const { value, selectionStart, selectionEnd } = currentTarget;
				const nativeEvent = event.nativeEvent;
				canAutoSelectRef.current = true;
				if (isInputEvent(nativeEvent)) {
					if (nativeEvent.isComposing) {
						canAutoSelectRef.current = false;
						composingRef.current = true;
					}
					if (inline) {
						const textInserted = nativeEvent.inputType === "insertText" || nativeEvent.inputType === "insertCompositionText";
						const caretAtEnd = selectionStart === value.length;
						setCanInline(textInserted && caretAtEnd);
					}
				}
				if (setValueOnChangeProp(event)) {
					const isSameValue = value === store.getState().inputValue;
					store.setInputValue(value);
					queueMicrotask(() => {
						setSelectionRange(currentTarget, selectionStart, selectionEnd);
					});
					if (inline && autoSelect && isSameValue) forceValueUpdate();
				}
				if (showOnChangeProp(event)) store.show();
				if (!autoSelect || !canAutoSelectRef.current) store.setActiveId(null);
			});
			(0, import_react$4.useEffect)(() => cancelCompositionEndFrame, []);
			const onCompositionStartProp = props.onCompositionStart;
			const onCompositionStart = useEvent((event) => {
				cancelCompositionEndFrame();
				canAutoSelectRef.current = false;
				composingRef.current = true;
				onCompositionStartProp?.(event);
			});
			const onCompositionEndProp = props.onCompositionEnd;
			const onCompositionEnd = useEvent((event) => {
				canAutoSelectRef.current = true;
				composingRef.current = false;
				onCompositionEndProp?.(event);
				if (event.defaultPrevented) return;
				if (!autoSelect) return;
				cancelCompositionEndFrame();
				compositionEndFrameRef.current = requestAnimationFrame(() => {
					compositionEndFrameRef.current = null;
					if (composingRef.current) return;
					forceValueUpdate();
				});
			});
			const onMouseDownProp = props.onMouseDown;
			const blurActiveItemOnClickProp = useBooleanEvent(blurActiveItemOnClick ?? (() => store.getState().compositeElementInFocusOrder));
			const setValueOnClickProp = useBooleanEvent(setValueOnClick);
			const showOnClickProp = useBooleanEvent(showOnClick ?? canShow);
			const onMouseDown = useEvent((event) => {
				onMouseDownProp?.(event);
				if (event.defaultPrevented) return;
				if (event.button) return;
				if (event.ctrlKey) return;
				if (!store) return;
				if (blurActiveItemOnClickProp(event)) store.setActiveId(null);
				if (setValueOnClickProp(event)) store.setInputValue(inputValue);
				if (showOnClickProp(event)) queueBeforeEvent(event.currentTarget, "mouseup", store.show);
			});
			const onKeyDownProp = props.onKeyDown;
			const showOnKeyPressProp = useBooleanEvent(showOnKeyPress ?? canShow);
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (!event.repeat) canAutoSelectRef.current = false;
				if (event.defaultPrevented) return;
				if (!store) return;
				const { open } = store.getState();
				if (open && event.key === "Enter") {
					event.preventDefault();
					return;
				}
				if (event.ctrlKey) return;
				if (event.altKey) return;
				if (event.shiftKey) return;
				if (event.metaKey) return;
				if (open) return;
				if (event.key === "ArrowUp" || event.key === "ArrowDown") {
					if (showOnKeyPressProp(event)) {
						event.preventDefault();
						store.show();
					}
				}
			});
			const onBlurProp = props.onBlur;
			const onBlur = useEvent((event) => {
				canAutoSelectRef.current = false;
				onBlurProp?.(event);
			});
			const id = useId(props.id);
			const ariaAutoComplete = isAriaAutoCompleteValue(autoComplete) ? autoComplete : void 0;
			const isActiveItem = useStoreState(store, ["activeId"], (state) => state.activeId === null);
			const formDisabled = disabledFromProps({
				disabled,
				"aria-disabled": props["aria-disabled"]
			});
			const composite = props.composite !== false;
			const [, setCompositeElement] = useTransactionState(composite ? null : store.setCompositeElement);
			const compositeElement = useStoreState(store, multiSelectable ? ["compositeElement"] : [], (state) => multiSelectable ? state.compositeElement : null);
			props = useWrapElement(props, (element) => {
				if (!name) return element;
				if (!Array.isArray(selectedValue)) return element;
				if (composite && !compositeElement) return element;
				return /* @__PURE__ */ (0, import_jsx_runtime$4.jsxs)(import_jsx_runtime$4.Fragment, { children: [element, selectedValue.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("input", {
					type: "hidden",
					name,
					form,
					disabled: formDisabled,
					value
				}, index))] });
			}, [
				name,
				form,
				formDisabled,
				composite,
				compositeElement,
				selectedValue
			]);
			props = {
				role: "combobox",
				"aria-autocomplete": ariaAutoComplete,
				"aria-haspopup": getPopupRole(contentElement, "listbox"),
				"aria-expanded": open,
				"aria-controls": contentElement?.id,
				"data-active-item": isActiveItem || void 0,
				value: inputValue,
				...props,
				id,
				name: multiSelectable ? void 0 : name,
				form,
				disabled,
				ref: useMergeRefs(ref, store.setInputElement, composite ? void 0 : setCompositeElement, props.ref),
				onChange,
				onCompositionStart,
				onCompositionEnd,
				onMouseDown,
				onKeyDown,
				onBlur
			};
			const scrollItemIntoView = getScrollItemIntoView(store);
			props = useComposite({
				store,
				unstable_scrollIntoView: scrollItemIntoView,
				focusable,
				...props,
				moveOnKeyPress: (event) => {
					if (isFalsyBooleanCallback(moveOnKeyPress, event)) return false;
					if (inline) setCanInline(true);
					return true;
				}
			});
			return {
				autoComplete: "off",
				...props
			};
		});
		Combobox = forwardRef$1(function Combobox(props) {
			const htmlProps = useCombobox(props);
			return createElement(TagName$4, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/combobox/combobox-item.js
function isSelected(storeValue, itemValue) {
	if (itemValue == null) return;
	if (storeValue == null) return false;
	if (Array.isArray(storeValue)) return storeValue.includes(itemValue);
	return storeValue === itemValue;
}
/**
* Returns the role for a combobox item based on the popup role.
*/
function getItemRole(popupRole) {
	return getItemRoleByPopupRole(popupRole) ?? "option";
}
var import_react$3, import_jsx_runtime$3, TagName$3, useComboboxItem, ComboboxItem;
function init_combobox_item() {
	return (init_combobox_item = __esmMin((() => {
		init_combobox_context();
		init_HXejjTMM();
		init_composite_hover();
		init_composite_item();
		init_dist$1();
		init_dist();
		import_react$3 = require_react();
		import_jsx_runtime$3 = require_jsx_runtime();
		init_dist$2();
		TagName$3 = "div";
		useComboboxItem = createHook(function useComboboxItem({ store, value, hideOnClick, setValueOnClick, selectValueOnClick = true, resetValueOnSelect, focusOnHover, moveOnKeyPress = true, preventScrollOnKeyDown, getItem: getItemProp, ...props }) {
			const context = useComboboxScopedContext();
			store = store || context;
			invariant(store, "ComboboxItem must be wrapped in a ComboboxList or ComboboxPopover component.");
			const id = useId(props.id);
			const listRole = (0, import_react$3.useContext)(ComboboxListRoleContext);
			const listRoleMatchesStore = listRole?.store === store;
			const { resetValueOnSelectState, multiSelectable, selected, autoFocusSelected, selectElement, contentElement } = useStoreStateObject(store, ["selectedValue"], {
				resetValueOnSelectState: "resetValueOnSelect",
				multiSelectable(state) {
					return Array.isArray(state.selectedValue);
				},
				selected(state) {
					return isSelected(state.selectedValue, value);
				},
				autoFocusSelected(state) {
					if (value == null) return false;
					if (!Array.isArray(state.selectedValue)) return state.selectedValue === value;
					return state.selectedValue[state.selectedValue.length - 1] === value;
				},
				selectElement: "selectElement",
				contentElement: "contentElement"
			});
			const autoFocusSelectedItem = !!selectElement;
			const selectMode = !!selectElement;
			const disabled = disabledFromProps(props);
			const getItem = (0, import_react$3.useCallback)((item) => {
				const nextItem = {
					...item,
					value: selectMode && disabled ? void 0 : value
				};
				if (getItemProp) return getItemProp(nextItem);
				return nextItem;
			}, [
				selectMode,
				disabled,
				value,
				getItemProp
			]);
			setValueOnClick = setValueOnClick ?? (!selectMode && !multiSelectable);
			hideOnClick = hideOnClick ?? (value != null && !multiSelectable);
			preventScrollOnKeyDown = preventScrollOnKeyDown ?? selectMode;
			const popupRole = listRoleMatchesStore ? listRole?.role : getPopupRole(contentElement);
			const role = getItemRole(typeof popupRole === "string" ? popupRole : void 0);
			const onClickProp = props.onClick;
			const setValueOnClickProp = useBooleanEvent(setValueOnClick);
			const selectValueOnClickProp = useBooleanEvent(selectValueOnClick);
			const resetValueOnSelectProp = useBooleanEvent(resetValueOnSelect ?? resetValueOnSelectState);
			const hideOnClickProp = useBooleanEvent(hideOnClick);
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				if (isDownloading(event)) return;
				if (isOpeningInNewTab(event)) return;
				if (value != null) {
					if (selectValueOnClickProp(event)) {
						if (resetValueOnSelectProp(event)) store?.resetInputValue();
						store?.setSelectedValue((prevValue) => {
							if (!Array.isArray(prevValue)) return value;
							if (prevValue.includes(value)) return prevValue.filter((v) => v !== value);
							return [...prevValue, value];
						});
					}
					if (setValueOnClickProp(event)) store?.setInputValue(value);
				}
				if (hideOnClickProp(event)) store?.hide();
			});
			const onKeyDownProp = props.onKeyDown;
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (event.defaultPrevented) return;
				const compositeElement = store?.getState().compositeElement;
				if (!compositeElement) return;
				if (hasFocus(compositeElement)) return;
				const printable = event.key.length === 1 && !event.ctrlKey && !event.metaKey;
				const paste = (!isApple() ? event.ctrlKey : event.metaKey) && event.key.toLowerCase() === "v";
				const deleteKey = event.key === "Backspace" || event.key === "Delete";
				if (printable || paste || deleteKey) {
					if (compositeElement === selectElement) return;
					if (isTextField(compositeElement)) {
						queueMicrotask(() => compositeElement.focus());
						store?.setInputValue(compositeElement.value);
						return;
					}
					compositeElement.focus();
					if ("value" in compositeElement && typeof compositeElement.value === "string") store?.setInputValue(compositeElement.value);
				}
			});
			if ((selectMode || multiSelectable) && selected != null) props = {
				"aria-selected": selected,
				...props
			};
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ComboboxItemValueContext.Provider, {
				value,
				children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ComboboxItemCheckedContext.Provider, {
					value: selected ?? false,
					children: element
				})
			}), [value, selected]);
			const defaultAutoFocus = autoFocusSelectedItem ? autoFocusSelected : void 0;
			props = {
				role,
				children: value,
				...props,
				id,
				onClick,
				onKeyDown
			};
			if (props.autoFocus === void 0 && defaultAutoFocus !== void 0) {
				props.autoFocus = false;
				props["data-autofocus"] = defaultAutoFocus || void 0;
			}
			const moveOnKeyPressProp = useBooleanEvent(moveOnKeyPress);
			const scrollItemIntoView = getScrollItemIntoView(store);
			props = useCompositeItem({
				store,
				unstable_scrollIntoView: scrollItemIntoView,
				...props,
				getItem,
				preventScrollOnKeyDown,
				moveOnKeyPress: (event) => {
					if (!moveOnKeyPressProp(event)) return false;
					const moveEvent = new Event("combobox-item-move");
					(store?.getState().compositeElement)?.dispatchEvent(moveEvent);
					return true;
				}
			});
			const focusOnHoverProp = useBooleanEvent(focusOnHover ?? selectMode);
			props = useCompositeHover({
				store,
				...props,
				focusOnHover(event) {
					if (!store.getState().open) return false;
					if (!focusOnHoverProp(event)) return false;
					return store.getState().open;
				}
			});
			return props;
		});
		ComboboxItem = memo(forwardRef$1(function ComboboxItem(props) {
			const htmlProps = useComboboxItem(props);
			return createElement(TagName$3, htmlProps);
		}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/combobox/combobox-item-value.js
function normalizeValue(value) {
	return normalizeString(value).toLowerCase();
}
function getOffsets(string, values) {
	const offsets = [];
	for (const value of values) {
		if (!value) continue;
		let pos = 0;
		const length = value.length;
		let index = string.indexOf(value, pos);
		while (index !== -1) {
			offsets.push([index, length]);
			pos = index + 1;
			index = string.indexOf(value, pos);
		}
	}
	return offsets;
}
function mergeOverlappingOffsets(offsets) {
	offsets.sort(([a], [b]) => a - b);
	const merged = [];
	for (const [offset, length] of offsets) {
		const last = merged[merged.length - 1];
		if (last && offset < last[0] + last[1]) last[1] = Math.max(last[1], offset + length - last[0]);
		else merged.push([offset, length]);
	}
	return merged;
}
function getNormalizedIndexes(itemValue) {
	const starts = [];
	const ends = [];
	let index = 0;
	for (const char of itemValue) {
		const normalizedLength = normalizeValue(char).length;
		for (let i = 0; i < normalizedLength; i += 1) {
			starts.push(i === 0 ? index : -1);
			ends.push(index);
		}
		index += char.length;
	}
	starts.push(itemValue.length);
	ends.push(itemValue.length);
	let nextBoundary = itemValue.length;
	for (let i = starts.length - 1; i >= 0; i -= 1) {
		const start = starts[i];
		if (start == null) continue;
		if (start === -1) starts[i] = nextBoundary;
		else nextBoundary = start;
	}
	return {
		starts,
		ends
	};
}
function toOriginalOffsets(itemValue, normalizedOffsets) {
	if (!normalizedOffsets.length) return normalizedOffsets;
	const { starts, ends } = getNormalizedIndexes(itemValue);
	const offsets = [];
	for (const [normalizedOffset, normalizedLength] of normalizedOffsets) {
		const start = starts[normalizedOffset];
		const end = ends[normalizedOffset + normalizedLength];
		if (start == null || end == null) continue;
		if (end <= start) continue;
		offsets.push([start, end - start]);
	}
	return offsets;
}
function splitValue(itemValue, userValue) {
	if (!itemValue) return itemValue;
	if (!userValue) return itemValue;
	const userValues = toArray(userValue).map(normalizeValue);
	const parts = [];
	const span = (value, autocomplete = false) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
		"data-autocomplete-value": autocomplete ? "" : void 0,
		"data-user-value": autocomplete ? void 0 : "",
		children: value
	}, parts.length);
	const offsets = toOriginalOffsets(itemValue, mergeOverlappingOffsets(getOffsets(normalizeValue(itemValue), new Set(userValues))));
	const firstEntry = offsets[0];
	if (!firstEntry) {
		parts.push(span(itemValue, true));
		return parts;
	}
	const [firstOffset] = firstEntry;
	[itemValue.slice(0, firstOffset), ...offsets.flatMap(([offset, length], i) => {
		const value = itemValue.slice(offset, offset + length);
		const nextOffset = offsets[i + 1]?.[0];
		return [value, itemValue.slice(offset + length, nextOffset)];
	})].forEach((value, i) => {
		if (!value) return;
		parts.push(span(value, i % 2 === 0));
	});
	return parts;
}
var import_react$2, import_jsx_runtime$2, TagName$2, useComboboxItemValue, ComboboxItemValue;
function init_combobox_item_value() {
	return (init_combobox_item_value = __esmMin((() => {
		init_combobox_context();
		init_dist$1();
		init_dist();
		import_react$2 = require_react();
		import_jsx_runtime$2 = require_jsx_runtime();
		init_dist$2();
		TagName$2 = "span";
		useComboboxItemValue = createHook(function useComboboxItemValue({ store, value, userValue, ...props }) {
			const context = useComboboxScopedContext();
			store = store || context;
			const itemContext = (0, import_react$2.useContext)(ComboboxItemValueContext);
			const itemValue = value ?? itemContext;
			const inputValue = useStoreState(store, ["inputValue"], (state) => userValue ?? state?.inputValue);
			props = {
				children: (0, import_react$2.useMemo)(() => {
					if (!itemValue) return;
					if (!inputValue) return itemValue;
					return splitValue(itemValue, inputValue);
				}, [itemValue, inputValue]),
				...props
			};
			return props;
		});
		ComboboxItemValue = forwardRef$1(function ComboboxItemValue(props) {
			const htmlProps = useComboboxItemValue(props);
			return createElement(TagName$2, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/combobox/combobox-label.js
var TagName$1, useComboboxLabel, ComboboxLabel;
function init_combobox_label() {
	return (init_combobox_label = __esmMin((() => {
		init_combobox_context();
		init_dist$1();
		init_dist();
		init_dist$2();
		TagName$1 = "label";
		useComboboxLabel = createHook(function useComboboxLabel({ store, ...props }) {
			const scopedContext = useComboboxScopedContext(true);
			const context = useComboboxProviderContext();
			store = store || context || scopedContext;
			invariant(store, "ComboboxLabel must receive a `store` prop or be wrapped in a ComboboxProvider component.");
			const inputElement = useStoreState(store, "inputElement");
			useAttribute(inputElement, "id");
			const comboboxId = inputElement?.id;
			const id = useId(props.id);
			props = {
				htmlFor: comboboxId,
				...props,
				id,
				ref: useMergeRefs(store.setLabelElement, props.ref)
			};
			return props;
		});
		ComboboxLabel = memo(forwardRef$1(function ComboboxLabel(props) {
			const htmlProps = useComboboxLabel(props);
			return createElement(TagName$1, htmlProps);
		}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/combobox/combobox-list.js
var import_react$1, import_jsx_runtime$1, TagName, useComboboxList, ComboboxList;
function init_combobox_list() {
	return (init_combobox_list = __esmMin((() => {
		init_C4_D9PgF();
		init_dialog_context();
		init_combobox_context();
		init_disclosure_content();
		init_dist$1();
		init_dist();
		import_react$1 = require_react();
		import_jsx_runtime$1 = require_jsx_runtime();
		init_dist$2();
		TagName = "div";
		useComboboxList = createHook(function useComboboxList({ store, alwaysVisible, ...props }) {
			const scopedContext = useComboboxScopedContext(true);
			const context = useComboboxContext();
			store = store || context;
			const scopedContextSameStore = !!store && store === scopedContext;
			invariant(store, "ComboboxList must receive a `store` prop or be wrapped in a ComboboxProvider component.");
			const onFocusProp = props.onFocus;
			const onFocus = useEvent((event) => {
				onFocusProp?.(event);
				if (event.defaultPrevented) return;
				if (!isSelfTarget(event)) return;
				const compositeElement = store.getState().compositeElement;
				if (!compositeElement) return;
				if (!isFocusable(compositeElement)) return;
				const list = event.currentTarget;
				queueMicrotask(() => {
					if (getTreeActiveElement(list) !== list) return;
					compositeElement.focus();
				});
			});
			const ref = (0, import_react$1.useRef)(null);
			const id = useId(props.id);
			const mounted = useStoreState(store, "mounted");
			const hidden = isHidden(mounted, props.hidden, alwaysVisible);
			const style = hidden ? {
				...props.style,
				display: "none"
			} : props.style;
			const multiSelectable = useStoreState(store, ["selectedValue"], (state) => Array.isArray(state.selectedValue));
			const role = useAttribute(ref, "role", props.role);
			const listRole = (0, import_react$1.useMemo)(() => ({
				store,
				role
			}), [store, role]);
			const ariaMultiSelectable = role === "listbox" || role === "tree" || role === "grid" ? multiSelectable || void 0 : void 0;
			const [hasNestedList, setHasNestedList] = (0, import_react$1.useState)(false);
			const contentElement = useStoreState(store, "contentElement");
			const parentHeadingContext = (0, import_react$1.useContext)(ComboboxHeadingContext);
			const headingState = (0, import_react$1.useState)();
			const [headingId, setHeadingId] = parentHeadingContext || headingState;
			const headingContext = (0, import_react$1.useMemo)(() => [headingId, setHeadingId], [headingId, setHeadingId]);
			useSafeLayoutEffect(() => {
				if (!mounted) return;
				const element = ref.current;
				if (!element) return;
				if (contentElement !== element) return;
				const update = () => {
					setHasNestedList(!!element.querySelector("[data-combobox-list]"));
				};
				const observer = new MutationObserver(update);
				observer.observe(element, {
					subtree: true,
					childList: true
				});
				update();
				return () => observer.disconnect();
			}, [mounted, contentElement]);
			if (!hasNestedList) props = {
				role: "listbox",
				"aria-multiselectable": ariaMultiSelectable,
				...props
			};
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ComboboxScopedContextProvider, {
				value: store,
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ComboboxHeadingContext.Provider, {
					value: headingContext,
					children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogHeadingContext.Provider, {
						value: setHeadingId,
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ComboboxListRoleContext.Provider, {
							value: listRole,
							children: element
						})
					})
				})
			}), [
				store,
				listRole,
				headingContext
			]);
			const setContentElement = id && (!scopedContext || !scopedContextSameStore) ? store.setContentElement : null;
			const labelElement = useStoreState(store, ["labelElement", "selectLabelElement"], (state) => {
				if (headingId) return null;
				return state.selectLabelElement || state.labelElement;
			});
			useAttribute(labelElement, "id");
			const labelId = headingId || labelElement?.id;
			props = {
				"data-combobox-list": "",
				"aria-labelledby": props["aria-label"] != null ? void 0 : labelId,
				hidden,
				...props,
				id,
				onFocus,
				ref: useMergeRefs(setContentElement, ref, props.ref),
				style,
				tabIndex: -1
			};
			return props;
		});
		ComboboxList = forwardRef$1(function ComboboxList(props) {
			const htmlProps = useComboboxList(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/tag/tag-context.js
var import_react, ctx, useTagContext;
function init_tag_context() {
	return (init_tag_context = __esmMin((() => {
		init_composite_context();
		init_dist$1();
		import_react = require_react();
		(0, import_react.createContext)(null);
		(0, import_react.createContext)(null);
		ctx = createStoreContext([CompositeContextProvider], [CompositeScopedContextProvider]);
		useTagContext = ctx.useContext;
		ctx.useScopedContext;
		ctx.useProviderContext;
		ctx.ContextProvider;
		ctx.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/combobox/combobox-store.js
function createComboboxStore({ tag, ...props } = {}) {
	const store = mergeStore(props.store, pick(tag, ["value", "rtl"]));
	const defaultInputValue = defaultValue(props.defaultInputValue, props.defaultValue);
	throwOnConflictingProps({
		...props,
		defaultInputValue,
		defaultValue: defaultInputValue
	}, store);
	const tagState = tag?.getState();
	const syncState = store?.getState();
	const activeId = defaultValue(props.activeId, syncState?.activeId, props.defaultActiveId, null);
	const composite = createCompositeStore({
		...props,
		activeId,
		compositeElementInFocusOrder: defaultValue(props.compositeElementInFocusOrder, props.includesBaseElement, syncState?.compositeElementInFocusOrder, syncState?.includesBaseElement, true),
		orientation: defaultValue(props.orientation, syncState?.orientation, "vertical"),
		focusLoop: defaultValue(props.focusLoop, syncState?.focusLoop, true),
		focusWrap: defaultValue(props.focusWrap, syncState?.focusWrap, true),
		virtualFocus: defaultValue(props.virtualFocus, syncState?.virtualFocus, true)
	});
	const popover = createPopoverStore({
		...props,
		placement: defaultValue(props.placement, syncState?.placement, "bottom-start")
	});
	const inputValue = defaultValue(props.inputValue, props.value, syncState?.inputValue, syncState?.value, defaultInputValue, "");
	const selectedValue = defaultValue(props.selectedValue, syncState?.selectedValue, tagState?.values, props.defaultSelectedValue, "");
	let shouldSetDefaultSelectedValue = props.selectedValue === void 0 && syncState?.selectedValue === void 0 && tagState?.values === void 0 && props.defaultSelectedValue === void 0;
	const multiSelectable = Array.isArray(selectedValue);
	const initialState = {
		...composite.getState(),
		...popover.getState(),
		inputValue,
		value: inputValue,
		selectedValue,
		resetValueOnSelect: defaultValue(props.resetValueOnSelect, syncState?.resetValueOnSelect, multiSelectable),
		resetValueOnHide: defaultValue(props.resetValueOnHide, syncState?.resetValueOnHide, multiSelectable && !tag),
		selectOnMove: defaultValue(props.selectOnMove, syncState?.selectOnMove, false),
		activeValue: syncState?.activeValue,
		inputElement: defaultValue(syncState?.inputElement, null),
		labelElement: defaultValue(syncState?.labelElement, null),
		selectElement: defaultValue(syncState?.selectElement, null),
		selectLabelElement: defaultValue(syncState?.selectLabelElement, null)
	};
	const combobox = createStore(initialState, composite, popover, store);
	setup(combobox, () => chain(sync(combobox, ["inputValue"], (state) => {
		combobox.setState("value", state.inputValue);
	}), sync(combobox, ["value"], (state) => {
		combobox.setState("inputValue", state.value);
	})));
	let resolveSelectedItemOnOpen = false;
	const selectDefaultOptions = /* @__PURE__ */ new Set();
	if (props.focusLoop === void 0 && syncState?.focusLoop === void 0) selectDefaultOptions.add("focusLoop");
	if (props.focusWrap === void 0 && syncState?.focusWrap === void 0) selectDefaultOptions.add("focusWrap");
	if (props.compositeElementInFocusOrder === void 0 && props.includesBaseElement === void 0 && syncState?.compositeElementInFocusOrder === void 0 && syncState?.includesBaseElement === void 0) selectDefaultOptions.add("compositeElementInFocusOrder");
	if (props.resetValueOnSelect === void 0 && syncState?.resetValueOnSelect === void 0) selectDefaultOptions.add("resetValueOnSelect");
	let syncedSelectElement = initialState.compositeElement === initialState.selectElement ? initialState.selectElement : null;
	const initialFallback = initialState.selectElement || initialState.compositeElement || initialState.disclosureElement;
	let syncedAnchorElement = initialState.anchorElement === initialFallback ? initialState.anchorElement : null;
	setup(combobox, () => sync(combobox, ["compositeElement", "selectElement"], (state) => {
		if (!state.selectElement && !syncedSelectElement) return;
		if (state.compositeElement && state.compositeElement === state.selectElement) {
			syncedSelectElement = state.selectElement;
			return;
		}
		if (state.compositeElement && state.compositeElement !== syncedSelectElement) {
			syncedSelectElement = null;
			return;
		}
		syncedSelectElement = state.selectElement;
		combobox.setState("compositeElement", syncedSelectElement);
	}));
	setup(combobox, () => sync(combobox, ["selectElement"], (state) => {
		if (!state.selectElement) return;
		const { focusLoop, focusWrap, compositeElementInFocusOrder, resetValueOnSelect } = combobox.getState();
		if (selectDefaultOptions.has("focusLoop")) composite.setState("focusLoop", false);
		if (selectDefaultOptions.has("focusWrap")) composite.setState("focusWrap", false);
		if (selectDefaultOptions.has("compositeElementInFocusOrder")) composite.setState("compositeElementInFocusOrder", false);
		if (selectDefaultOptions.has("resetValueOnSelect")) combobox.setState("resetValueOnSelect", true);
		return () => {
			const current = combobox.getState();
			if (selectDefaultOptions.has("focusLoop") && !current.focusLoop) composite.setState("focusLoop", focusLoop);
			if (selectDefaultOptions.has("focusWrap") && !current.focusWrap) composite.setState("focusWrap", focusWrap);
			if (selectDefaultOptions.has("compositeElementInFocusOrder") && !current.compositeElementInFocusOrder) composite.setState("compositeElementInFocusOrder", compositeElementInFocusOrder);
			if (selectDefaultOptions.has("resetValueOnSelect") && current.resetValueOnSelect) combobox.setState("resetValueOnSelect", resetValueOnSelect);
		};
	}));
	setup(combobox, () => sync(combobox, [
		"anchorElement",
		"compositeElement",
		"disclosureElement",
		"selectElement"
	], (state) => {
		if (state.anchorElement && state.anchorElement !== syncedAnchorElement) {
			syncedAnchorElement = null;
			return;
		}
		syncedAnchorElement = state.selectElement || state.compositeElement || state.disclosureElement;
		combobox.setState("anchorElement", syncedAnchorElement);
	}));
	setup(combobox, () => sync(combobox, [
		"items",
		"selectedValue",
		"selectElement"
	], (state, prevState) => {
		if (!shouldSetDefaultSelectedValue) return;
		if (state.selectedValue !== prevState.selectedValue) {
			shouldSetDefaultSelectedValue = false;
			return;
		}
		if (!state.selectElement) return;
		queueMicrotask(() => {
			if (!shouldSetDefaultSelectedValue) return;
			const state = combobox.getState();
			if (!state.selectElement) return;
			const item = state.items.find((item) => !item.disabled && item.value != null);
			if (item?.value == null) return;
			shouldSetDefaultSelectedValue = false;
			combobox.setState("selectedValue", item.value);
		});
	}));
	if (isTouchSafari) setup(combobox, () => sync(combobox, ["virtualFocus"], () => {
		combobox.setState("virtualFocus", false);
	}));
	setup(combobox, () => {
		if (!tag) return;
		return chain(sync(combobox, ["selectedValue"], (state) => {
			if (!Array.isArray(state.selectedValue)) return;
			tag.setValues(state.selectedValue);
		}), sync(tag, ["values"], (state) => {
			combobox.setState("selectedValue", state.values);
		}));
	});
	setup(combobox, () => sync(combobox, ["resetValueOnHide", "mounted"], (state) => {
		if (!state.resetValueOnHide) return;
		if (state.mounted) return;
		combobox.setState("inputValue", inputValue);
	}));
	setup(combobox, () => sync(combobox, ["open"], (state) => {
		if (state.open) {
			resolveSelectedItemOnOpen = true;
			return;
		}
		resolveSelectedItemOnOpen = false;
		combobox.setState("activeId", activeId);
		combobox.setState("moves", 0);
	}));
	setup(combobox, () => sync(combobox, ["moves", "activeId"], (state, prevState) => {
		if (state.moves !== prevState.moves) resolveSelectedItemOnOpen = false;
		if (state.activeId !== prevState.activeId) resolveSelectedItemOnOpen = false;
		if (state.moves === prevState.moves) combobox.setState("activeValue", void 0);
	}));
	setup(combobox, () => batch(combobox, ["moves", "renderedItems"], (state, prev) => {
		if (state.moves === prev.moves) return;
		const { activeId } = combobox.getState();
		const activeItem = composite.item(activeId);
		combobox.setState("activeValue", activeItem?.value);
	}));
	setup(combobox, () => sync(combobox, [
		"items",
		"mounted",
		"open",
		"selectedValue",
		"selectElement"
	], (state) => {
		if (!state.selectElement) return;
		if (state.mounted && !resolveSelectedItemOnOpen) return;
		const values = Array.isArray(state.selectedValue) ? state.selectedValue : [state.selectedValue];
		const lastValue = values[values.length - 1];
		if (lastValue == null) return;
		const item = state.items.find((item) => !item.disabled && item.value === lastValue);
		if (!item) return;
		resolveSelectedItemOnOpen = false;
		combobox.setState("activeId", item.id);
	}));
	setup(combobox, () => batch(combobox, ["selectOnMove", "moves"], (state) => {
		const { activeId, open, selectedValue, selectElement } = combobox.getState();
		if (!selectElement) return;
		if (!state.selectOnMove && open) return;
		if (Array.isArray(selectedValue)) return;
		if (!state.moves) return;
		if (!activeId) return;
		const item = composite.item(activeId);
		if (!item || item.disabled || item.value == null) return;
		combobox.setState("selectedValue", item.value);
	}));
	const setInputValue = (value) => {
		combobox.setState("inputValue", value);
	};
	const resetInputValue = () => setInputValue(initialState.inputValue);
	const setState = (key, value) => {
		selectDefaultOptions.delete(key);
		if (key === "includesBaseElement") selectDefaultOptions.delete("compositeElementInFocusOrder");
		if (key === "selectedValue") shouldSetDefaultSelectedValue = false;
		combobox.setState(key, value);
	};
	return {
		...popover,
		...composite,
		...combobox,
		setState,
		tag,
		setInputValue,
		resetInputValue,
		setValue: setInputValue,
		resetValue: resetInputValue,
		setSelectedValue: (selectedValue) => setState("selectedValue", selectedValue),
		setInputElement: (element) => combobox.setState("inputElement", element),
		setLabelElement: (element) => combobox.setState("labelElement", element),
		setSelectElement: (element) => combobox.setState("selectElement", element),
		setSelectLabelElement: (element) => combobox.setState("selectLabelElement", element)
	};
}
var isTouchSafari;
function init_combobox_store() {
	return (init_combobox_store = __esmMin((() => {
		init_composite_store();
		init_popover_store();
		init_dist$3();
		init_dist();
		isTouchSafari = isSafari() && isTouchDevice();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/combobox/combobox-store.js
function useComboboxStoreOptions(props) {
	const tag = useTagContext();
	props = {
		...props,
		tag: props.tag !== void 0 ? props.tag : tag
	};
	return useCompositeStoreOptions(props);
}
function useComboboxStoreProps(store, update, props) {
	useUpdateEffect(update, [props.tag, update]);
	const inputValueProps = {
		inputValue: props.inputValue ?? props.value,
		setInputValue: props.setInputValue ?? props.setValue
	};
	useStoreProps(store, inputValueProps, "inputValue", "setInputValue");
	useStoreProps(store, props, "selectedValue", "setSelectedValue");
	useStoreProps(store, props, "selectOnMove");
	useStoreProps(store, props, "resetValueOnHide");
	useStoreProps(store, props, "resetValueOnSelect");
	return Object.assign(useCompositeStoreProps(usePopoverStoreProps(store, update, props), update, props), { tag: props.tag });
}
function useComboboxStore(props = {}) {
	props = useComboboxStoreOptions(props);
	const [store, update] = useStore(createComboboxStore, props);
	return useComboboxStoreProps(store, update, props);
}
function init_combobox_store$1() {
	return (init_combobox_store$1 = __esmMin((() => {
		init_composite_store$1();
		init_popover_store$1();
		init_tag_context();
		init_dist$1();
		init_dist$2();
		init_combobox_store();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/combobox/combobox-provider.js
function ComboboxProvider(props = {}) {
	const store = useComboboxStore(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxContextProvider, {
		value: store,
		children: props.children
	});
}
var import_jsx_runtime;
function init_combobox_provider() {
	return (init_combobox_provider = __esmMin((() => {
		init_combobox_context();
		init_combobox_store$1();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
export { ComboboxLabel as a, init_combobox_item_value as c, Combobox as d, init_combobox as f, init_combobox_list as i, ComboboxItem as l, init_prefix_icon as m, init_combobox_provider as n, init_combobox_label as o, PrefixIcon as p, ComboboxList as r, ComboboxItemValue as s, ComboboxProvider as t, init_combobox_item as u };
