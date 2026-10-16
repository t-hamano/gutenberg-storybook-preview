import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region stories/components/introduction.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "components-packages-introduction",
			title: "Components/Introduction"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "components",
			children: "Components"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"WordPress components currently live in two npm packages while the component library moves incrementally toward a cohesive design system. Both packages remain in use because ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			" doesn't provide an equivalent for every component in ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When choosing a component, start with ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-introduction--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" })
			}),
			". If it doesn't include a suitable recommended component, check ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/components-introduction--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" })
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Recommendations are made component by component, not for an entire package. Each component page displays a status icon and, where needed, notes that explain the recommendation:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"✅ ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Recommended" }),
				": Preferred for new work."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"⚠️ ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Use with caution" }),
				": Review the notes before using it."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"🚫 ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Not recommended" }),
				": Choose the recommended alternative."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"❓ ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Unaudited" }),
				": The component hasn't been reviewed yet."
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
	})))();
}
//#endregion
init_introduction();
export { MDXContent as default };
