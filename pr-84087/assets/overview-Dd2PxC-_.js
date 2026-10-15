import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/ui/src/form/primitives/stories/overview.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		li: "li",
		ol: "ol",
		p: "p",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "form-primitives",
			children: "Form Primitives"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "design-system-components-form-primitives",
			title: "Components/@wordpress-ui/Form/Primitives",
			name: "Overview"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These form primitives are the low-level building blocks for form-related components. Outside of rare, special use cases, a normal developer should not need to use these primitives directly." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "when-to-use-these-primitives",
			children: "When to use these primitives"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"First check if there is a higher-level ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "*Control" }),
				" component that meets your needs, either in this package, or if not, in ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://wordpress.github.io/gutenberg/?path=/docs/components-introduction--docs",
					rel: "nofollow",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" })
				}),
				". Also consider using ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dataviews/#dataform",
					rel: "nofollow",
					children: (0, import_jsx_runtime.jsx)(_components.code, { children: "DataForm" })
				}),
				", an even higher-level abstraction."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "If not, discuss with your designer whether the design can be altered to not require these primitives." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "If not, then these primitives are the next best option. Keep in mind that you are responsible for ensuring that your implementation is accessible, and adheres to Design System guidelines." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Feel free to reach out to the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "#design-system" }),
			" channel on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://make.wordpress.org/chat/",
				rel: "nofollow",
				children: "Make WordPress Slack"
			}),
			" for guidance."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "labels-and-descriptions",
			children: "Labels and descriptions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Form primitives do not provide labels or descriptions on their own. When you compose them directly, you are responsible for associating each control with an accessible name and, when needed, an accessible description." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For standard labels and descriptions, use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-field--docs",
				children: "Field"
			}),
			" for individual controls and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-form-primitives-fieldset--docs",
				children: "Fieldset"
			}),
			" for groups of related controls."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When a control is already accessibly labeled but still needs a visual label for layout consistency, use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Field.VisualLabel" }),
			" outside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Field.Root" }),
			". It does not carry semantics and is not associated with a control. When a visual label was used as a legend for a group of controls, use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Fieldset" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Fieldset.Legend" }),
			". Description text under a field or fieldset should use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Field.Description" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Fieldset.Description" }),
			" so it is associated."
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
function init_overview() {
	return (init_overview = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
	})))();
}
//#endregion
init_overview();
export { MDXContent as default };
