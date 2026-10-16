import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as Spacer } from "./component-DhnvQQBl.js";
//#region ../packages/components/src/spacer/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, controls, meta, BlackBox, Template, Default, Nested;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/spacer/stories/index.story.tsx";
		controls = [
			"margin",
			"marginY",
			"marginX",
			"marginTop",
			"marginBottom",
			"marginLeft",
			"marginRight",
			"padding",
			"paddingY",
			"paddingX",
			"paddingTop",
			"paddingBottom",
			"paddingLeft",
			"paddingRight"
		].reduce((acc, prop) => ({
			...acc,
			[prop]: { control: { type: "text" } }
		}), {});
		meta = {
			component: Spacer,
			id: "components-spacer",
			title: "Components/@wordpress-components/Spacer",
			argTypes: {
				as: { control: { type: "text" } },
				children: { control: { type: "text" } },
				...controls
			},
			tags: ["status-experimental"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Planned for deprecation."
				}
			}
		};
		BlackBox = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
			backgroundColor: "black",
			width: "100px",
			height: "100px"
		} }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 2
		}, void 0);
		Template = ({ onChange, ...args }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlackBox, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { ...args }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 4
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlackBox, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 4
				}, void 0)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { children: "This is the spacer" };
		Nested = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {
			padding: 4,
			style: { backgroundColor: "#ddd" },
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {
				style: { backgroundColor: "#fff" },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlackBox, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 3
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 73,
			columnNumber: 2
		}, void 0);
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  return <>\n            <BlackBox />\n            <Spacer {...args} />\n            <BlackBox />\n        </>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Nested.parameters = {
			...Nested.parameters,
			docs: {
				...Nested.parameters?.docs,
				source: {
					originalSource: "() => <Spacer padding={4} style={{\n  backgroundColor: '#ddd'\n}}>\n        <Spacer style={{\n    backgroundColor: '#fff'\n  }}>\n            <BlackBox />\n        </Spacer>\n    </Spacer>",
					...Nested.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Nested, meta as default };
