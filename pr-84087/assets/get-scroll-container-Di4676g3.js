import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as assertIsDefined } from "./assert-is-defined-_q5vXJ_h.js";
//#region ../packages/dom/build-module/dom/get-computed-style.mjs
function getComputedStyle(element) {
	assertIsDefined(element.ownerDocument.defaultView, "element.ownerDocument.defaultView");
	return element.ownerDocument.defaultView.getComputedStyle(element);
}
function init_get_computed_style() {
	return (init_get_computed_style = __esmMin((() => {})))();
}
//#endregion
//#region ../packages/dom/build-module/dom/get-scroll-container.mjs
function getScrollContainer(node, direction = "vertical") {
	if (!node) return;
	if (direction === "vertical" || direction === "all") {
		if (node.scrollHeight > node.clientHeight) {
			const { overflowY } = getComputedStyle(node);
			if (/(auto|scroll)/.test(overflowY)) return node;
		}
	}
	if (direction === "horizontal" || direction === "all") {
		if (node.scrollWidth > node.clientWidth) {
			const { overflowX } = getComputedStyle(node);
			if (/(auto|scroll)/.test(overflowX)) return node;
		}
	}
	if (node.ownerDocument === node.parentNode) return node;
	return getScrollContainer(node.parentNode, direction);
}
function init_get_scroll_container() {
	return (init_get_scroll_container = __esmMin((() => {
		init_get_computed_style();
	})))();
}
//#endregion
export { init_get_computed_style as i, init_get_scroll_container as n, getComputedStyle as r, getScrollContainer as t };
