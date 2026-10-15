import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_text, t as Text } from "./text-7MhcSnkB.js";
//#region ../packages/ui/src/card/style.module.css
var root, header, content, fullbleed, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_b6pd5_5";
		header = "_header_b6pd5_23";
		content = "_content_b6pd5_24";
		fullbleed = "_fullbleed_b6pd5_38";
		style_module_default = {
			root,
			header,
			content,
			fullbleed
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/card/root.tsx
var Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_clsx();
		init_react();
		init_resets_module();
		init_style_module();
		Root = (0, import_react.forwardRef)(function Card({ render, ...restProps }, ref) {
			const mergedClassName = clsx(style_module_default.root, resets_module_default["box-sizing"]);
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: mergedClassName }, restProps)
			});
		});
		try {
			Root.__docgenInfo = {
				"description": "A visually contained surface that groups related content and actions.\n\n```jsx\nimport { Card } from '@wordpress/ui';\n\nfunction MyComponent() {\n	return (\n		<Card.Root>\n			<Card.Header>\n				<Card.Title>Heading</Card.Title>\n			</Card.Header>\n			<Card.Content>\n				<p>Main content here.</p>\n			</Card.Content>\n		</Card.Root>\n	);\n}\n```",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
							"name": "RootProps"
						}],
						"description": "The content to be rendered inside the card.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
							"name": "RootProps"
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
//#region ../packages/ui/src/card/header.tsx
var Header;
function init_header() {
	return (init_header = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_react();
		init_style_module();
		Header = (0, import_react.forwardRef)(function CardHeader({ render, ...props }, ref) {
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: style_module_default.header }, props)
			});
		});
		try {
			Header.__docgenInfo = {
				"description": "A structural container for the card's heading area, typically containing\n`Card.Title`.",
				"displayName": "Header",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/header.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
							"name": "HeaderProps"
						}],
						"description": "The content to be rendered inside the header.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
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
//#region ../packages/ui/src/card/content.tsx
var Content;
function init_content() {
	return (init_content = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_react();
		init_style_module();
		Content = (0, import_react.forwardRef)(function CardContent({ render, ...props }, ref) {
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: style_module_default.content }, props)
			});
		});
		try {
			Content.__docgenInfo = {
				"description": "The main content area of the card.",
				"displayName": "Content",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/content.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
							"name": "ContentProps"
						}],
						"description": "The content to be rendered inside the content area.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
							"name": "ContentProps"
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
//#region ../packages/ui/src/card/full-bleed.tsx
var FullBleed;
function init_full_bleed() {
	return (init_full_bleed = __esmMin((() => {
		init_mergeProps(), init_useRender();
		init_react();
		init_style_module();
		FullBleed = (0, import_react.forwardRef)(function CardFullBleed({ render, ...props }, ref) {
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: style_module_default.fullbleed }, props)
			});
		});
		try {
			FullBleed.__docgenInfo = {
				"description": "A container that breaks out of the card's padding to span edge-to-edge.\nUseful for full-width images, dividers, or embedded content.\n\nAdditional edge-bumping behavior based on placement:\n\n- As the **first child** of `Card.Header`, it extends flush to the card's\n  top edge — ideal for hero images.\n- As the **only child** of `Card.Content`, it extends flush to the card's\n  top edge when `Content` is the first card section, and to the bottom edge\n  when it is the last.\n\nInter-sibling spacing inside `Card.Header` / `Card.Content` is consumer-\nmanaged. To add space between a hero `FullBleed` and the following\nsiblings, compose the parent with `Stack` via the `render` prop:\n`<Card.Header render={ <Stack direction=\"column\" gap=\"lg\" /> }>`. This\nkeeps `FullBleed` a direct child of `Card.Header` so the edge-bump still\nfires, while `Stack` provides the gap.\n\nInside `CollapsibleCard`, place full-bleed media in `CollapsibleCard.Content`\n(not the header). The trigger/panel gap is preserved by design.\n\nMust be used as a direct child of `Card.Content` or `Card.Header`.",
				"displayName": "FullBleed",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/full-bleed.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
							"name": "FullBleedProps"
						}],
						"description": "The content to be rendered edge-to-edge, breaking out of the\ncard's padding.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
							"name": "FullBleedProps"
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
//#region ../packages/ui/src/card/title.tsx
var import_jsx_dev_runtime, _jsxFileName, DEFAULT_TAG, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_react();
		init_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/title.tsx";
		DEFAULT_TAG = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 5,
			columnNumber: 21
		}, void 0);
		Title = (0, import_react.forwardRef)(function CardTitle({ render = DEFAULT_TAG, children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				ref,
				variant: "heading-lg",
				render,
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 4
			}, this);
		});
		try {
			Title.__docgenInfo = {
				"description": "The title for a card. Renders as a `<div>` by default — use the `render`\nprop to swap in a semantic heading element when appropriate.",
				"displayName": "Title",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/card/title.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
							"name": "TitleProps"
						}],
						"description": "The title text for the card.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/card/types.ts",
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
						"defaultValue": { "value": "<div />" },
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
export { Content as a, init_header as c, init_full_bleed as i, Root as l, init_title as n, init_content as o, FullBleed as r, Header as s, Title as t, init_root as u };
