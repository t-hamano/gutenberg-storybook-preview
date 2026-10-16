import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { t as format_capitalize_default } from "./format-capitalize-B5U88Wa0.js";
import { r as format_lowercase_default, t as format_uppercase_default } from "./format-uppercase-Dhns3oGK.js";
import { n as reset_default } from "./reset-CF3TDagv.js";
import { i as init_component, r as component_default } from "./component-v_QVsmRa.js";
import { n as init_component$1, t as component_default$1 } from "./component-DGy7Izg3.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/block-editor/src/components/text-transform-control/index.jsx
/**
* Control to facilitate text transform selections.
*
* @param {Object}   props           Component props.
* @param {string}   props.className Class name to add to the control.
* @param {string}   props.value     Currently selected text transform.
* @param {Function} props.onChange  Handles change in text transform selection.
*
* @return {Element} Text transform control.
*/
function TextTransformControl({ className, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		isDeselectable: true,
		label: __("Letter case"),
		className: clsx("block-editor-text-transform-control", className),
		value,
		onChange: (newValue) => {
			onChange(newValue === value ? void 0 : newValue);
		},
		children: TEXT_TRANSFORMS.map((option) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
				value: option.value,
				icon: option.icon,
				label: option.label
			}, option.value, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, TEXT_TRANSFORMS;
function init_text_transform_control() {
	return (init_text_transform_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_component(), init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-transform-control/index.jsx";
		TEXT_TRANSFORMS = [
			{
				label: __("None"),
				value: "none",
				icon: reset_default
			},
			{
				label: __("Uppercase"),
				value: "uppercase",
				icon: format_uppercase_default
			},
			{
				label: __("Lowercase"),
				value: "lowercase",
				icon: format_lowercase_default
			},
			{
				label: __("Capitalize"),
				value: "capitalize",
				icon: format_capitalize_default
			}
		];
		TextTransformControl.__docgenInfo = {
			"description": "Control to facilitate text transform selections.\n\n@param {Object}   props           Component props.\n@param {string}   props.className Class name to add to the control.\n@param {string}   props.value     Currently selected text transform.\n@param {Function} props.onChange  Handles change in text transform selection.\n\n@return {Element} Text transform control.",
			"methods": [],
			"displayName": "TextTransformControl"
		};
	})))();
}
//#endregion
export { init_text_transform_control as n, TextTransformControl as t };
