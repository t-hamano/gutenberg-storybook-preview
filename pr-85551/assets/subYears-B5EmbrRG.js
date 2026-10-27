import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { C as addYears, E as init_addWeeks, F as addMonths, I as init_addMonths, L as addDays, R as init_addDays, T as addWeeks, w as init_addYears } from "./setYear-BreLG7HH.js";
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/subDays.js
/**
* The {@link subDays} function options.
*/
/**
* @name subDays
* @category Day Helpers
* @summary Subtract the specified number of days from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of days to be subtracted.
* @param options - An object with options
*
* @returns The new date with the days subtracted
*
* @example
* // Subtract 10 days from 1 September 2014:
* const result = subDays(new Date(2014, 8, 1), 10)
* //=> Fri Aug 22 2014 00:00:00
*/
function subDays(date, amount, options) {
	return addDays(date, -amount, options);
}
function init_subDays() {
	return (init_subDays = __esmMin((() => {
		init_addDays();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/subMonths.js
/**
* The subMonths function options.
*/
/**
* @name subMonths
* @category Month Helpers
* @summary Subtract the specified number of months from the given date.
*
* @description
* Subtract the specified number of months from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of months to be subtracted.
* @param options - An object with options
*
* @returns The new date with the months subtracted
*
* @example
* // Subtract 5 months from 1 February 2015:
* const result = subMonths(new Date(2015, 1, 1), 5)
* //=> Mon Sep 01 2014 00:00:00
*/
function subMonths(date, amount, options) {
	return addMonths(date, -amount, options);
}
function init_subMonths() {
	return (init_subMonths = __esmMin((() => {
		init_addMonths();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/subWeeks.js
/**
* The {@link subWeeks} function options.
*/
/**
* @name subWeeks
* @category Week Helpers
* @summary Subtract the specified number of weeks from the given date.
*
* @description
* Subtract the specified number of weeks from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of weeks to be subtracted.
* @param options - An object with options
*
* @returns The new date with the weeks subtracted
*
* @example
* // Subtract 4 weeks from 1 September 2014:
* const result = subWeeks(new Date(2014, 8, 1), 4)
* //=> Mon Aug 04 2014 00:00:00
*/
function subWeeks(date, amount, options) {
	return addWeeks(date, -amount, options);
}
function init_subWeeks() {
	return (init_subWeeks = __esmMin((() => {
		init_addWeeks();
	})))();
}
//#endregion
//#region ../node_modules/.store/date-fns@4.4.0-N3CoundlhH8enmbadGmv6Q/node_modules/date-fns/subYears.js
/**
* The {@link subYears} function options.
*/
/**
* @name subYears
* @category Year Helpers
* @summary Subtract the specified number of years from the given date.
*
* @description
* Subtract the specified number of years from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of years to be subtracted.
* @param options - An object with options
*
* @returns The new date with the years subtracted
*
* @example
* // Subtract 5 years from 1 September 2014:
* const result = subYears(new Date(2014, 8, 1), 5)
* //=> Tue Sep 01 2009 00:00:00
*/
function subYears(date, amount, options) {
	return addYears(date, -amount, options);
}
function init_subYears() {
	return (init_subYears = __esmMin((() => {
		init_addYears();
	})))();
}
//#endregion
export { init_subMonths as a, subDays as c, subWeeks as i, subYears as n, subMonths as o, init_subWeeks as r, init_subDays as s, init_subYears as t };
