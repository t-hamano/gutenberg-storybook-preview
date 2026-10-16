import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { a as makeEventPreventable, i as init_mergeProps, o as mergeProps } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_safeReact, n as useIsoLayoutEffect, r as SafeReact, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { n as init_error, t as error } from "./error-0lokwdt8.js";
import { l as getWindow, p as isHTMLElement, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
function useCompositeRootContext(optional = false) {
	const context = import_react$2.useContext(CompositeRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.");
	return context;
}
var import_react$2, CompositeRootContext;
function init_CompositeRootContext() {
	return (init_CompositeRootContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		CompositeRootContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		CompositeRootContext.displayName = "CompositeRootContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
function useFocusableWhenDisabled(parameters) {
	const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
	const isFocusableComposite = composite && focusableWhenDisabled !== false;
	const isNonFocusableComposite = composite && focusableWhenDisabled === false;
	return { props: import_react$1.useMemo(() => {
		const additionalProps = { onKeyDown(event) {
			if (disabled && focusableWhenDisabled && event.key !== "Tab") event.preventDefault();
		} };
		if (!composite) {
			additionalProps.tabIndex = tabIndexProp;
			if (!isNativeButton && disabled) additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
		}
		if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) additionalProps["aria-disabled"] = disabled;
		if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) additionalProps.disabled = disabled;
		return additionalProps;
	}, [
		composite,
		disabled,
		focusableWhenDisabled,
		isFocusableComposite,
		isNonFocusableComposite,
		isNativeButton,
		tabIndexProp
	]) };
}
var import_react$1;
function init_useFocusableWhenDisabled() {
	return (init_useFocusableWhenDisabled = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
/**
* Dispatches a constructed click on the target so it carries the source event's
* modifier state, which `click()` always reports as unpressed. Like `click()`,
* the untrusted click still runs native activation behavior (form submission,
* link navigation).
* `detail` defaults to 0 and `pointerType` to `''` (the native convention for
* keyboard-generated clicks). When the click represents a mouse gesture, pass
* `detail: 1` and `pointerType: 'mouse'` so consumers don't classify it as a
* keyboard activation.
*/
function dispatchClickWithModifiers(target, sourceEvent, { detail = 0, pointerType = "" } = {}) {
	target.dispatchEvent(new (getWindow(target)).PointerEvent("click", {
		bubbles: true,
		cancelable: true,
		composed: true,
		detail,
		pointerType,
		shiftKey: sourceEvent.shiftKey,
		ctrlKey: sourceEvent.ctrlKey,
		altKey: sourceEvent.altKey,
		metaKey: sourceEvent.metaKey
	}));
}
function init_dispatchClickWithModifiers() {
	return (init_dispatchClickWithModifiers = __esmMin((() => {
		init_floating_ui_utils_dom();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/use-button/useButton.mjs
function useButton(parameters = {}) {
	const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true, composite: compositeProp } = parameters;
	const elementRef = import_react.useRef(null);
	const compositeRootContext = useCompositeRootContext(true);
	const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
	const { props: focusableWhenDisabledProps } = useFocusableWhenDisabled({
		focusableWhenDisabled,
		disabled,
		composite: isCompositeItem,
		tabIndex,
		isNativeButton
	});
	import_react.useEffect(() => {
		if (!elementRef.current) return;
		const isButtonTag = isButtonElement(elementRef.current);
		if (isNativeButton) {
			if (!isButtonTag) {
				const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
				error(`A component that acts as a button expected a native <button> because the \`nativeButton\` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the \`render\` prop, or set \`nativeButton\` to \`false\`.${ownerStackMessage}`);
			}
		} else if (isButtonTag) {
			const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
			error(`A component that acts as a button expected a non-<button> because the \`nativeButton\` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as \`role\` or \`aria-disabled\`). Use a non-<button> in the \`render\` prop, or set \`nativeButton\` to \`true\`.${ownerStackMessage}`);
		}
	}, [isNativeButton]);
	const updateDisabled = import_react.useCallback(() => {
		const element = elementRef.current;
		if (!isButtonElement(element)) return;
		if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === void 0 && element.disabled) element.disabled = false;
	}, [
		disabled,
		focusableWhenDisabledProps.disabled,
		isCompositeItem
	]);
	useIsoLayoutEffect(updateDisabled, [updateDisabled]);
	return {
		getButtonProps: import_react.useCallback((externalProps = {}) => {
			const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
			return mergeProps({
				onClick(event) {
					if (disabled) {
						event.preventDefault();
						return;
					}
					externalOnClick?.(event);
				},
				onMouseDown(event) {
					if (!disabled) externalOnMouseDown?.(event);
				},
				onKeyDown(event) {
					if (disabled) return;
					makeEventPreventable(event);
					externalOnKeyDown?.(event);
					if (event.baseUIHandlerPrevented) return;
					const isCurrentTarget = event.target === event.currentTarget;
					const currentTarget = event.currentTarget;
					const isButton = isButtonElement(currentTarget);
					const isLink = !isNativeButton && isValidLinkElement(currentTarget);
					const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
					const isEnterKey = event.key === "Enter";
					const isSpaceKey = event.key === " ";
					const role = currentTarget.getAttribute("role");
					const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
					if (isCurrentTarget && isCompositeItem && isSpaceKey) {
						if (event.defaultPrevented && isTextNavigationRole) return;
						event.preventDefault();
						if (!isNativeButton || isButton) {
							event.preventBaseUIHandler();
							dispatchClickWithModifiers(currentTarget, event);
						}
						return;
					}
					if (!shouldClick || isNativeButton || !isSpaceKey && !isEnterKey) {
						if (isCurrentTarget && isLink && isSpaceKey) event.preventDefault();
						return;
					}
					if (event.defaultPrevented) return;
					event.preventDefault();
					if (isEnterKey) {
						event.preventBaseUIHandler();
						dispatchClickWithModifiers(currentTarget, event);
					}
				},
				onKeyUp(event) {
					if (disabled) return;
					makeEventPreventable(event);
					externalOnKeyUp?.(event);
					if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
						event.preventDefault();
						return;
					}
					if (event.baseUIHandlerPrevented) return;
					if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && !event.defaultPrevented && event.key === " ") {
						event.preventBaseUIHandler();
						dispatchClickWithModifiers(event.currentTarget, event);
					}
				},
				onPointerDown(event) {
					if (disabled) {
						event.preventDefault();
						return;
					}
					externalOnPointerDown?.(event);
				}
			}, isNativeButton ? { type: "button" } : { role: "button" }, focusableWhenDisabledProps, otherExternalProps);
		}, [
			disabled,
			focusableWhenDisabledProps,
			isCompositeItem,
			isNativeButton
		]),
		buttonRef: useStableCallback((element) => {
			elementRef.current = element;
			updateDisabled();
		})
	};
}
function isButtonElement(elem) {
	return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
	return isHTMLElement(elem) && elem.tagName === "A" && Boolean(elem.href);
}
var import_react;
function init_useButton() {
	return (init_useButton = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_floating_ui_utils_dom();
		init_useStableCallback();
		init_error();
		init_safeReact();
		init_useIsoLayoutEffect();
		init_mergeProps();
		init_CompositeRootContext();
		init_useFocusableWhenDisabled();
		init_dispatchClickWithModifiers();
	})))();
}
//#endregion
export { CompositeRootContext as a, init_dispatchClickWithModifiers as i, useButton as n, init_CompositeRootContext as o, dispatchClickWithModifiers as r, useCompositeRootContext as s, init_useButton as t };
