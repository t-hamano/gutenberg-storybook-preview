import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/plus.mjs
var import_jsx_runtime, plus_default;
function init_plus() {
	return (init_plus = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		plus_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M12 18V6M18 12H6" })
		});
	})))();
}
//#endregion
export { plus_default as n, init_plus as t };
