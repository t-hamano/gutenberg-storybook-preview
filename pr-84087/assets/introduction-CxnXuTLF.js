import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/widget-dashboard/src/stories/introduction.md?raw
var introduction_default;
function init_introduction() {
	return (init_introduction = __esmMin((() => {
		introduction_default = "# Widget Dashboard\n\n<div class=\"callout callout-alert\">\nThis package is still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.\n</div>\n\nStateless rendering engine for widget dashboards. `WidgetDashboard` renders an editable grid of widget instances behind a consumer-controlled edit mode: drag-to-reorder, resize, a modal inserter, per-widget settings, and command-palette integration.\n\n\n## What it does not own\n\n-   **The contract.** What a widget _is_, _asks_, and _shows_ belongs to primitives, layer by layer. See _Widget Primitives / Anatomy_.\n-   **Data.** The engine is stateless. Widget types arrive through `widgetTypes`; the consumer owns `layout` and its persistence.\n-   **Permissions.** Who may customize the dashboard or insert a widget type is the application's to decide; it answers through `WidgetDashboard.Policy`. See _Policy_.\n\nWidgets are one _concept_ the admin renders, among materials and surfaces shared across screens.\nFor that broader vocabulary, see [the admin materials and surfaces discussion](https://github.com/WordPress/gutenberg/issues/70913).\n";
	})))();
}
//#endregion
//#region ../packages/widget-dashboard/src/stories/introduction.mdx
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "widget-dashboard-introduction",
			title: "Widgets/Dashboard/Introduction"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: introduction_default })
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
function init_introduction$1() {
	return (init_introduction$1 = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_introduction();
	})))();
}
//#endregion
init_introduction$1();
export { MDXContent as default };
