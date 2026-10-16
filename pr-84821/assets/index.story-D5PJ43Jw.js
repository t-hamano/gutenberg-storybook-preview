import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_component, t as Truncate } from "./component-cX3pdmyF.js";
//#region ../packages/components/src/truncate/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, defaultText, Template, Default, CharacterCount;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_component();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/truncate/stories/index.story.tsx";
		meta = {
			component: Truncate,
			title: "Components/@wordpress-components/Typography/Truncate",
			id: "components-truncate",
			argTypes: {
				children: { control: { type: "text" } },
				as: { control: { type: "text" } }
			},
			tags: ["status-experimental", "manifest"],
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis dictum tortor, eu tincidunt justo scelerisque tincidunt. Duis semper dui id augue malesuada, ut feugiat nisi aliquam. Vestibulum venenatis diam sem, finibus dictum massa semper in. Nulla facilisi. Nunc vulputate faucibus diam, in lobortis arcu ornare vel. In dignissim nunc sed facilisis finibus. Etiam imperdiet mattis arcu, sed rutrum sapien blandit gravida. Aenean sollicitudin neque eget enim blandit, sit amet rutrum leo vehicula. Nunc malesuada ultricies eros ut faucibus. Aliquam erat volutpat. Nulla nec feugiat risus. Vivamus iaculis dui aliquet ante ultricies feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus nec pretium velit, sit amet consectetur ante. Praesent porttitor ex eget fermentum mattis.";
		Template = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Truncate, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 9
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			numberOfLines: 2,
			children: defaultText
		};
		CharacterCount = Template.bind({});
		CharacterCount.args = {
			limit: 23,
			children: defaultText,
			ellipsizeMode: "tail",
			ellipsis: "[---]"
		};
		CharacterCount.storyName = "Truncate by character count";
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <Truncate {...args} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		CharacterCount.parameters = {
			...CharacterCount.parameters,
			docs: {
				...CharacterCount.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <Truncate {...args} />;\n}",
					...CharacterCount.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { CharacterCount, Default, meta as default };
