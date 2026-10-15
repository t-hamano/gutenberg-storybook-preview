import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { a as init_useOpenChangeComplete, c as useAnimationsFinished, o as useOpenChangeComplete, s as init_useAnimationsFinished } from "./useTransitionStatus-C7eUOB6r.js";
import { n as init_useTimeout, t as Timeout } from "./useTimeout-B8xVAQjx.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { O as triggerHover, f as imperativeAction, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails } from "./createBaseUIEventDetails-CC__nZlv.js";
import { p as isHTMLElement, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as useButton, t as init_useButton } from "./useButton-C38YKBDn.js";
import { A as init_ReactStore, At as triggerOpenStateMapping, C as useTriggerDataForwarding, Et as init_popupStateMapping, F as useDismiss, G as init_FloatingPortal, I as FloatingNode, L as FloatingTree, M as fastComponentRef, N as init_fastHooks, Ot as popupTransitionStateMapping, P as init_useDismiss, Q as init_constants, R as init_FloatingTree, S as usePopupRootSync, W as FloatingPortal, Y as CLICK_TRIGGER_IDENTIFIER, Z as POPUP_COLLISION_AVOIDANCE, _ as init_popupStoreUtils, a as getDisabledMountTransitionStyles, b as usePopupInteractionProps, c as useAnchorPositioning, d as FOCUSABLE_POPUP_PROPS, f as PopupHandleAttachment, g as createPopupOpenState, h as createDefaultInitialFocus, i as usePositioner, j as fastComponent, k as ReactStore, kt as pressableTriggerOpenStateMapping, l as PopupTriggerMap, m as attachPreventUnmountOnClose, mt as init_FocusGuard, o as init_getDisabledMountTransitionStyles, pt as FocusGuard, r as init_usePositioner, s as init_useAnchorPositioning, u as init_popupTriggerMap, v as useImplicitActiveTrigger, x as usePopupRootStore, y as useOpenStateTransitions, z as useFloatingNodeId } from "./DirectionProvider-CsD6Wmlj.js";
import { a as init_InternalBackdrop, c as FloatingFocusManager, i as InternalBackdrop, l as init_FloatingFocusManager, o as init_useClick, r as useOpenMethodTriggerProps, s as useClick, t as init_useOpenInteractionType } from "./useOpenInteractionType-KvNpLDr_.js";
import { a as init_useHoverFloatingInteraction, d as createInitialPopupStoreState, f as init_store, i as useHoverReferenceInteraction, l as init_usePopupHandleStore, n as safePolygon, o as useHoverFloatingInteraction, p as popupStoreSelectors, r as init_useHoverReferenceInteraction, t as init_safePolygon, u as usePopupHandleStore } from "./safePolygon-CaWQyfTS.js";
import { a as COMPOSITE_KEYS, l as init_composite } from "./composite-C8d67ntQ.js";
import { n as init_inertValue, t as inertValue } from "./inertValue-BhNu7eJI.js";
import { n as useAnchoredPopupScrollLock, t as init_useAnchoredPopupScrollLock } from "./useAnchoredPopupScrollLock-Dui5gCoA.js";
import { n as useToolbarRootContext, t as init_ToolbarRootContext } from "./ToolbarRootContext-D44etuPV.js";
import { n as useTriggerFocusGuards, t as init_useTriggerFocusGuards } from "./useTriggerFocusGuards-AQO1s2RL.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/root/PopoverRootContext.mjs
function usePopoverRootContext(optional) {
	const context = import_react$10.useContext(PopoverRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: PopoverRootContext is missing. Popover parts must be placed within <Popover.Root>.");
	return context;
}
var import_react$10, PopoverRootContext;
function init_PopoverRootContext() {
	return (init_PopoverRootContext = __esmMin((() => {
		import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
		PopoverRootContext = /*#__PURE__*/ import_react$10.createContext(void 0);
		PopoverRootContext.displayName = "PopoverRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/store/PopoverStore.mjs
function createInitialState(initialState, triggerElements, floatingId, nested = false) {
	const state = {
		...createInitialPopupStoreState(triggerElements, floatingId, nested),
		disabled: false,
		modal: false,
		focusManagerModal: false,
		instantType: void 0,
		openMethod: null,
		openChangeReason: null,
		titleElementId: void 0,
		descriptionElementId: void 0,
		stickIfOpen: true,
		openOnHover: false,
		closeDelay: 0,
		adaptiveOrigin: void 0,
		...initialState
	};
	if (state.open && initialState?.mounted === void 0) state.mounted = true;
	return state;
}
function createInitialContext(triggerElements) {
	return {
		popupRef: /*#__PURE__*/ import_react$9.createRef(),
		onOpenChange: void 0,
		onOpenChangeComplete: void 0,
		triggerFocusTargetRef: /*#__PURE__*/ import_react$9.createRef(),
		beforeContentFocusGuardRef: /*#__PURE__*/ import_react$9.createRef(),
		stickIfOpenTimeout: new Timeout(),
		triggerElements
	};
}
var import_react$9, import_react_dom, selectors, PopoverStore;
function init_PopoverStore() {
	return (init_PopoverStore = __esmMin((() => {
		import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
		init_ReactStore();
		init_useTimeout();
		init_reason_parts();
		init_popupStoreUtils(), init_store(), init_popupTriggerMap();
		init_constants();
		selectors = {
			...popupStoreSelectors,
			disabled: (state) => state.disabled,
			instantType: (state) => state.instantType,
			openMethod: (state) => state.openMethod,
			openChangeReason: (state) => state.openChangeReason,
			modal: (state) => state.modal,
			focusManagerModal: (state) => state.focusManagerModal,
			stickIfOpen: (state) => state.stickIfOpen,
			titleElementId: (state) => state.titleElementId,
			descriptionElementId: (state) => state.descriptionElementId,
			openOnHover: (state) => state.openOnHover,
			closeDelay: (state) => state.closeDelay,
			adaptiveOrigin: (state) => state.adaptiveOrigin
		};
		PopoverStore = class extends ReactStore {
			constructor(initialState, floatingId, nested) {
				const triggerElements = new PopupTriggerMap();
				super(createInitialState(initialState, triggerElements, floatingId, nested), createInitialContext(triggerElements), selectors);
			}
			setOpen = (nextOpen, eventDetails) => {
				const isHover = eventDetails.reason === triggerHover;
				const isKeyboardClick = eventDetails.reason === "trigger-press" && eventDetails.event.detail === 0;
				const isDismissClose = !nextOpen && (eventDetails.reason === "escape-key" || eventDetails.reason == null);
				const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
				const activeTriggerId = this.select("activeTriggerId");
				if (!nextOpen && eventDetails.reason === "close-press" && eventDetails.trigger == null && activeTriggerId != null) eventDetails.trigger = this.context.triggerElements.getById(activeTriggerId) ?? this.select("activeTriggerElement") ?? void 0;
				this.context.onOpenChange?.(nextOpen, eventDetails);
				if (eventDetails.isCanceled) return;
				this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
				const changeState = () => {
					const popupOpenState = createPopupOpenState(this.state, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
					popupOpenState.openChangeReason = eventDetails.reason;
					this.update(popupOpenState);
				};
				if (isHover) {
					this.set("stickIfOpen", true);
					this.context.stickIfOpenTimeout.start(500, () => {
						this.set("stickIfOpen", false);
					});
					import_react_dom.flushSync(changeState);
				} else changeState();
				let instantType;
				if (isKeyboardClick) instantType = "click";
				else if (isDismissClose) instantType = "dismiss";
				else if (eventDetails.reason === "focus-out") instantType = "focus";
				this.set("instantType", instantType);
			};
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/root/PopoverRoot.mjs
function PopoverRoot(props) {
	if (usePopoverRootContext(true)) return /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(PopoverRootComponent, { props });
	return /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(FloatingTree, { children: /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(PopoverRootComponent, { props }) });
}
function usePopoverRootStore(handle, initialState) {
	const store = usePopupRootStore((floatingId, nested) => new PopoverStore(initialState, floatingId, nested));
	import_react$8.useEffect(() => store.context.stickIfOpenTimeout.disposeEffect(), [store]);
	return store;
}
function PopoverInteractions({ store, modal }) {
	const floatingRootContext = store.useState("floatingRootContext");
	const dismiss = useDismiss(floatingRootContext, { outsidePressEvent: {
		mouse: modal === "trap-focus" ? "sloppy" : "intentional",
		touch: "sloppy"
	} });
	const triggerProps = dismiss.reference;
	const popupProps = dismiss.floating;
	usePopupInteractionProps(store, {
		activeTriggerProps: triggerProps,
		inactiveTriggerProps: triggerProps,
		popupProps
	});
	return null;
}
var import_react$8, import_jsx_runtime$4, PopoverRootComponent;
function init_PopoverRoot() {
	return (init_PopoverRoot = __esmMin((() => {
		import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_fastHooks();
		init_useDismiss(), init_FloatingTree();
		init_PopoverRootContext();
		init_PopoverStore();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_popupStoreUtils();
		import_jsx_runtime$4 = require_jsx_runtime();
		PopoverRootComponent = fastComponent(function PopoverRootComponent({ props }) {
			const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, modal = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
			const store = usePopoverRootStore(handle, {
				modal,
				open: defaultOpen,
				openProp,
				activeTriggerId: defaultTriggerIdProp,
				triggerIdProp
			});
			store.useControlledProp("openProp", openProp);
			store.useControlledProp("triggerIdProp", triggerIdProp);
			const open = store.useState("open");
			const mounted = store.useState("mounted");
			const payload = store.useState("payload");
			store.useContextCallback("onOpenChange", onOpenChange);
			store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
			usePopupRootSync(store, open);
			useImplicitActiveTrigger(store);
			const { forceUnmount } = useOpenStateTransitions(open, store, () => {
				store.update({
					stickIfOpen: true,
					openChangeReason: null
				});
			});
			store.useSyncedValues({ modal });
			import_react$8.useEffect(() => {
				if (!open) store.context.stickIfOpenTimeout.clear();
			}, [store, open]);
			import_react$8.useImperativeHandle(props.actionsRef, () => ({
				unmount: forceUnmount,
				close: () => store.setOpen(false, createChangeEventDetails(imperativeAction))
			}), [forceUnmount, store]);
			const shouldRenderInteractions = open || mounted;
			return /*#__PURE__*/ (0, import_jsx_runtime$4.jsxs)(PopoverRootContext.Provider, {
				value: store,
				children: [
					handle && /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(PopupHandleAttachment, {
						handle,
						store
					}),
					shouldRenderInteractions && /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(PopoverInteractions, {
						store,
						modal
					}),
					typeof children === "function" ? children({ payload }) : children
				]
			});
		});
		PopoverRootComponent.displayName = "PopoverRootComponent";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/trigger/PopoverTrigger.mjs
var import_react$7, import_jsx_runtime$3, PopoverTrigger;
function init_PopoverTrigger() {
	return (init_PopoverTrigger = __esmMin((() => {
		import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_fastHooks();
		init_PopoverRootContext();
		init_useButton();
		init_popupStateMapping();
		init_useRenderElement();
		init_constants();
		init_safePolygon(), init_useClick(), init_useHoverReferenceInteraction();
		init_useBaseUiId();
		init_FocusGuard();
		init_reason_parts();
		init_usePopupHandleStore(), init_popupStoreUtils();
		init_useTriggerFocusGuards();
		init_useOpenInteractionType();
		import_jsx_runtime$3 = require_jsx_runtime();
		PopoverTrigger = fastComponentRef(function PopoverTrigger(componentProps, forwardedRef) {
			const { render, className, style, disabled = false, nativeButton = true, handle, payload, openOnHover = false, delay = 300, closeDelay = 0, id: idProp, ...elementProps } = componentProps;
			const rootStore = usePopoverRootContext(true);
			const store = usePopupHandleStore(handle) ?? rootStore;
			if (!store) throw new Error("Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle.");
			const thisTriggerId = useBaseUiId(idProp);
			const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
			const floatingContext = store.useState("floatingRootContext");
			const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
			const popupId = store.useState("triggerPopupId", thisTriggerId);
			const triggerElementRef = import_react$7.useRef(null);
			const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
				payload,
				disabled,
				openOnHover,
				closeDelay
			});
			const openReason = store.useState("openChangeReason");
			const stickIfOpen = store.useState("stickIfOpen");
			const openMethod = store.useState("openMethod");
			const focusManagerModal = store.useState("focusManagerModal");
			const hoverProps = useHoverReferenceInteraction(floatingContext, {
				enabled: !disabled && openOnHover && (openMethod !== "touch" || openReason !== "trigger-press"),
				mouseOnly: true,
				move: false,
				handleClose: safePolygon(),
				restMs: delay,
				delay: { close: closeDelay },
				triggerElementRef,
				isActiveTrigger: isTriggerActive,
				isClosing: () => store.select("transitionStatus") === "ending"
			});
			const click = useClick(floatingContext, { stickIfOpen });
			const interactionTypeProps = useOpenMethodTriggerProps(() => store.select("open"), (interactionType) => {
				store.set("openMethod", interactionType);
			});
			const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton
			});
			const stateAttributesMapping = { open(value) {
				if (value && openReason === "trigger-press") return pressableTriggerOpenStateMapping.open(value);
				return triggerOpenStateMapping.open(value);
			} };
			const { preFocusGuardRef, handlePreFocusGuardFocus, handleFocusTargetFocus } = useTriggerFocusGuards(store, triggerElementRef);
			const element = useRenderElement("button", componentProps, {
				state: {
					disabled,
					open: isOpenedByThisTrigger
				},
				ref: [
					buttonRef,
					forwardedRef,
					registerTrigger,
					triggerElementRef
				],
				props: [
					click.reference,
					hoverProps,
					rootTriggerProps,
					interactionTypeProps,
					{
						[CLICK_TRIGGER_IDENTIFIER]: "",
						id: thisTriggerId,
						"aria-haspopup": "dialog",
						"aria-expanded": isOpenedByThisTrigger,
						"aria-controls": popupId
					},
					elementProps,
					getButtonProps
				],
				stateAttributesMapping
			});
			const keyedElement = /*#__PURE__*/ (0, import_jsx_runtime$3.jsx)(import_react$7.Fragment, { children: element }, thisTriggerId);
			if (isMountedByThisTrigger && !focusManagerModal) return /*#__PURE__*/ (0, import_jsx_runtime$3.jsxs)(import_react$7.Fragment, { children: [
				/*#__PURE__*/ (0, import_jsx_runtime$3.jsx)(FocusGuard, {
					ref: preFocusGuardRef,
					onFocus: handlePreFocusGuardFocus
				}),
				keyedElement,
				/*#__PURE__*/ (0, import_jsx_runtime$3.jsx)(FocusGuard, {
					ref: store.context.triggerFocusTargetRef,
					onFocus: handleFocusTargetFocus
				})
			] });
			return keyedElement;
		});
		PopoverTrigger.displayName = "PopoverTrigger";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/portal/PopoverPortalContext.mjs
function usePopoverPortalContext() {
	const value = import_react$6.useContext(PopoverPortalContext);
	if (value === void 0) throw new Error("Base UI: <Popover.Portal> is missing.");
	return value;
}
var import_react$6, PopoverPortalContext;
function init_PopoverPortalContext() {
	return (init_PopoverPortalContext = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		PopoverPortalContext = /*#__PURE__*/ import_react$6.createContext(void 0);
		PopoverPortalContext.displayName = "PopoverPortalContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/portal/PopoverPortal.mjs
var import_react$5, import_jsx_runtime$2, PopoverPortal;
function init_PopoverPortal() {
	return (init_PopoverPortal = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FloatingPortal();
		init_PopoverRootContext();
		init_PopoverPortalContext();
		import_jsx_runtime$2 = require_jsx_runtime();
		PopoverPortal = /*#__PURE__*/ import_react$5.forwardRef(function PopoverPortal(props, forwardedRef) {
			const { keepMounted = false, ...portalProps } = props;
			if (!(usePopoverRootContext().useState("mounted") || keepMounted)) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(PopoverPortalContext.Provider, {
				value: keepMounted,
				children: /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(FloatingPortal, {
					ref: forwardedRef,
					...portalProps
				})
			});
		});
		PopoverPortal.displayName = "PopoverPortal";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/positioner/PopoverPositionerContext.mjs
function usePopoverPositionerContext() {
	const context = import_react$4.useContext(PopoverPositionerContext);
	if (!context) throw new Error("Base UI: PopoverPositionerContext is missing. PopoverPositioner parts must be placed within <Popover.Positioner>.");
	return context;
}
var import_react$4, PopoverPositionerContext;
function init_PopoverPositionerContext() {
	return (init_PopoverPositionerContext = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		PopoverPositionerContext = /*#__PURE__*/ import_react$4.createContext(void 0);
		PopoverPositionerContext.displayName = "PopoverPositionerContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/positioner/PopoverPositioner.mjs
var import_react$3, import_jsx_runtime$1, PopoverPositioner;
function init_PopoverPositioner() {
	return (init_PopoverPositioner = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_inertValue();
		init_useIsoLayoutEffect();
		init_FloatingTree();
		init_PopoverRootContext();
		init_PopoverPositionerContext();
		init_useAnchorPositioning();
		init_PopoverPortalContext();
		init_InternalBackdrop();
		init_reason_parts();
		init_constants();
		init_useAnimationsFinished();
		init_usePositioner();
		init_useAnchoredPopupScrollLock();
		import_jsx_runtime$1 = require_jsx_runtime();
		PopoverPositioner = /*#__PURE__*/ import_react$3.forwardRef(function PopoverPositioner(componentProps, forwardedRef) {
			const { render, className, style, anchor, positionMethod, side, align, sideOffset, alignOffset, collisionBoundary = "clipping-ancestors", collisionPadding, arrowPadding, sticky, disableAnchorTracking = false, collisionAvoidance = POPUP_COLLISION_AVOIDANCE, ...elementProps } = componentProps;
			const store = usePopoverRootContext();
			const keepMounted = usePopoverPortalContext();
			const nodeId = useFloatingNodeId();
			const floatingRootContext = store.useState("floatingRootContext");
			const mounted = store.useState("mounted");
			const open = store.useState("open");
			const openReason = store.useState("openChangeReason");
			const triggerElement = store.useState("activeTriggerElement");
			const modal = store.useState("modal");
			const openMethod = store.useState("openMethod");
			const positionerElement = store.useState("positionerElement");
			const instantType = store.useState("instantType");
			const transitionStatus = store.useState("transitionStatus");
			const adaptiveOrigin = store.useState("adaptiveOrigin");
			const prevTriggerElementRef = import_react$3.useRef(null);
			const runOnceAnimationsFinish = useAnimationsFinished(positionerElement);
			const positioning = useAnchorPositioning({
				anchor,
				floatingRootContext,
				positionMethod,
				mounted,
				side,
				sideOffset,
				align,
				alignOffset,
				arrowPadding,
				collisionBoundary,
				collisionPadding,
				sticky,
				disableAnchorTracking,
				keepMounted,
				nodeId,
				collisionAvoidance,
				adaptiveOrigin
			});
			const domReference = floatingRootContext.useState("domReferenceElement");
			useIsoLayoutEffect(() => {
				const currentTriggerElement = domReference;
				const prevTriggerElement = prevTriggerElementRef.current;
				if (currentTriggerElement) prevTriggerElementRef.current = currentTriggerElement;
				if (prevTriggerElement && currentTriggerElement && currentTriggerElement !== prevTriggerElement) {
					store.set("instantType", void 0);
					const ac = new AbortController();
					runOnceAnimationsFinish(() => {
						store.set("instantType", "trigger-change");
					}, ac.signal);
					return () => {
						ac.abort();
					};
				}
			}, [
				domReference,
				runOnceAnimationsFinish,
				store
			]);
			const trueModalNonHover = modal === true && openReason !== "trigger-hover";
			useAnchoredPopupScrollLock(open && trueModalNonHover, openMethod === "touch", positionerElement, triggerElement);
			const setPositionerElement = store.useStateSetter("positionerElement");
			const state = {
				open,
				side: positioning.side,
				align: positioning.align,
				anchorHidden: positioning.anchorHidden,
				instant: instantType
			};
			const element = usePositioner(componentProps, state, {
				styles: positioning.positionerStyles,
				transitionStatus,
				props: elementProps,
				refs: [forwardedRef, setPositionerElement],
				hidden: !mounted,
				inert: !open
			});
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsxs)(PopoverPositionerContext.Provider, {
				value: positioning,
				children: [mounted && trueModalNonHover && /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(InternalBackdrop, {
					inert: inertValue(!open),
					cutout: triggerElement
				}), /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(FloatingNode, {
					id: nodeId,
					children: element
				})]
			});
		});
		PopoverPositioner.displayName = "PopoverPositioner";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/closePart.mjs
function useClosePartCount() {
	const [closePartCount, setClosePartCount] = import_react$2.useState(0);
	const register = useStableCallback(() => {
		setClosePartCount((count) => count + 1);
		return () => {
			setClosePartCount((count) => Math.max(0, count - 1));
		};
	});
	return {
		context: import_react$2.useMemo(() => ({ register }), [register]),
		hasClosePart: closePartCount > 0
	};
}
function useClosePartRegistration() {
	const context = import_react$2.useContext(ClosePartContext);
	useIsoLayoutEffect(() => {
		return context?.register();
	}, [context]);
}
var import_react$2, ClosePartContext;
function init_closePart() {
	return (init_closePart = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useStableCallback();
		ClosePartContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		ClosePartContext.displayName = "ClosePartContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/popup/PopoverPopup.mjs
var import_react$1, import_jsx_runtime, PopoverPopup;
function init_PopoverPopup() {
	return (init_PopoverPopup = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_floating_ui_utils_dom();
		init_FloatingFocusManager(), init_useHoverFloatingInteraction();
		init_PopoverRootContext();
		init_PopoverPositionerContext();
		init_popupStateMapping();
		init_useOpenChangeComplete();
		init_useRenderElement();
		init_reason_parts();
		init_composite();
		init_ToolbarRootContext();
		init_getDisabledMountTransitionStyles();
		init_closePart();
		init_popupStoreUtils();
		import_jsx_runtime = require_jsx_runtime();
		PopoverPopup = /*#__PURE__*/ import_react$1.forwardRef(function PopoverPopup(componentProps, forwardedRef) {
			const { render, className, style, initialFocus, finalFocus, ...elementProps } = componentProps;
			const store = usePopoverRootContext();
			const positioner = usePopoverPositionerContext();
			const insideToolbar = useToolbarRootContext(true) != null;
			const { context: closePartContext, hasClosePart } = useClosePartCount();
			const open = store.useState("open");
			const openMethod = store.useState("openMethod");
			const instantType = store.useState("instantType");
			const transitionStatus = store.useState("transitionStatus");
			const popupProps = store.useState("popupProps");
			const titleId = store.useState("titleElementId");
			const descriptionId = store.useState("descriptionElementId");
			const modal = store.useState("modal");
			const mounted = store.useState("mounted");
			const openReason = store.useState("openChangeReason");
			const activeTriggerElement = store.useState("activeTriggerElement");
			const floatingContext = store.useState("floatingRootContext");
			const floatingId = floatingContext.useState("floatingId");
			const disabled = store.useState("disabled");
			const openOnHover = store.useState("openOnHover");
			const closeDelay = store.useState("closeDelay");
			useOpenChangeComplete({
				open,
				ref: store.context.popupRef,
				onComplete() {
					if (open) store.context.onOpenChangeComplete?.(true);
				}
			});
			useHoverFloatingInteraction(floatingContext, {
				enabled: openOnHover && !disabled,
				closeDelay
			});
			const resolvedInitialFocus = initialFocus === void 0 ? createDefaultInitialFocus(store.context.popupRef) : initialFocus;
			const focusManagerModal = modal !== false && hasClosePart;
			store.useSyncedValue("focusManagerModal", focusManagerModal);
			const setPopupElement = store.useStateSetter("popupElement");
			const state = {
				open,
				side: positioner.side,
				align: positioner.align,
				instant: instantType,
				transitionStatus
			};
			const element = useRenderElement("div", componentProps, {
				state,
				ref: [
					forwardedRef,
					store.context.popupRef,
					setPopupElement
				],
				props: [
					popupProps,
					{
						id: floatingId,
						role: "dialog",
						...FOCUSABLE_POPUP_PROPS,
						"aria-labelledby": titleId,
						"aria-describedby": descriptionId,
						onKeyDown(event) {
							if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
						}
					},
					getDisabledMountTransitionStyles(transitionStatus),
					elementProps
				],
				stateAttributesMapping: popupTransitionStateMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FloatingFocusManager, {
				context: floatingContext,
				openInteractionType: openMethod,
				modal: focusManagerModal,
				disabled: !mounted || openReason === "trigger-hover",
				initialFocus: resolvedInitialFocus,
				returnFocus: finalFocus,
				restoreFocus: "popup",
				previousFocusableElement: isHTMLElement(activeTriggerElement) ? activeTriggerElement : void 0,
				nextFocusableElement: store.context.triggerFocusTargetRef,
				beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ClosePartContext.Provider, {
					value: closePartContext,
					children: element
				})
			});
		});
		PopoverPopup.displayName = "PopoverPopup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/popover/backdrop/PopoverBackdrop.mjs
var import_react, PopoverBackdrop;
function init_PopoverBackdrop() {
	return (init_PopoverBackdrop = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_PopoverRootContext();
		init_popupStateMapping();
		init_useRenderElement();
		init_reason_parts();
		PopoverBackdrop = /*#__PURE__*/ import_react.forwardRef(function PopoverBackdrop(props, forwardedRef) {
			const { render, className, style, ...elementProps } = props;
			const store = usePopoverRootContext();
			const open = store.useState("open");
			const mounted = store.useState("mounted");
			const transitionStatus = store.useState("transitionStatus");
			const openReason = store.useState("openChangeReason");
			return useRenderElement("div", props, {
				state: {
					open,
					transitionStatus
				},
				ref: forwardedRef,
				props: [{
					role: "presentation",
					hidden: !mounted,
					style: {
						pointerEvents: openReason === "trigger-hover" ? "none" : void 0,
						userSelect: "none",
						WebkitUserSelect: "none"
					}
				}, elementProps],
				stateAttributesMapping: popupTransitionStateMapping
			});
		});
		PopoverBackdrop.displayName = "PopoverBackdrop";
	})))();
}
//#endregion
export { init_PopoverRootContext as _, init_closePart as a, init_PopoverPositioner as c, PopoverPortal as d, init_PopoverPortal as f, init_PopoverRoot as g, PopoverRoot as h, init_PopoverPopup as i, init_PopoverPositionerContext as l, init_PopoverTrigger as m, init_PopoverBackdrop as n, useClosePartRegistration as o, PopoverTrigger as p, PopoverPopup as r, PopoverPositioner as s, PopoverBackdrop as t, usePopoverPositionerContext as u, usePopoverRootContext as v };
