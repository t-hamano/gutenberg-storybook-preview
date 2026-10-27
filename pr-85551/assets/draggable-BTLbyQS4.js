import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { n as throttle, t as init_throttle } from "./throttle-FioEcidh.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
//#region ../packages/components/build-module/draggable/index.mjs
function getRuntime() {
	const globalScope = globalThis;
	if (globalScope.__wpStyleRuntime) return globalScope.__wpStyleRuntime;
	globalScope.__wpStyleRuntime = {
		documents: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map(),
		injectedStyles: /* @__PURE__ */ new WeakMap()
	};
	if (typeof document !== "undefined") registerDocument(document);
	return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
	if (!targetDocument.head) return false;
	for (const style of targetDocument.head.querySelectorAll(`style[${STYLE_HASH_ATTRIBUTE}]`)) if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) return true;
	return false;
}
function injectStyle(targetDocument, hash, css) {
	if (!targetDocument.head) return;
	const runtime = getRuntime();
	let injectedStyles = runtime.injectedStyles.get(targetDocument);
	if (!injectedStyles) {
		injectedStyles = /* @__PURE__ */ new Set();
		runtime.injectedStyles.set(targetDocument, injectedStyles);
	}
	if (injectedStyles.has(hash)) return;
	if (documentContainsStyleHash(targetDocument, hash)) {
		injectedStyles.add(hash);
		return;
	}
	const style = targetDocument.createElement("style");
	style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
	style.appendChild(targetDocument.createTextNode(css));
	targetDocument.head.appendChild(style);
	injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
	const runtime = getRuntime();
	runtime.documents.set(targetDocument, (runtime.documents.get(targetDocument) ?? 0) + 1);
	for (const [hash, css] of runtime.styles) injectStyle(targetDocument, hash, css);
	return () => {
		const count = runtime.documents.get(targetDocument);
		if (count === void 0) return;
		if (count <= 1) {
			runtime.documents.delete(targetDocument);
			return;
		}
		runtime.documents.set(targetDocument, count - 1);
	};
}
function registerStyle(hash, css) {
	const runtime = getRuntime();
	runtime.styles.set(hash, css);
	for (const targetDocument of runtime.documents.keys()) injectStyle(targetDocument, hash, css);
}
function Draggable({ children, onDragStart, onDragOver, onDragEnd, appendToOwnerDocument = false, cloneClassname, elementId, transferData, __experimentalTransferDataType: transferDataType = "text", __experimentalDragComponent: dragComponent }) {
	const cleanupRef = (0, import_react.useRef)(() => {});
	const [dragComponentContainer, setDragComponentContainer] = (0, import_react.useState)(null);
	function end(event) {
		event.preventDefault();
		cleanupRef.current();
		onDragEnd?.(event);
	}
	function start(event) {
		const { ownerDocument } = event.target;
		const slot = getWpCompatOverlaySlot();
		const compatSlot = slot?.ownerDocument === ownerDocument ? slot : null;
		event.dataTransfer.setData(transferDataType, JSON.stringify(transferData));
		const cloneWrapper = ownerDocument.createElement("div");
		cloneWrapper.style.top = "0";
		cloneWrapper.style.left = "0";
		const dragImage = ownerDocument.createElement("div");
		if ("function" === typeof event.dataTransfer.setDragImage) {
			dragImage.classList.add(...dragImageClasses);
			ownerDocument.body.appendChild(dragImage);
			event.dataTransfer.setDragImage(dragImage, 0, 0);
		}
		cloneWrapper.classList.add(...cloneWrapperClasses);
		const inSlotClass = style_module_default["is-in-compat-slot"];
		if (compatSlot && inSlotClass) cloneWrapper.classList.add(inSlotClass);
		if (cloneClassname) cloneWrapper.classList.add(cloneClassname);
		let x = 0;
		let y = 0;
		if (dragComponent) {
			x = event.clientX;
			y = event.clientY;
			cloneWrapper.style.transform = `translate( ${x}px, ${y}px )`;
			(compatSlot ?? ownerDocument.body).appendChild(cloneWrapper);
			setDragComponentContainer(cloneWrapper);
		} else {
			const element = ownerDocument.getElementById(elementId);
			const elementRect = element.getBoundingClientRect();
			const elementWrapper = element.parentNode;
			const elementTopOffset = elementRect.top;
			const elementLeftOffset = elementRect.left;
			cloneWrapper.style.width = `${elementRect.width + clonePadding * 2}px`;
			const clone = element.cloneNode(true);
			clone.id = `clone-${elementId}`;
			x = elementLeftOffset - clonePadding;
			y = elementTopOffset - clonePadding;
			cloneWrapper.style.transform = `translate( ${x}px, ${y}px )`;
			Array.from(clone.querySelectorAll("iframe")).forEach((child) => child.parentNode?.removeChild(child));
			cloneWrapper.appendChild(clone);
			if (compatSlot) compatSlot.appendChild(cloneWrapper);
			else if (appendToOwnerDocument) ownerDocument.body.appendChild(cloneWrapper);
			else elementWrapper?.appendChild(cloneWrapper);
		}
		let cursorLeft = event.clientX;
		let cursorTop = event.clientY;
		function over(e) {
			if (cursorLeft === e.clientX && cursorTop === e.clientY) return;
			const nextX = x + e.clientX - cursorLeft;
			const nextY = y + e.clientY - cursorTop;
			cloneWrapper.style.transform = `translate( ${nextX}px, ${nextY}px )`;
			cursorLeft = e.clientX;
			cursorTop = e.clientY;
			x = nextX;
			y = nextY;
			onDragOver?.(e);
		}
		const throttledDragOver = throttle(over, 16);
		ownerDocument.addEventListener("dragover", throttledDragOver);
		ownerDocument.body.classList.add(bodyClass);
		onDragStart?.(event);
		cleanupRef.current = () => {
			cloneWrapper.remove();
			dragImage.remove();
			setDragComponentContainer(null);
			ownerDocument.body.classList.remove(bodyClass);
			ownerDocument.removeEventListener("dragover", throttledDragOver);
			cleanupRef.current = () => {};
		};
	}
	(0, import_react.useEffect)(() => () => cleanupRef.current(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children({
		onDraggableStart: start,
		onDraggableEnd: end
	}), dragComponentContainer && createPortal(dragComponent, dragComponentContainer)] });
}
var import_jsx_runtime, STYLE_HASH_ATTRIBUTE, style_module_default, dragImageClasses, cloneWrapperClasses, bodyClass, clonePadding, draggable_default;
function init_draggable() {
	return (init_draggable = __esmMin((() => {
		init_throttle();
		init_react_platform(), init_react();
		init_wp_compat_overlay_slot();
		import_jsx_runtime = require_jsx_runtime();
		STYLE_HASH_ATTRIBUTE = "data-wp-hash";
		if (typeof process === "undefined" || false) registerStyle("e7e88c1781", "._3476c2e530687f96__invisible-drag-image{height:50px;left:-1000px;position:fixed;width:50px}._6f00e51ab7574306__clone{background:transparent;padding:0;pointer-events:none;position:fixed}._6f00e51ab7574306__clone:not(._664ecd37377558df__is-in-compat-slot){z-index:1000000000}body.is-dragging-components-draggable{cursor:move;cursor:grabbing!important}");
		style_module_default = {
			"invisible-drag-image": "_3476c2e530687f96__invisible-drag-image",
			"clone": "_6f00e51ab7574306__clone",
			"is-in-compat-slot": "_664ecd37377558df__is-in-compat-slot"
		};
		dragImageClasses = [style_module_default["invisible-drag-image"], "components-draggable__invisible-drag-image"].filter(Boolean);
		cloneWrapperClasses = [style_module_default.clone, "components-draggable__clone"].filter(Boolean);
		bodyClass = "is-dragging-components-draggable";
		clonePadding = 0;
		draggable_default = Draggable;
	})))();
}
//#endregion
export { init_draggable as n, draggable_default as t };
