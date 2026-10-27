import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as panel_default, t as init_panel } from "./panel-Do2CSeUf.js";
import { n as init_component, t as component_default } from "./component-CFUO6oIU.js";
import { n as init_dimensions_tool, t as DimensionsTool } from "./dimensions-tool-Dw89MzLT.js";
//#region ../packages/block-editor/src/components/dimensions-tool/stories/index.story.tsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, EMPTY_OBJECT, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_panel(), init_component();
		init_dimensions_tool();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/stories/index.story.tsx";
		index_story_default = {
			id: "blockeditor-dimensionstool-dimensionstool",
			title: "Editor/Block Editor/DimensionsTool/DimensionsTool",
			component: DimensionsTool,
			tags: ["status-private"],
			argTypes: {
				panelId: { control: false },
				onChange: { action: "changed" }
			}
		};
		EMPTY_OBJECT = {};
		Default = ({ panelId, onChange, ...props }) => {
			const [value, setValue] = (0, import_react.useState)(EMPTY_OBJECT);
			const resetAll = () => {
				setValue(EMPTY_OBJECT);
				onChange(EMPTY_OBJECT);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(panel_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
				label: "Dimensions",
				panelId,
				resetAll,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DimensionsTool, {
					panelId,
					onChange: (nextValue) => {
						setValue(nextValue);
						onChange(nextValue);
					},
					value,
					...props
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 3
			}, void 0);
		};
		Default.args = { panelId: "panel-id" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  panelId,\n  onChange,\n  ...props\n}) => {\n  const [value, setValue] = useState<Dimensions>(EMPTY_OBJECT);\n  const resetAll = () => {\n    setValue(EMPTY_OBJECT);\n    // Storybook passes the `onChange` action.\n    onChange!(EMPTY_OBJECT);\n  };\n  return <Panel>\n            <ToolsPanel label=\"Dimensions\" panelId={panelId} resetAll={resetAll}>\n                <DimensionsTool panelId={panelId} onChange={nextValue => {\n        setValue(nextValue);\n        // Storybook passes the `onChange` action.\n        onChange!(nextValue);\n      }} value={value} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, index_story_default as default };
