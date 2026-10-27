import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-FYENO0pz.js";
//#region ../packages/ui/src/utils/keyboard-shortcut.tsx
/**
* Returns shortcut accessibility metadata for an interactive element.
*
* Render `KeyboardShortcutDescription` with the returned `descriptionId` when
* a shortcut is provided.
*/
function useKeyboardShortcutProps({ "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, shortcut }) {
	const generatedDescriptionId = (0, import_react.useId)();
	const descriptionId = shortcut ? generatedDescriptionId : void 0;
	return {
		descriptionId,
		targetProps: {
			"aria-describedby": [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || void 0,
			"aria-keyshortcuts": shortcut?.ariaKeyShortcut ?? ariaKeyShortcuts
		}
	};
}
var import_jsx_dev_runtime, _jsxFileName, KeyboardShortcutDescription, KeyboardShortcutDisplay;
function init_keyboard_shortcut() {
	return (init_keyboard_shortcut = __esmMin((() => {
		init_react();
		init_build_module();
		init_visually_hidden();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx";
		KeyboardShortcutDescription = (0, import_react.forwardRef)(function UnforwardedKeyboardShortcutDescription({ descriptionId, shortcut }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				id: descriptionId,
				"aria-hidden": "true",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { ref }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 13
				}, this),
				children: sprintf(__("Keyboard shortcut: %s"), shortcut.label ?? shortcut.ariaKeyShortcut)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 3
			}, this);
		});
		KeyboardShortcutDisplay = (0, import_react.forwardRef)(function UnforwardedKeyboardShortcutDisplay({ className, shortcut }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				ref,
				"aria-hidden": "true",
				className,
				dir: "ltr",
				children: shortcut.displayShortcut
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 3
			}, this);
		});
		try {
			KeyboardShortcutDescription.__docgenInfo = {
				"description": "Renders a localized, visually hidden description for a keyboard shortcut.",
				"displayName": "KeyboardShortcutDescription",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx",
				"methods": [],
				"props": {
					"descriptionId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "descriptionId",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "shortcut",
						"required": true,
						"tags": {},
						"type": { "name": "KeyboardShortcut" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			KeyboardShortcutDisplay.__docgenInfo = {
				"description": "Renders a visual keyboard shortcut while hiding it from assistive\ntechnology.",
				"displayName": "KeyboardShortcutDisplay",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "shortcut",
						"required": true,
						"tags": {},
						"type": { "name": "KeyboardShortcut" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			useKeyboardShortcutProps.__docgenInfo = {
				"description": "Returns shortcut accessibility metadata for an interactive element.\n\nRender `KeyboardShortcutDescription` with the returned `descriptionId` when\na shortcut is provided.",
				"displayName": "useKeyboardShortcutProps",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx",
				"methods": [],
				"props": { "shortcut": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/keyboard-shortcut.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "shortcut",
					"required": false,
					"tags": {},
					"type": { "name": "KeyboardShortcut" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { useKeyboardShortcutProps as i, KeyboardShortcutDisplay as n, init_keyboard_shortcut as r, KeyboardShortcutDescription as t };
