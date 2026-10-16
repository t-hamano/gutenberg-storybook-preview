import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/components/src/utils/space.ts
/**
* A function that handles numbers, numeric strings, and unit values.
*
* When given a number or a numeric string, it will return the grid-based
* value as a factor of GRID_BASE, defined above.
*
* When given a unit value or one of the named CSS values like `auto`,
* it will simply return the value back.
*
* @param value A number, numeric string, or a unit value.
*/
function space(value) {
	if (typeof value === "undefined") return;
	if (!value) return "0";
	const asInt = typeof value === "number" ? value : Number(value);
	if (typeof window !== "undefined" && window.CSS?.supports?.("margin", value.toString()) || Number.isNaN(asInt)) return value.toString();
	return `calc(${GRID_BASE} * ${value})`;
}
var GRID_BASE;
function init_space() {
	return (init_space = __esmMin((() => {
		GRID_BASE = "4px";
	})))();
}
//#endregion
export { space as n, init_space as t };
