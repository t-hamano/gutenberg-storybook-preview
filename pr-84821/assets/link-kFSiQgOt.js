import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_focus_module, t as focus_module_default } from "./focus.module-CJgaYHb1.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-BTDDc07p.js";
//#region ../packages/ui/src/link/style.module.css
var link, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		link = "_link_1ubr3_5";
		style_module_default = {
			link,
			"is-brand": "_is-brand_1ubr3_14",
			"is-neutral": "_is-neutral_1ubr3_29",
			"is-unstyled": "_is-unstyled_1ubr3_45",
			"link-icon": "_link-icon_1ubr3_57"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/link/link.tsx
var import_jsx_dev_runtime, _jsxFileName, Link;
function init_link() {
	return (init_link = __esmMin((() => {
		init_useRender(), init_mergeProps();
		init_clsx();
		init_react();
		init_build_module();
		init_resets_module();
		init_focus_module();
		init_style_module();
		init_global_css_defense_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/link/link.tsx";
		Link = (0, import_react.forwardRef)(function UnforwardedLink({ children, variant = "default", tone = "brand", openInNewTab = false, target, render, className, ...props }, ref) {
			const shouldShowNewTabIndicator = openInNewTab || /^_blank$/i.test(target ?? "");
			return useRender({
				render,
				defaultTagName: "a",
				ref,
				props: mergeProps(props, {
					className: clsx(global_css_defense_module_default.a, resets_module_default["box-sizing"], focus_module_default["outset-ring--focus-except-active"], variant !== "unstyled" && style_module_default.link, variant !== "unstyled" && style_module_default[`is-${tone}`], variant === "unstyled" && style_module_default["is-unstyled"], className),
					target: target ?? (openInNewTab ? "_blank" : void 0),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [children, shouldShowNewTabIndicator && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: style_module_default["link-icon"],
						role: "img",
						"aria-label": __("(opens in a new tab)")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 8
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 6
					}, this)
				})
			});
		});
		try {
			Link.__docgenInfo = {
				"description": "A styled anchor element with support for semantic color tones and an\nunstyled escape hatch.\n\nSee the [Usage Guidelines](https://wordpress.github.io/gutenberg/?path=/docs/design-system-components-button-usage-guidelines--docs)\nfor when to use `Button`, `IconButton`, `Link`, or `ButtonLink`.",
				"displayName": "Link",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/link/link.tsx",
				"methods": [],
				"props": {
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
					"variant": {
						"defaultValue": { "value": "default" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						}],
						"description": "The visual treatment of the link.\n\n- `default`: Applies tone-based color and underline styles.\n- `unstyled`: Strips all visual styles so consumers can bring their own.",
						"name": "variant",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"default\" | \"unstyled\"",
							"value": [{ "value": "\"default\"" }, { "value": "\"unstyled\"" }]
						}
					},
					"tone": {
						"defaultValue": { "value": "brand" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						}],
						"description": "The tone of the link. Tone describes a semantic color intent.\nOnly applies when `variant` is `default`.",
						"name": "tone",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"neutral\" | \"brand\"",
							"value": [{ "value": "\"neutral\"" }, { "value": "\"brand\"" }]
						}
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
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/link/types.ts",
							"name": "LinkProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_link as n, Link as t };
