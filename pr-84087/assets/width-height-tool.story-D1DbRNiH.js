import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as panel_default, t as init_panel } from "./panel-Bpg_Bh_9.js";
import { n as init_component, t as component_default } from "./component-CjDSWIDY.js";
import { n as init_width_height_tool, t as WidthHeightTool } from "./width-height-tool-CVsN5Lkj.js";
//#region ../packages/block-editor/src/components/dimensions-tool/stories/width-height-tool.story.jsx
var import_jsx_dev_runtime, _jsxFileName, width_height_tool_story_default, EMPTY_OBJECT, Default;
function init_width_height_tool_story() {
	return (init_width_height_tool_story = __esmMin((() => {
		init_react();
		init_panel(), init_component();
		init_width_height_tool();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/stories/width-height-tool.story.jsx";
		width_height_tool_story_default = {
			id: "blockeditor-dimensionstool-widthheighttool",
			title: "Editor/Block Editor/DimensionsTool/WidthHeightTool",
			component: WidthHeightTool,
			tags: ["status-private"],
			argTypes: {
				panelId: { control: false },
				onChange: { action: "changed" }
			}
		};
		EMPTY_OBJECT = {};
		Default = ({ panelId, onChange: onChangeProp, ...props }) => {
			const [value, setValue] = (0, import_react.useState)(EMPTY_OBJECT);
			const resetAll = () => {
				setValue(EMPTY_OBJECT);
				onChangeProp(EMPTY_OBJECT);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(panel_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
				label: "Width & Height",
				panelId,
				resetAll,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WidthHeightTool, {
					panelId,
					onChange: (nextValue) => {
						setValue(nextValue);
						onChangeProp(nextValue);
					},
					value,
					...props
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 3
			}, void 0);
		};
		Default.args = { panelId: "panel-id" };
		Default.__docgenInfo = {
			"description": "",
			"methods": [],
			"displayName": "Default"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  panelId,\n  onChange: onChangeProp,\n  ...props\n}) => {\n  const [value, setValue] = useState(EMPTY_OBJECT);\n  const resetAll = () => {\n    setValue(EMPTY_OBJECT);\n    onChangeProp(EMPTY_OBJECT);\n  };\n  return <Panel>\n            <ToolsPanel label=\"Width & Height\" panelId={panelId} resetAll={resetAll}>\n                <WidthHeightTool panelId={panelId} onChange={nextValue => {\n        setValue(nextValue);\n        onChangeProp(nextValue);\n      }} value={value} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_width_height_tool_story();
export { Default, width_height_tool_story_default as default };
