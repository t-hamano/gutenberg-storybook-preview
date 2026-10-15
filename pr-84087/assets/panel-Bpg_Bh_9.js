import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
//#region ../packages/components/build-module/panel/header.mjs
function PanelHeader({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		className: "components-panel__header",
		children: [label && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("h2", { children: label }), children]
	});
}
var import_jsx_runtime$1, header_default;
function init_header() {
	return (init_header = __esmMin((() => {
		import_jsx_runtime$1 = require_jsx_runtime();
		header_default = PanelHeader;
	})))();
}
//#endregion
//#region ../packages/components/build-module/panel/index.mjs
function UnforwardedPanel({ header, className, children }, ref) {
	const classNames = clsx(className, "components-panel");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames,
		ref,
		children: [header && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(header_default, { label: header }), children]
	});
}
var import_jsx_runtime, Panel, panel_default;
function init_panel() {
	return (init_panel = __esmMin((() => {
		init_clsx();
		init_react();
		init_header();
		import_jsx_runtime = require_jsx_runtime();
		Panel = (0, import_react.forwardRef)(UnforwardedPanel);
		Panel.displayName = "Panel";
		panel_default = Panel;
	})))();
}
//#endregion
export { panel_default as n, init_panel as t };
