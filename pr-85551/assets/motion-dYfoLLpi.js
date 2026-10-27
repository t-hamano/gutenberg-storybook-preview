import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_motion_story, r as motion_story_exports, t as Default } from "./motion.story-2jHX5jtf.js";
//#region stories/design-system/tokens/motion.mdx
function _createMdxContent(props) {
	const _components = {
		h1: "h1",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			of: motion_story_exports,
			tags: ["!docs-only"]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "motion",
			children: "Motion"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Default })
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
function init_motion() {
	return (init_motion = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_motion_story();
	})))();
}
//#endregion
init_motion();
export { MDXContent as default };
