import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { b as useMergedRefs, y as init_useMergedRefs } from "./useRenderElement-Dkv6YH0v.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-DCUBNr8F.js";
import { o as init_CompositeRootContext, s as useCompositeRootContext } from "./useButton-jJ_7clep.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/composite/item/useCompositeItem.mjs
function useCompositeItem(params = {}) {
	const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } = useCompositeRootContext();
	const { ref, index } = useCompositeListItem(params);
	const isHighlighted = highlightedIndex === index;
	const itemRef = import_react.useRef(null);
	const mergedRef = useMergedRefs(ref, itemRef);
	return {
		compositeProps: {
			tabIndex: isHighlighted ? 0 : -1,
			onFocus() {
				onHighlightedIndexChange(index);
			},
			onMouseMove() {
				const item = itemRef.current;
				if (!highlightItemOnHover || !item) return;
				const disabled = item.hasAttribute("disabled") || item.ariaDisabled === "true";
				if (!isHighlighted && !disabled) item.focus();
			}
		},
		compositeRef: mergedRef,
		index
	};
}
var import_react;
function init_useCompositeItem() {
	return (init_useCompositeItem = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useMergedRefs();
		init_CompositeRootContext();
		init_useCompositeListItem();
	})))();
}
//#endregion
export { useCompositeItem as n, init_useCompositeItem as t };
