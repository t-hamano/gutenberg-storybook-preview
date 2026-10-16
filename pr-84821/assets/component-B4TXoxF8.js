import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as useCopyToClipboard, i as init_use_copy_to_clipboard, n as pe, r as ve, t as init_dist } from "./dist-KzAeaPz4.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { t as copy_default } from "./copy-WdV9Qmy9.js";
import { a as S, i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { n as init_tooltip, t as Tooltip } from "./tooltip-C9B-2Nhf.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
import { n as useControlledValue, t as init_use_controlled_value } from "./use-controlled-value-B56JrsG0.js";
import { i as init_colors_values, r as COLORS } from "./config-values-hzX34N5c.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CkY7eURU.js";
import { n as init_component$1, t as Flex } from "./component-C5W2knei.js";
import { n as init_component$2, t as HStack } from "./component-BAVSem4V.js";
import { n as init_component$3, t as Text } from "./component-ezdH976D.js";
import { n as init_input_control, t as InputControl } from "./input-control-C54OF_Dl.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_number_control, t as NumberControl } from "./number-control-BsMYN7_s.js";
import { n as init_input_prefix_wrapper, t as InputControlPrefixWrapper } from "./input-prefix-wrapper-CKGIiYfr.js";
import { n as init_select_control, t as SelectControl } from "./select-control-CZM95b4n.js";
import { n as init_range_control, t as RangeControl } from "./range-control-DLLdsuRW.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/color-picker/style.module.scss
var select, range, auxiliary, header, colorful, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		select = "_select_kzodg_50";
		range = "_range_kzodg_55";
		auxiliary = "_auxiliary_kzodg_61";
		header = "_header_kzodg_65";
		colorful = "_colorful_kzodg_77";
		style_module_default = {
			"number-control": "_number-control_kzodg_46",
			select,
			range,
			auxiliary,
			header,
			"color-input": "_color-input_kzodg_69",
			colorful
		};
	})))();
}
//#endregion
//#region ../packages/components/src/color-picker/color-copy-button.tsx
var import_jsx_dev_runtime$7, _jsxFileName$7, ColorCopyButton;
function init_color_copy_button() {
	return (init_color_copy_button = __esmMin((() => {
		init_use_copy_to_clipboard();
		init_react();
		init_build_module$1();
		init_build_module();
		init_button();
		init_tooltip();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/color-copy-button.tsx";
		ColorCopyButton = (props) => {
			const { color, colorType } = props;
			const [copiedColor, setCopiedColor] = (0, import_react.useState)(null);
			const copyTimerRef = (0, import_react.useRef)(void 0);
			const copyRef = useCopyToClipboard(() => {
				switch (colorType) {
					case "hsl": return color.toHslString();
					case "rgb": return color.toRgbString();
					default:
					case "hex": return color.toHex();
				}
			}, () => {
				if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
				setCopiedColor(color.toHex());
				copyTimerRef.current = setTimeout(() => {
					setCopiedColor(null);
					copyTimerRef.current = void 0;
				}, 3e3);
			});
			(0, import_react.useEffect)(() => {
				return () => {
					if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
				};
			}, []);
			const isCopied = copiedColor === color.toHex();
			const label = isCopied ? __("Copied!") : __("Copy");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Tooltip, {
				delay: 0,
				hideOnClick: false,
				text: label,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Button, {
					size: "compact",
					"aria-label": label,
					ref: copyRef,
					icon: isCopied ? check_default : copy_default,
					showTooltip: false
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 53,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 52,
				columnNumber: 3
			}, void 0);
		};
		try {
			ColorCopyButton.__docgenInfo = {
				"description": "",
				"displayName": "ColorCopyButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/color-copy-button.tsx",
				"methods": [],
				"props": {
					"color": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "color",
						"required": true,
						"tags": {},
						"type": { "name": "Colord" }
					},
					"colorType": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "colorType",
						"required": true,
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/color-picker/input-with-slider.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, InputWithSlider;
function init_input_with_slider() {
	return (init_input_with_slider = __esmMin((() => {
		init_component$2();
		init_component$3();
		init_range_control();
		init_number_control();
		init_style_module();
		init_colors_values();
		init_input_prefix_wrapper();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/input-with-slider.tsx";
		InputWithSlider = ({ min, max, label, abbreviation, onChange, value }) => {
			const onNumberControlChange = (newValue) => {
				if (!newValue) {
					onChange(0);
					return;
				}
				if (typeof newValue === "string") {
					onChange(parseInt(newValue, 10));
					return;
				}
				onChange(newValue);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(HStack, {
				spacing: 4,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(NumberControl, {
					className: style_module_default["number-control"],
					min,
					max,
					label,
					hideLabelFromVision: true,
					value,
					onChange: onNumberControlChange,
					prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(InputControlPrefixWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(Text, {
						color: COLORS.theme.accent,
						lineHeight: 1,
						children: abbreviation
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 42,
						columnNumber: 7
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 41,
						columnNumber: 6
					}, void 0),
					spinControls: "none"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 32,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(RangeControl, {
					className: style_module_default.range,
					label,
					hideLabelFromVision: true,
					min,
					max,
					value,
					onChange,
					withInputField: false
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 49,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 31,
				columnNumber: 3
			}, void 0);
		};
		try {
			InputWithSlider.__docgenInfo = {
				"description": "",
				"displayName": "InputWithSlider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/input-with-slider.tsx",
				"methods": [],
				"props": {
					"min": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						}],
						"description": "",
						"name": "min",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"max": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						}],
						"description": "",
						"name": "max",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						}],
						"description": "",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "number" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						}],
						"description": "",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"abbreviation": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						}],
						"description": "",
						"name": "abbreviation",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "InputWithSliderProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(value: number) => void" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/color-picker/rgb-input.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, RgbInput;
function init_rgb_input() {
	return (init_rgb_input = __esmMin((() => {
		init_build_module();
		init_colord();
		init_input_with_slider();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/rgb-input.tsx";
		RgbInput = ({ color, onChange, enableAlpha }) => {
			const { r, g, b, a } = color.toRgb();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(import_jsx_dev_runtime$5.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(InputWithSlider, {
					min: 0,
					max: 255,
					label: __("Red"),
					abbreviation: "R",
					value: r,
					onChange: (nextR) => onChange(A({
						r: nextR,
						g,
						b,
						a
					}))
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 11,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(InputWithSlider, {
					min: 0,
					max: 255,
					label: __("Green"),
					abbreviation: "G",
					value: g,
					onChange: (nextG) => onChange(A({
						r,
						g: nextG,
						b,
						a
					}))
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 21,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(InputWithSlider, {
					min: 0,
					max: 255,
					label: __("Blue"),
					abbreviation: "B",
					value: b,
					onChange: (nextB) => onChange(A({
						r,
						g,
						b: nextB,
						a
					}))
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 31,
					columnNumber: 4
				}, void 0),
				enableAlpha && /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(InputWithSlider, {
					min: 0,
					max: 100,
					label: __("Alpha (RGB A value)"),
					abbreviation: "A",
					value: Math.trunc(a * 100),
					onChange: (nextA) => onChange(A({
						r,
						g,
						b,
						a: nextA / 100
					}))
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 42,
					columnNumber: 5
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 10,
				columnNumber: 3
			}, void 0);
		};
		try {
			RgbInput.__docgenInfo = {
				"description": "",
				"displayName": "RgbInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/rgb-input.tsx",
				"methods": [],
				"props": {
					"color": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "RgbInputProps"
						}],
						"description": "",
						"name": "color",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "RgbInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Colord" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "RgbInputProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "RgbInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(nextColor: Colord) => void" }
					},
					"enableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "RgbInputProps"
						}],
						"description": "",
						"name": "enableAlpha",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "RgbInputProps"
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
//#region ../packages/components/src/color-picker/hsl-input.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, HslInput;
function init_hsl_input() {
	return (init_hsl_input = __esmMin((() => {
		init_build_module();
		init_input_with_slider();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/hsl-input.tsx";
		HslInput = ({ hsla, onChange, enableAlpha }) => {
			const updateHSLAValue = (partialNewValue) => {
				onChange({
					...hsla,
					...partialNewValue
				});
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(import_jsx_dev_runtime$4.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(InputWithSlider, {
					min: 0,
					max: 359,
					label: __("Hue (HSL H value)"),
					abbreviation: "H",
					value: hsla.h,
					onChange: (nextH) => {
						updateHSLAValue({ h: nextH });
					}
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 16,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(InputWithSlider, {
					min: 0,
					max: 100,
					label: __("Saturation"),
					abbreviation: "S",
					value: hsla.s,
					onChange: (nextS) => {
						updateHSLAValue({ s: nextS });
					}
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 26,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(InputWithSlider, {
					min: 0,
					max: 100,
					label: __("Lightness"),
					abbreviation: "L",
					value: hsla.l,
					onChange: (nextL) => {
						updateHSLAValue({ l: nextL });
					}
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 36,
					columnNumber: 4
				}, void 0),
				enableAlpha && /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(InputWithSlider, {
					min: 0,
					max: 100,
					label: __("Alpha (HSL A value)"),
					abbreviation: "A",
					value: Math.trunc(100 * hsla.a),
					onChange: (nextA) => {
						updateHSLAValue({ a: nextA / 100 });
					}
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 47,
					columnNumber: 5
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 15,
				columnNumber: 3
			}, void 0);
		};
		try {
			HslInput.__docgenInfo = {
				"description": "",
				"displayName": "HslInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/hsl-input.tsx",
				"methods": [],
				"props": {
					"hsla": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HslInputProps"
						}],
						"description": "",
						"name": "hsla",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HslInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "HslaColor" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HslInputProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HslInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(nextHsla: HslaColor) => void" }
					},
					"enableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HslInputProps"
						}],
						"description": "",
						"name": "enableAlpha",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HslInputProps"
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
//#region ../packages/components/src/color-picker/hex-input.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, HexInput;
function init_hex_input() {
	return (init_hex_input = __esmMin((() => {
		init_colord();
		init_build_module();
		init_input_control();
		init_component$3();
		init_colors_values();
		init_input_prefix_wrapper();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/hex-input.tsx";
		HexInput = ({ color, onChange, enableAlpha }) => {
			const handleChange = (nextValue) => {
				if (nextValue === void 0) return;
				const hexValue = nextValue.startsWith("#") ? nextValue : "#" + nextValue;
				onChange(A(hexValue));
			};
			const stateReducer = (state, action) => {
				if ("insertFromPaste" !== (action.payload?.event?.nativeEvent)?.inputType) return { ...state };
				const value = state.value?.startsWith("#") ? state.value.slice(1).toUpperCase() : state.value?.toUpperCase();
				return {
					...state,
					value
				};
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(InputControl, {
				prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(InputControlPrefixWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Text, {
					color: COLORS.theme.accent,
					lineHeight: 1,
					children: "#"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 40,
					columnNumber: 6
				}, void 0) }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 39,
					columnNumber: 5
				}, void 0),
				value: color.toHex().slice(1).toUpperCase(),
				onChange: handleChange,
				maxLength: enableAlpha ? 9 : 7,
				label: __("Hex color"),
				hideLabelFromVision: true,
				__unstableStateReducer: stateReducer,
				__unstableInputWidth: "9em"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 37,
				columnNumber: 3
			}, void 0);
		};
		try {
			HexInput.__docgenInfo = {
				"description": "",
				"displayName": "HexInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/hex-input.tsx",
				"methods": [],
				"props": {
					"color": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HexInputProps"
						}],
						"description": "",
						"name": "color",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HexInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Colord" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HexInputProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HexInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(nextColor: Colord) => void" }
					},
					"enableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HexInputProps"
						}],
						"description": "",
						"name": "enableAlpha",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "HexInputProps"
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
//#region ../packages/components/src/color-picker/color-input.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, ColorInput;
function init_color_input() {
	return (init_color_input = __esmMin((() => {
		init_rgb_input();
		init_hsl_input();
		init_hex_input();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/color-input.tsx";
		ColorInput = ({ colorType, color, hsla, onChange, onHSLChange, enableAlpha }) => {
			switch (colorType) {
				case "hsl": return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(HslInput, {
					hsla,
					onChange: onHSLChange,
					enableAlpha
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 17,
					columnNumber: 5
				}, void 0);
				case "rgb": return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(RgbInput, {
					color,
					onChange,
					enableAlpha
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 25,
					columnNumber: 5
				}, void 0);
				default:
				case "hex": return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(HexInput, {
					color,
					onChange,
					enableAlpha
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 34,
					columnNumber: 5
				}, void 0);
			}
		};
		try {
			ColorInput.__docgenInfo = {
				"description": "",
				"displayName": "ColorInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/color-input.tsx",
				"methods": [],
				"props": {
					"colorType": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						}],
						"description": "",
						"name": "colorType",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						},
						"required": true,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"rgb\" | \"hsl\" | \"hex\"",
							"value": [
								{ "value": "\"rgb\"" },
								{ "value": "\"hsl\"" },
								{ "value": "\"hex\"" }
							]
						}
					},
					"color": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						}],
						"description": "",
						"name": "color",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "Colord" }
					},
					"hsla": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						}],
						"description": "",
						"name": "hsla",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "HslaColor" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(nextColor: Colord) => void" }
					},
					"onHSLChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						}],
						"description": "",
						"name": "onHSLChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(nextHsla: HslaColor) => void" }
					},
					"enableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
						}],
						"description": "",
						"name": "enableAlpha",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "ColorInputProps"
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
//#region ../packages/components/src/color-picker/picker.tsx
function toHsva(hsla) {
	return {
		...A(hsla).toHsv(),
		h: hsla.h,
		a: hsla.a
	};
}
function isSameHsla(a, b) {
	return a.h === b.h && a.s === b.s && a.l === b.l && a.a === b.a;
}
/**
* Convert parent HSLA into HSVA for prop sync.
*
* At black, RGB round-trips collapse saturation to 0. Preserve the native
* HSVA saturation coordinate unless the HSL saturation channel itself
* changed (sibling hue/alpha edits must not snap the pointer).
*
* At white, only `v: 100, s: 0` is visually white — preserving a prior
* chromatic saturation would leave the pointer at the top-right and make
* the first keyboard step jump from white to a saturated color.
*/
function toHsvaFromHsla(hsla, prevHsva, prevHsla) {
	const converted = toHsva(hsla);
	if (hsla.l !== 0) return converted;
	const saturationChanged = prevHsla !== null && prevHsla.s !== hsla.s;
	return {
		h: hsla.h,
		s: saturationChanged ? hsla.s : prevHsva.s,
		v: 0,
		a: hsla.a
	};
}
var import_jsx_dev_runtime$1, _jsxFileName$1, Picker;
function init_picker() {
	return (init_picker = __esmMin((() => {
		init_react();
		init_dist();
		init_colord();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/picker.tsx";
		Picker = ({ hsla, enableAlpha, onChange, onInteractionStart, onInteractionEnd }) => {
			const [hsva, setHsva] = (0, import_react.useState)(() => toHsva(hsla));
			const pickerOriginHslaRef = (0, import_react.useRef)(null);
			const prevHslaRef = (0, import_react.useRef)(hsla);
			const isPointerInteractingRef = (0, import_react.useRef)(false);
			(0, import_react.useEffect)(() => {
				if (isPointerInteractingRef.current) {
					prevHslaRef.current = hsla;
					return;
				}
				if (pickerOriginHslaRef.current && isSameHsla(pickerOriginHslaRef.current, hsla)) {
					prevHslaRef.current = hsla;
					return;
				}
				pickerOriginHslaRef.current = null;
				setHsva((prev) => toHsvaFromHsla(hsla, prev, prevHslaRef.current));
				prevHslaRef.current = hsla;
			}, [hsla]);
			const pointerCaptureProps = {
				onPointerDown({ currentTarget, pointerId }) {
					isPointerInteractingRef.current = true;
					onInteractionStart?.();
					currentTarget.setPointerCapture(pointerId);
				},
				onPointerUp({ currentTarget, pointerId }) {
					currentTarget.releasePointerCapture(pointerId);
					isPointerInteractingRef.current = false;
					onInteractionEnd?.();
				},
				onPointerCancel({ currentTarget, pointerId }) {
					currentTarget.releasePointerCapture(pointerId);
					isPointerInteractingRef.current = false;
					onInteractionEnd?.();
				}
			};
			const handleChange = (next) => {
				setHsva(next);
				const nextHsla = {
					...A(next).toHsl(),
					a: next.a
				};
				pickerOriginHslaRef.current = nextHsla;
				onChange(nextHsla);
			};
			if (enableAlpha) return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ve, {
				color: hsva,
				onChange: handleChange,
				...pointerCaptureProps
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 138,
				columnNumber: 4
			}, void 0);
			const hsv = {
				h: hsva.h,
				s: hsva.s,
				v: hsva.v
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(pe, {
				color: hsv,
				onChange: (next) => {
					handleChange({
						...next,
						a: hsva.a
					});
				},
				...pointerCaptureProps
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 152,
				columnNumber: 3
			}, void 0);
		};
		try {
			Picker.__docgenInfo = {
				"description": "Visual color surface.\n\nUses HSVA (react-colorful's native model) and keeps that value in local\nstate so HSLA↔hex round-trips cannot move the pointer\nParent ColorPicker still speaks HSLA for\ninputs and controlled value sync; conversion happens only at the boundary.\n\nProp sync from parent HSLA is suppressed for:\n- pointer/touch drags (interaction flag), and\n- any picker-originated update including keyboard (HSLA origin token).\n\nAchromatic HSL sibling edits (hue/alpha while at black) preserve native\nHSVA saturation unless saturation itself changed. White always syncs to\nthe converted `s: 0` visual coordinate.",
				"displayName": "Picker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/picker.tsx",
				"methods": [],
				"props": {
					"hsla": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						}],
						"description": "",
						"name": "hsla",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "HslaColor" }
					},
					"enableAlpha": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						}],
						"description": "",
						"name": "enableAlpha",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						}],
						"description": "",
						"name": "onChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "(nextHsla: HslaColor) => void" }
					},
					"onInteractionStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						}],
						"description": "",
						"name": "onInteractionStart",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"onInteractionEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						}],
						"description": "",
						"name": "onInteractionEnd",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "PickerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/color-picker/component.tsx
/**
* Merges incoming HSLA with previous state, preserving hue for achromatic
* colors and saturation only at lightness extremes (black/white) where
* it has no visual effect.
*/
function mergeHSLA(nextHSLA, prevHSLA) {
	if (nextHSLA.s === 0) {
		if (nextHSLA.l === 0 || nextHSLA.l === 100) return {
			...nextHSLA,
			h: prevHSLA.h,
			s: prevHSLA.s
		};
		return {
			...nextHSLA,
			h: prevHSLA.h
		};
	}
	return nextHSLA;
}
var import_jsx_dev_runtime, _jsxFileName, options, UnconnectedColorPicker, ColorPicker;
function init_component() {
	return (init_component = __esmMin((() => {
		init_clsx();
		init_colord();
		init_names();
		init_react();
		init_use_debounce();
		init_build_module();
		init_use_context_system(), init_context_connect();
		init_select_control();
		init_component$2();
		init_component$1();
		init_polymorphic_element();
		init_style_module();
		init_color_copy_button();
		init_color_input();
		init_picker();
		init_use_controlled_value();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/component.tsx";
		D([e]);
		options = [
			{
				label: "RGB",
				value: "rgb"
			},
			{
				label: "HSL",
				value: "hsl"
			},
			{
				label: "Hex",
				value: "hex"
			}
		];
		UnconnectedColorPicker = (props, forwardedRef) => {
			const { enableAlpha = false, color: colorProp, onChange, defaultValue = "#fff", copyFormat, className, ...divProps } = useContextSystem(props, "ColorPicker");
			const [color, setColor] = useControlledValue({
				onChange,
				value: colorProp,
				defaultValue
			});
			const safeColordColor = (0, import_react.useMemo)(() => {
				return A(color || "");
			}, [color]);
			const debouncedSetColor = useDebounce(setColor);
			const [internalHSLA, setInternalHSLA] = (0, import_react.useState)(() => ({ ...safeColordColor.toHsl() }));
			const lastProducedHexRef = (0, import_react.useRef)(safeColordColor.toHex());
			const isPickerInteractingRef = (0, import_react.useRef)(false);
			(0, import_react.useEffect)(() => {
				if (isPickerInteractingRef.current) return;
				if (safeColordColor.isEqual(lastProducedHexRef.current)) return;
				lastProducedHexRef.current = safeColordColor.toHex();
				const externalHSLA = safeColordColor.toHsl();
				setInternalHSLA((prev) => mergeHSLA(externalHSLA, prev));
			}, [safeColordColor]);
			const handleHSLAChange = (0, import_react.useCallback)((nextHSLA) => {
				setInternalHSLA(nextHSLA);
				const previousHex = lastProducedHexRef.current;
				const nextHex = A(nextHSLA).toHex();
				if (!A(nextHex).isEqual(previousHex)) {
					lastProducedHexRef.current = nextHex;
					setColor(nextHex);
				}
			}, [setColor]);
			const handleChange = (0, import_react.useCallback)((nextValue) => {
				const nextHSLA = nextValue.toHsl();
				setInternalHSLA((prev) => mergeHSLA(nextHSLA, prev));
				const nextHex = nextValue.toHex();
				lastProducedHexRef.current = nextHex;
				debouncedSetColor(nextHex);
			}, [debouncedSetColor]);
			const [colorType, setColorType] = (0, import_react.useState)(copyFormat || "hex");
			const maybeHandlePaste = (0, import_react.useCallback)((event) => {
				const pastedText = event.clipboardData?.getData("text")?.trim();
				if (!pastedText) return;
				const parsedColor = A(pastedText);
				if (!parsedColor.isValid()) return;
				handleChange(parsedColor);
				const newColorType = {
					hex: "hex",
					rgb: "rgb",
					hsl: "hsl"
				}[String(S(pastedText))];
				if (newColorType) setColorType(newColorType);
				event.stopPropagation();
				event.preventDefault();
			}, [handleChange, setColorType]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PolymorphicElement, {
				ref: forwardedRef,
				...divProps,
				className: clsx(style_module_default.colorful, className),
				onPasteCapture: maybeHandlePaste,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Picker, {
					onChange: handleHSLAChange,
					hsla: internalHSLA,
					enableAlpha,
					onInteractionStart: () => {
						isPickerInteractingRef.current = true;
					},
					onInteractionEnd: () => {
						isPickerInteractingRef.current = false;
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 199,
					columnNumber: 4
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: style_module_default.auxiliary,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, {
						className: style_module_default.header,
						justify: "space-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
							className: style_module_default.select,
							size: "compact",
							options,
							value: colorType,
							onChange: (nextColorType) => setColorType(nextColorType),
							label: __("Color format"),
							hideLabelFromVision: true,
							variant: "minimal"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 212,
							columnNumber: 6
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorCopyButton, {
							color: safeColordColor,
							colorType: copyFormat || colorType
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 224,
							columnNumber: 6
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 211,
						columnNumber: 5
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
						className: style_module_default["color-input"],
						direction: "column",
						gap: 2,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorInput, {
							colorType,
							color: safeColordColor,
							hsla: internalHSLA,
							onChange: handleChange,
							onHSLChange: handleHSLAChange,
							enableAlpha
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 234,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 5
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 210,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 3
			}, void 0);
		};
		ColorPicker = contextConnect(UnconnectedColorPicker, "ColorPicker");
		try {
			ColorPicker.__docgenInfo = {
				"description": "`ColorPicker` lets users select a color from a visual color surface, or by\nediting its hex, RGB, or HSL values.",
				"displayName": "ColorPicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-picker/component.tsx",
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
						}],
						"description": "The current color value to display in the picker.\nMust be a hex or hex8 string.",
						"name": "color",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/color-picker/types.ts",
							"name": "TypeLiteral"
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_component as n, ColorPicker as t };
