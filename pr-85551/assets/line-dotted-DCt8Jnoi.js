import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/line-dashed.mjs
var import_jsx_runtime$1, line_dashed_default;
function init_line_dashed() {
	return (init_line_dashed = __esmMin((() => {
		init_svg();
		import_jsx_runtime$1 = require_jsx_runtime();
		line_dashed_default = /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Path, { d: "M5 12H8M10.5 12H13.5M16 12H19" })
		});
	})))();
}
//#endregion
//#region ../packages/icons/build-module/library/line-dotted.mjs
var import_jsx_runtime, line_dotted_default;
function init_line_dotted() {
	return (init_line_dotted = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		line_dotted_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M5.25 12H6.75M8.25 12H9.75M11.25 12H12.75M14.25 12H15.75M17.25 12H18.75" })
		});
	})))();
}
//#endregion
export { line_dashed_default as i, line_dotted_default as n, init_line_dashed as r, init_line_dotted as t };
