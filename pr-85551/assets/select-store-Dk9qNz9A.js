import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { O as withDefaultButtonType, m as init_composite_store, n as init_composite_item, p as createCompositeStore, r as useCompositeItem } from "./composite-item-JNO_FG0t.js";
import { A as defaultValue, Dt as queueBeforeEvent, G as getPopupItemRole, K as getPopupRole, N as disabledFromProps, Pt as toArray, S as useUpdateEffect, a as init_dist, c as useAttribute, f as useId, g as useMergeRefs, ht as isOpeningInNewTab, i as forwardRef, l as useBooleanEvent, n as createHook, nt as init_dist$1, o as memo, ot as isDownloading, rt as invariant, t as createElement, u as useEvent, vt as isSelfTarget, w as useWrapElement, x as useTransactionState } from "./dist-BNTCqa48.js";
import { a as useStore, c as useStoreStateObject, f as init_dist$3, g as setup, i as init_dist$2, l as batch, m as omit, o as useStoreProps, p as mergeStore, s as useStoreState, u as createStore, v as sync, y as throwOnConflictingProps } from "./CDh2UhnG-BRjcGYWx.js";
import { i as useCompositeStoreProps, o as init_composite, r as useCompositeStoreOptions, s as useComposite, t as init_composite_store$1 } from "./composite-store-1UKEKg_X.js";
import { E as isHidden, T as init_disclosure_content, _ as init_visually_hidden, a as init_popover, b as init_popover_context, g as getVisuallyHiddenStyle, i as init_popover_store, l as createDialogComponent, n as usePopoverStoreProps, o as usePopover, r as createPopoverStore, s as getBasePlacement, t as init_popover_store$1, u as init_CEV0PLZp, x as usePopoverContext } from "./popover-store-D4s7hWFV.js";
import { l as useComboboxProviderContext, s as init_combobox_context } from "./combobox-context-B50OTF68.js";
import { a as useSelectContext, i as init_select_context, n as SelectItemCheckedContext, o as useSelectProviderContext, r as SelectScopedContextProvider, s as useSelectScopedContext, t as SelectHeadingContext } from "./select-context-X0BsZHAk.js";
import { a as init_popover_disclosure, n as useCheckboxCheck, o as usePopoverDisclosure, t as init_checkbox_check } from "./checkbox-check-BhstORmG.js";
import { a as init_composite_typeahead, n as init_composite_hover, o as useCompositeTypeahead, r as useCompositeHover } from "./composite-hover-Dw66ed1y.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/popover/popover-disclosure-arrow.js
var import_react$4, import_jsx_runtime$3, TagName$7, pointsMap, usePopoverDisclosureArrow;
function init_popover_disclosure_arrow() {
	return (init_popover_disclosure_arrow = __esmMin((() => {
		init_popover_context();
		init_dist();
		init_dist$1();
		import_react$4 = require_react();
		import_jsx_runtime$3 = require_jsx_runtime();
		init_dist$2();
		TagName$7 = "span";
		pointsMap = {
			top: "4,10 8,6 12,10",
			right: "6,4 10,8 6,12",
			bottom: "4,6 8,10 12,6",
			left: "10,4 6,8 10,12"
		};
		usePopoverDisclosureArrow = createHook(function usePopoverDisclosureArrow({ store, placement, ...props }) {
			const context = usePopoverContext();
			store = store || context;
			invariant(store, "PopoverDisclosureArrow must be wrapped in a PopoverDisclosure component.");
			const position = useStoreState(store, ["placement"], (state) => placement || state.placement);
			const dir = getBasePlacement(position);
			const points = pointsMap[dir];
			props = {
				children: (0, import_react$4.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("svg", {
					display: "block",
					fill: "none",
					stroke: "currentColor",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 1.5,
					viewBox: "0 0 16 16",
					height: "1em",
					width: "1em",
					children: /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)("polyline", { points })
				}), [points]),
				"aria-hidden": true,
				...props,
				style: {
					width: "1em",
					height: "1em",
					pointerEvents: "none",
					...props.style
				}
			};
			return props;
		});
		forwardRef(function PopoverDisclosureArrow(props) {
			const htmlProps = usePopoverDisclosureArrow(props);
			return createElement(TagName$7, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select-arrow.js
var TagName$6, useSelectArrow, SelectArrow;
function init_select_arrow() {
	return (init_select_arrow = __esmMin((() => {
		init_popover_disclosure_arrow();
		init_select_context();
		init_dist();
		TagName$6 = "span";
		useSelectArrow = createHook(function useSelectArrow({ store, ...props }) {
			const context = useSelectContext();
			store = store || context;
			props = usePopoverDisclosureArrow({
				store,
				...props
			});
			return props;
		});
		SelectArrow = forwardRef(function SelectArrow(props) {
			const htmlProps = useSelectArrow(props);
			return createElement(TagName$6, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select.js
function getSelectedValues(select) {
	return Array.from(select.selectedOptions).map((option) => option.value);
}
function nextWithValue(store, next) {
	return () => {
		const visitedIds = /* @__PURE__ */ new Set();
		let nextId = next();
		while (nextId) {
			const nextItem = store.item(nextId);
			if (!nextItem) return;
			if (nextItem.value != null) return nextItem.id;
			if (visitedIds.has(nextId)) return;
			visitedIds.add(nextId);
			nextId = next({ activeId: nextId });
		}
	};
}
var import_react$3, import_jsx_runtime$2, TagName$5, useSelect, Select;
function init_select() {
	return (init_select = __esmMin((() => {
		init_popover_disclosure();
		init_composite_typeahead();
		init_visually_hidden();
		init_select_context();
		init_select_arrow();
		init_dist();
		init_dist$1();
		import_react$3 = require_react();
		import_jsx_runtime$2 = require_jsx_runtime();
		init_dist$2();
		TagName$5 = "button";
		useSelect = createHook(function useSelect({ store, name, form, required, showOnKeyDown = true, moveOnKeyDown = true, toggleOnPress = true, toggleOnClick = toggleOnPress, ...props }) {
			const context = useSelectProviderContext();
			store = store || context;
			invariant(store, "Select must receive a `store` prop or be wrapped in a SelectProvider component.");
			const onKeyDownProp = props.onKeyDown;
			const disabledProp = disabledFromProps(props);
			const showOnKeyDownProp = useBooleanEvent(showOnKeyDown);
			const moveOnKeyDownProp = useBooleanEvent(moveOnKeyDown);
			const placement = useStoreState(store, "placement");
			const dir = getBasePlacement(placement);
			const value = useStoreState(store, "value");
			const multiSelectable = Array.isArray(value);
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (event.defaultPrevented) return;
				if (!store) return;
				const { orientation, items, activeId } = store.getState();
				const isVertical = orientation !== "horizontal";
				const isHorizontal = orientation !== "vertical";
				const isGrid = !!items.find((item) => !item.disabled && item.value != null)?.rowId;
				const getId = {
					ArrowUp: (isGrid || isVertical) && nextWithValue(store, store.up),
					ArrowRight: (isGrid || isHorizontal) && nextWithValue(store, store.next),
					ArrowDown: (isGrid || isVertical) && nextWithValue(store, store.down),
					ArrowLeft: (isGrid || isHorizontal) && nextWithValue(store, store.previous)
				}[event.key];
				if (getId && moveOnKeyDownProp(event)) {
					event.preventDefault();
					store.move(getId());
				}
				const isTopOrBottom = dir === "top" || dir === "bottom";
				if ({
					ArrowDown: isTopOrBottom,
					ArrowUp: isTopOrBottom,
					ArrowLeft: dir === "left",
					ArrowRight: dir === "right"
				}[event.key] && showOnKeyDownProp(event)) {
					event.preventDefault();
					store.move(activeId);
					queueBeforeEvent(event.currentTarget, "keyup", store.show);
				}
			});
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SelectScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			const [autofill, setAutofill] = (0, import_react$3.useState)(false);
			const nativeSelectChangedRef = (0, import_react$3.useRef)(false);
			(0, import_react$3.useEffect)(() => {
				const nativeSelectChanged = nativeSelectChangedRef.current;
				nativeSelectChangedRef.current = false;
				if (nativeSelectChanged) return;
				setAutofill(false);
			}, [value]);
			const labelElement = useStoreState(store, "labelElement");
			useAttribute(labelElement, "id");
			const labelId = labelElement?.id;
			const label = props["aria-label"];
			const labelledBy = props["aria-labelledby"] || labelId;
			const items = useStoreState(store, ["items"], (state) => {
				if (!name) return;
				return state.items;
			});
			const values = (0, import_react$3.useMemo)(() => {
				const itemValues = items?.flatMap((item) => item.value ?? []);
				return [...new Set(itemValues)];
			}, [items]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(import_jsx_runtime$2.Fragment, { children: [!!name && /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)("select", {
				style: getVisuallyHiddenStyle(),
				tabIndex: -1,
				"aria-hidden": true,
				"aria-label": label,
				"aria-labelledby": label != null ? void 0 : labelledBy,
				name,
				form,
				required,
				disabled: disabledProp,
				value,
				multiple: multiSelectable,
				onFocus: () => store?.getState().selectElement?.focus(),
				onChange: (event) => {
					nativeSelectChangedRef.current = true;
					setAutofill(true);
					store?.setValue(multiSelectable ? getSelectedValues(event.target) : event.target.value);
				},
				children: [toArray(value).map((value) => {
					if (value == null) return null;
					if (values.includes(value)) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("option", {
						value,
						children: value
					}, value);
				}), values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)("option", {
					value,
					children: value
				}, value))]
			}), element] }), [
				store,
				label,
				labelledBy,
				name,
				form,
				required,
				value,
				multiSelectable,
				values,
				disabledProp
			]);
			const children = /* @__PURE__ */ (0, import_jsx_runtime$2.jsxs)(import_jsx_runtime$2.Fragment, { children: [value, /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(SelectArrow, {})] });
			const contentElement = useStoreState(store, "contentElement");
			props = {
				role: "combobox",
				"aria-autocomplete": "none",
				"aria-labelledby": props["aria-label"] != null ? void 0 : labelId,
				"aria-haspopup": getPopupRole(contentElement, "listbox"),
				"data-autofill": autofill || void 0,
				"data-name": name,
				children,
				...props,
				ref: useMergeRefs(store.setSelectElement, props.ref),
				onKeyDown
			};
			props = usePopoverDisclosure({
				store,
				toggleOnClick,
				...props
			});
			props = useCompositeTypeahead({
				store,
				...props
			});
			return props;
		});
		Select = forwardRef(function Select(props) {
			const htmlProps = useSelect(withDefaultButtonType(props));
			return createElement(TagName$5, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select-item.js
function isSelected(storeValue, itemValue) {
	if (itemValue == null) return;
	if (storeValue == null) return false;
	if (Array.isArray(storeValue)) return storeValue.includes(itemValue);
	return storeValue === itemValue;
}
var import_react$2, import_jsx_runtime$1, TagName$4, useSelectItem, SelectItem;
function init_select_item() {
	return (init_select_item = __esmMin((() => {
		init_composite_hover();
		init_composite_item();
		init_select_context();
		init_dist();
		init_dist$1();
		import_react$2 = require_react();
		import_jsx_runtime$1 = require_jsx_runtime();
		init_dist$2();
		TagName$4 = "div";
		useSelectItem = createHook(function useSelectItem({ store, value, getItem: getItemProp, hideOnClick, setValueOnClick = value != null, preventScrollOnKeyDown = true, focusOnHover = true, ...props }) {
			const context = useSelectScopedContext();
			store = store || context;
			invariant(store, "SelectItem must be wrapped in a SelectList or SelectPopover component.");
			const id = useId(props.id);
			const disabled = disabledFromProps(props);
			const { listElement, multiSelectable, selected, autoFocus } = useStoreStateObject(store, [
				"value",
				"activeId",
				"items"
			], {
				listElement: "listElement",
				multiSelectable(state) {
					return Array.isArray(state.value);
				},
				selected(state) {
					return isSelected(state.value, value);
				},
				autoFocus(state) {
					if (value == null) return false;
					if (state.value == null) return false;
					if (state.activeId !== id && store?.item(state.activeId)) return false;
					if (Array.isArray(state.value)) return state.value[state.value.length - 1] === value;
					return state.value === value;
				}
			});
			const virtualFocus = useStoreState(store?.combobox, "virtualFocus");
			const getItem = (0, import_react$2.useCallback)((item) => {
				const nextItem = {
					...item,
					value: disabled ? void 0 : value
				};
				if (getItemProp) return getItemProp(nextItem);
				return nextItem;
			}, [
				disabled,
				value,
				getItemProp
			]);
			hideOnClick = hideOnClick ?? (value != null && !multiSelectable);
			const onClickProp = props.onClick;
			const setValueOnClickProp = useBooleanEvent(setValueOnClick);
			const hideOnClickProp = useBooleanEvent(hideOnClick);
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				if (isDownloading(event)) return;
				if (isOpeningInNewTab(event)) return;
				if (setValueOnClickProp(event) && value != null) store?.setValue((prevValue) => {
					if (!Array.isArray(prevValue)) return value;
					if (prevValue.includes(value)) return prevValue.filter((v) => v !== value);
					return [...prevValue, value];
				});
				if (hideOnClickProp(event)) store?.hide();
			});
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SelectItemCheckedContext.Provider, {
				value: selected ?? false,
				children: element
			}), [selected]);
			const shouldAutoFocus = props.autoFocus ?? autoFocus;
			props = {
				role: getPopupItemRole(listElement),
				"aria-selected": selected,
				children: value,
				...props,
				id,
				autoFocus: virtualFocus === false ? false : shouldAutoFocus,
				"data-autofocus": shouldAutoFocus || void 0,
				onClick
			};
			props = useCompositeItem({
				store,
				getItem,
				preventScrollOnKeyDown,
				...props
			});
			const focusOnHoverProp = useBooleanEvent(focusOnHover);
			props = useCompositeHover({
				store,
				...props,
				focusOnHover(event) {
					if (!store.getState().open) return false;
					if (!focusOnHoverProp(event)) return false;
					return store.getState().open;
				}
			});
			return props;
		});
		SelectItem = memo(forwardRef(function SelectItem(props) {
			const htmlProps = useSelectItem(props);
			return createElement(TagName$4, htmlProps);
		}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select-item-check.js
var import_react$1, TagName$3, useSelectItemCheck, SelectItemCheck;
function init_select_item_check() {
	return (init_select_item_check = __esmMin((() => {
		init_checkbox_check();
		init_select_context();
		init_dist();
		import_react$1 = require_react();
		TagName$3 = "span";
		useSelectItemCheck = createHook(function useSelectItemCheck({ store, checked, ...props }) {
			const context = (0, import_react$1.useContext)(SelectItemCheckedContext);
			checked = checked ?? context;
			props = useCheckboxCheck({
				...props,
				checked
			});
			return props;
		});
		SelectItemCheck = forwardRef(function SelectItemCheck(props) {
			const htmlProps = useSelectItemCheck(props);
			return createElement(TagName$3, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select-label.js
var TagName$2, useSelectLabel, SelectLabel;
function init_select_label() {
	return (init_select_label = __esmMin((() => {
		init_select_context();
		init_dist();
		init_dist$1();
		TagName$2 = "div";
		useSelectLabel = createHook(function useSelectLabel({ store, ...props }) {
			const context = useSelectProviderContext();
			store = store || context;
			invariant(store, "SelectLabel must receive a `store` prop or be wrapped in a SelectProvider component.");
			const id = useId(props.id);
			const onClickProp = props.onClick;
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				queueMicrotask(() => {
					(store?.getState().selectElement)?.focus();
				});
			});
			props = {
				...props,
				id,
				ref: useMergeRefs(store.setLabelElement, props.ref),
				onClick,
				style: {
					cursor: "default",
					...props.style
				}
			};
			return props;
		});
		SelectLabel = memo(forwardRef(function SelectLabel(props) {
			const htmlProps = useSelectLabel(props);
			return createElement(TagName$2, htmlProps);
		}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select-list.js
var import_react, import_jsx_runtime, TagName$1, SelectListContext, useSelectList;
function init_select_list() {
	return (init_select_list = __esmMin((() => {
		init_composite();
		init_disclosure_content();
		init_composite_typeahead();
		init_select_context();
		init_dist();
		init_dist$1();
		import_react = require_react();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$2();
		TagName$1 = "div";
		SelectListContext = (0, import_react.createContext)(null);
		useSelectList = createHook(function useSelectList({ store, resetOnEscape = true, hideOnEnter = true, composite, alwaysVisible, ...props }) {
			const context = useSelectContext();
			store = store || context;
			invariant(store, "SelectList must receive a `store` prop or be wrapped in a SelectProvider component.");
			const id = useId(props.id);
			const value = useStoreState(store, "value");
			const multiSelectable = Array.isArray(value);
			const [defaultValue, setDefaultValue] = (0, import_react.useState)(value);
			const mounted = useStoreState(store, "mounted");
			(0, import_react.useEffect)(() => {
				if (mounted) return;
				setDefaultValue(value);
			}, [mounted, value]);
			resetOnEscape = resetOnEscape && !multiSelectable;
			const onKeyDownProp = props.onKeyDown;
			const resetOnEscapeProp = useBooleanEvent(resetOnEscape);
			const hideOnEnterProp = useBooleanEvent(hideOnEnter);
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (event.defaultPrevented) return;
				if (event.key === "Escape" && resetOnEscapeProp(event)) store?.setValue(defaultValue);
				if (event.key === " " || event.key === "Enter") {
					if (isSelfTarget(event) && hideOnEnterProp(event)) {
						event.preventDefault();
						store?.hide();
					}
				}
			});
			const headingContext = (0, import_react.useContext)(SelectHeadingContext);
			const headingState = (0, import_react.useState)();
			const [headingId, setHeadingId] = headingContext || headingState;
			const headingContextValue = (0, import_react.useMemo)(() => [headingId, setHeadingId], [headingId, setHeadingId]);
			const [childStore, setChildStore] = (0, import_react.useState)(null);
			const setStore = (0, import_react.useContext)(SelectListContext);
			(0, import_react.useEffect)(() => {
				if (!setStore) return;
				setStore(store);
				return () => setStore(null);
			}, [setStore, store]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScopedContextProvider, {
				value: store,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectListContext.Provider, {
					value: setChildStore,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectHeadingContext.Provider, {
						value: headingContextValue,
						children: element
					})
				})
			}), [store, headingContextValue]);
			const hasCombobox = !!store.combobox;
			composite = composite ?? (!hasCombobox && childStore !== store);
			const [, setElement] = useTransactionState(composite ? store.setListElement : null);
			const hidden = isHidden(mounted, props.hidden, alwaysVisible);
			const style = hidden ? {
				...props.style,
				display: "none"
			} : props.style;
			if (composite) props = {
				role: "listbox",
				"aria-multiselectable": multiSelectable || void 0,
				...props
			};
			const labelElement = useStoreState(store, ["labelElement"], (state) => headingId ? null : state.labelElement);
			useAttribute(labelElement, "id");
			const labelId = headingId || labelElement?.id;
			props = {
				"aria-labelledby": props["aria-label"] != null ? void 0 : labelId,
				hidden,
				...props,
				id,
				ref: useMergeRefs(setElement, props.ref),
				style,
				onKeyDown
			};
			props = useComposite({
				store,
				...props,
				composite
			});
			props = useCompositeTypeahead({
				store,
				typeahead: !hasCombobox,
				...props
			});
			return props;
		});
		forwardRef(function SelectList(props) {
			const htmlProps = useSelectList(props);
			return createElement(TagName$1, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select-popover.js
var TagName, useSelectPopover, SelectPopover;
function init_select_popover() {
	return (init_select_popover = __esmMin((() => {
		init_CEV0PLZp();
		init_popover();
		init_select_context();
		init_select_list();
		init_dist();
		TagName = "div";
		useSelectPopover = createHook(function useSelectPopover({ store, alwaysVisible, ...props }) {
			const context = useSelectProviderContext();
			store = store || context;
			props = useSelectList({
				store,
				alwaysVisible,
				...props
			});
			props = usePopover({
				store,
				alwaysVisible,
				...props
			});
			return props;
		});
		SelectPopover = createDialogComponent(forwardRef(function SelectPopover(props) {
			const htmlProps = useSelectPopover(props);
			return createElement(TagName, htmlProps);
		}), useSelectProviderContext);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.15-b4ubwzeFfstoGvOR7daROQ/node_modules/@ariakit/components/dist/select/select-store.js
function createSelectStore({ combobox, ...props } = {}) {
	const store = mergeStore(props.store, omit(combobox, [
		"value",
		"items",
		"renderedItems",
		"compositeElement",
		"baseElement",
		"arrowElement",
		"anchorElement",
		"contentElement",
		"popoverElement",
		"disclosureElement",
		"inputElement",
		"labelElement",
		"selectElement",
		"selectLabelElement"
	]));
	throwOnConflictingProps(props, store);
	const syncState = store.getState();
	const composite = createCompositeStore({
		...props,
		store,
		virtualFocus: defaultValue(props.virtualFocus, syncState.virtualFocus, true),
		compositeElementInFocusOrder: defaultValue(props.compositeElementInFocusOrder, props.includesBaseElement, syncState.compositeElementInFocusOrder, syncState.includesBaseElement, false),
		activeId: defaultValue(props.activeId, syncState.activeId, props.defaultActiveId, null),
		orientation: defaultValue(props.orientation, syncState.orientation, "vertical")
	});
	const popover = createPopoverStore({
		...props,
		store,
		placement: defaultValue(props.placement, syncState.placement, "bottom-start")
	});
	const initialValue = /* @__PURE__ */ new String("");
	const initialState = {
		...composite.getState(),
		...popover.getState(),
		value: defaultValue(props.value, syncState.value, props.defaultValue, initialValue),
		setValueOnMove: defaultValue(props.setValueOnMove, syncState.setValueOnMove, false),
		labelElement: defaultValue(syncState.labelElement, null),
		selectElement: defaultValue(syncState.selectElement, null),
		listElement: defaultValue(syncState.listElement, null)
	};
	const select = createStore(initialState, composite, popover, store);
	setup(select, () => combobox?.unstable_onHideRequest(popover.unstable_requestHide));
	setup(select, () => sync(select, ["value", "items"], (state) => {
		if (state.value !== initialValue) return;
		if (!state.items.length) return;
		const item = state.items.find((item) => !item.disabled && item.value != null);
		if (item?.value == null) return;
		select.setState("value", item.value);
	}));
	setup(select, () => sync(select, ["mounted"], (state) => {
		if (state.mounted) return;
		select.setState("activeId", initialState.activeId);
	}));
	setup(select, () => sync(select, [
		"mounted",
		"items",
		"value"
	], (state) => {
		if (combobox) return;
		if (state.mounted) return;
		const values = toArray(state.value);
		const lastValue = values[values.length - 1];
		if (lastValue == null) return;
		const item = state.items.find((item) => !item.disabled && item.value === lastValue);
		if (!item) return;
		select.setState("activeId", item.id);
	}));
	setup(select, () => batch(select, ["setValueOnMove", "moves"], (state) => {
		const { mounted, value, activeId } = select.getState();
		if (!state.setValueOnMove && mounted) return;
		if (Array.isArray(value)) return;
		if (!state.moves) return;
		if (!activeId) return;
		const item = composite.item(activeId);
		if (!item || item.disabled || item.value == null) return;
		select.setState("value", item.value);
	}));
	return {
		...composite,
		...popover,
		...select,
		combobox,
		setValue: (value) => select.setState("value", value),
		setLabelElement: (element) => {
			select.setState("labelElement", element);
			combobox?.setSelectLabelElement(element);
		},
		setSelectElement: (element) => select.setState("selectElement", element),
		setListElement: (element) => select.setState("listElement", element)
	};
}
function init_select_store() {
	return (init_select_store = __esmMin((() => {
		init_composite_store();
		init_popover_store();
		init_dist$3();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/select/select-store.js
/** @deprecated Use `useComboboxStoreOptions` instead. */
function useSelectStoreOptions(props) {
	const combobox = useComboboxProviderContext();
	props = {
		...props,
		combobox: props.combobox !== void 0 ? props.combobox : combobox
	};
	return useCompositeStoreOptions(props);
}
/** @deprecated Use `useComboboxStoreProps` instead. */
function useSelectStoreProps(store, update, props) {
	useUpdateEffect(update, [props.combobox, update]);
	useStoreProps(store, props, "value", "setValue");
	useStoreProps(store, props, "setValueOnMove");
	return Object.assign(usePopoverStoreProps(useCompositeStoreProps(store, update, props), update, props), { combobox: props.combobox });
}
function useSelectStore(props = {}) {
	props = useSelectStoreOptions(props);
	const [store, update] = useStore(createSelectStore, props);
	return useSelectStoreProps(store, update, props);
}
function init_select_store$1() {
	return (init_select_store$1 = __esmMin((() => {
		init_combobox_context();
		init_composite_store$1();
		init_popover_store$1();
		init_dist();
		init_dist$2();
		init_select_store();
	})))();
}
//#endregion
export { SelectLabel as a, init_select_item_check as c, Select as d, init_select as f, init_select_popover as i, SelectItem as l, useSelectStore as n, init_select_label as o, SelectPopover as r, SelectItemCheck as s, init_select_store$1 as t, init_select_item as u };
