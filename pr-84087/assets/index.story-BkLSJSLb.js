import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as space, t as init_space } from "./space-BUoQC8K7.js";
import { n as init_spinner, t as Spinner } from "./spinner-DzRF6_N3.js";
//#region ../packages/components/src/spinner/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, CustomSize;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_spinner();
		init_space();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/spinner/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Feedback/Spinner",
			id: "components-spinner",
			component: Spinner,
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`Spinner`](?path=/docs/design-system-components-spinner--docs) from `@wordpress/ui` instead."
				}
			}
		};
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		CustomSize = Template.bind({});
		CustomSize.args = { style: {
			width: space(20),
			height: space(20)
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <Spinner {...args} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		CustomSize.parameters = {
			...CustomSize.parameters,
			docs: {
				...CustomSize.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <Spinner {...args} />;\n}",
					...CustomSize.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CustomSize, Default, meta as default };
