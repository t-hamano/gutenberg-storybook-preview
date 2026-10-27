import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_dropdown_menu, t as dropdown_menu_default } from "./dropdown-menu-ztx4eNXW.js";
import { i as toolbar_context_default, n as toolbar_item_default, r as init_toolbar_context, t as init_toolbar_item } from "./toolbar-item-C_eMbSt4.js";
import { n as toolbar_button_default, t as init_toolbar_button } from "./toolbar-button-B6J2wRyv.js";
//#region ../packages/components/build-module/toolbar/toolbar-group/toolbar-group-container.mjs
var import_jsx_runtime$2, ToolbarGroupContainer, toolbar_group_container_default;
function init_toolbar_group_container() {
	return (init_toolbar_group_container = __esmMin((() => {
		import_jsx_runtime$2 = require_jsx_runtime();
		ToolbarGroupContainer = ({ className, children, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("div", {
			className,
			...props,
			children
		});
		toolbar_group_container_default = ToolbarGroupContainer;
	})))();
}
//#endregion
//#region ../packages/components/build-module/toolbar/toolbar-group/toolbar-group-collapsed.mjs
function ToolbarGroupCollapsed({ controls = [], toggleProps, ...props }) {
	const accessibleToolbarState = (0, import_react.useContext)(toolbar_context_default);
	const renderDropdownMenu = (internalToggleProps) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(dropdown_menu_default, {
		controls,
		toggleProps: {
			...internalToggleProps,
			"data-toolbar-item": true
		},
		...props
	});
	if (accessibleToolbarState) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(toolbar_item_default, {
		...toggleProps,
		children: renderDropdownMenu
	});
	return renderDropdownMenu(toggleProps);
}
var import_jsx_runtime$1, toolbar_group_collapsed_default;
function init_toolbar_group_collapsed() {
	return (init_toolbar_group_collapsed = __esmMin((() => {
		init_react();
		init_dropdown_menu();
		init_toolbar_context();
		init_toolbar_item();
		import_jsx_runtime$1 = require_jsx_runtime();
		toolbar_group_collapsed_default = ToolbarGroupCollapsed;
	})))();
}
//#endregion
//#region ../packages/components/build-module/toolbar/toolbar-group/index.mjs
function isNestedArray(arr) {
	return Array.isArray(arr) && Array.isArray(arr[0]);
}
function ToolbarGroup({ controls = [], children, className, isCollapsed, title, ...props }) {
	const accessibleToolbarState = (0, import_react.useContext)(toolbar_context_default);
	if ((!controls || !controls.length) && !children) return null;
	const finalClassName = clsx(accessibleToolbarState ? "components-toolbar-group" : "components-toolbar", className);
	let controlSets;
	if (isNestedArray(controls)) controlSets = controls;
	else controlSets = [controls];
	if (isCollapsed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toolbar_group_collapsed_default, {
		label: title,
		controls: controlSets,
		className: finalClassName,
		children,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(toolbar_group_container_default, {
		className: finalClassName,
		...props,
		children: [controlSets?.flatMap((controlSet, indexOfSet) => controlSet.map((control, indexOfControl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toolbar_button_default, {
			containerClassName: indexOfSet > 0 && indexOfControl === 0 ? "has-left-divider" : void 0,
			...control
		}, [indexOfSet, indexOfControl].join()))), children]
	});
}
var import_jsx_runtime, toolbar_group_default;
function init_toolbar_group() {
	return (init_toolbar_group = __esmMin((() => {
		init_clsx();
		init_react();
		init_toolbar_button();
		init_toolbar_group_container();
		init_toolbar_group_collapsed();
		init_toolbar_context();
		import_jsx_runtime = require_jsx_runtime();
		toolbar_group_default = ToolbarGroup;
	})))();
}
//#endregion
export { toolbar_group_default as n, init_toolbar_group as t };
