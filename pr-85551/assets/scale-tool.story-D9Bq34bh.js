import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as panel_default, t as init_panel } from "./panel-Do2CSeUf.js";
import { n as init_component, t as component_default } from "./component-CFUO6oIU.js";
import { n as init_scale_tool, t as ScaleTool } from "./scale-tool-DUvKlpZj.js";
//#region ../packages/block-editor/src/components/dimensions-tool/stories/scale-tool.story.tsx
var import_jsx_dev_runtime, _jsxFileName, scale_tool_story_default, Default;
function init_scale_tool_story() {
	return (init_scale_tool_story = __esmMin((() => {
		init_react();
		init_panel(), init_component();
		init_scale_tool();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimensions-tool/stories/scale-tool.story.tsx";
		scale_tool_story_default = {
			id: "blockeditor-dimensionstool-scaletool",
			title: "Editor/Block Editor/DimensionsTool/ScaleTool",
			component: ScaleTool,
			tags: ["status-private"],
			argTypes: {
				panelId: { control: false },
				onChange: { action: "changed" }
			}
		};
		Default = ({ panelId, onChange: onChangeProp, ...props }) => {
			const [value, setValue] = (0, import_react.useState)(void 0);
			const resetAll = () => {
				setValue(void 0);
				onChangeProp(void 0);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(panel_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
				label: "Scale",
				panelId,
				resetAll,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScaleTool, {
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
				lineNumber: 33,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 3
			}, void 0);
		};
		Default.args = { panelId: "panel-id" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  panelId,\n  onChange: onChangeProp,\n  ...props\n}) => {\n  const [value, setValue] = useState<string | undefined>(undefined);\n  const resetAll = () => {\n    setValue(undefined);\n    onChangeProp(undefined);\n  };\n  return <Panel>\n            <ToolsPanel label=\"Scale\" panelId={panelId} resetAll={resetAll}>\n                <ScaleTool panelId={panelId} onChange={nextValue => {\n        setValue(nextValue);\n        onChangeProp(nextValue);\n      }} value={value} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_scale_tool_story();
export { Default, scale_tool_story_default as default };
