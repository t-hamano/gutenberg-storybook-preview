import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/warning/build-module/utils.mjs
var logged;
function init_utils() {
	return (init_utils = __esmMin((() => {
		logged = /* @__PURE__ */ new Set();
	})))();
}
//#endregion
//#region ../packages/warning/build-module/index.mjs
function isDev() {
	return false;
}
function warning(message) {
	if (!isDev()) return;
	if (logged.has(message)) return;
	console.warn(message);
	try {
		throw Error(message);
	} catch {}
	logged.add(message);
}
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_utils();
	})))();
}
//#endregion
export { warning as n, init_build_module as t };
