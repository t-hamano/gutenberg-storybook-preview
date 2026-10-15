import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as useResizeObserver, t as init_use_resize_observer } from "./use-resize-observer-C4Y8OHRi.js";
//#region ../packages/components/src/utils/element-rect.ts
/**
* Returns the position and dimensions of an element, relative to its offset
* parent, with subpixel precision. Values reflect the real measures before any
* potential scaling distortions along the X and Y axes.
*
* Useful in contexts where plain `getBoundingClientRect` calls or `ResizeObserver`
* entries are not suitable, such as when the element is transformed, and when
* `element.offset<Top|Left|Width|Height>` methods are not precise enough.
*
* **Note:** in some contexts, like when the scale is 0, this method will fail
* because it's impossible to calculate a scaling ratio. When that happens, it
* will return `undefined`.
*/
function getElementOffsetRect(element) {
	const rect = element.getBoundingClientRect();
	if (rect.width === 0 || rect.height === 0) return;
	const offsetParent = element.offsetParent;
	const offsetParentRect = offsetParent?.getBoundingClientRect() ?? NULL_ELEMENT_OFFSET_RECT;
	const offsetParentScrollX = offsetParent?.scrollLeft ?? 0;
	const offsetParentScrollY = offsetParent?.scrollTop ?? 0;
	const computedWidth = parseFloat(getComputedStyle(element).width);
	const computedHeight = parseFloat(getComputedStyle(element).height);
	const scaleX = computedWidth / rect.width;
	const scaleY = computedHeight / rect.height;
	return {
		element,
		top: (rect.top - offsetParentRect?.top) * scaleY + offsetParentScrollY,
		right: (offsetParentRect?.right - rect.right) * scaleX - offsetParentScrollX,
		bottom: (offsetParentRect?.bottom - rect.bottom) * scaleY - offsetParentScrollY,
		left: (rect.left - offsetParentRect?.left) * scaleX + offsetParentScrollX,
		width: computedWidth,
		height: computedHeight
	};
}
/**
* Tracks the position and dimensions of an element, relative to its offset
* parent. The element can be changed dynamically.
*
* When no element is provided (`null` or `undefined`), the hook will return
* a "null" rect, in which all values are `0` and `element` is `undefined`.
*
* **Note:** sometimes, the measurement will fail (see `getElementOffsetRect`'s
* documentation for more details). When that happens, this hook will attempt
* to measure again after a frame, and if that fails, it will poll every 100
* milliseconds until it succeeds.
*/
function useTrackElementOffsetRect(targetElement, deps = []) {
	const [indicatorPosition, setIndicatorPosition] = (0, import_react.useState)(NULL_ELEMENT_OFFSET_RECT);
	const intervalRef = (0, import_react.useRef)(void 0);
	const measure = useEvent(() => {
		if (targetElement && targetElement.isConnected) {
			const elementOffsetRect = getElementOffsetRect(targetElement);
			if (elementOffsetRect) {
				setIndicatorPosition(elementOffsetRect);
				clearInterval(intervalRef.current);
				return true;
			}
		} else clearInterval(intervalRef.current);
		return false;
	});
	const setElement = useResizeObserver(() => {
		if (!measure()) requestAnimationFrame(() => {
			if (!measure()) intervalRef.current = setInterval(measure, POLL_RATE);
		});
	});
	(0, import_react.useLayoutEffect)(() => {
		setElement(targetElement);
		if (!targetElement) setIndicatorPosition(NULL_ELEMENT_OFFSET_RECT);
	}, [setElement, targetElement]);
	(0, import_react.useLayoutEffect)(() => {
		measure();
	}, deps);
	return indicatorPosition;
}
var NULL_ELEMENT_OFFSET_RECT, POLL_RATE;
function init_element_rect() {
	return (init_element_rect = __esmMin((() => {
		init_react();
		init_use_event(), init_use_resize_observer();
		NULL_ELEMENT_OFFSET_RECT = {
			element: void 0,
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: 0,
			height: 0
		};
		POLL_RATE = 100;
	})))();
}
//#endregion
//#region ../packages/components/src/utils/hooks/use-on-value-update.ts
/**
* Calls the `onUpdate` callback when the `value` changes.
*/
function useOnValueUpdate(value, onUpdate) {
	const previousValueRef = (0, import_react.useRef)(value);
	const updateCallbackEvent = useEvent(onUpdate);
	(0, import_react.useLayoutEffect)(() => {
		if (previousValueRef.current !== value) {
			updateCallbackEvent({ previousValue: previousValueRef.current });
			previousValueRef.current = value;
		}
	}, [updateCallbackEvent, value]);
}
function init_use_on_value_update() {
	return (init_use_on_value_update = __esmMin((() => {
		init_use_event();
		init_react();
	})))();
}
//#endregion
//#region ../packages/components/src/utils/hooks/use-animated-offset-rect.ts
/**
* A utility used to animate something in a container component based on the "offset
* rect" (position relative to the container and size) of a subelement. For example,
* this is useful to render an indicator for the selected option of a component, and
* to animate it when the selected option changes.
*
* Takes in a container element and the up-to-date "offset rect" of the target
* subelement, obtained with `useTrackElementOffsetRect`. Then it does the following:
*
* - Adds CSS variables with rect information to the container, so that the indicator
*   can be rendered and animated with them. These are kept up-to-date, enabling CSS
*   transitions on change.
* - Sets an attribute (`data-subelement-animated` by default) when the tracked
*   element changes, so that the target (e.g. the indicator) can be animated to its
*   new size and position.
* - Removes the attribute when the animation is done.
*
* The need for the attribute is due to the fact that the rect might update in
* situations other than when the tracked element changes, e.g. the tracked element
* might be resized. In such cases, there is no need to animate the indicator, and
* the change in size or position of the indicator needs to be reflected immediately.
*/
function useAnimatedOffsetRect(container, rect, { prefix = "subelement", dataAttribute = `${prefix}-animated`, transitionEndFilter = () => true, roundRect = false } = {}) {
	const setProperties = useEvent(() => {
		Object.keys(rect).forEach((property) => property !== "element" && container?.style.setProperty(`--${prefix}-${property}`, String(roundRect ? Math.floor(rect[property]) : rect[property])));
	});
	(0, import_react.useLayoutEffect)(() => {
		setProperties();
	}, [rect, setProperties]);
	useOnValueUpdate(rect.element, ({ previousValue }) => {
		if (rect.element && previousValue) container?.setAttribute(`data-${dataAttribute}`, "");
	});
	(0, import_react.useLayoutEffect)(() => {
		function onTransitionEnd(event) {
			if (transitionEndFilter(event)) container?.removeAttribute(`data-${dataAttribute}`);
		}
		container?.addEventListener("transitionend", onTransitionEnd);
		return () => container?.removeEventListener("transitionend", onTransitionEnd);
	}, [
		dataAttribute,
		container,
		transitionEndFilter
	]);
}
function init_use_animated_offset_rect() {
	return (init_use_animated_offset_rect = __esmMin((() => {
		init_use_event();
		init_react();
		init_use_on_value_update();
	})))();
}
//#endregion
export { useTrackElementOffsetRect as i, useAnimatedOffsetRect as n, init_element_rect as r, init_use_animated_offset_rect as t };
