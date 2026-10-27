import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { c as init_PopoverPositioner, d as PopoverPortal, f as init_PopoverPortal, g as init_PopoverRoot, h as PopoverRoot, i as init_PopoverPopup, m as init_PopoverTrigger, n as init_PopoverBackdrop, p as PopoverTrigger, r as PopoverPopup, s as PopoverPositioner, t as PopoverBackdrop } from "./PopoverBackdrop-Cqf1Dh-L.js";
import { n as init_PopoverArrow, t as PopoverArrow } from "./PopoverArrow-Dnc2fvzb.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { a as getWpCompatOverlaySlot, i as renderSlotWithChildren, n as init_direction_provider, o as init_wp_compat_overlay_slot, r as init_render_slot_with_children, t as DirectionProvider } from "./direction-provider-TSr5Tw-F.js";
import { n as useIframeDismissalBridge, t as init_use_iframe_dismissal_bridge } from "./use-iframe-dismissal-bridge-DhsD9KpS.js";
import { n as useDeprioritizedInitialFocus, t as init_use_deprioritized_initial_focus } from "./use-deprioritized-initial-focus-DYkROCuC.js";
import { n as init_create_overlay_title_validation, t as createOverlayTitleValidation } from "./create-overlay-title-validation-DsjUcEEp.js";
//#region ../packages/ui/src/popover/style.module.css
var positioner, popup, surface, backdrop, arrow, title, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		positioner = "_positioner_15gn3_5";
		popup = "_popup_15gn3_21 _dropdown-motion_1u8vo_11";
		surface = "_surface_15gn3_12";
		backdrop = "_backdrop_15gn3_62";
		arrow = "_arrow_15gn3_82";
		title = "_title_15gn3_114";
		style_module_default = {
			positioner,
			popup,
			surface,
			backdrop,
			arrow,
			"arrow-fill": "_arrow-fill_15gn3_106",
			"arrow-stroke": "_arrow-stroke_15gn3_110",
			title
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/popover/arrow.tsx
function DefaultArrowSvg(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("svg", {
		width: "20",
		height: "10",
		viewBox: "0 0 20 10",
		fill: "none",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("path", {
			d: "M20 10H0V8h1.465a4 4 0 0 0 2.676-1.027l5.19-4.388c.378-.341.96-.341 1.338 0l5.19 4.388A4 4 0 0 0 18.535 8H20z",
			className: style_module_default["arrow-fill"]
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 16,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)("path", {
			d: "M10 3.097 4.81 7.486A5 5 0 0 1 1.465 8.77H0V8h1.465a4 4 0 0 0 2.676-1.027l5.19-4.388c.378-.341.96-.341 1.338 0l5.19 4.388A4 4 0 0 0 18.535 8H20v.77h-1.465a5 5 0 0 1-3.345-1.284z",
			className: style_module_default["arrow-stroke"]
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 20,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 9,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$5, _jsxFileName$5, Arrow;
function init_arrow() {
	return (init_arrow = __esmMin((() => {
		init_PopoverArrow();
		init_clsx();
		init_react();
		init_style_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/arrow.tsx";
		Arrow = (0, import_react.forwardRef)(function PopoverArrow$1({ children, className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(PopoverArrow, {
				ref,
				className: clsx(style_module_default.arrow, className),
				...props,
				children: children ?? /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(DefaultArrowSvg, {}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 44,
					columnNumber: 18
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 39,
				columnNumber: 3
			}, this);
		});
		try {
			Arrow.__docgenInfo = {
				"description": "Renders an optional arrow element that points toward the anchor.\n\nMust be placed inside `Popover.Popup`. The arrow automatically rotates\nto match the current placement side.",
				"displayName": "Arrow",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/arrow.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "ArrowProps"
						}],
						"description": "Custom arrow visuals to render inside the positioned container.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "ArrowProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/popover/context.tsx
var popoverTitleValidation, usePopoverValidationContext, PopoverValidationProvider;
function init_context() {
	return (init_context = __esmMin((() => {
		init_create_overlay_title_validation();
		popoverTitleValidation = createOverlayTitleValidation("Popover");
		usePopoverValidationContext = popoverTitleValidation.useValidationContext;
		PopoverValidationProvider = popoverTitleValidation.ValidationProvider;
		try {
			usePopoverValidationContext.__docgenInfo = {
				"description": "Hook to access the popover validation context.\nReturns null in production or if not within a Popover.Popup.",
				"displayName": "usePopoverValidationContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PopoverValidationProvider.__docgenInfo = {
				"description": "Provider component that validates Popover.Title presence in development mode.\nIn production, this component is a no-op and just renders children.",
				"displayName": "PopoverValidationProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/popover/portal.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_PopoverPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/portal.tsx";
		Portal = (0, import_react.forwardRef)(function PopoverPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(PopoverPortal, {
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps,
				ref
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 13,
				columnNumber: 4
			}, this);
		});
		try {
			Portal.__docgenInfo = {
				"description": "Used to apply custom portal behavior to `Popover`'s floating content.\n`container` defaults to the `@wordpress/ui` compat overlay slot.",
				"displayName": "Portal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/portal.tsx",
				"methods": [],
				"props": {
					"container": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/portal/PopoverPortal.d.mts",
							"name": "PopoverPortalProps"
						}],
						"description": "A parent element to render the portal element into.",
						"name": "container",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/portal/PopoverPortal.d.mts",
							"name": "PopoverPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLElement | ShadowRoot | RefObject<HTMLElement | ShadowRoot | null> | null" }
					},
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/portal/PopoverPortal.d.mts",
							"name": "PopoverPortalProps"
						}],
						"description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/portal/PopoverPortal.d.mts",
							"name": "PopoverPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/popover/positioner.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_PopoverPositioner();
		init_react();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/positioner.tsx";
		Positioner = (0, import_react.forwardRef)(function PopoverPositioner$1({ align = "center", arrowPadding = 8, className, side = "bottom", sideOffset = 8, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(PopoverPositioner, {
				ref,
				align,
				arrowPadding,
				side,
				sideOffset,
				...props,
				className: clsx(resets_module_default["box-sizing"], style_module_default.positioner, className)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 25,
				columnNumber: 4
			}, this);
		});
		try {
			Positioner.__docgenInfo = {
				"description": "Used to apply custom positioning to `Popover`'s floating content.",
				"displayName": "Positioner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/positioner.tsx",
				"methods": [],
				"props": {
					"anchor": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "An element to position the popup against.\nBy default, the popup will be positioned against the trigger.",
						"name": "anchor",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Element | RefObject<Element | null> | VirtualElement | (() => Element | VirtualElement | null) | null" }
					},
					"align": {
						"defaultValue": { "value": "center" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "How to align the popup relative to the specified side.",
						"name": "align",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Align",
							"value": [
								{ "value": "\"center\"" },
								{ "value": "\"end\"" },
								{ "value": "\"start\"" }
							]
						}
					},
					"side": {
						"defaultValue": { "value": "bottom" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
						"name": "side",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Side",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"top\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"inline-end\"" },
								{ "value": "\"inline-start\"" }
							]
						}
					},
					"sticky": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Whether to maintain the popup in the viewport after\nthe anchor element was scrolled out of view.",
						"name": "sticky",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"arrowPadding": {
						"defaultValue": { "value": "8" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Minimum distance to maintain between the arrow and the edges of the popup.\n\nUse it to prevent the arrow element from hanging out of the rounded corners of a popup.",
						"name": "arrowPadding",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"positionMethod": {
						"defaultValue": { "value": "'absolute'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Determines which CSS `position` property to use.",
						"name": "positionMethod",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"fixed\" | \"absolute\"",
							"value": [{ "value": "\"fixed\"" }, { "value": "\"absolute\"" }]
						}
					},
					"sideOffset": {
						"defaultValue": { "value": "8" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.\n@example ```jsx\n<Positioner\n  sideOffset={({ side, align, anchor, positioner }) => {\n    return side === 'top' || side === 'bottom'\n      ? anchor.height\n      : anchor.width;\n  }}\n/>\n```",
						"name": "sideOffset",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number | OffsetFunction" }
					},
					"alignOffset": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.\n@example ```jsx\n<Positioner\n  alignOffset={({ side, align, anchor, positioner }) => {\n    return side === 'top' || side === 'bottom'\n      ? anchor.width\n      : anchor.height;\n  }}\n/>\n```",
						"name": "alignOffset",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number | OffsetFunction" }
					},
					"collisionBoundary": {
						"defaultValue": { "value": "'clipping-ancestors'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "An element or a rectangle that delimits the area that the popup is confined to.",
						"name": "collisionBoundary",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Boundary" }
					},
					"collisionPadding": {
						"defaultValue": { "value": "5" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Additional space to maintain from the edge of the collision boundary.",
						"name": "collisionPadding",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Padding" }
					},
					"disableAnchorTracking": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Whether to disable the popup from tracking any layout shift of its positioning anchor.",
						"name": "disableAnchorTracking",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"collisionAvoidance": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						}],
						"description": "Determines how to handle collisions when positioning the popup.\n\n`side` controls overflow on the preferred placement axis (`top`/`bottom` or `left`/`right`):\n- `'flip'`: keep the requested side when it fits; otherwise try the opposite side\n  (`top` and `bottom`, or `left` and `right`).\n- `'shift'`: never change side; keep the requested side and move the popup within\n  the clipping boundary so it stays visible.\n- `'none'`: do not correct side-axis overflow.\n\n`align` controls overflow on the alignment axis (`start`/`center`/`end`):\n- `'flip'`: keep side, but swap `start` and `end` when the requested alignment overflows.\n- `'shift'`: keep side and requested alignment, then nudge the popup along the\n  alignment axis to fit.\n- `'none'`: do not correct alignment-axis overflow.\n\n`fallbackAxisSide` controls fallback behavior on the perpendicular axis when the\npreferred axis cannot fit:\n- `'start'`: allow perpendicular fallback and try the logical start side first\n  (`top` before `bottom`, or `left` before `right` in LTR).\n- `'end'`: allow perpendicular fallback and try the logical end side first\n  (`bottom` before `top`, or `right` before `left` in LTR).\n- `'none'`: do not fallback to the perpendicular axis.\n\nWhen `side` is `'shift'`, explicitly setting `align` only supports `'shift'` or `'none'`.\nIf `align` is omitted, it defaults to `'flip'`.\n@example ```jsx\n<Positioner\n  collisionAvoidance={{\n    side: 'shift',\n    align: 'shift',\n    fallbackAxisSide: 'none',\n  }}\n/>\n```",
						"name": "collisionAvoidance",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useAnchorPositioning.d.mts",
							"name": "UseAnchorPositioningSharedParameters"
						},
						"required": false,
						"tags": {},
						"type": { "name": "CollisionAvoidance" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/popover/popup.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, CLOSE_ATTR, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_PopoverBackdrop(), init_PopoverPopup();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_use_deprioritized_initial_focus();
		init_render_slot_with_children();
		init_context();
		init_portal();
		init_positioner();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/popup.tsx";
		CLOSE_ATTR = "data-wp-ui-popover-close";
		Popup = (0, import_react.forwardRef)(function PopoverPopup$1({ backdrop = false, children, className, portal, positioner, finalFocus, initialFocus, variant = "default", ...props }, ref) {
			const { resolvedInitialFocus, popupRef } = useDeprioritizedInitialFocus({
				initialFocus,
				deprioritizedAttributes: [CLOSE_ATTR]
			});
			const mergedPopupRef = useMergeRefs([ref, popupRef]);
			const useDefaultSurface = variant !== "unstyled";
			const validatedChildren = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(PopoverValidationProvider, { children }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 46,
				columnNumber: 3
			}, this);
			const popupChildren = useDefaultSurface ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
				className: style_module_default.surface,
				children: validatedChildren
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 53,
				columnNumber: 3
			}, this) : validatedChildren;
			const backdropElement = backdrop ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(PopoverBackdrop, { className: style_module_default.backdrop }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 59,
				columnNumber: 3
			}, this) : null;
			const popupContent = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(PopoverPopup, {
				ref: mergedPopupRef,
				initialFocus: resolvedInitialFocus,
				finalFocus,
				className: clsx(useDefaultSurface && style_module_default.popup, className),
				...props,
				children: popupChildren
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 63,
				columnNumber: 3
			}, this);
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Positioner, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 76,
				columnNumber: 3
			}, this), popupContent);
			const portalChildren = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(import_jsx_dev_runtime$2.Fragment, { children: [backdropElement, positionedPopup] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 81,
				columnNumber: 3
			}, this);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Portal, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 87,
				columnNumber: 41
			}, this), portalChildren);
		});
		try {
			Popup.__docgenInfo = {
				"description": "Renders the floating popup container for the popover content.\n\nHandles portal rendering, positioning relative to the anchor, collision\navoidance, focus management, and optional backdrop. Use\n`portal={ <Popover.Portal container={ ... } /> }` for cross-document\nscenarios such as iframes, and `positioner={ <Popover.Positioner … /> }`\nto customize placement.",
				"displayName": "Popup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/popup.tsx",
				"methods": [],
				"props": {
					"backdrop": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						}],
						"description": "Whether to render a backdrop overlay behind the popover.\n\nTypically used with `modal` to signal that interaction with the rest\nof the page is blocked. The backdrop is a semi-transparent dark overlay.",
						"name": "backdrop",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"portal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional portal element, typically `<Popover.Portal />` with custom\n`container` for cross-document rendering. Floating content is rendered\nas this portal's children (do not pass `children` on the portal element;\nthey would be ignored).\n\nWhen omitted, `Popover.Popup` uses `Popover.Portal` with default props.",
						"name": "portal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PortalProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"positioner": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional positioner element, typically `<Popover.Positioner />` with\ncustom positioning props (`side`, `align`, `sideOffset`, collision\nsettings, anchor, etc.). When omitted, `Popover.Popup` uses\n`Popover.Positioner` with default props. Do not pass `children` on\nthe positioner element; they would be ignored.",
						"name": "positioner",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PositionerProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"variant": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						}],
						"description": "The visual style variant of the popup.\n\n- `'default'` — standard surface styling with background, padding,\n   border radius, and shadow.\n- `'unstyled'` — no visual treatment; useful as a blank positioning\n   container for fully custom content.",
						"name": "variant",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"unstyled\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"unstyled\"" }]
						}
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"initialFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/popup/PopoverPopup.d.mts",
							"name": "PopoverPopupProps"
						}],
						"description": "Determines the element to focus when the popover is opened.\nBy default, focus moves to the first tabbable element inside the popup, except when the popover\nis opened by touch — then the popup itself is focused to avoid opening the virtual keyboard.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing.",
						"name": "initialFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/popup/PopoverPopup.d.mts",
							"name": "PopoverPopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | void | HTMLElement | null)" }
					},
					"finalFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/popup/PopoverPopup.d.mts",
							"name": "PopoverPopupProps"
						}],
						"description": "Determines the element to focus when the popover is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing.",
						"name": "finalFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/popup/PopoverPopup.d.mts",
							"name": "PopoverPopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | void | HTMLElement | null)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/popover/root.tsx
