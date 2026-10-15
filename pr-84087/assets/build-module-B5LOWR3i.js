import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as paramCase, t as init_dist_es2015 } from "./dist.es2015-BYklxwDS.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_MenuGroup, t as MenuGroup } from "./MenuGroup-EIDCmkJn.js";
import { i as init_MenuSubmenuRoot, n as init_MenuSubmenuTrigger, r as MenuSubmenuRoot, t as MenuSubmenuTrigger } from "./MenuSubmenuTrigger-D6ye1X9o.js";
import { n as init_icon, t as Icon } from "./icon-TYj7I5OY.js";
import { t as chevron_right_small_default } from "./chevron-right-small-hoxv40rA.js";
import { S as useMenuGroupContext, _ as MenuContext, b as init_context, d as init_item, f as useItemContent, u as ItemContent, v as MenuGroupContext, x as useMenuContext, y as MenuItemContentContext } from "./trigger-CQsDF1Ok.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/build-module/menu/group.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, style_default$1, Group;
function init_group() {
	return (init_group = __esmMin((() => {
		init_MenuGroup();
		init_clsx();
		init_react();
		init_context();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("d2f16b7c4b", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{.d61e2d85c0ee0699__positioner{z-index:var(--wp-ui-menu-z-index,initial)}._34e81249f419a5a5__popup{--wp-ui-menu-popup-padding:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-min-width:160px;--wp-ui-menu-max-width:var(--wpds-dimension-surface-width-sm,320px);--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-item-padding-inline-end:var(--wpds-dimension-padding-sm,8px);--_wp-ui-menu-group-head-padding-base:var(--wpds-dimension-padding-sm,8px);--wp-ui-menu-group-head-padding-inline:var(--_wp-ui-menu-group-head-padding-base);--wp-ui-menu-selection-indicator-track-size:0px;--wp-ui-menu-selection-indicator-size:var(--wpds-dimension-size-2xs,16px);--wp-ui-menu-selection-indicator-gap:0px;--_wp-ui-menu-elevation-md:0px 2px 3px 0px #0000000d,0px 4px 5px 0px #0000000a,0px 12px 12px 0px #00000008,0px 16px 16px 0px #00000005;background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-menu-elevation-md);max-height:min(var(--available-height),480px,60dvh);max-width:min(var(--available-width),var(--wp-ui-menu-max-width));min-width:min(var(--available-width),var(--wp-ui-menu-min-width));outline:none;overflow-block:auto;overscroll-behavior:none;padding:var(--wp-ui-menu-popup-padding);scroll-padding:var(--wp-ui-menu-popup-padding);&:has(._42313b48c5459be3__item-selection-indicator){--_wp-ui-menu-item-padding-inline-start:var(--wpds-dimension-padding-xs,4px);--wp-ui-menu-selection-indicator-track-size:var(--wpds-dimension-size-2xs,16px)}}._33f07ab17005471d__list{--_wp-ui-menu-item-label-line-height:var(--wpds-typography-line-height-sm,20px);color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--_wp-ui-menu-item-label-line-height)}._33f07ab17005471d__list,.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{--wp-ui-menu-group-prefix-gap:0px;display:grid;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];min-width:0}.e05914e1005d7c2e__radio-group,.f11085533c0056b0__group{grid-column:1/-1}._33f07ab17005471d__list:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.e05914e1005d7c2e__radio-group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix),.f11085533c0056b0__group:has(>._5c913bce0d8bb0d6__item>._64924ecabf65a5d6__item-prefix){--wp-ui-menu-group-prefix-gap:var(--wpds-dimension-gap-xs,4px)}._4a0fd085d76fd23c__group-label{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-emphasis,600);grid-column:prefix-start/content-end;line-height:var(--wpds-typography-line-height-xs,16px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));min-height:var(--wpds-dimension-size-sm,24px);min-width:0;padding-block:var(--wpds-dimension-padding-xs,4px);text-transform:uppercase}.bfc11368eadf3b39__separator{background-color:var(--wpds-color-stroke-surface-neutral-weak,#f0f0f0);grid-column:prefix-start/content-end;height:var(--wpds-border-width-xs,1px);margin-block:var(--wpds-dimension-gap-xs,4px);margin-inline:calc(var(--wp-ui-menu-group-head-padding-inline) - var(--_wp-ui-menu-group-head-padding-base));@media (forced-colors:active){background-color:CanvasText}}._5c913bce0d8bb0d6__item{--wp-ui-menu-item-height:var(--wpds-dimension-size-md,32px);--wp-ui-menu-item-padding-block:var(--wpds-dimension-padding-xs,4px);--_gcd-a-border-radius:var(--wpds-border-radius-sm,2px);align-content:center;align-items:start;border-radius:var(--wpds-border-radius-sm,2px);display:grid;gap:0;grid-column:1/-1;grid-template-columns:[item-padding-start] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-start)) [selection-start] var(--wp-ui-menu-selection-indicator-track-size) [selection-end] var(--wp-ui-menu-selection-indicator-gap) [prefix-start] max-content [prefix-end] var(--wp-ui-menu-group-prefix-gap) [content-start] minmax(0,1fr) [content-end] var(--wp-ui-menu-item-padding-inline,var(--_wp-ui-menu-item-padding-inline-end)) [item-padding-end];justify-content:stretch;min-height:var(--wp-ui-menu-item-height);min-width:0;padding-block:var(--wp-ui-menu-item-padding-block);scroll-margin:var(--wp-ui-menu-popup-padding);text-decoration:none;user-select:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}&[href]{cursor:pointer}@supports (grid-template-columns:subgrid){grid-template-columns:subgrid}&[data-popup-open]:not([data-disabled]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-xs,1px) solid GrayText;--_gcd-a-outline:var(--wpds-border-width-xs,1px) solid GrayText;--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[data-highlighted]:not([aria-disabled=true]){--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e);outline:none;@media (forced-colors:active){--_gcd-a-color:HighlightText;background-color:Highlight;color:HighlightText;forced-color-adjust:none}}&[aria-disabled=true]{--_gcd-a-color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000);color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d);@media (forced-colors:active){--_gcd-a-color:GrayText;color:GrayText}}}._34e81249f419a5a5__popup:not([data-pointer-highlight]) ._5c913bce0d8bb0d6__item[data-highlighted]:focus-visible{--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:0;position:relative;z-index:1;@media (forced-colors:active){--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight;--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid Highlight}}._42313b48c5459be3__item-selection-indicator,._64924ecabf65a5d6__item-prefix,.af879698ede76757__item-content{grid-row:1}._42313b48c5459be3__item-selection-indicator{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;grid-column:selection-start/selection-end;height:var(--_wp-ui-menu-item-label-line-height);justify-content:center;justify-self:center;margin-inline-end:var(--wpds-dimension-gap-xs,4px);pointer-events:none;width:var(--wp-ui-menu-selection-indicator-size);&[data-unchecked]{opacity:0}}._99c5bd141cbf516f__checkbox-selection-icon{translate:0 1px}._59aa9b3b3a651148__radio-selection-icon{fill:currentColor;height:var(--wpds-dimension-size-2xs,16px);width:var(--wpds-dimension-size-2xs,16px)}._64924ecabf65a5d6__item-prefix{align-items:center;display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:prefix-start/prefix-end;justify-content:center;min-width:0}.a836378335a4cbf1__prefix-icon{align-self:flex-start;flex-shrink:0;margin-block-start:calc((var(--_wp-ui-menu-item-label-line-height) - var(--_wp-ui-menu-prefix-icon-size))/2)}.af879698ede76757__item-content{align-items:center;align-self:stretch;box-sizing:border-box;display:grid;grid-column:prefix-start/content-end;grid-template-columns:[label-start] minmax(0,1fr) [label-end suffix-start] auto [suffix-end shortcut-start] auto [shortcut-end trailing-start] auto [trailing-end];min-width:0;pointer-events:none;&._5c211f9edfe0ed66__has-prefix{grid-column:content-start/content-end}}._76f3e69cf2228139__item-descriptions{display:flex;flex-direction:column;grid-column:prefix-start/content-end;grid-row:2;min-width:0;padding-block-end:var(--wpds-dimension-padding-xs,4px);pointer-events:none}._5ed41da4abcf8958__item-label{--_gcd-heading-color:currentColor;--_gcd-p-line-height:var(--_wp-ui-menu-item-label-line-height);color:inherit;grid-column:label-start/label-end;line-height:var(--_wp-ui-menu-item-label-line-height);min-width:0;overflow-wrap:anywhere}.fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral-weak,#707070);color:var(--wpds-color-foreground-content-neutral-weak,#707070);overflow-wrap:anywhere}.af879698ede76757__item-content>._091406749ed93e6e__item-suffix{align-items:center;color:var(--wpds-color-foreground-content-neutral-weak,#707070);display:flex;gap:var(--wpds-dimension-gap-xs,4px);grid-column:suffix-start/suffix-end;margin-inline-start:var(--wpds-dimension-gap-md,12px)}.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{grid-column:shortcut-start/shortcut-end}._06be17a91bf434a0__item-trailing,.af879698ede76757__item-content>._23630f40071a29ff__item-shortcut{color:var(--wpds-color-foreground-content-neutral-weak,#707070);margin-inline-start:var(--wpds-dimension-gap-md,12px)}._06be17a91bf434a0__item-trailing{align-items:center;display:flex;grid-column:trailing-start/trailing-end}._5ed41da4abcf8958__item-label+:is(._091406749ed93e6e__item-suffix,._23630f40071a29ff__item-shortcut,._06be17a91bf434a0__item-trailing){margin-inline-start:var(--wpds-dimension-gap-xl,24px)}._23630f40071a29ff__item-shortcut+._06be17a91bf434a0__item-trailing{margin-inline-start:var(--wpds-dimension-gap-xs,4px)}.b78aec79bf93eba0__submenu-chevron{margin-inline-end:calc(var(--wpds-dimension-gap-sm, 8px)*-1)}.b78aec79bf93eba0__submenu-chevron:dir(rtl){transform:rotate(180deg)}._60da3b6f9718cf76__external-link-indicator{display:inline-block;font-weight:var(--wpds-typography-font-weight-default,400);line-height:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px);text-decoration:none}._60da3b6f9718cf76__external-link-indicator:after{content:\"\\2197\"}._60da3b6f9718cf76__external-link-indicator:dir(rtl):after{content:\"\\2196\"}._5c913bce0d8bb0d6__item[aria-disabled=true] ._06be17a91bf434a0__item-trailing,._5c913bce0d8bb0d6__item[aria-disabled=true] ._091406749ed93e6e__item-suffix,._5c913bce0d8bb0d6__item[aria-disabled=true] ._23630f40071a29ff__item-shortcut,._5c913bce0d8bb0d6__item[aria-disabled=true] ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item[aria-disabled=true] .fa88c9f1a96a4c5a__item-description,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._06be17a91bf434a0__item-trailing,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._091406749ed93e6e__item-suffix,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._23630f40071a29ff__item-shortcut,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) ._42313b48c5459be3__item-selection-indicator,._5c913bce0d8bb0d6__item[data-highlighted]:not([aria-disabled=true]) .fa88c9f1a96a4c5a__item-description,._5c913bce0d8bb0d6__item[data-popup-open]:not([data-disabled]) ._06be17a91bf434a0__item-trailing,._5c913bce0d8bb0d6__item[data-popup-open]:not([data-disabled]) ._091406749ed93e6e__item-suffix,._5c913bce0d8bb0d6__item[data-popup-open]:not([data-disabled]) ._23630f40071a29ff__item-shortcut,._5c913bce0d8bb0d6__item[data-popup-open]:not([data-disabled]) .fa88c9f1a96a4c5a__item-description{--_gcd-heading-color:currentColor;color:inherit}}}");
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
		Group = (0, import_react.forwardRef)(function MenuGroup$1({ className, ...props }, ref) {
			if (useMenuGroupContext() === "radio-group") throw new Error("Menu.Group: Cannot be nested inside Menu.RadioGroup. Remove Menu.Group and put Menu.GroupLabel and Menu.RadioItem directly inside Menu.RadioGroup.");
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(MenuGroupContext.Provider, {
				value: "group",
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(MenuGroup, {
					ref,
					className: clsx(style_default$1.group, className),
					...props
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/submenu-root.mjs
function SubmenuRoot(props) {
	const submenuTriggerRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MenuContext.Provider, {
		value: {
			isSubmenu: true,
			submenuTriggerRef
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MenuGroupContext.Provider, {
			value: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MenuSubmenuRoot, { ...props })
		})
	});
}
var import_jsx_runtime$1;
function init_submenu_root() {
	return (init_submenu_root = __esmMin((() => {
		init_MenuSubmenuRoot();
		init_react();
		init_context();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/menu/submenu-trigger.mjs
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
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, global_css_defense_default, resets_default, style_default, SubmenuTrigger;
function init_submenu_trigger() {
	return (init_submenu_trigger = __esmMin((() => {
		init_MenuSubmenuTrigger();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_build_module$1();
		init_icon();
		init_context();
		init_item();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("e8e31009f5", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}");
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
		if (typeof process === "undefined" || false) registerStyle("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
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
		SubmenuTrigger = (0, import_react.forwardRef)(function MenuSubmenuTrigger$1({ children, className, prefix, shortcut, suffix, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...props }, ref) {
			const { submenuTriggerRef } = useMenuContext();
			const mergedRef = useMergeRefs([ref, submenuTriggerRef ?? null]);
			const { contentChildren, contentContextValue, itemAriaProps, shortcutDescriptionId } = useItemContent(children, {
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSubmenuTrigger, {
				ref: mergedRef,
				...itemAriaProps,
				className: clsx(global_css_defense_default.div, resets_default["box-sizing"], style_default.item, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemContentContext.Provider, {
					value: contentContextValue,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemContent, {
						prefix,
						shortcut,
						shortcutDescriptionId,
						suffix,
						trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: style_default["submenu-chevron"],
							icon: chevron_right_small_default,
							size: 24,
							"aria-hidden": "true"
						}),
						children: contentChildren
					})
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/kebab-case/build-module/index.mjs
function kebabCase(str) {
	let input = str?.toString?.() ?? "";
	input = input.replace(/['\u2019]/, "");
	return paramCase(input, { splitRegexp: [
		/(?!(?:1ST|2ND|3RD|[4-9]TH)(?![a-z]))([a-z0-9])([A-Z])/g,
		/(?!(?:1st|2nd|3rd|[4-9]th)(?![a-z]))([0-9])([a-z])/g,
		/([A-Za-z])([0-9])/g,
		/([A-Z])([A-Z][a-z])/g
	] });
}
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_dist_es2015();
	})))();
}
//#endregion
export { SubmenuRoot as a, init_group as c, init_submenu_trigger as i, kebabCase as n, init_submenu_root as o, SubmenuTrigger as r, Group as s, init_build_module as t };
