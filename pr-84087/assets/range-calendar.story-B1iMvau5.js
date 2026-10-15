import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { F as differenceInCalendarDays, H as TZDate, I as init_differenceInCalendarDays, U as init_date, i as rangeContainsModifiers, n as init_DayPicker, r as init_rangeContainsModifiers, t as DayPicker } from "./DayPicker-DXwfQZAN.js";
import { _ as init_constants, a as init_shared, c as usePreserveDayFocus, d as init_use_controlled_value, f as useControlledValue, g as MODIFIER_CLASSNAMES, h as COMMON_PROPS, i as fourthDayOfNextMonth, l as init_use_localization_props, n as SHARED_ARG_TYPES, o as toDate, p as clampNumberOfMonths, r as firstDayOfNextMonth, s as init_use_preserve_day_focus, t as DISABLED_DATES_SAMPLE, u as useLocalizationProps, v as RootContext, y as init_root_context } from "./shared-CmMk0aME.js";
//#region ../packages/ui/src/calendar/range-calendar.tsx
function usePreviewRange({ value, hoveredDate, excludeDisabled, resetOnSelect, min, max, disabled }) {
	return (0, import_react.useMemo)(() => {
		if (!hoveredDate || !value?.from) return;
		if (resetOnSelect && value.to) return {
			from: hoveredDate,
			to: hoveredDate
		};
		let previewHighlight;
		let potentialNewRange;
		if (hoveredDate < value.from) {
			previewHighlight = {
				from: hoveredDate,
				to: value.from
			};
			potentialNewRange = {
				from: hoveredDate,
				to: value.to ?? value.from
			};
		} else if (value.to && hoveredDate > value.from && hoveredDate < value.to) {
			previewHighlight = {
				from: value.from,
				to: hoveredDate
			};
			potentialNewRange = {
				from: value.from,
				to: hoveredDate
			};
		} else if (hoveredDate > value.from) {
			previewHighlight = {
				from: value.to ?? value.from,
				to: hoveredDate
			};
			potentialNewRange = {
				from: value.from,
				to: hoveredDate
			};
		}
		if (min !== void 0 && min > 0 && potentialNewRange && differenceInCalendarDays(potentialNewRange.to, potentialNewRange.from) < min) previewHighlight = {
			from: hoveredDate,
			to: hoveredDate
		};
		if (max !== void 0 && max > 0 && potentialNewRange && differenceInCalendarDays(potentialNewRange.to, potentialNewRange.from) > max) previewHighlight = {
			from: hoveredDate,
			to: hoveredDate
		};
		if (excludeDisabled && disabled && potentialNewRange && rangeContainsModifiers(potentialNewRange, disabled)) previewHighlight = {
			from: hoveredDate,
			to: hoveredDate
		};
		return previewHighlight;
	}, [
		value,
		hoveredDate,
		excludeDisabled,
		resetOnSelect,
		min,
		max,
		disabled
	]);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, RangeCalendar;
function init_range_calendar() {
	return (init_range_calendar = __esmMin((() => {
		init_differenceInCalendarDays();
		init_DayPicker(), init_rangeContainsModifiers();
		init_react();
		init_constants();
		init_use_controlled_value();
		init_use_localization_props();
		init_use_preserve_day_focus();
		init_root_context();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/range-calendar.tsx";
		RangeCalendar = (0, import_react.forwardRef)(function UnforwardedRangeCalendar({ defaultValue, value: valueProp, onValueChange, numberOfMonths = 1, excludeDisabled, resetOnSelect = true, min, max, disabled, locale, timeZone, month, render, role = "application", "aria-label": ariaLabel, labels: customLabels, ...props }, ref) {
			const { "aria-label": defaultAriaLabel, ...localizationProps } = useLocalizationProps({
				locale,
				timeZone,
				mode: "range"
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
			const [hoveredDate, setHoveredDate] = (0, import_react.useState)(void 0);
			const previewRange = usePreviewRange({
				value: selected,
				hoveredDate,
				excludeDisabled,
				resetOnSelect,
				min,
				max,
				disabled
			});
			const modifiers = (0, import_react.useMemo)(() => {
				return {
					preview: previewRange,
					preview_start: previewRange?.from,
					preview_end: previewRange?.to
				};
			}, [previewRange]);
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
					mode: "range",
					month,
					numberOfMonths: clampNumberOfMonths(numberOfMonths),
					disabled,
					excludeDisabled,
					resetOnSelect,
					min,
					max,
					labels,
					selected: selected ?? void 0,
					onSelect: setSelected,
					onDayFocus: dayFocusProps.onDayFocus,
					onDayBlur: dayFocusProps.onDayBlur,
					onDayMouseEnter: (date) => setHoveredDate(date),
					onDayMouseLeave: () => setHoveredDate(void 0),
					modifiers,
					modifiersClassNames: MODIFIER_CLASSNAMES
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 240,
					columnNumber: 5
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 239,
				columnNumber: 4
			}, this);
		});
		try {
			usePreviewRange.__docgenInfo = {
				"description": "",
				"displayName": "usePreviewRange",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/range-calendar.tsx",
				"methods": [],
				"props": {
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
					"excludeDisabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "When `true`, the range will reset when including a disabled day.",
						"name": "excludeDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"resetOnSelect": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "When `true`, clicking a day starts a new range if there is no current start\ndate or if a range is already complete. In those cases, the clicked day\nbecomes the start of the new range. When `required` is `false`, clicking\nthe same day of a single-day range clears the selection.",
						"name": "resetOnSelect",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"min": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "The minimum number of nights to include in the range.",
						"name": "min",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"max": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "The maximum number of nights to include in the range.",
						"name": "max",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "The selected range (controlled). Use `null` when there is no selection.\nTo render an uncontrolled calendar, use `defaultValue` instead.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "DateRange | null" }
					},
					"hoveredDate": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/range-calendar.tsx",
							"name": "TypeLiteral"
						}],
						"description": "",
						"name": "hoveredDate",
						"required": true,
						"tags": {},
						"type": { "name": "Date | undefined" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			RangeCalendar.__docgenInfo = {
				"description": "`RangeCalendar` provides a customizable calendar interface for **date range**\nselection.\n\nThe component is built with accessibility in mind and follows ARIA best\npractices for calendar widgets. It provides keyboard navigation, screen reader\nsupport, and customizable labels for internationalization.",
				"displayName": "RangeCalendar",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/range-calendar.tsx",
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
					"excludeDisabled": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "When `true`, the range will reset when including a disabled day.",
						"name": "excludeDisabled",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"resetOnSelect": {
						"defaultValue": { "value": "true" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "When `true`, clicking a day starts a new range if there is no current start\ndate or if a range is already complete. In those cases, the clicked day\nbecomes the start of the new range. When `required` is `false`, clicking\nthe same day of a single-day range clears the selection.",
						"name": "resetOnSelect",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"min": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "The minimum number of nights to include in the range.",
						"name": "min",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"max": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "The maximum number of nights to include in the range.",
						"name": "max",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "number" }
					},
					"value": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "The selected range (controlled). Use `null` when there is no selection.\nTo render an uncontrolled calendar, use `defaultValue` instead.",
						"name": "value",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "DateRange | null" }
					},
					"onValueChange": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "Event handler called when the selected range changes.",
						"name": "onValueChange",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "OnValueChangeHandler<DateRange | null>" }
					},
					"defaultValue": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						}],
						"description": "The initially selected range (uncontrolled).",
						"name": "defaultValue",
						"parent": {
							"fileName": "gutenberg-storybook-preview/packages/ui/src/calendar/types.ts",
							"name": "RangeProps"
						},
						"required": false,
						"tags": {},
						"type": { "name": "DateRange" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/ui/src/calendar/stories/range-calendar.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Default, DisabledDates, WithSelectedRangeAndMonth, WithRangeConstraints, WithOutsideDays, WithTimeZone;
function init_range_calendar_story() {
	return (init_range_calendar_story = __esmMin((() => {
		init_date();
		init_react();
		init_range_calendar();
		init_shared();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/stories/range-calendar.story.tsx";
		meta = {
			tags: ["manifest"],
			title: "Components/@wordpress-ui/Calendar/RangeCalendar",
			id: "design-system-components-calendar-rangecalendar",
			component: RangeCalendar,
			parameters: { componentStatus: {
				status: "recommended",
				whereUsed: "global"
			} },
			render: ({ endMonth, ...args }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RangeCalendar, {
				...args,
				endMonth: toDate(endMonth)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 3
			}, void 0),
			argTypes: {
				...SHARED_ARG_TYPES,
				value: { control: false },
				defaultValue: { control: false }
			},
			args: {
				onMonthChange: fn(),
				onValueChange: fn()
			}
		};
		Default = {};
		DisabledDates = { args: { disabled: DISABLED_DATES_SAMPLE } };
		WithSelectedRangeAndMonth = { args: {
			defaultValue: {
				from: firstDayOfNextMonth,
				to: fourthDayOfNextMonth
			},
			defaultMonth: firstDayOfNextMonth
		} };
		WithRangeConstraints = { args: {
			min: 2,
			max: 7,
			excludeDisabled: true,
			disabled: { dayOfWeek: [0, 6] }
		} };
		WithOutsideDays = { args: {
			showOutsideDays: true,
			fixedWeeks: true
		} };
		WithTimeZone = {
			render: function RangeCalendarWithTimeZone({ endMonth, ...args }) {
				const [range, setRange] = (0, import_react.useState)(null);
				(0, import_react.useEffect)(() => {
					setRange({
						from: new TZDate((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 7), args.timeZone),
						to: new TZDate((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 14), args.timeZone)
					});
				}, [args.timeZone]);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RangeCalendar, {
					...args,
					endMonth: toDate(endMonth),
					value: range,
					onValueChange: (selectedDate, ...rest) => {
						setRange(!selectedDate || selectedDate.from === void 0 && selectedDate.to === void 0 ? null : selectedDate);
						args.onValueChange?.(selectedDate, ...rest);
					},
					disabled: [{ before: new TZDate(/* @__PURE__ */ new Date(), args.timeZone) }]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 5
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
					"Calendar set to ",
					args.timeZone ?? "current",
					" timezone, disabling selection for all dates before today, and starting with a default date range of 1 week from today to 2 weeks from today."
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 134,
					columnNumber: 5
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 4
				}, this);
			},
			args: { timeZone: "Pacific/Auckland" },
			argTypes: { disabled: { control: false } }
		};
		try {
			WithRangeConstraints.__docgenInfo = {
				"description": "Use `min` and `max` to constrain the number of nights the range may span, and\n`excludeDisabled` to reset the range when it would include a disabled day.",
				"displayName": "WithRangeConstraints",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/stories/range-calendar.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithOutsideDays.__docgenInfo = {
				"description": "Shows days from adjacent months in the grid. Outside days use a lighter style\nand are still interactive. Use `fixedWeeks` to keep the grid height constant.",
				"displayName": "WithOutsideDays",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/stories/range-calendar.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			WithTimeZone.__docgenInfo = {
				"description": "When working with time zones, use the `TZDate` object from the\n[`@date-fns/tz`](https://www.npmjs.com/package/@date-fns/tz) package instead\nof the native `Date` object.",
				"displayName": "WithTimeZone",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/calendar/stories/range-calendar.story.tsx",
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
		WithSelectedRangeAndMonth.parameters = {
			...WithSelectedRangeAndMonth.parameters,
			docs: {
				...WithSelectedRangeAndMonth.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    defaultValue: {\n      from: firstDayOfNextMonth,\n      to: fourthDayOfNextMonth\n    },\n    defaultMonth: firstDayOfNextMonth\n  }\n}",
					...WithSelectedRangeAndMonth.parameters?.docs?.source
				}
			}
		};
		WithRangeConstraints.parameters = {
			...WithRangeConstraints.parameters,
			docs: {
				...WithRangeConstraints.parameters?.docs,
				source: {
					originalSource: "{\n  args: {\n    min: 2,\n    max: 7,\n    excludeDisabled: true,\n    disabled: {\n      dayOfWeek: [0, 6]\n    }\n  }\n}",
					...WithRangeConstraints.parameters?.docs?.source
				},
				description: {
					story: "Use `min` and `max` to constrain the number of nights the range may span, and\n`excludeDisabled` to reset the range when it would include a disabled day.",
					...WithRangeConstraints.parameters?.docs?.description
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
					originalSource: "{\n  render: function RangeCalendarWithTimeZone({\n    endMonth,\n    ...args\n  }) {\n    const [range, setRange] = useState<typeof args.value>(null);\n    useEffect(() => {\n      setRange(\n      // Select from one week from today to two weeks from today\n      // every time the timezone changes.\n      {\n        from: new TZDate(new Date().setDate(new Date().getDate() + 7), args.timeZone),\n        to: new TZDate(new Date().setDate(new Date().getDate() + 14), args.timeZone)\n      });\n    }, [args.timeZone]);\n    return <>\n                <RangeCalendar {...args} endMonth={toDate(endMonth)} value={range} onValueChange={(selectedDate, ...rest) => {\n        setRange(\n        // Set controlled state to null if there's no selection\n        !selectedDate || selectedDate.from === undefined && selectedDate.to === undefined ? null : selectedDate);\n        args.onValueChange?.(selectedDate, ...rest);\n      }} disabled={[{\n        // Disable any date before today\n        before: new TZDate(new Date(), args.timeZone)\n      }]} />\n                <p>\n                    Calendar set to {args.timeZone ?? 'current'} timezone,\n                    disabling selection for all dates before today, and starting\n                    with a default date range of 1 week from today to 2 weeks\n                    from today.\n                </p>\n            </>;\n  },\n  args: {\n    timeZone: 'Pacific/Auckland'\n  },\n  argTypes: {\n    disabled: {\n      control: false\n    }\n  }\n}",
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
init_range_calendar_story();
export { Default, DisabledDates, WithOutsideDays, WithRangeConstraints, WithSelectedRangeAndMonth, WithTimeZone, meta as default };
