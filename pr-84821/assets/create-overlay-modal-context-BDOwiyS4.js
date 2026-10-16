import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
//#region ../packages/ui/src/utils/create-overlay-modal-context.tsx
/**
* Creates a modal context pair (`Provider` + `useModal`) for overlay
* primitives like Dialog and Drawer.
*/
function createOverlayModalContext(initialValue) {
	const OverlayModalContext = (0, import_react.createContext)(initialValue);
	function OverlayModalProvider({ modal, children }) {
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayModalContext.Provider, {
			value: modal,
			children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 4
		}, this);
	}
	function useOverlayModal() {
		return (0, import_react.useContext)(OverlayModalContext);
	}
	return {
		Provider: OverlayModalProvider,
		useModal: useOverlayModal
	};
}
var import_jsx_dev_runtime, _jsxFileName;
function init_create_overlay_modal_context() {
	return (init_create_overlay_modal_context = __esmMin((() => {
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/create-overlay-modal-context.tsx";
		try {
			createOverlayModalContext.__docgenInfo = {
				"description": "Creates a modal context pair (`Provider` + `useModal`) for overlay\nprimitives like Dialog and Drawer.",
				"displayName": "createOverlayModalContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/create-overlay-modal-context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_create_overlay_modal_context as n, createOverlayModalContext as t };
