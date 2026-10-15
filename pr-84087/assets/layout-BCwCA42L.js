import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region stories/foundations/static/areas.svg
var areas_default;
function init_areas() {
	return (init_areas = __esmMin((() => {
		areas_default = new URL("areas-BYLwdjJ0.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region stories/foundations/static/page-layout-example-1.svg
var page_layout_example_1_default;
function init_page_layout_example_1() {
	return (init_page_layout_example_1 = __esmMin((() => {
		page_layout_example_1_default = new URL("page-layout-example-1-DxD6AiTD.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region stories/foundations/static/page-layout-example-2.svg
var page_layout_example_2_default;
function init_page_layout_example_2() {
	return (init_page_layout_example_2 = __esmMin((() => {
		page_layout_example_2_default = new URL("page-layout-example-2-BgPbg7Sz.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region stories/foundations/static/page-layout-example-3.svg
var page_layout_example_3_default;
function init_page_layout_example_3() {
	return (init_page_layout_example_3 = __esmMin((() => {
		page_layout_example_3_default = new URL("page-layout-example-3-DpXBsLd_.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region stories/foundations/static/page-layout-example-4.svg
var page_layout_example_4_default;
function init_page_layout_example_4() {
	return (init_page_layout_example_4 = __esmMin((() => {
		page_layout_example_4_default = new URL("page-layout-example-4-CYI2eVKo.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region stories/foundations/layout.mdx
function _createMdxContent(props) {
	const _components = {
		em: "em",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		h4: "h4",
		li: "li",
		ol: "ol",
		p: "p",
		strong: "strong",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "foundations-layout",
			title: "Design System/Foundations/Layout",
			name: "page"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "layout",
			children: "Layout"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Layout defines the arrangement and structure of admin pages, content sections, and other visual elements." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "page-areas",
			children: "Page areas"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"At the highest level admin pages are comprised of ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "areas" }),
			", that can be arranged in different ways."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)("img", {
			src: areas_default,
			alt: "Area definition diagram",
			width: "100%"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Sidebar" }), " –\xA0Primary admin navigation UI including notifications and access to Command Palette. Always positioned on the left of the page (assuming left-to-right language)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Content Frame" }), " –\xA0A container for admin page content e.g. data views, settings forms, etc."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Preview Frame" }), " – Displays a preview of the site homepage, a post or page in focus, or something more abstract like a template or Style Book. In many cases it can be clicked to open the editor."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "area-compositions",
			children: "Area compositions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Areas can be combined in different ways depending on the use case. Here are some examples." }),
		"\n",
		(0, import_jsx_runtime.jsx)("table", { children: (0, import_jsx_runtime.jsxs)("tbody", { children: [(0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsxs)("td", {
			style: {
				verticalAlign: "top",
				width: "50%"
			},
			children: [
				(0, import_jsx_runtime.jsx)(_components.h4, {
					id: "sidebar-content-frame-and-preview-frame",
					children: "Sidebar, Content Frame and Preview Frame"
				}),
				(0, import_jsx_runtime.jsx)("img", {
					src: page_layout_example_1_default,
					alt: "Diagram illustrating an example of the 'Sidebar, Content Frame and Preview Frame' arrangement",
					width: "100%"
				}),
				(0, import_jsx_runtime.jsx)(_components.p, { children: "A demonstration of this arrangement can be found in the Styles section of the Site Editor, and in the Pages and Templates sections when List layout is selected." })
			]
		}), (0, import_jsx_runtime.jsxs)("td", {
			style: {
				verticalAlign: "top",
				width: "50%"
			},
			children: [
				(0, import_jsx_runtime.jsx)(_components.h4, {
					id: "sidebar-and-preview-frame",
					children: "Sidebar and Preview Frame"
				}),
				(0, import_jsx_runtime.jsx)("img", {
					src: page_layout_example_2_default,
					alt: "Diagram illustrating an example of the 'Sidebar and Preview Frame' arrangement",
					width: "100%"
				}),
				(0, import_jsx_runtime.jsx)(_components.p, { children: "A demonstration of this arrangement can be found in the Design section." })
			]
		})] }), (0, import_jsx_runtime.jsxs)("tr", { children: [(0, import_jsx_runtime.jsxs)("td", {
			style: {
				verticalAlign: "top",
				width: "50%"
			},
			children: [
				(0, import_jsx_runtime.jsx)(_components.h4, {
					id: "sidebar-and-content-frame",
					children: "Sidebar and Content Frame"
				}),
				(0, import_jsx_runtime.jsx)("img", {
					src: page_layout_example_3_default,
					alt: "Diagram illustrating an example of the 'Sidebar and Content Frame' arrangement",
					width: "100%"
				}),
				(0, import_jsx_runtime.jsx)(_components.p, { children: "A demonstration of this arrangement can be found in the Patterns and Templates sections of the Site Editor, or in the Pages section when Table or Grid layout are selected." })
			]
		}), (0, import_jsx_runtime.jsxs)("td", {
			style: {
				verticalAlign: "top",
				width: "50%"
			},
			children: [
				(0, import_jsx_runtime.jsx)(_components.h4, {
					id: "sidebar-and-multiple-content-frames",
					children: "Sidebar and multiple Content Frames"
				}),
				(0, import_jsx_runtime.jsx)("img", {
					src: page_layout_example_4_default,
					alt: "Diagram illustrating an example of the 'Sidebar and multiple Content Frames' arrangement",
					width: "100%"
				}),
				(0, import_jsx_runtime.jsx)(_components.p, { children: "Multiple content frames can be utilised as required." })
			]
		})] })] }) })
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
function init_layout() {
	return (init_layout = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_areas();
		init_page_layout_example_1();
		init_page_layout_example_2();
		init_page_layout_example_3();
		init_page_layout_example_4();
	})))();
}
//#endregion
init_layout();
export { MDXContent as default };
