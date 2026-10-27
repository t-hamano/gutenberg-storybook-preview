import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { n as tabbable, t as init_index_esm } from "./index.esm-DIshz3bn.js";
import { n as useScheduleValidation, t as init_use_schedule_validation } from "./use-schedule-validation-BSQQyKy3.js";
//#region ../packages/ui/build-module/utils/use-deprioritized-initial-focus.mjs
function useDeprioritizedInitialFocus({ initialFocus, deprioritizedAttributes }) {
	const popupRef = (0, import_react.useRef)(null);
	let resolvedInitialFocus = initialFocus;
	if (initialFocus === void 0 || initialFocus === true) resolvedInitialFocus = (interactionType) => {
		if (interactionType === "touch") return popupRef.current ?? true;
		const popup = popupRef.current;
		if (!popup) return true;
		const tabbables = tabbable(popup, getTabbableOptions());
		for (const el of tabbables) if (el instanceof HTMLElement && !deprioritizedAttributes.some((attr) => el.hasAttribute(attr))) return el;
		return true;
	};
	return {
		resolvedInitialFocus,
		popupRef
	};
}
var getTabbableOptions;
function init_use_deprioritized_initial_focus() {
	return (init_use_deprioritized_initial_focus = __esmMin((() => {
		init_react();
		init_index_esm();
		getTabbableOptions = () => ({
			getShadowRoot: true,
			displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
		});
	})))();
}
//#endregion
//#region ../packages/ui/build-module/utils/create-overlay-title-validation.mjs
function createOverlayTitleValidation(componentName) {
	const componentNameLowerCase = componentName.toLowerCase();
	const OverlayValidationContext = VALIDATION_ENABLED ? (0, import_react.createContext)(null) : null;
	function useValidationContextDev() {
		return (0, import_react.useContext)(OverlayValidationContext);
	}
	function useValidationContextProd() {
		return null;
	}
	const useValidationContext = VALIDATION_ENABLED ? useValidationContextDev : useValidationContextProd;
	function ValidationProviderDev({ children }) {
		const titleElementRef = (0, import_react.useRef)(null);
		const scheduleValidation = useScheduleValidation(() => {
			const titleElement = titleElementRef.current;
			if (!titleElement) throw new Error(`${componentName}: Missing <${componentName}.Title>. For accessibility, every ${componentNameLowerCase} requires a title. If needed, the title can be visually hidden but must not be omitted.`);
			if (!titleElement.textContent?.trim()) throw new Error(`${componentName}: <${componentName}.Title> cannot be empty. Provide meaningful text content for the ${componentNameLowerCase} title.`);
		});
		const registerTitle = (0, import_react.useCallback)((element) => {
			titleElementRef.current = element;
			scheduleValidation();
			return () => {
				titleElementRef.current = null;
				scheduleValidation();
			};
		}, [scheduleValidation]);
		const contextValue = (0, import_react.useMemo)(() => ({ registerTitle }), [registerTitle]);
		(0, import_react.useEffect)(() => {
			scheduleValidation();
		}, [scheduleValidation]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverlayValidationContext.Provider, {
			value: contextValue,
			children
		});
	}
	function ValidationProviderProd({ children }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	}
	return {
		ValidationProvider: VALIDATION_ENABLED ? ValidationProviderDev : ValidationProviderProd,
		useValidationContext
	};
}
var import_jsx_runtime, VALIDATION_ENABLED;
function init_create_overlay_title_validation() {
	return (init_create_overlay_title_validation = __esmMin((() => {
		init_react();
		init_use_schedule_validation();
		import_jsx_runtime = require_jsx_runtime();
		VALIDATION_ENABLED = true;
	})))();
}
//#endregion
export { useDeprioritizedInitialFocus as i, init_create_overlay_title_validation as n, init_use_deprioritized_initial_focus as r, createOverlayTitleValidation as t };
