import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { _ as CompositeContextProvider, b as init_composite_context, y as CompositeScopedContextProvider } from "./composite-item-BEBg8wzM.js";
import { a as init_dist, r as createStoreContext } from "./dist-DgYpwR44.js";
import { _ as PopoverScopedContextProvider, g as PopoverContextProvider, v as init_popover_context } from "./popover-store-DxNhIkVj.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/select/select-context.js
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
