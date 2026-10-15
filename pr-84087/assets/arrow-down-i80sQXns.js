import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CO2tRbm-.js";
//#region ../packages/icons/build-module/library/arrow-down.mjs
var import_jsx_runtime, arrow_down_default;
function init_arrow_down() {
	return (init_arrow_down = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		arrow_down_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M12 4V19M7 14L12 19L17 14" })
		});
	})))();
}
//#endregion
export { init_arrow_down as n, arrow_down_default as t };
