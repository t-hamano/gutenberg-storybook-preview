import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { _ as CompositeContextProvider, b as init_composite_context, y as CompositeScopedContextProvider } from "./composite-item-JNO_FG0t.js";
import { a as init_dist, r as createStoreContext } from "./dist-BNTCqa48.js";
import { b as init_popover_context, v as PopoverContextProvider, y as PopoverScopedContextProvider } from "./popover-store-D4s7hWFV.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select-context.js
var import_react, ctx, useSelectContext, useSelectScopedContext, useSelectProviderContext, SelectScopedContextProvider, SelectItemCheckedContext, SelectHeadingContext;
function init_select_context() {
	return (init_select_context = __esmMin((() => {
		init_popover_context();
		init_composite_context();
		init_dist();
		import_react = require_react();
		ctx = createStoreContext([PopoverContextProvider, CompositeContextProvider], [PopoverScopedContextProvider, CompositeScopedContextProvider]);
		useSelectContext = ctx.useContext;
		useSelectScopedContext = ctx.useScopedContext;
		useSelectProviderContext = ctx.useProviderContext;
		ctx.ContextProvider;
		SelectScopedContextProvider = ctx.ScopedContextProvider;
		SelectItemCheckedContext = (0, import_react.createContext)(false);
		SelectHeadingContext = (0, import_react.createContext)(null);
	})))();
}
//#endregion
export { useSelectContext as a, init_select_context as i, SelectItemCheckedContext as n, useSelectProviderContext as o, SelectScopedContextProvider as r, useSelectScopedContext as s, SelectHeadingContext as t };
