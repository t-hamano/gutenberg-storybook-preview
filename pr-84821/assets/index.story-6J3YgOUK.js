import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_angle_picker_control, t as AnglePickerControl } from "./angle-picker-control-CZwSlisE.js";
//#region ../packages/components/src/angle-picker-control/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, AnglePickerWithState, Default;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_angle_picker_control();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/angle-picker-control/stories/index.story.tsx";
		meta = {
			id: "components-anglepickercontrol",
			title: "Components/@wordpress-components/AnglePickerControl",
			component: AnglePickerControl,
			argTypes: {
				as: { control: false },
				value: { control: false }
			},
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		AnglePickerWithState = ({ onChange, ...args }) => {
			const [angle, setAngle] = (0, import_react.useState)(0);
			const handleChange = (newValue) => {
				setAngle(newValue);
				onChange(newValue);
			};
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnglePickerControl, {
				...args,
				value: angle,
				onChange: handleChange
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 3
			}, void 0);
		};
		Default = AnglePickerWithState.bind({});
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  onChange,\n  ...args\n}) => {\n  const [angle, setAngle] = useState<number>(0);\n  const handleChange = (newValue: number) => {\n    setAngle(newValue);\n    onChange(newValue);\n  };\n  return <AnglePickerControl {...args} value={angle} onChange={handleChange} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, meta as default };
