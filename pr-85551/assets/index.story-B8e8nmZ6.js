import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_create_higher_order_component, t as createHigherOrderComponent } from "./create-higher-order-component-C1oHQdWH.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useFocusOutside, t as init_use_focus_outside } from "./use-focus-outside-CUKAKz_B.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as withIgnoreIMEEvents } from "./with-ignore-ime-events-BFiL1WqY.js";
import { r as init_build_module$1 } from "./build-module-LJKyBiy6.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { r as speak, t as init_build_module$2 } from "./build-module-DsAeWnrG.js";
import { t as close_small_default } from "./close-small-BRQ3N94m.js";
import { n as useControlledValue, t as init_use_controlled_value } from "./use-controlled-value-B56JrsG0.js";
import { n as init_component, t as Flex } from "./component-DsRVYDtI.js";
import { n as init_component$1, t as FlexBlock } from "./component-CmmRIgcK.js";
import { n as init_base_control, t as BaseControl } from "./base-control-pNrjopap.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_strings, r as normalizeTextString } from "./strings-Cv6Mm5bk.js";
import { i as init_token_input, n as init_suggestions_list, r as TokenInput, t as SuggestionsList } from "./suggestions-list-DBMZ0BM3.js";
import { n as init_spinner, t as Spinner } from "./spinner-CDLmDI4U.js";
import { r as init_build_module$3 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/higher-order/with-focus-outside/index.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, with_focus_outside_default;
function init_with_focus_outside() {
	return (init_with_focus_outside = __esmMin((() => {
		init_react();
		init_create_higher_order_component(), init_use_focus_outside();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/higher-order/with-focus-outside/index.tsx";
		with_focus_outside_default = createHigherOrderComponent((WrappedComponent) => function WithFocusOutside(props) {
			const [handleFocusOutside, setHandleFocusOutside] = (0, import_react.useState)(void 0);
			const bindFocusOutsideHandler = (0, import_react.useCallback)((node) => setHandleFocusOutside(() => node?.handleFocusOutside ? node.handleFocusOutside.bind(node) : void 0), []);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
				...useFocusOutside(handleFocusOutside),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(WrappedComponent, {
					ref: bindFocusOutsideHandler,
					...props
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 28,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 5
			}, this);
		}, "withFocusOutside");
	})))();
}
//#endregion
//#region ../packages/components/src/combobox-control/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = { "input-wrapper": "_input-wrapper_nq9ld_46" };
	})))();
}
//#endregion
//#region ../packages/components/src/combobox-control/index.tsx
/**
* `ComboboxControl` is an enhanced version of a [`SelectControl`](../select-control/README.md) with the addition of
* being able to search for options using a search input.
*
* ```jsx
* import { ComboboxControl } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const options = [
* 	{
* 		value: 'small',
* 		label: 'Small',
* 	},
* 	{
* 		value: 'normal',
* 		label: 'Normal',
* 		disabled: true,
* 	},
* 	{
* 		value: 'large',
* 		label: 'Large',
* 		disabled: false,
* 	},
* ];
*
* function MyComboboxControl() {
* 	const [ fontSize, setFontSize ] = useState();
* 	const [ filteredOptions, setFilteredOptions ] = useState( options );
* 	return (
* 		<ComboboxControl
* 			label="Font Size"
* 			value={ fontSize }
* 			onChange={ setFontSize }
* 			options={ filteredOptions }
* 			onFilterValueChange={ ( inputValue ) =>
* 				setFilteredOptions(
* 					options.filter( ( option ) =>
* 						option.label
* 							.toLowerCase()
* 							.startsWith( inputValue.toLowerCase() )
* 					)
* 				)
* 			}
* 		/>
* 	);
* }
* ```
*/
function ComboboxControl(props) {
	const { value: valueProp, label, options, onChange: onChangeProp, onFilterValueChange = noop, hideLabelFromVision, help, allowReset = true, className, isLoading = false, messages = { selected: __("Item selected.") }, __experimentalRenderItem, expandOnFocus = true, placeholder } = props;
	const [value, setValue] = useControlledValue({
		value: valueProp,
		onChange: onChangeProp
	});
	const currentOption = options.find((option) => option.value === value);
	const currentLabel = currentOption?.label ?? "";
	const instanceId = use_instance_id_default(ComboboxControl, "combobox-control");
	const [selectedSuggestion, setSelectedSuggestion] = (0, import_react.useState)(currentOption || null);
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const [inputHasFocus, setInputHasFocus] = (0, import_react.useState)(false);
	const [inputValue, setInputValue] = (0, import_react.useState)("");
	const inputContainer = (0, import_react.useRef)(null);
	const matchingSuggestions = (0, import_react.useMemo)(() => {
		const startsWithMatch = [];
		const containsMatch = [];
		const match = normalizeTextString(inputValue);
		options.forEach((option) => {
			const index = normalizeTextString(option.label).indexOf(match);
			if (index === 0) startsWithMatch.push(option);
			else if (index > 0) containsMatch.push(option);
		});
		return startsWithMatch.concat(containsMatch);
	}, [inputValue, options]);
	const onSuggestionSelected = (newSelectedSuggestion) => {
		if (newSelectedSuggestion.disabled) return;
		setValue(newSelectedSuggestion.value);
		speak(messages.selected, "assertive");
		setSelectedSuggestion(newSelectedSuggestion);
		setInputValue("");
		setIsExpanded(false);
	};
	const handleArrowNavigation = (offset = 1) => {
		let nextIndex = getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions) + offset;
		if (nextIndex < 0) nextIndex = matchingSuggestions.length - 1;
		else if (nextIndex >= matchingSuggestions.length) nextIndex = 0;
		setSelectedSuggestion(matchingSuggestions[nextIndex]);
		setIsExpanded(true);
	};
	const onKeyDown = withIgnoreIMEEvents((event) => {
		let preventDefault = false;
		if (event.defaultPrevented) return;
		switch (event.code) {
			case "Enter":
				if (selectedSuggestion) {
					onSuggestionSelected(selectedSuggestion);
					preventDefault = true;
				}
				break;
			case "ArrowUp":
				handleArrowNavigation(-1);
				preventDefault = true;
				break;
			case "ArrowDown":
				handleArrowNavigation(1);
				preventDefault = true;
				break;
			case "Escape":
				setIsExpanded(false);
				setSelectedSuggestion(null);
				preventDefault = true;
		}
		if (preventDefault) event.preventDefault();
	});
	const onBlur = () => {
		setInputHasFocus(false);
	};
	const onFocus = () => {
		setInputHasFocus(true);
		if (expandOnFocus) setIsExpanded(true);
		onFilterValueChange("");
		setInputValue("");
	};
	const onClick = () => {
		setIsExpanded(true);
	};
	const onFocusOutside = () => {
		setIsExpanded(false);
	};
	const onInputChange = (event) => {
		const text = event.value;
		setInputValue(text);
		onFilterValueChange(text);
		if (inputHasFocus) setIsExpanded(true);
	};
	const handleOnReset = () => {
		setValue(null);
		inputContainer.current?.focus();
	};
	const handleResetStopPropagation = (event) => {
		event.stopPropagation();
	};
	(0, import_react.useEffect)(() => {
		const hasMatchingSuggestions = matchingSuggestions.length > 0;
		const hasSelectedMatchingSuggestions = getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions) > 0;
		if (hasMatchingSuggestions && !hasSelectedMatchingSuggestions) setSelectedSuggestion(matchingSuggestions[0]);
	}, [matchingSuggestions, selectedSuggestion]);
	(0, import_react.useEffect)(() => {
		const hasMatchingSuggestions = matchingSuggestions.length > 0;
		if (isExpanded) {
			const message = hasMatchingSuggestions ? sprintf(_n("%d result found, use up and down arrow keys to navigate.", "%d results found, use up and down arrow keys to navigate.", matchingSuggestions.length), matchingSuggestions.length) : __("No results.");
			speak(message, "polite");
		}
	}, [matchingSuggestions, isExpanded]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DetectOutside, {
		onFocusOutside,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl, {
			className: clsx(className, "components-combobox-control"),
			label,
			id: `components-form-token-input-${instanceId}`,
			hideLabelFromVision,
			help,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-combobox-control__suggestions-container",
				tabIndex: -1,
				onKeyDown,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Flex, {
					className: style_module_default["input-wrapper"],
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FlexBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TokenInput, {
							className: "components-combobox-control__input",
							instanceId,
							ref: inputContainer,
							placeholder,
							value: isExpanded ? inputValue : currentLabel,
							onFocus,
							onBlur,
							onClick,
							isExpanded,
							selectedSuggestionIndex: getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions),
							onChange: onInputChange,
							"aria-describedby": help ? `components-form-token-input-${instanceId}__help` : void 0
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 323,
							columnNumber: 8
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 322,
							columnNumber: 7
						}, this),
						isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Spinner, {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 346,
							columnNumber: 22
						}, this),
						allowReset && Boolean(value) && !isExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
							size: "small",
							icon: close_small_default,
							onClick: handleOnReset,
							onKeyDown: handleResetStopPropagation,
							label: __("Reset")
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 348,
							columnNumber: 8
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 321,
					columnNumber: 6
				}, this), isExpanded && !isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(SuggestionsList, {
					instanceId,
					match: {
						label: inputValue,
						value: ""
					},
					displayTransform: (suggestion) => suggestion.label,
					suggestions: matchingSuggestions,
					selectedIndex: getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions),
					onHover: setSelectedSuggestion,
					onSelect: onSuggestionSelected,
					scrollIntoView: true,
					__experimentalRenderItem
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 358,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 316,
				columnNumber: 5
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 309,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 308,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, noop, DetectOutside, getIndexOfMatchingSuggestion;
function init_combobox_control() {
	return (init_combobox_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_use_instance_id();
		init_build_module$2();
		init_build_module$3();
		init_build_module$1();
		init_token_input();
		init_suggestions_list();
		init_base_control();
		init_button();
		init_component(), init_component$1();
		init_with_focus_outside();
		init_use_controlled_value();
		init_strings();
		init_spinner();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/combobox-control/index.tsx";
		noop = () => {};
		DetectOutside = with_focus_outside_default(class DetectOutsideComponent extends import_react.Component {
			handleFocusOutside(event) {
				this.props.onFocusOutside(event);
			}
			render() {
				return this.props.children;
			}
		});
		getIndexOfMatchingSuggestion = (selectedSuggestion, matchingSuggestions) => selectedSuggestion === null ? -1 : matchingSuggestions.indexOf(selectedSuggestion);
		try {
			ComboboxControl.__docgenInfo = {
				"description": "`ComboboxControl` is an enhanced version of a [`SelectControl`](../select-control/README.md) with the addition of\nbeing able to search for options using a search input.\n\n```jsx\nimport { ComboboxControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst options = [\n	{\n		value: 'small',\n		label: 'Small',\n	},\n	{\n		value: 'normal',\n		label: 'Normal',\n		disabled: true,\n	},\n	{\n		value: 'large',\n		label: 'Large',\n		disabled: false,\n	},\n];\n\nfunction MyComboboxControl() {\n	const [ fontSize, setFontSize ] = useState();\n	const [ filteredOptions, setFilteredOptions ] = useState( options );\n	return (\n		<ComboboxControl\n			label=\"Font Size\"\n			value={ fontSize }\n			onChange={ setFontSize }\n			options={ filteredOptions }\n			onFilterValueChange={ ( inputValue ) =>\n				setFilteredOptions(\n					options.filter( ( option ) =>\n						option.label\n							.toLowerCase()\n							.startsWith( inputValue.toLowerCase() )\n					)\n				)\n			}\n		/>\n	);\n}\n```",
				"displayName": "ComboboxControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/combobox-control/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, a label will be generated using label property as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default in a future version.\n@deprecated Default behavior since WordPress 7.0. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"help": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/base-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",
						"name": "help",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"__experimentalRenderItem": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"allowReset": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Customizable UI messages.",
						"name": "messages",
						"required": false,
						"tags": {},
						"type": { "name": "{ selected: string; }" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Function called with the selected value changes.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: ComboboxControlValue) => void)" }
					},
					"onFilterValueChange": {
						"defaultValue": { "value": "noop" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The options that can be chosen from.",
						"name": "options",
						"required": true,
						"tags": {},
						"type": { "name": "ComboboxControlOption[]" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If passed, the combobox input will show a placeholder string if no values are present.",
						"name": "placeholder",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isLoading": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/combobox-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show a spinner (and hide the suggestions dropdown) while data\nabout the matching suggestions (ie the `options` prop) is loading",
						"name": "isLoading",
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
//#region ../packages/components/src/combobox-control/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, countries, meta, mapCountryOption, countryOptions, Template, Default, WithCustomRenderItem, WithDisabledOptions, optionsWithDisabledOptions, NotExpandOnFocus;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_combobox_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/combobox-control/stories/index.story.tsx";
		countries = [
			{
				name: "Afghanistan",
				code: "AF"
			},
			{
				name: "Åland Islands",
				code: "AX"
			},
			{
				name: "Albania",
				code: "AL"
			},
			{
				name: "Algeria",
				code: "DZ"
			},
			{
				name: "American Samoa",
				code: "AS"
			},
			{
				name: "Andorra",
				code: "AD"
			},
			{
				name: "Angola",
				code: "AO"
			},
			{
				name: "Anguilla",
				code: "AI"
			},
			{
				name: "Antarctica",
				code: "AQ"
			},
			{
				name: "Antigua and Barbuda",
				code: "AG"
			},
			{
				name: "Argentina",
				code: "AR"
			},
			{
				name: "Armenia",
				code: "AM"
			},
			{
				name: "Aruba",
				code: "AW"
			},
			{
				name: "Australia",
				code: "AU"
			},
			{
				name: "Austria",
				code: "AT"
			},
			{
				name: "Azerbaijan",
				code: "AZ"
			}
		];
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Selection & Input/Common/ComboboxControl",
			id: "components-comboboxcontrol",
			component: ComboboxControl,
			argTypes: { value: { control: false } },
			args: {
				onChange: fn(),
				onFilterValueChange: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by `SearchableSelectControl` in `@wordpress/ui`, but continue using for now."
				}
			}
		};
		mapCountryOption = (country) => ({
			value: country.code,
			label: country.name
		});
		countryOptions = countries.map(mapCountryOption);
		Template = ({ onChange, ...args }) => {
			const [value, setValue] = (0, import_react.useState)(null);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ComboboxControl, {
				...args,
				value,
				onChange: (...changeArgs) => {
					setValue(...changeArgs);
					onChange?.(...changeArgs);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			label: "Country",
			options: countryOptions,
			help: "Help text to describe the control."
		};
		WithCustomRenderItem = Template.bind({});
		WithCustomRenderItem.args = {
			...Default.args,
			label: "Author",
			options: [
				{
					value: "parsley",
					label: "Parsley Montana",
					age: 48,
					country: "Germany"
				},
				{
					value: "cabbage",
					label: "Cabbage New York",
					age: 44,
					country: "France"
				},
				{
					value: "jake",
					label: "Jake Weary",
					age: 41,
					country: "United Kingdom"
				}
			],
			__experimentalRenderItem: ({ item }) => {
				const { label, age, country } = item;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: { marginBottom: "0.2rem" },
					children: label
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
					"Age: ",
					age,
					", Country: ",
					country
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 4
				}, void 0);
			}
		};
		WithDisabledOptions = Template.bind({});
		optionsWithDisabledOptions = countryOptions.map((option, index) => ({
			...option,
			disabled: index % 3 === 0
		}));
		WithDisabledOptions.args = {
			...Default.args,
			options: optionsWithDisabledOptions
		};
		NotExpandOnFocus = Template.bind({});
		NotExpandOnFocus.args = {
			...Default.args,
			options: countryOptions,
			expandOnFocus: false
		};
		try {
			WithCustomRenderItem.__docgenInfo = {
				"description": "The rendered output of each suggestion can be customized by passing a\nrender function to the `__experimentalRenderItem` prop. (This is still an experimental feature\nand is subject to change.)",
				"displayName": "WithCustomRenderItem",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/combobox-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithDisabledOptions.__docgenInfo = {
				"description": "You can disable options in the list\nby setting the `disabled` property to true\nfor individual items in the option object.",
				"displayName": "WithDisabledOptions",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/combobox-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			NotExpandOnFocus.__docgenInfo = {
				"description": "By default, the combobox expands when focused.\nYou can disable this behavior by setting the `expandOnFocus` prop to `false`.\nThis is useful when you want to show the suggestions only when the user interacts with the input.",
				"displayName": "NotExpandOnFocus",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/combobox-control/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<ComboboxControlProps['value']>(null);\n  return <>\n            <ComboboxControl {...args} value={value} onChange={(...changeArgs) => {\n      setValue(...changeArgs);\n      onChange?.(...changeArgs);\n    }} />\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithCustomRenderItem.parameters = {
			...WithCustomRenderItem.parameters,
			docs: {
				...WithCustomRenderItem.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<ComboboxControlProps['value']>(null);\n  return <>\n            <ComboboxControl {...args} value={value} onChange={(...changeArgs) => {\n      setValue(...changeArgs);\n      onChange?.(...changeArgs);\n    }} />\n        </>;\n}",
					...WithCustomRenderItem.parameters?.docs?.source
				},
				description: {
					story: "The rendered output of each suggestion can be customized by passing a\nrender function to the `__experimentalRenderItem` prop. (This is still an experimental feature\nand is subject to change.)",
					...WithCustomRenderItem.parameters?.docs?.description
				}
			}
		};
		WithDisabledOptions.parameters = {
			...WithDisabledOptions.parameters,
			docs: {
				...WithDisabledOptions.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<ComboboxControlProps['value']>(null);\n  return <>\n            <ComboboxControl {...args} value={value} onChange={(...changeArgs) => {\n      setValue(...changeArgs);\n      onChange?.(...changeArgs);\n    }} />\n        </>;\n}",
					...WithDisabledOptions.parameters?.docs?.source
				},
				description: {
					story: "You can disable options in the list\nby setting the `disabled` property to true\nfor individual items in the option object.",
					...WithDisabledOptions.parameters?.docs?.description
				}
			}
		};
		NotExpandOnFocus.parameters = {
			...NotExpandOnFocus.parameters,
			docs: {
				...NotExpandOnFocus.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<ComboboxControlProps['value']>(null);\n  return <>\n            <ComboboxControl {...args} value={value} onChange={(...changeArgs) => {\n      setValue(...changeArgs);\n      onChange?.(...changeArgs);\n    }} />\n        </>;\n}",
					...NotExpandOnFocus.parameters?.docs?.source
				},
				description: {
					story: "By default, the combobox expands when focused.\nYou can disable this behavior by setting the `expandOnFocus` prop to `false`.\nThis is useful when you want to show the suggestions only when the user interacts with the input.",
					...NotExpandOnFocus.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, NotExpandOnFocus, WithCustomRenderItem, WithDisabledOptions, meta as default };
