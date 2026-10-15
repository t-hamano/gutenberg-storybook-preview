import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { m as init_composite_store, p as createCompositeStore } from "./composite-item-BEBg8wzM.js";
import { A as defaultValue, a as init_dist$1, i as forwardRef, n as createHook, nt as init_dist, t as createElement, w as useWrapElement } from "./dist-DgYpwR44.js";
import { a as useStore, i as init_dist$2, s as useStoreState } from "./CDh2UhnG-rjC-Q4Bk.js";
import { i as useCompositeStoreProps, o as init_composite, s as useComposite, t as init_composite_store$1 } from "./composite-store-DmnJIW0O.js";
import { a as useToolbarProviderContext, i as init_toolbar_context, r as ToolbarScopedContextProvider } from "./toolbar-item-BOrkHcpg.js";
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/toolbar/toolbar-store.js
/**
* Creates a toolbar store.
*/
function createToolbarStore(props = {}) {
	const syncState = props.store?.getState();
	return createCompositeStore({
		...props,
		orientation: defaultValue(props.orientation, syncState?.orientation, "horizontal"),
		focusLoop: defaultValue(props.focusLoop, syncState?.focusLoop, true)
	});
}
function init_toolbar_store() {
	return (init_toolbar_store = __esmMin((() => {
		init_composite_store();
		init_dist();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/toolbar/toolbar-store.js
function useToolbarStoreProps(store, update, props) {
	return useCompositeStoreProps(store, update, props);
}
/**
* Creates a toolbar store to control the state of
* [Toolbar](https://ariakit.com/components/toolbar) components.
* @see https://ariakit.com/components/toolbar
* @example
* ```jsx
* const toolbar = useToolbarStore();
*
* <Toolbar store={toolbar}>
*   <ToolbarItem>Item 1</ToolbarItem>
*   <ToolbarItem>Item 2</ToolbarItem>
*   <ToolbarItem>Item 3</ToolbarItem>
* </Toolbar>
* ```
*/
function useToolbarStore(props = {}) {
	const [store, update] = useStore(createToolbarStore, props);
	return useToolbarStoreProps(store, update, props);
}
function init_toolbar_store$1() {
	return (init_toolbar_store$1 = __esmMin((() => {
		init_composite_store$1();
		init_dist$2();
		init_toolbar_store();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/toolbar/toolbar.js
var import_jsx_runtime, TagName, useToolbar, Toolbar;
function init_toolbar() {
	return (init_toolbar = __esmMin((() => {
		init_composite();
		init_toolbar_context();
		init_toolbar_store$1();
		init_dist$1();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$2();
		TagName = "div";
		useToolbar = createHook(function useToolbar({ store: storeProp, orientation: orientationProp, virtualFocus, focusLoop, rtl, ...props }) {
			const context = useToolbarProviderContext();
			storeProp = storeProp || context;
			const store = useToolbarStore({
				store: storeProp,
				orientation: orientationProp,
				virtualFocus,
				focusLoop,
				rtl
			});
			const orientation = useStoreState(store, ["orientation"], (state) => state.orientation === "both" ? void 0 : state.orientation);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			props = {
				role: "toolbar",
				"aria-orientation": orientation,
				...props
			};
			props = useComposite({
				store,
				...props
			});
			return props;
		});
		Toolbar = forwardRef(function Toolbar(props) {
			const htmlProps = useToolbar(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
export { useToolbarStore as i, init_toolbar as n, init_toolbar_store$1 as r, Toolbar as t };
