import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as startOfMinute, t as init_startOfMinute } from "./startOfMinute-BerOeNwM.js";
import { a as getSettings, s as init_build_module$1, t as date } from "./build-module-DFGiXAdt.js";
import { n as init_tooltip, t as Tooltip } from "./tooltip-C9B-2Nhf.js";
import { n as useControlledValue, t as init_use_controlled_value } from "./use-controlled-value-B56JrsG0.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { n as init_component$1, t as HStack } from "./component-BAVSem4V.js";
import { n as init_component$2, t as Spacer } from "./component-DhnvQQBl.js";
import { n as init_base_control, t as BaseControl } from "./base-control-CSASrsP8.js";
import { n as init_number_control, t as NumberControl } from "./number-control-BsMYN7_s.js";
import { i as init_component$3, r as ToggleGroupControl } from "./component-BfjPg82x.js";
import { n as init_component$4, t as ToggleGroupControlOption } from "./component-C2qUa_Q-.js";
import { n as init_select_control, t as SelectControl } from "./select-control-CZM95b4n.js";
import { a as from24hTo12h, c as inputToDate, d as validateInputElementTarget, i as from12hTo24h, l as setInConfiguredTimezone, n as init_constants, o as getDaysInMonth, r as buildPadInputStateReducer, s as init_utils, t as TIMEZONELESS_FORMAT } from "./constants-BEJ7rBBm.js";
//#region ../packages/components/src/date-time/time-picker/style.module.scss
var wrapper, fieldset, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		wrapper = "_wrapper_1ijug_46";
		fieldset = "_fieldset_1ijug_51";
		style_module_default = {
			wrapper,
			fieldset,
			"time-wrapper": "_time-wrapper_1ijug_60",
			"hours-input": "_hours-input_1ijug_66",
			"minutes-input": "_minutes-input_1ijug_67",
			"day-input": "_day-input_1ijug_68",
			"year-input": "_year-input_1ijug_69",
			"time-separator": "_time-separator_1ijug_95",
			"month-select-wrapper": "_month-select-wrapper_1ijug_121",
			"time-zone": "_time-zone_1ijug_133"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/date-time/time-picker/timezone.tsx
var import_jsx_dev_runtime$2, _jsxFileName$2, TimeZone;
function init_timezone() {
	return (init_timezone = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_build_module$1();
		init_tooltip();
		init_style_module();
		import_jsx_dev_runtime$2 = require_jsx_dev_runtime();
		_jsxFileName$2 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/time-picker/timezone.tsx";
		TimeZone = () => {
			const { timezone } = getSettings();
			const userTimezoneOffset = -1 * ((/* @__PURE__ */ new Date()).getTimezoneOffset() / 60);
			if (Number(timezone.offset) === userTimezoneOffset) return null;
			const offsetSymbol = Number(timezone.offset) >= 0 ? "+" : "";
			const zoneAbbr = "" !== timezone.abbr && isNaN(Number(timezone.abbr)) ? timezone.abbr : `UTC${offsetSymbol}${timezone.offsetFormatted}`;
			const prettyTimezoneString = timezone.string.replace("_", " ");
			const timezoneDetail = "UTC" === timezone.string ? __("Coordinated Universal Time") : `(${zoneAbbr}) ${prettyTimezoneString}`;
			return prettyTimezoneString.trim().length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
				className: clsx("components-datetime__timezone", style_module_default["time-zone"]),
				children: zoneAbbr
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 43,
				columnNumber: 3
			}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)(Tooltip, {
				placement: "top",
				text: timezoneDetail,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$2.jsxDEV)("div", {
					className: clsx("components-datetime__timezone", style_module_default["time-zone"]),
					children: zoneAbbr
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 53,
					columnNumber: 4
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 52,
				columnNumber: 3
			}, void 0);
		};
		try {
			TimeZone.__docgenInfo = {
				"description": "Displays timezone information when user timezone is different from site\ntimezone.",
				"displayName": "timezone",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/time-picker/timezone.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/date-time/time-picker/time-input/index.tsx
function TimeInput({ value: valueProp, defaultValue, is12Hour, label, minutesProps, onChange }) {
	const [value = {
		hours: (/* @__PURE__ */ new Date()).getHours(),
		minutes: (/* @__PURE__ */ new Date()).getMinutes()
	}, setValue] = useControlledValue({
		value: valueProp,
		onChange,
		defaultValue
	});
	const dayPeriod = parseDayPeriod(value.hours);
	const hours12Format = from24hTo12h(value.hours);
	const buildNumberControlChangeCallback = (method) => {
		return (_value, { event }) => {
			if (!validateInputElementTarget(event)) return;
			const numberValue = Number(_value);
			setValue({
				...value,
				[method]: method === "hours" && is12Hour ? from12hTo24h(numberValue, dayPeriod === "PM") : numberValue
			});
		};
	};
	const buildAmPmChangeCallback = (_value) => {
		return () => {
			if (dayPeriod === _value) return;
			setValue({
				...value,
				hours: from12hTo24h(hours12Format, _value === "PM")
			});
		};
	};
	function parseDayPeriod(_hours) {
		return _hours < 12 ? "AM" : "PM";
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(label ? "fieldset" : import_react.Fragment, {
		...label ? { className: style_module_default.fieldset } : {},
		children: [label && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(BaseControl.VisualLabel, {
			as: "legend",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 87,
			columnNumber: 5
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(HStack, {
			alignment: "left",
			expanded: false,
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: clsx("components-datetime__time-field components-datetime__time-field-time", style_module_default["time-wrapper"]),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(NumberControl, {
						className: clsx("components-datetime__time-field-hours-input", style_module_default["hours-input"]),
						label: __("Hours"),
						hideLabelFromVision: true,
						value: String(is12Hour ? hours12Format : value.hours).padStart(2, "0"),
						step: 1,
						min: is12Hour ? 1 : 0,
						max: is12Hour ? 12 : 23,
						required: true,
						spinControls: "none",
						isPressEnterToChange: true,
						isDragEnabled: false,
						isShiftStepEnabled: false,
						onChange: buildNumberControlChangeCallback("hours"),
						__unstableStateReducer: buildPadInputStateReducer(2)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 99,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("span", {
						className: clsx("components-datetime__time-separator", style_module_default["time-separator"]),
						"aria-hidden": "true",
						children: ":"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 122,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(NumberControl, {
						label: __("Minutes"),
						hideLabelFromVision: true,
						value: String(value.minutes).padStart(2, "0"),
						step: 1,
						min: 0,
						max: 59,
						required: true,
						spinControls: "none",
						isPressEnterToChange: true,
						isDragEnabled: false,
						isShiftStepEnabled: false,
						onChange: (...args) => {
							buildNumberControlChangeCallback("minutes")(...args);
							minutesProps?.onChange?.(...args);
						},
						__unstableStateReducer: buildPadInputStateReducer(2),
						...minutesProps,
						className: clsx(style_module_default["minutes-input"], minutesProps?.className ?? "components-datetime__time-field-minutes-input")
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 131,
						columnNumber: 6
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 93,
				columnNumber: 5
			}, this), is12Hour && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ToggleGroupControl, {
				isBlock: true,
				label: __("Select AM or PM"),
				hideLabelFromVision: true,
				value: dayPeriod,
				onChange: (newValue) => {
					buildAmPmChangeCallback(newValue)();
				},
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ToggleGroupControlOption, {
					value: "AM",
					label: __("AM")
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 172,
					columnNumber: 7
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ToggleGroupControlOption, {
					value: "PM",
					label: __("PM")
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 176,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 161,
				columnNumber: 6
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 92,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 85,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1;
function init_time_input() {
	return (init_time_input = __esmMin((() => {
		init_clsx();
		init_build_module();
		init_react();
		init_number_control();
		init_style_module();
		init_component$1();
		init_utils();
		init_use_controlled_value();
		init_base_control();
		init_component$3(), init_component$4();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/time-picker/time-input/index.tsx";
		try {
			TimeInput.__docgenInfo = {
				"description": "",
				"displayName": "TimeInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/time-picker/time-input/index.tsx",
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
//#region ../packages/components/src/date-time/time-picker/index.tsx
/**
* TimePicker is a React component that renders form inputs for time and date selection. It can be used independently or as part of the `DateTimePicker` component.
*
* ```jsx
* import { TimePicker } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyTimePicker = () => {
*   const [ time, setTime ] = useState( new Date() );
*
*   return (
*     <TimePicker
*       currentTime={ date }
*       onChange={ ( newTime ) => setTime( newTime ) }
*       is12Hour
*     />
*   );
* };
* ```
*/
function TimePicker({ is12Hour, currentTime, onChange, dateOrder: dateOrderProp, hideLabelFromVision = false }) {
	const [date$1, setDate] = (0, import_react.useState)(() => startOfMinute(inputToDate(currentTime ?? /* @__PURE__ */ new Date())));
	(0, import_react.useEffect)(() => {
		setDate(startOfMinute(inputToDate(currentTime ?? /* @__PURE__ */ new Date())));
	}, [currentTime]);
	const monthOptions = [
		{
			value: "01",
			label: __("January")
		},
		{
			value: "02",
			label: __("February")
		},
		{
			value: "03",
			label: __("March")
		},
		{
			value: "04",
			label: __("April")
		},
		{
			value: "05",
			label: __("May")
		},
		{
			value: "06",
			label: __("June")
		},
		{
			value: "07",
			label: __("July")
		},
		{
			value: "08",
			label: __("August")
		},
		{
			value: "09",
			label: __("September")
		},
		{
			value: "10",
			label: __("October")
		},
		{
			value: "11",
			label: __("November")
		},
		{
			value: "12",
			label: __("December")
		}
	];
	const { day, month, year, minutes, hours } = (0, import_react.useMemo)(() => ({
		day: date("d", date$1),
		month: date("m", date$1),
		year: date("Y", date$1),
		minutes: date("i", date$1),
		hours: date("H", date$1)
	}), [date$1]);
	const buildNumberControlChangeCallback = (method) => {
		const callback = (value, { event }) => {
			if (!validateInputElementTarget(event)) return;
			const numberValue = Number(value);
			const newDate = setInConfiguredTimezone(date$1, { [method]: numberValue });
			setDate(newDate);
			onChange?.(date(TIMEZONELESS_FORMAT, newDate));
		};
		return callback;
	};
	const onTimeInputChangeCallback = ({ hours: newHours, minutes: newMinutes }) => {
		const newDate = setInConfiguredTimezone(date$1, {
			hours: newHours,
			minutes: newMinutes
		});
		setDate(newDate);
		onChange?.(date(TIMEZONELESS_FORMAT, newDate));
	};
	const dayField = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberControl, {
		className: clsx("components-datetime__time-field components-datetime__time-field-day", style_module_default["day-input"]),
		label: __("Day"),
		hideLabelFromVision: true,
		value: day,
		step: 1,
		min: 1,
		max: getDaysInMonth(Number(year), Number(month) - 1),
		required: true,
		spinControls: "none",
		isPressEnterToChange: true,
		isDragEnabled: false,
		isShiftStepEnabled: false,
		onChange: buildNumberControlChangeCallback("date")
	}, "day", false, {
		fileName: _jsxFileName,
		lineNumber: 130,
		columnNumber: 3
	}, this);
	const monthField = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: style_module_default["month-select-wrapper"],
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectControl, {
			className: "components-datetime__time-field components-datetime__time-field-month",
			label: __("Month"),
			hideLabelFromVision: true,
			value: month,
			options: monthOptions,
			onChange: (value) => {
				const newDate = setInConfiguredTimezone(date$1, { month: Number(value) - 1 });
				setDate(newDate);
				onChange?.(date(TIMEZONELESS_FORMAT, newDate));
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 4
		}, this)
	}, "month", false, {
		fileName: _jsxFileName,
		lineNumber: 152,
		columnNumber: 3
	}, this);
	const yearField = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberControl, {
		className: clsx("components-datetime__time-field components-datetime__time-field-year", style_module_default["year-input"]),
		label: __("Year"),
		hideLabelFromVision: true,
		value: year,
		step: 1,
		min: 1,
		max: 9999,
		required: true,
		spinControls: "none",
		isPressEnterToChange: true,
		isDragEnabled: false,
		isShiftStepEnabled: false,
		onChange: buildNumberControlChangeCallback("year"),
		__unstableStateReducer: buildPadInputStateReducer(4)
	}, "year", false, {
		fileName: _jsxFileName,
		lineNumber: 173,
		columnNumber: 3
	}, this);
	const defaultDateOrder = is12Hour ? "mdy" : "dmy";
	const fields = (dateOrderProp && VALID_DATE_ORDERS.includes(dateOrderProp) ? dateOrderProp : defaultDateOrder).split("").map((field) => {
		switch (field) {
			case "d": return dayField;
			case "m": return monthField;
			case "y": return yearField;
			default: return null;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: clsx("components-datetime__time", style_module_default.wrapper),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
			className: style_module_default.fieldset,
			children: [hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				as: "legend",
				children: __("Time")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 220,
				columnNumber: 6
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl.VisualLabel, {
				as: "legend",
				className: "components-datetime__time-legend",
				children: __("Time")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 224,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, {
				className: "components-datetime__time-wrapper",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimeInput, {
						value: {
							hours: Number(hours),
							minutes: Number(minutes)
						},
						is12Hour,
						onChange: onTimeInputChangeCallback
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 234,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 242,
						columnNumber: 6
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimeZone, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 243,
						columnNumber: 6
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 231,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 218,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
			className: style_module_default.fieldset,
			children: [hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
				as: "legend",
				children: __("Date")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 248,
				columnNumber: 6
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BaseControl.VisualLabel, {
				as: "legend",
				className: "components-datetime__time-legend",
				children: __("Date")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 252,
				columnNumber: 6
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, {
				className: "components-datetime__time-wrapper",
				children: fields
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 259,
				columnNumber: 5
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 246,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 215,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime, _jsxFileName, VALID_DATE_ORDERS;
function init_time_picker() {
	return (init_time_picker = __esmMin((() => {
		init_clsx();
		init_startOfMinute();
		init_react();
		init_build_module();
		init_build_module$1();
		init_base_control();
		init_component();
		init_select_control();
		init_timezone();
		init_number_control();
		init_style_module();
		init_component$1();
		init_component$2();
		init_utils();
		init_constants();
		init_time_input();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/time-picker/index.tsx";
		VALID_DATE_ORDERS = [
			"dmy",
			"mdy",
			"ymd"
		];
		/**
		* A component to input a time.
		*
		* Values are passed as an object in 24-hour format (`{ hours: number, minutes: number }`).
		*
		* ```jsx
		* import { TimePicker } from '@wordpress/components';
		* import { useState } from '@wordpress/element';
		*
		* const MyTimeInput = () => {
		* 	const [ time, setTime ] = useState( { hours: 13, minutes: 30 } );
		*
		* 	return (
		* 		<TimePicker.TimeInput
		* 			value={ time }
		* 			onChange={ setTime }
		* 			label="Time"
		* 		/>
		* 	);
		* };
		* ```
		*/
		TimePicker.TimeInput = TimeInput;
		Object.assign(TimePicker.TimeInput, { displayName: "TimePicker.TimeInput" });
		try {
			TimePicker.__docgenInfo = {
				"description": "TimePicker is a React component that renders form inputs for time and date selection. It can be used independently or as part of the `DateTimePicker` component.\n\n```jsx\nimport { TimePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyTimePicker = () => {\n  const [ time, setTime ] = useState( new Date() );\n\n  return (\n    <TimePicker\n      currentTime={ date }\n      onChange={ ( newTime ) => setTime( newTime ) }\n      is12Hour\n    />\n  );\n};\n```",
				"displayName": "TimePicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/time-picker/index.tsx",
				"methods": [],
				"props": {
					"currentTime": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The initial current time the time picker should render.",
						"name": "currentTime",
						"required": false,
						"tags": {},
						"type": { "name": "string | number | Date | null" }
					},
					"is12Hour": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed and the time format is assumed to be `MM-DD-YYYY` (as opposed\nto the default format `DD-MM-YYYY`).",
						"name": "is12Hour",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"dateOrder": {
						"defaultValue": { "value": "'dmy'" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The order of day, month, and year. This prop overrides the time format\ndetermined by `is12Hour` prop.",
						"name": "dateOrder",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "\"dmy\" | \"mdy\" | \"ymd\"",
							"value": [
								{ "value": "\"dmy\"" },
								{ "value": "\"mdy\"" },
								{ "value": "\"ymd\"" }
							]
						}
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The function called when a new time has been selected. It is passed the\ntime as an argument.",
						"name": "onChange",
						"required": false,
						"tags": {},
						"type": { "name": "((time: string) => void)" }
					},
					"hideLabelFromVision": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/date-time/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "If true, the label will only be visible to screen readers.",
						"name": "hideLabelFromVision",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			TimePicker.TimeInput.__docgenInfo = {
				"description": "",
				"displayName": "TimePicker.TimeInput",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/time-picker/index.tsx",
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
export { init_time_picker as n, TimePicker as t };
