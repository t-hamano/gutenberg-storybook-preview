import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as View } from "./component-CkY7eURU.js";
//#region ../packages/components/src/view/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/view/stories/index.story.tsx";
		meta = {
			component: View,
			id: "components-view",
			title: "Components/@wordpress-components/View",
			argTypes: {
				as: { control: false },
				children: { control: { type: "text" } }
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
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(View, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { children: "An example tip" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <View {...args} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
