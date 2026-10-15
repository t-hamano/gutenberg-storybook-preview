import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { r as init_alignment_control, t as AlignmentControl } from "./alignment-control-Cq7fXNCY.js";
//#region ../packages/block-editor/src/components/alignment-control/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_alignment_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/alignment-control/stories/index.story.jsx";
		meta = {
			id: "blockeditor-alignmentcontrol",
			title: "Editor/Block Editor/AlignmentControl",
			component: AlignmentControl,
			argTypes: {
				value: {
					control: false,
					defaultValue: "undefined",
					description: "The current value of the alignment setting."
				},
				onChange: {
					action: "onChange",
					control: false,
					description: "A callback function invoked when the toolbar's alignment value is changed via an interaction with any of the toolbar's buttons. Called with the new alignment value (ie: `left`, `center`, `right`, `undefined`) as the only argument."
				}
			},
			parameters: { docs: { description: { component: "The `AlignmentControl` component renders a dropdown menu that displays alignment options for the selected block.\n\nThis component is mostly used for blocks that display text, such as Heading, Paragraph, Post Author, Post Comments, Verse, Quote, Post Title, etc... And the available alignment options are `left`, `center` or `right` alignment.\n\nIf you want to use the alignment control in a toolbar, you should use the `AlignmentToolbar` component instead." } } }
		};
		Default = { render: function Template({ onChange, ...args }) {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlignmentControl, {
				...args,
				onChange: (...changeArgs) => {
					onChange(...changeArgs);
					setValue(...changeArgs);
				},
				value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 4
			}, this);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState();\n    return <AlignmentControl {...args} onChange={(...changeArgs) => {\n      onChange(...changeArgs);\n      setValue(...changeArgs);\n    }} value={value} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
