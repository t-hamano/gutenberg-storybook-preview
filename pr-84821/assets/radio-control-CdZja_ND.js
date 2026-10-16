import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as deprecated } from "./build-module-BWCORUbm.js";
import { n as init_create_higher_order_component, t as createHigherOrderComponent } from "./create-higher-order-component-C1oHQdWH.js";
import { n as isShallowEqual, t as init_build_module$1 } from "./build-module-COHfMY9T.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
import { n as useFocusOutside, t as init_use_focus_outside } from "./use-focus-outside-CUKAKz_B.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, o as isRTL, r as _n, t as init_build_module$2 } from "./build-module-v04us4E2.js";
import { n as withIgnoreIMEEvents } from "./with-ignore-ime-events-BFiL1WqY.js";
import { r as init_build_module$3 } from "./build-module-LJKyBiy6.js";
import { n as usePrevious, t as init_use_previous } from "./use-previous-BYjjquxs.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { n as useRender, t as init_useRender } from "./useRender-JXgJ-9ZS.js";
import { r as speak, t as init_build_module$4 } from "./build-module-DsAeWnrG.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { t as check_default } from "./check-Cpe2xAFk.js";
import { r as chevron_left_default, t as chevron_right_default } from "./chevron-right-CD1lApKI.js";
import { t as close_small_default } from "./close-small-BAxZctqD.js";
import { n as reset_default } from "./reset-CF3TDagv.js";
import { B as startOfISOWeek, F as differenceInCalendarDays, I as init_differenceInCalendarDays, L as getTimezoneOffsetInMilliseconds, R as init_getTimezoneOffsetInMilliseconds, S as init_en_US, _ as getWeekYear, a as init_useDayPicker, b as init_getISOWeek, d as isProtectedWeekYearToken, f as warnOrThrowProtectedError, g as init_getWeek, h as getWeek, i as rangeContainsModifiers, l as init_protectedTokens, m as longFormatters, n as init_DayPicker, o as useDayPicker, p as init_longFormatters, r as init_rangeContainsModifiers, t as DayPicker, u as isProtectedDayOfYearToken, v as init_getWeekYear, x as enUS, y as getISOWeek, z as init_startOfISOWeek } from "./DayPicker-DXwfQZAN.js";
import { a as init_constants$2, c as millisecondsInMinute, i as init_constructFrom, l as millisecondsInSecond, n as toDate, r as constructFrom, s as millisecondsInHour, t as init_toDate } from "./toDate-Ty5HTtpY.js";
import { L as addDays, M as startOfWeek, N as getDefaultOptions$1, P as init_defaultOptions, R as init_addDays, j as init_startOfWeek } from "./setYear-BreLG7HH.js";
import { n as init_icon_button, t as IconButton } from "./icon-button-D0Ow6POm.js";
import { n as init_input, t as Input } from "./input-C6NB5PAW.js";
import { n as init_control_with_error, t as ControlWithError } from "./control-with-error-IxvCj9CM.js";
import { a as Label, c as init_root, i as init_description, n as init_details, o as init_label, r as Description, s as Root$1, t as Details } from "./details-CgXcRwPW.js";
import { n as init_input_control, t as InputControl } from "./input-control-BbYRiDE3.js";
import { n as useControlledValue$1, t as init_use_controlled_value$1 } from "./use-controlled-value-CCRFAPBO.js";
import { n as init_component, t as component_default } from "./component-6Aui1e4Q.js";
import { n as init_component$1, t as component_default$1 } from "./component-2hv2PPn7.js";
import { n as init_component$2, t as component_default$2 } from "./component-DKizmr6G.js";
import { n as init_component$3, t as component_default$3 } from "./component-DQdvPzmr.js";
import { a as StyledLabel, i as StyledHelp, n as base_control_default, o as init_base_control_styles, r as init_base_control } from "./base-control-4RJ3L0hf.js";
import { n as button_default, r as init_button } from "./button-BxEkUQAF.js";
import { n as init_component$4, t as component_default$4 } from "./component-ThRvbQN8.js";
import { n as init_strings, r as normalizeTextString } from "./strings-ogU8BBr-.js";
import { n as init_component$5, t as component_default$5 } from "./component-CMh1CLTm.js";
import { n as spinner_default, t as init_spinner } from "./spinner-DHB8cpoh.js";
import { r as init_build_module$5 } from "./library.story-CFsmdbdz.js";
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/areIntervalsOverlapping.js
/**
* The {@link areIntervalsOverlapping} function options.
*/
/**
* @name areIntervalsOverlapping
* @category Interval Helpers
* @summary Is the given time interval overlapping with another time interval?
*
* @description
* Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping unless `inclusive` is set to `true`.
*
* @param intervalLeft - The first interval to compare.
* @param intervalRight - The second interval to compare.
* @param options - The object with options
*
* @returns Whether the time intervals are overlapping
*
* @example
* // For overlapping time intervals:
* areIntervalsOverlapping(
*   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
*   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
* )
* //=> true
*
* @example
* // For non-overlapping time intervals:
* areIntervalsOverlapping(
*   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
*   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
* )
* //=> false
*
* @example
* // For adjacent time intervals:
* areIntervalsOverlapping(
*   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
*   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
* )
* //=> false
*
* @example
* // Using the inclusive option:
* areIntervalsOverlapping(
*   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
*   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
*   { inclusive: true }
* )
* //=> true
*/
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
	const [leftStartTime, leftEndTime] = [+toDate(intervalLeft.start, options?.in), +toDate(intervalLeft.end, options?.in)].sort((a, b) => a - b);
	const [rightStartTime, rightEndTime] = [+toDate(intervalRight.start, options?.in), +toDate(intervalRight.end, options?.in)].sort((a, b) => a - b);
	if (options?.inclusive) return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
	return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
