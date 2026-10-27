import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/home.mjs
var import_jsx_runtime, home_default;
function init_home() {
	return (init_home = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		home_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M13.75 19.25H19.25V8.5L12 5L4.75 8.5V19.25H10.25M13.75 19.25V13.7H10.25V19.25M13.75 19.25H10.25" })
		});
	})))();
}
//#endregion
export { init_home as n, home_default as t };
