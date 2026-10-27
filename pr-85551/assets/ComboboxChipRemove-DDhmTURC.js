import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_react_dom } from "./react-dom-Cvcx0Gdb.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { f as init_empty, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_CompositeList, n as useCompositeListItem, r as CompositeList, t as init_useCompositeListItem } from "./useCompositeListItem-DCUBNr8F.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, _ as listNavigation, g as keyboard, n as chipRemovePress, u as init_reason_parts, y as none } from "./reason-parts-0ghxNVBE.js";
import { n as useButton, t as init_useButton } from "./useButton-jJ_7clep.js";
import { E as stopEvent, b as init_event, n as init_DirectionContext, r as useDirection } from "./DirectionContext-BIiMId1B.js";
import { d as findItemIndex, p as init_itemEquality } from "./resolveValueLabel-BniYaQWN.js";
import { C as ComboboxChipsContext, D as getIndexAfterChipRemoval, E as getChipNavigationKeys, O as init_parts, T as useComboboxChipsContext, U as useComboboxRootContext, w as init_ComboboxChipsContext, z as init_ComboboxRootContext } from "./ComboboxEmpty-B5deBkxx.js";
import { n as init_getHighlightReason, t as getHighlightReason } from "./getHighlightReason-oyOUFqFP.js";
import { a as handleInputPress, o as init_handleInputPress } from "./ComboboxClear-aWVtjvgR.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/chips/ComboboxChips.mjs
var import_react$3, import_jsx_runtime$1, ComboboxChips;
function init_ComboboxChips() {
	return (init_ComboboxChips = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		init_useRenderElement();
		init_ComboboxChipsContext();
		init_CompositeList();
		init_ComboboxRootContext();
		init_handleInputPress();
		import_jsx_runtime$1 = require_jsx_runtime();
		ComboboxChips = /*#__PURE__*/ import_react$3.forwardRef(function ComboboxChips(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const store = useComboboxRootContext();
			const hasSelectionChips = store.useState("hasSelectionChips");
			const chipsRef = import_react$3.useRef([]);
			const element = useRenderElement("div", componentProps, {
				ref: [forwardedRef, store.context.chipsContainerRef],
				props: [
					hasSelectionChips ? { role: "toolbar" } : EMPTY_OBJECT,
					{ onMouseDown(event) {
						handleInputPress(event, store, store.state.disabled);
					} },
					elementProps
				]
			});
			const contextValue = import_react$3.useMemo(() => ({ chipsRef }), []);
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(ComboboxChipsContext.Provider, {
				value: contextValue,
				children: /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(CompositeList, {
					elementsRef: chipsRef,
					children: element
				})
			});
		});
		ComboboxChips.displayName = "ComboboxChips";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/chip/ComboboxChipContext.mjs
function useComboboxChipContext() {
	const context = import_react$2.useContext(ComboboxChipContext);
	if (!context) throw new Error("Base UI: ComboboxChipContext is missing. ComboboxChip parts must be placed within <Combobox.Chip>.");
	return context;
}
var import_react$2, ComboboxChipContext;
function init_ComboboxChipContext() {
	return (init_ComboboxChipContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		ComboboxChipContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		ComboboxChipContext.displayName = "ComboboxChipContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/chip/ComboboxChip.mjs
var import_react$1, import_react_dom, import_jsx_runtime, ComboboxChip;
function init_ComboboxChip() {
	return (init_ComboboxChip = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
		init_useRenderElement();
		init_ComboboxChipsContext();
		init_ComboboxRootContext();
		init_useCompositeListItem();
		init_ComboboxChipContext();
		init_event();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_DirectionContext();
		init_parts();
		import_jsx_runtime = require_jsx_runtime();
		ComboboxChip = /*#__PURE__*/ import_react$1.forwardRef(function ComboboxChip(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const store = useComboboxRootContext();
			const { chipsRef } = useComboboxChipsContext();
			const direction = useDirection();
			const disabled = store.useState("disabled");
			const readOnly = store.useState("readOnly");
			const selectedValue = store.useState("selectedValue");
			const { ref, index } = useCompositeListItem();
			function handleKeyDown(event) {
				let nextIndex = index;
				const [previousChipKey, nextChipKey] = getChipNavigationKeys(direction);
				if (event.key === previousChipKey) {
					event.preventDefault();
					if (index > 0) nextIndex = index - 1;
					else nextIndex = void 0;
				} else if (event.key === nextChipKey) {
					event.preventDefault();
					if (index < chipsRef.current.length - 1) nextIndex = index + 1;
					else nextIndex = void 0;
				} else if (event.key === "Backspace" || event.key === "Delete") {
					nextIndex = getIndexAfterChipRemoval(index, selectedValue.length);
					stopEvent(event);
					import_react_dom.flushSync(() => {
						store.context.setIndices({
							activeIndex: null,
							selectedIndex: null,
							type: keyboard,
							event: event.nativeEvent
						});
						store.context.setSelectedValue(selectedValue.filter((_, i) => i !== index), createChangeEventDetails(none, event.nativeEvent));
					});
				} else if (event.key === "Enter" || event.key === " ") {
					stopEvent(event);
					nextIndex = void 0;
				} else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
					stopEvent(event);
					import_react_dom.flushSync(() => {
						store.context.setOpen(true, createChangeEventDetails(listNavigation, event.nativeEvent));
					});
					nextIndex = void 0;
				} else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) nextIndex = void 0;
				return nextIndex;
			}
			const element = useRenderElement("div", componentProps, {
				ref: [forwardedRef, ref],
				state: { disabled },
				props: [{
					tabIndex: -1,
					"aria-disabled": disabled || void 0,
					"aria-readonly": readOnly || void 0,
					onKeyDown(event) {
						if (disabled || readOnly) return;
						const nextIndex = handleKeyDown(event);
						if (nextIndex === void 0) store.context.inputRef.current?.focus();
						else chipsRef.current[nextIndex]?.focus();
					}
				}, elementProps]
			});
			const contextValue = import_react$1.useMemo(() => ({ index }), [index]);
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ComboboxChipContext.Provider, {
				value: contextValue,
				children: element
			});
		});
		ComboboxChip.displayName = "ComboboxChip";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/combobox/chip-remove/ComboboxChipRemove.mjs
var import_react, ComboboxChipRemove;
function init_ComboboxChipRemove() {
	return (init_ComboboxChipRemove = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		init_ComboboxRootContext();
		init_ComboboxChipContext();
		init_useButton();
		init_event();
		init_createBaseUIEventDetails();
		init_reason_parts();
		init_getHighlightReason();
		init_itemEquality();
		ComboboxChipRemove = /*#__PURE__*/ import_react.forwardRef(function ComboboxChipRemove(componentProps, forwardedRef) {
			const { render, className, disabled: disabledProp = false, nativeButton = true, style, ...elementProps } = componentProps;
			const store = useComboboxRootContext();
			const { index } = useComboboxChipContext();
			const comboboxDisabled = store.useState("disabled");
			const readOnly = store.useState("readOnly");
			const selectedValue = store.useState("selectedValue");
			const isItemEqualToValue = store.useState("isItemEqualToValue");
			const disabled = comboboxDisabled || disabledProp;
			const { buttonRef, getButtonProps } = useButton({
				native: nativeButton,
				disabled: disabled || readOnly,
				focusableWhenDisabled: true
			});
			const state = { disabled };
			function clearActiveIndexForRemovedItem(removedItem, event) {
				const activeIndex = store.state.activeIndex;
				if (activeIndex == null) return;
				const removedIndex = findItemIndex(store.context.valuesRef.current, removedItem, isItemEqualToValue);
				if (removedIndex !== -1 && activeIndex === removedIndex) store.context.setIndices({
					activeIndex: null,
					type: getHighlightReason(event),
					event
				});
			}
			function removeChip(event) {
				const eventDetails = createChangeEventDetails(chipRemovePress, event.nativeEvent);
				const removedItem = selectedValue[index];
				clearActiveIndexForRemovedItem(removedItem, event.nativeEvent);
				store.context.setSelectedValue(selectedValue.filter((_, i) => i !== index), eventDetails);
				store.context.inputRef.current?.focus();
				return eventDetails;
			}
			return useRenderElement("button", componentProps, {
				ref: [forwardedRef, buttonRef],
				state,
				props: [
					{
						tabIndex: -1,
						onMouseDown(event) {
							event.preventDefault();
						},
						onClick(event) {
							if (!removeChip(event).isPropagationAllowed) event.stopPropagation();
						},
						onKeyDown(event) {
							if (event.key === "Enter" || event.key === " ") {
								if (!removeChip(event).isPropagationAllowed) stopEvent(event);
							}
						}
					},
					elementProps,
					getButtonProps
				]
			});
		});
		ComboboxChipRemove.displayName = "ComboboxChipRemove";
	})))();
}
//#endregion
export { ComboboxChips as a, init_ComboboxChip as i, init_ComboboxChipRemove as n, init_ComboboxChips as o, ComboboxChip as r, ComboboxChipRemove as t };
