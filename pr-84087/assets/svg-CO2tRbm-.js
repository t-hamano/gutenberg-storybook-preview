import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
//#region ../packages/primitives/build-module/svg/index.mjs
var import_jsx_runtime, Circle, G, Path, Rect, SVG;
function init_svg() {
	return (init_svg = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime = require_jsx_runtime();
		Circle = (props) => (0, import_react.createElement)("circle", props);
		G = (props) => (0, import_react.createElement)("g", props);
		Path = (props) => (0, import_react.createElement)("path", props);
		Rect = (props) => (0, import_react.createElement)("rect", props);
		SVG = (0, import_react.forwardRef)(
			/**
			* @param {SVGProps}                          props isPressed indicates whether the SVG should appear as pressed.
			*                                                  Other props will be passed through to svg component.
			* @param {React.ForwardedRef<SVGSVGElement>} ref   The forwarded ref to the SVG element.
			*
			* @return {React.JSX.Element} Stop component
			*/
			({ className, isPressed, ...props }, ref) => {
				const appliedProps = {
					...props,
					className: clsx(className, { "is-pressed": isPressed }) || void 0,
					"aria-hidden": true,
					focusable: false
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					...appliedProps,
					ref
				});
			}
		);
		SVG.displayName = "SVG";
	})))();
}
//#endregion
export { SVG as a, Rect as i, G as n, init_svg as o, Path as r, Circle as t };
