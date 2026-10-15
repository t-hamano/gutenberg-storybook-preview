import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { St as init_build_module, n as store, t as init_store, tn as createBlock } from "./store-CSWvid7H.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { ct as toolbar_default, st as init_toolbar } from "./utils-dsqiVm_K.js";
import { Ot as ExperimentalBlockEditorProvider, kt as init_provider } from "./utils-DWipWnH0.js";
import { n as registerCoreBlocks, t as init_build_module$1 } from "./build-module-zKn0yH5b.js";
import { l as use_dispatch_default } from "./build-module-C8SQ3xnO.js";
import { n as init_build_module$2 } from "./build-module-DkpHnLlB.js";
import { I as BlockMover, L as init_block_mover } from "./use-entity-records-C9hLYX8K.js";
//#region ../packages/block-editor/src/components/block-mover/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, blocks, meta, Default, Horizontal, HideDragHandle;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_build_module();
		init_build_module$1();
		init_build_module$2();
		init_toolbar();
		init_block_mover();
		init_provider();
		init_store();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-mover/stories/index.story.jsx";
		registerCoreBlocks();
		blocks = [createBlock("core/group", { layout: { type: "flex" } }, [
			createBlock("core/paragraph"),
			createBlock("core/paragraph"),
			createBlock("core/paragraph")
		]), createBlock("core/buttons", {}, [
			createBlock("core/button"),
			createBlock("core/button"),
			createBlock("core/button")
		])];
		meta = {
			id: "blockeditor-blockmover",
			title: "Editor/Block Editor/BlockMover",
			component: BlockMover,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "BlockMover component allows moving blocks inside the editor using up and down buttons." }
			} },
			decorators: [(Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, {
				value: blocks,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toolbar_default, {
					label: "Block Mover",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 4
			}, void 0)],
			argTypes: {
				clientIds: {
					control: { type: "none" },
					description: "The client IDs of the blocks to move."
				},
				hideDragHandle: {
					control: { type: "boolean" },
					description: "If this property is true, the drag handle is hidden."
				}
			}
		};
		Default = { args: { clientIds: [blocks[0].innerBlocks[1].clientId] } };
		Horizontal = {
			decorators: [(Story) => {
				const { updateBlockListSettings } = use_dispatch_default(store);
				(0, import_react.useEffect)(() => {
					/**
					* This shouldn't be needed but unfortunately
					* the layout orientation is not declarative, we need
					* to render the blocks to update the block settings in the state.
					*/
					updateBlockListSettings(blocks[1].clientId, { orientation: "horizontal" });
				}, []);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 11
				}, void 0);
			}],
			args: { clientIds: [blocks[1].innerBlocks[1].clientId] },
			parameters: { docs: { canvas: { sourceState: "hidden" } } }
		};
		HideDragHandle = { args: {
			...Default.args,
			hideDragHandle: true
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    clientIds: [blocks[0].innerBlocks[1].clientId]\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Horizontal.parameters = {
			...Horizontal.parameters,
			docs: {
				...Horizontal.parameters?.docs,
				source: {
					originalSource: "{\n  decorators: [Story => {\n    const {\n      updateBlockListSettings\n    } = useDispatch(blockEditorStore);\n    useEffect(() => {\n      /**\n       * This shouldn't be needed but unfortunately\n       * the layout orientation is not declarative, we need\n       * to render the blocks to update the block settings in the state.\n       */\n      updateBlockListSettings(blocks[1].clientId, {\n        orientation: 'horizontal'\n      });\n    }, []);\n    return <Story />;\n  }],\n  args: {\n    clientIds: [blocks[1].innerBlocks[1].clientId]\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'hidden'\n      }\n    }\n  }\n}",
					...Horizontal.parameters?.docs?.source
				},
				description: {
					story: "This story shows the block mover with horizontal orientation.\nIt is necessary to render the blocks to update the block settings in the state.",
					...Horizontal.parameters?.docs?.description
				}
			}
		};
		HideDragHandle.parameters = {
			...HideDragHandle.parameters,
			docs: {
				...HideDragHandle.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    ...Default.args,\n    hideDragHandle: true\n  }\n}",
					...HideDragHandle.parameters?.docs?.source
				},
				description: {
					story: "You can hide the drag handle by `hideDragHandle` attribute.",
					...HideDragHandle.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, HideDragHandle, Horizontal, meta as default };
