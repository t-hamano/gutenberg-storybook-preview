import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as align_center_default, r as align_left_default, t as align_right_default } from "./align-right-B7M2C4Zv.js";
import { t as align_justify_default } from "./align-justify-qOdqnnm3.js";
import { i as init_component, r as component_default } from "./component-VbN8mmYP.js";
import { n as init_component$1, t as component_default$1 } from "./component-CH_kJlIt.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/block-editor/src/components/text-alignment-control/index.jsx
/**
* Control to facilitate text alignment selections.
*
* @param {Object}   props           Component props.
* @param {string}   props.className Class name to add to the control.
* @param {string}   props.value     Currently selected text alignment.
* @param {Function} props.onChange  Handles change in text alignment selection.
* @param {string[]} props.options   Array of text alignment options to display.
*
* @return {Element} Text alignment control.
*/
function TextAlignmentControl({ className, value, onChange, options = DEFAULT_OPTIONS }) {
	const validOptions = (0, import_react.useMemo)(() => TEXT_ALIGNMENT_OPTIONS.filter((option) => options.includes(option.value)), [options]);
	if (!validOptions.length) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		isDeselectable: true,
		label: __("Text alignment"),
		className: clsx("block-editor-text-alignment-control", className),
		value,
		onChange: (newValue) => {
			onChange(newValue === value ? void 0 : newValue);
		},
		children: validOptions.map((option) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
				value: option.value,
				icon: option.icon,
				label: option.label
			}, option.value, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 70,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, TEXT_ALIGNMENT_OPTIONS, DEFAULT_OPTIONS;
function init_text_alignment_control() {
	return (init_text_alignment_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_react();
		init_component(), init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-alignment-control/index.jsx";
		TEXT_ALIGNMENT_OPTIONS = [
			{
				label: __("Align text left"),
				value: "left",
				icon: align_left_default
			},
			{
				label: __("Align text center"),
				value: "center",
				icon: align_center_default
			},
			{
				label: __("Align text right"),
				value: "right",
				icon: align_right_default
			},
			{
				label: __("Justify text"),
				value: "justify",
				icon: align_justify_default
			}
		];
		DEFAULT_OPTIONS = [
			"left",
			"center",
			"right"
		];
		TextAlignmentControl.__docgenInfo = {
			"description": "Control to facilitate text alignment selections.\n\n@param {Object}   props           Component props.\n@param {string}   props.className Class name to add to the control.\n@param {string}   props.value     Currently selected text alignment.\n@param {Function} props.onChange  Handles change in text alignment selection.\n@param {string[]} props.options   Array of text alignment options to display.\n\n@return {Element} Text alignment control.",
			"methods": [],
			"displayName": "TextAlignmentControl",
			"props": { "options": {
				"defaultValue": {
					"value": "[ 'left', 'center', 'right' ]",
					"computed": false
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
export { init_text_alignment_control as n, TextAlignmentControl as t };
