import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { St as init_build_module, tn as createBlock } from "./store-CSWvid7H.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { Ot as ExperimentalBlockEditorProvider, kt as init_provider } from "./utils-DWipWnH0.js";
import { d as init_block_title, n as registerCoreBlocks, t as init_build_module$1, u as BlockTitle } from "./build-module-zKn0yH5b.js";
//#region ../packages/block-editor/src/components/block-title/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, blocks, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$1();
		init_build_module();
		init_provider();
		init_block_title();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-title/stories/index.story.jsx";
		registerCoreBlocks();
		blocks = [createBlock("core/paragraph")];
		meta = {
			id: "blockeditor-blocktitle",
			title: "Editor/Block Editor/BlockTitle",
			component: BlockTitle,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "Renders the block's configured title as a string, or empty if the title cannot be determined." }
			} },
			decorators: [(Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, {
				value: blocks,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 4
			}, void 0)],
			argTypes: {
				clientId: {
					control: { type: null },
					description: "Client ID of block.",
					table: { type: { summary: "string" } }
				},
				maximumLength: {
					control: { type: "number" },
					description: "The maximum length that the block title string may be before truncated.",
					table: { type: { summary: "number" } }
				},
				context: {
					control: { type: "text" },
					description: "The context to pass to `getBlockLabel`.",
					table: { type: { summary: "string" } }
				}
			}
		};
		Default = { args: { clientId: blocks[0].clientId } };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    clientId: blocks[0].clientId\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
