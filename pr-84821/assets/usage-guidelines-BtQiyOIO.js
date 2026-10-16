import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, r as Canvas, u as Meta } from "./blocks-CCpJx-rT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { a as usage_guidelines_story_exports, i as init_usage_guidelines_story, n as UseButtonLinkForNavigation, r as UseLinkForInlineNavigation, t as UseButtonForActions } from "./usage-guidelines.story-TzhIEo1y.js";
//#region ../packages/ui/src/button/stories/usage-guidelines.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h1: "h1",
		h2: "h2",
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
			id: "button-iconbutton-link-and-buttonlink",
			children: "Button, IconButton, Link, and ButtonLink"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Choose the component based on ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "what happens when the user activates it" }),
			", not only on how it should look."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "quick-reference",
			children: "Quick reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: `
| Goal | Component | Element | Examples |
| --- | --- | --- | --- |
| Performs an action on the current page | [Button](?path=/docs/design-system-components-button--docs), [IconButton](?path=/docs/design-system-components-iconbutton--docs) | \`<button>\` | Save, Delete, Submit, toolbar icon actions |
| Navigate to another page or URL | [Link](?path=/docs/design-system-components-link--docs) | \`<a>\` | "Learn more", docs links, external references |
| Navigate with button styling | [ButtonLink](?path=/docs/design-system-components-buttonlink--docs) | \`<a>\` | Standalone CTAs, card actions |
` }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "use-button-and-iconbutton-for-actions",
			children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "IconButton" }),
				" for actions"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "IconButton" }),
			" when activation should ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" navigate away as a link would:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Submitting or resetting a form (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "type=\"submit\"" }),
				" / ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "type=\"reset\"" }),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Opening overlays (",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-components-dialog--docs",
					children: "Dialog"
				}),
				", ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-components-popover--docs",
					children: "Popover"
				}),
				", etc.)"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Running JavaScript on the current page (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "onClick" }),
				" without a meaningful ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
				")"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Toggle controls (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-pressed" }),
				" on neutral minimal buttons)"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Showing a ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "loading" }),
				" state while an async action completes"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-iconbutton--docs",
				children: "IconButton"
			}),
			" for the same kinds of actions when the control is ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "icon-only" }),
			" — for example, toolbar buttons. It inherits ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
			" props and adds a built-in tooltip via the required ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "label" }),
			" prop (used as the accessible name)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "IconButton" }),
			" use button semantics. Do not use them as stand-ins for navigation when a real URL is the primary outcome."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: UseButtonForActions }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-button--docs",
				children: "Button"
			}),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-iconbutton--docs",
				children: "IconButton"
			}),
			" for API details and examples."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "use-link-for-navigation",
			children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
				" for navigation"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
			" when activation should take the user to another page or URL. This is the default choice for navigation — not just inline references in running text, but any case where the outcome is “go somewhere else.”"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }), " styling communicates navigation more clearly than a button-shaped control. Users can see at a glance that they are following a link, not triggering an action on the current page."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Typical uses:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Inline references inside ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "?path=/docs/design-system-components-text--docs",
					children: "Text"
				}),
				" or paragraphs"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Standalone “Learn more”, “View documentation”, or “Open site” actions" }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"External destinations with ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "openInNewTab" }),
				" (adds ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "target=\"_blank\"" }),
				" and an accessible new-tab indicator)"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Compose ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Text" }),
			" as the host and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
			" via ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "render" }),
			" when you need typography from ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Text" }),
			" on a standalone link."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: UseLinkForInlineNavigation }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-link--docs",
				children: "Link"
			}),
			" for API details and examples."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "use-buttonlink-for-navigation-with-button-styling",
			children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
				" for navigation with button styling"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
			" when the destination is a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "URL" }),
			" and the control should ",
			(0, import_jsx_runtime.jsxs)(_components.strong, { children: ["look like a ", (0, import_jsx_runtime.jsx)(_components.code, { children: "Button" })] }),
			" — for example, standalone calls to action, card footers, or notice actions where button weight fits the layout."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
			" shares ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
			" visual props (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "variant" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "tone" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "size" }),
			") but renders an ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<a>" }),
			" like ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
			". Use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "openInNewTab" }),
			" for external destinations (adds ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "target=\"_blank\"" }),
			" and an accessible new-tab indicator). It does ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" support ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "disabled" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "loading" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "focusableWhenDisabled" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nativeButton" }),
			", or toggle ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "aria-pressed" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Do ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
			" for form submit, dialogs, or other non-navigation actions — use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
			" instead."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Do ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "not" }),
			" use ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
			" with ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "render={ <a href=\"…\" /> }" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nativeButton={ false }" }),
			" for new code when ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
			" fits; ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
			" is the supported pattern for button-styled links."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: UseButtonLinkForNavigation }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Note:" }),
				" Prefer ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
				" for navigation when possible. Its underline and link styling communicate where the user is going more clearly than a button-shaped control. Reach for ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
				" only when you have considered ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
				" and still need button prominence."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-buttonlink--docs",
				children: "ButtonLink"
			}),
			" for API details and examples."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "common-mistakes",
			children: "Common mistakes"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
					" or ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "IconButton" }),
					" + ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "onClick" }),
					" for navigation"
				] }),
				" — Prefer ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
				" with a real ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "href" }),
				" so keyboard, assistive technology, and browser link affordances stay correct."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
					" when ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
					" would work"
				] }),
				" — Default to ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Link" }),
				" for navigation; button styling can obscure that the control goes elsewhere."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }), " for submit or toggle actions"] }),
				" — Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Button" }),
				" or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "IconButton" }),
				", depending on whether the control needs a visible text label or is icon-only; ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ButtonLink" }),
				" does not support loading or pressed toggle styling."
			] }),
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
