import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_Input, t as Input$1 } from "./Input-D1FvTBAw.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-CSCRyOGP.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-D9fKXny2.js";
//#region ../packages/ui/src/form/primitives/input/style.module.css
var input, layout, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		input = "_input_1z12c_5";
		layout = "_layout_1z12c_67";
		style_module_default = {
			input,
			layout
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/input/input.tsx
var import_jsx_dev_runtime, _jsxFileName, Input;
function init_input() {
	return (init_input = __esmMin((() => {
		init_Input();
		init_clsx();
		init_react();
		init_global_css_defense_module();
		init_focus_module();
		init_style_module();
		init_input_layout();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input/input.tsx";
		Input = (0, import_react.forwardRef)(function UnforwardedInput({ className, size = "default", prefix, suffix, style, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLayout, {
				className: clsx(style_module_default.layout, focus_module_default["outset-ring--focus-within"], className),
				style,
				size,
				visuallyDisabled: restProps.disabled,
				prefix,
				suffix,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input$1, {
					ref,
					className: clsx(global_css_defense_module_default.input, style_module_default.input),
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 4
			}, this);
		});
		try {
			Input.__docgenInfo = {
				"description": "A low-level primitive for an input field.\n\nPrefer `InputControl` when using with a standard label and description.",
				"displayName": "Input",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/input/input.tsx",
				"methods": [],
				"props": {
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
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/input/Input.d.mts",
							"name": "InputProps"
						}],
						"description": "Callback fired when the `value` changes. Use when controlled.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/input/Input.d.mts",
							"name": "InputProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: string, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "Element to render before the input.",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						}],
						"description": "Element to render after the input.",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input-layout/types.ts",
							"name": "InputLayoutProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the field is disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The type of the input element.",
						"name": "type",
						"required": false,
						"tags": {},
						"type": { "name": "HTMLInputTypeAttribute" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The default value to use in uncontrolled mode.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value to use in controlled mode.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					},
					"size": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/input/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the field.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"compact\"",
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
export { init_input as n, Input as t };
