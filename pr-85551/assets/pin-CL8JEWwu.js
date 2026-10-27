import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/pin.mjs
var import_jsx_runtime, pin_default;
function init_pin() {
	return (init_pin = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		pin_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M5 19L10 14M13.5355 17.5355L6.46447 10.4645C7.731 9.19794 9.50794 8.75292 11.1332 9.12941L14.5 4.50002L19.5 9.50002L14.8706 12.8669C15.2471 14.4921 14.8021 16.269 13.5355 17.5355Z" })
		});
	})))();
}
//#endregion
export { pin_default as n, init_pin as t };
