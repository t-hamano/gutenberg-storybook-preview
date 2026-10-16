import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_dist, s as useStoreState } from "./CDh2UhnG-eN0icMPG.js";
import { f as Role, p as init_role } from "./popover-store-BWOmbx-S.js";
import { b as init_tooltip$1, g as init_tooltip_anchor, h as TooltipAnchor, l as init_tooltip_store, n as init_cubic_bezier, t as cubicBezier, u as useTooltipStore, y as Tooltip$1 } from "./cubic-bezier-3qLFQs3s.js";
import { n as init_shortcut, t as Shortcut } from "./shortcut-D6ctWgOA.js";
//#region ../packages/components/src/popover/utils.ts
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
//#region ../packages/components/src/tooltip/context.ts
var TooltipInternalContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		TooltipInternalContext = (0, import_react.createContext)({ isNestedInTooltip: false });
		TooltipInternalContext.displayName = "TooltipInternalContext";
	})))();
}
//#endregion
//#region ../packages/components/src/tooltip/index.tsx
function UnforwardedTooltip(props, ref) {
	const { children, className, delay = 700, hideOnClick = true, placement, position, shortcut, text, ...restProps } = props;
	const { isNestedInTooltip } = (0, import_react.useContext)(TooltipInternalContext);
	const baseId = use_instance_id_default(Tooltip, "tooltip");
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
	if (isNestedInTooltip) return isOnlyChild ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Role, {
		...restProps,
		render: children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 4
	}, this) : children;
	function addDescribedById(el) {
		const element = el;
		return describedById && mounted && element.props["aria-describedby"] === void 0 && element.props["aria-label"] !== text ? (0, import_react.cloneElement)(element, { "aria-describedby": describedById }) : element;
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipInternalContext.Provider, {
		value: CONTEXT_VALUE,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipAnchor, {
			onClick: hideOnClick ? tooltipStore.hide : void 0,
			store: tooltipStore,
			render: isOnlyChild ? addDescribedById(children) : void 0,
			ref,
			children: isOnlyChild ? void 0 : children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 113,
			columnNumber: 4
		}, this), isOnlyChild && (text || shortcut) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip$1, {
			...restProps,
			className: clsx("components-tooltip", className),
			unmountOnHide: true,
			gutter: 4,
			id: describedById,
			overflowPadding: .5,
			store: tooltipStore,
			children: [text, shortcut && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shortcut, {
				className: text ? "components-tooltip__shortcut" : "",
				shortcut
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 124,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 112,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, CONTEXT_VALUE, Tooltip;
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
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tooltip/index.tsx";
		CONTEXT_VALUE = { isNestedInTooltip: true };
		Tooltip = (0, import_react.forwardRef)(UnforwardedTooltip);
		try {
			700 .__docgenInfo = {
				"description": "Time over anchor to wait before showing tooltip",
				"displayName": "TOOLTIP_DELAY",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tooltip/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Tooltip.__docgenInfo = {
				"description": "",
				"displayName": "Tooltip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tooltip/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tooltip/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The anchor for the tooltip.\n\n**Note**: Accepts only one child element.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "ReactElement<unknown, string | JSXElementConstructor<any>>" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tooltip/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Custom class name for the tooltip.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"hideOnClick": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tooltip/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Option to hide the tooltip when the anchor is clicked.",
						"name": "hideOnClick",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"delay": {
						"defaultValue": { "value": "700" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tooltip/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The amount of time in milliseconds to wait before showing the tooltip.",
						"name": "delay",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"placement": {
						"defaultValue": { "value": "top" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tooltip/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Where the tooltip should be positioned relative to its parent.",
						"name": "placement",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Placement",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"left-end\"" },
								{ "value": "\"left-start\"" },
								{ "value": "\"right-end\"" },
								{ "value": "\"right-start\"" },
								{ "value": "\"bottom-end\"" },
								{ "value": "\"bottom-start\"" },
								{ "value": "\"top-end\"" },
								{ "value": "\"top-start\"" }
							]
						}
					},
					"position": {
						"defaultValue": { "value": "top" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tooltip/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "_Note: this prop is deprecated. Please use the `placement` prop instead._\n\nLegacy way of specifying the tooltip's position relative to its parent.\n\nSpecify y- and x-axis as a space-separated string. Supports `\"top\"`,\n`\"bottom\"` y axis, and `\"left\"`, `\"center\"`, `\"right\"` x axis.\n@deprecated",
						"name": "position",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"top left\" | \"top right\" | \"middle left\" | \"middle right\" | \"bottom left\" | \"bottom right\" | PositionYAxis | \"middle center\" | \"bottom center\" | \"top center\" | ... 36 more ...",
							"value": [
								{ "value": "\"middle\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"top left\"" },
								{ "value": "\"top right\"" },
								{ "value": "\"middle left\"" },
								{ "value": "\"middle right\"" },
								{ "value": "\"bottom left\"" },
								{ "value": "\"bottom right\"" },
								{ "value": "\"middle center\"" },
								{ "value": "\"bottom center\"" },
								{ "value": "\"top center\"" },
								{ "value": "\"middle center left\"" },
								{ "value": "\"middle center right\"" },
								{ "value": "\"middle center bottom\"" },
								{ "value": "\"middle center top\"" },
								{ "value": "\"middle left left\"" },
								{ "value": "\"middle left right\"" },
								{ "value": "\"middle left bottom\"" },
								{ "value": "\"middle left top\"" },
								{ "value": "\"middle right left\"" },
								{ "value": "\"middle right right\"" },
								{ "value": "\"middle right bottom\"" },
								{ "value": "\"middle right top\"" },
								{ "value": "\"bottom center left\"" },
								{ "value": "\"bottom center right\"" },
								{ "value": "\"bottom center bottom\"" },
								{ "value": "\"bottom center top\"" },
								{ "value": "\"bottom left left\"" },
								{ "value": "\"bottom left right\"" },
								{ "value": "\"bottom left bottom\"" },
								{ "value": "\"bottom left top\"" },
								{ "value": "\"bottom right left\"" },
								{ "value": "\"bottom right right\"" },
								{ "value": "\"bottom right bottom\"" },
								{ "value": "\"bottom right top\"" },
								{ "value": "\"top center left\"" },
								{ "value": "\"top center right\"" },
								{ "value": "\"top center bottom\"" },
								{ "value": "\"top center top\"" },
								{ "value": "\"top left left\"" },
								{ "value": "\"top left right\"" },
								{ "value": "\"top left bottom\"" },
								{ "value": "\"top left top\"" },
								{ "value": "\"top right left\"" },
								{ "value": "\"top right right\"" },
								{ "value": "\"top right bottom\"" },
								{ "value": "\"top right top\"" }
							]
						}
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tooltip/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An option for adding accessible keyboard shortcuts.\n\nIf shortcut is a string, it is expecting the display text. If shortcut is an\nobject, it will accept the properties of `display` (string) and `ariaLabel`\n(string).",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "string | { display: string; ariaLabel: string; }" }
					},
					"text": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/tooltip/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The text shown in the tooltip when anchor element is focused or hovered.",
						"name": "text",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_utils as a, getReferenceElement as i, init_tooltip as n, placementToMotionAnimationProps as o, computePopoverPosition as r, positionToPlacement as s, Tooltip as t };
