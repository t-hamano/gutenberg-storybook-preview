import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { c as EMPTY_ARRAY, d as init_empty, l as EMPTY_OBJECT, n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useCompositeItem, t as init_useCompositeItem } from "./useCompositeItem-BQc9TE0F.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/composite/item/CompositeItem.mjs
function CompositeItem(componentProps) {
	const { render, className, style, state = EMPTY_OBJECT, props = EMPTY_ARRAY, refs = EMPTY_ARRAY, metadata, stateAttributesMapping, tag = "div", ...elementProps } = componentProps;
	const { compositeProps, compositeRef } = useCompositeItem({ metadata });
	return useRenderElement(tag, componentProps, {
		state,
		ref: [compositeRef, ...refs],
		props: [
			compositeProps,
			...props,
			elementProps
		],
		stateAttributesMapping
	});
}
function init_CompositeItem() {
	return (init_CompositeItem = __esmMin((() => {
		init_empty();
		init_useRenderElement();
		init_useCompositeItem();
	})))();
}
//#endregion
export { init_CompositeItem as n, CompositeItem as t };
