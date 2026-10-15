import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_create_interpolate_element, t as create_interpolate_element_default } from "./create-interpolate-element-CUfbmqGd.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { i as _x, n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-BkfR1Mwg.js";
import { n as init_component, t as component_default } from "./component-C_SA79G6.js";
import { n as init_custom_select_control, t as custom_select_control_default } from "./custom-select-control-DI3o8jYT.js";
import { n as dateI18n, o as humanTimeDiff, s as init_build_module$1 } from "./build-module-DFGiXAdt.js";
import { n as init_external_link, t as external_link_default } from "./external-link-u93s4qVG.js";
import { n as toggle_control_default, t as init_toggle_control } from "./toggle-control-qNG9xs9Z.js";
import { n as text_control_default, t as init_text_control } from "./text-control-BnD1Lg9D.js";
//#region ../packages/block-editor/src/components/date-format-picker/index.jsx
/**
* The `DateFormatPicker` component renders controls that let the user choose a
* _date format_. That is, how they want their dates to be formatted.
*
* @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/date-format-picker/README.md
*
* @param {Object}      props
* @param {string|null} props.format        The selected date format. If `null`, _Default_ is selected.
* @param {string}      props.defaultFormat The date format that will be used if the user selects 'Default'.
* @param {Function}    props.onChange      Called when a selection is made. If `null`, _Default_ is selected.
*/
function DateFormatPicker({ format, defaultFormat, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
		as: "fieldset",
		spacing: 4,
		className: "block-editor-date-format-picker",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 29
				}, this),
				children: __("Date format")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toggle_control_default, {
				label: __("Default format"),
				help: `${__("Example:")}  ${dateI18n(defaultFormat, exampleDate)}`,
				checked: !format,
				onChange: (checked) => onChange(checked ? null : defaultFormat)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 4
			}, this),
			format && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NonDefaultControls, {
				format,
				onChange
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 3
	}, this);
}
function NonDefaultControls({ format, onChange }) {
	const suggestedOptions = [...[.../* @__PURE__ */ new Set([
		"Y-m-d",
		_x("n/j/Y", "short date format"),
		_x("n/j/Y g:i A", "short date format with time"),
		_x("M j, Y", "medium date format"),
		_x("M j, Y g:i A", "medium date format with time"),
		_x("F j, Y", "long date format"),
		_x("M j", "short date format without the year")
	])].map((suggestedFormat, index) => ({
		key: `suggested-${index}`,
		name: dateI18n(suggestedFormat, exampleDate),
		format: suggestedFormat
	})), {
		key: "human-diff",
		name: humanTimeDiff(exampleDate),
		format: "human-diff"
	}];
	const customOption = {
		key: "custom",
		name: __("Custom"),
		className: "block-editor-date-format-picker__custom-format-select-control__custom-option",
		hint: __("Enter your own date format")
	};
	const [isCustom, setIsCustom] = (0, import_react.useState)(() => !!format && !suggestedOptions.some((option) => option.format === format));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(custom_select_control_default, {
		label: __("Choose a format"),
		options: [...suggestedOptions, customOption],
		value: isCustom ? customOption : suggestedOptions.find((option) => option.format === format) ?? customOption,
		onChange: ({ selectedItem }) => {
			if (selectedItem === customOption) setIsCustom(true);
			else {
				setIsCustom(false);
				onChange(selectedItem.format);
			}
		}
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 122,
		columnNumber: 4
	}, this), isCustom && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(text_control_default, {
		label: __("Custom format"),
		hideLabelFromVision: true,
		help: create_interpolate_element_default(__("Enter a date or time <Link>format string</Link>."), { Link: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(external_link_default, { href: __("https://wordpress.org/documentation/article/customize-date-and-time-format/") }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 151,
			columnNumber: 9
		}, this) }),
		value: format,
		onChange: (value) => onChange(value)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 142,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 121,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, exampleDate;
function init_date_format_picker() {
	return (init_date_format_picker = __esmMin((() => {
		init_build_module();
		init_build_module$1();
		init_react(), init_create_interpolate_element();
		init_text_control(), init_external_link(), init_toggle_control(), init_component(), init_custom_select_control();
		init_visually_hidden();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/date-format-picker/index.jsx";
		exampleDate = /* @__PURE__ */ new Date();
		exampleDate.setDate(20);
		exampleDate.setMonth(exampleDate.getMonth() - 3);
		if (exampleDate.getMonth() === 4) exampleDate.setMonth(3);
		DateFormatPicker.__docgenInfo = {
			"description": "The `DateFormatPicker` component renders controls that let the user choose a\n_date format_. That is, how they want their dates to be formatted.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/date-format-picker/README.md\n\n@param {Object}      props\n@param {string|null} props.format        The selected date format. If `null`, _Default_ is selected.\n@param {string}      props.defaultFormat The date format that will be used if the user selects 'Default'.\n@param {Function}    props.onChange      Called when a selection is made. If `null`, _Default_ is selected.",
			"methods": [],
			"displayName": "DateFormatPicker"
		};
	})))();
}
//#endregion
export { init_date_format_picker as n, DateFormatPicker as t };
