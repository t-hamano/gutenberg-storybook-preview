import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as init_control_with_error, t as ControlWithError } from "./control-with-error-Doi6dKEC.js";
import { n as init_range_control$1, t as RangeControl } from "./range-control-myolNnUF.js";
import { n as init_story_utils, t as formDecorator } from "./story-utils-GzkDN07T.js";
//#region ../packages/components/src/validated-form-controls/components/range-control.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, UnforwardedValidatedRangeControl, ValidatedRangeControl;
function init_range_control() {
	return (init_range_control = __esmMin((() => {
		init_use_merge_refs();
		init_react();
		init_control_with_error();
		init_range_control$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/range-control.tsx";
		UnforwardedValidatedRangeControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ControlWithError, {
				className: "components-validated-control",
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RangeControl, {
					ref: mergedRefs,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 27,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 20,
				columnNumber: 3
			}, void 0);
		};
		ValidatedRangeControl = (0, import_react.forwardRef)(UnforwardedValidatedRangeControl);
		ValidatedRangeControl.displayName = "ValidatedRangeControl";
		try {
			ValidatedRangeControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedRangeControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/range-control.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, a label will be generated using label\nproperty as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"color": {
						"defaultValue": { "value": "COLORS.theme.accent" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS color string for the `RangeControl` wrapper.\n@see  /packages/components/src/utils/colors-values.js",
						"name": "color",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
					},
					"onFocus": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback for when `RangeControl` input gains focus.",
						"name": "onFocus",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLInputElement>" }
					},
					"onBlur": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback for when `RangeControl` input loses focus.",
						"name": "onBlur",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLInputElement>" }
					},
					"onChange": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new value. The value will be less than\n`max` and more than `min` unless a reset (enabled by `allowReset`)\nhas occurred. In which case the value will be either that of\n`resetFallbackValue` if it has been specified or otherwise\n`undefined`.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: number) => void)" }
					},
					"onMouseLeave": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback for when mouse exits the `RangeControl`.",
						"name": "onMouseLeave",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"onMouseMove": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback for when mouse moves within the `RangeControl`.",
						"name": "onMouseMove",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Disables the `input`, preventing new values from being applied.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"min": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum `value` allowed.",
						"name": "min",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"max": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The maximum `value` allowed.",
						"name": "max",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the range slider.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"step": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum amount by which `value` changes. It is also a factor in\nvalidation as `value` must be a multiple of `step` (offset by `min`) to\nbe valid. Accepts the special string value `any` that voids the\nvalidation constraint and overrides both `withInputField` and\n`showTooltip` props to `false`.",
						"name": "step",
						"required": false,
						"tags": {},
						"type": { "name": "number | \"any\"" }
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Define if the value selection should present a stepper control or a\nslider control in the bottom sheet on mobile. To use the stepper set\nthe type value as `stepper`. Defaults to slider if no option is\nprovided.",
						"name": "type",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"stepper\"",
							"value": [{ "value": "\"stepper\"" }]
						}
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
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
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
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isShiftStepEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Passed as a prop to the `NumberControl` component and is only\napplicable if `withInputField` is true. If true, while the number\ninput has focus, pressing `UP` or `DOWN` along with the `SHIFT` key\nwill change the value by the `shiftStep` value.",
						"name": "isShiftStepEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shiftStep": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Passed as a prop to the `NumberControl` component and is only\napplicable if `withInputField` and `isShiftStepEnabled` are both true\nand while the number input has focus. Acts as a multiplier of `step`.",
						"name": "shiftStep",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"allowReset": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is true, a button to reset the slider is\nrendered.",
						"name": "allowReset",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Forcing the Tooltip UI to show or hide. This is overridden to `false`\nwhen `step` is set to the special string value `any`.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"marks": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a visual representation of `step` ticks. Custom mark indicators\ncan be provided by an `Array`.",
						"name": "marks",
						"required": false,
						"tags": {},
						"type": { "name": "boolean | { value: number; label?: string; }[]" }
					},
					"afterIcon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, an Icon component will be rendered\nafter the slider with the icon equal to afterIcon.\n\nFor more information on `IconType` see the Icon component:\n/packages/components/src/icon/index.tsx",
						"name": "afterIcon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType" }
					},
					"beforeIcon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, an Icon component will be rendered\nbefore the slider with the icon equal to beforeIcon.\n\nFor more information on `IconType` see the Icon component:\n/packages/components/src/icon/index.tsx",
						"name": "beforeIcon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType" }
					},
					"currentInput": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current input to use as a fallback if `value` is currently\n`undefined`.",
						"name": "currentInput",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"initialPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The slider starting position, used when no `value` is passed.\nThe `initialPosition` will be clamped between the provided `min`\nand `max` prop values.",
						"name": "initialPosition",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"railColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS color string to customize the rail element's background.",
						"name": "railColor",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
					},
					"renderTooltipContent": {
						"defaultValue": { "value": "( value ) => value" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A way to customize the rendered UI of the value.",
						"name": "renderTooltipContent",
						"required": false,
						"tags": {},
						"type": { "name": "((value?: ControlledRangeValue) => string | number | null) | undefined" }
					},
					"resetFallbackValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value to revert to if the Reset button is clicked (enabled by\n`allowReset`)",
						"name": "resetFallbackValue",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"separatorType": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Define if separator line under/above control row should be disabled\nor full width. By default it is placed below excluding underline the\ncontrol icon.",
						"name": "separatorType",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"fullWidth\" | \"topFullWidth\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"fullWidth\"" },
								{ "value": "\"topFullWidth\"" }
							]
						}
					},
					"trackColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS color string to customize the track element's background.",
						"name": "trackColor",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
					},
					"withInputField": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if the `input` number field will render next to the\nRangeControl. This is overridden to `false` when `step` is set to the\nspecial string value `any`.",
						"name": "withInputField",
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
//#region ../packages/components/src/validated-form-controls/components/stories/range-control.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_range_control_story() {
	return (init_range_control_story = __esmMin((() => {
		init_react();
		init_story_utils();
		init_range_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/stories/range-control.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Validated Form Controls/ValidatedRangeControl",
			id: "components-validatedrangecontrol",
			component: ValidatedRangeControl,
			tags: ["status-private"],
			decorators: formDecorator,
			args: { onChange: () => {} },
			argTypes: { value: { control: false } }
		};
		Default = { render: function Template({ onChange, ...args }) {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedRangeControl, {
				...args,
				value,
				onChange: (newValue) => {
					setValue(newValue);
					onChange?.(newValue);
				},
				customValidity: value && value % 2 !== 0 ? {
					type: "invalid",
					message: "Choose an even number."
				} : void 0
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 4
			}, this);
		} };
		Default.args = {
			required: true,
			label: "Range",
			help: "Odd numbers are not allowed.",
			min: 0,
			max: 20
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState<React.ComponentProps<typeof ValidatedRangeControl>['value']>();\n    return <ValidatedRangeControl {...args} value={value} onChange={newValue => {\n      setValue(newValue);\n      onChange?.(newValue);\n    }} customValidity={value && value % 2 !== 0 ? {\n      type: 'invalid',\n      message: 'Choose an even number.'\n    } : undefined} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_range_control_story();
export { Default, meta as default };
