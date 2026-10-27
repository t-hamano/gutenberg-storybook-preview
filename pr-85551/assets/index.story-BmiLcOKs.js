import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_custom_select_control, t as CustomSelectControl } from "./custom-select-control-C_JyshtH.js";
//#region ../packages/components/src/custom-select-control/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, WithLongLabels, WithHints;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_custom_select_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-select-control/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-components/Selection & Input/Common/CustomSelectControl",
			component: CustomSelectControl,
			id: "components-customselectcontrol",
			argTypes: {
				onChange: { control: false },
				value: { control: false }
			},
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { source: { excludeDecorators: true } },
				componentStatus: {
					status: "recommended",
					whereUsed: "global",
					notes: "Will be superseded by [`SelectControl`](?path=/docs/design-system-components-form-selectcontrol--docs) in `@wordpress/ui`, but continue using for now."
				}
			},
			decorators: [(Story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: { minHeight: "150px" },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Story, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 4
			}, void 0)]
		};
		Template = (props) => {
			const [value, setValue] = (0, import_react.useState)(props.options[0]);
			const onChange = (changeObject) => {
				setValue(changeObject.selectedItem);
				props.onChange?.(changeObject);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelectControl, {
				...props,
				onChange,
				value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			label: "Label",
			options: [
				{
					key: "small",
					name: "Small",
					style: { fontSize: "50%" }
				},
				{
					key: "normal",
					name: "Normal",
					style: { fontSize: "100%" },
					className: "can-apply-custom-class-to-option"
				},
				{
					key: "large",
					name: "Large",
					style: { fontSize: "200%" }
				},
				{
					key: "huge",
					name: "Huge",
					style: { fontSize: "300%" }
				}
			]
		};
		WithLongLabels = Template.bind({});
		WithLongLabels.args = {
			...Default.args,
			options: [
				{
					key: "reallylonglabel1",
					name: "Really long labels are good for stress testing"
				},
				{
					key: "reallylonglabel2",
					name: "But they can take a long time to type."
				},
				{
					key: "reallylonglabel3",
					name: "That really is ok though because you should stress test your UIs."
				}
			]
		};
		WithHints = Template.bind({});
		WithHints.args = {
			...Default.args,
			options: [
				{
					key: "thumbnail",
					name: "Thumbnail",
					hint: "150x150"
				},
				{
					key: "medium",
					name: "Medium",
					hint: "250x250"
				},
				{
					key: "large",
					name: "Large",
					hint: "1024x1024"
				},
				{
					key: "full",
					name: "Full Size",
					hint: "1600x1600"
				}
			]
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState(props.options[0]);\n  const onChange: React.ComponentProps<typeof CustomSelectControl>['onChange'] = changeObject => {\n    setValue(changeObject.selectedItem);\n    props.onChange?.(changeObject);\n  };\n  return <CustomSelectControl {...props} onChange={onChange} value={value} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithLongLabels.parameters = {
			...WithLongLabels.parameters,
			docs: {
				...WithLongLabels.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState(props.options[0]);\n  const onChange: React.ComponentProps<typeof CustomSelectControl>['onChange'] = changeObject => {\n    setValue(changeObject.selectedItem);\n    props.onChange?.(changeObject);\n  };\n  return <CustomSelectControl {...props} onChange={onChange} value={value} />;\n}",
					...WithLongLabels.parameters?.docs?.source
				}
			}
		};
		WithHints.parameters = {
			...WithHints.parameters,
			docs: {
				...WithHints.parameters?.docs,
				source: {
					originalSource: "props => {\n  const [value, setValue] = useState(props.options[0]);\n  const onChange: React.ComponentProps<typeof CustomSelectControl>['onChange'] = changeObject => {\n    setValue(changeObject.selectedItem);\n    props.onChange?.(changeObject);\n  };\n  return <CustomSelectControl {...props} onChange={onChange} value={value} />;\n}",
					...WithHints.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, WithHints, WithLongLabels, meta as default };
