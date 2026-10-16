import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { S as useCompositeScopedContext, a as flipItems, b as init_composite_context, c as init_utils } from "./composite-item-CtrOK3yA.js";
import { $ as hasFocusWithin, Ot as removeUndefinedValues, Q as hasFocus, a as init_dist$1, et as hasOwnProperty, g as useMergeRefs, i as forwardRef, k as contains, l as useBooleanEvent, m as useIsMouseMoving, n as createHook, nt as init_dist, o as memo, rt as invariant, st as isElement, t as createElement, u as useEvent, vt as isSelfTarget, wt as normalizeString, yt as isTextField } from "./dist-DgYpwR44.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/composite/composite-typeahead.js
function getTypeaheadState(store) {
	let typeaheadState = typeaheadStates.get(store);
	if (!typeaheadState) {
		typeaheadState = {
			chars: "",
			cleanupTimeout: 0
		};
		typeaheadStates.set(store, typeaheadState);
	}
	return typeaheadState;
}
function clearChars(typeaheadState) {
	typeaheadState.chars = "";
}
function isValidTypeaheadEvent(event, typeaheadState) {
	const target = event.target;
	if (target && isTextField(target)) return false;
	if (event.key === " " && typeaheadState.chars.length) return true;
	return event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey && /^[\p{Letter}\p{Number}]$/u.test(event.key);
}
function isSelfTargetOrItem(event, items) {
	if (isSelfTarget(event)) return true;
	const target = event.target;
	if (!target) return false;
	return items.some((item) => item.element === target);
}
function getEnabledItems(items) {
	return items.filter((item) => !item.disabled);
}
function itemTextStartsWith(item, text) {
	const itemText = item.typeaheadText ?? (item.element?.textContent || item.children || "value" in item && item.value);
	if (!itemText) return false;
	return normalizeString(itemText).trim().toLowerCase().startsWith(text.toLowerCase());
}
function getSameInitialItems({ activeId, char, items, typeaheadState }) {
	if (!activeId) return items;
	const activeItem = items.find((item) => item.id === activeId);
	if (!activeItem) return items;
	if (!itemTextStartsWith(activeItem, char)) return items;
	const { chars } = typeaheadState;
	if (chars !== char && itemTextStartsWith(activeItem, chars)) return items;
	typeaheadState.chars = char;
	return flipItems(items.filter((item) => itemTextStartsWith(item, char)), activeId).filter((item) => item.id !== activeId);
}
var TagName$1, typeaheadStates, useCompositeTypeahead, CompositeTypeahead;
function init_composite_typeahead() {
	return (init_composite_typeahead = __esmMin((() => {
		init_composite_context();
		init_utils();
		init_dist$1();
		init_dist();
		TagName$1 = "div";
		typeaheadStates = /* @__PURE__ */ new WeakMap();
		useCompositeTypeahead = createHook(function useCompositeTypeahead({ store, typeahead = true, ...props }) {
			const context = useCompositeScopedContext();
			store = store || context;
			invariant(store, "CompositeTypeahead must be a Composite component");
			const onKeyDownCaptureProp = props.onKeyDownCapture;
			const onKeyDownCapture = useEvent((event) => {
				onKeyDownCaptureProp?.(event);
				if (event.defaultPrevented) return;
				if (!typeahead) return;
				if (!store) return;
				const typeaheadState = getTypeaheadState(store);
				if (!isValidTypeaheadEvent(event, typeaheadState)) return clearChars(typeaheadState);
				const { renderedItems, items, activeId } = store.getState();
				let enabledItems = getEnabledItems(items.length > renderedItems.length ? items : renderedItems);
				if (!isSelfTargetOrItem(event, enabledItems)) return clearChars(typeaheadState);
				event.preventDefault();
				window.clearTimeout(typeaheadState.cleanupTimeout);
				typeaheadState.cleanupTimeout = window.setTimeout(() => {
					clearChars(typeaheadState);
				}, 500);
				const char = event.key.toLowerCase();
				typeaheadState.chars += char;
				enabledItems = getSameInitialItems({
					activeId,
					char,
					items: enabledItems,
					typeaheadState
				});
				const item = enabledItems.find((item) => itemTextStartsWith(item, typeaheadState.chars));
				if (item) store.move(item.id);
				else clearChars(typeaheadState);
			});
			props = {
				...props,
				onKeyDownCapture
			};
			return removeUndefinedValues(props);
		});
		CompositeTypeahead = forwardRef(function CompositeTypeahead(props) {
			const htmlProps = useCompositeTypeahead(props);
			return createElement(TagName$1, htmlProps);
		});
	})))();
}
//#endregion
//#region ../node_modules/.store/@ariakit/react-components@0.7.0-SPgsuugSDrFrx2DGVqJK3g/node_modules/@ariakit/react-components/dist/composite/composite-hover.js
function hoveringInside(event) {
	const nextElement = event.relatedTarget;
	if (!isElement(nextElement)) return false;
	return contains(event.currentTarget, nextElement);
}
function movingToAnotherItem(event) {
	const { relatedTarget } = event;
	if (!isElement(relatedTarget)) return false;
	let dest = relatedTarget;
	do {
		if (hasOwnProperty(dest, symbol) && dest[symbol]) return true;
		dest = dest.parentElement;
	} while (dest);
	return false;
}
var import_react, TagName, symbol, useCompositeHover, CompositeHover;
function init_composite_hover() {
	return (init_composite_hover = __esmMin((() => {
		init_composite_context();
		init_dist$1();
		init_dist();
		import_react = require_react();
		TagName = "div";
		symbol = Symbol("composite-hover");
		useCompositeHover = createHook(function useCompositeHover({ store, focusOnHover = true, blurOnHoverEnd = !!focusOnHover, ...props }) {
			const context = useCompositeScopedContext();
			store = store || context;
			invariant(store, "CompositeHover must be wrapped in a Composite component.");
			const isMouseMoving = useIsMouseMoving();
			const onMouseMoveProp = props.onMouseMove;
			const focusOnHoverProp = useBooleanEvent(focusOnHover);
			const onMouseMove = useEvent((event) => {
				onMouseMoveProp?.(event);
				if (event.defaultPrevented) return;
				if (!isMouseMoving()) return;
				if (!focusOnHoverProp(event)) return;
				if (!hasFocusWithin(event.currentTarget)) {
					const compositeElement = store?.getState().compositeElement;
					if (compositeElement && !hasFocus(compositeElement)) compositeElement.focus({ preventScroll: true });
				}
				store?.setActiveId(event.currentTarget.id);
			});
			const onMouseLeaveProp = props.onMouseLeave;
			const blurOnHoverEndProp = useBooleanEvent(blurOnHoverEnd);
			const onMouseLeave = useEvent((event) => {
				onMouseLeaveProp?.(event);
				if (event.defaultPrevented) return;
				if (!isMouseMoving()) return;
				if (hoveringInside(event)) return;
				if (movingToAnotherItem(event)) return;
				if (!focusOnHoverProp(event)) return;
				if (!blurOnHoverEndProp(event)) return;
				store?.setActiveId(null);
				store?.getState().compositeElement?.focus({ preventScroll: true });
			});
			const ref = (0, import_react.useCallback)((element) => {
				if (!element) return;
				element[symbol] = true;
			}, []);
			props = {
				...props,
				ref: useMergeRefs(ref, props.ref),
				onMouseMove,
				onMouseLeave
			};
			return props;
		});
		CompositeHover = memo(forwardRef(function CompositeHover(props) {
			const htmlProps = useCompositeHover(props);
			return createElement(TagName, htmlProps);
		}));
	})))();
}
//#endregion
export { init_composite_typeahead as a, CompositeTypeahead as i, init_composite_hover as n, useCompositeTypeahead as o, useCompositeHover as r, CompositeHover as t };
