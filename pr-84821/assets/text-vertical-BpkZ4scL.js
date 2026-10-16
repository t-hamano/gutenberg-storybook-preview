import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CAUvOTR7.js";
//#region ../packages/icons/build-module/library/text-horizontal.mjs
var import_jsx_runtime$1, text_horizontal_default;
function init_text_horizontal() {
	return (init_text_horizontal = __esmMin((() => {
		init_svg();
		import_jsx_runtime$1 = require_jsx_runtime();
		text_horizontal_default = /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Path, { d: "M5.5 19.5H18.5L17.0566 17M13.4527 17.5V17.223L12.4369 14.1757L10.1284 7.25H9.57432L7.26577 14.1757L6.25 17.223V17.5M12.4369 14.1757H7.26577" })
		});
	})))();
}
//#endregion
//#region ../packages/icons/build-module/library/text-vertical.mjs
var import_jsx_runtime, text_vertical_default;
function init_text_vertical() {
	return (init_text_vertical = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		text_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M4.5 5.5L4.5 18.5L7 17.0566M6.5 13.4527L6.77703 13.4527L9.82432 12.4369L16.75 10.1284L16.75 9.57432L9.82432 7.26577L6.77703 6.25L6.5 6.25M9.82432 12.4369L9.82432 7.26577" })
		});
	})))();
}
//#endregion
export { text_horizontal_default as i, text_vertical_default as n, init_text_horizontal as r, init_text_vertical as t };
