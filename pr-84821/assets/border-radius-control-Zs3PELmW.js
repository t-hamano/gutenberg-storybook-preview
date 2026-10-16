import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as corner_bottom_right_default, l as corner_all_default, r as corner_top_left_default, s as corner_bottom_left_default, t as corner_top_right_default } from "./corner-top-right-bIX8NqhM.js";
import { n as link_off_default } from "./link-off-C4yFwgr4.js";
import { n as link_default } from "./link-B6xih8Jw.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_component, t as component_default } from "./component-ThRvbQN8.js";
import { n as init_component$1, t as component_default$1 } from "./component-CMh1CLTm.js";
import { a as parseQuantityAndUnitFromRawValue, i as init_utils$1, o as useCustomUnits } from "./unit-control-Ch49FAD3.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DBuseju1.js";
import { n as init_preset_input_control, t as PresetInputControl } from "./preset-input-control-YwzYzTGJ.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/block-editor/src/components/border-radius-control/linked-button.jsx
function LinkedButton({ isLinked, ...props }) {
	const label = isLinked ? __("Unlink radii") : __("Link radii");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(button_default, {
		...props,
		className: "components-border-radius-control__linked-button",
		size: "small",
		icon: isLinked ? link_default : link_off_default,
		iconSize: 24,
		label
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_linked_button() {
	return (init_linked_button = __esmMin((() => {
		init_button();
		init_build_module$1();
		init_build_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/linked-button.jsx";
		LinkedButton.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "LinkedButton"
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/border-radius-control/utils.js
/**
* Gets the (non-undefined) item with the highest occurrence within an array
* Based in part on: https://stackoverflow.com/a/20762713
*
* Undefined values are always sorted to the end by `sort`, so this function
* returns the first element, to always prioritize real values over undefined
* values.
*
* See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
*
* @param {Array<any>} inputArray Array of items to check.
* @return {any}                  The item with the most occurrences.
*/
function mode(inputArray) {
	return [...inputArray].sort((a, b) => inputArray.filter((v) => v === b).length - inputArray.filter((v) => v === a).length).shift();
}
/**
* Gets the 'all' input value and unit from values data.
*
* @param {Object|string} values Radius values.
* @return {string}              A value + unit for the 'all' input.
*/
function getAllValue(values = {}) {
	/**
	* Border radius support was originally a single pixel value.
	*
	* To maintain backwards compatibility treat this case as the all value.
	*/
	if (typeof values === "string") return values;
	const parsedQuantitiesAndUnits = Object.values(values).map((value) => {
		const newValue = parseQuantityAndUnitFromRawValue(value);
		if (typeof value === "string" && newValue[0] === void 0) return [value, ""];
		return newValue;
	});
	const allValues = parsedQuantitiesAndUnits.map((value) => value[0] ?? "");
	const allUnits = parsedQuantitiesAndUnits.map((value) => value[1]);
	const value = allValues.every((v) => v === allValues[0]) ? allValues[0] : "";
	const unit = mode(allUnits);
	return value === 0 || value ? `${value}${unit || ""}` : void 0;
}
/**
* Checks to determine if values are mixed.
*
* @param {Object} values Radius values.
* @return {boolean}      Whether values are mixed.
*/
function hasMixedValues(values = {}) {
	if (typeof values === "string") return false;
	if (!values || typeof values !== "object") return false;
	const cornerValues = Object.values(values);
	if (cornerValues.length === 0) return false;
	const firstValue = cornerValues[0];
	return !cornerValues.every((value) => value === firstValue);
}
/**
* Checks to determine if values are defined.
*
* @param {Object} values Radius values.
* @return {boolean}      Whether values are mixed.
*/
function hasDefinedValues(values) {
	if (!values) return false;
	if (typeof values === "string") return true;
	return !!Object.values(values).filter((value) => {
		return !!value || value === 0;
	}).length;
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_utils$1();
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/border-radius-control/constants.js
var EMPTY_ARRAY, CORNERS, ICONS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_build_module();
		init_build_module$1();
		EMPTY_ARRAY = [];
		CORNERS = {
			all: __("Border radius"),
			topLeft: __("Top left"),
			topRight: __("Top right"),
			bottomLeft: __("Bottom left"),
			bottomRight: __("Bottom right")
		};
		ICONS = {
			all: corner_all_default,
			topLeft: corner_top_left_default,
			topRight: corner_top_right_default,
			bottomLeft: corner_bottom_left_default,
			bottomRight: corner_bottom_right_default
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/border-radius-control/index.jsx
function useBorderRadiusSizes(presets) {
	const defaultSizes = presets?.default ?? EMPTY_ARRAY;
	const customSizes = presets?.custom ?? EMPTY_ARRAY;
	const themeSizes = presets?.theme ?? EMPTY_ARRAY;
	return (0, import_react.useMemo)(() => {
		const sizes = [
			{
				name: __("None"),
				slug: "0",
				size: 0
			},
			...customSizes,
			...themeSizes,
			...defaultSizes
		];
		return sizes.length > 8 ? [{
			name: __("Default"),
			slug: "default",
			size: void 0
		}, ...sizes] : sizes;
	}, [
		customSizes,
		themeSizes,
		defaultSizes
	]);
}
/**
* Gets the value for a specific corner from the values object.
*
* @param {Object|string} values Border radius values.
* @param {string}        corner Corner name ('all', 'topLeft', etc.).
*
* @return {string|undefined} The corner value.
*/
function getCornerValue(values, corner) {
	if (corner === "all") return getAllValue(values);
	if (typeof values === "string") return values;
	return values?.[corner];
}
/**
* Gets the selected unit for a specific corner.
*
* @param {Object} selectedUnits Units object.
* @param {string} corner        Corner name.
*
* @return {string} The selected unit.
*/
function getCornerUnit(selectedUnits, corner) {
	if (corner === "all") return selectedUnits.flat;
	return selectedUnits[corner];
}
/**
* Creates an onChange handler for a specific corner.
*
* @param {string}   corner   Corner name.
* @param {Object}   values   Current values.
* @param {Function} onChange Original onChange callback.
*
* @return {Function} Corner-specific onChange handler.
*/
function createCornerChangeHandler(corner, values, onChange) {
	return (newValue) => {
		if (corner === "all") onChange({
			topLeft: newValue,
			topRight: newValue,
			bottomLeft: newValue,
			bottomRight: newValue
		});
		else onChange({
			...typeof values !== "string" ? values || {} : {
				topLeft: values,
				topRight: values,
				bottomLeft: values,
				bottomRight: values
			},
			[corner]: newValue
		});
	};
}
/**
* Creates a unit change handler for a specific corner.
*
* @param {string}   corner           Corner name.
* @param {Object}   selectedUnits    Current selected units.
* @param {Function} setSelectedUnits Unit setter function.
*
* @return {Function} Corner-specific unit change handler.
*/
function createCornerUnitChangeHandler(corner, selectedUnits, setSelectedUnits) {
	return (newUnit) => {
		const newUnits = { ...selectedUnits };
		if (corner === "all") {
			newUnits.flat = newUnit;
			newUnits.topLeft = newUnit;
			newUnits.topRight = newUnit;
			newUnits.bottomLeft = newUnit;
			newUnits.bottomRight = newUnit;
		} else newUnits[corner] = newUnit;
		setSelectedUnits(newUnits);
	};
}
/**
* Control to display border radius options.
*
* @param {Object}   props          Component props.
* @param {Function} props.onChange Callback to handle onChange.
* @param {Object}   props.values   Border radius values.
* @param {Object}   props.presets  Border radius presets.
*
* @return {Element}              Custom border radius control.
*/
function BorderRadiusControl({ onChange, values, presets }) {
	const [isLinked, setIsLinked] = (0, import_react.useState)(!hasDefinedValues(values) || !hasMixedValues(values));
	const options = useBorderRadiusSizes(presets);
	const [selectedUnits, setSelectedUnits] = (0, import_react.useState)({
		flat: typeof values === "string" ? parseQuantityAndUnitFromRawValue(values)[1] : void 0,
		topLeft: parseQuantityAndUnitFromRawValue(values?.topLeft)[1],
		topRight: parseQuantityAndUnitFromRawValue(values?.topRight)[1],
		bottomLeft: parseQuantityAndUnitFromRawValue(values?.bottomLeft)[1],
		bottomRight: parseQuantityAndUnitFromRawValue(values?.bottomRight)[1]
	});
	const [availableUnits] = useSettings("spacing.units");
	const units = useCustomUnits({ availableUnits: availableUnits || [
		"px",
		"em",
		"rem"
	] });
	const toggleLinked = () => setIsLinked(!isLinked);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
		className: "components-border-radius-control",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
			className: "components-border-radius-control__header",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(base_control_default.VisualLabel, {
				as: "legend",
				children: __("Radius")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkedButton, {
				onClick: toggleLinked,
				isLinked
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 196,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 192,
			columnNumber: 4
		}, this), isLinked ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PresetInputControl, {
			ariaLabel: CORNERS.all,
			className: "components-border-radius-control",
			icon: ICONS.all,
			minimumCustomValue: 0,
			onChange: createCornerChangeHandler("all", values, onChange),
			onUnitChange: createCornerUnitChangeHandler("all", selectedUnits, setSelectedUnits),
			presets: options,
			presetType: "border-radius",
			selectedUnit: getCornerUnit(selectedUnits, "all"),
			showTooltip: true,
			units,
			value: getCornerValue(values, "all")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 199,
			columnNumber: 5
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, { children: [
			"topLeft",
			"topRight",
			"bottomLeft",
			"bottomRight"
		].map((corner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PresetInputControl, {
			ariaLabel: CORNERS[corner],
			className: "components-border-radius-control",
			icon: ICONS[corner],
			minimumCustomValue: 0,
			onChange: createCornerChangeHandler(corner, values, onChange),
			onUnitChange: createCornerUnitChangeHandler(corner, selectedUnits, setSelectedUnits),
			presets: options,
			presetType: "border-radius",
			selectedUnit: getCornerUnit(selectedUnits, corner),
			showTooltip: true,
			units,
			value: getCornerValue(values, corner)
		}, corner, false, {
			fileName: _jsxFileName,
			lineNumber: 229,
			columnNumber: 7
		}, this)) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 222,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 191,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_border_radius_control() {
	return (init_border_radius_control = __esmMin((() => {
		init_base_control(), init_utils$1(), init_component$1(), init_component();
		init_react();
		init_build_module();
		init_linked_button();
		init_use_settings();
		init_utils();
		init_preset_input_control();
		init_constants();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/border-radius-control/index.jsx";
		BorderRadiusControl.__docgenInfo = {
			"description": "Control to display border radius options.\n\n@param {Object}   props          Component props.\n@param {Function} props.onChange Callback to handle onChange.\n@param {Object}   props.values   Border radius values.\n@param {Object}   props.presets  Border radius presets.\n\n@return {Element}              Custom border radius control.",
			"methods": [],
			"displayName": "BorderRadiusControl"
		};
	})))();
}
//#endregion
export { init_border_radius_control as n, BorderRadiusControl as t };
