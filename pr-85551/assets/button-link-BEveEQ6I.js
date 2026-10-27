import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { i as style_module_default$1, n as init_icon$1, r as init_style_module$1, t as ButtonIcon } from "./icon-Dh5EM9a1.js";
import { n as init_link, t as Link } from "./link-DqJvnB9G.js";
//#region ../packages/ui/src/button-link/style.module.css
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = { "button-link": "_button-link_2kw5g_5" };
	})))();
}
//#endregion
//#region ../packages/ui/src/button-link/button-link.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, ForwardedButtonLink;
function init_button_link() {
	return (init_button_link = __esmMin((() => {
		init_clsx();
		init_react();
		init_link();
		init_style_module$1();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button-link/button-link.tsx";
		ForwardedButtonLink = (0, import_react.forwardRef)(function ButtonLink({ tone = "brand", variant = "solid", size = "default", className, children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Link, {
				ref,
				variant: "unstyled",
				className: clsx(style_module_default["button-link"], variant !== "unstyled" && style_module_default$1.button, style_module_default$1[`is-${tone}`], style_module_default$1[`is-${variant}`], style_module_default$1[`is-${size}`], className),
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 28,
				columnNumber: 4
			}, this);
		});
		try {
			ForwardedButtonLink.__docgenInfo = {
				"description": "A link that looks like a `Button`. Prefer `Link` for navigation unless\nbutton prominence is intentional.\n\nSee the [Usage Guidelines](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-button-usage-guidelines--docs)\nfor when to use `Button`, `IconButton`, `Link`, or `ButtonLink`.",
				"displayName": "ForwardedButtonLink",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button-link/button-link.tsx",
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
					"target": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						}],
						"description": "Where to open the linked document. `\"_blank\"` also adds the visual\nindicator and accessible new-tab notice.\n\nWhen both `target` and `openInNewTab` are set, `target` determines the\nbrowsing context.",
						"name": "target",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "HTMLAttributeAnchorTarget" }
					},
					"openInNewTab": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						}],
						"description": "Adds a visual indicator and accessible notice for opening in a new tab.\nDefaults `target` to `\"_blank\"` when no explicit target is set.",
						"name": "openInNewTab",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/button-link/icon.tsx
var import_jsx_dev_runtime, _jsxFileName, ForwardedButtonLinkIcon;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_react();
		init_icon$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button-link/icon.tsx";
		ForwardedButtonLinkIcon = (0, import_react.forwardRef)(function ButtonLinkIcon(props, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonIcon, {
				ref,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 9
			}, this);
		});
		try {
			ForwardedButtonLinkIcon.__docgenInfo = {
				"description": "",
				"displayName": "ForwardedButtonLinkIcon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button-link/icon.tsx",
				"methods": [],
				"props": {
					"size": {
						"defaultValue": { "value": "24" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The size (width and height) of the icon.",
						"name": "size",
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonIconProps"
						}],
						"description": "The icon to display, from the `@wordpress/icons` package.\n\nWhen using `@wordpress/icons`, only version 15.0.0 or later is supported.\nFor custom SVGs, use `currentColor` for any fill or stroke that should\nfollow the button text color.",
						"name": "icon",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/button/types.ts",
							"name": "ButtonIconProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/button-link/index.ts
var ButtonLink;
function init_button_link$1() {
	return (init_button_link$1 = __esmMin((() => {
		init_button_link();
		init_icon();
		ForwardedButtonLinkIcon.displayName = "ButtonLink.Icon";
		ButtonLink = Object.assign(ForwardedButtonLink, { 
		/**
		* An icon component specifically designed to work well when rendered inside
		* a `ButtonLink` component.
		*/
Icon: ForwardedButtonLinkIcon });
	})))();
}
//#endregion
export { init_button_link$1 as n, ButtonLink as t };
