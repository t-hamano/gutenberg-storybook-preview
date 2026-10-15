import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { d as init_empty, n as useRenderElement, t as init_useRenderElement, u as NOOP } from "./useRenderElement-QwAlaybP.js";
import { a as init_useOpenChangeComplete, n as useTransitionStatus, o as useOpenChangeComplete, t as init_useTransitionStatus } from "./useTransitionStatus-C7eUOB6r.js";
import { n as useControlled, t as init_useControlled } from "./useControlled-B67zM6EB.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-YflddsV3.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { p as init_reason_parts, r as init_createBaseUIEventDetails, t as createChangeEventDetails, v as itemPress } from "./createBaseUIEventDetails-CC__nZlv.js";
import { C as init_MenuPositionerContext, S as useMenuRootContext, _ as init_useMenuItem, g as REGULAR_ITEM, v as useMenuItem, w as useMenuPositionerContext, x as init_MenuRootContext } from "./MenuTrigger-9lORR1Mz.js";
import { o as init_stateAttributesMapping, s as itemMapping } from "./MenuGroup-EIDCmkJn.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItemContext.mjs
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
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItem.mjs
var import_react$1, import_jsx_runtime, MenuCheckboxItem;
function init_MenuCheckboxItem() {
	return (init_MenuCheckboxItem = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useControlled();
		init_empty();
		init_MenuCheckboxItemContext();
		init_useMenuItem();
		init_useCompositeListItem();
		init_MenuRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		init_stateAttributesMapping();
		init_MenuPositionerContext();
		init_createBaseUIEventDetails();
		init_reason_parts();
		import_jsx_runtime = require_jsx_runtime();
		MenuCheckboxItem = /*#__PURE__*/ import_react$1.forwardRef(function MenuCheckboxItem(componentProps, forwardedRef) {
			const { render, className, id: idProp, label, nativeButton = false, disabled: disabledProp = false, closeOnClick = false, checked: checkedProp, defaultChecked, onCheckedChange, style, ...elementProps } = componentProps;
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const menuPositionerContext = useMenuPositionerContext(true);
			const id = useBaseUiId(idProp);
			const { store } = useMenuRootContext();
			const rootDisabled = store.useState("disabled");
			const disabled = disabledProp || rootDisabled;
			const highlighted = store.useState("isActive", listItem.index);
			const itemProps = store.useState("itemProps");
			const [checked, setChecked] = useControlled({
				controlled: checkedProp,
				default: defaultChecked ?? false,
				name: "MenuCheckboxItem",
				state: "checked"
			});
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
				onCheckedChange?.(!checked, details);
				if (details.isCanceled) return;
				setChecked((currentlyChecked) => !currentlyChecked);
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
		MenuCheckboxItem.displayName = "MenuCheckboxItem";
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/checkbox-item-indicator/MenuCheckboxItemIndicator.mjs
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
