import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { a as init_use_constrained_tabbing, i as useFocusOnMount, n as use_focus_return_default, o as use_constrained_tabbing_default, r as init_use_focus_on_mount, t as init_use_focus_return } from "./use-focus-return-CaCgQsao.js";
import { n as useFocusOutside, t as init_use_focus_outside } from "./use-focus-outside-CUKAKz_B.js";
import { n as useMergeRefs, t as init_use_merge_refs } from "./use-merge-refs-BAtuPB1L.js";
import { i as useMediaQuery, r as init_use_media_query } from "./use-reduced-motion-D9Mdybdt.js";
//#region ../packages/compose/build-module/hooks/use-dialog/index.mjs
function useDialog(options) {
	const currentOptions = (0, import_react.useRef)(void 0);
	const { constrainTabbing = options.focusOnMount !== false } = options;
	(0, import_react.useEffect)(() => {
		currentOptions.current = options;
	}, Object.values(options));
	const constrainedTabbingRef = use_constrained_tabbing_default();
	const focusOnMountRef = useFocusOnMount(options.focusOnMount);
	const focusReturnRef = use_focus_return_default();
	const focusOutsideProps = useFocusOutside((event) => {
		if (currentOptions.current?.__unstableOnClose) currentOptions.current.__unstableOnClose("focus-outside", event);
		else if (currentOptions.current?.onClose) currentOptions.current.onClose();
	});
	const onKeyDown = (0, import_react.useCallback)((event) => {
		currentOptions.current?.onKeyDown?.(event);
		if (event.key === "Escape" && !event.defaultPrevented && currentOptions.current?.onClose) {
			event.preventDefault();
			event.stopPropagation();
			currentOptions.current.onClose();
		}
	}, []);
	return [useMergeRefs([
		constrainTabbing ? constrainedTabbingRef : null,
		options.focusOnMount !== false ? focusReturnRef : null,
		options.focusOnMount !== false ? focusOnMountRef : null
	]), {
		...focusOutsideProps,
		onKeyDown,
		tabIndex: -1
	}];
}
var use_dialog_default;
function init_use_dialog() {
	return (init_use_dialog = __esmMin((() => {
		init_react();
		init_use_constrained_tabbing();
		init_use_focus_on_mount();
		init_use_focus_return();
		init_use_focus_outside();
		init_use_merge_refs();
		use_dialog_default = useDialog;
	})))();
}
//#endregion
//#region ../packages/compose/build-module/hooks/use-viewport-match/index.mjs
var BREAKPOINTS, CONDITIONS, OPERATOR_EVALUATORS, ViewportMatchWidthContext, useViewportMatch, use_viewport_match_default;
function init_use_viewport_match() {
	return (init_use_viewport_match = __esmMin((() => {
		init_react();
		init_use_media_query();
		BREAKPOINTS = {
			xhuge: 1920,
			huge: 1440,
			wide: 1280,
			xlarge: 1080,
			large: 960,
			medium: 782,
			small: 600,
			mobile: 480
		};
		CONDITIONS = {
			">=": "min-width",
			"<": "max-width"
		};
		OPERATOR_EVALUATORS = {
			">=": (breakpointValue, width) => width >= breakpointValue,
			"<": (breakpointValue, width) => width < breakpointValue
		};
		ViewportMatchWidthContext = (0, import_react.createContext)(null);
		ViewportMatchWidthContext.displayName = "ViewportMatchWidthContext";
		useViewportMatch = (breakpoint, operator = ">=", view = typeof window !== "undefined" ? window : void 0) => {
			const simulatedWidth = (0, import_react.useContext)(ViewportMatchWidthContext);
			const mediaQuery = !simulatedWidth && `screen and (${CONDITIONS[operator]}: ${BREAKPOINTS[breakpoint]}px)`;
			const mediaQueryResult = useMediaQuery(mediaQuery || void 0, view);
			if (simulatedWidth) return OPERATOR_EVALUATORS[operator](BREAKPOINTS[breakpoint], simulatedWidth);
			return mediaQueryResult;
		};
		useViewportMatch.__experimentalWidthProvider = ViewportMatchWidthContext.Provider;
		use_viewport_match_default = useViewportMatch;
	})))();
}
//#endregion
export { use_dialog_default as i, use_viewport_match_default as n, init_use_dialog as r, init_use_viewport_match as t };
