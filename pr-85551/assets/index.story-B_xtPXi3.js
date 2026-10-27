import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as init_FieldControl, t as FieldControl } from "./FieldControl-Blv9f3Ox.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_button, t as Button } from "./button--ei7vTao.js";
import { n as init_stack, t as Stack } from "./stack-B_tyTWv7.js";
import { a as Root, i as init_label, n as init_description, o as init_root, r as Label, t as Description } from "./description-BX51Fm6R.js";
import { n as init_item, t as Item } from "./item-Fp4NU5e-.js";
import { n as init_field_module, t as field_module_default } from "./field.module-CMS62o56.js";
import { n as init_details, t as Details } from "./details-3IeVweQ_.js";
import { i as init_shared, t as DETAILS_EXAMPLE } from "./shared-BRqYhAs4.js";
//#region ../packages/ui/src/form/primitives/field/control.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Control;
function init_control() {
	return (init_control = __esmMin((() => {
		init_FieldControl();
		init_react();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/control.tsx";
		Control = (0, import_react.forwardRef)(function UnforwardedControl(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FieldControl, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 7,
				columnNumber: 10
			}, this);
		});
		try {
			Control.__docgenInfo = {
				"description": "",
				"displayName": "Control",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/control.tsx",
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/control/FieldControl.d.mts",
							"name": "FieldControlProps"
						}],
						"description": "Callback fired when the `value` changes. Use when controlled.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/control/FieldControl.d.mts",
							"name": "FieldControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value: string, eventDetails: { reason: \"none\"; event: Event; cancel: () => void; allowPropagation: () => void; isCanceled: boolean; isPropagationAllowed: boolean; trigger: Element; }) => void)" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/field/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The default value to use in uncontrolled mode.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": { "name": "string | number | readonly string[]" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/primitives/field/visual-label.tsx
var VisualLabel;
function init_visual_label() {
	return (init_visual_label = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		init_field_module();
		VisualLabel = (0, import_react.forwardRef)(function UnforwardedVisualLabel({ className, render, variant, ...restProps }, ref) {
			return useRender({
				defaultTagName: "span",
				render,
				ref,
				props: mergeProps(restProps, { className: clsx(field_module_default.label, variant && field_module_default[`is-${variant}`], className) })
			});
		});
		VisualLabel.displayName = "Field.VisualLabel";
		try {
			VisualLabel.__docgenInfo = {
				"description": "Renders a purely visual label with the same styling as `Field.Label`.\n\nIt can be used outside `Field.Root` when the control is already\naccessibly labeled, but a visual label is still needed for layout\nconsistency.\n\nUnlike `Field.Label`, this component does not carry semantics and is not\nassociated with a control.",
				"displayName": "Field.VisualLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/visual-label.tsx",
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
					"variant": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/field/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The visual variant of the label.\n\nUse 'plain' for controls like checkboxes and radio buttons.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"plain\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"plain\"" }]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/field/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Visible label text. Not associated with a control.",
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
//#region ../packages/ui/src/form/primitives/field/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, MyNonRefForwardingControl, UsingHtmlFor, UsingAriaLabelledby, HiddenLabel, WithDetails, WithVisualLabel;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_button();
		init_stack();
		init_root(), init_item(), init_label(), init_control(), init_description(), init_details(), init_visual_label();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Form/Primitives/Field",
			id: "design-system-components-form-primitives-field",
			component: Root,
			subcomponents: {
				"Field.Item": Item,
				"Field.Label": Label,
				"Field.Control": Control,
				"Field.Description": Description,
				"Field.Details": Details,
				"Field.VisualLabel": VisualLabel
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Label" }, "label", false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Control, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				type: "text",
				placeholder: "Placeholder"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 14
			}, void 0) }, "control", false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "The accessible description." }, "description", false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 4
			}, void 0)
		] } };
		MyNonRefForwardingControl = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				type: "text",
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, void 0);
		};
		UsingHtmlFor = {
			name: "Using htmlFor",
			render: (args) => {
				const controlId = (0, import_react.useId)();
				const descriptionId = (0, import_react.useId)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: controlId,
							children: "Label"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyNonRefForwardingControl, {
							placeholder: "Placeholder",
							id: controlId,
							"aria-describedby": descriptionId
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, {
							id: descriptionId,
							children: "The accessible description."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 5
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 4
				}, void 0);
			}
		};
		UsingAriaLabelledby = {
			name: "Using aria-labelledby",
			render: (args) => {
				const labelId = (0, import_react.useId)();
				const descriptionId = (0, import_react.useId)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
					...args,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							id: labelId,
							children: "Label"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyNonRefForwardingControl, {
							placeholder: "Placeholder",
							"aria-labelledby": labelId,
							"aria-describedby": descriptionId
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 5
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, {
							id: descriptionId,
							children: "The accessible description."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 5
						}, void 0),
						" "
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 4
				}, void 0);
			}
		};
		HiddenLabel = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
			hideFromVision: true,
			children: "Label"
		}, "label", false, {
			fileName: _jsxFileName,
			lineNumber: 123,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Control, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			type: "text",
			placeholder: "Placeholder"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 127,
			columnNumber: 14
		}, void 0) }, "control", false, {
			fileName: _jsxFileName,
			lineNumber: 126,
			columnNumber: 4
		}, void 0)] } };
		WithDetails = { args: { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Label" }, "label", false, {
				fileName: _jsxFileName,
				lineNumber: 147,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Control, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				type: "text",
				placeholder: "Placeholder"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 14
			}, void 0) }, "control", false, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Details, { children: DETAILS_EXAMPLE }, "details", false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 4
			}, void 0)
		] } };
		WithVisualLabel = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
			direction: "column",
			gap: "sm",
			align: "flex-start",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisualLabel, { children: "Author" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 167,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				children: "Select an author"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 168,
				columnNumber: 4
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 166,
			columnNumber: 3
		}, void 0) };
		try {
			Default.__docgenInfo = {
				"description": "If your control component forwards refs, as well as the `aria-labelledby` and `aria-describedby` props\nto the actual underlying HTML element to be labeled,\nyou can simply place your control in the `render` prop of `Field.Control`.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			UsingHtmlFor.__docgenInfo = {
				"description": "If your control component does not forward refs, but does forward the `id` prop\nto the actual underlying HTML element to be labeled, use the `htmlFor` prop\nof the `Field.Label` component to associate the label with the control.\n\nThis is preferred over `aria-labelledby` because it allows users to click the\nlabel to focus the control.",
				"displayName": "UsingHtmlFor",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			UsingAriaLabelledby.__docgenInfo = {
				"description": "If your control component does not forward refs nor the `id` prop, but does\nforward the `aria-labelledby` prop to the actual underlying HTML element to be\nlabeled, use the `id` prop of the `Field.Label` component to associate the\nlabel with the control.",
				"displayName": "UsingAriaLabelledby",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			HiddenLabel.__docgenInfo = {
				"description": "When `hideFromVision` is set on `Field.Label`, the label is visually\nhidden but remains accessible to screen readers.",
				"displayName": "HiddenLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithDetails.__docgenInfo = {
				"description": "To add rich content (such as links) to the description, use `Field.Details`.\n\nAlthough this content is not associated with the field using direct semantics,\nit is made discoverable to screen reader users via a visually hidden description,\nalerting them to the presence of additional information below.\n\nIf the content only includes plain text, use `Field.Description` instead,\nso the readout is not unnecessarily verbose for screen reader users.",
				"displayName": "WithDetails",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithVisualLabel.__docgenInfo = {
				"description": "`Field.VisualLabel` renders a purely visual label with the same styling as\n`Field.Label`. It can be used outside `Field.Root` when the control is\nalready accessibly labeled, but a visual label is still needed for layout\nconsistency.",
				"displayName": "WithVisualLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/primitives/field/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Field.Label key=\"label\">Label</Field.Label>, <Field.Control render={<input type=\"text\" placeholder=\"Placeholder\" />} key=\"control\" />, <Field.Description key=\"description\">\n                The accessible description.\n            </Field.Description>]\n  }\n}",
					...Default.parameters?.docs?.source
				},
				description: {
					story: "If your control component forwards refs, as well as the `aria-labelledby` and `aria-describedby` props\nto the actual underlying HTML element to be labeled,\nyou can simply place your control in the `render` prop of `Field.Control`.",
					...Default.parameters?.docs?.description
				}
			}
		};
		UsingHtmlFor.parameters = {
			...UsingHtmlFor.parameters,
			docs: {
				...UsingHtmlFor.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Using htmlFor',\n  render: args => {\n    const controlId = useId();\n    const descriptionId = useId();\n    return <Field.Root {...args}>\n                <Field.Label htmlFor={controlId}>Label</Field.Label>\n                <MyNonRefForwardingControl placeholder=\"Placeholder\" id={controlId} aria-describedby={descriptionId} />\n\n                <Field.Description id={descriptionId}>\n                    The accessible description.\n                </Field.Description>\n            </Field.Root>;\n  }\n}",
					...UsingHtmlFor.parameters?.docs?.source
				},
				description: {
					story: "If your control component does not forward refs, but does forward the `id` prop\nto the actual underlying HTML element to be labeled, use the `htmlFor` prop\nof the `Field.Label` component to associate the label with the control.\n\nThis is preferred over `aria-labelledby` because it allows users to click the\nlabel to focus the control.",
					...UsingHtmlFor.parameters?.docs?.description
				}
			}
		};
		UsingAriaLabelledby.parameters = {
			...UsingAriaLabelledby.parameters,
			docs: {
				...UsingAriaLabelledby.parameters?.docs,
				source: {
					originalSource: "{\n  name: 'Using aria-labelledby',\n  render: args => {\n    const labelId = useId();\n    const descriptionId = useId();\n    return <Field.Root {...args}>\n                <Field.Label id={labelId}>Label</Field.Label>\n                <MyNonRefForwardingControl placeholder=\"Placeholder\" aria-labelledby={labelId} aria-describedby={descriptionId} />\n                <Field.Description id={descriptionId}>\n                    The accessible description.\n                </Field.Description>{' '}\n            </Field.Root>;\n  }\n}",
					...UsingAriaLabelledby.parameters?.docs?.source
				},
				description: {
					story: "If your control component does not forward refs nor the `id` prop, but does\nforward the `aria-labelledby` prop to the actual underlying HTML element to be\nlabeled, use the `id` prop of the `Field.Label` component to associate the\nlabel with the control.",
					...UsingAriaLabelledby.parameters?.docs?.description
				}
			}
		};
		HiddenLabel.parameters = {
			...HiddenLabel.parameters,
			docs: {
				...HiddenLabel.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Field.Label hideFromVision key=\"label\">\n                Label\n            </Field.Label>, <Field.Control render={<input type=\"text\" placeholder=\"Placeholder\" />} key=\"control\" />]\n  }\n}",
					...HiddenLabel.parameters?.docs?.source
				},
				description: {
					story: "When `hideFromVision` is set on `Field.Label`, the label is visually\nhidden but remains accessible to screen readers.",
					...HiddenLabel.parameters?.docs?.description
				}
			}
		};
		WithDetails.parameters = {
			...WithDetails.parameters,
			docs: {
				...WithDetails.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Field.Label key=\"label\">Label</Field.Label>, <Field.Control render={<input type=\"text\" placeholder=\"Placeholder\" />} key=\"control\" />, <Field.Details key=\"details\">{DETAILS_EXAMPLE}</Field.Details>]\n  }\n}",
					...WithDetails.parameters?.docs?.source
				},
				description: {
					story: "To add rich content (such as links) to the description, use `Field.Details`.\n\nAlthough this content is not associated with the field using direct semantics,\nit is made discoverable to screen reader users via a visually hidden description,\nalerting them to the presence of additional information below.\n\nIf the content only includes plain text, use `Field.Description` instead,\nso the readout is not unnecessarily verbose for screen reader users.",
					...WithDetails.parameters?.docs?.description
				}
			}
		};
		WithVisualLabel.parameters = {
			...WithVisualLabel.parameters,
			docs: {
				...WithVisualLabel.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <Stack direction=\"column\" gap=\"sm\" align=\"flex-start\">\n            <Field.VisualLabel>Author</Field.VisualLabel>\n            <Button variant=\"outline\">Select an author</Button>\n        </Stack>\n}",
					...WithVisualLabel.parameters?.docs?.source
				},
				description: {
					story: "`Field.VisualLabel` renders a purely visual label with the same styling as\n`Field.Label`. It can be used outside `Field.Root` when the control is\nalready accessibly labeled, but a visual label is still needed for layout\nconsistency.",
					...WithVisualLabel.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, HiddenLabel, UsingAriaLabelledby, UsingHtmlFor, WithDetails, WithVisualLabel, meta as default };
