import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-BYo9IBDH.js";
//#region ../packages/components/src/menu/stories/best-practices.mdx
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
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
			id: "menu",
			children: "Menu"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "when-to-use-a-menu",
			children: ["When to use a ", (0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			" when you want users to:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Choose an action or change a setting from a list, AND" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Only see the available choices contextually." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			" is a React component to render an expandable menu of buttons. It is similar in purpose to a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<select>" }),
			" element, with the distinction that it does not maintain a value. Instead, each option behaves as an action button."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If you need to display all the available options at all times, consider using a Toolbar instead. Use a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			" to display a list of actions after the user interacts with a button."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Do" }),
			"\nUse a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			" to display a list of actions after the user interacts with an icon."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Don’t" }),
			" use a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			" for important actions that should always be visible. Use a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Toolbar" }),
			" instead."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Don’t" }),
			"\nDon’t use a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			" for frequently used actions. Use a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Toolbar" }),
			" instead."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "behavior",
			children: "Behavior"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Generally, the parent button should indicate that interacting with it will show a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The parent button should retain the same visual styling regardless of whether the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			" is displayed or not."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "placement",
			children: "Placement"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			" should typically appear directly below, or below and to the left of, the parent button. If there isn’t enough space below to display the full ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Menu" }),
			", it can be displayed instead above the parent button."
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
