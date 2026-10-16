import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping, t as init_useTransitionStatus } from "./useTransitionStatus-DtGN_KnE.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, m as inputPress, r as clearPress, u as init_reason_parts } from "./reason-parts-0ghxNVBE.js";
import { f as isElement, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { n as useButton, t as init_useButton } from "./useButton-jJ_7clep.js";
import { Mt as triggerOpenStateMapping, Ot as init_popupStateMapping, bt as init_element, xt as isInteractiveElement } from "./DirectionProvider-ijBUoTP5.js";
import { i as getTarget, r as contains } from "./shadowDom-C1kYxCnm.js";
import { A as usePopupSide, H as useComboboxInputValueContext, M as triggerStateAttributesMapping, O as init_parts, U as useComboboxRootContext, j as init_stateAttributesMapping$1, k as useListEmpty, z as init_ComboboxRootContext } from "./ComboboxEmpty-B5deBkxx.js";
import { n as init_getHighlightReason, t as getHighlightReason } from "./getHighlightReason-oyOUFqFP.js";
import { h as useFieldRootContext, m as init_FieldRootContext } from "./useSetFieldFocused-BBT5GDr4.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/utils/handleInputPress.mjs
function handleInputPress(event, store, disabled, shouldIgnoreTarget) {
	if (event.baseUIHandlerPrevented) return;
	const target = getTarget(event.nativeEvent);
	const targetElement = isElement(target) ? target : null;
	if (targetElement !== event.currentTarget && (shouldIgnoreTarget?.(targetElement) || isInteractiveElement(targetElement))) return;
	event.preventDefault();
	if (disabled) return;
	store.context.inputRef.current?.focus();
	if (store.state.openOnInputClick) store.context.setOpen(true, createChangeEventDetails(inputPress, event.nativeEvent));
}
function init_handleInputPress() {
	return (init_handleInputPress = __esmMin((() => {
		init_floating_ui_utils_dom();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_element();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/input-group/ComboboxInputGroup.mjs
var import_react$1, ComboboxInputGroup;
function init_ComboboxInputGroup() {
	return (init_ComboboxInputGroup = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_useRenderElement();
		init_FieldRootContext();
		init_ComboboxRootContext();
		init_stateAttributesMapping$1();
		init_handleInputPress();
		init_parts();
		init_element();
		ComboboxInputGroup = /*#__PURE__*/ import_react$1.forwardRef(function ComboboxInputGroup(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const { state: fieldState } = useFieldRootContext();
			const store = useComboboxRootContext();
			const open = store.useState("open");
			const comboboxDisabled = store.useState("disabled");
			const readOnly = store.useState("readOnly");
			const hasSelectedValue = store.useState("hasSelectedValue");
			const selectionMode = store.useState("selectionMode");
			const popupSide = usePopupSide(store);
			const disabled = comboboxDisabled;
			const listEmpty = useListEmpty();
			const placeholder = selectionMode === "none" ? false : !hasSelectedValue;
			const state = {
				...fieldState,
				open,
				disabled,
				readOnly,
				popupSide,
				listEmpty,
				placeholder
			};
			const setInputGroupElement = useStableCallback((element) => {
				store.set("inputGroupElement", element);
			});
			return useRenderElement("div", componentProps, {
				ref: [forwardedRef, setInputGroupElement],
				props: [{
					role: "group",
					onMouseDown(event) {
						handleInputPress(event, store, disabled, (target) => {
							return contains(store.context.chipsContainerRef.current, target);
						});
					}
				}, elementProps],
				state,
				stateAttributesMapping: triggerStateAttributesMapping
			});
		});
		ComboboxInputGroup.displayName = "ComboboxInputGroup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/clear/ComboboxClear.mjs
var import_react, stateAttributesMapping, ComboboxClear;
function init_ComboboxClear() {
	return (init_ComboboxClear = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_ComboboxRootContext();
		init_useRenderElement();
		init_useButton();
		init_FieldRootContext();
		init_useTransitionStatus();
		init_stateAttributesMapping();
		init_useOpenChangeComplete();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_getHighlightReason();
		init_popupStateMapping();
		stateAttributesMapping = {
			...transitionStatusMapping,
			...triggerOpenStateMapping
		};
		ComboboxClear = /*#__PURE__*/ import_react.forwardRef(function ComboboxClear(componentProps, forwardedRef) {
			const { render, className, disabled: disabledProp = false, nativeButton = true, keepMounted = false, style, ...elementProps } = componentProps;
			const { disabled: fieldDisabled } = useFieldRootContext();
			const store = useComboboxRootContext();
			const selectionMode = store.useState("selectionMode");
			const comboboxDisabled = store.useState("disabled");
			const readOnly = store.useState("readOnly");
			const open = store.useState("open");
			const selectedValue = store.useState("selectedValue");
			const hasSelectionChips = store.useState("hasSelectionChips");
			const inputValue = useComboboxInputValueContext();
			let visible = false;
			if (selectionMode === "none") visible = inputValue !== "";
			else if (selectionMode === "single") visible = selectedValue != null;
			else visible = hasSelectionChips;
			const disabled = fieldDisabled || comboboxDisabled || disabledProp;
			const { buttonRef, getButtonProps } = useButton({
				native: nativeButton,
				disabled
			});
			const { mounted, transitionStatus, setMounted } = useTransitionStatus(visible);
			const state = {
				disabled,
				visible,
				open,
				transitionStatus
			};
			useOpenChangeComplete({
				open: visible,
				ref: store.context.clearRef,
				onComplete() {
					if (!visible) setMounted(false);
				}
			});
			const element = useRenderElement("button", componentProps, {
				state,
				ref: [
					forwardedRef,
					buttonRef,
					store.context.clearRef
				],
				props: [
					{
						tabIndex: -1,
						children: "x",
						onMouseDown(event) {
							event.preventDefault();
						},
						onClick(event) {
							if (disabled || readOnly) return;
							const type = getHighlightReason(event);
							store.context.setInputValue("", createChangeEventDetails(clearPress, event.nativeEvent));
							if (selectionMode !== "none") {
								store.context.setSelectedValue(Array.isArray(selectedValue) ? [] : null, createChangeEventDetails(clearPress, event.nativeEvent));
								store.context.setIndices({
									activeIndex: null,
									selectedIndex: null,
									type,
									event: event.nativeEvent
								});
							} else store.context.setIndices({
								activeIndex: null,
								type,
								event: event.nativeEvent
							});
							store.context.inputRef.current?.focus();
						}
					},
					elementProps,
					getButtonProps
				],
				stateAttributesMapping
			});
			if (!(keepMounted || mounted)) return null;
			return element;
		});
		ComboboxClear.displayName = "ComboboxClear";
	})))();
}
//#endregion
export { handleInputPress as a, init_ComboboxInputGroup as i, init_ComboboxClear as n, init_handleInputPress as o, ComboboxInputGroup as r, ComboboxClear as t };
