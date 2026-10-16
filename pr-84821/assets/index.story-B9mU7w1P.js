import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as View } from "./component-CkY7eURU.js";
import { n as init_component$1, t as Flex } from "./component-C5W2knei.js";
import { n as init_component$2, t as FlexItem } from "./component-D3o0_xed.js";
import { n as init_component$3, t as FlexBlock } from "./component-Ce_iMVzG.js";
//#region ../packages/components/src/flex/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, GrayBox, Default, ResponsiveDirection;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component$1(), init_component$2(), init_component$3();
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/flex/stories/index.story.tsx";
		meta = {
			component: Flex,
			id: "components-flex",
			title: "Components/@wordpress-components/Flex",
			subcomponents: {
				FlexBlock,
				FlexItem
			},
			argTypes: {
				align: { control: { type: "text" } },
				as: { control: { type: "text" } },
				children: { control: false },
				gap: { control: { type: "text" } },
				justify: { control: { type: "text" } },
				isReversed: { table: { disable: true } }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Planned for deprecation. For use cases not covered by [`Stack`](?path=/docs/design-system-components-stack--docs) from `@wordpress/ui`, write your own CSS."
				}
			}
		};
		GrayBox = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
			style: {
				backgroundColor: "#eee",
				padding: 10
			},
			children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 2
		}, void 0);
		Default = ({ ...args }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
				...args,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GrayBox, { children: "Item 1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GrayBox, { children: "Item 2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GrayBox, { children: "Item 3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 3
			}, void 0);
		};
		Default.args = {};
		ResponsiveDirection = ({ ...args }) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
				...args,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GrayBox, { children: "Item 1" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GrayBox, { children: "Item 2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GrayBox, { children: "Item 3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 4
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GrayBox, { children: "Item 4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 5
					}, void 0) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 4
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 3
			}, void 0);
		};
		ResponsiveDirection.args = { direction: ["column", "row"] };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => {\n  return <Flex {...args}>\n            <FlexItem>\n                <GrayBox>Item 1</GrayBox>\n            </FlexItem>\n            <FlexItem>\n                <GrayBox>Item 2</GrayBox>\n            </FlexItem>\n            <FlexItem>\n                <GrayBox>Item 3</GrayBox>\n            </FlexItem>\n        </Flex>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		ResponsiveDirection.parameters = {
			...ResponsiveDirection.parameters,
			docs: {
				...ResponsiveDirection.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => {\n  return <Flex {...args}>\n            <FlexItem>\n                <GrayBox>Item 1</GrayBox>\n            </FlexItem>\n            <FlexBlock>\n                <GrayBox>Item 2</GrayBox>\n            </FlexBlock>\n            <FlexItem>\n                <GrayBox>Item 3</GrayBox>\n            </FlexItem>\n            <FlexItem>\n                <GrayBox>Item 4</GrayBox>\n            </FlexItem>\n        </Flex>;\n}",
					...ResponsiveDirection.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, ResponsiveDirection, meta as default };
