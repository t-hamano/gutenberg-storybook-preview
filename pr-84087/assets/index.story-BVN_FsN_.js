import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { St as init_build_module, kn as registerBlockType, tn as createBlock, yn as getBlockType } from "./store-CSWvid7H.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { B as block_popover_default, Ft as init_use_block_props, It as useBlockProps, Ot as ExperimentalBlockEditorProvider, V as init_block_popover, b as init_block_list, kt as init_provider, y as BlockList } from "./utils-DWipWnH0.js";
//#region ../packages/block-editor/src/components/block-popover/stories/index.story.jsx
function ExampleEdit({ attributes }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		...useBlockProps(),
		children: attributes.content
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 9
	}, this);
}
function useExampleBlocks() {
	return (0, import_react.useMemo)(() => {
		if (!getBlockType(BLOCK_NAME)) registerBlockType(BLOCK_NAME, {
			apiVersion: 3,
			title: "Example",
			category: "text",
			attributes: { content: { type: "string" } },
			edit: ExampleEdit,
			save: () => null
		});
		return BLOCK_LABELS.map((label, index) => ({
			...createBlock(BLOCK_NAME, { content: `${label} example block.` }),
			clientId: clientIds[index]
		}));
	}, []);
}
var import_jsx_dev_runtime, _jsxFileName, BLOCK_NAME, BLOCK_LABELS, clientIds, storyStyles, clientIdLabels, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_react();
		init_block_popover();
		init_block_list();
		init_use_block_props();
		init_provider();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-popover/stories/index.story.jsx";
		BLOCK_NAME = "storybook/example";
		BLOCK_LABELS = [
			"First",
			"Second",
			"Third"
		];
		clientIds = BLOCK_LABELS.map((label, index) => `example-block-${index + 1}`);
		storyStyles = `
    .block-popover-story {
        position: relative;
        padding: 48px 0;
    }
    .block-popover-story .block-editor-block-list__block {
        border: 1px dashed #949494;
        padding: 8px;
        margin-bottom: 16px;
    }
    .block-popover-story .block-editor-block-popover .components-popover__content {
        background: #fff;
        border: 1px solid #1e1e1e;
        padding: 8px;
    }
`;
		clientIdLabels = Object.fromEntries(clientIds.map((clientId, index) => [clientId, `Block ${index + 1}`]));
		meta = {
			id: "blockeditor-blockpopover",
			title: "Editor/Block Editor/BlockPopover",
			component: block_popover_default,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "BlockPopover renders editor UI by the block in a popover, positioned outside the canvas so that it doesn't interfere with the block list layout. The popover is anchored to the block matching `clientId`, so that block has to be rendered by a block list within a block editor provider. When a `bottomClientId` is passed as well, the popover is anchored to the area covered by both blocks." }
			} },
			decorators: [(Story) => {
				const blocks = useExampleBlocks();
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, {
					value: blocks,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: storyStyles }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 6
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "block-popover-story",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockList, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 7
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 7
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 6
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 5
				}, void 0);
			}],
			argTypes: {
				clientId: {
					control: {
						type: "select",
						labels: clientIdLabels
					},
					options: clientIds,
					description: "The client ID of the block representing the top position of the popover.",
					type: {
						name: "string",
						required: true
					},
					table: { type: { summary: "string" } }
				},
				bottomClientId: {
					control: {
						type: "select",
						labels: clientIdLabels
					},
					options: clientIds,
					description: "The client ID of the block representing the bottom position of the popover.",
					table: { type: { summary: "string" } }
				},
				shift: {
					control: { type: "boolean" },
					description: "Determines whether the block popover always shifts into the viewport or remains at its original position.",
					table: {
						type: { summary: "boolean" },
						defaultValue: { summary: "true" }
					}
				},
				children: {
					control: { type: "text" },
					description: "The content rendered inside the popover.",
					table: { type: { summary: "ReactNode" } }
				}
			}
		};
		Default = { args: {
			clientId: clientIds[1],
			children: "This is a block popover example."
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    clientId: clientIds[1],\n    children: 'This is a block popover example.'\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
