import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useText, r as getHeadingFontSize, t as init_hook$1 } from "./hook-8Ggu2zt9.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-4MMWHyS1.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
//#region ../packages/components/build-module/heading/hook.mjs
function useHeading(props) {
	const { as: asProp, level = 2, color, isBlock = true, weight = "var(--wpds-typography-font-weight-emphasis, 600)", ...otherProps } = useContextSystem(props, "Heading");
	const as = asProp || `h${level}`;
	const a11yProps = {};
	if (typeof as === "string" && as[0] !== "h") {
		a11yProps.role = "heading";
		a11yProps["aria-level"] = typeof level === "string" ? parseInt(level) : level;
	}
	return {
		...useText({
			color,
			isBlock,
			weight,
			size: getHeadingFontSize(level),
			...otherProps
		}),
		...a11yProps,
		as
	};
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_use_context_system();
		init_hook$1();
	})))();
}
//#endregion
//#region ../packages/components/build-module/heading/component.mjs
function UnconnectedHeading(props, forwardedRef) {
	const headerProps = useHeading(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...headerProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime, Heading, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_runtime = require_jsx_runtime();
		Heading = contextConnect(UnconnectedHeading, "Heading");
		component_default = Heading;
	})))();
}
//#endregion
export { init_component as n, component_default as t };
