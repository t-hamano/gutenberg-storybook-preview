import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { o as init_context_connect, r as contextConnect } from "./use-context-system-4MMWHyS1.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
import { a as FlexContext, c as useFlex, o as init_context, s as init_hook } from "./component-D1o10iDw.js";
//#region ../packages/components/build-module/flex/flex/component.mjs
function UnconnectedFlex(props, forwardedRef) {
	const { children, isColumn, ...otherProps } = useFlex(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlexContext.Provider, {
		value: { flexItemDisplay: isColumn ? "block" : void 0 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
			...otherProps,
			ref: forwardedRef,
			children
		})
	});
}
var import_jsx_runtime, Flex, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_hook();
		init_context();
		init_component$1();
		import_jsx_runtime = require_jsx_runtime();
		Flex = contextConnect(UnconnectedFlex, "Flex");
		component_default = Flex;
	})))();
}
//#endregion
export { init_component as n, component_default as t };
