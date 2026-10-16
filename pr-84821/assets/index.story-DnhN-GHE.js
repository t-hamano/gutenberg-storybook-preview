import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as displayShortcut, r as init_build_module, s as shortcutAriaLabel, t as ariaKeyShortcut } from "./build-module-LJKyBiy6.js";
import { t as cog_default } from "./cog-CjNOotlb.js";
import { t as copy_default } from "./copy-WdV9Qmy9.js";
import { t as download_default } from "./download-OAdBEzAR.js";
import { n as pencil_default } from "./pencil-HT-eVzJe.js";
import { n as plus_default } from "./plus-BflIATCD.js";
import { n as trash_default } from "./trash-gQXYBeE5.js";
import { n as upload_default } from "./upload-C8T9oGCk.js";
import { n as wordpress_default } from "./wordpress-Dmkk4E44.js";
import { c as init_positioner, s as Positioner } from "./root-DwiwsHOD.js";
import { n as init_provider, t as Provider } from "./provider-DouIj-Pm.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-1MUTgcAK.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/ui/src/icon-button/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Outline, Minimal, Neutral, NeutralOutline, Disabled, WithDifferentIcons, Pressed, EXAMPLE_SHORTCUT_OBJECT, WithShortcut, WithCustomPositioner;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$1();
		init_build_module();
		init_icon_button();
		init_provider(), init_positioner();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon-button/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/IconButton",
			id: "design-system-components-iconbutton",
			component: IconButton,
			argTypes: { "aria-pressed": { control: { type: "boolean" } } },
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended for use alongside components from `@wordpress/components`, pending review of style consistency with `@wordpress/components`, text overflow behavior, and overlays compatibility. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		Default = { args: {
			icon: cog_default,
			label: "Settings"
		} };
		Outline = {
			...Default,
			args: {
				...Default.args,
				variant: "outline"
			}
		};
		Minimal = {
			...Default,
			args: {
				...Default.args,
				variant: "minimal"
			}
		};
		Neutral = {
			...Default,
			args: {
				...Default.args,
				tone: "neutral",
				label: "Settings"
			}
		};
		NeutralOutline = {
			...Default,
			args: {
				...Default.args,
				tone: "neutral",
				variant: "outline",
				label: "Settings"
			}
		};
		Disabled = {
			...Default,
			args: {
				...Default.args,
				disabled: true,
				label: "Settings"
			}
		};
		WithDifferentIcons = {
			...Default,
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					gap: "1rem",
					alignItems: "center",
					flexWrap: "wrap"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
						...args,
						icon: wordpress_default,
						label: "WordPress"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
						...args,
						icon: plus_default,
						label: "Add"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
						...args,
						icon: pencil_default,
						label: "Edit"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
						...args,
						icon: trash_default,
						label: "Delete"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
						...args,
						icon: download_default,
						label: "Download"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 5
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, {
						...args,
						icon: upload_default,
						label: "Upload"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 5
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 96,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 3
			}, void 0)
		};
		Pressed = {
			...Default,
			args: {
				...Default.args,
				tone: "neutral",
				variant: "minimal",
				label: "Toggle Settings",
				"aria-pressed": true
			}
		};
		EXAMPLE_SHORTCUT_OBJECT = {
			displayShortcut: displayShortcut.primary("c"),
			ariaKeyShortcut: ariaKeyShortcut.primary("c"),
			label: shortcutAriaLabel.primary("c")
		};
		WithShortcut = {
			...Default,
			args: {
				...Default.args,
				icon: copy_default,
				label: "Copy",
				shortcut: EXAMPLE_SHORTCUT_OBJECT
			}
		};
		WithCustomPositioner = {
			...Default,
			args: {
				...Default.args,
				positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioner, { side: "right" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 15
				}, void 0)
			}
		};
		try {
			Pressed.__docgenInfo = {
				"description": "The pressed state is only available for buttons with `tone=\"neutral\"` and\n`variant=\"minimal\"` and can be toggled via the `aria-pressed` HTML attribute.",
				"displayName": "Pressed",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon-button/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithShortcut.__docgenInfo = {
				"description": "Use the `displayShortcut`, `ariaKeyShortcut`, and `shortcutAriaLabel` helpers\nfrom `@wordpress/keycodes` to create the visual, ARIA-compatible, and\nhuman-readable representations of the shortcut.",
				"displayName": "WithShortcut",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon-button/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithCustomPositioner.__docgenInfo = {
				"description": "Customize where the tooltip appears relative to the button by passing a\n`<Tooltip.Positioner />` element with a `side` to the `positioner` prop.",
				"displayName": "WithCustomPositioner",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/icon-button/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    icon: cog,\n    label: 'Settings'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Outline.parameters = {
			...Outline.parameters,
			docs: {
				...Outline.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    variant: 'outline'\n  }\n}",
					...Outline.parameters?.docs?.source
				}
			}
		};
		Minimal.parameters = {
			...Minimal.parameters,
			docs: {
				...Minimal.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    variant: 'minimal'\n  }\n}",
					...Minimal.parameters?.docs?.source
				}
			}
		};
		Neutral.parameters = {
			...Neutral.parameters,
			docs: {
				...Neutral.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    tone: 'neutral',\n    label: 'Settings'\n  }\n}",
					...Neutral.parameters?.docs?.source
				}
			}
		};
		NeutralOutline.parameters = {
			...NeutralOutline.parameters,
			docs: {
				...NeutralOutline.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    tone: 'neutral',\n    variant: 'outline',\n    label: 'Settings'\n  }\n}",
					...NeutralOutline.parameters?.docs?.source
				}
			}
		};
		Disabled.parameters = {
			...Disabled.parameters,
			docs: {
				...Disabled.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    disabled: true,\n    label: 'Settings'\n  }\n}",
					...Disabled.parameters?.docs?.source
				}
			}
		};
		WithDifferentIcons.parameters = {
			...WithDifferentIcons.parameters,
			docs: {
				...WithDifferentIcons.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  render: args => <Tooltip.Provider>\n            <div style={{\n      display: 'flex',\n      gap: '1rem',\n      alignItems: 'center',\n      flexWrap: 'wrap'\n    }}>\n                <IconButton {...args} icon={wordpress} label=\"WordPress\" />\n                <IconButton {...args} icon={plus} label=\"Add\" />\n                <IconButton {...args} icon={pencil} label=\"Edit\" />\n                <IconButton {...args} icon={trash} label=\"Delete\" />\n                <IconButton {...args} icon={download} label=\"Download\" />\n                <IconButton {...args} icon={upload} label=\"Upload\" />\n            </div>\n        </Tooltip.Provider>\n}",
					...WithDifferentIcons.parameters?.docs?.source
				}
			}
		};
		Pressed.parameters = {
			...Pressed.parameters,
			docs: {
				...Pressed.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    tone: 'neutral',\n    variant: 'minimal',\n    label: 'Toggle Settings',\n    'aria-pressed': true\n  }\n}",
					...Pressed.parameters?.docs?.source
				},
				description: {
					story: "The pressed state is only available for buttons with `tone=\"neutral\"` and\n`variant=\"minimal\"` and can be toggled via the `aria-pressed` HTML attribute.",
					...Pressed.parameters?.docs?.description
				}
			}
		};
		WithShortcut.parameters = {
			...WithShortcut.parameters,
			docs: {
				...WithShortcut.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    icon: copy,\n    label: 'Copy',\n    shortcut: EXAMPLE_SHORTCUT_OBJECT\n  }\n}",
					...WithShortcut.parameters?.docs?.source
				},
				description: {
					story: "Use the `displayShortcut`, `ariaKeyShortcut`, and `shortcutAriaLabel` helpers\nfrom `@wordpress/keycodes` to create the visual, ARIA-compatible, and\nhuman-readable representations of the shortcut.",
					...WithShortcut.parameters?.docs?.description
				}
			}
		};
		WithCustomPositioner.parameters = {
			...WithCustomPositioner.parameters,
			docs: {
				...WithCustomPositioner.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    positioner: <Tooltip.Positioner side=\"right\" />\n  }\n}",
					...WithCustomPositioner.parameters?.docs?.source
				},
				description: {
					story: "Customize where the tooltip appears relative to the button by passing a\n`<Tooltip.Positioner />` element with a `side` to the `positioner` prop.",
					...WithCustomPositioner.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Disabled, Minimal, Neutral, NeutralOutline, Outline, Pressed, WithCustomPositioner, WithDifferentIcons, WithShortcut, meta as default };
