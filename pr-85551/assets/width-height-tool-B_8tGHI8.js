import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as unit_control_default, t as init_unit_control } from "./unit-control-DIqm3fyV.js";
import { n as init_component, t as component_default } from "./component-GkibAnnA.js";
//#region ../packages/block-editor/src/components/dimensions-tool/width-height-tool.tsx
/**
* Component that renders controls to edit the dimensions of an image or container.
*
* @param {WidthHeightToolProps} props The component props.
*
* @return The width and height tool.
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
			lineNumber: 49,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 41,
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
			lineNumber: 67,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 59,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_width_height_tool() {
	return (init_width_height_tool = __esmMin((() => {
		init_component(), init_unit_control();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/width-height-tool.tsx";
		try {
			WidthHeightTool.__docgenInfo = {
				"description": "Component that renders controls to edit the dimensions of an image or container.",
				"displayName": "widthheighttool",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/width-height-tool.tsx",
				"methods": [],
				"props": {
					"panelId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						}],
						"description": "ID of the panel that contains the controls.",
						"name": "panelId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"value": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						}],
						"description": "Current dimensions values.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "WidthHeightToolValue" }
					},
					"onChange": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						}],
						"description": "Callback to update the dimensions values.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: WidthHeightToolValue) => void)" }
					},
					"units": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						}],
						"description": "Units options.",
						"name": "units",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "WPUnitControlUnit[]" }
					},
					"isShownByDefault": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						}],
						"description": "Whether the panel is shown by default.",
						"name": "isShownByDefault",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "WidthHeightToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {
					"param": "props The component props.",
					"return": "The width and height tool."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_width_height_tool as n, WidthHeightTool as t };
