import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { i as _x, n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as useControlledState, t as init_use_controlled_state } from "./use-controlled-state-CTRYMe6I.js";
import { n as init_number_control, t as NumberControl } from "./number-control-BsMYN7_s.js";
import { n as init_strings, t as escapeRegExp } from "./strings-Cv6Mm5bk.js";
//#region ../packages/components/src/unit-control/utils.ts
/**
* Handles legacy value + unit handling.
* This component use to manage both incoming value and units separately.
*
* Moving forward, ideally the value should be a string that contains both
* the value and unit, example: '10px'
*
* @param rawValue     The raw value as a string (may or may not contain the unit)
* @param fallbackUnit The unit used as a fallback, if not unit is detected in the `value`
* @param allowedUnits Units to derive from.
* @return The extracted quantity and unit. The quantity can be `undefined` in case the raw value
* could not be parsed to a number correctly. The unit can be `undefined` in case the unit parse
* from the raw value could not be matched against the list of allowed units.
*/
function getParsedQuantityAndUnit(rawValue, fallbackUnit, allowedUnits) {
	return parseQuantityAndUnitFromRawValue(fallbackUnit ? `${rawValue ?? ""}${fallbackUnit}` : rawValue, allowedUnits);
}
/**
* Checks if units are defined.
*
* @param units List of units.
* @return Whether the list actually contains any units.
*/
function hasUnits(units) {
	return Array.isArray(units) && !!units.length;
}
/**
* Parses a quantity and unit from a raw string value, given a list of allowed
* units and otherwise falling back to the default unit.
*
* @param rawValue     The raw value as a string (may or may not contain the unit)
* @param allowedUnits Units to derive from.
* @return The extracted quantity and unit. The quantity can be `undefined` in case the raw value
* could not be parsed to a number correctly. The unit can be `undefined` in case the unit parsed
* from the raw value could not be matched against the list of allowed units.
*/
function parseQuantityAndUnitFromRawValue(rawValue, allowedUnits = ALL_CSS_UNITS) {
	let trimmedValue;
	let quantityToReturn;
	if (typeof rawValue !== "undefined" || rawValue === null) {
		trimmedValue = `${rawValue}`.trim();
		const parsedQuantity = parseFloat(trimmedValue);
		quantityToReturn = !isFinite(parsedQuantity) ? void 0 : parsedQuantity;
	}
	const matchedUnit = (trimmedValue?.match(/[\d.\-\+]*\s*(.*)/))?.[1]?.toLowerCase();
	let unitToReturn;
	if (hasUnits(allowedUnits)) unitToReturn = allowedUnits.find((item) => item.value === matchedUnit)?.value;
	else unitToReturn = DEFAULT_UNIT.value;
	return [quantityToReturn, unitToReturn];
}
/**
* Parses quantity and unit from a raw value. Validates parsed value, using fallback
* value if invalid.
*
* @param rawValue         The next value.
* @param allowedUnits     Units to derive from.
* @param fallbackQuantity The fallback quantity, used in case it's not possible to parse a valid quantity from the raw value.
* @param fallbackUnit     The fallback unit, used in case it's not possible to parse a valid unit from the raw value.
* @return The extracted quantity and unit. The quantity can be `undefined` in case the raw value
* could not be parsed to a number correctly, and the `fallbackQuantity` was also `undefined`. The
* unit can be `undefined` only if the unit parsed from the raw value could not be matched against
* the list of allowed units, the `fallbackQuantity` is also `undefined` and the list of
* `allowedUnits` is passed empty.
*/
function getValidParsedQuantityAndUnit(rawValue, allowedUnits, fallbackQuantity, fallbackUnit) {
	const [parsedQuantity, parsedUnit] = parseQuantityAndUnitFromRawValue(rawValue, allowedUnits);
	const quantityToReturn = parsedQuantity ?? fallbackQuantity;
	let unitToReturn = parsedUnit || fallbackUnit;
	if (!unitToReturn && hasUnits(allowedUnits)) unitToReturn = allowedUnits[0].value;
	return [quantityToReturn, unitToReturn];
}
/**
* Filters available units based on values defined a list of allowed unit values.
*
* @param allowedUnitValues Collection of allowed unit value strings.
* @param availableUnits    Collection of available unit objects.
* @return Filtered units.
*/
function filterUnitsWithSettings(allowedUnitValues = [], availableUnits) {
	return Array.isArray(availableUnits) ? availableUnits.filter((unit) => allowedUnitValues.includes(unit.value)) : [];
}
/**
* Get available units with the unit for the currently selected value
* prepended if it is not available in the list of units.
*
* This is useful to ensure that the current value's unit is always
* accurately displayed in the UI, even if the intention is to hide
* the availability of that unit.
*
* @param rawValue   Selected value to parse.
* @param legacyUnit Legacy unit value, if rawValue needs it appended.
* @param units      List of available units.
*
* @return A collection of units containing the unit for the current value.
*/
function getUnitsWithCurrentUnit(rawValue, legacyUnit, units = ALL_CSS_UNITS) {
	const unitsToReturn = Array.isArray(units) ? [...units] : [];
	const [, currentUnit] = getParsedQuantityAndUnit(rawValue, legacyUnit, ALL_CSS_UNITS);
	if (currentUnit && !unitsToReturn.some((unit) => unit.value === currentUnit)) {
		if (allUnits[currentUnit]) unitsToReturn.unshift(allUnits[currentUnit]);
	}
	return unitsToReturn;
}
var allUnits, ALL_CSS_UNITS, CSS_UNITS, DEFAULT_UNIT, useCustomUnits;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_build_module$1();
		allUnits = {
			px: {
				value: "px",
				label: "px",
				a11yLabel: __("Pixels (px)"),
				step: 1
			},
			"%": {
				value: "%",
				label: "%",
				a11yLabel: __("Percent (%)"),
				step: .1
			},
			em: {
				value: "em",
				label: "em",
				a11yLabel: _x("ems", "Relative to parent font size (em)"),
				step: .01
			},
			rem: {
				value: "rem",
				label: "rem",
				a11yLabel: _x("rems", "Relative to root font size (rem)"),
				step: .01
			},
			vw: {
				value: "vw",
				label: "vw",
				a11yLabel: __("Viewport width (vw)"),
				step: .1
			},
			vh: {
				value: "vh",
				label: "vh",
				a11yLabel: __("Viewport height (vh)"),
				step: .1
			},
			vmin: {
				value: "vmin",
				label: "vmin",
				a11yLabel: __("Viewport smallest dimension (vmin)"),
				step: .1
			},
			vmax: {
				value: "vmax",
				label: "vmax",
				a11yLabel: __("Viewport largest dimension (vmax)"),
				step: .1
			},
			ch: {
				value: "ch",
				label: "ch",
				a11yLabel: __("Width of the zero (0) character (ch)"),
				step: .01
			},
			ex: {
				value: "ex",
				label: "ex",
				a11yLabel: __("x-height of the font (ex)"),
				step: .01
			},
			cm: {
				value: "cm",
				label: "cm",
				a11yLabel: __("Centimeters (cm)"),
				step: .001
			},
			mm: {
				value: "mm",
				label: "mm",
				a11yLabel: __("Millimeters (mm)"),
				step: .1
			},
			in: {
				value: "in",
				label: "in",
				a11yLabel: __("Inches (in)"),
				step: .001
			},
			pc: {
				value: "pc",
				label: "pc",
				a11yLabel: __("Picas (pc)"),
				step: 1
			},
			pt: {
				value: "pt",
				label: "pt",
				a11yLabel: __("Points (pt)"),
				step: 1
			},
			svw: {
				value: "svw",
				label: "svw",
				a11yLabel: __("Small viewport width (svw)"),
				step: .1
			},
			svh: {
				value: "svh",
				label: "svh",
				a11yLabel: __("Small viewport height (svh)"),
				step: .1
			},
			svi: {
				value: "svi",
				label: "svi",
				a11yLabel: __("Small viewport width or height (svi)"),
				step: .1
			},
			svb: {
				value: "svb",
				label: "svb",
				a11yLabel: __("Small viewport width or height (svb)"),
				step: .1
			},
			svmin: {
				value: "svmin",
				label: "svmin",
				a11yLabel: __("Small viewport smallest dimension (svmin)"),
				step: .1
			},
			lvw: {
				value: "lvw",
				label: "lvw",
				a11yLabel: __("Large viewport width (lvw)"),
				step: .1
			},
			lvh: {
				value: "lvh",
				label: "lvh",
				a11yLabel: __("Large viewport height (lvh)"),
				step: .1
			},
			lvi: {
				value: "lvi",
				label: "lvi",
				a11yLabel: __("Large viewport width or height (lvi)"),
				step: .1
			},
			lvb: {
				value: "lvb",
				label: "lvb",
				a11yLabel: __("Large viewport width or height (lvb)"),
				step: .1
			},
			lvmin: {
				value: "lvmin",
				label: "lvmin",
				a11yLabel: __("Large viewport smallest dimension (lvmin)"),
				step: .1
			},
			dvw: {
				value: "dvw",
				label: "dvw",
				a11yLabel: __("Dynamic viewport width (dvw)"),
				step: .1
			},
			dvh: {
				value: "dvh",
				label: "dvh",
				a11yLabel: __("Dynamic viewport height (dvh)"),
				step: .1
			},
			dvi: {
				value: "dvi",
				label: "dvi",
				a11yLabel: __("Dynamic viewport width or height (dvi)"),
				step: .1
			},
			dvb: {
				value: "dvb",
				label: "dvb",
				a11yLabel: __("Dynamic viewport width or height (dvb)"),
				step: .1
			},
			dvmin: {
				value: "dvmin",
				label: "dvmin",
				a11yLabel: __("Dynamic viewport smallest dimension (dvmin)"),
				step: .1
			},
			dvmax: {
				value: "dvmax",
				label: "dvmax",
				a11yLabel: __("Dynamic viewport largest dimension (dvmax)"),
				step: .1
			},
			svmax: {
				value: "svmax",
				label: "svmax",
				a11yLabel: __("Small viewport largest dimension (svmax)"),
				step: .1
			},
			lvmax: {
				value: "lvmax",
				label: "lvmax",
				a11yLabel: __("Large viewport largest dimension (lvmax)"),
				step: .1
			}
		};
		ALL_CSS_UNITS = Object.values(allUnits);
		CSS_UNITS = [
			allUnits.px,
			allUnits["%"],
			allUnits.em,
			allUnits.rem,
			allUnits.vw,
			allUnits.vh
		];
		DEFAULT_UNIT = allUnits.px;
		useCustomUnits = ({ units = ALL_CSS_UNITS, availableUnits = [], defaultValues }) => {
			const customUnitsToReturn = filterUnitsWithSettings(availableUnits, units);
			if (!defaultValues) return customUnitsToReturn;
			return customUnitsToReturn.map((unit) => {
				const [defaultValue] = defaultValues[unit.value] ? parseQuantityAndUnitFromRawValue(defaultValues[unit.value]) : [];
				return {
					...unit,
					default: defaultValue
				};
			});
		};
	})))();
}
//#endregion
//#region ../packages/components/src/unit-control/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = {
			"value-input": "_value-input_1ygeu_46",
			"unit-label": "_unit-label_1ygeu_54",
			"is-small": "_is-small_1ygeu_58",
			"unit-select": "_unit-select_1ygeu_90"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/unit-control/unit-select-control.tsx
