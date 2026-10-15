import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { t as format_strikethrough_default } from "./format-strikethrough-Dzkinwrs.js";
import { t as format_underline_default } from "./format-underline-Z_r1sw-k.js";
import { n as reset_default } from "./reset-BNKWWBQ_.js";
import { i as init_component, r as component_default } from "./component-VbN8mmYP.js";
import { n as init_component$1, t as component_default$1 } from "./component-CH_kJlIt.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/block-editor/src/components/text-decoration-control/index.jsx
/**
* Control to facilitate text decoration selections.
*
* @param {Object}   props           Component props.
* @param {string}   props.value     Currently selected text decoration.
* @param {Function} props.onChange  Handles change in text decoration selection.
* @param {string}   props.className Additional class name to apply.
*
* @return {Element} Text decoration control.
*/
function TextDecorationControl({ value, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		isDeselectable: true,
		label: __("Decoration"),
		className: clsx("block-editor-text-decoration-control", className),
		value,
		onChange: (newValue) => {
			onChange(newValue === value ? void 0 : newValue);
		},
		children: TEXT_DECORATIONS.map((option) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
				value: option.value,
				icon: option.icon,
				label: option.label
			}, option.value, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, TEXT_DECORATIONS;
function init_text_decoration_control() {
	return (init_text_decoration_control = __esmMin((() => {
		init_clsx();
		init_build_module$1();
		init_build_module();
		init_component(), init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/index.jsx";
		TEXT_DECORATIONS = [
			{
				label: __("None"),
				value: "none",
				icon: reset_default
			},
			{
				label: __("Underline"),
				value: "underline",
				icon: format_underline_default
			},
			{
				label: __("Strikethrough"),
				value: "line-through",
				icon: format_strikethrough_default
			}
		];
		TextDecorationControl.__docgenInfo = {
			"description": "Control to facilitate text decoration selections.\n\n@param {Object}   props           Component props.\n@param {string}   props.value     Currently selected text decoration.\n@param {Function} props.onChange  Handles change in text decoration selection.\n@param {string}   props.className Additional class name to apply.\n\n@return {Element} Text decoration control.",
			"methods": [],
			"displayName": "TextDecorationControl"
		};
	})))();
}
//#endregion
export { init_text_decoration_control as n, TextDecorationControl as t };
