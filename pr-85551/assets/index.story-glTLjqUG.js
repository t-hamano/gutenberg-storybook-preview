import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { a as Root, i as init_label, n as init_description, o as init_root, r as Label, t as Description } from "./description-BX51Fm6R.js";
import { n as init_item, t as Item } from "./item-Fp4NU5e-.js";
import { a as FieldsetRoot, i as init_legend, n as init_description$1, o as init_root$1, r as FieldsetLegend, t as FieldsetDescription } from "./description-CdVw7or1.js";
import { n as init_details, t as FieldsetDetails } from "./details-CHu36Ino.js";
import { i as init_radio, n as init_radio_group, r as Radio, t as RadioGroup } from "./radio-group-Dt9HZJth.js";
import { i as init_shared, n as WITH_DETAILS_DESCRIPTION, t as DETAILS_EXAMPLE } from "./shared-BRqYhAs4.js";
//#region ../packages/ui/src/form/radio-group-control/style.module.css
var root, radio, label, item, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_1himi_5";
		radio = "_radio_1himi_10";
		label = "_label_1himi_22";
		item = "_item_1himi_26";
		style_module_default = {
			root,
			"radio-wrapper": "_radio-wrapper_1himi_10",
			radio,
			label,
			item
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/radio-group-control/radio-group-control.tsx
var import_jsx_dev_runtime, _jsxFileName, ITEM_RENDER, TextContainer, RadioGroupControl;
function init_radio_group_control() {
	return (init_radio_group_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_root(), init_item(), init_label(), init_description(), init_root$1(), init_legend(), init_description$1(), init_details(), init_radio(), init_radio_group();
		init_stack();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/radio-group-control/radio-group-control.tsx";
		ITEM_RENDER = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			gap: "sm",
			align: "start",
			className: style_module_default.item
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
		RadioGroupControl = (0, import_react.forwardRef)(function UnforwardedRadioGroupControl({ items, className, label, description, details, hideLabelFromVision, name, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				name,
				className: clsx(style_module_default.root, className),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetRoot, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
						ref,
						...restProps
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 14
					}, this),
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetLegend, {
							hideFromVision: hideLabelFromVision,
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 5
						}, this),
						description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetDescription, { children: description }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 6
						}, this),
						details && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldsetDetails, { children: details }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 18
						}, this),
						items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
							render: ITEM_RENDER,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: style_module_default["radio-wrapper"],
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, {
									value: item.value,
									disabled: item.disabled,
									className: style_module_default.radio
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 8
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 7
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, {
								isStack: !!item.description,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									variant: "plain",
									className: style_module_default.label,
									children: item.label
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 8
								}, this), item.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: item.description }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 9
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 7
							}, this)]
						}, item.value, true, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 6
						}, this))
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 3
			}, this);
		});
		try {
			RadioGroupControl.__docgenInfo = {
				"description": "A complete radio group with a legend, optional description, and labeled items.",
				"displayName": "RadioGroupControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/radio-group-control/radio-group-control.tsx",
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
						"type": { "name": "string" }
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
						"type": { "name": "string" }
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
						"type": { "name": "((value: string, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
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
					},
					"items": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/radio-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The radio options to render.",
						"name": "items",
						"required": true,
						"tags": {},
						"type": { "name": "{ label: string; value: string; description?: string | undefined; disabled?: boolean | undefined; }[]" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/radio-group-control/stories/index.story.tsx
var meta, defaultItems, Default, WithDescription, WithLongLabel, VisuallyHiddenLabel, WithDetails, WithDisabledItem, Disabled;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_radio_group_control();
		init_shared();
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/RadioGroupControl",
			id: "design-system-components-form-radiogroupcontrol",
			component: RadioGroupControl,
			argTypes: {
				onValueChange: { action: "onValueChange" },
				value: { control: false },
				defaultValue: { control: false }
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		defaultItems = [{
			label: "Apple",
			value: "apple",
			description: "This is the description for the apple."
		}, {
			label: "Banana",
			value: "banana",
			description: "This is the description for the banana."
		}];
		Default = { args: {
			label: "Label",
			items: defaultItems
		} };
		WithDescription = { args: {
			...Default.args,
			description: "This is the description for the entire fieldset."
		} };
		WithLongLabel = { args: {
			...Default.args,
			items: [{
				label: "This is a long label that should wrap to the next line. This is a long label that should wrap to the next line. This is a long label that should wrap to the next line.",
				value: "apple"
			}, {
				label: "Banana",
				value: "banana"
			}]
		} };
		VisuallyHiddenLabel = { args: {
			...Default.args,
			hideLabelFromVision: true
		} };
		WithDetails = {
			parameters: { docs: { description: { story: WITH_DETAILS_DESCRIPTION } } },
			args: {
				...Default.args,
				details: DETAILS_EXAMPLE
			}
		};
		WithDisabledItem = { args: {
			...Default.args,
			items: [
				{
					label: "Apple",
					value: "apple"
				},
				{
					label: "Banana",
					value: "banana",
					description: "This item is disabled.",
					disabled: true
				},
				{
					label: "Orange",
					value: "orange"
				}
			]
		} };
		Disabled = { args: {
			...Default.args,
			disabled: true
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Label',\n    items: defaultItems\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithDescription.parameters = {
			...WithDescription.parameters,
			docs: {
				...WithDescription.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    description: 'This is the description for the entire fieldset.'\n  }\n}",
					...WithDescription.parameters?.docs?.source
				}
			}
		};
		WithLongLabel.parameters = {
			...WithLongLabel.parameters,
			docs: {
				...WithLongLabel.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    items: [{\n      label: 'This is a long label that should wrap to the next line. This is a long label that should wrap to the next line. This is a long label that should wrap to the next line.',\n      value: 'apple'\n    }, {\n      label: 'Banana',\n      value: 'banana'\n    }]\n  }\n}",
					...WithLongLabel.parameters?.docs?.source
				}
			}
		};
		VisuallyHiddenLabel.parameters = {
			...VisuallyHiddenLabel.parameters,
			docs: {
				...VisuallyHiddenLabel.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    hideLabelFromVision: true\n  }\n}",
					...VisuallyHiddenLabel.parameters?.docs?.source
				}
			}
		};
		WithDetails.parameters = {
			...WithDetails.parameters,
			docs: {
				...WithDetails.parameters?.docs,
				source: {
					originalSource: "{\n  parameters: {\n    docs: {\n      description: {\n        story: WITH_DETAILS_DESCRIPTION\n      }\n    }\n  },\n  args: {\n    ...Default.args,\n    details: DETAILS_EXAMPLE\n  }\n}",
					...WithDetails.parameters?.docs?.source
				}
			}
		};
		WithDisabledItem.parameters = {
			...WithDisabledItem.parameters,
			docs: {
				...WithDisabledItem.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    items: [{\n      label: 'Apple',\n      value: 'apple'\n    }, {\n      label: 'Banana',\n      value: 'banana',\n      description: 'This item is disabled.',\n      disabled: true\n    }, {\n      label: 'Orange',\n      value: 'orange'\n    }]\n  }\n}",
					...WithDisabledItem.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    disabled: true\n  }\n}",
					...Disabled.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Disabled, VisuallyHiddenLabel, WithDescription, WithDetails, WithDisabledItem, WithLongLabel, meta as default };
