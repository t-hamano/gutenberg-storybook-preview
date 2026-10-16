import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_create_interpolate_element, t as create_interpolate_element_default } from "./create-interpolate-element-CUfbmqGd.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_icon, t as Icon } from "./icon-5WS0jz-X.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { r as arrow_down_default, t as arrow_up_default } from "./arrow-up-DmV8po7a.js";
import { t as envelope_default } from "./envelope-CWNXsbA5.js";
import { n as link_default } from "./link-B6xih8Jw.js";
import { n as mobile_default } from "./mobile-BjKAag-R.js";
import { n as seen_default } from "./seen-BqfaQMmn.js";
import { n as unseen_default } from "./unseen-DUXOlgts.js";
import { H as TZDate, M as startOfYear, N as init_isValid, P as isValid, V as init_tz, c as init_format, j as init_startOfYear, s as format$5 } from "./DayPicker-DXwfQZAN.js";
import { a as init_isSameMonth, b as init_endOfMonth, m as startOfMonth, o as isSameMonth, p as init_startOfMonth, y as endOfMonth } from "./setYear-BreLG7HH.js";
import { C as areIntervalsOverlapping, S as parse, _ as Calendar, a as combobox_control_default, b as parseISO, c as init_checkbox_control$1, d as ValidatedTextareaControl, f as init_validated_textarea_control, g as init_range_calendar, h as RangeCalendar, i as init_form_token_field$1, l as color_indicator_default, m as init_validated_input_control, n as radio_control_default, o as init_combobox_control$1, p as ValidatedInputControl, r as form_token_field_default, s as checkbox_control_default, t as init_radio_control$1, u as init_color_indicator, v as init_calendar, w as init_areIntervalsOverlapping, x as init_parse, y as init_parseISO } from "./radio-control-CdZja_ND.js";
import { a as init_subMonths, c as subDays, i as subWeeks, n as subYears, o as subMonths, r as init_subWeeks, s as init_subDays, t as init_subYears } from "./subYears-B5EmbrRG.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { n as init_input_layout, t as InputLayout } from "./input-layout-DD7wWo-p.js";
import { i as init_validity_indicator, n as init_control_with_error, r as ValidityIndicator, t as ControlWithError } from "./control-with-error-IxvCj9CM.js";
import { o as init_colord, r as A } from "./names-C15GzMmJ.js";
import { n as init_component, t as component_default } from "./component-DKizmr6G.js";
import { n as init_input_control, r as input_control_default } from "./input-control-BabNp7Sg.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as number_control_default, t as init_number_control$1 } from "./number-control-DH-M3uwi.js";
import { i as init_component$1, r as component_default$1 } from "./component-v_QVsmRa.js";
import { n as init_component$2, t as component_default$2 } from "./component-BfsEyxGL.js";
import { n as init_dropdown, t as dropdown_default } from "./dropdown-CT5qcp8z.js";
import { i as init_legacy_adapter, n as init_dropdown_content_wrapper, o as init_select_control$1, r as LegacyAdapter, s as select_control_default, t as dropdown_content_wrapper_default } from "./dropdown-content-wrapper-BRUuct3E.js";
import { n as spinner_default, t as init_spinner } from "./spinner-DHB8cpoh.js";
import { a as getSettings, i as getDate, n as dateI18n, s as init_build_module$2 } from "./build-module-DFGiXAdt.js";
import { n as toggle_control_default, t as init_toggle_control$1 } from "./toggle-control-B4X9HIoI.js";
import { r as init_build_module$3 } from "./library.story-CFsmdbdz.js";
//#region ../packages/dataviews/src/components/validated-form-controls/checkbox-control.tsx
var import_jsx_dev_runtime$34, _jsxFileName$34, UnforwardedValidatedCheckboxControl, ValidatedCheckboxControl;
function init_checkbox_control() {
	return (init_checkbox_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_checkbox_control$1();
		init_control_with_error();
		import_jsx_dev_runtime$34 = require_jsx_dev_runtime();
		_jsxFileName$34 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/checkbox-control.tsx";
		UnforwardedValidatedCheckboxControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$34.jsxDEV)(ControlWithError, {
				className: "dataviews-validated-control",
				required,
				markWhenOptional,
				ref: mergedRefs,
				customValidity,
				getValidityTarget: () => validityTargetRef.current?.querySelector("input[type=\"checkbox\"]"),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$34.jsxDEV)(checkbox_control_default, { ...restProps }, void 0, false, {
					fileName: _jsxFileName$34,
					lineNumber: 40,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$34,
				lineNumber: 28,
				columnNumber: 3
			}, void 0);
		};
		ValidatedCheckboxControl = (0, import_react.forwardRef)(UnforwardedValidatedCheckboxControl);
		ValidatedCheckboxControl.displayName = "ValidatedCheckboxControl";
		try {
			ValidatedCheckboxControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedCheckboxControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/checkbox-control.tsx",
				"methods": [],
				"props": {
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/checkbox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the checkbox should be disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/checkbox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the checked state (boolean) as input.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: boolean) => void" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/checkbox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "A label for the input field, that appears at the side of the checkbox.\nThe prop will be rendered as content a label element. If no prop is\npassed an empty label is rendered.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/checkbox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If checked is true the checkbox will be checked. If checked is false the\ncheckbox will be unchecked. If no value is passed the checkbox will be\nunchecked.",
						"name": "checked",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"indeterminate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/checkbox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If indeterminate is true the state of the checkbox will be indeterminate.",
						"name": "indeterminate",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"heading": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/checkbox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "@deprecated",
						"name": "heading",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/validated-form-controls/combobox-control.tsx
var import_jsx_dev_runtime$33, _jsxFileName$33, UnforwardedValidatedComboboxControl, ValidatedComboboxControl;
function init_combobox_control() {
	return (init_combobox_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_combobox_control$1();
		init_control_with_error();
		import_jsx_dev_runtime$33 = require_jsx_dev_runtime();
		_jsxFileName$33 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/combobox-control.tsx";
		UnforwardedValidatedComboboxControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			(0, import_react.useEffect)(() => {
				const input = validityTargetRef.current?.querySelector("input[role=\"combobox\"]");
				if (input) input.required = required ?? false;
			}, [required]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$33.jsxDEV)(ControlWithError, {
				className: "dataviews-validated-control",
				required,
				markWhenOptional,
				ref: mergedRefs,
				customValidity,
				getValidityTarget: () => validityTargetRef.current?.querySelector("input[role=\"combobox\"]"),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$33.jsxDEV)(combobox_control_default, { ...restProps }, void 0, false, {
					fileName: _jsxFileName$33,
					lineNumber: 56,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$33,
				lineNumber: 44,
				columnNumber: 3
			}, void 0);
		};
		ValidatedComboboxControl = (0, import_react.forwardRef)(UnforwardedValidatedComboboxControl);
		ValidatedComboboxControl.displayName = "ValidatedComboboxControl";
		try {
			ValidatedComboboxControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedComboboxControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/combobox-control.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Function called with the selected value changes.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: ComboboxControlValue) => void)" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the control.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "ComboboxControlValue" }
					},
					"placeholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If passed, the combobox input will show a placeholder string if no values are present.",
						"name": "placeholder",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isLoading": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a spinner (and hide the suggestions dropdown) while data\nabout the matching suggestions (ie the `options` prop) is loading",
						"name": "isLoading",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalRenderItem": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Custom renderer invoked for each option in the suggestion list.\nThe render prop receives as its argument an object containing, under the `item` key,\nthe single option's data (directly from the array of data passed to the `options` prop).",
						"name": "__experimentalRenderItem",
						"required": false,
						"tags": {},
						"type": { "name": "((args: { item: ComboboxControlOption; }) => ReactNode)" }
					},
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"allowReset": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a reset button to clear the input.",
						"name": "allowReset",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"expandOnFocus": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Automatically expand the dropdown when the control is focused.\nIf the control is clicked, the dropdown will expand regardless of this prop.",
						"name": "expandOnFocus",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"messages": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Customizable UI messages.",
						"name": "messages",
						"required": false,
						"tags": {},
						"type": { "name": "{ selected: string; }" }
					},
					"onFilterValueChange": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Function called when the control's search input value changes. The argument contains the next input value.",
						"name": "onFilterValueChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: string) => void)" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/combobox-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The options that can be chosen from.",
						"name": "options",
						"required": true,
						"tags": {},
						"type": { "name": "ComboboxControlOption[]" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is required.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/validated-form-controls/form-token-field.tsx
var import_jsx_dev_runtime$32, _jsxFileName$32, UnforwardedValidatedFormTokenField, ValidatedFormTokenField;
function init_form_token_field() {
	return (init_form_token_field = __esmMin((() => {
		init_react();
		init_form_token_field$1();
		init_control_with_error();
		import_jsx_dev_runtime$32 = require_jsx_dev_runtime();
		_jsxFileName$32 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/form-token-field.tsx";
		UnforwardedValidatedFormTokenField = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$32.jsxDEV)("div", {
				className: "dataviews-validated-control__wrapper-with-error-delegate",
				ref: forwardedRef,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$32.jsxDEV)(ControlWithError, {
					className: "dataviews-validated-control",
					required,
					markWhenOptional,
					customValidity,
					getValidityTarget: () => validityTargetRef.current,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$32.jsxDEV)(form_token_field_default, { ...restProps }, void 0, false, {
						fileName: _jsxFileName$32,
						lineNumber: 36,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$32,
					lineNumber: 29,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$32.jsxDEV)("input", {
					className: "dataviews-validated-control__error-delegate",
					type: "text",
					ref: validityTargetRef,
					required,
					value: restProps.value && restProps.value.length > 0 ? "hasvalue" : "",
					tabIndex: -1,
					onChange: () => {},
					onFocus: (e) => {
						e.target.previousElementSibling?.querySelector("input[type=\"text\"]")?.focus();
					}
				}, void 0, false, {
					fileName: _jsxFileName$32,
					lineNumber: 38,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$32,
				lineNumber: 25,
				columnNumber: 3
			}, void 0);
		};
		ValidatedFormTokenField = (0, import_react.forwardRef)(UnforwardedValidatedFormTokenField);
		ValidatedFormTokenField.displayName = "ValidatedFormTokenField";
		try {
			ValidatedFormTokenField.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedFormTokenField",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/form-token-field.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"suggestions": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "An array of strings to present to the user as suggested tokens.",
						"name": "suggestions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"maxSuggestions": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "The maximum number of suggestions to display at a time.",
						"name": "maxSuggestions",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "An array of strings or objects to display as tokens in the field.\nIf objects are present in the array, they **must** have a property of `value`.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(string | TokenItem)[]" }
					},
					"displayTransform": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call to transform tokens for display.\n(In the editor, this is needed to decode HTML entities embedded in tags\n- otherwise entities like `&` in tag names are double-encoded like `&amp;`,\nonce by the REST API and once by React).",
						"name": "displayTransform",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((token: string) => string)" }
					},
					"saveTransform": {
						"defaultValue": { "value": "( token: string ) => token.trim()" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call to transform tokens for saving. The default is to trim the token value.\nThis function is also applied when matching suggestions against the current value\nso that matching works correctly with leading or trailing spaces. (In the editor,\nthis is needed to remove leading and trailing spaces from tag names, like wp-admin does.\nOtherwise the REST API won't save them.)",
						"name": "saveTransform",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((token: string) => string)" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call when the tokens have changed. An array of new tokens is passed to the callback.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((tokens: (string | TokenItem)[]) => void)" }
					},
					"onInputChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call when the users types in the input field. It can be used to trigger autocomplete requests.",
						"name": "onInputChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((input: string) => void)" }
					},
					"onFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Function to call when the TokenField has been focused on. The event is passed to the callback. Useful for analytics.",
						"name": "onFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((event: FocusEvent<Element, Element>) => void)" }
					},
					"isBorderless": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "When true, renders tokens as without a background.",
						"name": "isBorderless",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"maxLength": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If passed, `TokenField` will disable ability to add new tokens once number of tokens is greater than or equal to `maxLength`.",
						"name": "maxLength",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "When true, tokens are not able to be added or removed.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"placeholder": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If passed, the `TokenField` input will show a placeholder string if no value tokens are present.",
						"name": "placeholder",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tokenizeOnSpace": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If true, will add a token when `TokenField` is focused and `space` is pressed.",
						"name": "tokenizeOnSpace",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"messages": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Allows customizing the messages presented by screen readers in different occasions:\n\n-   `added`: The user added a new token.\n-   `removed`: The user removed an existing token.\n-   `remove` : The user focused the button to remove the token.\n-   `__experimentalInvalid`: The user tried to add a token that didn't pass the validation.",
						"name": "messages",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Messages" }
					},
					"__experimentalExpandOnFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If true, the suggestions list will be always expanded when the input field has the focus.",
						"name": "__experimentalExpandOnFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalValidateInput": {
						"defaultValue": { "value": "() => true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If passed, all introduced values will be validated before being added as tokens.",
						"name": "__experimentalValidateInput",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((token: string) => boolean)" }
					},
					"__experimentalShowHowTo": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Use the `help` prop instead. The `help` prop now defaults to the previous\nhow-to text; if you were passing `__experimentalShowHowTo={ false }` to\nhide it, pass an empty string to `help` instead.\n@deprecated Use the `help` prop instead.\n@ignore",
						"name": "__experimentalShowHowTo",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalAutoSelectFirstMatch": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If true, the select the first matching suggestion when the user presses\nthe Enter key (or space when tokenizeOnSpace is true).",
						"name": "__experimentalAutoSelectFirstMatch",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalRenderItem": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Custom renderer for suggestions.",
						"name": "__experimentalRenderItem",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((args: { item: string; }) => ReactNode)" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WP 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"tokenizeOnBlur": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "If true, add any incompleteTokenValue as a new token when the field loses focus.",
						"name": "tokenizeOnBlur",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An\nelement containing the description will be programmatically associated to\nthe `FormTokenField` via `aria-describedby`.\n\nDefaults to a how-to message (e.g. _Separate with commas or the Enter key._);\npass an empty string to hide it.",
						"name": "help",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-token-field/types.d.ts",
							"name": "FormTokenFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is required.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/validated-form-controls/number-control.tsx
var import_jsx_dev_runtime$31, _jsxFileName$31, UnforwardedValidatedNumberControl, ValidatedNumberControl;
function init_number_control() {
	return (init_number_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_number_control$1();
		init_control_with_error();
		import_jsx_dev_runtime$31 = require_jsx_dev_runtime();
		_jsxFileName$31 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/number-control.tsx";
		UnforwardedValidatedNumberControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$31.jsxDEV)(ControlWithError, {
				className: "dataviews-validated-control",
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$31.jsxDEV)(number_control_default, {
					ref: mergedRefs,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName$31,
					lineNumber: 34,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$31,
				lineNumber: 27,
				columnNumber: 3
			}, void 0);
		};
		ValidatedNumberControl = (0, import_react.forwardRef)(UnforwardedValidatedNumberControl);
		ValidatedNumberControl.displayName = "ValidatedNumberControl";
		try {
			ValidatedNumberControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedNumberControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/number-control.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "type",
						"required": false,
						"tags": {},
						"type": { "name": "HTMLInputTypeAttribute" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"max": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "max",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"min": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "min",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "A function that receives the value of the input.",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "InputChangeCallback<{}>" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"step": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "step",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is required.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						}],
						"description": "@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					},
					"isDragEnabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isDragEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableInputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"dragDirection": {
						"defaultValue": { "value": "'n'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "Determines the drag axis.",
						"name": "dragDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "DragDirection",
							"value": [
								{ "value": "\"s\"" },
								{ "value": "\"n\"" },
								{ "value": "\"e\"" },
								{ "value": "\"w\"" }
							]
						}
					},
					"dragThreshold": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",
						"name": "dragThreshold",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isPressEnterToChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",
						"name": "isPressEnterToChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onValidate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onValidate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void)" }
					},
					"__unstableStateReducer": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						}],
						"description": "",
						"name": "__unstableStateReducer",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "StateReducer" }
					},
					"isShiftStepEnabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isShiftStepEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shiftStep": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "shiftStep",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"hideHTMLArrows": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hideHTMLArrows",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"spinControls": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "spinControls",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"custom\" | \"native\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"custom\"" },
								{ "value": "\"native\"" }
							]
						}
					},
					"spinFactor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/number-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "spinFactor",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/validated-form-controls/radio-control.tsx
var import_jsx_dev_runtime$30, _jsxFileName$30, UnforwardedValidatedRadioControl, ValidatedRadioControl;
function init_radio_control() {
	return (init_radio_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_radio_control$1();
		init_control_with_error();
		import_jsx_dev_runtime$30 = require_jsx_dev_runtime();
		_jsxFileName$30 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/radio-control.tsx";
		UnforwardedValidatedRadioControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$30.jsxDEV)(ControlWithError, {
				className: "dataviews-validated-control",
				required,
				markWhenOptional,
				ref: mergedRefs,
				customValidity,
				getValidityTarget: () => validityTargetRef.current?.querySelector("input[type=\"radio\"]"),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$30.jsxDEV)(radio_control_default, { ...restProps }, void 0, false, {
					fileName: _jsxFileName$30,
					lineNumber: 40,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$30,
				lineNumber: 27,
				columnNumber: 3
			}, void 0);
		};
		ValidatedRadioControl = (0, import_react.forwardRef)(UnforwardedValidatedRadioControl);
		ValidatedRadioControl.displayName = "ValidatedRadioControl";
		try {
			ValidatedRadioControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedRadioControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/radio-control.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/radio-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the radio group should be disabled.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/radio-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the value of the new option that is being\nselected as input.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string) => void" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/radio-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of objects containing the value and label of the options.",
						"name": "options",
						"required": false,
						"tags": {},
						"type": { "name": "{ label: string; value: string; description?: string; disabled?: boolean; }[] | undefined" }
					},
					"selected": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/radio-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value property of the currently selected option.",
						"name": "selected",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/validated-form-controls/select-control.tsx
