import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { _ as init_PopoverRootContext, v as usePopoverRootContext } from "./PopoverBackdrop-Cqf1Dh-L.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/title/PopoverTitle.mjs
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
