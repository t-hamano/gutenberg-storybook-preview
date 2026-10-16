import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as useCopyToClipboard, i as init_use_copy_to_clipboard, n as pe, r as ve, t as init_dist } from "./dist-KzAeaPz4.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { n as memize } from "./dist-DL-769ey.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { t as copy_default } from "./copy-WdV9Qmy9.js";
import { n as tooltip_default, t as init_tooltip } from "./tooltip-B41rxI5o.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { n as useControlledValue, t as init_use_controlled_value } from "./use-controlled-value-CCRFAPBO.js";
import { a as S, i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { c as init_component$1, s as component_default$1 } from "./input-base-BibkJaYJ.js";
import { i as init_colors_values, r as COLORS } from "./config-values-0x5e6kXt.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CFOx0tK5.js";
import { n as init_component$2, t as component_default$2 } from "./component-DKizmr6G.js";
import { n as init_input_control, t as InputControl } from "./input-control-BabNp7Sg.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { r as init_button, t as Button } from "./button-BxEkUQAF.js";
import { n as number_control_default, t as init_number_control } from "./number-control-DH-M3uwi.js";
import { n as init_component$3, t as component_default$3 } from "./component-ThRvbQN8.js";
import { n as init_input_prefix_wrapper, r as input_prefix_wrapper_default } from "./input-prefix-wrapper-DRLWORU6.js";
import { a as init_select_control_styles, i as StyledInputBase, n as init_chevron_down, r as Select, t as chevron_down_default } from "./chevron-down-CvW7qBxj.js";
import { n as range_control_default, t as init_range_control } from "./range-control-Zoz8xOxu.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/build-module/select-control/index.mjs
function useUniqueId(idProp) {
	const id = `inspector-select-control-${use_instance_id_default(SelectControl)}`;
	return idProp || id;
}
function SelectOptions({ options }) {
	return options.map(({ id, label, value, ...optionProps }, index) => {
		const key = id || `${label}-${value}-${index}`;
		return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)("option", {
			value,
			...optionProps,
			children: label
		}, key);
	});
}
function UnforwardedSelectControl(props, ref) {
	const { __nextHasNoMarginBottom: _, __next40pxDefaultSize: _next40pxDefaultSize, __next36pxDefaultSize: _next36pxDefaultSize, className, disabled = false, help, hideLabelFromVision, id: idProp, label, multiple = false, onChange, options = [], size = "default", value: valueProp, labelPosition = "top", children, prefix, suffix, variant = "default", ...restProps } = props;
	const id = useUniqueId(idProp);
	const helpId = help ? `${id}__help` : void 0;
	if (!options?.length && !children) return null;
	const handleOnChange = (event) => {
		if (props.multiple) {
			const newValues = Array.from(event.target.options).filter(({ selected }) => selected).map(({ value }) => value);
			props.onChange?.(newValues, { event });
			return;
		}
		props.onChange?.(event.target.value, { event });
	};
	const classes = clsx("components-select-control", className);
	return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(base_control_default, {
		help,
		id,
		className: classes,
		children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(StyledInputBase, {
			disabled,
			hideLabelFromVision,
			id,
			isBorderless: variant === "minimal",
			label,
			size,
			suffix: suffix || !multiple && /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(chevron_down_default, {}),
			prefix,
			labelPosition,
			__unstableInputWidth: variant === "minimal" ? "auto" : void 0,
			variant,
			children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(Select, {
				...restProps,
				"aria-describedby": helpId,
				className: "components-select-control__input",
				disabled,
				id,
				multiple,
				onChange: handleOnChange,
				ref,
				selectSize: size,
				value: valueProp,
				variant,
				children: children || /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(SelectOptions, { options })
			})
		})
	});
}
var import_jsx_runtime$10, SelectControl, select_control_default;
function init_select_control() {
	return (init_select_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_react();
		init_base_control();
		init_select_control_styles();
		init_chevron_down();
		import_jsx_runtime$10 = require_jsx_runtime();
		SelectControl = (0, import_react.forwardRef)(UnforwardedSelectControl);
		SelectControl.displayName = "SelectControl";
		select_control_default = SelectControl;
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/color-copy-button.mjs
var import_jsx_runtime$9, ColorCopyButton;
function init_color_copy_button() {
	return (init_color_copy_button = __esmMin((() => {
		init_use_copy_to_clipboard();
		init_react();
		init_build_module$1();
		init_build_module();
		init_button();
		init_tooltip();
		import_jsx_runtime$9 = require_jsx_runtime();
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
			return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(tooltip_default, {
				delay: 0,
				hideOnClick: false,
				text: label,
				children: /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(Button, {
					size: "compact",
					"aria-label": label,
					ref: copyRef,
					icon: isCopied ? check_default : copy_default,
					showTooltip: false
				})
			});
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/input-with-slider.mjs
function getRuntime$2() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$2(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$2(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$2}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$2) === hash) return true;
	return false;
}
function injectStyle$2(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$2();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$2(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$2, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$2(targetDocument) {
	const runtime = getRuntime$2();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$2(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$2(hash, css) {
	const runtime = getRuntime$2();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$2(targetDocument, hash, css);
}
var import_jsx_runtime$8, STYLE_HASH_ATTRIBUTE$2, style_module_default$2, InputWithSlider;
function init_input_with_slider() {
	return (init_input_with_slider = __esmMin((() => {
		init_component$3();
		init_component$1();
		init_range_control();
		init_number_control();
		init_colors_values();
		init_input_prefix_wrapper();
		import_jsx_runtime$8 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("94951cc1b3", ".d5fb11b3ac205b2e__number-control{width:96px}.b1a4d36a44f8cc0c__select{margin-left:-8px}.d4a7bb47ecb2b0d3__range{flex:1;margin-right:8px}.b3d7fd1f53a9c9d5__auxiliary{padding:8px 0 0}.c23c856a474c9ee4__header{padding-inline:16px}._6cfd73c2a89d0939__color-input{padding-block:16px 20px;padding-left:16px;padding-right:12px}._16d3b14e7b02f8e4__colorful{box-sizing:border-box}._16d3b14e7b02f8e4__colorful *,._16d3b14e7b02f8e4__colorful :after,._16d3b14e7b02f8e4__colorful :before{box-sizing:inherit}._16d3b14e7b02f8e4__colorful{width:216px}._16d3b14e7b02f8e4__colorful .react-colorful{align-items:center;display:flex;flex-direction:column;height:auto;width:216px}._16d3b14e7b02f8e4__colorful .react-colorful__saturation{border-bottom:none;border-radius:0;height:216px;margin-bottom:16px;width:100%}._16d3b14e7b02f8e4__colorful .react-colorful__alpha,._16d3b14e7b02f8e4__colorful .react-colorful__hue{border-radius:9999px;height:16px;margin-bottom:8px;width:184px}._16d3b14e7b02f8e4__colorful .react-colorful__pointer{border:none;box-shadow:0 0 2px 0 rgba(0,0,0,.25);height:16px;outline:2px solid transparent;width:16px}@media not (prefers-reduced-motion){._16d3b14e7b02f8e4__colorful .react-colorful__pointer{transition:transform .16s ease-in-out}}._16d3b14e7b02f8e4__colorful .react-colorful__interactive:focus .react-colorful__pointer{border:1.5px solid #000;box-shadow:0 0 0 1.5px #fff;transform:translate(-50%,-50%) scale(1.5)}._16d3b14e7b02f8e4__colorful .react-colorful__pointer-fill{box-shadow:inset 0 0 0 1.5px #fff}._16d3b14e7b02f8e4__colorful .react-colorful__interactive{margin-left:4px;width:calc(100% - 8px)}");
		style_module_default$2 = {
			"number-control": "d5fb11b3ac205b2e__number-control",
			"select": "b1a4d36a44f8cc0c__select",
			"range": "d4a7bb47ecb2b0d3__range",
			"auxiliary": "b3d7fd1f53a9c9d5__auxiliary",
			"header": "c23c856a474c9ee4__header",
			"color-input": "_6cfd73c2a89d0939__color-input",
			"colorful": "_16d3b14e7b02f8e4__colorful"
		};
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
			return /* @__PURE__ */ (0, import_jsx_runtime$8.jsxs)(component_default$3, {
				spacing: 4,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(number_control_default, {
					className: style_module_default$2["number-control"],
					min,
					max,
					label,
					hideLabelFromVision: true,
					value,
					onChange: onNumberControlChange,
					prefix: /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(input_prefix_wrapper_default, { children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(component_default$1, {
						color: COLORS.theme.accent,
						lineHeight: 1,
						children: abbreviation
					}) }),
					spinControls: "none"
				}), /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(range_control_default, {
					className: style_module_default$2.range,
					label,
					hideLabelFromVision: true,
					min,
					max,
					value,
					onChange,
					withInputField: false
				})]
			});
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/rgb-input.mjs
var import_jsx_runtime$7, RgbInput;
function init_rgb_input() {
	return (init_rgb_input = __esmMin((() => {
		init_build_module();
		init_colord();
		init_input_with_slider();
		import_jsx_runtime$7 = require_jsx_runtime();
		RgbInput = ({ color, onChange, enableAlpha }) => {
			const { r, g, b, a } = color.toRgb();
			return /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)(import_jsx_runtime$7.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(InputWithSlider, {
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(InputWithSlider, {
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(InputWithSlider, {
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
				}),
				enableAlpha && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(InputWithSlider, {
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
				})
			] });
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/hsl-input.mjs
var import_jsx_runtime$6, HslInput;
function init_hsl_input() {
	return (init_hsl_input = __esmMin((() => {
		init_build_module();
		init_input_with_slider();
		import_jsx_runtime$6 = require_jsx_runtime();
		HslInput = ({ hsla, onChange, enableAlpha }) => {
			const updateHSLAValue = (partialNewValue) => {
				onChange({
					...hsla,
					...partialNewValue
				});
			};
			return /* @__PURE__ */ (0, import_jsx_runtime$6.jsxs)(import_jsx_runtime$6.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(InputWithSlider, {
					min: 0,
					max: 359,
					label: __("Hue (HSL H value)"),
					abbreviation: "H",
					value: hsla.h,
					onChange: (nextH) => {
						updateHSLAValue({ h: nextH });
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(InputWithSlider, {
					min: 0,
					max: 100,
					label: __("Saturation"),
					abbreviation: "S",
					value: hsla.s,
					onChange: (nextS) => {
						updateHSLAValue({ s: nextS });
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(InputWithSlider, {
					min: 0,
					max: 100,
					label: __("Lightness"),
					abbreviation: "L",
					value: hsla.l,
					onChange: (nextL) => {
						updateHSLAValue({ l: nextL });
					}
				}),
				enableAlpha && /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)(InputWithSlider, {
					min: 0,
					max: 100,
					label: __("Alpha (HSL A value)"),
					abbreviation: "A",
					value: Math.trunc(100 * hsla.a),
					onChange: (nextA) => {
						updateHSLAValue({ a: nextA / 100 });
					}
				})
			] });
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/hex-input.mjs
var import_jsx_runtime$5, HexInput;
function init_hex_input() {
	return (init_hex_input = __esmMin((() => {
		init_colord();
		init_build_module();
		init_input_control();
		init_component$1();
		init_colors_values();
		init_input_prefix_wrapper();
		import_jsx_runtime$5 = require_jsx_runtime();
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
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(InputControl, {
				prefix: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(input_prefix_wrapper_default, { children: /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)(component_default$1, {
					color: COLORS.theme.accent,
					lineHeight: 1,
					children: "#"
				}) }),
				value: color.toHex().slice(1).toUpperCase(),
				onChange: handleChange,
				maxLength: enableAlpha ? 9 : 7,
				label: __("Hex color"),
				hideLabelFromVision: true,
				__unstableStateReducer: stateReducer,
				__unstableInputWidth: "9em"
			});
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/color-input.mjs
var import_jsx_runtime$4, ColorInput;
function init_color_input() {
	return (init_color_input = __esmMin((() => {
		init_rgb_input();
		init_hsl_input();
		init_hex_input();
		import_jsx_runtime$4 = require_jsx_runtime();
		ColorInput = ({ colorType, color, hsla, onChange, onHSLChange, enableAlpha }) => {
			switch (colorType) {
				case "hsl": return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(HslInput, {
					hsla,
					onChange: onHSLChange,
					enableAlpha
				});
				case "rgb": return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(RgbInput, {
					color,
					onChange,
					enableAlpha
				});
				default:
				case "hex": return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(HexInput, {
					color,
					onChange,
					enableAlpha
				});
			}
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/picker.mjs
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
var import_jsx_runtime$3, Picker;
function init_picker() {
	return (init_picker = __esmMin((() => {
		init_react();
		init_dist();
		init_colord();
		import_jsx_runtime$3 = require_jsx_runtime();
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
			if (enableAlpha) return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(ve, {
				color: hsva,
				onChange: handleChange,
				...pointerCaptureProps
			});
			const hsv = {
				h: hsva.h,
				s: hsva.s,
				v: hsva.v
			};
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(pe, {
				color: hsv,
				onChange: (next) => {
					handleChange({
						...next,
						a: hsva.a
					});
				},
				...pointerCaptureProps
			});
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/component.mjs
function getRuntime$1() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$1(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$1(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$1}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$1) === hash) return true;
	return false;
}
function injectStyle$1(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$1();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$1(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$1, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$1(targetDocument) {
	const runtime = getRuntime$1();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$1(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$1(hash, css) {
	const runtime = getRuntime$1();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$1(targetDocument, hash, css);
}
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
var import_jsx_runtime$2, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, options, UnconnectedColorPicker, ColorPicker, component_default;
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
		init_component$3();
		init_component$2();
		init_polymorphic_element();
		init_color_copy_button();
		init_color_input();
		init_picker();
		init_use_controlled_value();
		import_jsx_runtime$2 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("94951cc1b3", ".d5fb11b3ac205b2e__number-control{width:96px}.b1a4d36a44f8cc0c__select{margin-left:-8px}.d4a7bb47ecb2b0d3__range{flex:1;margin-right:8px}.b3d7fd1f53a9c9d5__auxiliary{padding:8px 0 0}.c23c856a474c9ee4__header{padding-inline:16px}._6cfd73c2a89d0939__color-input{padding-block:16px 20px;padding-left:16px;padding-right:12px}._16d3b14e7b02f8e4__colorful{box-sizing:border-box}._16d3b14e7b02f8e4__colorful *,._16d3b14e7b02f8e4__colorful :after,._16d3b14e7b02f8e4__colorful :before{box-sizing:inherit}._16d3b14e7b02f8e4__colorful{width:216px}._16d3b14e7b02f8e4__colorful .react-colorful{align-items:center;display:flex;flex-direction:column;height:auto;width:216px}._16d3b14e7b02f8e4__colorful .react-colorful__saturation{border-bottom:none;border-radius:0;height:216px;margin-bottom:16px;width:100%}._16d3b14e7b02f8e4__colorful .react-colorful__alpha,._16d3b14e7b02f8e4__colorful .react-colorful__hue{border-radius:9999px;height:16px;margin-bottom:8px;width:184px}._16d3b14e7b02f8e4__colorful .react-colorful__pointer{border:none;box-shadow:0 0 2px 0 rgba(0,0,0,.25);height:16px;outline:2px solid transparent;width:16px}@media not (prefers-reduced-motion){._16d3b14e7b02f8e4__colorful .react-colorful__pointer{transition:transform .16s ease-in-out}}._16d3b14e7b02f8e4__colorful .react-colorful__interactive:focus .react-colorful__pointer{border:1.5px solid #000;box-shadow:0 0 0 1.5px #fff;transform:translate(-50%,-50%) scale(1.5)}._16d3b14e7b02f8e4__colorful .react-colorful__pointer-fill{box-shadow:inset 0 0 0 1.5px #fff}._16d3b14e7b02f8e4__colorful .react-colorful__interactive{margin-left:4px;width:calc(100% - 8px)}");
		style_module_default$1 = {
			"number-control": "d5fb11b3ac205b2e__number-control",
			"select": "b1a4d36a44f8cc0c__select",
			"range": "d4a7bb47ecb2b0d3__range",
			"auxiliary": "b3d7fd1f53a9c9d5__auxiliary",
			"header": "c23c856a474c9ee4__header",
			"color-input": "_6cfd73c2a89d0939__color-input",
			"colorful": "_16d3b14e7b02f8e4__colorful"
		};
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
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(PolymorphicElement, {
				ref: forwardedRef,
				...divProps,
				className: clsx(style_module_default$1.colorful, className),
				onPasteCapture: maybeHandlePaste,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Picker, {
					onChange: handleHSLAChange,
					hsla: internalHSLA,
					enableAlpha,
					onInteractionStart: () => {
						isPickerInteractingRef.current = true;
					},
					onInteractionEnd: () => {
						isPickerInteractingRef.current = false;
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("div", {
					className: style_module_default$1.auxiliary,
					children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(component_default$3, {
						className: style_module_default$1.header,
						justify: "space-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(select_control_default, {
							className: style_module_default$1.select,
							size: "compact",
							options,
							value: colorType,
							onChange: (nextColorType) => setColorType(nextColorType),
							label: __("Color format"),
							hideLabelFromVision: true,
							variant: "minimal"
						}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ColorCopyButton, {
							color: safeColordColor,
							colorType: copyFormat || colorType
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default$2, {
						className: style_module_default$1["color-input"],
						direction: "column",
						gap: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(ColorInput, {
							colorType,
							color: safeColordColor,
							hsla: internalHSLA,
							onChange: handleChange,
							onHSLChange: handleHSLAChange,
							enableAlpha
						})
					})]
				})]
			});
		};
		ColorPicker = contextConnect(UnconnectedColorPicker, "ColorPicker");
		component_default = ColorPicker;
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-picker/use-deprecated-props.mjs
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
//#region ../packages/components/build-module/color-picker/legacy-adapter.mjs
var import_jsx_runtime$1, LegacyAdapter;
function init_legacy_adapter() {
	return (init_legacy_adapter = __esmMin((() => {
		init_component();
		init_use_deprecated_props();
		import_jsx_runtime$1 = require_jsx_runtime();
		LegacyAdapter = (props) => {
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default, { ...useDeprecatedProps(props) });
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/dropdown/dropdown-content-wrapper.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
function UnconnectedDropdownContentWrapper(props, forwardedRef) {
	const { paddingSize = "small", className, ...derivedProps } = useContextSystem(props, "DropdownContentWrapper");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...derivedProps,
		className: clsx(style_module_default["content-wrapper"], {
			[style_module_default["padding-small"]]: paddingSize !== "none" && paddingSize !== "medium",
			[style_module_default["padding-medium"]]: paddingSize === "medium"
		}, className),
		ref: forwardedRef
	});
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, DropdownContentWrapper, dropdown_content_wrapper_default;
function init_dropdown_content_wrapper() {
	return (init_dropdown_content_wrapper = __esmMin((() => {
		init_clsx();
		init_context_connect(), init_use_context_system();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("7f9bfd3385", ".ab61d20c737fa550__content-wrapper{margin-left:-8px;margin-right:-8px}.ab61d20c737fa550__content-wrapper:first-of-type{margin-top:-8px}.ab61d20c737fa550__content-wrapper:last-of-type{margin-bottom:-8px}.f0a033fae417d720__padding-small{padding:8px}.d83816967399484e__padding-medium{padding:16px}");
		style_module_default = {
			"content-wrapper": "ab61d20c737fa550__content-wrapper",
			"padding-small": "f0a033fae417d720__padding-small",
			"padding-medium": "d83816967399484e__padding-medium"
		};
		DropdownContentWrapper = contextConnect(UnconnectedDropdownContentWrapper, "DropdownContentWrapper");
		dropdown_content_wrapper_default = DropdownContentWrapper;
	})))();
}
//#endregion
export { SelectControl as a, init_legacy_adapter as i, init_dropdown_content_wrapper as n, init_select_control as o, LegacyAdapter as r, select_control_default as s, dropdown_content_wrapper_default as t };
