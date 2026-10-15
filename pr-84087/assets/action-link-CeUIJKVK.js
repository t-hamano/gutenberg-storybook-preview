import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { a as mergeProps, r as init_mergeProps } from "./useRenderElement-QwAlaybP.js";
import { n as useRender, t as init_useRender } from "./useRender-CcjNad8x.js";
import { t as caution_default } from "./caution-DEVqqtaA.js";
import { n as published_default, r as error_default } from "./published-BuOJO-QD.js";
import { t as info_default } from "./info-CB8DsEiH.js";
import { n as resets_module_default, t as init_resets_module } from "./resets.module-CJil9Bz6.js";
import { n as init_button, t as Button } from "./button-CQjSoBjH.js";
import { n as init_icon, t as Icon } from "./icon-DD-nOZ1R.js";
import { n as init_text, t as Text } from "./text-7MhcSnkB.js";
import { n as init_link, t as Link } from "./link-BEx2TFXH.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/notice/style.module.css
var notice, icon, title, description, actions, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		notice = "_notice_12nj9_5";
		icon = "_icon_12nj9_24";
		title = "_title_12nj9_31";
		description = "_description_12nj9_39";
		actions = "_actions_12nj9_47";
		style_module_default = {
			notice,
			icon,
			title,
			description,
			actions,
			"action-button": "_action-button_12nj9_61",
			"action-link": "_action-link_12nj9_65",
			"close-icon": "_close-icon_12nj9_79",
			"is-info": "_is-info_12nj9_85",
			"is-warning": "_is-warning_12nj9_92",
			"is-success": "_is-success_12nj9_99",
			"is-error": "_is-error_12nj9_106",
			"is-action-button-outline": "_is-action-button-outline_12nj9_131",
			"is-action-button-minimal": "_is-action-button-minimal_12nj9_131"
		};
	})))();
}
//#endregion
//#region ../packages/ui/src/notice/root.tsx
var import_jsx_dev_runtime$4, _jsxFileName$4, icons, Root;
function init_root() {
	return (init_root = __esmMin((() => {
		init_react();
		init_build_module();
		init_useRender(), init_mergeProps();
		init_clsx();
		init_icon();
		init_resets_module();
		init_style_module();
		import_jsx_dev_runtime$4 = require_jsx_dev_runtime();
		_jsxFileName$4 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/root.tsx";
		icons = {
			neutral: null,
			info: info_default,
			warning: caution_default,
			success: published_default,
			error: error_default
		};
		Root = (0, import_react.forwardRef)(function Notice({ intent = "neutral", children, icon, render, ...restProps }, ref) {
			const iconElement = icon === null ? null : icon ?? icons[intent];
			const mergedClassName = clsx(style_module_default.notice, style_module_default[`is-${intent}`], resets_module_default["box-sizing"]);
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({
					className: mergedClassName,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(import_jsx_dev_runtime$4.Fragment, { children: [children, iconElement && /* @__PURE__ */ (0, import_jsx_dev_runtime$4.jsxDEV)(Icon, {
						className: style_module_default.icon,
						icon: iconElement
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 65,
						columnNumber: 8
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 62,
						columnNumber: 6
					}, this)
				}, restProps)
			});
		});
		try {
			Root.__docgenInfo = {
				"description": "A notice component that communicates system status and provides actions.\nIt does not announce its content to assistive technology. Consumers are\nresponsible for announcing dynamic updates, for example with `speak()` from\n`@wordpress/a11y`.\n\n```jsx\nimport { Notice } from '@wordpress/ui';\n\nfunction MyComponent() {\n	return (\n		<Notice.Root intent=\"info\">\n			<Notice.Title>Heading</Notice.Title>\n			<Notice.Description>Body text</Notice.Description>\n			<Notice.Actions>\n				<Notice.ActionButton>Action</Notice.ActionButton>\n			</Notice.Actions>\n			<Notice.CloseIconButton onClick={() => {}} />\n		</Notice.Root>\n	);\n}\n```",
				"displayName": "Root",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/root.tsx",
				"methods": [],
				"props": {
					"intent": {
						"defaultValue": { "value": "neutral" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "RootProps"
						}],
						"description": "The semantic intent of the notice, communicating its meaning through color.\nAvailable intents: neutral, info, warning, success, and error.",
						"name": "intent",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "NoticeIntent",
							"value": [
								{ "value": "\"neutral\"" },
								{ "value": "\"warning\"" },
								{ "value": "\"success\"" },
								{ "value": "\"error\"" },
								{ "value": "\"info\"" }
							]
						}
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "RootProps"
						}],
						"description": "Custom icon to override the default intent icon. Pass `null` to hide the icon.\nDefault icons by intent: neutral (none), info (info), warning (caution),\nsuccess (published), error (error).",
						"name": "icon",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "RootProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>> | null" }
					},
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "RootProps"
						}],
						"description": "The content to be rendered inside the notice.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
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
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/notice/title.tsx
var import_jsx_dev_runtime$3, _jsxFileName$3, Title;
function init_title() {
	return (init_title = __esmMin((() => {
		init_react();
		init_clsx();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$3 = require_jsx_dev_runtime();
		_jsxFileName$3 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/title.tsx";
		Title = (0, import_react.forwardRef)(function NoticeTitle({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$3.jsxDEV)(Text, {
				ref,
				variant: "heading-md",
				className: clsx(style_module_default.title, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$3,
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
//#region ../packages/ui/src/notice/description.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, Description;
function init_description() {
	return (init_description = __esmMin((() => {
		init_react();
		init_clsx();
		init_text();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/description.tsx";
		Description = (0, import_react.forwardRef)(function NoticeDescription({ className, ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Text, {
				ref,
				variant: "body-md",
				className: clsx(style_module_default.description, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 13,
				columnNumber: 4
			}, this);
		});
		try {
			Description.__docgenInfo = {
				"description": "The description text for a notice.",
				"displayName": "Description",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/description.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "DescriptionProps"
						}],
						"description": "The description text of the notice.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
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
//#region ../packages/ui/src/notice/actions.tsx
var Actions;
function init_actions() {
	return (init_actions = __esmMin((() => {
		init_react();
		init_useRender(), init_mergeProps();
		init_style_module();
		Actions = (0, import_react.forwardRef)(function NoticeActions({ render, ...props }, ref) {
			return useRender({
				defaultTagName: "div",
				render,
				ref,
				props: mergeProps({ className: style_module_default.actions }, props)
			});
		});
		try {
			Actions.__docgenInfo = {
				"description": "A container for Notice.ActionButton and Notice.ActionLink.",
				"displayName": "Actions",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/actions.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "ActionsProps"
						}],
						"description": "The action buttons for the notice.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "ActionsProps"
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
//#region ../packages/ui/src/notice/action-button.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, ActionButton;
function init_action_button() {
	return (init_action_button = __esmMin((() => {
		init_react();
		init_clsx();
		init_button();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/action-button.tsx";
		ActionButton = (0, import_react.forwardRef)(function NoticeActionButton({ className, loading, loadingAnnouncement, variant, ...props }, ref) {
			const loadingProps = loading !== void 0 ? {
				loading,
				loadingAnnouncement: loadingAnnouncement ?? ""
			} : {};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
				...props,
				...loadingProps,
				ref,
				size: "compact",
				tone: "neutral",
				variant,
				className: clsx(style_module_default["action-button"], style_module_default[`is-action-button-${variant}`], className)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 21,
				columnNumber: 4
			}, this);
		});
		try {
			ActionButton.__docgenInfo = {
				"description": "An action button for use within Notice.Actions.",
				"displayName": "ActionButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/action-button.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "ActionButtonProps"
						}],
						"description": "The content to be rendered inside the component.",
						"name": "children",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "ActionButtonProps"
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
						"type": { "name": "boolean | \"true\" | \"false\" | \"mixed\"" }
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
					"nativeButton": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						}],
						"description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
						"name": "nativeButton",
						"parent": {
							"fileName": "gutenberg-storybook-preview/node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/types.d.mts",
							"name": "NativeButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"variant": {
						"defaultValue": { "value": "\"solid\"" },
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
							"raw": "\"unstyled\" | \"solid\" | \"minimal\" | \"outline\"",
							"value": [
								{ "value": "\"unstyled\"" },
								{ "value": "\"solid\"" },
								{ "value": "\"minimal\"" },
								{ "value": "\"outline\"" }
							]
						}
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
					"loadingAnnouncement": {
						"defaultValue": null,
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
export { Actions as a, init_description as c, Root as d, init_root as f, init_action_button as i, Title as l, style_module_default as m, init_action_link as n, init_actions as o, init_style_module as p, ActionButton as r, Description as s, ActionLink as t, init_title as u };
