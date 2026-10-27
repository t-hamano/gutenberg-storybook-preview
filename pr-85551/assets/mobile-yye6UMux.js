import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/mobile.mjs
var import_jsx_runtime, mobile_default;
function init_mobile() {
	return (init_mobile = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		mobile_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M11 16.5H13M16.25 18V6C16.25 5.30964 15.6904 4.75 15 4.75H9C8.30964 4.75 7.75 5.30964 7.75 6L7.75 18C7.75 18.6904 8.30964 19.25 9 19.25H15C15.6904 19.25 16.25 18.6904 16.25 18Z" })
		});
	})))();
}
//#endregion
export { mobile_default as n, init_mobile as t };
