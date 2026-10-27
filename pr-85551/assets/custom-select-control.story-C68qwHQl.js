import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_control_with_error, t as ControlWithError } from "./control-with-error-Dexaq_6B.js";
import { n as init_custom_select_control$1, t as CustomSelectControl } from "./custom-select-control-C_JyshtH.js";
import { n as init_story_utils, t as formDecorator } from "./story-utils-DNxPY-2b.js";
//#region ../packages/components/src/validated-form-controls/components/custom-select-control.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, UnforwardedValidatedCustomSelectControl, ValidatedCustomSelectControl;
function init_custom_select_control() {
	return (init_custom_select_control = __esmMin((() => {
		init_react();
		init_control_with_error();
		init_custom_select_control$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/custom-select-control.tsx";
		UnforwardedValidatedCustomSelectControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-validated-control__wrapper-with-error-delegate",
				ref: forwardedRef,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ControlWithError, {
					className: "components-validated-control",
					required,
					markWhenOptional,
					customValidity,
					getValidityTarget: () => validityTargetRef.current,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CustomSelectControl, { ...restProps }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 30,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 23,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("select", {
					className: "components-validated-control__error-delegate",
					ref: validityTargetRef,
					required,
					tabIndex: -1,
					value: restProps.value?.key ? "hasvalue" : "",
					onChange: () => {},
					onFocus: (e) => {
						e.target.previousElementSibling?.querySelector("[role=\"combobox\"]")?.focus();
					},
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("option", {
						value: "",
						children: "No selection"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 51,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("option", {
						value: "hasvalue",
						children: "Has selection"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 52,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 36,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 3
			}, void 0);
		};
		ValidatedCustomSelectControl = (0, import_react.forwardRef)(UnforwardedValidatedCustomSelectControl);
		ValidatedCustomSelectControl.displayName = "ValidatedCustomSelectControl";
		try {
			ValidatedCustomSelectControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedCustomSelectControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/custom-select-control.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional classname for the component.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Hide the label visually, while keeping available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"describedBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Description for the select trigger button used by assistive technology.\nIf no value is passed, the text \"Currently selected: selectedItem.name\"\nwill be used fully translated.",
						"name": "describedBy",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label for the control.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Function called with the control's internal state changes. The `selectedItem`\nproperty contains the next selected item.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((newValue: CustomSelectChangeObject<NoInfer<CustomSelectOption>>) => void)" }
					},
					"onBlur": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A handler for `blur` events on the trigger button.\n@ignore",
						"name": "onBlur",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLButtonElement>" }
					},
					"onFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A handler for `focus` events on the trigger button.\n@ignore",
						"name": "onFocus",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLButtonElement>" }
					},
					"onMouseOut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A handler for `mouseout` events on the trigger button.\n@ignore",
						"name": "onMouseOut",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLButtonElement>" }
					},
					"onMouseOver": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A handler for `mouseover` events on the trigger button.\n@ignore",
						"name": "onMouseOver",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLButtonElement>" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The list of options that can be chosen from.",
						"name": "options",
						"required": true,
						"tags": {},
						"type": { "name": "readonly CustomSelectOption[]" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the control.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\"",
							"value": [{ "value": "\"small\"" }, { "value": "\"default\"" }]
						}
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Can be used to externally control the value of the control.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "CustomSelectOption" }
					},
					"__experimentalShowSelectedHint": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Use the `showSelectedHint` property instead.\n@deprecated\n@ignore",
						"name": "__experimentalShowSelectedHint",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"showSelectedHint": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show the hint of the selected item in the trigger button.",
						"name": "showSelectedHint",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextUnconstrainedWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Opt-in prop for an unconstrained width style which became the default in\nWordPress 6.5. The prop is no longer needed and can be safely removed.\n@deprecated\n@ignore",
						"name": "__nextUnconstrainedWidth",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/custom-select-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is required.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/validated-form-controls/components/stories/custom-select-control.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_custom_select_control_story() {
	return (init_custom_select_control_story = __esmMin((() => {
		init_react();
		init_custom_select_control();
		init_story_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/stories/custom-select-control.story.tsx";
		meta = {
			parameters: { a11y: { test: "todo" } },
			title: "Components/@wordpress-components/Selection & Input/Validated Form Controls/ValidatedCustomSelectControl",
			id: "components-validatedcustomselectcontrol",
			component: ValidatedCustomSelectControl,
			tags: ["status-private"],
			decorators: formDecorator,
			args: { onChange: () => {} },
			argTypes: { value: { control: false } }
		};
		Default = { render: function Template({ onChange, ...args }) {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedCustomSelectControl, {
				...args,
				value,
				onChange: (newValue) => {
					setValue(newValue.selectedItem);
					onChange?.(newValue);
				},
				customValidity: value?.key === "a" ? {
					type: "invalid",
					message: "Option A is not allowed."
				} : void 0
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 4
			}, this);
		} };
		Default.args = {
			required: true,
			label: "Custom Select",
			options: [
				{
					key: "",
					name: "Select an option"
				},
				{
					key: "a",
					name: "Option A (not allowed)"
				},
				{
					key: "b",
					name: "Option B"
				}
			]
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState<React.ComponentProps<typeof ValidatedCustomSelectControl>['value']>();\n    return <ValidatedCustomSelectControl {...args} value={value} onChange={newValue => {\n      setValue(newValue.selectedItem);\n      onChange?.(newValue);\n    }} customValidity={value?.key === 'a' ? {\n      type: 'invalid',\n      message: 'Option A is not allowed.'\n    } : undefined} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_custom_select_control_story();
export { Default, meta as default };
