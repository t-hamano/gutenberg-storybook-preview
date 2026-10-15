import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as swatch_default } from "./swatch-CK9zOIpi.js";
import { t as require_es6 } from "./es6-CXUsglUz.js";
import { n as init_component, t as Spacer } from "./component-j14m8az7.js";
import { n as init_icon, t as Icon } from "./icon-BPBhgF1b.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { n as init_color_indicator, t as ColorIndicator } from "./color-indicator-C4O5Zagj.js";
import { r as init_color_palette, t as ColorPalette } from "./color-palette-C9lJS0n4.js";
import { a as warnIfCircularOptionPickerAsButtonsIsSet, n as init_circular_option_picker, r as getComputeCircularOptionPickerCommonProps, t as circular_option_picker_default } from "./circular-option-picker-Cw7oLkOy.js";
import { n as init_component$1, t as VStack } from "./component-C6EDknKF.js";
import { n as init_gradient_bar, t as CustomGradientBar } from "./gradient-bar-DCCzcV1B.js";
import { a as init_utils$1, i as getGradientFromCSSColors, n as getColorsFromColorStops, r as getDefaultColors, t as getColorStopsFromColors } from "./utils-D3WdnSXd.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/duotone-picker/color-list-picker/index.tsx
function ColorOption({ label, value, colors, disableCustomColors, enableAlpha, onChange }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const idRoot = use_instance_id_default(ColorOption, "color-list-picker-option");
	const labelId = `${idRoot}__label`;
	const contentId = `${idRoot}__content`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(import_jsx_dev_runtime$2.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Button, {
		__next40pxDefaultSize: true,
		className: "components-color-list-picker__swatch-button",
		id: labelId,
		onClick: () => setIsOpen((prev) => !prev),
		"aria-expanded": isOpen,
		"aria-controls": contentId,
		icon: value ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ColorIndicator, {
			colorValue: value,
			className: "components-color-list-picker__swatch-color"
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 35,
			columnNumber: 7
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Icon, { icon: swatch_default }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 40,
			columnNumber: 7
		}, this),
		text: label
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 26,
		columnNumber: 4
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		role: "group",
		id: contentId,
		"aria-labelledby": labelId,
		"aria-hidden": !isOpen,
		children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ColorPalette, {
			"aria-label": __("Color options"),
			className: "components-color-list-picker__color-picker",
			colors,
			value,
			clearable: false,
			onChange,
			disableCustomColors,
			enableAlpha
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 52,
			columnNumber: 6
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 45,
		columnNumber: 4
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 25,
		columnNumber: 3
	}, this);
}
function ColorListPicker({ colors, labels, value = [], disableCustomColors, enableAlpha, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
		className: "components-color-list-picker",
		children: labels.map((label, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ColorOption, {
			label,
			value: value[index],
			colors,
			disableCustomColors,
			enableAlpha,
			onChange: (newColor) => {
				const newColors = value.slice();
				newColors[index] = newColor;
				onChange(newColors);
			}
		}, index, false, {
			fileName: _jsxFileName$2,
			lineNumber: 79,
			columnNumber: 5
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 77,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_color_list_picker() {
	return (init_color_list_picker = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_build_module();
		init_use_instance_id();
		init_button();
		init_color_palette();
		init_color_indicator();
		init_icon();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/color-list-picker/index.tsx";
		try {
			ColorListPicker.__docgenInfo = {
				"description": "",
				"displayName": "ColorListPicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/color-list-picker/index.tsx",
				"methods": [],
				"props": {
					"colors": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/color-list-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A list of predefined colors. Each color is an object with a `name` and a\n`color` value.\nThe `name` is a string used to identify the color in the UI.\nThe `color` is a valid CSS color string.",
						"name": "colors",
						"required": true,
						"tags": {},
						"type": { "name": "{ name: string; color: string; }[]" }
					},
					"labels": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/color-list-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A list of labels for each of the options displayed in the UI.",
						"name": "labels",
						"required": true,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"value": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/color-list-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array containing the currently selected colors.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"disableCustomColors": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/color-list-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Controls whether the custom color picker is displayed.",
						"name": "disableCustomColors",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"enableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/color-list-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Controls whether the ColorPalette should show an alpha channel control.",
						"name": "enableAlpha",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/color-list-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the updated color value.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(newValue: (string | undefined)[]) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/duotone-picker/custom-duotone-bar.tsx
function CustomDuotoneBar({ value, onChange }) {
	const hasGradient = !!value;
	const values = hasGradient ? value : PLACEHOLDER_VALUES;
	const background = getGradientFromCSSColors(values);
	const controlPoints = getColorStopsFromColors(values);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CustomGradientBar, {
		disableInserter: true,
		disablePositioning: true,
		background,
		hasGradient,
		value: controlPoints,
		onChange: (newColorStops) => {
			onChange(getColorsFromColorStops(newColorStops));
		}
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 22,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, PLACEHOLDER_VALUES;
function init_custom_duotone_bar() {
	return (init_custom_duotone_bar = __esmMin((() => {
		init_gradient_bar();
		init_utils$1();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/custom-duotone-bar.tsx";
		PLACEHOLDER_VALUES = ["#333", "#CCC"];
		try {
			CustomDuotoneBar.__docgenInfo = {
				"description": "",
				"displayName": "customduotonebar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/custom-duotone-bar.tsx",
				"methods": [],
				"props": {
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/custom-duotone-bar.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/custom-duotone-bar.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value?: string[] | undefined) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/duotone-picker/duotone-picker.tsx
/**
* ```jsx
* import { DuotonePicker, DuotoneSwatch } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const DUOTONE_PALETTE = [
* 	{ colors: [ '#8c00b7', '#fcff41' ], name: 'Purple and yellow', slug: 'purple-yellow' },
* 	{ colors: [ '#000097', '#ff4747' ], name: 'Blue and red', slug: 'blue-red' },
* ];
*
* const COLOR_PALETTE = [
* 	{ color: '#ff4747', name: 'Red', slug: 'red' },
* 	{ color: '#fcff41', name: 'Yellow', slug: 'yellow' },
* 	{ color: '#000097', name: 'Blue', slug: 'blue' },
* 	{ color: '#8c00b7', name: 'Purple', slug: 'purple' },
* ];
*
* const Example = () => {
* 	const [ duotone, setDuotone ] = useState( [ '#000000', '#ffffff' ] );
* 	return (
* 		<>
* 			<DuotonePicker
* 				duotonePalette={ DUOTONE_PALETTE }
* 				colorPalette={ COLOR_PALETTE }
* 				value={ duotone }
* 				onChange={ setDuotone }
* 			/>
* 			<DuotoneSwatch values={ duotone } />
* 		</>
* 	);
* };
* ```
*/
function DuotonePicker({ asButtons, presentation, loop, clearable = true, unsetable = true, colorPalette, duotonePalette, disableCustomColors, disableCustomDuotone, value, selectedSlug, onChange, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, ...otherProps }) {
	warnIfCircularOptionPickerAsButtonsIsSet("DuotonePicker", asButtons);
	const { metaProps, labelProps, resolvedPresentation } = getComputeCircularOptionPickerCommonProps(asButtons, loop, ariaLabel, ariaLabelledby, presentation);
	const [defaultDark, defaultLight] = (0, import_react.useMemo)(() => getDefaultColors(colorPalette), [colorPalette]);
	const isUnset = value === "unset";
	const isUnsetSelected = resolvedPresentation !== "command-buttons" && isUnset;
	const unsetOptionLabel = __("Unset");
	const unsetOption = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.Option, {
		value: "unset",
		isSelected: isUnsetSelected,
		tooltipText: unsetOptionLabel,
		"aria-label": unsetOptionLabel,
		className: "components-duotone-picker__color-indicator",
		onClick: () => {
			onChange(isUnsetSelected ? void 0 : "unset");
		}
	}, "unset", false, {
		fileName: _jsxFileName,
		lineNumber: 85,
		columnNumber: 3
	}, this);
	const duotoneOptions = duotonePalette.map(({ colors, slug, name }, index) => {
		const style = {
			background: getGradientFromCSSColors(colors, "135deg"),
			color: "transparent"
		};
		const tooltipText = name ?? sprintf(__("Duotone code: %s"), slug);
		const label = name ? sprintf(__("Duotone: %s"), name) : tooltipText;
		const isSelected = resolvedPresentation !== "command-buttons" && (selectedSlug ? slug === selectedSlug : (0, import_es6.default)(colors, value));
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.Option, {
			value: colors,
			isSelected,
			"aria-label": label,
			tooltipText,
			style,
			onClick: isSelected ? () => onChange(void 0) : () => onChange(colors, index, slug)
		}, slug, false, {
			fileName: _jsxFileName,
			lineNumber: 129,
			columnNumber: 5
		}, this);
	});
	const options = unsetable ? [unsetOption, ...duotoneOptions] : duotoneOptions;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default, {
		...otherProps,
		...metaProps,
		...labelProps,
		options,
		actions: !!clearable && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(circular_option_picker_default.ButtonAction, {
			onClick: () => onChange(void 0),
			accessibleWhenDisabled: true,
			disabled: !value,
			children: __("Clear")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 162,
			columnNumber: 6
		}, this),
		children: !disableCustomDuotone && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {
			paddingTop: options.length === 0 ? 0 : 4,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
				spacing: 3,
				children: [!disableCustomColors && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomDuotoneBar, {
					value: isUnset ? void 0 : value,
					onChange
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 8
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorListPicker, {
					labels: [__("Shadows"), __("Highlights")],
					colors: colorPalette,
					value: isUnset ? void 0 : value,
					disableCustomColors,
					enableAlpha: true,
					onChange: (newColors) => {
						if (!newColors[0]) newColors[0] = defaultDark;
						if (!newColors[1]) newColors[1] = defaultLight;
						onChange(newColors.length >= 2 ? newColors : void 0);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 176,
				columnNumber: 6
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 175,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 155,
		columnNumber: 3
	}, this);
}
var import_es6, import_jsx_dev_runtime, _jsxFileName;
function init_duotone_picker() {
	return (init_duotone_picker = __esmMin((() => {
		import_es6 = /* @__PURE__ */ __toESM(require_es6());
		init_react();
		init_build_module();
		init_color_list_picker();
		init_circular_option_picker();
		init_component$1();
		init_custom_duotone_bar();
		init_utils$1();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/duotone-picker.tsx";
		try {
			DuotonePicker.__docgenInfo = {
				"description": "```jsx\nimport { DuotonePicker, DuotoneSwatch } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst DUOTONE_PALETTE = [\n	{ colors: [ '#8c00b7', '#fcff41' ], name: 'Purple and yellow', slug: 'purple-yellow' },\n	{ colors: [ '#000097', '#ff4747' ], name: 'Blue and red', slug: 'blue-red' },\n];\n\nconst COLOR_PALETTE = [\n	{ color: '#ff4747', name: 'Red', slug: 'red' },\n	{ color: '#fcff41', name: 'Yellow', slug: 'yellow' },\n	{ color: '#000097', name: 'Blue', slug: 'blue' },\n	{ color: '#8c00b7', name: 'Purple', slug: 'purple' },\n];\n\nconst Example = () => {\n	const [ duotone, setDuotone ] = useState( [ '#000000', '#ffffff' ] );\n	return (\n		<>\n			<DuotonePicker\n				duotonePalette={ DUOTONE_PALETTE }\n				colorPalette={ COLOR_PALETTE }\n				value={ duotone }\n				onChange={ setDuotone }\n			/>\n			<DuotoneSwatch values={ duotone } />\n		</>\n	);\n};\n```",
				"displayName": "DuotonePicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/duotone-picker/duotone-picker.tsx",
				"methods": [],
				"props": {
					"clearable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether there should be a button to clear the duotone value.",
						"name": "clearable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"unsetable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether there should be an `unset` option.",
						"name": "unsetable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"colorPalette": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Array of color presets of the form `{ color: '#000000', name: 'Black', slug: 'black' }`.",
						"name": "colorPalette",
						"required": true,
						"tags": {},
						"type": { "name": "Color[]" }
					},
					"duotonePalette": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Array of duotone presets of the form `{ colors: [ '#000000', '#ffffff' ], name: 'Grayscale', slug: 'grayscale' }`.",
						"name": "duotonePalette",
						"required": true,
						"tags": {},
						"type": { "name": "DuotoneColor[]" }
					},
					"disableCustomColors": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether custom colors should be disabled.",
						"name": "disableCustomColors",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disableCustomDuotone": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether custom duotone values should be disabled.",
						"name": "disableCustomDuotone",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An array of colors for the duotone effect.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string[] | \"unset\"" }
					},
					"selectedSlug": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The slug of the selected duotone preset. When a non-empty `selectedSlug`\nis provided, selection is decided strictly by slug, which keeps two\npresets holding the same pair of colors apart. Presets whose slug does\nnot match will not appear selected in this mode, even if their colors\nmatch `value`.\n\nAn empty string is treated the same as `undefined`: selection falls back\nto matching by color value.",
						"name": "selectedSlug",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback which is called when the duotone colors change.\n\nWhen the change comes from picking a preset out of `duotonePalette`, the\npreset's index and slug are passed too. Two presets can hold the same\npair of colors, so the value alone does not identify which one was\npicked.\n\nBoth are omitted whenever no preset is being picked: the custom, unset\nand clear controls, and deselecting the currently selected preset, which\nreports `undefined` alone.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: string[] | \"unset\" | undefined, index?: number | undefined, slug?: string | undefined) => void" }
					},
					"presentation": {
						"defaultValue": { "value": "'listbox'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "How predefined duotone swatches behave and are exposed to assistive\ntechnology.\n\n- `listbox` uses one tab stop and arrow-key navigation, and exposes\n  selection with `aria-selected`.\n- `toggle-buttons` gives each swatch a tab stop and exposes selection with\n  `aria-pressed`.\n- `command-buttons` gives each swatch a tab stop and exposes no selection\n  state. `value` and `selectedSlug` do not mark predefined swatches as\n  selected, and activating a swatch always calls `onChange` with that\n  swatch.",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Prevents keyboard interaction from wrapping around.\nOnly used with the `listbox` presentation.",
						"name": "loop",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"aria-label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/duotone-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An ID of an element to provide a label for the control.\n@todo [#54055] Either this or `aria-label` should be required",
						"name": "aria-labelledby",
						"required": false,
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
export { ColorListPicker as a, init_custom_duotone_bar as i, init_duotone_picker as n, init_color_list_picker as o, CustomDuotoneBar as r, DuotonePicker as t };
