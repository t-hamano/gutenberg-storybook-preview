import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { f as Stories, h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_best_practices_story, t as best_practices_story_exports } from "./best-practices.story-D34JHnCf.js";
//#region ../packages/ui/src/form/stories/best-practices.mdx
function _createMdxContent(props) {
	const _components = {
		h1: "h1",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { of: best_practices_story_exports }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "best-practices",
			children: "Best practices"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Stories, { title: "Examples" })
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
		init_best_practices_story();
	})))();
}
//#endregion
init_best_practices();
export { MDXContent as default };
