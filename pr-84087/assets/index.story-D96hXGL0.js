import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { o as clsx, s as init_clsx } from "./iframe-D4D-SsYo.js";
import { t as close_small_default } from "./close-small-By1OyhLF.js";
import { n as tip_default } from "./tip-CDeBfvT8.js";
import { n as unseen_default } from "./unseen-rtz9uq14.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-CljljWsV.js";
import { a as Actions, c as init_description, d as Root, f as init_root, i as init_action_button, l as Title, m as style_module_default, n as init_action_link, o as init_actions, p as init_style_module, r as ActionButton, s as Description, t as ActionLink, u as init_title } from "./action-link-CeUIJKVK.js";
import { r as init_build_module$1 } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/notice/close-icon-button.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, CloseIconButton;
function init_close_icon_button() {
	return (init_close_icon_button = __esmMin((() => {
		init_react();
		init_build_module();
		init_build_module$1();
		init_clsx();
		init_icon_button();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/close-icon-button.tsx";
		CloseIconButton = (0, import_react.forwardRef)(function NoticeCloseIconButton({ className, icon = close_small_default, label = __("Dismiss"), ...props }, ref) {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(IconButton, {
				...props,
				ref,
				className: clsx(style_module_default["close-icon"], className),
				variant: "minimal",
				size: "small",
				tone: "neutral",
				icon,
				label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 20,
				columnNumber: 3
			}, this);
		});
		try {
			CloseIconButton.__docgenInfo = {
				"description": "The close button for a notice. Renders an icon button with a close icon.",
				"displayName": "CloseIconButton",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/close-icon-button.tsx",
				"methods": [],
				"props": {
					"label": {
						"defaultValue": { "value": "__( 'Dismiss' )" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "CloseIconButtonProps"
						}],
						"description": "A label describing the button's action, shown as a tooltip and to\nassistive technology.",
						"name": "label",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "CloseIconButtonProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"icon": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "CloseIconButtonProps"
						}],
						"description": "The icon to display in the button.",
						"name": "icon",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/notice/types.ts",
							"name": "CloseIconButtonProps"
						},
						"required": false,
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
					"shortcut": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The keyboard shortcut associated with this button. When provided, the\nshortcut is displayed in the tooltip and announced to assistive technology.\n\n**Note**: This prop is for display and accessibility purposes only — the\nconsumer is responsible for registering the keyboard shortcut and keeping\nits handler synchronized with the button's disabled state.",
						"name": "shortcut",
						"required": false,
						"tags": {},
						"type": { "name": "KeyboardShortcut" }
					},
					"positioner": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/icon-button/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Customize how the tooltip is positioned relative to the button. Accepts\na `<Tooltip.Positioner />` element with custom positioning props\n(`side`, `align`, `sideOffset`, collision settings, etc.). When omitted,\nthe tooltip uses the default placement.",
						"name": "positioner",
						"required": false,
						"tags": {},
						"type": { "name": "ReactElement<Omit<PositionerProps, \"children\">, string | JSXElementConstructor<any>>" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/notice/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Info, Warning, Success, Error, NonDismissible, WithoutIcon, WithoutActions, TitleOnly, DescriptionOnly, CustomIcon, Tip;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$1();
		init_root(), init_title(), init_description(), init_actions(), init_close_icon_button(), init_action_button(), init_action_link();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Notice",
			id: "design-system-components-notice",
			component: Root,
			tags: ["manifest"],
			subcomponents: {
				"Notice.Title": Title,
				"Notice.Description": Description,
				"Notice.Actions": Actions,
				"Notice.CloseIconButton": CloseIconButton,
				"Notice.ActionButton": ActionButton,
				"Notice.ActionLink": ActionLink
			},
			parameters: {
				docs: { description: { component: "Notice does not announce its content automatically. See [Notice announcements](?path=/docs/design-system-components-notice-announcements--docs) for announcement examples and migration from `spokenMessage` and `politeness`." } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Default = { args: { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Notice Title" }, "title", false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Description text with details about this notification." }, "description", false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Actions, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButton, { children: "Primary button" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButton, {
					variant: "outline",
					children: "Secondary button"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 5
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
					href: "#",
					children: "Link"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 5
				}, void 0)
			] }, "actions", true, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 4
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, "closeIconButton", false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 4
			}, void 0)
		] } };
		Info = {
			...Default,
			args: {
				...Default.args,
				intent: "info"
			}
		};
		Warning = {
			...Default,
			args: {
				...Default.args,
				intent: "warning"
			}
		};
		Success = {
			...Default,
			args: {
				...Default.args,
				intent: "success"
			}
		};
		Error = {
			...Default,
			args: {
				...Default.args,
				intent: "error"
			}
		};
		NonDismissible = { args: {
			intent: "warning",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Action Required" }, "title", false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This notice cannot be dismissed by the user." }, "description", false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Actions, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButton, { children: "Take Action" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
					href: "#",
					children: "Visit link"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 5
				}, void 0)] }, "actions", true, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 4
				}, void 0)
			]
		} };
		WithoutIcon = { args: {
			intent: "info",
			icon: null,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "No Icon" }, "title", false, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "This notice has no decorative icon displayed." }, "description", false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, "closeIconButton", false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 4
				}, void 0)
			]
		} };
		WithoutActions = { args: {
			intent: "info",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Simple Notice" }, "title", false, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "A dismissable notice without any action buttons or links." }, "description", false, {
					fileName: _jsxFileName,
					lineNumber: 127,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, "closeIconButton", false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 4
				}, void 0)
			]
		} };
		TitleOnly = { args: { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Just a title" }, "title", false, {
			fileName: _jsxFileName,
			lineNumber: 141,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, "closeIconButton", false, {
			fileName: _jsxFileName,
			lineNumber: 142,
			columnNumber: 4
		}, void 0)] } };
		DescriptionOnly = { args: {
			intent: "info",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Just a description without title or actions." }, "description", false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIconButton, {}, "closeIconButton", false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 4
			}, void 0)]
		} };
		CustomIcon = { args: {
			intent: "info",
			icon: unseen_default,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: "Parent block is hidden on Desktop" }, "description", false, {
				fileName: _jsxFileName,
				lineNumber: 170,
				columnNumber: 4
			}, void 0)]
		} };
		Tip = { args: {
			intent: "info",
			icon: tip_default,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: [
				"While writing, you can press ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { children: "/" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 34
				}, void 0),
				" to quickly insert new blocks."
			] }, "description", true, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 4
			}, void 0)]
		} };
		try {
			NonDismissible.__docgenInfo = {
				"description": "Omit Notice.CloseIconButton to make the notice non-dismissable.",
				"displayName": "NonDismissible",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithoutIcon.__docgenInfo = {
				"description": "Pass `icon={ null }` to hide the default decorative icon.",
				"displayName": "WithoutIcon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TitleOnly.__docgenInfo = {
				"description": "Title only, no description or actions.",
				"displayName": "TitleOnly",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			DescriptionOnly.__docgenInfo = {
				"description": "Description only, no title or actions.",
				"displayName": "DescriptionOnly",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			CustomIcon.__docgenInfo = {
				"description": "Pass a custom icon via the `icon` prop to override the default intent icon.",
				"displayName": "CustomIcon",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Tip.__docgenInfo = {
				"description": "Use an info notice with the tip icon for contextual guidance.",
				"displayName": "Tip",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/notice/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Notice.Title key=\"title\">Notice Title</Notice.Title>, <Notice.Description key=\"description\">\n                Description text with details about this notification.\n            </Notice.Description>, <Notice.Actions key=\"actions\">\n                <Notice.ActionButton>Primary button</Notice.ActionButton>\n                <Notice.ActionButton variant=\"outline\">\n                    Secondary button\n                </Notice.ActionButton>\n                <Notice.ActionLink href=\"#\">Link</Notice.ActionLink>\n            </Notice.Actions>, <Notice.CloseIconButton key=\"closeIconButton\" />]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Info.parameters = {
			...Info.parameters,
			docs: {
				...Info.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'info'\n  }\n}",
					...Info.parameters?.docs?.source
				}
			}
		};
		Warning.parameters = {
			...Warning.parameters,
			docs: {
				...Warning.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'warning'\n  }\n}",
					...Warning.parameters?.docs?.source
				}
			}
		};
		Success.parameters = {
			...Success.parameters,
			docs: {
				...Success.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'success'\n  }\n}",
					...Success.parameters?.docs?.source
				}
			}
		};
		Error.parameters = {
			...Error.parameters,
			docs: {
				...Error.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    intent: 'error'\n  }\n}",
					...Error.parameters?.docs?.source
				}
			}
		};
		NonDismissible.parameters = {
			...NonDismissible.parameters,
			docs: {
				...NonDismissible.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    intent: 'warning',\n    children: [<Notice.Title key=\"title\">Action Required</Notice.Title>, <Notice.Description key=\"description\">\n                This notice cannot be dismissed by the user.\n            </Notice.Description>, <Notice.Actions key=\"actions\">\n                <Notice.ActionButton>Take Action</Notice.ActionButton>\n                <Notice.ActionLink href=\"#\">Visit link</Notice.ActionLink>\n            </Notice.Actions>]\n  }\n}",
					...NonDismissible.parameters?.docs?.source
				},
				description: {
					story: "Omit Notice.CloseIconButton to make the notice non-dismissable.",
					...NonDismissible.parameters?.docs?.description
				}
			}
		};
		WithoutIcon.parameters = {
			...WithoutIcon.parameters,
			docs: {
				...WithoutIcon.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    intent: 'info',\n    icon: null,\n    children: [<Notice.Title key=\"title\">No Icon</Notice.Title>, <Notice.Description key=\"description\">\n                This notice has no decorative icon displayed.\n            </Notice.Description>, <Notice.CloseIconButton key=\"closeIconButton\" />]\n  }\n}",
					...WithoutIcon.parameters?.docs?.source
				},
				description: {
					story: "Pass `icon={ null }` to hide the default decorative icon.",
					...WithoutIcon.parameters?.docs?.description
				}
			}
		};
		WithoutActions.parameters = {
			...WithoutActions.parameters,
			docs: {
				...WithoutActions.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    intent: 'info',\n    children: [<Notice.Title key=\"title\">Simple Notice</Notice.Title>, <Notice.Description key=\"description\">\n                A dismissable notice without any action buttons or links.\n            </Notice.Description>, <Notice.CloseIconButton key=\"closeIconButton\" />]\n  }\n}",
					...WithoutActions.parameters?.docs?.source
				}
			}
		};
		TitleOnly.parameters = {
			...TitleOnly.parameters,
			docs: {
				...TitleOnly.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: [<Notice.Title key=\"title\">Just a title</Notice.Title>, <Notice.CloseIconButton key=\"closeIconButton\" />]\n  }\n}",
					...TitleOnly.parameters?.docs?.source
				},
				description: {
					story: "Title only, no description or actions.",
					...TitleOnly.parameters?.docs?.description
				}
			}
		};
		DescriptionOnly.parameters = {
			...DescriptionOnly.parameters,
			docs: {
				...DescriptionOnly.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    intent: 'info',\n    children: [<Notice.Description key=\"description\">\n                Just a description without title or actions.\n            </Notice.Description>, <Notice.CloseIconButton key=\"closeIconButton\" />]\n  }\n}",
					...DescriptionOnly.parameters?.docs?.source
				},
				description: {
					story: "Description only, no title or actions.",
					...DescriptionOnly.parameters?.docs?.description
				}
			}
		};
		CustomIcon.parameters = {
			...CustomIcon.parameters,
			docs: {
				...CustomIcon.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    intent: 'info',\n    icon: unseen,\n    children: [<Notice.Description key=\"description\">\n                Parent block is hidden on Desktop\n            </Notice.Description>]\n  }\n}",
					...CustomIcon.parameters?.docs?.source
				},
				description: {
					story: "Pass a custom icon via the `icon` prop to override the default intent icon.",
					...CustomIcon.parameters?.docs?.description
				}
			}
		};
		Tip.parameters = {
			...Tip.parameters,
			docs: {
				...Tip.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    intent: 'info',\n    icon: tip,\n    children: [<Notice.Description key=\"description\">\n                While writing, you can press <kbd>/</kbd> to quickly insert new\n                blocks.\n            </Notice.Description>]\n  }\n}",
					...Tip.parameters?.docs?.source
				},
				description: {
					story: "Use an info notice with the tip icon for contextual guidance.",
					...Tip.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CustomIcon, Default, DescriptionOnly, Error, Info, NonDismissible, Success, Tip, TitleOnly, Warning, WithoutActions, WithoutIcon, meta as default };
