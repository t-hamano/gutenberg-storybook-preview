import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { i as init_component, r as component_default } from "./component-CzTPIfcd.js";
import { n as init_component$1, t as component_default$1 } from "./component-l-viZ0zh.js";
import { n as init_component$2, t as component_default$2 } from "./component-GkibAnnA.js";
//#region ../packages/block-editor/src/components/dimensions-tool/scale-tool.tsx
/**
* A tool to select the CSS object-fit property for the image.
*
* @param {ScaleToolProps} props The component props.
*
* @return The scale tool.
*/
function ScaleTool({ panelId, value, onChange, options = DEFAULT_SCALE_OPTIONS, defaultValue = DEFAULT_SCALE_OPTIONS[0].value, isShownByDefault = true }) {
	const displayValue = value ?? defaultValue;
	const scaleHelp = (0, import_react.useMemo)(() => {
		return options.reduce((acc, option) => {
			acc[option.value] = option.help;
			return acc;
		}, {});
	}, [options]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$2, {
		label: _x("Scale", "Image scaling options"),
		isShownByDefault,
		hasValue: () => displayValue !== defaultValue,
		onDeselect: () => onChange(defaultValue),
		panelId,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
			label: _x("Scale", "Image scaling options"),
			isBlock: true,
			help: scaleHelp[displayValue],
			value: displayValue,
			onChange,
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, { ...option }, option.value, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 6
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 86,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 79,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, DEFAULT_SCALE_OPTIONS;
function init_scale_tool() {
	return (init_scale_tool = __esmMin((() => {
		init_component$2(), init_component(), init_component$1();
		init_react();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/scale-tool.tsx";
		DEFAULT_SCALE_OPTIONS = [
			{
				value: "fill",
				label: _x("Fill", "Scale option for dimensions control"),
				help: __("Fill the space by stretching the content.")
			},
			{
				value: "contain",
				label: _x("Contain", "Scale option for dimensions control"),
				help: __("Fit the content to the space without clipping.")
			},
			{
				value: "cover",
				label: _x("Cover", "Scale option for dimensions control"),
				help: __("Fill the space by clipping what doesn't fit.")
			},
			{
				value: "none",
				label: _x("None", "Scale option for dimensions control"),
				help: __("Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.")
			},
			{
				value: "scale-down",
				label: _x("Scale down", "Scale option for dimensions control"),
				help: __("Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.")
			}
		];
		try {
			ScaleTool.__docgenInfo = {
				"description": "A tool to select the CSS object-fit property for the image.",
				"displayName": "scaletool",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/scale-tool.tsx",
				"methods": [],
				"props": {
					"panelId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						}],
						"description": "ID of the panel that contains the controls.",
						"name": "panelId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						}],
						"description": "Current scale value.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						}],
						"description": "Callback to update the scale value.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(nextValue?: string | undefined) => void" }
					},
					"options": {
						"defaultValue": { "value": "[\n	{\n		value: 'fill',\n		label: _x( 'Fill', 'Scale option for dimensions control' ),\n		help: __( 'Fill the space by stretching the content.' ),\n	},\n	{\n		value: 'contain',\n		label: _x( 'Contain', 'Scale option for dimensions control' ),\n		help: __( 'Fit the content to the space without clipping.' ),\n	},\n	{\n		value: 'cover',\n		label: _x( 'Cover', 'Scale option for dimensions control' ),\n		help: __( \"Fill the space by clipping what doesn't fit.\" ),\n	},\n	{\n		value: 'none',\n		label: _x( 'None', 'Scale option for dimensions control' ),\n		help: __(\n			'Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.'\n		),\n	},\n	{\n		value: 'scale-down',\n		label: _x( 'Scale down', 'Scale option for dimensions control' ),\n		help: __(\n			'Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.'\n		),\n	},\n]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						}],
						"description": "Scale options.",
						"name": "options",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "DimensionsToolOption[]" }
					},
					"defaultValue": {
						"defaultValue": { "value": "DEFAULT_SCALE_OPTIONS[ 0 ].value" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						}],
						"description": "Default scale value.",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isShownByDefault": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						}],
						"description": "Whether the tool panel is shown by default.",
						"name": "isShownByDefault",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/types.ts",
							"name": "ScaleToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {
					"param": "props The component props.",
					"return": "The scale tool."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_scale_tool as n, ScaleTool as t };
