import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CAUvOTR7.js";
//#region ../packages/icons/build-module/library/upload.mjs
var import_jsx_runtime, upload_default;
function init_upload() {
	return (init_upload = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		upload_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M4.75 15V19.25H12M12 19.25V4.5M12 19.25H19.25V15M17.5 10L12 4.5L6.5 10" })
		});
	})))();
}
//#endregion
export { upload_default as n, init_upload as t };
