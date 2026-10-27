import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as useEvent, t as init_use_event } from "./use-event-BTRhHipl.js";
import { n as useResizeObserver, t as init_use_resize_observer } from "./use-resize-observer-C4Y8OHRi.js";
import { n as base_control_default, r as init_base_control } from "./base-control-COIsJz79.js";
//#region ../packages/components/build-module/base-control/hooks.mjs
function useBaseControlProps(props) {
	const { help, id: preferredId, ...restProps } = props;
	const uniqueId = use_instance_id_default(base_control_default, "wp-components-base-control", preferredId);
	return {
		baseControlProps: {
			id: uniqueId,
			help,
			...restProps
		},
		controlProps: {
			id: uniqueId,
			...!!help ? { "aria-describedby": `${uniqueId}__help` } : {}
		}
	};
}
function init_hooks() {
	return (init_hooks = __esmMin((() => {
		init_use_instance_id();
		init_base_control();
	})))();
}
//#endregion
//#region ../packages/components/build-module/utils/element-rect.mjs
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
//#region ../packages/components/build-module/utils/hooks/use-on-value-update.mjs
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
//#region ../packages/components/build-module/utils/hooks/use-animated-offset-rect.mjs
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
export { init_hooks as a, useTrackElementOffsetRect as i, useAnimatedOffsetRect as n, useBaseControlProps as o, init_element_rect as r, init_use_animated_offset_rect as t };
