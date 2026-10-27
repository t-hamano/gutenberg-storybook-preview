import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/components/build-module/utils/space.mjs
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
