import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as init_select_control, t as SelectControl } from "./select-control-DiAnEzU-.js";
import { n as init_component, t as component_default } from "./component-GkibAnnA.js";
//#region ../packages/block-editor/src/components/resolution-tool/index.tsx
function ResolutionTool({ panelId, value, onChange, options = DEFAULT_SIZE_OPTIONS, defaultValue = DEFAULT_SIZE_OPTIONS[0].value, isShownByDefault = true, resetAllFilter }) {
	const displayValue = value ?? defaultValue;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		hasValue: () => displayValue !== defaultValue,
		label: __("Resolution"),
		onDeselect: () => onChange(defaultValue),
		isShownByDefault,
		panelId,
		resetAllFilter,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
			label: __("Resolution"),
			value: options.find((item) => item.value === displayValue) ?? options.find((item) => !item.disabled) ?? null,
			items: options,
			onValueChange: (item) => onChange(item?.value ?? ""),
			description: __("Select the size of the source image.")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, DEFAULT_SIZE_OPTIONS;
function init_resolution_tool() {
	return (init_resolution_tool = __esmMin((() => {
		init_component();
		init_select_control();
		init_build_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/index.tsx";
		DEFAULT_SIZE_OPTIONS = [
			{
				label: _x("Thumbnail", "Image size option for resolution control"),
				value: "thumbnail"
			},
			{
				label: _x("Medium", "Image size option for resolution control"),
				value: "medium"
			},
			{
				label: _x("Large", "Image size option for resolution control"),
				value: "large"
			},
			{
				label: _x("Full Size", "Image size option for resolution control"),
				value: "full"
			}
		];
		try {
			ResolutionTool.__docgenInfo = {
				"description": "",
				"displayName": "resolutiontool",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/index.tsx",
				"methods": [],
				"props": {
					"panelId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						}],
						"description": "",
						"name": "panelId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						}],
						"description": "Currently selected resolution value.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						}],
						"description": "Called with the selected resolution value.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => void" }
					},
					"options": {
						"defaultValue": { "value": "[\n	{\n		label: _x( 'Thumbnail', 'Image size option for resolution control' ),\n		value: 'thumbnail',\n	},\n	{\n		label: _x( 'Medium', 'Image size option for resolution control' ),\n		value: 'medium',\n	},\n	{\n		label: _x( 'Large', 'Image size option for resolution control' ),\n		value: 'large',\n	},\n	{\n		label: _x( 'Full Size', 'Image size option for resolution control' ),\n		value: 'full',\n	},\n]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						}],
						"description": "",
						"name": "options",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ResolutionOption[]" }
					},
					"defaultValue": {
						"defaultValue": { "value": "DEFAULT_SIZE_OPTIONS[ 0 ].value" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						}],
						"description": "",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isShownByDefault": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						}],
						"description": "",
						"name": "isShownByDefault",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"resetAllFilter": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						}],
						"description": "",
						"name": "resetAllFilter",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/types.ts",
							"name": "ResolutionToolProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ResetAllFilter" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_resolution_tool as n, ResolutionTool as t };
