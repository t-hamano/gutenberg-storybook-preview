import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_button, t as Button } from "./button--ei7vTao.js";
import { n as init_icon, t as Icon } from "./icon-LzGYYnN1.js";
import { a as Popup, i as init_trigger, n as init_root, o as init_popup, r as Trigger, t as Root } from "./root-CKrUEL-b.js";
import { i as useKeyboardShortcutProps, n as KeyboardShortcutDisplay, r as init_keyboard_shortcut, t as KeyboardShortcutDescription } from "./keyboard-shortcut-D95has-V.js";
//#region ../packages/ui/src/icon-button/style.module.css
var icon, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		icon = "_icon_3v206_5";
		style_module_default = {
			"icon-button": "_icon-button_3v206_5",
			icon
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/icon-button/icon-button.tsx
var import_jsx_dev_runtime, _jsxFileName, IconButton;
function init_icon_button() {
	return (init_icon_button = __esmMin((() => {
		init_clsx();
		init_react();
		init_button();
		init_icon();
		init_root(), init_trigger(), init_popup();
		init_keyboard_shortcut();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon-button/icon-button.tsx";
		IconButton = (0, import_react.forwardRef)(function UnforwardedIconButton({ label, className, children: _children, disabled, focusableWhenDisabled = true, icon, size, shortcut, positioner, "aria-describedby": ariaDescribedBy, "aria-keyshortcuts": ariaKeyShortcuts, ...restProps }, ref) {
			const classes = clsx(style_module_default["icon-button"], className);
			const { descriptionId, targetProps } = useKeyboardShortcutProps({
				"aria-describedby": ariaDescribedBy,
				"aria-keyshortcuts": ariaKeyShortcuts,
				shortcut
			});
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
				ref,
				...targetProps,
				disabled: disabled && !focusableWhenDisabled,
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					...restProps,
					size,
					"aria-label": label,
					disabled,
					focusableWhenDisabled
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 7
				}, this),
				className: classes,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					icon,
					size: 24,
					className: style_module_default.icon
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 6
				}, this), shortcut && descriptionId && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcutDescription, {
					descriptionId,
					shortcut
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, {
				positioner,
				children: [label, shortcut && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcutDisplay, { shortcut }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 8
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 4
			}, this);
		});
		try {
			IconButton.__docgenInfo = {
				"description": "An icon-only button with automatic tooltip and optimized styling.\nInherits all Button props while providing icon-specific enhancements.\n\nWhen rendering a group of `IconButton`s, wrap them in a `Tooltip.Provider`\nto coordinate tooltip delays across the group.\n\nSee the [Usage Guidelines](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-button-usage-guidelines--docs)\nfor when to use `Button`, `IconButton`, `Link`, or `ButtonLink`.",
				"displayName": "IconButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon-button/icon-button.tsx",
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
						"type": { "name": "boolean | \"false\" | \"true\" | \"mixed\"" }
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
							"raw": "\"solid\" | \"outline\" | \"minimal\" | \"unstyled\"",
							"value": [
								{ "value": "\"solid\"" },
								{ "value": "\"outline\"" },
								{ "value": "\"minimal\"" },
								{ "value": "\"unstyled\"" }
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
							"raw": "\"neutral\" | \"brand\"",
							"value": [{ "value": "\"neutral\"" }, { "value": "\"brand\"" }]
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
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A label describing the button's action, shown as a tooltip and to\nassistive technology.",
						"name": "label",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The icon to display in the button.\n\nWhen using `@wordpress/icons`, only version 15.0.0 or later is supported.\nFor custom SVGs, use `currentColor` for any fill or stroke that should\nfollow the button text color.",
						"name": "icon",
						"required": true,
						"tags": {},
						"type": { "name": "ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>" }
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
export { init_icon_button as n, IconButton as t };
