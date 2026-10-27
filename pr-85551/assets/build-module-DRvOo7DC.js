import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
//#region ../packages/react-inert-value/build-module/index.mjs
function inertValue(value) {
	if (majorVersion >= 19) return value;
	return value ? "true" : void 0;
}
var import_react, majorVersion;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		import_react = require_react();
		majorVersion = parseInt(import_react.version, 10);
	})))();
}
//#endregion
export { init_build_module as n, inertValue as t };
