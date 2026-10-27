import { n as __esmMin, o as __toESM, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_build_module$1, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-CMzZuaZ2.js";
import { i as useThemeProviderStyles, n as init_theme_provider, r as init_use_theme_provider_styles, t as ThemeProvider } from "./theme-provider-BAuLVv6U.js";
import { f as init_empty, i as init_mergeProps, o as mergeProps, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT } from "./useRenderElement-Dkv6YH0v.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, o as useOpenChangeComplete } from "./useTransitionStatus-DtGN_KnE.js";
import { n as init_useTimeout, r as useTimeout, t as Timeout } from "./useTimeout-Cl_2zLqB.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, E as triggerPress, O as createChangeEventDetails, T as triggerHover, l as imperativeAction, o as disabled, u as init_reason_parts, y as none } from "./reason-parts-0ghxNVBE.js";
import { f as isElement, l as getWindow, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as useValueAsRef, r as addEventListener, t as init_useValueAsRef } from "./useValueAsRef-fShAMhQR.js";
import { S as isMouseLikePointerType, b as init_event } from "./DirectionContext-BIiMId1B.js";
import { A as useTriggerDataForwarding, At as popupTransitionStateMapping, D as usePopupInteractionProps, Dt as triggerDisabled, E as useOpenStateTransitions, Et as init_TooltipTriggerDataAttributes, I as init_useDismiss, J as useFloatingPortalNode, L as useDismiss, Mt as triggerOpenStateMapping, O as usePopupRootStore, Ot as init_popupStateMapping, T as useImplicitActiveTrigger, _ as init_popupTriggerMap, a as getDisabledMountTransitionStyles, b as applyPopupOpenChange, bt as init_element, c as useAnchorPositioning, d as ReactStore, et as POPUP_COLLISION_AVOIDANCE, f as init_ReactStore, g as PopupTriggerMap, h as init_fastHooks, i as usePositioner, m as fastComponentRef, o as init_getDisabledMountTransitionStyles, p as fastComponent, q as init_FloatingPortal, r as init_usePositioner, s as init_useAnchorPositioning, tt as init_constants, v as FOCUSABLE_POPUP_PROPS, w as init_popupStoreUtils, y as PopupHandleAttachment } from "./DirectionProvider-ijBUoTP5.js";
import { i as getTarget, n as closest, r as contains } from "./shadowDom-C1kYxCnm.js";
import { a as init_useHoverFloatingInteraction, c as useHoverInteractionSharedState, d as createInitialPopupStoreState, f as init_store, h as init_useHoverShared, i as useHoverReferenceInteraction, l as init_usePopupHandleStore, m as getDelay, n as safePolygon, o as useHoverFloatingInteraction, p as popupStoreSelectors, r as init_useHoverReferenceInteraction, s as init_useHoverInteractionSharedState, t as init_safePolygon, u as usePopupHandleStore } from "./safePolygon-vycgRCWQ.js";
import { n as useFocus, t as init_useFocus } from "./useFocus-CTxmQqFm.js";
//#region ../packages/theme/build-module/lock-unlock.mjs
var lock, unlock;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/theme"));
	})))();
}
//#endregion
//#region ../packages/theme/build-module/private-apis.mjs
function warnPrivateApi(apiName, options = {}) {
	deprecated(`\`privateApis.${apiName}\` from \`@wordpress/theme\``, {
		since: "7.1",
		version: "7.3",
		...options
	});
}
var privateApis;
function init_private_apis() {
	return (init_private_apis = __esmMin((() => {
		init_build_module$1();
		init_lock_unlock();
		init_theme_provider();
		init_use_theme_provider_styles();
		privateApis = {};
		lock(privateApis, {
			get ThemeProvider() {
				warnPrivateApi("ThemeProvider", { alternative: "`ThemeProvider` from `@wordpress/theme`" });
				return ThemeProvider;
			},
			get useThemeProviderStyles() {
				warnPrivateApi("useThemeProviderStyles", {
					alternative: "`ThemeProvider` from `@wordpress/theme` for supported theming use cases",
					hint: "`useThemeProviderStyles` has no public replacement."
				});
				return useThemeProviderStyles;
			}
		});
	})))();
}
//#endregion
//#region ../packages/theme/build-module/index.mjs
var build_module_exports = /* @__PURE__ */ __exportAll({
	ThemeProvider: () => ThemeProvider,
	privateApis: () => privateApis
});
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_private_apis();
		init_theme_provider();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/components/FloatingDelayGroup.mjs
