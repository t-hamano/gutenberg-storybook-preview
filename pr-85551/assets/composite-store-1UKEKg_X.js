import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { b as init_composite_context, c as init_utils, d as silentlyFocused, f as usePresentItem, i as findFirstEnabledItem, l as isItem, m as init_composite_store$1, o as getEnabledItem, p as createCompositeStore, s as groupItemsByRows, u as ownsFocus, x as useCompositeProviderContext, y as CompositeScopedContextProvider } from "./composite-item-JNO_FG0t.js";
import { At as reverseArray, L as flatten2DArray, P as fireBlurEvent, Q as hasFocus, R as getActiveElement, S as useUpdateEffect, a as init_dist$1, dt as isFocusable, et as hasOwnProperty, f as useId, g as useMergeRefs, i as forwardRef, l as useBooleanEvent, n as createHook, nt as init_dist, o as memo, rt as invariant, t as createElement, u as useEvent, vt as isSelfTarget, w as useWrapElement, x as useTransactionState, y as useSafeLayoutEffect, yt as isTextField } from "./dist-BNTCqa48.js";
import { D as init_C4_D9PgF, T as getTreeActiveElement, _ as subscribe, a as useStore, b as init_focusable, f as init_dist$2, i as init_dist$3, o as useStoreProps, r as init_CDh2UhnG, s as useStoreState, t as fireProxiedKeyboardEvent, v as sync, x as useFocusable } from "./CDh2UhnG-BRjcGYWx.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/__chunks/xFYjARz5.js
function getMoveRequest(store, source) {
	const key = store.getState;
	const cached = moveRequests.get(key);
	if (cached) return cached;
	const sourceState = source?.getState();
	if (source && sourceState && hasOwnProperty(sourceState, "moves") && hasOwnProperty(sourceState, "activeId")) {
		const request = getMoveRequest(source);
		moveRequests.set(key, request);
		return request;
	}
	const request = {
		consumedBy: null,
		targetId: store.getState().activeId
	};
	moveRequests.set(key, request);
	sync(store, ["moves", "activeId"], (state, prevState) => {
		if (state.moves !== prevState.moves) {
			request.consumedBy = null;
			request.targetId = state.activeId;
			return;
		}
		if (state.activeId !== prevState.activeId) request.targetId = cancelled;
	});
	return request;
}
var cancelled, moveRequests;
function init_xFYjARz5() {
	return (init_xFYjARz5 = __esmMin((() => {
		init_dist();
		init_dist$2();
		cancelled = Symbol("cancelled");
		moveRequests = /* @__PURE__ */ new WeakMap();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/composite/composite.js
function isGrid(items) {
	return items.some((item) => !!item.rowId);
}
function isPrintableKey(event) {
	const target = event.target;
	if (target && !isTextField(target)) return false;
	return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
function isModifierKey(event) {
	return event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "Meta";
}
function useKeyboardEventProxy(store, onKeyboardEvent, previousElementRef) {
	return useEvent((event) => {
		onKeyboardEvent?.(event);
		if (event.defaultPrevented) return;
		if (event.isPropagationStopped()) return;
		if (!isSelfTarget(event)) return;
		if (isModifierKey(event)) return;
		if (isPrintableKey(event)) return;
		const state = store.getState();
		const activeElement = getEnabledItem(store, state.activeId)?.element;
		if (!activeElement) return;
		const { view, ...eventInit } = event;
		if (activeElement !== previousElementRef?.current) activeElement.focus({ preventScroll: true });
		if (!fireProxiedKeyboardEvent(activeElement, event.nativeEvent, eventInit)) event.preventDefault();
		if (event.currentTarget.contains(activeElement)) event.stopPropagation();
	});
}
function findFirstEnabledItemInTheLastRow(items) {
	return findFirstEnabledItem(flatten2DArray(reverseArray(groupItemsByRows(items))));
}
/**
* Whether `instance` may act on the store's current move. An unconsumed request
* is available to whichever instance is around; a consumed one stays with the
* instance that consumed it, so its own effects can still run again.
*/
function mayActOnMove(store, instance) {
	const { consumedBy } = getMoveRequest(store);
	return !consumedBy || consumedBy === instance;
}
/**
* Records that `instance` consumed the store's move `moves`, so no later
* instance replays it. It is per component instance rather than per composite
* element, because switching the `composite` prop off and on again mounts a
* fresh instance while the element itself survives. A consumption that arrives
* after the count has moved on is dropped, resets included, because it settles
* the request the count held when it started.
*/
function consumeMove(store, instance, moves) {
	if (store.getState().moves !== moves) return;
	getMoveRequest(store).consumedBy = instance;
}
var import_react, import_jsx_runtime, TagName, CompositeFocusOnMove, useComposite, Composite;
function init_composite() {
	return (init_composite = __esmMin((() => {
		init_C4_D9PgF();
		init_focusable();
		init_composite_context();
		init_CDh2UhnG();
		init_xFYjARz5();
		init_utils();
		init_dist$1();
		init_dist();
		import_react = require_react();
		import_jsx_runtime = require_jsx_runtime();
		init_dist$3();
		init_dist$2();
		TagName = "div";
		CompositeFocusOnMove = memo(function CompositeFocusOnMove({ store, focusOnMove, previousElementRef, present, scrollIntoView }) {
			const moves = useStoreState(store, "moves");
			const compositeElement = useStoreState(store, "compositeElement");
			const instance = (0, import_react.useMemo)(() => ({}), [store.getState]);
			(0, import_react.useEffect)(() => {
				const moveRequest = getMoveRequest(store);
				if (!moves) return;
				if (!focusOnMove) return;
				if (!mayActOnMove(store, instance)) return;
				const { activeId } = store.getState();
				if (activeId == null) return;
				if (activeId !== moveRequest.targetId) return;
				return present({
					id: activeId,
					requireFocus: ownsFocus(store),
					focus: true,
					scrollIntoView,
					onConsume: () => consumeMove(store, instance, moves)
				});
			}, [
				store,
				moves,
				focusOnMove,
				compositeElement,
				present,
				scrollIntoView,
				instance
			]);
			useSafeLayoutEffect(() => {
				const moveRequest = getMoveRequest(store);
				if (!moves) return;
				if (!compositeElement) return;
				if (!mayActOnMove(store, instance)) return;
				const { activeId } = store.getState();
				if (!(activeId === null)) return;
				if (activeId !== moveRequest.targetId) return;
				consumeMove(store, instance, moves);
				const previousElement = previousElementRef.current;
				previousElementRef.current = null;
				if (previousElement) fireBlurEvent(previousElement, { relatedTarget: compositeElement });
				if (!hasFocus(compositeElement)) {
					if (isFocusable(compositeElement)) compositeElement.scrollIntoView({
						block: "nearest",
						inline: "nearest"
					});
					compositeElement.focus({ preventScroll: true });
				}
			}, [
				store,
				moves,
				compositeElement,
				previousElementRef,
				instance
			]);
			return null;
		});
		useComposite = createHook(function useComposite({ store, composite = true, focusOnMove = composite, moveOnKeyPress = true, unstable_scrollIntoView: scrollIntoView, ...props }) {
			const context = useCompositeProviderContext();
			store = store || context;
			invariant(store, "Composite must receive a `store` prop or be wrapped in a CompositeProvider component.");
			const ref = (0, import_react.useRef)(null);
			const previousElementRef = (0, import_react.useRef)(null);
			const present = usePresentItem(store);
			const scheduleFocusUpdateRef = (0, import_react.useRef)(void 0);
			useSafeLayoutEffect(() => {
				if (!composite) return;
				let focusElement = null;
				let pending = false;
				let disposed = false;
				const update = () => {
					pending = false;
					if (disposed) return;
					const { activeId, compositeElement } = store.getState();
					const ownerHasFocus = !!compositeElement && compositeElement === ref.current && getTreeActiveElement(compositeElement) === compositeElement;
					const itemElement = store.item(activeId)?.element;
					const nextElement = ownerHasFocus && itemElement?.isConnected && itemElement !== compositeElement ? itemElement : null;
					if (focusElement === nextElement) return;
					focusElement?.removeAttribute("data-focus");
					nextElement?.setAttribute("data-focus", "true");
					focusElement = nextElement;
				};
				const schedule = () => {
					if (pending) return;
					pending = true;
					queueMicrotask(update);
				};
				scheduleFocusUpdateRef.current = schedule;
				const unsubscribe = subscribe(store, [
					"activeId",
					"items",
					"compositeElement"
				], schedule);
				schedule();
				return () => {
					disposed = true;
					scheduleFocusUpdateRef.current = void 0;
					unsubscribe();
					focusElement?.removeAttribute("data-focus");
				};
			}, [store, composite]);
			const [, setCompositeElement] = useTransactionState(composite ? store.setCompositeElement : null);
			const virtualFocus = useStoreState(store, "virtualFocus");
			const activeId = useStoreState(store, composite && virtualFocus ? ["activeId"] : [], (state) => composite && virtualFocus ? state.activeId : null);
			useSafeLayoutEffect(() => {
				if (!store) return;
				if (!composite) return;
				if (!virtualFocus) return;
				const previousElement = previousElementRef.current;
				previousElementRef.current = null;
				if (!previousElement) return;
				const relatedTarget = getEnabledItem(store, activeId)?.element || getActiveElement(previousElement);
				if (relatedTarget === previousElement) return;
				fireBlurEvent(previousElement, { relatedTarget });
			}, [
				store,
				activeId,
				virtualFocus,
				composite
			]);
			const onKeyDownCapture = useKeyboardEventProxy(store, props.onKeyDownCapture, previousElementRef);
			const onKeyUpCapture = useKeyboardEventProxy(store, props.onKeyUpCapture, previousElementRef);
			const onFocusCaptureProp = props.onFocusCapture;
			const onFocusCapture = useEvent((event) => {
				scheduleFocusUpdateRef.current?.();
				onFocusCaptureProp?.(event);
				if (event.defaultPrevented) return;
				if (!store) return;
				const { virtualFocus } = store.getState();
				if (!virtualFocus) return;
				const previousActiveElement = event.relatedTarget;
				const isSilentlyFocused = silentlyFocused(event.currentTarget);
				if (isSelfTarget(event) && isSilentlyFocused) {
					event.stopPropagation();
					previousElementRef.current = previousActiveElement;
				}
			});
			const onFocusProp = props.onFocus;
			const onFocus = useEvent((event) => {
				onFocusProp?.(event);
				if (event.defaultPrevented) return;
				if (!composite) return;
				if (!store) return;
				const { relatedTarget } = event;
				const { virtualFocus } = store.getState();
				if (virtualFocus) {
					if (isSelfTarget(event) && !isItem(store, relatedTarget)) queueMicrotask(() => present({
						focus: true,
						markedOnly: true,
						requireFocus: true,
						scrollIntoView
					}));
				} else if (isSelfTarget(event)) {
					if (!isItem(store, relatedTarget)) {
						const { activeId } = store.getState();
						if (activeId != null) present({
							id: activeId,
							markedOnly: true,
							requireFocus: true,
							scrollIntoView
						});
					}
					store.setActiveId(null);
				}
			});
			const onBlurCaptureProp = props.onBlurCapture;
			const onBlurCapture = useEvent((event) => {
				scheduleFocusUpdateRef.current?.();
				onBlurCaptureProp?.(event);
				if (event.defaultPrevented) return;
				if (!store) return;
				const { virtualFocus, activeId, compositeElement } = store.getState();
				if (!virtualFocus) return;
				if (event.currentTarget !== compositeElement) return;
				const activeElement = getEnabledItem(store, activeId)?.element;
				const nextActiveElement = event.relatedTarget;
				const nextActiveElementIsItem = isItem(store, nextActiveElement);
				const previousElement = previousElementRef.current;
				previousElementRef.current = null;
				if (isSelfTarget(event) && nextActiveElementIsItem) {
					if (nextActiveElement === activeElement) {
						if (previousElement && previousElement !== nextActiveElement) fireBlurEvent(previousElement, event);
					} else if (activeElement) fireBlurEvent(activeElement, event);
					else if (previousElement) fireBlurEvent(previousElement, event);
					event.stopPropagation();
				} else if (!isItem(store, event.target) && activeElement) fireBlurEvent(activeElement, event);
			});
			const onKeyDownProp = props.onKeyDown;
			const moveOnKeyPressProp = useBooleanEvent(moveOnKeyPress);
			const onKeyDown = useEvent((event) => {
				onKeyDownProp?.(event);
				if (event.nativeEvent.isComposing) return;
				if (event.defaultPrevented) return;
				if (!store) return;
				if (!isSelfTarget(event)) return;
				const { orientation, items, renderedItems, activeId, rtl } = store.getState();
				const activeItem = getEnabledItem(store, activeId);
				if (activeItem?.element?.isConnected) return;
				const elementlessActiveItem = activeItem && activeId != null;
				const movementItems = elementlessActiveItem ? items : renderedItems;
				const isVertical = orientation !== "horizontal";
				const isHorizontal = orientation !== "vertical";
				const grid = isGrid(movementItems);
				if ((event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End") && isTextField(event.currentTarget)) return;
				const up = () => {
					if (elementlessActiveItem) return store.up({
						activeId,
						renderedItems: movementItems
					});
					if (grid) return findFirstEnabledItemInTheLastRow(renderedItems)?.id;
					return store?.last();
				};
				const right = () => {
					if (elementlessActiveItem) return store.next({
						activeId,
						renderedItems: movementItems
					});
					return rtl ? store.last() : store.first();
				};
				const down = () => {
					if (elementlessActiveItem) return store.down({
						activeId,
						renderedItems: movementItems
					});
					return store.first();
				};
				const left = () => {
					if (elementlessActiveItem) return store.previous({
						activeId,
						renderedItems: movementItems
					});
					return rtl ? store.first() : store.last();
				};
				const action = {
					ArrowUp: (grid || isVertical) && up,
					ArrowRight: (grid || isHorizontal) && right,
					ArrowDown: (grid || isVertical) && down,
					ArrowLeft: (grid || isHorizontal) && left,
					Home: store.first,
					End: store.last,
					PageUp: store.first,
					PageDown: store.last
				}[event.key];
				if (action) {
					const id = action();
					if (id !== void 0) {
						if (!moveOnKeyPressProp(event)) return;
						event.preventDefault();
						store.move(id);
					}
				}
			});
			props = useWrapElement(props, (element) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CompositeScopedContextProvider, {
				value: store,
				children: [element, composite && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositeFocusOnMove, {
					store,
					focusOnMove,
					previousElementRef,
					present,
					scrollIntoView
				})]
			}), [
				store,
				composite,
				focusOnMove,
				present
			]);
			props = {
				"aria-activedescendant": useStoreState(store, composite && virtualFocus ? ["items"] : [], () => {
					if (!store) return;
					if (!composite) return;
					if (!virtualFocus) return;
					return getEnabledItem(store, activeId)?.id;
				}),
				...props,
				ref: useMergeRefs(ref, setCompositeElement, props.ref),
				onKeyDownCapture,
				onKeyUpCapture,
				onFocusCapture,
				onFocus,
				onBlurCapture,
				onKeyDown
			};
			const focusable = useStoreState(store, composite && !virtualFocus ? ["activeId"] : [], (state) => composite && (virtualFocus || state.activeId === null));
			props = useFocusable({
				focusable,
				...props
			});
			return props;
		});
		Composite = forwardRef(function Composite(props) {
			const htmlProps = useComposite(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/collection/collection-store.js
function useCollectionStoreProps(store, update, props) {
	useUpdateEffect(update, [props.store, update]);
	useStoreProps(store, props, "items", "setItems");
	return store;
}
function init_collection_store() {
	return (init_collection_store = __esmMin((() => {
		init_dist$1();
		init_dist$3();
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/composite/composite-store.js
function useCompositeStoreOptions(props) {
	return {
		id: useId(props.id),
		...props
	};
}
function useCompositeStoreProps(store, update, props) {
	store = useCollectionStoreProps(store, update, props);
	getMoveRequest(store, props.store);
	useStoreProps(store, props, "activeId", "setActiveId");
	const focusOrderProps = { compositeElementInFocusOrder: props.compositeElementInFocusOrder ?? props.includesBaseElement };
	useStoreProps(store, focusOrderProps, "compositeElementInFocusOrder");
	useStoreProps(store, props, "virtualFocus");
	useStoreProps(store, props, "orientation");
	useStoreProps(store, props, "rtl");
	useStoreProps(store, props, "focusLoop");
	useStoreProps(store, props, "focusWrap");
	useStoreProps(store, props, "focusShift");
	return store;
}
function useCompositeStore(props = {}) {
	props = useCompositeStoreOptions(props);
	const [store, update] = useStore(createCompositeStore, props);
	return useCompositeStoreProps(store, update, props);
}
function init_composite_store() {
	return (init_composite_store = __esmMin((() => {
		init_collection_store();
		init_xFYjARz5();
		init_dist$1();
		init_dist$3();
		init_composite_store$1();
	})))();
}
//#endregion
export { Composite as a, useCompositeStoreProps as i, useCompositeStore as n, init_composite as o, useCompositeStoreOptions as r, useComposite as s, init_composite_store as t };
