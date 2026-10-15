import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { i as init_index_story, n as Default, t as CurrentOnly } from "./index.story-D7B-4QTq.js";
import { n as init_usage_guidelines_story, r as usage_guidelines_story_exports, t as HierarchySelection } from "./usage-guidelines.story-4YtzogwZ.js";
//#region ../packages/ui/src/breadcrumb/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		p: "p",
		pre: "pre",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { of: usage_guidelines_story_exports }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "breadcrumb-usage-guidelines",
			children: "Breadcrumb usage guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use Breadcrumb to show a hierarchical path to the current page or selected item. Every ancestor must belong to that hierarchy. Commands such as Delete and Duplicate belong in a separate menu." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "page-navigation",
			children: "Page navigation"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "LinkItem" }),
			" ancestors with meaningful destinations followed by exactly one ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CurrentItem" }),
			". Give ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Root" }),
			" an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-label" }),
			" that describes the hierarchy, such as \"Page hierarchy\". This label names the navigation landmark. The current item is not a link and defaults to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-current=\"page\"" }),
			". This follows the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",
				rel: "nofollow",
				children: "APG breadcrumb pattern"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Default }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "hierarchy-selection",
			children: "Hierarchy selection"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonItem" }),
			" ancestors followed by exactly one ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CurrentItem" }),
			" when ancestors select or activate a position in the hierarchy. For example, a block editor can show Document, Group, and Paragraph. Group selects the ancestor block; Document clears selection. Give ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Root" }),
			" a descriptive ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-label" }),
			", such as \"Block hierarchy\". This label names the ordered list; the outer ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "div" }),
			" is a layout wrapper. For either variant, use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-labelledby" }),
			" instead when a visible label is available."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "onClick" }),
			" to update your selection state. If selection should move focus into the editor, do that in your handler. Breadcrumb preserves that focus move."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Set ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-current=\"true\"" }),
			" on ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CurrentItem" }),
			" if selecting an ancestor can leave it as the only item. This keeps the selection list labelled after all button ancestors are removed."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: HierarchySelection }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When using a ref or an event's ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "currentTarget" }),
			", handle both possible elements: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HTMLButtonElement" }),
			" in the visible trail and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HTMLDivElement" }),
			" in the overflow menu. A custom ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "render" }),
			" must support both button and menu-item composition."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "current-only-trails",
			children: "Current-only trails"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A single ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CurrentItem" }),
			" is supported. For page navigation, no ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-current" }),
			" prop is needed. For hierarchy selection, set ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-current=\"true\"" }),
			" explicitly:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-tsx",
			children: "<Breadcrumb.Root aria-label=\"Block hierarchy\">\n	<Breadcrumb.CurrentItem aria-current=\"true\">\n		Document\n	</Breadcrumb.CurrentItem>\n</Breadcrumb.Root>\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: CurrentOnly }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "supported-collections",
			children: "Supported collections"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use only links or only buttons for ancestors within one trail. Keep exactly one final ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CurrentItem" }),
			", use non-empty text labels, and give items generated from arrays stable React keys."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "truncated-labels",
			children: "Truncated labels"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Keep labels concise and leave enough space to read them where possible. Truncated labels have a tooltip for mouse and keyboard users. Tooltips are unavailable on touch devices, so provide another way to read the full label when it is needed to understand the hierarchy." })
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
function init_usage_guidelines() {
	return (init_usage_guidelines = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_index_story();
		init_usage_guidelines_story();
	})))();
}
//#endregion
init_usage_guidelines();
export { MDXContent as default };
