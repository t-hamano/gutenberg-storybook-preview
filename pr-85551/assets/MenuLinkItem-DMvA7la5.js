import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as init_mergeProps, o as mergeProps, r as useRenderElement, t as init_useRenderElement } from "./useRenderElement-Dkv6YH0v.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-DCUBNr8F.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { n as useButton, t as init_useButton } from "./useButton-jJ_7clep.js";
import { C as useMenuItemCommonProps, D as init_MenuRootContext, E as useMenuFilterItem, O as useMenuRootContext, S as init_useMenuItemCommonProps, b as init_useMenuItem, w as init_MenuFilterContext, y as REGULAR_ITEM } from "./MenuTrigger-ClsOtY5u.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/link-item/MenuLinkItem.mjs
var import_react, import_jsx_runtime, MenuLinkItemPlain, MenuLinkItem;
function init_MenuLinkItem() {
	return (init_MenuLinkItem = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MenuFilterContext();
		init_MenuRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		init_useCompositeListItem();
		init_useMenuItemCommonProps();
		init_useMenuItem();
		init_useButton();
		init_mergeProps();
		import_jsx_runtime = require_jsx_runtime();
		MenuLinkItemPlain = /*#__PURE__*/ import_react.forwardRef(function MenuLinkItemPlain(componentProps, forwardedRef) {
			const { render, className, id: idProp, label, closeOnClick = false, style, ...elementProps } = componentProps;
			const { store } = useMenuRootContext();
			const linkRef = import_react.useRef(null);
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const id = useBaseUiId(idProp);
			const highlighted = store.useState("isActive", listItem.index);
			const nodeId = store.useState("floatingNodeId");
			const itemProps = store.useState("itemProps");
			const typingRef = store.context.typingRef;
			const { getButtonProps, buttonRef } = useButton({
				native: false,
				composite: true
			});
			const commonProps = useMenuItemCommonProps({
				closeOnClick,
				highlighted,
				id,
				nodeId,
				store,
				typingRef,
				itemRef: linkRef,
				itemMetadata: REGULAR_ITEM
			});
			function getItemProps(externalProps) {
				return mergeProps(commonProps, externalProps, getButtonProps);
			}
			return useRenderElement("a", componentProps, {
				state: { highlighted },
				props: [
					itemProps,
					elementProps,
					getItemProps
				],
				ref: [
					linkRef,
					buttonRef,
					forwardedRef,
					listItem.ref
				]
			});
		});
		MenuLinkItemPlain.displayName = "MenuLinkItemPlain";
		MenuLinkItem = /*#__PURE__*/ import_react.forwardRef(function MenuLinkItem(props, forwardedRef) {
			const filterItem = useMenuFilterItem(props, forwardedRef);
			if (!filterItem.visible) return null;
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuLinkItemPlain, {
				...props,
				ref: filterItem.ref
			});
		});
		MenuLinkItem.displayName = "MenuLinkItem";
	})))();
}
//#endregion
export { init_MenuLinkItem as n, MenuLinkItem as t };
