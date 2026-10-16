import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path, t as Circle } from "./svg-CAUvOTR7.js";
//#region ../packages/icons/build-module/library/seen.mjs
var import_jsx_runtime, seen_default;
function init_seen() {
	return (init_seen = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		seen_default = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M20.0645 13C18.5918 10.0366 15.5337 8 12 8C8.46631 8 5.40825 10.0366 3.93555 13" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
				cx: "12",
				cy: "12.5",
				r: "3",
				fill: "currentColor"
			})]
		});
	})))();
}
//#endregion
export { seen_default as n, init_seen as t };
