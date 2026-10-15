import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_stack, t as Stack } from "./stack-DYoOf63N.js";
import { n as init_text, t as Text } from "./text-7MhcSnkB.js";
import { n as init_link, t as Link } from "./link-BEx2TFXH.js";
//#region ../packages/ui/src/link/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, OpenInNewTab, AllTonesAndVariants, Inline, Standalone;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_link();
		init_stack();
		init_text();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/link/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-ui/Link",
			id: "design-system-components-link",
			component: Link,
			tags: ["manifest"],
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { args: {
			children: "Learn more",
			href: "#"
		} };
		OpenInNewTab = { args: {
			children: "Visit WordPress.org",
			href: "https://wordpress.org",
			openInNewTab: true
		} };
		AllTonesAndVariants = {
			...Default,
			argTypes: {
				tone: { control: false },
				variant: { control: false }
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
				direction: "column",
				gap: "lg",
				children: ["brand", "neutral"].map((tone) => ["default", "unstyled"].map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
					direction: "column",
					gap: "xs",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						variant: "heading-sm",
						children: [
							tone,
							" tone, ",
							variant,
							" variant"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 7
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						...args,
						tone,
						variant
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 7
					}, void 0)]
				}, `${tone}-${variant}`, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 6
				}, void 0)))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 3
			}, void 0)
		};
		Inline = {
			...Default,
			args: {
				...Default.args,
				children: "inline link"
			},
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				variant: "body-md",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 36
				}, void 0),
				children: [
					"This is a paragraph with an ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { ...args }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 32
					}, void 0),
					" that inherits its typography from the parent Text component."
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 3
			}, void 0)
		};
		Standalone = {
			args: { href: "#" },
			argTypes: { children: { control: false } },
			render: (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
				variant: "body-md",
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 36
				}, void 0),
				children: "A standalone link with body-md typography"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 3
			}, void 0)
		};
		try {
			AllTonesAndVariants.__docgenInfo = {
				"description": "Note: `tone` has no effect on `unstyled` variant",
				"displayName": "AllTonesAndVariants",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/link/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			Standalone.__docgenInfo = {
				"description": "When composing `Text` and `Link` via the `render` prop, keep `Text` as the\nhost and pass `Link` via `render` so the resulting element stays an `<a>`.",
				"displayName": "Standalone",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/link/stories/index.story.tsx",
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
					originalSource: "{\n  args: {\n    children: 'Learn more',\n    href: '#'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		OpenInNewTab.parameters = {
			...OpenInNewTab.parameters,
			docs: {
				...OpenInNewTab.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    children: 'Visit WordPress.org',\n    href: 'https://wordpress.org',\n    openInNewTab: true\n  }\n}",
					...OpenInNewTab.parameters?.docs?.source
				}
			}
		};
		AllTonesAndVariants.parameters = {
			...AllTonesAndVariants.parameters,
			docs: {
				...AllTonesAndVariants.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  argTypes: {\n    tone: {\n      control: false\n    },\n    variant: {\n      control: false\n    }\n  },\n  render: args => <Stack direction=\"column\" gap=\"lg\">\n            {(['brand', 'neutral'] as const).map(tone => (['default', 'unstyled'] as const).map(variant => <Stack direction=\"column\" gap=\"xs\" key={`${tone}-${variant}`}>\n                        <Text variant=\"heading-sm\">\n                            {tone} tone, {variant} variant\n                        </Text>\n                        <Link {...args} tone={tone} variant={variant} />\n                    </Stack>))}\n        </Stack>\n}",
					...AllTonesAndVariants.parameters?.docs?.source
				},
				description: {
					story: "Note: `tone` has no effect on `unstyled` variant",
					...AllTonesAndVariants.parameters?.docs?.description
				}
			}
		};
		Inline.parameters = {
			...Inline.parameters,
			docs: {
				...Inline.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: 'inline link'\n  },\n  render: args => <Text variant=\"body-md\" render={<p />}>\n            This is a paragraph with an <Link {...args} /> that inherits its\n            typography from the parent Text component.\n        </Text>\n}",
					...Inline.parameters?.docs?.source
				}
			}
		};
		Standalone.parameters = {
			...Standalone.parameters,
			docs: {
				...Standalone.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    href: '#'\n  },\n  argTypes: {\n    children: {\n      control: false\n    }\n  },\n  render: args => <Text variant=\"body-md\" render={<Link {...args} />}>\n            A standalone link with body-md typography\n        </Text>\n}",
					...Standalone.parameters?.docs?.source
				},
				description: {
					story: "When composing `Text` and `Link` via the `render` prop, keep `Text` as the\nhost and pass `Link` via `render` so the resulting element stays an `<a>`.",
					...Standalone.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AllTonesAndVariants, Default, Inline, OpenInNewTab, Standalone, meta as default };
