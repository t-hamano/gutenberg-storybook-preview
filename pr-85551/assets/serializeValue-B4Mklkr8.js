import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/serializeValue.mjs
function serializeValue(value) {
	if (value == null) return "";
	if (typeof value === "string") return value;
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
function init_serializeValue() {
	return (init_serializeValue = __esmMin((() => {})))();
}
//#endregion
export { serializeValue as n, init_serializeValue as t };
