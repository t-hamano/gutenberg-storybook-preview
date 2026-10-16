import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as __, o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
//#region ../packages/components/build-module/external-link/index.mjs
function UnforwardedExternalLink(props, ref) {
	const { href, children, className, ...additionalProps } = props;
	const classes = clsx("components-external-link", className);
	const isInternalAnchor = !!href?.startsWith("#");
	const onClickHandler = (event) => {
		if (isInternalAnchor) event.preventDefault();
		if (props.onClick) props.onClick(event);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		...additionalProps,
		className: classes,
		href,
		onClick: onClickHandler,
		target: "_blank",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "components-external-link__contents",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: clsx("components-external-link__icon", "wp-exclude-emoji"),
			"aria-label": __("(opens in a new tab)"),
			children: isRTL() ? "↖" : "↗"
		})]
	});
}
var import_jsx_runtime, ExternalLink, external_link_default;
function init_external_link() {
	return (init_external_link = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		import_jsx_runtime = require_jsx_runtime();
		ExternalLink = (0, import_react.forwardRef)(UnforwardedExternalLink);
		ExternalLink.displayName = "ExternalLink";
		external_link_default = ExternalLink;
	})))();
}
//#endregion
export { init_external_link as n, external_link_default as t };
