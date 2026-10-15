import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { d as init_empty, l as EMPTY_OBJECT } from "./useRenderElement-QwAlaybP.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/reason-parts.mjs
var none, triggerPress, triggerHover, triggerFocus, outsidePress, itemPress, closePress, clearPress, chipRemovePress, inputChange, inputClear, inputPress, focusOut, escapeKey, closeWatcher, listNavigation, keyboard, pointer, cancelOpen, siblingOpen, disabled, missing, initial, imperativeAction, swipe, windowResize;
function init_reason_parts() {
	return (init_reason_parts = __esmMin((() => {
		none = "none";
		triggerPress = "trigger-press";
		triggerHover = "trigger-hover";
		triggerFocus = "trigger-focus";
		outsidePress = "outside-press";
		itemPress = "item-press";
		closePress = "close-press";
		clearPress = "clear-press";
		chipRemovePress = "chip-remove-press";
		inputChange = "input-change";
		inputClear = "input-clear";
		inputPress = "input-press";
		focusOut = "focus-out";
		escapeKey = "escape-key";
		closeWatcher = "close-watcher";
		listNavigation = "list-navigation";
		keyboard = "keyboard";
		pointer = "pointer";
		cancelOpen = "cancel-open";
		siblingOpen = "sibling-open";
		disabled = "disabled";
		missing = "missing";
		initial = "initial";
		imperativeAction = "imperative-action";
		swipe = "swipe";
		windowResize = "window-resize";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
/**
* Maps a change `reason` string to the corresponding native event type.
*/
/**
* Details of custom change events emitted by Base UI components.
*/
/**
* Details of custom generic events emitted by Base UI components.
*/
/**
* Creates a Base UI event details object with the given reason and utilities
* for preventing Base UI's internal event handling.
*/
function createChangeEventDetails(reason, event, trigger, customProperties) {
	let canceled = false;
	let allowPropagation = false;
	const custom = customProperties ?? EMPTY_OBJECT;
	return {
		reason,
		event: event ?? new Event("base-ui"),
		cancel() {
			canceled = true;
		},
		allowPropagation() {
			allowPropagation = true;
		},
		get isCanceled() {
			return canceled;
		},
		get isPropagationAllowed() {
			return allowPropagation;
		},
		trigger,
		...custom
	};
}
function createGenericEventDetails(reason, event, customProperties) {
	const custom = customProperties ?? EMPTY_OBJECT;
	return {
		reason,
		event: event ?? new Event("base-ui"),
		...custom
	};
}
function init_createBaseUIEventDetails() {
	return (init_createBaseUIEventDetails = __esmMin((() => {
		init_empty();
	})))();
}
//#endregion
export { windowResize as A, outsidePress as C, triggerFocus as D, swipe as E, triggerHover as O, none as S, siblingOpen as T, inputPress as _, chipRemovePress as a, listNavigation as b, closeWatcher as c, focusOut as d, imperativeAction as f, inputClear as g, inputChange as h, cancelOpen as i, triggerPress as k, disabled as l, initial as m, createGenericEventDetails as n, clearPress as o, init_reason_parts as p, init_createBaseUIEventDetails as r, closePress as s, createChangeEventDetails as t, escapeKey as u, itemPress as v, pointer as w, missing as x, keyboard as y };
