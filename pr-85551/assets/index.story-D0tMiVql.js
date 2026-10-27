import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { n as init_component, t as component_default } from "./component-D1o10iDw.js";
import { n as init_component$1, t as component_default$1 } from "./component-CGJctjuC.js";
import { n as init_component$2, t as component_default$2 } from "./component-CGFBrMki.js";
import { n as base_control_default, r as init_base_control } from "./base-control-COIsJz79.js";
import { n as range_control_default, t as init_range_control } from "./range-control-MRbuf3Jj.js";
import { a as parseQuantityAndUnitFromRawValue, i as init_utils, n as unit_control_default, o as useCustomUnits, t as init_unit_control } from "./unit-control-DIqm3fyV.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DWr84Jo8.js";
//#region ../packages/block-editor/src/components/height-control/index.tsx
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
* @param {string|number}              props.value    The current height value.
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
			lineNumber: 158,
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
				lineNumber: 163,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 162,
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
					lineNumber: 175,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 174,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 173,
			columnNumber: 5
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 161,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 157,
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
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/height-control/index.tsx";
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
		try {
			HeightControl.__docgenInfo = {
				"description": "HeightControl renders a linked unit control and range control for adjusting the height of a block.",
				"displayName": "heightcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/height-control/index.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": { "value": "__( 'Height' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						}],
						"description": "A label for the control.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						}],
						"description": "Called when the height changes.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value?: string | undefined) => void" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						}],
						"description": "The current height value.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					}
				},
				"tags": {
					"deprecated": "Use DimensionControl instead.",
					"see": "https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/height-control/README.md",
					"param": "props\nprops.label A label for the control.\nprops.onChange Called when the height changes.\nprops.value The current height value.",
					"return": "The component to be rendered."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/height-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_height_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/height-control/stories/index.story.tsx";
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
				lineNumber: 16,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		try {
			Default.__docgenInfo = {
				"description": "",
				"displayName": "Default",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/height-control/stories/index.story.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						}],
						"description": "A label for the control.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						}],
						"description": "Called when the height changes.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((value?: string) => void)" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						}],
						"description": "The current height value.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/height-control/types.ts",
							"name": "HeightControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "(props: Partial<ComponentProps<typeof HeightControl>>) => {\n  const [value, setValue] = useState<string>();\n  return <HeightControl onChange={setValue} value={value} {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, index_story_default as default };
