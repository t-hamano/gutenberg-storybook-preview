import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { a as doAction, s as init_build_module$1 } from "./build-module-CSjwTo7p.js";
//#region ../packages/deprecated/build-module/index.mjs
function deprecated(feature, options = {}) {
	const { since, version, alternative, plugin, link, hint } = options;
	const pluginMessage = plugin ? ` from ${plugin}` : "";
	const message = `${feature} is deprecated${since ? ` since version ${since}` : ""}${version ? ` and will be removed${pluginMessage} in version ${version}` : ""}.${alternative ? ` Please use ${alternative} instead.` : ""}${link ? ` See: ${link}` : ""}${hint ? ` Note: ${hint}` : ""}`;
	if (message in logged) return;
	doAction("deprecated", feature, options, message);
	console.warn(message);
	logged[message] = true;
}
var logged;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_build_module$1();
		logged = /* @__PURE__ */ Object.create(null);
	})))();
}
//#endregion
export { init_build_module as n, deprecated as t };
