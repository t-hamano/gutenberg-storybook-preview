import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as link_off_default } from "./link-off-C4yFwgr4.js";
import { n as link_default } from "./link-B6xih8Jw.js";
import { n as settings_default } from "./settings-CFgRsx5X.js";
import { n as warning, t as init_build_module$1 } from "./build-module-B5spW8IS.js";
import { n as init_tooltip, t as Tooltip } from "./tooltip-C9B-2Nhf.js";
import { n as useControlledState, t as init_use_controlled_state } from "./use-controlled-state-CTRYMe6I.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CkY7eURU.js";
import { n as init_component, t as HStack } from "./component-BAVSem4V.js";
import { n as init_base_control, t as BaseControl } from "./base-control-CSASrsP8.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_range_control, t as RangeControl } from "./range-control-DLLdsuRW.js";
import { a as parseQuantityAndUnitFromRawValue, i as init_utils$1, n as init_unit_control, t as UnitControl } from "./unit-control-DHERPIGG.js";
import { n as init_component$1, t as Grid } from "./component-CcPU8xfX.js";
import { r as init_build_module$2 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/box-control/utils.ts
/**
* Gets the merged input value and unit from values data.
*
* @param values         Box values.
* @param availableSides Available box sides to evaluate.
*
* @return A value + unit for the 'all' input.
*/
function getMergedValue(values = {}, availableSides = ALL_SIDES) {
	const sides = normalizeSides(availableSides);
	if (sides.every((side) => values[side] === values[sides[0]])) return values[sides[0]];
}
/**
* Checks if the values are mixed.
*
* @param values         Box values.
* @param availableSides Available box sides to evaluate.
* @return Whether the values are mixed.
*/
function isValueMixed(values = {}, availableSides = ALL_SIDES) {
	const sides = normalizeSides(availableSides);
	return sides.some((side) => values[side] !== values[sides[0]]);
}
/**
* Checks to determine if values are defined.
*
* @param values Box values.
*
* @return  Whether values are mixed.
*/
function isValuesDefined(values) {
	return values && Object.values(values).filter((value) => !!value && /\d/.test(value)).length > 0;
}
/**
* Normalizes provided sides configuration to an array containing only top,
* right, bottom and left. This essentially just maps `horizontal` or `vertical`
* to their appropriate sides to facilitate correctly determining value for
* all input control.
*
* @param sides Available sides for box control.
* @return Normalized sides configuration.
*/
function normalizeSides(sides) {
	const filteredSides = [];
	if (!sides?.length) return ALL_SIDES;
	if (sides.includes("vertical")) filteredSides.push(...["top", "bottom"]);
	else if (sides.includes("horizontal")) filteredSides.push(...["left", "right"]);
	else {
		const newSides = ALL_SIDES.filter((side) => sides.includes(side));
		filteredSides.push(...newSides);
	}
	return filteredSides;
}
/**
* Return the allowed sides based on the sides configuration.
*
* @param sides Sides configuration.
* @return Allowed sides.
*/
function getAllowedSides(sides) {
	const allowedSides = new Set(!sides ? ALL_SIDES : []);
	sides?.forEach((allowedSide) => {
		if (allowedSide === "vertical") {
			allowedSides.add("top");
			allowedSides.add("bottom");
		} else if (allowedSide === "horizontal") {
			allowedSides.add("right");
			allowedSides.add("left");
		} else allowedSides.add(allowedSide);
	});
	return allowedSides;
}
/**
* Checks if a value is a preset value.
*
* @param value     The value to check.
* @param presetKey The preset key to check against.
* @return Whether the value is a preset value.
*/
function isValuePreset(value, presetKey) {
	return value.startsWith(`var:preset|${presetKey}|`);
}
/**
* Returns the index of the preset value in the presets array.
*
* @param value     The value to check.
* @param presetKey The preset key to check against.
* @param presets   The array of presets to search.
* @return The index of the preset value in the presets array.
*/
function getPresetIndexFromValue(value, presetKey, presets) {
	if (!isValuePreset(value, presetKey)) return;
	const match = value.match(new RegExp(`^var:preset\\|${presetKey}\\|(.+)$`));
	if (!match) return;
	const slug = match[1];
	const index = presets.findIndex((preset) => {
		return preset.slug === slug;
	});
	return index !== -1 ? index : void 0;
}
/**
* Returns the preset value from the index.
*
* @param index     The index of the preset value in the presets array.
* @param presetKey The preset key to check against.
* @param presets   The array of presets to search.
* @return The preset value from the index.
*/
function getPresetValueFromIndex(index, presetKey, presets) {
	return `var:preset|${presetKey}|${presets[index].slug}`;
}
var CUSTOM_VALUE_SETTINGS, LABELS, DEFAULT_VALUES, ALL_SIDES;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_build_module();
		CUSTOM_VALUE_SETTINGS = {
			px: {
				max: 300,
				step: 1
			},
			"%": {
				max: 100,
				step: 1
			},
			vw: {
				max: 100,
				step: 1
			},
			vh: {
				max: 100,
				step: 1
			},
			em: {
				max: 10,
				step: .1
			},
			rm: {
				max: 10,
				step: .1
			},
			svw: {
				max: 100,
				step: 1
			},
			lvw: {
				max: 100,
				step: 1
			},
			dvw: {
				max: 100,
				step: 1
			},
			svh: {
				max: 100,
				step: 1
			},
			lvh: {
				max: 100,
				step: 1
			},
			dvh: {
				max: 100,
				step: 1
			},
			vi: {
				max: 100,
				step: 1
			},
			svi: {
				max: 100,
				step: 1
			},
			lvi: {
				max: 100,
				step: 1
			},
			dvi: {
				max: 100,
				step: 1
			},
			vb: {
				max: 100,
				step: 1
			},
			svb: {
				max: 100,
				step: 1
			},
			lvb: {
				max: 100,
				step: 1
			},
			dvb: {
				max: 100,
				step: 1
			},
			vmin: {
				max: 100,
				step: 1
			},
			svmin: {
				max: 100,
				step: 1
			},
			lvmin: {
				max: 100,
				step: 1
			},
			dvmin: {
				max: 100,
				step: 1
			},
			vmax: {
				max: 100,
				step: 1
			},
			svmax: {
				max: 100,
				step: 1
			},
			lvmax: {
				max: 100,
				step: 1
			},
			dvmax: {
				max: 100,
				step: 1
			}
		};
		LABELS = {
			all: __("All sides"),
			top: __("Top side"),
			bottom: __("Bottom side"),
			left: __("Left side"),
			right: __("Right side"),
			vertical: __("Top and bottom sides"),
			horizontal: __("Left and right sides")
		};
		DEFAULT_VALUES = {
			top: void 0,
			right: void 0,
			bottom: void 0,
			left: void 0
		};
		ALL_SIDES = [
			"top",
			"right",
			"bottom",
			"left"
		];
	})))();
}
//#endregion
//#region ../packages/components/src/box-control/style.module.scss
var icon, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		icon = "_icon_1981x_64";
		style_module_default = {
			"unit-control": "_unit-control_1981x_46",
			"input-wrapper": "_input-wrapper_1981x_50",
			"reset-button": "_reset-button_1981x_54",
			"linked-button-wrapper": "_linked-button-wrapper_1981x_59",
			icon,
			"range-control": "_range-control_1981x_68",
			"icon-root": "_icon-root_1981x_73",
			"icon-viewbox": "_icon-viewbox_1981x_82",
			"icon-stroke": "_icon-stroke_1981x_90",
			"is-highlighted": "_is-highlighted_1981x_99",
			"icon-left": "_icon-left_1981x_103",
			"icon-right": "_icon-right_1981x_104",
			"icon-top": "_icon-top_1981x_111",
			"icon-bottom": "_icon-bottom_1981x_112"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/box-control/icon.tsx
function BoxControlIcon({ as = "span", size = 24, side = "all", sides, className, ...props }) {
	const isSideDisabled = (value) => sides?.length && !sides.includes(value);
	const hasSide = (value) => {
		if (isSideDisabled(value)) return false;
		return side === "all" || side === value;
	};
	const top = hasSide("top") || hasSide("vertical");
	const right = hasSide("right") || hasSide("horizontal");
	const bottom = hasSide("bottom") || hasSide("vertical");
	const left = hasSide("left") || hasSide("horizontal");
	const scale = size / BASE_ICON_SIZE;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(PolymorphicElement, {
		as,
		style: { transform: `scale(${scale})` },
		...props,
		className: clsx(style_module_default["icon-root"], className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", {
			className: style_module_default["icon-viewbox"],
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", { className: clsx(style_module_default["icon-stroke"], style_module_default["icon-top"], { [style_module_default["is-highlighted"]]: top }) }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 47,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", { className: clsx(style_module_default["icon-stroke"], style_module_default["icon-right"], { [style_module_default["is-highlighted"]]: right }) }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 56,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", { className: clsx(style_module_default["icon-stroke"], style_module_default["icon-bottom"], { [style_module_default["is-highlighted"]]: bottom }) }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 65,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)("span", { className: clsx(style_module_default["icon-stroke"], style_module_default["icon-left"], { [style_module_default["is-highlighted"]]: left }) }, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 74,
					columnNumber: 5
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 46,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 40,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, BASE_ICON_SIZE;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_clsx();
		init_polymorphic_element();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/icon.tsx";
		BASE_ICON_SIZE = 24;
		try {
			BoxControlIcon.__docgenInfo = {
				"description": "",
				"displayName": "icon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/icon.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "24" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"side": {
						"defaultValue": { "value": "all" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "side",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"horizontal\" | \"vertical\" | \"all\" | \"left\" | \"right\" | \"bottom\" | \"top\"",
							"value": [
								{ "value": "\"horizontal\"" },
								{ "value": "\"vertical\"" },
								{ "value": "\"all\"" },
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" }
							]
						}
					},
					"sides": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "sides",
						"required": false,
						"tags": {},
						"type": { "name": "readonly (\"horizontal\" | \"vertical\" | keyof BoxControlValue)[]" }
					},
					"as": {
						"defaultValue": { "value": "span" },
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
//#region ../packages/components/src/box-control/box-input-control.tsx
function getSidesToModify(side, sides, isAlt) {
	const allowedSides = getAllowedSides(sides);
	let modifiedSides = [];
	switch (side) {
		case "all":
			modifiedSides = [
				"top",
				"bottom",
				"left",
				"right"
			];
			break;
		case "horizontal":
			modifiedSides = ["left", "right"];
			break;
		case "vertical":
			modifiedSides = ["top", "bottom"];
			break;
		default: modifiedSides = [side];
	}
	if (isAlt) switch (side) {
		case "top":
			modifiedSides.push("bottom");
			break;
		case "bottom":
			modifiedSides.push("top");
			break;
		case "left":
			modifiedSides.push("right");
			break;
		case "right": modifiedSides.push("left");
	}
	return modifiedSides.filter((s) => allowedSides.has(s));
}
function BoxInputControl({ onChange = noop$1, onFocus = noop$1, values, selectedUnits, setSelectedUnits, sides, side, min = 0, presets, presetKey, placeholder: placeholderProp, ...props }) {
	const defaultValuesToModify = getSidesToModify(side, sides);
	const handleOnFocus = (event) => {
		onFocus(event, { side });
	};
	const handleOnChange = (nextValues) => {
		onChange(nextValues);
	};
	const handleRawOnValueChange = (next) => {
		const nextValues = { ...values };
		defaultValuesToModify.forEach((modifiedSide) => {
			nextValues[modifiedSide] = next;
		});
		handleOnChange(nextValues);
	};
	const handleOnValueChange = (next, extra) => {
		const nextValues = { ...values };
		const nextValue = next !== void 0 && !isNaN(parseFloat(next)) ? next : void 0;
		getSidesToModify(
			side,
			sides,
			/**
			* Supports changing pair sides. For example, holding the ALT key
			* when changing the TOP will also update BOTTOM.
			*/
			!!extra?.event.altKey
		).forEach((modifiedSide) => {
			nextValues[modifiedSide] = nextValue;
		});
		handleOnChange(nextValues);
	};
	const handleOnUnitChange = (next) => {
		const newUnits = { ...selectedUnits };
		defaultValuesToModify.forEach((modifiedSide) => {
			newUnits[modifiedSide] = next;
		});
		setSelectedUnits(newUnits);
	};
	const mergedValue = getMergedValue(values, defaultValuesToModify);
	const hasValues = isValuesDefined(values);
	const isMixed = hasValues && defaultValuesToModify.length > 1 && isValueMixed(values, defaultValuesToModify);
	const [parsedQuantity, parsedUnit] = parseQuantityAndUnitFromRawValue(mergedValue);
	const computedUnit = hasValues ? parsedUnit : selectedUnits[defaultValuesToModify[0]];
	const inputId = [use_instance_id_default(BoxInputControl, "box-control-input"), side].join("-");
	const isMixedUnit = defaultValuesToModify.length > 1 && mergedValue === void 0 && defaultValuesToModify.some((s) => selectedUnits[s] !== computedUnit);
	const usedValue = mergedValue === void 0 && computedUnit ? computedUnit : mergedValue;
	const mixedPlaceholder = isMixed || isMixedUnit ? __("Mixed") : void 0;
	const hasPresets = presets && presets.length > 0 && presetKey;
	const hasPresetValue = hasPresets && mergedValue !== void 0 && !isMixed && isValuePreset(mergedValue, presetKey);
	const [showCustomValueControl, setShowCustomValueControl] = (0, import_react.useState)(!hasPresets || !hasPresetValue && !isMixed && mergedValue !== void 0);
	const presetIndex = hasPresetValue ? getPresetIndexFromValue(mergedValue, presetKey, presets) : void 0;
	const marks = hasPresets ? [{
		value: 0,
		label: "",
		tooltip: __("None")
	}, ...presets.map((preset, index) => ({
		value: index + 1,
		label: "",
		tooltip: preset.name ?? preset.slug
	}))] : [];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(HStack, {
		className: style_module_default["input-wrapper"],
		expanded: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(BoxControlIcon, {
				className: style_module_default.icon,
				side,
				sides
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 199,
				columnNumber: 4
			}, this),
			showCustomValueControl && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Tooltip, {
				placement: "top-end",
				text: LABELS[side],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(UnitControl, {
					...props,
					min,
					className: clsx(style_module_default["unit-control"], "component-box-control__unit-control"),
					id: inputId,
					isPressEnterToChange: true,
					disableUnits: isMixed || isMixedUnit,
					value: usedValue,
					onChange: handleOnValueChange,
					onUnitChange: handleOnUnitChange,
					onFocus: handleOnFocus,
					label: LABELS[side],
					placeholder: mixedPlaceholder ?? placeholderProp,
					hideLabelFromVision: true
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 207,
					columnNumber: 7
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 206,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(RangeControl, {
				className: style_module_default["range-control"],
				"aria-controls": inputId,
				label: LABELS[side],
				hideLabelFromVision: true,
				onChange: (newValue) => {
					handleOnValueChange(newValue !== void 0 ? [newValue, computedUnit].join("") : void 0);
				},
				min: isFinite(min) ? min : 0,
				max: CUSTOM_VALUE_SETTINGS[computedUnit ?? "px"]?.max ?? 10,
				step: CUSTOM_VALUE_SETTINGS[computedUnit ?? "px"]?.step ?? .1,
				value: parsedQuantity ?? 0,
				withInputField: false
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 227,
				columnNumber: 6
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 205,
				columnNumber: 5
			}, this),
			hasPresets && !showCustomValueControl && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(RangeControl, {
				className: clsx(style_module_default["range-control"], "spacing-sizes-control__range-control"),
				value: presetIndex !== void 0 ? presetIndex + 1 : 0,
				onChange: (newIndex) => {
					const newValue = newIndex === 0 || newIndex === void 0 ? void 0 : getPresetValueFromIndex(newIndex - 1, presetKey, presets);
					handleRawOnValueChange(newValue);
				},
				withInputField: false,
				"aria-valuenow": presetIndex !== void 0 ? presetIndex + 1 : 0,
				"aria-valuetext": marks[presetIndex !== void 0 ? presetIndex + 1 : 0].tooltip,
				renderTooltipContent: (index) => marks[!index ? 0 : index].tooltip,
				min: 0,
				max: marks.length - 1,
				marks,
				label: LABELS[side],
				hideLabelFromVision: true
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 255,
				columnNumber: 5
			}, this),
			hasPresets && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Button, {
				label: showCustomValueControl ? __("Use size preset") : __("Set custom size"),
				icon: settings_default,
				onClick: () => {
					setShowCustomValueControl(!showCustomValueControl);
				},
				isPressed: showCustomValueControl,
				size: "small",
				iconSize: 24
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 292,
				columnNumber: 5
			}, this)
		]
	}, `box-control-${side}`, true, {
		fileName: _jsxFileName$3,
		lineNumber: 194,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3, noop$1;
function init_box_input_control() {
	return (init_box_input_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_build_module();
		init_react();
		init_build_module$2();
		init_tooltip();
		init_utils$1();
		init_utils();
		init_icon();
		init_button();
		init_component();
		init_range_control();
		init_unit_control();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/box-input-control.tsx";
		noop$1 = () => {};
		try {
			BoxInputControl.__docgenInfo = {
				"description": "",
				"displayName": "boxinputcontrol",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/box-input-control.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "Adjusts the size of the input.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
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
					"max": {
						"defaultValue": { "value": "Infinity" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The maximum `value` allowed.",
						"name": "max",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"min": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum `value` allowed.",
						"name": "min",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"onDrag": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDrag",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onDragStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((dragProps: Omit<FullGestureState<\"drag\">, \"event\"> & { event: unknown; }) => void)" }
					},
					"step": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount by which the `value` is changed when incrementing/decrementing.\nIt is also a factor in validation as `value` must be a multiple of `step`\n(offset by `min`, if specified) to be valid. Accepts the special string value `any`\nthat voids the validation constraint and causes stepping actions to increment/decrement by `1`.",
						"name": "step",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
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
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "If true, the `input` will be disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"prefix": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						}],
						"description": "Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",
						"name": "prefix",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputBaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value of the input.\nCurrent value. If passed as a string, the current unit will be inferred from this value.\nFor example, a `value` of \"50%\" will set the current unit to `%`.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "string | number" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true` enforces a valid number within the control's min/max range.\nIf `false` allows an empty string as a valid value.",
						"name": "required",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labelPosition": {
						"defaultValue": { "value": "'top'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "The position of the label.",
						"name": "labelPosition",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated\n@ignore",
						"name": "__next36pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDragEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, enables mouse drag gestures.",
						"name": "isDragEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableInputWidth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						}],
						"description": "",
						"name": "__unstableInputWidth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Width<string | number>" }
					},
					"dragDirection": {
						"defaultValue": { "value": "'n'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "Determines the drag axis.",
						"name": "dragDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",
						"name": "dragThreshold",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isPressEnterToChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",
						"name": "isPressEnterToChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onValidate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						}],
						"description": "",
						"name": "onValidate",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputFieldProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void)" }
					},
					"__unstableStateReducer": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "",
						"name": "__unstableStateReducer",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "StateReducer" }
					},
					"isShiftStepEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, pressing `UP` or `DOWN` along with the `SHIFT` key will increment the\nvalue by the `shiftStep` value.",
						"name": "isShiftStepEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shiftStep": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Amount to increment by when the `SHIFT` key is held down. This shift value is\na multiplier to the `step` value. For example, if the `step` value is `5`,\nand `shiftStep` is `10`, each jump would increment/decrement by `50`.",
						"name": "shiftStep",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disableUnits": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true`, the unit `<select>` is hidden.",
						"name": "disableUnits",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hideHTMLArrows": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the default `input` HTML arrows will be hidden.\n@deprecated",
						"name": "hideHTMLArrows",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"spinFactor": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/number-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Optional multiplication factor in spin changes. i.e. A spin changes\nby `spinFactor * step` (if `step` is \"any\", 1 is used instead).",
						"name": "spinFactor",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"unit": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Current unit. _Note: this prop is deprecated. Instead, provide a unit with a value through the `value` prop._\n@deprecated",
						"name": "unit",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"isUnitSelectTabbable": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the control can be focused via keyboard navigation.",
						"name": "isUnitSelectTabbable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isResetValueOnUnitChange": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If `true`, and the selected unit provides a `default` value, this value is set\nwhen changing units.",
						"name": "isResetValueOnUnitChange",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onUnitChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback when the `unit` changes.",
						"name": "onUnitChange",
						"required": false,
						"tags": {},
						"type": { "name": "UnitControlOnChangeCallback" }
					},
					"onChange": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((nextValues: BoxControlValue) => void)" }
					},
					"onFocus": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onFocus",
						"required": false,
						"tags": {},
						"type": { "name": "((_event: FocusEvent<HTMLInputElement, Element>, { side }: { side: \"horizontal\" | \"vertical\" | \"all\" | \"left\" | \"right\" | \"bottom\" | \"top\"; }) => void)" }
					},
					"onHoverOff": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onHoverOff",
						"required": false,
						"tags": {},
						"type": { "name": "((sides: Partial<Record<keyof BoxControlValue, boolean>>) => void)" }
					},
					"onHoverOn": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onHoverOn",
						"required": false,
						"tags": {},
						"type": { "name": "((sides: Partial<Record<keyof BoxControlValue, boolean>>) => void)" }
					},
					"selectedUnits": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "selectedUnits",
						"required": true,
						"tags": {},
						"type": { "name": "BoxControlValue" }
					},
					"setSelectedUnits": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "setSelectedUnits",
						"required": true,
						"tags": {},
						"type": { "name": "Dispatch<SetStateAction<BoxControlValue>>" }
					},
					"values": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "values",
						"required": true,
						"tags": {},
						"type": { "name": "BoxControlValue" }
					},
					"sides": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Collection of sides to allow control of. If omitted or empty, all sides will be available.",
						"name": "sides",
						"required": true,
						"tags": {},
						"type": { "name": "readonly (\"horizontal\" | \"vertical\" | keyof BoxControlValue)[] | undefined" }
					},
					"side": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Side represents the current side being rendered by the input.\nIt can be a concrete side like: left, right, top, bottom or a combined one like: horizontal, vertical.",
						"name": "side",
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"horizontal\" | \"vertical\" | \"all\" | \"left\" | \"right\" | \"bottom\" | \"top\"",
							"value": [
								{ "value": "\"horizontal\"" },
								{ "value": "\"vertical\"" },
								{ "value": "\"all\"" },
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" }
							]
						}
					},
					"presets": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "presets",
						"required": false,
						"tags": {},
						"type": { "name": "Preset[]" }
					},
					"presetKey": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "presetKey",
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
//#region ../packages/components/src/box-control/linked-button.tsx
function LinkedButton({ isLinked, ...props }) {
	const label = isLinked ? __("Unlink sides") : __("Link sides");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Button, {
		...props,
		className: "component-box-control__linked-button",
		size: "small",
		icon: isLinked ? link_default : link_off_default,
		iconSize: 24,
		label
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 12,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_linked_button() {
	return (init_linked_button = __esmMin((() => {
		init_build_module$2();
		init_build_module();
		init_button();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/linked-button.tsx";
		try {
			LinkedButton.__docgenInfo = {
				"description": "",
				"displayName": "linkedbutton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/linked-button.tsx",
				"methods": [],
				"props": {
					"isLinked": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/linked-button.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isLinked",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__next40pxDefaultSize": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the\ndefault size in a future version.",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"accessibleWhenDisabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n\nIn most cases, it is recommended to set this to `true`. Disabling a control without maintaining focusability\ncan cause accessibility issues, by hiding their presence from screen reader users,\nor by preventing focus from returning to a trigger element.\n\nLearn more about the [focusability of disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols)\nin the WAI-ARIA Authoring Practices Guide.",
						"name": "accessibleWhenDisabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The button's children.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.",
						"name": "description",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders an Icon component inside the button.",
						"name": "icon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType | null" }
					},
					"iconPosition": {
						"defaultValue": { "value": "'left'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the position of icon relative to the `text`.",
						"name": "iconPosition",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"left\" | \"right\"",
							"value": [{ "value": "\"left\"" }, { "value": "\"right\"" }]
						}
					},
					"iconSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `icon`, sets the icon size.\nPlease refer to the Icon component for more details regarding\nthe default value of its `size` prop.",
						"name": "iconSize",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isBusy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Indicates activity while a action is being performed.",
						"name": "isBusy",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDestructive": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a red text-based button style to indicate destructive behavior.",
						"name": "isDestructive",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a pressed button style.",
						"name": "isPressed",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Sets the `aria-label` of the component, if none is provided.\nSets the Tooltip content if `showTooltip` is provided.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, appends the Shortcut label to the tooltip content.\nIf an object is provided, it should contain `display` and `ariaLabel` keys.",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders a Tooltip component for the button.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "'default'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.\n\nIf the deprecated `isSmall` prop is also defined, this prop will take precedence.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, displays the given text inside the button. If the button contains children elements, the text is displayed before them.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"tooltipPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `showTooltip`, sets the position of the tooltip.\nPlease refer to the Tooltip component for more details regarding the defaults.",
						"name": "tooltipPosition",
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
					"variant": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the button's style.\n\nThe accepted values are:\n\n1. `'primary'` (the primary button styles)\n2. `'secondary'` (the default button styles)\n3. `'tertiary'` (the text-based button styles)\n4. `'link'` (the link button styles)",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"link\" | \"primary\" | \"secondary\" | \"tertiary\"",
							"value": [
								{ "value": "\"link\"" },
								{ "value": "\"primary\"" },
								{ "value": "\"secondary\"" },
								{ "value": "\"tertiary\"" }
							]
						}
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the button is disabled. If `true`, this will force a `button` element\nto be rendered, even when an `href` is given.\n\nIn most cases, it is recommended to also set the `accessibleWhenDisabled` prop to `true`.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__experimentalIsFocusable": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to keep the button focusable when disabled.\n@deprecated Use the `accessibleWhenDisabled` prop instead.\n@ignore",
						"name": "__experimentalIsFocusable",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isDefault": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore",
						"name": "isDefault",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isLink": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a link style.\n@deprecated Use the `'link'` value on the `variant` prop instead.\n@ignore",
						"name": "isLink",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isPrimary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a primary style.\n@deprecated Use the `'primary'` value on the `variant` prop instead.\n@ignore",
						"name": "isPrimary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSecondary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore",
						"name": "isSecondary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isTertiary": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Gives the button a text-based style.\n@deprecated Use the `'tertiary'` value on the `variant` prop instead.\n@ignore",
						"name": "isTertiary",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"isSmall": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Decreases the size of the button.\n@deprecated Use the `'small'` value on the `size` prop instead.\n@ignore",
						"name": "isSmall",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"describedBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A visually hidden accessible description for the button.\n@deprecated Use the `description` prop instead.\n@ignore",
						"name": "describedBy",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"href": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, renders `a` instead of `button`.",
						"name": "href",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"target": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided with `href`, sets the `target` attribute to the `a`.",
						"name": "target",
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
//#region ../packages/components/src/box-control/index.tsx
function useUniqueId(idProp) {
	const instanceId = use_instance_id_default(BoxControl, "inspector-box-control");
	return idProp || instanceId;
}
/**
* A control that lets users set values for top, right, bottom, and left. Can be
* used as an input control for values like `padding` or `margin`.
*
* ```jsx
* import { useState } from 'react';
* import { BoxControl } from '@wordpress/components';
*
* function Example() {
*   const [ values, setValues ] = useState( {
*     top: '50px',
*     left: '10%',
*     right: '10%',
*     bottom: '50px',
*   } );
*
*   return (
*     <BoxControl values={ values } onChange={ setValues } />
*   );
* };
* ```
*/
function BoxControl({ id: idProp, inputProps = defaultInputProps, onChange = noop, label = __("Box Control"), values: valuesProp, units, sides, splitOnAxis = false, allowReset = true, resetValues = DEFAULT_VALUES, presets, presetKey, onMouseOver, onMouseOut }) {
	const [values, setValues] = useControlledState(valuesProp, { fallback: DEFAULT_VALUES });
	const inputValues = values || DEFAULT_VALUES;
	const hasInitialValue = isValuesDefined(valuesProp);
	const hasOneSide = sides?.length === 1;
	const [isDirty, setIsDirty] = (0, import_react.useState)(hasInitialValue);
	const [isLinked, setIsLinked] = (0, import_react.useState)(!hasInitialValue || !isValueMixed(inputValues) || hasOneSide);
	const [selectedUnits, setSelectedUnits] = (0, import_react.useState)({
		top: parseQuantityAndUnitFromRawValue(valuesProp?.top)[1],
		right: parseQuantityAndUnitFromRawValue(valuesProp?.right)[1],
		bottom: parseQuantityAndUnitFromRawValue(valuesProp?.bottom)[1],
		left: parseQuantityAndUnitFromRawValue(valuesProp?.left)[1]
	});
	const id = useUniqueId(idProp);
	const headingId = `${id}-heading`;
	const toggleLinked = () => {
		setIsLinked(!isLinked);
	};
	const handleOnChange = (nextValues) => {
		onChange(nextValues);
		setValues(nextValues);
		setIsDirty(true);
	};
	const handleOnReset = () => {
		onChange(resetValues);
		setValues(resetValues);
		setSelectedUnits(resetValues);
		setIsDirty(false);
	};
	const inputControlProps = {
		onMouseOver,
		onMouseOut,
		...inputProps,
		onChange: handleOnChange,
		isLinked,
		units,
		selectedUnits,
		setSelectedUnits,
		sides,
		values: inputValues,
		presets,
		presetKey
	};
	const sidesToRender = getAllowedSides(sides);
	if (presets && !presetKey || !presets && presetKey) warning(`wp.components.BoxControl: the '${presets ? "presetKey" : "presets"}' prop is required when the '${presets ? "presets" : "presetKey"}' prop is defined.`);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Grid, {
		id,
		columns: 3,
		templateColumns: "1fr min-content min-content",
		role: "group",
		"aria-labelledby": headingId,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl.VisualLabel, {
				id: headingId,
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 148,
				columnNumber: 4
			}, this),
			isLinked && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(HStack, {
				className: style_module_default["input-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BoxInputControl, {
					side: "all",
					...inputControlProps
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 153,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 152,
				columnNumber: 5
			}, this),
			!hasOneSide && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: style_module_default["linked-button-wrapper"],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(LinkedButton, {
					onClick: toggleLinked,
					isLinked
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 158,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 157,
				columnNumber: 5
			}, this),
			!isLinked && splitOnAxis && ["vertical", "horizontal"].map((axis) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BoxInputControl, {
				side: axis,
				...inputControlProps
			}, axis, false, {
				fileName: _jsxFileName$1,
				lineNumber: 168,
				columnNumber: 6
			}, this)),
			!isLinked && !splitOnAxis && Array.from(sidesToRender).map((axis) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BoxInputControl, {
				side: axis,
				...inputControlProps
			}, axis, false, {
				fileName: _jsxFileName$1,
				lineNumber: 177,
				columnNumber: 6
			}, this)),
			allowReset && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
				className: clsx(style_module_default["reset-button"], "component-box-control__reset-button"),
				variant: "secondary",
				size: "small",
				onClick: handleOnReset,
				disabled: !isDirty,
				accessibleWhenDisabled: true,
				children: __("Reset")
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 184,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 141,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, defaultInputProps, noop;
function init_box_control() {
	return (init_box_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_build_module();
		init_build_module$1();
		init_base_control();
		init_box_input_control();
		init_linked_button();
		init_button();
		init_component$1();
		init_component();
		init_utils$1();
		init_utils();
		init_use_controlled_state();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/index.tsx";
		defaultInputProps = { min: 0 };
		noop = () => {};
		try {
			BoxControl.__docgenInfo = {
				"description": "A control that lets users set values for top, right, bottom, and left. Can be\nused as an input control for values like `padding` or `margin`.\n\n```jsx\nimport { useState } from 'react';\nimport { BoxControl } from '@wordpress/components';\n\nfunction Example() {\n  const [ values, setValues ] = useState( {\n    top: '50px',\n    left: '10%',\n    right: '10%',\n    bottom: '50px',\n  } );\n\n  return (\n    <BoxControl values={ values } onChange={ setValues } />\n  );\n};\n```",
				"displayName": "BoxControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/index.tsx",
				"methods": [],
				"props": {
					"__next40pxDefaultSize": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						}],
						"description": "@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/input-control/types.ts",
							"name": "InputControlProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"units": {
						"defaultValue": { "value": "CSS_UNITS" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/unit-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Available units to select from.",
						"name": "units",
						"required": false,
						"tags": {},
						"type": { "name": "WPUnitControlUnit[]" }
					},
					"onMouseOver": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@deprecated Pass to the `inputProps` prop instead.\n@ignore",
						"name": "onMouseOver",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"onMouseOut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "@deprecated Pass to the `inputProps` prop instead.\n@ignore",
						"name": "onMouseOut",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"allowReset": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is true, a button to reset the box control is rendered.",
						"name": "allowReset",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The id to use as a base for the unique HTML id attribute of the control.",
						"name": "id",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"inputProps": {
						"defaultValue": { "value": "{\n	min: 0,\n}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Props for the internal `UnitControl` components.",
						"name": "inputProps",
						"required": false,
						"tags": {},
						"type": { "name": "UnitControlPassthroughProps" }
					},
					"label": {
						"defaultValue": { "value": "__( 'Box Control' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Heading label for the control.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": { "value": "() => {}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback function when an input value changes.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "(next: BoxControlValue) => void" }
					},
					"resetValues": {
						"defaultValue": { "value": "{\n	top: undefined,\n	right: undefined,\n	bottom: undefined,\n	left: undefined,\n}" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `top`, `right`, `bottom`, and `left` box dimension values to use when the control is reset.",
						"name": "resetValues",
						"required": false,
						"tags": {},
						"type": { "name": "BoxControlValue" }
					},
					"sides": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Collection of sides to allow control of. If omitted or empty, all sides will be available.\n\nAllowed values are \"top\", \"right\", \"bottom\", \"left\", \"vertical\", and \"horizontal\".",
						"name": "sides",
						"required": false,
						"tags": {},
						"type": { "name": "readonly (\"horizontal\" | \"vertical\" | keyof BoxControlValue)[]" }
					},
					"splitOnAxis": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is true, when the box control is unlinked, vertical and horizontal controls\ncan be used instead of updating individual sides.",
						"name": "splitOnAxis",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"values": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current values of the control, expressed as an object of `top`, `right`, `bottom`, and `left` values.",
						"name": "values",
						"required": false,
						"tags": {},
						"type": { "name": "BoxControlValue" }
					},
					"presets": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Available presets to pick from.",
						"name": "presets",
						"required": false,
						"tags": {},
						"type": { "name": "Preset[]" }
					},
					"presetKey": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}, {
							"fileName": "gutenberg-storybook-preview/packages/components/src/box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The key of the preset to apply.\nIf you provide a list of presets, you must provide a preset key to use.\nThe format of preset selected values is going to be `var:preset|${ presetKey }|${ presetSlug }`",
						"name": "presetKey",
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
//#region ../packages/components/src/box-control/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, TemplateUncontrolled, TemplateControlled, Default, Controlled, ArbitrarySides, SingleSide, AxialControls, AxialControlsWithSingleSide, ControlWithPresets;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_box_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/box-control/stories/index.story.tsx";
		meta = {
			id: "components-boxcontrol",
			title: "Components/@wordpress-components/BoxControl",
			component: BoxControl,
			argTypes: { values: { control: false } },
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "use-with-caution",
					whereUsed: "editor",
					notes: "This component is a fallback for themes that do not supply spacing presets. Most of the time `SpacingSizesControl` from `@wordpress/block-editor` is used instead."
				}
			}
		};
		TemplateUncontrolled = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxControl, { ...props }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 9
			}, void 0);
		};
		TemplateControlled = (props) => {
			const [values, setValues] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxControl, {
				values,
				...props,
				onChange: (nextValue) => {
					setValues(nextValue);
					props.onChange?.(nextValue);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 3
			}, void 0);
		};
		Default = TemplateUncontrolled.bind({});
		Default.args = { label: "Label" };
		Controlled = TemplateControlled.bind({});
		Controlled.args = { ...Default.args };
		ArbitrarySides = TemplateControlled.bind({});
		ArbitrarySides.args = {
			...Default.args,
			sides: ["top", "bottom"]
		};
		SingleSide = TemplateControlled.bind({});
		SingleSide.args = {
			...Default.args,
			sides: ["bottom"]
		};
		AxialControls = TemplateControlled.bind({});
		AxialControls.args = {
			...Default.args,
			splitOnAxis: true
		};
		AxialControlsWithSingleSide = TemplateControlled.bind({});
		AxialControlsWithSingleSide.args = {
			...Default.args,
			sides: ["horizontal"],
			splitOnAxis: true
		};
		ControlWithPresets = TemplateControlled.bind({});
		ControlWithPresets.args = {
			...Default.args,
			presets: [
				{
					name: "Small",
					slug: "small",
					value: "4px"
				},
				{
					name: "Medium",
					slug: "medium",
					value: "8px"
				},
				{
					name: "Large",
					slug: "large",
					value: "12px"
				},
				{
					name: "Extra Large",
					slug: "extra-large",
					value: "16px"
				}
			],
			presetKey: "padding"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <BoxControl {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Controlled.parameters = {
			...Controlled.parameters,
			docs: {
				...Controlled.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [values, setValues] = useState<(typeof props)['values']>();\n  return <BoxControl values={values} {...props} onChange={nextValue => {\n    setValues(nextValue);\n    props.onChange?.(nextValue);\n  }} />;\n}",
					...Controlled.parameters?.docs?.source
				}
			}
		};
		ArbitrarySides.parameters = {
			...ArbitrarySides.parameters,
			docs: {
				...ArbitrarySides.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [values, setValues] = useState<(typeof props)['values']>();\n  return <BoxControl values={values} {...props} onChange={nextValue => {\n    setValues(nextValue);\n    props.onChange?.(nextValue);\n  }} />;\n}",
					...ArbitrarySides.parameters?.docs?.source
				}
			}
		};
		SingleSide.parameters = {
			...SingleSide.parameters,
			docs: {
				...SingleSide.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [values, setValues] = useState<(typeof props)['values']>();\n  return <BoxControl values={values} {...props} onChange={nextValue => {\n    setValues(nextValue);\n    props.onChange?.(nextValue);\n  }} />;\n}",
					...SingleSide.parameters?.docs?.source
				}
			}
		};
		AxialControls.parameters = {
			...AxialControls.parameters,
			docs: {
				...AxialControls.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [values, setValues] = useState<(typeof props)['values']>();\n  return <BoxControl values={values} {...props} onChange={nextValue => {\n    setValues(nextValue);\n    props.onChange?.(nextValue);\n  }} />;\n}",
					...AxialControls.parameters?.docs?.source
				}
			}
		};
		AxialControlsWithSingleSide.parameters = {
			...AxialControlsWithSingleSide.parameters,
			docs: {
				...AxialControlsWithSingleSide.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [values, setValues] = useState<(typeof props)['values']>();\n  return <BoxControl values={values} {...props} onChange={nextValue => {\n    setValues(nextValue);\n    props.onChange?.(nextValue);\n  }} />;\n}",
					...AxialControlsWithSingleSide.parameters?.docs?.source
				}
			}
		};
		ControlWithPresets.parameters = {
			...ControlWithPresets.parameters,
			docs: {
				...ControlWithPresets.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [values, setValues] = useState<(typeof props)['values']>();\n  return <BoxControl values={values} {...props} onChange={nextValue => {\n    setValues(nextValue);\n    props.onChange?.(nextValue);\n  }} />;\n}",
					...ControlWithPresets.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { ArbitrarySides, AxialControls, AxialControlsWithSingleSide, ControlWithPresets, Controlled, Default, SingleSide, meta as default };
