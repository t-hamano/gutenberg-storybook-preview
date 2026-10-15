import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/components/src/button/stories/best-practices.mdx
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "components-actions-button-best-practices",
			title: "Components/@wordpress-components/Actions/Button/Best Practices"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "button",
			children: "Button"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "usage",
			children: "Usage"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Buttons indicate available actions and allow user interaction within the interface. As key elements in the WordPress UI, they appear in toolbars, modals, and forms. Default buttons support most actions, while primary buttons emphasize the main action in a view. Secondary buttons pair as secondary actions next to a primary action." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Each layout contains one prominently placed, high-emphasis button. If you need multiple buttons, use one primary button for the main action, secondary for the rest of the actions and tertiary sparingly when an action needs to not stand out at all." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "sizes",
			children: "Sizes"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "'default'" }), ": For normal text-label buttons, unless it is a toggle button."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "'compact'" }), ": For toggle buttons, icon buttons, and buttons when used in context of either."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "'small'" }), ": For icon buttons associated with more advanced or auxiliary features."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "best-practices",
			children: "Best practices"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Label buttons to show that a click or tap initiates an action." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Use established color conventions; for example, reserve red buttons for irreversible or dangerous actions." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Avoid crowding the screen with multiple calls to action, which confuses users." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Keep button locations consistent across the interface." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "content-guidelines",
			children: "Content guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Buttons should be clear and predictable, showing users what will happen when clicked. Make labels reflect actions accurately to avoid confusion." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Start button text with a strong action verb and include a noun to specify the change, except for common actions like Save, Close, Cancel, or OK." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For other actions, use a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "{verb}+{noun}" }),
			" format for context. Keep button text brief and remove unnecessary words like \"the,\" \"an,\" or \"a\" for easy scanning."
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
function init_best_practices() {
	return (init_best_practices = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
	})))();
}
//#endregion
init_best_practices();
export { MDXContent as default };
