import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
//#region ../packages/compose/build-module/hooks/use-resize-observer/use-resize-observer.mjs
function useResizeObserver$1(callback, resizeObserverOptions = {}) {
	const callbackEvent = useEvent(callback);
	const observedElementRef = (0, import_react.useRef)(null);
	const resizeObserverRef = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		if (observedElementRef.current) resizeObserverRef.current?.observe(observedElementRef.current, resizeObserverOptions);
		return () => resizeObserverRef.current?.disconnect();
	}, []);
	return useEvent((element) => {
		if (element === observedElementRef.current) return;
		resizeObserverRef.current ??= new ResizeObserver(callbackEvent);
		const { current: resizeObserver } = resizeObserverRef;
		if (observedElementRef.current) resizeObserver.unobserve(observedElementRef.current);
		observedElementRef.current = element ?? null;
		if (element) resizeObserver.observe(element, resizeObserverOptions);
	});
}
function init_use_resize_observer() {
	return (init_use_resize_observer = __esmMin((() => {
		init_react();
		init_use_event();
	})))();
}
//#endregion
//#region ../packages/compose/build-module/hooks/use-resize-observer/legacy/index.mjs
function ResizeElement({ onResize }) {
	const resizeElementRef = useResizeObserver$1((entries) => {
		onResize(extractSize(entries.at(-1)));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: resizeElementRef,
		style: RESIZE_ELEMENT_STYLES,
		"aria-hidden": "true"
	});
}
function sizeEquals(a, b) {
	return a.width === b.width && a.height === b.height;
}
function useLegacyResizeObserver() {
	const [size, setSize] = (0, import_react.useState)(NULL_SIZE);
	const previousSizeRef = (0, import_react.useRef)(NULL_SIZE);
	const handleResize = (0, import_react.useCallback)((newSize) => {
		if (!sizeEquals(previousSizeRef.current, newSize)) {
			previousSizeRef.current = newSize;
			setSize(newSize);
		}
	}, []);
	return [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResizeElement, { onResize: handleResize }), size];
}
var import_jsx_runtime, extractSize, RESIZE_ELEMENT_STYLES, NULL_SIZE;
function init_legacy() {
	return (init_legacy = __esmMin((() => {
		init_react();
		init_use_resize_observer();
		import_jsx_runtime = require_jsx_runtime();
		extractSize = (entry) => {
			let entrySize;
			if (!entry.contentBoxSize) entrySize = [entry.contentRect.width, entry.contentRect.height];
			else if (entry.contentBoxSize[0]) {
				const contentBoxSize = entry.contentBoxSize[0];
				entrySize = [contentBoxSize.inlineSize, contentBoxSize.blockSize];
			} else {
				const contentBoxSize = entry.contentBoxSize;
				entrySize = [contentBoxSize.inlineSize, contentBoxSize.blockSize];
			}
			const [width, height] = entrySize.map((d) => Math.round(d));
			return {
				width,
				height
			};
		};
		RESIZE_ELEMENT_STYLES = {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			pointerEvents: "none",
			opacity: 0,
			overflow: "hidden",
			zIndex: -1
		};
		NULL_SIZE = {
			width: null,
			height: null
		};
	})))();
}
//#endregion
//#region ../packages/compose/build-module/hooks/use-resize-observer/index.mjs
function useResizeObserver(callback, options = {}) {
	return callback ? useResizeObserver$1(callback, options) : useLegacyResizeObserver();
}
function init_use_resize_observer$1() {
	return (init_use_resize_observer$1 = __esmMin((() => {
		init_use_resize_observer();
		init_legacy();
	})))();
}
//#endregion
export { useResizeObserver as n, init_use_resize_observer$1 as t };
