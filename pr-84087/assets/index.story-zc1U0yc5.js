import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_dimension_control, t as DimensionControl } from "./dimension-control-CO-oolk1.js";
//#region ../packages/block-editor/src/components/dimension-control/stories/index.story.jsx
var import_jsx_dev_runtime, _jsxFileName, index_story_default, Template, Default, WithCustomLabel, WithWidthLabel, WithMinHeightLabel, WithPresets, WithInitialValue, TemplateWithPresetValue, WithPresetValue;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_dimension_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/block-editor/src/components/dimension-control/stories/index.story.jsx";
		index_story_default = {
			component: DimensionControl,
			id: "blockeditor-dimensioncontrol",
			title: "Editor/Block Editor/DimensionControl"
		};
		Template = (props) => {
			const [value, setValue] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DimensionControl, {
				onChange: setValue,
				value,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		WithCustomLabel = Template.bind({});
		WithCustomLabel.args = { label: "Height" };
		WithWidthLabel = Template.bind({});
		WithWidthLabel.args = { label: "Width" };
		WithMinHeightLabel = Template.bind({});
		WithMinHeightLabel.args = { label: "Minimum height" };
		WithPresets = Template.bind({});
		WithPresets.args = { label: "Height with presets" };
		WithInitialValue = Template.bind({});
		WithInitialValue.args = {
			label: "Height",
			value: "24px"
		};
		TemplateWithPresetValue = (props) => {
			const [value, setValue] = (0, import_react.useState)("var:preset|dimension|medium");
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DimensionControl, {
				onChange: setValue,
				value,
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 3
			}, void 0);
		};
		WithPresetValue = TemplateWithPresetValue.bind({});
		WithPresetValue.args = { label: "Height (preset value)" };
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState();\n  return <DimensionControl onChange={setValue} value={value} {...props} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithCustomLabel.parameters = {
			...WithCustomLabel.parameters,
			docs: {
				...WithCustomLabel.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState();\n  return <DimensionControl onChange={setValue} value={value} {...props} />;\n}",
					...WithCustomLabel.parameters?.docs?.source
				}
			}
		};
		WithWidthLabel.parameters = {
			...WithWidthLabel.parameters,
			docs: {
				...WithWidthLabel.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState();\n  return <DimensionControl onChange={setValue} value={value} {...props} />;\n}",
					...WithWidthLabel.parameters?.docs?.source
				}
			}
		};
		WithMinHeightLabel.parameters = {
			...WithMinHeightLabel.parameters,
			docs: {
				...WithMinHeightLabel.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState();\n  return <DimensionControl onChange={setValue} value={value} {...props} />;\n}",
					...WithMinHeightLabel.parameters?.docs?.source
				}
			}
		};
		WithPresets.parameters = {
			...WithPresets.parameters,
			docs: {
				...WithPresets.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState();\n  return <DimensionControl onChange={setValue} value={value} {...props} />;\n}",
					...WithPresets.parameters?.docs?.source
				}
			}
		};
		WithInitialValue.parameters = {
			...WithInitialValue.parameters,
			docs: {
				...WithInitialValue.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState();\n  return <DimensionControl onChange={setValue} value={value} {...props} />;\n}",
					...WithInitialValue.parameters?.docs?.source
				}
			}
		};
		WithPresetValue.parameters = {
			...WithPresetValue.parameters,
			docs: {
				...WithPresetValue.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState('var:preset|dimension|medium');\n  return <DimensionControl onChange={setValue} value={value} {...props} />;\n}",
					...WithPresetValue.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithCustomLabel, WithInitialValue, WithMinHeightLabel, WithPresetValue, WithPresets, WithWidthLabel, index_story_default as default };
