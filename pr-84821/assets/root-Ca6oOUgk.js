import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-Cv8RPUVn.js";
import { a as TooltipPortal, c as init_TooltipTrigger, d as TooltipRoot, f as init_TooltipRoot, g as init_build_module, h as build_module_exports, i as init_TooltipPositioner, n as init_TooltipPopup, o as init_TooltipPortal, r as TooltipPositioner, s as TooltipTrigger, t as TooltipPopup } from "./TooltipPopup-BpRIm3A6.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as renderSlotWithChildren, n as init_direction_provider, r as init_render_slot_with_children, t as DirectionProvider } from "./direction-provider-BxH2DiMW.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
//#region ../packages/ui/build-module/tooltip/portal.mjs
var import_jsx_runtime$4, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_TooltipPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_runtime$4 = require_jsx_runtime();
		Portal = (0, import_react.forwardRef)(function TooltipPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(TooltipPortal, {
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps,
				ref
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/tooltip/positioner.mjs
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
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$1, resets_default, style_default$1, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_TooltipPositioner();
		init_react();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$1("19fcc06039", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._480b748dd3510e64__positioner{z-index:var(--wp-ui-tooltip-z-index,initial)}._50096b232db7709d__popup{--_wp-ui-elevation-sm:0 1px 2px rgba(0,0,0,.05),0 2px 3px rgba(0,0,0,.04),0 6px 6px rgba(0,0,0,.03),0 8px 8px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-sm);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-sm,12px);line-height:1.4;padding:var(--wpds-dimension-padding-xs,4px) var(--wpds-dimension-padding-sm,8px);@media (forced-colors:active){border-bottom-color:CanvasText;border-bottom-style:solid;border-bottom-width:1px;border-left-color:CanvasText;border-left-style:solid;border-left-width:1px;border-right-color:CanvasText;border-right-style:solid;border-right-width:1px;border-top-color:CanvasText;border-top-style:solid;border-top-width:1px}}}}");
		style_default$1 = {
			"positioner": "_480b748dd3510e64__positioner",
			"popup": "_50096b232db7709d__popup"
		};
		Positioner = (0, import_react.forwardRef)(function TooltipPositioner$1({ align = "center", className, side = "top", sideOffset = 4, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(TooltipPositioner, {
				ref,
				align,
				side,
				sideOffset,
				...props,
				className: clsx(resets_default["box-sizing"], style_default$1.positioner, className)
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/lock-unlock.mjs
var lock, unlock;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/ui"));
	})))();
}
//#endregion
//#region ../packages/ui/build-module/utils/theme-provider.mjs
function getThemeProvider() {
	const themePackage = build_module_exports;
	if (themePackage.ThemeProvider) return themePackage.ThemeProvider;
	if (!themePackage.privateApis) throw new Error("@wordpress/ui: @wordpress/theme must expose `ThemeProvider` or `privateApis.ThemeProvider`.");
	return unlock(themePackage.privateApis).ThemeProvider;
}
var ThemeProvider;
function init_theme_provider() {
	return (init_theme_provider = __esmMin((() => {
		init_build_module();
		init_lock_unlock();
		ThemeProvider = getThemeProvider();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/tooltip/popup.mjs
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE, style_default, POPUP_COLOR, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_clsx();
		init_TooltipPopup();
		init_react();
		init_portal();
		init_positioner();
		init_render_slot_with_children();
		init_theme_provider();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("19fcc06039", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._480b748dd3510e64__positioner{z-index:var(--wp-ui-tooltip-z-index,initial)}._50096b232db7709d__popup{--_wp-ui-elevation-sm:0 1px 2px rgba(0,0,0,.05),0 2px 3px rgba(0,0,0,.04),0 6px 6px rgba(0,0,0,.03),0 8px 8px rgba(0,0,0,.02);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--_wp-ui-elevation-sm);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-sm,12px);line-height:1.4;padding:var(--wpds-dimension-padding-xs,4px) var(--wpds-dimension-padding-sm,8px);@media (forced-colors:active){border-bottom-color:CanvasText;border-bottom-style:solid;border-bottom-width:1px;border-left-color:CanvasText;border-left-style:solid;border-left-width:1px;border-right-color:CanvasText;border-right-style:solid;border-right-width:1px;border-top-color:CanvasText;border-top-style:solid;border-top-width:1px}}}}");
		style_default = {
			"positioner": "_480b748dd3510e64__positioner",
			"popup": "_50096b232db7709d__popup"
		};
		POPUP_COLOR = { background: "#1e1e1e" };
		Popup = (0, import_react.forwardRef)(function TooltipPopup$1({ portal, positioner, children, className, ...props }, ref) {
			const popupContent = /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ThemeProvider, {
				color: POPUP_COLOR,
				children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(TooltipPopup, {
					ref,
					className: clsx(style_default.popup, className),
					...props,
					children
				})
			});
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Positioner, {}), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Portal, {}), positionedPopup);
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/tooltip/trigger.mjs
var import_jsx_runtime$1, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_TooltipTrigger();
		init_react();
		import_jsx_runtime$1 = require_jsx_runtime();
		Trigger = (0, import_react.forwardRef)(function TooltipTrigger$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(TooltipTrigger, {
				ref,
				...props
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/tooltip/root.mjs
function Root(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipRoot, { ...props }) });
}
var import_jsx_runtime;
function init_root() {
	return (init_root = __esmMin((() => {
		init_TooltipRoot();
		init_direction_provider();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
export { Popup as a, init_positioner as c, init_trigger as i, init_root as n, init_popup as o, Trigger as r, Positioner as s, Root as t };
