import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { d as NOOP, f as init_empty, r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { a as init_useOpenChangeComplete, n as useTransitionStatus, o as useOpenChangeComplete, t as init_useTransitionStatus } from "./useTransitionStatus-DtGN_KnE.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-CKMeYwmS.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-DCUBNr8F.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, h as itemPress, u as init_reason_parts } from "./reason-parts-0ghxNVBE.js";
import { D as init_MenuRootContext, E as useMenuFilterItem, O as useMenuRootContext, b as init_useMenuItem, w as init_MenuFilterContext, x as useMenuItem, y as REGULAR_ITEM } from "./MenuTrigger-ClsOtY5u.js";
import { d as init_stateAttributesMapping, f as itemMapping } from "./MenuRadioItemIndicator-D9NmnGrl.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItemContext.mjs
function useMenuCheckboxItemContext() {
	const context = import_react$2.useContext(MenuCheckboxItemContext);
	if (context === void 0) throw new Error("Base UI: MenuCheckboxItemContext is missing. MenuCheckboxItem parts must be placed within <Menu.CheckboxItem>.");
	return context;
}
var import_react$2, MenuCheckboxItemContext;
function init_MenuCheckboxItemContext() {
	return (init_MenuCheckboxItemContext = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
		MenuCheckboxItemContext = /*#__PURE__*/ import_react$2.createContext(void 0);
		MenuCheckboxItemContext.displayName = "MenuCheckboxItemContext";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.mjs
var import_react$1, import_jsx_runtime, MenuCheckboxItemPlain, MenuCheckboxItem;
function init_MenuCheckboxItem() {
	return (init_MenuCheckboxItem = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_empty();
		init_MenuFilterContext();
		init_MenuCheckboxItemContext();
		init_useMenuItem();
		init_useCompositeListItem();
		init_MenuRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		init_stateAttributesMapping();
		init_createBaseUIEventDetails();
		init_reason_parts();
		import_jsx_runtime = require_jsx_runtime();
		MenuCheckboxItemPlain = /*#__PURE__*/ import_react$1.forwardRef(function MenuCheckboxItemPlain(componentProps, forwardedRef) {
			const { render, className, id: idProp, label, nativeButton = false, disabled: disabledProp = false, closeOnClick = false, checked = false, onCheckedChange, style, ...elementProps } = componentProps;
			const { store } = useMenuRootContext();
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const id = useBaseUiId(idProp);
			const rootDisabled = store.useState("disabled");
			const highlighted = store.useState("isActive", listItem.index);
			const nodeId = store.useState("floatingNodeId");
			const itemProps = store.useState("itemProps");
			const disabled = disabledProp || rootDisabled;
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
				onCheckedChange?.(!checked, details);
			}
			const element = useRenderElement("div", componentProps, {
				state,
				stateAttributesMapping: itemMapping,
				props: [
					itemProps,
					{
						role: "menuitemcheckbox",
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
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuCheckboxItemContext.Provider, {
				value: state,
				children: element
			});
		});
		MenuCheckboxItemPlain.displayName = "MenuCheckboxItemPlain";
		MenuCheckboxItem = /*#__PURE__*/ import_react$1.forwardRef(function MenuCheckboxItem(props, forwardedRef) {
			const { checked: checkedProp, defaultChecked, onCheckedChange, ...plainProps } = props;
			const [checked, setChecked] = useControlled({
				controlled: checkedProp,
				default: defaultChecked ?? false,
				name: "MenuCheckboxItem",
				state: "checked"
			});
			const filterItem = useMenuFilterItem(props, forwardedRef);
			function handleCheckedChange(nextChecked, eventDetails) {
				onCheckedChange?.(nextChecked, eventDetails);
				if (!eventDetails.isCanceled) setChecked(nextChecked);
			}
			if (!filterItem.visible) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuCheckboxItemPlain, {
				...plainProps,
				checked,
				onCheckedChange: handleCheckedChange,
				ref: filterItem.ref
			});
		});
		MenuCheckboxItem.displayName = "MenuCheckboxItem";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/checkbox-item-indicator/MenuCheckboxItemIndicator.mjs
var import_react, MenuCheckboxItemIndicator;
function init_MenuCheckboxItemIndicator() {
	return (init_MenuCheckboxItemIndicator = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MenuCheckboxItemContext();
		init_useRenderElement();
		init_stateAttributesMapping();
		init_useTransitionStatus();
		init_useOpenChangeComplete();
		MenuCheckboxItemIndicator = /*#__PURE__*/ import_react.forwardRef(function MenuCheckboxItemIndicator(componentProps, forwardedRef) {
			const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
			const item = useMenuCheckboxItemContext();
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
				ref: [forwardedRef, indicatorRef],
				stateAttributesMapping: itemMapping,
				props: {
					"aria-hidden": true,
					...elementProps
				},
				enabled: keepMounted || mounted
			});
		});
		MenuCheckboxItemIndicator.displayName = "MenuCheckboxItemIndicator";
	})))();
}
//#endregion
export { init_MenuCheckboxItem as i, init_MenuCheckboxItemIndicator as n, MenuCheckboxItem as r, MenuCheckboxItemIndicator as t };
