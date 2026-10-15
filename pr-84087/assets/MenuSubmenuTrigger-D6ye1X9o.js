import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { d as init_empty, f as init_warn, l as EMPTY_OBJECT, n as useRenderElement, p as warn, t as init_useRenderElement } from "./useRenderElement-QwAlaybP.js";
import { i as init_safeReact, n as useIsoLayoutEffect, r as SafeReact, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-HKs9zu76.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-YflddsV3.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-DDVp3i2t.js";
import { p as init_reason_parts } from "./createBaseUIEventDetails-CC__nZlv.js";
import { At as triggerOpenStateMapping, Bt as voiceOver, Et as init_popupStateMapping, _ as init_popupStoreUtils, w as useTriggerRegistration, zt as init_screen_reader } from "./DirectionProvider-CsD6Wmlj.js";
import { o as init_useClick, s as useClick } from "./useOpenInteractionType-KvNpLDr_.js";
import { i as useHoverReferenceInteraction, n as safePolygon, r as init_useHoverReferenceInteraction, t as init_safePolygon } from "./safePolygon-CaWQyfTS.js";
import { C as init_MenuPositionerContext, S as useMenuRootContext, _ as init_useMenuItem, a as MenuSubmenuRootContext, i as init_MenuRoot, o as init_MenuSubmenuRootContext, r as MenuRoot, s as useMenuSubmenuRootContext, v as useMenuItem, w as useMenuPositionerContext, x as init_MenuRootContext } from "./MenuTrigger-9lORR1Mz.js";
import { n as isElementDisabled } from "./isElementDisabled-zKtyMArR.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.mjs
/**
* Groups all parts of a submenu.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
function MenuSubmenuRoot(props) {
	const parentMenu = useMenuRootContext().store;
	const contextValue = import_react$1.useMemo(() => ({ parentMenu }), [parentMenu]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuSubmenuRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuRoot, { ...props })
	});
}
var import_react$1, import_jsx_runtime;
function init_MenuSubmenuRoot() {
	return (init_MenuSubmenuRoot = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MenuRoot();
		init_MenuRootContext();
		init_MenuSubmenuRootContext();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.mjs
var import_react, VOICE_OVER_EXPANDED_PROPS, MenuSubmenuTrigger;
function init_MenuSubmenuTrigger() {
	return (init_MenuSubmenuTrigger = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_warn();
		init_safeReact();
		init_empty();
		init_screen_reader();
		init_useStableCallback();
		init_useIsoLayoutEffect();
		init_safePolygon(), init_useClick(), init_useHoverReferenceInteraction();
		init_MenuRootContext();
		init_useBaseUiId();
		init_popupStateMapping();
		init_useCompositeListItem();
		init_useMenuItem();
		init_useRenderElement();
		init_MenuPositionerContext();
		init_popupStoreUtils();
		init_MenuSubmenuRootContext();
		init_reason_parts();
		VOICE_OVER_EXPANDED_PROPS = { "aria-expanded": void 0 };
		MenuSubmenuTrigger = /*#__PURE__*/ import_react.forwardRef(function MenuSubmenuTrigger(componentProps, forwardedRef) {
			const { render, className, style, label, id: idProp, nativeButton = false, openOnHover = true, delay = 100, closeDelay = 0, disabled: disabledProp = false, ...elementProps } = componentProps;
			const submenuRootContext = useMenuSubmenuRootContext();
			if (!submenuRootContext?.parentMenu) throw new Error("Base UI: <Menu.SubmenuTrigger> must be placed in <Menu.SubmenuRoot>.");
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const menuPositionerContext = useMenuPositionerContext();
			const { store } = useMenuRootContext();
			const thisTriggerId = useBaseUiId(idProp);
			const open = store.useState("open");
			const floatingRootContext = store.useState("floatingRootContext");
			const floatingTreeRoot = store.useState("floatingTreeRoot");
			const popupId = store.useState("triggerPopupId", thisTriggerId);
			const baseRegisterTrigger = useTriggerRegistration(thisTriggerId, store);
			const registerTrigger = useStableCallback((element) => {
				baseRegisterTrigger(element);
				if (element !== null && store.select("open") && store.select("activeTriggerId") == null) store.update({
					activeTriggerId: thisTriggerId ?? null,
					activeTriggerElement: element,
					closeDelay
				});
			});
			const triggerElementRef = import_react.useRef(null);
			const handleTriggerElementRef = import_react.useCallback((el) => {
				triggerElementRef.current = el;
				store.set("activeTriggerElement", el);
			}, [store]);
			useIsoLayoutEffect(() => {
				registerTrigger(triggerElementRef.current);
				return () => registerTrigger(null);
			}, [
				registerTrigger,
				thisTriggerId,
				store
			]);
			store.useSyncedValue("closeDelay", closeDelay);
			const parentMenuStore = submenuRootContext.parentMenu;
			const rootDisabled = store.useState("disabled");
			const parentDisabled = parentMenuStore.useState("disabled");
			const disabled = disabledProp || rootDisabled || parentDisabled;
			import_react.useEffect(() => {
				const element = triggerElementRef.current;
				if (element && isElementDisabled(element) && !disabled) {
					const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
					warn(`A disabled element was detected on <Menu.SubmenuTrigger>. To properly disable the trigger, use the \`disabled\` prop on the component instead of setting it on the rendered element.${ownerStackMessage}`);
				}
			});
			const itemProps = parentMenuStore.useState("itemProps");
			const highlighted = parentMenuStore.useState("isActive", listItem.index);
			const itemMetadata = import_react.useMemo(() => ({
				type: "submenu-trigger",
				setActive() {
					if (parentMenuStore.select("highlightItemOnHover")) parentMenuStore.set("activeIndex", listItem.index);
				}
			}), [parentMenuStore, listItem.index]);
			const { getItemProps, itemRef } = useMenuItem({
				closeOnClick: false,
				disabled,
				highlighted,
				id: thisTriggerId,
				store,
				typingRef: parentMenuStore.context.typingRef,
				nativeButton,
				itemMetadata,
				nodeId: menuPositionerContext?.context.nodeId
			});
			const hoverEnabled = store.useState("hoverEnabled");
			const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
				enabled: hoverEnabled && openOnHover && !disabled,
				handleClose: safePolygon({ blockPointerEvents: true }),
				mouseOnly: true,
				move: true,
				restMs: delay,
				delay: {
					open: delay,
					close: closeDelay
				},
				shouldOpen: delay > 0 ? () => parentMenuStore.select("allowMouseEnter") : void 0,
				triggerElementRef,
				externalTree: floatingTreeRoot,
				isClosing: () => store.select("transitionStatus") === "ending",
				guardStaleOpen: true
			});
			const localInteractionProps = useClick(floatingRootContext, {
				enabled: !disabled,
				event: "mousedown",
				toggle: !openOnHover,
				ignoreMouse: openOnHover,
				stickIfOpen: false
			}).reference ?? EMPTY_OBJECT;
			const rootTriggerProps = store.useState("triggerProps", true);
			delete rootTriggerProps.id;
			const state = {
				disabled,
				highlighted,
				open
			};
			const openMethod = store.useState("openMethod");
			const openedByKeyboard = store.useState("lastOpenChangeReason") === "list-navigation" || openMethod === "keyboard";
			return useRenderElement("div", componentProps, {
				state,
				stateAttributesMapping: triggerOpenStateMapping,
				props: [
					localInteractionProps,
					hoverProps,
					rootTriggerProps,
					itemProps,
					open && openedByKeyboard && voiceOver ? VOICE_OVER_EXPANDED_PROPS : void 0,
					{
						"aria-controls": popupId,
						tabIndex: open || highlighted ? 0 : -1,
						onBlur() {
							if (highlighted) parentMenuStore.set("activeIndex", null);
						}
					},
					elementProps,
					getItemProps
				],
				ref: [
					forwardedRef,
					listItem.ref,
					itemRef,
					registerTrigger,
					handleTriggerElementRef
				]
			});
		});
		MenuSubmenuTrigger.displayName = "MenuSubmenuTrigger";
	})))();
}
//#endregion
export { init_MenuSubmenuRoot as i, init_MenuSubmenuTrigger as n, MenuSubmenuRoot as r, MenuSubmenuTrigger as t };
