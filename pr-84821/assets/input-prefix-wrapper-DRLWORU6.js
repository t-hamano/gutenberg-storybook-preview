import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { i as PrefixSuffixWrapper, o as init_input_control_styles } from "./input-base-BibkJaYJ.js";
//#region ../packages/components/build-module/input-control/input-prefix-wrapper.mjs
function UnconnectedInputControlPrefixWrapper(props, forwardedRef) {
	const derivedProps = useContextSystem(props, "InputControlPrefixWrapper");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefixSuffixWrapper, {
		...derivedProps,
		isPrefix: true,
		ref: forwardedRef
	});
}
var import_jsx_runtime, InputControlPrefixWrapper, input_prefix_wrapper_default;
function init_input_prefix_wrapper() {
	return (init_input_prefix_wrapper = __esmMin((() => {
		init_context_connect(), init_use_context_system();
		init_input_control_styles();
		import_jsx_runtime = require_jsx_runtime();
		InputControlPrefixWrapper = contextConnect(UnconnectedInputControlPrefixWrapper, "InputControlPrefixWrapper");
		input_prefix_wrapper_default = InputControlPrefixWrapper;
	})))();
}
//#endregion
export { init_input_prefix_wrapper as n, input_prefix_wrapper_default as r, InputControlPrefixWrapper as t };
