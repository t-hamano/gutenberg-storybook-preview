import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as mergeProps, b as init_useRefWithInit, c as EMPTY_ARRAY, d as init_empty, l as EMPTY_OBJECT, n as useRenderElement, r as init_mergeProps, t as init_useRenderElement, v as init_useMergedRefs, x as useRefWithInit, y as useMergedRefs } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { a as init_useOpenChangeComplete, c as useAnimationsFinished, o as useOpenChangeComplete, s as init_useAnimationsFinished } from "./useTransitionStatus-C7eUOB6r.js";
import { n as init_useTimeout, r as useTimeout } from "./useTimeout-B8xVAQjx.js";
import { i as init_CompositeList, n as useCompositeListItem, r as CompositeList, t as init_useCompositeListItem } from "./useCompositeListItem-YflddsV3.js";
import { i as useId, n as useBaseUiId, r as init_useId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { T as siblingOpen, f as imperativeAction, i as cancelOpen, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails, v as itemPress } from "./createBaseUIEventDetails-CC__nZlv.js";
import { c as getParentNode, m as isLastTraversableNode, p as isHTMLElement, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { i as init_dispatchClickWithModifiers, n as useButton, o as init_CompositeRootContext, r as dispatchClickWithModifiers, s as useCompositeRootContext, t as init_useButton } from "./useButton-C38YKBDn.js";
import { n as ownerDocument } from "./owner-Bl-6Ntf5.js";
import { A as init_os, M as mac, n as init_DirectionContext, r as useDirection } from "./DirectionContext-DbaSbWPN.js";
import { A as init_ReactStore, B as useFloatingParentNodeId, C as useTriggerDataForwarding, E as useSyncedFloatingRootContext, Et as init_popupStateMapping, F as useDismiss, G as init_FloatingPortal, H as FloatingTreeStore, I as FloatingNode, L as FloatingTree, M as fastComponentRef, N as init_fastHooks, Ot as popupTransitionStateMapping, P as init_useDismiss, Q as init_constants, R as init_FloatingTree, T as init_useSyncedFloatingRootContext, U as init_FloatingTreeStore, V as useFloatingTree, W as FloatingPortal, X as DROPDOWN_COLLISION_AVOIDANCE, Z as POPUP_COLLISION_AVOIDANCE, _ as init_popupStoreUtils, a as getDisabledMountTransitionStyles, b as usePopupInteractionProps, c as useAnchorPositioning, d as FOCUSABLE_POPUP_PROPS, f as PopupHandleAttachment, g as createPopupOpenState, i as usePositioner, j as fastComponent, k as ReactStore, kt as pressableTriggerOpenStateMapping, l as PopupTriggerMap, m as attachPreventUnmountOnClose, mt as init_FocusGuard, o as init_getDisabledMountTransitionStyles, pt as FocusGuard, r as init_usePositioner, s as init_useAnchorPositioning, u as init_popupTriggerMap, v as useImplicitActiveTrigger, y as useOpenStateTransitions, z as useFloatingNodeId } from "./DirectionProvider-CsD6Wmlj.js";
import { a as init_InternalBackdrop, c as FloatingFocusManager, i as InternalBackdrop, l as init_FloatingFocusManager, n as useOpenInteractionType, o as init_useClick, s as useClick, t as init_useOpenInteractionType } from "./useOpenInteractionType-KvNpLDr_.js";
import { i as init_shadowDom, n as contains } from "./shadowDom-CFrNFfBF.js";
import { a as init_useHoverFloatingInteraction, d as createInitialPopupStoreState, f as init_store, i as useHoverReferenceInteraction, l as init_usePopupHandleStore, n as safePolygon, o as useHoverFloatingInteraction, p as popupStoreSelectors, r as init_useHoverReferenceInteraction, t as init_safePolygon, u as usePopupHandleStore } from "./safePolygon-CaWQyfTS.js";
import { n as useFocus, t as init_useFocus } from "./useFocus-Cc2c_Vzq.js";
import { n as useListNavigation, t as init_useListNavigation } from "./useListNavigation-CfSz9jWd.js";
import { i as useTypeahead, n as isMouseWithinBounds, r as init_useTypeahead, t as init_getPseudoElementBounds } from "./getPseudoElementBounds-CdF7OSq_.js";
import { a as COMPOSITE_KEYS, l as init_composite } from "./composite-C8d67ntQ.js";
import { n as init_inertValue, t as inertValue } from "./inertValue-BhNu7eJI.js";
import { n as useAnchoredPopupScrollLock, t as init_useAnchoredPopupScrollLock } from "./useAnchoredPopupScrollLock-Dui5gCoA.js";
import { n as useToolbarRootContext, t as init_ToolbarRootContext } from "./ToolbarRootContext-D44etuPV.js";
import { n as init_CompositeItem, t as CompositeItem } from "./CompositeItem-C_4D4OV4.js";
import { n as useTriggerFocusGuards, t as init_useTriggerFocusGuards } from "./useTriggerFocusGuards-AQO1s2RL.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/context-menu/root/ContextMenuRootContext.mjs
function useContextMenuRootContext(optional = true) {
	const context = import_react$15.useContext(ContextMenuRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>.");
	return context;
}
var import_react$15, ContextMenuRootContext;
function init_ContextMenuRootContext() {
	return (init_ContextMenuRootContext = __esmMin((() => {
		import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
		ContextMenuRootContext = /*#__PURE__*/ import_react$15.createContext(void 0);
		ContextMenuRootContext.displayName = "ContextMenuRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/positioner/MenuPositionerContext.mjs
function useMenuPositionerContext(optional) {
	const context = import_react$14.useContext(MenuPositionerContext);
	if (context === void 0 && !optional) throw new Error("Base UI: MenuPositionerContext is missing. MenuPositioner parts must be placed within <Menu.Positioner>.");
	return context;
}
var import_react$14, MenuPositionerContext;
function init_MenuPositionerContext() {
	return (init_MenuPositionerContext = __esmMin((() => {
		import_react$14 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuPositionerContext = /*#__PURE__*/ import_react$14.createContext(void 0);
		MenuPositionerContext.displayName = "MenuPositionerContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/root/MenuRootContext.mjs
function useMenuRootContext(optional) {
	const context = import_react$13.useContext(MenuRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: MenuRootContext is missing. Menu parts must be placed within <Menu.Root>.");
	return context;
}
var import_react$13, MenuRootContext;
function init_MenuRootContext() {
	return (init_MenuRootContext = __esmMin((() => {
		import_react$13 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuRootContext = /*#__PURE__*/ import_react$13.createContext(void 0);
		MenuRootContext.displayName = "MenuRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/item/useMenuItemCommonProps.mjs
/**
* Returns common props shared by all menu item types.
* This hook extracts the shared logic for id, role, tabIndex, onKeyDown,
* onMouseMove, onClick, and onMouseUp handlers.
*/
function useMenuItemCommonProps(params) {
	const { closeOnClick, highlighted, id, nodeId, store, typingRef, itemRef, itemMetadata } = params;
	const { events: menuEvents } = store.useState("floatingTreeRoot");
	const open = store.useState("open");
	const contextMenuContext = useContextMenuRootContext(true);
	const isContextMenu = contextMenuContext !== void 0;
	return import_react$12.useMemo(() => ({
		id,
		role: "menuitem",
		tabIndex: open && highlighted ? 0 : -1,
		onKeyDown(event) {
			if (event.key === " " && typingRef?.current) event.preventDefault();
		},
		onMouseMove(event) {
			if (!nodeId) return;
			menuEvents.emit("itemhover", {
				nodeId,
				target: event.currentTarget
			});
		},
		onClick(event) {
			if (closeOnClick) menuEvents.emit("close", {
				domEvent: event,
				reason: itemPress
			});
		},
		onMouseUp(event) {
			if (contextMenuContext) {
				const initialCursorPoint = contextMenuContext.initialCursorPointRef.current;
				contextMenuContext.initialCursorPointRef.current = null;
				if (isContextMenu && initialCursorPoint && Math.abs(event.clientX - initialCursorPoint.x) <= 1 && Math.abs(event.clientY - initialCursorPoint.y) <= 1) return;
				if (isContextMenu && !mac && event.button === 2) return;
			}
			if (itemRef.current && store.context.allowMouseUpTriggerRef.current && (!isContextMenu || event.button === 2)) {
				if (itemMetadata.type === "regular-item") dispatchClickWithModifiers(itemRef.current, event, { detail: 1 });
			}
		}
	}), [
		closeOnClick,
		highlighted,
		id,
		menuEvents,
		nodeId,
		open,
		store,
		typingRef,
		itemRef,
		contextMenuContext,
		isContextMenu,
		itemMetadata
	]);
}
var import_react$12;
function init_useMenuItemCommonProps() {
	return (init_useMenuItemCommonProps = __esmMin((() => {
		import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_os();
		init_reason_parts();
		init_ContextMenuRootContext();
		init_dispatchClickWithModifiers();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/item/useMenuItem.mjs
function useMenuItem(params) {
	const { closeOnClick, disabled, highlighted, id, store, typingRef = store.context.typingRef, nativeButton, itemMetadata, nodeId } = params;
	const itemRef = import_react$11.useRef(null);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton,
		composite: true
	});
	const commonProps = useMenuItemCommonProps({
		closeOnClick,
		highlighted,
		id,
		nodeId,
		store,
		typingRef,
		itemRef,
		itemMetadata
	});
	const getItemProps = import_react$11.useCallback((externalProps) => {
		return mergeProps(commonProps, { onMouseEnter() {
			if (itemMetadata.type !== "submenu-trigger") return;
			itemMetadata.setActive();
		} }, externalProps, getButtonProps);
	}, [
		commonProps,
		getButtonProps,
		itemMetadata
	]);
	const mergedRef = useMergedRefs(itemRef, buttonRef);
	return import_react$11.useMemo(() => ({
		getItemProps,
		itemRef: mergedRef
	}), [getItemProps, mergedRef]);
}
var import_react$11, REGULAR_ITEM;
function init_useMenuItem() {
	return (init_useMenuItem = __esmMin((() => {
		import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useMergedRefs();
		init_useButton();
		init_mergeProps();
		init_useMenuItemCommonProps();
		REGULAR_ITEM = { type: "regular-item" };
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/item/MenuItem.mjs
var import_react$10, MenuItem;
function init_MenuItem() {
	return (init_MenuItem = __esmMin((() => {
		import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useMenuItem();
		init_MenuRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		init_useCompositeListItem();
		init_MenuPositionerContext();
		MenuItem = /*#__PURE__*/ import_react$10.forwardRef(function MenuItem(componentProps, forwardedRef) {
			const { render, className, id: idProp, label, nativeButton = false, disabled: disabledProp = false, closeOnClick = true, style, ...elementProps } = componentProps;
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const menuPositionerContext = useMenuPositionerContext(true);
			const id = useBaseUiId(idProp);
			const { store } = useMenuRootContext();
			const rootDisabled = store.useState("disabled");
			const disabled = disabledProp || rootDisabled;
			const highlighted = store.useState("isActive", listItem.index);
			const itemProps = store.useState("itemProps");
			const { getItemProps, itemRef } = useMenuItem({
				closeOnClick,
				disabled,
				highlighted,
				id,
				store,
				nativeButton,
				nodeId: menuPositionerContext?.context.nodeId,
				itemMetadata: REGULAR_ITEM
			});
			return useRenderElement("div", componentProps, {
				state: {
					disabled,
					highlighted
				},
				props: [
					itemProps,
					elementProps,
					getItemProps
				],
				ref: [
					itemRef,
					forwardedRef,
					listItem.ref
				]
			});
		});
		MenuItem.displayName = "MenuItem";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/popup/MenuPopup.mjs
var import_react$9, import_jsx_runtime$4, MenuPopup;
function init_MenuPopup() {
	return (init_MenuPopup = __esmMin((() => {
		import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FloatingFocusManager(), init_useHoverFloatingInteraction();
		init_MenuRootContext();
		init_MenuPositionerContext();
		init_useRenderElement();
		init_popupStateMapping();
		init_useOpenChangeComplete();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_ToolbarRootContext();
		init_composite();
		init_getDisabledMountTransitionStyles();
		import_jsx_runtime$4 = require_jsx_runtime();
		MenuPopup = /*#__PURE__*/ import_react$9.forwardRef(function MenuPopup(componentProps, forwardedRef) {
			const { render, className, style, finalFocus, ...elementProps } = componentProps;
			const { store } = useMenuRootContext();
			const { side, align } = useMenuPositionerContext();
			const insideToolbar = useToolbarRootContext(true) != null;
			const open = store.useState("open");
			const transitionStatus = store.useState("transitionStatus");
			const popupProps = store.useState("popupProps");
			const mounted = store.useState("mounted");
			const instantType = store.useState("instantType");
			const activeTriggerElement = store.useState("activeTriggerElement");
			const parent = store.useState("parent");
			const lastOpenChangeReason = store.useState("lastOpenChangeReason");
			const rootId = store.useState("rootId");
			const floatingContext = store.useState("floatingRootContext");
			const floatingTreeRoot = store.useState("floatingTreeRoot");
			const closeDelay = store.useState("closeDelay");
			const hoverEnabled = store.useState("hoverEnabled");
			const disabled = store.useState("disabled");
			const openMethod = store.useState("openMethod");
			const isContextMenu = parent.type === "context-menu";
			useOpenChangeComplete({
				open,
				ref: store.context.popupRef,
				onComplete() {
					if (open) store.context.onOpenChangeComplete?.(true);
				}
			});
			import_react$9.useEffect(() => {
				function handleClose(event) {
					store.setOpen(false, createChangeEventDetails(event.reason, event.domEvent));
				}
				floatingTreeRoot.events.on("close", handleClose);
				return () => {
					floatingTreeRoot.events.off("close", handleClose);
				};
			}, [floatingTreeRoot.events, store]);
			useHoverFloatingInteraction(floatingContext, {
				enabled: hoverEnabled && !disabled && !isContextMenu && parent.type !== "menubar",
				closeDelay
			});
			const setPopupElement = store.useStateSetter("popupElement");
			const state = {
				transitionStatus,
				side,
				align,
				open,
				nested: parent.type === "menu",
				instant: instantType
			};
			const element = useRenderElement("div", componentProps, {
				state,
				ref: [
					forwardedRef,
					store.context.popupRef,
					setPopupElement
				],
				stateAttributesMapping: popupTransitionStateMapping,
				props: [
					popupProps,
					{ onKeyDown(event) {
						if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
					} },
					getDisabledMountTransitionStyles(transitionStatus),
					elementProps,
					{ "data-rootownerid": rootId }
				]
			});
			let returnFocus = parent.type === void 0 || isContextMenu;
			if (activeTriggerElement || parent.type === "menubar" && lastOpenChangeReason !== "outside-press") returnFocus = true;
			return /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(FloatingFocusManager, {
				context: floatingContext,
				openInteractionType: openMethod,
				modal: isContextMenu,
				disabled: !mounted,
				returnFocus: finalFocus === void 0 ? returnFocus : finalFocus,
				initialFocus: parent.type !== "menu",
				restoreFocus: true,
				externalTree: parent.type !== "menubar" ? floatingTreeRoot : void 0,
				previousFocusableElement: activeTriggerElement,
				nextFocusableElement: parent.type === void 0 ? store.context.triggerFocusTargetRef : void 0,
				beforeContentFocusGuardRef: parent.type === void 0 ? store.context.beforeContentFocusGuardRef : void 0,
				children: element
			});
		});
		MenuPopup.displayName = "MenuPopup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/portal/MenuPortalContext.mjs
function useMenuPortalContext() {
	const value = import_react$8.useContext(MenuPortalContext);
	if (value === void 0) throw new Error("Base UI: <Menu.Portal> is missing.");
	return value;
}
var import_react$8, MenuPortalContext;
function init_MenuPortalContext() {
	return (init_MenuPortalContext = __esmMin((() => {
		import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuPortalContext = /*#__PURE__*/ import_react$8.createContext(void 0);
		MenuPortalContext.displayName = "MenuPortalContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/portal/MenuPortal.mjs
var import_react$7, import_jsx_runtime$3, MenuPortal;
function init_MenuPortal() {
	return (init_MenuPortal = __esmMin((() => {
		import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FloatingPortal();
		init_MenuRootContext();
		init_MenuPortalContext();
		import_jsx_runtime$3 = require_jsx_runtime();
		MenuPortal = /*#__PURE__*/ import_react$7.forwardRef(function MenuPortal(props, forwardedRef) {
			const { keepMounted = false, ...portalProps } = props;
			const { store, parent } = useMenuRootContext();
			if (!(store.useState("mounted") || keepMounted)) return null;
			const portalOwnerRole = parent.type === "menu" || parent.type === "menubar" ? "group" : void 0;
			return /*#__PURE__*/ (0, import_jsx_runtime$3.jsx)(MenuPortalContext.Provider, {
				value: keepMounted,
				children: /*#__PURE__*/ (0, import_jsx_runtime$3.jsx)(FloatingPortal, {
					ref: forwardedRef,
					...portalProps,
					portalOwnerRole
				})
			});
		});
		MenuPortal.displayName = "MenuPortal";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/positioner/MenuPositioner.mjs
var import_react$6, import_jsx_runtime$2, MenuPositioner;
function init_MenuPositioner() {
	return (init_MenuPositioner = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_inertValue();
		init_useIsoLayoutEffect();
		init_useTimeout();
		init_FloatingTree();
		init_MenuPositionerContext();
		init_MenuRootContext();
		init_useAnchorPositioning();
		init_CompositeList();
		init_InternalBackdrop();
		init_MenuPortalContext();
		init_constants();
		init_ContextMenuRootContext();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useAnimationsFinished();
		init_usePositioner();
		init_useAnchoredPopupScrollLock();
		import_jsx_runtime$2 = require_jsx_runtime();
		MenuPositioner = /*#__PURE__*/ import_react$6.forwardRef(function MenuPositioner(componentProps, forwardedRef) {
			const { anchor: anchorProp, positionMethod: positionMethodProp = "absolute", className, render, side, align: alignProp, sideOffset: sideOffsetProp = 0, alignOffset: alignOffsetProp = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance: collisionAvoidanceProp = DROPDOWN_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
			const { store } = useMenuRootContext();
			const keepMounted = useMenuPortalContext();
			const contextMenuContext = useContextMenuRootContext(true);
			const parent = store.useState("parent");
			const floatingRootContext = store.useState("floatingRootContext");
			const floatingTreeRoot = store.useState("floatingTreeRoot");
			const mounted = store.useState("mounted");
			const open = store.useState("open");
			const modal = store.useState("modal");
			const openMethod = store.useState("openMethod");
			const triggerElement = store.useState("activeTriggerElement");
			const transitionStatus = store.useState("transitionStatus");
			const positionerElement = store.useState("positionerElement");
			const instantType = store.useState("instantType");
			const adaptiveOrigin = store.useState("adaptiveOrigin");
			const lastOpenChangeReason = store.useState("lastOpenChangeReason");
			const floatingNodeId = store.useState("floatingNodeId");
			const floatingParentNodeId = store.useState("floatingParentNodeId");
			const domReference = floatingRootContext.useState("domReferenceElement");
			const previousTriggerRef = import_react$6.useRef(null);
			const runOnceAnimationsFinish = useAnimationsFinished(positionerElement);
			let anchor = anchorProp;
			let sideOffset = sideOffsetProp;
			let alignOffset = alignOffsetProp;
			let align = alignProp;
			let collisionAvoidance = collisionAvoidanceProp;
			if (parent.type === "context-menu") {
				anchor = anchorProp ?? parent.context?.anchor;
				align = align ?? "start";
				if (!side && align !== "center") {
					alignOffset = componentProps.alignOffset ?? 2;
					sideOffset = componentProps.sideOffset ?? -5;
				}
			}
			let computedSide = side;
			let computedAlign = align;
			if (parent.type === "menu") {
				computedSide = computedSide ?? "inline-end";
				computedAlign = computedAlign ?? "start";
				collisionAvoidance = componentProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE;
			} else if (parent.type === "menubar") {
				computedSide = computedSide ?? (parent.context.orientation === "vertical" ? "inline-end" : "bottom");
				computedAlign = computedAlign ?? "start";
			}
			const contextMenu = parent.type === "context-menu";
			const positioner = useAnchorPositioning({
				anchor,
				floatingRootContext,
				positionMethod: contextMenuContext ? "fixed" : positionMethodProp,
				mounted,
				side: computedSide,
				sideOffset,
				align: computedAlign,
				alignOffset,
				arrowPadding: contextMenu ? 0 : arrowPadding,
				collisionBoundary,
				collisionPadding,
				sticky,
				nodeId: floatingNodeId,
				keepMounted,
				disableAnchorTracking,
				collisionAvoidance,
				shift: contextMenu ? {
					crossAxis: !("side" in collisionAvoidance && collisionAvoidance.side === "flip"),
					rootBoundary: "layoutViewport"
				} : void 0,
				externalTree: floatingTreeRoot,
				adaptiveOrigin
			});
			import_react$6.useEffect(() => {
				function onMenuOpenChange(details) {
					if (details.open) {
						if (details.parentNodeId === floatingNodeId) store.set("hoverEnabled", false);
						if (details.nodeId !== floatingNodeId && details.parentNodeId === store.select("floatingParentNodeId")) store.setOpen(false, createChangeEventDetails(siblingOpen));
					}
				}
				floatingTreeRoot.events.on("menuopenchange", onMenuOpenChange);
				return () => {
					floatingTreeRoot.events.off("menuopenchange", onMenuOpenChange);
				};
			}, [
				store,
				floatingTreeRoot.events,
				floatingNodeId
			]);
			import_react$6.useEffect(() => {
				if (store.select("floatingParentNodeId") == null) return;
				function onParentClose(details) {
					if (details.open || details.nodeId !== store.select("floatingParentNodeId")) return;
					const reason = details.reason ?? "sibling-open";
					store.setOpen(false, createChangeEventDetails(reason));
				}
				floatingTreeRoot.events.on("menuopenchange", onParentClose);
				return () => {
					floatingTreeRoot.events.off("menuopenchange", onParentClose);
				};
			}, [floatingTreeRoot.events, store]);
			const closeTimeout = useTimeout();
			import_react$6.useEffect(() => {
				if (!open) closeTimeout.clear();
			}, [open, closeTimeout]);
			import_react$6.useEffect(() => {
				function onItemHover(event) {
					if (!open || event.nodeId !== store.select("floatingParentNodeId")) return;
					if (event.target && triggerElement && triggerElement !== event.target) {
						const delay = store.select("closeDelay");
						if (delay > 0) {
							if (!closeTimeout.isStarted()) closeTimeout.start(delay, () => {
								store.setOpen(false, createChangeEventDetails(siblingOpen));
							});
						} else store.setOpen(false, createChangeEventDetails(siblingOpen));
					} else closeTimeout.clear();
				}
				floatingTreeRoot.events.on("itemhover", onItemHover);
				return () => {
					floatingTreeRoot.events.off("itemhover", onItemHover);
				};
			}, [
				floatingTreeRoot.events,
				open,
				triggerElement,
				store,
				closeTimeout
			]);
			import_react$6.useEffect(() => {
				const eventDetails = {
					open,
					nodeId: floatingNodeId,
					parentNodeId: floatingParentNodeId,
					reason: store.select("lastOpenChangeReason")
				};
				floatingTreeRoot.events.emit("menuopenchange", eventDetails);
			}, [
				floatingTreeRoot.events,
				open,
				store,
				floatingNodeId,
				floatingParentNodeId
			]);
			useIsoLayoutEffect(() => {
				const currentTrigger = domReference;
				const previousTrigger = previousTriggerRef.current;
				if (currentTrigger) previousTriggerRef.current = currentTrigger;
				if (previousTrigger && currentTrigger && currentTrigger !== previousTrigger) {
					store.set("instantType", void 0);
					const abortController = new AbortController();
					runOnceAnimationsFinish(() => {
						store.set("instantType", "trigger-change");
					}, abortController.signal);
					return () => {
						abortController.abort();
					};
				}
			}, [
				domReference,
				runOnceAnimationsFinish,
				store
			]);
			const state = {
				open,
				side: positioner.side,
				align: positioner.align,
				anchorHidden: positioner.anchorHidden,
				nested: parent.type === "menu",
				instant: instantType
			};
			const menubarModal = parent.type === "menubar" && parent.context.modal;
			useAnchoredPopupScrollLock(open && (menubarModal || modal && lastOpenChangeReason !== "trigger-hover"), openMethod === "touch", positionerElement, triggerElement);
			const element = usePositioner(componentProps, state, {
				styles: positioner.positionerStyles,
				transitionStatus,
				props: elementProps,
				refs: [forwardedRef, store.useStateSetter("positionerElement")],
				hidden: !mounted,
				inert: !open
			});
			const shouldRenderBackdrop = mounted && parent.type !== "menu" && (parent.type !== "menubar" && modal && lastOpenChangeReason !== "trigger-hover" || parent.type === "menubar" && parent.context.modal);
			let backdropCutout = null;
			if (parent.type === "menubar") backdropCutout = parent.context.contentElement;
			else if (parent.type === void 0) backdropCutout = triggerElement;
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsxs)(MenuPositionerContext.Provider, {
				value: positioner,
				children: [shouldRenderBackdrop && /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(InternalBackdrop, {
					ref: parent.type === "context-menu" || parent.type === "nested-context-menu" ? parent.context.internalBackdropRef : null,
					inert: inertValue(!open),
					cutout: backdropCutout
				}), /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(FloatingNode, {
					id: floatingNodeId,
					children: /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(CompositeList, {
						elementsRef: store.context.itemDomElements,
						labelsRef: store.context.itemLabels,
						children: element
					})
				})]
			});
		});
		MenuPositioner.displayName = "MenuPositioner";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menubar/MenubarContext.mjs
function useMenubarContext(optional) {
	const context = import_react$5.useContext(MenubarContext);
	if (context === null && !optional) throw new Error("Base UI: MenubarContext is missing. Menubar parts must be placed within <Menubar>.");
	return context;
}
var import_react$5, MenubarContext;
function init_MenubarContext() {
	return (init_MenubarContext = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenubarContext = /*#__PURE__*/ import_react$5.createContext(null);
		MenubarContext.displayName = "MenubarContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/store/MenuStore.mjs
function createInitialContext(triggerElements) {
	return {
		positionerRef: /*#__PURE__*/ import_react$4.createRef(),
		popupRef: /*#__PURE__*/ import_react$4.createRef(),
		typingRef: { current: false },
		itemDomElements: { current: [] },
		itemLabels: { current: [] },
		allowMouseUpTriggerRef: { current: false },
		triggerFocusTargetRef: /*#__PURE__*/ import_react$4.createRef(),
		beforeContentFocusGuardRef: /*#__PURE__*/ import_react$4.createRef(),
		onOpenChangeComplete: void 0,
		triggerElements
	};
}
function createInitialState(triggerElements, floatingId, nested = false, initialState) {
	return {
		...createInitialPopupStoreState(triggerElements, floatingId, nested),
		disabled: false,
		modal: true,
		openMethod: null,
		allowMouseEnter: false,
		highlightItemOnHover: true,
		parent: { type: void 0 },
		rootId: void 0,
		activeIndex: null,
		hoverEnabled: true,
		instantType: void 0,
		openChangeReason: null,
		floatingTreeRoot: new FloatingTreeStore(),
		floatingNodeId: void 0,
		floatingParentNodeId: null,
		itemProps: EMPTY_OBJECT,
		keyboardEventRelay: void 0,
		closeDelay: 0,
		adaptiveOrigin: void 0,
		...initialState
	};
}
var import_react$4, selectors, MenuStore;
function init_MenuStore() {
	return (init_MenuStore = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_ReactStore();
		init_empty();
		init_FloatingTreeStore();
		init_store(), init_popupTriggerMap();
		selectors = {
			...popupStoreSelectors,
			disabled: (state) => state.parent.type === "menubar" ? state.parent.context.disabled || state.disabled : state.disabled,
			modal: (state) => (state.parent.type === void 0 || state.parent.type === "context-menu") && (state.modal ?? true),
			openMethod: (state) => state.openMethod,
			allowMouseEnter: (state) => state.allowMouseEnter,
			highlightItemOnHover: (state) => state.highlightItemOnHover,
			parent: (state) => state.parent,
			rootId: (state) => {
				if (state.parent.type === "menu") return state.parent.store.select("rootId");
				return state.parent.type !== void 0 ? state.parent.context.rootId : state.rootId;
			},
			activeIndex: (state) => state.activeIndex,
			isActive: (state, itemIndex) => state.activeIndex === itemIndex,
			hoverEnabled: (state) => state.hoverEnabled,
			instantType: (state) => state.instantType,
			lastOpenChangeReason: (state) => state.openChangeReason,
			floatingTreeRoot: (state) => {
				if (state.parent.type === "menu") return state.parent.store.select("floatingTreeRoot");
				return state.floatingTreeRoot;
			},
			floatingNodeId: (state) => state.floatingNodeId,
			floatingParentNodeId: (state) => state.floatingParentNodeId,
			itemProps: (state) => state.itemProps,
			closeDelay: (state) => state.closeDelay,
			adaptiveOrigin: (state) => state.adaptiveOrigin,
			keyboardEventRelay: (state) => {
				if (state.keyboardEventRelay) return state.keyboardEventRelay;
				if (state.parent.type === "menu") return state.parent.store.select("keyboardEventRelay");
			}
		};
		MenuStore = class extends ReactStore {
			constructor(initialState, floatingId, nested = false) {
				const triggerElements = new PopupTriggerMap();
				const state = createInitialState(triggerElements, floatingId, nested, initialState);
				super(state, createInitialContext(triggerElements), selectors);
				this.unsubscribeParentListener = this.observe("parent", (parent) => {
					this.unsubscribeParentListener?.();
					if (parent.type === "menu") {
						let rootId = parent.store.select("rootId");
						let floatingTreeRoot = parent.store.select("floatingTreeRoot");
						let keyboardEventRelay = parent.store.select("keyboardEventRelay");
						this.unsubscribeParentListener = parent.store.subscribe(() => {
							const nextRootId = parent.store.select("rootId");
							const nextFloatingTreeRoot = parent.store.select("floatingTreeRoot");
							const nextKeyboardEventRelay = parent.store.select("keyboardEventRelay");
							if (rootId === nextRootId && floatingTreeRoot === nextFloatingTreeRoot && keyboardEventRelay === nextKeyboardEventRelay) return;
							rootId = nextRootId;
							floatingTreeRoot = nextFloatingTreeRoot;
							keyboardEventRelay = nextKeyboardEventRelay;
							this.notifyAll();
						});
						this.context.allowMouseUpTriggerRef = parent.store.context.allowMouseUpTriggerRef;
						return;
					}
					if (parent.type !== void 0) this.context.allowMouseUpTriggerRef = parent.context.allowMouseUpTriggerRef;
					this.unsubscribeParentListener = null;
				});
			}
			setOpen(open, eventDetails) {
				this.state.floatingRootContext.context.events.emit("setOpen", {
					open,
					eventDetails
				});
			}
			unsubscribeParentListener = null;
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRootContext.mjs
function useMenuSubmenuRootContext() {
	return import_react$3.useContext(MenuSubmenuRootContext);
}
var import_react$3, MenuSubmenuRootContext;
function init_MenuSubmenuRootContext() {
	return (init_MenuSubmenuRootContext = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuSubmenuRootContext = /*#__PURE__*/ import_react$3.createContext(void 0);
		MenuSubmenuRootContext.displayName = "MenuSubmenuRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/root/MenuRoot.mjs
function useMenuRootStore(initialState, floatingId, nested) {
	return useRefWithInit(() => new MenuStore(initialState, floatingId, nested)).current;
}
var import_react$2, import_jsx_runtime$1, MenuRoot;
function init_MenuRoot() {
	return (init_MenuRoot = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useTimeout();
		init_useStableCallback();
		init_useId();
		init_useIsoLayoutEffect();
		init_useRefWithInit();
		init_empty();
		init_fastHooks();
		init_FloatingTree(), init_useDismiss(), init_useListNavigation(), init_useTypeahead(), init_useSyncedFloatingRootContext();
		init_MenuRootContext();
		init_MenubarContext();
		init_constants();
		init_DirectionContext();
		init_useOpenInteractionType();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_ContextMenuRootContext();
		init_mergeProps();
		init_useAnimationsFinished();
		init_MenuStore();
		init_popupStoreUtils();
		init_MenuSubmenuRootContext();
		import_jsx_runtime$1 = require_jsx_runtime();
		MenuRoot = fastComponent(function MenuRoot(props) {
			const { children, open: openProp, onOpenChange, onOpenChangeComplete, defaultOpen = false, disabled: disabledProp = false, modal: modalProp, loopFocus = true, orientation = "vertical", actionsRef, closeParentOnEsc = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, highlightItemOnHover = true } = props;
			const contextMenuContext = useContextMenuRootContext(true);
			const parentMenuRootContext = useMenuRootContext(true);
			const menubarContext = useMenubarContext(true);
			const isSubmenu = useMenuSubmenuRootContext();
			const parentFromContext = import_react$2.useMemo(() => {
				if (isSubmenu && parentMenuRootContext) return {
					type: "menu",
					store: parentMenuRootContext.store
				};
				if (menubarContext) return {
					type: "menubar",
					context: menubarContext
				};
				if (contextMenuContext && !parentMenuRootContext) return {
					type: "context-menu",
					context: contextMenuContext
				};
				return { type: void 0 };
			}, [
				contextMenuContext,
				parentMenuRootContext,
				menubarContext,
				isSubmenu
			]);
			const rootId = useId();
			const floatingId = useId();
			const floatingParentNodeIdFromContext = useFloatingParentNodeId();
			const parentMenuStore = parentFromContext.type === "menu" ? parentFromContext.store : void 0;
			const animateInitialOpen = (openProp ?? defaultOpen) && parentMenuStore?.state.transitionStatus === "starting";
			const seededInstantType = useRefWithInit(() => animateInitialOpen ? parentMenuStore?.state.instantType : void 0).current;
			const store = useMenuRootStore({
				open: defaultOpen,
				openProp,
				activeTriggerId: defaultTriggerIdProp,
				triggerIdProp,
				parent: parentFromContext,
				disabled: disabledProp,
				highlightItemOnHover,
				modal: parentFromContext.type === void 0 ? modalProp : void 0,
				rootId,
				instantType: seededInstantType
			}, floatingId, floatingParentNodeIdFromContext != null);
			store.useControlledProp("openProp", openProp);
			store.useControlledProp("triggerIdProp", triggerIdProp);
			store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
			const floatingTreeRoot = store.useState("floatingTreeRoot");
			const floatingNodeIdFromContext = useFloatingNodeId(floatingTreeRoot);
			const open = store.useState("open");
			const activeTriggerElement = store.useState("activeTriggerElement");
			const positionerElement = store.useState("positionerElement");
			const hoverEnabled = store.useState("hoverEnabled");
			const disabled = store.useState("disabled");
			const lastOpenChangeReason = store.useState("lastOpenChangeReason");
			const parent = store.useState("parent");
			const activeIndex = store.useState("activeIndex");
			const payload = store.useState("payload");
			const floatingParentNodeId = store.useState("floatingParentNodeId");
			const openEventRef = import_react$2.useRef(null);
			const allowOutsidePressDismissalRef = import_react$2.useRef(parent.type !== "context-menu");
			const allowOutsidePressDismissalTimeout = useTimeout();
			const allowTouchToCloseRef = import_react$2.useRef(true);
			const allowTouchToCloseTimeout = useTimeout();
			const nested = floatingParentNodeId != null;
			if (parent.type !== void 0 && modalProp !== void 0) console.warn("Base UI: The `modal` prop is not supported on nested menus. It will be ignored.");
			const { openMethod, triggerProps: interactionTypeProps } = useOpenInteractionType(open);
			store.useSyncedValues({
				disabled: disabledProp,
				highlightItemOnHover,
				modal: parent.type === void 0 ? modalProp : void 0,
				openMethod,
				rootId
			});
			useImplicitActiveTrigger(store);
			const { forceUnmount, transitionStatus } = useOpenStateTransitions(open, store, () => {
				store.set("allowMouseEnter", false);
			}, animateInitialOpen);
			const runOnceAnimationsFinish = useAnimationsFinished(store.context.popupRef);
			import_react$2.useEffect(() => {
				if (seededInstantType === void 0) return;
				const clearSeededInstantType = () => {
					if (store.state.instantType === seededInstantType) store.set("instantType", void 0);
				};
				if (!open) {
					clearSeededInstantType();
					return;
				}
				if (transitionStatus !== void 0) return;
				if (store.context.popupRef.current == null) {
					clearSeededInstantType();
					return;
				}
				const abortController = new AbortController();
				runOnceAnimationsFinish(clearSeededInstantType, abortController.signal);
				return () => {
					abortController.abort();
				};
			}, [
				seededInstantType,
				open,
				transitionStatus,
				runOnceAnimationsFinish,
				store
			]);
			useIsoLayoutEffect(() => {
				if (contextMenuContext && !parentMenuRootContext) store.update({
					parent: {
						type: "context-menu",
						context: contextMenuContext
					},
					floatingNodeId: floatingNodeIdFromContext,
					floatingParentNodeId: floatingParentNodeIdFromContext
				});
				else if (parentMenuRootContext) store.update({
					floatingNodeId: floatingNodeIdFromContext,
					floatingParentNodeId: floatingParentNodeIdFromContext
				});
			}, [
				contextMenuContext,
				parentMenuRootContext,
				floatingNodeIdFromContext,
				floatingParentNodeIdFromContext,
				store
			]);
			import_react$2.useEffect(() => {
				if (!open) openEventRef.current = null;
				if (parent.type !== "context-menu") return;
				if (!open) {
					allowOutsidePressDismissalTimeout.clear();
					allowOutsidePressDismissalRef.current = false;
					return;
				}
				allowOutsidePressDismissalTimeout.start(500, () => {
					allowOutsidePressDismissalRef.current = true;
				});
			}, [
				allowOutsidePressDismissalTimeout,
				open,
				parent.type
			]);
			useIsoLayoutEffect(() => {
				if (!open && !hoverEnabled) store.set("hoverEnabled", true);
			}, [
				open,
				hoverEnabled,
				store
			]);
			const setOpen = useStableCallback((nextOpen, eventDetails) => {
				const reason = eventDetails.reason;
				if (!nextOpen && !store.select("open")) return;
				if (open === nextOpen && eventDetails.trigger === activeTriggerElement && lastOpenChangeReason === reason) return;
				const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
				if (!nextOpen && eventDetails.trigger == null) eventDetails.trigger = activeTriggerElement ?? void 0;
				onOpenChange?.(nextOpen, eventDetails);
				if (eventDetails.isCanceled) return;
				store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
				const nativeEvent = eventDetails.event;
				if (nextOpen === false && nativeEvent?.type === "click" && nativeEvent.pointerType === "touch" && !allowTouchToCloseRef.current) return;
				if (nextOpen && reason === "trigger-focus") {
					allowTouchToCloseRef.current = false;
					allowTouchToCloseTimeout.start(300, () => {
						allowTouchToCloseRef.current = true;
					});
				} else {
					allowTouchToCloseRef.current = true;
					allowTouchToCloseTimeout.clear();
				}
				const isKeyboardClick = (reason === "trigger-press" || reason === "item-press") && nativeEvent.detail === 0;
				const isDismissClose = !nextOpen && (reason === "escape-key" || reason == null);
				openEventRef.current = eventDetails.event;
				const popupOpenState = createPopupOpenState(store.state, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
				popupOpenState.openChangeReason = reason;
				if (parent.type === "menubar" && (reason === "trigger-focus" || reason === "focus-out" || reason === "trigger-hover" || reason === "list-navigation" || reason === "sibling-open")) popupOpenState.instantType = "group";
				else if (isKeyboardClick || isDismissClose) popupOpenState.instantType = isKeyboardClick ? "click" : "dismiss";
				else popupOpenState.instantType = void 0;
				store.update(popupOpenState);
			});
			const floatingRootContext = useSyncedFloatingRootContext({
				popupStore: store,
				floatingRootContext: store.state.floatingRootContext,
				floatingId,
				nested: floatingParentNodeIdFromContext != null,
				onOpenChange: setOpen
			});
			const floatingEvents = floatingRootContext.context.events;
			useIsoLayoutEffect(() => {
				const handleSetOpenEvent = ({ open: nextOpen, eventDetails }) => setOpen(nextOpen, eventDetails);
				floatingEvents.on("setOpen", handleSetOpenEvent);
				return () => {
					floatingEvents?.off("setOpen", handleSetOpenEvent);
				};
			}, [floatingEvents, setOpen]);
			const handleImperativeClose = import_react$2.useCallback(() => {
				store.setOpen(false, createChangeEventDetails(imperativeAction));
			}, [store]);
			import_react$2.useImperativeHandle(actionsRef, () => ({
				unmount: forceUnmount,
				close: handleImperativeClose
			}), [forceUnmount, handleImperativeClose]);
			let ctx;
			if (parent.type === "context-menu") ctx = parent.context;
			import_react$2.useImperativeHandle(ctx?.positionerRef, () => positionerElement, [positionerElement]);
			import_react$2.useImperativeHandle(ctx?.actionsRef, () => ({ setOpen }), [setOpen]);
			const dismiss = useDismiss(floatingRootContext, {
				enabled: !disabled,
				bubbles: { escapeKey: closeParentOnEsc && parent.type === "menu" },
				outsidePress() {
					if (parent.type !== "context-menu" || openEventRef.current?.type === "contextmenu") return true;
					return allowOutsidePressDismissalRef.current;
				},
				externalTree: nested ? floatingTreeRoot : void 0
			});
			const direction = useDirection();
			const setActiveIndex = import_react$2.useCallback((index) => {
				if (store.select("activeIndex") === index) return;
				store.set("activeIndex", index);
			}, [store]);
			const listNavigation$1 = useListNavigation(floatingRootContext, {
				enabled: !disabled,
				listRef: store.context.itemDomElements,
				activeIndex,
				nested: parent.type !== void 0,
				loopFocus,
				orientation,
				parentOrientation: parent.type === "menubar" ? parent.context.orientation : void 0,
				rtl: direction === "rtl",
				disabledIndices: EMPTY_ARRAY,
				onNavigate: setActiveIndex,
				openOnArrowKeyDown: parent.type !== "context-menu",
				externalTree: nested ? floatingTreeRoot : void 0,
				focusItemOnHover: highlightItemOnHover
			});
			const onTyping = import_react$2.useCallback((nextTyping) => {
				store.context.typingRef.current = nextTyping;
			}, [store]);
			const typeahead = useTypeahead(floatingRootContext, {
				enabled: !disabled,
				listRef: store.context.itemLabels,
				elementsRef: store.context.itemDomElements,
				activeIndex,
				resetMs: 500,
				onMatch: (index) => {
					if (open && index !== activeIndex) store.set("activeIndex", index);
				},
				onTyping
			});
			const activeTriggerProps = import_react$2.useMemo(() => {
				const mergedProps = mergeProps(typeahead.reference, listNavigation$1.reference, dismiss.reference, { onMouseMove() {
					store.set("allowMouseEnter", true);
				} }, interactionTypeProps);
				mergedProps["aria-haspopup"] = "menu";
				mergedProps["aria-expanded"] = open;
				return mergedProps;
			}, [
				store,
				typeahead.reference,
				listNavigation$1.reference,
				dismiss.reference,
				interactionTypeProps,
				open
			]);
			const inactiveTriggerProps = import_react$2.useMemo(() => {
				const mergedProps = mergeProps(listNavigation$1.trigger, dismiss.trigger, interactionTypeProps);
				mergedProps["aria-haspopup"] = "menu";
				mergedProps["aria-expanded"] = false;
				return mergedProps;
			}, [
				listNavigation$1.trigger,
				dismiss.trigger,
				interactionTypeProps
			]);
			useRefWithInit(() => {
				store.update({ inactiveTriggerProps });
				return null;
			});
			const popupProps = import_react$2.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, {
				id: floatingId,
				role: "menu",
				"aria-orientation": orientation === "horizontal" ? "horizontal" : void 0,
				"aria-labelledby": activeTriggerElement?.id,
				onMouseMove() {
					store.set("allowMouseEnter", true);
					if (parent.type === "menu") store.set("hoverEnabled", false);
				},
				onClick() {
					if (store.select("hoverEnabled")) store.set("hoverEnabled", false);
				},
				onKeyDown(event) {
					const relay = store.select("keyboardEventRelay");
					if (relay && !event.isPropagationStopped()) relay(event);
				}
			}, typeahead.floating, listNavigation$1.floating, dismiss.floating), [
				activeTriggerElement,
				floatingId,
				orientation,
				parent.type,
				store,
				typeahead.floating,
				listNavigation$1.floating,
				dismiss.floating
			]);
			const itemProps = listNavigation$1.item ?? EMPTY_OBJECT;
			usePopupInteractionProps(store, {
				floatingRootContext,
				activeTriggerProps,
				inactiveTriggerProps,
				popupProps,
				itemProps
			});
			const context = import_react$2.useMemo(() => ({
				store,
				parent: parentFromContext
			}), [store, parentFromContext]);
			const content = /*#__PURE__*/ (0, import_jsx_runtime$1.jsxs)(MenuRootContext.Provider, {
				value: context,
				children: [handle && /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(PopupHandleAttachment, {
					handle,
					store
				}), typeof children === "function" ? children({ payload }) : children]
			});
			if (parent.type === void 0 || parent.type === "context-menu") return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(FloatingTree, {
				externalTree: floatingTreeRoot,
				children: content
			});
			return content;
		});
		MenuRoot.displayName = "MenuRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/utils/findRootOwnerId.mjs
function findRootOwnerId(node) {
	if (isHTMLElement(node) && node.hasAttribute("data-rootownerid")) return node.getAttribute("data-rootownerid");
	if (isLastTraversableNode(node)) return;
	return findRootOwnerId(getParentNode(node));
}
function init_findRootOwnerId() {
	return (init_findRootOwnerId = __esmMin((() => {
		init_floating_ui_utils_dom();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/useMixedToggleClickHandler.mjs
/**
* Returns `click` and `mousedown` handlers that fix the behavior of triggers of popups that are toggled by different events.
* For example, a button that opens a popup on mousedown and closes it on click.
* This hook prevents the popup from closing immediately after the mouse button is released.
*/
function useMixedToggleClickHandler(params) {
	const { enabled = true, mouseDownAction, open } = params;
	const ignoreClickRef = import_react$1.useRef(false);
	return import_react$1.useMemo(() => {
		if (!enabled) return EMPTY_OBJECT;
		return {
			onMouseDown: (event) => {
				if (mouseDownAction === "open" && !open || mouseDownAction === "close" && open) {
					ignoreClickRef.current = true;
					ownerDocument(event.currentTarget).addEventListener("click", () => {
						ignoreClickRef.current = false;
					}, { once: true });
				}
			},
			onClick: (event) => {
				if (ignoreClickRef.current) {
					ignoreClickRef.current = false;
					event.preventBaseUIHandler();
				}
			}
		};
	}, [
		enabled,
		mouseDownAction,
		open
	]);
}
var import_react$1;
function init_useMixedToggleClickHandler() {
	return (init_useMixedToggleClickHandler = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/trigger/MenuTrigger.mjs
/**
* Determines whether to ignore clicks after a hover-open.
*/
function useStickIfOpen(open, openReason) {
	const stickIfOpenTimeout = useTimeout();
	const [stickIfOpen, setStickIfOpen] = import_react.useState(false);
	useIsoLayoutEffect(() => {
		if (open && openReason === "trigger-hover") {
			setStickIfOpen(true);
			stickIfOpenTimeout.start(500, () => {
				setStickIfOpen(false);
			});
		} else if (!open) {
			stickIfOpenTimeout.clear();
			setStickIfOpen(false);
		}
	}, [
		open,
		openReason,
		stickIfOpenTimeout
	]);
	return stickIfOpen;
}
function useMenuParent() {
	const menubarContext = useMenubarContext(true);
	return import_react.useMemo(() => {
		if (menubarContext) return {
			type: "menubar",
			context: menubarContext
		};
		return { type: void 0 };
	}, [menubarContext]);
}
var import_react, import_jsx_runtime, MenuTrigger;
function init_MenuTrigger() {
	return (init_MenuTrigger = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useTimeout();
		init_fastHooks();
		init_useStableCallback();
		init_useIsoLayoutEffect();
		init_empty();
		init_safePolygon(), init_useClick(), init_FloatingTree(), init_useFocus(), init_useHoverReferenceInteraction();
		init_FloatingTreeStore();
		init_shadowDom();
		init_MenuRootContext();
		init_popupStateMapping();
		init_useRenderElement();
		init_useButton();
		init_getPseudoElementBounds();
		init_CompositeItem();
		init_CompositeRootContext();
		init_findRootOwnerId();
		init_usePopupHandleStore(), init_popupStoreUtils();
		init_useTriggerFocusGuards();
		init_useBaseUiId();
		init_reason_parts();
		init_useMixedToggleClickHandler();
		init_MenubarContext();
		init_constants();
		init_FocusGuard();
		init_mergeProps();
		import_jsx_runtime = require_jsx_runtime();
		MenuTrigger = fastComponentRef(function MenuTrigger(componentProps, forwardedRef) {
			const { render, className, style, disabled: disabledProp = false, nativeButton = true, id: idProp, openOnHover: openOnHoverProp, delay = 100, closeDelay = 0, handle, payload, ...elementProps } = componentProps;
			const rootContext = useMenuRootContext(true);
			const store = usePopupHandleStore(handle) ?? rootContext?.store;
			if (!store) throw new Error("Base UI: <Menu.Trigger> must be either used within a <Menu.Root> component or provided with a handle.");
			const thisTriggerId = useBaseUiId(idProp);
			const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
			const floatingRootContext = store.useState("floatingRootContext");
			const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
			const popupId = store.useState("triggerPopupId", thisTriggerId);
			const triggerElementRef = import_react.useRef(null);
			const parent = useMenuParent();
			const compositeRootContext = useCompositeRootContext(true);
			const floatingTreeRootFromContext = useFloatingTree();
			const floatingTreeRoot = import_react.useMemo(() => {
				return floatingTreeRootFromContext ?? new FloatingTreeStore();
			}, [floatingTreeRootFromContext]);
			const floatingNodeId = useFloatingNodeId(floatingTreeRoot);
			const floatingParentNodeId = useFloatingParentNodeId();
			const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
				payload,
				closeDelay,
				parent,
				floatingTreeRoot,
				floatingNodeId,
				floatingParentNodeId,
				keyboardEventRelay: compositeRootContext?.relayKeyboardEvent
			});
			const isInMenubar = parent.type === "menubar";
			const rootDisabled = store.useState("disabled");
			const disabled = disabledProp || rootDisabled || isInMenubar && parent.context.disabled;
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton
			});
			import_react.useEffect(() => {
				if (!isOpenedByThisTrigger && parent.type === void 0) store.context.allowMouseUpTriggerRef.current = false;
			}, [
				store,
				isOpenedByThisTrigger,
				parent.type
			]);
			const triggerRef = import_react.useRef(null);
			const allowMouseUpTriggerTimeout = useTimeout();
			const handleDocumentMouseUp = useStableCallback((mouseEvent) => {
				if (!triggerRef.current) return;
				allowMouseUpTriggerTimeout.clear();
				store.context.allowMouseUpTriggerRef.current = false;
				const mouseUpTarget = mouseEvent.target;
				if (contains(triggerRef.current, mouseUpTarget) || contains(store.select("positionerElement"), mouseUpTarget) || mouseUpTarget === triggerRef.current) return;
				if (mouseUpTarget != null && findRootOwnerId(mouseUpTarget) === store.select("rootId")) return;
				if (isMouseWithinBounds(mouseEvent, triggerRef.current)) return;
				floatingTreeRoot.events.emit("close", {
					domEvent: mouseEvent,
					reason: cancelOpen
				});
			});
			import_react.useEffect(() => {
				if (isOpenedByThisTrigger && store.select("lastOpenChangeReason") === "trigger-hover") ownerDocument(triggerRef.current).addEventListener("mouseup", handleDocumentMouseUp, { once: true });
			}, [
				isOpenedByThisTrigger,
				handleDocumentMouseUp,
				store
			]);
			const parentMenubarHasSubmenuOpen = isInMenubar && parent.context.hasSubmenuOpen;
			const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
				enabled: (openOnHoverProp ?? parentMenubarHasSubmenuOpen) && !disabled && (!isInMenubar || parentMenubarHasSubmenuOpen && !isMountedByThisTrigger),
				handleClose: safePolygon({ blockPointerEvents: !isInMenubar }),
				mouseOnly: true,
				move: false,
				restMs: parent.type === void 0 ? delay : void 0,
				delay: { close: closeDelay },
				triggerElementRef,
				externalTree: floatingTreeRoot,
				isActiveTrigger: isTriggerActive,
				isClosing: () => store.select("transitionStatus") === "ending"
			});
			const stickIfOpen = useStickIfOpen(isOpenedByThisTrigger, store.select("lastOpenChangeReason"));
			const click = useClick(floatingRootContext, {
				enabled: !disabled,
				event: isOpenedByThisTrigger && isInMenubar ? "click" : "mousedown",
				toggle: true,
				ignoreMouse: false,
				stickIfOpen: parent.type === void 0 ? stickIfOpen : false
			});
			const focus = useFocus(floatingRootContext, { enabled: !disabled && parentMenubarHasSubmenuOpen });
			const mixedToggleHandlers = useMixedToggleClickHandler({
				open: isOpenedByThisTrigger,
				enabled: isInMenubar,
				mouseDownAction: "open"
			});
			const localInteractionProps = import_react.useMemo(() => mergeProps(focus.reference, click.reference), [focus.reference, click.reference]);
			const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
			const { preFocusGuardRef, handlePreFocusGuardFocus, handleFocusTargetFocus } = useTriggerFocusGuards(store, triggerElementRef);
			const state = {
				disabled,
				open: isOpenedByThisTrigger
			};
			const ref = [
				triggerRef,
				forwardedRef,
				buttonRef,
				registerTrigger,
				triggerElementRef
			];
			const props = [
				localInteractionProps,
				hoverProps ?? EMPTY_OBJECT,
				rootTriggerProps,
				{
					"aria-haspopup": "menu",
					"aria-controls": popupId,
					id: thisTriggerId,
					onMouseDown: (event) => {
						if (store.select("open")) return;
						allowMouseUpTriggerTimeout.start(200, () => {
							store.context.allowMouseUpTriggerRef.current = true;
						});
						ownerDocument(event.currentTarget).addEventListener("mouseup", handleDocumentMouseUp, { once: true });
					}
				},
				isInMenubar ? { role: "menuitem" } : {},
				mixedToggleHandlers,
				elementProps,
				getButtonProps
			];
			const element = useRenderElement("button", componentProps, {
				enabled: !isInMenubar,
				stateAttributesMapping: pressableTriggerOpenStateMapping,
				state,
				ref,
				props
			});
			if (isInMenubar) return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CompositeItem, {
				tag: "button",
				render,
				className,
				style,
				state,
				refs: ref,
				props,
				stateAttributesMapping: pressableTriggerOpenStateMapping
			});
			if (isOpenedByThisTrigger) return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
				/*#__PURE__*/ (0, import_jsx_runtime.jsx)(FocusGuard, {
					ref: preFocusGuardRef,
					onFocus: handlePreFocusGuardFocus
				}, `${thisTriggerId}-pre-focus-guard`),
				/*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: element }, thisTriggerId),
				/*#__PURE__*/ (0, import_jsx_runtime.jsx)(FocusGuard, {
					ref: store.context.triggerFocusTargetRef,
					onFocus: handleFocusTargetFocus
				}, `${thisTriggerId}-post-focus-guard`)
			] });
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: element }, thisTriggerId);
		});
		MenuTrigger.displayName = "MenuTrigger";
	})))();
}
//#endregion
export { init_MenuPositionerContext as C, useMenuRootContext as S, init_useMenuItem as _, MenuSubmenuRootContext as a, useMenuItemCommonProps as b, MenuPositioner as c, init_MenuPortal as d, MenuPopup as f, REGULAR_ITEM as g, init_MenuItem as h, init_MenuRoot as i, init_MenuPositioner as l, MenuItem as m, init_MenuTrigger as n, init_MenuSubmenuRootContext as o, init_MenuPopup as p, MenuRoot as r, useMenuSubmenuRootContext as s, MenuTrigger as t, MenuPortal as u, useMenuItem as v, useMenuPositionerContext as w, init_MenuRootContext as x, init_useMenuItemCommonProps as y };
