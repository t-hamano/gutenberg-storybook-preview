import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as displayShortcut, r as init_build_module, s as shortcutAriaLabel, t as ariaKeyShortcut } from "./build-module-LJKyBiy6.js";
import { n as wordpress_default } from "./wordpress-BwlgBeE7.js";
import { i as useKeyboardShortcutProps, n as KeyboardShortcutDisplay, r as init_keyboard_shortcut, t as KeyboardShortcutDescription } from "./keyboard-shortcut-C_zXjoAg.js";
import { n as init_button, t as Button } from "./button--ei7vTao.js";
import { a as Popup, i as init_trigger, n as init_root, o as init_popup, r as Trigger, t as Root } from "./root-CKrUEL-b.js";
import { r as init_build_module$1 } from "./library.story-CbQx3MQ6.js";
//#region ../packages/ui/src/button/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Outline, Minimal, Compact, Small, Neutral, NeutralOutline, Unstyled, AllTonesAndVariants, WithIcon, Loading, Pressed, WithKeyboardShortcut;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module$1();
		init_build_module();
		init_keyboard_shortcut();
		init_button();
		init_root(), init_trigger(), init_popup();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Button",
			id: "design-system-components-button",
			component: Button,
			subcomponents: { "Button.Icon": Button.Icon },
			argTypes: { "aria-pressed": { control: { type: "boolean" } } },
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended for use alongside components from `@wordpress/components`, pending review of style consistency with `@wordpress/components` and text overflow behavior. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		Default = { args: { children: "Button" } };
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
		Compact = {
			...Default,
			args: {
				...Default.args,
				size: "compact"
			}
		};
		Small = {
			...Default,
			args: {
				...Default.args,
				size: "small"
			}
		};
		Neutral = {
			...Default,
			args: {
				...Default.args,
				tone: "neutral"
			}
		};
		NeutralOutline = {
			...Default,
			args: {
				...Default.args,
				tone: "neutral",
				variant: "outline"
			}
		};
		Unstyled = {
			...Default,
			args: {
				...Default.args,
				variant: "unstyled"
			}
		};
		AllTonesAndVariants = {
			...Default,
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "max-content repeat(2, max-content)",
					color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { textAlign: "center" },
						children: "Resting"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { textAlign: "center" },
						children: "Disabled"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 4
					}, void 0),
					["brand", "neutral"].map((tone) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [
						"solid",
						"outline",
						"minimal",
						"unstyled"
					].map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								paddingInlineEnd: "1rem",
								display: "flex",
								alignItems: "center"
							},
							children: [
								variant,
								", ",
								tone
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 8
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								padding: "0.5rem 1rem",
								display: "flex",
								alignItems: "center"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								...args,
								tone,
								variant
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 9
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 8
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							style: {
								padding: "0.5rem 1rem",
								display: "flex",
								alignItems: "center"
							},
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								...args,
								tone,
								variant,
								disabled: true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 9
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 145,
							columnNumber: 8
						}, void 0)
					] }, variant, true, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 7
					}, void 0)) }, tone, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 5
					}, void 0))
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 3
			}, void 0)
		};
		WithIcon = {
			...Default,
			args: {
				...Default.args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button.Icon, { icon: wordpress_default }, "icon", false, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 15
				}, void 0), "Button"]
			}
		};
		Loading = {
			...Default,
			args: {
				...Default.args,
				loading: true,
				loadingAnnouncement: "Saving data"
			}
		};
		Pressed = {
			...Default,
			args: {
				...Default.args,
				tone: "neutral",
				variant: "minimal",
				"aria-pressed": true
			}
		};
		WithKeyboardShortcut = {
			args: { children: "Save" },
			render: ({ children, "aria-describedby": consumerDescribedBy, "aria-keyshortcuts": consumerKeyShortcuts, ...args }) => {
				const shortcut = {
					displayShortcut: displayShortcut.primary("s"),
					ariaKeyShortcut: ariaKeyShortcut.primary("s"),
					label: shortcutAriaLabel.primary("s")
				};
				const { descriptionId, targetProps } = useKeyboardShortcutProps({
					"aria-describedby": consumerDescribedBy,
					"aria-keyshortcuts": consumerKeyShortcuts,
					shortcut
				});
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
					render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { ...args }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 15
					}, void 0),
					...targetProps,
					children: [children, descriptionId && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcutDescription, {
						descriptionId,
						shortcut
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 234,
						columnNumber: 7
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 228,
					columnNumber: 5
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popup, { children: [
					children,
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyboardShortcutDisplay, { shortcut }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 242,
						columnNumber: 6
					}, void 0)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 240,
					columnNumber: 5
				}, void 0)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 227,
					columnNumber: 4
				}, void 0);
			}
		};
		try {
			Pressed.__docgenInfo = {
				"description": "The pressed state is only available for buttons with `tone=\"neutral\"` and\n`variant=\"minimal\"` and can be toggled via the `aria-pressed` HTML attribute.",
				"displayName": "Pressed",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithKeyboardShortcut.__docgenInfo = {
				"description": "`Button` has no dedicated `shortcut` prop. Use the keyboard shortcut\nutilities to compose a visual hint in the tooltip, `aria-keyshortcuts` for\nassistive technology, and a visually hidden description. Consumers remain\nresponsible for registering the shortcut and handling the corresponding\nkeyboard event.",
				"displayName": "WithKeyboardShortcut",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: 'Button'\n  }\n}",
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
		Compact.parameters = {
			...Compact.parameters,
			docs: {
				...Compact.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    size: 'compact'\n  }\n}",
					...Compact.parameters?.docs?.source
				}
			}
		};
		Small.parameters = {
			...Small.parameters,
			docs: {
				...Small.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    size: 'small'\n  }\n}",
					...Small.parameters?.docs?.source
				}
			}
		};
		Neutral.parameters = {
			...Neutral.parameters,
			docs: {
				...Neutral.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    tone: 'neutral'\n  }\n}",
					...Neutral.parameters?.docs?.source
				}
			}
		};
		NeutralOutline.parameters = {
			...NeutralOutline.parameters,
			docs: {
				...NeutralOutline.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    tone: 'neutral',\n    variant: 'outline'\n  }\n}",
					...NeutralOutline.parameters?.docs?.source
				}
			}
		};
		Unstyled.parameters = {
			...Unstyled.parameters,
			docs: {
				...Unstyled.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    variant: 'unstyled'\n  }\n}",
					...Unstyled.parameters?.docs?.source
				}
			}
		};
		AllTonesAndVariants.parameters = {
			...AllTonesAndVariants.parameters,
			docs: {
				...AllTonesAndVariants.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  render: args => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'max-content repeat(2, max-content)',\n    color: 'var(--wpds-color-foreground-content-neutral)'\n  }}>\n            <div></div>\n            <div style={{\n      textAlign: 'center'\n    }}>Resting</div>\n            <div style={{\n      textAlign: 'center'\n    }}>Disabled</div>\n            {(['brand', 'neutral'] as const).map(tone => <Fragment key={tone}>\n                    {(['solid', 'outline', 'minimal', 'unstyled'] as const).map(variant => <Fragment key={variant}>\n                            <div style={{\n          paddingInlineEnd: '1rem',\n          display: 'flex',\n          alignItems: 'center'\n        }}>\n                                {variant}, {tone}\n                            </div>\n                            <div style={{\n          padding: '0.5rem 1rem',\n          display: 'flex',\n          alignItems: 'center'\n        }}>\n                                <Button {...args} tone={tone} variant={variant} />\n                            </div>\n                            <div style={{\n          padding: '0.5rem 1rem',\n          display: 'flex',\n          alignItems: 'center'\n        }}>\n                                <Button {...args} tone={tone} variant={variant} disabled />\n                            </div>\n                        </Fragment>)}\n                </Fragment>)}\n        </div>\n}",
					...AllTonesAndVariants.parameters?.docs?.source
				}
			}
		};
		WithIcon.parameters = {
			...WithIcon.parameters,
			docs: {
				...WithIcon.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: [<Button.Icon icon={wordpress} key=\"icon\" />, 'Button']\n  }\n}",
					...WithIcon.parameters?.docs?.source
				}
			}
		};
		Loading.parameters = {
			...Loading.parameters,
			docs: {
				...Loading.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    loading: true,\n    loadingAnnouncement: 'Saving data'\n  }\n}",
					...Loading.parameters?.docs?.source
				}
			}
		};
		Pressed.parameters = {
			...Pressed.parameters,
			docs: {
				...Pressed.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    tone: 'neutral',\n    variant: 'minimal',\n    'aria-pressed': true\n  }\n}",
					...Pressed.parameters?.docs?.source
				},
				description: {
					story: "The pressed state is only available for buttons with `tone=\"neutral\"` and\n`variant=\"minimal\"` and can be toggled via the `aria-pressed` HTML attribute.",
					...Pressed.parameters?.docs?.description
				}
			}
		};
		WithKeyboardShortcut.parameters = {
			...WithKeyboardShortcut.parameters,
			docs: {
				...WithKeyboardShortcut.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: 'Save'\n  },\n  render: ({\n    children,\n    'aria-describedby': consumerDescribedBy,\n    'aria-keyshortcuts': consumerKeyShortcuts,\n    ...args\n  }) => {\n    const shortcut = {\n      displayShortcut: displayShortcut.primary('s'),\n      ariaKeyShortcut: ariaKeyShortcut.primary('s'),\n      label: shortcutAriaLabel.primary('s')\n    };\n    const {\n      descriptionId,\n      targetProps\n    } = useKeyboardShortcutProps({\n      'aria-describedby': consumerDescribedBy,\n      'aria-keyshortcuts': consumerKeyShortcuts,\n      shortcut\n    });\n    return <Tooltip.Root>\n                <Tooltip.Trigger render={<Button {...args} />} {...targetProps}>\n                    {children}\n                    {descriptionId && <KeyboardShortcutDescription descriptionId={descriptionId} shortcut={shortcut} />}\n                </Tooltip.Trigger>\n                <Tooltip.Popup>\n                    {children}{' '}\n                    <KeyboardShortcutDisplay shortcut={shortcut} />\n                </Tooltip.Popup>\n            </Tooltip.Root>;\n  }\n}",
					...WithKeyboardShortcut.parameters?.docs?.source
				},
				description: {
					story: "`Button` has no dedicated `shortcut` prop. Use the keyboard shortcut\nutilities to compose a visual hint in the tooltip, `aria-keyshortcuts` for\nassistive technology, and a visually hidden description. Consumers remain\nresponsible for registering the shortcut and handling the corresponding\nkeyboard event.",
					...WithKeyboardShortcut.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllTonesAndVariants, Compact, Default, Loading, Minimal, Neutral, NeutralOutline, Outline, Pressed, Small, Unstyled, WithIcon, WithKeyboardShortcut, meta as default };
