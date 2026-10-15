import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/areArraysEqual.mjs
/**
* Compares two arrays element-wise.
*
* The default comparison is `Object.is`, so `NaN` equals `NaN` and `0` does not equal `-0`.
*/
function areArraysEqual(array1, array2, itemComparer = Object.is) {
	const { length } = array1;
	if (length !== array2.length) return false;
	for (let i = 0; i < length; i += 1) if (!itemComparer(array1[i], array2[i])) return false;
	return true;
}
function init_areArraysEqual() {
	return (init_areArraysEqual = __esmMin((() => {})))();
}
//#endregion
export { init_areArraysEqual as n, areArraysEqual as t };
