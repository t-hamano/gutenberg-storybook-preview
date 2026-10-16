import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { a as Root, i as init_label, n as init_description, o as init_root, r as Label, t as Description } from "./description-D29ruIHn.js";
import { n as init_details, t as Details } from "./details-BGukt8Ac.js";
import { n as init_switch, t as Switch } from "./switch-DjBYEMBU.js";
import { i as init_shared, n as WITH_DETAILS_DESCRIPTION, t as DETAILS_EXAMPLE } from "./shared-BIawwOG6.js";
//#region ../packages/ui/src/form/switch-control/style.module.css
var root, label, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_cbv0h_5";
		label = "_label_cbv0h_19";
		style_module_default = {
			root,
			"switch-wrapper": "_switch-wrapper_cbv0h_10",
			label,
			"switch": "_switch_cbv0h_10"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/form/switch-control/switch-control.tsx
var import_jsx_dev_runtime, _jsxFileName, ROOT_RENDER, TextContainer, SwitchControl;
function init_switch_control() {
	return (init_switch_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_root(), init_label(), init_description(), init_details(), init_switch();
		init_stack();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/switch-control/switch-control.tsx";
		ROOT_RENDER = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
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
		SwitchControl = (0, import_react.forwardRef)(function UnforwardedSwitchControl({ label, description, details, hideLabelFromVision, className, name, ...switchProps }, ref) {
			const hasSupportingText = !!description || !!details;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
				name,
				className: clsx(style_module_default.root, className),
				render: ROOT_RENDER,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: style_module_default["switch-wrapper"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
						ref,
						className: style_module_default.switch,
						...switchProps
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
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
							lineNumber: 54,
							columnNumber: 6
						}, this),
						description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: description }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 7
						}, this),
						details && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Details, { children: details }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 19
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 5
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 4
			}, this);
		});
		try {
			SwitchControl.__docgenInfo = {
				"description": "A complete switch field with integrated label and description.",
				"displayName": "SwitchControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/switch-control/switch-control.tsx",
				"methods": [],
				"props": {
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The id of the hidden input element.\n\nWhen `nativeButton` is `true`, the id is applied to the root element.",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Identifies the form that owns the hidden input.\nUseful when the switch is rendered outside the form.",
						"name": "form",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
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
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Identifies the field when a form is submitted.",
						"name": "name",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the component should ignore user interaction.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the switch is initially active.\n\nTo render a controlled switch, use the `checked` prop instead.",
						"name": "defaultChecked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The value submitted with the form when the switch is on.\nBy default, switch submits the \"on\" value, matching native checkbox behavior.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the switch is currently active.\n\nTo render an uncontrolled switch, use the `defaultChecked` prop instead.",
						"name": "checked",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"readOnly": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the user should be unable to activate or deactivate the switch.",
						"name": "readOnly",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Whether the user must activate the switch before submitting a form.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "Event handler called when the switch is activated or deactivated.",
						"name": "onCheckedChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((checked: boolean, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "A ref to access the hidden `<input>` element.",
						"name": "inputRef",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Ref<HTMLInputElement>" }
					},
					"uncheckedValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
						}],
						"description": "The value submitted with the form when the switch is off.\nBy default, unchecked switches do not submit any value, matching native checkbox behavior.",
						"name": "uncheckedValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/switch/root/SwitchRoot.d.mts",
							"name": "SwitchRootProps"
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
//#region ../packages/ui/src/form/switch-control/stories/index.story.tsx
var meta, Default, WithDescription, WithLongLabel, VisuallyHiddenLabel, WithDetails, Disabled, DisabledChecked;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_switch_control();
		init_shared();
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/SwitchControl",
			id: "design-system-components-form-switchcontrol",
			component: SwitchControl,
			argTypes: {
				checked: { control: false },
				onCheckedChange: { action: "onCheckedChange" }
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { label: "Label" } };
		WithDescription = { args: {
			...Default.args,
			description: "This is the description."
		} };
		WithLongLabel = { args: {
			...Default.args,
			label: "This is a long label that should wrap to the next line. This is a long label that should wrap to the next line. This is a long label that should wrap to the next line."
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
		Disabled = { args: {
			...Default.args,
			disabled: true
		} };
		DisabledChecked = { args: {
			...Default.args,
			disabled: true,
			defaultChecked: true
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    label: 'Label'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithDescription.parameters = {
			...WithDescription.parameters,
			docs: {
				...WithDescription.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    description: 'This is the description.'\n  }\n}",
					...WithDescription.parameters?.docs?.source
				}
			}
		};
		WithLongLabel.parameters = {
			...WithLongLabel.parameters,
			docs: {
				...WithLongLabel.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    label: 'This is a long label that should wrap to the next line. This is a long label that should wrap to the next line. This is a long label that should wrap to the next line.'\n  }\n}",
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
		DisabledChecked.parameters = {
			...DisabledChecked.parameters,
			docs: {
				...DisabledChecked.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    disabled: true,\n    defaultChecked: true\n  }\n}",
					...DisabledChecked.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Disabled, DisabledChecked, VisuallyHiddenLabel, WithDescription, WithDetails, WithLongLabel, meta as default };
