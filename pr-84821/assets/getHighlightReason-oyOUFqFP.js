import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { g as keyboard, u as init_reason_parts, x as pointer, y as none } from "./reason-parts-0ghxNVBE.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/getHighlightReason.mjs
/**
* The `onItemHighlighted` reason for a list navigation event, matching the event type that the
* reason promises in its details.
*/
function getHighlightReason(event) {
	if (event == null) return none;
	if (event.type.startsWith("key")) return keyboard;
	if (event.type.startsWith("mouse") || event.type.startsWith("pointer")) return pointer;
	return none;
}
function init_getHighlightReason() {
	return (init_getHighlightReason = __esmMin((() => {
		init_reason_parts();
	})))();
}
//#endregion
export { init_getHighlightReason as n, getHighlightReason as t };
