import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { H as TZDate, U as init_date, n as init_DayPicker, t as DayPicker } from "./DayPicker-DXwfQZAN.js";
import { _ as init_constants, a as init_shared, c as usePreserveDayFocus, d as init_use_controlled_value, f as useControlledValue, h as COMMON_PROPS, l as init_use_localization_props, n as SHARED_ARG_TYPES, o as toDate, p as clampNumberOfMonths, r as firstDayOfNextMonth, s as init_use_preserve_day_focus, t as DISABLED_DATES_SAMPLE, u as useLocalizationProps, v as RootContext, y as init_root_context } from "./shared-Dbcw3nJR.js";
//#region ../packages/ui/src/calendar/calendar.tsx
var import_jsx_dev_runtime$1, _jsxFileName$1, Calendar;
function init_calendar() {
	return (init_calendar = __esmMin((() => {
		init_DayPicker();
		init_react();
		init_constants();
		init_use_controlled_value();
		init_use_localization_props();
		init_use_preserve_day_focus();
		init_root_context();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/calendar.tsx";
		Calendar = (0, import_react.forwardRef)(function UnforwardedCalendar({ defaultValue, value: valueProp, onValueChange, numberOfMonths = 1, locale, timeZone, month, render, role = "application", "aria-label": ariaLabel, labels: customLabels, ...props }, ref) {
			const { "aria-label": defaultAriaLabel, ...localizationProps } = useLocalizationProps({
				locale,
				timeZone,
				mode: "single"
			});
			const labels = (0, import_react.useMemo)(() => customLabels ? {
				...localizationProps.labels,
				...customLabels
			} : localizationProps.labels, [localizationProps.labels, customLabels]);
			const onChange = (0, import_react.useCallback)((selected, triggerDate, modifiers, e) => {
				onValueChange?.(selected ?? null, triggerDate, modifiers, e);
			}, [onValueChange]);
			const [selected, setSelected] = useControlledValue({
				defaultValue,
				value: valueProp,
				onChange
			});
			const dayFocusProps = usePreserveDayFocus(ref, month);
			const rootContextValue = (0, import_react.useMemo)(() => ({
				render,
				ref: dayFocusProps.ref,
				role,
				defaultAriaLabel
			}), [
				render,
				dayFocusProps.ref,
				role,
				defaultAriaLabel
			]);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(RootContext.Provider, {
				value: rootContextValue,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DayPicker, {
					...COMMON_PROPS,
					...localizationProps,
					...props,
					"aria-label": ariaLabel,
					mode: "single",
					month,
					numberOfMonths: clampNumberOfMonths(numberOfMonths),
					labels,
					selected: selected ?? void 0,
					onSelect: setSelected,
					onDayFocus: dayFocusProps.onDayFocus,
					onDayBlur: dayFocusProps.onDayBlur
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 85,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 84,
				columnNumber: 4
			}, this);
		});
		try {
			Calendar.__docgenInfo = {
				"description": "`Calendar` provides a customizable calendar interface for **single date**\nselection.\n\nThe component is built with accessibility in mind and follows ARIA best\npractices for calendar widgets. It provides keyboard navigation, screen reader\nsupport, and customizable labels for internationalization.",
				"displayName": "Calendar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/calendar.tsx",
				"methods": [],
				"props": {
					"role": {
						"defaultValue": { "value": "application" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "The ARIA role for the calendar's root element.\n\nThe default `application` role helps assistive technologies pass calendar\nnavigation keys to the component. Its accessible name includes the current\nmonth.\n\nChanging this role can affect screen-reader keyboard navigation. Only\noverride it for a tested composition. Apply roles that require additional\nbehavior, such as `dialog`, to a wrapper.",
						"name": "role",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "AriaRole" }
					},
					"required": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "Whether the selection is required.\nWhen `true`, there always needs to be a date selected.",
						"name": "required",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"defaultMonth": {
						"defaultValue": { "value": "The current month" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "The initial month to show in the calendar view (uncontrolled).",
						"name": "defaultMonth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Date" }
					},
					"month": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "The month displayed in the calendar view (controlled). Use together with\n`onMonthChange` to change the month programmatically.",
						"name": "month",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Date" }
					},
					"numberOfMonths": {
						"defaultValue": { "value": "1" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "The number of months displayed at once.",
						"name": "numberOfMonths",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"showOutsideDays": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "When `true`, days from adjacent months are shown in the grid and receive\nthe `outside` modifier and the class.",
						"name": "showOutsideDays",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"fixedWeeks": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "When `true`, the calendar always shows a fixed number of weeks (e.g. 6)\nso the grid height does not change between months.",
						"name": "fixedWeeks",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"startMonth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "The earliest month to start the month navigation.",
						"name": "startMonth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Date" }
					},
					"endMonth": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "The latest month to end the month navigation.",
						"name": "endMonth",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Date" }
					},
					"autoFocus": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "Focus the first selected day (if set) or today's date (if not disabled).\n\nUse this prop when the calendar should receive initial focus as it opens,\nsuch as in a calendar popover. Do not use it to move focus after updates\nto an open calendar.",
						"name": "autoFocus",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"disabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "Specify which days are disabled. Using `true` will disable all dates.",
						"name": "disabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Matcher | Matcher[]" }
					},
					"disableNavigation": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "Disable the navigation buttons.",
						"name": "disableNavigation",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"labels": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "Use custom labels, useful for translating the component.\n\nFor a correct localized experience, consumers should make sure the locale\nused for translated labels and date text is consistent.",
						"name": "labels",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "{ labelNav?: (() => string); labelGrid?: ((date: Date) => string); labelGridcell?: ((date: Date, modifiers?: Modifiers | undefined) => string) | undefined; labelNext?: ((month: Date | undefined) => string) | undefined; labelPrevious?: ((month: Date | undefined) => string) | undefined; labelDa..." }
					},
					"locale": {
						"defaultValue": { "value": "The `enUS` locale from `date-fns/locale`" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "A BCP 47 locale code or date-fns locale object used to localize date text,\nnumerals, the default text direction, and the first day of the week.\n\nThe locale code derives the first day of the week when the browser provides\nthat information, whether passed directly or through a date-fns locale\nobject. Use `weekStartsOn` to override this default.\n\nInvalid or unsupported locale codes fall back to `en-US` for date text.\nA date-fns locale object with an unsupported code retains its own first-day\nsetting.\n\nFor a correct localized experience, consumers should make sure the locale\nused for translated labels and date text is consistent.\n\nThe calendar always uses a Gregorian date grid. The locale does not change\nthe underlying calendar system.\n@see https://github.com/date-fns/date-fns/tree/main/src/locale for a list of the supported locales",
						"name": "locale",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string | Locale" }
					},
					"weekStartsOn": {
						"defaultValue": { "value": "Based on the `locale` prop when available" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "The index of the first day of the week (0 - Sunday). Overrides the locale's\none.",
						"name": "weekStartsOn",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
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
					},
					"onMonthChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "Event fired when the user navigates between months.",
						"name": "onMonthChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "((month: Date) => void)" }
					},
					"timeZone": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						}],
						"description": "The time zone (IANA or UTC offset) to use in the calendar.\n\nSee\n[Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)\nfor the possible values.\n\nWhen working with time zones, use the `TZDate` object from the\n[`@date-fns/tz`](https://www.npmjs.com/package/@date-fns/tz) package\ninstead of the native `Date` object.\n@example   import { TZDate } from \"@date-fns/tz\";\n  import { Calendar } from \"@wordpress/ui\";\n\n  export function WithTimeZone() {\n    const timeZone = \"America/New_York\";\n    const [ value, setValue ] = useState< Date | null >(\n      new TZDate( 2024, 12, 10, timeZone ) // Use `TZDate` instead of `Date`\n    );\n    return (\n      <Calendar\n        timeZone={ timeZone }\n        value={ value }\n        onValueChange={ setValue }\n    />\n  );\n}",
						"name": "timeZone",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "BaseProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"className": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS class name to apply to the element.",
						"name": "className",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"render": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Replaces the component's default HTML element using a given React\nelement, or a function that returns a React element.",
						"name": "render",
						"required": false,
						"tags": {},
						"type": { "name": "ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>" }
					},
					"style": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/utils/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "CSS style to apply to the element.",
						"name": "style",
						"required": false,
						"tags": {},
						"type": { "name": "CSSProperties" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "SingleProps"
						}],
						"description": "The selected date (controlled). Use `null` when there is no selection.\nTo render an uncontrolled calendar, use `defaultValue` instead.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "SingleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Date | null" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "SingleProps"
						}],
						"description": "Event handler called when the selected date changes.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "SingleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "OnValueChangeHandler<Date | null>" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "SingleProps"
						}],
						"description": "The initially selected date (uncontrolled).",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "SingleProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "Date" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default, DisabledDates, WithSelectedDateAndMonth, WithOutsideDays, WithTimeZone;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_date();
		init_react();
		init_calendar();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/stories/index.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Calendar/Calendar",
			id: "design-system-components-calendar-calendar",
			component: Calendar,
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} },
			render: ({ endMonth, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, {
				...args,
				endMonth: toDate(endMonth)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 3
			}, void 0),
			argTypes: SHARED_ARG_TYPES,
			args: {
				onMonthChange: fn(),
				onValueChange: fn()
			}
		};
		Default = {};
		DisabledDates = { args: { disabled: DISABLED_DATES_SAMPLE } };
		WithSelectedDateAndMonth = { args: {
			defaultValue: firstDayOfNextMonth,
			defaultMonth: firstDayOfNextMonth
		} };
		WithOutsideDays = { args: {
			showOutsideDays: true,
			fixedWeeks: true
		} };
		WithTimeZone = {
			render: function CalendarWithTimeZone({ endMonth, ...args }) {
				const [selected, setSelected] = (0, import_react.useState)(null);
				(0, import_react.useEffect)(() => {
					setSelected(new TZDate((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 7), args.timeZone));
				}, [args.timeZone]);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, {
					...args,
					endMonth: toDate(endMonth),
					value: selected,
					onValueChange: (selectedDate, ...rest) => {
						setSelected(selectedDate ? new TZDate(selectedDate, args.timeZone) : null);
						args.onValueChange?.(selectedDate, ...rest);
					},
					disabled: [{ before: new TZDate(/* @__PURE__ */ new Date(), args.timeZone) }]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
					"Calendar set to ",
					args.timeZone ?? "current",
					" timezone, disabling selection for all dates before today, and starting with a default date of 1 week from today."
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 4
				}, this);
			},
			args: { timeZone: "Pacific/Auckland" },
			argTypes: {
				value: { control: false },
				defaultValue: { control: false },
				disabled: { control: false }
			}
		};
		try {
			WithOutsideDays.__docgenInfo = {
				"description": "Shows days from adjacent months in the grid. Outside days use a lighter style\nand are still interactive. Use `fixedWeeks` to keep the grid height constant.",
				"displayName": "WithOutsideDays",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithTimeZone.__docgenInfo = {
				"description": "When working with time zones, use the `TZDate` object from the\n[`@date-fns/tz`](https://www.npmjs.com/package/@date-fns/tz) package instead\nof the native `Date` object.",
				"displayName": "WithTimeZone",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/stories/index.story.tsx",
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
					originalSource: "{}",
					...Default.parameters?.docs?.source
				}
			}
		};
		DisabledDates.parameters = {
			...DisabledDates.parameters,
			docs: {
				...DisabledDates.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    disabled: DISABLED_DATES_SAMPLE\n  }\n}",
					...DisabledDates.parameters?.docs?.source
				}
			}
		};
		WithSelectedDateAndMonth.parameters = {
			...WithSelectedDateAndMonth.parameters,
			docs: {
				...WithSelectedDateAndMonth.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    defaultValue: firstDayOfNextMonth,\n    defaultMonth: firstDayOfNextMonth\n  }\n}",
					...WithSelectedDateAndMonth.parameters?.docs?.source
				}
			}
		};
		WithOutsideDays.parameters = {
			...WithOutsideDays.parameters,
			docs: {
				...WithOutsideDays.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    showOutsideDays: true,\n    fixedWeeks: true\n  }\n}",
					...WithOutsideDays.parameters?.docs?.source
				},
				description: {
					story: "Shows days from adjacent months in the grid. Outside days use a lighter style\nand are still interactive. Use `fixedWeeks` to keep the grid height constant.",
					...WithOutsideDays.parameters?.docs?.description
				}
			}
		};
		WithTimeZone.parameters = {
			...WithTimeZone.parameters,
			docs: {
				...WithTimeZone.parameters?.docs,
				source: {
					originalSource: "{\n  render: function CalendarWithTimeZone({\n    endMonth,\n    ...args\n  }) {\n    const [selected, setSelected] = useState<TZDate | null>(null);\n    useEffect(() => {\n      setSelected(\n      // Select one week from today every time the time zone changes.\n      new TZDate(new Date().setDate(new Date().getDate() + 7), args.timeZone));\n    }, [args.timeZone]);\n    return <>\n                <Calendar {...args} endMonth={toDate(endMonth)} value={selected} onValueChange={(selectedDate, ...rest) => {\n        setSelected(selectedDate ? new TZDate(selectedDate, args.timeZone) : null);\n        args.onValueChange?.(selectedDate, ...rest);\n      }} disabled={[{\n        // Disable any date before today\n        before: new TZDate(new Date(), args.timeZone)\n      }]} />\n\n                <p>\n                    Calendar set to {args.timeZone ?? 'current'} timezone,\n                    disabling selection for all dates before today, and starting\n                    with a default date of 1 week from today.\n                </p>\n            </>;\n  },\n  args: {\n    timeZone: 'Pacific/Auckland'\n  },\n  argTypes: {\n    value: {\n      control: false\n    },\n    defaultValue: {\n      control: false\n    },\n    disabled: {\n      control: false\n    }\n  }\n}",
					...WithTimeZone.parameters?.docs?.source
				},
				description: {
					story: "When working with time zones, use the `TZDate` object from the\n[`@date-fns/tz`](https://www.npmjs.com/package/@date-fns/tz) package instead\nof the native `Date` object.",
					...WithTimeZone.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, DisabledDates, WithOutsideDays, WithSelectedDateAndMonth, WithTimeZone, meta as default };
