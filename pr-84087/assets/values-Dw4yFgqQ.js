import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/components/src/utils/values.ts
/**
* Determines if a value is null or undefined.
*
* @param value The value to check.
* @return Whether value is not null or undefined.
*/
function isValueDefined(value) {
	return value !== void 0 && value !== null;
}
/**
* Determines if a value is empty, null, or undefined.
*
* @param value The value to check.
* @return Whether value is empty.
*/
function isValueEmpty(value) {
	const isEmptyString = value === "";
	return !isValueDefined(value) || isEmptyString;
}
/**
* Get the first defined/non-null value from an array.
*
* @param values        Values to derive from.
* @param fallbackValue Fallback value if there are no defined values.
* @return A defined value or the fallback value.
*/
function getDefinedValue(values = [], fallbackValue) {
	return values.find(isValueDefined) ?? fallbackValue;
}
var stringToNumber, ensureNumber;
function init_values() {
	return (init_values = __esmMin((() => {
		stringToNumber = (value) => {
			return parseFloat(value);
		};
		ensureNumber = (value) => {
			return typeof value === "string" ? stringToNumber(value) : value;
		};
	})))();
}
//#endregion
export { isValueEmpty as a, isValueDefined as i, getDefinedValue as n, init_values as r, ensureNumber as t };
