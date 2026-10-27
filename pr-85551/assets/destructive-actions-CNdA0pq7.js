import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region stories/design-system/patterns/destructive-actions.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		strong: "strong",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { title: "Design System/Patterns/Destructive Actions" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "destructive-actions",
			children: "Destructive Actions"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Destructive actions are operations that remove, delete, or permanently alter content or data. The appropriate pattern to use depends on the reversibility and immediacy of the action's result." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "decision-tree",
			children: "Decision Tree"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When implementing a destructive action, follow this decision tree:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Does the action have an immediate visible result on the frontend?" }) }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"If ",
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "no" }),
						" → ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "#no-confirmation-needed",
							children: "No confirmation needed"
						})
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"If ",
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "yes" }),
						" → Continue to question 2"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Can the action be easily undone?" }) }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"If ",
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "yes" }),
						" → ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "#use-confirmdialog",
							children: "Use confirmDialog"
						})
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"If ",
						(0, import_jsx_runtime.jsx)(_components.strong, { children: "no" }),
						" → ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "#use-modal-with-destructive-button",
							children: "Use Modal with destructive button"
						})
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "no-confirmation-needed",
			children: "No Confirmation Needed"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Destructive actions that have no immediate visible result on the frontend (e.g., deleting a block) do not require any destructive styling or confirmation." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "when-to-use",
			children: "When to Use"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The action doesn't produce an immediate visible change on the frontend" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The action can be reversed through standard undo functionality" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The user expects the action to be reversible" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "implementation",
			children: "Implementation"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Use standard trigger styling, avoiding destructive (red) styling" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "No confirmation dialog required" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Ensure undo functionality is available" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Example" }), ": Deleting a block in the editor. The block is removed but the change can be immediately undone using the undo command."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "use-confirmdialog",
			children: "Use ConfirmDialog"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Destructive actions that have an immediate visible result but can be easily undone (e.g., moving to trash) require a confirmation using the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ConfirmDialog" }),
			" component. A snackbar with undo affordance should be displayed after the action completes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "when-to-use-1",
			children: "When to Use"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The action produces an immediate visible change" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The action can be reversed through a clear, accessible mechanism (e.g., trash/restore)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The user should be aware of the change before it happens" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "implementation-1",
			children: "Implementation"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "__experimentalConfirmDialog" }),
				" from ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "@wordpress/components" })
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The dialog can be dismissed (ESC key, click outside, cancel button)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Standard button styling for the trigger (no destructive styling)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The confirmation button uses primary variant (not destructive)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "After the action completes, display a Snackbar with an undo action" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "component-details",
			children: "Component Details"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ConfirmDialog" }),
			" is built on top of ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Modal" }),
			" and provides:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Automatic focus management" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Keyboard navigation (Enter to confirm, ESC to cancel)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Accessible dialog structure" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Standard button layout (Cancel + Confirm)" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Example" }), ": Moving a post to trash. The post status changes immediately, but it can be restored from the trash."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "use-modal-with-destructive-button",
			children: "Use Modal with Destructive Button"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Destructive actions that cannot be undone require a confirmation, but the primary action button should be ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "destructive" }),
			". Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Modal" }),
			" without a close button. A snackbar should confirm the action completes."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "when-to-use-2",
			children: "When to Use"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The action produces an immediate, permanent change" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The action cannot be reversed or undone" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The consequences are significant and irreversible" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "implementation-2",
			children: "Implementation"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Modal" }),
				" component (not ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ConfirmDialog" }),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Set ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "isDismissible={ false }" }),
				" to prevent closing via the header button"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Set ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "shouldCloseOnEsc={ false }" }),
				" to prevent closing via ESC key"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Set ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "shouldCloseOnClickOutside={ false }" }),
				" to prevent closing via overlay click"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Primary action button must have ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "isDestructive={ true }" }),
				" prop"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["Cancel button should use ", (0, import_jsx_runtime.jsx)(_components.code, { children: "variant=\"tertiary\"" })] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "User must explicitly choose Cancel or Delete (no accidental dismissal)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "After the action completes, display a Snackbar to confirm the action" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "component-details-1",
			children: "Component Details"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Modal" }),
			" configuration ensures:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "User cannot accidentally dismiss the dialog" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Destructive styling on the primary button clearly indicates danger" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "User must make a deliberate choice to proceed or cancel" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Accessibility is maintained through proper ARIA attributes and focus management" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "accessibility-considerations",
			children: "Accessibility Considerations"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "The modal title should clearly describe the action" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Use descriptive button labels (e.g., \"Delete permanently\" not just \"Delete\")" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Ensure focus is properly managed when the modal opens" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Example" }), ": Permanently deleting a post. The post is removed completely and cannot be restored."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "additional-confirmation-patterns",
			children: "Additional Confirmation Patterns"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For highly destructive or complex actions, an additional confirmation step may be warranted. Include an initially unchecked checkbox that the user must check before the destructive button becomes enabled. The checkbox label should explicitly state what the user is acknowledging (e.g., \"I understand this action cannot be undone\")." })
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
function init_destructive_actions() {
	return (init_destructive_actions = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
	})))();
}
//#endregion
init_destructive_actions();
export { MDXContent as default };
