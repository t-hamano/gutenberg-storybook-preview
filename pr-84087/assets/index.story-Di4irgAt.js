import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as settings_default } from "./settings-Qdh-t_58.js";
import { n as init_component, t as Flex } from "./component-Csfc8XyP.js";
import { n as init_component$1, t as FlexItem } from "./component-DXyvv1Jj.js";
import { n as init_component$2, t as HStack } from "./component-D91dSxn4.js";
import { n as init_component$3, t as Spacer } from "./component-j14m8az7.js";
import { n as init_base_control, t as BaseControl } from "./base-control-DsOU5iCO.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { i as init_component$4, r as ToggleGroupControl } from "./component-C1xJY-Hs.js";
import { n as init_component$5, t as ToggleGroupControlOption } from "./component-CIgSfYyI.js";
import { n as init_range_control, t as RangeControl } from "./range-control-myolNnUF.js";
import { a as parseQuantityAndUnitFromRawValue, n as init_unit_control, o as useCustomUnits, t as UnitControl } from "./unit-control-C3htNBgF.js";
import { n as init_custom_select_control, t as CustomSelectControl } from "./custom-select-control-BjAGx-ID.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/font-size-picker/style.module.scss
var container, header, select, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		container = "_container_fc6fk_1";
		header = "_header_fc6fk_8";
		select = "_select_fc6fk_23";
		style_module_default = {
			container,
			header,
			"header-toggle": "_header-toggle_fc6fk_12",
			"header-label": "_header-label_fc6fk_16",
			select
		};
	})))();
}
//#endregion
//#region ../packages/components/src/font-size-picker/utils.ts
/**
* Some themes use css vars for their font sizes, so until we
* have the way of calculating them don't display them.
*
* @param value The value that is checked.
* @return Whether the value is a simple css value.
*/
function isSimpleCssValue(value) {
	return /^[\d\.]+(px|em|rem|vw|vh|%|svw|lvw|dvw|svh|lvh|dvh|vi|svi|lvi|dvi|vb|svb|lvb|dvb|vmin|svmin|lvmin|dvmin|vmax|svmax|lvmax|dvmax)?$/i.test(String(value));
}
/**
* Generates hint text for a font size.
* This function returns the hint provided by the consumer, if any.
* If no hint is provided, it falls back to showing the size value for simple CSS values.
*
* @param fontSize The font size object to generate hint text for.
* @return The hint text provided by the consumer, or the size value for simple CSS values, or undefined.
*/
function generateFontSizeHint(fontSize) {
	if (fontSize.hint) return fontSize.hint;
	if (isSimpleCssValue(fontSize.size)) return String(fontSize.size);
}
//#endregion
//#region ../packages/components/src/font-size-picker/font-size-picker-select.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, DEFAULT_OPTION, FontSizePickerSelect;
function init_font_size_picker_select() {
	return (init_font_size_picker_select = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_custom_select_control();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/font-size-picker-select.tsx";
		DEFAULT_OPTION = {
			key: "default",
			name: __("Default"),
			value: void 0
		};
		FontSizePickerSelect = (props) => {
			const { fontSizes, value, valueMode = "literal", onChange } = props;
			const options = [DEFAULT_OPTION, ...fontSizes.map((fontSize) => {
				const hint = generateFontSizeHint(fontSize);
				return {
					key: fontSize.slug,
					name: fontSize.name || fontSize.slug,
					value: fontSize.size,
					hint
				};
			})];
			const selectedOption = (0, import_react.useMemo)(() => {
				if (value === void 0) return DEFAULT_OPTION;
				if (valueMode === "slug") {
					const optionBySlug = options.find((option) => option.key === value);
					if (optionBySlug) return optionBySlug;
				}
				return options.find((option) => option.value === value) ?? DEFAULT_OPTION;
			}, [
				value,
				valueMode,
				options
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(CustomSelectControl, {
				className: clsx("components-font-size-picker__select", style_module_default.select),
				label: __("Font size"),
				hideLabelFromVision: true,
				describedBy: sprintf(__("Currently selected font size: %s"), selectedOption.name),
				options,
				value: selectedOption,
				showSelectedHint: true,
				onChange: ({ selectedItem }) => {
					const matchingFontSize = selectedItem.key === "default" ? void 0 : fontSizes.find((fontSize) => fontSize.slug === selectedItem.key);
					onChange(selectedItem.value, matchingFontSize);
				}
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 57,
				columnNumber: 3
			}, void 0);
		};
		try {
			FontSizePickerSelect.__docgenInfo = {
				"description": "",
				"displayName": "fontsizepickerselect",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/font-size-picker-select.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current font size value.\n\nNote: For the `units` property to work, the current font size value must be specified\nas strings with units (e.g., '12px' instead of 12). When the font size is provided\nas a number, the component operates in \"unitless mode\" where the `units` property has no effect.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"valueMode": {
						"defaultValue": { "value": "'literal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines how the `value` prop should be interpreted.\n- `'literal'`: The `value` prop contains the actual font size value (number or string)\n- `'slug'`: The `value` prop contains the slug of the selected font size",
						"name": "valueMode",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"literal\" | \"slug\"",
							"value": [{ "value": "\"literal\"" }, { "value": "\"slug\"" }]
						}
					},
					"fontSizes": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "fontSizes",
						"required": true,
						"tags": {},
						"type": { "name": "FontSize[]" }
					},
					"disableCustomFontSizes": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disableCustomFontSizes",
						"required": true,
						"tags": {},
						"type": { "name": "NonNullable<boolean | undefined>" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string | number | undefined, selectedItem?: FontSize | undefined) => void" }
					},
					"onSelectCustom": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onSelectCustom",
						"required": true,
						"tags": {},
						"type": { "name": "() => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/font-size-picker/constants.ts
var T_SHIRT_ABBREVIATIONS, T_SHIRT_NAMES;
function init_constants() {
	return (init_constants = __esmMin((() => {
		init_build_module();
		T_SHIRT_ABBREVIATIONS = [
			__("S"),
			__("M"),
			__("L"),
			__("XL"),
			__("XXL")
		];
		T_SHIRT_NAMES = [
			__("Small"),
			__("Medium"),
			__("Large"),
			__("Extra Large"),
			__("Extra Extra Large")
		];
	})))();
}
//#endregion
//#region ../packages/components/src/font-size-picker/font-size-picker-toggle-group.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, FontSizePickerToggleGroup;
function init_font_size_picker_toggle_group() {
	return (init_font_size_picker_toggle_group = __esmMin((() => {
		init_build_module();
		init_component$4(), init_component$5();
		init_constants();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/font-size-picker-toggle-group.tsx";
		FontSizePickerToggleGroup = (props) => {
			const { fontSizes, value, valueMode = "literal", onChange } = props;
			const currentValue = (() => {
				if (!value) return;
				if (valueMode === "slug") return String(value);
				if (fontSizes.filter((fontSize) => fontSize.size === value).length > 1) return;
				return fontSizes.find((fontSize) => fontSize.size === value)?.slug;
			})();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ToggleGroupControl, {
				label: __("Font size"),
				hideLabelFromVision: true,
				value: currentValue,
				onChange: (newSlug) => {
					if (newSlug === void 0) onChange(void 0);
					else {
						const selectedFontSize = fontSizes.find((fontSize) => fontSize.slug === String(newSlug));
						if (selectedFontSize) onChange(selectedFontSize.size, selectedFontSize);
					}
				},
				isBlock: true,
				children: fontSizes.map((fontSize, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ToggleGroupControlOption, {
					value: fontSize.slug,
					label: T_SHIRT_ABBREVIATIONS[index],
					"aria-label": fontSize.name || T_SHIRT_NAMES[index],
					showTooltip: true
				}, fontSize.slug, false, {
					fileName: _jsxFileName$2,
					lineNumber: 67,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 44,
				columnNumber: 3
			}, void 0);
		};
		try {
			FontSizePickerToggleGroup.__docgenInfo = {
				"description": "",
				"displayName": "fontsizepickertogglegroup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/font-size-picker-toggle-group.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current font size value.\n\nNote: For the `units` property to work, the current font size value must be specified\nas strings with units (e.g., '12px' instead of 12). When the font size is provided\nas a number, the component operates in \"unitless mode\" where the `units` property has no effect.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"valueMode": {
						"defaultValue": { "value": "'literal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines how the `value` prop should be interpreted.\n- `'literal'`: The `value` prop contains the actual font size value (number or string)\n- `'slug'`: The `value` prop contains the slug of the selected font size",
						"name": "valueMode",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"literal\" | \"slug\"",
							"value": [{ "value": "\"literal\"" }, { "value": "\"slug\"" }]
						}
					},
					"fontSizes": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "fontSizes",
						"required": true,
						"tags": {},
						"type": { "name": "FontSize[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string | number | undefined, selectedItem?: FontSize | undefined) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/font-size-picker/index.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_UNITS, MAX_TOGGLE_GROUP_SIZES, UnforwardedFontSizePicker, FontSizePicker;
function init_font_size_picker() {
	return (init_font_size_picker = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_react();
		init_use_instance_id();
		init_button();
		init_range_control();
		init_component(), init_component$1();
		init_unit_control();
		init_base_control();
		init_component$2();
		init_style_module();
		init_component$3();
		init_font_size_picker_select();
		init_font_size_picker_toggle_group();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/index.tsx";
		DEFAULT_UNITS = [
			"px",
			"em",
			"rem",
			"vw",
			"vh"
		];
		MAX_TOGGLE_GROUP_SIZES = 5;
		UnforwardedFontSizePicker = (props, ref) => {
			const { fallbackFontSize, fontSizes = [], disableCustomFontSizes = false, onChange, units: unitsProp = DEFAULT_UNITS, value, valueMode = "literal", withSlider = false, withReset = true } = props;
			const labelId = use_instance_id_default(UnforwardedFontSizePicker, "font-size-picker-label");
			const units = useCustomUnits({ availableUnits: unitsProp });
			const selectedFontSize = (() => {
				if (!value) return;
				if (valueMode === "slug") return fontSizes.find((fontSize) => fontSize.slug === value);
				return fontSizes.find((fontSize) => fontSize.size === value);
			})();
			const [userRequestedCustom, setUserRequestedCustom] = (0, import_react.useState)(!!value && !selectedFontSize);
			const resolvedValueForControls = valueMode === "slug" ? selectedFontSize?.size : value;
			let currentPickerType;
			if (!disableCustomFontSizes && userRequestedCustom) currentPickerType = "custom";
			else currentPickerType = fontSizes.length > MAX_TOGGLE_GROUP_SIZES ? "select" : "togglegroup";
			if (fontSizes.length === 0 && disableCustomFontSizes) return null;
			const hasUnits = typeof resolvedValueForControls === "string" || typeof fontSizes[0]?.size === "string";
			const [valueQuantity, valueUnit] = parseQuantityAndUnitFromRawValue(resolvedValueForControls, units);
			const isValueUnitRelative = !!valueUnit && [
				"em",
				"rem",
				"vw",
				"vh"
			].includes(valueUnit);
			const isDisabled = value === void 0;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("fieldset", {
				ref,
				className: clsx("components-font-size-picker", style_module_default.container),
				"aria-labelledby": labelId,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Spacer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(HStack, {
					className: clsx("components-font-size-picker__header", style_module_default.header),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl.VisualLabel, {
						id: labelId,
						className: style_module_default["header-label"],
						children: __("Font size")
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 126,
						columnNumber: 6
					}, void 0), !disableCustomFontSizes && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
						className: style_module_default["header-toggle"],
						label: currentPickerType === "custom" ? __("Use size preset") : __("Set custom size"),
						icon: settings_default,
						onClick: () => setUserRequestedCustom(!userRequestedCustom),
						isPressed: currentPickerType === "custom",
						size: "small"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 133,
						columnNumber: 7
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 120,
					columnNumber: 5
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 119,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", { children: [
					currentPickerType === "select" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FontSizePickerSelect, {
						fontSizes,
						value,
						valueMode,
						disableCustomFontSizes,
						onChange: (newValue, selectedItem) => {
							if (newValue === void 0) onChange?.(void 0, selectedItem);
							else onChange?.(hasUnits ? newValue : Number(newValue), selectedItem);
						},
						onSelectCustom: () => setUserRequestedCustom(true)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 152,
						columnNumber: 6
					}, void 0),
					currentPickerType === "togglegroup" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FontSizePickerToggleGroup, {
						fontSizes,
						value,
						valueMode,
						onChange: (newValue, selectedItem) => {
							if (newValue === void 0) onChange?.(void 0, selectedItem);
							else onChange?.(hasUnits ? newValue : Number(newValue), selectedItem);
						}
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 171,
						columnNumber: 6
					}, void 0),
					currentPickerType === "custom" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Flex, {
						className: "components-font-size-picker__custom-size-control",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FlexItem, {
								isBlock: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(UnitControl, {
									label: __("Font size"),
									labelPosition: "top",
									hideLabelFromVision: true,
									value: hasUnits ? `${valueQuantity ?? ""}${valueUnit ?? ""}` : resolvedValueForControls,
									onChange: (newValue) => {
										setUserRequestedCustom(true);
										if (newValue === void 0 || newValue === "") onChange?.(void 0);
										else onChange?.(hasUnits ? newValue : parseInt(newValue, 10));
									},
									units: hasUnits ? units : [],
									min: 0
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 190,
									columnNumber: 8
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 189,
								columnNumber: 7
							}, void 0),
							withSlider && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FlexItem, {
								isBlock: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Spacer, {
									marginX: 2,
									marginBottom: 0,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RangeControl, {
										className: "components-font-size-picker__custom-input",
										label: __("Font size"),
										hideLabelFromVision: true,
										value: valueQuantity,
										initialPosition: fallbackFontSize,
										withInputField: false,
										onChange: (newValue) => {
											setUserRequestedCustom(true);
											if (newValue === void 0) onChange?.(void 0);
											else if (hasUnits) onChange?.(newValue + (valueUnit ?? "px"));
											else onChange?.(newValue);
										},
										min: 0,
										max: isValueUnitRelative ? 10 : 100,
										step: isValueUnitRelative ? .1 : 1
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 225,
										columnNumber: 10
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 224,
									columnNumber: 9
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 223,
								columnNumber: 8
							}, void 0),
							withReset && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
								disabled: isDisabled,
								accessibleWhenDisabled: true,
								onClick: () => {
									onChange?.(void 0);
								},
								variant: "secondary",
								__next40pxDefaultSize: true,
								size: "default",
								children: __("Reset")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 255,
								columnNumber: 9
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 254,
								columnNumber: 8
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 188,
						columnNumber: 6
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 150,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 110,
				columnNumber: 3
			}, void 0);
		};
		FontSizePicker = (0, import_react.forwardRef)(UnforwardedFontSizePicker);
		FontSizePicker.displayName = "FontSizePicker";
		try {
			FontSizePicker.__docgenInfo = {
				"description": "",
				"displayName": "FontSizePicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/index.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size variant of the control.\n@deprecated This prop no longer has any effect.\n@ignore",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"__unstable-large\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"__unstable-large\"" }]
						}
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/toggle-group-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disableCustomFontSizes": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true`, it will not be possible to choose a custom fontSize. The user\nwill be forced to pick one of the pre-defined sizes passed in fontSizes.",
						"name": "disableCustomFontSizes",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"fallbackFontSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If no value exists, this prop defines the starting position for the font\nsize picker slider. Only relevant if `withSlider` is `true`.",
						"name": "fallbackFontSize",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"fontSizes": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of font size objects. The object should contain properties size,\nname, and slug.",
						"name": "fontSizes",
						"required": false,
						"tags": {},
						"type": { "name": "FontSize[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new font size value.\nIf onChange is called without any parameter, it should reset the value,\nattending to what reset means in that context, e.g., set the font size to\nundefined or set the font size a starting value.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: string | number, selectedItem?: FontSize) => void) | undefined" }
					},
					"units": {
						"defaultValue": { "value": "[ 'px', 'em', 'rem', 'vw', 'vh' ]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Available units for custom font size selection.",
						"name": "units",
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current font size value.\n\nNote: For the `units` property to work, the current font size value must be specified\nas strings with units (e.g., '12px' instead of 12). When the font size is provided\nas a number, the component operates in \"unitless mode\" where the `units` property has no effect.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"valueMode": {
						"defaultValue": { "value": "'literal'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines how the `value` prop should be interpreted.\n- `'literal'`: The `value` prop contains the actual font size value (number or string)\n- `'slug'`: The `value` prop contains the slug of the selected font size",
						"name": "valueMode",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"literal\" | \"slug\"",
							"value": [{ "value": "\"literal\"" }, { "value": "\"slug\"" }]
						}
					},
					"withSlider": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true`, a slider will be displayed alongside the input field when a\ncustom font size is active. Has no effect when `disableCustomFontSizes`\nis `true`.",
						"name": "withSlider",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"withReset": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true`, a reset button will be displayed alongside the input field\nwhen a custom font size is active. Has no effect when\n`disableCustomFontSizes` is `true`.",
						"name": "withReset",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__nextHasNoMarginBottom": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/font-size-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)\n@deprecated Default behavior since WP 6.5. Prop can be safely removed.\n@ignore",
						"name": "__nextHasNoMarginBottom",
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
//#region ../packages/components/src/font-size-picker/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, FontSizePickerWithState, TwoFontSizePickersWithState, Default, WithSlider, WithCustomSizesDisabled, WithMoreFontSizes, WithUnits, WithComplexCSSValues;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_font_size_picker();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/stories/index.story.tsx";
		meta = {
			id: "components-fontsizepicker",
			title: "Components/@wordpress-components/FontSizePicker",
			component: FontSizePicker,
			argTypes: {
				value: { control: false },
				units: {
					control: "inline-check",
					options: [
						"px",
						"em",
						"rem",
						"vw",
						"vh"
					]
				}
			},
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		FontSizePickerWithState = ({ value, onChange, ...props }) => {
			const [fontSize, setFontSize] = (0, import_react.useState)(value);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontSizePicker, {
				...props,
				value: fontSize,
				onChange: (nextValue) => {
					setFontSize(nextValue);
					onChange?.(nextValue);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 3
			}, void 0);
		};
		TwoFontSizePickersWithState = ({ fontSizes, ...props }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Fewer font sizes" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontSizePickerWithState, {
					...props,
					fontSizes: fontSizes?.slice(0, 4)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "More font sizes" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontSizePickerWithState, {
					...props,
					fontSizes
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 3
			}, void 0);
		};
		Default = {
			render: FontSizePickerWithState,
			args: {
				disableCustomFontSizes: false,
				fontSizes: [
					{
						name: "Small",
						slug: "small",
						size: 12
					},
					{
						name: "Normal",
						slug: "normal",
						size: 16
					},
					{
						name: "Big",
						slug: "big",
						size: 26
					}
				],
				value: 16,
				withSlider: false
			}
		};
		WithSlider = {
			render: FontSizePickerWithState,
			args: {
				...Default.args,
				fallbackFontSize: 16,
				value: void 0,
				withSlider: true
			}
		};
		WithCustomSizesDisabled = {
			render: FontSizePickerWithState,
			args: {
				...Default.args,
				disableCustomFontSizes: true
			}
		};
		WithMoreFontSizes = {
			render: FontSizePickerWithState,
			args: {
				...Default.args,
				fontSizes: [
					{
						name: "Tiny",
						slug: "tiny",
						size: 8
					},
					{
						name: "Small",
						slug: "small",
						size: 12
					},
					{
						name: "Normal",
						slug: "normal",
						size: 16
					},
					{
						name: "Big",
						slug: "big",
						size: 26
					},
					{
						name: "Bigger",
						slug: "bigger",
						size: 30
					},
					{
						name: "Huge",
						slug: "huge",
						size: 36
					}
				],
				value: 8
			}
		};
		WithUnits = {
			render: TwoFontSizePickersWithState,
			args: {
				...WithMoreFontSizes.args,
				fontSizes: WithMoreFontSizes.args?.fontSizes?.map((option) => ({
					...option,
					size: `${option.size}px`
				})),
				value: "8px"
			}
		};
		WithComplexCSSValues = {
			render: TwoFontSizePickersWithState,
			args: {
				...Default.args,
				fontSizes: [
					{
						name: "Small",
						slug: "small",
						size: "clamp(1.75rem, 3vw, 2.25rem)"
					},
					{
						name: "Medium",
						slug: "medium",
						size: "1.125rem"
					},
					{
						name: "Large",
						slug: "large",
						size: "1.7rem"
					},
					{
						name: "Extra Large",
						slug: "extra-large",
						size: "1.95rem"
					},
					{
						name: "Extra Extra Large",
						slug: "extra-extra-large",
						size: "2.5rem"
					},
					{
						name: "Huge",
						slug: "huge",
						size: "2.8rem"
					}
				],
				value: "1.125rem"
			}
		};
		try {
			WithCustomSizesDisabled.__docgenInfo = {
				"description": "With custom font sizes disabled via the `disableCustomFontSizes` prop, the user will\nonly be able to pick one of the predefined sizes passed in `fontSizes`.",
				"displayName": "WithCustomSizesDisabled",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithMoreFontSizes.__docgenInfo = {
				"description": "When there are more than 5 font size options, the UI is no longer a toggle group.",
				"displayName": "WithMoreFontSizes",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithUnits.__docgenInfo = {
				"description": "When units like `px` are specified explicitly, it will be shown as a label hint.",
				"displayName": "WithUnits",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithComplexCSSValues.__docgenInfo = {
				"description": "The label hint will not be shown if it is a complex CSS value. Some examples of complex CSS values\nin this context are CSS functions like `calc()`, `clamp()`, and `var()`.",
				"displayName": "WithComplexCSSValues",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/font-size-picker/stories/index.story.tsx",
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
					originalSource: "{\n  render: FontSizePickerWithState,\n  args: {\n    disableCustomFontSizes: false,\n    fontSizes: [{\n      name: 'Small',\n      slug: 'small',\n      size: 12\n    }, {\n      name: 'Normal',\n      slug: 'normal',\n      size: 16\n    }, {\n      name: 'Big',\n      slug: 'big',\n      size: 26\n    }],\n    value: 16,\n    withSlider: false\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithSlider.parameters = {
			...WithSlider.parameters,
			docs: {
				...WithSlider.parameters?.docs,
				source: {
					originalSource: "{\n  render: FontSizePickerWithState,\n  args: {\n    ...Default.args,\n    fallbackFontSize: 16,\n    value: undefined,\n    withSlider: true\n  }\n}",
					...WithSlider.parameters?.docs?.source
				}
			}
		};
		WithCustomSizesDisabled.parameters = {
			...WithCustomSizesDisabled.parameters,
			docs: {
				...WithCustomSizesDisabled.parameters?.docs,
				source: {
					originalSource: "{\n  render: FontSizePickerWithState,\n  args: {\n    ...Default.args,\n    disableCustomFontSizes: true\n  }\n}",
					...WithCustomSizesDisabled.parameters?.docs?.source
				},
				description: {
					story: "With custom font sizes disabled via the `disableCustomFontSizes` prop, the user will\nonly be able to pick one of the predefined sizes passed in `fontSizes`.",
					...WithCustomSizesDisabled.parameters?.docs?.description
				}
			}
		};
		WithMoreFontSizes.parameters = {
			...WithMoreFontSizes.parameters,
			docs: {
				...WithMoreFontSizes.parameters?.docs,
				source: {
					originalSource: "{\n  render: FontSizePickerWithState,\n  args: {\n    ...Default.args,\n    fontSizes: [{\n      name: 'Tiny',\n      slug: 'tiny',\n      size: 8\n    }, {\n      name: 'Small',\n      slug: 'small',\n      size: 12\n    }, {\n      name: 'Normal',\n      slug: 'normal',\n      size: 16\n    }, {\n      name: 'Big',\n      slug: 'big',\n      size: 26\n    }, {\n      name: 'Bigger',\n      slug: 'bigger',\n      size: 30\n    }, {\n      name: 'Huge',\n      slug: 'huge',\n      size: 36\n    }],\n    value: 8\n  }\n}",
					...WithMoreFontSizes.parameters?.docs?.source
				},
				description: {
					story: "When there are more than 5 font size options, the UI is no longer a toggle group.",
					...WithMoreFontSizes.parameters?.docs?.description
				}
			}
		};
		WithUnits.parameters = {
			...WithUnits.parameters,
			docs: {
				...WithUnits.parameters?.docs,
				source: {
					originalSource: "{\n  render: TwoFontSizePickersWithState,\n  args: {\n    ...WithMoreFontSizes.args,\n    fontSizes: WithMoreFontSizes.args?.fontSizes?.map(option => ({\n      ...option,\n      size: `${option.size}px`\n    })),\n    value: '8px'\n  }\n}",
					...WithUnits.parameters?.docs?.source
				},
				description: {
					story: "When units like `px` are specified explicitly, it will be shown as a label hint.",
					...WithUnits.parameters?.docs?.description
				}
			}
		};
		WithComplexCSSValues.parameters = {
			...WithComplexCSSValues.parameters,
			docs: {
				...WithComplexCSSValues.parameters?.docs,
				source: {
					originalSource: "{\n  render: TwoFontSizePickersWithState,\n  args: {\n    ...Default.args,\n    fontSizes: [{\n      name: 'Small',\n      slug: 'small',\n      // Adding just one complex css value is enough\n      size: 'clamp(1.75rem, 3vw, 2.25rem)'\n    }, {\n      name: 'Medium',\n      slug: 'medium',\n      size: '1.125rem'\n    }, {\n      name: 'Large',\n      slug: 'large',\n      size: '1.7rem'\n    }, {\n      name: 'Extra Large',\n      slug: 'extra-large',\n      size: '1.95rem'\n    }, {\n      name: 'Extra Extra Large',\n      slug: 'extra-extra-large',\n      size: '2.5rem'\n    }, {\n      name: 'Huge',\n      slug: 'huge',\n      size: '2.8rem'\n    }],\n    value: '1.125rem'\n  }\n}",
					...WithComplexCSSValues.parameters?.docs?.source
				},
				description: {
					story: "The label hint will not be shown if it is a complex CSS value. Some examples of complex CSS values\nin this context are CSS functions like `calc()`, `clamp()`, and `var()`.",
					...WithComplexCSSValues.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithComplexCSSValues, WithCustomSizesDisabled, WithMoreFontSizes, WithSlider, WithUnits, meta as default };
