import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as link_off_default } from "./link-off-CdeM4cH8.js";
import { n as link_default } from "./link-gRa713_Y.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as init_component$4, t as VisuallyHidden } from "./component-DWfXyJHZ.js";
import { n as init_component$5, t as View } from "./component-CkY7eURU.js";
import { n as init_base_control, t as BaseControl } from "./base-control-pNrjopap.js";
import { n as init_button, t as Button } from "./button-BO8bp-IJ.js";
import { n as init_component$6, t as BorderControl } from "./component-BZ6EKvak.js";
import { n as init_component$7, t as Grid } from "./component-4m82em3s.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/border-box-control/style.module.scss
var header, wrapper, visualizer, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		header = "_header_1wa84_60";
		wrapper = "_wrapper_1wa84_74";
		visualizer = "_visualizer_1wa84_88";
		style_module_default = {
			"linked-border-control": "_linked-border-control_1wa84_46",
			"linked-border-control-full-width": "_linked-border-control-full-width_1wa84_53",
			header,
			wrapper,
			"linked-button": "_linked-button_1wa84_78",
			visualizer,
			"split-controls": "_split-controls_1wa84_99",
			"centered-border-control": "_centered-border-control_1wa84_104",
			"right-border-control": "_right-border-control_1wa84_114"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/border-box-control-linked-button/hook.ts
function useBorderBoxControlLinkedButton(props) {
	const { className, ...otherProps } = useContextSystem(props, "BorderBoxControlLinkedButton");
	return {
		...otherProps,
		className: clsx(style_module_default["linked-button"], className)
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_style_module();
		init_use_context_system();
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/border-box-control-linked-button/component.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, BorderBoxControlLinkedButton, ConnectedBorderBoxControlLinkedButton;
function init_component() {
	return (init_component = __esmMin((() => {
		init_build_module$1();
		init_build_module();
		init_button();
		init_context_connect();
		init_hook();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-box-control/border-box-control-linked-button/component.tsx";
		BorderBoxControlLinkedButton = (props, forwardedRef) => {
			const { className, isLinked, ...buttonProps } = useBorderBoxControlLinkedButton(props);
			const label = isLinked ? __("Unlink sides") : __("Link sides");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Button, {
				...buttonProps,
				size: "small",
				icon: isLinked ? link_default : link_off_default,
				iconSize: 24,
				label,
				ref: forwardedRef,
				className
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 18,
				columnNumber: 3
			}, void 0);
		};
		ConnectedBorderBoxControlLinkedButton = contextConnect(BorderBoxControlLinkedButton, "BorderBoxControlLinkedButton");
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/border-box-control-visualizer/hook.ts
function useBorderBoxControlVisualizer(props) {
	const { className, style, value, ...otherProps } = useContextSystem(props, "BorderBoxControlVisualizer");
	return {
		...otherProps,
		className: clsx(style_module_default.visualizer, className),
		style: {
			...style,
			"--wp-components-border-box-visualizer-top": borderBoxStyleWithFallback(value?.top),
			"--wp-components-border-box-visualizer-bottom": borderBoxStyleWithFallback(value?.bottom),
			"--wp-components-border-box-visualizer-start": borderBoxStyleWithFallback(value?.left),
			"--wp-components-border-box-visualizer-end": borderBoxStyleWithFallback(value?.right)
		},
		value
	};
}
var borderBoxStyleWithFallback;
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_style_module();
		init_use_context_system();
		borderBoxStyleWithFallback = (border) => {
			const { color = "var(--wpds-color-stroke-surface-neutral, #dbdbdb)", style = "solid", width = "var(--wpds-border-width-xs, 1px)" } = border || {};
			const clampedWidth = `clamp(1px, ${width}, 10px)`;
			return `${color} ${!!width && width !== "0" || !!color ? style || "solid" : style} ${clampedWidth}`;
		};
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/border-box-control-visualizer/component.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, BorderBoxControlVisualizer, ConnectedBorderBoxControlVisualizer;
function init_component$1() {
	return (init_component$1 = __esmMin((() => {
		init_component$5();
		init_context_connect();
		init_hook$1();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-box-control/border-box-control-visualizer/component.tsx";
		BorderBoxControlVisualizer = (props, forwardedRef) => {
			const { value, ...otherProps } = useBorderBoxControlVisualizer(props);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(View, {
				...otherProps,
				ref: forwardedRef
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 13,
				columnNumber: 9
			}, void 0);
		};
		ConnectedBorderBoxControlVisualizer = contextConnect(BorderBoxControlVisualizer, "BorderBoxControlVisualizer");
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/border-box-control-split-controls/hook.ts
function useBorderBoxControlSplitControls(props) {
	const { className, colors = [], enableAlpha = false, enableStyle = true, __experimentalIsRenderedInSidebar = false, ...otherProps } = useContextSystem(props, "BorderBoxControlSplitControls");
	return {
		...otherProps,
		centeredClassName: clsx(style_module_default["centered-border-control"], className),
		className: clsx(style_module_default["split-controls"], className),
		colors,
		enableAlpha,
		enableStyle,
		rightAlignedClassName: clsx(style_module_default["right-border-control"], className),
		__experimentalIsRenderedInSidebar
	};
}
function init_hook$2() {
	return (init_hook$2 = __esmMin((() => {
		init_clsx();
		init_style_module();
		init_use_context_system();
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/border-box-control-split-controls/component.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, BorderBoxControlSplitControls, ConnectedBorderBoxControlSplitControls;
function init_component$2() {
	return (init_component$2 = __esmMin((() => {
		init_build_module();
		init_react();
		init_use_merge_refs();
		init_component$1();
		init_component$6();
		init_component$7();
		init_context_connect();
		init_hook$2();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-box-control/border-box-control-split-controls/component.tsx";
		BorderBoxControlSplitControls = (props, forwardedRef) => {
			const { centeredClassName, colors, disableCustomColors, enableAlpha, enableStyle, onChange, popoverPlacement, popoverOffset, rightAlignedClassName, value, __experimentalIsRenderedInSidebar, ...otherProps } = useBorderBoxControlSplitControls(props);
			const [popoverAnchor, setPopoverAnchor] = (0, import_react.useState)(null);
			const popoverProps = (0, import_react.useMemo)(() => popoverPlacement ? {
				placement: popoverPlacement,
				offset: popoverOffset,
				anchor: popoverAnchor,
				shift: true
			} : void 0, [
				popoverPlacement,
				popoverOffset,
				popoverAnchor
			]);
			const sharedBorderControlProps = {
				colors,
				disableCustomColors,
				enableAlpha,
				enableStyle,
				isCompact: true,
				__experimentalIsRenderedInSidebar
			};
			const mergedRef = useMergeRefs([setPopoverAnchor, forwardedRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Grid, {
				...otherProps,
				ref: mergedRef,
				gap: 3,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ConnectedBorderBoxControlVisualizer, { value }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 66,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(BorderControl, {
						className: centeredClassName,
						hideLabelFromVision: true,
						label: __("Top border"),
						onChange: (newBorder) => onChange(newBorder, "top"),
						__unstablePopoverProps: popoverProps,
						value: value?.top,
						...sharedBorderControlProps
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 68,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(BorderControl, {
						hideLabelFromVision: true,
						label: __("Left border"),
						onChange: (newBorder) => onChange(newBorder, "left"),
						__unstablePopoverProps: popoverProps,
						value: value?.left,
						...sharedBorderControlProps
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 77,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(BorderControl, {
						className: rightAlignedClassName,
						hideLabelFromVision: true,
						label: __("Right border"),
						onChange: (newBorder) => onChange(newBorder, "right"),
						__unstablePopoverProps: popoverProps,
						value: value?.right,
						...sharedBorderControlProps
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 85,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(BorderControl, {
						className: centeredClassName,
						hideLabelFromVision: true,
						label: __("Bottom border"),
						onChange: (newBorder) => onChange(newBorder, "bottom"),
						__unstablePopoverProps: popoverProps,
						value: value?.bottom,
						...sharedBorderControlProps
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 94,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 65,
				columnNumber: 3
			}, void 0);
		};
		ConnectedBorderBoxControlSplitControls = contextConnect(BorderBoxControlSplitControls, "BorderBoxControlSplitControls");
	})))();
}
//#endregion
//#region ../packages/components/src/utils/unit-values.ts
/**
* Parses a number and unit from a value.
*
* @param toParse Value to parse
*
* @return  The extracted number and unit.
*/
function parseCSSUnitValue(toParse) {
	const matched = toParse.trim().match(UNITED_VALUE_REGEX);
	if (!matched) return [void 0, void 0];
	const [, num, unit] = matched;
	let numParsed = parseFloat(num);
	numParsed = Number.isNaN(numParsed) ? void 0 : numParsed;
	return [numParsed, unit];
}
var UNITED_VALUE_REGEX;
function init_unit_values() {
	return (init_unit_values = __esmMin((() => {
		UNITED_VALUE_REGEX = /^([\d.\-+]*)\s*(fr|cm|mm|Q|in|pc|pt|px|em|ex|ch|rem|lh|vw|vh|vmin|vmax|%|cap|ic|rlh|vi|vb|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx|svw|lvw|dvw|svh|lvh|dvh|svi|lvi|dvi|svb|lvb|dvb|svmin|lvmin|dvmin|svmax|lvmax|dvmax)?$/;
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/utils.ts
/**
* Splits a CSS box shorthand string into parts, preserving values
* with parentheses like `calc()` and `var()`.
*
* @param value The shorthand string to split.
*
* @return Array of split values.
*/
function splitBoxShorthand(value) {
	const parts = [];
	let current = "";
	let depth = 0;
	for (const char of value.trim()) if (char === "(") {
		depth++;
		current += char;
	} else if (char === ")") {
		depth = Math.max(0, depth - 1);
		current += char;
	} else if (/\s/.test(char) && depth === 0) {
		if (current) {
			parts.push(current);
			current = "";
		}
	} else current += char;
	if (current) parts.push(current);
	return parts;
}
/**
* Unpacks a 1-to-4 value CSS box shorthand string into individual sides
* (top, right, bottom, left) following the CSS Box Model specification.
*
* @param value The box shorthand value (e.g. `0 0 0 2px`).
*
* @return An object containing individual side values.
*/
function unpackBoxShorthand(value) {
	if (typeof value !== "string") return {
		top: value,
		right: value,
		bottom: value,
		left: value
	};
	const parts = splitBoxShorthand(value);
	switch (parts.length) {
		case 2: return {
			top: parts[0],
			right: parts[1],
			bottom: parts[0],
			left: parts[1]
		};
		case 3: return {
			top: parts[0],
			right: parts[1],
			bottom: parts[2],
			left: parts[1]
		};
		case 4: return {
			top: parts[0],
			right: parts[1],
			bottom: parts[2],
			left: parts[3]
		};
		default: return {
			top: value,
			right: value,
			bottom: value,
			left: value
		};
	}
}
/**
* Finds the mode value out of the array passed favouring the first value
* as a tiebreaker.
*
* @param values Values to determine the mode from.
*
* @return The mode value.
*/
function mode(values) {
	if (values.length === 0) return;
	const map = {};
	let maxCount = 0;
	let currentMode;
	values.forEach((value) => {
		map[value] = map[value] === void 0 ? 1 : map[value] + 1;
		if (map[value] > maxCount) {
			currentMode = value;
			maxCount = map[value];
		}
	});
	return currentMode;
}
var sides, borderProps, isEmptyBorder, isCompleteBorder, hasSplitBorders, hasMixedBorders, getSplitBorders, getBorderDiff, getCommonBorder, getShorthandBorderStyle, getMostCommonUnit;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_unit_values();
		sides = [
			"top",
			"right",
			"bottom",
			"left"
		];
		borderProps = [
			"color",
			"style",
			"width"
		];
		isEmptyBorder = (border) => {
			if (!border) return true;
			return !borderProps.some((prop) => border[prop] !== void 0);
		};
		isCompleteBorder = (border) => {
			if (!border) return false;
			return borderProps.every((prop) => border[prop] !== void 0);
		};
		hasSplitBorders = (border = {}) => {
			return Object.keys(border).some((side) => sides.indexOf(side) !== -1);
		};
		hasMixedBorders = (borders) => {
			if (!hasSplitBorders(borders)) return false;
			const shorthandBorders = sides.map((side) => getShorthandBorderStyle(borders?.[side]));
			return !shorthandBorders.every((border) => border === shorthandBorders[0]);
		};
		getSplitBorders = (border) => {
			if (!border || isEmptyBorder(border)) return;
			if (border.width === void 0) return {
				top: border,
				right: border,
				bottom: border,
				left: border
			};
			const unpackedWidths = unpackBoxShorthand(border.width);
			return {
				top: {
					...border,
					width: unpackedWidths.top
				},
				right: {
					...border,
					width: unpackedWidths.right
				},
				bottom: {
					...border,
					width: unpackedWidths.bottom
				},
				left: {
					...border,
					width: unpackedWidths.left
				}
			};
		};
		getBorderDiff = (original, updated) => {
			const diff = {};
			if (original.color !== updated.color) diff.color = updated.color;
			if (original.style !== updated.style) diff.style = updated.style;
			if (original.width !== updated.width) diff.width = updated.width;
			return diff;
		};
		getCommonBorder = (borders) => {
			if (!borders) return;
			const colors = [];
			const styles = [];
			const widths = [];
			sides.forEach((side) => {
				colors.push(borders[side]?.color);
				styles.push(borders[side]?.style);
				widths.push(borders[side]?.width);
			});
			const allColorsMatch = colors.every((value) => value === colors[0]);
			const allStylesMatch = styles.every((value) => value === styles[0]);
			const allWidthsMatch = widths.every((value) => value === widths[0]);
			return {
				color: allColorsMatch ? colors[0] : void 0,
				style: allStylesMatch ? styles[0] : void 0,
				width: allWidthsMatch ? widths[0] : getMostCommonUnit(widths)
			};
		};
		getShorthandBorderStyle = (border, fallbackBorder) => {
			if (isEmptyBorder(border)) return fallbackBorder;
			const { color: fallbackColor, style: fallbackStyle, width: fallbackWidth } = fallbackBorder || {};
			const { color = fallbackColor, style = fallbackStyle, width = fallbackWidth } = border;
			return [
				width,
				!!width && width !== "0" || !!color ? style || "solid" : style,
				color
			].filter(Boolean).join(" ");
		};
		getMostCommonUnit = (values) => {
			return mode(values.map((value) => value === void 0 ? void 0 : parseCSSUnitValue(`${value}`)[1]).filter((value) => value !== void 0));
		};
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/border-box-control/hook.ts
function useBorderBoxControl(props) {
	const { className, colors = [], onChange, enableAlpha = false, enableStyle = true, hideLabelFromVision, label, value, __experimentalIsRenderedInSidebar = false, size: _size, __next40pxDefaultSize: _next40pxDefaultSize, ...otherProps } = useContextSystem(props, "BorderBoxControl");
	const hasVisibleLabel = !!label && !hideLabelFromVision;
	const mixedBorders = hasMixedBorders(value);
	const splitBorders = hasSplitBorders(value);
	const linkedValue = splitBorders ? getCommonBorder(value) : value;
	const splitValue = splitBorders ? value : getSplitBorders(value);
	const hasWidthValue = !isNaN(parseFloat(`${linkedValue?.width}`));
	const [isLinked, setIsLinked] = (0, import_react.useState)(!mixedBorders);
	const toggleLinked = () => setIsLinked(!isLinked);
	const onLinkedChange = (newBorder) => {
		if (!newBorder) return onChange(void 0);
		if (!mixedBorders || isCompleteBorder(newBorder)) return onChange(isEmptyBorder(newBorder) ? void 0 : newBorder);
		const changes = getBorderDiff(linkedValue, newBorder);
		const updatedBorders = {
			top: {
				...value?.top,
				...changes
			},
			right: {
				...value?.right,
				...changes
			},
			bottom: {
				...value?.bottom,
				...changes
			},
			left: {
				...value?.left,
				...changes
			}
		};
		if (hasMixedBorders(updatedBorders)) return onChange(updatedBorders);
		const filteredResult = isEmptyBorder(updatedBorders.top) ? void 0 : updatedBorders.top;
		onChange(filteredResult);
	};
	const onSplitChange = (newBorder, side) => {
		const updatedBorders = {
			...splitValue,
			[side]: newBorder
		};
		if (hasMixedBorders(updatedBorders)) onChange(updatedBorders);
		else onChange(newBorder);
	};
	const linkedControlClassName = clsx(style_module_default["linked-border-control"], { [style_module_default["linked-border-control-full-width"]]: hasVisibleLabel });
	const wrapperClassName = style_module_default.wrapper;
	const headerClassName = style_module_default.header;
	return {
		...otherProps,
		className,
		colors,
		hasVisibleLabel,
		headerClassName,
		hideLabelFromVision,
		label,
		disableUnits: mixedBorders && !hasWidthValue,
		enableAlpha,
		enableStyle,
		hasMixedBorders: mixedBorders,
		isLinked,
		linkedControlClassName,
		onLinkedChange,
		onSplitChange,
		toggleLinked,
		linkedValue,
		splitValue,
		wrapperClassName,
		__experimentalIsRenderedInSidebar
	};
}
function init_hook$3() {
	return (init_hook$3 = __esmMin((() => {
		init_clsx();
		init_react();
		init_style_module();
		init_utils();
		init_use_context_system();
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/border-box-control/component.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, BorderLabel, UnconnectedBorderBoxControl, BorderBoxControl;
function init_component$3() {
	return (init_component$3 = __esmMin((() => {
		init_build_module();
		init_react();
		init_use_instance_id(), init_use_merge_refs();
		init_component();
		init_component$2();
		init_component$6();
		init_base_control();
		init_component$7();
		init_component$5();
		init_component$4();
		init_context_connect();
		init_hook$3();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-box-control/border-box-control/component.tsx";
		BorderLabel = (props) => {
			const { id, label, hideLabelFromVision } = props;
			if (!label) return null;
			return hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, {
				as: "span",
				id,
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 31,
				columnNumber: 3
			}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl.VisualLabel, {
				id,
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 35,
				columnNumber: 3
			}, void 0);
		};
		UnconnectedBorderBoxControl = (props, forwardedRef) => {
			const { className, colors, disableCustomColors, disableUnits, enableAlpha, enableStyle, hasMixedBorders, hasVisibleLabel, headerClassName, hideLabelFromVision, isLinked, label, linkedControlClassName, linkedValue, onLinkedChange, onSplitChange, popoverPlacement, popoverOffset, splitValue, toggleLinked, wrapperClassName, __experimentalIsRenderedInSidebar, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...otherProps } = useBorderBoxControl(props);
			const generatedLabelId = use_instance_id_default(BorderBoxControl, "border-box-control-label");
			const labelId = label && !ariaLabel && !ariaLabelledBy ? generatedLabelId : void 0;
			const [popoverAnchor, setPopoverAnchor] = (0, import_react.useState)(null);
			const popoverProps = (0, import_react.useMemo)(() => popoverPlacement ? {
				placement: popoverPlacement,
				offset: popoverOffset,
				anchor: popoverAnchor,
				shift: true
			} : void 0, [
				popoverPlacement,
				popoverOffset,
				popoverAnchor
			]);
			const mergedRef = useMergeRefs([setPopoverAnchor, forwardedRef]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
				className,
				role: label || ariaLabel || ariaLabelledBy ? "group" : void 0,
				"aria-label": ariaLabel,
				"aria-labelledby": ariaLabelledBy ?? labelId,
				...otherProps,
				ref: mergedRef,
				children: [hasVisibleLabel ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Grid, {
					className: headerClassName,
					columns: 2,
					templateColumns: "1fr min-content",
					alignment: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BorderLabel, {
						id: labelId,
						label,
						hideLabelFromVision
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 132,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ConnectedBorderBoxControlLinkedButton, {
						onClick: toggleLinked,
						isLinked
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 137,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 126,
					columnNumber: 5
				}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BorderLabel, {
					id: labelId,
					label,
					hideLabelFromVision
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 143,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
					className: wrapperClassName,
					children: [isLinked ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BorderControl, {
						className: linkedControlClassName,
						colors,
						disableUnits,
						disableCustomColors,
						enableAlpha,
						enableStyle,
						onChange: onLinkedChange,
						placeholder: hasMixedBorders ? __("Mixed") : void 0,
						__unstablePopoverProps: popoverProps,
						shouldSanitizeBorder: false,
						value: linkedValue,
						withSlider: true,
						width: "116px",
						__experimentalIsRenderedInSidebar
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 151,
						columnNumber: 6
					}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ConnectedBorderBoxControlSplitControls, {
						colors,
						disableCustomColors,
						enableAlpha,
						enableStyle,
						onChange: onSplitChange,
						popoverPlacement,
						popoverOffset,
						value: splitValue,
						__experimentalIsRenderedInSidebar
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 172,
						columnNumber: 6
					}, void 0), !hasVisibleLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ConnectedBorderBoxControlLinkedButton, {
						onClick: toggleLinked,
						isLinked
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 189,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 149,
					columnNumber: 4
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 111,
				columnNumber: 3
			}, void 0);
		};
		BorderBoxControl = contextConnect(UnconnectedBorderBoxControl, "BorderBoxControl");
		try {
			BorderBoxControl.__docgenInfo = {
				"description": "An input control for the color, style, and width of the border of a box. The\nborder can be customized as a whole, or individually for each side of the box.\n\nThe controls are exposed as a group named by the `label` prop. Passing\n`aria-labelledby` or `aria-label` names the group instead, taking precedence\nover `label`; with none of the three, the wrapper is not exposed as a group.\n\n```jsx\nimport { BorderBoxControl } from '@wordpress/components';\nimport { __ } from '@wordpress/i18n';\n\nconst colors = [\n	{ name: 'Blue 20', color: '#72aee6' },\n	// ...\n];\n\nconst MyBorderBoxControl = () => {\n	const defaultBorder = {\n		color: '#72aee6',\n		style: 'dashed',\n		width: '1px',\n	};\n	const [ borders, setBorders ] = useState( {\n		top: defaultBorder,\n		right: defaultBorder,\n		bottom: defaultBorder,\n		left: defaultBorder,\n	} );\n	const onChange = ( newBorders ) => setBorders( newBorders );\n\n	return (\n		<BorderBoxControl\n			colors={ colors }\n			label={ __( 'Borders' ) }\n			onChange={ onChange }\n			value={ borders }\n		/>\n	);\n};\n```",
				"displayName": "BorderBoxControl",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-box-control/border-box-control/component.tsx",
				"methods": [],
				"props": {
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
					"disableCustomColors": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This toggles the ability to choose custom colors.",
						"name": "disableCustomColors",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"enableAlpha": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This controls whether the alpha channel will be offered when selecting\ncustom colors.",
						"name": "enableAlpha",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"hideLabelFromVision": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Provides control over whether the label will only be visible to\nscreen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If provided, a label will be generated using this as the content.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"size": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Size of the control.\n@deprecated This prop no longer has any effect.\n@ignore",
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
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Start opting into the larger default height that will become the default size in a future version.\n@deprecated Default behavior since WordPress 7.1. Prop can be safely removed.\n@ignore",
						"name": "__next40pxDefaultSize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"enableStyle": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "This controls whether to support border style selection.",
						"name": "enableStyle",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback function invoked when any border value is changed. The value\nreceived may be a \"flat\" border object, one that has properties defining\nindividual side borders, or `undefined`.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "(value: AnyBorder) => void" }
					},
					"popoverPlacement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The position of the color popovers compared to the control wrapper.",
						"name": "popoverPlacement",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PopoverPlacement",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"top\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"left-end\"" },
								{ "value": "\"left-start\"" },
								{ "value": "\"right-end\"" },
								{ "value": "\"right-start\"" },
								{ "value": "\"top-end\"" },
								{ "value": "\"top-start\"" },
								{ "value": "\"bottom-end\"" },
								{ "value": "\"bottom-start\"" },
								{ "value": "\"overlay\"" }
							]
						}
					},
					"popoverOffset": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The space between the popover and the control wrapper. A number\ndisplaces the popover along its main axis; pass an object to also\ndisplace it along its cross axis.",
						"name": "popoverOffset",
						"required": false,
						"tags": {},
						"type": { "name": "number | { mainAxis?: number; crossAxis?: number; } | undefined" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/border-box-control/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An object representing the current border configuration.\n\nThis may be a \"flat\" border where the object has `color`, `style`, and\n`width` properties or a \"split\" border which defines the previous\nproperties but for each side; `top`, `right`, `bottom`, and `left`.",
						"name": "value",
						"required": true,
						"tags": {},
						"type": { "name": "AnyBorder" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/border-box-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, colors, Template, Default, WithoutLabel;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_button();
		init_component$3();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-box-control/stories/index.story.tsx";
		meta = {
			id: "components-borderboxcontrol",
			title: "Components/@wordpress-components/BorderBoxControl",
			component: BorderBoxControl,
			argTypes: {
				onChange: { action: "onChange" },
				value: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		colors = [
			{
				name: "Blue 20",
				color: "#72aee6"
			},
			{
				name: "Blue 40",
				color: "#3582c4"
			},
			{
				name: "Red 40",
				color: "#e65054"
			},
			{
				name: "Red 70",
				color: "#8a2424"
			},
			{
				name: "Yellow 10",
				color: "#f2d675"
			},
			{
				name: "Yellow 40",
				color: "#bd8600"
			}
		];
		Template = (props) => {
			const { onChange, ...otherProps } = props;
			const [borders, setBorders] = (0, import_react.useState)();
			const onChangeMerged = (newBorders) => {
				setBorders(newBorders);
				onChange(newBorders);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BorderBoxControl, {
					...otherProps,
					onChange: onChangeMerged,
					value: borders
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { style: {
					marginTop: "100px",
					borderColor: "#ddd",
					borderStyle: "solid",
					borderBottom: "none"
				} }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					style: {
						color: "#6c6c6c",
						fontSize: "0.9em"
					},
					children: "The BorderBoxControl is intended to be used within a component that will provide reset controls. The button below is only for convenience."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					__next40pxDefaultSize: true,
					variant: "primary",
					onClick: () => onChangeMerged(void 0),
					children: "Reset"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			colors,
			label: "Borders",
			enableStyle: true
		};
		WithoutLabel = Template.bind({});
		WithoutLabel.args = {
			...Default.args,
			label: void 0
		};
		try {
			WithoutLabel.__docgenInfo = {
				"description": "With no visible label there is no label row for the linked/unlinked toggle to\njoin, so it is rendered alongside the border inputs instead.",
				"displayName": "WithoutLabel",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/border-box-control/stories/index.story.tsx",
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
					originalSource: "props => {\n  const {\n    onChange,\n    ...otherProps\n  } = props;\n  const [borders, setBorders] = useState<(typeof props)['value']>();\n  const onChangeMerged: ComponentProps<typeof BorderBoxControl>['onChange'] = newBorders => {\n    setBorders(newBorders);\n    onChange(newBorders);\n  };\n  return <>\n            <BorderBoxControl {...otherProps} onChange={onChangeMerged} value={borders} />\n            <hr style={{\n      marginTop: '100px',\n      borderColor: '#ddd',\n      borderStyle: 'solid',\n      borderBottom: 'none'\n    }} />\n            <p style={{\n      color: '#6c6c6c',\n      fontSize: '0.9em'\n    }}>\n                The BorderBoxControl is intended to be used within a component\n                that will provide reset controls. The button below is only for\n                convenience.\n            </p>\n            <Button __next40pxDefaultSize variant=\"primary\" onClick={() => onChangeMerged(undefined)}>\n                Reset\n            </Button>\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithoutLabel.parameters = {
			...WithoutLabel.parameters,
			docs: {
				...WithoutLabel.parameters?.docs,
				source: {
					originalSource: "props => {\n  const {\n    onChange,\n    ...otherProps\n  } = props;\n  const [borders, setBorders] = useState<(typeof props)['value']>();\n  const onChangeMerged: ComponentProps<typeof BorderBoxControl>['onChange'] = newBorders => {\n    setBorders(newBorders);\n    onChange(newBorders);\n  };\n  return <>\n            <BorderBoxControl {...otherProps} onChange={onChangeMerged} value={borders} />\n            <hr style={{\n      marginTop: '100px',\n      borderColor: '#ddd',\n      borderStyle: 'solid',\n      borderBottom: 'none'\n    }} />\n            <p style={{\n      color: '#6c6c6c',\n      fontSize: '0.9em'\n    }}>\n                The BorderBoxControl is intended to be used within a component\n                that will provide reset controls. The button below is only for\n                convenience.\n            </p>\n            <Button __next40pxDefaultSize variant=\"primary\" onClick={() => onChangeMerged(undefined)}>\n                Reset\n            </Button>\n        </>;\n}",
					...WithoutLabel.parameters?.docs?.source
				},
				description: {
					story: "With no visible label there is no label row for the linked/unlinked toggle to\njoin, so it is rendered alongside the border inputs instead.",
					...WithoutLabel.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithoutLabel, meta as default };
