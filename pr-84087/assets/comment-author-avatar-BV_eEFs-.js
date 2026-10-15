import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CO2tRbm-.js";
//#region ../packages/icons/build-module/library/comment-author-avatar.mjs
var import_jsx_runtime, comment_author_avatar_default;
function init_comment_author_avatar() {
	return (init_comment_author_avatar = __esmMin((() => {
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		comment_author_avatar_default = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: { fill: "none" },
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M8 18.0476V16C8 14.8954 8.89543 14 10 14H14C15.1046 14 16 14.8954 16 16V18.0476" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
					d: "M12 4.75C7.99594 4.75 4.75 7.99593 4.75 12C4.75 16.0041 7.99593 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75Z",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { d: "M13.75 10C13.75 10.9665 12.9665 11.75 12 11.75C11.0335 11.75 10.25 10.9665 10.25 10C10.25 9.0335 11.0335 8.25 12 8.25C12.9665 8.25 13.75 9.0335 13.75 10Z" })
			]
		});
	})))();
}
//#endregion
export { init_comment_author_avatar as n, comment_author_avatar_default as t };
