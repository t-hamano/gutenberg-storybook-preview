import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_letter_spacing_control, t as LetterSpacingControl } from "./letter-spacing-control-DTTu6-A6.js";
//#region ../packages/block-editor/src/components/letter-spacing-control/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_letter_spacing_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/letter-spacing-control/stories/index.story.jsx";
		meta = {
			id: "blockeditor-letterspacingcontrol",
			title: "Editor/Block Editor/LetterSpacingControl",
			component: LetterSpacingControl,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "LetterSpacingControl renders a UnitControl that lets the user enter a letter-spacing value with a unit (px, em, rem)." }
			} },
			argTypes: {
				value: {
					control: { type: null },
					description: "The current value of the letter spacing setting.",
					table: { type: { summary: "string" } }
				},
				onChange: {
					action: "onChange",
					control: { type: null },
					description: "A callback function invoked when the value is changed.",
					table: { type: { summary: "function" } }
				},
				__unstableInputWidth: {
					control: "text",
					description: "Input width to pass through to inner UnitControl. Should be a valid CSS value.",
					table: {
						type: { summary: "string | number | undefined" },
						defaultValue: { summary: "60px" }
					}
				}
			}
		};
		Default = { render: function Template({ onChange, ...args }) {
			const [value, setValue] = (0, import_react.useState)("");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LetterSpacingControl, {
				...args,
				value,
				onChange: (newValue) => {
					onChange(newValue);
					setValue(newValue);
				}
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
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState('');\n    return <LetterSpacingControl {...args} value={value} onChange={newValue => {\n      onChange(newValue);\n      setValue(newValue);\n    }} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
