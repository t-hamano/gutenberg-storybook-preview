import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { c as useAnimationsFinished, s as init_useAnimationsFinished } from "./useTransitionStatus-DtGN_KnE.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, c as focusOut, u as init_reason_parts } from "./reason-parts-0ghxNVBE.js";
import { dt as init_tabbable, ft as isOutsideEvent, ut as getTabbableNearElement } from "./DirectionProvider-ijBUoTP5.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/useTriggerSwitchTransition.mjs
/**
* Popover and Menu declare different `instantType` unions, so only the members
* this hook touches are typed.
*/
/**
* Lets the positioner animate while a popup moves between detached triggers.
*
* The positioner is normally marked instant, so a hand-off from one trigger to
* another would teleport. Clearing `instantType` for the duration of the move
* lets it transition, and `trigger-change` is restored once the move finishes.
*
* The restoration is deferred until the move's animations finish, so it can
* outlive the move that scheduled it. The trigger element is retained through
* the exit transition, so a close alone does not change `domReference` and
* nothing would otherwise re-run this effect to abort it — a popup that closes
* and reopens on the same trigger mid-exit would inherit the stale callback and
* lose its own transition. Closing therefore cancels the pending restoration
* explicitly.
*
* Applying `trigger-change` to a closed popup is prevented separately, by the
* stores' `instantType` selector, since a controlled `open={false}` commit
* reaches the popup without passing through `setOpen`.
*/
function useTriggerSwitchTransition(parameters) {
	const { store, domReference, positionerElement, open } = parameters;
	const previousTriggerRef = import_react.useRef(null);
	const pendingSwitchRef = import_react.useRef(null);
	const runOnceAnimationsFinish = useAnimationsFinished(positionerElement);
	useIsoLayoutEffect(() => {
		if (open) return;
		pendingSwitchRef.current?.abort();
		pendingSwitchRef.current = null;
		if (store.state.instantType === "trigger-change") store.set("instantType", void 0);
	}, [open, store]);
	useIsoLayoutEffect(() => {
		const currentTrigger = domReference;
		const previousTrigger = previousTriggerRef.current;
		if (currentTrigger) previousTriggerRef.current = currentTrigger;
		if (!previousTrigger || !currentTrigger || currentTrigger === previousTrigger) return;
		if (!store.select("open")) return;
		store.set("instantType", void 0);
		const abortController = new AbortController();
		pendingSwitchRef.current = abortController;
		runOnceAnimationsFinish(() => {
			if (store.select("open")) store.set("instantType", "trigger-change");
		}, abortController.signal);
		return () => {
			abortController.abort();
		};
	}, [
		domReference,
		runOnceAnimationsFinish,
		store
	]);
}
var import_react;
function init_useTriggerSwitchTransition() {
	return (init_useTriggerSwitchTransition = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useAnimationsFinished();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/popups/useTriggerFocusGuards.mjs
/**
* Minimal store interface required by the focus guard hook.
* Both PopoverStore and MenuStore satisfy this interface.
*/
/**
* Provides focus guard handlers for popup triggers (Popover, Menu).
*
* When the popup is open, invisible focus guard elements are placed before and after
* the trigger. These handlers close the popup and move focus to the appropriate
* tabbable element when the guards receive focus (i.e. when the user tabs out).
*/
function useTriggerFocusGuards(store, triggerElementRef) {
	function closeAndFocus(event, direction, positionerElement) {
		const guard = event.currentTarget;
		import_react_dom.flushSync(() => {
			store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, guard));
		});
		getTabbableNearElement(guard.isConnected ? guard : triggerElementRef.current, direction, positionerElement)?.focus();
	}
	function handlePreFocusGuardFocus(event) {
		closeAndFocus(event, -1, store.select("positionerElement"));
	}
	function handleFocusTargetFocus(event) {
		const positionerElement = store.select("positionerElement");
		if (positionerElement && isOutsideEvent(event, positionerElement)) store.context.beforeContentFocusGuardRef.current?.focus();
		else closeAndFocus(event, 1, positionerElement);
	}
	return {
		handlePreFocusGuardFocus,
		handleFocusTargetFocus
	};
}
var import_react_dom;
function init_useTriggerFocusGuards() {
	return (init_useTriggerFocusGuards = __esmMin((() => {
		import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
		init_tabbable();
		init_createBaseUIEventDetails();
		init_reason_parts();
	})))();
}
//#endregion
export { useTriggerSwitchTransition as i, useTriggerFocusGuards as n, init_useTriggerSwitchTransition as r, init_useTriggerFocusGuards as t };
