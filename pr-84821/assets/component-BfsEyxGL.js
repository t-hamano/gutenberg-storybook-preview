import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_context, n as init_component$1, o as useToggleGroupControlContext, t as component_default$1 } from "./component-v_QVsmRa.js";
//#region ../packages/components/build-module/toggle-group-control/toggle-group-control-option/component.mjs
function UnforwardedToggleGroupControlOption(props, ref) {
	useToggleGroupControlContext("ToggleGroupControlOption");
	const { label, ...restProps } = props;
	const optionLabel = restProps["aria-label"] || label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...restProps,
		"aria-label": optionLabel,
		ref,
		children: label
	});
}
var import_jsx_runtime, ToggleGroupControlOption, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_react();
		init_component$1();
		init_context();
		import_jsx_runtime = require_jsx_runtime();
		ToggleGroupControlOption = (0, import_react.forwardRef)(UnforwardedToggleGroupControlOption);
		ToggleGroupControlOption.displayName = "ToggleGroupControlOption";
		component_default = ToggleGroupControlOption;
	})))();
}
//#endregion
export { init_component as n, component_default as t };
