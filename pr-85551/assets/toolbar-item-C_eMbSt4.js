import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as warning, t as init_build_module } from "./build-module-B5spW8IS.js";
import { n as init_toolbar_item$1, t as ToolbarItem } from "./toolbar-item-BmjrzcxR.js";
//#region ../packages/components/build-module/toolbar/toolbar-context/index.mjs
var ToolbarContext, toolbar_context_default;
function init_toolbar_context() {
	return (init_toolbar_context = __esmMin((() => {
		init_react();
		ToolbarContext = (0, import_react.createContext)(void 0);
		ToolbarContext.displayName = "ToolbarContext";
		toolbar_context_default = ToolbarContext;
	})))();
}
//#endregion
//#region ../packages/components/build-module/toolbar/toolbar-item/index.mjs
function UnforwardedToolbarItem({ children, as: Component, ...props }, ref) {
	const accessibleToolbarStore = (0, import_react.useContext)(toolbar_context_default);
	const isRenderProp = typeof children === "function";
	if (!isRenderProp && !Component) {
		warning("`ToolbarItem` is a generic headless component. You must pass either a `children` prop as a function or an `as` prop as a component. See https://developer.wordpress.org/block-editor/components/toolbar-item/");
		return null;
	}
	const allProps = {
		...props,
		ref,
		"data-toolbar-item": true
	};
	if (!accessibleToolbarStore) {
		if (Component) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...allProps,
			children
		});
		if (!isRenderProp) return null;
		return children(allProps);
	}
	const render = isRenderProp ? children : Component && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarItem, {
		accessibleWhenDisabled: true,
		...allProps,
		store: accessibleToolbarStore,
		render
	});
}
var import_jsx_runtime, ToolbarItem2, toolbar_item_default;
function init_toolbar_item() {
	return (init_toolbar_item = __esmMin((() => {
		init_toolbar_item$1();
		init_react();
		init_build_module();
		init_toolbar_context();
		import_jsx_runtime = require_jsx_runtime();
		ToolbarItem2 = (0, import_react.forwardRef)(UnforwardedToolbarItem);
		ToolbarItem2.displayName = "ToolbarItem";
		toolbar_item_default = ToolbarItem2;
	})))();
}
//#endregion
export { toolbar_context_default as i, toolbar_item_default as n, init_toolbar_context as r, init_toolbar_item as t };
