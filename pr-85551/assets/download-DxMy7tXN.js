import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/download.mjs
var import_jsx_runtime, download_default;
function init_download() {
	return (init_download = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		download_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M12 3V16M6 10.5L12 16L17.5 10.5M4.75 15V19.25H19.25V15" })
		});
	})))();
}
//#endregion
export { init_download as n, download_default as t };
