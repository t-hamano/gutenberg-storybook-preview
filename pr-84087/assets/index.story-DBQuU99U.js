import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { St as init_build_module, kn as registerBlockType, tn as createBlock, yn as getBlockType } from "./store-CSWvid7H.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { Ft as init_use_block_props, It as useBlockProps, Ot as ExperimentalBlockEditorProvider, S as init_inner_blocks, b as init_block_list, kt as init_provider, x as ForwardedInnerBlocks, y as BlockList } from "./utils-DWipWnH0.js";
//#region ../packages/block-editor/src/components/inner-blocks/stories/index.story.jsx
function ContainerEdit() {
	const args = (0, import_react.useContext)(ArgsContext);
	const blockProps = useBlockProps();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		...blockProps,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ForwardedInnerBlocks, { ...args }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 3
	}, this);
}
function ChildEdit({ name }) {
	const blockProps = useBlockProps();
	const { title } = getBlockType(name);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		...blockProps,
		children: title
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 9
	}, this);
}
function useContainerBlock() {
	return (0, import_react.useMemo)(() => {
		CHILD_BLOCKS.forEach(([name, title, category]) => {
			if (!getBlockType(name)) registerBlockType(name, {
				apiVersion: 3,
				title,
				category,
				edit: ChildEdit,
				save: () => null
			});
		});
		if (!getBlockType(CONTAINER_BLOCK)) registerBlockType(CONTAINER_BLOCK, {
			apiVersion: 3,
			title: "Example Container",
			category: "design",
			supports: { inserter: false },
			edit: ContainerEdit,
			save: () => null
		});
		return [{
			...createBlock(CONTAINER_BLOCK),
			clientId: CONTAINER_CLIENT_ID
		}];
	}, []);
}
var import_jsx_dev_runtime, _jsxFileName, ArgsContext, CONTAINER_BLOCK, TEXT_BLOCK, CHILD_BLOCKS, CONTAINER_CLIENT_ID, SELECTION, storyStyles, meta, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_build_module();
		init_react();
		init_inner_blocks();
		init_block_list();
		init_use_block_props();
		init_provider();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/inner-blocks/stories/index.story.jsx";
		ArgsContext = (0, import_react.createContext)({});
		CONTAINER_BLOCK = "storybook/inner-blocks-container";
		TEXT_BLOCK = "storybook/example-text";
		CHILD_BLOCKS = [[
			TEXT_BLOCK,
			"Example Text",
			"text"
		], [
			"storybook/example-media",
			"Example Media",
			"media"
		]];
		CONTAINER_CLIENT_ID = "inner-blocks-container";
		SELECTION = {
			selectionStart: { clientId: CONTAINER_CLIENT_ID },
			selectionEnd: { clientId: CONTAINER_CLIENT_ID }
		};
		storyStyles = `
    .inner-blocks-story .wp-block[data-type="${CONTAINER_BLOCK}"] {
        border: 1px dashed #949494;
        padding: 16px;
    }
`;
		meta = {
			id: "blockeditor-innerblocks",
			title: "Editor/Block Editor/InnerBlocks",
			component: ForwardedInnerBlocks,
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "InnerBlocks is a component which allows a single block to have multiple blocks as children. It is rendered by a block `edit` implementation, and pairs with `InnerBlocks.Content` in the `save` implementation, which is replaced by the content of the nested blocks." },
				source: { code: `registerBlockType( 'my-plugin/my-block', {
    edit() {
        const blockProps = useBlockProps();

        return (
            <div { ...blockProps }>
                <InnerBlocks
                    allowedBlocks={ [ 'core/image', 'core/paragraph' ] }
                    orientation="vertical"
                    renderAppender={ InnerBlocks.ButtonBlockAppender }
                />
            </div>
        );
    },

    save() {
        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );` }
			} },
			argTypes: {
				allowedBlocks: {
					control: { type: "select" },
					options: [
						"all",
						"none",
						"text block only"
					],
					mapping: {
						all: true,
						none: false,
						"text block only": [TEXT_BLOCK]
					},
					description: "The block types that can be inserted. `true` allows every block type, `false` allows none, and an array limits insertion to the listed block types.",
					table: {
						type: { summary: "boolean | string[]" },
						defaultValue: { summary: "true" }
					}
				},
				orientation: {
					control: { type: "select" },
					options: ["vertical", "horizontal"],
					description: "Whether inner blocks are shown horizontally or vertically. It does not style the inner blocks, but it orients the block movers and makes drag and drop behave accordingly.",
					table: {
						type: { summary: "'horizontal' | 'vertical'" },
						defaultValue: { summary: "'vertical'" }
					}
				},
				templateLock: {
					control: { type: "select" },
					options: [
						false,
						"all",
						"insert",
						"contentOnly"
					],
					description: "Locks the inner blocks area. `'all'` prevents all operations, `'insert'` prevents inserting and removing blocks but allows moving them, `'contentOnly'` prevents all operations and cannot be overridden by children, and `false` opts out of a lock applied by a parent. When unset, the lock of the parent inner blocks area is used.",
					table: { type: { summary: "boolean | 'all' | 'insert' | 'contentOnly'" } }
				},
				renderAppender: {
					control: { type: "select" },
					options: [
						"default",
						"button",
						"none"
					],
					mapping: {
						default: void 0,
						button: ForwardedInnerBlocks.ButtonBlockAppender,
						none: false
					},
					description: "The component shown as the trailing appender of the inner blocks list. `InnerBlocks.ButtonBlockAppender` and `InnerBlocks.DefaultBlockAppender` are exposed for convenience, and any valid component can be passed. `false` renders no appender, and when unset the default appender is shown.",
					table: { type: { summary: "Component | false" } }
				},
				defaultBlock: {
					control: { type: "object" },
					description: "The block type inserted by default, in the form `{ name, attributes }`.",
					table: { type: { summary: "Object" } }
				},
				directInsert: {
					control: { type: "boolean" },
					description: "Whether the appender inserts `defaultBlock` directly, skipping the inserter dropdown and any registered inserter variations of that block type.",
					table: { type: { summary: "boolean" } }
				},
				prioritizedInserterBlocks: {
					control: { type: "object" },
					description: "The block types shown first in the block inserter, as an array of `{blockName}/{variationName}` strings, where the variation name is optional.",
					table: { type: { summary: "string[]" } }
				},
				placeholder: {
					control: false,
					description: "An element rendered in front of the appender, which can be used to represent an example state before any block is inserted.",
					table: { type: { summary: "Element" } }
				}
			}
		};
		Default = { render: function Template(args) {
			const blocks = useContainerBlock();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArgsContext.Provider, {
				value: args,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperimentalBlockEditorProvider, {
					value: blocks,
					selection: SELECTION,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: storyStyles }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 6
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "inner-blocks-story",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockList, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 241,
							columnNumber: 7
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 240,
						columnNumber: 6
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 235,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 234,
				columnNumber: 4
			}, this);
		} };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "{\n  render: function Template(args) {\n    const blocks = useContainerBlock();\n    return <ArgsContext.Provider value={args}>\n                <ExperimentalBlockEditorProvider value={blocks} selection={SELECTION}>\n                    <style>{storyStyles}</style>\n                    <div className=\"inner-blocks-story\">\n                        <BlockList />\n                    </div>\n                </ExperimentalBlockEditorProvider>\n            </ArgsContext.Provider>;\n  }\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
