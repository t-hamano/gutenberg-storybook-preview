import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/compose/build-module/hooks/use-focus-outside/index.mjs
function isFocusNormalizedButton(eventTarget) {
	if (!(eventTarget instanceof window.HTMLElement)) return false;
	switch (eventTarget.nodeName) {
		case "A":
		case "BUTTON": return true;
		case "INPUT": return INPUT_BUTTON_TYPES.includes(eventTarget.type);
	}
	return false;
}
function useFocusOutside(onFocusOutside) {
	const currentOnFocusOutsideRef = (0, import_react.useRef)(onFocusOutside);
	(0, import_react.useEffect)(() => {
		currentOnFocusOutsideRef.current = onFocusOutside;
	}, [onFocusOutside]);
	const preventBlurCheckRef = (0, import_react.useRef)(false);
	const blurCheckTimeoutIdRef = (0, import_react.useRef)(void 0);
	const cancelBlurCheck = (0, import_react.useCallback)(() => {
		clearTimeout(blurCheckTimeoutIdRef.current);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!onFocusOutside) cancelBlurCheck();
	}, [onFocusOutside, cancelBlurCheck]);
	const normalizeButtonFocus = (0, import_react.useCallback)((event) => {
		const { type, target } = event;
		if (["mouseup", "touchend"].includes(type)) preventBlurCheckRef.current = false;
		else if (isFocusNormalizedButton(target)) preventBlurCheckRef.current = true;
	}, []);
	return {
		onFocus: cancelBlurCheck,
		onMouseDown: normalizeButtonFocus,
		onMouseUp: normalizeButtonFocus,
		onTouchStart: normalizeButtonFocus,
		onTouchEnd: normalizeButtonFocus,
		onBlur: (0, import_react.useCallback)((event) => {
			event.persist();
			if (preventBlurCheckRef.current) return;
			const ignoreForRelatedTarget = event.target.getAttribute("data-unstable-ignore-focus-outside-for-relatedtarget");
			if (ignoreForRelatedTarget && event.relatedTarget?.closest(ignoreForRelatedTarget)) return;
			clearTimeout(blurCheckTimeoutIdRef.current);
			blurCheckTimeoutIdRef.current = setTimeout(() => {
				if (!document.hasFocus()) {
					event.preventDefault();
					return;
				}
				if ("function" === typeof currentOnFocusOutsideRef.current) currentOnFocusOutsideRef.current(event);
			}, 0);
		}, [])
	};
}
var INPUT_BUTTON_TYPES;
function init_use_focus_outside() {
	return (init_use_focus_outside = __esmMin((() => {
		init_react();
		INPUT_BUTTON_TYPES = ["button", "submit"];
	})))();
}
//#endregion
export { useFocusOutside as n, init_use_focus_outside as t };
