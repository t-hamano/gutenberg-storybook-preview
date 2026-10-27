import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/fullscreen.mjs
var import_jsx_runtime, fullscreen_default;
function init_fullscreen() {
	return (init_fullscreen = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		fullscreen_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M4.75 10V4.75H10M4.75 4.75L10 10M14 19.25H19.25V14M19.25 19.25L14 14" })
		});
	})))();
}
//#endregion
export { init_fullscreen as n, fullscreen_default as t };
