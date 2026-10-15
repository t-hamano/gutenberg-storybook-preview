import { n as __esmMin, r as __exportAll } from "./rolldown-runtime-CEgmsyvS.js";
import { fr as init_safe_html, mr as init_remove, ur as init_strip_html } from "./store-CSWvid7H.js";
import { It as init_get_rectangle_from_range, Mt as init_replace_tag, Nt as init_unwrap, Ot as init_remove_invalid_html, Pt as init_replace, jt as init_wrap, kt as init_phrasing_content } from "./utils-dsqiVm_K.js";
import { Ar as init_compute_caret_rect, Cr as init_is_form_element, Dr as init_document_has_uncollapsed_selection, Er as init_document_has_selection, Or as init_is_text_field, Sr as init_is_rtl, _r as init_place_caret_at_vertical_edge, br as init_is_horizontal_edge, vr as init_place_caret_at_horizontal_edge, wr as init_is_entirely_selected, xr as init_is_selection_forward, yr as init_is_vertical_edge } from "./utils-DWipWnH0.js";
import { n as init_get_scroll_container } from "./get-scroll-container-Di4676g3.js";
//#region ../packages/dom/build-module/focusable.mjs
var focusable_exports = /* @__PURE__ */ __exportAll({ find: () => find$1 });
function buildSelector(sequential) {
	return [
		sequential ? "[tabindex]:not([tabindex^=\"-\"])" : "[tabindex]",
		"a[href]",
		"button:not([disabled])",
		"input:not([type=\"hidden\"]):not([disabled])",
		"select:not([disabled])",
		"textarea:not([disabled])",
		"iframe:not([tabindex^=\"-\"])",
		"object",
		"embed",
		"summary",
		"area[href]",
		"[contenteditable]:not([contenteditable=false])"
	].join(",");
}
function isVisible(element) {
	if (typeof element.checkVisibility === "function") {
		if (!element.checkVisibility({ visibilityProperty: true })) return false;
	} else {
		const visibility = element.ownerDocument.defaultView?.getComputedStyle(element).visibility;
		if (visibility === "hidden" || visibility === "collapse") return false;
	}
	return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
}
function isValidFocusableArea(element) {
	const map = element.closest("map[name]");
	if (!map) return false;
	const img = element.ownerDocument.querySelector("img[usemap=\"#" + map.name + "\"]");
	return !!img && !img.closest("[inert]") && isVisible(img);
}
function find$1(context, { sequential = false } = {}) {
	const elements = context.querySelectorAll(buildSelector(sequential));
	return Array.from(elements).filter((element) => {
		const { nodeName } = element;
		if ("AREA" === nodeName) return isValidFocusableArea(element);
		if (element.closest("[inert]")) return false;
		return isVisible(element);
	});
}
//#endregion
//#region ../packages/dom/build-module/tabbable.mjs
var tabbable_exports = /* @__PURE__ */ __exportAll({
	find: () => find,
	findNext: () => findNext,
	findPrevious: () => findPrevious,
	isTabbableIndex: () => isTabbableIndex
});
function getTabIndex(element) {
	const tabIndex = element.getAttribute("tabindex");
	return tabIndex === null ? 0 : parseInt(tabIndex, 10);
}
function isTabbableIndex(element) {
	return getTabIndex(element) !== -1;
}
function createStatefulCollapseRadioGroup() {
	const CHOSEN_RADIO_BY_NAME = {};
	return function collapseRadioGroup(result, element) {
		const { nodeName, type, checked, name } = element;
		if (nodeName !== "INPUT" || type !== "radio" || !name) return result.concat(element);
		const hasChosen = CHOSEN_RADIO_BY_NAME.hasOwnProperty(name);
		if (!(checked || !hasChosen)) return result;
		if (hasChosen) {
			const hadChosenElement = CHOSEN_RADIO_BY_NAME[name];
			result = result.filter((e) => e !== hadChosenElement);
		}
		CHOSEN_RADIO_BY_NAME[name] = element;
		return result.concat(element);
	};
}
function mapElementToObjectTabbable(element, index) {
	return {
		element,
		index
	};
}
function mapObjectTabbableToElement(object) {
	return object.element;
}
function compareObjectTabbables(a, b) {
	const aTabIndex = getTabIndex(a.element);
	const bTabIndex = getTabIndex(b.element);
	if (aTabIndex === bTabIndex) return a.index - b.index;
	return aTabIndex - bTabIndex;
}
function filterTabbable(focusables) {
	return focusables.filter(isTabbableIndex).map(mapElementToObjectTabbable).sort(compareObjectTabbables).map(mapObjectTabbableToElement).reduce(createStatefulCollapseRadioGroup(), []);
}
function find(context) {
	return filterTabbable(find$1(context));
}
function findPrevious(element) {
	return filterTabbable(find$1(element.ownerDocument.body)).reverse().find((focusable) => element.compareDocumentPosition(focusable) & element.DOCUMENT_POSITION_PRECEDING);
}
function findNext(element) {
	return filterTabbable(find$1(element.ownerDocument.body)).find((focusable) => element.compareDocumentPosition(focusable) & element.DOCUMENT_POSITION_FOLLOWING);
}
function init_tabbable() {
	return (init_tabbable = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/index.mjs
var focus;
function init_build_module() {
	return (init_build_module = __esmMin((() => {
		init_tabbable();
		init_compute_caret_rect();
		init_document_has_uncollapsed_selection();
		init_document_has_selection();
		init_get_rectangle_from_range();
		init_get_scroll_container();
		init_is_entirely_selected();
		init_is_form_element();
		init_is_horizontal_edge();
		init_is_text_field();
		init_is_vertical_edge();
		init_place_caret_at_horizontal_edge();
		init_place_caret_at_vertical_edge();
		init_replace();
		init_remove();
		init_unwrap();
		init_replace_tag();
		init_wrap();
		init_strip_html();
		init_remove_invalid_html();
		init_is_rtl();
		init_safe_html();
		init_is_selection_forward();
		init_phrasing_content();
		focus = {
			focusable: focusable_exports,
			tabbable: tabbable_exports
		};
	})))();
}
//#endregion
export { init_build_module as n, focus as t };
