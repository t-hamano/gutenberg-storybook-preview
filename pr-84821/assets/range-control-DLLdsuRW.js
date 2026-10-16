import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as useControlledState, t as init_use_controlled_state } from "./use-controlled-state-CTRYMe6I.js";
import { i as init_colors_values, r as COLORS } from "./config-values-hzX34N5c.js";
import { i as init_polymorphic_element, r as PolymorphicElement } from "./component-CkY7eURU.js";
import { n as space, t as init_space } from "./space-BUoQC8K7.js";
import { n as init_base_control, t as BaseControl } from "./base-control-CSASrsP8.js";
import { n as init_icon, t as Icon } from "./icon-Bh2AlMz6.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_number_control, r as clamp, t as NumberControl } from "./number-control-BsMYN7_s.js";
//#region ../packages/components/src/range-control/utils.ts
/**
* A float supported clamp function for a specific value.
*
* @param value The value to clamp.
* @param min   The minimum value.
* @param max   The maximum value.
*
* @return A (float) number
*/
function floatClamp(value, min, max) {
	if (typeof value !== "number") return null;
	return parseFloat(`${clamp(value, min, max)}`);
}
/**
* Hook to store a clamped value, derived from props.
*
* @param settings
* @return The controlled value and the value setter.
*/
function useControlledRangeValue(settings) {
	const { min, max, value: valueProp, initial } = settings;
	const [state, setInternalState] = useControlledState(floatClamp(valueProp, min, max), {
		initial: floatClamp(initial ?? null, min, max),
		fallback: null
	});
	return [state, (0, import_react$1.useCallback)((nextValue) => {
		if (nextValue === null) setInternalState(null);
		else setInternalState(floatClamp(nextValue, min, max));
	}, [
		min,
		max,
		setInternalState
	])];
}
/**
* Resolve CSS-wide keyword spellings for the private color classes without
* changing the original color value passed to the stylesheet.
*
* @param value The CSS color value.
*/
function getCSSWideKeyword(value) {
	if (typeof value !== "string") return;
	const keyword = value.replace(/\\([a-f\d]{1,6})[ \t\n\r\f]?|\\([^\n\r\f])|\/\*[\s\S]*?\*\//gi, (_match, hex, character) => {
		if (hex) {
			const codePoint = parseInt(hex, 16);
			return String.fromCodePoint(codePoint > 0 && codePoint <= 1114111 ? codePoint : 65533);
		}
		return character ?? "";
	}).replace(/^[ \t\n\r\f]+|[ \t\n\r\f]+$/g, "").toLowerCase();
	return CSS_WIDE_KEYWORDS.has(keyword) ? keyword : void 0;
}
var CSS_WIDE_KEYWORDS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_react();
		init_use_controlled_state();
		CSS_WIDE_KEYWORDS = /* @__PURE__ */ new Set([
			"inherit",
			"initial",
			"unset",
			"revert",
			"revert-layer"
		]);
	})))();
}
//#endregion
//#region ../packages/components/src/range-control/style.module.scss
var root, wrapper, rail, track, marks, mark, thumb, input, tooltip, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_13mmh_46";
		wrapper = "_wrapper_13mmh_58";
		rail = "_rail_13mmh_89";
		track = "_track_13mmh_106";
		marks = "_marks_13mmh_126";
		mark = "_mark_13mmh_126";
		thumb = "_thumb_13mmh_165";
		input = "_input_13mmh_226";
		tooltip = "_tooltip_13mmh_241";
		style_module_default = {
			root,
			wrapper,
			"before-icon": "_before-icon_13mmh_69",
			"after-icon": "_after-icon_13mmh_70",
			"is-rtl": "_is-rtl_13mmh_75",
			rail,
			"is-disabled": "_is-disabled_13mmh_102",
			track,
			marks,
			mark,
			"mark-label": "_mark-label_13mmh_146",
			"is-filled": "_is-filled_13mmh_161",
			"thumb-wrapper": "_thumb-wrapper_13mmh_165",
			thumb,
			"is-focused": "_is-focused_13mmh_214",
			input,
			tooltip,
			"is-visible": "_is-visible_13mmh_260",
			"is-bottom": "_is-bottom_13mmh_264",
			"input-number": "_input-number_13mmh_281",
			"action-right": "_action-right_13mmh_297",
			"color-inherit": "_color-inherit_13mmh_314",
			"background-inherit": "_background-inherit_13mmh_318",
			"color-initial": "_color-initial_13mmh_322",
			"background-initial": "_background-initial_13mmh_326",
			"color-unset": "_color-unset_13mmh_330",
			"background-unset": "_background-unset_13mmh_334",
			"color-revert": "_color-revert_13mmh_338",
			"background-revert": "_background-revert_13mmh_342",
			"color-revert-layer": "_color-revert-layer_13mmh_346",
			"background-revert-layer": "_background-revert-layer_13mmh_350"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/range-control/input-range.tsx
function InputRange(props, ref) {
	const { describedBy, label, value, className, ...otherProps } = props;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(PolymorphicElement, {
		as: "input",
		...otherProps,
		className: clsx(style_module_default.input, className),
		"aria-describedby": describedBy,
		"aria-label": label,
		"aria-hidden": false,
		ref,
		tabIndex: 0,
		type: "range",
		value
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 14,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$4, _jsxFileName$4, ForwardedComponent;
function init_input_range() {
	return (init_input_range = __esmMin((() => {
		init_react();
		init_clsx();
		init_polymorphic_element();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/input-range.tsx";
		ForwardedComponent = (0, import_react$1.forwardRef)(InputRange);
		try {
			ForwardedComponent.__docgenInfo = {
				"description": "",
				"displayName": "inputrange",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/input-range.tsx",
				"methods": [],
				"props": {
					"describedBy": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "describedBy",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onMouseLeave": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onMouseLeave",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"onMouseMove": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "onMouseMove",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "number | \"\"" }
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
//#region ../packages/components/src/range-control/mark.tsx
function RangeMark(props) {
	const { className, isFilled = false, label, style = {}, ...otherProps } = props;
	const classes = clsx("components-range-control__mark", style_module_default.mark, isFilled && "is-filled", className);
	const labelClasses = clsx("components-range-control__mark-label", style_module_default["mark-label"], {
		[style_module_default["is-filled"]]: isFilled,
		[style_module_default["is-rtl"]]: isRTL()
	}, isFilled && "is-filled");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(PolymorphicElement, {
		as: "span",
		...otherProps,
		"aria-hidden": "true",
		className: classes,
		style
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 37,
		columnNumber: 4
	}, this), label && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)("span", {
		"aria-hidden": "true",
		className: labelClasses,
		style,
		children: label
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 45,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 36,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_mark() {
	return (init_mark = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_polymorphic_element();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/mark.tsx";
		try {
			RangeMark.__docgenInfo = {
				"description": "",
				"displayName": "mark",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/mark.tsx",
				"methods": [],
				"props": {
					"isFilled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "isFilled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"key": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "key",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
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
//#region ../packages/components/src/range-control/rail.tsx
function RangeRail(props) {
	const { disabled = false, marks = false, min = 0, max = 100, step = 1, value = 0, railColor, className, style, ...restProps } = props;
	const railColorKeyword = getCSSWideKeyword(railColor);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(import_jsx_dev_runtime$2.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(PolymorphicElement, {
		as: "span",
		...restProps,
		disabled,
		className: clsx(style_module_default.rail, className, { [style_module_default["is-disabled"]]: disabled }, !disabled && railColorKeyword && style_module_default[`background-${railColorKeyword}`]),
		style: {
			"--_wp-components-range-control-rail-color": railColor || COLORS.theme.gray[300],
			...style
		}
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 36,
		columnNumber: 4
	}, this), marks && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Marks, {
		disabled,
		marks,
		min,
		max,
		step,
		value
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 57,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 35,
		columnNumber: 3
	}, this);
}
function Marks(props) {
	const { disabled = false, marks = false, min = 0, max = 100, step: stepProp = 1, value = 0 } = props;
	const marksData = useMarks({
		marks,
		min,
		max,
		step: stepProp === "any" ? 1 : stepProp,
		value
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("span", {
		"aria-hidden": "true",
		className: clsx("components-range-control__marks", style_module_default.marks),
		children: marksData.map((mark) => /* @__PURE__ */ (0, import_react.createElement)(RangeMark, {
			...mark,
			key: mark.key,
			"aria-hidden": "true",
			disabled,
			__self: this,
			__source: {
				fileName: _jsxFileName$2,
				lineNumber: 92,
				columnNumber: 5
			}
		}))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 84,
		columnNumber: 3
	}, this);
}
function useMarks({ marks, min = 0, max = 100, step = 1, value = 0 }) {
	if (!marks) return [];
	const range = max - min;
	if (!Array.isArray(marks)) {
		marks = [];
		const count = 1 + Math.round(range / step);
		while (count > marks.push({ value: step * marks.length + min }));
	}
	const placedMarks = [];
	marks.forEach((mark, index) => {
		if (mark.value < min || mark.value > max) return;
		const key = `mark-${index}`;
		const isFilled = mark.value <= value;
		const offset = `${(mark.value - min) / range * 100}%`;
		const offsetStyle = { [isRTL() ? "right" : "left"]: offset };
		placedMarks.push({
			...mark,
			isFilled,
			key,
			style: offsetStyle
		});
	});
	return placedMarks;
}
var import_jsx_dev_runtime$2, import_react, _jsxFileName$2;
function init_rail() {
	return (init_rail = __esmMin((() => {
		init_build_module();
		init_clsx();
		init_colors_values();
		init_utils();
		init_mark();
		init_polymorphic_element();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		import_react = require_react();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/rail.tsx";
		try {
			RangeRail.__docgenInfo = {
				"description": "",
				"displayName": "rail",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/rail.tsx",
				"methods": [],
				"props": {
					"min": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum `value` allowed.",
						"name": "min",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"max": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The maximum `value` allowed.",
						"name": "max",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the range slider.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Disables the `input`, preventing new values from being applied.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"marks": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a visual representation of `step` ticks. Custom mark indicators\ncan be provided by an `Array`.",
						"name": "marks",
						"required": false,
						"tags": {},
						"type": { "name": "boolean | { value: number; label?: string; }[]" }
					},
					"step": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum amount by which `value` changes. It is also a factor in\nvalidation as `value` must be a multiple of `step` (offset by `min`) to\nbe valid. Accepts the special string value `any` that voids the\nvalidation constraint and overrides both `withInputField` and\n`showTooltip` props to `false`.",
						"name": "step",
						"required": false,
						"tags": {},
						"type": { "name": "number | \"any\"" }
					},
					"railColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "railColor",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
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
//#region ../packages/components/src/range-control/tooltip.tsx
function SimpleTooltip(props) {
	const { className, inputRef, tooltipPlacement, show = false, style = {}, value = 0, renderTooltipContent = (v) => v, zIndex = 100, ...restProps } = props;
	const placement = useTooltipPlacement({
		inputRef,
		tooltipPlacement
	});
	const classes = clsx("components-simple-tooltip", style_module_default.tooltip, className, {
		[style_module_default["is-visible"]]: show,
		[style_module_default["is-rtl"]]: isRTL(),
		[style_module_default["is-bottom"]]: placement === "bottom"
	});
	const styles = {
		...style,
		zIndex
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PolymorphicElement, {
		as: "span",
		...restProps,
		"aria-hidden": "false",
		className: classes,
		role: "tooltip",
		style: styles,
		children: renderTooltipContent(value)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 40,
		columnNumber: 3
	}, this);
}
function useTooltipPlacement({ inputRef, tooltipPlacement }) {
	const [placement, setPlacement] = (0, import_react$1.useState)();
	const setTooltipPlacement = (0, import_react$1.useCallback)(() => {
		if (inputRef && inputRef.current) setPlacement(tooltipPlacement);
	}, [tooltipPlacement, inputRef]);
	(0, import_react$1.useEffect)(() => {
		setTooltipPlacement();
	}, [setTooltipPlacement]);
	(0, import_react$1.useEffect)(() => {
		window.addEventListener("resize", setTooltipPlacement);
		return () => {
			window.removeEventListener("resize", setTooltipPlacement);
		};
	});
	return placement;
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_tooltip() {
	return (init_tooltip = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_polymorphic_element();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/tooltip.tsx";
		try {
			SimpleTooltip.__docgenInfo = {
				"description": "",
				"displayName": "tooltip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/tooltip.tsx",
				"methods": [],
				"props": {
					"show": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "show",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"placement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "placement",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"inputRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "inputRef",
						"required": false,
						"tags": {},
						"type": { "name": "RefObject<HTMLElement | null>" }
					},
					"tooltipPlacement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "tooltipPlacement",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "ControlledRangeValue" }
					},
					"renderTooltipContent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "renderTooltipContent",
						"required": false,
						"tags": {},
						"type": { "name": "((value?: ControlledRangeValue) => string | number | null) | undefined" }
					},
					"zIndex": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "zIndex",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
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
//#region ../packages/components/src/range-control/index.tsx
/**
* Computes the value that `RangeControl` should reset to when pressing
* the reset button.
*/
function computeResetValue({ resetFallbackValue, initialPosition }) {
	if (resetFallbackValue !== void 0) return !Number.isNaN(resetFallbackValue) ? resetFallbackValue : null;
	if (initialPosition !== void 0) return !Number.isNaN(initialPosition) ? initialPosition : null;
	return null;
}
function UnforwardedRangeControl(props, forwardedRef) {
	const { __nextHasNoMarginBottom: _, __next40pxDefaultSize: _next40pxDefaultSize, afterIcon, allowReset = false, beforeIcon, className, color: colorProp = COLORS.theme.accent, currentInput, disabled = false, help, hideLabelFromVision = false, initialPosition, isShiftStepEnabled = true, label, marks = false, max = 100, min = 0, onBlur = noop, onChange = noop, onFocus = noop, onMouseLeave = noop, onMouseMove = noop, railColor, renderTooltipContent = (v) => v, resetFallbackValue, shiftStep = 10, showTooltip: showTooltipProp, step = 1, trackColor, value: valueProp, withInputField = true, ...otherProps } = props;
	const [value, setValue] = useControlledRangeValue({
		min,
		max,
		value: valueProp ?? null,
		initial: initialPosition
	});
	const isResetPendent = (0, import_react$1.useRef)(false);
	let hasTooltip = showTooltipProp;
	let hasInputField = withInputField;
	if (step === "any") {
		hasTooltip = false;
		hasInputField = false;
	}
	const [showTooltip, setShowTooltip] = (0, import_react$1.useState)(hasTooltip);
	const [isFocused, setIsFocused] = (0, import_react$1.useState)(false);
	const inputRef = (0, import_react$1.useRef)(null);
	const isCurrentlyFocused = inputRef.current?.matches(":focus");
	const isThumbFocused = !disabled && isFocused;
	const isValueReset = value === null;
	const inputSliderValue = isValueReset ? "" : value !== void 0 ? value : currentInput;
	const rangeFillValue = isValueReset ? (max - min) / 2 + min : value;
	const fillValue = isValueReset ? 50 : (value - min) / (max - min) * 100;
	const fillValueOffset = `${clamp(fillValue, 0, 100)}%`;
	const classes = clsx("components-range-control", className);
	const colorKeyword = getCSSWideKeyword(colorProp);
	const trackColorKeyword = getCSSWideKeyword(trackColor);
	const wrapperClasses = clsx("components-range-control__wrapper", style_module_default.wrapper, colorKeyword && style_module_default[`color-${colorKeyword}`], !!marks && "is-marked");
	const id = use_instance_id_default(UnforwardedRangeControl, "inspector-range-control");
	const describedBy = !!help ? `${id}__help` : void 0;
	const enableTooltip = hasTooltip !== false && Number.isFinite(value);
	const handleOnRangeChange = (event) => {
		const nextValue = parseFloat(event.target.value);
		setValue(nextValue);
		onChange(nextValue);
	};
	const handleOnChange = (next) => {
		let nextValue = parseFloat(next);
		setValue(nextValue);
		if (!isNaN(nextValue)) {
			if (nextValue < min || nextValue > max) nextValue = floatClamp(nextValue, min, max);
			onChange(nextValue);
			isResetPendent.current = false;
		} else if (allowReset) isResetPendent.current = true;
	};
	const handleOnInputNumberBlur = () => {
		if (isResetPendent.current) {
			handleOnReset();
			isResetPendent.current = false;
		}
	};
	const handleOnReset = () => {
		const resetValue = Number.isNaN(resetFallbackValue) ? null : resetFallbackValue ?? null;
		setValue(resetValue);
		/**
		* Previously, this callback would always receive undefined as
		* an argument. This behavior is unexpected, specifically
		* when resetFallbackValue is defined.
		*
		* The value of undefined is not ideal. Passing it through
		* to internal <input /> elements would change it from a
		* controlled component to an uncontrolled component.
		*
		* For now, to minimize unexpected regressions, we're going to
		* preserve the undefined callback argument, except when a
		* resetFallbackValue is defined.
		*/
		onChange(resetValue ?? void 0);
	};
	const handleShowTooltip = () => setShowTooltip(true);
	const handleHideTooltip = () => setShowTooltip(false);
	const handleOnBlur = (event) => {
		onBlur(event);
		setIsFocused(false);
		handleHideTooltip();
	};
	const handleOnFocus = (event) => {
		onFocus(event);
		setIsFocused(true);
		handleShowTooltip();
	};
	const offsetStyle = { [isRTL() ? "right" : "left"]: fillValueOffset };
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl, {
		className: classes,
		label,
		hideLabelFromVision,
		id: `${id}`,
		help,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: clsx("components-range-control__root", style_module_default.root, { [style_module_default["is-rtl"]]: isRTL() }),
			children: [
				beforeIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: style_module_default["before-icon"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: beforeIcon }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 238,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 237,
					columnNumber: 6
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: wrapperClasses,
					style: { "--_wp-components-range-control-color": colorProp },
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedComponent, {
							...otherProps,
							className: "components-range-control__slider",
							describedBy,
							disabled,
							id: `${id}`,
							label,
							max,
							min,
							onBlur: handleOnBlur,
							onChange: handleOnRangeChange,
							onFocus: handleOnFocus,
							onMouseMove,
							onMouseLeave,
							ref: useMergeRefs([inputRef, forwardedRef]),
							step,
							value: inputSliderValue ?? void 0
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 249,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RangeRail, {
							"aria-hidden": true,
							disabled,
							marks,
							max,
							min,
							railColor,
							step,
							value: rangeFillValue
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 267,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							"aria-hidden": true,
							className: clsx("components-range-control__track", style_module_default.track, { [style_module_default["is-disabled"]]: disabled }, !disabled && trackColorKeyword && style_module_default[`background-${trackColorKeyword}`]),
							disabled,
							style: {
								width: fillValueOffset,
								"--_wp-components-range-control-track-color": trackColor || "currentColor"
							}
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 277,
							columnNumber: 6
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: clsx("components-range-control__thumb-wrapper", style_module_default["thumb-wrapper"], { [style_module_default["is-disabled"]]: disabled }),
							style: offsetStyle,
							disabled,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								"aria-hidden": true,
								className: clsx(style_module_default.thumb, {
									[style_module_default["is-disabled"]]: disabled,
									[style_module_default["is-focused"]]: isThumbFocused
								}),
								disabled
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 305,
								columnNumber: 7
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 296,
							columnNumber: 6
						}, this),
						enableTooltip && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleTooltip, {
							className: "components-range-control__tooltip",
							inputRef,
							tooltipPlacement: "bottom",
							renderTooltipContent,
							show: isCurrentlyFocused || showTooltip,
							style: offsetStyle,
							value
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 315,
							columnNumber: 7
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 241,
					columnNumber: 5
				}, this),
				afterIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: style_module_default["after-icon"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: afterIcon }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 328,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 327,
					columnNumber: 6
				}, this),
				hasInputField && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberControl, {
					"aria-label": label,
					className: clsx("components-range-control__number", style_module_default["input-number"]),
					disabled,
					inputMode: "decimal",
					isShiftStepEnabled,
					max,
					min,
					onBlur: handleOnInputNumberBlur,
					onChange: handleOnChange,
					shiftStep,
					__unstableInputWidth: space(20),
					step,
					value: inputSliderValue
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 332,
					columnNumber: 6
				}, this),
				allowReset && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: style_module_default["action-right"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						className: "components-range-control__reset",
						accessibleWhenDisabled: !disabled,
						disabled: disabled || value === computeResetValue({
							resetFallbackValue,
							initialPosition
						}),
						variant: "secondary",
						size: "small",
						onClick: handleOnReset,
						children: __("Reset")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 354,
						columnNumber: 7
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 353,
					columnNumber: 6
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 229,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 222,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, noop, RangeControl;
function init_range_control() {
	return (init_range_control = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_use_instance_id(), init_use_merge_refs();
		init_base_control();
		init_button();
		init_icon();
		init_colors_values();
		init_utils();
		init_input_range();
		init_rail();
		init_tooltip();
		init_number_control();
		init_style_module();
		init_space();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/index.tsx";
		noop = () => {};
		RangeControl = (0, import_react$1.forwardRef)(UnforwardedRangeControl);
		RangeControl.displayName = "RangeControl";
		try {
			RangeControl.__docgenInfo = {
				"description": "RangeControls are used to make selections from a range of incremental values.\n\n```jsx\nimport { RangeControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyRangeControl = () => {\n  const [ value, setValue ] = useState();\n  return (\n    <RangeControl\n      help=\"Please select how transparent you would like this.\"\n      initialPosition={ 50 }\n      label=\"Opacity\"\n      max={ 100 }\n      min={ 0 }\n      value={ value }\n      onChange={ setValue }\n    />\n  );\n};\n```",
				"displayName": "RangeControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/range-control/index.tsx",
				"methods": [],
				"props": {
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
					"min": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum `value` allowed.",
						"name": "min",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"max": {
						"defaultValue": { "value": "100" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The maximum `value` allowed.",
						"name": "max",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current value of the range slider.",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Disables the `input`, preventing new values from being applied.",
						"name": "disabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"marks": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Renders a visual representation of `step` ticks. Custom mark indicators\ncan be provided by an `Array`.",
						"name": "marks",
						"required": false,
						"tags": {},
						"type": { "name": "boolean | { value: number; label?: string; }[]" }
					},
					"step": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The minimum amount by which `value` changes. It is also a factor in\nvalidation as `value` must be a multiple of `step` (offset by `min`) to\nbe valid. Accepts the special string value `any` that voids the\nvalidation constraint and overrides both `withInputField` and\n`showTooltip` props to `false`.",
						"name": "step",
						"required": false,
						"tags": {},
						"type": { "name": "number | \"any\"" }
					},
					"afterIcon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, an Icon component will be rendered\nafter the slider with the icon equal to afterIcon.\n\nFor more information on `IconType` see the Icon component:\n/packages/components/src/icon/index.tsx",
						"name": "afterIcon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType" }
					},
					"allowReset": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is true, a button to reset the slider is\nrendered.",
						"name": "allowReset",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"beforeIcon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, an Icon component will be rendered\nbefore the slider with the icon equal to beforeIcon.\n\nFor more information on `IconType` see the Icon component:\n/packages/components/src/icon/index.tsx",
						"name": "beforeIcon",
						"required": false,
						"tags": {},
						"type": { "name": "IconType" }
					},
					"color": {
						"defaultValue": { "value": "COLORS.theme.accent" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS color string for the `RangeControl` wrapper.\n@see  /packages/components/src/utils/colors-values.js",
						"name": "color",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
					},
					"currentInput": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current input to use as a fallback if `value` is currently\n`undefined`.",
						"name": "currentInput",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"initialPosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The slider starting position, used when no `value` is passed.\nThe `initialPosition` will be clamped between the provided `min`\nand `max` prop values.",
						"name": "initialPosition",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"isShiftStepEnabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Passed as a prop to the `NumberControl` component and is only\napplicable if `withInputField` is true. If true, while the number\ninput has focus, pressing `UP` or `DOWN` along with the `SHIFT` key\nwill change the value by the `shiftStep` value.",
						"name": "isShiftStepEnabled",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If this property is added, a label will be generated using label\nproperty as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onBlur": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback for when `RangeControl` input loses focus.",
						"name": "onBlur",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLInputElement>" }
					},
					"onChange": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function that receives the new value. The value will be less than\n`max` and more than `min` unless a reset (enabled by `allowReset`)\nhas occurred. In which case the value will be either that of\n`resetFallbackValue` if it has been specified or otherwise\n`undefined`.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((value: number) => void)" }
					},
					"onFocus": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback for when `RangeControl` input gains focus.",
						"name": "onFocus",
						"required": false,
						"tags": {},
						"type": { "name": "FocusEventHandler<HTMLInputElement>" }
					},
					"onMouseLeave": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback for when mouse exits the `RangeControl`.",
						"name": "onMouseLeave",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"onMouseMove": {
						"defaultValue": { "value": "() => void" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Callback for when mouse moves within the `RangeControl`.",
						"name": "onMouseMove",
						"required": false,
						"tags": {},
						"type": { "name": "MouseEventHandler<HTMLInputElement>" }
					},
					"railColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS color string to customize the rail element's background.",
						"name": "railColor",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
					},
					"renderTooltipContent": {
						"defaultValue": { "value": "( value ) => value" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A way to customize the rendered UI of the value.",
						"name": "renderTooltipContent",
						"required": false,
						"tags": {},
						"type": { "name": "((value?: ControlledRangeValue) => string | number | null) | undefined" }
					},
					"resetFallbackValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The value to revert to if the Reset button is clicked (enabled by\n`allowReset`)",
						"name": "resetFallbackValue",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"separatorType": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Define if separator line under/above control row should be disabled\nor full width. By default it is placed below excluding underline the\ncontrol icon.",
						"name": "separatorType",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"none\" | \"fullWidth\" | \"topFullWidth\"",
							"value": [
								{ "value": "\"none\"" },
								{ "value": "\"fullWidth\"" },
								{ "value": "\"topFullWidth\"" }
							]
						}
					},
					"shiftStep": {
						"defaultValue": { "value": "10" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Passed as a prop to the `NumberControl` component and is only\napplicable if `withInputField` and `isShiftStepEnabled` are both true\nand while the number input has focus. Acts as a multiplier of `step`.",
						"name": "shiftStep",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"showTooltip": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Forcing the Tooltip UI to show or hide. This is overridden to `false`\nwhen `step` is set to the special string value `any`.",
						"name": "showTooltip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"trackColor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS color string to customize the track element's background.",
						"name": "trackColor",
						"required": false,
						"tags": {},
						"type": { "name": "Color" }
					},
					"type": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Define if the value selection should present a stepper control or a\nslider control in the bottom sheet on mobile. To use the stepper set\nthe type value as `stepper`. Defaults to slider if no option is\nprovided.",
						"name": "type",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"stepper\"",
							"value": [{ "value": "\"stepper\"" }]
						}
					},
					"withInputField": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/range-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines if the `input` number field will render next to the\nRangeControl. This is overridden to `false` when `step` is set to the\nspecial string value `any`.",
						"name": "withInputField",
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
export { init_range_control as n, RangeControl as t };
