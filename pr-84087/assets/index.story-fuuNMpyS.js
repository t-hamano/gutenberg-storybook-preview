import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_tree_select, t as TreeSelect } from "./tree-select-DdF6DU7V.js";
//#region ../packages/components/src/tree-select/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, TreeSelectWithState, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_tree_select();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/tree-select/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Selection & Input/Common/TreeSelect",
			id: "components-treeselect",
			component: TreeSelect,
			argTypes: {
				help: { control: { type: "text" } },
				label: { control: { type: "text" } },
				prefix: { control: { type: "text" } },
				suffix: { control: { type: "text" } },
				selectedId: { control: false }
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global"
				}
			}
		};
		TreeSelectWithState = (props) => {
			const [selection, setSelection] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreeSelect, {
				...props,
				onChange: setSelection,
				selectedId: selection
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 3
			}, void 0);
		};
		Default = TreeSelectWithState.bind({});
		Default.args = {
			label: "Label Text",
			noOptionLabel: "No parent page",
			help: "Help text to explain the select control.",
			tree: [{
				name: "Page 1",
				id: "p1",
				children: [{
					name: "Descend 1 of page 1",
					id: "p11"
				}, {
					name: "Descend 2 of page 1",
					id: "p12"
				}]
			}, {
				name: "Page 2",
				id: "p2",
				children: [{
					name: "Descend 1 of page 2",
					id: "p21",
					children: [{
						name: "Descend 1 of Descend 1 of page 2",
						id: "p211"
					}]
				}]
			}]
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [selection, setSelection] = useState<ComponentProps<typeof TreeSelect>['selectedId']>();\n  return <TreeSelect {...props} onChange={setSelection} selectedId={selection} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
