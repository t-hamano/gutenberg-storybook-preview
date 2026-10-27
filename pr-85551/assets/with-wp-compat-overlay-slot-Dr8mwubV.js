import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useEnableWpCompatOverlaySlot } from "./use-enable-wp-compat-overlay-slot-BLINu99Y.js";
//#region stories/playground/with-wp-compat-overlay-slot.tsx
var import_jsx_dev_runtime, _jsxFileName, WithWpCompatOverlaySlot;
function init_with_wp_compat_overlay_slot() {
	return (init_with_wp_compat_overlay_slot = __esmMin((() => {
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/playground/with-wp-compat-overlay-slot.tsx";
		WithWpCompatOverlaySlot = (Story) => {
			useEnableWpCompatOverlaySlot();
			(0, import_react.useLayoutEffect)(() => {
				const internalWindow = window;
				internalWindow.__wpUiCompatOverlaySlotEnabled = true;
				return () => {
					delete window.__wpUiCompatOverlaySlotEnabled;
				};
			}, []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 9
			}, void 0);
		};
		try {
			WithWpCompatOverlaySlot.__docgenInfo = {
				"description": "Storybook decorator that opts the decorated story into the\n`@wordpress/ui` compat overlay slot. The cleanup clears the internal\nflag on unmount so navigating to an un-decorated story closes the gate\nagain — `useEnableWpCompatOverlaySlot()` is one-way at runtime.\n\nKept private to playground stories: applying it to per-component\nstories would leak the window-level flag into sibling stories on the\nsame autodocs page.",
				"displayName": "WithWpCompatOverlaySlot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/playground/with-wp-compat-overlay-slot.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_with_wp_compat_overlay_slot as n, WithWpCompatOverlaySlot as t };
