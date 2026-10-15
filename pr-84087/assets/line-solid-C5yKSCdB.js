import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CO2tRbm-.js";
//#region ../packages/icons/build-module/library/line-solid.mjs
var import_jsx_runtime, line_solid_default;
function init_line_solid() {
	return (init_line_solid = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		line_solid_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M5 12H19" })
		});
	})))();
}
//#endregion
export { line_solid_default as n, init_line_solid as t };
