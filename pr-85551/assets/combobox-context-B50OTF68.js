import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { _ as CompositeContextProvider, b as init_composite_context, y as CompositeScopedContextProvider } from "./composite-item-JNO_FG0t.js";
import { a as init_dist, r as createStoreContext } from "./dist-BNTCqa48.js";
import { b as init_popover_context, v as PopoverContextProvider, y as PopoverScopedContextProvider } from "./popover-store-D4s7hWFV.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/combobox/combobox-context.js
var import_react, ComboboxListRoleContext, ctx, useComboboxContext, useComboboxScopedContext, useComboboxProviderContext, ComboboxContextProvider, ComboboxScopedContextProvider, ComboboxItemValueContext, ComboboxItemCheckedContext, ComboboxHeadingContext;
function init_combobox_context() {
	return (init_combobox_context = __esmMin((() => {
		init_popover_context();
		init_composite_context();
		init_dist();
		import_react = require_react();
		ComboboxListRoleContext = (0, import_react.createContext)(null);
		ctx = createStoreContext([PopoverContextProvider, CompositeContextProvider], [PopoverScopedContextProvider, CompositeScopedContextProvider]);
		useComboboxContext = ctx.useContext;
		useComboboxScopedContext = ctx.useScopedContext;
		useComboboxProviderContext = ctx.useProviderContext;
		ComboboxContextProvider = ctx.ContextProvider;
		ComboboxScopedContextProvider = ctx.ScopedContextProvider;
		ComboboxItemValueContext = (0, import_react.createContext)(void 0);
		ComboboxItemCheckedContext = (0, import_react.createContext)(false);
		ComboboxHeadingContext = (0, import_react.createContext)(null);
	})))();
}
//#endregion
export { ComboboxListRoleContext as a, useComboboxContext as c, ComboboxItemValueContext as i, useComboboxProviderContext as l, ComboboxHeadingContext as n, ComboboxScopedContextProvider as o, ComboboxItemCheckedContext as r, init_combobox_context as s, ComboboxContextProvider as t, useComboboxScopedContext as u };
