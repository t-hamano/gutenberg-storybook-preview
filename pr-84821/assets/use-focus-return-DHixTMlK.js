import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as init_build_module, t as focus } from "./build-module-Bh_sM-WV.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
//#region ../packages/compose/build-module/hooks/use-constrained-tabbing/index.mjs
function useConstrainedTabbing() {
	return useRefEffect((node) => {
		function onKeyDown(event) {
			const { key, shiftKey, target } = event;
			if (key !== "Tab") return;
			const action = shiftKey ? "findPrevious" : "findNext";
			const nextElement = focus.tabbable[action](target) || null;
			if (target.contains(nextElement)) {
				event.preventDefault();
				nextElement?.focus();
				return;
			}
			if (node.contains(nextElement)) return;
			if (!focus.tabbable.find(node).length) {
				event.preventDefault();
				return;
			}
			const domAction = shiftKey ? "append" : "prepend";
			const { ownerDocument } = node;
			const trap = ownerDocument.createElement("div");
			trap.tabIndex = -1;
			node[domAction](trap);
			trap.addEventListener("blur", () => node.removeChild(trap));
			trap.focus();
		}
		node.addEventListener("keydown", onKeyDown);
		return () => {
			node.removeEventListener("keydown", onKeyDown);
		};
	}, []);
}
var use_constrained_tabbing_default;
function init_use_constrained_tabbing() {
	return (init_use_constrained_tabbing = __esmMin((() => {
		init_build_module();
		init_use_ref_effect();
		use_constrained_tabbing_default = useConstrainedTabbing;
	})))();
}
//#endregion
//#region ../packages/compose/build-module/hooks/use-focus-on-mount/index.mjs
function useFocusOnMount(focusOnMount = "firstElement") {
	const focusOnMountRef = (0, import_react.useRef)(focusOnMount);
	const setFocus = (target) => {
		target.focus({ preventScroll: true });
	};
	(0, import_react.useEffect)(() => {
		focusOnMountRef.current = focusOnMount;
	}, [focusOnMount]);
	return useRefEffect((node) => {
		if (focusOnMountRef.current === false) return;
		if (node.contains(node.ownerDocument?.activeElement ?? null)) return;
		if (focusOnMountRef.current !== "firstElement" && focusOnMountRef.current !== "firstInputElement") {
			setFocus(node);
			return;
		}
		const timerId = setTimeout(() => {
			if (focusOnMountRef.current === "firstInputElement") {
				const formInput = node.querySelector("input:not([type=\"hidden\"]):not([disabled]), select:not([disabled]), textarea:not([disabled])");
				if (formInput) {
					setFocus(formInput);
					return;
				}
			}
			const firstTabbable = focus.tabbable.find(node)[0];
			if (firstTabbable) setFocus(firstTabbable);
		}, 0);
		return () => {
			clearTimeout(timerId);
		};
	}, []);
}
function init_use_focus_on_mount() {
	return (init_use_focus_on_mount = __esmMin((() => {
		init_build_module();
		init_react();
		init_use_ref_effect();
	})))();
}
//#endregion
//#region ../packages/compose/build-module/hooks/use-focus-return/index.mjs
function useFocusReturn(onFocusReturn) {
	const ref = (0, import_react.useRef)(null);
	const focusedBeforeMountRef = (0, import_react.useRef)(null);
	const onFocusReturnRef = (0, import_react.useRef)(onFocusReturn);
	(0, import_react.useEffect)(() => {
		onFocusReturnRef.current = onFocusReturn;
	}, [onFocusReturn]);
	return (0, import_react.useCallback)((node) => {
		if (node) {
			ref.current = node;
			if (focusedBeforeMountRef.current) return;
			const activeDocument = node.ownerDocument.activeElement instanceof window.HTMLIFrameElement ? node.ownerDocument.activeElement.contentDocument : node.ownerDocument;
			focusedBeforeMountRef.current = activeDocument?.activeElement ?? null;
		} else if (focusedBeforeMountRef.current) {
			const isFocused = ref.current?.contains(ref.current?.ownerDocument.activeElement ?? null);
			if (ref.current?.isConnected && !isFocused) {
				origin ??= focusedBeforeMountRef.current;
				return;
			}
			if (onFocusReturnRef.current) onFocusReturnRef.current();
			else (!focusedBeforeMountRef.current.isConnected ? origin : focusedBeforeMountRef.current)?.focus();
			origin = null;
		}
	}, []);
}
var origin, use_focus_return_default;
function init_use_focus_return() {
	return (init_use_focus_return = __esmMin((() => {
		init_react();
		origin = null;
		use_focus_return_default = useFocusReturn;
	})))();
}
//#endregion
export { init_use_constrained_tabbing as a, useFocusOnMount as i, use_focus_return_default as n, use_constrained_tabbing_default as o, init_use_focus_on_mount as r, init_use_focus_return as t };
