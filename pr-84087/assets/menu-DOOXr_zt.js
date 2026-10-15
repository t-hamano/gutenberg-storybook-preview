import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CO2tRbm-.js";
//#region ../packages/icons/build-module/library/menu.mjs
var import_jsx_runtime, menu_default;
function init_menu() {
	return (init_menu = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		menu_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M5 12H19M5 18.25H19M5 5.75H19" })
		});
	})))();
}
//#endregion
export { menu_default as n, init_menu as t };
