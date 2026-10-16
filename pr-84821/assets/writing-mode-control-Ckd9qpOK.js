import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as text_horizontal_default, n as text_vertical_default } from "./text-vertical-BpkZ4scL.js";
import { i as init_component, r as component_default } from "./component-v_QVsmRa.js";
import { n as init_component$1, t as component_default$1 } from "./component-DGy7Izg3.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/block-editor/src/components/writing-mode-control/index.jsx
/**
* Control to facilitate writing mode selections.
*
* @param {Object}   props           Component props.
* @param {string}   props.className Class name to add to the control.
* @param {string}   props.value     Currently selected writing mode.
* @param {Function} props.onChange  Handles change in the writing mode selection.
*
* @return {Element} Writing Mode control.
*/
function WritingModeControl({ className, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		isDeselectable: true,
		label: __("Orientation"),
		className: clsx("block-editor-writing-mode-control", className),
		value,
		onChange: (newValue) => {
			onChange(newValue === value ? void 0 : newValue);
		},
		children: WRITING_MODES.map((option) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default$1, {
				value: option.value,
				icon: option.icon,
				label: option.label
			}, option.value, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, WRITING_MODES;
function init_writing_mode_control() {
	return (init_writing_mode_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_component(), init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/writing-mode-control/index.jsx";
		WRITING_MODES = [{
			label: __("Horizontal"),
			value: "horizontal-tb",
			icon: text_horizontal_default
		}, {
			label: __("Vertical"),
			value: isRTL() ? "vertical-lr" : "vertical-rl",
			icon: text_vertical_default
		}];
		WritingModeControl.__docgenInfo = {
			"description": "Control to facilitate writing mode selections.\n\n@param {Object}   props           Component props.\n@param {string}   props.className Class name to add to the control.\n@param {string}   props.value     Currently selected writing mode.\n@param {Function} props.onChange  Handles change in the writing mode selection.\n\n@return {Element} Writing Mode control.",
			"methods": [],
			"displayName": "WritingModeControl"
		};
	})))();
}
//#endregion
export { init_writing_mode_control as n, WritingModeControl as t };
