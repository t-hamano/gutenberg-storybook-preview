import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { _ as isShadowRoot, u as init_floating_ui_utils_dom } from "./floating-ui.utils.dom-s51Otfgf.js";
//#region ../node_modules/.store/@base-ui/utils@0.4.0-Z81C5N42agUorsFwt3T4Yw/node_modules/@base-ui/utils/shadowDom.mjs
function activeElement(doc) {
	let element = doc.activeElement;
	while (element?.shadowRoot?.activeElement != null) element = element.shadowRoot.activeElement;
	return element;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	const rootNode = child.getRootNode?.();
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getTarget(event) {
	if ("composedPath" in event) return event.composedPath()[0] ?? event.target;
	return event.target;
}
function init_shadowDom() {
	return (init_shadowDom = __esmMin((() => {
		init_floating_ui_utils_dom();
	})))();
}
//#endregion
export { init_shadowDom as i, contains as n, getTarget as r, activeElement as t };
