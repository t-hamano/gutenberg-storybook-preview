import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as init_select_control, t as SelectControl } from "./select-control-DQuK87zk.js";
import { n as init_component, t as component_default } from "./component-XaG3q69r.js";
//#region ../packages/block-editor/src/components/resolution-tool/index.jsx
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
			lineNumber: 43,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 35,
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
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/index.jsx";
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
		ResolutionTool.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "ResolutionTool",
			"props": {
				"options": {
					"defaultValue": {
						"value": "[\n	{\n		label: _x( 'Thumbnail', 'Image size option for resolution control' ),\n		value: 'thumbnail',\n	},\n	{\n		label: _x( 'Medium', 'Image size option for resolution control' ),\n		value: 'medium',\n	},\n	{\n		label: _x( 'Large', 'Image size option for resolution control' ),\n		value: 'large',\n	},\n	{\n		label: _x( 'Full Size', 'Image size option for resolution control' ),\n		value: 'full',\n	},\n]",
						"computed": false
					},
					"required": false
				},
				"defaultValue": {
					"defaultValue": {
						"value": "DEFAULT_SIZE_OPTIONS[ 0 ].value",
						"computed": true
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
export { init_resolution_tool as n, ResolutionTool as t };
