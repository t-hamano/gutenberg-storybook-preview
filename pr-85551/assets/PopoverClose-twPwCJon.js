import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, i as closePress, u as init_reason_parts } from "./reason-parts-0ghxNVBE.js";
import { n as useButton, t as init_useButton } from "./useButton-jJ_7clep.js";
import { _ as init_PopoverRootContext, a as init_closePart, o as useClosePartRegistration, v as usePopoverRootContext } from "./PopoverBackdrop-Cqf1Dh-L.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/close/PopoverClose.mjs
var import_react, PopoverClose;
function init_PopoverClose() {
	return (init_PopoverClose = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_PopoverRootContext();
		init_useRenderElement();
		init_useButton();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_closePart();
		PopoverClose = /*#__PURE__*/ import_react.forwardRef(function PopoverClose(componentProps, forwardedRef) {
			const { render, className, style, disabled = false, nativeButton = true, ...elementProps } = componentProps;
			const { buttonRef, getButtonProps } = useButton({
				disabled,
				focusableWhenDisabled: false,
				native: nativeButton
			});
			const store = usePopoverRootContext();
			useClosePartRegistration();
			return useRenderElement("button", componentProps, {
				ref: [forwardedRef, buttonRef],
				props: [
					{ onClick(event) {
						store.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent));
					} },
					elementProps,
					getButtonProps
				]
			});
		});
		PopoverClose.displayName = "PopoverClose";
	})))();
}
//#endregion
export { init_PopoverClose as n, PopoverClose as t };
