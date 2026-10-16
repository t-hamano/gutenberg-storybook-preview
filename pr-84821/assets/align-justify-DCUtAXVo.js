import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CAUvOTR7.js";
//#region ../packages/icons/build-module/library/align-justify.mjs
var import_jsx_runtime, align_justify_default;
function init_align_justify() {
	return (init_align_justify = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		align_justify_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M4 5H20M4 12H20M4 19H16.5" })
		});
	})))();
}
//#endregion
export { init_align_justify as n, align_justify_default as t };
