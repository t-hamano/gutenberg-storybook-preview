import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as View } from "./component-CkY7eURU.js";
import { n as init_component$1, t as VStack } from "./component-9S7Padmp.js";
//#region ../packages/components/src/v-stack/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, ALIGNMENTS, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		init_component$1();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/v-stack/stories/index.story.tsx";
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
		meta = {
			component: VStack,
			title: "Components/@wordpress-components/Layout/VStack",
			id: "components-vstack",
			argTypes: {
				alignment: {
					control: { type: "select" },
					options: Object.keys(ALIGNMENTS),
					mapping: ALIGNMENTS
				},
				as: { control: { type: "text" } },
				direction: { control: { type: "text" } },
				justify: { control: { type: "text" } },
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
		Template = (props) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
				...props,
				style: {
					background: "#eee",
					minHeight: "200px"
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
					lineNumber: 54,
					columnNumber: 5
				}, void 0))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  return <VStack {...props} style={{\n    background: '#eee',\n    minHeight: '200px'\n  }}>\n            {['One', 'Two', 'Three', 'Four', 'Five'].map(text => <View key={text} style={{\n      background: '#b9f9ff'\n    }}>\n                    {text}\n                </View>)}\n        </VStack>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
