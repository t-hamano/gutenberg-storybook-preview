import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as usePrevious, t as init_use_previous } from "./use-previous-BYjjquxs.js";
import { n as settings_default } from "./settings-CGDiNd00.js";
import { a as Popup, i as init_trigger, n as init_root, o as init_popup, r as Trigger, t as Root } from "./root-DlJcNgeY.js";
import { n as init_select_control, t as SelectControl } from "./select-control-DiAnEzU-.js";
import { n as init_icon, t as icon_default } from "./icon-B-T-5iD5.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
import { n as init_component, t as component_default } from "./component-CbGAmvwd.js";
import { n as range_control_default, t as init_range_control } from "./range-control-MRbuf3Jj.js";
import { a as parseQuantityAndUnitFromRawValue, i as init_utils, n as unit_control_default, t as init_unit_control } from "./unit-control-DIqm3fyV.js";
import { a as init_utils$1, i as getSliderValueFromPreset, o as isValuePreset, r as getPresetValueFromCustomValue, t as getCustomValueFromPreset } from "./utils-Cg_gUORE.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/block-editor/src/components/preset-input-control/constants.ts
var CUSTOM_VALUE_SETTINGS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		CUSTOM_VALUE_SETTINGS = {
			px: {
				max: 300,
				steps: 1
			},
			"%": {
				max: 100,
				steps: 1
			},
			vw: {
				max: 100,
				steps: 1
			},
			vh: {
				max: 100,
				steps: 1
			},
			em: {
				max: 10,
				steps: .1
			},
			rem: {
				max: 10,
				steps: .1
			},
			svw: {
				max: 100,
				steps: 1
			},
			lvw: {
				max: 100,
				steps: 1
			},
			dvw: {
				max: 100,
				steps: 1
			},
			svh: {
				max: 100,
				steps: 1
			},
			lvh: {
				max: 100,
				steps: 1
			},
			dvh: {
				max: 100,
				steps: 1
			},
			vi: {
				max: 100,
				steps: 1
			},
			svi: {
				max: 100,
				steps: 1
			},
			lvi: {
				max: 100,
				steps: 1
			},
			dvi: {
				max: 100,
				steps: 1
			},
			vb: {
				max: 100,
				steps: 1
			},
			svb: {
				max: 100,
				steps: 1
			},
			lvb: {
				max: 100,
				steps: 1
			},
			dvb: {
				max: 100,
				steps: 1
			},
			vmin: {
				max: 100,
				steps: 1
			},
			svmin: {
				max: 100,
				steps: 1
			},
			lvmin: {
				max: 100,
				steps: 1
			},
			dvmin: {
				max: 100,
				steps: 1
			},
			vmax: {
				max: 100,
				steps: 1
			},
			svmax: {
				max: 100,
				steps: 1
			},
			lvmax: {
				max: 100,
				steps: 1
			},
			dvmax: {
				max: 100,
				steps: 1
			}
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/preset-input-control/custom-value-controls.tsx
/**
* CustomValueControls component for handling custom value input.
*
* Renders a UnitControl and RangeControl for custom value input mode.
* Handles conditional tooltip wrapping and drag event coordination.
*
* @param props
* @param props.allowNegativeOnDrag       Whether to allow negative values during drag operations.
* @param props.ariaLabel                 Accessible label for the controls.
* @param props.allPlaceholder            Placeholder text (e.g., "Mixed").
* @param props.minValue                  Minimum allowed value.
* @param props.parsedQuantity            The numeric part of the current value.
* @param props.computedUnit              The unit part of the current value.
* @param props.units                     Array of available unit objects.
* @param props.isMixed                   Whether the current value is mixed.
* @param props.step                      Step value for the range control.
* @param props.max                       Maximum value for the range control.
* @param props.showTooltip               Whether to wrap UnitControl in a tooltip.
* @param props.value                     Current value for drag event checks.
* @param props.minimumCustomValue        Minimum custom value for drag end reset.
* @param props.onCustomValueChange       Callback when UnitControl value changes.
* @param props.onCustomValueSliderChange Callback when RangeControl value changes.
* @param props.onUnitChange              Callback when unit changes.
* @param props.onMouseOut                Mouse out event handler.
* @param props.onMouseOver               Mouse over event handler.
* @param props.setMinValue               Function to set minimum value state.
*
* @return The CustomValueControls component.
*/
function CustomValueControls({ allowNegativeOnDrag, ariaLabel, allPlaceholder, minValue, parsedQuantity, computedUnit, units, isMixed, step, max, showTooltip, value, minimumCustomValue, onCustomValueChange, onCustomValueSliderChange, onUnitChange, onMouseOut, onMouseOver, setMinValue }) {
	const unitControl = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(unit_control_default, {
		className: "preset-input-control__unit-control",
		disableUnits: isMixed,
		hideLabelFromVision: true,
		label: ariaLabel,
		min: minValue,
		onChange: onCustomValueChange,
		onUnitChange,
		onBlur: onMouseOut,
		onFocus: onMouseOver,
		onMouseOut,
		onMouseOver,
		units,
		value: [parsedQuantity, computedUnit].join(""),
		placeholder: allPlaceholder,
		onDragStart: () => {
			if (allowNegativeOnDrag && value?.charAt(0) === "-") setMinValue(0);
		},
		onDrag: () => {
			if (allowNegativeOnDrag && value?.charAt(0) === "-") setMinValue(0);
		},
		onDragEnd: () => {
			if (allowNegativeOnDrag) setMinValue(minimumCustomValue);
		}
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 59,
		columnNumber: 3
	}, this);
	const wrappedUnitControl = showTooltip ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Trigger, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: "preset-input-control__tooltip-wrapper",
		children: unitControl
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 97,
		columnNumber: 6
	}, this) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 95,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Popup, { children: ariaLabel }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 102,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 94,
		columnNumber: 3
	}, this) : unitControl;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: [wrappedUnitControl, /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(range_control_default, {
		className: "preset-input-control__custom-value-range",
		hideLabelFromVision: true,
		initialPosition: 0,
		label: ariaLabel,
		max,
		min: 0,
		onBlur: onMouseOut,
		onChange: onCustomValueSliderChange,
		onFocus: onMouseOver,
		onMouseOut,
		onMouseOver,
		step,
		value: parsedQuantity,
		withInputField: false
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 111,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 109,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_custom_value_controls() {
	return (init_custom_value_controls = __esmMin((() => {
		init_range_control(), init_unit_control();
		init_root(), init_trigger(), init_popup();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/custom-value-controls.tsx";
		try {
			CustomValueControls.__docgenInfo = {
				"description": "CustomValueControls component for handling custom value input.\n\nRenders a UnitControl and RangeControl for custom value input mode.\nHandles conditional tooltip wrapping and drag event coordination.",
				"displayName": "customvaluecontrols",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/custom-value-controls.tsx",
				"methods": [],
				"props": {
					"allowNegativeOnDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "allowNegativeOnDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"ariaLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "ariaLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"allPlaceholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "allPlaceholder",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"minValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "minValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"parsedQuantity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "parsedQuantity",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"computedUnit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "computedUnit",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"units": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "units",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "PresetInputUnit[]" }
					},
					"isMixed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "isMixed",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"step": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "step",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"max": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "max",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "showTooltip",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"minimumCustomValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "minimumCustomValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onCustomValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "onCustomValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(newValue?: string | undefined) => void" }
					},
					"onCustomValueSliderChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "onCustomValueSliderChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(next?: number | undefined) => void" }
					},
					"onUnitChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "onUnitChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "UnitControlOnChangeCallback" }
					},
					"onMouseOut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "onMouseOut",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(MouseEventHandler & FocusEventHandler)" }
					},
					"onMouseOver": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "onMouseOver",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(MouseEventHandler & FocusEventHandler)" }
					},
					"setMinValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						}],
						"description": "",
						"name": "setMinValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "CustomValueControlsProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value?: number | undefined) => void" }
					}
				},
				"tags": {
					"param": "props\nprops.allowNegativeOnDrag Whether to allow negative values during drag operations.\nprops.ariaLabel Accessible label for the controls.\nprops.allPlaceholder Placeholder text (e.g., \"Mixed\").\nprops.minValue Minimum allowed value.\nprops.parsedQuantity The numeric part of the current value.\nprops.computedUnit The unit part of the current value.\nprops.units Array of available unit objects.\nprops.isMixed Whether the current value is mixed.\nprops.step Step value for the range control.\nprops.max Maximum value for the range control.\nprops.showTooltip Whether to wrap UnitControl in a tooltip.\nprops.value Current value for drag event checks.\nprops.minimumCustomValue Minimum custom value for drag end reset.\nprops.onCustomValueChange Callback when UnitControl value changes.\nprops.onCustomValueSliderChange Callback when RangeControl value changes.\nprops.onUnitChange Callback when unit changes.\nprops.onMouseOut Mouse out event handler.\nprops.onMouseOver Mouse over event handler.\nprops.setMinValue Function to set minimum value state.",
					"return": "The CustomValueControls component."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/preset-input-control/index.tsx
/**
* PresetInputControl component for selecting preset values or entering custom values.
*
* Displays preset values as either a slider (for <= 8 presets) or a select dropdown.
* Allows toggling to custom value mode with a UnitControl and RangeControl.
* Handles unit tracking and conversion between preset and custom values.
*
* @param props                     Component props.
* @param props.allowNegativeOnDrag Whether to allow negative values during drag operations.
* @param props.ariaLabel           Accessible label for the control.
* @param props.className           Optional CSS class name.
* @param props.customValueSettings Optional custom value settings for max/steps per unit.
* @param props.disableCustomValues Whether to disable custom value input.
* @param props.icon                Icon to display alongside the control.
* @param props.isMixed             Whether the current value is mixed (multiple values).
* @param props.minimumCustomValue  Minimum allowed custom value.
* @param props.onChange            Callback when value changes.
* @param props.onMouseOut          Callback for mouse out events.
* @param props.onMouseOver         Callback for mouse over events.
* @param props.onUnitChange        Callback when unit changes.
* @param props.placeholder         Placeholder text forwarded to the inner UnitControl when
*                                  rendered in custom-value mode.
* @param props.presets             Array of preset objects with name, slug, and size.
* @param props.presetType          Type of preset (e.g., 'spacing', 'border-radius').
* @param props.selectedUnit        Currently selected unit (e.g., 'px', 'em').
* @param props.showTooltip         Whether to show tooltip on custom UnitControl.
* @param props.units               Array of available unit objects (can include max and step).
* @param props.value               Current value (preset or custom).
*
* @return The PresetInputControl component.
*/
function PresetInputControl({ allowNegativeOnDrag = false, ariaLabel, className: classNameProp, customValueSettings = CUSTOM_VALUE_SETTINGS, disableCustomValues, icon, isMixed, value: valueProp, minimumCustomValue, onChange, onMouseOut, onMouseOver, onUnitChange, placeholder, presets = [], presetType, selectedUnit, showTooltip, units }) {
	const value = (0, import_react.useMemo)(() => getPresetValueFromCustomValue(valueProp, presets, presetType), [
		valueProp,
		presets,
		presetType
	]);
	const className = classNameProp ?? "preset-input-control";
	const marks = presets.slice(1, presets.length - 1).map((_newValue, index) => ({
		value: index + 1,
		label: void 0
	}));
	const hasPresets = marks.length > 0;
	const showRangeControl = presets.length <= 8;
	const allPlaceholder = isMixed ? __("Mixed") : placeholder ?? null;
	const [minValue, setMinValue] = (0, import_react.useState)(minimumCustomValue);
	const [showCustomValueControl, setShowCustomValueControl] = (0, import_react.useState)(!disableCustomValues && value !== void 0 && !isValuePreset(value, presetType));
	let currentValue = null;
	const previousValue = usePrevious(value);
	(0, import_react.useEffect)(() => {
		if (!!value && previousValue !== value && !isValuePreset(value, presetType) && showCustomValueControl !== true) setShowCustomValueControl(true);
	}, [
		value,
		previousValue,
		presetType,
		showCustomValueControl
	]);
	const showCustomValueInSelectList = !showRangeControl && !showCustomValueControl && value !== void 0 && (!isValuePreset(value, presetType) || isValuePreset(value, presetType) && isMixed);
	let selectListOptions = presets;
	if (showCustomValueInSelectList) {
		selectListOptions = [...presets, {
			name: !isMixed ? sprintf(__("Custom (%s)"), value) : __("Mixed"),
			slug: "custom",
			size: value
		}];
		currentValue = selectListOptions.length - 1;
	} else if (!isMixed) currentValue = !showCustomValueControl ? getSliderValueFromPreset(value, presets, presetType) : getCustomValueFromPreset(value, presets, presetType);
	const options = selectListOptions.map((size, index) => ({
		value: String(index),
		label: size.name ?? ""
	}));
	const resolvedPresetValue = isValuePreset(value, presetType) ? getCustomValueFromPreset(value, presets, presetType) : value;
	const [parsedQuantity, parsedUnit] = parseQuantityAndUnitFromRawValue(resolvedPresetValue);
	const computedUnit = parsedUnit || selectedUnit || "px";
	const unitConfig = units?.find((item) => item.value === computedUnit);
	const step = unitConfig?.step ?? customValueSettings[computedUnit]?.steps ?? .1;
	const max = unitConfig?.max ?? customValueSettings[computedUnit]?.max ?? 10;
	const handleCustomValueChange = (newValue) => {
		if (newValue === void 0 || newValue === "") {
			onChange(void 0);
			return;
		}
		if (isNaN(parseFloat(newValue))) return;
		onChange(newValue);
	};
	const handleCustomValueSliderChange = (next) => {
		onChange([next, computedUnit].join(""));
	};
	const customTooltipContent = (newValue) => value === void 0 ? void 0 : presets[newValue]?.name;
	const getNewPresetValue = (next, controlType) => {
		const newValue = parseInt(next, 10);
		if (controlType === "selectList") {
			if (newValue === 0 && presets[0]?.slug === "0") return "0";
			if (newValue === 0) return;
		} else if (newValue === 0) return "0";
		return `var:preset|${presetType}|${presets[next]?.slug}`;
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		className: `preset-input-control__wrapper ${className}__wrapper`,
		children: [
			icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, {
				className: "preset-input-control__icon",
				icon,
				size: 24
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 214,
				columnNumber: 5
			}, this),
			(!hasPresets || showCustomValueControl) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomValueControls, {
				allowNegativeOnDrag,
				ariaLabel,
				allPlaceholder,
				minValue,
				parsedQuantity,
				computedUnit,
				units,
				isMixed,
				step,
				max,
				showTooltip,
				value,
				minimumCustomValue,
				onCustomValueChange: handleCustomValueChange,
				onCustomValueSliderChange: handleCustomValueSliderChange,
				onUnitChange,
				onMouseOut,
				onMouseOver,
				setMinValue
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 221,
				columnNumber: 5
			}, this),
			hasPresets && showRangeControl && !showCustomValueControl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(range_control_default, {
				"aria-valuenow": currentValue,
				"aria-valuetext": presets[currentValue]?.name,
				className: "preset-input-control__preset-range",
				hideLabelFromVision: true,
				initialPosition: 0,
				label: ariaLabel,
				max: presets.length - 1,
				marks,
				min: 0,
				onBlur: onMouseOut,
				onChange: (newValue) => onChange(getNewPresetValue(newValue)),
				onFocus: onMouseOver,
				onMouseDown: (event) => {
					if (event?.nativeEvent?.offsetX < 35 && value === void 0) onChange("0");
				},
				onMouseOut,
				onMouseOver,
				renderTooltipContent: customTooltipContent,
				step: 1,
				value: currentValue,
				withInputField: false
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 244,
				columnNumber: 5
			}, this),
			hasPresets && !showRangeControl && !showCustomValueControl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
				label: ariaLabel,
				hideLabelFromVision: true,
				items: options,
				onValueChange: (selection) => {
					if (!selection || selection.value === null) return;
					if (showCustomValueInSelectList && selection.value === String(options.length - 1)) setShowCustomValueControl(true);
					else onChange(getNewPresetValue(selection.value, "selectList"));
				},
				value: options.find((option) => option.value === String(currentValue)) ?? options[0],
				trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl.Trigger, {
					className: "preset-input-control__custom-select-control",
					onBlur: onMouseOut,
					onFocus: onMouseOver,
					onMouseOut,
					onMouseOver
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 307,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 278,
				columnNumber: 5
			}, this),
			hasPresets && !disableCustomValues && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, {
				className: "preset-input-control__custom-toggle",
				icon: settings_default,
				iconSize: 24,
				isPressed: showCustomValueControl,
				label: showCustomValueControl ? __("Use preset") : __("Set custom value"),
				onClick: () => {
					setShowCustomValueControl(!showCustomValueControl);
				},
				size: "small"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 318,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 210,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_preset_input_control() {
	return (init_preset_input_control = __esmMin((() => {
		init_button(), init_icon(), init_range_control(), init_component(), init_utils();
		init_select_control();
		init_use_previous();
		init_build_module();
		init_build_module$1();
		init_react();
		init_constants();
		init_utils$1();
		init_custom_value_controls();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/index.tsx";
		try {
			PresetInputControl.__docgenInfo = {
				"description": "PresetInputControl component for selecting preset values or entering custom values.\n\nDisplays preset values as either a slider (for <= 8 presets) or a select dropdown.\nAllows toggling to custom value mode with a UnitControl and RangeControl.\nHandles unit tracking and conversion between preset and custom values.",
				"displayName": "presetinputcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/index.tsx",
				"methods": [],
				"props": {
					"allowNegativeOnDrag": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Whether to allow negative values during drag operations.",
						"name": "allowNegativeOnDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"ariaLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Accessible label for the control.",
						"name": "ariaLabel",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Optional CSS class name.",
						"name": "className",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"customValueSettings": {
						"defaultValue": { "value": "{\n	px: { max: 300, steps: 1 },\n	'%': { max: 100, steps: 1 },\n	vw: { max: 100, steps: 1 },\n	vh: { max: 100, steps: 1 },\n	em: { max: 10, steps: 0.1 },\n	rem: { max: 10, steps: 0.1 },\n	svw: { max: 100, steps: 1 },\n	lvw: { max: 100, steps: 1 },\n	dvw: { max: 100, steps: 1 },\n	svh: { max: 100, steps: 1 },\n	lvh: { max: 100, steps: 1 },\n	dvh: { max: 100, steps: 1 },\n	vi: { max: 100, steps: 1 },\n	svi: { max: 100, steps: 1 },\n	lvi: { max: 100, steps: 1 },\n	dvi: { max: 100, steps: 1 },\n	vb: { max: 100, steps: 1 },\n	svb: { max: 100, steps: 1 },\n	lvb: { max: 100, steps: 1 },\n	dvb: { max: 100, steps: 1 },\n	vmin: { max: 100, steps: 1 },\n	svmin: { max: 100, steps: 1 },\n	lvmin: { max: 100, steps: 1 },\n	dvmin: { max: 100, steps: 1 },\n	vmax: { max: 100, steps: 1 },\n	svmax: { max: 100, steps: 1 },\n	lvmax: { max: 100, steps: 1 },\n	dvmax: { max: 100, steps: 1 },\n}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Optional custom value settings for max/steps per unit.",
						"name": "customValueSettings",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "CustomValueSettings" }
					},
					"disableCustomValues": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Whether to disable custom value input.",
						"name": "disableCustomValues",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Icon to display alongside the control.",
						"name": "icon",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"isMixed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Whether the current value is mixed (multiple values).",
						"name": "isMixed",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"minimumCustomValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Minimum allowed custom value.",
						"name": "minimumCustomValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Callback when value changes.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value?: string | undefined) => void" }
					},
					"onMouseOut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Callback for mouse out events.",
						"name": "onMouseOut",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(MouseEventHandler & FocusEventHandler)" }
					},
					"onMouseOver": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Callback for mouse over events.",
						"name": "onMouseOver",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(MouseEventHandler & FocusEventHandler)" }
					},
					"onUnitChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Callback when unit changes.",
						"name": "onUnitChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "UnitControlOnChangeCallback" }
					},
					"placeholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Placeholder text forwarded to the inner UnitControl when rendered in\ncustom-value mode.",
						"name": "placeholder",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"presets": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Array of preset objects with name, slug, and size.",
						"name": "presets",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Preset[]" }
					},
					"presetType": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Type of preset (e.g., 'spacing', 'border-radius').",
						"name": "presetType",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"selectedUnit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Currently selected unit (e.g., 'px', 'em').",
						"name": "selectedUnit",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Whether to show tooltip on custom UnitControl.",
						"name": "showTooltip",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"units": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Array of available unit objects (can include max and step).",
						"name": "units",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "PresetInputUnit[]" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						}],
						"description": "Current value (preset or custom).",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/types.ts",
							"name": "PresetInputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {
					"param": "props Component props.\nprops.allowNegativeOnDrag Whether to allow negative values during drag operations.\nprops.ariaLabel Accessible label for the control.\nprops.className Optional CSS class name.\nprops.customValueSettings Optional custom value settings for max/steps per unit.\nprops.disableCustomValues Whether to disable custom value input.\nprops.icon Icon to display alongside the control.\nprops.isMixed Whether the current value is mixed (multiple values).\nprops.minimumCustomValue Minimum allowed custom value.\nprops.onChange Callback when value changes.\nprops.onMouseOut Callback for mouse out events.\nprops.onMouseOver Callback for mouse over events.\nprops.onUnitChange Callback when unit changes.\nprops.placeholder Placeholder text forwarded to the inner UnitControl when\nrendered in custom-value mode.\nprops.presets Array of preset objects with name, slug, and size.\nprops.presetType Type of preset (e.g., 'spacing', 'border-radius').\nprops.selectedUnit Currently selected unit (e.g., 'px', 'em').\nprops.showTooltip Whether to show tooltip on custom UnitControl.\nprops.units Array of available unit objects (can include max and step).\nprops.value Current value (preset or custom).",
					"return": "The PresetInputControl component."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_constants as i, init_preset_input_control as n, CUSTOM_VALUE_SETTINGS as r, PresetInputControl as t };
