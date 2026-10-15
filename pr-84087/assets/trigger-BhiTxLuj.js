import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_ComboboxTrigger, t as ComboboxTrigger } from "./ComboboxTrigger-BP1WrHCt.js";
import { n as init_ComboboxValue, t as ComboboxValue } from "./ComboboxValue-5D00nSXL.js";
import { t as chevron_down_default } from "./chevron-down-BHqt2Nym.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-D9fKXny2.js";
import { n as select_trigger_module_default, t as init_select_trigger_module } from "./select-trigger.module-CuMYWVHn.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/form/primitives/combobox/trigger.tsx
var import_jsx_dev_runtime, _jsxFileName, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_ComboboxTrigger(), init_ComboboxValue();
		init_clsx();
		init_react();
		init_build_module();
		init_build_module$1();
		init_icon();
		init_focus_module();
		init_select_trigger_module();
		init_input_layout();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/trigger.tsx";
		Trigger = (0, import_react.forwardRef)(function UnforwardedTrigger({ className, children, size = "default", placeholder = __("Select"), ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout, {
				className: clsx(focus_module_default["outset-ring--focus-within-except-active"], select_trigger_module_default["trigger-wrapper"], className),
				size,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComboboxTrigger, {
					...restProps,
					className: select_trigger_module_default.trigger,
					"data-can-disable-input-layout": true,
					ref,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: select_trigger_module_default["trigger-value"],
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComboboxValue, {
							placeholder,
							children
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
						className: select_trigger_module_default["trigger-caret"],
						icon: chevron_down_default,
						size: 18
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 4
			}, this);
		});
		try {
			Trigger.__docgenInfo = {
				"description": "",
				"displayName": "Trigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/trigger.tsx",
				"methods": [],
				"props": {
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/trigger/ComboboxTrigger.d.mts",
							"name": "ComboboxTriggerProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/trigger/ComboboxTrigger.d.mts",
							"name": "ComboboxTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"placeholder": {
						"defaultValue": { "value": "__( 'Select' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Text to show when no value is selected.\nThis is overridden by `children` if specified, or by a null item's label in `items`.",
						"name": "placeholder",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"size": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/combobox/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the trigger.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ComboboxSize",
							"value": [{ "value": "\"default\"" }, { "value": "\"compact\"" }]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_trigger as n, Trigger as t };
