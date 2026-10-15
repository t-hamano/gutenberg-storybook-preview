import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_custom_gradient_picker, t as CustomGradientPicker } from "./custom-gradient-picker-DH_WzWCQ.js";
//#region ../packages/components/src/custom-gradient-picker/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, CustomGradientPickerWithState, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_custom_gradient_picker();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/custom-gradient-picker/stories/index.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Color/CustomGradientPicker",
			id: "components-customgradientpicker",
			component: CustomGradientPicker,
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "not-recommended",
					whereUsed: "global",
					notes: "Mostly an internal component. Use `GradientPicker` instead."
				}
			}
		};
		CustomGradientPickerWithState = ({ onChange, ...props }) => {
			const [gradient, setGradient] = (0, import_react.useState)();
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomGradientPicker, {
				...props,
				value: gradient,
				onChange: (newGradient) => {
					setGradient(newGradient);
					onChange(newGradient);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 3
			}, void 0);
		};
		Default = CustomGradientPickerWithState.bind({});
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...props\n}) => {\n  const [gradient, setGradient] = useState<string>();\n  return <CustomGradientPicker {...props} value={gradient} onChange={newGradient => {\n    setGradient(newGradient);\n    onChange(newGradient);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
