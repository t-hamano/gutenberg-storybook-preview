import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { i as init_constructFrom, n as toDate, r as constructFrom, t as init_toDate } from "./toDate-Ty5HTtpY.js";
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/addDays.js
/**
* The {@link addDays} function options.
*/
/**
* @name addDays
* @category Day Helpers
* @summary Add the specified number of days to the given date.
*
* @description
* Add the specified number of days to the given date.
*
* **You don't need date-fns\***:
*
* Temporal has a built-in `add` method on all its classes:
*
* - [`Temporal.Instant.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add)
* - [`Temporal.PlainDate.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add)
* - [`Temporal.PlainDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add)
* - [`Temporal.PlainTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add)
* - [`Temporal.PlainYearMonth.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add)
* - [`Temporal.ZonedDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add)
*
* \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of days to be added.
* @param options - An object with options
*
* @returns The new date with the days added
*
* @example
* // Add 10 days to 1 September 2014:
* const result = addDays(new Date(2014, 8, 1), 10)
* //=> Thu Sep 11 2014 00:00:00
*
* @example
* // Using Temporal:
* // Add 10 days to 1 September 2014:
* Temporal.PlainDate.from("2014-09-01").add({ days: 10 }).toString();
* //=> "2014-09-11"
*/
function addDays(date, amount, options) {
	const _date = toDate(date, options?.in);
	if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
	if (!amount) return _date;
	_date.setDate(_date.getDate() + amount);
	return _date;
}
function init_addDays() {
	return (init_addDays = __esmMin((() => {
		init_constructFrom();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/addMonths.js
/**
* The {@link addMonths} function options.
*/
/**
* @name addMonths
* @category Month Helpers
* @summary Add the specified number of months to the given date.
*
* @description
* Add the specified number of months to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of months to be added.
* @param options - The options object
*
* @returns The new date with the months added
*
* @example
* // Add 5 months to 1 September 2014:
* const result = addMonths(new Date(2014, 8, 1), 5)
* //=> Sun Feb 01 2015 00:00:00
*
* // Add one month to 30 January 2023:
* const result = addMonths(new Date(2023, 0, 30), 1)
* //=> Tue Feb 28 2023 00:00:00
*/
function addMonths(date, amount, options) {
	const _date = toDate(date, options?.in);
	if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
	if (!amount) return _date;
	const dayOfMonth = _date.getDate();
	const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
	endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
	if (dayOfMonth >= endOfDesiredMonth.getDate()) return endOfDesiredMonth;
	else {
		_date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
		return _date;
	}
}
function init_addMonths() {
	return (init_addMonths = __esmMin((() => {
		init_constructFrom();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/_lib/defaultOptions.js
function getDefaultOptions() {
	return defaultOptions;
}
var defaultOptions;
function init_defaultOptions() {
	return (init_defaultOptions = __esmMin((() => {
		defaultOptions = {};
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/startOfWeek.js
/**
* The {@link startOfWeek} function options.
*/
/**
* @name startOfWeek
* @category Week Helpers
* @summary Return the start of a week for the given date.
*
* @description
* Return the start of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week
*
* @example
* // The start of a week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfWeek(date, options) {
	const defaultOptions = getDefaultOptions();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date, options?.in);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	_date.setDate(_date.getDate() - diff);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
function init_startOfWeek() {
	return (init_startOfWeek = __esmMin((() => {
		init_defaultOptions();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
	const normalize = constructFrom.bind(null, context || dates.find((date) => typeof date === "object"));
	return dates.map(normalize);
}
function init_normalizeDates() {
	return (init_normalizeDates = __esmMin((() => {
		init_constructFrom();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/startOfDay.js
/**
* The {@link startOfDay} function options.
*/
/**
* @name startOfDay
* @category Day Helpers
* @summary Return the start of a day for the given date.
*
* @description
* Return the start of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a day
*
* @example
* // The start of a day for 2 September 2014 11:55:00:
* const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 00:00:00
*/
function startOfDay(date, options) {
	const _date = toDate(date, options?.in);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
function init_startOfDay() {
	return (init_startOfDay = __esmMin((() => {
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/addWeeks.js
/**
* The {@link addWeeks} function options.
*/
/**
* @name addWeeks
* @category Week Helpers
* @summary Add the specified number of weeks to the given date.
*
* @description
* Add the specified number of weeks to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of weeks to be added.
* @param options - An object with options
*
* @returns The new date with the weeks added
*
* @example
* // Add 4 weeks to 1 September 2014:
* const result = addWeeks(new Date(2014, 8, 1), 4)
* //=> Mon Sep 29 2014 00:00:00
*/
function addWeeks(date, amount, options) {
	return addDays(date, amount * 7, options);
}
function init_addWeeks() {
	return (init_addWeeks = __esmMin((() => {
		init_addDays();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/addYears.js
/**
* The {@link addYears} function options.
*/
/**
* @name addYears
* @category Year Helpers
* @summary Add the specified number of years to the given date.
*
* @description
* Add the specified number of years to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type.
*
* @param date - The date to be changed
* @param amount - The amount of years to be added.
* @param options - The options
*
* @returns The new date with the years added
*
* @example
* // Add 5 years to 1 September 2014:
* const result = addYears(new Date(2014, 8, 1), 5)
* //=> Sun Sep 01 2019 00:00:00
*/
function addYears(date, amount, options) {
	return addMonths(date, amount * 12, options);
}
function init_addYears() {
	return (init_addYears = __esmMin((() => {
		init_addMonths();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/isSameDay.js
/**
* The {@link isSameDay} function options.
*/
/**
* @name isSameDay
* @category Day Helpers
* @summary Are the given dates in the same day (and year and month)?
*
* @description
* Are the given dates in the same day (and year and month)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same day (and year and month)
*
* @example
* // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
* const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
* //=> true
*
* @example
* // Are 4 September and 4 October in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
* //=> false
*
* @example
* // Are 4 September, 2014 and 4 September, 2015 in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
* //=> false
*/
function isSameDay(laterDate, earlierDate, options) {
	const [dateLeft_, dateRight_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function init_isSameDay() {
	return (init_isSameDay = __esmMin((() => {
		init_normalizeDates();
		init_startOfDay();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/endOfMonth.js
/**
* The {@link endOfMonth} function options.
*/
/**
* @name endOfMonth
* @category Month Helpers
* @summary Return the end of a month for the given date.
*
* @description
* Return the end of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a month
*
* @example
* // The end of a month for 2 September 2014 11:55:00:
* const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 30 2014 23:59:59.999
*/
function endOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	const month = _date.getMonth();
	_date.setFullYear(_date.getFullYear(), month + 1, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
function init_endOfMonth() {
	return (init_endOfMonth = __esmMin((() => {
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
	const [start, end] = normalizeDates(context, interval.start, interval.end);
	return {
		start,
		end
	};
}
function init_normalizeInterval() {
	return (init_normalizeInterval = __esmMin((() => {
		init_normalizeDates();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/eachMonthOfInterval.js
/**
* The {@link eachMonthOfInterval} function options.
*/
/**
* The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
*/
/**
* @name eachMonthOfInterval
* @category Interval Helpers
* @summary Return the array of months within the specified time interval.
*
* @description
* Return the array of months within the specified time interval.
*
* @typeParam IntervalType - Interval type.
* @typeParam Options - Options type.
*
* @param interval - The interval.
* @param options - An object with options.
*
* @returns The array with starts of months from the month of the interval start to the month of the interval end
*
* @example
* // Each month between 6 February 2014 and 10 August 2014:
* const result = eachMonthOfInterval({
*   start: new Date(2014, 1, 6),
*   end: new Date(2014, 7, 10)
* })
* //=> [
* //   Sat Feb 01 2014 00:00:00,
* //   Sat Mar 01 2014 00:00:00,
* //   Tue Apr 01 2014 00:00:00,
* //   Thu May 01 2014 00:00:00,
* //   Sun Jun 01 2014 00:00:00,
* //   Tue Jul 01 2014 00:00:00,
* //   Fri Aug 01 2014 00:00:00
* // ]
*/
function eachMonthOfInterval(interval, options) {
	const { start, end } = normalizeInterval(options?.in, interval);
	let reversed = +start > +end;
	const endTime = reversed ? +start : +end;
	const date = reversed ? end : start;
	date.setHours(0, 0, 0, 0);
	date.setDate(1);
	let step = options?.step ?? 1;
	if (!step) return [];
	if (step < 0) {
		step = -step;
		reversed = !reversed;
	}
	const dates = [];
	while (+date <= endTime) {
		dates.push(constructFrom(start, date));
		date.setMonth(date.getMonth() + step);
	}
	return reversed ? dates.reverse() : dates;
}
function init_eachMonthOfInterval() {
	return (init_eachMonthOfInterval = __esmMin((() => {
		init_normalizeInterval();
		init_constructFrom();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/startOfMonth.js
/**
* The {@link startOfMonth} function options.
*/
/**
* @name startOfMonth
* @category Month Helpers
* @summary Return the start of a month for the given date.
*
* @description
* Return the start of a month for the given date. The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
* Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
* or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a month
*
* @example
* // The start of a month for 2 September 2014 11:55:00:
* const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	_date.setDate(1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
function init_startOfMonth() {
	return (init_startOfMonth = __esmMin((() => {
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/endOfWeek.js
/**
* The {@link endOfWeek} function options.
*/
/**
* @name endOfWeek
* @category Week Helpers
* @summary Return the end of a week for the given date.
*
* @description
* Return the end of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a week
*
* @example
* // The end of a week for 2 September 2014 11:55:00:
* const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sat Sep 06 2014 23:59:59.999
*
* @example
* // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
* const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Sun Sep 07 2014 23:59:59.999
*/
function endOfWeek(date, options) {
	const defaultOptions = getDefaultOptions();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date, options?.in);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
	_date.setDate(_date.getDate() + diff);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
function init_endOfWeek() {
	return (init_endOfWeek = __esmMin((() => {
		init_defaultOptions();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/getDaysInMonth.js
/**
* The {@link getDaysInMonth} function options.
*/
/**
* @name getDaysInMonth
* @category Month Helpers
* @summary Get the number of days in a month of the given date.
*
* @description
* Get the number of days in a month of the given date, considering the context if provided.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The number of days in a month
*
* @example
* // How many days are in February 2000?
* const result = getDaysInMonth(new Date(2000, 1))
* //=> 29
*/
function getDaysInMonth(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const monthIndex = _date.getMonth();
	const lastDayOfMonth = constructFrom(_date, 0);
	lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
	lastDayOfMonth.setHours(0, 0, 0, 0);
	return lastDayOfMonth.getDate();
}
function init_getDaysInMonth() {
	return (init_getDaysInMonth = __esmMin((() => {
		init_constructFrom();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/isAfter.js
/**
* @name isAfter
* @category Common Helpers
* @summary Is the first date after the second one?
*
* @description
* Is the first date after the second one?
*
* @param date - The date that should be after the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is after the second date
*
* @example
* // Is 10 July 1989 after 11 February 1987?
* const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> true
*/
function isAfter(date, dateToCompare) {
	return +toDate(date) > +toDate(dateToCompare);
}
function init_isAfter() {
	return (init_isAfter = __esmMin((() => {
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/isBefore.js
/**
* @name isBefore
* @category Common Helpers
* @summary Is the first date before the second one?
*
* @description
* Is the first date before the second one?
*
* @param date - The date that should be before the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is before the second date
*
* @example
* // Is 10 July 1989 before 11 February 1987?
* const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> false
*/
function isBefore(date, dateToCompare) {
	return +toDate(date) < +toDate(dateToCompare);
}
function init_isBefore() {
	return (init_isBefore = __esmMin((() => {
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/isSameMonth.js
/**
* The {@link isSameMonth} function options.
*/
/**
* @name isSameMonth
* @category Month Helpers
* @summary Are the given dates in the same month (and year)?
*
* @description
* Are the given dates in the same month (and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same month (and year)
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*
* @example
* // Are 2 September 2014 and 25 September 2015 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
* //=> false
*/
function isSameMonth(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
function init_isSameMonth() {
	return (init_isSameMonth = __esmMin((() => {
		init_normalizeDates();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/setMonth.js
/**
* The {@link setMonth} function options.
*/
/**
* @name setMonth
* @category Month Helpers
* @summary Set the month to the given date.
*
* @description
* Set the month to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param month - The month index to set (0-11)
* @param options - The options
*
* @returns The new date with the month set
*
* @example
* // Set February to 1 September 2014:
* const result = setMonth(new Date(2014, 8, 1), 1)
* //=> Sat Feb 01 2014 00:00:00
*/
function setMonth(date, month, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const day = _date.getDate();
	const midMonth = constructFrom(options?.in || date, 0);
	midMonth.setFullYear(year, month, 15);
	midMonth.setHours(0, 0, 0, 0);
	const daysInMonth = getDaysInMonth(midMonth);
	_date.setMonth(month, Math.min(day, daysInMonth));
	return _date;
}
function init_setMonth() {
	return (init_setMonth = __esmMin((() => {
		init_constructFrom();
		init_getDaysInMonth();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/setYear.js
/**
* The {@link setYear} function options.
*/
/**
* @name setYear
* @category Year Helpers
* @summary Set the year to the given date.
*
* @description
* Set the year to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param year - The year of the new date
* @param options - An object with options.
*
* @returns The new date with the year set
*
* @example
* // Set year 2013 to 1 September 2014:
* const result = setYear(new Date(2014, 8, 1), 2013)
* //=> Sun Sep 01 2013 00:00:00
*/
function setYear(date, year, options) {
	const date_ = toDate(date, options?.in);
	if (isNaN(+date_)) return constructFrom(options?.in || date, NaN);
	date_.setFullYear(year);
	return date_;
}
function init_setYear() {
	return (init_setYear = __esmMin((() => {
		init_constructFrom();
		init_toDate();
	})))();
}
//#endregion
export { normalizeDates as A, addYears as C, init_startOfDay as D, init_addWeeks as E, addMonths as F, init_addMonths as I, addDays as L, startOfWeek as M, getDefaultOptions as N, startOfDay as O, init_defaultOptions as P, init_addDays as R, isSameDay as S, addWeeks as T, init_normalizeInterval as _, init_isSameMonth as a, init_endOfMonth as b, isBefore as c, endOfWeek as d, init_endOfWeek as f, init_eachMonthOfInterval as g, eachMonthOfInterval as h, setMonth as i, init_startOfWeek as j, init_normalizeDates as k, init_isAfter as l, startOfMonth as m, setYear as n, isSameMonth as o, init_startOfMonth as p, init_setMonth as r, init_isBefore as s, init_setYear as t, isAfter as u, normalizeInterval as v, init_addYears as w, init_isSameDay as x, endOfMonth as y };
