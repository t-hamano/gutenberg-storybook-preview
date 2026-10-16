import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_component, t as component_default } from "./component-DQdvPzmr.js";
import { n as base_control_default, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as init_component$1, t as component_default$1 } from "./component-ThRvbQN8.js";
//#region ../packages/components/build-module/form-toggle/index.mjs
function UnforwardedFormToggle(props, ref) {
	const { className, checked, id, disabled, onChange = noop, onClick, ...additionalProps } = props;
	const wrapperClasses = clsx("components-form-toggle", className, {
		"is-checked": checked,
		"is-disabled": disabled
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("span", {
		className: wrapperClasses,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
				className: "components-form-toggle__input",
				id,
				type: "checkbox",
				checked,
				onChange,
				disabled,
				onClick: (event) => {
					event.currentTarget.focus();
					onClick?.(event);
				},
				...additionalProps,
				ref
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", { className: "components-form-toggle__track" }),
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", { className: "components-form-toggle__thumb" })
		]
	});
}
var import_jsx_runtime$1, noop, FormToggle, form_toggle_default;
function init_form_toggle() {
	return (init_form_toggle = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime$1 = require_jsx_runtime();
		noop = () => {};
		FormToggle = (0, import_react.forwardRef)(UnforwardedFormToggle);
		FormToggle.displayName = "FormToggle";
		form_toggle_default = FormToggle;
	})))();
}
//#endregion
//#region ../packages/components/build-module/toggle-control/index.mjs
function UnforwardedToggleControl({ label, checked, help, className, onChange, disabled, __nextHasNoMarginBottom: _, ...additionalProps }, ref) {
	function onChangeToggle(event) {
		onChange(event.target.checked);
	}
	const id = `inspector-toggle-control-${use_instance_id_default(ToggleControl)}`;
	let describedBy, helpLabel;
	if (help) {
		if (typeof help === "function") {
			if (checked !== void 0) helpLabel = help(checked);
		} else helpLabel = help;
		if (helpLabel) describedBy = id + "__help";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(base_control_default, {
		id,
		help: helpLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "components-toggle-control__help",
			children: helpLabel
		}),
		className: clsx("components-toggle-control", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(component_default$1, {
			justify: "flex-start",
			spacing: 2,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_toggle_default, {
				id,
				checked,
				onChange: onChangeToggle,
				"aria-describedby": describedBy,
				disabled,
				ref,
				...additionalProps
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, {
				as: "label",
				htmlFor: id,
				className: clsx("components-toggle-control__label", { "is-disabled": disabled }),
				children: label
			})]
		})
	});
}
var import_jsx_runtime, ToggleControl, toggle_control_default;
function init_toggle_control() {
	return (init_toggle_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_instance_id();
		init_component();
		init_form_toggle();
		init_base_control();
		init_component$1();
		import_jsx_runtime = require_jsx_runtime();
		ToggleControl = (0, import_react.forwardRef)(UnforwardedToggleControl);
		ToggleControl.displayName = "ToggleControl";
		toggle_control_default = ToggleControl;
	})))();
}
//#endregion
export { toggle_control_default as n, init_toggle_control as t };
