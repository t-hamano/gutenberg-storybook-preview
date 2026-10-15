import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as init_time_picker, t as TimePicker } from "./time-picker-BnojXkET.js";
//#region ../packages/components/src/date-time/stories/time.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, TimeInputTemplate, TimeInput;
function init_time_story() {
	return (init_time_story = __esmMin((() => {
		init_react();
		init_time_picker();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/stories/time.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Time & Date/TimePicker",
			id: "components-timepicker",
			component: TimePicker,
			subcomponents: { "TimePicker.TimeInput": TimePicker.TimeInput },
			argTypes: {
				currentTime: { control: "date" },
				onChange: {
					action: "onChange",
					control: false
				}
			},
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "use-with-caution",
					whereUsed: "global",
					notes: "Consider using a `TextControl` with `type=\"date\"` or `type=\"datetime-local\"` instead."
				}
			}
		};
		Template = ({ currentTime, onChange, ...args }) => {
			const [time, setTime] = (0, import_react.useState)(currentTime);
			(0, import_react.useEffect)(() => {
				setTime(currentTime);
			}, [currentTime]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimePicker, {
				...args,
				currentTime: time,
				onChange: (newTime) => {
					setTime(newTime);
					onChange?.(newTime);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { currentTime: /* @__PURE__ */ new Date() };
		TimeInputTemplate = (args) => {
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimePicker.TimeInput, { ...args }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 9
			}, void 0);
		};
		TimeInput = TimeInputTemplate.bind({});
		TimeInput.args = { label: "Time" };
		TimeInput.parameters = { controls: { include: [] } };
		try {
			TimeInput.__docgenInfo = {
				"description": "The time input can be used in isolation as `<TimePicker.TimeInput />`. In this case, the `value` will be passed\nas an object in 24-hour format (`{ hours: number, minutes: number }`).",
				"displayName": "TimeInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/stories/time.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  currentTime,\n  onChange,\n  ...args\n}) => {\n  const [time, setTime] = useState(currentTime);\n  useEffect(() => {\n    setTime(currentTime);\n  }, [currentTime]);\n  return <TimePicker {...args} currentTime={time} onChange={newTime => {\n    setTime(newTime);\n    onChange?.(newTime);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		TimeInput.parameters = {
			...TimeInput.parameters,
			docs: {
				...TimeInput.parameters?.docs,
				source: {
					originalSource: "args => {\n  return <TimePicker.TimeInput {...args} />;\n}",
					...TimeInput.parameters?.docs?.source
				},
				description: {
					story: "The time input can be used in isolation as `<TimePicker.TimeInput />`. In this case, the `value` will be passed\nas an object in 24-hour format (`{ hours: number, minutes: number }`).",
					...TimeInput.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_time_story();
export { Default, TimeInput, meta as default };
