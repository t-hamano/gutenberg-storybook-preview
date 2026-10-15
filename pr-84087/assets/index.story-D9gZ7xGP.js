import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_visually_hidden, t as VisuallyHidden } from "./visually-hidden-Iq8CthQl.js";
//#region ../packages/ui/src/visually-hidden/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithCustomElement;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_visually_hidden();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/visually-hidden/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/VisuallyHidden",
			id: "design-system-components-visuallyhidden",
			component: VisuallyHidden,
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		Default = { render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: "This should not show." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 4
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			"This text will ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: "but not inline " }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 20
			}, void 0),
			"always show."
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 4
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 3
		}, void 0) };
		WithCustomElement = { render: function WithCustomElementStory() {
			const inputId = (0, import_react.useId)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				render: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: inputId }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 30
				}, this),
				children: "Accessible label"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				id: inputId,
				placeholder: "This input has a visually hidden label"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 4
			}, this);
		} };
		try {
			WithCustomElement.__docgenInfo = {
				"description": "Use the `render` prop to change the underlying HTML element.\nBy default, `VisuallyHidden` renders a `<div>`. Here it renders\na `<label>` instead, keeping the native label–input association\nwhile hiding the label text visually.",
				"displayName": "WithCustomElement",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/visually-hidden/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <>\n            <VisuallyHidden>This should not show.</VisuallyHidden>\n            <div>\n                This text will <VisuallyHidden>but not inline </VisuallyHidden>\n                always show.\n            </div>\n        </>\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithCustomElement.parameters = {
			...WithCustomElement.parameters,
			docs: {
				...WithCustomElement.parameters?.docs,
				source: {
					originalSource: "{\n  render: function WithCustomElementStory() {\n    const inputId = useId();\n    return <>\n                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}\n                <VisuallyHidden render={<label htmlFor={inputId} />}>\n                    Accessible label\n                </VisuallyHidden>\n                <input id={inputId} placeholder=\"This input has a visually hidden label\" />\n            </>;\n  }\n}",
					...WithCustomElement.parameters?.docs?.source
				},
				description: {
					story: "Use the `render` prop to change the underlying HTML element.\nBy default, `VisuallyHidden` renders a `<div>`. Here it renders\na `<label>` instead, keeping the native label–input association\nwhile hiding the label text visually.",
					...WithCustomElement.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithCustomElement, meta as default };
