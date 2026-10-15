import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
//#region ../packages/ui/src/utils/use-popup-pointer-highlight.ts
/**
* Native focus-visible can persist when a composite moves focus on hover.
* Track pointer interaction within the popup until keyboard navigation resumes.
*/
function usePopupPointerHighlight() {
	const [pointerHighlight, setPointerHighlight] = (0, import_react.useState)(false);
	return {
		"data-pointer-highlight": pointerHighlight ? "" : void 0,
		onKeyDownCapture: (event) => {
			if (![
				"Shift",
				"Control",
				"Alt",
				"Meta"
			].includes(event.key)) setPointerHighlight(false);
		},
		onPointerMoveCapture: () => setPointerHighlight(true),
		onPointerDownCapture: () => setPointerHighlight(true),
		onBlurCapture: (event) => {
			if (!event.currentTarget.contains(event.relatedTarget)) setPointerHighlight(false);
		}
	};
}
function init_use_popup_pointer_highlight() {
	return (init_use_popup_pointer_highlight = __esmMin((() => {
		init_react();
	})))();
}
//#endregion
export { usePopupPointerHighlight as n, init_use_popup_pointer_highlight as t };
