import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/toolbar/root/ToolbarRootContext.mjs
function useToolbarRootContext(optional) {
	const context = import_react.useContext(ToolbarRootContext);
	if (context === void 0 && !optional) throw new Error("Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>.");
	return context;
}
var import_react, ToolbarRootContext;
function init_ToolbarRootContext() {
	return (init_ToolbarRootContext = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		ToolbarRootContext = /*#__PURE__*/ import_react.createContext(void 0);
		ToolbarRootContext.displayName = "ToolbarRootContext";
	})))();
}
//#endregion
export { useToolbarRootContext as n, init_ToolbarRootContext as t };
