import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_dropdown_menu, t as dropdown_menu_default } from "./dropdown-menu-C4z0vD1V.js";
import { i as toolbar_context_default, n as toolbar_item_default, r as init_toolbar_context, t as init_toolbar_item } from "./toolbar-item-DLdKqvzK.js";
//#region ../packages/components/build-module/toolbar/toolbar-dropdown-menu/index.mjs
function UnforwardedToolbarDropdownMenu(props, ref) {
	if (!(0, import_react.useContext)(toolbar_context_default)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_menu_default, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toolbar_item_default, {
		ref,
		...props.toggleProps,
		children: (toolbarItemProps) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_menu_default, {
			...props,
			popoverProps: { ...props.popoverProps },
			toggleProps: toolbarItemProps
		})
	});
}
var import_jsx_runtime, ToolbarDropdownMenu, toolbar_dropdown_menu_default;
function init_toolbar_dropdown_menu() {
	return (init_toolbar_dropdown_menu = __esmMin((() => {
		init_react();
		init_toolbar_item();
		init_toolbar_context();
		init_dropdown_menu();
		import_jsx_runtime = require_jsx_runtime();
		ToolbarDropdownMenu = (0, import_react.forwardRef)(UnforwardedToolbarDropdownMenu);
		ToolbarDropdownMenu.displayName = "ToolbarDropdownMenu";
		toolbar_dropdown_menu_default = ToolbarDropdownMenu;
	})))();
}
//#endregion
export { toolbar_dropdown_menu_default as n, init_toolbar_dropdown_menu as t };
