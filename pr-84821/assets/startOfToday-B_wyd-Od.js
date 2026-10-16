import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { i as init_constructFrom, n as toDate, r as constructFrom, t as init_toDate } from "./toDate-Ty5HTtpY.js";
import { D as init_startOfDay, E as init_addWeeks, M as startOfWeek, O as startOfDay, T as addWeeks, _ as init_normalizeInterval, i as setMonth, j as init_startOfWeek, r as init_setMonth, v as normalizeInterval } from "./setYear-BreLG7HH.js";
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/eachDayOfInterval.js
/**
* The {@link eachDayOfInterval} function options.
*/
/**
* The {@link eachDayOfInterval} function result type. It resolves the proper data type.
* It uses the first argument date object type, starting from the date argument,
* then the start interval date, and finally the end interval date. If
* a context function is passed, it uses the context function return type.
*/
/**
* @name eachDayOfInterval
* @category Interval Helpers
* @summary Return the array of dates within the specified time interval.
*
* @description
* Return the array of dates within the specified time interval.
*
* @typeParam IntervalType - Interval type.
* @typeParam Options - Options type.
*
* @param interval - The interval.
* @param options - An object with options.
*
* @returns The array with starts of days from the day of the interval start to the day of the interval end
*
* @example
* // Each day between 6 October 2014 and 10 October 2014:
* const result = eachDayOfInterval({
*   start: new Date(2014, 9, 6),
*   end: new Date(2014, 9, 10)
* })
* //=> [
* //   Mon Oct 06 2014 00:00:00,
* //   Tue Oct 07 2014 00:00:00,
* //   Wed Oct 08 2014 00:00:00,
* //   Thu Oct 09 2014 00:00:00,
* //   Fri Oct 10 2014 00:00:00
* // ]
*/
function eachDayOfInterval(interval, options) {
	const { start, end } = normalizeInterval(options?.in, interval);
	let reversed = +start > +end;
	const endTime = reversed ? +start : +end;
	const date = reversed ? end : start;
	date.setHours(0, 0, 0, 0);
	let step = options?.step ?? 1;
	if (!step) return [];
	if (step < 0) {
		step = -step;
		reversed = !reversed;
	}
	const dates = [];
	while (+date <= endTime) {
		dates.push(constructFrom(start, date));
		date.setDate(date.getDate() + step);
		date.setHours(0, 0, 0, 0);
	}
	return reversed ? dates.reverse() : dates;
}
function init_eachDayOfInterval() {
	return (init_eachDayOfInterval = __esmMin((() => {
		init_normalizeInterval();
		init_constructFrom();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/eachWeekOfInterval.js
/**
* The {@link eachWeekOfInterval} function options.
*/
/**
* The {@link eachWeekOfInterval} function result type. It resolves the proper data type.
* It uses the first argument date object type, starting from the interval start date,
* then the end interval date. If a context function is passed, it uses the context function return type.
*/
/**
* @name eachWeekOfInterval
* @category Interval Helpers
* @summary Return the array of weeks within the specified time interval.
*
* @description
* Return the array of weeks within the specified time interval.
*
* @param interval - The interval.
* @param options - An object with options.
*
* @returns The array with starts of weeks from the week of the interval start to the week of the interval end
*
* @example
* // Each week within interval 6 October 2014 - 23 November 2014:
* const result = eachWeekOfInterval({
*   start: new Date(2014, 9, 6),
*   end: new Date(2014, 10, 23)
* })
* //=> [
* //   Sun Oct 05 2014 00:00:00,
* //   Sun Oct 12 2014 00:00:00,
* //   Sun Oct 19 2014 00:00:00,
* //   Sun Oct 26 2014 00:00:00,
* //   Sun Nov 02 2014 00:00:00,
* //   Sun Nov 09 2014 00:00:00,
* //   Sun Nov 16 2014 00:00:00,
* //   Sun Nov 23 2014 00:00:00
* // ]
*/
function eachWeekOfInterval(interval, options) {
	const { start, end } = normalizeInterval(options?.in, interval);
	let reversed = +start > +end;
	const startDateWeek = reversed ? startOfWeek(end, options) : startOfWeek(start, options);
	const endDateWeek = reversed ? startOfWeek(start, options) : startOfWeek(end, options);
	startDateWeek.setHours(15);
	endDateWeek.setHours(15);
	const endTime = +endDateWeek.getTime();
	let currentDate = startDateWeek;
	let step = options?.step ?? 1;
	if (!step) return [];
	if (step < 0) {
		step = -step;
		reversed = !reversed;
	}
	const dates = [];
	while (+currentDate <= endTime) {
		currentDate.setHours(0);
		dates.push(constructFrom(start, currentDate));
		currentDate = addWeeks(currentDate, step);
		currentDate.setHours(15);
	}
	return reversed ? dates.reverse() : dates;
}
function init_eachWeekOfInterval() {
	return (init_eachWeekOfInterval = __esmMin((() => {
		init_normalizeInterval();
		init_addWeeks();
		init_constructFrom();
		init_startOfWeek();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/isEqual.js
/**
* @name isEqual
* @category Common Helpers
* @summary Are the given dates equal?
*
* @description
* Are the given dates equal?
*
* @param dateLeft - The first date to compare
* @param dateRight - The second date to compare
*
* @returns The dates are equal
*
* @example
* // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
* const result = isEqual(
*   new Date(2014, 6, 2, 6, 30, 45, 0),
*   new Date(2014, 6, 2, 6, 30, 45, 500)
* )
* //=> false
*/
function isEqual(leftDate, rightDate) {
	return +toDate(leftDate) === +toDate(rightDate);
}
function init_isEqual() {
	return (init_isEqual = __esmMin((() => {
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/set.js
/**
* The {@link set} function options.
*/
/**
* @name set
* @category Common Helpers
* @summary Set date values to a given date.
*
* @description
* Set date values to a given date.
*
* Sets time values to date from object `values`.
* A value is not set if it is undefined or null or doesn't exist in `values`.
*
* Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
* to use native `Date#setX` methods. If you use this function, you may not want to include the
* other `setX` functions that date-fns provides if you are concerned about the bundle size.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param values - The date values to be set
* @param options - The options
*
* @returns The new date with options set
*
* @example
* // Transform 1 September 2014 into 20 October 2015 in a single line:
* const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
* //=> Tue Oct 20 2015 00:00:00
*
* @example
* // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
* const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
* //=> Mon Sep 01 2014 12:23:45
*/
function set(date, values, options) {
	let _date = toDate(date, options?.in);
	if (isNaN(+_date)) return constructFrom(options?.in || date, NaN);
	if (values.year != null) _date.setFullYear(values.year);
	if (values.month != null) _date = setMonth(_date, values.month);
	if (values.date != null) _date.setDate(values.date);
	if (values.hours != null) _date.setHours(values.hours);
	if (values.minutes != null) _date.setMinutes(values.minutes);
	if (values.seconds != null) _date.setSeconds(values.seconds);
	if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
	return _date;
}
function init_set() {
	return (init_set = __esmMin((() => {
		init_constructFrom();
		init_setMonth();
		init_toDate();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/startOfToday.js
/**
* The {@link startOfToday} function options.
*/
/**
* @name startOfToday
* @category Day Helpers
* @summary Return the start of today.
* @pure false
*
* @description
* Return the start of today.
*
* @typeParam ContextDate - The `Date` type of the context function.
*
* @param options - An object with options
*
* @returns The start of today
*
* @example
* // If today is 6 October 2014:
* const result = startOfToday()
* //=> Mon Oct 6 2014 00:00:00
*/
function startOfToday(options) {
	return startOfDay(Date.now(), options);
}
function init_startOfToday() {
	return (init_startOfToday = __esmMin((() => {
		init_startOfDay();
	})))();
}
//#endregion
export { init_isEqual as a, init_eachWeekOfInterval as c, set as i, eachDayOfInterval as l, startOfToday as n, isEqual as o, init_set as r, eachWeekOfInterval as s, init_startOfToday as t, init_eachDayOfInterval as u };
