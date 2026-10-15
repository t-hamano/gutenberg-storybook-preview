import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as VisuallyHidden } from "./component-CZde0e16.js";
//#region ../packages/components/src/visually-hidden/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default, WithForwardedProps, WithAdditionalClassNames;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/visually-hidden/stories/index.story.tsx";
		meta = {
			component: VisuallyHidden,
			title: "Components/@wordpress-components/Typography/VisuallyHidden",
			id: "components-visuallyhidden",
			argTypes: {
				children: { control: false },
				as: { control: { type: "text" } }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`VisuallyHidden`](?path=/docs/design-system-components-visuallyhidden--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Default = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
			as: "span",
			...args,
			children: "This should not show."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 3
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			"This text will",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				as: "span",
				...args,
				children: ["but not inline", " "]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 4
			}, void 0),
			" ",
			"always show."
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 3
		}, void 0)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 2
		}, void 0);
		WithForwardedProps = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			"Additional props can be passed to VisuallyHidden and are forwarded to the rendered element.",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				as: "span",
				"data-id": "test",
				...args,
				children: ["Check out my data attribute!", " "]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 3
			}, void 0),
			"Inspect the HTML to see!"
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 2
		}, void 0);
		WithAdditionalClassNames = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			"Additional class names passed to VisuallyHidden extend the component class name.",
			" ",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				as: "label",
				className: "test-input",
				...args,
				children: ["Check out my class!", " "]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 3
			}, void 0),
			"Inspect the HTML to see!"
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 2
		}, void 0);
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => <>\n        <VisuallyHidden as=\"span\" {...args}>\n            This should not show.\n        </VisuallyHidden>\n        <div>\n            This text will{' '}\n            <VisuallyHidden as=\"span\" {...args}>\n                but not inline{' '}\n            </VisuallyHidden>{' '}\n            always show.\n        </div>\n    </>",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithForwardedProps.parameters = {
			...WithForwardedProps.parameters,
			docs: {
				...WithForwardedProps.parameters?.docs,
				source: {
					originalSource: "args => <>\n        Additional props can be passed to VisuallyHidden and are forwarded to\n        the rendered element.{' '}\n        <VisuallyHidden as=\"span\" data-id=\"test\" {...args}>\n            Check out my data attribute!{' '}\n        </VisuallyHidden>\n        Inspect the HTML to see!\n    </>",
					...WithForwardedProps.parameters?.docs?.source
				}
			}
		};
		WithAdditionalClassNames.parameters = {
			...WithAdditionalClassNames.parameters,
			docs: {
				...WithAdditionalClassNames.parameters?.docs,
				source: {
					originalSource: "args => <>\n        Additional class names passed to VisuallyHidden extend the component\n        class name.{' '}\n        <VisuallyHidden as=\"label\" className=\"test-input\" {...args}>\n            Check out my class!{' '}\n        </VisuallyHidden>\n        Inspect the HTML to see!\n    </>",
					...WithAdditionalClassNames.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithAdditionalClassNames, WithForwardedProps, meta as default };
