import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
//#region ../packages/ui/src/stack/style.module.css
var stack, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		stack = "_stack_1l0tx_5";
		style_module_default = { stack };
	})))();
}
//#endregion
//#region ../packages/ui/src/stack/stack.tsx
var gapTokens, Stack;
function init_stack() {
	return (init_stack = __esmMin((() => {
		init_useRender(), init_mergeProps();
		init_react();
		init_style_module();
		gapTokens = {
			xs: "var(--wpds-dimension-gap-xs, 4px)",
			sm: "var(--wpds-dimension-gap-sm, 8px)",
			md: "var(--wpds-dimension-gap-md, 12px)",
			lg: "var(--wpds-dimension-gap-lg, 16px)",
			xl: "var(--wpds-dimension-gap-xl, 24px)",
			"2xl": "var(--wpds-dimension-gap-2xl, 32px)",
			"3xl": "var(--wpds-dimension-gap-3xl, 40px)"
		};
		Stack = (0, import_react.forwardRef)(function UnforwardedStack({ direction, gap, align, justify, wrap, render, ...props }, ref) {
			const style = {
				gap: gap && gapTokens[gap],
				alignItems: align,
				justifyContent: justify,
				flexDirection: direction,
				flexWrap: wrap
			};
			return useRender({
				render,
				ref,
				props: mergeProps(props, {
					style,
					className: style_module_default.stack
				})
			});
		});
		try {
			Stack.__docgenInfo = {
				"description": "A flexible layout component using CSS Flexbox for consistent spacing and alignment.\nBuilt on design tokens for predictable spacing values.",
				"displayName": "Stack",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/stack/stack.tsx",
				"methods": [],
				"props": {
					"direction": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The direction of the stack.",
						"name": "direction",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"row\" | Globals | \"column\"",
							"value": [
								{ "value": "\"row\"" },
								{ "value": "\"inherit\"" },
								{ "value": "\"-moz-initial\"" },
								{ "value": "\"initial\"" },
								{ "value": "\"revert\"" },
								{ "value": "\"revert-layer\"" },
								{ "value": "\"unset\"" },
								{ "value": "\"column\"" }
							]
						}
					},
					"gap": {
						"defaultValue": { "value": "undefined" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The amount of space between each child element using design system tokens.",
						"name": "gap",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "GapSize",
							"value": [
								{ "value": "\"sm\"" },
								{ "value": "\"md\"" },
								{ "value": "\"lg\"" },
								{ "value": "\"xs\"" },
								{ "value": "\"xl\"" },
								{ "value": "\"2xl\"" },
								{ "value": "\"3xl\"" }
							]
						}
					},
					"align": {
						"defaultValue": { "value": "'initial'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The alignment of the stack items along the cross axis.",
						"name": "align",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "AlignItems" }
					},
					"justify": {
						"defaultValue": { "value": "'initial'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The alignment of the stack items along the main axis.",
						"name": "justify",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "JustifyContent" }
					},
					"wrap": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "Whether the stack items should wrap to the next line.",
						"name": "wrap",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"wrap\" | Globals | \"nowrap\"",
							"value": [
								{ "value": "\"inherit\"" },
								{ "value": "\"wrap\"" },
								{ "value": "\"-moz-initial\"" },
								{ "value": "\"initial\"" },
								{ "value": "\"revert\"" },
								{ "value": "\"revert-layer\"" },
								{ "value": "\"unset\"" },
								{ "value": "\"nowrap\"" }
							]
						}
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/stack/types.ts",
							"name": "StackProps"
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
export { init_stack as n, Stack as t };
