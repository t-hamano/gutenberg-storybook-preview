import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as View } from "./component-CkY7eURU.js";
import { n as init_component$1, t as HStack } from "./component-D91dSxn4.js";
//#region ../packages/components/src/h-stack/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, ALIGNMENTS, DIRECTIONS, JUSTIFICATIONS, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/h-stack/stories/index.story.tsx";
		ALIGNMENTS = {
			top: "top",
			topLeft: "topLeft",
			topRight: "topRight",
			left: "left",
			center: "center",
			right: "right",
			bottom: "bottom",
			bottomLeft: "bottomLeft",
			bottomRight: "bottomRight",
			edge: "edge",
			stretch: "stretch"
		};
		DIRECTIONS = {
			row: "row",
			column: "column",
			responsive: ["column", "row"]
		};
		JUSTIFICATIONS = {
			"space-around": "space-around",
			"space-between": "space-between",
			"space-evenly": "space-evenly",
			stretch: "stretch",
			center: "center",
			end: "end",
			"flex-end": "flex-end",
			"flex-start": "flex-start",
			start: "start"
		};
		meta = {
			component: HStack,
			title: "Components/@wordpress-components/Layout/HStack",
			id: "components-hstack",
			argTypes: {
				as: { control: false },
				children: { control: false },
				alignment: {
					control: { type: "select" },
					options: Object.keys(ALIGNMENTS),
					mapping: ALIGNMENTS
				},
				direction: {
					control: { type: "select" },
					options: Object.keys(DIRECTIONS),
					mapping: DIRECTIONS
				},
				justify: {
					control: { type: "select" },
					options: Object.keys(JUSTIFICATIONS),
					mapping: JUSTIFICATIONS
				},
				spacing: { control: { type: "text" } }
			},
			tags: ["status-experimental"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Stack`](?path=/docs/design-system-components-stack--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Template = (args) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, {
			...args,
			style: {
				background: "#eee",
				minHeight: "3rem"
			},
			children: [
				"One",
				"Two",
				"Three",
				"Four",
				"Five"
			].map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, {
				style: { background: "#b9f9ff" },
				children: text
			}, text, false, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 4
			}, void 0))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = { spacing: "3" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => <HStack {...args} style={{\n  background: '#eee',\n  minHeight: '3rem'\n}}>\n        {['One', 'Two', 'Three', 'Four', 'Five'].map(text => <View key={text} style={{\n    background: '#b9f9ff'\n  }}>\n                {text}\n            </View>)}\n    </HStack>",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
