import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as memize } from "./dist-DL-769ey.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { t as require_dist } from "./dist-CEeqgoWY.js";
import { a as hasConnectNamespace, n as useContextSystem, o as init_context_connect, t as init_use_context_system } from "./use-context-system-6z_jGcZR.js";
import { n as useTruncate, t as init_hook$1 } from "./hook-BcXCp7Cl.js";
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
		text = "_text_ncpxt_4";
		destructive = "_destructive_ncpxt_199";
		block = "_block_ncpxt_209";
		muted = "_muted_ncpxt_213";
		style_module_default = {
			text,
			"control-line-height": "_control-line-height_ncpxt_19",
			"control-line-height-large": "_control-line-height-large_ncpxt_23",
			"control-line-height-small": "_control-line-height-small_ncpxt_27",
			"control-line-height-xSmall": "_control-line-height-xSmall_ncpxt_31",
			"has-display": "_has-display_ncpxt_39",
			"has-letter-spacing": "_has-letter-spacing_ncpxt_43",
			"has-text-align": "_has-text-align_ncpxt_47",
			"color-inherit": "_color-inherit_ncpxt_51",
			"color-initial": "_color-initial_ncpxt_55",
			"color-unset": "_color-unset_ncpxt_59",
			"color-revert": "_color-revert_ncpxt_63",
			"color-revert-layer": "_color-revert-layer_ncpxt_67",
			"display-inherit": "_display-inherit_ncpxt_71",
			"display-initial": "_display-initial_ncpxt_75",
			"display-unset": "_display-unset_ncpxt_79",
			"display-revert": "_display-revert_ncpxt_83",
			"display-revert-layer": "_display-revert-layer_ncpxt_87",
			"font-size-inherit": "_font-size-inherit_ncpxt_91",
			"font-size-initial": "_font-size-initial_ncpxt_95",
			"font-size-unset": "_font-size-unset_ncpxt_99",
			"font-size-revert": "_font-size-revert_ncpxt_103",
			"font-size-revert-layer": "_font-size-revert-layer_ncpxt_107",
			"font-weight-inherit": "_font-weight-inherit_ncpxt_111",
			"font-weight-initial": "_font-weight-initial_ncpxt_115",
			"font-weight-unset": "_font-weight-unset_ncpxt_119",
			"font-weight-revert": "_font-weight-revert_ncpxt_123",
			"font-weight-revert-layer": "_font-weight-revert-layer_ncpxt_127",
			"line-height-inherit": "_line-height-inherit_ncpxt_131",
			"line-height-initial": "_line-height-initial_ncpxt_135",
			"line-height-unset": "_line-height-unset_ncpxt_139",
			"line-height-revert": "_line-height-revert_ncpxt_143",
			"line-height-revert-layer": "_line-height-revert-layer_ncpxt_147",
			"letter-spacing-inherit": "_letter-spacing-inherit_ncpxt_151",
			"letter-spacing-initial": "_letter-spacing-initial_ncpxt_155",
			"letter-spacing-unset": "_letter-spacing-unset_ncpxt_159",
			"letter-spacing-revert": "_letter-spacing-revert_ncpxt_163",
			"letter-spacing-revert-layer": "_letter-spacing-revert-layer_ncpxt_167",
			"text-align-inherit": "_text-align-inherit_ncpxt_171",
			"text-align-initial": "_text-align-initial_ncpxt_175",
			"text-align-unset": "_text-align-unset_ncpxt_179",
			"text-align-revert": "_text-align-revert_ncpxt_183",
			"text-align-revert-layer": "_text-align-revert-layer_ncpxt_187",
			"readability-dark": "_readability-dark_ncpxt_191",
			"readability-light": "_readability-light_ncpxt_195",
			destructive,
			"highlighter-text": "_highlighter-text_ncpxt_203",
			block,
			muted,
			"upper-case": "_upper-case_ncpxt_217"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/text/utils.ts
/**
* Creates the highlighted text rendered by Text.
*
* @param options               Highlighter options.
* @param options.autoEscape    Whether to escape regular-expression characters.
* @param options.caseSensitive Whether matching is case-sensitive.
* @param options.children      Text to highlight.
* @param options.sanitize      Text normalization function used for matching.
* @param options.searchWords   Search terms to highlight.
*/
function createHighlighterText({ autoEscape, caseSensitive = false, children, sanitize, searchWords = [] }) {
	if (!children) return null;
	return (0, import_dist.findAll)({
		autoEscape,
		caseSensitive,
		sanitize,
		searchWords,
		textToHighlight: children
	}).map((chunk, index) => (0, import_react.createElement)(chunk.highlight ? "mark" : "span", {
		children: children.slice(chunk.start, chunk.end),
		key: index
	}));
}
var import_dist;
function init_utils() {
	return (init_utils = __esmMin((() => {
		import_dist = require_dist();
		init_react();
	})))();
}
//#endregion
//#region ../packages/components/src/utils/font-size.ts
function getFontSize(size = "body") {
	switch (size) {
		case "body": return "var(--wpds-typography-font-size-md, 13px)";
		case "footnote": return "var(--wpds-typography-font-size-xs, 11px)";
		case "subheadline": return "var(--wpds-typography-font-size-sm, 12px)";
		case "title": return "var(--wpds-typography-font-size-xl, 20px)";
		case "caption": return "10px";
		case "largeTitle": return "28px";
	}
	if (typeof size !== "number") {
		const parsed = parseFloat(size);
		if (Number.isNaN(parsed)) return size;
		size = parsed;
	}
	return `${size}px`;
}
function getHeadingFontSize(size = 3) {
	switch (String(size)) {
		case "1": return "31.72px";
		case "2": return "25.35px";
		case "3": return "20.28px";
		case "4": return "16.25px";
		case "5": return "var(--wpds-typography-font-size-md, 13px)";
		case "6": return "10.4px";
		default: return getFontSize(size);
	}
}
function init_font_size() {
	return (init_font_size = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/components/src/text/hook.ts
/**
* @param {import('../context').WordPressComponentProps<import('./types').Props, 'span'>} props
*/
function useText(props) {
	const { adjustLineHeightForInnerControls, align, children, className, color, ellipsizeMode, isDestructive = false, display, highlightEscape = false, highlightCaseSensitive = false, highlightWords, highlightSanitize, isBlock = false, letterSpacing, lineHeight: lineHeightProp, optimizeReadabilityFor, size, style, truncate = false, upperCase = false, variant, weight = "var(--wpds-typography-font-weight-default, 400)", ...otherProps } = useContextSystem(props, "Text");
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
		"line-height": lineHeightProp || void 0,
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
	const classes = clsx(style_module_default.text, !lineHeightProp && adjustLineHeightForInnerControls && [style_module_default["control-line-height"], style_module_default[`control-line-height-${adjustLineHeightForInnerControls}`]], {
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
