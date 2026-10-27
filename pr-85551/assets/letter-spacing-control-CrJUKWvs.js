import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { i as init_utils, n as unit_control_default, o as useCustomUnits, t as init_unit_control } from "./unit-control-DIqm3fyV.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DWr84Jo8.js";
//#region ../packages/block-editor/src/components/letter-spacing-control/index.tsx
/**
* Control for letter-spacing.
*
* @param props                       Component props.
* @param props.__next40pxDefaultSize Start opting into the larger default height that will become the default size in a future version.
* @param props.value                 Currently selected letter-spacing.
* @param props.onChange              Handles change in letter-spacing selection.
* @param props.__unstableInputWidth  Input width to pass through to inner UnitControl. Should be a valid CSS value.
*
* @return Letter-spacing control.
*/
function LetterSpacingControl({ value, onChange, __unstableInputWidth = "60px", ...otherProps }) {
	const [availableUnits] = useSettings("spacing.units");
	const units = useCustomUnits({
		availableUnits: availableUnits || [
			"px",
			"em",
			"rem"
		],
		defaultValues: {
			px: 2,
			em: .2,
			rem: .2
		}
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(unit_control_default, {
		...otherProps,
		label: __("Letter spacing"),
		value,
		__unstableInputWidth,
		units,
		onChange
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_letter_spacing_control() {
	return (init_letter_spacing_control = __esmMin((() => {
		init_unit_control(), init_utils();
		init_build_module();
		init_use_settings();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/index.tsx";
		try {
			LetterSpacingControl.__docgenInfo = {
				"description": "Control for letter-spacing.",
				"displayName": "letterspacingcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/index.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/types.ts",
							"name": "LetterSpacingControlProps"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/types.ts",
							"name": "LetterSpacingControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/types.ts",
							"name": "LetterSpacingControlProps"
						}],
						"description": "Currently selected letter-spacing.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/types.ts",
							"name": "LetterSpacingControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/types.ts",
							"name": "LetterSpacingControlProps"
						}],
						"description": "Handles change in letter-spacing selection.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/types.ts",
							"name": "LetterSpacingControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value?: string | undefined) => void" }
					},
					"__unstableInputWidth": {
						"defaultValue": { "value": "60px" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/types.ts",
							"name": "LetterSpacingControlProps"
						}],
						"description": "Input width to pass through to inner UnitControl. Should be a valid CSS\nvalue.",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/types.ts",
							"name": "LetterSpacingControlProps"
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
					"step": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount by which the `value` is changed when incrementing/decrementing.\nIt is also a factor in validation as `value` must be a multiple of `step`\n(offset by `min`, if specified) to be valid. Accepts the special string value `any`\nthat voids the validation constraint and causes stepping actions to increment/decrement by `1`.",
						"name": "step",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true` enforces a valid number within the control's min/max range.\nIf `false` allows an empty string as a valid value.",
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
						}, {
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
						"defaultValue": { "value": "Infinity" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The maximum `value` allowed.",
						"name": "max",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"min": {
						"defaultValue": { "value": "-Infinity" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum `value` allowed.",
						"name": "min",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
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
					"unit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/unit-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "unit",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isUnitSelectTabbable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/unit-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control can be focused via keyboard navigation.",
						"name": "isUnitSelectTabbable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDragEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, enables mouse drag gestures.",
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
					"__unstableStateReducer": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						}],
						"description": "",
						"name": "__unstableStateReducer",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "StateReducer" }
					},
					"hideHTMLArrows": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the default `input` HTML arrows will be hidden.\n@deprecated",
						"name": "hideHTMLArrows",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isShiftStepEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, pressing `UP` or `DOWN` along with the `SHIFT` key will increment the\nvalue by the `shiftStep` value.",
						"name": "isShiftStepEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shiftStep": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount to increment by when the `SHIFT` key is held down. This shift value is\na multiplier to the `step` value. For example, if the `step` value is `5`,\nand `shiftStep` is `10`, each jump would increment/decrement by `50`.",
						"name": "shiftStep",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"spinFactor": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional multiplication factor in spin changes. i.e. A spin changes\nby `spinFactor * step` (if `step` is \"any\", 1 is used instead).",
						"name": "spinFactor",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disableUnits": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/unit-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disableUnits",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isResetValueOnUnitChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/unit-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isResetValueOnUnitChange",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onUnitChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/unit-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onUnitChange",
						"required": false,
						"tags": {},
						"type": { "name": "UnitControlOnChangeCallback" }
					}
				},
				"tags": {
					"param": "props Component props.\nprops.__next40pxDefaultSize Start opting into the larger default height that will become the default size in a future version.\nprops.value Currently selected letter-spacing.\nprops.onChange Handles change in letter-spacing selection.\nprops.__unstableInputWidth Input width to pass through to inner UnitControl. Should be a valid CSS value.",
					"return": "Letter-spacing control."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_letter_spacing_control as n, LetterSpacingControl as t };
