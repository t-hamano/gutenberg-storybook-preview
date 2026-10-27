import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { f as Stories, h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_checkbox_groups_story, t as checkbox_groups_story_exports } from "./checkbox-groups.story-3tP-s8S0.js";
//#region ../packages/ui/src/form/stories/checkbox-groups.mdx
function _createMdxContent(props) {
	const _components = {
		h1: "h1",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { of: checkbox_groups_story_exports }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "checkbox-groups",
			children: "Checkbox Groups"
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
function init_checkbox_groups() {
	return (init_checkbox_groups = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_checkbox_groups_story();
	})))();
}
//#endregion
init_checkbox_groups();
export { MDXContent as default };
