import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as init_save_and_submit_story, r as save_and_submit_story_exports, t as SaveFormLayoutCard } from "./save-and-submit.story-B1h_5bkQ.js";
//#region stories/design-system/patterns/save-and-submit.mdx
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
		(0, import_jsx_runtime.jsx)(Meta, {
			of: save_and_submit_story_exports,
			tags: ["!docs-only"]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "save--submit",
			children: "Save & Submit"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Guidelines for saving settings and submitting forms." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "choose-one-save-model-per-surface",
			children: "Choose one save model per surface"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Before designing a settings screen, make a deliberate choice: does the surface ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "save automatically" }),
			" as the user makes changes, or does it ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "collect changes behind an explicit “Save changes” button" }),
			"?"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Pick one for the entire surface. ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Do not mix the two." }),
			" A page where some fields save instantly while others wait for a button leaves the user unable to tell what has actually been saved and what is still pending. This is the core reason mixed saving feels unreliable."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Autosave" }),
				" is the preferred default for modern interfaces whose fields can be validated and persisted independently and asynchronously (for example, React screens built with DataViews ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "DataForm" }),
				"). Nothing is ever “unsaved”, so there is no Save button and no unsaved-changes prompt."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Manual save" }), " remains a fully supported choice, and is the right one when changes are interdependent and should apply together, when saving has side effects that are better batched into a single action, or when the environment submits a whole form at once (for example, classic WordPress admin screens, or third-party pages that post to PHP)."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When in doubt, prefer autosave, but commit to whichever model you choose across every field on the surface." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "autosave-model",
			children: "Autosave model"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Each change is persisted as it is made. There is no Save button and no unsaved-changes guard, because there is never any unsaved state." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Toggles, selects, and radios" }), " save immediately on change."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Text and number fields" }), " save on blur, or debounced after the user stops typing, never on every keystroke."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Per-field feedback." }),
				" While a field is saving, show a subtle inline indicator on that field; confirm success inline and quietly. Reserve the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://wordpress.github.io/gutenberg/?path=/docs/components-snackbar--docs",
					rel: "nofollow",
					children: "Snackbar"
				}),
				" for changes whose effect isn’t otherwise visible, and avoid one snackbar per field."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Per-field errors." }), " If a save fails, surface the error inline at the field, keep the user’s entered value, and let them retry. A failure on one field must not block editing the others."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "No global Save button" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "no “leave without saving?” prompt" }),
				". Both imply pending state that this model doesn’t have."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Because autosave depends on fields saving independently, it isn’t suitable when several fields must be validated or applied together. Those cases call for the manual save model." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "manual-save-model",
			children: "Manual save model"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Edits are held locally and applied together when the user clicks a single primary ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Save changes" }),
			" button."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: SaveFormLayoutCard }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "saving",
			children: "Saving"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "While saving, the button switches to a busy or loading state." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"A ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://wordpress.github.io/gutenberg/?path=/docs/components-snackbar--docs",
					rel: "nofollow",
					children: "Snackbar"
				}),
				" confirms a successful save."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "no-unsaved-changes",
			children: "No unsaved changes"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "When all changes are saved, the Save button is disabled and can reveal a “No unsaved changes” tooltip on hover or focus." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "unsaved-changes-on-exit",
			children: "Unsaved changes on exit"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"If the user navigates away with unsaved edits, prompt them to confirm before leaving so their changes aren’t lost. This guard exists ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "only" }),
			" in the manual save model; an autosave surface never needs it."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "invalid-fields-partial-saves-and-failed-saves",
			children: "Invalid fields, partial saves, and failed saves"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For automatic saving methods, an invalid field can require being addressed before saving, e.g. by outputting an error message right below the relevant input control." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"In some situations, however, some options might save successfully save while others still need attention. In this case, through a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice" }),
			", tell people what saved and what still needs attention. And never stack a success and an error on top of each other. You can list multiple areas that need attention in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice" }),
			" component, so you don't have to stack multiple."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For fully failed saves, show the reason in the ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "toggles",
			children: "Toggles"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A toggle implies immediate effect, like a light switch, which makes it a natural fit for autosave surfaces where a change takes effect as soon as it is flipped. On a manual-save surface, nothing applies until the Save button is clicked, so weigh whether that immediacy still reads true." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Auto-saving is restricted to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ToggleControl" }),
				" fields."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Follows the same feedback conventions as other save methods." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "It is preferable to use a toggle instead of a checkbox for turning features on and off. The exception would be if the checkbox is part of a form with other fields that also need to be updated at the same time." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Keep labels short. Use the description under the toggle or in the card title to provide more context." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Lead labels with a verb like “Use, Allow, Show,” or “Enable”." }),
			"\n"
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
function init_save_and_submit() {
	return (init_save_and_submit = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_save_and_submit_story();
	})))();
}
//#endregion
init_save_and_submit();
export { MDXContent as default };
