import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_text_control, t as TextControl } from "./text-control-CI8OL6KY.js";
//#region ../packages/components/src/text-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, DefaultTemplate, Default, WithLabelAndHelpText;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_text_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/text-control/stories/index.story.tsx";
		meta = {
			component: TextControl,
			title: "Components/@wordpress-components/Selection & Input/Common/TextControl",
			id: "components-textcontrol",
			argTypes: {
				help: { control: { type: "text" } },
				label: { control: { type: "text" } },
				onChange: { action: "onChange" },
				value: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`InputControl`](?path=/docs/design-system-components-form-inputcontrol--docs) from `@wordpress/ui` instead. See the [migration guide](?path=/docs/components-inputcontrol--migration-guide)."
				}
			}
		};
		DefaultTemplate = ({ onChange, ...args }) => {
			const [value, setValue] = (0, import_react.useState)("");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextControl, {
				...args,
				value,
				onChange: (v) => {
					setValue(v);
					onChange(v);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 3
			}, void 0);
		};
		Default = DefaultTemplate.bind({});
		Default.args = { placeholder: "Placeholder" };
		WithLabelAndHelpText = DefaultTemplate.bind({});
		WithLabelAndHelpText.args = {
			...Default.args,
			label: "Label Text",
			help: "Help text to explain the input."
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState('');\n  return <TextControl {...args} value={value} onChange={v => {\n    setValue(v);\n    onChange(v);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithLabelAndHelpText.parameters = {
			...WithLabelAndHelpText.parameters,
			docs: {
				...WithLabelAndHelpText.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState('');\n  return <TextControl {...args} value={value} onChange={v => {\n    setValue(v);\n    onChange(v);\n  }} />;\n}",
					...WithLabelAndHelpText.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithLabelAndHelpText, meta as default };
