import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { S as useRefWithInit, b as useMergedRefs, f as init_empty, i as init_mergeProps, l as EMPTY_ARRAY, n as unwrapLazyRenderProp, o as mergeProps, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT, x as init_useRefWithInit, y as init_useMergedRefs } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, c as useAnimationsFinished, o as useOpenChangeComplete, s as init_useAnimationsFinished } from "./useTransitionStatus-DtGN_KnE.js";
import { n as init_useTimeout, r as useTimeout } from "./useTimeout-Cl_2zLqB.js";
import { i as init_CompositeList, n as useCompositeListItem, r as CompositeList, t as init_useCompositeListItem } from "./useCompositeListItem-DCUBNr8F.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, S as siblingOpen, g as keyboard, h as itemPress, k as createGenericEventDetails, l as imperativeAction, t as cancelOpen, u as init_reason_parts, y as none } from "./reason-parts-0ghxNVBE.js";
import { c as getParentNode, m as isLastTraversableNode, p as isHTMLElement, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { i as init_dispatchClickWithModifiers, n as useButton, o as init_CompositeRootContext, r as dispatchClickWithModifiers, s as useCompositeRootContext, t as init_useButton } from "./useButton-jJ_7clep.js";
import { n as ownerDocument } from "./owner-CcC_2sZ3.js";
import { N as mac, j as init_os, n as init_DirectionContext, r as useDirection } from "./DirectionContext-BIiMId1B.js";
import { $ as DROPDOWN_COLLISION_AVOIDANCE, A as useTriggerDataForwarding, At as popupTransitionStateMapping, B as init_FloatingTree, C as createPopupOpenState, D as usePopupInteractionProps, E as useOpenStateTransitions, F as useSyncedFloatingRootContext, G as init_FloatingTreeStore, Gt as webkit, H as useFloatingParentNodeId, I as init_useDismiss, K as FloatingPortal, L as useDismiss, Ot as init_popupStateMapping, P as init_useSyncedFloatingRootContext, R as FloatingNode, T as useImplicitActiveTrigger, U as useFloatingTree, V as useFloatingNodeId, W as FloatingTreeStore, Wt as init_engine, _ as init_popupTriggerMap, a as getDisabledMountTransitionStyles, c as useAnchorPositioning, d as ReactStore, et as POPUP_COLLISION_AVOIDANCE, f as init_ReactStore, g as PopupTriggerMap, gt as init_FocusGuard, h as init_fastHooks, ht as FocusGuard, i as usePositioner, jt as pressableTriggerOpenStateMapping, m as fastComponentRef, o as init_getDisabledMountTransitionStyles, p as fastComponent, q as init_FloatingPortal, r as init_usePositioner, s as init_useAnchorPositioning, tt as init_constants, v as FOCUSABLE_POPUP_PROPS, w as init_popupStoreUtils, x as attachPreventUnmountOnClose, y as PopupHandleAttachment, z as FloatingTree } from "./DirectionProvider-ijBUoTP5.js";
import { a as init_InternalBackdrop, c as FloatingFocusManager, i as InternalBackdrop, l as init_FloatingFocusManager, n as useOpenInteractionType, o as init_useClick, s as useClick, t as init_useOpenInteractionType } from "./useOpenInteractionType-BJdBBuIW.js";
import { a as init_shadowDom, r as contains } from "./shadowDom-C1kYxCnm.js";
import { a as init_useHoverFloatingInteraction, d as createInitialPopupStoreState, f as init_store, i as useHoverReferenceInteraction, l as init_usePopupHandleStore, n as safePolygon, o as useHoverFloatingInteraction, p as popupStoreSelectors, r as init_useHoverReferenceInteraction, t as init_safePolygon, u as usePopupHandleStore } from "./safePolygon-vycgRCWQ.js";
import { n as useFocus, t as init_useFocus } from "./useFocus-CTxmQqFm.js";
import { n as useListNavigation, t as init_useListNavigation } from "./useListNavigation-l0jvcRhg.js";
import { i as useTypeahead, n as isMouseWithinBounds, r as init_useTypeahead, t as init_getPseudoElementBounds } from "./getPseudoElementBounds-BakqJPl0.js";
import { a as COMPOSITE_KEYS, l as init_composite } from "./composite-BPnCh7aE.js";
import { n as init_inertValue, t as inertValue } from "./inertValue-Ccnqb9CT.js";
import { n as init_getHighlightReason, t as getHighlightReason } from "./getHighlightReason-oyOUFqFP.js";
import { n as useAnchoredPopupScrollLock, t as init_useAnchoredPopupScrollLock } from "./useAnchoredPopupScrollLock-DkQ-Xde2.js";
import { n as useToolbarRootContext, t as init_ToolbarRootContext } from "./ToolbarRootContext-rWAF1PNW.js";
import { i as useTriggerSwitchTransition, n as useTriggerFocusGuards, r as init_useTriggerSwitchTransition, t as init_useTriggerFocusGuards } from "./useTriggerFocusGuards-CAWvAoW8.js";
import { n as init_CompositeItem, t as CompositeItem } from "./CompositeItem-MVJL3h4X.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/context-menu/root/ContextMenuRootContext.mjs
function useContextMenuRootContext(optional = true) {
	const context = import_react$19.useContext(ContextMenuRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>.");
	return context;
}
var import_react$19, ContextMenuRootContext;
function init_ContextMenuRootContext() {
	return (init_ContextMenuRootContext = __esmMin((() => {
		import_react$19 = /* @__PURE__ */ __toESM(require_react(), 1);
		ContextMenuRootContext = /*#__PURE__*/ import_react$19.createContext(void 0);
		ContextMenuRootContext.displayName = "ContextMenuRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/positioner/MenuPositionerContext.mjs
function useMenuPositionerContext(optional) {
	const context = import_react$18.useContext(MenuPositionerContext);
	if (context === void 0 && !optional) throw new Error("Base UI: MenuPositionerContext is missing. MenuPositioner parts must be placed within <Menu.Positioner>.");
	return context;
}
var import_react$18, MenuPositionerContext;
function init_MenuPositionerContext() {
	return (init_MenuPositionerContext = __esmMin((() => {
		import_react$18 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuPositionerContext = /*#__PURE__*/ import_react$18.createContext(void 0);
		MenuPositionerContext.displayName = "MenuPositionerContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRootContext.mjs
function useMenuRootContext(optional) {
	const context = import_react$17.useContext(MenuRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: MenuRootContext is missing. Menu parts must be placed within <Menu.Root>.");
	return context;
}
var import_react$17, MenuRootContext;
function init_MenuRootContext() {
	return (init_MenuRootContext = __esmMin((() => {
		import_react$17 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuRootContext = /*#__PURE__*/ import_react$17.createContext(void 0);
		MenuRootContext.displayName = "MenuRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/filter-root/MenuFilterContext.mjs
/**
* The filter implementation when the menu this part belongs to is filterable, otherwise `null`.
* `virtualFocus` marks a filter root; a plain `Menu.Root` never sets it. The result is fixed for
* a mounted part: a filter root can't appear above it without remounting it.
*/
function useMenuFilterImpl(scope = "root") {
	const impl = import_react$16.useContext(MenuFilterImplContext);
	const root = import_react$16.useContext(MenuRootContext);
	if (impl === null || root === void 0) return null;
	return (scope === "submenu-trigger" ? root.virtualFocus || root.parentVirtualFocus : root.virtualFocus) ? impl : null;
}
function useUnfilteredItem() {
	return UNFILTERED;
}
/**
* Registers an item part with the filter of the menu it belongs to. A plain menu's items are
* always visible.
*/
function useMenuFilterItem(props, forwardedRef, scope = "root") {
	const impl = useMenuFilterImpl(scope);
	const item = ((scope === "submenu-trigger" ? impl?.useSubmenuTrigger : impl?.useItem) ?? useUnfilteredItem)({
		label: props.label,
		children: props.children,
		render: props.render
	});
	const ref = useMergedRefs(forwardedRef, item.ref);
	return {
		visible: item.visible,
		ref,
		props: item.props
	};
}
var import_react$16, MenuFilterImplContext, UNFILTERED;
function init_MenuFilterContext() {
	return (init_MenuFilterContext = __esmMin((() => {
		import_react$16 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useMergedRefs();
		init_MenuRootContext();
		MenuFilterImplContext = /*#__PURE__*/ import_react$16.createContext(null);
		MenuFilterImplContext.displayName = "MenuFilterImplContext";
		UNFILTERED = {
			visible: true,
			ref: null
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/useMenuItemCommonProps.mjs
function preventMouseDownDefault(event) {
	event.preventDefault();
}
/**
* Returns common props shared by all menu item types.
* This hook extracts the shared logic for id, role, tabIndex, and interaction handlers.
*/
function useMenuItemCommonProps(params) {
	const { closeOnClick, highlighted, id, nodeId, store, typingRef, itemRef, itemMetadata } = params;
	const rootContext = useMenuRootContext();
	const contextMenuContext = useContextMenuRootContext(true);
	const isSubmenuTrigger = itemMetadata.type === "submenu-trigger";
	const virtualFocus = isSubmenuTrigger ? rootContext.parentVirtualFocus : rootContext.virtualFocus;
	const ariaSelected = (isSubmenuTrigger && rootContext.parent.type === "menu" ? rootContext.parent.store : rootContext.store).useState("webkitAriaSelected", highlighted);
	const { events: menuEvents } = store.useState("floatingTreeRoot");
	const open = store.useState("open");
	const isContextMenu = contextMenuContext !== void 0;
	const tabIndex = !virtualFocus && open && highlighted ? 0 : -1;
	return import_react$15.useMemo(() => ({
		id,
		role: "menuitem",
		tabIndex,
		"aria-selected": ariaSelected,
		onMouseDown: virtualFocus ? preventMouseDownDefault : void 0,
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
				domEvent: event.nativeEvent,
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
				if (itemMetadata.type === "regular-item") dispatchClickWithModifiers(itemRef.current, event, {
					detail: 1,
					pointerType: "mouse"
				});
			}
		}
	}), [
		closeOnClick,
		tabIndex,
		id,
		menuEvents,
		nodeId,
		store.context.allowMouseUpTriggerRef,
		typingRef,
		itemRef,
		contextMenuContext,
		isContextMenu,
		itemMetadata.type,
		ariaSelected,
		virtualFocus
	]);
}
var import_react$15;
function init_useMenuItemCommonProps() {
	return (init_useMenuItemCommonProps = __esmMin((() => {
		import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_os();
		init_reason_parts();
		init_ContextMenuRootContext();
		init_MenuRootContext();
		init_dispatchClickWithModifiers();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/useMenuItem.mjs
function useMenuItem(params) {
	const { closeOnClick, disabled, highlighted, id, store, typingRef = store.context.typingRef, nativeButton, itemMetadata, nodeId } = params;
	const itemRef = import_react$14.useRef(null);
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
	const getItemProps = import_react$14.useCallback((externalProps) => {
		return mergeProps(commonProps, { onMouseEnter(event) {
			if (itemMetadata.type !== "submenu-trigger") return;
			itemMetadata.setActive(event.nativeEvent);
		} }, externalProps, getButtonProps);
	}, [
		commonProps,
		getButtonProps,
		itemMetadata
	]);
	const mergedRef = useMergedRefs(itemRef, buttonRef);
	return import_react$14.useMemo(() => ({
		getItemProps,
		itemRef: mergedRef
	}), [getItemProps, mergedRef]);
}
var import_react$14, REGULAR_ITEM;
function init_useMenuItem() {
	return (init_useMenuItem = __esmMin((() => {
		import_react$14 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useMergedRefs();
		init_useButton();
		init_mergeProps();
		init_useMenuItemCommonProps();
		REGULAR_ITEM = { type: "regular-item" };
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/item/MenuItem.mjs
var import_react$13, import_jsx_runtime$5, MenuItemPlain, MenuItem;
function init_MenuItem() {
	return (init_MenuItem = __esmMin((() => {
		import_react$13 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MenuFilterContext();
		init_useMenuItem();
		init_MenuRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		init_useCompositeListItem();
		import_jsx_runtime$5 = require_jsx_runtime();
		MenuItemPlain = /*#__PURE__*/ import_react$13.forwardRef(function MenuItemPlain(componentProps, forwardedRef) {
			const { render, className, id: idProp, label, nativeButton = false, disabled: disabledProp = false, closeOnClick = true, style, ...elementProps } = componentProps;
			const { store } = useMenuRootContext();
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const id = useBaseUiId(idProp);
			const rootDisabled = store.useState("disabled");
			const highlighted = store.useState("isActive", listItem.index);
			const nodeId = store.useState("floatingNodeId");
			const itemProps = store.useState("itemProps");
			const disabled = disabledProp || rootDisabled;
			const { getItemProps, itemRef } = useMenuItem({
				closeOnClick,
				disabled,
				highlighted,
				id,
				store,
				nativeButton,
				nodeId,
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
		MenuItemPlain.displayName = "MenuItemPlain";
		MenuItem = /*#__PURE__*/ import_react$13.forwardRef(function MenuItem(props, forwardedRef) {
			const filterItem = useMenuFilterItem(props, forwardedRef);
			if (!filterItem.visible) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime$5.jsx)(MenuItemPlain, {
				...props,
				ref: filterItem.ref
			});
		});
		MenuItem.displayName = "MenuItem";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRootContext.mjs
function useMenuSubmenuRootContext() {
	return import_react$12.useContext(MenuSubmenuRootContext);
}
var import_react$12, MenuSubmenuRootContext;
function init_MenuSubmenuRootContext() {
	return (init_MenuSubmenuRootContext = __esmMin((() => {
		import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuSubmenuRootContext = /*#__PURE__*/ import_react$12.createContext(void 0);
		MenuSubmenuRootContext.displayName = "MenuSubmenuRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/resolveRenderedId.mjs
/**
* Resolves an element's id using the same precedence as `useRenderElement`.
* Returns `''` when the element renders with an explicitly empty id, which consumers must treat
* as "no id" rather than falling back to the generated one, so ARIA relationships never reference
* an id no element carries. Render callbacks are opaque and are expected to use the id passed to
* them.
*
* @internal
*/
function resolveRenderedId(props, fallbackId) {
	const render = unwrapLazyRenderProp(props.render);
	if (/*#__PURE__*/ import_react$11.isValidElement(render)) {
		const renderProps = render.props;
		if (Object.hasOwn(renderProps, "id")) return renderProps.id ?? "";
	}
	return props.id ?? fallbackId;
}
/**
* Resolves the element's id and returns a ref that publishes it to the owner while mounted.
* A generated fallback is never published as an override, so removing an explicit id lets the
* element return to the generated one.
*
* @internal
*/
function useRenderedId(props, defaultId, setId) {
	const id = resolveRenderedId(props, defaultId);
	const registeredId = id === defaultId ? void 0 : id;
	return [id, import_react$11.useCallback((element) => setId?.(element ? registeredId : void 0), [registeredId, setId])];
}
var import_react$11;
function init_resolveRenderedId() {
	return (init_resolveRenderedId = __esmMin((() => {
		import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/resolvePopupLabel.mjs
function resolvePopupLabel(props, activeTriggerElement, activeTriggerId) {
	const render = unwrapLazyRenderProp(props.render);
	const renderedElementProps = /*#__PURE__*/ import_react$10.isValidElement(render) ? render.props : void 0;
	const ariaLabel = props["aria-label"] ?? renderedElementProps?.["aria-label"];
	let ariaLabelledBy = props["aria-labelledby"] ?? renderedElementProps?.["aria-labelledby"];
	if (ariaLabelledBy == null && !ariaLabel) ariaLabelledBy = activeTriggerElement ? activeTriggerElement.id || void 0 : activeTriggerId || void 0;
	return ariaLabelledBy;
}
var import_react$10;
function init_resolvePopupLabel() {
	return (init_resolvePopupLabel = __esmMin((() => {
		import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/popup/MenuPopup.mjs
function useNoParentHandoff() {
	return NO_PARENT_HANDOFF;
}
var import_react$9, import_jsx_runtime$4, MenuPopupPlain, NO_PARENT_HANDOFF, MenuPopup;
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
		init_MenuSubmenuRootContext();
		init_resolveRenderedId();
		init_resolvePopupLabel();
		init_MenuFilterContext();
		import_jsx_runtime$4 = require_jsx_runtime();
		MenuPopupPlain = /*#__PURE__*/ import_react$9.forwardRef(function MenuPopupPlain(componentProps, forwardedRef) {
			const { render, className, style, finalFocus, id: idProp, initialFocus: initialFocusProp, ...elementProps } = componentProps;
			const { store, defaultFloatingId, setRenderedFloatingId, virtualFocus, orientation } = useMenuRootContext();
			const inheritedSubmenuRootContext = useMenuSubmenuRootContext();
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
			const activeTriggerId = store.useState("activeTriggerId");
			const listElement = store.useState("listElement");
			const [id, registerIdRef] = useRenderedId(componentProps, defaultFloatingId, setRenderedFloatingId);
			const ariaLabelledBy = resolvePopupLabel(componentProps, activeTriggerElement, activeTriggerId);
			const submenuRootContext = parent.type === "menu" ? inheritedSubmenuRootContext : void 0;
			const isContextMenu = parent.type === "context-menu";
			let initialFocus = initialFocusProp ?? parent.type !== "menu";
			if (initialFocusProp === void 0 && listElement && parent.type !== "menu") initialFocus = () => {
				if (store.state.activeIndex !== null) return false;
				return listElement;
			};
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
			const { parentVirtualFocusRef, handleFocus } = (import_react$9.useContext(MenuFilterImplContext)?.useParentHandoff ?? useNoParentHandoff)(store, parent, open, virtualFocus);
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
					setPopupElement,
					registerIdRef
				],
				stateAttributesMapping: popupTransitionStateMapping,
				props: [
					popupProps,
					{
						id,
						...listElement ? { role: "presentation" } : {
							role: "menu",
							"aria-orientation": orientation === "horizontal" ? "horizontal" : void 0,
							"aria-labelledby": ariaLabelledBy
						},
						onKeyDown(event) {
							submenuRootContext?.onPopupKeyDown?.(event);
							if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
						},
						onFocus: handleFocus
					},
					getDisabledMountTransitionStyles(transitionStatus),
					elementProps,
					{ "data-rootownerid": rootId }
				]
			});
			let returnFocus = parent.type === void 0 || isContextMenu;
			if (activeTriggerElement || parent.type === "menubar" && lastOpenChangeReason !== "outside-press") returnFocus = true;
			const dynamicReturnFocus = submenuRootContext?.getReturnElement ?? parentVirtualFocusRef;
			return /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(FloatingFocusManager, {
				context: floatingContext,
				openInteractionType: openMethod,
				modal: isContextMenu,
				disabled: !mounted,
				returnFocus: finalFocus ?? dynamicReturnFocus ?? returnFocus,
				explicitReturnFocus: finalFocus === void 0 && dynamicReturnFocus ? false : void 0,
				initialFocus,
				restoreFocus: true,
				getInsideElements: parent.type === void 0 ? () => [store.context.beforeTriggerFocusGuardRef.current] : void 0,
				externalTree: parent.type !== "menubar" ? floatingTreeRoot : void 0,
				previousFocusableElement: activeTriggerElement,
				nextFocusableElement: parent.type === void 0 ? store.context.triggerFocusTargetRef : void 0,
				beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
				children: element
			});
		});
		MenuPopupPlain.displayName = "MenuPopupPlain";
		NO_PARENT_HANDOFF = {
			parentVirtualFocusRef: void 0,
			handleFocus: void 0
		};
		MenuPopup = /*#__PURE__*/ import_react$9.forwardRef(function MenuPopup(props, forwardedRef) {
			const Popup = useMenuFilterImpl()?.Popup ?? MenuPopupPlain;
			return /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(Popup, {
				...props,
				ref: forwardedRef
			});
		});
		MenuPopup.displayName = "MenuPopup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/portal/MenuPortalContext.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/portal/MenuPortal.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/positioner/MenuPositioner.mjs
var import_react$6, import_jsx_runtime$2, MenuPositioner;
function init_MenuPositioner() {
	return (init_MenuPositioner = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_inertValue();
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
		init_useTriggerSwitchTransition();
		init_usePositioner();
		init_useAnchoredPopupScrollLock();
		import_jsx_runtime$2 = require_jsx_runtime();
		MenuPositioner = /*#__PURE__*/ import_react$6.forwardRef(function MenuPositioner(componentProps, forwardedRef) {
			const { anchor: anchorProp, positionMethod: positionMethodProp = "absolute", className, render, side, align: alignProp, sideOffset: sideOffsetProp = 0, alignOffset: alignOffsetProp = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance: collisionAvoidanceProp = DROPDOWN_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
			const { store, virtualFocus, syncHighlightedItem } = useMenuRootContext();
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
				adaptiveOrigin,
				lazyFlip: virtualFocus ? "placement" : false
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
			useTriggerSwitchTransition({
				store,
				domReference,
				positionerElement,
				open
			});
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
						onMapChange: syncHighlightedItem,
						children: element
					})
				})]
			});
		});
		MenuPositioner.displayName = "MenuPositioner";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menubar/MenubarContext.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/store/MenuStore.mjs
function createInitialContext(triggerElements) {
	return {
		positionerRef: /*#__PURE__*/ import_react$4.createRef(),
		popupRef: /*#__PURE__*/ import_react$4.createRef(),
		typingRef: { current: false },
		itemDomElements: { current: [] },
		itemLabels: { current: [] },
		highlightReason: "none",
		highlightEvent: void 0,
		reportedItem: void 0,
		allowMouseUpTriggerRef: { current: false },
		virtualFocusRef: void 0,
		triggerFocusTargetRef: /*#__PURE__*/ import_react$4.createRef(),
		beforeTriggerFocusGuardRef: /*#__PURE__*/ import_react$4.createRef(),
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
		keyboardOpen: false,
		allowMouseEnter: false,
		highlightItemOnHover: true,
		parent: { type: void 0 },
		rootId: void 0,
		activeIndex: null,
		listElement: null,
		filterTriggerProps: EMPTY_OBJECT,
		inputProps: EMPTY_OBJECT,
		inputFocused: false,
		highlightedItem: void 0,
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
		init_engine();
		init_FloatingTreeStore();
		init_store(), init_popupTriggerMap();
		selectors = {
			...popupStoreSelectors,
			disabled: (state) => state.parent.type === "menubar" ? state.parent.context.disabled || state.disabled : state.disabled,
			modal: (state) => (state.parent.type === void 0 || state.parent.type === "context-menu") && (state.modal ?? true),
			openMethod: (state) => state.openMethod,
			keyboardOpen: (state) => state.keyboardOpen,
			allowMouseEnter: (state) => state.allowMouseEnter,
			highlightItemOnHover: (state) => state.highlightItemOnHover,
			parent: (state) => state.parent,
			rootId: (state) => {
				if (state.parent.type === "menu") return state.parent.store.select("rootId");
				return state.parent.type !== void 0 ? state.parent.context.rootId : state.rootId;
			},
			activeIndex: (state) => state.activeIndex,
			listElement: (state) => state.listElement,
			/** The trigger's `aria-controls`: the list when one holds the `menu` role, else the popup. */
			triggerControlsId: (state, triggerId) => {
				const popupId = popupStoreSelectors.triggerPopupId(state, triggerId);
				return popupId ? state.listElement?.id || popupId : void 0;
			},
			filterTriggerProps: (state) => state.filterTriggerProps,
			inputProps: (state) => state.inputProps,
			webkitAriaSelected: (state, highlighted) => webkit && state.inputFocused && highlighted ? true : void 0,
			highlightedItemId: (state) => state.highlightedItem?.id || void 0,
			isActive: (state, itemIndex) => state.activeIndex === itemIndex,
			hoverEnabled: (state) => state.hoverEnabled,
			instantType: (state) => state.instantType === "trigger-change" && !popupStoreSelectors.open(state) ? void 0 : state.instantType,
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
				this.observe("parent", (parent) => {
					if (parent.type === "menu") this.context.allowMouseUpTriggerRef = parent.store.context.allowMouseUpTriggerRef;
					else if (parent.type !== void 0) this.context.allowMouseUpTriggerRef = parent.context.allowMouseUpTriggerRef;
				});
			}
			/**
			* Propagates changes of the parent menu's shared tree state to this store's subscribers.
			* The owning `Menu.Root` calls it from an effect so the parent store subscription is released
			* when the submenu unmounts.
			* @returns A function that removes the parent store subscription.
			*/
			subscribeToParentMenu() {
				const parent = this.state.parent;
				if (parent.type !== "menu") return;
				let rootId = parent.store.select("rootId");
				let floatingTreeRoot = parent.store.select("floatingTreeRoot");
				let keyboardEventRelay = parent.store.select("keyboardEventRelay");
				return parent.store.subscribe(() => {
					const nextRootId = parent.store.select("rootId");
					const nextFloatingTreeRoot = parent.store.select("floatingTreeRoot");
					const nextKeyboardEventRelay = parent.store.select("keyboardEventRelay");
					if (rootId === nextRootId && floatingTreeRoot === nextFloatingTreeRoot && keyboardEventRelay === nextKeyboardEventRelay) return;
					rootId = nextRootId;
					floatingTreeRoot = nextFloatingTreeRoot;
					keyboardEventRelay = nextKeyboardEventRelay;
					this.notifyAll();
				});
			}
			setOpen(open, eventDetails) {
				this.state.floatingRootContext.context.events.emit("setOpen", {
					open,
					eventDetails
				});
			}
			setActiveIndex(activeIndex, reason, event) {
				if (this.state.activeIndex !== activeIndex) {
					const isWriteBack = (activeIndex === null ? void 0 : this.context.itemDomElements.current[activeIndex]) === this.context.reportedItem;
					this.context.highlightReason = isWriteBack ? "none" : reason;
					this.context.highlightEvent = isWriteBack ? void 0 : event;
				}
				this.set("activeIndex", activeIndex);
			}
			highlightItem(element, reason, event) {
				const index = this.context.itemDomElements.current.indexOf(element);
				if (index > -1) this.setActiveIndex(index, reason, event);
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/filter-provider/MenuFilterProviderContext.mjs
var import_react$3, MenuFilterProviderContext;
function init_MenuFilterProviderContext() {
	return (init_MenuFilterProviderContext = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuFilterProviderContext = /*#__PURE__*/ import_react$3.createContext(null);
		MenuFilterProviderContext.displayName = "MenuFilterProviderContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/utils/isKeyboardOpen.mjs
/**
* Keyboard and assistive-technology activations produce `detail === 0` clicks; mouse-gesture
* clicks (including the synthesized drag-release click from `useMenuItemCommonProps`) carry
* `detail >= 1`.
*/
function isKeyboardClick(reason, event) {
	return (reason === "trigger-press" || reason === "item-press") && event?.detail === 0;
}
/**
* Whether a menu opens from the keyboard, which lands focus in the popup. Arrow keys report
* `list-navigation`; Enter and Space dispatch a click carrying no pointer detail.
*/
function isKeyboardOpen(reason, event) {
	return reason === "list-navigation" || isKeyboardClick(reason, event);
}
function init_isKeyboardOpen() {
	return (init_isKeyboardOpen = __esmMin((() => {
		init_reason_parts();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.mjs
function MenuRoot(props) {
	const filterProvider = import_react$2.useContext(MenuFilterProviderContext);
	if (filterProvider === null) return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(MenuRootInternal, { ...props });
	const FilterRoot = filterProvider.Root;
	return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(MenuFilterProviderContext.Provider, {
		value: null,
		children: /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(FilterRoot, {
			...filterProvider.options,
			...props
		})
	});
}
var import_react$2, import_jsx_runtime$1, MenuRootInternal;
function init_MenuRoot() {
	return (init_MenuRoot = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useTimeout();
		init_useStableCallback();
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
		init_getHighlightReason();
		init_ContextMenuRootContext();
		init_mergeProps();
		init_useAnimationsFinished();
		init_MenuStore();
		init_popupStoreUtils();
		init_useBaseUiId();
		init_MenuFilterProviderContext();
		init_isKeyboardOpen();
		import_jsx_runtime$1 = require_jsx_runtime();
		MenuRootInternal = fastComponent(function MenuRootInternal(props) {
			const { children, open: openProp, onOpenChange, onOpenChangeComplete, onItemHighlighted: onItemHighlightedProp, defaultOpen = false, disabled: disabledProp = false, modal: modalProp, loopFocus = true, orientation = "vertical", actionsRef, closeParentOnEsc = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, highlightItemOnHover = true, isSubmenu = false, virtualFocus = false, virtualFocusRef, allowEscape = true, resetOnPointerLeave = true } = props;
			const contextMenuContext = useContextMenuRootContext(true);
			const parentMenuRootContext = useMenuRootContext(true);
			const menubarContext = useMenubarContext(true);
			const enclosingMenuStore = parentMenuRootContext?.store;
			const parentVirtualFocus = parentMenuRootContext?.virtualFocus ?? false;
			const parentFromContext = import_react$2.useMemo(() => {
				if (isSubmenu && enclosingMenuStore) return {
					type: "menu",
					store: enclosingMenuStore
				};
				if (menubarContext) return {
					type: "menubar",
					context: menubarContext
				};
				if (contextMenuContext && !enclosingMenuStore) return {
					type: "context-menu",
					context: contextMenuContext
				};
				return { type: void 0 };
			}, [
				contextMenuContext,
				enclosingMenuStore,
				menubarContext,
				isSubmenu
			]);
			const rootId = useBaseUiId();
			const defaultFloatingId = useBaseUiId();
			const [renderedFloatingId, setRenderedFloatingId] = import_react$2.useState(void 0);
			const floatingId = (renderedFloatingId ?? defaultFloatingId) || void 0;
			const floatingParentNodeIdFromContext = useFloatingParentNodeId();
			const parentMenuStore = parentFromContext.type === "menu" ? parentFromContext.store : void 0;
			const animateInitialOpen = (openProp ?? defaultOpen) && parentMenuStore?.state.transitionStatus === "starting";
			const seededInstantType = useRefWithInit(() => animateInitialOpen ? parentMenuStore?.state.instantType : void 0).current;
			const store = useRefWithInit(() => {
				const menuStore = new MenuStore({
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
				menuStore.context.virtualFocusRef = virtualFocusRef;
				return menuStore;
			}).current;
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
			const keyboardOpen = store.useState("keyboardOpen");
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
				else if (parentMenuRootContext || !store.select("activeTriggerElement")) store.update({
					floatingNodeId: floatingNodeIdFromContext,
					floatingParentNodeId: floatingParentNodeIdFromContext
				});
			}, [
				contextMenuContext,
				parentMenuRootContext,
				floatingNodeIdFromContext,
				floatingParentNodeIdFromContext,
				activeTriggerElement,
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
				if (nextOpen === false && reason !== "item-press" && nativeEvent?.type === "click" && nativeEvent.pointerType === "touch" && !allowTouchToCloseRef.current) return;
				if (nextOpen && reason === "trigger-focus") {
					allowTouchToCloseRef.current = false;
					allowTouchToCloseTimeout.start(300, () => {
						allowTouchToCloseRef.current = true;
					});
				} else {
					allowTouchToCloseRef.current = true;
					allowTouchToCloseTimeout.clear();
				}
				const isDismissClose = !nextOpen && (reason === "escape-key" || reason == null);
				openEventRef.current = eventDetails.event;
				const popupOpenState = createPopupOpenState(store.state, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
				popupOpenState.openChangeReason = reason;
				popupOpenState.keyboardOpen = nextOpen && isKeyboardOpen(reason, nativeEvent);
				if (parent.type === "menubar" && (reason === "trigger-focus" || reason === "focus-out" || reason === "trigger-hover" || reason === "list-navigation" || reason === "sibling-open")) popupOpenState.instantType = "group";
				else if (isKeyboardClick(reason, nativeEvent)) popupOpenState.instantType = "click";
				else if (isDismissClose) popupOpenState.instantType = "dismiss";
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
			useIsoLayoutEffect(() => store.subscribeToParentMenu(), [store]);
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
			const listNavigation$1 = useListNavigation(floatingRootContext, {
				enabled: !disabled,
				listRef: store.context.itemDomElements,
				activeIndex,
				virtual: virtualFocus,
				nested: parent.type === "menubar" || !virtualFocus && parent.type !== void 0,
				parentOrientation: parent.type === "menubar" ? parent.context.orientation : void 0,
				loopFocus,
				focusItemOnOpen: virtualFocus ? keyboardOpen : void 0,
				allowEscape: virtualFocus && loopFocus && allowEscape,
				orientation,
				triggerOrientation: virtualFocus ? "vertical" : orientation,
				rtl: direction === "rtl",
				disabledIndices: EMPTY_ARRAY,
				onNavigate(nextActiveIndex, event) {
					store.setActiveIndex(nextActiveIndex, getHighlightReason(event), event?.nativeEvent);
				},
				openOnArrowKeyDown: parent.type !== "context-menu" && !(virtualFocus && isSubmenu),
				externalTree: !virtualFocus && nested ? floatingTreeRoot : void 0,
				nestedReturnFocusRef: parentMenuStore?.context.virtualFocusRef,
				focusItemOnHover: highlightItemOnHover,
				resetOnPointerLeave
			});
			const onTyping = import_react$2.useCallback((nextTyping) => {
				store.context.typingRef.current = nextTyping;
			}, [store]);
			const typeahead = useTypeahead(floatingRootContext, {
				enabled: !disabled && !virtualFocus,
				listRef: store.context.itemLabels,
				elementsRef: store.context.itemDomElements,
				activeIndex,
				resetMs: 500,
				onMatch: (index, event) => {
					if (open && index !== activeIndex) store.setActiveIndex(index, keyboard, event.nativeEvent);
				},
				onTyping
			});
			const onItemHighlighted = useStableCallback(onItemHighlightedProp);
			const lastHighlightIndexRef = import_react$2.useRef(-1);
			const syncHighlightedItem = useStableCallback(() => {
				const index = store.state.activeIndex;
				const item = index === null ? void 0 : store.context.itemDomElements.current[index] ?? void 0;
				if (item?.isConnected === false) return;
				const itemIndex = item === void 0 ? -1 : index;
				if (lastHighlightIndexRef.current === itemIndex && store.context.reportedItem === item) return;
				lastHighlightIndexRef.current = itemIndex;
				store.context.reportedItem = item;
				if (virtualFocus) store.set("highlightedItem", item);
				const { highlightReason, highlightEvent } = store.context;
				store.context.highlightReason = none;
				store.context.highlightEvent = void 0;
				if (!onItemHighlightedProp) return;
				onItemHighlighted(item, createGenericEventDetails(highlightReason, highlightEvent, { label: item === void 0 ? void 0 : store.context.itemLabels.current[itemIndex] ?? void 0 }));
			});
			useIsoLayoutEffect(() => {
				syncHighlightedItem();
			}, [activeIndex, syncHighlightedItem]);
			const openTriggerProps = import_react$2.useMemo(() => {
				if (!virtualFocus) return listNavigation$1.reference;
				if (!listNavigation$1.trigger) return EMPTY_OBJECT;
				const { onFocus, ...rest } = listNavigation$1.trigger;
				return rest;
			}, [
				virtualFocus,
				listNavigation$1.reference,
				listNavigation$1.trigger
			]);
			store.useSyncedValue("inputProps", virtualFocus ? listNavigation$1.reference ?? EMPTY_OBJECT : EMPTY_OBJECT);
			const activeTriggerProps = import_react$2.useMemo(() => {
				const mergedProps = mergeProps(typeahead.reference, openTriggerProps, dismiss.reference, { onMouseMove() {
					store.set("allowMouseEnter", true);
				} }, interactionTypeProps);
				mergedProps["aria-haspopup"] = "menu";
				mergedProps["aria-expanded"] = open;
				return mergedProps;
			}, [
				store,
				typeahead.reference,
				openTriggerProps,
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
				parent: parentFromContext,
				orientation,
				loopFocus,
				allowEscape,
				defaultFloatingId,
				setRenderedFloatingId,
				virtualFocus,
				parentVirtualFocus,
				syncHighlightedItem
			}), [
				store,
				parentFromContext,
				orientation,
				loopFocus,
				allowEscape,
				defaultFloatingId,
				virtualFocus,
				parentVirtualFocus,
				syncHighlightedItem
			]);
			const renderedChildren = typeof children === "function" ? children({ payload }) : children;
			let content = /*#__PURE__*/ (0, import_jsx_runtime$1.jsxs)(MenuRootContext.Provider, {
				value: context,
				children: [handle && /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(PopupHandleAttachment, {
					handle,
					store
				}), renderedChildren]
			});
			if (parent.type === void 0 || parent.type === "context-menu") content = /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(FloatingTree, {
				externalTree: floatingTreeRoot,
				children: content
			});
			return content;
		});
		MenuRootInternal.displayName = "MenuRootInternal";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/utils/findRootOwnerId.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/useMixedToggleClickHandler.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/trigger/MenuTrigger.mjs
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
			const controlsId = store.useState("triggerControlsId", thisTriggerId);
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
				const doc = ownerDocument(triggerRef.current);
				if (isOpenedByThisTrigger && store.select("lastOpenChangeReason") === "trigger-hover") {
					doc.addEventListener("mouseup", handleDocumentMouseUp, { once: true });
					return () => {
						doc.removeEventListener("mouseup", handleDocumentMouseUp);
					};
				}
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
			const filterTriggerProps = store.useState("filterTriggerProps");
			const { handlePreFocusGuardFocus, handleFocusTargetFocus } = useTriggerFocusGuards(store, triggerElementRef);
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
					"aria-controls": controlsId,
					id: thisTriggerId,
					onMouseDown: (event) => {
						if (store.select("open")) return;
						allowMouseUpTriggerTimeout.start(200, () => {
							store.context.allowMouseUpTriggerRef.current = true;
						});
						ownerDocument(event.currentTarget).addEventListener("mouseup", handleDocumentMouseUp, { once: true });
					}
				},
				filterTriggerProps,
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
					ref: store.context.beforeTriggerFocusGuardRef,
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
export { useMenuPositionerContext as A, useMenuItemCommonProps as C, init_MenuRootContext as D, useMenuFilterItem as E, useMenuRootContext as O, init_useMenuItemCommonProps as S, useMenuFilterImpl as T, MenuItem as _, init_MenuRoot as a, init_useMenuItem as b, MenuPositioner as c, init_MenuPortal as d, MenuPopup as f, useMenuSubmenuRootContext as g, init_MenuSubmenuRootContext as h, MenuRootInternal as i, init_MenuPositionerContext as k, init_MenuPositioner as l, MenuSubmenuRootContext as m, init_MenuTrigger as n, MenuFilterProviderContext as o, init_MenuPopup as p, MenuRoot as r, init_MenuFilterProviderContext as s, MenuTrigger as t, MenuPortal as u, init_MenuItem as v, init_MenuFilterContext as w, useMenuItem as x, REGULAR_ITEM as y };
