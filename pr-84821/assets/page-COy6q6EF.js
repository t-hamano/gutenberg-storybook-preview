import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CAUvOTR7.js";
//#region ../packages/icons/build-module/library/page.mjs
var import_jsx_runtime, page_default;
function init_page() {
	return (init_page = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		page_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M8.5 8.25H15.5M8.5 11.75H15.5M8.5 15.25H15.5M18.25 18V6C18.25 5.30964 17.6904 4.75 17 4.75H7C6.30964 4.75 5.75 5.30964 5.75 6L5.75 18C5.75 18.6904 6.30964 19.25 7 19.25H17C17.6904 19.25 18.25 18.6904 18.25 18Z" })
		});
	})))();
}
//#endregion
export { page_default as n, init_page as t };
