import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as base_control_default, r as init_base_control } from "./base-control-BlNgg-sa.js";
import { a as parseQuantityAndUnitFromRawValue, i as init_utils, o as useCustomUnits } from "./unit-control-5q-HXQOQ.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-CJ-eNQf8.js";
import { i as init_constants, n as init_preset_input_control, r as CUSTOM_VALUE_SETTINGS, t as PresetInputControl } from "./preset-input-control-OxSJiaOG.js";
//#region ../packages/block-editor/src/components/dimension-control/index.jsx
/**
* Hook to retrieve dimension sizes from theme settings.
*
* @param {Object} presets Dimension presets object containing default, theme, and custom sizes.
* @return {Array} Array of dimension size options.
*/
function useDimensionSizes(presets) {
	const defaultSizes = presets?.default ?? EMPTY_ARRAY;
	const customSizes = presets?.custom ?? EMPTY_ARRAY;
	const themeSizes = presets?.theme ?? EMPTY_ARRAY;
	return (0, import_react.useMemo)(() => {
		return [
			{
				name: __("None"),
				slug: "0",
				size: 0
			},
			...customSizes,
			...themeSizes,
			...defaultSizes
		];
	}, [
		customSizes,
		themeSizes,
		defaultSizes
	]);
}
/**
* DimensionControl renders a linked unit control and range control for adjusting dimensions of a block.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/dimension-control/README.md
*
* @param {Object}                     props
* @param {?string}                    props.label          A label for the control.
* @param {( value: string ) => void } props.onChange       Called when the dimension value changes.
* @param {string}                     props.value          The current dimension value.
* @param {?string}                    props.placeholder    Placeholder text for the custom-value input.
* @param {?string}                    props.className      Additional CSS class on the wrapping fieldset.
* @param {?Object}                    props.dimensionSizes Optional dimension size presets. Falls back to settings from the store.
*
* @return {Component} The component to be rendered.
*/
function DimensionControl({ label = __("Dimension"), onChange, value, placeholder, className, dimensionSizes: dimensionSizesProp }) {
	const [dimensionSizesFromSettings, availableUnits] = useSettings("dimensions.dimensionSizes", "spacing.units");
	const dimensionSizes = dimensionSizesProp ?? dimensionSizesFromSettings;
	const units = useCustomUnits({ availableUnits: availableUnits || [
		"%",
		"px",
		"em",
		"rem",
		"vh",
		"vw"
	] });
	const options = useDimensionSizes(dimensionSizes);
	const [selectedUnit, setSelectedUnit] = (0, import_react.useState)(() => {
		const [, unit] = parseQuantityAndUnitFromRawValue(value);
		return unit || units[0]?.value || "px";
	});
	const handleUnitChange = (newUnit) => {
		const [currentValue, currentUnit] = parseQuantityAndUnitFromRawValue(value);
		if (["em", "rem"].includes(newUnit) && currentUnit === "px") onChange((currentValue / 16).toFixed(2) + newUnit);
		else if (["em", "rem"].includes(currentUnit) && newUnit === "px") onChange(Math.round(currentValue * 16) + newUnit);
		else if ([
			"%",
			"vw",
			"svw",
			"lvw",
			"dvw",
			"vh",
			"svh",
			"lvh",
			"dvh",
			"vi",
			"svi",
			"lvi",
			"dvi",
			"vb",
			"svb",
			"lvb",
			"dvb",
			"vmin",
			"svmin",
			"lvmin",
			"dvmin",
			"vmax",
			"svmax",
			"lvmax",
			"dvmax"
		].includes(newUnit) && currentValue > 100) onChange(100 + newUnit);
		setSelectedUnit(newUnit);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
		className: clsx("block-editor-dimension-control", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(base_control_default.VisualLabel, {
			as: "legend",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 150,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PresetInputControl, {
			ariaLabel: label,
			className: "block-editor-dimension-control",
			customValueSettings: DIMENSION_CUSTOM_VALUE_SETTINGS,
			minimumCustomValue: 0,
			onChange,
			onUnitChange: handleUnitChange,
			placeholder,
			presets: options,
			presetType: "dimension",
			selectedUnit,
			showTooltip: true,
			units,
			value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 147,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, EMPTY_ARRAY, DIMENSION_CUSTOM_VALUE_SETTINGS;
function init_dimension_control() {
	return (init_dimension_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_base_control(), init_utils();
		init_build_module();
		init_use_settings();
		init_preset_input_control();
		init_constants();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimension-control/index.jsx";
		EMPTY_ARRAY = [];
		DIMENSION_CUSTOM_VALUE_SETTINGS = {
			...CUSTOM_VALUE_SETTINGS,
			px: {
				max: 1e3,
				steps: 1
			},
			em: {
				max: 50,
				steps: .1
			},
			rem: {
				max: 50,
				steps: .1
			}
		};
		DimensionControl.__docgenInfo = {
			"description": "DimensionControl renders a linked unit control and range control for adjusting dimensions of a block.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/dimension-control/README.md\n\n@param {Object}                     props\n@param {?string}                    props.label          A label for the control.\n@param {( value: string ) => void } props.onChange       Called when the dimension value changes.\n@param {string}                     props.value          The current dimension value.\n@param {?string}                    props.placeholder    Placeholder text for the custom-value input.\n@param {?string}                    props.className      Additional CSS class on the wrapping fieldset.\n@param {?Object}                    props.dimensionSizes Optional dimension size presets. Falls back to settings from the store.\n\n@return {Component} The component to be rendered.",
			"methods": [],
			"displayName": "DimensionControl",
			"props": { "label": {
				"defaultValue": {
					"value": "__( 'Dimension' )",
					"computed": true
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
export { init_dimension_control as n, DimensionControl as t };
