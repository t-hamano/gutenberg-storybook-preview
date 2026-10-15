import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
import { n as init_global_css_defense_module, t as global_css_defense_module_default } from "./global-css-defense.module-CSCRyOGP.js";
//#region ../packages/ui/src/text/style.module.css
var text, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		text = "_text_12t50_5";
		style_module_default = {
			text,
			"heading-2xl": "_heading-2xl_12t50_12",
			"heading-xl": "_heading-xl_12t50_24",
			"heading-lg": "_heading-lg_12t50_36",
			"heading-md": "_heading-md_12t50_48",
			"heading-sm": "_heading-sm_12t50_60",
			"body-xl": "_body-xl_12t50_73",
			"body-lg": "_body-lg_12t50_85",
			"body-md": "_body-md_12t50_97",
			"body-sm": "_body-sm_12t50_109"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/text/text.tsx
var Text;
function init_text() {
	return (init_text = __esmMin((() => {
		init_useRender(), init_mergeProps();
		init_clsx();
		init_react();
		init_style_module();
		init_global_css_defense_module();
		Text = (0, import_react.forwardRef)(function UnforwardedText({ variant = "body-md", render, className, ...props }, ref) {
			return useRender({
				render,
				defaultTagName: "span",
				ref,
				props: mergeProps(props, { className: clsx(style_module_default.text, global_css_defense_module_default.heading, global_css_defense_module_default.p, style_module_default[variant], className) })
			});
		});
		try {
			Text.__docgenInfo = {
				"description": "A text component for rendering content with predefined typographic variants.\nBuilt on design tokens for consistent typography across the UI.",
				"displayName": "Text",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/text/text.tsx",
				"methods": [],
				"props": {
					"variant": {
						"defaultValue": { "value": "body-md" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/text/types.ts",
							"name": "TextProps"
						}],
						"description": "The typographic variant to apply, controlling font family, size,\nline height, and weight.",
						"name": "variant",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/text/types.ts",
							"name": "TextProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"heading-2xl\" | \"heading-xl\" | \"heading-lg\" | \"heading-md\" | \"heading-sm\" | \"body-xl\" | \"body-lg\" | \"body-md\" | \"body-sm\"",
							"value": [
								{ "value": "\"heading-2xl\"" },
								{ "value": "\"heading-xl\"" },
								{ "value": "\"heading-lg\"" },
								{ "value": "\"heading-md\"" },
								{ "value": "\"heading-sm\"" },
								{ "value": "\"body-xl\"" },
								{ "value": "\"body-lg\"" },
								{ "value": "\"body-md\"" },
								{ "value": "\"body-sm\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/text/types.ts",
							"name": "TextProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/text/types.ts",
							"name": "TextProps"
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
export { init_text as n, Text as t };
