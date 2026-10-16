import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as useScheduleValidation, t as init_use_schedule_validation } from "./use-schedule-validation-DkkVJP6s.js";
//#region ../packages/ui/src/utils/create-overlay-title-validation.tsx
/**
* Creates development-only title validation helpers for overlay primitives.
*/
function createOverlayTitleValidation(componentName) {
	const componentNameLowerCase = componentName.toLowerCase();
	const OverlayValidationContext = (0, import_react.createContext)(null);
	function useValidationContextDev() {
		return (0, import_react.useContext)(OverlayValidationContext);
	}
	const useValidationContext = useValidationContextDev;
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
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayValidationContext.Provider, {
			value: contextValue,
			children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 4
		}, this);
	}
	return {
		ValidationProvider: ValidationProviderDev,
		useValidationContext
	};
}
var import_jsx_dev_runtime, _jsxFileName;
function init_create_overlay_title_validation() {
	return (init_create_overlay_title_validation = __esmMin((() => {
		init_react();
		init_use_schedule_validation();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/create-overlay-title-validation.tsx";
		try {
			createOverlayTitleValidation.__docgenInfo = {
				"description": "Creates development-only title validation helpers for overlay primitives.",
				"displayName": "createOverlayTitleValidation",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/ui/src/utils/create-overlay-title-validation.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
export { init_create_overlay_title_validation as n, createOverlayTitleValidation as t };
