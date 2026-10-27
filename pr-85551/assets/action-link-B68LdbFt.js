import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
import { n as init_text, t as Text } from "./text-wjaOyqYP.js";
import { n as init_link, t as Link } from "./link-DqJvnB9G.js";
import { l as init_style_module, u as style_module_default } from "./action-button-CQHSK6Cp.js";
//#region ../packages/ui/src/notice/title.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_react();
		init_clsx();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/title.tsx";
		Title = (0, import_react.forwardRef)(function NoticeTitle({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
				ref,
				variant: "heading-md",
				className: clsx(style_module_default.title, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 13,
				columnNumber: 4
			}, this);
		});
		try {
			Title.__docgenInfo = {
				"description": "A short heading that communicates the main message of the notice.",
				"displayName": "Title",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/title.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "TitleProps"
						}],
						"description": "The title text of the notice.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
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
//#region ../packages/ui/src/notice/action-link.tsx
var import_jsx_dev_runtime, _jsxFileName, ActionLink;
function init_action_link() {
	return (init_action_link = __esmMin((() => {
		init_clsx();
		init_react();
		init_link();
		init_text();
		init_style_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/action-link.tsx";
		ActionLink = (0, import_react.forwardRef)(function NoticeActionLink({ className, render, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				ref,
				className: clsx(style_module_default["action-link"], className),
				...props,
				variant: "body-md",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					tone: "neutral",
					variant: "default",
					render
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 4
			}, this);
		});
		try {
			ActionLink.__docgenInfo = {
				"description": "An action link for use within Notice.Actions.",
				"displayName": "ActionLink",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/action-link.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "ActionLinkProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "ActionLinkProps"
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_title as i, init_action_link as n, Title as r, ActionLink as t };
