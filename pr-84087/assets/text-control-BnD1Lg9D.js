import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as base_control_default, r as init_base_control } from "./base-control-BlNgg-sa.js";
//#region ../packages/components/build-module/text-control/index.mjs
function UnforwardedTextControl(props, ref) {
	const { __nextHasNoMarginBottom: _, __next40pxDefaultSize: __, label, hideLabelFromVision, value, help, id: idProp, className, onChange, type = "text", ...additionalProps } = props;
	const id = use_instance_id_default(TextControl, "inspector-text-control", idProp);
	const onChangeValue = (event) => onChange(event.target.value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(base_control_default, {
		label,
		hideLabelFromVision,
		id,
		help,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "components-text-control__input",
			type,
			id,
			value,
			onChange: onChangeValue,
			"aria-describedby": !!help ? id + "__help" : void 0,
			ref,
			...additionalProps
		})
	});
}
var import_jsx_runtime, TextControl, text_control_default;
function init_text_control() {
	return (init_text_control = __esmMin((() => {
		init_use_instance_id();
		init_react();
		init_base_control();
		import_jsx_runtime = require_jsx_runtime();
		TextControl = (0, import_react.forwardRef)(UnforwardedTextControl);
		TextControl.displayName = "TextControl";
		text_control_default = TextControl;
	})))();
}
//#endregion
export { text_control_default as n, init_text_control as t };
