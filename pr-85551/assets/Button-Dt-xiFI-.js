import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useButton, t as init_useButton } from "./useButton-jJ_7clep.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/button/Button.mjs
var import_react, Button;
function init_Button() {
	return (init_Button = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useButton();
		init_useRenderElement();
		Button = /*#__PURE__*/ import_react.forwardRef(function Button(componentProps, forwardedRef) {
			const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, style, ...elementProps } = componentProps;
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				focusableWhenDisabled,
				native: nativeButton
			});
			return useRenderElement("button", componentProps, {
				state: { disabled },
				ref: [forwardedRef, buttonRef],
				props: [elementProps, getButtonProps]
			});
		});
		Button.displayName = "Button";
	})))();
}
//#endregion
export { init_Button as n, Button as t };
