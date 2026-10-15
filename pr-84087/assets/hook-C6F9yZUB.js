import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as memize } from "./dist-DL-769ey.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { t as require_dist } from "./dist-CEeqgoWY.js";
import { a as hasConnectNamespace, n as useContextSystem, o as init_context_connect, t as init_use_context_system } from "./use-context-system-D7pcITcN.js";
import { n as init_config_values, t as config_values_default } from "./config-values-hzX34N5c.js";
import { n as space, t as init_space } from "./space-BUoQC8K7.js";
import { n as useTruncate, t as init_hook$1 } from "./hook-DuQ4YzeN.js";
//#region ../packages/components/src/utils/colors.ts
/**
* @return The HTML element for color computation.
*/
function getColorComputationNode() {
	if (typeof document === "undefined") return;
	if (!colorComputationNode) {
		const el = document.createElement("div");
		el.setAttribute("data-g2-color-computation-node", "");
		document.body.appendChild(el);
		colorComputationNode = el;
	}
	return colorComputationNode;
}
/**
* @param value
*
* @return Whether the value is a valid color.
*/
function isColor(value) {
	if (typeof value !== "string") return false;
	return A(value).isValid();
}
/**
* Retrieves the computed background color. This is useful for getting the
* value of a CSS variable color.
*
* @param backgroundColor The background color to compute.
*
* @return The computed background color.
*/
function _getComputedBackgroundColor(backgroundColor) {
	if (typeof backgroundColor !== "string") return "";
	if (isColor(backgroundColor)) return backgroundColor;
	if (!backgroundColor.includes("var(")) return "";
	if (typeof document === "undefined") return "";
	const el = getColorComputationNode();
	if (!el) return "";
	el.style.background = backgroundColor;
	const computedColor = window?.getComputedStyle(el).background;
	el.style.background = "";
	return computedColor || "";
}
/**
* Get the text shade optimized for readability, based on a background color.
*
* @param backgroundColor The background color.
*
* @return The optimized text color (black or white).
*/
function getOptimalTextColor(backgroundColor) {
	const background = getComputedBackgroundColor(backgroundColor);
	return A(background).isLight() ? "#000000" : "#ffffff";
}
/**
* Get the text shade optimized for readability, based on a background color.
*
* @param backgroundColor The background color.
*
* @return The optimized text shade (dark or light).
*/
function getOptimalTextShade(backgroundColor) {
	return getOptimalTextColor(backgroundColor) === "#000000" ? "dark" : "light";
}
var colorComputationNode, getComputedBackgroundColor;
function init_colors() {
	return (init_colors = __esmMin((() => {
		init_colord();
		init_names();
		D([e]);
		getComputedBackgroundColor = memize(_getComputedBackgroundColor);
	})))();
}
//#endregion
//#region ../packages/components/src/text/style.module.scss
var text, destructive, block, muted, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		text = "_text_12i3f_4";
		destructive = "_destructive_12i3f_183";
		block = "_block_12i3f_193";
		muted = "_muted_12i3f_197";
		style_module_default = {
			text,
			"has-display": "_has-display_12i3f_23",
			"has-letter-spacing": "_has-letter-spacing_12i3f_27",
			"has-text-align": "_has-text-align_12i3f_31",
			"color-inherit": "_color-inherit_12i3f_35",
			"color-initial": "_color-initial_12i3f_39",
			"color-unset": "_color-unset_12i3f_43",
			"color-revert": "_color-revert_12i3f_47",
			"color-revert-layer": "_color-revert-layer_12i3f_51",
			"display-inherit": "_display-inherit_12i3f_55",
			"display-initial": "_display-initial_12i3f_59",
			"display-unset": "_display-unset_12i3f_63",
			"display-revert": "_display-revert_12i3f_67",
			"display-revert-layer": "_display-revert-layer_12i3f_71",
			"font-size-inherit": "_font-size-inherit_12i3f_75",
			"font-size-initial": "_font-size-initial_12i3f_79",
			"font-size-unset": "_font-size-unset_12i3f_83",
			"font-size-revert": "_font-size-revert_12i3f_87",
			"font-size-revert-layer": "_font-size-revert-layer_12i3f_91",
			"font-weight-inherit": "_font-weight-inherit_12i3f_95",
			"font-weight-initial": "_font-weight-initial_12i3f_99",
			"font-weight-unset": "_font-weight-unset_12i3f_103",
			"font-weight-revert": "_font-weight-revert_12i3f_107",
			"font-weight-revert-layer": "_font-weight-revert-layer_12i3f_111",
			"line-height-inherit": "_line-height-inherit_12i3f_115",
			"line-height-initial": "_line-height-initial_12i3f_119",
			"line-height-unset": "_line-height-unset_12i3f_123",
			"line-height-revert": "_line-height-revert_12i3f_127",
			"line-height-revert-layer": "_line-height-revert-layer_12i3f_131",
			"letter-spacing-inherit": "_letter-spacing-inherit_12i3f_135",
			"letter-spacing-initial": "_letter-spacing-initial_12i3f_139",
			"letter-spacing-unset": "_letter-spacing-unset_12i3f_143",
			"letter-spacing-revert": "_letter-spacing-revert_12i3f_147",
			"letter-spacing-revert-layer": "_letter-spacing-revert-layer_12i3f_151",
			"text-align-inherit": "_text-align-inherit_12i3f_155",
			"text-align-initial": "_text-align-initial_12i3f_159",
			"text-align-unset": "_text-align-unset_12i3f_163",
			"text-align-revert": "_text-align-revert_12i3f_167",
			"text-align-revert-layer": "_text-align-revert-layer_12i3f_171",
			"readability-dark": "_readability-dark_12i3f_175",
			"readability-light": "_readability-light_12i3f_179",
			destructive,
			"highlighter-text": "_highlighter-text_12i3f_187",
			block,
			muted,
			"upper-case": "_upper-case_12i3f_201"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/text/utils.ts
/**
* @param options
* @param options.activeClassName
* @param options.activeIndex
* @param options.activeStyle
* @param options.autoEscape
* @param options.caseSensitive
* @param options.children
* @param options.findChunks
* @param options.highlightClassName
* @param options.highlightStyle
* @param options.highlightTag
* @param options.sanitize
* @param options.searchWords
* @param options.unhighlightClassName
* @param options.unhighlightStyle
*/
function createHighlighterText({ activeClassName = "", activeIndex = -1, activeStyle, autoEscape, caseSensitive = false, children, findChunks, highlightClassName = "", highlightStyle = {}, highlightTag = "mark", sanitize, searchWords = [], unhighlightClassName = "", unhighlightStyle }) {
	if (!children) return null;
	if (typeof children !== "string") return children;
	const textToHighlight = children;
	const chunks = (0, import_dist.findAll)({
		autoEscape,
		caseSensitive,
		findChunks,
		sanitize,
		searchWords,
		textToHighlight
	});
	const HighlightTag = highlightTag;
	let highlightIndex = -1;
	let highlightClassNames = "";
	let highlightStyles;
	return chunks.map((chunk, index) => {
		const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
		if (chunk.highlight) {
			highlightIndex++;
			let highlightClass;
			if (typeof highlightClassName === "object") {
				if (!caseSensitive) {
					highlightClassName = memoizedLowercaseProps(highlightClassName);
					highlightClass = highlightClassName[text.toLowerCase()];
				} else highlightClass = highlightClassName[text];
			} else highlightClass = highlightClassName;
			const isActive = highlightIndex === +activeIndex;
			highlightClassNames = `${highlightClass} ${isActive ? activeClassName : ""}`;
			highlightStyles = isActive === true && activeStyle !== null ? Object.assign({}, highlightStyle, activeStyle) : highlightStyle;
			const props = {
				children: text,
				className: highlightClassNames,
				key: index,
				style: highlightStyles
			};
			if (typeof HighlightTag !== "string") props.highlightIndex = highlightIndex;
			return (0, import_react.createElement)(HighlightTag, props);
		}
		return (0, import_react.createElement)("span", {
			children: text,
			className: unhighlightClassName,
			key: index,
			style: unhighlightStyle
		});
	});
}
var import_dist, lowercaseProps, memoizedLowercaseProps;
function init_utils() {
	return (init_utils = __esmMin((() => {
		import_dist = require_dist();
		init_react();
		lowercaseProps = (object) => {
			const mapped = {};
			for (const key in object) mapped[key.toLowerCase()] = object[key];
			return mapped;
		};
		memoizedLowercaseProps = memize(lowercaseProps);
	})))();
}
//#endregion
//#region ../packages/components/src/utils/font-size.ts
function getFontSize(size = 13) {
	if (size in PRESET_FONT_SIZES) return getFontSize(PRESET_FONT_SIZES[size]);
	if (typeof size !== "number") {
		const parsed = parseFloat(size);
		if (Number.isNaN(parsed)) return size;
		size = parsed;
	}
	return `calc(${`(${size} / 13)`} * ${config_values_default.fontSize})`;
}
function getHeadingFontSize(size = 3) {
	if (!HEADING_FONT_SIZES.includes(size)) return getFontSize(size);
	const headingSize = `fontSizeH${size}`;
	return config_values_default[headingSize];
}
var PRESET_FONT_SIZES, HEADING_FONT_SIZES;
function init_font_size() {
	return (init_font_size = __esmMin((() => {
		init_config_values();
		PRESET_FONT_SIZES = {
			body: 13,
			caption: 10,
			footnote: 11,
			largeTitle: 28,
			subheadline: 12,
			title: 20
		};
		HEADING_FONT_SIZES = [
			1,
			2,
			3,
			4,
			5,
			6
		].flatMap((n) => [n, n.toString()]);
	})))();
}
//#endregion
//#region ../packages/components/src/text/get-line-height.ts
function getLineHeight(adjustLineHeightForInnerControls, lineHeight) {
	if (lineHeight) return lineHeight;
	if (!adjustLineHeightForInnerControls) return;
	let value = `calc(${config_values_default.controlHeight} + ${space(2)})`;
	switch (adjustLineHeightForInnerControls) {
		case "large":
			value = `calc(${config_values_default.controlHeightLarge} + ${space(2)})`;
			break;
		case "small":
			value = `calc(${config_values_default.controlHeightSmall} + ${space(2)})`;
			break;
		case "xSmall": value = `calc(${config_values_default.controlHeightXSmall} + ${space(2)})`;
	}
	return value;
}
function init_get_line_height() {
	return (init_get_line_height = __esmMin((() => {
		init_space();
		init_config_values();
	})))();
}
//#endregion
//#region ../packages/components/src/text/hook.ts
/**
* @param {import('../context').WordPressComponentProps<import('./types').Props, 'span'>} props
*/
function useText(props) {
	const { adjustLineHeightForInnerControls, align, children, className, color, ellipsizeMode, isDestructive = false, display, highlightEscape = false, highlightCaseSensitive = false, highlightWords, highlightSanitize, isBlock = false, letterSpacing, lineHeight: lineHeightProp, optimizeReadabilityFor, size, style, truncate = false, upperCase = false, variant, weight = config_values_default.fontWeight, ...otherProps } = useContextSystem(props, "Text");
	let content = children;
	const isHighlighter = Array.isArray(highlightWords);
	const isCaption = size === "caption";
	if (isHighlighter) {
		if (typeof children !== "string") throw new TypeError("`children` of `Text` must only be `string` types when `highlightWords` is defined");
		content = createHighlighterText({
			autoEscape: highlightEscape,
			children,
			caseSensitive: highlightCaseSensitive,
			searchWords: highlightWords,
			sanitize: highlightSanitize
		});
	}
	const optimalTextShade = (0, import_react.useMemo)(() => optimizeReadabilityFor && getOptimalTextShade(optimizeReadabilityFor), [optimizeReadabilityFor]);
	const typography = {
		color,
		display,
		"font-size": getFontSize(size),
		"font-weight": weight,
		"line-height": getLineHeight(adjustLineHeightForInnerControls, lineHeightProp),
		"letter-spacing": typeof letterSpacing === "number" ? `${letterSpacing}px` : letterSpacing,
		"text-align": align
	};
	const textStyle = {};
	const keywordClasses = [];
	for (const [property, value] of Object.entries(typography)) {
		const keyword = typeof value === "string" ? value.trim().toLowerCase() : void 0;
		if (keyword && CSS_WIDE_KEYWORDS.has(keyword)) keywordClasses.push(style_module_default[`${property}-${keyword}`]);
		else textStyle[`--wp-components-text-${property}`] = value === "" ? void 0 : value;
	}
	const classes = clsx(style_module_default.text, {
		[style_module_default["has-display"]]: !!display,
		[style_module_default["has-letter-spacing"]]: letterSpacing !== void 0 && letterSpacing !== "",
		[style_module_default["has-text-align"]]: !!align
	}, keywordClasses, {
		[style_module_default["readability-dark"]]: optimalTextShade === "dark",
		[style_module_default["readability-light"]]: !!optimalTextShade && optimalTextShade !== "dark",
		[style_module_default.destructive]: isDestructive,
		[style_module_default["highlighter-text"]]: isHighlighter,
		[style_module_default.block]: isBlock,
		[style_module_default.muted]: isCaption || variant === "muted",
		[style_module_default["upper-case"]]: upperCase
	}, className);
	let finalEllipsizeMode;
	if (truncate === true) finalEllipsizeMode = "auto";
	if (truncate === false) finalEllipsizeMode = "none";
	const finalComponentProps = {
		...otherProps,
		className: classes,
		style: {
			...textStyle,
			...style
		},
		children,
		ellipsizeMode: ellipsizeMode || finalEllipsizeMode
	};
	const truncateProps = useTruncate(finalComponentProps);
	/**
	* Enhance child `<Link />` components to inherit font size.
	*/
	if (!truncate && Array.isArray(children)) content = import_react.Children.map(children, (child) => {
		if (typeof child !== "object" || child === null || !("props" in child)) return child;
		if (hasConnectNamespace(child, ["Link"])) return (0, import_react.cloneElement)(child, { size: child.props.size || "inherit" });
		return child;
	});
	return {
		...truncateProps,
		children: truncate ? truncateProps.children : content
	};
}
var CSS_WIDE_KEYWORDS;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_react();
		init_context_connect(), init_use_context_system();
		init_hook$1();
		init_colors();
		init_style_module();
		init_utils();
		init_font_size();
		init_config_values();
		init_get_line_height();
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
export { init_font_size as i, useText as n, getHeadingFontSize as r, init_hook as t };
