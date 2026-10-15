import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
import { n as search_default } from "./search-CMBDzVQT.js";
import { n as init_button, t as Button } from "./button-CQjSoBjH.js";
import { n as init_icon$1, t as Icon$1 } from "./icon-DD-nOZ1R.js";
import { n as init_text, t as Text } from "./text-7MhcSnkB.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/empty-state/style.module.css
var root, visual, icon, title, description, actions, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		root = "_root_mw4bs_5";
		visual = "_visual_mw4bs_17";
		icon = "_icon_mw4bs_26";
		title = "_title_mw4bs_33";
		description = "_description_mw4bs_37";
		actions = "_actions_mw4bs_42";
		style_module_default = {
			root,
			visual,
			icon,
			title,
			description,
			actions
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/empty-state/root.tsx
var Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_useRender(), init_mergeProps();
		init_clsx();
		init_react();
		init_style_module();
		Root = (0, import_react.forwardRef)(function EmptyStateRoot({ render, ...props }, ref) {
			const className = clsx(style_module_default.root);
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className }, props)
			});
		});
		try {
			Root.__docgenInfo = {
				"description": "The root container for an empty state component.",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/root.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateRootProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateRootProps"
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
//#region ../packages/ui/src/empty-state/visual.tsx
var Visual;
function init_visual() {
	return (init_visual = __esmMin((() => {
		init_useRender(), init_mergeProps();
		init_clsx();
		init_react();
		init_style_module();
		Visual = (0, import_react.forwardRef)(function EmptyStateVisual({ render, ...props }, ref) {
			const className = clsx(style_module_default.visual);
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className }, props)
			});
		});
		try {
			Visual.__docgenInfo = {
				"description": "A container for visual content in an empty state (e.g., icons, illustrations).\nProvides appropriate spacing and alignment for visual elements.",
				"displayName": "Visual",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/visual.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateVisualProps"
						}],
						"description": "The visual content of the empty state (e.g., icon, illustration).",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateVisualProps"
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
//#region ../packages/ui/src/empty-state/icon.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Icon;
function init_icon() {
	return (init_icon = __esmMin((() => {
		init_clsx();
		init_react();
		init_icon$1();
		init_visual();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/icon.tsx";
		Icon = (0, import_react.forwardRef)(function EmptyStateIcon({ icon, className, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Visual, {
				ref,
				className: clsx(style_module_default.icon, className),
				...restProps,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Icon$1, { icon }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 20,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 15,
				columnNumber: 4
			}, this);
		});
		try {
			Icon.__docgenInfo = {
				"description": "An icon visual for empty states. Renders an icon with styling treatment for\nempty states.",
				"displayName": "Icon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/icon.tsx",
				"methods": [],
				"props": {
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateIconProps"
						}],
						"description": "The icon to render.",
						"name": "icon",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateIconProps"
						},
						"required": true,
						"tags": {},
						"type": { "name": "ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>>" }
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
//#region ../packages/ui/src/empty-state/title.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, DEFAULT_TAG$1, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/title.tsx";
		DEFAULT_TAG$1 = /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("h2", {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 7,
			columnNumber: 21
		}, void 0);
		Title = (0, import_react.forwardRef)(function EmptyStateTitle({ render = DEFAULT_TAG$1, className, children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Text, {
				ref,
				variant: "heading-lg",
				render,
				className: clsx(style_module_default.title, className),
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 4
			}, this);
		});
		try {
			Title.__docgenInfo = {
				"description": "The title is a short heading that communicates the empty state.",
				"displayName": "Title",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/title.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateTitleProps"
						}],
						"description": "The title text of the empty state.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateTitleProps"
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
						"defaultValue": { "value": "<h2 />" },
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
//#region ../packages/ui/src/empty-state/description.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_TAG, Description;
function init_description() {
	return (init_description = __esmMin((() => {
		init_clsx();
		init_react();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/description.tsx";
		DEFAULT_TAG = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("p", {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 7,
			columnNumber: 21
		}, void 0);
		Description = (0, import_react.forwardRef)(function EmptyStateDescription({ render = DEFAULT_TAG, className, children, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Text, {
				ref,
				variant: "body-md",
				render,
				className: clsx(style_module_default.description, className),
				...props,
				children
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 21,
				columnNumber: 3
			}, this);
		});
		try {
			Description.__docgenInfo = {
				"description": "The description text for an empty state, providing additional context and\nguidance on what the user should do next.",
				"displayName": "Description",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/description.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateDescriptionProps"
						}],
						"description": "The description text of the empty state.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateDescriptionProps"
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
						"defaultValue": { "value": "<p />" },
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
//#region ../packages/ui/src/empty-state/actions.tsx
var Actions;
function init_actions() {
	return (init_actions = __esmMin((() => {
		init_useRender(), init_mergeProps();
		init_clsx();
		init_react();
		init_style_module();
		Actions = (0, import_react.forwardRef)(function EmptyStateActions({ render, ...props }, ref) {
			const className = clsx(style_module_default.actions);
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className }, props)
			});
		});
		try {
			Actions.__docgenInfo = {
				"description": "A container for action buttons in an empty state. Actions are optional, and\ncan include a primary and optional secondary action button.",
				"displayName": "Actions",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/actions.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateActionsProps"
						}],
						"description": "The action buttons for the empty state.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/empty-state/types.ts",
							"name": "EmptyStateActionsProps"
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
//#region ../packages/ui/src/empty-state/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithCustomVisual;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_button();
		init_root(), init_visual(), init_icon(), init_title(), init_description(), init_actions();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/empty-state/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/EmptyState",
			id: "design-system-components-emptystate",
			component: Root,
			subcomponents: {
				"EmptyState.Visual": Visual,
				"EmptyState.Icon": Icon,
				"EmptyState.Title": Title,
				"EmptyState.Description": Description,
				"EmptyState.Actions": Actions
			},
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: search_default }, "icon", false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "No results found" }, "title", false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Try adjusting your search or filter to find what you're looking for." }, "description", false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Actions, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				children: "Clear filters"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 5
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: "Add item" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 5
			}, void 0)] }, "actions", true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 4
			}, void 0)
		] } };
		WithCustomVisual = { args: { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Visual, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				width: "50",
				height: "50",
				viewBox: "0 0 50 50",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: "25",
					cy: "25",
					r: "25",
					fill: "currentColor"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 6
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 5
			}, void 0) }, "visual", false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "All caught up!" }, "title", false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "You've completed all your tasks. Great work!" }, "description", false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Actions, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: "Create new task" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 5
			}, void 0) }, "actions", false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 4
			}, void 0)
		] } };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<EmptyState.Icon icon={search} key=\"icon\" />, <EmptyState.Title key=\"title\">No results found</EmptyState.Title>, <EmptyState.Description key=\"description\">\n                Try adjusting your search or filter to find what you&apos;re\n                looking for.\n            </EmptyState.Description>, <EmptyState.Actions key=\"actions\">\n                <Button variant=\"outline\">Clear filters</Button>\n                <Button>Add item</Button>\n            </EmptyState.Actions>]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithCustomVisual.parameters = {
			...WithCustomVisual.parameters,
			docs: {
				...WithCustomVisual.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<EmptyState.Visual key=\"visual\">\n                <svg width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"currentColor\" />\n                </svg>\n            </EmptyState.Visual>, <EmptyState.Title key=\"title\">All caught up!</EmptyState.Title>, <EmptyState.Description key=\"description\">\n                You&apos;ve completed all your tasks. Great work!\n            </EmptyState.Description>, <EmptyState.Actions key=\"actions\">\n                <Button>Create new task</Button>\n            </EmptyState.Actions>]\n  }\n}",
					...WithCustomVisual.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithCustomVisual, meta as default };
