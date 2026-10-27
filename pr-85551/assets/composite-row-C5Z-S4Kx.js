import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { S as useCompositeScopedContext, b as init_composite_context, v as CompositeRowContext } from "./composite-item-JNO_FG0t.js";
import { a as init_dist, f as useId, i as forwardRef, n as createHook, nt as init_dist$1, rt as invariant, t as createElement, w as useWrapElement } from "./dist-BNTCqa48.js";
import { i as init_dist$2, s as useStoreState } from "./CDh2UhnG-BRjcGYWx.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/composite/composite-row.js
var import_react, import_jsx_runtime, TagName, useCompositeRow, CompositeRow;
function init_composite_row() {
	return (init_composite_row = __esmMin((() => {
		init_composite_context();
		init_dist();
		init_dist$1();
		import_react = require_react();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$2();
		TagName = "div";
		useCompositeRow = createHook(function useCompositeRow({ store, "aria-setsize": ariaSetSize, "aria-posinset": ariaPosInSet, ...props }) {
			const context = useCompositeScopedContext();
			store = store || context;
			invariant(store, "CompositeRow must be wrapped in a Composite component.");
			const id = useId(props.id);
			const compositeElement = useStoreState(store, "compositeElement") || void 0;
			const providerValue = (0, import_react.useMemo)(() => ({
				id,
				compositeElement,
				ariaSetSize,
				ariaPosInSet
			}), [
				id,
				compositeElement,
				ariaSetSize,
				ariaPosInSet
			]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeRowContext.Provider, {
				value: providerValue,
				children: element
			}), [providerValue]);
			props = {
				...props,
				id
			};
			return props;
		});
		CompositeRow = forwardRef(function CompositeRow(props) {
			const htmlProps = useCompositeRow(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
export { init_composite_row as n, CompositeRow as t };
