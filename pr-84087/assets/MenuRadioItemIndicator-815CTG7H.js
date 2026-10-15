import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { d as init_empty, n as useRenderElement, t as init_useRenderElement, u as NOOP } from "./useRenderElement-QwAlaybP.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { a as init_useOpenChangeComplete, n as useTransitionStatus, o as useOpenChangeComplete, t as init_useTransitionStatus } from "./useTransitionStatus-C7eUOB6r.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-B67zM6EB.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-YflddsV3.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails, v as itemPress } from "./createBaseUIEventDetails-CC__nZlv.js";
import { C as init_MenuPositionerContext, S as useMenuRootContext, _ as init_useMenuItem, g as REGULAR_ITEM, v as useMenuItem, w as useMenuPositionerContext, x as init_MenuRootContext } from "./MenuTrigger-9lORR1Mz.js";
import { i as init_MenuGroupContext, o as init_stateAttributesMapping, r as MenuGroupContext, s as itemMapping } from "./MenuGroup-EIDCmkJn.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroupContext.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.mjs
var import_react$3, import_jsx_runtime$1, MenuRadioGroup;
function init_MenuRadioGroup() {
	return (init_MenuRadioGroup = __esmMin((() => {
		import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_useStableCallback();
		init_MenuRadioGroupContext();
		init_MenuGroupContext();
		init_useRenderElement();
		import_jsx_runtime$1 = require_jsx_runtime();
		MenuRadioGroup = /*#__PURE__*/ import_react$3.memo(/*#__PURE__*/ import_react$3.forwardRef(function MenuRadioGroup(componentProps, forwardedRef) {
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
		}));
		MenuRadioGroup.displayName = "MenuRadioGroup";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItemContext.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.mjs
var import_react$1, import_jsx_runtime, MenuRadioItem;
function init_MenuRadioItem() {
	return (init_MenuRadioItem = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_empty();
		init_MenuRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		init_MenuRadioGroupContext();
		init_MenuRadioItemContext();
		init_stateAttributesMapping();
		init_useCompositeListItem();
		init_useMenuItem();
		init_MenuPositionerContext();
		init_createBaseUIEventDetails();
		init_reason_parts();
		import_jsx_runtime = require_jsx_runtime();
		MenuRadioItem = /*#__PURE__*/ import_react$1.forwardRef(function MenuRadioItem(componentProps, forwardedRef) {
			const { render, className, id: idProp, label, nativeButton = false, disabled: disabledProp = false, closeOnClick = false, value, style, ...elementProps } = componentProps;
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const menuPositionerContext = useMenuPositionerContext(true);
			const id = useBaseUiId(idProp);
			const { store } = useMenuRootContext();
			const highlighted = store.useState("isActive", listItem.index);
			const itemProps = store.useState("itemProps");
			const { value: selectedValue, setValue: setSelectedValue, disabled: groupDisabled } = useMenuRadioGroupContext();
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
				nodeId: menuPositionerContext?.context.nodeId,
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
		MenuRadioItem.displayName = "MenuRadioItem";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/radio-item-indicator/MenuRadioItemIndicator.mjs
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
export { MenuRadioGroup as a, init_MenuRadioItem as i, init_MenuRadioItemIndicator as n, init_MenuRadioGroup as o, MenuRadioItem as r, MenuRadioItemIndicator as t };
