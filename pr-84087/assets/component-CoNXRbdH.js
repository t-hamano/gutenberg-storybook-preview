import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BrNgZl6E.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
import { i as useFlexItem, r as init_hook$1 } from "./component-CU_5aj14.js";
//#region ../packages/components/build-module/flex/flex-block/hook.mjs
function useFlexBlock(props) {
	const otherProps = useContextSystem(props, "FlexBlock");
	return useFlexItem({
		isBlock: true,
		...otherProps
	});
}
function init_hook() {
	return (init_hook = __esmMin((() => {
		init_use_context_system();
		init_hook$1();
	})))();
}
//#endregion
//#region ../packages/components/build-module/flex/flex-block/component.mjs
function UnconnectedFlexBlock(props, forwardedRef) {
	const flexBlockProps = useFlexBlock(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...flexBlockProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime, FlexBlock, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_context_connect();
		init_component$1();
		init_hook();
		import_jsx_runtime = require_jsx_runtime();
		FlexBlock = contextConnect(UnconnectedFlexBlock, "FlexBlock");
		component_default = FlexBlock;
	})))();
}
//#endregion
export { init_component as n, component_default as t };