/**
* An accessible popup anchored to a trigger element.
*
* Popover renders ARIA-compliant floating content that appears next to its
* trigger. It can contain interactive content such as form controls, menus,
* and rich descriptions.
*
* Compose the compound components to build a popover:
*
* - `Popover.Root` — provides open state and context to all sub-components.
* - `Popover.Trigger` — the button that toggles the popup.
* - `Popover.Popup` — the floating container. Portals by default or via
*   `portal={ <Popover.Portal /> }`, and is positioned by default or via
*   `positioner={ <Popover.Positioner /> }`.
* - `Popover.Positioner` — controls placement, alignment, offset, collision
*   behavior, and anchor for the floating content.
* - `Popover.Arrow` — an optional arrow pointing toward the anchor.
* - `Popover.Title` — **required** heading that labels the popover for
*   accessibility (can be visually hidden).
* - `Popover.Description` — optional paragraph linked via `aria-describedby`.
* - `Popover.Close` — a button that closes the popover when clicked.
*   **Required** when `modal` is `true` or `'trap-focus'` so that focus
*   can cycle correctly and the user can dismiss the popover.
*
* ```jsx
* <Popover.Root>
*   <Popover.Trigger>Open</Popover.Trigger>
*   <Popover.Popup>
*     <Popover.Arrow />
*     <Popover.Title>Popover title</Popover.Title>
*     <Popover.Description>Popover description</Popover.Description>
*     <Popover.Close>Close</Popover.Close>
*   </Popover.Popup>
* </Popover.Root>
* ```
*/
function Root(props) {
	const iframeDismissalProps = useIframeDismissalBridge({
		defaultOpen: props.defaultOpen,
		modal: props.modal ?? false,
		onOpenChange: (nextOpen, eventDetails) => props.onOpenChange?.(nextOpen, eventDetails),
		open: props.open
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PopoverRoot, {
		...props,
		...iframeDismissalProps
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 56,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 55,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_root() {
	return (init_root = __esmMin((() => {
		init_PopoverRoot();
		init_direction_provider();
		init_use_iframe_dismissal_bridge();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/root.tsx";
		try {
			Root.__docgenInfo = {
				"description": "An accessible popup anchored to a trigger element.\n\nPopover renders ARIA-compliant floating content that appears next to its\ntrigger. It can contain interactive content such as form controls, menus,\nand rich descriptions.\n\nCompose the compound components to build a popover:\n\n- `Popover.Root` — provides open state and context to all sub-components.\n- `Popover.Trigger` — the button that toggles the popup.\n- `Popover.Popup` — the floating container. Portals by default or via\n  `portal={ <Popover.Portal /> }`, and is positioned by default or via\n  `positioner={ <Popover.Positioner /> }`.\n- `Popover.Positioner` — controls placement, alignment, offset, collision\n  behavior, and anchor for the floating content.\n- `Popover.Arrow` — an optional arrow pointing toward the anchor.\n- `Popover.Title` — **required** heading that labels the popover for\n  accessibility (can be visually hidden).\n- `Popover.Description` — optional paragraph linked via `aria-describedby`.\n- `Popover.Close` — a button that closes the popover when clicked.\n  **Required** when `modal` is `true` or `'trap-focus'` so that focus\n  can cycle correctly and the user can dismiss the popover.\n\n```jsx\n<Popover.Root>\n  <Popover.Trigger>Open</Popover.Trigger>\n  <Popover.Popup>\n    <Popover.Arrow />\n    <Popover.Title>Popover title</Popover.Title>\n    <Popover.Description>Popover description</Popover.Description>\n    <Popover.Close>Close</Popover.Close>\n  </Popover.Popup>\n</Popover.Root>\n```",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "RootProps"
						}],
						"description": "The popover sub-components (`Popover.Trigger`, `Popover.Popup`, etc.).",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/root/PopoverRoot.d.mts",
							"name": "PopoverRootProps"
						}],
						"description": "Whether the popover is initially open.\n\nTo render a controlled popover, use the `open` prop instead.",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/root/PopoverRoot.d.mts",
							"name": "PopoverRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/root/PopoverRoot.d.mts",
							"name": "PopoverRootProps"
						}],
						"description": "Event handler called when the popover is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/root/PopoverRoot.d.mts",
							"name": "PopoverRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: PopoverRootChangeEventDetails) => void)" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/root/PopoverRoot.d.mts",
							"name": "PopoverRootProps"
						}],
						"description": "Whether the popover is currently open.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/root/PopoverRoot.d.mts",
							"name": "PopoverRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"modal": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/root/PopoverRoot.d.mts",
							"name": "PopoverRootProps"
						}],
						"description": "Determines if the popover enters a modal state when open.\n- `true`: user interaction is limited to the popover: document page scroll is locked, and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n- `'trap-focus'`: focus is trapped inside the popover, but document page scroll is not locked and pointer interactions outside of it remain enabled.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.\n\nWhen `modal` is `true`, focus trapping is enabled only if `<Popover.Close>` is rendered\ninside `<Popover.Popup>`. It can be visually hidden with your own CSS if needed, such as\nTailwind's `sr-only` utility.\n\nWhen `modal` is `'trap-focus'`, render `<Popover.Close>` inside `<Popover.Popup>` so touch\nscreen readers can escape the popup.",
						"name": "modal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/root/PopoverRoot.d.mts",
							"name": "PopoverRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | \"trap-focus\"" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/popover/trigger.tsx
var import_jsx_dev_runtime, _jsxFileName, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_PopoverTrigger();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/trigger.tsx";
		Trigger = (0, import_react.forwardRef)(function PopoverTrigger$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverTrigger, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 10
			}, this);
		});
		try {
			Trigger.__docgenInfo = {
				"description": "Renders a button that toggles the popover popup when clicked.\n\nRenders as a `<button>` by default. Also supports hover-triggered\npopovers via the `openOnHover`, `delay`, and `closeDelay` props.",
				"displayName": "Trigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/trigger.tsx",
				"methods": [],
				"props": {
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"nativeButton": {
						"defaultValue": { "value": "true\ntrue" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}, {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/trigger/PopoverTrigger.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).\nWhether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (e.g. `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"delay": {
						"defaultValue": { "value": "300" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/trigger/PopoverTrigger.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "How long to wait before the popover may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
						"name": "delay",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"closeDelay": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/trigger/PopoverTrigger.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "How long to wait before closing the popover that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
						"name": "closeDelay",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"openOnHover": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/popover/trigger/PopoverTrigger.d.mts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the popover should also open when the trigger is hovered.",
						"name": "openOnHover",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { Popup as a, init_positioner as c, init_context as d, usePopoverValidationContext as f, style_module_default as g, init_style_module as h, init_root as i, Portal as l, init_arrow as m, init_trigger as n, init_popup as o, Arrow as p, Root as r, Positioner as s, Trigger as t, init_portal as u };
