import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
//#region ../packages/ui/src/visually-hidden/style.module.css
var style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		style_module_default = { "visually-hidden": "_visually-hidden_1batu_3" };
	})))();
}
//#endregion
//#region ../packages/ui/src/visually-hidden/visually-hidden.tsx
var VisuallyHidden;
function init_visually_hidden() {
	return (init_visually_hidden = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_react();
		init_style_module();
		VisuallyHidden = (0, import_react.forwardRef)(function UnforwardedVisuallyHidden({ render, ...restProps }, ref) {
			return useRender({
				render,
				ref,
				props: mergeProps({ className: style_module_default["visually-hidden"] }, restProps, { "data-visually-hidden": "" })
			});
		});
		try {
			VisuallyHidden.__docgenInfo = {
				"description": "Visually hides content while keeping it accessible to screen readers.\nUseful when providing context that's only meaningful to assistive technology.\n\nRenders a `<div>` by default. Use the `render` prop to swap the\nunderlying element while preserving the visually-hidden behavior.\n\n## Composing with other components\n\nWhen composing with another component that uses the `render` prop\npattern, keep `VisuallyHidden` as the **host** (outer component) and\npass the other component via `render`. This keeps the other\ncomponent's HTML element and semantics intact, while `VisuallyHidden`\nonly adds its hiding styles:\n\n```jsx\n// OtherComponent keeps its semantic element (e.g. <h2>).\n<VisuallyHidden render={ <OtherComponent /> }>\n  Accessible text\n</VisuallyHidden>\n```",
				"displayName": "VisuallyHidden",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/visually-hidden/visually-hidden.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/visually-hidden/types.ts",
							"name": "VisuallyHiddenProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/visually-hidden/types.ts",
							"name": "VisuallyHiddenProps"
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
export { init_visually_hidden as n, VisuallyHidden as t };
