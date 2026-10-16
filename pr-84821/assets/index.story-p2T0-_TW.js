import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as init_control_with_error, t as ControlWithError } from "./control-with-error-DgwsKMIC.js";
import { n as init_textarea_control, t as TextareaControl } from "./textarea-control-BTHycGlE.js";
import { i as init_shared, r as formDecorator } from "./shared-BIawwOG6.js";
//#region ../packages/ui/src/form/with-validation/validated-textarea-control/validated-textarea-control.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, ValidatedTextareaControl;
function init_validated_textarea_control() {
	return (init_validated_textarea_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_control_with_error();
		init_textarea_control();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-textarea-control/validated-textarea-control.tsx";
		ValidatedTextareaControl = (0, import_react.forwardRef)(function UnforwardedValidatedTextareaControl({ required, markWhenOptional, customValidity, ...restProps }, forwardedRef) {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ControlWithError, {
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TextareaControl, {
					ref: mergedRefs,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 33,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 27,
				columnNumber: 3
			}, this);
		});
		try {
			ValidatedTextareaControl.__docgenInfo = {
				"description": "A `TextareaControl` with inline validation feedback, based on the native\nConstraint Validation API.\n\nNative constraint violations (e.g. `required`, `minLength`) and custom\nvalidity messages passed through the `customValidity` prop are reported\ninline once the control has been touched (blurred at least once) or the\nenclosing form is submitted.",
				"displayName": "ValidatedTextareaControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-textarea-control/validated-textarea-control.tsx",
				"methods": [],
				"props": {
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
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/form/primitives/control-with-error/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/form/with-validation/validated-textarea-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithCustomValidity;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_validated_textarea_control();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-textarea-control/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Form/With Validation/ValidatedTextareaControl",
			id: "design-system-components-form-with-validation-validatedtextareacontrol",
			component: ValidatedTextareaControl,
			argTypes: {
				customValidity: { control: false },
				defaultValue: { control: false },
				onValueChange: { action: "onValueChange" },
				value: { control: false }
			},
			decorators: [formDecorator],
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "APIs and behavior are still prone to change."
			} }
		};
		Default = { args: {
			label: "Text",
			required: true
		} };
		WithCustomValidity = {
			render: function Template(args) {
				const [value, setValue] = (0, import_react.useState)("");
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedTextareaControl, {
					...args,
					value,
					onValueChange: (next) => setValue(next ?? ""),
					customValidity: value.toLowerCase() === "error" ? {
						type: "invalid",
						message: "The word \"error\" is not allowed."
					} : void 0
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 4
				}, this);
			},
			args: {
				label: "Text",
				description: "The word 'error' will trigger an error."
			}
		};
		try {
			Default.__docgenInfo = {
				"description": "Native constraint validation (here, `required`) is reported inline when the\ncontrol is blurred or the form is submitted.",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-textarea-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomValidity.__docgenInfo = {
				"description": "Consumer-driven validation results are passed through the `customValidity`\nprop. Type the word \"error\" and blur the field to trigger the custom error.",
				"displayName": "WithCustomValidity",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/with-validation/validated-textarea-control/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    label: 'Text',\n    required: true\n  }\n}",
					...Default.parameters?.docs?.source
				},
				description: {
					story: "Native constraint validation (here, `required`) is reported inline when the\ncontrol is blurred or the form is submitted.",
					...Default.parameters?.docs?.description
				}
			}
		};
		WithCustomValidity.parameters = {
			...WithCustomValidity.parameters,
			docs: {
				...WithCustomValidity.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const [value, setValue] = useState('');\n    return <ValidatedTextareaControl {...args} value={value} onValueChange={next => setValue(next ?? '')} customValidity={value.toLowerCase() === 'error' ? {\n      type: 'invalid',\n      message: 'The word \"error\" is not allowed.'\n    } : undefined} />;\n  },\n  args: {\n    label: 'Text',\n    description: \"The word 'error' will trigger an error.\"\n  }\n}",
					...WithCustomValidity.parameters?.docs?.source
				},
				description: {
					story: "Consumer-driven validation results are passed through the `customValidity`\nprop. Type the word \"error\" and blur the field to trigger the custom error.",
					...WithCustomValidity.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithCustomValidity, meta as default };
