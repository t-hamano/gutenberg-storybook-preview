import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as wordpress_default } from "./wordpress-Brhxv8eP.js";
import { n as init_button_link, t as ButtonLink } from "./button-link-Cy4I0R5t.js";
import { r as init_build_module } from "./library.story-DawnfKTW.js";
//#region ../packages/ui/src/button-link/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, Outline, Minimal, Compact, Small, Neutral, NeutralOutline, Unstyled, AllTonesAndVariants, WithIcon, OpenInNewTab;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_button_link();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/button-link/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/ButtonLink",
			id: "design-system-components-buttonlink",
			component: ButtonLink,
			subcomponents: { "ButtonLink.Icon": ButtonLink.Icon },
			parameters: { componentStatus: {
				status: "use-with-caution",
				whereUsed: "global",
				notes: "Not yet recommended for use alongside components from `@wordpress/components`, pending review of style consistency with `@wordpress/components` and text overflow behavior. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."
			} }
		};
		Default = { args: {
			children: "Link button",
			href: "#"
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
					gridTemplateColumns: "max-content max-content",
					color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { textAlign: "center" },
						children: "Resting"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 4
					}, void 0),
					["brand", "neutral"].map((tone) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [
						"solid",
						"outline",
						"minimal",
						"unstyled"
					].map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
						lineNumber: 107,
						columnNumber: 8
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: {
							padding: "0.5rem 1rem",
							display: "flex",
							alignItems: "center"
						},
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, {
							...args,
							tone,
							variant
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 9
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 8
					}, void 0)] }, variant, true, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 7
					}, void 0)) }, tone, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 5
					}, void 0))
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 3
			}, void 0)
		};
		WithIcon = {
			...Default,
			args: {
				...Default.args,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink.Icon, { icon: wordpress_default }, "icon", false, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 4
				}, void 0), "Link button"]
			}
		};
		OpenInNewTab = { args: {
			children: "Get started",
			href: "https://make.wordpress.org/",
			openInNewTab: true
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: 'Link button',\n    href: '#'\n  }\n}",
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
					originalSource: "{\n  ...Default,\n  render: args => <div style={{\n    display: 'grid',\n    gridTemplateColumns: 'max-content max-content',\n    color: 'var(--wpds-color-foreground-content-neutral)'\n  }}>\n            <div></div>\n            <div style={{\n      textAlign: 'center'\n    }}>Resting</div>\n            {(['brand', 'neutral'] as const).map(tone => <Fragment key={tone}>\n                    {(['solid', 'outline', 'minimal', 'unstyled'] as const).map(variant => <Fragment key={variant}>\n                            <div style={{\n          paddingInlineEnd: '1rem',\n          display: 'flex',\n          alignItems: 'center'\n        }}>\n                                {variant}, {tone}\n                            </div>\n                            <div style={{\n          padding: '0.5rem 1rem',\n          display: 'flex',\n          alignItems: 'center'\n        }}>\n                                <ButtonLink {...args} tone={tone} variant={variant} />\n                            </div>\n                        </Fragment>)}\n                </Fragment>)}\n        </div>\n}",
					...AllTonesAndVariants.parameters?.docs?.source
				}
			}
		};
		WithIcon.parameters = {
			...WithIcon.parameters,
			docs: {
				...WithIcon.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: [<ButtonLink.Icon icon={wordpress} key=\"icon\" />, 'Link button']\n  }\n}",
					...WithIcon.parameters?.docs?.source
				}
			}
		};
		OpenInNewTab.parameters = {
			...OpenInNewTab.parameters,
			docs: {
				...OpenInNewTab.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: 'Get started',\n    href: 'https://make.wordpress.org/',\n    openInNewTab: true\n  }\n}",
					...OpenInNewTab.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllTonesAndVariants, Compact, Default, Minimal, Neutral, NeutralOutline, OpenInNewTab, Outline, Small, Unstyled, WithIcon, meta as default };
