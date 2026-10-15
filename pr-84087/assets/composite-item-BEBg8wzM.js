import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { A as defaultValue, At as reverseArray, B as getDocument, D as applyState, Dt as queueBeforeEvent, F as fireClickEvent, Ft as warnOnce, J as getScrollingElement, L as flatten2DArray, N as disabledFromProps, Nt as sortBasedOnDOMPosition, O as chain, R as getActiveElement, St as isVisible, X as getTextboxValue, Y as getTextboxSelection, _ as useMetadataProps, a as init_dist$1, at as isButton, bt as isTextbox, dt as isFocusable, f as useId, g as useMergeRefs, gt as isPortalEvent, i as forwardRef, l as useBooleanEvent, lt as isFirefox, n as createHook, nt as init_dist, o as memo, r as createStoreContext, t as createElement, tt as identity, u as useEvent, vt as isSelfTarget, w as useWrapElement, y as useSafeLayoutEffect, yt as isTextField } from "./dist-DgYpwR44.js";
import { D as init_C4_D9PgF, O as resolvedTrulyDisabledFromElement, T as getTreeActiveElement, _ as subscribe, b as init_focusable, c as useStoreStateObject, d as init, f as init_dist$2, g as setup, i as init_dist$3, l as batch, u as createStore, v as sync, w as accessibleWhenDisabledFromProps, x as useFocusable, y as throwOnConflictingProps } from "./CDh2UhnG-rjC-Q4Bk.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/button/utils.js
function withDefaultButtonType(props) {
	const { render, type } = props;
	if (render || type !== void 0) return props;
	return {
		...props,
		type: "button"
	};
}
function init_utils() {
	return (init_utils = __esmMin((() => {})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/command/command.js
function isNativeClick(event) {
	if (!event.isTrusted) return false;
	// istanbul ignore next: can't test trusted events yet
	const element = event.currentTarget;
	if (event.key === "Enter") return isButton(element) || element.tagName === "SUMMARY" || element.tagName === "A";
	if (event.key === " ") return isButton(element) || element.tagName === "SUMMARY" || element.tagName === "INPUT" || element.tagName === "SELECT";
	return false;
}
var import_react$4, TagName$2, symbol, useCommand;
function init_command() {
	return (init_command = __esmMin((() => {
		init_focusable();
		init_dist$1();
		init_dist();
		import_react$4 = require_react();
		TagName$2 = "button";
		symbol = Symbol("command");
		useCommand = createHook(function useCommand({ clickOnEnter = true, clickOnSpace = true, ...props }) {
			const ref = (0, import_react$4.useRef)(null);
			const [isNativeButton, setIsNativeButton] = (0, import_react$4.useState)(false);
			const type = props.type;
			(0, import_react$4.useEffect)(() => {
				const element = ref.current;
				if (!element) return;
				const nativeButton = isButton(element);
				if (type !== void 0 && nativeButton && element.type === "button") return;
				setIsNativeButton(nativeButton);
			}, [type]);
			const [active, setActive] = (0, import_react$4.useState)(false);
			const activeRef = (0, import_react$4.useRef)(false);
			const disabled = disabledFromProps(props);
			const [isDuplicate, metadataProps] = useMetadataProps(props, symbol, true);
			useSafeLayoutEffect(() => {
				if (!disabled) return;
				activeRef.current = false;
				setActive(false);
			}, [disabled]);
			const onKeyDownProp = props.onKeyDown;
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				const element = event.currentTarget;
				if (event.defaultPrevented) return;
				if (isDuplicate) return;
				if (disabled) return;
				if (!isSelfTarget(event)) return;
				if (isTextField(element)) return;
				if (element.isContentEditable) return;
				const isEnter = clickOnEnter && event.key === "Enter";
				const isSpace = clickOnSpace && event.key === " ";
				const shouldPreventEnter = event.key === "Enter" && !clickOnEnter;
				const shouldPreventSpace = event.key === " " && !clickOnSpace;
				if (shouldPreventEnter || shouldPreventSpace) {
					event.preventDefault();
					return;
				}
				if (isEnter || isSpace) {
					const nativeClick = isNativeClick(event);
					if (isEnter) {
						if (!nativeClick) {
							event.preventDefault();
							const { view, ...eventInit } = event;
							const click = () => fireClickEvent(element, eventInit);
							if (isFirefox()) queueBeforeEvent(element, "keyup", click);
							else queueMicrotask(click);
						}
					} else if (isSpace) {
						activeRef.current = true;
						if (!nativeClick) {
							event.preventDefault();
							setActive(true);
						}
					}
				}
			});
			const onKeyUpProp = props.onKeyUp;
			const onKeyUp = useEvent((event) => {
				onKeyUpProp?.(event);
				if (isDuplicate) return;
				const isSpace = clickOnSpace && event.key === " ";
				if (!activeRef.current || !isSpace) return;
				const nativeClick = isNativeClick(event);
				activeRef.current = false;
				if (!nativeClick) setActive(false);
				if (event.defaultPrevented) return;
				if (!isSelfTarget(event)) return;
				if (disabled) return;
				if (event.metaKey) return;
				if (nativeClick) return;
				event.preventDefault();
				const element = event.currentTarget;
				const { view, ...eventInit } = event;
				queueMicrotask(() => fireClickEvent(element, eventInit));
			});
			const onBlurProp = props.onBlur;
			const onBlur = useEvent((event) => {
				onBlurProp?.(event);
				if (!activeRef.current) return;
				activeRef.current = false;
				setActive(false);
			});
			props = {
				"data-active": active || void 0,
				type: isNativeButton ? "button" : void 0,
				...metadataProps,
				...props,
				ref: useMergeRefs(ref, props.ref),
				onKeyDown,
				onKeyUp,
				onBlur
			};
			props = useFocusable(props);
			return props;
		});
		forwardRef(function Command(props) {
			const htmlProps = useCommand(withDefaultButtonType(props));
			return createElement(TagName$2, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/collection/collection-context.js
var ctx$1, useCollectionContext, CollectionContextProvider, CollectionScopedContextProvider;
function init_collection_context() {
	return (init_collection_context = __esmMin((() => {
		init_dist$1();
		ctx$1 = createStoreContext();
		useCollectionContext = ctx$1.useContext;
		ctx$1.useScopedContext;
		ctx$1.useProviderContext;
		CollectionContextProvider = ctx$1.ContextProvider;
		CollectionScopedContextProvider = ctx$1.ScopedContextProvider;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/collection/collection-item.js
var import_react$3, TagName$1, useCollectionItem;
function init_collection_item() {
	return (init_collection_item = __esmMin((() => {
		init_collection_context();
		init_dist$1();
		init_dist();
		import_react$3 = require_react();
		TagName$1 = "div";
		useCollectionItem = createHook(function useCollectionItem({ store, shouldRegisterItem = true, getItem = identity, element, ...props }) {
			const context = useCollectionContext();
			store = store || context;
			const id = useId(props.id);
			const ref = (0, import_react$3.useRef)(element);
			(0, import_react$3.useEffect)(() => {
				const element = ref.current;
				if (!id) return;
				if (!element) return;
				if (!shouldRegisterItem) return;
				const item = getItem({
					id,
					element
				});
				return store?.renderItem(item);
			}, [
				id,
				shouldRegisterItem,
				getItem,
				store
			]);
			props = {
				...props,
				ref: useMergeRefs(ref, props.ref)
			};
			return props;
		});
		forwardRef(function CollectionItem(props) {
			const htmlProps = useCollectionItem(props);
			return createElement(TagName$1, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/composite/composite-context.js
var import_react$2, ctx, useCompositeScopedContext, useCompositeProviderContext, CompositeContextProvider, CompositeScopedContextProvider, CompositeItemContext, CompositeRowContext;
function init_composite_context() {
	return (init_composite_context = __esmMin((() => {
		init_collection_context();
		init_dist$1();
		import_react$2 = require_react();
		ctx = createStoreContext([CollectionContextProvider], [CollectionScopedContextProvider]);
		ctx.useContext;
		useCompositeScopedContext = ctx.useScopedContext;
		useCompositeProviderContext = ctx.useProviderContext;
		CompositeContextProvider = ctx.ContextProvider;
		CompositeScopedContextProvider = ctx.ScopedContextProvider;
		CompositeItemContext = (0, import_react$2.createContext)(void 0);
		CompositeRowContext = (0, import_react$2.createContext)(void 0);
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/collection/collection-store.js
function getCommonParent(items) {
	const firstItem = items.find((item) => !!item.element);
	const lastElement = [...items].reverse().find((item) => !!item.element)?.element;
	let parentElement = firstItem?.element?.parentElement;
	if (!lastElement) return getDocument(parentElement).body;
	while (parentElement) {
		if (parentElement.contains(lastElement)) return parentElement;
		parentElement = parentElement.parentElement;
	}
	return getDocument(parentElement).body;
}
function getPrivateStore(store) {
	return store?.__unstablePrivateStore;
}
function getCachedItemIds(items, cache) {
	if (items.length < itemIdCacheThreshold) {
		if (cache.ids) {
			cache.items = void 0;
			cache.ids = void 0;
		}
		return;
	}
	if (cache.items === items) return cache.ids;
	const ids = /* @__PURE__ */ new Set();
	for (const item of items) ids.add(item.id);
	cache.items = items;
	cache.ids = ids;
	return ids;
}
function setCachedItemIds(items, cache, ids) {
	if (items.length < itemIdCacheThreshold) {
		if (cache.ids) {
			cache.items = void 0;
			cache.ids = void 0;
		}
		return;
	}
	if (!ids) {
		ids = /* @__PURE__ */ new Set();
		for (const item of items) ids.add(item.id);
	}
	cache.items = items;
	cache.ids = ids;
}
/**
* Creates a collection store.
*/
function createCollectionStore(props = {}) {
	throwOnConflictingProps(props, props.store);
	const syncState = props.store?.getState();
	const items = defaultValue(props.items, syncState?.items, props.defaultItems, []);
	const syncPrivateStore = getPrivateStore(props.store);
	const collectionLookup = syncPrivateStore?.__unstableCollectionLookup ?? {
		controlledItems: new Map(items.map((item) => [item.id, item])),
		registeredItems: /* @__PURE__ */ new Map(),
		controlledItemsSource: items,
		propagatedItems: items
	};
	const { controlledItems, registeredItems } = collectionLookup;
	const itemIdCache = {};
	const renderedItemIdCache = {};
	const initialState = {
		items,
		renderedItems: defaultValue(syncState?.renderedItems, [])
	};
	const collection = createStore(initialState, props.store);
	const privateStore = Object.assign(createStore({
		items,
		renderedItems: initialState.renderedItems
	}, syncPrivateStore), { __unstableCollectionLookup: collectionLookup });
	const sortItems = (renderedItems) => {
		const sortedItems = sortBasedOnDOMPosition(renderedItems, (i) => i.element);
		privateStore.setState("renderedItems", sortedItems);
		collection.setState("renderedItems", sortedItems);
	};
	const indexControlledItems = (items) => {
		if (items === collectionLookup.controlledItemsSource) return;
		collectionLookup.controlledItemsSource = items;
		controlledItems.clear();
		for (const item of items) controlledItems.set(item.id, item);
	};
	const setState = (key, value) => {
		if (key !== "items") {
			collection.setState(key, value);
			return;
		}
		collection.setState("items", (items) => {
			const nextItems = applyState(value, items);
			if (nextItems === items) return items;
			collectionLookup.propagatedItems = nextItems;
			indexControlledItems(nextItems);
			return nextItems;
		});
	};
	setup(collection, () => init(privateStore));
	if (!syncPrivateStore) {
		subscribe(collection, ["items"], ({ items }) => {
			if (items === collectionLookup.propagatedItems) return;
			collectionLookup.propagatedItems = items;
			indexControlledItems(items);
		});
		setup(privateStore, () => {
			return batch(privateStore, ["items"], ({ items }) => {
				collectionLookup.propagatedItems = items;
				collection.setState("items", items);
			});
		});
	}
	setup(privateStore, () => {
		return batch(privateStore, ["renderedItems"], (state) => {
			if (state.renderedItems !== collection.getState().renderedItems) sortItems(state.renderedItems);
			if (typeof IntersectionObserver !== "function") return;
			let firstRun = true;
			let raf = 0;
			const ioCallback = () => {
				if (firstRun) {
					firstRun = false;
					return;
				}
				cancelAnimationFrame(raf);
				raf = requestAnimationFrame(() => sortItems(state.renderedItems));
			};
			const root = getCommonParent(state.renderedItems);
			const observer = new IntersectionObserver(ioCallback, { root });
			for (const item of state.renderedItems) {
				if (!item.element) continue;
				observer.observe(item.element);
			}
			return () => {
				cancelAnimationFrame(raf);
				observer.disconnect();
			};
		});
	});
	const createMergeItem = (key, cache, lookup) => {
		const registeredItems = lookup?.registeredItems;
		const controlledItems = lookup?.controlledItems;
		return (item) => {
			const previousRegisteredItem = registeredItems?.get(item.id);
			const wasKnown = !!previousRegisteredItem || !!controlledItems?.has(item.id);
			let prevItem;
			privateStore.setState(key, (items) => {
				const ids = !!cache.ids || items.length >= itemIdCacheThreshold && !wasKnown ? getCachedItemIds(items, cache) : void 0;
				const index = ids && !ids.has(item.id) ? -1 : items.findIndex(({ id }) => id === item.id);
				const nextItems = items.slice();
				if (index !== -1) {
					prevItem = items[index];
					const nextItem = {
						...prevItem,
						...item
					};
					nextItems[index] = nextItem;
					registeredItems?.set(item.id, nextItem);
				} else {
					nextItems.push(item);
					registeredItems?.set(item.id, item);
					ids?.add(item.id);
				}
				if (cache.ids || index === -1 && nextItems.length >= itemIdCacheThreshold) setCachedItemIds(nextItems, cache, ids);
				return nextItems;
			});
			const unmergeItem = () => {
				if (registeredItems) {
					if (previousRegisteredItem) registeredItems.set(item.id, previousRegisteredItem);
					else registeredItems.delete(item.id);
				}
				privateStore.setState(key, (items) => {
					const ids = cache.ids ? getCachedItemIds(items, cache) : void 0;
					if (!prevItem) {
						const nextItems = items.filter(({ id }) => id !== item.id);
						ids?.delete(item.id);
						if (cache.ids) setCachedItemIds(nextItems, cache, ids);
						return nextItems;
					}
					const index = items.findIndex(({ id }) => id === item.id);
					if (index === -1) return items;
					const nextItems = items.slice();
					nextItems[index] = prevItem;
					if (cache.ids) setCachedItemIds(nextItems, cache, ids);
					return nextItems;
				});
			};
			return unmergeItem;
		};
	};
	const registerItem = createMergeItem("items", itemIdCache, collectionLookup);
	const mergeRenderedItem = createMergeItem("renderedItems", renderedItemIdCache);
	return {
		...collection,
		setState,
		registerItem,
		renderItem: (item) => chain(registerItem(item), mergeRenderedItem(item)),
		item: (id) => {
			if (!id) return null;
			if (!registeredItems.size) return controlledItems.get(id) ?? null;
			return registeredItems.get(id) ?? controlledItems.get(id) ?? null;
		},
		__unstablePrivateStore: privateStore
	};
}
var itemIdCacheThreshold;
function init_collection_store() {
	return (init_collection_store = __esmMin((() => {
		init_dist$2();
		init_dist();
		itemIdCacheThreshold = 64;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/components@0.1.14-LY5snkwIfivHs3k-20UEzg/node_modules/@ariakit/components/dist/composite/composite-store.js
/**
* Finds the first enabled item.
*/
function findFirstEnabledItem$1(items, excludeId) {
	return items.find((item) => {
		if (excludeId) return !item.disabled && item.id !== excludeId;
		return !item.disabled;
	});
}
function findLastEnabledItem(items) {
	for (let i = items.length - 1; i >= 0; i -= 1) {
		const item = items[i];
		if (!item) continue;
		if (item.disabled) continue;
		return item;
	}
}
function getEnabledItems(items, excludeId) {
	return items.filter((item) => {
		if (excludeId) return !item.disabled && item.id !== excludeId;
		return !item.disabled;
	});
}
function getItemsInRow(items, rowId) {
	return items.filter((item) => item.rowId === rowId);
}
function findEnabledItemId({ items, fromIndex, step, rowId, excludeId }) {
	for (let i = fromIndex; i >= 0 && i < items.length; i += step) {
		const item = items[i];
		if (!item) continue;
		if (item.rowId !== rowId) continue;
		if (item.disabled) continue;
		const itemId = item.id;
		if (excludeId != null && itemId === excludeId) continue;
		return itemId;
	}
}
/**
* Moves all the items before the passed `id` to the end of the array. This is
* useful when we want to loop through the items in the same row or column as
* the first items will be placed after the last items.
*
* The null item that's inserted when `shouldInsertNullItem` is set to `true`
* represents the composite container itself. When the active item is null, the
* composite container has focus.
*/
function flipItems$1(items, activeId, shouldInsertNullItem = false) {
	const index = items.findIndex((item) => item.id === activeId);
	return [
		...items.slice(index + 1),
		...shouldInsertNullItem ? [NULL_ITEM] : [],
		...items.slice(0, index)
	];
}
function groupSmallItemsByRows(items) {
	const rows = [];
	let previousRow;
	let previousRowId;
	for (const item of items) {
		const rowId = item.rowId;
		if (previousRow && previousRowId === rowId) {
			previousRow.push(item);
			continue;
		}
		const row = rows.find((currentRow) => currentRow[0]?.rowId === rowId);
		if (row) {
			row.push(item);
			previousRow = row;
		} else {
			previousRow = [item];
			rows.push(previousRow);
		}
		previousRowId = rowId;
	}
	return rows;
}
function groupLargeItemsByRows(items) {
	const firstItem = items[0];
	if (!firstItem) return [];
	let itemIndex = 1;
	while (itemIndex < items.length && items[itemIndex]?.rowId === firstItem.rowId) itemIndex += 1;
	const firstRow = items.slice(0, itemIndex);
	if (itemIndex === items.length) return [firstRow];
	const rows = [firstRow];
	let rowsById;
	for (; itemIndex < items.length; itemIndex += 1) {
		const item = items[itemIndex];
		if (!item) continue;
		const row = rowsById ? rowsById.get(item.rowId) : rows.find((currentRow) => currentRow[0]?.rowId === item.rowId);
		if (row) {
			row.push(item);
			continue;
		}
		const newRow = [item];
		rows.push(newRow);
		if (rowsById) rowsById.set(item.rowId, newRow);
		else if (rows.length === rowMapRowThreshold) rowsById = new Map(rows.map((currentRow) => [currentRow[0]?.rowId, currentRow]));
	}
	return rows;
}
/**
* Creates a two-dimensional array with items grouped by their rowId's.
*/
function groupItemsByRows$1(items) {
	if (items.length >= rowMapItemThreshold) return groupLargeItemsByRows(items);
	return groupSmallItemsByRows(items);
}
function getMaxRowLength(array) {
	let maxLength = 0;
	for (const { length } of array) if (length > maxLength) maxLength = length;
	return maxLength;
}
function createEmptyItem(rowId) {
	return {
		id: "__EMPTY_ITEM__",
		disabled: true,
		rowId
	};
}
function normalizeRows(rows, activeId, focusShift) {
	const maxLength = getMaxRowLength(rows);
	for (const row of rows) for (let i = 0; i < maxLength; i += 1) {
		const item = row[i];
		if (!item || focusShift && item.disabled) {
			const previousItem = i === 0 && focusShift ? findFirstEnabledItem$1(row) : row[i - 1];
			row[i] = previousItem && activeId !== previousItem.id && focusShift ? previousItem : createEmptyItem(previousItem?.rowId);
		}
	}
	return rows;
}
function verticalizeItems(items) {
	const rows = groupItemsByRows$1(items);
	const maxLength = getMaxRowLength(rows);
	const verticalized = [];
	for (let i = 0; i < maxLength; i += 1) for (const row of rows) {
		const item = row[i];
		if (item) verticalized.push({
			...item,
			rowId: item.rowId ? `${i}` : void 0
		});
	}
	return verticalized;
}
/**
* Creates a composite store.
*/
function createCompositeStore(props = {}) {
	const syncState = props.store?.getState();
	const collection = createCollectionStore(props);
	const activeId = defaultValue(props.activeId, syncState?.activeId, props.defaultActiveId);
	const compositeElement = defaultValue(syncState?.compositeElement, syncState?.baseElement, null);
	const compositeElementInFocusOrder = defaultValue(props.compositeElementInFocusOrder, props.includesBaseElement, syncState?.compositeElementInFocusOrder, syncState?.includesBaseElement, activeId === null);
	const initialState = {
		...collection.getState(),
		id: defaultValue(props.id, syncState?.id) ?? `id-${Math.random().toString(36).slice(2, 8)}`,
		activeId,
		compositeElement,
		baseElement: compositeElement,
		compositeElementInFocusOrder,
		includesBaseElement: compositeElementInFocusOrder,
		moves: defaultValue(syncState?.moves, 0),
		orientation: defaultValue(props.orientation, syncState?.orientation, "both"),
		rtl: defaultValue(props.rtl, syncState?.rtl, false),
		virtualFocus: defaultValue(props.virtualFocus, syncState?.virtualFocus, false),
		focusLoop: defaultValue(props.focusLoop, syncState?.focusLoop, false),
		focusWrap: defaultValue(props.focusWrap, syncState?.focusWrap, false),
		focusShift: defaultValue(props.focusShift, syncState?.focusShift, false)
	};
	const composite = createStore(initialState, collection, props.store);
	setup(composite, () => chain(sync(composite, ["compositeElement"], (state) => {
		composite.setState("baseElement", state.compositeElement);
	}), sync(composite, ["baseElement"], (state) => {
		composite.setState("compositeElement", state.baseElement);
	}), sync(composite, ["compositeElementInFocusOrder"], (state) => {
		composite.setState("includesBaseElement", state.compositeElementInFocusOrder);
	}), sync(composite, ["includesBaseElement"], (state) => {
		composite.setState("compositeElementInFocusOrder", state.includesBaseElement);
	})));
	setup(composite, () => sync(composite, ["renderedItems", "activeId"], (state) => {
		composite.setState("activeId", (activeId) => {
			if (activeId !== void 0) return activeId;
			return findFirstEnabledItem$1(state.renderedItems)?.id;
		});
	}));
	const getNextId = (direction = "next", options = {}) => {
		const defaultState = composite.getState();
		const compositeElementInFocusOrder = defaultValue(options.compositeElementInFocusOrder, options.includesBaseElement, defaultState.compositeElementInFocusOrder);
		const { skip = 0, activeId = defaultState.activeId, focusShift = defaultState.focusShift, focusLoop = defaultState.focusLoop, focusWrap = defaultState.focusWrap, renderedItems = defaultState.renderedItems, rtl = defaultState.rtl } = options;
		const isVerticalDirection = direction === "up" || direction === "down";
		const isNextDirection = direction === "next" || direction === "down";
		const canReverse = isNextDirection ? rtl && !isVerticalDirection : !rtl || isVerticalDirection;
		const canShift = focusShift && !skip;
		if (!skip && !focusWrap && !compositeElementInFocusOrder && activeId != null) {
			if (!isVerticalDirection ? true : !canShift && !renderedItems.some((item) => item.rowId != null)) {
				let activeIndex = -1;
				if (renderedItems === defaultState.renderedItems) {
					const firstItem = renderedItems[0];
					if (firstItem && collection.item(firstItem.id) === firstItem) {
						const registeredItem = collection.item(activeId);
						if (registeredItem?.id === activeId) activeIndex = renderedItems.indexOf(registeredItem);
					}
				}
				if (activeIndex === -1) activeIndex = renderedItems.findIndex((item) => item.id === activeId);
				const activeItem = renderedItems[activeIndex];
				if (activeItem) {
					const step = canReverse ? -1 : 1;
					const nextId = findEnabledItemId({
						items: renderedItems,
						fromIndex: activeIndex + step,
						step,
						rowId: activeItem.rowId,
						excludeId: activeId
					});
					if (nextId !== void 0) return nextId;
					if (!(focusLoop && (isVerticalDirection ? focusLoop !== "horizontal" : focusLoop !== "vertical"))) return void 0;
					return findEnabledItemId({
						items: renderedItems,
						fromIndex: step === 1 ? 0 : renderedItems.length - 1,
						step,
						rowId: activeItem.rowId,
						excludeId: activeId
					});
				}
			}
		}
		let items = !isVerticalDirection ? renderedItems : flatten2DArray(normalizeRows(groupItemsByRows$1(renderedItems), activeId, canShift));
		items = canReverse ? reverseArray(items) : items;
		items = isVerticalDirection ? verticalizeItems(items) : items;
		if (activeId == null) return findFirstEnabledItem$1(items)?.id;
		const activeItem = items.find((item) => item.id === activeId);
		if (!activeItem) return findFirstEnabledItem$1(items)?.id;
		const isGrid = items.some((item) => item.rowId);
		const activeIndex = items.indexOf(activeItem);
		const nextItems = items.slice(activeIndex + 1);
		const nextItemsInRow = getItemsInRow(nextItems, activeItem.rowId);
		if (skip) {
			const nextEnabledItemsInRow = getEnabledItems(nextItemsInRow, activeId);
			return (nextEnabledItemsInRow.slice(skip)[0] || nextEnabledItemsInRow[nextEnabledItemsInRow.length - 1])?.id;
		}
		const canLoop = focusLoop && (isVerticalDirection ? focusLoop !== "horizontal" : focusLoop !== "vertical");
		const canWrap = isGrid && focusWrap && (isVerticalDirection ? focusWrap !== "horizontal" : focusWrap !== "vertical");
		const hasNullItem = isNextDirection ? (!isGrid || isVerticalDirection) && canLoop && compositeElementInFocusOrder : isVerticalDirection ? compositeElementInFocusOrder : false;
		if (canLoop) return findFirstEnabledItem$1(flipItems$1(canWrap && !hasNullItem ? items : getItemsInRow(items, activeItem.rowId), activeId, hasNullItem), activeId)?.id;
		if (canWrap) {
			const nextItem = findFirstEnabledItem$1(hasNullItem ? nextItemsInRow : nextItems, activeId);
			return hasNullItem ? nextItem?.id || null : nextItem?.id;
		}
		const nextItem = findFirstEnabledItem$1(nextItemsInRow, activeId);
		if (!nextItem && hasNullItem) return null;
		return nextItem?.id;
	};
	const getNextIdFromOptions = (direction, options) => {
		if (typeof options === "number") return getNextId(direction, { skip: options });
		return getNextId(direction, options);
	};
	return {
		...collection,
		...composite,
		setCompositeElement: (element) => composite.setState("compositeElement", element),
		setBaseElement: (element) => composite.setState("compositeElement", element),
		setActiveId: (id) => composite.setState("activeId", id),
		move: (id) => {
			if (id === void 0) return;
			composite.setState("activeId", id);
			composite.setState("moves", (moves) => moves + 1);
		},
		first: () => findFirstEnabledItem$1(composite.getState().renderedItems)?.id,
		last: () => findLastEnabledItem(composite.getState().renderedItems)?.id,
		next: (options) => getNextIdFromOptions("next", options),
		previous: (options) => getNextIdFromOptions("previous", options),
		down: (options) => getNextIdFromOptions("down", options),
		up: (options) => getNextIdFromOptions("up", options)
	};
}
var NULL_ITEM, rowMapItemThreshold, rowMapRowThreshold;
function init_composite_store() {
	return (init_composite_store = __esmMin((() => {
		init_collection_store();
		init_dist$2();
		init_dist();
		NULL_ITEM = { id: null };
		rowMapItemThreshold = 48;
		rowMapRowThreshold = 4;
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/composite/utils.js
/** Marks the brief window between a focused item's ref cleanup and removal. */
function markItemUnmounting(element) {
	if (getActiveElement(element) !== element) return;
	unmountingItems.add(element);
	queueMicrotask(() => unmountingItems.delete(element));
}
/** Clears a transient ref cleanup when React keeps the same node mounted. */
function markItemMounted(element) {
	unmountingItems.delete(element);
}
/**
* Runs a callback while preserving the composite element's own scroll position.
*
* When virtual focus briefly moves DOM focus from a text input to an item and
* back, browsers reset the input's internal scroll position (e.g. scrollLeft).
* Only applies to text field composite elements, to avoid undoing an
* intentional scroll on scrollable containers.
*/
function withCompositeScrollPreserved(store, callback) {
	const { virtualFocus, compositeElement } = store.getState();
	if (!virtualFocus || !compositeElement || !isTextField(compositeElement)) {
		callback();
		return;
	}
	const savedScrollLeft = compositeElement.scrollLeft;
	const savedScrollTop = compositeElement.scrollTop;
	callback();
	compositeElement.scrollLeft = savedScrollLeft;
	compositeElement.scrollTop = savedScrollTop;
}
/**
* The popup the composite's items live in, when the composite store is also a
* popup store, as it is for combobox, select and menu.
*/
function getPopupElement(store) {
	const state = store.getState();
	if (!("contentElement" in state)) return null;
	return state.contentElement;
}
/**
* Whether DOM focus is currently inside the composite: on the composite element
* itself, on one of its items, or anywhere in its popup.
*/
function ownsFocus(store) {
	const { compositeElement } = store.getState();
	const activeElement = getTreeActiveElement(compositeElement);
	if (!activeElement) return false;
	if (compositeElement?.contains(activeElement)) return true;
	if (isItem(store, activeElement)) return true;
	return !!getPopupElement(store)?.contains(activeElement);
}
/**
* Focuses a composite item without scrolling, then brings it into view after
* any containing popup has been positioned. Returns a function that cancels a
* pending presentation.
*/
function presentItem({ store, id, focus, markedOnly, requireFocus, focusOwner, scrollIntoView, onConsume }) {
	let element = null;
	let resolvedId;
	let focused = false;
	let focusLeftElement = false;
	let done = false;
	let wasMounted = false;
	let wasOpen = false;
	const compositeAtStart = store.getState().compositeElement;
	const activeAtStart = getTreeActiveElement(compositeAtStart);
	const owner = requireFocus ? focusOwner || activeAtStart : null;
	const startedOnComposite = !!compositeAtStart?.contains(activeAtStart);
	const stillOwnsFocus = (target) => {
		if (!owner) return true;
		const activeElement = getTreeActiveElement(owner);
		if (activeElement === owner) return true;
		if (activeElement === target) return true;
		return ownsFocus(store);
	};
	const abandonedByState = (state) => {
		if ("mounted" in state) {
			if (state.mounted) wasMounted = true;
			else if (wasMounted) return true;
		}
		if ("open" in state) {
			if (state.open) wasOpen = true;
			else if (wasOpen) return true;
		}
		return id != null && state.activeId != null && state.activeId !== id;
	};
	const entersClosedPopup = (state, target) => {
		if (!("open" in state)) return false;
		if (state.open) return false;
		const popup = getPopupElement(store);
		if (!popup?.contains(target)) return false;
		const { compositeElement } = state;
		if (!compositeElement) return false;
		if (popup.contains(compositeElement)) return false;
		return isVisible(target);
	};
	const resolveElement = (state) => {
		const item = getEnabledItem(store, resolvedId ?? (id === void 0 ? state.activeId : id));
		if (!item?.element?.isConnected) return null;
		resolvedId = item.id;
		return item.element;
	};
	let removeFocusListeners;
	let unsubscribe;
	const cancel = () => {
		done = true;
		removeFocusListeners?.();
		unsubscribe?.();
	};
	let consumed = false;
	const consume = () => {
		if (consumed) return;
		consumed = true;
		onConsume?.();
	};
	const settle = () => {
		if (done) return;
		consume();
		return cancel();
	};
	const present = () => {
		if (done) return;
		const state = store.getState();
		if (abandonedByState(state)) return settle();
		let restoreFocus = false;
		if (!element) {
			element = resolveElement(state);
			if (!element) return;
		} else if (!element.isConnected) {
			restoreFocus = focused && !focusLeftElement && getActiveElement(element) === getDocument(element).body;
			element = resolveElement(state);
			if (!element) return settle();
		}
		if (restoreFocus) focused = false;
		else if (!stillOwnsFocus(element)) return settle();
		const focusWithheld = focus && startedOnComposite && entersClosedPopup(state, element);
		if (focusWithheld) {
			const { activeId } = state;
			if (activeId != null && activeId !== resolvedId) return settle();
		}
		if (focus && !focused && !focusWithheld) {
			focused = true;
			consume();
			focusLeftElement = false;
			const itemElement = element;
			removeFocusListeners?.();
			const onBlur = () => {
				focusLeftElement = !unmountingItems.has(itemElement);
			};
			const onFocus = () => {
				focusLeftElement = false;
			};
			itemElement.addEventListener("blur", onBlur);
			itemElement.addEventListener("focus", onFocus);
			removeFocusListeners = () => {
				itemElement.removeEventListener("blur", onBlur);
				itemElement.removeEventListener("focus", onFocus);
			};
			withCompositeScrollPreserved(store, () => {
				itemElement.focus({ preventScroll: true });
			});
			if (done) return;
		}
		if (markedOnly && !element.hasAttribute("data-autofocus")) {
			if (focusWithheld) return;
			return settle();
		}
		if (!isVisible(element)) return;
		if ("unstable_placing" in state && state.unstable_placing) return;
		if (!focusWithheld) settle();
		if (scrollIntoView) {
			scrollIntoView(element);
			return;
		}
		element.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	};
	unsubscribe = subscribe(store, [
		"activeId",
		"items",
		"mounted",
		"open",
		"unstable_placing"
	], present);
	present();
	return Object.assign(cancel, { settle });
}
/**
* Owns at most one pending presentation for the component's current store.
* Layout-effect ownership prevents store swaps or unmounts from stranding a
* request, while newer requests replace older ones. Layout setup runs before
* child passive effects can request presentation; cleanup clears ownership
* during unmount before later handlers or microtasks can enqueue work. The
* initial ref covers the first render before setup.
*
* See https://github.com/ariakit/ariakit/pull/7029
*/
function usePresentItem(store) {
	const cancelRef = (0, import_react$1.useRef)(null);
	const ownerRef = (0, import_react$1.useRef)(store);
	const cancel = (0, import_react$1.useCallback)(() => {
		cancelRef.current?.();
		cancelRef.current = null;
	}, []);
	const present = (0, import_react$1.useCallback)((params) => {
		if (!store) return;
		if (ownerRef.current !== store) return;
		cancelRef.current?.settle();
		cancelRef.current = null;
		const cancelCurrent = presentItem({
			store,
			...params
		});
		cancelRef.current = cancelCurrent;
		return cancelCurrent;
	}, [store]);
	useSafeLayoutEffect(() => {
		ownerRef.current = store;
		return () => {
			ownerRef.current = void 0;
			cancel();
		};
	}, [store, cancel]);
	return present;
}
/**
* Returns the store item with the given id (enabled or not), or `null`.
*/
function getEnabledItem(store, id) {
	if (!id) return null;
	return store.item(id) || null;
}
/**
* Selects text field contents even if it's a content editable element.
*/
function selectTextField(element, collapseToEnd = false) {
	if (isTextField(element)) element.setSelectionRange(collapseToEnd ? element.value.length : 0, element.value.length);
	else if (element.isContentEditable) {
		const selection = getDocument(element).getSelection();
		selection?.selectAllChildren(element);
		if (collapseToEnd) selection?.collapseToEnd();
	}
}
/**
* Focus an element with a flag. The `silentlyFocused` function needs to be
* called later to check if the focus was silenced and to reset this state.
*/
function focusSilently(element) {
	element[FOCUS_SILENTLY] = true;
	element.focus({ preventScroll: true });
}
/**
* Checks whether the element has been focused with the `focusSilently` function
* and resets the state.
*/
function silentlyFocused(element) {
	const isSilentlyFocused = element[FOCUS_SILENTLY];
	delete element[FOCUS_SILENTLY];
	return isSilentlyFocused;
}
/**
* Determines whether the element is a composite item.
*/
function isItem(store, element, exclude) {
	if (!element) return false;
	if (element === exclude) return false;
	const item = store.item(element.id);
	if (!item) return false;
	if (exclude && item.element === exclude) return false;
	return true;
}
var import_react$1, flipItems, findFirstEnabledItem, groupItemsByRows, unmountingItems, FOCUS_SILENTLY;
function init_utils$1() {
	return (init_utils$1 = __esmMin((() => {
		init_C4_D9PgF();
		init_dist$1();
		init_dist();
		import_react$1 = require_react();
		init_dist$2();
		init_composite_store();
		flipItems = flipItems$1;
		findFirstEnabledItem = findFirstEnabledItem$1;
		groupItemsByRows = groupItemsByRows$1;
		unmountingItems = /* @__PURE__ */ new WeakSet();
		FOCUS_SILENTLY = Symbol("FOCUS_SILENTLY");
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-b-7fAlfpqRg2Jp6O33r7Tg/node_modules/@ariakit/react-components/dist/composite/composite-item.js
function isEditableElement(element) {
	if (isTextbox(element)) return true;
	return element.tagName === "INPUT" && !isButton(element);
}
function getNextPageOffset(scrollingElement, pageUp = false) {
	const height = scrollingElement.clientHeight;
	const { top } = scrollingElement.getBoundingClientRect();
	const pageSize = Math.max(height * .875, height - 40) * 1.5;
	const pageOffset = pageUp ? height - pageSize + top : pageSize + top;
	if (scrollingElement.tagName === "HTML") return pageOffset + scrollingElement.scrollTop;
	return pageOffset;
}
function getItemOffset(itemElement, pageUp = false) {
	const { top } = itemElement.getBoundingClientRect();
	if (pageUp) return top + itemElement.clientHeight;
	return top;
}
function findNextPageItemId(element, store, next, pageUp = false) {
	if (!store) return;
	if (!next) return;
	const { renderedItems } = store.getState();
	const scrollingElement = getScrollingElement(element);
	if (!scrollingElement) return;
	const nextPageOffset = getNextPageOffset(scrollingElement, pageUp);
	let id;
	let prevDifference;
	for (let i = 0; i < renderedItems.length; i += 1) {
		const previousId = id;
		id = next(i);
		if (!id) break;
		if (id === previousId) continue;
		const itemElement = getEnabledItem(store, id)?.element;
		if (!itemElement) continue;
		const difference = getItemOffset(itemElement, pageUp) - nextPageOffset;
		const absDifference = Math.abs(difference);
		if (pageUp && difference <= 0 || !pageUp && difference >= 0) {
			if (prevDifference !== void 0 && prevDifference < absDifference) id = previousId;
			break;
		}
		prevDifference = absDifference;
	}
	return id;
}
function targetIsAnotherItem(event, store) {
	if (isSelfTarget(event)) return false;
	return isItem(store, event.target);
}
var import_react, import_jsx_runtime, TagName, useCompositeItem, CompositeItem;
function init_composite_item() {
	return (init_composite_item = __esmMin((() => {
		init_C4_D9PgF();
		init_command();
		init_collection_item();
		init_composite_context();
		init_utils$1();
		init_dist$1();
		init_dist();
		import_react = require_react();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$3();
		init_dist$2();
		TagName = "button";
		useCompositeItem = createHook(function useCompositeItem({ store, rowId: rowIdProp, preventScrollOnKeyDown = false, moveOnKeyPress = true, tabbable = false, getItem: getItemProp, typeaheadText, "aria-setsize": ariaSetSizeProp, "aria-posinset": ariaPosInSetProp, unstable_scrollIntoView: scrollIntoView, ...props }) {
			const context = useCompositeScopedContext();
			store = store || context;
			const accessibleWhenDisabled = accessibleWhenDisabledFromProps(props);
			const id = useId(props.id);
			const ref = (0, import_react.useRef)(null);
			const mountedElementRef = (0, import_react.useRef)(null);
			const markUnmountingRef = (0, import_react.useCallback)((element) => {
				const mountedElement = mountedElementRef.current;
				if (!element && mountedElement) markItemUnmounting(mountedElement);
				if (element) markItemMounted(element);
				mountedElementRef.current = element;
			}, []);
			const row = (0, import_react.useContext)(CompositeRowContext);
			const disabled = disabledFromProps(props);
			const trulyDisabled = disabled && !accessibleWhenDisabled;
			const inactiveDisabled = disabled && props.focusable === false;
			const shouldRegisterItem = props.shouldRegisterItem;
			const getRowId = (state) => {
				if (rowIdProp) return rowIdProp;
				if (!state) return;
				if (!row?.compositeElement) return;
				if (row.compositeElement !== state.compositeElement) return;
				return row.id;
			};
			const { rowId, compositeElement, ariaSetSize, ariaPosInSet } = useStoreStateObject(store, ["compositeElement", "renderedItems"], {
				rowId: getRowId,
				compositeElement(state) {
					return state?.compositeElement || void 0;
				},
				ariaSetSize(state) {
					if (ariaSetSizeProp != null) return ariaSetSizeProp;
					if (!state) return;
					if (!row?.ariaSetSize) return;
					if (row.compositeElement !== state.compositeElement) return;
					return row.ariaSetSize;
				},
				ariaPosInSet(state) {
					if (ariaPosInSetProp != null) return ariaPosInSetProp;
					if (!state) return;
					if (!row?.ariaPosInSet) return;
					if (row.compositeElement !== state.compositeElement) return;
					const rowId = getRowId(state);
					const itemsInRow = state.renderedItems.filter((item) => item.rowId === rowId);
					return row.ariaPosInSet + itemsInRow.findIndex((item) => item.id === id);
				}
			});
			const { isActiveItem, isTabbable } = useStoreStateObject(store, [
				"activeId",
				"compositeElement",
				"renderedItems",
				"virtualFocus",
				"items"
			], {
				isActiveItem(state) {
					return !!state && state.activeId === id;
				},
				isTabbable(state) {
					if (!state) return true;
					if (!state.compositeElement && !state.renderedItems.length) return true;
					if (state.virtualFocus) return false;
					if (!state.renderedItems.length) return true;
					if (tabbable) return true;
					if (state.activeId === null) return false;
					const item = store?.item(state.activeId);
					if (item?.disabled) return true;
					if (!item?.element) return true;
					return state.activeId === id;
				}
			});
			const getItem = (0, import_react.useCallback)((item) => {
				const itemDisabled = (item.element ? resolvedTrulyDisabledFromElement(item.element) : void 0) ?? (inactiveDisabled || trulyDisabled);
				const nextItem = {
					...item,
					id: id || item.id,
					rowId,
					disabled: itemDisabled,
					children: item.element?.textContent,
					typeaheadText
				};
				if (getItemProp) return getItemProp(nextItem);
				return nextItem;
			}, [
				id,
				rowId,
				inactiveDisabled,
				trulyDisabled,
				typeaheadText,
				getItemProp
			]);
			const onFocusProp = props.onFocus;
			const hasFocusedComposite = (0, import_react.useRef)(false);
			const cancelScheduledFocusRedirectRef = (0, import_react.useRef)(null);
			const present = usePresentItem(store);
			const onFocus = useEvent((event) => {
				onFocusProp?.(event);
				if (event.defaultPrevented) return;
				if (isPortalEvent(event)) return;
				if (!id) return;
				if (!store) return;
				if (targetIsAnotherItem(event, store)) return;
				const { virtualFocus, compositeElement } = store.getState();
				store.setActiveId(id);
				if (isTextbox(event.currentTarget)) selectTextField(event.currentTarget);
				if (!virtualFocus) {
					if (isSelfTarget(event) && store.item(id)) present({
						id,
						markedOnly: true,
						requireFocus: true,
						scrollIntoView
					});
					return;
				}
				if (!isSelfTarget(event)) return;
				if (isEditableElement(event.currentTarget)) return;
				const redirectFocusToCompositeElement = (relatedTarget, compositeElement) => {
					if (!isFocusable(compositeElement)) {
						warnOnce("A composite widget with `virtualFocus` enabled requires a focusable composite element. Set the `focusable` prop to `true` or the `virtualFocus` option to `false`.", compositeElement);
						return;
					}
					const fromComposite = relatedTarget === compositeElement || isItem(store, relatedTarget);
					if (store.item(id)) present({
						id,
						markedOnly: true,
						requireFocus: true,
						scrollIntoView
					});
					hasFocusedComposite.current = true;
					if (fromComposite) focusSilently(compositeElement);
					else compositeElement.focus({ preventScroll: true });
				};
				if (compositeElement?.isConnected) {
					redirectFocusToCompositeElement(event.relatedTarget, compositeElement);
					return;
				}
				if (shouldRegisterItem === false) return;
				const { currentTarget, relatedTarget } = event;
				const cancelScheduledFocusRedirect = () => {
					cancelScheduledFocusRedirectRef.current?.();
					cancelScheduledFocusRedirectRef.current = null;
				};
				cancelScheduledFocusRedirect();
				cancelScheduledFocusRedirectRef.current = subscribe(store, null, () => {
					if (getActiveElement(currentTarget) !== currentTarget) {
						cancelScheduledFocusRedirect();
						return;
					}
					const state = store.getState();
					const nextCompositeElement = state.compositeElement;
					if (!nextCompositeElement?.isConnected) return;
					cancelScheduledFocusRedirect();
					if (!state.virtualFocus) return;
					redirectFocusToCompositeElement(relatedTarget, nextCompositeElement);
				});
			});
			const onBlurCaptureProp = props.onBlurCapture;
			const onBlurCapture = useEvent((event) => {
				onBlurCaptureProp?.(event);
				if (event.defaultPrevented) return;
				if ((store?.getState())?.virtualFocus && hasFocusedComposite.current) {
					hasFocusedComposite.current = false;
					event.preventDefault();
					event.stopPropagation();
				}
			});
			const onKeyDownProp = props.onKeyDown;
			const preventScrollOnKeyDownProp = useBooleanEvent(preventScrollOnKeyDown);
			const moveOnKeyPressProp = useBooleanEvent(moveOnKeyPress);
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (event.defaultPrevented) return;
				if (!isSelfTarget(event)) return;
				if (!store) return;
				const { currentTarget } = event;
				const state = store.getState();
				const isGrid = !!store.item(id)?.rowId;
				const isVertical = state.orientation !== "horizontal";
				const isHorizontal = state.orientation !== "vertical";
				const canHomeEnd = () => {
					if (isGrid) return true;
					if (isHorizontal) return true;
					if (!state.compositeElement) return true;
					if (!isTextField(state.compositeElement)) return true;
					return false;
				};
				const action = {
					ArrowUp: (isGrid || isVertical) && store.up,
					ArrowRight: (isGrid || isHorizontal) && store.next,
					ArrowDown: (isGrid || isVertical) && store.down,
					ArrowLeft: (isGrid || isHorizontal) && store.previous,
					Home: () => {
						if (!canHomeEnd()) return;
						if (!isGrid || event.ctrlKey) return store?.first();
						return store?.previous(-1);
					},
					End: () => {
						if (!canHomeEnd()) return;
						if (!isGrid || event.ctrlKey) return store?.last();
						return store?.next(-1);
					},
					PageUp: () => {
						return findNextPageItemId(currentTarget, store, store?.up, true);
					},
					PageDown: () => {
						return findNextPageItemId(currentTarget, store, store?.down);
					}
				}[event.key];
				if (action) {
					if (isTextbox(currentTarget)) {
						const selection = getTextboxSelection(currentTarget);
						const isLeft = isHorizontal && event.key === "ArrowLeft";
						const isRight = isHorizontal && event.key === "ArrowRight";
						const isUp = isVertical && event.key === "ArrowUp";
						const isDown = isVertical && event.key === "ArrowDown";
						if (isRight || isDown) {
							const { length: valueLength } = getTextboxValue(currentTarget);
							if (selection.end !== valueLength) return;
						} else if ((isLeft || isUp) && selection.start !== 0) return;
					}
					const nextId = action();
					if (preventScrollOnKeyDownProp(event) || nextId !== void 0) {
						if (!moveOnKeyPressProp(event)) return;
						event.preventDefault();
						store.move(nextId);
					}
				}
			});
			const providerValue = (0, import_react.useMemo)(() => ({
				id,
				compositeElement
			}), [id, compositeElement]);
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeItemContext.Provider, {
				value: providerValue,
				children: element
			}), [providerValue]);
			props = {
				"data-active-item": isActiveItem || void 0,
				...props,
				id,
				ref: useMergeRefs(ref, markUnmountingRef, props.ref),
				tabIndex: isTabbable ? props.tabIndex : -1,
				onFocus,
				onBlurCapture,
				onKeyDown
			};
			props = useCommand(props);
			props = useCollectionItem({
				store,
				...props,
				getItem,
				shouldRegisterItem: id ? shouldRegisterItem : false
			});
			return {
				...props,
				"aria-setsize": ariaSetSize,
				"aria-posinset": ariaPosInSet
			};
		});
		CompositeItem = memo(forwardRef(function CompositeItem(props) {
			const htmlProps = useCompositeItem(withDefaultButtonType(props));
			return createElement(TagName, htmlProps);
		}));
	})))();
}
//#endregion
export { init_collection_item as C, init_utils as D, useCommand as E, withDefaultButtonType as O, useCompositeScopedContext as S, init_command as T, CompositeContextProvider as _, flipItems as a, init_composite_context as b, init_utils$1 as c, silentlyFocused as d, usePresentItem as f, init_collection_store as g, createCollectionStore as h, findFirstEnabledItem as i, isItem as l, init_composite_store as m, init_composite_item as n, getEnabledItem as o, createCompositeStore as p, useCompositeItem as r, groupItemsByRows as s, CompositeItem as t, ownsFocus as u, CompositeRowContext as v, useCollectionItem as w, useCompositeProviderContext as x, CompositeScopedContextProvider as y };
