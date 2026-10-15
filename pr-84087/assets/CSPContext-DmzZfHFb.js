import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/internals/csp-context/CSPContext.mjs
function useCSPContext() {
	return import_react.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}
var import_react, CSPContext, DEFAULT_CSP_CONTEXT_VALUE;
function init_CSPContext() {
	return (init_CSPContext = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		CSPContext = /*#__PURE__*/ import_react.createContext(void 0);
		CSPContext.displayName = "CSPContext";
		DEFAULT_CSP_CONTEXT_VALUE = { disableStyleElements: false };
	})))();
}
//#endregion
export { useCSPContext as n, init_CSPContext as t };
