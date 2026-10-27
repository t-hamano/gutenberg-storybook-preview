import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-CPP1ploD.js";
//#region ../packages/dataviews/src/dataviews/stories/best-practices.story.mdx
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
			name: "Best practices"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "data-views",
			children: "Data Views"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Data Views allow users to display and interact with information through different layouts such as table or grid. It includes features like search, filtering, sorting, pagination, and customization options to adjust column order, items per page, and hide columns, enhancing data exploration and flexibility." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A typical flow might be:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Use search and filters to narrow down a large collection." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Adjust the layout and visible fields to match the task (compare, skim, or visually scan)." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Take inline actions on item metadata, or open an editing interface when more detail is needed." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "choosing-a-layout",
			children: "Choosing a layout"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "when-to-use-list",
			children: ["When to use ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "List" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "List" }),
			" layout when:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Content needs the most compact layout" }), ", whether because it's used in a constrained context, or if paired with a preview surface."] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Default information density allows for a reduced set of secondary metadata." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"The view needs to work well in ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "narrow spaces" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "List is a good fit for items like Pages that benefit from a live preview next to the list." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "when-to-use-grid",
			children: ["When to use ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Grid" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Grid" }),
			" layout when:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Visual previews across multiple items at once are important" }), " for recognition (patterns, templates, media, products)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You want a ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "card‑based experience" }),
				", with each item having its own tile (image + metadata)."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You expect more ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "browsing and scanning by look" }),
				" than comparing raw values."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Grid works well when choosing “by look” is more important than comparing precise numbers or dates." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "when-to-use-table",
			children: ["When to use ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Table" })]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use the ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Table" }),
			" layout when:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Users need to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "compare multiple attributes across items" }),
				" at once."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Column headers and alignment" }), " are critical for understanding the data."] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The task involves working with structured data." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Table is ideal for dense, structured information where sorting and scanning down aligned columns is the primary workflow, such as posts or comments where metadata is important for choosing the next action." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "when-to-use-something-else",
			children: "When to use something else"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Data Views are designed for ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "browsing and managing collections" }),
			". In other situations, consider other components in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/dataviews" }),
			" package:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["Use ", (0, import_jsx_runtime.jsx)(_components.code, { children: "DataForm" })] }),
				" when the primary workflow primarily relates to ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "creating or editing a single item" }),
				" at a level that doesn't require a full editor."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["Use ", (0, import_jsx_runtime.jsx)(_components.code, { children: "DataViewsPicker" })] }),
				" when the goal is ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "selecting one or more items" }),
				" and returning that selection to another part of the UI. This is a better fit for dialogs and sidebars where the outcome is a selection, not ongoing management of a collection, e.g. inserting from a media library."
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
var import_jsx_runtime, __namedExportsOrder;
function init_best_practices_story() {
	return (init_best_practices_story = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_index_story();
		__namedExportsOrder = [];
	})))();
}
//#endregion
init_best_practices_story();
export { __namedExportsOrder, MDXContent as default };
