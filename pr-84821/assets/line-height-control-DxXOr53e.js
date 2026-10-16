import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as number_control_default, t as init_number_control } from "./number-control-DH-M3uwi.js";
//#region ../packages/block-editor/src/components/line-height-control/utils.js
/**
* Determines if the lineHeight attribute has been properly defined.
*
* @param {any} lineHeight The value to check.
*
* @return {boolean} Whether the lineHeight attribute is valid.
*/
function isLineHeightDefined(lineHeight) {
	return lineHeight !== void 0 && lineHeight !== "";
}
var BASE_DEFAULT_VALUE, STEP;
function init_utils() {
	return (init_utils = __esmMin((() => {
		BASE_DEFAULT_VALUE = 1.5;
		STEP = .01;
	})))();
}
//#endregion
//#region ../packages/block-editor/src/components/line-height-control/index.jsx
var import_jsx_dev_runtime, _jsxFileName, LineHeightControl;
function init_line_height_control() {
	return (init_line_height_control = __esmMin((() => {
		init_build_module();
		init_number_control();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/index.jsx";
		LineHeightControl = ({ __next40pxDefaultSize: _next40pxDefaultSize, value: lineHeight, onChange, __unstableInputWidth = "60px", ...otherProps }) => {
			const isDefined = isLineHeightDefined(lineHeight);
			const adjustNextValue = (nextValue, wasTypedOrPasted) => {
				if (isDefined) return nextValue;
				/**
				* The following logic handles the initial spin up/down action
				* (from an undefined value state) so that the next values are better suited for
				* line-height rendering. For example, the first spin up should immediately
				* go to 1.6, rather than the normally expected 0.1.
				*
				* Spin up/down actions can be triggered by keydowns of the up/down arrow keys,
				* dragging the input or by clicking the spin buttons.
				*/
				const spin = STEP * 10;
				switch (`${nextValue}`) {
					case `${spin}`: return BASE_DEFAULT_VALUE + spin;
					case "0":
						if (wasTypedOrPasted) return nextValue;
						return BASE_DEFAULT_VALUE - spin;
					case "": return BASE_DEFAULT_VALUE;
					default: return nextValue;
				}
			};
			const stateReducer = (state, action) => {
				const wasTypedOrPasted = ["insertText", "insertFromPaste"].includes(action.payload.event.nativeEvent?.inputType);
				const value = adjustNextValue(state.value, wasTypedOrPasted);
				return {
					...state,
					value
				};
			};
			const value = isDefined ? lineHeight : "";
			const handleOnChange = (nextValue, { event }) => {
				if (nextValue === "") {
					onChange();
					return;
				}
				if (event.type === "click") {
					onChange(adjustNextValue(`${nextValue}`, false));
					return;
				}
				onChange(`${nextValue}`);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "block-editor-line-height-control",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(number_control_default, {
					placeholder: BASE_DEFAULT_VALUE,
					...otherProps,
					__unstableInputWidth,
					__unstableStateReducer: stateReducer,
					onChange: handleOnChange,
					label: __("Line height"),
					step: STEP,
					spinFactor: 10,
					value,
					min: 0,
					spinControls: "custom"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 3
			}, void 0);
		};
		LineHeightControl.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "LineHeightControl",
			"props": { "__unstableInputWidth": {
				"defaultValue": {
					"value": "'60px'",
					"computed": false
				},
				"required": false
			} }
		};
	})))();
}
//#endregion
export { init_line_height_control as n, LineHeightControl as t };
