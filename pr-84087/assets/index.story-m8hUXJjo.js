import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_date_format_picker, t as DateFormatPicker } from "./date-format-picker-bDCR8Vif.js";
//#region ../packages/block-editor/src/components/date-format-picker/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_date_format_picker();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/date-format-picker/stories/index.story.jsx";
		index_story_default = {
			id: "blockeditor-dateformatpicker",
			title: "Editor/Block Editor/DateFormatPicker",
			component: DateFormatPicker,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "The `DateFormatPicker` component enables users to configure their preferred *date format*. This determines how dates are displayed." }
			} },
			argTypes: {
				defaultFormat: {
					control: "text",
					description: "The date format that will be used if the user selects \"Default\".",
					table: { type: { summary: "string" } }
				},
				format: {
					control: { type: null },
					description: "The selected date format. If `null`, _Default_ is selected.",
					table: { type: { summary: "string | null" } }
				},
				onChange: {
					action: "onChange",
					control: { type: null },
					description: "Called when a selection is made. If `null`, _Default_ is selected.",
					table: { type: { summary: "function" } }
				}
			}
		};
		Default = {
			args: { defaultFormat: "M j, Y" },
			render: function Template({ onChange, ...args }) {
				const [format, setFormat] = (0, import_react.useState)();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateFormatPicker, {
					...args,
					onChange: (...changeArgs) => {
						onChange(...changeArgs);
						setFormat(...changeArgs);
					},
					format
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 4
				}, this);
			}
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    defaultFormat: 'M j, Y'\n  },\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [format, setFormat] = useState();\n    return <DateFormatPicker {...args} onChange={(...changeArgs) => {\n      onChange(...changeArgs);\n      setFormat(...changeArgs);\n    }} format={format} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, index_story_default as default };
