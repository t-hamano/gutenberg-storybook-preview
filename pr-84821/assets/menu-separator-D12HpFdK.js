import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { E as useCommand, O as withDefaultButtonType, S as useCompositeScopedContext, T as init_command, _ as CompositeContextProvider, b as init_composite_context, c as init_utils, l as isItem, m as init_composite_store, n as init_composite_item, p as createCompositeStore, r as useCompositeItem, y as CompositeScopedContextProvider } from "./composite-item-CtrOK3yA.js";
import { $ as hasFocusWithin, A as defaultValue, B as getDocument, D as applyState, G as getPopupItemRole, I as fireEvent, K as getPopupRole, M as disabledFromElement, Mt as shallowEqual, N as disabledFromProps, Ot as removeUndefinedValues, S as useUpdateEffect, X as getTextboxValue, Y as getTextboxSelection, a as init_dist, b as useTagName, bt as isTextbox, d as useForceUpdate, f as useId, g as useMergeRefs, ht as isOpeningInNewTab, i as forwardRef, l as useBooleanEvent, n as createHook, nt as init_dist$1, o as memo, ot as isDownloading, p as useInitialValue, r as createStoreContext, rt as invariant, t as createElement, u as useEvent, vt as isSelfTarget, w as useWrapElement } from "./dist-DgYpwR44.js";
import { a as useStore, f as init_dist$3, g as setup, h as pick, i as init_dist$2, m as omit, o as useStoreProps, p as mergeStore, s as useStoreState, u as createStore, v as sync, y as throwOnConflictingProps } from "./CDh2UhnG-eN0icMPG.js";
import { i as useCompositeStoreProps, o as init_composite, s as useComposite, t as init_composite_store$1 } from "./composite-store-D9hs8Xap.js";
import { C as init_disclosure_content, d as isCapturedDisclosure, f as Role, l as createDialogComponent, p as init_role, s as getBasePlacement, u as init_DpKu70iZ, w as isHidden } from "./popover-store-BWOmbx-S.js";
import { l as useComboboxProviderContext, s as init_combobox_context } from "./combobox-context-CzvECwRS.js";
import { n as init_separator, r as useSeparator } from "./separator-CLZUD056.js";
import { C as useHovercard, E as init_hovercard_context, S as useEscapeClose, T as HovercardScopedContextProvider, _ as init_Dv0S4FLv, d as init_hovercard_store$1, f as useHovercardStoreProps, m as init_hovercard_store, p as createHovercardStore, v as useHovercardTrigger, w as HovercardContextProvider, x as init_CW2hYOhU } from "./cubic-bezier-3qLFQs3s.js";
import { a as init_popover_disclosure, i as init_checkbox_checked_context, n as useCheckboxCheck, o as usePopoverDisclosure, r as CheckboxCheckedContext, t as init_checkbox_check } from "./checkbox-check-BwY3qqpX.js";
import { n as init_radio, r as useRadio } from "./radio-X61Zp7m4.js";
import { a as init_composite_typeahead, n as init_composite_hover, o as useCompositeTypeahead, r as useCompositeHover } from "./composite-hover-BAl6ZhEN.js";
import { a as init_composite_group, n as init_composite_group_label, o as useCompositeGroup, r as useCompositeGroupLabel } from "./composite-group-label-DF0u0K-7.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/composite/composite-separator.js
var TagName$11, useCompositeSeparator;
function init_composite_separator() {
	return (init_composite_separator = __esmMin((() => {
		init_composite_context();
		init_separator();
		init_dist();
		init_dist$1();
		init_dist$2();
		TagName$11 = "hr";
		useCompositeSeparator = createHook(function useCompositeSeparator({ store, orientation: orientationProp, ...props }) {
			const context = useCompositeScopedContext();
			store = store || context;
			invariant(store, "CompositeSeparator must be wrapped in a Composite component.");
			const orientation = useStoreState(store, ["orientation"], (state) => orientationProp ?? (state.orientation === "horizontal" ? "vertical" : "horizontal"));
			props = useSeparator({
				...props,
				orientation
			});
			return props;
		});
		forwardRef(function CompositeSeparator(props) {
			const htmlProps = useCompositeSeparator(props);
			return createElement(TagName$11, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menubar/menubar-context.js
var menubar, useMenubarContext, useMenubarScopedContext;
function init_menubar_context() {
	return (init_menubar_context = __esmMin((() => {
		init_composite_context();
		init_dist();
		menubar = createStoreContext([CompositeContextProvider], [CompositeScopedContextProvider]);
		useMenubarContext = menubar.useContext;
		useMenubarScopedContext = menubar.useScopedContext;
		menubar.useProviderContext;
		menubar.ContextProvider;
		menubar.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/checkbox/checkbox-store.js
function createCheckboxStore(props = {}) {
	throwOnConflictingProps(props, props.store);
	const syncState = props.store?.getState();
	const initialState = { value: defaultValue(props.value, syncState?.value, props.defaultValue, false) };
	const checkbox = createStore(initialState, props.store);
	return {
		...checkbox,
		setValue: (value) => checkbox.setState("value", value)
	};
}
function init_checkbox_store() {
	return (init_checkbox_store = __esmMin((() => {
		init_dist$3();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/checkbox/checkbox-store.js
function useCheckboxStoreProps(store, update, props) {
	useUpdateEffect(update, [props.store, update]);
	useStoreProps(store, props, "value", "setValue");
	return store;
}
function useCheckboxStore(props = {}) {
	const [store, update] = useStore(createCheckboxStore, props);
	return useCheckboxStoreProps(store, update, props);
}
function init_checkbox_store$1() {
	return (init_checkbox_store$1 = __esmMin((() => {
		init_dist();
		init_checkbox_store();
		init_dist$2();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/checkbox/checkbox-context.js
var ctx, useCheckboxContext;
function init_checkbox_context() {
	return (init_checkbox_context = __esmMin((() => {
		init_dist();
		ctx = createStoreContext();
		useCheckboxContext = ctx.useContext;
		ctx.useScopedContext;
		ctx.useProviderContext;
		ctx.ContextProvider;
		ctx.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/__chunks/DjvJNLSl.js
function getPrimitiveValue(value) {
	if (Array.isArray(value)) return value.toString();
	return value;
}
function setMixed(element, mixed) {
	if (mixed) element.indeterminate = true;
	else if (element.indeterminate) element.indeterminate = false;
}
function isNativeCheckbox(tagName, type) {
	return tagName === "input" && (!type || type === "checkbox");
}
var import_react$8, import_jsx_runtime$3, TagName$10, useCheckbox;
function init_DjvJNLSl() {
	return (init_DjvJNLSl = __esmMin((() => {
		init_command();
		init_checkbox_checked_context();
		init_checkbox_context();
		init_dist();
		init_dist$1();
		import_react$8 = require_react();
		import_jsx_runtime$3 = require_jsx_runtime();
		init_dist$2();
		TagName$10 = "input";
		useCheckbox = createHook(function useCheckbox({ store, name, value: valueProp, checked: checkedProp, defaultChecked, ...props }) {
			const context = useCheckboxContext();
			store = store || context;
			const [_checked, setChecked] = (0, import_react$8.useState)(defaultChecked ?? false);
			const checked = useStoreState(store, ["value"], (state) => {
				if (checkedProp !== void 0) return checkedProp;
				if (state?.value === void 0) return _checked;
				if (valueProp != null) {
					if (Array.isArray(state.value)) {
						const primitiveValue = getPrimitiveValue(valueProp);
						return state.value.includes(primitiveValue);
					}
					return state.value === valueProp;
				}
				if (Array.isArray(state.value)) return false;
				if (typeof state.value === "boolean") return state.value;
				return false;
			});
			const ref = (0, import_react$8.useRef)(null);
			const nativeCheckbox = isNativeCheckbox(useTagName(ref, TagName$10), props.type);
			const mixed = checked ? checked === "mixed" : void 0;
			const isChecked = checked === "mixed" ? false : checked;
			const disabled = disabledFromProps(props);
			const [propertyUpdated, schedulePropertyUpdate] = useForceUpdate();
			(0, import_react$8.useEffect)(() => {
				const element = ref.current;
				if (!element) return;
				setMixed(element, mixed);
				if (nativeCheckbox) return;
				element.checked = isChecked;
				if (name !== void 0) element.name = name;
				if (valueProp !== void 0) element.value = String(valueProp);
			}, [
				propertyUpdated,
				mixed,
				nativeCheckbox,
				isChecked,
				name,
				valueProp
			]);
			const onChangeProp = props.onChange;
			const onChange = useEvent((event) => {
				if (disabled) {
					event.stopPropagation();
					event.preventDefault();
					return;
				}
				setMixed(event.currentTarget, mixed);
				if (!nativeCheckbox) {
					event.currentTarget.checked = !event.currentTarget.checked;
					schedulePropertyUpdate();
				}
				onChangeProp?.(event);
				if (event.defaultPrevented) return;
				const elementChecked = event.currentTarget.checked;
				setChecked(elementChecked);
				store?.setValue((prevValue) => {
					if (valueProp == null) return elementChecked;
					const primitiveValue = getPrimitiveValue(valueProp);
					if (!Array.isArray(prevValue)) return prevValue === primitiveValue ? false : primitiveValue;
					if (elementChecked) {
						if (prevValue.includes(primitiveValue)) return prevValue;
						return [...prevValue, primitiveValue];
					}
					return prevValue.filter((v) => v !== primitiveValue);
				});
			});
			const onClickProp = props.onClick;
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				if (nativeCheckbox) return;
				onChange(event);
			});
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(CheckboxCheckedContext.Provider, {
				value: isChecked,
				children: element
			}), [isChecked]);
			props = {
				role: !nativeCheckbox ? "checkbox" : void 0,
				type: nativeCheckbox ? "checkbox" : void 0,
				"aria-checked": checked,
				...props,
				ref: useMergeRefs(ref, props.ref),
				onChange,
				onClick
			};
			props = useCommand({
				clickOnEnter: !nativeCheckbox,
				...props
			});
			return removeUndefinedValues({
				name: nativeCheckbox ? name : void 0,
				value: nativeCheckbox ? valueProp : void 0,
				checked: isChecked,
				...props
			});
		});
		forwardRef(function Checkbox(props) {
			const htmlProps = useCheckbox(props);
			return createElement(TagName$10, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-context.js
var import_react$7, menu, useMenuContext, useMenuScopedContext, useMenuProviderContext, MenuContextProvider, MenuScopedContextProvider, MenuItemCheckedContext, MenuListHiddenContext;
function init_menu_context() {
	return (init_menu_context = __esmMin((() => {
		init_composite_context();
		init_hovercard_context();
		init_dist();
		import_react$7 = require_react();
		menu = createStoreContext([CompositeContextProvider, HovercardContextProvider], [CompositeScopedContextProvider, HovercardScopedContextProvider]);
		useMenuContext = menu.useContext;
		useMenuScopedContext = menu.useScopedContext;
		useMenuProviderContext = menu.useProviderContext;
		MenuContextProvider = menu.ContextProvider;
		MenuScopedContextProvider = menu.ScopedContextProvider;
		MenuItemCheckedContext = (0, import_react$7.createContext)(void 0);
		MenuListHiddenContext = (0, import_react$7.createContext)(false);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-list.js
function useAriaLabelledBy({ store, ...props }) {
	const [id, setId] = (0, import_react$6.useState)(void 0);
	const label = props["aria-label"];
	const disclosureElement = useStoreState(store, "disclosureElement");
	const contentElement = useStoreState(store, "contentElement");
	(0, import_react$6.useEffect)(() => {
		const menu = contentElement;
		if (!menu) return;
		const nextId = label || menu.hasAttribute("aria-label") ? void 0 : disclosureElement?.id || void 0;
		setId(nextId);
	}, [
		label,
		disclosureElement,
		contentElement
	]);
	return id;
}
var import_react$6, import_jsx_runtime$2, TagName$9, useMenuList;
function init_menu_list() {
	return (init_menu_list = __esmMin((() => {
		init_utils();
		init_composite();
		init_disclosure_content();
		init_composite_typeahead();
		init_menu_context();
		init_dist();
		init_dist$1();
		import_react$6 = require_react();
		import_jsx_runtime$2 = require_jsx_runtime();
		init_dist$2();
		TagName$9 = "div";
		useMenuList = createHook(function useMenuList({ store, alwaysVisible, composite, ...props }) {
			const context = useMenuProviderContext();
			store = store || context;
			invariant(store, "MenuList must receive a `store` prop or be wrapped in a MenuProvider component.");
			const parentMenu = store.parent;
			const parentMenubar = store.menubar;
			const hasParentMenu = !!parentMenu;
			const id = useId(props.id);
			const onKeyDownProp = props.onKeyDown;
			const dir = useStoreState(store, ["placement"], (state) => getBasePlacement(state.placement));
			const orientation = useStoreState(store, ["orientation"], (state) => state.orientation === "both" ? void 0 : state.orientation);
			const isHorizontal = orientation !== "vertical";
			const isMenubarHorizontal = useStoreState(parentMenubar, ["orientation"], (state) => !!state && state.orientation !== "vertical");
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (event.defaultPrevented) return;
				const target = event.target;
				if (!isSelfTarget(event) && !isItem(store, target)) return;
				if (isTextbox(target)) {
					const selection = getTextboxSelection(target);
					const isPrevious = event.key === "ArrowLeft" || event.key === "ArrowUp";
					const isNext = event.key === "ArrowRight" || event.key === "ArrowDown";
					if (isPrevious && selection.start !== 0) return;
					if (isNext && selection.end !== getTextboxValue(target).length) return;
				}
				if (hasParentMenu || parentMenubar && !isHorizontal) {
					const action = {
						ArrowRight: () => dir === "left" && !isHorizontal,
						ArrowLeft: () => dir === "right" && !isHorizontal,
						ArrowUp: () => dir === "bottom" && isHorizontal,
						ArrowDown: () => dir === "top" && isHorizontal
					}[event.key];
					if (action?.()) {
						event.stopPropagation();
						event.preventDefault();
						return store?.hide();
					}
				}
				if (parentMenubar) {
					const action = {
						ArrowRight: () => {
							if (!isMenubarHorizontal) return;
							return parentMenubar.next();
						},
						ArrowLeft: () => {
							if (!isMenubarHorizontal) return;
							return parentMenubar.previous();
						},
						ArrowDown: () => {
							if (isMenubarHorizontal) return;
							return parentMenubar.down();
						},
						ArrowUp: () => {
							if (isMenubarHorizontal) return;
							return parentMenubar.up();
						}
					}[event.key];
					const id = action?.();
					if (id !== void 0) {
						event.stopPropagation();
						event.preventDefault();
						parentMenubar.move(id);
					}
				}
			});
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(MenuScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			const ariaLabelledBy = useAriaLabelledBy({
				store,
				...props
			});
			const mounted = useStoreState(store, "mounted");
			const hidden = isHidden(mounted, props.hidden, alwaysVisible);
			const style = hidden ? {
				...props.style,
				display: "none"
			} : props.style;
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(MenuListHiddenContext.Provider, {
				value: hidden,
				children: element
			}), [hidden]);
			props = {
				"aria-labelledby": ariaLabelledBy,
				hidden,
				...props,
				id,
				ref: useMergeRefs(id ? store.setContentElement : null, props.ref),
				style,
				onKeyDown
			};
			const hasCombobox = !!store.combobox;
			composite = composite ?? !hasCombobox;
			if (composite) props = {
				role: "menu",
				"aria-orientation": orientation,
				...props
			};
			props = useComposite({
				store,
				composite,
				...props
			});
			props = useCompositeTypeahead({
				store,
				typeahead: !hasCombobox,
				...props
			});
			return props;
		});
		forwardRef(function MenuList(props) {
			const htmlProps = useMenuList(props);
			return createElement(TagName$9, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu.js
var import_react$5, TagName$8, useMenu, Menu;
function init_menu() {
	return (init_menu = __esmMin((() => {
		init_DpKu70iZ();
		init_CW2hYOhU();
		init_menu_context();
		init_menu_list();
		init_dist();
		init_dist$1();
		import_react$5 = require_react();
		init_dist$2();
		TagName$8 = "div";
		useMenu = createHook(function useMenu({ store, modal: modalProp = false, portal = modalProp, hideOnEscape = true, autoFocusOnShow = true, hideOnHoverOutside, alwaysVisible, getPersistentElements, unstable_treeSnapshotKey, ...props }) {
			const context = useMenuProviderContext();
			store = store || context;
			invariant(store, "Menu must receive a `store` prop or be wrapped in a MenuProvider component.");
			const ref = (0, import_react$5.useRef)(null);
			const parentMenu = store.parent;
			const parentMenubar = store.menubar;
			const hasParentMenu = !!parentMenu;
			const parentIsMenubar = !!parentMenubar && !hasParentMenu;
			const modal = hasParentMenu ? false : modalProp;
			props = {
				...props,
				ref: useMergeRefs(ref, props.ref)
			};
			const { "aria-labelledby": ariaLabelledBy, ...menuListProps } = useMenuList({
				store,
				alwaysVisible,
				...props
			});
			props = menuListProps;
			const [initialFocusRef, setInitialFocusRef] = (0, import_react$5.useState)();
			const initialFocusElement = useStoreState(store, [
				"autoFocusOnShow",
				"initialFocus",
				"renderedItems",
				"compositeElement"
			], (state) => {
				if (!state.autoFocusOnShow) return;
				const isEnabled = (item) => !item.disabled && !!item.element;
				switch (state.initialFocus) {
					case "first": return state.renderedItems.find(isEnabled)?.element || null;
					case "last":
						for (let i = state.renderedItems.length - 1; i >= 0; i -= 1) {
							const item = state.renderedItems[i];
							if (item && isEnabled(item)) return item.element;
						}
						return null;
					default: return state.compositeElement;
				}
			});
			(0, import_react$5.useEffect)(() => {
				let cleaning = false;
				setInitialFocusRef((prevInitialFocusRef) => {
					if (cleaning) return;
					if (modal && prevInitialFocusRef?.current?.isConnected) return prevInitialFocusRef;
					if (initialFocusElement === void 0) return;
					if (initialFocusElement && initialFocusElement === prevInitialFocusRef?.current) return prevInitialFocusRef;
					const ref = (0, import_react$5.createRef)();
					ref.current = initialFocusElement;
					return ref;
				});
				return () => {
					cleaning = true;
				};
			}, [modal, initialFocusElement]);
			const canAutoFocusOnShow = !!initialFocusRef || !!props.initialFocus || modal;
			const autoFocusOnShowProp = autoFocusOnShow === false ? false : canAutoFocusOnShow && autoFocusOnShow;
			const finalFocusElement = useStoreState(store, ["disclosureElement", "anchorElement"], (state) => state.disclosureElement || state.anchorElement);
			const persistentDisclosure = useStoreState(store, ["disclosureElement", "contentElement"], (state) => {
				const { disclosureElement, contentElement } = state;
				if (!disclosureElement?.isConnected) return null;
				if (isCapturedDisclosure(disclosureElement)) return null;
				if (contentElement?.contains(disclosureElement)) return null;
				return disclosureElement;
			});
			const disclosureKey = modal ? persistentDisclosure : null;
			const treeSnapshotKey = (0, import_react$5.useMemo)(() => [unstable_treeSnapshotKey, disclosureKey], [unstable_treeSnapshotKey, disclosureKey]);
			const contentElement = useStoreState(store.combobox || store, "contentElement");
			const parentContentElement = useStoreState(parentMenu?.combobox || parentMenu, "contentElement");
			const preserveTabOrderAnchor = (0, import_react$5.useMemo)(() => {
				if (!parentContentElement) return;
				if (!contentElement) return;
				const role = contentElement.getAttribute("role");
				const parentRole = parentContentElement.getAttribute("role");
				if ((parentRole === "menu" || parentRole === "menubar") && role === "menu") return;
				return parentContentElement;
			}, [contentElement, parentContentElement]);
			if (preserveTabOrderAnchor !== void 0) props = {
				preserveTabOrderAnchor,
				...props
			};
			const escapeClose = useEscapeClose({
				hideOnEscape,
				onClose: props.onClose,
				onEscapeClose: () => parentMenu?.hideAll()
			});
			props = useHovercard({
				store,
				alwaysVisible,
				initialFocus: initialFocusRef,
				autoFocusOnShow: autoFocusOnShowProp,
				finalFocus: finalFocusElement,
				...props,
				hideOnEscape: escapeClose.hideOnEscape,
				onClose: escapeClose.onClose,
				hideOnHoverOutside(event) {
					const disclosureElement = store?.getState().disclosureElement;
					const getHideOnHoverOutside = () => {
						if (typeof hideOnHoverOutside === "function") return hideOnHoverOutside(event);
						if (hideOnHoverOutside != null) return hideOnHoverOutside;
						if (hasParentMenu) return true;
						if (!parentIsMenubar) return false;
						if (!disclosureElement) return true;
						if (hasFocusWithin(disclosureElement)) return false;
						return true;
					};
					if (!getHideOnHoverOutside()) return false;
					if (event.defaultPrevented) return true;
					if (!hasParentMenu) return true;
					if (!disclosureElement) return true;
					fireEvent(disclosureElement, "mouseout", event);
					if (!hasFocusWithin(disclosureElement)) return true;
					requestAnimationFrame(() => {
						if (hasFocusWithin(disclosureElement)) return;
						store?.hide();
					});
					return false;
				},
				getPersistentElements() {
					const elements = getPersistentElements?.() || [];
					if (!modal) return elements;
					if (!persistentDisclosure) return elements;
					return [...elements, persistentDisclosure];
				},
				unstable_treeSnapshotKey: treeSnapshotKey,
				modal,
				portal,
				backdrop: hasParentMenu ? false : props.backdrop
			});
			props = {
				"aria-labelledby": ariaLabelledBy,
				...props
			};
			return props;
		});
		Menu = createDialogComponent(forwardRef(function Menu(props) {
			const htmlProps = useMenu(props);
			return createElement(TagName$8, htmlProps);
		}), useMenuProviderContext);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-button.js
function getInitialFocus(event, dir) {
	return {
		ArrowDown: dir === "bottom" || dir === "top" ? "first" : false,
		ArrowUp: dir === "bottom" || dir === "top" ? "last" : false,
		ArrowRight: dir === "right" ? "first" : false,
		ArrowLeft: dir === "left" ? "first" : false
	}[event.key];
}
function hasActiveItem(items, excludeElement) {
	return !!items?.some((item) => {
		if (!item.element) return false;
		if (item.element === excludeElement) return false;
		return item.element.getAttribute("aria-expanded") === "true";
	});
}
var import_react$4, import_jsx_runtime$1, TagName$7, useMenuButton, MenuButton;
function init_menu_button() {
	return (init_menu_button = __esmMin((() => {
		init_popover_disclosure();
		init_composite_typeahead();
		init_role();
		init_Dv0S4FLv();
		init_menu_context();
		init_dist();
		init_dist$1();
		import_react$4 = require_react();
		import_jsx_runtime$1 = require_jsx_runtime();
		init_dist$2();
		TagName$7 = "button";
		useMenuButton = createHook(function useMenuButton({ store, focusable, accessibleWhenDisabled, showOnHover, unstable_showOnHoverWhenDisabled: showOnHoverWhenDisabled = false, ...props }) {
			const context = useMenuProviderContext();
			store = store || context;
			invariant(store, "MenuButton must receive a `store` prop or be wrapped in a MenuProvider component.");
			const ref = (0, import_react$4.useRef)(null);
			const parentMenu = store.parent;
			const parentMenubar = store.menubar;
			const hasParentMenu = !!parentMenu;
			const parentIsMenubar = !!parentMenubar && !hasParentMenu;
			const disabled = disabledFromProps(props);
			const isDisabled = (element) => disabled || disabledFromElement(element);
			const showMenu = () => {
				const trigger = ref.current;
				if (!trigger) return;
				store?.setDisclosureElement(trigger);
				store?.show();
			};
			const onFocusProp = props.onFocus;
			const onFocus = useEvent((event) => {
				onFocusProp?.(event);
				if (isDisabled(event.currentTarget)) return;
				if (event.defaultPrevented) return;
				store?.setAutoFocusOnShow(false);
				store?.setActiveId(null);
				if (!parentMenubar) return;
				if (!parentIsMenubar) return;
				const { items } = parentMenubar.getState();
				if (hasActiveItem(items, event.currentTarget)) showMenu();
			});
			const dir = useStoreState(store, ["placement"], (state) => getBasePlacement(state.placement));
			const onKeyDownProp = props.onKeyDown;
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (isDisabled(event.currentTarget)) return;
				if (event.defaultPrevented) return;
				const initialFocus = getInitialFocus(event, dir);
				if (initialFocus) {
					event.preventDefault();
					const { open } = store.getState();
					if (open) {
						const id = initialFocus === "last" ? store.last() : store.first();
						store.move(id);
						return;
					}
					showMenu();
					store?.setAutoFocusOnShow(true);
					store?.setInitialFocus(initialFocus);
				}
			});
			const onClickProp = props.onClick;
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				if (!store) return;
				const isKeyboardClick = !event.detail;
				const { open } = store.getState();
				if (!open || isKeyboardClick) {
					if (!hasParentMenu || isKeyboardClick) store.setAutoFocusOnShow(true);
					store.setInitialFocus(isKeyboardClick ? "first" : "container");
				}
				if (hasParentMenu) showMenu();
			});
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(MenuContextProvider, {
				value: store,
				children: element
			}), [store]);
			if (hasParentMenu) props = {
				...props,
				render: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Role.div, { render: props.render })
			};
			const id = useId(props.id);
			const parentContentElement = useStoreState(parentMenu?.combobox || parentMenu, "contentElement");
			const role = hasParentMenu || parentIsMenubar ? getPopupItemRole(parentContentElement, "menuitem") : void 0;
			const contentElement = useStoreState(store, "contentElement");
			const hasCombobox = !!store.combobox;
			props = {
				role,
				"aria-haspopup": getPopupRole(contentElement, hasCombobox ? "dialog" : "menu"),
				...props,
				id,
				ref: useMergeRefs(ref, props.ref),
				onFocus,
				onKeyDown,
				onClick
			};
			props = useHovercardTrigger({
				store,
				focusable,
				accessibleWhenDisabled,
				...props,
				unstable_showOnHoverWhenDisabled: showOnHoverWhenDisabled,
				showOnHover: (event) => {
					const getShowOnHover = () => {
						if (typeof showOnHover === "function") return showOnHover(event);
						if (showOnHover != null) return showOnHover;
						if (hasParentMenu) return true;
						if (!parentMenubar) return false;
						const { items } = parentMenubar.getState();
						return parentIsMenubar && hasActiveItem(items);
					};
					if (!getShowOnHover()) return false;
					const parent = parentIsMenubar ? parentMenubar : parentMenu;
					if (!parent) return true;
					parent.setActiveId(event.currentTarget.id);
					return true;
				}
			});
			props = usePopoverDisclosure({
				store,
				toggleOnClick: !hasParentMenu,
				focusable,
				accessibleWhenDisabled,
				...props
			});
			props = useCompositeTypeahead({
				store,
				typeahead: parentIsMenubar,
				...props
			});
			return props;
		});
		MenuButton = forwardRef(function MenuButton(props) {
			const htmlProps = useMenuButton(props);
			return createElement(TagName$7, withDefaultButtonType(htmlProps));
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-group.js
var TagName$6, useMenuGroup, MenuGroup;
function init_menu_group() {
	return (init_menu_group = __esmMin((() => {
		init_composite_group();
		init_dist();
		TagName$6 = "div";
		useMenuGroup = createHook(function useMenuGroup(props) {
			props = useCompositeGroup(props);
			return props;
		});
		MenuGroup = forwardRef(function MenuGroup(props) {
			const htmlProps = useMenuGroup(props);
			return createElement(TagName$6, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-group-label.js
var TagName$5, useMenuGroupLabel, MenuGroupLabel;
function init_menu_group_label() {
	return (init_menu_group_label = __esmMin((() => {
		init_composite_group_label();
		init_dist();
		TagName$5 = "div";
		useMenuGroupLabel = createHook(function useMenuGroupLabel(props) {
			props = useCompositeGroupLabel(props);
			return props;
		});
		MenuGroupLabel = forwardRef(function MenuGroupLabel(props) {
			const htmlProps = useMenuGroupLabel(props);
			return createElement(TagName$5, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-item.js
function menuHasFocus(compositeElement, items, currentTarget) {
	if (!compositeElement) return false;
	if (hasFocusWithin(compositeElement)) return true;
	const expandedMenuId = (items?.find((item) => {
		if (item.element === currentTarget) return false;
		return item.element?.getAttribute("aria-expanded") === "true";
	}))?.element?.getAttribute("aria-controls");
	if (!expandedMenuId) return false;
	const expandedMenu = getDocument(compositeElement).getElementById(expandedMenuId);
	if (!expandedMenu) return false;
	if (hasFocusWithin(expandedMenu)) return true;
	return !!expandedMenu.querySelector("[role=menuitem][aria-expanded=true]");
}
var import_react$3, TagName$4, useMenuItem, MenuItem;
function init_menu_item() {
	return (init_menu_item = __esmMin((() => {
		init_composite_hover();
		init_composite_item();
		init_menubar_context();
		init_menu_context();
		init_dist();
		init_dist$1();
		import_react$3 = require_react();
		init_dist$2();
		TagName$4 = "div";
		useMenuItem = createHook(function useMenuItem({ store, hideOnClick = true, preventScrollOnKeyDown = true, focusOnHover, blurOnHoverEnd, ...props }) {
			const menuContext = useMenuScopedContext(true);
			const menubarContext = useMenubarScopedContext();
			store = store || menuContext || menubarContext;
			invariant(store, "MenuItem must be wrapped in a MenuList, Menu or Menubar component");
			const onClickProp = props.onClick;
			const hideOnClickProp = useBooleanEvent(hideOnClick);
			const hideMenu = "hideAll" in store ? store.hideAll : void 0;
			const isWithinMenu = !!hideMenu;
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				if (isDownloading(event)) return;
				if (isOpeningInNewTab(event)) return;
				if (!hideMenu) return;
				const popupType = event.currentTarget.getAttribute("aria-haspopup");
				if (popupType && popupType !== "false") return;
				if (!hideOnClickProp(event)) return;
				hideMenu();
			});
			const contentElement = useStoreState(store, ["contentElement"], (state) => "contentElement" in state ? state.contentElement : null);
			const menuListHidden = (0, import_react$3.useContext)(MenuListHiddenContext);
			props = {
				role: getPopupItemRole(contentElement, "menuitem"),
				...props,
				onClick
			};
			props = useCompositeItem({
				store,
				preventScrollOnKeyDown,
				...props,
				shouldRegisterItem: menuListHidden ? false : props.shouldRegisterItem
			});
			props = useCompositeHover({
				store,
				...props,
				focusOnHover(event) {
					const getFocusOnHover = () => {
						if (typeof focusOnHover === "function") return focusOnHover(event);
						if (focusOnHover != null) return focusOnHover;
						return true;
					};
					if (!store) return false;
					if (!getFocusOnHover()) return false;
					const { compositeElement, items } = store.getState();
					if (isWithinMenu) {
						if (event.currentTarget.hasAttribute("aria-expanded")) event.currentTarget.focus({ preventScroll: true });
						return true;
					}
					if (menuHasFocus(compositeElement, items, event.currentTarget)) {
						event.currentTarget.focus({ preventScroll: true });
						return true;
					}
					return false;
				},
				blurOnHoverEnd(event) {
					if (typeof blurOnHoverEnd === "function") return blurOnHoverEnd(event);
					if (blurOnHoverEnd != null) return blurOnHoverEnd;
					return isWithinMenu;
				}
			});
			return props;
		});
		MenuItem = memo(forwardRef(function MenuItem(props) {
			const htmlProps = useMenuItem(props);
			return createElement(TagName$4, htmlProps);
		}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-item-check.js
var import_react$2, TagName$3, useMenuItemCheck, MenuItemCheck;
function init_menu_item_check() {
	return (init_menu_item_check = __esmMin((() => {
		init_checkbox_check();
		init_menu_context();
		init_dist();
		import_react$2 = require_react();
		TagName$3 = "span";
		useMenuItemCheck = createHook(function useMenuItemCheck({ store, checked, ...props }) {
			const context = (0, import_react$2.useContext)(MenuItemCheckedContext);
			checked = checked ?? context;
			props = useCheckboxCheck({
				...props,
				checked
			});
			return props;
		});
		MenuItemCheck = forwardRef(function MenuItemCheck(props) {
			const htmlProps = useMenuItemCheck(props);
			return createElement(TagName$3, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-item-checkbox.js
function getValue$1(storeValue, value, checked) {
	if (value === void 0) {
		if (Array.isArray(storeValue)) return storeValue;
		return !!checked;
	}
	const primitiveValue = getPrimitiveValue(value);
	if (!Array.isArray(storeValue)) {
		if (checked) return primitiveValue;
		return storeValue === primitiveValue ? false : storeValue;
	}
	if (checked) {
		if (storeValue.includes(primitiveValue)) return storeValue;
		return [...storeValue, primitiveValue];
	}
	return storeValue.filter((v) => v !== primitiveValue);
}
var import_react$1, TagName$2, useMenuItemCheckbox, MenuItemCheckbox;
function init_menu_item_checkbox() {
	return (init_menu_item_checkbox = __esmMin((() => {
		init_checkbox_store$1();
		init_DjvJNLSl();
		init_menu_context();
		init_menu_item();
		init_dist();
		init_dist$1();
		import_react$1 = require_react();
		init_dist$2();
		TagName$2 = "div";
		useMenuItemCheckbox = createHook(function useMenuItemCheckbox({ store, name, value, checked, defaultChecked: defaultCheckedProp, hideOnClick = false, ...props }) {
			const context = useMenuScopedContext();
			store = store || context;
			invariant(store, "MenuItemCheckbox must be wrapped in a MenuList or Menu component");
			const defaultChecked = useInitialValue(defaultCheckedProp);
			(0, import_react$1.useEffect)(() => {
				store?.setValue(name, (prevValue = value !== void 0 ? [] : false) => {
					if (!defaultChecked) return prevValue;
					return getValue$1(prevValue, value, true);
				});
			}, [
				store,
				name,
				value,
				defaultChecked
			]);
			(0, import_react$1.useEffect)(() => {
				if (checked === void 0) return;
				store?.setValue(name, (prevValue) => {
					return getValue$1(prevValue, value, checked);
				});
			}, [
				store,
				name,
				value,
				checked
			]);
			const checkboxStore = useCheckboxStore({
				value: useStoreState(store, ["values"], (state) => state.values[name]),
				setValue(internalValue) {
					store?.setValue(name, () => {
						if (checked === void 0) return internalValue;
						const nextValue = getValue$1(internalValue, value, checked);
						if (!Array.isArray(nextValue)) return nextValue;
						if (!Array.isArray(internalValue)) return nextValue;
						if (shallowEqual(internalValue, nextValue)) return internalValue;
						return nextValue;
					});
				}
			});
			props = {
				role: "menuitemcheckbox",
				...props
			};
			props = useCheckbox({
				store: checkboxStore,
				name,
				value,
				checked,
				...props
			});
			props = useMenuItem({
				store,
				hideOnClick,
				...props
			});
			return props;
		});
		MenuItemCheckbox = memo(forwardRef(function MenuItemCheckbox(props) {
			const htmlProps = useMenuItemCheckbox(props);
			return createElement(TagName$2, htmlProps);
		}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-item-radio.js
function getValue(prevValue, value, checked) {
	if (checked === void 0) return prevValue;
	if (checked) return value;
	return prevValue === value ? false : prevValue;
}
var import_react, import_jsx_runtime, TagName$1, useMenuItemRadio, MenuItemRadio;
function init_menu_item_radio() {
	return (init_menu_item_radio = __esmMin((() => {
		init_radio();
		init_menu_context();
		init_menu_item();
		init_dist();
		init_dist$1();
		import_react = require_react();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$2();
		TagName$1 = "div";
		useMenuItemRadio = createHook(function useMenuItemRadio({ store, name, value, checked, defaultChecked: defaultCheckedProp, onChange: onChangeProp, hideOnClick = false, ...props }) {
			const context = useMenuScopedContext();
			store = store || context;
			invariant(store, "MenuItemRadio must be wrapped in a MenuList or Menu component");
			const defaultChecked = useInitialValue(defaultCheckedProp);
			(0, import_react.useEffect)(() => {
				store?.setValue(name, (prevValue = false) => {
					return getValue(prevValue, value, defaultChecked);
				});
			}, [
				store,
				name,
				value,
				defaultChecked
			]);
			(0, import_react.useEffect)(() => {
				if (checked === void 0) return;
				store?.setValue(name, (prevValue) => {
					return getValue(prevValue, value, checked);
				});
			}, [
				store,
				name,
				value,
				checked
			]);
			const isChecked = useStoreState(store, ["values"], (state) => state.values[name] === value);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemCheckedContext.Provider, {
				value: isChecked,
				children: element
			}), [isChecked]);
			props = {
				role: "menuitemradio",
				...props
			};
			props = useRadio({
				name,
				value,
				checked: isChecked,
				onChange(event) {
					onChangeProp?.(event);
					if (event.defaultPrevented) return;
					const element = event.currentTarget;
					store?.setValue(name, (prevValue) => {
						return getValue(prevValue, value, checked ?? element.checked);
					});
				},
				...props
			});
			props = useMenuItem({
				store,
				hideOnClick,
				...props
			});
			return props;
		});
		MenuItemRadio = memo(forwardRef(function MenuItemRadio(props) {
			const htmlProps = useMenuItemRadio(props);
			return createElement(TagName$1, htmlProps);
		}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/menu/menu-store.js
function createMenuStore({ combobox, parent, menubar, ...props } = {}) {
	const parentIsMenubar = !!menubar && !parent;
	const store = mergeStore(props.store, pick(parent, ["values"]), omit(combobox, [
		"arrowElement",
		"anchorElement",
		"contentElement",
		"popoverElement",
		"disclosureElement",
		"placement",
		"currentPlacement"
	]));
	throwOnConflictingProps(props, store);
	const syncState = store.getState();
	const orientedPlacement = (parent || menubar)?.getState().orientation === "vertical" ? "right-start" : "bottom-start";
	const composite = createCompositeStore({
		...props,
		store,
		orientation: defaultValue(props.orientation, syncState.orientation, "vertical")
	});
	const hovercard = createHovercardStore({
		...props,
		store,
		placement: defaultValue(props.placement, syncState.placement, orientedPlacement),
		timeout: defaultValue(props.timeout, syncState.timeout, parentIsMenubar ? 0 : 150),
		hideTimeout: defaultValue(props.hideTimeout, syncState.hideTimeout, 0)
	});
	const initialState = {
		...composite.getState(),
		...hovercard.getState(),
		initialFocus: defaultValue(syncState.initialFocus, "container"),
		values: defaultValue(props.values, syncState.values, props.defaultValues, {})
	};
	const menu = createStore(initialState, composite, hovercard, store);
	setup(menu, () => combobox?.unstable_onHideRequest(hovercard.unstable_requestHide));
	setup(menu, () => sync(menu, ["mounted"], (state) => {
		if (state.mounted) return;
		menu.setState("activeId", null);
	}));
	return {
		...composite,
		...hovercard,
		...menu,
		combobox,
		parent,
		menubar,
		hideAll: () => {
			hovercard.hide();
			parent?.hideAll();
		},
		setInitialFocus: (value) => menu.setState("initialFocus", value),
		setValues: (values) => menu.setState("values", values),
		setValue: (name, value) => {
			if (name === "__proto__") return;
			if (name === "constructor") return;
			if (Array.isArray(name)) return;
			menu.setState("values", (values) => {
				const prevValue = values[name];
				const nextValue = applyState(value, prevValue);
				if (nextValue === prevValue) return values;
				return {
					...values,
					[name]: nextValue !== void 0 && nextValue
				};
			});
		}
	};
}
function init_menu_store() {
	return (init_menu_store = __esmMin((() => {
		init_composite_store();
		init_hovercard_store();
		init_dist$3();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-store.js
function useMenuStoreProps(store, update, props) {
	useUpdateEffect(update, [
		props.combobox,
		props.parent,
		props.menubar,
		update
	]);
	useStoreProps(store, props, "values", "setValues");
	return Object.assign(useHovercardStoreProps(useCompositeStoreProps(store, update, props), update, props), {
		combobox: props.combobox,
		parent: props.parent,
		menubar: props.menubar
	});
}
function useMenuStore(props = {}) {
	const parent = useMenuContext();
	const menubar = useMenubarContext();
	const combobox = useComboboxProviderContext();
	props = {
		...props,
		parent: props.parent !== void 0 ? props.parent : parent,
		menubar: props.menubar !== void 0 ? props.menubar : menubar,
		combobox: props.combobox !== void 0 ? props.combobox : combobox
	};
	const [store, update] = useStore(createMenuStore, props);
	return useMenuStoreProps(store, update, props);
}
function init_menu_store$1() {
	return (init_menu_store$1 = __esmMin((() => {
		init_combobox_context();
		init_composite_store$1();
		init_hovercard_store$1();
		init_menubar_context();
		init_menu_context();
		init_dist();
		init_dist$2();
		init_menu_store();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/menu/menu-separator.js
var TagName, useMenuSeparator, MenuSeparator;
function init_menu_separator() {
	return (init_menu_separator = __esmMin((() => {
		init_composite_separator();
		init_menu_context();
		init_dist();
		TagName = "hr";
		useMenuSeparator = createHook(function useMenuSeparator({ store, ...props }) {
			const context = useMenuContext();
			store = store || context;
			props = useCompositeSeparator({
				store,
				...props
			});
			return props;
		});
		MenuSeparator = forwardRef(function MenuSeparator(props) {
			const htmlProps = useMenuSeparator(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
export { MenuButton as _, MenuItemRadio as a, init_menu as b, init_menu_item_checkbox as c, MenuItem as d, init_menu_item as f, init_menu_group as g, MenuGroup as h, useMenuStore as i, MenuItemCheck as l, init_menu_group_label as m, init_menu_separator as n, init_menu_item_radio as o, MenuGroupLabel as p, init_menu_store$1 as r, MenuItemCheckbox as s, MenuSeparator as t, init_menu_item_check as u, init_menu_button as v, Menu as y };
