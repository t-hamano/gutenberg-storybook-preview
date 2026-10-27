import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as number_control_default, t as init_number_control } from "./number-control-B-y4xCKr.js";
//#region ../packages/block-editor/src/components/line-height-control/utils.ts
/**
* Determines if the lineHeight attribute has been properly defined.
*
* @param lineHeight The value to check.
*
* @return Whether the lineHeight attribute is valid.
*/
function isLineHeightDefined(lineHeight) {
	return lineHeight !== void 0 && lineHeight !== "";
}
var BASE_DEFAULT_VALUE, STEP;
function init_utils() {
	return (init_utils = __esmMin((() => {
		BASE_DEFAULT_VALUE = 1.5;
		STEP = .01;
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/line-height-control/index.tsx
var import_jsx_dev_runtime, _jsxFileName, LineHeightControl;
function init_line_height_control() {
	return (init_line_height_control = __esmMin((() => {
		init_build_module();
		init_number_control();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/index.tsx";
		LineHeightControl = ({ __next40pxDefaultSize: _next40pxDefaultSize, value: lineHeight, onChange, __unstableInputWidth = "60px", ...otherProps }) => {
			const isDefined = isLineHeightDefined(lineHeight);
			const adjustNextValue = (nextValue, wasTypedOrPasted) => {
				if (isDefined) return nextValue;
				/**
				* The following logic handles the initial spin up/down action
				* (from an undefined value state) so that the next values are better suited for
				* line-height rendering. For example, the first spin up should immediately
				* go to 1.6, rather than the normally expected 0.1.
				*
				* Spin up/down actions can be triggered by keydowns of the up/down arrow keys,
				* dragging the input or by clicking the spin buttons.
				*/
				const spin = STEP * 10;
				switch (`${nextValue}`) {
					case `${spin}`: return BASE_DEFAULT_VALUE + spin;
					case "0":
						if (wasTypedOrPasted) return nextValue;
						return BASE_DEFAULT_VALUE - spin;
					case "": return BASE_DEFAULT_VALUE;
					default: return nextValue;
				}
			};
			const stateReducer = (state, action) => {
				const wasTypedOrPasted = ["insertText", "insertFromPaste"].includes(action.payload.event.nativeEvent?.inputType);
				const value = adjustNextValue(state.value, wasTypedOrPasted);
				return {
					...state,
					value
				};
			};
			const value = isDefined ? lineHeight : "";
			const handleOnChange = (nextValue, { event }) => {
				if (nextValue === "") {
					onChange();
					return;
				}
				if (event.type === "click") {
					onChange(adjustNextValue(`${nextValue}`, false));
					return;
				}
				onChange(`${nextValue}`);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "block-editor-line-height-control",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(number_control_default, {
					placeholder: BASE_DEFAULT_VALUE,
					...otherProps,
					__unstableInputWidth,
					__unstableStateReducer: stateReducer,
					onChange: handleOnChange,
					label: __("Line height"),
					step: STEP,
					spinFactor: 10,
					value,
					min: 0,
					spinControls: "custom"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 3
			}, void 0);
		};
		try {
			LineHeightControl.__docgenInfo = {
				"description": "",
				"displayName": "lineheightcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/index.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/types.ts",
							"name": "LineHeightControlProps"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/types.ts",
							"name": "LineHeightControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/types.ts",
							"name": "LineHeightControlProps"
						}],
						"description": "The line height, unset when `undefined`.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/types.ts",
							"name": "LineHeightControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/types.ts",
							"name": "LineHeightControlProps"
						}],
						"description": "Called with the next line height, or nothing when it is cleared.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/types.ts",
							"name": "LineHeightControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value?: string | number | undefined) => void" }
					},
					"__unstableInputWidth": {
						"defaultValue": { "value": "60px" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/types.ts",
							"name": "LineHeightControlProps"
						}],
						"description": "The width of the input.",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/types.ts",
							"name": "LineHeightControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": false,
						"tags": {},
						"type": { "name": "HTMLInputTypeAttribute" }
					},
					"required": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"max": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "max",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDragEnabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isDragEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dragDirection": {
						"defaultValue": { "value": "'n'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "Determines the drag axis.",
						"name": "dragDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "DragDirection",
							"value": [
								{ "value": "\"s\"" },
								{ "value": "\"n\"" },
								{ "value": "\"e\"" },
								{ "value": "\"w\"" }
							]
						}
					},
					"dragThreshold": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",
						"name": "dragThreshold",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isPressEnterToChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",
						"name": "isPressEnterToChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onValidate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onValidate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void)" }
					},
					"hideHTMLArrows": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hideHTMLArrows",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isShiftStepEnabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isShiftStepEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shiftStep": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "shiftStep",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_line_height_control as n, LineHeightControl as t };
