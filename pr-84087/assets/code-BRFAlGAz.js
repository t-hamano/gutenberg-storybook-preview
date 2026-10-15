import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CO2tRbm-.js";
//#region ../packages/icons/build-module/library/code.mjs
var import_jsx_runtime, code_default;
function init_code() {
	return (init_code = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		code_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
				d: "M7.99997 7L3.70708 11.2929C3.31655 11.6834 3.31655 12.3166 3.70708 12.7071L7.99997 17M16 17L20.2929 12.7071C20.6834 12.3166 20.6834 11.6834 20.2929 11.2929L16 7",
				strokeLinejoin: "round"
			})
		});
	})))();
}
//#endregion
export { init_code as n, code_default as t };
