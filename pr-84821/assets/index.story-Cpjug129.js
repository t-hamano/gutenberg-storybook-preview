import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { n as init_component, t as component_default } from "./component-2hv2PPn7.js";
import { n as init_component$1, t as component_default$1 } from "./component-DKizmr6G.js";
import { n as init_component$2, t as component_default$2 } from "./component-CLa3e4Ol.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as range_control_default, t as init_range_control } from "./range-control-Zoz8xOxu.js";
import { a as parseQuantityAndUnitFromRawValue, i as init_utils, n as unit_control_default, o as useCustomUnits, t as init_unit_control } from "./unit-control-Ch49FAD3.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DBuseju1.js";
//#region ../packages/block-editor/src/components/height-control/index.jsx
/**
* HeightControl renders a linked unit control and range control for adjusting the height of a block.
*
* @deprecated Use DimensionControl instead.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/height-control/README.md
*
* @param {Object}                     props
* @param {?string}                    props.label    A label for the control.
* @param {( value: string ) => void } props.onChange Called when the height changes.
* @param {string}                     props.value    The current height value.
*
* @return {Component} The component to be rendered.
*/
function HeightControl({ label = __("Height"), onChange, value }) {
	deprecated("wp.blockEditor.HeightControl", {
		since: "7.0",
		version: "7.2",
		alternative: "wp.blockEditor.DimensionControl"
	});
	const customRangeValue = parseFloat(value);
	const [availableUnits] = useSettings("spacing.units");
	const units = useCustomUnits({ availableUnits: availableUnits || [
		"%",
		"px",
		"em",
		"rem",
		"vh",
		"vw"
	] });
	const selectedUnit = (0, import_react.useMemo)(() => parseQuantityAndUnitFromRawValue(value), [value])[1] || units[0]?.value || "px";
	const handleSliderChange = (next) => {
		onChange([next, selectedUnit].join(""));
	};
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
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("fieldset", {
		className: "block-editor-height-control",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(base_control_default.VisualLabel, {
			as: "legend",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 149,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default$1, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default, {
			isBlock: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(unit_control_default, {
				value,
				units,
				onChange,
				onUnitChange: handleUnitChange,
				min: 0,
				label,
				hideLabelFromVision: true
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 154,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 153,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default, {
			isBlock: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(component_default$2, {
				marginX: 2,
				marginBottom: 0,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(range_control_default, {
					value: customRangeValue,
					min: 0,
					max: RANGE_CONTROL_CUSTOM_SETTINGS[selectedUnit]?.max ?? 100,
					step: RANGE_CONTROL_CUSTOM_SETTINGS[selectedUnit]?.step ?? .1,
					withInputField: false,
					onChange: handleSliderChange,
					label,
					hideLabelFromVision: true
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 166,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 165,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 164,
			columnNumber: 5
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 152,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 148,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, RANGE_CONTROL_CUSTOM_SETTINGS;
function init_height_control() {
	return (init_height_control = __esmMin((() => {
		init_react();
		init_base_control(), init_range_control(), init_component$1(), init_component(), init_component$2(), init_utils(), init_unit_control();
		init_build_module$1();
		init_build_module();
		init_use_settings();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/height-control/index.jsx";
		RANGE_CONTROL_CUSTOM_SETTINGS = {
			px: {
				max: 1e3,
				step: 1
			},
			"%": {
				max: 100,
				step: 1
			},
			vw: {
				max: 100,
				step: 1
			},
			vh: {
				max: 100,
				step: 1
			},
			em: {
				max: 50,
				step: .1
			},
			rem: {
				max: 50,
				step: .1
			},
			svw: {
				max: 100,
				step: 1
			},
			lvw: {
				max: 100,
				step: 1
			},
			dvw: {
				max: 100,
				step: 1
			},
			svh: {
				max: 100,
				step: 1
			},
			lvh: {
				max: 100,
				step: 1
			},
			dvh: {
				max: 100,
				step: 1
			},
			vi: {
				max: 100,
				step: 1
			},
			svi: {
				max: 100,
				step: 1
			},
			lvi: {
				max: 100,
				step: 1
			},
			dvi: {
				max: 100,
				step: 1
			},
			vb: {
				max: 100,
				step: 1
			},
			svb: {
				max: 100,
				step: 1
			},
			lvb: {
				max: 100,
				step: 1
			},
			dvb: {
				max: 100,
				step: 1
			},
			vmin: {
				max: 100,
				step: 1
			},
			svmin: {
				max: 100,
				step: 1
			},
			lvmin: {
				max: 100,
				step: 1
			},
			dvmin: {
				max: 100,
				step: 1
			},
			vmax: {
				max: 100,
				step: 1
			},
			svmax: {
				max: 100,
				step: 1
			},
			lvmax: {
				max: 100,
				step: 1
			},
			dvmax: {
				max: 100,
				step: 1
			}
		};
		HeightControl.__docgenInfo = {
			"description": "HeightControl renders a linked unit control and range control for adjusting the height of a block.\n\n@deprecated Use DimensionControl instead.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/height-control/README.md\n\n@param {Object}                     props\n@param {?string}                    props.label    A label for the control.\n@param {( value: string ) => void } props.onChange Called when the height changes.\n@param {string}                     props.value    The current height value.\n\n@return {Component} The component to be rendered.",
			"methods": [],
			"displayName": "HeightControl",
			"props": { "label": {
				"defaultValue": {
					"value": "__( 'Height' )",
					"computed": true
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/height-control/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_height_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/height-control/stories/index.story.jsx";
		index_story_default = {
			component: HeightControl,
			id: "blockeditor-heightcontrol",
			title: "Editor/Block Editor/HeightControl"
		};
		Template = (props) => {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeightControl, {
				onChange: setValue,
				value,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState();\n  return <HeightControl onChange={setValue} value={value} {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, index_story_default as default };
