import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_aspect_ratio_tool, t as AspectRatioTool } from "./aspect-ratio-tool-BFjjaWmK.js";
import { n as init_scale_tool, t as ScaleTool } from "./scale-tool-DUvKlpZj.js";
import { n as init_width_height_tool, t as WidthHeightTool } from "./width-height-tool-B_8tGHI8.js";
//#region ../packages/block-editor/src/components/dimensions-tool/index.tsx
/**
* Component that renders controls to edit the dimensions of an image or container.
*
* @param {DimensionsToolProps} props The component props.
*
* @return The dimensions controls.
*/
function DimensionsTool({ panelId, value = {}, onChange = () => {}, aspectRatioOptions, defaultAspectRatio = "auto", scaleOptions, defaultScale = "cover", unitsOptions, tools = [
	"aspectRatio",
	"widthHeight",
	"scale"
] }) {
	const width = value.width === void 0 || value.width === "auto" ? null : value.width;
	const height = value.height === void 0 || value.height === "auto" ? null : value.height;
	const aspectRatio = value.aspectRatio === void 0 || value.aspectRatio === "auto" ? null : value.aspectRatio;
	const scale = value.scale === void 0 ? null : value.scale;
	const hasCustomAspectRatio = !!(width && height);
	const lastScaleRef = (0, import_react.useRef)(scale);
	const lastAspectRatioRef = (0, import_react.useRef)(aspectRatio);
	(0, import_react.useEffect)(() => {
		if (scale) lastScaleRef.current = scale;
	}, [scale]);
	(0, import_react.useEffect)(() => {
		if (!hasCustomAspectRatio) lastAspectRatioRef.current = aspectRatio;
	}, [aspectRatio, hasCustomAspectRatio]);
	const aspectRatioValue = hasCustomAspectRatio ? "custom" : aspectRatio;
	const showScaleControl = aspectRatio || width && height;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		tools.includes("aspectRatio") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AspectRatioTool, {
			panelId,
			options: aspectRatioOptions,
			defaultValue: defaultAspectRatio,
			value: aspectRatioValue,
			onChange: (nextAspectRatio) => {
				const nextValue = { ...value };
				nextAspectRatio = nextAspectRatio === "auto" ? null : nextAspectRatio;
				if (!nextAspectRatio) delete nextValue.aspectRatio;
				else nextValue.aspectRatio = nextAspectRatio;
				if (!nextAspectRatio) delete nextValue.scale;
				else nextValue.scale = lastScaleRef.current ?? defaultScale;
				if ("custom" !== nextAspectRatio && width && height) delete nextValue.height;
				onChange(nextValue);
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 5
		}, this),
		tools.includes("widthHeight") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidthHeightTool, {
			panelId,
			units: unitsOptions,
			value: {
				width,
				height
			},
			onChange: ({ width: nextWidth, height: nextHeight }) => {
				const nextValue = { ...value };
				nextWidth = nextWidth === "auto" ? null : nextWidth;
				nextHeight = nextHeight === "auto" ? null : nextHeight;
				if (!nextWidth) delete nextValue.width;
				else nextValue.width = nextWidth;
				if (!nextHeight) delete nextValue.height;
				else nextValue.height = nextHeight;
				if (nextWidth && nextHeight) delete nextValue.aspectRatio;
				else if (lastAspectRatioRef.current) nextValue.aspectRatio = lastAspectRatioRef.current;
				if (!lastAspectRatioRef.current && !!nextWidth !== !!nextHeight) delete nextValue.scale;
				else nextValue.scale = lastScaleRef.current ?? defaultScale;
				onChange(nextValue);
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 114,
			columnNumber: 5
		}, this),
		tools.includes("scale") && showScaleControl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScaleTool, {
			panelId,
			options: scaleOptions,
			defaultValue: defaultScale,
			value: scale,
			onChange: (nextScale) => {
				const nextValue = { ...value };
				if (!nextScale) delete nextValue.scale;
				else nextValue.scale = nextScale;
				onChange(nextValue);
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 166,
			columnNumber: 5
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 75,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_dimensions_tool() {
	return (init_dimensions_tool = __esmMin((() => {
		init_react();
		init_aspect_ratio_tool();
		init_scale_tool();
		init_width_height_tool();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/index.tsx";
		try {
			DimensionsTool.__docgenInfo = {
				"description": "Component that renders controls to edit the dimensions of an image or container.",
				"displayName": "DimensionsTool",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/index.tsx",
				"methods": [],
				"props": {
					"panelId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "ID of the panel that contains the controls.",
						"name": "panelId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"value": {
						"defaultValue": { "value": "{}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "Current dimensions values.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Dimensions" }
					},
					"onChange": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "Callback to update the dimensions values.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: Dimensions) => void)" }
					},
					"aspectRatioOptions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "Aspect ratio options.",
						"name": "aspectRatioOptions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "DimensionsToolOption[]" }
					},
					"defaultAspectRatio": {
						"defaultValue": { "value": "auto" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "The aspect ratio that is the default.",
						"name": "defaultAspectRatio",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"scaleOptions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "Scale options.",
						"name": "scaleOptions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "DimensionsToolOption[]" }
					},
					"defaultScale": {
						"defaultValue": { "value": "cover" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "The scale that is the default.",
						"name": "defaultScale",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"unitsOptions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "Units options.",
						"name": "unitsOptions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "WPUnitControlUnit[]" }
					},
					"tools": {
						"defaultValue": { "value": "[ 'aspectRatio', 'widthHeight', 'scale' ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						}],
						"description": "The tools to show.",
						"name": "tools",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "DimensionsToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					}
				},
				"tags": {
					"param": "props The component props.",
					"return": "The dimensions controls."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_dimensions_tool as n, DimensionsTool as t };
