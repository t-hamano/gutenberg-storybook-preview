import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_DialogPortal, n as init_DialogTitle, r as DialogPortal, t as DialogTitle } from "./DialogTitle-DG_nbyNT.js";
import { i as init_DialogBackdrop, n as init_DialogPopup, r as DialogBackdrop, t as DialogPopup } from "./DialogPopup-B6gXA6Az.js";
import { n as init_DialogRoot, t as DialogRoot } from "./DialogRoot-C-g326T6.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { a as getWpCompatOverlaySlot, i as renderSlotWithChildren, o as init_wp_compat_overlay_slot, r as init_render_slot_with_children } from "./direction-provider-TSr5Tw-F.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as style_module_default, t as init_style_module } from "./style.module-BbD3jybr.js";
import { n as useDeprioritizedInitialFocus, t as init_use_deprioritized_initial_focus } from "./use-deprioritized-initial-focus-DYkROCuC.js";
import { n as init_use_overlay_scroll_state_attributes, r as useOverlayScrollStateAttributes, t as SCROLL_CONTAINER_ATTR } from "./use-overlay-scroll-state-attributes-6vtImYmF.js";
import { n as init_create_overlay_modal_context, t as createOverlayModalContext } from "./create-overlay-modal-context-BDOwiyS4.js";
import { n as init_create_overlay_title_validation, t as createOverlayTitleValidation } from "./create-overlay-title-validation-DsjUcEEp.js";
//#region ../packages/ui/src/dialog/content.tsx
var Content;
function init_content() {
	return (init_content = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_use_overlay_scroll_state_attributes();
		init_focus_module();
		init_style_module();
		Content = (0, import_react.forwardRef)(function DialogContent({ className, render, onScroll, ...props }, ref) {
			const { ref: scrollStateRef, onScroll: scrollStateOnScroll } = useOverlayScrollStateAttributes(onScroll);
			const mergedRef = useMergeRefs([ref, scrollStateRef]);
			return useRender({
				defaultTagName: "div",
				render,
				ref: mergedRef,
				props: mergeProps(props, {
					className: clsx(style_module_default.content, focus_module_default["outset-ring--focus-visible"], className),
					onScroll: scrollStateOnScroll
				})
			});
		});
		try {
			Content.__docgenInfo = {
				"description": "Renders the scrollable body of the dialog, sitting between `Dialog.Header`\nand `Dialog.Footer` as a flex sibling.\n\n**Required for scrolling** — `Dialog.Content` is the element that owns\nthe popup's overflow. Without it, body content that exceeds the popup's\nmax height clips instead of scrolling. Render it once per popup and wrap\nany freeform body content in it.\n\nPlacing `Dialog.Header` or `Dialog.Footer` *inside* `Dialog.Content`\nmakes them scroll with the body (the \"non-sticky\" opt-out) rather than\nstaying pinned to the popup's edges.",
				"displayName": "Content",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/content.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "ContentProps"
						}],
						"description": "The body content to be rendered inside the scroll container.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "ContentProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"tabIndex": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "ContentProps"
						}],
						"description": "The scroll region automatically becomes a keyboard-reachable tab\nstop (`tabindex=\"0\"`) whenever the body overflows, so keyboard\nusers can arrow-scroll the region (WCAG 2.1.1). It becomes\nnon-tabbable again as soon as the content no longer overflows.\n\nIf you supply `tabIndex` explicitly, your value wins and is never\noverwritten — including `tabIndex={ -1 }` to opt out of the\nautomatic tab stop entirely, and including overrides applied\nafter the component had already managed the value.\n\nTwo narrow edge cases:\n- If you later *remove* an explicit `tabIndex` at runtime, the\n  component will resume managing it on the next overflow tick; it\n  can't distinguish a previous explicit opt-out from an\n  unconfigured state.\n- Passing `tabIndex={ 0 }` while the body overflows produces a\n  value identical to the auto-managed one, so the component can\n  no longer tell the two apart and may strip it on the next\n  non-overflow tick. Pick a different value (or rely on the\n  default behavior, which is already `0` while overflowing).\n\nNote: the scroll region is intentionally rendered without\n`role` / `aria-label`, so screen readers don't announce a\ngeneric \"scrollable\" landmark on top of the dialog's existing\nheading + body; the surrounding `Dialog.Title` and body content\nprovide the context.",
						"name": "tabIndex",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "ContentProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
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
//#region ../packages/ui/src/dialog/header.tsx
var Header;
function init_header() {
	return (init_header = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		init_style_module();
		Header = (0, import_react.forwardRef)(function DialogHeader({ className, render, ...props }, ref) {
			return useRender({
				defaultTagName: "header",
				render,
				ref,
				props: mergeProps(props, { className: clsx(style_module_default.header, className) })
			});
		});
		try {
			Header.__docgenInfo = {
				"description": "Renders the header section of the dialog, typically containing\nthe heading and close button.\n\nDefaults to a native `<header>` element for richer semantics (heading-level\nscanning, and banner landmark navigation where screen readers expose\nlandmarks nested in dialogs). Pass `render` to opt out of the default tag.\n\nThe header is pinned to the top of the popup by default. To let it scroll\nwith the body instead, render it *inside* `Dialog.Content`.",
				"displayName": "Header",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/header.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "HeaderProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "HeaderProps"
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
//#region ../packages/ui/src/dialog/context.tsx
var dialogModal, DialogModalProvider, useDialogModal, dialogTitleValidation, useDialogValidationContext, DialogValidationProvider;
function init_context() {
	return (init_context = __esmMin((() => {
		init_create_overlay_modal_context();
		init_create_overlay_title_validation();
		dialogModal = createOverlayModalContext(true);
		DialogModalProvider = dialogModal.Provider;
		useDialogModal = dialogModal.useModal;
		dialogTitleValidation = createOverlayTitleValidation("Dialog");
		useDialogValidationContext = dialogTitleValidation.useValidationContext;
		DialogValidationProvider = dialogTitleValidation.ValidationProvider;
		try {
			DialogModalProvider.__docgenInfo = {
				"description": "",
				"displayName": "DialogModalProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/context.tsx",
				"methods": [],
				"props": { "modal": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/create-overlay-modal-context.tsx",
						"name": "TypeLiteral"
					}],
					"description": "",
					"name": "modal",
					"required": true,
					"tags": {},
					"type": { "name": "boolean | \"trap-focus\" | undefined" }
				} },
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			useDialogValidationContext.__docgenInfo = {
				"description": "Hook to access the dialog validation context.\nReturns null in production or if not within a Dialog.Popup.",
				"displayName": "useDialogValidationContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			DialogValidationProvider.__docgenInfo = {
				"description": "Provider component that validates Dialog.Title presence in development mode.\nIn production, this component is a no-op and just renders children.",
				"displayName": "DialogValidationProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/dialog/portal.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_DialogPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/portal.tsx";
		Portal = (0, import_react.forwardRef)(function DialogPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DialogPortal, {
				ref,
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 14,
				columnNumber: 3
			}, this);
		});
		try {
			Portal.__docgenInfo = {
				"description": "Used to apply custom portal behavior to `Dialog`'s overlay content.",
				"displayName": "Portal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/portal.tsx",
				"methods": [],
				"props": {
					"container": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/portal/DialogPortal.d.mts",
							"name": "DialogPortalProps"
						}],
						"description": "A parent element to render the portal element into.",
						"name": "container",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/portal/DialogPortal.d.mts",
							"name": "DialogPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLElement | ShadowRoot | RefObject<HTMLElement | ShadowRoot | null> | null" }
					},
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/portal/DialogPortal.d.mts",
							"name": "DialogPortalProps"
						}],
						"description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/portal/DialogPortal.d.mts",
							"name": "DialogPortalProps"
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
//#region ../packages/ui/src/dialog/popup.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, CLOSE_ICON_ATTR, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_DialogBackdrop(), init_DialogPopup();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_use_deprioritized_initial_focus();
		init_use_overlay_scroll_state_attributes();
		init_render_slot_with_children();
		init_context();
		init_portal();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/popup.tsx";
		CLOSE_ICON_ATTR = "data-wp-ui-dialog-close-icon";
		Popup = (0, import_react.forwardRef)(function DialogPopup$1({ className, portal, children, size = "medium", initialFocus, finalFocus, ...props }, ref) {
			const { resolvedInitialFocus, popupRef } = useDeprioritizedInitialFocus({
				initialFocus,
				deprioritizedAttributes: [CLOSE_ICON_ATTR, SCROLL_CONTAINER_ATTR]
			});
			const mergedRef = useMergeRefs([ref, popupRef]);
			const modal = useDialogModal();
			const portalChildren = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(import_jsx_dev_runtime$2.Fragment, { children: [modal === true && /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DialogBackdrop, {
				className: style_module_default.backdrop,
				"data-testid": "dialog-backdrop"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 48,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DialogPopup, {
				ref: mergedRef,
				className: clsx(style_module_default.popup, className, style_module_default[`is-${size}`]),
				initialFocus: resolvedInitialFocus,
				finalFocus,
				...props,
				"data-wp-ui-overlay-modal": modal === true ? "" : void 0,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DialogValidationProvider, { children }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 65,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 53,
				columnNumber: 4
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 41,
				columnNumber: 3
			}, this);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Portal, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 72,
				columnNumber: 41
			}, this), portalChildren);
		});
		try {
			Popup.__docgenInfo = {
				"description": "Renders the dialog popup element that contains the dialog content.\nUses a portal to render outside the DOM hierarchy.\n\nWhen `portal` is omitted, defaults to `Dialog.Portal`.",
				"displayName": "Popup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/popup.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"portal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional portal element, typically `<Dialog.Portal />` with custom\n`container`, `className`, or `style`. The popup and backdrop are\nrendered as this portal's children (do not pass `children` on the portal\nelement; they would be ignored).\n\nWhen omitted, `Dialog.Popup` uses `Dialog.Portal` with default props,\nrendering the portal in the current document's `<body>`.",
						"name": "portal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PortalProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"size": {
						"defaultValue": { "value": "medium" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "Controls the dialog width, excluding the viewport inset.\n\nHeight is not directly controlled by `size`: for every value except\n`'full'`, the dialog fits its content up to the viewport height\n(minus the viewport inset) and scrolls internally when it overflows.\n`'full'` stretches the dialog to the available viewport height.\n\n- `'small'` — narrow max-width.\n- `'medium'` — moderate max-width.\n- `'large'` — wide max-width.\n- `'stretch'` — no max-width, stretches to fill available width.\n- `'full'` — stretches to fill available width and height.\n- `'auto'`: Fits content between the responsive minimum and available\n  viewport width. The minimum is 320px below a 480px viewport and 400px\n  otherwise, limited by the available width.\n\nConstrain wide content, such as images, to the available content width.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"medium\" | \"auto\" | \"large\" | \"stretch\" | \"full\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"auto\"" },
								{ "value": "\"large\"" },
								{ "value": "\"stretch\"" },
								{ "value": "\"full\"" }
							]
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/popup/DialogPopup.d.mts",
							"name": "DialogPopupProps"
						}],
						"description": "Determines the element to focus when the dialog is opened.\nBy default, focus moves to the first tabbable element inside the popup, except when the dialog\nis opened by touch — then the popup itself is focused to avoid opening the virtual keyboard.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing.",
						"name": "initialFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/popup/DialogPopup.d.mts",
							"name": "DialogPopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | void | HTMLElement | null)" }
					},
					"finalFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/popup/DialogPopup.d.mts",
							"name": "DialogPopupProps"
						}],
						"description": "Determines the element to focus when the dialog is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing.",
						"name": "finalFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/popup/DialogPopup.d.mts",
							"name": "DialogPopupProps"
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
//#region ../packages/ui/src/dialog/root.tsx
/**
* An ARIA-compliant dialog that opens on top of the entire page.
*
* Every dialog must include a `Dialog.Title` component for accessibility — it
* serves as both the visible heading and the accessible label for the dialog.
*
* Always include a visible close button, either `Dialog.CloseIconButton` or a clear
* dismissing action button. If your dialog has a "Cancel" button in the footer,
* the close icon may be redundant and create confusion about what clicking "X"
* means.
*
* Use `Dialog.CloseIconButton` for informational dialogs where dismissing is safe and
* expected. For dialogs requiring explicit user choice (especially destructive
* actions), omit the close icon and rely on footer action buttons like "Cancel"
* and "Confirm" instead.
*/
function Root({ modal = true, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DialogRoot, {
		modal,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DialogModalProvider, {
			modal,
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 24,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 23,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_root() {
	return (init_root = __esmMin((() => {
		init_DialogRoot();
		init_context();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/root.tsx";
		try {
			Root.__docgenInfo = {
				"description": "An ARIA-compliant dialog that opens on top of the entire page.\n\nEvery dialog must include a `Dialog.Title` component for accessibility — it\nserves as both the visible heading and the accessible label for the dialog.\n\nAlways include a visible close button, either `Dialog.CloseIconButton` or a clear\ndismissing action button. If your dialog has a \"Cancel\" button in the footer,\nthe close icon may be redundant and create confusion about what clicking \"X\"\nmeans.\n\nUse `Dialog.CloseIconButton` for informational dialogs where dismissing is safe and\nexpected. For dialogs requiring explicit user choice (especially destructive\nactions), omit the close icon and rely on footer action buttons like \"Cancel\"\nand \"Confirm\" instead.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "RootProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						}],
						"description": "Whether the dialog is initially open.\n\nTo render a controlled dialog, use the `open` prop instead.",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						}],
						"description": "Event handler called when the dialog is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: DialogRootChangeEventDetails) => void)" }
					},
					"onOpenChangeComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						}],
						"description": "Event handler called after any animations complete when the dialog is opened or closed.",
						"name": "onOpenChangeComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean) => void)" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						}],
						"description": "Whether the dialog is currently open.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"modal": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						}],
						"description": "Determines if the dialog enters a modal state when open.\n- `true`: user interaction is limited to just the dialog: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n- `'trap-focus'`: focus is trapped inside the dialog, but document page scroll is not locked and pointer interactions outside of it remain enabled.\n\nWhen `modal` is `true` or `'trap-focus'`, render `<Dialog.Close>` inside `<Dialog.Popup>` so\ntouch screen readers can escape the popup.",
						"name": "modal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | \"trap-focus\"" }
					},
					"disablePointerDismissal": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						}],
						"description": "Whether to prevent the dialog from closing on outside presses.\nFor non-modal dialogs, this also prevents the dialog from closing when focus moves outside of it.",
						"name": "disablePointerDismissal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/root/DialogRoot.d.mts",
							"name": "DialogRootProps"
						},
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
//#region ../packages/ui/src/dialog/title.tsx
var import_jsx_dev_runtime, _jsxFileName, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_DialogTitle();
		init_use_merge_refs();
		init_react();
		init_text();
		init_context();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/title.tsx";
		Title = (0, import_react.forwardRef)(function DialogTitle$1({ children, ...props }, forwardedRef) {
			const validationContext = useDialogValidationContext();
			const internalRef = (0, import_react.useRef)(null);
			const mergedRef = useMergeRefs([internalRef, forwardedRef]);
			(0, import_react.useEffect)(() => {
				if (validationContext) return validationContext.registerTitle(internalRef.current);
			}, [validationContext]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				ref: mergedRef,
				variant: "heading-xl",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { ...props }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 14
				}, this),
				className: style_module_default.title,
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 4
			}, this);
		});
		try {
			Title.__docgenInfo = {
				"description": "Renders the dialog title. This component is required for accessibility\nand serves as both the visible heading and the accessible label for\nthe dialog.\n\n**Required** — every dialog must include a `Dialog.Title`, even if\nvisually hidden. The rendered element is linked to the popup via\n`aria-labelledby`. Renders an `<h2>` by default.\n\nTo visually hide the title while keeping it accessible, wrap it with\n`VisuallyHidden` using the `render` prop:\n\n```jsx\n<VisuallyHidden render={ <Dialog.Title /> }>\n  Accessible title text\n</VisuallyHidden>\n```",
				"displayName": "Title",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/dialog/title.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "TitleProps"
						}],
						"description": "The title content to be rendered. This serves as both the visible\nheading and the accessible label for the dialog.\n\nWhen `Dialog.Title` is passed as a render element (e.g. to\n`VisuallyHidden`), children can be provided by the wrapper instead.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/dialog/types.ts",
							"name": "TitleProps"
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
export { Popup as a, init_portal as c, Content as d, init_content as f, init_root as i, Header as l, init_title as n, init_popup as o, Root as r, Portal as s, Title as t, init_header as u };
