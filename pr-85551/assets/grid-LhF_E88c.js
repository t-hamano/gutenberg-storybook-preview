import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-BLFZKYXr.js";
//#region ../packages/icons/build-module/library/grid.mjs
var import_jsx_runtime, grid_default;
function init_grid() {
	return (init_grid = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		grid_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M12 4.75H6C5.30964 4.75 4.75 5.30964 4.75 6V12M12 4.75H18C18.6904 4.75 19.25 5.30964 19.25 6V12M12 4.75V19.25M12 19.25H18C18.6904 19.25 19.25 18.6904 19.25 18V12M12 19.25H6C5.30964 19.25 4.75 18.6904 4.75 18V12M19.25 12H4.75" })
		});
	})))();
}
//#endregion
export { init_grid as n, grid_default as t };
