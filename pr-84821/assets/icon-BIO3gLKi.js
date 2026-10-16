import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as SVG, o as init_svg } from "./svg-CAUvOTR7.js";
//#region ../packages/components/build-module/dashicon/index.mjs
function Dashicon({ icon, className, size = 20, style = {}, ...extraProps }) {
	const iconClass = [
		"dashicon",
		"dashicons",
		"dashicons-" + icon,
		className
	].filter(Boolean).join(" ");
	const styles = {
		...20 != size ? {
			fontSize: `${size}px`,
			width: `${size}px`,
			height: `${size}px`
		} : {},
		...style
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
		className: iconClass,
		style: styles,
		...extraProps
	});
}
var import_jsx_runtime$1, dashicon_default;
function init_dashicon() {
	return (init_dashicon = __esmMin((() => {
		import_jsx_runtime$1 = require_jsx_runtime();
		dashicon_default = Dashicon;
	})))();
}
//#endregion
//#region ../packages/components/build-module/icon/index.mjs
function Icon({ icon = null, size = "string" === typeof icon ? 20 : 24, ...additionalProps }) {
	if ("string" === typeof icon) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dashicon_default, {
		icon,
		size,
		...additionalProps
	});
	if ((0, import_react.isValidElement)(icon) && dashicon_default === icon.type) return (0, import_react.cloneElement)(icon, { ...additionalProps });
	if ("function" === typeof icon) return (0, import_react.createElement)(icon, {
		size,
		...additionalProps
	});
	if ((0, import_react.isValidElement)(icon)) {
		const { style: consumerStyle, ...restProps } = additionalProps;
		const mergedStyle = icon.props.style || consumerStyle ? {
			...icon.props.style,
			...consumerStyle
		} : void 0;
		const styleProps = mergedStyle ? { style: mergedStyle } : {};
		if (icon.type === "svg" || icon.type === SVG) {
			const appliedProps = {
				...icon.props,
				width: size,
				height: size,
				...restProps,
				...styleProps
			};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SVG, { ...appliedProps });
		}
		return (0, import_react.cloneElement)(icon, {
			size,
			width: size,
			height: size,
			...restProps,
			...styleProps
		});
	}
	return icon;
}
var import_jsx_runtime, icon_default;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_react();
		init_svg();
		init_dashicon();
		import_jsx_runtime = require_jsx_runtime();
		icon_default = Icon;
	})))();
}
//#endregion
export { init_icon as n, icon_default as t };
