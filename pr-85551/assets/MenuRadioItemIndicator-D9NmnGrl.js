import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { d as NOOP, f as init_empty, r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { a as init_useOpenChangeComplete, i as transitionStatusMapping, n as useTransitionStatus, o as useOpenChangeComplete, r as init_stateAttributesMapping$1, t as init_useTransitionStatus } from "./useTransitionStatus-DtGN_KnE.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-CKMeYwmS.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-DCUBNr8F.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, h as itemPress, u as init_reason_parts } from "./reason-parts-0ghxNVBE.js";
import { D as init_MenuRootContext, E as useMenuFilterItem, O as useMenuRootContext, T as useMenuFilterImpl, b as init_useMenuItem, w as init_MenuFilterContext, x as useMenuItem, y as REGULAR_ITEM } from "./MenuTrigger-ClsOtY5u.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItemDataAttributes.mjs
var checked, unchecked;
function init_MenuCheckboxItemDataAttributes() {
	return (init_MenuCheckboxItemDataAttributes = __esmMin((() => {
		checked = "data-checked";
		unchecked = "data-unchecked";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/utils/stateAttributesMapping.mjs
var itemMapping;
function init_stateAttributesMapping() {
	return (init_stateAttributesMapping = __esmMin((() => {
		init_stateAttributesMapping$1();
		init_MenuCheckboxItemDataAttributes();
		itemMapping = {
			checked(value) {
				if (value) return { [checked]: "" };
				return { [unchecked]: "" };
			},
			...transitionStatusMapping
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/group/MenuGroupContext.mjs
function useMenuGroupRootContext() {
	const context = import_react$6.useContext(MenuGroupContext);
	if (context === void 0) throw new Error("Base UI: MenuGroupContext is missing. Menu group parts must be used within <Menu.Group> or <Menu.RadioGroup>.");
	return context;
}
var import_react$6, MenuGroupContext;
function init_MenuGroupContext() {
	return (init_MenuGroupContext = __esmMin((() => {
		import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuGroupContext = /*#__PURE__*/ import_react$6.createContext(void 0);
		MenuGroupContext.displayName = "MenuGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/group/MenuGroup.mjs
var import_react$5, import_jsx_runtime$2, MenuGroupPlain, MenuGroup;
function init_MenuGroup() {
	return (init_MenuGroup = __esmMin((() => {
		import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MenuFilterContext();
		init_useRenderElement();
		init_MenuGroupContext();
		import_jsx_runtime$2 = require_jsx_runtime();
		MenuGroupPlain = /*#__PURE__*/ import_react$5.forwardRef(function MenuGroupPlain(componentProps, forwardedRef) {
			const { render, className, style, ...elementProps } = componentProps;
			const [labelId, setLabelId] = import_react$5.useState(void 0);
			const element = useRenderElement("div", componentProps, {
				ref: forwardedRef,
				props: {
					role: "group",
					"aria-labelledby": labelId,
					...elementProps
				}
			});
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(MenuGroupContext.Provider, {
				value: setLabelId,
				children: element
			});
		});
		MenuGroupPlain.displayName = "MenuGroupPlain";
		MenuGroup = /*#__PURE__*/ import_react$5.forwardRef(function MenuGroup(props, forwardedRef) {
			const Group = useMenuFilterImpl()?.Group ?? MenuGroupPlain;
			return /*#__PURE__*/ (0, import_jsx_runtime$2.jsx)(Group, {
				...props,
				ref: forwardedRef
			});
		});
		MenuGroup.displayName = "MenuGroup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroupContext.mjs
function useMenuRadioGroupContext() {
	const context = import_react$4.useContext(MenuRadioGroupContext);
	if (context === void 0) throw new Error("Base UI: MenuRadioGroupContext is missing. MenuRadioGroup parts must be placed within <Menu.RadioGroup>.");
	return context;
}
var import_react$4, MenuRadioGroupContext;
function init_MenuRadioGroupContext() {
	return (init_MenuRadioGroupContext = __esmMin((() => {
		import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuRadioGroupContext = /*#__PURE__*/ import_react$4.createContext(void 0);
		MenuRadioGroupContext.displayName = "MenuRadioGroupContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.mjs
var import_react$3, import_jsx_runtime$1, MenuRadioGroupPlain, MenuRadioGroup;
function init_MenuRadioGroup() {
	return (init_MenuRadioGroup = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_useStableCallback();
		init_MenuFilterContext();
		init_MenuRadioGroupContext();
		init_MenuGroupContext();
		init_useRenderElement();
		import_jsx_runtime$1 = require_jsx_runtime();
		MenuRadioGroupPlain = /*#__PURE__*/ import_react$3.forwardRef(function MenuRadioGroupPlain(componentProps, forwardedRef) {
			const { render, className, value: valueProp, defaultValue, onValueChange: onValueChangeProp, disabled = false, style, "aria-labelledby": ariaLabelledByProp, ...elementProps } = componentProps;
			const [labelId, setLabelId] = import_react$3.useState(void 0);
			const [value, setValueUnwrapped] = useControlled({
				controlled: valueProp,
				default: defaultValue,
				name: "MenuRadioGroup"
			});
			const setValue = useStableCallback((newValue, eventDetails) => {
				onValueChangeProp?.(newValue, eventDetails);
				if (eventDetails.isCanceled) return;
				setValueUnwrapped(newValue);
			});
			const element = useRenderElement("div", componentProps, {
				state: { disabled },
				ref: forwardedRef,
				props: {
					role: "group",
					"aria-labelledby": ariaLabelledByProp ?? labelId,
					"aria-disabled": disabled || void 0,
					...elementProps
				}
			});
			const context = import_react$3.useMemo(() => ({
				value,
				setValue,
				disabled
			}), [
				value,
				setValue,
				disabled
			]);
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(MenuGroupContext.Provider, {
				value: setLabelId,
				children: /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(MenuRadioGroupContext.Provider, {
					value: context,
					children: element
				})
			});
		});
		MenuRadioGroupPlain.displayName = "MenuRadioGroupPlain";
		MenuRadioGroup = /*#__PURE__*/ import_react$3.memo(/*#__PURE__*/ import_react$3.forwardRef(function MenuRadioGroup(props, forwardedRef) {
			const RadioGroup = useMenuFilterImpl()?.RadioGroup ?? MenuRadioGroupPlain;
			return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(RadioGroup, {
				...props,
				ref: forwardedRef
			});
		}));
		MenuRadioGroup.displayName = "MenuRadioGroup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/radio-item/MenuRadioItemContext.mjs
function useMenuRadioItemContext() {
	const context = import_react$2.useContext(MenuRadioItemContext);
	if (context === void 0) throw new Error("Base UI: MenuRadioItemContext is missing. MenuRadioItem parts must be placed within <Menu.RadioItem>.");
	return context;
}
var import_react$2, MenuRadioItemContext;
function init_MenuRadioItemContext() {
	return (init_MenuRadioItemContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuRadioItemContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		MenuRadioItemContext.displayName = "MenuRadioItemContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.mjs
var import_react$1, import_jsx_runtime, MenuRadioItemPlain, MenuRadioItem;
function init_MenuRadioItem() {
	return (init_MenuRadioItem = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		init_MenuFilterContext();
		init_MenuRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		init_MenuRadioGroupContext();
		init_MenuRadioItemContext();
		init_stateAttributesMapping();
		init_useCompositeListItem();
		init_useMenuItem();
		init_createBaseUIEventDetails();
		init_reason_parts();
		import_jsx_runtime = require_jsx_runtime();
		MenuRadioItemPlain = /*#__PURE__*/ import_react$1.forwardRef(function MenuRadioItemPlain(componentProps, forwardedRef) {
			const { render, className, id: idProp, label, nativeButton = false, disabled: disabledProp = false, closeOnClick = false, value, style, ...elementProps } = componentProps;
			const { store } = useMenuRootContext();
			const { value: selectedValue, setValue: setSelectedValue, disabled: groupDisabled } = useMenuRadioGroupContext();
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const id = useBaseUiId(idProp);
			const highlighted = store.useState("isActive", listItem.index);
			const nodeId = store.useState("floatingNodeId");
			const itemProps = store.useState("itemProps");
			const rootDisabled = store.useState("disabled");
			const disabled = disabledProp || groupDisabled || rootDisabled;
			const checked = selectedValue === value;
			const { getItemProps, itemRef } = useMenuItem({
				closeOnClick,
				disabled,
				highlighted,
				id,
				store,
				nativeButton,
				nodeId,
				itemMetadata: REGULAR_ITEM
			});
			const state = import_react$1.useMemo(() => ({
				disabled,
				highlighted,
				checked
			}), [
				disabled,
				highlighted,
				checked
			]);
			function handleClick(event) {
				const details = createChangeEventDetails(itemPress, event.nativeEvent, void 0, { preventUnmountOnClose: NOOP });
				setSelectedValue(value, details);
			}
			const element = useRenderElement("div", componentProps, {
				state,
				stateAttributesMapping: itemMapping,
				props: [
					itemProps,
					{
						role: "menuitemradio",
						"aria-checked": checked,
						onClick: handleClick
					},
					elementProps,
					getItemProps
				],
				ref: [
					itemRef,
					forwardedRef,
					listItem.ref
				]
			});
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuRadioItemContext.Provider, {
				value: state,
				children: element
			});
		});
		MenuRadioItemPlain.displayName = "MenuRadioItemPlain";
		MenuRadioItem = /*#__PURE__*/ import_react$1.forwardRef(function MenuRadioItem(props, forwardedRef) {
			const filterItem = useMenuFilterItem(props, forwardedRef);
			if (!filterItem.visible) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuRadioItemPlain, {
				...props,
				ref: filterItem.ref
			});
		});
		MenuRadioItem.displayName = "MenuRadioItem";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/radio-item-indicator/MenuRadioItemIndicator.mjs
var import_react, MenuRadioItemIndicator;
function init_MenuRadioItemIndicator() {
	return (init_MenuRadioItemIndicator = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MenuRadioItemContext();
		init_useRenderElement();
		init_stateAttributesMapping();
		init_useTransitionStatus();
		init_useOpenChangeComplete();
		MenuRadioItemIndicator = /*#__PURE__*/ import_react.forwardRef(function MenuRadioItemIndicator(componentProps, forwardedRef) {
			const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
			const item = useMenuRadioItemContext();
			const indicatorRef = import_react.useRef(null);
			const { transitionStatus, mounted, setMounted } = useTransitionStatus(item.checked);
			useOpenChangeComplete({
				batch: true,
				enabled: !item.checked,
				open: item.checked,
				ref: indicatorRef,
				onComplete() {
					if (!item.checked) setMounted(false);
				}
			});
			const state = {
				checked: item.checked,
				disabled: item.disabled,
				highlighted: item.highlighted,
				transitionStatus
			};
			return useRenderElement("span", componentProps, {
				state,
				stateAttributesMapping: itemMapping,
				ref: [forwardedRef, indicatorRef],
				props: {
					"aria-hidden": true,
					...elementProps
				},
				enabled: keepMounted || mounted
			});
		});
		MenuRadioItemIndicator.displayName = "MenuRadioItemIndicator";
	})))();
}
//#endregion
export { MenuRadioGroup as a, init_MenuGroup as c, init_stateAttributesMapping as d, itemMapping as f, init_MenuRadioItem as i, init_MenuGroupContext as l, init_MenuRadioItemIndicator as n, init_MenuRadioGroup as o, MenuRadioItem as r, MenuGroup as s, MenuRadioItemIndicator as t, useMenuGroupRootContext as u };
