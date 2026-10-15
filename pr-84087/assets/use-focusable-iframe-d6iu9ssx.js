import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
//#region ../packages/compose/build-module/hooks/use-focusable-iframe/index.mjs
function useFocusableIframe() {
	return useRefEffect((element) => {
		const { ownerDocument } = element;
		if (!ownerDocument) return;
		const { defaultView } = ownerDocument;
		if (!defaultView) return;
		function checkFocus() {
			if (ownerDocument && ownerDocument.activeElement === element) element.focus();
		}
		defaultView.addEventListener("blur", checkFocus);
		return () => {
			defaultView.removeEventListener("blur", checkFocus);
		};
	}, []);
}
function init_use_focusable_iframe() {
	return (init_use_focusable_iframe = __esmMin((() => {
		init_use_ref_effect();
	})))();
}
//#endregion
export { useFocusableIframe as n, init_use_focusable_iframe as t };
