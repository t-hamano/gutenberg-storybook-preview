import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_DialogPortal, n as init_DialogTitle, r as DialogPortal, t as DialogTitle } from "./DialogTitle-DG_nbyNT.js";
import { n as init_AlertDialogRoot, t as AlertDialogRoot } from "./AlertDialogRoot-C-hWYhSA.js";
import { i as init_DialogBackdrop, n as init_DialogPopup, r as DialogBackdrop, t as DialogPopup } from "./DialogPopup-B6gXA6Az.js";
import { i as init_DialogClose, n as init_DialogDescription, r as DialogClose, t as DialogDescription } from "./DialogDescription-DehIBOF0.js";
import { n as init_DialogTrigger, t as DialogTrigger } from "./DialogTrigger-B3iF80Dr.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { a as init_render_slot_with_children, i as init_wp_compat_overlay_slot, o as renderSlotWithChildren, r as getWpCompatOverlaySlot } from "./direction-provider-BqNMd272.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_button, t as Button } from "./button-yiOgKsLV.js";
import { n as style_module_default$1, t as init_style_module$1 } from "./style.module-BbD3jybr.js";
import { n as useDeprioritizedInitialFocus, t as init_use_deprioritized_initial_focus } from "./use-deprioritized-initial-focus-DYkROCuC.js";
import { n as init_use_overlay_scroll_state_attributes, r as useOverlayScrollStateAttributes, t as SCROLL_CONTAINER_ATTR } from "./use-overlay-scroll-state-attributes-6vtImYmF.js";
import { n as init_stack, t as Stack } from "./stack-s_FjhA7z.js";
import { n as init_text, t as Text } from "./text-B-YUcwFZ.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/alert-dialog/trigger/AlertDialogTrigger.mjs
var AlertDialogTrigger;
function init_AlertDialogTrigger() {
	return (init_AlertDialogTrigger = __esmMin((() => {
		init_DialogTrigger();
		AlertDialogTrigger = DialogTrigger;
	})))();
}
//#endregion
//#region ../packages/ui/src/alert-dialog/context.tsx
var noop, AlertDialogContext;
function init_context() {
	return (init_context = __esmMin((() => {
		init_react();
		noop = async () => {};
		AlertDialogContext = (0, import_react.createContext)({
			phase: "idle",
			showSpinner: false,
			errorMessage: void 0,
			confirm: noop
		});
	})))();
}
//#endregion
//#region ../packages/ui/src/alert-dialog/root.tsx
function isThenable(value) {
	return value !== null && value !== void 0 && typeof value.then === "function";
}
function createLifecycleState() {
	let value = {
		phase: "idle",
		showSpinner: false,
		errorMessage: void 0
	};
	const listeners = /* @__PURE__ */ new Set();
	return {
		getValue: () => value,
		subscribe: (listener) => {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		},
		update: (updates) => {
			value = {
				...value,
				...updates
			};
			listeners.forEach((listener) => listener());
		}
	};
}
/**
* A dialog that requires a user response to proceed.
*
* Use `AlertDialog.Trigger` to render a button that opens the dialog.
* Use `AlertDialog.Popup` to render the dialog content.
* The `AlertDialog.Trigger` is optional — the dialog can also be controlled
* via `open` / `onOpenChange` props.
*
* For use cases outside the standard confirm/cancel pattern, use the lower-level
* `Dialog` component directly.
*
* See the [Destructive Actions guidelines](https://wordpress.github.io/gutenberg/?path=/docs/design-system-patterns-destructive-actions--docs)
* for more details on when to use each pattern.
*/
function Root({ children, open: openProp, onOpenChange, defaultOpen, onConfirm }) {
	const [internalOpen, setInternalOpen] = (0, import_react.useState)(defaultOpen ?? false);
	const [lifecycle] = (0, import_react.useState)(createLifecycleState);
	const lifecycleState = (0, import_react.useSyncExternalStore)(lifecycle.subscribe, lifecycle.getValue, lifecycle.getValue);
	const actionsRef = (0, import_react.useRef)(null);
	const onConfirmEvent = useEvent(onConfirm);
	const confirmIdRef = (0, import_react.useRef)(0);
	const effectiveOpen = openProp ?? internalOpen;
	(0, import_react.useEffect)(() => {
		if (effectiveOpen && lifecycleState.phase === "closing") lifecycle.update({
			phase: "idle",
			showSpinner: false
		});
	}, [
		effectiveOpen,
		lifecycle,
		lifecycleState.phase
	]);
	const handleOpenChange = (0, import_react.useCallback)((nextOpen, eventDetails) => {
		if (!nextOpen && lifecycle.getValue().phase === "pending") return;
		if (!nextOpen && lifecycle.getValue().phase === "idle") lifecycle.update({ phase: "closing" });
		setInternalOpen(nextOpen);
		onOpenChange?.(nextOpen, eventDetails);
	}, [lifecycle, onOpenChange]);
	const confirm = (0, import_react.useCallback)(async () => {
		if (lifecycle.getValue().phase !== "idle") return;
		lifecycle.update({
			phase: "pending",
			errorMessage: void 0
		});
		const id = ++confirmIdRef.current;
		try {
			const rawResult = onConfirmEvent?.();
			if (isThenable(rawResult)) lifecycle.update({ showSpinner: true });
			const result = await Promise.resolve(rawResult);
			if (confirmIdRef.current !== id) return;
			if (result?.error) {
				lifecycle.update({
					phase: "idle",
					showSpinner: false,
					errorMessage: result.error
				});
				speak(result.error, "assertive");
				return;
			}
			if (result?.close !== false) {
				lifecycle.update({ phase: "closing" });
				actionsRef.current?.close();
			} else lifecycle.update({
				phase: "idle",
				showSpinner: false
			});
		} catch (error) {
			if (confirmIdRef.current !== id) return;
			lifecycle.update({
				phase: "idle",
				showSpinner: false
			});
			console.error(error);
		}
	}, [lifecycle, onConfirmEvent]);
	const handleOpenChangeComplete = (0, import_react.useCallback)((open) => {
		if (!open) {
			confirmIdRef.current++;
			lifecycle.update({
				phase: "idle",
				showSpinner: false,
				errorMessage: void 0
			});
		}
	}, [lifecycle]);
	const contextValue = (0, import_react.useMemo)(() => ({
		...lifecycleState,
		confirm
	}), [lifecycleState, confirm]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(AlertDialogRoot, {
		open: effectiveOpen,
		defaultOpen,
		onOpenChange: handleOpenChange,
		onOpenChangeComplete: handleOpenChangeComplete,
		actionsRef,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(AlertDialogContext.Provider, {
			value: contextValue,
			children
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 239,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 232,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$3, _jsxFileName$3;
function init_root() {
	return (init_root = __esmMin((() => {
		init_AlertDialogRoot();
		init_build_module$1();
		init_use_event();
		init_react();
		init_context();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/root.tsx";
		try {
			Root.__docgenInfo = {
				"description": "A dialog that requires a user response to proceed.\n\nUse `AlertDialog.Trigger` to render a button that opens the dialog.\nUse `AlertDialog.Popup` to render the dialog content.\nThe `AlertDialog.Trigger` is optional — the dialog can also be controlled\nvia `open` / `onOpenChange` props.\n\nFor use cases outside the standard confirm/cancel pattern, use the lower-level\n`Dialog` component directly.\n\nSee the [Destructive Actions guidelines](https://wordpress.github.io/gutenberg/?path=/docs/design-system-patterns-destructive-actions--docs)\nfor more details on when to use each pattern.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "RootProps"
						}],
						"description": "The content to be rendered inside the component. Typically includes\n`AlertDialog.Trigger` and `AlertDialog.Popup`.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "RootProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"onConfirm": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "RootProps"
						}],
						"description": "Callback fired when the user confirms the action.\n\n- Synchronous handlers: the dialog closes immediately after the\n  handler returns.\n- Async handlers: the dialog enters a \"pending\" state (buttons\n  disabled, spinner shown on the confirm button) until the promise\n  settles.\n\nReturn `{ close: false }` to keep the dialog open after the handler\ncompletes (e.g. for server-side validation). Return `void` or\n`{ close: true }` to close the dialog (the default).\n\nReturn `{ error: '...' }` to show a built-in error message below\nthe action buttons. The dialog stays open regardless of the `close`\nvalue. The error is announced to screen readers and is automatically\ncleared on the next confirm attempt or when the dialog reopens.\n\nIf the promise rejects (or the handler throws) without returning an\n`error`, the dialog stays open and returns to idle without showing\na visible error message. The error is logged to the console.\nTo show a user-facing message on failure, catch the error and\nreturn `{ close: false, error: '...' }`.",
						"name": "onConfirm",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "(() => ConfirmResult | Promise<ConfirmResult>)" }
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
					"onOpenChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/alert-dialog/root/AlertDialogRoot.d.mts",
							"name": "AlertDialogRootProps"
						}],
						"description": "Event handler called when the alert dialog is opened or closed.",
						"name": "onOpenChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/alert-dialog/root/AlertDialogRoot.d.mts",
							"name": "AlertDialogRootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((open: boolean, eventDetails: AlertDialogRootChangeEventDetails) => void)" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/alert-dialog/trigger.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, Trigger;
function init_trigger() {
	return (init_trigger = __esmMin((() => {
		init_AlertDialogTrigger();
		init_react();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/trigger.tsx";
		Trigger = (0, import_react.forwardRef)(function AlertDialogTrigger$1(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(AlertDialogTrigger, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 10,
				columnNumber: 10
			}, this);
		});
		try {
			Trigger.__docgenInfo = {
				"description": "Renders a button that opens the alert dialog when clicked.",
				"displayName": "Trigger",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/trigger.tsx",
				"methods": [],
				"props": {
					"id": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/trigger/DialogTrigger.d.mts",
							"name": "DialogTriggerProps"
						}],
						"description": "ID of the trigger. In addition to being forwarded to the rendered element,\nit is also used to specify the active trigger for the dialog in controlled mode (with the DialogRoot `triggerId` prop).",
						"name": "id",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/dialog/trigger/DialogTrigger.d.mts",
							"name": "DialogTriggerProps"
						},
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
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
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
//#region ../packages/ui/src/utils/css/overlay-chrome.module.css
var header, footer, title, content, overlay_chrome_module_default;
function init_overlay_chrome_module() {
	return (init_overlay_chrome_module = __esmMin((() => {
		header = "_header_1k6w3_10";
		footer = "_footer_1k6w3_10";
		title = "_title_1k6w3_63";
		content = "_content_1k6w3_10";
		overlay_chrome_module_default = {
			header,
			footer,
			title,
			content
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/alert-dialog/portal.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Portal;
function init_portal() {
	return (init_portal = __esmMin((() => {
		init_DialogPortal();
		init_react();
		init_wp_compat_overlay_slot();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/portal.tsx";
		Portal = (0, import_react.forwardRef)(function AlertDialogPortal({ container, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DialogPortal, {
				ref,
				container: container === void 0 ? getWpCompatOverlaySlot() : container,
				...props
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 12,
				columnNumber: 4
			}, this);
		});
		try {
			Portal.__docgenInfo = {
				"description": "Used to apply custom portal behavior to `AlertDialog`'s overlay content.",
				"displayName": "Portal",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/portal.tsx",
				"methods": [],
				"props": {
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
//#region ../packages/ui/src/alert-dialog/style.module.css
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = {
			"error-message": "_error-message_1yejl_5",
			"footer-column": "_footer-column_1yejl_23 _footer_1k6w3_10",
			"irreversible-action": "_irreversible-action_1yejl_32"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/alert-dialog/popup.tsx
var import_jsx_dev_runtime, _jsxFileName, Popup;
function init_popup() {
	return (init_popup = __esmMin((() => {
		init_DialogTitle(), init_DialogClose(), init_DialogBackdrop(), init_DialogPopup(), init_DialogDescription();
		init_clsx();
		init_react();
		init_use_merge_refs();
		init_build_module();
		init_render_slot_with_children();
		init_button();
		init_style_module$1();
		init_focus_module();
		init_overlay_chrome_module();
		init_use_deprioritized_initial_focus();
		init_use_overlay_scroll_state_attributes();
		init_stack();
		init_text();
		init_context();
		init_portal();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/popup.tsx";
		Popup = (0, import_react.forwardRef)(function AlertDialogPopup({ className, portal, intent = "default", title, description, children, confirmButtonText = __("OK"), cancelButtonText = __("Cancel"), stickyHeader = true, stickyFooter = true, initialFocus, finalFocus, ...props }, ref) {
			const { phase, showSpinner, errorMessage, confirm } = (0, import_react.useContext)(AlertDialogContext);
			const { ref: scrollStateRef, onScroll } = useOverlayScrollStateAttributes();
			const { resolvedInitialFocus, popupRef } = useDeprioritizedInitialFocus({
				initialFocus,
				deprioritizedAttributes: [SCROLL_CONTAINER_ATTR]
			});
			const mergedRef = useMergeRefs([ref, popupRef]);
			const confirmClassName = intent === "irreversible" ? style_module_default["irreversible-action"] : void 0;
			const buttonsDisabled = phase !== "idle" || void 0;
			const headerElement = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: overlay_chrome_module_default.header,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant: "heading-xl",
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 15
					}, this),
					className: overlay_chrome_module_default.title,
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 4
			}, this);
			const footerElement = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: style_module_default["footer-column"],
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "row",
					gap: "sm",
					justify: "flex-end",
					align: "center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
						render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "minimal",
							tone: "neutral"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 16
						}, this),
						disabled: buttonsDisabled,
						children: cancelButtonText
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						className: confirmClassName,
						onClick: confirm,
						loading: showSpinner || void 0,
						disabled: buttonsDisabled,
						children: confirmButtonText
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 5
				}, this), errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
					variant: "body-sm",
					className: style_module_default["error-message"],
					children: errorMessage
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 4
			}, this);
			const portalChildren = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogBackdrop, { className: style_module_default$1.backdrop }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPopup, {
				ref: mergedRef,
				className: clsx(style_module_default$1.popup, className, style_module_default$1["is-medium"]),
				initialFocus: resolvedInitialFocus,
				finalFocus,
				...props,
				"data-wp-ui-overlay-modal": "",
				children: [
					stickyHeader && headerElement,
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						ref: scrollStateRef,
						className: clsx(overlay_chrome_module_default.content, focus_module_default["outset-ring--focus-visible"]),
						onScroll,
						children: [
							!stickyHeader && headerElement,
							description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
								variant: "body-md",
								render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 18
								}, this),
								children: description
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 8
							}, this),
							children,
							!stickyFooter && footerElement
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 6
					}, this),
					stickyFooter && footerElement
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 4
			}, this);
			return renderSlotWithChildren(portal, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 42
			}, this), portalChildren);
		});
		try {
			Popup.__docgenInfo = {
				"description": "",
				"displayName": "Popup",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/alert-dialog/popup.tsx",
				"methods": [],
				"props": {
					"portal": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional portal element, typically `<AlertDialog.Portal />` with\ncustom `container`, `className`, or `style`. Overlay content is\nrendered as this portal's children (do not pass `children` on the portal\nelement; they would be ignored).\n\nWhen omitted, `AlertDialog.Popup` uses `AlertDialog.Portal` with default\nprops.",
						"name": "portal",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PortalProps, \"children\">, string | JSXElementConstructor<any>>" }
					},
					"intent": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "The semantic intent of the dialog, which determines its styling.\n\nAll intents use `role=\"alertdialog\"`, are always modal, and block\nbackdrop click dismissal. Escape key and the cancel/confirm buttons\nstill dismiss the dialog.\n\n- `'default'`: Standard confirmation dialog for reversible actions.\n- `'irreversible'`: Confirmation dialog for irreversible actions that\n  cannot be undone. The confirm button uses error/danger coloring.",
						"name": "intent",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"irreversible\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"irreversible\"" }]
						}
					},
					"title": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "The title displayed in the dialog header. This serves as both the\nvisible heading and the accessible label (`aria-labelledby`) for the\ndialog. Must be a plain string to ensure a predictable accessible name.",
						"name": "title",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"description": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "An optional description displayed below the title. Rendered using\nBase UI's `AlertDialog.Description` for proper `aria-describedby`\nassociation with the dialog. Must be a plain string to ensure a\npredictable accessible description.",
						"name": "description",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "Optional body content displayed between the description and the\naction buttons. Use for supplementary details or form fields.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					},
					"confirmButtonText": {
						"defaultValue": { "value": "__( 'OK' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "Custom text for the confirm button.",
						"name": "confirmButtonText",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"cancelButtonText": {
						"defaultValue": { "value": "__( 'Cancel' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "Custom text for the cancel button.",
						"name": "cancelButtonText",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"stickyHeader": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "When `true`, the dialog's title stays pinned to the top of the popup\nas the body scrolls. When `false`, the title scrolls with the body.",
						"name": "stickyHeader",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"stickyFooter": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
						}],
						"description": "When `true`, the dialog's action buttons (and error message, if any)\nstay pinned to the bottom of the popup as the body scrolls. When\n`false`, they scroll with the body.",
						"name": "stickyFooter",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/alert-dialog/types.ts",
							"name": "PopupProps"
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
export { Trigger as a, init_root as c, init_portal as i, init_popup as n, init_trigger as o, Portal as r, Root as s, Popup as t };
