import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CO2tRbm-.js";
//#region ../packages/icons/build-module/library/styles.mjs
var import_jsx_runtime, styles_default;
function init_styles() {
	return (init_styles = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		styles_default = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
				d: "M12 4.75C7.99594 4.75 4.75 7.99593 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25L12 4.75Z",
				fill: "currentColor",
				stroke: "none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
				d: "M12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25Z",
				strokeLinejoin: "round"
			})]
		});
	})))();
}
//#endregion
export { styles_default as n, init_styles as t };
