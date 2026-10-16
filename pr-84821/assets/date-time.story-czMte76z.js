import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as init_component, t as VStack } from "./component-C9_4TU-Q.js";
import { a as init_date_picker, i as DatePicker, r as isWeekend, t as daysFromNow } from "./utils-56Cgrwjc.js";
import { n as init_time_picker, t as TimePicker } from "./time-picker-CkmBFfR8.js";
//#region ../packages/components/src/date-time/date-time/style.module.scss
var wrapper, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		wrapper = "_wrapper_ov5cf_1";
		style_module_default = { wrapper };
	})))();
}
//#endregion
//#region ../packages/components/src/date-time/date-time/index.tsx
function UnforwardedDateTimePicker({ currentDate, is12Hour, dateOrder, isInvalidDate, onMonthPreviewed = noop, onChange, events, startOfWeek }, ref) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VStack, {
		ref,
		className: clsx("components-datetime", style_module_default.wrapper),
		spacing: 4,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(TimePicker, {
			currentTime: currentDate,
			onChange,
			is12Hour,
			dateOrder
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 34,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DatePicker, {
			currentDate,
			onChange,
			isInvalidDate,
			events,
			onMonthPreviewed,
			startOfWeek
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 40,
			columnNumber: 5
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 33,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 28,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, noop, DateTimePicker;
function init_date_time() {
	return (init_date_time = __esmMin((() => {
		init_clsx();
		init_react();
		init_date_picker();
		init_time_picker();
		init_component();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/date-time/index.tsx";
		noop = () => {};
		DateTimePicker = (0, import_react.forwardRef)(UnforwardedDateTimePicker);
		DateTimePicker.displayName = "DateTimePicker";
		try {
			DateTimePicker.__docgenInfo = {
				"description": "DatePicker is a React component that renders a calendar for date selection.\n\n```jsx\nimport { DatePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDatePicker = () => {\n  const [ date, setDate ] = useState( new Date() );\n\n  return (\n    <DatePicker\n      currentDate={ date }\n      onChange={ ( newDate ) => setDate( newDate ) }\n    />\n  );\n};\n```",
				"displayName": "DateTimePicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/date-time/index.tsx",
				"methods": [],
				"props": {
					"currentDate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The current date and time at initialization. Optionally pass in a `null`\nvalue to specify no date is currently selected.",
						"name": "currentDate",
						"required": false,
						"tags": {},
						"type": { "name": "string | number | Date | null" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function called when a new date has been selected. It is passed the\ndate as an argument.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((date: string) => void)" }
					},
					"isInvalidDate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback function which receives a Date object representing a day as an\nargument, and should return a Boolean to signify if the day is valid or\nnot.",
						"name": "isInvalidDate",
						"required": false,
						"tags": {},
						"type": { "name": "((date: Date) => boolean)" }
					},
					"onMonthPreviewed": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A callback invoked when selecting the previous/next month in the date\npicker. The callback receives the new month date in the ISO format as an\nargument.",
						"name": "onMonthPreviewed",
						"required": false,
						"tags": {},
						"type": { "name": "((date: string) => void)" }
					},
					"events": {
						"defaultValue": { "value": "[]" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "List of events to show in the date picker. Each event will appear as a\ndot on the day of the event.",
						"name": "events",
						"required": false,
						"tags": {},
						"type": { "name": "DatePickerEvent[]" }
					},
					"startOfWeek": {
						"defaultValue": { "value": "0" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The day that the week should start on. 0 for Sunday, 1 for Monday, etc.",
						"name": "startOfWeek",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "0 | 1 | 2 | 3 | 4 | 5 | 6",
							"value": [
								{ "value": "0" },
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" }
							]
						}
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TimePicker.TimeInput.__docgenInfo = {
				"description": "",
				"displayName": "TimePicker.TimeInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/date-time/index.tsx",
				"methods": [],
				"props": {
					"is12Hour": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed",
						"name": "is12Hour",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The time input object with hours and minutes values.\n\n- hours: number (24-hour format)\n- minutes: number",
						"name": "value",
						"required": false,
						"tags": {},
						"type": { "name": "TimeInputValue" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "An optional default value for the control when used in uncontrolled mode.\nIf left `undefined`, the current time will be used.",
						"name": "defaultValue",
						"required": false,
						"tags": {},
						"type": { "name": "TimeInputValue" }
					},
					"minutesProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The props to pass down to the minutes input.",
						"name": "minutesProps",
						"required": false,
						"tags": {},
						"type": { "name": "(Omit<InputControlProps, \"type\" | \"max\" | \"min\" | \"step\" | \"value\" | \"required\" | \"isDragEnabled\"> & { hideHTMLArrows?: boolean; spinControls?: \"none\" | ... 2 more ...; ... 9 more ...; value?: string | ... 1 more ... | undefined; } & Omit<...> & RefAttributes<...>) | undefined" }
					},
					"label": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The label for the time input.",
						"name": "label",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function is called when a new time has been selected.\nPassing hours and minutes as an object properties.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((time: TimeInputValue) => void)" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/date-time/stories/date-time.story.tsx
var import_jsx_dev_runtime, _jsxFileName, meta, Template, Default, WithEvents, WithInvalidDates;
function init_date_time_story() {
	return (init_date_time_story = __esmMin((() => {
		init_react();
		init_date_time();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/stories/date-time.story.tsx";
		meta = {
			title: "Components/@wordpress-components/Selection & Input/Time & Date/DateTimePicker",
			id: "components-datetimepicker",
			component: DateTimePicker,
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
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateTimePicker, {
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
					originalSource: "({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		WithEvents.parameters = {
			...WithEvents.parameters,
			docs: {
				...WithEvents.parameters?.docs,
				source: {
					originalSource: "({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",
					...WithEvents.parameters?.docs?.source
				}
			}
		};
		WithInvalidDates.parameters = {
			...WithInvalidDates.parameters,
			docs: {
				...WithInvalidDates.parameters?.docs,
				source: {
					originalSource: "({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",
					...WithInvalidDates.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_date_time_story();
export { Default, WithEvents, WithInvalidDates, meta as default };
