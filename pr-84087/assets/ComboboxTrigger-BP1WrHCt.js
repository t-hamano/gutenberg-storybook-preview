import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as useRenderElement, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { n as init_useTimeout, r as useTimeout } from "./useTimeout-B8xVAQjx.js";
import { S as none, b as listNavigation, i as cancelOpen, p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails } from "./createBaseUIEventDetails-CC__nZlv.js";
import { n as useButton, t as init_useButton } from "./useButton-C38YKBDn.js";
import { n as ownerDocument } from "./owner-Bl-6Ntf5.js";
import { T as stopEvent, y as init_event } from "./DirectionContext-DbaSbWPN.js";
import { o as init_useClick, s as useClick } from "./useOpenInteractionType-KvNpLDr_.js";
import { i as init_shadowDom, n as contains, r as getTarget } from "./shadowDom-CFrNFfBF.js";
import { i as useTypeahead, n as isMouseWithinBounds, r as init_useTypeahead, t as init_getPseudoElementBounds } from "./getPseudoElementBounds-CdF7OSq_.js";
import { A as usePopupSide, H as useComboboxInputValueContext, L as getComboboxPopupId, M as triggerStateAttributesMapping, O as init_parts, U as useComboboxRootContext, V as useComboboxFloatingContext, j as init_stateAttributesMapping, k as useListEmpty, z as init_ComboboxRootContext } from "./ComboboxEmpty-a6JwtoZy.js";
import { a as useLabelableContext, f as init_FieldRootContext, i as init_LabelableContext, n as useLabelableId, p as useFieldRootContext, t as init_useLabelableId } from "./useLabelableId-DZRYsuBw.js";
import { n as resolveAriaLabelledBy } from "./resolveAriaLabelledBy-B3qlBkhY.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/combobox/trigger/ComboboxTrigger.mjs
var import_react, ComboboxTrigger;
function init_ComboboxTrigger() {
	return (init_ComboboxTrigger = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useStableCallback();
		init_useTimeout();
		init_useRenderElement();
		init_useButton();
		init_ComboboxRootContext();
		init_stateAttributesMapping();
		init_FieldRootContext();
		init_LabelableContext();
		init_event(), init_shadowDom();
		init_getPseudoElementBounds();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_useClick(), init_useTypeahead();
		init_useLabelableId();
		init_parts();
		ComboboxTrigger = /*#__PURE__*/ import_react.forwardRef(function ComboboxTrigger(componentProps, forwardedRef) {
			const { render, className, nativeButton = true, disabled: disabledProp = false, id: idProp, style, ...elementProps } = componentProps;
			const { state: fieldState, disabled: fieldDisabled, setTouched, setFocused, validationMode, validation } = useFieldRootContext();
			const { labelId: fieldLabelId } = useLabelableContext();
			const store = useComboboxRootContext();
			const selectionMode = store.useState("selectionMode");
			const comboboxDisabled = store.useState("disabled");
			const readOnly = store.useState("readOnly");
			const required = store.useState("required");
			const positionerElement = store.useState("positionerElement");
			const listElement = store.useState("listElement");
			const storedPopupId = store.useState("popupId");
			const triggerProps = store.useState("triggerProps");
			const inputInsidePopup = store.useState("inputInsidePopup");
			const rootId = store.useState("id");
			const comboboxLabelId = store.useState("labelId");
			const open = store.useState("open");
			const selectedValue = store.useState("selectedValue");
			const activeIndex = store.useState("activeIndex");
			const selectedIndex = store.useState("selectedIndex");
			const hasSelectedValue = store.useState("hasSelectedValue");
			const floatingRootContext = useComboboxFloatingContext();
			const inputValue = useComboboxInputValueContext();
			const focusTimeout = useTimeout();
			const disabled = fieldDisabled || comboboxDisabled || disabledProp;
			const listEmpty = useListEmpty();
			const popupSide = usePopupSide(store);
			useLabelableId({ id: inputInsidePopup ? idProp : void 0 });
			const id = inputInsidePopup ? idProp ?? rootId : idProp;
			const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, comboboxLabelId);
			let ariaControls;
			if (open && inputInsidePopup) ariaControls = storedPopupId ?? getComboboxPopupId(rootId);
			else if (open) ariaControls = listElement?.id;
			const currentPointerTypeRef = import_react.useRef("");
			function trackPointerType(event) {
				currentPointerTypeRef.current = event.pointerType;
			}
			const { reference: triggerTypeaheadProps } = useTypeahead(floatingRootContext, {
				enabled: !open && !readOnly && !comboboxDisabled && selectionMode === "single",
				listRef: store.context.labelsRef,
				activeIndex,
				selectedIndex,
				onMatch(index) {
					const nextSelectedValue = store.context.valuesRef.current[index];
					if (nextSelectedValue !== void 0) store.context.setSelectedValue(nextSelectedValue, createChangeEventDetails(none));
				}
			});
			const { reference: triggerClickProps } = useClick(floatingRootContext, {
				enabled: !comboboxDisabled,
				event: "mousedown"
			});
			const { buttonRef, getButtonProps } = useButton({
				native: nativeButton,
				disabled
			});
			const state = {
				...fieldState,
				readOnly,
				open,
				disabled,
				popupSide,
				listEmpty,
				placeholder: selectionMode === "none" ? false : !hasSelectedValue
			};
			const setTriggerElement = useStableCallback((element) => {
				store.set("triggerElement", element);
			});
			return useRenderElement("button", componentProps, {
				ref: [
					forwardedRef,
					buttonRef,
					setTriggerElement
				],
				state,
				props: [
					triggerProps,
					triggerClickProps,
					triggerTypeaheadProps,
					{
						id,
						tabIndex: inputInsidePopup ? 0 : -1,
						role: inputInsidePopup ? "combobox" : void 0,
						"aria-expanded": open,
						"aria-haspopup": inputInsidePopup ? "dialog" : "listbox",
						"aria-controls": ariaControls,
						"aria-required": inputInsidePopup ? required || void 0 : void 0,
						"aria-readonly": inputInsidePopup ? readOnly || void 0 : void 0,
						"aria-labelledby": ariaLabelledBy,
						onPointerDown: trackPointerType,
						onPointerEnter: trackPointerType,
						onFocus() {
							setFocused(true);
							if (disabled) return;
							focusTimeout.start(0, store.context.forceMount);
						},
						onBlur(event) {
							if (contains(positionerElement, event.relatedTarget)) return;
							setTouched(true);
							setFocused(false);
							if (validationMode === "onBlur") {
								const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
								validation.commit(valueToValidate);
							}
						},
						onMouseDown(event) {
							if (disabled) return;
							if (!inputInsidePopup) floatingRootContext.set("domReferenceElement", event.currentTarget);
							store.context.forceMount();
							if (currentPointerTypeRef.current !== "touch") {
								store.context.inputRef.current?.focus();
								if (!inputInsidePopup) event.preventDefault();
							}
							if (open) return;
							const doc = ownerDocument(event.currentTarget);
							function handleMouseUp(mouseEvent) {
								const currentTriggerElement = store.state.triggerElement;
								if (!currentTriggerElement) return;
								const mouseUpTarget = getTarget(mouseEvent);
								const positioner = store.state.positionerElement;
								const list = store.state.listElement;
								if (contains(currentTriggerElement, mouseUpTarget) || contains(positioner, mouseUpTarget) || contains(list, mouseUpTarget)) return;
								if (isMouseWithinBounds(mouseEvent, currentTriggerElement)) return;
								store.context.setOpen(false, createChangeEventDetails(cancelOpen, mouseEvent));
							}
							if (inputInsidePopup) doc.addEventListener("mouseup", handleMouseUp, { once: true });
						},
						onKeyDown(event) {
							if (event.key === "ArrowDown" || event.key === "ArrowUp") {
								stopEvent(event);
								store.context.setOpen(true, createChangeEventDetails(listNavigation, event.nativeEvent));
								store.context.inputRef.current?.focus();
							}
						}
					},
					validation.getValidationProps(disabled, elementProps),
					getButtonProps
				],
				stateAttributesMapping: triggerStateAttributesMapping
			});
		});
		ComboboxTrigger.displayName = "ComboboxTrigger";
	})))();
}
//#endregion
export { init_ComboboxTrigger as n, ComboboxTrigger as t };
