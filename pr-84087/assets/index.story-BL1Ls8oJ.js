import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_stack, t as Stack } from "./stack-DYoOf63N.js";
//#region ../packages/ui/src/stack/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, DemoBox, Default, Nested;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_stack();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/stack/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Stack",
			id: "design-system-components-stack",
			component: Stack,
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} }
		};
		DemoBox = ({ variant }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
			backgroundColor: "var(--wpds-color-background-surface-brand, color-mix(in oklch, var(--wp-admin-theme-color, #3858e9) 9%, white))",
			width: variant === "lg" ? "150px" : "100px",
			height: variant === "lg" ? "150px" : "100px"
		} }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 2
		}, void 0);
		Default = {
			args: {
				gap: "md",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, {}, "demoBox", false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, { variant: "lg" }, "demoBox-2", false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, {}, "demoBox-3", false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, {}, "demoBox-4", false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, { variant: "lg" }, "demoBox-5", false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, {}, "demoBox-6", false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 4
					}, void 0)
				]
			},
			argTypes: {
				align: {
					options: [
						"center",
						"end",
						"flex-end",
						"flex-start",
						"start",
						"baseline",
						"stretch"
					],
					table: { type: { summary: "\"center\" | \"end\" | \"flex-end\" | \"flex-start\" | \"start\" | \"baseline\" | \"stretch\"" } }
				},
				justify: {
					options: [
						"space-around",
						"space-between",
						"space-evenly",
						"stretch",
						"center",
						"end",
						"flex-end",
						"flex-start",
						"start",
						"left",
						"right"
					],
					table: { type: { summary: "\"space-around\" | \"space-between\" | \"space-evenly\" | \"stretch\" | \"center\" | \"end\" | \"flex-end\" | \"flex-start\" | \"start\"" } }
				},
				wrap: {
					options: ["wrap"],
					table: { type: { summary: "\"wrap\"" } }
				}
			}
		};
		Nested = {
			...Default,
			args: {
				...Default.args,
				align: "center",
				justify: "center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, { variant: "lg" }, "demoBox", false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						gap: "lg",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 5
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 5
						}, void 0)]
					}, "stack", true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, { variant: "lg" }, "demoBox-2", false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
						direction: "column",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 5
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 5
						}, void 0)]
					}, "stack-2", true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBox, { variant: "lg" }, "demoBox-3", false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 4
					}, void 0)
				]
			}
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    gap: 'md',\n    children: [<DemoBox key=\"demoBox\" />, <DemoBox variant=\"lg\" key=\"demoBox-2\" />, <DemoBox key=\"demoBox-3\" />, <DemoBox key=\"demoBox-4\" />, <DemoBox variant=\"lg\" key=\"demoBox-5\" />, <DemoBox key=\"demoBox-6\" />]\n  },\n  argTypes: {\n    align: {\n      options: ['center', 'end', 'flex-end', 'flex-start', 'start', 'baseline', 'stretch'],\n      table: {\n        type: {\n          summary: '\"center\" | \"end\" | \"flex-end\" | \"flex-start\" | \"start\" | \"baseline\" | \"stretch\"'\n        }\n      }\n    },\n    justify: {\n      options: ['space-around', 'space-between', 'space-evenly', 'stretch', 'center', 'end', 'flex-end', 'flex-start', 'start', 'left', 'right'],\n      table: {\n        type: {\n          summary: '\"space-around\" | \"space-between\" | \"space-evenly\" | \"stretch\" | \"center\" | \"end\" | \"flex-end\" | \"flex-start\" | \"start\"'\n        }\n      }\n    },\n    wrap: {\n      options: ['wrap'],\n      table: {\n        type: {\n          summary: '\"wrap\"'\n        }\n      }\n    }\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Nested.parameters = {
			...Nested.parameters,
			docs: {
				...Nested.parameters?.docs,
				source: {
					originalSource: "{\n  ...Default,\n  args: {\n    ...Default.args,\n    align: 'center',\n    justify: 'center',\n    children: [<DemoBox variant=\"lg\" key=\"demoBox\" />, <Stack gap=\"lg\" key=\"stack\">\n                <DemoBox />\n                <DemoBox />\n            </Stack>, <DemoBox variant=\"lg\" key=\"demoBox-2\" />, <Stack direction=\"column\" key=\"stack-2\">\n                <DemoBox />\n                <DemoBox />\n            </Stack>, <DemoBox variant=\"lg\" key=\"demoBox-3\" />]\n  }\n}",
					...Nested.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Nested, meta as default };
