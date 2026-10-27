import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_line_height_control, t as LineHeightControl } from "./line-height-control-8raQs3Uo.js";
//#region ../packages/block-editor/src/components/line-height-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, Template, Default, UnconstrainedWidth;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_line_height_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/line-height-control/stories/index.story.tsx";
		index_story_default = {
			component: LineHeightControl,
			id: "blockeditor-lineheightcontrol",
			title: "Editor/Block Editor/LineHeightControl"
		};
		Template = (props) => {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineHeightControl, {
				onChange: setValue,
				value,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { __unstableInputWidth: "100px" };
		UnconstrainedWidth = Template.bind({});
		UnconstrainedWidth.args = {
			...Default.args,
			__unstableInputWidth: "100%"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState<string | number>();\n  return <LineHeightControl onChange={setValue} value={value} {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		UnconstrainedWidth.parameters = {
			...UnconstrainedWidth.parameters,
			docs: {
				...UnconstrainedWidth.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState<string | number>();\n  return <LineHeightControl onChange={setValue} value={value} {...props} />;\n}",
					...UnconstrainedWidth.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, UnconstrainedWidth, index_story_default as default };
