import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_Button, t as Button$2 } from "./Button-Dt-xiFI-.js";
import { r as speak, t as init_build_module$1 } from "./build-module-DsAeWnrG.js";
import { n as init_spinner, t as Spinner } from "./spinner-DrO-0UQB.js";
import { i as style_module_default, n as init_icon, r as init_style_module, t as ButtonIcon } from "./icon-Dh5EM9a1.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
//#region ../packages/ui/src/button/button.tsx
var import_jsx_dev_runtime, _jsxFileName, Button$1;
function init_button() {
	return (init_button = __esmMin((() => {
		init_Button();
		init_clsx();
		init_build_module$1();
		init_react();
		init_build_module();
		init_spinner();
		init_style_module();
		init_resets_module();
		init_focus_module();
		init_global_css_defense_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/button.tsx";
		Button$1 = (0, import_react.forwardRef)(function UnforwardedButton({ tone = "brand", variant = "solid", size = "default", className, focusableWhenDisabled = true, disabled, loading, loadingAnnouncement = __("Loading"), children, ...props }, ref) {
			const mergedClassName = clsx(global_css_defense_module_default.button, resets_module_default["box-sizing"], focus_module_default["outset-ring--focus-except-active"], variant !== "unstyled" && style_module_default.button, style_module_default[`is-${tone}`], style_module_default[`is-${variant}`], style_module_default[`is-${size}`], loading && style_module_default["is-loading"], className);
			(0, import_react.useEffect)(() => {
				if (loading && loadingAnnouncement) speak(loadingAnnouncement);
			}, [loading, loadingAnnouncement]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button$2, {
				ref,
				className: mergedClassName,
				focusableWhenDisabled,
				disabled: disabled ?? loading,
				...props,
				children: [children, loading && variant !== "unstyled" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { className: style_module_default.spinner }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 6
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 4
			}, this);
		});
		try {
			Button$1.__docgenInfo = {
				"description": "A versatile button component with multiple variants, tones, and sizes.\n\nSee the [Usage Guidelines](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-button-usage-guidelines--docs)\nfor when to use `Button`, `IconButton`, `Link`, or `ButtonLink`.",
				"displayName": "Button",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/button.tsx",
				"methods": [],
				"props": {
					"variant": {
						"defaultValue": { "value": "solid" },
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
					"tone": {
						"defaultValue": { "value": "brand" },
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
					"size": {
						"defaultValue": { "value": "default" },
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
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						}],
						"description": "The content of the button.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
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
					"loadingAnnouncement": {
						"defaultValue": { "value": "__( 'Loading' )" },
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/button/index.ts
var Button;
function init_button$1() {
	return (init_button$1 = __esmMin((() => {
		init_button();
		init_icon();
		ButtonIcon.displayName = "Button.Icon";
		Button = Object.assign(Button$1, { 
		/**
		* An icon component specifically designed to work well when rendered inside
		* a `Button` component.
		*/
Icon: ButtonIcon });
	})))();
}
//#endregion
export { init_button$1 as n, Button as t };
