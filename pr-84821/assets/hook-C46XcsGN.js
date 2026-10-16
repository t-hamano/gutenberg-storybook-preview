import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as isValueDefined, r as init_values } from "./values-Dw4yFgqQ.js";
import { n as useContextSystem, t as init_use_context_system } from "./use-context-system-BCQpAcZ4.js";
//#region ../packages/components/src/truncate/utils.ts
function truncateMiddle(word, headLength, tailLength, ellipsis) {
	if (typeof word !== "string") return "";
	const wordLength = word.length;
	const frontLength = ~~headLength;
	const backLength = ~~tailLength;
	/* istanbul ignore next */
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
//#region ../packages/components/src/truncate/style.module.scss
var truncate, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		truncate = "_truncate_1615a_1";
		style_module_default = {
			truncate,
			"is-line-clamp": "_is-line-clamp_1615a_8",
			"is-single-line": "_is-single-line_1615a_14"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/truncate/hook.ts
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
	const classes = clsx(shouldTruncate && !numberOfLines && style_module_default.truncate, shouldClampLines && style_module_default["is-line-clamp"], shouldClampSingleLine && style_module_default["is-single-line"], className);
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
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_clsx();
		init_use_context_system();
		init_utils();
		init_style_module();
	})))();
}
//#endregion
export { useTruncate as n, init_hook as t };