function resetDelayRef(delayRef, initialDelayRef) {
	delayRef.current = initialDelayRef.current;
}
/**
* Experimental next version of `FloatingDelayGroup` to become the default
* in the future. This component is not yet stable.
* Provides context for a group of floating elements that should share a
* `delay`. Unlike `FloatingDelayGroup`, `useDelayGroup` with this
* component does not cause a re-render of unrelated consumers of the
* context when the delay changes.
* @see https://floating-ui.com/docs/FloatingDelayGroup
* @internal
*/
function FloatingDelayGroup(props) {
	const { children, delay, timeoutMs = 0 } = props;
	const delayRef = import_react$12.useRef(delay);
	const initialDelayRef = import_react$12.useRef(delay);
	const currentIdRef = import_react$12.useRef(null);
	const currentContextRef = import_react$12.useRef(null);
	const timeout = useTimeout();
	useIsoLayoutEffect(() => {
		initialDelayRef.current = delay;
		if (!currentIdRef.current) {
			delayRef.current = delay;
			return;
		}
		delayRef.current = {
			open: getDelay(delayRef.current, "open"),
			close: getDelay(delay, "close")
		};
	}, [
		delay,
		currentIdRef,
		delayRef,
		initialDelayRef
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(FloatingDelayGroupContext.Provider, {
		value: import_react$12.useMemo(() => ({
			hasProvider: true,
			delayRef,
			initialDelayRef,
			currentIdRef,
			timeoutMs,
			currentContextRef,
			timeout
		}), [timeoutMs, timeout]),
		children
	});
}
/**
* Enables grouping when called inside a component that's a child of a
* `FloatingDelayGroup`.
* @see https://floating-ui.com/docs/FloatingDelayGroup
* @internal
*/
function useDelayGroup(store, options = { open: false }) {
	const { open } = options;
	const floatingId = store.useState("floatingId");
	const { currentIdRef, delayRef, timeoutMs, initialDelayRef, currentContextRef, hasProvider, timeout } = import_react$12.useContext(FloatingDelayGroupContext);
	const [isInstantPhase, setIsInstantPhase] = import_react$12.useState(false);
	const openRef = import_react$12.useRef(open);
	useIsoLayoutEffect(() => {
		openRef.current = open;
	}, [open]);
	useIsoLayoutEffect(() => {
		function unset() {
			currentContextRef.current?.setIsInstantPhase(false);
			currentIdRef.current = null;
			currentContextRef.current = null;
			delayRef.current = initialDelayRef.current;
			timeout.clear();
		}
		if (!currentIdRef.current) return;
		if (!open && currentIdRef.current === floatingId) {
			setIsInstantPhase(false);
			if (timeoutMs) {
				const closingId = floatingId;
				timeout.start(timeoutMs, () => {
					if (store.select("open") || currentIdRef.current && currentIdRef.current !== closingId) return;
					unset();
				});
				return () => {
					if (openRef.current || currentIdRef.current !== closingId) timeout.clear();
				};
			}
			unset();
		}
	}, [
		open,
		floatingId,
		currentIdRef,
		delayRef,
		timeoutMs,
		initialDelayRef,
		currentContextRef,
		timeout,
		store
	]);
	useIsoLayoutEffect(() => {
		if (!open) return;
		const prevContext = currentContextRef.current;
		const prevId = currentIdRef.current;
		timeout.clear();
		currentContextRef.current = {
			onOpenChange: store.setOpen,
			setIsInstantPhase
		};
		currentIdRef.current = floatingId;
		delayRef.current = {
			open: 0,
			close: getDelay(initialDelayRef.current, "close")
		};
		if (prevId !== null && prevId !== floatingId) {
			setIsInstantPhase(true);
			prevContext?.setIsInstantPhase(true);
			prevContext?.onOpenChange(false, createChangeEventDetails(none));
		} else {
			setIsInstantPhase(false);
			prevContext?.setIsInstantPhase(false);
		}
	}, [
		open,
		floatingId,
		store,
		currentIdRef,
		delayRef,
		initialDelayRef,
		currentContextRef,
		timeout
	]);
	useIsoLayoutEffect(() => {
		return () => {
			if (currentIdRef.current === floatingId) {
				currentContextRef.current = null;
				if (!openRef.current) return;
				currentIdRef.current = null;
				resetDelayRef(delayRef, initialDelayRef);
				timeout.clear();
			}
		};
	}, [
		currentContextRef,
		currentIdRef,
		delayRef,
		floatingId,
		initialDelayRef,
		timeout
	]);
	return import_react$12.useMemo(() => ({
		activeIdRef: currentIdRef,
		hasProvider,
		delayRef,
		isInstantPhase
	}), [
		currentIdRef,
		hasProvider,
		delayRef,
		isInstantPhase
	]);
}
var import_react$12, import_jsx_runtime$4, FloatingDelayGroupContext;
function init_FloatingDelayGroup() {
	return (init_FloatingDelayGroup = __esmMin((() => {
		import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useTimeout();
		init_useIsoLayoutEffect();
		init_useHoverShared();
		init_createBaseUIEventDetails();
		init_reason_parts();
		import_jsx_runtime$4 = require_jsx_runtime();
		FloatingDelayGroupContext = /*#__PURE__*/ import_react$12.createContext({
			hasProvider: false,
			timeoutMs: 0,
			delayRef: { current: 0 },
			initialDelayRef: { current: 0 },
			timeout: new Timeout(),
			currentIdRef: { current: null },
			currentContextRef: { current: null }
		});
		FloatingDelayGroupContext.displayName = "FloatingDelayGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/floating-ui-react/hooks/useClientPoint.mjs
function createVirtualElement(domElement, data) {
	let offsetX = null;
	let offsetY = null;
	let isAutoUpdateEvent = false;
	return {
		contextElement: domElement || void 0,
		getBoundingClientRect() {
			const domRect = domElement?.getBoundingClientRect() || {
				width: 0,
				height: 0,
				x: 0,
				y: 0
			};
			const isXAxis = data.axis === "x" || data.axis === "both";
			const isYAxis = data.axis === "y" || data.axis === "both";
			const canTrackCursorOnAutoUpdate = ["mouseenter", "mousemove"].includes(data.dataRef.current.openEvent?.type || "") && data.pointerType !== "touch";
			const width = data.axis === "y" ? domRect.width : 0;
			const height = data.axis === "x" ? domRect.height : 0;
			let x = domRect.x;
			let y = domRect.y;
			if (offsetX == null && data.x && isXAxis) offsetX = domRect.x - data.x;
			if (offsetY == null && data.y && isYAxis) offsetY = domRect.y - data.y;
			x -= offsetX || 0;
			y -= offsetY || 0;
			if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
				x = isXAxis && data.x != null ? data.x : x;
				y = isYAxis && data.y != null ? data.y : y;
			}
			isAutoUpdateEvent = true;
			return {
				width,
				height,
				x,
				y,
				top: y,
				right: x + width,
				bottom: y + height,
				left: x
			};
		}
	};
}
function isMouseBasedEvent(event) {
	return event != null && event.clientX != null;
}
/**
* Positions the floating element relative to a client point (in the viewport),
* such as the mouse position. By default, it follows the mouse cursor.
* @see https://floating-ui.com/docs/useClientPoint
*/
function useClientPoint(store, props = {}) {
	const { enabled = true, axis = "both" } = props;
	const open = store.useState("open");
	const floating = store.useState("floatingElement");
	const domReference = store.useState("domReferenceElement");
	const dataRef = store.context.dataRef;
	const initialRef = import_react$11.useRef(false);
	const cleanupListenerRef = import_react$11.useRef(null);
	const [pointerType, setPointerType] = import_react$11.useState();
	const [reactive, setReactive] = import_react$11.useState([]);
	const resetReference = useStableCallback((reference) => {
		store.set("positionReference", reference);
	});
	const setReference = useStableCallback((newX, newY, referenceElement) => {
		if (initialRef.current) return;
		if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) return;
		store.set("positionReference", createVirtualElement(referenceElement ?? domReference, {
			x: newX,
			y: newY,
			axis,
			dataRef,
			pointerType
		}));
	});
	const handleReferenceEnterOrMove = useStableCallback((event) => {
		if (!open) setReference(event.clientX, event.clientY, event.currentTarget);
		else if (!cleanupListenerRef.current) {
			setReference(event.clientX, event.clientY, event.currentTarget);
			setReactive([]);
		}
	});
	const openCheck = isMouseLikePointerType(pointerType) ? floating : open;
	import_react$11.useEffect(() => {
		if (!enabled) {
			resetReference(domReference);
			return;
		}
		if (!openCheck) return;
		function cleanupListener() {
			cleanupListenerRef.current?.();
			cleanupListenerRef.current = null;
		}
		const win = getWindow(floating);
		function handleMouseMove(event) {
			const target = getTarget(event);
			if (!contains(floating, target)) setReference(event.clientX, event.clientY);
			else cleanupListener();
		}
		if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) cleanupListenerRef.current = addEventListener(win, "mousemove", handleMouseMove);
		else resetReference(domReference);
		return cleanupListener;
	}, [
		openCheck,
		enabled,
		floating,
		dataRef,
		domReference,
		store,
		setReference,
		resetReference,
		reactive
	]);
	import_react$11.useEffect(() => () => {
		store.set("positionReference", null);
	}, [store]);
	import_react$11.useEffect(() => {
		if (enabled && !floating) initialRef.current = false;
	}, [enabled, floating]);
	import_react$11.useEffect(() => {
		if (!enabled && open) initialRef.current = true;
	}, [enabled, open]);
	const reference = import_react$11.useMemo(() => {
		function setPointerTypeRef(event) {
			setPointerType(event.pointerType);
		}
		return {
			onPointerDown: setPointerTypeRef,
			onPointerEnter: setPointerTypeRef,
			onMouseMove: handleReferenceEnterOrMove,
			onMouseEnter: handleReferenceEnterOrMove
		};
	}, [handleReferenceEnterOrMove]);
	return import_react$11.useMemo(() => enabled ? {
		reference,
		trigger: reference
	} : {}, [enabled, reference]);
}
var import_react$11;
function init_useClientPoint() {
	return (init_useClientPoint = __esmMin((() => {
		import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_floating_ui_utils_dom();
		init_element();
		init_event();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/FloatingPortalLite.mjs
var import_react$10, import_react_dom, import_jsx_runtime$3, FloatingPortalLite;
function init_FloatingPortalLite() {
	return (init_FloatingPortalLite = __esmMin((() => {
		import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
		init_FloatingPortal();
		import_jsx_runtime$3 = require_jsx_runtime();
		FloatingPortalLite = /*#__PURE__*/ import_react$10.forwardRef(function FloatingPortalLite(componentProps, forwardedRef) {
			const { children, container, className, render, style, ...elementProps } = componentProps;
			const { node: portalNode, subtree: portalSubtree } = useFloatingPortalNode({
				container,
				ref: forwardedRef,
				componentProps,
				elementProps
			});
			if (!portalSubtree && !portalNode) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime$3.jsxs)(import_react$10.Fragment, { children: [portalSubtree, portalNode && /*#__PURE__*/ import_react_dom.createPortal(children, portalNode)] });
		});
		FloatingPortalLite.displayName = "FloatingPortalLite";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/root/TooltipRootContext.mjs
function useTooltipRootContext(optional) {
	const context = import_react$9.useContext(TooltipRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>.");
	return context;
}
var import_react$9, TooltipRootContext;
function init_TooltipRootContext() {
	return (init_TooltipRootContext = __esmMin((() => {
		import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
		TooltipRootContext = /*#__PURE__*/ import_react$9.createContext(void 0);
		TooltipRootContext.displayName = "TooltipRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/store/TooltipStore.mjs
function createInitialState(initialState, triggerElements, floatingId, nested = false) {
	return {
		...createInitialPopupStoreState(triggerElements, floatingId, nested),
		disabled: false,
		instantType: void 0,
		isInstantPhase: false,
		trackCursorAxis: "none",
		disableHoverablePopup: false,
		openChangeReason: null,
		closeOnClick: true,
		closeDelay: 0,
		adaptiveOrigin: void 0,
		...initialState
	};
}
function createInitialContext(triggerElements) {
	return {
		popupRef: /*#__PURE__*/ import_react$8.createRef(),
		onOpenChange: void 0,
		onOpenChangeComplete: void 0,
		triggerElements
	};
}
var import_react$8, selectors, TooltipStore;
function init_TooltipStore() {
	return (init_TooltipStore = __esmMin((() => {
		import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_ReactStore();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_popupStoreUtils(), init_store(), init_popupTriggerMap();
		selectors = {
			...popupStoreSelectors,
			disabled: (state) => state.disabled,
			instantType: (state) => state.instantType,
			isInstantPhase: (state) => state.isInstantPhase,
			trackCursorAxis: (state) => state.trackCursorAxis,
			disableHoverablePopup: (state) => state.disableHoverablePopup,
			lastOpenChangeReason: (state) => state.openChangeReason,
			closeOnClick: (state) => state.closeOnClick,
			appliedTriggerProps: (state, apply) => apply ? state.activeTriggerProps : void 0,
			closeDelay: (state) => state.closeDelay,
			adaptiveOrigin: (state) => state.adaptiveOrigin
		};
		TooltipStore = class extends ReactStore {
			constructor(initialState, floatingId, nested) {
				const triggerElements = new PopupTriggerMap();
				super(createInitialState(initialState, triggerElements, floatingId, nested), createInitialContext(triggerElements), selectors);
			}
			setOpen = (nextOpen, eventDetails) => {
				applyPopupOpenChange(this, nextOpen, eventDetails, { extraState: { openChangeReason: eventDetails.reason } });
			};
			cancelPendingOpen(event) {
				this.state.floatingRootContext.dispatchOpenChange(false, createChangeEventDetails(triggerPress, event));
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/root/TooltipRoot.mjs
function TooltipInteractions({ store, disabled, trackCursorAxis }) {
	const floatingRootContext = store.useState("floatingRootContext");
	const dismiss = useDismiss(floatingRootContext, {
		enabled: !disabled,
		referencePress: () => store.select("closeOnClick")
	});
	const clientPoint = useClientPoint(floatingRootContext, {
		enabled: !disabled && trackCursorAxis !== "none",
		axis: trackCursorAxis === "none" ? void 0 : trackCursorAxis
	});
	const triggerProps = import_react$7.useMemo(() => mergeProps(clientPoint.reference, dismiss.reference), [clientPoint.reference, dismiss.reference]);
	usePopupInteractionProps(store, {
		activeTriggerProps: triggerProps,
		inactiveTriggerProps: triggerProps,
		popupProps: dismiss.floating ?? EMPTY_OBJECT
	});
	return null;
}
var import_react$7, import_jsx_runtime$2, TooltipRoot;
function init_TooltipRoot() {
	return (init_TooltipRoot = __esmMin((() => {
		import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_fastHooks();
		init_empty();
		init_useIsoLayoutEffect();
		init_TooltipRootContext();
		init_useClientPoint(), init_useDismiss();
		init_createBaseUIEventDetails();
		init_popupStoreUtils();
		init_mergeProps();
		init_TooltipStore();
		init_reason_parts();
		import_jsx_runtime$2 = require_jsx_runtime();
		TooltipRoot = fastComponent(function TooltipRoot(props) {
			const { disabled: disabled$1 = false, defaultOpen = false, open: openProp, disableHoverablePopup = false, trackCursorAxis = "none", actionsRef, onOpenChange, onOpenChangeComplete, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, children } = props;
			const store = usePopupRootStore((floatingId, nested) => new TooltipStore({
				open: defaultOpen,
				openProp,
				activeTriggerId: defaultTriggerIdProp,
				triggerIdProp
			}, floatingId, nested));
			store.useControlledProp("openProp", openProp);
			store.useControlledProp("triggerIdProp", triggerIdProp);
			store.useContextCallback("onOpenChange", onOpenChange);
			store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
			const openState = store.useState("open");
			const open = !disabled$1 && openState;
			const activeTriggerId = store.useState("activeTriggerId");
			const mounted = store.useState("mounted");
			const payload = store.useState("payload");
			store.useSyncedValues({
				trackCursorAxis,
				disableHoverablePopup,
				disabled: disabled$1
			});
			useImplicitActiveTrigger(store, { closeOnActiveTriggerUnmount: true });
			const { forceUnmount, transitionStatus } = useOpenStateTransitions(open, store);
			const isInstantPhase = store.useState("isInstantPhase");
			const instantType = store.useState("instantType");
			const lastOpenChangeReason = store.useState("lastOpenChangeReason");
			const previousInstantTypeRef = import_react$7.useRef(null);
			useIsoLayoutEffect(() => {
				if (openState && disabled$1) store.setOpen(false, createChangeEventDetails(disabled));
			}, [
				openState,
				disabled$1,
				store
			]);
			useIsoLayoutEffect(() => {
				if (transitionStatus === "ending" && lastOpenChangeReason === "none" || transitionStatus !== "ending" && isInstantPhase) {
					if (instantType !== "delay") previousInstantTypeRef.current = instantType;
					store.set("instantType", "delay");
				} else if (previousInstantTypeRef.current !== null) {
					store.set("instantType", previousInstantTypeRef.current);
					previousInstantTypeRef.current = null;
				}
			}, [
				transitionStatus,
				isInstantPhase,
				lastOpenChangeReason,
				instantType,
				store
			]);
			useIsoLayoutEffect(() => {
				if (open) {
					if (activeTriggerId == null) store.set("payload", void 0);
				}
			}, [
				store,
				activeTriggerId,
				open
			]);
			import_react$7.useImperativeHandle(actionsRef, () => ({
				unmount: forceUnmount,
				close: () => store.setOpen(false, createChangeEventDetails(imperativeAction))
			}), [forceUnmount, store]);
			const shouldRenderInteractions = open || mounted || !disabled$1 && trackCursorAxis !== "none";
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsxs)(TooltipRootContext.Provider, {
				value: store,
				children: [
					handle && /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(PopupHandleAttachment, {
						handle,
						store
					}),
					shouldRenderInteractions && /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(TooltipInteractions, {
						store,
						disabled: disabled$1,
						trackCursorAxis
					}),
					typeof children === "function" ? children({ payload }) : children
				]
			});
		});
		TooltipRoot.displayName = "TooltipRoot";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/provider/TooltipProviderContext.mjs
function useTooltipProviderContext() {
	return import_react$6.useContext(TooltipProviderContext);
}
var import_react$6, TooltipProviderContext;
function init_TooltipProviderContext() {
	return (init_TooltipProviderContext = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		TooltipProviderContext = /*#__PURE__*/ import_react$6.createContext(void 0);
		TooltipProviderContext.displayName = "TooltipProviderContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.mjs
function getTargetElement(event) {
	const target = getTarget(event);
	return isElement(target) ? target : null;
}
var import_react$5, TOOLTIP_TRIGGER_IDENTIFIER, TooltipTrigger;
function init_TooltipTrigger() {
	return (init_TooltipTrigger = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_floating_ui_utils_dom();
		init_fastHooks();
		init_useTimeout();
		init_useValueAsRef();
		init_TooltipRootContext();
		init_popupStateMapping();
		init_useRenderElement();
		init_usePopupHandleStore(), init_popupStoreUtils();
		init_useBaseUiId();
		init_TooltipProviderContext();
		init_safePolygon(), init_FloatingDelayGroup(), init_useFocus(), init_useHoverReferenceInteraction();
		init_element();
		init_event();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useHoverInteractionSharedState();
		init_useHoverShared();
		init_TooltipTriggerDataAttributes();
		TOOLTIP_TRIGGER_IDENTIFIER = "data-base-ui-tooltip-trigger";
		TooltipTrigger = fastComponentRef(function TooltipTrigger(componentProps, forwardedRef) {
			const { render, className, style, handle, payload, disabled: disabledProp, delay, closeOnClick = true, closeDelay, id: idProp, ...elementProps } = componentProps;
			const rootContext = useTooltipRootContext(true);
			const store = usePopupHandleStore(handle) ?? rootContext;
			if (!store) throw new Error("Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle.");
			const thisTriggerId = useBaseUiId(idProp);
			const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
			const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
			const floatingRootContext = store.useState("floatingRootContext");
			const triggerElementRef = import_react$5.useRef(null);
			const closeDelayWithDefault = closeDelay ?? 0;
			const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
				payload,
				closeOnClick,
				closeDelay: closeDelayWithDefault
			});
			const providerDelay = useTooltipProviderContext();
			const { activeIdRef, delayRef, isInstantPhase, hasProvider } = useDelayGroup(floatingRootContext, { open: isOpenedByThisTrigger });
			const hoverInteraction = useHoverInteractionSharedState(floatingRootContext);
			store.useSyncedValue("isInstantPhase", isInstantPhase);
			const rootDisabled = store.useState("disabled");
			const disabled = disabledProp ?? rootDisabled;
			const disabledRef = useValueAsRef(disabled);
			const trackCursorAxis = store.useState("trackCursorAxis");
			const disableHoverablePopup = store.useState("disableHoverablePopup");
			const isNestedTriggerHoveredRef = import_react$5.useRef(false);
			const nestedTriggerOpenTimeout = useTimeout();
			const pointerTypeRef = import_react$5.useRef(void 0);
			function getOpenDelay() {
				if (hasProvider && activeIdRef.current != null) return 0;
				return delay ?? providerDelay ?? 600;
			}
			function isEnabledNestedTriggerTarget(target) {
				const triggerEl = triggerElementRef.current;
				if (!triggerEl || !target) return false;
				const nearestTrigger = closest(target, `[${TOOLTIP_TRIGGER_IDENTIFIER}]`);
				return nearestTrigger !== null && nearestTrigger !== triggerEl && contains(triggerEl, nearestTrigger);
			}
			function detectNestedTriggerHover(target) {
				const nestedTriggerHovered = isEnabledNestedTriggerTarget(target);
				isNestedTriggerHoveredRef.current = nestedTriggerHovered;
				if (nestedTriggerHovered) {
					hoverInteraction.openChangeTimeout.clear();
					hoverInteraction.restTimeout.clear();
					hoverInteraction.restTimeoutPending = false;
					nestedTriggerOpenTimeout.clear();
				}
				return nestedTriggerHovered;
			}
			const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
				enabled: !disabled,
				mouseOnly: true,
				move: false,
				handleClose: !disableHoverablePopup && trackCursorAxis !== "both" ? safePolygon() : null,
				restMs: getOpenDelay,
				delay() {
					if (closeDelay == null && hasProvider) return { close: getDelay(delayRef.current, "close") };
					return { close: closeDelayWithDefault };
				},
				triggerElementRef,
				isActiveTrigger: isTriggerActive,
				isClosing: () => store.select("transitionStatus") === "ending",
				shouldOpen() {
					return !isNestedTriggerHoveredRef.current;
				}
			});
			const focusProps = useFocus(floatingRootContext, { enabled: !disabled }).reference;
			const handleNestedTriggerHover = (event) => {
				const wasNestedTriggerHovered = isNestedTriggerHoveredRef.current;
				const target = getTargetElement(event);
				const nestedTriggerHovered = detectNestedTriggerHover(target);
				const triggerEl = triggerElementRef.current;
				const targetInsideTrigger = triggerEl && target && contains(triggerEl, target);
				if (nestedTriggerHovered && store.select("open") && store.select("lastOpenChangeReason") === "trigger-hover") {
					store.setOpen(false, createChangeEventDetails(triggerHover, event));
					return;
				}
				if (wasNestedTriggerHovered && !nestedTriggerHovered && targetInsideTrigger && !disabledRef.current && !store.select("open") && triggerEl && isMouseLikePointerType(pointerTypeRef.current)) {
					const open = () => {
						if (!isNestedTriggerHoveredRef.current && !disabledRef.current && !store.select("open")) store.setOpen(true, createChangeEventDetails(triggerHover, event, triggerEl));
					};
					const openDelay = getOpenDelay();
					if (openDelay === 0) {
						nestedTriggerOpenTimeout.clear();
						open();
					} else nestedTriggerOpenTimeout.start(openDelay, open);
				}
			};
			const rootTriggerProps = store.useState("appliedTriggerProps", isMountedByThisTrigger || trackCursorAxis !== "none");
			return useRenderElement("button", componentProps, {
				state: { open: isOpenedByThisTrigger },
				ref: [
					forwardedRef,
					registerTrigger,
					triggerElementRef
				],
				props: [
					hoverProps,
					focusProps,
					rootTriggerProps,
					{
						onMouseOver(event) {
							handleNestedTriggerHover(event.nativeEvent);
						},
						onFocus(event) {
							if (isEnabledNestedTriggerTarget(getTargetElement(event.nativeEvent))) event.preventBaseUIHandler();
						},
						onMouseLeave() {
							isNestedTriggerHoveredRef.current = false;
							nestedTriggerOpenTimeout.clear();
							pointerTypeRef.current = void 0;
						},
						onPointerEnter(event) {
							pointerTypeRef.current = event.pointerType;
						},
						onPointerDown(event) {
							pointerTypeRef.current = event.pointerType;
							store.set("closeOnClick", closeOnClick);
							if (closeOnClick && !store.select("open")) store.cancelPendingOpen(event.nativeEvent);
						},
						onClick(event) {
							if (closeOnClick && !store.select("open")) store.cancelPendingOpen(event.nativeEvent);
						},
						id: thisTriggerId,
						[triggerDisabled]: disabled ? "" : void 0,
						[TOOLTIP_TRIGGER_IDENTIFIER]: disabled ? void 0 : ""
					},
					elementProps
				],
				stateAttributesMapping: triggerOpenStateMapping
			});
		});
		TooltipTrigger.displayName = "TooltipTrigger";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/portal/TooltipPortalContext.mjs
function useTooltipPortalContext() {
	const value = import_react$4.useContext(TooltipPortalContext);
	if (value === void 0) throw new Error("Base UI: <Tooltip.Portal> is missing.");
	return value;
}
var import_react$4, TooltipPortalContext;
function init_TooltipPortalContext() {
	return (init_TooltipPortalContext = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		TooltipPortalContext = /*#__PURE__*/ import_react$4.createContext(void 0);
		TooltipPortalContext.displayName = "TooltipPortalContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/portal/TooltipPortal.mjs
var import_react$3, import_jsx_runtime$1, TooltipPortal;
function init_TooltipPortal() {
	return (init_TooltipPortal = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_TooltipRootContext();
		init_TooltipPortalContext();
		init_FloatingPortalLite();
		import_jsx_runtime$1 = require_jsx_runtime();
		TooltipPortal = /*#__PURE__*/ import_react$3.forwardRef(function TooltipPortal(props, forwardedRef) {
			const { keepMounted = false, ...portalProps } = props;
			if (!(useTooltipRootContext().useState("mounted") || keepMounted)) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(TooltipPortalContext.Provider, {
				value: keepMounted,
				children: /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(FloatingPortalLite, {
					ref: forwardedRef,
					...portalProps
				})
			});
		});
		TooltipPortal.displayName = "TooltipPortal";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/positioner/TooltipPositionerContext.mjs
function useTooltipPositionerContext() {
	const context = import_react$2.useContext(TooltipPositionerContext);
	if (context === void 0) throw new Error("Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>.");
	return context;
}
var import_react$2, TooltipPositionerContext;
function init_TooltipPositionerContext() {
	return (init_TooltipPositionerContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		TooltipPositionerContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		TooltipPositionerContext.displayName = "TooltipPositionerContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.mjs
var import_react$1, import_jsx_runtime, TooltipPositioner;
function init_TooltipPositioner() {
	return (init_TooltipPositioner = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_TooltipRootContext();
		init_TooltipPositionerContext();
		init_useAnchorPositioning();
		init_TooltipPortalContext();
		init_constants();
		init_usePositioner();
		import_jsx_runtime = require_jsx_runtime();
		TooltipPositioner = /*#__PURE__*/ import_react$1.forwardRef(function TooltipPositioner(componentProps, forwardedRef) {
			const { render, className, anchor, positionMethod = "absolute", side = "top", align = "center", sideOffset = 0, alignOffset = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance = POPUP_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
			const store = useTooltipRootContext();
			const keepMounted = useTooltipPortalContext();
			const open = store.useState("open");
			const mounted = store.useState("mounted");
			const trackCursorAxis = store.useState("trackCursorAxis");
			const disableHoverablePopup = store.useState("disableHoverablePopup");
			const floatingRootContext = store.useState("floatingRootContext");
			const instantType = store.useState("instantType");
			const transitionStatus = store.useState("transitionStatus");
			const adaptiveOrigin = store.useState("adaptiveOrigin");
			const positioning = useAnchorPositioning({
				anchor,
				positionMethod,
				floatingRootContext,
				mounted,
				side,
				sideOffset,
				align,
				alignOffset,
				collisionBoundary,
				collisionPadding,
				sticky,
				arrowPadding,
				disableAnchorTracking,
				keepMounted,
				collisionAvoidance,
				adaptiveOrigin
			});
			const state = import_react$1.useMemo(() => ({
				open,
				side: positioning.side,
				align: positioning.align,
				anchorHidden: positioning.anchorHidden,
				instant: trackCursorAxis !== "none" ? "tracking-cursor" : instantType
			}), [
				open,
				positioning.side,
				positioning.align,
				positioning.anchorHidden,
				trackCursorAxis,
				instantType
			]);
			const element = usePositioner(componentProps, state, {
				styles: positioning.positionerStyles,
				transitionStatus,
				props: elementProps,
				refs: [forwardedRef, store.useStateSetter("positionerElement")],
				hidden: !mounted,
				inert: !open || trackCursorAxis === "both" || disableHoverablePopup
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(TooltipPositionerContext.Provider, {
				value: positioning,
				children: element
			});
		});
		TooltipPositioner.displayName = "TooltipPositioner";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/popup/TooltipPopup.mjs
var import_react, TooltipPopup;
function init_TooltipPopup() {
	return (init_TooltipPopup = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_TooltipRootContext();
		init_TooltipPositionerContext();
		init_popupStateMapping();
		init_useOpenChangeComplete();
		init_useRenderElement();
		init_getDisabledMountTransitionStyles();
		init_useHoverFloatingInteraction();
		init_popupStoreUtils();
		TooltipPopup = /*#__PURE__*/ import_react.forwardRef(function TooltipPopup(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const store = useTooltipRootContext();
			const { side, align } = useTooltipPositionerContext();
			const open = store.useState("open");
			const instantType = store.useState("instantType");
			const transitionStatus = store.useState("transitionStatus");
			const popupProps = store.useState("popupProps");
			const floatingContext = store.useState("floatingRootContext");
			const disabled = store.useState("disabled");
			const closeDelay = store.useState("closeDelay");
			useOpenChangeComplete({
				open,
				ref: store.context.popupRef,
				onComplete() {
					if (open) store.context.onOpenChangeComplete?.(true);
				}
			});
			useHoverFloatingInteraction(floatingContext, {
				enabled: !disabled,
				closeDelay
			});
			const setPopupElement = store.useStateSetter("popupElement");
			return useRenderElement("div", componentProps, {
				state: {
					open,
					side,
					align,
					instant: instantType,
					transitionStatus
				},
				ref: [
					forwardedRef,
					store.context.popupRef,
					setPopupElement
				],
				props: [
					FOCUSABLE_POPUP_PROPS,
					popupProps,
					getDisabledMountTransitionStyles(transitionStatus),
					elementProps
				],
				stateAttributesMapping: popupTransitionStateMapping
			});
		});
		TooltipPopup.displayName = "TooltipPopup";
	})))();
}
//#endregion
export { TooltipPortal as a, init_TooltipTrigger as c, TooltipRoot as d, init_TooltipRoot as f, init_build_module as g, build_module_exports as h, init_TooltipPositioner as i, TooltipProviderContext as l, init_FloatingDelayGroup as m, init_TooltipPopup as n, init_TooltipPortal as o, FloatingDelayGroup as p, TooltipPositioner as r, TooltipTrigger as s, TooltipPopup as t, init_TooltipProviderContext as u };
