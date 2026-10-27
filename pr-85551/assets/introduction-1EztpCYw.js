import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { P as JumpToIcon, W as init_dist } from "./components-Dgw1RHIf.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-UtSZlYID.js";
//#region stories/docs/inline-icon.module.scss
var icon, inline_icon_module_default;
function init_inline_icon_module() {
	return (init_inline_icon_module = __esmMin((() => {
		icon = "_icon_cu76x_1";
		inline_icon_module_default = { icon };
	})))();
}
//#endregion
//#region stories/docs/inline-icon.jsx
var import_jsx_dev_runtime, _jsxFileName, InlineIcon;
function init_inline_icon() {
	return (init_inline_icon = __esmMin((() => {
		init_clsx();
		init_inline_icon_module();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/storybook/stories/docs/inline-icon.jsx";
		InlineIcon = ({ icon, className, ...props }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon, {
				"aria-hidden": true,
				className: clsx(inline_icon_module_default.icon, className),
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 3
			}, void 0);
		};
		InlineIcon.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "InlineIcon"
		};
	})))();
}
//#endregion
//#region stories/introduction.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			title: "Introduction",
			name: "page"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "welcome",
			children: "Welcome!"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The WordPress Gutenberg project uses Storybook to view and work with the UI components developed in WordPress packages. Explore the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-introduction--docs",
				children: "WordPress Design System"
			}),
			" in this Storybook: its foundations, tokens, theme, patterns, and components."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "On this interactive site you can browse individual components, their controls, options, and settings in isolation. You can also modify controls and arguments and see the changes right away." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The components displayed on this site can be used in your code to build the editor's UI for your custom blocks or other pages. The example below imports the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
			" component from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Button } from '@wordpress/ui';\n\nexport default function MyButton() {\n	return <Button>Click me</Button>;\n}\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "what-youll-find-here",
			children: "What you'll find here"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The sidebar has one folder per area:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Design System" }),
				" holds what the components are built from: the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-tokens-introduction--docs",
					children: "tokens"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-theme-introduction--docs",
					children: "theme"
				}),
				" from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/theme" }),
				", the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-patterns-destructive-actions--docs",
					children: "patterns"
				}),
				" for composing UI, and the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/foundations-layout--page",
					children: "foundations"
				}),
				" of layout, elevation and radius."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Components" }),
				" documents both component packages. Start with ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-components-introduction--docs",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" })
				}),
				", the recommended toolkit for new UI; ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
				" is the original WordPress UI library, still widely used and still the place to look for what ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
				" does not cover yet. Each component page shows its recommendation status; see ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "#finding-your-way-around",
					children: "Finding your way around"
				}),
				" for the icons."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Editor" }), " documents UI of the WordPress editing experience: the block editor controls, global styles, the image cropper and the media editor."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Widgets" }), " documents the dashboard widget system: its primitives, the dashboard shell, and the grid that lays widgets out."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Playground" }), " runs a whole block editor inside Storybook."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "how-this-site-works",
			children: "How this site works"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Each component's entry point is its ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Docs" }),
			" page, with the documentation and interactive examples. The individual stories (for example \"Default\" or \"Small\") show a single use case on the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Canvas" }),
			", where you can change the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Controls" }),
			" for each prop in the panel below."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To view the source code for a component and its stories on GitHub, click the ",
			(0, import_jsx_runtime.jsx)(InlineIcon, { icon: JumpToIcon }),
			" (Open source file) button in the top toolbar."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "finding-your-way-around",
			children: "Finding your way around"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The sidebar lists everything on this site. Use the search box (⌘K / Ctrl+K) to find a component by name, or open the filter menu next to it to show only the entries with a given tag." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the sidebar, component names carry an icon for every status other than recommended. Recommended has no sidebar icon. The component page still shows a checkmark for that status. The same statuses are available as tags in the filter, so you can, for example, show recommended components only." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: `
| Icon | Tag                       | Meaning                                                                          |
| ---- | ------------------------- | -------------------------------------------------------------------------------- |
| —    | \`use-recommended\`         | Use this component for new UI.                                                   |
| ⚠️   | \`use-with-caution\`        | Use with care; check the notes on the component page.                            |
| 🚫   | \`use-not-recommended\`     | Do not use for new UI. The component page points at the recommended alternative. |
| ❓   | \`use-unaudited\`           | Not audited yet against the design system.                                       |
| 🧪   | \`status-experimental\`     | Under active development, may change in future releases.                         |
| 🔒   | \`status-private\`          | Locked as a private API, not for use outside Gutenberg.                          |
` }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Hover an icon in the sidebar for the same description. Each component page also shows its status at the top." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "running-it-locally",
			children: "Running it locally"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use the following command in the top-level Gutenberg directory:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-bash",
			children: "npm run storybook:dev\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "using-it-with-ai-agents",
			children: "Using it with AI agents"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-using-with-ai--docs",
				children: "WordPress Design System MCP Server"
			}),
			" gives AI agents direct, machine-readable access to the component documentation, examples, and design tokens available on this site. Agents can use it to find recommended components and valid tokens."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-using-with-ai--docs",
				children: "package README"
			}),
			" covers installation for Claude Code, Codex, Cursor, VS Code and Claude Desktop."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When a component, token, or page doesn't meet your need, people and agents alike are expected to report it rather than work around it quietly. ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-contributing--docs",
				children: "Contributing to the Design System"
			}),
			" explains how to report a shortcoming and how to fix it at the source."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "resources-to-learn-more",
			children: "Resources to learn more"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developer.wordpress.org/block-editor/contributors/design/design-system-packages/",
				rel: "nofollow",
				children: "Working with WordPress Design System packages"
			}), " in the Block Editor Handbook."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/WordPress/gutenberg/tree/trunk/packages/eslint-plugin/docs/rules",
					rel: "nofollow",
					children: "ESLint rules for the design system"
				}),
				": ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/eslint-plugin" }),
				" warns when your code uses a component that is no longer recommended or a design token that does not exist."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://storybook.js.org/",
				rel: "nofollow",
				children: "Storybook.js.org"
			}), ", the tool this site is built with."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-contributing--docs",
				children: "Contributing to the Design System"
			}), ": how to report a shortcoming and start fixing it."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Open issues for the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/WordPress/gutenberg/issues?q=is%3Aopen+is%3Aissue+label%3A%22Design+System%22",
					rel: "nofollow",
					children: "design system"
				}),
				" and for ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://github.com/WordPress/gutenberg/issues?q=is%3Aopen+is%3Aissue+label%3A%22%5BPackage%5D+Components%22",
					rel: "nofollow",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" })
				}),
				" in the Gutenberg repository."
			] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = {
		...useMDXComponents(),
		...props.components
	};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var import_jsx_runtime;
function init_introduction() {
	return (init_introduction = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_dist();
		init_inline_icon();
	})))();
}
//#endregion
init_introduction();
export { MDXContent as default };
