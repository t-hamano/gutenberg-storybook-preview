import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as Root, i as init_label, n as init_description, o as init_root, r as Label, t as Description } from "./description-BX51Fm6R.js";
import { n as init_details, t as Details } from "./details-3IeVweQ_.js";
import { n as init_textarea, t as Textarea } from "./textarea-DgE6P52o.js";
//#region ../packages/ui/src/form/textarea-control/textarea-control.tsx
var import_jsx_dev_runtime, _jsxFileName, TextareaControl;
function init_textarea_control() {
	return (init_textarea_control = __esmMin((() => {
		init_react();
		init_textarea(), init_root(), init_label(), init_description(), init_details();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/textarea-control/textarea-control.tsx";
		TextareaControl = (0, import_react.forwardRef)(function UnforwardedTextareaControl({ className, label, description, details, hideLabelFromVision, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				className,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						hideFromVision: hideLabelFromVision,
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 4
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
						ref,
						...restProps
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 4
					}, this),
					description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: description }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 5
					}, this),
					details && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Details, { children: details }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 17
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 3
			}, this);
		});
		try {
			TextareaControl.__docgenInfo = {
				"description": "A complete textarea field with integrated label and description.",
				"displayName": "TextareaControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/textarea-control/textarea-control.tsx",
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
					"details": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional information about the field, which unlike a normal description,\ncan include links and other semantic elements.\n\nDo not use this prop when the content is only plain text;\nuse `description` instead.",
						"name": "details",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible label. All controls must be labeled.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
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
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The accessible description, associated using `aria-describedby`.\n\nFor screen reader accessibility, this should only contain plain text,\nand no semantics such as links.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
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
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/input/Input.d.mts",
							"name": "InputProps"
						}],
						"description": "Callback fired when the `value` changes. Use when controlled.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/input/Input.d.mts",
							"name": "InputProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: string, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"rows": {
						"defaultValue": { "value": "4" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/textarea/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The number of rows the textarea should contain.",
						"name": "rows",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to visually hide the label while keeping it accessible\nto screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_textarea_control as n, TextareaControl as t };
