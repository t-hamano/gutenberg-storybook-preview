import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as chevron_down_default } from "./chevron-down-Xtey2DGs.js";
import { n as init_input_suffix_wrapper, t as InputControlSuffixWrapper } from "./input-suffix-wrapper-2X1hSqMG.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/components/src/select-control/style.module.scss
var root, input, suffix, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_9yt02_1";
		input = "_input_9yt02_15";
		suffix = "_suffix_9yt02_79";
		style_module_default = {
			root,
			"is-disabled": "_is-disabled_9yt02_6",
			"is-minimal": "_is-minimal_9yt02_11",
			input,
			"is-small": "_is-small_9yt02_40",
			"is-compact": "_is-compact_9yt02_40",
			"is-multiple": "_is-multiple_9yt02_43",
			"is-rtl": "_is-rtl_9yt02_65",
			"down-arrow": "_down-arrow_9yt02_74",
			suffix
		};
	})))();
}
//#endregion
//#region ../packages/components/src/select-control/chevron-down.tsx
var import_jsx_dev_runtime, _jsxFileName, SelectControlChevronDown;
function init_chevron_down() {
	return (init_chevron_down = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_input_suffix_wrapper();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/select-control/chevron-down.tsx";
		SelectControlChevronDown = () => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputControlSuffixWrapper, {
				className: clsx(style_module_default.suffix, { [style_module_default["is-rtl"]]: isRTL() }),
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: style_module_default["down-arrow"],
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, {
						icon: chevron_down_default,
						size: 18
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 5
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 3
			}, void 0);
		};
	})))();
}
//#endregion
export { style_module_default as i, init_chevron_down as n, init_style_module as r, SelectControlChevronDown as t };
