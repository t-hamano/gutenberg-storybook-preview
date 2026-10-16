import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { f as init_empty, i as init_mergeProps, m as warn, o as mergeProps, p as init_warn, r as useRenderElement, t as init_useRenderElement, u as EMPTY_OBJECT } from "./useRenderElement-Dkv6YH0v.js";
import { i as init_safeReact, n as useIsoLayoutEffect, r as SafeReact, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-DDc8Lhn-.js";
import { n as useStableCallback, t as init_useStableCallback } from "./useStableCallback-Cql5w11m.js";
import { n as useCompositeListItem, t as init_useCompositeListItem } from "./useCompositeListItem-DCUBNr8F.js";
import { n as useBaseUiId, t as init_useBaseUiId } from "./useBaseUiId-CESTxyJs.js";
import { A as init_createBaseUIEventDetails, O as createChangeEventDetails, c as focusOut, u as init_reason_parts, x as pointer, y as none } from "./reason-parts-0ghxNVBE.js";
import { Ht as voiceOver, Mt as triggerOpenStateMapping, Ot as init_popupStateMapping, Vt as init_screen_reader, j as useTriggerRegistration, w as init_popupStoreUtils } from "./DirectionProvider-ijBUoTP5.js";
import { o as init_useClick, s as useClick } from "./useOpenInteractionType-BJdBBuIW.js";
import { a as init_shadowDom, i as getTarget } from "./shadowDom-C1kYxCnm.js";
import { i as useHoverReferenceInteraction, n as safePolygon, r as init_useHoverReferenceInteraction, t as init_safePolygon } from "./safePolygon-vycgRCWQ.js";
import { A as useMenuPositionerContext, D as init_MenuRootContext, E as useMenuFilterItem, O as useMenuRootContext, a as init_MenuRoot, b as init_useMenuItem, g as useMenuSubmenuRootContext, h as init_MenuSubmenuRootContext, i as MenuRootInternal, k as init_MenuPositionerContext, m as MenuSubmenuRootContext, o as MenuFilterProviderContext, s as init_MenuFilterProviderContext, w as init_MenuFilterContext, x as useMenuItem } from "./MenuTrigger-ClsOtY5u.js";
import { n as isElementDisabled } from "./isElementDisabled-D0Mq0f_R.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.mjs
/**
* Groups all parts of a submenu.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
*/
function MenuSubmenuRoot(props) {
	useMenuRootContext();
	const filterProvider = import_react$1.useContext(MenuFilterProviderContext);
	if (filterProvider !== null) {
		const FilterSubmenuRoot = filterProvider.SubmenuRoot;
		return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(MenuFilterProviderContext.Provider, {
			value: null,
			children: /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(FilterSubmenuRoot, {
				...filterProvider.options,
				...props
			})
		});
	}
	return /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(MenuSubmenuRootContext.Provider, {
		value: EMPTY_SUBMENU_ROOT_CONTEXT,
		children: /*#__PURE__*/ (0, import_jsx_runtime$1.jsx)(MenuRootInternal, {
			...props,
			isSubmenu: true
		})
	});
}
var import_react$1, import_jsx_runtime$1, EMPTY_SUBMENU_ROOT_CONTEXT;
function init_MenuSubmenuRoot() {
	return (init_MenuSubmenuRoot = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_MenuRoot();
		init_MenuRootContext();
		init_MenuSubmenuRootContext();
		init_MenuFilterProviderContext();
		import_jsx_runtime$1 = require_jsx_runtime();
		EMPTY_SUBMENU_ROOT_CONTEXT = {};
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.mjs
var import_react, import_jsx_runtime, VOICE_OVER_EXPANDED_PROPS, MenuSubmenuTriggerPlain, MenuSubmenuTrigger;
function init_MenuSubmenuTrigger() {
	return (init_MenuSubmenuTrigger = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_warn();
		init_safeReact();
		init_empty();
		init_screen_reader();
		init_useStableCallback();
		init_useIsoLayoutEffect();
		init_shadowDom();
		init_MenuFilterContext();
		init_mergeProps();
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
		init_createBaseUIEventDetails();
		import_jsx_runtime = require_jsx_runtime();
		VOICE_OVER_EXPANDED_PROPS = { "aria-expanded": void 0 };
		MenuSubmenuTriggerPlain = /*#__PURE__*/ import_react.forwardRef(function MenuSubmenuTriggerPlain(componentProps, forwardedRef) {
			const { render, className, style, label, id: idProp, nativeButton = false, openOnHover = true, delay = 100, closeDelay = 0, disabled: disabledProp = false, ...elementProps } = componentProps;
			const context = useMenuRootContext(true);
			if (context?.parent.type !== "menu") throw new Error("Base UI: <Menu.SubmenuTrigger> must be placed in <Menu.SubmenuRoot>.");
			const menuPositionerContext = useMenuPositionerContext();
			const submenuRootContext = useMenuSubmenuRootContext();
			const { store, parentVirtualFocus } = context;
			const parentMenuStore = context.parent.store;
			const listItem = useCompositeListItem({
				guess: true,
				label
			});
			const thisTriggerId = useBaseUiId(idProp);
			const open = store.useState("open");
			const focusReturnedThroughGuardRef = import_react.useRef(false);
			const positionerElement = store.useState("positionerElement");
			const floatingRootContext = store.useState("floatingRootContext");
			const floatingTreeRoot = store.useState("floatingTreeRoot");
			const popupId = store.useState("triggerPopupId", thisTriggerId);
			const baseRegisterTrigger = useTriggerRegistration(thisTriggerId, store);
			const registerTrigger = useStableCallback((element) => {
				baseRegisterTrigger(element);
				const activeTriggerElement = store.select("activeTriggerElement");
				if (element !== null && store.select("open") && (activeTriggerElement === element || store.select("activeTriggerId") == null)) store.update({
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
			useIsoLayoutEffect(() => {
				if (!open || !positionerElement) return;
				function handleGuardFocusOut(event) {
					if (getTarget(event) === store.context.beforeContentFocusGuardRef.current) focusReturnedThroughGuardRef.current = event.relatedTarget === triggerElementRef.current;
				}
				positionerElement.addEventListener("focusout", handleGuardFocusOut, true);
				return () => {
					focusReturnedThroughGuardRef.current = false;
					positionerElement.removeEventListener("focusout", handleGuardFocusOut, true);
				};
			}, [
				open,
				positionerElement,
				store
			]);
			store.useSyncedValue("closeDelay", closeDelay);
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
				setActive(event) {
					if (parentMenuStore.select("highlightItemOnHover")) parentMenuStore.setActiveIndex(listItem.index, pointer, event);
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
				toggle: true,
				ignoreMouse: openOnHover,
				stickIfOpen: openOnHover
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
			const shouldOmitExpanded = open && openedByKeyboard && voiceOver;
			const submenuKeyDownProps = submenuRootContext?.onTriggerKeyDown ? { onKeyDown: submenuRootContext.onTriggerKeyDown } : void 0;
			return useRenderElement("div", componentProps, {
				state,
				stateAttributesMapping: triggerOpenStateMapping,
				props: [
					localInteractionProps,
					hoverProps,
					rootTriggerProps,
					submenuKeyDownProps,
					itemProps,
					shouldOmitExpanded ? VOICE_OVER_EXPANDED_PROPS : void 0,
					{
						"aria-controls": popupId,
						tabIndex: parentVirtualFocus || !(open || highlighted) ? -1 : 0,
						onFocus(event) {
							if (store.select("open") && focusReturnedThroughGuardRef.current) {
								focusReturnedThroughGuardRef.current = false;
								store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent));
							}
						},
						onBlur() {
							if (highlighted) parentMenuStore.setActiveIndex(null, none);
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
		MenuSubmenuTriggerPlain.displayName = "MenuSubmenuTriggerPlain";
		MenuSubmenuTrigger = /*#__PURE__*/ import_react.forwardRef(function MenuSubmenuTrigger(props, forwardedRef) {
			const filterItem = useMenuFilterItem(props, forwardedRef, "submenu-trigger");
			if (!filterItem.visible) return null;
			const mergedProps = filterItem.props ? mergeProps(filterItem.props, props) : props;
			return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(MenuSubmenuTriggerPlain, {
				...mergedProps,
				ref: filterItem.ref
			});
		});
		MenuSubmenuTrigger.displayName = "MenuSubmenuTrigger";
	})))();
}
//#endregion
export { init_MenuSubmenuRoot as i, init_MenuSubmenuTrigger as n, MenuSubmenuRoot as r, MenuSubmenuTrigger as t };
