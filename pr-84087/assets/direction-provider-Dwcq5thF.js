import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { o as isRTL, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as init_DirectionProvider, t as DirectionProvider$1 } from "./DirectionProvider-CsD6Wmlj.js";
//#region ../packages/ui/build-module/utils/render-slot-with-children.mjs
function renderSlotWithChildren(slot, defaultSlot, children) {
	return (0, import_react.cloneElement)(slot ?? defaultSlot, { children });
}
function init_render_slot_with_children() {
	return (init_render_slot_with_children = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
//#region ../packages/ui/build-module/utils/direction-provider.mjs
function DirectionProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionProvider$1, {
		direction: isRTL() ? "rtl" : "ltr",
		children
	});
}
var import_jsx_runtime;
function init_direction_provider() {
	return (init_direction_provider = __esmMin((() => {
		init_DirectionProvider();
		init_build_module();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
export { renderSlotWithChildren as i, init_direction_provider as n, init_render_slot_with_children as r, DirectionProvider as t };
