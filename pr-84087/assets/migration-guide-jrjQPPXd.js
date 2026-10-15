import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_index_story, t as index_story_exports } from "./index.story-DCJ6KymV.js";
//#region ../packages/components/src/tip/stories/migration-guide.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		p: "p",
		pre: "pre",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			of: index_story_exports,
			name: "Migration Guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "tip-migration-guide",
			children: "Tip migration guide"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tip" }),
			" is deprecated since WordPress 7.2 and scheduled for removal in WordPress 7.4. Use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-notice--docs",
				children: (0, import_jsx_runtime.jsx)(_components.code, { children: "Notice" })
			}),
			" from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/ui" }),
			" instead."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "basic-migration",
			children: "Basic migration"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.Root" }),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "intent=\"info\"" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.Description" }),
			" for the content. Pass the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tip" }),
			" icon from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/icons" }),
			" to retain the light-bulb icon. The notice uses the design system's info colors, border, and padding."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-jsx",
			children: "import { tip } from '@wordpress/icons';\nimport { Notice } from '@wordpress/ui';\n\nconst MyTip = ( { children } ) => (\n	<Notice.Root intent=\"info\" icon={ tip }>\n		<Notice.Description>{ children }</Notice.Description>\n	</Notice.Root>\n);\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For a call to action, use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.Actions" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.ActionLink" }),
			". Pass ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "openInNewTab" }),
			" to retain an external link's new-tab indicator and accessible notice. Add ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.CloseIconButton" }),
			" only if the consuming interface supports dismissal."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Like Tip, Notice does not announce its content automatically. Consumers must announce dynamic updates when needed. See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-notice-announcements--docs",
				children: "Notice announcement guidance"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".components-tip" }),
			" selector belongs to the legacy component. Update custom consumer styles when migrating to Notice rather than carrying this class name into the new composition."
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
function init_migration_guide() {
	return (init_migration_guide = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_index_story();
	})))();
}
//#endregion
init_migration_guide();
export { MDXContent as default };
