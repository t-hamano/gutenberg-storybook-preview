import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_color_indicator, t as ColorIndicator } from "./color-indicator-BrZyA51_.js";
//#region ../packages/components/src/color-indicator/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_color_indicator();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/color-indicator/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			component: ColorIndicator,
			title: "Components/@wordpress-components/Selection & Input/Color/ColorIndicator",
			id: "components-colorindicator",
			argTypes: { colorValue: { control: { type: "color" } } },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		Template = ({ ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorIndicator, { ...args }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 2
		}, void 0);
		Default = Template.bind({});
		Default.args = { colorValue: "#0073aa" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  ...args\n}) => <ColorIndicator {...args} />",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
