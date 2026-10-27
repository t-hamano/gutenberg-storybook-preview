import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as tabbable, t as init_index_esm } from "./index.esm-DIshz3bn.js";
//#region ../packages/ui/src/utils/use-deprioritized-initial-focus.ts
/**
* Returns a resolved `initialFocus` value that deprioritizes elements
* marked with any of the given data attributes (e.g. a close icon, a
* library-managed scroll container), and an internal ref that must be
* merged onto the popup element.
*
* When `initialFocus` is `undefined` or `true` (the default behavior),
* the hook replaces it with a callback that:
* 1. On touch interactions — focuses the popup element itself (preventing
*    the virtual keyboard on Android), matching Base UI's default.
* 2. On other interactions — returns the first tabbable element that does
*    *not* carry any of `deprioritizedAttributes`. Falls back to Base
*    UI's default when every tabbable element is deprioritized.
*
* All other `initialFocus` values (`false`, `RefObject`, callback) pass
* through unchanged.
*
* @param props
* @param props.initialFocus            The consumer-provided `initialFocus` value.
* @param props.deprioritizedAttributes The data attributes whose elements should be deprioritized.
*/
function useDeprioritizedInitialFocus({ initialFocus, deprioritizedAttributes }) {
	const popupRef = (0, import_react.useRef)(null);
	let resolvedInitialFocus = initialFocus;
	if (initialFocus === void 0 || initialFocus === true) resolvedInitialFocus = (interactionType) => {
		if (interactionType === "touch") return popupRef.current ?? true;
		const popup = popupRef.current;
		if (!popup) return true;
		const tabbables = tabbable(popup, getTabbableOptions());
		for (const el of tabbables) if (el instanceof HTMLElement && !deprioritizedAttributes.some((attr) => el.hasAttribute(attr))) return el;
		return true;
	};
	return {
		resolvedInitialFocus,
		popupRef
	};
}
var getTabbableOptions;
function init_use_deprioritized_initial_focus() {
	return (init_use_deprioritized_initial_focus = __esmMin((() => {
		init_react();
		init_index_esm();
		getTabbableOptions = () => ({
			getShadowRoot: true,
			displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
		});
	})))();
}
//#endregion
export { useDeprioritizedInitialFocus as n, init_use_deprioritized_initial_focus as t };
