import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/ui/src/tabs/stories/best-practices.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		p: "p",
		pre: "pre",
		strong: "strong",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "design-system-components-tabs-best-practices",
			title: "Components/@wordpress-ui/Tabs/Best Practices"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "tabs",
			children: "Tabs"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "uncontrolled-mode",
			children: "Uncontrolled Mode"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabs" }),
			" can be used in an uncontrolled mode, where the component manages its own state. In this mode, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultValue" }),
			" prop can be used to set the initially selected tab."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Tabs } from '@wordpress/ui';\n\nconst MyUncontrolledTabs = () => (\n	<Tabs.Root\n		onValueChange={ ( tab ) => console.log( 'New selected tab: ', tab ) }\n		defaultValue=\"tab2\"\n	>\n		<Tabs.List>\n			<Tabs.Tab value=\"tab1\">Tab 1</Tabs.Tab>\n			<Tabs.Tab value=\"tab2\">Tab 2</Tabs.Tab>\n			<Tabs.Tab value=\"tab3\">Tab 3</Tabs.Tab>\n		</Tabs.List>\n		<Tabs.Panel value=\"tab1\">\n			<p>Selected tab: Tab 1</p>\n		</Tabs.Panel>\n		<Tabs.Panel value=\"tab2\">\n			<p>Selected tab: Tab 2</p>\n		</Tabs.Panel>\n		<Tabs.Panel value=\"tab3\">\n			<p>Selected tab: Tab 3</p>\n		</Tabs.Panel>\n	</Tabs.Root>\n);\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "controlled-mode",
			children: "Controlled Mode"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Tabs can also be used in a controlled mode, where the parent component uses the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onValueChange" }),
			" props to control tab selection. In this mode, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultValue" }),
			" prop will be ignored if it is provided. To indicate that no tabs are selected, pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			" to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "value" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-tsx",
			children: "import { useState } from 'react';\nimport { Tabs } from '@wordpress/ui';\n\nconst MyControlledTabs = () => {\n	const [ selectedTabId, setSelectedTabId ] = useState<\n		string | undefined | null\n	>( null );\n\n	return (\n		<Tabs.Root\n			value={ selectedTabId }\n			onValueChange={ ( newSelectedTabId ) => {\n				setSelectedTabId( newSelectedTabId );\n				console.log( 'Selecting tab', newSelectedTabId );\n			} }\n		>\n			<Tabs.List>\n				<Tabs.Tab value=\"tab1\">Tab 1</Tabs.Tab>\n				<Tabs.Tab value=\"tab2\">Tab 2</Tabs.Tab>\n				<Tabs.Tab value=\"tab3\">Tab 3</Tabs.Tab>\n			</Tabs.List>\n			<Tabs.Panel value=\"tab1\">\n				<p>Selected tab: Tab 1</p>\n			</Tabs.Panel>\n			<Tabs.Panel value=\"tab2\">\n				<p>Selected tab: Tab 2</p>\n			</Tabs.Panel>\n			<Tabs.Panel value=\"tab3\">\n				<p>Selected tab: Tab 3</p>\n			</Tabs.Panel>\n		</Tabs.Root>\n	);\n};\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "using-tabs-with-links",
			children: [
				"Using ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabs" }),
				" with links"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The semantics implemented by the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabs" }),
			" component don't align well with the semantics needed by a list of links. Furthermore, end users usually expect every link to be tabbable, while ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabs.List" }),
			" is a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://w3c.github.io/aria/#composite",
				rel: "nofollow",
				children: "composite"
			}),
			" widget acting as a single tab stop."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For these reasons, even if the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabs" }),
			" component is fully extensible, we don't recommend using ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabs" }),
			" with links, and we don't currently provide any related Storybook example."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "We may provide a dedicated component for tabs-like links in the future based on the feedback received." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "panel-and-sidebar-tabs",
			children: "Panel and sidebar tabs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When tabs sit at the top of a panel or sidebar (below a screen header and above padded content) use a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "full-bleed tab list with a light bottom border" }),
			". The border should span the full width of the panel. The tab labels should stay only as wide as their text."
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
function init_best_practices() {
	return (init_best_practices = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
	})))();
}
//#endregion
init_best_practices();
export { MDXContent as default };
