import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { $ as hasFocusWithin, A as defaultValue, M as disabledFromElement, N as disabledFromProps, O as chain, T as addGlobalEventListener, a as init_dist, c as useAttribute, ct as isFalsyBooleanCallback, g as useMergeRefs, h as useLiveRef, i as forwardRef, k as contains, l as useBooleanEvent, m as useIsMouseMoving, n as createHook, nt as init_dist$1, r as createStoreContext, rt as invariant$1, t as createElement, u as useEvent, v as usePortalRef, w as useWrapElement, y as useSafeLayoutEffect } from "./dist-DgYpwR44.js";
import { D as init_C4_D9PgF, a as useStore, b as init_focusable, f as init_dist$3, i as init_dist$2, k as trulyDisabledFromElement, o as useStoreProps, s as useStoreState, u as createStore, v as sync, x as useFocusable } from "./CDh2UhnG-eN0icMPG.js";
import { _ as PopoverScopedContextProvider, a as init_popover, g as PopoverContextProvider, i as init_popover_store, l as createDialogComponent, n as usePopoverStoreProps, o as usePopover, r as createPopoverStore, t as init_popover_store$1, u as init_DpKu70iZ, v as init_popover_context } from "./popover-store-BWOmbx-S.js";
import { i as init_progress, r as init_time_conversion } from "./proxy-B8JqJoDN.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/hovercard/hovercard-context.js
var ctx$1, useHovercardProviderContext, HovercardContextProvider, HovercardScopedContextProvider;
function init_hovercard_context() {
	return (init_hovercard_context = __esmMin((() => {
		init_popover_context();
		init_dist();
		ctx$1 = createStoreContext([PopoverContextProvider], [PopoverScopedContextProvider]);
		ctx$1.useContext;
		ctx$1.useScopedContext;
		useHovercardProviderContext = ctx$1.useProviderContext;
		HovercardContextProvider = ctx$1.ContextProvider;
		HovercardScopedContextProvider = ctx$1.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/hovercard/utils/polygon.js
function getEventPoint(event) {
	return [event.clientX, event.clientY];
}
function isPointInPolygon(point, polygon) {
	const [x, y] = point;
	let inside = false;
	const length = polygon.length;
	for (let l = length, i = 0, j = l - 1; i < l; j = i++) {
		const currentPoint = polygon[i];
		const previousPoint = polygon[j];
		const vertexPoint = polygon[j === 0 ? l - 1 : j - 1];
		if (currentPoint == null) return false;
		if (previousPoint == null) return false;
		if (vertexPoint == null) return false;
		const [xi, yi] = currentPoint;
		const [xj, yj] = previousPoint;
		const [, vy] = vertexPoint;
		const where = (yi - yj) * (x - xi) - (xi - xj) * (y - yi);
		if (yj < yi) {
			if (y >= yj && y < yi) {
				if (where === 0) return true;
				if (where > 0) {
					if (y === yj) {
						if (y > vy) inside = !inside;
					} else inside = !inside;
				}
			}
		} else if (yi < yj) {
			if (y > yi && y <= yj) {
				if (where === 0) return true;
				if (where < 0) {
					if (y === yj) {
						if (y < vy) inside = !inside;
					} else inside = !inside;
				}
			}
		} else if (y === yi && (x >= xj && x <= xi || x >= xi && x <= xj)) return true;
	}
	return inside;
}
function getEnterPointPlacement(enterPoint, rect) {
	const { top, right, bottom, left } = rect;
	const [x, y] = enterPoint;
	return [x < left ? "left" : x > right ? "right" : null, y < top ? "top" : y > bottom ? "bottom" : null];
}
function getElementPolygon(element, enterPoint) {
	const rect = element.getBoundingClientRect();
	const { top, right, bottom, left } = rect;
	const [x, y] = getEnterPointPlacement(enterPoint, rect);
	const polygon = [enterPoint];
	if (x) {
		if (y !== "top") polygon.push([x === "left" ? left : right, top]);
		polygon.push([x === "left" ? right : left, top]);
		polygon.push([x === "left" ? right : left, bottom]);
		if (y !== "bottom") polygon.push([x === "left" ? left : right, bottom]);
	} else if (y === "top") {
		polygon.push([left, top]);
		polygon.push([left, bottom]);
		polygon.push([right, bottom]);
		polygon.push([right, top]);
	} else {
		polygon.push([left, bottom]);
		polygon.push([left, top]);
		polygon.push([right, top]);
		polygon.push([right, bottom]);
	}
	return polygon;
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/__chunks/CW2hYOhU.js
/**
* Wraps the `hideOnEscape` and `onClose` props of a dialog to call
* `onEscapeClose` once a close that Escape requested goes through. The
* `hideOnEscape` wrapper only decides whether Escape closes the dialog, so the
* work that follows a close doesn't run when `onClose` prevents it.
* https://github.com/ariakit/ariakit/issues/7622
*/
function useEscapeClose({ hideOnEscape, onClose, onEscapeClose }) {
	const acceptedEscapeRef = (0, import_react$2.useRef)(null);
	return {
		hideOnEscape: useEvent((event) => {
			if (isFalsyBooleanCallback(hideOnEscape, event)) return false;
			const acceptedEscape = {};
			acceptedEscapeRef.current = acceptedEscape;
			setTimeout(() => {
				if (acceptedEscapeRef.current !== acceptedEscape) return;
				acceptedEscapeRef.current = null;
			});
			return true;
		}),
		onClose: useEvent((event) => {
			const acceptedEscape = acceptedEscapeRef.current;
			acceptedEscapeRef.current = null;
			onClose?.(event);
			if (event.defaultPrevented) return;
			if (!acceptedEscape) return;
			onEscapeClose();
		})
	};
}
function isMovingOnHovercard(path, card, hoverElements, nested) {
	if (hasFocusWithin(card)) return true;
	if (path.includes(card)) return true;
	if (hoverElements.some((element) => element && path.includes(element))) return true;
	if (nested?.some((card) => hasFocusWithin(card) || path.includes(card))) return true;
	return false;
}
function disableEventOnTransit({ event, element, enterPointRef, disablePointerEvents, refreshEnterPoint = false }) {
	const enterPoint = enterPointRef.current;
	if (!enterPoint) return false;
	const currentPoint = getEventPoint(event);
	if (!isPointInPolygon(currentPoint, getElementPolygon(element, enterPoint))) return false;
	if (refreshEnterPoint) enterPointRef.current = currentPoint;
	if (disablePointerEvents(event)) {
		event.preventDefault();
		event.stopPropagation();
	}
	return true;
}
function useAutoFocusOnHide({ store, ...props }) {
	const [autoFocusOnHide, setAutoFocusOnHide] = (0, import_react$2.useState)(false);
	const mounted = useStoreState(store, "mounted");
	(0, import_react$2.useEffect)(() => {
		if (!mounted) setAutoFocusOnHide(false);
	}, [mounted]);
	const onFocusProp = props.onFocus;
	const onFocus = useEvent((event) => {
		onFocusProp?.(event);
		if (event.defaultPrevented) return;
		setAutoFocusOnHide(true);
	});
	const finalFocusRef = (0, import_react$2.useRef)(null);
	(0, import_react$2.useEffect)(() => {
		return sync(store, ["anchorElement"], (state) => {
			finalFocusRef.current = state.anchorElement;
		});
	}, [store]);
	props = {
		autoFocusOnHide,
		finalFocus: finalFocusRef,
		...props,
		onFocus
	};
	return props;
}
var import_react$2, import_jsx_runtime$1, TagName$3, NestedHovercardContext, useHovercard;
function init_CW2hYOhU() {
	return (init_CW2hYOhU = __esmMin((() => {
		init_DpKu70iZ();
		init_popover();
		init_hovercard_context();
		init_dist();
		init_dist$1();
		import_react$2 = require_react();
		import_jsx_runtime$1 = require_jsx_runtime();
		init_dist$2();
		init_dist$3();
		TagName$3 = "div";
		NestedHovercardContext = (0, import_react$2.createContext)(null);
		useHovercard = createHook(function useHovercard({ store, modal = false, portal = modal, hideOnEscape = true, hideOnHoverOutside = true, disablePointerEventsOnApproach = !!hideOnHoverOutside, ...props }) {
			const context = useHovercardProviderContext();
			store = store || context;
			invariant$1(store, "Hovercard must receive a `store` prop or be wrapped in a HovercardProvider component.");
			const ref = (0, import_react$2.useRef)(null);
			const nestedHovercardsRef = (0, import_react$2.useRef)([]);
			const hideTimeoutRef = (0, import_react$2.useRef)(0);
			const enterPointRef = (0, import_react$2.useRef)(null);
			const { portalRef, domReady } = usePortalRef(portal, props.portalRef);
			const isMouseMoving = useIsMouseMoving();
			const mayHideOnHoverOutside = !!hideOnHoverOutside;
			const hideOnHoverOutsideProp = useBooleanEvent(hideOnHoverOutside);
			const mayDisablePointerEvents = !!disablePointerEventsOnApproach;
			const disablePointerEventsProp = useBooleanEvent(disablePointerEventsOnApproach);
			const open = useStoreState(store, "open");
			const mounted = useStoreState(store, "mounted");
			const clearHideTimeout = (0, import_react$2.useCallback)(() => {
				window.clearTimeout(hideTimeoutRef.current);
				hideTimeoutRef.current = 0;
			}, []);
			(0, import_react$2.useEffect)(() => {
				if (!domReady) return;
				if (!mounted) return;
				if (!mayHideOnHoverOutside && !mayDisablePointerEvents) return;
				const element = ref.current;
				if (!element) return;
				const onMouseMove = (event) => {
					if (!store) return;
					if (!isMouseMoving()) return;
					const { anchorElement, disclosureElement, hideTimeout, timeout } = store.getState();
					const path = event.composedPath();
					const hoverElements = [anchorElement, disclosureElement];
					const hoveredElement = hoverElements.find((element) => element && path.includes(element));
					if (isMovingOnHovercard(path, element, hoverElements, nestedHovercardsRef.current)) {
						enterPointRef.current = hoveredElement ? getEventPoint(event) : null;
						clearHideTimeout();
						return;
					}
					if (hideTimeoutRef.current) return;
					if (disableEventOnTransit({
						event,
						element,
						enterPointRef,
						disablePointerEvents: disablePointerEventsProp,
						refreshEnterPoint: true
					})) return;
					if (!hideOnHoverOutsideProp(event)) return;
					hideTimeoutRef.current = window.setTimeout(() => {
						hideTimeoutRef.current = 0;
						store?.hide();
					}, hideTimeout ?? timeout);
				};
				return chain(addGlobalEventListener("mousemove", onMouseMove, true), clearHideTimeout);
			}, [
				store,
				isMouseMoving,
				domReady,
				mounted,
				mayHideOnHoverOutside,
				mayDisablePointerEvents,
				nestedHovercardsRef,
				clearHideTimeout,
				disablePointerEventsProp,
				hideOnHoverOutsideProp
			]);
			(0, import_react$2.useEffect)(() => {
				if (!domReady) return;
				if (!mounted) return;
				if (!mayDisablePointerEvents) return;
				const disableEvent = (event) => {
					const element = ref.current;
					if (!element) return;
					disableEventOnTransit({
						event,
						element,
						enterPointRef,
						disablePointerEvents: disablePointerEventsProp
					});
				};
				return chain(addGlobalEventListener("mouseenter", disableEvent, true), addGlobalEventListener("mouseover", disableEvent, true), addGlobalEventListener("mouseout", disableEvent, true), addGlobalEventListener("mouseleave", disableEvent, true));
			}, [
				domReady,
				mounted,
				mayDisablePointerEvents,
				disablePointerEventsProp
			]);
			(0, import_react$2.useEffect)(() => {
				if (!domReady) return;
				if (open) return;
				store?.setAutoFocusOnShow(false);
			}, [
				store,
				domReady,
				open
			]);
			const openRef = useLiveRef(open);
			(0, import_react$2.useEffect)(() => {
				if (!domReady) return;
				return () => {
					if (!openRef.current) store?.setAutoFocusOnShow(false);
				};
			}, [store, domReady]);
			const registerOnParent = (0, import_react$2.useContext)(NestedHovercardContext);
			useSafeLayoutEffect(() => {
				if (modal) return;
				if (!portal) return;
				if (!mounted) return;
				if (!domReady) return;
				const element = ref.current;
				if (!element) return;
				return registerOnParent?.(element);
			}, [
				modal,
				portal,
				mounted,
				domReady,
				registerOnParent
			]);
			const registerNestedHovercard = (0, import_react$2.useCallback)((element) => {
				clearHideTimeout();
				nestedHovercardsRef.current = [...nestedHovercardsRef.current, element];
				const parentUnregister = registerOnParent?.(element);
				return () => {
					clearHideTimeout();
					nestedHovercardsRef.current = nestedHovercardsRef.current.filter((item) => item !== element);
					parentUnregister?.();
				};
			}, [clearHideTimeout, registerOnParent]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(HovercardScopedContextProvider, {
				value: store,
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(NestedHovercardContext.Provider, {
					value: registerNestedHovercard,
					children: element
				})
			}), [store, registerNestedHovercard]);
			props = {
				...props,
				ref: useMergeRefs(ref, props.ref)
			};
			props = useAutoFocusOnHide({
				store,
				...props
			});
			const autoFocusOnShow = useStoreState(store, ["autoFocusOnShow"], (state) => modal || state.autoFocusOnShow);
			const escapeClose = useEscapeClose({
				hideOnEscape,
				onClose: props.onClose,
				onEscapeClose() {
					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							if (!store?.getState().open) return;
							store.hide();
						});
					});
				}
			});
			props = usePopover({
				store,
				modal,
				portal,
				autoFocusOnShow,
				...props,
				portalRef,
				hideOnEscape: escapeClose.hideOnEscape,
				onClose: escapeClose.onClose
			});
			return props;
		});
		createDialogComponent(forwardRef(function Hovercard(props) {
			const htmlProps = useHovercard(props);
			return createElement(TagName$3, htmlProps);
		}), useHovercardProviderContext);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tooltip/tooltip-context.js
var ctx, useTooltipProviderContext, TooltipScopedContextProvider;
function init_tooltip_context() {
	return (init_tooltip_context = __esmMin((() => {
		init_hovercard_context();
		init_dist();
		ctx = createStoreContext([HovercardContextProvider], [HovercardScopedContextProvider]);
		ctx.useContext;
		ctx.useScopedContext;
		useTooltipProviderContext = ctx.useProviderContext;
		ctx.ContextProvider;
		TooltipScopedContextProvider = ctx.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tooltip/tooltip.js
var import_jsx_runtime, TagName$2, useTooltip, Tooltip;
function init_tooltip() {
	return (init_tooltip = __esmMin((() => {
		init_DpKu70iZ();
		init_CW2hYOhU();
		init_tooltip_context();
		init_dist();
		init_dist$1();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$2();
		TagName$2 = "div";
		useTooltip = createHook(function useTooltip({ store, portal = true, gutter = 8, preserveTabOrder = false, hideOnHoverOutside = true, hideOnInteractOutside = true, ...props }) {
			const context = useTooltipProviderContext();
			store = store || context;
			invariant$1(store, "Tooltip must receive a `store` prop or be wrapped in a TooltipProvider component.");
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			props = {
				role: useStoreState(store, ["type"], (state) => state.type === "description" ? "tooltip" : "none"),
				...props
			};
			props = useHovercard({
				...props,
				store,
				portal,
				gutter,
				preserveTabOrder,
				hideOnHoverOutside(event) {
					if (isFalsyBooleanCallback(hideOnHoverOutside, event)) return false;
					const anchorElement = store?.getState().anchorElement;
					if (!anchorElement) return true;
					if ("focusVisible" in anchorElement.dataset) return false;
					return true;
				},
				hideOnInteractOutside: (event) => {
					if (isFalsyBooleanCallback(hideOnInteractOutside, event)) return false;
					const anchorElement = store?.getState().anchorElement;
					if (!anchorElement) return true;
					if (contains(anchorElement, event.target)) return false;
					return true;
				}
			});
			return props;
		});
		Tooltip = createDialogComponent(forwardRef(function Tooltip(props) {
			const htmlProps = useTooltip(props);
			return createElement(TagName$2, htmlProps);
		}), useTooltipProviderContext);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/__chunks/Dv0S4FLv.js
var import_react$1, useHovercardTrigger;
function init_Dv0S4FLv() {
	return (init_Dv0S4FLv = __esmMin((() => {
		init_C4_D9PgF();
		init_focusable();
		init_dist();
		init_dist$1();
		import_react$1 = require_react();
		useHovercardTrigger = createHook(function useHovercardTrigger({ store, showOnHover = true, unstable_showOnHoverWhenDisabled: showOnHoverWhenDisabled = true, setAnchorElement = false, ...props }) {
			const disabled = disabledFromProps(props);
			const focusable = props.focusable !== false;
			const triggerRef = (0, import_react$1.useRef)(null);
			const showTimeoutRef = (0, import_react$1.useRef)(0);
			const isTrulyDisabled = useEvent((element) => {
				if (disabled && !focusable) return true;
				return trulyDisabledFromElement(element);
			});
			(0, import_react$1.useEffect)(() => () => window.clearTimeout(showTimeoutRef.current), []);
			(0, import_react$1.useEffect)(() => {
				const onMouseLeave = (event) => {
					const trigger = triggerRef.current;
					if (!trigger) return;
					if (event.target !== trigger) return;
					window.clearTimeout(showTimeoutRef.current);
					showTimeoutRef.current = 0;
				};
				return addGlobalEventListener("mouseleave", onMouseLeave, true);
			}, []);
			const onMouseMoveProp = props.onMouseMove;
			const showOnHoverProp = useBooleanEvent(showOnHover);
			const showOnHoverWhenDisabledProp = useBooleanEvent(showOnHoverWhenDisabled);
			const isMouseMoving = useIsMouseMoving();
			const onMouseMove = useEvent((event) => {
				onMouseMoveProp?.(event);
				if (event.defaultPrevented) return;
				if (showTimeoutRef.current) return;
				if (!isMouseMoving()) return;
				const element = event.currentTarget;
				if (isTrulyDisabled(element)) return;
				if (disabled || disabledFromElement(element)) {
					if (!showOnHoverWhenDisabledProp(event)) return;
				}
				if (!showOnHoverProp(event)) return;
				if (setAnchorElement) store.setAnchorElement(element);
				store.setDisclosureElement(element);
				const { showTimeout, timeout } = store.getState();
				const showHovercard = () => {
					showTimeoutRef.current = 0;
					if (!isMouseMoving()) return;
					if (isTrulyDisabled(element)) return;
					if (setAnchorElement) store.setAnchorElement(element);
					store.show();
					queueMicrotask(() => {
						store.setDisclosureElement(element);
					});
				};
				const timeoutMs = showTimeout ?? timeout;
				if (timeoutMs === 0) showHovercard();
				else showTimeoutRef.current = window.setTimeout(showHovercard, timeoutMs);
			});
			const onClickProp = props.onClick;
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				window.clearTimeout(showTimeoutRef.current);
				showTimeoutRef.current = 0;
			});
			const ref = (0, import_react$1.useCallback)((element) => {
				triggerRef.current = element;
				if (!setAnchorElement) return;
				const { anchorElement } = store.getState();
				if (anchorElement?.isConnected) return;
				store.setAnchorElement(element);
			}, [store, setAnchorElement]);
			props = {
				...props,
				ref: useMergeRefs(ref, props.ref),
				onMouseMove,
				onClick
			};
			props = useFocusable(props);
			return props;
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/hovercard/hovercard-anchor.js
var TagName$1, useHovercardAnchor;
function init_hovercard_anchor() {
	return (init_hovercard_anchor = __esmMin((() => {
		init_Dv0S4FLv();
		init_hovercard_context();
		init_dist();
		init_dist$1();
		TagName$1 = "a";
		useHovercardAnchor = createHook(function useHovercardAnchor({ store, showOnHover = true, ...props }) {
			const context = useHovercardProviderContext();
			store = store || context;
			invariant$1(store, "HovercardAnchor must receive a `store` prop or be wrapped in a HovercardProvider component.");
			return useHovercardTrigger({
				store,
				showOnHover,
				setAnchorElement: true,
				...props
			});
		});
		forwardRef(function HovercardAnchor(props) {
			const htmlProps = useHovercardAnchor(props);
			return createElement(TagName$1, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tooltip/tooltip-anchor.js
function createRemoveStoreCallback(store) {
	return () => {
		const { activeStore } = globalStore.getState();
		if (activeStore !== store) return;
		globalStore.setState("activeStore", null);
	};
}
function isEscapeKeyEvent(event) {
	if (!("key" in event)) return false;
	return event.key === "Escape";
}
function hideStore(store) {
	if (!store) return;
	hidingStores.add(store);
	store.hide();
	queueMicrotask(() => hidingStores.delete(store));
}
var import_react, TagName, globalStore, hidingStores, useTooltipAnchor, TooltipAnchor;
function init_tooltip_anchor() {
	return (init_tooltip_anchor = __esmMin((() => {
		init_hovercard_anchor();
		init_tooltip_context();
		init_dist();
		init_dist$1();
		import_react = require_react();
		init_dist$2();
		init_dist$3();
		TagName = "div";
		globalStore = createStore({ activeStore: null });
		hidingStores = /* @__PURE__ */ new WeakSet();
		useTooltipAnchor = createHook(function useTooltipAnchor({ store, showOnHover = true, ...props }) {
			const context = useTooltipProviderContext();
			store = store || context;
			invariant$1(store, "TooltipAnchor must receive a `store` prop or be wrapped in a TooltipProvider component.");
			const canShowOnHoverRef = (0, import_react.useRef)(false);
			(0, import_react.useEffect)(() => {
				return sync(store, ["mounted"], (state) => {
					if (state.mounted) return;
					canShowOnHoverRef.current = false;
				});
			}, [store]);
			const returningFocusRef = (0, import_react.useRef)(false);
			const returnedFocusRef = (0, import_react.useRef)(null);
			(0, import_react.useEffect)(() => {
				return sync(store, ["open"], (state) => {
					if (state.open) return;
					if (!store) return;
					const { contentElement } = store.getState();
					if (!contentElement) return;
					if (!hasFocusWithin(contentElement)) return;
					returningFocusRef.current = true;
					setTimeout(() => {
						returningFocusRef.current = false;
					});
				});
			}, [store]);
			const onFocusProp = props.onFocus;
			const onFocus = useEvent((event) => {
				onFocusProp?.(event);
				if (!returningFocusRef.current) return;
				returningFocusRef.current = false;
				returnedFocusRef.current = event.nativeEvent;
			});
			(0, import_react.useEffect)(() => {
				if (!store) return;
				const removeStore = createRemoveStoreCallback(store);
				return chain(removeStore, sync(store, ["mounted"], (state) => {
					if (!store) return;
					if (state.mounted) {
						const { activeStore } = globalStore.getState();
						if (activeStore !== store) {
							if (hidingStores.has(store)) return;
							hideStore(activeStore);
						}
						return globalStore.setState("activeStore", store);
					}
					const id = setTimeout(removeStore, store.getState().skipTimeout);
					return () => clearTimeout(id);
				}));
			}, [store]);
			const onMouseEnterProp = props.onMouseEnter;
			const onMouseEnter = useEvent((event) => {
				onMouseEnterProp?.(event);
				canShowOnHoverRef.current = true;
			});
			const onFocusVisibleProp = props.onFocusVisible;
			const onFocusVisible = useEvent((event) => {
				onFocusVisibleProp?.(event);
				if (event.defaultPrevented) return;
				if (isEscapeKeyEvent(event.nativeEvent)) return;
				if (event.nativeEvent === returnedFocusRef.current) return;
				store?.setAnchorElement(event.currentTarget);
				store?.show();
			});
			const onBlurProp = props.onBlur;
			const onBlur = useEvent((event) => {
				onBlurProp?.(event);
				if (event.defaultPrevented) return;
				const { activeStore } = globalStore.getState();
				canShowOnHoverRef.current = false;
				if (activeStore === store) globalStore.setState("activeStore", null);
			});
			const labelElement = useStoreState(store, ["type", "contentElement"], (state) => state.type === "label" ? state.contentElement : null);
			useAttribute(labelElement, "id");
			const labelledBy = labelElement?.id;
			props = {
				"aria-labelledby": props["aria-label"] == null ? labelledBy : void 0,
				...props,
				onMouseEnter,
				onFocus,
				onFocusVisible,
				onBlur
			};
			props = useHovercardAnchor({
				store,
				showOnHover(event) {
					if (!canShowOnHoverRef.current) return false;
					if (isFalsyBooleanCallback(showOnHover, event)) return false;
					const { activeStore } = globalStore.getState();
					if (!activeStore) return true;
					store?.show();
					return false;
				},
				...props
			});
			return props;
		});
		TooltipAnchor = forwardRef(function TooltipAnchor(props) {
			const htmlProps = useTooltipAnchor(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/hovercard/hovercard-store.js
/**
* Creates a hovercard store.
*/
function createHovercardStore(props = {}) {
	const syncState = props.store?.getState();
	const popover = createPopoverStore({
		...props,
		placement: defaultValue(props.placement, syncState?.placement, "bottom")
	});
	const timeout = defaultValue(props.timeout, syncState?.timeout, 500);
	const initialState = {
		...popover.getState(),
		timeout,
		showTimeout: defaultValue(props.showTimeout, syncState?.showTimeout),
		hideTimeout: defaultValue(props.hideTimeout, syncState?.hideTimeout),
		autoFocusOnShow: defaultValue(syncState?.autoFocusOnShow, false)
	};
	const hovercard = createStore(initialState, popover, props.store);
	return {
		...popover,
		...hovercard,
		setAutoFocusOnShow: (value) => hovercard.setState("autoFocusOnShow", value)
	};
}
function init_hovercard_store() {
	return (init_hovercard_store = __esmMin((() => {
		init_popover_store();
		init_dist$3();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/hovercard/hovercard-store.js
function useHovercardStoreProps(store, update, props) {
	useStoreProps(store, props, "timeout");
	useStoreProps(store, props, "showTimeout");
	useStoreProps(store, props, "hideTimeout");
	return usePopoverStoreProps(store, update, props);
}
function init_hovercard_store$1() {
	return (init_hovercard_store$1 = __esmMin((() => {
		init_popover_store$1();
		init_dist$2();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/tooltip/tooltip-store.js
/**
* Creates a tooltip store.
*/
function createTooltipStore(props = {}) {
	if (props.type === "label") console.warn("The `type` option on the tooltip store is deprecated.", "Render a visually hidden label or use the `aria-label` or `aria-labelledby` attributes on the anchor element instead.", "See https://ariakit.com/components/tooltip#tooltip-anchors-must-have-accessible-names");
	const syncState = props.store?.getState();
	const hovercard = createHovercardStore({
		...props,
		placement: defaultValue(props.placement, syncState?.placement, "top"),
		hideTimeout: defaultValue(props.hideTimeout, syncState?.hideTimeout, 0)
	});
	const initialState = {
		...hovercard.getState(),
		type: defaultValue(props.type, syncState?.type, "description"),
		skipTimeout: defaultValue(props.skipTimeout, syncState?.skipTimeout, 300)
	};
	const tooltip = createStore(initialState, hovercard, props.store);
	return {
		...hovercard,
		...tooltip
	};
}
function init_tooltip_store() {
	return (init_tooltip_store = __esmMin((() => {
		init_hovercard_store();
		init_dist$3();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tooltip/tooltip-store.js
function useTooltipStoreProps(store, update, props) {
	useStoreProps(store, props, "type");
	useStoreProps(store, props, "skipTimeout");
	return useHovercardStoreProps(store, update, props);
}
/**
* Creates a tooltip store to control the state of
* [Tooltip](https://ariakit.com/components/tooltip) components.
* @see https://ariakit.com/components/tooltip
* @example
* ```jsx
* const tooltip = useTooltipStore();
*
* <TooltipAnchor store={tooltip}>Anchor</TooltipAnchor>
* <Tooltip store={tooltip}>Tooltip</Tooltip>
* ```
*/
function useTooltipStore(props = {}) {
	const [store, update] = useStore(createTooltipStore, props);
	return useTooltipStoreProps(store, update, props);
}
function init_tooltip_store$1() {
	return (init_tooltip_store$1 = __esmMin((() => {
		init_hovercard_store$1();
		init_dist$2();
		init_tooltip_store();
	})))();
}
//#endregion
//#region ../node_modules/.store/motion-utils@11.18.1-N6R1XkSNe0bS34zaIkHQcA/node_modules/motion-utils/dist/es/noop.mjs
var noop;
function init_noop() {
	return (init_noop = __esmMin((() => {
		noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
	})))();
}
//#endregion
//#region ../node_modules/.store/motion-utils@11.18.1-N6R1XkSNe0bS34zaIkHQcA/node_modules/motion-utils/dist/es/errors.mjs
var warning, invariant;
function init_errors() {
	return (init_errors = __esmMin((() => {
		init_noop();
		warning = noop;
		invariant = noop;
		warning = (check, message) => {
			if (!check && typeof console !== "undefined") console.warn(message);
		};
		invariant = (check, message) => {
			if (!check) throw new Error(message);
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/motion-utils@11.18.1-N6R1XkSNe0bS34zaIkHQcA/node_modules/motion-utils/dist/es/index.mjs
function init_es() {
	return (init_es = __esmMin((() => {
		init_errors();
		init_noop();
		init_progress();
		init_time_conversion();
	})))();
}
//#endregion
//#region ../node_modules/.store/framer-motion@11.18.2-psrXHdCe5S9l_wz-xpDEKw/node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = lowerBound + (upperBound - lowerBound) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - x;
		if (currentX > 0) upperBound = currentT;
		else lowerBound = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
	return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
var calcBezier, subdivisionPrecision, subdivisionMaxIterations;
function init_cubic_bezier() {
	return (init_cubic_bezier = __esmMin((() => {
		init_es();
		calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
		subdivisionPrecision = 1e-7;
		subdivisionMaxIterations = 12;
	})))();
}
//#endregion
export { useHovercard as C, init_hovercard_context as E, useEscapeClose as S, HovercardScopedContextProvider as T, init_Dv0S4FLv as _, invariant as a, init_tooltip as b, noop as c, init_hovercard_store$1 as d, useHovercardStoreProps as f, init_tooltip_anchor as g, TooltipAnchor as h, init_errors as i, init_tooltip_store$1 as l, init_hovercard_store as m, init_cubic_bezier as n, warning as o, createHovercardStore as p, init_es as r, init_noop as s, cubicBezier as t, useTooltipStore as u, useHovercardTrigger as v, HovercardContextProvider as w, init_CW2hYOhU as x, Tooltip as y };
