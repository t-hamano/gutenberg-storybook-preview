import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as index_story_exports, r as init_index_story, t as Default } from "./index.story-BJl4HGDp.js";
//#region ../packages/ui/src/form/primitives/combobox/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h1: "h1",
		h2: "h2",
		p: "p",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			of: index_story_exports,
			name: "Usage guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "combobox-usage-guidelines",
			children: "Combobox usage guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "name-the-popup-when-it-contains-an-input",
			children: "Name the popup when it contains an input"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Combobox.Input" }),
			" is inside ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Combobox.Popup" }),
			", the popup renders with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "role=\"dialog\"" }),
			" and needs its own accessible name. Give the popup an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-label" }),
			" or an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-labelledby" }),
			" that references an existing label element. Naming ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Combobox.Trigger" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Combobox.Input" }),
			" does not name the popup dialog."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The default example labels the trigger and popup as Fruit, and the input as Search. Preserve all three names when adapting the example." }),
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
function init_usage_guidelines() {
	return (init_usage_guidelines = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_index_story();
	})))();
}
//#endregion
init_usage_guidelines();
export { MDXContent as default };
