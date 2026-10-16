import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as use_isomorphic_layout_effect_default, t as init_use_isomorphic_layout_effect } from "./use-isomorphic-layout-effect-XEh9CxbX.js";
//#region ../packages/compose/build-module/hooks/use-dragging/index.mjs
function useDragging({ onDragStart, onDragMove, onDragEnd }) {
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const eventsRef = (0, import_react.useRef)({
		onDragStart,
		onDragMove,
		onDragEnd
	});
	use_isomorphic_layout_effect_default(() => {
		eventsRef.current.onDragStart = onDragStart;
		eventsRef.current.onDragMove = onDragMove;
		eventsRef.current.onDragEnd = onDragEnd;
	}, [
		onDragStart,
		onDragMove,
		onDragEnd
	]);
	const onMouseMove = (0, import_react.useCallback)((event) => {
		eventsRef.current.onDragMove?.(event);
	}, []);
	const endDrag = (0, import_react.useCallback)(function handleEndDrag(event) {
		eventsRef.current.onDragEnd?.(event);
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseup", handleEndDrag);
		setIsDragging(false);
	}, [onMouseMove]);
	const startDrag = (0, import_react.useCallback)((event) => {
		eventsRef.current.onDragStart?.(event);
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", endDrag);
		setIsDragging(true);
	}, [onMouseMove, endDrag]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (isDragging) {
				document.removeEventListener("mousemove", onMouseMove);
				document.removeEventListener("mouseup", endDrag);
			}
		};
	}, [
		isDragging,
		onMouseMove,
		endDrag
	]);
	return {
		startDrag,
		endDrag,
		isDragging
	};
}
function init_use_dragging() {
	return (init_use_dragging = __esmMin((() => {
		init_react();
		init_use_isomorphic_layout_effect();
	})))();
}
//#endregion
export { useDragging as n, init_use_dragging as t };
