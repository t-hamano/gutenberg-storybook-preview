import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
//#region ../node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/field/item/FieldItemContext.mjs
function useFieldItemContext() {
	return import_react.useContext(FieldItemContext);
}
var import_react, FieldItemContext;
function init_FieldItemContext() {
	return (init_FieldItemContext = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		FieldItemContext = /*#__PURE__*/ import_react.createContext({ disabled: false });
		FieldItemContext.displayName = "FieldItemContext";
	})))();
}
//#endregion
export { init_FieldItemContext as n, useFieldItemContext as r, FieldItemContext as t };
