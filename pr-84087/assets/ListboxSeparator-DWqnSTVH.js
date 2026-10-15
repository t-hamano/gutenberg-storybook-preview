import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { b as init_useRefWithInit, n as useRenderElement, t as init_useRenderElement, x as useRefWithInit } from "./useRenderElement-QwAlaybP.js";
import { n as useIsoLayoutEffect, t as init_useIsoLayoutEffect } from "./useIsoLayoutEffect-CkrGpWFx.js";
import { i as useId, r as init_useId } from "./useBaseUiId-DDVp3i2t.js";
import { f as isElement, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
import { B as useFloatingParentNodeId, D as FloatingRootStore, O as init_FloatingRootStore, R as init_FloatingTree, l as PopupTriggerMap, u as init_popupTriggerMap } from "./DirectionProvider-CsD6Wmlj.js";
import { t as areArraysEqual } from "./areArraysEqual-DjStTlGS.js";
import { n as serializeValue } from "./serializeValue-CbevVszB.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
function useFloatingRootContext(options) {
	const { open = false, onOpenChange, elements = {} } = options;
	const floatingId = useId();
	const nested = useFloatingParentNodeId() != null;
	{
		const optionDomReference = elements.reference;
		if (optionDomReference && !isElement(optionDomReference)) console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
	}
	const store = useRefWithInit(() => new FloatingRootStore({
		open,
		transitionStatus: void 0,
		onOpenChange,
		referenceElement: elements.reference ?? null,
		floatingElement: elements.floating ?? null,
		triggerElements: new PopupTriggerMap(),
		floatingId,
		syncOnly: false,
		nested
	})).current;
	useIsoLayoutEffect(() => {
		const valuesToSync = {
			open,
			floatingId
		};
		if (elements.reference !== void 0) {
			valuesToSync.referenceElement = elements.reference;
			valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
		}
		if (elements.floating !== void 0) valuesToSync.floatingElement = elements.floating;
		store.update(valuesToSync);
	}, [
		open,
		floatingId,
		elements.reference,
		elements.floating,
		store
	]);
	store.context.onOpenChange = onOpenChange;
	store.context.nested = nested;
	return store;
}
function init_useFloatingRootContext() {
	return (init_useFloatingRootContext = __esmMin((() => {
		init_floating_ui_utils_dom();
		init_useId();
		init_useIsoLayoutEffect();
		init_useRefWithInit();
		init_popupTriggerMap();
		init_FloatingTree();
		init_FloatingRootStore();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/useOnFirstRender.mjs
function useOnFirstRender(fn) {
	const ref = import_react$2.useRef(true);
	if (ref.current) {
		ref.current = false;
		fn();
	}
}
var import_react$2;
function init_useOnFirstRender() {
	return (init_useOnFirstRender = __esmMin((() => {
		import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/itemEquality.mjs
function compareItemEquality(itemValue, selectedValue, comparer) {
	if (itemValue == null || selectedValue == null) return Object.is(itemValue, selectedValue);
	return comparer(itemValue, selectedValue);
}
function isSelectedValueDirty(currentValue, initialValue, comparer) {
	if (Array.isArray(currentValue) && Array.isArray(initialValue)) return !areArraysEqual(currentValue, initialValue, (itemValue, initialItemValue) => compareItemEquality(itemValue, initialItemValue, comparer));
	return currentValue !== initialValue;
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
	if (!selectedValues) return false;
	return selectedValues.some((selectedValue) => {
		if (selectedValue === void 0) return false;
		return compareItemEquality(itemValue, selectedValue, comparer);
	});
}
function findItemIndex(itemValues, selectedValue, comparer) {
	if (!itemValues) return -1;
	return itemValues.findIndex((itemValue) => {
		if (itemValue === void 0) return false;
		return compareItemEquality(itemValue, selectedValue, comparer);
	});
}
function createSelectionMatcher(selectedValues, comparer) {
	if (comparer !== defaultItemEquality) return (itemValue) => selectedValueIncludes(selectedValues, itemValue, comparer);
	const index = new Set(selectedValues);
	index.delete(void 0);
	return (itemValue) => index.has(itemValue) && (itemValue !== 0 || selectedValues.some((v) => Object.is(itemValue, v)));
}
function findSelectionIndex(itemValues, selectedValue, comparer, multiple) {
	const index = multiple && Array.isArray(selectedValue) ? itemValues.findIndex(createSelectionMatcher(selectedValue, comparer)) : findItemIndex(itemValues, selectedValue, comparer);
	return index === -1 ? null : index;
}
/** Resolves the first selected index as items register or change. */
function resolveSelectedIndex(index, itemValue, registry, selectedValues, comparer, currentIndex) {
	if (selectedValueIncludes(selectedValues, itemValue, comparer)) return currentIndex != null && index > currentIndex && selectedValueIncludes(selectedValues, registry[currentIndex], comparer) ? currentIndex : index;
	return index === currentIndex ? findSelectionIndex(registry, selectedValues, comparer, true) : currentIndex;
}
function removeItem(selectedValues, itemValue, comparer) {
	return selectedValues.filter((selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer));
}
var defaultItemEquality;
function init_itemEquality() {
	return (init_itemEquality = __esmMin((() => {
		defaultItemEquality = (itemValue, selectedValue) => Object.is(itemValue, selectedValue);
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/resolveValueLabel.mjs
function isGroup(item) {
	return typeof item === "object" && item != null && Array.isArray(item.items);
}
function isGroupedItems(items) {
	return isGroup(items?.[0]);
}
function flattenLeafItems(items) {
	return isGroupedItems(items) ? items.flatMap((group) => group.items) : items;
}
/**
* Checks if the items array contains an item with a null value that has a non-null label.
*/
function hasNullItemLabel(items) {
	if (!Array.isArray(items)) return items != null && "null" in items;
	const arrayItems = items;
	if (isGroupedItems(arrayItems)) {
		for (const group of arrayItems) for (const item of group.items) if (item && item.value == null && item.label != null) return true;
		return false;
	}
	for (const item of arrayItems) if (item && item.value == null && item.label != null) return true;
	return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
	if (itemToStringLabel && item != null) return itemToStringLabel(item) ?? "";
	if (item && typeof item === "object") {
		if ("label" in item && item.label != null) return String(item.label);
		if ("value" in item) return String(item.value);
	}
	return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
	if (itemToStringValue && item != null) return itemToStringValue(item) ?? "";
	if (item && typeof item === "object" && "value" in item && "label" in item) return serializeValue(item.value);
	return serializeValue(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
	function fallback() {
		return stringifyAsLabel(value, itemToStringLabel);
	}
	if (itemToStringLabel && value != null) return itemToStringLabel(value);
	if (value && typeof value === "object" && "label" in value && value.label != null) return value.label;
	if (items && !Array.isArray(items)) return (Object.hasOwn(items, value) ? items[value] : void 0) ?? fallback();
	if (Array.isArray(items)) {
		const flatItems = flattenLeafItems(items);
		if (value == null || typeof value !== "object") {
			const match = flatItems.find((item) => item.value === value);
			if (match && match.label != null) return match.label;
			return fallback();
		}
		if ("value" in value) {
			const match = flatItems.find((item) => item && item.value === value.value);
			if (match && match.label != null) return match.label;
		}
	}
	return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
	return values.reduce((acc, value, index) => {
		if (index > 0) acc.push(", ");
		acc.push(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react$1.Fragment, { children: resolveSelectedLabel(value, items, itemToStringLabel) }, index));
		return acc;
	}, []);
}
var import_react$1, import_jsx_runtime;
function init_resolveValueLabel() {
	return (init_resolveValueLabel = __esmMin((() => {
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/listbox-separator/ListboxSeparator.mjs
var import_react, ListboxSeparator;
function init_ListboxSeparator() {
	return (init_ListboxSeparator = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_useRenderElement();
		ListboxSeparator = /*#__PURE__*/ import_react.forwardRef(function ListboxSeparator(componentProps, forwardedRef) {
			const { className, render, orientation = "horizontal", style, ...elementProps } = componentProps;
			return useRenderElement("div", componentProps, {
				state: { orientation },
				ref: forwardedRef,
				props: [{ role: "presentation" }, elementProps]
			});
		});
		ListboxSeparator.displayName = "ListboxSeparator";
	})))();
}
//#endregion
export { useFloatingRootContext as C, init_useFloatingRootContext as S, removeItem as _, init_resolveValueLabel as a, init_useOnFirstRender as b, resolveSelectedLabel as c, compareItemEquality as d, defaultItemEquality as f, isSelectedValueDirty as g, init_itemEquality as h, hasNullItemLabel as i, stringifyAsLabel as l, findSelectionIndex as m, init_ListboxSeparator as n, isGroupedItems as o, findItemIndex as p, flattenLeafItems as r, resolveMultipleLabels as s, ListboxSeparator as t, stringifyAsValue as u, resolveSelectedIndex as v, useOnFirstRender as x, selectedValueIncludes as y };
