import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_textarea_control, t as TextareaControl } from "./textarea-control-FCMyc3yI.js";
//#region ../packages/components/src/textarea-control/stories/index.story.tsx
var index_story_exports = /* @__PURE__ */ __exportAll({
	Default: () => Default,
	default: () => meta
});
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_textarea_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/textarea-control/stories/index.story.tsx";
		meta = {
			component: TextareaControl,
			title: "Components/@wordpress-components/Selection & Input/Common/TextareaControl",
			id: "components-textareacontrol",
			argTypes: {
				onChange: { action: "onChange" },
				label: { control: { type: "text" } },
				help: { control: { type: "text" } },
				disabled: { control: { type: "boolean" } },
				value: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Use [`TextareaControl`](?path=/docs/design-system-components-form-textareacontrol--docs) from `@wordpress/ui` instead. See the [migration guide](?path=/docs/components-textareacontrol--migration-guide)."
				}
			}
		};
		Template = ({ onChange, ...args }) => {
			const [value, setValue] = (0, import_react.useState)("");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextareaControl, {
				...args,
				value,
				onChange: (v) => {
					setValue(v);
					onChange(v);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			label: "Text",
			help: "Enter some text",
			placeholder: "Placeholder"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState('');\n  return <TextareaControl {...args} value={value} onChange={v => {\n    setValue(v);\n    onChange(v);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
export { init_index_story as n, index_story_exports as t };
