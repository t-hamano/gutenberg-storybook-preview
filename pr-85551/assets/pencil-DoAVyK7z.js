import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/pencil.mjs
var import_jsx_runtime, pencil_default;
function init_pencil() {
	return (init_pencil = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		pencil_default = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M5 19.25H12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
				d: "M10 15L7.5 15.5L8 13L16 5L18 7L10 15Z",
				fill: "currentColor"
			})]
		});
	})))();
}
//#endregion
export { pencil_default as n, init_pencil as t };
