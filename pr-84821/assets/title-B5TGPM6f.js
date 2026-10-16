import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as init_PopoverTitle, t as PopoverTitle } from "./PopoverTitle-BcpXJNqn.js";
import { n as init_PopoverDescription, t as PopoverDescription } from "./PopoverDescription-CPONP9zt.js";
import { n as init_text, t as Text } from "./text-B-YUcwFZ.js";
import { d as init_context, f as usePopoverValidationContext, g as style_module_default, h as init_style_module } from "./trigger-DiBr5L6G.js";
//#region ../packages/ui/src/popover/description.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Description;
function init_description() {
	return (init_description = __esmMin((() => {
		init_PopoverDescription();
		init_react();
		init_text();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/description.tsx";
		Description = (0, import_react.forwardRef)(function PopoverDescription$1({ children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
				ref,
				variant: "body-md",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PopoverDescription, { ...props }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 17,
					columnNumber: 14
				}, this),
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 14,
				columnNumber: 4
			}, this);
		});
		try {
			Description.__docgenInfo = {
				"description": "Renders an optional paragraph that describes the popover content.\n\nThe rendered element is linked to the popup via `aria-describedby`.",
				"displayName": "Description",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/description.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "DescriptionProps"
						}],
						"description": "The description content to be rendered.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "DescriptionProps"
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
//#region ../packages/ui/src/popover/title.tsx
var import_jsx_dev_runtime, _jsxFileName, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_PopoverTitle();
		init_use_merge_refs();
		init_react();
		init_text();
		init_context();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/title.tsx";
		Title = (0, import_react.forwardRef)(function PopoverTitle$1({ children, ...props }, forwardedRef) {
			const validationContext = usePopoverValidationContext();
			const internalRef = (0, import_react.useRef)(null);
			const mergedRef = useMergeRefs([internalRef, forwardedRef]);
			(0, import_react.useEffect)(() => {
				if (validationContext) return validationContext.registerTitle(internalRef.current);
			}, [validationContext]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				ref: mergedRef,
				variant: "heading-xl",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverTitle, { ...props }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 14
				}, this),
				className: style_module_default.title,
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 4
			}, this);
		});
		try {
			Title.__docgenInfo = {
				"description": "Renders a heading that labels the popover for accessibility.\n\n**Required** — every popover must include a `Popover.Title`, even if\nvisually hidden. The rendered element is linked to the popup via\n`aria-labelledby`. Uses the `heading-xl` text variant, matching Dialog.\n\nTo visually hide the title while keeping it accessible, wrap it with\n`VisuallyHidden` using the `render` prop:\n\n```jsx\n<VisuallyHidden render={ <Popover.Title /> }>\n  Accessible title text\n</VisuallyHidden>\n```",
				"displayName": "Title",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/popover/title.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
							"name": "TitleProps"
						}],
						"description": "The title content to be rendered.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/popover/types.ts",
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
export { init_description as i, init_title as n, Description as r, Title as t };
