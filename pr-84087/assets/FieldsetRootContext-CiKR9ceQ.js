import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
//#region ../node_modules/.store/@base-ui/react@1.8.0-AmwqKTN4N3wuPkzw6LPphA/node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs
function useFieldsetRootContext(optional = false) {
	const context = import_react.useContext(FieldsetRootContext);
	if (!context && !optional) throw new Error("Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>.");
	return context;
}
var import_react, FieldsetRootContext;
function init_FieldsetRootContext() {
	return (init_FieldsetRootContext = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		FieldsetRootContext = /*#__PURE__*/ import_react.createContext(void 0);
		FieldsetRootContext.displayName = "FieldsetRootContext";
	})))();
}
//#endregion
export { init_FieldsetRootContext as n, useFieldsetRootContext as r, FieldsetRootContext as t };
