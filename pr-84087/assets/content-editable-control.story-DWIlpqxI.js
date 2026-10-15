import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_control_with_error, t as ControlWithError } from "./control-with-error-Doi6dKEC.js";
import { n as init_content_editable_control$1, t as ContentEditableControl } from "./content-editable-control-CpTCOMvo.js";
import { n as init_story_utils, t as formDecorator } from "./story-utils-GzkDN07T.js";
//#region ../packages/components/src/validated-form-controls/components/content-editable-control.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, UnforwardedValidatedContentEditableControl, ValidatedContentEditableControl;
function init_content_editable_control() {
	return (init_content_editable_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_control_with_error();
		init_content_editable_control$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/content-editable-control.tsx";
		UnforwardedValidatedContentEditableControl = ({ required, customValidity, markWhenOptional, value, className, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-validated-control__wrapper-with-error-delegate",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ControlWithError, {
					className: "components-validated-control",
					required,
					markWhenOptional,
					customValidity,
					getValidityTarget: () => validityTargetRef.current,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ContentEditableControl, {
						ref: forwardedRef,
						className: clsx("components-validated-control__content-editable", className),
						"aria-invalid": customValidity?.type === "invalid" || void 0,
						...restProps
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 43,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 36,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("input", {
					className: "components-validated-control__error-delegate",
					type: "text",
					ref: validityTargetRef,
					required,
					value: value?.trim() ?? "",
					tabIndex: -1,
					onChange: () => {},
					onFocus: (e) => {
						e.target.previousElementSibling?.querySelector("[role=\"textbox\"]")?.focus();
					}
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 55,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 35,
				columnNumber: 3
			}, void 0);
		};
		ValidatedContentEditableControl = (0, import_react.forwardRef)(UnforwardedValidatedContentEditableControl);
		ValidatedContentEditableControl.displayName = "ValidatedContentEditableControl";
		try {
			ValidatedContentEditableControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedContentEditableControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/content-editable-control.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/content-editable-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label text for the control.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"required": {
						"defaultValue": { "value": "false\nfalse" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/content-editable-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the field is required. Exposed to assistive technology via\n`aria-required`.\nWhether the control is required.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/content-editable-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the field is non-editable. A disabled field exposes\n`aria-disabled`, leaves the tab order, and keeps focus if it had it.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/content-editable-control.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The field's current value as plain text, used only to drive the\nhidden validity delegate (e.g. `required`). The visible content\nis managed by the consumer through the forwarded ref, and any\nmarkup-to-text transformation is the consumer's responsibility.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"placeholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/content-editable-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Placeholder text shown while the element has no content. Exposed to\nassistive technology via `aria-placeholder` and drawn by the stylesheet\nwhen the element is empty.",
						"name": "placeholder",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
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
//#region ../packages/components/src/validated-form-controls/components/stories/content-editable-control.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_content_editable_control_story() {
	return (init_content_editable_control_story = __esmMin((() => {
		init_react();
		init_story_utils();
		init_content_editable_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/stories/content-editable-control.story.tsx";
		meta = {
			parameters: { a11y: { test: "todo" } },
			title: "Components/@wordpress-components/Selection & Input/Validated Form Controls/ValidatedContentEditableControl",
			id: "components-validatedcontenteditablecontrol",
			component: ValidatedContentEditableControl,
			tags: ["status-private"],
			decorators: formDecorator,
			argTypes: { value: { control: false } }
		};
		Default = { render: function Template(args) {
			const [value, setValue] = (0, import_react.useState)("");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedContentEditableControl, {
				...args,
				value,
				onInput: (e) => setValue(e.currentTarget.textContent ?? ""),
				customValidity: value.toLowerCase().includes("error") ? {
					type: "invalid",
					message: "The word \"error\" is not allowed."
				} : void 0
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 4
			}, this);
		} };
		Default.args = {
			required: true,
			label: "Content",
			help: "The word \"error\" will trigger an error."
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    // The control is presentational: the editable manages its own\n    // contents, and the consumer mirrors the plain text into `value`\n    // for the validity delegate.\n    const [value, setValue] = useState('');\n    return <ValidatedContentEditableControl {...args} value={value} onInput={e => setValue(e.currentTarget.textContent ?? '')} customValidity={value.toLowerCase().includes('error') ? {\n      type: 'invalid',\n      message: 'The word \"error\" is not allowed.'\n    } : undefined} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_content_editable_control_story();
export { Default, meta as default };
