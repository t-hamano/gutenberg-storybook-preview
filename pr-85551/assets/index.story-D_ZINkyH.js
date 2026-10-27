import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_block_alignment_matrix_control, t as BlockAlignmentMatrixControl } from "./block-alignment-matrix-control-SkZzS290.js";
//#region ../packages/block-editor/src/components/block-alignment-matrix-control/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_block_alignment_matrix_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-alignment-matrix-control/stories/index.story.tsx";
		meta = {
			id: "blockeditor-blockalignmentmatrixcontrol",
			title: "Editor/Block Editor/BlockAlignmentMatrixControl",
			component: BlockAlignmentMatrixControl,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "Renders a control for selecting block alignment using a matrix of alignment options." }
			} },
			argTypes: {
				label: {
					control: "text",
					table: {
						type: { summary: "string" },
						defaultValue: { summary: "'Change matrix alignment'" }
					},
					description: "Label for the control."
				},
				onChange: {
					action: "onChange",
					control: { type: null },
					table: {
						type: { summary: "function" },
						defaultValue: { summary: "() => {}" }
					},
					description: "Function to execute upon a user's change of the matrix state."
				},
				isDisabled: {
					control: "boolean",
					table: {
						type: { summary: "boolean" },
						defaultValue: { summary: "false" }
					},
					description: "Whether the control should be disabled."
				},
				value: {
					control: { type: null },
					table: {
						type: { summary: "string" },
						defaultValue: { summary: "'center'" }
					},
					description: "Content alignment location."
				}
			}
		};
		Default = { render: function Template({ onChange, ...args }) {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockAlignmentMatrixControl, {
				...args,
				value,
				onChange: (...changeArgs) => {
					onChange(...changeArgs);
					setValue(...changeArgs);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 4
			}, this);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template({\n    onChange,\n    ...args\n  }) {\n    const [value, setValue] = useState<ComponentProps<typeof BlockAlignmentMatrixControl>['value']>();\n    return <BlockAlignmentMatrixControl {...args} value={value} onChange={(...changeArgs) => {\n      // Storybook passes an action.\n      onChange!(...changeArgs);\n      setValue(...changeArgs);\n    }} />;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
