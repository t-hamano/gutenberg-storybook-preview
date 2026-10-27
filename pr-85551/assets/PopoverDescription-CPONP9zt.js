import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { _ as init_PopoverRootContext, v as usePopoverRootContext } from "./PopoverBackdrop-Cqf1Dh-L.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/description/PopoverDescription.mjs
var import_react, PopoverDescription;
function init_PopoverDescription() {
	return (init_PopoverDescription = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_PopoverRootContext();
		init_useBaseUiId();
		init_useRenderElement();
		PopoverDescription = /*#__PURE__*/ import_react.forwardRef(function PopoverDescription(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const store = usePopoverRootContext();
			const id = useBaseUiId(elementProps.id);
			store.useSyncedValueWithCleanup("descriptionElementId", id);
			return useRenderElement("p", componentProps, {
				ref: forwardedRef,
				props: [{ id }, elementProps]
			});
		});
		PopoverDescription.displayName = "PopoverDescription";
	})))();
}
//#endregion
export { init_PopoverDescription as n, PopoverDescription as t };
