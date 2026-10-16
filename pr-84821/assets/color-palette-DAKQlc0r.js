import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as memize } from "./dist-DL-769ey.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { n as r, t as init_a11y } from "./a11y-YVbKxb3i.js";
import { n as init_component, t as Truncate } from "./component-cX3pdmyF.js";
import { n as init_dropdown, t as Dropdown } from "./dropdown-B-gDKRwL.js";
import { n as init_component$1, t as ColorPicker } from "./component-B4TXoxF8.js";
import { a as warnIfCircularOptionPickerAsButtonsIsSet, n as init_circular_option_picker, r as getComputeCircularOptionPickerCommonProps, t as circular_option_picker_default } from "./circular-option-picker-NfDTwxvt.js";
import { n as init_component$2, t as VStack } from "./component-C9_4TU-Q.js";
import { n as init_component$3, t as Heading } from "./component-BhlVl1tv.js";
import { n as init_dropdown_content_wrapper, t as DropdownContentWrapper } from "./dropdown-content-wrapper-CakYyWtY.js";
//#region ../packages/components/src/color-picker/use-deprecated-props.ts
function isLegacyProps(props) {
	return typeof props.onChangeComplete !== "undefined" || typeof props.disableAlpha !== "undefined" || typeof props.color?.hex === "string";
}
function getColorFromLegacyProps(color) {
	if (color === void 0) return;
	if (typeof color === "string") return color;
	if (color.hex) return color.hex;
}
function useDeprecatedProps(props) {
	const { onChangeComplete } = props;
	const legacyChangeHandler = (0, import_react.useCallback)((color) => {
		onChangeComplete(transformColorStringToLegacyColor(color));
	}, [onChangeComplete]);
	if (isLegacyProps(props)) return {
		color: getColorFromLegacyProps(props.color),
		enableAlpha: !props.disableAlpha,
		onChange: legacyChangeHandler
	};
	return {
		...props,
		color: props.color,
		enableAlpha: props.enableAlpha,
		onChange: props.onChange
	};
}
var transformColorStringToLegacyColor;
function init_use_deprecated_props() {
	return (init_use_deprecated_props = __esmMin((() => {
		init_colord();
		init_react();
		transformColorStringToLegacyColor = memize((color) => {
			const colordColor = A(color);
			const hex = colordColor.toHex();
			const rgb = colordColor.toRgb();
			const hsv = colordColor.toHsv();
			const hsl = colordColor.toHsl();
			return {
				hex,
				rgb,
				hsv,
				hsl,
				source: "hex",
				oldHue: hsl.h
			};
		});
	})))();
}
//#endregion
//#region ../packages/components/src/color-picker/legacy-adapter.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, LegacyAdapter;
function init_legacy_adapter() {
	return (init_legacy_adapter = __esmMin((() => {
		init_component$1();
		init_use_deprecated_props();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/legacy-adapter.tsx";
		LegacyAdapter = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorPicker, { ...useDeprecatedProps(props) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 6,
				columnNumber: 9
			}, void 0);
		};
		try {
			LegacyAdapter.__docgenInfo = {
				"description": "",
				"displayName": "LegacyAdapter",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/legacy-adapter.tsx",
				"methods": [],
				"props": {
					"enableAlpha": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "When `true` the color picker will display the alpha channel both in\nthe bottom inputs as well as in the color picker itself.",
						"name": "enableAlpha",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"color": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "LegacyProps"
						}],
						"description": "The current color value to display in the picker.\nMust be a hex or hex8 string.",
						"name": "color",
						"required": false,
						"tags": {},
						"type": { "name": "LegacyColor" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "LegacyProps"
						}],
						"description": "Fired when the color changes. Always passes a hex or hex8 color string.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((color: string) => void)" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An optional default value to use for the color picker.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"copyFormat": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The format to copy when clicking the displayed color format.",
						"name": "copyFormat",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "ColorType",
							"value": [
								{ "value": "\"rgb\"" },
								{ "value": "\"hsl\"" },
								{ "value": "\"hex\"" }
							]
						}
					},
					"onChangeComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "LegacyProps"
						}],
						"description": "@deprecated",
						"name": "onChangeComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "LegacyProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(colors: LegacyColor) => void" }
					},
					"oldHue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "LegacyProps"
						}],
						"description": "@deprecated",
						"name": "oldHue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "LegacyProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"disableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "LegacyProps"
						}],
						"description": "@deprecated",
						"name": "disableAlpha",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "LegacyProps"
						},
						"required": true,
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
//#region ../packages/components/src/color-palette/style.module.scss
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = { "color-heading": "_color-heading_65zhs_1" };
	})))();
}
//#endregion
//#region ../packages/components/src/color-palette/utils.ts
var isSimpleCSSColor, extractColorNameFromCurrentValue, isMultiplePaletteObject, isMultiplePaletteArray, normalizeColorValue;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_colord();
		init_names();
		init_a11y();
		init_build_module();
		D([e, r]);
		isSimpleCSSColor = (value) => {
			const valueIsCssVariable = /var\(/.test(value ?? "");
			const valueIsColorMix = /color-mix\(/.test(value ?? "");
			return !valueIsCssVariable && !valueIsColorMix;
		};
		extractColorNameFromCurrentValue = (currentValue, colors = [], showMultiplePalettes = false, selectedSlug) => {
			if (!currentValue) return "";
			const currentValueIsSimpleColor = currentValue ? isSimpleCSSColor(currentValue) : false;
			const normalizedCurrentValue = currentValueIsSimpleColor ? A(currentValue).toHex() : currentValue;
			const colorPalettes = showMultiplePalettes ? colors : [{ colors }];
			for (const { colors: paletteColors } of colorPalettes) for (const { name: colorName, color: colorValue, slug } of paletteColors) {
				if (selectedSlug) {
					if (slug === selectedSlug) return colorName;
					continue;
				}
				if (normalizedCurrentValue === (currentValueIsSimpleColor ? A(colorValue).toHex() : colorValue)) return colorName;
			}
			return __("Custom");
		};
		isMultiplePaletteObject = (obj) => Array.isArray(obj.colors) && !("color" in obj);
		isMultiplePaletteArray = (arr) => {
			return arr.length > 0 && arr.every((colorObj) => isMultiplePaletteObject(colorObj));
		};
		normalizeColorValue = (value, element) => {
			if (!value || !element || isSimpleCSSColor(value)) return value;
			const { ownerDocument } = element;
			const { defaultView } = ownerDocument;
			const computedBackgroundColor = defaultView?.getComputedStyle(element).backgroundColor;
			return computedBackgroundColor ? A(computedBackgroundColor).toHex() : value;
		};
	})))();
}
//#endregion
//#region ../packages/components/src/color-palette/index.tsx
function SinglePalette({ className, clearColor, colors, onChange, value, selectedSlug, presentation, ...additionalProps }) {
	const colorOptions = (0, import_react.useMemo)(() => {
		return colors.map(({ color, name, slug }, index) => {
			const colordColor = A(color);
			const isSelected = presentation !== "command-buttons" && (selectedSlug ? slug === selectedSlug : value === color);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.Option, {
				isSelected,
				selectedIconProps: isSelected ? { color: colordColor.contrast() > colordColor.contrast("#000") ? "#fff" : "#000" } : {},
				tooltipText: name || sprintf(__("Color code: %s"), color),
				style: {
					backgroundColor: color,
					color
				},
				onClick: isSelected ? clearColor : () => onChange(color, index, slug)
			}, slug ?? `${color}-${index}`, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 5
			}, this);
		});
	}, [
		colors,
		value,
		selectedSlug,
		onChange,
		clearColor,
		presentation
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.OptionGroup, {
		className,
		options: colorOptions,
		...additionalProps
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 93,
		columnNumber: 3
	}, this);
}
function MultiplePalettes({ className, clearColor, colors, onChange, value, selectedSlug, headingLevel, presentation }) {
	const instanceId = use_instance_id_default(MultiplePalettes, "color-palette");
	if (colors.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
		spacing: 3,
		className,
		children: colors.map(({ name, colors: colorPalette }, index) => {
			const id = `${instanceId}-${index}`;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
				spacing: 2,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
					className: style_module_default["color-heading"],
					id,
					level: headingLevel,
					children: name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 7
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SinglePalette, {
					clearColor,
					colors: colorPalette,
					onChange: (newColor, _colorIndex, slug) => onChange(newColor, index, slug),
					value,
					selectedSlug,
					presentation,
					"aria-labelledby": id
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 7
				}, this)]
			}, index, true, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 6
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 118,
		columnNumber: 3
	}, this);
}
function CustomColorPickerDropdown({ isRenderedInSidebar, popoverProps: receivedPopoverProps, ...props }) {
	const popoverProps = (0, import_react.useMemo)(() => ({
		shift: true,
		resize: false,
		...isRenderedInSidebar ? {
			placement: "left-start",
			offset: 34
		} : {
			placement: "bottom",
			offset: 8
		},
		...receivedPopoverProps
	}), [isRenderedInSidebar, receivedPopoverProps]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown, {
		contentClassName: "components-color-palette__custom-color-dropdown-content",
		popoverProps,
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 178,
		columnNumber: 3
	}, this);
}
function UnforwardedColorPalette(props, forwardedRef) {
	const { asButtons, presentation, loop, clearable = true, colors = [], disableCustomColors = false, enableAlpha = false, onChange, value, selectedSlug, __experimentalIsRenderedInSidebar = false, headingLevel = 2, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, ...additionalProps } = props;
	warnIfCircularOptionPickerAsButtonsIsSet("ColorPalette", asButtons);
	const [normalizedColorValue, setNormalizedColorValue] = (0, import_react.useState)(value);
	const clearColor = (0, import_react.useCallback)(() => onChange(void 0), [onChange]);
	const customColorPaletteCallbackRef = (0, import_react.useCallback)((node) => {
		setNormalizedColorValue(normalizeColorValue(value, node));
	}, [value]);
	const hasMultipleColorOrigins = isMultiplePaletteArray(colors);
	const buttonLabelName = (0, import_react.useMemo)(() => extractColorNameFromCurrentValue(value, colors, hasMultipleColorOrigins, selectedSlug), [
		value,
		colors,
		hasMultipleColorOrigins,
		selectedSlug
	]);
	const renderCustomColorPicker = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownContentWrapper, {
		paddingSize: "none",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyAdapter, {
			color: normalizedColorValue,
			onChange: (color) => onChange(color),
			enableAlpha
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 233,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 232,
		columnNumber: 3
	}, this);
	const isHex = value?.startsWith("#");
	const displayValue = value?.replace(/^var\((.+)\)$/, "$1");
	const customColorAccessibleLabel = !!displayValue ? sprintf(__("Custom color picker. The currently selected color is called \"%1$s\" and has a value of \"%2$s\"."), buttonLabelName, displayValue) : __("Custom color picker");
	const { metaProps, labelProps, resolvedPresentation } = getComputeCircularOptionPickerCommonProps(asButtons, loop, ariaLabel, ariaLabelledby, presentation);
	const paletteCommonProps = {
		clearColor,
		onChange,
		value,
		selectedSlug,
		presentation: resolvedPresentation
	};
	const actions = !!clearable && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.ButtonAction, {
		onClick: clearColor,
		accessibleWhenDisabled: true,
		disabled: !value,
		children: __("Clear")
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 273,
		columnNumber: 3
	}, this);
	if (disableCustomColors && colors.length === 0 && !actions) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
		spacing: 3,
		ref: forwardedRef,
		...additionalProps,
		children: [!disableCustomColors && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomColorPickerDropdown, {
			isRenderedInSidebar: __experimentalIsRenderedInSidebar,
			renderContent: renderCustomColorPicker,
			renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
				className: "components-color-palette__custom-color-wrapper",
				spacing: 0,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					ref: customColorPaletteCallbackRef,
					className: "components-color-palette__custom-color-button",
					"aria-expanded": isOpen,
					"aria-haspopup": "true",
					onClick: onToggle,
					"aria-label": customColorAccessibleLabel,
					style: { background: value },
					type: "button"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 298,
					columnNumber: 8
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
					className: "components-color-palette__custom-color-text-wrapper",
					spacing: .5,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Truncate, {
						className: "components-color-palette__custom-color-name",
						children: value ? buttonLabelName : __("No color selected")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 314,
						columnNumber: 9
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Truncate, {
						className: clsx("components-color-palette__custom-color-value", { "components-color-palette__custom-color-value--is-hex": isHex }),
						children: displayValue
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 324,
						columnNumber: 9
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 310,
					columnNumber: 8
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 294,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 290,
			columnNumber: 5
		}, this), (colors.length > 0 || actions) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default, {
			...metaProps,
			...labelProps,
			actions,
			options: hasMultipleColorOrigins ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiplePalettes, {
				...paletteCommonProps,
				headingLevel,
				colors,
				value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 347,
				columnNumber: 8
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SinglePalette, {
				...paletteCommonProps,
				colors,
				value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 354,
				columnNumber: 8
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 341,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 288,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, ColorPalette;
function init_color_palette() {
	return (init_color_palette = __esmMin((() => {
		init_colord();
		init_names();
		init_a11y();
		init_clsx();
		init_use_instance_id();
		init_build_module();
		init_react();
		init_dropdown();
		init_legacy_adapter();
		init_circular_option_picker();
		init_component$2();
		init_component();
		init_component$3();
		init_dropdown_content_wrapper();
		init_style_module();
		init_utils();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-palette/index.tsx";
		D([e, r]);
		ColorPalette = (0, import_react.forwardRef)(UnforwardedColorPalette);
		ColorPalette.displayName = "ColorPalette";
		try {
			CustomColorPickerDropdown.__docgenInfo = {
				"description": "",
				"displayName": "CustomColorPickerDropdown",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-palette/index.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The className of the global container.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"contentClassName": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If you want to target the dropdown menu for styling purposes,\nyou need to provide a contentClassName because it's not being rendered\nas a child of the container node.",
						"name": "contentClassName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"expandOnMobile": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Opt-in prop to show popovers fullscreen on mobile.",
						"name": "expandOnMobile",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"focusOnMount": {
						"defaultValue": { "value": "'firstElement'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines focus behavior when the dialog mounts.\n\n- `\"firstElement\"` focuses the first tabbable element within.\n- `\"firstInputElement\"` focuses the first value control within.\n- `true` focuses the element itself.\n- `false` does nothing and _should not be used unless an accessible\n   substitute behavior is implemented_.",
						"name": "focusOnMount",
						"required": false,
						"tags": {},
						"type": { "name": "Mode" }
					},
					"headerTitle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Set this to customize the text that is shown in the dropdown's header\nwhen it is fullscreen on mobile.",
						"name": "headerTitle",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onClose": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the popover should be closed.",
						"name": "onClose",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"onToggle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the state of the dropdown changes\nfrom open to closed and vice versa.",
						"name": "onToggle",
						"required": false,
						"tags": {},
						"type": { "name": "((willOpen: boolean) => void)" }
					},
					"popoverProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Properties of popoverProps object will be passed as props\nto the Popover component.\nUse this object to access properties/features\nof the Popover component that are not already exposed\nin the Dropdown component,\ne.g.: the ability to have the popover without an arrow.",
						"name": "popoverProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Omit<Omit<WordPressComponentProps<PopoverProps, \"div\", false>, \"exit\" | \"layout\" | \"onDrag\" | \"onDragEnd\" | \"onDragStart\" | \"onAnimationStart\" | ... 51 more ... | \"ignoreStrict\"> & Pick<...>, \"ref\">, \"children\">" }
					},
					"renderContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked to render the content of the dropdown menu.\nIts first argument is the same as the renderToggle prop.",
						"name": "renderContent",
						"required": true,
						"tags": {},
						"type": { "name": "(props: CallbackProps) => ReactNode" }
					},
					"renderToggle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked to render the Dropdown Toggle Button.\n\nThe first argument of the callback is an object\ncontaining the following properties:\n\n- isOpen: whether the dropdown menu is opened or not\n- onToggle: A function switching the dropdown menu's state\nfrom open to closed and vice versa\n- onClose: A function that closes the menu if invoked",
						"name": "renderToggle",
						"required": true,
						"tags": {},
						"type": { "name": "(props: CallbackProps) => ReactNode" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The style of the global container.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"position": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Legacy way to specify the popover's position with respect to its anchor.\nFor details about the possible values, see the `Popover` component's docs.\n_Note: this prop is deprecated. Use the `popoverProps.placement` prop\ninstead._\n@deprecated",
						"name": "position",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | PositionYAxis | \"middle center\" | \"bottom center\" | \"top center\" | ... 36 more ...",
							"value": [
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right bottom\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"top right top\"" }
							]
						}
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The controlled open state of the dropdown.\nMust be used in conjunction with `onToggle`.",
						"name": "open",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/dropdown/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The open state of the dropdown when initially rendered.\nUse when you do not need to control its open state. It will be overridden\nby the `open` prop if it is specified on the component's first render.",
						"name": "defaultOpen",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isRenderedInSidebar": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isRenderedInSidebar",
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			ColorPalette.__docgenInfo = {
				"description": "Allows the user to pick a color from a list of pre-defined color entries.\n\n```jsx\nimport { ColorPalette } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyColorPalette = () => {\n  const [ color, setColor ] = useState ( '#f00' )\n  const colors = [\n    { name: 'red', color: '#f00' },\n    { name: 'white', color: '#fff' },\n    { name: 'blue', color: '#00f' },\n  ];\n  return (\n    <ColorPalette\n      colors={ colors }\n      value={ color }\n      onChange={ ( color ) => setColor( color ) }\n    />\n  );\n} );\n```",
				"displayName": "ColorPalette",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-palette/index.tsx",
				"methods": [],
				"props": {
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback called when a color is selected.\nThe third argument is the slug of the selected palette entry, when available.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(newColor?: string | undefined, index?: number | undefined, slug?: string | undefined) => void" }
					},
					"selectedSlug": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The slug of the currently selected palette entry.\n\nWhen set to a non-empty string, selection is determined by slug rather\nthan by color value — this correctly handles palettes where two entries\nshare the same color. Palette entries without a slug will not appear\nselected in this mode, even if their color value matches `value`.\n\nAn empty string is treated the same as `undefined`: selection falls\nback to matching by color value.",
						"name": "selectedSlug",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"clearable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the palette should have a clearing button.",
						"name": "clearable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"colors": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Array with the colors to be shown. When displaying multiple color palettes\nto choose from, the format of the array changes from an array of colors\nobjects, to an array of color palettes.",
						"name": "colors",
						"required": false,
						"tags": {},
						"type": { "name": "PaletteObject[] | ColorObject[]" }
					},
					"disableCustomColors": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to allow the user to pick a custom color on top of the predefined\nchoices (defined via the `colors` prop).",
						"name": "disableCustomColors",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"enableAlpha": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This controls whether the alpha channel will be offered when selecting\ncustom colors.",
						"name": "enableAlpha",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"headingLevel": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The heading level.",
						"name": "headingLevel",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "HeadingSize",
							"value": [
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "\"1\"" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" },
								{ "value": "\"2\"" },
								{ "value": "\"3\"" },
								{ "value": "\"4\"" },
								{ "value": "\"5\"" },
								{ "value": "\"6\"" }
							]
						}
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Currently active value.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"presentation": {
						"defaultValue": { "value": "'listbox'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "How predefined color swatches behave and are exposed to assistive\ntechnology.\n\n- `listbox` uses one tab stop and arrow-key navigation, and exposes\n  selection with `aria-selected`.\n- `toggle-buttons` gives each swatch a tab stop and exposes selection with\n  `aria-pressed`.\n- `command-buttons` gives each swatch a tab stop and exposes no selection\n  state. `value` and `selectedSlug` do not mark predefined swatches as\n  selected, and activating a swatch always calls `onChange` with that\n  swatch. `value` still controls the custom color picker.",
						"name": "presentation",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"listbox\" | \"toggle-buttons\" | \"command-buttons\"",
							"value": [
								{ "value": "\"listbox\"" },
								{ "value": "\"toggle-buttons\"" },
								{ "value": "\"command-buttons\"" }
							]
						}
					},
					"asButtons": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control should present as toggle buttons.\n@deprecated Use `presentation=\"toggle-buttons\"` instead. An explicit\n`presentation` takes precedence.\n@ignore",
						"name": "asButtons",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"loop": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Prevents keyboard interaction from wrapping around.\nOnly used with the `listbox` presentation.",
						"name": "loop",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalIsRenderedInSidebar": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether this is rendered in the sidebar.",
						"name": "__experimentalIsRenderedInSidebar",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"aria-label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A label to identify the purpose of the control.\n@todo [#54055] Either this or `aria-labelledby` should be required",
						"name": "aria-label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"aria-labelledby": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-palette/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An ID of an element to provide a label for the control.\n@todo [#54055] Either this or `aria-label` should be required",
						"name": "aria-labelledby",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"as": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/context/wordpress-component.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML element or React component to render the component as.",
						"name": "as",
						"required": false,
						"tags": {},
						"type": { "name": "JSXElementConstructor<any> | keyof IntrinsicElements" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { isMultiplePaletteArray as a, LegacyAdapter as c, init_utils as i, init_legacy_adapter as l, CustomColorPickerDropdown as n, init_style_module as o, init_color_palette as r, style_module_default as s, ColorPalette as t };
