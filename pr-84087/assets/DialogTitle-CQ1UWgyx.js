import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { i as transitionStatusMapping, r as init_stateAttributesMapping$1 } from "./useTransitionStatus-C7eUOB6r.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { f as imperativeAction, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails } from "./createBaseUIEventDetails-CC__nZlv.js";
import { A as init_ReactStore, Dt as popupStateMapping, Et as init_popupStateMapping, F as useDismiss, G as init_FloatingPortal, P as init_useDismiss, S as usePopupRootSync, W as FloatingPortal, _ as init_popupStoreUtils, b as usePopupInteractionProps, f as PopupHandleAttachment, g as createPopupOpenState, k as ReactStore, l as PopupTriggerMap, u as init_popupTriggerMap, v as useImplicitActiveTrigger, x as usePopupRootStore, y as useOpenStateTransitions } from "./DirectionProvider-CsD6Wmlj.js";
import { a as init_InternalBackdrop, f as init_useScrollLock, i as InternalBackdrop, p as useScrollLock } from "./useOpenInteractionType-KvNpLDr_.js";
import { i as init_shadowDom, n as contains, r as getTarget } from "./shadowDom-CFrNFfBF.js";
import { d as createInitialPopupStoreState, f as init_store, p as popupStoreSelectors } from "./safePolygon-CaWQyfTS.js";
import { n as init_inertValue, t as inertValue } from "./inertValue-BhNu7eJI.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/root/useDialogRoot.mjs
function DialogInteractions({ store, parentContext, isDrawer }) {
	const open = store.useState("open");
	const disablePointerDismissal = store.useState("disablePointerDismissal");
	const modal = store.useState("modal");
	const popupElement = store.useState("popupElement");
	const floatingRootContext = store.useState("floatingRootContext");
	const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = import_react$6.useState(0);
	const [ownNestedOpenDrawers, setOwnNestedOpenDrawers] = import_react$6.useState(0);
	const isTopmost = ownNestedOpenDialogs === 0;
	const dismiss = useDismiss(floatingRootContext, {
		outsidePressEvent() {
			if (store.context.internalBackdropRef.current || store.context.backdropRef.current) return "intentional";
			return {
				mouse: modal === "trap-focus" ? "sloppy" : "intentional",
				touch: "sloppy"
			};
		},
		outsidePress(event) {
			if (!store.context.outsidePressEnabledRef.current) return false;
			if ("button" in event && event.button !== 0) return false;
			if ("touches" in event) {
				if (event.type === "touchend") {
					if (event.changedTouches.length !== 1 || event.touches.length !== 0) return false;
				} else if (event.touches.length !== 1) return false;
			}
			const target = getTarget(event);
			if (isTopmost && !disablePointerDismissal) {
				if (modal) {
					const internalBackdrop = store.context.internalBackdropRef.current;
					const backdrop = store.context.backdropRef.current;
					return internalBackdrop || backdrop ? internalBackdrop === target || backdrop === target || contains(target, popupElement) && !target?.hasAttribute("data-base-ui-portal") : true;
				}
				return true;
			}
			return false;
		},
		escapeKey: isTopmost
	});
	useScrollLock(open && modal === true, popupElement);
	store.useContextCallback("onNestedDialogOpen", (dialogCount, drawerCount) => {
		setOwnNestedOpenDialogs(dialogCount);
		setOwnNestedOpenDrawers(drawerCount);
	});
	useIsoLayoutEffect(() => {
		if (parentContext?.onNestedDialogOpen) {
			if (open) parentContext.onNestedDialogOpen(ownNestedOpenDialogs + 1, ownNestedOpenDrawers + (isDrawer ? 1 : 0));
			else parentContext.onNestedDialogOpen(0, 0);
		}
		return () => {
			if (parentContext?.onNestedDialogOpen && open) parentContext.onNestedDialogOpen(0, 0);
		};
	}, [
		isDrawer,
		open,
		ownNestedOpenDialogs,
		ownNestedOpenDrawers,
		parentContext
	]);
	usePopupInteractionProps(store, {
		activeTriggerProps: dismiss.reference,
		inactiveTriggerProps: dismiss.trigger,
		popupProps: dismiss.floating,
		nestedOpenDialogCount: ownNestedOpenDialogs,
		nestedOpenDrawerCount: ownNestedOpenDrawers
	});
	return null;
}
var import_react$6;
function init_useDialogRoot() {
	return (init_useDialogRoot = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useScrollLock();
		init_useDismiss();
		init_shadowDom();
		init_popupStoreUtils();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/root/DialogRootContext.mjs
function useDialogRootContext(optional) {
	const store = import_react$5.useContext(DialogRootContext);
	if (!optional && store === void 0) throw new Error("Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>.");
	return store;
}
var import_react$5, DialogRootContext;
function init_DialogRootContext() {
	return (init_DialogRootContext = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		DialogRootContext = /*#__PURE__*/ import_react$5.createContext(void 0);
		DialogRootContext.displayName = "DialogRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/store/DialogStore.mjs
function createInitialState(initialState, triggerElements, floatingId, nested = false) {
	return {
		...createInitialPopupStoreState(triggerElements, floatingId, nested),
		modal: true,
		disablePointerDismissal: false,
		viewportElement: null,
		descriptionElementId: void 0,
		titleElementId: void 0,
		openMethod: null,
		nested: false,
		nestedOpenDialogCount: 0,
		nestedOpenDrawerCount: 0,
		role: "dialog",
		...initialState
	};
}
function createInitialContext(triggerElements) {
	return {
		popupRef: /*#__PURE__*/ import_react$4.createRef(),
		backdropRef: /*#__PURE__*/ import_react$4.createRef(),
		internalBackdropRef: /*#__PURE__*/ import_react$4.createRef(),
		outsidePressEnabledRef: { current: true },
		triggerElements,
		onOpenChange: void 0,
		onOpenChangeComplete: void 0
	};
}
var import_react$4, selectors, DialogStore;
function init_DialogStore() {
	return (init_DialogStore = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_ReactStore();
		init_store(), init_popupTriggerMap(), init_popupStoreUtils();
		selectors = {
			...popupStoreSelectors,
			modal: (state) => state.modal,
			nested: (state) => state.nested,
			nestedOpenDialogCount: (state) => state.nestedOpenDialogCount,
			nestedOpenDrawerCount: (state) => state.nestedOpenDrawerCount,
			disablePointerDismissal: (state) => state.disablePointerDismissal,
			openMethod: (state) => state.openMethod,
			descriptionElementId: (state) => state.descriptionElementId,
			titleElementId: (state) => state.titleElementId,
			viewportElement: (state) => state.viewportElement,
			role: (state) => state.role
		};
		DialogStore = class extends ReactStore {
			constructor(initialState, floatingId, nested) {
				const triggerElements = new PopupTriggerMap();
				const state = createInitialState(initialState, triggerElements, floatingId, nested);
				super(state, createInitialContext(triggerElements), selectors);
			}
			setOpen = (nextOpen, eventDetails) => {
				eventDetails.preventUnmountOnClose = () => {
					this.set("preventUnmountingOnClose", true);
				};
				if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) eventDetails.trigger = this.state.activeTriggerElement ?? void 0;
				this.context.onOpenChange?.(nextOpen, eventDetails);
				if (eventDetails.isCanceled) return;
				this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
				this.update(createPopupOpenState(this.state, nextOpen, eventDetails.trigger));
			};
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/root/useRenderDialogRoot.mjs
function useRenderDialogRoot(mode, props) {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, disablePointerDismissal: disablePointerDismissalProp = false, modal: modalProp = true, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
	const isDrawer = mode === "drawer";
	const isAlertDialog = mode === "alert-dialog";
	const modal = isAlertDialog ? true : modalProp;
	const disablePointerDismissal = isAlertDialog || disablePointerDismissalProp;
	const role = isAlertDialog ? "alertdialog" : "dialog";
	const parentStore = useDialogRootContext(true);
	const rootState = {
		modal,
		disablePointerDismissal,
		nested: parentStore != null,
		role
	};
	const store = usePopupRootStore((floatingId, floatingNested) => new DialogStore({
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp,
		...rootState
	}, floatingId, floatingNested), true);
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useSyncedValues(rootState);
	store.useContextCallback("onOpenChange", onOpenChange);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	const payload = store.useState("payload");
	usePopupRootSync(store, open);
	useImplicitActiveTrigger(store);
	const { forceUnmount } = useOpenStateTransitions(open, store);
	import_react$3.useImperativeHandle(actionsRef, () => ({
		unmount: forceUnmount,
		close: () => store.setOpen(false, createChangeEventDetails(imperativeAction))
	}), [forceUnmount, store]);
	const shouldRenderInteractions = open || mounted;
	return /*#__PURE__*/ (0, import_jsx_runtime$1.jsxs)(DialogRootContext.Provider, {
		value: store,
		children: [
			handle && /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(PopupHandleAttachment, {
				handle,
				store
			}),
			shouldRenderInteractions && /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(DialogInteractions, {
				store,
				parentContext: parentStore?.context,
				isDrawer
			}),
			typeof children === "function" ? children({ payload }) : children
		]
	});
}
var import_react$3, import_jsx_runtime$1;
function init_useRenderDialogRoot() {
	return (init_useRenderDialogRoot = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useDialogRoot();
		init_DialogRootContext();
		init_DialogStore();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_popupStoreUtils();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/portal/DialogPortalContext.mjs
function useDialogPortalContext() {
	const value = import_react$2.useContext(DialogPortalContext);
	if (value === void 0) throw new Error("Base UI: <Dialog.Portal> is missing.");
	return value;
}
var import_react$2, DialogPortalContext;
function init_DialogPortalContext() {
	return (init_DialogPortalContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		DialogPortalContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		DialogPortalContext.displayName = "DialogPortalContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/popup/DialogPopupDataAttributes.mjs
var nestedDialogOpen;
function init_DialogPopupDataAttributes() {
	return (init_DialogPopupDataAttributes = __esmMin((() => {
		init_popupStateMapping();
		nestedDialogOpen = "data-nested-dialog-open";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/utils/stateAttributesMapping.mjs
var dialogStateAttributesMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		init_stateAttributesMapping$1();
		init_popupStateMapping();
		init_DialogPopupDataAttributes();
		dialogStateAttributesMapping = {
			...popupStateMapping,
			...transitionStatusMapping,
			nestedDialogOpen(value) {
				return value ? { [nestedDialogOpen]: "" } : null;
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/portal/DialogPortal.mjs
var import_react$1, import_jsx_runtime, DialogPortal;
function init_DialogPortal() {
	return (init_DialogPortal = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_inertValue();
		init_FloatingPortal();
		init_DialogRootContext();
		init_DialogPortalContext();
		init_InternalBackdrop();
		import_jsx_runtime = require_jsx_runtime();
		DialogPortal = /*#__PURE__*/ import_react$1.forwardRef(function DialogPortal(props, forwardedRef) {
			const { keepMounted = false, ...portalProps } = props;
			const store = useDialogRootContext();
			const mounted = store.useState("mounted");
			const modal = store.useState("modal");
			const open = store.useState("open");
			if (!(mounted || keepMounted)) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DialogPortalContext.Provider, {
				value: keepMounted,
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(FloatingPortal, {
					ref: forwardedRef,
					...portalProps,
					children: [mounted && modal === true && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(InternalBackdrop, {
						ref: store.context.internalBackdropRef,
						inert: inertValue(!open)
					}), props.children]
				})
			});
		});
		DialogPortal.displayName = "DialogPortal";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/dialog/title/DialogTitle.mjs
var import_react, DialogTitle;
function init_DialogTitle() {
	return (init_DialogTitle = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_DialogRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		DialogTitle = /*#__PURE__*/ import_react.forwardRef(function DialogTitle(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const store = useDialogRootContext();
			const id = useBaseUiId(idProp);
			store.useSyncedValueWithCleanup("titleElementId", id);
			return useRenderElement("h2", componentProps, {
				ref: forwardedRef,
				props: [{ id }, elementProps]
			});
		});
		DialogTitle.displayName = "DialogTitle";
	})))();
}
//#endregion
export { dialogStateAttributesMapping as a, useDialogPortalContext as c, init_DialogRootContext as d, useDialogRootContext as f, init_DialogPortal as i, init_useRenderDialogRoot as l, init_DialogTitle as n, init_stateAttributesMapping as o, DialogPortal as r, init_DialogPortalContext as s, DialogTitle as t, useRenderDialogRoot as u };
