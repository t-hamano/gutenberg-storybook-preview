import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { O as withDefaultButtonType, _ as CompositeContextProvider, b as init_composite_context, n as init_composite_item, r as useCompositeItem, y as CompositeScopedContextProvider } from "./composite-item-JNO_FG0t.js";
import { a as init_dist, i as forwardRef, n as createHook, o as memo, r as createStoreContext, t as createElement } from "./dist-BNTCqa48.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/toolbar/toolbar-context.js
var ctx, useToolbarContext, useToolbarProviderContext, ToolbarScopedContextProvider;
function init_toolbar_context() {
	return (init_toolbar_context = __esmMin((() => {
		init_composite_context();
		init_dist();
		ctx = createStoreContext([CompositeContextProvider], [CompositeScopedContextProvider]);
		useToolbarContext = ctx.useContext;
		ctx.useScopedContext;
		useToolbarProviderContext = ctx.useProviderContext;
		ctx.ContextProvider;
		ToolbarScopedContextProvider = ctx.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/toolbar/toolbar-item.js
var TagName, useToolbarItem, ToolbarItem;
function init_toolbar_item() {
	return (init_toolbar_item = __esmMin((() => {
		init_composite_item();
		init_toolbar_context();
		init_dist();
		TagName = "button";
		useToolbarItem = createHook(function useToolbarItem({ store, ...props }) {
			const context = useToolbarContext();
			store = store || context;
			props = useCompositeItem({
				store,
				...props
			});
			return props;
		});
		ToolbarItem = memo(forwardRef(function ToolbarItem(props) {
			const htmlProps = useToolbarItem(withDefaultButtonType(props));
			return createElement(TagName, htmlProps);
		}));
	})))();
}
//#endregion
export { useToolbarProviderContext as a, init_toolbar_context as i, init_toolbar_item as n, ToolbarScopedContextProvider as r, ToolbarItem as t };