function UnitSelectControl({ className, isUnitSelectTabbable: isTabbable = true, onChange, size = "default", unit = "px", units = CSS_UNITS, ...props }, ref) {
	if (!hasUnits(units) || units?.length === 1) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		className: clsx("components-unit-control__unit-label", style_module_default["unit-label"], { [style_module_default["is-small"]]: size === "small" }),
		children: unit
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 23,
		columnNumber: 4
	}, this);
	const handleOnChange = (event) => {
		const { value: unitValue } = event.target;
		const data = units.find((option) => option.value === unitValue);
		onChange?.(unitValue, {
			event,
			data
		});
	};
	const classes = clsx("components-unit-control__select", style_module_default["unit-select"], className, { [style_module_default["is-small"]]: size === "small" });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("select", {
		ref,
		className: classes,
		onChange: handleOnChange,
		tabIndex: isTabbable ? void 0 : -1,
		value: unit,
		...props,
		children: units.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("option", {
			value: option.value,
			children: option.label
		}, option.value, false, {
			fileName: _jsxFileName$1,
			lineNumber: 59,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 50,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, unit_select_control_default;
function init_unit_select_control() {
	return (init_unit_select_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		init_utils();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/unit-control/unit-select-control.tsx";
		unit_select_control_default = (0, import_react.forwardRef)(UnitSelectControl);
	})))();
}
//#endregion
//#region ../packages/components/src/unit-control/index.tsx
function UnforwardedUnitControl(unitControlProps, forwardedRef) {
	const { __unstableStateReducer, autoComplete = "off", children, className, disabled = false, disableUnits = false, isPressEnterToChange = false, isResetValueOnUnitChange = false, isUnitSelectTabbable = true, label, onChange: onChangeProp, onUnitChange, size = "default", unit: unitProp, units: unitsProp = CSS_UNITS, value: valueProp, onFocus: onFocusProp, ...props } = unitControlProps;
	if ("unit" in unitControlProps) deprecated("UnitControl unit prop", {
		since: "5.6",
		hint: "The unit should be provided within the `value` prop.",
		version: "6.2"
	});
	const nonNullValueProp = valueProp ?? void 0;
	const [units, reFirstCharacterOfUnits] = (0, import_react.useMemo)(() => {
		const list = getUnitsWithCurrentUnit(nonNullValueProp, unitProp, unitsProp);
		const [{ value: firstUnitValue = "" } = {}, ...rest] = list;
		const firstCharacters = rest.reduce((carry, { value }) => {
			const first = escapeRegExp(value?.substring(0, 1) || "");
			return carry.includes(first) ? carry : `${carry}|${first}`;
		}, escapeRegExp(firstUnitValue.substring(0, 1)));
		return [list, new RegExp(`^(?:${firstCharacters})$`, "i")];
	}, [
		nonNullValueProp,
		unitProp,
		unitsProp
	]);
	const [parsedQuantity, parsedUnit] = getParsedQuantityAndUnit(nonNullValueProp, unitProp, units);
	const [unit, setUnit] = useControlledState(units.length === 1 ? units[0].value : unitProp, {
		initial: parsedUnit,
		fallback: ""
	});
	(0, import_react.useEffect)(() => {
		if (parsedUnit !== void 0) setUnit(parsedUnit);
	}, [parsedUnit, setUnit]);
	const classes = clsx("components-unit-control", "components-unit-control-wrapper", style_module_default["value-input"], className);
	const handleOnQuantityChange = (nextQuantityValue, changeProps) => {
		if (nextQuantityValue === "" || typeof nextQuantityValue === "undefined" || nextQuantityValue === null) {
			onChangeProp?.("", changeProps);
			return;
		}
		const fallbackUnit = units.some((option) => option.value === unit) ? unit : void 0;
		const onChangeValue = getValidParsedQuantityAndUnit(nextQuantityValue, units, parsedQuantity, fallbackUnit).join("");
		onChangeProp?.(onChangeValue, changeProps);
	};
	const handleOnUnitChange = (nextUnitValue, changeProps) => {
		const { data } = changeProps;
		let nextValue = `${parsedQuantity ?? ""}${nextUnitValue}`;
		if (isResetValueOnUnitChange && data?.default !== void 0) nextValue = `${data.default}${nextUnitValue}`;
		onChangeProp?.(nextValue, changeProps);
		onUnitChange?.(nextUnitValue, changeProps);
		setUnit(nextUnitValue);
	};
	let handleOnKeyDown;
	if (!disableUnits && isUnitSelectTabbable && units.length) handleOnKeyDown = (event) => {
		props.onKeyDown?.(event);
		if (!event.metaKey && !event.ctrlKey && reFirstCharacterOfUnits.test(event.key)) refInputSuffix.current?.focus();
	};
	const refInputSuffix = (0, import_react.useRef)(null);
	const inputSuffix = !disableUnits ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(unit_select_control_default, {
		ref: refInputSuffix,
		"aria-label": __("Select unit"),
		disabled,
		isUnitSelectTabbable,
		onChange: handleOnUnitChange,
		size: ["small", "compact"].includes(size) ? "small" : "default",
		unit,
		units,
		onFocus: onFocusProp,
		onBlur: unitControlProps.onBlur
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 181,
		columnNumber: 3
	}, this) : null;
	let step = props.step;
	if (!step && units) step = units.find((option) => option.value === unit)?.step ?? 1;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberControl, {
		...props,
		autoComplete,
		className: classes,
		disabled,
		spinControls: "none",
		isPressEnterToChange,
		label,
		onKeyDown: handleOnKeyDown,
		onChange: handleOnQuantityChange,
		ref: forwardedRef,
		size,
		suffix: inputSuffix,
		type: isPressEnterToChange ? "text" : "number",
		value: parsedQuantity ?? "",
		step,
		onFocus: onFocusProp,
		__unstableStateReducer
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 209,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, UnitControl;
function init_unit_control() {
	return (init_unit_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_build_module$1();
		init_number_control();
		init_style_module();
		init_unit_select_control();
		init_utils();
		init_use_controlled_state();
		init_strings();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/unit-control/index.tsx";
		UnitControl = (0, import_react.forwardRef)(UnforwardedUnitControl);
		UnitControl.displayName = "UnitControl";
		try {
			UnitControl.__docgenInfo = {
				"description": "`UnitControl` allows the user to set a numeric quantity as well as a unit (e.g. `px`).\n\n\n```jsx\nimport { __experimentalUnitControl as UnitControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst Example = () => {\n  const [ value, setValue ] = useState( '10px' );\n\n  return <UnitControl onChange={ setValue } value={ value } />;\n};\n```",
				"displayName": "UnitControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/unit-control/index.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
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
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "A callback function invoked when the value is changed.\nA function that receives the value of the input.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "(UnitControlOnChangeCallback & InputChangeCallback<{}>)" }
					},
					"units": {
						"defaultValue": { "value": "CSS_UNITS" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Available units to select from.",
						"name": "units",
						"required": false,
						"tags": {},
						"type": { "name": "WPUnitControlUnit[]" }
					},
					"isUnitSelectTabbable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control can be focused via keyboard navigation.",
						"name": "isUnitSelectTabbable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"max": {
						"defaultValue": { "value": "Infinity" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum `value` allowed.",
						"name": "min",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"step": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount by which the `value` is changed when incrementing/decrementing.\nIt is also a factor in validation as `value` must be a multiple of `step`\n(offset by `min`, if specified) to be valid. Accepts the special string value `any`\nthat voids the validation constraint and causes stepping actions to increment/decrement by `1`.",
						"name": "step",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
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
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value of the input.\nCurrent value. If passed as a string, the current unit will be inferred from this value.\nFor example, a `value` of \"50%\" will set the current unit to `%`.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true` enforces a valid number within the control's min/max range.\nIf `false` allows an empty string as a valid value.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDragEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, enables mouse drag gestures.",
						"name": "isDragEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableInputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"dragDirection": {
						"defaultValue": { "value": "'n'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Determines the drag axis.",
						"name": "dragDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",
						"name": "dragThreshold",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isPressEnterToChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",
						"name": "isPressEnterToChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onValidate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onValidate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void)" }
					},
					"__unstableStateReducer": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "",
						"name": "__unstableStateReducer",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "StateReducer" }
					},
					"isShiftStepEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount to increment by when the `SHIFT` key is held down. This shift value is\na multiplier to the `step` value. For example, if the `step` value is `5`,\nand `shiftStep` is `10`, each jump would increment/decrement by `50`.",
						"name": "shiftStep",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"hideHTMLArrows": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the default `input` HTML arrows will be hidden.\n@deprecated",
						"name": "hideHTMLArrows",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"spinFactor": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional multiplication factor in spin changes. i.e. A spin changes\nby `spinFactor * step` (if `step` is \"any\", 1 is used instead).",
						"name": "spinFactor",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disableUnits": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true`, the unit `<select>` is hidden.",
						"name": "disableUnits",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isResetValueOnUnitChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true`, and the selected unit provides a `default` value, this value is set\nwhen changing units.",
						"name": "isResetValueOnUnitChange",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onUnitChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback when the `unit` changes.",
						"name": "onUnitChange",
						"required": false,
						"tags": {},
						"type": { "name": "UnitControlOnChangeCallback" }
					},
					"unit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Current unit. _Note: this prop is deprecated. Instead, provide a unit with a value through the `value` prop._\n@deprecated",
						"name": "unit",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { parseQuantityAndUnitFromRawValue as a, init_utils as i, init_unit_control as n, useCustomUnits as o, CSS_UNITS as r, UnitControl as t };