var import_jsx_dev_runtime$29, _jsxFileName$29, UnforwardedValidatedSelectControl, ValidatedSelectControl;
function init_select_control() {
	return (init_select_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_select_control$1();
		init_control_with_error();
		import_jsx_dev_runtime$29 = require_jsx_dev_runtime();
		_jsxFileName$29 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/select-control.tsx";
		UnforwardedValidatedSelectControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$29.jsxDEV)(ControlWithError, {
				className: "dataviews-validated-control",
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$29.jsxDEV)(select_control_default, {
					ref: mergedRefs,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName$29,
					lineNumber: 40,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$29,
				lineNumber: 33,
				columnNumber: 3
			}, void 0);
		};
		ValidatedSelectControl = (0, import_react.forwardRef)(UnforwardedValidatedSelectControl);
		ValidatedSelectControl.displayName = "ValidatedSelectControl";
		try {
			ValidatedSelectControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedSelectControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/select-control.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Size",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/select-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/select-control.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string | string[]) => void" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"multiple": {
						"defaultValue": { "value": "false\nfalse" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/select-control/types.d.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/select-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",
						"name": "multiple",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/select-control.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | string[]" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/select-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"variant": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/select-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "The style variant of the control.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"minimal\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"minimal\"" }]
						}
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",
						"name": "suffix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/input-control/types.d.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "LabelPosition",
							"value": [
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"side\"" },
								{ "value": "\"edge\"" }
							]
						}
					},
					"__next36pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/select-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"options": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/select-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of option property objects to be rendered,\neach with a `label` and `value` property, as well as any other\n`<option>` attributes.",
						"name": "options",
						"required": false,
						"tags": {},
						"type": { "name": "readonly ({ label: string; value: string; } & Omit<OptionHTMLAttributes<HTMLOptionElement>, \"label\" | \"value\">)[]" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/validated-form-controls/toggle-control.tsx
var import_jsx_dev_runtime$28, _jsxFileName$28, UnforwardedValidatedToggleControl, ValidatedToggleControl;
function init_toggle_control() {
	return (init_toggle_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_toggle_control$1();
		init_control_with_error();
		import_jsx_dev_runtime$28 = require_jsx_dev_runtime();
		_jsxFileName$28 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/toggle-control.tsx";
		UnforwardedValidatedToggleControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$28.jsxDEV)(ControlWithError, {
				className: "dataviews-validated-control",
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$28.jsxDEV)(toggle_control_default, {
					ref: mergedRefs,
					required,
					...restProps
				}, void 0, false, {
					fileName: _jsxFileName$28,
					lineNumber: 36,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$28,
				lineNumber: 29,
				columnNumber: 3
			}, void 0);
		};
		ValidatedToggleControl = (0, import_react.forwardRef)(UnforwardedValidatedToggleControl);
		ValidatedToggleControl.displayName = "ValidatedToggleControl";
		try {
			ValidatedToggleControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedToggleControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/toggle-control.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: boolean) => void" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-control/index.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | ((checked: boolean) => ReactNode)" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-toggle/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If disabled is true the toggle will be disabled and apply the appropriate\nstyles.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"checked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/form-toggle/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "If checked is true the toggle will be checked. If checked is false the\ntoggle will be unchecked. If no value is passed the toggle will be\nunchecked.",
						"name": "checked",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/validated-form-controls/toggle-group-control.tsx
var import_jsx_dev_runtime$27, _jsxFileName$27, UnforwardedValidatedToggleGroupControl, ValidatedToggleGroupControl;
function init_toggle_group_control() {
	return (init_toggle_group_control = __esmMin((() => {
		init_react();
		init_component$1();
		init_control_with_error();
		import_jsx_dev_runtime$27 = require_jsx_dev_runtime();
		_jsxFileName$27 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/toggle-group-control.tsx";
		UnforwardedValidatedToggleGroupControl = ({ required, customValidity, markWhenOptional, ...restProps }, forwardedRef) => {
			const validityTargetRef = (0, import_react.useRef)(null);
			const nameAttr = (0, import_react.useId)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$27.jsxDEV)("div", {
				className: "dataviews-validated-control__wrapper-with-error-delegate",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$27.jsxDEV)(ControlWithError, {
					className: "dataviews-validated-control",
					required,
					markWhenOptional,
					customValidity,
					getValidityTarget: () => validityTargetRef.current,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$27.jsxDEV)(component_default$1, {
						ref: forwardedRef,
						...restProps
					}, void 0, false, {
						fileName: _jsxFileName$27,
						lineNumber: 38,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$27,
					lineNumber: 31,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$27.jsxDEV)("input", {
					className: "dataviews-validated-control__error-delegate",
					type: "radio",
					ref: validityTargetRef,
					required,
					checked: restProps.value !== void 0,
					tabIndex: -1,
					name: nameAttr,
					onChange: () => {},
					onFocus: (e) => {
						e.target.previousElementSibling?.querySelector("[data-active-item=\"true\"]")?.focus();
					}
				}, void 0, false, {
					fileName: _jsxFileName$27,
					lineNumber: 40,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$27,
				lineNumber: 30,
				columnNumber: 3
			}, void 0);
		};
		ValidatedToggleGroupControl = (0, import_react.forwardRef)(UnforwardedValidatedToggleGroupControl);
		ValidatedToggleGroupControl.displayName = "ValidatedToggleGroupControl";
		try {
			ValidatedToggleGroupControl.__docgenInfo = {
				"description": "",
				"displayName": "ValidatedToggleGroupControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/toggle-group-control.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"__unstable-large\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"__unstable-large\"" }]
						}
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: string | number) => void)" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control is required.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/base-control/types.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ `required`, instead of the inverse.",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"customValidity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/validated-form-controls/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a custom message based on the validation status.\n\n- When `type` is `invalid`, the message will be applied to the underlying element using the\nnative [`setCustomValidity()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity).\nThis means the custom message will be prioritized over any existing validity messages\ntriggered by HTML attribute-based validation.\n- When `type` is `validating` or `valid`, the custom validity message of the underlying element\nwill be cleared. If there are no remaining validity messages triggered by HTML attribute-based validation,\nthe message will be presented as a status indicator rather than an error. These indicators are intended\nfor asynchronous validation calls that may take more than 1 second to complete.\nOtherwise, custom errors can simply be cleared by setting the `customValidity` prop to `undefined`.",
						"name": "customValidity",
						"required": false,
						"tags": {},
						"type": { "name": "{ type: \"invalid\" | \"validating\" | \"valid\"; message: string; }" }
					},
					"isBlock": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isBlock",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isAdaptiveWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isAdaptiveWidth",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDeselectable": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/build-types/toggle-group-control/toggle-group-control/component.d.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isDeselectable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/utils/get-custom-validity.ts
function getCustomValidity(isValid, validity) {
	let customValidity;
	if (isValid?.required && validity?.required) customValidity = validity.required.message ? {
		type: validity.required.type,
		message: validity.required.message
	} : void 0;
	else if (isValid?.pattern && validity?.pattern) customValidity = validity.pattern;
	else if (isValid?.min && validity?.min) customValidity = validity.min;
	else if (isValid?.max && validity?.max) customValidity = validity.max;
	else if (isValid?.minLength && validity?.minLength) customValidity = validity.minLength;
	else if (isValid?.maxLength && validity?.maxLength) customValidity = validity.maxLength;
	else if (isValid?.elements && validity?.elements) customValidity = validity.elements;
	else if (validity?.custom) customValidity = validity.custom;
	return customValidity;
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/checkbox.tsx
function Checkbox({ field, onChange, data, hideLabelFromVision, markWhenOptional, validity }) {
	const { getValue, setValue, label, description, isValid } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const onChangeControl = (0, import_react.useCallback)(() => {
		onChange(setValue({
			item: data,
			value: !getValue({ item: data })
		}));
	}, [
		data,
		getValue,
		onChange,
		setValue
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$26.jsxDEV)(ValidatedCheckboxControl, {
		required: !!field.isValid?.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		hidden: hideLabelFromVision,
		label,
		help: description,
		checked: getValue({ item: data }),
		onChange: onChangeControl,
		disabled
	}, void 0, false, {
		fileName: _jsxFileName$26,
		lineNumber: 24,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$26, _jsxFileName$26;
function init_checkbox() {
	return (init_checkbox = __esmMin((() => {
		init_react();
		init_checkbox_control();
		import_jsx_dev_runtime$26 = require_jsx_dev_runtime();
		_jsxFileName$26 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/checkbox.tsx";
		try {
			Checkbox.__docgenInfo = {
				"description": "",
				"displayName": "checkbox",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/checkbox.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/hooks/use-elements.ts
function useElements({ elements, getElements }) {
	const staticElements = Array.isArray(elements) && elements.length > 0 ? elements : EMPTY_ARRAY;
	const [records, setRecords] = (0, import_react.useState)(staticElements);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!getElements) {
			setRecords(staticElements);
			return;
		}
		let cancelled = false;
		setIsLoading(true);
		getElements().then((fetchedElements) => {
			if (!cancelled) {
				const dynamicElements = Array.isArray(fetchedElements) && fetchedElements.length > 0 ? fetchedElements : staticElements;
				setRecords(dynamicElements);
			}
		}).catch(() => {
			if (!cancelled) setRecords(staticElements);
		}).finally(() => {
			if (!cancelled) setIsLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [getElements, staticElements]);
	return {
		elements: records,
		isLoading
	};
}
var EMPTY_ARRAY;
function init_use_elements() {
	return (init_use_elements = __esmMin((() => {
		init_react();
		EMPTY_ARRAY = [];
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/combobox.tsx
function Combobox({ data, field, onChange, hideLabelFromVision, validity }) {
	const { label, description, placeholder, getValue, setValue, isValid } = field;
	const value = getValue({ item: data }) ?? "";
	const onChangeControl = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue ?? ""
	})), [
		data,
		onChange,
		setValue
	]);
	const { elements, isLoading } = useElements({
		elements: field.elements,
		getElements: field.getElements
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime$25.jsxDEV)(spinner_default, {}, void 0, false, {
		fileName: _jsxFileName$25,
		lineNumber: 31,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$25.jsxDEV)(ValidatedComboboxControl, {
		required: !!field.isValid?.required,
		customValidity: getCustomValidity(isValid, validity),
		label,
		value,
		help: description,
		placeholder,
		options: elements,
		onChange: onChangeControl,
		hideLabelFromVision,
		allowReset: true,
		expandOnFocus: true
	}, void 0, false, {
		fileName: _jsxFileName$25,
		lineNumber: 35,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$25, _jsxFileName$25;
function init_combobox() {
	return (init_combobox = __esmMin((() => {
		init_spinner();
		init_react();
		init_use_elements();
		init_combobox_control();
		import_jsx_dev_runtime$25 = require_jsx_dev_runtime();
		_jsxFileName$25 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/combobox.tsx";
		try {
			Combobox.__docgenInfo = {
				"description": "",
				"displayName": "combobox",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/combobox.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/constants.ts
var OPERATOR_IS_ANY, OPERATOR_IS_NONE, OPERATOR_IS_ALL, OPERATOR_IS_NOT_ALL, OPERATOR_BETWEEN, OPERATOR_IN_THE_PAST, OPERATOR_OVER, OPERATOR_IS_NOT, OPERATOR_LESS_THAN, OPERATOR_GREATER_THAN, OPERATOR_LESS_THAN_OR_EQUAL, OPERATOR_GREATER_THAN_OR_EQUAL, OPERATOR_BEFORE, OPERATOR_AFTER, OPERATOR_BEFORE_INC, OPERATOR_AFTER_INC, OPERATOR_CONTAINS, OPERATOR_NOT_CONTAINS, OPERATOR_STARTS_WITH, OPERATOR_NOT_ON, SORTING_DIRECTIONS, sortArrows, sortValues, sortLabels, sortIcons, LAYOUT_TABLE, LAYOUT_GRID, LAYOUT_LIST, LAYOUT_ACTIVITY, LAYOUT_PICKER_GRID, LAYOUT_PICKER_TABLE, LAYOUT_PICKER_ACTIVITY, MEDIA_ASPECT_RATIOS;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_build_module();
		init_build_module$3();
		OPERATOR_IS_ANY = "isAny";
		OPERATOR_IS_NONE = "isNone";
		OPERATOR_IS_ALL = "isAll";
		OPERATOR_IS_NOT_ALL = "isNotAll";
		OPERATOR_BETWEEN = "between";
		OPERATOR_IN_THE_PAST = "inThePast";
		OPERATOR_OVER = "over";
		OPERATOR_IS_NOT = "isNot";
		OPERATOR_LESS_THAN = "lessThan";
		OPERATOR_GREATER_THAN = "greaterThan";
		OPERATOR_LESS_THAN_OR_EQUAL = "lessThanOrEqual";
		OPERATOR_GREATER_THAN_OR_EQUAL = "greaterThanOrEqual";
		OPERATOR_BEFORE = "before";
		OPERATOR_AFTER = "after";
		OPERATOR_BEFORE_INC = "beforeInc";
		OPERATOR_AFTER_INC = "afterInc";
		OPERATOR_CONTAINS = "contains";
		OPERATOR_NOT_CONTAINS = "notContains";
		OPERATOR_STARTS_WITH = "startsWith";
		OPERATOR_NOT_ON = "notOn";
		SORTING_DIRECTIONS = ["asc", "desc"];
		sortArrows = {
			asc: "↑",
			desc: "↓"
		};
		sortValues = {
			asc: "ascending",
			desc: "descending"
		};
		sortLabels = {
			asc: __("Sort ascending"),
			desc: __("Sort descending")
		};
		sortIcons = {
			asc: arrow_up_default,
			desc: arrow_down_default
		};
		LAYOUT_TABLE = "table";
		LAYOUT_GRID = "grid";
		LAYOUT_LIST = "list";
		LAYOUT_ACTIVITY = "activity";
		LAYOUT_PICKER_GRID = "pickerGrid";
		LAYOUT_PICKER_TABLE = "pickerTable";
		LAYOUT_PICKER_ACTIVITY = "pickerActivity";
		MEDIA_ASPECT_RATIOS = [
			"1/1",
			"4/3",
			"3/4",
			"3/2",
			"2/3",
			"16/9",
			"9/16"
		];
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/utils/relative-date-control.tsx
function RelativeDateControl({ className, data, field, onChange, hideLabelFromVision, operator }) {
	const options = TIME_UNITS_OPTIONS[operator === "inThePast" ? "inThePast" : "over"];
	const { id, label, description, getValue, setValue } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const fieldValue = getValue({ item: data });
	const { value: relValue = "", unit = options[0].value } = fieldValue && typeof fieldValue === "object" ? fieldValue : {};
	const onChangeValue = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: {
			value: Number(newValue),
			unit
		}
	})), [
		onChange,
		setValue,
		data,
		unit
	]);
	const onChangeUnit = (0, import_react.useCallback)((newUnit) => onChange(setValue({
		item: data,
		value: {
			value: relValue,
			unit: newUnit
		}
	})), [
		onChange,
		setValue,
		data,
		relValue
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$24.jsxDEV)(base_control_default, {
		id,
		className: clsx(className, "dataviews-controls__relative-date"),
		label,
		hideLabelFromVision,
		help: description,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$24.jsxDEV)(Stack, {
			direction: "row",
			gap: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$24.jsxDEV)(number_control_default, {
				className: "dataviews-controls__relative-date-number",
				spinControls: "none",
				min: 1,
				step: 1,
				value: relValue,
				onChange: onChangeValue,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName$24,
				lineNumber: 87,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$24.jsxDEV)(select_control_default, {
				className: "dataviews-controls__relative-date-unit",
				label: __("Unit"),
				value: unit,
				options,
				onChange: onChangeUnit,
				hideLabelFromVision: true,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName$24,
				lineNumber: 96,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$24,
			lineNumber: 86,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$24,
		lineNumber: 79,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$24, _jsxFileName$24, TIME_UNITS_OPTIONS;
function init_relative_date_control() {
	return (init_relative_date_control = __esmMin((() => {
		init_clsx();
		init_base_control(), init_select_control$1(), init_number_control$1();
		init_react();
		init_build_module();
		init_stack();
		init_constants();
		import_jsx_dev_runtime$24 = require_jsx_dev_runtime();
		_jsxFileName$24 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/relative-date-control.tsx";
		TIME_UNITS_OPTIONS = {
			[OPERATOR_IN_THE_PAST]: [
				{
					value: "days",
					label: __("Days")
				},
				{
					value: "weeks",
					label: __("Weeks")
				},
				{
					value: "months",
					label: __("Months")
				},
				{
					value: "years",
					label: __("Years")
				}
			],
			[OPERATOR_OVER]: [
				{
					value: "days",
					label: __("Days ago")
				},
				{
					value: "weeks",
					label: __("Weeks ago")
				},
				{
					value: "months",
					label: __("Months ago")
				},
				{
					value: "years",
					label: __("Years ago")
				}
			]
		};
		try {
			RelativeDateControl.__docgenInfo = {
				"description": "",
				"displayName": "relativedatecontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/relative-date-control.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/relative-date-control.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/utils/to-calendar-date.ts
/**
* Expresses a date in the calendar's time zone, so that computing or
* comparing calendar months matches the month grid that the calendar
* displays.
*
* @param date     The date to express in the calendar's time zone.
* @param timeZone The calendar's IANA time zone or UTC offset. When empty, the
*                 date is returned unchanged, matching the calendar's own
*                 fallback to the browser time zone.
* @return The date to use for calendar month computations.
*/
function toCalendarDate(date, timeZone) {
	return timeZone ? new TZDate(date, timeZone) : date;
}
function init_to_calendar_date() {
	return (init_to_calendar_date = __esmMin((() => {
		init_tz();
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/utils/use-disabled-date-matchers.ts
function useDisabledDateMatchers(isValid, parseDateFn) {
	const minConstraint = typeof isValid.min?.constraint === "string" ? isValid.min.constraint : void 0;
	const maxConstraint = typeof isValid.max?.constraint === "string" ? isValid.max.constraint : void 0;
	return {
		minConstraint,
		maxConstraint,
		disabledMatchers: (0, import_react.useMemo)(() => {
			const matchers = [];
			if (minConstraint) {
				const minDate = parseDateFn(minConstraint);
				if (minDate) matchers.push({ before: minDate });
			}
			if (maxConstraint) {
				const maxDate = parseDateFn(maxConstraint);
				if (maxDate) matchers.push({ after: maxDate });
			}
			return matchers.length > 0 ? matchers : void 0;
		}, [
			minConstraint,
			maxConstraint,
			parseDateFn
		])
	};
}
function init_use_disabled_date_matchers() {
	return (init_use_disabled_date_matchers = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/utils/get-calendar-locale.ts
/**
* Turns a WordPress locale slug into a BCP 47 tag for the `Calendar` and
* `RangeCalendar` components' `locale` prop, which fall back to `en-US` for a
* tag they cannot resolve.
*
* Keeps only the language, script and region: WordPress variant suffixes are
* not always valid BCP 47 variants, and `pt_PT_ao90` would resolve to nothing.
*
* @param wpLocale WordPress locale slug, e.g. `getSettings().l10n.locale`.
*/
function getCalendarLocale(wpLocale) {
	const subtags = wpLocale?.trim().split(/[_-]/) ?? [];
	const language = subtags.shift()?.toLowerCase();
	if (!language) return;
	const normalized = [LANGUAGE_ALIASES[language] ?? language];
	for (const subtag of subtags) if (/^[a-z]{4}$/i.test(subtag) || /^([a-z]{2}|\d{3})$/i.test(subtag)) normalized.push(subtag);
	return normalized.join("-");
}
var LANGUAGE_ALIASES;
function init_get_calendar_locale() {
	return (init_get_calendar_locale = __esmMin((() => {
		LANGUAGE_ALIASES = {
			ary: "ar-MA",
			haz: "fa"
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/utils/get-timezone-description.ts
/**
* Help text communicating the timezone a datetime value is edited in.
* Returns `undefined` when the site timezone matches the visitor's, where
* spelling out the frame would be noise.
*/
function getTimezoneDescription() {
	const { timezone } = getSettings();
	const userTimezoneOffset = -1 * ((/* @__PURE__ */ new Date()).getTimezoneOffset() / 60);
	if (Number(timezone.offset) === userTimezoneOffset) return;
	const offsetSymbol = Number(timezone.offset) >= 0 ? "+" : "";
	const zoneAbbr = "" !== timezone.abbr && isNaN(Number(timezone.abbr)) ? timezone.abbr : `UTC${offsetSymbol}${timezone.offsetFormatted}`;
	const prettyTimezoneString = timezone.string.replaceAll("_", " ");
	let timezoneDetail = zoneAbbr;
	if ("UTC" === timezone.string) timezoneDetail = __("Coordinated Universal Time");
	else if (prettyTimezoneString.trim().length > 0) timezoneDetail = `(${zoneAbbr}) ${prettyTimezoneString}`;
	return sprintf(__("Timezone: %s"), timezoneDetail);
}
function init_get_timezone_description() {
	return (init_get_timezone_description = __esmMin((() => {
		init_build_module$2();
		init_build_module();
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/parse-date-time.ts
function parseDateTime(dateTimeString) {
	if (!dateTimeString) return null;
	const parsed = getDate(dateTimeString);
	return parsed && isValid(parsed) ? parsed : null;
}
function init_parse_date_time() {
	return (init_parse_date_time = __esmMin((() => {
		init_isValid();
		init_build_module$2();
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/datetime.tsx
function CalendarDateTimeControl({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity, config }) {
	const { compact } = config || {};
	const { id, label, description, setValue, getValue, isValid } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const fieldValue = getValue({ item: data });
	const value = typeof fieldValue === "string" ? fieldValue : void 0;
	const { timezone } = getSettings();
	const timeZone = timezone.string || dateI18n("P");
	const [calendarMonth, setCalendarMonth] = (0, import_react.useState)(() => {
		return toCalendarDate(parseDateTime(value) || /* @__PURE__ */ new Date(), timeZone);
	});
	(0, import_react.useEffect)(() => {
		const parsedDate = parseDateTime(value);
		if (parsedDate) {
			const targetMonth = toCalendarDate(parsedDate, timeZone);
			setCalendarMonth((currentMonth) => isSameMonth(targetMonth, toCalendarDate(currentMonth, timeZone)) ? currentMonth : targetMonth);
		}
	}, [timeZone, value]);
	const inputControlRef = (0, import_react.useRef)(null);
	const validationTimeoutRef = (0, import_react.useRef)(void 0);
	const { minConstraint, maxConstraint, disabledMatchers } = useDisabledDateMatchers(isValid, parseDateTime);
	const onChangeCallback = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue
	})), [
		data,
		onChange,
		setValue
	]);
	(0, import_react.useEffect)(() => {
		return () => clearTimeout(validationTimeoutRef.current);
	}, []);
	const onSelectDate = (0, import_react.useCallback)((newDate) => {
		if (newDate) {
			const wpDate = dateI18n("Y-m-d", newDate);
			const wpTime = value ? dateI18n("H:i", getDate(value)) : "00:00";
			const finalDateTime = getDate(`${wpDate}T${wpTime}`);
			onChangeCallback(finalDateTime.toISOString());
		} else onChangeCallback(void 0);
		clearTimeout(validationTimeoutRef.current);
		validationTimeoutRef.current = setTimeout(() => {
			const input = inputControlRef.current;
			if (!input) return;
			input.dispatchEvent(new Event("invalid", { cancelable: true }));
			if (input.validationMessage) speak(input.validationMessage);
		}, 0);
	}, [onChangeCallback, value]);
	const handleManualDateTimeChange = (0, import_react.useCallback)((newValue) => {
		if (newValue) {
			const dateTime = getDate(newValue);
			onChangeCallback(dateTime.toISOString());
			const parsedDate = parseDateTime(dateTime.toISOString());
			if (parsedDate) setCalendarMonth(toCalendarDate(parsedDate, timeZone));
		} else onChangeCallback(void 0);
	}, [onChangeCallback, timeZone]);
	const { format: fieldFormat } = field;
	const weekStartsOn = fieldFormat.weekStartsOn ?? getSettings().l10n.startOfWeek;
	const locale = getCalendarLocale(getSettings().l10n.locale);
	let displayLabel = label;
	if (isValid?.required && !markWhenOptional && !hideLabelFromVision) displayLabel = `${label} (${__("Required")})`;
	else if (!isValid?.required && markWhenOptional && !hideLabelFromVision) displayLabel = `${label} (${__("Optional")})`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$23.jsxDEV)(base_control_default, {
		id,
		label: displayLabel,
		help: description,
		hideLabelFromVision,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$23.jsxDEV)(Stack, {
			direction: "column",
			gap: "lg",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$23.jsxDEV)(ValidatedInputControl, {
				ref: inputControlRef,
				required: !!isValid?.required,
				customValidity: getCustomValidity(isValid, validity),
				type: "datetime-local",
				label: __("Date time"),
				hideLabelFromVision: true,
				value: formatDateTime(value),
				onValueChange: handleManualDateTimeChange,
				disabled,
				description: getTimezoneDescription(),
				min: minConstraint ? formatDateTime(minConstraint) : void 0,
				max: maxConstraint ? formatDateTime(maxConstraint) : void 0
			}, void 0, false, {
				fileName: _jsxFileName$23,
				lineNumber: 178,
				columnNumber: 5
			}, this), !compact && /* @__PURE__ */ (0, import_jsx_dev_runtime$23.jsxDEV)(Calendar, {
				style: { width: "100%" },
				value: value ? parseDateTime(value) : null,
				onValueChange: onSelectDate,
				month: calendarMonth,
				onMonthChange: setCalendarMonth,
				timeZone,
				locale,
				dir: isRTL() ? "rtl" : "ltr",
				weekStartsOn,
				disabled: disabled || disabledMatchers
			}, void 0, false, {
				fileName: _jsxFileName$23,
				lineNumber: 202,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$23,
			lineNumber: 176,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$23,
		lineNumber: 170,
		columnNumber: 3
	}, this);
}
function DateTime({ data, field, onChange, hideLabelFromVision, markWhenOptional, operator, validity, config }) {
	if (operator === "inThePast" || operator === "over") return /* @__PURE__ */ (0, import_jsx_dev_runtime$23.jsxDEV)(RelativeDateControl, {
		className: "dataviews-controls__datetime",
		data,
		field,
		onChange,
		hideLabelFromVision,
		operator
	}, void 0, false, {
		fileName: _jsxFileName$23,
		lineNumber: 232,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$23.jsxDEV)(CalendarDateTimeControl, {
		data,
		field,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity,
		config
	}, void 0, false, {
		fileName: _jsxFileName$23,
		lineNumber: 244,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$23, _jsxFileName$23, formatDateTime;
function init_datetime() {
	return (init_datetime = __esmMin((() => {
		init_isSameMonth();
		init_base_control();
		init_react();
		init_build_module();
		init_build_module$1();
		init_build_module$2();
		init_calendar(), init_stack(), init_validated_input_control();
		init_constants();
		init_relative_date_control();
		init_to_calendar_date();
		init_use_disabled_date_matchers();
		init_get_calendar_locale();
		init_get_timezone_description();
		init_parse_date_time();
		import_jsx_dev_runtime$23 = require_jsx_dev_runtime();
		_jsxFileName$23 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/datetime.tsx";
		formatDateTime = (value) => {
			if (!value) return "";
			return dateI18n("Y-m-d\\TH:i", getDate(value));
		};
		try {
			DateTime.__docgenInfo = {
				"description": "",
				"displayName": "datetime",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/datetime.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/date.tsx
function ValidatedDateControl({ field, validity, inputRefs, isTouched, setIsTouched, children }) {
	const { isValid } = field;
	const [customValidity, setCustomValidity] = (0, import_react.useState)(void 0);
	const validateRefs = (0, import_react.useCallback)(() => {
		const refs = Array.isArray(inputRefs) ? inputRefs : [inputRefs];
		for (const ref of refs) {
			const input = ref.current;
			if (input && !input.validity.valid) {
				setCustomValidity({
					type: "invalid",
					message: input.validationMessage
				});
				return;
			}
		}
		setCustomValidity(void 0);
	}, [inputRefs]);
	(0, import_react.useEffect)(() => {
		const refs = Array.isArray(inputRefs) ? inputRefs : [inputRefs];
		const result = validity ? getCustomValidity(isValid, validity) : void 0;
		for (const ref of refs) {
			const input = ref.current;
			if (input) input.setCustomValidity(result?.type === "invalid" && result.message ? result.message : "");
		}
	}, [
		inputRefs,
		isValid,
		validity
	]);
	(0, import_react.useEffect)(() => {
		const refs = Array.isArray(inputRefs) ? inputRefs : [inputRefs];
		const handleInvalid = (event) => {
			event.preventDefault();
			setIsTouched(true);
		};
		for (const ref of refs) ref.current?.addEventListener("invalid", handleInvalid);
		return () => {
			for (const ref of refs) ref.current?.removeEventListener("invalid", handleInvalid);
		};
	}, [inputRefs, setIsTouched]);
	(0, import_react.useEffect)(() => {
		if (!isTouched) return;
		const result = validity ? getCustomValidity(isValid, validity) : void 0;
		if (result) setCustomValidity(result);
		else validateRefs();
	}, [
		isTouched,
		isValid,
		validity,
		validateRefs
	]);
	(0, import_react.useEffect)(() => {
		if (isTouched && customValidity?.message) speak(customValidity.message);
	}, [isTouched, customValidity?.message]);
	const onBlur = (event) => {
		if (isTouched) return;
		if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) setIsTouched(true);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(Stack, {
		direction: "column",
		gap: "sm",
		onBlur,
		children: [children, customValidity && /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(ValidityIndicator, {
			type: customValidity.type,
			message: customValidity.message
		}, void 0, false, {
			fileName: _jsxFileName$22,
			lineNumber: 270,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$22,
		lineNumber: 267,
		columnNumber: 3
	}, this);
}
function CalendarDateControl({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { id, label, description, setValue, getValue, isValid, format: fieldFormat } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const [selectedPresetId, setSelectedPresetId] = (0, import_react.useState)(null);
	const weekStartsOn = fieldFormat.weekStartsOn ?? getSettings().l10n.startOfWeek;
	const locale = getCalendarLocale(getSettings().l10n.locale);
	const fieldValue = getValue({ item: data });
	const value = typeof fieldValue === "string" ? fieldValue : void 0;
	const [calendarMonth, setCalendarMonth] = (0, import_react.useState)(() => {
		return parseDate(value) || /* @__PURE__ */ new Date();
	});
	(0, import_react.useEffect)(() => {
		const parsedDate = parseDate(value);
		if (parsedDate) setCalendarMonth((currentMonth) => isSameMonth(parsedDate, currentMonth) ? currentMonth : parsedDate);
	}, [value]);
	const [isTouched, setIsTouched] = (0, import_react.useState)(false);
	const validityTargetRef = (0, import_react.useRef)(null);
	const { minConstraint, maxConstraint, disabledMatchers } = useDisabledDateMatchers(isValid, parseDate);
	const onChangeCallback = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue
	})), [
		data,
		onChange,
		setValue
	]);
	const onSelectDate = (0, import_react.useCallback)((newDate) => {
		const dateValue = newDate ? formatDate(newDate) : void 0;
		onChangeCallback(dateValue);
		setSelectedPresetId(null);
		setIsTouched(true);
	}, [onChangeCallback]);
	const handlePresetClick = (0, import_react.useCallback)((preset) => {
		const presetDate = preset.getValue();
		const dateValue = formatDate(presetDate);
		setCalendarMonth(presetDate);
		onChangeCallback(dateValue);
		setSelectedPresetId(preset.id);
		setIsTouched(true);
	}, [onChangeCallback]);
	const handleManualDateChange = (0, import_react.useCallback)((newValue) => {
		onChangeCallback(newValue);
		if (newValue) {
			const parsedDate = parseDate(newValue);
			if (parsedDate) setCalendarMonth(parsedDate);
		}
		setSelectedPresetId(null);
		setIsTouched(true);
	}, [onChangeCallback]);
	let displayLabel = label;
	if (isValid?.required && !markWhenOptional) displayLabel = `${label} (${__("Required")})`;
	else if (!isValid?.required && markWhenOptional) displayLabel = `${label} (${__("Optional")})`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(ValidatedDateControl, {
		field,
		validity,
		inputRefs: validityTargetRef,
		isTouched,
		setIsTouched,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(base_control_default, {
			id,
			className: "dataviews-controls__date",
			label: displayLabel,
			help: description,
			hideLabelFromVision,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(Stack, {
						direction: "row",
						gap: "sm",
						wrap: "wrap",
						justify: "flex-start",
						children: [DATE_PRESETS.map((preset) => {
							const isSelected = selectedPresetId === preset.id;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(button_default, {
								className: "dataviews-controls__date-preset",
								variant: "tertiary",
								isPressed: isSelected,
								size: "small",
								disabled,
								accessibleWhenDisabled: true,
								onClick: () => handlePresetClick(preset),
								children: preset.label
							}, preset.id, false, {
								fileName: _jsxFileName$22,
								lineNumber: 408,
								columnNumber: 9
							}, this);
						}), /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(button_default, {
							className: "dataviews-controls__date-preset",
							variant: "tertiary",
							isPressed: !selectedPresetId,
							size: "small",
							disabled: !!selectedPresetId || disabled,
							accessibleWhenDisabled: true,
							children: __("Custom")
						}, void 0, false, {
							fileName: _jsxFileName$22,
							lineNumber: 424,
							columnNumber: 7
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$22,
						lineNumber: 399,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(input_control_default, {
						ref: validityTargetRef,
						type: "date",
						label: __("Date"),
						hideLabelFromVision: true,
						value,
						onChange: handleManualDateChange,
						required: !!field.isValid?.required,
						disabled,
						min: minConstraint,
						max: maxConstraint
					}, void 0, false, {
						fileName: _jsxFileName$22,
						lineNumber: 437,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(Calendar, {
						style: { width: "100%" },
						value: value ? parseDate(value) : null,
						onValueChange: onSelectDate,
						month: calendarMonth,
						onMonthChange: setCalendarMonth,
						locale,
						dir: isRTL() ? "rtl" : "ltr",
						weekStartsOn,
						disabled: disabled || disabledMatchers,
						disableNavigation: disabled
					}, void 0, false, {
						fileName: _jsxFileName$22,
						lineNumber: 451,
						columnNumber: 6
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$22,
				lineNumber: 397,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$22,
			lineNumber: 390,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$22,
		lineNumber: 383,
		columnNumber: 3
	}, this);
}
function CalendarDateRangeControl({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { id, label, description, getValue, setValue, isValid, format: fieldFormat } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	let value;
	const fieldValue = getValue({ item: data });
	if (Array.isArray(fieldValue) && fieldValue.length === 2 && fieldValue.every((date) => typeof date === "string")) value = fieldValue;
	const weekStartsOn = fieldFormat.weekStartsOn ?? getSettings().l10n.startOfWeek;
	const locale = getCalendarLocale(getSettings().l10n.locale);
	const { minConstraint, maxConstraint, disabledMatchers } = useDisabledDateMatchers(isValid, parseDate);
	const onChangeCallback = (0, import_react.useCallback)((newValue) => {
		onChange(setValue({
			item: data,
			value: newValue
		}));
	}, [
		data,
		onChange,
		setValue
	]);
	const [selectedPresetId, setSelectedPresetId] = (0, import_react.useState)(null);
	const selectedRange = (0, import_react.useMemo)(() => {
		if (!value) return null;
		const [from, to] = value;
		return {
			from: parseDate(from) || void 0,
			to: parseDate(to) || void 0
		};
	}, [value]);
	const [calendarMonth, setCalendarMonth] = (0, import_react.useState)(() => {
		return selectedRange?.from || /* @__PURE__ */ new Date();
	});
	const [fromValue, toValue] = value ?? [];
	(0, import_react.useEffect)(() => {
		setCalendarMonth((currentMonth) => {
			const from = parseDate(fromValue);
			const to = parseDate(toValue);
			const targetMonth = from ?? to;
			const isRangeVisible = from && to ? areIntervalsOverlapping({
				start: from,
				end: to
			}, {
				start: startOfMonth(currentMonth),
				end: endOfMonth(currentMonth)
			}, { inclusive: true }) : [from, to].some((date) => date && isSameMonth(date, currentMonth));
			return targetMonth && !isRangeVisible ? targetMonth : currentMonth;
		});
	}, [fromValue, toValue]);
	const [isTouched, setIsTouched] = (0, import_react.useState)(false);
	const fromInputRef = (0, import_react.useRef)(null);
	const toInputRef = (0, import_react.useRef)(null);
	const updateDateRange = (0, import_react.useCallback)((fromDate, toDate) => {
		if (!fromDate && !toDate) {
			onChangeCallback(void 0);
			return;
		}
		onChangeCallback([formatDate(fromDate), formatDate(toDate)]);
	}, [onChangeCallback]);
	const onSelectCalendarRange = (0, import_react.useCallback)((newRange) => {
		updateDateRange(newRange?.from, newRange?.to);
		setSelectedPresetId(null);
		setIsTouched(true);
	}, [updateDateRange]);
	const handlePresetClick = (0, import_react.useCallback)((preset) => {
		const [startDate, endDate] = preset.getValue();
		setCalendarMonth(startDate);
		updateDateRange(startDate, endDate);
		setSelectedPresetId(preset.id);
		setIsTouched(true);
	}, [updateDateRange]);
	const handleManualDateChange = (0, import_react.useCallback)((fromOrTo, newValue) => {
		const [currentFrom, currentTo] = value || [void 0, void 0];
		updateDateRange(fromOrTo === "from" ? newValue : currentFrom, fromOrTo === "to" ? newValue : currentTo);
		if (newValue) {
			const parsedDate = parseDate(newValue);
			if (parsedDate) setCalendarMonth(parsedDate);
		}
		setSelectedPresetId(null);
		setIsTouched(true);
	}, [value, updateDateRange]);
	let displayLabel = label;
	if (field.isValid?.required && !markWhenOptional) displayLabel = `${label} (${__("Required")})`;
	else if (!field.isValid?.required && markWhenOptional) displayLabel = `${label} (${__("Optional")})`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(ValidatedDateControl, {
		field,
		validity,
		inputRefs: [fromInputRef, toInputRef],
		isTouched,
		setIsTouched,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(base_control_default, {
			id,
			className: "dataviews-controls__date",
			label: displayLabel,
			help: description,
			hideLabelFromVision,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(Stack, {
						direction: "row",
						gap: "sm",
						wrap: "wrap",
						justify: "flex-start",
						children: [DATE_RANGE_PRESETS.map((preset) => {
							const isSelected = selectedPresetId === preset.id;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(button_default, {
								className: "dataviews-controls__date-preset",
								variant: "tertiary",
								isPressed: isSelected,
								size: "small",
								disabled,
								accessibleWhenDisabled: true,
								onClick: () => handlePresetClick(preset),
								children: preset.label
							}, preset.id, false, {
								fileName: _jsxFileName$22,
								lineNumber: 663,
								columnNumber: 9
							}, this);
						}), /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(button_default, {
							className: "dataviews-controls__date-preset",
							variant: "tertiary",
							isPressed: !selectedPresetId,
							size: "small",
							accessibleWhenDisabled: true,
							disabled: !!selectedPresetId || disabled,
							children: __("Custom")
						}, void 0, false, {
							fileName: _jsxFileName$22,
							lineNumber: 679,
							columnNumber: 7
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$22,
						lineNumber: 654,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(Stack, {
						direction: "row",
						gap: "sm",
						justify: "space-between",
						className: "dataviews-controls__date-range-inputs",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(input_control_default, {
							ref: fromInputRef,
							type: "date",
							label: __("From"),
							hideLabelFromVision: true,
							value: value?.[0],
							onChange: (newValue) => handleManualDateChange("from", newValue),
							required: !!field.isValid?.required,
							disabled,
							min: minConstraint,
							max: maxConstraint
						}, void 0, false, {
							fileName: _jsxFileName$22,
							lineNumber: 698,
							columnNumber: 7
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(input_control_default, {
							ref: toInputRef,
							type: "date",
							label: __("To"),
							hideLabelFromVision: true,
							value: value?.[1],
							onChange: (newValue) => handleManualDateChange("to", newValue),
							required: !!field.isValid?.required,
							disabled,
							min: minConstraint,
							max: maxConstraint
						}, void 0, false, {
							fileName: _jsxFileName$22,
							lineNumber: 712,
							columnNumber: 7
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$22,
						lineNumber: 692,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(RangeCalendar, {
						style: { width: "100%" },
						value: selectedRange,
						onValueChange: onSelectCalendarRange,
						month: calendarMonth,
						onMonthChange: setCalendarMonth,
						locale,
						dir: isRTL() ? "rtl" : "ltr",
						weekStartsOn,
						disabled: disabled || disabledMatchers
					}, void 0, false, {
						fileName: _jsxFileName$22,
						lineNumber: 728,
						columnNumber: 6
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$22,
				lineNumber: 652,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$22,
			lineNumber: 645,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$22,
		lineNumber: 638,
		columnNumber: 3
	}, this);
}
function DateControl({ data, field, onChange, hideLabelFromVision, markWhenOptional, operator, validity }) {
	if (operator === "inThePast" || operator === "over") return /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(RelativeDateControl, {
		className: "dataviews-controls__date",
		data,
		field,
		onChange,
		hideLabelFromVision,
		operator
	}, void 0, false, {
		fileName: _jsxFileName$22,
		lineNumber: 756,
		columnNumber: 4
	}, this);
	if (operator === "between") return /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(CalendarDateRangeControl, {
		data,
		field,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity
	}, void 0, false, {
		fileName: _jsxFileName$22,
		lineNumber: 769,
		columnNumber: 4
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$22.jsxDEV)(CalendarDateControl, {
		data,
		field,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity
	}, void 0, false, {
		fileName: _jsxFileName$22,
		lineNumber: 781,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$22, _jsxFileName$22, DATE_PRESETS, DATE_RANGE_PRESETS, parseDate, formatDate;
function init_date() {
	return (init_date = __esmMin((() => {
		init_areIntervalsOverlapping(), init_endOfMonth(), init_format(), init_isSameMonth(), init_isValid(), init_parseISO(), init_startOfMonth(), init_startOfYear(), init_subDays(), init_subMonths(), init_subYears();
		init_base_control(), init_button(), init_input_control();
		init_build_module$1();
		init_react();
		init_build_module();
		init_build_module$2();
		init_calendar(), init_range_calendar(), init_stack(), init_validity_indicator();
		init_relative_date_control();
		init_use_disabled_date_matchers();
		init_get_calendar_locale();
		init_constants();
		import_jsx_dev_runtime$22 = require_jsx_dev_runtime();
		_jsxFileName$22 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/date.tsx";
		DATE_PRESETS = [
			{
				id: "today",
				label: __("Today"),
				getValue: () => getDate(null)
			},
			{
				id: "yesterday",
				label: __("Yesterday"),
				getValue: () => {
					const today = getDate(null);
					return subDays(today, 1);
				}
			},
			{
				id: "past-week",
				label: __("Past week"),
				getValue: () => {
					const today = getDate(null);
					return subDays(today, 7);
				}
			},
			{
				id: "past-month",
				label: __("Past month"),
				getValue: () => {
					const today = getDate(null);
					return subMonths(today, 1);
				}
			}
		];
		DATE_RANGE_PRESETS = [
			{
				id: "last-7-days",
				label: __("Last 7 days"),
				getValue: () => {
					const today = getDate(null);
					return [subDays(today, 7), today];
				}
			},
			{
				id: "last-30-days",
				label: __("Last 30 days"),
				getValue: () => {
					const today = getDate(null);
					return [subDays(today, 30), today];
				}
			},
			{
				id: "month-to-date",
				label: __("Month to date"),
				getValue: () => {
					const today = getDate(null);
					return [startOfMonth(today), today];
				}
			},
			{
				id: "last-year",
				label: __("Last year"),
				getValue: () => {
					const today = getDate(null);
					return [subYears(today, 1), today];
				}
			},
			{
				id: "year-to-date",
				label: __("Year to date"),
				getValue: () => {
					const today = getDate(null);
					return [startOfYear(today), today];
				}
			}
		];
		parseDate = (dateString) => {
			if (!dateString) return null;
			const parsed = parseISO(dateString);
			return isValid(parsed) ? parsed : null;
		};
		formatDate = (date) => {
			if (!date) return "";
			return typeof date === "string" ? date : format$5(date, "yyyy-MM-dd");
		};
		try {
			DateControl.__docgenInfo = {
				"description": "",
				"displayName": "date",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/date.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/select.tsx
function Select({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { type, label, description, getValue, setValue, isValid } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const isMultiple = type === "array";
	const value = getValue({ item: data }) ?? (isMultiple ? [] : "");
	const onChangeControl = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue
	})), [
		data,
		onChange,
		setValue
	]);
	const { elements, isLoading } = useElements({
		elements: field.elements,
		getElements: field.getElements
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime$21.jsxDEV)(spinner_default, {}, void 0, false, {
		fileName: _jsxFileName$21,
		lineNumber: 34,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$21.jsxDEV)(ValidatedSelectControl, {
		required: !!field.isValid?.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		label,
		value,
		help: description,
		options: elements,
		onChange: onChangeControl,
		hideLabelFromVision,
		multiple: isMultiple,
		disabled
	}, void 0, false, {
		fileName: _jsxFileName$21,
		lineNumber: 38,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$21, _jsxFileName$21;
function init_select() {
	return (init_select = __esmMin((() => {
		init_spinner();
		init_react();
		init_use_elements();
		init_select_control();
		import_jsx_dev_runtime$21 = require_jsx_dev_runtime();
		_jsxFileName$21 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/select.tsx";
		try {
			Select.__docgenInfo = {
				"description": "",
				"displayName": "select",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/select.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/adaptive-select.tsx
function AdaptiveSelect(props) {
	const { field } = props;
	const { elements } = useElements({
		elements: field.elements,
		getElements: field.getElements
	});
	if (elements.length >= ELEMENTS_THRESHOLD) return /* @__PURE__ */ (0, import_jsx_dev_runtime$20.jsxDEV)(Combobox, { ...props }, void 0, false, {
		fileName: _jsxFileName$20,
		lineNumber: 17,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$20.jsxDEV)(Select, { ...props }, void 0, false, {
		fileName: _jsxFileName$20,
		lineNumber: 19,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$20, _jsxFileName$20, ELEMENTS_THRESHOLD;
function init_adaptive_select() {
	return (init_adaptive_select = __esmMin((() => {
		init_use_elements();
		init_combobox();
		init_select();
		import_jsx_dev_runtime$20 = require_jsx_dev_runtime();
		_jsxFileName$20 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/adaptive-select.tsx";
		ELEMENTS_THRESHOLD = 10;
		try {
			AdaptiveSelect.__docgenInfo = {
				"description": "",
				"displayName": "adaptiveselect",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/adaptive-select.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/utils/validated-input.tsx
function ValidatedText({ data, field, onChange, hideLabelFromVision, markWhenOptional, type, prefix, suffix, validity }) {
	const { label, placeholder, description, getValue, setValue, isValid } = field;
	const value = getValue({ item: data });
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const onValueChangeControl = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue
	})), [
		data,
		setValue,
		onChange
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$19.jsxDEV)(ValidatedInputControl, {
		required: !!isValid.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		label,
		placeholder,
		value: value ?? "",
		description: typeof description === "string" ? description : void 0,
		details: typeof description === "string" ? void 0 : description,
		onValueChange: onValueChangeControl,
		hideLabelFromVision,
		type,
		prefix,
		suffix,
		disabled,
		pattern: isValid.pattern ? isValid.pattern.constraint : void 0,
		minLength: isValid.minLength ? isValid.minLength.constraint : void 0,
		maxLength: isValid.maxLength ? isValid.maxLength.constraint : void 0
	}, void 0, false, {
		fileName: _jsxFileName$19,
		lineNumber: 53,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$19, _jsxFileName$19;
function init_validated_input() {
	return (init_validated_input = __esmMin((() => {
		init_validated_input_control();
		init_react();
		import_jsx_dev_runtime$19 = require_jsx_dev_runtime();
		_jsxFileName$19 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/validated-input.tsx";
		try {
			ValidatedText.__docgenInfo = {
				"description": "",
				"displayName": "validatedinput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/validated-input.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/validated-input.tsx",
							"name": "TypeLiteral"
						}],
						"description": "The input type of the control.",
						"name": "type",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"email\" | \"text\" | \"password\" | \"tel\" | \"url\"",
							"value": [
								{ "value": "\"email\"" },
								{ "value": "\"text\"" },
								{ "value": "\"password\"" },
								{ "value": "\"tel\"" },
								{ "value": "\"url\"" }
							]
						}
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/validated-input.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Optional prefix element to display before the input.",
						"name": "prefix",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>>" }
					},
					"suffix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/validated-input.tsx",
							"name": "TypeLiteral"
						}],
						"description": "Optional suffix element to display after the input.",
						"name": "suffix",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/email.tsx
function Email({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$18.jsxDEV)(ValidatedText, {
		data,
		field,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity,
		type: "email",
		prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$18.jsxDEV)(InputLayout.Slot, {
			padding: "minimal",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$18.jsxDEV)(Icon, { icon: envelope_default }, void 0, false, {
				fileName: _jsxFileName$18,
				lineNumber: 26,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$18,
			lineNumber: 25,
			columnNumber: 6
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$18,
		lineNumber: 15,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$18, _jsxFileName$18;
function init_email() {
	return (init_email = __esmMin((() => {
		init_icon(), init_input_layout();
		init_build_module$3();
		init_validated_input();
		import_jsx_dev_runtime$18 = require_jsx_dev_runtime();
		_jsxFileName$18 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/email.tsx";
		try {
			Email.__docgenInfo = {
				"description": "",
				"displayName": "email",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/email.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/telephone.tsx
function Telephone({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$17.jsxDEV)(ValidatedText, {
		data,
		field,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity,
		type: "tel",
		prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$17.jsxDEV)(InputLayout.Slot, {
			padding: "minimal",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$17.jsxDEV)(Icon, { icon: mobile_default }, void 0, false, {
				fileName: _jsxFileName$17,
				lineNumber: 26,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$17,
			lineNumber: 25,
			columnNumber: 6
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$17,
		lineNumber: 15,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$17, _jsxFileName$17;
function init_telephone() {
	return (init_telephone = __esmMin((() => {
		init_icon(), init_input_layout();
		init_build_module$3();
		init_validated_input();
		import_jsx_dev_runtime$17 = require_jsx_dev_runtime();
		_jsxFileName$17 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/telephone.tsx";
		try {
			Telephone.__docgenInfo = {
				"description": "",
				"displayName": "telephone",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/telephone.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/url.tsx
function Url({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$16.jsxDEV)(ValidatedText, {
		data,
		field,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity,
		type: "url",
		prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$16.jsxDEV)(InputLayout.Slot, {
			padding: "minimal",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$16.jsxDEV)(Icon, { icon: link_default }, void 0, false, {
				fileName: _jsxFileName$16,
				lineNumber: 26,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$16,
			lineNumber: 25,
			columnNumber: 6
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$16,
		lineNumber: 15,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$16, _jsxFileName$16;
function init_url() {
	return (init_url = __esmMin((() => {
		init_icon(), init_input_layout();
		init_build_module$3();
		init_validated_input();
		import_jsx_dev_runtime$16 = require_jsx_dev_runtime();
		_jsxFileName$16 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/url.tsx";
		try {
			Url.__docgenInfo = {
				"description": "",
				"displayName": "url",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/url.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/utils/validated-number.tsx
function toNumberOrEmpty(value) {
	if (value === "" || value === void 0) return "";
	const number = Number(value);
	return Number.isFinite(number) ? number : "";
}
function BetweenControls$1({ value, onChange, hideLabelFromVision, step }) {
	const [min = "", max = ""] = value;
	const onChangeMin = (0, import_react.useCallback)((newValue) => onChange([toNumberOrEmpty(newValue), max]), [onChange, max]);
	const onChangeMax = (0, import_react.useCallback)((newValue) => onChange([min, toNumberOrEmpty(newValue)]), [onChange, min]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$15.jsxDEV)(base_control_default, {
		help: __("The max. value must be greater than the min. value."),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$15.jsxDEV)(component_default, {
			direction: "row",
			gap: 4,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$15.jsxDEV)(number_control_default, {
				label: __("Min."),
				value: min,
				max: max ? Number(max) - step : void 0,
				onChange: onChangeMin,
				hideLabelFromVision,
				step
			}, void 0, false, {
				fileName: _jsxFileName$15,
				lineNumber: 53,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$15.jsxDEV)(number_control_default, {
				label: __("Max."),
				value: max,
				min: min ? Number(min) + step : void 0,
				onChange: onChangeMax,
				hideLabelFromVision,
				step
			}, void 0, false, {
				fileName: _jsxFileName$15,
				lineNumber: 61,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$15,
			lineNumber: 52,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$15,
		lineNumber: 49,
		columnNumber: 3
	}, this);
}
function ValidatedNumber({ data, field, onChange, hideLabelFromVision, markWhenOptional, operator, validity }) {
	const decimals = field.format?.decimals ?? 0;
	const step = Math.pow(10, Math.abs(decimals) * -1);
	const { label, description, getValue, setValue, isValid } = field;
	const value = getValue({ item: data }) ?? "";
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const onChangeControl = (0, import_react.useCallback)((newValue) => {
		onChange(setValue({
			item: data,
			value: ["", void 0].includes(newValue) ? void 0 : Number(newValue)
		}));
	}, [
		data,
		onChange,
		setValue
	]);
	const onChangeBetweenControls = (0, import_react.useCallback)((newValue) => {
		onChange(setValue({
			item: data,
			value: newValue
		}));
	}, [
		data,
		onChange,
		setValue
	]);
	if (operator === "between") {
		let valueBetween = ["", ""];
		if (Array.isArray(value) && value.length === 2 && value.every((element) => typeof element === "number" || element === "")) valueBetween = value;
		return /* @__PURE__ */ (0, import_jsx_dev_runtime$15.jsxDEV)(BetweenControls$1, {
			value: valueBetween,
			onChange: onChangeBetweenControls,
			hideLabelFromVision,
			step
		}, void 0, false, {
			fileName: _jsxFileName$15,
			lineNumber: 130,
			columnNumber: 4
		}, this);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$15.jsxDEV)(ValidatedNumberControl, {
		required: !!isValid.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		label,
		help: description,
		value,
		onChange: onChangeControl,
		hideLabelFromVision,
		step,
		min: typeof isValid.min?.constraint === "number" ? isValid.min.constraint : void 0,
		max: typeof isValid.max?.constraint === "number" ? isValid.max.constraint : void 0,
		disabled
	}, void 0, false, {
		fileName: _jsxFileName$15,
		lineNumber: 140,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$15, _jsxFileName$15;
function init_validated_number() {
	return (init_validated_number = __esmMin((() => {
		init_component(), init_base_control(), init_number_control$1();
		init_react();
		init_build_module();
		init_constants();
		init_number_control();
		import_jsx_dev_runtime$15 = require_jsx_dev_runtime();
		_jsxFileName$15 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/validated-number.tsx";
		try {
			ValidatedNumber.__docgenInfo = {
				"description": "",
				"displayName": "validatednumber",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/utils/validated-number.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/integer.tsx
function Integer(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$14.jsxDEV)(ValidatedNumber, { ...props }, void 0, false, {
		fileName: _jsxFileName$14,
		lineNumber: 5,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$14, _jsxFileName$14;
function init_integer() {
	return (init_integer = __esmMin((() => {
		init_validated_number();
		import_jsx_dev_runtime$14 = require_jsx_dev_runtime();
		_jsxFileName$14 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/integer.tsx";
		try {
			Integer.__docgenInfo = {
				"description": "",
				"displayName": "integer",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/integer.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/number.tsx
function Number$1(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$13.jsxDEV)(ValidatedNumber, { ...props }, void 0, false, {
		fileName: _jsxFileName$13,
		lineNumber: 5,
		columnNumber: 9
	}, this);
}
var import_jsx_dev_runtime$13, _jsxFileName$13;
function init_number() {
	return (init_number = __esmMin((() => {
		init_validated_number();
		import_jsx_dev_runtime$13 = require_jsx_dev_runtime();
		_jsxFileName$13 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/number.tsx";
		try {
			Number$1.__docgenInfo = {
				"description": "",
				"displayName": "number",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/number.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/radio.tsx
function Radio({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { label, description, getValue, setValue, isValid } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const { elements, isLoading } = useElements({
		elements: field.elements,
		getElements: field.getElements
	});
	const value = getValue({ item: data });
	const onChangeControl = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue
	})), [
		data,
		onChange,
		setValue
	]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(spinner_default, {}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 31,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$12.jsxDEV)(ValidatedRadioControl, {
		required: !!field.isValid?.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		label,
		help: description,
		onChange: onChangeControl,
		options: elements,
		selected: value,
		hideLabelFromVision,
		disabled
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 35,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$12, _jsxFileName$12;
function init_radio() {
	return (init_radio = __esmMin((() => {
		init_spinner();
		init_react();
		init_radio_control();
		init_use_elements();
		import_jsx_dev_runtime$12 = require_jsx_dev_runtime();
		_jsxFileName$12 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/radio.tsx";
		try {
			Radio.__docgenInfo = {
				"description": "",
				"displayName": "radio",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/radio.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/text.tsx
function Text({ data, field, onChange, hideLabelFromVision, markWhenOptional, config, validity }) {
	const { prefix, prefixPadding, suffix, suffixPadding } = config || {};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(ValidatedText, {
		data,
		field,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity,
		prefix: prefix ? /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(InputLayout.Slot, {
			padding: prefixPadding,
			children: typeof prefix === "string" ? prefix : (0, import_react.createElement)(prefix)
		}, void 0, false, {
			fileName: _jsxFileName$11,
			lineNumber: 27,
			columnNumber: 6
		}, this) : void 0,
		suffix: suffix ? /* @__PURE__ */ (0, import_jsx_dev_runtime$11.jsxDEV)(InputLayout.Slot, {
			padding: suffixPadding,
			children: typeof suffix === "string" ? suffix : (0, import_react.createElement)(suffix)
		}, void 0, false, {
			fileName: _jsxFileName$11,
			lineNumber: 34,
			columnNumber: 6
		}, this) : void 0
	}, void 0, false, {
		fileName: _jsxFileName$11,
		lineNumber: 18,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$11, _jsxFileName$11;
function init_text() {
	return (init_text = __esmMin((() => {
		init_react();
		init_input_layout();
		init_validated_input();
		import_jsx_dev_runtime$11 = require_jsx_dev_runtime();
		_jsxFileName$11 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/text.tsx";
		try {
			Text.__docgenInfo = {
				"description": "",
				"displayName": "text",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/text.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/parse-time.ts
/**
* Parses a time-of-day value into the number of seconds since midnight.
*
* @param value The value to parse.
*
* @return Seconds since midnight, or `null` if the value is not a valid time.
*/
function parseTime(value) {
	if (typeof value !== "string") return null;
	const time = value.trim().replace(ZONE_DESIGNATOR, "");
	for (const timeFormat of TIME_FORMATS) {
		const parsed = parse(time, timeFormat, REFERENCE_DATE);
		if (isValid(parsed)) return parsed.getHours() * 3600 + parsed.getMinutes() * 60 + parsed.getSeconds();
	}
	return null;
}
var ZONE_DESIGNATOR, TIME_FORMATS, REFERENCE_DATE;
function init_parse_time() {
	return (init_parse_time = __esmMin((() => {
		init_isValid(), init_parse();
		ZONE_DESIGNATOR = /(?:[Zz]|[+-](?:[01]\d|2[0-3]):?[0-5]\d)$/;
		TIME_FORMATS = ["HH:mm", "HH:mm:ss"];
		REFERENCE_DATE = new Date(2e3, 0, 1);
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/time.tsx
function getStep(timeFormat, values) {
	return (timeFormat ?? "").replace(/\\./g, "").includes("s") || values.some((value) => (parseTime(value) ?? 0) % 60 !== 0) ? 1 : void 0;
}
function toInputValue(value) {
	const seconds = parseTime(value);
	if (seconds === null) return "";
	const parts = [Math.floor(seconds / 3600), Math.floor(seconds % 3600 / 60)];
	if (seconds % 60 !== 0) parts.push(seconds % 60);
	return parts.map((part) => String(part).padStart(2, "0")).join(":");
}
function BetweenControls({ value, onChange, hideLabelFromVision, disabled, step, min, max }) {
	const [from = "", to = ""] = value;
	const onChangeFrom = (0, import_react.useCallback)((newValue) => onChange([newValue ?? "", to]), [onChange, to]);
	const onChangeTo = (0, import_react.useCallback)((newValue) => onChange([from, newValue ?? ""]), [onChange, from]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(base_control_default, {
		help: __("The end time must be later than the start time."),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(Stack, {
			direction: "row",
			gap: "sm",
			justify: "space-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(ValidatedInputControl, {
				type: "time",
				label: __("From"),
				value: from,
				onValueChange: onChangeFrom,
				hideLabelFromVision,
				disabled,
				step,
				min,
				max: to || max
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 87,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(ValidatedInputControl, {
				type: "time",
				label: __("To"),
				value: to,
				onValueChange: onChangeTo,
				hideLabelFromVision,
				disabled,
				step,
				min: from || min,
				max
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 98,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$10,
			lineNumber: 86,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 83,
		columnNumber: 3
	}, this);
}
function Time({ data, field, onChange, hideLabelFromVision, markWhenOptional, operator, validity }) {
	const { label, placeholder, description, getValue, setValue, isValid } = field;
	const value = getValue({ item: data });
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const timeFormat = field.format?.time;
	const min = typeof isValid.min?.constraint === "string" ? isValid.min.constraint : void 0;
	const max = typeof isValid.max?.constraint === "string" ? isValid.max.constraint : void 0;
	const onChangeControl = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue === "" ? void 0 : newValue
	})), [
		data,
		onChange,
		setValue
	]);
	const onChangeBetweenControls = (0, import_react.useCallback)(([from, to]) => onChange(setValue({
		item: data,
		value: [from || void 0, to || void 0]
	})), [
		data,
		onChange,
		setValue
	]);
	if (operator === "between") {
		let valueBetween = ["", ""];
		if (Array.isArray(value) && value.length === 2) valueBetween = [toInputValue(value[0]), toInputValue(value[1])];
		return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(BetweenControls, {
			value: valueBetween,
			onChange: onChangeBetweenControls,
			hideLabelFromVision,
			disabled,
			step: getStep(timeFormat, valueBetween),
			min,
			max
		}, void 0, false, {
			fileName: _jsxFileName$10,
			lineNumber: 170,
			columnNumber: 4
		}, this);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$10.jsxDEV)(ValidatedInputControl, {
		required: !!isValid.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		type: "time",
		label,
		placeholder,
		description: typeof description === "string" ? description : void 0,
		details: typeof description === "string" ? void 0 : description,
		value: toInputValue(value),
		onValueChange: onChangeControl,
		hideLabelFromVision,
		disabled,
		step: getStep(timeFormat, [value]),
		min,
		max
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 183,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$10, _jsxFileName$10;
function init_time() {
	return (init_time = __esmMin((() => {
		init_base_control();
		init_react();
		init_build_module();
		init_stack(), init_validated_input_control();
		init_constants();
		init_parse_time();
		import_jsx_dev_runtime$10 = require_jsx_dev_runtime();
		_jsxFileName$10 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/time.tsx";
		try {
			Time.__docgenInfo = {
				"description": "",
				"displayName": "time",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/time.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/toggle.tsx
function Toggle({ field, onChange, data, hideLabelFromVision, markWhenOptional, validity }) {
	const { label, description, getValue, setValue, isValid } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const onChangeControl = (0, import_react.useCallback)(() => {
		onChange(setValue({
			item: data,
			value: !getValue({ item: data })
		}));
	}, [
		onChange,
		setValue,
		data,
		getValue
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$9.jsxDEV)(ValidatedToggleControl, {
		required: !!isValid.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		hidden: hideLabelFromVision,
		label,
		help: description,
		checked: getValue({ item: data }),
		onChange: onChangeControl,
		disabled
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 24,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$9, _jsxFileName$9;
function init_toggle() {
	return (init_toggle = __esmMin((() => {
		init_react();
		init_toggle_control();
		import_jsx_dev_runtime$9 = require_jsx_dev_runtime();
		_jsxFileName$9 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/toggle.tsx";
		try {
			Toggle.__docgenInfo = {
				"description": "",
				"displayName": "toggle",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/toggle.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/textarea.tsx
function Textarea({ data, field, onChange, hideLabelFromVision, markWhenOptional, config, validity }) {
	const { rows = 4 } = config || {};
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const { label, placeholder, description, setValue, isValid } = field;
	const value = field.getValue({ item: data });
	const onValueChangeControl = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue
	})), [
		data,
		onChange,
		setValue
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$8.jsxDEV)(ValidatedTextareaControl, {
		required: !!isValid.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		label,
		placeholder,
		value: value ?? "",
		description: typeof description === "string" ? description : void 0,
		details: typeof description === "string" ? void 0 : description,
		onValueChange: onValueChangeControl,
		rows,
		disabled,
		minLength: isValid.minLength ? isValid.minLength.constraint : void 0,
		maxLength: isValid.maxLength ? isValid.maxLength.constraint : void 0,
		hideLabelFromVision
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 30,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$8, _jsxFileName$8;
function init_textarea() {
	return (init_textarea = __esmMin((() => {
		init_validated_textarea_control();
		init_react();
		import_jsx_dev_runtime$8 = require_jsx_dev_runtime();
		_jsxFileName$8 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/textarea.tsx";
		try {
			Textarea.__docgenInfo = {
				"description": "",
				"displayName": "textarea",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/textarea.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/toggle-group.tsx
function ToggleGroup({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { getValue, setValue, isValid } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const value = getValue({ item: data });
	const onChangeControl = (0, import_react.useCallback)((newValue) => onChange(setValue({
		item: data,
		value: newValue
	})), [
		data,
		onChange,
		setValue
	]);
	const { elements, isLoading } = useElements({
		elements: field.elements,
		getElements: field.getElements
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(spinner_default, {}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 35,
		columnNumber: 10
	}, this);
	if (elements.length === 0) return null;
	const selectedOption = elements.find((el) => el.value === value);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(ValidatedToggleGroupControl, {
		required: !!field.isValid?.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		isBlock: true,
		label: field.label,
		help: selectedOption?.description || field.description,
		onChange: onChangeControl,
		value,
		hideLabelFromVision,
		children: elements.map((el) => /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(component_default$2, {
			label: el.label,
			value: el.value,
			disabled
		}, el.value, false, {
			fileName: _jsxFileName$7,
			lineNumber: 56,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 44,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$7, _jsxFileName$7;
function init_toggle_group() {
	return (init_toggle_group = __esmMin((() => {
		init_component$2(), init_spinner();
		init_react();
		init_toggle_group_control();
		init_use_elements();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/toggle-group.tsx";
		try {
			ToggleGroup.__docgenInfo = {
				"description": "",
				"displayName": "togglegroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/toggle-group.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/array.tsx
function ArrayControl({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { label, placeholder, description, getValue, setValue, isValid } = field;
	const value = getValue({ item: data });
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const { elements, isLoading } = useElements({
		elements: field.elements,
		getElements: field.getElements
	});
	const arrayValueAsElements = (0, import_react.useMemo)(() => Array.isArray(value) ? value.map((token) => {
		return elements?.find((suggestion) => suggestion.value === token) || {
			value: token,
			label: token
		};
	}) : [], [value, elements]);
	const onChangeControl = (0, import_react.useCallback)((tokens) => {
		const valueTokens = tokens.map((token) => {
			if (typeof token === "object" && "value" in token) return token.value;
			return token;
		});
		onChange(setValue({
			item: data,
			value: valueTokens
		}));
	}, [
		onChange,
		setValue,
		data
	]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(spinner_default, {}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 56,
		columnNumber: 10
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(ValidatedFormTokenField, {
		required: !!isValid?.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		label: hideLabelFromVision ? void 0 : label,
		value: arrayValueAsElements,
		onChange: onChangeControl,
		placeholder,
		suggestions: elements?.map((element) => element.value),
		disabled,
		__experimentalValidateInput: (token) => {
			if (field.isValid?.elements && elements) return elements.some((element) => element.value === token || element.label === token);
			return true;
		},
		__experimentalExpandOnFocus: elements && elements.length > 0,
		help: description ?? (field.isValid?.elements ? "" : void 0),
		displayTransform: (token) => {
			if (typeof token === "object" && "label" in token) return token.label;
			if (typeof token === "string" && elements) return elements.find((el) => el.value === token)?.label || token;
			return token;
		},
		__experimentalRenderItem: ({ item }) => {
			if (typeof item === "string" && elements) {
				const element = elements.find((el) => el.value === item);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", { children: element?.label || item }, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 104,
					columnNumber: 13
				}, this);
			}
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)("span", { children: item }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 106,
				columnNumber: 12
			}, this);
		}
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 60,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$6, _jsxFileName$6;
function init_array() {
	return (init_array = __esmMin((() => {
		init_spinner();
		init_react();
		init_form_token_field();
		init_use_elements();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/array.tsx";
		try {
			ArrayControl.__docgenInfo = {
				"description": "",
				"displayName": "array",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/array.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/color.tsx
function Color({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const { label, placeholder, description, setValue, isValid } = field;
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const value = field.getValue({ item: data }) || "";
	const handleColorChange = (0, import_react.useCallback)((newColor) => {
		onChange(setValue({
			item: data,
			value: newColor
		}));
	}, [
		data,
		onChange,
		setValue
	]);
	const handleInputChange = (0, import_react.useCallback)((newValue) => {
		onChange(setValue({
			item: data,
			value: newValue || ""
		}));
	}, [
		data,
		onChange,
		setValue
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(ValidatedInputControl, {
		required: !!field.isValid?.required,
		markWhenOptional,
		customValidity: getCustomValidity(isValid, validity),
		label,
		placeholder,
		value,
		description: typeof description === "string" ? description : void 0,
		details: typeof description === "string" ? void 0 : description,
		onValueChange: handleInputChange,
		hideLabelFromVision,
		type: "text",
		disabled,
		prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(InputLayout.Slot, {
			padding: "minimal",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(ColorPickerDropdown, {
				color: value,
				onColorChange: handleColorChange,
				disabled
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 103,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 102,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 84,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5, ColorPickerDropdown;
function init_color() {
	return (init_color = __esmMin((() => {
		init_colord();
		init_button(), init_color_indicator(), init_legacy_adapter(), init_dropdown(), init_dropdown_content_wrapper();
		init_input_layout(), init_validated_input_control();
		init_react();
		init_build_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/color.tsx";
		ColorPickerDropdown = ({ color, onColorChange, disabled }) => {
			const validColor = color && A(color).isValid() ? color : "#ffffff";
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(dropdown_default, {
				className: "dataviews-controls__color-picker-dropdown",
				popoverProps: { resize: false },
				renderToggle: ({ onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(button_default, {
					onClick: onToggle,
					"aria-label": __("Open color picker"),
					size: "small",
					disabled,
					accessibleWhenDisabled: true,
					icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(color_indicator_default, { colorValue: validColor }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 41,
						columnNumber: 19
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 35,
					columnNumber: 5
				}, void 0),
				renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(dropdown_content_wrapper_default, {
					paddingSize: "none",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(LegacyAdapter, {
						color: validColor,
						onChange: onColorChange,
						enableAlpha: true
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 46,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 45,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 31,
				columnNumber: 3
			}, void 0);
		};
		try {
			Color.__docgenInfo = {
				"description": "",
				"displayName": "color",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/color.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/password.tsx
function Password({ data, field, onChange, hideLabelFromVision, markWhenOptional, validity }) {
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const disabled = field.isDisabled({
		item: data,
		field
	});
	const toggleVisibility = (0, import_react.useCallback)(() => {
		setIsVisible((prev) => !prev);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(ValidatedText, {
		data,
		field,
		onChange,
		hideLabelFromVision,
		markWhenOptional,
		validity,
		type: isVisible ? "text" : "password",
		suffix: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(InputLayout.Slot, {
			padding: "minimal",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(button_default, {
				icon: isVisible ? unseen_default : seen_default,
				onClick: toggleVisibility,
				size: "small",
				label: isVisible ? __("Hide password") : __("Show password"),
				disabled,
				accessibleWhenDisabled: true
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 36,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 35,
			columnNumber: 6
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 25,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4;
function init_password() {
	return (init_password = __esmMin((() => {
		init_button();
		init_input_layout();
		init_react();
		init_build_module();
		init_build_module$3();
		init_validated_input();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/password.tsx";
		try {
			Password.__docgenInfo = {
				"description": "",
				"displayName": "password",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/password.tsx",
				"methods": [],
				"props": {
					"data": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being edited.",
						"name": "data",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field the control edits.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback the control invokes with the updated (partial) item\nwhen the value changes.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: DeepPartial<Item>) => void" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to hide the control's label visually\nwhile keeping it available to assistive technology.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"markWhenOptional": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Label the control as \"optional\" when _not_ required, instead of showing \"required\".",
						"name": "markWhenOptional",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"operator": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The currently selected filter operator for this field.\n\nUsed by DataViews filters to determine which control to render based on the operator type.",
						"name": "operator",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Operator",
							"value": [
								{ "value": "\"over\"" },
								{ "value": "\"after\"" },
								{ "value": "\"is\"" },
								{ "value": "\"startsWith\"" },
								{ "value": "\"on\"" },
								{ "value": "\"isNot\"" },
								{ "value": "\"isAny\"" },
								{ "value": "\"isNone\"" },
								{ "value": "\"isAll\"" },
								{ "value": "\"isNotAll\"" },
								{ "value": "\"lessThan\"" },
								{ "value": "\"greaterThan\"" },
								{ "value": "\"lessThanOrEqual\"" },
								{ "value": "\"greaterThanOrEqual\"" },
								{ "value": "\"before\"" },
								{ "value": "\"beforeInc\"" },
								{ "value": "\"afterInc\"" },
								{ "value": "\"contains\"" },
								{ "value": "\"notContains\"" },
								{ "value": "\"between\"" },
								{ "value": "\"notOn\"" },
								{ "value": "\"inThePast\"" }
							]
						}
					},
					"validity": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Validity information for the field, if any.",
						"name": "validity",
						"required": false,
						"tags": {},
						"type": { "name": "FieldValidity" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Configuration object for the control.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ prefix?: string | ComponentType<{}>; prefixPadding?: \"default\" | \"minimal\"; suffix?: string | ComponentType<{}> | undefined; suffixPadding?: \"default\" | ... 1 more ... | undefined; rows?: number | undefined; compact?: boolean | undefined; } | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/has-elements.ts
function hasElements(field) {
	return Array.isArray(field.elements) && field.elements.length > 0 || typeof field.getElements === "function";
}
//#endregion
//#region ../packages/dataviews/src/components/dataform-controls/index.tsx
function isEditConfig(value) {
	return value && typeof value === "object" && typeof value.control === "string";
}
function createConfiguredControl(config) {
	const { control, ...controlConfig } = config;
	const BaseControlType = getControlByType(control);
	if (BaseControlType === null) return null;
	return function ConfiguredControl(props) {
		return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(BaseControlType, {
			...props,
			config: controlConfig
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 68,
			columnNumber: 10
		}, this);
	};
}
function getControl(field, fallback) {
	if (typeof field.Edit === "function") return field.Edit;
	if (typeof field.Edit === "string") return getControlByType(field.Edit);
	if (isEditConfig(field.Edit)) return createConfiguredControl(field.Edit);
	if (hasElements(field) && field.type !== "array") return getControlByType("adaptiveSelect");
	if (fallback === null) return null;
	return getControlByType(fallback);
}
function getControlByType(type) {
	if (Object.keys(FORM_CONTROLS).includes(type)) return FORM_CONTROLS[type];
	return null;
}
var import_jsx_dev_runtime$3, _jsxFileName$3, FORM_CONTROLS;
function init_dataform_controls() {
	return (init_dataform_controls = __esmMin((() => {
		init_checkbox();
		init_combobox();
		init_datetime();
		init_date();
		init_adaptive_select();
		init_email();
		init_telephone();
		init_url();
		init_integer();
		init_number();
		init_radio();
		init_select();
		init_text();
		init_time();
		init_toggle();
		init_textarea();
		init_toggle_group();
		init_array();
		init_color();
		init_password();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/index.tsx";
		FORM_CONTROLS = {
			adaptiveSelect: AdaptiveSelect,
			array: ArrayControl,
			checkbox: Checkbox,
			color: Color,
			combobox: Combobox,
			datetime: DateTime,
			date: DateControl,
			email: Email,
			telephone: Telephone,
			url: Url,
			integer: Integer,
			number: Number$1,
			password: Password,
			radio: Radio,
			select: Select,
			text: Text,
			time: Time,
			toggle: Toggle,
			textarea: Textarea,
			toggleGroup: ToggleGroup
		};
		try {
			getControlByType.__docgenInfo = {
				"description": "",
				"displayName": "getControlByType",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/components/dataform-controls/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/get-filter-by.ts
function getFilterBy(field, defaultOperators, validOperators) {
	if (field.filterBy === false) return false;
	const operators = field.filterBy?.operators?.filter((op) => validOperators.includes(op)) ?? defaultOperators;
	if (operators.length === 0) return false;
	return {
		isPrimary: !!field.filterBy?.isPrimary,
		operators
	};
}
function init_get_filter_by() {
	return (init_get_filter_by = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/get-value-from-id.ts
var getValueFromId;
function init_get_value_from_id() {
	return (init_get_value_from_id = __esmMin((() => {
		getValueFromId = (id) => ({ item }) => {
			const path = id.split(".");
			let value = item;
			for (const segment of path) if (value.hasOwnProperty(segment)) value = value[segment];
			else value = void 0;
			return value;
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/set-value-from-id.ts
var setValueFromId;
function init_set_value_from_id() {
	return (init_set_value_from_id = __esmMin((() => {
		setValueFromId = (id) => ({ value }) => {
			const path = id.split(".");
			const result = {};
			let current = result;
			for (const segment of path.slice(0, -1)) {
				current[segment] = {};
				current = current[segment];
			}
			current[path.at(-1)] = value;
			return result;
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/render-from-elements.tsx
function RenderFromElements({ item, field }) {
	const { elements, isLoading } = useElements({
		elements: field.elements,
		getElements: field.getElements
	});
	const value = field.getValue({ item });
	if (isLoading) return value;
	if (elements.length === 0) return value;
	return elements?.find((element) => element.value === value)?.label || field.getValue({ item });
}
function init_render_from_elements() {
	return (init_render_from_elements = __esmMin((() => {
		init_use_elements();
		try {
			RenderFromElements.__docgenInfo = {
				"description": "",
				"displayName": "renderfromelements",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/utils/render-from-elements.tsx",
				"methods": [],
				"props": {
					"item": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being rendered.",
						"name": "item",
						"required": true,
						"tags": {},
						"type": { "name": "Item" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field being rendered.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<Item>" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Layout-specific configuration for the renderer.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ sizes: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/render-default.tsx
function render$2({ item, field }) {
	if (field.hasElements) return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(RenderFromElements, {
		item,
		field
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 9,
		columnNumber: 10
	}, this);
	return field.getValueFormatted({
		item,
		field
	});
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_render_default() {
	return (init_render_default = __esmMin((() => {
		init_render_from_elements();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/utils/render-default.tsx";
		try {
			render$2.__docgenInfo = {
				"description": "",
				"displayName": "renderdefault",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/utils/render-default.tsx",
				"methods": [],
				"props": {
					"item": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The item being rendered.",
						"name": "item",
						"required": true,
						"tags": {},
						"type": { "name": "any" }
					},
					"field": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "The normalized field being rendered.",
						"name": "field",
						"required": true,
						"tags": {},
						"type": { "name": "NormalizedField<any>" }
					},
					"config": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/dataviews/src/types/field-api.ts",
							"name": "TypeLiteral"
						}],
						"description": "Layout-specific configuration for the renderer.",
						"name": "config",
						"required": false,
						"tags": {},
						"type": { "name": "{ sizes: string; }" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/sort-text.ts
var sort_text_default;
function init_sort_text() {
	return (init_sort_text = __esmMin((() => {
		sort_text_default = (a, b, direction) => {
			return direction === "asc" ? a.localeCompare(b) : b.localeCompare(a);
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-required.ts
function isValidRequired(item, field) {
	const value = field.getValue({ item });
	return ![
		void 0,
		"",
		null
	].includes(value);
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-min-length.ts
function isValidMinLength(item, field) {
	if (typeof field.isValid.minLength?.constraint !== "number") return false;
	const value = field.getValue({ item });
	if ([
		void 0,
		"",
		null
	].includes(value)) return true;
	return String(value).length >= field.isValid.minLength.constraint;
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-max-length.ts
function isValidMaxLength(item, field) {
	if (typeof field.isValid.maxLength?.constraint !== "number") return false;
	const value = field.getValue({ item });
	if ([
		void 0,
		"",
		null
	].includes(value)) return true;
	return String(value).length <= field.isValid.maxLength.constraint;
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-pattern.ts
function isValidPattern(item, field) {
	if (field.isValid.pattern?.constraint === void 0) return true;
	try {
		const regexp = new RegExp(field.isValid.pattern.constraint);
		const value = field.getValue({ item });
		if ([
			void 0,
			"",
			null
		].includes(value)) return true;
		return regexp.test(String(value));
	} catch {
		return false;
	}
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-elements.ts
function isValidElements(item, field) {
	const validValues = (field.elements ?? []).map((el) => el.value);
	if (validValues.length === 0) return true;
	const value = field.getValue({ item });
	return [].concat(value).every((v) => validValues.includes(v));
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/get-value-formatted-default.ts
function getValueFormatted$8({ item, field }) {
	return field.getValue({ item });
}
function init_get_value_formatted_default() {
	return (init_get_value_formatted_default = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/email.tsx
function isValidCustom$5(item, field) {
	const value = field.getValue({ item });
	if (![
		void 0,
		"",
		null
	].includes(value) && !emailRegex.test(value)) return __("Value must be a valid email address.");
	return null;
}
var emailRegex, email_default;
function init_email$1() {
	return (init_email$1 = __esmMin((() => {
		init_build_module();
		init_constants();
		init_render_default();
		init_sort_text();
		init_get_value_formatted_default();
		emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		email_default = {
			type: "email",
			render: render$2,
			Edit: "email",
			sort: sort_text_default,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
			validOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_CONTAINS,
				OPERATOR_NOT_CONTAINS,
				OPERATOR_STARTS_WITH,
				OPERATOR_IS_ANY,
				OPERATOR_IS_NONE,
				OPERATOR_IS_NOT_ALL
			],
			format: {},
			getValueFormatted: getValueFormatted$8,
			validate: {
				required: isValidRequired,
				pattern: isValidPattern,
				minLength: isValidMinLength,
				maxLength: isValidMaxLength,
				elements: isValidElements,
				custom: isValidCustom$5
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/sort-number.ts
var sort_number_default;
function init_sort_number() {
	return (init_sort_number = __esmMin((() => {
		sort_number_default = (a, b, direction) => {
			return direction === "asc" ? a - b : b - a;
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-min.ts
function isValidMin(item, field) {
	if (typeof field.isValid.min?.constraint !== "number") return false;
	const value = field.getValue({ item });
	if ([
		void 0,
		"",
		null
	].includes(value)) return true;
	return Number(value) >= field.isValid.min.constraint;
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-max.ts
function isValidMax(item, field) {
	if (typeof field.isValid.max?.constraint !== "number") return false;
	const value = field.getValue({ item });
	if ([
		void 0,
		"",
		null
	].includes(value)) return true;
	return Number(value) <= field.isValid.max.constraint;
}
//#endregion
//#region ../packages/dataviews/src/field-types/integer.tsx
function getValueFormatted$7({ item, field }) {
	let value = field.getValue({ item });
	if (value === null || value === void 0) return "";
	value = Number(value);
	if (!Number.isFinite(value)) return String(value);
	let formatInteger;
	if (field.type !== "integer") formatInteger = format$4;
	else formatInteger = field.format;
	const { separatorThousand } = formatInteger;
	const integerValue = Math.trunc(value);
	if (!separatorThousand) return String(integerValue);
	return String(integerValue).replace(/\B(?=(\d{3})+(?!\d))/g, separatorThousand);
}
function isValidCustom$4(item, field) {
	const value = field.getValue({ item });
	if (![
		void 0,
		"",
		null
	].includes(value) && !Number.isInteger(value)) return __("Value must be an integer.");
	return null;
}
var format$4, integer_default;
function init_integer$1() {
	return (init_integer$1 = __esmMin((() => {
		init_build_module();
		init_constants();
		init_sort_number();
		init_render_default();
		format$4 = { separatorThousand: "," };
		integer_default = {
			type: "integer",
			render: render$2,
			Edit: "integer",
			sort: sort_number_default,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_LESS_THAN,
				OPERATOR_GREATER_THAN,
				OPERATOR_LESS_THAN_OR_EQUAL,
				OPERATOR_GREATER_THAN_OR_EQUAL,
				OPERATOR_BETWEEN
			],
			validOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_LESS_THAN,
				OPERATOR_GREATER_THAN,
				OPERATOR_LESS_THAN_OR_EQUAL,
				OPERATOR_GREATER_THAN_OR_EQUAL,
				OPERATOR_BETWEEN,
				OPERATOR_IS_ANY,
				OPERATOR_IS_NONE,
				OPERATOR_IS_NOT_ALL
			],
			format: format$4,
			getValueFormatted: getValueFormatted$7,
			validate: {
				required: isValidRequired,
				min: isValidMin,
				max: isValidMax,
				elements: isValidElements,
				custom: isValidCustom$4
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/number.tsx
function getValueFormatted$6({ item, field }) {
	let value = field.getValue({ item });
	if (value === null || value === void 0) return "";
	value = Number(value);
	if (!Number.isFinite(value)) return String(value);
	let formatNumber;
	if (field.type !== "number") formatNumber = format$3;
	else formatNumber = field.format;
	const { separatorThousand, separatorDecimal, decimals } = formatNumber;
	const [integerPart, decimalPart] = value.toFixed(decimals).split(".");
	const formattedInteger = separatorThousand ? integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separatorThousand) : integerPart;
	return decimals === 0 ? formattedInteger : formattedInteger + separatorDecimal + decimalPart;
}
function isEmpty(value) {
	return value === "" || value === void 0 || value === null;
}
function isValidCustom$3(item, field) {
	const value = field.getValue({ item });
	if (!isEmpty(value) && !Number.isFinite(value)) return __("Value must be a number.");
	return null;
}
var format$3, number_default;
function init_number$1() {
	return (init_number$1 = __esmMin((() => {
		init_build_module();
		init_constants();
		init_sort_number();
		init_render_default();
		format$3 = {
			separatorThousand: ",",
			separatorDecimal: ".",
			decimals: 2
		};
		number_default = {
			type: "number",
			render: render$2,
			Edit: "number",
			sort: sort_number_default,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_LESS_THAN,
				OPERATOR_GREATER_THAN,
				OPERATOR_LESS_THAN_OR_EQUAL,
				OPERATOR_GREATER_THAN_OR_EQUAL,
				OPERATOR_BETWEEN
			],
			validOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_LESS_THAN,
				OPERATOR_GREATER_THAN,
				OPERATOR_LESS_THAN_OR_EQUAL,
				OPERATOR_GREATER_THAN_OR_EQUAL,
				OPERATOR_BETWEEN,
				OPERATOR_IS_ANY,
				OPERATOR_IS_NONE,
				OPERATOR_IS_NOT_ALL
			],
			format: format$3,
			getValueFormatted: getValueFormatted$6,
			validate: {
				required: isValidRequired,
				min: isValidMin,
				max: isValidMax,
				elements: isValidElements,
				custom: isValidCustom$3
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/text.tsx
var text_default;
function init_text$1() {
	return (init_text$1 = __esmMin((() => {
		init_constants();
		init_render_default();
		init_sort_text();
		init_get_value_formatted_default();
		text_default = {
			type: "text",
			render: render$2,
			Edit: "text",
			sort: sort_text_default,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
			validOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_CONTAINS,
				OPERATOR_NOT_CONTAINS,
				OPERATOR_STARTS_WITH,
				OPERATOR_IS_ANY,
				OPERATOR_IS_NONE,
				OPERATOR_IS_NOT_ALL
			],
			format: {},
			getValueFormatted: getValueFormatted$8,
			validate: {
				required: isValidRequired,
				pattern: isValidPattern,
				minLength: isValidMinLength,
				maxLength: isValidMaxLength,
				elements: isValidElements
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-boundary.ts
function parseDateLike(value) {
	if (!isValid(new Date(value))) return null;
	const parsed = getDate(value);
	return parsed && isValid(parsed) ? parsed.getTime() : null;
}
/**
* Checks a field's value against its `min` or `max` constraint.
*
* `parse` reduces both the value and the constraint to comparable numbers, and
* keeps each field type to its own reading of them: a calendar value never
* satisfies a time-of-day constraint, or the reverse.
*
* @param item     The item holding the value.
* @param field    The field to validate.
* @param boundary Which constraint to check.
* @param parse    Reduces a value to a comparable number, or `null` if it is
*                 not one this field type can read.
* @return         Whether the value is within the constraint.
*/
function validateBoundary(item, field, boundary, parse) {
	const constraint = field.isValid[boundary]?.constraint;
	if (typeof constraint !== "string") return false;
	const value = field.getValue({ item });
	const boundaryValue = Array.isArray(value) ? value[boundary === "min" ? 0 : value.length - 1] : value;
	if (boundaryValue === void 0 || boundaryValue === null || boundaryValue === "") return true;
	const parsedConstraint = parse(constraint);
	const parsedValue = parse(String(boundaryValue));
	if (parsedConstraint === null || parsedValue === null) return false;
	return boundary === "min" ? parsedValue >= parsedConstraint : parsedValue <= parsedConstraint;
}
function isValidMinDate(item, field) {
	return validateBoundary(item, field, "min", parseDateLike);
}
function isValidMaxDate(item, field) {
	return validateBoundary(item, field, "max", parseDateLike);
}
function isValidMinTime(item, field) {
	return validateBoundary(item, field, "min", parseTime);
}
function isValidMaxTime(item, field) {
	return validateBoundary(item, field, "max", parseTime);
}
function init_is_valid_boundary() {
	return (init_is_valid_boundary = __esmMin((() => {
		init_isValid();
		init_build_module$2();
		init_parse_time();
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/datetime.tsx
function getValueFormatted$5({ item, field }) {
	const value = field.getValue({ item });
	if ([
		"",
		void 0,
		null
	].includes(value)) return "";
	let formatDatetime;
	if (field.type !== "datetime") formatDatetime = format$2;
	else formatDatetime = field.format;
	return dateI18n(formatDatetime.datetime, getDate(value));
}
var format$2, sort$6, datetime_default;
function init_datetime$1() {
	return (init_datetime$1 = __esmMin((() => {
		init_build_module$2();
		init_constants();
		init_is_valid_boundary();
		init_render_default();
		format$2 = {
			datetime: getSettings().formats.datetime,
			weekStartsOn: getSettings().l10n.startOfWeek
		};
		sort$6 = (a, b, direction) => {
			const timeA = new Date(a).getTime();
			const timeB = new Date(b).getTime();
			return direction === "asc" ? timeA - timeB : timeB - timeA;
		};
		datetime_default = {
			type: "datetime",
			render: render$2,
			Edit: "datetime",
			sort: sort$6,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [
				"on",
				OPERATOR_NOT_ON,
				OPERATOR_BEFORE,
				OPERATOR_AFTER,
				OPERATOR_BEFORE_INC,
				OPERATOR_AFTER_INC,
				OPERATOR_IN_THE_PAST,
				OPERATOR_OVER
			],
			validOperators: [
				"on",
				OPERATOR_NOT_ON,
				OPERATOR_BEFORE,
				OPERATOR_AFTER,
				OPERATOR_BEFORE_INC,
				OPERATOR_AFTER_INC,
				OPERATOR_IN_THE_PAST,
				OPERATOR_OVER
			],
			format: format$2,
			getValueFormatted: getValueFormatted$5,
			validate: {
				required: isValidRequired,
				elements: isValidElements,
				min: isValidMinDate,
				max: isValidMaxDate
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/date.tsx
function getValueFormatted$4({ item, field }) {
	const value = field.getValue({ item });
	if ([
		"",
		void 0,
		null
	].includes(value)) return "";
	let formatDate;
	if (field.type !== "date") formatDate = format$1;
	else formatDate = field.format;
	return dateI18n(formatDate.date, getDate(value));
}
var format$1, sort$5, date_default;
function init_date$1() {
	return (init_date$1 = __esmMin((() => {
		init_build_module$2();
		init_constants();
		init_is_valid_boundary();
		init_render_default();
		format$1 = {
			date: getSettings().formats.date,
			weekStartsOn: getSettings().l10n.startOfWeek
		};
		sort$5 = (a, b, direction) => {
			const timeA = new Date(a).getTime();
			const timeB = new Date(b).getTime();
			return direction === "asc" ? timeA - timeB : timeB - timeA;
		};
		date_default = {
			type: "date",
			render: render$2,
			Edit: "date",
			sort: sort$5,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [
				"on",
				OPERATOR_NOT_ON,
				OPERATOR_BEFORE,
				OPERATOR_AFTER,
				OPERATOR_BEFORE_INC,
				OPERATOR_AFTER_INC,
				OPERATOR_IN_THE_PAST,
				OPERATOR_OVER,
				OPERATOR_BETWEEN
			],
			validOperators: [
				"on",
				OPERATOR_NOT_ON,
				OPERATOR_BEFORE,
				OPERATOR_AFTER,
				OPERATOR_BEFORE_INC,
				OPERATOR_AFTER_INC,
				OPERATOR_IN_THE_PAST,
				OPERATOR_OVER,
				OPERATOR_BETWEEN
			],
			format: format$1,
			getValueFormatted: getValueFormatted$4,
			validate: {
				required: isValidRequired,
				elements: isValidElements,
				min: isValidMinDate,
				max: isValidMaxDate
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/time.tsx
function toAnchoredDate(secondsSinceMidnight) {
	const time = [
		Math.floor(secondsSinceMidnight / 3600),
		Math.floor(secondsSinceMidnight % 3600 / 60),
		secondsSinceMidnight % 60
	].map((part) => String(part).padStart(2, "0")).join(":");
	return getDate(`${ANCHOR_DATE}T${time}`);
}
function getValueFormatted$3({ item, field }) {
	const secondsSinceMidnight = parseTime(field.getValue({ item }));
	if (secondsSinceMidnight === null) return "";
	let formatTime;
	if (field.type !== "time") formatTime = format;
	else formatTime = field.format;
	return dateI18n(formatTime.time, toAnchoredDate(secondsSinceMidnight));
}
var format, ANCHOR_DATE, sort$4, time_default;
function init_time$1() {
	return (init_time$1 = __esmMin((() => {
		init_build_module$2();
		init_constants();
		init_is_valid_boundary();
		init_parse_time();
		init_render_default();
		format = { time: getSettings().formats.time };
		ANCHOR_DATE = "2000-01-01";
		sort$4 = (a, b, direction) => {
			const timeA = parseTime(a);
			const timeB = parseTime(b);
			if (timeA === null || timeB === null) {
				if (timeA === timeB) return 0;
				return timeA === null ? 1 : -1;
			}
			return direction === "asc" ? timeA - timeB : timeB - timeA;
		};
		time_default = {
			type: "time",
			render: render$2,
			Edit: "time",
			sort: sort$4,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [
				"on",
				OPERATOR_NOT_ON,
				OPERATOR_BEFORE,
				OPERATOR_AFTER,
				OPERATOR_BEFORE_INC,
				OPERATOR_AFTER_INC,
				OPERATOR_BETWEEN
			],
			validOperators: [
				"on",
				OPERATOR_NOT_ON,
				OPERATOR_BEFORE,
				OPERATOR_AFTER,
				OPERATOR_BEFORE_INC,
				OPERATOR_AFTER_INC,
				OPERATOR_BETWEEN
			],
			format,
			getValueFormatted: getValueFormatted$3,
			validate: {
				required: isValidRequired,
				elements: isValidElements,
				min: isValidMinTime,
				max: isValidMaxTime
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-required-for-bool.ts
function isValidRequiredForBool(item, field) {
	return field.getValue({ item }) === true;
}
//#endregion
//#region ../packages/dataviews/src/field-types/boolean.tsx
function getValueFormatted$2({ item, field }) {
	const value = field.getValue({ item });
	if (value === true) return __("True");
	if (value === false) return __("False");
	return "";
}
function isValidCustom$2(item, field) {
	const value = field.getValue({ item });
	if (![
		void 0,
		"",
		null
	].includes(value) && ![true, false].includes(value)) return __("Value must be true, false, or undefined");
	return null;
}
var sort$3, boolean_default;
function init_boolean() {
	return (init_boolean = __esmMin((() => {
		init_build_module();
		init_constants();
		init_render_default();
		sort$3 = (a, b, direction) => {
			const boolA = Boolean(a);
			if (boolA === Boolean(b)) return 0;
			if (direction === "asc") return boolA ? 1 : -1;
			return boolA ? -1 : 1;
		};
		boolean_default = {
			type: "boolean",
			render: render$2,
			Edit: "checkbox",
			sort: sort$3,
			validate: {
				required: isValidRequiredForBool,
				elements: isValidElements,
				custom: isValidCustom$2
			},
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: ["is", OPERATOR_IS_NOT],
			validOperators: ["is", OPERATOR_IS_NOT],
			format: {},
			getValueFormatted: getValueFormatted$2
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/media.tsx
var media_default;
function init_media() {
	return (init_media = __esmMin((() => {
		init_get_value_formatted_default();
		media_default = {
			type: "media",
			render: () => null,
			Edit: null,
			sort: () => 0,
			enableSorting: false,
			enableGlobalSearch: false,
			defaultOperators: [],
			validOperators: [],
			format: {},
			getValueFormatted: getValueFormatted$8,
			validate: {}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/is-valid-required-for-array.ts
function isValidRequiredForArray(item, field) {
	const value = field.getValue({ item });
	return Array.isArray(value) && value.length > 0 && value.every((element) => ![
		void 0,
		"",
		null
	].includes(element));
}
//#endregion
//#region ../packages/dataviews/src/field-types/array.tsx
function getValueFormatted$1({ item, field }) {
	const value = field.getValue({ item });
	return (Array.isArray(value) ? value : []).join(", ");
}
function render$1({ item, field }) {
	return getValueFormatted$1({
		item,
		field
	});
}
function isValidCustom$1(item, field) {
	const value = field.getValue({ item });
	if ([
		void 0,
		"",
		null
	].includes(value)) return null;
	if (!Array.isArray(value)) return __("Value must be an array.");
	if (!value.every((v) => typeof v === "string")) return __("Every value must be a string.");
	return null;
}
var sort$2, array_default;
function init_array$1() {
	return (init_array$1 = __esmMin((() => {
		init_build_module();
		init_constants();
		sort$2 = (a, b, direction) => {
			const arrA = Array.isArray(a) ? a : [];
			const arrB = Array.isArray(b) ? b : [];
			if (arrA.length !== arrB.length) return direction === "asc" ? arrA.length - arrB.length : arrB.length - arrA.length;
			const joinedA = arrA.join(",");
			const joinedB = arrB.join(",");
			return direction === "asc" ? joinedA.localeCompare(joinedB) : joinedB.localeCompare(joinedA);
		};
		array_default = {
			type: "array",
			render: render$1,
			Edit: "array",
			sort: sort$2,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
			validOperators: [
				OPERATOR_IS_ANY,
				OPERATOR_IS_NONE,
				OPERATOR_IS_ALL,
				OPERATOR_IS_NOT_ALL
			],
			format: {},
			getValueFormatted: getValueFormatted$1,
			validate: {
				required: isValidRequiredForArray,
				elements: isValidElements,
				custom: isValidCustom$1
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/password.tsx
function getValueFormatted({ item, field }) {
	return field.getValue({ item }) ? "••••••••" : "";
}
var password_default;
function init_password$1() {
	return (init_password$1 = __esmMin((() => {
		init_render_default();
		password_default = {
			type: "password",
			render: render$2,
			Edit: "password",
			sort: () => 0,
			enableSorting: false,
			enableGlobalSearch: false,
			defaultOperators: [],
			validOperators: [],
			format: {},
			getValueFormatted,
			validate: {
				required: isValidRequired,
				pattern: isValidPattern,
				minLength: isValidMinLength,
				maxLength: isValidMaxLength,
				elements: isValidElements
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/telephone.tsx
var telephone_default;
function init_telephone$1() {
	return (init_telephone$1 = __esmMin((() => {
		init_constants();
		init_render_default();
		init_sort_text();
		init_get_value_formatted_default();
		telephone_default = {
			type: "telephone",
			render: render$2,
			Edit: "telephone",
			sort: sort_text_default,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
			validOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_CONTAINS,
				OPERATOR_NOT_CONTAINS,
				OPERATOR_STARTS_WITH,
				OPERATOR_IS_ANY,
				OPERATOR_IS_NONE,
				OPERATOR_IS_NOT_ALL
			],
			format: {},
			getValueFormatted: getValueFormatted$8,
			validate: {
				required: isValidRequired,
				pattern: isValidPattern,
				minLength: isValidMinLength,
				maxLength: isValidMaxLength,
				elements: isValidElements
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/color.tsx
function render({ item, field }) {
	if (field.hasElements) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RenderFromElements, {
		item,
		field
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 22,
		columnNumber: 10
	}, this);
	const value = getValueFormatted$8({
		item,
		field
	});
	if (!value || !A(value).isValid()) return value;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
		style: {
			display: "flex",
			alignItems: "center",
			gap: "8px"
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", { style: {
			width: "16px",
			height: "16px",
			borderRadius: "50%",
			backgroundColor: value,
			border: "1px solid #ddd",
			flexShrink: 0
		} }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 33,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", { children: value }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 43,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 32,
		columnNumber: 3
	}, this);
}
function isValidCustom(item, field) {
	const value = field.getValue({ item });
	if (![
		void 0,
		"",
		null
	].includes(value) && !A(value).isValid()) return __("Value must be a valid color.");
	return null;
}
var import_jsx_dev_runtime$1, _jsxFileName$1, sort$1, color_default;
function init_color$1() {
	return (init_color$1 = __esmMin((() => {
		init_colord();
		init_build_module();
		init_render_from_elements();
		init_constants();
		init_get_value_formatted_default();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/color.tsx";
		sort$1 = (a, b, direction) => {
			const colorA = A(a);
			const colorB = A(b);
			if (!colorA.isValid() && !colorB.isValid()) return 0;
			if (!colorA.isValid()) return direction === "asc" ? 1 : -1;
			if (!colorB.isValid()) return direction === "asc" ? -1 : 1;
			const hslA = colorA.toHsl();
			const hslB = colorB.toHsl();
			if (hslA.h !== hslB.h) return direction === "asc" ? hslA.h - hslB.h : hslB.h - hslA.h;
			if (hslA.s !== hslB.s) return direction === "asc" ? hslA.s - hslB.s : hslB.s - hslA.s;
			return direction === "asc" ? hslA.l - hslB.l : hslB.l - hslA.l;
		};
		color_default = {
			type: "color",
			render,
			Edit: "color",
			sort: sort$1,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
			validOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_IS_ANY,
				OPERATOR_IS_NONE
			],
			format: {},
			getValueFormatted: getValueFormatted$8,
			validate: {
				required: isValidRequired,
				elements: isValidElements,
				custom: isValidCustom
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/url.tsx
var url_default;
function init_url$1() {
	return (init_url$1 = __esmMin((() => {
		init_constants();
		init_render_default();
		init_sort_text();
		init_get_value_formatted_default();
		url_default = {
			type: "url",
			render: render$2,
			Edit: "url",
			sort: sort_text_default,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
			validOperators: [
				"is",
				OPERATOR_IS_NOT,
				OPERATOR_CONTAINS,
				OPERATOR_NOT_CONTAINS,
				OPERATOR_STARTS_WITH,
				OPERATOR_IS_ANY,
				OPERATOR_IS_NONE,
				OPERATOR_IS_NOT_ALL
			],
			format: {},
			getValueFormatted: getValueFormatted$8,
			validate: {
				required: isValidRequired,
				pattern: isValidPattern,
				minLength: isValidMinLength,
				maxLength: isValidMaxLength,
				elements: isValidElements
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/utils/operators.tsx
/**
* Reduces a value and the value it is compared against to numbers. The filter
* value picks the scale: a time filter compares field values as seconds since
* midnight, anything else compares as timestamps. `parseTime` accepts only
* `HH:mm[:ss]`, so no date or datetime is read as a time.
*
* A field value that does not parse on a time filter's scale becomes `NaN`:
* every ordering operator is false for it, and `notOn` is true — matching how
* `is`/`isNot` treat a missing value.
*
* @param fieldValue  The item's value.
* @param filterValue The value it is compared against.
* @return            Both values as comparable numbers.
*/
function toComparableTemporals(fieldValue, filterValue) {
	const filterTime = parseTime(filterValue);
	if (filterTime !== null) return [parseTime(fieldValue) ?? NaN, filterTime];
	return [getDate(fieldValue).getTime(), getDate(filterValue).getTime()];
}
/**
* Calculates a date offset from now.
*
* @param value Number of units to offset.
* @param unit  Unit of time to offset (days, weeks, months, years).
* @return      Date offset from now.
*/
function getRelativeDate(value, unit) {
	switch (unit) {
		case "days": return subDays(/* @__PURE__ */ new Date(), value);
		case "weeks": return subWeeks(/* @__PURE__ */ new Date(), value);
		case "months": return subMonths(/* @__PURE__ */ new Date(), value);
		case "years": return subYears(/* @__PURE__ */ new Date(), value);
		default: return /* @__PURE__ */ new Date();
	}
}
var import_jsx_dev_runtime, _jsxFileName, filterTextWrappers, isNoneOperatorDefinition, OPERATORS, getOperatorByName, getAllOperatorNames, isSingleSelectionOperator, isRegisteredOperator;
function init_operators() {
	return (init_operators = __esmMin((() => {
		init_subDays(), init_subWeeks(), init_subMonths(), init_subYears();
		init_build_module();
		init_create_interpolate_element();
		init_build_module$2();
		init_parse_time();
		init_constants();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/utils/operators.tsx";
		filterTextWrappers = {
			Name: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "dataviews-filters__summary-filter-text-name" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 8
			}, void 0),
			Value: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "dataviews-filters__summary-filter-text-value" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 9
			}, void 0)
		};
		isNoneOperatorDefinition = {
			label: __("Is none of"),
			filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is none of: </Name><Value>%2$s</Value>"), filter.name, activeElements.map((element) => element.label).join(", ")), filterTextWrappers),
			filter: ((item, field, filterValue) => {
				if (!filterValue?.length) return true;
				const fieldValue = field.getValue({ item });
				if (Array.isArray(fieldValue)) return !filterValue.some((fv) => fieldValue.includes(fv));
				else if (typeof fieldValue === "string" || typeof fieldValue === "number") return !filterValue.includes(fieldValue);
				return false;
			}),
			selection: "multi"
		};
		OPERATORS = [
			{
				name: OPERATOR_IS_ANY,
				label: __("Includes"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s includes: </Name><Value>%2$s</Value>"), filter.name, activeElements.map((element) => element.label).join(", ")), filterTextWrappers),
				filter(item, field, filterValue) {
					if (!filterValue?.length) return true;
					const fieldValue = field.getValue({ item });
					if (Array.isArray(fieldValue)) return filterValue.some((fv) => fieldValue.includes(fv));
					else if (typeof fieldValue === "string" || typeof fieldValue === "number") return filterValue.includes(fieldValue);
					return false;
				},
				selection: "multi"
			},
			{
				name: OPERATOR_IS_NONE,
				...isNoneOperatorDefinition
			},
			{
				name: OPERATOR_IS_ALL,
				label: __("Includes all"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s includes all: </Name><Value>%2$s</Value>"), filter.name, activeElements.map((element) => element.label).join(", ")), filterTextWrappers),
				filter(item, field, filterValue) {
					if (!filterValue?.length) return true;
					const fieldValue = field.getValue({ item });
					if (!Array.isArray(fieldValue)) return false;
					return filterValue.every((value) => fieldValue.includes(value));
				},
				selection: "multi"
			},
			{
				name: OPERATOR_IS_NOT_ALL,
				...isNoneOperatorDefinition
			},
			{
				name: OPERATOR_BETWEEN,
				label: __("Between (inc)"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s between (inc): </Name><Value>%2$s and %3$s</Value>"), filter.name, activeElements[0].label[0], activeElements[0].label[1]), filterTextWrappers),
				filter(item, field, filterValue) {
					if (!Array.isArray(filterValue) || filterValue.length !== 2 || filterValue.includes(void 0) || filterValue.includes("") || filterValue.includes(null)) return true;
					const fieldValue = field.getValue({ item });
					const [min, max] = filterValue.map(parseTime);
					if (min !== null && max !== null) {
						const value = parseTime(fieldValue);
						return value !== null && value >= min && value <= max;
					}
					if (typeof fieldValue === "number" || fieldValue instanceof Date || typeof fieldValue === "string") return fieldValue >= filterValue[0] && fieldValue <= filterValue[1];
					return false;
				},
				selection: "custom"
			},
			{
				name: OPERATOR_IN_THE_PAST,
				label: __("In the past"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is in the past: </Name><Value>%2$s</Value>"), filter.name, `${activeElements[0].value.value} ${activeElements[0].value.unit}`), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue?.value === void 0 || filterValue?.unit === void 0) return true;
					const targetDate = getRelativeDate(filterValue.value, filterValue.unit);
					const fieldValue = getDate(field.getValue({ item }));
					return fieldValue >= targetDate && fieldValue <= /* @__PURE__ */ new Date();
				},
				selection: "custom"
			},
			{
				name: OPERATOR_OVER,
				label: __("Over"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is over: </Name><Value>%2$s</Value>"), filter.name, `${activeElements[0].value.value} ${activeElements[0].value.unit}`), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue?.value === void 0 || filterValue?.unit === void 0) return true;
					const targetDate = getRelativeDate(filterValue.value, filterValue.unit);
					return getDate(field.getValue({ item })) < targetDate;
				},
				selection: "custom"
			},
			{
				name: "is",
				label: __("Is"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					return filterValue === field.getValue({ item }) || filterValue === void 0;
				},
				selection: "single"
			},
			{
				name: OPERATOR_IS_NOT,
				label: __("Is not"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is not: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					return filterValue !== field.getValue({ item });
				},
				selection: "single"
			},
			{
				name: OPERATOR_LESS_THAN,
				label: __("Less than"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is less than: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					return field.getValue({ item }) < filterValue;
				},
				selection: "single"
			},
			{
				name: OPERATOR_GREATER_THAN,
				label: __("Greater than"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is greater than: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					return field.getValue({ item }) > filterValue;
				},
				selection: "single"
			},
			{
				name: OPERATOR_LESS_THAN_OR_EQUAL,
				label: __("Less than or equal"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is less than or equal to: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					return field.getValue({ item }) <= filterValue;
				},
				selection: "single"
			},
			{
				name: OPERATOR_GREATER_THAN_OR_EQUAL,
				label: __("Greater than or equal"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is greater than or equal to: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					return field.getValue({ item }) >= filterValue;
				},
				selection: "single"
			},
			{
				name: OPERATOR_BEFORE,
				label: __("Before"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is before: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const [fieldTemporal, filterTemporal] = toComparableTemporals(field.getValue({ item }), filterValue);
					return fieldTemporal < filterTemporal;
				},
				selection: "single"
			},
			{
				name: OPERATOR_AFTER,
				label: __("After"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is after: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const [fieldTemporal, filterTemporal] = toComparableTemporals(field.getValue({ item }), filterValue);
					return fieldTemporal > filterTemporal;
				},
				selection: "single"
			},
			{
				name: OPERATOR_BEFORE_INC,
				label: __("Before (inc)"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is on or before: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const [fieldTemporal, filterTemporal] = toComparableTemporals(field.getValue({ item }), filterValue);
					return fieldTemporal <= filterTemporal;
				},
				selection: "single"
			},
			{
				name: OPERATOR_AFTER_INC,
				label: __("After (inc)"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is on or after: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const [fieldTemporal, filterTemporal] = toComparableTemporals(field.getValue({ item }), filterValue);
					return fieldTemporal >= filterTemporal;
				},
				selection: "single"
			},
			{
				name: OPERATOR_CONTAINS,
				label: __("Contains"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s contains: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const fieldValue = field.getValue({ item });
					return typeof fieldValue === "string" && filterValue && fieldValue.toLowerCase().includes(String(filterValue).toLowerCase());
				},
				selection: "single"
			},
			{
				name: OPERATOR_NOT_CONTAINS,
				label: __("Doesn't contain"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s doesn't contain: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const fieldValue = field.getValue({ item });
					return typeof fieldValue === "string" && filterValue && !fieldValue.toLowerCase().includes(String(filterValue).toLowerCase());
				},
				selection: "single"
			},
			{
				name: OPERATOR_STARTS_WITH,
				label: __("Starts with"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s starts with: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const fieldValue = field.getValue({ item });
					return typeof fieldValue === "string" && filterValue && fieldValue.toLowerCase().startsWith(String(filterValue).toLowerCase());
				},
				selection: "single"
			},
			{
				name: "on",
				label: __("On"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const [fieldTemporal, filterTemporal] = toComparableTemporals(field.getValue({ item }), filterValue);
					return fieldTemporal === filterTemporal;
				},
				selection: "single"
			},
			{
				name: OPERATOR_NOT_ON,
				label: __("Not on"),
				filterText: (filter, activeElements) => create_interpolate_element_default(sprintf(__("<Name>%1$s is not: </Name><Value>%2$s</Value>"), filter.name, activeElements[0].label), filterTextWrappers),
				filter(item, field, filterValue) {
					if (filterValue === void 0) return true;
					const [fieldTemporal, filterTemporal] = toComparableTemporals(field.getValue({ item }), filterValue);
					return fieldTemporal !== filterTemporal;
				},
				selection: "single"
			}
		];
		getOperatorByName = (name) => OPERATORS.find((op) => op.name === name);
		getAllOperatorNames = () => OPERATORS.map((op) => op.name);
		isSingleSelectionOperator = (name) => OPERATORS.filter((op) => op.selection === "single").some((op) => op.name === name);
		isRegisteredOperator = (name) => OPERATORS.some((op) => op.name === name);
		try {
			getOperatorByName.__docgenInfo = {
				"description": "",
				"displayName": "getOperatorByName",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/utils/operators.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			isSingleSelectionOperator.__docgenInfo = {
				"description": "",
				"displayName": "isSingleSelectionOperator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/utils/operators.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			isRegisteredOperator.__docgenInfo = {
				"description": "",
				"displayName": "isRegisteredOperator",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/utils/operators.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/no-type.tsx
var sort, no_type_default;
function init_no_type() {
	return (init_no_type = __esmMin((() => {
		init_constants();
		init_operators();
		init_render_default();
		init_sort_text();
		init_sort_number();
		init_get_value_formatted_default();
		sort = (a, b, direction) => {
			if (typeof a === "number" && typeof b === "number") return sort_number_default(a, b, direction);
			return sort_text_default(a, b, direction);
		};
		no_type_default = {
			render: render$2,
			Edit: null,
			sort,
			enableSorting: true,
			enableGlobalSearch: false,
			defaultOperators: ["is", OPERATOR_IS_NOT],
			validOperators: getAllOperatorNames(),
			format: {},
			getValueFormatted: getValueFormatted$8,
			validate: {
				required: isValidRequired,
				elements: isValidElements
			}
		};
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/get-is-valid.ts
function supportsNumericRangeConstraint(type) {
	return type === "integer" || type === "number";
}
function supportsStringRangeConstraint(type) {
	return type === "date" || type === "datetime" || type === "time";
}
function normalizeRangeRule(value, fieldType, key) {
	const validator = fieldType.validate[key];
	if (validator && (typeof value === "number" && supportsNumericRangeConstraint(fieldType.type) || typeof value === "string" && supportsStringRangeConstraint(fieldType.type))) return {
		constraint: value,
		validate: validator
	};
}
function getIsValid(field, fieldType) {
	const rules = field.isValid;
	let required;
	if (rules?.required === true && fieldType.validate.required !== void 0) required = {
		constraint: true,
		validate: fieldType.validate.required
	};
	let elements;
	if ((rules?.elements === true || rules?.elements === void 0 && (!!field.elements || !!field.getElements)) && fieldType.validate.elements !== void 0) elements = {
		constraint: true,
		validate: fieldType.validate.elements
	};
	const min = normalizeRangeRule(rules?.min, fieldType, "min");
	const max = normalizeRangeRule(rules?.max, fieldType, "max");
	const minLengthValue = rules?.minLength;
	let minLength;
	if (typeof minLengthValue === "number" && fieldType.validate.minLength !== void 0) minLength = {
		constraint: minLengthValue,
		validate: fieldType.validate.minLength
	};
	const maxLengthValue = rules?.maxLength;
	let maxLength;
	if (typeof maxLengthValue === "number" && fieldType.validate.maxLength !== void 0) maxLength = {
		constraint: maxLengthValue,
		validate: fieldType.validate.maxLength
	};
	const patternValue = rules?.pattern;
	let pattern;
	if (patternValue !== void 0 && fieldType.validate.pattern !== void 0) pattern = {
		constraint: patternValue,
		validate: fieldType.validate.pattern
	};
	const custom = rules?.custom ?? fieldType.validate.custom;
	return {
		required,
		elements,
		min,
		max,
		minLength,
		maxLength,
		pattern,
		custom
	};
}
function init_get_is_valid() {
	return (init_get_is_valid = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/get-filter.ts
function getFilter(fieldType) {
	return fieldType.validOperators.reduce((accumulator, operator) => {
		const operatorObj = getOperatorByName(operator);
		if (operatorObj?.filter) accumulator[operator] = operatorObj.filter;
		return accumulator;
	}, {});
}
function init_get_filter() {
	return (init_get_filter = __esmMin((() => {
		init_operators();
	})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/utils/get-format.ts
function getFormat(field, fieldType) {
	return {
		...fieldType.format,
		...field.format
	};
}
function init_get_format() {
	return (init_get_format = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dataviews/src/field-types/index.tsx
/**
*
* @param {FieldTypeName} type The field type definition to get.
*
* @return A field type definition.
*/
function getFieldTypeByName(type) {
	const found = [
		email_default,
		integer_default,
		number_default,
		text_default,
		datetime_default,
		date_default,
		time_default,
		boolean_default,
		media_default,
		array_default,
		password_default,
		telephone_default,
		color_default,
		url_default
	].find((fieldType) => fieldType?.type === type);
	if (!!found) return found;
	return no_type_default;
}
/**
* Apply default values and normalize the fields config.
*
* @param fields Fields config.
* @return Normalized fields config.
*/
function normalizeFields(fields) {
	return fields.map((field) => {
		const fieldType = getFieldTypeByName(field.type);
		const getValue = field.getValue || getValueFromId(field.id);
		const sort = function(a, b, direction) {
			const aValue = getValue({ item: a });
			const bValue = getValue({ item: b });
			return field.sort ? field.sort(aValue, bValue, direction) : fieldType.sort(aValue, bValue, direction);
		};
		return {
			id: field.id,
			label: field.label || field.id,
			header: field.header || field.label || field.id,
			description: field.description,
			placeholder: field.placeholder,
			getValue,
			setValue: field.setValue || setValueFromId(field.id),
			elements: field.elements,
			getElements: field.getElements,
			hasElements: hasElements(field),
			isVisible: field.isVisible,
			isDisabled: typeof field.isDisabled === "function" ? field.isDisabled : () => !!field.isDisabled,
			enableHiding: field.enableHiding ?? true,
			readOnly: field.readOnly ?? false,
			type: fieldType.type,
			render: field.render ?? fieldType.render,
			Edit: getControl(field, fieldType.Edit),
			sort,
			enableSorting: field.enableSorting ?? fieldType.enableSorting,
			enableGlobalSearch: field.enableGlobalSearch ?? fieldType.enableGlobalSearch,
			isValid: getIsValid(field, fieldType),
			filterBy: getFilterBy(field, fieldType.defaultOperators, fieldType.validOperators),
			filter: getFilter(fieldType),
			format: getFormat(field, fieldType),
			getValueFormatted: field.getValueFormatted ?? fieldType.getValueFormatted
		};
	});
}
function init_field_types() {
	return (init_field_types = __esmMin((() => {
		init_dataform_controls();
		init_get_filter_by();
		init_get_value_from_id();
		init_set_value_from_id();
		init_email$1();
		init_integer$1();
		init_number$1();
		init_text$1();
		init_datetime$1();
		init_date$1();
		init_time$1();
		init_boolean();
		init_media();
		init_array$1();
		init_password$1();
		init_telephone$1();
		init_color$1();
		init_url$1();
		init_no_type();
		init_get_is_valid();
		init_get_filter();
		init_get_format();
		try {
			normalizeFields.__docgenInfo = {
				"description": "Apply default values and normalize the fields config.",
				"displayName": "fieldtypes",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/dataviews/src/field-types/index.tsx",
				"methods": [],
				"props": {},
				"tags": {
					"param": "fields Fields config.",
					"return": "Normalized fields config."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { sortValues as C, sortLabels as S, useElements as T, OPERATOR_IS_NOT_ALL as _, isRegisteredOperator as a, sortArrows as b, init_date as c, LAYOUT_LIST as d, LAYOUT_PICKER_ACTIVITY as f, MEDIA_ASPECT_RATIOS as g, LAYOUT_TABLE as h, init_operators as i, LAYOUT_ACTIVITY as l, LAYOUT_PICKER_TABLE as m, normalizeFields as n, isSingleSelectionOperator as o, LAYOUT_PICKER_GRID as p, getOperatorByName as r, DateControl as s, init_field_types as t, LAYOUT_GRID as u, SORTING_DIRECTIONS as v, init_use_elements as w, sortIcons as x, init_constants as y };
