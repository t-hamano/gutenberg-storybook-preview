import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_CheckboxRoot, n as init_CheckboxIndicator, r as CheckboxRoot, t as CheckboxIndicator } from "./CheckboxIndicator-BQqyzBJq.js";
import { t as check_default } from "./check-BK5allCs.js";
import { n as reset_default } from "./reset-7DubdZqZ.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_icon, t as Icon } from "./icon-LzGYYnN1.js";
import { r as init_build_module } from "./library.story-CbQx3MQ6.js";
//#region ../packages/ui/src/form/primitives/checkbox/style.module.css
var root, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_1ex2r_5";
		style_module_default = {
			root,
			"indicator-icon": "_indicator-icon_1ex2r_63"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/checkbox/checkbox.tsx
var import_jsx_dev_runtime, _jsxFileName, Checkbox;
function init_checkbox() {
	return (init_checkbox = __esmMin((() => {
		init_CheckboxRoot(), init_CheckboxIndicator();
		init_clsx();
		init_react();
		init_build_module();
		init_icon();
		init_resets_module();
		init_focus_module();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox/checkbox.tsx";
		Checkbox = (0, import_react.forwardRef)(function UnforwardedCheckbox({ className, indeterminate, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxRoot, {
				ref,
				className: clsx(resets_module_default["box-sizing"], focus_module_default["outset-ring--focus"], style_module_default.root, className),
				indeterminate,
				...restProps,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxIndicator, {
					className: style_module_default["indicator-icon"],
					render: (props, state) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
						...props,
						icon: state.indeterminate ? reset_default : check_default,
						viewBox: "4 4 16 16",
						size: 16
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 4
			}, this);
		});
		try {
			Checkbox.__docgenInfo = {
				"description": "A low-level checkbox primitive.\n\nPrefer `CheckboxControl` for labeled items. For grouping and nested parent\ncheckboxes, see the [Checkbox Groups](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-form-checkbox-groups--docs)\ndocumentation.",
				"displayName": "Checkbox",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/checkbox/checkbox.tsx",
				"methods": [],
				"props": {
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_checkbox as n, Checkbox as t };
