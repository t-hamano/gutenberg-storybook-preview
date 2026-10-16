import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_implementation, t as __dangerousOptInToUnstableAPIsOnlyForCoreModules } from "./implementation-Cv8RPUVn.js";
import { a as TooltipPortal, c as init_TooltipTrigger, d as TooltipRoot, f as init_TooltipRoot, g as init_build_module, h as build_module_exports, i as init_TooltipPositioner, n as init_TooltipPopup, o as init_TooltipPortal, r as TooltipPositioner, s as TooltipTrigger, t as TooltipPopup } from "./TooltipPopup-BpRIm3A6.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { a as init_render_slot_with_children, i as init_wp_compat_overlay_slot, n as init_direction_provider, o as renderSlotWithChildren, r as getWpCompatOverlaySlot, t as DirectionProvider } from "./direction-provider-BqNMd272.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
//#region ../packages/ui/src/tooltip/portal.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_TooltipPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/portal.tsx";
		Portal = (0, import_react.forwardRef)(function TooltipPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(TooltipPortal, {
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
				"description": "Used to apply custom portal behavior to `Tooltip`'s floating content.\n`container` defaults to the `@wordpress/ui` compat overlay slot.",
				"displayName": "Portal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/portal.tsx",
				"methods": [],
				"props": {
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/portal/TooltipPortal.d.mts",
							"name": "TooltipPortalProps"
						}],
						"description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/portal/TooltipPortal.d.mts",
							"name": "TooltipPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"container": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/portal/TooltipPortal.d.mts",
							"name": "TooltipPortalProps"
						}],
						"description": "A parent element to render the portal element into.",
						"name": "container",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/portal/TooltipPortal.d.mts",
							"name": "TooltipPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLElement | ShadowRoot | RefObject<HTMLElement | ShadowRoot | null> | null" }
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
//#region ../packages/ui/src/tooltip/style.module.css
var positioner, popup, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		positioner = "_positioner_twc50_5";
		popup = "_popup_twc50_9";
		style_module_default = {
			positioner,
			popup
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/tooltip/positioner.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Positioner;
function init_positioner() {
	return (init_positioner = __esmMin((() => {
		init_clsx();
		init_TooltipPositioner();
		init_react();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/positioner.tsx";
		Positioner = (0, import_react.forwardRef)(function TooltipPositioner$1({ align = "center", className, side = "top", sideOffset = 4, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(TooltipPositioner, {
				ref,
				align,
				side,
				sideOffset,
				...props,
				className: clsx(resets_module_default["box-sizing"], style_module_default.positioner, className)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 17,
				columnNumber: 4
			}, this);
		});
		try {
			Positioner.__docgenInfo = {
				"description": "Used to apply custom positioning to `Tooltip`'s floating content.",
				"displayName": "Positioner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/positioner.tsx",
				"methods": [],
				"props": {
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
					"side": {
						"defaultValue": { "value": "top" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.d.mts",
							"name": "TooltipPositionerProps"
						}],
						"description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
						"name": "side",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.d.mts",
							"name": "TooltipPositionerProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "Side",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"bottom\"" },
								{ "value": "\"top\"" },
								{ "value": "\"inline-end\"" },
								{ "value": "\"inline-start\"" }
							]
						}
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
						"defaultValue": { "value": "4" },
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
					"arrowPadding": {
						"defaultValue": { "value": "5" },
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
//#region ../packages/ui/src/lock-unlock.ts
var lock, unlock;
function init_lock_unlock() {
	return (init_lock_unlock = __esmMin((() => {
		init_implementation();
		({lock, unlock} = __dangerousOptInToUnstableAPIsOnlyForCoreModules("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.", "@wordpress/ui"));
	})))();
}
//#endregion
//#region ../packages/ui/src/utils/theme-provider.ts
function getThemeProvider() {
	const themePackage = build_module_exports;
	if (themePackage.ThemeProvider) return themePackage.ThemeProvider;
	if (!themePackage.privateApis) throw new Error("@wordpress/ui: @wordpress/theme must expose `ThemeProvider` or `privateApis.ThemeProvider`.");
	return unlock(themePackage.privateApis).ThemeProvider;
}
var ThemeProvider;
function init_theme_provider() {
	return (init_theme_provider = __esmMin((() => {
		init_build_module();
		init_lock_unlock();
		ThemeProvider = getThemeProvider();
	})))();
}
//#endregion
//#region ../packages/ui/src/tooltip/popup.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, POPUP_COLOR, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_clsx();
		init_TooltipPopup();
		init_react();
		init_portal();
		init_positioner();
		init_render_slot_with_children();
		init_theme_provider();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/popup.tsx";
		POPUP_COLOR = { background: "#1e1e1e" };
		Popup = (0, import_react.forwardRef)(function TooltipPopup$1({ portal, positioner, children, className, ...props }, ref) {
			const popupContent = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(ThemeProvider, {
				color: POPUP_COLOR,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(TooltipPopup, {
					ref,
					className: clsx(style_module_default.popup, className),
					...props,
					children
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 28,
					columnNumber: 4
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 3
			}, this);
			const positionedPopup = renderSlotWithChildren(positioner, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Positioner, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 40,
				columnNumber: 3
			}, this), popupContent);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Portal, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 44,
				columnNumber: 41
			}, this), positionedPopup);
		});
		try {
			Popup.__docgenInfo = {
				"description": "",
				"displayName": "Popup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/popup.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tooltip/types.ts",
							"name": "PopupProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tooltip/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"portal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tooltip/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional portal element, typically `<Tooltip.Portal />` with custom\n`container`. When omitted, `Tooltip.Popup` uses `Tooltip.Portal` with\ndefault props. Do not pass `children` on the portal element; they would\nbe ignored.",
						"name": "portal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tooltip/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PortalProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"positioner": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tooltip/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional positioner element, typically `<Tooltip.Positioner />` with\ncustom positioning props (`side`, `align`, `sideOffset`, collision\nsettings, etc.). When omitted, `Tooltip.Popup` uses `Tooltip.Positioner`\nwith default props. Do not pass `children` on the positioner element;\nthey would be ignored.",
						"name": "positioner",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tooltip/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PositionerProps, \"children\">, string | JSXElementConstructor<any>>" }
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
//#region ../packages/ui/src/tooltip/trigger.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_TooltipTrigger();
		init_react();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/trigger.tsx";
		Trigger = (0, import_react.forwardRef)(function TooltipTrigger$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TooltipTrigger, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 7,
				columnNumber: 10
			}, this);
		});
		try {
			Trigger.__docgenInfo = {
				"description": "",
				"displayName": "Trigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/trigger.tsx",
				"methods": [],
				"props": {
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
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.d.mts",
							"name": "TooltipTriggerProps"
						}],
						"description": "If `true`, the tooltip will not open when interacting with this trigger.\nNote that this doesn't apply the `disabled` attribute to the trigger element.\nIf you want to disable the trigger element itself, you can pass the `disabled` prop to the trigger element via the `render` prop.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.d.mts",
							"name": "TooltipTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					"delay": {
						"defaultValue": { "value": "600" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.d.mts",
							"name": "TooltipTriggerProps"
						}],
						"description": "How long to wait before opening the tooltip on hover. Specified in milliseconds.",
						"name": "delay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.d.mts",
							"name": "TooltipTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"closeOnClick": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.d.mts",
							"name": "TooltipTriggerProps"
						}],
						"description": "Whether the tooltip should close when this trigger is clicked.",
						"name": "closeOnClick",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.d.mts",
							"name": "TooltipTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"closeDelay": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.d.mts",
							"name": "TooltipTriggerProps"
						}],
						"description": "How long to wait before closing the tooltip. Specified in milliseconds.",
						"name": "closeDelay",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.d.mts",
							"name": "TooltipTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/tooltip/types.ts",
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
//#region ../packages/ui/src/tooltip/root.tsx
/**
* `Tooltip` is used to visually show the label of an icon button, or other such
* interactive controls that don't have a visual text label.
*
* Tooltip popups are visual-only and not exposed to assistive technologies.
* The trigger's accessible name (e.g. `aria-label`) is the source of truth
* for screen reader users. Tooltips are not available on touch devices,
* and thus should not be used for infotips, descriptions, or dynamic status
* messages.
*
* @see {@link https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-tooltip-usage-guidelines--docs Usage Guidelines}
* @see {@link https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-iconbutton--docs IconButton}
*/
function Root(props) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DirectionProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipRoot, { ...props }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 4
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName;
function init_root() {
	return (init_root = __esmMin((() => {
		init_TooltipRoot();
		init_direction_provider();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/root.tsx";
		try {
			Root.__docgenInfo = {
				"description": "`Tooltip` is used to visually show the label of an icon button, or other such\ninteractive controls that don't have a visual text label.\n\nTooltip popups are visual-only and not exposed to assistive technologies.\nThe trigger's accessible name (e.g. `aria-label`) is the source of truth\nfor screen reader users. Tooltips are not available on touch devices,\nand thus should not be used for infotips, descriptions, or dynamic status\nmessages.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/tooltip/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/root/TooltipRoot.d.mts",
							"name": "TooltipRootProps"
						}],
						"description": "The content of the tooltip.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/root/TooltipRoot.d.mts",
							"name": "TooltipRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode | PayloadChildRenderFunction<unknown>" }
					},
					"disabled": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/root/TooltipRoot.d.mts",
							"name": "TooltipRootProps"
						}],
						"description": "Whether the tooltip is disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/tooltip/root/TooltipRoot.d.mts",
							"name": "TooltipRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": { "see": "{@link https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-tooltip-usage-guidelines--docs Usage Guidelines}\n{@link https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-iconbutton--docs IconButton}" }
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { Popup as a, init_positioner as c, init_trigger as i, Portal as l, init_root as n, init_popup as o, Trigger as r, Positioner as s, Root as t, init_portal as u };
