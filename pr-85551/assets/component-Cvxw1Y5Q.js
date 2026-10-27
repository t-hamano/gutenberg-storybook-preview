import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-BRjcGYWx.js";
import { f as Role, p as init_role } from "./popover-store-D4s7hWFV.js";
import { b as init_tooltip$1, g as init_tooltip_anchor, h as TooltipAnchor, l as init_tooltip_store, n as init_cubic_bezier, t as cubicBezier, u as useTooltipStore, y as Tooltip } from "./cubic-bezier-BLLJ0ukc.js";
import { n as useContextSystem, o as init_context_connect, r as contextConnect, t as init_use_context_system } from "./use-context-system-4MMWHyS1.js";
import { n as init_component$1, t as component_default$1 } from "./component-CFOx0tK5.js";
//#region ../packages/components/build-module/shortcut/index.mjs
function Shortcut(props) {
	const { shortcut, className } = props;
	if (!shortcut) return null;
	let displayText;
	let ariaLabel;
	if (typeof shortcut === "string") displayText = shortcut;
	if (shortcut !== null && typeof shortcut === "object") {
		displayText = shortcut.display;
		ariaLabel = shortcut.ariaLabel;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
		className,
		"aria-label": ariaLabel,
		children: displayText
	});
}
var import_jsx_runtime$2, shortcut_default;
function init_shortcut() {
	return (init_shortcut = __esmMin((() => {
		import_jsx_runtime$2 = require_jsx_runtime();
		shortcut_default = Shortcut;
	})))();
}
//#endregion
//#region ../packages/components/build-module/popover/utils.mjs
function isTopBottom(anchorRef) {
	return !!anchorRef?.top;
}
function isRef(anchorRef) {
	return !!anchorRef?.current;
}
var POSITION_TO_PLACEMENT, positionToPlacement, PLACEMENT_TO_ANIMATION_ORIGIN, placementToMotionAnimationProps, getReferenceElement, computePopoverPosition;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_cubic_bezier();
		POSITION_TO_PLACEMENT = {
			bottom: "bottom",
			top: "top",
			"middle left": "left",
			"middle right": "right",
			"bottom left": "bottom-end",
			"bottom center": "bottom",
			"bottom right": "bottom-start",
			"top left": "top-end",
			"top center": "top",
			"top right": "top-start",
			"middle left left": "left",
			"middle left right": "left",
			"middle left bottom": "left-end",
			"middle left top": "left-start",
			"middle right left": "right",
			"middle right right": "right",
			"middle right bottom": "right-end",
			"middle right top": "right-start",
			"bottom left left": "bottom-end",
			"bottom left right": "bottom-end",
			"bottom left bottom": "bottom-end",
			"bottom left top": "bottom-end",
			"bottom center left": "bottom",
			"bottom center right": "bottom",
			"bottom center bottom": "bottom",
			"bottom center top": "bottom",
			"bottom right left": "bottom-start",
			"bottom right right": "bottom-start",
			"bottom right bottom": "bottom-start",
			"bottom right top": "bottom-start",
			"top left left": "top-end",
			"top left right": "top-end",
			"top left bottom": "top-end",
			"top left top": "top-end",
			"top center left": "top",
			"top center right": "top",
			"top center bottom": "top",
			"top center top": "top",
			"top right left": "top-start",
			"top right right": "top-start",
			"top right bottom": "top-start",
			"top right top": "top-start",
			middle: "bottom",
			"middle center": "bottom",
			"middle center bottom": "bottom",
			"middle center left": "bottom",
			"middle center right": "bottom",
			"middle center top": "bottom"
		};
		positionToPlacement = (position) => POSITION_TO_PLACEMENT[position] ?? "bottom";
		PLACEMENT_TO_ANIMATION_ORIGIN = {
			top: {
				originX: .5,
				originY: 1
			},
			"top-start": {
				originX: 0,
				originY: 1
			},
			"top-end": {
				originX: 1,
				originY: 1
			},
			right: {
				originX: 0,
				originY: .5
			},
			"right-start": {
				originX: 0,
				originY: 0
			},
			"right-end": {
				originX: 0,
				originY: 1
			},
			bottom: {
				originX: .5,
				originY: 0
			},
			"bottom-start": {
				originX: 0,
				originY: 0
			},
			"bottom-end": {
				originX: 1,
				originY: 0
			},
			left: {
				originX: 1,
				originY: .5
			},
			"left-start": {
				originX: 1,
				originY: 0
			},
			"left-end": {
				originX: 1,
				originY: 1
			},
			overlay: {
				originX: .5,
				originY: .5
			}
		};
		placementToMotionAnimationProps = (placement) => {
			const translateProp = placement.startsWith("top") || placement.startsWith("bottom") ? "translateY" : "translateX";
			const translateDirection = placement.startsWith("top") || placement.startsWith("left") ? 1 : -1;
			return {
				style: PLACEMENT_TO_ANIMATION_ORIGIN[placement],
				initial: {
					opacity: 0,
					[translateProp]: `${4 * translateDirection}px`
				},
				animate: {
					opacity: 1,
					[translateProp]: 0
				},
				transition: {
					opacity: {
						duration: .1,
						ease: "linear"
					},
					[translateProp]: {
						duration: .2,
						ease: cubicBezier(.25, 0, 0, 1)
					}
				}
			};
		};
		getReferenceElement = ({ anchor, anchorRef, anchorRect, getAnchorRect, fallbackReferenceElement }) => {
			let referenceElement = null;
			if (anchor) referenceElement = anchor;
			else if (isTopBottom(anchorRef)) referenceElement = { getBoundingClientRect() {
				const topRect = anchorRef.top.getBoundingClientRect();
				const bottomRect = anchorRef.bottom.getBoundingClientRect();
				return new window.DOMRect(topRect.x, topRect.y, topRect.width, bottomRect.bottom - topRect.top);
			} };
			else if (isRef(anchorRef)) referenceElement = anchorRef.current;
			else if (anchorRef) referenceElement = anchorRef;
			else if (anchorRect) referenceElement = { getBoundingClientRect() {
				return anchorRect;
			} };
			else if (getAnchorRect) referenceElement = { getBoundingClientRect() {
				const rect = getAnchorRect(fallbackReferenceElement);
				return new window.DOMRect(rect.x ?? rect.left, rect.y ?? rect.top, rect.width ?? rect.right - rect.left, rect.height ?? rect.bottom - rect.top);
			} };
			else if (fallbackReferenceElement) referenceElement = fallbackReferenceElement.parentElement;
			return referenceElement ?? null;
		};
		computePopoverPosition = (c) => c === null || Number.isNaN(c) ? void 0 : Math.round(c);
	})))();
}
//#endregion
//#region ../packages/components/build-module/tooltip/context.mjs
var TooltipInternalContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		TooltipInternalContext = (0, import_react.createContext)({ isNestedInTooltip: false });
		TooltipInternalContext.displayName = "TooltipInternalContext";
	})))();
}
//#endregion
//#region ../packages/components/build-module/tooltip/index.mjs
function UnforwardedTooltip(props, ref) {
	const { children, className, delay = 700, hideOnClick = true, placement, position, shortcut, text, ...restProps } = props;
	const { isNestedInTooltip } = (0, import_react.useContext)(TooltipInternalContext);
	const baseId = use_instance_id_default(Tooltip2, "tooltip");
	const describedById = text || shortcut ? baseId : void 0;
	const isOnlyChild = import_react.Children.count(children) === 1;
	if (!isOnlyChild) {}
	let computedPlacement;
	if (placement !== void 0) computedPlacement = placement;
	else if (position !== void 0) {
		computedPlacement = positionToPlacement(position);
		deprecated("`position` prop in wp.components.tooltip", {
			since: "6.4",
			alternative: "`placement` prop"
		});
	}
	computedPlacement = computedPlacement || "top";
	const tooltipStore = useTooltipStore({
		placement: computedPlacement,
		showTimeout: delay
	});
	const mounted = useStoreState(tooltipStore, "mounted");
	if (isNestedInTooltip) return isOnlyChild ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Role, {
		...restProps,
		render: children
	}) : children;
	function addDescribedById(el) {
		const element = el;
		return describedById && mounted && element.props["aria-describedby"] === void 0 && element.props["aria-label"] !== text ? (0, import_react.cloneElement)(element, { "aria-describedby": describedById }) : element;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(TooltipInternalContext.Provider, {
		value: CONTEXT_VALUE,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(TooltipAnchor, {
			onClick: hideOnClick ? tooltipStore.hide : void 0,
			store: tooltipStore,
			render: isOnlyChild ? addDescribedById(children) : void 0,
			ref,
			children: isOnlyChild ? void 0 : children
		}), isOnlyChild && (text || shortcut) && /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(Tooltip, {
			...restProps,
			className: clsx("components-tooltip", className),
			unmountOnHide: true,
			gutter: 4,
			id: describedById,
			overflowPadding: .5,
			store: tooltipStore,
			children: [text, shortcut && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(shortcut_default, {
				className: text ? "components-tooltip__shortcut" : "",
				shortcut
			})]
		})]
	});
}
var import_jsx_runtime$1, CONTEXT_VALUE, Tooltip2, tooltip_default;
function init_tooltip() {
	return (init_tooltip = __esmMin((() => {
		init_tooltip_store(), init_dist(), init_role(), init_tooltip_anchor(), init_tooltip$1();
		init_clsx();
		init_use_instance_id();
		init_react();
		init_build_module();
		init_shortcut();
		init_utils();
		init_context();
		import_jsx_runtime$1 = require_jsx_runtime();
		CONTEXT_VALUE = { isNestedInTooltip: true };
		Tooltip2 = (0, import_react.forwardRef)(UnforwardedTooltip);
		tooltip_default = Tooltip2;
	})))();
}
//#endregion
//#region ../packages/components/build-module/visually-hidden/styles.mjs
var visuallyHidden;
function init_styles() {
	return (init_styles = __esmMin((() => {
		visuallyHidden = {
			border: 0,
			clip: "rect(1px, 1px, 1px, 1px)",
			WebkitClipPath: "inset( 50% )",
			clipPath: "inset( 50% )",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			wordWrap: "normal",
			wordBreak: "normal"
		};
	})))();
}
//#endregion
//#region ../packages/components/build-module/visually-hidden/component.mjs
function UnconnectedVisuallyHidden(props, forwardedRef) {
	const { style: styleProp, ...contextProps } = useContextSystem(props, "VisuallyHidden");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$1, {
		ref: forwardedRef,
		...contextProps,
		"data-visually-hidden": "",
		style: {
			...visuallyHidden,
			...styleProp || {}
		}
	});
}
var import_jsx_runtime, VisuallyHidden, component_default;
function init_component() {
	return (init_component = __esmMin((() => {
		init_use_context_system(), init_context_connect();
		init_styles();
		init_component$1();
		import_jsx_runtime = require_jsx_runtime();
		VisuallyHidden = contextConnect(UnconnectedVisuallyHidden, "VisuallyHidden");
		component_default = VisuallyHidden;
	})))();
}
//#endregion
export { computePopoverPosition as a, placementToMotionAnimationProps as c, shortcut_default as d, tooltip_default as i, positionToPlacement as l, init_component as n, getReferenceElement as o, init_tooltip as r, init_utils as s, component_default as t, init_shortcut as u };
