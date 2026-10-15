import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { a as mergeProps, n as useRenderElement, r as init_mergeProps, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-YflddsV3.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { n as useButton, t as init_useButton } from "./useButton-C38YKBDn.js";
import { C as init_MenuPositionerContext, S as useMenuRootContext, _ as init_useMenuItem, b as useMenuItemCommonProps, g as REGULAR_ITEM, w as useMenuPositionerContext, x as init_MenuRootContext, y as init_useMenuItemCommonProps } from "./MenuTrigger-9lORR1Mz.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/link-item/MenuLinkItem.mjs
var import_react, MenuLinkItem;
function init_MenuLinkItem() {
	return (init_MenuLinkItem = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MenuRootContext();
		init_useRenderElement();
		init_useBaseUiId();
		init_useCompositeListItem();
		init_MenuPositionerContext();
		init_useMenuItemCommonProps();
		init_useMenuItem();
		init_useButton();
		init_mergeProps();
		MenuLinkItem = /*#__PURE__*/ import_react.forwardRef(function MenuLinkItem(componentProps, forwardedRef) {
			const { render, className, id: idProp, label, closeOnClick = false, style, ...elementProps } = componentProps;
			const linkRef = import_react.useRef(null);
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const nodeId = useMenuPositionerContext(true)?.context.nodeId;
			const id = useBaseUiId(idProp);
			const { store } = useMenuRootContext();
			const highlighted = store.useState("isActive", listItem.index);
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
		MenuLinkItem.displayName = "MenuLinkItem";
	})))();
}
//#endregion
export { init_MenuLinkItem as n, MenuLinkItem as t };
