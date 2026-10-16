import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/is-shallow-equal/build-module/objects.mjs
function isShallowEqualObjects(a, b) {
	if (a === b) return true;
	const aKeys = Object.keys(a);
	const bKeys = Object.keys(b);
	if (aKeys.length !== bKeys.length) return false;
	let i = 0;
	while (i < aKeys.length) {
		const key = aKeys[i];
		const aValue = a[key];
		if (aValue === void 0 && !b.hasOwnProperty(key) || aValue !== b[key]) return false;
		i++;
	}
	return true;
}
function init_objects() {
	return (init_objects = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/is-shallow-equal/build-module/arrays.mjs
function isShallowEqualArrays(a, b) {
	if (a === b) return true;
	if (a.length !== b.length) return false;
	for (let i = 0, len = a.length; i < len; i++) if (a[i] !== b[i]) return false;
	return true;
}
//#endregion
//#region ../packages/is-shallow-equal/build-module/index.mjs
function isShallowEqual(a, b) {
	if (a && b) {
		if (a.constructor === Object && b.constructor === Object) return isShallowEqualObjects(a, b);
		else if (Array.isArray(a) && Array.isArray(b)) return isShallowEqualArrays(a, b);
	}
	return a === b;
}
function init_build_module() {
	return (init_build_module = __esmMin((() => {})))();
}
//#endregion
export { isShallowEqualObjects as i, isShallowEqual as n, init_objects as r, init_build_module as t };
