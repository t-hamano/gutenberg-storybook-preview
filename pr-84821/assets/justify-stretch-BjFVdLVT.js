import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, i as Rect, o as init_svg, r as Path } from "./svg-CAUvOTR7.js";
//#region ../packages/icons/build-module/library/justify-stretch.mjs
var import_jsx_runtime, justify_stretch_default;
function init_justify_stretch() {
	return (init_justify_stretch = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		justify_stretch_default = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M4.75 4V20M19.25 20V4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rect, {
				x: "7",
				y: "10",
				width: "10",
				height: "4",
				fill: "currentColor",
				stroke: "none"
			})]
		});
	})))();
}
//#endregion
export { justify_stretch_default as n, init_justify_stretch as t };
