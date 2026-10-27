import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { i as getDate, s as init_build_module, t as date } from "./build-module-DFGiXAdt.js";
import { n as UTCDateMini, t as init_utc } from "./utc-CRAKe1tU.js";
import { f as init_actions } from "./actions-BKLQwEs8.js";
//#region ../packages/components/src/date-time/utils.ts
/**
* Converts a date input to a UTC-normalized date for consistent date
* manipulation. Timezoneless strings are interpreted using the timezone
* offset from `@wordpress/date` settings. Date objects and timestamps
* represent specific UTC instants.
*
* @param input Value to turn into a date.
*/
function inputToDate(input) {
	if (typeof input === "string") {
		if (/Z|[+-]\d{2}(:?\d{2})?$/.test(input)) return new UTCDateMini(new Date(input));
		return new UTCDateMini(getDate(input).getTime());
	}
	const time = input instanceof Date ? input.getTime() : input;
	return new UTCDateMini(time);
}
/**
* Returns the start of day (midnight) as a browser-local Date for the calendar
* day in the configured timezone in `@wordpress/date` settings. This is necessary
* because date-fns's startOfDay operates in browser local time, which can cause
* off-by-one-day bugs when browser and configured timezones differ.
*
* For example, if the UTC time is Nov 16, 01:00 UTC and configured timezone
* is UTC-5, the date is Nov 15. This function returns a browser-local Date
* at Nov 15, 00:00 (browser local midnight) so it matches calendar days.
*
* @param date A Date object normalized to UTC
* @return A browser-local Date at midnight for the configured timezone date
*/
function startOfDayInConfiguredTimezone(date$1) {
	const year = Number(date("Y", date$1));
	const month = Number(date("n", date$1)) - 1;
	const day = Number(date("j", date$1));
	return new Date(year, month, day, 0, 0, 0, 0);
}
/**
* Converts a 12-hour time to a 24-hour time.
* @param hours
* @param isPm
*/
function from12hTo24h(hours, isPm) {
	return isPm ? (hours % 12 + 12) % 24 : hours % 12;
}
/**
* Converts a 24-hour time to a 12-hour time.
* @param hours
*/
function from24hTo12h(hours) {
	return hours % 12 || 12;
}
/**
* Creates an InputControl reducer used to pad an input so that it is always a
* given width. For example, the hours and minutes inputs are padded to 2 so
* that '4' appears as '04'.
*
* @param pad How many digits the value should be.
*/
function buildPadInputStateReducer(pad) {
	return (state, action) => {
		const nextState = { ...state };
		if (action.type === "COMMIT" || action.type === "PRESS_UP" || action.type === "PRESS_DOWN") {
			if (nextState.value !== void 0) nextState.value = nextState.value.toString().padStart(pad, "0");
		}
		return nextState;
	};
}
/**
* Updates specific date fields in the configured timezone and returns a new
* UTC date.
*
* @param date    A Date object
* @param updates Object with fields to update
* @return A Date object normalized to UTC with the updated values
*/
function setInConfiguredTimezone(date$2, updates) {
	const values = {
		year: Number(date("Y", date$2)),
		month: Number(date("n", date$2)) - 1,
		date: Number(date("j", date$2)),
		hours: Number(date("H", date$2)),
		minutes: Number(date("i", date$2)),
		seconds: Number(date("s", date$2)),
		...updates
	};
	const daysInMonth = getDaysInMonth(values.year, values.month);
	values.date = Math.min(values.date, daysInMonth);
	const timezoneless = `${String(values.year).padStart(4, "0")}-${String(values.month + 1).padStart(2, "0")}-${String(values.date).padStart(2, "0")}T${String(values.hours).padStart(2, "0")}:${String(values.minutes).padStart(2, "0")}:${String(values.seconds).padStart(2, "0")}`;
	return new UTCDateMini(getDate(timezoneless).getTime());
}
/**
* Validates the target of a React event to ensure it is an input element and
* that the input is valid.
* @param event
*/
function validateInputElementTarget(event) {
	const HTMLInputElementInstance = event.target?.ownerDocument.defaultView?.HTMLInputElement ?? HTMLInputElement;
	if (!(event.target instanceof HTMLInputElementInstance)) return false;
	return event.target.validity.valid;
}
var getDaysInMonth;
function init_utils() {
	return (init_utils = __esmMin((() => {
		init_utc();
		init_build_module();
		init_actions();
		getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
	})))();
}
//#endregion
//#region ../packages/components/src/date-time/constants.ts
var TIMEZONELESS_FORMAT;
function init_constants() {
	return (init_constants = __esmMin((() => {
		TIMEZONELESS_FORMAT = "Y-m-d\\TH:i:s";
	})))();
}
//#endregion
export { from24hTo12h as a, inputToDate as c, validateInputElementTarget as d, from12hTo24h as i, setInConfiguredTimezone as l, init_constants as n, getDaysInMonth as o, buildPadInputStateReducer as r, init_utils as s, TIMEZONELESS_FORMAT as t, startOfDayInConfiguredTimezone as u };
