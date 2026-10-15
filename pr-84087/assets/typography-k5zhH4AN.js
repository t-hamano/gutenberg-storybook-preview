import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CO2tRbm-.js";
//#region ../packages/icons/build-module/library/background.mjs
var import_jsx_runtime$1, background_default;
function init_background() {
	return (init_background = __esmMin((() => {
		init_svg();
		import_jsx_runtime$1 = require_jsx_runtime();
		background_default = /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Path, {
				d: "M18 16L8 6M19 13L11 5M18 8L16 6M16 18L6 8M13 19L5 11M8 18L6 16",
				strokeLinecap: "round"
			})
		});
	})))();
}
//#endregion
//#region ../packages/icons/build-module/library/typography.mjs
var import_jsx_runtime, typography_default;
function init_typography() {
	return (init_typography = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		typography_default = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M4.5 17.5V17.2027L5.62821 13.9324M5.62821 13.9324L8.19231 6.5H8.80769L11.3718 13.9324L12.5 17.2027V17.5M11.3718 13.9324H5.62821" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M19.5 13.8097V11.0001M19.5 13.8097C19.5 15.4844 18.1304 16.9603 16.5576 16.9603C14.9848 16.9603 14.5586 15.9414 14.4922 15.4844C14.4258 15.0273 14.4545 14.2521 15.1207 13.6609C15.7868 13.0696 16.6425 12.9616 17.4007 12.8201C18.1589 12.6786 19.5 12.2501 19.5 11.0001M19.5 13.8097V17.5M19.5 11.0001C19.5 9.75009 18.4545 9.25 17.3189 9.25C15.3174 9.25 14.5 11.0001 14.5 11.0001" })]
		});
	})))();
}
//#endregion
export { init_background as i, typography_default as n, background_default as r, init_typography as t };
