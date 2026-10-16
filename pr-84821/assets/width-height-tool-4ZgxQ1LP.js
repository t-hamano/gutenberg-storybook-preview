import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as unit_control_default, t as init_unit_control } from "./unit-control-Ch49FAD3.js";
import { n as init_component, t as component_default } from "./component-BTLHTdkN.js";
//#region ../packages/block-editor/src/components/dimensions-tool/width-height-tool.jsx
/**
* @typedef {import('@wordpress/components/build-types/unit-control/types').WPUnitControlUnit} WPUnitControlUnit
*/
/**
* @typedef {Object} WidthHeightToolValue
* @property {string} [width]  Width CSS value.
* @property {string} [height] Height CSS value.
*/
/**
* @callback WidthHeightToolOnChange
* @param {WidthHeightToolValue} nextValue Next dimensions value.
* @return {void}
*/
/**
* @typedef {Object} WidthHeightToolProps
* @property {string}                  [panelId]          ID of the panel that contains the controls.
* @property {WidthHeightToolValue}    [value]            Current dimensions values.
* @property {WidthHeightToolOnChange} [onChange]         Callback to update the dimensions values.
* @property {WPUnitControlUnit[]}     [units]            Units options.
* @property {boolean}                 [isShownByDefault] Whether the panel is shown by default.
*/
/**
* Component that renders controls to edit the dimensions of an image or container.
*
* @param {WidthHeightToolProps} props The component props.
*
* @return {React.ReactElement} The width and height tool.
*/
function WidthHeightTool({ panelId, value = {}, onChange = () => {}, units, isShownByDefault = true }) {
	const width = value.width === "auto" ? "" : value.width ?? "";
	const height = value.height === "auto" ? "" : value.height ?? "";
	const onDimensionChange = (dimension) => (nextDimension) => {
		const nextValue = { ...value };
		if (!nextDimension) delete nextValue[dimension];
		else nextValue[dimension] = nextDimension;
		onChange(nextValue);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		style: { gridColumn: "span 1" },
		label: __("Width"),
		isShownByDefault,
		hasValue: () => width !== "",
		onDeselect: onDimensionChange("width"),
		panelId,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(unit_control_default, {
			label: __("Width"),
			placeholder: __("Auto"),
			labelPosition: "top",
			units,
			min: 0,
			value: width,
			onChange: onDimensionChange("width")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 71,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 63,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		style: { gridColumn: "span 1" },
		label: __("Height"),
		isShownByDefault,
		hasValue: () => height !== "",
		onDeselect: onDimensionChange("height"),
		panelId,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(unit_control_default, {
			label: __("Height"),
			placeholder: __("Auto"),
			labelPosition: "top",
			units,
			min: 0,
			value: height,
			onChange: onDimensionChange("height")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 89,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 81,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 62,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_width_height_tool() {
	return (init_width_height_tool = __esmMin((() => {
		init_component(), init_unit_control();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/width-height-tool.jsx";
		WidthHeightTool.__docgenInfo = {
			"description": "Component that renders controls to edit the dimensions of an image or container.\n\n@param {WidthHeightToolProps} props The component props.\n\n@return {React.ReactElement} The width and height tool.",
			"methods": [],
			"displayName": "WidthHeightTool",
			"props": {
				"value": {
					"defaultValue": {
						"value": "{}",
						"computed": false
					},
					"required": false
				},
				"onChange": {
					"defaultValue": {
						"value": "() => {}",
						"computed": false
					},
					"required": false
				},
				"isShownByDefault": {
					"defaultValue": {
						"value": "true",
						"computed": false
					},
					"required": false
				}
			}
		};
	})))();
}
//#endregion
export { init_width_height_tool as n, WidthHeightTool as t };
