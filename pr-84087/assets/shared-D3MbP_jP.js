import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-CQjSoBjH.js";
import { n as init_link, t as Link } from "./link-BEx2TFXH.js";
//#region ../packages/ui/src/form/stories/shared.tsx
var import_jsx_dev_runtime, _jsxFileName, formDecorator, WITH_DETAILS_DESCRIPTION, DETAILS_EXAMPLE, narrowContainerDecorator, longLabelPopupItems;
function init_shared() {
	return (init_shared = __esmMin((() => {
		init_link();
		init_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/form/stories/shared.tsx";
		formDecorator = (Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			style: {
				fontFamily: "sans-serif",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				gap: 16
			},
			onSubmit: (event) => {
				event.preventDefault();
				alert("Form submitted!");
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: 16,
					alignItems: "stretch",
					width: 300
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 3
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				type: "submit",
				children: "Submit"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 3
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 2
		}, void 0);
		WITH_DETAILS_DESCRIPTION = `\
To add rich content (such as links) to the description, use the \`details\` prop.

Although this content is not associated with the field using direct semantics,
it is made discoverable to screen reader users via a visually hidden description,
alerting them to the presence of additional information below.

**Important:** If the content only includes plain text, use \`description\` instead,
so the readout is not unnecessarily verbose for screen reader users.`;
		DETAILS_EXAMPLE = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			"Details can include",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",
				children: "links to more information"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 3
			}, void 0),
			" ",
			"and other semantic elements."
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 2
		}, void 0);
		narrowContainerDecorator = (Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: { width: 248 },
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 2
		}, void 0);
		longLabelPopupItems = [{
			value: "short",
			label: "Short label"
		}, {
			value: "long",
			label: "Hippopotomonstrosesquipedaliophobia"
		}];
	})))();
}
//#endregion
export { longLabelPopupItems as a, init_shared as i, WITH_DETAILS_DESCRIPTION as n, narrowContainerDecorator as o, formDecorator as r, DETAILS_EXAMPLE as t };
