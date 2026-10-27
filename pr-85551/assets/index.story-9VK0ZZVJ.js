import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { rn as createBlock, wt as init_build_module } from "./store-BQzmWUzp.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { At as ExperimentalBlockEditorProvider, jt as init_provider } from "./utils-Dno6zrH7.js";
import { d as init_block_title, n as registerCoreBlocks, t as init_build_module$1, u as BlockTitle } from "./build-module-DVe-qev_.js";
//#region ../packages/block-editor/src/components/block-title/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, blocks, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module$1();
		init_build_module();
		init_provider();
		init_block_title();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-title/stories/index.story.tsx";
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
					lineNumber: 30,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
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
		try {
			meta.__docgenInfo = {
				"description": "Renders the block's configured title as a string, or empty if the title\ncannot be determined.",
				"displayName": "stories",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/block-title/stories/index.story.tsx",
				"methods": [],
				"props": {
					"clientId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-title/types.ts",
							"name": "BlockTitleProps"
						}],
						"description": "Client ID of block. Without one, the title is `null`.",
						"name": "clientId",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-title/types.ts",
							"name": "BlockTitleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | null" }
					},
					"maximumLength": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-title/types.ts",
							"name": "BlockTitleProps"
						}],
						"description": "The maximum length that the block title string may be before truncated.",
						"name": "maximumLength",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-title/types.ts",
							"name": "BlockTitleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"context": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-title/types.ts",
							"name": "BlockTitleProps"
						}],
						"description": "The context to pass to `getBlockLabel`.",
						"name": "context",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/block-editor/src/components/block-title/types.ts",
							"name": "BlockTitleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					}
				},
				"tags": {
					"example": "```jsx\n<BlockTitle clientId=\"afd1cb17-2c08-4e7a-91be-007ba7ddc3a1\" maximumLength={ 17 }/>\n```",
					"param": "props\nprops.clientId Client ID of block.\nprops.maximumLength The maximum length that the block title string may be before truncated.\nprops.context The context to pass to `getBlockLabel`.",
					"return": "Block title."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
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
