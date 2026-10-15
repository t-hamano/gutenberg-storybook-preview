import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { a as mergeProps, b as init_useRefWithInit, c as EMPTY_ARRAY, d as init_empty, l as EMPTY_OBJECT, n as useRenderElement, r as init_mergeProps, t as init_useRenderElement, u as NOOP, v as init_useMergedRefs, x as useRefWithInit, y as useMergedRefs } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { a as init_useOpenChangeComplete, g as useAnimationFrame, h as init_useAnimationFrame, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping, t as init_useTransitionStatus } from "./useTransitionStatus-C7eUOB6r.js";
import { n as init_useTimeout, r as useTimeout } from "./useTimeout-B8xVAQjx.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-B67zM6EB.js";
import { i as init_CompositeList, n as useCompositeListItem, r as CompositeList, t as init_useCompositeListItem } from "./useCompositeListItem-YflddsV3.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { A as windowResize, S as none, i as cancelOpen, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails, v as itemPress } from "./createBaseUIEventDetails-CC__nZlv.js";
import { l as getWindow, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as useButton, t as init_useButton } from "./useButton-C38YKBDn.js";
import { n as ownerDocument } from "./owner-Bl-6Ntf5.js";
import { n as useValueAsRef, r as addEventListener, t as init_useValueAsRef } from "./useValueAsRef-SBYgOR8O.js";
import { C as isVirtualClick, n as init_DirectionContext, r as useDirection, y as init_event } from "./DirectionContext-DbaSbWPN.js";
import { A as init_ReactStore, Dt as popupStateMapping, Et as init_popupStateMapping, F as useDismiss, G as init_FloatingPortal, Ht as init_engine, P as init_useDismiss, Q as init_constants, Ut as webkit, W as FloatingPortal, X as DROPDOWN_COLLISION_AVOIDANCE, _ as init_popupStoreUtils, _t as getFloatingFocusElement, a as getDisabledMountTransitionStyles, c as useAnchorPositioning, d as FOCUSABLE_POPUP_PROPS, i as usePositioner, k as ReactStore, kt as pressableTriggerOpenStateMapping, o as init_getDisabledMountTransitionStyles, r as init_usePositioner, s as init_useAnchorPositioning, vt as init_element } from "./DirectionProvider-CsD6Wmlj.js";
import { a as init_InternalBackdrop, c as FloatingFocusManager, i as InternalBackdrop, l as init_FloatingFocusManager, n as useOpenInteractionType, o as init_useClick, s as useClick, t as init_useOpenInteractionType } from "./useOpenInteractionType-KvNpLDr_.js";
import { i as init_shadowDom, n as contains } from "./shadowDom-CFrNFfBF.js";
import { n as visuallyHidden, r as visuallyHiddenInput, t as init_visuallyHidden } from "./visuallyHidden-qJhXS9Ug.js";
import { g as init_floating_ui_utils, y as rectToClientRect } from "./floating-ui.utils-ChRPHDv6.js";
import { a as init_floating_ui_dom, c as platform } from "./floating-ui.dom-CuUnCMhL.js";
import { C as useFloatingRootContext, S as init_useFloatingRootContext, _ as removeItem, a as init_resolveValueLabel, b as init_useOnFirstRender, c as resolveSelectedLabel, d as compareItemEquality, f as defaultItemEquality, g as isSelectedValueDirty, h as init_itemEquality, i as hasNullItemLabel, l as stringifyAsLabel, m as findSelectionIndex, n as init_ListboxSeparator, p as findItemIndex, s as resolveMultipleLabels, t as ListboxSeparator, u as stringifyAsValue, v as resolveSelectedIndex, x as useOnFirstRender } from "./ListboxSeparator-DWqnSTVH.js";
import { n as useListNavigation, t as init_useListNavigation } from "./useListNavigation-CfSz9jWd.js";
import { i as useTypeahead, n as isMouseWithinBounds, r as init_useTypeahead, t as init_getPseudoElementBounds } from "./getPseudoElementBounds-CdF7OSq_.js";
import { a as COMPOSITE_KEYS, l as init_composite } from "./composite-C8d67ntQ.js";
import { n as init_inertValue, t as inertValue } from "./inertValue-BhNu7eJI.js";
import { n as useValueChanged, t as init_useValueChanged } from "./useValueChanged-DpF80sHi.js";
import { _ as init_constants$1, a as useLabelableContext, c as init_useRegisterFieldControl, f as init_FieldRootContext, g as fieldValidityMapping, i as init_LabelableContext, l as useRegisterFieldControl, n as useLabelableId, o as init_FormContext, p as useFieldRootContext, s as useFormContext, t as init_useLabelableId } from "./useLabelableId-DZRYsuBw.js";
import { n as resolveAriaLabelledBy } from "./resolveAriaLabelledBy-B3qlBkhY.js";
import { n as useAnchoredPopupScrollLock, t as init_useAnchoredPopupScrollLock } from "./useAnchoredPopupScrollLock-Dui5gCoA.js";
import { n as useToolbarRootContext, t as init_ToolbarRootContext } from "./ToolbarRootContext-D44etuPV.js";
import { n as isElementDisabled } from "./isElementDisabled-zKtyMArR.js";
import { n as useCSPContext, t as init_CSPContext } from "./CSPContext-DmzZfHFb.js";
import { t as clamp } from "./clamp-vv_wJWMO.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/usePreviousValue.mjs
/**
* Returns a previous value of its argument.
* @param value Current value.
* @returns Previous value, or null if there is no previous value.
*/
function usePreviousValue(value) {
	const [state, setState] = import_react$15.useState({
		current: value,
		previous: null
	});
	if (!Object.is(value, state.current)) setState({
		current: value,
		previous: state.current
	});
	return state.previous;
}
var import_react$15;
function init_usePreviousValue() {
	return (init_usePreviousValue = __esmMin((() => {
		import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/styles.mjs
var import_jsx_runtime$6, DISABLE_SCROLLBAR_CLASS_NAME, styleDisableScrollbar;
function init_styles() {
	return (init_styles = __esmMin((() => {
		import_jsx_runtime$6 = require_jsx_runtime();
		DISABLE_SCROLLBAR_CLASS_NAME = "base-ui-disable-scrollbar";
		styleDisableScrollbar = {
			className: DISABLE_SCROLLBAR_CLASS_NAME,
			getElement(nonce) {
				return /*#__PURE__*/ (0, import_jsx_runtime$6.jsx)("style", {
					nonce,
					href: DISABLE_SCROLLBAR_CLASS_NAME,
					precedence: "base-ui:low",
					children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`
				});
			}
		};
		styleDisableScrollbar.getElement.displayName = "styleDisableScrollbar.getElement";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/scrollEdges.mjs
function getMaxScrollOffset(scrollSize, clientSize) {
	return Math.max(0, scrollSize - clientSize);
}
function normalizeScrollOffset(value, max) {
	if (max <= 0) return 0;
	const clamped = clamp(value, 0, max);
	const startDistance = clamped;
	const endDistance = max - clamped;
	const withinStartTolerance = startDistance <= 1;
	const withinEndTolerance = endDistance <= 1;
	if (withinStartTolerance && withinEndTolerance) return startDistance <= endDistance ? 0 : max;
	if (withinStartTolerance) return 0;
	if (withinEndTolerance) return max;
	return clamped;
}
function init_scrollEdges() {
	return (init_scrollEdges = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRootContext.mjs
function useSelectRootContext() {
	const store = import_react$14.useContext(SelectRootContext);
	if (store === void 0) throw new Error("Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>.");
	return store;
}
function useSelectRootPropsContext() {
	const context = import_react$14.useContext(SelectRootPropsContext);
	if (context === void 0) throw new Error("Base UI: SelectRootPropsContext is missing. Select parts must be placed within <Select.Root>.");
	return context;
}
function useSelectFloatingContext() {
	const context = import_react$14.useContext(SelectFloatingContext);
	if (context === void 0) throw new Error("Base UI: SelectFloatingContext is missing. Select parts must be placed within <Select.Root>.");
	return context;
}
var import_react$14, SelectRootContext, SelectRootPropsContext, SelectFloatingContext;
function init_SelectRootContext() {
	return (init_SelectRootContext = __esmMin((() => {
		import_react$14 = /* @__PURE__ */ __toESM(require_react(), 1);
		SelectRootContext = /*#__PURE__*/ import_react$14.createContext(void 0);
		SelectRootContext.displayName = "SelectRootContext";
		SelectRootPropsContext = /*#__PURE__*/ import_react$14.createContext(void 0);
		SelectRootPropsContext.displayName = "SelectRootPropsContext";
		SelectFloatingContext = /*#__PURE__*/ import_react$14.createContext(void 0);
		SelectFloatingContext.displayName = "SelectFloatingContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/store.mjs
var selectors;
function init_store() {
	return (init_store = __esmMin((() => {
		init_itemEquality();
		init_resolveValueLabel();
		selectors = {
			id: (state) => state.id,
			labelId: (state) => state.labelId,
			modal: (state) => state.modal,
			items: (state) => state.items,
			itemToStringLabel: (state) => state.itemToStringLabel,
			isItemEqualToValue: (state) => state.isItemEqualToValue,
			value: (state) => state.value,
			hasSelectedValue: (state) => {
				const { value, multiple, itemToStringValue } = state;
				if (value == null) return false;
				if (multiple && Array.isArray(value)) return value.length > 0;
				return stringifyAsValue(value, itemToStringValue) !== "";
			},
			hasNullItemLabel: (state, enabled) => {
				return enabled ? hasNullItemLabel(state.items) : false;
			},
			open: (state) => state.open,
			mounted: (state) => state.mounted,
			forceMount: (state) => state.forceMount,
			transitionStatus: (state) => state.transitionStatus,
			openMethod: (state) => state.openMethod,
			activeIndex: (state) => state.activeIndex,
			selectedIndex: (state) => state.selectedIndex,
			isActive: (state, index) => state.activeIndex === index,
			isSelected: (state, itemValue) => {
				const comparer = state.isItemEqualToValue;
				const storeValue = state.value;
				if (state.multiple) return Array.isArray(storeValue) && storeValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
				return compareItemEquality(itemValue, storeValue, comparer);
			},
			isSelectedByFocus: (state, index) => {
				return state.selectedIndex === index;
			},
			popupProps: (state) => state.popupProps,
			triggerProps: (state) => state.triggerProps,
			triggerElement: (state) => state.triggerElement,
			positionerElement: (state) => state.positionerElement,
			listElement: (state) => state.listElement,
			popupSide: (state) => state.popupSide,
			scrollUpArrowVisible: (state) => state.scrollUpArrowVisible,
			scrollDownArrowVisible: (state) => state.scrollDownArrowVisible,
			hasScrollArrows: (state) => state.hasScrollArrows
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/root/SelectRoot.mjs
function SelectRoot(props) {
	const { id, value: valueProp, defaultValue = null, onValueChange, open: openProp, defaultOpen = false, onOpenChange, name: nameProp, form, autoComplete, disabled: disabledProp = false, readOnly = false, required = false, modal = true, actionsRef, inputRef, onOpenChangeComplete, items, multiple = false, itemToStringLabel, itemToStringValue, isItemEqualToValue = defaultItemEquality, highlightItemOnHover = true, children } = props;
	const { clearErrors } = useFormContext();
	const { setDirty, setTouched, setFocused, validityData, setFilled, name: fieldName, disabled: fieldDisabled, validation, validationMode } = useFieldRootContext();
	const generatedId = useLabelableId({ id });
	const disabled = fieldDisabled || disabledProp;
	const name = fieldName ?? nameProp;
	const [value, setValueUnwrapped] = useControlled({
		controlled: valueProp,
		default: multiple ? defaultValue ?? EMPTY_ARRAY : defaultValue,
		name: "Select",
		state: "value"
	});
	const [open, setOpenUnwrapped] = useControlled({
		controlled: openProp,
		default: defaultOpen,
		name: "Select",
		state: "open"
	});
	const listRef = import_react$13.useRef([]);
	const labelsRef = import_react$13.useRef([]);
	const popupRef = import_react$13.useRef(null);
	const scrollHandlerRef = import_react$13.useRef(null);
	const scrollArrowsMountedCountRef = import_react$13.useRef(0);
	const valueRef = import_react$13.useRef(null);
	const valuesRef = import_react$13.useRef([]);
	const typingRef = import_react$13.useRef(false);
	const firstItemTextRef = import_react$13.useRef(null);
	const selectedItemTextRef = import_react$13.useRef(null);
	const selectionRef = import_react$13.useRef({
		allowSelectedMouseUp: false,
		allowUnselectedMouseUp: false,
		dragY: 0
	});
	const alignItemWithTriggerActiveRef = import_react$13.useRef(false);
	const initialValueRef = import_react$13.useRef(value);
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	const { openMethod, triggerProps: interactionTypeProps } = useOpenInteractionType(open);
	const store = useRefWithInit(() => new ReactStore({
		id: generatedId,
		labelId: void 0,
		modal,
		multiple,
		itemToStringLabel,
		itemToStringValue,
		isItemEqualToValue,
		value,
		open,
		mounted,
		transitionStatus,
		items,
		forceMount: false,
		openMethod: null,
		activeIndex: null,
		selectedIndex: null,
		popupProps: EMPTY_OBJECT,
		triggerProps: EMPTY_OBJECT,
		triggerElement: null,
		positionerElement: null,
		listElement: null,
		popupSide: null,
		scrollUpArrowVisible: false,
		scrollDownArrowVisible: false,
		hasScrollArrows: false
	}, {
		setValue: NOOP,
		setOpen: NOOP,
		handleScrollArrowVisibility: NOOP,
		onOpenChangeComplete: NOOP,
		listRef,
		popupRef,
		scrollHandlerRef,
		scrollArrowsMountedCountRef,
		valueRef,
		valuesRef,
		labelsRef,
		typingRef,
		selectionRef,
		firstItemTextRef,
		selectedItemTextRef,
		alignItemWithTriggerActiveRef,
		initialValueRef
	}, selectors)).current;
	const activeIndex = store.useState("activeIndex");
	const selectedIndex = store.useState("selectedIndex");
	const triggerElement = store.useState("triggerElement");
	const positionerElement = store.useState("positionerElement");
	const previousOpenMethod = usePreviousValue(openMethod);
	const renderedOpenMethod = openMethod ?? previousOpenMethod;
	const serializedValue = import_react$13.useMemo(() => {
		if (multiple) return "";
		return stringifyAsValue(value, itemToStringValue);
	}, [
		multiple,
		value,
		itemToStringValue
	]);
	const fieldStringValue = import_react$13.useMemo(() => {
		if (multiple && Array.isArray(value)) return value.map((currentValue) => stringifyAsValue(currentValue, itemToStringValue));
		return stringifyAsValue(value, itemToStringValue);
	}, [
		multiple,
		value,
		itemToStringValue
	]);
	const controlRef = useValueAsRef(triggerElement);
	const getStringifiedValueForForm = useStableCallback(() => fieldStringValue);
	useRegisterFieldControl(controlRef, generatedId, value, getStringifiedValueForForm, !disabled, nameProp);
	const hasSelectedValue = multiple ? Array.isArray(value) && value.length > 0 : value != null && serializedValue !== "";
	useIsoLayoutEffect(() => {
		setFilled(hasSelectedValue);
	}, [hasSelectedValue, setFilled]);
	useIsoLayoutEffect(function syncSelectedIndex() {
		const nextIndex = findSelectionIndex(valuesRef.current, value, isItemEqualToValue, multiple);
		if (nextIndex === null) selectedItemTextRef.current = null;
		if (open) return;
		store.set("selectedIndex", nextIndex);
	}, [
		multiple,
		open,
		value,
		isItemEqualToValue,
		store
	]);
	useValueChanged(value, () => {
		clearErrors(name);
		setDirty(isSelectedValueDirty(value, validityData.initialValue, isItemEqualToValue));
		validation.change(value);
	});
	const setOpen = useStableCallback((nextOpen, eventDetails) => {
		onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setOpenUnwrapped(nextOpen);
		if (!nextOpen && (eventDetails.reason === "focus-out" || eventDetails.reason === "outside-press")) {
			setTouched(true);
			setFocused(false);
			if (validationMode === "onBlur") validation.commit(value);
		}
	});
	const handleUnmount = useStableCallback(() => {
		setMounted(false);
		store.update({
			activeIndex: null,
			openMethod: null,
			scrollUpArrowVisible: false,
			scrollDownArrowVisible: false
		});
		onOpenChangeComplete?.(false);
	});
	useOpenChangeComplete({
		enabled: !actionsRef,
		open,
		ref: popupRef,
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	import_react$13.useImperativeHandle(actionsRef, () => ({ unmount: handleUnmount }), [handleUnmount]);
	const setValue = useStableCallback((nextValue, eventDetails) => {
		onValueChange?.(nextValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setValueUnwrapped(nextValue);
	});
	const handleScrollArrowVisibility = useStableCallback((scroller) => {
		const maxScrollTop = getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
		const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
		const shouldShowUp = scrollTop > 0;
		const shouldShowDown = scrollTop < maxScrollTop;
		store.set("scrollUpArrowVisible", shouldShowUp);
		store.set("scrollDownArrowVisible", shouldShowDown);
	});
	const floatingContext = useFloatingRootContext({
		open,
		onOpenChange: setOpen,
		elements: {
			reference: triggerElement,
			floating: positionerElement
		}
	});
	const click = useClick(floatingContext, {
		enabled: !disabled,
		event: "mousedown"
	});
	const dismiss = useDismiss(floatingContext);
	const listNavigation = useListNavigation(floatingContext, {
		enabled: !disabled,
		listRef,
		activeIndex,
		selectedIndex,
		disabledIndices: EMPTY_ARRAY,
		onNavigate(nextActiveIndex) {
			if (nextActiveIndex === null && !open) return;
			store.set("activeIndex", nextActiveIndex);
		},
		focusItemOnHover: highlightItemOnHover
	});
	const typeahead = useTypeahead(floatingContext, {
		enabled: !disabled && (open || !readOnly && !multiple),
		listRef: labelsRef,
		activeIndex,
		selectedIndex,
		disabledIndices: (index) => isElementDisabled(listRef.current[index]),
		onMatch(index) {
			if (open) store.set("activeIndex", index);
			else setValue(valuesRef.current[index], createChangeEventDetails(none));
		},
		onTyping(typing) {
			typingRef.current = typing;
		}
	});
	const mergedTriggerProps = import_react$13.useMemo(() => mergeProps(typeahead.reference, listNavigation.reference, dismiss.reference, click.reference, interactionTypeProps), [
		click.reference,
		typeahead.reference,
		listNavigation.reference,
		dismiss.reference,
		interactionTypeProps
	]);
	const popupProps = import_react$13.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, typeahead.floating, listNavigation.floating, dismiss.floating), [
		typeahead.floating,
		listNavigation.floating,
		dismiss.floating
	]);
	const itemProps = listNavigation.item ?? EMPTY_OBJECT;
	store.useContextCallback("setValue", setValue);
	store.useContextCallback("setOpen", setOpen);
	store.useContextCallback("handleScrollArrowVisibility", handleScrollArrowVisibility);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	useOnFirstRender(() => {
		store.update({
			popupProps,
			triggerProps: mergedTriggerProps
		});
	});
	store.useSyncedValues({
		id: generatedId,
		modal,
		multiple,
		value,
		open,
		mounted,
		transitionStatus,
		popupProps,
		triggerProps: mergedTriggerProps,
		items,
		itemToStringLabel,
		itemToStringValue,
		isItemEqualToValue,
		openMethod: renderedOpenMethod
	});
	const rootPropsContextValue = import_react$13.useMemo(() => ({
		disabled,
		readOnly,
		required,
		multiple,
		highlightItemOnHover,
		itemProps
	}), [
		disabled,
		readOnly,
		required,
		multiple,
		highlightItemOnHover,
		itemProps
	]);
	const ref = useMergedRefs(inputRef, validation.inputRef);
	const hiddenInputName = multiple ? void 0 : name;
	const hiddenInputs = import_react$13.useMemo(() => {
		if (!multiple || !Array.isArray(value) || !name) return null;
		return value.map((v) => {
			const currentSerializedValue = stringifyAsValue(v, itemToStringValue);
			return /*#__PURE__*/ (0, import_jsx_runtime$5.jsx)("input", {
				type: "hidden",
				form,
				name,
				value: currentSerializedValue,
				disabled
			}, currentSerializedValue);
		});
	}, [
		multiple,
		value,
		form,
		name,
		itemToStringValue,
		disabled
	]);
	return /*#__PURE__*/ (0, import_jsx_runtime$5.jsxs)(SelectRootContext.Provider, {
		value: store,
		children: [
			/*#__PURE__*/ (0, import_jsx_runtime$5.jsx)(SelectRootPropsContext.Provider, {
				value: rootPropsContextValue,
				children: /*#__PURE__*/ (0, import_jsx_runtime$5.jsx)(SelectFloatingContext.Provider, {
					value: floatingContext,
					children
				})
			}),
			/*#__PURE__*/ (0, import_jsx_runtime$5.jsx)("input", {
				...validation.getValidationProps(disabled, {
					onFocus() {
						store.state.triggerElement?.focus({ focusVisible: true });
					},
					onChange(event) {
						if (event.nativeEvent.defaultPrevented || disabled || readOnly) return;
						const nextValue = event.currentTarget.value;
						const details = createChangeEventDetails(none, event.nativeEvent);
						function handleChange() {
							if (multiple) return;
							const nextValueLower = nextValue.toLowerCase();
							let matchingIndex = valuesRef.current.findIndex((candidate) => stringifyAsValue(candidate, itemToStringValue).toLowerCase() === nextValueLower || stringifyAsLabel(candidate, itemToStringLabel).toLowerCase() === nextValueLower);
							if (matchingIndex === -1) matchingIndex = valuesRef.current.findIndex((_, index) => {
								const renderedLabel = labelsRef.current[index];
								return renderedLabel != null && renderedLabel.toLowerCase() === nextValueLower;
							});
							const matchingValue = valuesRef.current[matchingIndex];
							if (matchingValue != null) setValue(matchingValue, details);
						}
						store.set("forceMount", true);
						queueMicrotask(handleChange);
					}
				}),
				id: generatedId && hiddenInputName == null ? `${generatedId}-hidden-input` : void 0,
				form,
				name: hiddenInputName,
				autoComplete,
				value: serializedValue,
				disabled,
				required: required && !(multiple && hasSelectedValue),
				readOnly,
				ref,
				style: name ? visuallyHiddenInput : visuallyHidden,
				tabIndex: -1,
				"aria-hidden": true,
				suppressHydrationWarning: true
			}),
			hiddenInputs
		]
	});
}
var import_react$13, import_jsx_runtime$5;
function init_SelectRoot() {
	return (init_SelectRoot = __esmMin((() => {
		import_react$13 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_visuallyHidden();
		init_useMergedRefs();
		init_useRefWithInit();
		init_useOnFirstRender();
		init_usePreviousValue();
		init_useControlled();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_useValueAsRef();
		init_ReactStore();
		init_empty();
		init_useClick(), init_useDismiss(), init_useFloatingRootContext(), init_useListNavigation(), init_useTypeahead();
		init_SelectRootContext();
		init_FieldRootContext();
		init_useRegisterFieldControl();
		init_useLabelableId();
		init_useTransitionStatus();
		init_store();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useOpenChangeComplete();
		init_FormContext();
		init_resolveValueLabel();
		init_itemEquality();
		init_useValueChanged();
		init_useOpenInteractionType();
		init_scrollEdges();
		init_popupStoreUtils();
		init_mergeProps();
		import_jsx_runtime$5 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/trigger/SelectTriggerDataAttributes.mjs
var popupSide;
function init_SelectTriggerDataAttributes() {
	return (init_SelectTriggerDataAttributes = __esmMin((() => {
		init_popupStateMapping();
		popupSide = "data-popup-side";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/trigger/SelectTrigger.mjs
var import_react$12, SELECTED_DELAY, stateAttributesMapping$2, SelectTrigger;
function init_SelectTrigger() {
	return (init_SelectTrigger = __esmMin((() => {
		import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useTimeout();
		init_useValueAsRef();
		init_SelectRootContext();
		init_FieldRootContext();
		init_LabelableContext();
		init_popupStateMapping();
		init_constants$1();
		init_useRenderElement();
		init_getPseudoElementBounds();
		init_shadowDom(), init_element();
		init_mergeProps();
		init_useButton();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useLabelableId();
		init_SelectTriggerDataAttributes();
		SELECTED_DELAY = 400;
		stateAttributesMapping$2 = {
			...pressableTriggerOpenStateMapping,
			...fieldValidityMapping,
			popupSide: (side) => side ? { [popupSide]: side } : null,
			value: () => null
		};
		SelectTrigger = /*#__PURE__*/ import_react$12.forwardRef(function SelectTrigger(componentProps, forwardedRef) {
			const { render, className, id: idProp, disabled: disabledProp = false, nativeButton = true, style, ...elementProps } = componentProps;
			const { setTouched, setFocused, validationMode, validation, state: fieldState, disabled: fieldDisabled } = useFieldRootContext();
			const { labelId: fieldLabelId } = useLabelableContext();
			const store = useSelectRootContext();
			const { readOnly, required, disabled: selectDisabled } = useSelectRootPropsContext();
			const disabled = fieldDisabled || selectDisabled || disabledProp;
			const open = store.useState("open");
			const mounted = store.useState("mounted");
			const value = store.useState("value");
			const triggerProps = store.useState("triggerProps");
			const positionerElement = store.useState("positionerElement");
			const listElement = store.useState("listElement");
			const popupSideValue = store.useState("popupSide");
			const rootId = store.useState("id");
			const selectLabelId = store.useState("labelId");
			const hasSelectedValue = store.useState("hasSelectedValue");
			const popupSide = mounted && positionerElement ? popupSideValue : null;
			const id = idProp ?? rootId;
			const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, selectLabelId);
			useLabelableId({ id: idProp });
			const positionerRef = useValueAsRef(positionerElement);
			const triggerRef = import_react$12.useRef(null);
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				native: nativeButton
			});
			const setTriggerElement = store.useStateSetter("triggerElement");
			const timeoutFocus = useTimeout();
			const timeoutMouseDown = useTimeout();
			const selectedDelayTimeout = useTimeout();
			import_react$12.useEffect(() => {
				if (open) {
					selectedDelayTimeout.start(SELECTED_DELAY, () => {
						store.context.selectionRef.current.allowUnselectedMouseUp = true;
						store.context.selectionRef.current.allowSelectedMouseUp = true;
					});
					return () => {
						selectedDelayTimeout.clear();
					};
				}
				store.context.selectionRef.current = {
					allowSelectedMouseUp: false,
					allowUnselectedMouseUp: false,
					dragY: 0
				};
				timeoutMouseDown.clear();
			}, [
				open,
				store,
				timeoutMouseDown,
				selectedDelayTimeout
			]);
			const mergedProps = mergeProps(triggerProps, {
				id,
				role: "combobox",
				"aria-expanded": open,
				"aria-haspopup": "listbox",
				"aria-controls": open ? listElement?.id ?? getFloatingFocusElement(positionerElement)?.id : void 0,
				"aria-labelledby": ariaLabelledBy,
				"aria-readonly": readOnly || void 0,
				"aria-required": required || void 0,
				tabIndex: disabled ? -1 : 0,
				onFocus(event) {
					setFocused(true);
					if (open && store.context.alignItemWithTriggerActiveRef.current) store.context.setOpen(false, createChangeEventDetails(none, event.nativeEvent));
					timeoutFocus.start(0, () => {
						store.set("forceMount", true);
					});
				},
				onBlur(event) {
					if (contains(positionerElement, event.relatedTarget)) return;
					setTouched(true);
					setFocused(false);
					if (validationMode === "onBlur") validation.commit(value);
				},
				onMouseDown(event) {
					if (open) return;
					const doc = ownerDocument(event.currentTarget);
					function handleMouseUp(mouseEvent) {
						if (!triggerRef.current) return;
						const mouseUpTarget = mouseEvent.target;
						if (contains(triggerRef.current, mouseUpTarget) || contains(positionerRef.current, mouseUpTarget)) return;
						if (isMouseWithinBounds(mouseEvent, triggerRef.current)) return;
						store.context.setOpen(false, createChangeEventDetails(cancelOpen, mouseEvent));
					}
					timeoutMouseDown.start(0, () => {
						doc.addEventListener("mouseup", handleMouseUp, { once: true });
					});
				}
			}, elementProps, getButtonProps);
			const props = validation.getValidationProps(disabled, mergedProps);
			props.role = "combobox";
			const state = {
				...fieldState,
				open,
				disabled,
				value,
				readOnly,
				popupSide,
				placeholder: !hasSelectedValue
			};
			return useRenderElement("button", componentProps, {
				ref: [
					forwardedRef,
					triggerRef,
					buttonRef,
					setTriggerElement
				],
				state,
				stateAttributesMapping: stateAttributesMapping$2,
				props
			});
		});
		SelectTrigger.displayName = "SelectTrigger";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/value/SelectValue.mjs
var import_react$11, stateAttributesMapping$1, SelectValue;
function init_SelectValue() {
	return (init_SelectValue = __esmMin((() => {
		import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_SelectRootContext();
		init_resolveValueLabel();
		stateAttributesMapping$1 = { value: () => null };
		SelectValue = /*#__PURE__*/ import_react$11.forwardRef(function SelectValue(componentProps, forwardedRef) {
			const { className, render, children: childrenProp, placeholder, style, ...elementProps } = componentProps;
			const store = useSelectRootContext();
			const value = store.useState("value");
			const items = store.useState("items");
			const itemToStringLabel = store.useState("itemToStringLabel");
			const hasSelectedValue = store.useState("hasSelectedValue");
			const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
			const hasNullLabel = store.useState("hasNullItemLabel", shouldCheckNullItemLabel);
			const state = {
				value,
				placeholder: !hasSelectedValue
			};
			let children = null;
			if (typeof childrenProp === "function") children = childrenProp(value);
			else if (childrenProp != null) children = childrenProp;
			else if (shouldCheckNullItemLabel && !hasNullLabel) children = placeholder;
			else if (Array.isArray(value)) children = resolveMultipleLabels(value, items, itemToStringLabel);
			else children = resolveSelectedLabel(value, items, itemToStringLabel);
			return useRenderElement("span", componentProps, {
				state,
				ref: [forwardedRef, store.context.valueRef],
				props: [{ children }, elementProps],
				stateAttributesMapping: stateAttributesMapping$1
			});
		});
		SelectValue.displayName = "SelectValue";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/portal/SelectPortal.mjs
var import_react$10, import_jsx_runtime$4, SelectPortal;
function init_SelectPortal() {
	return (init_SelectPortal = __esmMin((() => {
		import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_FloatingPortal();
		init_SelectRootContext();
		import_jsx_runtime$4 = require_jsx_runtime();
		SelectPortal = /*#__PURE__*/ import_react$10.forwardRef(function SelectPortal(portalProps, forwardedRef) {
			const store = useSelectRootContext();
			const mounted = store.useState("mounted");
			const forceMount = store.useState("forceMount");
			if (!(mounted || forceMount)) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime$4.jsx)(FloatingPortal, {
				ref: forwardedRef,
				...portalProps
			});
		});
		SelectPortal.displayName = "SelectPortal";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/positioner/SelectPositionerContext.mjs
function useSelectPositionerContext() {
	const context = import_react$9.useContext(SelectPositionerContext);
	if (!context) throw new Error("Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>.");
	return context;
}
var import_react$9, SelectPositionerContext;
function init_SelectPositionerContext() {
	return (init_SelectPositionerContext = __esmMin((() => {
		import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
		SelectPositionerContext = /*#__PURE__*/ import_react$9.createContext(void 0);
		SelectPositionerContext.displayName = "SelectPositionerContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/popup/utils.mjs
function clearStyles(element, originalStyles) {
	if (element) Object.assign(element.style, originalStyles);
}
var LIST_FUNCTIONAL_STYLES;
function init_utils() {
	return (init_utils = __esmMin((() => {
		LIST_FUNCTIONAL_STYLES = {
			position: "relative",
			maxHeight: "100%",
			overflowX: "hidden",
			overflowY: "auto"
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
var import_react$8, import_jsx_runtime$3, FIXED, SelectPositioner;
function init_SelectPositioner() {
	return (init_SelectPositioner = __esmMin((() => {
		import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_inertValue();
		init_useIsoLayoutEffect();
		init_useStableCallback();
		init_SelectRootContext();
		init_CompositeList();
		init_useAnchorPositioning();
		init_SelectPositionerContext();
		init_InternalBackdrop();
		init_constants();
		init_utils();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_itemEquality();
		init_usePositioner();
		init_useAnchoredPopupScrollLock();
		import_jsx_runtime$3 = require_jsx_runtime();
		FIXED = { position: "fixed" };
		SelectPositioner = /*#__PURE__*/ import_react$8.forwardRef(function SelectPositioner(componentProps, forwardedRef) {
			const { anchor, className, render, positionMethod, side, align, sideOffset, alignOffset, collisionBoundary = "clipping-ancestors", collisionPadding, arrowPadding, sticky, disableAnchorTracking, alignItemWithTrigger = true, collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
			const store = useSelectRootContext();
			const floatingRootContext = useSelectFloatingContext();
			const open = store.useState("open");
			const mounted = store.useState("mounted");
			const modal = store.useState("modal");
			const value = store.useState("value");
			const openMethod = store.useState("openMethod");
			const positionerElement = store.useState("positionerElement");
			const triggerElement = store.useState("triggerElement");
			const isItemEqualToValue = store.useState("isItemEqualToValue");
			const transitionStatus = store.useState("transitionStatus");
			const scrollUpArrowRef = import_react$8.useRef(null);
			const scrollDownArrowRef = import_react$8.useRef(null);
			const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] = import_react$8.useState(alignItemWithTrigger);
			const alignItemWithTriggerActive = mounted && controlledAlignItemWithTrigger && openMethod !== "touch";
			if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) setControlledAlignItemWithTrigger(alignItemWithTrigger);
			import_react$8.useImperativeHandle(store.context.alignItemWithTriggerActiveRef, () => alignItemWithTriggerActive);
			useAnchoredPopupScrollLock((alignItemWithTriggerActive || modal) && open, openMethod === "touch", positionerElement, triggerElement);
			const positioning = useAnchorPositioning({
				anchor,
				floatingRootContext,
				positionMethod,
				mounted,
				side,
				sideOffset,
				align,
				alignOffset,
				arrowPadding,
				collisionBoundary,
				collisionPadding,
				sticky,
				disableAnchorTracking: disableAnchorTracking ?? alignItemWithTriggerActive,
				collisionAvoidance,
				keepMounted: true
			});
			const renderedSide = alignItemWithTriggerActive ? "none" : positioning.side;
			const positionerStyles = alignItemWithTriggerActive ? FIXED : positioning.positionerStyles;
			const state = {
				open,
				side: renderedSide,
				align: positioning.align,
				anchorHidden: positioning.anchorHidden
			};
			useIsoLayoutEffect(() => {
				store.set("popupSide", positioning.side);
			}, [store, positioning.side]);
			const setPositionerElement = store.useStateSetter("positionerElement");
			const element = usePositioner(componentProps, state, {
				styles: positionerStyles,
				transitionStatus,
				props: elementProps,
				refs: [forwardedRef, setPositionerElement],
				hidden: !mounted,
				inert: !open
			});
			const prevMapSizeRef = import_react$8.useRef(0);
			const onMapChange = useStableCallback((map) => {
				if (store.context.valuesRef.current.length === 0) return;
				const prevSize = prevMapSizeRef.current;
				prevMapSizeRef.current = map.size;
				const eventDetails = createChangeEventDetails(none);
				if (prevSize !== 0 && !store.state.multiple && value !== null) {
					if (findItemIndex(store.context.valuesRef.current, value, isItemEqualToValue) === -1) {
						const initialSelectedValue = store.context.initialValueRef.current;
						const nextValue = initialSelectedValue != null && findItemIndex(store.context.valuesRef.current, initialSelectedValue, isItemEqualToValue) !== -1 ? initialSelectedValue : null;
						store.context.setValue(nextValue, eventDetails);
						if (nextValue === null) {
							store.set("selectedIndex", null);
							store.context.selectedItemTextRef.current = null;
						}
					}
				}
				if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
					const nextValue = value.filter((selectedItemValue) => findItemIndex(store.context.valuesRef.current, selectedItemValue, isItemEqualToValue) !== -1);
					if (nextValue.length !== value.length) {
						store.context.setValue(nextValue, eventDetails);
						if (nextValue.length === 0) {
							store.set("selectedIndex", null);
							store.context.selectedItemTextRef.current = null;
						}
					}
				}
				if (open && alignItemWithTriggerActive) {
					store.update({
						scrollUpArrowVisible: false,
						scrollDownArrowVisible: false
					});
					const stylesToClear = { height: "" };
					clearStyles(positionerElement, stylesToClear);
					clearStyles(store.context.popupRef.current, stylesToClear);
				}
			});
			const contextValue = import_react$8.useMemo(() => ({
				...positioning,
				side: renderedSide,
				alignItemWithTriggerActive,
				setControlledAlignItemWithTrigger,
				scrollUpArrowRef,
				scrollDownArrowRef
			}), [
				positioning,
				renderedSide,
				alignItemWithTriggerActive,
				setControlledAlignItemWithTrigger
			]);
			return /*#__PURE__*/ (0, import_jsx_runtime$3.jsx)(CompositeList, {
				elementsRef: store.context.listRef,
				labelsRef: store.context.labelsRef,
				onMapChange,
				children: /*#__PURE__*/ (0, import_jsx_runtime$3.jsxs)(SelectPositionerContext.Provider, {
					value: contextValue,
					children: [mounted && modal && /*#__PURE__*/ (0, import_jsx_runtime$3.jsx)(InternalBackdrop, {
						inert: inertValue(!open),
						cutout: triggerElement
					}), element]
				})
			});
		});
		SelectPositioner.displayName = "SelectPositioner";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/positioner/SelectPositionerCssVars.mjs
var transformOrigin;
function init_SelectPositionerCssVars() {
	return (init_SelectPositionerCssVars = __esmMin((() => {
		transformOrigin = "--transform-origin";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/popup/SelectPopup.mjs
function getMaxPopupHeight(popupStyles) {
	const maxHeightStyle = popupStyles.maxHeight;
	return maxHeightStyle.endsWith("px") ? parseFloat(maxHeightStyle) || Infinity : Infinity;
}
function getMaxScrollTop(scroller) {
	return getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
}
function getScale(element) {
	return platform.getScale(element);
}
function normalizeSize(size, axis, scale) {
	return size / scale[axis];
}
function normalizeRect(rect, scale) {
	return rectToClientRect({
		x: normalizeSize(rect.x, "x", scale),
		y: normalizeSize(rect.y, "y", scale),
		width: normalizeSize(rect.width, "x", scale),
		height: normalizeSize(rect.height, "y", scale)
	});
}
function unsetTransformStyles(popupElement) {
	const { style } = popupElement;
	const originalStyles = {};
	for (const [property, value] of TRANSFORM_STYLE_RESETS) {
		originalStyles[property] = style.getPropertyValue(property);
		style.setProperty(property, value, "important");
	}
	return () => {
		for (const [property] of TRANSFORM_STYLE_RESETS) {
			const originalValue = originalStyles[property];
			if (originalValue) style.setProperty(property, originalValue);
			else style.removeProperty(property);
		}
	};
}
var import_react$7, import_jsx_runtime$2, stateAttributesMapping, SelectPopup, TRANSFORM_STYLE_RESETS;
function init_SelectPopup() {
	return (init_SelectPopup = __esmMin((() => {
		import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_floating_ui_utils();
		init_engine();
		init_useStableCallback();
		init_floating_ui_utils_dom();
		init_useIsoLayoutEffect();
		init_useAnimationFrame();
		init_FloatingFocusManager(), init_floating_ui_dom();
		init_SelectRootContext();
		init_popupStateMapping();
		init_SelectPositionerContext();
		init_styles();
		init_stateAttributesMapping();
		init_useOpenChangeComplete();
		init_useRenderElement();
		init_utils();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_ToolbarRootContext();
		init_composite();
		init_getDisabledMountTransitionStyles();
		init_scrollEdges();
		init_CSPContext();
		init_DirectionContext();
		init_SelectPositionerCssVars();
		import_jsx_runtime$2 = require_jsx_runtime();
		stateAttributesMapping = {
			...popupStateMapping,
			...transitionStatusMapping
		};
		SelectPopup = /*#__PURE__*/ import_react$7.forwardRef(function SelectPopup(componentProps, forwardedRef) {
			const { render, className, style, finalFocus, ...elementProps } = componentProps;
			const store = useSelectRootContext();
			const { multiple, readOnly, highlightItemOnHover } = useSelectRootPropsContext();
			const floatingRootContext = useSelectFloatingContext();
			const { side, align, alignItemWithTriggerActive, isPositioned, setControlledAlignItemWithTrigger } = useSelectPositionerContext();
			const insideToolbar = useToolbarRootContext(true) != null;
			const direction = useDirection();
			const { nonce, disableStyleElements } = useCSPContext();
			const id = store.useState("id");
			const open = store.useState("open");
			const openMethod = store.useState("openMethod");
			const mounted = store.useState("mounted");
			const popupProps = store.useState("popupProps");
			const transitionStatus = store.useState("transitionStatus");
			const triggerElement = store.useState("triggerElement");
			const positionerElement = store.useState("positionerElement");
			const listElement = store.useState("listElement");
			const reachedMaxHeightRef = import_react$7.useRef(false);
			const initialPlacedRef = import_react$7.useRef(false);
			const originalPositionerStylesRef = import_react$7.useRef({});
			const scrollArrowFrame = useAnimationFrame();
			const handleScroll = useStableCallback((scroller) => {
				if (!positionerElement || !store.context.popupRef.current || !initialPlacedRef.current) return;
				const isTopPositioned = positionerElement.style.top === "0px";
				const isBottomPositioned = positionerElement.style.bottom === "0px";
				if (reachedMaxHeightRef.current || !alignItemWithTriggerActive || !isTopPositioned && !isBottomPositioned) {
					store.context.handleScrollArrowVisibility(scroller);
					return;
				}
				const scale = getScale(positionerElement);
				const currentHeight = normalizeSize(positionerElement.getBoundingClientRect().height, "y", scale);
				const doc = ownerDocument(positionerElement);
				const win = getWindow(positionerElement);
				const positionerStyles = win.getComputedStyle(positionerElement);
				const marginTop = parseFloat(positionerStyles.marginTop);
				const marginBottom = parseFloat(positionerStyles.marginBottom);
				const maxPopupHeight = getMaxPopupHeight(win.getComputedStyle(store.context.popupRef.current));
				const maxAvailableHeight = Math.min(doc.documentElement.clientHeight - marginTop - marginBottom, maxPopupHeight);
				const scrollTop = scroller.scrollTop;
				const maxScrollTop = getMaxScrollTop(scroller);
				let nextScrollTop = null;
				const setHeight = (height) => {
					positionerElement.style.height = `${height}px`;
				};
				const diff = isTopPositioned ? maxScrollTop - scrollTop : scrollTop;
				const nextHeight = Math.min(currentHeight + diff, maxAvailableHeight);
				if (diff <= 1) {
					const heightDelta = clamp(diff, 0, maxAvailableHeight - currentHeight);
					if (heightDelta > 0) setHeight(currentHeight + heightDelta);
					scroller.scrollTop = isTopPositioned ? maxScrollTop : 0;
					if (maxAvailableHeight - (currentHeight + heightDelta) <= 1) reachedMaxHeightRef.current = true;
					store.context.handleScrollArrowVisibility(scroller);
					return;
				}
				if (maxAvailableHeight - nextHeight > 1) nextScrollTop = isTopPositioned ? Infinity : 0;
				else if (isBottomPositioned && scrollTop < maxScrollTop) nextScrollTop = scrollTop - (diff - (currentHeight + diff - maxAvailableHeight));
				const nextPositionerHeight = Math.ceil(nextHeight);
				if (nextPositionerHeight !== 0) setHeight(nextPositionerHeight);
				if (nextScrollTop != null) {
					const target = clamp(nextScrollTop, 0, getMaxScrollTop(scroller));
					if (Math.abs(scroller.scrollTop - target) > 1) scroller.scrollTop = target;
				}
				if (nextPositionerHeight >= maxAvailableHeight - 1) reachedMaxHeightRef.current = true;
				store.context.handleScrollArrowVisibility(scroller);
			});
			import_react$7.useImperativeHandle(store.context.scrollHandlerRef, () => handleScroll, [handleScroll]);
			useOpenChangeComplete({
				open,
				ref: store.context.popupRef,
				onComplete() {
					if (open) store.context.onOpenChangeComplete(true);
				}
			});
			const state = {
				open,
				transitionStatus,
				side,
				align
			};
			useIsoLayoutEffect(() => {
				if (!positionerElement || !store.context.popupRef.current || Object.keys(originalPositionerStylesRef.current).length) return;
				originalPositionerStylesRef.current = {
					top: positionerElement.style.top || "0",
					left: positionerElement.style.left || "0",
					right: positionerElement.style.right,
					height: positionerElement.style.height,
					bottom: positionerElement.style.bottom,
					minHeight: positionerElement.style.minHeight,
					maxHeight: positionerElement.style.maxHeight,
					marginTop: positionerElement.style.marginTop,
					marginBottom: positionerElement.style.marginBottom
				};
			}, [store, positionerElement]);
			useIsoLayoutEffect(() => {
				if (open || alignItemWithTriggerActive) return;
				initialPlacedRef.current = false;
				reachedMaxHeightRef.current = false;
				clearStyles(positionerElement, originalPositionerStylesRef.current);
			}, [
				open,
				alignItemWithTriggerActive,
				positionerElement
			]);
			useIsoLayoutEffect(() => {
				const popupElement = store.context.popupRef.current;
				if (!open || !triggerElement || !positionerElement || !popupElement || alignItemWithTriggerActive && !isPositioned || store.state.transitionStatus === "ending") return;
				initialPlacedRef.current = true;
				popupElement.style.removeProperty(transformOrigin);
				if (!alignItemWithTriggerActive) {
					scrollArrowFrame.request(() => store.context.handleScrollArrowVisibility(listElement || popupElement));
					return;
				}
				const restoreTransformStyles = unsetTransformStyles(popupElement);
				try {
					let textElement = store.context.selectedItemTextRef.current;
					if (!textElement?.isConnected) textElement = !store.select("hasSelectedValue") && store.context.firstItemTextRef.current?.isConnected ? store.context.firstItemTextRef.current : null;
					const valueElement = store.context.valueRef.current;
					const win = getWindow(positionerElement);
					const positionerStyles = win.getComputedStyle(positionerElement);
					const popupStyles = win.getComputedStyle(popupElement);
					const doc = ownerDocument(triggerElement);
					const scale = getScale(triggerElement);
					const triggerRect = normalizeRect(triggerElement.getBoundingClientRect(), scale);
					const positionerRect = normalizeRect(positionerElement.getBoundingClientRect(), scale);
					const triggerHeight = triggerRect.height;
					const scroller = listElement || popupElement;
					const scrollHeight = scroller.scrollHeight;
					const borderBottom = parseFloat(popupStyles.borderBottomWidth);
					const marginTop = parseFloat(positionerStyles.marginTop) || 10;
					const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
					const minHeight = parseFloat(positionerStyles.minHeight) || 100;
					const maxPopupHeight = getMaxPopupHeight(popupStyles);
					const paddingLeft = 5;
					const paddingRight = 5;
					const triggerCollisionThreshold = 20;
					const viewportHeight = doc.documentElement.clientHeight - marginTop - marginBottom;
					const viewportWidth = doc.documentElement.clientWidth;
					const availableSpaceBeneathTrigger = viewportHeight - triggerRect.bottom + triggerHeight;
					let textRect;
					let alignedLeft = direction === "rtl" ? triggerRect.right - positionerRect.width : triggerRect.left;
					let offsetY = 0;
					if (textElement && valueElement) {
						const valueRect = normalizeRect(valueElement.getBoundingClientRect(), scale);
						textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
						alignedLeft = positionerRect.left + (direction === "rtl" ? valueRect.right - textRect.right : valueRect.left - textRect.left);
						const valueCenterFromTriggerTop = valueRect.top - triggerRect.top + valueRect.height / 2;
						offsetY = textRect.top - positionerRect.top + textRect.height / 2 - valueCenterFromTriggerTop;
					}
					const idealHeight = availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
					let height = Math.min(viewportHeight, idealHeight);
					const maxHeight = viewportHeight - marginTop - marginBottom;
					const scrollTop = idealHeight - height;
					const maxRight = viewportWidth - paddingRight;
					positionerElement.style.left = `${clamp(alignedLeft, paddingLeft, maxRight - positionerRect.width)}px`;
					positionerElement.style.height = `${height}px`;
					positionerElement.style.maxHeight = "none";
					positionerElement.style.marginTop = `${marginTop}px`;
					positionerElement.style.marginBottom = `${marginBottom}px`;
					popupElement.style.height = "100%";
					const maxScrollTop = getMaxScrollTop(scroller);
					const isTopPositioned = scrollTop >= maxScrollTop - 1;
					if (isTopPositioned) height = Math.min(viewportHeight, positionerRect.height) - (scrollTop - maxScrollTop);
					const fallbackToAlignPopupToTrigger = triggerRect.top < triggerCollisionThreshold || triggerRect.bottom > viewportHeight - triggerCollisionThreshold || Math.ceil(height) + 1 < Math.min(scrollHeight, minHeight);
					const isPinchZoomed = (win.visualViewport?.scale ?? 1) !== 1 && webkit;
					if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
						clearStyles(positionerElement, originalPositionerStylesRef.current);
						setControlledAlignItemWithTrigger(false);
						return;
					}
					const initialHeight = Math.max(minHeight, height);
					if (isTopPositioned) {
						const topOffset = Math.max(0, viewportHeight - idealHeight);
						positionerElement.style.top = positionerRect.height >= maxHeight ? "0" : `${topOffset}px`;
						positionerElement.style.height = `${height}px`;
						scroller.scrollTop = getMaxScrollTop(scroller);
					} else {
						positionerElement.style.bottom = "0";
						scroller.scrollTop = scrollTop;
					}
					if (textRect) {
						const popupTop = positionerRect.top;
						const popupHeight = positionerRect.height;
						const textCenterY = textRect.top + textRect.height / 2;
						const clampedY = clamp(popupHeight > 0 ? (textCenterY - popupTop) / popupHeight * 100 : 50, 0, 100);
						popupElement.style.setProperty(transformOrigin, `50% ${clampedY}%`);
					}
					if (initialHeight === viewportHeight || height >= maxPopupHeight) reachedMaxHeightRef.current = true;
					store.context.handleScrollArrowVisibility(scroller);
					if (highlightItemOnHover && store.state.selectedIndex === null && store.state.activeIndex === null && store.context.listRef.current[0] != null) store.set("activeIndex", 0);
				} finally {
					restoreTransformStyles();
				}
			}, [
				store,
				open,
				positionerElement,
				triggerElement,
				alignItemWithTriggerActive,
				setControlledAlignItemWithTrigger,
				scrollArrowFrame,
				listElement,
				highlightItemOnHover,
				direction,
				isPositioned
			]);
			import_react$7.useEffect(() => {
				if (!alignItemWithTriggerActive || !positionerElement || !open) return;
				const win = getWindow(positionerElement);
				function handleResize(event) {
					store.context.setOpen(false, createChangeEventDetails(windowResize, event));
				}
				return addEventListener(win, "resize", handleResize);
			}, [
				store,
				alignItemWithTriggerActive,
				positionerElement,
				open
			]);
			const defaultProps = {
				...listElement ? { role: "presentation" } : {
					role: "listbox",
					"aria-multiselectable": multiple || void 0,
					"aria-readonly": readOnly || void 0,
					id: `${id}-list`
				},
				onKeyDown(event) {
					if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
				},
				onScroll(event) {
					if (listElement) return;
					handleScroll(event.currentTarget);
				},
				...alignItemWithTriggerActive && { style: listElement ? { height: "100%" } : LIST_FUNCTIONAL_STYLES },
				className: !listElement && alignItemWithTriggerActive ? styleDisableScrollbar.className : void 0
			};
			const element = useRenderElement("div", componentProps, {
				ref: [forwardedRef, store.context.popupRef],
				state,
				stateAttributesMapping,
				props: [
					popupProps,
					defaultProps,
					getDisabledMountTransitionStyles(transitionStatus),
					elementProps
				]
			});
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsxs)(import_react$7.Fragment, { children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(FloatingFocusManager, {
				context: floatingRootContext,
				modal: false,
				disabled: !mounted,
				openInteractionType: openMethod,
				returnFocus: finalFocus,
				restoreFocus: true,
				children: element
			})] });
		});
		SelectPopup.displayName = "SelectPopup";
		TRANSFORM_STYLE_RESETS = [
			["transform", "none"],
			["scale", "1"],
			["translate", "0 0"]
		];
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/list/SelectList.mjs
var import_react$6, SelectList;
function init_SelectList() {
	return (init_SelectList = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_SelectRootContext();
		init_SelectPositionerContext();
		init_useRenderElement();
		init_styles();
		init_utils();
		SelectList = /*#__PURE__*/ import_react$6.forwardRef(function SelectList(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const store = useSelectRootContext();
			const { multiple, readOnly } = useSelectRootPropsContext();
			const { alignItemWithTriggerActive } = useSelectPositionerContext();
			const hasScrollArrows = store.useState("hasScrollArrows");
			const openMethod = store.useState("openMethod");
			const defaultProps = {
				id: `${store.useState("id")}-list`,
				role: "listbox",
				"aria-multiselectable": multiple || void 0,
				"aria-readonly": readOnly || void 0,
				onScroll(event) {
					store.context.scrollHandlerRef.current?.(event.currentTarget);
				},
				...alignItemWithTriggerActive && { style: LIST_FUNCTIONAL_STYLES },
				className: hasScrollArrows && openMethod !== "touch" ? styleDisableScrollbar.className : void 0
			};
			const setListElement = store.useStateSetter("listElement");
			return useRenderElement("div", componentProps, {
				ref: [forwardedRef, setListElement],
				props: [defaultProps, elementProps]
			});
		});
		SelectList.displayName = "SelectList";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/item/SelectItemContext.mjs
function useSelectItemContext() {
	const context = import_react$5.useContext(SelectItemContext);
	if (!context) throw new Error("Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>.");
	return context;
}
var import_react$5, SelectItemContext;
function init_SelectItemContext() {
	return (init_SelectItemContext = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		SelectItemContext = /*#__PURE__*/ import_react$5.createContext(void 0);
		SelectItemContext.displayName = "SelectItemContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/item/SelectItem.mjs
var import_react$4, import_jsx_runtime$1, SelectItem;
function init_SelectItem() {
	return (init_SelectItem = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_SelectRootContext();
		init_useCompositeListItem();
		init_useRenderElement();
		init_SelectItemContext();
		init_useButton();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_itemEquality();
		init_event();
		import_jsx_runtime$1 = require_jsx_runtime();
		SelectItem = /*#__PURE__*/ import_react$4.memo(/*#__PURE__*/ import_react$4.forwardRef(function SelectItem(componentProps, forwardedRef) {
			const { render, className, style, value: itemValue = null, label, disabled: disabledProp = false, nativeButton = false, ...elementProps } = componentProps;
			const textRef = import_react$4.useRef(null);
			const listItem = useCompositeListItem({
				guess: true,
				label,
				textRef
			});
			const store = useSelectRootContext();
			const { itemProps, multiple, disabled: selectDisabled, readOnly } = useSelectRootPropsContext();
			const disabled = selectDisabled || disabledProp;
			const highlighted = store.useState("isActive", listItem.index);
			const open = store.useState("open");
			const selected = store.useState("isSelected", itemValue);
			const selectedByFocus = store.useState("isSelectedByFocus", listItem.index);
			const isItemEqualToValue = store.useState("isItemEqualToValue");
			const index = listItem.index;
			const itemRef = import_react$4.useRef(null);
			useIsoLayoutEffect(() => {
				const values = store.context.valuesRef.current;
				values[index] = itemValue;
				return () => {
					delete values[index];
				};
			}, [
				index,
				itemValue,
				store
			]);
			useIsoLayoutEffect(() => {
				const selectedValue = store.state.value;
				const currentIndex = store.state.selectedIndex;
				let nextIndex = currentIndex;
				let claims;
				if (multiple && Array.isArray(selectedValue)) {
					nextIndex = resolveSelectedIndex(index, itemValue, store.context.valuesRef.current, selectedValue, isItemEqualToValue, currentIndex);
					claims = nextIndex === index;
					if (index === currentIndex && !claims) store.context.selectedItemTextRef.current = null;
				} else {
					claims = selectedValue !== void 0 && compareItemEquality(itemValue, selectedValue, isItemEqualToValue);
					if (claims) nextIndex = index;
				}
				store.set("selectedIndex", nextIndex);
				if (claims && textRef.current) store.context.selectedItemTextRef.current = textRef.current;
			}, [
				index,
				multiple,
				isItemEqualToValue,
				store,
				itemValue
			]);
			const pointerTypeRef = import_react$4.useRef("mouse");
			const allowMouseSelectionRef = import_react$4.useRef(false);
			const { getButtonProps, buttonRef } = useButton({
				disabled,
				focusableWhenDisabled: true,
				native: nativeButton,
				composite: true
			});
			const state = {
				disabled,
				selected,
				highlighted
			};
			function commitSelection(event) {
				if (selectDisabled || readOnly) return;
				const selectedValue = store.state.value;
				if (multiple) {
					const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
					const nextValue = selected ? removeItem(currentValue, itemValue, isItemEqualToValue) : [...currentValue, itemValue];
					store.context.setValue(nextValue, createChangeEventDetails(itemPress, event));
				} else {
					store.context.setValue(itemValue, createChangeEventDetails(itemPress, event));
					store.context.setOpen(false, createChangeEventDetails(itemPress, event));
				}
			}
			function resetDragMovement() {
				store.context.selectionRef.current.dragY = 0;
			}
			const defaultProps = {
				role: "option",
				"aria-selected": selected,
				tabIndex: open && highlighted ? 0 : -1,
				onKeyDown(event) {
					store.set("activeIndex", index);
					if (event.key === " " && store.context.typingRef.current) event.preventDefault();
				},
				onClick(event) {
					const isMouseClick = pointerTypeRef.current !== "touch";
					const clickPointerType = event.nativeEvent.pointerType;
					const isVirtualMouseClick = isMouseClick && isVirtualClick(event.nativeEvent) && (clickPointerType !== void 0 || highlighted);
					const isInvalidMouseClick = isMouseClick && !isVirtualMouseClick && !allowMouseSelectionRef.current;
					allowMouseSelectionRef.current = false;
					if (disabled || isInvalidMouseClick) return;
					commitSelection(event.nativeEvent);
				},
				onPointerEnter(event) {
					pointerTypeRef.current = event.pointerType;
				},
				onPointerMove(event) {
					if (event.pointerType === "mouse" && event.buttons === 1) {
						const selection = store.context.selectionRef.current;
						selection.dragY += event.movementY;
						if (selection.dragY ** 2 >= 64) selection.allowUnselectedMouseUp = true;
					}
				},
				onPointerDown(event) {
					pointerTypeRef.current = event.pointerType;
					allowMouseSelectionRef.current = true;
					resetDragMovement();
				},
				onMouseUp() {
					resetDragMovement();
					if (disabled || pointerTypeRef.current === "touch") return;
					if (allowMouseSelectionRef.current) return;
					const disallowSelectedMouseUp = !store.context.selectionRef.current.allowSelectedMouseUp && selected;
					const disallowUnselectedMouseUp = !store.context.selectionRef.current.allowUnselectedMouseUp && !selected;
					if (disallowSelectedMouseUp || disallowUnselectedMouseUp) return;
					allowMouseSelectionRef.current = true;
					itemRef.current?.click();
					allowMouseSelectionRef.current = false;
				}
			};
			const element = useRenderElement("div", componentProps, {
				ref: [
					buttonRef,
					forwardedRef,
					listItem.ref,
					itemRef
				],
				state,
				props: [
					itemProps,
					defaultProps,
					elementProps,
					getButtonProps
				]
			});
			const contextValue = import_react$4.useMemo(() => ({
				selected,
				index,
				textRef,
				selectedByFocus
			}), [
				selected,
				index,
				textRef,
				selectedByFocus
			]);
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(SelectItemContext.Provider, {
				value: contextValue,
				children: element
			});
		}));
		SelectItem.displayName = "SelectItem";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/item-text/SelectItemText.mjs
var import_react$3, SelectItemText;
function init_SelectItemText() {
	return (init_SelectItemText = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_SelectRootContext();
		init_SelectItemContext();
		init_useRenderElement();
		SelectItemText = /*#__PURE__*/ import_react$3.memo(/*#__PURE__*/ import_react$3.forwardRef(function SelectItemText(componentProps, forwardedRef) {
			const { index, textRef, selectedByFocus } = useSelectItemContext();
			const store = useSelectRootContext();
			const { render, className, style, ...elementProps } = componentProps;
			const localRef = import_react$3.useCallback((node) => {
				if (!node) return;
				if (index === 0) store.context.firstItemTextRef.current = node;
				if (selectedByFocus) store.context.selectedItemTextRef.current = node;
			}, [
				store,
				index,
				selectedByFocus
			]);
			return useRenderElement("div", componentProps, {
				ref: [
					localRef,
					forwardedRef,
					textRef
				],
				props: elementProps
			});
		}));
		SelectItemText.displayName = "SelectItemText";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/group/SelectGroupContext.mjs
function useSelectGroupContext() {
	const context = import_react$2.useContext(SelectGroupContext);
	if (context === void 0) throw new Error("Base UI: SelectGroupContext is missing. SelectGroup parts must be placed within <Select.Group>.");
	return context;
}
var import_react$2, SelectGroupContext;
function init_SelectGroupContext() {
	return (init_SelectGroupContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		SelectGroupContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		SelectGroupContext.displayName = "SelectGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/group/SelectGroup.mjs
var import_react$1, import_jsx_runtime, SelectGroup;
function init_SelectGroup() {
	return (init_SelectGroup = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_SelectGroupContext();
		init_useRenderElement();
		import_jsx_runtime = require_jsx_runtime();
		SelectGroup = /*#__PURE__*/ import_react$1.forwardRef(function SelectGroup(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const [labelId, setLabelId] = import_react$1.useState();
			const contextValue = import_react$1.useMemo(() => ({
				labelId,
				setLabelId
			}), [labelId, setLabelId]);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [{
					role: "group",
					"aria-labelledby": labelId
				}, elementProps]
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(SelectGroupContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		SelectGroup.displayName = "SelectGroup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/group-label/SelectGroupLabel.mjs
var import_react, SelectGroupLabel;
function init_SelectGroupLabel() {
	return (init_SelectGroupLabel = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useIsoLayoutEffect();
		init_useBaseUiId();
		init_SelectGroupContext();
		init_useRenderElement();
		SelectGroupLabel = /*#__PURE__*/ import_react.forwardRef(function SelectGroupLabel(componentProps, forwardedRef) {
			const { render, className, style, id: idProp, ...elementProps } = componentProps;
			const { setLabelId } = useSelectGroupContext();
			const id = useBaseUiId(idProp);
			useIsoLayoutEffect(() => {
				setLabelId(id);
				return () => {
					setLabelId((currentId) => currentId === id ? void 0 : currentId);
				};
			}, [id, setLabelId]);
			return useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: [{
					id,
					"aria-hidden": true
				}, elementProps]
			});
		});
		SelectGroupLabel.displayName = "SelectGroupLabel";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/select/separator/SelectSeparator.mjs
var SelectSeparator;
function init_SelectSeparator() {
	return (init_SelectSeparator = __esmMin((() => {
		init_ListboxSeparator();
		SelectSeparator = ListboxSeparator;
	})))();
}
//#endregion
export { SelectRoot as C, init_SelectTrigger as S, SelectPortal as _, SelectGroup as a, init_SelectValue as b, init_SelectItemText as c, SelectList as d, init_SelectList as f, init_SelectPositioner as g, SelectPositioner as h, init_SelectGroupLabel as i, SelectItem as l, init_SelectPopup as m, init_SelectSeparator as n, init_SelectGroup as o, SelectPopup as p, SelectGroupLabel as r, SelectItemText as s, SelectSeparator as t, init_SelectItem as u, init_SelectPortal as v, init_SelectRoot as w, SelectTrigger as x, SelectValue as y };
