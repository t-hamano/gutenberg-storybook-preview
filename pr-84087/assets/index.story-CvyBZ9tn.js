import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as panel_default, t as init_panel } from "./panel-Bpg_Bh_9.js";
import { n as init_component, t as component_default } from "./component-CjDSWIDY.js";
import { n as init_resolution_tool, t as ResolutionTool } from "./resolution-tool-CGaW45W3.js";
//#region ../packages/block-editor/src/components/resolution-tool/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_panel(), init_component();
		init_resolution_tool();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/resolution-tool/stories/index.story.jsx";
		index_story_default = {
			id: "blockeditor-resolutioncontrol",
			title: "Editor/Block Editor/ResolutionControl",
			component: ResolutionTool,
			tags: ["status-private"],
			parameters: { docs: {
				canvas: { sourceState: "shown" },
				description: { component: "A control for selecting image resolution with preset size options." }
			} },
			argTypes: {
				value: {
					control: { type: null },
					description: "Currently selected resolution value.",
					table: { type: { summary: "string" } }
				},
				onChange: {
					action: "onChange",
					control: { type: null },
					description: "Handles change in resolution selection.",
					table: { type: { summary: "function" } }
				},
				options: {
					control: "object",
					description: "Array of resolution options to display.",
					table: { type: { summary: "array" } }
				},
				defaultValue: {
					control: "radio",
					options: [
						"thumbnail",
						"medium",
						"large",
						"full"
					],
					description: "Default resolution value.",
					table: { type: { summary: "string" } }
				},
				isShownByDefault: {
					control: "boolean",
					description: "Whether the control is shown by default in the panel.",
					table: { type: { summary: "boolean" } }
				},
				panelId: {
					control: { type: null },
					description: "ID of the parent tools panel.",
					table: { type: { summary: "string" } }
				}
			}
		};
		Default = ({ label, panelId, onChange: onChangeProp, ...props }) => {
			const [attributes, setAttributes] = (0, import_react.useReducer)((prevState, nextState) => ({
				...prevState,
				...nextState
			}), {});
			const { resolution } = attributes;
			const resetAll = (resetFilters = []) => {
				let newAttributes = {};
				resetFilters.forEach((resetFilter) => {
					newAttributes = {
						...newAttributes,
						...resetFilter(newAttributes)
					};
				});
				setAttributes(newAttributes);
				onChangeProp(void 0);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(panel_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, {
				label,
				panelId,
				resetAll,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResolutionTool, {
					panelId,
					onChange: (newValue) => {
						setAttributes({ resolution: newValue });
						onChangeProp(newValue);
					},
					value: resolution,
					resetAllFilter: () => ({ resolution: void 0 }),
					...props
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 4
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 3
			}, void 0);
		};
		Default.args = {
			label: "Settings",
			defaultValue: "full",
			panelId: "panel-id"
		};
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
					originalSource: "({\n  label,\n  panelId,\n  onChange: onChangeProp,\n  ...props\n}) => {\n  const [attributes, setAttributes] = useReducer((prevState, nextState) => ({\n    ...prevState,\n    ...nextState\n  }), {});\n  const {\n    resolution\n  } = attributes;\n  const resetAll = (resetFilters = []) => {\n    let newAttributes = {};\n    resetFilters.forEach(resetFilter => {\n      newAttributes = {\n        ...newAttributes,\n        ...resetFilter(newAttributes)\n      };\n    });\n    setAttributes(newAttributes);\n    onChangeProp(undefined);\n  };\n  return <Panel>\n            <ToolsPanel label={label} panelId={panelId} resetAll={resetAll}>\n                <ResolutionTool panelId={panelId} onChange={newValue => {\n        setAttributes({\n          resolution: newValue\n        });\n        onChangeProp(newValue);\n      }} value={resolution} resetAllFilter={() => ({\n        resolution: undefined\n      })} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, index_story_default as default };
