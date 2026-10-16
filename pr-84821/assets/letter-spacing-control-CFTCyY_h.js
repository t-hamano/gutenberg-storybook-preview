import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { i as init_utils, n as unit_control_default, o as useCustomUnits, t as init_unit_control } from "./unit-control-Ch49FAD3.js";
import { n as useSettings, t as init_use_settings } from "./use-settings-DBuseju1.js";
//#region ../packages/block-editor/src/components/letter-spacing-control/index.jsx
/**
* Control for letter-spacing.
*
* @param {Object}                  props                         Component props.
* @param {boolean}                 [props.__next40pxDefaultSize] Start opting into the larger default height that will become the default size in a future version.
* @param {string}                  props.value                   Currently selected letter-spacing.
* @param {Function}                props.onChange                Handles change in letter-spacing selection.
* @param {string|number|undefined} props.__unstableInputWidth    Input width to pass through to inner UnitControl. Should be a valid CSS value.
*
* @return {Element} Letter-spacing control.
*/
function LetterSpacingControl({ value, onChange, __unstableInputWidth = "60px", ...otherProps }) {
	const [availableUnits] = useSettings("spacing.units");
	const units = useCustomUnits({
		availableUnits: availableUnits || [
			"px",
			"em",
			"rem"
		],
		defaultValues: {
			px: 2,
			em: .2,
			rem: .2
		}
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(unit_control_default, {
		...otherProps,
		label: __("Letter spacing"),
		value,
		__unstableInputWidth,
		units,
		onChange
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_letter_spacing_control() {
	return (init_letter_spacing_control = __esmMin((() => {
		init_unit_control(), init_utils();
		init_build_module();
		init_use_settings();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/index.jsx";
		LetterSpacingControl.__docgenInfo = {
			"description": "Control for letter-spacing.\n\n@param {Object}                  props                         Component props.\n@param {boolean}                 [props.__next40pxDefaultSize] Start opting into the larger default height that will become the default size in a future version.\n@param {string}                  props.value                   Currently selected letter-spacing.\n@param {Function}                props.onChange                Handles change in letter-spacing selection.\n@param {string|number|undefined} props.__unstableInputWidth    Input width to pass through to inner UnitControl. Should be a valid CSS value.\n\n@return {Element} Letter-spacing control.",
			"methods": [],
			"displayName": "LetterSpacingControl",
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
export { init_letter_spacing_control as n, LetterSpacingControl as t };
