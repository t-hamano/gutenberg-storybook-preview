import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { i as toolbar_context_default, n as toolbar_item_default, r as init_toolbar_context, t as init_toolbar_item } from "./toolbar-item-CgttCdI8.js";
//#region ../packages/components/build-module/toolbar/toolbar-button/toolbar-button-container.mjs
var import_jsx_runtime$1, ToolbarButtonContainer, toolbar_button_container_default;
function init_toolbar_button_container() {
	return (init_toolbar_button_container = __esmMin((() => {
		import_jsx_runtime$1 = require_jsx_runtime();
		ToolbarButtonContainer = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
			className,
			children
		});
		toolbar_button_container_default = ToolbarButtonContainer;
	})))();
}
//#endregion
//#region ../packages/components/build-module/toolbar/toolbar-button/index.mjs
function useDeprecatedProps({ isDisabled, ...otherProps }) {
	return {
		disabled: isDisabled,
		...otherProps
	};
}
function UnforwardedToolbarButton(props, ref) {
	const { children, className, containerClassName, extraProps, isActive, title, ...restProps } = useDeprecatedProps(props);
	if (!(0, import_react.useContext)(toolbar_context_default)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toolbar_button_container_default, {
		className: containerClassName,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
			ref,
			icon: restProps.icon,
			size: "compact",
			label: title,
			shortcut: restProps.shortcut,
			"data-subscript": restProps.subscript,
			onClick: (event) => {
				event.stopPropagation();
				if (restProps.onClick) restProps.onClick(event);
			},
			className: clsx("components-toolbar__control", className),
			isPressed: isActive,
			accessibleWhenDisabled: true,
			"data-toolbar-item": true,
			...extraProps,
			...restProps,
			children
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toolbar_item_default, {
		className: clsx("components-toolbar-button", className),
		...extraProps,
		...restProps,
		ref,
		children: (toolbarItemProps) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
			size: "compact",
			label: title,
			isPressed: isActive,
			...toolbarItemProps,
			children
		})
	});
}
var import_jsx_runtime, ToolbarButton, toolbar_button_default;
function init_toolbar_button() {
	return (init_toolbar_button = __esmMin((() => {
		init_clsx();
		init_react();
		init_button();
		init_toolbar_item();
		init_toolbar_context();
		init_toolbar_button_container();
		import_jsx_runtime = require_jsx_runtime();
		ToolbarButton = (0, import_react.forwardRef)(UnforwardedToolbarButton);
		ToolbarButton.displayName = "ToolbarButton";
		toolbar_button_default = ToolbarButton;
	})))();
}
//#endregion
export { toolbar_button_default as n, init_toolbar_button as t };
