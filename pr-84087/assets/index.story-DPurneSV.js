import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_text_decoration_control, t as TextDecorationControl } from "./text-decoration-control-BMUDW8qP.js";
//#region ../packages/block-editor/src/components/text-decoration-control/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_text_decoration_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/text-decoration-control/stories/index.story.jsx";
		meta = {
			id: "blockeditor-textdecorationcontrol",
			title: "Editor/Block Editor/TextDecorationControl",
			component: TextDecorationControl,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "Control to facilitate text decoration selections." }
			} },
			argTypes: {
				value: {
					control: { type: null },
					description: "Currently selected text decoration.",
					table: { type: { summary: "string" } }
				},
				onChange: {
					action: "onChange",
					control: { type: null },
					description: "Handles change in text decoration selection.",
					table: { type: { summary: "function" } }
				},
				className: {
					control: "text",
					description: "Additional class name to apply.",
					table: { type: { summary: "string" } }
				}
			}
		};
		Default = { render: function Template({ onChange, ...args }) {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextDecorationControl, {
				...args,
				onChange: (...changeArgs) => {
					onChange(...changeArgs);
					setValue(...changeArgs);
				},
				value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 4
			}, this);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState();\n    return <TextDecorationControl {...args} onChange={(...changeArgs) => {\n      onChange(...changeArgs);\n      setValue(...changeArgs);\n    }} value={value} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
