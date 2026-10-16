import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as init_DirectionProvider, t as DirectionProvider$1 } from "./DirectionProvider-ijBUoTP5.js";
//#region ../packages/ui/src/utils/render-slot-with-children.ts
/**
* Fills an optional "slot" element prop with content by cloning it and
* injecting the given `children`. When `slot` is undefined, the provided
* `defaultSlot` is used in its place.
*
* Shared by overlay `Popup` components for their slot-shaped customization
* props (e.g. `portal`, `positioner`), so the merge behavior — defaults,
* children injection — stays consistent across all of them.
*
* Callers should type the slot prop as `ReactElement<Omit<Props, 'children'>>`:
* any subtree passed on the slot element is overwritten by `children`.
*
* @param slot        Optional element from the slot prop (e.g. `<Tooltip.Portal … />`
*                    or `<Tooltip.Positioner … />`). When omitted, `defaultSlot`
*                    is used. Injected `children` replace any subtree the caller
*                    may have passed on the slot element.
* @param defaultSlot Unpopulated default element used when `slot` is omitted
*                    (e.g. `<Tooltip.Portal />`).
* @param children    Content to inject as the slot's children (backdrop,
*                    positioner, popup subtree, etc.).
*/
function renderSlotWithChildren(slot, defaultSlot, children) {
	return (0, import_react.cloneElement)(slot ?? defaultSlot, { children });
}
function init_render_slot_with_children() {
	return (init_render_slot_with_children = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/ui/src/utils/css/wp-compat-overlay-slot.module.css
var slot, wp_compat_overlay_slot_module_default;
function init_wp_compat_overlay_slot_module() {
	return (init_wp_compat_overlay_slot_module = __esmMin((() => {
		slot = "_slot_180o3_6";
		wp_compat_overlay_slot_module_default = { slot };
	})))();
}
//#endregion
//#region ../packages/ui/src/utils/wp-compat-overlay-slot.ts
function resolveOwnerDocument() {
	return typeof document === "undefined" ? null : document;
}
function isInWordPressEnvironment() {
	let topWp;
	try {
		topWp = window.top?.wp;
	} catch {}
	const wp = topWp ?? window.wp;
	return typeof wp?.components === "object" && wp.components !== null;
}
function ensureSlotIsAccessible(element) {
	element.setAttribute("aria-hidden", "false");
	return element;
}
function createSlot(ownerDocument) {
	const element = ownerDocument.createElement("div");
	element.setAttribute(WP_COMPAT_OVERLAY_SLOT_ATTRIBUTE, "");
	if (wp_compat_overlay_slot_module_default.slot) element.classList.add(wp_compat_overlay_slot_module_default.slot);
	ownerDocument.body.appendChild(element);
	return element;
}
/**
* Returns the body-level compat overlay slot when the runtime opts in,
* lazily creating it on first call. Returns `undefined` otherwise — so the
* return value can be forwarded straight to a `container` prop, leaving the
* default portal container in effect.
*
* Two opt-in paths:
*
* - Auto-detected when `window.wp.components` is on the global — the
*   typical script-loader setup for WordPress plugins and admin screens.
* - Explicit, via `useEnableWpCompatOverlaySlot()` — for hosts that bundle
*   `@wordpress/components` (or only `@wordpress/ui`) directly rather than
*   relying on the global.
*
* The slot is a single `<div data-wp-compat-overlay-slot>` appended to the
* local document's body. Subsequent calls return the same element; if it's
* been removed it's recreated, and a slot created by another
* `@wordpress/ui` instance in the same document is adopted rather than
* duplicated.
*/
function getWpCompatOverlaySlot() {
	if (typeof window === "undefined") return;
	if (!isInWordPressEnvironment() && window.__wpUiCompatOverlaySlotEnabled !== true) return;
	const ownerDocument = resolveOwnerDocument();
	if (!ownerDocument || !ownerDocument.body) return;
	if (cachedSlot && cachedSlot.ownerDocument === ownerDocument && cachedSlot.isConnected) return ensureSlotIsAccessible(cachedSlot);
	const existing = ownerDocument.querySelector(`[${WP_COMPAT_OVERLAY_SLOT_ATTRIBUTE}]`);
	if (existing instanceof HTMLDivElement) {
		cachedSlot = ensureSlotIsAccessible(existing);
		return cachedSlot;
	}
	if (cachedSlot?.isConnected) cachedSlot.remove();
	cachedSlot = ensureSlotIsAccessible(createSlot(ownerDocument));
	return cachedSlot;
}
var WP_COMPAT_OVERLAY_SLOT_ATTRIBUTE, cachedSlot;
function init_wp_compat_overlay_slot() {
	return (init_wp_compat_overlay_slot = __esmMin((() => {
		init_wp_compat_overlay_slot_module();
		WP_COMPAT_OVERLAY_SLOT_ATTRIBUTE = "data-wp-compat-overlay-slot";
		cachedSlot = null;
	})))();
}
//#endregion
//#region ../packages/ui/src/utils/direction-provider.tsx
/**
* Provides WordPress's text direction to Base UI components.
*/
function DirectionProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectionProvider$1, {
		direction: isRTL() ? "rtl" : "ltr",
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_direction_provider() {
	return (init_direction_provider = __esmMin((() => {
		init_DirectionProvider();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/direction-provider.tsx";
		try {
			DirectionProvider.__docgenInfo = {
				"description": "Provides WordPress's text direction to Base UI components.",
				"displayName": "DirectionProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/direction-provider.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_render_slot_with_children as a, init_wp_compat_overlay_slot as i, init_direction_provider as n, renderSlotWithChildren as o, getWpCompatOverlaySlot as r, DirectionProvider as t };
