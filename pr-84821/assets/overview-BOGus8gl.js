import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/components/src/validated-form-controls/components/stories/overview.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		p: "p",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "components-selection-input-validated-form-controls-overview",
			title: "Components/@wordpress-components/Selection & Input/Validated Form Controls/Overview"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "validated-form-controls",
			children: "Validated Form Controls"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Documentation for validated form controls has moved to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-form-with-validation-overview--docs",
				children: "Validated Form Controls overview"
			}),
			" in the Design System docs."
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
