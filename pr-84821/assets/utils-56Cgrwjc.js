import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as styled, t as init_emotion_styled_browser_development_esm } from "./emotion-styled.browser.development.esm-D5lbVSL2.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, o as isRTL, r as _n, t as init_build_module } from "./build-module-v04us4E2.js";
import { r as arrow_left_default, t as arrow_right_default } from "./arrow-right-Dyw6BYWM.js";
import { C as addYears, E as init_addWeeks, F as addMonths, I as init_addMonths, L as addDays, M as startOfWeek, R as init_addDays, S as isSameDay, T as addWeeks, a as init_isSameMonth, b as init_endOfMonth, c as isBefore, d as endOfWeek, f as init_endOfWeek, g as init_eachMonthOfInterval, h as eachMonthOfInterval, i as setMonth, j as init_startOfWeek, l as init_isAfter, m as startOfMonth, n as setYear, o as isSameMonth, p as init_startOfMonth, r as init_setMonth, s as init_isBefore, t as init_setYear, u as isAfter, w as init_addYears, x as init_isSameDay, y as endOfMonth } from "./setYear-BreLG7HH.js";
import { a as init_isEqual, c as init_eachWeekOfInterval, i as set, l as eachDayOfInterval, n as startOfToday, o as isEqual, r as init_set, s as eachWeekOfInterval, t as init_startOfToday, u as init_eachDayOfInterval } from "./startOfToday-B_wyd-Od.js";
import { a as init_subMonths, c as subDays, i as subWeeks, n as subYears, o as subMonths, r as init_subWeeks, s as init_subDays, t as init_subYears } from "./subYears-B5EmbrRG.js";
import { a as getSettings, n as dateI18n, s as init_build_module$1, t as date } from "./build-module-DFGiXAdt.js";
import { n as init_box_sizing, t as boxSizingReset } from "./box-sizing-C-XRa2d1.js";
import { i as init_colors_values, n as init_config_values, r as COLORS, t as config_values_default } from "./config-values-hzX34N5c.js";
import { n as space, t as init_space } from "./space-BUoQC8K7.js";
import { n as init_component, t as HStack } from "./component-BAVSem4V.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_component$1, t as Heading } from "./component-BhlVl1tv.js";
import { c as inputToDate, l as setInConfiguredTimezone, n as init_constants, s as init_utils$1, t as TIMEZONELESS_FORMAT, u as startOfDayInConfiguredTimezone } from "./constants-BEJ7rBBm.js";
import { r as init_build_module$2 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/date-time/date-picker/use-lilius/index.ts
var inRange, clearTime, useLilius;
function init_use_lilius() {
	return (init_use_lilius = __esmMin((() => {
		init_addMonths(), init_addYears(), init_eachDayOfInterval(), init_eachMonthOfInterval(), init_eachWeekOfInterval(), init_endOfMonth(), init_endOfWeek(), init_isAfter(), init_isBefore(), init_isEqual(), init_set(), init_setMonth(), init_setYear(), init_startOfMonth(), init_startOfToday(), init_startOfWeek(), init_subMonths(), init_subYears();
		init_react();
		inRange = (date, min, max) => (isEqual(date, min) || isAfter(date, min)) && (isEqual(date, max) || isBefore(date, max));
		clearTime = (date) => set(date, {
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		});
		useLilius = ({ weekStartsOn = 0, viewing: initialViewing = /* @__PURE__ */ new Date(), selected: initialSelected = [], numberOfMonths = 1 } = {}) => {
			const [viewing, setViewing] = (0, import_react.useState)(initialViewing);
			const viewToday = (0, import_react.useCallback)(() => setViewing(startOfToday()), [setViewing]);
			const viewMonth = (0, import_react.useCallback)((month) => setViewing((v) => setMonth(v, month)), []);
			const viewPreviousMonth = (0, import_react.useCallback)(() => setViewing((v) => subMonths(v, 1)), []);
			const viewNextMonth = (0, import_react.useCallback)(() => setViewing((v) => addMonths(v, 1)), []);
			const viewYear = (0, import_react.useCallback)((year) => setViewing((v) => setYear(v, year)), []);
			const viewPreviousYear = (0, import_react.useCallback)(() => setViewing((v) => subYears(v, 1)), []);
			const viewNextYear = (0, import_react.useCallback)(() => setViewing((v) => addYears(v, 1)), []);
			const [selected, setSelected] = (0, import_react.useState)(initialSelected.map(clearTime));
			const clearSelected = () => setSelected([]);
			const isSelected = (0, import_react.useCallback)((date) => selected.findIndex((s) => isEqual(s, date)) > -1, [selected]);
			const select = (0, import_react.useCallback)((date, replaceExisting) => {
				if (replaceExisting) setSelected(Array.isArray(date) ? date : [date]);
				else setSelected((selectedItems) => selectedItems.concat(Array.isArray(date) ? date : [date]));
			}, []);
			const deselect = (0, import_react.useCallback)((date) => setSelected((selectedItems) => Array.isArray(date) ? selectedItems.filter((s) => !date.map((d) => d.getTime()).includes(s.getTime())) : selectedItems.filter((s) => !isEqual(s, date))), []);
			const toggle = (0, import_react.useCallback)((date, replaceExisting) => isSelected(date) ? deselect(date) : select(date, replaceExisting), [
				deselect,
				isSelected,
				select
			]);
			const selectRange = (0, import_react.useCallback)((start, end, replaceExisting) => {
				if (replaceExisting) setSelected(eachDayOfInterval({
					start,
					end
				}));
				else setSelected((selectedItems) => selectedItems.concat(eachDayOfInterval({
					start,
					end
				})));
			}, []);
			const deselectRange = (0, import_react.useCallback)((start, end) => {
				setSelected((selectedItems) => selectedItems.filter((s) => !eachDayOfInterval({
					start,
					end
				}).map((d) => d.getTime()).includes(s.getTime())));
			}, []);
			const calendar = (0, import_react.useMemo)(() => eachMonthOfInterval({
				start: startOfMonth(viewing),
				end: endOfMonth(addMonths(viewing, numberOfMonths - 1))
			}).map((month) => eachWeekOfInterval({
				start: startOfMonth(month),
				end: endOfMonth(month)
			}, { weekStartsOn }).map((week) => eachDayOfInterval({
				start: startOfWeek(week, { weekStartsOn }),
				end: endOfWeek(week, { weekStartsOn })
			}))), [
				viewing,
				weekStartsOn,
				numberOfMonths
			]);
			return {
				clearTime,
				inRange,
				viewing,
				setViewing,
				viewToday,
				viewMonth,
				viewPreviousMonth,
				viewNextMonth,
				viewYear,
				viewPreviousYear,
				viewNextYear,
				selected,
				setSelected,
				clearSelected,
				isSelected,
				select,
				deselect,
				toggle,
				selectRange,
				deselectRange,
				calendar
			};
		};
	})))();
}
//#endregion
//#region ../packages/components/src/date-time/date-picker/styles.ts
var Wrapper, Navigator, ViewPreviousMonthButton, ViewNextMonthButton, NavigatorHeading, Calendar, DayOfWeek, DayButton;
function init_styles() {
	return (init_styles = __esmMin((() => {
		init_emotion_styled_browser_development_esm();
		init_button();
		init_box_sizing(), init_colors_values(), init_config_values();
		init_component();
		init_component$1();
		init_space();
		Wrapper = styled.div`
	${boxSizingReset}
`;
		Navigator = styled(HStack)`
	column-gap: ${space(2)};
	display: grid;
	grid-template-columns: 0.5fr repeat( 5, 1fr ) 0.5fr;
	justify-items: center;
	margin-bottom: ${space(4)};
`;
		ViewPreviousMonthButton = styled(Button)`
	grid-column: 1 / 2;
`;
		ViewNextMonthButton = styled(Button)`
	grid-column: 7 / 8;
`;
		NavigatorHeading = styled(Heading)`
	/* Override Heading's module typography in either document's style order. */
	&& {
		font-size: ${config_values_default.fontSize};
		font-weight: ${config_values_default.fontWeight};
	}
	grid-column: 2 / 7;

	strong {
		font-weight: ${config_values_default.fontWeightEmphasis};
	}
`;
		Calendar = styled.div`
	column-gap: ${space(2)};
	display: grid;
	grid-template-columns: 0.5fr repeat( 5, 1fr ) 0.5fr;
	justify-items: center;
	row-gap: ${space(2)};
`;
		DayOfWeek = styled.div`
	color: ${COLORS.theme.gray[700]};
	font-size: ${config_values_default.fontSize};
	line-height: ${config_values_default.fontLineHeightBase};
`;
		DayButton = styled(Button, { shouldForwardProp: (prop) => ![
			"column",
			"isSelected",
			"isToday",
			"hasEvents"
		].includes(prop) })`
	grid-column: ${(props) => props.column};
	position: relative;
	justify-content: center;
	padding: 0;

	${(props) => props.disabled && `
		pointer-events: none;
		`}

	&&& {
		border-radius: ${config_values_default.radiusRound};
		height: ${space(7)};
		width: ${space(7)};
		font-weight: 400;

		${(props) => props.isSelected && `
				background: ${COLORS.theme.accent};

				&,
				&:hover:not(:disabled, [aria-disabled=true]) {
					color: ${COLORS.theme.accentInverted};
				}

				&:focus:not(:disabled),
				&:focus:not(:disabled) {
					border: ${config_values_default.borderWidthFocus} solid currentColor;
				}

				/* Highlight the selected day for high-contrast mode */
				&::after {
					content: '';
					position: absolute;
					pointer-events: none;
					inset: 0;
					border-radius: inherit;
					border: 1px solid transparent;
				}
			`}

		${(props) => !props.isSelected && props.isToday && `
			background: ${COLORS.theme.gray[200]};
			`}
	}

	${(props) => props.hasEvents && `
		::before {
			border: 2px solid ${props.isSelected ? COLORS.theme.accentInverted : COLORS.theme.accent};
			border-radius: ${config_values_default.radiusRound};
			content: " ";
			left: 50%;
			position: absolute;
			transform: translate(-50%, 9px);
		}
		`}
`;
	})))();
}
//#endregion
//#region ../packages/components/src/date-time/date-picker/index.tsx
/**
* DatePicker is a React component that renders a calendar for date selection.
*
* ```jsx
* import { DatePicker } from '@wordpress/components';
* import { useState } from '@wordpress/element';
*
* const MyDatePicker = () => {
*   const [ date, setDate ] = useState( new Date() );
*
*   return (
*     <DatePicker
*       currentDate={ date }
*       onChange={ ( newDate ) => setDate( newDate ) }
*     />
*   );
* };
* ```
*/
function DatePicker({ currentDate, onChange, events = [], isInvalidDate, onMonthPreviewed, startOfWeek: weekStartsOn = 0 }) {
	const date$1 = inputToDate(currentDate ?? /* @__PURE__ */ new Date());
	const { calendar, viewing, setSelected, setViewing, isSelected, viewPreviousMonth, viewNextMonth } = useLilius({
		selected: [startOfDayInConfiguredTimezone(date$1)],
		viewing: startOfDayInConfiguredTimezone(date$1),
		weekStartsOn
	});
	const [focusable, setFocusable] = (0, import_react.useState)(startOfDayInConfiguredTimezone(date$1));
	const [isFocusWithinCalendar, setIsFocusWithinCalendar] = (0, import_react.useState)(false);
	const [prevCurrentDate, setPrevCurrentDate] = (0, import_react.useState)(currentDate);
	if (currentDate !== prevCurrentDate) {
		setPrevCurrentDate(currentDate);
		setSelected([startOfDayInConfiguredTimezone(date$1)]);
		setViewing(startOfDayInConfiguredTimezone(date$1));
		setFocusable(startOfDayInConfiguredTimezone(date$1));
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, {
		className: "components-datetime__date",
		role: "application",
		"aria-label": __("Calendar"),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigator, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ViewPreviousMonthButton, {
				icon: isRTL() ? arrow_right_default : arrow_left_default,
				variant: "tertiary",
				"aria-label": __("View previous month"),
				onClick: () => {
					viewPreviousMonth();
					setFocusable(subMonths(focusable, 1));
					const prevMonth = subMonths(viewing, 1);
					onMonthPreviewed?.(dateI18n(TIMEZONELESS_FORMAT, prevMonth, -prevMonth.getTimezoneOffset()));
				},
				size: "compact"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigatorHeading, {
				level: 3,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: dateI18n("F", viewing, -viewing.getTimezoneOffset()) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 6
					}, this),
					" ",
					dateI18n("Y", viewing, -viewing.getTimezoneOffset())
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ViewNextMonthButton, {
				icon: isRTL() ? arrow_left_default : arrow_right_default,
				variant: "tertiary",
				"aria-label": __("View next month"),
				onClick: () => {
					viewNextMonth();
					setFocusable(addMonths(focusable, 1));
					const nextMonth = addMonths(viewing, 1);
					onMonthPreviewed?.(dateI18n(TIMEZONELESS_FORMAT, nextMonth, -nextMonth.getTimezoneOffset()));
				},
				size: "compact"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 5
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 106,
			columnNumber: 4
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, {
			onFocus: () => setIsFocusWithinCalendar(true),
			onBlur: () => setIsFocusWithinCalendar(false),
			children: [calendar[0][0].map((day) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DayOfWeek, { children: dateI18n("D", day, -day.getTimezoneOffset()) }, day.toString(), false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 6
			}, this)), calendar[0].map((week) => week.map((day, index) => {
				if (!isSameMonth(day, viewing)) return null;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Day, {
					day,
					column: index + 1,
					isSelected: isSelected(day),
					isFocusable: isEqual(day, focusable),
					isFocusAllowed: isFocusWithinCalendar,
					isToday: isSameDay(day, startOfDayInConfiguredTimezone(/* @__PURE__ */ new Date())),
					isInvalid: isInvalidDate ? isInvalidDate(day) : false,
					numEvents: events.filter((event) => isSameDay(event.date, day)).length,
					onClick: () => {
						setSelected([day]);
						setFocusable(day);
						const newDate = setInConfiguredTimezone(date$1, {
							year: day.getFullYear(),
							month: day.getMonth(),
							date: day.getDate()
						});
						onChange?.(date(TIMEZONELESS_FORMAT, newDate));
					},
					onKeyDown: (event) => {
						let nextFocusable;
						if (event.key === "ArrowLeft") nextFocusable = addDays(day, isRTL() ? 1 : -1);
						if (event.key === "ArrowRight") nextFocusable = addDays(day, isRTL() ? -1 : 1);
						if (event.key === "ArrowUp") nextFocusable = subWeeks(day, 1);
						if (event.key === "ArrowDown") nextFocusable = addWeeks(day, 1);
						if (event.key === "PageUp") nextFocusable = subMonths(day, 1);
						if (event.key === "PageDown") nextFocusable = addMonths(day, 1);
						if (event.key === "Home") {
							const daysToSubtract = (day.getDay() - weekStartsOn + 7) % 7;
							nextFocusable = subDays(day, daysToSubtract);
						}
						if (event.key === "End") {
							const dayOfWeek = day.getDay();
							const daysToAdd = (weekStartsOn + 6 - dayOfWeek) % 7;
							nextFocusable = addDays(day, daysToAdd);
						}
						if (nextFocusable) {
							event.preventDefault();
							setFocusable(nextFocusable);
							if (!isSameMonth(nextFocusable, viewing)) {
								setViewing(nextFocusable);
								onMonthPreviewed?.(dateI18n(TIMEZONELESS_FORMAT, nextFocusable, -nextFocusable.getTimezoneOffset()));
							}
						}
					}
				}, day.toString(), false, {
					fileName: _jsxFileName,
					lineNumber: 169,
					columnNumber: 8
				}, this);
			}))]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 154,
			columnNumber: 4
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 101,
		columnNumber: 3
	}, this);
}
function Day({ day, column, isSelected, isFocusable, isFocusAllowed, isToday, isInvalid, numEvents, onClick, onKeyDown }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (ref.current && isFocusable && isFocusAllowed) ref.current.focus();
	}, [isFocusable]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DayButton, {
		__next40pxDefaultSize: true,
		ref,
		className: "components-datetime__date__day",
		disabled: isInvalid,
		tabIndex: isFocusable ? 0 : -1,
		"aria-label": getDayLabel(day, isSelected, isToday, numEvents),
		column,
		isSelected,
		isToday,
		hasEvents: numEvents > 0,
		onClick,
		onKeyDown,
		children: dateI18n("j", day, -day.getTimezoneOffset())
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 320,
		columnNumber: 3
	}, this);
}
function getDayLabel(date, isSelected, isToday, numEvents) {
	const { formats } = getSettings();
	const parts = [dateI18n(formats.date, date, -date.getTimezoneOffset())];
	if (isSelected) parts.push(__("Selected"));
	if (isToday) parts.push(__("Today"));
	if (numEvents > 0) parts.push(sprintf(_n("There is %d event", "There are %d events", numEvents), numEvents));
	return parts.join(". ");
}
var import_jsx_dev_runtime, _jsxFileName;
function init_date_picker() {
	return (init_date_picker = __esmMin((() => {
		init_isSameDay(), init_subMonths(), init_addMonths(), init_isEqual(), init_addDays(), init_subDays(), init_subWeeks(), init_addWeeks(), init_isSameMonth();
		init_build_module();
		init_build_module$2();
		init_build_module$1();
		init_react();
		init_use_lilius();
		init_styles();
		init_utils$1();
		init_constants();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/date-picker/index.tsx";
		try {
			DatePicker.__docgenInfo = {
				"description": "DatePicker is a React component that renders a calendar for date selection.\n\n```jsx\nimport { DatePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDatePicker = () => {\n  const [ date, setDate ] = useState( new Date() );\n\n  return (\n    <DatePicker\n      currentDate={ date }\n      onChange={ ( newDate ) => setDate( newDate ) }\n    />\n  );\n};\n```",
				"displayName": "DatePicker",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/date-time/date-picker/index.tsx",
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
	})))();
}
//#endregion
//#region ../packages/components/src/date-time/stories/utils.ts
function daysFromNow(days) {
	const date = /* @__PURE__ */ new Date();
	date.setDate(date.getDate() + days);
	return date;
}
function isWeekend(date) {
	return date.getDay() === 0 || date.getDay() === 6;
}
function init_utils() {
	return (init_utils = __esmMin((() => {})))();
}
//#endregion
export { init_date_picker as a, DatePicker as i, init_utils as n, isWeekend as r, daysFromNow as t };
