import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_date_picker, i as DatePicker, r as isWeekend, t as daysFromNow } from "./utils-Ds9pscIA.js";
//#region ../packages/components/src/date-time/stories/date.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, WithEvents, WithInvalidDates;
function init_date_story() {
	return (init_date_story = __esmMin((() => {
		init_react();
		init_date_picker();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/stories/date.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Time & Date/DatePicker",
			id: "components-datepicker",
			component: DatePicker,
			argTypes: {
				currentDate: { control: "date" },
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
		Template = ({ currentDate, onChange, ...args }) => {
			const [date, setDate] = (0, import_react.useState)(currentDate);
			(0, import_react.useEffect)(() => {
				setDate(currentDate);
			}, [currentDate]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePicker, {
				...args,
				currentDate: date,
				onChange: (newDate) => {
					setDate(newDate);
					onChange?.(newDate);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = { currentDate: /* @__PURE__ */ new Date() };
		WithEvents = Template.bind({});
		WithEvents.args = {
			currentDate: /* @__PURE__ */ new Date(),
			events: [
				{ date: daysFromNow(2) },
				{ date: daysFromNow(4) },
				{ date: daysFromNow(6) },
				{ date: daysFromNow(8) }
			]
		};
		WithInvalidDates = Template.bind({});
		WithInvalidDates.args = {
			currentDate: /* @__PURE__ */ new Date(),
			isInvalidDate: isWeekend
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DatePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithEvents.parameters = {
			...WithEvents.parameters,
			docs: {
				...WithEvents.parameters?.docs,
				source: {
					originalSource: "({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DatePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",
					...WithEvents.parameters?.docs?.source
				}
			}
		};
		WithInvalidDates.parameters = {
			...WithInvalidDates.parameters,
			docs: {
				...WithInvalidDates.parameters?.docs,
				source: {
					originalSource: "({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DatePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",
					...WithInvalidDates.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_date_story();
export { Default, WithEvents, WithInvalidDates, meta as default };
