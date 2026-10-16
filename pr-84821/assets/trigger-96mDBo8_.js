import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { c as init_PopoverPositioner, d as PopoverPortal, f as init_PopoverPortal, g as init_PopoverRoot, h as PopoverRoot, i as init_PopoverPopup, m as init_PopoverTrigger, n as init_PopoverBackdrop, p as PopoverTrigger, r as PopoverPopup, s as PopoverPositioner, t as PopoverBackdrop } from "./PopoverBackdrop-Cqf1Dh-L.js";
import { n as init_PopoverTitle, t as PopoverTitle } from "./PopoverTitle-BcpXJNqn.js";
import { n as init_text, t as Text } from "./text-BWRv8yVx.js";
import { i as renderSlotWithChildren, n as init_direction_provider, r as init_render_slot_with_children, t as DirectionProvider } from "./direction-provider-BxH2DiMW.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
import { n as useIframeDismissalBridge, t as init_use_iframe_dismissal_bridge } from "./use-iframe-dismissal-bridge-BX5lYU-S.js";
import { i as useDeprioritizedInitialFocus, n as init_create_overlay_title_validation, r as init_use_deprioritized_initial_focus, t as createOverlayTitleValidation } from "./create-overlay-title-validation-BVwFswAg.js";
//#region ../packages/ui/build-module/popover/context.mjs
var popoverTitleValidation, usePopoverValidationContext, PopoverValidationProvider;
function init_context() {
	return (init_context = __esmMin((() => {
		init_create_overlay_title_validation();
		popoverTitleValidation = createOverlayTitleValidation("Popover");
		usePopoverValidationContext = popoverTitleValidation.useValidationContext;
		PopoverValidationProvider = popoverTitleValidation.ValidationProvider;
	})))();
}
//#endregion
//#region ../packages/ui/build-module/popover/portal.mjs
var import_jsx_runtime$5, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_PopoverPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_runtime$5 = require_jsx_runtime();
		Portal = (0, import_react.forwardRef)(function PopoverPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(PopoverPortal, {
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/popover/positioner.mjs
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
var import_jsx_runtime$4, STYLE_HASH_ATTRIBUTE$2, resets_default, style_default$2, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_PopoverPositioner();
		init_react();
		import_jsx_runtime$4 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$2("4246f24b57", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._10450722b9676f78__positioner{z-index:var(--wp-ui-popover-z-index,initial)}._84e8f597bcf683b8__popup{outline:0}._972134b6cd5808d8__surface{--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-md,24px);padding:var(--wpds-dimension-padding-lg,16px)}.e4d544aa033f05c6__backdrop~* ._972134b6cd5808d8__surface{border-color:transparent}@media (forced-colors:active){._972134b6cd5808d8__surface,.e4d544aa033f05c6__backdrop~* ._972134b6cd5808d8__surface{border-color:CanvasText}}.ca05d3eb89321fcd__arrow{display:flex;&[data-side=top]{bottom:-8px;rotate:180deg}&[data-side=bottom]{rotate:0deg;top:-8px}&[data-side=left]{inset-inline-end:-13px;rotate:90deg}&[data-side=right]{inset-inline-start:-13px;rotate:-90deg}}._12d8edd9eb946b5f__arrow-fill{fill:var(--wpds-color-background-surface-neutral-strong,#fff)}._6ddab482bd929dad__arrow-stroke{fill:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._6d7e4729cd96960e__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);color:var(--wpds-color-foreground-content-neutral,#1e1e1e)}.e4d544aa033f05c6__backdrop{background-color:rgba(0,0,0,.15);inset:0;opacity:1;position:fixed;z-index:var(--wp-ui-popover-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-sm,.1s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}}}");
		style_default$2 = {
			"positioner": "_10450722b9676f78__positioner",
			"popup": "_84e8f597bcf683b8__popup _380b81b8f79fb10f__dropdown-motion",
			"surface": "_972134b6cd5808d8__surface",
			"backdrop": "e4d544aa033f05c6__backdrop",
			"arrow": "ca05d3eb89321fcd__arrow",
			"arrow-fill": "_12d8edd9eb946b5f__arrow-fill",
			"arrow-stroke": "_6ddab482bd929dad__arrow-stroke",
			"title": "_6d7e4729cd96960e__title"
		};
		Positioner = (0, import_react.forwardRef)(function PopoverPositioner$1({ align = "center", arrowPadding = 8, className, side = "bottom", sideOffset = 8, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(PopoverPositioner, {
				ref,
				align,
				arrowPadding,
				side,
				sideOffset,
				...props,
				className: clsx(resets_default["box-sizing"], style_default$2.positioner, className)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/popover/popup.mjs
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
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$1, style_default$1, CLOSE_ATTR, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_PopoverBackdrop(), init_PopoverPopup();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_use_deprioritized_initial_focus();
		init_render_slot_with_children();
		init_context();
		init_portal();
		init_positioner();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("4246f24b57", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._10450722b9676f78__positioner{z-index:var(--wp-ui-popover-z-index,initial)}._84e8f597bcf683b8__popup{outline:0}._972134b6cd5808d8__surface{--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-md,24px);padding:var(--wpds-dimension-padding-lg,16px)}.e4d544aa033f05c6__backdrop~* ._972134b6cd5808d8__surface{border-color:transparent}@media (forced-colors:active){._972134b6cd5808d8__surface,.e4d544aa033f05c6__backdrop~* ._972134b6cd5808d8__surface{border-color:CanvasText}}.ca05d3eb89321fcd__arrow{display:flex;&[data-side=top]{bottom:-8px;rotate:180deg}&[data-side=bottom]{rotate:0deg;top:-8px}&[data-side=left]{inset-inline-end:-13px;rotate:90deg}&[data-side=right]{inset-inline-start:-13px;rotate:-90deg}}._12d8edd9eb946b5f__arrow-fill{fill:var(--wpds-color-background-surface-neutral-strong,#fff)}._6ddab482bd929dad__arrow-stroke{fill:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._6d7e4729cd96960e__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);color:var(--wpds-color-foreground-content-neutral,#1e1e1e)}.e4d544aa033f05c6__backdrop{background-color:rgba(0,0,0,.15);inset:0;opacity:1;position:fixed;z-index:var(--wp-ui-popover-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-sm,.1s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}}}");
		style_default$1 = {
			"positioner": "_10450722b9676f78__positioner",
			"popup": "_84e8f597bcf683b8__popup _380b81b8f79fb10f__dropdown-motion",
			"surface": "_972134b6cd5808d8__surface",
			"backdrop": "e4d544aa033f05c6__backdrop",
			"arrow": "ca05d3eb89321fcd__arrow",
			"arrow-fill": "_12d8edd9eb946b5f__arrow-fill",
			"arrow-stroke": "_6ddab482bd929dad__arrow-stroke",
			"title": "_6d7e4729cd96960e__title"
		};
		CLOSE_ATTR = "data-wp-ui-popover-close";
		Popup = (0, import_react.forwardRef)(function PopoverPopup$1({ backdrop = false, children, className, portal, positioner, finalFocus, initialFocus, variant = "default", ...props }, ref) {
			const { resolvedInitialFocus, popupRef } = useDeprioritizedInitialFocus({
				initialFocus,
				deprioritizedAttributes: [CLOSE_ATTR]
			});
			const mergedPopupRef = useMergeRefs([ref, popupRef]);
			const useDefaultSurface = variant !== "unstyled";
			const validatedChildren = /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(PopoverValidationProvider, { children });
			const popupChildren = useDefaultSurface ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("div", {
				className: style_default$1.surface,
				children: validatedChildren
			}) : validatedChildren;
			const backdropElement = backdrop ? /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(PopoverBackdrop, { className: style_default$1.backdrop }) : null;
			const popupContent = /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(PopoverPopup, {
				ref: mergedPopupRef,
				initialFocus: resolvedInitialFocus,
				finalFocus,
				className: clsx(useDefaultSurface && style_default$1.popup, className),
				...props,
				children: popupChildren
			});
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Positioner, {}), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Portal, {}), /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)(import_jsx_runtime$3.Fragment, { children: [backdropElement, positionedPopup] }));
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/popover/root.mjs
function Root(props) {
	const iframeDismissalProps = useIframeDismissalBridge({
		defaultOpen: props.defaultOpen,
		modal: props.modal ?? false,
		onOpenChange: (nextOpen, eventDetails) => props.onOpenChange?.(nextOpen, eventDetails),
		open: props.open
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(PopoverRoot, {
		...props,
		...iframeDismissalProps
	}) });
}
var import_jsx_runtime$2;
function init_root() {
	return (init_root = __esmMin((() => {
		init_PopoverRoot();
		init_direction_provider();
		init_use_iframe_dismissal_bridge();
		import_jsx_runtime$2 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/popover/title.mjs
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
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE, style_default, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_PopoverTitle();
		init_use_merge_refs();
		init_react();
		init_text();
		init_context();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("4246f24b57", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._380b81b8f79fb10f__dropdown-motion,._7f344b94e270e039__dropdown-motion--fade-only{--wp-ui-dropdown-slide-distance:4px;--wp-ui-dropdown-slide-duration:var(--wpds-motion-duration-md,200ms);--wp-ui-dropdown-slide-easing:var(--wpds-motion-easing-expressive,cubic-bezier(0.25,0,0,1));--wp-ui-dropdown-fade-duration:var(--wpds-motion-duration-sm,100ms);--wp-ui-dropdown-fade-easing:linear;@media not (prefers-reduced-motion){transition-duration:var(--wp-ui-dropdown-slide-duration),var(--wp-ui-dropdown-fade-duration);transition-property:transform,opacity;transition-timing-function:var(--wp-ui-dropdown-slide-easing),var(--wp-ui-dropdown-fade-easing);will-change:transform,opacity}opacity:1;&[data-instant]{transition:none}&[data-ending-style],&[data-starting-style]{opacity:0}}._380b81b8f79fb10f__dropdown-motion{transform:translate(0);&[data-side=bottom][data-ending-style],&[data-side=bottom][data-starting-style]{transform:translateY(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=top][data-ending-style],&[data-side=top][data-starting-style]{transform:translateY(var(--wp-ui-dropdown-slide-distance))}&[data-side=left][data-ending-style],&[data-side=left][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=right][data-ending-style],&[data-side=right][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&[data-side=inline-start][data-ending-style],&[data-side=inline-start][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}&[data-side=inline-end][data-ending-style],&[data-side=inline-end][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-start][data-ending-style],&:dir(rtl)[data-side=inline-start][data-starting-style]{transform:translateX(calc(var(--wp-ui-dropdown-slide-distance)*-1))}&:dir(rtl)[data-side=inline-end][data-ending-style],&:dir(rtl)[data-side=inline-end][data-starting-style]{transform:translateX(var(--wp-ui-dropdown-slide-distance))}}}}@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._10450722b9676f78__positioner{z-index:var(--wp-ui-popover-z-index,initial)}._84e8f597bcf683b8__popup{outline:0}._972134b6cd5808d8__surface{--_wp-ui-elevation-md:0 2px 3px rgba(0,0,0,.05),0 4px 5px rgba(0,0,0,.04),0 12px 12px rgba(0,0,0,.03),0 16px 16px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-md);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-md,24px);padding:var(--wpds-dimension-padding-lg,16px)}.e4d544aa033f05c6__backdrop~* ._972134b6cd5808d8__surface{border-color:transparent}@media (forced-colors:active){._972134b6cd5808d8__surface,.e4d544aa033f05c6__backdrop~* ._972134b6cd5808d8__surface{border-color:CanvasText}}.ca05d3eb89321fcd__arrow{display:flex;&[data-side=top]{bottom:-8px;rotate:180deg}&[data-side=bottom]{rotate:0deg;top:-8px}&[data-side=left]{inset-inline-end:-13px;rotate:90deg}&[data-side=right]{inset-inline-start:-13px;rotate:-90deg}}._12d8edd9eb946b5f__arrow-fill{fill:var(--wpds-color-background-surface-neutral-strong,#fff)}._6ddab482bd929dad__arrow-stroke{fill:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._6d7e4729cd96960e__title{--_gcd-heading-color:var(--wpds-color-foreground-content-neutral,#1e1e1e);color:var(--wpds-color-foreground-content-neutral,#1e1e1e)}.e4d544aa033f05c6__backdrop{background-color:rgba(0,0,0,.15);inset:0;opacity:1;position:fixed;z-index:var(--wp-ui-popover-z-index,initial);&[data-ending-style],&[data-starting-style]{opacity:0}@media not (prefers-reduced-motion){transition:opacity var(--wpds-motion-duration-sm,.1s) var(--wpds-motion-easing-subtle,cubic-bezier(.15,0,.15,1))}}}}");
		style_default = {
			"positioner": "_10450722b9676f78__positioner",
			"popup": "_84e8f597bcf683b8__popup _380b81b8f79fb10f__dropdown-motion",
			"surface": "_972134b6cd5808d8__surface",
			"backdrop": "e4d544aa033f05c6__backdrop",
			"arrow": "ca05d3eb89321fcd__arrow",
			"arrow-fill": "_12d8edd9eb946b5f__arrow-fill",
			"arrow-stroke": "_6ddab482bd929dad__arrow-stroke",
			"title": "_6d7e4729cd96960e__title"
		};
		Title = (0, import_react.forwardRef)(function PopoverTitle$1({ children, ...props }, forwardedRef) {
			const validationContext = usePopoverValidationContext();
			const internalRef = (0, import_react.useRef)(null);
			const mergedRef = useMergeRefs([internalRef, forwardedRef]);
			(0, import_react.useEffect)(() => {
				if (validationContext) return validationContext.registerTitle(internalRef.current);
			}, [validationContext]);
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Text, {
				ref: mergedRef,
				variant: "heading-xl",
				render: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(PopoverTitle, { ...props }),
				className: style_default.title,
				children
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/popover/trigger.mjs
var import_jsx_runtime, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_PopoverTrigger();
		init_react();
		import_jsx_runtime = require_jsx_runtime();
		Trigger = (0, import_react.forwardRef)(function PopoverTrigger$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				ref,
				...props
			});
		});
	})))();
}
//#endregion
export { Root as a, init_popup as c, Portal as d, init_portal as f, init_title as i, Positioner as l, init_trigger as n, init_root as o, Title as r, Popup as s, Trigger as t, init_positioner as u };
