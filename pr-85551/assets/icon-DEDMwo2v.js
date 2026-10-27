import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/icons/build-module/icon/index.mjs
var icon_default;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_react();
		icon_default = (0, import_react.forwardRef)(({ icon, size = 24, style, ...props }, ref) => {
			const intrinsicStyle = icon.props.style;
			const mergedStyle = intrinsicStyle || style ? {
				...intrinsicStyle,
				...style
			} : void 0;
			return (0, import_react.cloneElement)(icon, {
				width: size,
				height: size,
				...props,
				...mergedStyle ? { style: mergedStyle } : {},
				ref
			});
		});
	})))();
}
//#endregion
export { init_icon as n, icon_default as t };
