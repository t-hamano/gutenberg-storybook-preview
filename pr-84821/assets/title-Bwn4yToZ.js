import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_DialogPortal, n as init_DialogTitle, r as DialogPortal, t as DialogTitle } from "./DialogTitle-DG_nbyNT.js";
import { i as init_DialogBackdrop, n as init_DialogPopup, r as DialogBackdrop, t as DialogPopup } from "./DialogPopup-B6gXA6Az.js";
import { i as init_DialogClose, r as DialogClose } from "./DialogDescription-DehIBOF0.js";
import { n as init_MenuLinkItem, t as MenuLinkItem } from "./MenuLinkItem-DMvA7la5.js";
import { n as init_DialogRoot, t as DialogRoot } from "./DialogRoot-C-g326T6.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_text, t as Text } from "./text-BWRv8yVx.js";
import { t as close_default } from "./close-rKxd1Abw.js";
import { b as init_context$1, d as init_item, f as useItemContent, u as ItemContent, y as MenuItemContentContext } from "./trigger-CzbEMDRn.js";
import { i as renderSlotWithChildren, r as init_render_slot_with_children } from "./direction-provider-BxH2DiMW.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-D0Ow6POm.js";
import { i as useDeprioritizedInitialFocus, n as init_create_overlay_title_validation, r as init_use_deprioritized_initial_focus, t as createOverlayTitleValidation } from "./create-overlay-title-validation-BVwFswAg.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/build-module/menu/link-item.mjs
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
var import_jsx_runtime$6, STYLE_HASH_ATTRIBUTE$4, global_css_defense_default, resets_default, style_default$4, LinkItem;
function init_link_item() {
	return (init_link_item = __esmMin((() => {
		init_MenuLinkItem();
		init_clsx();
		init_react();
		init_build_module();
		init_context$1();
		init_item();
		import_jsx_runtime$6 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$4 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$4("abb19c3171", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}[role=treeitem] span._400bf7ee0c6061a9__span[aria-hidden]{display:var(--_gcd-span-display,inline);font-family:var(--_gcd-span-font-family,inherit);font-size:var(--_gcd-span-font-size,inherit);line-height:var(--_gcd-span-line-height,1);pointer-events:var(--_gcd-span-pointer-events,auto);position:var(--_gcd-span-position,static)}");
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
		if (typeof process === "undefined" || false) registerStyle$4("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$4("5e71ea1d52", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.d61e2d85c0ee0699__positioner{z-index:var(--wp-ui-menu-z-index,initial)}._34e81249f419a5a5__popup{--wp-ui-menu-popup-padding:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-min-width:160px;--wp-ui-menu-max-width:var(--wpds-dimension-surface-width-sm,320px);--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-item-padding-inline-end:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-group-head-padding-base:var(--wpds-dimension-padding-sm,8px);--wp-ui-menu-group-head-padding-inline:var(--_wp-ui-menu-group-head-padding-base);--wp-ui-menu-selection-indicator-track-size:0px;--wp-ui-menu-selection-indicator-size:var(--wpds-dimension-size-2xs,16px);--wp-ui-menu-selection-indicator-gap:0px;--_wp-ui-menu-elevation-md:0px 2px 3px 0px #0000000d,0px 4px 5px 0px #0000000a,0px 12px 12px 0px #00000008,0px 16px 16px 0px #00000005;background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-menu-elevation-md);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--wp-ui-menu-max-width));min-width:min(var(--available-width),var(--wp-ui-menu-min-width));outline:none;overflow-block:auto;overscroll-behavior:none;padding:var(--wp-ui-menu-popup-padding);scroll-padding:var(--wp-ui-menu-popup-padding);&:has(._42313b48c5459be3__item-selection-indicator){--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-selection-indicator-track-size:var(--wpds-dimension-size-2xs,16px)}}._33f07ab17005471d__list{--_wp-ui-menu-item-label-line-height:var(--wpds-typography-line-height-sm,20px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--_wp-ui-menu-item-label-line-height)}._33f07ab17005471d__list,.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{--wp-ui-menu-group-prefix-gap:0px;display:grid;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];min-width:0}.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{grid-column:1/-1}._33f07ab17005471d__list:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.e05914e1005d7c2e__radio-group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.f11085533c0056b0__group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix){--wp-ui-menu-group-prefix-gap:var(--wpds-dimension-gap-xs,4px)}._4a0fd085d76fd23c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);grid-column:prefix-start/content-end;line-height:var(--wpds-typography-line-height-xs,16px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));min-height:var(--wpds-dimension-size-sm,24px);min-width:0;padding-block:var(--wpds-dimension-padding-xs,4px);text-transform:uppercase}.bfc11368eadf3b39__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);grid-column:prefix-start/content-end;height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));@media (forced-colors:active){background-color:CanvasText}}._5c913bce0d8bb0d6__item{--wp-ui-menu-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-menu-item-padding-block:var(--wpds-dimension-padding-xs,4px);--_gcd-a-border-radius:var(--wpds-border-radius-sm,2px);align-content:center;align-items:start;border-radius:var(--wpds-border-radius-sm,2px);display:grid;gap:0;grid-column:1/-1;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];justify-content:stretch;min-height:var(--wp-ui-menu-item-height);min-width:0;padding-block:var(--wp-ui-menu-item-padding-block);scroll-margin:var(--wp-ui-menu-popup-padding);text-decoration:none;user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&[href]{cursor:pointer}@supports (grid-template-columns:subgrid){grid-template-columns:subgrid}&[data-popup-open]:not([data-disabled]){background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-xs,1px) solid GrayText;--_gcd-a-outline:var(--wpds-border-width-xs,1px) solid GrayText}}&[data-highlighted]:not([aria-disabled=true]){background-color:var(--wpds-color-background-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}&[aria-disabled=true]{background-color:var(--wpds-color-background-interactive-brand-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){color:GrayText}}}._42313b48c5459be3__item-selection-indicator,._64924ecabf65a5d6__item-prefix,.af879698ede76757__item-content{grid-row:1}._42313b48c5459be3__item-selection-indicator{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;grid-column:selection-start/selection-end;height:var(--_wp-ui-menu-item-label-line-height);justify-content:center;justify-self:center;margin-inline-end:var(--wpds-dimension-gap-xs,4px);pointer-events:none;width:var(--wp-ui-menu-selection-indicator-size);&[data-unchecked]{opacity:0}}._99c5bd141cbf516f__checkbox-selection-icon{translate:0 1px}._59aa9b3b3a651148__radio-selection-icon{fill:currentColor;height:var(--wpds-dimension-size-2xs,16px);width:var(--wpds-dimension-size-2xs,16px)}._64924ecabf65a5d6__item-prefix{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:prefix-start/prefix-end;justify-content:center;min-width:0}.a836378335a4cbf1__prefix-icon{align-self:flex-start;flex-shrink:0;margin-block-start:calc((var(--_wp-ui-menu-item-label-line-height) - var(--_wp-ui-menu-prefix-icon-size))/2)}.af879698ede76757__item-content{align-items:center;align-self:stretch;box-sizing:border-box;display:grid;grid-column:prefix-start/content-end;grid-template-columns:[label-start] minmax(0,1fr) [label-end suffix-start] auto [suffix-end shortcut-start] auto [shortcut-end trailing-start] auto [trailing-end];min-width:0;pointer-events:none;&._5c211f9edfe0ed66__has-prefix{grid-column:content-start/content-end}}._76f3e69cf2228139__item-descriptions{display:flex;flex-direction:column;grid-column:prefix-start/content-end;grid-row:2;min-width:0;padding-block-end:var(--wpds-dimension-padding-xs,4px);pointer-events:none}._5ed41da4abcf8958__item-label{--_gcd-heading-color:currentColor;--_gcd-p-line-height:var(--_wp-ui-menu-item-label-line-height);color:inherit;grid-column:label-start/label-end;line-height:var(--_wp-ui-menu-item-label-line-height);min-width:0;overflow-wrap:anywhere}.fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral-weak,#707070);color:var(--wpds-color-foreground-content-neutral-weak,#707070);overflow-wrap:anywhere}.af879698ede76757__item-content>._091406749ed93e6e__item-suffix{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:suffix-start/suffix-end;margin-inline-start:var(--wpds-dimension-gap-md,12px)}.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{grid-column:shortcut-start/shortcut-end}._06be17a91bf434a0__item-trailing,.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{color:var(--wpds-color-foreground-content-neutral-weak,#707070);margin-inline-start:var(--wpds-dimension-gap-md,12px)}._06be17a91bf434a0__item-trailing{align-items:center;display:flex;grid-column:trailing-start/trailing-end}._5ed41da4abcf8958__item-label+:is(._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){margin-inline-start:var(--wpds-dimension-gap-xl,24px)}._23630f40071a29ff__item-shortcut+._06be17a91bf434a0__item-trailing{margin-inline-start:var(--wpds-dimension-gap-xs,4px)}.b78aec79bf93eba0__submenu-chevron{margin-inline-end:calc(var(--wpds-dimension-gap-sm, 8px)*-1)}.b78aec79bf93eba0__submenu-chevron:dir(rtl){transform:rotate(180deg)}._60da3b6f9718cf76__external-link-indicator{display:inline-block;font-weight:var(--wpds-typography-font-weight-default,400);line-height:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px);text-decoration:none}._60da3b6f9718cf76__external-link-indicator:after{content:\"\\2197\"}._60da3b6f9718cf76__external-link-indicator:dir(rtl):after{content:\"\\2196\"}._5c913bce0d8bb0d6__item[aria-disabled=true] ._06be17a91bf434a0__item-trailing,._5c913bce0d8bb0d6__item[aria-disabled=true] ._091406749ed93e6e__item-suffix,._5c913bce0d8bb0d6__item[aria-disabled=true] ._23630f40071a29ff__item-shortcut,._5c913bce0d8bb0d6__item[aria-disabled=true] ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item[aria-disabled=true] .fa88c9f1a96a4c5a__item-description,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._06be17a91bf434a0__item-trailing,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._091406749ed93e6e__item-suffix,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._23630f40071a29ff__item-shortcut,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) .fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:currentColor;color:inherit}}}");
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
		LinkItem = (0, import_react.forwardRef)(function MenuLinkItem$1({ children, className, openInNewTab = false, target, prefix, shortcut, suffix, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, rel, ...props }, ref) {
			const externalLinkIndicator = openInNewTab || /^_blank$/i.test(target ?? "") ? /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("span", {
				className: style_default$4["external-link-indicator"],
				role: "img",
				"aria-label": __("(opens in a new tab)")
			}) : null;
			const { contentChildren, contentContextValue, itemAriaProps, shortcutDescriptionId } = useItemContent(children, {
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy,
				labelTrailing: externalLinkIndicator,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuLinkItem, {
				ref,
				...props,
				...itemAriaProps,
				rel,
				target: target ?? (openInNewTab ? "_blank" : void 0),
				className: clsx(global_css_defense_default.a, resets_default["box-sizing"], style_default$4.item, className),
				children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(MenuItemContentContext.Provider, {
					value: contentContextValue,
					children: /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(ItemContent, {
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
//#region ../packages/ui/build-module/utils/use-overlay-scroll-state-attributes.mjs
function reconcileTabbableFlag(el) {
	if (el.hasAttribute(SCROLL_TABBABLE_FLAG_ATTR) && el.getAttribute("tabindex") !== "0") el.removeAttribute(SCROLL_TABBABLE_FLAG_ATTR);
}
function updateScrollAttributes(el) {
	const { scrollTop, clientHeight, scrollHeight } = el;
	const overflows = scrollHeight - clientHeight > SCROLL_END_EPSILON;
	el.toggleAttribute(SCROLLED_FROM_TOP_ATTR, scrollTop > 0);
	el.toggleAttribute(SCROLLED_FROM_BOTTOM_ATTR, scrollTop + clientHeight < scrollHeight - SCROLL_END_EPSILON);
	reconcileTabbableFlag(el);
	if (overflows) {
		if (!el.hasAttribute(SCROLL_TABBABLE_FLAG_ATTR) && el.getAttribute("tabindex") === null) {
			el.setAttribute("tabindex", "0");
			el.setAttribute(SCROLL_TABBABLE_FLAG_ATTR, "");
		}
	} else if (el.hasAttribute(SCROLL_TABBABLE_FLAG_ATTR)) {
		el.removeAttribute("tabindex");
		el.removeAttribute(SCROLL_TABBABLE_FLAG_ATTR);
	}
}
function cleanupScrollAttributes(el) {
	for (const attr of HOOK_OWNED_ATTRS) el.removeAttribute(attr);
	reconcileTabbableFlag(el);
	if (el.hasAttribute(SCROLL_TABBABLE_FLAG_ATTR)) {
		el.removeAttribute("tabindex");
		el.removeAttribute(SCROLL_TABBABLE_FLAG_ATTR);
	}
}
function useOverlayScrollStateAttributes(onScroll) {
	const [node, setNode] = (0, import_react.useState)(null);
	const ref = (0, import_react.useCallback)((el) => {
		setNode(el);
	}, []);
	use_isomorphic_layout_effect_default(() => {
		if (!node) return;
		node.setAttribute(SCROLL_CONTAINER_ATTR, "");
		updateScrollAttributes(node);
		if (typeof ResizeObserver === "undefined") return () => {
			cleanupScrollAttributes(node);
		};
		const resizeObserver = new ResizeObserver(() => {
			updateScrollAttributes(node);
		});
		resizeObserver.observe(node);
		for (const child of Array.from(node.children)) resizeObserver.observe(child);
		let mutationObserver;
		if (typeof MutationObserver !== "undefined") {
			mutationObserver = new MutationObserver((records) => {
				for (const record of records) if (record.target === node) {
					for (const added of Array.from(record.addedNodes)) if (added instanceof Element) resizeObserver.observe(added);
					for (const removed of Array.from(record.removedNodes)) if (removed instanceof Element) resizeObserver.unobserve(removed);
				}
				updateScrollAttributes(node);
			});
			mutationObserver.observe(node, { childList: true });
		}
		return () => {
			resizeObserver.disconnect();
			mutationObserver?.disconnect();
			cleanupScrollAttributes(node);
		};
	}, [node]);
	return {
		ref,
		onScroll: (0, import_react.useCallback)((event) => {
			updateScrollAttributes(event.currentTarget);
			onScroll?.(event);
		}, [onScroll])
	};
}
var SCROLL_CONTAINER_ATTR, SCROLLED_FROM_TOP_ATTR, SCROLLED_FROM_BOTTOM_ATTR, SCROLL_TABBABLE_FLAG_ATTR, SCROLL_END_EPSILON, HOOK_OWNED_ATTRS;
function init_use_overlay_scroll_state_attributes() {
	return (init_use_overlay_scroll_state_attributes = __esmMin((() => {
		init_use_isomorphic_layout_effect();
		init_react();
		SCROLL_CONTAINER_ATTR = "data-wp-ui-overlay-scroll-container";
		SCROLLED_FROM_TOP_ATTR = "data-wp-ui-overlay-scrolled-from-top";
		SCROLLED_FROM_BOTTOM_ATTR = "data-wp-ui-overlay-scrolled-from-bottom";
		SCROLL_TABBABLE_FLAG_ATTR = "data-wp-ui-overlay-scroll-tabbable";
		SCROLL_END_EPSILON = 1;
		HOOK_OWNED_ATTRS = [
			SCROLL_CONTAINER_ATTR,
			SCROLLED_FROM_TOP_ATTR,
			SCROLLED_FROM_BOTTOM_ATTR
		];
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/close-icon-button.mjs
var import_jsx_runtime$5, CloseIconButton;
function init_close_icon_button() {
	return (init_close_icon_button = __esmMin((() => {
		init_DialogClose();
		init_react();
		init_build_module();
		init_build_module$1();
		init_icon_button();
		import_jsx_runtime$5 = require_jsx_runtime();
		CloseIconButton = (0, import_react.forwardRef)(function DialogCloseIconButton({ icon, label, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(DialogClose, {
				ref,
				render: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(IconButton, {
					variant: "minimal",
					size: "compact",
					tone: "neutral",
					...props,
					icon: icon ?? close_default,
					label: label ?? __("Close"),
					"data-wp-ui-dialog-close-icon": ""
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/content.mjs
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
var STYLE_HASH_ATTRIBUTE$3, focus_module_default, style_default$3, Content;
function init_content() {
	return (init_content = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_use_overlay_scroll_state_attributes();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("7c3267f794", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{.af79fb116edb0dd7__outset-ring--focus:focus,.dfcfdc28396e5d98__outset-ring--focus-visible:focus-visible,.e5cd9ee879f6403a__outset-ring--focus-within:focus-within{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within,.abc777e9713fa711__outset-ring--focus-except-active:focus{outline:none}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.abc777e9713fa711__outset-ring--focus-except-active:focus:not(:active){--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}}");
		focus_module_default = {
			"outset-ring--focus": "af79fb116edb0dd7__outset-ring--focus",
			"outset-ring--focus-visible": "dfcfdc28396e5d98__outset-ring--focus-visible",
			"outset-ring--focus-within": "e5cd9ee879f6403a__outset-ring--focus-within",
			"outset-ring--focus-except-active": "abc777e9713fa711__outset-ring--focus-except-active",
			"outset-ring--focus-within-except-active": "_3c9f5ee9fc9c136d__outset-ring--focus-within-except-active"
		};
		if (typeof process === "undefined" || false) registerStyle$3("c19cd1686b", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.f1c50237c4787636__header{min-height:var(--wpds-dimension-size-md,32px);padding-block:var(--wpds-dimension-padding-2xl,24px) var(--wpds-dimension-gap-lg,16px)}._579f95efdec92a66__footer,.f1c50237c4787636__header{align-items:center;display:flex;gap:var(--wpds-dimension-gap-sm,8px);padding-inline:var(--wpds-dimension-padding-2xl,24px)}._579f95efdec92a66__footer{justify-content:flex-end;padding-block:var(--wpds-dimension-gap-lg,16px) var(--wpds-dimension-padding-2xl,24px)}._5371cc08aad82574__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);--_gcd-heading-margin:0 auto 0 0;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);margin-inline-end:auto;&:dir(rtl){--_gcd-heading-margin:0 0 0 auto}}._766d9011d37ce2d9__content{flex:1 1 auto;min-block-size:0;overflow-block:auto;overflow-inline:hidden;padding:var(--wpds-dimension-padding-2xl,24px);&:focus-visible{outline-offset:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*-1)}}.f1c50237c4787636__header:has(~._766d9011d37ce2d9__content){border-block-end:1px solid transparent;padding-block-end:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}.f1c50237c4787636__header~._766d9011d37ce2d9__content{padding-block-start:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content~._579f95efdec92a66__footer{border-block-start:1px solid transparent;padding-block-start:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content:has(~._579f95efdec92a66__footer){padding-block-end:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content>.f1c50237c4787636__header,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header{padding-inline:0}._766d9011d37ce2d9__content>.f1c50237c4787636__header:first-child,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header:first-child{padding-block-start:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer{padding-inline:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer:last-child,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer:last-child{padding-block-end:0}.f1c50237c4787636__header:has(~[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-top]){border-block-end-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-bottom]~._579f95efdec92a66__footer{border-block-start-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-modal] [data-wp-ui-overlay-scroll-container]{overscroll-behavior:contain}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._074affe4c56b4f2f__backdrop{background-color:rgba(0,0,0,.35);inset:0;position:fixed;z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}&[data-open]{opacity:1}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}._8acaa98861620d4d__popup{--viewport-inset:var(--wpds-dimension-padding-2xl,24px);--_wp-ui-elevation-lg:0 5px 15px rgba(0,0,0,.08),0 15px 27px rgba(0,0,0,.07),0 30px 36px rgba(0,0,0,.04),0 50px 43px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);box-shadow:var(--_wp-ui-elevation-lg);box-sizing:border-box;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);left:50%;line-height:var(--wpds-typography-line-height-md,24px);max-height:calc(100dvh - var(--viewport-inset)*2);min-width:var(--wpds-dimension-surface-width-sm,320px);overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:calc(100vw - var(--viewport-inset)*2);z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0;transform:translate(-50%,-50%) scale(.9)}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),transform var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1))}@media (min-width:480px){min-width:var(--wpds-dimension-surface-width-md,400px)}&.fee2d441dbb756d0__is-auto{max-width:calc(100vw - var(--viewport-inset)*2);min-width:min(var(--wpds-dimension-surface-width-sm,320px),calc(100vw - var(--viewport-inset)*2));width:max-content;@media (min-width:480px){min-width:min(var(--wpds-dimension-surface-width-md,400px),calc(100vw - var(--viewport-inset)*2))}}&._7acfa67ebf092988__is-small{max-width:var(--wpds-dimension-surface-width-md,400px)}&._1eeeed880cb5769d__is-medium{max-width:var(--wpds-dimension-surface-width-lg,560px)}&._99f900b2267e22d0__is-large{max-width:var(--wpds-dimension-surface-width-2xl,960px)}&.b49f7ff9c06fe387__is-stretch{max-width:none}&.dcd4c2f5036cbf1a__is-full{height:100dvh}}._074affe4c56b4f2f__backdrop~._8acaa98861620d4d__popup{border-color:transparent}@media (forced-colors:active){._074affe4c56b4f2f__backdrop~* ._8acaa98861620d4d__popup,._8acaa98861620d4d__popup{border-color:CanvasText}}._76fb3b28fcbd45fc__header [data-wp-ui-dialog-close-icon]{margin-inline-start:auto}.d9d6da914ef0a77c__description{margin-bottom:var(--wpds-dimension-gap-lg,16px)}}}");
		style_default$3 = {
			"backdrop": "_074affe4c56b4f2f__backdrop",
			"popup": "_8acaa98861620d4d__popup",
			"is-auto": "fee2d441dbb756d0__is-auto",
			"is-small": "_7acfa67ebf092988__is-small",
			"is-medium": "_1eeeed880cb5769d__is-medium",
			"is-large": "_99f900b2267e22d0__is-large",
			"is-stretch": "b49f7ff9c06fe387__is-stretch",
			"is-full": "dcd4c2f5036cbf1a__is-full",
			"header": "_76fb3b28fcbd45fc__header f1c50237c4787636__header",
			"footer": "_00eeb4f220cddae3__footer _579f95efdec92a66__footer",
			"title": "f636832002af749e__title _5371cc08aad82574__title",
			"content": "_101038da9af7162f__content _766d9011d37ce2d9__content",
			"description": "d9d6da914ef0a77c__description"
		};
		Content = (0, import_react.forwardRef)(function DialogContent({ className, render, onScroll, ...props }, ref) {
			const { ref: scrollStateRef, onScroll: scrollStateOnScroll } = useOverlayScrollStateAttributes(onScroll);
			const mergedRef = useMergeRefs([ref, scrollStateRef]);
			return useRender({
				defaultTagName: "div",
				render,
				ref: mergedRef,
				props: mergeProps(props, {
					className: clsx(style_default$3.content, focus_module_default["outset-ring--focus-visible"], className),
					onScroll: scrollStateOnScroll
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/header.mjs
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
var STYLE_HASH_ATTRIBUTE$2, style_default$2, Header;
function init_header() {
	return (init_header = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("c19cd1686b", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.f1c50237c4787636__header{min-height:var(--wpds-dimension-size-md,32px);padding-block:var(--wpds-dimension-padding-2xl,24px) var(--wpds-dimension-gap-lg,16px)}._579f95efdec92a66__footer,.f1c50237c4787636__header{align-items:center;display:flex;gap:var(--wpds-dimension-gap-sm,8px);padding-inline:var(--wpds-dimension-padding-2xl,24px)}._579f95efdec92a66__footer{justify-content:flex-end;padding-block:var(--wpds-dimension-gap-lg,16px) var(--wpds-dimension-padding-2xl,24px)}._5371cc08aad82574__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);--_gcd-heading-margin:0 auto 0 0;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);margin-inline-end:auto;&:dir(rtl){--_gcd-heading-margin:0 0 0 auto}}._766d9011d37ce2d9__content{flex:1 1 auto;min-block-size:0;overflow-block:auto;overflow-inline:hidden;padding:var(--wpds-dimension-padding-2xl,24px);&:focus-visible{outline-offset:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*-1)}}.f1c50237c4787636__header:has(~._766d9011d37ce2d9__content){border-block-end:1px solid transparent;padding-block-end:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}.f1c50237c4787636__header~._766d9011d37ce2d9__content{padding-block-start:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content~._579f95efdec92a66__footer{border-block-start:1px solid transparent;padding-block-start:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content:has(~._579f95efdec92a66__footer){padding-block-end:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content>.f1c50237c4787636__header,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header{padding-inline:0}._766d9011d37ce2d9__content>.f1c50237c4787636__header:first-child,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header:first-child{padding-block-start:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer{padding-inline:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer:last-child,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer:last-child{padding-block-end:0}.f1c50237c4787636__header:has(~[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-top]){border-block-end-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-bottom]~._579f95efdec92a66__footer{border-block-start-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-modal] [data-wp-ui-overlay-scroll-container]{overscroll-behavior:contain}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._074affe4c56b4f2f__backdrop{background-color:rgba(0,0,0,.35);inset:0;position:fixed;z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}&[data-open]{opacity:1}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}._8acaa98861620d4d__popup{--viewport-inset:var(--wpds-dimension-padding-2xl,24px);--_wp-ui-elevation-lg:0 5px 15px rgba(0,0,0,.08),0 15px 27px rgba(0,0,0,.07),0 30px 36px rgba(0,0,0,.04),0 50px 43px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);box-shadow:var(--_wp-ui-elevation-lg);box-sizing:border-box;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);left:50%;line-height:var(--wpds-typography-line-height-md,24px);max-height:calc(100dvh - var(--viewport-inset)*2);min-width:var(--wpds-dimension-surface-width-sm,320px);overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:calc(100vw - var(--viewport-inset)*2);z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0;transform:translate(-50%,-50%) scale(.9)}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),transform var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1))}@media (min-width:480px){min-width:var(--wpds-dimension-surface-width-md,400px)}&.fee2d441dbb756d0__is-auto{max-width:calc(100vw - var(--viewport-inset)*2);min-width:min(var(--wpds-dimension-surface-width-sm,320px),calc(100vw - var(--viewport-inset)*2));width:max-content;@media (min-width:480px){min-width:min(var(--wpds-dimension-surface-width-md,400px),calc(100vw - var(--viewport-inset)*2))}}&._7acfa67ebf092988__is-small{max-width:var(--wpds-dimension-surface-width-md,400px)}&._1eeeed880cb5769d__is-medium{max-width:var(--wpds-dimension-surface-width-lg,560px)}&._99f900b2267e22d0__is-large{max-width:var(--wpds-dimension-surface-width-2xl,960px)}&.b49f7ff9c06fe387__is-stretch{max-width:none}&.dcd4c2f5036cbf1a__is-full{height:100dvh}}._074affe4c56b4f2f__backdrop~._8acaa98861620d4d__popup{border-color:transparent}@media (forced-colors:active){._074affe4c56b4f2f__backdrop~* ._8acaa98861620d4d__popup,._8acaa98861620d4d__popup{border-color:CanvasText}}._76fb3b28fcbd45fc__header [data-wp-ui-dialog-close-icon]{margin-inline-start:auto}.d9d6da914ef0a77c__description{margin-bottom:var(--wpds-dimension-gap-lg,16px)}}}");
		style_default$2 = {
			"backdrop": "_074affe4c56b4f2f__backdrop",
			"popup": "_8acaa98861620d4d__popup",
			"is-auto": "fee2d441dbb756d0__is-auto",
			"is-small": "_7acfa67ebf092988__is-small",
			"is-medium": "_1eeeed880cb5769d__is-medium",
			"is-large": "_99f900b2267e22d0__is-large",
			"is-stretch": "b49f7ff9c06fe387__is-stretch",
			"is-full": "dcd4c2f5036cbf1a__is-full",
			"header": "_76fb3b28fcbd45fc__header f1c50237c4787636__header",
			"footer": "_00eeb4f220cddae3__footer _579f95efdec92a66__footer",
			"title": "f636832002af749e__title _5371cc08aad82574__title",
			"content": "_101038da9af7162f__content _766d9011d37ce2d9__content",
			"description": "d9d6da914ef0a77c__description"
		};
		Header = (0, import_react.forwardRef)(function DialogHeader({ className, render, ...props }, ref) {
			return useRender({
				defaultTagName: "header",
				render,
				ref,
				props: mergeProps(props, { className: clsx(style_default$2.header, className) })
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/utils/create-overlay-modal-context.mjs
function createOverlayModalContext(initialValue) {
	const OverlayModalContext = (0, import_react.createContext)(initialValue);
	function OverlayModalProvider({ modal, children }) {
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(OverlayModalContext.Provider, {
			value: modal,
			children
		});
	}
	function useOverlayModal() {
		return (0, import_react.useContext)(OverlayModalContext);
	}
	return {
		Provider: OverlayModalProvider,
		useModal: useOverlayModal
	};
}
var import_jsx_runtime$4;
function init_create_overlay_modal_context() {
	return (init_create_overlay_modal_context = __esmMin((() => {
		init_react();
		import_jsx_runtime$4 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/context.mjs
var dialogModal, DialogModalProvider, useDialogModal, dialogTitleValidation, useDialogValidationContext, DialogValidationProvider;
function init_context() {
	return (init_context = __esmMin((() => {
		init_create_overlay_modal_context();
		init_create_overlay_title_validation();
		dialogModal = createOverlayModalContext(true);
		DialogModalProvider = dialogModal.Provider;
		useDialogModal = dialogModal.useModal;
		dialogTitleValidation = createOverlayTitleValidation("Dialog");
		useDialogValidationContext = dialogTitleValidation.useValidationContext;
		DialogValidationProvider = dialogTitleValidation.ValidationProvider;
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/portal.mjs
var import_jsx_runtime$3, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_DialogPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_runtime$3 = require_jsx_runtime();
		Portal = (0, import_react.forwardRef)(function DialogPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(DialogPortal, {
				ref,
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/popup.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, style_default$1, CLOSE_ICON_ATTR, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_DialogBackdrop(), init_DialogPopup();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_use_deprioritized_initial_focus();
		init_use_overlay_scroll_state_attributes();
		init_render_slot_with_children();
		init_context();
		init_portal();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("c19cd1686b", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.f1c50237c4787636__header{min-height:var(--wpds-dimension-size-md,32px);padding-block:var(--wpds-dimension-padding-2xl,24px) var(--wpds-dimension-gap-lg,16px)}._579f95efdec92a66__footer,.f1c50237c4787636__header{align-items:center;display:flex;gap:var(--wpds-dimension-gap-sm,8px);padding-inline:var(--wpds-dimension-padding-2xl,24px)}._579f95efdec92a66__footer{justify-content:flex-end;padding-block:var(--wpds-dimension-gap-lg,16px) var(--wpds-dimension-padding-2xl,24px)}._5371cc08aad82574__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);--_gcd-heading-margin:0 auto 0 0;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);margin-inline-end:auto;&:dir(rtl){--_gcd-heading-margin:0 0 0 auto}}._766d9011d37ce2d9__content{flex:1 1 auto;min-block-size:0;overflow-block:auto;overflow-inline:hidden;padding:var(--wpds-dimension-padding-2xl,24px);&:focus-visible{outline-offset:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*-1)}}.f1c50237c4787636__header:has(~._766d9011d37ce2d9__content){border-block-end:1px solid transparent;padding-block-end:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}.f1c50237c4787636__header~._766d9011d37ce2d9__content{padding-block-start:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content~._579f95efdec92a66__footer{border-block-start:1px solid transparent;padding-block-start:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content:has(~._579f95efdec92a66__footer){padding-block-end:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content>.f1c50237c4787636__header,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header{padding-inline:0}._766d9011d37ce2d9__content>.f1c50237c4787636__header:first-child,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header:first-child{padding-block-start:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer{padding-inline:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer:last-child,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer:last-child{padding-block-end:0}.f1c50237c4787636__header:has(~[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-top]){border-block-end-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-bottom]~._579f95efdec92a66__footer{border-block-start-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-modal] [data-wp-ui-overlay-scroll-container]{overscroll-behavior:contain}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._074affe4c56b4f2f__backdrop{background-color:rgba(0,0,0,.35);inset:0;position:fixed;z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}&[data-open]{opacity:1}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}._8acaa98861620d4d__popup{--viewport-inset:var(--wpds-dimension-padding-2xl,24px);--_wp-ui-elevation-lg:0 5px 15px rgba(0,0,0,.08),0 15px 27px rgba(0,0,0,.07),0 30px 36px rgba(0,0,0,.04),0 50px 43px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);box-shadow:var(--_wp-ui-elevation-lg);box-sizing:border-box;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);left:50%;line-height:var(--wpds-typography-line-height-md,24px);max-height:calc(100dvh - var(--viewport-inset)*2);min-width:var(--wpds-dimension-surface-width-sm,320px);overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:calc(100vw - var(--viewport-inset)*2);z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0;transform:translate(-50%,-50%) scale(.9)}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),transform var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1))}@media (min-width:480px){min-width:var(--wpds-dimension-surface-width-md,400px)}&.fee2d441dbb756d0__is-auto{max-width:calc(100vw - var(--viewport-inset)*2);min-width:min(var(--wpds-dimension-surface-width-sm,320px),calc(100vw - var(--viewport-inset)*2));width:max-content;@media (min-width:480px){min-width:min(var(--wpds-dimension-surface-width-md,400px),calc(100vw - var(--viewport-inset)*2))}}&._7acfa67ebf092988__is-small{max-width:var(--wpds-dimension-surface-width-md,400px)}&._1eeeed880cb5769d__is-medium{max-width:var(--wpds-dimension-surface-width-lg,560px)}&._99f900b2267e22d0__is-large{max-width:var(--wpds-dimension-surface-width-2xl,960px)}&.b49f7ff9c06fe387__is-stretch{max-width:none}&.dcd4c2f5036cbf1a__is-full{height:100dvh}}._074affe4c56b4f2f__backdrop~._8acaa98861620d4d__popup{border-color:transparent}@media (forced-colors:active){._074affe4c56b4f2f__backdrop~* ._8acaa98861620d4d__popup,._8acaa98861620d4d__popup{border-color:CanvasText}}._76fb3b28fcbd45fc__header [data-wp-ui-dialog-close-icon]{margin-inline-start:auto}.d9d6da914ef0a77c__description{margin-bottom:var(--wpds-dimension-gap-lg,16px)}}}");
		style_default$1 = {
			"backdrop": "_074affe4c56b4f2f__backdrop",
			"popup": "_8acaa98861620d4d__popup",
			"is-auto": "fee2d441dbb756d0__is-auto",
			"is-small": "_7acfa67ebf092988__is-small",
			"is-medium": "_1eeeed880cb5769d__is-medium",
			"is-large": "_99f900b2267e22d0__is-large",
			"is-stretch": "b49f7ff9c06fe387__is-stretch",
			"is-full": "dcd4c2f5036cbf1a__is-full",
			"header": "_76fb3b28fcbd45fc__header f1c50237c4787636__header",
			"footer": "_00eeb4f220cddae3__footer _579f95efdec92a66__footer",
			"title": "f636832002af749e__title _5371cc08aad82574__title",
			"content": "_101038da9af7162f__content _766d9011d37ce2d9__content",
			"description": "d9d6da914ef0a77c__description"
		};
		CLOSE_ICON_ATTR = "data-wp-ui-dialog-close-icon";
		Popup = (0, import_react.forwardRef)(function DialogPopup$1({ className, portal, children, size = "medium", initialFocus, finalFocus, ...props }, ref) {
			const { resolvedInitialFocus, popupRef } = useDeprioritizedInitialFocus({
				initialFocus,
				deprioritizedAttributes: [CLOSE_ICON_ATTR, SCROLL_CONTAINER_ATTR]
			});
			const mergedRef = useMergeRefs([ref, popupRef]);
			const modal = useDialogModal();
			const portalChildren = /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(import_jsx_runtime$2.Fragment, { children: [modal === true && /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(DialogBackdrop, {
				className: style_default$1.backdrop,
				"data-testid": "dialog-backdrop"
			}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(DialogPopup, {
				ref: mergedRef,
				className: clsx(style_default$1.popup, className, style_default$1[`is-${size}`]),
				initialFocus: resolvedInitialFocus,
				finalFocus,
				...props,
				"data-wp-ui-overlay-modal": modal === true ? "" : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(DialogValidationProvider, { children })
			})] });
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Portal, {}), portalChildren);
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/root.mjs
function Root({ modal = true, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogRoot, {
		modal,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(DialogModalProvider, {
			modal,
			children
		})
	});
}
var import_jsx_runtime$1;
function init_root() {
	return (init_root = __esmMin((() => {
		init_DialogRoot();
		init_context();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/dialog/title.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_default, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_DialogTitle();
		init_use_merge_refs();
		init_react();
		init_text();
		init_context();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("c19cd1686b", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.f1c50237c4787636__header{min-height:var(--wpds-dimension-size-md,32px);padding-block:var(--wpds-dimension-padding-2xl,24px) var(--wpds-dimension-gap-lg,16px)}._579f95efdec92a66__footer,.f1c50237c4787636__header{align-items:center;display:flex;gap:var(--wpds-dimension-gap-sm,8px);padding-inline:var(--wpds-dimension-padding-2xl,24px)}._579f95efdec92a66__footer{justify-content:flex-end;padding-block:var(--wpds-dimension-gap-lg,16px) var(--wpds-dimension-padding-2xl,24px)}._5371cc08aad82574__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);--_gcd-heading-margin:0 auto 0 0;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);margin-inline-end:auto;&:dir(rtl){--_gcd-heading-margin:0 0 0 auto}}._766d9011d37ce2d9__content{flex:1 1 auto;min-block-size:0;overflow-block:auto;overflow-inline:hidden;padding:var(--wpds-dimension-padding-2xl,24px);&:focus-visible{outline-offset:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*-1)}}.f1c50237c4787636__header:has(~._766d9011d37ce2d9__content){border-block-end:1px solid transparent;padding-block-end:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}.f1c50237c4787636__header~._766d9011d37ce2d9__content{padding-block-start:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content~._579f95efdec92a66__footer{border-block-start:1px solid transparent;padding-block-start:calc(var(--wpds-dimension-gap-lg, 16px) - 1px - var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content:has(~._579f95efdec92a66__footer){padding-block-end:calc(var(--wpds-border-width-focus, var(--wp-admin-border-width-focus, 2px))*2)}._766d9011d37ce2d9__content>.f1c50237c4787636__header,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header{padding-inline:0}._766d9011d37ce2d9__content>.f1c50237c4787636__header:first-child,._766d9011d37ce2d9__content>[data-drawer-content]>.f1c50237c4787636__header:first-child{padding-block-start:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer{padding-inline:0}._766d9011d37ce2d9__content>._579f95efdec92a66__footer:last-child,._766d9011d37ce2d9__content>[data-drawer-content]>._579f95efdec92a66__footer:last-child{padding-block-end:0}.f1c50237c4787636__header:has(~[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-top]){border-block-end-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-scroll-container][data-wp-ui-overlay-scrolled-from-bottom]~._579f95efdec92a66__footer{border-block-start-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}[data-wp-ui-overlay-modal] [data-wp-ui-overlay-scroll-container]{overscroll-behavior:contain}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._074affe4c56b4f2f__backdrop{background-color:rgba(0,0,0,.35);inset:0;position:fixed;z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}&[data-open]{opacity:1}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}._8acaa98861620d4d__popup{--viewport-inset:var(--wpds-dimension-padding-2xl,24px);--_wp-ui-elevation-lg:0 5px 15px rgba(0,0,0,.08),0 15px 27px rgba(0,0,0,.07),0 30px 36px rgba(0,0,0,.04),0 50px 43px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-lg,8px);box-shadow:var(--_wp-ui-elevation-lg);box-sizing:border-box;color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:flex;flex-direction:column;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);left:50%;line-height:var(--wpds-typography-line-height-md,24px);max-height:calc(100dvh - var(--viewport-inset)*2);min-width:var(--wpds-dimension-surface-width-sm,320px);overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:calc(100vw - var(--viewport-inset)*2);z-index:var(--wp-ui-dialog-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0;transform:translate(-50%,-50%) scale(.9)}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1)),transform var(--wpds-motion-duration-md,.2s) var(--wpds-motion-easing-expressive,cubic-bezier(.25,0,0,1))}@media (min-width:480px){min-width:var(--wpds-dimension-surface-width-md,400px)}&.fee2d441dbb756d0__is-auto{max-width:calc(100vw - var(--viewport-inset)*2);min-width:min(var(--wpds-dimension-surface-width-sm,320px),calc(100vw - var(--viewport-inset)*2));width:max-content;@media (min-width:480px){min-width:min(var(--wpds-dimension-surface-width-md,400px),calc(100vw - var(--viewport-inset)*2))}}&._7acfa67ebf092988__is-small{max-width:var(--wpds-dimension-surface-width-md,400px)}&._1eeeed880cb5769d__is-medium{max-width:var(--wpds-dimension-surface-width-lg,560px)}&._99f900b2267e22d0__is-large{max-width:var(--wpds-dimension-surface-width-2xl,960px)}&.b49f7ff9c06fe387__is-stretch{max-width:none}&.dcd4c2f5036cbf1a__is-full{height:100dvh}}._074affe4c56b4f2f__backdrop~._8acaa98861620d4d__popup{border-color:transparent}@media (forced-colors:active){._074affe4c56b4f2f__backdrop~* ._8acaa98861620d4d__popup,._8acaa98861620d4d__popup{border-color:CanvasText}}._76fb3b28fcbd45fc__header [data-wp-ui-dialog-close-icon]{margin-inline-start:auto}.d9d6da914ef0a77c__description{margin-bottom:var(--wpds-dimension-gap-lg,16px)}}}");
		style_default = {
			"backdrop": "_074affe4c56b4f2f__backdrop",
			"popup": "_8acaa98861620d4d__popup",
			"is-auto": "fee2d441dbb756d0__is-auto",
			"is-small": "_7acfa67ebf092988__is-small",
			"is-medium": "_1eeeed880cb5769d__is-medium",
			"is-large": "_99f900b2267e22d0__is-large",
			"is-stretch": "b49f7ff9c06fe387__is-stretch",
			"is-full": "dcd4c2f5036cbf1a__is-full",
			"header": "_76fb3b28fcbd45fc__header f1c50237c4787636__header",
			"footer": "_00eeb4f220cddae3__footer _579f95efdec92a66__footer",
			"title": "f636832002af749e__title _5371cc08aad82574__title",
			"content": "_101038da9af7162f__content _766d9011d37ce2d9__content",
			"description": "d9d6da914ef0a77c__description"
		};
		Title = (0, import_react.forwardRef)(function DialogTitle$1({ children, ...props }, forwardedRef) {
			const validationContext = useDialogValidationContext();
			const internalRef = (0, import_react.useRef)(null);
			const mergedRef = useMergeRefs([internalRef, forwardedRef]);
			(0, import_react.useEffect)(() => {
				if (validationContext) return validationContext.registerTitle(internalRef.current);
			}, [validationContext]);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				ref: mergedRef,
				variant: "heading-xl",
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { ...props }),
				className: style_default.title,
				children
			});
		});
	})))();
}
//#endregion
export { SCROLL_CONTAINER_ATTR as _, Popup as a, LinkItem as b, init_portal as c, Header as d, init_header as f, init_close_icon_button as g, CloseIconButton as h, init_root as i, createOverlayModalContext as l, init_content as m, init_title as n, init_popup as o, Content as p, Root as r, Portal as s, Title as t, init_create_overlay_modal_context as u, init_use_overlay_scroll_state_attributes as v, init_link_item as x, useOverlayScrollStateAttributes as y };
