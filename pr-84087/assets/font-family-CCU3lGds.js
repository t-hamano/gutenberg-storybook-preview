import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as init_custom_select_control, t as custom_select_control_default } from "./custom-select-control-DI3o8jYT.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-CJ-eNQf8.js";
//#region ../packages/block-editor/src/components/font-family/index.jsx
function FontFamilyControl({ __next40pxDefaultSize: _next40pxDefaultSize, value = "", onChange, fontFamilies, className, ...props }) {
	const [blockLevelFontFamilies] = useSettings("typography.fontFamilies");
	if (!fontFamilies) fontFamilies = blockLevelFontFamilies;
	if (!fontFamilies || fontFamilies.length === 0) return null;
	const options = [{
		key: "",
		name: __("Default")
	}, ...fontFamilies.map(({ fontFamily, name }) => ({
		key: fontFamily,
		name: name || fontFamily,
		style: { fontFamily }
	}))];
	const selectedValue = options.find((option) => option.key === value) ?? "";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(custom_select_control_default, {
		label: __("Font"),
		value: selectedValue,
		onChange: ({ selectedItem }) => onChange(selectedItem.key),
		options,
		className: clsx("block-editor-font-family-control", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_font_family() {
	return (init_font_family = __esmMin((() => {
		init_clsx();
		init_custom_select_control();
		init_build_module();
		init_use_settings();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/font-family/index.jsx";
		FontFamilyControl.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "FontFamilyControl",
			"props": { "value": {
				"defaultValue": {
					"value": "''",
					"computed": false
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
export { init_font_family as n, FontFamilyControl as t };
