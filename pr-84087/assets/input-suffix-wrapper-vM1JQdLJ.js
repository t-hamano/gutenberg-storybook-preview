import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-BrNgZl6E.js";
import { a as PrefixSuffixWrapper, s as init_input_control_styles } from "./input-base-BjEBS6-t.js";
//#region ../packages/components/build-module/input-control/input-suffix-wrapper.mjs
function UnconnectedInputControlSuffixWrapper(props, forwardedRef) {
	const derivedProps = useContextSystem(props, "InputControlSuffixWrapper");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefixSuffixWrapper, {
		...derivedProps,
		ref: forwardedRef
	});
}
var import_jsx_runtime, InputControlSuffixWrapper, input_suffix_wrapper_default;
function init_input_suffix_wrapper() {
	return (init_input_suffix_wrapper = __esmMin((() => {
		init_context_connect(), init_use_context_system();
		init_input_control_styles();
		import_jsx_runtime = require_jsx_runtime();
		InputControlSuffixWrapper = contextConnect(UnconnectedInputControlSuffixWrapper, "InputControlSuffixWrapper");
		input_suffix_wrapper_default = InputControlSuffixWrapper;
	})))();
}
//#endregion
export { init_input_suffix_wrapper as n, input_suffix_wrapper_default as r, InputControlSuffixWrapper as t };
