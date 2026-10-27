import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region stories/foundations/design-language/static/elevation.svg
var elevation_default;
function init_elevation() {
	return (init_elevation = __esmMin((() => {
		elevation_default = new URL("elevation-Bg6fAdWL.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region stories/foundations/design-language/static/elevation-examples.svg
var elevation_examples_default;
function init_elevation_examples() {
	return (init_elevation_examples = __esmMin((() => {
		elevation_examples_default = new URL("elevation-examples-DSd6d5u5.svg", import.meta.url).href;
	})))();
}
//#endregion
//#region stories/foundations/design-language/elevation.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		li: "li",
		ol: "ol",
		p: "p",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "foundations-design-language-elevation",
			title: "Design System/Foundations/Design Language/Elevation",
			name: "page"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "elevation",
			children: "Elevation"
		}),
		"\n",
		"\n",
		(0, import_jsx_runtime.jsx)("img", {
			src: elevation_default,
			alt: "",
			width: "100%"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Elevation, through the use of shadows, visually indicates the layers where overlapping UI elements reside. Shadows create the illusion of depth, showing how one UI element is positioned above another on the z-axis. Elevation should be used to organize elements, establish a clear hierarchy, and draw focus to key components." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "In the WordPress Design System there are four levels of elevation correlating to specific uses:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)("table", { children: [(0, import_jsx_runtime.jsx)("thead", { children: (0, import_jsx_runtime.jsxs)("tr", { children: [
			(0, import_jsx_runtime.jsx)("th", { children: "Elevation" }),
			(0, import_jsx_runtime.jsx)("th", { children: "Usage" }),
			(0, import_jsx_runtime.jsx)("th", { children: "Examples" })
		] }) }), (0, import_jsx_runtime.jsxs)("tbody", { children: [
			(0, import_jsx_runtime.jsxs)("tr", { children: [
				(0, import_jsx_runtime.jsx)("td", { children: "Extra small" }),
				(0, import_jsx_runtime.jsx)("td", { children: (0, import_jsx_runtime.jsx)(_components.p, { children: "Applied to large sections and containers that group related content\nand controls. These containers may shift or overlap other content\nwithout causing too much visual disruption" }) }),
				(0, import_jsx_runtime.jsx)("td", { children: "Preview Frame, Content Frame" })
			] }),
			(0, import_jsx_runtime.jsxs)("tr", { children: [
				(0, import_jsx_runtime.jsx)("td", { children: "Small" }),
				(0, import_jsx_runtime.jsx)("td", { children: (0, import_jsx_runtime.jsx)(_components.p, { children: "Used for components that provide contextual feedback without being\noverly intrusive. Small elevation is ideal for non-interruptive elements\nthat subtly surface additional information or actions." }) }),
				(0, import_jsx_runtime.jsx)("td", { children: "Tooltips, Snackbars" })
			] }),
			(0, import_jsx_runtime.jsxs)("tr", { children: [
				(0, import_jsx_runtime.jsx)("td", { children: "Medium" }),
				(0, import_jsx_runtime.jsx)("td", { children: (0, import_jsx_runtime.jsx)(_components.p, { children: "Applied to components that offer additional actions to the user. This\nelevation level helps differentiate actionable elements that appear in\ncontext without requiring major focus shifts." }) }),
				(0, import_jsx_runtime.jsx)("td", { children: "Menus, Command Palette" })
			] }),
			(0, import_jsx_runtime.jsxs)("tr", { children: [
				(0, import_jsx_runtime.jsx)("td", { children: "Large" }),
				(0, import_jsx_runtime.jsx)("td", { children: (0, import_jsx_runtime.jsx)(_components.p, { children: "Reserved for components that confirm actions or require decisions, large\nelevation is used for more interruptive elements that demand user attention\nto complete important tasks." }) }),
				(0, import_jsx_runtime.jsx)("td", { children: "Modals" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "accessibility-considerations",
			children: "Accessibility considerations"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Interactive Elements: Elevation can be an important visual cue to indicate which elements are interactive,\nparticularly for folks with monochromatic color blindness. Elevating buttons, handles, and other interactive\nelements makes them stand out, helping users quickly identify where they can take action." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Focus: Higher levels of elevation can be used to draw attention to components that require user interaction\nor confirmation, such as modals, guides, and decision-based tasks, enhancing accessibility by reducing\ncognitive load." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "examples",
			children: "Examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The diagram below visually demonstrates the examples outlined in the table above." }),
		"\n",
		(0, import_jsx_runtime.jsx)("img", {
			src: elevation_examples_default,
			alt: "Diagram illustrating elevation levels",
			width: "100%"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Content frame and Preview frame" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Snackbar" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Menu" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Modal" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "tokens",
			children: "Tokens"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use tokens to apply elevation in your work. The SCSS values are listed in the ",
			(0, import_jsx_runtime.jsxs)(_components.a, {
				href: "https://github.com/WordPress/gutenberg/blob/trunk/packages/base-styles/README.md#elevation-tokens",
				rel: "nofollow",
				children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/base-styles" }), " README"]
			}),
			"."
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
function init_elevation$1() {
	return (init_elevation$1 = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_elevation();
		init_elevation_examples();
	})))();
}
//#endregion
init_elevation$1();
export { MDXContent as default };
