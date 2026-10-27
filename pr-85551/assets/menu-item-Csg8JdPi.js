import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { d as shortcut_default, u as init_shortcut } from "./component-Cvxw1Y5Q.js";
import { n as init_icon, t as icon_default } from "./icon-B-T-5iD5.js";
import { n as button_default, r as init_button } from "./button-BxmZjN4X.js";
//#region ../packages/components/build-module/menu-group/index.mjs
function MenuGroup(props) {
	const { children, className = "", label, hideSeparator } = props;
	const instanceId = use_instance_id_default(MenuGroup);
	if (!import_react.Children.count(children)) return null;
	const labelId = `components-menu-group-label-${instanceId}`;
	const classNames = clsx(className, "components-menu-group", { "has-hidden-separator": hideSeparator });
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		className: classNames,
		children: [label && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
			className: "components-menu-group__label",
			id: labelId,
			"aria-hidden": "true",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
			role: "group",
			"aria-labelledby": label ? labelId : void 0,
			children
		})]
	});
}
var import_jsx_runtime$1, menu_group_default;
function init_menu_group() {
	return (init_menu_group = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_instance_id();
		import_jsx_runtime$1 = require_jsx_runtime();
		menu_group_default = MenuGroup;
	})))();
}
//#endregion
//#region ../packages/components/build-module/menu-item/index.mjs
function UnforwardedMenuItem(props, ref) {
	let { children, info, className, icon, iconPosition = "right", shortcut, isSelected, role = "menuitem", suffix, ...buttonProps } = props;
	className = clsx("components-menu-item__button", className);
	if (info) children = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "components-menu-item__info-wrapper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "components-menu-item__item",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "components-menu-item__info",
			children: info
		})]
	});
	if (icon && typeof icon !== "string") icon = (0, import_react.cloneElement)(icon, { className: clsx("components-menu-items__item-icon", { "has-icon-right": iconPosition === "right" }) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(button_default, {
		size: "compact",
		ref,
		"aria-checked": role === "menuitemcheckbox" || role === "menuitemradio" ? isSelected : void 0,
		role,
		icon: iconPosition === "left" ? icon : void 0,
		className,
		accessibleWhenDisabled: true,
		...buttonProps,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "components-menu-item__item",
				children
			}),
			!suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(shortcut_default, {
				className: "components-menu-item__shortcut",
				shortcut
			}),
			!suffix && icon && iconPosition === "right" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, { icon }),
			suffix
		]
	});
}
var import_jsx_runtime, MenuItem, menu_item_default;
function init_menu_item() {
	return (init_menu_item = __esmMin((() => {
		init_clsx();
		init_react();
		init_shortcut();
		init_button();
		init_icon();
		import_jsx_runtime = require_jsx_runtime();
		MenuItem = (0, import_react.forwardRef)(UnforwardedMenuItem);
		MenuItem.displayName = "MenuItem";
		menu_item_default = MenuItem;
	})))();
}
//#endregion
export { menu_group_default as i, menu_item_default as n, init_menu_group as r, init_menu_item as t };
