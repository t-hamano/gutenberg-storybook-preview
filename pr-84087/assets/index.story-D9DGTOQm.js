import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_block_heading_level_dropdown, t as HeadingLevelDropdown } from "./block-heading-level-dropdown-CRc_xIL7.js";
//#region ../packages/block-editor/src/components/block-heading-level-dropdown/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_block_heading_level_dropdown();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-heading-level-dropdown/stories/index.story.jsx";
		meta = {
			id: "blockeditor-headingleveldropdown",
			title: "Editor/Block Editor/HeadingLevelDropdown",
			component: HeadingLevelDropdown,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "Dropdown for selecting a heading level (1 through 6) or paragraph (0)." }
			} },
			argTypes: {
				value: {
					control: { type: null },
					description: "The chosen heading level."
				},
				options: {
					control: "check",
					options: [
						1,
						2,
						3,
						4,
						5,
						6
					],
					description: "An array of supported heading levels."
				},
				onChange: {
					action: "onChange",
					control: { type: null },
					description: "Function called with the selected value changes."
				}
			}
		};
		Default = {
			render: function Template({ onChange, ...args }) {
				const [value, setValue] = (0, import_react.useState)(args.value);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingLevelDropdown, {
					...args,
					value,
					onChange: (...changeArgs) => {
						setValue(...changeArgs);
						onChange(...changeArgs);
					}
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 4
				}, this);
			},
			args: { value: 2 }
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState(args.value);\n    return <HeadingLevelDropdown {...args} value={value} onChange={(...changeArgs) => {\n      setValue(...changeArgs);\n      onChange(...changeArgs);\n    }} />;\n  },\n  args: {\n    value: 2\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
