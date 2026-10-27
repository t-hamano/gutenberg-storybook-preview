import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/chevron-left.mjs
var import_jsx_runtime$1, chevron_left_default;
function init_chevron_left() {
	return (init_chevron_left = __esmMin((() => {
		init_svg();
		import_jsx_runtime$1 = require_jsx_runtime();
		chevron_left_default = /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Path, { d: "M14 6.5L9 12L14 17.5" })
		});
	})))();
}
//#endregion
//#region ../packages/icons/build-module/library/chevron-right.mjs
var import_jsx_runtime, chevron_right_default;
function init_chevron_right() {
	return (init_chevron_right = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		chevron_right_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M10 6.5L15 12L10 17.5" })
		});
	})))();
}
//#endregion
export { init_chevron_left as i, init_chevron_right as n, chevron_left_default as r, chevron_right_default as t };
