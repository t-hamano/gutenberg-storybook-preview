import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { d as NOOP, f as init_empty, i as init_mergeProps, o as mergeProps, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_safeReact, n as useIsoLayoutEffect, r as SafeReact, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, g as useAnimationFrame, h as init_useAnimationFrame, l as endingStyle$2, o as useOpenChangeComplete, r as init_stateAttributesMapping } from "./useTransitionStatus-DtGN_KnE.js";
import { n as init_error, t as error } from "./error-0lokwdt8.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-CKMeYwmS.js";
import { A as init_createBaseUIEventDetails, C as swipe, O as createChangeEventDetails, a as closeWatcher, u as init_reason_parts } from "./reason-parts-0ghxNVBE.js";
import { f as isElement, l as getWindow, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as ownerDocument } from "./owner-CcC_2sZ3.js";
import { r as addEventListener } from "./useValueAsRef-fShAMhQR.js";
import { j as init_os, k as android } from "./DirectionContext-BIiMId1B.js";
import { At as popupTransitionStateMapping, Ot as init_popupStateMapping, X as BASE_UI_SWIPE_IGNORE_ATTRIBUTE, Z as BASE_UI_SWIPE_IGNORE_SELECTOR, tt as init_constants, v as FOCUSABLE_POPUP_PROPS, w as init_popupStoreUtils } from "./DirectionProvider-ijBUoTP5.js";
import { c as FloatingFocusManager, l as init_FloatingFocusManager } from "./useOpenInteractionType-BJdBBuIW.js";
import { a as init_shadowDom, i as getTarget, n as closest, r as contains, t as activeElement } from "./shadowDom-C1kYxCnm.js";
import { a as dialogStateAttributesMapping, c as useDialogPortalContext, d as init_DialogRootContext, f as useDialogRootContext, i as init_DialogPortal, l as init_useRenderDialogRoot, n as init_DialogTitle, o as init_stateAttributesMapping$1, r as DialogPortal, s as init_DialogPortalContext, t as DialogTitle, u as useRenderDialogRoot } from "./DialogTitle-DG_nbyNT.js";
import { i as init_DialogClose, r as DialogClose } from "./DialogDescription-DehIBOF0.js";
import { a as COMPOSITE_KEYS, l as init_composite } from "./composite-BPnCh7aE.js";
import { n as findScrollableTouchTarget, r as init_scrollable, t as findScrollableAncestor } from "./scrollable-DcVL38pF.js";
import { t as clamp } from "./clamp-BJoWiF_E.js";
import { n as init_getElementTransform, t as getElementTransform } from "./getElementTransform-vgOFy9sS.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/viewport/DialogViewport.mjs
var import_react$11, DialogViewport;
function init_DialogViewport() {
	return (init_DialogViewport = __esmMin((() => {
		import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_DialogRootContext();
		init_DialogPortalContext();
		init_stateAttributesMapping$1();
		DialogViewport = /*#__PURE__*/ import_react$11.forwardRef(function DialogViewport(componentProps, forwardedRef) {
			const { render, className, style, children, ...elementProps } = componentProps;
			const keepMounted = useDialogPortalContext();
			const store = useDialogRootContext();
			const open = store.useState("open");
			const nested = store.useState("nested");
			const transitionStatus = store.useState("transitionStatus");
			const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
			const mounted = store.useState("mounted");
			const setViewportElement = store.useStateSetter("viewportElement");
			return useRenderElement("div", componentProps, {
				enabled: keepMounted || mounted,
				state: {
					open,
					nested,
					transitionStatus,
					nestedDialogOpen: nestedOpenDialogCount > 0
				},
				ref: [forwardedRef, setViewportElement],
				stateAttributesMapping: dialogStateAttributesMapping,
				props: [{
					role: "presentation",
					hidden: !mounted,
					style: { pointerEvents: !open ? "none" : void 0 },
					children
				}, elementProps]
			});
		});
		DialogViewport.displayName = "DialogViewport";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/viewport/DialogViewportDataAttributes.mjs
var nestedDialogOpen;
function init_DialogViewportDataAttributes() {
	return (init_DialogViewportDataAttributes = __esmMin((() => {
		init_popupStateMapping();
		nestedDialogOpen = "data-nested-dialog-open";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/popup/DrawerPopupCssVars.mjs
var nestedDrawers, height, frontmostHeight, swipeMovementX, swipeMovementY, snapPointOffset, swipeStrength;
function init_DrawerPopupCssVars() {
	return (init_DrawerPopupCssVars = __esmMin((() => {
		nestedDrawers = "--nested-drawers";
		height = "--drawer-height";
		frontmostHeight = "--drawer-frontmost-height";
		swipeMovementX = "--drawer-swipe-movement-x";
		swipeMovementY = "--drawer-swipe-movement-y";
		snapPointOffset = "--drawer-snap-point-offset";
		swipeStrength = "--drawer-swipe-strength";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/backdrop/DrawerBackdropCssVars.mjs
var swipeProgress;
function init_DrawerBackdropCssVars() {
	return (init_DrawerBackdropCssVars = __esmMin((() => {
		swipeProgress = "--drawer-swipe-progress";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/backdrop/DrawerBackdrop.mjs
var import_react$10, DrawerBackdrop;
function init_DrawerBackdrop() {
	return (init_DrawerBackdrop = __esmMin((() => {
		import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_DialogRootContext();
		init_useRenderElement();
		init_popupStateMapping();
		init_DrawerPopupCssVars();
		init_DrawerBackdropCssVars();
		DrawerBackdrop = /*#__PURE__*/ import_react$10.forwardRef(function DrawerBackdrop(componentProps, forwardedRef) {
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
						pointerEvents: !open ? "none" : void 0,
						userSelect: "none",
						WebkitUserSelect: "none",
						[swipeProgress]: "0",
						[swipeStrength]: "1"
					}
				}, elementProps],
				enabled: forceRender || !nested
			});
		});
		DrawerBackdrop.displayName = "DrawerBackdrop";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/close/DrawerClose.mjs
var DrawerClose;
function init_DrawerClose() {
	return (init_DrawerClose = __esmMin((() => {
		init_DialogClose();
		DrawerClose = DialogClose;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/content/drawerContentAttribute.mjs
var DRAWER_CONTENT_ATTRIBUTE;
function init_drawerContentAttribute() {
	return (init_drawerContentAttribute = __esmMin((() => {
		DRAWER_CONTENT_ATTRIBUTE = "data-drawer-content";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/content/DrawerContent.mjs
var import_react$9, DrawerContent;
function init_DrawerContent() {
	return (init_DrawerContent = __esmMin((() => {
		import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_DialogRootContext();
		init_useRenderElement();
		init_drawerContentAttribute();
		DrawerContent = /*#__PURE__*/ import_react$9.forwardRef(function DrawerContent(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			useDialogRootContext();
			return useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [{ [DRAWER_CONTENT_ATTRIBUTE]: "" }, elementProps]
			});
		});
		DrawerContent.displayName = "DrawerContent";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/provider/DrawerProviderContext.mjs
function useDrawerProviderContext() {
	return import_react$8.useContext(DrawerProviderContext);
}
var import_react$8, DrawerProviderContext;
function init_DrawerProviderContext() {
	return (init_DrawerProviderContext = __esmMin((() => {
		import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
		DrawerProviderContext = /*#__PURE__*/ import_react$8.createContext(void 0);
		DrawerProviderContext.displayName = "DrawerProviderContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/popup/DrawerPopupDataAttributes.mjs
var expanded, nestedDrawerOpen, nestedDrawerSwiping, swipeDismiss, swipeDirection, swiping;
function init_DrawerPopupDataAttributes() {
	return (init_DrawerPopupDataAttributes = __esmMin((() => {
		init_popupStateMapping();
		expanded = "data-expanded";
		nestedDrawerOpen = "data-nested-drawer-open";
		nestedDrawerSwiping = "data-nested-drawer-swiping";
		swipeDismiss = "data-swipe-dismiss";
		swipeDirection = "data-swipe-direction";
		swiping = "data-swiping";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/root/DrawerRootContext.mjs
function useDrawerRootContext(optional) {
	const drawerRootContext = import_react$7.useContext(DrawerRootContext);
	if (optional !== true && drawerRootContext === void 0) throw new Error("Base UI: DrawerRootContext is missing. Drawer parts must be placed within <Drawer.Root>.");
	return drawerRootContext;
}
var import_react$7, DrawerRootContext;
function init_DrawerRootContext() {
	return (init_DrawerRootContext = __esmMin((() => {
		import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
		DrawerRootContext = /*#__PURE__*/ import_react$7.createContext(void 0);
		DrawerRootContext.displayName = "DrawerRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/root/useDrawerSnapPoints.mjs
/**
* Resolves the vertical swipe movement for a snap point, applying square-root damping once the drag
* overshoots the fully-open edge (`nextOffset < 0`) so the popup resists travelling past it.
*/
function getSnapPointSwipeMovement(baseOffset, movementValue) {
	const nextOffset = baseOffset + movementValue;
	if (nextOffset >= 0) return movementValue;
	return -Math.sqrt(-nextOffset) - baseOffset;
}
function resolveSnapPointValue(snapPoint, viewportHeight, rootFontSize) {
	if (!Number.isFinite(viewportHeight) || viewportHeight <= 0) return null;
	if (typeof snapPoint === "number") {
		if (!Number.isFinite(snapPoint)) return null;
		if (snapPoint <= 1) return clamp(snapPoint, 0, 1) * viewportHeight;
		return snapPoint;
	}
	const trimmed = snapPoint.trim();
	if (trimmed.endsWith("px")) {
		const value = Number.parseFloat(trimmed);
		return Number.isFinite(value) ? value : null;
	}
	if (trimmed.endsWith("rem")) {
		const value = Number.parseFloat(trimmed);
		return Number.isFinite(value) ? value * rootFontSize : null;
	}
	return null;
}
/**
* Returns the index of the value closest to `target`, or `-1` if `values` is empty.
*/
function closestSnapPointIndex(values, target) {
	let closestIndex = -1;
	let closestDistance = Infinity;
	for (let index = 0; index < values.length; index += 1) {
		const distance = Math.abs(values[index] - target);
		if (distance < closestDistance) {
			closestDistance = distance;
			closestIndex = index;
		}
	}
	return closestIndex;
}
function useDrawerSnapPoints() {
	const store = useDialogRootContext();
	const { snapPoints, activeSnapPoint, setActiveSnapPoint, popupHeight } = useDrawerRootContext();
	const viewportElement = store.useState("viewportElement");
	const [viewportHeight, setViewportHeight] = import_react$6.useState(0);
	const [rootFontSize, setRootFontSize] = import_react$6.useState(16);
	const measureViewportHeight = useStableCallback(() => {
		const html = ownerDocument(viewportElement).documentElement;
		setViewportHeight(viewportElement ? viewportElement.offsetHeight : html.clientHeight);
		const fontSize = parseFloat(getComputedStyle(html).fontSize);
		if (Number.isFinite(fontSize)) setRootFontSize(fontSize);
	});
	useIsoLayoutEffect(() => {
		measureViewportHeight();
		if (!viewportElement || typeof ResizeObserver !== "function") return;
		const resizeObserver = new ResizeObserver(measureViewportHeight);
		resizeObserver.observe(viewportElement);
		return () => {
			resizeObserver.disconnect();
		};
	}, [measureViewportHeight, viewportElement]);
	const resolvedSnapPoints = import_react$6.useMemo(() => {
		if (!snapPoints || snapPoints.length === 0 || viewportHeight <= 0 || popupHeight <= 0) return [];
		const maxHeight = Math.min(popupHeight, viewportHeight);
		const resolved = snapPoints.map((value) => {
			const resolvedHeight = resolveSnapPointValue(value, viewportHeight, rootFontSize);
			if (resolvedHeight === null) return null;
			const clampedHeight = clamp(resolvedHeight, 0, maxHeight);
			return {
				value,
				height: clampedHeight,
				offset: Math.max(0, popupHeight - clampedHeight)
			};
		}).filter((point) => Boolean(point));
		if (resolved.length <= 1) return resolved;
		const deduped = [];
		const seenHeights = [];
		for (let index = resolved.length - 1; index >= 0; index -= 1) {
			const point = resolved[index];
			if (seenHeights.some((height) => Math.abs(height - point.height) <= 1)) continue;
			seenHeights.push(point.height);
			deduped.push(point);
		}
		deduped.reverse();
		return deduped;
	}, [
		popupHeight,
		rootFontSize,
		snapPoints,
		viewportHeight
	]);
	return {
		snapPoints,
		activeSnapPoint,
		setActiveSnapPoint,
		popupHeight,
		viewportHeight,
		resolvedSnapPoints,
		activeSnapPointOffset: import_react$6.useMemo(() => {
			if (activeSnapPoint === null) return;
			const exactMatch = resolvedSnapPoints.find((point) => Object.is(point.value, activeSnapPoint));
			if (exactMatch) return exactMatch;
			const maxHeight = Math.min(popupHeight, viewportHeight);
			const resolvedHeight = resolveSnapPointValue(activeSnapPoint, viewportHeight, rootFontSize);
			if (resolvedHeight === null) return;
			const clampedHeight = clamp(resolvedHeight, 0, maxHeight);
			return resolvedSnapPoints[closestSnapPointIndex(resolvedSnapPoints.map((point) => point.height), clampedHeight)];
		}, [
			activeSnapPoint,
			popupHeight,
			resolvedSnapPoints,
			rootFontSize,
			viewportHeight
		])?.offset ?? null
	};
}
var import_react$6;
function init_useDrawerSnapPoints() {
	return (init_useDrawerSnapPoints = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_DialogRootContext();
		init_DrawerRootContext();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/viewport/DrawerViewportContext.mjs
function useDrawerViewportContext() {
	return import_react$5.useContext(DrawerViewportContext);
}
var import_react$5, DrawerViewportContext;
function init_DrawerViewportContext() {
	return (init_DrawerViewportContext = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		DrawerViewportContext = /*#__PURE__*/ import_react$5.createContext(null);
		DrawerViewportContext.displayName = "DrawerViewportContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/popup/DrawerPopup.mjs
/**
* Removes inheritance of high-frequency drawer swipe CSS variables, which
* reduces style recalculation cost in complex drawers with deep subtrees.
* See https://motion.dev/blog/web-animation-performance-tier-list
* under the "Improving CSS variable performance" section.
*/
function removeCSSVariableInheritance() {
	if (drawerSwipeVarsRegistered) return;
	if (typeof CSS !== "undefined" && "registerProperty" in CSS) {
		[
			swipeMovementX,
			swipeMovementY,
			snapPointOffset
		].forEach((name) => {
			try {
				CSS.registerProperty({
					name,
					syntax: "<length>",
					inherits: false,
					initialValue: "0px"
				});
			} catch {}
		});
		[{
			name: swipeProgress,
			initialValue: "0"
		}, {
			name: swipeStrength,
			initialValue: "1"
		}].forEach(({ name, initialValue }) => {
			try {
				CSS.registerProperty({
					name,
					syntax: "<number>",
					inherits: false,
					initialValue
				});
			} catch {}
		});
	}
	drawerSwipeVarsRegistered = true;
}
var import_react$4, import_jsx_runtime$2, drawerSwipeVarsRegistered, stateAttributesMapping, DrawerPopup;
function init_DrawerPopup() {
	return (init_DrawerPopup = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_error();
		init_safeReact();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_empty();
		init_FloatingFocusManager();
		init_DialogRootContext();
		init_useRenderElement();
		init_popupStateMapping();
		init_DrawerBackdropCssVars();
		init_DrawerPopupCssVars();
		init_DrawerPopupDataAttributes();
		init_DialogPortalContext();
		init_useOpenChangeComplete();
		init_composite();
		init_DrawerRootContext();
		init_useDrawerSnapPoints();
		init_DrawerViewportContext();
		init_popupStoreUtils();
		import_jsx_runtime$2 = require_jsx_runtime();
		drawerSwipeVarsRegistered = false;
		stateAttributesMapping = {
			...popupTransitionStateMapping,
			expanded(value) {
				return value ? { [expanded]: "" } : null;
			},
			nestedDrawerOpen(value) {
				return value ? { [nestedDrawerOpen]: "" } : null;
			},
			nestedDrawerSwiping(value) {
				return value ? { [nestedDrawerSwiping]: "" } : null;
			},
			swipeDirection(value) {
				return { [swipeDirection]: value };
			},
			swiping(value) {
				return value ? { [swiping]: "" } : null;
			}
		};
		DrawerPopup = /*#__PURE__*/ import_react$4.forwardRef(function DrawerPopup(componentProps, forwardedRef) {
			const { render, className, style, finalFocus, initialFocus, ...elementProps } = componentProps;
			const store = useDialogRootContext();
			const popupRef = store.context.popupRef;
			const { swipeDirection, frontmostHeight: frontmostHeight$1, hasNestedDrawer, nestedSwiping, nestedSwipeProgressStore, onPopupHeightChange, notifyParentFrontmostHeight, notifyParentHasNestedDrawer } = useDrawerRootContext();
			const descriptionElementId = store.useState("descriptionElementId");
			const disablePointerDismissal = store.useState("disablePointerDismissal");
			const floatingRootContext = store.useState("floatingRootContext");
			const rootPopupProps = store.useState("popupProps");
			const modal = store.useState("modal");
			const mounted = store.useState("mounted");
			const nested = store.useState("nested");
			const nestedOpenDrawerCount = store.useState("nestedOpenDrawerCount");
			const transitionStatus = store.useState("transitionStatus");
			const open = store.useState("open");
			const openMethod = store.useState("openMethod");
			const titleElementId = store.useState("titleElementId");
			const role = store.useState("role");
			const floatingId = floatingRootContext.useState("floatingId");
			const popupId = elementProps.id ?? floatingId;
			const swipe = useDrawerViewportContext();
			useDialogPortalContext();
			const { snapPoints, activeSnapPoint, activeSnapPointOffset } = useDrawerSnapPoints();
			const nestedDrawerOpen = nestedOpenDrawerCount > 0;
			const swiping = swipe?.swiping ?? false;
			const swipeStrength$1 = swipe?.swipeStrength ?? null;
			const [popupHeight, setPopupHeight] = import_react$4.useState(0);
			const popupHeightRef = import_react$4.useRef(0);
			import_react$4.useEffect(() => {
				if (swipe) return;
				const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
				error(`<Drawer.Popup> expected to be rendered within <Drawer.Viewport>. Omitting the viewport disables drawer swipe handling and touch scroll locking. Wrap <Drawer.Popup> in <Drawer.Viewport>.${ownerStackMessage}`);
			}, [swipe]);
			const measureHeight = useStableCallback(() => {
				const popupElement = popupRef.current;
				if (!popupElement) return;
				const offsetHeight = popupElement.offsetHeight;
				if (popupHeightRef.current > 0 && frontmostHeight$1 > popupHeightRef.current && offsetHeight > popupHeightRef.current) return;
				if (popupHeightRef.current > 0 && hasNestedDrawer) {
					const oldHeight = popupHeightRef.current;
					setPopupHeight(oldHeight);
					onPopupHeightChange(oldHeight);
					return;
				}
				const nextHeight = offsetHeight;
				if (nextHeight === popupHeightRef.current) return;
				popupHeightRef.current = nextHeight;
				setPopupHeight(nextHeight);
				onPopupHeightChange(nextHeight);
			});
			useIsoLayoutEffect(() => {
				if (!mounted) {
					popupHeightRef.current = 0;
					setPopupHeight(0);
					onPopupHeightChange(0);
					return;
				}
				const popupElement = popupRef.current;
				if (!popupElement) return;
				removeCSSVariableInheritance();
				measureHeight();
				if (typeof ResizeObserver !== "function") return;
				const resizeObserver = new ResizeObserver(measureHeight);
				resizeObserver.observe(popupElement);
				return () => {
					resizeObserver.disconnect();
				};
			}, [
				measureHeight,
				mounted,
				nestedDrawerOpen,
				onPopupHeightChange,
				popupRef
			]);
			useIsoLayoutEffect(() => {
				const syncNestedSwipeProgress = () => {
					const popupElement = popupRef.current;
					if (!popupElement) return;
					const progress = nestedSwipeProgressStore.getSnapshot();
					if (progress > 0) popupElement.style.setProperty(swipeProgress, `${progress}`);
					else popupElement.style.setProperty(swipeProgress, "0");
				};
				syncNestedSwipeProgress();
				const unsubscribe = nestedSwipeProgressStore.subscribe(syncNestedSwipeProgress);
				const popupElement = popupRef.current;
				return () => {
					unsubscribe();
					if (popupElement) popupElement.style.setProperty(swipeProgress, "0");
				};
			}, [nestedSwipeProgressStore, popupRef]);
			useIsoLayoutEffect(() => {
				if (!open) return;
				notifyParentFrontmostHeight?.(frontmostHeight$1);
				return () => {
					notifyParentFrontmostHeight?.(0);
				};
			}, [
				frontmostHeight$1,
				open,
				notifyParentFrontmostHeight
			]);
			useIsoLayoutEffect(() => {
				if (!notifyParentHasNestedDrawer) return;
				notifyParentHasNestedDrawer(open || transitionStatus === "ending");
				return () => {
					notifyParentHasNestedDrawer(false);
				};
			}, [
				notifyParentHasNestedDrawer,
				open,
				transitionStatus
			]);
			useOpenChangeComplete({
				open,
				ref: popupRef,
				onComplete() {
					if (open) store.context.onOpenChangeComplete?.(true);
				}
			});
			const resolvedInitialFocus = initialFocus === void 0 ? popupRef : initialFocus;
			const setPopupElement = store.useStateSetter("popupElement");
			const state = {
				open,
				nested,
				transitionStatus,
				expanded: activeSnapPoint === 1,
				nestedDrawerOpen,
				nestedDrawerSwiping: nestedSwiping,
				swipeDirection,
				swiping
			};
			let popupHeightCssVarValue;
			if (popupHeight && !(!hasNestedDrawer && transitionStatus !== "ending")) popupHeightCssVarValue = `${popupHeight}px`;
			const shouldApplySnapPoints = snapPoints && snapPoints.length > 0 && (swipeDirection === "down" || swipeDirection === "up");
			let snapPointOffsetValue = null;
			if (shouldApplySnapPoints && activeSnapPointOffset !== null) snapPointOffsetValue = swipeDirection === "up" ? -activeSnapPointOffset : activeSnapPointOffset;
			let dragStyles = swipe ? swipe.getDragStyles() : EMPTY_OBJECT;
			if (shouldApplySnapPoints && swipeDirection === "down") {
				const baseOffset = activeSnapPointOffset ?? 0;
				const movementValue = Number.parseFloat(String(dragStyles[swipeMovementY]));
				if (swiping && Number.isFinite(movementValue)) dragStyles = {
					...dragStyles,
					transform: void 0,
					[swipeMovementY]: `${getSnapPointSwipeMovement(baseOffset, movementValue)}px`
				};
				else dragStyles = {
					...dragStyles,
					transform: void 0
				};
			}
			const element = useRenderElement("div", componentProps, {
				state,
				props: [
					rootPopupProps,
					{
						id: popupId,
						"aria-labelledby": titleElementId,
						"aria-describedby": descriptionElementId,
						role,
						...FOCUSABLE_POPUP_PROPS,
						hidden: !mounted,
						onKeyDown(event) {
							if (COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
						},
						style: {
							...dragStyles,
							[swipeProgress]: "0",
							[nestedDrawers]: nestedOpenDrawerCount,
							[height]: popupHeightCssVarValue,
							[snapPointOffset]: typeof snapPointOffsetValue === "number" ? `${snapPointOffsetValue}px` : "0px",
							[frontmostHeight]: frontmostHeight$1 ? `${frontmostHeight$1}px` : void 0,
							[swipeStrength]: typeof swipeStrength$1 === "number" && Number.isFinite(swipeStrength$1) && swipeStrength$1 > 0 ? `${swipeStrength$1}` : "1"
						}
					},
					elementProps
				],
				ref: [
					forwardedRef,
					popupRef,
					setPopupElement
				],
				stateAttributesMapping
			});
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(FloatingFocusManager, {
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
		DrawerPopup.displayName = "DrawerPopup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/portal/DrawerPortal.mjs
var DrawerPortal;
function init_DrawerPortal() {
	return (init_DrawerPortal = __esmMin((() => {
		init_DialogPortal();
		DrawerPortal = DialogPortal;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/root/DrawerRoot.mjs
/**
* Groups all parts of the drawer.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
*/
function DrawerRoot(props) {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, disablePointerDismissal = false, modal = true, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, swipeDirection = "down", snapToSequentialPoints = false, snapPoints, snapPoint: snapPointProp, defaultSnapPoint, onSnapPointChange } = props;
	const parentDrawerRootContext = useDrawerRootContext(true);
	const notifyParentSwipeProgressChange = parentDrawerRootContext?.onNestedSwipeProgressChange;
	const notifyParentFrontmostHeight = parentDrawerRootContext?.onNestedFrontmostHeightChange;
	const notifyParentSwipingChange = parentDrawerRootContext?.onNestedSwipingChange;
	const notifyParentHasNestedDrawer = parentDrawerRootContext?.onNestedDrawerPresenceChange;
	const [popupHeight, setPopupHeight] = import_react$3.useState(0);
	const [frontmostHeight, setFrontmostHeight] = import_react$3.useState(0);
	const [hasNestedDrawer, setHasNestedDrawer] = import_react$3.useState(false);
	const [nestedSwiping, setNestedSwiping] = import_react$3.useState(false);
	const [nestedSwipeProgressStore] = import_react$3.useState(createNestedSwipeProgressStore);
	const resolvedDefaultSnapPoint = defaultSnapPoint !== void 0 ? defaultSnapPoint : snapPoints?.[0] ?? null;
	const isSnapPointControlled = snapPointProp !== void 0;
	const [activeSnapPoint, setActiveSnapPointUnwrapped] = useControlled({
		controlled: snapPointProp,
		default: resolvedDefaultSnapPoint,
		name: "Drawer",
		state: "snapPoint"
	});
	const isNestedDrawerOpenRef = import_react$3.useRef(false);
	const swipeAreaActiveRef = import_react$3.useRef(false);
	const setActiveSnapPoint = useStableCallback((nextSnapPoint, eventDetails) => {
		const resolvedEventDetails = eventDetails ?? createChangeEventDetails("none");
		onSnapPointChange?.(nextSnapPoint, resolvedEventDetails);
		if (resolvedEventDetails.isCanceled) return;
		setActiveSnapPointUnwrapped(nextSnapPoint);
	});
	const resolvedActiveSnapPoint = import_react$3.useMemo(() => {
		if (isSnapPointControlled) return activeSnapPoint;
		if (!snapPoints || snapPoints.length === 0) return activeSnapPoint;
		if (activeSnapPoint === null || !snapPoints.some((snapPoint) => Object.is(snapPoint, activeSnapPoint))) return resolvedDefaultSnapPoint;
		return activeSnapPoint;
	}, [
		activeSnapPoint,
		isSnapPointControlled,
		resolvedDefaultSnapPoint,
		snapPoints
	]);
	const onPopupHeightChange = useStableCallback((height) => {
		setPopupHeight(height);
		if (!isNestedDrawerOpenRef.current && height > 0) setFrontmostHeight(height);
	});
	const onNestedFrontmostHeightChange = useStableCallback((height) => {
		if (height > 0) {
			isNestedDrawerOpenRef.current = true;
			setFrontmostHeight(height);
			return;
		}
		isNestedDrawerOpenRef.current = false;
		if (popupHeight > 0) setFrontmostHeight(popupHeight);
	});
	const onNestedDrawerPresenceChange = useStableCallback((present) => {
		setHasNestedDrawer(present);
	});
	const onNestedSwipeProgressChange = useStableCallback((progress) => {
		nestedSwipeProgressStore.set(progress);
		notifyParentSwipeProgressChange?.(progress);
	});
	const onNestedSwipingChange = useStableCallback((swiping) => {
		setNestedSwiping(swiping);
		notifyParentSwipingChange?.(swiping);
	});
	const handleOpenChange = useStableCallback((nextOpen, eventDetails) => {
		onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		if (!nextOpen && snapPoints && snapPoints.length > 0) setActiveSnapPoint(resolvedDefaultSnapPoint, createChangeEventDetails(eventDetails.reason, eventDetails.event, eventDetails.trigger));
	});
	const contextValue = import_react$3.useMemo(() => ({
		swipeDirection,
		swipeAreaActiveRef,
		snapToSequentialPoints,
		snapPoints,
		activeSnapPoint: resolvedActiveSnapPoint,
		setActiveSnapPoint,
		frontmostHeight,
		popupHeight,
		hasNestedDrawer,
		nestedSwiping,
		nestedSwipeProgressStore,
		onNestedDrawerPresenceChange,
		onPopupHeightChange,
		onNestedFrontmostHeightChange,
		onNestedSwipingChange,
		onNestedSwipeProgressChange,
		notifyParentFrontmostHeight,
		notifyParentSwipingChange,
		notifyParentSwipeProgressChange,
		notifyParentHasNestedDrawer
	}), [
		resolvedActiveSnapPoint,
		frontmostHeight,
		hasNestedDrawer,
		nestedSwiping,
		nestedSwipeProgressStore,
		notifyParentHasNestedDrawer,
		notifyParentSwipeProgressChange,
		notifyParentSwipingChange,
		notifyParentFrontmostHeight,
		onNestedDrawerPresenceChange,
		onNestedFrontmostHeightChange,
		onNestedSwipeProgressChange,
		onNestedSwipingChange,
		onPopupHeightChange,
		popupHeight,
		setActiveSnapPoint,
		snapPoints,
		snapToSequentialPoints,
		swipeAreaActiveRef,
		swipeDirection
	]);
	const resolvedChildren = typeof children === "function" ? (payload) => /*#__PURE__*/ (0, import_jsx_runtime$1.jsxs)(import_react$3.Fragment, { children: [_DrawerProviderReport || (_DrawerProviderReport = /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(DrawerProviderReporter, {})), children(payload)] }) : /*#__PURE__*/ (0, import_jsx_runtime$1.jsxs)(import_react$3.Fragment, { children: [_DrawerProviderReport2 || (_DrawerProviderReport2 = /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(DrawerProviderReporter, {})), children] });
	const dialog = useRenderDialogRoot("drawer", {
		open: openProp,
		defaultOpen,
		onOpenChange: handleOpenChange,
		onOpenChangeComplete,
		disablePointerDismissal,
		modal,
		actionsRef,
		handle,
		triggerId: triggerIdProp,
		defaultTriggerId: defaultTriggerIdProp,
		children: resolvedChildren
	});
	return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(DrawerRootContext.Provider, {
		value: contextValue,
		children: dialog
	});
}
function createNestedSwipeProgressStore() {
	let progress = 0;
	const listeners = /* @__PURE__ */ new Set();
	return {
		getSnapshot: () => progress,
		set(nextProgress) {
			const resolved = Number.isFinite(nextProgress) ? nextProgress : 0;
			if (resolved === progress) return;
			progress = resolved;
			listeners.forEach((listener) => {
				listener();
			});
		},
		subscribe(listener) {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		}
	};
}
function DrawerProviderReporter() {
	const providerContext = useDrawerProviderContext();
	const store = useDialogRootContext(false);
	const setDrawerOpen = providerContext?.setDrawerOpen;
	const removeDrawer = providerContext?.removeDrawer;
	const open = store.useState("open");
	const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
	const popupElement = store.useState("popupElement");
	const isTopmost = nestedOpenDialogCount === 0;
	useIsoLayoutEffect(() => {
		if (!removeDrawer) return;
		return () => {
			removeDrawer(store);
		};
	}, [removeDrawer, store]);
	useIsoLayoutEffect(() => {
		setDrawerOpen?.(store, open);
	}, [
		open,
		setDrawerOpen,
		store
	]);
	import_react$3.useEffect(() => {
		if (!open || !isTopmost || !android) return;
		const CloseWatcherCtor = getWindow(popupElement).CloseWatcher;
		if (!CloseWatcherCtor) return;
		function handleCancel(event) {
			if (!store.select("open")) return;
			const eventDetails = createChangeEventDetails(closeWatcher, event);
			if (!event.cancelable) eventDetails.cancel = NOOP;
			store.setOpen(false, eventDetails);
			if (eventDetails.isCanceled) event.preventDefault();
		}
		const closeWatcher$1 = new CloseWatcherCtor();
		const unsubscribe = addEventListener(closeWatcher$1, "cancel", handleCancel);
		return () => {
			unsubscribe();
			closeWatcher$1.destroy();
		};
	}, [
		store,
		isTopmost,
		open,
		popupElement
	]);
	return null;
}
var import_react$3, import_jsx_runtime$1, _DrawerProviderReport, _DrawerProviderReport2;
function init_DrawerRoot() {
	return (init_DrawerRoot = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		init_useControlled();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_floating_ui_utils_dom();
		init_os();
		init_DrawerRootContext();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_DialogRootContext();
		init_useRenderDialogRoot();
		init_DrawerProviderContext();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/getElementAtPoint.mjs
function getElementAtPoint(root, x, y) {
	return typeof root?.elementFromPoint === "function" ? root.elementFromPoint(x, y) : null;
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/useSwipeDismiss.mjs
function getDisplacement(direction, deltaX, deltaY) {
	switch (direction) {
		case "up": return -deltaY;
		case "down": return deltaY;
		case "left": return -deltaX;
		case "right": return deltaX;
		default: return 0;
	}
}
function getValidTimeStamp(timeStamp) {
	return Number.isFinite(timeStamp) && timeStamp > 0 ? timeStamp : null;
}
function getDragTransform(dragOffset, scale) {
	return `translate3d(${dragOffset.x}px,${dragOffset.y}px,0) scale(${scale})`;
}
function hasPrimaryMouseButton(buttons) {
	return buttons % 2 === 1;
}
function safelyChangePointerCapture(element, pointerId, method) {
	const pointerCaptureMethod = element[method];
	if (typeof pointerCaptureMethod !== "function") return;
	try {
		pointerCaptureMethod.call(element, pointerId);
	} catch (error) {
		if (error && typeof error === "object" && "name" in error && error.name === "NotFoundError") return;
		throw error;
	}
}
function useSwipeDismiss(options) {
	const { enabled, directions, elementRef, movementCssVars, canStart, ignoreSelectorWhenTouch = true, ignoreScrollableAncestors = false, swipeThreshold: swipeThresholdProp, onDismiss, onProgress, onCancel, onSwipeStart, onRelease, onSwipingChange, trackDrag = true } = options;
	const ignoreSelector = DEFAULT_IGNORE_SELECTOR;
	const primaryDirection = directions.length === 1 ? directions[0] : void 0;
	const swipeThresholdDefault = Math.max(0, typeof swipeThresholdProp === "number" ? swipeThresholdProp : DEFAULT_SWIPE_THRESHOLD);
	const allowLeft = directions.includes("left");
	const allowRight = directions.includes("right");
	const allowUp = directions.includes("up");
	const allowDown = directions.includes("down");
	const hasHorizontal = allowLeft || allowRight;
	const hasVertical = allowUp || allowDown;
	const scrollAxis = hasHorizontal ? "horizontal" : "vertical";
	const [currentSwipeDirection, setCurrentSwipeDirection] = import_react$2.useState(void 0);
	const [isSwiping, setIsSwiping] = import_react$2.useState(false);
	const [dragDismissed, setDragDismissed] = import_react$2.useState(false);
	const dragStartPosRef = import_react$2.useRef({
		x: 0,
		y: 0
	});
	const dragOffsetRef = import_react$2.useRef({
		x: 0,
		y: 0
	});
	const lastMovePosRef = import_react$2.useRef(null);
	const initialTransformRef = import_react$2.useRef({
		x: 0,
		y: 0,
		scale: 1
	});
	const intendedSwipeDirectionRef = import_react$2.useRef(void 0);
	const maxSwipeDisplacementRef = import_react$2.useRef(0);
	const cancelledSwipeRef = import_react$2.useRef(false);
	const swipeCancelBaselineRef = import_react$2.useRef({
		x: 0,
		y: 0
	});
	const isFirstPointerMoveRef = import_react$2.useRef(false);
	const pendingSwipeRef = import_react$2.useRef(false);
	const pendingSwipeStartPosRef = import_react$2.useRef(null);
	const swipeFromScrollableRef = import_react$2.useRef(false);
	const sawPrimaryButtonsOnMoveRef = import_react$2.useRef(false);
	const elementSizeRef = import_react$2.useRef({
		width: 0,
		height: 0
	});
	const swipeProgressRef = import_react$2.useRef(0);
	const swipeThresholdRef = import_react$2.useRef(swipeThresholdDefault);
	const swipeThresholdFunctionRef = import_react$2.useRef(null);
	const swipeStartTimeRef = import_react$2.useRef(null);
	const lastDragSampleRef = import_react$2.useRef(null);
	const hasStationarySampleRef = import_react$2.useRef(false);
	const lastDragVelocityRef = import_react$2.useRef({
		x: 0,
		y: 0
	});
	const lastProgressDetailsRef = import_react$2.useRef(null);
	const isSwipingRef = import_react$2.useRef(false);
	const dragStyleSnapshotRef = import_react$2.useRef(null);
	const setSwiping = useStableCallback((nextSwiping) => {
		if (isSwipingRef.current === nextSwiping) return;
		isSwipingRef.current = nextSwiping;
		setIsSwiping(nextSwiping);
		onSwipingChange?.(nextSwiping);
	});
	function resolveSwipeThreshold(direction) {
		if (!direction) return;
		const element = elementRef.current;
		const thresholdFunction = swipeThresholdFunctionRef.current;
		if (!element || !thresholdFunction) return;
		const value = thresholdFunction({
			element,
			direction
		});
		swipeThresholdRef.current = Math.max(0, value);
	}
	const updateSwipeProgress = useStableCallback((progress, details) => {
		const nextProgress = Number.isFinite(progress) ? clamp(progress, 0, 1) : 0;
		const progressChanged = nextProgress !== swipeProgressRef.current;
		let detailsChanged = false;
		if (details) {
			const lastDetails = lastProgressDetailsRef.current;
			detailsChanged = !lastDetails || lastDetails.deltaX !== details.deltaX || lastDetails.deltaY !== details.deltaY || lastDetails.direction !== details.direction;
		}
		if (!progressChanged && !detailsChanged) return;
		swipeProgressRef.current = nextProgress;
		if (details) lastProgressDetailsRef.current = details;
		else if (progressChanged) lastProgressDetailsRef.current = null;
		onProgress?.(nextProgress, details);
	});
	const syncDragStyles = useStableCallback((swiping) => {
		const element = elementRef.current;
		if (!trackDrag || !element) {
			if (!swiping) dragStyleSnapshotRef.current = null;
			return;
		}
		const style = element.style;
		const dragStyleSnapshot = dragStyleSnapshotRef.current;
		if (swiping) {
			if (!dragStyleSnapshot) dragStyleSnapshotRef.current = [style.transition, style.transform];
			style.transition = "none";
		} else if (dragStyleSnapshot) {
			[style.transition, style.transform] = dragStyleSnapshot;
			dragStyleSnapshotRef.current = null;
		}
		const dragOffset = dragOffsetRef.current;
		const initialTransform = initialTransformRef.current;
		const deltaX = dragOffset.x - initialTransform.x;
		const deltaY = dragOffset.y - initialTransform.y;
		if (swiping) style.transform = getDragTransform(dragOffset, initialTransform.scale);
		style.setProperty(movementCssVars.x, `${deltaX}px`);
		style.setProperty(movementCssVars.y, `${deltaY}px`);
	});
	function recordDragSample(offset, timeStamp) {
		if (timeStamp === null) return;
		const lastSample = lastDragSampleRef.current;
		if (lastSample && timeStamp > lastSample.time) {
			const stationary = Math.abs(offset.x - lastSample.x) < MIN_VELOCITY_SAMPLE_DISTANCE && Math.abs(offset.y - lastSample.y) < MIN_VELOCITY_SAMPLE_DISTANCE;
			const skipSample = stationary && !hasStationarySampleRef.current;
			hasStationarySampleRef.current = stationary;
			if (skipSample) return;
			const durationMs = Math.max(timeStamp - lastSample.time, MIN_RELEASE_VELOCITY_DURATION_MS);
			lastDragVelocityRef.current = {
				x: (offset.x - lastSample.x) / durationMs,
				y: (offset.y - lastSample.y) / durationMs
			};
		}
		lastDragSampleRef.current = {
			x: offset.x,
			y: offset.y,
			time: timeStamp
		};
	}
	const reset = import_react$2.useCallback(() => {
		setCurrentSwipeDirection(void 0);
		setSwiping(false);
		setDragDismissed(false);
		updateSwipeProgress(0);
		swipeThresholdRef.current = swipeThresholdDefault;
		swipeThresholdFunctionRef.current = null;
		dragStartPosRef.current = {
			x: 0,
			y: 0
		};
		dragOffsetRef.current = {
			x: 0,
			y: 0
		};
		initialTransformRef.current = {
			x: 0,
			y: 0,
			scale: 1
		};
		intendedSwipeDirectionRef.current = void 0;
		maxSwipeDisplacementRef.current = 0;
		cancelledSwipeRef.current = false;
		swipeCancelBaselineRef.current = {
			x: 0,
			y: 0
		};
		isFirstPointerMoveRef.current = false;
		lastMovePosRef.current = null;
		pendingSwipeRef.current = false;
		pendingSwipeStartPosRef.current = null;
		swipeFromScrollableRef.current = false;
		sawPrimaryButtonsOnMoveRef.current = false;
		elementSizeRef.current = {
			width: 0,
			height: 0
		};
		swipeStartTimeRef.current = null;
		lastDragSampleRef.current = null;
		hasStationarySampleRef.current = false;
		lastDragVelocityRef.current = {
			x: 0,
			y: 0
		};
		lastProgressDetailsRef.current = null;
		syncDragStyles(false);
	}, [
		setSwiping,
		swipeThresholdDefault,
		syncDragStyles,
		updateSwipeProgress
	]);
	function getPrimaryPointerPosition(event) {
		if ("touches" in event) {
			const touch = event.touches[0];
			return touch ? {
				x: touch.clientX,
				y: touch.clientY
			} : null;
		}
		return {
			x: event.clientX,
			y: event.clientY
		};
	}
	function isTouchLikeEvent(event) {
		if ("touches" in event) return true;
		return event.pointerType === "touch";
	}
	function getTargetAtPoint(position, nativeEvent) {
		const root = elementRef.current?.getRootNode();
		return getElementAtPoint(root, position.x, position.y) ?? getTarget(nativeEvent);
	}
	function findGestureScrollableTouchTarget(target, root) {
		const find = (axis) => {
			const scrollTarget = findScrollableTouchTarget(target, root, axis);
			const doc = ownerDocument(scrollTarget);
			return scrollTarget === doc.body || scrollTarget === doc.documentElement ? null : scrollTarget;
		};
		return find(scrollAxis);
	}
	function startSwipeAtPosition(event, position, startOptions) {
		swipeFromScrollableRef.current = false;
		const touchLike = isTouchLikeEvent(event);
		const target = getTargetAtPoint(position, event.nativeEvent);
		const body = ownerDocument(elementRef.current).body;
		const scrollableTarget = touchLike && body ? findGestureScrollableTouchTarget(target, body) : null;
		const ignoreScrollableTarget = startOptions?.ignoreScrollableTarget ?? false;
		if (scrollableTarget && !ignoreScrollableTarget) return false;
		swipeFromScrollableRef.current = Boolean(scrollableTarget && ignoreScrollableTarget);
		if (closest(target, ignoreSelector) && (!touchLike || ignoreSelectorWhenTouch)) return false;
		const element = elementRef.current;
		if (ignoreScrollableAncestors && element && target) {
			if (!(startOptions?.ignoreScrollableAncestors ?? false) && findScrollableAncestor(target, element, scrollAxis) != null) return false;
		}
		cancelledSwipeRef.current = false;
		intendedSwipeDirectionRef.current = void 0;
		maxSwipeDisplacementRef.current = 0;
		dragStartPosRef.current = position;
		swipeStartTimeRef.current = getValidTimeStamp(event.timeStamp);
		lastDragSampleRef.current = null;
		hasStationarySampleRef.current = false;
		lastDragVelocityRef.current = {
			x: 0,
			y: 0
		};
		swipeCancelBaselineRef.current = position;
		lastMovePosRef.current = position;
		swipeThresholdRef.current = swipeThresholdDefault;
		swipeThresholdFunctionRef.current = typeof swipeThresholdProp === "function" ? swipeThresholdProp : null;
		if (element) {
			elementSizeRef.current = {
				width: element.offsetWidth,
				height: element.offsetHeight
			};
			resolveSwipeThreshold(primaryDirection);
			const transform = getElementTransform(element);
			initialTransformRef.current = transform;
			dragOffsetRef.current = {
				x: transform.x,
				y: transform.y
			};
			recordDragSample({
				x: transform.x,
				y: transform.y
			}, swipeStartTimeRef.current);
			if (!("touches" in event)) safelyChangePointerCapture(element, event.pointerId, "setPointerCapture");
		}
		onSwipeStart?.(event.nativeEvent);
		setSwiping(true);
		isFirstPointerMoveRef.current = true;
		updateSwipeProgress(0);
		syncDragStyles(true);
		return true;
	}
	function resetPendingSwipeState() {
		clearPendingSwipeStartState();
		swipeFromScrollableRef.current = false;
		lastMovePosRef.current = null;
	}
	function clearPendingSwipeStartState() {
		pendingSwipeRef.current = false;
		pendingSwipeStartPosRef.current = null;
	}
	function cancelSwipeInteraction(event) {
		resetPendingSwipeState();
		if (!isSwipingRef.current) return;
		setSwiping(false);
		const resolvedInitialTransform = initialTransformRef.current;
		dragOffsetRef.current = {
			x: resolvedInitialTransform.x,
			y: resolvedInitialTransform.y
		};
		setCurrentSwipeDirection(void 0);
		sawPrimaryButtonsOnMoveRef.current = false;
		syncDragStyles(false);
		const element = elementRef.current;
		if (element) safelyChangePointerCapture(element, event.pointerId, "releasePointerCapture");
		updateSwipeProgress(0, {
			deltaX: 0,
			deltaY: 0,
			direction: void 0
		});
		onCancel?.(event.nativeEvent);
	}
	function applyDirectionalDamping(deltaX, deltaY) {
		const exponent = (value) => Math.sign(value) * Math.abs(value) ** .5;
		const dampAxis = (delta, allowNegative, allowPositive) => {
			if (!allowNegative && delta < 0 || !allowPositive && delta > 0) return exponent(delta);
			return delta;
		};
		return {
			x: hasHorizontal ? dampAxis(deltaX, allowLeft, allowRight) : exponent(deltaX),
			y: hasVertical ? dampAxis(deltaY, allowUp, allowDown) : exponent(deltaY)
		};
	}
	function canSwipeFromScrollEdgeOnPendingMove(scrollTarget, deltaX, deltaY) {
		const canSwipeOnAxis = (delta, scrollOffset, maxScrollOffset, allowTowardStart, allowTowardEnd) => delta > 0 && scrollOffset <= 0 && allowTowardStart || delta < 0 && scrollOffset >= Math.max(0, maxScrollOffset) && allowTowardEnd;
		if (hasVertical && deltaY !== 0) return canSwipeOnAxis(deltaY, scrollTarget.scrollTop, scrollTarget.scrollHeight - scrollTarget.clientHeight, allowDown, allowUp);
		if (hasHorizontal && deltaX !== 0) return canSwipeOnAxis(deltaX, scrollTarget.scrollLeft, scrollTarget.scrollWidth - scrollTarget.clientWidth, allowRight, allowLeft);
		return null;
	}
	const handleStart = useStableCallback((event) => {
		if (!enabled) return;
		if (event.defaultPrevented || event.nativeEvent.defaultPrevented) return;
		if (!("touches" in event) && event.button !== 0) return;
		const startPos = getPrimaryPointerPosition(event);
		if (!startPos) return;
		pendingSwipeRef.current = true;
		pendingSwipeStartPosRef.current = startPos;
		swipeFromScrollableRef.current = false;
		sawPrimaryButtonsOnMoveRef.current = !("touches" in event);
		if (!(canStart ? canStart(startPos, {
			nativeEvent: event.nativeEvent,
			direction: primaryDirection
		}) : true)) return;
		if (startSwipeAtPosition(event, startPos)) clearPendingSwipeStartState();
	});
	function handleMoveCore(event, position, movement) {
		if (!enabled || !isSwipingRef.current) return;
		const target = getTarget(event.nativeEvent);
		if (isTouchLikeEvent(event) && !swipeFromScrollableRef.current) {
			const boundaryElement = event.currentTarget;
			if (findGestureScrollableTouchTarget(target, boundaryElement)) return;
		}
		if (!("touches" in event)) event.preventDefault();
		if (isFirstPointerMoveRef.current) {
			isFirstPointerMoveRef.current = false;
			if (trackDrag) {
				dragStartPosRef.current = position;
				const moveTime = getValidTimeStamp(event.timeStamp);
				if (moveTime !== null) swipeStartTimeRef.current = moveTime;
				lastDragSampleRef.current = null;
				hasStationarySampleRef.current = false;
			}
		}
		const clientX = position.x;
		const clientY = position.y;
		const movementX = movement.x;
		const movementY = movement.y;
		if (movementY < 0 && clientY > swipeCancelBaselineRef.current.y || movementY > 0 && clientY < swipeCancelBaselineRef.current.y) swipeCancelBaselineRef.current = {
			x: swipeCancelBaselineRef.current.x,
			y: clientY
		};
		if (movementX < 0 && clientX > swipeCancelBaselineRef.current.x || movementX > 0 && clientX < swipeCancelBaselineRef.current.x) swipeCancelBaselineRef.current = {
			x: clientX,
			y: swipeCancelBaselineRef.current.y
		};
		const deltaX = clientX - dragStartPosRef.current.x;
		const deltaY = clientY - dragStartPosRef.current.y;
		const cancelDeltaY = clientY - swipeCancelBaselineRef.current.y;
		const cancelDeltaX = clientX - swipeCancelBaselineRef.current.x;
		let candidate;
		if (!intendedSwipeDirectionRef.current) {
			if (Math.abs(deltaX) >= Math.abs(deltaY)) candidate = deltaX > 0 ? "right" : "left";
			else candidate = deltaY > 0 ? "down" : "up";
			if (candidate) {
				if (candidate === "left" && allowLeft || candidate === "right" && allowRight || candidate === "up" && allowUp || candidate === "down" && allowDown) {
					intendedSwipeDirectionRef.current = candidate;
					maxSwipeDisplacementRef.current = getDisplacement(candidate, deltaX, deltaY);
					setCurrentSwipeDirection(candidate);
					resolveSwipeThreshold(candidate);
				}
			}
		} else {
			const direction = intendedSwipeDirectionRef.current;
			const currentDisplacement = getDisplacement(direction, cancelDeltaX, cancelDeltaY);
			if (currentDisplacement > swipeThresholdRef.current) {
				cancelledSwipeRef.current = false;
				setCurrentSwipeDirection(direction);
			} else if (!(allowLeft && allowRight) && !(allowUp && allowDown) && maxSwipeDisplacementRef.current - currentDisplacement >= REVERSE_CANCEL_THRESHOLD) cancelledSwipeRef.current = true;
		}
		const dampedDelta = applyDirectionalDamping(deltaX, deltaY);
		let newOffsetX = initialTransformRef.current.x;
		let newOffsetY = initialTransformRef.current.y;
		if (hasHorizontal) newOffsetX += dampedDelta.x;
		if (hasVertical) newOffsetY += dampedDelta.y;
		const previousOffset = dragOffsetRef.current;
		const offsetChanged = newOffsetX !== previousOffset.x || newOffsetY !== previousOffset.y;
		dragOffsetRef.current = {
			x: newOffsetX,
			y: newOffsetY
		};
		if (offsetChanged) syncDragStyles(true);
		recordDragSample({
			x: newOffsetX,
			y: newOffsetY
		}, getValidTimeStamp(event.timeStamp));
		const dragDeltaX = newOffsetX - initialTransformRef.current.x;
		const dragDeltaY = newOffsetY - initialTransformRef.current.y;
		const progressDetails = {
			deltaX: dragDeltaX,
			deltaY: dragDeltaY,
			direction: intendedSwipeDirectionRef.current
		};
		let progress = 0;
		const progressDirection = primaryDirection ?? intendedSwipeDirectionRef.current;
		if (progressDirection) {
			const size = progressDirection === "left" || progressDirection === "right" ? elementSizeRef.current.width : elementSizeRef.current.height;
			const scale = initialTransformRef.current.scale || 1;
			const progressDisplacement = getDisplacement(progressDirection, dragDeltaX, dragDeltaY);
			if (size > 0 && scale > 0 && progressDisplacement > 0) progress = progressDisplacement / (size * scale);
		}
		updateSwipeProgress(progress, progressDetails);
	}
	const handleEnd = useStableCallback((event) => {
		if (!enabled) return;
		const resolvedDragOffset = dragOffsetRef.current;
		const resolvedInitialTransform = initialTransformRef.current;
		const releaseDeltaX = resolvedDragOffset.x - resolvedInitialTransform.x;
		const releaseDeltaY = resolvedDragOffset.y - resolvedInitialTransform.y;
		const progressDetails = {
			deltaX: releaseDeltaX,
			deltaY: releaseDeltaY,
			direction: intendedSwipeDirectionRef.current
		};
		if (!isSwipingRef.current) {
			resetPendingSwipeState();
			updateSwipeProgress(0, progressDetails);
			return;
		}
		setSwiping(false);
		resetPendingSwipeState();
		sawPrimaryButtonsOnMoveRef.current = false;
		const element = elementRef.current;
		if (element) {
			if (!("touches" in event)) safelyChangePointerCapture(element, event.pointerId, "releasePointerCapture");
		}
		const deltaX = releaseDeltaX;
		const deltaY = releaseDeltaY;
		const startTime = swipeStartTimeRef.current;
		const endTime = getValidTimeStamp(event.timeStamp);
		const durationMs = startTime !== null && endTime !== null && endTime > startTime ? endTime - startTime : 0;
		const velocityDurationMs = durationMs > 0 ? Math.max(durationMs, MIN_VELOCITY_DURATION_MS) : 0;
		const velocityX = velocityDurationMs > 0 ? deltaX / velocityDurationMs : 0;
		const velocityY = velocityDurationMs > 0 ? deltaY / velocityDurationMs : 0;
		let releaseVelocityX = lastDragVelocityRef.current.x;
		let releaseVelocityY = lastDragVelocityRef.current.y;
		const lastSample = lastDragSampleRef.current;
		if (lastSample && endTime !== null && endTime >= lastSample.time) {
			const ageMs = endTime - lastSample.time;
			if (ageMs <= MAX_RELEASE_VELOCITY_AGE_MS) {
				const sampleDurationMs = Math.max(ageMs, MIN_RELEASE_VELOCITY_DURATION_MS);
				const deltaFromLastSampleX = resolvedDragOffset.x - lastSample.x;
				const deltaFromLastSampleY = resolvedDragOffset.y - lastSample.y;
				const sampleVelocityX = deltaFromLastSampleX / sampleDurationMs;
				const sampleVelocityY = deltaFromLastSampleY / sampleDurationMs;
				if (Math.abs(deltaFromLastSampleX) >= MIN_VELOCITY_SAMPLE_DISTANCE) releaseVelocityX = sampleVelocityX;
				if (Math.abs(deltaFromLastSampleY) >= MIN_VELOCITY_SAMPLE_DISTANCE) releaseVelocityY = sampleVelocityY;
			} else {
				releaseVelocityX = 0;
				releaseVelocityY = 0;
			}
		}
		const releaseDecision = onRelease?.({
			event: event.nativeEvent,
			direction: intendedSwipeDirectionRef.current,
			deltaX,
			deltaY,
			velocityX,
			velocityY,
			releaseVelocityX,
			releaseVelocityY
		});
		const hasReleaseDecision = typeof releaseDecision === "boolean";
		if (cancelledSwipeRef.current && !hasReleaseDecision) {
			dragOffsetRef.current = {
				x: resolvedInitialTransform.x,
				y: resolvedInitialTransform.y
			};
			setCurrentSwipeDirection(void 0);
			syncDragStyles(false);
			updateSwipeProgress(0, progressDetails);
			return;
		}
		let shouldClose = false;
		let dismissDirection;
		if (hasReleaseDecision) {
			shouldClose = releaseDecision;
			dismissDirection = intendedSwipeDirectionRef.current ?? primaryDirection;
		} else for (const direction of directions) if (getDisplacement(direction, deltaX, deltaY) > swipeThresholdRef.current) {
			shouldClose = true;
			dismissDirection = direction;
			break;
		}
		if (shouldClose && dismissDirection) {
			setCurrentSwipeDirection(dismissDirection);
			setDragDismissed(true);
			syncDragStyles(false);
			onDismiss?.(event.nativeEvent, { direction: dismissDirection });
		} else {
			dragOffsetRef.current = {
				x: resolvedInitialTransform.x,
				y: resolvedInitialTransform.y
			};
			setCurrentSwipeDirection(void 0);
			syncDragStyles(false);
			updateSwipeProgress(0, progressDetails);
		}
	});
	const handleMove = useStableCallback((event) => {
		const currentPos = getPrimaryPointerPosition(event);
		if (!currentPos) return;
		let endAfterMove = false;
		if (!("touches" in event)) {
			const hasPrimaryButton = hasPrimaryMouseButton(event.buttons);
			if (hasPrimaryButton) sawPrimaryButtonsOnMoveRef.current = true;
			if (event.buttons !== 0 && !hasPrimaryButton) {
				cancelSwipeInteraction(event);
				return;
			}
			if (event.buttons === 0 && sawPrimaryButtonsOnMoveRef.current) {
				if (!isSwipingRef.current) {
					handleEnd(event);
					return;
				}
				endAfterMove = true;
			}
		}
		if (!isSwiping && pendingSwipeRef.current) {
			if (!isTouchLikeEvent(event) && (event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
				resetPendingSwipeState();
				return;
			}
			if (canStart ? canStart(currentPos, {
				nativeEvent: event.nativeEvent,
				direction: primaryDirection
			}) : true) {
				const pendingStartPos = pendingSwipeStartPosRef.current;
				let ignoreScrollableOnStart = false;
				if (isTouchLikeEvent(event)) {
					const element = elementRef.current;
					if (pendingStartPos && element) {
						const target = getTargetAtPoint(currentPos, event.nativeEvent);
						const body = ownerDocument(element).body;
						const scrollTarget = body ? findGestureScrollableTouchTarget(target, body) : null;
						if (scrollTarget && (contains(element, scrollTarget) || contains(scrollTarget, element))) {
							const canSwipeFromEdge = canSwipeFromScrollEdgeOnPendingMove(scrollTarget, currentPos.x - pendingStartPos.x, currentPos.y - pendingStartPos.y);
							if (canSwipeFromEdge === false) return;
							if (canSwipeFromEdge === true) ignoreScrollableOnStart = true;
						}
					}
				}
				if (startSwipeAtPosition(event, currentPos, {
					ignoreScrollableTarget: ignoreScrollableOnStart,
					ignoreScrollableAncestors: ignoreScrollableOnStart
				})) {
					if (pendingStartPos && ignoreScrollableOnStart) {
						clearPendingSwipeStartState();
						dragStartPosRef.current = pendingStartPos;
						swipeCancelBaselineRef.current = pendingStartPos;
						lastMovePosRef.current = pendingStartPos;
						isFirstPointerMoveRef.current = false;
					} else {
						clearPendingSwipeStartState();
						swipeFromScrollableRef.current = false;
					}
				}
			}
		}
		const previousPos = lastMovePosRef.current;
		const movement = previousPos === null ? {
			x: 0,
			y: 0
		} : {
			x: currentPos.x - previousPos.x,
			y: currentPos.y - previousPos.y
		};
		lastMovePosRef.current = currentPos;
		handleMoveCore(event, currentPos, movement);
		if (endAfterMove && !("touches" in event)) handleEnd(event);
	});
	const moveNative = useStableCallback((nativeEvent, currentTarget) => {
		handleMove({
			touches: nativeEvent.touches,
			currentTarget,
			nativeEvent,
			defaultPrevented: nativeEvent.defaultPrevented,
			timeStamp: nativeEvent.timeStamp
		});
	});
	const getDragStyles = import_react$2.useCallback(() => {
		const swiping = isSwipingRef.current;
		const dragOffset = dragOffsetRef.current;
		const initialTransform = initialTransformRef.current;
		const deltaX = dragOffset.x - initialTransform.x;
		const deltaY = dragOffset.y - initialTransform.y;
		if (!swiping && deltaX === 0 && deltaY === 0 && !dragDismissed) return {
			[movementCssVars.x]: "0px",
			[movementCssVars.y]: "0px"
		};
		return {
			transition: swiping ? "none" : void 0,
			transform: swiping ? getDragTransform(dragOffset, initialTransform.scale) : void 0,
			[movementCssVars.x]: `${deltaX}px`,
			[movementCssVars.y]: `${deltaY}px`
		};
	}, [dragDismissed, movementCssVars]);
	return {
		swiping: isSwiping,
		swipeDirection: currentSwipeDirection,
		dragDismissed,
		getPointerProps: import_react$2.useCallback(() => {
			if (!enabled) return {};
			return {
				onPointerDown: handleStart,
				onPointerMove: handleMove,
				onPointerUp: handleEnd,
				onPointerCancel: handleEnd
			};
		}, [
			enabled,
			handleEnd,
			handleMove,
			handleStart
		]),
		getTouchProps: import_react$2.useCallback(() => {
			if (!enabled) return {};
			return {
				onTouchStart: handleStart,
				onTouchMove: handleMove,
				onTouchEnd: handleEnd,
				onTouchCancel: handleEnd
			};
		}, [
			enabled,
			handleEnd,
			handleMove,
			handleStart
		]),
		moveNative,
		getDragStyles,
		reset
	};
}
var import_react$2, DEFAULT_SWIPE_THRESHOLD, REVERSE_CANCEL_THRESHOLD, MIN_VELOCITY_DURATION_MS, MIN_RELEASE_VELOCITY_DURATION_MS, MAX_RELEASE_VELOCITY_AGE_MS, MIN_VELOCITY_SAMPLE_DISTANCE, DEFAULT_IGNORE_SELECTOR;
function init_useSwipeDismiss() {
	return (init_useSwipeDismiss = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_shadowDom();
		init_scrollable();
		init_getElementTransform();
		DEFAULT_SWIPE_THRESHOLD = 40;
		REVERSE_CANCEL_THRESHOLD = 10;
		MIN_VELOCITY_DURATION_MS = 50;
		MIN_RELEASE_VELOCITY_DURATION_MS = 4;
		MAX_RELEASE_VELOCITY_AGE_MS = 80;
		MIN_VELOCITY_SAMPLE_DISTANCE = 1;
		DEFAULT_IGNORE_SELECTOR = "button,a,input,select,textarea,label,[role=\"button\"]";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/title/DrawerTitle.mjs
var DrawerTitle;
function init_DrawerTitle() {
	return (init_DrawerTitle = __esmMin((() => {
		init_DialogTitle();
		DrawerTitle = DialogTitle;
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/virtual-keyboard-provider/DrawerVirtualKeyboardContext.mjs
function useDrawerVirtualKeyboardContext() {
	return import_react$1.useContext(DrawerVirtualKeyboardContext);
}
var import_react$1, DrawerVirtualKeyboardContext;
function init_DrawerVirtualKeyboardContext() {
	return (init_DrawerVirtualKeyboardContext = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		DrawerVirtualKeyboardContext = /*#__PURE__*/ import_react$1.createContext(void 0);
		DrawerVirtualKeyboardContext.displayName = "DrawerVirtualKeyboardContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/drawer/viewport/DrawerViewport.mjs
function setBackdropSwipingAttribute(backdropElement, swiping$1) {
	backdropElement?.toggleAttribute(swiping, swiping$1);
}
function isSwipeIgnoredTarget(target) {
	return Boolean(closest(target, BASE_UI_SWIPE_IGNORE_SELECTOR));
}
function isDrawerContentTarget(target) {
	return Boolean(closest(target, DRAWER_CONTENT_SELECTOR));
}
function getBaseSwipeSize(element, direction) {
	return direction === "left" || direction === "right" ? element.offsetWidth : element.offsetHeight;
}
function getBaseSwipeThreshold(element, direction) {
	return Math.max(getBaseSwipeSize(element, direction) * .5, MIN_SWIPE_THRESHOLD);
}
function isRangeInput(target, win) {
	return target instanceof win.HTMLInputElement && target.type === "range";
}
function isTextSelectionControl(target) {
	return target.tagName === "INPUT" || target.tagName === "TEXTAREA";
}
function hasExpandedSelectionWithinTarget(selection, target) {
	const anchorElement = isElement(selection.anchorNode) ? selection.anchorNode : selection.anchorNode?.parentElement;
	const focusElement = isElement(selection.focusNode) ? selection.focusNode : selection.focusNode?.parentElement;
	return selection.containsNode(target, true) || contains(target, anchorElement) || contains(target, focusElement);
}
function shouldIgnoreSwipeForTextSelection(doc, rootElement) {
	const activeEl = activeElement(doc);
	if (activeEl && contains(rootElement, activeEl) && isTextSelectionControl(activeEl)) {
		const { selectionStart, selectionEnd } = activeEl;
		if (selectionStart != null && selectionEnd != null && selectionStart < selectionEnd) return true;
	}
	const selection = doc.getSelection?.();
	if (!selection || selection.isCollapsed) return false;
	return hasExpandedSelectionWithinTarget(selection, rootElement);
}
function isEventOnRangeInput(event, win) {
	return event.composedPath().some((pathTarget) => isRangeInput(pathTarget, win));
}
function isReactTouchEventOnRangeInput(event) {
	return isEventOnRangeInput(event.nativeEvent, getWindow(event.currentTarget));
}
function updateTouchScrollPosition(touchState, touch) {
	touchState.lastX = touch.clientX;
	touchState.lastY = touch.clientY;
}
/**
* Arbitrates a touchmove between the drawer swipe and a cross-axis gesture: a native scroll, or an
* element marked with the cross-axis `data-base-ui-swipe-ignore` value.
* Returns `true` when the move must be left alone — either because the cross axis already won the
* gesture, or because neither axis has passed the slop yet and the gesture cannot be attributed.
*/
function shouldYieldTouchMove(touchState, event, touch, isVerticalScrollAxis) {
	if (touchState.preserveNativeCrossAxisScroll) return true;
	if (touchState.drawerAxisAttributed || touchState.allowSwipe === true || !touchState.hasCrossAxisGestureTarget) return false;
	if (!event.cancelable) {
		touchState.preserveNativeCrossAxisScroll = true;
		return true;
	}
	const drawerAxisGestureDelta = isVerticalScrollAxis ? touch.clientY - touchState.startY : touch.clientX - touchState.startX;
	const crossAxisGestureDelta = isVerticalScrollAxis ? touch.clientX - touchState.startX : touch.clientY - touchState.startY;
	const absDrawerAxisGestureDelta = Math.abs(drawerAxisGestureDelta);
	const absCrossAxisGestureDelta = Math.abs(crossAxisGestureDelta);
	if (absCrossAxisGestureDelta >= AXIS_LOCK_SLOP && absCrossAxisGestureDelta > absDrawerAxisGestureDelta + AXIS_LOCK_BIAS) {
		touchState.preserveNativeCrossAxisScroll = true;
		return true;
	}
	if (absDrawerAxisGestureDelta >= AXIS_LOCK_SLOP) {
		touchState.drawerAxisAttributed = true;
		return false;
	}
	return true;
}
function hasScrollableContentOnAxis(scrollTarget, axis) {
	return getScrollMetrics(scrollTarget, axis).max > 0;
}
function getScrollMetrics(scrollTarget, axis) {
	if (axis === "vertical") {
		const max = Math.max(0, scrollTarget.scrollHeight - scrollTarget.clientHeight);
		return {
			offset: scrollTarget.scrollTop,
			max
		};
	}
	const max = Math.max(0, scrollTarget.scrollWidth - scrollTarget.clientWidth);
	return {
		offset: scrollTarget.scrollLeft,
		max
	};
}
function isAtSwipeStartEdge(scrollTarget, axis, direction) {
	const dismissFromStartEdge = shouldDismissFromStartEdge(direction, axis);
	const { offset, max } = getScrollMetrics(scrollTarget, axis);
	return dismissFromStartEdge ? offset <= 0 : offset >= max;
}
function canSwipeFromScrollEdgeOnMove(scrollTarget, axis, direction, delta) {
	if (!(shouldDismissFromStartEdge(direction, axis) ? delta > 0 : delta < 0)) return false;
	return isAtSwipeStartEdge(scrollTarget, axis, direction);
}
function shouldDismissFromStartEdge(direction, axis) {
	return axis === "vertical" ? direction === "down" : direction === "right";
}
var import_react, import_react_dom, import_jsx_runtime, MIN_SWIPE_THRESHOLD, FAST_SWIPE_VELOCITY, SNAP_VELOCITY_THRESHOLD, SNAP_VELOCITY_MULTIPLIER, MAX_SNAP_VELOCITY, MIN_SWIPE_RELEASE_VELOCITY, MAX_SWIPE_RELEASE_VELOCITY, MIN_SWIPE_RELEASE_DURATION_MS, MAX_SWIPE_RELEASE_DURATION_MS, MIN_SWIPE_RELEASE_SCALAR, AXIS_LOCK_SLOP, AXIS_LOCK_BIAS, DRAWER_CONTENT_SELECTOR, AXIS_SWIPE_IGNORE_SELECTORS, DrawerViewport;
function init_DrawerViewport() {
	return (init_DrawerViewport = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
		init_floating_ui_utils_dom();
		init_useAnimationFrame();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_DialogRootContext();
		init_DialogViewport();
		init_DialogViewportDataAttributes();
		init_mergeProps();
		init_DrawerRootContext();
		init_useDrawerSnapPoints();
		init_DrawerProviderContext();
		init_useSwipeDismiss();
		init_DrawerPopupCssVars();
		init_DrawerPopupDataAttributes();
		init_DrawerBackdropCssVars();
		init_drawerContentAttribute();
		init_reason_parts();
		init_createBaseUIEventDetails();
		init_shadowDom();
		init_DrawerViewportContext();
		init_stateAttributesMapping();
		init_scrollable();
		init_constants();
		init_DrawerVirtualKeyboardContext();
		import_jsx_runtime = require_jsx_runtime();
		MIN_SWIPE_THRESHOLD = 10;
		FAST_SWIPE_VELOCITY = .5;
		SNAP_VELOCITY_THRESHOLD = .5;
		SNAP_VELOCITY_MULTIPLIER = 300;
		MAX_SNAP_VELOCITY = 4;
		MIN_SWIPE_RELEASE_VELOCITY = .2;
		MAX_SWIPE_RELEASE_VELOCITY = 4;
		MIN_SWIPE_RELEASE_DURATION_MS = 80;
		MAX_SWIPE_RELEASE_DURATION_MS = 360;
		MIN_SWIPE_RELEASE_SCALAR = .1;
		AXIS_LOCK_SLOP = 6;
		AXIS_LOCK_BIAS = 2;
		DRAWER_CONTENT_SELECTOR = `[${DRAWER_CONTENT_ATTRIBUTE}]`;
		AXIS_SWIPE_IGNORE_SELECTORS = {
			horizontal: `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}="x"]`,
			vertical: `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}="y"]`
		};
		DrawerViewport = /*#__PURE__*/ import_react.forwardRef(function DrawerViewport(props, forwardedRef) {
			const { render, className, style, children, ...elementProps } = props;
			const store = useDialogRootContext();
			const popupRef = store.context.popupRef;
			const backdropRef = store.context.backdropRef;
			const { swipeDirection, notifyParentSwipingChange, notifyParentSwipeProgressChange, frontmostHeight, snapToSequentialPoints, swipeAreaActiveRef } = useDrawerRootContext();
			const providerContext = useDrawerProviderContext();
			const { snapPoints, resolvedSnapPoints, activeSnapPoint, activeSnapPointOffset, setActiveSnapPoint, popupHeight } = useDrawerSnapPoints();
			const open = store.useState("open");
			const mounted = store.useState("mounted");
			const nested = store.useState("nested");
			const nestedOpenDrawerCount = store.useState("nestedOpenDrawerCount");
			const viewportElement = store.useState("viewportElement");
			const popupElementState = store.useState("popupElement");
			const visualStateStore = providerContext?.visualStateStore;
			const nestedDrawerOpen = nestedOpenDrawerCount > 0;
			const scrollAxis = swipeDirection === "left" || swipeDirection === "right" ? "horizontal" : "vertical";
			const isVerticalScrollAxis = scrollAxis === "vertical";
			const crossScrollAxis = isVerticalScrollAxis ? "horizontal" : "vertical";
			const [swipeRelease, setSwipeRelease] = import_react.useState(null);
			const pendingSwipeCloseSnapPointRef = import_react.useRef(void 0);
			const resetSwipeRef = import_react.useRef(null);
			const controlledDismissFrame = useAnimationFrame();
			const swipingRef = import_react.useRef(false);
			const nestedSwipeActiveRef = import_react.useRef(false);
			const lastPointerTypeRef = import_react.useRef("");
			const ignoreNextTouchStartFromPenRef = import_react.useRef(false);
			const ignoreTouchSwipeRef = import_react.useRef(false);
			const touchScrollStateRef = import_react.useRef(null);
			const virtualKeyboard = useDrawerVirtualKeyboardContext();
			const snapPointRange = import_react.useMemo(() => {
				if (!snapPoints || snapPoints.length < 2 || resolvedSnapPoints.length < 2 || swipeDirection !== "down" && swipeDirection !== "up") return null;
				const offsets = resolvedSnapPoints.map((point) => point.offset).sort((a, b) => a - b);
				const minOffset = offsets[0];
				return {
					minOffset,
					range: offsets[1] - minOffset
				};
			}, [
				resolvedSnapPoints,
				snapPoints,
				swipeDirection
			]);
			const snapPointProgress = import_react.useMemo(() => {
				if (!snapPointRange || activeSnapPointOffset === null) return null;
				return clamp((activeSnapPointOffset - snapPointRange.minOffset) / snapPointRange.range, 0, 1);
			}, [activeSnapPointOffset, snapPointRange]);
			const swipeDirections = import_react.useMemo(() => {
				if (snapPoints && snapPoints.length > 0 && (swipeDirection === "down" || swipeDirection === "up")) return swipeDirection === "down" ? ["down", "up"] : ["up", "down"];
				return [swipeDirection];
			}, [snapPoints, swipeDirection]);
			const setSwipeDismissed = useStableCallback((dismissed) => {
				popupRef.current?.toggleAttribute(swipeDismiss, dismissed);
				backdropRef.current?.toggleAttribute(swipeDismiss, dismissed);
			});
			const clearSwipeRelease = useStableCallback(() => {
				setSwipeDismissed(false);
				popupRef.current?.removeAttribute(endingStyle$2);
				setSwipeRelease(null);
			});
			const finishNestedSwipe = useStableCallback(() => {
				if (!nestedSwipeActiveRef.current) return;
				nestedSwipeActiveRef.current = false;
				notifyParentSwipingChange?.(false);
			});
			const applySwipeProgress = useStableCallback((resolvedProgress, shouldTrackProgress, notifyParent) => {
				const isActive = open && !nested && shouldTrackProgress;
				const swipeProgress$1 = isActive ? resolvedProgress : 0;
				const nestedSwipeProgress = open && shouldTrackProgress ? resolvedProgress : 0;
				if (notifyParent && notifyParentSwipeProgressChange) {
					notifyParentSwipeProgressChange(nestedSwipeProgress);
					if (nestedSwipeProgress <= 0) finishNestedSwipe();
				}
				visualStateStore?.set({
					swipeProgress: swipeProgress$1,
					frontmostHeight: swipeProgress$1 > 0 ? frontmostHeight : 0
				});
				const backdropElement = backdropRef.current;
				if (!backdropElement) return;
				const showProgress = isActive && swipeProgress$1 > 0;
				backdropElement.style.setProperty(swipeProgress, showProgress ? `${swipeProgress$1}` : "0");
				if (showProgress && frontmostHeight > 0) backdropElement.style.setProperty(height, `${frontmostHeight}px`);
				else backdropElement.style.removeProperty(height);
			});
			function resolveSwipeRelease(popupElement, direction, deltaX, deltaY, velocityX, velocityY, releaseVelocityX, releaseVelocityY) {
				const size = getBaseSwipeSize(popupElement, direction);
				if (size <= 0) return null;
				const translationAlongDirection = ((direction === "down" || direction === "up") && snapPoints && snapPoints.length > 0 ? activeSnapPointOffset ?? 0 : 0) + getDisplacement(direction, deltaX, deltaY);
				const remainingDistance = Math.max(0, size - translationAlongDirection);
				if (remainingDistance <= 0) return null;
				const releaseVelocity = getDisplacement(direction, releaseVelocityX, releaseVelocityY);
				const directionalVelocity = Math.abs(releaseVelocity) > 0 ? releaseVelocity : getDisplacement(direction, velocityX, velocityY);
				if (directionalVelocity <= MIN_SWIPE_RELEASE_VELOCITY) return null;
				const clampedVelocity = clamp(directionalVelocity, MIN_SWIPE_RELEASE_VELOCITY, MAX_SWIPE_RELEASE_VELOCITY);
				const normalizedDuration = (clamp(remainingDistance / clampedVelocity, MIN_SWIPE_RELEASE_DURATION_MS, MAX_SWIPE_RELEASE_DURATION_MS) - MIN_SWIPE_RELEASE_DURATION_MS) / 280;
				return MIN_SWIPE_RELEASE_SCALAR + normalizedDuration * .9;
			}
			function updateNestedSwipeActive(details) {
				if (nestedSwipeActiveRef.current || !details) return;
				const delta = getDisplacement(details.direction ?? swipeDirection, details.deltaX, details.deltaY);
				if (Math.abs(delta) < MIN_SWIPE_THRESHOLD) return;
				nestedSwipeActiveRef.current = true;
				notifyParentSwipingChange?.(true);
			}
			const swipe$1 = useSwipeDismiss({
				enabled: mounted && !nestedDrawerOpen,
				directions: swipeDirections,
				elementRef: store.context.popupRef,
				ignoreSelectorWhenTouch: false,
				ignoreScrollableAncestors: true,
				movementCssVars: {
					x: swipeMovementX,
					y: swipeMovementY
				},
				onSwipeStart(event) {
					if ("touches" in event || event.pointerType === "touch") return;
					const popupElement = popupRef.current;
					const selection = ownerDocument(popupElement).getSelection?.();
					if (!selection || selection.isCollapsed) return;
					const anchorElement = isElement(selection.anchorNode) ? selection.anchorNode : selection.anchorNode?.parentElement;
					const focusElement = isElement(selection.focusNode) ? selection.focusNode : selection.focusNode?.parentElement;
					if (!contains(popupElement, anchorElement) && !contains(popupElement, focusElement)) return;
					selection.removeAllRanges();
				},
				onSwipingChange(swiping) {
					swipingRef.current = swiping;
					setBackdropSwipingAttribute(store.context.backdropRef.current, swiping);
					if (!swiping && !notifyParentSwipeProgressChange) finishNestedSwipe();
				},
				swipeThreshold({ element, direction }) {
					return getBaseSwipeThreshold(element, direction);
				},
				canStart(position, details) {
					const popupElement = store.context.popupRef.current;
					if (!popupElement) return false;
					const nativeEvent = details.nativeEvent;
					const touchLike = "touches" in nativeEvent || nativeEvent.pointerType === "touch";
					const touchState = touchLike ? touchScrollStateRef.current : null;
					const doc = popupElement.ownerDocument;
					const elementAtPoint = getElementAtPoint(popupElement.getRootNode(), position.x, position.y);
					if (!touchState?.startedInPopup && !contains(popupElement, elementAtPoint)) return false;
					if (touchLike && shouldIgnoreSwipeForTextSelection(doc, popupElement)) return false;
					if (touchState?.hasCrossAxisGestureTarget && !touchState.drawerAxisAttributed && touchState.allowSwipe !== true) return false;
					return true;
				},
				onProgress(progress, details) {
					const swiping = swipingRef.current;
					if (swiping) updateNestedSwipeActive(details);
					const hasSnapPoints = Boolean(snapPoints && snapPoints.length > 0);
					if (swiping && swipeDirection === "down" && hasSnapPoints && details) {
						const popupElement = store.context.popupRef.current;
						if (popupElement) {
							popupElement.style.removeProperty("transform");
							popupElement.style.setProperty(swipeMovementY, `${getSnapPointSwipeMovement(activeSnapPointOffset ?? 0, details.deltaY)}px`);
						}
					}
					let resolvedProgress = progress;
					if (snapPointRange && popupHeight > 0) {
						const baseOffset = activeSnapPointOffset ?? snapPointRange.minOffset;
						const offsetToProgress = (nextOffset) => clamp((nextOffset - snapPointRange.minOffset) / snapPointRange.range, 0, 1);
						if (swiping && details && Number.isFinite(details.deltaY)) resolvedProgress = offsetToProgress(clamp(baseOffset + details.deltaY, 0, popupHeight));
						else if (snapPointProgress !== null) resolvedProgress = snapPointProgress;
					}
					if (!swiping) {
						notifyParentSwipeProgressChange?.(0);
						finishNestedSwipe();
					}
					applySwipeProgress(resolvedProgress, true, swiping);
				},
				onRelease({ event, deltaX, deltaY, direction, velocityX, velocityY, releaseVelocityX, releaseVelocityY }) {
					const popupElement = store.context.popupRef.current;
					if (!popupElement) {
						clearSwipeRelease();
						return;
					}
					const releasePopupElement = popupElement;
					function startSwipeRelease(resolvedDirection) {
						finishNestedSwipe();
						setSwipeDismissed(true);
						releasePopupElement.style.removeProperty("transition");
						releasePopupElement.setAttribute(endingStyle$2, "");
						import_react_dom.flushSync(() => {
							setSwipeRelease(resolveSwipeRelease(releasePopupElement, resolvedDirection, deltaX, deltaY, velocityX, velocityY, releaseVelocityX, releaseVelocityY));
						});
					}
					if (!snapPoints || snapPoints.length === 0) {
						if (!direction) {
							clearSwipeRelease();
							return;
						}
						const directionalDelta = getDisplacement(direction, deltaX, deltaY);
						if (directionalDelta <= 0) {
							clearSwipeRelease();
							return false;
						}
						if (getDisplacement(direction, velocityX, velocityY) >= FAST_SWIPE_VELOCITY) {
							startSwipeRelease(direction);
							return true;
						}
						const shouldClose = directionalDelta > getBaseSwipeThreshold(releasePopupElement, direction);
						if (shouldClose) startSwipeRelease(direction);
						else clearSwipeRelease();
						return shouldClose;
					}
					if (swipeDirection !== "down" && swipeDirection !== "up") {
						clearSwipeRelease();
						return;
					}
					if (!popupHeight) {
						clearSwipeRelease();
						return false;
					}
					if (resolvedSnapPoints.length === 0) {
						clearSwipeRelease();
						return;
					}
					const dragDelta = swipeDirection === "down" ? deltaY : -deltaY;
					const dragDirection = Math.sign(dragDelta);
					const releaseDirectionalVelocity = swipeDirection === "down" ? releaseVelocityY : -releaseVelocityY;
					const fallbackDirectionalVelocity = swipeDirection === "down" ? velocityY : -velocityY;
					let resolvedDirectionalVelocity = releaseDirectionalVelocity;
					if (dragDirection !== 0 && Math.abs(dragDelta) >= MIN_SWIPE_THRESHOLD) {
						const velocityDirection = Math.sign(resolvedDirectionalVelocity);
						if (velocityDirection !== 0 && velocityDirection !== dragDirection) resolvedDirectionalVelocity = fallbackDirectionalVelocity;
					}
					const currentOffset = activeSnapPointOffset ?? 0;
					const dragTargetOffset = clamp(currentOffset + dragDelta, 0, popupHeight);
					const velocityOffset = Math.abs(resolvedDirectionalVelocity) >= SNAP_VELOCITY_THRESHOLD ? clamp(resolvedDirectionalVelocity, -4, MAX_SNAP_VELOCITY) * SNAP_VELOCITY_MULTIPLIER : 0;
					const targetOffset = snapToSequentialPoints ? dragTargetOffset : clamp(dragTargetOffset + velocityOffset, 0, popupHeight);
					const snapPointEventDetails = createChangeEventDetails(swipe, event);
					const settleInPlace = () => {
						applySwipeProgress(0, true, true);
						clearSwipeRelease();
						return false;
					};
					const settleOnSnapPoint = (snapPoint) => {
						setActiveSnapPoint(snapPoint.value, snapPointEventDetails);
						return settleInPlace();
					};
					const closeFromSnapPoints = (fallbackSnapPoint) => {
						if (!direction) return settleOnSnapPoint(fallbackSnapPoint);
						setActiveSnapPoint(null, snapPointEventDetails);
						if (snapPointEventDetails.isCanceled) return settleInPlace();
						pendingSwipeCloseSnapPointRef.current = activeSnapPoint;
						startSwipeRelease(swipeDirection);
						return true;
					};
					if (snapToSequentialPoints) {
						const orderedSnapPoints = [...resolvedSnapPoints].sort((first, second) => first.offset - second.offset);
						const orderedOffsets = orderedSnapPoints.map((point) => point.offset);
						const currentIndex = closestSnapPointIndex(orderedOffsets, currentOffset);
						let targetSnapPoint = orderedSnapPoints[closestSnapPointIndex(orderedOffsets, targetOffset)];
						const velocityDirection = Math.sign(resolvedDirectionalVelocity);
						const shouldAdvance = dragDirection !== 0 && velocityDirection !== 0 && velocityDirection === dragDirection && Math.abs(resolvedDirectionalVelocity) >= SNAP_VELOCITY_THRESHOLD;
						let effectiveTargetOffset = targetOffset;
						if (shouldAdvance) {
							const adjacentIndex = clamp(currentIndex + dragDirection, 0, orderedSnapPoints.length - 1);
							if (adjacentIndex !== currentIndex) {
								const adjacentPoint = orderedSnapPoints[adjacentIndex];
								if (dragDirection > 0 ? targetOffset < adjacentPoint.offset : targetOffset > adjacentPoint.offset) {
									targetSnapPoint = adjacentPoint;
									effectiveTargetOffset = adjacentPoint.offset;
								}
							} else if (dragDirection > 0) return closeFromSnapPoints(targetSnapPoint);
						}
						if (Math.abs(effectiveTargetOffset - popupHeight) < Math.abs(effectiveTargetOffset - targetSnapPoint.offset)) return closeFromSnapPoints(targetSnapPoint);
						return settleOnSnapPoint(targetSnapPoint);
					}
					const closestSnapPoint = resolvedSnapPoints[closestSnapPointIndex(resolvedSnapPoints.map((point) => point.offset), targetOffset)];
					if (resolvedDirectionalVelocity >= FAST_SWIPE_VELOCITY && dragDelta > 0) return closeFromSnapPoints(closestSnapPoint);
					if (Math.abs(targetOffset - popupHeight) < Math.abs(targetOffset - closestSnapPoint.offset)) return closeFromSnapPoints(closestSnapPoint);
					return settleOnSnapPoint(closestSnapPoint);
				},
				onDismiss(event) {
					visualStateStore?.set({
						swipeProgress: 0,
						frontmostHeight: 0
					});
					const backdropElement = store.context.backdropRef.current;
					if (backdropElement) {
						backdropElement.style.setProperty(swipeProgress, "0");
						backdropElement.style.removeProperty(height);
					}
					const dismissEventDetails = createChangeEventDetails(swipe, event);
					store.setOpen(false, dismissEventDetails);
					if (dismissEventDetails.isCanceled) {
						const pendingSnapPoint = pendingSwipeCloseSnapPointRef.current;
						if (pendingSnapPoint !== void 0) setActiveSnapPoint(pendingSnapPoint, createChangeEventDetails(swipe, event));
						pendingSwipeCloseSnapPointRef.current = void 0;
						resetSwipeRef.current?.();
						clearSwipeRelease();
						return;
					}
					if (store.select("open")) {
						const savedEvent = event;
						controlledDismissFrame.request(() => {
							if (store.select("open")) {
								const pendingSnapPoint = pendingSwipeCloseSnapPointRef.current;
								if (pendingSnapPoint !== void 0) setActiveSnapPoint(pendingSnapPoint, createChangeEventDetails(swipe, savedEvent));
								pendingSwipeCloseSnapPointRef.current = void 0;
								clearSwipeRelease();
								resetSwipeRef.current?.();
							} else pendingSwipeCloseSnapPointRef.current = void 0;
						});
						return;
					}
					pendingSwipeCloseSnapPointRef.current = void 0;
					setSwipeDismissed(true);
				}
			});
			const swipePointerProps = swipe$1.getPointerProps();
			const swipeTouchProps = swipe$1.getTouchProps();
			const { moveNative: moveSwipeNative, reset: resetSwipe } = swipe$1;
			resetSwipeRef.current = resetSwipe;
			import_react.useEffect(() => {
				const rootElement = viewportElement ?? popupElementState;
				if (!rootElement || !open || !mounted) return;
				const resolvedRootElement = rootElement;
				const doc = ownerDocument(resolvedRootElement);
				function processTouchMove(event, touchState, touch) {
					const drawerAxisDelta = isVerticalScrollAxis ? touch.clientY - touchState.lastY : touch.clientX - touchState.lastX;
					if (event.touches.length === 2) return;
					if (shouldIgnoreSwipeForTextSelection(doc, resolvedRootElement) || nestedDrawerOpen) return;
					if (shouldYieldTouchMove(touchState, event, touch, isVerticalScrollAxis)) return;
					const scrollTarget = touchState.scrollTarget;
					if (!scrollTarget || scrollTarget === doc.documentElement || scrollTarget === doc.body) {
						if (event.cancelable) event.preventDefault();
						event.stopPropagation();
						moveSwipeNative(event, resolvedRootElement);
						return;
					}
					if (!hasScrollableContentOnAxis(scrollTarget, scrollAxis)) {
						if (event.cancelable) event.preventDefault();
						event.stopPropagation();
						return;
					}
					if (drawerAxisDelta !== 0) {
						const canSwipeFromScrollEdge = canSwipeFromScrollEdgeOnMove(scrollTarget, scrollAxis, swipeDirection, drawerAxisDelta);
						if (!touchState.allowSwipe) {
							if (event.cancelable && canSwipeFromScrollEdge) {
								touchState.allowSwipe = true;
								event.preventDefault();
							} else touchState.allowSwipe = false;
						} else if (event.cancelable) event.preventDefault();
					}
					if (touchState.allowSwipe === true) {
						event.stopPropagation();
						moveSwipeNative(event, resolvedRootElement);
					}
				}
				function handleNativeTouchMove(event) {
					virtualKeyboard?.onTouchMove(event);
					if (ignoreTouchSwipeRef.current) return;
					const touchState = touchScrollStateRef.current;
					const touch = event.touches[0];
					if (!touch || !touchState) return;
					processTouchMove(event, touchState, touch);
					updateTouchScrollPosition(touchState, touch);
				}
				return addEventListener(doc, "touchmove", handleNativeTouchMove, {
					passive: false,
					capture: true
				});
			}, [
				mounted,
				nestedDrawerOpen,
				open,
				popupElementState,
				isVerticalScrollAxis,
				scrollAxis,
				swipeDirection,
				moveSwipeNative,
				viewportElement,
				virtualKeyboard
			]);
			useIsoLayoutEffect(() => {
				if (!snapPointRange || swipe$1.swiping) return;
				applySwipeProgress(!open || nested ? 0 : snapPointProgress ?? 0, true, false);
			}, [
				applySwipeProgress,
				frontmostHeight,
				nested,
				notifyParentSwipeProgressChange,
				open,
				snapPointProgress,
				snapPointRange,
				swipe$1.swiping,
				store,
				visualStateStore
			]);
			useIsoLayoutEffect(() => {
				if (!notifyParentSwipeProgressChange) return;
				if (!open) notifyParentSwipeProgressChange(0);
				return () => {
					notifyParentSwipeProgressChange(0);
				};
			}, [notifyParentSwipeProgressChange, open]);
			useIsoLayoutEffect(() => {
				if (open) {
					if (!swipeAreaActiveRef.current) resetSwipe();
					clearSwipeRelease();
				}
			}, [
				clearSwipeRelease,
				open,
				resetSwipe,
				swipeAreaActiveRef
			]);
			useIsoLayoutEffect(() => {
				const backdropElement = backdropRef.current;
				return () => {
					visualStateStore?.set({
						swipeProgress: 0,
						frontmostHeight: 0
					});
					setBackdropSwipingAttribute(backdropElement, false);
					const currentBackdrop = backdropRef.current;
					if (currentBackdrop !== backdropElement) setBackdropSwipingAttribute(currentBackdrop, false);
					finishNestedSwipe();
				};
			}, [
				backdropRef,
				finishNestedSwipe,
				visualStateStore
			]);
			const swipeProviderValue = import_react.useMemo(() => ({
				swiping: swipe$1.swiping,
				getDragStyles: swipe$1.getDragStyles,
				swipeStrength: swipeRelease ?? null,
				setSwipeDismissed
			}), [
				setSwipeDismissed,
				swipe$1.getDragStyles,
				swipe$1.swiping,
				swipeRelease
			]);
			function resetTouchSwipeState(ignoreSwipe) {
				ignoreTouchSwipeRef.current = ignoreSwipe;
				touchScrollStateRef.current = null;
			}
			function resetTouchTrackingState() {
				resetTouchSwipeState(false);
				lastPointerTypeRef.current = "";
				ignoreNextTouchStartFromPenRef.current = false;
			}
			function handlePointerEnd(event) {
				lastPointerTypeRef.current = "";
				return event.pointerType !== "touch";
			}
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DialogViewport, {
				ref: forwardedRef,
				className,
				style,
				render,
				...mergeProps(elementProps, {
					onPointerDown(event) {
						lastPointerTypeRef.current = event.pointerType;
						ignoreNextTouchStartFromPenRef.current = event.pointerType === "pen";
						if (!open || !mounted || nestedDrawerOpen) return;
						const elementAtPoint = getElementAtPoint(event.currentTarget.getRootNode(), event.clientX, event.clientY);
						if (isSwipeIgnoredTarget(elementAtPoint) || isDrawerContentTarget(elementAtPoint)) return;
						if (event.pointerType === "touch") return;
						swipePointerProps.onPointerDown?.(event);
					},
					onPointerMove(event) {
						if (event.pointerType === "touch") return;
						swipePointerProps.onPointerMove?.(event);
					},
					onPointerUp(event) {
						if (handlePointerEnd(event)) swipePointerProps.onPointerUp?.(event);
					},
					onPointerCancel(event) {
						if (handlePointerEnd(event)) swipePointerProps.onPointerCancel?.(event);
					},
					onTouchStart(event) {
						if (lastPointerTypeRef.current === "pen" && ignoreNextTouchStartFromPenRef.current) {
							ignoreNextTouchStartFromPenRef.current = false;
							resetTouchSwipeState(false);
							return;
						}
						if (!open || !mounted || nestedDrawerOpen) {
							resetTouchSwipeState(false);
							return;
						}
						const touch = event.touches[0];
						if (!touch) return;
						if (isReactTouchEventOnRangeInput(event)) {
							resetTouchSwipeState(false);
							return;
						}
						const rootElement = event.currentTarget;
						const elementAtPoint = getElementAtPoint(rootElement.getRootNode(), touch.clientX, touch.clientY);
						const eventTarget = getTarget(event.nativeEvent);
						const target = isElement(eventTarget) ? eventTarget : rootElement;
						if (!contains(rootElement, target)) {
							resetTouchSwipeState(true);
							return;
						}
						virtualKeyboard?.onTouchStart(event);
						if (closest(elementAtPoint, `${BASE_UI_SWIPE_IGNORE_SELECTOR}:not(${AXIS_SWIPE_IGNORE_SELECTORS[crossScrollAxis]})`)) {
							resetTouchSwipeState(true);
							return;
						}
						ignoreTouchSwipeRef.current = false;
						const scrollTarget = findScrollableTouchTarget(target, rootElement, scrollAxis);
						const hasCrossAxisGestureTarget = findScrollableTouchTarget(target, rootElement, crossScrollAxis) != null || closest(elementAtPoint, AXIS_SWIPE_IGNORE_SELECTORS[crossScrollAxis]) != null;
						let allowSwipe = null;
						if (scrollTarget) allowSwipe = isAtSwipeStartEdge(scrollTarget, scrollAxis, swipeDirection) ? null : false;
						touchScrollStateRef.current = {
							startX: touch.clientX,
							startY: touch.clientY,
							lastX: touch.clientX,
							lastY: touch.clientY,
							startedInPopup: contains(popupRef.current, elementAtPoint),
							scrollTarget,
							hasCrossAxisGestureTarget,
							allowSwipe,
							preserveNativeCrossAxisScroll: false,
							drawerAxisAttributed: false
						};
						swipeTouchProps.onTouchStart?.(event);
					},
					onTouchEnd(event) {
						virtualKeyboard?.onTouchEnd(event);
						resetTouchTrackingState();
						swipeTouchProps.onTouchEnd?.(event);
					},
					onTouchCancel(event) {
						virtualKeyboard?.onTouchCancel();
						resetTouchTrackingState();
						swipeTouchProps.onTouchCancel?.(event);
					},
					[nestedDialogOpen]: void 0
				}),
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(DrawerViewportContext.Provider, {
					value: swipeProviderValue,
					children
				})
			});
		});
		DrawerViewport.displayName = "DrawerViewport";
	})))();
}
//#endregion
export { DrawerRoot as a, init_DrawerPortal as c, DrawerContent as d, init_DrawerContent as f, init_DrawerBackdrop as g, DrawerBackdrop as h, init_DrawerTitle as i, DrawerPopup as l, init_DrawerClose as m, init_DrawerViewport as n, init_DrawerRoot as o, DrawerClose as p, DrawerTitle as r, DrawerPortal as s, DrawerViewport as t, init_DrawerPopup as u };