function init_areIntervalsOverlapping() {
	return (init_areIntervalsOverlapping = __esmMin((() => {
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/getDefaultOptions.js
/**
* @name getDefaultOptions
* @category Common Helpers
* @summary Get default options.
* @pure false
*
* @description
* Returns an object that contains defaults for
* `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
* arguments for all functions.
*
* You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
*
* @returns The default options
*
* @example
* const result = getDefaultOptions()
* //=> {}
*
* @example
* setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
* const result = getDefaultOptions()
* //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
*/
function getDefaultOptions() {
	return Object.assign({}, getDefaultOptions$1());
}
function init_getDefaultOptions() {
	return (init_getDefaultOptions = __esmMin((() => {
		init_defaultOptions();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/getISODay.js
/**
* The {@link getISODay} function options.
*/
/**
* @name getISODay
* @category Weekday Helpers
* @summary Get the day of the ISO week of the given date.
*
* @description
* Get the day of the ISO week of the given date,
* which is 7 for Sunday, 1 for Monday etc.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
* @param options - An object with options
*
* @returns The day of ISO week
*
* @example
* // Which day of the ISO week is 26 February 2012?
* const result = getISODay(new Date(2012, 1, 26))
* //=> 7
*/
function getISODay(date, options) {
	const day = toDate(date, options?.in).getDay();
	return day === 0 ? 7 : day;
}
function init_getISODay() {
	return (init_getISODay = __esmMin((() => {
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/transpose.js
/**
* @name transpose
* @category Generic Helpers
* @summary Transpose the date to the given constructor.
*
* @description
* The function transposes the date to the given constructor. It helps you
* to transpose the date in the system time zone to say `UTCDate` or any other
* date extension.
*
* @typeParam InputDate - The input `Date` type derived from the passed argument.
* @typeParam ResultDate - The result `Date` type derived from the passed constructor.
*
* @param date - The date to use values from
* @param constructor - The date constructor to use
*
* @returns Date transposed to the given constructor
*
* @example
* // Create July 10, 2022 00:00 in locale time zone
* const date = new Date(2022, 6, 10)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
*
* @example
* // Transpose the date to July 10, 2022 00:00 in UTC
* transpose(date, UTCDate)
* //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
*/
function transpose(date, constructor) {
	const date_ = isConstructor(constructor) ? new constructor(0) : constructFrom(constructor, 0);
	date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
	return date_;
}
function isConstructor(constructor) {
	return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}
function init_transpose() {
	return (init_transpose = __esmMin((() => {
		init_constructFrom();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY, Setter, ValueSetter, DateTimezoneSetter;
function init_Setter() {
	return (init_Setter = __esmMin((() => {
		init_constructFrom();
		init_transpose();
		TIMEZONE_UNIT_PRIORITY = 10;
		Setter = class {
			subPriority = 0;
			validate(_utcDate, _options) {
				return true;
			}
		};
		ValueSetter = class extends Setter {
			constructor(value, validateValue, setValue, priority, subPriority) {
				super();
				this.value = value;
				this.validateValue = validateValue;
				this.setValue = setValue;
				this.priority = priority;
				if (subPriority) this.subPriority = subPriority;
			}
			validate(date, options) {
				return this.validateValue(date, this.value, options);
			}
			set(date, flags, options) {
				return this.setValue(date, flags, this.value, options);
			}
		};
		DateTimezoneSetter = class extends Setter {
			priority = TIMEZONE_UNIT_PRIORITY;
			subPriority = -1;
			constructor(context, reference) {
				super();
				this.context = context || ((date) => constructFrom(reference, date));
			}
			set(date, flags) {
				if (flags.timestampIsSet) return date;
				return constructFrom(date, transpose(date, this.context));
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/Parser.js
var Parser;
function init_Parser() {
	return (init_Parser = __esmMin((() => {
		init_Setter();
		Parser = class {
			run(dateString, token, match, options) {
				const result = this.parse(dateString, token, match, options);
				if (!result) return null;
				return {
					setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
					rest: result.rest
				};
			}
			validate(_utcDate, _value, _options) {
				return true;
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/EraParser.js
var EraParser;
function init_EraParser() {
	return (init_EraParser = __esmMin((() => {
		init_Parser();
		EraParser = class extends Parser {
			priority = 140;
			parse(dateString, token, match) {
				switch (token) {
					case "G":
					case "GG":
					case "GGG": return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
					case "GGGGG": return match.era(dateString, { width: "narrow" });
					default: return match.era(dateString, { width: "wide" }) || match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
				}
			}
			set(date, flags, value) {
				flags.era = value;
				date.setFullYear(value, 0, 1);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"R",
				"u",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/constants.js
var numericPatterns, timezonePatterns;
function init_constants() {
	return (init_constants = __esmMin((() => {
		numericPatterns = {
			month: /^(1[0-2]|0?\d)/,
			date: /^(3[0-1]|[0-2]?\d)/,
			dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
			week: /^(5[0-3]|[0-4]?\d)/,
			hour23h: /^(2[0-3]|[0-1]?\d)/,
			hour24h: /^(2[0-4]|[0-1]?\d)/,
			hour11h: /^(1[0-1]|0?\d)/,
			hour12h: /^(1[0-2]|0?\d)/,
			minute: /^[0-5]?\d/,
			second: /^[0-5]?\d/,
			singleDigit: /^\d/,
			twoDigits: /^\d{1,2}/,
			threeDigits: /^\d{1,3}/,
			fourDigits: /^\d{1,4}/,
			anyDigitsSigned: /^-?\d+/,
			singleDigitSigned: /^-?\d/,
			twoDigitsSigned: /^-?\d{1,2}/,
			threeDigitsSigned: /^-?\d{1,3}/,
			fourDigitsSigned: /^-?\d{1,4}/
		};
		timezonePatterns = {
			basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
			basic: /^([+-])(\d{2})(\d{2})|Z/,
			basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
			extended: /^([+-])(\d{2}):(\d{2})|Z/,
			extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
	if (!parseFnResult) return parseFnResult;
	return {
		value: mapFn(parseFnResult.value),
		rest: parseFnResult.rest
	};
}
function parseNumericPattern(pattern, dateString) {
	const matchResult = dateString.match(pattern);
	if (!matchResult) return null;
	return {
		value: parseInt(matchResult[0], 10),
		rest: dateString.slice(matchResult[0].length)
	};
}
function parseTimezonePattern(pattern, dateString) {
	const matchResult = dateString.match(pattern);
	if (!matchResult) return null;
	if (matchResult[0] === "Z") return {
		value: 0,
		rest: dateString.slice(1)
	};
	const sign = matchResult[1] === "+" ? 1 : -1;
	const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
	const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
	const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
	return {
		value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
		rest: dateString.slice(matchResult[0].length)
	};
}
function parseAnyDigitsSigned(dateString) {
	return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
	switch (n) {
		case 1: return parseNumericPattern(numericPatterns.singleDigit, dateString);
		case 2: return parseNumericPattern(numericPatterns.twoDigits, dateString);
		case 3: return parseNumericPattern(numericPatterns.threeDigits, dateString);
		case 4: return parseNumericPattern(numericPatterns.fourDigits, dateString);
		default: return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
	}
}
function parseNDigitsSigned(n, dateString) {
	switch (n) {
		case 1: return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
		case 2: return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
		case 3: return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
		case 4: return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
		default: return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
	}
}
function dayPeriodEnumToHours(dayPeriod) {
	switch (dayPeriod) {
		case "morning": return 4;
		case "evening": return 17;
		case "pm":
		case "noon":
		case "afternoon": return 12;
		default: return 0;
	}
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
	const isCommonEra = currentYear > 0;
	const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
	let result;
	if (absCurrentYear <= 50) result = twoDigitYear || 100;
	else {
		const rangeEnd = absCurrentYear + 50;
		const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
		const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
		result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
	}
	return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex$1(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_constants$2();
		init_constants();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/YearParser.js
var YearParser;
function init_YearParser() {
	return (init_YearParser = __esmMin((() => {
		init_Parser();
		init_utils();
		YearParser = class extends Parser {
			priority = 130;
			incompatibleTokens = [
				"Y",
				"R",
				"u",
				"w",
				"I",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
			parse(dateString, token, match) {
				const valueCallback = (year) => ({
					year,
					isTwoDigitYear: token === "yy"
				});
				switch (token) {
					case "y": return mapValue(parseNDigits(4, dateString), valueCallback);
					case "yo": return mapValue(match.ordinalNumber(dateString, { unit: "year" }), valueCallback);
					default: return mapValue(parseNDigits(token.length, dateString), valueCallback);
				}
			}
			validate(_date, value) {
				return value.isTwoDigitYear || value.year > 0;
			}
			set(date, flags, value) {
				const currentYear = date.getFullYear();
				if (value.isTwoDigitYear) {
					const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
					date.setFullYear(normalizedTwoDigitYear, 0, 1);
					date.setHours(0, 0, 0, 0);
					return date;
				}
				const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
				date.setFullYear(year, 0, 1);
				date.setHours(0, 0, 0, 0);
				return date;
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser;
function init_LocalWeekYearParser() {
	return (init_LocalWeekYearParser = __esmMin((() => {
		init_getWeekYear();
		init_startOfWeek();
		init_Parser();
		init_utils();
		LocalWeekYearParser = class extends Parser {
			priority = 130;
			parse(dateString, token, match) {
				const valueCallback = (year) => ({
					year,
					isTwoDigitYear: token === "YY"
				});
				switch (token) {
					case "Y": return mapValue(parseNDigits(4, dateString), valueCallback);
					case "Yo": return mapValue(match.ordinalNumber(dateString, { unit: "year" }), valueCallback);
					default: return mapValue(parseNDigits(token.length, dateString), valueCallback);
				}
			}
			validate(_date, value) {
				return value.isTwoDigitYear || value.year > 0;
			}
			set(date, flags, value, options) {
				const currentYear = getWeekYear(date, options);
				if (value.isTwoDigitYear) {
					const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
					date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
					date.setHours(0, 0, 0, 0);
					return startOfWeek(date, options);
				}
				const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
				date.setFullYear(year, 0, options.firstWeekContainsDate);
				date.setHours(0, 0, 0, 0);
				return startOfWeek(date, options);
			}
			incompatibleTokens = [
				"y",
				"R",
				"u",
				"Q",
				"q",
				"M",
				"L",
				"I",
				"d",
				"D",
				"i",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser;
function init_ISOWeekYearParser() {
	return (init_ISOWeekYearParser = __esmMin((() => {
		init_startOfISOWeek();
		init_constructFrom();
		init_Parser();
		init_utils();
		ISOWeekYearParser = class extends Parser {
			priority = 130;
			parse(dateString, token) {
				if (token === "R") return parseNDigitsSigned(4, dateString);
				return parseNDigitsSigned(token.length, dateString);
			}
			set(date, _flags, value) {
				const firstWeekOfYear = constructFrom(date, 0);
				firstWeekOfYear.setFullYear(value, 0, 4);
				firstWeekOfYear.setHours(0, 0, 0, 0);
				return startOfISOWeek(firstWeekOfYear);
			}
			incompatibleTokens = [
				"G",
				"y",
				"Y",
				"u",
				"Q",
				"q",
				"M",
				"L",
				"w",
				"d",
				"D",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser;
function init_ExtendedYearParser() {
	return (init_ExtendedYearParser = __esmMin((() => {
		init_Parser();
		init_utils();
		ExtendedYearParser = class extends Parser {
			priority = 130;
			parse(dateString, token) {
				if (token === "u") return parseNDigitsSigned(4, dateString);
				return parseNDigitsSigned(token.length, dateString);
			}
			set(date, _flags, value) {
				date.setFullYear(value, 0, 1);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"G",
				"y",
				"Y",
				"R",
				"w",
				"I",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/QuarterParser.js
var QuarterParser;
function init_QuarterParser() {
	return (init_QuarterParser = __esmMin((() => {
		init_Parser();
		init_utils();
		QuarterParser = class extends Parser {
			priority = 120;
			parse(dateString, token, match) {
				switch (token) {
					case "Q":
					case "QQ": return parseNDigits(token.length, dateString);
					case "Qo": return match.ordinalNumber(dateString, { unit: "quarter" });
					case "QQQ": return match.quarter(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.quarter(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "QQQQQ": return match.quarter(dateString, {
						width: "narrow",
						context: "formatting"
					});
					default: return match.quarter(dateString, {
						width: "wide",
						context: "formatting"
					}) || match.quarter(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.quarter(dateString, {
						width: "narrow",
						context: "formatting"
					});
				}
			}
			validate(_date, value) {
				return value >= 1 && value <= 4;
			}
			set(date, _flags, value) {
				date.setMonth((value - 1) * 3, 1);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"Y",
				"R",
				"q",
				"M",
				"L",
				"w",
				"I",
				"d",
				"D",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser;
function init_StandAloneQuarterParser() {
	return (init_StandAloneQuarterParser = __esmMin((() => {
		init_Parser();
		init_utils();
		StandAloneQuarterParser = class extends Parser {
			priority = 120;
			parse(dateString, token, match) {
				switch (token) {
					case "q":
					case "qq": return parseNDigits(token.length, dateString);
					case "qo": return match.ordinalNumber(dateString, { unit: "quarter" });
					case "qqq": return match.quarter(dateString, {
						width: "abbreviated",
						context: "standalone"
					}) || match.quarter(dateString, {
						width: "narrow",
						context: "standalone"
					});
					case "qqqqq": return match.quarter(dateString, {
						width: "narrow",
						context: "standalone"
					});
					default: return match.quarter(dateString, {
						width: "wide",
						context: "standalone"
					}) || match.quarter(dateString, {
						width: "abbreviated",
						context: "standalone"
					}) || match.quarter(dateString, {
						width: "narrow",
						context: "standalone"
					});
				}
			}
			validate(_date, value) {
				return value >= 1 && value <= 4;
			}
			set(date, _flags, value) {
				date.setMonth((value - 1) * 3, 1);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"Y",
				"R",
				"Q",
				"M",
				"L",
				"w",
				"I",
				"d",
				"D",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/MonthParser.js
var MonthParser;
function init_MonthParser() {
	return (init_MonthParser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		MonthParser = class extends Parser {
			incompatibleTokens = [
				"Y",
				"R",
				"q",
				"Q",
				"L",
				"w",
				"I",
				"D",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
			priority = 110;
			parse(dateString, token, match) {
				const valueCallback = (value) => value - 1;
				switch (token) {
					case "M": return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
					case "MM": return mapValue(parseNDigits(2, dateString), valueCallback);
					case "Mo": return mapValue(match.ordinalNumber(dateString, { unit: "month" }), valueCallback);
					case "MMM": return match.month(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.month(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "MMMMM": return match.month(dateString, {
						width: "narrow",
						context: "formatting"
					});
					default: return match.month(dateString, {
						width: "wide",
						context: "formatting"
					}) || match.month(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.month(dateString, {
						width: "narrow",
						context: "formatting"
					});
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 11;
			}
			set(date, _flags, value) {
				date.setMonth(value, 1);
				date.setHours(0, 0, 0, 0);
				return date;
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser;
function init_StandAloneMonthParser() {
	return (init_StandAloneMonthParser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		StandAloneMonthParser = class extends Parser {
			priority = 110;
			parse(dateString, token, match) {
				const valueCallback = (value) => value - 1;
				switch (token) {
					case "L": return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
					case "LL": return mapValue(parseNDigits(2, dateString), valueCallback);
					case "Lo": return mapValue(match.ordinalNumber(dateString, { unit: "month" }), valueCallback);
					case "LLL": return match.month(dateString, {
						width: "abbreviated",
						context: "standalone"
					}) || match.month(dateString, {
						width: "narrow",
						context: "standalone"
					});
					case "LLLLL": return match.month(dateString, {
						width: "narrow",
						context: "standalone"
					});
					default: return match.month(dateString, {
						width: "wide",
						context: "standalone"
					}) || match.month(dateString, {
						width: "abbreviated",
						context: "standalone"
					}) || match.month(dateString, {
						width: "narrow",
						context: "standalone"
					});
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 11;
			}
			set(date, _flags, value) {
				date.setMonth(value, 1);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"Y",
				"R",
				"q",
				"Q",
				"M",
				"w",
				"I",
				"D",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/setWeek.js
/**
* The {@link setWeek} function options.
*/
/**
* @name setWeek
* @category Week Helpers
* @summary Set the local week to the given date.
*
* @description
* Set the local week to the given date, saving the weekday number.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param week - The week of the new date
* @param options - An object with options
*
* @returns The new date with the local week set
*
* @example
* // Set the 1st week to 2 January 2005 with default options:
* const result = setWeek(new Date(2005, 0, 2), 1)
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // Set the 1st week to 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January:
* const result = setWeek(new Date(2005, 0, 2), 1, {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Sun Jan 4 2004 00:00:00
*/
function setWeek(date, week, options) {
	const date_ = toDate(date, options?.in);
	const diff = getWeek(date_, options) - week;
	date_.setDate(date_.getDate() - diff * 7);
	return toDate(date_, options?.in);
}
function init_setWeek() {
	return (init_setWeek = __esmMin((() => {
		init_getWeek();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser;
function init_LocalWeekParser() {
	return (init_LocalWeekParser = __esmMin((() => {
		init_setWeek();
		init_startOfWeek();
		init_constants();
		init_Parser();
		init_utils();
		LocalWeekParser = class extends Parser {
			priority = 100;
			parse(dateString, token, match) {
				switch (token) {
					case "w": return parseNumericPattern(numericPatterns.week, dateString);
					case "wo": return match.ordinalNumber(dateString, { unit: "week" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(_date, value) {
				return value >= 1 && value <= 53;
			}
			set(date, _flags, value, options) {
				return startOfWeek(setWeek(date, value, options), options);
			}
			incompatibleTokens = [
				"y",
				"R",
				"u",
				"q",
				"Q",
				"M",
				"L",
				"I",
				"d",
				"D",
				"i",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/setISOWeek.js
/**
* The {@link setISOWeek} function options.
*/
/**
* @name setISOWeek
* @category ISO Week Helpers
* @summary Set the ISO week to the given date.
*
* @description
* Set the ISO week to the given date, saving the weekday number.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The `Date` type of the context function.
*
* @param date - The date to be changed
* @param week - The ISO week of the new date
* @param options - An object with options
*
* @returns The new date with the ISO week set
*
* @example
* // Set the 53rd ISO week to 7 August 2004:
* const result = setISOWeek(new Date(2004, 7, 7), 53)
* //=> Sat Jan 01 2005 00:00:00
*/
function setISOWeek(date, week, options) {
	const _date = toDate(date, options?.in);
	const diff = getISOWeek(_date, options) - week;
	_date.setDate(_date.getDate() - diff * 7);
	return _date;
}
function init_setISOWeek() {
	return (init_setISOWeek = __esmMin((() => {
		init_getISOWeek();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser;
function init_ISOWeekParser() {
	return (init_ISOWeekParser = __esmMin((() => {
		init_setISOWeek();
		init_startOfISOWeek();
		init_constants();
		init_Parser();
		init_utils();
		ISOWeekParser = class extends Parser {
			priority = 100;
			parse(dateString, token, match) {
				switch (token) {
					case "I": return parseNumericPattern(numericPatterns.week, dateString);
					case "Io": return match.ordinalNumber(dateString, { unit: "week" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(_date, value) {
				return value >= 1 && value <= 53;
			}
			set(date, _flags, value) {
				return startOfISOWeek(setISOWeek(date, value));
			}
			incompatibleTokens = [
				"y",
				"Y",
				"u",
				"q",
				"Q",
				"M",
				"L",
				"w",
				"d",
				"D",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH, DAYS_IN_MONTH_LEAP_YEAR, DateParser;
function init_DateParser() {
	return (init_DateParser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		DAYS_IN_MONTH = [
			31,
			28,
			31,
			30,
			31,
			30,
			31,
			31,
			30,
			31,
			30,
			31
		];
		DAYS_IN_MONTH_LEAP_YEAR = [
			31,
			29,
			31,
			30,
			31,
			30,
			31,
			31,
			30,
			31,
			30,
			31
		];
		DateParser = class extends Parser {
			priority = 90;
			subPriority = 1;
			parse(dateString, token, match) {
				switch (token) {
					case "d": return parseNumericPattern(numericPatterns.date, dateString);
					case "do": return match.ordinalNumber(dateString, { unit: "date" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(date, value) {
				const isLeapYear = isLeapYearIndex$1(date.getFullYear());
				const month = date.getMonth();
				if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
				else return value >= 1 && value <= DAYS_IN_MONTH[month];
			}
			set(date, _flags, value) {
				date.setDate(value);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"Y",
				"R",
				"q",
				"Q",
				"w",
				"I",
				"D",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser;
function init_DayOfYearParser() {
	return (init_DayOfYearParser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		DayOfYearParser = class extends Parser {
			priority = 90;
			subpriority = 1;
			parse(dateString, token, match) {
				switch (token) {
					case "D":
					case "DD": return parseNumericPattern(numericPatterns.dayOfYear, dateString);
					case "Do": return match.ordinalNumber(dateString, { unit: "date" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(date, value) {
				if (isLeapYearIndex$1(date.getFullYear())) return value >= 1 && value <= 366;
				else return value >= 1 && value <= 365;
			}
			set(date, _flags, value) {
				date.setMonth(0, value);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"Y",
				"R",
				"q",
				"Q",
				"M",
				"L",
				"w",
				"I",
				"d",
				"E",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/setDay.js
/**
* The {@link setDay} function options.
*/
/**
* @name setDay
* @category Weekday Helpers
* @summary Set the day of the week to the given date.
*
* @description
* Set the day of the week to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param day - The day of the week of the new date
* @param options - An object with options.
*
* @returns The new date with the day of the week set
*
* @example
* // Set week day to Sunday, with the default weekStartsOn of Sunday:
* const result = setDay(new Date(2014, 8, 1), 0)
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // Set week day to Sunday, with a weekStartsOn of Monday:
* const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
* //=> Sun Sep 07 2014 00:00:00
*/
function setDay(date, day, options) {
	const defaultOptions = getDefaultOptions$1();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const date_ = toDate(date, options?.in);
	const currentDay = date_.getDay();
	const dayIndex = (day % 7 + 7) % 7;
	const delta = 7 - weekStartsOn;
	const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
	return addDays(date_, diff, options);
}
function init_setDay() {
	return (init_setDay = __esmMin((() => {
		init_defaultOptions();
		init_addDays();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/DayParser.js
var DayParser;
function init_DayParser() {
	return (init_DayParser = __esmMin((() => {
		init_setDay();
		init_Parser();
		DayParser = class extends Parser {
			priority = 90;
			parse(dateString, token, match) {
				switch (token) {
					case "E":
					case "EE":
					case "EEE": return match.day(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "EEEEE": return match.day(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "EEEEEE": return match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					});
					default: return match.day(dateString, {
						width: "wide",
						context: "formatting"
					}) || match.day(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					});
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 6;
			}
			set(date, _flags, value, options) {
				date = setDay(date, value, options);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"D",
				"i",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser;
function init_LocalDayParser() {
	return (init_LocalDayParser = __esmMin((() => {
		init_setDay();
		init_Parser();
		init_utils();
		LocalDayParser = class extends Parser {
			priority = 90;
			parse(dateString, token, match, options) {
				const valueCallback = (value) => {
					const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
					return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
				};
				switch (token) {
					case "e":
					case "ee": return mapValue(parseNDigits(token.length, dateString), valueCallback);
					case "eo": return mapValue(match.ordinalNumber(dateString, { unit: "day" }), valueCallback);
					case "eee": return match.day(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "eeeee": return match.day(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "eeeeee": return match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					});
					default: return match.day(dateString, {
						width: "wide",
						context: "formatting"
					}) || match.day(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					});
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 6;
			}
			set(date, _flags, value, options) {
				date = setDay(date, value, options);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"y",
				"R",
				"u",
				"q",
				"Q",
				"M",
				"L",
				"I",
				"d",
				"D",
				"E",
				"i",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser;
function init_StandAloneLocalDayParser() {
	return (init_StandAloneLocalDayParser = __esmMin((() => {
		init_setDay();
		init_Parser();
		init_utils();
		StandAloneLocalDayParser = class extends Parser {
			priority = 90;
			parse(dateString, token, match, options) {
				const valueCallback = (value) => {
					const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
					return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
				};
				switch (token) {
					case "c":
					case "cc": return mapValue(parseNDigits(token.length, dateString), valueCallback);
					case "co": return mapValue(match.ordinalNumber(dateString, { unit: "day" }), valueCallback);
					case "ccc": return match.day(dateString, {
						width: "abbreviated",
						context: "standalone"
					}) || match.day(dateString, {
						width: "short",
						context: "standalone"
					}) || match.day(dateString, {
						width: "narrow",
						context: "standalone"
					});
					case "ccccc": return match.day(dateString, {
						width: "narrow",
						context: "standalone"
					});
					case "cccccc": return match.day(dateString, {
						width: "short",
						context: "standalone"
					}) || match.day(dateString, {
						width: "narrow",
						context: "standalone"
					});
					default: return match.day(dateString, {
						width: "wide",
						context: "standalone"
					}) || match.day(dateString, {
						width: "abbreviated",
						context: "standalone"
					}) || match.day(dateString, {
						width: "short",
						context: "standalone"
					}) || match.day(dateString, {
						width: "narrow",
						context: "standalone"
					});
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 6;
			}
			set(date, _flags, value, options) {
				date = setDay(date, value, options);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"y",
				"R",
				"u",
				"q",
				"Q",
				"M",
				"L",
				"I",
				"d",
				"D",
				"E",
				"i",
				"e",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/setISODay.js
/**
* The {@link setISODay} function options.
*/
/**
* @name setISODay
* @category Weekday Helpers
* @summary Set the day of the ISO week to the given date.
*
* @description
* Set the day of the ISO week to the given date.
* ISO week starts with Monday.
* 7 is the index of Sunday, 1 is the index of Monday, etc.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param day - The day of the ISO week of the new date
* @param options - An object with options
*
* @returns The new date with the day of the ISO week set
*
* @example
* // Set Sunday to 1 September 2014:
* const result = setISODay(new Date(2014, 8, 1), 7)
* //=> Sun Sep 07 2014 00:00:00
*/
function setISODay(date, day, options) {
	const date_ = toDate(date, options?.in);
	const diff = day - getISODay(date_, options);
	return addDays(date_, diff, options);
}
function init_setISODay() {
	return (init_setISODay = __esmMin((() => {
		init_addDays();
		init_getISODay();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var ISODayParser;
function init_ISODayParser() {
	return (init_ISODayParser = __esmMin((() => {
		init_setISODay();
		init_Parser();
		init_utils();
		ISODayParser = class extends Parser {
			priority = 90;
			parse(dateString, token, match) {
				const valueCallback = (value) => {
					if (value === 0) return 7;
					return value;
				};
				switch (token) {
					case "i":
					case "ii": return parseNDigits(token.length, dateString);
					case "io": return match.ordinalNumber(dateString, { unit: "day" });
					case "iii": return mapValue(match.day(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					}), valueCallback);
					case "iiiii": return mapValue(match.day(dateString, {
						width: "narrow",
						context: "formatting"
					}), valueCallback);
					case "iiiiii": return mapValue(match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					}), valueCallback);
					default: return mapValue(match.day(dateString, {
						width: "wide",
						context: "formatting"
					}) || match.day(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.day(dateString, {
						width: "short",
						context: "formatting"
					}) || match.day(dateString, {
						width: "narrow",
						context: "formatting"
					}), valueCallback);
				}
			}
			validate(_date, value) {
				return value >= 1 && value <= 7;
			}
			set(date, _flags, value) {
				date = setISODay(date, value);
				date.setHours(0, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"y",
				"Y",
				"u",
				"q",
				"Q",
				"M",
				"L",
				"w",
				"d",
				"D",
				"E",
				"e",
				"c",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/AMPMParser.js
var AMPMParser;
function init_AMPMParser() {
	return (init_AMPMParser = __esmMin((() => {
		init_Parser();
		init_utils();
		AMPMParser = class extends Parser {
			priority = 80;
			parse(dateString, token, match) {
				switch (token) {
					case "a":
					case "aa":
					case "aaa": return match.dayPeriod(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "aaaaa": return match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
					default: return match.dayPeriod(dateString, {
						width: "wide",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
				}
			}
			set(date, _flags, value) {
				date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"b",
				"B",
				"H",
				"k",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser;
function init_AMPMMidnightParser() {
	return (init_AMPMMidnightParser = __esmMin((() => {
		init_Parser();
		init_utils();
		AMPMMidnightParser = class extends Parser {
			priority = 80;
			parse(dateString, token, match) {
				switch (token) {
					case "b":
					case "bb":
					case "bbb": return match.dayPeriod(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "bbbbb": return match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
					default: return match.dayPeriod(dateString, {
						width: "wide",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
				}
			}
			set(date, _flags, value) {
				date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"a",
				"B",
				"H",
				"k",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser;
function init_DayPeriodParser() {
	return (init_DayPeriodParser = __esmMin((() => {
		init_Parser();
		init_utils();
		DayPeriodParser = class extends Parser {
			priority = 80;
			parse(dateString, token, match) {
				switch (token) {
					case "B":
					case "BB":
					case "BBB": return match.dayPeriod(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
					case "BBBBB": return match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
					default: return match.dayPeriod(dateString, {
						width: "wide",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "abbreviated",
						context: "formatting"
					}) || match.dayPeriod(dateString, {
						width: "narrow",
						context: "formatting"
					});
				}
			}
			set(date, _flags, value) {
				date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"a",
				"b",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser;
function init_Hour1to12Parser() {
	return (init_Hour1to12Parser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		Hour1to12Parser = class extends Parser {
			priority = 70;
			parse(dateString, token, match) {
				switch (token) {
					case "h": return parseNumericPattern(numericPatterns.hour12h, dateString);
					case "ho": return match.ordinalNumber(dateString, { unit: "hour" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(_date, value) {
				return value >= 1 && value <= 12;
			}
			set(date, _flags, value) {
				const isPM = date.getHours() >= 12;
				if (isPM && value < 12) date.setHours(value + 12, 0, 0, 0);
				else if (!isPM && value === 12) date.setHours(0, 0, 0, 0);
				else date.setHours(value, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"H",
				"K",
				"k",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser;
function init_Hour0to23Parser() {
	return (init_Hour0to23Parser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		Hour0to23Parser = class extends Parser {
			priority = 70;
			parse(dateString, token, match) {
				switch (token) {
					case "H": return parseNumericPattern(numericPatterns.hour23h, dateString);
					case "Ho": return match.ordinalNumber(dateString, { unit: "hour" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 23;
			}
			set(date, _flags, value) {
				date.setHours(value, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"a",
				"b",
				"h",
				"K",
				"k",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser;
function init_Hour0To11Parser() {
	return (init_Hour0To11Parser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		Hour0To11Parser = class extends Parser {
			priority = 70;
			parse(dateString, token, match) {
				switch (token) {
					case "K": return parseNumericPattern(numericPatterns.hour11h, dateString);
					case "Ko": return match.ordinalNumber(dateString, { unit: "hour" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 11;
			}
			set(date, _flags, value) {
				if (date.getHours() >= 12 && value < 12) date.setHours(value + 12, 0, 0, 0);
				else date.setHours(value, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"h",
				"H",
				"k",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser;
function init_Hour1To24Parser() {
	return (init_Hour1To24Parser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		Hour1To24Parser = class extends Parser {
			priority = 70;
			parse(dateString, token, match) {
				switch (token) {
					case "k": return parseNumericPattern(numericPatterns.hour24h, dateString);
					case "ko": return match.ordinalNumber(dateString, { unit: "hour" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(_date, value) {
				return value >= 1 && value <= 24;
			}
			set(date, _flags, value) {
				const hours = value <= 24 ? value % 24 : value;
				date.setHours(hours, 0, 0, 0);
				return date;
			}
			incompatibleTokens = [
				"a",
				"b",
				"h",
				"H",
				"K",
				"t",
				"T"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/MinuteParser.js
var MinuteParser;
function init_MinuteParser() {
	return (init_MinuteParser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		MinuteParser = class extends Parser {
			priority = 60;
			parse(dateString, token, match) {
				switch (token) {
					case "m": return parseNumericPattern(numericPatterns.minute, dateString);
					case "mo": return match.ordinalNumber(dateString, { unit: "minute" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 59;
			}
			set(date, _flags, value) {
				date.setMinutes(value, 0, 0);
				return date;
			}
			incompatibleTokens = ["t", "T"];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/SecondParser.js
var SecondParser;
function init_SecondParser() {
	return (init_SecondParser = __esmMin((() => {
		init_constants();
		init_Parser();
		init_utils();
		SecondParser = class extends Parser {
			priority = 50;
			parse(dateString, token, match) {
				switch (token) {
					case "s": return parseNumericPattern(numericPatterns.second, dateString);
					case "so": return match.ordinalNumber(dateString, { unit: "second" });
					default: return parseNDigits(token.length, dateString);
				}
			}
			validate(_date, value) {
				return value >= 0 && value <= 59;
			}
			set(date, _flags, value) {
				date.setSeconds(value, 0);
				return date;
			}
			incompatibleTokens = ["t", "T"];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser;
function init_FractionOfSecondParser() {
	return (init_FractionOfSecondParser = __esmMin((() => {
		init_Parser();
		init_utils();
		FractionOfSecondParser = class extends Parser {
			priority = 30;
			parse(dateString, token) {
				const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
				return mapValue(parseNDigits(token.length, dateString), valueCallback);
			}
			set(date, _flags, value) {
				date.setMilliseconds(value);
				return date;
			}
			incompatibleTokens = ["t", "T"];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser;
function init_ISOTimezoneWithZParser() {
	return (init_ISOTimezoneWithZParser = __esmMin((() => {
		init_constructFrom();
		init_getTimezoneOffsetInMilliseconds();
		init_constants();
		init_Parser();
		init_utils();
		ISOTimezoneWithZParser = class extends Parser {
			priority = 10;
			parse(dateString, token) {
				switch (token) {
					case "X": return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
					case "XX": return parseTimezonePattern(timezonePatterns.basic, dateString);
					case "XXXX": return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
					case "XXXXX": return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
					default: return parseTimezonePattern(timezonePatterns.extended, dateString);
				}
			}
			set(date, flags, value) {
				if (flags.timestampIsSet) return date;
				return constructFrom(date, date.getTime() - getTimezoneOffsetInMilliseconds(date) - value);
			}
			incompatibleTokens = [
				"t",
				"T",
				"x"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser;
function init_ISOTimezoneParser() {
	return (init_ISOTimezoneParser = __esmMin((() => {
		init_constructFrom();
		init_getTimezoneOffsetInMilliseconds();
		init_constants();
		init_Parser();
		init_utils();
		ISOTimezoneParser = class extends Parser {
			priority = 10;
			parse(dateString, token) {
				switch (token) {
					case "x": return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
					case "xx": return parseTimezonePattern(timezonePatterns.basic, dateString);
					case "xxxx": return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
					case "xxxxx": return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
					default: return parseTimezonePattern(timezonePatterns.extended, dateString);
				}
			}
			set(date, flags, value) {
				if (flags.timestampIsSet) return date;
				return constructFrom(date, date.getTime() - getTimezoneOffsetInMilliseconds(date) - value);
			}
			incompatibleTokens = [
				"t",
				"T",
				"X"
			];
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser;
function init_TimestampSecondsParser() {
	return (init_TimestampSecondsParser = __esmMin((() => {
		init_constructFrom();
		init_Parser();
		init_utils();
		TimestampSecondsParser = class extends Parser {
			priority = 40;
			parse(dateString) {
				return parseAnyDigitsSigned(dateString);
			}
			set(date, _flags, value) {
				return [constructFrom(date, value * 1e3), { timestampIsSet: true }];
			}
			incompatibleTokens = "*";
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser;
function init_TimestampMillisecondsParser() {
	return (init_TimestampMillisecondsParser = __esmMin((() => {
		init_constructFrom();
		init_Parser();
		init_utils();
		TimestampMillisecondsParser = class extends Parser {
			priority = 20;
			parse(dateString) {
				return parseAnyDigitsSigned(dateString);
			}
			set(date, _flags, value) {
				return [constructFrom(date, value), { timestampIsSet: true }];
			}
			incompatibleTokens = "*";
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse/_lib/parsers.js
var parsers;
function init_parsers() {
	return (init_parsers = __esmMin((() => {
		init_EraParser();
		init_YearParser();
		init_LocalWeekYearParser();
		init_ISOWeekYearParser();
		init_ExtendedYearParser();
		init_QuarterParser();
		init_StandAloneQuarterParser();
		init_MonthParser();
		init_StandAloneMonthParser();
		init_LocalWeekParser();
		init_ISOWeekParser();
		init_DateParser();
		init_DayOfYearParser();
		init_DayParser();
		init_LocalDayParser();
		init_StandAloneLocalDayParser();
		init_ISODayParser();
		init_AMPMParser();
		init_AMPMMidnightParser();
		init_DayPeriodParser();
		init_Hour1to12Parser();
		init_Hour0to23Parser();
		init_Hour0To11Parser();
		init_Hour1To24Parser();
		init_MinuteParser();
		init_SecondParser();
		init_FractionOfSecondParser();
		init_ISOTimezoneWithZParser();
		init_ISOTimezoneParser();
		init_TimestampSecondsParser();
		init_TimestampMillisecondsParser();
		parsers = {
			G: new EraParser(),
			y: new YearParser(),
			Y: new LocalWeekYearParser(),
			R: new ISOWeekYearParser(),
			u: new ExtendedYearParser(),
			Q: new QuarterParser(),
			q: new StandAloneQuarterParser(),
			M: new MonthParser(),
			L: new StandAloneMonthParser(),
			w: new LocalWeekParser(),
			I: new ISOWeekParser(),
			d: new DateParser(),
			D: new DayOfYearParser(),
			E: new DayParser(),
			e: new LocalDayParser(),
			c: new StandAloneLocalDayParser(),
			i: new ISODayParser(),
			a: new AMPMParser(),
			b: new AMPMMidnightParser(),
			B: new DayPeriodParser(),
			h: new Hour1to12Parser(),
			H: new Hour0to23Parser(),
			K: new Hour0To11Parser(),
			k: new Hour1To24Parser(),
			m: new MinuteParser(),
			s: new SecondParser(),
			S: new FractionOfSecondParser(),
			X: new ISOTimezoneWithZParser(),
			x: new ISOTimezoneParser(),
			t: new TimestampSecondsParser(),
			T: new TimestampMillisecondsParser()
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parse.js
/**
* @name parse
* @category Common Helpers
* @summary Parse the date.
*
* @description
* Return the date parsed from string using the given format string.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters in the format string wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
*
* Format of the format string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 5 below the table).
*
* Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
* and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
*
* ```javascript
* parse('23 AM', 'HH a', new Date())
* //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
* ```
*
* See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
*
* Accepted format string patterns:
* | Unit                            |Prior| Pattern | Result examples                   | Notes |
* |---------------------------------|-----|---------|-----------------------------------|-------|
* | Era                             | 140 | G..GGG  | AD, BC                            |       |
* |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 |     | GGGGG   | A, B                              |       |
* | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
* |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
* |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
* |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
* |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
* |                                 |     | yyyyy   | ...                               | 2,4   |
* | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
* |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
* |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
* |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
* |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
* |                                 |     | YYYYY   | ...                               | 2,4   |
* | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
* |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
* |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
* |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
* |                                 |     | RRRRR   | ...                               | 2,4,5 |
* | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
* |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
* |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
* |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
* |                                 |     | uuuuu   | ...                               | 2,4   |
* | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
* |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
* |                                 |     | QQ      | 01, 02, 03, 04                    |       |
* |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
* |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
* |                                 |     | qq      | 01, 02, 03, 04                    |       |
* |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
* | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
* |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
* |                                 |     | MM      | 01, 02, ..., 12                   |       |
* |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 |     | MMMM    | January, February, ..., December  | 2     |
* |                                 |     | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
* |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
* |                                 |     | LL      | 01, 02, ..., 12                   |       |
* |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 |     | LLLL    | January, February, ..., December  | 2     |
* |                                 |     | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
* |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
* |                                 |     | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
* |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
* |                                 |     | II      | 01, 02, ..., 53                   | 5     |
* | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
* |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
* |                                 |     | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
* |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
* |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
* |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 |     | DDDD    | ...                               | 2     |
* | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
* |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
* |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
* |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
* |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
* |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
* |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
* | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
* |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
* |                                 |     | ee      | 02, 03, ..., 01                   |       |
* |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
* |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
* |                                 |     | cc      | 02, 03, ..., 01                   |       |
* |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
* |                                 |     | aaaa    | a.m., p.m.                        | 2     |
* |                                 |     | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
* |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 |     | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
* |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
* |                                 |     | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
* |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
* |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
* |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
* |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
* |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
* |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
* |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
* |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
* |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
* |                                 |     | mm      | 00, 01, ..., 59                   |       |
* | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
* |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
* |                                 |     | ss      | 00, 01, ..., 59                   |       |
* | Seconds timestamp               |  40 | t       | 512969520                         |       |
* |                                 |     | tt      | ...                               | 2     |
* | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
* |                                 |     | SS      | 00, 01, ..., 99                   |       |
* |                                 |     | SSS     | 000, 001, ..., 999                |       |
* |                                 |     | SSSS    | ...                               | 2     |
* | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
* |                                 |     | TT      | ...                               | 2     |
* | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
* |                                 |     | XX      | -0800, +0530, Z                   |       |
* |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
* |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
* |                                 |     | xx      | -0800, +0530, +0000               |       |
* |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
* |                                 |     | PP      | May 29, 1453                      |       |
* |                                 |     | PPP     | May 29th, 1453                    |       |
* |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
* | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
* |                                 |     | pp      | 12:00:00 AM                       |       |
* | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
* |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
* |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
* |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular.
*    In `format` function, they will produce different result:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
*    `parse` will try to match both formatting and stand-alone units interchangeably.
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table:
*    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
*      as wide as the sequence
*    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
*      These variations are marked with "2" in the last column of the table.
*
* 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 4. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
*
*    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
*
*    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
*
*    while `uu` will just assign the year as is:
*
*    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
*
*    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
*    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
*
* 5. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
*    on the given locale.
*
*    using `en-US` locale: `P` => `MM/dd/yyyy`
*    using `en-US` locale: `p` => `hh:mm a`
*    using `pt-BR` locale: `P` => `dd/MM/yyyy`
*    using `pt-BR` locale: `p` => `HH:mm`
*
* Values will be assigned to the date in the descending order of its unit's priority.
* Units of an equal priority overwrite each other in the order of appearance.
*
* If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
* the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
*
* `referenceDate` must be passed for correct work of the function.
* If you're not sure which `referenceDate` to supply, create a new instance of Date:
* `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
* In this case parsing will be done in the context of the current date.
* If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
* then `Invalid Date` will be returned.
*
* The result may vary by locale.
*
* If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
*
* If parsing failed, `Invalid Date` will be returned.
* Invalid Date is a Date, whose time value is NaN.
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param dateStr - The string to parse
* @param formatStr - The string of tokens
* @param referenceDate - defines values missing from the parsed dateString
* @param options - An object with options.
*   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @returns The parsed date
*
* @throws `options.locale` must contain `match` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Parse 11 February 2014 from middle-endian format:
* var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
* //=> Tue Feb 11 2014 00:00:00
*
* @example
* // Parse 28th of February in Esperanto locale in the context of 2010 year:
* import eo from 'date-fns/locale/eo'
* var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
*   locale: eo
* })
* //=> Sun Feb 28 2010 00:00:00
*/
function parse(dateStr, formatStr, referenceDate, options) {
	const invalidDate = () => constructFrom(options?.in || referenceDate, NaN);
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	if (!formatStr) return dateStr ? invalidDate() : toDate(referenceDate, options?.in);
	const subFnOptions = {
		firstWeekContainsDate,
		weekStartsOn,
		locale
	};
	const setters = [new DateTimezoneSetter(options?.in, referenceDate)];
	const tokens = formatStr.match(longFormattingTokensRegExp).map((substring) => {
		const firstCharacter = substring[0];
		if (firstCharacter in longFormatters) {
			const longFormatter = longFormatters[firstCharacter];
			return longFormatter(substring, locale.formatLong);
		}
		return substring;
	}).join("").match(formattingTokensRegExp);
	const usedTokens = [];
	for (let token of tokens) {
		if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) warnOrThrowProtectedError(token, formatStr, dateStr);
		if (!options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, dateStr);
		const firstCharacter = token[0];
		const parser = parsers[firstCharacter];
		if (parser) {
			const { incompatibleTokens } = parser;
			if (Array.isArray(incompatibleTokens)) {
				const incompatibleToken = usedTokens.find((usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
				if (incompatibleToken) throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
			} else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
			usedTokens.push({
				token: firstCharacter,
				fullToken: token
			});
			const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
			if (!parseResult) return invalidDate();
			setters.push(parseResult.setter);
			dateStr = parseResult.rest;
		} else {
			if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
			if (token === "''") token = "'";
			else if (firstCharacter === "'") token = cleanEscapedString(token);
			if (dateStr.indexOf(token) === 0) dateStr = dateStr.slice(token.length);
			else return invalidDate();
		}
	}
	if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) return invalidDate();
	const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map((priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)).map((setterArray) => setterArray[0]);
	let date = toDate(referenceDate, options?.in);
	if (isNaN(+date)) return invalidDate();
	const flags = {};
	for (const setter of uniquePrioritySetters) {
		if (!setter.validate(date, subFnOptions)) return invalidDate();
		const result = setter.set(date, flags, subFnOptions);
		if (Array.isArray(result)) {
			date = result[0];
			Object.assign(flags, result[1]);
		} else date = result;
	}
	return date;
}
function cleanEscapedString(input) {
	return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
var formattingTokensRegExp, longFormattingTokensRegExp, escapedStringRegExp, doubleQuoteRegExp, notWhitespaceRegExp, unescapedLatinCharacterRegExp;
function init_parse() {
	return (init_parse = __esmMin((() => {
		init_en_US();
		init_longFormatters();
		init_protectedTokens();
		init_constructFrom();
		init_getDefaultOptions();
		init_toDate();
		init_Setter();
		init_parsers();
		formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
		longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
		escapedStringRegExp = /^'([^]*?)'?$/;
		doubleQuoteRegExp = /''/g;
		notWhitespaceRegExp = /\S/;
		unescapedLatinCharacterRegExp = /[a-zA-Z]/;
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/parseISO.js
/**
* The {@link parseISO} function options.
*/
/**
* @name parseISO
* @category Common Helpers
* @summary Parse ISO string
*
* @description
* Parse the given string in ISO 8601 format and return an instance of Date.
*
* Function accepts complete ISO 8601 formats as well as partial implementations.
* ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
*
* If the argument isn't a string, the function cannot parse the string or
* the values are invalid, it returns Invalid Date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param argument - The value to convert
* @param options - An object with options
*
* @returns The parsed date in the local time zone
*
* @example
* // Convert string '2014-02-11T11:30:30' to date:
* const result = parseISO('2014-02-11T11:30:30')
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert string '+02014101' to date,
* // if the additional number of digits in the extended year format is 1:
* const result = parseISO('+02014101', { additionalDigits: 1 })
* //=> Fri Apr 11 2014 00:00:00
*/
function parseISO(argument, options) {
	const invalidDate = () => constructFrom(options?.in, NaN);
	const additionalDigits = options?.additionalDigits ?? 2;
	const dateStrings = splitDateString(argument);
	let date;
	if (dateStrings.date) {
		const parseYearResult = parseYear(dateStrings.date, additionalDigits);
		date = parseDate(parseYearResult.restDateString, parseYearResult.year);
	}
	if (!date || isNaN(+date)) return invalidDate();
	const timestamp = +date;
	let time = 0;
	let offset;
	if (dateStrings.time) {
		time = parseTime(dateStrings.time);
		if (isNaN(time)) return invalidDate();
	}
	if (dateStrings.timezone) {
		offset = parseTimezone(dateStrings.timezone);
		if (isNaN(offset)) return invalidDate();
	} else {
		const tmpDate = new Date(timestamp + time);
		const result = toDate(0, options?.in);
		result.setFullYear(tmpDate.getUTCFullYear(), tmpDate.getUTCMonth(), tmpDate.getUTCDate());
		result.setHours(tmpDate.getUTCHours(), tmpDate.getUTCMinutes(), tmpDate.getUTCSeconds(), tmpDate.getUTCMilliseconds());
		return result;
	}
	return toDate(timestamp + time + offset, options?.in);
}
function splitDateString(dateString) {
	const dateStrings = {};
	const array = dateString.split(patterns.dateTimeDelimiter);
	let timeString;
	if (array.length > 2) return dateStrings;
	if (/:/.test(array[0])) timeString = array[0];
	else {
		dateStrings.date = array[0];
		timeString = array[1];
		if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
			dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
			timeString = dateString.substr(dateStrings.date.length, dateString.length);
		}
	}
	if (timeString) {
		const token = patterns.timezone.exec(timeString);
		if (token) {
			dateStrings.time = timeString.replace(token[1], "");
			dateStrings.timezone = token[1];
		} else dateStrings.time = timeString;
	}
	return dateStrings;
}
function parseYear(dateString, additionalDigits) {
	const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
	const captures = dateString.match(regex);
	if (!captures) return {
		year: NaN,
		restDateString: ""
	};
	const year = captures[1] ? parseInt(captures[1]) : null;
	const century = captures[2] ? parseInt(captures[2]) : null;
	return {
		year: century === null ? year : century * 100,
		restDateString: dateString.slice((captures[1] || captures[2]).length)
	};
}
function parseDate(dateString, year) {
	if (year === null) return /* @__PURE__ */ new Date(NaN);
	const captures = dateString.match(dateRegex);
	if (!captures) return /* @__PURE__ */ new Date(NaN);
	const isWeekDate = !!captures[4];
	const dayOfYear = parseDateUnit(captures[1]);
	const month = parseDateUnit(captures[2]) - 1;
	const day = parseDateUnit(captures[3]);
	const week = parseDateUnit(captures[4]);
	const dayOfWeek = parseDateUnit(captures[5]) - 1;
	if (isWeekDate) {
		if (!validateWeekDate(year, week, dayOfWeek)) return /* @__PURE__ */ new Date(NaN);
		return dayOfISOWeekYear(year, week, dayOfWeek);
	} else {
		const date = /* @__PURE__ */ new Date(0);
		if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) return /* @__PURE__ */ new Date(NaN);
		date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
		return date;
	}
}
function parseDateUnit(value) {
	return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
	const captures = timeString.match(timeRegex);
	if (!captures) return NaN;
	const hours = parseTimeUnit(captures[1]);
	const minutes = parseTimeUnit(captures[2]);
	const seconds = parseTimeUnit(captures[3]);
	if (!validateTime(hours, minutes, seconds)) return NaN;
	return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
	return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
	if (timezoneString === "Z") return 0;
	const captures = timezoneString.match(timezoneRegex);
	if (!captures) return 0;
	const sign = captures[1] === "+" ? -1 : 1;
	const hours = parseInt(captures[2]);
	const minutes = captures[3] && parseInt(captures[3]) || 0;
	if (!validateTimezone(hours, minutes)) return NaN;
	return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
	const date = /* @__PURE__ */ new Date(0);
	date.setUTCFullYear(isoWeekYear, 0, 4);
	const fourthOfJanuaryDay = date.getUTCDay() || 7;
	const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
	date.setUTCDate(date.getUTCDate() + diff);
	return date;
}
function isLeapYearIndex(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
	return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
	return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
	return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
	if (hours === 24) return minutes === 0 && seconds === 0;
	return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
	return minutes >= 0 && minutes <= 59;
}
var patterns, dateRegex, timeRegex, timezoneRegex, daysInMonths;
function init_parseISO() {
	return (init_parseISO = __esmMin((() => {
		init_constants$2();
		init_constructFrom();
		init_toDate();
		patterns = {
			dateTimeDelimiter: /[T ]/,
			timeZoneDelimiter: /[Z ]/i,
			timezone: /([Z+-].*)$/
		};
		dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
		timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
		timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
		daysInMonths = [
			31,
			null,
			31,
			30,
			31,
			30,
			31,
			31,
			30,
			31,
			30,
			31
		];
	})))();
}
//#endregion
//#region ../packages/ui/build-module/calendar/utils/root-context.mjs
var RootContext;
function init_root_context() {
	return (init_root_context = __esmMin((() => {
		init_react();
		RootContext = (0, import_react.createContext)({});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/calendar/utils/components.mjs
function Day(props) {
	const { day, modifiers, children, ...tdProps } = props;
	let PreviewDash;
	if (modifiers.preview_start && modifiers.preview_end) PreviewDash = PreviewDashStartAndEnd;
	else if (modifiers.preview_start) PreviewDash = PreviewDashStart;
	else if (modifiers.preview_end) PreviewDash = PreviewDashEnd;
	else if (modifiers.preview) PreviewDash = PreviewDashMiddle;
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("td", {
		...tdProps,
		children: [PreviewDash && /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(PreviewDash, {}), children]
	});
}
function Root({ rootRef, ...props }) {
	const { render, ref, role, defaultAriaLabel } = (0, import_react.useContext)(RootContext);
	const { months, labels } = useDayPicker();
	const hasExplicitLabel = props["aria-label"] !== void 0 || props["aria-labelledby"] !== void 0;
	let ariaLabel = props["aria-label"];
	if (!hasExplicitLabel && defaultAriaLabel && role === "application") {
		const currentMonth = months[0];
		ariaLabel = currentMonth ? sprintf(__("%1$s, %2$s"), defaultAriaLabel, labels.labelGrid(currentMonth.date)) : defaultAriaLabel;
	}
	const mergedRef = useMergeRefs([rootRef ?? null, ref ?? null]);
	return useRender({
		render,
		defaultTagName: "div",
		ref: mergedRef,
		props: {
			...props,
			role,
			"aria-label": ariaLabel
		}
	});
}
function NavButton({ icon, className, children: _children, "aria-label": label, "aria-disabled": ariaDisabled, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(IconButton, {
		...props,
		className,
		label,
		icon,
		variant: "minimal",
		tone: "neutral",
		size: "compact",
		disabled: ariaDisabled === true || ariaDisabled === "true",
		focusableWhenDisabled: true
	});
}
function PreviousMonthButton(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(NavButton, {
		...props,
		icon: chevron_left_default
	});
}
function NextMonthButton(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(NavButton, {
		...props,
		icon: chevron_right_default
	});
}
var import_jsx_runtime$15, PreviewDashStartAndEnd, PreviewDashStart, PreviewDashMiddle, PreviewDashEnd;
function init_components() {
	return (init_components = __esmMin((() => {
		init_useRender();
		init_useDayPicker();
		init_react();
		init_use_merge_refs();
		init_build_module$5();
		init_build_module$2();
		init_icon_button();
		init_root_context();
		import_jsx_runtime$15 = require_jsx_runtime();
		PreviewDashStartAndEnd = () => {
			return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("svg", {
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "3.7677",
				strokeDashoffset: "3.2",
				strokeWidth: "1",
				children: /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("path", { d: "M29.5,0.5 h-27 a2,2 0 0 0 -2,2 v27 a2,2 0 0 0 2,2 h27 a2,2 0 0 0 2,-2 v-27 a2,2 0 0 0 -2,-2" })
			});
		};
		PreviewDashStart = () => {
			return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("svg", {
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "3.84516",
				strokeDashoffset: "1.9226",
				strokeWidth: "1",
				children: /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("path", { d: "M32,0.5 h-29.5 a2,2 0 0 0 -2,2 v27 a2,2 0 0 0 2,2 h30" })
			});
		};
		PreviewDashMiddle = () => {
			return /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("svg", {
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "3.9 4",
				strokeDashoffset: "2",
				strokeWidth: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("line", {
					x1: "0",
					y1: "0.5",
					x2: "100",
					y2: "0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("line", {
					x1: "0",
					y1: "31.5",
					x2: "100",
					y2: "31.5"
				})]
			});
		};
		PreviewDashEnd = () => {
			return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("svg", {
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "3.84516",
				strokeDashoffset: "1.9226",
				strokeWidth: "1",
				children: /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("path", { d: "M0,0.5 h29.5 a2,2 0 0 1 2,2 v27 a2,2 0 0 1 -2,2 h-29.5" })
			});
		};
	})))();
}
//#endregion
//#region ../packages/ui/build-module/calendar/utils/constants.mjs
function getRuntime$3() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$3(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$3(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$3}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$3) === hash) return true;
	return false;
}
function injectStyle$3(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$3();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$3(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$3, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$3(targetDocument) {
	const runtime = getRuntime$3();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$3(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$3(hash, css) {
	const runtime = getRuntime$3();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$3(targetDocument, hash, css);
}
var STYLE_HASH_ATTRIBUTE$3, style_default$1, resets_default, focus_module_default, CLASSNAMES, MODIFIER_CLASSNAMES, COMMON_PROPS;
function init_constants$1() {
	return (init_constants$1 = __esmMin((() => {
		init_clsx();
		init_components();
		STYLE_HASH_ATTRIBUTE$3 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$3("9d2212290a", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._2c7ac60ba97b3411__root{--wp-ui-calendar-cell-size:var(--wpds-dimension-size-md,32px);background-color:var(--wpds-color-background-surface-neutral-strong,#fff);color:var(--wpds-color-foreground-content-neutral,#1e1e1e);display:inline-block;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,\"Segoe UI\",\"Roboto\",\"Oxygen-Sans\",\"Ubuntu\",\"Cantarell\",\"Helvetica Neue\",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);font-weight:var(--wpds-typography-font-weight-default,400);position:relative;z-index:0}._172c492625235710__day{color:var(--wpds-color-foreground-interactive-neutral,#1e1e1e);padding:0;position:relative;&:has(._1b64226e315835f8__day-button:disabled){color:var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d)}&:has(._1b64226e315835f8__day-button:focus-visible),&:has(._1b64226e315835f8__day-button:hover:not(:disabled)){color:var(--wpds-color-foreground-interactive-neutral-active,#1e1e1e)}}._1b64226e315835f8__day-button{align-items:center;background:none;border:none;border-radius:var(--wpds-border-radius-sm,2px);color:inherit;cursor:var(--wpds-cursor-control,pointer);display:flex;font:inherit;font-variant-numeric:tabular-nums;height:var(--wp-ui-calendar-cell-size);justify-content:center;margin:0;padding:0;position:relative;width:var(--wp-ui-calendar-cell-size);&:before{background-color:var(--wpds-color-background-interactive-neutral-weak,#0000);border:none;border-radius:var(--wpds-border-radius-sm,2px);z-index:-1}&:after,&:before{content:\"\";inset:0;position:absolute}&:after{pointer-events:none;z-index:1}&:disabled{cursor:revert;&:before{background-color:var(--wpds-color-background-interactive-neutral-weak-disabled,#0000)}@media (forced-colors:active){text-decoration:line-through}}&:focus-visible:before,&:hover:not(:disabled):before{background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed)}}._66b9a8120581fd4b__caption-label{align-items:center;border:0;display:inline-flex;position:relative;text-transform:capitalize;white-space:nowrap;z-index:1}._2c7ac60ba97b3411__root[dir=rtl] ._395a75bb1930f57e__nav-button{transform:rotate(180deg);transform-origin:50%}._337e5337d49b7f3d__month-caption{align-content:center;display:flex;height:var(--wp-ui-calendar-cell-size);justify-content:center;margin-bottom:var(--wpds-dimension-gap-md,12px)}._110e46230c68e498__months{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-lg,16px);justify-content:center;max-width:fit-content;position:relative}._92915239fedb1fea__month-grid{border-collapse:separate;border-spacing:0 var(--wpds-dimension-gap-xs,4px)}._66b1d4a7b488b496__nav{align-items:center;display:flex;height:var(--wp-ui-calendar-cell-size);inset-block-start:0;inset-inline-end:0;inset-inline-start:0;justify-content:space-between;position:absolute}._7207199709ca5776__weekday{color:var(--wpds-color-foreground-content-neutral-weak,#707070);font-weight:var(--wpds-typography-font-weight-default,400);height:var(--wp-ui-calendar-cell-size);padding:0;text-align:center;text-transform:uppercase;width:var(--wp-ui-calendar-cell-size)}._058175f0f9c495e0__today:after{border:2px solid;border-radius:50%;content:\"\";height:0;inset-block-start:2px;inset-inline-end:2px;position:absolute;width:0;z-index:1}.acb642920fb0bef5__selected:not(._165d91a726feca9c__range-middle){&:has(._1b64226e315835f8__day-button,._1b64226e315835f8__day-button:hover:not(:disabled)){color:var(--wpds-color-foreground-interactive-neutral-strong,#f0f0f0)}&:has(._1b64226e315835f8__day-button:disabled){color:var(--wpds-color-foreground-interactive-neutral-strong-disabled,#8d8d8d)}._1b64226e315835f8__day-button{&:before{background-color:var(--wpds-color-background-interactive-neutral-strong,#2d2d2d);border:1px solid transparent}&:disabled:before{background-color:var(--wpds-color-background-interactive-neutral-strong-disabled,#e6e6e6)}&:hover:not(:disabled):before{background-color:var(--wpds-color-background-interactive-neutral-strong-active,#1e1e1e)}}}.c259c5c255fda10f__outside{color:var(--wpds-color-foreground-interactive-neutral-weak,#707070)}._4d8957a0ca4ec8f0__hidden{visibility:hidden}.f2523033db055ffe__range-start:not(.c04a453de7b11520__range-end) ._1b64226e315835f8__day-button{&,&:before{border-end-end-radius:0;border-start-end-radius:0}}._165d91a726feca9c__range-middle ._1b64226e315835f8__day-button{&:before{background-color:var(--wpds-color-background-interactive-neutral-weak-active,#ededed);border-color:transparent;border-radius:0;border-style:solid;border-width:1px 0}}.c04a453de7b11520__range-end:not(.f2523033db055ffe__range-start) ._1b64226e315835f8__day-button{&,&:before{border-end-start-radius:0;border-start-start-radius:0}}._81b244e7c541d95e__preview svg{color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);inset:0;pointer-events:none;position:absolute;@media (forced-colors:active){color:inherit}}._81b244e7c541d95e__preview.acb642920fb0bef5__selected:not(._165d91a726feca9c__range-middle) svg{display:none}._2c7ac60ba97b3411__root[dir=rtl] ._81b244e7c541d95e__preview svg{transform:scaleX(-1)}._81b244e7c541d95e__preview._165d91a726feca9c__range-middle ._1b64226e315835f8__day-button:before{border:none}@keyframes _255a1a462a5377db__slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes c21e45f616d6db39__slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes aed80001de9ae226__slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes _7d4779a7f29408f2__slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes _83ba6321b055d687__fade-in{0%{opacity:0}to{opacity:1}}@keyframes _96fbead71248d210__fade-out{0%{opacity:1}to{opacity:0}}._1563bccb09e39c30__caption-after-enter,._60ac2a7fc3208801__weeks-before-exit,._735dacf9052adecd__caption-before-exit,._7f73a6ab85101202__weeks-after-exit,._805d698b56ba4a29__weeks-after-enter,._9721326fbc23a5fb__weeks-before-enter,.c7a3082839155d29__caption-after-exit,.cb8a5ec82ad0885e__caption-before-enter{animation-duration:0s;animation-fill-mode:forwards;animation-timing-function:var(--wpds-motion-easing-balanced,cubic-bezier(.4,0,.2,1));@media not (prefers-reduced-motion){animation-duration:var(--wpds-motion-duration-lg,.3s)}}._2c7ac60ba97b3411__root[dir=rtl] ._805d698b56ba4a29__weeks-after-enter,._9721326fbc23a5fb__weeks-before-enter{animation-name:_255a1a462a5377db__slide-in-left}._2c7ac60ba97b3411__root[dir=rtl] ._7f73a6ab85101202__weeks-after-exit,._60ac2a7fc3208801__weeks-before-exit{animation-name:aed80001de9ae226__slide-out-left}._2c7ac60ba97b3411__root[dir=rtl] ._9721326fbc23a5fb__weeks-before-enter,._805d698b56ba4a29__weeks-after-enter{animation-name:c21e45f616d6db39__slide-in-right}._2c7ac60ba97b3411__root[dir=rtl] ._60ac2a7fc3208801__weeks-before-exit,._7f73a6ab85101202__weeks-after-exit{animation-name:_7d4779a7f29408f2__slide-out-right}._1563bccb09e39c30__caption-after-enter,.cb8a5ec82ad0885e__caption-before-enter{animation-name:_83ba6321b055d687__fade-in}._735dacf9052adecd__caption-before-exit,.c7a3082839155d29__caption-after-exit{animation-name:_96fbead71248d210__fade-out}}}");
		style_default$1 = {
			"root": "_2c7ac60ba97b3411__root",
			"day": "_172c492625235710__day",
			"day-button": "_1b64226e315835f8__day-button",
			"caption-label": "_66b9a8120581fd4b__caption-label",
			"nav-button": "_395a75bb1930f57e__nav-button",
			"month-caption": "_337e5337d49b7f3d__month-caption",
			"months": "_110e46230c68e498__months",
			"month-grid": "_92915239fedb1fea__month-grid",
			"nav": "_66b1d4a7b488b496__nav",
			"weekday": "_7207199709ca5776__weekday",
			"today": "_058175f0f9c495e0__today",
			"selected": "acb642920fb0bef5__selected",
			"range-middle": "_165d91a726feca9c__range-middle",
			"outside": "c259c5c255fda10f__outside",
			"hidden": "_4d8957a0ca4ec8f0__hidden",
			"range-start": "f2523033db055ffe__range-start",
			"range-end": "c04a453de7b11520__range-end",
			"preview": "_81b244e7c541d95e__preview",
			"weeks-before-enter": "_9721326fbc23a5fb__weeks-before-enter",
			"weeks-before-exit": "_60ac2a7fc3208801__weeks-before-exit",
			"weeks-after-enter": "_805d698b56ba4a29__weeks-after-enter",
			"weeks-after-exit": "_7f73a6ab85101202__weeks-after-exit",
			"caption-after-enter": "_1563bccb09e39c30__caption-after-enter",
			"caption-after-exit": "c7a3082839155d29__caption-after-exit",
			"caption-before-enter": "cb8a5ec82ad0885e__caption-before-enter",
			"caption-before-exit": "_735dacf9052adecd__caption-before-exit",
			"slide-in-left": "_255a1a462a5377db__slide-in-left",
			"slide-out-left": "aed80001de9ae226__slide-out-left",
			"slide-in-right": "c21e45f616d6db39__slide-in-right",
			"slide-out-right": "_7d4779a7f29408f2__slide-out-right",
			"fade-in": "_83ba6321b055d687__fade-in",
			"fade-out": "_96fbead71248d210__fade-out"
		};
		if (typeof process === "undefined" || false) registerStyle$3("10f3806643", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}}");
		resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
		if (typeof process === "undefined" || false) registerStyle$3("7c3267f794", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer utilities{.af79fb116edb0dd7__outset-ring--focus:focus,.dfcfdc28396e5d98__outset-ring--focus-visible:focus-visible,.e5cd9ee879f6403a__outset-ring--focus-within:focus-within{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within,.abc777e9713fa711__outset-ring--focus-except-active:focus{outline:none}._3c9f5ee9fc9c136d__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.abc777e9713fa711__outset-ring--focus-except-active:focus:not(:active){--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--focus-color,var(--wpds-color-stroke-focus,var(--wp-admin-theme-color,#3858e9)));outline-offset:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px))}}}");
		focus_module_default = {
			"outset-ring--focus": "af79fb116edb0dd7__outset-ring--focus",
			"outset-ring--focus-visible": "dfcfdc28396e5d98__outset-ring--focus-visible",
			"outset-ring--focus-within": "e5cd9ee879f6403a__outset-ring--focus-within",
			"outset-ring--focus-except-active": "abc777e9713fa711__outset-ring--focus-except-active",
			"outset-ring--focus-within-except-active": "_3c9f5ee9fc9c136d__outset-ring--focus-within-except-active"
		};
		if (typeof process === "undefined" || false) registerStyle$3("abb19c3171", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}[role=treeitem] span._400bf7ee0c6061a9__span[aria-hidden]{display:var(--_gcd-span-display,inline);font-family:var(--_gcd-span-font-family,inherit);font-size:var(--_gcd-span-font-size,inherit);line-height:var(--_gcd-span-line-height,1);pointer-events:var(--_gcd-span-pointer-events,auto);position:var(--_gcd-span-position,static)}");
		CLASSNAMES = {
			root: clsx(style_default$1.root, resets_default["box-sizing"]),
			day: style_default$1.day,
			day_button: clsx(style_default$1["day-button"], {
				"button": "_6defc79820e382c6__button",
				"input": "d2cff2e5dea83bd1__input",
				"textarea": "_547d86373d02e108__textarea",
				"div": "_8c15fd0ed9f28ba4__div",
				"p": "_43cec3e1eec1066d__p",
				"heading": "e97669c6d9a38497__heading",
				"a": "_2c0831b0499dbd6e__a",
				"ol": "c59a0ebebd71fa4a__ol",
				"li": "_46b5cb0c8e24e8c9__li",
				"span": "_400bf7ee0c6061a9__span"
			}.button, focus_module_default["outset-ring--focus-visible"]),
			outside: style_default$1.outside,
			caption_label: style_default$1["caption-label"],
			button_next: style_default$1["nav-button"],
			button_previous: style_default$1["nav-button"],
			nav: style_default$1.nav,
			month_caption: style_default$1["month-caption"],
			months: style_default$1.months,
			month_grid: style_default$1["month-grid"],
			weekday: style_default$1.weekday,
			today: style_default$1.today,
			selected: style_default$1.selected,
			disabled: void 0,
			hidden: style_default$1.hidden,
			range_start: style_default$1["range-start"],
			range_end: style_default$1["range-end"],
			range_middle: style_default$1["range-middle"],
			weeks_before_enter: style_default$1["weeks-before-enter"],
			weeks_before_exit: style_default$1["weeks-before-exit"],
			weeks_after_enter: style_default$1["weeks-after-enter"],
			weeks_after_exit: style_default$1["weeks-after-exit"],
			caption_after_enter: style_default$1["caption-after-enter"],
			caption_after_exit: style_default$1["caption-after-exit"],
			caption_before_enter: style_default$1["caption-before-enter"],
			caption_before_exit: style_default$1["caption-before-exit"]
		};
		MODIFIER_CLASSNAMES = { preview: style_default$1.preview };
		COMMON_PROPS = {
			animate: true,
			showOutsideDays: false,
			showWeekNumber: false,
			hideWeekdays: false,
			captionLayout: "label",
			fixedWeeks: false,
			hideNavigation: false,
			classNames: CLASSNAMES,
			components: {
				Day,
				Root,
				PreviousMonthButton,
				NextMonthButton
			}
		};
	})))();
}
//#endregion
//#region ../packages/ui/build-module/calendar/utils/misc.mjs
function clampNumberOfMonths(numberOfMonths) {
	return Math.min(3, Math.max(1, numberOfMonths));
}
//#endregion
//#region ../packages/ui/build-module/calendar/utils/use-controlled-value.mjs
function useControlledValue({ defaultValue, onChange, value: valueProp }) {
	const hasValue = typeof valueProp !== "undefined";
	const [state, setState] = (0, import_react.useState)(hasValue ? valueProp : defaultValue);
	const value = hasValue ? valueProp : state;
	const uncontrolledSetValue = (0, import_react.useCallback)((nextValue, ...args) => {
		setState(nextValue);
		onChange?.(nextValue, ...args);
	}, [onChange]);
	let setValue;
	if (hasValue && typeof onChange === "function") setValue = onChange;
	else if (!hasValue && typeof onChange === "function") setValue = uncontrolledSetValue;
	else setValue = setState;
	return [value, setValue];
}
function init_use_controlled_value() {
	return (init_use_controlled_value = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/calendar/utils/use-localization-props.mjs
function isLocaleRTL(locale) {
	const direction = (locale.getTextInfo?.() ?? locale.textInfo)?.direction;
	if (direction) return direction === "rtl";
	return [
		"ar",
		"he",
		"fa",
		"ur",
		"ps",
		"syr",
		"dv",
		"ku",
		"ckb",
		"ug",
		"yi"
	].includes(locale.language);
}
function getSupportedLocaleCode(localeCode) {
	if (!localeCode) return;
	let supportedLocaleCode;
	try {
		supportedLocaleCode = Intl.DateTimeFormat.supportedLocalesOf([localeCode])[0];
	} catch {}
	return supportedLocaleCode;
}
function getWeekStartsOn(locale) {
	const firstDay = (locale.getWeekInfo?.() ?? locale.weekInfo)?.firstDay;
	if (firstDay === void 0 || firstDay < 1 || firstDay > 7) return;
	return firstDay % 7;
}
var useLocalizationProps;
function init_use_localization_props() {
	return (init_use_localization_props = __esmMin((() => {
		init_build_module$2();
		init_react();
		init_en_US();
		useLocalizationProps = ({ locale, timeZone, mode }) => {
			return (0, import_react.useMemo)(() => {
				const isLocaleString = typeof locale === "string";
				const dateFnsLocale = isLocaleString || locale === void 0 ? enUS : locale;
				const supportedLocaleCode = getSupportedLocaleCode(isLocaleString ? locale : locale?.code);
				const localeCode = supportedLocaleCode ?? "en-US";
				const intlLocale = new Intl.Locale(localeCode);
				const isRightToLeft = supportedLocaleCode !== void 0 ? isLocaleRTL(intlLocale) : isRTL();
				const weekStartsOn = isLocaleString || supportedLocaleCode !== void 0 ? getWeekStartsOn(intlLocale) : void 0;
				const monthNameFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					year: "numeric",
					month: "long",
					timeZone
				});
				const weekdayNarrowFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					weekday: "narrow",
					timeZone
				});
				const weekdayLongFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					weekday: "long",
					timeZone
				});
				const fullDateFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
					timeZone
				});
				const dayNumberFormatter = new Intl.DateTimeFormat(localeCode, {
					calendar: "gregory",
					day: "numeric",
					timeZone
				});
				return {
					"aria-label": mode === "single" ? __("Date calendar") : __("Date range calendar"),
					labels: {
						/** The label for the navigation toolbar. */
						labelNav: () => __("Navigation bar"),
						/**
						* The label for the month grid.
						* @param date
						*/
						labelGrid: monthNameFormatter.format,
						/**
						* The label for the gridcell, when the calendar is not interactive.
						* @param date
						* @param modifiers
						*/
						labelGridcell: (date, modifiers) => {
							const formattedDate = fullDateFormatter.format(date);
							let label = formattedDate;
							if (modifiers?.today) label = sprintf(__("Today, %s"), formattedDate);
							return label;
						},
						/** The label for the "next month" button. */
						labelNext: () => __("Next month"),
						/** The label for the "previous month" button. */
						labelPrevious: () => __("Previous month"),
						/**
						* The label for the day button.
						* @param date
						* @param modifiers
						*/
						labelDayButton: (date, modifiers) => {
							const formattedDate = fullDateFormatter.format(date);
							let label = formattedDate;
							if (modifiers?.today && modifiers?.selected) return sprintf(__("Today, %s, selected"), formattedDate);
							if (modifiers?.today) label = sprintf(__("Today, %s"), formattedDate);
							if (modifiers?.selected) label = sprintf(__("%s, selected"), formattedDate);
							return label;
						},
						/**
						* The label for the weekday.
						* @param date
						*/
						labelWeekday: weekdayLongFormatter.format
					},
					locale: dateFnsLocale,
					lang: localeCode,
					dir: isRightToLeft ? "rtl" : "ltr",
					...weekStartsOn === void 0 ? {} : { weekStartsOn },
					formatters: {
						formatDay: dayNumberFormatter.format,
						formatWeekdayName: weekdayNarrowFormatter.format,
						formatCaption: monthNameFormatter.format
					},
					timeZone
				};
			}, [
				locale,
				timeZone,
				mode
			]);
		};
	})))();
}
//#endregion
//#region ../packages/ui/build-module/calendar/utils/use-preserve-day-focus.mjs
function usePreserveDayFocus(forwardedRef, month) {
	const rootRef = (0, import_react.useRef)(null);
	const hadDayFocusRef = (0, import_react.useRef)(false);
	const mergedRef = useMergeRefs([rootRef, forwardedRef]);
	const monthIndex = month ? month.getFullYear() * 12 + month.getMonth() : void 0;
	const onDayFocus = (0, import_react.useCallback)(() => {
		hadDayFocusRef.current = true;
	}, []);
	const onDayBlur = (0, import_react.useCallback)(() => {
		hadDayFocusRef.current = false;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hadDayFocusRef.current) return;
		const root = rootRef.current;
		if (!root) return;
		const { activeElement, body } = root.ownerDocument;
		if (activeElement !== body) {
			const grid = activeElement?.closest("[role=\"grid\"]");
			hadDayFocusRef.current = !!grid && root.contains(grid);
			return;
		}
		hadDayFocusRef.current = false;
		const focusTarget = root.querySelector("[role=\"grid\"] button[tabindex=\"0\"]:not(:disabled)");
		const enabledControl = root.querySelector("button:not(:disabled):not([aria-disabled=\"true\"])");
		const focusableControl = root.querySelector("button:not(:disabled)");
		(focusTarget ?? enabledControl ?? focusableControl)?.focus();
	}, [monthIndex]);
	return {
		ref: mergedRef,
		onDayFocus,
		onDayBlur
	};
}
function init_use_preserve_day_focus() {
	return (init_use_preserve_day_focus = __esmMin((() => {
		init_use_merge_refs();
		init_react();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/calendar/calendar.mjs
var import_jsx_runtime$14, Calendar;
function init_calendar() {
	return (init_calendar = __esmMin((() => {
		init_DayPicker();
		init_react();
		init_constants$1();
		init_use_controlled_value();
		init_use_localization_props();
		init_use_preserve_day_focus();
		init_root_context();
		import_jsx_runtime$14 = require_jsx_runtime();
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
			const [selected, setSelected] = useControlledValue({
				defaultValue,
				value: valueProp,
				onChange: (0, import_react.useCallback)((selected2, triggerDate, modifiers, e) => {
					onValueChange?.(selected2 ?? null, triggerDate, modifiers, e);
				}, [onValueChange])
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
			return /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)(RootContext.Provider, {
				value: rootContextValue,
				children: /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)(DayPicker, {
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
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/calendar/range-calendar.mjs
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
var import_jsx_runtime$13, RangeCalendar;
function init_range_calendar() {
	return (init_range_calendar = __esmMin((() => {
		init_differenceInCalendarDays();
		init_DayPicker(), init_rangeContainsModifiers();
		init_react();
		init_constants$1();
		init_use_controlled_value();
		init_use_localization_props();
		init_use_preserve_day_focus();
		init_root_context();
		import_jsx_runtime$13 = require_jsx_runtime();
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
			const [selected, setSelected] = useControlledValue({
				defaultValue,
				value: valueProp,
				onChange: (0, import_react.useCallback)((selected2, triggerDate, modifiers2, e) => {
					onValueChange?.(selected2 ?? null, triggerDate, modifiers2, e);
				}, [onValueChange])
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
			return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(RootContext.Provider, {
				value: rootContextValue,
				children: /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(DayPicker, {
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
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/primitives/textarea/textarea.mjs
function getRuntime$2() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$2(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$2(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$2}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$2) === hash) return true;
	return false;
}
function injectStyle$2(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$2();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$2(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$2, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$2(targetDocument) {
	const runtime = getRuntime$2();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$2(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$2(hash, css) {
	const runtime = getRuntime$2();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$2(targetDocument, hash, css);
}
var import_jsx_runtime$12, STYLE_HASH_ATTRIBUTE$2, style_default, global_css_defense_default, wrappedRender, Textarea;
function init_textarea() {
	return (init_textarea = __esmMin((() => {
		init_mergeProps();
		init_clsx();
		init_react();
		init_input();
		import_jsx_runtime$12 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$2 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$2("1540cbc709", "@layer wp-ui{@layer utilities, components, compositions, overrides;@layer components{._1e441c22c9dc5d28__wrapper{--wp-ui-textarea-min-height:var(--wpds-dimension-size-lg,40px)}._414844876c32ecee__textarea{min-height:calc(var(--wp-ui-textarea-min-height) - 2px);resize:block}}@layer compositions{._1e441c22c9dc5d28__wrapper{--wp-ui-input-padding-block:9.9px;height:auto;line-height:1.4}}}");
		style_default = {
			"wrapper": "_1e441c22c9dc5d28__wrapper",
			"textarea": "_414844876c32ecee__textarea"
		};
		if (typeof process === "undefined" || false) registerStyle$2("abb19c3171", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-foreground-interactive-neutral-weak,#707070))}&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,transparent);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 transparent);color:var(--_gcd-input-color,var(--wpds-color-foreground-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,transparent);border-color:var(--_gcd-input-border-color-disabled,transparent);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-foreground-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid transparent)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-foreground-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-emphasis,600));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid transparent);transition:var(--_gcd-a-transition,none)}.c59a0ebebd71fa4a__ol{list-style:var(--_gcd-ol-list-style,none);margin:var(--_gcd-ol-margin,0);padding-block:var(--_gcd-ol-padding-block,0);padding-inline:var(--_gcd-ol-padding-inline,0)}._46b5cb0c8e24e8c9__li{margin:var(--_gcd-li-margin,0)}[role=treeitem] span._400bf7ee0c6061a9__span[aria-hidden]{display:var(--_gcd-span-display,inline);font-family:var(--_gcd-span-font-family,inherit);font-size:var(--_gcd-span-font-size,inherit);line-height:var(--_gcd-span-line-height,1);pointer-events:var(--_gcd-span-pointer-events,auto);position:var(--_gcd-span-position,static)}");
		global_css_defense_default = {
			"button": "_6defc79820e382c6__button",
			"input": "d2cff2e5dea83bd1__input",
			"textarea": "_547d86373d02e108__textarea",
			"div": "_8c15fd0ed9f28ba4__div",
			"p": "_43cec3e1eec1066d__p",
			"heading": "e97669c6d9a38497__heading",
			"a": "_2c0831b0499dbd6e__a",
			"ol": "c59a0ebebd71fa4a__ol",
			"li": "_46b5cb0c8e24e8c9__li",
			"span": "_400bf7ee0c6061a9__span"
		};
		wrappedRender = (render, restProps) => {
			return function textareaRender(props) {
				return typeof render === "function" ? render(mergeProps(props, restProps)) : (0, import_react.cloneElement)(render, mergeProps(props, restProps));
			};
		};
		Textarea = (0, import_react.forwardRef)(function UnforwardedTextarea({ className, defaultValue, disabled, onValueChange, render, rows = 4, style, value, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(Input, {
				className: clsx(style_default.wrapper, className),
				style,
				render: wrappedRender(render || ((props) => /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)("textarea", { ...props })), {
					className: clsx(global_css_defense_default.textarea, style_default.textarea),
					ref,
					rows,
					...restProps
				}),
				value,
				defaultValue,
				onValueChange,
				disabled
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/textarea-control/textarea-control.mjs
var import_jsx_runtime$11, TextareaControl;
function init_textarea_control() {
	return (init_textarea_control = __esmMin((() => {
		init_react();
		init_textarea(), init_root(), init_label(), init_description(), init_details();
		import_jsx_runtime$11 = require_jsx_runtime();
		TextareaControl = (0, import_react.forwardRef)(function UnforwardedTextareaControl({ className, label, description, details, hideLabelFromVision, ...restProps }, ref) {
			return /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)(Root$1, {
				className,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Label, {
						hideFromVision: hideLabelFromVision,
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Textarea, {
						ref,
						...restProps
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Description, { children: description }),
					details && /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Details, { children: details })
				]
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/with-validation/validated-input-control/validated-input-control.mjs
var import_jsx_runtime$10, ValidatedInputControl;
function init_validated_input_control() {
	return (init_validated_input_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_control_with_error();
		init_input_control();
		import_jsx_runtime$10 = require_jsx_runtime();
		ValidatedInputControl = (0, import_react.forwardRef)(function UnforwardedValidatedInputControl({ required, markWhenOptional, customValidity, ...restProps }, forwardedRef) {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(ControlWithError, {
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_runtime$10.jsx)(InputControl, {
					ref: mergedRefs,
					...restProps
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/form/with-validation/validated-textarea-control/validated-textarea-control.mjs
var import_jsx_runtime$9, ValidatedTextareaControl;
function init_validated_textarea_control() {
	return (init_validated_textarea_control = __esmMin((() => {
		init_react();
		init_use_merge_refs();
		init_control_with_error();
		init_textarea_control();
		import_jsx_runtime$9 = require_jsx_runtime();
		ValidatedTextareaControl = (0, import_react.forwardRef)(function UnforwardedValidatedTextareaControl({ required, markWhenOptional, customValidity, ...restProps }, forwardedRef) {
			const validityTargetRef = (0, import_react.useRef)(null);
			const mergedRefs = useMergeRefs([forwardedRef, validityTargetRef]);
			return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(ControlWithError, {
				required,
				markWhenOptional,
				customValidity,
				getValidityTarget: () => validityTargetRef.current,
				children: /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(TextareaControl, {
					ref: mergedRefs,
					...restProps
				})
			});
		});
	})))();
}
//#endregion
//#region ../packages/components/build-module/color-indicator/index.mjs
function UnforwardedColorIndicator(props, forwardedRef) {
	const { className, colorValue, ...additionalProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)("span", {
		className: clsx("component-color-indicator", className),
		style: { background: colorValue },
		ref: forwardedRef,
		...additionalProps
	});
}
var import_jsx_runtime$8, ColorIndicator, color_indicator_default;
function init_color_indicator() {
	return (init_color_indicator = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime$8 = require_jsx_runtime();
		ColorIndicator = (0, import_react.forwardRef)(UnforwardedColorIndicator);
		ColorIndicator.displayName = "ColorIndicator";
		color_indicator_default = ColorIndicator;
	})))();
}
//#endregion
//#region ../packages/components/build-module/checkbox-control/index.mjs
function CheckboxControl(props) {
	const { __nextHasNoMarginBottom: _, label, className, heading, checked, indeterminate, help, id: idProp, onChange, onClick, ...additionalProps } = props;
	if (heading) deprecated("`heading` prop in `CheckboxControl`", {
		alternative: "a separate element to implement a heading",
		since: "5.8"
	});
	const [showCheckedIcon, setShowCheckedIcon] = (0, import_react.useState)(false);
	const [showIndeterminateIcon, setShowIndeterminateIcon] = (0, import_react.useState)(false);
	const ref = useRefEffect((node) => {
		if (!node) return;
		node.indeterminate = !!indeterminate;
		setShowCheckedIcon(node.matches(":checked"));
		setShowIndeterminateIcon(node.matches(":indeterminate"));
	}, [checked, indeterminate]);
	const id = use_instance_id_default(CheckboxControl, "inspector-checkbox-control", idProp);
	const onChangeValue = (event) => onChange(event.target.checked);
	return /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(base_control_default, {
		label: heading,
		id,
		help: help && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("span", {
			className: "components-checkbox-control__help",
			children: help
		}),
		className: clsx("components-checkbox-control", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)(component_default$4, {
			spacing: 0,
			justify: "start",
			alignment: "top",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$7.jsxs)("span", {
				className: "components-checkbox-control__input-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("input", {
						ref,
						id,
						className: "components-checkbox-control__input",
						type: "checkbox",
						value: "1",
						onChange: onChangeValue,
						checked,
						"aria-describedby": !!help ? id + "__help" : void 0,
						onClick: (event) => {
							event.currentTarget.focus();
							onClick?.(event);
						},
						...additionalProps
					}),
					showIndeterminateIcon ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(icon_default, {
						icon: reset_default,
						className: "components-checkbox-control__indeterminate",
						role: "presentation",
						size: 16,
						viewBox: "4 4 16 16"
					}) : null,
					showCheckedIcon ? /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)(icon_default, {
						icon: check_default,
						className: "components-checkbox-control__checked",
						role: "presentation",
						size: 16,
						viewBox: "4 4 16 16"
					}) : null
				]
			}), label && /* @__PURE__ */ (0, import_jsx_runtime$7.jsx)("label", {
				className: "components-checkbox-control__label",
				htmlFor: id,
				children: label
			})]
		})
	});
}
var import_jsx_runtime$7, checkbox_control_default;
function init_checkbox_control() {
	return (init_checkbox_control = __esmMin((() => {
		init_clsx();
		init_react();
		init_use_instance_id(), init_use_ref_effect();
		init_build_module();
		init_build_module$5();
		init_base_control();
		init_component$4();
		import_jsx_runtime$7 = require_jsx_runtime();
		checkbox_control_default = CheckboxControl;
	})))();
}
//#endregion
//#region ../packages/components/build-module/form-token-field/token-input.mjs
function UnForwardedTokenInput(props, ref) {
	const { value, isExpanded, instanceId, selectedSuggestionIndex, className, onChange, onFocus, onBlur, "aria-describedby": ariaDescribedBy, ...restProps } = props;
	const [hasFocus, setHasFocus] = (0, import_react.useState)(false);
	const size = value ? value.length + 1 : 0;
	const onChangeHandler = (event) => {
		if (onChange) onChange({ value: event.target.value });
	};
	const onFocusHandler = (e) => {
		setHasFocus(true);
		onFocus?.(e);
	};
	const onBlurHandler = (e) => {
		setHasFocus(false);
		onBlur?.(e);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$6.jsx)("input", {
		ref,
		id: `components-form-token-input-${instanceId}`,
		type: "text",
		...restProps,
		value: value || "",
		onChange: onChangeHandler,
		onFocus: onFocusHandler,
		onBlur: onBlurHandler,
		size,
		className: clsx(className, "components-form-token-field__input"),
		autoComplete: "off",
		role: "combobox",
		"aria-expanded": isExpanded,
		"aria-autocomplete": "list",
		"aria-owns": isExpanded ? `components-form-token-suggestions-${instanceId}` : void 0,
		"aria-activedescendant": hasFocus && selectedSuggestionIndex !== -1 && isExpanded ? `components-form-token-suggestions-${instanceId}-${selectedSuggestionIndex}` : void 0,
		"aria-describedby": ariaDescribedBy
	});
}
var import_jsx_runtime$6, TokenInput, token_input_default;
function init_token_input() {
	return (init_token_input = __esmMin((() => {
		init_clsx();
		init_react();
		import_jsx_runtime$6 = require_jsx_runtime();
		TokenInput = (0, import_react.forwardRef)(UnForwardedTokenInput);
		TokenInput.displayName = "TokenInput";
		token_input_default = TokenInput;
	})))();
}
//#endregion
//#region ../packages/components/build-module/form-token-field/suggestions-list.mjs
function SuggestionsList({ selectedIndex, scrollIntoView, match, onHover, onSelect, suggestions = [], displayTransform, instanceId, __experimentalRenderItem }) {
	const listRef = useRefEffect((listNode) => {
		if (selectedIndex > -1 && scrollIntoView && listNode.children[selectedIndex]) listNode.children[selectedIndex].scrollIntoView({
			behavior: "instant",
			block: "nearest",
			inline: "nearest"
		});
	}, [selectedIndex, scrollIntoView]);
	const handleHover = (suggestion) => {
		return () => {
			onHover?.(suggestion);
		};
	};
	const handleClick = (suggestion) => {
		return () => {
			onSelect?.(suggestion);
		};
	};
	const computeSuggestionMatch = (suggestion) => {
		const matchText = displayTransform(match).normalize("NFKC").toLocaleLowerCase();
		if (matchText.length === 0) return null;
		const transformedSuggestion = displayTransform(suggestion);
		const indexOfMatch = transformedSuggestion.normalize("NFKC").toLocaleLowerCase().indexOf(matchText);
		return {
			suggestionBeforeMatch: transformedSuggestion.substring(0, indexOfMatch),
			suggestionMatch: transformedSuggestion.substring(indexOfMatch, indexOfMatch + matchText.length),
			suggestionAfterMatch: transformedSuggestion.substring(indexOfMatch + matchText.length)
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("ul", {
		ref: listRef,
		className: "components-form-token-field__suggestions-list",
		id: `components-form-token-suggestions-${instanceId}`,
		role: "listbox",
		children: [suggestions.map((suggestion, index) => {
			const matchText = computeSuggestionMatch(suggestion);
			const isSelected = index === selectedIndex;
			const isDisabled = typeof suggestion === "object" && suggestion?.disabled;
			const key = typeof suggestion === "object" && "value" in suggestion ? suggestion?.value : displayTransform(suggestion);
			const className = clsx("components-form-token-field__suggestion", { "is-selected": isSelected });
			let output;
			if (typeof __experimentalRenderItem === "function") output = __experimentalRenderItem({ item: suggestion });
			else if (matchText) output = /* @__PURE__ */ (0, import_jsx_runtime$5.jsxs)("span", {
				"aria-label": displayTransform(suggestion),
				children: [
					matchText.suggestionBeforeMatch,
					/* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("strong", {
						className: "components-form-token-field__suggestion-match",
						children: matchText.suggestionMatch
					}),
					matchText.suggestionAfterMatch
				]
			});
			else output = displayTransform(suggestion);
			return /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("li", {
				id: `components-form-token-suggestions-${instanceId}-${index}`,
				role: "option",
				className,
				onMouseDown: handleMouseDown,
				onClick: handleClick(suggestion),
				onMouseEnter: handleHover(suggestion),
				"aria-selected": index === selectedIndex,
				"aria-disabled": isDisabled,
				children: output
			}, key);
		}), suggestions.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime$5.jsx)("li", {
			className: "components-form-token-field__suggestion is-empty",
			children: __("No items found")
		})]
	});
}
var import_jsx_runtime$5, handleMouseDown, suggestions_list_default;
function init_suggestions_list() {
	return (init_suggestions_list = __esmMin((() => {
		init_clsx();
		init_use_ref_effect();
		init_build_module$2();
		import_jsx_runtime$5 = require_jsx_runtime();
		handleMouseDown = (e) => {
			e.preventDefault();
		};
		suggestions_list_default = SuggestionsList;
	})))();
}
//#endregion
//#region ../packages/components/build-module/higher-order/with-focus-outside/index.mjs
var import_jsx_runtime$4, with_focus_outside_default;
function init_with_focus_outside() {
	return (init_with_focus_outside = __esmMin((() => {
		init_react();
		init_create_higher_order_component(), init_use_focus_outside();
		import_jsx_runtime$4 = require_jsx_runtime();
		with_focus_outside_default = createHigherOrderComponent((WrappedComponent) => function WithFocusOutside(props) {
			const [handleFocusOutside, setHandleFocusOutside] = (0, import_react.useState)(void 0);
			const bindFocusOutsideHandler = (0, import_react.useCallback)((node) => setHandleFocusOutside(() => node?.handleFocusOutside ? node.handleFocusOutside.bind(node) : void 0), []);
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)("div", {
				...useFocusOutside(handleFocusOutside),
				children: /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(WrappedComponent, {
					ref: bindFocusOutsideHandler,
					...props
				})
			});
		}, "withFocusOutside");
	})))();
}
//#endregion
//#region ../packages/components/build-module/combobox-control/index.mjs
function getRuntime$1() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument$1(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash$1(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE$1}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE$1) === hash) return true;
	return false;
}
function injectStyle$1(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime$1();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash$1(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE$1, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument$1(targetDocument) {
	const runtime = getRuntime$1();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle$1(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle$1(hash, css) {
	const runtime = getRuntime$1();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle$1(targetDocument, hash, css);
}
function ComboboxControl(props) {
	const { value: valueProp, label, options, onChange: onChangeProp, onFilterValueChange = noop$1, hideLabelFromVision, help, allowReset = true, className, isLoading = false, messages = { selected: __("Item selected.") }, __experimentalRenderItem, expandOnFocus = true, placeholder } = props;
	const [value, setValue] = useControlledValue$1({
		value: valueProp,
		onChange: onChangeProp
	});
	const currentOption = options.find((option) => option.value === value);
	const currentLabel = currentOption?.label ?? "";
	const instanceId = use_instance_id_default(ComboboxControl, "combobox-control");
	const [selectedSuggestion, setSelectedSuggestion] = (0, import_react.useState)(currentOption || null);
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const [inputHasFocus, setInputHasFocus] = (0, import_react.useState)(false);
	const [inputValue, setInputValue] = (0, import_react.useState)("");
	const inputContainer = (0, import_react.useRef)(null);
	const matchingSuggestions = (0, import_react.useMemo)(() => {
		const startsWithMatch = [];
		const containsMatch = [];
		const match = normalizeTextString(inputValue);
		options.forEach((option) => {
			const index = normalizeTextString(option.label).indexOf(match);
			if (index === 0) startsWithMatch.push(option);
			else if (index > 0) containsMatch.push(option);
		});
		return startsWithMatch.concat(containsMatch);
	}, [inputValue, options]);
	const onSuggestionSelected = (newSelectedSuggestion) => {
		if (newSelectedSuggestion.disabled) return;
		setValue(newSelectedSuggestion.value);
		speak(messages.selected, "assertive");
		setSelectedSuggestion(newSelectedSuggestion);
		setInputValue("");
		setIsExpanded(false);
	};
	const handleArrowNavigation = (offset = 1) => {
		let nextIndex = getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions) + offset;
		if (nextIndex < 0) nextIndex = matchingSuggestions.length - 1;
		else if (nextIndex >= matchingSuggestions.length) nextIndex = 0;
		setSelectedSuggestion(matchingSuggestions[nextIndex]);
		setIsExpanded(true);
	};
	const onKeyDown = withIgnoreIMEEvents((event) => {
		let preventDefault = false;
		if (event.defaultPrevented) return;
		switch (event.code) {
			case "Enter":
				if (selectedSuggestion) {
					onSuggestionSelected(selectedSuggestion);
					preventDefault = true;
				}
				break;
			case "ArrowUp":
				handleArrowNavigation(-1);
				preventDefault = true;
				break;
			case "ArrowDown":
				handleArrowNavigation(1);
				preventDefault = true;
				break;
			case "Escape":
				setIsExpanded(false);
				setSelectedSuggestion(null);
				preventDefault = true;
		}
		if (preventDefault) event.preventDefault();
	});
	const onBlur = () => {
		setInputHasFocus(false);
	};
	const onFocus = () => {
		setInputHasFocus(true);
		if (expandOnFocus) setIsExpanded(true);
		onFilterValueChange("");
		setInputValue("");
	};
	const onClick = () => {
		setIsExpanded(true);
	};
	const onFocusOutside = () => {
		setIsExpanded(false);
	};
	const onInputChange = (event) => {
		const text = event.value;
		setInputValue(text);
		onFilterValueChange(text);
		if (inputHasFocus) setIsExpanded(true);
	};
	const handleOnReset = () => {
		setValue(null);
		inputContainer.current?.focus();
	};
	const handleResetStopPropagation = (event) => {
		event.stopPropagation();
	};
	(0, import_react.useEffect)(() => {
		const hasMatchingSuggestions = matchingSuggestions.length > 0;
		const hasSelectedMatchingSuggestions = getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions) > 0;
		if (hasMatchingSuggestions && !hasSelectedMatchingSuggestions) setSelectedSuggestion(matchingSuggestions[0]);
	}, [matchingSuggestions, selectedSuggestion]);
	(0, import_react.useEffect)(() => {
		const hasMatchingSuggestions = matchingSuggestions.length > 0;
		if (isExpanded) {
			const message = hasMatchingSuggestions ? sprintf(_n("%d result found, use up and down arrow keys to navigate.", "%d results found, use up and down arrow keys to navigate.", matchingSuggestions.length), matchingSuggestions.length) : __("No results.");
			speak(message, "polite");
		}
	}, [matchingSuggestions, isExpanded]);
	return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(DetectOutside, {
		onFocusOutside,
		children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(base_control_default, {
			className: clsx(className, "components-combobox-control"),
			label,
			id: `components-form-token-input-${instanceId}`,
			hideLabelFromVision,
			help,
			children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)("div", {
				className: "components-combobox-control__suggestions-container",
				tabIndex: -1,
				onKeyDown,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$3.jsxs)(component_default$2, {
					className: style_module_default$1["input-wrapper"],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(component_default$3, { children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(token_input_default, {
							className: "components-combobox-control__input",
							instanceId,
							ref: inputContainer,
							placeholder,
							value: isExpanded ? inputValue : currentLabel,
							onFocus,
							onBlur,
							onClick,
							isExpanded,
							selectedSuggestionIndex: getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions),
							onChange: onInputChange,
							"aria-describedby": help ? `components-form-token-input-${instanceId}__help` : void 0
						}) }),
						isLoading && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(spinner_default, {}),
						allowReset && Boolean(value) && !isExpanded && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(button_default, {
							size: "small",
							icon: close_small_default,
							onClick: handleOnReset,
							onKeyDown: handleResetStopPropagation,
							label: __("Reset")
						})
					]
				}), isExpanded && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(suggestions_list_default, {
					instanceId,
					match: {
						label: inputValue,
						value: ""
					},
					displayTransform: (suggestion) => suggestion.label,
					suggestions: matchingSuggestions,
					selectedIndex: getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions),
					onHover: setSelectedSuggestion,
					onSelect: onSuggestionSelected,
					scrollIntoView: true,
					__experimentalRenderItem
				})]
			})
		})
	});
}
var import_jsx_runtime$3, STYLE_HASH_ATTRIBUTE$1, style_module_default$1, noop$1, DetectOutside, getIndexOfMatchingSuggestion, combobox_control_default;
function init_combobox_control() {
	return (init_combobox_control = __esmMin((() => {
		init_clsx();
		init_build_module$2();
		init_react();
		init_use_instance_id();
		init_build_module$4();
		init_build_module$5();
		init_build_module$3();
		init_token_input();
		init_suggestions_list();
		init_base_control();
		init_button();
		init_component$2(), init_component$3();
		init_with_focus_outside();
		init_use_controlled_value$1();
		init_strings();
		init_spinner();
		import_jsx_runtime$3 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE$1 = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle$1("5e90aa62ab", "._52e80c14d3dae324__input-wrapper{height:38px;padding-inline:8px}");
		style_module_default$1 = { "input-wrapper": "_52e80c14d3dae324__input-wrapper" };
		noop$1 = () => {};
		DetectOutside = with_focus_outside_default(class DetectOutsideComponent extends import_react.Component {
			handleFocusOutside(event) {
				this.props.onFocusOutside(event);
			}
			render() {
				return this.props.children;
			}
		});
		getIndexOfMatchingSuggestion = (selectedSuggestion, matchingSuggestions) => selectedSuggestion === null ? -1 : matchingSuggestions.indexOf(selectedSuggestion);
		combobox_control_default = ComboboxControl;
	})))();
}
//#endregion
//#region ../packages/components/build-module/form-token-field/token.mjs
function Token({ value, status, title, displayTransform, isBorderless = false, disabled = false, onClickRemove = noop, onMouseEnter, onMouseLeave, messages, termPosition, termsCount }) {
	const instanceId = use_instance_id_default(Token);
	const tokenClasses = clsx("components-form-token-field__token", {
		"is-error": "error" === status,
		"is-success": "success" === status,
		"is-validating": "validating" === status,
		"is-borderless": isBorderless,
		"is-disabled": disabled
	});
	const onClick = () => onClickRemove({ value });
	const transformedValue = displayTransform(value);
	const termPositionAndCount = sprintf(__("%1$s (%2$d of %3$d)"), transformedValue, termPosition, termsCount);
	return /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("span", {
		className: tokenClasses,
		onMouseEnter,
		onMouseLeave,
		title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("span", {
			className: "components-form-token-field__token-text",
			id: `components-form-token-field__token-text-${instanceId}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(component_default, {
				as: "span",
				children: termPositionAndCount
			}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("span", {
				"aria-hidden": "true",
				children: transformedValue
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(button_default, {
			className: "components-form-token-field__remove-token",
			size: "small",
			icon: close_small_default,
			onClick: !disabled ? onClick : void 0,
			disabled,
			label: messages.remove,
			"aria-describedby": `components-form-token-field__token-text-${instanceId}`
		})]
	});
}
var import_jsx_runtime$2, noop;
function init_token() {
	return (init_token = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_build_module$2();
		init_build_module$5();
		init_button();
		init_component();
		import_jsx_runtime$2 = require_jsx_runtime();
		noop = () => {};
	})))();
}
//#endregion
//#region ../packages/components/build-module/form-token-field/index.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
function FormTokenField(props) {
	const { autoCapitalize, autoComplete, maxLength, placeholder, label = __("Add item"), className, suggestions = [], maxSuggestions = 100, value = [], displayTransform = identity, saveTransform = (token) => token.trim(), onChange = () => {}, onInputChange = () => {}, onFocus = void 0, isBorderless = false, disabled = false, tokenizeOnSpace = false, messages = {
		added: __("Item added."),
		removed: __("Item removed."),
		remove: __("Remove item"),
		__experimentalInvalid: __("Invalid item")
	}, __experimentalRenderItem, __experimentalExpandOnFocus = false, __experimentalValidateInput = () => true, __experimentalShowHowTo, __experimentalAutoSelectFirstMatch = false, tokenizeOnBlur = false, help } = props;
	const defaultHelp = tokenizeOnSpace ? __("Separate with commas, spaces, or the Enter key.") : __("Separate with commas or the Enter key.");
	let computedHelp = help !== void 0 ? help : defaultHelp;
	if (typeof __experimentalShowHowTo === "boolean") {
		deprecated("`__experimentalShowHowTo` prop in wp.components.FormTokenField", {
			since: "7.1",
			alternative: "`help` prop",
			hint: "The `help` prop now defaults to the previous how-to text. Pass an empty string to hide it."
		});
		if (__experimentalShowHowTo === false && help === void 0) computedHelp = "";
	}
	const instanceId = use_instance_id_default(FormTokenField);
	const [incompleteTokenValue, setIncompleteTokenValue] = (0, import_react.useState)("");
	const [inputOffsetFromEnd, setInputOffsetFromEnd] = (0, import_react.useState)(0);
	const [isActive, setIsActive] = (0, import_react.useState)(false);
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, import_react.useState)(-1);
	const [selectedSuggestionScroll, setSelectedSuggestionScroll] = (0, import_react.useState)(false);
	const prevSuggestions = usePrevious(suggestions);
	const prevValue = usePrevious(value);
	const input = (0, import_react.useRef)(null);
	const tokensAndInput = (0, import_react.useRef)(null);
	const debouncedSpeak = useDebounce(speak, 500);
	(0, import_react.useEffect)(() => {
		if (isActive && !hasFocus()) focus();
	}, [isActive]);
	(0, import_react.useEffect)(() => {
		const suggestionsDidUpdate = !isShallowEqual(suggestions, prevSuggestions || []);
		if (suggestionsDidUpdate || value !== prevValue) updateSuggestions(suggestionsDidUpdate);
	}, [
		suggestions,
		prevSuggestions,
		value,
		prevValue
	]);
	(0, import_react.useEffect)(() => {
		updateSuggestions();
	}, [incompleteTokenValue]);
	(0, import_react.useEffect)(() => {
		updateSuggestions();
	}, [__experimentalAutoSelectFirstMatch]);
	if (disabled && isActive) {
		setIsActive(false);
		setIncompleteTokenValue("");
	}
	function focus() {
		input.current?.focus();
	}
	function hasFocus() {
		return input.current === input.current?.ownerDocument.activeElement;
	}
	function onFocusHandler(event) {
		if (hasFocus() || event.target === tokensAndInput.current) {
			setIsActive(true);
			setIsExpanded(__experimentalExpandOnFocus || isExpanded);
		} else setIsActive(false);
		if ("function" === typeof onFocus) onFocus(event);
	}
	function onBlur(event) {
		if (inputHasValidValue() && __experimentalValidateInput(incompleteTokenValue)) {
			setIsActive(false);
			if (tokenizeOnBlur && inputHasValidValue()) addNewToken(incompleteTokenValue);
		} else {
			setIncompleteTokenValue("");
			setInputOffsetFromEnd(0);
			setIsActive(false);
			if (__experimentalExpandOnFocus) {
				const hasFocusWithin = event.relatedTarget === tokensAndInput.current;
				setIsExpanded(hasFocusWithin);
			} else setIsExpanded(false);
			setSelectedSuggestionIndex(-1);
			setSelectedSuggestionScroll(false);
		}
	}
	function onKeyDown(event) {
		let preventDefault = false;
		if (event.defaultPrevented) return;
		switch (event.key) {
			case "Backspace":
				preventDefault = handleDeleteKey(deleteTokenBeforeInput);
				break;
			case "Enter":
				preventDefault = addCurrentToken();
				break;
			case "ArrowLeft":
				preventDefault = handleLeftArrowKey();
				break;
			case "ArrowUp":
				preventDefault = handleUpArrowKey();
				break;
			case "ArrowRight":
				preventDefault = handleRightArrowKey();
				break;
			case "ArrowDown":
				preventDefault = handleDownArrowKey();
				break;
			case "Delete":
				preventDefault = handleDeleteKey(deleteTokenAfterInput);
				break;
			case "Space":
				if (tokenizeOnSpace) preventDefault = addCurrentToken({ preventDefaultOnFailedValidation: false });
				break;
			case "Escape":
				preventDefault = handleEscapeKey(event);
				break;
			case "Tab": preventDefault = handleTabKey(event);
		}
		if (preventDefault) event.preventDefault();
	}
	function onKeyPress(event) {
		let preventDefault = false;
		switch (event.key) {
			case ",": preventDefault = handleCommaKey();
		}
		if (preventDefault) event.preventDefault();
	}
	function onContainerTouched(event) {
		if (event.target === tokensAndInput.current && isActive) event.preventDefault();
	}
	function onTokenClickRemove(event) {
		deleteToken(event.value);
		focus();
	}
	function onSuggestionHovered(suggestion) {
		const index = getMatchingSuggestions().indexOf(suggestion);
		if (index >= 0) {
			setSelectedSuggestionIndex(index);
			setSelectedSuggestionScroll(false);
		}
	}
	function onSuggestionSelected(suggestion) {
		addNewToken(suggestion);
	}
	function onInputChangeHandler(event) {
		const text = event.value;
		const separator = tokenizeOnSpace ? /[ ,\t]+/ : /[,\t]+/;
		const items = text.split(separator);
		const tokenValue = items[items.length - 1] || "";
		if (items.length > 1) {
			const tokensToProcess = items.slice(0, -1);
			const willFailValidation = (segment) => {
				const transformed = saveTransform(segment);
				return !!transformed && !valueContainsToken(transformed) && !__experimentalValidateInput(transformed);
			};
			const hasFailures = tokensToProcess.some(willFailValidation);
			const addedTokens = addNewTokens(hasFailures ? items : tokensToProcess);
			if (hasFailures) {
				const rejected = items.filter((token) => {
					const transformed = saveTransform(token);
					if (!transformed) return false;
					if (addedTokens.has(transformed)) return false;
					if (valueContainsToken(transformed)) return false;
					return !__experimentalValidateInput(transformed);
				});
				const usedSeparators = text.match(/[ ,\t]/g);
				const separatorChar = usedSeparators?.[usedSeparators.length - 1] ?? (tokenizeOnSpace ? " " : ",");
				const trailing = tokenValue === "" ? separatorChar : "";
				const remaining = rejected.join(separatorChar) + trailing;
				setIncompleteTokenValue(remaining);
				onInputChange(remaining);
				return;
			}
		}
		setIncompleteTokenValue(tokenValue);
		onInputChange(tokenValue);
	}
	function handleDeleteKey(_deleteToken) {
		let preventDefault = false;
		if (hasFocus() && isInputEmpty()) {
			_deleteToken();
			preventDefault = true;
		}
		return preventDefault;
	}
	function handleLeftArrowKey() {
		let preventDefault = false;
		if (isInputEmpty()) {
			moveInputBeforePreviousToken();
			preventDefault = true;
		}
		return preventDefault;
	}
	function handleRightArrowKey() {
		let preventDefault = false;
		if (isInputEmpty()) {
			moveInputAfterNextToken();
			preventDefault = true;
		}
		return preventDefault;
	}
	function handleUpArrowKey() {
		setSelectedSuggestionIndex((index) => {
			return (index <= 0 ? getMatchingSuggestions(incompleteTokenValue, suggestions, value, maxSuggestions, saveTransform).length : index) - 1;
		});
		setSelectedSuggestionScroll(true);
		return true;
	}
	function handleDownArrowKey() {
		setSelectedSuggestionIndex((index) => {
			return (index + 1) % getMatchingSuggestions(incompleteTokenValue, suggestions, value, maxSuggestions, saveTransform).length;
		});
		setSelectedSuggestionScroll(true);
		return true;
	}
	function collapseSuggestionsList(event) {
		if (event.target instanceof HTMLInputElement) {
			setIncompleteTokenValue(event.target.value);
			setIsExpanded(false);
			setSelectedSuggestionIndex(-1);
			setSelectedSuggestionScroll(false);
		}
	}
	function handleEscapeKey(event) {
		collapseSuggestionsList(event);
		return true;
	}
	function handleTabKey(event) {
		collapseSuggestionsList(event);
		return false;
	}
	function handleCommaKey() {
		if (inputHasValidValue()) addNewToken(incompleteTokenValue);
		return true;
	}
	function moveInputToIndex(index) {
		setInputOffsetFromEnd(value.length - Math.max(index, -1) - 1);
	}
	function moveInputBeforePreviousToken() {
		setInputOffsetFromEnd((prevInputOffsetFromEnd) => {
			return Math.min(prevInputOffsetFromEnd + 1, value.length);
		});
	}
	function moveInputAfterNextToken() {
		setInputOffsetFromEnd((prevInputOffsetFromEnd) => {
			return Math.max(prevInputOffsetFromEnd - 1, 0);
		});
	}
	function deleteTokenBeforeInput() {
		const index = getIndexOfInput() - 1;
		if (index > -1) deleteToken(value[index]);
	}
	function deleteTokenAfterInput() {
		const index = getIndexOfInput();
		if (index < value.length) {
			deleteToken(value[index]);
			moveInputToIndex(index);
		}
	}
	function addCurrentToken({ preventDefaultOnFailedValidation = true } = {}) {
		let preventDefault = false;
		const selectedSuggestion = getSelectedSuggestion();
		if (selectedSuggestion) {
			addNewToken(selectedSuggestion);
			preventDefault = true;
		} else if (inputHasValidValue()) preventDefault = addNewToken(incompleteTokenValue) || preventDefaultOnFailedValidation;
		return preventDefault;
	}
	function addNewTokens(tokens) {
		const tokensToAdd = [...new Set(tokens.map(saveTransform).filter(Boolean).filter((token) => !valueContainsToken(token)).filter((token) => __experimentalValidateInput(token)))];
		if (tokensToAdd.length > 0) {
			const newValue = [...value];
			newValue.splice(getIndexOfInput(), 0, ...tokensToAdd);
			onChange(newValue);
		}
		return new Set(tokensToAdd);
	}
	function addNewToken(token) {
		if (!__experimentalValidateInput(token)) {
			speak(messages.__experimentalInvalid, "assertive");
			return false;
		}
		addNewTokens([token]);
		speak(messages.added, "assertive");
		setIncompleteTokenValue("");
		setSelectedSuggestionIndex(-1);
		setSelectedSuggestionScroll(false);
		setIsExpanded(!__experimentalExpandOnFocus);
		if (isActive && !tokenizeOnBlur) focus();
		return true;
	}
	function deleteToken(token) {
		const newTokens = value.filter((item) => {
			return getTokenValue(item) !== getTokenValue(token);
		});
		onChange(newTokens);
		speak(messages.removed, "assertive");
	}
	function getTokenValue(token) {
		if ("object" === typeof token) return token.value;
		return token;
	}
	function getMatchingSuggestions(searchValue = incompleteTokenValue, _suggestions = suggestions, _value = value, _maxSuggestions = maxSuggestions, _saveTransform = saveTransform) {
		let match = _saveTransform(searchValue);
		const startsWithMatch = [];
		const containsMatch = [];
		const normalizedValue = _value.map((item) => {
			if (typeof item === "string") return item;
			return item.value;
		});
		if (match.length === 0) _suggestions = _suggestions.filter((suggestion) => !normalizedValue.includes(suggestion));
		else {
			match = match.normalize("NFKC").toLocaleLowerCase();
			_suggestions.forEach((suggestion) => {
				const index = suggestion.normalize("NFKC").toLocaleLowerCase().indexOf(match);
				if (normalizedValue.indexOf(suggestion) === -1) {
					if (index === 0) startsWithMatch.push(suggestion);
					else if (index > 0) containsMatch.push(suggestion);
				}
			});
			_suggestions = startsWithMatch.concat(containsMatch);
		}
		return _suggestions.slice(0, _maxSuggestions);
	}
	function getSelectedSuggestion() {
		if (selectedSuggestionIndex !== -1) return getMatchingSuggestions()[selectedSuggestionIndex];
	}
	function valueContainsToken(token) {
		return value.some((item) => {
			return getTokenValue(token) === getTokenValue(item);
		});
	}
	function getIndexOfInput() {
		return value.length - inputOffsetFromEnd;
	}
	function isInputEmpty() {
		return incompleteTokenValue.length === 0;
	}
	function inputHasValidValue() {
		return saveTransform(incompleteTokenValue).length > 0;
	}
	function updateSuggestions(resetSelectedSuggestion = true) {
		const inputHasMinimumChars = incompleteTokenValue.trim().length > 1;
		const matchingSuggestions2 = getMatchingSuggestions(incompleteTokenValue);
		const hasMatchingSuggestions = matchingSuggestions2.length > 0;
		const shouldExpandIfFocuses = hasFocus() && __experimentalExpandOnFocus;
		setIsExpanded(shouldExpandIfFocuses || inputHasMinimumChars && hasMatchingSuggestions);
		if (resetSelectedSuggestion) {
			if (__experimentalAutoSelectFirstMatch && inputHasMinimumChars && hasMatchingSuggestions) {
				setSelectedSuggestionIndex(0);
				setSelectedSuggestionScroll(true);
			} else {
				setSelectedSuggestionIndex(-1);
				setSelectedSuggestionScroll(false);
			}
		}
		if (inputHasMinimumChars) {
			const message = hasMatchingSuggestions ? sprintf(_n("%d result found, use up and down arrow keys to navigate.", "%d results found, use up and down arrow keys to navigate.", matchingSuggestions2.length), matchingSuggestions2.length) : __("No results.");
			debouncedSpeak(message, "assertive");
		}
	}
	function renderTokensAndInput() {
		const components = value.map(renderToken);
		components.splice(getIndexOfInput(), 0, renderInput());
		return components;
	}
	function renderToken(token, index, tokens) {
		const _value = getTokenValue(token);
		const status = typeof token !== "string" ? token.status : void 0;
		const termPosition = index + 1;
		const termsCount = tokens.length;
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$1, { children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Token, {
			value: _value,
			status,
			title: typeof token !== "string" ? token.title : void 0,
			displayTransform,
			onClickRemove: onTokenClickRemove,
			isBorderless: typeof token !== "string" && token.isBorderless || isBorderless,
			onMouseEnter: typeof token !== "string" ? token.onMouseEnter : void 0,
			onMouseLeave: typeof token !== "string" ? token.onMouseLeave : void 0,
			disabled: "error" !== status && disabled,
			messages,
			termsCount,
			termPosition
		}) }, "token-" + _value);
	}
	function renderInput() {
		const describedById = computedHelp ? `components-form-token-input-${instanceId}__help` : void 0;
		const inputProps = {
			instanceId,
			autoCapitalize,
			autoComplete,
			placeholder: value.length === 0 ? placeholder : "",
			disabled,
			value: incompleteTokenValue,
			onBlur,
			isExpanded,
			selectedSuggestionIndex,
			"aria-describedby": describedById
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(token_input_default, {
			...inputProps,
			onChange: !(maxLength && value.length >= maxLength) ? onInputChangeHandler : void 0,
			ref: input
		}, "input");
	}
	const classes = clsx(className, "components-form-token-field__input-container", {
		"is-active": isActive,
		"is-disabled": disabled
	});
	let tokenFieldProps = {
		className: "components-form-token-field",
		tabIndex: -1
	};
	const matchingSuggestions = getMatchingSuggestions();
	if (!disabled) tokenFieldProps = Object.assign({}, tokenFieldProps, {
		onKeyDown: withIgnoreIMEEvents(onKeyDown),
		onKeyPress,
		onFocus: onFocusHandler
	});
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		...tokenFieldProps,
		children: [
			label && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(StyledLabel, {
				htmlFor: `components-form-token-input-${instanceId}`,
				className: "components-form-token-field__label",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				ref: tokensAndInput,
				className: classes,
				tabIndex: -1,
				onMouseDown: onContainerTouched,
				onTouchStart: onContainerTouched,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(component_default$2, {
					className: style_module_default["tokens-and-input"],
					justify: "flex-start",
					align: "center",
					gap: 1,
					wrap: true,
					children: renderTokensAndInput()
				}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(suggestions_list_default, {
					instanceId,
					match: saveTransform(incompleteTokenValue),
					displayTransform,
					suggestions: matchingSuggestions,
					selectedIndex: selectedSuggestionIndex,
					scrollIntoView: selectedSuggestionScroll,
					onHover: onSuggestionHovered,
					onSelect: onSuggestionSelected,
					__experimentalRenderItem
				})]
			}),
			computedHelp && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(StyledHelp, {
				id: `components-form-token-input-${instanceId}__help`,
				className: "components-form-token-field__help",
				children: computedHelp
			})
		]
	});
}
var import_jsx_runtime$1, STYLE_HASH_ATTRIBUTE, style_module_default, identity, form_token_field_default;
function init_form_token_field() {
	return (init_form_token_field = __esmMin((() => {
		init_clsx();
		init_react();
		init_build_module$2();
		init_use_debounce(), init_use_instance_id(), init_use_previous();
		init_build_module$4();
		init_build_module$1();
		init_build_module();
		init_build_module$3();
		init_token();
		init_token_input();
		init_suggestions_list();
		init_component$2(), init_component$1();
		init_base_control_styles();
		import_jsx_runtime$1 = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("f9ae5dc19e", ".df878b202c3b3cb7__tokens-and-input{box-sizing:border-box;padding:7px}.df878b202c3b3cb7__tokens-and-input *,.df878b202c3b3cb7__tokens-and-input :after,.df878b202c3b3cb7__tokens-and-input :before{box-sizing:inherit}");
		style_module_default = { "tokens-and-input": "df878b202c3b3cb7__tokens-and-input" };
		identity = (value) => value;
		form_token_field_default = FormTokenField;
	})))();
}
//#endregion
//#region ../packages/components/build-module/radio-control/index.mjs
function generateOptionDescriptionId(radioGroupId, index) {
	return `${radioGroupId}-${index}-option-description`;
}
function generateOptionId(radioGroupId, index) {
	return `${radioGroupId}-${index}`;
}
function generateHelpId(radioGroupId) {
	return `${radioGroupId}__help`;
}
function RadioControl(props) {
	const { label, className, selected, help, onChange, onClick, hideLabelFromVision, disabled, options = [], id: preferredId, ...additionalProps } = props;
	const id = use_instance_id_default(RadioControl, "inspector-radio-control", preferredId);
	const onChangeValue = (event) => onChange(event.target.value);
	if (!options?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		id,
		role: "radiogroup",
		className: clsx(className, "components-radio-control"),
		disabled,
		"aria-describedby": !!help ? generateHelpId(id) : void 0,
		children: [
			hideLabelFromVision ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default, {
				as: "legend",
				children: label
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(base_control_default.VisualLabel, {
				as: "legend",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(component_default$5, {
				spacing: 3,
				className: clsx("components-radio-control__group-wrapper", { "has-help": !!help }),
				children: options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "components-radio-control__option",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: generateOptionId(id, index),
							className: "components-radio-control__input",
							type: "radio",
							name: id,
							value: option.value,
							disabled: option.disabled,
							onChange: onChangeValue,
							checked: option.value === selected,
							"aria-describedby": !!option.description ? generateOptionDescriptionId(id, index) : void 0,
							onClick: (event) => {
								event.currentTarget.focus();
								onClick?.(event);
							},
							...additionalProps
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "components-radio-control__label",
							htmlFor: generateOptionId(id, index),
							children: option.label
						}),
						!!option.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledHelp, {
							id: generateOptionDescriptionId(id, index),
							className: "components-radio-control__option-description",
							children: option.description
						}) : null
					]
				}, generateOptionId(id, index)))
			}),
			!!help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledHelp, {
				id: generateHelpId(id),
				className: "components-base-control__help",
				children: help
			})
		]
	});
}
var import_jsx_runtime, radio_control_default;
function init_radio_control() {
	return (init_radio_control = __esmMin((() => {
		init_clsx();
		init_use_instance_id();
		init_base_control();
		init_component$5();
		init_base_control_styles();
		init_component();
		import_jsx_runtime = require_jsx_runtime();
		radio_control_default = RadioControl;
	})))();
}
//#endregion
export { areIntervalsOverlapping as C, parse as S, Calendar as _, combobox_control_default as a, parseISO as b, init_checkbox_control as c, ValidatedTextareaControl as d, init_validated_textarea_control as f, init_range_calendar as g, RangeCalendar as h, init_form_token_field as i, color_indicator_default as l, init_validated_input_control as m, radio_control_default as n, init_combobox_control as o, ValidatedInputControl as p, form_token_field_default as r, checkbox_control_default as s, init_radio_control as t, init_color_indicator as u, init_calendar as v, init_areIntervalsOverlapping as w, init_parse as x, init_parseISO as y };
