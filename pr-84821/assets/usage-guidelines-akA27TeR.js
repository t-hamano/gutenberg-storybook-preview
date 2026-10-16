import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { a as usage_guidelines_story_exports, i as init_usage_guidelines_story, n as DialogForFocusedTask, r as DrawerForContextualEditing, t as AlertDialogForDeliberateInterruption } from "./usage-guidelines.story-BAs6eAgV.js";
//#region ../packages/ui/src/dialog/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { of: usage_guidelines_story_exports }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "dialog-usage-guidelines",
			children: "Dialog usage guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsxs)(_components.strong, { children: [
			"When should something be shown in a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-dialog--docs",
				children: "Dialog"
			}),
			" vs. a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-drawer--docs",
				children: "Drawer"
			}),
			"?"
		] }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Both patterns interrupt the primary workflow, but they signal different expectations about context, scope, and how long the user will stay in the overlay." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "use-a-dialog-or-alertdialog-when",
			children: [
				"Use a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Dialog" }),
				" (or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "AlertDialog" }),
				") when"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "the-task-can-be-opened-from-multiple-places",
			children: "The task can be opened from multiple places"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Choose a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Dialog" }),
			" when the same flow is reachable from several entry points and the user does not need much of the surrounding page to complete it."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Examples in WordPress:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Draft a page" }), " — the same flow can open from a navigation menu block, the Pages list, or other surfaces."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Command palette" }), " — global, context-light navigation and actions."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Media Library" }), " when adding an image — a reusable picker that does not depend on one specific screen."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: DialogForFocusedTask }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "the-overlay-is-a-deliberate-interruption",
			children: "The overlay is a deliberate interruption"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Dialog" }),
			" is appropriate for focused, specific tasks that pause the current workflow and require the user to make a decision or acknowledge critical information."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For destructive or irreversible actions, prefer ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-alertdialog--docs",
				children: "AlertDialog"
			}),
			" so dismissal behavior and button emphasis match the severity of the action."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: AlertDialogForDeliberateInterruption }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "there-is-one-decision-or-one-primary-action",
			children: "There is one decision or one primary action"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Dialog" }),
			" works best when the user can answer a single question or complete one focused task:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Add a tax rate" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Add an image" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Remove a customer" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Include a prominent and clear call to action so the expected next step is obvious." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "content-is-short-enough-to-scan-without-scrolling",
			children: "Content is short enough to scan without scrolling"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In most cases, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Dialog" }),
			" content should fit comfortably in the viewport. Longer flows with many fields, sections, or drill-down steps are usually better suited to a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Drawer" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "do-not-nest-dialogs",
			children: "Do not nest dialogs"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Avoid launching one ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Dialog" }),
			" from another. If a flow needs additional steps, prefer a single ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Dialog" }),
			" with clearer content, or move the longer flow into a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Drawer" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "use-a-drawer-when",
			children: [
				"Use a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Drawer" }),
				" when"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "the-user-is-editing-something-on-the-current-page",
			children: "The user is editing something on the current page"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Drawer" }),
			" fits contextual work where it helps to keep the underlying page visible — or at least mentally available — while editing details of an item already on screen."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: DrawerForContextualEditing }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "there-are-multiple-fields-or-sections",
			children: "There are multiple fields or sections"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"When the overlay becomes a small parallel workspace with several inputs, tabs, or collapsible sections, a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Drawer" }),
			" usually scales better than a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Dialog" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "the-flow-may-drill-down",
			children: "The flow may drill down"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Drawer" }),
			" can grow into multi-step or multi-section experiences without feeling cramped. Collapsible sections, tabs, and nested panels are common ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Drawer" }),
			" patterns."
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
function init_usage_guidelines() {
	return (init_usage_guidelines = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_usage_guidelines_story();
	})))();
}
//#endregion
init_usage_guidelines();
export { MDXContent as default };
