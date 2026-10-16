import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_checkbox, t as Checkbox } from "./checkbox-CcQpHYIP.js";
import { n as init_item, t as Item } from "./item-BmSowPyw.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { a as Root, i as init_label, n as init_description, o as init_root, r as Label, t as Description } from "./description-D29ruIHn.js";
import { n as init_details, t as Details } from "./details-BGukt8Ac.js";
//#region ../packages/ui/src/form/checkbox-control/style.module.css
var root, checkbox, label, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_1il7z_5";
		checkbox = "_checkbox_1il7z_16";
		label = "_label_1il7z_29";
		style_module_default = {
			root,
			"checkbox-wrapper": "_checkbox-wrapper_1il7z_16",
			checkbox,
			label
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/checkbox-control/checkbox-control.tsx
var import_jsx_dev_runtime, _jsxFileName, ITEM_RENDER, TextContainer, CheckboxControl;
function init_checkbox_control() {
	return (init_checkbox_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_checkbox(), init_root(), init_item(), init_label(), init_description(), init_details();
		init_stack();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/checkbox-control/checkbox-control.tsx";
		ITEM_RENDER = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			gap: "sm",
			align: "start"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 21
		}, void 0);
		TextContainer = ({ isStack, ...restProps }) => isStack ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "column",
			gap: "xs",
			...restProps
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 3
		}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { ...restProps }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 3
		}, void 0);
		CheckboxControl = (0, import_react.forwardRef)(function UnforwardedCheckboxControl({ label, description, details, hideLabelFromVision, className, name, ...checkboxProps }, ref) {
			const hasSupportingText = !!description || !!details;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				name,
				className: clsx(style_module_default.root, className),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					render: ITEM_RENDER,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: style_module_default["checkbox-wrapper"],
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
							ref,
							className: style_module_default.checkbox,
							...checkboxProps
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 6
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 5
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, {
						isStack: hasSupportingText,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								variant: "plain",
								hideFromVision: hideLabelFromVision,
								className: style_module_default.label,
								children: label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 6
							}, this),
							description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: description }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 7
							}, this),
							details && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Details, { children: details }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 19
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 5
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 3
			}, this);
		});
		try {
			CheckboxControl.__docgenInfo = {
				"description": "A complete checkbox field with integrated label and description.\n\nFor grouping and nested parent checkboxes, see the [Checkbox Groups](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-form-checkbox-groups--docs)\ndocumentation.",
				"displayName": "CheckboxControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/checkbox-control/checkbox-control.tsx",
				"methods": [],
				"props": {
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "The id of the input element.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
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
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Identifies the form that owns the hidden input.\nUseful when the checkbox is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
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
					"name": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					"defaultChecked": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the checkbox is initially ticked.\n\nTo render a controlled checkbox, use the `checked` prop instead.",
						"name": "defaultChecked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "The checkbox's value. Identifies it within a [Checkbox Group](https://base-ui.com/react/components/checkbox-group), falling back to `name` when omitted.\nWhen submitting a form, a checked box submits `value`; with no `value`, it submits the native \"on\".",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"checked": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the checkbox is currently ticked.\n\nTo render an uncontrolled checkbox, use the `defaultChecked` prop instead.",
						"name": "checked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the user should be unable to tick or untick the checkbox.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the user must tick the checkbox before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					"onCheckedChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Event handler called when the checkbox is ticked or unticked.",
						"name": "onCheckedChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((checked: boolean, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"indeterminate": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the checkbox is in a mixed state: neither ticked, nor unticked.",
						"name": "indeterminate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "A ref to access the hidden `<input>` element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"parent": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "Whether the checkbox controls a group of child checkboxes.\n\nMust be used in a [Checkbox Group](https://base-ui.com/react/components/checkbox-group).",
						"name": "parent",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"uncheckedValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						}],
						"description": "The value submitted with the form when the checkbox is unchecked.\nBy default, unchecked checkboxes do not submit any value, matching native checkbox behavior.",
						"name": "uncheckedValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.d.mts",
							"name": "CheckboxRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"nativeButton": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NonNativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
export { init_checkbox_control as n, CheckboxControl as t };
