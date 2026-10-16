import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { f as init_empty, u as EMPTY_OBJECT } from "./useRenderElement-Dkv6YH0v.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
/**
* Maps a change `reason` string to the corresponding native event type.
*/
/**
* Details of custom change events emitted by Base UI components.
*/
/**
* Details of custom generic events emitted by Base UI components.
*/
/** Highlight navigation uses mouse events for hover and pointer events for leaving an item. */
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
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/reason-parts.mjs
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
export { init_createBaseUIEventDetails as A, swipe as C, windowResize as D, triggerPress as E, createChangeEventDetails as O, siblingOpen as S, triggerHover as T, listNavigation as _, closeWatcher as a, outsidePress as b, focusOut as c, initial as d, inputChange as f, keyboard as g, itemPress as h, closePress as i, createGenericEventDetails as k, imperativeAction as l, inputPress as m, chipRemovePress as n, disabled as o, inputClear as p, clearPress as r, escapeKey as s, cancelOpen as t, init_reason_parts as u, missing as v, triggerFocus as w, pointer as x, none as y };
