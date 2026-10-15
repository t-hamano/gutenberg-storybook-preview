import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { n as init_DialogTrigger, t as DialogTrigger } from "./DialogTrigger-CbxB9bZn.js";
import { a as DrawerRoot, c as init_DrawerPortal, d as DrawerContent, f as init_DrawerContent, g as init_DrawerBackdrop, h as DrawerBackdrop, i as init_DrawerTitle, l as DrawerPopup, m as init_DrawerClose, n as init_DrawerViewport, o as init_DrawerRoot, p as DrawerClose, r as DrawerTitle, s as DrawerPortal, t as DrawerViewport, u as init_DrawerPopup } from "./DrawerViewport-DTiqXgg3.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
import { t as close_default } from "./close-CkxG9D71.js";
import { a as init_render_slot_with_children, i as init_wp_compat_overlay_slot, o as renderSlotWithChildren, r as getWpCompatOverlaySlot } from "./direction-provider-BY5d0O1J.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_button, t as Button } from "./button-CQjSoBjH.js";
import { n as useDeprioritizedInitialFocus, t as init_use_deprioritized_initial_focus } from "./use-deprioritized-initial-focus-DYkROCuC.js";
import { n as init_use_overlay_scroll_state_attributes, r as useOverlayScrollStateAttributes, t as SCROLL_CONTAINER_ATTR } from "./use-overlay-scroll-state-attributes-6vtImYmF.js";
import { n as init_text, t as Text } from "./text-7MhcSnkB.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-CljljWsV.js";
import { n as init_create_overlay_modal_context, t as createOverlayModalContext } from "./create-overlay-modal-context-BDOwiyS4.js";
import { n as init_create_overlay_title_validation, t as createOverlayTitleValidation } from "./create-overlay-title-validation-DsjUcEEp.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/trigger/DrawerTrigger.mjs
var DrawerTrigger;
function init_DrawerTrigger() {
	return (init_DrawerTrigger = __esmMin((() => {
		init_DialogTrigger();
		DrawerTrigger = DialogTrigger;
	})))();
}
//#endregion
//#region ../packages/ui/src/drawer/action.tsx
var import_jsx_dev_runtime$7, _jsxFileName$7, Action;
function init_action() {
	return (init_action = __esmMin((() => {
		init_DrawerClose();
		init_react();
		init_button();
		import_jsx_dev_runtime$7 = require_jsx_dev_runtime();
		_jsxFileName$7 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/action.tsx";
		Action = (0, import_react.forwardRef)(function DrawerAction({ render, disabled, loading, ...props }, ref) {
			const resolvedDisabled = disabled ?? loading;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(DrawerClose, {
				ref,
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$7.jsxDEV)(Button, {
					render,
					loading
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 20,
					columnNumber: 14
				}, this),
				disabled: resolvedDisabled,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			Action.__docgenInfo = {
				"description": "Renders a button that closes the drawer when clicked.\nAccepts all Button component props for styling.",
				"displayName": "Action",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/action.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "ActionProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "ActionProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"aria-pressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Indicates the current \"pressed\" state of toggle buttons. This should only\nbe used with neutral minimal buttons.",
						"name": "aria-pressed",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | \"true\" | \"false\" | \"mixed\"" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Whether the button is disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "\"default\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"variant": {
						"defaultValue": { "value": "\"solid\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The variant of the button. Variants describe the visual style treatment\nof the button.",
						"name": "variant",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"unstyled\" | \"solid\" | \"minimal\" | \"outline\"",
							"value": [
								{ "value": "\"unstyled\"" },
								{ "value": "\"solid\"" },
								{ "value": "\"minimal\"" },
								{ "value": "\"outline\"" }
							]
						}
					},
					"loading": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Whether the button is in a loading state, such as when an action is being\nperformed.",
						"name": "loading",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"focusableWhenDisabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Whether the element should be focusable even when it is disabled.",
						"name": "focusableWhenDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"tone": {
						"defaultValue": { "value": "\"brand\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The tone of the button, describing a semantic color intent:\n\n- `'brand': for the most prominent actions, using the brand colors.\n- `'neutral'` for less prominent actions.",
						"name": "tone",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"brand\" | \"neutral\"",
							"value": [{ "value": "\"brand\"" }, { "value": "\"neutral\"" }]
						}
					},
					"loadingAnnouncement": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The text used for assistive technology to indicate the loading state.",
						"name": "loadingAnnouncement",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
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
//#region ../packages/ui/src/drawer/close-icon-button.tsx
var import_jsx_dev_runtime$6, _jsxFileName$6, CloseIconButton;
function init_close_icon_button() {
	return (init_close_icon_button = __esmMin((() => {
		init_DrawerClose();
		init_react();
		init_build_module();
		init_build_module$1();
		init_icon_button();
		import_jsx_dev_runtime$6 = require_jsx_dev_runtime();
		_jsxFileName$6 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/close-icon-button.tsx";
		CloseIconButton = (0, import_react.forwardRef)(function DrawerCloseIconButton({ icon, label, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(DrawerClose, {
				ref,
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$6.jsxDEV)(IconButton, {
					variant: "minimal",
					size: "compact",
					tone: "neutral",
					...props,
					icon: icon ?? close_default,
					label: label ?? __("Close"),
					"data-wp-ui-drawer-close-icon": ""
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 18,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 15,
				columnNumber: 4
			}, this);
		});
		try {
			CloseIconButton.__docgenInfo = {
				"description": "Renders an icon button that closes the drawer when clicked.\nProvides a default close icon and accessible label.",
				"displayName": "CloseIconButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/close-icon-button.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": { "value": "__( 'Close' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "CloseIconButtonProps"
						}],
						"description": "A label describing the button's action, shown as a tooltip and to\nassistive technology.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "CloseIconButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": { "value": "the `close` icon from `@wordpress/icons`" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "CloseIconButtonProps"
						}],
						"description": "The icon to display in the button.",
						"name": "icon",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "CloseIconButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>" }
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
					"aria-pressed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Indicates the current \"pressed\" state of toggle buttons. This should only\nbe used with neutral minimal buttons.",
						"name": "aria-pressed",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | \"true\" | \"false\" | \"mixed\"" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Whether the button is disabled.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"size": {
						"defaultValue": { "value": "\"default\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"default\" | \"compact\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"default\"" },
								{ "value": "\"compact\"" }
							]
						}
					},
					"variant": {
						"defaultValue": { "value": "\"solid\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The variant of the button. Variants describe the visual style treatment\nof the button.",
						"name": "variant",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"unstyled\" | \"solid\" | \"minimal\" | \"outline\"",
							"value": [
								{ "value": "\"unstyled\"" },
								{ "value": "\"solid\"" },
								{ "value": "\"minimal\"" },
								{ "value": "\"outline\"" }
							]
						}
					},
					"focusableWhenDisabled": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "Whether the element should be focusable even when it is disabled.",
						"name": "focusableWhenDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"tone": {
						"defaultValue": { "value": "\"brand\"" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The tone of the button, describing a semantic color intent:\n\n- `'brand': for the most prominent actions, using the brand colors.\n- `'neutral'` for less prominent actions.",
						"name": "tone",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"brand\" | \"neutral\"",
							"value": [{ "value": "\"brand\"" }, { "value": "\"neutral\"" }]
						}
					},
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The keyboard shortcut associated with this button. When provided, the\nshortcut is displayed in the tooltip and announced to assistive technology.\n\n**Note**: This prop is for display and accessibility purposes only — the\nconsumer is responsible for registering the keyboard shortcut and keeping\nits handler synchronized with the button's disabled state.",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "KeyboardShortcut" }
					},
					"positioner": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Customize how the tooltip is positioned relative to the button. Accepts\na `<Tooltip.Positioner />` element with custom positioning props\n(`side`, `align`, `sideOffset`, collision settings, etc.). When omitted,\nthe tooltip uses the default placement.",
						"name": "positioner",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PositionerProps, \"children\">, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/drawer/style.module.css
var backdrop, viewport, popup, header, footer, title, content, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		backdrop = "_backdrop_pfbjp_5";
		viewport = "_viewport_pfbjp_48";
		popup = "_popup_pfbjp_63";
		header = "_header_pfbjp_285 _header_1k6w3_10";
		footer = "_footer_pfbjp_289 _footer_1k6w3_10";
		title = "_title_pfbjp_293 _title_1k6w3_63";
		content = "_content_pfbjp_277 _content_1k6w3_10";
		style_module_default = {
			backdrop,
			viewport,
			popup,
			"is-small": "_is-small_pfbjp_141",
			"is-medium": "_is-medium_pfbjp_145",
			"is-large": "_is-large_pfbjp_149",
			"is-stretch": "_is-stretch_pfbjp_153",
			"is-auto": "_is-auto_pfbjp_157",
			header,
			footer,
			title,
			content
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/drawer/content.tsx
var import_jsx_dev_runtime$5, _jsxFileName$5, Content;
function init_content() {
	return (init_content = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_DrawerContent();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_use_overlay_scroll_state_attributes();
		init_focus_module();
		init_style_module();
		import_jsx_dev_runtime$5 = require_jsx_dev_runtime();
		_jsxFileName$5 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/content.tsx";
		Content = (0, import_react.forwardRef)(function DrawerContent$1({ className, render, children, onScroll, ...props }, ref) {
			const { ref: scrollStateRef, onScroll: scrollStateOnScroll } = useOverlayScrollStateAttributes(onScroll);
			const mergedRef = useMergeRefs([ref, scrollStateRef]);
			return useRender({
				defaultTagName: "div",
				render,
				ref: mergedRef,
				props: mergeProps(props, {
					className: clsx(style_module_default.content, focus_module_default["outset-ring--focus-visible"], className),
					onScroll: scrollStateOnScroll,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$5.jsxDEV)(DrawerContent, { children }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 57,
						columnNumber: 15
					}, this)
				})
			});
		});
		try {
			Content.__docgenInfo = {
				"description": "Renders the scrollable body of the drawer, sitting between `Drawer.Header`\nand `Drawer.Footer` as a flex sibling.\n\n**Required for scrolling** — `Drawer.Content` is the element that owns\nthe popup's overflow. Without it, body content that exceeds the popup's\navailable space clips instead of scrolling, and swipe-to-dismiss on\nscrollable vertical drawers won't gate correctly at the scroll edge.\nRender it once per popup and wrap any freeform body content in it.\n\nPlacing `Drawer.Header` or `Drawer.Footer` *inside* `Drawer.Content`\nmakes them scroll with the body (the \"non-sticky\" opt-out) rather than\nstaying pinned to the popup's edges.\n\nMouse-drag swipe-to-dismiss is preserved in the popup-edge padding\ngutter and on the chrome regions; mouse drag over the body itself\ndoes not dismiss the drawer, so text selection inside the body keeps\nworking normally. Touch swipe-to-dismiss engages from anywhere in\nthe popup (gated by the scroll edge on vertical drawers).",
				"displayName": "Content",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/content.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "ContentProps"
						}],
						"description": "The body content to be rendered inside the scroll region.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "ContentProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"tabIndex": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "ContentProps"
						}],
						"description": "The scroll region automatically becomes a keyboard-reachable tab\nstop (`tabindex=\"0\"`) whenever the body overflows, so keyboard\nusers can arrow-scroll the region (WCAG 2.1.1). It becomes\nnon-tabbable again as soon as the content no longer overflows.\n\nIf you supply `tabIndex` explicitly, your value wins and is never\noverwritten — including `tabIndex={ -1 }` to opt out of the\nautomatic tab stop entirely, and including overrides applied\nafter the component had already managed the value.\n\nTwo narrow edge cases:\n- If you later *remove* an explicit `tabIndex` at runtime, the\n  component will resume managing it on the next overflow tick; it\n  can't distinguish a previous explicit opt-out from an\n  unconfigured state.\n- Passing `tabIndex={ 0 }` while the body overflows produces a\n  value identical to the auto-managed one, so the component can\n  no longer tell the two apart and may strip it on the next\n  non-overflow tick. Pick a different value (or rely on the\n  default behavior, which is already `0` while overflowing).\n\nNote: the scroll region is intentionally rendered without\n`role` / `aria-label`, so screen readers don't announce a\ngeneric \"scrollable\" landmark on top of the drawer's existing\nheading + body; the surrounding `Drawer.Title` and body content\nprovide the context.",
						"name": "tabIndex",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
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
//#region ../packages/ui/src/drawer/footer.tsx
var Footer;
function init_footer() {
	return (init_footer = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		init_style_module();
		Footer = (0, import_react.forwardRef)(function DrawerFooter({ className, render, ...props }, ref) {
			return useRender({
				defaultTagName: "footer",
				render,
				ref,
				props: mergeProps(props, { className: clsx(style_module_default.footer, className) })
			});
		});
		try {
			Footer.__docgenInfo = {
				"description": "Renders the footer section of the drawer, typically containing\naction buttons.\n\nDefaults to a native `<footer>` element for richer semantics (contentinfo\nlandmark navigation where screen readers expose landmarks nested in\ndialogs). Pass `render` to opt out of the default tag.\n\nThe footer is pinned to the bottom of the popup by default. To let it\nscroll with the body instead, render it *inside* `Drawer.Content`.",
				"displayName": "Footer",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/footer.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "FooterProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "FooterProps"
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
//#region ../packages/ui/src/drawer/header.tsx
var Header;
function init_header() {
	return (init_header = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		init_style_module();
		Header = (0, import_react.forwardRef)(function DrawerHeader({ className, render, ...props }, ref) {
			return useRender({
				defaultTagName: "header",
				render,
				ref,
				props: mergeProps(props, { className: clsx(style_module_default.header, className) })
			});
		});
		try {
			Header.__docgenInfo = {
				"description": "Renders the header section of the drawer, typically containing\nthe heading and close button.\n\nDefaults to a native `<header>` element for richer semantics (heading-level\nscanning, and banner landmark navigation where screen readers expose\nlandmarks nested in dialogs). Pass `render` to opt out of the default tag.\n\nThe header is pinned to the top of the popup by default. To let it scroll\nwith the body instead, render it *inside* `Drawer.Content`.",
				"displayName": "Header",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/header.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "HeaderProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
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
//#region ../packages/ui/src/drawer/context.tsx
var drawerModal, DrawerModalProvider, useDrawerModal, drawerTitleValidation, useDrawerValidationContext, DrawerValidationProvider;
function init_context() {
	return (init_context = __esmMin((() => {
		init_create_overlay_modal_context();
		init_create_overlay_title_validation();
		drawerModal = createOverlayModalContext(true);
		DrawerModalProvider = drawerModal.Provider;
		useDrawerModal = drawerModal.useModal;
		drawerTitleValidation = createOverlayTitleValidation("Drawer");
		useDrawerValidationContext = drawerTitleValidation.useValidationContext;
		DrawerValidationProvider = drawerTitleValidation.ValidationProvider;
		try {
			DrawerModalProvider.__docgenInfo = {
				"description": "",
				"displayName": "DrawerModalProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/context.tsx",
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
			useDrawerValidationContext.__docgenInfo = {
				"description": "Hook to access the drawer validation context.\nReturns null in production or if not within a Drawer.Popup.",
				"displayName": "useDrawerValidationContext",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			DrawerValidationProvider.__docgenInfo = {
				"description": "Provider component that validates Drawer.Title presence in development mode.\nIn production, this component is a no-op and just renders children.",
				"displayName": "DrawerValidationProvider",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/context.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/drawer/portal.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_DrawerPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/portal.tsx";
		Portal = (0, import_react.forwardRef)(function DrawerPortal$1({ container, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(DrawerPortal, {
				ref,
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...restProps
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 14,
				columnNumber: 3
			}, this);
		});
		try {
			Portal.__docgenInfo = {
				"description": "Used to apply custom portal behavior to `Drawer`'s overlay content.",
				"displayName": "Portal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/portal.tsx",
				"methods": [],
				"props": {
					"container": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/portal/DrawerPortal.d.mts",
							"name": "DrawerPortalProps"
						}],
						"description": "A parent element to render the portal element into.",
						"name": "container",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/portal/DrawerPortal.d.mts",
							"name": "DrawerPortalProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLElement | ShadowRoot | RefObject<HTMLElement | ShadowRoot | null> | null" }
					},
					"keepMounted": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/portal/DrawerPortal.d.mts",
							"name": "DrawerPortalProps"
						}],
						"description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
						"name": "keepMounted",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/portal/DrawerPortal.d.mts",
							"name": "DrawerPortalProps"
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
//#region ../packages/ui/src/drawer/popup.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, CLOSE_ICON_ATTR, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_DrawerBackdrop(), init_DrawerViewport(), init_DrawerPopup();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_use_deprioritized_initial_focus();
		init_use_overlay_scroll_state_attributes();
		init_render_slot_with_children();
		init_context();
		init_portal();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/popup.tsx";
		CLOSE_ICON_ATTR = "data-wp-ui-drawer-close-icon";
		Popup = (0, import_react.forwardRef)(function DrawerPopup$1({ className, portal, children, size, initialFocus, finalFocus, ...props }, ref) {
			const { resolvedInitialFocus, popupRef } = useDeprioritizedInitialFocus({
				initialFocus,
				deprioritizedAttributes: [CLOSE_ICON_ATTR, SCROLL_CONTAINER_ATTR]
			});
			const mergedRef = useMergeRefs([ref, popupRef]);
			const modal = useDrawerModal();
			const portalChildren = /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(import_jsx_dev_runtime$3.Fragment, { children: [modal === true && /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DrawerBackdrop, {
				className: style_module_default.backdrop,
				"data-testid": "drawer-backdrop"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 45,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DrawerViewport, {
				className: style_module_default.viewport,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DrawerPopup, {
					ref: mergedRef,
					className: (state) => {
						const isVertical = state.swipeDirection === "up" || state.swipeDirection === "down";
						const resolvedSize = size ?? (isVertical ? "auto" : "medium");
						return clsx(style_module_default.popup, className, style_module_default[`is-${resolvedSize}`]);
					},
					initialFocus: resolvedInitialFocus,
					finalFocus,
					...props,
					"data-wp-ui-overlay-modal": modal === true ? "" : void 0,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(DrawerValidationProvider, { children }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 71,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 51,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 50,
				columnNumber: 4
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 38,
				columnNumber: 3
			}, this);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Portal, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 79,
				columnNumber: 41
			}, this), portalChildren);
		});
		try {
			Popup.__docgenInfo = {
				"description": "Renders the drawer popup element that contains the drawer content.\nUses a portal to render outside the DOM hierarchy.\n\nWhen `portal` is omitted, defaults to `Drawer.Portal`.\n\nThe popup is a flex column; scroll ownership lives on `Drawer.Content`,\nwhich children are expected to render. Without it, long body content will\nclip instead of scrolling and Base UI's swipe-dismiss-on-scroll-edge\nlogic on up/down drawers cannot engage.",
				"displayName": "Popup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/popup.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "PopupProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"portal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional portal element, typically `<Drawer.Portal />` with custom\n`container`, `className`, or `style`. The backdrop and inner viewport\nare rendered as this portal's children (do not pass `children` on the\nportal element; they would be ignored).\n\nWhen omitted, `Drawer.Popup` uses `Drawer.Portal` with default props,\nrendering the portal in the current document's `<body>`.",
						"name": "portal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PortalProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"size": {
						"defaultValue": { "value": "'medium' for left/right drawers, 'auto' for up/down drawers" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "PopupProps"
						}],
						"description": "Controls the size of the drawer along its relevant axis (width for\nleft/right drawers, height for up/down drawers).\n\nWhen not specified, left/right drawers use a default medium width\nand up/down drawers fit their content.\n\n- `'small'` — narrow/short.\n- `'medium'` — moderate.\n- `'large'` — wide/tall.\n- `'stretch'` — fills available space, respecting the viewport inset.\n- `'auto'` — fit content along the relevant axis.",
						"name": "size",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"small\" | \"auto\" | \"stretch\" | \"medium\" | \"large\"",
							"value": [
								{ "value": "\"small\"" },
								{ "value": "\"auto\"" },
								{ "value": "\"stretch\"" },
								{ "value": "\"medium\"" },
								{ "value": "\"large\"" }
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
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/popup/DrawerPopup.d.mts",
							"name": "DrawerPopupProps"
						}],
						"description": "Determines the element to focus when the drawer is opened.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.",
						"name": "initialFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/popup/DrawerPopup.d.mts",
							"name": "DrawerPopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | void | HTMLElement | null)" }
					},
					"finalFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/popup/DrawerPopup.d.mts",
							"name": "DrawerPopupProps"
						}],
						"description": "Determines the element to focus when the drawer is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.",
						"name": "finalFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/popup/DrawerPopup.d.mts",
							"name": "DrawerPopupProps"
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
//#region ../packages/ui/src/drawer/root.tsx
/**
* An ARIA-compliant drawer that slides in from a viewport edge, with
* swipe-to-dismiss gestures.
*
* Every drawer must include a `Drawer.Title` component for accessibility — it
* serves as both the visible heading and the accessible label for the drawer.
*
* Always include a visible close affordance, either `Drawer.CloseIconButton` or a
* clear dismissing action button. If your drawer has a "Cancel" button in the
* footer, the close icon may be redundant and create confusion about what
* clicking "X" means.
*
* Use `Drawer.CloseIconButton` for informational drawers where dismissing is safe
* and expected. For drawers requiring explicit user choice (especially
* destructive actions), omit the close icon and rely on footer action buttons
* like "Cancel" and "Confirm" instead.
*
* See the [Usage Guidelines](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-dialog-usage-guidelines--docs)
* for when to use `Dialog` or `Drawer`.
*/
function Root({ modal = true, swipeDirection = "left", children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DrawerRoot, {
		modal,
		swipeDirection,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(DrawerModalProvider, {
			modal,
			children
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 37,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 32,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$2, _jsxFileName$2;
function init_root() {
	return (init_root = __esmMin((() => {
		init_DrawerRoot();
		init_context();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/root.tsx";
		try {
			Root.__docgenInfo = {
				"description": "An ARIA-compliant drawer that slides in from a viewport edge, with\nswipe-to-dismiss gestures.\n\nEvery drawer must include a `Drawer.Title` component for accessibility — it\nserves as both the visible heading and the accessible label for the drawer.\n\nAlways include a visible close affordance, either `Drawer.CloseIconButton` or a\nclear dismissing action button. If your drawer has a \"Cancel\" button in the\nfooter, the close icon may be redundant and create confusion about what\nclicking \"X\" means.\n\nUse `Drawer.CloseIconButton` for informational drawers where dismissing is safe\nand expected. For drawers requiring explicit user choice (especially\ndestructive actions), omit the close icon and rely on footer action buttons\nlike \"Cancel\" and \"Confirm\" instead.\n\nSee the [Usage Guidelines](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-dialog-usage-guidelines--docs)\nfor when to use `Dialog` or `Drawer`.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/root.tsx",
				"methods": [],
				"props": {
					"swipeDirection": {
						"defaultValue": { "value": "left" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "RootProps"
						}],
						"description": "The edge the drawer slides in from, and the direction used to dismiss it\nvia swipe gesture.\n\n- `'left'` / `'right'`: side drawers; swipe horizontally to dismiss.\n- `'down'`: bottom sheet; swipe down to dismiss.\n- `'up'`: top drawer; swipe up to dismiss.",
						"name": "swipeDirection",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "SwipeDirection",
							"value": [
								{ "value": "\"left\"" },
								{ "value": "\"right\"" },
								{ "value": "\"down\"" },
								{ "value": "\"up\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "RootProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"open": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						}],
						"description": "Whether the drawer is currently open.",
						"name": "open",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultOpen": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						}],
						"description": "Whether the drawer is initially open.\n\nTo render a controlled drawer, use the `open` prop instead.",
						"name": "defaultOpen",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						}],
						"description": "Event handler called when the drawer is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: DrawerRootChangeEventDetails) => void)" }
					},
					"onOpenChangeComplete": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						}],
						"description": "Event handler called after any animations complete when the drawer is opened or closed.",
						"name": "onOpenChangeComplete",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean) => void)" }
					},
					"modal": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						}],
						"description": "Determines if the drawer enters a modal state when open.\n- `true`: user interaction is limited to just the drawer: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n- `'trap-focus'`: focus is trapped inside the drawer, but document page scroll is not locked and pointer interactions outside of it remain enabled.",
						"name": "modal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean | \"trap-focus\"" }
					},
					"disablePointerDismissal": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
						}],
						"description": "Whether to prevent the drawer from closing on outside presses.\nFor non-modal drawers, this also prevents the drawer from closing when focus moves outside of it.",
						"name": "disablePointerDismissal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/root/DrawerRoot.d.mts",
							"name": "DrawerRootProps"
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
//#region ../packages/ui/src/drawer/title.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_DrawerTitle();
		init_use_merge_refs();
		init_react();
		init_text();
		init_context();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/title.tsx";
		Title = (0, import_react.forwardRef)(function DrawerTitle$1({ children, ...props }, forwardedRef) {
			const validationContext = useDrawerValidationContext();
			const internalRef = (0, import_react.useRef)(null);
			const mergedRef = useMergeRefs([internalRef, forwardedRef]);
			(0, import_react.useEffect)(() => {
				if (validationContext) return validationContext.registerTitle(internalRef.current);
			}, [validationContext]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
				ref: mergedRef,
				variant: "heading-xl",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DrawerTitle, { ...props }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 44,
					columnNumber: 14
				}, this),
				className: style_module_default.title,
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 41,
				columnNumber: 4
			}, this);
		});
		try {
			Title.__docgenInfo = {
				"description": "Renders the drawer title. This component is required for accessibility\nand serves as both the visible heading and the accessible label for\nthe drawer.\n\n**Required** — every drawer must include a `Drawer.Title`, even if\nvisually hidden. The rendered element is linked to the popup via\n`aria-labelledby`. Renders an `<h2>` by default.\n\nTo visually hide the title while keeping it accessible, wrap it with\n`VisuallyHidden` using the `render` prop:\n\n```jsx\n<VisuallyHidden render={ <Drawer.Title /> }>\n  Accessible title text\n</VisuallyHidden>\n```",
				"displayName": "Title",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/title.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
							"name": "TitleProps"
						}],
						"description": "The title content to be rendered. This serves as both the visible\nheading and the accessible label for the drawer.\n\nWhen `Drawer.Title` is passed as a render element (e.g. to\n`VisuallyHidden`), children can be provided by the wrapper instead.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
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
//#region ../packages/ui/src/drawer/trigger.tsx
var import_jsx_dev_runtime, _jsxFileName, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_DrawerTrigger();
		init_react();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/trigger.tsx";
		Trigger = (0, import_react.forwardRef)(function DrawerTrigger$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DrawerTrigger, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 10
			}, this);
		});
		try {
			Trigger.__docgenInfo = {
				"description": "Renders a button that opens the drawer popup when clicked.",
				"displayName": "Trigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/drawer/trigger.tsx",
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
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/trigger/DrawerTrigger.d.mts",
							"name": "DrawerTriggerProps"
						}],
						"description": "ID of the trigger. In addition to being forwarded to the rendered element,\nit is also used to specify the active trigger for drawers in controlled mode (with the Drawer.Root `triggerId` prop).",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/drawer/trigger/DrawerTrigger.d.mts",
							"name": "DrawerTriggerProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/drawer/types.ts",
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
export { CloseIconButton as _, Root as a, init_action as b, init_popup as c, Header as d, init_header as f, init_content as g, Content as h, init_title as i, Portal as l, init_footer as m, init_trigger as n, init_root as o, Footer as p, Title as r, Popup as s, Trigger as t, init_portal as u, init_close_icon_button as v, Action as y };
