import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { n as useObservableValue, t as init_use_observable_value } from "./use-observable-value-HJZ_Kgzf.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { i as use_dialog_default, n as use_viewport_match_default, r as init_use_dialog, t as init_use_viewport_match } from "./use-viewport-match-DnpS1SpK.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { n as use_reduced_motion_default, t as init_use_reduced_motion } from "./use-reduced-motion-D9Mdybdt.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CAUvOTR7.js";
import { n as autoUpdate } from "./floating-ui.dom-CuUnCMhL.js";
import { a as offset, c as useFloating, i as limitShift, n as flip, o as shift, r as init_floating_ui_react_dom, s as size, t as arrow } from "./floating-ui.react-dom-UmV1QRVv.js";
import { t as close_default } from "./close-rKxd1Abw.js";
import { a as init_utils, i as getReferenceElement, o as placementToMotionAnimationProps, r as computePopoverPosition, s as positionToPlacement } from "./tooltip-B41rxI5o.js";
import { n as motion, t as init_proxy } from "./proxy-B8JqJoDN.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-DpkzZnKH.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { a as Fill, c as init_context$1, i as init_slot_fill, n as Slot, s as context_default } from "./slot-fill-B3eLKm-e.js";
import { n as init_style_provider, t as StyleProvider } from "./style-provider-BJbJjDJX.js";
import { r as init_build_module$2 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/build-module/scroll-lock/index.mjs
function setLocked(locked) {
	const scrollingElement = document.scrollingElement || document.body;
	if (locked) previousScrollTop = scrollingElement.scrollTop;
	const methodName = locked ? "add" : "remove";
	scrollingElement.classList[methodName]("lockscroll");
	document.documentElement.classList[methodName]("lockscroll");
	if (!locked) scrollingElement.scrollTop = previousScrollTop;
}
function ScrollLock() {
	(0, import_react.useEffect)(() => {
		if (lockCounter === 0) setLocked(true);
		++lockCounter;
		return () => {
			if (lockCounter === 1) setLocked(false);
			--lockCounter;
		};
	}, []);
	return null;
}
var previousScrollTop, lockCounter, scroll_lock_default;
function init_scroll_lock() {
	return (init_scroll_lock = __esmMin((() => {
		init_react();
		previousScrollTop = 0;
		lockCounter = 0;
		scroll_lock_default = ScrollLock;
	})))();
}
//#endregion
//#region ../packages/components/build-module/slot-fill/bubbles-virtually/use-slot.mjs
function useSlot(name) {
	const registry = (0, import_react.useContext)(context_default);
	const slot = useObservableValue(registry.slots, name);
	let ref;
	if (slot && slot.type === "portal") ref = slot.ref;
	return { ref };
}
function init_use_slot() {
	return (init_use_slot = __esmMin((() => {
		init_react();
		init_use_observable_value();
		init_context$1();
	})))();
}
//#endregion
//#region ../packages/components/build-module/popover/overlay-middlewares.mjs
function overlayMiddlewares() {
	return [{
		name: "overlay",
		fn({ rects }) {
			return rects.reference;
		}
	}, size({ apply({ rects, elements }) {
		const { firstElementChild } = elements.floating ?? {};
		if (!(firstElementChild instanceof HTMLElement)) return;
		Object.assign(firstElementChild.style, {
			width: `${rects.reference.width}px`,
			height: `${rects.reference.height}px`
		});
	} })];
}
function init_overlay_middlewares() {
	return (init_overlay_middlewares = __esmMin((() => {
		init_floating_ui_react_dom();
	})))();
}
//#endregion
//#region ../packages/components/build-module/popover/context.mjs
var slotNameContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		slotNameContext = (0, import_react.createContext)(void 0);
		slotNameContext.displayName = "__unstableSlotNameContext";
	})))();
}
//#endregion
//#region ../packages/components/build-module/popover/index.mjs
var import_jsx_runtime, SLOT_NAME, OVERFLOW_PADDING, WILL_CHANGE_IDLE_TIMEOUT, ArrowTriangle, fallbackContainerClassname, getPopoverFallbackContainer, UnforwardedPopover, PopoverSlot, Popover, popover_default;
function init_popover() {
	return (init_popover = __esmMin((() => {
		init_clsx();
		init_floating_ui_react_dom();
		init_proxy();
		init_react(), init_react_platform();
		init_use_reduced_motion(), init_use_viewport_match(), init_use_merge_refs(), init_use_dialog();
		init_build_module$2();
		init_build_module();
		init_svg();
		init_build_module$1();
		init_button();
		init_scroll_lock();
		init_slot_fill();
		init_utils();
		init_context_connect(), init_use_context_system();
		init_overlay_middlewares();
		init_style_provider();
		init_context();
		import_jsx_runtime = require_jsx_runtime();
		SLOT_NAME = "Popover";
		OVERFLOW_PADDING = 8;
		WILL_CHANGE_IDLE_TIMEOUT = 200;
		ArrowTriangle = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 100 100",
			className: "components-popover__triangle",
			role: "presentation",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
				className: "components-popover__triangle-bg",
				d: "M 0 0 L 50 50 L 100 0"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {
				className: "components-popover__triangle-border",
				d: "M 0 0 L 50 50 L 100 0",
				vectorEffect: "non-scaling-stroke"
			})]
		});
		fallbackContainerClassname = "components-popover__fallback-container";
		getPopoverFallbackContainer = () => {
			let container = document.body.querySelector("." + fallbackContainerClassname);
			if (!container) {
				container = document.createElement("div");
				container.className = fallbackContainerClassname;
				document.body.append(container);
			}
			return container;
		};
		UnforwardedPopover = (props, forwardedRef) => {
			const { animate = true, headerTitle, constrainTabbing, onClose, children, className, noArrow = true, position, placement: placementProp = "bottom-start", offset: offsetProp = 0, focusOnMount = "firstElement", anchor, expandOnMobile, onFocusOutside, __unstableSlotName = SLOT_NAME, flip: flip$1 = true, resize = true, shift: shift$1 = false, inline = false, variant, style: contentStyle, __unstableForcePosition, anchorRef, anchorRect, getAnchorRect, isAlternate, onKeyDown, ...contentProps } = useContextSystem(props, "Popover");
			let computedFlipProp = flip$1;
			let computedResizeProp = resize;
			if (__unstableForcePosition !== void 0) {
				deprecated("`__unstableForcePosition` prop in wp.components.Popover", {
					since: "6.1",
					version: "6.3",
					alternative: "`flip={ false }` and  `resize={ false }`"
				});
				computedFlipProp = !__unstableForcePosition;
				computedResizeProp = !__unstableForcePosition;
			}
			if (anchorRef !== void 0) deprecated("`anchorRef` prop in wp.components.Popover", {
				since: "6.1",
				alternative: "`anchor` prop"
			});
			if (anchorRect !== void 0) deprecated("`anchorRect` prop in wp.components.Popover", {
				since: "6.1",
				alternative: "`anchor` prop"
			});
			if (getAnchorRect !== void 0) deprecated("`getAnchorRect` prop in wp.components.Popover", {
				since: "6.1",
				alternative: "`anchor` prop"
			});
			const computedVariant = isAlternate ? "toolbar" : variant;
			if (isAlternate !== void 0) deprecated("`isAlternate` prop in wp.components.Popover", {
				since: "6.2",
				alternative: "`variant` prop with the `'toolbar'` value"
			});
			const arrowRef = (0, import_react.useRef)(null);
			const [fallbackReferenceElement, setFallbackReferenceElement] = (0, import_react.useState)(null);
			const anchorRefFallback = (0, import_react.useCallback)((node) => {
				setFallbackReferenceElement(node);
			}, []);
			const isMobileViewport = use_viewport_match_default("medium", "<");
			const isExpanded = expandOnMobile && isMobileViewport;
			const hasArrow = !isExpanded && !noArrow;
			const normalizedPlacementFromProps = position ? positionToPlacement(position) : placementProp;
			const middleware = [
				...placementProp === "overlay" ? overlayMiddlewares() : [],
				offset(offsetProp),
				computedFlipProp && flip(),
				computedResizeProp && size({
					padding: OVERFLOW_PADDING,
					apply(sizeProps) {
						const { firstElementChild } = refs.floating.current ?? {};
						if (!(firstElementChild instanceof HTMLElement)) return;
						Object.assign(firstElementChild.style, {
							maxHeight: `${Math.max(0, sizeProps.availableHeight)}px`,
							overflow: "auto"
						});
					}
				}),
				shift$1 && shift({
					crossAxis: true,
					limiter: limitShift(),
					padding: 1
				}),
				arrow({ element: arrowRef })
			];
			const slotName = (0, import_react.useContext)(slotNameContext) || __unstableSlotName;
			const slot = useSlot(slotName);
			let onDialogClose;
			if (onClose || onFocusOutside) onDialogClose = (type, event) => {
				if (type === "focus-outside") {
					const blurTarget = event?.target;
					const referenceElement = refs.reference.current;
					const floatingElement = refs.floating.current;
					const isBlurFromThisPopover = referenceElement && "contains" in referenceElement && referenceElement.contains(blurTarget) || floatingElement?.contains(blurTarget);
					const ownerDocument = floatingElement?.ownerDocument;
					if (!isBlurFromThisPopover && !("relatedTarget" in event && event.relatedTarget) && ownerDocument?.activeElement === ownerDocument?.body) return;
					const relatedTarget = "relatedTarget" in event ? event.relatedTarget : null;
					if (relatedTarget instanceof Element && relatedTarget.closest("[data-wp-compat-overlay-slot]")) return;
					if (floatingElement && ownerDocument?.activeElement instanceof Element && floatingElement.contains(ownerDocument.activeElement)) return;
					if (onFocusOutside) onFocusOutside(event);
					else if (onClose) onClose();
				} else if (onClose) onClose();
			};
			const [dialogRef, dialogProps] = use_dialog_default({
				constrainTabbing,
				focusOnMount,
				onKeyDown,
				__unstableOnClose: onDialogClose,
				onClose: onDialogClose
			});
			const { x, y, refs, elements, strategy, update, placement: computedPlacement, middlewareData: { arrow: arrowData } } = useFloating({
				placement: normalizedPlacementFromProps === "overlay" ? void 0 : normalizedPlacementFromProps,
				middleware,
				whileElementsMounted: (referenceParam, floatingParam, updateParam) => autoUpdate(referenceParam, floatingParam, updateParam, {
					layoutShift: false,
					animationFrame: true
				})
			});
			const arrowCallbackRef = (0, import_react.useCallback)((node) => {
				arrowRef.current = node;
				update();
			}, [update]);
			const anchorRefTop = anchorRef?.top;
			const anchorRefBottom = anchorRef?.bottom;
			const anchorRefStartContainer = anchorRef?.startContainer;
			const anchorRefCurrent = anchorRef?.current;
			(0, import_react.useLayoutEffect)(() => {
				const resultingReferenceElement = getReferenceElement({
					anchor,
					anchorRef,
					anchorRect,
					getAnchorRect,
					fallbackReferenceElement
				});
				refs.setReference(resultingReferenceElement);
			}, [
				anchor,
				anchorRef,
				anchorRefTop,
				anchorRefBottom,
				anchorRefStartContainer,
				anchorRefCurrent,
				anchorRect,
				getAnchorRect,
				fallbackReferenceElement,
				refs
			]);
			const popoverElementRef = (0, import_react.useRef)(null);
			const mergedFloatingRef = useMergeRefs([
				refs.setFloating,
				dialogRef,
				popoverElementRef,
				forwardedRef
			]);
			(0, import_react.useLayoutEffect)(() => {
				const popoverElement = popoverElementRef.current;
				if (!popoverElement) return;
				popoverElement.style.willChange = "transform";
				const timeoutId = setTimeout(() => {
					popoverElement.style.willChange = "auto";
				}, WILL_CHANGE_IDLE_TIMEOUT);
				return () => clearTimeout(timeoutId);
			}, [
				x,
				y,
				elements.floating
			]);
			const style = isExpanded ? void 0 : {
				position: strategy,
				top: 0,
				left: 0,
				x: computePopoverPosition(x),
				y: computePopoverPosition(y)
			};
			const shouldReduceMotion = use_reduced_motion_default();
			const shouldAnimate = animate && !isExpanded && !shouldReduceMotion;
			const [animationFinished, setAnimationFinished] = (0, import_react.useState)(false);
			const { style: motionInlineStyles, ...otherMotionProps } = (0, import_react.useMemo)(() => placementToMotionAnimationProps(computedPlacement), [computedPlacement]);
			const animationProps = shouldAnimate ? {
				style: {
					...contentStyle,
					...motionInlineStyles,
					...style
				},
				onAnimationComplete: () => setAnimationFinished(true),
				...otherMotionProps
			} : {
				animate: false,
				style: {
					...contentStyle,
					...style
				}
			};
			const isPositioned = (!shouldAnimate || animationFinished) && x !== null && y !== null;
			let content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: clsx(className, {
					"is-expanded": isExpanded,
					"is-positioned": isPositioned,
					[`is-${computedVariant === "toolbar" ? "alternate" : computedVariant}`]: computedVariant
				}),
				...animationProps,
				...contentProps,
				ref: mergedFloatingRef,
				...dialogProps,
				tabIndex: -1,
				children: [
					isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(scroll_lock_default, {}),
					isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "components-popover__header",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "components-popover__header-title",
							children: headerTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, {
							className: "components-popover__close",
							size: "small",
							icon: close_default,
							onClick: onClose,
							label: __("Close")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "components-popover__content",
						children
					}),
					hasArrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: arrowCallbackRef,
						className: ["components-popover__arrow", `is-${computedPlacement.split("-")[0]}`].join(" "),
						style: {
							left: typeof arrowData?.x !== "undefined" && Number.isFinite(arrowData.x) ? `${arrowData.x}px` : "",
							top: typeof arrowData?.y !== "undefined" && Number.isFinite(arrowData.y) ? `${arrowData.y}px` : ""
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowTriangle, {})
					})
				]
			});
			const shouldRenderWithinSlot = slot.ref && !inline;
			const hasAnchor = anchorRef || anchorRect || anchor;
			if (shouldRenderWithinSlot) content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fill, {
				name: slotName,
				children: content
			});
			else if (!inline) content = createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleProvider, {
				document,
				children: content
			}), getPopoverFallbackContainer());
			if (hasAnchor) return content;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ref: anchorRefFallback }), content] });
		};
		PopoverSlot = (0, import_react.forwardRef)(({ name = SLOT_NAME }, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
				bubblesVirtually: true,
				name,
				className: "popover-slot",
				ref
			});
		});
		Popover = Object.assign(contextConnect(UnforwardedPopover, "Popover"), {
			/**
			* Renders a slot that is used internally by Popover for rendering content.
			*/
			Slot: Object.assign(PopoverSlot, { displayName: "Popover.Slot" }),
			/**
			* Provides a context to manage popover slot names.
			*
			* This is marked as unstable and should not be used directly.
			*/
			__unstableSlotNameProvider: Object.assign(slotNameContext.Provider, { displayName: "Popover.__unstableSlotNameProvider" })
		});
		popover_default = Popover;
	})))();
}
//#endregion
export { popover_default as n, init_use_slot as r, init_popover as t };
