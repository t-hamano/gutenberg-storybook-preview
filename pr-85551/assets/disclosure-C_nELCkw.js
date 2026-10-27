import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { a as Controls3, h as init_blocks, r as Canvas, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
import { n as disclosure_story_exports, r as init_disclosure_story, t as WithDetails } from "./disclosure.story-mQOgCJhE.js";
//#region ../packages/ui/src/notice/stories/disclosure.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		p: "p",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			of: disclosure_story_exports,
			tags: ["!docs-only"]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "notice-with-disclosed-details",
			children: "Notice with disclosed details"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Keep a short error message visible and let users reveal supplementary details with native ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<details>" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<summary>" }),
			" elements."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use native details for a disclosure whose summary and content belong together, as in this error notice. Use ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-collapsible--docs",
				children: "Collapsible"
			}),
			" when the interface needs a custom button trigger or application-controlled open state, as in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-collapsiblecard--docs",
				children: "CollapsibleCard"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-patterns-error-messages--docs",
				children: "Error messages"
			}),
			" for guidance on writing actionable errors and deciding when to offer copying."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The controls below configure the example. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "message" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "details" }),
			" supply the example content and are not ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.Root" }),
			" props. The notice uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "intent=\"error\"" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "with-details",
			children: "With details"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The copy button follows the details. The browser supplies the disclosure marker and manages the open state." }),
		"\n",
		(0, import_jsx_runtime.jsx)(Canvas, { of: WithDetails }),
		"\n",
		(0, import_jsx_runtime.jsx)(Controls3, { of: WithDetails }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.Description" }),
			" uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Stack" }),
			" to space the message and disclosure while preserving the notice's typography, color, and grid alignment. The ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<details>" }),
			" element starts with a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<summary>" }),
			" labeled \"Details\", followed by a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Text" }),
			" component rendered as ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<pre>" }),
			" to preserve line breaks. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.Actions" }),
			" follows the disclosure and uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Stack" }),
			" to center the button and confirmation vertically."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "copying-the-message-and-details",
			children: "Copying the message and details"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The example uses separate plain-text strings for the main error message and details. If an application's error message contains useful HTML, such as an actionable link, preserve that content in the displayed message using the application's sanitized HTML rendering. Prepare a separate plain-text equivalent for copying. Preserve the explanation, next steps, paragraph and list breaks, and useful link text and destinations. For example, convert ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "<a href=\"https://example.com/help\">Read the help article</a>" }),
			" to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Read the help article (https://example.com/help)" }),
			", so copying retains the resource needed to act on the error. Omit sensitive data, including credentials and URLs containing nonces. Do not discard a useful error message because it contains markup."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Empty or whitespace-only details omit the disclosure and copy only the message, without a trailing blank line." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The \"Copy error\" button copies the main message, a blank line, and the supplementary details, even while they are collapsed. The application supplies the exact text to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useCopyToClipboard" }),
			"; ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice" }),
			" does not inspect its children or choose the clipboard contents."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The example's local ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "CopyButton" }),
			" helper uses ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "useCopyToClipboard" }),
			" and shows a temporary \"Copied\" confirmation only after success. A separate ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Notice.Description" }),
			" provides the notice's typography and color and a persistent ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "role=\"status\"" }),
			" region for polite updates. The button keeps its label and accessible name. The static notice has no automatic announcement. See ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "?path=/docs/design-system-components-notice-announcements--docs",
				children: "Notice announcements"
			}),
			" for dynamic messages."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "trying-the-example",
			children: "Trying the example"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use Enter or Space on the \"Details\" summary to expand the details. The disclosure control keeps focus. Tab to \"Copy error\", activate it, and paste into a text field to inspect the copied message and details. Copying also works while the details are collapsed." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Use the controls below the example to try a longer message, multiline details, and empty details. Resize the canvas to check wrapping before and after copying. The \"Copied\" confirmation can wrap below the button in a narrow container." })
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
function init_disclosure() {
	return (init_disclosure = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_disclosure_story();
	})))();
}
//#endregion
init_disclosure();
export { MDXContent as default };
