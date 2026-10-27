import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { f as init_empty, l as EMPTY_ARRAY, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT } from "./useRenderElement-Dkv6YH0v.js";
import { n as useCompositeItem, t as init_useCompositeItem } from "./useCompositeItem-BrfpoLZj.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/composite/item/CompositeItem.mjs
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
