import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as SVG, o as init_svg } from "./svg-BLFZKYXr.js";
//#region ../packages/ui/build-module/icon/icon.mjs
var import_jsx_runtime, Icon;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_react();
		init_svg();
		import_jsx_runtime = require_jsx_runtime();
		Icon = (0, import_react.forwardRef)(function UnforwardedIcon({ icon, size = 24, style, ...restProps }, ref) {
			const mergedStyle = icon.props.style || style ? {
				...icon.props.style,
				...style
			} : void 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, {
				ref,
				...icon.props,
				...restProps,
				...mergedStyle ? { style: mergedStyle } : {},
				width: size,
				height: size
			});
		});
	})))();
}
//#endregion
export { init_icon as n, Icon as t };
