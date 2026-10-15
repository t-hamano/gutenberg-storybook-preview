import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { c as getParentNode, m as isLastTraversableNode, p as isHTMLElement, t as getComputedStyle, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/utils/scrollable.mjs
function isScrollableY(element, allowOverflowIntent = false) {
	const { overflowY } = getComputedStyle(element);
	if (overflowY !== "auto" && overflowY !== "scroll") return false;
	return allowOverflowIntent ? element.clientHeight > 0 : element.scrollHeight > element.clientHeight;
}
function isScrollableX(element, allowOverflowIntent = false) {
	const { overflowX } = getComputedStyle(element);
	if (overflowX !== "auto" && overflowX !== "scroll") return false;
	return allowOverflowIntent ? element.clientWidth > 0 : element.scrollWidth > element.clientWidth;
}
function isScrollable(element, axis, allowOverflowIntent = false) {
	return axis === "vertical" ? isScrollableY(element, allowOverflowIntent) : isScrollableX(element, allowOverflowIntent);
}
function hasScrollableAncestor(target, root, axes) {
	let node = target;
	while (isHTMLElement(node) && node !== root && !isLastTraversableNode(node)) {
		for (const axis of axes) if (isScrollable(node, axis)) return true;
		node = getParentNode(node);
	}
	return false;
}
function findScrollableTouchTarget(target, root, axis = "vertical", allowOverflowIntent = false) {
	let node = isHTMLElement(target) ? target : null;
	while (isHTMLElement(node) && node !== root && !isLastTraversableNode(node)) {
		if (isScrollable(node, axis, allowOverflowIntent)) return node;
		node = getParentNode(node);
	}
	return isScrollable(root, axis, allowOverflowIntent) ? root : null;
}
function init_scrollable() {
	return (init_scrollable = __esmMin((() => {
		init_floating_ui_utils_dom();
	})))();
}
//#endregion
export { isScrollableY as i, hasScrollableAncestor as n, init_scrollable as r, findScrollableTouchTarget as t };
