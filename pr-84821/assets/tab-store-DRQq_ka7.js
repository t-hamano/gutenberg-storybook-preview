import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { C as init_collection_item, O as withDefaultButtonType, _ as CompositeContextProvider, b as init_composite_context, g as init_collection_store, h as createCollectionStore, m as init_composite_store, n as init_composite_item, p as createCompositeStore, r as useCompositeItem, t as CompositeItem, w as useCollectionItem, y as CompositeScopedContextProvider } from "./composite-item-CtrOK3yA.js";
import { A as defaultValue, N as disabledFromProps, O as chain, R as getActiveElement, S as useUpdateEffect, V as getFirstTabbableIn, a as init_dist, f as useId, g as useMergeRefs, i as forwardRef, n as createHook, nt as init_dist$1, o as memo, r as createStoreContext, rt as invariant, t as createElement, u as useEvent, w as useWrapElement, y as useSafeLayoutEffect } from "./dist-DgYpwR44.js";
import { a as useStore, b as init_focusable, f as init_dist$3, g as setup, i as init_dist$2, l as batch, m as omit, o as useStoreProps, p as mergeStore, s as useStoreState, u as createStore, v as sync, x as useFocusable } from "./CDh2UhnG-eN0icMPG.js";
import { i as useCompositeStoreProps, o as init_composite, s as useComposite, t as init_composite_store$1 } from "./composite-store-D9hs8Xap.js";
import { C as init_disclosure_content, S as useDisclosureStore, T as useDisclosureContent, x as init_disclosure_store } from "./popover-store-BWOmbx-S.js";
import { c as useComboboxContext, s as init_combobox_context } from "./combobox-context-CzvECwRS.js";
import { a as useSelectContext, i as init_select_context } from "./select-context-BFLmdqrX.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tab/tab-context.js
var ctx, useTabScopedContext, useTabProviderContext, TabScopedContextProvider;
function init_tab_context() {
	return (init_tab_context = __esmMin((() => {
		init_composite_context();
		init_dist();
		ctx = createStoreContext([CompositeContextProvider], [CompositeScopedContextProvider]);
		ctx.useContext;
		useTabScopedContext = ctx.useScopedContext;
		useTabProviderContext = ctx.useProviderContext;
		ctx.ContextProvider;
		TabScopedContextProvider = ctx.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tab/tab.js
var import_react$2, import_jsx_runtime$2, TagName$2, useTab, Tab;
function init_tab() {
	return (init_tab = __esmMin((() => {
		init_composite_item();
		init_tab_context();
		init_dist();
		init_dist$1();
		import_react$2 = require_react();
		import_jsx_runtime$2 = require_jsx_runtime();
		init_dist$2();
		TagName$2 = "button";
		useTab = createHook(function useTab({ store, getItem: getItemProp, ...props }) {
			const context = useTabScopedContext();
			store = store || context;
			invariant(store, "Tab must be wrapped in a TabList component.");
			const defaultId = useId();
			const id = props.id || defaultId;
			const dimmed = disabledFromProps(props);
			const getItem = (0, import_react$2.useCallback)((item) => {
				const nextItem = {
					...item,
					dimmed
				};
				if (getItemProp) return getItemProp(nextItem);
				return nextItem;
			}, [dimmed, getItemProp]);
			const onClickProp = props.onClick;
			const onClick = useEvent((event) => {
				onClickProp?.(event);
				if (event.defaultPrevented) return;
				store?.setSelectedId(id);
			});
			const panelId = useStoreState(store.panels, ["items"], () => store.panel(id)?.id);
			const shouldRegisterItem = defaultId ? props.shouldRegisterItem : false;
			const selected = useStoreState(store, ["selectedId"], (state) => !!id && state.selectedId === id);
			const canRegisterComposedItem = useStoreState(store.composite ? store : void 0, [
				"activeId",
				"items",
				"selectedId"
			], (state) => {
				if (!state) return false;
				if (!id) return false;
				if (state.activeId === id) return true;
				if (state.selectedId !== id) return false;
				return !store.item(state.activeId);
			});
			const accessibleWhenDisabled = selected || (props.accessibleWhenDisabled ?? true);
			if (useStoreState(store.combobox || store.composite, "virtualFocus")) props = {
				...props,
				tabIndex: -1
			};
			props = {
				role: "tab",
				"aria-selected": selected,
				"aria-controls": panelId || void 0,
				...props,
				id,
				onClick
			};
			if (store.composite) {
				const defaultProps = {
					id,
					accessibleWhenDisabled,
					store: store.composite,
					shouldRegisterItem: canRegisterComposedItem && shouldRegisterItem,
					rowId: props.rowId,
					render: props.render
				};
				props = {
					...props,
					render: /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(CompositeItem, {
						...defaultProps,
						render: store.combobox && store.composite !== store.combobox ? /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(CompositeItem, {
							...defaultProps,
							store: store.combobox
						}) : defaultProps.render
					})
				};
			}
			props = useCompositeItem({
				store,
				...props,
				accessibleWhenDisabled,
				getItem,
				shouldRegisterItem
			});
			return props;
		});
		Tab = memo(forwardRef(function Tab(props) {
			const htmlProps = useTab(withDefaultButtonType(props));
			return createElement(TagName$2, htmlProps);
		}));
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tab/tab-list.js
var import_jsx_runtime$1, TagName$1, useTabList, TabList;
function init_tab_list() {
	return (init_tab_list = __esmMin((() => {
		init_composite();
		init_tab_context();
		init_dist();
		init_dist$1();
		import_jsx_runtime$1 = require_jsx_runtime();
		init_dist$2();
		TagName$1 = "div";
		useTabList = createHook(function useTabList({ store, ...props }) {
			const context = useTabProviderContext();
			store = store || context;
			invariant(store, "TabList must receive a `store` prop or be wrapped in a TabProvider component.");
			const orientation = useStoreState(store, ["orientation"], (state) => state.orientation === "both" ? void 0 : state.orientation);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(TabScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			if (store.composite) props = {
				focusable: false,
				...props
			};
			props = {
				role: "tablist",
				"aria-orientation": orientation,
				...props
			};
			props = useComposite({
				store,
				...props
			});
			return props;
		});
		TabList = forwardRef(function TabList(props) {
			const htmlProps = useTabList(props);
			return createElement(TagName$1, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tab/tab-panel.js
var import_react$1, import_jsx_runtime, TagName, useTabPanel, TabPanel;
function init_tab_panel() {
	return (init_tab_panel = __esmMin((() => {
		init_focusable();
		init_collection_item();
		init_disclosure_content();
		init_disclosure_store();
		init_tab_context();
		init_dist();
		init_dist$1();
		import_react$1 = require_react();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$2();
		TagName = "div";
		useTabPanel = createHook(function useTabPanel({ store, unmountOnHide, tabId: tabIdProp, getItem: getItemProp, scrollRestoration, scrollElement, ...props }) {
			const context = useTabProviderContext();
			store = store || context;
			invariant(store, "TabPanel must receive a `store` prop or be wrapped in a TabProvider component.");
			const ref = (0, import_react$1.useRef)(null);
			const id = useId(props.id);
			const tabId = useStoreState(tabIdProp ? void 0 : store.panels, ["items"], () => tabIdProp || store?.panels.item(id)?.tabId);
			const open = useStoreState(store, ["selectedId"], (state) => !!tabId && state.selectedId === tabId);
			const disclosure = useDisclosureStore({ open });
			const mounted = useStoreState(disclosure, "mounted");
			const scrollPositionRef = (0, import_react$1.useRef)(null);
			const getScrollElement = useEvent(() => {
				const panelElement = ref.current;
				if (!panelElement) return null;
				if (!scrollElement) return panelElement;
				if (typeof scrollElement === "function") return scrollElement(panelElement);
				if ("current" in scrollElement) return scrollElement.current;
				return scrollElement;
			});
			(0, import_react$1.useEffect)(() => {
				if (!scrollRestoration) return;
				if (!mounted) return;
				const element = getScrollElement();
				if (!element) return;
				if (scrollRestoration === "reset") {
					element.scroll(0, 0);
					return;
				}
				if (!tabId) return;
				let scrollPositions = scrollPositionRef.current;
				if (!scrollPositions) {
					scrollPositions = /* @__PURE__ */ new Map();
					scrollPositionRef.current = scrollPositions;
				}
				const position = scrollPositions.get(tabId);
				element.scroll(position?.x ?? 0, position?.y ?? 0);
				const onScroll = () => {
					scrollPositions.set(tabId, {
						x: element.scrollLeft,
						y: element.scrollTop
					});
				};
				element.addEventListener("scroll", onScroll);
				return () => {
					element.removeEventListener("scroll", onScroll);
				};
			}, [
				scrollRestoration,
				mounted,
				tabId,
				getScrollElement
			]);
			const [hasTabbableChildren, setHasTabbableChildren] = (0, import_react$1.useState)(false);
			useSafeLayoutEffect(() => {
				if (!mounted) return;
				const element = ref.current;
				if (!element) return;
				setHasTabbableChildren(!!getFirstTabbableIn(element));
			}, [mounted, tabId]);
			const getItem = (0, import_react$1.useCallback)((item) => {
				const nextItem = {
					...item,
					id: id || item.id,
					tabId: tabIdProp
				};
				if (getItemProp) return getItemProp(nextItem);
				return nextItem;
			}, [
				id,
				tabIdProp,
				getItemProp
			]);
			const onKeyDownProp = props.onKeyDown;
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (event.defaultPrevented) return;
				if (!store?.composite) return;
				const action = {
					ArrowLeft: store.previous,
					ArrowRight: store.next,
					Home: store.first,
					End: store.last
				}[event.key];
				if (!action) return;
				const { selectedId } = store.getState();
				const nextId = action({ activeId: selectedId });
				if (!nextId) return;
				event.preventDefault();
				store.move(nextId);
			});
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabScopedContextProvider, {
				value: store,
				children: element
			}), [store]);
			props = {
				role: "tabpanel",
				"aria-labelledby": props["aria-label"] != null ? void 0 : tabId || void 0,
				...props,
				id,
				children: unmountOnHide && !mounted ? null : props.children,
				ref: useMergeRefs(ref, props.ref),
				onKeyDown
			};
			props = useFocusable({
				focusable: !store.composite && !hasTabbableChildren,
				...props
			});
			props = useDisclosureContent({
				store: disclosure,
				...props
			});
			props = useCollectionItem({
				store: store.panels,
				...props,
				getItem
			});
			return props;
		});
		TabPanel = forwardRef(function TabPanel(props) {
			const htmlProps = useTabPanel(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/tab/tab-store.js
function getFocusedTab(items) {
	const element = items[0]?.element;
	if (!element) return;
	const activeElement = getActiveElement(element);
	if (!activeElement) return;
	return items.find((item) => item.element === activeElement);
}
function getTabById(items, id) {
	if (id == null) return;
	return items.find((item) => item.id === id);
}
function isEnabledTab(item) {
	if (!item) return false;
	if (item.disabled) return false;
	if (item.dimmed) return false;
	return true;
}
function createPanelsStore() {
	const panels = createCollectionStore();
	const panelsByTabId = /* @__PURE__ */ new Map();
	sync(panels, ["items"], (state) => {
		panelsByTabId.clear();
		for (const panel of state.items) {
			const { tabId } = panel;
			if (tabId == null) continue;
			if (panelsByTabId.has(tabId)) continue;
			panelsByTabId.set(tabId, panel);
		}
	});
	return {
		panels,
		panel: (tabId) => {
			if (tabId == null) return null;
			return panelsByTabId.get(tabId) || null;
		}
	};
}
function createTabStore({ composite: parentComposite, combobox, ...props } = {}) {
	const independentKeys = [
		"items",
		"renderedItems",
		"moves",
		"orientation",
		"virtualFocus",
		"compositeElementInFocusOrder",
		"includesBaseElement",
		"compositeElement",
		"baseElement",
		"focusLoop",
		"focusShift",
		"focusWrap",
		"selectOnMove"
	];
	const store = mergeStore(props.store, omit(parentComposite, independentKeys), omit(combobox, independentKeys));
	const syncState = store?.getState();
	const composite = createCompositeStore({
		...props,
		store,
		compositeElementInFocusOrder: defaultValue(props.compositeElementInFocusOrder, props.includesBaseElement, syncState?.compositeElementInFocusOrder, syncState?.includesBaseElement, false),
		orientation: defaultValue(props.orientation, syncState?.orientation, "horizontal"),
		focusLoop: defaultValue(props.focusLoop, syncState?.focusLoop, true)
	});
	const { panels, panel } = createPanelsStore();
	const initialState = {
		...composite.getState(),
		selectedId: defaultValue(props.selectedId, syncState?.selectedId, props.defaultSelectedId),
		selectOnMove: defaultValue(props.selectOnMove, syncState?.selectOnMove, true)
	};
	const tab = createStore(initialState, composite, store);
	setup(tab, () => sync(tab, ["moves"], () => {
		const { activeId, selectOnMove } = tab.getState();
		if (!selectOnMove) return;
		if (!activeId) return;
		const tabItem = composite.item(activeId);
		if (!isEnabledTab(tabItem)) return;
		tab.setState("selectedId", tabItem.id);
	}));
	let pendingRestore = false;
	let restoredSelectedId;
	setup(tab, () => {
		pendingRestore = false;
		return batch(tab, ["selectedId"], (state, prev) => {
			if (pendingRestore) {
				pendingRestore = false;
				if (state.selectedId === restoredSelectedId) return;
			}
			if (parentComposite && state.selectedId === prev.selectedId) return;
			const { activeId, renderedItems } = tab.getState();
			if (activeId === state.selectedId) return;
			const focusedTab = getFocusedTab(renderedItems);
			const selectedTab = getTabById(renderedItems, state.selectedId);
			if (focusedTab && isEnabledTab(selectedTab)) {
				composite.move(selectedTab.id);
				return;
			}
			tab.setState("activeId", state.selectedId);
		});
	});
	setup(tab, () => sync(tab, ["selectedId", "renderedItems"], (state) => {
		if (state.selectedId !== void 0) return;
		const { activeId, renderedItems } = tab.getState();
		const tabItem = composite.item(activeId);
		if (isEnabledTab(tabItem)) tab.setState("selectedId", tabItem.id);
		else {
			const tabItem = renderedItems.find(isEnabledTab);
			tab.setState("selectedId", tabItem?.id);
		}
	}));
	setup(tab, () => sync(tab, ["renderedItems"], (state) => {
		const tabs = state.renderedItems;
		if (!tabs.length) return;
		return sync(panels, ["renderedItems"], (state) => {
			const items = state.renderedItems;
			if (!items.some((panel) => !panel.tabId)) return;
			items.forEach((panel, i) => {
				if (panel.tabId) return;
				const tabItem = tabs[i];
				if (!tabItem) return;
				panels.renderItem({
					...panel,
					tabId: tabItem.id
				});
			});
		});
	}));
	let selectedIdFromSelectedValue = null;
	setup(tab, () => {
		const backupSelectedId = () => {
			selectedIdFromSelectedValue = tab.getState().selectedId;
		};
		const restoreSelectedId = () => {
			const { selectedId } = tab.getState();
			if (selectedId === selectedIdFromSelectedValue) return;
			pendingRestore = true;
			restoredSelectedId = selectedIdFromSelectedValue;
			tab.setState("selectedId", selectedIdFromSelectedValue);
		};
		const isParentCombobox = !!parentComposite && "setSelectedValue" in parentComposite;
		const parentCombobox = isParentCombobox ? parentComposite : combobox;
		if (parentComposite && !isParentCombobox && "setSelectElement" in parentComposite) return chain(sync(parentComposite, ["value"], backupSelectedId), sync(parentComposite, ["mounted"], restoreSelectedId));
		if (!parentCombobox) return;
		return chain(sync(parentCombobox, ["selectedValue"], backupSelectedId), sync(parentCombobox, ["mounted"], restoreSelectedId));
	});
	return {
		...composite,
		...tab,
		panels,
		panel,
		setSelectedId: (id) => tab.setState("selectedId", id),
		select: (id) => {
			tab.setState("selectedId", id);
			composite.move(id);
		}
	};
}
function init_tab_store() {
	return (init_tab_store = __esmMin((() => {
		init_collection_store();
		init_composite_store();
		init_dist$3();
		init_dist$1();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/tab/tab-store.js
function useTabStoreProps(store, update, props) {
	useUpdateEffect(update, [
		props.composite,
		props.combobox,
		update
	]);
	const compositeStore = useCompositeStoreProps(store, update, props);
	useStoreProps(compositeStore, props, "selectedId", "setSelectedId");
	useStoreProps(compositeStore, props, "selectOnMove");
	const [panels, updatePanels] = useStore(() => compositeStore.panels, {});
	useUpdateEffect(updatePanels, [compositeStore, updatePanels]);
	return Object.assign((0, import_react.useMemo)(() => ({
		...compositeStore,
		panels
	}), [compositeStore, panels]), {
		composite: props.composite,
		combobox: props.combobox
	});
}
/**
* Creates a tab store to control the state of
* [Tab](https://ariakit.com/components/tab) components.
* @see https://ariakit.com/components/tab
* @example
* ```jsx
* const tab = useTabStore();
*
* <TabList store={tab}>
*   <Tab>Tab 1</Tab>
*   <Tab>Tab 2</Tab>
* </TabList>
* <TabPanel store={tab}>Panel 1</TabPanel>
* <TabPanel store={tab}>Panel 2</TabPanel>
* ```
*/
function useTabStore(props = {}) {
	const combobox = useComboboxContext();
	const composite = useSelectContext() || combobox;
	const storeProps = {
		...props,
		composite: props.composite !== void 0 ? props.composite : composite,
		combobox: props.combobox !== void 0 ? props.combobox : combobox
	};
	const [store, update] = useStore(createTabStore, storeProps);
	return useTabStoreProps(store, update, storeProps);
}
var import_react;
function init_tab_store$1() {
	return (init_tab_store$1 = __esmMin((() => {
		init_combobox_context();
		init_composite_store$1();
		init_select_context();
		init_dist();
		import_react = require_react();
		init_dist$2();
		init_tab_store();
	})))();
}
//#endregion
export { TabList as a, init_tab as c, init_tab_panel as i, useTabStore as n, init_tab_list as o, TabPanel as r, Tab as s, init_tab_store$1 as t };
