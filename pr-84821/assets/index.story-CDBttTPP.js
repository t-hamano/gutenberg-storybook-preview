import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as View } from "./component-CkY7eURU.js";
import { n as init_component$1, t as Grid } from "./component-CcPU8xfX.js";
//#region ../packages/components/src/grid/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Item, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/grid/stories/index.story.tsx";
		meta = {
			component: Grid,
			id: "components-grid",
			title: "Components/@wordpress-components/Grid",
			argTypes: {
				as: { control: { type: "text" } },
				align: { control: { type: "text" } },
				children: { control: false },
				columnGap: { control: { type: "text" } },
				columns: {
					table: { type: { summary: "number" } },
					control: { type: "number" }
				},
				justify: { control: { type: "text" } },
				rowGap: { control: { type: "text" } },
				rows: {
					table: { type: { summary: "number" } },
					control: { type: "number" }
				},
				templateColumns: { control: { type: "text" } },
				templateRows: { control: { type: "text" } }
			},
			tags: ["status-experimental"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Planned for deprecation. Write your own CSS instead."
				}
			}
		};
		Item = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
			style: {
				borderRadius: 8,
				background: "#eee",
				padding: 8,
				textAlign: "center"
			},
			...props
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 2
		}, void 0);
		Template = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
			...props,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: "One" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: "Two" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: "Three" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: "Four" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: "Five" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: "Six" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: "Seven" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 3
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, { children: "Eight" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 3
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 55,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = {
			alignment: "bottom",
			columns: 4,
			gap: 2
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => <Grid {...props}>\n        <Item>One</Item>\n        <Item>Two</Item>\n        <Item>Three</Item>\n        <Item>Four</Item>\n        <Item>Five</Item>\n        <Item>Six</Item>\n        <Item>Seven</Item>\n        <Item>Eight</Item>\n    </Grid>",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
