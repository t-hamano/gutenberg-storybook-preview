import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { a as RadioRoot, i as init_RadioIndicator, n as init_RadioGroup, o as init_RadioRoot, r as RadioIndicator, t as RadioGroup$1 } from "./RadioGroup-B7fqj8q9.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
//#region ../packages/ui/src/form/primitives/radio/style.module.css
var root, indicator, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_msnst_5";
		indicator = "_indicator_msnst_58";
		style_module_default = {
			root,
			indicator
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/radio/radio.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Radio;
function init_radio() {
	return (init_radio = __esmMin((() => {
		init_RadioRoot(), init_RadioIndicator();
		init_clsx();
		init_react();
		init_resets_module();
		init_focus_module();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio/radio.tsx";
		Radio = (0, import_react.forwardRef)(function UnforwardedRadio({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RadioRoot, {
				ref,
				className: clsx(resets_module_default["box-sizing"], focus_module_default["outset-ring--focus"], style_module_default.root, className),
				...props,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RadioIndicator, { className: style_module_default.indicator }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 4
			}, this);
		});
		try {
			Radio.__docgenInfo = {
				"description": "A low-level radio button primitive.\n\nPrefer `RadioGroupControl` for standard labeled radio groups.\n\nMust be rendered inside a `RadioGroup`.",
				"displayName": "Radio",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio/radio.tsx",
				"methods": [],
				"props": {
					"readOnly": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "Whether the user should be unable to select the radio button.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "A ref to access the hidden input element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"required": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "Whether the user must choose a value before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						}],
						"description": "The unique identifying value of the radio in a group.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio/root/RadioRoot.d.mts",
							"name": "RadioRootProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "unknown" }
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
//#region ../packages/ui/src/form/primitives/radio-group/radio-group.tsx
var import_jsx_dev_runtime, _jsxFileName, DEFAULT_RENDER, RadioGroup;
function init_radio_group() {
	return (init_radio_group = __esmMin((() => {
		init_RadioGroup();
		init_react();
		init_stack();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio-group/radio-group.tsx";
		DEFAULT_RENDER = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			...props,
			direction: "column",
			gap: "sm"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 2
		}, void 0);
		RadioGroup = (0, import_react.forwardRef)(function UnforwardedRadioGroup({ render = DEFAULT_RENDER, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup$1, {
				ref,
				render,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 3
			}, this);
		});
		try {
			RadioGroup.__docgenInfo = {
				"description": "A low-level primitive that groups radio buttons so they share one selected\nvalue.\n\nPrefer `RadioGroupControl` for standard labeled radio groups.\n\nMust wrap `Radio` items. For one labeled group, pass `RadioGroup` to\n`Fieldset.Root`'s `render` prop. When a `Fieldset` contains multiple groups,\ngive each `RadioGroup` its own accessible name.",
				"displayName": "RadioGroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/radio-group/radio-group.tsx",
				"methods": [],
				"props": {
					"form": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Identifies the form that owns the radio inputs.\nUseful when the radio group is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "The uncontrolled value of the radio button that should be initially selected.\n\nTo render a controlled radio group, use the `value` prop instead.",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Value" }
					},
					"name": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Whether the user should be unable to select a different radio button in the group.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "A ref to access the hidden input element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Whether the user must choose a value before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "The controlled value of the radio item that should be currently selected.\n\nTo render an uncontrolled radio group, use the `defaultValue` prop instead.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Value" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						}],
						"description": "Callback fired when the value changes.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/radio-group/RadioGroup.d.mts",
							"name": "RadioGroupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: Value, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
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
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/radio-group/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The radio items and their associated content.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_radio as i, init_radio_group as n, Radio as r, RadioGroup as t };
