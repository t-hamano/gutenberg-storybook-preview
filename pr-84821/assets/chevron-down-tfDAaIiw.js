import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CAUvOTR7.js";
//#region ../packages/icons/build-module/library/chevron-down.mjs
var import_jsx_runtime, chevron_down_default;
function init_chevron_down() {
	return (init_chevron_down = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		chevron_down_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M7 11L12 15L17 11" })
		});
	})))();
}
//#endregion
export { init_chevron_down as n, chevron_down_default as t };
