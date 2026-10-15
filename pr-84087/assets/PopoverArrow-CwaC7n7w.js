import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { Dt as popupStateMapping, Et as init_popupStateMapping } from "./DirectionProvider-CsD6Wmlj.js";
import { _ as init_PopoverRootContext, l as init_PopoverPositionerContext, u as usePopoverPositionerContext, v as usePopoverRootContext } from "./PopoverBackdrop-D3n4G2jc.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/arrow/PopoverArrow.mjs
var import_react, PopoverArrow;
function init_PopoverArrow() {
	return (init_PopoverArrow = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_PopoverPositionerContext();
		init_PopoverRootContext();
		init_popupStateMapping();
		init_useRenderElement();
		PopoverArrow = /*#__PURE__*/ import_react.forwardRef(function PopoverArrow(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const open = usePopoverRootContext().useState("open");
			const { arrowRef, side, align, arrowUncentered, arrowStyles } = usePopoverPositionerContext();
			return useRenderElement("div", componentProps, {
				state: {
					open,
					side,
					align,
					uncentered: arrowUncentered
				},
				ref: [forwardedRef, arrowRef],
				props: [{
					style: arrowStyles,
					"aria-hidden": true
				}, elementProps],
				stateAttributesMapping: popupStateMapping
			});
		});
		PopoverArrow.displayName = "PopoverArrow";
	})))();
}
//#endregion
export { init_PopoverArrow as n, PopoverArrow as t };
