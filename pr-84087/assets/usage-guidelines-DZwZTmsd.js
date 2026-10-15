import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, r as Canvas, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { a as IncorrectBadgeWithIcon, c as Medium, d as PluginStatus, f as Stable, g as usage_guidelines_story_exports, h as init_usage_guidelines_story, i as High, l as None, m as WithAdjacentContentIcon, n as CommentStatus, o as Informational, p as TextOnlyBadges, r as Draft, s as Low, t as AllIntents, u as PageStatus } from "./usage-guidelines.story-DyqYQDIt.js";
//#region ../packages/ui/src/badge/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		code: "code",
		em: "em",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		h4: "h4",
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
			id: "badge-usage-guidelines",
			children: "Badge usage guidelines"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "choosing-intent",
			children: "Choosing intent"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: AllIntents }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "It can be difficult to determine which badge intent to use because the component's properties are not tied to any specific product view. Those properties should be balanced against the requirements of the view in which the badge appears, all while keeping an eye on high-level consistency (global statuses that appear across multiple views)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Here is a decision tree to help identify which badge to use." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "1-ask-first-should-this-draw-the-eye",
			children: "1. Ask first: should this draw the eye?"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If the user scans this screen, should their attention be drawn to this badge?" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "no" }),
				" → use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "none" }),
				" (or even just plain text; no badge), even if the state is positive or \"stable\"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"If ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "yes" }),
				" → pick an intent based on how important the action or awareness is."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "2-high--medium--low--action-priority",
			children: "2. High / Medium / Low = action priority"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use when there's something for the user to act on." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h4, {
			id: "high--critical--top-priority",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }), " – Critical / top priority"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Needs attention as soon as possible" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.em, { children: "E.g. \"Payment declined\", \"Security issue\"" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: High }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h4, {
			id: "medium--important--blocks-progress",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "medium" }), " – Important / blocks progress"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Blocks a key task, should be handled soon" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.em, { children: "E.g. \"Approval required\", \"Review needed\"" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Medium }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h4, {
			id: "low--worth-noticing--nonurgent",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "low" }), " – Worth noticing / non‑urgent"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Good to be aware of; action may be optional or later" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.em, { children: "E.g. \"Pending\", \"Queued\", \"Minor issues\", \"Optional setup\"" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Low }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "3-informational--draft--special-non-final-states",
			children: "3. Informational / draft = special non-final states"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h4, {
			id: "informational--notable-no-action--fix-needed",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "informational" }), " – Notable, no action / fix needed"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Context only; no clear action" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.em, { children: "E.g. \"Scheduled\", \"Beta\", \"Internal only\"" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Informational }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h4, {
			id: "draft--not-final--work-in-progress",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "draft" }), " – Not final / work in progress"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.em, { children: "E.g. \"Draft\", \"Unpublished\", \"Work in progress\"" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Draft }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "4-stable--none--normal-states",
			children: "4. Stable / none = normal states"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h4, {
			id: "stable--positive--healthy-state",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "stable" }), " – Positive / \"healthy\" state"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Use when confirming success or \"all good\" is important in that view" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.em, { children: "E.g. \"Healthy\", \"Active\", \"Live\"" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: Stable }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h4, {
			id: "none--default-for-normal--background-states",
			children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "none" }), " – Default for normal / background states"]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Especially in dense lists where too much color creates visual noise" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.em, { children: "E.g. \"Inactive\", \"Expired\"" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: None }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "examples",
			children: "Examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "comment-status",
			children: "Comment status"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Approved\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "none" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Approval required\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "medium" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: CommentStatus }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "page-status",
			children: "Page status"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Published\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "none" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Pending\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "low" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Draft\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "draft" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Scheduled\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "informational" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Private\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "informational" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: PageStatus }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "plugin-status",
			children: "Plugin status"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Active\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "stable" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["\"Inactive\" → ", (0, import_jsx_runtime.jsx)(_components.code, { children: "none" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: PluginStatus }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "5-when-in-doubt",
			children: "5. When in doubt…"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use the least attention‑grabbing intent that still:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Makes it clear what needs attention," }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Marks what isn't final, or" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Confirms a key success state in that context." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "using-with-icons",
			children: "Using with icons"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "Badge" }), " is text-only. Intent is communicated through color and label — not through icons inside the badge."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "-dont",
			children: "❌ Don't"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Put icons inside badges." }), " A status icon duplicates what the intent color and label already convey."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: IncorrectBadgeWithIcon }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "-do",
			children: "✅ Do"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Use text-only badges." }), " In most cases, the intent color and label are enough. Adding a status icon inside the badge duplicates information and adds visual noise, especially in dense lists."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: TextOnlyBadges }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Keep nearby icons separate." }), " When a row already includes a content icon (e.g. post type, plugin), use that icon for identity and let the badge communicate status on its own."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: WithAdjacentContentIcon })
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
