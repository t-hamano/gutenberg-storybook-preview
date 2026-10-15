import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { n as useObservableValue, t as init_use_observable_value } from "./use-observable-value-HJZ_Kgzf.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { i as use_dialog_default, n as use_viewport_match_default, r as init_use_dialog, t as init_use_viewport_match } from "./use-viewport-match-CGm_RUkw.js";
import { n as __, t as init_build_module$1 } from "./build-module-v04us4E2.js";
import { n as use_reduced_motion_default, t as init_use_reduced_motion } from "./use-reduced-motion-D9Mdybdt.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { n as autoUpdate } from "./floating-ui.dom-CuUnCMhL.js";
import { a as offset, c as useFloating, i as limitShift, n as flip, o as shift, r as init_floating_ui_react_dom, s as size, t as arrow } from "./floating-ui.react-dom-UmV1QRVv.js";
import { a as SVG, o as init_svg, r as Path } from "./svg-CO2tRbm-.js";
import { t as close_default } from "./close-CkxG9D71.js";
import { n as motion, t as init_proxy } from "./proxy-BwuyW_W-.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-D7pcITcN.js";
import { a as init_utils, i as getReferenceElement, o as placementToMotionAnimationProps, r as computePopoverPosition, s as positionToPlacement } from "./tooltip-BEK7-yI-.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
import { n as init_scroll_lock, t as ScrollLock } from "./scroll-lock-DROUbWT9.js";
import { a as Fill, c as init_context$1, i as init_slot_fill, n as Slot, s as SlotFillContext } from "./slot-fill-CKXX0yAb.js";
import { n as init_style_provider, t as StyleProvider } from "./style-provider-BMfXCdSD.js";
import { r as init_build_module$2 } from "./library.story-DawnfKTW.js";
//#region ../packages/components/src/slot-fill/bubbles-virtually/use-slot.ts
function useSlot(name) {
	const registry = (0, import_react.useContext)(SlotFillContext);
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
//#region ../packages/components/src/popover/overlay-middlewares.tsx
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
//#region ../packages/components/src/popover/context.ts
var slotNameContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		slotNameContext = (0, import_react.createContext)(void 0);
		slotNameContext.displayName = "__unstableSlotNameContext";
	})))();
}
//#endregion
//#region ../packages/components/src/popover/index.tsx
var import_jsx_dev_runtime, _jsxFileName, SLOT_NAME, OVERFLOW_PADDING, WILL_CHANGE_IDLE_TIMEOUT, ArrowTriangle, fallbackContainerClassname, getPopoverFallbackContainer, UnforwardedPopover, PopoverSlot, Popover;
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
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		init_context();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/popover/index.tsx";
		SLOT_NAME = "Popover";
		OVERFLOW_PADDING = 8;
		WILL_CHANGE_IDLE_TIMEOUT = 200;
		ArrowTriangle = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SVG, {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 100 100",
			className: "components-popover__triangle",
			role: "presentation",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Path, {
				className: "components-popover__triangle-bg",
				d: "M 0 0 L 50 50 L 100 0"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 3
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Path, {
				className: "components-popover__triangle-border",
				d: "M 0 0 L 50 50 L 100 0",
				vectorEffect: "non-scaling-stroke"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 3
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 2
		}, void 0);
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
			let content = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
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
					isExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollLock, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 501,
						columnNumber: 20
					}, void 0),
					isExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "components-popover__header",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "components-popover__header-title",
							children: headerTitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 504,
							columnNumber: 6
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							className: "components-popover__close",
							size: "small",
							icon: close_default,
							onClick: onClose,
							label: __("Close")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 507,
							columnNumber: 6
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 503,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "components-popover__content",
						children
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 516,
						columnNumber: 4
					}, void 0),
					hasArrow && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						ref: arrowCallbackRef,
						className: ["components-popover__arrow", `is-${computedPlacement.split("-")[0]}`].join(" "),
						style: {
							left: typeof arrowData?.x !== "undefined" && Number.isFinite(arrowData.x) ? `${arrowData.x}px` : "",
							top: typeof arrowData?.y !== "undefined" && Number.isFinite(arrowData.y) ? `${arrowData.y}px` : ""
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowTriangle, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 537,
							columnNumber: 6
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 518,
						columnNumber: 5
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 483,
				columnNumber: 3
			}, void 0);
			const shouldRenderWithinSlot = slot.ref && !inline;
			const hasAnchor = anchorRef || anchorRect || anchor;
			if (shouldRenderWithinSlot) content = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Fill, {
				name: slotName,
				children: content
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 547,
				columnNumber: 13
			}, void 0);
			else if (!inline) content = createPortal(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyleProvider, {
				document,
				children: content
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 550,
				columnNumber: 4
			}, void 0), getPopoverFallbackContainer());
			if (hasAnchor) return content;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { ref: anchorRefFallback }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 561,
				columnNumber: 4
			}, void 0), content] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 560,
				columnNumber: 3
			}, void 0);
		};
		PopoverSlot = (0, import_react.forwardRef)(({ name = SLOT_NAME }, ref) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Slot, {
				bubblesVirtually: true,
				name,
				className: "popover-slot",
				ref
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 571,
				columnNumber: 4
			}, void 0);
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
		try {
			SLOT_NAME.__docgenInfo = {
				"description": "Name of slot in which popover should fill.",
				"displayName": "SLOT_NAME",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/popover/index.tsx",
				"methods": [],
				"props": {},
				"tags": { "type": "{string}" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PopoverSlot.__docgenInfo = {
				"description": "",
				"displayName": "PopoverSlot",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/popover/index.tsx",
				"methods": [],
				"props": { "name": {
					"defaultValue": { "value": "Popover" },
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
						"name": "TypeLiteral"
					}],
					"description": "The name of the Slot in which the popover should be rendered. It should\nbe also passed to the corresponding `PopoverSlot` component.",
					"name": "name",
					"required": false,
					"tags": {},
					"type": { "name": "string" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Popover.__docgenInfo = {
				"description": "`Popover` renders its content in a floating modal. If no explicit anchor is passed via props, it anchors to its parent element by default.\n\n```jsx\nimport { Button, Popover } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyPopover = () => {\n	const [ isVisible, setIsVisible ] = useState( false );\n	const toggleVisible = () => {\n		setIsVisible( ( state ) => ! state );\n	};\n\n	return (\n		<Button variant=\"secondary\" onClick={ toggleVisible }>\n			Toggle Popover!\n			{ isVisible && <Popover>Popover is toggled!</Popover> }\n		</Button>\n	);\n};\n```",
				"displayName": "Popover",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/popover/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `children` elements rendered as the popover's content.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"animate": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the popover should animate when opening.",
						"name": "animate",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shift": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Enables the `Popover` to shift in order to stay in view when meeting the\nviewport edges.\n_Note: The `resize` and `shift` props are not intended to be used together.\nEnabling both can cause unexpected behavior._",
						"name": "shift",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inline": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to render the popover inline or within the slot.",
						"name": "inline",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"anchor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The element that should be used by the popover as its anchor. It can either\nbe an `Element` or, alternatively, a `VirtualElement` — ie. an object with\nthe `getBoundingClientRect()` and the `ownerDocument` properties defined.\n\n**The anchor element should be stored in local state** rather than a\nplain React ref to ensure reactive updating when it changes.",
						"name": "anchor",
						"required": false,
						"tags": {},
						"type": { "name": "Element | VirtualElement | null" }
					},
					"variant": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the popover's style.\n\nLeave undefined for the default style. Other values are:\n- 'unstyled':  The popover is essentially without any visible style, it\n               has no background, border, outline or drop shadow, but\n               the popover contents are still displayed.\n- 'toolbar':   A style that has no elevation, but a high contrast with\n               other elements. This is matches the style of the\n               `Toolbar` component.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"toolbar\" | \"unstyled\"",
							"value": [{ "value": "\"toolbar\"" }, { "value": "\"unstyled\"" }]
						}
					},
					"offset": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The distance (in px) between the anchor and the popover. Pass an object to\nalso displace the popover along its cross axis.",
						"name": "offset",
						"required": false,
						"tags": {},
						"type": { "name": "number | { mainAxis?: number; crossAxis?: number; } | undefined" }
					},
					"onClose": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the popover should be closed.",
						"name": "onClose",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"position": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Legacy way to specify the popover's position with respect to its anchor.\n_Note: this prop is deprecated. Use the `placement` prop instead._",
						"name": "position",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"flip": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies whether the popover should flip across its axis if there isn't\nspace for it in the normal placement.\nWhen the using a 'top' placement, the popover will switch to a 'bottom'\nplacement. When using a 'left' placement, the popover will switch to a\n`right' placement.\nThe popover will retain its alignment of 'start' or 'end' when flipping.",
						"name": "flip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"placement": {
						"defaultValue": { "value": "'bottom-start'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to specify the popover's position with respect to its anchor.",
						"name": "placement",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PopoverPlacement",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"top\"" },
								{ "value": "\"overlay\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"left-end\"" },
								{ "value": "\"left-start\"" },
								{ "value": "\"right-end\"" },
								{ "value": "\"right-start\"" },
								{ "value": "\"top-end\"" },
								{ "value": "\"top-start\"" },
								{ "value": "\"bottom-end\"" },
								{ "value": "\"bottom-start\"" }
							]
						}
					},
					"getAnchorRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function returning the same value as the one expected by the `anchorRect`\nprop, used to specify a dynamic popover position.\n@deprecated",
						"name": "getAnchorRect",
						"required": false,
						"tags": {},
						"type": { "name": "((fallbackReferenceElement: Element | null) => DomRectWithOwnerDocument)" }
					},
					"resize": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the size of the popover to prevent its contents from going out of\nview when meeting the viewport edges.\n_Note: The `resize` and `shift` props are not intended to be used together.\nEnabling both can cause unexpected behavior._",
						"name": "resize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"expandOnMobile": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show the popover fullscreen on mobile viewports.",
						"name": "expandOnMobile",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"focusOnMount": {
						"defaultValue": { "value": "'firstElement'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines focus behavior when the popover mounts.\n\n- `\"firstElement\"` focuses the first tabbable element within.\n- `\"firstInputElement\"` focuses the first value control within.\n- `true` focuses the element itself.\n- `false` does nothing and _should not be used unless an accessible\n   substitute behavior is implemented_.",
						"name": "focusOnMount",
						"required": false,
						"tags": {},
						"type": { "name": "Mode" }
					},
					"headerTitle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to customize the header text shown when the popover is toggled to\nfullscreen on mobile viewports (see the `expandOnMobile` prop).",
						"name": "headerTitle",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__unstableSlotName": {
						"defaultValue": { "value": "'Popover'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The name of the Slot in which the popover should be rendered. It should\nbe also passed to the corresponding `PopoverSlot` component.",
						"name": "__unstableSlotName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"constrainTabbing": {
						"defaultValue": { "value": "`focusOnMount` !== false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines whether tabbing is constrained to within the popover,\npreventing keyboard focus from leaving the popover content without\nexplicit focus elsewhere, or whether the popover remains part of the wider\ntab order. If no value is passed, it will be derived from `focusOnMount`.",
						"name": "constrainTabbing",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onFocusOutside": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the focus leaves the opened popover. This should\nonly be provided in advanced use-cases when a popover should close under\nspecific circumstances (for example, if the new `document.activeElement`\nis content of or otherwise controlling popover visibility).\n\nWhen not provided, the `onClose` callback will be called instead.",
						"name": "onFocusOutside",
						"required": false,
						"tags": {},
						"type": { "name": "((event: SyntheticEvent<Element, Event>) => void)" }
					},
					"noArrow": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to show/hide the arrow that points at the popover's anchor.",
						"name": "noArrow",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableForcePosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Prevent the popover from flipping and resizing when meeting the viewport\nedges. _Note: this prop is deprecated. Instead, provide use the individual\n`flip` and `resize` props._\n@deprecated",
						"name": "__unstableForcePosition",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"anchorRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An object extending a `DOMRect` with an additional optional `ownerDocument`\nproperty, used to specify a fixed popover position.\n@deprecated",
						"name": "anchorRect",
						"required": false,
						"tags": {},
						"type": { "name": "DomRectWithOwnerDocument" }
					},
					"anchorRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to specify a fixed popover position. It can be an `Element`, a React\nreference to an `element`, an object with a `top` and a `bottom` properties\n(both pointing to elements), or a `range`.\n@deprecated",
						"name": "anchorRef",
						"required": false,
						"tags": {},
						"type": { "name": "Element | PopoverAnchorRefReference | PopoverAnchorRefTopBottom | Range" }
					},
					"isAlternate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to enable a different visual style for the popover.\n_Note: this prop is deprecated. Use the `variant` prop with the\n'toolbar' value instead._\n@deprecated",
						"name": "isAlternate",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Popover.__docgenInfo = {
				"description": "`Popover` renders its content in a floating modal. If no explicit anchor is passed via props, it anchors to its parent element by default.\n\n```jsx\nimport { Button, Popover } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyPopover = () => {\n	const [ isVisible, setIsVisible ] = useState( false );\n	const toggleVisible = () => {\n		setIsVisible( ( state ) => ! state );\n	};\n\n	return (\n		<Button variant=\"secondary\" onClick={ toggleVisible }>\n			Toggle Popover!\n			{ isVisible && <Popover>Popover is toggled!</Popover> }\n		</Button>\n	);\n};\n```",
				"displayName": "popover",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/popover/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The `children` elements rendered as the popover's content.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"animate": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the popover should animate when opening.",
						"name": "animate",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"shift": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Enables the `Popover` to shift in order to stay in view when meeting the\nviewport edges.\n_Note: The `resize` and `shift` props are not intended to be used together.\nEnabling both can cause unexpected behavior._",
						"name": "shift",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"inline": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to render the popover inline or within the slot.",
						"name": "inline",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"anchor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The element that should be used by the popover as its anchor. It can either\nbe an `Element` or, alternatively, a `VirtualElement` — ie. an object with\nthe `getBoundingClientRect()` and the `ownerDocument` properties defined.\n\n**The anchor element should be stored in local state** rather than a\nplain React ref to ensure reactive updating when it changes.",
						"name": "anchor",
						"required": false,
						"tags": {},
						"type": { "name": "Element | VirtualElement | null" }
					},
					"variant": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies the popover's style.\n\nLeave undefined for the default style. Other values are:\n- 'unstyled':  The popover is essentially without any visible style, it\n               has no background, border, outline or drop shadow, but\n               the popover contents are still displayed.\n- 'toolbar':   A style that has no elevation, but a high contrast with\n               other elements. This is matches the style of the\n               `Toolbar` component.",
						"name": "variant",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"toolbar\" | \"unstyled\"",
							"value": [{ "value": "\"toolbar\"" }, { "value": "\"unstyled\"" }]
						}
					},
					"offset": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The distance (in px) between the anchor and the popover. Pass an object to\nalso displace the popover along its cross axis.",
						"name": "offset",
						"required": false,
						"tags": {},
						"type": { "name": "number | { mainAxis?: number; crossAxis?: number; } | undefined" }
					},
					"onClose": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the popover should be closed.",
						"name": "onClose",
						"required": false,
						"tags": {},
						"type": { "name": "(() => void)" }
					},
					"position": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Legacy way to specify the popover's position with respect to its anchor.\n_Note: this prop is deprecated. Use the `placement` prop instead._",
						"name": "position",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\" | PositionYAxis | \"middle center\" | ... 36 more ...",
							"value": [
								{ "value": "\"top\"" },
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right top\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"bottom right bottom\"" }
							]
						}
					},
					"flip": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Specifies whether the popover should flip across its axis if there isn't\nspace for it in the normal placement.\nWhen the using a 'top' placement, the popover will switch to a 'bottom'\nplacement. When using a 'left' placement, the popover will switch to a\n`right' placement.\nThe popover will retain its alignment of 'start' or 'end' when flipping.",
						"name": "flip",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"placement": {
						"defaultValue": { "value": "'bottom-start'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to specify the popover's position with respect to its anchor.",
						"name": "placement",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "PopoverPlacement",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"top\"" },
								{ "value": "\"overlay\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"left-end\"" },
								{ "value": "\"left-start\"" },
								{ "value": "\"right-end\"" },
								{ "value": "\"right-start\"" },
								{ "value": "\"top-end\"" },
								{ "value": "\"top-start\"" },
								{ "value": "\"bottom-end\"" },
								{ "value": "\"bottom-start\"" }
							]
						}
					},
					"getAnchorRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function returning the same value as the one expected by the `anchorRect`\nprop, used to specify a dynamic popover position.\n@deprecated",
						"name": "getAnchorRect",
						"required": false,
						"tags": {},
						"type": { "name": "((fallbackReferenceElement: Element | null) => DomRectWithOwnerDocument)" }
					},
					"resize": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Adjusts the size of the popover to prevent its contents from going out of\nview when meeting the viewport edges.\n_Note: The `resize` and `shift` props are not intended to be used together.\nEnabling both can cause unexpected behavior._",
						"name": "resize",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"expandOnMobile": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Show the popover fullscreen on mobile viewports.",
						"name": "expandOnMobile",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"focusOnMount": {
						"defaultValue": { "value": "'firstElement'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines focus behavior when the popover mounts.\n\n- `\"firstElement\"` focuses the first tabbable element within.\n- `\"firstInputElement\"` focuses the first value control within.\n- `true` focuses the element itself.\n- `false` does nothing and _should not be used unless an accessible\n   substitute behavior is implemented_.",
						"name": "focusOnMount",
						"required": false,
						"tags": {},
						"type": { "name": "Mode" }
					},
					"headerTitle": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to customize the header text shown when the popover is toggled to\nfullscreen on mobile viewports (see the `expandOnMobile` prop).",
						"name": "headerTitle",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__unstableSlotName": {
						"defaultValue": { "value": "'Popover'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The name of the Slot in which the popover should be rendered. It should\nbe also passed to the corresponding `PopoverSlot` component.",
						"name": "__unstableSlotName",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"constrainTabbing": {
						"defaultValue": { "value": "`focusOnMount` !== false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Determines whether tabbing is constrained to within the popover,\npreventing keyboard focus from leaving the popover content without\nexplicit focus elsewhere, or whether the popover remains part of the wider\ntab order. If no value is passed, it will be derived from `focusOnMount`.",
						"name": "constrainTabbing",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onFocusOutside": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when the focus leaves the opened popover. This should\nonly be provided in advanced use-cases when a popover should close under\nspecific circumstances (for example, if the new `document.activeElement`\nis content of or otherwise controlling popover visibility).\n\nWhen not provided, the `onClose` callback will be called instead.",
						"name": "onFocusOutside",
						"required": false,
						"tags": {},
						"type": { "name": "((event: SyntheticEvent<Element, Event>) => void)" }
					},
					"noArrow": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to show/hide the arrow that points at the popover's anchor.",
						"name": "noArrow",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"__unstableForcePosition": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Prevent the popover from flipping and resizing when meeting the viewport\nedges. _Note: this prop is deprecated. Instead, provide use the individual\n`flip` and `resize` props._\n@deprecated",
						"name": "__unstableForcePosition",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"anchorRect": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An object extending a `DOMRect` with an additional optional `ownerDocument`\nproperty, used to specify a fixed popover position.\n@deprecated",
						"name": "anchorRect",
						"required": false,
						"tags": {},
						"type": { "name": "DomRectWithOwnerDocument" }
					},
					"anchorRef": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to specify a fixed popover position. It can be an `Element`, a React\nreference to an `element`, an object with a `top` and a `bottom` properties\n(both pointing to elements), or a `range`.\n@deprecated",
						"name": "anchorRef",
						"required": false,
						"tags": {},
						"type": { "name": "Element | PopoverAnchorRefReference | PopoverAnchorRefTopBottom | Range" }
					},
					"isAlternate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Used to enable a different visual style for the popover.\n_Note: this prop is deprecated. Use the `variant` prop with the\n'toolbar' value instead._\n@deprecated",
						"name": "isAlternate",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_popover as n, init_use_slot as r, Popover as t };
