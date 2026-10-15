import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story--SAw5SY_.js";
//#region ../packages/components/src/tabs/stories/best-practices.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		em: "em",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		p: "p",
		pre: "pre",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			of: index_story_exports,
			name: "Best Practices"
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
			"Tabs can be used in an uncontrolled mode, where the component manages its own state. In this mode, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultTabId" }),
			" prop can be used to set the initially selected tab. If this prop is not set, the first tab will be selected by default. In addition, in most cases where the currently active tab becomes disabled or otherwise unavailable, uncontrolled mode will automatically fall back to selecting the first available tab."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { Tabs } from '@wordpress/components';\n\nconst onSelect = ( tabName ) => {\n	console.log( 'Selecting tab', tabName );\n};\n\nconst MyUncontrolledTabs = () => (\n	<Tabs onSelect={ onSelect } defaultTabId=\"tab2\">\n		<Tabs.TabList>\n			<Tabs.Tab tabId=\"tab1\" title=\"Tab 1\">\n				Tab 1\n			</Tabs.Tab>\n			<Tabs.Tab tabId=\"tab2\" title=\"Tab 2\">\n				Tab 2\n			</Tabs.Tab>\n			<Tabs.Tab tabId=\"tab3\" title=\"Tab 3\">\n				Tab 3\n			</Tabs.Tab>\n		</Tabs.TabList>\n		<Tabs.TabPanel tabId=\"tab1\">\n			<p>Selected tab: Tab 1</p>\n		</Tabs.TabPanel>\n		<Tabs.TabPanel tabId=\"tab2\">\n			<p>Selected tab: Tab 2</p>\n		</Tabs.TabPanel>\n		<Tabs.TabPanel tabId=\"tab3\">\n			<p>Selected tab: Tab 3</p>\n		</Tabs.TabPanel>\n	</Tabs>\n);\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "controlled-mode",
			children: "Controlled Mode"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Tabs can also be used in a controlled mode, where the parent component specifies the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "selectedTabId" }),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onSelect" }),
			" props to control tab selection. In this mode, the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "defaultTabId" }),
			" prop will be ignored if it is provided. If the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "selectedTabId" }),
			" is ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "null" }),
			", no tab is selected. In this mode, if the currently selected tab becomes disabled or otherwise unavailable, the component will ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "not" }),
			" fall back to another available tab, leaving the controlling component in charge of implementing the desired logic."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-tsx",
			children: "import { Tabs } from '@wordpress/components';\n\nconst [ selectedTabId, setSelectedTabId ] = useState<\n	string | undefined | null\n>();\n\nconst onSelect = ( tabName ) => {\n	console.log( 'Selecting tab', tabName );\n};\n\nconst MyControlledTabs = () => (\n	<Tabs\n		selectedTabId={ selectedTabId }\n		onSelect={ ( selectedId ) => {\n			setSelectedTabId( selectedId );\n			onSelect( selectedId );\n		} }\n	>\n		<Tabs.TabList>\n			<Tabs.Tab tabId=\"tab1\" title=\"Tab 1\">\n				Tab 1\n			</Tabs.Tab>\n			<Tabs.Tab tabId=\"tab2\" title=\"Tab 2\">\n				Tab 2\n			</Tabs.Tab>\n			<Tabs.Tab tabId=\"tab3\" title=\"Tab 3\">\n				Tab 3\n			</Tabs.Tab>\n		</Tabs.TabList>\n		<Tabs.TabPanel tabId=\"tab1\">\n			<p>Selected tab: Tab 1</p>\n		</Tabs.TabPanel>\n		<Tabs.TabPanel tabId=\"tab2\">\n			<p>Selected tab: Tab 2</p>\n		</Tabs.TabPanel>\n		<Tabs.TabPanel tabId=\"tab3\">\n			<p>Selected tab: Tab 3</p>\n		</Tabs.TabPanel>\n	</Tabs>\n);\n"
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
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabs.Tablist" }),
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
		init_index_story();
	})))();
}
//#endregion
init_best_practices();
export { MDXContent as default };
