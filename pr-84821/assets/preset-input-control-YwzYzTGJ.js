import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as usePrevious, t as init_use_previous } from "./use-previous-BYjjquxs.js";
import { n as settings_default } from "./settings-CFgRsx5X.js";
import { a as Popup, i as init_trigger, n as init_root, o as init_popup, r as Trigger, t as Root } from "./root-Ca6oOUgk.js";
import { a as Popup$1, c as init_item, i as init_root$1, l as ItemLabel, n as init_trigger$1, o as init_popup$1, r as Root$1, s as Item, t as Trigger$1, u as init_item_label } from "./trigger-BqQH915g.js";
import { n as init_icon, t as icon_default } from "./icon-BIO3gLKi.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_component, t as component_default } from "./component-ThRvbQN8.js";
import { n as range_control_default, t as init_range_control } from "./range-control-Zoz8xOxu.js";
import { a as parseQuantityAndUnitFromRawValue, i as init_utils, n as unit_control_default, t as init_unit_control } from "./unit-control-Ch49FAD3.js";
import { a as init_utils$1, i as getSliderValueFromPreset, o as isValuePreset, r as getPresetValueFromCustomValue, t as getCustomValueFromPreset } from "./utils-xBX2-T9g.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/block-editor/src/components/preset-input-control/constants.js
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
//#region ../packages/block-editor/src/components/preset-input-control/custom-value-controls.jsx
/**
* CustomValueControls component for handling custom value input.
*
* Renders a UnitControl and RangeControl for custom value input mode.
* Handles conditional tooltip wrapping and drag event coordination.
*
* @param {Object}   props
* @param {boolean}  props.allowNegativeOnDrag       Whether to allow negative values during drag operations.
* @param {string}   props.ariaLabel                 Accessible label for the controls.
* @param {string}   props.allPlaceholder            Placeholder text (e.g., "Mixed").
* @param {number}   props.minValue                  Minimum allowed value.
* @param {number}   props.parsedQuantity            The numeric part of the current value.
* @param {string}   props.computedUnit              The unit part of the current value.
* @param {Array}    props.units                     Array of available unit objects.
* @param {boolean}  props.isMixed                   Whether the current value is mixed.
* @param {number}   props.step                      Step value for the range control.
* @param {number}   props.max                       Maximum value for the range control.
* @param {boolean}  props.showTooltip               Whether to wrap UnitControl in a tooltip.
* @param {string}   props.value                     Current value for drag event checks.
* @param {number}   props.minimumCustomValue        Minimum custom value for drag end reset.
* @param {Function} props.onCustomValueChange       Callback when UnitControl value changes.
* @param {Function} props.onCustomValueSliderChange Callback when RangeControl value changes.
* @param {Function} props.onUnitChange              Callback when unit changes.
* @param {Function} props.onMouseOut                Mouse out event handler.
* @param {Function} props.onMouseOver               Mouse over event handler.
* @param {Function} props.setMinValue               Function to set minimum value state.
*
* @return {Element} The CustomValueControls component.
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
		lineNumber: 58,
		columnNumber: 3
	}, this);
	const wrappedUnitControl = showTooltip ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Trigger, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: "preset-input-control__tooltip-wrapper",
		children: unitControl
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 95,
		columnNumber: 6
	}, this) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 93,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Popup, { children: ariaLabel }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 100,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 92,
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
		lineNumber: 109,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 107,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_custom_value_controls() {
	return (init_custom_value_controls = __esmMin((() => {
		init_range_control(), init_unit_control();
		init_root(), init_trigger(), init_popup();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/custom-value-controls.jsx";
		CustomValueControls.__docgenInfo = {
			"description": "CustomValueControls component for handling custom value input.\n\nRenders a UnitControl and RangeControl for custom value input mode.\nHandles conditional tooltip wrapping and drag event coordination.\n\n@param {Object}   props\n@param {boolean}  props.allowNegativeOnDrag       Whether to allow negative values during drag operations.\n@param {string}   props.ariaLabel                 Accessible label for the controls.\n@param {string}   props.allPlaceholder            Placeholder text (e.g., \"Mixed\").\n@param {number}   props.minValue                  Minimum allowed value.\n@param {number}   props.parsedQuantity            The numeric part of the current value.\n@param {string}   props.computedUnit              The unit part of the current value.\n@param {Array}    props.units                     Array of available unit objects.\n@param {boolean}  props.isMixed                   Whether the current value is mixed.\n@param {number}   props.step                      Step value for the range control.\n@param {number}   props.max                       Maximum value for the range control.\n@param {boolean}  props.showTooltip               Whether to wrap UnitControl in a tooltip.\n@param {string}   props.value                     Current value for drag event checks.\n@param {number}   props.minimumCustomValue        Minimum custom value for drag end reset.\n@param {Function} props.onCustomValueChange       Callback when UnitControl value changes.\n@param {Function} props.onCustomValueSliderChange Callback when RangeControl value changes.\n@param {Function} props.onUnitChange              Callback when unit changes.\n@param {Function} props.onMouseOut                Mouse out event handler.\n@param {Function} props.onMouseOver               Mouse over event handler.\n@param {Function} props.setMinValue               Function to set minimum value state.\n\n@return {Element} The CustomValueControls component.",
			"methods": [],
			"displayName": "CustomValueControls"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/preset-input-control/index.jsx
/**
* PresetInputControl component for selecting preset values or entering custom values.
*
* Displays preset values as either a slider (for <= 8 presets) or a select dropdown.
* Allows toggling to custom value mode with a UnitControl and RangeControl.
* Handles unit tracking and conversion between preset and custom values.
*
* @param {Object}   props                     Component props.
* @param {boolean}  props.allowNegativeOnDrag Whether to allow negative values during drag operations.
* @param {string}   props.ariaLabel           Accessible label for the control.
* @param {string}   props.className           Optional CSS class name.
* @param {Object}   props.customValueSettings Optional custom value settings for max/steps per unit.
* @param {boolean}  props.disableCustomValues Whether to disable custom value input.
* @param {Object}   props.icon                Icon to display alongside the control.
* @param {boolean}  props.isMixed             Whether the current value is mixed (multiple values).
* @param {number}   props.minimumCustomValue  Minimum allowed custom value.
* @param {Function} props.onChange            Callback when value changes.
* @param {Function} props.onMouseOut          Callback for mouse out events.
* @param {Function} props.onMouseOver         Callback for mouse over events.
* @param {Function} props.onUnitChange        Callback when unit changes.
* @param {string}   props.placeholder         Placeholder text forwarded to the inner UnitControl when
*                                             rendered in custom-value mode.
* @param {Array}    props.presets             Array of preset objects with name, slug, and size.
* @param {string}   props.presetType          Type of preset (e.g., 'spacing', 'border-radius').
* @param {string}   props.selectedUnit        Currently selected unit (e.g., 'px', 'em').
* @param {boolean}  props.showTooltip         Whether to show tooltip on custom UnitControl.
* @param {Array}    props.units               Array of available unit objects (can include max and step).
* @param {string}   props.value               Current value (preset or custom).
*
* @return {Element} The PresetInputControl component.
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
		value: index,
		label: size.name
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
				lineNumber: 207,
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
				lineNumber: 214,
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
				lineNumber: 237,
				columnNumber: 5
			}, this),
			hasPresets && !showRangeControl && !showCustomValueControl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root$1, {
				items: options,
				onValueChange: (selection) => {
					if (!selection) return;
					if (showCustomValueInSelectList && selection.value === options.length - 1) setShowCustomValueControl(true);
					else onChange(getNewPresetValue(selection.value, "selectList"));
				},
				value: options.find((option) => option.value === currentValue) ?? options[0],
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger$1, {
					className: "preset-input-control__custom-select-control",
					"aria-label": ariaLabel,
					onBlur: onMouseOut,
					onFocus: onMouseOver,
					onMouseOut,
					onMouseOver
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 295,
					columnNumber: 6
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup$1, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
					value: option,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemLabel, { children: option.label }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 306,
						columnNumber: 9
					}, this)
				}, option.value, false, {
					fileName: _jsxFileName,
					lineNumber: 305,
					columnNumber: 8
				}, this)) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 303,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 269,
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
				lineNumber: 315,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 203,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_preset_input_control() {
	return (init_preset_input_control = __esmMin((() => {
		init_button(), init_icon(), init_range_control(), init_component(), init_utils();
		init_root$1(), init_trigger$1(), init_popup$1(), init_item(), init_item_label();
		init_use_previous();
		init_build_module();
		init_build_module$1();
		init_react();
		init_constants();
		init_utils$1();
		init_custom_value_controls();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/preset-input-control/index.jsx";
		PresetInputControl.__docgenInfo = {
			"description": "PresetInputControl component for selecting preset values or entering custom values.\n\nDisplays preset values as either a slider (for <= 8 presets) or a select dropdown.\nAllows toggling to custom value mode with a UnitControl and RangeControl.\nHandles unit tracking and conversion between preset and custom values.\n\n@param {Object}   props                     Component props.\n@param {boolean}  props.allowNegativeOnDrag Whether to allow negative values during drag operations.\n@param {string}   props.ariaLabel           Accessible label for the control.\n@param {string}   props.className           Optional CSS class name.\n@param {Object}   props.customValueSettings Optional custom value settings for max/steps per unit.\n@param {boolean}  props.disableCustomValues Whether to disable custom value input.\n@param {Object}   props.icon                Icon to display alongside the control.\n@param {boolean}  props.isMixed             Whether the current value is mixed (multiple values).\n@param {number}   props.minimumCustomValue  Minimum allowed custom value.\n@param {Function} props.onChange            Callback when value changes.\n@param {Function} props.onMouseOut          Callback for mouse out events.\n@param {Function} props.onMouseOver         Callback for mouse over events.\n@param {Function} props.onUnitChange        Callback when unit changes.\n@param {string}   props.placeholder         Placeholder text forwarded to the inner UnitControl when\n                                            rendered in custom-value mode.\n@param {Array}    props.presets             Array of preset objects with name, slug, and size.\n@param {string}   props.presetType          Type of preset (e.g., 'spacing', 'border-radius').\n@param {string}   props.selectedUnit        Currently selected unit (e.g., 'px', 'em').\n@param {boolean}  props.showTooltip         Whether to show tooltip on custom UnitControl.\n@param {Array}    props.units               Array of available unit objects (can include max and step).\n@param {string}   props.value               Current value (preset or custom).\n\n@return {Element} The PresetInputControl component.",
			"methods": [],
			"displayName": "PresetInputControl",
			"props": {
				"allowNegativeOnDrag": {
					"defaultValue": {
						"value": "false",
						"computed": false
					},
					"required": false
				},
				"customValueSettings": {
					"defaultValue": {
						"value": "{\n	px: { max: 300, steps: 1 },\n	'%': { max: 100, steps: 1 },\n	vw: { max: 100, steps: 1 },\n	vh: { max: 100, steps: 1 },\n	em: { max: 10, steps: 0.1 },\n	rem: { max: 10, steps: 0.1 },\n	svw: { max: 100, steps: 1 },\n	lvw: { max: 100, steps: 1 },\n	dvw: { max: 100, steps: 1 },\n	svh: { max: 100, steps: 1 },\n	lvh: { max: 100, steps: 1 },\n	dvh: { max: 100, steps: 1 },\n	vi: { max: 100, steps: 1 },\n	svi: { max: 100, steps: 1 },\n	lvi: { max: 100, steps: 1 },\n	dvi: { max: 100, steps: 1 },\n	vb: { max: 100, steps: 1 },\n	svb: { max: 100, steps: 1 },\n	lvb: { max: 100, steps: 1 },\n	dvb: { max: 100, steps: 1 },\n	vmin: { max: 100, steps: 1 },\n	svmin: { max: 100, steps: 1 },\n	lvmin: { max: 100, steps: 1 },\n	dvmin: { max: 100, steps: 1 },\n	vmax: { max: 100, steps: 1 },\n	svmax: { max: 100, steps: 1 },\n	lvmax: { max: 100, steps: 1 },\n	dvmax: { max: 100, steps: 1 },\n}",
						"computed": false
					},
					"required": false
				},
				"presets": {
					"defaultValue": {
						"value": "[]",
						"computed": false
					},
					"required": false
				}
			}
		};
	})))();
}
//#endregion
export { init_constants as i, init_preset_input_control as n, CUSTOM_VALUE_SETTINGS as r, PresetInputControl as t };
