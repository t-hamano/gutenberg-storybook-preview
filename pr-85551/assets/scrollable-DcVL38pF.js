import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { c as getParentNode, f as isElement, m as isLastTraversableNode, p as isHTMLElement, t as getComputedStyle, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/utils/scrollable.mjs
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
function findScrollableAncestor(target, root, axis, allowOverflowIntent = false) {
	let node = target;
	while (isElement(node) && node !== root && !isLastTraversableNode(node)) {
		if (isHTMLElement(node) && isScrollable(node, axis, allowOverflowIntent)) return node;
		node = getParentNode(node);
	}
	return null;
}
function findScrollableTouchTarget(target, root, axis = "vertical", allowOverflowIntent = false) {
	return findScrollableAncestor(target, root, axis, allowOverflowIntent) ?? (isScrollable(root, axis, allowOverflowIntent) ? root : null);
}
function init_scrollable() {
	return (init_scrollable = __esmMin((() => {
		init_floating_ui_utils_dom();
	})))();
}
//#endregion
export { isScrollableY as i, findScrollableTouchTarget as n, init_scrollable as r, findScrollableAncestor as t };
