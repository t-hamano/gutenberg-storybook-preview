import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
//#region ../packages/components/build-module/visually-hidden/styles.mjs
var visuallyHidden;
function init_styles() {
	return (init_styles = __esmMin((() => {
		visuallyHidden = {
			border: 0,
			clip: "rect(1px, 1px, 1px, 1px)",
			WebkitClipPath: "inset( 50% )",
			clipPath: "inset( 50% )",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			wordWrap: "normal",
			wordBreak: "normal"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/visually-hidden/component.mjs
function UnconnectedVisuallyHidden(props, forwardedRef) {
	const { style: styleProp, ...contextProps } = useContextSystem(props, "VisuallyHidden");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		ref: forwardedRef,
		...contextProps,
		"data-visually-hidden": "",
		style: {
			...visuallyHidden,
			...styleProp || {}
		}
	});
}
var import_jsx_runtime, VisuallyHidden, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_use_context_system(), init_context_connect();
		init_styles();
		init_component$1();
		import_jsx_runtime = require_jsx_runtime();
		VisuallyHidden = contextConnect(UnconnectedVisuallyHidden, "VisuallyHidden");
		component_default = VisuallyHidden;
	})))();
}
//#endregion
export { init_component as n, component_default as t };
