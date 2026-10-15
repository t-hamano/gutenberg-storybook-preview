import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { p as init_reason_parts, r as init_createBaseUIEventDetails, s as closePress, t as createChangeEventDetails } from "./createBaseUIEventDetails-CC__nZlv.js";
import { n as useButton, t as init_useButton } from "./useButton-C38YKBDn.js";
import { d as init_DialogRootContext, f as useDialogRootContext } from "./DialogTitle-CQ1UWgyx.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/close/DialogClose.mjs
var import_react$1, DialogClose;
function init_DialogClose() {
	return (init_DialogClose = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_DialogRootContext();
		init_useRenderElement();
		init_useButton();
		init_createBaseUIEventDetails();
		init_reason_parts();
		DialogClose = /*#__PURE__*/ import_react$1.forwardRef(function DialogClose(componentProps, forwardedRef) {
			const { render, className, style, disabled = false, nativeButton = true, ...elementProps } = componentProps;
			const store = useDialogRootContext();
			const open = store.useState("open");
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton
			});
			const state = { disabled };
			function handleClick(event) {
				if (open) store.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent));
			}
			return useRenderElement("button", componentProps, {
				state,
				ref: [forwardedRef, buttonRef],
				props: [
					{ onClick: handleClick },
					elementProps,
					getButtonProps
				]
			});
		});
		DialogClose.displayName = "DialogClose";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/description/DialogDescription.mjs
var import_react, DialogDescription;
function init_DialogDescription() {
	return (init_DialogDescription = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_DialogRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		DialogDescription = /*#__PURE__*/ import_react.forwardRef(function DialogDescription(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const store = useDialogRootContext();
			const id = useBaseUiId(idProp);
			store.useSyncedValueWithCleanup("descriptionElementId", id);
			return useRenderElement("p", componentProps, {
				ref: forwardedRef,
				props: [{ id }, elementProps]
			});
		});
		DialogDescription.displayName = "DialogDescription";
	})))();
}
//#endregion
export { init_DialogClose as i, init_DialogDescription as n, DialogClose as r, DialogDescription as t };
