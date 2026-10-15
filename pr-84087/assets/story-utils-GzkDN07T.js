import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_button, t as Button } from "./button-wsTfHPkm.js";
//#region ../packages/components/src/validated-form-controls/components/stories/story-utils.tsx
var import_jsx_dev_runtime, _jsxFileName, formDecorator;
function init_story_utils() {
	return (init_story_utils = __esmMin((() => {
		init_button();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/validated-form-controls/components/stories/story-utils.tsx";
		formDecorator = (Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			style: {
				fontFamily: "sans-serif",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				gap: 16
			},
			onSubmit: (e) => {
				e.preventDefault();
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
					lineNumber: 28,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 3
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "primary",
				type: "submit",
				__next40pxDefaultSize: true,
				children: "Submit"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 3
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 5,
			columnNumber: 2
		}, void 0);
	})))();
}
//#endregion
export { init_story_utils as n, formDecorator as t };
