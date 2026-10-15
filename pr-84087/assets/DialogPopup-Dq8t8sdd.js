import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { a as init_useOpenChangeComplete, o as useOpenChangeComplete } from "./useTransitionStatus-C7eUOB6r.js";
import { Et as init_popupStateMapping, Ot as popupTransitionStateMapping, _ as init_popupStoreUtils, d as FOCUSABLE_POPUP_PROPS, h as createDefaultInitialFocus } from "./DirectionProvider-CsD6Wmlj.js";
import { c as FloatingFocusManager, l as init_FloatingFocusManager } from "./useOpenInteractionType-KvNpLDr_.js";
import { a as dialogStateAttributesMapping, c as useDialogPortalContext, d as init_DialogRootContext, f as useDialogRootContext, o as init_stateAttributesMapping, s as init_DialogPortalContext } from "./DialogTitle-CQ1UWgyx.js";
import { a as COMPOSITE_KEYS, l as init_composite } from "./composite-C8d67ntQ.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/backdrop/DialogBackdrop.mjs
var import_react$1, DialogBackdrop;
function init_DialogBackdrop() {
	return (init_DialogBackdrop = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_DialogRootContext();
		init_useRenderElement();
		init_popupStateMapping();
		DialogBackdrop = /*#__PURE__*/ import_react$1.forwardRef(function DialogBackdrop(componentProps, forwardedRef) {
			const { render, className, style, forceRender = false, ...elementProps } = componentProps;
			const store = useDialogRootContext();
			const open = store.useState("open");
			const nested = store.useState("nested");
			const mounted = store.useState("mounted");
			const state = {
				open,
				transitionStatus: store.useState("transitionStatus")
			};
			return useRenderElement("div", componentProps, {
				state,
				ref: [store.context.backdropRef, forwardedRef],
				stateAttributesMapping: popupTransitionStateMapping,
				props: [{
					role: "presentation",
					hidden: !mounted,
					style: {
						userSelect: "none",
						WebkitUserSelect: "none"
					}
				}, elementProps],
				enabled: forceRender || !nested
			});
		});
		DialogBackdrop.displayName = "DialogBackdrop";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/popup/DialogPopupCssVars.mjs
var nestedDialogs;
function init_DialogPopupCssVars() {
	return (init_DialogPopupCssVars = __esmMin((() => {
		nestedDialogs = "--nested-dialogs";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/popup/DialogPopup.mjs
var import_react, import_jsx_runtime, DialogPopup;
function init_DialogPopup() {
	return (init_DialogPopup = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FloatingFocusManager();
		init_DialogRootContext();
		init_useRenderElement();
		init_DialogPortalContext();
		init_useOpenChangeComplete();
		init_composite();
		init_popupStoreUtils();
		init_DialogPopupCssVars();
		init_stateAttributesMapping();
		import_jsx_runtime = require_jsx_runtime();
		DialogPopup = /*#__PURE__*/ import_react.forwardRef(function DialogPopup(componentProps, forwardedRef) {
			const { render, className, style, finalFocus, initialFocus, ...elementProps } = componentProps;
			const store = useDialogRootContext();
			const descriptionElementId = store.useState("descriptionElementId");
			const disablePointerDismissal = store.useState("disablePointerDismissal");
			const floatingRootContext = store.useState("floatingRootContext");
			const rootPopupProps = store.useState("popupProps");
			const modal = store.useState("modal");
			const mounted = store.useState("mounted");
			const nested = store.useState("nested");
			const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
			const open = store.useState("open");
			const openMethod = store.useState("openMethod");
			const titleElementId = store.useState("titleElementId");
			const transitionStatus = store.useState("transitionStatus");
			const role = store.useState("role");
			const floatingId = floatingRootContext.useState("floatingId");
			useDialogPortalContext();
			useOpenChangeComplete({
				open,
				ref: store.context.popupRef,
				onComplete() {
					if (open) store.context.onOpenChangeComplete?.(true);
				}
			});
			const resolvedInitialFocus = initialFocus === void 0 ? createDefaultInitialFocus(store.context.popupRef) : initialFocus;
			const nestedDialogOpen = nestedOpenDialogCount > 0;
			const setPopupElement = store.useStateSetter("popupElement");
			const element = useRenderElement("div", componentProps, {
				state: {
					open,
					nested,
					transitionStatus,
					nestedDialogOpen
				},
				props: [
					rootPopupProps,
					{
						id: floatingId,
						"aria-labelledby": titleElementId,
						"aria-describedby": descriptionElementId,
						role,
						...FOCUSABLE_POPUP_PROPS,
						hidden: !mounted,
						onKeyDown(event) {
							if (COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
						},
						style: { [nestedDialogs]: nestedOpenDialogCount }
					},
					elementProps
				],
				ref: [
					forwardedRef,
					store.context.popupRef,
					setPopupElement
				],
				stateAttributesMapping: dialogStateAttributesMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
				context: floatingRootContext,
				openInteractionType: openMethod,
				disabled: !mounted,
				closeOnFocusOut: !disablePointerDismissal,
				initialFocus: resolvedInitialFocus,
				returnFocus: finalFocus,
				modal: modal !== false,
				restoreFocus: "popup",
				children: element
			});
		});
		DialogPopup.displayName = "DialogPopup";
	})))();
}
//#endregion
export { init_DialogBackdrop as i, init_DialogPopup as n, DialogBackdrop as r, DialogPopup as t };
