import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as memize } from "./dist-DL-769ey.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as hasConnectNamespace, n as useContextSystem, o as init_context_connect, t as init_use_context_system } from "./use-context-system-BrNgZl6E.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { n as init_config_values, t as config_values_default } from "./config-values-0x5e6kXt.js";
import { n as space, t as init_space } from "./space-CmH0DdCr.js";
import { t as require_dist } from "./dist-CEeqgoWY.js";
//#region ../packages/components/build-module/utils/values.mjs
function isValueDefined(value) {
	return value !== void 0 && value !== null;
}
function isValueEmpty(value) {
	const isEmptyString = value === "";
	return !isValueDefined(value) || isEmptyString;
}
function getDefinedValue(values = [], fallbackValue) {
	return values.find(isValueDefined) ?? fallbackValue;
}
var stringToNumber, ensureNumber;
function init_values() {
	return (init_values = __esmMin((() => {
		stringToNumber = (value) => {
			return parseFloat(value);
		};
		ensureNumber = (value) => {
			return typeof value === "string" ? stringToNumber(value) : value;
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/utils/colors.mjs
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
function isColor(value) {
	if (typeof value !== "string") return false;
	return A(value).isValid();
}
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
function getOptimalTextColor(backgroundColor) {
	const background = getComputedBackgroundColor(backgroundColor);
	return A(background).isLight() ? "#000000" : "#ffffff";
}
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
//#region ../packages/components/build-module/truncate/utils.mjs
function truncateMiddle(word, headLength, tailLength, ellipsis) {
	if (typeof word !== "string") return "";
	const wordLength = word.length;
	const frontLength = ~~headLength;
	const backLength = ~~tailLength;
	const truncateStr = isValueDefined(ellipsis) ? ellipsis : "…";
	if (frontLength === 0 && backLength === 0 || frontLength >= wordLength || backLength >= wordLength || frontLength + backLength >= wordLength) return word;
	else if (backLength === 0) return word.slice(0, frontLength) + truncateStr;
	return word.slice(0, frontLength) + truncateStr + word.slice(wordLength - backLength);
}
function truncateContent(words = "", props) {
	const { ellipsis, ellipsizeMode, limit } = {
		...TRUNCATE_DEFAULT_PROPS,
		...props
	};
	if (ellipsizeMode === TRUNCATE_TYPE.none) return words;
	let truncateHead;
	let truncateTail;
	switch (ellipsizeMode) {
		case TRUNCATE_TYPE.head:
			truncateHead = 0;
			truncateTail = limit;
			break;
		case TRUNCATE_TYPE.middle:
			truncateHead = Math.floor(limit / 2);
			truncateTail = Math.floor(limit / 2);
			break;
		default:
			truncateHead = limit;
			truncateTail = 0;
	}
	return ellipsizeMode !== TRUNCATE_TYPE.auto ? truncateMiddle(words, truncateHead, truncateTail, ellipsis) : words;
}
var TRUNCATE_TYPE, TRUNCATE_DEFAULT_PROPS;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_values();
		TRUNCATE_TYPE = {
			auto: "auto",
			head: "head",
			middle: "middle",
			tail: "tail",
			none: "none"
		};
		TRUNCATE_DEFAULT_PROPS = {
			ellipsis: "…",
			ellipsizeMode: TRUNCATE_TYPE.auto,
			limit: 0,
			numberOfLines: 0
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/truncate/hook.mjs
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
function useTruncate(props) {
	const { className, children, ellipsis = "…", ellipsizeMode = TRUNCATE_TYPE.auto, limit = 0, numberOfLines = 0, style, ...otherProps } = useContextSystem(props, "Truncate");
	let childrenAsText;
	if (typeof children === "string") childrenAsText = children;
	else if (typeof children === "number") childrenAsText = children.toString();
	const truncatedContent = childrenAsText ? truncateContent(childrenAsText, {
		ellipsis,
		ellipsizeMode,
		limit,
		numberOfLines
	}) : children;
	const shouldTruncate = !!childrenAsText && ellipsizeMode === TRUNCATE_TYPE.auto;
	const shouldClampLines = shouldTruncate && !!numberOfLines;
	const shouldClampSingleLine = shouldClampLines && numberOfLines === 1;
	const classes = clsx(shouldTruncate && !numberOfLines && style_module_default$1.truncate, shouldClampLines && style_module_default$1["is-line-clamp"], shouldClampSingleLine && style_module_default$1["is-single-line"], className);
	const truncateStyle = shouldClampLines ? {
		...style,
		"--wp-components-truncate-lines": numberOfLines
	} : style;
	return {
		...otherProps,
		className: classes,
		style: truncateStyle,
		children: truncatedContent
	};
}
var STYLE_HASH_ATTRIBUTE$1, style_module_default$1;
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_utils();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("beeae56da8", "._51f2afb77f24a721__truncate{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.d232bf8e2132288d__is-line-clamp{-webkit-box-orient:vertical;-webkit-line-clamp:var(--wp-components-truncate-lines);display:-webkit-box;overflow:hidden}.d232bf8e2132288d__is-line-clamp._95bf20b727db236f__is-single-line{word-break:break-all}");
		style_module_default$1 = {
			"truncate": "_51f2afb77f24a721__truncate",
			"is-line-clamp": "d232bf8e2132288d__is-line-clamp",
			"is-single-line": "_95bf20b727db236f__is-single-line"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/text/utils.mjs
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
function init_utils$1() {
	return (init_utils$1 = __esmMin((() => {
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
//#region ../packages/components/build-module/utils/font-size.mjs
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
//#region ../packages/components/build-module/text/get-line-height.mjs
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
//#region ../packages/components/build-module/text/hook.mjs
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
	const truncateProps = useTruncate({
		...otherProps,
		className: classes,
		style: {
			...textStyle,
			...style
		},
		children,
		ellipsizeMode: ellipsizeMode || finalEllipsizeMode
	});
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
var STYLE_HASH_ATTRIBUTE, style_module_default, CSS_WIDE_KEYWORDS;
function init_hook$1() {
	return (init_hook$1 = __esmMin((() => {
		init_clsx();
		init_react();
		init_context_connect(), init_use_context_system();
		init_hook();
		init_colors();
		init_utils$1();
		init_font_size();
		init_config_values();
		init_get_line_height();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("6e82ee08dd", ".f2c22847843fc4dc__text{--wp-components-text-color:initial;--wp-components-text-display:initial;--wp-components-text-font-size:initial;--wp-components-text-font-weight:initial;--wp-components-text-line-height:initial;--wp-components-text-letter-spacing:initial;--wp-components-text-text-align:initial;color:var(--wp-components-text-color,var(--wp-components-color-foreground,var(--wpds-color-foreground-content-neutral,#1e1e1e)));font-size:var(--wp-components-text-font-size);font-weight:var(--wp-components-text-font-weight);line-height:var(--wp-components-text-line-height,1.4);margin:0}:where(.f2c22847843fc4dc__text){text-wrap:pretty}._8f6d7b61c592c0ea__has-display{display:var(--wp-components-text-display)}._6670ba3cfedbc2a7__has-letter-spacing{letter-spacing:var(--wp-components-text-letter-spacing)}._84fcc697f902fb2f__has-text-align{text-align:var(--wp-components-text-text-align)}._88842fa613e94ab2__color-inherit{color:inherit}.e4f34bd591909698__color-initial{color:initial}._41ae2af454ae2318__color-unset{color:unset}.aa0db574c000d10c__color-revert{color:revert}.a6f6e0cbd7489293__color-revert-layer{color:revert-layer}._690fee5d4d2e60b5__display-inherit{display:inherit}._758b3f1bf245c09a__display-initial{display:initial}._6c6f2c5cfaee8c9e__display-unset{display:unset}.b9156ac06813bd17__display-revert{display:revert}._7749d00dcb29282b__display-revert-layer{display:revert-layer}._83d020c3b36a24e3__font-size-inherit{font-size:inherit}.c4483538578689e5__font-size-initial{font-size:medium}.db5229892861edcd__font-size-unset{font-size:unset}.b924199891c73a9e__font-size-revert{font-size:revert}._4e9cb9dcfe3f7991__font-size-revert-layer{font-size:revert-layer}.df2ab7c5729a658f__font-weight-inherit{font-weight:inherit}._77d9afd3bc6cf136__font-weight-initial{font-weight:400}._7752a7f835f24776__font-weight-unset{font-weight:unset}._3f436287ab089bd6__font-weight-revert{font-weight:revert}._5d03ce6827b70ec1__font-weight-revert-layer{font-weight:revert-layer}._25da20f012cb53e4__line-height-inherit{line-height:inherit}.c0b2dc283105c988__line-height-initial{line-height:normal}.a74d01ab473fb7ea__line-height-unset{line-height:unset}._6609beb80be736e1__line-height-revert{line-height:revert}._2675d3b56dacb4f5__line-height-revert-layer{line-height:revert-layer}.b42ace7535cf6596__letter-spacing-inherit{letter-spacing:inherit}._85f386d991fe7adb__letter-spacing-initial{letter-spacing:normal}.ea8fdbe108ae5868__letter-spacing-unset{letter-spacing:unset}._4ac0e6f372f87b34__letter-spacing-revert{letter-spacing:revert}._3d0ce8dadb86d027__letter-spacing-revert-layer{letter-spacing:revert-layer}.d4a178d2d217eb1a__text-align-inherit{text-align:inherit}.a03853d1fe852c21__text-align-initial{text-align:initial}.de027c97db853634__text-align-unset{text-align:unset}._21a41773d4f69f6c__text-align-revert{text-align:revert}._85878eebcac3407e__text-align-revert-layer{text-align:revert-layer}.a086159fab3ff68d__readability-dark{color:#1e1e1e}._4b69ac135be2adc5__readability-light{color:#fff}.d04ee7ac1850f829__destructive{color:#d94f4f}._5cdea99cf751f6d8__highlighter-text mark{background:#f0b849;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.05),inset 0 -1px 0 rgba(0,0,0,.1)}._96256701931573e6__block{display:block}.f7b7a8b6ade135ad__muted{color:var(--wp-components-color-gray-700,var(--wpds-color-foreground-content-neutral-weak,#707070))}._43034351f7924727__upper-case{text-transform:uppercase}");
		style_module_default = {
			"text": "f2c22847843fc4dc__text",
			"has-display": "_8f6d7b61c592c0ea__has-display",
			"has-letter-spacing": "_6670ba3cfedbc2a7__has-letter-spacing",
			"has-text-align": "_84fcc697f902fb2f__has-text-align",
			"color-inherit": "_88842fa613e94ab2__color-inherit",
			"color-initial": "e4f34bd591909698__color-initial",
			"color-unset": "_41ae2af454ae2318__color-unset",
			"color-revert": "aa0db574c000d10c__color-revert",
			"color-revert-layer": "a6f6e0cbd7489293__color-revert-layer",
			"display-inherit": "_690fee5d4d2e60b5__display-inherit",
			"display-initial": "_758b3f1bf245c09a__display-initial",
			"display-unset": "_6c6f2c5cfaee8c9e__display-unset",
			"display-revert": "b9156ac06813bd17__display-revert",
			"display-revert-layer": "_7749d00dcb29282b__display-revert-layer",
			"font-size-inherit": "_83d020c3b36a24e3__font-size-inherit",
			"font-size-initial": "c4483538578689e5__font-size-initial",
			"font-size-unset": "db5229892861edcd__font-size-unset",
			"font-size-revert": "b924199891c73a9e__font-size-revert",
			"font-size-revert-layer": "_4e9cb9dcfe3f7991__font-size-revert-layer",
			"font-weight-inherit": "df2ab7c5729a658f__font-weight-inherit",
			"font-weight-initial": "_77d9afd3bc6cf136__font-weight-initial",
			"font-weight-unset": "_7752a7f835f24776__font-weight-unset",
			"font-weight-revert": "_3f436287ab089bd6__font-weight-revert",
			"font-weight-revert-layer": "_5d03ce6827b70ec1__font-weight-revert-layer",
			"line-height-inherit": "_25da20f012cb53e4__line-height-inherit",
			"line-height-initial": "c0b2dc283105c988__line-height-initial",
			"line-height-unset": "a74d01ab473fb7ea__line-height-unset",
			"line-height-revert": "_6609beb80be736e1__line-height-revert",
			"line-height-revert-layer": "_2675d3b56dacb4f5__line-height-revert-layer",
			"letter-spacing-inherit": "b42ace7535cf6596__letter-spacing-inherit",
			"letter-spacing-initial": "_85f386d991fe7adb__letter-spacing-initial",
			"letter-spacing-unset": "ea8fdbe108ae5868__letter-spacing-unset",
			"letter-spacing-revert": "_4ac0e6f372f87b34__letter-spacing-revert",
			"letter-spacing-revert-layer": "_3d0ce8dadb86d027__letter-spacing-revert-layer",
			"text-align-inherit": "d4a178d2d217eb1a__text-align-inherit",
			"text-align-initial": "a03853d1fe852c21__text-align-initial",
			"text-align-unset": "de027c97db853634__text-align-unset",
			"text-align-revert": "_21a41773d4f69f6c__text-align-revert",
			"text-align-revert-layer": "_85878eebcac3407e__text-align-revert-layer",
			"readability-dark": "a086159fab3ff68d__readability-dark",
			"readability-light": "_4b69ac135be2adc5__readability-light",
			"destructive": "d04ee7ac1850f829__destructive",
			"highlighter-text": "_5cdea99cf751f6d8__highlighter-text",
			"block": "_96256701931573e6__block",
			"muted": "f7b7a8b6ade135ad__muted",
			"upper-case": "_43034351f7924727__upper-case"
		};
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
export { init_hook as a, getDefinedValue as c, isValueEmpty as d, init_font_size as i, init_values as l, useText as n, useTruncate as o, getHeadingFontSize as r, ensureNumber as s, init_hook$1 as t, isValueDefined as u };
