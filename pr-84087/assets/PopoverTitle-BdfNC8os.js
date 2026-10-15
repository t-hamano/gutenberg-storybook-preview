import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { _ as init_PopoverRootContext, v as usePopoverRootContext } from "./PopoverBackdrop-D3n4G2jc.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/title/PopoverTitle.mjs
var import_react, PopoverTitle;
function init_PopoverTitle() {
	return (init_PopoverTitle = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_PopoverRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		PopoverTitle = /*#__PURE__*/ import_react.forwardRef(function PopoverTitle(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const store = usePopoverRootContext();
			const id = useBaseUiId(elementProps.id);
			store.useSyncedValueWithCleanup("titleElementId", id);
			return useRenderElement("h2", componentProps, {
				ref: forwardedRef,
				props: [{ id }, elementProps]
			});
		});
		PopoverTitle.displayName = "PopoverTitle";
	})))();
}
//#endregion
export { init_PopoverTitle as n, PopoverTitle as t };
