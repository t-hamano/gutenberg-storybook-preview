import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_icon, t as icon_default } from "./icon-B-T-5iD5.js";
import { a as init_context, n as init_component$1, o as useToggleGroupControlContext, t as component_default$1 } from "./component-CzTPIfcd.js";
//#region ../packages/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.mjs
function UnforwardedToggleGroupControlOptionIcon(props, ref) {
	useToggleGroupControlContext("ToggleGroupControlOptionIcon");
	const { icon, label, ...restProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		...restProps,
		isIcon: true,
		"aria-label": label,
		showTooltip: true,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, { icon })
	});
}
var import_jsx_runtime, ToggleGroupControlOptionIcon, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_react();
		init_component$1();
		init_context();
		init_icon();
		import_jsx_runtime = require_jsx_runtime();
		ToggleGroupControlOptionIcon = (0, import_react.forwardRef)(UnforwardedToggleGroupControlOptionIcon);
		ToggleGroupControlOptionIcon.displayName = "ToggleGroupControlOptionIcon";
		component_default = ToggleGroupControlOptionIcon;
	})))();
}
//#endregion
export { init_component as n, component_default as t };
